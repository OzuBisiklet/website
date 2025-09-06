// Etkinlikleri dinamik olarak yükle
function loadEvents() {
    // Kampüs dışı etkinlikler için değişkenler
    let currentKampusDisoEvent = 0;
    const kampusDisiSlider = document.querySelector('.event-section.kampus-disi .event-slider');
    const kampusDisiRegisterBtn = document.querySelector('.event-section.kampus-disi .event-btn.register-btn');
    const kampusDisiPrevBtn = document.querySelector('.event-section.kampus-disi .kampus-disi-prev');
    const kampusDisiNextBtn = document.querySelector('.event-section.kampus-disi .kampus-disi-next');
    
    // Kampüs içi etkinlikler için değişkenler
    let currentKampusIciEvent = 0;
    const kampusIciSlider = document.querySelector('.event-section.kampus-ici .event-slider');
    const kampusIciRegisterBtn = document.querySelector('.event-section.kampus-ici .event-btn.soon-btn');
    const kampusIciPrevBtn = document.querySelector('.event-section.kampus-ici .kampus-ici-prev');
    const kampusIciNextBtn = document.querySelector('.event-section.kampus-ici .kampus-ici-next');
    
    // Son tarihlerini kontrol et ve geçmiş olanları otomatik olarak kayitAcik = false yap
    const bugununTarihi = new Date();
    
    // Bugünün tarihini gün başına ayarla (saat, dakika, saniyeyi sıfırla)
    bugununTarihi.setHours(0, 0, 0, 0);
    
    // Kampüs dışı etkinlikleri kontrol et
    ETKINLIKLER.kampusDisi.forEach(etkinlik => {
        const sonTarih = parseTurkishDate(etkinlik.kayitSon);
        if (sonTarih) {
            if (sonTarih < bugununTarihi) {
                etkinlik.kayitAcik = false;
            }
        }
    });
    
    // Kampüs içi etkinlikleri kontrol et
    ETKINLIKLER.kampusIci.forEach(etkinlik => {
        const sonTarih = parseTurkishDate(etkinlik.kayitSon);
        if (sonTarih) {
            if (sonTarih < bugununTarihi) {
                etkinlik.kayitAcik = false;
            }
        }
    });
    
    // Kampüs dışı etkinlikleri yükle
    if (kampusDisiSlider) {
        kampusDisiSlider.innerHTML = '';
        ETKINLIKLER.kampusDisi.forEach((etkinlik, index) => {
            const isActive = index === 0 ? 'active' : '';
            const imgUrl = getGoogleDriveImageUrl(etkinlik.resimId);
            
            kampusDisiSlider.innerHTML += `
                <div class="event-poster ${isActive}" data-index="${index}">
                    <img src="${imgUrl}" alt="${etkinlik.baslik}">
                    <div class="event-overlay">
                        <h4>${etkinlik.baslik}</h4>
                        <p>${etkinlik.tarih}</p>
                    </div>
                </div>
            `;
        });
    } else {
        console.error("Kampüs dışı slider bulunamadı!");
    }
    
    // Kampüs içi etkinlikleri yükle
    if (kampusIciSlider) {
        kampusIciSlider.innerHTML = '';
        ETKINLIKLER.kampusIci.forEach((etkinlik, index) => {
            const isActive = index === 0 ? 'active' : '';
            const imgUrl = getGoogleDriveImageUrl(etkinlik.resimId);
            
            kampusIciSlider.innerHTML += `
                <div class="event-poster ${isActive}" data-index="${index}">
                    <img src="${imgUrl}" alt="${etkinlik.baslik}">
                    <div class="event-overlay">
                        <h4>${etkinlik.baslik}</h4>
                        <p>${etkinlik.tarih}</p>
                    </div>
                </div>
            `;
        });
    } else {
        console.error("Kampüs içi slider bulunamadı!");
    }
    
    // Kampüs dışı navigasyon butonlarını etkinleştir
    if (ETKINLIKLER.kampusDisi.length > 1) {
        kampusDisiPrevBtn.style.display = 'flex';
        kampusDisiNextBtn.style.display = 'flex';
        
        kampusDisiPrevBtn.onclick = function() {
            showKampusDisEvent(currentKampusDisoEvent - 1);
            updateKampusDisButton();
        };
        
        kampusDisiNextBtn.onclick = function() {
            showKampusDisEvent(currentKampusDisoEvent + 1);
            updateKampusDisButton();
        };
    } else {
        kampusDisiPrevBtn.style.display = 'none';
        kampusDisiNextBtn.style.display = 'none';
    }
    
    // Kampüs içi navigasyon butonlarını etkinleştir
    if (ETKINLIKLER.kampusIci.length > 1) {
        kampusIciPrevBtn.style.display = 'flex';
        kampusIciNextBtn.style.display = 'flex';
        
        kampusIciPrevBtn.onclick = function() {
            showKampusIciEvent(currentKampusIciEvent - 1);
            updateKampusIciButton();
        };
        
        kampusIciNextBtn.onclick = function() {
            showKampusIciEvent(currentKampusIciEvent + 1);
            updateKampusIciButton();
        };
    } else {
        kampusIciPrevBtn.style.display = 'none';
        kampusIciNextBtn.style.display = 'none';
    }
    
    // Kayıt butonunun kullanılabilirliğini ve hedefini güncelle
    updateKampusDisButton();
    updateKampusIciButton();
    
    // Kampüs dışı etkinlik göster
    function showKampusDisEvent(n) {
        const eventPosters = kampusDisiSlider.querySelectorAll('.event-poster');
        eventPosters.forEach(poster => poster.classList.remove('active'));
        
        currentKampusDisoEvent = (n + ETKINLIKLER.kampusDisi.length) % ETKINLIKLER.kampusDisi.length;
        eventPosters[currentKampusDisoEvent].classList.add('active');
    }
    
    // Kampüs içi etkinlik göster
    function showKampusIciEvent(n) {
        const eventPosters = kampusIciSlider.querySelectorAll('.event-poster');
        eventPosters.forEach(poster => poster.classList.remove('active'));
        
        currentKampusIciEvent = (n + ETKINLIKLER.kampusIci.length) % ETKINLIKLER.kampusIci.length;
        eventPosters[currentKampusIciEvent].classList.add('active');
    }
    
    // Kampüs dışı kayıt butonunu güncelle
    function updateKampusDisButton() {
        if (ETKINLIKLER.kampusDisi.length > 0) {
            const currentEvent = ETKINLIKLER.kampusDisi[currentKampusDisoEvent];
            
            // Kayıt son tarihini tekrar kontrol et
            const bugununTarihi = new Date();
            bugununTarihi.setHours(0, 0, 0, 0);
            const sonTarih = parseTurkishDate(currentEvent.kayitSon);
            
            if (sonTarih && sonTarih < bugununTarihi) {
                currentEvent.kayitAcik = false;
            }
                                
            if (currentEvent.kayitAcik) {
                kampusDisiRegisterBtn.disabled = false;
                kampusDisiRegisterBtn.textContent = 'Register';
                kampusDisiRegisterBtn.classList.remove('soon-btn');
                kampusDisiRegisterBtn.classList.add('register-btn');
                kampusDisiRegisterBtn.onclick = function() {
                    window.open(currentEvent.kayitLink, '_blank');
                };
            } else {
                kampusDisiRegisterBtn.disabled = true;
                kampusDisiRegisterBtn.textContent = 'Passed';
                kampusDisiRegisterBtn.classList.add('soon-btn');
                kampusDisiRegisterBtn.classList.remove('register-btn');
            }
        }
    }
    
    // Kampüs içi kayıt butonunu güncelle
    function updateKampusIciButton() {
        if (ETKINLIKLER.kampusIci.length > 0) {
            const currentEvent = ETKINLIKLER.kampusIci[currentKampusIciEvent];
            
            // Kayıt son tarihini tekrar kontrol et
            const bugununTarihi = new Date();
            bugununTarihi.setHours(0, 0, 0, 0);
            const sonTarih = parseTurkishDate(currentEvent.kayitSon);
            
            if (sonTarih && sonTarih < bugununTarihi) {
                currentEvent.kayitAcik = false;
            }
                                
            if (currentEvent.kayitAcik) {
                kampusIciRegisterBtn.disabled = false;
                kampusIciRegisterBtn.textContent = 'Register';
                kampusIciRegisterBtn.classList.remove('soon-btn');
                kampusIciRegisterBtn.classList.add('register-btn');
                kampusIciRegisterBtn.onclick = function() {
                    window.open(currentEvent.kayitLink, '_blank');
                };
            } else {
                kampusIciRegisterBtn.disabled = true;
                kampusIciRegisterBtn.textContent = 'Passed';
                kampusIciRegisterBtn.classList.add('soon-btn');
                kampusIciRegisterBtn.classList.remove('register-btn');
            }
        }
    }
}
