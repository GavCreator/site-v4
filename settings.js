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
    const DS = getId('switch_ds');
    const CLS = getId('clearls');

    /* Restore state from localStorage */
    if (getLS("DisableAnimatedBackground") === "true") {
        DAB.checked = true;
    }
    if (getLS("DisableUmamiScript") === "true") {
        DUS.checked = true;
    }
    if (getLS("DisableSecrets") === "true") {
        DS.checked = true;
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

    DS.addEventListener("change", function() {
        if (DS.checked) {
            setLS("DisableSecrets", "true");
        } else {
            setLS("DisableSecrets", "false");
        }
    }); 

    CLS.addEventListener('click', function(){
        // Clear localStorage & sessionStorage
        localStorage.clear();
        sessionStorage.clear();

        // Clear all cookies
        document.cookie.split(";").forEach(c => {
        document.cookie = c
            .replace(/^ +/, "")
            .replace(/=.*/, "=;expires=" + new Date(0).toUTCString() + ";path=/");
        });

        // Clear IndexedDB
        indexedDB.databases().then(dbs => {
        dbs.forEach(db => indexedDB.deleteDatabase(db.name));
        });

        // Clear Cache Storage
        caches.keys().then(names => {
        for (let name of names) caches.delete(name);
        });

        // Unregister Service Workers
        navigator.serviceWorker.getRegistrations().then(regs => {
        regs.forEach(reg => reg.unregister());
        });

        window.location.reload();
    })

    // Sync checkbox state with localStorage
    if (DAB && localStorage.getItem("DisableAnimatedBackground") === "true") {
        DAB.checked = true;
    }

    if (DUS && localStorage.getItem("DisableUmamiScript") === "true") {
        DUS.checked = true;
    }
});