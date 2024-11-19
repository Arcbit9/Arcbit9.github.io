document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.scroll-animate');

    const isVisible = (elem) => {
        const { top, bottom } = elem.getBoundingClientRect();
        return top < window.innerHeight && bottom >= 0;
    };

    const handleScroll = () => {
        elements.forEach((element) => {
            if (isVisible(element)) {
                element.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
});
