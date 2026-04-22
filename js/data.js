// Baza danych wszystkich 28 szczytów Korony Gór Polski (KGP)
export const KGP_PEAKS = [
    {
        id: 1, name: "Rysy", region: "Tatry", height: 2499, lat: 49.1793, lon: 20.0881,
        desc: "Najwyższy szczyt Polski. Wymagająca kondycyjnie i technicznie trasa z pięknymi widokami na Morskie Oko.",
        stats: { distance: 12.5, elevationGain: 1100, time: "8-9" },
        gear: ["Kask", "Raki", "Dobre buty", "Czołówka"]
    },
    {
        id: 2, name: "Babia Góra", region: "Beskid Żywiecki", height: 1725, lat: 49.5733, lon: 19.5303,
        desc: "Królowa Beskidów, znana z bardzo kapryśnej i zmiennej pogody oraz porywistych wiatrów na szczycie.",
        stats: { distance: 14.0, elevationGain: 850, time: "5-6" },
        gear: ["Kurtka Gore-Tex", "Rękawiczki", "Termos"]
    },
    {
        id: 3, name: "Śnieżka", region: "Karkonosze", height: 1603, lat: 50.7360, lon: 15.7402,
        desc: "Najwyższy szczyt Karkonoszy. Bardzo popularny, z charakterystycznym spodkiem (obserwatorium) na samej górze.",
        stats: { distance: 13.5, elevationGain: 800, time: "4-5" },
        gear: ["Kije trekkingowe", "Wiatrówka", "Gotówka (Czechy/PL)"]
    },
    {
        id: 4, name: "Śnieżnik", region: "Masyw Śnieżnika", height: 1423, lat: 50.2070, lon: 16.8491,
        desc: "Dominant Sudetów Wschodnich, rozległa kopuła szczytowa oferująca świetne panoramy.",
        stats: { distance: 15.0, elevationGain: 700, time: "5-6" },
        gear: ["Mapa", "Ciepła warstwa", "Zapas wody"]
    },
    {
        id: 5, name: "Tarnica", region: "Bieszczady", height: 1346, lat: 49.0747, lon: 22.7119,
        desc: "Najwyższy szczyt Bieszczadów. Trasa pełna połonin i niesamowitych przestrzeni.",
        stats: { distance: 12.0, elevationGain: 650, time: "4-5" },
        gear: ["Wygodne buty", "Krem z filtrem"]
    },
    {
        id: 6, name: "Turbacz", region: "Gorce", height: 1310, lat: 49.5431, lon: 20.1114,
        desc: "Centralny węzeł szlaków w Gorcach, z dużym i popularnym schroniskiem pod szczytem.",
        stats: { distance: 16.0, elevationGain: 700, time: "5-6" },
        gear: ["Lekki plecak", "Aparat", "Gotówka"]
    },
    {
        id: 7, name: "Radziejowa", region: "Beskid Sądecki", height: 1266, lat: 49.4497, lon: 20.6033,
        desc: "Najwyższy szczyt Beskidu Sądeckiego, na którym znajduje się charakterystyczna wieża widokowa.",
        stats: { distance: 14.5, elevationGain: 800, time: "5-6" },
        gear: ["Czołówka", "Zapas jedzenia", "Mapa"]
    },
    {
        id: 8, name: "Skrzyczne", region: "Beskid Śląski", height: 1257, lat: 49.6844, lon: 19.0303,
        desc: "Góra z charakterystycznym masztem nadajnika RTV. Zimą mekka narciarzy, latem raj dla piechurów i rowerzystów.",
        stats: { distance: 11.0, elevationGain: 750, time: "4-5" },
        gear: ["Kije trekkingowe", "Wiatrówka"]
    },
    {
        id: 9, name: "Mogielica", region: "Beskid Wyspowy", height: 1170, lat: 49.6550, lon: 20.2764,
        desc: "Najwyższy punkt Beskidu Wyspowego, z nową wieżą widokową oferującą kapitalne widoki na Tatry.",
        stats: { distance: 9.0, elevationGain: 500, time: "3-4" },
        gear: ["Aparat fotograficzny", "Ciepła bluza"]
    },
    {
        id: 10, name: "Wysoka Kopa", region: "Góry Izerskie", height: 1126, lat: 50.8500, lon: 15.4200,
        desc: "Najwyższe wzniesienie Gór Izerskich, łagodne podejścia, często zalesione lub pokryte torfowiskami.",
        stats: { distance: 10.0, elevationGain: 350, time: "3-4" },
        gear: ["Buty wodoodporne", "Mapa"]
    },
    {
        id: 11, name: "Rudawiec", region: "Góry Bialskie", height: 1106, lat: 50.2442, lon: 16.9767,
        desc: "Trzeci pod względem wysokości szczyt Masywu Śnieżnika, leżący w Górach Bialskich, o zalesionym wierzchołku.",
        stats: { distance: 13.0, elevationGain: 550, time: "4-5" },
        gear: ["Repelent na owady", "Kompas"]
    },
    {
        id: 12, name: "Orlica", region: "Góry Orlickie", height: 1084, lat: 50.3533, lon: 16.3614,
        desc: "Najwyższy szczyt polskiej części Gór Orlickich z nową wieżą widokową, wznoszący się nad Zieleńcem.",
        stats: { distance: 6.0, elevationGain: 200, time: "2-3" },
        gear: ["Wygodne obuwie", "Aparat"]
    },
    {
        id: 13, name: "Wysoka", region: "Pieniny", height: 1050, lat: 49.3803, lon: 20.5517,
        desc: "Najwyższy szczyt Pienin (Małe Pieniny), strome, ale krótkie wejście nagrodzone piękną panoramą.",
        stats: { distance: 8.0, elevationGain: 450, time: "3-4" },
        gear: ["Dobre buty", "Kije trekkingowe"]
    },
    {
        id: 14, name: "Wielka Sowa", region: "Góry Sowie", height: 1015, lat: 50.6800, lon: 16.4853,
        desc: "Zwieńczona murowaną, kamienną wieżą widokową. Najwyższy szczyt Gór Sowich, owiany licznymi tajemnicami regionu.",
        stats: { distance: 7.5, elevationGain: 300, time: "2-3" },
        gear: ["Czołówka", "Gotówka na wieżę"]
    },
    {
        id: 15, name: "Lackowa", region: "Beskid Niski", height: 997, lat: 49.4283, lon: 21.0964,
        desc: "Słynna 'ściana płaczu' w zachodnim Beskidzie Niskim. Najbardziej strome podejście w całych Beskidach Zachodnich.",
        stats: { distance: 10.0, elevationGain: 600, time: "4-5" },
        gear: ["Dobre buty z bieżnikiem", "Kije trekkingowe"]
    },
    {
        id: 16, name: "Kowadło", region: "Góry Złote", height: 989, lat: 50.2642, lon: 17.0131,
        desc: "Szczyt graniczny z Czechami. Krótkie podejście i świetny punkt widokowy po czeskiej stronie.",
        stats: { distance: 5.0, elevationGain: 250, time: "2 h" },
        gear: ["Woda", "Przekąski"]
    },
    {
        id: 17, name: "Jagodna", region: "Góry Bystrzyckie", height: 977, lat: 50.2522, lon: 16.5772,
        desc: "Dość płaska góra, idealna na wyprawy rowerowe lub biegówki. Na szczycie wieża widokowa.",
        stats: { distance: 9.0, elevationGain: 200, time: "2-3" },
        gear: ["Rower/Narty", "Wiatrówka"]
    },
    {
        id: 18, name: "Skalnik", region: "Rudawy Janowickie", height: 945, lat: 50.8081, lon: 15.9000,
        desc: "Najwyższy szczyt Rudaw Janowickich, sam szczyt jest zalesiony, ale pobliska 'Ostra Mała' to super punkt widokowy.",
        stats: { distance: 8.0, elevationGain: 400, time: "3 h" },
        gear: ["Aparat", "Lekki plecak"]
    },
    {
        id: 19, name: "Waligóra", region: "Góry Kamienne", height: 936, lat: 50.6833, lon: 16.2833,
        desc: "Mimo niewielkiej wysokości, bardzo strome podejście spod schroniska Andrzejówka.",
        stats: { distance: 4.0, elevationGain: 250, time: "1-2" },
        gear: ["Kije trekkingowe", "Dobre buty"]
    },
    {
        id: 20, name: "Czupel", region: "Beskid Mały", height: 930, lat: 49.7656, lon: 19.1603,
        desc: "Zalesiony szczyt Beskidu Małego. Piękne lasy bukowe i łagodne podejścia.",
        stats: { distance: 11.0, elevationGain: 550, time: "3-4" },
        gear: ["Mapa", "Zapas wody"]
    },
    {
        id: 21, name: "Szczeliniec Wielki", region: "Góry Stołowe", height: 919, lat: 50.4828, lon: 16.3314,
        desc: "Niesamowity labirynt skalny. Trasa technicznie łatwa, ale pełna schodów i wąskich przejść.",
        stats: { distance: 3.5, elevationGain: 150, time: "1-2" },
        gear: ["Wygodne obuwie", "Aparat", "Gotówka na bilet"]
    },
    {
        id: 22, name: "Lubomir", region: "Beskid Makowski", height: 904, lat: 49.7667, lon: 20.0594,
        desc: "Na szczycie znajduje się obserwatorium astronomiczne. Miejsce o bogatej historii partyzanckiej.",
        stats: { distance: 8.0, elevationGain: 400, time: "2-3" },
        gear: ["Ciepła warstwa", "Mapa"]
    },
    {
        id: 23, name: "Biskupia Kopa", region: "Góry Opawskie", height: 890, lat: 50.2561, lon: 17.4228,
        desc: "Graniczny szczyt z Czechami z piękną, starą wieżą widokową w kształcie walca.",
        stats: { distance: 10.0, elevationGain: 500, time: "3-4" },
        gear: ["Gotówka (Korony)", "Aparat"]
    },
    {
        id: 24, name: "Chełmiec", region: "Góry Wałbrzyskie", height: 850, lat: 50.7806, lon: 16.2111,
        desc: "Góra w kształcie stożka górująca nad Wałbrzychem, często bywa wietrznie.",
        stats: { distance: 9.0, elevationGain: 400, time: "3 h" },
        gear: ["Kurtka wiatrowa"]
    },
    {
        id: 25, name: "Kłodzka Góra", region: "Góry Bardzkie", height: 765, lat: 50.4522, lon: 16.7533,
        desc: "Najwyższy punkt Gór Bardzkich (według KGP). Nowa wieża widokowa rekompensuje zalesiony szczyt.",
        stats: { distance: 7.0, elevationGain: 350, time: "2-3" },
        gear: ["Wygodne buty"]
    },
    {
        id: 26, name: "Skopiec", region: "Góry Kaczawskie", height: 724, lat: 50.9444, lon: 15.8856,
        desc: "Krótkie i łagodne podejście. W pobliżu znajduje się charakterystyczne drzewo z wiszącymi butami turystów.",
        stats: { distance: 3.0, elevationGain: 100, time: "1 h" },
        gear: ["Stare buty do powieszenia :)"]
    },
    {
        id: 27, name: "Ślęża", region: "Masyw Ślęży", height: 718, lat: 50.8650, lon: 16.7086,
        desc: "Mityczna święta góra Słowian, samotnie wyrastająca z Równiny Wrocławskiej.",
        stats: { distance: 8.0, elevationGain: 500, time: "3 h" },
        gear: ["Kije trekkingowe", "Zapas wody"]
    },
    {
        id: 28, name: "Łysica", region: "Góry Świętokrzyskie", height: 614, lat: 50.8906, lon: 20.9017,
        desc: "Najniższy szczyt KGP. Słynie z unikalnych gołoborzy (rumowisk skalnych) i puszczy jodłowej.",
        stats: { distance: 4.5, elevationGain: 300, time: "1-2" },
        gear: ["Wygodne buty (śliskie kamienie)"]
    }
];