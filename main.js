
ScrollReveal().reveal('.presentacion__container',{ delay: 200 });
ScrollReveal().reveal('.portafolio',{ delay: 400 });
ScrollReveal().reveal('.about',{ delay: 400 });
ScrollReveal().reveal('.contact-section',{ delay: 400 });
ScrollReveal().reveal('.footer',{ delay: 400 });

const nav = document.querySelector('.cabecera');
window.addEventListener('scroll',function(){
    nav.classList.toggle('active',window.scrollY > 0)
}
) 