// Ana Sayfa Biz Kimiz Resimleri
const SLIDER_RESIMLERI = [
    "1shCONXYuqnzhTbm2dIEQ6C3109EuXNXk",//1
    "13pR0POQlv6Vh5GavCUE6rdRPT60TrTs6",//2
    "1zo7vCNY7OTtNu4HmwFqtQpLVNd5GVTnp",//3
    "1zDcafuIGXIRYhQi8mDZPUhnpvxfaCXNR",//4
    "1180PeM_g-KMEuk_LXwmw-8y5PZESvzDk",//5
    "1rilI0sp847CjUIQGMHg_aKa0BdqEyxvQ",//6
    "1vrXOJhh-KSD62JWphzK1Xy_70yU9Mtmo",//7
    "18kRg-80sVQt9vMB5x3LGktmuLkY8-_eV"//8
];

//Pedallaya Pedallaya Resimleri
const PEDALLAYA_PEDALLAYA = [
    "1jv2cawV6CpbhAmCZY2ps8KBxLSHO5BFQ",//1
    "1lRxkgEx7jAeq3AXthjbaKvBtY15t-mQS",//2
    "1svz_DzhdHRMAI56oZgt1WGMQfh3Ab6lf",//3
    "1BlplJ-RmFgqBgtw3pFxnmZJ7wqkzOQkI",//4
    "1z7FqK2hOYwkn5tY6iVHvz5FH3Ocpkndz",//5
    "11kjFfaMKhNSndAmo6xKiczE4diKZscw6"//6
];

