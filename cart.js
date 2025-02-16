
let cart = [];

document.addEventListener('DOMContentLoaded', function() {
    // Handle "Select Item" buttons 
    const selectButtons = document.querySelectorAll('.select-item');
    selectButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const card = this.closest('.card');
            addToCart({
                name: card.querySelector('.card-title').textContent,
                price: card.querySelector('.price').textContent,
                image: card.querySelector('.card-img-top').src
            });
        });
    });

    // Handle modal "Add to Cart" button
    const modalAddToCartBtn = document.querySelector('#itemModal .add-to-cart');
    if (modalAddToCartBtn) {
        modalAddToCartBtn.addEventListener('click', function() {
            const modalEl = document.getElementById('itemModal');
            addToCart({
                name: modalEl.querySelector('.modal-title').textContent,
                price: modalEl.querySelector('.modal-price').textContent,
                image: modalEl.querySelector('.modal-image').src
            });
            bootstrap.Modal.getInstance(modalEl).hide();
        });
    }
});

function addToCart(item) {
    cart.push(item);
    updateCart();
    alert(`${item.name} added to cart!`);
}

function updateCart() {
    console.log('Cart updated:', cart);
    // Optional: Update a cart counter if you have one in the UI
    // document.querySelector('.cart-count').textContent = cart.length;
}

function viewCart() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    let total = 0;
    let cartItems = cart.map(item => {
        const price = parseFloat(item.price.replace(/[^0-9.]/g, ''));
        total += price;
        return `${item.name} - ${item.price}`;
    }).join('\n');
    
    alert(`Cart Items:\n${cartItems}\n\nTotal: $${total.toFixed(2)}`);
}
