/******************** NAV BAR **************************/

 // Espera a que el DOM esté completamente cargado
 document.addEventListener("DOMContentLoaded", function () {
  // Obtiene la referencia a la caja de enlaces del menú
  const navLinks = document.querySelectorAll(".item-nav");

  // Agrega un evento click a cada enlace del menú
  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      // Previene el comportamiento predeterminado del enlace
      event.preventDefault();

      // Obtiene el atributo data-target para saber a qué sección desplazarse
      const target = link.getAttribute("data-target");

      // Obtiene la referencia a la sección a la que se desplazará
      const targetElement = document.querySelector(target);

      // Define el ajuste de posición específico para las secciones especiales
      let positionAdjustment = 0;
      if (target === "#seccion-home") {
        positionAdjustment = -120;
      } else if (target === "#seccion-Sobre-mi") {
        positionAdjustment = -25;
      } else if (target === "#seccion-skills") {
        positionAdjustment = 55; 
      } else if (target === "#seccion-projects") {
        positionAdjustment = -100;
      } else if (target === "#seccion-certificates") {
        positionAdjustment = -100; 
      } else if (target === "#seccion-contact") {
        positionAdjustment = -50; 
      } 

      // Obtiene la posición actual del objetivo, ajustando con el valor específico
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY + positionAdjustment;

      // Realiza el desplazamiento suave hacia la sección
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    });
  });
});

/******************** BARRA DE NAVEGACION *******************/
document.addEventListener("DOMContentLoaded", function () {
  const navIcono = document.querySelector(".nav__icono");
  const navCaja = document.querySelector(".nav__caja");

  navIcono.addEventListener("click", function () {
    navCaja.classList.toggle("active");
  });
});

/**********************  HOME  **************************/


window.onload = function(){
    var barraCarga = document.getElementById('barra-carga');
    
    barraCarga.style.visibility = 'hidden';
    barraCarga.style.display = 'none';
}
$('document').ready(function(){
    //ANIMACIÓN DE "REVELACIÓN" DE TEXTO.

    /* Guardo en la variable "profesion" la etiqueta que contiene el texto 
    al cual quiero aplicar el efecto de revelado.*/
    const profesion = baffle(".profesion");

    /* Le asigno a la variable profesión (que contiene el texto que quiero animar) los caracteres a utilizar para 
    la animación del texto revelado (puedes utilizar cualquier tipo de carácteres). También asigno la velocidad que tendrá el efecto de las letras*/
    profesion.set({
        characters: '█▓▓ ░░>██ ▓█▓>▓ ▓<█ ░<▒░▓ █░<█ █▒> ▓░▓< ▒▓░░',
        speed: 90
    });

    // Ejecuto el inicio de la animacion.
    profesion.start();
    // Establezco la duración que tendrá la animación antes de revelar el texto.
    profesion.reveal(3000);

    var boton = document.getElementById('boton');
        
    $('#tagline').t({
        beep:false,
        caret:'<span style="color:hotpink;">•</span>',
        typing:function(elm,chr){
        if(chr.match(/\-trigger/))
            $('#pow-txt').show().delay(500).fadeOut(0);
        }
    });

    $('#boton-arriba').click(function(){
        $('body, html').animate({
          scrollTop: '0px'
        }, 300);
      });
   
    $(window).scroll(function(){
      if( $(this).scrollTop() > 0 ){
        $('#boton-arriba').slideDown(300);
      } else {
        $('#boton-arriba').slideUp(300);
      }
    });
});


/****************** ANIMACION DE FOTO ******************/
document.addEventListener("DOMContentLoaded", function() {
  const imageContainers = document.querySelectorAll(".image-container");

  function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const threshold = windowHeight * 0.4; // 40% del alto de la ventana
    return rect.top < windowHeight - threshold && rect.bottom >= threshold;
  }

  function handleScroll() {
    imageContainers.forEach(container => {
      if (isElementInViewport(container)) {
        container.classList.add("show");
      } else {
        container.classList.remove("show");
      }
    });
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Ejecutar la función al cargar la página para animar las imágenes visibles
});




