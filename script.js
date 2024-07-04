const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuBurger = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const body = document.querySelector('body');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

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

//produc List

const productList = [];
productList.push({
    name: 'Bike',
    price: 120.00,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Computadora',
    price: 200.00,
    image: 'https://cdn.pixabay.com/photo/2023/11/16/09/45/quantum-8392053_1280.jpg',
});

productList.push({
    name: 'Television',
    price: 150.00,
    image: 'https://cdn.pixabay.com/photo/2016/11/30/08/46/living-room-1872192_1280.jpg',
});

productList.push({
    name: 'Xbox Controller deluxe',
    price: 35.00,
    image: 'https://cdn.pixabay.com/photo/2023/08/30/14/51/xbox-8223478_960_720.jpg',
});

productList.push({
    name: 'xbox control',
    price: 22.00,
    image: 'https://cdn.pixabay.com/photo/2024/05/24/16/40/ai-generated-8785420_1280.jpg',
});

productList.push({
    name: 'Sony control',
    price: 20.00,
    image: 'https://cdn.pixabay.com/photo/2024/05/24/16/40/ai-generated-8785422_1280.jpg',
});

function renderProducts(arr){
    for(product of arr) {
        const productCard= document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
         
        const productInfoDiv = document.createElement('div');
        
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        
        const productName = document.createElement('p');
        productName.innerText = product.name;
           
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productCard.append(productImg, productInfo);
        productInfo.append(productInfoDiv, productInfoFigure);
        productInfoDiv.append(productPrice, productName);
        productInfoFigure.append(productImgCart);
    
        cardsContainer.appendChild(productCard);
    };
};

renderProducts(productList);
