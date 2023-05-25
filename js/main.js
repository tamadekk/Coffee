window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('nav .menu'),
    menuItem = document.querySelectorAll('nav .menu_item'),
    hamburger = document.querySelector('nav .hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        menu.classList.toggle('active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            menu.classList.toggle('active');
        })
    })
})


const button = document.getElementById('button_action');
const section = document.getElementById('section_info');
button.addEventListener('click', () => {
    section.scrollIntoView({ behavior: 'smooth' });
  });