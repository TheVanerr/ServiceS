// ============================================================
//  KBN 2 - Arıza Verileri
// ============================================================
const kbn2Data = {

  'KBN2': {
    label: 'KBN 2',
    icon: '🔧',
    faults: [
      {
        title: 'Makine elektrik prizi takıldı, ama hiç gösterge yanmıyor veya butonlar çalışmıyor',
        causes: [
          {
            title: 'Sigortalar kapalı olabilir',
            solution: 'Elektrik kutusu açılıp tüm sigortalar kontrol edilsin kapalıysa açılsın.'
          },
          {
            title: 'Faz sıra rölesi çıkış vermiyor olabilir',
            solution: 'Fazlar ya yoktur ya da terstir. Priz düz tornavida ile değiştirilip tekrar takılsın. Fazlar gelirse terstir. Gelmiyorsa ölçüm aleti ile üç faz ölçülüp kontrol edilecek.'
          },
          {
            title: 'Besleme panosunda enerji yok olabilir',
            solution: 'Ölçüm aleti ile bağlı olduğu prizdeki üç faz ve nötr ölçülecek. Gerilim modunda fazlar arası 380-415V, faz ve nötr arasında ise 220-230V değerleri okunacak.'
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
            title: 'Su seviyesi yetersiz olabilir',
            solution: 'Makinede yeterli su yoksa reset almaz. Tank içerisindeki su kontrol edilsin. Su varsa reset butonu lambası ve su seviyesi uyarı lambası kontrol edilsin. Su seviyesi uyarı lambası yanıyor olmalı. Reset butonu lambası ise yanıyor olmalı.'
          },
          {
            title: 'Pompa termik koruma şalteri atmış olabilir',
            solution: 'Panodaki uyarı lambasından ve şalterden kontrol edilmeli. Şalter attıysa öylece kaldırmak ya da termik aralığını artırarak sorun çözülmemeli. Termikler motor etiketindeki motorun maksimum çalışma akımına göre ayarlanıyor. Önce o akım kontrol edilmeli ve o değer ayarlıysa termiği attıran durum çözülmeli. Örneğin borulardaki tıkanıklık, pompadaki bir sorun vb. Sorunun çözüldüğünden emin olunduğunda termik sıfırlanıp tekrar çalıştırılmalı.'
          },
          {
            title: '220V-24V çeviren güç kaynağı bozulmuş olabilir',
            solution: 'Makinede enerji varsa ve faz sıra rölesi yeşil yanıyorsa buna rağmen butonlarda enerji yoksa bu güç kaynağının bozulmuş olma ihtimali var. Güç kaynağının 24V ve 0V çıkışlarının her bir ucuna ölçüm aletinin bir ucu koyulup DC gerilim ölçme moduna alınıp 24 değerinin ekranda görünmesi gerekiyor. 24V çıkış veriyorsa sorun yoktur. Ekranda 24\'e yakın bir değer yoksa 0,2 gibi alakasız değerler varsa cihaz çıkış vermiyordur. Ancak cihaza enerji gelmiyor olma ihtimali de var. Giriş kısmındaki F ve N kablolarası gerilim de AC modunda ölçülmeli ve 220 değeri okunmalı.'
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
      },
      {
        title: 'Pompa Arıza/Çalışmıyor',
        causes: [
          {
            title: 'MKŞ kapalı olabilir',
            solution: 'Pano üzerinden pompanın MKŞ\'si atmış mı kontrol edilecek. Atmışsa sebebi tespit edilip MKŞ açılacak.'
          },
          {
            title: 'Kontaktör çekmiyor olabilir',
            solution: 'Pompayı çalıştıracak komut verildiğinde kontaktörü çekiyor mu kontrol edilecek. Kontaktör çekmiyorsa kontaktöre giren kumanda kablosu kontrol edilecek. Bu kablo gevşeyip yerinden çıkmış olabilir. Kablo takıldığında sorun çözüldüyse sebep bundandır. Kablo sağlamsa ve hala çalışmıyorsa motorun kontaktörüne kumanda kablosunun geldiği röleye bakılacak. Komut verildiğinde röle yeşil yanmıyorsa zaten çekmeyecektir. Bu durumda PLC üzerinden röleyi çektiren Output kontrol edilecek. Komut verildiğinde lambası yanmıyorsa PLC çıkış vermiyordur ve sorun yazılımsaldır. PLC çıkış verip röle yanmıyorsa rölede bir sorun vardır. Röle girişindeki kabloya +24V geliyor mu kontrol edilecek. Hem röle çekiyor hem de PLC çıkış veriyor ama kontaktör çekmiyor ise bu durumda röle arızalıdır. Farklı bir röle ile test edilecek. Sorun çözülüyorsa röle arızalıdır değiştirilecek.'
          },
          {
            title: 'Kontaktör çekse de enerji geçmiyor olabilir',
            solution: 'Kontaktör çektiği halde pompa çalışmıyorsa kontaktörün çıkış uçlarından 380V gerilim ölçümü yapılacak. Kontaktörün iki faz çıkışı arasındaki gerilim 380-415V aralığındaysa enerji vardır. Tüm fazlarda enerji var ve pompa hala çalışmıyorsa klemens üzerinden ölçüm yapılacak. Klemensde de enerji var ama pompa çalışmıyorsa bu sefer pompanın kapağı açılacak. Klemensde fazlar arası gerilim hepsinde 380-415 aralığındaysa ancak pompa üzerinde değer düşükse ya da hiç yoksa kabloda bir kopukluk olduğu anlamına gelecek. Bu durumda kablo kontrol edilecek.'
          },
          {
            title: 'İleri Bara Denklemi bilgi gelmemesi olabilir',
            solution: 'Pompanın panoda yanlış yere girilmiş olma ihtimali çok düşük olsa da kontrol edilmeli. Çalıştıracak komutu verdiğinde çeken kontaktörün klemensine bağlı kablo doğru pompaya gidiyor mu kontrol edilecek. Gitmiyorsa kablo düzeltilerek yerleştirilecek.'
          },
          {
            title: 'Solenoid valf üstünde bağlantısı olabilir',
            solution: 'Solenoid valfin üzerindeki bağlantı gevşemiş ya da kopmuş olabilir. Kablo bağlantısı kontrol edilecek, gerekirse sıkılacak ya da değiştirilecek.'
          },
          {
            title: 'Kapak şalterlerin biri bağlantısız olabilir',
            solution: 'Pompa devresine seri bağlı kapak şalterleri kontrol edilecek. Tüm kapaklar kapalıyken şalterlerin klemens bağlantıları kontrol edilecek.'
          },
          {
            title: 'Fliç düz silindirinin çalışmaması olabilir',
            solution: 'Fliç düz silindir çalışmıyorsa pompanın devreye girmesi engellenebilir. Silindirin hava bağlantısı ve solenoid valfi kontrol edilecek.'
          }
        ]
      },
      {
        title: 'Motor Çalışmıyor',
        causes: [
          {
            title: "MKŞ'si kapalı olabilir",
            solution: "Pano üzerinden motorun MKŞ'si atmış mı atmamış mı kontrol edilecek. Atmışsa sebebi tespit edilip MKŞ açılacak."
          },
          {
            title: 'Kontaktör çekmiyor olabilir',
            solution: 'Motoru çalıştıracak komut verildiğinde kontaktörü çekiyor mu kontrol edilecek. Kontaktör çekmiyorsa kontaktöre giren kumanda kablosu kontrol edilecek. Bu kablo gevşeyip yerinden çıkmış olabilir. Kablo takıldığında sorun çözüldüyse sebep bundandır. Kablo sağlamsa ve hala çalışmıyorsa motorun kontaktörüne kumanda kablosunun geldiği röleye bakılacak. Komut verildiğinde röle yeşil yanmıyorsa zaten çekmeyecektir. Bu durumda PLC üzerinden röleyi çektiren Output kontrol edilecek. Komut verildiğinde lambası yanmıyorsa PLC çıkış vermiyordur ve sorun yazılımsaldır. PLC çıkış verip röle yanmıyorsa rölede bir sorun vardır. Röle girişindeki kabloya +24V geliyor mu kontrol edilecek. Hem röle çekiyor hem de PLC çıkış veriyor ama kontaktör çekmiyor ise bu durumda röle arızalıdır. Farklı bir röle ile test edilecek. Sorun çözülüyorsa röle arızalıdır değiştirilecek.'
          },
          {
            title: 'Kontaktör çekse de enerji geçmiyor olabilir',
            solution: 'Kontaktör çektiği halde motor çalışmıyorsa kontaktörün çıkış uçlarından 380V gerilim ölçümü yapılacak. Kontaktörün iki faz çıkışı arasındaki gerilim 380-415V aralığındaysa enerji vardır. Tüm fazlarda enerji var ve motor hala çalışmıyorsa klemens üzerinden ölçüm yapılacak. Klemensde de enerji var ama motor çalışmıyorsa bu sefer motorun kapağı açılacak, motor üzerindeki fazlardan ölçüm yapılacak. Klemensde fazlar arası gerilim hepsinde 380-415 aralığındaysa ancak motor üzerinde değer düşükse ya da hiç yoksa kabloda bir kopukluk olduğu anlamına gelecek. Bu durumda kablo kontrol edilecek.'
          },
          {
            title: 'Pompanın panoda yanlış yere girilmesi olabilir',
            solution: 'Çok düşük bir ihtimalle motor yanlış kontaktörün klemensine takılmış olabilir. Bu durumda motoru çalıştıracak komutu verdiğinde çeken kontaktörün klemensine bağlı kablo kontrol edilecek. Doğru motora gitmiyorsa kablo gerekli düzeltme yapılacak.'
          }
        ]
      },
      {
        title: 'Rezistans Çalışmıyor',
        causes: [
          {
            title: 'Sigortasının kapalı olması olabilir',
            solution: 'Kontaktörü çektiği halde ısıtıcı çalışmıyorsa kaçak akım ve aşırı akım sigortaları açık mı diye bakılacak. Bu sigortalar kapalıysa açılıp tekrar kontrol edilecek.'
          },
          {
            title: 'Kontaktör çekmiyor olabilir',
            solution: 'Rezistansı çalıştıracak komut verildiğinde kontaktörü çekiyor mu kontrol edilecek. Kontaktör çekmiyorsa kontaktöre giren kumanda kablosu kontrol edilecek. Bu kablo gevşeyip yerinden çıkmış olabilir. Kablo takıldığında sorun çözüldüyse sebep bundandır. Kablo sağlamsa ve hala çalışmıyorsa motorun kontaktörüne kumanda kablosunun geldiği röleye bakılacak. Komut verildiğinde röle yeşil yanmıyorsa zaten çekmeyecektir. Bu durumda PLC üzerinden röleyi çektiren Output kontrol edilecek. Komut verildiğinde lambası yanmıyorsa PLC çıkış vermiyordur ve sorun yazılımsaldır. PLC çıkış verip röle yanmıyorsa rölede bir sorun vardır. Röle girişindeki kabloya +24V geliyor mu kontrol edilecek. Hem röle çekiyor hem de PLC çıkış veriyor ama kontaktör çekmiyor ise bu durumda röle arızalıdır. Farklı bir röle ile test edilecek. Sorun çözülüyorsa röle arızalıdır değiştirilecek.'
          },
          {
            title: 'Set sıcaklığının ayarlanmaması olabilir',
            solution: 'Set sıcaklığı anlık sıcaklığın altındaysa zaten çekmeyecektir. Bu ayarın doğru yapıldığından emin olun.'
          },
          {
            title: 'Termokupldan bilgi gelmemesi olabilir',
            solution: 'Termokupldan gelen bilgi ekranda # işaret olarak gözüküyorsa bilgi gelmiyordur. Bu durumda ekrandan termokupl bilgisi kontrol edilecek. Doğruysa sorun yok ancak # işaret varsa ekranda sorun yazılımsaldır. Yazılımcıyla irtibata geçilmesi gerekiyor.'
          }
        ]
      },
      {
        title: 'Soğutma Prosesü soğutma işlemi gerçekleşmiyor',
        causes: [
          {
            title: 'Solenoid Pompa sensörü bilgi getirmiyor olabilir',
            solution: 'Soğutma pompasının devreye girdiği anda PLC\'deki input kontrol edilecek. Sensör bilgi vermiyor olabilir. Sensör bağlantısı ve konumu kontrol edilecek. Sensörün varlık algılama mesafesi içinde bir nesne olup olmadığı kontrol edilecek.'
          },
          {
            title: 'Solenoid valf bağlantısız olabilir',
            solution: 'Soğutma devresindeki solenoid valfin kablo bağlantısı kontrol edilecek. Gevşemiş ya da kopmuş bağlantı sıkılacak ya da değiştirilecek. PLC çıkışında sinyal var ama valf açılmıyorsa valf bobini arızalı olabilir.'
          },
          {
            title: 'Solenoid makara sıkışmış olabilir',
            solution: 'Solenoid valfin makarası mekanik olarak sıkışmış olabilir. Valf üzerindeki manuel override ile manuel açılıp açılmadığı test edilecek. Manuel açılıyorsa sorun elektriksel, açılmıyorsa mekaniktir. Mekanik sorunsa valf sökülerek temizlenecek veya değiştirilecek.'
          },
          {
            title: 'Solenoid pompa sıcaklıkları bağlantısız olabilir',
            solution: 'Soğutma pompasının sıcaklık sensörü bağlantıları kontrol edilecek. Soğutma devresinin sıcaklık değerleri PLC\'de doğru görünüyor mu kontrol edilecek. Bağlantı gevşemişse sıkılacak.'
          }
        ]
      },
      {
        title: 'Aktüatörlü Vana Valfleri Düzgün Çalışmıyor',
        causes: [
          {
            title: 'Pnomatik olarak hortumlar ters olabilir',
            solution: 'Aktüatörlü vanalar hava yokken ya da kapalıyken üzerindeki göstergenin kapalı konumda olması gerekiyor. Durum bu şekilde mi doğrulanmalı. Eğer hava kesildiğinde üzerindeki gösterge açık ise hava hortumları terstir. Hortumlar değiştirilerek düzeltilebilir. Ancak göstergenin de ters olma durumu var. Bu durumda gösterge kapalıyken gerçekten kapalı mı bunu görmek için su kaçırıyor mu test edilmeli.'
          },
          {
            title: 'Switchbox bilgisi yanlış olabilir',
            solution: 'Aktüatörlü vana üzerindeki switchbox PLC\'de doğru inputa doğru bilgi mi yolluyor kontrol edilmelidir. Ayrıca açık bilgisi ve kapalı bilgisi tek tek kontrol edilmelidir. Doğru yere bilgi gelmiyorsa kablosu doğru inputa girilmelidir.'
          },
          {
            title: 'Switchbox bilgisi gelmiyor olabilir',
            solution: 'Switchbox kapalıyken kapalı bilgisi hiç yanmıyorsa PLC üzerinde ya da açıkken hiç yanmıyorsa, yani ne açık ne kapalı bilgisi gelmiyorsa PLC\'ye switchbox bozulmuştur ya da Switchbox içerisindeki kontaklarda basmama durumu vardır. Switchbox kapağı açılıp kontaklara elle basılıp bilgi geliyor mu bakılmalı. Bilgi yine gelmiyorsa switchbox bozuktur ya da switchbox\'da +24V gelmiyor ya da yanlış kontağa geliyordur. Bu durumda switchboxtaki üç kablo arası gerilim DC modunda ölçülüp 24V değeri en az ikisinde görülmelidir. Biz 2 ve 5 numaralı kontaklara +24V girip 3 ve 6\'ya PLC bilgisi giriyoruz. Buralara +24V geliyor ve kontağa basılmasına rağmen PLC\'de lamba hiç yanmıyorsa switchbox bozuktur. Buraya +24V geliyor ve elle basılınca switchbox kontağına PLC\'ye bilgi gidiyorsa kontaklar tam basmıyordur. Switchbox içinde kontaklara basan plastik parçalar 90 derece olacak ve basarken tam basacak şekilde ayarlanacak.'
          },
          {
            title: 'Aktüatörlü vana kasıp yarım konumda kalıyor olabilir',
            solution: 'Bu durumda aktüatörlü vana üzerindeki göstergeye bakılacak. Eğer hava var ve sistem çalıştığı halde vana yarım açılıyorsa bu switchboxtan bilgi almamasına sebep olacaktır. Bu durumda aktüatörlü vana sökülüp kasmasına sebep olan mekanik durum bulunacaktır.'
          }
        ]
      }
    ]
  }

};
