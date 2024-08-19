
document.addEventListener('DOMContentLoaded', function() {
    const viewAllButtons = document.querySelectorAll('.view-all');
  
    viewAllButtons.forEach(button => {
      button.addEventListener('click', function() {
        const newArrivalsSection = this.closest('.new-arrivals');
        
        newArrivalsSection.classList.toggle('expanded');
      });
    });
  });
  