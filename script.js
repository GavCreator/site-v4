document.addEventListener("DOMContentLoaded", function(){

    // Stop Image Dragging
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('dragstart', event => event.preventDefault());
    });

    // Stop Right Clicking
    document.addEventListener('contextmenu', function(event){
        event.preventDefault();
    })

})