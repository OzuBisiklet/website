const slider_pictures_ids = [
    "1shCONXYuqnzhTbm2dIEQ6C3109EuXNXk",
    "13pR0POQlv6Vh5GavCUE6rdRPT60TrTs6",
    "1zo7vCNY7OTtNu4HmwFqtQpLVNd5GVTnp",
    "1zDcafuIGXIRYhQi8mDZPUhnpvxfaCXNR",
    "1180PeM_g-KMEuk_LXwmw-8y5PZESvzDk",
    "1rilI0sp847CjUIQGMHg_aKa0BdqEyxvQ",
    "1vrXOJhh-KSD62JWphzK1Xy_70yU9Mtmo",
    "18kRg-80sVQt9vMB5x3LGktmuLkY8-_eV"
];

const events_details = {
    kampusDisi: [
        {
            resimId: "1Xcet9yMuh9yMwIt6v9KHt9YJysKc2mxb",
            tr: "Konya Turu",
            eng: "Konya Tour",
            tarih: "1-2 Mayıs 2025",
            tarih_eng: "1-2 May 2025",
            kayitAcik: true,
            kayitSon: "29 Nisan 2025",
            kayitLink: "https://forms.gle/gkna2qKTqjninPan8"
        }
    ],
    kampusIci: [
        {
            resimId: "1QKZepk9KqkEAKAdRwBHyiw8do-mfYzUU",
            tr: "Heybeliada Turu",
            eng: "Heybeliada Tour",
            tarih: "26 Nisan 2025",
            tarih_eng: "26 April 2025",
            kayitAcik: true,
            kayitSon: "24 Nisan 2025",
            kayitLink: "https://forms.gle/QiAnMKosZuGmursA8"
        }
    ]
};

