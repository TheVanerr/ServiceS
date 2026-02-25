// ============================================================
//  MEKANİK HATALAR  (M001 – M005)
// ============================================================
const mechanicalErrors = {
  'M001': {
    icon: '⚙️',
    code: 'M001',
    title: 'Motor Aşırı Isınma',
    description: 'Motor normalin üzerinde bir sıcaklığa ulaştığında bu hata kodu üretilir. Acil müdahale gerektirir.',
    causes: [
      {
        title: 'Yetersiz Soğutma',
        desc: 'Fan arızası veya hava kanalı tıkanıklığı.',
        solutions: [
          'Soğutma fanının çalışıp çalışmadığını kontrol edin',
          'Hava kanallarını temizleyin ve tıkanıklığı giderin'
        ]
      },
      {
        title: 'Aşırı Yük',
        desc: 'Motor kapasitesinin üzerinde çalıştırılması.',
        solutions: [
          'Yük değerlerini ölçün ve motor nominal değeriyle karşılaştırın',
          'Yükü azaltın veya daha güçlü motor kullanın'
        ]
      },
      {
        title: 'Rulman Sürtünmesi',
        desc: 'Aşınmış veya hasarlı rulmanlar.',
        solutions: [
          'Rulmanları sesli ve titreşim testleriyle inceleyin',
          'Hasarlı rulmanları değiştirin'
        ]
      },
      {
        title: 'Ortam Sıcaklığı',
        desc: 'Çalışma ortamının çok sıcak olması.',
        solutions: [
          'Ortam sıcaklığını ölçün ve motor sınıfıyla karşılaştırın',
          'Havalandırma iyileştirin veya harici soğutma ekleyin'
        ]
      },
      {
        title: 'Yağlama Eksikliği',
        desc: 'Yetersiz veya uygun olmayan yağlama.',
        solutions: [
          'Yağlama noktalarını kontrol edin ve uygun gres/yağ ekleyin',
          'Yağlama aralıklarını bakım planına göre güncelleyin'
        ]
      }
    ]
  },

  'M002': {
    icon: '⚙️',
    code: 'M002',
    title: 'Rulman Arızası',
    description: 'Rulman hasarı veya aşınması tespit edildiğinde bu hata oluşur.',
    causes: [
      {
        title: 'Doğal Aşınma',
        desc: 'Uzun süreli kullanıma bağlı aşınma.',
        solutions: [
          'Rulmanları periyodik bakımda inceleyin',
          'Aşınan rulmanları derhal değiştirin'
        ]
      },
      {
        title: 'Yanlış Montaj',
        desc: 'Rulmanın hatalı takılması.',
        solutions: [
          'Montaj prosedürlerini üretici kılavuzuna göre gözden geçirin',
          'Rulmanı uygun aparat ve tork değerleriyle yeniden monte edin'
        ]
      },
      {
        title: 'Kirlilik',
        desc: 'Toz, kir veya yabancı madde girişi.',
        solutions: [
          'Sızdırmazlık elemanlarını (keçe, conta) kontrol edin',
          'Rulman çevresini temizleyin ve yeni sızdırmazlık takın'
        ]
      },
      {
        title: 'Yetersiz Yağlama',
        desc: 'Yağ eksikliği veya yanlış yağ tipi.',
        solutions: [
          'Üreticinin önerdiği gres/yağı kullanın',
          'Yağlama programı oluşturun ve periyodik uygulayın'
        ]
      }
    ]
  },

  'M003': {
    icon: '⚙️',
    code: 'M003',
    title: 'Kayış Kopması',
    description: 'Tahrik kayışının kopması veya gevşemesi durumunda aktif olur.',
    causes: [
      {
        title: 'Aşırı Gerginlik',
        desc: 'Kayış çok gergin ayarlanmış.',
        solutions: [
          'Kayış gerginliğini üretici değerlerine göre ayarlayın',
          'Gerginlik ölçüm aleti kullanarak doğrulayın'
        ]
      },
      {
        title: 'Yaşlanma',
        desc: 'Kayışın elastikiyetini kaybetmesi.',
        solutions: [
          'Kayışı görsel olarak kontrol edin (çatlak, sertleşme)',
          'Periyodik bakım programına göre kayışı değiştirin'
        ]
      },
      {
        title: 'Yanlış Hizalama',
        desc: 'Kasnakların hizasız olması.',
        solutions: [
          'Kasnak hizalamasını düz kenar veya lazer aletle kontrol edin',
          'Hizalama hatalarını düzeltin'
        ]
      },
      {
        title: 'Aşırı Sıcaklık',
        desc: 'Yüksek sıcaklığa maruz kalma.',
        solutions: [
          'Çalışma sıcaklığını ölçün ve kayış sınıfıyla karşılaştırın',
          'Isı kaynağından uzaklaştırın veya ısıya dayanıklı kayış kullanın'
        ]
      }
    ]
  },

  'M004': {
    icon: '⚙️',
    code: 'M004',
    title: 'Titreşim Hatası',
    description: 'Anormal titreşim seviyesi algılandığında bu hata üretilir.',
    causes: [
      {
        title: 'Dengesiz Yük',
        desc: 'Dönen parçalarda dengesizlik.',
        solutions: [
          'Dönen parçalarda dinamik dengeleme yapın',
          'Balans ağırlıklarını kontrol edin ve düzeltin'
        ]
      },
      {
        title: 'Gevşek Bağlantı',
        desc: 'Cıvata ve somun gevşemesi.',
        solutions: [
          'Tüm montaj cıvata ve somunlarını moment anahtarıyla sıkılaştırın',
          'Titreşim önleyici sabitleme elemanı kullanın'
        ]
      },
      {
        title: 'Rulman Hasarı',
        desc: 'Aşınmış veya hasarlı rulmanlar.',
        solutions: [
          'Titreşim analizi yaparak hasarlı rulmanı belirleyin',
          'Hasarlı rulmanı değiştirin'
        ]
      },
      {
        title: 'Montaj Hatası',
        desc: 'Yanlış kurulum veya hizalama.',
        solutions: [
          'Montaj ve hizalama değerlerini tekrar kontrol edin',
          'Hizalama hatalarını lazer ölçüm aleti ile düzeltin'
        ]
      }
    ]
  },

  'M005': {
    icon: '⚙️',
    code: 'M005',
    title: 'Yağlama Yetersiz',
    description: 'Yağ seviyesi veya basıncı kritik seviyenin altına düştüğünde aktif olur.',
    causes: [
      {
        title: 'Yağ Kaçağı',
        desc: 'Conta veya sızdırmazlık hasarı.',
        solutions: [
          'Sistem üzerinde yağ izi veya ıslaklık noktalarını tespit edin',
          'Hasarlı conta veya keçeyi değiştirin'
        ]
      },
      {
        title: 'Yağ Tüketimi',
        desc: 'Normal kullanıma bağlı azalma.',
        solutions: [
          'Yağ seviyesini düzenli aralıklarla kontrol edin ve tamamlayın',
          'Tüketim miktarını takip ederek anormal artışları araştırın'
        ]
      },
      {
        title: 'Pompa Arızası',
        desc: 'Yağ pompası çalışmıyor.',
        solutions: [
          'Pompa çıkış basıncını ölçün',
          'Pompayı test edin; gerekirse revize edin veya değiştirin'
        ]
      },
      {
        title: 'Filtre Tıkanması',
        desc: 'Yağ filtresi kirlenmiş.',
        solutions: [
          'Yağ filtresini değiştirin',
          'Filtre değişim periyodunu bakım planına ekleyin'
        ]
      }
    ]
  }
};
