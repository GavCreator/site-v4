document.addEventListener("DOMContentLoaded", function(){

    // Stop Image Dragging
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('dragstart', event => event.preventDefault());
    });

    // Stop Right Clicking
    document.addEventListener('contextmenu', function(event){
        event.preventDefault();
    })

    const YouTube = document.getElementById('youtube');
    const Twitch = document.getElementById('twitch');
    const Patreon = document.getElementById('patreon');
    const Discord = document.getElementById('discord');

    if (YouTube){
    YouTube.addEventListener('click', function(){
        window.open("https://youtube.com/@GvNx");
    })
    }
    
    if (Twitch){
    Twitch.addEventListener('click', function(){
        window.open("https://twitch.tv/SimplyGav");
    })
    }

    if (Patreon){
    Patreon.addEventListener('click', function(){
        window.open("https://patreon.com/GvNx");
    })
    }

    if (Discord){
    Discord.addEventListener('click', function(){
        window.open("https://dsc.gg/simplygav");
    })
    }

    // Check for Local Storage Variables
    function initLS(key, defaultValue) {
        if (localStorage.getItem(key) === null) {
            localStorage.setItem(key, defaultValue);
        }
    }

    // Initialize defaults
    initLS("DisableAnimatedBackground", "false");
    initLS("DisableUmamiScript", "false");

    // Load Umami
    if (localStorage.getItem("DisableUmamiScript") !== "true") {
        const umamiScript = document.createElement("script");
        umamiScript.src = "https://cloud.umami.is/script.js";
        umamiScript.defer = true;
        umamiScript.setAttribute("data-website-id", "faa71c6d-0bc6-4fe4-965e-e5a66b0af8d9");
        document.head.appendChild(umamiScript);
    } else {
        console.log("Umami script disabled by user");
    }

    // Warn Mobile Users
    // Detect mobile users
    const isMobile = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);

    if (isMobile) {
        // Check localStorage
        const seenAlert = localStorage.getItem("SeenMobileAlert");

        if (seenAlert !== "true") {
            alert("Warning: This site was designed for desktop users. A mobile version generated with AI is available, but some features may not work correctly.");  // show alert
            localStorage.setItem("SeenMobileAlert", "true"); // mark as seen
        }
    }

    // Hinger
    const el = document.getElementById("hingeanim");
    
    if (el) {
        el.addEventListener("mouseenter", () => {
            // Add hinge animation
            el.classList.add("animate__animated", "animate__hinge");

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
})