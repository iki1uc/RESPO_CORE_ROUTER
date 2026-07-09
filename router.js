const Router = {
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
