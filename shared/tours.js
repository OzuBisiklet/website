// Global değişkenler
let currentTourSlide = 0;
let currentTourImageIndex = 0;

// Tur slaytlarını dinamik olarak oluştur
function initTourSlider(selector) {
    const tourSlider = document.querySelector('.tour-slider');
    const tourContent = document.querySelector('.tour-content');
    
    // Önce mevcut içerikleri temizle
    tourSlider.innerHTML = '';
    tourContent.innerHTML = '';
    
    // Her tur için slaytları ve içerikleri ekle
    let isFirstTour = true;
    for (const [tur, data] of Object.entries(tours_pictures_ids)) {
        try {                    
            // Tur resimlerini ekle
            data.ids.forEach((resimId, index) => {
                const resimUrl = getGoogleDriveImageUrl(resimId);
                const activeClass = isFirstTour && index === 0 ? 'active' : '';
                tourSlider.innerHTML += `
                    <div class="tour-slide ${activeClass} ${tur}" style="background-image: url('${resimUrl}')"></div>
                `;
            });

            let title;
            let desc;

            if(selector == 0){
                title = data.title_tr;
                desc = data.desc_tr;
            }else if(selector == 1){
                title = data.title_eng;
                desc = data.desc_eng;
            }
            
            // Tur açıklamasını ekle
            const activeClass = isFirstTour ? 'active' : '';
            tourContent.innerHTML += `
                <div class="tour-description ${activeClass}">
                    <div class="tour-header">
                        <button class="tour-nav-btn prev-tour">❮</button>
                        <h3>${title}</h3>
                        <button class="tour-nav-btn next-tour">❯</button>
                    </div>
                    <p>${desc}</p>
                </div>
            `;
            
            if (isFirstTour) {
                isFirstTour = false;
            }
        } catch (hata) {
            console.error(`${tur} resimleri yüklenirken hata oluştu:`, hata);
        }
    }
    
    // BU KISIM ÖNEMLİ: Tur navigasyon butonlarını bağla
    setTimeout(() => {
        const prevTourButtons = document.querySelectorAll('.prev-tour');
        const nextTourButtons = document.querySelectorAll('.next-tour');
                        
        prevTourButtons.forEach(button => {
            button.onclick = function() {
                showTourContent(currentTourSlide - 1);
            };
        });
        
        nextTourButtons.forEach(button => {
            button.onclick = function() {
                showTourContent(currentTourSlide + 1);
            };
        });
    }, 500); // DOM'un tam yüklenmesini beklemek için kısa bir gecikme
}

function showTourContent(n) {
    const tourSlides = document.querySelectorAll('.tour-slide');
    const tourDescriptions = document.querySelectorAll('.tour-description');
    
    // Tüm slaytları ve açıklamaları gizle
    tourSlides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    tourDescriptions.forEach(desc => {
        desc.classList.remove('active');
    });
    
    // Yeni tur indeksini hesapla
    currentTourSlide = (n + tourDescriptions.length) % tourDescriptions.length;
    
    // Tur türlerini al
    const turTurleri = Object.keys(tours_pictures_ids);
    const currentTurTuru = turTurleri[currentTourSlide];
    
    // Seçilen turun ilk slaytını göster
    const currentTurSlides = document.querySelectorAll(`.tour-slide.${currentTurTuru}`);
    if (currentTurSlides.length > 0) {
        currentTurSlides[0].classList.add('active');
    }
    
    // Seçilen turun açıklamasını göster
    tourDescriptions[currentTourSlide].classList.add('active');
    
    // Mevcut resim indeksini sıfırla
    currentTourImageIndex = 0;
}

function rotateTourImages() {
    const turTurleri = Object.keys(tours_pictures_ids);
    const currentTurTuru = turTurleri[currentTourSlide];
    
    const currentTurSlides = document.querySelectorAll(`.tour-slide.${currentTurTuru}`);
    
    if (currentTurSlides.length > 0) {
        currentTurSlides.forEach(slide => slide.classList.remove('active'));
        currentTourImageIndex = (currentTourImageIndex + 1) % currentTurSlides.length;
        currentTurSlides[currentTourImageIndex].classList.add('active');
    }
}

// Sadece resimlerin otomatik geçişi için
setInterval(rotateTourImages, 5000);
