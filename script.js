const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', ()=>{
    //esta linea lo que hace es borrar esta clase o ponerla
    //dentro de la clase desktop-menu para eso sirve el "toggle"
    desktopMenu.classList.toggle('inactive');
});