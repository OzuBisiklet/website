// Mobil menü için
function initMobileMenu() {
    const menuBtn = document.querySelector('.menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuBtn && navMenu) {
        menuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
        
        // Menü itemlerine tıklandığında menüyü kapat
        const navItems = navMenu.querySelectorAll('a');
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                navMenu.classList.remove('active');
            });
        });
    }
}

// Sayfa içi kaydırma için JavaScript
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                let headerOffset;
                switch(this.getAttribute('href')) {
                    case '#events':
                        headerOffset = 75;
                        break;
                    case '#tours':
                        headerOffset = 175;
                        break;
                    case '#join':
                        headerOffset = 145;
                        break;
                    default:
                        headerOffset = 95;
                }
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: this.getAttribute('href') === '#top' ? 0 : offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Bulunulan bölüme göre menü öğesini vurgulama
function initActiveSectionHighlighting() {
    const navItems = document.querySelectorAll('.nav-item');
    
    // Tüm bölümleri ID'leri ile birlikte manuel olarak tanımlayalım ve sıraya göre dizelim
    const sectionIds = ['top', 'events', 'tours', 'project', 'join', 'gallery', 'footer', 'slider-overlay'];
    const sections = sectionIds.map(id => document.getElementById(id)).filter(section => section !== null);
    
    // Sayfa kaydırıldıkça aktif bölümü belirle
    function highlightActiveSection() {
        // Sadece masaüstü görünümünde çalış (mobil değilse)
        if (window.innerWidth <= 768) {
            // Mobil görünümde bütün aktif sınıfları kaldır
            navItems.forEach(item => {
                item.classList.remove('active');
            });
            return;
        }
        
        // Viewport yüksekliğinin 2/3'ü - daha yukarı bir nokta
        const viewportThreshold = Math.floor(window.innerHeight * 0.4);
        
        // En son görünür olan bölüm
        let visibleSection = null;
        
        // Özel durum: Son bölüm (footer)
        const footer = document.getElementById('footer');
        if (footer) {
            const footerRect = footer.getBoundingClientRect();
            // Sayfa sonuna yaklaşıldığında footer'ı aktif et
            if (footerRect.top < window.innerHeight - 100) {
                visibleSection = footer;
            }
        }
        
        // Özel durum: Son bölüme gelmediyse, diğer bölümleri kontrol et
        if (!visibleSection) {
            // Bölümleri yukarıdan aşağıya doğru kontrol et
            for (let i = 0; i < sections.length; i++) {
                const section = sections[i];
                if (!section) continue;
                
                const rect = section.getBoundingClientRect();
                
                // Bölüm viewport'un belirlenen eşiğinin altında ise
                if (rect.top <= viewportThreshold) {
                    visibleSection = section;
                } else {
                    // İlk görünür olmayan bölüme ulaştık, döngüyü sonlandır
                    break;
                }
            }
        }
        
        // Görünür bölüm yoksa, ilk bölümü seç
        if (!visibleSection && sections.length > 0) {
            visibleSection = sections[0];
        }
        
        // Aktif menü öğesini güncelle
        navItems.forEach(item => {
            const href = item.getAttribute('href');
            
            if (visibleSection && href === '#' + visibleSection.id) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }
    
    // Sayfa kaydırma olayını dinle
    window.addEventListener('scroll', highlightActiveSection);
    
    // Sayfa yüklendiğinde başlangıç durumunu ayarla
    highlightActiveSection();
}
