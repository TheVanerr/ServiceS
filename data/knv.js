// ============================================================
//  KNV - Ariza Verileri
// ============================================================
const knvData = {

  'KNV': {
    label: 'KNV',
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
        title: 'Makinede enerji var ancak Fonksiyonlar Çalışmıyor',
        causes: [
          {
            title: 'Su seviyesi yetersiz olabilir',
            solution: 'Makinede yeterli su yoksa reset almaz. Tank içerisindeki su kontrol edilsin. Su varsa ancak yine de start almıyorsa tanklardaki seviye sensörü kontrol edilecek. Sensörler hem turuncu hem yeşil ışık yakıyorsa enerji var ve sensör görüyor demektir. Sadece yeşil yanıyorsa enerji vardır ancak sensör görmüyordur. Hiçbirşey yanmıyorsa enerji yoktur. Hiçbir lamba yanmıyorsa sensöre +24V doğru kontağına geliyor mu kontrol edilmelidir. +24V geldiği halde sensör çalışmıyorsa +24V doğru kontağa gelmiyor olabilir. Sensörün datasheet\'inden bakılıp doğru kontakta mı kontrol edilecek. Şu anki sistemimizde çatal tip seviye sensörlerinde 1 numaralı kontak +24V, 2 numaralı kontak 0V, 3 numaralı kontak PLC\'ye bilgi veriyor, 4 numaralı kontak ise Topraklama. Bağlantı bu şekilde mi kontrol edilsin. Yeşil yanıyor ancak turuncu lamba yanmıyorsa su seviyesi sensörün üzerinde mi kontrol edilsin. Sensör tamamen su içinde kalmalı. Yarısı suyun içindeyse turuncu lamba yanmayabilir, bu görmüyor demek. Su eklemeye devam etmeli. Turuncu lamba yandığında su yeterli demektir. Hem turuncu hem de yeşil lamba yanıyorsa PLC üzerinden seviye sensörü bilgileri kontrol edilmeli. Doğru inputlar yanıyor mu. Tankta su var ve seviye sensörü bilgi veriyorsa ancak PLC üzerinde seviye sensörü inputları yanmıyorsa farklı bir inputa bağlanmış olabilir, o kontrol edilmeli. Seviye sensörüne giden +24\'ü panodan söktüğünde PLC üzerindeki hangi inputun lambası sönüyorsa o inputtur. Doğru yere girmesi gerekiyor.'
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