// Tur Slaytları
const GOOGLE_DRIVE_LINKLERI = {
    buyukada: {
        isim: "Büyükada Turu",
        aciklama: "Adalar'ın en büyüğü olan Büyükada'da, tarihi köşkler ve çam ormanları arasında keyifli bir tura ne dersin? Aya Yorgi'ye tırmanırken biraz terliyoruz ama manzara kesinlikle değiyor! Müthiş doğası ve enfes manzaralarıyla nefes kesen bu yerde bisiklet sürmeyi kim istemez ki! 🚲🌲", 
        resimler: [
            "1Jd7rjjSWKwJ62CuQhX6YSbwcKOooi6TU",
            "1M8IUmGvfG5KpGh8CQElhsdK5iCvesjzN",
            "18MdKDhZsgHUr6fq0rmm218x6NtJBl2Hp",
            "1PvUs8v3bzTEMd6Bw5YuyDh6zSac21MmJ"
        ]
    },
    heybeliada: {
        isim: "Heybeliada Turu",
        aciklama: "Heybeliada'nın eşsiz manzarasında, doğa ve tarihin buluştuğu rotalarda pedal çevirmeye hazır mısın? Çam kokulu yollarda ilerlerken Ruhban Okulu'nu ziyaret ediyor, Heybeliada'nın enfes manzaralarıyla keyfimize keyif katıyoruz. ⛰️🌅",
        resimler: [
            "11-xY8WvKHp71c5OBXv7ecJDXDUrIYrl8",
            "1Riq_73mNtTUwyLaWQE19RweIog801yxA",
            "1QRudj-hNkYs0TT1WNAqWIBF2fbDEbjjO",
            "1VFGUuOIgVQHrc2RTRqKW8RxKnYQDu649"
        ]
    },
    bostanci: {
        isim: "Bostancı-Maltepe Sahil Turu",
        aciklama: "Deniz kenarında ferah bir sürüş deneyiminİ kim istemez? Bostancı'dan Maltepe'ye uzanan sahil şeridinde martıların eşliğinde pedal çeviriyor, aralarda birbirinden keyifli molalar verip müthiş deniz havasıyla soluklanıyoruz. 🌊☕",
        resimler: [
            "18cnpalQtgAnaedjmAHW3s6aVLX0qyUgH",
            "1f3zJOFnZC5EmsjM-1qtMc1qOC-42De5E",
            "1F8iC0GHGaMtbK5DcSv0F3TRZao6nWli0",
            "147Wvu7CgzcPtyY1P1T1Qs9yP9Qp72epB",
            "1Lonm4gcCmSDVrBTFes3tUxVYGdsDGFKU"
        ]
    },
    anadolukavagi: {
        isim: "Anadolu Kavağı Turu",
        aciklama: "Boğaz'ın kuzeyine doğru keyifli bir yolculuğa ne dersin? Sahil boyunca meşhur deniz havasında pedallıyor, boğazı bisikletlerimizle keşfediyoruz. Bu güzel rotada unutamayacağımız anılar biriktiriyoruz. 🚴‍♂️",
        resimler: [
            "16DvBoyiyCUPM4EB52VnnBiZD-c1Rvn1m",
            "1kvY1nQkglF4J2QpBeUjk9GIrf7HJqPDM",
            "1PwvWRrPEnwwGCrygUDhmdxPLJFxxLWUX",
            "1b26Mx2FTxkIwoi_5MlWdI1r6hrkQwWI8"
        ]
    },
    beykoz: {
        isim: "Beykoz Spor Ormanı Turu",
        aciklama: "Şehrin gürültüsünden uzaklaşıp doğanın kalbine yolculuk yapmaya ne dersin? Beykoz'un yemyeşil ormanlarında, kuş sesleri eşliğinde pedal çeviriyoruz. Parkurlarda biraz zorlansak da, molalarda sohbet edip enerjimizi topluyoruz. Doğa ile baş başa güzel bir macera! 🌳💚",
        resimler: [
            "1DfD-IakQU9pRRtHTJdxKJQdFbW4wHIut",
            "1hfg8UAQ_MhNITvIkRKvZxOQRm_-PhKaT",
            "1QUhOBXfMiTAn77thcJm_BlKnejOvAImf",
            "1OHqG-kcs2To_zqdmu-jXTvOZMPguZtOi",
            "1H02Sbw-FMV-RUsNd8W15KKKBhO67XCkr",
            "1syIdeLkbVwPMs1GxfkRUUjdkCqmkBrNL"
        ]
    },
    rumelikavagi: {
        isim: "Rumeli Kavağı Turu",
        aciklama: "İstanbul Boğazı'nın eşsiz manzarası eşliğinde unutulmaz bir tur! Tarihi yalılar, köprüler ve deniz manzarası eşliğinde pedal çevirirken, en güzel fotoğraf noktalarında molalar veriyoruz. Boğaz'ın Avrupa yakasını birlikte keşfediyor ve bol bol anı biriktiriyoruz. 🌅🌉",
        resimler: [
            "1cHhMdcakyEq5E5EteubxEdLzUgAtdJ_7",
            "1GmxbeuwopvHdS0gXzg6dZJPiUnGoLDgC",
            "1NIrwgGygTpf4DmhX2jioPk2-1HGQtLe5",
            "1ifDbU-rOEgX-VwgzBdz_PavnxTM0ghLM"
        ]
    },
    canakkale: {
        isim: "Çanakkale Turu",
        aciklama: "Hem duygusal hem eğlenceli olan bu turumuzda hem şehitlikleri ziyaret ediyoruz hem de pedallarımızı Çanakkale'nin enfes havasında çeviriyoruz. Bol bol fotoğraf çekinip, birlikte unutulmaz anılar biriktiriyoruz. 🇹🇷✨",
        resimler: [
            "1ihRqVKTrNJJ98gxoFyCC1n1zMG72--qd",
            "1GYr6ujwsQUGAUCCsLFrG9s0mjA4WhnQH",
            "1ABmQDEkdzJwdXOhqmdYE4yqFsECDK2pW",
            "1VS3jDK7i25rNswKmF1z5PpFtK3K1GLyD"
        ]
    },
    bursa: {
        isim: "Bursa Turu",
        aciklama: "Bursa'nın zengin kültürüne bir yolculuk!Bu turumuzda hem kültür alanlarını ziyaret ediyoruz, hem de Bursa'nın enfes lezzetleriyle kendimizi şımartıyoruz.Bunları yaparken tabii ki pedallamayı da unutmuyoruz! 🚴‍♂️💚",
        resimler: [
            "1E8CdZmC85ZCc7-9zBv-oK8y_wXHbNtas",
            "1qZXedODEn7RlEe6EyrnEo4dovZ6y4GEi",
            "18wNnfxytvloHu4VDh3fZUJkaTBGvE_tu",
            "1FiVjQNYIUX2vymlQp9L9NyIowKp0C134",
            "1TBPTXOA4uinU_ZjGpdxeDmvQjbHMh04c",
            "1D4jzQ5VPmjgSt39hkwWqXVK6RBuRozQt"
        ]
    },
    konya: {
        isim: "Konya Turu",
        aciklama: "Biraz kültür, biraz tarih, ve bolca keyif! Bu turumuzda Konya ve zengin kültürünü gezecek, pedallarımızı Konya'nın müthiş doğasında çevireceğiz. Unutulmaz anılar biriktirmeden dönmek yok! 🚐🌟",
        resimler: [
            "1Ck0mAkEzc4PBPTV1ahiKRj3fVufPLsdj",
            "1wgclbDiPb3eG1clUhLeYgYsB1DFv4nQW",
            "1RHO-Ztk06L1y5tRrbC1iIZE2-8oymF8R",
            "1GXkLkzWUo6FGVCQaUDB0n865CjBs2Vih"
        ]
    }
};

