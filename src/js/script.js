document.addEventListener('DOMContentLoaded', () => {
    const closeButton = document.querySelector('.close-btn');
    const promo = document.querySelector('.promo');

    if (closeButton && promo) {
        closeButton.addEventListener('click', () => {
            promo.style.display = 'none';
        });
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector('.nav-link.prev');
    const nextButton = document.querySelector('.nav-link.next');
    const testimonialsContent = document.querySelector('.testimonials-content');
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    
    let currentIndex = 0;
    const itemsPerPage = 3; // Number of testimonials per page
    const totalPages = Math.ceil(testimonialItems.length / itemsPerPage);
    
    function updateTestimonials() {
      const offset = -currentIndex * (100 / itemsPerPage);
      testimonialsContent.style.transform = `translateX(${offset}%)`;
    }
    
    prevButton.addEventListener('click', function(e) {
      e.preventDefault();
      if (currentIndex > 0) {
        currentIndex--;
        updateTestimonials();
      }
    });
    
    nextButton.addEventListener('click', function(e) {
      e.preventDefault();
      if (currentIndex < totalPages - 1) {
        currentIndex++;
        updateTestimonials();
      }
    });
  });
  

