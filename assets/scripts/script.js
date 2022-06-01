// Déclaration des variables
const btnMenuDeroulant = document.getElementById('btnMenuDeroulant');
const menuDeroulant = document.querySelector('.menuderoulant');

// Déclaration des fonctions

// Déroulé du Javascript 
// Menu déroulant
btnMenuDeroulant.addEventListener('click', () => {
    menuDeroulant.classList.toggle('mdvisible')
});