// Galeri Resimleri
const GALERI_RESIMLERI = {
    "2024-2025": [
    {
            id: "1fpJXdRN9d9pq9Al1Ee8HQe1cRFLeV-hB",
            baslik: "Bursa Turu"
        },
        {
            id: "1L7OzytTsqI0CtHOzOHI_loYlYWD4Rdnx",
            baslik: "Bostancı Turu"
        },
        {
            id: "18SaaCwLSkvvI86sahSubJQRZtOLxlePQ",
            baslik: "Çanakkale Turu"
        }
    ],
    "2023-2024": [
        {
            id: "1_-HylFo_gpre-xWhuuNk-cLqnrC__m1J",
            baslik: "Büyükada Turu"
        },
        {
            id: "19_7D7CKdPUWkNVOd2IOivKOHxCXOX7n-",
            baslik: "Boğaz Turu"
        },
        {
            id: "1NF1I2-G8eVC6ZjiCnDqKfvsxh9ko63jc",
            baslik: "Heybeliada Turu"
        }
    ],
    "2022-2023": [
        {
            id: "1DD66hSa2Bn-Df-YbzXkFifiu7UqsPCHW",
            baslik: "Büyükada Turu"
        },
        {
            id: "1KQniy8Vhp3oh04FhejrwHO9cxYaQvROO",
            baslik: "Heybeliada Turu"
        }
    ],
    "2021-2022": [
        {
            id: "1VEk9v2lKT38gaJMDXqK58Gv5LMmfti5p",
            baslik: "Boğaz Turu"
        }
    ]
};

