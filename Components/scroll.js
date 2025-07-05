document.addEventListener("DOMContentLoaded", function () {
    let container = document.querySelector(".news-scroll-text");
  
    function scrollNews() {
        container.scrollTop += 1; // Moves 1px at a time for smooth scrolling

        if (container.scrollTop >= container.scrollHeight - container.clientHeight) {
            container.scrollTop = 0; // Reset to the top when reaching the end
        }
        
        requestAnimationFrame(scrollNews);
    }

    requestAnimationFrame(scrollNews);
});
