document.addEventListener('DOMContentLoaded', () => {
    const products = {
        pdetails1: ['h.jpeg', 'h2.jpeg', 'h3.jpeg'],
        pdetails2: ['g16.jpeg', 'g162.jpeg', 'g163.jpeg'],
        pdetails3: ['m1.webp', 'm2.jpg', 'm3.jpg'],
        pdetails4: ['k1.jpg', 'k2.jpg', 'k3.jpg'],
        pdetails5: ['c1.webp', 'c2.jpg', 'c3.jpg'],
        pdetails6: ['w1.jpg', 'w2.jpg', 'w3.jpg'],
        pdetails7: ['s1.webp', 's2.jpeg', 's3.jpeg'],
        pdetails8: ['q1.jpg', 'q2.jpg', 'q3.jpg'],
        pdetails9: ['l1.jpg', 'l2.jpg', 'l3.jpg']
    };

    const pageId = location.pathname.split('/').pop().replace('.html', '');
    const images = products[pageId] || [];
    let currentIndex = 0;

    const imageElement = document.getElementById('product-image');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        imageElement.src = images[currentIndex];
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        imageElement.src = images[currentIndex];
    });
});