// Galeri Ekstra Resimleri
const GALERI_EKSTRA_RESIMLERI = {
    "2024-2025": {
        "buyukada": [//
            "1VmlMXffr7BOsDh2uD-isE9zQ3icdz4gW",
            "1cts9xCBa4FKOrOW6KWzGuEO0Sff6W0sm"
        ],
        "bostanci": [//
            "18cnpalQtgAnaedjmAHW3s6aVLX0qyUgH",
            "1f3zJOFnZC5EmsjM-1qtMc1qOC-42De5E",
            "1F8iC0GHGaMtbK5DcSv0F3TRZao6nWli0",
            "147Wvu7CgzcPtyY1P1T1Qs9yP9Qp72epB",
            "1Lonm4gcCmSDVrBTFes3tUxVYGdsDGFKU",
            "1d7W7Gmg576mgy0udAZWO7Vetc0vmBzc9"
        ],
        "rumelikavagi": [//
            "1cHhMdcakyEq5E5EteubxEdLzUgAtdJ_7",
            "1GmxbeuwopvHdS0gXzg6dZJPiUnGoLDgC",
            "1NIrwgGygTpf4DmhX2jioPk2-1HGQtLe5",
            "1ifDbU-rOEgX-VwgzBdz_PavnxTM0ghLM"
        ],
        "canakkale": [//
            "1ihRqVKTrNJJ98gxoFyCC1n1zMG72--qd",
            "1GYr6ujwsQUGAUCCsLFrG9s0mjA4WhnQH",
            "1ABmQDEkdzJwdXOhqmdYE4yqFsECDK2pW",
            "1VS3jDK7i25rNswKmF1z5PpFtK3K1GLyD",
            "1NSkAW4nMosUNT-XtbncC-S-w6YV49PlK",
            "1B6LPZ2PubfWBl8Fq008Wn1EPDo_8Lobp",
            "1f__8E9TQNlOajmVwYPrUh4dhS4r6hjyn",
            "1i20mkNSo2TQkbSWBfuYU4prXjPLBl4HI",
            "1jF1SzVMmy7NnsSea-_fZn3Hrgy5xxoQD",
            "10lPqmlu1T49OvHcW-gRptf0jHQaYoBOH",
            "1ceJHCHBTRtfXuoK-QmsCWNqQnewEg2X8",
            "1H83PDijihCF9iHohINzIKazJHvfooI4g"
        ],
        "bursa": [//
            "1E8CdZmC85ZCc7-9zBv-oK8y_wXHbNtas",
            "1qZXedODEn7RlEe6EyrnEo4dovZ6y4GEi",
            "18wNnfxytvloHu4VDh3fZUJkaTBGvE_tu",
            "1FiVjQNYIUX2vymlQp9L9NyIowKp0C134",
            "1TBPTXOA4uinU_ZjGpdxeDmvQjbHMh04c",
            "1D4jzQ5VPmjgSt39hkwWqXVK6RBuRozQt",
            "1XKU7a22JZSCgbyxra0qd5nQCH6ed4gdI"
        ],
        "konya": [//
            "1Ck0mAkEzc4PBPTV1ahiKRj3fVufPLsdj",
            "1wgclbDiPb3eG1clUhLeYgYsB1DFv4nQW",
            "1RHO-Ztk06L1y5tRrbC1iIZE2-8oymF8R",
            "1GXkLkzWUo6FGVCQaUDB0n865CjBs2Vih"
        ]
    },
    "2023-2024": {
        "bogaz": [//
            "13yKn7oYrUtJEwMSd9ySUbmY-h16ABOTO",
            "1jrIjG78FS6LOIomUZl09VWJT9kj0g_YG",
            "1rVAY5Sn69RvsXYFWPvH27gNGNKT4uw6c",
            "10wklUwgNXUuJ91cJbmHrdctjdyu2iFeD",
            "1t3uBiSMtINKaqy-dxk_3Dvgh8y0Ac50B"
        ],
        "heybeliada": [//
            "11-xY8WvKHp71c5OBXv7ecJDXDUrIYrl8",
            "1Riq_73mNtTUwyLaWQE19RweIog801yxA",
            "1QRudj-hNkYs0TT1WNAqWIBF2fbDEbjjO",
            "1VFGUuOIgVQHrc2RTRqKW8RxKnYQDu649",
            "1gxcNyt5zE08lC0uTp46lgWgbfVojuRBx",
            "1dSu5voiLqv8pzCRhr5BUGPW5fAKY-bpw"
        ],
        "buyukada": [//
            "1Jd7rjjSWKwJ62CuQhX6YSbwcKOooi6TU",
            "1M8IUmGvfG5KpGh8CQElhsdK5iCvesjzN",
            "18MdKDhZsgHUr6fq0rmm218x6NtJBl2Hp",
            "1PvUs8v3bzTEMd6Bw5YuyDh6zSac21MmJ",
            "1s8Xyrz0uC6RwpC4okpYFUxIoCSeNEbVJ",
            "1vLJ-Zk3ZnE5PZiCfrzESNfkXnrQdc2hl",
            "1Wtw0F86t4MwNI3XhpWItXrv2zhH-Ezag",
            "1ZLWGA5-m9eOksc1EwEnUHw3OeaHl1KyR",
            "1Tbqq99HZEhGHyGgYv7MAsBQyQ2UjVl4z",
            "1ncjIzFpl6jl6R1-InxZHHHhmmzb74AUM",
            "1yF6z1duWflHhI47x9hw3NF_VM4fDSEDh",
            "1JKIDiEvWGVmszm9YrHVpkozmGrZi9HI-"
        ],
        "bostanci": [//
            "1dCv_-syfuhAPUTw_F5xXchAM9DtZb9ys",
            "1xM7S2_8bLyWPXcm8r2wFFlh-Zmf7oIzQ",
            "1cGykXHi6IXbrLTsgsMlhjibKyWzt5hZh",
            "1zkVU0V4BDVbZVwQCuZaiNMCASL6Bg26G"
        ]
    },
    "2022-2023": {
        "buyukada": [
            "1DJngjr8cPZFTlfKbiU_kBXxzLpNgfIA4",
            "1BooPpzvnvplyep_UmoMlGgaOkR00PkSb",
            "1W-H8u6DpkZt6hNQhVSGw3J7oCwAZWDHf",
            "15oiFnGtRdyZrAgJ-Lroi-D00Z3zbi5Ff",
            "1-a6JhNONe-p3bVWJIuToBSq7PnJRQUyj",
            "1Be6a0A-5GrqT1xGg5QQXCP339ElPIUWp",
            "1A5aXORhLdzKv-YMiRoFRhvzlc_RIx-bp",
            "1OXzWVPBEh7edVqnjBD1FmqN8OSHUzPSr",
            "1wfUDBjs7URcuHMyw0QbREUJt6xgiMa4P",
            "160QFBG7NPVHk_SYT3JBIs--L1XM7OHeO"
        ],
        "heybeliada": [
            "12NB2bYKKCUt6H3G_70vlpe985OP6QWc4",
            "1ChMJ7-W2hffa9rBS6YelXuiEFek8fhiw",
            "15SR4D6yEUaT7-sh7ssl6EyPkb_TIEIU2"
        ]
    },
    "2021-2022": {
        "buyukada": [
            "18KyXXAbP9_IqNi1j97Xten0twaJgG-mJ",
            "1_rW-nN299Nwq37p6J-SJONB-hQD7bI09",
            "1lrvBukPc6NSfZLfFm5ZZQyV6Edole_Fu",
            "1mTtXBiIFWpgUxiOpHMgaK4b8YbUGdz0g"
        ],
        "heybeliada": [
            "1pBvbgM9st3LvVPNVYqaOC1CvtlwNSmwQ",
            "1_VCc8nsNpDmapRGSY1XU04X4CYrH2Xdq",
            "1BuCF3lKJN2N0k_yNfIL6HrrJqLGXqiZ4",
            "1cwLhtRM5maIfRDrAFMvun5pA1n97ZfOP"
        ],
        "bogaz": [
            "1JVAZJc9exVd4L5-V5GnpC3xvSGErg4qZ",
            "1IFb9Cen3LenOH5vR8DGfIbee9qRm46vw",
            "1lUHE4jxoQeKXGi3C36Epiv-00mGmYDK6",
            "1QXCETPnCtY-pPhmqzflMpe2bo6MR1jWh"
        ]
    }
};

// Etkinlikler Afişleri
const ETKINLIKLER = {
    kampusDisi: [
        {
            resimId: "1Xcet9yMuh9yMwIt6v9KHt9YJysKc2mxb",
            baslik: "Konya Turu",
            tarih: "1-2 Mayıs 2025",
            kayitAcik: true,
            kayitSon: "31 Nisan 2025",
            kayitLink: "https://forms.gle/gkna2qKTqjninPan8"
        }
    ],
    kampusIci: [
        {
            resimId: "1QKZepk9KqkEAKAdRwBHyiw8do-mfYzUU",
            baslik: "Heybeliada Turu",
            tarih: "26 Nisan 2025",
            kayitAcik: false,
            kayitSon: "24 Nisan 2025",
            kayitLink: "https://forms.gle/QiAnMKosZuGmursA8"
        }
    ]
};

// Üye Ol Bölümü Resmi ve Linki
const UYE_OL_RESIM = "uye_ol.gif";
const UYE_OL_LINK = "https://forms.gle/FGruUip4VD4mP3sGA";
