export const MapEngine = {
    map: null,
    markerGroup: null,

    init() {
        this.map = L.map('map', { zoomControl: false }).setView([52.0, 19.0], 6);
        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; CARTO'
        }).addTo(this.map);
        this.markerGroup = L.layerGroup().addTo(this.map);
    },

    renderMarkers(filteredPeaks, conqueredSet, onMarkerClick) {
        this.markerGroup.clearLayers();
        filteredPeaks.forEach(p => {
            const isDone = conqueredSet.has(p.id);
            const icon = L.divIcon({ className: isDone ? 'cyber-marker conquered-marker' : 'cyber-marker' });

            L.marker([p.lat, p.lon], { icon: icon }).addTo(this.markerGroup)
                .bindTooltip(`<strong>${p.name.toUpperCase()}</strong><br><small>${p.height} m n.p.m.</small>`, {
                    direction: 'top', className: 'cyber-tooltip', offset: [0, -10]
                })
                .on('click', () => onMarkerClick(p));
        });
    },

    closePopups() {
        this.map.closePopup();
    }
};