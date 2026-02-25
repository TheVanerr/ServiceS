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
          'Faz sırasını değiştirin ve tekrar deneyin',
          'Düzelmediyse ölçü aletini gerilim moduna alın ve TMŞde fazlar arası 380V , Faz ve Nötr arasında 220V olduğunu doğrulayın',
          'TMŞde ölçümler doğru ise sırasıyla önce ana kaçak akım sigortasını, sonra ana aşırı akım sigortasını aynı şekilde ölçün',
          'Sigortalardaki ölçüm doğru ise faz sıra rölesini kontrol edin.',
          'Faz sıra rölesine giren nötr ya da faz kablosunda temassızlık olabilir. El ile kontrol edin enerjiiyi kestikten sonra',
          'Yukarıdakilerin tamamını doğru ancak yine de yeşil ışık yakmıyorsa faz sıra rölesi arızalıdır. Yenisiyle değiştirin'
        ]
      },
      {
        title: 'Sigortalar Kapalı',
        desc: 'Kaçak akım sigortası kapalı.',
        solutions: [
          'Kaçak akım sigortasını kontrol edin açık değilse açın',
          'Panodaki tüm sigortaları kaldırın ve tekrar deneyin'
        ]
      },
      {
        title: 'Güç Kaynağı Arızası ',
        desc: 'Güç kaynağı bozulmuş ya da gelen kablolarda temassızlık olabilir',
        solutions: [
          'Multimetreyi gerilim ölçüm moduna alın ve güç kaynağı girişince faz ve nötr arasında 220V olduğunu doğrulayın',
          'Güç kaynağı girişinde gerilim doğru ise çıkışından 24V DC olup olmadığını ölçün',
          'Güç kaynağı girişi ya da çıkışındaki kablolar gevşek olabilir, enerjiyi kesip kabloları kontrol ediniz.',
          'Girişte doğru gerilim ölçümü varsa ancak çıkışta gerilim yoksa güç kaynağı arızalıdır, yenisiyle değiştirin'
        ]
      },
    ]
  },

  'E002': {
    icon: '⚡',
    code: 'E002',
    title: 'Makine Start Almıyor',
    description: 'Makinede enerji var, ama start almıyor.',
    causes: [
      {
        title: 'Kapak Switchi',
        desc: 'Kapak switchi basmıyor olabilir.',
        solutions: [
          'Kapak switchlerine mekanik olarak el ile basıp tekrar deneyin',
          'Kapak switchi elle basmaya rağmen çalışmıyorsa kablosu elektrik panosunda doğru yerde mi onu kontrol et.',
          'Elektrik panosunda doğru yerde ve el ile basmada yine çalışmıyorsa switch bozuk olabilir. Girdiği klemense köprü at ve tekrar dene. Çalışırsa sorun switchdedir. Yenisiyle değiştir.'
        ]
      },
      {
        title: 'Seviye Bekçisi',
        desc: 'Su bilgisi gelmiyor olabilir.',
        solutions: [
          'Tankta su var mı kontrol et',
          'Seviye sensörü çatal tip ise sensör üzerinde hem yeşil hem turuncu lamba yanıyor mu kontrol et.',
          'Yeşil lamba yanıyor ama turuncu lamba yanmıyorsa sensörün üstü kirli olabilir. Çatalını sil.',
          'Yeşil lamba yanmıyorsa sensöre enerji gelmiyordur. Enerji kutusunu aç ve 1 ve 2 numaralı uçlar arasında 24VDC gerilim ölç. 24V varsa ve yeşil yanmıyorsa sensör bozuktur. Yenisiyle değiştir.',
          'Turuncu ve yeşil lamba yanıyorsa ama sensör bilgisi gelmiyorsa sensör bilgisi yanlış klemenstedir. Onu kontrl et.',
          'Su var ve sensör bilgisi geliyorsa sorun burada değildir.'
        ]
      },
      {
        title: 'Acil Stop',
        desc: 'Acil stop butonuna basılmış olabilir.',
        solutions: [
          'Acil stop butonlarını kontrol edin',
          'Butonları sıfırlayın ve tekrar deneyin'
        ]
      },
      {
        title: 'Reset Alınmamış',
        desc: 'Reset almamış olabilir.',
        solutions: [
          'Reset butonuna lambası yanana kadar uzunca basın.',
          'Lamba yanmıyor ama sorun çözüldüyse reset lambası bozulmuştur. Değiştirin'
        ]
      },

      {
        title: 'Motor Termiği',
        desc: 'Motorların termik korumaları devreye girmiş olabilir.',
        solutions: [
          'Tüm motorların termiğini tek tek kontrol edin..',
          ' Atan termik var ise önce sebebini bulun sonra kaldırın.'
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
