function dw(message)
{
	document.write(message);	
}

// Note this dictionary is a temporary demonstration
var langDictionary = {

// Copy belkin transation table to here
'p100t011' : 'gösterge paneline gidebilirsiniz',
'p220t001' : 'Bir PPTP DSL bağlantınız var.',
'p220t011' : 'PPTP',
'p220t012' : 'Noktadan Noktaya Tünel Protokolü (PPTP), İnternet Servis Sağlayıcınız ile sizin aranızda özel ve şifreli bir bağlantı oluşturur.',
'p222t001' : 'PPTP ayarlarınızda bir sorun var.',
'p300t001' : 'Donanım yazılımı güncellemeleri kontrol ediliyor.',
'p300t002' : 'Yeni yönlendiriciniz için kullanılabilir güncel donanım yazılımı olup olmadığını kontrol ediyoruz.',
'p300t003' : 'Neden en yeni donanım yazılımına ihtiyacım var?',
'p300t004' : 'Donanım yazılımı, yönlendiricinizin ağ ve güvenlik protokollerini uygulamak için kullandığı yazılımdır. Güncellemeler, yönlendiricinizin güvenilirliğini ve işlevselliğini artırır, o yüzden en yenisine sahip olduğunuzdan emin olmanız faydalıdır.',
'gtUpdateNoPower' : 'Yönlendiricinizi yeni donanım yazılımı ile güncelliyoruz. Lütfen bu sırada güç kaynağını kapatmayın.',
'p320t003' : 'Bu yaklaşık üç dakika sürecek. Güncelleme ilerlemesi:',
'gtFirmwareRestart' : 'Şimdi donanım yazılımı kurulduğuna göre onu resmi kılmak için yönlendiricinizi yeniden başlatmamız gerekiyor.',
'p342t003' : 'kablosuz ağlar listesinden yeniden seçmeniz gerekebilir.',
'errorSSIDEmpty' : 'Lütfen kablosuz ağınız için bir ad girin.',
'errorSSIDTooLong' : 'Ağ adınız 32 karakterden kısa olmalıdır.',
'errorSSIDInvalidChars' : 'Ağ adınız yalnızca harfler, sayılar, noktalama işaretleri ve boşluklar içerebilir.',
'errorWEPPasswordInvalidChars' : 'Ağ şifreniz yalnızca sayılar ve A\'dan F\'ye kadar olan harfleri içerebilir.',
'errorWEPPasswordInvalidLength' : 'Ağ şifreniz 10 ya da 26 karakter uzunluğunda olmalıdır.',
'errorWEPPasswordEmpty' : 'Lütfen kablosuz ağınızı güvenli kılmak için bir şifre girin.',
'errorWPAPasswordInvalidChars' : 'Ağ şifreniz yalnızca harfler, sayılar, noktalama işaretleri ve boşluklar içerebilir.',
'errorWPAPasswordInvalidLength' : 'Ağ şifreniz 8-63 karakter uzunluğunda olmalıdır.',
'errorWPAPasswordEmpty' : 'Lütfen kablosuz ağınızı güvenli kılmak için bir şifre girin.',
'errorGenericCommitError' : 'Bir hata oldu.  Lütfen aşağıdan ayarları düzeltin ve yeniden deneyin.',
'p400t006' : 'Parola:',
'p450t006' : 'Parola: ',
'p451t006' : 'Parola: ',
'p500t007' : 'Kaydı Tamamla',
'p500t008' : 'Daha Sonra Kaydol',
'p700t011' : 'PPTP DSL connection',
'errIpAddressEmpty' : 'IP adresi boş olamaz.',
'errSubnetMaskEmpty' : 'Alt ağ maskesi boş olamaz.',
'errSubnetMaskInvalid' : 'Alt ağ maskesi bir alt ağ maskesine benzemiyor. Lütfen değeri kontrol edin.',
'errDefaultGatewayEmpty' : 'Varsayılan ağ geçidi adresi boş olamaz.',
'errDNSServerEmpty' : 'DNS sunucu adresi boş olamaz.',
'1781' : 'Vuze Çevrimdışı indirme',
'1782' : 'Takas Tüm çevrimdışı indirme parsiyel ve komple dosyaları da dahil olmak üzere kuyrukta tüm öğeleri siler',
'1783' : 'Net Tüm Çevrimdışı Dosyalar',
'7102' : 'Belkin Intellistream mümkün olan en iyi çevrimiçi deneyim için yüksek bant genişlikli ve düşük geciktirmeli hizmetlere öncelik verir.',
'7103' : 'İşini iyi yapması için Intellistream\'in bağlantı hızınızı bilmesi gerekir.',
'7104' : 'İnternet bağlanabilirliği test sırasında geçici olarak askıya alınacaktır.',
'7105' : 'İnternet bağlanabilirliği test sırasında geçici olarak askıya alınır.',
'7106' : 'Hız Testi yapın',
'7107' : 'Hız Testi',
'7108' : 'Manüel Gir',
'7109' : 'Ping',
'7110' : 'Karşıdan Yükleme<br> Hızı',
'7111' : 'Karşıya Yükleme<br>Hızı',
'7112' : 'Çalışıyor...',
'7113' : 'Tamamlandı.',
'7114' : 'Test sırasında hata oldu.',
'7115' : '0.1-100 arasında bir numara girin.',
'7116' : '0.1-1000 arasında bir numara girin.',
'7117' : 'Yalnızca 0.1-100 arasında.',
'7118' : 'Karşıya yükleme hızınız yüksek olduğunda Intellistream yalnızca karşıdan yükleme hızınıza öncelik verecek',
'7119' : 'Karşıdan yükleme hızınız yüksek olduğunda Intellistream yalnızca karşıya yükleme hızınıza öncelik verecek',
'7120' : 'Bütün internet hızlarınız yüksek ise Intellistream\'in etkinleştirilmesi gerekmez.',
'7121' : 'Kaydedildi',
'7122' : 'Manüel olarak kaydedildi',
'7123' : 'Intellistream\'i etkinleştirmek için:',
'7124' : 'Intellistream etkinleştirildi.',
'7125' : 'Intellistream şu anda devre dışı bırakılmış durumda.',
'7126' : 'Manüel Ayar',
'gtBBSTitle' : 'Belkin Yönlendirici Kurulumuna Hoş Geldiniz',
'gtBack' : 'Gösterge Paneline Dön',
'Support4t036' : 'Onun hakkında her şeyi okuyun.',
'Support4t037' : 'İnternete bağlı bir aygıt üstünde aşağıdaki URL\'yi ziyaret edin ve problemi kendi kendinize nasıl çözebileceğinizi öğrenin: <STRONG>www.belkin.com/support/asdlkj</STRONG>',
'gtReadHelp' : 'İnternete bağlı bir aygıt üstünde <STRONG>http://belk.in/NLk29H</STRONG> adresine gidin',
'Support5t014' : 'Onun hakkında her şeyi okuyun.',
'p1200t001' : 'Biraz daha fazla güvenlik.',
'p1200t002' : 'Sen başka bir şifre ilepano kilitleyerek yönlendirici koruyabilirsiniz.',
'errsetempt' : 'Lütfen bir şifre girin.',
'errorpwdEmpty' : 'Lütfen şifrenizi girin.',
'errorpwdError' : 'Şifreniz doğru değil.',
'60' : 'Yinelenen Yönetici',
'61' : 'Şu anda bu aygıtı yöneten kişi',
'62' : '!!',
'gtDisconnected' : 'Bağlantı yok',
'dft005' : 'Belkin Yardım Merkezi',
'dhToggleBand' : '5.0Ghz Göster',
'419' : 'saniye kaldı.',
'422' : 'Ayarlar Başarıyla Geri Yüklendi',
'423' : 'Geri yüklenen dosya bu aygıt için doğru bir türde değil. Geri yükleme başarısız oldu. Lütfen doğru dosyayı edinerek tekrar deneyin',
'533' : 'Yönlendiriciniz yanlış biçimde çalışmaya başlarsa, onu yeniden başlatmak gerekli olabilir. Yönlendiriciyi yeniden başlatmak ayarlarınızın silinmesine neden olmayacaktır.',
'1200' : 'Değişiklikler uygulanıyor. Lütfen bekleyin.......',
'1386' : 'Yükseltme dosyası bu aygıt için doğru tür veya sürüme sahip değil. Yükseltme başarısız. Lütfen doğru dosyayı edinerek tekrar deneyin',
'2053' : 'Değişiklikler Başarıyla Uygulandı',
'2054' : 'Bellenim Başarıyla Güncellendi',
'766' : 'Girdiğiniz Alt ağ maskesi numaraları geçersiz.',
'1356' : 'Geçersiz Ağ Geçidi IP\'si, ilk numara 1 ile 223 arasında olmalıdır.',
'1357' : 'Geçersiz Ağ Geçidi IP\'si, ikinci ve üçüncü numara 0 ile 255 arasında olmalıdır.',
'1358' : 'Geçersiz Ağ Geçidi IP\'si, son numara 1 ile 254 arasında olmalıdır.',
'1360' : 'Geçersiz IP adresi, ilk numara 1 ile 223 arasında olmalıdır.',
'1354' : 'Geçersiz IP adresi, ikinci ve üçüncü numara 0 ile 255 arasında olmalıdır.',
'675' : 'Geçersiz IP adresi, son numara 1 ile 254 arasında olmalıdır.',
'403' : 'Girdiğiniz IP geçersiz.',
'760' : 'IP Adresi',
'1760' : 'Tümünü Reddet',
'395' : 'Tüm numaraları girmediniz veya girdiğiniz numaralardan bazıları geçersiz. Her bir giriş kutusundaki sayı 0 ile 255 arasında olmalıdır.',
'1395' : 'Yapılandırılmadı',
'1281' : 'WAN IP adresi, LAN yan alt ağını kapsayamaz.',
'641' : 'IP numaralarının tümünü girmediniz veya girdiğiniz numaralardan bazıları geçersiz. Numaralar 0 ile 255 arasında olmalıdır',
'errUsernameTooLong' : 'Kullanıcı adınız 64 karakterden kısa olmalıdır.',
'errUsernameInvalid' : 'Kullanıcı adınız yalnızca harfler, sayılar, noktalama işaretleri ve boşluklar içerebilir.',
'errPasswordEmpty' : 'Lütfen şifrenizi girin.',
'errPasswordTooLong' : 'Şifreniz 64 karakterden kısa olmalıdır.',
'errPasswordInvalid' : 'Kullanıcı adınız yalnızca harfler, sayılar, noktalama işaretleri ve boşluklar içerebilir.',
'1398' : 'Tamam',
'1399' : 'İptal',
'374' : 'Açık',
'375' : 'Kapalı',
'47' : 'Daha Fazla Bilgi',
'48' : 'Değişiklikleri Temizle',
'49' : 'Kaydet',
'96' : 'Etkinleştir',
'119' : 'Devre Dışı Bırak',
'1298' : 'Kapat',
'113' : '<< Ekle',
'114' : 'Sil',
'128' : 'Yenile',
'318' : 'Devre Dışı',
'317' : 'Etkin',
'2006' : 'Evet',
'2007' : 'Hayır',
'3300' : 'NEW',
'50' : 'Dinamik DNS\'i Güncelle',
'98' : 'Dinamik etki alanı adı sistemi (DDNS) ev ağınıza bir DDNS sağlayıcısı üstünde kurulu bir hesap yoluyla erişmenizi sağlar. Dyn.com (<a href=\'http://www.dyn.com\' target=\'_blank\'>www.dyn.com</a>) yoluyla hesabınızı kurun ve yönlendiricinizdeki DDNS özelliğini açın. Bu servisi kullanmadan önce hesap oluşturmalısınız.',
'100' : 'Kullanıcı Adı',
'101' : 'Parola',
'102' : 'Alan Adı',
'742' : 'Lütfen kullanıcı adınızı girin',
'757' : 'Lütfen şifrenizi girin!',
'822' : 'geçersiz, lütfen önce bunu düzeltin!',
'1307' : 'DynDNS',
'1308' : 'DDNS Hizmeti',
'1309' : 'DDNS Durumu',
'1310' : 'Web Sitesi',
'1315' : 'AutoUpdate DDNS',
'1316' : 'şu kadar sürede bir yükselt:',
'1317' : 'gün',
'1369' : 'Kayıtlı',
'1380' : 'Yanlış Yapılandırma',
'1381' : 'Bağlanılıyor',
'1382' : 'Bağlantı Başarısız',
'1383' : 'Oturum Açma Başarısız',
'1384' : 'Kayıt Başarısız',
'1385' : 'Kayıtlı Değil',
'1751' : 'Uyumlu ağ medya oynatıcıları Serve medya dosyalarını',
'702' : 'Etki alanı adı hizmeti (DNS) etki alanı adlarını dünya çapında bilgisayar hizmetleri ve aygıtlarını konumlandırmak için IP adreslerine dönüştürür. İnternet servis sağlayıcınız (ISS) kullanmanız için size bir DNS adresi verdiyse onu buraya girin.',
'703' : 'ISP\'den Otomatik',
'704' : 'DNS Adresi',
'705' : 'İkincil DNS Adresi',
'706' : 'DNS = Alan Adı Sunucusu. Internet\'te bulunan ve www.belkin.com gibi URL\'leri (Tekdüzen Kaynak Belirleyicisi) IP adreslerine çeviren bir sunucudur.',
'707' : 'Otomatik DNS işlevini kullanmıyorsanız ISP\'niz tarafından sağlanan DNS ayarlarını girmelisiniz.',
'780' : 'IP Adresini Belirtin',
'823' : 'DNS değişiklikleri yapmak için önce {Web Sitesi Filtresi} öğesini ziyaret edin ve "Filtre yok" öğesini seçin.',
'55' : 'Bellenim Bilgisi.',
'56' : 'Bu Yönlendirici için yeni bellenim güncelleştirmesi yok!',
'57' : 'Bellenim bilgi sunucusu ile bağlantı kurulamıyor, WAN bağlantısını lütfen yeniden kontrol edin.',
'58' : 'Geçerli donanım yazılımı:',
'59' : 'Karşıdan yüklenecek donanım yazılımı:',
'64' : 'Yönlendirici, belirli gün ve zamanlarda Internet, e-posta veya diğer ağ servislerine erişimi sınırlandırmak üzere yapılandırılabilir.',
'65' : 'IP',
'66' : 'Port',
'67' : 'Tür',
'68' : 'Engelleme Saati',
'69' : 'Gün',
'70' : 'Saat',
'71' : 'Etkinleştir',
'72' : 'İKİSİ DE',
'73' : 'Daima',
'74' : 'Engelle',
'75' : 'PAZ',
'76' : 'PTE',
'77' : 'SAL',
'78' : 'ÇAR',
'79' : 'PER',
'80' : 'CU',
'81' : 'CTE',
'82' : ':00 P.M.',
'83' : ':00 A.M.',
'84' : 'İstemci IP adresini girmediniz veya girdiğiniz IP adresindeki bazı sayılar geçersiz. IP giriş kutusundaki sayı 1 ile 254 arasında olmalıdır.',
'85' : 'Girdiğiniz port numaraları geçersiz.',
'86' : 'Bağlantı noktası aralığındaki ikinci sayı, ilkinden daha büyük olmalıdır.',
'87' : 'IP aralığındaki ikinci sayı, ilkinden daha büyük olmalıdır.',
'88' : 'Bağlantı noktası giriş kutusundaki sayı 1 ile 65535 arasında olmalıdır.',
'1311' : 'Seçili uygulama yok',
'1312' : 'Yinelenen girişler algılandı. Kural zaten var.',
'1355' : 'Yönlendiricinin LAN IP\'si IP Aralığının dışında tutulmalıdır.',
'90' : 'Bu, diğer aygıtlar yönlendiricinizin güvenlik duvarı arkasında kalırken ağınızdaki bir aygıtı duvar dışında tutulması için belirlemenizi sağlar.',
'91' : 'DMZ\'deki bilgisayar hacker saldırılarına karşı korumasızdır.',
'92' : 'Bir bilgisayarı DMZ\'ye koymak için, IP adresinin son hanelerini aşağıdaki alana girin ve "Etkinleştir"i seçin. Değişikliklerin uygulanması için "Kaydet"e tıklayın.',
'93' : 'Sanal DMZ Ana Bilgisayarının IP Adresi',
'97' : 'Statik IP',
'95' : 'Özel IP',
'103' : 'Lütfen DMZ\'yi etkinleştirmeden önce IP adresini girin',
'1232' : 'DMZ Ana Bilgisayarının IP Adresi geçersiz!',
'1253' : 'IP aralık dışında [1-254]!',
'105' : 'Bu özellik izin verilen istemcilerin listesini oluşturmanıza olanak tanır. Bu özelliği etkinleştirdiğiniz zaman, her birinin ağ erişimini sağlamak için, ağınızdaki her istemcinin MAC adresini girmelisiniz.',
'106' : 'MAC Adresi Filtrelemesini Etkinleştir',
'107' : 'MAC Adresi Filtreleme Listesi',
'108' : 'Engelle',
'110' : 'MAC Adresi',
'112' : 'Bu MAC zaten eklenmiş!',
'669' : 'Geçersiz MAC adresi, boş adres',
'902' : 'Geçersiz MAC adresi',
'903' : 'Lütfen önce bunu düzeltin!',
'904' : 'Doğru MAC adresi xx:xx:xx:xx:xx:xx ve x 0 ile 9 ve a ile f arasında olmalıdır!',
'1062' : 'Not: Yönlendiricinin yönetsel işlevlerine erişmek için kullandığınız bilgisayarın MAC adresini silemeyeceksiniz. (Şu anda kullanmakta olduğunuz bilgisayar).',
'1602' : 'Tanımlı Kullanıcı 1',
'117' : 'Yönlendiriciniz, ağınızı Ping of Death (PoD) ve Denial of Service (DoS) saldırıları dahil olmak üzere bilinen çok çeşitli hacker saldırılarından koruyacak bir güvenlik duvarıyla donatılmıştır. Gerektiğinde güvenlik duvarı işlevini devre dışı bırakabilirsiniz. Güvenlik duvarının devre dışı bırakılması ağınızı hacker saldırılarına karşı tamamıyla savunmasız bırakmayacaktır, ancak mümkün oldukça güvenlik duvarını etkinleştirmeniz önerilir.',
'118' : 'Güvenlik Duvarını Etkinleştir / Devre Dışı Bırak',
'121' : '<b>GELİŞMİŞ ÖZELLİK! </b>Yönlendiriciyi ICMP Ping\'ine (WAN portuna yönelik ping) yanıt vermeyecek şekilde yapılandırabilirsiniz. Böylece güvenlik düzeyi yükselir.',
'1076' : 'ICMP Ping\'ini Engelle',
'1827' : 'Konuk erişim ayarlarını yazdır',
'2702' : 'Misafir Erişimi, WAN portu üzerinden internete erişim sağlar ancak konukların dahili ağ, LAN ve WLAN\'a erişimini sınırlandırır. Bu özellik, kullanımı basitleştirmek için yalnızca 2.4GHz\'de desteklenir.',
'279' : 'Gelen portu',
'1828' : 'Kafe tarzı (web sayfası üzerinden misafir oturumu açma)',
'1619' : 'WPA/WPA2 PSK',
'1829' : 'WEP',
'1830' : 'Aç',
'1831' : 'maksimum 32 karakter, boşluksuz',
'1617' : 'Şifre(PSK)',
'842' : 'Kimlik Doğrulaması',
'845' : 'Şifreleme Tekniği',
'854' : 'Ön Paylaşımlı Anahtar (PSK)',
'857' : 'PSK\'yı Gizle',
'855' : 'WPA-PSK (sunucusuz)',
'1335' : 'Ağ Adı (SSID)',
'1825' : '8 ila 63 karakter',
'1826' : '10 onaltılık basamak',
'1834' : 'Ağ Adı',
'409' : 'Parola',
'1835' : 'Kablosuz ağınıza bağlanan her misafir bu şifreye ihtiyaç duyacaktır.',
'1715' : 'Güvenlik Türü',
'1836' : 'Kablosuz ağa bağlanmak için:',
'1837' : 'Windows',
'1838' : '1. Windows sistem tepsinizden kablosuz ağı sağ tıklatın ve açılır menüden Kullanılabilir Kablosuz Ağları Göster\'i seçin.',
'1839' : '2. Çift tıkırtı üstünde',
'1840' : ' ağını seçin.',
'1841' : '3. Ağ anahtarını soran bir pencere açılır. Yukarıya şifreyi girip Tamam\'ı tıklatın.',
'1842' : 'MAC OS X',
'1843' : '1. Menü çubuğunuzdan kablosuz ağ simgesini tıklatın (sağ üst) ve ',
'1844' : ' ağını seçin.',
'1845' : '2. Ağ anahtarını soran bir pencere açılır. Yukarıya şifreyi girip Tamam\'ı tıklatın.',
'1832' : 'Kafe Stili',
'1833' : 'Açma Modu',
'1201' : 'SSID NULL olarak ayarlanamaz!',
'1812' : 'Şifre uzunluğu geçersiz. Maksimum şifre uzunluğu 63 ve Minimum şifre uzunluğu 8 karakterdir.',
'1824' : 'WEP anahtarı 10 Onaltılık basamak uzunluğunda olmalıdır!',
'414' : 'Oturum Açma Hatası !!',
'1811' : 'Konuk Erişimi, kullanıcıların İnternet\'e erişmesine olanak tanıyan ancak ev ağına erişimini sınırlandıran bir özelliktir. Lütfen ağ yöneticisinden Konuş Erişimi şifresini isteyin ve aşağı girin.',
'1813' : 'Başarılı! Artık bir web tarayıcısı açıp İnternet\'te sörf yapabilirsiniz.',
'909' : '"IP adresi" Yönlendiricinin Dahili IP adresidir. Gelişmiş ayar arayüzüne erişmek için, tarayıcınızın adres çubuğuna bu IP adresini giriniz. Gerekirse bu adres değiştirilebilir. IP adresini değiştirmek için, yeni IP adresini yazın ve “Kaydet"e tıklayın. Seçtiğiniz IP adresi yönlendirilemez bir IP adresi olmalıdır. Yönlendirilemez IP örnekleri şunlardır: 192.168.2.1, 10.0.0.1, 172.16.0.1',
'917' : 'Alt ağ maskesinin değiştirilmesine gerek yoktur. Gerekmesi halinde alt ağ maskesini değiştirmek mümkündür. Alt ağ maskesinde sadece bunu yapmak için özel bir nedeniniz olduğunda değişiklik yapın.',
'929' : 'DHCP sunucu işlevi ağdaki her bilgisayara bir IP adresi atayarak ağ kurulumunu çok kolay hale getirir. DHCP Sunucusu gerektiğinde devre dışı bırakılabilir. DHCP Sunucusunun devre dışı bırakılması, ağınızdaki her bilgisayarda manüel olarak bir Statik IP adresi ayarlamanızı gerektirecek. IP havuzu, ağınızdaki bilgisayarlara dinamik olarak atanmak üzere bir kenara ayrılan IP adresleri aralığıdır. Varsayılan değer 2-200 arasındadır (199 bilgisayar). Bu sayıyı değiştirmek isterseniz yeni başlangıç ve bitiş IP adresleri girmek ve "Kaydet"e tıklamak yoluyla bunu yapabilirsiniz.',
'935' : 'Ağınız için bir yerel alan adı (ağ adı) belirleyebilirsiniz. Bunun için özel ileri düzey bir ihtiyacınız olmadığı sürece bu ayarın değiştirilmesine gerek yoktur. Ağa "MY NETWORK" gibi istediğiniz bir ismi verebilirsiniz.',
'962' : 'Yönlendiriciyi PPPoE\'yi kullanacak şekilde ayarlamak için, verilen alanlara ISS\'nızın sağladığı kullanıcı adınızı ve şifrenizi yazın. Servis adınız yoksa veya bu adı bilmiyorsanız, "Servis Adı" alanını boş bırakın. Bilgilerinizi girdikten sonra "Kaydet"e tıklayın. Kaydettikten sonra, yönlendiriciniz düzgün ayarlandıysa durum göstergesinde "Çevrimiçi" yazacaktır.',
'967' : 'Bazı İSS\'ler, aboneleri merkez ofise bağlamak için PPTP protokolünü kullanırlar. Bunun için, İSS\'nizin sağlamış olması gereken bir kaç ek ayarı girmeniz gerekmektedir. Her şey doğru yapılmışsa, değişiklikleri kaydettiğinizde İnternet durum göstergesi yeşili gösterir.',
'971' : '"Kaydet"e tıklayarak Telstra Bigpond bağlantı türünü seçin.',
'982' : 'X dakika sonra bağlantıyı kes',
'983' : 'Bir süre etkinlik gerçekleştirilmediğinde, yönlendiriciniz ile İSS arasındaki bağlantıyı keser. İnternet hizmetiniz dakika üzerinden ücretlendiriliyor ise, bu seçeneği tasarruf etmek için kullanın.',
'htDDNS' : 'DDNS nedir?',
'htDNS' : 'DNS nedir?',
'htDMZ' : 'DMZ nedir?',
'htLAN' : 'LAN Ayarları neyi kontrol eder?',
'htWANMain' : 'WAN Ayarları nedir?',
'htWANMAC' : 'MAC adresi nedir?',
'htWAN_PPPOE' : 'PPPoE Ayarları',
'htWAN_PPTP' : 'PPTP Ayarları',
'htIPv6' : 'IPv6 Nedir?',
'htWifiID' : 'Ağ adı ve kanal ayarları nedir?',
'htWifiIDContent' : 'Ağ adına SSID (Service Set ID) adı verilir.  Yönlendiricinin ağına katılmak için ağınızdaki bütün istemcilerin SSID\'yi bilmesi gerekir.',
'htWifiSec' : 'Wi-Fi Güvenliği nedir?',
'htWifiSecContent' : 'Bütün Belkin yönlendiricileri Wi-Fi güvenliği etkinleştirilmiş olarak gönderilir.  Wi-Fi güvenliği ağınıza yetkisiz girişlere karşı bir güvenlik katmanı sağlar.  Güvenlik açık olduğunda kullanıcının ağınıza girebilmesi için bir şifre gerekir.',
'htWifiWPS' : 'Wi-Fi Korumalı Kurulum Nedir?',
'htWifiWPSContent' : 'Bu, evinizde ya da küçük ofisinizde güvenliği etkin Wi-Fi ağları kurmanızı kolaylaştırmak için tasarlanmış isteğe bağlı bir yöntemdir. Wi-Fi Korumalı Kurulumu (WPS) olmayan aygıtlar, ağ adını seçmek ve ağ şifresini girmek yoluyla hala ağınıza eklenebilir.',
'htWifiGuest' : 'Konuk erişimi nasıl kullanılır?',
'htWifiGuestContent' : 'Konuk erişimi, açıldığında, internete erişebilen ancak ağınızdaki diğer aygıtlara erişemeyen ayrı bir Wi-Fi ağı oluşturur.',
'htAP' : 'Yönlendiricimi bir erişim noktası olarak kullanabilir miyim?',
'htAPContent' : 'Belkin yönlendiricileri, tüm yönlendirme ve güvenlik duvarı işlevlerini baypas eden bir erişim noktası olarak çalışacak şekilde yapılandırılabilir.  Yönlendiriciyi bir erişim noktası olarak kurmak genellikle var olan bir kablolu ağa kablosuz özelliğini kazandırmak için kullanılır.',
'htQos' : 'Belkin Intellistream nedir?',
'htDLNA' : 'Twonky tarafından beslenen Belkin Media Server',
'htPortForward' : 'Bağlantı noktası iletimi nedir?',
'htPortForwardContent' : 'Bağlantı noktası iletimi, uzak bilgisayarların yerel ağınızdaki belirli bir program ya da hizmete bağlanmasını sağlar. Örneğin, ağınızdaki bir web sunucusunu (bağlantı noktası 80) çalıştırmak için bağlantı noktası iletimini kullanırsınız.  Modern programların çoğu bağlantı noktası iletimini kullanmanızı gerektirmez; ihtiyaç duydukları her türlü bağlantı noktasını otomatik olarak kurabilirler.',
'htWanPing' : 'Wan ping engelleme ne işe yarar?',
'htWanPingContent' : 'Bu, harici internet kullanıcılarının sizin IP adresinizi bulmalarını engelleyen yüksek bir güvenlik düzeyi sağlar. Bunu, ağınız dışından gelen pinglere yanıt vermeyerek gerçekleştirir.',
'htRestart' : 'Yönlendiricimi neden yeniden başlatıyorum?',
'htRestoreFC' : 'Fabrika ayarlarını geri yüklemek için ne yapıyor?',
'htSaveSettings' : 'Ayarlarımı neden kaydetmeli/yedeklemeliyim?',
'htRestoreSettings' : 'Önceki ayarlarımı geri yüklemek ne anlama geliyor?',
'htSystem' : 'Sistem ayarları nelerdir?',
'htSystemContent' : 'Bu sayfadan saat dilimi ve yönetici şifresini de içeren çeşitli temel yönlendirici ayarlarını yapabilirsiniz.',
'htSelfHeal' : 'Kendi kendini iyileştirme nedir?',
'hLANSettings' : 'Bu sayfa yeni bağlantılar kurmanıza yardım eder, DHCP\'yi açıp kapatmanızı ve yerel ağınız üstündeki yönlendiricinin IP adresini ayarlamanızı sağlar.',
'htDHCPClientList' : 'DHCP İstemci Listesi Nedir?',
'htDHCPClientListContent' : 'Bu sayfada, ağınıza bağlı bulunan her aygıtın IP adresi, ana bilgisayar adı ve MAC adresi gösterilir. Bilgisayarın ana bilgisayar adı belirtilmemişse, alan boş bırakılır. Listeyi güncellemek için "Yenile" üstüne tıklayın.',
'hWebsiteFilters' : 'Bu, tehlikeli/uygun olmayan web sitelerine karşı bir koruma katmanı olarak işlev gösterir. Web filtreleri, siteleri, adlarını onaylı bir site listesinden kontrol etmek yoluyla tarar.',
'hWANSettings' : 'Bu ağ ayarları, internet servis sağlayıcınızla (ISS) aranızdaki bağlantıyı ifade eder.   Listeden ISS\'nız tarafından sağlanan bağlantı türünü seçin. ',
'htChannel' : 'Yönlendiriciniz, ağınızda bulunan aygıtlarla iletişim kurmak için, bir radyonun farklı istasyonları kullanmasına benzer biçimde, birden fazla farklı kanal üzerinden yayın yapabilir. \'Otomatik\' kullanmak genellikle en iyi seçimdir.',
'3430' : 'IPv6 (İnternet Protokoli sürüm 6), neredeyse bütün internet trafiğini yöneten IPv4\'u gerçekleştirmek amacı taşıyan bir İnternet Protokolü (IP) sürümüdür. Bazı internet servis sağlayıcılarının (ISS) IP adresleri neredeyse tükenmiş durumdadır. IPv6, IP adresleri oluşturmak için daha büyük sayılar kullanarak daha çok aygıtın internet üstünde iletişim kurmasını sağlar.  ISS\'nız IPv6 kullanmanız gerekip gerekmediğini size bildirecektir.',
'3431' : 'Bağlantı Türü',
'3432' : 'Otomatik Yapılandırma/DHCPv6 (varsayılan)',
'3433' : 'Aşağıdaki adresler ISS\'nız tarafından sağlanır. DHCPv6, bağlanabilirliği geliştirmek için ek özellikler sağlar.',
'3434' : 'WAN',
'3435' : 'WAN Adresi',
'3436' : 'Ağ Geçidi',
'3437' : 'LAN',
'3438' : 'Yönlendiricinizin dahili ağ ayarlarını yapılandırmak için bu bölümü kullanın. Buradan LAN IPv6 adresini değiştirirseniz, ağa yeniden erişebilmek için bilgisayarınızın ağ ayarlarını yeniden yapmanız gerekebilir.',
'3439' : 'LAN Öneki',
'3440' : 'Arayüz Kimliği',
'3441' : 'Bağlantı-Yerel',
'3442' : 'DNS',
'3443' : 'IPv6 DNS varsayılan ayarlarınız, mevcutsa WAN yönlendirici duyuruları ya da DHCPv6 iletileri içinde İnternet Servis Sağlayıcınızdan gelir.',
'3444' : 'Birincil',
'3445' : 'İkincil',
'3446' : 'IPv6 üstünde PPPoE',
'3447' : 'Ethernet Üzerinden Noktadan Noktaya Protokolü (PPPoE) birincil olarak DSL servisleri tarafından bir DSL modemi internete bağlamak için kullanılır.',
'3448' : 'Oturum Aç',
'3450' : 'anlaşılmaz şifre',
'3451' : 'Kullanıcı Adı',
'3452' : 'Parola',
'3453' : 'Hizmet Adı',
'3454' : '6\'dan4\'e Tünel',
'3455' : 'IPv6 paketlerinin açık tüneller yapılandırmaya gerek kalmadan bir IPv4 ağı üzerinden aktarılmasını sağlar. Bu bağlantı türü, İnternet Servis Sağlayıcınız IPv6 desteklemiyorsa uygundur.',
'3456' : 'Uzaktan 6\'dan4\'e Aktarım Yönlendiricisi',
'3457' : 'Düzgeçiş',
'3458' : 'Yönlendiricinize bağlı aygıtlar aslen IPv6 olan paketler kullanarak birbirleriyle iletişim kurabilirler. LAN üstündeki IPv6 paketleri otomatik olarak bütün LAN arayüzlerine (Ethernet bağlantı noktaları ve 2.4 Ghz ve 5 Ghz kablosuz ağlar) gönderilecektir.',
'3459' : 'Düzgeçiş etkinleştirildiğinde, IPv6 paketleri WAN arayüzüne de kopyalanacaktır. (Bu, internete doğrudan, güvenli olmayan bir bağlantı oluşturur.)',
'3460' : 'IPv6 destekleri konusunda bilgi almak için lütfen ISS\'nız ile bağlantı kurun.',
'3461' : 'Statik IPv6',
'3462' : 'Statik IPv6 adreslemesi, yönetimi zor olabileceği için çoğunlukla kullanılmaz. Statik IPv6, laptoplar ya da mobil aygıtlar gibi çoklu ağlara bağlanan aygıtlarla kullanılmamalıdır.',
'3463' : 'Yalnızca Yerel Düzgeçiş',
'3464' : 'IPv6 WAN Düzgeçiş devre dışı bırakıldı. LAN ve Wi-Fi\'niz üstündeki bütün yerel aygıtlar hala birbirleriyle doğrudan iletişim kurabilirler ancak yönlendirici, internete ya da internetten IPv6 paketleri göndermeyecek ve herhangi bir IPv6 paketine doğrudan yanıt vermeyecektir.',
'3465' : 'İnternet Servis Sağlayıcınız IPv6 bağlantısı sağlamıyor. IPv6 desteği konusunda bilgi almak ya da bağlanabilirlik kurmak için lütfen onlarla bağlantı kurun.',
'3466' : 'Yalnızca Yerel Düzgeçiş, aygıtlarınızın kendi aralarında IPv6 paketleri göndermelerini sağlayan otomatik bir ayardır. Diğer seçenek internete bir IPv4 bağlantısı yoluyla erişmek için "6\'dan4\'e Tünel" kullanmaktır.',
'3467' : 'Her kutuda dört onaltılık hane olmalıdır (0-9 ve a-f).',
'3468' : 'Lütfen çok noktaya yayın yapmayan bir adres girin. Çok noktaya yayın yapan adresler genellikle ff ile başlarlar.',
'3469' : 'Önek uzunluğu 1-127 arasında olmalıdır. Önek uzunluğu genellikle 64, 56 ya da 48\'dir.',
'3470' : 'IPv4 bağlantısı yok.',
'3471' : 'Bu DNS ayarları Ana Baba Denetimleriniz tarafından iptal edilmiş.',
'3472' : 'Web Sitesi Filtresi',
'3473' : 'IPv6 üstünde PPPoE seçmeden önce lütfen İnternet WAN > Bağlantı Ayarları içinde PPPoE\'yi seçin.',
'3474' : 'İnternet bağlantısı kesildi. Lütfen WAN bağlantı türünüzü kontrol edin ya da İnternet Sağlayıcınız ile bağlantı kurun.',
'3475' : 'İnternet Servis Sağlayıcınız tarafından sağlanan varsayılan DNS',
'gtTryManu' : 'Eğer bağlantı türünüzü biliyorsanız, ',
'gtSetManual' : 'onu manüel olarak da kurabilirsiniz ',
'2100' : 'Erişim reddedildi. Engellenmiş sayfa veya hizmetlere geçici olarak erişime izin vermek için Yönlendirici şifresini girin.',
'2101' : 'Giriş Sayfası',
'2102' : 'GİT',
'354' : 'Bu sayfada, ağınıza bağlı bulunan her bilgisayarın IP adresi, Ana Bilgisayar adı ve MAC adresi gösterilir. Bilgisayarın ana bilgisayar adı belirtilmemişse, Ana Bilgisayar Adı alanı boş bırakılır. "Yenile" düğmesine basıldığında liste güncellenir.',
'355' : 'IP Adresi',
'356' : 'Ana Bilgisayar Adı',
'357' : 'MAC Adresi',
'370' : 'Bu sayfa yeni bağlantılar kurmanıza yardım eder, DHCP\'yi açıp kapatmanızı ve yerel ağınız üstündeki yönlendiricinin IP adresini ayarlamanızı sağlar.',
'371' : 'IP Adresi',
'372' : 'Alt Ağ Maskesi',
'373' : 'DHCP Server (DHCP Sunucusu)',
'378' : 'DHCP sunucu işlevi ağdaki her bilgisayara bir IP adresi atayarak ağ kurulumunu çok kolay hale getirir. Burada değişiklik yapılması gerekmez.',
'379' : 'IP Havuzu Başlangıç Adresi',
'380' : 'IP Havuzu Bitiş Adresi',
'381' : 'İşletme Süresi',
'382' : 'Daima',
'383' : 'Yarım Saat',
'384' : '1 Saat',
'385' : 'İki Saat',
'386' : 'Yarım Gün',
'387' : 'Bir Gün',
'388' : 'İki Gün',
'389' : 'Bir Hafta',
'390' : 'İki Hafta',
'391' : 'DHCP sunucunun her bilgisayar için IP adresini saklayacağı sürenin uzunluğudur.',
'392' : 'Yerel Alan Adı',
'393' : 'İsteğe Bağlı',
'394' : 'Ağınıza bir ad vermenize olanak tanıyan özelliktir.',
'397' : 'IP havuzu, ağ geçidi IP\'si ile aynı alt ağda olmalıdır',
'398' : 'Bitiş IP adresi, başlangıç IP adresinden daha büyük olmalıdır.',
'399' : 'LAN IP adresi DHCP adres havuzunda olamaz.',
'400' : 'Seçtiğiniz IP adresi yönlendirilemez bir IP adresi olmalıdır.',
'401' : 'Geçersiz Lan IP adresi, ilk numara 127 veya 0 olamaz',
'404' : 'Lütfen tarayıcınızın durum çubuğundaki Adres giriş kutusundaki adresi manuel olarak yeni LAN adresiyle değiştirin.',
'406' : 'LAN IP adresini gerçekten değiştirmek istiyor musunuz?',
'416' : '192.168.y.x (burada y 0 ile 255 arasında herhangi bir sayıdır ve x 1 ile 254 arasında herhangi bir sayıdır.)',
'417' : '10.y.y.x (burada y 0 ile 255 arasında herhangi bir sayıdır ve x 1 ile 254 arasında herhangi bir sayıdır.)',
'418' : '172.z.y.x (burada z 16 ile 31 arasında herhangi bir sayıdır, y 0 ile 255 arasında herhangi bir sayıdır ve x 1 ile 254 arasında herhangi bir sayıdır.)',
'713' : 'Geçersiz Yerel Alan Adı:',
'1228' : 'IP Havuzu Başlangıç Adresi geçersiz!',
'1229' : 'IP Havuzu Bitiş Adresi geçersiz!',
'1240' : 'LAN IP Adresi geçersiz!',
'3' : 'Oturum Aç',
'408' : 'Ayarları değiştirmeden önce şifre ile oturum açmanız gerekir. Henüz özel bir şifre belirlemediyseniz, bu alanı boş bırakarak "Gönder" düğmesini tıklatın.',
'410' : 'Varsayılan = boş bırakılır',
'412' : 'Gönder',
'1371' : 'Yanlış şifre',
'1372' : 'Lütfen şifrenizi doğrulayın ve tekrar deneyin.',
'124' : 'Yönlendirici, oturum açan ve oturumu kapatılan bilgisayarlarla Internet\'ten yönlendiriciye erişme girişimleri gibi yönlendiricideki tüm etkinliklerin günlüğünü tutar.',
'125' : 'Günlük Dosyası',
'126' : 'Kaydet',
'127' : 'Saydam',
'1302' : 'Sistem Günlüğü',
'1303' : 'Güvenlik Duvarı Günlüğü',
'8' : 'LAN Ayarları',
'9' : 'Yerel Ağ Ayarları',
'10' : 'Bağlı Aygıtlar',
'2500' : 'Statik Yönlendirme',
'11' : 'Internet WAN',
'335' : 'Bağlantı Türü',
'690' : 'Dinamik',
'692' : 'Statik',
'694' : 'PPPoE',
'696' : 'PPTP',
'698' : 'Telstra BigPond/OptusNet Kablo',
'42' : 'IPV6',
'43' : 'IPv6 Bağlantısı',
'13' : 'DNS',
'14' : 'MAC Adresi',
'16' : 'WiFi',
'17' : 'Ağ Adı',
'18' : 'Güvenlik',
'803' : '128bit WEP',
'804' : '64bit WEP',
'1296' : 'WPA/WPA2-Personal (PSK)',
'1297' : 'WPA/WPA2-Enterprise (RADIUS)',
'805' : 'WPA (Radius Sunucusu ile)',
'1319' : 'Wi-Fi Korumalı Kurulum',
'777' : 'Erişim Noktası Olarak Kullan',
'833' : 'MAC Adres Kontrolü',
'1613' : 'Konuk Erişimi',
'1850' : 'Ana Baba Denetimleri',
'1851' : 'Web Sitesi Filtresi',
'1710' : 'Erişim Kontrolü',
'20' : 'Ortam',
'7151' : 'Trafik Grafiği',
'7000' : 'Medya Servis Sağlayıcısı',
'1780' : 'Torrent Mate',
'1790' : 'Opsiyonel Yazılım',
'23' : 'Güvenlik Duvarı',
'24' : 'Port Yönlendirme',
'25' : 'İstemci IP Filtreleri',
'26' : 'MAC Adresi Filtreleme',
'27' : 'DMZ',
'41' : 'DDNS',
'28' : 'WAN Ping\'ini Engelleme',
'29' : 'Güvenlik Günlüğü',
'30' : 'Yardımcı Yazılımlar',
'32' : 'Yönlendiriciyi Yeniden Başlat',
'34' : 'Fabrika Ayarlarına Dön',
'35' : 'Ayarları Kaydet/Yedekle',
'36' : 'Önceki Ayarları Geri Yükle',
'37' : 'Bellenim Güncelleme',
'38' : 'Sistem Ayarları',
'39' : 'Kendi Kendini İyileştirme',
'1900' : 'Kayıt',
'132' : 'Gelen port aralığı doğru değil.',
'133' : 'Özel port aralığı doğru değil.',
'134' : 'Bu işlev, Yönlendiriciniz üzerinden dahili ağa web sunucusu (port 80), FTP sunucusu (Port 21) gibi servisler veya diğer uygulamalar için dışardan (Internet) arama yönlendirmenizi sağlar.',
'276' : 'Girişi temizle',
'277' : 'Ekle',
'278' : 'Açıklama',
'280' : 'Tür',
'281' : 'Özel IP adresi',
'282' : 'Özel portu',
'376' : 'tümü',
'411' : 'Saydam',
'648' : 'Geçersiz Karakter',
'672' : 'Geçersiz numara! 1 ile 65535 arasında olmalıdır',
'905' : 'Tüm girişler dolu.\nLütfen bazı girişleri temizleyip yeniden deneyin.',
'906' : 'Girişi temizlemek istiyor musunuz',
'907' : 'Tüm girişleri temizlemek istiyor musunuz?',
'1241' : 'WAN IP Adresi geçersiz!',
'1250' : 'Port geçersiz!',
'1362' : 'Açıklama boş',
'1601' : 'Otomatik',
'2055' : 'Gelen port aralığı yer paylaşımı!!',
'2056' : 'Özel port aralığı yer paylaşımı',
'3310' : 'Intellistream',
'3311' : 'İnternet bağlantınızı optimize edin.',
'3312' : 'Medya Servis Sağlayıcısı',
'3313' : 'Ağ üstündeki aygıtlar arasında ortam paylaşın.',
'3314' : 'Ana Baba Denetimleri',
'3315' : 'İnternet güvenliği için DNS güvenlik filtreleri',
'3316' : 'IPv6 Bağlantısı',
'3317' : 'Ağınız şimdi IPv6 uyumlu',
'1852' : 'Bu, tehlikeli/uygun olmayan web sitelerine karşı bir koruma katmanı olarak işlev gösterir. Web filtreleri, siteleri, adlarını onaylı bir site listesinden kontrol etmek yoluyla tarar.',
'1854' : 'Filtreleme Seçenekleri',
'1856' : 'Filtre Yok',
'1858' : 'Kötü niyetli siteleri engelle',
'1859' : 'Kötü amaçlı yazılım, kimlik avı ve sahtekar siteleri engeller.',
'1860' : 'Kötü niyetli ve yetişkin siteleri engelle',
'1861' : 'Kötü amaçlı yazılım, kimlik avı, sahtekar siteler ve cinsel içerikli siteleri engeller.',
'1862' : 'Kötü niyetli, Yetişkin içerikli ve diğer aile dostu olmayan siteleri engelle.',
'1863' : 'Kötü amaçlı yazılımlar, kimlik avı ve sahtekar siteleri olduğu gibi cinsel içerikli materyaller, yetişkin içeriği, kürtaj, alkol, tütün, suç, kült, uyuşturucu, kumar, nefret, intihar ya da şiddet içeren siteleri de engeller.',
'1864' : 'DNS adresinizi değiştirmek için lütfen İnternet WAN > {DNS} yolunu izleyin.',
'7152' : 'Aşağıdaki grafikler farklı kategorilerde önceliklendirilmiş WAN gelen ve giden trafiğini gösterir. Grafikler son 10 dakikayı gösterir (her 5 saniyede bir otomatik olarak güncellenir).',
'7154' : 'Trafik Açıklamaları',
'7155' : 'Gelen Trafik',
'7156' : 'Giden Trafik',
'7157' : 'Bu özelliği aktive etmek için lütfen Intellistream\'i',
'7158' : 'buradan etkinleştirin',
'7159' : '.',
'7160' : 'Ağ Bağlantısı ve Denetim',
'7161' : 'Ses, Video Sohbet ve Oyun',
'7162' : 'Web ve Web Video',
'7163' : 'E-Posta ve VPN',
'7164' : 'Karşıdan Yüklenenler, Torrentler ve Diğerleri',
'7170' : 'Bayt/Sn',
'7174' : 'Günün Saati/Saat:Dakika',
'326' : 'Yerel Ağ',
'327' : 'LAN/WLAN MAC',
'332' : 'DHCP Server (DHCP Sunucusu)',
'333' : 'Internet Ayarları',
'334' : 'WAN MAC Adresi',
'337' : 'WAN IP',
'338' : 'Varsayılan Ağ Geçidi',
'339' : 'DNS Adresi',
'gtGuestName' : 'Konuk SSID',
'gtGuestKey' : 'Konuk Anahtarı',
'347' : 'Ayarları değiştirebilmeniz için önce oturum açmanız gerekir.',
'2022' : 'Yalnızca modem',
'2031' : 'Bağlan',
'2032' : 'Bağlantıyı Kes',
'2033' : 'Gürültü Marjı',
'2034' : 'Aşağı Yönde',
'2035' : 'Yukarı Yönde',
'2036' : 'Zayıflama(dB)',
'2037' : 'Çıkış gücü(dBm)',
'2038' : 'Veri hızı(Kb/s)',
'tDashboard' : 'Belkin yönlendirici gösterge paneline hoş geldiniz!',
'rtFeature' : 'Özellikler',
'rtLink' : 'Yönlendirici Bağlantıları',
'p1310t001' : 'Bağlantı Detayları',
'p1310t002' : 'Bağlantıyı yeniden test et',
'p1310t003' : 'Son kontrol',
'p1310t004' : 'Karşıdan Yükleme Hızı',
'p1310t005' : 'Karşıya Yükleme Hızı',
'p1000t001' : 'Bağlı Cihazlar',
'p1000t002' : 'Hepsini gör',
'2501' : 'Lütfen Aşağıdaki Yapılandırma Parametrelerini Girin',
'2502' : 'Ağ Adresi',
'2503' : 'Alt Ağ Maskesi',
'2504' : 'Ağ Geçidi',
'396' : 'Girdiğiniz Alt ağ maskesi numarası geçersiz.',
'1231' : 'Ağ Geçidi geçersiz!',
'1361' : 'Geçersiz IP adresi, ilk numara 1 ile 254 arasında olmalıdır.',
'1800' : 'IP adresi ve Alt Ağ maskesi eşleşmiyor.',
'Support1t011' : 'Onun hakkında her şeyi okuyun.',
'Support2t011' : 'Onun hakkında her şeyi okuyun.',
'Support2t012' : 'İnternete bağlı bir aygıt üstünde aşağıdaki URL\'yi ziyaret edin ve problemi kendi kendinize nasıl çözebileceğinizi öğrenin: <STRONG>www.belkin.com/support/asdlkj</STRONG>',
'Support3t011' : 'Onun hakkında her şeyi okuyun.',
'Support3t012' : 'İnternete bağlı bir aygıt üstünde aşağıdaki URL\'yi ziyaret edin ve problemi kendi kendinize nasıl çözebileceğinizi öğrenin: <STRONG>www.belkin.com/support/asdlkj</STRONG>',
'Support6t036' : 'Onun hakkında her şeyi okuyun.',
'425' : 'Bu, yönlendiricinizi orijinal ayarlarına döndürecektir. Orijinal ayarları geri yüklemeden önce <a href="ut_save.html">ayarlarınızı kaydetmenizi/yedeklemenizi</a> öneririz. Yapılandırmanızı kaydetmeniz, ayarlarınız kaybolduğunda veya değiştiğinde bunları geri yüklemenizi sağlar.',
'426' : 'UYARI: Bütün ayarlarınız kaybolacak!\nBunu yapmak istediğinizden emin misiniz?',
'427' : 'Varsayılan ayarların geri yüklenmesi $s saniye kadar sürecek. Bu işlem sırasında Yönlendiriciyi kapatmayın.',
'428' : 'Fabrika Ayarlarına Dönülmeyecek.Ayarlar Kaybolmayacak!',
'429' : 'Varsayılanları Geri Yükle',
'301' : 'Bu, daha sorunsuz bir ağ için yönlendiricinizi haftalık olarak yeniden başlatır.',
'302' : 'Yönlendiricimi otomatik olarak yeniden başlat',
'303' : 'Günü Ayarla',
'304' : 'Saati Ayarla',
'527' : 'Bu, yönlendiricinizin ayarlarını daha önce kaydettiğiniz herhangi bir yapılandırmaya ayarlamanızı sağlar.',
'528' : 'Restore (Geri Yükle)',
'529' : 'Yedek ayarları içeren dosyanın adını yazın.',
'530' : 'Devam etmek ve ayarları geri yüklemek istiyor musunuz?',
'531' : 'Ayarlar geri yüklendikten sonra, aygıt bir dakika süreyle komutlara yanıt vermeyebilir.\n\nBu normaldir. Bu sırada aygıtı kapatmayın.',
'451' : 'Mevcut yönlendirici yapılandırmanızı kaydetmeniz, ayarlarınız kaybolduğunda veya değiştiğinde bunları geri yüklemenizi sağlar. Donanım yazılımı güncellemeleri yapmadan önce ayarlarınızı kaydetmenizi öneririz.',
'539' : 'Kaydet',
'130' : 'IP adreslerinin tümünü girmediniz veya girdiğiniz sayılardan bazıları geçersiz. IP adresi giriş kutusundaki sayı 1 ile 254 arasında olmalıdır.',
'541' : 'Yönetici Şifresi:',
'542' : 'Yönlendirici şifre GİRİLMEMİŞ olarak satılır. Daha fazla güvenlik için bir şifre eklemek istiyorsanız, burada bir şifre ayarlayabilirsiniz.',
'543' : 'Geçerli Şifreyi yazın',
'544' : 'Yeni Şifreyi yazın',
'545' : 'Yeni Şifreyi doğrulayın',
'546' : 'Oturum Açma İçin Zaman Aşımı',
'547' : '(1-99 dakika)',
'548' : 'Saat ve Saat Dilimi:',
'549' : 'Ocak',
'550' : 'Lütfen Saat Diliminizi ayarlayın. Yaz saati uygulaması olan bir bölgede bulunuyorsanız bu kutuyu işaretleyin.',
'551' : 'Saat Dilimi',
'606' : 'Yaz Saati Uygulaması',
'607' : 'Yaz Saatini Otomatik Ayarla',
'608' : 'Uzaktan Yönetim:',
'609' : 'GELİŞMİŞ ÖZELLİK!',
'610' : 'Uzaktan yönetim, Internet üzerinde istediğiniz yerden Yönlendiricinizin ayarlarını değiştirebilmenizi sağlar. Bu işlevi etkinleştirmeden önce,',
'611' : 'YÖNETİCİ ŞİFRESİNİ BELİRLEDİĞİNİZDEN EMİN OLUN.',
'642' : 'Uzaktan yönetimi açmak güvenlik riskinizi artırır. Onu yalnızca gerektiğinde kısa süreler için açın, kullanmadığınız zamanlarda kapatın ve lütfen bir şifre belirleyin.',
'612' : 'Herhangi bir IP adresi yönlendiriciyi uzaktan yönetebilir.',
'613' : 'Yalnızca bu IP adresi &nbsp;&nbsp;&nbsp;yönlendiriciyi uzaktan yönetebilir',
'614' : 'Uzaktan Yönetim Etkinleştir / Devre Dışı Bırak',
'615' : 'Bağlantı Noktası Ataması Sanal Sunucuda kullanıldı.',
'616' : 'Bağlantı Noktası Ataması geçerli WAN IP adresi ile çakışıyor.',
'617' : 'UPNP Etkinleştirme:',
'618' : 'Yönlendiricinin UPNP özelliğini etkinleştirmenizi veya devre dışı bırakmanızı sağlar. UPnP\'yi destekleyen uygulamalar kullanıyorsanız, UPnP\'nin etkinleştirilmesi bu uygulamaların yönlendiriciyi otomatik olarak yapılandırmasını sağlar.',
'619' : 'UPNP\'yi Etkinleştir / Devre Dışı Bırak',
'620' : 'Otomatik Bellenim Güncellemeyi Etkinleştirme:',
'621' : 'Yönlendiriciniz için bellenim güncellemelerinin mevcut olup olmadığını otomatik olarak kontrol etmenizi sağlar.',
'622' : 'Otomatik Bellenim Güncellemeyi Etkinleştir / &nbsp;&nbsp;&nbsp;Devre Dışı Bırak',
'623' : 'Geçerli Şifre geçersiz',
'624' : 'Yeni girdiğiniz şifreler eşleşmiyor. Lütfen tekrar deneyin.',
'626' : 'Şifre uzunluğu geçersiz. Maksimum şifre uzunluğu 12 ve Minimum şifre uzunluğu 3 karakterdir',
'628' : 'Yönetici şifrenizi belirlemeniz kesinlikle önerilir.',
'629' : 'Birincil NTP Sunucusu',
'630' : 'İkincil NTP Sunucusu',
'640' : 'Uzaktan Erişim Portu',
'738' : 'Boşta kalma süresi için girdiğiniz sayılar geçersiz. Sayı 1 ile 99 arasında bir tam sayı olmalıdır.',
'796' : 'Turbo Modu\'nun etkinleştirilmesi, Yönlendirici veya Erişim Noktasından 802.11g istemcilerine maksimum çıktı sağlamak üzere Yönlendiricinin veya Erişim Noktasının Frame Bursting\'i kullanmasını sağlar. Turbo modu, Turbo Modu\'nu destekleyen 802.11g istemcileriyle çalışır. En yeni sürücüyü kullanan Belkin 802.11g İstemcileri, Turbo Modu\'nu destekler. Turbo Modu\'nu desteklemeyen istemciler, Turbo Modu etkinleştirildiğinde normal şekilde çalışır.',
'1282' : 'Şubat',
'1283' : 'Mart',
'1284' : 'Nisan',
'1285' : 'Mayıs',
'1286' : 'Haziran',
'1287' : 'Temmuz',
'1288' : 'Ağustos',
'1289' : 'Eylül',
'1290' : 'Ekim',
'1291' : 'Kasım',
'1292' : 'Aralık',
'1373' : 'Avustralya',
'1374' : 'Yeni Zelanda',
'1375' : 'Kuzey Amerika',
'1376' : 'Avrupa',
'1377' : 'Asya Pasifik',
'2300' : '(GMT-12:00) Enewetak, Kwajalein',
'2301' : '(GMT-11:00) Midway Adası, Samoa',
'2302' : '(GMT-10:00) Hawaii',
'2303' : '(GMT-09:00) Alaska',
'2304' : '(GMT-08:00) Pasifik Saati (ABD ve Kanada); Tijuana',
'2305' : '(GMT-07:00) Arizona',
'2306' : '(GMT-07:00) Sıradağlar Saati (ABD ve Kanada',
'2307' : '(GMT-06:00) Merkezi Saat (ABD ve Kanada)',
'2308' : '(GMT-06:00) Mexico City',
'2309' : '(GMT-06:00) Tegucigalpa',
'2310' : '(GMT-06:00) Saskatchewan',
'2311' : '(GMT-05:00) Bogota, Lima, Quito',
'2312' : '(GMT-05:00) Doğu Saati (ABD ve Kanada)',
'2313' : '(GMT-05:00) Indiana (Doğu)',
'2314' : '(GMT-04:00) Atlantik Saati (Kanada)',
'2315' : '(GMT-04:00) Karakas, La Paz',
'2316' : '(GMT-04:00) Santiago',
'2317' : '(GMT-03:00) Newfoundland',
'2318' : '(GMT-03:00) Brasilia',
'2319' : '(GMT-03:00) Buenos Aires, Georgetown',
'2320' : '(GMT-02:00) Orta Atlantik',
'2321' : '(GMT-01:00) Azor, Cape Verde Adl.',
'2322' : '(GMT) Kazablanka, Monrovia',
'2323' : '(GMT) Greenwich Ortalama Zamanı: Lizbon, Londra, Edinburgh',
'2324' : '(GMT) Greenwich Ortalama Zamanı: Dublin',
'2325' : '(GMT+01:00) Amsterdam, Berlin, Bern, Roma',
'2326' : '(GMT+01:00) Stockholm, Viyana, Belgrad',
'2327' : '(GMT+01:00) Bratislava, Budapeşte, Ljubljana',
'2328' : '(GMT+01:00) Prag,Brüksel, Kopenhag, Madrid',
'2329' : '(GMT+01:00) Paris, Sarajevo, Üsküp',
'2330' : '(GMT+01:00) Varşova, Zagreb',
'2331' : '(GMT+02:00) Atina, İstanbul, Minsk, Vilnius, Sofya',
'2332' : '(GMT+02:00) Bükreş',
'2333' : '(GMT+02:00) Kahire',
'2334' : '(GMT+02:00) Harare, Pretoria',
'2335' : '(GMT+02:00) Helsinki, Riga, Tallinn',
'2336' : '(GMT+02:00) İsrail',
'2337' : '(GMT+03:00) Bağdat, Kuveyt, Nairobi, Riyad',
'2338' : '(GMT+03:00) Moskova, St. Petersburg,Volgograd, Kazan',
'2339' : '(GMT+03:00) Tahran',
'2340' : '(GMT+04:00) Abu Dabi, Muskat, Tiflis',
'2341' : '(GMT+04:00) Kabil',
'2342' : '(GMT+05:00) İslamabad, Karaçi, Ekaterinburg',
'2343' : '(GMT+05:30) Delhi',
'2344' : '(GMT+06:00) Almati, Dhaka',
'2345' : '(GMT+07:00) Bangkok, Cakarta, Hanoi',
'2346' : '(GMT+08:00) Pekin, Chongqing, Urumqi',
'2347' : '(GMT+08:00) Hong Kong, Perth, Singapur, Taype',
'2348' : '(GMT+09:00) Tokyo, Osaka, Sapporo',
'2349' : '(GMT+09:00) Seul',
'2350' : '(GMT+09:30) Adelaide, Darwin',
'2351' : '(GMT+10:00) Brisbane',
'2352' : '(GMT+10:00) Canberra, Melbourne, Sydney',
'2353' : '(GMT+10:00) Hobart',
'2354' : '(GMT+10:00) Guam, Port Moresby',
'2355' : '(GMT+11:00) Magadan, Solamon, Yeni Kaledonya',
'2356' : '(GMT+12:00) Wellington, Auckland',
'2357' : '(GMT+12:00) Fiji',
'2358' : '(GMT+13:00) Nuku`alofa.',
'2370' : 'P',
'2371' : 'Pt',
'2372' : 'S',
'2373' : 'W',
'2374' : 'Pe',
'2375' : 'C',
'2376' : 'Ct',
'2401' : 'ECO Modu',
'2402' : 'Ön panel LEDlerini karart',
'2403' : 'Radyoyu devre dışı bırak:',
'2404' : 'istisna:',
'2405' : 'Bu işlev, enerji tasarrufu sağlamak için yönlendiricinin ön tarafındaki LEDleri karartmanızı sağlar. Ayrıca önceden belirlenen saatlerde kablosuz radyoyu devre dışı bırakabilirsiniz.',
'2406' : 'Başlangıç zamanı bitiş zamanından sonra olamaz!',
'322' : 'Bellenim Sürümü',
'431' : 'Zaman zaman Belkin, yönlendiricinin çalışan programlamasının yeni sürümlerini çıkartabilir. Bu güncellemeler yönlendiriciniz için iyileştirmeler ve düzeltmeler içerir.',
'432' : '<b>NOT:</b> Lütfen yeni bir donanım yazılımı güncellemesi yapmadan önce <a href="ut_save.html">geçerli ayarlarınızı yedekleyin</a>..',
'433' : 'Burayı Tıklatın',
'434' : 've Geçerli ayarları kaydet/yedekle sayfasına gidin.',
'435' : 'Yeni Bellenim Sürümünü Kontrol Et',
'436' : 'Bellenimi Kontrol Et',
'437' : 'Bellenimi Güncelle',
'438' : 'Güncelle',
'439' : 'Lütfen güncelleme dosyasının konumunu belirtin. Dosyanın yolunu yazın veya dosyanın konumuna gitmek için "Gözat" düğmesini tıklatın.',
'440' : 'Yükseltme işlemine devam etmek istediğinizden emin misiniz?',
'441' : 'Yükseltme işleminin sonunda, Yönlendirici bir dakika süreyle komutlara yanıt vermeyebilir. Bu normal bir durumdur. Bu sırada Yönlendiriciyi kapatmayın veya yeniden başlatmayın.',
'1198' : 'Bellenim güncellemesi devam ediyor.',
'534' : 'Yönlendiriciyi Yeniden Başlat',
'535' : 'Yönlendiriciyi yeniden başlatmak istediğinizden emin misiniz? Yönlendiricinin yeniden başlatılması yapılandırmanızı etkilemez',
'536' : 'Yönlendiricinin yeniden başlatılması için $s saniye kadar bekleyin. Sıfırlama işlemi tamamlanmadan önce Yönlendiriciyi kapatmayın.',
'7001' : 'Ağınıza bağlı her türlü DLNA aygıtı üstünden kişisel müzik, fotoğraf ve videolarınızın keyfini rahatça çıkarın. Twonky tarafından beslenir.',
'7002' : 'DLNA Sunucusu',
'7003' : 'Sunucu Adı',
'7004' : 'Paylaşılan Sürücüler:',
'7005' : 'Hazır',
'7006' : 'Endeksleniyor...',
'7007' : 'Sunuluyor:',
'7008' : 'videolar',
'7009' : 'şarkılar',
'7010' : 'resimler',
'7011' : 'Ağ ile paylaşılmıyor.',
'7012' : 'Yönlendiriciye bağlı USB sürücüsü yok.',
'7016' : 'Endeks Yenile',
'7017' : 'Lütfen ortam sunucusu için kolay bir ad girin.',
'7018' : 'İzin verilmeyen karakter',
'7019' : 'Yönlendiricinizin endeksleyebileceğinden daha fazla ortamınız var, o yüzden ilk öğeleri',
'7020' : 'sunuyoruz.',
'7021' : 'Twonky, PacketVideo Corporation (PV) tarafından yaratılan bir dijital ev yazılımı ürünleri serisidir.',
'7022' : 'Yalnızca okunur sürücü endekslenemez.',
'7023' : 'MB',
'7024' : 'GB',
'7025' : 'TB',
'7026' : 'video',
'7027' : 'şarkı',
'7028' : 'resim',
'770' : 'Bu seçeneği yalnızca Bigpond Kablo ve OptusNet Kablo bağlantıları için kullanın. ',
'771' : 'ÖNEMLİ:',
'775' : '3) Belkin yönlendiricinin güç kablosunu geri takın.',
'776' : 'Internet\'e başarıyla bağlandığınızı onaylamak için, Internet Explorer, Firefox ve Safari gibi bir internet tarayıcı açın ve web sayfalarını açabildiğinizden emin olun.',
'731' : 'Kullanıcı Adı',
'489' : 'Parola',
'732' : 'Şifreyi Yeniden Yazın',
'756' : 'Lütfen şifrenizi yeniden girin!',
'1379' : 'IP numaralarının tümünü girmediniz veya girdiğiniz numaralardan bazıları geçersiz. IP adresi, x.y.y.x biçiminde olmalıdır (burada y, 0 ile 255 arasında, x ise 1 ile 254 arasında herhangi bir sayıdır).',
'709' : 'Dinamik IP ayarlarınızı girmek için, bilgilerinizi aşağıya yazarak "Kaydet"e tıklayın.',
'710' : 'Ana Bilgisayar Adı',
'711' : 'Ana Bilgisayar Adı = A, bazı İnternet Servis Sağlayıcılarının sistemlerine bağlantı imkanı sunmak için ihtiyaç duydukları bir addır.',
'712' : 'WAN MAC Adresini Değiştir',
'330' : 'IP adresi',
'331' : 'Alt ağ maskesi',
'659' : 'Geçersiz MTU, 500 ile 1500 arasında olmalıdır.',
'730' : 'PPPoE ayarlarınızı girmek için, bilgilerinizi aşağıya yazarak "Kaydet"e tıklayın.',
'733' : 'Servis Adı (İsteğe Bağlı)',
'734' : 'MTU (500-1500)',
'735' : 'İSS farklı bir değer istemiyorsa, MTU ayarlarını değiştirmeyiniz.',
'736' : 'Etkinlik gerçekleştirilmeyen',
'737' : 'dakikadan sonra bağlantıyı kes.',
'741' : 'Geçersiz MTU değeri',
'2005' : 'ISP tarafından atanan IP',
'2021' : 'DNS Ayarlarınızı girmek için burayı tıklatın',
'2023' : 'Çift tırnak kullanılamaz.',
'2024' : 'Kullanıcı adı kabul edilemez karakterler içeriyor',
'2025' : 'Ters eğik çizgi kullanılamaz.',
'2030' : 'Varsayılan Ağ Geçidi numaralarının tümünü girmediniz veya girdiğiniz numaralardan bazıları geçersiz. Numaralar 0 ile 255 arasında olmalıdır',
'2052' : 'Şifre kabul edilemez karakterler içeriyor (<,> ve &)',
'691' : 'Dinamik bağlantı türü en yaygın türdür. Kablo modem kullanıyorsanız, büyük olasılıkla dinamik bağlantınız vardır. Kablo modeminiz varsa veya bağlantı türünüzden emin değilseniz, bunu kullanın.',
'723' : 'Ana Bilgisayar Adı gerektiren ISP\'ler ve bağlantıyı belirli bir MAC adresine bağlayan ISP\'ler dahildir.',
'693' : 'Statik IP adresi bağlantı türü, diğerlerine göre daha az yaygındır. Bu seçimi yalnızca ISP\'niz size asla değişmeyen bir IP adresi verdiyse kullanın.',
'724' : 'Yönlendirici, statik IP adresi atayan bir ISS bağlantısını destekler.',
'695' : 'DSL modem kullanıyorsanız ve/veya ISP\'niz size Kullanıcı Adı ve Şifre verdiyse, bağlantı türünüz PPPoE\'dir. Bu bağlantı türünü kullanın.',
'725' : 'Yönlendirici, kimlik doğrulaması için PPPoE oturumu açmayı gerektiren dinamik bağlantı türünü destekler.',
'697' : 'Bazı İSS\'ler, aboneleri merkez ofise bağlamak için PPTP protokolünü kullanırlar. Bunun için, İSS\'nizin sağlamış olması gereken bir kaç ek ayarı girmeniz gerekmektedir. Her şey doğru yapılmışsa, değişiklikleri kaydettiğinizde İnternet durum göstergesi yeşili gösterir.',
'726' : 'Sadece PPTP bağlantı yöntemi ile çalışan İSS\'ler ile kullanılır.',
'699' : 'Bu seçeneği yalnızca Bigpond Kablo ve OptusNet Kablo bağlantıları için kullanın.',
'728' : 'YALNIZCA Avustralya\'daki kullanıcılar için geçerlidir. Yönlendirici, Telstra BigPond\'a bağlantıyı destekler.',
'2019' : 'Modem ayarlarınızı girmek için, bilgilerinizi aşağıya yazarak "Kaydet"e tıklayın.',
'tBackToConnectionType' : 'Bağlantı Türüne Geri Dön',
'759' : 'Statik IP ayarlarınızı girmek için, bilgilerinizi aşağıya yazarak "Kaydet"e tıklayın.',
'761' : 'Alt Ağ Maskesi',
'762' : 'ISP Ağ Geçidi Adresi',
'754' : 'DNS Ayarlarınızı girmek için burayı tıklatın',
'715' : 'Ağınız üstündeki her aygıtın onu ağdaki diğer aygıtlara ve internete tanıtan benzersiz bir donanım adresi (MAC adresi) vardır.  Birkaç internet servis sağlayıcısı (ISS) ağ kartınızdan ya da eski yönlendiricinizden gelen MAC adresini yönlendirici ayarlarınıza yazmanızı gerektirir. Emin değilseniz, yönlendiriciyi yüklemeden önce başlangıçta modeme bağlı olan bilgisayarın MAC adresini girin.',
'716' : 'WAN MAC Adresi',
'717' : 'Bilgisayarın MAC Adresini Klonla',
'718' : 'Klonla',
'721' : 'Internet/WAN sekmesi, Internet Servis Sağlayıcınıza bağlanması için Yönlendiricinizi ayarlayacağınız sekmedir. Yönlendirici, Yönlendiricinin ayarlarını ISP\'nizin bağlantı tipi için doğru şekilde ayarladığınız takdirde neredeyse tüm Internet Servis Sağlayıcısı sistemlerine bağlanabilir. Yönlendiriciyi ISP\'nize bağlanacak şekilde yapılandırmak için, ekranın solundaki Internet/Wan Sekmesindeki "Bağlantı türü" düğmesini tıklatın.',
'722' : 'Desteklenen bağlantı türleri:',
'htWANMainContent' : 'Bağlantı türünüzü seçin:',
'700' : 'İleri',
'744' : 'PPTP Hesabı',
'745' : 'Parola',
'746' : 'Şifreyi Yeniden Yazın',
'747' : 'Ana Bilgisayar Adı',
'1770' : 'ISP Tarafından Atanan IP',
'1771' : 'Evet',
'1772' : 'Hayır',
'1773' : 'Servis Adresi',
'750' : 'Alt Ağ Maskesi',
'778' : 'Yönlendirici, tüm yönlendirme ve güvenlik duvarı işlevlerini baypas eden bir Erişim Noktası olarak çalışacak şekilde yapılandırılabilir. Bunu yapmak için, "Etkinleştir" öğesini seçin ve Erişim noktasının sahip olmasını istediğiniz IP adresini yazın.',
'779' : 'Erişim Noktası Modu:',
'781' : 'Alt Ağ Maskesini Belirle',
'801' : 'Güvenlik Modu',
'806' : 'Kablosuz güvenlik/şifreleme ayarlarını buradan yapılandırabilirsiniz. Maksimum kablosuz güvenliği sağlamak amacıyla güvenlik etkinleştirilmelidir. WPA (Wi-Fi Korumalı Erişim) dinamik anahtar değişiklikleri sağlar ve en iyi güvenlik çözümüdür. Tüm aygıtların WPA\'yı desteklemediği kablosuz ortamlarda WEP (Kabloluya Eşdeğer Gizlilik) kullanılmalıdır.',
'377' : 'Otomatik',
'487' : 'AÇIK',
'488' : 'KAPALI',
'787' : 'Yönlendiricinin kablosuz ayarlarını değiştirmek için, burada değişiklik yapın. Ayarları kaydetmek için "Kaydet"e tıklayın.',
'788' : 'Kablosuz Kanal',
'789' : 'SSID',
'790' : 'Kablosuz Modu',
'794' : 'SSID\'yi Yayınla',
'797' : 'Korumalı Mod',
'1300' : 'Uzatma Kanalı',
'1301' : 'Bant Genişliği',
'1304' : '802.11e/WMM QoS',
'852' : 'Ön paylaşımlı anahtarın uzunluğu 8 ile 63 veya 64 Onaltılık basamak arasında olmalıdır',
'856' : 'Ön paylaşımlı bir Anahtar ile Wi-Fi Korumalı Erişimi: Anahtar kelime, cümle ya da harfler ve sayılardan oluşan bir seri şeklindeki bir şifredir. Anahtar <b>8</b> ile <b>63</b> karakter uzunluğunda olmalıdır ve boşluklar ve semboller ya da yalnızca <b>64</b> on altılık (0-F) basamaklar içerebilir. Ağa bağlanan her istemci aynı anahtarı kullanmalıdır (Ön Paylaşımlı Anahtar).',
'115' : 'On altılık basamakların tümünü girmediniz veya girdiğiniz on altılık basamaklardan bazıları geçersiz. On altılık basamak, 0 ile 9 arası bir sayı veya A ile F arası bir harf olabilir.',
'308' : '<b>SPI</b> Duruma göre paket denetimi. SPI, HomeConnect ev ağı geçidiniz tarafından sağlanan şirket sınıfı Internet güvenliği türüdür. SPI kullanıldığında, ağ geçidi ağınızı bilgisayar hacker\'larından koruyan bir "güvenlik duvarı" görevini görür.',
'808' : 'NOT:',
'809' : 'Parola kullanarak on altılık çiftleri otomatik olarak oluşturmak için sağdaki düğmeye basarak parolayı buraya girin',
'810' : 'Parola',
'811' : 'Oluştur',
'812' : 'Lütfen Parola girin',
'814' : 'Anahar',
'818' : '(onaltılık basamak çiftleri)',
'296' : '<b>IP Adresi</b> IP İnternet Protokolünü ifade eder. IP adresi, noktalarla ayrılan dört sayı dizisinden oluşur; bu dizi, benzersiz tek bir Internet ana bilgisayarını tanımlar. Örnek: 192.34.45.8.',
'298' : '<b>ISS</b> İnternet Servis Sağlayıcısı. ISP, bireylerle diğer işletmeler veya kuruluşlar için Internet bağlantısı sağlayan bir işletmedir.',
'807' : '(13 onaltılık basamak çifti)',
'813' : 'Anahtar eksik',
'821' : 'eksik',
'1190' : '<br>Dinamik DNS sunucu adınızı kaydetmek için, lütfen http://www.dyn.com adresini ziyaret edin.<br>',
'1339' : 'WPS etkinleştirildiğinde WPA/WPA2 kullanılması önerilir.',
'1363' : 'Devam Ediyor - Lütfen bekleyin...',
'1364' : 'Hata Algılandı - Lütfen tekrar deneyin.',
'1365' : 'Oturum bindirme hatası: Lütfen işlemi tekrar başlatmadan önce 60 saniye bekleyin veya bu ağa manüel olarak bağlanmak için istemci hizmet programınıza başvurun',
'1366' : 'Başarılı - Aygıt Yönlendiriciye bağlandı.',
'1370' : 'Geçersiz PIN! Aygıt PIN\'i dört veya sekiz sayısal basamaktan oluşur. Lütfen doğrulayın ve tekrar girin.',
'1620' : 'Başlatılıyor - Lütfen WPS PBC\'yi 2 dakika içinde istemci aygıtta başlatın.',
'1621' : 'Başlatılıyor - Lütfen WPS\'yi 2 dakika içinde istemci aygıtta başlatın.',
'1622' : 'Zaman aşımı - Yönlendiriciye bağlanan istemci yok',
'1623' : 'Wi-Fi Korumalı Kurulum İletisi',
'1393' : 'WPS donanım düğmesi',
'1320' : 'Wi-Fi Korumalı Kurulum (WPS), Wi-Fi ağlarının güvenlik kurulumunu ve yönetimini basitleştirmeye yönelik sektörde standart kabul edilen yöntemdir. Şimdi bir WPA-etkin 802.11 ağını Kişisel Bilgi Numarası (PIN) ya da Basma Düğmesi Yapılandırması (PBC) yöntemini kullanarak WPS sertifikalı aygıtlarla kolayca kurabilir ve ona bağlanabilirsiniz. WPS\'siz eski aygıtlar geleneksel manüel yapılandırma yöntemi kullanılarak ağa eklenebilir.',
'1321' : 'Kişisel Bilgi Numarası (PIN) Yöntemi',
'1322' : 'İstemci aygıtın PIN numarasını girin ve "Kaydet"i tıklatın. Ardından 2 dakika içinde kablosuz hizmet programından veya WPS uygulamasından istemci aygıttaki WPS\'yi başlatın',
'1323' : 'İstemci Aygıt PIN\'ini Girin',
'1324' : 'Kaydet',
'1325' : 'Harici tescil sistemi mevcut ise, Yönlendiricinin PIN\'ini harici tescil sistemine girebilirsiniz. Yönlendiricinin PIN\'ini değiştirmek için "Yeni PIN Oluştur"u tıklatın veya PIN\'i fabrika ayarlarına döndürmek için "Varsayılan PIN\'i Geri Yükle"yi tıklatın.',
'1326' : 'Yönlendirici PIN\'i',
'1327' : 'Yeni PIN Oluştur',
'1328' : 'Varsayılan PIN\'i Geri Yükle',
'1329' : 'Basma Düğmesi Yapılandırması (PBC) Yöntemi',
'1330' : 'Yönlendiricinizdeki PBC düğmesini 3 saniye boyunca basılı tutun veya "PBC\'yi Başlat"ı tıklatın. Ardından Yönlendiriciye bağlanmasını istediğiniz aygıttaki PBC\'yi 2 dakika içinde başlatın.',
'1331' : 'PBC\'yi Başlat',
'1332' : 'Manuel Yapılandırma Yöntemi',
'1333' : 'WPS bulunmayan istemci aygıtlar için, aygıtı aşağıdaki ayarlarla manuel olarak yapılandırın.',
'1334' : 'Kablosuz Güvenlik',
'1336' : 'Ağ Kimlik Doğrulaması',
'1337' : 'Veri Şifrelemesi',
'1338' : 'Ağ Anahtarı (PSK)',
'1340' : 'Yönlendirici PIN\'inin Kilidini Aç',
'1341' : 'Çok sayıda başarısız erişim girişimlerinden dolayı Yönlendirici PIN\'i devre dışı bırakıldı',
'1390' : 'PIN kontrol toplamı başarısız oldu! Lütfen doğrulayın ve tekrar girin.',
'1391' : 'Geçersiz PIN! Aygıt PIN\'i sekiz sayısal basamaktan oluşur. Lütfen doğrulayın ve tekrar girin.',
'1392' : 'Yapılandırıldı',
'1396' : 'Kablosuz güvenliğini manüel olarak yapılandır',
'1397' : 'kablosuz güvenlik',
'common_err1' : '%s, NULL',
'upgrade_err2' : 'Donanım yazılımı yükseltmesi yetersiz kaynaklar nedeniyle sonlandırılmıştır. Yükseltilemedi.\nLütfen sistem kullanılmadığında (İnternet trafiği olmadığında) tekrar deneyin',
'upgrade_err3' : 'Yükleyemiyor, lütfen yöneticiyle iletişim kurun.',
'upgrade_err4' : 'Donanım yazılımı çok büyük, yükseltemedi.',
'upgrade_err5' : 'Zaten en son donanım yazılımı yüklü.',
'upgrade_err6' : 'Donanım yazılımı güncellemesi bozuk gibi görünüyor. Lütfen donanım yazılımı dosyasını yeniden indirin ve tekrar deneyin.',
'show10' : 'DHCP İstemci Listesi',
'show54' : 'Bağlantı Ayarları',
'btn2' : 'Değişiklikleri Uygula',
'cff1' : 'Bellenim Başarıyla Kontrol Edildi',
'PM2' : ':30 PM',
'AM2' : ':30 AM',
'Dimicons' : 'Karartma simgeleri',
'EcoTo' : 'ila',
'fvrm' : 'Lütfen Uzaktan Yönetimi devre dışı bırakın. Çünkü portu sanal sunucularınızdan birinin giriş portuyla çakışmaktadır.',
'lsipm2' : 'Geçersiz Lan IP adresi, son numara 0 veya 255 olamaz',
'lsldnm' : 'Geçersiz Yerel Alan Adı: `~!@#$%^&*()_+[]{}\|;:\'"<>/?.,',
'lsipm5' : 'Seçtiğiniz IP adresi yönlendirilemez bir IP adresi olmalıdır.\n  192.168.x.x (burada x, 0 ile 255 arasında herhangi bir sayıdır.) \n10.x.x.x (burada x, 0 ile 255 arasında herhangi bir sayıdır.)\n172.y.x.x (burada y, 16 ile 31 arasında herhangi bir sayıdır ve x 0 ile 255 arasında herhangi bir sayıdır.)',
'ufy4' : 'Varsayılan ayarların geri yüklenmesi 60 saniye kadar sürebilir. Bu işlem sırasında Yönlendiriciyi kapatmayın.',
'ufe11' : 'Yükseltme işleminin sonunda, Yönlendirici 180 saniye kadar komutlara yanıt vermeyebilir. Bu normal bir durumdur. Bu sırada Yönlendiriciyi kapatmayın veya yeniden başlatmayın.',
'ur5' : 'Yönlendiricinin yeniden başlatılması için 30 saniye kadar bekleyin. Sıfırlama işlemi tamamlanmadan önce Yönlendiriciyi kapatmayın.',
'ur6' : 'Yönlendiricinin yeniden başlatılması için 60 saniye kadar bekleyin. Sıfırlama işlemi tamamlanmadan önce Yönlendiriciyi kapatmayın.',
'usys83' : 'Yeni Şifre ve Yeni Şifreyi Onayla alanları eşleşmiyor',
'usys83_1' : 'Şifre ve yeni şifreyi onayla alanı eşleşmiyor.',
'usys85_1' : 'Yönetim şifresinin uzunluğu 3 ile 12 arasında olmalıdır.',
'usys88' : 'Şifre maksimum uzunluğuna ulaştı!',
'usys89' : 'AM',
'usys90' : 'PM',
'usys92' : 'Uzaktan erişim portu numarası 1 ila 65535 arasında olmalıdır.',
'usysipm' : 'IP numaralarının tümünü girmediniz veya girdiğiniz numaralardan bazıları geçersiz. IP adresi x.y.y.z şeklinde olmalıdır (burada x, 1 ile 223 arasında herhangi bir sayıdır, y 0 ile 255 ve z 1 ile 254 arasında herhangi bir sayıdır).',
'self_healing60' : 'Self Healing',
'chkwait' : 'Daha yeni donanım yazılımı aranıyor...',
'Europe' : 'Avrupa',
'Australia' : 'Avustralya & NZ',
'AsiaPacific' : 'Asya Pasifik',
'NorthAmerica' : 'Kuzey Amerika',
'vjs1' : 'Geçersiz IP adresi; çok uzun; Lütfen tekrar kontrol edin',
'vjs2' : 'Geçersiz IP adresi; eksik \'.\' , Lütfen tekrar kontrol edin!',
'vjs3' : 'Geçersiz IP adresi; \'.\' arasında eksik rakamlar var; Lütfen tekrar kontrol edin!',
'vjs4' : 'Geçersiz IP adresi; fazladan \'.\' , Lütfen tekrar kontrol edin!',
'vjs5' : 'Geçersiz IP adresi; \'.\' arasındaki rakamlar çok büyük; Lütfen tekrar kontrol edin!',
'vm1' : 'Geçersiz Karakter ',
'vm2' : ' Pozisyon: ',
'vm3' : 'Şu olmalıdır: ',
'vjs6' : 'Geçersiz yıl biçimi, lütfen (örn. 2002) olarak girin',
'vm4' : 'Geçersiz numara ',
'vjs8' : 'Geçersiz, 1970 ila 2037 arasında olmalıdır',
'vjs9' : 'Geçersiz ay biçimi, lütfen (örn. 01...12) olarak girin',
'vjs161' : ' şurada değil: ',
'vjs162' : ' ağ maske',
'vjs163' : 'İzin verilen DHCP aralığı ',
'vjs17' : 'İki farklı şifre yazdınız, lütfen tekrar kontrol edin!',
'vjs18' : 'Lütfen başlangıç port numarasını girin.',
'vjs19' : 'Başlangıç port numarası bitiş port numarasından küçük olmalıdır.',
'vjs23' : 'Geçersiz MAC adresi, yayın adresi.',
'vjs24' : 'Geçersiz MAC adresi, boş adres.',
'vjs25' : 'Geçersiz MAC adresi, çok noktaya yayın yapan adres.',
'vjs26' : 'Geçersiz başlangıç ve bitiş IP adresi, bitiş IP adresi başlangıç IP adresinden büyük olmalıdır.',
'vjs28' : 'Geçersiz ağ maskesi biçimi.',
'vjs29' : 'Geçersiz biçim, ağ maske burada 255.255.255.0 veya 255.255.255.128 veya 255.255.255.192 veya 255.255.255.224 veya 255.255.255.240 veya 255.255.255.248 veya 255.255.255.252 veya 255.255.255.254 olmalıdır',
'vjs30' : 'Geçersiz IP adresi, son numara 0 veya 255 olamaz',
'vjs31' : 'Geçersiz Lan IP adresi, ilk numara 127 olamaz',
'vjs32' : 'Geçersiz Lan IP adresi, 0.0.0.0 olamaz',
'vjs33' : 'Geçersiz Lan Ip adresi, 224.0.0.0\'dan küçük olmalıdır',
'vjs42' : 'Girdiğiniz alt ağ maskesi numaraları geçersiz.',
'vjs45' : 'IP Adresini Belirtin',
'vjs46' : 'geçersiz, lütfen önce bunu düzeltin!',
'wcc2' : 'Bağlantı türünüzü seçin:',
'wcc13' : 'L2TP',
'wcc14' : 'Bazı İSS\'ler, aboneleri merkez ofise bağlamak için L2TP protokolünü kullanırlar. Bunun için, İSS\'nizin sağlamış olması gereken bir kaç ek ayarı girmeniz gerekmektedir. Her şey doğru yapılmışsa, değişiklikleri kaydettiğinizde İnternet durum göstergesi yeşili gösterir.',
'wds4_1' : 'Birincil DNS adresi',
'wds7' : 'Otomatik DNS işlevini kullanmıyorsanız ISP\'niz tarafından sağlanan DNS ayarlarını girmelisiniz',
'wds8' : 'DNS değişiklikleri yapmak için önce %s Web Sitesi Filtreleri %s öğesini ziyaret edin ve "Filtre yok" öğesini seçin.',
'wmc6' : 'WAN MAC adresi LAN MAC adresiyle aynı olamaz. Lütfen başka bir tane seçin.',
'wdd9 ' : 'DDNS Hizmeti seçilmedi.\n',
'wdd10' : 'DDNS Hizmeti seçilmedi ve bu sayfadaki tüm veriler kaybedilecek, devam edilsin mi?',
'wm10b' : 'Sadece L2TP bağlantı yöntemi ile çalışan İSS\'ler ile kullanılır.',
'pm' : 'Hizmetiniz, girdiğiniz şifreyi doğrulayamadı. Lütfen şifrenizi doğru girdiğinizi onaylayın.',
'wpp17' : 'L2TP Hesabı',
'wpp18' : 'L2TP Şifresi',
'wpp19' : 'Lütfen L2TP Hesabınızı girin',
'wpp23' : 'IP Adresi Ataması',
'wpp24' : 'Statik IP Adresi Kullan',
'wpp25' : 'ISP\'den Dinamik Olarak Al',
'wppa7' : 'IP Adresim',
'wppa9' : 'Bağlantı kimliği (isteğe bağlı)',
'wppa13' : 'Lütfen PPTP Hesabınızı girin',
'wppa18' : 'Geçersiz Hizmet Adı.',
'ws2' : 'Statik IP ayarlarınızı girmek için, bilgilerinizi aşağıya yazarak "Değişiklikleri uygula" düğmesini tıklatın.',
'sm_1' : 'Girdiğiniz alt ağ maskesi geçersiz.',
'ws8' : 'Lütfen, aşağıdaki ekranda DNS adresi ayarlarınızı girin/doğrulayın',
'wt2' : 'Değişiklikleri Uygula düğmesinin tıklatılması yönlendiriciyi yeniden başlatacaktır. Yönlendirici yeniden başlatıldıktan sonra, aşağıda belirtilenleri yapmanız gerekir',
'wt3' : '1) Kablo Modem ve Belkin Yönlendiricisinin elektrik kablosunu prizden çekin',
'wt4' : '2) Kablo Modemin elektrik kablosunu geri takın, modemdeki tüm ışıkların yanıp sönmesi durana kadar bekleyin',
'wt5' : '3) Belkin Yönlendiricinin elektrik kablosunu geri takın',
'wt6' : 'Internet\'e başarıyla bağlandığınızı onaylamak için, Internet Explorer, Firefox ve Safari gibi bir internet tarayıcı açın ve web sayfalarını açabildiğinizden emin olun.',
'wlad2' : 'Etkinleştir / Devre Dışı Bırak',
'wlc2' : 'Yönlendiricinin kablosuz ayarlarını değiştirmek için, burada değişiklik yapın. Ayarları kaydetmek için "Değişiklikleri Uygula" düğmesini tıklatın.',
'wlcgb' : '802.11b+g',
'wlcg' : '802.11g',
'wlcb' : '802.11b',
'wlc20' : '20MHz',
'wlc22' : '20/40MHz',
'wlcoff' : 'KAPALI',
'wlcngb1' : '802.11b & 802.11g & 1x1 802.11n',
'wlcn1' : '1x1 802.11n',
'wlcngb2' : '802.11b & 802.11g & 802.11n',
'wlcn2' : '802.11n',
'wlcgn' : '802.11g+n',
'wlca' : '802.11a',
'wlcan' : '802.11a & 802.11n',
'wlc26' : 'Ağ adınızı gizlemek WPS\'yi devre dışı bırakır.',
'wlc27' : 'Güvenlik tipinizi WPS\'yi devre dışı bırakır.',
'wlc28' : 'WPS <A href=%s><B>kablosuz güvenlik tipiniz</B></A> nedeniyle devre dışı.',
'wlc29' : 'Ağ adınızı (SSID) gizlediğinizden WPS devre dışı.',
'wlc30' : 'Ağ adınızı (SSID) gizlemeniz ve <A href=%s><B>kablosuz güvenlik tipiniz</B></A> nedeniyle WPS devre dışı.',
'wlc31' : 'WPS\'yi açmak ağ adınızın (SSID) gizliliğini ortadan kaldırır.',
'wlc32' : 'WPS\'yi açmak güvenlik tipinizi WPA/WPA2\'ye değiştirir. Geçerli ağ şifreniz iyi çalışıyor.',
'wlc33' : 'WPS\'yi açmak ağ adınızın (SSID) gizliliğini ortadan kaldırır ve güvenlik tipinizi WPA/WPA2\'ye değiştirir. Geçerli ağ şifreniz iyi çalışıyor.',
'wle3a' : 'WPA-PSK',
'wle3b' : 'WPA2-PSK',
'wle3c' : 'WPA-PSK + WPA2-PSK',
'wps1' : 'Wi-Fi Protected Setup (Wi-Fi Korumalı Kurulum - WPS)',
'wps3' : 'Lütfen Kablosuz güvenliği yapılandırın',
'wps17' : 'WPS olmayan istemci aygıtları için, lütfen CD\'den Belkin Güvenlik Yardımını çalıştırın veya aygıtı aşağıdaki ayarlarla manuel olarak yapılandırın:',
'wps23' : 'WPA+WPA2-Personal (PSK)',
'wps25' : 'TKIP+AES',
'wps27' : 'Ağ Anahtarı (WEP):',
'wps28_1' : 'NULL',
'wle11' : 'Anahtar 1',
'wle12' : 'Anahtar 2',
'wle13' : 'Anahtar 3',
'wle14' : 'Anahtar 4',
'wpskerr2' : 'Anahtar 8 ile 63 karakter uzunluğunda olmalıdır ve boşluklar ve semboller ya da yalnızca 64 on altılık (0-F) basamaklar içerebilir!',
'wpskerr4' : 'Misafir Anahtarı girmelisiniz',
'wpskerr7' : 'Misafir Anahtarı 8 karakter olmalıdır',
'wpskerr8' : 'Misafir Anahtarı Ağ Anahtarı ile aynı olmamalıdır',
'wlguest1' : 'SSID, Misafir SSID\'si ile aynı olmamalıdır',
'wlguest2' : 'Misafir SSID\'si, SSID ile aynı olmamalıdır',
'rs_crc' : 'Geri yükleme başarısız < CRC >',
'rs_long' : 'Geri yükleme başarısız <too long>',
'rs_disposition' : 'Geri yükleme başarısız <No Content-Disposition>',
'rs_getpid' : 'Geri yükleme başarısız <Can\'t get pid!>',
'rs_unmatchpid' : 'Geri yükleme başarısız <Unmatched pid>',
'msg_ddns3 ' : 'Etki alanı adı alanları boş bırakılamaz.\n',
'msg_lan_dhcp1 ' : 'Ağ geçidinden bilgi isteme.',
'msg_lan_dhcp2 ' : 'Yapılandırma veritabanını güncelleme.',
'msg_wan_stat1 ' : 'IP adresi ',
'msg_wan_stat2 ' : ' ağda ',
'msg_wan_stat3 ' : ' yok.',
'msg_wls_chan2 ' : 'Misafir SSID\'si NULL olarak ayarlanamaz!\n',
'fw_not_interrupt ' : 'YÖNLENDİRİCİYİ DURDURMAYIN VEYA FİŞİNİ ÇEKMEYİN, aksi taktirde Yönlendirici arızalanabilir.',
'msg_invalid_char ' : 'Geçersiz karakter(ler) bulundu. Geçerli karakterler: 0-9, a-z, A-Z, `~!@#$%^&*()_-+=|\\{}[]:";\',.<>/?',
'msg_invalid_domain_char ' : 'Geçersiz Yerel Etki Alanı Adı'+': ~!@#$%^&*()=+{}[]|":;\\\'?/<>,`',
'msg_invalid_char_1 ' : 'Geçersiz karakter(ler) bulundu. Geçerli karakterler harfler ve sayılardır. Şu semboller geçerlidir: `~!@#$%^&*()_+[]{}\\|;:\'"<>/?.,',
'msg_hostIP_invalid ' : 'Ana bilgisayar IP adresi geçersizdir. Yönlendiricinin LANIP\'si olmamalıdır.\n',
'msg_dmzIP ' : 'DMZ IP Adresi.',
'msg_blank ' : ' boş bırakılamaz.\n',
'msg_space ' : 'Boşluklara veya aralara %s\n içinde izin verilmez.',
'msg_blank_in ' : 'Boşluklara %s\n içinde izin verilmez.',
'msg_allspaces ' : '%s yalnızca boşluklardan oluşamaz\n',
'msg_invalid ' : '%s içinde geçersiz karakter veya karakterler\nGeçerli karakterler: \n%s\n\n',
'msg_check_invalid ' : '%s geçersiz bir sayı içeriyor\n',
'msg_valid_range ' : '%s geçersiz. Geçerli aralık:%s ile %s\n',
'msg_invalid_mac ' : 'Geçersiz MAC adresi.\n',
'msg_multi_mac' : 'MAC adresi çok noktaya yayın yapan adres olamaz.\n',
'msg_confirmDefault ' : 'Uyarı!\nFabrika Varsayılan Ayarlarını Yüklemek tüm geçerli ayarları siler.\nBunu yapmak istediğinizden emin misiniz?',
'Allowed_Services' : 'İzin Verilen Hizmetler',
'Allowing_Url' : 'URL Adresine Göre Web Sitesine İzin Verme ',
'Allowing_Keyword' : 'Anahtar Kelimeye Göre Web Sitesine İzin Verme',
'wipv63' : 'Yönlendiricinize bağlı aygıtlar aslen IPv6 olan paketler kullanarak birbirleriyle iletişim kurabilirler. LAN üstündeki IPv6 paketleri otomatik olarak bütün LAN arayüzlerine (Ethernet bağlantı noktaları ve 2.4 Ghz ve 5 Ghz kablosuz ağlar) gönderilecektir.',
'wipv64' : 'IPv6 düzgeçişi etkinleştirildiğinde, IPv6 paketleri WAN arayüzüne de kopyalanacaktır.(Etkinleştirildiğinde, bu, internete doğrudan, güvenli olmayan bir bağlantı oluşturur.)',
'wipv65' : 'IPv6 destekleri konusunda bilgi almak için lütfen doğrudan ISS\'nız ile bağlantı kurun.',
'wipv67' : 'Internet IPv6',
'wipv68' : 'Ağınız IPv6 uyumlu.',
'wipv69' : 'Düzgeçiş',
'mf1' : 'Bu sayfalar belirli ortam trafiği tipleriyle sunulduğunda yönlendiricinizin hareketlerini ayarlamanızı sağlar.',
'mf2' : 'Farklı trafik tipleri için internet bağlantınızı otomatik olarak optimize eder.',
'mf3' : 'Yönlendiricinizin nasıl kullanıldığını görün.',
'mf8' : '%s üzerinde kayıtlı',
'mf10' : 'İndir',
'mf11' : 'Yükle',
'mf12' : 'Hız',
'mf15' : 'Ayarları Uygula',
'mf18' : '{0.1-%s} arasında bir numara girin.',
'mf20' : 'Yalnızca {0.1-%s} arasında.',
'mf26' : '%s üzerinde manuel kayıtlı',
'mf32' : 'veya',
'mf44' : 'Otomatik hız testi sonuçları internet trafiği veya diğer koşullara dayanarak %100 doğru olmayabilir. Sonuçları karşılaştırmak için, lütfen bir hız testi web sitesini ziyarete edin ya da internet hızlarınızı onaylamak için ISP\'niz ile iletişim kurun. Hız sonuçları tutarlı değilse, değerleri manuel olarak girebilirsiniz.',
'media_dlna18' : 'Başlıksız',
'media_dlna21' : 'Yönlendiricinizin indeksleyebileceğinden daha fazla ortama sahipsiniz bu nedenle ilk 12000 ögeye hizmet veriyoruz.',
'errSubnetMaskInvalid_2' : 'Alt ağ maskesi bir alt ağ maskesine benzemiyor. Lütfen değeri kontrol edin.',
'htWAN_L2TP' : 'L2TP Ayarları',
'htWAN_L2TPContent' : 'Bazı İSS\'ler, aboneleri merkez ofise bağlamak için L2TP protokolünü kullanırlar. Bunun için, İSS\'nizin sağlamış olması gereken bir kaç ek ayarı girmeniz gerekmektedir. Her şey doğru yapılmışsa, değişiklikleri kaydettiğinizde İnternet durum göstergesi yeşili gösterir.',
'p400t001_error' : 'Her şeyin daha hızlı bağlanmasını sağlayın.',
'p400t018_error' : 'Neden yeniden adlandırmalıyım?',
'p400t019_error' : 'Bu, diğer aygıtlardan ağ aradığınızda göreceğiniz şeydir. Benzersiz ağ adların bulması ve hatırlanması daha kolaydır. Birkaç kablosuz aygıtınız daha önce farklı bir yönlendiriciye bağlanmışsa, aynı ağ adı ve parolayı burada da kullanmak yenisini tanıtmamanız anlamına gelir ve otomatik olarak bağlanırlar. ',
'dhToggleBand2G' : '2.4Ghz Göster',
'772' : 'Değişiklikleri Uygula düğmesinin tıklatılması yönlendiriciyi yeniden başlatacaktır. Yönlendirici yeniden başlatıldıktan sonra, aşağıda belirtilenleri yapmanız gerekir',
'773' : '1) Kablo Modem ve Belkin Yönlendiricisinin elektrik kablosunu prizden çekin',
'774' : '2) Kablo Modemin elektrik kablosunu geri takın ve modemdeki tüm ışıkların yanıp sönmesi durana kadar bekleyin',
'dft001' : 'Bağlı değilsiniz gibi görünüyor.',
'dft002' : 'Desteğe ihtiyacınız ve bağlı bir cihazınız varsa, <strong>help.belkin.com</strong> adresini ziyaret edin.',
'gtNoSecCard     ' : 'Daha sonra başvurmak üzere lütfen ağ adınızı ve parolanızı bir yere yazın.',
'gtFWUpdateMobileError' : 'Aygıt yazılımı dosyaları şu anda mobil cihazlardan yüklenemiyor.',
'gtSettingsMobileError' : 'Ayarlar dosyaları şu anda mobil cihazlardan yüklenemiyor.',
'gtMoreFromInternet' : 'Daha fazlası için İnternet’e bağlanın',
'gtCantConnect' : 'İnternet\'e bağlanamıyoruz.',
'p802t004' : 'Cihazınızın kablosuz ağ menüsüne gidin',
'p803t004' : 'Cihazınızın kablosuz ağ menüsüne gidin',
'PIC-S1t001' : 'Tüm Cihazları Engelle',
'gtUnnamedDevice' : 'İsimsiz Cihazlar',
'gtIC' : 'İnternet Denetimi ',
'errDefaultGatewayEmpty' : 'Varsayılan ağ geçidi adresi boş olamaz.',
'errDefaultGatewayInvalid' : 'Varsayılan ağ geçidi adresi noktalarla ayrılmış dörder numaradan (0-255) oluşmalıdır. Lütfen değeri kontrol edin.',
'errDNSServerEmpty' : 'DNS sunucu adresi boş olamaz.',
'errDNSServerInvalid' : 'DNS sunucu adresi noktalarla ayrılmış dörder numaradan (0-255) oluşmalıdır. Lütfen değeri kontrol edin.',
'errIpAddressEmpty' : 'IP adresi boş olamaz.',
'errIpAddressInvalid' : 'IP adresi noktalarla ayrılmış dörder numaradan (0-255) oluşmalıdır. Lütfen değeri kontrol edin.',
'errorGenericCommitError' : 'Bir hata oldu.  Lütfen aşağıdan ayarları düzeltin ve yeniden deneyin.',
'errorSSIDEmpty' : 'Lütfen kablosuz ağınız için bir ad girin.',
'errorSSIDInvalidChars' : 'Ağ adınız yalnızca harfler, sayılar, noktalama işaretleri ve boşluklar içerebilir.',
'errorSSIDTooLong' : 'Ağ adınız 32 karakterden kısa olmalıdır.',
'errorWEPPasswordEmpty' : 'Lütfen kablosuz ağınızı güvenli kılmak için bir şifre girin.',
'errorWEPPasswordInvalidChars' : 'Ağ şifreniz yalnızca sayılar ve A\'dan F\'ye kadar olan harfleri içerebilir.',
'errorWEPPasswordInvalidLength' : 'Ağ şifreniz 10 ya da 26 karakter uzunluğunda olmalıdır.',
'errorWPAPasswordEmpty' : 'Lütfen kablosuz ağınızı güvenli kılmak için bir şifre girin.',
'errorWPAPasswordInvalidChars' : 'Ağ şifreniz yalnızca harfler, sayılar, noktalama işaretleri ve boşluklar içerebilir.',
'errorWPAPasswordInvalidLength' : 'Ağ şifreniz 8-63 karakter uzunluğunda olmalıdır.',
'errPasswordEmpty' : 'Lütfen şifrenizi girin.',
'errPasswordInvalid' : 'Kullanıcı adınız yalnızca harfler, sayılar, noktalama işaretleri ve boşluklar içerebilir.',
'errPasswordTooLong' : 'Şifreniz 64 karakterden kısa olmalıdır.',
'errServAddressEmpty' : 'Lütfen bir hizmet adresi girin.',
'errSubnetMaskEmpty' : 'Alt ağ maskesi boş olamaz.',
'errSubnetMaskInvalid' : 'Alt ağ maskesi noktalarla ayrılmış dörder numaradan (0-255) oluşmalıdır. Lütfen değeri kontrol edin.',
'errUsernameInvalid' : 'Kullanıcı adınız yalnızca harfler, sayılar, noktalama işaretleri ve boşluklar içerebilir.',
'errUsernameTooLong' : 'Kullanıcı adınız 64 karakterden kısa olmalıdır.',
'errVCIInvalid' : 'Lütfen 0 ila 65535 arasında bir sayı girin. Kullanmanız gereken doğru değeri ISS\'niz size söyleyebilir.',
'errVPIInvalid' : 'Lütfen 0 ila 255 arasında bir sayı girin. Kullanmanız gereken doğru değeri ISS\'niz size söyleyebilir.',
'p802t003' : 'Bazı ayarlar değiştiğinden kablosuz ağınızı yeniden seçmeniz gerekebilir:',
'p802t011' : 'Bazı ayarlar değiştiğinden kablosuz ağınızı yeniden seçmeniz gerekebilir:',
'dft003' : 'Yardıma İhtiyacınız mı Var?',
'dft004' : 'Bir sorunuz ya da destek ihtiyacınız mı var? Çevrimiçi yardım merkezimizden 24 saat yardım alabilirsiniz.<br><a href="http://www.belkin.com/support/" id="dfBelkinHelp">Belkin Yardım Merkezi &rarr;</a>',
'dhChangeSSID' : 'Değiştir &raquo;',
'dhPassLabel' : 'Parola:',
'dhPasswordObscured24' : 't********',
'dhShow' : 'Göster:',
'dhSSID24' : '{blahblah}',
'dhToggle24' : '2.4 Ghz',
'dhToggle5' : '5.0 Ghz',
'DownSpeed' : '32.6',
'errUsernameEmpty' : 'Lütfen kullanıcı adınızı girin.',
'gt10am' : '10:00',
'gt10pm' : '22:00',
'gt11am' : '11:00',
'gt11pm' : '23:00',
'gt1am' : '01:00',
'gt1amNextDay' : 'sonraki gün 01:00',
'gt1pm' : '13:00',
'gt24ghz' : '2.4 Ghz',
'gt24GKey' : '2.4GHz Anahtar',
'gt24GName' : '2.4 GHz SSID',
'gt24PSK' : 'Parola',
'gt24Sec' : 'WPA2',
'gt24SSID' : '12345678',
'gt2am' : '02:00',
'gt2pm' : '14:00',
'gt3am' : '03:00',
'gt3pm' : '15:00',
'gt4am' : '04:00',
'gt4pm' : '16:00',
'gt50ghz' : '5 Ghz',
'gt5am' : '05:00',
'gtGuestKey' : 'Konuk Anahtarı',
'gt5GMedia' : '5Ghz bandınız aynı adı taşıyor ancak sonuna ".media" eklendi.',
'gtGuestName' : 'Konuk SSID',
'gt5pm' : '17:00',
'gt6am' : '06:00',
'gt6pm' : '18:00',
'gt7am' : '07:00',
'gt7pm' : '19:00',
'gt8am' : '08:00',
'gt8pm' : '20:00',
'gt9am' : '09:00',
'gt9pm' : '21:00',
'gtAccessControl' : 'Ebeveyn İnternet Denetimi',
'gtAccessPoint' : 'Erişim Noktası Olarak Kullan',
'gtADSL' : 'ADSL',
'gtAdvSettings' : 'Gelişmiş Ayarlar',
'gtAllElseFails' : 'Eğer her şey başarısız olursa &nbsp;',
'gtAndroidConnect01' : 'Android telefonlar ve tabletler',
'gtAndroidConnect02' : 'Aygıtınız Ayarlar uygulamasında mevcut kablosuz ağların bir menüsünü verir.',
'gtAndroidConnect03' : '<strong>Ayarlar</strong> uygulamasını açın ve <strong>Kablosuz ve ağ</strong>\'ı seçin.',
'gtAndroidConnect04' : 'Buradan kullanılabilir ağların listesini görmek için <strong>Wi-Fi</strong> öğesini seçin.',
'gtAndroidConnect05' : 'Seç <strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong>. <!-- IF NOT OPEN --> <span tid="gtNotOpen">Sorulursa, ağ parolasını gir <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>.</span> <!-- /IF -->',
'gtAt' : 'üzerinde',
'gtAttenuation' : 'Zayıflama',
'gtAustralia' : 'Avustralya',
'gtBackToDashboard' : '&larr; Gösterge Paneline Dön',
'gtBelkin' : 'Belkin',
'gtBootLoader' : 'Önyükleyici',
'gtCantConnect' : 'ISS\'nize bağlanamıyoruz.',
'gtCantConnectNoResponse' : 'Internet\'e bağlanamıyoruz – ISS\'inizden cevap alınamadı.',
'gtChina' : 'Çin',
'gtClientList' : 'Bağlı Cihazlar',
'gtClose' : 'Kapat',
'gtConfig' : 'Yapılandır',
'gtConfigureRouter' : 'Yönlendiriciyi Yapılandır',
'gtConnDevices' : 'Bağlı Cihazlar',
'gtConnectingToNew' : 'Yeni ağınıza bağlanmak',
'gtConnectionDet' : 'Bağlantı Detayları',
'gtConnType' : 'Bağlantı Türü',
'gtContentFiltering' : 'Web Sitesi Filtresi',
'gtCopyright' : 'Telif Hakkı &copy; 2012. Belkin, Tüm Hakları Saklıdır.',
'gtCurrTimezone' : 'Avrupa/Helsinki {REPLACE THIS SPAN WITH DETECTED Belkin TZ ID description}',
'gtDashboard' : '&larr; Gösterge Paneli',
'gtDashTitle' : 'Belkin yönlendirici gösterge paneli',
'gtDataRate' : 'Veri Hızı',
'gtDDNS' : 'DDNS',
'gtDHCPList' : 'Bağlı Cihazlar',
'gtDHCPServer' : 'DHCP Server (DHCP Sunucusu)',
'gtDMZ' : 'DMZ',
'gtDNS' : 'DNS',
'gtDown' : 'Aşağı',
'gtDownloadSpeed' : 'Karşıdan Yükleme Hızı',
'gtEncap' : 'Kapsülleme:',
'gtFileInstallError' : 'Dosya kurulamadı – dosya türü yanlış olabilir',
'gtFileLoadError' : 'Dosya yüklenemedi – dosya türü yanlış olabilir',
'gtFirewall' : 'Güvenlik Duvarı',
'gtFirmware' : 'Donanım Yazılımı',
'gtFirmwareUpdate' : 'Donanım Yazılımı Güncellemesi',
'gtFrance' : 'Fransa',
'gtFreshest' : 'Donanım yazılımımızın en yeni sürümünü alıyoruz...',
'gtFrom' : 'Başlangıç:',
'gtFWUpdate' : 'Donanım Yazılımı Güncellemesi',
'gtFWUpToDate' : 'Donanım yazılımınız artık güncel.',
'gtGermany' : 'Almanya',
'gtGuestAccess' : 'Konuk Erişimi',
'gtGuestNetwork' : 'Konuk Ağı',
'gtHomeNetwork' : 'Ev Ağı',
'gtIfYouKnowConnection1' : 'Bağlantı türünüzü biliyorsanız <a href="700-SelectConnection.htm" id="ISP1a010">manuel olarak kurabilirsiniz &raquo;</a>',
'gtIfYouKnowConnection2' : 'Bağlantı türünüzü biliyorsanız <a href="700-SelectConnection.htm" id="ISP2a010">manuel olarak kurabilirsiniz &raquo;</a>',
'gtIfYouKnowConnection3' : 'Bağlantı türünüzü biliyorsanız <a href="700-SelectConnection.htm" id="ISP3a010">manuel olarak kurabilirsiniz &raquo;</a>',
'gtIfYouKnowConnection4' : 'Bağlantı türünüzü biliyorsanız <a href="700-SelectConnection.htm" id="ISP4a010">manuel olarak kurabilirsiniz &raquo;</a>',
'gtIfYouKnowConnection4a' : 'Bağlantı türünüzü biliyorsanız <a href="700-SelectConnection.htm" id="ISP4aa010">manuel olarak kurabilirsiniz &raquo;</a>',
'gtIfYouKnowConnection5' : 'Bağlantı türünüzü biliyorsanız <a href="700-SelectConnection.htm" id="ISP5a010">manuel olarak kurabilirsiniz &raquo;</a>',
'gtIfYouKnowConnection6' : 'Bağlantı türünüzü biliyorsanız <a href="700-SelectConnection.htm" id="ISP6a010">manuel olarak kurabilirsiniz &raquo;</a>',
'gtIfYouKnowConnection7' : 'Bağlantı türünüzü biliyorsanız <a href="700-SelectConnection.htm" id="ISP7a010">manuel olarak kurabilirsiniz &raquo;</a>',
'gtIntellistream' : 'Intellistream',
'gtInterleavePath' : 'Aralık Yolu',
'gtInternetSettings' : 'Internet Ayarları',
'gtIOSConnect01' : 'iPhone, iPad ve iPod touch',
'gtIOSConnect02' : 'Aygıtınız Ayarlar uygulamasında mevcut kablosuz ağların bir menüsünü verir.',
'gtIOSConnect03' : '<strong>Ayarlar</strong> uygulamasını açın ve <strong>Wi-Fi</strong>\'yi seçin.',
'gtIOSConnect04' : 'Ağ listesinden <strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong> seçeneğini seçin. <!-- IF NOT OPEN --> <span tid="gtNotOpen">Sorulursa, ağ parolasını gir <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>.</span> <!-- /IF -->',
'gtIPv6' : 'IPv6',
'gtIPV6Connection' : 'IPv6 Bağlantısı',
'gtISP' : 'ISP Bağlantı Tipi',
'gtJapan' : 'Japonya',
'gtLANIP' : 'LAN IP Adresi',
'gtLANMAC' : 'LAN/WLAN MAC',
'gtLANSettings' : 'LAN Ayarları',
'gtLANSubnet' : 'LAN Alt Ağ Maskesi',
'gtLLC' : 'LLC',
'gtLoadPrevSettings' : 'Önceki Ayarları Yükle',
'gtLocalNetwork' : 'Yerel Ağ',
'gtLocalSettings' : 'Yerel Ağ Ayarları',
'gtLocked' : 'kilitlendi',
'gtMACAddress' : 'MAC Adresi',
'gtMACAddressFiltering' : 'MAC Adresi Filtreleme',
'gtMacConnect01' : 'Mac OS X',
'gtMacConnect02' : 'Bilgisayarınız, menü çubuğunun sağ ucunda kullanılabilir kablosuz ağ menüsü sunar.',
'gtMacConnect03' : 'Kablosuz dalgalar simgesine tıklayın.',
'gtMacConnect04' : 'Ağ listesinden <strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong> seçeneğini seçin. <!-- IF NOT OPEN --> <span tid="gtNotOpen">Sorulursa, ağ parolasını gir <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>.</span> <!-- /IF -->',
'gtMaybeLater' : 'Belki Daha Sonra',
'gtMbitPerSec' : 'Mb/sn',
'gtMeaning' : 'Bu ne anlama geliyor?',
'gtMedia' : 'Ortam',
'gtMediaServer' : 'Medya Servis Sağlayıcısı',
'gtmidnight' : 'Gece',
'gtModel' : 'Model',
'gtName' : 'İsim',
'gtNeedMoreHelp' : 'Daha fazla yardım mı gerekiyor?',
'gtNetName' : 'Ağ Adı',
'gtNewFWAvailableModem' : 'Modeminiz için bazı yeni donanım yazılımlarımız var.',
'gtNewFWAvailableRouter' : 'Yönlendiriciniz için bazı yeni donanım yazılımlarımız var.',
'gtNewFWAvailableRouterAndModem' : 'Yönlendiriciniz ve modeminiz için bazı yeni donanım yazılımlarımız var.',
'gtNext' : 'İleri',
'gtNo' : 'Hayır',
'gtNoiseMargin' : 'Gürültü Marjı',
'gtNoMyNet' : 'Ağımı görmüyorum',
'gtNoon' : 'Öğlen',
'gtNoSecCard' : 'Daha sonra başvurmak üzere lütfen ağ adınızı ve parolanızı bir yere yazın.',
'gtNotOpen' : 'Sorulursa, ağ parolasını gir <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>.',
'gtNZ' : 'Yeni Zelanda',
'gtOffline' : 'Çevrimdışı',
'gtOnline' : 'Çevrimiçi',
'gtOptionalSoftware' : 'Opsiyonel Yazılım',
'gtOptionalSW' : 'Opsiyonel Yazılım',
'gtOptSW' : 'Opsiyonel Yazılım',
'gt-OR-' : '-VEYA-',
'gtOther' : '...',
'gtOutputPower' : 'Çıkış Gücü',
'gtParentalControls' : 'Ebeveyn Denetimleri',
'gtPass' : 'Parola:',
'gtPIC' : 'Ebeveyn İnternet Denetimi',
'gtPICOtherTimes' : 'Diğer tüm zamanlarda bu cihaz İnternet\'e bağlanamayacak.',
'gtPleaseCallISP' : 'Lütfen İnternet Servis Sağlayıcınızı arayın.',
'gtPortForwarding' : 'Port Forwarding (Port Yönlendirme)',
'gtPrint' : 'Yazdır',
'gtReadAllAboutIt' : 'Daha fazla yardım için:',
'gtReconnectingHell' : 'Yeniden bağlanıyor...',
'gtRegister' : 'Kaydol',
'gtRegistration' : 'Kayıt',
'gtRestartRouter' : 'Yönlendiriciyi Yeniden Başlat',
'gtRestoreDef' : 'Varsayılanları Geri Yükle',
'gtRestoreFactDefault' : 'Fabrika Ayarlarına Dön',
'gtRestoreFactDefaults' : 'Fabrika Ayarlarına Dön',
'gtRestoreSettigns' : 'Ayarları Geri Yükle',
'gtRetest' : 'Bağlantıyı yeniden test et',
'gtRouterDetails' : 'Yönlendirici Detayları',
'gtRouterInfo' : 'Yönlendirici Bilgisi',
'gtSave' : 'Kaydet',
'gtSaveCurrentSettings' : 'Geçerli Ayarları Kaydet',
'gtSaved' : 'Adsız Cihaz Kaydedildi',
'gtSaveRestore' : 'Ayarları Kaydet/Geri Yükle',
'gtSaveRestoreSettings' : 'Ayarları Kaydet/Geri Yükle',
'gtSaveSettings' : 'Ayarları Kaydet/Yedekle',
'gtSecLog' : 'Güvenlik Günlüğü',
'gtSecurity' : 'Güvenlik',
'gtSelectLang' : 'Dil seç:',
'gtSelfHeal' : 'Kendi Kendini İyileştirme',
'gtSelfHealing' : 'Kendi Kendini İyileştirme',
'gtSerialSupport' : 'Bir sonraki sayfada, destek verebilmek amacıyla yönlendiricinizin seri numarasını kaydedeceğiz.',
'gtShowtime' : 'Zamanı göster',
'gtSpeedTestResults' : 'Son denetleme: 1 gün önce 15:57 saatinde',
'gtStaticRouting' : 'Statik Yönlendirme',
'gtStatus' : 'Durum',
'gtSystemSettings' : 'Sistem Ayarları',
'gtTo' : 'Bitiş:',
'gtTraffStats' : 'Trafik İstatistikleri',
'gtTryAgain' : 'Tekrar dene',
'gtUnlocked' : 'kilit açıldı',
'gtUp' : 'Yukarı',
'gtUpdate' : 'güncelle',
'gtUpdateNoPowerModem' : 'Modeminizi yeni donanım yazılımı ile güncelliyoruz. Lütfen bu sırada güç kaynağını kapatmayın.',
'gtUpdateNoPowerRouter' : 'Yönlendiricinizi yeni donanım yazılımı ile güncelliyoruz. Lütfen bu sırada güç kaynağını kapatmayın.',
'gtUploadSpeed' : 'Karşıya Yükleme Hızı',
'gtUSA' : 'Amerika Birleşik Devletleri',
'gtUserName' : 'Kullanıcı Adı:',
'gtUtils' : 'Yardımcı Yazılımlar',
'gtVCI' : 'VCI:',
'gtVCMUX' : 'VC/MUX',
'gtVPI' : 'VPI:',
'gtWAN' : 'WAN Ayarları',
'gtWANDNS' : 'DNS Adresi',
'gtWANGateway' : 'WAN Ağ Geçidi',
'gtWANIP' : 'WAN IP Adresi',
'gtWANMAC' : 'WAN MAC Adresi',
'gtWANPingBlocking' : 'WAN Ping\'ini Engelleme',
'gtWANSubnet' : 'WAN Alt Ağ Maskesi',
'gtWebsiteFilter' : 'Web Sitesi Filtresi',
'gtWelcome' : 'Hoşgeldiniz',
'gtWiFi' : 'WiFi',
'gtWifiSettings' : 'WiFi ayarlarınız başarıyla değiştirildi.',
'gtWinConnect01' : 'Windows 7 veya 8',
'gtWinConnect02' : 'Bilgisayarınız, görev çubuğunun sağ ucunda kullanılabilir kablosuz ağ menüsü sunar.',
'gtWinConnect03' : 'Sinyal gücü çubuklarını gösteren simgeye sağ tıklayın.',
'gtWinConnect04' : 'Seç <strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong>. <!-- IF NOT OPEN --> <span tid="gtNotOpen">Sorulursa, ağ parolasını gir <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>.</span> <!-- /IF -->',
'gtWinConnect05' : 'Windows Vista ve Windows XP',
'gtWinConnect06' : 'Bilgisayarınız, görev çubuğunun sağ ucunda kullanılabilir kablosuz ağ menüsü sunar.',
'gtWinConnect07' : 'Kablosuz dalgaları olan bir bilgisayarı (XP) veya iki bilgisayarı (Vista) gösteren simgeye sağ tıklayın.',
'gtWinConnect08' : 'Çıkan menüden <strong>Kullanılabilir Kablosuz Ağları Görüntüle</strong> (XP) veya <strong>Bir ağa bağlan</strong> (Vista) öğesini seçin.',
'gtWinConnect09' : 'Seç <strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong>. <!-- IF NOT OPEN --> <span tid="gtNotOpen">Sorulursa, ağ parolasını gir <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>.</span> <!-- /IF -->',
'gtWireless' : 'Kablosuz',
'gtWiring' : 'Kablo bağlantısı',
'gtWPSShort' : 'WPS',
'gtWPS' : 'Wi-Fi Korumalı Kurulum',
'gtYes' : 'Evet',
'htFWUpdate' : 'Donanım yazılımı güncellemeleri nelerdir?',
'htFWUpdateContent' : 'Zaman zaman Belkin, yönlendiricinin çalışan programlamasının yeni sürümlerini çıkartabilir. Bu güncellemeler yönlendiriciniz için iyileştirmeler ve düzeltmeler içerir.<br><br>NOT: Lütfen yeni bir donanım yazılımı güncellemesi yapmadan önce geçerli ayarlarınızı yedekleyin.',
'htParent' : 'Web sitesi filtresi nedir?',
'htPIC' : 'İnternet Denetiminiz',
'htPICBlocked' : 'İnternet askıya alındı',
'htPICBlockedContent' : 'İnternet bağlantınızı tüm cihazlara geri yüklemeye hazır olduğunuzda lütfen erişimi yenileyin.',
'htPICContent' : 'İnternet denetiminiz ile her bir cihaz için internete erişimi engelleme süresini artık özelleştirebilirsiniz.',
'htSaveRestore' : 'Ayarları kaydetmek, yüklemek veya geri yüklemek ne anlama geliyor?',
'htSaveRestoreContent' : 'Yönlendiriciniz ağ adı, parola vb. ayarları hatırlar. Bu ayarlar (yedek olarak) kaydedilebilir ve daha sonra yönlendiricinize yüklenebilir. Yönlendirici ayarları ayrıca orijinal fabrika ayarlarına geri yüklenebilir.',
'htSaveRestoreContentMobile' : '<br>* iPhone, iPad ve iPod Touch\'ta ayarlar dosyası kaydedilip yüklenemez. Ayarlar dosyasını kaydetmek ve yüklemek için dizüstü bilgisayar gibi farklı bir cihaz kullanın.',
'ISP1t003' : 'Onlara yönlendiricinizin bir IP adresi alabildiğini ancak DNS\'nin çalışmadığını söyleyin.',
'ISP1t007' : 'DNS, "belkin.com" gibi adları, bilgisayarların internette gezinmek için kullandığı sayısal adreslere (IP adresleri) dönüştürür. Yönlendiricinizin bir IP adresi var, bu da internete bağlı olduğu anlamına geliyor ancak DNS çalışmıyor, bu sebeple gezinemiyorsunuz, bunlar, ISS\'nızda bir sorun olduğunu gösteriyor.  <span class="nub"></span>',
'ISP2t003' : 'Onlara yönlendiricinizin bir IP adresi alabildiğini ve DNS\'nin çalıştığını ancak kimseyi pingleyemediğimizi söyleyin.',
'ISP2t007' : 'İnternet üstünde diğer makineleri "pingleyerek" onlarla iletişim kurup kuramadığımızı test ederiz. DNS, "belkin.com" gibi adları, bilgisayarların internette gezinmek için kullandığı sayısal adreslere (IP adresleri) dönüştürür. Yönlendiricinizin bir IP adresi var, bu internete bağlı olduğu anlamına geliyor ve ISS\'niz tarafından verilen DNS çalışıyor ancak pingleyemiyoruz. Bu, ISS\'nizde bir sorun olduğunu düşündürüyor. <span class="nub"></span>',
'ISP3t004' : 'Onlara kullanıcı adınız ve şifrenizin kabul edildiğini ancak hala bir internet bağlantınızın olmadığını söyleyin.',
'ISP3t007' : 'İnternet üstünde diğer makineleri "pingleyerek" onlarla iletişim kurup kuramadığımızı test ederiz. ISS\'niz kullanıcı adınız ve şifrenizi kabul etti ancak pingleyemiyoruz, o yüzden gezinti yapamıyorsunuz. Bu, ISS\'nizde bir sorun olduğunu düşündürüyor.  <span class="nub"></span>',
'ISP4t003' : 'Onlara birkaç denemeden sonra kullanıcı adınız ve şifrenizin kabul edilmediğini söyleyin.',
'ISP4t007' : 'İnternet bağlantınız bir kullanıcı adı ve şifre gerektiriyor ancak ISS\'niz girdiğiniz bilgileri kabul etmedi. Doğru bilgilere sahip olmanızı sağlayacaklardır.  <span class="nub"></span>',
'ISP5t003' : 'Onlara Dinamik bir bağlantı seçtiğinizi ancak bir IP adresi alamadığınızı söyleyin.',
'ISP5t007' : 'IP adresi, internet üstünde yönlendiriciler ya da başka aygıtları tanımlar. ISS\'niz yönlendiricinize bir adres vermiyor ve bir IP adresi olmadan bağlantı kuramazsınız. Bu, ISS\'nizde bir sorun olduğunu ya da bağlantınızın Dinamik bir bağlantı olmadığını düşündürüyor.  <span class="nub"></span>',
'ISP6t003' : 'Onlara Statik bir bağlantı seçtiğinizi ancak internete bağlanamadığınızı söyleyin.',
'ISP6t007' : 'Statik bağlantıyı, ISS\'niz size kullanmanız için bir ya da daha fazla belirli IP adresi atadığında kullanırız.  <span class="nub"></span>',
'ISP7t003' : 'Onlara VPI/VCI ayarlarınızın çalışmadığını söyleyin ve size doğru numaraları vermelerini isteyin.',
'ISP7t007' : 'VPI ve VCI yönlendiricinize ISS\'iniz ile iletişim kurmak için hangi yolu kullanacağını söyler. Doğru ayarları algılayamadık. <span class="nub"></span>',
'Network24Passkey' : '{REPLACE WITH 2.4 PASSWORD}',
'Network24SSID' : '{REPLACE WITH 2.4 SSID}',
'p100t002' : 'İnternete bağlanalım.',
'p100t003' : 'Yeni yönlendiricinize bağlandınız, şimdi onu İnternet Servis Sağlayıcınızla bağlantılandıralım.',
'p100t004' : 'İnternete bağlanalım.',
'p100t005' : 'Yeni yönlendiricinize bağlandınız, şimdi onu İnternet Servis Sağlayıcınızla bağlantılandıralım.',
'p100t007' : 'Bağlantımı algıla',
'p100t008' : 'Eğer bağlantı türünüzden eminseniz, <a href="700-SelectConnection.htm" id="p100a009" tid="p100t009">Manuel olarak kurun &raquo;</a>veya direkt olarak <a href="000-Dashboard.htm" id="p100a010" tid="p100t010">gösterge paneline gidin &raquo;</a>.',
'p100t009' : 'manuel olarak kurun &raquo;',
'p100t010' : 'gösterge paneli &raquo;',
'p100t013' : 'Şu anda, &nbsp içindeki sayfaları gösteriyoruz;',
'p100t024' : 'Neredeyse otomatik bir kurulum',
'p100t025' : 'Önce otomatik olarak kablo bağlantınızı kontrol edeceğiz ve İnternet Servis Sağlayıcınızla (ISS) aranızdaki bağlantı türünü algılayacağız. Size yapacak çok az şey kalıyor. Daha sonra yönlendirici yazılımınızın güncel olduğundan emin olacağız. <span class="nub"></span>',
'p1010MRt001' : 'Modeminizle iletişim kurmakta güçlük çekiyoruz.',
'p1010MRt002' : 'Bir kablo bağlantısı sorunu olduğunu düşünüyoruz.',
'p1010MRt003' : 'Bunu onarmak için yapabilecekleriniz:',
'p1010MRt004' : 'Modem-yönlendiricinizin Internet olan bir telefon fişine bağlı olduğundan emin olun. Modem-yönlendiricinizdeki ADSL bağlantı noktasını (üstteki gri bağlantı noktası) telefon fişine bağlayan bir ağ kablosu olmalı.',
'p1010MRt005' : 'Modeminizin açık olduğundan emin olun. Güç adaptörü her iki uçta da takılı olmalı ve modem üstündeki ışıklardan biri ya da daha fazlası yanıyor olmalıdır.',
'p1010MRt006' : 'Modeminizle yönlendiricinizin sarı bağlantı noktasını bağlayan bir ağ kablosu olmalıdır. Bu kablo modeminizden yönlendiricinize sinyal taşır, o olmadan çevrimiçi olamazsınız.',
'p1010MRt007' : 'Eğer her ikisi de olması gerektiği gibiyse modeminizi güç kaynağından çıkarmak, on beş saniye beklemek ve yeniden takmak yoluyla yeniden başlatmayı deneyebilirsiniz. Modeminizin pili varsa modemin sıfırlama düğmesini bulmanız ve onu kullanmanız gerekebilir.',
'p1010MRt008' : 'Bu bağlantılar şöyle görünmelidir:',
'p1010MRt009' : 'Siz kontrol ederken biz de bağlantı durumunu izlemeye devam edeceğiz.',
'p1010MRt010' : 'En sık görülen kablo bağlantısı sorunu modem ile yönlendirici arasındadır. Kablonun her iki ucunu da kontrol etmek önemlidir. Bir ucu yeni yönlendiricinizdeki sarı bağlantı noktasına, diğer ucu ise modeminizdeki benzer bir bağlantı noktasına bağlı olmalıdır. Farklı modem üreticileri bağlantı noktalarını farklı adlandırırlar; onu "veri", "LAN", "ağ" ya da "Ethernet" adları altında bulabilirsiniz.  <span class="nub"></span>',
'p1020t001' : 'İnternet Servis Sağlayıcınızla iletişim kurmakta güçlük çekiyoruz.',
'p1020t002' : 'Lütfen modem-yönlendiricinizi yeniden başlatın.',
'p1020t003' : 'Bir Internet bağlantısı alamıyoruz bu yüzden modem-yönlendiricinizi yeniden başlatmayı deneyelim.',
'p1020t004' : 'Modem-yönlendiricinizi kapatın. Bu genellikle modem-yönlendirici üzerindeki bir anahtarı açıp kapamak ya da basitçe fişi çekmek suretiyle gerçekleştirilir.',
'p1020t005' : '15 saniye bekleyin.',
'p1020t006' : 'Modem-yönlendiricinizi tekrar açın.',
'p1020t007' : 'Birkaç saniye sonra ışıkları yanacak ve ISS\'niz ile bağlantı kuracaktır.',
'p1020t008' : 'Eğer bu problem devam ederse, hesabınızdaki sorunu gidermek için lütfen ISS\'niz ile bağlantı kurun.',
'p1020t009' : 'Modem-yönlendiricinizin kapatılıp açılmasını izleyeceğiz ve sonra otomatik olarak devam edeceğiz.',
'p1020t010' : 'Modemi neden yeniden başlatmalı?',
'p1020t011' : 'Bazı modemlerin, yeni bir yönlendirici ya da bilinmeyen bir bilgisayarla iletişim kurmadan önce yeniden başlatılmaları gerekir. Ve İnternet Servis Sağlayıcınızda geçici bir kesinti olursa, modem bağlantınızı beklenmedik biçimde kesebilir. Modeminizi görebiliyoruz ancak interneti algılayamıyoruz, o yüzden onu hızlı biçimde yeniden başlatmak büyük ihtimalle işe yarayacaktır. <span class="nub"></span>',
'p1100t001' : 'Bir donanım yazılımı güncellemesi mevcut!',
'p1100t002' : 'Her şeyin düzgün biçimde çalışmasını güvenceye almak için yönlendiricinizi en yeni donanım yazılımı ile yükseltmenizi öneririz.',
'p1100t003' : 'Bana yenilikleri göster',
'p1201t001' : 'Gösterge panelini bir şifre ile kilitleyin.',
'p1201t002' : 'Lütfen gösterge panelini kilitlemek için bir şifre girin:',
'p1201t003' : 'Lütfen bir şifre girin.',
'gtSetPassword' : 'Set Password (Parolayı Ayarla)',
'p1201t005' : 'İptal',
'p1210t001' : 'Gösterge paneli kiltlendi.',
'p1210t002' : 'Lütfen şifrenizi girin:',
'p1210t003' : 'Lütfen şifrenizi girin.',
'p1210t004' : 'Şifreniz doğru değil.',
'p1210t005' : 'Beni içeri al!',
'p1300t001' : 'Biraz daha canlılık.',
'p1300t002' : 'Intellistream\'i kurarak internet bağlantınızdan daha fazla performans alabilirsiniz. Bu bir hız testi yapmayı gerektirir.',
'p1300t003' : 'Intellistream\'i Kur',
'p1300t004' : 'Belki Daha Sonra',
'p1302t001' : 'Donanım yazılımınız güncel.',
'p1316t001' : 'Güncellenen donanım yazılımının kurulumu başarısız oldu - lütfen "Yeni Donanım Yazılımını Kontrol Et"e tıklayarak yeniden deneyin.',
'p1318t001' : 'Yükseltme dosyası bu aygıt için doğru tür veya sürüme sahip değil. Yükseltme başarısız. Lütfen doğru dosyayı edinerek tekrar deneyin',
'p1333t001' : 'Donanım yazılımınız başarıyla güncellendi.',
'p1400t001' : 'USB bağlantı noktanızdan tam olarak yararlanın.',
'p1400t002' : 'Kurduğunuzda, yönlendiriciniz üstündeki USB bağlantı noktasından azami ölçüde faydalanmanıza yardımcı olacak bazı opsiyonel yazılımlar var.',
'p1400t003' : 'Opsiyonel Yazılımı Göster',
'p1500t001' : 'Buradasınız.',
'p1500t002' : 'Görünüşe göre <span tid="gtCurrTimezone">Avrupa/Helsinki {REPLACE THIS SPAN WITH DETECTED Belkin TZ ID description}</span> zaman dilimindesiniz. Doğru mu?',
'p1500t003' : 'Doğru',
'p1500t004' : 'Seçmeme izin ver',
'p200t001' : 'Bağlantı kuruluyor...',
'p200t002' : ' Yönlendiricinizin fiziksel bağlantılarını kontrol ediyoruz.',
'p202At001' : 'Hala çalışıyor...',
'p202At002' : ' İnternet Servis Sağlayıcınızın bağlantı türünü algılıyoruz. Bu birkaç dakika sürebilir.',
'p202Bt001' : 'Hala çalışıyor...',
'p202Bt002' : ' İnternet Servis Sağlayıcınızın şifre isteyip istemediği kontrol ediliyor. Bu birkaç dakika sürebilir.',
'p202Ct001' : 'Hala çalışıyor...',
'p202Ct002' : ' Şimdi bağlantı kontrol ediliyor.',
'p202t001' : 'Bağlantı kuruluyor...',
'p202t002' : ' İnternet Servis Sağlayıcınızın bağlantı türünü algılıyoruz.',
'p208t001' : 'VPI/VCI numaraları elinizin altında mı?',
'p208t002' : 'Online olabilmek için VPI ve VCI numaralarını girmeniz gerekir. Bu numaralar, ISS\'nizin kullanmanızı istediği iletişim yolunu tanımlar.',
'p208t003' : 'İnternet Servis Sağlayıcınızın size bu numaraları vermiş olması gerekir. Eğer onları bulamıyorsanız, lütfen ISS\'niz ile bağlantı kurun.',
'p208t006' : '0',
'p208t007' : '0',
'p208t009' : 'Bağlantımı dene',
'p208t011' : 'VPI ve VCI',
'p208t012' : 'Sanal Yol Tanımlayıcı ve Sanal Devre Tanımlayıcı, yönlendiricinize ISS\'niz ile iletişim kurabilmek için hangi yolun kullanılması gerektiğini söyler. Sizden yardım istemeden önce otomatik olarak denediğimiz birkaç genel ayar bulunuyor.<span class="nub"></span>',
'p209t001' : 'Bu ayarlarda bir sorun var.',
'p209t002' : 'ISS\'niz bu VPI/VCI numaralarını kabul etmedi. Bir kez daha?',
'p210CXt001' : 'Bir PPPoE bağlantınız var.',
'p210CXt002' : 'Bu bağlantı, internete erişmek için bir kullanıcı adı ve şifre gerektirir.',
'p210CXt004' : '<strong>İnternet Servis Sağlayıcınızın size bu bilgileri vermiş olması gerekir. Eğer onları bulamıyorsanız, lütfen ISS\'niz ile bağlantı kurun.</strong>',
'p210CXt006' : '0',
'p210CXt007' : '0',
'p210CXt016' : 'Bağlantımı dene',
'p210CXt017' : 'PPPoE',
'p210CXt018' : 'Ethernet Üzerinden Noktadan Noktaya Protokolü yönlendiriciniz ile ISS arasında güvenli bir bağlantı oluşturur. Bu genellikle telefon şirketlerince kullanılır. <span class="nub"></span>',
'p210DXt001' : 'Bir PPPoA bağlantınız var.',
'p210DXt002' : 'Bu bağlantı, internete erişmek için bir kullanıcı adı ve şifre gerektirir.',
'p210DXt004' : '<strong>İnternet Servis Sağlayıcınızın size bu bilgileri vermiş olması gerekir. Eğer onları bulamıyorsanız, lütfen ISS\'niz ile bağlantı kurun.</strong>',
'p210DXt006' : '0',
'p210DXt007' : '0',
'p210DXt016' : 'Bağlantımı dene',
'p210DXt017' : 'PPPoA',
'p210DXt018' : 'ATM Üzerinden Noktadan Noktaya Protokolü, yönlendiriciniz ile ISS arasında güvenli bir bağlantı oluşturur. Bu, genellikle telefon şirketlerince kullanılır.<span class="nub"></span>',
'p210t001' : 'Bir PPPoE DSL bağlantınız var.',
'p210t002' : 'İnternete erişmek için bir kullanıcı adı ve şifreye ihtiyacınız olacak.',
'p210t003' : '<strong>İnternet Servis Sağlayıcınızın (ISS) size bu bilgiyi vermiş olması gerekir. Eğer onları bulamıyorsanız, lütfen ISS\'niz ile bağlantı kurun.</strong>',
'p210t005' : 'ISS Kullanıcı Adı:',
'p210t009' : 'Bağlantımı dene',
'p210t010' : 'PPPoE',
'p210t011' : 'Ethernet Üzerinden Noktadan Noktaya Protokolü yönlendiriciniz ile ISS arasında güvenli bir bağlantı oluşturur. Bu genellikle telefon şirketlerince kullanılır. <span class="nub"></span>',
'p211t001' : 'Bağlantı kuruluyor...',
'p211t002' : ' İnternet Servis Sağlayıcınızda oturum açmaya çalışıyoruz. Bu, iki dakika ya da daha fazla sürebilir.',
'p212DXt001' : 'PPPoA ayarlarınızda bir sorun var.',
'p212DXt002' : 'Kullanıcı adınız, şifreniz ya da her ikisi de yanlış. Lütfen tekrar deneyin. Eğer doğru bilgileri bulamıyorsanız, ISS\'niz ile bağlantı kurun.',
'p212t001' : 'PPPoE ayarlarınızda bir sorun var.',
'p212t002' : 'Kullanıcı adınız, şifreniz ya da her ikisi de yanlış. Lütfen tekrar deneyin. Eğer doğru bilgileri bulamıyorsanız, ISS\'niz ile bağlantı kurun.',
'p220t002' : 'Bağlantıyı tamamlamak ve Internet\'e erişmek için lütfen kullanıcı adı, şifre ve servis adresi girin.',
'p220t003' : '<strong>İnternet Servis Sağlayıcınızın size bu bilgileri vermiş olması gerekir. Eğer onları bulamıyorsanız, lütfen ISS\'niz ile bağlantı kurun.</strong>',
'p220t006' : 'ISS Kullanıcı Adı:',
'p220t007' : 'Servis Adresi:',
'p220t010' : 'Bağlantımı dene',
'p220t013' : 'L2TP veya PPTP bağlantınız var.',
'p220t014' : 'Veya manuel olarak bağlantımı seçin &raquo;',
'p220t015' : 'L2TP ve PPTP',
'p220t016' : 'Hem L2TP (2. Katman Tünel Protokolü) hem de PPTP (Noktadan Noktaya Tünel Protokolü) sizinle ISS\'niz arasında özel ve şifrelenmiş bir bağlantı oluşturabilir.<span class="nub"></span>',
'p221t001' : 'Bağlantı kuruluyor...',
'p221t002' : ' İnternet Servis Sağlayıcınızda oturum açmaya çalışıyoruz. Bu 2 dakika kadar sürebilir.',
'p222t002' : 'Kullanıcı adınız, şifreniz ya da her ikisi de yanlış. Lütfen tekrar deneyin. Eğer doğru bilgileri bulamıyorsanız, ISS\'niz ile bağlantı kurun.',
'p222t004' : 'Ayarlarınızda bir sorun var.',
'p2300t001' : 'Kurulu Donanım Yazılımı Sürümünüz:',
'p2300t002' : 'Donanım Yazılımını Yerel Olarak Kayıtlı Dosyadan Güncelle:',
'p2300t006' : '{{file}} kurulumunu yapmak istediğinizden emin misiniz?',
'p2300t010' : 'Yeni Donanım Yazılımı Sürümünü Kontrol Et',
'p2400t006' : 'Mevcut ayarlarınız değiştirilecek. {{file}} yüklemesini yapmak istediğinizden emin misiniz?',
'p2410t001' : 'Fabrika Ayarlarına Dönmek istediğinizden emin misiniz?',
'p2410t002' : '\'Evet\'e tıkladığınızda, isim ve parola gibi yönlendirici ayarlarınız silinerek orijinal fabrika varsayılanları ile değiştirilecek.',
'p300t005' : 'Artık çevrimiçisiniz.',
'p310t001' : 'Bir güncelleme mevcut!',
'p310t001x' : 'Bu güncellemenin (v2.1.0c) içeriği:',
'p310t002' : 'Yeni donanım yazılımını yüklemek için lütfen lisans sözleşmesini okuyun ve kabul edin.',
'p310t003' : 'Lisans Sözleşmesi',
'p310t004' : 'Lisans sözleşmesini kabul ediyorum.',
'p310t005' : 'Güncellemeyi yükle',
'p310t006' : 'Donanım yazılımı nedir?',
'p310t007' : 'Donanım yazılımı, yönlendiricinizi çalıştıran yazılımdır. Yönlendiricinizin performansını artırmak için donanım yazılımını güncelliyoruz, o yüzden en yenisine sahip olduğunuzdan emin olmanız faydalıdır.  <span class="nub"></span>',
'p315t001' : 'Yeni donanım yazılımı yükleniyor.',
'p315t002' : 'Yükleme ilerlemesi:',
'p315t003' : 'Donanım yazılımı nedir?',
'p315t004' : 'Donanım yazılımı, yönlendiricinizi çalıştıran yazılımdır. Yönlendiricinizin performansını artırmak için donanım yazılımını güncelliyoruz, o yüzden en yenisine sahip olduğunuzdan emin olmanız faydalıdır.  <span class="nub"></span>',
'p320t001' : 'Yeni donanım yazılımı kuruluyor.',
'p320t002' : 'Yeni donanım yazılımı uygulandıktan sonra kurulumu tamamlamak için yönlendiricinizi yeniden başlatacağız.',
'p320t004' : 'Donanım yazılımı nedir?',
'p320t005' : 'Donanım yazılımı, yönlendiricinizi çalıştıran yazılımdır. Yönlendiricinizin performansını artırmak için donanım yazılımını güncelliyoruz, o yüzden en yenisine sahip olduğunuzdan emin olmanız faydalıdır.  <span class="nub"></span>',
'p320t006' : 'Bu yaklaşık üç dakika sürecek. Güncelleme ilerlemesi:',
'p320t010' : 'Yeni donanım yazılımı uygulandıktan sonra kurulumu tamamlamak için modeminizi yeniden başlatacağız.',
'p321t001' : 'Yönlendiricinizin yeniden başlatılması',
'p321t002' : 'Modeminizin yeniden başlatılması',
'p321t003' : 'Şimdi donanım yazılımı kurulduğuna göre onu resmi kılmak için yönlendiricinizi yeniden başlatmamız gerekiyor.',
'p321t004' : 'Yeniden başlatılıyor:',
'p321t005' : 'Donanım yazılımı güncellemeleri',
'p321t006' : 'Donanım yazılımı, ağ ve güvenlik protokollerini uygulamak için kullanılan yazılımdır. Güncellemeler, güvenilirliği ve işlevselliği artırır, o yüzden en yenisine sahip olmanız akıllıcadır. <span class="nub"></span>',
'p321t010' : 'Şimdi donanım yazılımı kurulduğuna göre onu resmi kılmak için modeminizi yeniden başlatmamız gerekiyor.',
'p330t001' : 'Bağlantı hızınız kontrol ediliyor...',
'p330t002' : 'Kısa sürecek bir hız testi yönlendiricinizin internet bağlantınızı optimize etmesine yardımcı olacak. Bu bir ya da iki dakika sürer.',
'p331t001' : 'Donanım yazılımınız güncel.',
'p332t001' : 'Donanım yazılımı güncellemesini daha sonra tekrar deneyeceğiz.',
'p333t001' : 'Donanım yazılımınız güncellenmiş.',
'p334t001' : 'Hız testi sonuçlarınız!',
'p334t002' : 'İşte öğrendiklerimiz:',
'p334t003' : 'Karşıdan Yükleme Hızı',
'p334t004' : 'Mb/sn',
'p334t005' : 'Karşıya Yükleme Hızı',
'p334t006' : 'Mb/sn',
'p340t002' : ' Devam edebilmek için yönlendiricinize yeniden bağlanıyoruz.',
'p341t001' : 'Lütfen yönlendiricinizi yeniden başlatın',
'p341t002' : 'Yönlendiricinizle yeniden bağlantı kurmakta sorun yaşıyoruz. Hızlı bir yeniden başlatmanın yardımı olacaktır.',
'p341t003' : 'Yönlendiricinizin güç kaynağını fişinden çıkarın, birkaç saniye bekleyin ve yeniden takın. Yönlendiricinizde mavi bir ışık sürekli yandığında bağlanmaya hazır oluruz.',
'p341t003w' : 'Yönlendiricinizi fişinden çıkarın, birkaç saniye bekleyin ve yeniden takın. Yönlendiricinizde mavi bir ışık sürekli yandığında bağlanmaya hazır oluruz.',
'p341t004' : ' Siz bunu yaparken biz yönlendiricinizin geri gelmesini bekleyeceğiz.',
'p342t001' : ' Devam edebilmek için yönlendiricinize yeniden bağlanıyoruz.',
'p342t002' : 'Bu sürece yardımcı olmak için kablosuz ağınızı <span tid="Network24SSID">({REPLACE WITH 2.4 SSID})</span> kablosuz ağlar listesinden yeniden seçmeniz gerekebilir.',
'p343t002' : ' Devam etmek için yönlendiricinize yeniden bağlanıyoruz.',
'p343t003' : 'Devam etmek için kablosuz ağınızı <span tid="Network24SSID">({REPLACE WITH 2.4 SSID})</span> yeniden seçmeniz gerekebilir.',
'p344t001' : 'Lütfen yönlendiricinizi yeniden başlatın.',
'p344t002' : 'Yönlendiricinizle yeniden bağlantı kurmakta sorun yaşıyoruz. Hızlı bir yeniden başlatmanın yardımı olacaktır.',
'p344t003' : 'Yönlendiricinizin güç kaynağını fişinden çıkarın, 15 saniye bekleyin ve yeniden takın. Yönlendiricinizde mavi bir ışık sürekli yandığında yeniden bağlanacağız.',
'p344t003w' : 'Yönlendiricinizi fişinden çıkarın, 15 saniye bekleyin ve yeniden takın. Yönlendiricinizde mavi bir ışık sürekli yandığında yeniden bağlanacağız.',
'p344t004' : ' Siz bunu yaparken biz yönlendiricinizin geri gelmesini bekleyeceğiz.',
'p400f010' : 'WPA2',
'p400f011' : 'WPA/WPA2',
'p400f012' : 'WEP',
'p400f013' : 'Aç',
'p400t001' : 'Her şeyi daha hızlı bağlayın.',
'p400t002' : 'Yeni yönlendiricinize eskisiyle aynı ağ adını ve şifresini vermek, bütün aygıtlarınızın hemen bağlanmasına yardımcı olacaktır.',
'p400t004' : 'Ağ Adı:',
'p400t008' : 'Güvenlik Türü: <em class="hide-on-phones">(WPA2 en güvenlisidir.)</em>',
'p400t014' : '5Ghz bandınız aynı adı taşıyacak ancak sonuna .media eklenmiş olacaktır.',
'p400t015' : 'İsterseniz bunu daha sonra değiştirebilirsiniz.',
'p400t017' : 'Kaydet ve Devam Et',
'p400t018' : 'Ağımı neden yeniden adlandırmalıyım?',
'p400t019' : 'Aynı ağ adı ve şifresini kullanırsanız, eski yönlendiricinize daha önce bağlanan bütün kablosuz aygıtlar, yeni yönlendiricinize otomatik olarak bağlanacaklar. Ayrıca aygıtlar üstünde ağınızı aradığınızda benzersiz bir adı bulmak daha kolaydır. <span class="nub"></span>',
'p450a009' : 'Harika, sırada ne var?',
'p450t001' : 'Değişiklikleriniz kaydedildi.',
'p450t002' : 'İşte yeni ağ adınız ve şifreniz',
'p450t003' : 'Eğer eski ağ adınızı ve şifrenizi kullandıysanız, var olan kablosuz aygıtlarınızın şimdi yeniden bağlanıyor olmaları gerekir.',
'p450t004' : 'Adı:',
'p450t008' : 'Yönlendiriciniz, alt kısmında, yeni ağ adınızı yazabileceğiniz bir yer olan bir kağıt parçasıyla birlikte geldi. Böylece ona her ihtiyacınız olduğunda ulaşabilirsiniz.',
'p450t011' : 'Eğer önceki ağ adınızı ve şifrenizi kullandıysanız, kablosuz aygıtlarınızın çoğu onları bir sonraki çalıştırışınızda otomatik olarak yeniden bağlanacaktır. Diğerleri, ağınızı yeniden seçmenizi gerektirecek ve ondan sonra otomatik olarak bağlanacaktır. Hızlı Kurulum Kılavuzunuzda Windows, OS X, iOS ve Android için talimatlar bulunur.  <span class="nub"></span>',
'p451a009' : 'Harika, sırada ne var?',
'p451t001' : 'Değişiklik yok.',
'p451t002' : 'Ağ adınız ve şifreniz değiştirilmedi.',
'p451t003' : 'Her bir kablosuz aygıtınıza ağ adınızı ve şifrenizi belirtmek durumunda kalacaksınız:',
'p451t004' : 'Adı:',
'p451t008' : 'Yönlendiriciniz, alt kısmında, ağ adınızı yazabileceğiniz bir yer olan bir kağıt parçasıyla birlikte geldi. Böylece ona her ihtiyacınız olduğunda ulaşabilirsiniz.',
'p451t011' : 'Her bir kablosuz aygıtınıza yeni ağınızın bildirilmesi gerekecek. Hızlı Kurulum Kılavuzunuzda Windows, OS X, iOS ve Android için talimatlar bulunur.  <span class="nub"></span>',
'p500t001' : 'Yönlendiricinizi kaydettirin.',
'p500t002' : 'Kayıt hızlıdır ve müşteri desteğine ihtiyaç duyarsanız size çok zaman kazandırabilir.',
'p500t004' : 'Neden kaydolmalı?',
'p500t005' : 'Sizin hakkınızda biraz daha fazla bilgi sahibi olmak, ihtiyacınız olduğunda size daha hızlı yardım edebilmemizi sağlayabilir.<span class="nub"></span>',
'p500tCancel' : 'Daha Sonra Kaydol &raquo;',
'p500tSubmit' : 'Kaydı Tamamla',
'p600t001' : 'Diğer bilgisayarlarınız ve mobil aygıtlarınıza uygun benzer yazılımlar edinmek için yönlendiricinizin İsteğe Bağlı Yazılım sayfasını ziyaret edin.',
'p600t002' : 'Teşekkürler, beni gösterge paneline götür',
'p600t003' : 'İsteğe bağlı yazılım',
'p600t004' : 'Bu yazılım araçları, yönlendiricinizin sunduğu gelişmiş özelliklerden yararlanmanızı sağlayabilir. Apple iOS, Android, Windows ve OS X için karşıdan yüklemeler bulunur.  <span class="nub"></span>',
'p601t001' : '<strong>Kaydolduğunuz için teşekkürler!</strong>',
'p700MRt001' : 'Bağlantınızı otomatik olarak kurmayı başaramadık. Bağlanmanıza yardım edebilmemiz için lütfen bize biraz daha bilgi verin.',
'p700MRt002' : 'Ne tür bir bağlantı kuruyorsunuz?',
'p700MRt003' : 'Bağlantım:',
'p700MRt005' : 'Dinamik bağlantı  (1483 Köprüsü)',
'p700MRt007' : 'PPPoE bağlantı',
'p700MRt009' : 'PPPoA bağlantı',
'p700MRt011' : 'Statik bağlantı (IPoA)',
'p700MRt014' : 'Bağlantı türümün ne olduğundan emin değilim:',
'p700MRt016' : 'Yeniden otomatiği dene',
'p700MRt017' : 'Bağlantı Türleri',
'p700MRt018' : '<span class="black">Dinamik —</span> Bu bağlantılar DSL sağlayıcıları için daha yaygın hale geliyor.',
'p700MRt019' : '<span class="black">PPPoE ve PPPoA —</span> Bu bağlantılar ISS tarafından sağlanan bir kullanıcı adı ve şifre gerektirir.',
'p700MRt021' : '<span class="black">Statik —</span> Bunlar her kullanıcı için benzersiz olan özel parametreler gerektirir. <span class="nub"></span>',
'p700t001' : 'Bağlantınızı otomatik olarak kurmayı başaramadık. Bağlanmanıza yardım edebilmemiz için lütfen bize biraz daha bilgi verin.',
'p700t002' : 'Ne tür bir bağlantı kuruyorsunuz?',
'p700t003' : 'Bağlantım:',
'p700t005' : 'Dinamik bağlantı',
'p700t007' : 'PPPoE bağlantı',
'p700t008' : 'L2TP veya PPTP bağlantısı',
'p700t013' : 'Statik bağlantı',
'p700t014' : 'Bağlantı türümün ne olduğundan emin değilim:',
'p700t914' : 'Bağlantı türünüzü hala belirleyemiyorsanız İnternet Servis Sağlayıcınız (ISS) ile iletişime geçin.',
'p700t016' : 'Yeniden otomatiği dene',
'p700t017' : 'Bağlantı Türleri',
'p700t018' : '<span class="black">Dinamik —</span> Çoğu kablolu ve fiber ISS\'ler ve bazı DSL sağlayıcılar için yaygındır.',
'p700t019' : '<span class="black">PPPoE ve PPTP —</span> ISS tarafından sağlanan bir kullanıcı adı ve şifre gerektirir.',
'p700t021' : '<span class="black">Statik —</span> Her kullanıcı için benzersiz olan özel parametreler gerektirir. <span class="nub"></span>',
'p701MRt001' : 'Dinamik bir bağlantı seçtiniz.',
'p701MRt002' : 'Internet Servis Sağlayıcınız size ek yapılandırma ayarlarını vermiş olmalıdır.',
'p701MRt004' : 'Dinamik Ayarlar:',
'p701MRt006' : '0',
'p701MRt007' : '0',
'p701MRt016' : 'Bağlantımı dene',
'p701MRt017' : 'Dinamik bağlantılar',
'p701MRt018' : 'Dinamik bir bağlantı, ISS ile iletişim kurulduktan sonra otomatik olarak yapılandırılır.<span class="nub"></span>',
'p701t001' : 'Dinamik bağlantı kuruluyor...',
'p701t002' : ' İnternet Servis Sağlayıcınızdan bağlantı isteğinde bulunuyoruz.',
'p702t001' : 'Modem yeniden başlatılıyor...',
'p702t002' : 'Modeminizi yeniden başlatarak farklı bir bağlantı türü denemeye hazırlanıyoruz.',
'p710MRt001' : 'Statik bir bağlantı seçtiniz.',
'p710MRt002' : 'Internet Servis Sağlayıcınız size statik yapılandırma ayarlarını vermiş olmalıdır. Eğer onları bulamıyorsanız, lütfen ISS\'niz ile bağlantı kurun.',
'p710MRt004' : 'Statik Ayarlar:',
'p710MRt005' : 'IP Adresi:',
'p710MRt006' : '0',
'p710MRt007' : 'Alt Ağ Maskesi:',
'p710MRt008' : '0',
'p710MRt009' : 'Varsayılan Ağ Geçidi:',
'p710MRt010' : '0',
'p710MRt011' : 'DNS Sunucusu (Birincil):',
'p710MRt012' : '0',
'p710MRt013' : 'DNS Sunucusu (İkincil):',
'p710MRt014' : '0',
'p710MRt015' : 'Not: Bütün ISS\'ler ikincil bir DNS sunucusu gerektirmezler.',
'p710MRt016' : 'Statik bağlantımı dene',
'p710MRt017' : 'Statik bağlantılar',
'p710MRt018' : 'Statik bir bağlantı manuel olarak yapılandırılır ancak yönlendiricinize, ağınız dışından daha kolay erişebileceğiniz istikrarlı bir adres sağlar. Statik bağlantılar konutsal Internet hizmetlerinde sık görülmez ve genellikle daha maliyetlidir. <span class="nub"></span>',
'p710t001' : 'Statik bir bağlantı seçtiniz.',
'p710t002' : 'Internet Servis Sağlayıcınız size statik yapılandırma ayarlarını vermiş olmalıdır. Eğer onları bulamıyorsanız, lütfen ISS\'niz ile bağlantı kurun.',
'p710t004' : 'Statik Ayarlar:',
'p710t005' : 'IP Adresi:',
'p710t006' : '0',
'p710t007' : 'Alt Ağ Maskesi:',
'p710t008' : '0',
'p710t009' : 'Varsayılan Ağ Geçidi:',
'p710t010' : '0',
'p710t011' : 'DNS Sunucusu (Birincil):',
'p710t012' : '0',
'p710t013' : 'DNS Sunucusu (İkincil):',
'p710t014' : '0',
'p710t015' : 'Not: Bütün ISS\'ler ikincil bir DNS sunucusu gerektirmezler.',
'p710t016' : 'Statik bağlantımı dene',
'p710t017' : 'Statik bağlantılar',
'p710t018' : 'Statik bir bağlantı manuel olarak yapılandırılır ancak yönlendiricinize, ağınız dışından daha kolay erişebileceğiniz istikrarlı bir adres sağlar. Statik bağlantılar konutsal internet hizmetlerinde sık görülmez ve genellikle daha maliyetlidir.  <span class="nub"></span>',
'p711t001' : 'Statik bağlantı kuruluyor...',
'p711t002' : ' İnternet Servis Sağlayıcınızdan bağlantı isteğinde bulunuyoruz.',
'p712t001' : 'Statik ayarlarınızda bir sorun var.',
'p712t002' : 'Girdiğiniz adreslerden ya da diğer öğelerden biri yanlış ancak hangisinin yanlış olduğunu söyleyemiyoruz.',
'p800t001' : 'Değişiklikleriniz uygulanıyor.',
'p800t002' : 'Değişikliklerinizi uyguluyor ve yönlendiricinizi resmi kılmak için yeniden başlatıyoruz.',
'p801t002' : ' Yönlendiricinin yeniden bağlanmasını bekliyoruz. Bağlandıktan sonra devam edeceğiz.',
'p802t002' : 'Devam etmek için yönlendiricide kablosuz bir bağlantıya ihtiyacımız var.',
'p802t004' : 'Cihazınızın kablosuz ağ menüsüne gidin',
'p802t005' : '<strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong> adındaki yeni ağınızı seçin',
'p802t007' : '<strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong> olan parolanızı girin',
'p802t009' : 'Yönlendiriciye bağlanacaksınız ve devam edeceğiz.',
'p802t010' : ' Yönlendiricinin yeniden bağlanması bekleniyor.',
'p803t002' : 'Devam etmek için yönlendiricide kablosuz bir bağlantıya ihtiyacımız var.',
'p803t003' : 'Şifreyi değiştirdiğiniz için, kablosuz ağınızı yeniden seçmek zorunda kalacaksınız:',
'p803t004' : 'Cihazınızın kablosuz ağ menüsüne gidin',
'p803t005' : '<strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong> adındaki yeni ağınızı seçin',
'p803t007' : '<strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong> olan parolanızı girin',
'p803t009' : 'Yönlendiriciye bağlanacaksınız ve devam edeceğiz.',
'p803t010' : ' Yeniden bağlanmanız bekleniyor.',
'p804t001' : 'Aygıtınız yeniden bağlanmadı.',
'p804t002' : 'Bu bazen olur ve onarması gayet kolaydır.',
'p804t025' : 'Eğer civarda interneti etkin bir aygıtınız varsa yararlı bilgiler için şu URL\'ye gidin: <strong>http://belk.in/PMuxOg</strong>',
'p804t026' : 'Eğer bu işe yaramazsa Ethernet kablosunu doğrudan modeminiz ile bilgisayar arasına takın.',
'p804t027' : ' Bir bağlantı görür görmez otomatik olarak devam edeceğiz.',
'p900t001' : 'Modeminizi yeniden başlatmanız gerekiyor.',
'p900t002' : 'Modeminiz iletişim kurmuyor.',
'p900t003' : 'Modeminizi yeniden başlatmak için lütfen şu adımları izleyin:',
'p900t004' : 'Modeminizi kapatın. Bu genellikle modem üzerindeki bir açma/kapama anahtarı ile ya da basitçe fişi çekmek suretiyle gerçekleştirilir. Bazı modemlerin pili vardır ve bunlar için modemin sıfırlama düğmesini bulmanız gerekir.',
'p900t005' : '15 saniye bekleyin.',
'p900t006' : 'Modeminizi tekrar açın.',
'p900t007' : 'Birkaç saniye sonra ışıkları yanacak ve yönlendiriciyle iletişim kurmaya hazır olacaktır.',
'p900t008' : 'Modeminizin kapatılıp açılmasını izleyeceğiz ve sonra otomatik olarak devam edeceğiz.',
'p900t009' : 'Modemi neden yeniden başlatmalı?',
'p900t010' : 'Bazı modemlerin, yeni bir yönlendirici ya da bilinmeyen bir bilgisayarla iletişim kurmadan önce yeniden başlatılmaları gerekir. Modeminizi görebiliyoruz ancak o, yeni yönlendiricinizle iletişim kurmuyor, o yüzden onu hızlı biçimde yeniden başlatmak büyük ihtimalle işe yarayacaktır.<span class="nub"></span>',
'p901t001' : 'Lütfen modeminizi şimdi yeniden başlatın...',
'p901t002' : ' Modeminizin kapatılıp tekrar açılmasını izliyoruz.',
'p902t001' : 'Modeminiz kapatıldı, güzel...',
'p902t002' : ' Şimdi yeniden etkinleşmesini bekliyoruz.',
'p903t001' : 'Daha fazla zaman mı gerekiyor?',
'p903t002' : ' Modeminizin yeniden başlamasını bekliyoruz. Daha fazla zamana mı ihtiyacınız var?',
'p903t005' : 'Bu genellikle modem üzerindeki bir açma/kapama anahtarı ile ya da basitçe fişi çekmek suretiyle gerçekleştirilir fakat bazı modemlerin pili vardır; bunlar için modemin sıfırlama düğmesini bulmanız gerekir.',
'p904t001' : 'Daha fazla zaman mı gerekiyor?',
'p904t002' : ' Modeminizin tekrar açılmasını bekliyoruz. Daha fazla zamana mı ihtiyacınız var?',
'p905t001' : 'Modeminizi yeniden görebiliyoruz...',
'p905t002' : ' Onun ISS\'nizle eşitlenmesini bekliyoruz. Bu bir ya da iki dakika sürecek.',
'p950IMRt001' : 'ADSL hattınıza bir bağlantı algılayamadık.',
'p950IMRt002' : 'ADSL duvar prizi ile yönlendiricinizdeki gri bağlantı noktası arasında çalışan bir ağ kablosu olup olmadığını kontrol edin.',
'p950IMRt004' : 'Bir kablo bağlantısı sorunu olduğunu düşünüyoruz.',
'p950IMRt005' : 'Yönlendiricinizi ADSL/telefon prizine bağlayan bir ağ kablosu olmalıdır. Bu kablo ISS\'nizden yönlendiricinize sinyal taşır – o olmadan çevrimiçi olamazsınız. Lütfen bu kablonun düzgün olarak bağlandığından emin olun.',
'p950IMRt006' : 'Bu bağlantı şöyle görünmelidir:',
'p950IMRt007' : 'ADSL\'nizin duvar prizini (dahili modemi olan) yönlendiricinizin güç fişine bağlayan bir ağ kablosu olmalıdır. Bu kablo ISS\'nizden yönlendiricinize sinyal taşır – o olmadan çevrimiçi olamazsınız.',
'p950IMRt009' : 'Bu bağlantı şöyle görünmelidir:',
'p950IMRt010' : 'Siz kontrol ederken biz de bağlantı durumunu izlemeye devam edeceğiz.',
'p950IMRt014' : 'Kablo bağlantısı',
'p950IMRt015' : 'En sık görülen kablo bağlantısı sorunu duvar prizi ile yönlendirici arasındadır. Kablonun her iki ucunu da kontrol etmek önemlidir. Bir ucu yeni yönlendiricinizdeki gri bağlantı noktasına, diğer ucu ise ADSL\'nizin prizine bağlı olmalıdır. Bazı durumlarda, duvar prizi ile kablo arasında filtre olması gerekebilir. <span class="nub"></span>',
'p950PMt001' : 'ADSL hattınıza bir bağlantı algılayamadık.',
'p950PMt002' : 'Yönlendiriciniz ile (dahili modemi olan) güç kaynağı fişi arasında bir ağ bağlantısı olduğundan emin olun.',
'p950PMt004' : 'Bir kablo bağlantısı sorunu olduğunu düşünüyoruz.',
'p950PMt005' : ' Modemin güç kablosundan ayrılan ağ kablosunun, yönlendiricinizdeki sarı WAN bağlantı noktasına bağlı olup olmadığını kontrol edin. Bu ağ bağlantısı olmadan çevrimiçi olamazsınız.',
'p950PMt009' : 'Bu bağlantı şöyle görünmelidir:',
'p950PMt010' : 'Siz kontrol ederken biz de bağlantı durumunu izlemeye devam edeceğiz.',
'p950PMt011' : 'Kablo bağlantısı',
'p950PMt012' : 'En sık görülen kablo bağlantısı sorunu duvar prizi ile modem arasındadır. Kablonun her iki ucunu da kontrol etmek önemlidir. Bir ucu yeni yönlendiricinizdeki güç kaynağına, diğer ucu ise ADSL\'nizin prizine bağlı olmalıdır. Bazı durumlarda, duvar prizi ile kablo arasında filtre olması gerekebilir. <span class="nub"></span>',
'p950t001' : 'Modeminizde bir bağlantı algılamadık.',
'p950t002' : 'Modeminizin fişinin takılı ve açık olduğundan emin olun.',
'p950t003' : 'Modeminiz ve yönlendiriciniz arasında bir Ethernet kablosunun takılı olduğundan emin olun.',
'p950t004' : 'Bir kablo bağlantısı sorunu olduğunu düşünüyoruz.',
'p950t005' : 'Modeminiz açık olmalı ve modeminize ve yönlendiricinizin sarı bağlantı noktasına bir Ethernet kablosu takılı olmalıdır.',
'p950t006' : 'Lütfen aşağıdakileri kontrol edin.',
'p950t007' : 'Modeminizin açık olduğundan emin olun. Güç adaptörünün her iki uçta da takılı olduğunu ve modem ışıklarının biri ya da daha fazlasının yandığını kontrol edin.',
'p950t008' : 'Modeminize ve yönlendiricinizin sarı bağlantı noktasına bir Ethernet kablosu takılı olmalıdır. Bu kablo modeminizden yönlendiricinize sinyal taşır, o olmadan çevrimiçi olamazsınız.',
'p950t009' : 'Bağlantılarınız şöyle görünmelidir:',
'p950t010' : 'Siz kontrol ederken biz de bağlantı durumunu izlemeye devam edeceğiz.',
'p950t011' : 'Kablo bağlantısı',
'p950t012' : 'En sık görülen kurulum sorunu modem ile yönlendirici arasındaki kablo bağlantısıdır. Bir ucu yeni yönlendiricinizdeki sarı bağlantı noktasına, diğer ucu ise modeminizdeki benzer bir bağlantı noktasına takılı olmalıdır. Her ikisinin de tamamen takılı olduğundan emin olun. Farklı modem üreticileri bağlantı noktalarını farklı adlandırırlar; onu "veri", "LAN", "ağ" ya da "Ethernet" adları altında bulabilirsiniz. <span class="nub"></span>',
'p951IMRt001' : 'Daha fazla zaman mı gerekiyor?',
'p951IMRt002' : ' ADSL hattınızın fişini takmanızı bekliyoruz. Daha fazla zamana mı ihtiyacınız var?',
'p951t001' : 'Daha fazla zaman mı gerekiyor?',
'p951t002' : ' Modeminizin tekrar açılmasını bekliyoruz. Daha fazla zamana mı ihtiyacınız var?',
'pDAt001' : 'Yinelenen Yönetici',
'pDAt002' : 'Şu anda bu aygıtı yöneten kişi  <span id="ipaddr"></span> !!',
'PIC_blocked_content' : 'Ebeveyn İnternet Denetimi etkin ve bu cihaz  şu anda internet erişimine engelli. Ebeveyn İnternet Denetimi ayarlarını yönetmek için aşağıdaki düğmeye basın.',
'PIC_blocked_title' : 'Bu cihaz şu anda internet erişimine engelli.',
'PIC_S1t0006' : 'İnternet erişimi planlaması:',
'PIC_S1t006' : 'Son dönemde ağınızda olanlar:',
'PIC_S2t003' : 'Okul geceleri',
'PIC_S2t004' : 'Hafta sonu',
'PIC_S2t005' : '(Salı-perşembe)',
'PIC_S2t006' : '(Cuma-Cumartesi)',
'PIC-blocked' : 'Engellenmiş',
'PIC-S1dt001' : 'Tüm ağda internet erişimini askıya almak mı istiyorsunuz?',
'PIC-S1t001' : 'Tüm Cihazları Engelle',
'PIC-S1t003' : 'Tüm cihazların İnternet bağlantısı kesildi.',
'PIC-S1t004' : 'Erişimleri Geri Yükle',
'PIC-S1t005' : 'Şu anda ağınızda olanlar:',
'PIC-S1t010' : 'Cihazlar aranıyor:',
'PIC-S1t020' : 'Ebeveyn İnternet Denetimi programı durduruldu',
'PIC-S1t021' : 'Yönlendirici geçerli zamanı bilmiyor, bu yüzden Ebeveyn İnternet Denetimi programının engellemesi/kilit açması önleniyor.  Yönlendiriciniz NTP zaman sunucusuna yeniden bağlanarak doğru zamanı tekrar kurduğunda bu sorun onarılacaktır.',
'PIC-S1t022' : 'Yönlendiriciniz her birkaç dakikada bir NTP zaman sunucusunu kontrol edecek veya <a href="#" tid="gtSystemSettings" style="">Sistem Ayarlarını</a> ziyaret ederek zaman sunucusunu değiştirebilirsiniz.',
'PIC-unblocked' : 'engelli olmayan',
'pNoTime_content' : 'Yönlendiriciniz şu anda saati söyleyemiyor çünkü NTP zaman sunucusu ile iletişimi kesildi. NTP zaman sunucusu ile yeniden bağlantı kurulana kadar yönlendiricinizin Ebeveyn İnternet Denetimi, Eko Modu ve Kendi Kendine İyileştirme gibi zaman temelli işlevleri durdurulmuş durumda. <br> <br>Yönlendirici her birkaç dakikada bir zamanı kontrol edecek.',
'pNoTime_title' : 'Saat Kaç?',
'pODLAplt001' : 'Dil paketi uygulanıyor',
'pODLAplt002' : 'Seçilen dile değiştirme...',
'pODLDLt001' : 'Dil paketi indirme',
'pODLDLt002' : 'Seçilen dili sunucudan alma...',
'pODLErrt001' : 'Özür dileriz',
'pODLErrt002' : 'Tamam',
'pStatst004' : 'Tümünü gör &raquo;',
'Support1t001' : 'Modeminizde bir bağlantı algılamadık.',
'Support1t002' : 'Modeminizin fişinin takılı ve açık olduğundan emin olun.',
'Support1t003' : 'Modeminiz ve yönlendiriciniz arasında bir Ethernet kablosunun takılı olduğundan emin olun.',
'Support1t004' : 'Bir kablo bağlantısı sorunu olduğunu düşünüyoruz.',
'Support1t005' : 'Modeminiz açık olmalı ve modeminize ve yönlendiricinizin sarı bağlantı noktasına bir Ethernet kablosu takılı olmalıdır.',
'Support1t006' : 'Lütfen aşağıdakileri kontrol edin.',
'Support1t007' : 'Modeminizin açık olduğundan emin olun. Güç adaptörünün her iki uçta da takılı olduğunu ve modem ışıklarının biri ya da daha fazlasının yandığını kontrol edin.',
'Support1t008' : 'Modeminize ve yönlendiricinizin sarı bağlantı noktasına bir Ethernet kablosu takılı olmalıdır. Bu kablo modeminizden yönlendiricinize sinyal taşır, o olmadan çevrimiçi olamazsınız.',
'Support1t009' : 'Bağlantılarınız şöyle görünmelidir:',
'Support1t010' : 'Bu adımları tamamladıktan sonra Tekrar dene üstüne tıklayın.',
'Support7t012' : 'İnternete bağlı bir aygıt üstünde <strong>http://belk.in/Q4XXca</strong> adresine gidin',
'Support1t016' : 'Kablo bağlantısı',
'Support1t017' : 'En sık görülen kurulum sorunu modem ile yönlendirici arasındaki kablo bağlantısıdır. Bir ucu yeni yönlendiricinizdeki sarı bağlantı noktasına, diğer ucu ise modeminizdeki benzer bir bağlantı noktasına takılı olmalıdır. Her ikisinin de tamamen takılı olduğundan emin olun. Farklı modem üreticileri bağlantı noktalarını farklı adlandırırlar; onu "veri", "LAN", "ağ" ya da "Ethernet" adları altında bulabilirsiniz. <span class="nub"></span>',
'Support2t001' : 'Modeminiz hiç yeniden başlamadı.',
'Support2t002' : 'Modeminizin güç kaynağını fişinden çıkarmayı deneyin.',
'Support2t003' : 'Modeminizde basmanız gereken bir sıfırlama düğmesi olabilir.',
'Support2t004' : 'Modeminizi yeniden başlatmakta sorun mu yaşıyorsunuz?',
'Support2t005' : 'Modeminizi yeniden başlatmak için şu adımları izlemeyi deneyin:',
'Support2t006' : 'Modeminizin güç kaynağını fişinden çıkarmak.',
'Support2t007' : 'Modem üstündeki bütün ışıkların sönmesini bekleyin.',
'Support2t008' : 'Işıklar hala yanıyorsa, modeminizin bir pil yedeği olabilir. Bir yerlerde (çoğunlukla arkasında) bir sıfırlama düğmesi vardır. Ona basın.',
'Support2t009' : 'Modemin ışıklarının söndüğünü görmelisiniz. Güç kaynağını yeniden fişe takmadan önce birkaç saniye beklemelisiniz.',
'Support2t010' : 'Bu adımları tamamladıktan sonra Tekrar dene üstüne tıklayın.',
'Support2t016' : 'Modemi neden yeniden başlatmalı?',
'Support2t017' : 'Bazı modemlerin, yeni bir yönlendirici ya da bilinmeyen bir bilgisayarla iletişim kurmadan önce yeniden başlatılmaları gerekir. Modeminizi görebiliyoruz ancak o, yeni yönlendiricinizle iletişim kurmuyor, o yüzden onu hızlı biçimde yeniden başlatmak büyük ihtimalle işe yarayacaktır.<span class="nub"></span>',
'Support3MRt001' : 'ADSL hattınıza bir bağlantı algılayamadık.',
'Support3MRt002' : 'ADSL duvar prizi ile yönlendiriciniz arasında çalışan bir ağ kablosu olup olmadığını kontrol edin.',
'Support3MRt003' : 'Bazı bölgelerde filtre gerekebilir.',
'Support3MRt004' : 'Bir kablo bağlantısı sorunu olduğundan oldukça eminiz.',
'Support3MRt005' : 'Yönlendiricinizdeki gri bağlantı noktasını ADSL/telefon prizine bağlayan bir kablo olmalıdır.',
'Support3MRt006' : 'Kablonun her iki ucunun da tam olarak oturduğundan emin olun.',
'Support3MRt007' : 'Kablonun yönlendiricinizdeki sarı bağlantı noktalarından birine değil, gri olana takılı olup olmadığını kontrol edin.',
'Support3MRt008' : 'Size bir ADSL hattı filtresi verildiyse, lütfen filtrenin kablo ile ADSL prizi arasında olduğundan emin olun.',
'Support3MRt010' : 'Kablonun her iki ucunun da tam olarak oturduğundan emin olun.',
'Support3MRt011' : 'Kablonun yönlendiricinizin güç kaynağındaki ağ bağlantı noktasına takılı olup olmadığını kontrol edin.',
'Support3MRt012' : 'Size bir ADSL hattı filtresi verildiyse, lütfen filtrenin kablo ile ADSL prizi arasına bağlandığından emin olun.',
'Support3MRt016' : 'Bu adımları uyguladıktan sonra yeniden denemeye hazır olacaksınız.',
'Support3MRt018' : 'İnternete bağlı bir aygıt üstünde aşağıdaki URL\'yi ziyaret edin ve problemi kendi kendinize nasıl çözebileceğinizi öğrenin: <strong>www.belkin.com/support3mr</strong>',
'Support3MRt021' : 'Kablo bağlantısı',
'Support3MRt022' : 'En sık rastlanan kablo bağlantısı sorunu ADSL priziniz ile ilgilidir. Kablonun her iki ucunu da kontrol etmek önemlidir. <span class="nub"></span>',
'Support3MRt050' : 'Yönlendiricinizin güç kaynağı ile telefon prizi arasında bir ağ kablosu olup olmadığını kontrol edin.',
'Support3MRt051' : 'Yönlendiricinizin güç kaynağını ADSL/telefon prizine bağlayan bir kablo olmalıdır.',
'Support3PMt001' : 'ADSL hattınıza bir bağlantı algılayamadık.',
'Support3PMt002' : 'Yönlendiriciniz ile (dahili modemi olan) güç kaynağı fişi arasında bir ağ bağlantısı olduğundan emin olun.',
'Support3PMt004' : 'Bir kablo bağlantısı sorunu olduğundan oldukça eminiz.',
'Support3PMt005' : 'Yönlendiricinizdeki sarı bağlantı noktası ile yönlendiricinin güç kaynağı arasında bir ağ bağlantısı olmalıdır.',
'Support3PMt006' : 'Yönlendiricinin güç kaynağı fişine bakın ve iki ayrı hatta ayrılan kabloyu bulun. Bu hatlardan birinin ethernet fişi vardır.',
'Support3PMt007' : 'Ethernet fişini yönlendiricinizdeki sarı bağlantı noktasına takın.',
'Support3PMt010' : 'Bunu yaptıktan sonra yeniden denemeye hazır olacaksınız.',
'Support3PMt012' : 'İnternete bağlı bir aygıt üstünde <strong>www.belkin.com/support3PM</strong> adresine gidin',
'Support3PMt016' : 'Kablo bağlantısı',
'Support3PMt017' : 'ADSL\'nizin prizinden yönlendiricinize kesintisiz bir bağlantı serisi olduğundan emin olmak önemlidir. Yönlendirici, bu sinyalin sarı bağlantı noktasından gelmesini bekler. Yönlendiricinizin güç kaynağından gelen kablo, yönlendiricinize bu sinyali ve gücü taşır; her şeyin olması gerektiği gibi çalışması için iki yarı da yönlendiricinize takılı olmalıdır. <span class="nub"></span>',
'Support3t001' : 'Modeminiz hiç yeniden açılmadı.',
'Support3t002' : 'Modemin gücünün olup olmadığını kontrol edin.',
'Support3t003' : 'Hazır hale gelen kadar kısa bir süre beklemeniz gerekebilir.',
'Support3t004' : 'Modeminizi yeniden başlatmakta sorun mu yaşıyorsunuz?',
'Support7t005' : 'ADSL bağlantısı kurmak için aşağıdaki adımları izleyin:',
'Support7t006' : 'Modem-yönlendiricinizdeki ağ kablosunun İnternet olan bir telefon prizine takılı olup olmadığını kontrol edin. Ardından, Tekrar Dene\'ye tıklayarak modem-yönlendiricinizin İnternet\'i algılayıp algılayamadığına bakın.',
'Support7t007' : 'Modem-yönlendiriciniz telefon prizini (dağıtıcı aracılığıyla) sabit bir telefon hattı ile paylaşıyorsa, dağıtıcıyı bir filtre-dağıtıcı ile değiştirin (opsiyonel). Ardından, Tekrar Dene\'ye tıklayarak modem-yönlendiricinizin İnternet Servis Sağlayıcısını algılayıp algılayamadığına bakın.',
'Support7t008' : 'Eğer yukarıdaki 2. adım işe yaramazsa ADSL filtreleri gerekli olabilir*. Eğer sizde varsa (genellikle İnternet Servis Sağlayıcınız tarafından verilir), bunları tüm sabit telefon hatlarınız ile telefon prizleri arasına bağlayın.',
'Support7t009' : 'Yukarıdaki 1-3. adımları uygulamaya rağmen ADSL bağlantısı halen çalışmıyorsa, o zaman teknik destek için İnternet Servis Sağlayıcınız ile iletişime geçin. Onlara modem-yönlendiricinizin ISS ile eşitlenmesini sağlamak konusunda sorun yaşadığınızı söyleyin.',
'Support3t010' : 'Bu adımları tamamladıktan sonra Tekrar dene üstüne tıklayın.',
'Support3t016' : 'Modemi neden yeniden başlatmalı?',
'Support3t017' : 'Bazı modemlerin, yeni bir yönlendirici ya da bilinmeyen bir bilgisayarla iletişim kurmadan önce yeniden başlatılmaları gerekir. Modeminizi görebiliyoruz ancak o, yeni yönlendiricinizle iletişim kurmuyor, o yüzden onu hızlı biçimde yeniden başlatmak büyük ihtimalle işe yarayacaktır.<span class="nub"></span>',
'Support4t001' : 'Yönlendiricinizi yeniden bağlamayı başaramadık.',
'Support4t002' : 'Yönlendiricinizi yeniden başlatmayı deneyin.',
'Support4t003' : 'Yönlendiriciniz çalışır durumda olduğunda onu yeniden bağlamayı deneyin.',
'Support4t004' : 'Şimdi başka bir şeyler deneyelim.',
'Support4t005' : 'Önce yönlendiricinizi yeniden başlatalım.',
'Support4t006' : 'Yönlendiricinizin güç kaynağını fişinden çıkarın, birkaç saniye bekleyin ve yeniden takın.',
'Support4t006w' : 'Yönlendiricinizin güç kaynağını fişinden çıkarın, birkaç saniye bekleyin ve yeniden takın.',
'Support4t007' : 'Yönlendiricinizde mavi bir ışık sürekli yandığında bağlanmaya hazır oluruz.',
'Support4t008' : 'Sonra bir kablosuz bağlantıyı deneyelim.',
'Support4t031' : 'Bağlantının kurulması birkaç saniye sürecektir, sonra yeniden denemeye hazır olacaksınız.',
'Support4t032' : 'Ya da kablolu bir bağlantıyı deneyebilirsiniz.',
'Support4t033' : 'Yönlendiriciye bir bilgisayarı bağlamayı deneyin. Bilgisayar ile yönlendiricinin gri bağlantı noktalarından biri arasında bir Ethernet kablosu kullanın. Oradan http://router/ adresini ziyaret etmek kurulumu bir daha denemenizi sağlayacak.',
'Support4t034' : 'Bu adımları tamamladıktan sonra Tekrar dene üstüne tıklayın.',
'Support4t040' : 'İnternete bağlı bir aygıt üstünde <strong>http://belk.in/PMuxOg</strong> adresine gidin',
'Support4t050' : 'Bağlantıyı yeniden kazanmak',
'Support4t051' : 'Bu durumlarda yönlendiricinizin yeniden başlatılması ya da sadece bir bağlantıyı yeniden kurması gerekebilir. O yüzden her ikisi için de talimatlar hazırladık. Ağ şifrenizi bir önceki adımda değiştirmiş olabileceğinizden, yönlendiriciyi yeniden başlattıktan sonra ağı yeniden seçmeniz gerekebilir. <span class="nub"></span>',
'Support5t001' : 'Yönlendiricinizi yeniden bağlamayı başaramadık.',
'Support5t002' : 'Yönlendiricinizi yeniden başlatmayı deneyin.',
'Support5t003' : 'Yönlendiriciniz çalışır durumda olduğunda onu yeniden bağlamayı deneyin.',
'Support5t004' : 'Şimdi başka bir şeyler deneyelim.',
'Support5t005' : 'Önce yönlendiricinizi yeniden başlatalım.',
'Support5t006' : 'Yönlendiricinizin güç kaynağını fişinden çıkarın, birkaç saniye bekleyin ve yeniden takın.',
'Support5t006w' : 'Yönlendiricinizi fişinden çıkarın, birkaç saniye bekleyin ve yeniden takın.',
'Support5t007' : 'Yönlendiricinizde mavi bir ışık sürekli yandığında bağlanmaya hazır oluruz.',
'Support5t008' : 'Sonra bir kablosuz bağlantıyı deneyelim.',
'Support5t009' : 'Bağlantının kurulması birkaç saniye sürecektir, sonra yeniden denemeye hazır olacaksınız.',
'Support5t010' : 'Ya da kablolu bir bağlantıyı deneyebilirsiniz.',
'Support5t011' : 'Yönlendiriciye bir bilgisayarı bağlayabilirsiniz. Bilgisayar ile yönlendiricinin gri bağlantı noktalarından biri arasına bir Ethernet kablosu takın. Oradan http://router/ adresini ziyaret etmek kurulumu bir daha denemenizi sağlayacak.',
'Support5t012' : 'Bu adımları tamamladıktan sonra Tekrar dene üstüne tıklayın.',
'Support5t015' : 'İnternete bağlı bir aygıt üstünde <strong>http://belk.in/PMuxOg</strong> adresine gidin',
'Support5t020' : 'Bağlantıyı yeniden kazanmak',
'Support5t021' : 'Bu durumlarda, yönlendiricinizin yeniden başlatılması ya da yalnızca bir bağlantının yeniden kurulması seçeneklerinden hangisinin geçerli olacağını söylemek zordur. O yüzden bunların her ikisi için de talimatlar hazırladık. Bir önceki adımda ağ adınızı değiştirdiğimiz için, yönlendiricinizi yeniden başlattıktan sonra lütfen yeni ağa bağlandığınızdan emin olun. <span class="nub"></span>',
'Support6t001' : 'Yönlendiricinizi yeniden bağlamayı başaramadık.',
'Support6t002' : 'Yönlendiricinizi yeniden başlatmayı deneyin.',
'Support6t003' : 'Yönlendiriciniz çalışır durumda olduğunda onu yeniden bağlamayı deneyin.',
'Support6t004' : 'Şimdi başka bir şeyler deneyelim.',
'Support6t005' : 'Önce yönlendiricinizi yeniden başlatalım.',
'Support6t006' : 'Yönlendiricinizin güç kaynağını fişinden çıkarın, birkaç saniye bekleyin ve yeniden takın.',
'Support6t006w' : 'Yönlendiricinizi fişinden çıkarın, birkaç saniye bekleyin ve yeniden takın.',
'Support6t007' : 'Yönlendiricinizde mavi bir ışık sürekli yandığında bağlanmaya hazır oluruz.',
'Support6t008' : 'Sonra bir kablosuz bağlantıyı deneyelim.',
'Support6t031' : 'Bağlantının kurulması birkaç saniye sürecektir, sonra yeniden denemeye hazır olacaksınız.',
'Support6t032' : 'Ya da kablolu bir bağlantıyı deneyebilirsiniz.',
'Support6t033' : 'Yönlendiriciye bir bilgisayarı bağlayabilirsiniz. Bilgisayar ile yönlendiricinin gri bağlantı noktalarından biri arasına bir Ethernet kablosu takın. Oradan http://router/ adresini ziyaret etmek kurulumu bir daha denemenizi sağlayacak.',
'Support6t034' : 'Bu adımları tamamladıktan sonra Tekrar dene üstüne tıklayın.',
'Support6t037' : 'İnternete bağlı bir aygıt üstünde <strong>http://belk.in/Nm1f5S</strong> adresine gidin',
'Support6t050' : 'Bağlantıyı yeniden kazanmak',
'Support6t051' : 'Bu durumlarda yönlendiricinizin yeniden başlatılması ya da sadece bir bağlantıyı yeniden kurması gerekebilir. O yüzden her ikisi için de talimatlar hazırladık. Ağ şifrenizi bir önceki adımda değiştirmiş olabileceğinizden, yönlendiriciyi yeniden başlattıktan sonra ağı yeniden seçmeniz gerekebilir. <span class="nub"></span>',
'Support7t001' : 'Modem-yönlendiriciniz internete bağlı değil.',
'Support7t004' : 'Telefon prizinizin bağlantısında bir sorun var.',
'Support7t050' : 'Bağlantı sorunları',
'Support7t051' : 'Bu gibi durumlarda, ISS\'ye bağlanmakta neden zorluk yaşadığımızı söylemek zordur. Kablo bağlantınızı olabildiğince kontrol ettik, bu yüzden bir sonraki adım doğru prizi ve gerekiyorsa filtreyi kullanıp kullanmadığınızı kontrol etmek ve bu da işe yaramazsa ISS\'nizi aramak. <span class="nub"></span>',
'SupportNumber' : '1-800-123-4567',
'UpSpeed' : '12.5',
'p2410t012' : '\'Geri Yükle\'ye tıkladığınızda, isim ve parola gibi yönlendirici ayarlarınız silinerek orijinal fabrika varsayılanları ile değiştirilecek.  Bilgisayarlarınız, telefonlarınız vb. bu yönlendirici aracılığıyla çevrimiçi olabilmek için yeni ayarlara göre yeniden yapılandırılmak zorunda kalacak.  Devam etmek istediğinizden emin misiniz?',
'gtRestore' : 'Geri Yükle',
'gtCancel' : 'İptal',
'alt="Loading"' : 'Yükleniyor',
'alt="Restart Router"' : 'Yönlendiriciyi Yeniden Başlat',
'alt="Check Wires"' : 'Kabloları Kontrol Et',
'alt="Check Phone Connection"' : 'Telefon Bağlantısını Kontrol Et',
'alt="Check WAN Connection"' : 'WAN Bağlantısını Kontrol Et',
'alt="Checkmark"' : 'Onay İmi',
'alt="Change"' : 'Değiştir',
'alt="Print"' : 'Yazdır',
'alt="Expand"' : 'Genişlet',
'alt="Caret"' : 'Düzeltme İmi',
'alt="Cut"' : 'Kes',
'alt="Browser"' : 'Tarayıcı',
'alt="Wifi"' : 'Wifi',
'alt="Password"' : 'Parola',
'alt="Check Phone Jack"' : 'Telefon Fişini Kontrol Et',
'alt="Turn Off Modem"' : 'Modemi Kapat',
'alt="Turn On Modem"' : 'Modemi Aç',
'alt="Check Phone Filters"' : 'Telefon Filtrelerini Kontrol Et',
'gtSerial' : 'Seri No.',
'gt5GName' : '5GHz SSID',
'gt5GKey' : '5GHz Anahtar',
'p1020MRt001' : 'İnternet Servis Sağlayıcınızla iletişim kurmakta güçlük çekiyoruz.',
'p1020MRt002' : 'Lütfen modem-yönlendiricinizi yeniden başlatın.',
'p1020MRt003' : 'Bir Internet bağlantısı alamıyoruz bu yüzden modem-yönlendiricinizi yeniden başlatmayı deneyelim.',
'p1020MRt004' : 'Modem-yönlendiricinizi kapatın. Bu genellikle modem-yönlendirici üzerindeki bir anahtarı açıp kapamak ya da basitçe fişi çekmek suretiyle gerçekleştirilir.',
'p1020MRt005' : '15 saniye bekleyin.',
'p1020MRt006' : 'Modem-yönlendiricinizi tekrar açın.',
'p1020MRt007' : 'Birkaç saniye sonra ışıkları yanacak ve ISS\'niz ile bağlantı kuracaktır.',
'p1020MRt008' : 'Eğer bu problem devam ederse, hesabınızdaki sorunu gidermek için lütfen ISS\'niz ile bağlantı kurun.',
'p1020MRt009' : 'Modem-yönlendiricinizin kapatılıp açılmasını izleyeceğiz ve sonra otomatik olarak devam edeceğiz.',
'p1020MRt010' : 'Modemi neden yeniden başlatmalı?',
'p1020MRt011' : 'Bazı modemlerin, yeni bir yönlendirici ya da bilinmeyen bir bilgisayarla iletişim kurmadan önce yeniden başlatılmaları gerekir. Ve İnternet Servis Sağlayıcınızda geçici bir kesinti olursa, modem bağlantınızı beklenmedik biçimde kesebilir. Modeminizi görebiliyoruz ancak interneti algılayamıyoruz, o yüzden onu hızlı biçimde yeniden başlatmak büyük ihtimalle işe yarayacaktır. <span class="nub"></span>',
'p1010t001' : 'Modeminizle iletişim kurmakta güçlük çekiyoruz.',
'p1010t002' : 'Bir kablo bağlantısı sorunu olduğunu düşünüyoruz.',
'p1010t003' : 'Modeminizle yönlendiricinizin sarı bağlantı noktasını bağlayan bir kablo olmalıdır. Modeminiz açık olmalıdır.',
'p1010t004' : 'Her şeyin başlamaya hazır olduğundan emin olmanız için yapabileceğiniz birkaç şey var:',
'p1010t005' : 'Modeminizin açık olduğundan emin olun. Güç adaptörü her iki uçta da takılı olmalı ve modem üstündeki ışıklardan biri ya da daha fazlası yanıyor olmalıdır.',
'p1010t006' : 'Modeminizle yönlendiricinizin sarı bağlantı noktasını bağlayan bir ağ kablosu olmalıdır. Bu kablo modeminizden yönlendiricinize sinyal taşır, o olmadan çevrimiçi olamazsınız.',
'p1010t007' : 'Eğer her ikisi de olması gerektiği gibiyse modeminizi güç kaynağından çıkarmak, on beş saniye beklemek ve yeniden takmak yoluyla yeniden başlatmayı deneyebilirsiniz. Modeminizin pili varsa modemin sıfırlama düğmesini bulmanız ve onu kullanmanız gerekebilir.',
'p1010t008' : 'Bu bağlantılar şöyle görünmelidir:',
'p1010t009' : 'Siz kontrol ederken biz de bağlantı durumunu izlemeye devam edeceğiz.',
'p1010t010' : 'En sık görülen kablo bağlantısı sorunu modem ile yönlendirici arasındadır. Kablonun her iki ucunu da kontrol etmek önemlidir. Bir ucu yeni yönlendiricinizdeki sarı bağlantı noktasına, diğer ucu ise modeminizdeki benzer bir bağlantı noktasına bağlı olmalıdır. Farklı modem üreticileri bağlantı noktalarını farklı adlandırırlar; onu "veri", "LAN", "ağ" ya da "Ethernet" adları altında bulabilirsiniz.',
'Support3t005' : 'Modeminizi yeniden başlatmak için şu adımları izlemeyi deneyin:',
'Support3t006' : 'Modeminizin ön panelindeki ışıkları kontrol edin. Eğer yanıyorlarsa modeminiz açıktır ve modemin hazır hale gelmesi için kısa bir süre beklemeniz gerekebilir.',
'Support3t007' : 'Modemin güç kaynağının modeme ve bir duvar soketine düzgün biçimde bağlı olup olmadığını kontrol edin.',
'Support3t008' : 'Modeminizin bir güç anahtarı varsa, açık pozisyonda olup olmadığını kontrol edin.',
'Support3t009' : 'Modeminizin yeni yönlendiricinize hala bağlı olup olmadığını iki kere kontrol edin.',
'Support1t012' : 'İnternete bağlı bir aygıt üstünde <strong>http://belk.in/LIkBoH</strong> adresine gidin',
'QOSt001' : 'Intellistream\'ı etkinleştirmek için aşağıdakileri yapın:',
'QOSt002' : 'Bilgisayarınızı, Belkin yönlendiricinize bağlamak için bir Ethernet kablosu kullanın (önerilir).',
'QOSt003' : 'Burayı tıklayıp <a href="http://www.speedtest.net" target="_blank" class="speed_font4">Speedtest.net</a> kullanarak internet bağlantınız için bir hız testi yapın.',
'QOSt004' : 'Hız testi tamamlandıktan sonra, çıkan değerleri Speedtest.net adresindeki Karşıdan Yükleme Hızı (Download Speed) ve Karşıya Yükleme Hızı (Upload Speed) alanlarına girip, aşağıdaki \'Save\' (Kaydet) düğmesine tıklayın.',
'gtMbps' : 'Mbps',
'QOSt006' : 'Karşıdan Yükleme Hızınız yüksek olduğunda Intellistream yalnızca Karşıya Yükleme Hızınıza öncelik verecektir.',
'QOSt007' : 'Karşıya Yükleme Hızınız yüksek olduğunda Intellistream yalnızca Karşıdan Yükleme Hızınıza öncelik verecektir.',
'QOSt008' : 'İnternet hızları bu denli yüksek olduğunda Intellistream, etkisi olmayacağı için burada etkin olmayacaktır.',
'QOSt009' : 'Lütfen 0,01\'den büyük bir numara girin.',
'QOSt010' : 'Lütfen 0,01\'den büyük numaralar girin.',
'gtSettingsNotSaved' : 'Ayarlarınızı kaydetmediniz. Ayarları kaydetmek için sayfada kalın, değişiklikleri iptal etmek için sayfadan ayrılın ya da sayfayı yeniden yükleyin.',
'QOSt011' : 'Lütfen 0,01 ila 100,00 arasında bir sayı girin.',
'QOSt012' : 'Lütfen 0,01 ila 100,00 arasında sayılar girin.',
'QOSt013' : 'Lütfen 0,01 ila 1000,00 arasında bir sayı girin.',
'QOSt014' : 'Lütfen 0,01 ila 1000,00 arasında sayılar girin.',


// End belkin transation table
LastID : "LastValue"	

	
}

