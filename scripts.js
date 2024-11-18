document.addEventListener('DOMContentLoaded', function () {
    const products = [
        {
            name: 'Tênis Nike Air Max',
            price: 'R$ 499,99',
            image: 'https://via.placeholder.com/200x200?text=Nike+Air+Max'
        },
        {
            name: 'Tênis Nike Air Max TN Plus',
            price: 'R$ 349,99',
            image: 'air.jpeg'
        },
        {
            name: 'Tênis Nike Air Max TN Plus',
            price: 'R$ 349,99',
            image: 'image.png'
        }
        {
            name: 'Tênis Nike Air Max TN Plus 3',
            price: 'R$ 349,99',
            image: 'images.jpeg'
        }












    ];

    const productList = document.getElementById('product-list');

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <button>Comprar</button>
        `;

        productList.appendChild(productDiv);
    });

    // Event listener for form submission
    document.getElementById('contact-form').addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Mensagem enviada com sucesso!');
    });
});