const carouselStages = window.exhibitionStages;

const carouselImage = document.getElementById("carousel-image");
const carouselTitle = document.getElementById("carousel-title");
const carouselDescription = document.getElementById("carousel-description");
const carouselCounter = document.getElementById("carousel-counter");

const previousButton = document.getElementById("carousel-previous");
const nextButton = document.getElementById("carousel-next");

const autoplayButton = document.getElementById("carousel-autoplay");
const autoplayProgress = document.getElementById("carousel-progress");
const autoplayInterval = 5000;

let autoplayTimer = null;
let slideStartedAt = 0;
let currentIndex = 0;

function showStage() {
    const stage = carouselStages[currentIndex];
    slideStartedAt = performance.now();
    autoplayProgress.value = 0;

    carouselImage.src = stage.image;
    carouselImage.alt = stage.alt;

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

function updateAutoplay() {
    const elapsed = performance.now() - slideStartedAt;
    autoplayProgress.value = Math.min(elapsed, autoplayInterval);

    if (elapsed >= autoplayInterval) {
        showNext();
    }
}

function toggleAutoplay() {
    if (autoplayTimer === null) {
        slideStartedAt = performance.now();
        autoplayProgress.value = 0;
        autoplayProgress.max = autoplayInterval;
        autoplayProgress.hidden = false;
        autoplayTimer = setInterval(updateAutoplay, 50);
        autoplayButton.textContent = "Izslēgt automātisko maiņu";
    } else {
        clearInterval(autoplayTimer);
        autoplayTimer = null;
        autoplayProgress.value = 0;
        autoplayProgress.hidden = true;
        autoplayButton.textContent = "Ieslēgt automātisko maiņu";
    }

    autoplayButton.setAttribute("aria-pressed", autoplayTimer !== null);
}

previousButton.addEventListener("click", showPrevious);
nextButton.addEventListener("click", showNext);
autoplayButton.addEventListener("click", toggleAutoplay);

showStage();
