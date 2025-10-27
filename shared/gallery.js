// Galeri resimlerini yükle
function initGallery(selector) {
    // Her yıl için resimleri yükle
    Object.entries(gallery_highlights).forEach(([yil, resimler]) => {
        resimler.forEach((resim, index) => {
            const imgId = `gallery-img-${yil}-${index + 1}`;
            const titleId = `gallery-title-${yil}-${index + 1}`;
            const imgElement = document.getElementById(imgId);
            const titleElement = document.getElementById(titleId);
            
            if (imgElement && titleElement) {
                imgElement.src = getGoogleDriveImageUrl(resim.id);
                if(selector == 0){
                    titleElement.textContent = resim.tr;
                }else if(selector == 1){
                    titleElement.textContent = resim.eng;
                }
                
            }
        });
    });
    
    // Galeri filtreleme için kod
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const galleryContainer = document.querySelector('.gallery-container');
    const viewAllButton = document.querySelector('.filter-btn.view-all');

    // Filtre butonları için
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filterValue = button.getAttribute('data-filter');
            
            // Tümünü Görüntüle butonu için özel durum
            if (button.classList.contains('view-all')) {
                return;
            }

            // Yıl filtreleri için toggle özelliği
            if (filterValue !== 'all') {
                const wasActive = button.classList.contains('active');
                
                // Diğer yıl filtrelerini deaktif yap
                filterButtons.forEach(btn => {
                    if (btn.getAttribute('data-filter') !== 'all' && 
                        !btn.classList.contains('view-all')) {
                        btn.classList.remove('active');
                    }
                });

                // Eğer buton aktif değilse aktif yap, aktifse deaktif yap
                if (!wasActive) {
                    button.classList.add('active');
                }

                // Resimleri filtrele
                const allItems = document.querySelectorAll('.gallery-item, .gallery-item.extra-photo');
                allItems.forEach(item => {
                    const category = item.getAttribute('data-category');
                    if (wasActive) {
                        // Filtre deaktif edildiğinde tüm resimleri göster
                        item.classList.remove('hidden');
                    } else {
                        // Filtre aktif edildiğinde sadece seçili yılın resimlerini göster
                        if (category === filterValue) {
                            item.classList.remove('hidden');
                        } else {
                            item.classList.add('hidden');
                        }
                    }
                });
            }
        });
    });

    // Tümünü Görüntüle butonu için
    if (viewAllButton) {
        viewAllButton.addEventListener('click', () => {
            const isFullscreen = !viewAllButton.classList.contains('active');
            
            if (isFullscreen) {
                // Tam ekran moduna geç
                viewAllButton.classList.add('active');
                galleryContainer.classList.add('fullscreen');
                document.querySelector('.gallery-grid').classList.add('fullscreen');
                document.body.style.overflow = 'hidden';
                if(selector == 0){
                    viewAllButton.textContent = back_btn[0];
                }else if(selector == 1){
                    viewAllButton.textContent = back_btn[1];
                }
                
                // Öne Çıkarılanlar butonunu gizle
                document.querySelector('.filter-btn[data-filter="all"]').style.display = 'none';

                // Resim ID'lerini yıllara eşleştir
                const resimYilEslestirme = {};
                Object.entries(gallery_highlights).forEach(([yil, resimler]) => {
                    resimler.forEach(resim => {
                        resimYilEslestirme[resim.id] = yil;
                    });
                });

                // Ekstra resimleri yıl bazlı yükle
                Object.entries(gallery_ids).forEach(([yil, turlar]) => {
                    // Her yıldaki turları işle
                    Object.entries(turlar).forEach(([tur, resimler]) => {
                        // Her tur için resimleri ekle
                        resimler.forEach(id => {
                            const galleryGrid = document.querySelector('.gallery-grid');
                            const newItem = document.createElement('div');
                            
                            newItem.className = 'gallery-item extra-photo';
                            newItem.setAttribute('data-category', yil);  // Yıl kategorisi doğrudan atanıyor

                            let part;

                            if(selector == 0){
                                part = "Turu";
                            }else if(selector == 1){
                                part = "Tour";
                            }
                            
                            newItem.innerHTML = `
                                <div class="gallery-card">
                                    <div class="gallery-image">
                                        <img src="${getGoogleDriveImageUrl(id)}" alt="${getTurBaslik(tur, selector)} ${part}">
                                        <div class="gallery-hover">${getTurBaslik(tur, selector)} ${part}</div>
                                    </div>
                                </div>
                            `;
                            
                            galleryGrid.appendChild(newItem);
                        });
                    });
                });
            } else {
                // Normal moda dön
                viewAllButton.classList.remove('active');
                galleryContainer.classList.remove('fullscreen');
                document.querySelector('.gallery-grid').classList.remove('fullscreen');
                document.body.style.overflow = '';
                if(selector == 0){
                    viewAllButton.textContent = view_all_btn[0];
                }else if(selector == 1){
                    viewAllButton.textContent = view_all_btn[1];
                }
                
                // Öne Çıkarılanlar butonunu göster
                document.querySelector('.filter-btn[data-filter="all"]').style.display = '';

                // Ekstra resimleri kaldır
                document.querySelectorAll('.gallery-item.extra-photo').forEach(item => {
                    item.remove();
                });
            }
        });
    }
}
