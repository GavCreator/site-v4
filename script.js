document.addEventListener("DOMContentLoaded", function(){

    /* -------------------------------------------------------------------------- */
    /*                              Special Functions                             */
    /* -------------------------------------------------------------------------- */

    // Check for Local Storage Variables
    function initLS(key, defaultValue) {
        if (localStorage.getItem(key) === null) {
            localStorage.setItem(key, defaultValue);
        }
    }

    /* -------------------------------------------------------------------------- */
    /*                           Prevention Measurements                          */
    /* -------------------------------------------------------------------------- */

    // Stop Image Dragging
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('dragstart', event => event.preventDefault());
    });

    // Stop Right Clicking
    document.addEventListener('contextmenu', function(event){
        event.preventDefault();
    })

    /* -------------------------------------------------------------------------- */
    /*                              Settings Scripts                              */
    /* -------------------------------------------------------------------------- */

    // If Settings Dont Exist, Set Them To False
    initLS("DisableAnimatedBackground", "false");
    initLS("DisableUmamiScript", "false");

    // Load Conditioner For Umami
    if (localStorage.getItem("DisableUmamiScript") !== "true") {
        const umamiScript = document.createElement("script");
        umamiScript.src = "https://cloud.umami.is/script.js";
        umamiScript.defer = true;
        umamiScript.setAttribute("data-website-id", "faa71c6d-0bc6-4fe4-965e-e5a66b0af8d9");
        document.head.appendChild(umamiScript);
    } else {
        console.log("Umami script disabled by user");
    }

    /* -------------------------------------------------------------------------- */
    /*                            Special Event Scripts                           */
    /* -------------------------------------------------------------------------- */

    // "Hey, Its Gav!" Script
    const el = document.getElementById("hingeanim");
    
    if (el) {
        el.addEventListener("mouseenter", () => {
            // Add hinge animation
            el.classList.add("animate__animated", "animate__hinge");
            localStorage.setItem("secret4", "true");

            // After 2s -> hide it
            setTimeout(() => {
            el.style.visibility = "hidden";
            }, 2000);

            // After 4 more seconds -> show and remove class
            setTimeout(() => {
            el.style.visibility = "visible"; // show again
            el.classList.remove("animate__animated", "animate__hinge");
            }, 6000);
        });
    }

    // "Program & Developer" Script
    const unel = document.getElementById("unhingeanim");
    
    if (unel) {
        unel.addEventListener("mouseenter", () => {
            // Add hinge animation
            unel.classList.add("animate__animated", "anim__unhinge");
            localStorage.setItem("secret2", "true");

            // After 2s -> hide it
            setTimeout(() => {
            unel.style.visibility = "hidden";
            }, 2000);

            // After 4 more seconds -> show and remove class
            setTimeout(() => {
            unel.style.visibility = "visible"; // show again
            unel.classList.remove("animate__animated", "anim__unhinge");
            }, 6000);
        });
    }

    // Newfies Icon Script
    const spinImg = document.getElementById("spinImg");

    if (spinImg){
        function getCurrentRotationDeg(el) {
        const t = getComputedStyle(el).transform;
        if (!t || t === "none") return 0;

        // Handles 'matrix(a,b,c,d,e,f)'; for matrix3d you'd parse indices 0 & 1 similarly.
        const m = t.match(/matrix\(([^)]+)\)/);
        if (!m) return 0;
        const vals = m[1].split(",").map(v => parseFloat(v.trim()));
        const a = vals[0], b = vals[1];
        let deg = Math.atan2(b, a) * (180 / Math.PI);

        // Normalize to [-180, 180] so the reset takes the shortest path
        if (deg > 180) deg -= 360;
        if (deg < -180) deg += 360;
        return deg;
        }

        spinImg.addEventListener("mouseenter", () => {
        // Cancel any in-progress reset transition and start spinning
        spinImg.style.transition = "none";
        spinImg.style.transform = "rotate(0deg)";
        spinImg.getBoundingClientRect(); // force reflow
        spinImg.classList.add("spin");
        });

        spinImg.addEventListener("mouseleave", () => {
        // Read the *animated* current angle first
        const angle = getCurrentRotationDeg(spinImg);

        // Stop the animation
        spinImg.classList.remove("spin");

        // Freeze at the current angle
        spinImg.style.transition = "none";
        spinImg.style.transform = `rotate(${angle}deg)`;
        spinImg.getBoundingClientRect(); // force reflow so the next change transitions

        // Now smoothly reset to 0deg
        spinImg.style.transition = "transform 0.6s ease";
        spinImg.style.transform = "rotate(0deg)";

        // Cleanup transition after it ends
        const cleanup = () => {
            spinImg.style.transition = "";
            spinImg.removeEventListener("transitionend", cleanup);
            localStorage.setItem("secret1", "true");
        };
            spinImg.addEventListener("transitionend", cleanup);
        });
    }

    // Cheat Code Script
    const pattern = [
        "ArrowUp", "ArrowUp",
        "ArrowDown", "ArrowDown",
        "ArrowLeft", "ArrowRight",
        "ArrowLeft", "ArrowRight",
        "b", "a", "Enter",
    ];

    let current = 0;
    const wrapper = document.getElementById("pp-wrapper");
    const video = document.getElementById("pp");

    document.addEventListener("keydown", (e) => {
        if (e.key === pattern[current]) {
            current++;
            if (current === pattern.length) {
            wrapper.classList.add("animate__rollIn");
            video.play();
                localStorage.setItem("secret3", "true");

            video.addEventListener("ended", () => {
                video.pause();
                wrapper.classList.remove("animate__rollIn");
                wrapper.classList.add("animate__rollOut");

                setTimeout(() => {
                wrapper.classList.remove("animate__rollOut");
                wrapper.style.visibility = "hidden";
                }, 500);
            }, { once: true });

            current = 0;
            }
        } else {
            current = 0;
        }
    });

    // Boykisser Script
    const wrapper2 = document.getElementById("pp2-wrapper");
    const video2 = document.getElementById("pp2");
    const bk = document.getElementById("bkiss");
    
    bk.addEventListener('click', function(){
        wrapper2.classList.add("animate__rollIn");
            video2.play();
                localStorage.setItem("secret5", "true");

            video2.addEventListener("ended", () => {
                video2.pause();
                wrapper2.classList.remove("animate__rollIn");
                wrapper2.classList.add("animate__rollOut");

                setTimeout(() => {
                wrapper2.classList.remove("animate__rollOut");
                wrapper2.style.visibility = "hidden";
                }, 500);
            }, { once: true });
    })

    // We Dont Know Script
    const circlecontainer = document.getElementById("smallcirclegone");
    const circle = document.getElementById("circle");
    const eldesc = document.getElementById("circlechange");
    const elicon = document.getElementById("circleicon");

    circlecontainer.addEventListener("dblclick", function(){
        el.textContent = "Secrets, Many Secrets!";
        eldesc.innerHTML = "<p>How many secrets are there?</p>";
        elicon.src = "res/circle.gif";
        localStorage.setItem("secret6", "true");
    })

    /* -------------------------------------------------------------------------- */
    /*                               Detection Based                              */
    /* -------------------------------------------------------------------------- */

    // Mobile Alert Detection Script
    const isMobile = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);

    if (isMobile) {
        const seenAlert = localStorage.getItem("SeenMobileAlert");

        if (seenAlert !== "true") {
            alert("Warning: This site was designed for desktop users. A mobile version generated with AI is available, but some features may not work correctly.");  // show alert
            localStorage.setItem("SeenMobileAlert", "true"); // mark as seen
        }
    }

    /* -------------------------------------------------------------------------- */
    /*                                   Loader                                   */
    /* -------------------------------------------------------------------------- */

    // Quote Generator and Loader
    const quote = document.getElementById("loadimg");
    const quoterng = Math.floor(Math.random() * 100000);

    if (quote){
        quote.setAttribute('src', `https://raw.githubusercontent.com/Newfies/Newfies/refs/heads/main/res/quote.png?${quoterng}`)
    }
})