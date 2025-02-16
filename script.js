
// Initialize carousel
document.addEventListener('DOMContentLoaded', function() {
    var myCarousel = document.querySelector('#carouselReviews')
    new bootstrap.Carousel(myCarousel, { 
        interval: 3000,
        wrap: true
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Category filtering functionality
    const filterButtons = document.querySelectorAll('.category-filter');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.dataset.category;

            // Update active button state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Show/hide menu items
            const menuItems = document.querySelectorAll('.menu-item');
            menuItems.forEach(item => {
                if (category === 'all' || item.dataset.category === category) {
                    item.style.display = 'block';
                    item.classList.add('fade-in');
                } else {
                    item.style.display = 'none';
                    item.classList.remove('fade-in');
                }
            });
        });
    });

    // Modal details view functionality
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            const modal = new bootstrap.Modal(document.getElementById('itemModal'));
            const modalTitle = document.querySelector('#itemModal .modal-title');
            const modalImage = document.querySelector('#itemModal .modal-image');
            const modalDescription = document.querySelector('#itemModal .modal-description');
            const modalPrice = document.querySelector('#itemModal .modal-price');

            modalTitle.textContent = this.querySelector('.card-title').textContent;
            modalImage.src = this.querySelector('img').src;
            modalDescription.textContent = this.querySelector('.card-text').textContent;
            modalPrice.textContent = this.querySelector('.price').textContent;

            modal.show();
        });
    });

    // Cart functionality is handled in cart.js
});