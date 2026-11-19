const carouselStages = window.exhibitionStages;

const carouselImage = 
    document.getElementById("carousel-image");
const carouselBackground =
    document.getElementById("carousel-background");
const carouselBackgroundNext =
    document.getElementById("carousel-background-next");
const carouselText = document.getElementById("carousel-text");
const previousPreview =
    document.getElementById("carousel-preview-previous");
const nextPreview =
    document.getElementById("carousel-preview-next");

const carouselTitle = document.getElementById("carousel-title");
const carouselDescription = document.getElementById("carousel-description");
const carouselCounter = document.getElementById("carousel-counter");

const previousButton = document.getElementById("carousel-previous");
const nextButton = document.getElementById("carousel-next");

const autoplayButton = document.getElementById("carousel-autoplay");
const autoplayProgress = document.getElementById("carousel-progress");
const autoplayInterval = 10000;

let autoplayTimer = null;
let slideStartedAt = 0;
let currentIndex = 0;
let isAnimating = false;

function showStage(updateBackground = true) {
    const stage = carouselStages[currentIndex];
    let previousIndex = currentIndex - 1;
    let nextIndex = currentIndex + 1;

    if (previousIndex < 0) {
        previousIndex = carouselStages.length - 1;
    }

    if (nextIndex >= carouselStages.length) {
        nextIndex = 0;
    }

    previousPreview.src = carouselStages[previousIndex].image;
    nextPreview.src = carouselStages[nextIndex].image;
    if (updateBackground) {
        carouselBackground.src = stage.backgroundImage;
    }
    
    slideStartedAt = performance.now();
    autoplayProgress.value = 0;

    carouselImage.src = stage.image;
    carouselImage.alt = stage.alt;

    carouselTitle.textContent = stage.year + " / " + stage.title;
    carouselDescription.textContent = stage.description;
    carouselDescription.scrollTop = 0;

    carouselCounter.textContent =
        (currentIndex + 1) + " / " + carouselStages.length;
}

function showPrevious() {
    changeStage(-1);
}

function showNext() {
    changeStage(1);
}

async function changeStage(direction) {
    if (isAnimating) return;
    isAnimating = true;
    autoplayProgress.value = 0;

    const count = carouselStages.length;
    const nextIndex = (currentIndex + direction + count) % count;
    carouselBackgroundNext.src = carouselStages[nextIndex].backgroundImage;

    const backgroundFade = carouselBackgroundNext.animate(
        [{ opacity: 0 }, { opacity: 1 }],
        { duration: 550, fill: "forwards" }
    );

    const textFadeOut = carouselText.animate(
        [{ opacity: 1 }, { opacity: 0 }],
        { duration: 150, fill: "forwards" }
    );
    await textFadeOut.finished;

    currentIndex = nextIndex;
    showStage(false);
    textFadeOut.cancel();

    const textFadeIn = carouselText.animate(
        [{ opacity: 0 }, { opacity: 1 }],
        { duration: 250 }
    );

    const imageEntrance = carouselImage.animate(
        [
            {
                transform: `translateX(${direction * 80}px) scale(0.85)`,
                filter: "brightness(0.55)",
                opacity: 0
            },
            {
                transform: "translateX(0) scale(1)",
                filter: "brightness(1)",
                opacity: 1
            }
        ],
        { duration: 400, easing: "ease-out" }
    );

    await Promise.all([
        backgroundFade.finished,
        textFadeIn.finished,
        imageEntrance.finished
    ]);

    carouselBackground.src = carouselBackgroundNext.src;
    backgroundFade.cancel();
    slideStartedAt = performance.now();
    isAnimating = false;
}

function updateAutoplay() {
    if (isAnimating) return;
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