const tours_pictures_ids = {
    buyukada: {
        title_tr: "Büyükada Turu",
        title_eng: "Buyukada Tour",
        desc_tr: "Adalar'ın en büyüğü olan Büyükada'da, tarihi köşkler ve çam ormanları arasında keyifli bir tura ne dersin? Aya Yorgi'ye tırmanırken biraz terliyoruz ama manzara kesinlikle değiyor! Müthiş doğası ve enfes manzaralarıyla nefes kesen bu yerde bisiklet sürmeyi kim istemez ki! 🚲🌲", 
        desc_eng: "How about a pleasant tour between the historical pavilions and pine forests in Buyukada, the largest of the islands? We sweat a little while climbing Aya Yorgi, but the landscape is definitely worth it! Who doesn't want to ride a bike in this breathtaking place with its great nature and exquisite landscapes! 🚲🌲 ", 
        ids: [
            "1Jd7rjjSWKwJ62CuQhX6YSbwcKOooi6TU",
            "1M8IUmGvfG5KpGh8CQElhsdK5iCvesjzN",
            "18MdKDhZsgHUr6fq0rmm218x6NtJBl2Hp",
            "1PvUs8v3bzTEMd6Bw5YuyDh6zSac21MmJ"
        ]
    },
    heybeliada: {
        title_tr: "Heybeliada Turu",
        title_eng: "Heybeliada Tour",
        desc_tr: "Heybeliada'nın eşsiz manzarasında, doğa ve tarihin buluştuğu rotalarda pedal çevirmeye hazır mısın? Çam kokulu yollarda ilerlerken Ruhban Okulu'nu ziyaret ediyor, Heybeliada'nın enfes manzaralarıyla keyfimize keyif katıyoruz. ⛰️🌅",
        desc_eng: "Are you ready to pedal in the unique view of Heybeliada, on the routes where nature and history meet? He visits the Seminary School while moving on the pine -scented roads, We enjoy the exquisite landscapes of Heybeliada. ⛰️🌅 ",
        ids: [
            "11-xY8WvKHp71c5OBXv7ecJDXDUrIYrl8",
            "1Riq_73mNtTUwyLaWQE19RweIog801yxA",
            "1QRudj-hNkYs0TT1WNAqWIBF2fbDEbjjO",
            "1VFGUuOIgVQHrc2RTRqKW8RxKnYQDu649"
        ]
    },
    bostanci: {
        title_tr: "Bostancı-Maltepe Sahil Turu",
        title_eng: "Bostanci-Maltepe Coastline Tour",
        desc_tr: "Deniz kenarında ferah bir sürüş deneyiminİ kim istemez? Bostancı'dan Maltepe'ye uzanan sahil şeridinde martıların eşliğinde pedal çeviriyor, aralarda birbirinden keyifli molalar verip müthiş deniz havasıyla soluklanıyoruz. 🌊☕",
        desc_eng: "Who doesn't want a spacious driving experience by the sea? Bostanci is pedaling with seagulls on the coastline extending from Bostanci to Maltepe, We take pleasant breaks between each other and breathe with great sea air. 🌊☕ ",
        ids: [
            "18cnpalQtgAnaedjmAHW3s6aVLX0qyUgH",
            "1f3zJOFnZC5EmsjM-1qtMc1qOC-42De5E",
            "1F8iC0GHGaMtbK5DcSv0F3TRZao6nWli0",
            "147Wvu7CgzcPtyY1P1T1Qs9yP9Qp72epB",
            "1Lonm4gcCmSDVrBTFes3tUxVYGdsDGFKU"
        ]
    },
    anadolukavagi: {
        title_tr: "Anadolu Kavağı Turu",
        title_eng: "Anadolu Kavagi Tour",
        desc_tr: "Boğaz'ın kuzeyine doğru keyifli bir yolculuğa ne dersin? Sahil boyunca meşhur deniz havasında pedallıyor, boğazı bisikletlerimizle keşfediyoruz. Bu güzel rotada unutamayacağımız anılar biriktiriyoruz. 🚴‍♂️",
        desc_eng: "How about a pleasant journey to the north of the Bosphorus? Along the beach, we pedal in the famous sea mood and discover the throat with our bikes. On this beautiful route, we accumulate memories that we will not forget. 🚴‍♂️ ",
        ids: [
            "16DvBoyiyCUPM4EB52VnnBiZD-c1Rvn1m",
            "1kvY1nQkglF4J2QpBeUjk9GIrf7HJqPDM",
            "1PwvWRrPEnwwGCrygUDhmdxPLJFxxLWUX",
            "1b26Mx2FTxkIwoi_5MlWdI1r6hrkQwWI8"
        ]
    },
    beykoz: {
        title_tr: "Beykoz Spor Ormanı Turu",
        title_eng: "Beykoz Forest Trail Tour",
        desc_tr: "Şehrin gürültüsünden uzaklaşıp doğanın kalbine yolculuk yapmaya ne dersin? Beykoz'un yemyeşil ormanlarında, kuş sesleri eşliğinde pedal çeviriyoruz. Parkurlarda biraz zorlansak da, molalarda sohbet edip enerjimizi topluyoruz. Doğa ile baş başa güzel bir macera! 🌳💚",
        desc_eng: "How would you like to move away from the noise of the city and travel to the heart of nature? In the lush forests of Beykoz, we are pedaling with bird sounds. Even though we have a little difficulty in the trails, we chat at breaks and collect our energy. A nice adventure with nature! 🌳💚 ",
        ids: [
            "1DfD-IakQU9pRRtHTJdxKJQdFbW4wHIut",
            "1hfg8UAQ_MhNITvIkRKvZxOQRm_-PhKaT",
            "1QUhOBXfMiTAn77thcJm_BlKnejOvAImf",
            "1OHqG-kcs2To_zqdmu-jXTvOZMPguZtOi",
            "1H02Sbw-FMV-RUsNd8W15KKKBhO67XCkr",
            "1syIdeLkbVwPMs1GxfkRUUjdkCqmkBrNL"
        ]
    },
    rumelikavagi: {
        title_tr: "Rumeli Kavağı Turu",
        title_eng: "Rumeli Kavagi Tour",
        desc_tr: "İstanbul Boğazı'nın eşsiz manzarası eşliğinde unutulmaz bir tur! Tarihi yalılar, köprüler ve deniz manzarası eşliğinde pedal çevirirken, en güzel fotoğraf noktalarında molalar veriyoruz. Boğaz'ın Avrupa yakasını birlikte keşfediyor ve bol bol anı biriktiriyoruz. 🌅🌉",
        desc_eng: "An unforgettable tour with the unique view of the Bosphorus! While we are pedaling with historical mansions, bridges and sea views, we take breaks at the most beautiful photo points. We discover the European side of the Bosphorus together and collect plenty of moments. 🌅🌉 ",
        ids: [
            "1cHhMdcakyEq5E5EteubxEdLzUgAtdJ_7",
            "1GmxbeuwopvHdS0gXzg6dZJPiUnGoLDgC",
            "1NIrwgGygTpf4DmhX2jioPk2-1HGQtLe5",
            "1ifDbU-rOEgX-VwgzBdz_PavnxTM0ghLM"
        ]
    },
    canakkale: {
        title_tr: "Çanakkale Turu",
        title_eng: "Canakkale Tour",
        desc_tr: "Hem duygusal hem eğlenceli olan bu turumuzda hem şehitlikleri ziyaret ediyoruz hem de pedallarımızı Çanakkale'nin enfes havasında çeviriyoruz. Bol bol fotoğraf çekinip, birlikte unutulmaz anılar biriktiriyoruz. 🇹🇷✨",
        desc_eng: "In this tour, which is both emotional and fun, we visit the martyrs and turn our pedals in the exquisite atmosphere of Canakkale. We take lots of photos and accumulate unforgettable memories together. 🇹🇷✨ ",
        ids: [
            "1ihRqVKTrNJJ98gxoFyCC1n1zMG72--qd",
            "1GYr6ujwsQUGAUCCsLFrG9s0mjA4WhnQH",
            "1ABmQDEkdzJwdXOhqmdYE4yqFsECDK2pW",
            "1VS3jDK7i25rNswKmF1z5PpFtK3K1GLyD"
        ]
    },
    bursa: {
        title_tr: "Bursa Turu",
        title_eng: "Bursa Tour",
        desc_tr: "Bursa'nın zengin kültürüne bir yolculuk!Bu turumuzda hem kültür alanlarını ziyaret ediyoruz, hem de Bursa'nın enfes lezzetleriyle kendimizi şımartıyoruz.Bunları yaparken tabii ki pedallamayı da unutmuyoruz! 🚴‍♂️💚",
        desc_eng: "A journey to the rich culture of Bursa!In this tour, we both visit the cultural fields and pamper ourselves with the exquisite tastes of Bursa.Of course we don't forget to pedal while doing these! 🚴‍♂️💚 ",
        ids: [
            "1E8CdZmC85ZCc7-9zBv-oK8y_wXHbNtas",
            "1qZXedODEn7RlEe6EyrnEo4dovZ6y4GEi",
            "18wNnfxytvloHu4VDh3fZUJkaTBGvE_tu",
            "1FiVjQNYIUX2vymlQp9L9NyIowKp0C134",
            "1TBPTXOA4uinU_ZjGpdxeDmvQjbHMh04c",
            "1D4jzQ5VPmjgSt39hkwWqXVK6RBuRozQt"
        ]
    },
    konya: {
        title_tr: "Konya Turu",
        title_eng: "Konya Tour",
        desc_tr: "Biraz kültür, biraz tarih, ve bolca keyif! Bu turumuzda Konya ve zengin kültürünü gezecek, pedallarımızı Konya'nın müthiş doğasında çevireceğiz. Unutulmaz anılar biriktirmeden dönmek yok! 🚐🌟",
        desc_eng: "A little culture, a little history, and plenty of pleasure! In this tour, we will visit Konya and its rich culture and turn our pedals in the great nature of Konya. No memorable memories do not return without saving! 🚐🌟 ",
        ids: [
            "1Ck0mAkEzc4PBPTV1ahiKRj3fVufPLsdj",
            "1wgclbDiPb3eG1clUhLeYgYsB1DFv4nQW",
            "1RHO-Ztk06L1y5tRrbC1iIZE2-8oymF8R",
            "1GXkLkzWUo6FGVCQaUDB0n865CjBs2Vih"
        ]
    }
};