// Copy no need translation stream here
fv3='Active Worlds';
fv4='Age of Empires';
fv5='Age of Empires Expansion: The Rise of Rome';
fv6='Age of Empires II Expansion: The Conquerors';
fv7='Age of Empires II: The Age of Kings';
fv8='Age of Kings';
fv9='Age of Wonders';
fv10='Aliens vs. Predator';
fv11='Anarchy Online (BETA)';
fv12='AOL Instant Messenger';
fv13='Audiogalaxy Satellite';
fv14='Baldur\'s Gate';
fv15='BattleCom';
fv16='Battlefield Communicator';
fv17='Black and White';
fv18='Blizzard Battle.net';
fv19='Buddy Phone';
fv20='Bungie.net';
fv21='Camerades';
fv22='CART Precision Racing ';
fv23='Close Combat for Windows ';
fv24='Close Combat III: The Russian Front';
fv25='Close Combat: A Bridge Too Far';
fv26='Combat Flight Simulator 2: WWII Pacific Theater';
fv27='Combat Flight Simulator: WWII Europe Series';
fv28='Crimson Skies';
fv29='Dark Reign';
fv30='Dark Reign 2';
fv31='Delta Force 2';
fv32='Delta Three PC to Phone';
fv33='Descent 3';
fv34='Descent Freespace';
fv35='Diablo (1.07+)';
fv36='Diablo I';
fv37='Diablo II';
fv38='DialPad.Com';
fv39='DirectX 7 Games';
fv40='DirectX 8 Games';
fv41='Domain Name Server (DNS)';
fv42='Doom';
fv43='Dune 2000';
fv44='Dwyco Video Conferencing';
fv45='Elite Force';
fv46='Everquest';
fv47='F-16 ';
fv48='F-22 Lightning 3';
fv49='F-22 Raptor ';
fv50='F22 Raptor (Novalogic)';
fv51='Falcon 4.0';
fv52='Fighter Ace II';
fv53='Flight Simulator 2000';
fv54='Flight Simulator 98';
fv55='Freetel';
fv56='FTP Server';
fv57='GNUtella';
fv58='Golf 1998 Edition';
fv59='Golf 1999 Edition';
fv60='Golf 2001 Edition';
fv61='Go2Call';
fv62='Half Life';
fv63='Half Life Server';
fv64='Heretic II Server';
fv65='I76';
fv66='Ivisit';
fv67='IRC';
fv68='IStreamVideo2HPz';
fv69='KaZaA';
fv70='Kohan Immortal Sovereigns';
fv71='LapLink Gold';
fv72='Links 2001';
fv73='Lotus Notes Server';
fv74='Mail (POP3)';
fv75='Mail (SMTP)';
fv76='MechCommander 2.0';
fv77='MechWarrior 3';
fv78='MechWarrior 4';
fv79='Media Player 7';
fv80='Midtown Madness';
fv81='Midtown Madness 2';
fv82='Mig 29';
fv83='Monster Truck Madness';
fv84='Monster Truck Madness 2';
fv85='Motocross Madness';
fv86='Motocross Madness 2';
fv87='Motorhead Server';
fv88='MSN Gaming Zone';
fv89='MSN Messenger';
fv90='Myth';
fv91='Myth II Server';
fv92='Myth: The Fallen Lords';
fv93='Need for Speed';
fv94='NetMech';
fv95='Network Time Protocol (NTP)';
fv96='News Server (NNTP)';
fv97='OKWeb';
fv98='OKWin';
fv99='Outlaws';
fv100='pcAnywhere v7.5';
fv101='PhoneFree';
fv102='Polycom ViaVideo H.323';
fv103='Polycom ViaVideo H.324';
fv104='Quake';
fv105='Quake II (Client and Server)';
fv106='Quake III';
fv107='Red Alert';
fv108='Rise of Rome';
fv109='Roger Wilco';
fv110='Rogue Spear';
fv111='Secure Shell Server (SSH)';
fv112='Secure Web Server (HTTPS)';
fv113='ShoutCast';
fv114='SNMP ';
fv115='SNMP Trap';
fv116='Speak Freely';
fv117='StarCraft';
fv118='Starfleet Command';
fv119='StarLancer';
fv120='SWAT3';
fv121='Telnet Server';
fv122='The 4th Coming';
fv123='Tiberian Sun: C&C ';
fv124='Tiberian Sun: C&C III"';
fv125='Total Annihilation';
fv126='Ultima';
fv127='Unreal Tournament';
fv128='Urban Assault';
fv129='VoxPhone 3.0 ';
fv130='Warbirds 2';
fv131='Web Server (HTTP)';
fv132='WebPhone 3.0';
fv133='Windows 2000 Terminal Server';
fv134='X Windows';
fv135='Yahoo Pager';
fv136='Yahoo Messenger Chat';
fv137='Pal Talk';
fv138='Real Player 8 Plus';
fv139='RealAudio';
fv140='Netmeeting 2.0, 3.0, Intel Video Phone';
fv141='Westwood Online ';
fv142='CuSeeMe ';
fv143='ICUII Client';
self_healing12='12:00 AM';
self_healing13='12:30 AM';
self_healing14='01:00 AM';
self_healing15='01:30 AM';
self_healing16='02:00 AM';
self_healing17='02:30 AM';
self_healing18='03:00 AM';
self_healing19='03:30 AM';
self_healing20='04:00 AM';
self_healing21='04:30 AM';
self_healing22='05:00 AM';
self_healing23='05:30 AM';
self_healing24='06:00 AM';
self_healing25='06:30 AM';
self_healing26='07:00 AM';
self_healing27='07:30 AM';
self_healing28='08:00 AM';
self_healing29='08:30 AM';
self_healing30='09:00 AM';
self_healing31='09:30 AM';
self_healing32='10:00 AM';
self_healing33='10:30 AM';
self_healing34='11:00 AM';
self_healing35='11:30 AM';
self_healing36='12:00 PM';
self_healing37='12:30 PM';
self_healing38='01:00 PM';
self_healing39='01:30 PM';
self_healing40='02:00 PM';
self_healing41='02:30 PM';
self_healing42='03:00 PM';
self_healing43='03:30 PM';
self_healing44='04:00 PM';
self_healing45='04:30 PM';
self_healing46='05:00 PM';
self_healing47='05:30 PM';
self_healing48='06:00 PM';
self_healing49='06:30 PM';
self_healing50='07:00 PM';
self_healing51='07:30 PM';
self_healing52='08:00 PM';
self_healing53='08:30 PM';
self_healing54='09:00 PM';
self_healing55='09:30 PM';
self_healing56='10:00 PM';
self_healing57='10:30 PM';
self_healing58='11:00 PM';
self_healing59='11:30 PM';
preal='long';
preas='short';
txon='ON';
txoff='OFF';
tx1='1 Antenna';
tx2='2 Antenna';
rx1='1 Antenna';
rx2='2 Antenna';
msdu_enable='Enable';
msdu_disable='Disable';
ht_on='ON';
ht_off='OFF';
wladvwarn1='This page is provided "as is" for special purposes.';
wladvwarn2='Using of this page is without any expressed or implied warranties and may destroy your settings.';
msg_wladv_rx='Invalid Number! Must between 1..256';
msg_wladv_tq='Invalid Number! Must between 1..1000';
msg_wladv_rtsthreshold='Invalid RTS Threshold! Must between 1..2347';
msg_wladv_fragthreshold='Invalid RTS Threshold! Must between 1..2346';
msg_wladv_beacon='Invalid Beacon Interval! Must between 20..999';
msg_wladv_dtim='Invalid DTIM Interval! Must between 1..255';
msg_wladv_agingtime='Invalid Aging Interval! Must between 60..86400';
PortService_None='None';
PortService_DNS='DNS';
PortService_Ping='Ping';
PortService_HTTP='HTTP';
PortService_HTTPS='HTTPS';
PortService_FTP='FTP';
PortService_POP3='POP3';
PortService_IMAP='IMAP';
PortService_SMTP='SMTP';
PortService_NNTP='NNTP';
PortService_Telnet='Telnet';
PortService_SNMP='SNMP';
PortService_TFTP='TFTP';
PortService_IKE='IKE';
PortService_User_Defined='User-Defined';
pro1_TCP='TCP';
pro1_UDP='UDP';
pro1_TCP_UDP='TCP&UDP';
pro1_ICMP='ICMP';
pro1_IGMP='IGMP';
pro1_None='None';
save_reboot_time=30;
restore_reboot_time=30;
upgrade_reboot_time=70;
normal_reboot_time=60;

