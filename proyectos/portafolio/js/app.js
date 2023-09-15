document.addEventListener("DOMContentLoaded", () => {
    const scrollToTopButton = document.getElementById('btn-ir-arriba');

    const scrollToProyectos = document.getElementById('to-proyectos');
    const scrollToLenguaje = document.getElementById('to-lenguajes');
    const scrollToAbout = document.getElementById('to-acerca-de');
    const scrollToContacto = document.getElementById('to-contacto');


    const toProyectos = document.getElementById('proyectos-title');
    const toLenguaje = document.getElementById('lenguajes-title');
    const toAbout= document.getElementById('acerca-de-title');
    const toContacto = document.getElementById('contacto-title');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });

    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    });

    scrollToProyectos.addEventListener('click', () => {
        navBarLinks();
        const y = getOffset(toProyectos).top;
        window.scrollTo({
            top: y - 130,
            behavior: "smooth"
        });
    });
    scrollToLenguaje.addEventListener('click', () => {
        navBarLinks();
        const y = getOffset(toLenguaje).top;
        window.scrollTo({
            top: y - 130,
            behavior: "smooth"
        });
    });
    scrollToAbout.addEventListener('click', () => {
        navBarLinks();
        const y = getOffset(toAbout).top;
        window.scrollTo({
            top: y - 130,
            behavior: "smooth"
        });
    });
    scrollToContacto.addEventListener('click', () => {
        navBarLinks();
        const y = getOffset(toContacto).top;
        window.scrollTo({
            top: y - 130,
            behavior: "smooth"
        });
    });

    const menuButton = document.getElementById('main-menu');
    menuButton.addEventListener('click', () => {
        document.body.classList.toggle('visible-menu');
    });

});
/**
 * Recibe un H1 Tag y regresa un objeto
 * @param {HTMLTitleElement} el Elemento H1 de HTML
 * @returns {{top:number,left:number}}
 */
function getOffset(el) {
    var _x = 0;
    var _y = 0;
    while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return { top: _y, left: _x };
}
/**
 * Funcion tomada de https://www.delftstack.com/es/howto/javascript/get-position-of-element-in-javascript/
 */

function navBarLinks(){
    if (window.innerWidth<=720) {
        document.body.classList.toggle('visible-menu');
    }
}