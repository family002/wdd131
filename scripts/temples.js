document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;

document.addEventListener("DOMContentLoaded", function() {
    var currentYear = new Date().getFullYear();
    document.getElementById("currentyear").innerText = currentYear;

    var lastModified = document.lastModified;
    document.getElementById("lastModified").innerText = "Last Modified: " + lastModified;

    var hamburger = document.getElementById("hamburger");
    var nav = document.querySelector("nav ul");

    hamburger.addEventListener("click", function() {
        nav.classList.toggle("show");
    });
});