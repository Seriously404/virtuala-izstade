const carouselStages = window.exhibitionStages;

const carouselImage = document.getElementById("carousel-image");
const carouselTitle = document.getElementById("carousel-title");
const carouselDescription = document.getElementById("carousel-description");
const carouselCounter = document.getElementById("carousel-counter");

const previousButton = document.getElementById("carousel-previous");
const nextButton = document.getElementById("carousel-next");

let currentIndex = 0;

function showStage() {
    const stage = carouselStages[currentIndex];

    carouselImage.src = stage.image;
    carouselImage.alt = stage.title;

    carouselTitle.textContent = stage.year + " / " + stage.title;
    carouselDescription.textContent = stage.description;

    carouselCounter.textContent =
        (currentIndex + 1) + " / " + carouselStages.length;
}

function showPrevious() {
    currentIndex = currentIndex - 1;

    if (currentIndex < 0) {
        currentIndex = carouselStages.length - 1;
    }

    showStage();
}

function showNext() {
    currentIndex = currentIndex + 1;

    if (currentIndex >= carouselStages.length) {
        currentIndex = 0;
    }

    showStage();
}

previousButton.addEventListener("click", showPrevious);
nextButton.addEventListener("click", showNext);

showStage();