document.addEventListener("DOMContentLoaded", () => {
    const scrollToTopButton = document.getElementById('btn-ir-arriba');

    const scrollToDestacados = document.getElementById('to-destacados');
    const scrollToActor = document.getElementById('to-actor');
    const scrollToAwards = document.getElementById('to-awards');
    const scrollToTop = document.getElementById('to-top');


    const toDestacados = document.getElementById('destacados-title');
    const toActor = document.getElementById('actor-title');
    const toAwards = document.getElementById('awards-title');
    const toTop = document.getElementById('top-title');
    const toForm = document.getElementById('form-title');

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

    const scrollToBottom = document.getElementById("contacto");

    scrollToBottom.addEventListener('click', () => {
        const y = getOffset(toForm).top;
        window.scrollTo({
            top: y-135,
            behavior: "smooth"
        })
    });

    scrollToDestacados.addEventListener('click', () => {
        const y = getOffset(toDestacados).top;
        window.scrollTo({
            top: y-90,
            behavior: "smooth"
        });
    });
    scrollToActor.addEventListener('click', () => {
        const y = getOffset(toActor).top;
        window.scrollTo({
            top: y-90,
            behavior: "smooth"
        });
    });
    scrollToAwards.addEventListener('click', () => {
        const y = getOffset(toAwards).top;
        window.scrollTo({
            top: y-90,
            behavior: "smooth"
        });
    });
    scrollToTop.addEventListener('click', () => {
        const y = getOffset(toTop).top;
        window.scrollTo({
            top: y-90,
            behavior: "smooth"
        });
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