/*             ANIMACION TARJETAS DE SKILLS     */

document.addEventListener("DOMContentLoaded", function() {
  const currentPath = window.location.href;

  const navigationLinks = document.querySelectorAll("nav a");

  navigationLinks.forEach(link => {
      if (link.href === currentPath) {
          link.classList.add("active");
      }
  });

  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
      card.addEventListener("mouseenter", function() {
          card.classList.add("hover");
      });

      card.addEventListener("mouseleave", function() {
          card.classList.remove("hover");
          card.addEventListener("animationend", function() {
              card.classList.remove("show-name");
          }, { once: true });
      });

      card.addEventListener("animationend", function() {
          if (!card.classList.contains("hover")) {
              card.classList.remove("show-name");
          }
      });
  });
});


//      PROYECTOS //

const proyectos = [
  {
      nombre: 'Proyecto 1',
      descripcion: 'Descripción del Proyecto 1',
      enlace: 'enlace_proyecto_1',
      imagen: 'ruta_de_imagen_proyecto_1.jpg'
  },
  // Agrega más objetos de proyectos aquí
];

const contenedorProyectos = document.querySelector('.proyectos');

proyectos.forEach(proyecto => {
  const tarjetaProyecto = document.createElement('div');
  tarjetaProyecto.classList.add('proyecto');

  const imagenProyecto = document.createElement('img');
  imagenProyecto.src = proyecto.imagen;
  imagenProyecto.alt = proyecto.nombre;

  const descripcionProyecto = document.createElement('div');
  descripcionProyecto.classList.add('descripcion');

  const tituloProyecto = document.createElement('h3');
  tituloProyecto.textContent = proyecto.nombre;

  const textoProyecto = document.createElement('p');
  textoProyecto.textContent = proyecto.descripcion;

  const enlaceProyecto = document.createElement('a');
  enlaceProyecto.href = proyecto.enlace;
  enlaceProyecto.target = '_blank';
  enlaceProyecto.textContent = 'Ver Proyecto';

  descripcionProyecto.appendChild(tituloProyecto);
  descripcionProyecto.appendChild(textoProyecto);
  descripcionProyecto.appendChild(enlaceProyecto);

  tarjetaProyecto.appendChild(imagenProyecto);
  tarjetaProyecto.appendChild(descripcionProyecto);

  contenedorProyectos.appendChild(tarjetaProyecto);
});


// Obtén todas las tarjetas
const tarjetas = document.querySelectorAll('.proyecto');

// Agrega un evento para cada tarjeta que escuche el evento 'mouseenter'
tarjetas.forEach(tarjeta => {
  tarjeta.addEventListener('mouseenter', () => {
    tarjeta.classList.add('desenfocado');
  });

  tarjeta.addEventListener('mouseleave', () => {
    tarjeta.classList.remove('desenfocado');
  });
});


/*          CERTIFICADOS           */

  // Script para manejar el efecto de aumento y abrir a pantalla completa
  $(document).ready(function() {
    $('.certificate').on('mouseenter', function() {
      $(this).addClass('enlarge');
    });

    $('.certificate').on('mouseleave', function() {
      $(this).removeClass('enlarge');
    });

    $('.certificate').on('click', function() {
      $(this).toggleClass('fullscreen');
    });
  });

  /*************  FORMULARIO  ***************/
  document.addEventListener("DOMContentLoaded", function() {
    const seccion5 = document.querySelector(".seccion5");
  
    function isSectionVisible(element) {
      const rect = element.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom >= 0;
    }
  
    function animateSection(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Hacer visible la sección con la animación
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0)";
          entry.target.classList.add("animate-slide-in");
        } else {
          // Si la sección no está visible, ocultarla
          entry.target.style.opacity = 0;
          entry.target.style.transform = "translateY(50px)"; // Cambia el valor según la posición inicial deseada
          entry.target.classList.remove("animate-slide-in");
        }
      });
    }
  
    const sectionObserver = new IntersectionObserver(animateSection, {
      root: null,
      rootMargin: "0px",
      threshold: 0
    });
  
    sectionObserver.observe(seccion5);
  });
  