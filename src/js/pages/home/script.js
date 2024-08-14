/*-----------Button promo-------*/
document.addEventListener('DOMContentLoaded', () => {
    const closeButton = document.querySelector('.close-btn');
    const promo = document.querySelector('.promo');

    if (closeButton && promo) {
        closeButton.addEventListener('click', () => {
            promo.style.display = 'none';
        });
    }
});


/*-----------Slider------*/

document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector('.nav-link.prev');
    const nextButton = document.querySelector('.nav-link.next');
    const testimonialsContent = document.querySelector('.testimonials-content');
    const testimonialItems = document.querySelectorAll('.testimonial-item');
  
    let currentIndex = 0;
    const itemsPerPage = 3; // Número de itens visíveis por vez
    const totalItems = testimonialItems.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
  
    function updateTestimonials() {
        const offset = -currentIndex * (100 / totalPages); // Deslocamento percentual
        testimonialsContent.style.transform = `translateX(${offset}%)`;
    }
  
    prevButton.addEventListener('click', function(e) {
        e.preventDefault();
        if (currentIndex === 0) {
            currentIndex = totalPages - 1;
        } else {
            currentIndex--;
        }
        updateTestimonials();
    });
  
    nextButton.addEventListener('click', function(e) {
        e.preventDefault();
        if (currentIndex === totalPages - 1) {
            currentIndex = 0;
        } else {
            currentIndex++;
        }
        updateTestimonials();
    });

    // Ajusta o tamanho do container para acomodar todos os itens
    function adjustContainerWidth() {
        const containerWidth = totalItems * 100 / itemsPerPage;
        testimonialsContent.style.width = `${containerWidth}%`;
    }

    adjustContainerWidth();
});



