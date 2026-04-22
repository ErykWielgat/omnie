import { KGP_PEAKS } from './data.js';
import { Auth } from './auth.js';
import { MapEngine } from './map.js';
import { WeatherAPI } from './weather.js';

// ==========================================
// BAZA LOKALNA (STATE)
// ==========================================
let conquered = new Set(JSON.parse(localStorage.getItem('eryk_kgp_conquered')) || []);

// ==========================================
// START APLIKACJI
// ==========================================
MapEngine.init();
Auth.init(renderUI);

// ==========================================
// GŁÓWNE OKNO - MODAL (DANE I POGODA)
// ==========================================
const modal = document.getElementById('mission-modal');

async function openDashboard(peak) {
    MapEngine.closePopups();

    // Dane statyczne z data.js
    document.getElementById('modal-name').innerText = peak.name.toUpperCase();
    document.getElementById('modal-region').innerText = peak.region.toUpperCase();
    document.getElementById('modal-desc').innerText = peak.desc;
    document.getElementById('m-height').innerText = peak.height + ' m';
    document.getElementById('m-distance').innerText = peak.stats.distance + ' km';
    document.getElementById('m-elevation').innerText = peak.stats.elevationGain + ' m';
    document.getElementById('m-time').innerText = peak.stats.time + ' h';

    // Reset loadera
    const loader = document.getElementById('weather-loading');
    const dataBox = document.getElementById('weather-data');
    loader.innerText = "Nawiązywanie połączenia...";
    loader.classList.remove('hidden');
    dataBox.classList.add('hidden');
    modal.classList.remove('hidden');

    // Pogoda z weather.js
    try {
        const w = await WeatherAPI.fetchForPeak(peak.lat, peak.lon);
        document.getElementById('w-temp').innerText = w.temperature + ' °C';
        document.getElementById('w-wind').innerText = w.windspeed + ' km/h';
        document.getElementById('w-cond').innerText = WeatherAPI.translateCondition(w.weathercode);

        loader.classList.add('hidden');
        dataBox.classList.remove('hidden');
    } catch (err) {
        loader.innerText = "Błąd łączności satelitarnej.";
    }
}

document.getElementById('close-modal').onclick = () => modal.classList.add('hidden');
modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.add('hidden'); });

// ==========================================
// ARCHIWUM I FILTROWANIE (PANEL BOCZNY)
// ==========================================
function renderUI() {
    const query = document.getElementById('db-search').value.toLowerCase();
    const sort = document.getElementById('db-sort').value;
    const filter = document.getElementById('db-filter').value;

    let list = KGP_PEAKS.filter(p => p.name.toLowerCase().includes(query) || p.region.toLowerCase().includes(query));
    if (filter === 'conquered') list = list.filter(p => conquered.has(p.id));
    if (filter === 'unconquered') list = list.filter(p => !conquered.has(p.id));

    if (sort === 'name-asc') list.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === 'height-desc') list.sort((a, b) => b.height - a.height);
    if (sort === 'height-asc') list.sort((a, b) => a.height - b.height);

    // Kiedy renderujemy listę, sprawdzamy status Auth.isAdmin
    document.getElementById('db-list').innerHTML = list.map(p => `
        <div class="db-item ${conquered.has(p.id) ? 'conquered' : ''}">
            <div>
                <strong class="peak-name text-light">${p.name}</strong><br>
                <small>${p.height}m</small>
            </div>
            <input type="checkbox" class="cyber-checkbox js-check" data-id="${p.id}" 
                ${conquered.has(p.id) ? 'checked' : ''} 
                ${!Auth.isAdmin ? 'disabled title="Zaloguj się, aby odblokować zapis"' : ''}>
        </div>`).join('');

    // Ukrywanie/Pokazywanie przycisku wylogowania
    const logoutBtn = document.getElementById('logout-btn');
    if(Auth.isAdmin) logoutBtn.classList.remove('hidden');
    else logoutBtn.classList.add('hidden');

    document.getElementById('db-conquered-count').innerText = conquered.size;
    document.getElementById('db-total-count').innerText = KGP_PEAKS.length;

    // Przekazujemy przefiltrowaną listę do renderowania na mapie
    MapEngine.renderMarkers(list, conquered, openDashboard);
}

// Obsługa zaznaczania szczytu
document.getElementById('db-list').addEventListener('change', e => {
    if (e.target.classList.contains('js-check')) {
        // Blokada po stronie logiki (gdyby ktoś usunął z checkboxa atrybut "disabled" w konsoli)
        if (!Auth.isAdmin) {
            e.target.checked = !e.target.checked;
            return;
        }
        const id = parseInt(e.target.dataset.id);
        e.target.checked ? conquered.add(id) : conquered.delete(id);
        localStorage.setItem('eryk_kgp_conquered', JSON.stringify([...conquered]));
        renderUI();
    }
});

// Eventy
document.getElementById('db-search').addEventListener('input', renderUI);
document.getElementById('db-sort').addEventListener('change', renderUI);
document.getElementById('db-filter').addEventListener('change', renderUI);

// Odpalenie panelu
renderUI();