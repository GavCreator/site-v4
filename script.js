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

    // Secret 2
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
        };
            spinImg.addEventListener("transitionend", cleanup);
        });
    }

    // Unhinger
    const unel = document.getElementById("unhingeanim");
    
    if (unel) {
        unel.addEventListener("mouseenter", () => {
            // Add hinge animation
            unel.classList.add("animate__animated", "anim__unhinge");

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

    //img
    const quote = document.getElementById("loadimg");
    const rngrng = Math.floor(Math.random() * 100000);

    if (quote){
        quote.setAttribute('src', `https://raw.githubusercontent.com/Newfies/Newfies/refs/heads/main/res/quote.png?${rngrng}`)
    }

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


})