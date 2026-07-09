const Router = {
    route(target) {
        console.log("CORE_ROUTER:", target);

        switch(target) {
            case 'scan':
                console.log("Scan-Hub aktivieren");
                break;

            case 'ui':
                console.log("UI-Status aktualisieren");
                break;

            case 'axi':
                console.log("AXI-Link prüfen");
                break;

            default:
                console.log("Unbekanntes Ziel:", target);
        }
    },

    reportUI(count) {
        console.log("UI-SCANNER meldet:", count, "Elemente");
    }
};
