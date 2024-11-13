document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Toggle the hamburger icon to 'X'
        menuToggle.innerHTML = navMenu.classList.contains('active') ? 
            'X' : '&#9776;';
    });

    // Set current year and last modified date in the footer
    document.getElementById('year').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = document.lastModified;
});
