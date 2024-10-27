document.addEventListener('DOMContentLoaded', () => {
    const sliderImage = document.getElementById('slider-image');

    window.changeImage = function(image) {
        sliderImage.src = image;
    }
});
