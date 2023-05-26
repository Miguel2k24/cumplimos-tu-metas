const hamburguer = document.querySelector('.hamburger');
const menu = document.querySelector('.menu-navegacion');


//console.log(menu);
//console.log(hamburguer);

hamburguer.addEventListener('click', ()=>{
    menu.classList.toggle('spread');
});

window.addEventListener('click', e=>{
    // si el menu contiene la clase XXXXX y el evento del click no es en menu y tampoco en en hamburguer 
    if(menu.classList.contains('spread') && e.target != menu && e.target != hamburguer) {
        // entonses ejecuta el poner o quitar la clase XXXX\
        menu.classList.toggle("spread")

    }
});