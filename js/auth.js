export const Auth = {
    // Getter sprawdzający w czasie rzeczywistym czy admin jest zalogowany
    get isAdmin() {
        return localStorage.getItem('eryk_kgp_admin') === 'true';
    },

    // Obfuskacja (zakodowane "eryś").
    // Zwykły użytkownik na GitHubie nie zobaczy hasła na pierwszy rzut oka.
    secretEncoded: "ZXJ5JUM1JTlC",

    init(onStatusChange) {
        let logoClicks = 0;
        let clickTimer;

        // Easter Egg - 3 kliknięcia w logo
        document.querySelector('.navbar-brand').addEventListener('click', (e) => {
            if(this.isAdmin) return;
            logoClicks++;
            clearTimeout(clickTimer);
            clickTimer = setTimeout(() => { logoClicks = 0; }, 1500);

            if (logoClicks >= 3) {
                e.preventDefault();
                document.getElementById('login-modal').classList.remove('hidden');
                logoClicks = 0;
            }
        });

        // Weryfikacja hasła
        document.getElementById('login-btn').addEventListener('click', () => {
            const pwd = document.getElementById('admin-password').value;
            // Kodujemy wpisane hasło i porównujemy z ukrytym kluczem
            if (btoa(encodeURIComponent(pwd)) === this.secretEncoded) {
                localStorage.setItem('eryk_kgp_admin', 'true');
                document.getElementById('login-modal').classList.add('hidden');
                document.getElementById('admin-password').value = '';
                onStatusChange(); // Odświeża cały UI (odblokowuje checkboxy)
            } else {
                alert("Odmowa dostępu. Błędny kod.");
            }
        });

        document.getElementById('login-modal').addEventListener('click', (e) => {
            if(e.target.id === 'login-modal') e.target.classList.add('hidden');
        });

        document.getElementById('logout-btn').addEventListener('click', () => {
            localStorage.removeItem('eryk_kgp_admin');
            onStatusChange(); // Odświeża cały UI (blokuje checkboxy)
        });
    }
};