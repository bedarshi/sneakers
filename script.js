// script.js
document.addEventListener("DOMContentLoaded", function() {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const checkoutButton = document.getElementById("checkout-btn");
    const checkoutMessage = document.getElementById("checkout-message");
    let total = 0;

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const product = this.getAttribute('data-product');
            const price = parseFloat(this.getAttribute('data-price'));

            // Add item to cart list
            const listItem = document.createElement('li');
            listItem.textContent = `${product} - $${price.toFixed(2)}`;
            cartItems.appendChild(listItem);

            // Update total
            total += price;
            cartTotal.textContent = total.toFixed(2);
        });
    });

    // Checkout button functionality
    checkoutButton.addEventListener('click', function() {
        if (total > 0) {
            // Clear the cart
            cartItems.innerHTML = '';
            total = 0;
            cartTotal.textContent = total.toFixed(2);

            // Show checkout message
            checkoutMessage.classList.remove('hidden');

            // Hide message after 3 seconds
            setTimeout(() => {
                checkoutMessage.classList.add('hidden');
            }, 3000);
        } else {
            alert("Your cart is empty. Add items to cart before checking out.");
        }
    });
});
