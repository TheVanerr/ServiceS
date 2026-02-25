// ============================================================
//  ELEKTRİKSEL HATALAR  (E001 – E005)
// ============================================================
const electricalErrors = {
  'E001': {
    icon: '⚡',
    code: 'E001',
    title: 'Enerji Yok',
    description: 'Ana şalter açıldı ama makinede enerji yok gözüküyor.',
    causes: [
      {
        title: 'Faz Sırası Hatası',
        desc: 'Makineye fazlar ters geliyor.',
        solutions: [
          'Faz sırasını kontrol edin ve doğru sıraya alın',
          'Faz sırası rölesi takın veya test edin'
        ]
      },
      {
        title: 'Sigortalar Kapalı',
        desc: 'Kaçak akım sigortası kapalı.',
        solutions: [
          'Kaçak akım sigortasını kontrol edin ve sıfırlayın',
          'Kaçak akım kaynağını tespit edip giderin'
        ]
      },
      {
        title: 'Aşırı Isınma',
        desc: 'Kabloların erimesi.',
        solutions: [
          'Hasarlı kabloları tespit edin ve değiştirin',
          'İzolasyon testleri yapın',
          'Kablo güzergahındaki ısı kaynaklarını giderin'
        ]
      },
      {
        title: 'Mekanik Hasar',
        desc: 'Kablolara fiziksel zarar.',
        solutions: [
          'Güç kaynağını derhal kesin',
          'Hasarlı kabloları tespit edin ve değiştirin',
          'Nem kaynaklarını ortadan kaldırın'
        ]
      }
    ]
  },

  'E002': {
    icon: '⚡',
    code: 'E002',
    title: 'Aşırı Akım',
    description: 'Çekilen akım değeri belirlenen limitin üzerinde olduğunda aktif olur.',
    causes: [
      {
        title: 'Mekanik Blokaj',
        desc: 'Motor mili takılmış veya bloke.',
        solutions: [
          'Mekanik sistemi kontrol edin ve tıkanıklığı giderin',
          'Mil, rulman ve bağlı parçaları inceleyin'
        ]
      },
      {
        title: 'Aşırı Yük',
        desc: 'Kapasiteden fazla yük çekilmesi.',
        solutions: [
          'Yük değerlerini ölçün ve azaltın',
          'Motor kapasitesini ve nominal akımını kontrol edin'
        ]
      },
      {
        title: 'Kısa Devre',
        desc: 'Sargılarda kısa devre.',
        solutions: [
          'Motor sargılarını megger cihazıyla test edin',
          'Kısa devre olan fazı tespit edin ve motoru revize edin'
        ]
      },
      {
        title: 'Gerilim Düşüklüğü',
        desc: 'Düşük gerilimde aşırı akım çekimi.',
        solutions: [
          'Besleme gerilimini ölçün',
          'Gerilim regülatörü veya UPS değerlendirin'
        ]
      }
    ]
  },

  'E003': {
    icon: '⚡',
    code: 'E003',
    title: 'Gerilim Düşüklüğü',
    description: 'Besleme gerilimi minimum seviyenin altına düştüğünde bu hata üretilir.',
    causes: [
      {
        title: 'Şebeke Problemi',
        desc: 'Ana şebeke gerilim düşüklüğü.',
        solutions: [
          'Şebeke gerilimini ölçün',
          'Enerji sağlayıcı ile iletişime geçin'
        ]
      },
      {
        title: 'Kablo Boyutu',
        desc: 'Yetersiz kesit alanı.',
        solutions: [
          'Kablo kesitlerini elektrik projesine göre kontrol edin',
          'Gerekirse uygun kesit kablo ile değiştirin'
        ]
      },
      {
        title: 'Bağlantı Gevşekliği',
        desc: 'Gevşek terminal bağlantıları.',
        solutions: [
          'Tüm terminal bağlantılarını sıkılaştırın',
          'Bağlantı noktalarında gerilim kaybı ölçün'
        ]
      },
      {
        title: 'Transformatör',
        desc: 'Arızalı veya yetersiz trafo.',
        solutions: [
          'Transformatör çıkış gerilimini kontrol edin',
          'Gerekirse voltaj regülatörü ekleyin veya trafoyu değiştirin'
        ]
      }
    ]
  },

  'E004': {
    icon: '⚡',
    code: 'E004',
    title: 'Topraklama Hatası',
    description: 'Topraklama sisteminde arıza tespit edildiğinde aktif olur.',
    causes: [
      {
        title: 'Kopuk Toprak Hattı',
        desc: 'Topraklama kablosunun kesilmesi.',
        solutions: [
          'Toprak hattı sürekliliğini ohmmetre ile kontrol edin',
          'Kopuk bölümü tespit edip kabloyu yenileyin'
        ]
      },
      {
        title: 'Korozyon',
        desc: 'Toprak bağlantısında paslanma.',
        solutions: [
          'Bağlantı noktalarını temizleyin ve antioksidan pasta uygulayın',
          'Paslanmaya karşı korumalı bağlantı elemanı kullanın'
        ]
      },
      {
        title: 'Yüksek Direnç',
        desc: 'Toprak direncinin artması.',
        solutions: [
          'Toprak direncini ölçün (≤ 5 Ω önerilir)',
          'Gerekirse toprak elektrodu sistemini iyileştirin'
        ]
      },
      {
        title: 'Yanlış Bağlantı',
        desc: 'Hatalı topraklama montajı.',
        solutions: [
          'Topraklama şemasını elektrik projesine göre doğrulayın',
          'Gerekirse topraklama sistemini baştan yenileyin'
        ]
      }
    ]
  },

  'E005': {
    icon: '⚡',
    code: 'E005',
    title: 'Faz Kaybı',
    description: 'Üç fazlı sistemde bir veya daha fazla faz kaybı olduğunda aktif olur.',
    causes: [
      {
        title: 'Sigorta Arızası',
        desc: 'Bir fazın sigortası atmış.',
        solutions: [
          'Tüm sigortaları görsel ve süreklilik testi ile kontrol edin',
          'Atmış sigortayı değiştirin ve nedeni araştırın'
        ]
      },
      {
        title: 'Kablo Kopması',
        desc: 'Faz kablosu kesilmiş.',
        solutions: [
          'Kablo bağlantılarını ve güzergahını inceleyin',
          'Kopuk veya hasarlı kabloyu yenileyin'
        ]
      },
      {
        title: 'Kontaktör Arızası',
        desc: 'Kontaktör kontağı açık kalmış.',
        solutions: [
          'Kontaktörü çalıştırarak kontak sürekliliğini test edin',
          'Hasarlı kontaktörü değiştirin'
        ]
      },
      {
        title: 'Şebeke Problemi',
        desc: 'Şebekede faz kesintisi.',
        solutions: [
          'Şebeke beslemesini giriş terminallerinde ölçün',
          'Enerji sağlayıcı ile iletişime geçin'
        ]
      }
    ]
  }
};