const project_pictures_ids = [
    "1jv2cawV6CpbhAmCZY2ps8KBxLSHO5BFQ",
    "1lRxkgEx7jAeq3AXthjbaKvBtY15t-mQS",
    "1svz_DzhdHRMAI56oZgt1WGMQfh3Ab6lf",
    "1BlplJ-RmFgqBgtw3pFxnmZJ7wqkzOQkI",
    "1z7FqK2hOYwkn5tY6iVHvz5FH3Ocpkndz",
    "11kjFfaMKhNSndAmo6xKiczE4diKZscw6"
];

const UYE_OL_RESIM = "uye_ol.gif";
const UYE_OL_LINK = "https://forms.gle/FGruUip4VD4mP3sGA";

const gallery_highlights = {
    "2024-2025": [
        {
            id: "1fpJXdRN9d9pq9Al1Ee8HQe1cRFLeV-hB",
            tr: "Bursa Turu",
            eng: "Bursa Tour",
        },
        {
            id: "1L7OzytTsqI0CtHOzOHI_loYlYWD4Rdnx",
            tr: "Bostancı Turu",
            eng: "Bostanci Tour",
        },
        {
            id: "18SaaCwLSkvvI86sahSubJQRZtOLxlePQ",
            tr: "Çanakkale Turu",
            eng: "Canakkale Tour",
        }
    ],
    "2023-2024": [
        {
            id: "1_-HylFo_gpre-xWhuuNk-cLqnrC__m1J",
            tr: "Büyükada Turu",
            eng: "Princes' Island Tour"
        },
        {
            id: "19_7D7CKdPUWkNVOd2IOivKOHxCXOX7n-",
            tr: "Boğaz Turu",
            eng: "Bosphorus Tour"
        },
        {
            id: "1NF1I2-G8eVC6ZjiCnDqKfvsxh9ko63jc",
            tr: "Heybeliada Turu",
            eng: "Heybeliada Tour"
        }
    ],
    "2022-2023": [
        {
            id: "1DD66hSa2Bn-Df-YbzXkFifiu7UqsPCHW",
            tr: "Büyükada Turu",
            eng: "Princes' Island Tour"
        },
        {
            id: "1KQniy8Vhp3oh04FhejrwHO9cxYaQvROO",
            tr: "Heybeliada Turu",
            eng: "Heybeliada Tour"
        }
    ],
    "2021-2022": [
        {
            id: "1VEk9v2lKT38gaJMDXqK58Gv5LMmfti5p",
            tr: "Boğaz Turu",
            eng: "Bosphorus Tour"
        }
    ]
};

