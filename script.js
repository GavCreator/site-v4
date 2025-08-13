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

    YouTube.addEventListener('click', function(){
        window.open("https://youtube.com/@GvNx");
    })

    Twitch.addEventListener('click', function(){
        window.open("https://twitch.tv/SimplyGav");
    })

    Patreon.addEventListener('click', function(){
        window.open("https://patreon.com/GvNx");
    })

    Discord.addEventListener('click', function(){
        window.open("https://dsc.gg/simplygav");
    })

})