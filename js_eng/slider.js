// Global değişkenler
let currentSlide = 0;

// Slayt gösterisi için JavaScript
function nextSlide() {
    const slides = document.querySelectorAll('.slide');
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Slider'ı başlat
function initSlider() {
    // Slider resimlerini yükle
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, index) => {
        const imageUrl = getGoogleDriveImageUrl(SLIDER_RESIMLERI[index]);
        slide.style.backgroundImage = `url('${imageUrl}')`;
    });

    // Her 5 saniyede bir slayt değişimi
    setInterval(nextSlide, 5000);
}

// Discover butonu için animasyon
function initDiscoverButton() {
    const sliderOverlay = document.getElementById('slider-overlay');
    const actionButton = document.querySelector('.discover-btn');
    
    if (actionButton && sliderOverlay) {
        actionButton.addEventListener('click', function() {
            if (sliderOverlay.classList.contains('content-visible')) {
                sliderOverlay.classList.remove('content-visible');
                this.textContent = this.dataset.textDefault;
            } else {
                sliderOverlay.classList.add('content-visible');
                this.textContent = this.dataset.textActive;
            }
        });
    }
}
