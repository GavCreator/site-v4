document.addEventListener("DOMContentLoaded", function() {
    /* Helpers */
    function getId(id) {
        return document.getElementById(id);
    }
    function getLS(key) {
        return localStorage.getItem(key);
    }
    function setLS(key, value) {
        localStorage.setItem(key, value);
        window.location.reload();
    }

    /* Variables */
    const DAB = getId('switch_dab');
    const DUS = getId('switch_dus');

    /* Restore state from localStorage */
    if (getLS("DisableAnimatedBackground") === "true") {
        DAB.checked = true;
    }
    if (getLS("DisableUmamiScript") === "true") {
        DUS.checked = true;
    }

    /* Event listeners */
    DAB.addEventListener("change", function() {
        if (DAB.checked) {
            setLS("DisableAnimatedBackground", "true");
        } else {
            setLS("DisableAnimatedBackground", "false");
        }
    });

    DUS.addEventListener("change", function() {
        if (DUS.checked) {
            setLS("DisableUmamiScript", "true");
        } else {
            setLS("DisableUmamiScript", "false");
        }
    });

    // Sync checkbox state with localStorage
    if (DAB && localStorage.getItem("DisableAnimatedBackground") === "true") {
        DAB.checked = true;
    }

    if (DUS && localStorage.getItem("DisableUmamiScript") === "true") {
        DUS.checked = true;
    }
});