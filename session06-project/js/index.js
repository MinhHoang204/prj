// Lấy tất cả các sản phẩm
const products = document.querySelectorAll('.product');

// Lặp qua từng sản phẩm và thêm sự kiện hover
products.forEach(product => {
    product.addEventListener('mouseenter', () => {
        product.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        product.style.transform = 'scale(1.05)';
    });

    product.addEventListener('mouseleave', () => {
        product.style.boxShadow = 'none';
        product.style.transform = 'scale(1)';
    });
});
