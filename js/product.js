document.addEventListener('DOMContentLoaded', function() {
    // Product Gallery Thumbnail Navigation
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('mainImage');
    
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            // Remove active class from all thumbnails
            thumbnails.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked thumbnail
            this.classList.add('active');
            
            // Get the target image from data attribute
            const target = this.getAttribute('data-target');
            
            // Change main image (in a real site, you would change the src)
            mainImage.src = `images/product-${target.replace('main', '')}-main.jpg`;
        });
    });
    
    // Color Selection
    const colorOptions = document.querySelectorAll('.color-option');
    
    colorOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove active class from all options
            colorOptions.forEach(o => o.classList.remove('active'));
            
            // Add active class to clicked option
            this.classList.add('active');
            
            // Get the selected color
            const selectedColor = this.getAttribute('data-color');
            
            // Here you would typically update the product image/variant
            console.log(`Selected color: ${selectedColor}`);
        });
    });
    
    // Quantity Selector
    const minusBtn = document.querySelector('.qty-btn.minus');
    const plusBtn = document.querySelector('.qty-btn.plus');
    const quantityInput = document.querySelector('.quantity-selector input');
    
    minusBtn.addEventListener('click', function(e) {
        e.preventDefault();
        let currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    });
    
    plusBtn.addEventListener('click', function(e) {
        e.preventDefault();
        let currentValue = parseInt(quantityInput.value);
        if (currentValue < 10) {
            quantityInput.value = currentValue + 1;
        }
    });
    
    // Tab Switching
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Show corresponding content
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Review Rating Stars
    const ratingStars = document.querySelectorAll('.rating-input i');
    const ratingValue = document.getElementById('rating-value');
    
    ratingStars.forEach(star => {
        star.addEventListener('click', function() {
            const rating = this.getAttribute('data-rating');
            ratingValue.value = rating;
            
            // Update star display
            ratingStars.forEach((s, index) => {
                if (index < rating) {
                    s.classList.remove('far');
                    s.classList.add('fas', 'active');
                } else {
                    s.classList.remove('fas', 'active');
                    s.classList.add('far');
                }
            });
        });
    });
    
    // Quick View Hover Effect
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.querySelector('.quick-view').style.bottom = '0';
            this.querySelector('img').style.transform = 'scale(1.05)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.querySelector('.quick-view').style.bottom = '-50px';
            this.querySelector('img').style.transform = 'scale(1)';
        });
    });
    
    // Add to Cart Button
    const addToCartBtn = document.querySelector('.add-to-cart');
    
    addToCartBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Get product details
        const productName = document.querySelector('h1').textContent;
        const quantity = quantityInput.value;
        const color = document.querySelector('.color-option.active').getAttribute('data-color');
        
        // In a real implementation, you would add to cart via AJAX
        console.log(`Added to cart: ${quantity} ${productName} in ${color}`);
        
        // Show confirmation
        alert(`${quantity} ${productName} in ${color} added to your cart!`);
    });
    
    // Wishlist Button
    const wishlistBtn = document.querySelector('.wishlist');
    
    wishlistBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const icon = this.querySelector('i');
        
        // Toggle between regular and solid heart
        if (icon.classList.contains('far')) {
            icon.classList.remove('far');
            icon.classList.add('fas');
            alert('Added to your wishlist!');
        } else {
            icon.classList.remove('fas');
            icon.classList.add('far');
            alert('Removed from your wishlist!');
        }
    });
});