"use strict"

// Este script sirve para mostrar el contenido de la web lentamente según vaya siendo visible.

// Este JS se puede intentar hacer en CSS solamente pero muchos navegadores lo no soporta. Modifico el threshold aumentándolo.

// Añado el defer en el script de js que obliga ser ejecutado después de que el documento HTML se haya completado

document.addEventListener('DOMContentLoaded', function() {
    const fadeElements = document.querySelectorAll('.fade-up');
  
    // Usamos IntersectionObserver para detectar cuándo un elemento entra en la vista
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Cuando el elemento entra en la vista, se le añade la clase 'show' para activar la animación
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.2 }); // Umbral ajustado para activar el efecto cuando un 20% del elemento es visible
  
    fadeElements.forEach(el => observer.observe(el));
  });
  
  