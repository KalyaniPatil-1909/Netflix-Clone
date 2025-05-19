document.addEventListener("DOMContentLoaded", function () {
    const moviesRow = document.querySelector('.Movies-row');
    const prevButton = document.querySelector('.Previous');
    const nextButton = document.querySelector('.Next');
    const itemWidth = 1600;
    const marginRight = 0;
    const scrollDistance = itemWidth + marginRight;

    nextButton.addEventListener('click', () => {
        moviesRow.scrollBy({
            left: scrollDistance,
            behavior: 'smooth'
        });
    });
    prevButton.addEventListener('click', () => {
        moviesRow.scrollBy({
            left: -scrollDistance,
            behavior: 'smooth'
        });
    });
});
