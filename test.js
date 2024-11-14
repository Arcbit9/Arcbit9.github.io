document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: "Maltek Wired Headset", price: "$10", image: "h.jpeg" },
        { id: 2, name: "ROG Zephyrus G16 (2024) GA605", price: "$3000", image: "g16.jpeg" },
        { id: 3, name: "Offbeat® Bluetooth 5.1 + 2.4 Ghz Wireless Gaming Mouse, 7D Buttons Mouse, 3 DPI Modes 1600:2400:3200 mice", price: "$15", image: "m1.webp" },
        { id: 4, name: "MageGee Portable 60% Mechanical Gaming Keyboard", price: "$30", image: "k1.jpg" },
        { id: 5, name: "ZEBRONICS NC8000 Laptop Cooling Pad", price: "$15", image: "c1.webp" },
        { id: 6, name: "Logitech C922 Pro Stream Webcam", price: "$120", image: "w1.jpg" },
        { id: 7, name: "FDUCE SL40+ Dynamic Podcast Microphone", price: "$50", image: "s1.webp" },
        { id: 8, name: "LG Electronics Ultragear 21:9 Curved Gaming LED Monitor 86.42 Cm", price: "$600", image: "q1.jpg" },
        { id: 9, name: "DIGITEK® (DRL-12C) 12 Inch LED Ring Light with Stand 5ft & Smartphone Holder ", price: "$20", image: "l1.jpg" },
    ];

    const productList = document.getElementById('product-list');
    const searchBar = document.getElementById('search-bar');

    // Function to create a product card
    function createProductElement(product) {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}" onclick="location.href='pdetails${product.id}.html'" onerror="this.onerror=null;this.src='fallback.jpg';">
            <h2>${product.name}</h2>
            <p>${product.price}</p>
        `;
        return productDiv;
    }

    // Function to display products (filtered or all)
    function displayProducts(filteredProducts) {
        productList.innerHTML = '';
        filteredProducts.forEach(product => {
            const productDiv = createProductElement(product);
            productList.appendChild(productDiv);
        });
    }

    // Initial display of all products
    displayProducts(products);

    // Add event listener for the search bar
    searchBar.addEventListener('input', (event) => {
        const searchTerm = event.target.value.toLowerCase();
        const filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(searchTerm)
        );
        displayProducts(filteredProducts);
    });

    // Optional: Focus on the search bar when the page loads
    searchBar.focus();
});
