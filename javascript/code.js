


window.onload = function() {
    var show = document.querySelector(".arrow-down");
    var show = document.querySelector(".more-info");
    var arrow = document.querySelector(".arrow-down");

    show.addEventListener("click", function() {

    var menu = document.querySelector(".menu");

    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }

    if (menu.style.display === "block") {
        arrow.style.transform = "rotate(180deg)";
        arrow.style.transition = "all 0.3s";
    } else {
        arrow.style.transform = "rotate(0deg)";
        arrow.style.transition = "all 0.3s";
    }
    });
 };

