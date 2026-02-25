// ============================================================
//  MAKİNE ARIZALARI
//  Yapı: Makine → Arıza → Sebepler → Çözüm
// ============================================================
const machineData = {

  'LYM': {
    label: 'LYM',
    icon: '🔧',
    faults: [
      {
        title: 'Makine elektrik prizi takıldı, ama hiç gösterge yanmıyor veya butonlar çalışmıyor',
        causes: [
          {
            title: 'Sigortalar kapalı olabilir',
            solution: 'Elektrik kutusu açılıp tüm sigortalar kontrol edilsin, kapalıysa açılsın.'
          },
          {
            title: 'Faz sıra rölesi çıkış vermiyor olabilir',
            solution: 'Fazlar ya yok ya da ters dir. Priz düz tornavida ile değiştirilip tekrar takılsın. Fazlar geliyorsa ölçüm aleti ile üç faz ölçülüp kontrol edilecek.'
          },
          {
            title: 'Besleme panosunda enerji yok olabilir',
            solution: 'Makine bağlı olduğu prizdeki üç faz ve nötr ölçülecek. Gerilim modunda fazlar arası 380-415V, faz ve nötr arasında ise 220-230V değerleri okunacak.'
          }
        ]
      },
      {
        title: 'Ekranda tüm göstergeler çalışıyor ama, makine start almıyor',
        causes: [
          {
            title: 'Kapak switchi bilgi vermiyor olabilir',
            solution: 'Kapak switchi basıyor mu kontrol edilsin. Temassızlık varsa el ile basılıp kontrol edilsin. Hala gelmiyorsa switch bozuk olabilir. Panodaki klemenslerine köprü atılıp denensin.'
          },
          {
            title: 'İnterlock kilit bilgi vermiyor olabilir',
            solution: 'İnterlock kiliti varsa makinede çalışıyor mu kontrol edilmeli. Unlock moduna alındığında kapak kapatıldığında start vermiyorsa interlock bilgisi gelmiyor olabilir. Klemenslerine köprü atıp tekrar denenmeli.'
          },
          {
            title: 'Su seviyesi yetersiz olabilir',
            solution: 'Makinede yeterli su yoksa reset almaz. Tank içerisindeki su kontrol edilsin. Su varsa reset butonu lambası ve su seviyesi uyarı lambası kontrol edilsin. Su seviyesi uyarı lambası yanıyor olmalı.'
          },
          {
            title: 'Pompa termik koruma şalteri atmış olabilir',
            solution: 'Panodaki uyarı lambasından ve şalterden kontrol edilmeli. Şalter atıysa öylece kaldırmak ya da termik aralığını artırarak sorun çözülmemeli. Termikler motor etiketindeki motorun maksimum çalışma akımına göre ayarlanıyor. Önce o akım kontrol edilmeli ve o değer ayarlıysa termiği attıran durum çözülmeli. Örneğin borulardaki tıkanıklık, pompadaki bir sorun vb. Sorunun çözüldüğünden emin olunduğunda termik sıfırlanıp tekrar çalıştırılmalı.'
          },
          {
            title: '220V-24V çeviren güç kaynağı bozulmuş olabilir',
            solution: 'Makinede enerji varsa ve faz sıra rölesi yeşil yanıyorsa buna rağmen butonlarda enerji yoksa bu güç kaynağının bozulmuş olma ihtimali var. Güç kaynağının 24V ve 0V çıkışlarının her bir ucuna ölçüm aletinin bir ucu koyulup DC gerilim ölçme modunda 24 değerinin ekranda görünmesi gerekiyor. 24V çıkış veriyorsa sorun yoktur. Ekranda 24\'e yakın bir değer yoksa, 0.2 gibi alakasız değerler varsa cihaz çıkış vermiyordur. Ancak cihaza enerji gelmiyor olma ihtimali de var. Giriş kısmındaki F ve N kablolarası gerilim de AC modunda ölçülmeli ve 220 değeri okunmalı.'
          }
        ]
      },
      {
        title: 'Makine durmuyor',
        causes: [
          {
            title: 'Yön switchi vardır; bu switch\'e değip durdurması gereken sac gevşemiş ve basmıyor olabilir',
            solution: 'Makinenin altındaki yön switchine sac değiyor mu kontrol edilecek. Değmiyorsa sac tekrar ayarlanıp denenecek. Değdiği halde durmuyor ise elle yön switchine bastırılıp duruyorsa gözlemlenecek. Duruyorsa temassızlık vardır, buna yönelik çalışma yapılacak. Durmuyorsa switch arızalıdır. Yerine yenisi takılıp duruyorsa switch değil kontrol edilecek. Yeni switchle de durmuyorsa pano içerisinde gevşeyen bir bağlantı olabilir. Klemens\'e girdiği noktaya bakılacak. Yön switchi klemensı şöntlenip denenecek. Bir sorun yoksa elektrik diyagramı kullanılarak yön switchi ile alakalı her nokta kontrol edilecek.'
          },
          {
            title: 'Zaman rölesi kontağı çıkış vermiyor olabilir',
            solution: 'Zaman rölesi kontağından çıkış vermiyorsa süre bitmiş gözükse de durmayacaktır. Süre bittiği halde dönüyorsa ve sepetini yönünü ayarlayan bir switch yoksa bu kontrol edilebilir. Zaman rölesinin NO ve NC kontakları kontrol edilecek.'
          },
          {
            title: 'Egzos fanı vardır ve onun zaman rölesi çıkış vermiyor olabilir',
            solution: 'Yıkama bittikten sonra makinede egzos ya da kurutma varsa bunun ayrı olarak bulunan zaman rölesinin ayarlanan süresi kadar fanlar çalışır. Zaman rölesi üzerinden fan süresine bakılması gerekiyor. Çok absürt bir süre olabilir, örneğin 50 dk. Bu durumda bu süre bitene kadar fanlar çalışmaya devam edecek. Kullanıcı bunu fark edemez. Zaman rölesinin süresi belliyse ve o süre bittikten sonra da fanlar çalışmaya devam ediyorsa röle çıkış vermiyordur. Kontakları tek tek ölçüm aleti ile ölçülüp 24V çıkış değeri veriyor mu bakılmalıdır.'
          }
        ]
      }
    ]
  },

  'VDL1': {
    label: 'VDL 1',
    icon: '🔧',
    faults: []
  },

  'VDL2': {
    label: 'VDL 2',
    icon: '🔧',
    faults: []
  },

  'KBN1': {
    label: 'KBN 1',
    icon: '🔧',
    faults: []
  },

  'KBN2': {
    label: 'KBN 2',
    icon: '🔧',
    faults: []
  },

  'RTS': {
    label: 'RTS',
    icon: '🔧',
    faults: []
  },

  'KNV': {
    label: 'KNV',
    icon: '🔧',
    faults: []
  },

  'PYT': {
    label: 'PYT',
    icon: '🔧',
    faults: []
  },

  'ULT': {
    label: 'ULT',
    icon: '🔧',
    faults: []
  },

  'MST': {
    label: 'MST',
    icon: '🔧',
    faults: []
  }

};
