let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-images img');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}vw)`;
}

function autoSlide() {
    currentIndex++;
    showSlide(currentIndex);
}

// Auto-slide every 5 seconds
setInterval(autoSlide, 5000);