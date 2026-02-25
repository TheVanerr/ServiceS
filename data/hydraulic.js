// ============================================================
//  HİDROLİK HATALAR  (H001 – H004)
// ============================================================
const hydraulicErrors = {
  'H001': {
    icon: '💧',
    code: 'H001',
    title: 'Düşük Basınç',
    description: 'Hidrolik sistem basıncı minimum seviyenin altına düştüğünde aktif olur.',
    causes: [
      {
        title: 'Pompa Arızası',
        desc: 'Hidrolik pompa performans kaybı.',
        solutions: [
          'Pompa çıkış basıncını basınç göstergesi ile ölçün',
          'Değer nominalin altındaysa pompayı revize edin veya değiştirin'
        ]
      },
      {
        title: 'İç Sızıntı',
        desc: 'Valf veya silindir sızıntısı.',
        solutions: [
          'Valf ve silindirlerde iç sızıntı testi yapın',
          'Hasarlı conta ve keçeleri değiştirin'
        ]
      },
      {
        title: 'Düşük Yağ Seviyesi',
        desc: 'Tank içi yağ yetersiz.',
        solutions: [
          'Yağ seviyesini gösterge camından kontrol edin',
          'Yağı minimum seviyenin üzerine tamamlayın'
        ]
      },
      {
        title: 'Tıkalı Filtre',
        desc: 'Emme filtresi tıkalı.',
        solutions: [
          'Emme filtresi diferansiyel basıncını ölçün',
          'Limit aşılmışsa filtreyi derhal değiştirin'
        ]
      }
    ]
  },

  'H002': {
    icon: '💧',
    code: 'H002',
    title: 'Yağ Sızıntısı',
    description: 'Sistemde dış sızıntı tespit edildiğinde bu hata üretilir.',
    causes: [
      {
        title: 'Conta Aşınması',
        desc: 'O-ring veya keçe aşınmış.',
        solutions: [
          'Sızıntı noktasındaki contaları ve O-ring\'leri değiştirin',
          'Uygun malzeme ve boyutta conta kullanıldığını doğrulayın'
        ]
      },
      {
        title: 'Gevşek Bağlantı',
        desc: 'Hortum bağlantısı gevşek.',
        solutions: [
          'Tüm hortum bağlantı noktalarını öngörülen torkta sıkılaştırın',
          'Bağlantı elemanlarını görsel olarak kontrol edin'
        ]
      },
      {
        title: 'Hortum Hasarı',
        desc: 'Hidrolik hortum çatlamış.',
        solutions: [
          'Çatlak veya şişmiş hortumları tespit edin',
          'Hasarlı hortumu uygun basınç sınıfında yenisiyle değiştirin'
        ]
      },
      {
        title: 'Gövde Çatlağı',
        desc: 'Valf veya silindir gövdesi hasarlı.',
        solutions: [
          'Gövdeyi basınç testi veya boyalı sıvı testi ile kontrol edin',
          'Çatlak gövdeli parçayı değiştirin'
        ]
      }
    ]
  },

  'H003': {
    icon: '💧',
    code: 'H003',
    title: 'Filtre Tıkanması',
    description: 'Hidrolik filtre diferansiyel basıncı limitin üzerinde olduğunda aktif olur.',
    causes: [
      {
        title: 'Kirli Yağ',
        desc: 'Sistem yağı kirlenmiş.',
        solutions: [
          'Yağ numunesi alarak laboratuvarda analiz ettirin',
          'Kirliliği onaylanmışsa sistemi boşaltıp temizleyin ve yağ değişimi yapın'
        ]
      },
      {
        title: 'Bakım Eksikliği',
        desc: 'Filtre değişim periyodu aşılmış.',
        solutions: [
          'Filtreyi derhal değiştirin',
          'Filtre değişim periyodunu bakım planına ekleyin'
        ]
      },
      {
        title: 'Parça Aşınması',
        desc: 'İç parçalardan metal talaş.',
        solutions: [
          'Filtre içeriğini inceleyin; metal talaş varsa pompa ve silindirleri kontrol edin',
          'Aşınan parçayı tespit edip değiştirin'
        ]
      },
      {
        title: 'Su Kontaminasyonu',
        desc: 'Yağ içinde su var.',
        solutions: [
          'Yağdaki su miktarını kimyasal test ile ölçün',
          'Su-ayırıcı filtre kullanın ve kontaminasyon kaynağını kapatın'
        ]
      }
    ]
  },

  'H004': {
    icon: '💧',
    code: 'H004',
    title: 'Pompa Arızası',
    description: 'Hidrolik pompa performansı kritik seviyenin altına düştüğünde aktif olur.',
    causes: [
      {
        title: 'Kavitasyon',
        desc: 'Emme hattında hava girişi.',
        solutions: [
          'Emme hattındaki conta ve bağlantıları kontrol edin',
          'Yağ seviyesini ve emme filtresi basıncını doğrulayın'
        ]
      },
      {
        title: 'İç Aşınma',
        desc: 'Pompa iç parçaları aşınmış.',
        solutions: [
          'Pompa verimliliğini akış ve basınç ölçümleriyle değerlendirin',
          'Verimlilik düşükse pompayı revize edin veya yenisiyle değiştirin'
        ]
      },
      {
        title: 'Rulman Hasarı',
        desc: 'Pompa rulmanı arızalı.',
        solutions: [
          'Pompa gürültüsünü ve titreşimini dinleyerek değerlendirin',
          'Hasarlı rulmanı değiştirin'
        ]
      },
      {
        title: 'Mil Sızdırmazlığı',
        desc: 'Pompa mili keçesi hasarlı.',
        solutions: [
          'Mil çıkışında yağ sızıntısı olup olmadığını kontrol edin',
          'Hasarlı mil keçesini yenisiyle değiştirin'
        ]
      }
    ]
  }
};
