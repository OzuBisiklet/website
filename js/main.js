// Ana JavaScript dosyası - Tüm modülleri başlatır

// Sayfa yüklendiğinde tüm fonksiyonları başlat
document.addEventListener('DOMContentLoaded', async function() {
    // Slider'ı başlat
    initSlider();
    
    // Discover butonunu başlat
    initDiscoverButton();
    
    // Tur slider'ını başlat
    initTourSlider(0);
    
    // Etkinlikleri dinamik olarak yükle
    loadEvents(0);
    
    // Galeri'yi başlat
    initGallery(0);
    
    // Üye ol butonunu güncelle
    const uyeOlBtn = document.querySelector('.join-btn');
    if (uyeOlBtn) {
        uyeOlBtn.onclick = function() {
            window.open(UYE_OL_LINK, '_blank');
        };
    }
    
    // Mobil menüyü başlat
    initMobileMenu();
    
    // Smooth scrolling'i başlat
    initSmoothScrolling();
    
    // Aktif bölüm vurgulamasını başlat
    initActiveSectionHighlighting();
    
    // Proje slider'ını başlat
    initProjectSlider();
});