// copy replaced strint here
function translate(key) {
	return langDictionary[key];
}

common_err2 = translate("317");
common_err3 = translate("318");
dyndns_err23 = translate("1384");
dyndns_err24 = translate("1369");
dyndns_err25 = translate("1383");
upgrade_err1 = translate("1386");
OK = translate("1398");
Cancel = translate("1399");
Close = translate("1298");
show33 = translate("32");
sm1 = translate("47");
btn1 = translate("48");
Dynamic = translate("690");
Static = translate("692");
PPPoE = translate("694");
PPTP = translate("696");
cff2 = translate("55");
cff3 = translate("56");
cff4 = translate("57");
d2 = translate("60");
d3 = translate("61");
d4 = translate("62");
fc2a = translate("64");
IP = translate("65");
Port = translate("66");
Type = translate("67");
BT = translate("68");
Day = translate("69");
Tm = translate("70");
Enable = translate("71");
BOTH = translate("72");
Always = translate("73");
Block = translate("74");
SUN = translate("75");
MON = translate("76");
TUE = translate("77");
WED = translate("78");
THU = translate("79");
FRI = translate("80");
SAT = translate("81");
PM = translate("82");
AM = translate("83");
EcoMode = translate("2401");
DisableEco = translate("2403");
EcoSu = translate("2370");
EcoMo = translate("2371");
EcoTu = translate("2372");
EcoWe = translate("2373");
EcoTh = translate("2374");
EcoFr = translate("2375");
EcoSa = translate("2376");
EcoExcept = translate("2404");
fcsm = translate("88");
fcrm = translate("86");
fcripm = translate("87");
fcnsm = translate("133");
fd3 = translate("91");
fd4 = translate("92");
fd5 = translate("93");
fd6 = translate("97");
fd7 = translate("95");
fd8 = translate("96");
fmc2 = translate("105");
fmc3 = translate("106");
fmc4 = translate("107");
fmc5 = translate("108");
fmc7 = translate("110");
fmc8 = translate("112");
Add = translate("277");
Added = translate("1758");
Del = translate("114");
fmcipm = translate("115");
fmn2 = translate("117");
fmn3 = translate("118");
Disable = translate("119");
fp2 = translate("121");
fp3 = translate("1076");
fs3 = translate("125");
Save = translate("126");
Clear = translate("127");
Refresh = translate("128");
System_log = translate("1302");
Firewall_log = translate("1303");
fvipm = translate("84");
fvipr = translate("132");
fvppr = translate("133");
fv2 = translate("134");
fv200 = translate("276");
Description = translate("278");
Inb = translate("279");
Type = translate("280");
Pipa = translate("281");
Pport = translate("282");
Enabled = translate("317");
Disabled = translate("318");
Auto = translate("1601");
str1 = translate("61");
str2 = translate("62");
DDNSDisable = translate("317");
DynDNS = translate("1307");
i5 = translate("gtBootLoader");
i7 = translate("gtSerial");
i9 = translate("327");
i12 = translate("332");
i13 = translate("333");
i14 = translate("334");
i17 = translate("337");
i18 = translate("338");
i19 = translate("339");
i20 = translate("rtFeature");
ld3 = translate("354");
ld4 = translate("355");
ld5 = translate("356");
ld6 = translate("357");
ls3 = translate("371");
ls4 = translate("372");
ls5 = translate("373");
On = translate("487");
Off = translate("488");
ls7 = translate("379");
ls8 = translate("380");
ls9 = translate("381");
ls10 = translate("382");
ls11 = translate("383");
ls12 = translate("384");
ls13 = translate("385");
ls14 = translate("386");
ls15 = translate("387");
ls16 = translate("388");
ls17 = translate("389");
ls18 = translate("390");
ls19 = translate("391");
ls20 = translate("392");
Optional = translate("393");
ls21 = translate("394");
lssm = translate("766");
lsnetm = translate("397");
lsendm = translate("398");
lspoolm = translate("399");
lsipm3 = translate("401");
lsipm4 = translate("403");
lsipalert = translate("404");
lsipc = translate("406");
lo1 = translate("3448");
lo2 = translate("408");
lo3 = translate("3452");
lo4 = translate("410");
Clear = translate("127");
Submit = translate("412");
lerror = translate("414");
ss1 = translate("2053");
rs4 = translate("419");
ugs1 = translate("2054");
rss1 = translate("422");
ufy1 = translate("34");
ufy3 = translate("426");
ufy5 = translate("428");
ufy = translate("429");
ufe2 = translate("431");
ufe3 = translate("432");
ufe4 = translate("433");
ufe5 = translate("434");
ufe6 = translate("435");
ufe7 = translate("436");
ufe8 = translate("437");
Update = translate("438");
ufe9 = translate("439");
ufe10 = translate("440");
ufe12 = translate("322");
pwd = translate("489");
Restore = translate("528");
uprev3 = translate("529");
uprev4 = translate("530");
uprev5 = translate("531");
ur3 = translate("32");
ur4 = translate("535");
Save = translate("126");
usys2 = translate("541");
usys3 = translate("542");
usys4 = translate("543");
usys5 = translate("544");
usys6 = translate("545");
usys7 = translate("546");
usys8 = translate("547");
usys9 = translate("548");
January = translate("549");
February = translate("1282");
March = translate("1283");
April = translate("1284");
May = translate("1285");
June = translate("1286");
July = translate("1287");
August = translate("1288");
September = translate("1289");
October = translate("1290");
November = translate("1291");
December = translate("1292");
usys10 = translate("550");
usys11 = translate("551");
usys12 = translate("2300");
usys13 = translate("2301");
usys14 = translate("2302");
usys15 = translate("2303");
usys16 = translate("2304");
usys17 = translate("2305");
usys18 = translate("2306");
usys19 = translate("2308");
usys19a = translate("2307");
usys20 = translate("2309");
usys21 = translate("2310");
usys22 = translate("2311");
usys23 = translate("2312");
usys24 = translate("2313");
usys25 = translate("2314");
usys26 = translate("2315");
usys27 = translate("2316");
usys28 = translate("2317");
usys29 = translate("2318");
usys30 = translate("2319");
usys31a = translate("2320");
usys32 = translate("2321");
usys33 = translate("2322");
usys34 = translate("2323");
usys35 = translate("2324");
usys36 = translate("2325");
usys37 = translate("2326");
usys38 = translate("2327");
usys39 = translate("2328");
usys40 = translate("2329");
usys41 = translate("2330");
usys42 = translate("2331");
usys43 = translate("2332");
usys43a = translate("2336");
usys44 = translate("2333");
usys45 = translate("2334");
usys46 = translate("2335");
usys48 = translate("2337");
usys50 = translate("2338");
usys50b = translate("2339");
usys51 = translate("2340");
usys52 = translate("2341");
usys53 = translate("2342");
usys53a = translate("2343");
usys54 = translate("2344");
usys55 = translate("2345");
usys56 = translate("2346");
usys57 = translate("2347");
usys58 = translate("2348");
usys58a = translate("2349");
usys96 = translate("2350");
usys59 = translate("2351");
usys60 = translate("2352");
usys61 = translate("2354");
usys62 = translate("2353");
usys63 = translate("2355");
usys64 = translate("2356");
usys65 = translate("2357");
usys97 = translate("2358");
usys66 = translate("606");
usys67 = translate("607");
printps = translate("629");
bakntps = translate("630");
usys68 = translate("608");
AF = translate("609");
usys69 = translate("610");
usys70 = translate("611");
usys71 = translate("612");
usys72 = translate("613");
usys76 = translate("617");
usys77 = translate("618");
usys78 = translate("619");
usys79 = translate("620");
usys80 = translate("621");
usys81 = translate("622");
usys82 = translate("623");
usys84_1 = translate("738");
usys85 = translate("626");
usys87 = translate("628");
usys91 = translate("640");
usysipm_1 = translate("395");
self_healing2 = translate("302");
self_healing3 = translate("303");
self_healing4 = translate("75");
self_healing5 = translate("76");
self_healing6 = translate("77");
self_healing7 = translate("78");
self_healing8 = translate("79");
self_healing9 = translate("80");
self_healing10 = translate("81");
self_healing11 = translate("304");
usysb1 = translate("542");
vjs14 = translate("659");
vjs35 = translate("1360");
vjs43 = translate("675");
dup = translate("60");
wcc3 = translate("690");
wcc4 = translate("691");
wcc5 = translate("692");
wcc6 = translate("693");
wcc7 = translate("694");
wcc8 = translate("695");
wcc9 = translate("696");
wcc10 = translate("697");
wcc11 = translate("698");
wcc12 = translate("699");
wcc12_a = translate("699");
Next = translate("700");
wds3 = translate("703");
wds3_1 = translate("703");
wds4 = translate("704");
wds5 = translate("705");
wds5_1 = translate("705");
wds6_1 = translate("706");
wdy2 = translate("709");
wdy3 = translate("710");
wdy4 = translate("711");
wdy5 = translate("712");
wmc3 = translate("716");
wmc4 = translate("717");
wmc5 = translate("718");
wdd3 = translate("1308");
wdd4 = translate("1309");
wdd5 = translate("1310");
wdd6 = translate("100");
wdd7 = translate("101");
wdd8 = translate("102");
WAN = translate("11");
wm3 = translate("722");
wm4 = translate("690");
wm4b = translate("723");
wm5 = translate("692");
wm5b = translate("724");
wm6 = translate("694");
wm6b = translate("725");
wm7 = translate("696");
wm7b = translate("726");
wpe2 = translate("730");
wpe3 = translate("731");
wpe4 = translate("732");
wpe5 = translate("733");
wpe6 = translate("734");
wpe7 = translate("735");
wpe8 = translate("736");
wpe9 = translate("737");
idlerangerro = translate("738");
pm_1 = translate("624");
wpe11 = translate("741");
wpe12 = translate("errUsernameEmpty");
wpp3 = translate("489");
wpp4 = translate("732");
wpp7 = translate("331");
wpp14 = translate("756");
wpp15 = translate("errorpwdEmpty");
wpp20 = translate("2005");
wpp21 = translate("1771");
wpp22 = translate("1772");
wppa2 = translate("744");
wppa3 = translate("745");
wppa4 = translate("746");
wppa5 = translate("747");
wppa8 = translate("750");
wppa10 = translate("736");
wppa11 = translate("737");
wppa12 = translate("2021");
wppa14 = translate("756");
wppa15 = translate("errorpwdEmpty");
wppa17 = translate("1773");
ws3 = translate("760");
ws4 = translate("761");
ws5 = translate("762");
ws7 = translate("2021");
sm = translate("766");
ws10 = translate("338");
wt1 = translate("771");
wlad1 = translate("778");
wlae1 = translate("780");
wlae2 = translate("781");
wlae3 = translate("404");
wlc3 = translate("788");
wlc4 = translate("789");
wlcwch = translate("1300");
wlc5 = translate("790");
wlc9 = translate("794");
wlc12 = translate("797");
wlc14 = translate("777");
wlc17 = translate("1301");
wle2 = translate("801");
wle2a = translate("318");
wle2b = translate("1296");
wle2c = translate("803");
wle2d = translate("804");
wle3 = translate("842");
wle7 = translate("806");
wps4 = translate("1320");
wps5 = translate("1321");
wps6 = translate("1322");
wps7 = translate("1323");
wps8 = translate("1324");
wps9 = translate("1325");
wps10 = translate("1326");
wps11 = translate("1327");
wps12 = translate("1328");
wps13 = translate("1329");
wps14 = translate("1330");
wps15 = translate("1331");
wps16 = translate("1332");
wps17_1 = translate("1333");
wps19 = translate("1392");
wps20 = translate("1335");
wps21 = translate("1395");
wps22 = translate("1336");
wps24 = translate("1337");
wps26 = translate("1338");
wps28 = translate("377");
wps31 = translate("1397");
wps32 = translate("1393");
wps33 = translate("1340");
wps_msg1 = translate("1623");
wps_msg2 = translate("1391");
wps_msg3 = translate("1390");
wps_msg4 = translate("1620");
wps_msg5 = translate("1363");
wps_msg6 = translate("1364");
wps_msg7 = translate("1366");
wps_msg8 = translate("1365");
wps_msg9 = translate("1622");
wps_msg10 = translate("1341");
wwmm4 = translate("1304");
wle8 = translate("807");
wle9 = translate("808");
wle10 = translate("809");
PP = translate("810");
generate = translate("811");
errm = translate("812");
keym = translate("813");
wle15 = translate("818");
keym1 = translate("821");
keym2 = translate("822");
wwp2 = translate("854");
wwp3 = translate("855");
wwp4 = translate("856");
wwp5 = translate("857");
wguest3 = translate("1613");
wpskerr1 = translate("852");
ww3 = translate("845");
wlmc2 = translate("897");
Allow = translate("898");
Deny = translate("1293");
wlmc3 = translate("902");
wlmc4 = translate("903");
ENTRY_FULL  = translate("905");
CLEAR_CONFIRM  = translate("906");
CLEAR_ALL_CONFIRM  = translate("907");
rs_file_error = translate("423");
msg_ddns1  = translate("errUsernameEmpty");
msg_ddns2  = translate("errPasswordEmpty");
msg_ddns4  = translate("50");
msg_wls_chan1  = translate("1201");
fw_update  = translate("1198");
show35a  = translate("429");
vs_null  = translate("1362");
msg_privateIP_invalid  = translate("1240");
acl_4 = translate("1762");
acl1 = translate("1733");
acl2 = translate("1731");
acl3 = translate("110");
acl4 = translate("320");
acl5 = translate("1734");
acl6 = translate("1599");
acl8 = translate("1757");
acl9 = translate("1761");
acl10 = translate("1735");
acl11 = translate("1765");
acl12 = translate("1766");
acl13 = translate("1743");
acl14 = translate("1744");
acl15 = translate("1746");
acl16 = translate("1747");
acl17 = translate("1748");
acl18 = translate("2375");
acl19 = translate("1753");
acl20 = translate("1592");
acl21 = translate("1593");
acl22 = translate("1764");
acl23 = translate("3205");
acl24 = translate("2615");
acl25 = translate("2616");
acl26 = translate("85");
acl27 = translate("2103");
acl28 = translate("2101");
acl29 = translate("2100");
member_setting = translate("1732");
Deny_All = translate("1760");
Index = translate("1738");
Services = translate("1736");
Port_Rang_List = translate("1739");
Blocked_Services = translate("1756");
Block_All_Services = translate("2341");
Allow_All_Services = translate("3240");
Blocking_Url = translate("1754");
Block_All_URLs = translate("3231");
Allow_All_URLs = translate("3230");
URL_Address = translate("1740");
Keyword = translate("1741");
Blocking_Keyword = translate("1755");
Connected_Client_List = translate("1730");
wguest4 = translate("2702");
wguest5 = translate("280");
wguest6 = translate("1828");
wguest7 = translate("1619");
wguest8 = translate("1829");
wguest9 = translate("1830");
wguest10 = translate("1335");
wguest11 = translate("1831");
wguest12 = translate("1617");
wguest13 = translate("1825");
wguest14 = translate("1827");
wguest15 = translate("1826");
wlguest3 = translate("1812");
wlguest4 = translate("1824");
wlguest5 = translate("1835");
wlguest6 = translate("1715");
wlguest7 = translate("1836");
wlguest8 = translate("1837");
wlguest9 = translate("1838");
wlguest10 = translate("1839");
wlguest11 = translate("1841");
wlguest12 = translate("1842");
wlguest13 = translate("1843");
wlguest14 = translate("1845");
wlguest15 = translate("1811");
wlguest16 = translate("1813");
wipv66 = translate("42");
show50 = translate("3472");
web_filter13 = translate("1864");
mf17 = translate("7126");
mf19 = translate("7123");
mf22 = translate("7113");
mf23 = translate("7118");
mf24 = translate("7119");
mf25 = translate("7120");
mf27 = translate("7112");
mf28 = translate("7106");
mf29 = translate("7103");
mf30 = translate("7124");
mf31 = translate("7108");
mf33 = translate("7125");
show52 = translate("7151");
qos_stats8 = translate("7160");
qos_stats9 = translate("7161");
qos_stats10 = translate("7162");
qos_stats11 = translate("7163");
qos_stats12 = translate("7164");
media_dlna1 = translate("3312");
media_dlna3 = translate("7001");
media_dlna4 = translate("7002");
media_dlna5 = translate("7003");
media_dlna6 = translate("7004");
media_dlna7 = translate("7005");
media_dlna8 = translate("7006");
media_dlna9 = translate("7007");
media_dlna10 = translate("7008");
media_dlna11 = translate("7009");
media_dlna12 = translate("7010");
media_dlna14 = translate("7016");
media_dlna16 = translate("7021");
media_dlna19 = translate("7012");
media_dlna20 = translate("7011");
media_dlna22 = translate("7022");

