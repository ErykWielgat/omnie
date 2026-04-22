export const WeatherAPI = {
    async fetchForPeak(lat, lon) {
        const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
        if (!res.ok) throw new Error("Błąd połączenia API");
        const data = await res.json();
        return data.current_weather;
    },

    translateCondition(code) {
        if (code === 0) return "Czyste niebo";
        if (code > 0 && code < 4) return "Częściowe zachmurzenie";
        if (code > 50 && code < 70) return "Opady deszczu";
        if (code > 70) return "Opady śniegu";
        return "Zmiennie";
    }
};