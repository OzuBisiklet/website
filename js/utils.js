// Google Drive'dan resim URL'si oluşturan fonksiyon
function getGoogleDriveImageUrl(imageId) {
    return `https://drive.google.com/thumbnail?id=${imageId}&sz=w1000`;
}

// Tur başlıklarını düzgün formatta döndüren fonksiyon
function getTurBaslik(tur) {
    const turBasliklari = {
        'buyukada': 'Büyükada',
        'heybeliada': 'Heybeliada',
        'bostanci': 'Bostancı',
        'anadolukavagi': 'Anadolu Kavağı',
        'beykoz': 'Beykoz',
        'bogaz': 'Boğaz',
        'canakkale': 'Çanakkale',
        'bursa': 'Bursa',
        'konya': 'Konya',
        'rumelikavagi': 'Rumeli Kavağı'
    };
    return turBasliklari[tur] || tur.charAt(0).toUpperCase() + tur.slice(1);
}

// Türkçe tarih formatını ayrıştırma fonksiyonu (örn: "15 Nisan 2024")
function parseTurkishDate(dateStr) {
    const months = {
        'Ocak': 0, 'Şubat': 1, 'Mart': 2, 'Nisan': 3, 'Mayıs': 4, 'Haziran': 5,
        'Temmuz': 6, 'Ağustos': 7, 'Eylül': 8, 'Ekim': 9, 'Kasım': 10, 'Aralık': 11
    };
    
    const parts = dateStr.split(' ');
    if (parts.length !== 3) {
        console.error(`Geçersiz tarih formatı: ${dateStr}`);
        return null;
    }
    
    const day = parseInt(parts[0], 10);
    const month = months[parts[1]];
    const year = parseInt(parts[2], 10);
    
    if (isNaN(day) || month === undefined || isNaN(year)) {
        console.error(`Tarih ayrıştırma hatası: ${dateStr}, Gün: ${day}, Ay: ${month}, Yıl: ${year}`);
        return null;
    }
    
    return new Date(year, month, day);
}
