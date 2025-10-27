// Global değişkenler
let currentProjectSlide = 0;

// Proje slaytları için JavaScript
function initProjectSlider() {
    const projectSlider = document.querySelector('.project-slider');
    const prevProjectBtn = document.querySelector('.prev-project');
    const nextProjectBtn = document.querySelector('.next-project');
    const discoverMoreBtn = document.querySelector('.discover-more-btn');
    
    // PEDALLAYA_PEDALLAYA dizisinden dinamik olarak slaytları oluştur
    if (projectSlider && project_pictures_ids.length > 0) {
        // Slaytları oluştur
        project_pictures_ids.forEach((imageId, index) => {
            const slide = document.createElement('div');
            slide.className = index === 0 ? 'project-slide active' : 'project-slide';
            const imageUrl = getGoogleDriveImageUrl(imageId);
            slide.style.backgroundImage = `url('${imageUrl}')`;
            
            // Nav butonlarının önüne slaytları ekle
            const navButtons = projectSlider.querySelector('.project-nav');
            projectSlider.insertBefore(slide, navButtons);   
        });
        
        // Slaytları yeniden seç
        const projectSlides = document.querySelectorAll('.project-slide');
        
        // Slayt gösterme fonksiyonu
        function showProjectSlide(n) {
            projectSlides[currentProjectSlide].classList.remove('active');
            currentProjectSlide = (n + projectSlides.length) % projectSlides.length;
            projectSlides[currentProjectSlide].classList.add('active');
        }
        
        // Otomatik slayt geçişi
        setInterval(() => {
            showProjectSlide(currentProjectSlide + 1);
        }, 5000);
        
        // Butonlara tıklama olayları
        if (prevProjectBtn) {
            prevProjectBtn.addEventListener('click', () => {
                showProjectSlide(currentProjectSlide - 1);
            });
        }
        
        if (nextProjectBtn) {
            nextProjectBtn.addEventListener('click', () => {
                showProjectSlide(currentProjectSlide + 1);
            });
        }
    }
}
