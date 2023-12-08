let slideIndex = 0;
let slideshowInterval;

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    slides[slideIndex].style.display = "block";
}

function startSlideshow() {
    if (slideshowInterval) {
        clearInterval(slideshowInterval);
    }

    // Afiseaza prima imagine
    showSlides();

    // Porneste slideshow-ul
    slideshowInterval = setInterval(showSlides, 3000);
}

// Start slideshow by default
startSlideshow();