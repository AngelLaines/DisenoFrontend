function hola() {
    //alert("que rico")
    console.log('pushed');
}

document.addEventListener("DOMContentLoaded", () => {
    const scrollToTopButton = document.getElementById('btn-ir-arriba');
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
});