document.addEventListener('DOMContentLoaded', () => {
    const closeButton = document.querySelector('.close-btn');
    const promo = document.querySelector('.promo');

    if (closeButton && promo) {
        closeButton.addEventListener('click', () => {
            promo.style.display = 'none';
        });
    }
});
