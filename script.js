let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');

function showSlide(index) {
    items.forEach((item, i) => {
        item.classList.toggle('active', i === index);
    });
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
    showSlide(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
    showSlide(currentIndex);
});

showSlide(currentIndex); // Initialize carousel
