const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');
const menuToggle = document.querySelector('.menu-toggle');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
    menuToggle.classList.toggle('active');
});
