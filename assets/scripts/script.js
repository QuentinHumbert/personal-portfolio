// Déclaration des variables
const btnMenuDeroulant = document.getElementById('btnMenuDeroulant');
const menuDeroulant = document.querySelector('nav');
const backdrop = document.getElementsByClassName('backdrop')[0];

// Déclaration des fonctions

// Déroulé du Javascript 
// Menu déroulant
btnMenuDeroulant.addEventListener('click', () => {
    menuDeroulant.style.display = 'inline'
    backdrop.style.display = 'inline';
});

