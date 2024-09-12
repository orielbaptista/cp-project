const carousel = document.querySelector('.carousel-wrapper');
const cardList = document.querySelector('.card-list');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;
const totalItems = cardList.children.length;
const visibleItems = 3; // Number of visible items at once
const itemWidth = cardList.children[0].offsetWidth + 20; // Card width + margin

// Move carousel to the next or previous set of cards
function moveCarousel(offset) {
  currentIndex += offset;
  if (currentIndex < 0) {
    currentIndex = totalItems - visibleItems;
  } else if (currentIndex > totalItems - visibleItems) {
    currentIndex = 0;
  }
  carousel.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
}

// Move to the next set of cards
nextButton.addEventListener('click', () => {
  moveCarousel(1);
});

// Move to the previous set of cards
prevButton.addEventListener('click', () => {
  moveCarousel(-1);
});

// Auto-slide every 3 seconds
let autoSlide = setInterval(() => {
  moveCarousel(1);
}, 3000);

// Pause auto-slide on hover
carousel.addEventListener('mouseover', () => {
  clearInterval(autoSlide);
});

// Resume auto-slide when mouse leaves the carousel
carousel.addEventListener('mouseout', () => {
  autoSlide = setInterval(() => {
    moveCarousel(1);
  }, 3000);
});