const gallery_ids = {
    "2024-2025": {
        "buyukada": [
            "1VmlMXffr7BOsDh2uD-isE9zQ3icdz4gW",
            "1cts9xCBa4FKOrOW6KWzGuEO0Sff6W0sm"
        ],
        "bostanci": [
            "18cnpalQtgAnaedjmAHW3s6aVLX0qyUgH",
            "1f3zJOFnZC5EmsjM-1qtMc1qOC-42De5E",
            "1F8iC0GHGaMtbK5DcSv0F3TRZao6nWli0",
            "147Wvu7CgzcPtyY1P1T1Qs9yP9Qp72epB",
            "1Lonm4gcCmSDVrBTFes3tUxVYGdsDGFKU",
            "1d7W7Gmg576mgy0udAZWO7Vetc0vmBzc9"
        ],
        "rumelikavagi": [
            "1cHhMdcakyEq5E5EteubxEdLzUgAtdJ_7",
            "1GmxbeuwopvHdS0gXzg6dZJPiUnGoLDgC",
            "1NIrwgGygTpf4DmhX2jioPk2-1HGQtLe5",
            "1ifDbU-rOEgX-VwgzBdz_PavnxTM0ghLM"
        ],
        "canakkale": [
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
        "bursa": [
            "1E8CdZmC85ZCc7-9zBv-oK8y_wXHbNtas",
            "1qZXedODEn7RlEe6EyrnEo4dovZ6y4GEi",
            "18wNnfxytvloHu4VDh3fZUJkaTBGvE_tu",
            "1FiVjQNYIUX2vymlQp9L9NyIowKp0C134",
            "1TBPTXOA4uinU_ZjGpdxeDmvQjbHMh04c",
            "1D4jzQ5VPmjgSt39hkwWqXVK6RBuRozQt",
            "1XKU7a22JZSCgbyxra0qd5nQCH6ed4gdI"
        ],
        "konya": [
            "1Ck0mAkEzc4PBPTV1ahiKRj3fVufPLsdj",
            "1wgclbDiPb3eG1clUhLeYgYsB1DFv4nQW",
            "1RHO-Ztk06L1y5tRrbC1iIZE2-8oymF8R",
            "1GXkLkzWUo6FGVCQaUDB0n865CjBs2Vih"
        ]
    },
    "2023-2024": {
        "bogaz": [
            "13yKn7oYrUtJEwMSd9ySUbmY-h16ABOTO",
            "1jrIjG78FS6LOIomUZl09VWJT9kj0g_YG",
            "1rVAY5Sn69RvsXYFWPvH27gNGNKT4uw6c",
            "10wklUwgNXUuJ91cJbmHrdctjdyu2iFeD",
            "1t3uBiSMtINKaqy-dxk_3Dvgh8y0Ac50B"
        ],
        "heybeliada": [
            "11-xY8WvKHp71c5OBXv7ecJDXDUrIYrl8",
            "1Riq_73mNtTUwyLaWQE19RweIog801yxA",
            "1QRudj-hNkYs0TT1WNAqWIBF2fbDEbjjO",
            "1VFGUuOIgVQHrc2RTRqKW8RxKnYQDu649",
            "1gxcNyt5zE08lC0uTp46lgWgbfVojuRBx",
            "1dSu5voiLqv8pzCRhr5BUGPW5fAKY-bpw"
        ],
        "buyukada": [
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
        "bostanci": [
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