// ─────────────────────────────────────────────
// RESPO_CORE_ROUTER – NEUE VERSION
// Vollständig repariert, global, stabil, iframe‑fähig
// ─────────────────────────────────────────────

// 1) Module global machen
window.RESPO_ARG_SCAN = window.RESPO_ARG_SCAN || { 
    run() { console.log("Argument-Scan läuft…"); }
};

window.RESPO_AXI_LINK = window.RESPO_AXI_LINK || { 
    check() { console.log("AXI-Link geprüft."); }
};

window.RESPO_MULTI_NORM = window.RESPO_MULTI_NORM || { 
    validate() { console.log("Multi-Norm validiert."); }
};

window.RESPO_POSITION_USER = window.RESPO_POSITION_USER || { 
    update() { console.log("User-Position aktualisiert."); }
};

window.RESPO_ROTATION = window.RESPO_ROTATION || { 
    rotate() { console.log("Rotation ausgeführt."); }
};

window.RESPO_SCAN_HUB = window.RESPO_SCAN_HUB || { 
    run() { console.log("Scan-Hub aktiv."); }
};

// 2) Fehlendes Modul RESPO_UI_STATUS hinzufügen
window.RESPO_UI_STATUS = window.RESPO_UI_STATUS || {
    update() {
        console.log("UI‑Status aktualisiert.");
        console.log("UI stabil.");
    }
};

// 3) Router global machen
window.Router = {
    route(target) {
        console.log("CORE_ROUTER:", target);

        switch(target) {
            case 'scan':
                RESPO_SCAN_HUB.run();
                break;

            case 'ui':
                RESPO_UI_STATUS.update();
                break;

            case 'axi':
                RESPO_AXI_LINK.check();
                break;

            case 'arg':
                RESPO_ARG_SCAN.run();
                break;

            case 'pos':
                RESPO_POSITION_USER.update();
                break;

            case 'rot':
                RESPO_ROTATION.rotate();
                break;

            case 'norm':
                RESPO_MULTI_NORM.validate();
                break;

            default:
                console.log("Unbekanntes Ziel:", target);
        }
    },

    reportUI(count) {
        console.log("UI-SCANNER meldet:", count, "Elemente");
    }
};

// 4) Aktivierung
console.log("RESPO_CORE_ROUTER aktiv – Master bereit.");
