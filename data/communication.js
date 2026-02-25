// ============================================================
//  İLETİŞİM HATALARI  (C001 – C003)
// ============================================================
const communicationErrors = {
  'C001': {
    icon: '🔗',
    code: 'C001',
    title: 'Bağlantı Kopması',
    description: 'Ana kontrol ünitesi ile cihaz arasındaki iletişim kesildiğinde aktif olur.',
    causes: [
      {
        title: 'Kablo Hasarı',
        desc: 'İletişim kablosu kesik veya hasarlı.',
        solutions: [
          'İletişim kablolarını görsel ve süreklilik testi ile kontrol edin',
          'Hasarlı kabloyu yenisiyle değiştirin'
        ]
      },
      {
        title: 'Konnektör Arızası',
        desc: 'Bağlantı soketi hasarlı.',
        solutions: [
          'Konnektörleri temizleyin ve kontakları inceleyin',
          'Hasarlı konnektörü değiştirin'
        ]
      },
      {
        title: 'EMI Girişimi',
        desc: 'Elektromanyetik parazit.',
        solutions: [
          'Blendajlı (ekranlı) iletişim kablosu kullanın',
          'İletişim hattını güç kablolarından en az 20 cm uzaklaştırın'
        ]
      },
      {
        title: 'Cihaz Arızası',
        desc: 'İletişim modülü bozuk.',
        solutions: [
          'İletişim modülünü loopback testi ile kontrol edin',
          'Arızalı modülü yenisiyle değiştirin'
        ]
      }
    ]
  },

  'C002': {
    icon: '🔗',
    code: 'C002',
    title: 'Veri Hatası',
    description: 'İletişim sırasında veri bütünlüğü hatası tespit edildiğinde aktif olur.',
    causes: [
      {
        title: 'Parazit',
        desc: 'Elektriksel gürültü etkisi.',
        solutions: [
          'Kablo ekranlamasını ve topraklamasını iyileştirin',
          'Sinyal filtreleme elemanı ekleyin'
        ]
      },
      {
        title: 'Baud Rate Uyumsuzluğu',
        desc: 'İletişim hızı farklı.',
        solutions: [
          'Her iki tarafın iletişim hız (baud rate) ayarını doğrulayın',
          'Ayarları eşleştirin ve bağlantıyı yeniden test edin'
        ]
      },
      {
        title: 'Protokol Hatası',
        desc: 'Yanlış iletişim protokolü.',
        solutions: [
          'Protokol ayarlarını (parity, stop bit, data bit) karşılaştırın',
          'Her iki tarafı aynı protokol parametreleriyle yapılandırın'
        ]
      },
      {
        title: 'Buffer Taşması',
        desc: 'Veri tamponu dolmuş.',
        solutions: [
          'Veri gönderim hızını azaltın',
          'Sistem yazılımını güncelleyin ve buffer boyutunu artırın'
        ]
      }
    ]
  },

  'C003': {
    icon: '🔗',
    code: 'C003',
    title: 'Zaman Aşımı',
    description: 'Belirlenen süre içinde yanıt alınamadığında bu hata üretilir.',
    causes: [
      {
        title: 'Ağır Yük',
        desc: 'Sistem aşırı yük altında.',
        solutions: [
          'CPU ve bellek kullanımını izleyerek yükü azaltın',
          'Kritik iletişim görevlerine öncelik verin'
        ]
      },
      {
        title: 'Yavaş İşlemci',
        desc: 'Hedef cihaz yavaş yanıt veriyor.',
        solutions: [
          'Hedef cihazdaki gereksiz işlemleri kısıtlayın',
          'Timeout süresini gerçekçi bir değere yükseltin'
        ]
      },
      {
        title: 'Ağ Tıkanıklığı',
        desc: 'İletişim hattı meşgul.',
        solutions: [
          'Ağ trafiğini analiz edin ve gereksiz yayınları azaltın',
          'Trunk/yedek iletişim hattı ekleyin'
        ]
      },
      {
        title: 'Konfigürasyon',
        desc: 'Timeout süresi çok kısa.',
        solutions: [
          'Timeout parametresini sistem gecikmelerine uygun artırın',
          'Cihaz yazılımını en güncel sürüme güncelleyin'
        ]
      }
    ]
  }
};
