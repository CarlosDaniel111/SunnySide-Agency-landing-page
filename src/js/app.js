const barra = document.querySelector('.header__barra');
const navegacion = document.querySelector('.header__navegacion');

barra.addEventListener('click', () => {
    navegacion.classList.toggle('header__toggle');
});