document.getElementById("animateBtn").addEventListener("click", function() {
    const title = document.getElementById("myTitle");
    title.classList.add("visible"); // Add class to trigger the animation
});
var element = document.getElementById("myElement");
element.style.transition = "all 2s";
element.style.transform = "translateX(100px)";