// copy new translated string here
common_err1 = '%s, NULL';
upgrade_err2 = 'Donanım yazılımı yükseltmesi yetersiz kaynaklar nedeniyle sonlandırılmıştır. Yükseltilemedi.\nLütfen sistem kullanılmadığında (İnternet trafiği olmadığında) tekrar deneyin';
upgrade_err3 = 'Yükleyemiyor, lütfen yöneticiyle iletişim kurun.';
upgrade_err4 = 'Donanım yazılımı çok büyük, yükseltemedi.';
upgrade_err5 = 'Zaten en son donanım yazılımı yüklü.';
upgrade_err6 = 'Donanım yazılımı güncellemesi bozuk gibi görünüyor. Lütfen donanım yazılımı dosyasını yeniden indirin ve tekrar deneyin.';
show10 = 'DHCP İstemci Listesi';
show54 = 'Bağlantı Ayarları';
btn2 = 'Değişiklikleri Uygula';
cff1 = 'Bellenim Başarıyla Kontrol Edildi';
PM2 = ':30 PM';
AM2 = ':30 AM';
Dimicons = 'Karartma simgeleri';
EcoTo = 'ila';
fvrm = 'Lütfen Uzaktan Yönetimi devre dışı bırakın. Çünkü portu sanal sunucularınızdan birinin giriş portuyla çakışmaktadır.';
lsipm2 = 'Geçersiz Lan IP adresi, son numara 0 veya 255 olamaz';
lsldnm = 'Geçersiz Yerel Alan Adı: `~!@#$%^&*()_+[]{}\|;:\'"<>/?.,';
lsipm5 = 'Seçtiğiniz IP adresi yönlendirilemez bir IP adresi olmalıdır.\n  192.168.x.x (burada x, 0 ile 255 arasında herhangi bir sayıdır.) \n10.x.x.x (burada x, 0 ile 255 arasında herhangi bir sayıdır.)\n172.y.x.x (burada y, 16 ile 31 arasında herhangi bir sayıdır ve x 0 ile 255 arasında herhangi bir sayıdır.)';
ufy4 = 'Varsayılan ayarların geri yüklenmesi 60 saniye kadar sürebilir. Bu işlem sırasında Yönlendiriciyi kapatmayın.';
ufe11 = 'Yükseltme işleminin sonunda, Yönlendirici 180 saniye kadar komutlara yanıt vermeyebilir. Bu normal bir durumdur. Bu sırada Yönlendiriciyi kapatmayın veya yeniden başlatmayın.';
ur5 = 'Yönlendiricinin yeniden başlatılması için 30 saniye kadar bekleyin. Sıfırlama işlemi tamamlanmadan önce Yönlendiriciyi kapatmayın.';
ur6 = 'Yönlendiricinin yeniden başlatılması için 60 saniye kadar bekleyin. Sıfırlama işlemi tamamlanmadan önce Yönlendiriciyi kapatmayın.';
usys83 = 'Yeni Şifre ve Yeni Şifreyi Onayla alanları eşleşmiyor';
usys83_1 = 'Şifre ve yeni şifreyi onayla alanı eşleşmiyor.';
usys85_1 = 'Yönetim şifresinin uzunluğu 1 ile 63 arasında olmalıdır.';
usys88 = 'Şifre maksimum uzunluğuna ulaştı!';
usys89 = 'AM';
usys90 = 'PM';
usys92 = 'Uzaktan erişim portu numarası 1 ila 65535 arasında olmalıdır.';
usysipm = 'IP numaralarının tümünü girmediniz veya girdiğiniz numaralardan bazıları geçersiz. IP adresi x.y.y.z şeklinde olmalıdır (burada x, 1 ile 223 arasında herhangi bir sayıdır, y 0 ile 255 ve z 1 ile 254 arasında herhangi bir sayıdır).';
self_healing60 = 'Self Healing';
chkwait = 'Daha yeni donanım yazılımı aranıyor...';
Europe = 'Avrupa';
Australia = 'Avustralya & NZ';
AsiaPacific = 'Asya Pasifik';
NorthAmerica = 'Kuzey Amerika';
vjs1 = 'Geçersiz IP adresi; çok uzun; Lütfen tekrar kontrol edin';
vjs2 = 'Geçersiz IP adresi; eksik \'.\' , Lütfen tekrar kontrol edin!';
vjs3 = 'Geçersiz IP adresi; \'.\' arasında eksik rakamlar var; Lütfen tekrar kontrol edin!';
vjs4 = 'Geçersiz IP adresi; fazladan \'.\' , Lütfen tekrar kontrol edin!';
vjs5 = 'Geçersiz IP adresi; \'.\' arasındaki rakamlar çok büyük; Lütfen tekrar kontrol edin!';
vm1 = 'Geçersiz Karakter ';
vm2 = ' Pozisyon: ';
vm3 = 'Şu olmalıdır: ';
vjs6 = 'Geçersiz yıl biçimi, lütfen (örn. 2002) olarak girin';
vm4 = 'Geçersiz numara ';
vjs8 = 'Geçersiz, 1970 ila 2037 arasında olmalıdır';
vjs9 = 'Geçersiz ay biçimi, lütfen (örn. 01...12) olarak girin';
vjs161 = ' şurada değil: ';
vjs162 = ' ağ maske';
vjs163 = 'İzin verilen DHCP aralığı ';
vjs17 = 'İki farklı şifre yazdınız, lütfen tekrar kontrol edin!';
vjs18 = 'Lütfen başlangıç port numarasını girin.';
vjs19 = 'Başlangıç port numarası bitiş port numarasından küçük olmalıdır.';
vjs23 = 'Geçersiz MAC adresi, yayın adresi.';
vjs24 = 'Geçersiz MAC adresi, boş adres.';
vjs25 = 'Geçersiz MAC adresi, çok noktaya yayın yapan adres.';
vjs26 = 'Geçersiz başlangıç ve bitiş IP adresi, bitiş IP adresi başlangıç IP adresinden büyük olmalıdır.';
vjs28 = 'Geçersiz ağ maskesi biçimi.';
vjs29 = 'Geçersiz biçim, ağ maske burada 255.255.255.0 veya 255.255.255.128 veya 255.255.255.192 veya 255.255.255.224 veya 255.255.255.240 veya 255.255.255.248 veya 255.255.255.252 veya 255.255.255.254 olmalıdır';
vjs30 = 'Geçersiz IP adresi, son numara 0 veya 255 olamaz';
vjs31 = 'Geçersiz Lan IP adresi, ilk numara 127 olamaz';
vjs32 = 'Geçersiz Lan IP adresi, 0.0.0.0 olamaz';
vjs33 = 'Geçersiz Lan Ip adresi, 224.0.0.0\'dan küçük olmalıdır';
vjs42 = 'Girdiğiniz alt ağ maskesi numaraları geçersiz.';
vjs45 = 'IP Adresini Belirtin';
vjs46 = 'geçersiz, lütfen önce bunu düzeltin!';
wcc2 = 'Bağlantı türünüzü seçin:';
wcc13 = 'L2TP';
wcc14 = '[Yalnızca İsrail]. Bu bağlantı türü İsrail\'de en yaygın olanıdır. ISP\'niz size özellikle L2TP kullandığınızı belirtmişse ve gerekli L2TP bilgilerini sağlamışsa, bu seçeneği kullanın.';
wds4_1 = 'Birincil DNS adresi';
wds7 = 'Otomatik DNS işlevini kullanmıyorsanız ISP\'niz tarafından sağlanan DNS ayarlarını girmelisiniz';
wds8 = 'DNS değişiklikleri yapmak için önce %s Web Sitesi Filtreleri %s öğesini ziyaret edin ve "Filtre yok" öğesini seçin.';
wmc6 = 'WAN MAC adresi LAN MAC adresiyle aynı olamaz. Lütfen başka bir tane seçin.';
wdd9  = 'DDNS Hizmeti seçilmedi.\n';
wdd10 = 'DDNS Hizmeti seçilmedi ve bu sayfadaki tüm veriler kaybedilecek, devam edilsin mi?';
wm10b = 'Sadece L2TP bağlantı yöntemi ile çalışan İSS\'ler ile kullanılır.';
pm = 'Hizmetiniz, girdiğiniz şifreyi doğrulayamadı. Lütfen şifrenizi doğru girdiğinizi onaylayın.';
wpp17 = 'L2TP Hesabı';
wpp18 = 'L2TP Şifresi';
wpp19 = 'Lütfen L2TP Hesabınızı girin';
wpp23 = 'IP Adresi Ataması';
wpp24 = 'Statik IP Adresi Kullan';
wpp25 = 'ISP\'den Dinamik Olarak Al';
wppa7 = 'IP Adresim';
wppa9 = 'Bağlantı kimliği (isteğe bağlı)';
wppa13 = 'Lütfen PPTP Hesabınızı girin';
wppa18 = 'Geçersiz Hizmet Adı.';
ws2 = 'Statik IP ayarlarınızı girmek için, bilgilerinizi aşağıya yazarak "Değişiklikleri uygula" düğmesini tıklatın.';
sm_1 = 'Girdiğiniz alt ağ maskesi geçersiz.';
ws8 = 'Lütfen, aşağıdaki ekranda DNS adresi ayarlarınızı girin/doğrulayın';
wt2 = 'Değişiklikleri Uygula düğmesinin tıklatılması yönlendiriciyi yeniden başlatacaktır. Yönlendirici yeniden başlatıldıktan sonra, aşağıda belirtilenleri yapmanız gerekir';
wt3 = '1) Kablo Modem ve Belkin Yönlendiricisinin elektrik kablosunu prizden çekin';
wt4 = '2) Kablo Modemin elektrik kablosunu geri takın, modemdeki tüm ışıkların yanıp sönmesi durana kadar bekleyin';
wt5 = '3) Belkin Yönlendiricinin elektrik kablosunu geri takın';
wt6 = 'Internet\'e başarıyla bağlandığınızı onaylamak için, Internet Explorer, Firefox ve Safari gibi bir internet tarayıcı açın ve web sayfalarını açabildiğinizden emin olun.';
wlad2 = 'Etkinleştir / Devre Dışı Bırak';
wlc2 = 'Yönlendiricinin kablosuz ayarlarını değiştirmek için, burada değişiklik yapın. Ayarları kaydetmek için "Değişiklikleri Uygula" düğmesini tıklatın.';
wlcgb = '802.11b+g';
wlcg = '802.11g';
wlcb = '802.11b';
wlc20 = '20MHz';
wlc22 = '20/40MHz';
wlc22a='20/40/80MHz';
wlcoff = 'KAPALI';
wlcngb1 = '802.11b & 802.11g & 1x1 802.11n';
wlcn1 = '1x1 802.11n';
wlcngb2 = '802.11b & 802.11g & 802.11n';
wlcn2 = '802.11n';
wlcgn = '802.11g+n';
wlca = '802.11a';
wlcan = '802.11a & 802.11n';
wlcnac='802.11n & 802.11ac';
wlcanac='802.11a & 802.11n & 802.11ac';
wlc26 = 'Ağ adınızı gizlemek WPS\'yi devre dışı bırakır.';
wlc27 = 'Güvenlik tipinizi WPS\'yi devre dışı bırakır.';
wlc28 = 'WPS <A href=%s><B>kablosuz güvenlik tipiniz</B></A> nedeniyle devre dışı.';
wlc29 = 'Ağ adınızı (SSID) gizlediğinizden WPS devre dışı.';
wlc30 = 'Ağ adınızı (SSID) gizlemeniz ve <A href=%s><B>kablosuz güvenlik tipiniz</B></A> nedeniyle WPS devre dışı.';
wlc31 = 'WPS\'yi açmak ağ adınızın (SSID) gizliliğini ortadan kaldırır.';
wlc32 = 'WPS\'yi açmak güvenlik tipinizi WPA/WPA2\'ye değiştirir. Geçerli ağ şifreniz iyi çalışıyor.';
wlc33 = 'WPS\'yi açmak ağ adınızın (SSID) gizliliğini ortadan kaldırır ve güvenlik tipinizi WPA/WPA2\'ye değiştirir. Geçerli ağ şifreniz iyi çalışıyor.';
wle3a = 'WPA-PSK';
wle3b = 'WPA2-PSK';
wle3c = 'WPA-PSK + WPA2-PSK';
wps1 = 'Wi-Fi Protected Setup (Wi-Fi Korumalı Kurulum - WPS)';
wps3 = 'Lütfen Kablosuz güvenliği yapılandırın';
wps17 = 'WPS olmayan istemci aygıtları için, lütfen CD\'den Belkin Güvenlik Yardımını çalıştırın veya aygıtı aşağıdaki ayarlarla manuel olarak yapılandırın:';
wps23 = 'WPA+WPA2-Personal (PSK)';
wps25 = 'TKIP+AES';
wps27 = 'Ağ Anahtarı (WEP):';
wps28_1 = 'NULL';
wle11 = 'Anahtar 1';
wle12 = 'Anahtar 2';
wle13 = 'Anahtar 3';
wle14 = 'Anahtar 4';
wpskerr2 = 'Anahtar 8 ile 63 karakter uzunluğunda olmalıdır ve boşluklar ve semboller ya da yalnızca 64 on altılık (0-F) basamaklar içerebilir!';
wpskerr4 = 'Misafir Anahtarı girmelisiniz';
wpskerr7 = 'Misafir Anahtarı 8 karakter olmalıdır';
wpskerr8 = 'Misafir Anahtarı Ağ Anahtarı ile aynı olmamalıdır';
wlguest1 = 'SSID, Misafir SSID\'si ile aynı olmamalıdır';
wlguest2 = 'Misafir SSID\'si, SSID ile aynı olmamalıdır';
rs_crc = 'Geri yükleme başarısız < CRC >';
rs_long = 'Geri yükleme başarısız <too long>';
rs_disposition = 'Geri yükleme başarısız <No Content-Disposition>';
rs_getpid = 'Geri yükleme başarısız <Can\'t get pid!>';
rs_unmatchpid = 'Geri yükleme başarısız <Unmatched pid>';
msg_ddns3  = 'Etki alanı adı alanları boş bırakılamaz.\n';
msg_lan_dhcp1  = 'Ağ geçidinden bilgi isteme.';
msg_lan_dhcp2  = 'Yapılandırma veritabanını güncelleme.';
msg_wan_stat1  = 'IP adresi ';
msg_wan_stat2  = ' ağda ';
msg_wan_stat3  = ' yok.';
msg_wls_chan2  = 'Misafir SSID\'si NULL olarak ayarlanamaz!\n';
fw_not_interrupt  = 'YÖNLENDİRİCİYİ DURDURMAYIN VEYA FİŞİNİ ÇEKMEYİN, aksi taktirde Yönlendirici arızalanabilir.';
msg_invalid_char  = 'Geçersiz karakter(ler) bulundu. Geçerli karakterler: 0-9, a-z, A-Z, `~!@#$%^&*()_-+=|\\{}[]:";\',.<>/?';
msg_invalid_domain_char  = 'Geçersiz Yerel Etki Alanı Adı'+': ~!@#$%^&*()=+{}[]|":;\\\'?/<>,`';
msg_invalid_char_1  = 'Geçersiz karakter(ler) bulundu. Geçerli karakterler harfler ve sayılardır. Şu semboller geçerlidir: `~!@#$%^&*()_+[]{}\\|;:\'"<>/?.,';
msg_hostIP_invalid  = 'Ana bilgisayar IP adresi geçersizdir. Yönlendiricinin LANIP\'si olmamalıdır.\n';
msg_dmzIP  = 'DMZ IP Adresi.';
msg_blank  = ' boş bırakılamaz.\n';
msg_space  = 'Boşluklara veya aralara %s\n içinde izin verilmez.';
msg_blank_in  = 'Boşluklara %s\n içinde izin verilmez.';
msg_allspaces  = '%s yalnızca boşluklardan oluşamaz\n';
msg_invalid  = '%s içinde geçersiz karakter veya karakterler\nGeçerli karakterler: \n%s\n\n';
msg_check_invalid  = '%s geçersiz bir sayı içeriyor\n';
msg_valid_range  = '%s geçersiz. Geçerli aralık:%s ile %s\n';
msg_invalid_mac  = 'Geçersiz MAC adresi.\n';
msg_multi_mac = 'MAC adresi çok noktaya yayın yapan adres olamaz.\n';
msg_confirmDefault  = 'Uyarı!\nFabrika Varsayılan Ayarlarını Yüklemek tüm geçerli ayarları siler.\nBunu yapmak istediğinizden emin misiniz?';
Allowed_Services = 'İzin Verilen Hizmetler';
Allowing_Url = 'URL Adresine Göre Web Sitesine İzin Verme ';
Allowing_Keyword = 'Anahtar Kelimeye Göre Web Sitesine İzin Verme';
wipv63 = 'Yönlendiricinize bağlı aygıtlar aslen IPv6 olan paketler kullanarak birbirleriyle iletişim kurabilirler. LAN üstündeki IPv6 paketleri otomatik olarak bütün LAN arayüzlerine (Ethernet bağlantı noktaları ve 2.4 Ghz ve 5 Ghz kablosuz ağlar) gönderilecektir.';
wipv64 = 'IPv6 düzgeçişi etkinleştirildiğinde, IPv6 paketleri WAN arayüzüne de kopyalanacaktır.(Etkinleştirildiğinde, bu, internete doğrudan, güvenli olmayan bir bağlantı oluşturur.)';
wipv65 = 'IPv6 destekleri konusunda bilgi almak için lütfen doğrudan ISS\'nız ile bağlantı kurun.';
wipv67 = 'Internet IPv6';
wipv68 = 'Ağınız IPv6 uyumlu.';
wipv69 = 'Düzgeçiş';
mf1 = 'Bu sayfalar belirli ortam trafiği tipleriyle sunulduğunda yönlendiricinizin hareketlerini ayarlamanızı sağlar.';
mf2 = 'Farklı trafik tipleri için internet bağlantınızı otomatik olarak optimize eder.';
mf3 = 'Yönlendiricinizin nasıl kullanıldığını görün.';
mf8 = '%s üzerinde kayıtlı';
mf10 = 'İndir';
mf11 = 'Yükle';
mf12 = 'Hız';
mf15 = 'Ayarları Uygula';
mf18 = '{0.1-%s} arasında bir numara girin.';
mf20 = 'Yalnızca {0.1-%s} arasında.';
mf26 = '%s üzerinde manuel kayıtlı';
mf32 = 'veya';
mf44 = 'Otomatik hız testi sonuçları internet trafiği veya diğer koşullara dayanarak %100 doğru olmayabilir. Sonuçları karşılaştırmak için, lütfen bir hız testi web sitesini ziyarete edin ya da internet hızlarınızı onaylamak için ISP\'niz ile iletişim kurun. Hız sonuçları tutarlı değilse, değerleri manuel olarak girebilirsiniz.';
media_dlna18 = 'Başlıksız';
media_dlna21 = 'Yönlendiricinizin indeksleyebileceğinden daha fazla ortama sahipsiniz bu nedenle ilk 12000 ögeye hizmet veriyoruz.';
errSubnetMaskInvalid_2 = 'Alt ağ maskesi bir alt ağ maskesine benzemiyor. Lütfen değeri kontrol edin.';

