const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuBurger = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const body = document.querySelector('body');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

//Desktop menu
menuEmail.addEventListener('click', ()=>{
    //esta linea lo que hace es borrar esta clase o ponerla
    //dentro de la clase desktop-menu para eso sirve el "toggle"
    desktopMenu.classList.toggle('inactive');
});

//desktopMenu.contains(event.target): Verifica si el elemento clicado (event.target) es un descendiente del desktopMenu.
//menuEmail.contains(event.target): Verifica si el elemento clicado (event.target) es un descendiente de menuEmail.
//event.target: Referencia al elemento que originalmente disparó el evento. 
body.addEventListener('click', (event) => {
    if (!desktopMenu.contains(event.target) && !menuEmail.contains(event.target)) {
        desktopMenu.classList.add('inactive');
    }
});

/* Esta línea llama al método stopPropagation del objeto event. 
El propósito de stopPropagation es evitar que el evento se propague hacia arriba en la cadena del DOM.
En el contexto de los eventos del DOM, la "propagación" significa que el evento, después de ser manejado 
por el elemento donde ocurrió, se "propaga" o se mueve hacia arriba en la jerarquía del DOM, 
disparando los event listeners de los elementos padres. Si no se detiene, el evento podría llegar hasta el elemento body.*/
desktopMenu.addEventListener('click', (event) => {
    // Prevenimos que el evento se propague al body y desactive el menu
    event.stopPropagation();
});

// Mobile Menu
menuBurger.addEventListener('click', ()=>{
    mobileMenu.classList.toggle('inactive');
});

body.addEventListener('click', (event) => {
    if (!mobileMenu.contains(event.target) && !menuBurger.contains(event.target)) {
        mobileMenu.classList.add('inactive');
    }
});

mobileMenu.addEventListener('click', (event) => {
    // Prevenimos que el evento se propague al body y desactive el menu
    event.stopPropagation();
});

//Carrito icon Navbar
menuCarritoIcon.addEventListener('click', ()=>{
    aside.classList.toggle('inactive');
});

body.addEventListener('click', (event) => {
    if (!aside.contains(event.target) && !menuCarritoIcon.contains(event.target)) {
        aside.classList.add('inactive');
    }
});

aside.addEventListener('click', (event) => {
    // Prevenimos que el evento se propague al body y desactive el menu
    event.stopPropagation();
});