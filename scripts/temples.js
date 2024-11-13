// Set footer year and last modified date
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Hamburger menu toggle
document.getElementById("hamburger").addEventListener("click", function() {
    const menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
    this.textContent = menu.style.display === "flex" ? 'X' : '\u2630';
});
