document.addEventListener('DOMContentLoaded', () => {
    const featuredTshirts = [
        { id: 1, name: 'Cool T-Shirt', image: 'images/cooltshirt.webp' },
        { id: 2, name: 'Stylish T-Shirt', image: 'images/stylishtshirt.webp' },
        { id: 3, name: 'Trendy T-Shirt', image: 'images/trendytshirt.webp' }
    ];

    const tshirtCatalog = [
        { id: 1, name: 'Cool T-Shirt', size: 'M', color: '#000000', image: 'images/cooltshirt.webp' },
        { id: 2, name: 'Stylish T-Shirt', size: 'L', color: '#ffffff', image: 'images/stylishtshirt.webp' },
        { id: 3, name: 'Trendy T-Shirt', size: 'S', color: '#ff0000', image: 'images/trendytshirt.webp' }
    ];

    const displayFeaturedTshirts = () => {
        const featuredSection = document.getElementById('featured-tshirts');
        featuredTshirts.forEach(tshirt => {
            const tshirtDiv = document.createElement('div');
            tshirtDiv.classList.add('tshirt');
            tshirtDiv.innerHTML = `
                <picture>
                    <img src="${tshirt.image}" alt="${tshirt.name}" loading="lazy" width="200" height="300">
                </picture>
                <h3>${tshirt.name}</h3>
            `;
            featuredSection.appendChild(tshirtDiv);
        });
    };

    const displayTshirtCatalog = () => {
        const catalogSection = document.getElementById('tshirt-catalog');
        tshirtCatalog.forEach(tshirt => {
            const tshirtDiv = document.createElement('div');
            tshirtDiv.classList.add('tshirt');
            tshirtDiv.innerHTML = `
                <picture>
                    <img src="${tshirt.image}" alt="${tshirt.name}" loading="lazy" width="200" height="300">
                </picture>
                <h3>${tshirt.name}</h3>
                <p>Size: ${tshirt.size}</p>
                <p>Color: ${tshirt.color}</p>
            `;
            catalogSection.appendChild(tshirtDiv);
        });
    };

    if (document.getElementById('featured-tshirts')) {
        displayFeaturedTshirts();
    }

    if (document.getElementById('tshirt-catalog')) {
        displayTshirtCatalog();
    }

    const orderForm = document.getElementById('order-form');
    if (orderForm) {
        orderForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const size = document.getElementById('size').value;
            const color = document.getElementById('color').value;
            const design = document.getElementById('design').value;

            const order = {
                name,
                email,
                size,
                color,
                design
            };

            localStorage.setItem('order', JSON.stringify(order));

            document.getElementById('order-form').reset();
            document.getElementById('thank-you-message').style.display = 'block';
        });
    }
});
