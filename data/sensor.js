// ============================================================
//  SENSÖR HATALARI  (S001 – S004)
// ============================================================
const sensorErrors = {
  'S001': {
    icon: '📡',
    code: 'S001',
    title: 'Sıcaklık Sensörü Hatası',
    description: 'Sıcaklık sensöründen geçersiz veya mantıksız değer alındığında aktif olur.',
    causes: [
      {
        title: 'Sensör Arızası',
        desc: 'Sensör elemanının bozulması.',
        solutions: [
          'Sensörü referans cihazla karşılaştırarak test edin',
          'Arızalı sensörü yenisiyle değiştirin'
        ]
      },
      {
        title: 'Kablo Hasarı',
        desc: 'Bağlantı kablosu kesik veya hasarlı.',
        solutions: [
          'Kablonun tüm güzergahını görsel olarak inceleyin',
          'Süreklilik ve izolasyon testi yapın; hasarlı bölümü değiştirin'
        ]
      },
      {
        title: 'Gevşek Bağlantı',
        desc: 'Terminal bağlantısı gevşek.',
        solutions: [
          'Tüm terminal vidalı bağlantılarını sıkılaştırın',
          'Bağlantı noktalarında sinyal gerilimini kontrol edin'
        ]
      },
      {
        title: 'Elektromanyetik Girişim',
        desc: 'EMI kaynaklı sinyal bozulması.',
        solutions: [
          'Blendajlı (ekranlı) kablo kullanın',
          'Sensör kablosunu güç kablolarından uzak tutun'
        ]
      }
    ]
  },

  'S002': {
    icon: '📡',
    code: 'S002',
    title: 'Basınç Sensörü Hatası',
    description: 'Basınç sensöründen anormal sinyal alındığında bu hata üretilir.',
    causes: [
      {
        title: 'Sensör Tıkanması',
        desc: 'Basınç alma noktası tıkalı.',
        solutions: [
          'Basınç alma noktasını ve körüğü temizleyin',
          'Temizleme sonrası sensör okumasını kontrol edin'
        ]
      },
      {
        title: 'Membran Hasarı',
        desc: 'Sensör diyaframı yırtık.',
        solutions: [
          'Sensörü sökün ve diyaframı görsel inceyleyin',
          'Hasarlı sensörü yenisiyle değiştirin'
        ]
      },
      {
        title: 'Kalibrasyon Kayması',
        desc: 'Sensör kalibrasyonu bozuk.',
        solutions: [
          'Kalibrasyon cihazı ile referans basınç uygulayarak doğrulayın',
          'Gerekirse sıfır ve açıklık kalibrasyonu yapın'
        ]
      },
      {
        title: 'Elektrik Arızası',
        desc: 'Sinyal devresi hasarlı.',
        solutions: [
          'Sensör besleme gerilimini ve sinyal çıkışını ölçün',
          'Devre kartını veya bağlantı terminallerini kontrol edin'
        ]
      }
    ]
  },

  'S003': {
    icon: '📡',
    code: 'S003',
    title: 'Hız Sensörü Hatası',
    description: 'Hız sensöründen sinyal alınamadığında veya tutarsız değer geldiğinde aktif olur.',
    causes: [
      {
        title: 'Sensör Mesafesi',
        desc: 'Sensör-hedef mesafesi uygunsuz.',
        solutions: [
          'Sensör-hedef mesafesini üretici toleransına göre ayarlayın',
          'Kilitleme somununu sıkıp mesafeyi sabitleyin'
        ]
      },
      {
        title: 'Hedef Hasarı',
        desc: 'Dişli veya mıknatıs hasarlı.',
        solutions: [
          'Hedef dişli veya mıknatıs diskini görsel inceleyin',
          'Kırık veya eksik diş varsa parçayı değiştirin'
        ]
      },
      {
        title: 'Kirlilik',
        desc: 'Sensör yüzeyinde birikinti.',
        solutions: [
          'Sensör yüzeyini yumuşak bez ve uygun temizleyiciyle silin',
          'Kirlenmeye yol açan kaynağı tespit edip giderin'
        ]
      },
      {
        title: 'Sensör Arızası',
        desc: 'Sensör elemanı bozuk.',
        solutions: [
          'Sensör çıkış sinyalini osiloskopta kontrol edin',
          'Arızalı sensörü yenisiyle değiştirin'
        ]
      }
    ]
  },

  'S004': {
    icon: '📡',
    code: 'S004',
    title: 'Seviye Sensörü Hatası',
    description: 'Sıvı seviye sensöründen hatalı veya tutarsız değer alındığında aktif olur.',
    causes: [
      {
        title: 'Sensör Kirliliği',
        desc: 'Sensör yüzeyinde tortu birikimi.',
        solutions: [
          'Sensörü sökün ve yüzeyini temizleyin',
          'Tortuya karşı korumalı sensör tipi değerlendirin'
        ]
      },
      {
        title: 'Köpük Oluşumu',
        desc: 'Sıvı yüzeyinde köpük.',
        solutions: [
          'Sıvıya uygun köpük önleyici (antifoam) kullanın',
          'Köpüğe duyarsız ultrasonik veya radar seviye sensörü kullanın'
        ]
      },
      {
        title: 'Sensör Arızası',
        desc: 'Sensör elemanı hasarlı.',
        solutions: [
          'Sensör çıkış sinyalini ölçerek işlevselliğini doğrulayın',
          'Hasarlı sensörü yenisiyle değiştirin'
        ]
      },
      {
        title: 'Yanlış Montaj',
        desc: 'Sensör yanlış konumda.',
        solutions: [
          'Montaj pozisyonunu ve açısını üretici şemasına göre kontrol edin',
          'Sensörü doğru pozisyona yeniden monte edin'
        ]
      }
    ]
  }
};
