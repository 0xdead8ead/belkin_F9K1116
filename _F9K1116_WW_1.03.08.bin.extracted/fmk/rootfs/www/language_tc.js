function dw(message)
{
	document.write(message);
}

common_err1=" %s is NULL";
common_err2="啟用";
common_err3="關閉";
dyndns_err1="無信息.";
dyndns_err2="這些字段不能為空";
dyndns_err3="IP地址是一樣的，不需要更新!";
dyndns_err4="使用者名稱,密碼或者主機名為空";
dyndns_err5="DNS訪問錯誤";
dyndns_err6="DNS服務錯誤";
dyndns_err7="DNS服務器無響應或 Internet無連接";
dyndns_err8="HTTP不能連接";
dyndns_err9="用戶名或者密碼錯誤";
dyndns_err10="更新成功";
dyndns_err11="更新成功";
dyndns_err12="請等待";
dyndns_err13="無主機域名";
dyndns_err14="主機名稱不存在：無主機名";
dyndns_err15="你不能管理主機";
dyndns_err16="阻止由於濫用：濫用";
dyndns_err17="DynDNS服務錯誤";
dyndns_err18="服務器關閉";
dyndns_err19="接受到未知的返回代碼!";
dyndns_err20="發生未知錯誤!";
dyndns_err21="無法打開HTTP";
dyndns_err22="WAN IP地址為空";
dyndns_err23='註冊失敗';
dyndns_err24='註冊';
dyndns_err25='登錄失敗';
dyndns_err26='連接失敗';
upgrade_err1="升級失敗。升級文件無效。請獲得正確的文件，並再次嘗試。";
upgrade_err2="固件升級終止因資源不足.更新失敗.\n 請當系統處於空閒狀態重試（沒有互聯網流量）";
upgrade_err3="Cannot upload, please contact administrator.";
upgrade_err4="Firmware is too large, upgrade failed.";
upgrade_err5="You already have the lastest firmware installed.";
upgrade_err6="固件更新已被損壞。請重新下載的固件文件，然後再試一次。";
upgrade_err7="無線客戶端無法升級固件。";
upgrade_err8="升级文件是無效或过小.\n更新失敗.\n請找到正確的文件重試。";
OK='確定';
Cancel='取消';
Close='關閉';
show0='路由器設定';
show1='首頁';
show2='協助';
show3='登入';
show4='登出';
show5='網路狀態';
show6='已連接';
show7='無連線';
show8='區域網路安裝';
show9='區域網路系統設定';
show10='DHCP用戶名單';
show11='廣域網路';
show12='連線狀態';
show13='DNS';
show14='媒體存取控制位址';
show15='DDNS';
show16='無線區域網路無法登入';
show17='無線';
show18='頻道與SSID';
show19='安全';
show20='設定為基地台';
show21='Wi-Fi 保護設定';
show22='媒體存取控制';
show23='無線橋接器';
show24='防火牆';
show25='虛擬伺服器';
show26='用戶端IP過濾功能';
show27='媒體存取控制位址過濾';
show28='非軍事區';
show29='WAN Ping阻擋';
show30='安全記錄';
show31='工具程式';
show33='重新啟動路由器';
show34='重新啟動基地台 ';
show35='恢復原廠設定值';
show36='存檔/備用';
show37='恢復之前的設定值';
show38='軟體設定';
show39='系統設定';
show42='EWC 設定';
show43='設定精靈';
show44='手動設定';
show47='存取控制';
//show48='自我修復';
show48='Self Healing';
show54='連接設置';
sm1='更多資訊';
btn1='清除變更';
btn2='使用變更';
btn3='網站';
btn4='重設到預設值';
btn5='Previous';
btn6='Routing Table';
btn7='Apply';
Router='路由器';
AP='AP';
Dynamic='動態';
Static='靜態';
PPPoE='PPPoE';
PPTP='PPTP';
L2TP='L2TP';
Multi_PPPoE='Multi-PPP over Ethernet';
UNKNOWN='UNKNOWN';
cff1='軟體檢查成功';
cff2='軟體資訊';
cff3='現在沒有可更新的軟體';
cff4='無法與軟體資訊伺服器連線，請確認WAN埠網路連接';
d1='Belkin 管理員';
d2='管理員';
d3='此裝置由xxx管理';
d4='現在';
fc1='防火牆 > 用戶IP過濾';
fc2a='此路由器可被設定為只在特定日期與時間存取網路、電子郵件或其他網路服務';
IP='網際網路協定';
Port='連接埠';
Type='類型';
BT='阻擋時間';
Day='日期';
Tm='時間';
Enable='開啟';
BOTH='兩者皆用';
Always='永遠啟用';
Block='阻擋';
SUN='>星期天';
MON='>星期一';
TUE='>星期二';
WED='>星期三';
THU='>星期四';
FRI='>星期五';
SAT='>星期六';
PM=':00 PM';
AM=':00 AM';
PM2=':30 PM';
AM2=':30 AM';
EcoMode='ECO 模式:';
Dimicons='減弱圖示';
DisableEco='停用來自以下方的無線通訊裝置';
EcoTo='至';
EcoSu='週日';
EcoMo='週一';
EcoTu='週二';
EcoWe='週三';
EcoTh='週四';
EcoFr='週五';
EcoSa='週六';
EcoExcept='除了';
fcsm='在此欄位中的數字應介於1到65535';
fcrm='後者連接埠範圍應大於前者';
fcripm='後者IP範圍應大於前者';
fcnsm='私人連接埠範圍不正確';
fcwdm='結束日必須在開始日之後';
fcdtm='在同一日之內, 這時間必須在開始時間之後';
fclanip='區域網路IP地址不可以在IP地址過濾範圍內';
fd1='防火牆 > 非軍事區';
fd2='非軍事區功能能讓您指定特定任一在您區域中的電腦被網路位址防火牆取代。如果網路位址發生問題，這項功能是必需的，由其當您使用電腦遊戲或是視訊會議時。若臨時狀況發生請使用此項功能。';
fd3='在此非軍事區的電腦並未受到駭客侵襲的保護';
fd4='請輸入IP位址的最後一位數字並選取『開啟』。點選『使用變更』使更改生效.';
fd5='虛擬非軍事區主機IP位址';
fd6='靜態IP  ';
fd7='私人IP';
fd8='開啟';
fmc1='防火牆 > 媒體存取控制位址過濾';
fmc2='此項功能能讓您設定準許用戶清單。當您啟用此項功能，您必須在您的網絡中輸入每一位使用者的媒體存取控制位址，這樣每一位使用者才能存取網絡中的資料';
fmc3='啟用媒體存取控制位址過濾';
fmc4='媒體存取控制位址過濾清單';
fmc5='阻擋';
fmc6='主機';
fmc7='媒體存取控制位址';
fmc8='此媒體存取控制位址已被加入';
fmc9='您只可以添加最多20個條目';
Add='加入';
Added='Added'
Del='刪除';
fmcipm='您可能未輸入全部的十六進位數字或是部份您所輸入的十六進位數字是不正確的。一個十六進位數字應為0至9或是A(a)至F(f)的字母';
fmn1='防火牆';
fmn2='您的路由器有一個可以保護您的網路被一般駭客入侵，包括Ping of Death(PoD)和Denial of Service (DoS)。如果需要的話您可以將防火牆關閉。雖然說將防火牆關閉不會讓您完全無法阻擋駭客的攻擊，但還是建議您盡量都開啟防火牆';
fmn3='防火牆啟用/關閉';
Disable='關閉 ';
fp1='Firewall > 阻擋WAN Ping';
fp2='進階設定功能 您可以設定不回應ICMP Ping(ping to the WAN連接埠)。這可以提高安全度';
fp3='阻擋ICMP Ping';
fs1='防火牆 > 安全記錄';
fs1b='工具設定 > 安全記錄';
fs2='此路由器保存所有登入與登出之記錄，以及所有網路上的攻擊，記錄可在下方查閱';
fs3='記錄檔案';
Save='存檔';
Clear='清除';
Refresh='重新整理';
System_log='系統記錄:';
Firewall_log='防火牆記錄:';
fv1='防火牆 > 虛擬伺服器';
fvipm='您可能尚未輸入所有IP位址，或是部份您所輸入的數字是不正確的。IP位址的數字應介於0至255之間。';
fvrm='請停用遠端管理因為它的連接埠與您的虛擬網路內傳連接埠相衝';
fvipr='內傳連接埠範圍不正確';
fvppr='私人連接埠範圍不正確';
fvippnm='內傳連接埠範圍不正確';
fv2='這項功能能夠讓您追蹤外部(網際網路)的服務連線，例如網路伺服器(連接埠80)，FTP伺服器(連接埠21)或其他應用程式藉由路由器到達您內部網絡的其他程式';
fv3='Active Worlds';
fv4='Age of Empires';
fv5='Age of Empires Expansion: The Rise of Rome';
fv6='Age of Empires II Expansion: The Conquerors';
fv7='Age of Empires II: The Age of Kings';
fv8='Age of Kings';
fv9='Age of Wonders';
fv10='Aliens vs. Predator';
fv11='Anarchy Online(BETA)';
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
fv22='CART Precision Racing';
fv23='Close Combat for Windows';
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
fv39='DirectX 7遊戲';
fv40='DirectX 8遊戲';
fv41='伺服器位址';
fv42='Doom';
fv43='Dune 2000';
fv44='Dwyco Video Conferencing';
fv45='Elite Force';
fv46='Everquest';
fv47='F-16';
fv48='F-22 Lightning 3';
fv49='F-22 Raptor';
fv50='F22 Raptor (Novalogic)';
fv51='Falcon 4.0';
fv52='Fighter Ace II';
fv53='Flight Simulator 2000';
fv54='Flight Simulator 98';
fv55='Freetel';
fv56='FTP伺服器';
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
fv73='Lotus Notes伺服器';
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
fv89='MSN遊戲區';
fv90='Myth';
fv91='Myth II Server';
fv92='Myth: The Fallen Lords';
fv93='Need for Speed';
fv94='NetMech';
fv95='NTP(Network Time Protocol )';
fv96='News Server(NNTP)';
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
fv114='SNMP';
fv115='SNMP Trap';
fv116='Speak Freely';
fv117='StarCraft';
fv118='Starfleet Command';
fv119='StarLancer';
fv120='SWAT3';
fv121='Telnet伺服器';
fv122='The 4th Coming';
fv123='Tiberian Sun: C&C';
fv124='Tiberian Sun: C&C III"';
fv125='Total Annihilation';
fv126='Ultima';
fv127='Unreal Tournament';
fv128='Urban Assault';
fv129='VoxPhone 3.0';
fv130='Warbirds 2';
fv131='網路伺服器(HTTP)';
fv132='WebPhone 3.0';
fv133='Windows 2000 Terminal Server';
fv134='X Windows';
fv135='Yahoo Pager';
fv136='Yahoo即時通訊';
fv137='Pal Talk';
fv138='Real Player 8 Plus';
fv139='RealAudio';
fv140='Netmeeting 2.0, 3.0, Intel Video Phone';
fv141='Westwood Online';
fv142='CuSeeMe';
fv143='ICUII Client';
fv200='清除記錄';
Description='說明';
Inb='內傳連接埠';
Type='類型';
Pipa='私人IP位址';
Pport='私人連接埠';
htop='回到最前面';
h1='協助';
h2='名詞解釋';
h3='<b>管理員</b> 管理員可提供網路維護服務。對此路由器而言，管理者可更改路由器設定';
h4='<b>用戶</b> 指在此網路上之電腦，其可使用路由器所提供的功能，例如自動DHCP伺服器及防火牆';
d5='<b>DDNS</b> 動態DNS服務是一項提供虛擬伺服器的服務.此服務讓使用者用虛擬伺服器的網路名稱代替IP地址.當與虛擬伺服器功能(或非軍事區功能)相結合時,動態DNS服務將對您更加適用.';
h5='<b>主機通訊協定組態</b> 此通訊協定可自動將每一台電腦中的TCP/IP組態';
h6='<b>撥號連線</b> 使用公用電話網路連接';
h7='路由器中的虛擬區域並不受到路由器防火牆的保護。在同一時間內，只有一台電腦可以放在非軍事區中。';
h8='<b>網域名稱系統伺服器位址</b> DNS意指網域名稱系統，可使網路電腦主機享有一網域名稱(例如:belkin.com)以及一個或更多IP位址(例如:192.34.45.8)。一個DNS伺服器可保有主機電腦的資料庫, 網域名稱及IP位址，故當您需要一個網域名稱時，使用者可以得到一個正確的IP位址。家用網路的電腦所使用之DNS伺服器位址位於您網際網路服務供應商所指定的DNS伺服器';
h9='<b>數位用戶專線數據機</b>  DSL意指數位用戶專線，一個DSL數據機是用您現有的電話線以高速來傳送資料。';
h10='<b>動態IP</b>  即指一個自動由DHCP伺服器上獲得的IP位址';
h11='<b>乙太網路</b> 這是電腦網路使用的標準 乙太網路是透過訊號線和特殊集線器進行連接，傳送資料的速度可高達每秒1000萬bits';
h12='<b>防火牆</b> 防火牆意指一道電子牆，可以阻擋未經授權的使用者存取特定檔案或在網絡中的電腦';
h13='軔體意指安裝在記憶體中的軟體。必要的程式將會持續運作儘管系統已經關閉。軔體比硬體容易更動但比儲存在磁片上的軟體來得穩定';
h14='<b>IP位址</b> 意指網際網路協定  一個IP位址是由四組以句點分開的數字所組成，可用來標示一個網際網路的電腦主機，例如:192.34.45.8';
h15='<b>整體服務數位網路</b>  數位傳輸線可以同時傳送聲音、影像等資訊高達128K，比一般高速類比訊號數據機的更快更穩定。許多電信公司都提供ISDN傳輸線';
h16='<b>網際網路服務供應商</b> ISP就是可以讓個人、企業或組織連接到網際網路的公司';
h17='<b>ISP閘道位址</b> (參照ISP說明) ISP閘道位置是給網際網路路由器的IP位址，只有在使用有線或DSL數據機時，才需要使用這個位址';
h18='<b>區域網路</b> LAN就是一群在相對而言較小的區域內(例如:家裡或辦公室內)相互連接在一起的電腦和裝置。您家中的網路就是一個LAN';
h19='<b>MAC位址</b> MAC意指媒體存取控制。媒體存取控制位址就是連接到網路之裝置的硬體位址';
h20='<b>MTU指最大傳輸單元</b>  即每次傳輸資料的最大值';
h21='<b>網路位置轉換</b>  此流程可讓您家中的所有電腦共享一個IP位址，這樣您就可以透過家中網路的任何一部電腦存取網際網路上的資料，而無需向ISP購買其他的IP位址';
h22='<b>連接埠</b> 一個特定的頻道是介由特定的連接埠號碼所定義。';
h23='<b>乙太網路使用的點對電協定</b>  點對點協定是一種安全的資料傳輸方法，最早是用於撥接連線。PPPoE是用於乙太網路';
h24='<b>點對點通訊協定</b>  它是PPP(點對點通訊協定)的一種，可以將一個通訊協定壓縮的許多檔案並且讓另一個通訊協定使用。這種通訊科技可讓TCP/IP資料在非TCP/IP網絡上傳輸。PPTP可讓您利用網路當成媒介去加入不同的網絡';
h25='<b>簡易網路時間通訊協定</b>  可以讓您的路由器與系統的時間顯示一致';
h26='<b>動態封包狀態偵測</b>  SPI防火牆是一種由您家用的網絡閘道提供的企業用戶級網路安全保護。使用SPI，閘道即可像防火牆一樣保護您的網絡不受駭客侵襲';
h27='<b>靜態IP</b> 意指由手動組態且不會改變的IP';
h28='<b>子網路遮罩</b> 子網路遮罩可為您的網際網路服務供應商所提供的資訊，是由四組很類似IP位址的數字所組成。用來建立使用在特定網絡的IP位址(相反於可被網路辨識的IP位址，其必需被Inter電腦網路介面卡指定。';
h29='<b>傳輸控制協定</b> 這是最常被使用的傳輸協定 TCP是連線性與不中斷性，故其可以提供穩定的傳輸與';
h30='<b>傳輸控制協定/網際網路協定</b> 這是透過網路資料傳輸的標準';
h31='<b>網路終端機協定</b> 網際網絡的通訊協定、從一台電腦傳送一個終端機訊息到另外一台正在運作應用程式的電腦。不像是TCP，UDP是透過無線傳輸模式而能保證絕對穩定的傳輸，這個應用程式本身必須偵測所有錯誤並檢查可靠的傳送';
h32='<b>廣域網路</b>  一系列彼此相連的LAN，連接許多位於不同地點(例如:不同建築物、城市、國家)網際網路就是一個廣域網路';
h33='<b>廣域網路IP位址</b> 此IP位址由ISP的路由器指定';
h34='<b>無線區域網路</b>  一個透過無線的方式連接許多電腦的區域網路';
h35="<b>L2TP</b> 第二層通訊協定, 是點對點通訊協定的伸展。它讓網際網路供應商操控虛擬私人網路。L2TP融合了微軟的PPTP和思科系統的L2F通訊協定。跟PPTP一樣, L2TP要求網際網路供應的路由器支援此通訊協定。";
h39='<b>DHCP</b> 動態主機組態協定伺服器可以讓設定網路非常簡易，您只要替網絡中的每一個電腦指派一個IP位址。如果有需要您可以關閉DHCP伺服器。您需要替網絡中的每一台電腦手動設定一個靜態IP位址來關閉DHCP伺服器。IP位址的範圍應該，數值應介於2-100(99台電腦)，如果您要更改這個數字，您可以輸入一組新的開始與結束數字，然後選取"應用更改值"';
Enabled='啟用';
Disabled='關閉';
Auto='自動';
str1='此裝置由xxx管理 ';
str2=' 現在';
DDNSDisable='關閉';
DynDNS='DynDNS';
DtDNS='DtDNS';
Current='現在的頻道';
i1='設定首頁';
i2='狀態';
i3='版本資訊';
i4='軟體版本';
i5='創始版';
i6='硬體';
i7='序號';
i8='區域網路設定';
i9='區域網路/無線區域網路 媒體存取控制';
i9a='區域網路 媒體存取控制';
i9b='無線區域網路無法登入';
i10='IP位址';
i11='子網路遮罩';
i12='DHCP伺服器';
NoClients='無客戶端';
Clients='客户';
i13='網際網路設定';
i14='廣域網路 媒體存取控制設定';
i15='連線狀態';
i16='子網路遮罩';
i17='Wan IP';
i18='設定值閘道';
i19='DNS位址';
i20='特性';
i21='網路位址轉換';
i22='防火牆設定';
i23='SSID';
i24='安全';
i25='印表機';
i26='(啟用/關閉)';
i27='在更動任何設定前，您必須先登入';
i28='語言';
i29='當前語言';
i30='可使用的語言';
i31='靜態IP';
i32='無線 關閉 ';
ld1='區域網路 > DHCP';
ld2='區域網路 > DHCP用戶名單';
ld3='此頁顯示您網絡中每一台電腦的IP位址、主機名稱與媒體存取控制位址。如果電腦沒有特定的主機名稱，可將主機名稱欄位留白。請按"重新整理"來重新整理清單';
ld4='IP位址';
ld5='主機名稱';
ld6='媒體存取控制位址';
lm1='區域網路';
lm2='您的路由器是由動態主機組態協定指定您網絡中每一台電腦的IP位址，DHCP伺服器運作時大部份時間會使用原廠設定值，若您需要更動，可以隨時更改';
lm3='您所能更改的設定為: ';
lm4='更改路由器的IP位址，預設值為192.168.2.1';
lm5='更改子網路遮罩位址，預設值為255.255.255.0';
lm6='開啟/關閉DHCP伺服器功能，預設值為開啟';
lm7='指定開始與末尾IP位址清單。開始預設值為2，末端為100 ';
lm8='指定一個IP位址租賃時間';
lm9='指定一個當地的網域名稱';
lm10='若需更改設定，請選在左邊LAN tab鍵的LAN Settings';
lm11='路由器提出您一個能連接到電腦的用戶清單。要檢視此清單，請按LAN鍵旁的"DHCP用戶清單"';
ls1='區域網路/區域網路設定';
ls2='您可以在此更改區域網路的設定。若要更改生效，請選取"套用變更"';
ls3='IP位址';
ls4='子網路遮罩';
ls5='DHCP伺服器';
On='開啟';
Off='關閉';
ls6='DHCP伺服器能簡易地透過指定網絡中的每台電腦一個IP位址';
ls7='IP位址開始數字';
ls8='IP位址結束數字';
ls9='租賃時間';
ls10='永遠';
ls11='半小時';
ls12='一小時';
ls13='兩小時';
ls14='半天';
ls15='一天';
ls16='兩天';
ls17='一週';
ls18='兩週';
ls19='DHCP伺服器能夠為每台電腦在特定的時間內預留特定的IP位址';
ls20='區域名稱';
Optional='選用項目';
ls21='讓您為您的網絡命名';
lssm='您所輸入的子網路遮罩名稱是不正確的';
lsnetm='IP位址值應與IP閘道位址一樣位於一樣的子網路中';
lsendm='最後的IP位址必須大於開始的IP位址';
lspoolm='區域網路的IP位址不能來自於DHCP位址的清單';
lsipm2='不正確的IP位址，最後一個數字不可為0或255';
lsipm3='不正確的IP位址，最後一個數字不可為127或0';
lsldnm='不正確的網域名稱: `~!@#$%^&*()_+[]{}\\|;:\'"<>/?.,';
lsipm4='您所輸入的IP名稱是不正確的';
lsipalert='請手動更改瀏覽器中的狀態';
lsipm5='您所選的IP位址應為non-routable，IP.\n  192.168.x.x (x可以介於0和255.) \n10.x.x.x (x可以介於0和255.)\n172.y.x.x (y可為介於16和31的任何數字, 而且x 可介於0和255.)';
lsipc='您確定要更改區域網路的IP位址嗎? ';
lo1='登入';
lo2='在您做出任何更改前，您需要用一個密碼登入。如果您尚未設定您個人的密碼，請將此欄留白然後選取';
lo3='密碼';
lo4='預設值 = 留白';
Clear='清除';
Submit='傳送';
le1='Belkin 登入錯誤';
lerror='登入錯誤';
Utilities='工具程式 > ';
ss1='成功變更設定';
rs1='重新啟定成功';
rs3='路由器正重新啟動中';
rs4='所剩秒數';
ugs1='更新軟體成功';
rf1='恢復設定值成功';
rss1='恢復設定成功';
ufy1='恢復系統設定值';
ufy2='使用此選項可以將所有設定恢復為原廠設定值。我們建議您在恢復所有預設值前，請先儲存您的設定值。若要恢復原廠設定值，請按下方的"恢復預設值"鍵';
ufy3='警告: 您所有的設定都會消失，您確定要繼續嗎?';
ufy4='恢復預設值需要60秒的時間。請不要在過程中關閉電源';
ufy5='將不會恢復原廠預設值。沒有任何設定會消失。';
ufy='恢復預設值';
ufe1='軔體更新';
ufe2='有時貝爾金會發行新版本的軟體。更新版的軟體包含了可以修改現有問題的資訊。請按下方按鍵檢視是否有新的軟體更新版本';
ufe3='注意: 在更新軟體版本前，請先儲存您現在的設定';
ufe4='請按此';
ufe5='到這裡儲存/備用現在的設定';
ufe6='按此獲得新軟體版本';
ufe7='確認軟體';
ufe8='更新軟體';
Update='更新';
ufe9='請指定更新檔案的位置。請輸入檔案路徑和檔案名稱。按"瀏覽"來尋找檔案位置';
ufe10='您確定您要繼續更新嗎? ';
ufe11='在升級的最後，路由器大約在180秒內暫時不會有回應。這是很正常的現象，請不要關閉電源或重新啟動';
ufe12='軟體版本';
um1='這個螢幕能讓您使得不同的參數與特定的管理功能運作';
um5='重新啟動路由器';
um6='有時後不一定需要重新啟動路由器。當路由器開始不正常運作時，重新啟動不會刪除任何您的組態設定';
um7='恢復原廠設定值';
um8='選用此選項能讓您將所有設定恢復為原廠設定值。我們建議您先備份您的設定再恢復所有預設值';
um9='儲存/備份現在設定';
um10='您可使用此功能儲存您目前的組態設定。儲存您的組態設定可以讓您在稍後更改或不小心遺失時恢復。我們建議您在軟體更新前先備份您的組態設定';
um11='恢復先前儲存設定';
um12='此選項能讓您恢復先前所儲存的組態設定';
um13='軟體設定';
um14='有時貝爾金會發行新版本的軟體。更新版的軟體包含了可以修改現有問題的資訊。';
um15='系統設定';
um16='您可以在系統設定頁面設定管理者密碼';
um17='，設定時區，開啟遠端管理並開啟或關閉NAT運作能力';
um18=' of the Router.';
not='否';
pwd='密碼';
uprev1='工具設定 > 恢復之前儲存的設定';
uprev2='此選項能讓您恢復先前所儲存的組態設定';
Restore='恢復';
uprev3='輸入含有備份設定的檔案名稱';
uprev4='您要繼續恢復設定嗎? ';
uprev5='在恢復設定後，路由器可能在60秒鐘內暫時不會有回應，這是很正常的現象，請勿關閉路由器電源';
ueco1='Utilities > Eco settings';
ueco2='ECO is a mode about "energy saving" mode';
ur1='工具設定 > 恢復路由器';
ur2='當路由器開始不正常運作時，有時候您可能必須重新啟動路由器。重新啟動並不會使您的組態設定值消失，請按下方按鍵重新啟動';
ur3='重新啟動路由器';
ur4='您確定要重新啟動嗎? 重新啟動不會影響您的電腦組態';
ur5='路由器需要30秒的時間重新啟動。在重新啟動完成前請勿將電源關閉';
ur6='路由器需要60秒的時間重新啟動。在重新啟動完成前請勿將電源關閉';
usave1='儲存/備用現在的使用值';
usave2='您可使用此功能儲存您目前的組態設定。儲存您的組態設定可以讓您在稍後更改或不小心遺失時恢復。我們建議您在軟體更新前先備份您的組態設定';
Save='存檔';
usys1='系統設定';
usys2='管理者密碼';
usys3='此路由器並未設定任何密碼，為了確保安全，您可以在此設定一組密碼';
usys4='輸入現在使用的密碼';
usys5='輸入新的密碼';
usys6='確認新的密碼';
usys7='超過登入時間';
usys8='1-99分鐘';
usys9='時間與時區';
January='一月';
February='二月';
March='三月';
April='四月';
May='五月';
June='六月';
July='七月';
August='八月';
September='九月';
October='十月';
November='十一月';
December='十二月';
usys10='請設定您所在的時區。如果您在節約日光區(指在夏季把標準時間撥早1小時的區域)，請按此處';
usys11='時區';
usys12='(GMT-12:00) 瓜加林島 ';
usys13='(GMT-11:00) 薩摩亞';
usys14='(GMT-10:00) 夏威夷';
usys15='(GMT-09:00) 美國阿拉斯加州';
usys16='(GMT-08:00) 太平洋時區(美國與加拿大) ';
usys17='(GMT-07:00) 美國亞歷桑那州';
usys18='(GMT-07:00) 美國與加拿大山區，新墨西哥 ';
usys19='(GMT-06:00) 墨西哥';
usys19a='(GMT-06:00) 美國與加拿大中部，芝加哥  ';
usys20='(GMT-06:00) 德古斯加巴(宏都拉斯首都 ';;
usys21='(GMT-06:00) 薩克斯其萬省';
usys22='(GMT-05:00) 利馬(秘魯首都)';
usys23='(GMT-05:00) 美國與加拿大東部';
usys24='(GMT-05:00) 美國印第安納州';
usys25='(GMT-04:00) 大西洋(加拿大) ';
usys26='(GMT-04:00) 卡拉卡斯(委內瑞拉首都)，拉巴斯(玻利維亞之首都) ';
usys27='(GMT-04:00) 聖地牙哥(智利首都)';
usys28='(GMT-03:00) 紐芬蘭 ';
usys29='(GMT-03:00) 巴西';
usys30='(GMT-03:00)布宜諾斯艾利斯(阿根廷首都)，喬治城(南美蓋亞那共和國首都)';
usys31a='(GMT-02:00) 大西洋中部';
usys32='(GMT-01:00) 亞速爾群島';
usys33='(GMT) 卡薩布蘭卡市(摩洛哥海濱)，蒙羅維亞(賴比瑞亞首都)';
usys34='(GMT) 格林威治時間：里斯本、倫敦、愛丁堡 ';
usys35='(GMT) 格林威治時間：都伯林 ';
usys36='(GMT+01:00) 阿姆斯特丹、柏林、伯恩、羅馬 ';
usys37='(GMT+01:00) 斯德哥爾摩、維也納、貝爾格勒(南斯拉夫首都) ';
usys38='(GMT+01:00) 伯拉第斯拉瓦(捷克)、布達佩斯(匈牙利首都)、盧布爾雅那(斯洛維尼亞共和國首都) ';
usys39='(GMT+01:00) 布拉格、布魯塞、哥本哈根、馬德里 ';
usys40='(GMT+01:00) 巴黎、塞拉耶佛(玻茲尼亞澤哥維那共和國首都)、史可普列(馬其頓共和國首都) ';
usys41='(GMT+01:00) 札格拉布(克羅埃西亞共和國首都)';
usys42='(GMT+02:00) 雅典、伊斯坦堡、明斯克(白俄羅斯首都)、維爾紐斯(立陶宛共和國首都)、華沙(波蘭首都)';
usys43='(GMT+02:00) 布加勒斯特(羅馬尼亞首都)';
usys43a='(GMT+02:00) 以色列';
usys44='(GMT+02:00) 開羅';
usys45='(GMT+02:00) 普利托里亞(南非行政首都)';
usys46='(GMT+02:00) 赫爾辛基、里加(拉脫維亞共和國首都)、 塔林(愛沙尼亞共和國首都)';
usys48='(GMT+03:00) 巴格達(伊拉克首都)、科威特、奈洛比(肯亞共和國首都)、利雅德(沙烏地阿拉伯) ';
usys50='(GMT+03:00) 莫斯科(俄羅斯首都)';
usys50b='(GMT+03:30) 德黑蘭(伊朗首都) ';
usys51='(GMT+04:00) 阿布達比、馬斯喀特 ';
usys52='(GMT+04:30) 喀布爾 ';
usys53='(GMT+05:00) 伊斯蘭馬巴德(巴基斯坦首都)、喀拉蚩港市(巴基斯坦)';
usys53a='(GMT+05:30) 欽奈，加爾各答，孟買，新德里 ';
usys54='(GMT+06:00) 阿拉木圖、達卡(孟加拉首都) ';
usys55='(GMT+07:00) 曼谷、雅加達、河內';
usys56='(GMT+08:00) 北京、重慶、烏魯木齊 ';
usys57='(GMT+08:00) 香港、柏斯、新加坡、台北 ';
usys58='(GMT+09:00) 東京、大阪、札幌 ';
usys58a='(GMT+09:00) 首爾 ';
usys96='(GMT+09:30) 阿德萊德，達爾文 ';
usys59='(GMT+10:00) 布里斯本';
usys60='(GMT+10:00) 坎培拉、墨爾本、雪梨';
usys61='(GMT+10:00) 關島、莫爾斯貝港';
usys62='(GMT+10:00) 哈伯特';
usys63='(GMT+11:00) 馬喀丹州(俄羅斯)、新喀里多尼亞';
usys64='(GMT+12:00) 威靈頓、奧克蘭 ';
usys65='(GMT+12:00) 斐濟、堪察加、馬歇爾群島 ';
usys97='(GMT+13:00) 努庫阿洛法 ';
usys66='日光節約';
usys67='自動調整到節約日光時區';
printps='先前的NTP伺服器';
bakntps='存檔NTP伺服器';
usys68='遠端管理';
AF='進階功能';
usys69='遙控管理能讓您從網路上的任何地方更改路由器的設定，在您開啟此功能前';
usys70='請確認您已設定管理者密碼';
usys71='任何IP位址皆可被路由器遠端管理';
usys72='只有此IP位址可被路由器遙控操作';
usys73='NAT啟用';
usys74='能讓您關閉Network Address Translation功能，在大多數的狀況裡您最好不要將此功能關閉';
usys75='NAT啟用/關閉';

usys76='UPnP(通用隨插即播)開啟中';
usys77='能讓您開啟或關閉UPnP功能。如果您使用此項功能來支援UPnP，開啟UPnP能讓這些應用程式自動安裝到路由器';
usys78='UPnP開啟/關閉';
usys79='開啟自動更新軟體';
usys80='讓您自動檢查路由器軟體更新';
usys81='自動更新軟體開啟/關閉';
usys82='當前密碼不可用';
usys83='新的密碼與更新後的密碼不同';
usys83_1='密碼/確認密碼不匹配';
usys84='你輸入的數字不正確，請輸入1-99之間的數字';
usys84_1='空閒時間的號碼值是無效。數量是1-99之間的整數。';
usys85='密碼長度不正確，最長3個數字，最短12個';
usys85_1='管理密碼長度應該在1至63字';
usysntp='兩個網路時間通訊協定伺服器IP地址不能相同';
usys86='請手動更改狀態欄的位址輸入欄為預設lan位址';
usys87='我們強烈建議您設定管理者密碼';
usys88='密碼已是最多位元!';
usys89='上午';
usys90='下午';
usys91='存取連接埠';
usys92='存取連接埠不正確。正確連接埠應在1至65535';
usys93='使用此功能以節省電源。';

usys94='IGMP Proxy';
usys95='IGMP Proxy 開啟/關閉';
usysipm='您可能未輸入所有的IP位址號碼或是部份您所輸入的號碼是不正確的。這些號碼應如 x.y.y.x (y 於0至255; x於1至254)';
usysipm_1='輸入IP號碼是無效的。數應為0到255';
self_healing='健康>定期檢修';
self_healing1='定期路由器重新初始化有助於保持一個更加自由的網絡問題。';
self_healing2='我的路由器自動初始化';
self_healing3='設日期';
self_healing4='星期天';
self_healing5='星期一';
self_healing6='星期二';
self_healing7='星期三';
self_healing8='星期四';
self_healing9='星期五';
self_healing10='星期六';
self_healing11='設時間';
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
//self_healing60='自我修復';
self_healing60='Self Healing';
chkwait='檢查新固件...';
Europe='歐洲';
Australia='澳洲 & 紐西蘭 ';
AsiaPacific='亞太地區';
NorthAmerica='北美';
wrhtpsswd='<b>Incorrect Password</b><br>Please confirm your password and try again.';
usysb1='此路由器並未設定任何密碼，為了確保安全，您可以在此設定一組密碼';
vjs1='不正確的IP位址，IP位址過長，請再次確認';
vjs2='不正確的IP位址，少了xxx，請再次確認';
vjs3='不正確的IP位址，在XX之間少了一些號碼，請再次確認';
vjs4="不正確的IP位址，有多餘的.，請再次確認";
vjs5='不正確的IP位址，在XX之間的號碼過長，請再次確認';
vm1='不正確的字元';
vm2='在位址';
vm3='務必為';
vjs6='不正確的年份格式，請輸入為(例如:2002)';
vm4='不正確的號碼';
vjs8='不正確，必需介於1970..2037 ';
vjs9='不正確的月份格式，請輸入01...12';
vjs10='請先輸入年份與月份';
vjs11='不正確的日期格式，請輸入01...31，某些月份可能只有00..28';
vjs12='不正確的小時格式，請輸入00...23';
vjs13='不正確的分鐘格式，請輸入00…59';
vjs14='無效的MTU，必須介於500…1500';
vjs15='不正確的MRU值，其需介於128…65535 ';
vjs16="Invalid Ip: ";
vjs161=" not in ";
vjs162=" netmask";
vjs163='允許DHCP範圍';
vjs17='您輸入兩組不一樣的密碼，請再次確認';
vjs18='請輸入開始連接埠的數值';
vjs19='開始連接埠的數值應小於最終連接埠的數值';
vjs20='不正確的連接埠數值，連接埠數值應為一正整數';
vjs21='不正確的長度';
vjs22='Invalid Format at position ';
vjs23='不正確的媒體存取控制位址，其為一';
vjs24='不正確的媒體存取控制位址，其為零。';
vjs25='不正確的媒體存取控制位址，其為廣播位址';
vjs26='不正確的開頭或末尾IP位址，末尾IP位址應大於開頭IP位址';
vjs27='不正確的號碼 必須介於1到65535';
vjs28='不正確的網路遮罩格式';
vjs29='不正確的格式，';
vjs30='不正確的IP位址，其最後一碼不能為0或255';
vjs31='不正確的區域網路IP位址，其第一碼不能為127';
vjs32='不正確的區域網路IP位址，其不能為0.0.0.0';
vjs33='不正確的區域網路IP位址，其必需低於224.0.0.0';
vjs34='正確的範圍是';
vjs35='無效IP位址，第一個數字應介於1至223之間。';
vjs36='Invalid network format.';
vjs37='Invalid gateway format.';
vjs38='IP is class A, netmask is invalid.';
vjs39='IP is class B, netmask is invalid.';
vjs40='IP is class C, netmask is invalid.';
vjs41='Invalid network ip, network ip is duplicate';
vjs42='你輸入的子網掩碼不可用.';
vjs43='IP地址無效，最後一個數字應該是1到254';
vjs44='無效的DNS地址。第一個數字是1到223';
vjs45='指定IP地址';
vjs46='無效。請更正!';
vjs47='％s是無效的IP，這是不是在％s掩碼。';
dup='管理員';
wc1='廣域網路，連線類型';
wcc2='選擇您的連線類型';
wcc3='動態';
wcc4='動態類型的連線是最為普遍的。如果您使用纜線數據機，您較有可能是用動態連線。如果您有一個纜線數據機或您不確定你的連線類型，請使用這個';
wcc5='靜態';
wcc6='一個靜態IP位址連線類型應較不為普遍。當您的網際網路服務供應商提供您一個永不改變的IP位址時您才使用這個選項';
wcc7='PPPoE';
wcc8='如果您使用DSL數據機或您的網際網路服務供應傷提供您一個使用者名稱與密碼，那麼您的連線類型就為PPPoE，請使用此種連線類型';
wcc9='PPTP';
wcc10='[僅歐洲國家]　這種連線類型在歐洲國家最為普遍。如果您的網際網路服務供應商已告知您特別使用PPTP並已提供您正確的PPTP資訊，您可使用此選項';
wcc11='Telstra Bigpond/OptusNet Cable';
wcc12='只有連接在Bigpond電纜和OptusNet電纜使用此選項';
wcc12_a='在Bigpond使用此選項電纜和OptusNet電纜只有連接';

wcc13='L2TP';
wcc14='[僅以色列] 這類連線類型在以色列普遍使用。如果您的網際網路服務供應商已告知您特別使用L2TP和提供正確L2TP資訊，您可使用此選項。';
wcc15='Multi-PPPoE';
wcc16='[Japan Only] This type of connection is a unique function in Japan which is required for those who subscribe NTT\'s broadband Internet.';
Next='下一步';
wds1='廣域網 > DNS';
wds2='如果您的網際網路服務供應商提供您一個特定的DNS位址，請在視窗中輸入請點選"套用變更"';
wds2_1='如果您的互聯網提供商給你特定的DNS設置，在這裡輸入​​。';
wds3='自動從網際網路服務供應商獲得';
wds3_1='自動從互聯網提供商';
wds4='DNS位址';
wds4_1='DNS地址（主）';
wds5='次級DNS位址';
wds5_1='DNS地址(副)';
wds6='DNS意指網域名稱系統，是指一個位於網路上翻譯URL位址，例如www.belkin.com為一個IP位址 如果您不始用自動DNS功能的話，您必須輸入網際網路服務供應商所提供的DNS設定。';
wds6_1='DNS= 域名服務器，在互聯網上，像www.belkin.com網址轉換成IP地址的服務器。';
wds7='如果您不始用自動DNS功能的話，您必須輸入網際網路服務供應商所提供的DNS設定';
wds8='如需要更改DNS，在%s網站過濾%s，選擇“無過濾器”。';
wdy1='WAN > 連線類型 > ';
wdy2='輸入您的動態IP位址，請輸入以下資訊並選取"套用變更"';
wdy3='主機名稱';
wdy4='主機名稱為一個網路服務供應商所';
wdy5='更改WAN媒體存取控制位址';
wdy6='不正確的主機名稱: `~!@#$%^&*()_+[]{}\\|;:\'"<>/?.,';
wmc1='WAN > MAC位址';
wmc2='部份網際網路服務供應商只能讓您從網路卡上複製MAC位址到路由器。如果您不確定，只要複製在安裝路由器前原本連線到數據機的MAC位址。複製您的MAC位址不會造成任何問題';
wmc3='WAN MAC位址';
wmc4='複製電腦MAC位址';
wmc5='複製';
wmc6='廣域網路媒體存取控制位址不可與區域網路媒體存取控制位址相同。請選另外一個';
wdd1='防火牆 > DDNS';
wdd2='動態DNS給予您提供網路使用者使用一個固定的網域名稱，（而非一個定時更改的IP位址）能讓您的路由器與應用程式在一個虛擬的伺服器在不同的位址得以存取，此不需要知道您現用的IP位址。您的無線路由器透過DynDSN.org(<A href="http://www.dyndns.org/"><B><FONT color=#6464c3>http://www.dyndns.org</FONT></B></A>)支援動態DNS. 在使用此服務前，您需要建立一個帳號。';
wdd3='動態DNS服務';
wdd4='動態DNS狀況';
wdd5='網站';
wdd6='使用者名稱';
wdd7='密碼';
wdd8='網域名稱';
wdd9 ='沒有選擇DDNS服務\n';
wdd10='沒有選擇DDNS服務並這頁全部資料將會失去, 想繼續嗎？';
wm1='網路/WAN';
WAN='廣域網路';
wm2='您可以在網路/廣域網路欄設定您的路由器來連接網路服務供應商。路由器能夠與任何網路服務供應商虛擬連線，只要您正確地能將路由器與網際網路服務供應商的設定連接。要將您的路由器與網際網路服務供應商連線，請按螢幕左邊的"連線類型"';
wm3='支援連線類型';
wm4='動態IP位址';
wm4b='包括要求一個主機名稱的網際網路服務供應商，其會連接至一個特定的媒體存取控制位址';
wm5='靜態IP位址';
wm5b='路由器支援有指定靜態IP位址的ISP連線';
wm6='PPPoE';
wm6b='乙太網路使用的點對點協定 路由器支援動態連線狀態，其將會要求PPPoE登入確認';
wm7='PPTP';
wm7b='PPTP 只限於歐洲用戶 路由器支援透過PPTP連線到歐洲網際網路服務供應商 ';
wm10='L2TP';
wm10b='用於與需要L2TP連接方法的ISP（互聯網服務提供商）。';
wpe1='WAN > 連線類型 > PPPoE';
wpe2='輸入您的PPPoE設定，輸入您以下的資訊並選取"套用變更"';
wpe3='使用者名稱';
wpe4='重新輸入密碼';
wpe5='服務名稱(可填可不填) ';
wpe6='MTU (500-1500)';
wpe7='請不要更改MTU值，除非您的網際網路服務供應商特別指定一個非1454的設定';
wpe8='斷線後';
wpe9='無活動分鐘數';
idlerangerro='您所輸入的閒置時間是不正確的。這個號碼可能介於1-99';
wpe10='不正確的字元: <>&';
wptid='不正確的字元: "';
pm='您的服務無法確認您所輸入的密碼。請確認您所輸入的密碼是正確的';
pm_1='新的密碼是不正確的。再試一次';
wpe11='不正確的MTU值';
wpe12='請輸入您的使用者名稱';
wmpe1='WAN > Connection Type > Multi-PPPoE';
wmpe2='To enter your Multi-PPPoE settings, type in your information below and click "Apply changes".';
wmpe3='Description';
wmpe4='PPPoE Account';
wmpe5='Retype Password';
wmpe6='Service Name (Optional)';
wmpe7='MTU (1440-1454)';
wmpe7_1='無效的MTU，必須介於1440…1454';
wmpe8='Sub-Session';
wmpe9='WAN > Connection Type > Routing Table';
wmpe10='To transmit a packet to the wan side (or Internet), the route will check if the destination of the packet can be matched to a certain rule.&nbsp; If matched, the forwarding the packet through the designated session.<br>If no any rule can be matched, this packet will be forward through the master session.';
wmpe11='Destination Type >';
wmpe12='Session 1 (Master Session)';
wmpe13='Session 2 (Slave Session)';
wmpe14='Connection Time';
wmpe15='Master';
wmpe16='Slave';
wmpe17='*If you want to use Multi-PPPoE,please select one Sub-Session..';
wmpe18='Account';
id_wmpe='ID';
ip_wmpe='IP';
domain_wmpe='Domain';
session_wmpe='PPPoE Account';
enable_wmpe='Enable';
none='none';
east='East Japan';
west='West Japan';
manual='Manual';
wpp3='密碼';
wpp4='重新輸入密碼';
wpp6='IP位址';
wpp7='子網路遮罩';
wpp14='請再次輸入密碼';
wpp15='請輸入您的密碼';
wpp16='廣域網路 > 連線類型 > L2TP';
wpp17='L2TP帳戶';
wpp18='L2TP密碼';
wpp19='請輸入您的L2TP帳戶';
wpp20='我的網際網路IP地址';
wpp21='從網路供應商取動態IP地址';
wpp22='使用靜態IP地址';
wpp23='IP地址分配';
wpp24='使用靜態IP地址';
wpp25='從ISP獲得動態';
wppa1='WAN > 連線類型 > PPTP';
wppa2='PPTP帳號';
wppa3='PPTP密碼';
wppa4='重新輸入密碼';
wppa5='主機名稱';
wppa6='服務IP位址';
wppa7='我的IP位址';
wppa8='我的子網路遮罩';
wppa9='連線ID(選用項目) ';
wppa10='斷線後';
wppa11='無活動分鐘數';
wppa12='請按此輸入您的DNS設定';
wppa13='請輸入您的PPTP帳號';
wppa14='請再次輸入密碼';
wppa15='請輸入您的密碼';
wppa16='IP位址';
wppa17='服務IP位址';
wppa18='服務名稱不可用.';
ws1='WAN > 連線類型 > 動態IP ';
ws2='輸入您的動態IP設定，請輸入以下資訊然後選取"套用變更"';
ws3='IP位址';
ws4='子網路遮罩';
ws5='ISP閘道位址';
ws6='我的網際網路服務供應商提供超過一個靜態IP位址';
ws7='按此輸入您的DNS設定';
dm='可能您尚未輸入所有的DNS號碼，或部份您所輸入的號碼不正確。此號碼應介於0到255';
sm='您所輸入的子網路遮罩號碼是不正確的';
sm_1='子網掩碼是無效的';
ws8='請在接下來的視窗輸入您的DNS位址';
ws9='IP位址與IP位址別名相同, 請重新選擇或除去其中一個!';
ws10='設定值閘道';
wsc1='IP位址別名';
im='IP位址別名已滿，無法再增加';
wt1='重要';
wt2='點擊更改設定路由器將重啟.一旦路由器重啟,你需要做好以下幾項';
wt3='1）拔下電纜調製數據機和貝爾金路由器的電源線';
wt4='2）重新連接電源線到電纜調製數據機，等到所有數據機的燈停止閃動';
wt5='3）重新將電源線連接到貝爾金路由器';
wt6='確認你已成功連接到互聯網,在互聯網上開啟一個瀏覽器,例如Internet Explorer, Firefox和Safari以保證你可以瀏覽網頁.';
Logout='登出';
wla1='無線 > 設定為基地台';
wlad1='路由器可以只限定用為一個無線基地台，只要將所有的。您可以選取"啟用"然後輸入您想要的IP位址即可';
wlad2='開啟/關閉';
wlae1='選擇IP位址';
wlae2='子網路遮罩';
wlae3='請在您的瀏覽器中手動更改輸入欄的位址為區域網路的位址';
wlc1='無線 > Channel 與 SSID ';
wlc2='要更改路由器上的無線設定，請在此更改，然後選取"套用變更"來儲存變更';
wlc3='無線頻道';
wlc4='SSID';
wlcwch='延伸頻道';
wlc5='無線模式';
wlcgb='802.11b+g';
wlcg='802.11g';
wlcb='802.11b';
wlc9='廣播SSID ';
wlc10='極速模式';
wlc11="啟用Turbo模式可以使路由器或存取點使用Frame Bursting獲得最大的總處理能力。Turbo模式能夠與支援Turbo模式的網卡相容。Belkin 802.11g網卡使用最新的驅動程式。不支援Turbo模式的網卡會在Turbo模式開啟時正常運作.";
wlc12='保護模式';
wlc13="在大多數的情況中，最佳狀況(吞吐量)是將保護模式關閉。如果您使用HEAVY802.11b，最佳效能應為將保護模式關閉時";
wlc14='用來當做無線基地台';
wlc15='當您欲將路由器當做存取點時，您必須為其指定一個IP位址。此IP位址需落在您所連接的網路範圍內。欲進入路由器進階設定之介面，在網路瀏覽器輸入IP位址並登入。';
wlc16='無線>EWC 設定';
wlc17='頻寬';
wlc18='控制邊帶';
wlc19='NPHY 頻率';
wlc20='20MHz';
wlc21='僅40MHz';
wlc22='20/40MHz';
wlc22a='20/40/80MHz';
wlc23='使用無線模式開關您的無線路由器有三種模式，這個開關能讓您使用無線模式. <br>1) 僅802.11g<br> 2) 802.11g與802.11b<br>  3) 關閉<br> 4) 此模式會關閉路由器的存取點，所以沒有任何無線裝置可以連線到此網路。關閉此功能可以確保當您離開家裡很長的時間時，依然可以使用路由器的無線功能.<br>';
wlcoff='關閉';
wlcngb1='802.11b & 802.11g & 1x1 802.11n';
wlcn1='1x1 802.11n';
wlcngb2='802.11b & 802.11g & 802.11n';
wlcn2='802.11n';
wlca='802.11a';
wlcan='802.11a & 802.11n';
wlcgn='802.11g+n';
wlcnac='802.11n & 802.11ac';
wlcanac='802.11a & 802.11n & 802.11ac';
wlc24='在5GHz頻帶有四種模式.';
wlc25='1) 8011.a 唯一模式 <br> 設置路由器這種模式將只允許802.11a標準的產品能夠加入該網絡。<br> 2) 802.11a & 802.11n <br> 設置路由器這種模式將允許802.11a和802.11n標準的設備加入網絡。<br> 3) 802.11n唯一模式 <br> 設置路由器這種模式將只允許802.11n標準的設備加入，較慢的802.11a設備無法加入. <br>4) 關閉 <br>這種模式將關閉路由器的Wi-Fi功能，所以沒有無線設備可以加入網絡。當你離家很長一段時期內或不想使用無線功能的路由器，在一定的時間關閉無線功能的路由器是一個不錯的方式來保護您的網絡。<br>';
wlc26='隱藏您的網絡名稱將關閉WPS';
wlc27='更改路由器的安全類型將關閉WPS';
wlc28='WPS被禁用由於您的<A href=%s><B>無線安全類型</B></A>.';
wlc29='WPS被禁用，因為你隱藏你的網絡名稱（SSID）。';
wlc30='WPS是禁用的，因为你隐藏你的网络名称（SSID）和因您的<a href=%s><B>无线安全类型</ B></ A>。';
wlc31='啟動WPS將取消隱藏你的網絡名稱（SSID）';
wlc32='啟動WPS將改變您的安全類型 到WPA/WPA2的。您當前的網絡密碼仍然正常運作';
wlc33='啟動WPS將取消隱藏你的網絡名稱（SSID,改變您的安全到類型WPA/WPA2。您當前的網絡密碼仍然正常運作';
wlc34='啟動的WPS之前，您需要更改您的安全型成為WPA/WPA2和新的網絡密碼';
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

wlm1='無線';
wlm2='在這裡您可以調整設定為無線區';
wlm3='頻道 與 SSID';
wlm4='調整無線頻道與SSID (無線網絡名稱) ';
wlm5='安全';
wlm6='更改無線保全設定，例如WPA設定或WEP設定';
wlm7='設定為基地台';
wlm8='設定路由器的運作模式為AP模式';
wlm9='指定IP位址';
wlm10='指定AP的IP位址';
wlm11='媒體存取控制';
wlm12='設定一個您想要允許或是拒絕的無線網絡用戶清單';
wle1='無線 > 安全';
wle2='安全模式';
wle2a='關閉';
wle2b='WPA/WPA2-Personal(PSK)';
wle2c='128位元WEP ';
wle2d='64位元WEP ';
wle3='確認';
wle3a='WPA-PSK';
wle3b='WPA2-PSK';
wle3c='WPA-PSK + WPA2-PSK';
wle7="您可以在此設定無線保全/加密。保全開啟時可確保最大值的無線保全。WPA提供的是不斷隨機改變的加密代碼以及指定出最佳的保全解決方案。在無線環境裡，並非所有的設備都能支援WPA，所以就必須使用WEP ";
bit64WEP='64bit WEP';
bit128WEP='128bit WEP';
WPAPSK='WPA/WPA2-Personal(PSK)';

wps1='Wi-Fi 保護型設定程式 (WPS)';
wps2='無線 > Wi-Fi保護型設定程式(WPS)';
wps3='請配置無線安全';
wps4='Wi-Fi 保護型設定程式 (WPS)是業界標準方案, 它簡化了安全設定和Wi-Fi網路的管理。您現在可以簡單地透過私人密碼(PIN)方法或按鈕組態(PBC)方法去設定及連接有WPA的802.11網路和有WPS認證的設備在一起。其他沒有WPS的附設裝置可用傳統手動組態方法與網路連接。';
wps5='1) 私人密碼(PIN)方法';
wps6='從用戶裝置輸入PIN後再按 "登記"鍵。然後在兩分鐘之內從用戶裝置啟動無線置輸程式的WPS功能';
wps7='輸入用戶裝置PIN';
wps8='登記';
wps9='您可以從外部登錄者輸入路由器PIN碼。如想更改路由器PIN碼, 按"產生新PIN碼"鍵或按"恢復PIN碼設定值"重設PIN碼 原廠設定值';
wps10='路由器PIN碼:';
wps11='產生新PIN碼';
wps12='恢復PIN碼設定值';
wps13='2) 按鈕組態(PBC)方法';
wps14='按開始PBC鍵, 您的裝置會開始PBC, 在兩分鐘之內與路由器連接';
wps15='開始PBC';
wps16='3) 手動組態方法';
wps17_1='沒有WPS的附設裝置和手動組態裝置用以下方法設定:';
wps17='沒有WPS的設備，請從CD運行貝爾安全助手或以下手動設置:';
wps18='路由器組態:';
wps19='組態完成';
wps20='網路名稱(SSID):';
wps21='組態未完成';
wps22='網路確認:';
wps23='WPA+WPA2-Personal (PSK)';
wps24='資料加密:';
wps25='TKIP+AES';
wps26='網路鑰匙(PSK):';
wps27='網路鑰匙(WEP):';
wps28='自動';
wps28_1='無效';
wps29='WPS';
wps30='Wi-Fi 保護型設定程式 (WPS)是業界標準方案, 它簡化了安全設定和Wi-Fi網路的管理。';
wps31='無線安全:';
wps32='WPS按鈕';
wps33='路由器銷解鎖按鈕';
wps_msg1='Wi-Fi 保護型設定程式訊息';
wps_msg2='不正確PIN碼! 裝置PIN碼應是八位數字。請檢查及重新輸入。';
wps_msg3='不正確PIN碼! 請檢查及重新輸入。';
wps_msg4='初始中 - 請在兩分鐘之內開始附設裝置中的WPS';
wps_msg5='進行中 - 請稍後片刻…';
wps_msg6='發生錯誤 - 請再試一次';
wps_msg7='Success – The device is connected to the Router';
wps_msg8='會議交疊查出';
wps_msg9='限時已過 - 沒有用戶裝置連接路由器';
wps_msg10='由於失敗的訪問嘗試過多,路由器密碼被禁用';

wwmm1='QoS組態';
wwmm2='QoS組態';
wwmm3='QoS會根據您的網路排序，例如多媒體內容與VoIP，所以其不會被其他透過網路發送的資訊所影響。根據802.11e這個產品特點會根據您的設定開啟或關閉。如果您要在網路上使用多媒體或VoIP，我們建議您開啟此功能';
wwmm4='802.11e/WMM QoS';
wle8='13個十六進位的成對數字';
wle9='注意';
wle10='若須使用PassPhrase產生成對的十六進位數字，按左邊的欄位並輸入PassPhrase';
PP='PassPhrase ';
generate='產生';
errm='請輸入PassPhrase';
keym='金鑰不完整';
wle11='金鑰1';
wle12='金鑰2';
wle13='金鑰3';
wle14='金鑰4';
wle15='十六進位的成對數字';
keym1='不完整';
keym2='不正確，請先修正';
wwp2='PSK';
wwp3='WPA-PSK(無伺服器)';
wwp4='此為一密碼，以單詞，片語，一串字母或數字所組成。這個密碼必須介於8和63個字母，其中可以包括空白或是標點符號。每一個連接到此網絡的使用者必須要使用同一個密碼。';
wwp5='隱藏PSK';
wls_sec_msg='當WPS啟用後，通過WPA/WPA2連接.';
wguest2='訪客設定';
wguest3='訪客使用';
wpskerr1='PSK的長度應為8到63或64的十六進位數';
wpskerr2='PSK必須是至少8位和少於63位字元';
wpskerr4='You must input the Guest Pre-shared Key (PSK)';
wpskerr7='訪客密碼必須為8位字元';
wpskerr8='訪客密碼不可以與網路密碼相同';
wlguest1='The SSID must be not be same as Guest SSID';
wlguest2='SSID不可以與訪客SSID相同';
ww3='加密技術';
wlmc1='無線，媒體存取位址控制';
wlmc2='媒體存取位址控制 是設定一份您允許或拒絕存取無線網絡的用戶清單';
Allow='准許';
Deny='拒絕';
wlmc7='請先選擇您要允許或拒絕媒體存取控制位址清單';
wlmc6='無法輸入超過32個媒體存取控制位址';
wlmc3='不正確的媒體存取控制位址';
wlmc4='請先更正';
wlmc5='正確的媒體存取控制位址應為xx:xx:xx:xx:xx:xx而x是介於0-9與a-f!';
wlmc8='您設定一個MAC多個一次!';
//wifi.html
wladvwarn1='This page is provided "as is" for special purposes.';
wladvwarn2='Using of this page is without any expressed or implied warranties and may destroy your settings.';
wladv1='Wireless > Advanced Settings';
wladv2='Changing these advanced setting will affect your wireless network performance.Play at your own risk.If running into problems, please reset to factory defaults.';
wladv3='Radio Preamble';
wladv4='Transmit Rate Control';
wladv5='Rate Selection For 802.11b';
wladv6='Rate Selection For 802.11g';
wladv7='Rate Selection For 802.11n';
wladv8='RTS Threshold (256-2347)';
wladv9='Beacon Interval (20-1000)';
wladv10='DTIM Interval (1-255)';
wladv11='Aging Interval (60-86400)';
wladv12='Intra-BSS';
wladv13='Aggregation';
wladv14='Guard Interval';
wladv15='Extension Sub-Channel';
wladv16='Receive Antenna';
wladv17='Transmit Antenna';
wladv18='Optimization Level';
wladv19='Range Optimization';
wladv20='CS Adaptation';
msg_wladv_rx='Invalid Number! Must between 1..256';
msg_wladv_tq='Invalid Number! Must between 1..1000';
msg_wladv_rtsthreshold='Invalid RTS Threshold! Must between 1..2347';
msg_wladv_fragthreshold='Invalid RTS Threshold! Must between 1..2346';
msg_wladv_beacon='Invalid Beacon Interval! Must between 20..999';
msg_wladv_dtim='Invalid DTIM Interval! Must between 1..255';
msg_wladv_agingtime='Invalid Aging Interval! Must between 60..86400';
ENTRY_FULL	='所有的輸入記錄已滿，請清除部份輸入記錄並再試一次';
CLEAR_CONFIRM	='您要清除輸入記錄嗎? ';
CLEAR_ALL_CONFIRM ='確認全部清除  您要清除所有輸入記錄嗎? ';
g1='IP位址是路由器的內部IP位址。存取進階設定介面，請在您的瀏覽器位址欄位中輸入此IP位址，如果有需要您可以更改這個位址，只要輸入新的位址然後選取"應用更改"。您選擇的IP位址為無法路由傳送IP。下列為無法路由傳送: ';
g2='192.168.x.z (x 是在0至255之間, z 是在1至254之間.)<br>';
g3='10.x.x.z (x 是在0至255之間, z 是在1至254之間.)<br>';
g4='172.y.x.z (y是在16至31之間, x 是在0至255之間, z 是在1至254之間.)<br>';
g5='無須改變子網路 遮罩。如果需要的話可以更改子網路遮罩。僅在您有特殊理由時 才更改子網路遮罩。<br>';
g6='DNS是網域名稱系統伺服器的縮寫。一個網域名稱伺服器是一個位於URL位址的伺服器，例如:www.belkin.com, 在您開始使用一個路由器前，許多網際網路服務供應商並不會要求您輸入這項資訊。當您的網際網路服務供應商不提供您一個特定的 DNS位址時，您應該要檢查自動由網際網路供應商獲取。如果您是使用靜態IP連線，您需要輸入一個特定的DNS位址，及一個次級的DNS位址。如果您的連線類型是是動態IP或PPPoE，您很有可能不一定需要輸入一個DNS位址。輸入DNS位址設定，自動從網際網路供應商獲取並輸入DNS，按應用更改來儲存設定.<br>';
g6a='動態 DNS 服務允許您在許多域 DynDNS.org 產品中為動態 IP 位址指定靜態主機名別名，從而更容易地從網際網路上的不同區域訪問您的網路計算機。DynDNS.org 為網際網路社區免費提供此服務（最多五個主機名）。<br> 動態 DNSSM 服務是家庭網站、檔案伺服器的理想選擇，或使您在工作時更易訪問您的家用 PC 和已存儲的檔案。使用此服務可確保您的主機名總是指向您的 IP 位址，而不管您的 ISP 多久對其更改了一次。當您的 IP 位址更改時，您的朋友和同事則可透過訪問 yourname.dyndns.org 來找到您﹗<br><br>要免費註冊您的動態 DNS 主機名，請訪問 http://www.dyndns.org。<br><br><b>設定路由器的動態 DNS 更新客戶機</b><br>在使用此功能前，您必須使用DynDNS.org 的免費更新服務進行註冊。一旦註冊，請按以下指示進行操作.<br>1.在“用戶名”字段中 (1) 輸入您的 DynDNS.org 用戶名.<br>2. 在“密碼”字段中 (2) 輸入您的 DynDNS.org 密碼.<br>3. 在“域名”字段中 (3) 輸入您透過 DynDNS.org 設定的 DynDNS.org 域名.<br>4. 單擊“更新動態 DNS”更新您的 IP 位址.<br>無論何時當由您的 ISP 指定的 IP 位址更改時，路由器都會使用您的新 IP 位址自動更新 DynDNS.org 的伺服器。您還可以透過單擊“更新動態 DNS”按鈕 (4) 來手動完成此操作。<BR> ';
g6b='使用動態 DNS';

g7='動態主機組態協定伺服器可以讓設定網路非常簡易，您只要替網絡中的每一個電腦指派一個IP位址。如果有需要您可以關閉DHCP伺服器。您需要替網絡中的每一台電腦手動設定一個靜態IP位址來關閉DHCP伺服器。IP位址的範圍應該，數值應介於2-100(99台電腦)，如果您要更改這個數字，您可以輸入一組新的開始與結束數字，然後選取"應用更改值"';
g7a='DHCP伺服器';
g8='您能設置一個地方域名(網絡名)為您的網絡。 除非您有具體先進的需要如此，否則沒有需要改變這個設置。 您能命名網絡您要例如「我的網絡」<br>';
g9='動態IP';
g10='動態連線是最多纜線數據機使用的連線類型。通常只要連線至網際網路供應商就可以將設定改為動態IP有些動態連線可能會要求一個主機名稱，如果您有一個指定的主機名稱，將其輸入即可。您的主機名稱也是由您的網際網路供應商指定的。某些動態連線可能會要求您複製原本連接電腦的媒體存取控制位址。選取螢幕中的"更改廣域網路媒體存取控制位址"連結如果您的路由器已正確連接，網路狀態顯示會"連線中"。<br>';
g11='一個靜態IP位址連線類型較其他類型普遍。如果您的ISP使用靜態IP位址，您可能須要您的IP位址、子網路遮罩、與ISP閘道您的ISP應提供相關資訊輸入您的資料然後選取"應用"，在您應用這些改變後，如果您的路由器已正確設定,您的網路狀態會顯示為"連線中".<br><br>';
g12='大部份的數位用戶網路提供乙太網路的點對點協定。如果您使用纜線數據機來連接 網路，您的網際網路服務供應商可能會使用乙太網路的點對點通訊協定來讓您登入網路 如果您的家用網路或小型辦公室連線不需要數據機，在以下的狀況您可以使用PPPoE: <br><br>若為下列所示，則您的連線類行為:<br>1)您的ISP提供您一個使用者名稱與密碼來進行連線<br>2)您的ISP提供您網路連線的軟體，例如WinPOET、Enternet300<br>3)您必須確認選取桌面上的圖示來進行連線<br><br>將路由器設定使用PPPoE，輸入您的使用者名稱與密碼.如果您沒有或您不知道，將該欄留空白即可. 在您輸入所有資訊後選取"應用更改", 若您的路由器安裝正確，您的網路連線狀態將會顯示為"連線中".若您需要更多資訊，請參閱使用手冊.';
gmpoe1='WAN Type is MultiSession PPPoE. This WAN type supports multiple PPPoE sessions. With properly configuration of each session, this router can transmit the packets through the correct PPPoE connection. Besides, PPPoE Session 1 will be treated as the master session. The packets which are not matched to the other PPPoE Sessions will be directed to the master session. If the WAN type is not correct, change it!';
gmpoe2='To make the router work properly under the multiple PPPoE WAN type, user has to define the trigger rules of each enabled PPPoE session. So that, once the PPPoE connections are successfully established, the packets can be treated well according to the trigger rules to find out the proper session and transmit the packets.There are two kinds of configuration methologies to define a trigger rule for each PPPoE session.By IP : Please specify the IP address, Subnet Mask and PPPoE Session ID that will be triggered.By Domain Name : Please specify the Domain Name and the PPPoE Session ID that will be triggered.Each rule will take effect if the enable check box is checked.';

g13='有些網際網路服務供應商要求PPTP通訊協定。這將會使您可以直接設定一個I網際網路供應商系統輸入網際網路供應商提供的資訊，當您輸入完畢,選取"套用變更"。在您應用更新值後如果您的路由器已正確連接，網路狀態顯示會"連線中"。';

g14a='Telstra BigPond';
g14b='如果您的路由器已正確連接，網路狀態顯示會"連線中" ';

g15='MTU設定';
g16='MTU設定值不會改變除非您的網際網路供應商提供您一個特定的MTU值。更改MTU值可以讓您解決以下問題: 從網路斷線、連線速度慢、網路應用作業問題';
g17='在X之後斷線… ';
g18='斷線功能僅供在路由器從網際網路供應商自動斷線時使用，當一段時間無連線時。例如:在選項旁邊句選記號並且在分鐘欄位內輸入5，讓路由器在網際網路無連線5分鐘後中斷當您使用的網路是以分計費時，您可以使用此選項。';
g19='MAC意指媒體存取控制。所有的網路零組件，包括網路卡、連接器以及路由器都有獨有的"序號"叫做媒體存取控制位址。您的網際網路服務供應商可能會記錄所有您的電腦的媒體存取控制位址，並且僅讓特定的電腦來使用網路服務。當您安裝路由器，路由器本身的MAC位址會被網際網路供應商查覺並造成網路無法作業。貝爾金已提供複製MAC位址(電腦進入路由器)的能力。MAC位址會依次地被網際網路供應商系統查看如果您無法確定您的網際網路服務供應商是否需要檢查原本的MAC位址，只要複製原本連接至數據機的MAC位址複製位址不會造成網域問題。若要複製MAC位址，請確保您所使用的電腦所連接的是在您安裝路由器前所使用的數據機。選取"複製MAC位址"按鈕，再選取"套用變更"，您的MAC位址即已被路由器複製。';
g20='欲更改路由器的運作頻道，從選單下選取頻道，選取"套用變更"並儲存設定。您可以更改SSID。SSID是同等於無線網路的名稱。如果您所在的區域有其他的無線網路，您應該為其命名。預設值為belkin.xxx。欲更改SSID，選取SSID欄位並輸入一個新的名稱。選取"套用變更"使新的設定值生效。';

g21='可以將您的無線網路設定為隱形。只要關閉SSID廣播。您的網絡就不會出現在XX。是一個由許多無線網路的連接器，他可以掃瞄空氣中所有可使用的網路並讓電腦可從中選擇。將SSID的廣播關閉可以提高安全性。';
g25='虛擬伺服器';
g26='此功能提供您路由至網路外部的服務，例如:網路伺服器(連接埠80)，FTP伺服器(連接埠21)，或其他透過您的路由器所能夠提供的服務。您的內部電腦被防火牆保護，所以在網路上並不會被"看見"。如果為了特定的應用程式，您需要使用虛擬伺服器組態，一般應用程式的清單將會被提供給您。如果您所需要的應用程式不在清單上，您必須聯絡您的應用程式賣主，了解您需要哪一種程式。若您要從提供的清單中選擇，從您所需要的應用程式那一行然後選取"進入"。您的設定將會改變為您所指定的那一行之後選取"套用變更"來儲存您更改的設定若要手動設定更改，請輸入IP位址連接埠(若有超過一個連接埠請在其間輸入逗號)選取連接埠類型(TCP或UDP)然後選取"套用變更"。每個內部IP位址中您僅可以通過一個連接埠。在防火牆內開啟連接埠可能會造成安全性風險。您可以啟用並快速停用設定當您不使用指定的應用程式時，建議您停用設定。';
g27='用戶IP防火牆';
g28='路由器可以設定在某些特定日期或特定時間無法連線到網路、電子郵件、或其他網路服務。這項設定可在一台電腦、一系列的電腦或是很多電腦。例如:您要限制某一台特定的電腦，輸入其IP位址與您欲限制的IP範圍。接下來在連接埠欄位輸入80，然後選擇TCP，接下來選擇Block。您也可以選擇永遠阻擋，在上方選擇開始日期與時間，然後在下方選擇結束日期與時間。選擇"套用變更"後，這台電腦在您所指定的時間就無法連線到你所指定的限制IP。注意:請確認您選擇正確的時區。';
g28_1='您可將路由器設定為在指定日期和時間内限制/允許存取網際網路、電子郵件或其它網路服務。限制功能適用於單台電腦、一組電腦或多台電腦。按一下「新增」按鈕開始使用此功能。';

g29='媒體存取控制位址防火牆';
g30='媒體存取控制位址防火牆能夠讓您設定哪些電腦被允許連線。任何不被允許的電腦都將無法存取資訊。當您啟用這項功能，您必須在您網絡中的每一台電腦都輸入MAC位址。欲使用這項功能，選取"開啟媒體存取控制位址防火牆"，接下來在每一台電腦輸入媒體存取控制防火牆位址，您只要選取"增加"，然後在空白欄位中輸入媒體存取控制防火牆，然後選擇"套用變更"即可。若要從清單上刪除媒體存取控制位址，只要在您欲刪除的媒體存取控制位址旁邊按"刪除"即可，然後選取"套用變更"儲存設定。注意: 您所用來當做路由器管理員電腦，將無法刪除媒體存取控制功能。(指您現在所使用的電腦)。';
g31='非軍事區功能能讓您指定特定任一在您區域中的電腦 被網路位址防火牆取代。如果網路位址發生問題，這項功能是必需的，由其當您使用電腦遊戲或是視訊會議時。若臨時狀況發生請使用此項功能。這台在非軍事區的電腦並未受到駭客攻擊的保護.將電腦放至非軍事區，輸入最後一個 IP位址的數字，然後選取"啟用"，要讓更改生效請選取"套用變更"。 若您要使用多個廣域網路IP位址，請選取非軍事區主機能夠直接連線的	廣域網路IP位址，輸入非軍事區主機電腦IP位址的最後兩碼點選"啟用"然後選取"套用變更"。';

g32='阻擋ICMP Ping';
g33='電腦駭客通常會使用"Pinging"來尋找其欲攻擊的目標。透過偵測一個特定的IP位址並收到回應，電腦駭客可判斷出是否有利益的資訊可以截取。本路由器可以設定不給予外來的ICMP偵測回應，如此一來便可以提高您的電腦安全層級。要關閉電腦對Ping的回應，請選取"阻擋ICMP Ping"然後選取"套用變更"。';
g34='管理員密碼';
g35='本路由器並未設定任何密碼。若您要提高安全層級，你可以現在設定。請妥善保管您的密碼，未來您將需要此密碼來使用此路由器。若您要使用遙控管理功能，我們建議您最好設定密碼。登出時間能讓您設定您能夠使用路由器進階設定的時間長度。當您開始閒置時，計時器會開始計時。例如:您已經在進階設定中做了更改，未點選"登出"就離開電腦，假設您設定登出時間為十分鐘，則在您離開電腦十分鐘之後，系統就會自動將您登出。這項功能是為了提高安全性，系統預設的登出時間為十分鐘。注意:在同一時間內只有一台電腦可以登入至進階設定的介面。';
g36='時間與時區';
g37='這台路由器的時間透過簡易網路時間通訊協定設定。如此可讓路由器與全球網路時間同步。路由器中的同步時鐘是用來記錄與控制使用者登入。請選擇你所居住地的時區。若您住在節約日光地區，則選擇"節約日光"。系統可能不會馬上更新，請等候至少15分鐘讓路由器聯絡時區伺服器並得到回應，您無法自行設定時間。 ';
g38='遠端管理';
g39='在您啟用此項功能前，<font class="plaintext_bold">請確認您已經設定管理員密碼。</font>遠端管理能讓您從網路的任何地方做路由器的設定。總共有兩種遠端管理路由器的方式，第一種方式可以從任何地方存取路由器，只要選擇任何可以遙控管理路由器的IP位址。從網路上的任何地方輸入您廣域網路的IP，您可以看到一個要求您輸入路由器密碼的視窗。第二種方式能夠讓指定的IP位址被路由器遙控管理。這個方式比較安全，但是較為不便。若要使用這種方式，輸入您將要存取的路由器之IP位址，然後選擇"只有這個IP位址可被路由器遠端操作"。在您開啟此項功能前。我們強烈建議您設定一個管理者密碼。若讓密碼欄空白，很可能使您的路由器遭到入侵。';
g40='開啟網路位址防火牆';
g42='"全球隨插即用"提供無疏漏的作業，涵蓋了語音訊息、視訊訊息、遊戲及其他全球隨插即用的應用程式。某些應用程式需要路由器的防火牆透過特定的方式組態方能運作。通常會需要打開TCP與UDP的連接埠，有時還需要設定觸發程式連接埠。全球隨插即用可與路由器連線，它會告知路由器何處需要防火牆組態。此路由器的全球隨插即用功能是關閉的。如果您欲使用此功能，只要在工具程式頁面尋找"啟用全球隨插即用"然後選取"啟用"，再選取"套用變更"即可。';
g43='自動軟體更新提醒';
g44='此路由器內建自動確認新版本的軔體並提醒您是否有新軟體可供更新。當您登入路由器的進階設定介面時，路由器會確認是否有新軟體可供更新。如果有，路由器會通知您。您可選擇下載新的軟體或是忽略該提示。此項功能設定為關閉，如果您要啟用，只要選取"啟用"，然後選取"套用變更"即可。';
g45='無線安全';
g46='使用加密可以保護你的無線網絡，同一時間只能夠選擇一種安全類型。因此客戶可以在所有的安全類型中選擇一種。 Belkin產品提供4種安全類型：<br><br>1) 關閉。沒有啟用加密模式。所有的用戶都可以連接到這個開放的網絡，且不需要密碼。 <br><br>2) WPA/WPA2-Personal(PSK)，家用（無服務器）PSK是一種將所有信息包設置不同的代碼或者密碼，由於代碼是在不斷的變更的，所以WPA是非常安全的。共有兩種WPA，一種是WPA-PSK(共享碼)，另一種是WPA-Radius Server。兩者最顯著的差別是一個需要服務器，一個不需要服務器。 WPA-PSK是提供沒有服務器的適合家庭或小型辦公網絡的，PSK密碼由數字，字母組成。很明顯最大的風險在於別人知道你的共享密碼。 .<br><br>a.TKIP（暫時密鑰完整通信協議）指AES（進階加密標準），WPA標準指定TKIP，所以此為預設值。除此之外，TKIP提供了更佳的性能，可能許多無線產品還不能升級到AES，AES是一種基於802.11i的最新的加密技術，新的WPA標準將使用AES，雖然目前來說AES尚未普及，但用戶喜歡使用此技術。但不管使用哪一種標準，所有網絡產品都一定要用一樣的技術標準。 <br><br>b. Pre-shared Key輸入一個超過64個字節的字母或者數字，同樣PSK一定要可以使用在每一個網絡中的無線設備。請注意上方和下方欄的不同（大寫N和小寫n是不一樣的）。最簡單破解網絡安全的方式就是猜出您的PSK碼。 <br><br>3) 128-bit WEP.是一種無線加密的標準。如果您不是所有的設備都支持WPA，128bitWEP可以提供極佳的安全選擇，系統會要求您輸入一個16位進制的數字，您也可以讓其自動生成。 <br><br>4) 64-bit WEP.如果您的網絡中有些設備不支持WPA和128bitWEP加密方式，Belkin建議您使用64bitWEP模式。 ';
g47='有些網際網路供應商使用L2TP協議要求連接。 這設定了與網際網路供應商系統的直接連接。 信息類型由您的網際網路供應商提供了。 當您完成了時，點擊「應用變動」。 如果您的路由器適當地被設定，在您套用變動之後，互聯網狀態指示將讀「連接」。';
g48 = 'Access Control';
g49 = 'The Router can be configured to restrict access to the Internet, email, or other network services at specific days and times. Restriction can be set for a single computer.';
g50='ECO 模式';
g51='此功能使您減弱路由器前方的 LED 燈亮度，以便節省電力。您亦可在預定時間停用無線通訊裝置。';

rs_file_error='更新檔案是不正確類型的版本。更新失敗。請獲得正確的檔案並再試一。';
rs_crc='還原失敗 <CRC>';
rs_long='還原失敗 <太長>';
rs_disposition='還原失敗<沒有內容處置>';
rs_getpid='還原失敗<得不到pid!>';
rs_unmatchpid='還原失敗< pid不符>';

var msg_ddns1 ="請輸入您的使用者名稱\n";
var msg_ddns2 ="請輸入您的密碼\n";
var msg_ddns3 ="網域名稱不可能是空白的\n";
var msg_ddns4 ="更新動態DNS";
var msg_ddns5 ="域名長度可能低於63位 .";

// fw_dmz.html
var msg_fw_dmz1 = "Please enter the IP address before enabling DMZ.\n";
var msg_lan_dhcp1 ="從閘口要求資料";
var msg_lan_dhcp2 ="更新組態資料庫";
var msg_lan_sett1 ="請輸入不能路由的IP位址(10或172或192)!\n";
var msg_lan_sett2 ="請輸入不能路由的IP位址(168)!\n";
var msg_lan_sett3 ="請輸入不能路由的IP位址(16~31)!\n";
var msg_lan_sett4 ="請輸入不能路由的IP位址(1~254)!\n";
var msg_lan_sett5 ="請輸入正確IP位址(0~255)!\n";
var msg_wan_stat1 ="IP位址 ";
var msg_wan_stat2 =" 不是在 ";
var msg_wan_stat3 =" 網路.";
var msg_wls_chan1 ="SSID值不可為零";
var msg_wls_chan2 ="訪客SSID不可以是空的!\n";
var fw_update ="軟體更新進行中";
var fw_not_interrupt ="切勿中斷路由器營運或拔出路由器的插頭，此類操作會導致路由器不能工作。";
var show35a ="恢復預設值";
var msg_invalid_char ='找到不正確字元。正確字元是: 0-9, a-z, A-Z, `~!@#$%^&*()_-+=|\\{}[]:";\',.<>/?';
var vs_null ="描述是空的.";
var msg_invalid_vs_char ='找到不正確字元。正確字元是0-9, a-z, A-Z, `~!@#$%^&*()_-+=|{}[]:;\',.<>/?';
var msg_invalid_ssid_char ='找到不正確字元。正確字元是0-9, a-z, A-Z, _+。';
var msg_invalid_domain_char ='不正確的網域名稱'+': ~!@#$%^&*()=+{}[]|\":;\\\'?/<>,`';
var msg_invalid_char_1 ='找到不正確字元。正確字元是文字和數字。以下符號不正確: `~!@#$%^&*()_+[]{}\\|;:\'"<>/?.,';
var msg_hostIP_invalid ="主機IP地址不正確。它不是路由器區域網路IP位址\n";
var msg_dmzIP_blank ="請在啟用非軍事區前輸入IP位址。";
var msg_dmzIP ="非軍事區IP位址";
ipm='可能您尚未輸入所有的DNS號碼，或部份您所輸入的號碼不正確。此號碼應介於0到255。';
ipmLast='可能您尚未輸入所有的DNS號碼，或部份您所輸入的號碼不正確。此號碼應介於1到254。';
var msg_blank =" can not be blank.\n";
var msg_space ="Blanks or spaces are not allowed in %s\n";
var msg_blank_in ="Blanks are not allowed in %s\n";
var msg_allspaces ="%s cannot consist solely of spaces\n";
var msg_invalid ="Invalid character or characters in %s\nValid characters are: \n%s\n\n";
var msg_check_invalid ="%s contains an invalid number\n";
var msg_valid_range ="%s is invalid. Valid range is %s to %s\n";
var msg_invalid_mac ="不正確的媒體存取控制位址\n";
var msg_multi_mac="媒體存取控制位址不是多重播送位址\n";
var msg_vs_des="不正確字元 :或-不允許在此描述";
var msg_privateIP_invalid ="LAN IP位址無效!\n";
var msg_dmzIP ="非軍事區IP位址";
var msg_confirmDefault ="警告!裝載工廠預設值將刪掉所有當前設定. 您是否是肯定的您要如此做？";
var con_noinfo='請選擇網際網路服務供應商為閣下提供的連線類型。';
var con_miss='下面填寫的資料我們相信是正確的。';
var con_nosure='如果您不清楚您的連線類型，請致電給您的網際網路服務供應商查詢您需要填寫的資料。';

var wiz_noinfo='請輸入在之前您所選擇的連線類型資料。此資料由您的網際網路服務供應商提供。';
var wiz_miss='下面部份已填寫的資料相信是正確的。 請輸入未填寫的資料。 此資料由您的網際網路服務供應商提供。';
var wiz_nosure='如果您不清楚下面的設定，請致聯絡您的網際網路服務供應商查詢所需的資料。';
var network_key1='必須輸入網路密碼!';
var network_key2='金鑰至少必須有 8 到 63 個字元 ';
var wiz_cd1='請放入疑難排解光碟於電腦中並退出現在的設定精靈。';
var wiz_cd2='別擔心，我們只需要在您的電腦上更正一項特別針對澳洲和紐西蘭的設定。光碟上的設定精靈 (Setup Wizard) 備有特別的程式來自動完成這項操作。 ';
var wiz_cd3='退出現在的設定精靈之後, 請放入光碟, 疑難排解光碟中的設定精靈會在15秒鐘內在螢幕出現。';
var wiz_cd4='請使用疑難排解光碟之前, 請按退出按鍵關閉瀏覽器中的設定精靈。'
var wiz_chk_conn1='檢查網際網路的連線...';
var wiz_chk_conn2='請稍候, 路由器正核對您的網際網路設定。';
var wiz_chk_isp='您的 ISP 在我們嘗試連接時不接受下面顯示的設定。請仔細檢查，看看是否存在任何錯誤。';
var wiz_chk_poeisp='您的網際網路設定錯誤, 請覆查設定。 \n如果您不清楚設定，請聯絡您的網際網路服務供應商查詢所需的資料。';
btn5='Previous';
btn6='Routing Table';
Multi_PPPoE='Multi-PPP over Ethernet';
wcc15='Multi-PPPoE';
wcc16='[Japan Only] This type of connection is a unique function in Japan which is required for those who subscribe NTT\'s broadband Internet.';


var Australia_wz="澳洲";
var Austria_wz="澳地利";
var Belgium_wz="比利時";
var China_wz="中國";
var Czech_wz="捷克";
var Denmark_wz="丹麥";
var France_wz="法國";
var Germany_wz="德國";
var Hong_Kong_wz="香港";
var Hungary_wz="匈牙利";
var India_wz="印度";
var Indonesia_wz="印尼";
var Israel_wz="以色列";
var Italy_wz="意大利";
var Japan_wz="日本";
var Korea_wz="韓國";
var Malaysia_wz="馬來西亞";
var Netherlands_wz="荷蘭";
var New_Zealand_wz="紐西蘭";
var Norway_wz="挪威";
var Philippines_wz="菲律賓";
var Portugal_wz="葡萄牙";
var Singapore_wz="新加坡";
var Spain_wz="西班牙";
var Sweden_wz="瑞典";
var Switzerland_wz="瑞士";
var Taiwan_wz="台灣";
var Thailand_wz="泰國";
var UK_wz="英國";
var USA_wz="美國";
var Other_wz="其他";

g10_brief=g10;
 
Finland_wz="芬蘭";
var Poland_wz="波蘭";

var msg_invalid_IP = "輸入一個或以上的IP地址是無效!";
var modem_miss = wiz_miss;
var modem_nosure = wiz_nosure;
var modem_noinfo = 'Please enter the following information. Your ISP provided this information.';
var run_detect1 = '數據機正偵測VPI/VCI, 請稍等……';
var run_detect2 = '數據機正偵測廣域網路連線類型, 請稍等……';

run19='壓縮:';
run46=wiz_chk_isp;
run48='數據機設定';
run52='壓縮:';

info_pppoa = '絕大多數的DSL供應商都使用PPPoA作為連接類型。如果你使用的是DSL數據機連接到網際網路，你可能使用PPPoA登錄你的ISP所提供的服務。如果你有網際網路連線，在您的家庭或小型辦公室，這並不需要一個數據機，您也可以使用PPPoA。你的連接類型是PPPoA如果: 1)連接到互聯網，你的ISP需要給你一個用戶名稱和密碼。2) 你的ISP提供軟件來使用連接到網際網路。3) 你必須在瀏覽器以外雙擊桌面上連接到網際網路的圖標，以獲得對互聯網。設置路由器使用PPPoA ，輸入你的用戶名稱和密碼在指定空格內。如果你沒有一個服務名稱或不知道它，讓此欄空白。當你輸入了你的資料，點擊"變更"。 你變更之後，如果你的路由器設置妥當，互聯網狀態圖標，將改為"連接"。若需要更詳細的配置你的路由器使用PPPoA ，請參閱用戶手冊。';
info_ipoa = g11;
info_dial_up = '你必須使用數據機連接到路由器的串連埠。你的ISP提供撥號連接的電話號碼，用戶名稱，密碼等。如有特殊數據機初始化的字串，這方面的資料應當從數據機製造商。如果您的ISP提供的是一特定的IP地址，那麼你必須在屏幕的底部IP地址欄輸入它。';
topic_dial_up = '外部撥號連接';
 
h9_1= 'DSL意指數位用戶專線，一個DSL數據機是用您現有的電話線以高速來傳送資料。';
h9_2= '數位用戶專線數據機';
info_dsl_modem = h9_1;
topic_dsl_modem = h9_2;
help_pppoa = '<b>PPPoA </b>' + info_pppoa;
info_pppoe = '大部份的數位用戶網路提供乙太網路的點對點協定。如果您使用纜線數據機來連接網路，您的網際網路服務供應商可能會使用乙太網路的點對點通訊協定來讓您登入網路。如果您的家用網路或小型辦公室連線不需要數據機，在以下的狀況您可以使用PPPoE: 1)您的ISP提供您一個使用者名稱與密碼來進行連線 2)您的ISP提供您網路連線的軟體，例如"WinPOET、Enternet300 3)您必須確認選取桌面上的圖示來進行連線  將路由器設定使用PPPoE¼輸入您的使用者名稱與密碼，如果您沒有或您不知道，將該欄留空白即可。在您輸入所有資訊後選取"應用更改"，若您的路由器安裝正確，您的網路連線狀態將會顯示為"連線中"。若您需要更多資訊，請參閱使用手冊。';
help_pppoe = '<b>PPPoE</b> 絕大多數的DSL供應商都使用PPPoE作為連接類型。如果你使用的是DSL數據機連接到網際網路，你可能使用PPPoE登錄你的ISP所提供的服務。如果你有網際網路連線，在您的家庭或小型辦公室，這並不需要一個數據機，您也可以使用PPPoE。你的連接類型是PPPoE如果: 1)連接到互聯網，你的ISP需要給你一個用戶名稱和密碼。2) 你的ISP提供軟件如WinPOET, Enternet300來使用連接到網際網路。3) 你必須在瀏覽器以外雙擊桌面上連接到網際網路的圖標，以獲得對互聯網。設置路由器使用PPPoE ，輸入你的用戶名稱和密碼在指定空格內。如果你沒有一個服務名稱或不知道它，讓此欄空白。當你輸入了你的資料，點擊"變更"。 你變更之後，如果你的路由器設置妥當，互聯網狀態圖標，將改為"連接"。若需要更詳細的配置你的路由器使用PPPoE ，請參閱用戶手冊。';
help_ipoa = '<b>Static IP (IPoA)</b>' + g11;
help_dial_up = '<b>外部撥號連接</b> 你必須使用數據機連接到路由器的串連埠。你的ISP提供撥號連接的電話號碼，用戶名稱，密碼等。如有特殊數據機初始化的字串，這方面的資料應當從數據機製造商。如果您的ISP提供的是一特定的IP地址，那麼你必須在屏幕的底部IP地址欄輸入它。';
wb1='WAN > Connection Type > Dynamic/Fixed IP (1483 Bridged)';
wb101='WAN > Connection Type > Static IP(IPoA)';
wb102='WAN > Connection Type > Modem Only (Disable Internet Sharing)';
wb3='IP Assigned by ISP';
wb7='VPI / VCI';
wb9='自動偵測';
wb11='No';
wb12='LLC';
wb13='VC MUX';
wpevpi1='請輸入的VPI';
var msg_vpi='VPI必須是一個數目介於0和255之間!';
wpevci1='請輸入的VCI';
var msg_vci='VCI必須是一個數目介於1和65535之間!';
wc7='Dynamic/Fixed IP (1483 Bridged)';
wc9='Static IP (IPoA)';
wc11='Modem Only (Disable Internet Sharing)';
wppoa1='WAN > Connection Type > PPPoA';
wppoa2='To enter your PPPoA settings, type in your information below and click "Apply changes".';
wpmodem1='To enter your Modem settings, type in your information below and click "Apply changes".';
IPoA='IPoA';
PPPoA='PPPoA';
Modem='Modem Only';
adsl_status='ADSL';
downstream = 'Downstream';
upstream = 'Upstream';
datarate = 'Data rate(Kbps)';

var change_lan_for_ip_conflict="Router WAN port gets an IP address who is in Router's LAN subnet, WAN port is disabled to insure LAN ports can work. As a result, you can not visit the internet now. Please change your WAN connection settings or LAN settings to solve this.";
var wizard_name = "路由器安裝實用程序";
stroute_1 = 'LAN > Static Routing';
showstroute='Static Routing';
stroute3 = 'The routing table is full!';
stroute32 = ' Network Address';
stroute33 = ' '+i11;
stroute34 = ' Gateway';
Remove='Remove';



acl_1 = '家長控制 > 存取控制';
help_acl='After enabling Access Control, pressing the "Add" button will open up the "Connected Client List" Screen. This screen lists all the clients list with MAC addresses learned from the router. In the "Connected Client List" screen you can also create a Client you want to control by filling in the blanket MAC address column. You choose one of the clients from the "Connected Client List" by pressing the "Add" button. You will return to Access Control Screen. You can press the "Edit" button under the "Member" column to setup the Acceess Control Rule for each client. '
acl_setting='Internet Access <br> Policy';
acl_2 = 'The Acl table is full';
acl_3 = 'After enabling Access Control, pressing the <b>"Add"</b> button will open up the <b>"Connected Client List"</b> Screen.  This screen lists all the clients list with MAC addresses learned from the router. In the <B>"Connected Client List" </B> screen you can also create a Client you want to control by filling in the blanket MAC address column. You choose one of the clients from the "Connected Client List" by pressing the <b>"Add"</b> button.  You will return to Access Control Screen. You can press the <b>"Edit"</b> button under the <b>"Member"</b> column to setup the Acceess Control Rule for each client.';
acl_4='按下「新增」按鈕可開啟「連接的用戶端清單」螢幕，其中列出具有從路由器獲取的MAC位址的所有用戶端。在「連接的用戶端清單」螢幕中，使用者也可以透過填寫空白MAC位址欄來建立想要控制的用戶端。在按下動作列下的「新增」按鈕以從「連接的用戶端清單」螢幕中選擇其中一個用戶端後，然後您將返回到「存取控制螢幕」。在此螢幕中，您需要為選擇的用戶端填寫控制規則的資訊。';
acl1='成員';
acl2='裝置';
acl3='媒體存取控制位址';
acl4='狀態 ';
acl5='限制';
acl6='動作';
acl7=' ';
acl8='來自訪客 SSID 的所有裝置';
acl9='成員控制規則除外';
acl10='排程';
acl11='網址清單';
acl12='網址關鍵字清單';
acl13='日';
acl14='每日';
acl15='週一';
acl16='週二';
acl17='週三';
acl18='週五';
acl19='24 小時';
acl20='自';
acl21='至';
acl22='是否要刪除成員';
acl23='已經存在。';
acl24='已經存在於成員列表內';
acl25='已經存在於客戶端列表內';
acl26='您所輸入的通訊埠號碼是不正確的';
acl27='登陸密碼';
acl28='Landing page';
acl29='登入被拒。輸入路由器密碼，從而暫時獲准登入被封鎖的網頁或服務。 ';
member_setting='成員清單';
acl_member_setting='Exception of Control Rules for Member';
Allow_All='Allow All';
Deny_All='Deny All';
acl30='您可將路由器設定為在指定日期和時間内限制/允許存取網際網路、電子郵件或其它網路服務。限制功能適用於單台電腦、一組電腦或多台電腦。';

Index='索引';
Services='服務';
Port_Rang_List='連接埠範圍清單';
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
PortService_User_Defined='使用者定義';
pro1_TCP='TCP';
pro1_UDP='UDP';
pro1_TCP_UDP='TCP&UDP';
pro1_ICMP='ICMP';
pro1_IGMP='IGMP';
pro1_None='None';

fw_access2='Please enter legal character in [0-9]!';
fw_access3='Please enter legal character in [1-65535]!';
fw_access4='Port is out of range [1 - 65535]';
fw_access5='The Port Range List is empty.';
fw_access6='The URL is invalid.';
fw_access7='The Keyword is invalid.';
fw_access8='Dupliate URL';
fw_access9='Dupliate Keyword';

Blocked_Services='Blocked Services';
Block_All_Services='封鎖所有服務';
Allowed_Services='Allowed Services';
Allow_All_Services='Allow All Services';
Blocking_Url='Website Blocking by URL Address ';
Allowing_Url='Website Allowing by URL Address ';
Block_All_URLs='封鎖所有網址';
Allow_All_URLs='允許所有網址';
URL_Address='URL 位址';

Keyword='關鍵字';
Blocking_Keyword='Website Blocking by keyword';
Allowing_Keyword='Website Allowing by keyword';



Connected_Client_List='已連線用戶端清單';
var save_reboot_time=30;
var restore_reboot_time=30;
var upgrade_reboot_time=70;
var normal_reboot_time=60;

rdt_msg1='不可執行。';
rdt_msg2='轉到首頁… ';
var disconnect_msg = 'Oops! Your connection to the router has failed.  Please reconnect to the router, click OK and retry.';
show49='訪客存取';
wguest1='無線 > 訪客存取';
wguest4='訪客登入允許通過WAN埠而進入互聯網，但限制訪客進入內聯網─LAN及WLAN。為簡化使用，該功能只能支援2.4GHz的頻率。';
wguest5='類型';
wguest6='咖啡店模式(訪客通過網頁登入)';
wguest7='WPA/WPA2 PSK';
wguest8='WEP';
wguest9='開放式';
wguest10='網路名稱(SSID)';
wguest11='最長32位,無空格';
wguest12='密碼 (PSK)';
wguest13='8-63位的字符';
wguest14='列印訪客使用設定';
wguest15='10位的16進制數字';
wlguest3='密碼長度無效。允許的最大密碼長度為 63 位，最小長度為 8 位。';
wlguest4='WEP密鑰必須是10位的16進制數字!';
wlguest5='每位訪客將需要這密碼，來連接您的無線網路。';
wlguest6='安全性類型';
wlguest7='連接無線網路:';
wlguest8='視窗';
wlguest9='用滑鼠右鍵點按Windows系統的無線網路圖示，然後從彈出的功能表中選擇「查看可用的無線網路」。';
wlguest10='連按兩下';
wlguest11='一個視窗將會被彈出，要求輸入網路密鑰。輸入上述的密碼，然後再按OK。';
wlguest12='MAC OS X';
wlguest13='按一下功能表上的無線網路圖示(右上)，並選擇';
wlguest14='一個視窗將會被彈出，要求輸入網路密鑰。輸入上述的密碼，然後再按OK。';
wlguest15='訪客存取是一種可允許訪客存取網際網路但限制存取家庭網路的功能。請向網路管理員咨詢訪客存取密碼，然後在下方鍵入。';
wlguest16='成功！您現在即可開啟網頁瀏覽器並遨游網路。';
wlguest17='密碼/PSK';
wipv61='IPv6 > 連接設置';
wipv62='IPv6 直通 >';
wipv63='連接到路由器的設備可以互相交談，使用原生的IPv6數據包。局域網上的IPv6數據包將被自動發送到所有網絡接口（以太網端口和兩個2.4 GHz和5 GHz無線網絡）。';
wipv64='當直通啟用，IPv6數據包也將被複製到廣域網接口。 （這將創建一個直接的，非安全連接到互聯網。）';
wipv65='他們對IPv6的支持信息，請聯繫您的ISP。';
wipv66='IPv6';
wipv67='Internet IPv6';
wipv68='您的網絡是IPv6兼容的。';
wipv69='直通';

show50='網站過濾';
web_filter1='家長控制/家庭安全 > 網站過濾器';
web_filter2='提供網上保護的第一層,防範不安全和不恰當的網站.';
web_filter3='過濾選項';
web_filter4='安全過濾器，讓您的家人來瀏覽互聯網時，做出更好的決策。';
web_filter5='阻止惡意/成人/非家庭合適的網站';
web_filter6='阻止惡意/成人網站';
web_filter7='阻止惡意軟件網站';
web_filter8='過濾器(關閉)';
web_filter9='阻止惡意軟件/網上誘騙/詐騙/成人內容/流產/酒精/煙草/犯罪/邪教/毒品/賭博/自殺/仇恨/暴力/家庭非合適的網站';
web_filter10='阻止惡意軟件/網上誘騙/詐騙/成人內容網站';
web_filter11='阻止惡意軟件/網上誘騙/詐騙網站';
web_filter12='使用您選擇DNS的提供商';
web_filter13='要更改您的DNS地址，請繼續到互聯網的廣域網>的 %s DNS %s';
web_filter14="網站過濾器提供安全網絡環境給孩子上網瀏覽.選擇三個較容易使用過濾器來選擇你的網絡的安全級別.";

show51='智能流量控制';
show53='多媒體特性';
mf1='這些頁面允許你調整你的路由器的行為與某些類型的媒體流量。';
mf2='為不同類型的流量,自動優化您的網絡連接';
mf3='如何使用你的路由器';
mf4='多媒體特性 > 智能流量控制';
mf5='智能流量控制將優先保證高帶寬或低延遲的音頻，視頻和遊戲等的在線體驗';
mf6='在測試中網絡將用瞬間的暫停';
mf7='速率測試:';
mf8='記錄 %s';
mf9='Ping';
mf10='下載';
mf11='上載';
mf12='速度';
mf13='Ms';
mf14='Mbps';
mf15='確認';
mf16='測試過程出錯';
mf17='手動設置';
mf18='輸入數字 {0.1-%s}.';
mf19='啟用智能流量控制:';
mf20='僅僅在 {0.1-%s} 之間.';
mf22='完成.';
mf23='當有高速上傳時，智能流量控制只能優先保證您的下載速率.';
mf24='當高速下載時，智能流量控制只能優先保證您的上傳速率.';
mf25="您的網速很高，您不需要開啟智能流量控製.";
mf26='手動記錄 %s';
mf27='運行中...';
mf28='開始速率測試';
mf29='為更好的工作，智能流量控制需要知道你的連接速度.';
mf30='智能流量控制被啟用.';
mf31='輸入（手動）';
mf32='或';
mf33='智能流量控制 (停用)';
mf43='Internet connectivity is momentarily suspended during the test.';
mf44='自動速度測試結果未必100％準確，根據互聯網流量或其他條件。比較結果，請訪問速度測試網站，或您的ISP聯繫，以確認您的上網速度。如果速度結果不一致，你可以手動輸入值。';

show52='流量圖';
qos_stats1='多媒體特性 > 流量圖';
qos_stats2='以下圖表顯示的廣域網出站和入站流量分成不同的組(優先)。圖表顯示最後10分鐘（每5秒自動更新）。';
qos_stats3='流量圖例'; 
qos_stats4='Bytes/Sec';
qos_stats5='日/小時/分鐘的時間';
qos_stats6='流量（入）';
qos_stats7='流量（出）';
qos_stats8='網絡連接與控制';
qos_stats9='語音/視頻/遊戲';
qos_stats10='網絡/網絡視頻';
qos_stats11='電子郵件/ VPN';
qos_stats12='下载/BT/其他';
qos_stats13='啟用智能流量控制積極功能 ';
qos_stats14='此';
qos_stats15='.';

new1='優化您的網絡連接.';
new2='家長控制/家庭安全';
new3='網站過濾 (安全瀏覽)';
new4='IPv6連接';
new5='您的電腦現在已經兼容IPv6';
new6='新';
new7='網絡上的設備之間的共享媒體。';
new8='新';

media_feature1='多媒體特點';
media_feature2='The bandwidth gap between LAN and WAN may significantly degrade performance of critical network applications, such as VoIP, gaming, and VPN. This QoS function allows users to classify traffic of applications and provides them with differentiated services (Diffserv).';
media_dlna1='媒體服務器';
media_dlna2='Media Features > Media Server';
media_dlna3='由Twonky享受通過DLNA設備連接到網絡的任何個人的音樂, 照片和視頻方便.';
media_dlna4='DLNA服務器';
media_dlna5='服務器名稱';
media_dlna6='共享的驅動器:';
media_dlna7='就緒';
media_dlna8='索引';
media_dlna9='服務';
media_dlna10='視頻';
media_dlna11='歌曲';
media_dlna12='圖片';
media_dlna13='Eject';
media_dlna14='刷新';
media_dlna15='應用設置';
media_dlna16='Twonky是PacketVideo Corporation (PV)家庭軟件產品線其數部分芝下.';
media_dlna17='created by PacketVideo Corporation (PV).';
media_dlna18='無標題的';
media_dlna19='沒有USB驅動器連接到路由器.';
media_dlna20='不與網絡共享的.';
media_dlna21='你有你的路由器可以索引更多的媒體，所以我們第一個12000項服務.';
media_dlna22='不能索引讀取驅動器.';

// Note this dictionary is a temporary demonstration
var langDictionary = {

// Copy belkin transation table to here	
'p100t011' : '功能面板',
'p220t001' : '您使用的是PPTP DSL連接。',
'p220t011' : 'PPTP',
'p220t012' : '點點對點通道通訊協定（PPTP）可在您與您的互聯網服務供應商（ISP）之間創建一個私有加密連接。',
'p222t001' : '您的PPTP設置有誤。',
'p300t001' : '正在檢查固件更新。',
'p300t002' : '正在為您的新路由器檢查是否存在已更新的固件',
'p300t003' : '為什麼需要最新的固件？',
'p300t004' : '固件是您的路由器用來執行網路和安全協定的軟體。更新固件可以提高您的路由器的可靠性與功能性，因此，確保您的固件保持最新大有裨益。',
'gtUpdateNoPower' : '現在使用新的固件對您的路由器進行更新。更新過程中請勿關閉電源。',
'p320t003' : '這一過程需要三分鐘左右的時間。更新進度：',
'gtFirmwareRestart' : '固件已安裝完畢，路由器將重新啟動從而使其生效。',
'p342t003' : '從無線網路清單中重新選擇您的無線網路以繼續。',
'errorSSIDEmpty' : '請為您的無線網路輸入一個名稱。',
'errorSSIDTooLong' : '您的網路名稱長度必須小於32個字元。',
'errorSSIDInvalidChars' : '您的網路名稱只能由字母、數位、標點符號和空格組成。',
'errorWEPPasswordInvalidChars' : '您的網路密碼只能由數位和從A到F的字母組成。',
'errorWEPPasswordInvalidLength' : '您的網路密碼長度必須為10個或26個字元。',
'errorWEPPasswordEmpty' : '請輸入密碼以保護您的無線網路。',
'errorWPAPasswordInvalidChars' : '您的網路密碼只能由字母、數位、標點符號和空格組成。',
'errorWPAPasswordInvalidLength' : '您的網路密碼長度必須為8至63個字元。',
'errorWPAPasswordEmpty' : '請輸入密碼以保護您的無線網路。',
'errorGenericCommitError' : '出現錯誤。請更正以下設置後再試一次。',
'p400t006' : '密碼：',
'p450t006' : '密碼：',
'p451t006' : '密碼：',
'p500t007' : '完成註冊',
'p500t008' : '稍後註冊',
'p700t011' : 'PPPoE DSL連接',
'errIpAddressEmpty' : 'IP位址不能為空。',
'errSubnetMaskEmpty' : '子網路遮罩不能為空。',
'errSubnetMaskInvalid' : '子網路遮罩格式不正確。請檢查數值。',
'errDefaultGatewayEmpty' : '預設閘道器位址不能為空。',
'errDNSServerEmpty' : 'DNS伺服器位址不能為空。',
'1781' : 'Vuze 離線下載',
'1782' : '清除所有離線下載將清除佇列中的所有專案（包括部分完成和已完成的檔）。',
'1783' : '清除所有離線下載',
'7102' : '貝爾金Intellistream可優化高頻寬和低延遲服務（如語音、視頻和遊戲）以提供最佳線上體驗。',
'7103' : '為提供更好的服務，Intellistream需要知道您的連線速度。',
'7104' : '測試期間，互聯網連通性將被暫時中止。',
'7105' : '測試期間，互聯網連通性被暫時中止。',
'7106' : '運行一次網速測試',
'7107' : '網速測試',
'7108' : '手動輸入',
'7109' : 'Ping',
'7110' : '下載<br>速度',
'7111' : '上載<br>速度',
'7112' : '運行中……',
'7113' : '已完成。',
'7114' : '測試過程中出現錯誤。',
'7115' : '輸入0.1－100之間的數字。',
'7116' : '輸入0.1－1000之間的數字。',
'7117' : '僅允許0.1－100之間的數字。',
'7118' : '有了您的最高上載速度，Intellistream僅能優化您的下載速度。',
'7119' : '有了您的最高下載速度，Intellistream僅能優化您的上載速度。',
'7120' : '高英特網速度條件下，Intellistream無需啟動。',
'7121' : '記錄於',
'7122' : '手動記錄於',
'7123' : '啟用Intellistream：',
'7124' : 'Intellistream已啟用。',
'7125' : 'Intellistream已禁用。',
'7126' : '手動設置',
'gtBBSTitle' : '歡迎您進入貝爾金路由器設置頁面！',
'gtBack' : '返回功能面板',
'Support4t036' : '閱讀所有相關內容。',
'Support4t037' : '在聯網設備中輸入以下網址，來瞭解如何自行解決該問題：<STRONG>www.belkin.com/support/asdlkj</STRONG>',
'gtReadHelp' : '拉起一個設備連接到互聯網，並學會如何解決自己的問題，下面的網址：<STRONG> www.belkin.com/support/asdlkj</STRONG>',
'Support5t014' : '閱讀所有相關內容。',
'p1200t001' : '一個小更安全。',
'p1200t002' : '您可以進一步保護你的路由器帶有密碼鎖的儀表板。',
'errsetempt' : '請輸入您的密碼。',
'errorpwdEmpty' : '請輸入您的密碼。',
'errorpwdError' : '您輸入的密碼不正確。',
'60' : '重複管理員',
'61' : '該設備',
'62' : '目前正由……控制！！',
'gtDisconnected' : '已離線',
'dft005' : '貝爾金幫助中心',
'dhToggleBand' : '顯示5.0Ghz',
'419' : '剩餘……秒。',
'422' : '成功恢復設置',
'423' : '恢復檔案類型不適用於該設備。恢復失敗。請獲取正確的檔後再試一次。',
'533' : '如果您的路由器出現運行不正常的跡象，可能需要重新開機路由器。重新啟動路由器不會刪除您的設置。',
'1200' : '正在應用您的更改。請等待……',
'1386' : '升級檔案類型或版本不適用於該設備。升級失敗。請獲取正確的檔後再試一次。',
'2053' : '成功應用更改',
'2054' : '成功更新固件',
'766' : '您輸入的子網路遮罩數位無效。',
'1356' : '無效的閘道IP位址，第一個數字應為1至223之間的值。',
'1357' : '無效的閘道IP地址，第二個和第三個數字應為0至255之間的值。',
'1358' : '無效的閘道IP位址，最後一個數字應為1至254之間的值。',
'1360' : '無效的IP位址，第一個數字應為1至223之間的值。',
'1354' : '無效的IP位址，第二個和第三個數字應為0至255之間的值。',
'675' : '無效的IP位址，最後一個數字應為1至254之間的值。',
'403' : '您輸入的IP位址無效',
'760' : 'IP地址',
'1760' : '拒絕全部',
'395' : '或者您未能輸入所有數字，或者您輸入的數字無效。每一輸入框中的數字應為0－255之間的值。',
'1395' : '未配置',
'1281' : '廣域網路IP位址不能覆蓋局域網端子網。',
'641' : '或者您未能輸入所有數字，或者您輸入的數字無效。數字應為0－255之間的值。',
'errUsernameTooLong' : '您的用戶名長度必須小於64個字元。',
'errUsernameInvalid' : '您的用戶名只能由字母、數位、標點符號和空格組成。',
'errPasswordEmpty' : '請輸入您的密碼。',
'errPasswordTooLong' : '您的密碼長度必須小於64個字元。',
'errPasswordInvalid' : '您的用戶名只能由字母、數位、標點符號和空格組成。',
'1398' : '確定',
'1399' : '取消',
'374' : '開啟',
'375' : '關閉',
'47' : '更多資訊',
'48' : '清除更改',
'49' : '保存',
'96' : '啟用',
'119' : '禁用',
'1298' : '關閉',
'113' : '<< 添加',
'114' : '刪除',
'128' : '刷新',
'318' : '已禁用',
'317' : '已啟用',
'2006' : '是',
'2007' : '否',
'3300' : '新',
'50' : '更新動態DNS',
'98' : '通過DDNS供應商所設置的帳戶，您可以使用動態域名系統（DDNS）訪問您的家庭網絡。您可以在Dyn.com (<a href=\'http://www.dyn.com\' target=\'_blank\'>www.dyn.com</a>)設定您的帳戶，然後在您的路由器上啟動DDNS的功能。使用這項服務前，您必須先創建一個帳戶。',
'100' : '用戶名',
'101' : '密碼',
'102' : '功能變數名稱',
'742' : '請輸入您的用戶名',
'757' : '請輸入您的密碼！',
'822' : '無效，請更正！',
'1307' : 'DynDNS',
'1308' : 'DDNS服務',
'1309' : 'DDNS狀態',
'1310' : '網站',
'1315' : '自動更新DDNS',
'1316' : '每日',
'1317' : '更新一次',
'1369' : '已註冊',
'1380' : '錯誤的配置',
'1381' : '連接中',
'1382' : '連接失敗',
'1383' : '登錄失敗',
'1384' : '註冊失敗',
'1385' : '未註冊',
'1751' : '提供網路媒體播放機相容的媒體檔',
'702' : '功能變數名稱服務（DNS）可將功能變數名稱轉換成IP位址，用於定位全球電腦服務和設備。如果您的Internet服務提供者（ISP）已為您提供DNS位址，請在這裡輸入。',
'703' : '自動從ISP獲取',
'704' : 'DNS地址',
'705' : '輔助DNS地址',
'706' : 'DNS＝功能變數名稱伺服器。將www.belkin.com這樣的的URL（統一資源定位符）轉換為IP位址的互聯網上的伺服器。',
'707' : '如果您不使用自動DNS功能，則必須輸入由ISP提供的DNS設置。',
'780' : '指定IP地址',
'823' : '要更改DNS，首先訪問{網站篩檢程式}，然後選擇“無篩檢程式”。',
'55' : '固件信息。',
'56' : '無路由器可用的新固件更新！',
'57' : '無法連接到固件資訊伺服器，請仔細檢查廣域網路連接。',
'58' : '當前固件：',
'59' : '下載固件：',
'64' : '可以配置路由器以在特定日期和時間限制接入互聯網、電子郵件或其他網路服務。',
'65' : 'IP地址',
'66' : '埠',
'67' : '類型',
'68' : '阻斷時間',
'69' : '日期',
'70' : '時間',
'71' : '啟用',
'72' : '兩者都',
'73' : '始終',
'74' : '阻斷',
'75' : '星期日',
'76' : '星期一',
'77' : '星期二',
'78' : '星期三',
'79' : '星期四',
'80' : '星期五',
'81' : '星期六',
'82' : ':00 P.M.',
'83' : ':00 A.M.',
'84' : '或者您沒有輸入用戶端IP位址，或者，您輸入的IP位址的數位無效。IP位址輸入框中的數字應為1－254之間的值。',
'85' : '您輸入的埠號無效。',
'86' : '埠範圍的後一數值必須大於前一數值。',
'87' : 'IP地址範圍的後一數值必須大於前一數值。',
'88' : '埠輸入框中的數字應為1－65535之間的值。',
'1311' : '未選中任何應用程式。',
'1312' : '檢測到重複的輸入值。該規則已存在。',
'1355' : '路由器的局域網IP位址應從IP地址範圍內排除。',
'90' : '通過DMZ，您可以將指定的網路上的設備置於路由器防火牆之外，而其他設備仍然受防火牆保護。',
'91' : '無法保護DMZ中的電腦免受駭客攻擊。',
'92' : '如需將一台電腦添加至DMZ，請在下面的欄位中輸入其IP位址的最後一位元數位，並選擇“啟用”。按一下“保存”來使更改生效。',
'93' : '虛擬DMZ主機的IP位址',
'97' : '靜態IP位址',
'95' : '私有IP地址',
'103' : '使啟用DMZ之前，請輸入IP位址',
'1232' : 'DMZ主機的IP位址無效！',
'1253' : 'IP地址超出[1－254]範圍！',
'105' : '通過此功能，您可以建立一個允許用戶端列表。當啟用此功能時，您必須輸入您網路上每一用戶端的MAC位址，使得網路能夠相互訪問。',
'106' : '啟用MAC地址過濾',
'107' : 'MAC地址過濾列表',
'108' : '阻斷',
'110' : 'MAC地址',
'112' : '該MAC已添加至列表！',
'669' : '無效的MAC位址，這是一個空位址。',
'902' : '無效的MAC地址',
'903' : '請更正！',
'904' : '正確的MAC位址應該是xx:xx:xx:xx:xx:xx，其中x是0－9以及a－f之間的值！',
'1062' : '注意：您無法刪除您正在用來訪問路由器管理功能的電腦的MAC位址。（您正在使用的電腦）。',
'1602' : '用戶自訂1',
'117' : '您的路由器配備有防火牆，能夠保護您的網路免受多種常見駭客攻擊，其中包括Ping炸彈（PoD）和拒絕服務（DoS）攻擊。如有必要，您可以開啟防火牆功能。關閉防火牆保護並不會完全使您的網路容易受到駭客攻擊，但我們建議您在可能的情況下儘量啟用防火牆。',
'118' : '防火牆啟用/禁用',
'121' : '<b>高級功能！</b>您可以配置路由器使其對ICMP ping不回應（ping廣域網路埠）。這樣的配置可提高安全水準。',
'1076' : '阻斷ICMP Ping',
'1827' : '列印來賓訪問設置',
'2702' : '來賓訪問允許通過廣域網路埠接入互聯網，但限制來賓訪問內部網路、局域網和無線局域網。為簡化使用，該功能僅2.4GHz支援。',
'279' : '入站埠',
'1828' : '餐館模式（來賓通過網頁登錄）',
'1619' : 'WPA/WPA2 PSK',
'1829' : 'WEP',
'1830' : '開啟',
'1831' : '最大長度為32字元，不能有空格',
'1617' : '密碼（PSK）',
'842' : '認證',
'845' : '加密技術',
'854' : '預共用金鑰（PSK）',
'857' : '隱藏PSK',
'855' : 'WPA-PSK（無伺服器）',
'1335' : '網路名稱（SSID）',
'1825' : '8－63字元',
'1826' : '10個十六進位數字',
'1834' : '網路名稱',
'409' : '密碼',
'1835' : '連接至您的無線網路的每一名訪客均需要此密碼。',
'1715' : '安全類型',
'1836' : '連接無線網路的方式：',
'1837' : 'Windows',
'1838' : '1. 按右鍵Windows系統託盤中的無線網路圖示，從彈出的功能表中選擇“查看可用的無線網路”。',
'1839' : '2. 按兩下',
'1840' : ' 網路。',
'1841' : '3. 將彈出一個要求輸入網路密碼的視窗。輸入上述密碼並按一下確定。',
'1842' : 'MAC OS X',
'1843' : '1. 按一下功能表列（右上方）中的無線網路圖示，並選擇',
'1844' : ' 網路。',
'1845' : '2. 將彈出一個要求輸入網路密碼的視窗。輸入上述密碼並按一下確定。',
'1832' : '餐館模式',
'1833' : '開放模式',
'1201' : 'SSID不能設置為空！',
'1812' : '密碼長度無效。最大密碼長度為63個字元，最小密碼長度為8個字元。',
'1824' : 'WEP金鑰必須是10個十六進位數位！',
'414' : '登錄錯誤！！',
'1811' : '來賓訪問是一項允許用戶訪問互聯網，但限制接入家用網路的功能。請向網路系統管理員詢問來賓訪問密碼，並將其輸入在下方。',
'1813' : '成功！您現在可以打開網頁流覽器來訪問互聯網。',
'909' : '“IP位址”為路由器的內部IP位址。如需訪問高級設置介面，請在流覽器的位址欄輸入該IP位址。可以更改這一IP位址，如有必要。如需更改IP位址，請輸入新的IP位址並按一下“保存”。您選擇的IP位址必須是非路由IP位址。以下是非路由IP的示例：192.168.2.1、10.0.0.1、172.16.0.1。',
'917' : '沒有必要更改子網路遮罩。如有必要，可對子網路遮罩進行更改。僅在有特別原因時，對子網路遮罩進行更改。',
'929' : '通過為網路上的每一台電腦分配IP位址，DHCP伺服器功能使得建立一個網路變得很容易。如有必要，可將DHCP伺服器關閉。關閉DHCP伺服器，需要您為網路上的每一台電腦手動設置靜態IP位址。IP位址集區是為您網路上的電腦動態分配預留的IP位址範圍。預設值為2－200（199台電腦），如果您需要更改該數位，您可以輸入一個新的起始IP位址和一個新的終止IP位址，並按一下“保存”。',
'935' : '您可以為您的網路設置一個本地功能變數名稱（網路名稱）。除非有特定理由，否則沒有必要更改此設置。您可以對網路進行任意命名，如“我的網路”。',
'962' : '如需設置路由器使用PPPoE，請在空格處輸入您的ISP提供的用戶名和密碼。如果您沒有或不知道服務名稱，請將“服務名稱”欄位留空。當您輸入完您的資訊之後，請按一下“保存”。當您保存之後，如果您的路由器設置正確，狀態指示燈將會顯示“線上”。',
'967' : '有些ISP(互联网服务提供商)使用PPTP协议连接用户到中央办公室。这就要求您输入您的ISP提供的几个额外的设置。如果更改已保存和过程已成功,互联网状态的指示灯会显示绿色的.',
'971' : '通過按一下“保存”來選擇Telstra Bigpond連接類型。',
'982' : '……分鐘無活動後斷開',
'983' : '一段沒有網絡活動的時間之後，路由器將會從你的ISP（互聯網服務提供商）斷線.如果您的ISP（互聯網服務提供商）服務以分鐘計算,使用此選項.將節省錢',
'htDDNS' : '什麼是DDNS？',
'htDNS' : '什麼是DNS？',
'htDMZ' : '什麼是DMZ？',
'htLAN' : '局域網設置能控制什麼？',
'htWANMain' : '廣域網路設置是什麼？',
'htWANMAC' : '什麼是MAC地址？',
'htWAN_PPPOE' : 'PPPoE設置',
'htWAN_PPTP' : 'PPTP設置',
'htIPv6' : '什麼是IPv6？',
'htWifiID' : '什麼是網路名稱和通道設置？',
'htWifiIDContent' : '網路名稱稱作SSID（服務集標識）。要加入路由器網路，網路上的所有用戶端必須知道該SSID。',
'htWifiSec' : '什麼是Wi-Fi安全？',
'htWifiSecContent' : '所有貝爾金路由器均在Wi-Fi安全啟用下運行。Wi-Fi安全為防止未經授權訪問到您的網路提供了一層保護。當安全功能開啟時，使用者需要密碼才能訪問您的網路。',
'htWifiWPS' : '什麼是Wi-Fi保護設置？',
'htWifiWPSContent' : 'Wi-Fi保護設置為可選方式，意在便於您在家庭或小型辦公室設置啟用安全的Wi-Fi網路。通過選擇網路名稱並輸入網路密碼，也可將無Wi-Fi保護設置（WPS）的設備添加至您的網路。',
'htWifiGuest' : '來賓訪問是如何使用的？',
'htWifiGuestContent' : '當開啟時，來賓訪問將創建一個單獨的Wi-Fi網路，該網路可以訪問互聯網但不能訪問網路上的其他設備。',
'htAP' : '我能否將我的路由器用作接入點？',
'htAPContent' : '可以對貝爾金路由器進行設置，使其禁用所有的路由選擇及防火牆功能，僅作為接入點使用。將路由器設置為接入點，是為已有的有線網路添加無線功能的最常用方式。',
'htQos' : '什麼是貝爾金Intellistream？',
'htDLNA' : '由Twonky提供技術支援的貝爾金媒體伺服器',
'htPortForward' : '什麼是埠轉發？',
'htPortForwardContent' : '埠轉發允許遠端電腦連接至本地網路上的特定程式或服務。例如，您可以使用埠轉發來在您的網路上運行Web伺服器（80埠）。大多數現行的應用程式可以自動建立任何所需的埠而無需使用埠轉發。',
'htWanPing' : '廣域網路Ping阻斷的作用是什麼？',
'htWanPingContent' : '廣域網路Ping阻斷能夠提高您的網路安全等級，可防止外部互聯網用戶找出您的IP位址。廣域網路Ping阻斷通過不對您網路以外的Ping作出回應來達到這一目的。',
'htRestart' : '為什麼要重新啟動路由器？',
'htRestoreFC' : '恢復出廠預設值會怎麼樣？',
'htSaveSettings' : '我為什麼要保存/備份我的設置？',
'htRestoreSettings' : '恢復我以前的設置是什麼意思？',
'htSystem' : '什麼是系統設置？',
'htSystemContent' : '通過此頁面，您可以對所有基本路由器設置進行設定，包括時區和管理員密碼。',
'htSelfHeal' : '什麼是自我修復？',
'hLANSettings' : '本頁面可説明您設置新的連接，您可以開啟/關閉DHCP，並設置本地網路上的路由器IP位址。',
'htDHCPClientList' : '什麼是DHCP用戶端列表？',
'htDHCPClientListContent' : '此頁顯示連接至您的網路上的每一設備的IP位址、主機名稱和MAC位址。如果電腦未指定主機名稱，則主機名稱欄位為空。點擊“刷新”以更新列表。',
'hWebsiteFilters' : '網站篩檢程式用作防止不安全/不當網站的保護層。網站篩檢程式通過將網站名稱與經批准的網站列表進行對比對照，來對網站進行選擇性遮罩。',
'hWANSettings' : '這些網路設置是指您的Internet服務提供者（ISP）所提供的連接。從列表中選擇您的ISP所提供的連接類型。',
'htChannel' : '與無線電使用不同網站的方式相類似，您的路由器可以在數個不同的頻道廣播來和您網路上的設備通信。使用“自動”，通常是最佳選擇。',
'3430' : 'IPv6 （互聯網協議第6版）是一個設計用來替代IPv4的互聯網協議（IP），可指示幾乎所有的互聯網流量。一些互聯網服務供應商（ISP）幾乎用完了IP地址。通過使用更大的數位來創建IP位址，IPv6可使更多的設備在互聯網上通信。您的ISP將告知您是否需要使用IPv6。',
'3431' : '連接類型',
'3432' : '自動配置/DHCPv6（預設）',
'3433' : '以下地址由您的ISP提供。DHCPv6可提供附件功能，以提高連通性。',
'3434' : '廣域網路',
'3435' : '廣域網路地址',
'3436' : '閘道',
'3437' : '局域網',
'3438' : '本節內容用於配置您的路由器內部網路設置。如果您更改了此處的局域網IPv6位址，您可能需要調整您的電腦網路設置以再次訪問網路。',
'3439' : '局域網首碼',
'3440' : '介面ID',
'3441' : '本地鏈路',
'3442' : 'DNS',
'3443' : '如果在WAN路由器廣播或DHCPv6消息可用，您的IPv6 DNS的默認設置來自您的互聯網服務供應商（IPS）。',
'3444' : '首選',
'3445' : '備用',
'3446' : 'PPPoE over IPv6',
'3447' : '點對點乙太網協定（PPPoE）主要用於DSL服務來將DSL數據機連接至互聯網。',
'3448' : '登錄',
'3450' : '隱藏密碼',
'3451' : '用戶名',
'3452' : '密碼',
'3453' : '服務名稱',
'3454' : '6to4隧道',
'3455' : '允許IPv6資料包在IPv4網路上傳輸，而不需要配置明確的隧道。如果您的互聯網服務供應商（ISP）不支援IPv6，則可使用這種連接方式。',
'3456' : '遠程6to4中繼路由器',
'3457' : '直通',
'3458' : '連接到路由器的設備可以通過原生IPv6資料包互相通信。局域網內的IPv6資料包將自動發送至所有局域網介面（乙太網埠以及2.4 GHz和5 GHz無線網路）。',
'3459' : '當啟用IPv6直通功能時，IPv6資料包也將被複製至廣域網路介面。（當該功能啟用時，將創建一個與互聯網的直接非安全連接。）',
'3460' : '請直接聯繫您的ISP來瞭解其對IPv6的支援資訊。',
'3461' : '靜態IPv6',
'3462' : '靜態IPv6由於難以管理而不常使用。連接到多個網路的設備，如筆記型電腦或移動設備，不宜使用靜態IPv6。',
'3463' : '僅局域網直通',
'3464' : 'IPv6廣域網路直通禁用。局域網和WiFi上的所有本地設備仍然可以直接互相通信，但路由器不會從互聯網收發任何IPv6資料包，也不會直接回應任何IPv6資料包。',
'3465' : '您的互聯網服務供應商未提供IPv6連通性。請聯繫您的互聯網服務供應商來瞭解其對IPv6的支援資訊或建立連通性。',
'3466' : '系統已經為您的設備自動設置僅局域網直通，用於設備之間互相發送IPv6資料包。另一選項為使用“6to4隧道”通過IPv4連接來訪問互聯網。',
'3467' : '每一輸入框中應包含四個十六進位數位（0－9和a－f）。',
'3468' : '請輸入一個非多播位址。多播地址一般以ff開頭。',
'3469' : '首碼長度應為1－127。首碼長度通常是64、56或48個字元。',
'3470' : '無IPv4連接。',
'3471' : 'DNS設置被您的家長控制重載。',
'3472' : '網站篩檢程式',
'3473' : '在選擇PPPoE over IPv6之前，請通過“Internet廣域網路＞連接設置”來選擇PPPoE。',
'3474' : '網路連接丟失。請檢查您的廣域網路連接類型或聯繫您的互聯網供應商（ISP）。',
'3475' : '您的互聯網服務供應商（ISP）提供的默認DNS。',
'gtTryManu' : '如果您知道您的連接類型，您可以進行',
'gtSetManual' : '手動設置',
'2100' : '訪問被拒絕 輸入路由器密碼來臨時允許進入被阻斷的網頁或服務。',
'2101' : '登錄頁面',
'2102' : '前往',
'354' : '此頁顯示連接至您的網路上的每台電腦的IP位址、主機名稱和MAC地址。如果電腦未指定主機名稱，則主機名稱欄位為空。按下“刷新”將更新列表。',
'355' : 'IP地址',
'356' : '主機名稱',
'357' : 'MAC地址',
'370' : '本頁面可説明您設置新的連接，您可以開啟/關閉DHCP，並設置本地網路上的路由器IP位址。',
'371' : 'IP地址',
'372' : '子網路遮罩',
'373' : 'DHCP伺服器',
'378' : '通過為網路上的每一台電腦分配IP位址，DHCP伺服器功能使得建立一個網路變得很容易。沒有必要對此進行任何更改。',
'379' : 'IP位址集區起始位址',
'380' : 'IP位址集區終止地址',
'381' : '租約時間',
'382' : '永久',
'383' : '半小時',
'384' : '一小時',
'385' : '兩小時',
'386' : '半天',
'387' : '一天',
'388' : '兩天',
'389' : '一周',
'390' : '兩周',
'391' : 'DHCP伺服器持續時間內將保留每一台電腦的IP位址。',
'392' : '本地功能變數名稱',
'393' : '可選',
'394' : '此功能允許您為您的網路制定一個名稱。',
'397' : 'IP位址集區必須和閘道IP處於同一子網',
'398' : '終止IP地址必須大於起始IP地址。',
'399' : '局域網IP位址不能位於DHCP位址集區。',
'400' : '您選擇的IP位址必須是非路由IP位址。',
'401' : '無效的局域網IP位址，第一個數字不能是127或0。',
'404' : '請將您流覽器狀態列中的IP位址輸入框手動更改為新的局域網位址。',
'406' : '您確定要更改局域網IP位址嗎？',
'416' : '192.168.y.x（其中，y為0至255之間的任意數字，x為1至254之間的任意數字。）',
'417' : '10.y.y.x（其中，y為0至255之間的任意數字，x為1至254之間的任意數字。）',
'418' : '172.z.y.x（其中，z為16至31之間的任意數字，y為0至255之間的任意數字，x是1至254之間的任意數字。）',
'713' : '無效的本地功能變數名稱：',
'1228' : 'IP位址集區起始位址無效！',
'1229' : 'IP位址集區終止地址無效！',
'1240' : '局域網IP位址無效！',
'3' : '登錄',
'408' : '在您可以更改任何設置之前，您需要使用密碼進行登錄。如果您還未設置自訂密碼，則將該欄位留空，並點擊“提交”。',
'410' : '默認＝留空',
'412' : '提交',
'1371' : '密碼不正確',
'1372' : '請確認您的密碼，然後再試一次。',
'124' : '路由器會保存一份路由器內部所有活動的日誌，如電腦登錄和登出，以及從互聯網訪問路由器的所有嘗試。',
'125' : '日誌檔',
'126' : '保存',
'127' : '清除',
'1302' : '系統日誌',
'1303' : '防火牆日誌',
'8' : '局域網設置',
'9' : '本地網路設置',
'10' : '已連接的設備',
'2500' : '靜態路由',
'11' : 'Internet廣域網路',
'335' : '連接類型',
'690' : '動態',
'692' : '靜態',
'694' : 'PPPoE',
'696' : 'PPTP',
'698' : 'Telstra BigPond/OptusNet電纜',
'42' : 'IPV6',
'43' : 'IPv6連接',
'13' : 'DNS',
'14' : 'MAC地址',
'16' : 'WiFi',
'17' : '網路名稱',
'18' : '安全性',
'803' : '128位WEP',
'804' : '64位WEP',
'1296' : 'WPA＋WPA2-Personal（PSK）',
'1297' : 'WPA/WPA2-Enterprise（RADIUS）',
'805' : 'WPA（Radius伺服器）',
'1319' : 'Wi-Fi保護設置',
'777' : '用作接入點',
'833' : 'MAC位址控制',
'1613' : '來賓訪問',
'1850' : '家長控制',
'1851' : '網站篩檢程式',
'1710' : '存取控制',
'20' : '媒體',
'7151' : '流量圖',
'7000' : '媒體伺服器',
'1780' : 'Torrent Mate',
'1790' : '可選軟體',
'23' : '防火牆',
'24' : '端口轉發',
'25' : '用戶端IP地址篩檢程式',
'26' : 'MAC地址過濾',
'27' : 'DMZ',
'41' : 'DDNS',
'28' : '廣域網路Ping阻斷',
'29' : '安全性記錄檔',
'30' : '應用程式',
'32' : '重新啟動路由器',
'34' : '恢復出廠設置',
'35' : '保存/備份設置',
'36' : '恢復至以前的設置',
'37' : '固件更新',
'38' : '系統設置',
'39' : '自我修復',
'1900' : '註冊',
'132' : '入站埠範圍不正確。',
'133' : '私有埠範圍不正確。',
'134' : '此功能允許您為外部（Internet）服務提供路由，如Web伺服器（埠80）、FTP伺服器（埠21）或通過路由器連接至您的內部網路的其他應用程式。',
'276' : '清除條目',
'277' : '添加',
'278' : '描述',
'280' : '類型',
'281' : '私有IP地址',
'282' : '私有埠',
'376' : '所有',
'411' : '清除',
'648' : '無效字元',
'672' : '無效的數字！必須在1……65535之間。',
'905' : '所有條目已滿。\n請刪除一些條目，然後再試一次。',
'906' : '您要清除該條目嗎？',
'907' : '您要清除所有條目嗎？',
'1241' : '廣域網路IP地址無效！',
'1250' : '埠無效！',
'1362' : '描述為空。',
'1601' : '自動',
'2055' : '入站埠範圍重複！！',
'2056' : '專用埠範圍重複',
'3310' : 'Intellistream',
'3311' : '優化您的互聯網連接。',
'3312' : '媒體伺服器',
'3313' : '在網路上的設備之間共用媒體。',
'3314' : '家長控制',
'3315' : '互聯網安全的DNS安全篩檢程式',
'3316' : 'IPv6連接',
'3317' : '現在，您的網路已相容IPv6。',
'1852' : '網站篩檢程式用作防止不安全/不當網站的保護層。網站篩檢程式通過將網站名稱與經批准的網站列表進行對比對照，來對網站進行選擇性遮罩。',
'1854' : '過濾選項',
'1856' : '無篩檢程式',
'1858' : '阻斷惡意網站',
'1859' : '阻斷惡意軟體、網路釣魚和詐騙網站。',
'1860' : '阻斷惡意網站和成人網站',
'1861' : '阻斷惡意軟體、網路釣魚、詐騙網站和含有色情內容的網站。',
'1862' : '阻斷惡意網站、成人網站及其他非家庭友好網站。',
'1863' : '阻斷惡意軟體、網路釣魚、詐騙網站以及含有色情材料、成人內容、墮胎、酒精、煙草、犯罪、邪教、吸毒、賭博、仇恨、自殺或暴力內容的網站。',
'1864' : '如需更改您的DNS地址，請通過“Internet廣域網路>{DNS}”繼續',
'7152' : '下面的圖表顯示了廣域網路出站和入站流量優先分成不同的類別。圖表顯示的是最後10分鐘的內容（每5秒自動更新一次）。',
'7154' : '流量圖',
'7155' : '入站流量',
'7156' : '出站流量',
'7157' : '如需啟動此功能，請',
'7158' : '在此處啟用Intellistream',
'7159' : '.',
'7160' : '網路連通性與控制',
'7161' : '語音、視頻聊天和遊戲',
'7162' : '網路與網路視頻',
'7163' : '電子郵件和VPN',
'7164' : '下載、torrent文件及其他',
'7170' : '位元組/秒',
'7174' : '日期/小時：分鐘',
'326' : '本地網路',
'327' : '局域網/無線局域網MAC',
'332' : 'DHCP伺服器',
'333' : 'Internet設置',
'334' : '廣域網路MAC地址',
'337' : '廣域網路IP地址',
'338' : '預設閘道器',
'339' : 'DNS地址',
'gtGuestName' : '來賓SSID',
'gtGuestKey' : '來賓金鑰',
'347' : '您需要登錄才可以更改設置。',
'2022' : '僅數據機',
'2031' : '連接',
'2032' : '斷開',
'2033' : '雜訊容限',
'2034' : '下行',
'2035' : '上行',
'2036' : '衰減（dB）',
'2037' : '輸出功率（dBm）',
'2038' : '資料傳輸速率（Kbps）',
'tDashboard' : '歡迎您進入貝爾金路由器功能面板！',
'rtFeature' : '特徵',
'rtLink' : '路由器鏈路',
'p1310t001' : '連接詳細資訊',
'p1310t002' : '重新測試連接',
'p1310t003' : '上一次檢查',
'p1310t004' : '下載速度',
'p1310t005' : '上載速度',
'p1000t001' : '已連接的設備',
'p1000t002' : '查看全部',
'2501' : '請輸入以下配置參數',
'2502' : '網路位址',
'2503' : '子網路遮罩',
'2504' : '閘道',
'396' : '您輸入的子網路遮罩數位無效。',
'1231' : '閘道無效！',
'1361' : '無效的IP位址，第一個數字應為1至254之間的值。',
'1800' : '您輸入的IP位址與子網路遮罩不匹配。',
'Support1t011' : '閱讀所有相關內容。',
'Support2t011' : '閱讀所有相關內容。',
'Support2t012' : '在聯網設備中輸入以下網址，來瞭解如何自行解決該問題：<STRONG>www.belkin.com/support/asdlkj</STRONG>',
'Support3t011' : '閱讀所有相關內容。',
'Support3t012' : '在聯網設備中輸入以下網址，來瞭解如何自行解決該問題：<STRONG>www.belkin.com/support/asdlkj</STRONG>',
'Support6t036' : '閱讀所有相關內容。',
'425' : '恢復出廠預設值會將您的路由器恢復至初始設置。我們建議您在恢復至初始設置之前<a href="ut_save.html">保存/備份您的設置</a>。通過保存您的路由器配置，您可以在設置丟失或更改時對其進行恢復。',
'426' : '警告：所有設置都將丟失！\n您確定要這樣做嗎？',
'427' : '恢復默認設置將耗時$s秒。在此過程中，請勿關閉路由器的電源。',
'428' : '不會恢復出廠設置。不會丟失任何設置！',
'429' : '還原為預設值',
'301' : '自我修復將每週重新啟動您的路由器一次，從而使您的網路更加暢通無阻。',
'302' : '自動初始化我的路由器',
'303' : '設置天',
'304' : '設置時間',
'527' : '通過恢復以前的設置，您可以將您的路由器設置為您此前所保存的任意配置。',
'528' : '重置',
'529' : '輸入包含備份設置檔的名稱。',
'530' : '您要繼續並重置設置嗎？',
'531' : '當設置重置後，設備可能在一分鐘內無法回應命令。\n\n這是正常現象。在此期間，請勿關閉設備電源。',
'451' : '通過保存您的路由器配置，您可以在設置丟失或更改時對其進行恢復。我們建議您在進行固件更新之前保存您的設置。',
'539' : '保存',
'130' : '或者您未能輸入所有IP位址，或者您輸入的數位無效。IP位址輸入框中的數字應為1－254之間的值。',
'541' : '管理員密碼：',
'542' : '路由器無密碼運行。如果您出於安全考慮，需要添加密碼，您可以在這裡設置。',
'543' : '請輸入您的當前密碼',
'544' : '請輸入您的新密碼',
'545' : '請確認您的新密碼',
'546' : '登錄超時',
'547' : '（1－99分鐘）',
'548' : '時間和時區：',
'549' : '一月',
'550' : '請設置您的時區。如果您處於夏令時區域，請勾選此核取方塊。',
'551' : '時區',
'606' : '夏令時',
'607' : '自動調整夏令時',
'608' : '遠端系統管理：',
'609' : '高級功能！',
'610' : '通過遠端系統管理，在任何地點您都可以通過互聯網來更改您的路由器設置。在您啟用此功能之前，',
'611' : '請確保您已經設置了管理員密碼。',
'642' : '開啟遠端系統管理會增加安全風險。僅在必要時短時間將其開啟，當您不使用時將其關閉，並請設置一個密碼。',
'612' : '任何IP位址均可對路由器進行遠端系統管理。',
'613' : '只有這一個IP位址可以對路由器進行遠端系統管理。',
'614' : '遠端系統管理啟用/禁用',
'615' : '分配埠已用於虛擬伺服器。',
'616' : '分配IP地址與當前廣域網路IP地址衝突。',
'617' : 'UPNP的啟用：',
'618' : '允許您開啟或關閉路由器的UPnP功能。如果您使用支援UPnP的應用程式，啟用UPnP將允許這些應用程式對路由器進行自動配置。',
'619' : 'UPNP啟用/禁用',
'620' : '自動更新固件的啟用：',
'621' : '允許您自動檢查路由器固件更新的可用性。',
'622' : '自動更新固件啟用/禁用',
'623' : '當前密碼無效。',
'624' : '您兩次輸入的新密碼不匹配。請再試一次。',
'626' : '密碼長度無效。最大密碼長度為12個字元，最小密碼長度為3個字元。',
'628' : '我們強烈建議您設置管理員密碼。',
'629' : '主NTP伺服器',
'630' : '輔助NTP伺服器',
'640' : '遠端存取埠',
'738' : '您輸入的閒置時間數位無效。該數位必須是1－99之間的一個整數。',
'796' : '啟用Turbo模式，可使路由器或接入點使用Frame Burst（幀突發）來獲得從路由器或接入點到802.11g用戶端的最大的輸送量。Turbo模式將用於支援Turbo模式的802.11g用戶端。使用最新的驅動程式的貝爾金802.11g用戶端可支援Turbo模式。當啟用Turbo模式時，不支援Turbo模式的用戶端也能夠正常運行。',
'1282' : '二月',
'1283' : '三月',
'1284' : '四月',
'1285' : '五月',
'1286' : '六月',
'1287' : '七月',
'1288' : '八月',
'1289' : '九月',
'1290' : '十月',
'1291' : '十一月',
'1292' : '十二月',
'1373' : '澳大利亞',
'1374' : '新西蘭',
'1375' : '北美地區',
'1376' : '歐洲',
'1377' : '亞太地區',
'2300' : '（GMT－12：00）埃尼威托克，誇賈林',
'2301' : '（GMT－11：00）中途島，薩摩亞',
'2302' : '（GMT－10：00）夏威夷',
'2303' : '（GMT－09：00）阿拉斯加',
'2304' : '（GMT－08：00）太平洋時間（美國和加拿大）；蒂華納',
'2305' : '（GMT－07：00）亞利桑那',
'2306' : '（GMT－07：00）山地時間（美國和加拿大）',
'2307' : '（GMT－06：00）中部時間（美國和加拿大）',
'2308' : '（GMT－06：00）墨西哥城',
'2309' : '（GMT－06：00）德古西加巴',
'2310' : '（GMT－06：00）薩斯喀徹爾省',
'2311' : '（GMT－05：00）波哥大，利馬，基多',
'2312' : '（GMT－05：00）東部時間（美國和加拿大）',
'2313' : '（GMT－05：00）印地安那（東）',
'2314' : '（GMT－04：00）大西洋時間（加拿大）',
'2315' : '（GMT－04：00）卡拉卡斯，拉巴斯',
'2316' : '（GMT－04：00）聖地牙哥',
'2317' : '（GMT－03：00）紐芬蘭',
'2318' : '（GMT－03：00）巴西利亞',
'2319' : '（GMT－03：00）布宜諾賽勒斯，喬治城',
'2320' : '（GMT－02：00）大西洋中部',
'2321' : '（GMT－01：00）亞速爾群島，佛德角群島',
'2322' : '（GMT）卡薩布蘭卡，蒙羅維亞',
'2323' : '（GMT）格林威治時間：里斯本，倫敦，愛丁堡',
'2324' : '（GMT）格林威治時間：都柏林',
'2325' : '（GMT＋01：00）阿姆斯特丹，柏林，伯恩，羅馬',
'2326' : '（GMT＋01：00）斯德哥爾摩，維也納，貝爾格勒',
'2327' : '（GMT＋01：00）布拉提斯拉瓦，布達佩斯，盧布亞納',
'2328' : '（GMT＋01：00）布拉格，布魯塞爾，哥本哈根，馬德里',
'2329' : '（GMT＋01：00）巴黎，塞拉耶佛，斯高彼亞',
'2330' : '（GMT＋01：00）華沙，札格雷布',
'2331' : '（GMT＋02：00）雅典，伊斯坦布爾，明斯克，維爾紐斯，索菲亞',
'2332' : '（GMT＋02：00）布加勒斯特',
'2333' : '(GMT+02:00) Cairo',
'2334' : '（GMT＋02：00）哈拉雷，普利托里亞',
'2335' : '（GMT＋02：00）赫爾辛基，里加，塔林',
'2336' : '（GMT＋02：00）以色列',
'2337' : '（GMT＋03：00）巴格達，科威特，利雅德，奈洛比',
'2338' : '（GMT＋03：00）莫斯科，聖彼德堡，伏爾加格勒，喀山',
'2339' : '（GMT＋03：00）德黑蘭',
'2340' : '（GMT＋04：00）阿布達比，馬斯喀特，第比利斯',
'2341' : '（GMT＋04：00）喀布爾',
'2342' : '（GMT＋05：00）伊斯蘭馬巴德，卡拉奇，葉卡捷琳堡',
'2343' : '（GMT＋05：30）德里',
'2344' : '（GMT＋06：00）阿拉木圖，達卡',
'2345' : '（GMT＋07：00）曼谷，河內，雅加達',
'2346' : '（GMT＋08：00）北京，重慶，烏魯木齊',
'2347' : '（GMT＋08：00），香港，珀斯，新加坡，臺北',
'2348' : '（GMT＋09：00）東京，大阪，札幌',
'2349' : '（GMT＋09：00）首爾',
'2350' : '（GMT＋09：30）阿德萊德，達爾文',
'2351' : '（GMT＋10：00）布里斯班',
'2352' : '（GMT＋10：00）坎培拉，墨爾本，悉尼',
'2353' : '（GMT＋10：00）霍巴特',
'2354' : '（GMT＋10：00）關島，莫爾斯貝港',
'2355' : '（GMT＋11：00）馬加丹，新赫里多尼亞，Solamon',
'2356' : '（GMT＋12：00）惠靈頓，奧克蘭',
'2357' : '（GMT＋12：00）斐濟',
'2358' : '（GMT＋13：00）努瓜婁發',
'2370' : '星期日',
'2371' : '星期一',
'2372' : '星期二',
'2373' : '星期三',
'2374' : '星期四',
'2375' : '星期五',
'2376' : '星期六',
'2401' : 'ECO模式',
'2402' : '暗化前面板LED',
'2403' : '禁用……無線網路信號',
'2404' : '……除外',
'2405' : '通過此功能，您可以暗化路由器前端的LED以節省電力。您也可以在預定的時間禁用無線網路信號。',
'2406' : '起始時間不能晚於終止時間！',
'322' : '固件版本',
'431' : '貝爾金公司可能會不時推出新版本的路由器操作程式。這些更新包含對您路由器的改善和修復。',
'432' : '<b>注意：</b>在更新至新版本固件之前，請<a href="ut_save.html">備份您的當前設置</a>。',
'433' : '按一下此處',
'434' : '前往保存/備份當前設置頁面。',
'435' : '檢查新固件的版本',
'436' : '檢查固件',
'437' : '更新固件',
'438' : '更新',
'439' : '請指定升級檔的位置。您可以輸入檔路徑和檔案名，或者，按一下“流覽”以流覽檔的位置。',
'440' : '您確定要繼續更新嗎？',
'441' : '當升級結束時，路由器可能在一分鐘內無法回應命令。這是正常現象。在此時間內，請勿關閉或重新啟動路由器。',
'1198' : '固件更新中。',
'534' : '重新啟動路由器',
'535' : '您確定要重新啟動路由器嗎？ 重新開機路由器不會影響您的配置',
'536' : '路由器重新開機至多需要$s秒。在復位完成之前，請勿關閉路由器電源。',
'7001' : '您可以通過連接到網路的任何DLNA設備方便地享受個人音樂、照片和視頻。由Twonky提供技術支援。',
'7002' : 'DLNA伺服器',
'7003' : '伺服器名稱',
'7004' : '共用驅動器：',
'7005' : '就緒',
'7006' : '檢索中……',
'7007' : '服務：',
'7008' : '視頻',
'7009' : '歌曲',
'7010' : '圖片',
'7011' : '不在網路共用。',
'7012' : '無連接到路由器的USB驅動器。',
'7016' : '刷新索引',
'7017' : '請為媒體伺服器輸入友好名稱',
'7018' : '不允許的字元',
'7019' : '您的媒體多於路由器可以索引的媒體，因此我們將服務靠前的',
'7020' : '項目。',
'7021' : 'Twonky是PacketVideo公司（PV）出品的一系列數碼家庭軟件(Twonky is a line of digital home software products created by PacketVideo Corporation (PV)).',
'7022' : '無法檢索唯讀驅動器。',
'7023' : 'MB',
'7024' : 'GB',
'7025' : 'TB',
'7026' : '視頻',
'7027' : '歌曲',
'7028' : '圖片',
'770' : '僅在使用BigPond電纜和OptusNet電纜連線時，使用此選項。',
'771' : '重要：',
'775' : '3）重新連接貝爾金路由器上的電源線。',
'776' : '為了確認您已成功連接至互聯網，請打開互聯網流覽器（如Internet Explorer、Firefox或Safari），並確保您可以流覽網頁。',
'731' : '用戶名',
'489' : '密碼',
'732' : '請重新輸入密碼',
'756' : '請重新輸入您的密碼！',
'1379' : '或者您未能輸入所有數字，或者您輸入的數字無效。IP地址格式應為x.y.y.x（其中，y為0至254之間的任意數字，x為1至255之間的任意數字。）',
'709' : '要輸入您的動態IP位址設置，請在下方輸入您的資訊，並按一下“保存”。',
'710' : '主機名稱',
'711' : '主機名稱稱＝某些互聯網服務提供者連接至其系統所需的名稱。',
'712' : '更改廣域網路MAC地址',
'330' : 'IP地址',
'331' : '子網路遮罩',
'659' : '有效的MUT必須在500至1500之間。',
'730' : '要輸入您的PPPoE設置，請在下方輸入您的資訊，並按一下“保存”。',
'733' : '服務名稱（可選）',
'734' : 'MTU（500－1500）',
'735' : '除非您的ISP需要不同的值,請不要更改MTU的設置',
'736' : '……分鐘無活動後',
'737' : '沒有網絡活動的時間（分鐘）',
'741' : 'MTU值無效',
'2005' : 'ISP分配的IP地址',
'2021' : '按一下此處來進入您的DNS設置頁面',
'2023' : '不允許使用雙引號。',
'2024' : '用戶名含有不可接受的字元',
'2025' : '不允許使用反斜線。',
'2030' : '或者您未能輸入預設閘道器的所有數字，或者您輸入的數位無效。數字應為0－255之間的值。',
'2052' : '密碼含有不可接受的字元（<、>以及&）',
'691' : '動態連接類型最為常見。如果您使用的是纜線數據機，那麼您很可能使用動態連接。如果您用的是纜線數據機，或者，您不能確定您的連接類型，請使用此連接類型。',
'723' : '包括需要主機名稱的互聯網服務供應商（ISP）和綁定連接至特定MAC位址的互聯網服務供應商（ISP）。',
'693' : '靜態IP位址連接類型不大常見。僅在您的ISP向您提供了永久不變的IP位址的情況下，使用此選項。',
'724' : '路由器支援連接至分配靜態IP位址的ISP。',
'695' : '如果您使用的是DSL數據機和/或您的ISP向您提供了用戶名和密碼，則您的連接類型為PPPoE。請使用此連接類型。',
'725' : '路由器支援需要PPPoE登錄進行身份驗證的動態連接類型。',
'697' : '有些ISP(互联网服务提供商)使用PPTP协议连接用户到中央办公室。这就要求您输入您的ISP提供的几个额外的设置。如果更改已保存和过程已成功,互联网状态的指示灯会显示绿色的.',
'726' : '用於與需要PPTP連接方法的ISP（互聯網服務提供商）。',
'699' : '僅在使用BigPond電纜和OptusNet電纜連線時，使用此選項。',
'728' : '僅適用於澳大利亞用戶。路由器支援連接到Telstra BigPond。',
'2019' : '要輸入您的數據機設置，請在下方輸入您的資訊，並按一下“保存”。',
'tBackToConnectionType' : '返回連接類型',
'759' : '要輸入您的靜態IP位址設置，請在下方輸入您的資訊，並按一下“保存”。',
'761' : '子網路遮罩',
'762' : 'ISP閘道地址',
'754' : '按一下此處來進入您的DNS設置頁面',
'715' : '網路上的每一台設備都有一個唯一的硬體位址（MAC位址），用於將其與網路和互聯網上的其他設備相區分。有些互聯網服務供應商（ISP）要求用戶在路由器設置中輸入網卡或舊路由器的MAC位址。如果您不能確定，請在安裝路由器之前，輸入最初連接到數據機的電腦的MAC位址。',
'716' : '廣域網路MAC地址',
'717' : '克隆電腦的MAC位址',
'718' : 'Clone',
'721' : '您需要在“互聯網/廣域網路”選項卡中設置您的路由器來連接到您的互聯網服務供應商。只要您為您的ISP的連接類型正確配置了路由器設置，路由器幾乎能連接至所有互聯網服務供應商的系統。如需通過配置路由器來連接到您的ISP，請在螢幕左側的“互聯網/廣域網路”選項卡中按一下“連接類型”。',
'722' : '支援的連接類型：',
'htWANMainContent' : '選擇連接類型：',
'700' : '下一步',
'744' : 'PPTP帳號',
'745' : '密碼',
'746' : '請重新輸入密碼',
'747' : '主機名稱',
'1770' : 'ISP分配的IP地址',
'1771' : '是',
'1772' : '否',
'1773' : '服務位址',
'750' : '子網掩碼',
'778' : '可以對路由器進行配置，使其禁用所有的路由選擇及防火牆功能，僅作為接入點使用。如需這樣設置，請選擇“啟用”並輸入接入點所需的IP位址。',
'779' : '接入點模式：',
'781' : '指定子網路遮罩',
'801' : '安全模式',
'806' : '您可以在此處配置無線網路安全/加密設置。應啟用安全功能，以保證最大程度的無線網路安全。WPA（無線保護接入）可提供動態的金鑰變化，構成最佳安全解決方案。在並非所有的設備都支援WPA的無線環境中，應使用WEP（有線等效保密）。',
'377' : '自動',
'487' : '開啟',
'488' : '關閉',
'787' : '如需更改路由器的無線設置，請在此更改。按一下“保存”來保存設置。',
'788' : '無線頻道',
'789' : 'SSID',
'790' : '無線模式',
'794' : '廣播SSID',
'797' : '保護模式',
'1300' : '擴展頻道',
'1301' : '頻寬',
'1304' : '802.11e/WMM QoS',
'852' : '預共用金鑰的長度應為8到63個字元或64個十六進位字元',
'856' : '帶有預共用金鑰的無線保護接入（WPA）：金鑰的形式為單詞、片語或一系列字母和數位組成的密碼。金鑰長度必須是<b>8</b>到<b>63</b>個字元，可以包含空格和符號，或僅< <b>64</b>個十六進位字元。連接到網路的每一用戶端必須使用相同的金鑰（預共用金鑰）。',
'115' : '或者您未能輸入全部十六進位數位，或者您輸入的一些十六進位數字無效。十六進位數字，可以是從0到9的一個數字或從A到F的一個字母。',
'308' : '<b>SPI</b>狀態包檢測。SPI是由您的HomeConnect家用網路閘道所提供的企業級互聯網安全類型。當使用SPI時，閘道可作為一個“防火牆”來保護您的網路免受駭客攻擊。',
'808' : '注意：',
'809' : '要使用口令自動生成十六進位數位對，請勾選左側的核取方塊，並在此輸入口令。',
'810' : '口令',
'811' : '生成',
'812' : '請輸入口令',
'814' : '金鑰',
'818' : '（十六進位數字對）',
'296' : '<b>IP位址</b>IP代表互聯網協議。IP位址是由句點分隔的四個數欄位，用以確定一台獨一無二的互聯網電腦主機。示例：192.34.45.8。',
'298' : '<b>ISP</b>互聯網服務供應商。ISP是為個人和其他企業或組織提供互聯網連接的企業。',
'807' : '（13個十六進位數字對）',
'813' : '金鑰不完整',
'821' : '不完整',
'1190' : '<br>要為您的動態DNS主機名註冊，請去http://www.dyn.com<br>',
'1339' : '當WPS啟用時，建議使用WPA/WPA2。',
'1363' : '進行中－請等待……',
'1364' : '檢測到錯誤－請再試一次。',
'1365' : '時域重疊錯誤：請等待60秒再重新開機進程，或者，手動操作您的用戶端程式來連接到該網路。',
'1366' : '成功－設備已連接到路由器。',
'1370' : '無效的PIN碼！設備PIN碼為4個或者8個數位。請檢查並重新輸入。',
'1620' : '啟動－請在2分鐘內啟動用戶端設備的WPS PBC。',
'1621' : '啟動－請在2分鐘內啟動用戶端設備的WPS。',
'1622' : '超時－無連接至路由器的用戶端。',
'1623' : 'Wi-Fi保護設置消息',
'1393' : 'WPS硬體按鈕',
'1320' : 'Wi-Fi保護設置（WPS）是簡化Wi-Fi網路安全設置和管理的行業標準方法。您可以使用個人資訊號碼（PIN）或按鈕配置（PBC）方法，輕鬆安裝並連接至使用WPS認證設備的啟用WPA的 802.11網路。無WPS功能的舊設備，可以通過傳統的手工配置方法添加到網路。',
'1321' : '個人資訊號碼（PIN）法',
'1322' : '從用戶端設備輸入PIN碼，點擊“註冊”。然後，在2分鐘之內通過無線網路應用程式或WPS應用程式，開啟用戶端設備上的WPS功能。',
'1323' : '輸入用戶端設備PIN',
'1324' : '註冊',
'1325' : '如果外部訪問程式可用，則您也可以在外部訪問程式輸入路由器PIN。如需更改路由器PIN，請按一下“生成新PIN”或按一下“還原默認PIN”來將PIN恢復到出廠預設值。',
'1326' : '路由器PIN',
'1327' : '生成新的PIN',
'1328' : '還原默認PIN',
'1329' : '按鈕配置（PBC）法',
'1330' : '按住路由器上的PBC按鈕並保持3秒，或者，按一下“啟動PBC”。然後，在2分鐘內啟用您需要連接到路由器的設備上的PBC。',
'1331' : '啟用PBC',
'1332' : '手動配置法',
'1333' : '對於無WPS的用戶端設備，請手動對設備的以下設置進行配置：',
'1334' : '無線安全',
'1336' : '網路身份驗證',
'1337' : '資料加密',
'1338' : '網路金鑰（PSK）',
'1340' : '解鎖路由器PIN',
'1341' : '由於訪問嘗試失敗次數過多，路由器PIN被禁用。',
'1390' : 'PIN碼校驗失敗！請檢查並重新輸入。',
'1391' : '無效的PIN碼！設備PIN碼為8個數位。請檢查並重新輸入。',
'1392' : '已配置',
'1396' : '請對無線網路安全進行手動配置',
'1397' : '無線網路安全',
'common_err1' : '%s為空。',
'upgrade_err2' : '固件升級由於資源不足而終止。升級失敗。\n請在系統處於閒置狀態時（無互聯網流量），再試一次。',
'upgrade_err3' : '無法上傳，請聯繫管理員。',
'upgrade_err4' : '固件過大，升級失敗。',
'upgrade_err5' : '您已經安裝了最新的固件。',
'upgrade_err6' : '固件更新似乎已損壞。請重新下載固件檔後再試一次。',
'show10' : 'DHCP用戶端列表',
'show54' : '連接設置',
'btn2' : '應用更改',
'cff1' : '成功檢查固件',
'PM2' : ':30 PM',
'AM2' : ':30 AM',
'Dimicons' : '暗化圖示',
'EcoTo' : 'to',
'fvrm' : '由於遠端系統管理埠與您虛擬伺服器的一個入站埠相衝突，請將其禁用。',
'lsipm2' : '無效的局域網IP位址，最後一個數字不能是0或255。',
'lsldnm' : '無效的本地功能變數名稱：`~!@#$%^&*()_+[]{}\|;:\'"<>/?.,',
'lsipm5' : '您選擇的IP位址應該是一個非路由IP。192.168.x.x（其中，x是0和255之間的任意值。）\n10.x.x.x（其中，x是0和255之間的任意值。）\n172.y.x.x （其中y是16和31之間的任意值，x是0和255之間的任意值。）',
'ufy4' : '恢復默認設置將耗時60秒。在此過程中，請勿關閉路由器的電源。',
'ufe11' : '當升級結束時，路由器可能在180秒內無法回應命令。這是正常現象。在此時間內，請勿關閉或重新啟動路由器。',
'ur5' : '路由器重新開機至多需要30秒。在復位完成之前，請勿關閉路由器電源。',
'ur6' : '路由器重新開機至多需要60秒。在復位完成之前，請勿關閉路由器電源。',
'usys83' : '新密碼和確認新密碼欄位不匹配。',
'usys83_1' : '密碼和確認密碼不匹配。',
'usys85_1' : '管理密碼長度應在3至12位之間。',
'usys88' : '已達到最大密碼長度！',
'usys89' : 'AM',
'usys90' : 'PM',
'usys92' : '遠端存取埠號應是1至65535 之間的值。',
'usysipm' : '或者您未能輸入所有數字，或者您輸入的數字無效。IP地址格式應為x.y.y.x（其中，x為1至253之間的任意數字，y為0至255之間的任意數字，z為1至254之間的任意數字。）',
'self_healing60' : 'Self Healing',
'chkwait' : '檢查更新的固件...',
'Europe' : '歐洲',
'Australia' : '澳大利亞和新西蘭',
'AsiaPacific' : '亞太地區',
'NorthAmerica' : '北美地區',
'vjs1' : '無效的IP地址，過長。請重新檢查！',
'vjs2' : '無效的IP地址，“.”缺失。請重新檢查！',
'vjs3' : '無效的IP地址，“.”之間的數字缺失。請重新檢查！',
'vjs4' : '無效的IP地址，“.”多餘。請重新檢查！',
'vjs5' : '無效的IP地址，“.”之間的數字過大。請重新檢查！',
'vm1' : '無效字元',
'vm2' : ' 在……位置',
'vm3' : '必須是',
'vjs6' : '無效的年份格式，請輸入（例如2002）',
'vm4' : '無效的數字',
'vjs8' : '無效，必須在1970……2037之間。',
'vjs9' : '無效的月份格式，請輸入（例如：01……12 ）',
'vjs161' : ' 不在範圍內',
'vjs162' : ' 子網路遮罩',
'vjs163' : '允許的DHCP範圍為',
'vjs17' : '您輸入了兩個不同的密碼，請再仔細檢查一遍！',
'vjs18' : '請輸入啟動埠號。',
'vjs19' : '起始埠號應小於終止埠號。',
'vjs23' : '無效的MAC位址，這是一個廣播位址。',
'vjs24' : '無效的MAC位址，這是一個空位址。',
'vjs25' : '無效的MAC位址，這是一個多播位址。',
'vjs26' : '無效的起始及終止IP位址，終止IP應大於起始IP。',
'vjs28' : '無效的子網路遮罩格式。',
'vjs29' : '無效的格式，此處的子網路遮罩必須是255.255.255.0或255.255.255.128或255.255.255.192或255.255.255.224或255.255.255.240或255.255.255.248或255.255.255.252或255.255.255.254。',
'vjs30' : '無效的IP位址，最後一個數字不能是0或255。',
'vjs31' : '無效的局域網IP位址，第一個數字不能是127。',
'vjs32' : '無效的局域網IP位址，不能是0.0.0.0。',
'vjs33' : '無效的局域網IP位址，必須根據224.0.0.0。',
'vjs42' : '您輸入的子網路遮罩數位無效。',
'vjs45' : '指定IP地址',
'vjs46' : '無效，請更正！',
'wcc2' : '請選擇您的連接類型：',
'wcc13' : 'L2TP',
'wcc14' : '有些ISP(互联网服务提供商)使用L2TP协议连接用户到中央办公室。这就要求您输入您的ISP提供的几个额外的设置。如果更改已保存和过程已成功,互联网状态的指示灯会显示绿色的.',
'wds4_1' : '首選DNS地址',
'wds7' : '如果您不使用自動DNS功能，則必須輸入由ISP提供的DNS設置。',
'wds8' : '如需更改DNS，請首先訪問％s網站篩檢程式％s，然後選擇“無篩檢程式”。',
'wmc6' : '廣域網路MAC位址不能與局域網MAC位址相同。請另擇一個MAC位址。',
'wdd9 ' : '未選擇DDNS服務。\n',
'wdd10' : '未選擇DDNS服務，本頁中的所有資料都將丟失。是否繼續？',
'wm10b' : '用於與需要L2TP連接方法的ISP（互聯網服務提供商）。',
'pm' : '您的服務無法驗證您輸入的密碼。請確認您的密碼輸入正確。',
'wpp17' : 'L2TP帳戶',
'wpp18' : 'L2TP密碼',
'wpp19' : '請輸入您的L2TP帳戶。',
'wpp23' : 'IP地址分配',
'wpp24' : '使用靜態IP位址',
'wpp25' : '從ISP獲取動態IP位址',
'wppa7' : '我的IP地址',
'wppa9' : '連接ID （可選）',
'wppa13' : '請輸入您的PPTP帳戶。',
'wppa18' : '無效的服務名稱。',
'ws2' : '如需輸入您的靜態IP設置，請在下方輸入您的資訊，並點擊“應用更改”。',
'sm_1' : '您輸入的子網路遮罩無效。',
'ws8' : '請輸入/確認螢幕上顯示的DNS位址設置。',
'wt2' : '按一下“應用更改”將重新啟動路由器。在路由器重新開機完成後，您需要進行以下操作：',
'wt3' : '1）拔下纜線數據機和貝爾金路由器上的電源線。',
'wt4' : '2 ）重新連接纜線數據機上的電源線，等待，直到數據機上的所有指示燈已停止閃爍。',
'wt5' : '3）重新連接貝爾金路由器上的電源線。',
'wt6' : '為了確認您已成功連接至互聯網，請打開互聯網流覽器（如Internet Explorer、Firefox或Safari），並確保您可以流覽網頁。',
'wlad2' : '啟用/禁用',
'wlc2' : '如需更改路由器的無線設置，請在此更改。按一下“保存”來保存設置。',
'wlcgb' : '802.11b+g',
'wlcg' : '802.11g',
'wlcb' : '802.11b',
'wlc20' : '20MHz',
'wlc22' : '20/40MHz',
'wlcoff' : '關閉',
'wlcngb1' : '802.11b、802.11g 和1x1 802.11n',
'wlcn1' : '1x1 802.11n',
'wlcngb2' : '802.11b、802.11g、802.11n',
'wlcn2' : '802.11n',
'wlcgn' : '802.11g+n',
'wlca' : '802.11a',
'wlcan' : '802.11a和802.11n',
'wlc26' : '隱藏您網路名稱將禁用WPS。',
'wlc27' : '更改您的安全類型將禁用WPS。',
'wlc28' : '由於您的<A href=%s><B>無線安全類型</B></A> ，WPS被禁用。',
'wlc29' : '"由於您隱藏了您的網路名稱（SSID），WPS被禁用。',
'wlc30' : '由於您隱藏了您的網路名稱（SSID）且由於您的<A href=%s><B>無線安全類型</B></A> ，WPS被禁用。',
'wlc31' : '開啟WPS將取消隱藏您的網路名稱（SSID）。',
'wlc32' : '開啟WPS將改變您的安全類型為WPA/WPA2。您當前的網路密碼將繼續有效。',
'wlc33' : '開啟WPS將取消隱藏您的網路名稱（SSID）並改變您的安全類型為WPA/WPA2。您當前的網路密碼將繼續有效。',
'wle3a' : 'WPA-PSK',
'wle3b' : 'WPA2-PSK',
'wle3c' : 'WPA-PSK＋WPA2-PSK',
'wps1' : 'Wi-Fi保護設置（WPS）',
'wps3' : '請對無線網路安全進行配置',
'wps17' : '對於無WPS的用戶端設備，請從光碟上運行貝爾安全助手或手動對設備的以下設置進行配置：',
'wps23' : 'WPA＋WPA2-Personal（PSK）',
'wps25' : 'TKIP＋AES',
'wps27' : '網路金鑰（WEP）：',
'wps28_1' : '空',
'wle11' : '金鑰1',
'wle12' : '金鑰2',
'wle13' : '金鑰3',
'wle14' : '金鑰4',
'wpskerr2' : '金鑰長度必須為8至63個字元，可以包括空格和符號，或僅使用64進制（0－F）！',
'wpskerr4' : '您必須輸入來賓金鑰',
'wpskerr7' : '來賓金鑰必須為8個字元',
'wpskerr8' : '來賓金鑰必須不同於網路金鑰。',
'wlguest1' : 'SSID必須不同於來賓SSID。',
'wlguest2' : '來賓SSID必須不同於SSID。',
'rs_crc' : '重置失敗 < CRC >',
'rs_long' : '重置失敗 <過長>',
'rs_disposition' : '重置失敗 <無Content-Disposition（內容配置）>',
'rs_getpid' : '重置失敗 <無法獲取PID>',
'rs_unmatchpid' : '重置失敗 <PID不匹配>',
'msg_ddns3 ' : '功能變數名稱欄位不能為空。\n',
'msg_lan_dhcp1 ' : '從閘道請求資訊。',
'msg_lan_dhcp2 ' : '更新配置資料庫。',
'msg_wan_stat1 ' : 'IP地址',
'msg_wan_stat2 ' : ' 不在',
'msg_wan_stat3 ' : ' 網路。',
'msg_wls_chan2 ' : '來賓SSID不能設置為空！\n',
'fw_not_interrupt ' : '請勿中斷或拔掉路由器，這樣做可能會導致路由器無法使用。',
'msg_invalid_char ' : '檢測到無效字元。有效字元包括：0－9, a－z, A－Z, `~!@#$%^&*()_-+=|\\{}[]:";\',.<>/?',
'msg_invalid_domain_char ' : '無效的本地功能變數名稱：~!@#$%^&*()=+{}[]|":;\\\'?/<>,`',
'msg_invalid_char_1 ' : '檢測到無效字元。有效字元為字母和數位。以下符號無效： `~!@#$%^&*()_+[]{}\\|;:\'"<>/?.,',
'msg_hostIP_invalid ' : '主機IP位址無效。主機IP位址不能是路由器的局域網IP位址。\n',
'msg_dmzIP ' : 'DMZ IP地址。',
'msg_blank ' : ' 不能為空。\n',
'msg_space ' : '％s不允許留空或存在空格。\n',
'msg_blank_in ' : '％s不允許留空。\n',
'msg_allspaces ' : '％s不能僅包含空格\n',
'msg_invalid ' : '％s中存在無效字元。\n有效字元為：\n%s\n\n',
'msg_check_invalid ' : '％s中包含無效數位\n',
'msg_valid_range ' : '%s無效。有效範圍為％s至％s\n',
'msg_invalid_mac ' : '無效的MAC地址。\n',
'msg_multi_mac' : 'MAC位址不能是組播位址。\n',
'msg_confirmDefault ' : '警告！\n載入出廠默認設置將清除所有當前設置。\n您確定要這樣做嗎？',
'Allowed_Services' : '允許的服務',
'Allowing_Url' : 'URL位址允許的網站',
'Allowing_Keyword' : '關鍵字允許的網站',
'wipv63' : '連接到路由器的設備可以通過原生IPv6資料包互相通信。局域網內的IPv6資料包將自動發送至所有局域網介面（乙太網埠以及2.4 GHz和5 GHz無線網路）。',
'wipv64' : '當啟用IPv6直通功能時，IPv6資料包也將被複製至廣域網路介面。（當該功能啟用時，將創建一個與互聯網的直接非安全連接。）',
'wipv65' : '請直接聯繫您的ISP來瞭解其對IPv6的支援資訊。',
'wipv67' : '互聯網IPv6',
'wipv68' : '您的網路相容IPv6。',
'wipv69' : '直通',
'mf1' : '此類頁面允許您在出現某些類型的媒體流量時調整您的路由器行為。',
'mf2' : '為不同類型的流量自動優化您的網路連接。',
'mf3' : '查看您路由器的使用方式。',
'mf8' : '記錄在％s',
'mf10' : '下載',
'mf11' : '上載',
'mf12' : '速度',
'mf15' : '應用設置',
'mf18' : '輸入{0.1－%s}之間的數字。',
'mf20' : '僅允許{0.1－%s}之間的數字。',
'mf26' : '手動記錄於％s',
'mf32' : '或者',
'mf44' : '受互聯網流量或其他條件的影響，自動速度測試結果未必100％準確。為比較結果，請存取速度測試網站，或聯繫您的ISP以確認您的上網速度。如果速度結果不一致，您可以手動輸入這些數值。',
'media_dlna18' : '無標題',
'media_dlna21' : '您的媒體多於路由器可以索引的媒體，因此我們將服務首個12000項。',
'errSubnetMaskInvalid_2' : '子網路遮罩格式不正確。請檢查數值。',
'htWAN_L2TP' : 'L2TP設置',
'htWAN_L2TPContent' : '有些ISP(互联网服务提供商)使用L2TP协议连接用户到中央办公室。这就要求您输入您的ISP提供的几个额外的设置。如果更改已保存和过程已成功,互联网状态的指示灯会显示绿色的.',
'p400t001_error' : '更快的連接。',
'p400t018_error' : '更改名為?',
'p400t019_error' : '當從設備搜索網絡時這將會顯示.特殊網絡名字是比較容易記住和找到.如果您的各種無線設備以前連接到不同的路由器,重用相同的網絡名稱和密碼,無線​​設備自動連接',
'dhToggleBand2G' : '顯示 2.4Ghz',
'772' : '單擊“Apply Changes”（套用更改）將重新啟動路由器。路由器完成重新啟動後，你需要做以下',
'773' : '1) 從電纜調製解調器和Belkin路由器,拔下電源電纜',
'774' : '2) 重新連接調製解調器的電源，等待直到所有的調製解調器的燈光已經停止閃爍',
'dft001' : '3) 沒有連接',
'dft002' : '如果需要聯繫技術支持，請使用一個已連接的設備, 遊覽<strong>help.belkin.com</strong>.',
'gtNoSecCard     ' : '請寫下您的網絡名稱和密碼作為將來參考。',
'gtFWUpdateMobileError' : '目前無法從移動設備上傳固件文件。',
'gtSettingsMobileError' : '目前無法從移動設備上傳設置文件。',
'gtMoreFromInternet' : '連接至互聯網以查看更多信息',
'gtCantConnect' : '系統無法連接至互聯網。',
'p802t004' : '返回設備無線網絡菜單',
'p803t004' : '返回設備無線網絡菜單',
'PIC-S1t001' : '阻止所有設備',
'gtUnnamedDevice' : '未命名的設備',
'gtIC' : '互聯網控制',
'errDefaultGatewayEmpty' : '預設閘道器位址不能為空。',
'errDefaultGatewayInvalid' : '預設閘道器地址必須是由句點分隔的四個數位（0－255）組成。請檢查數值。',
'errDNSServerEmpty' : 'DNS伺服器位址不能為空。',
'errDNSServerInvalid' : 'DNS伺服器地址必須是由句點分隔的四個數位（0－255）組成。請檢查數值。',
'errIpAddressEmpty' : 'IP位址不能為空。',
'errIpAddressInvalid' : 'IP地址必須是由句點分隔的四個數位（0－255）組成。請檢查數值。',
'errorGenericCommitError' : '出現錯誤。請更正以下設置後再試一次。',
'errorSSIDEmpty' : '請為您的無線網路輸入一個名稱。',
'errorSSIDInvalidChars' : '您的網路名稱只能由字母、數位、標點符號和空格組成。',
'errorSSIDTooLong' : '您的網路名稱長度必須小於32個字元。',
'errorWEPPasswordEmpty' : '請輸入密碼以保護您的無線網路。',
'errorWEPPasswordInvalidChars' : '您的網路密碼只能由數位和從A到F的字母組成。',
'errorWEPPasswordInvalidLength' : '您的網路密碼長度必須為10個或26個字元。',
'errorWPAPasswordEmpty' : '請輸入密碼以保護您的無線網路。',
'errorWPAPasswordInvalidChars' : '您的網路密碼只能由字母、數位、標點符號和空格組成。',
'errorWPAPasswordInvalidLength' : '您的網路密碼長度必須為8－63個字元。',
'errPasswordEmpty' : '請輸入您的密碼。',
'errPasswordInvalid' : '您的用戶名只能由字母、數位、標點符號和空格組成。',
'errPasswordTooLong' : '您的密碼長度必須小於64個字元。',
'errServAddressEmpty' : '請輸入一個服務位址。',
'errSubnetMaskEmpty' : '子網路遮罩不能為空。',
'errSubnetMaskInvalid' : '子網路遮罩必須是由句點分隔的四個數位（0－255）組成。請檢查數值。',
'errUsernameInvalid' : '您的用戶名只能由字母、數位、標點符號和空格組成。',
'errUsernameTooLong' : '您的用戶名長度必須小於64個字元。',
'errVCIInvalid' : '請輸入一個0－65535之間的數字。您的ISP將告知您所使用的正確值。',
'errVPIInvalid' : '請輸入一個0－255之間的數字。您的ISP將告知您所使用的正確值。',
'p802t003' : '由於某些設置發生了變化，您可能需要重新選擇您的無線網路：',
'p802t011' : '由於某些設置發生了變化，您可能需要重新選擇您的無線網路：',
'dft003' : '您是否需要幫助？',
'dft004' : '您是否存有疑問或需要支援？我們的線上說明中心可為您提供24小時線上說明。<br><a href="http://www.belkin.com/support/" id="dfBelkinHelp">貝爾金幫助中心&rarr;</a>',
'dhChangeSSID' : '更改狀態',
'dhPassLabel' : '密碼：',
'dhPasswordObscured24' : 't********',
'dhShow' : '顯示：',
'dhSSID24' : '{blahblah}',
'dhToggle24' : '2.4 Ghz',
'dhToggle5' : '5.0 Ghz',
'DownSpeed' : '32.6',
'errUsernameEmpty' : '請輸入您的用戶名。',
'gt10am' : '10:00 上午',
'gt10pm' : '10:00 下午',
'gt11am' : '11:00 上午',
'gt11pm' : '11:00 下午',
'gt1am' : '1:00 上午',
'gt1amNextDay' : '次日1:00 am',
'gt1pm' : '1:00 下午',
'gt24ghz' : '2.4Ghz',
'gt24GKey' : '2.4GHz Key',
'gt24GName' : '2.4 GHz SSID',
'gt24PSK' : '密碼',
'gt24Sec' : 'WPA2',
'gt24SSID' : '12345678',
'gt2am' : '2:00 上午',
'gt2pm' : '2:00 下午',
'gt3am' : '3:00 上午',
'gt3pm' : '3:00 下午',
'gt4am' : '4:00 上午',
'gt4pm' : '4:00 下午',
'gt50ghz' : '5 Ghz',
'gt5am' : '5:00 上午',
'gtGuestKey' : '來賓金鑰',
'gt5GMedia' : '您的5GHz頻段具有相同的名稱，但末尾添加有“.media”。',
'gtGuestName' : '來賓SSID',
'gt5pm' : '5:00 下午',
'gt6am' : '6:00 上午',
'gt6pm' : '6:00 下午',
'gt7am' : '7:00 上午',
'gt7pm' : '7:00 下午',
'gt8am' : '8:00 上午',
'gt8pm' : '8:00 下午',
'gt9am' : '9:00 上午',
'gt9pm' : '9:00 下午',
'gtAccessControl' : '家長互聯網控制',
'gtAccessPoint' : '用作接入點',
'gtADSL' : 'ADSL',
'gtAdvSettings' : '高級設置',
'gtAllElseFails' : '如果問題仍未解決，請致電貝爾金支持中心',
'gtAndroidConnect01' : '安卓系統手機和平板電腦',
'gtAndroidConnect02' : '您的設備在設置應用程式中提供了可用無線網路功能表。',
'gtAndroidConnect03' : '打開<strong>設置</strong> 應用程式並選擇<strong>無線與網路</strong>。',
'gtAndroidConnect04' : '從中選擇<strong>Wi-Fi</strong>來查看可用網路清單。',
'gtAndroidConnect05' : '選擇<strong tid="Network24SSID">({替換為2.4 SSID})</strong>。<!-- IF NOT OPEN --> <span tid="gtNotOpen">如詢問密碼，請輸入網路密碼。<strong tid="Network24Passkey">({替換為2.4密碼})</strong></span> <!-- /IF -->',
'gtAt' : 'at',
'gtAttenuation' : '衰減',
'gtAustralia' : '澳大利亞',
'gtBackToDashboard' : '&larr;返回功能面板',
'gtBelkin' : '貝爾金',
'gtBootLoader' : '引導裝入程式',
'gtCantConnect' : '系統無法連接到您的互聯網服務供應商（ISP）。',
'gtCantConnectNoResponse' : '系統無法連接到互聯網－您的ISP未回應。',
'gtChina' : '中國',
'gtClientList' : '已連接的設備',
'gtClose' : '關閉',
'gtConfig' : '配置',
'gtConfigureRouter' : '配置路由器',
'gtConnDevices' : '已連接的設備',
'gtConnectingToNew' : '連接到您的新網路',
'gtConnectionDet' : '連接詳細資訊',
'gtConnType' : '連接類型',
'gtContentFiltering' : '網站篩檢程式',
'gtCopyright' : '版權所有&copy;2012 Belkin，保留所有權利。',
'gtCurrTimezone' : '歐洲/赫爾辛基{使用檢測到的貝爾金TZ ID說明替換本取值範圍}',
'gtDashboard' : '&larr; 功能面板',
'gtDashTitle' : '貝爾金路由器功能面板',
'gtDataRate' : '資料傳輸速率',
'gtDDNS' : 'DDNS',
'gtDHCPList' : '已連接的設備',
'gtDHCPServer' : 'DHCP伺服器',
'gtDMZ' : 'DMZ',
'gtDNS' : 'DNS',
'gtDown' : '下載',
'gtDownloadSpeed' : '下載速度',
'gtEncap' : '封裝：',
'gtFileInstallError' : '檔無法安裝－可能是檔案類型錯誤',
'gtFileLoadError' : '檔無法載入－可能是檔案類型錯誤',
'gtFirewall' : '防火牆',
'gtFirmware' : '固件',
'gtFirmwareUpdate' : '固件更新',
'gtFrance' : '法國',
'gtFreshest' : '正在獲取最新版本的固件．．．',
'gtFrom' : '從：',
'gtFWUpdate' : '固件更新',
'gtFWUpToDate' : '您的固件現在已更新至最新版本。',
'gtGermany' : '德國',
'gtGuestAccess' : '來賓訪問',
'gtGuestNetwork' : '來賓網路',
'gtHomeNetwork' : '家用網路',
'gtIfYouKnowConnection1' : '如果您知道您的連接類型，您可以進行<a href="700-SelectConnection.htm" id="ISP1a010">手動設置&raquo;</a>',
'gtIfYouKnowConnection2' : '如果您知道您的連接類型，您可以進行<a href="700-SelectConnection.htm" id="ISP2a010">手動設置&raquo;</a>',
'gtIfYouKnowConnection3' : '如果您知道您的連接類型，您可以進行<a href="700-SelectConnection.htm" id="ISP3a010">手動設置&raquo;</a>',
'gtIfYouKnowConnection4' : '如果您知道您的連接類型，您可以進行<a href="700-SelectConnection.htm" id="ISP4a010">手動設置&raquo;</a>',
'gtIfYouKnowConnection4a' : '如果您知道您的連接類型，您可以進行<a href="700-SelectConnection.htm" id="ISP4aa010">手動設置&raquo;</a>',
'gtIfYouKnowConnection5' : '如果您知道您的連接類型，您可以進行<a href="700-SelectConnection.htm" id="ISP5a010">手動設置&raquo;</a>',
'gtIfYouKnowConnection6' : '如果您知道您的連接類型，您可以進行<a href="700-SelectConnection.htm" id="ISP6a010">手動設置&raquo;</a>',
'gtIfYouKnowConnection7' : '如果您知道您的連接類型，您可以進行<a href="700-SelectConnection.htm" id="ISP7a010">手動設置&raquo;</a>',
'gtIntellistream' : 'Intellistream',
'gtInterleavePath' : '交織通道',
'gtInternetSettings' : 'Internet設置',
'gtIOSConnect01' : 'iPhone、iPad以及iPod Touch',
'gtIOSConnect02' : '您的設備在設置應用程式中提供了可用無線網路功能表。',
'gtIOSConnect03' : '打開<strong>設置</strong> 應用程式並選擇<strong>Wi-Fi</strong>。',
'gtIOSConnect04' : '從網路清單中選擇<strong tid="Network24SSID">{替換為2.4 SSID}</strong>。<!-- IF NOT OPEN --> <span tid="gtNotOpen">如詢問密碼，請輸入網路密碼。<strong tid="Network24Passkey">({替換為2.4密碼})</strong></span> <!-- /IF -->',
'gtIPv6' : 'IPv6',
'gtIPV6Connection' : 'IPv6連接',
'gtISP' : 'ISP連接類型',
'gtJapan' : '日本',
'gtLANIP' : '局域網IP位址',
'gtLANMAC' : '局域網/無線局域網MAC',
'gtLANSettings' : '局域網設置',
'gtLANSubnet' : '局域網子網路遮罩',
'gtLLC' : 'LLC',
'gtLoadPrevSettings' : '載入以前的設置',
'gtLocalNetwork' : '本地網路',
'gtLocalSettings' : '本地網路設置',
'gtLocked' : '已鎖定',
'gtMACAddress' : 'MAC地址',
'gtMACAddressFiltering' : 'MAC地址過濾',
'gtMacConnect01' : 'Mac OS X',
'gtMacConnect02' : '您電腦功能表列的右端提供了可用無線網路功能表。',
'gtMacConnect03' : '按一下無線電波圖示。',
'gtMacConnect04' : '從網路清單中選擇<strong tid="Network24SSID">{替換為2.4 SSID}</strong>。<!-- IF NOT OPEN --> <span tid="gtNotOpen">如詢問密碼，請輸入網路密碼。<strong tid="Network24Passkey">({替換為2.4密碼})</strong></span> <!-- /IF -->',
'gtMaybeLater' : '稍後再詢問',
'gtMbitPerSec' : 'Mb/s',
'gtMeaning' : '這是什麼意思？',
'gtMedia' : '媒體',
'gtMediaServer' : '媒體伺服器',
'gtmidnight' : '午夜',
'gtModel' : '模型',
'gtName' : '名稱',
'gtNeedMoreHelp' : '是否需要更多説明？',
'gtNetName' : '網路名稱',
'gtNewFWAvailableModem' : '系統已為您的數據機找到新的固件。',
'gtNewFWAvailableRouter' : '已為您的路由器找到新的固件。',
'gtNewFWAvailableRouterAndModem' : '已為您的路由器和數據機找到新的固件。',
'gtNext' : '下一步',
'gtNo' : '否',
'gtNoiseMargin' : '雜訊容限',
'gtNoMyNet' : '我找不到我的網路',
'gtNoon' : '中午',
'gtNoSecCard' : '請寫下您的網路名稱和密碼作為將來參考。',
'gtNotOpen' : '如詢問密碼，請輸入網路密碼<strong tid="Network24Passkey">({替換為2.4密碼})</strong>。',
'gtNZ' : '新西蘭',
'gtOffline' : '離線',
'gtOnline' : '線上',
'gtOptionalSoftware' : '可選軟體',
'gtOptionalSW' : '可選軟體',
'gtOptSW' : '可選軟體',
'gt-OR-' : '－或者－',
'gtOther' : '．．．',
'gtOutputPower' : '輸出功率',
'gtParentalControls' : '家長控制',
'gtPass' : '密碼：',
'gtPIC' : '家長互聯網控制',
'gtPICOtherTimes' : '在此以外的所有其他時間，該設備將無法訪問互聯網。',
'gtPleaseCallISP' : '請致電您的互聯網服務供應商（ISP）。',
'gtPortForwarding' : '埠轉發',
'gtPrint' : '列印',
'gtReadAllAboutIt' : '如需更多幫助：',
'gtReconnectingHell' : '重新連接中．．．',
'gtRegister' : '註冊',
'gtRegistration' : '註冊',
'gtRestartRouter' : '重新啟動路由器',
'gtRestoreDef' : '還原為預設值',
'gtRestoreFactDefault' : '恢復出廠設置',
'gtRestoreFactDefaults' : '恢復出廠設置',
'gtRestoreSettigns' : '重置設置；',
'gtRetest' : '重新測試連接',
'gtRouterDetails' : '路由器詳細資訊',
'gtRouterInfo' : '路由器信息',
'gtSave' : '保存',
'gtSaveCurrentSettings' : '保存當前設置',
'gtSaved' : '未命名設備已保存',
'gtSaveRestore' : '保存/重置設置',
'gtSaveRestoreSettings' : '保存/重置設置',
'gtSaveSettings' : '保存/備份設置',
'gtSecLog' : '安全性記錄檔',
'gtSecurity' : '安全性',
'gtSelectLang' : '選擇語言：',
'gtSelfHeal' : '自我修復',
'gtSelfHealing' : '自我修復',
'gtSerialSupport' : '在下一頁面中，我們將記錄您路由器的序號，以提供支援。',
'gtShowtime' : '顯示時間',
'gtSpeedTestResults' : '上一次檢查：一天前3：57 pm',
'gtStaticRouting' : '靜態路由',
'gtStatus' : '狀態',
'gtSystemSettings' : '系統設置',
'gtTo' : '至：',
'gtTraffStats' : '流量統計',
'gtTryAgain' : '再試一次。',
'gtUnlocked' : '已解鎖',
'gtUp' : '上',
'gtUpdate' : '更新',
'gtUpdateNoPowerModem' : '現在使用新的固件對您的數據機進行更新。更新過程中請勿關閉電源。',
'gtUpdateNoPowerRouter' : '現在使用新的固件對您的路由器進行更新。更新過程中請勿關閉電源。',
'gtUploadSpeed' : '上載速度',
'gtUSA' : '美國',
'gtUserName' : '用戶名：',
'gtUtils' : '應用程式',
'gtVCI' : 'VCI：',
'gtVCMUX' : 'VC/MUX',
'gtVPI' : 'VPI：',
'gtWAN' : '廣域網路設置',
'gtWANDNS' : 'DNS地址',
'gtWANGateway' : '廣域網路閘道',
'gtWANIP' : '廣域網路IP地址',
'gtWANMAC' : '廣域網路MAC地址',
'gtWANPingBlocking' : '廣域網路Ping阻斷',
'gtWANSubnet' : '廣域網路子網路遮罩',
'gtWebsiteFilter' : '網站篩檢程式',
'gtWelcome' : '歡迎',
'gtWiFi' : 'WiFi',
'gtWifiSettings' : '您的WiFi設置已成功更改。',
'gtWinConnect01' : 'Windows 7或8',
'gtWinConnect02' : '您電腦工作列的右端提供了可用無線網路功能表。',
'gtWinConnect03' : '右擊顯示信號強度條的圖示。',
'gtWinConnect04' : '選擇<strong tid="Network24SSID">({替換為2.4 SSID})</strong>。<!-- IF NOT OPEN --> <span tid="gtNotOpen">如詢問密碼，請輸入網路密碼。<strong tid="Network24Passkey">({替換為2.4密碼})</strong></span> <!-- /IF -->',
'gtWinConnect05' : 'Windows Vista和Windows XP',
'gtWinConnect06' : '您電腦工作列的右端提供了可用無線網路功能表。',
'gtWinConnect07' : '右擊顯示帶有無線電波的電腦圖示（XP系統）或顯示兩台電腦的圖示（Vista系統）。',
'gtWinConnect08' : '從彈出的功能表中選擇<strong>查看可用無線網路</strong>（XP系統）或<strong>連接至網路</strong>（Vista系統）。',
'gtWinConnect09' : '選擇<strong tid="Network24SSID">({替換為2.4 SSID})</strong>。<!-- IF NOT OPEN --> <span tid="gtNotOpen">如詢問密碼，請輸入網路密碼。<strong tid="Network24Passkey">({替換為2.4密碼})</strong></span> <!-- /IF -->',
'gtWireless' : '無線',
'gtWiring' : '佈線',
'gtWPSShort' : 'WPS',
'gtWPS' : 'Wi-Fi保護設置',
'gtYes' : '是',
'htFWUpdate' : '什麼是固件更新？',
'htFWUpdateContent' : '貝爾金公司可能會不時推出新版本的路由器操作程式。這些更新包含對您路由器的改善和修復。<br><br>注意：在更新至新版本固件之前，請備份您的當前設置。',
'htParent' : '什麼是網站篩檢程式？',
'htPIC' : '互聯網控制',
'htPICBlocked' : '互聯網接入被中止',
'htPICBlockedContent' : '當您準備恢復所有設備的互聯網連接時，請恢復訪問。',
'htPICContent' : '互聯網控制可以讓您自訂阻斷每一設備接入互聯網的時間。',
'htSaveRestore' : '保存、載入或恢復設置是什麼意思？',
'htSaveRestoreContent' : '您的路由器可以記住諸如網路名稱、密碼等設置。這些設置可以保存（作為備份），而後可以重新載入至您的路由器。路由器設置也可以恢復至出廠默認設置。',
'htSaveRestoreContentMobile' : '<br>* 對於iPhone、iPad和iPod Touch，保存和載入設置檔不可用。請使用其他設備，如筆記型電腦，來保存和載入設置檔。',
'ISP1t003' : '告訴您的ISP您的路由器能夠獲取IP地址，但DNS無法正常工作。',
'ISP1t007' : 'DNS將諸如“Belkin.com”這樣的功能變數名稱轉換為電腦用來流覽互聯網的數位位址（IP位址）。您的路由器上有一個IP位址，這就是說它已連接到互聯網，但DNS無法正常工作，所以您無法上網，這表明您的ISP有誤。<span class="nub"></span>',
'ISP2t003' : '告訴您的ISP您的路由器能夠獲取IP位址，DNS正在運行，但系統無法ping通。',
'ISP2t007' : '我們通過“ping”互聯網上的其他電腦來檢測是否能夠與之通信。DNS將諸如揃elkin.com這樣的功能變數名稱轉換為電腦用來流覽互聯網的數位位址（擨P位址）。您的路由器上有一個IP位址，這就是說它已連接到互聯網，且您的ISP提供的DNS正在運行，但系統無法ping通。這表明您的ISP有誤。<span class="nub"></span>',
'ISP3t004' : '告訴您的ISP您的用戶名和密碼被接受，但您仍然無法連接至互聯網。',
'ISP3t007' : '我們通過“ping”互聯網上的其他電腦來檢測是否能夠與之通信。您的ISP接受了您的用戶名和密碼，但系統無法ping通，所以您無法上網。這表明您的ISP有誤。<span class="nub"></span>',
'ISP4t003' : '告訴您的ISP經過多次嘗試您的用戶名和密碼仍無法被接受。',
'ISP4t007' : '您的互聯網連接需要用戶名和密碼，但您的ISP不能接受您輸入的用戶名和密碼。您的ISP將確保您輸入的資訊正確。<span class="nub"></span>',
'ISP5t003' : '告訴您的ISP您選擇了動態連接，但無法獲取IP位址。',
'ISP5t007' : 'IP位址用於標識互聯網上的路由器或其他設備。您的ISP未能給您的路由器分配IP位址，缺少IP位址您無法進行連接。這表明您的ISP有誤，或者，您的連接不是動態連接。<span class="nub"></span>',
'ISP6t003' : '告訴您的ISP您選擇了靜態連接，但無法連接到互聯網。',
'ISP6t007' : '當您的ISP分配給您一個或多個特定的IP位址以供使用時，請使用靜態連接。<span class="nub"></span>',
'ISP7t003' : '告訴您的ISP您的VPI/VCI設置無法正常運行，您需要其給出正確的數字。',
'ISP7t007' : 'VPI和VCI用於告知您的路由器用於與您的ISP通信的通道。系統無法檢測到正確的設置。 <span class="nub"></span>',
'Network24Passkey' : '{替換為2.4密碼}',
'Network24SSID' : '{替換為2.4 SSID}',
'p100t002' : '嘗試連接至互聯網。',
'p100t003' : '您已連接至新路由器，新路由器將與您的互聯網服務供應商（ISP）通信。',
'p100t004' : '嘗試連接至互聯網。',
'p100t005' : '您已連接至新路由器，新路由器將與您的互聯網服務供應商（ISP）通信。',
'p100t007' : '檢測我的連接',
'p100t008' : '如果您確定您的連接類型，您可以進行<a href="700-SelectConnection.htm" id="p100a009" tid="p100t009">手動設置&raquo;</a>，或直接進入<a href="000-Dashboard.htm" id="p100a010" tid="p100t010">功能面板&raquo;</a>。',
'p100t009' : '手動設置&raquo;',
'p100t010' : '功能面板&raquo;',
'p100t013' : '現在，顯示頁面&nbsp;',
'p100t024' : '近乎全自動的設置',
'p100t025' : '首先，程式會自動檢查您的接線，並檢測您的互聯網服務供應商（ISP）為您提供的連接類型。需要您進行的操作很少。系統將檢測您的路由器軟體是否為最新版本。<span class="nub"></span>',
'p1010MRt001' : '與數據機通信遇到問題。',
'p1010MRt002' : '可能存在佈線問題。',
'p1010MRt003' : '您可以通過以下操作解決此問題：',
'p1010MRt004' : '請確保您的數據機－路由器已連接到您的帶有互聯網連接的電話插口。您的調製調器－路由器上的ADSL埠（頂部灰色埠）與電話插口之間應採用網路電纜連線。',
'p1010MRt005' : '請確保您的數據機已開啟。數據機的電源適配器的兩端均應已插在，且數據機上的一個或多個指示燈應亮起。',
'p1010MRt006' : '您的調製調器與路由器上的黃色埠之間應該用網路電纜連線。該電纜用於將信號從您的路由器傳輸到數據機，缺少該電纜您將無法上網。',
'p1010MRt007' : '如果上述內容均正常，您可能需要嘗試拔下數據機的電源來將其重新啟動，等待15秒，然後將電源重新插上。如果您的數據機帶有電池，您可能需要找到數據機的重定按鈕並按下。',
'p1010MRt008' : '下圖就是這些連接成功時的狀態：',
'p1010MRt009' : '當您進行檢查時，系統將一直等待連接成功。',
'p1010MRt010' : '最常見的佈線困難在於數據機和路由器之間。對電纜兩端進行檢查非常重要。電纜的一端應插入您的新路由器上的黃色埠，另一端應連接至數據機上的類似埠。不同的數據機製造商對埠的標記也不同，您可能會發現該埠上標記有“資料”、“局域網”、“網路”或“乙太網”。<span class="nub"></span>',
'p1020t001' : '與您的互聯網服務供應商通信遇到問題。',
'p1020t002' : '請重新啟動您的數據機－路由器。',
'p1020t003' : '未檢測到互聯網連接，請嘗試重新啟動您的數據機－路由器。',
'p1020t004' : '請關閉您的數據機－路由器。這通常需要按下數據機－路由器上的開關，或者，簡單地將其電源拔下。',
'p1020t005' : '等待15秒。',
'p1020t006' : '啟動您的數據機－路由器。',
'p1020t007' : '幾秒鐘後，指示燈會亮起，與您的ISP的連接準備就緒。',
'p1020t008' : '如果該問題一直存在，請聯繫您的ISP來排除您的帳戶故障。',
'p1020t009' : '手動開啟和關閉您的數據機－路由器，然後程式會自動繼續。',
'p1020t010' : '為什麼要重新啟動數據機？',
'p1020t011' : '某些數據機在與新的路由器或新接入的電腦通信之前，需要重新開機。而且，如果您的互聯網服務供應商出現一點小的問題，數據機也可能為意外斷開連接。可以檢測到您的數據機，但沒有互聯網訪問，所以，快速重啟可能是最為有效的措施。<span class="nub"></span>',
'p1100t001' : '發現可用的固件更新！',
'p1100t002' : '我們建議您將路由器固件升級為最新，以確保所有功能正常。',
'p1100t003' : '為我展示最新動態',
'p1201t001' : '使用密碼鎖定功能面板。',
'p1201t002' : '請輸入密碼來鎖定功能面板：',
'p1201t003' : '請輸入您的密碼。',
'gtSetPassword' : '設置密碼',
'p1201t005' : '取消',
'p1210t001' : '功能面板已鎖定。',
'p1210t002' : '請輸入您的密碼：',
'p1210t003' : '請輸入您的密碼。',
'p1210t004' : '您輸入的密碼不正確。',
'p1210t005' : '讓我進去！',
'p1300t001' : '吸引力較高。',
'p1300t002' : '設置Intellistream，可以讓您的互聯網連線性能更高。這需要運行一次網速測試。',
'p1300t003' : '安裝Intellistream',
'p1300t004' : '稍後再詢問',
'p1302t001' : '您的固件已是最新版本。',
'p1316t001' : '更新固件安裝失敗－請通過點擊“檢查新固件”再試一次。',
'p1318t001' : '升級檔案類型或版本不適用於該設備。升級失敗。請獲取正確的檔後再試一次。',
'p1333t001' : '您的固件已成功更新。',
'p1400t001' : '充分利用您的USB埠。',
'p1400t002' : '您可以安裝一些可選的軟體，這將有助於最大程度地利用您路由器上的USB埠。',
'p1400t003' : '向我展示可選軟體',
'p1500t001' : '您所在的位置。',
'p1500t002' : '您好像位於<span tid="gtCurrTimezone">歐洲/赫爾辛基{使用檢測到的貝爾金TZ ID說明替換本取值範圍}</span>時區。是否正確？',
'p1500t003' : '正確。',
'p1500t004' : '讓我自己選擇。',
'p200t001' : '正在建立連接．．．',
'p200t002' : '現在將對您的路由器的物理連接進行檢查。',
'p202At001' : '仍在運行．．．',
'p202At002' : '現在將對您的互聯網服務供應商（ISP）的連接類型進行檢測。這可能需要幾分鐘的時間。',
'p202Bt001' : '仍在運行．．．',
'p202Bt002' : '正在檢查您的互聯網服務供應商（ISP）是否需要密碼。這可能需要幾分鐘的時間。',
'p202Ct001' : '仍在運行．．．',
'p202Ct002' : '現在將對連接進行測試。',
'p202t001' : '正在建立連接．．．',
'p202t002' : '現在將對您的互聯網服務供應商（ISP）的連接類型進行檢測。',
'p208t001' : '您知道VPI/VCI值嗎？',
'p208t002' : '您需要輸入VPI和VCI值方可聯網。這些值用於確定您的ISP需要您使用的通信通路。',
'p208t003' : '您的互聯網服務供應商（ISP）應該已向您提供了這些值。如果您找不到這些值，請致電您的ISP。',
'p208t006' : '',
'p208t007' : '',
'p208t009' : '嘗試連接',
'p208t011' : 'VPI和VCI',
'p208t012' : 'VPI（虛擬通道識別字）和VCI（虛擬電路識別字）用於告知您的路由器用於與您的ISP通信的通道。在要求您的説明之前，系統會自動嘗試若干常見的設置。<span class="nub"></span>',
'p209t001' : '設置有誤。',
'p209t002' : '您的ISP無法使用該VPI/VCI值。是否重新更換一次？',
'p210CXt001' : '您使用的是PPPoE連接。',
'p210CXt002' : '您需要用戶名和密碼才能訪問互聯網。',
'p210CXt004' : '<strong>您的互聯網服務供應商（ISP）應該已向您提供了該資訊。如果您找不到該資訊，請聯繫您的ISP。</strong>',
'p210CXt006' : '',
'p210CXt007' : '',
'p210CXt016' : '嘗試連接',
'p210CXt017' : 'PPPoE',
'p210CXt018' : '點對點乙太網協定（PPPoE）可以在您的路由器和ISP之間創建一個安全連接。電話公司通常使用該協定。<span class="nub"></span>',
'p210DXt001' : '您使用的是PPPoA連接。',
'p210DXt002' : '您需要用戶名和密碼才能訪問互聯網。',
'p210DXt004' : '<strong>您的互聯網服務供應商（ISP）應該已向您提供了該資訊。如果您找不到該資訊，請聯繫您的ISP。</strong>',
'p210DXt006' : '',
'p210DXt007' : '',
'p210DXt016' : '嘗試連接',
'p210DXt017' : 'PPPoA',
'p210DXt018' : '非同步傳輸模式點對點以協定（PPPoA）可以在您的路由器和ATM之間創建一個安全連接。電話公司通常使用該協定。<span class="nub"></span>',
'p210t001' : '您使用的是PPPoE DSL連接。',
'p210t002' : '您需要用戶名和密碼才能訪問互聯網。',
'p210t003' : '<strong>您的互聯網服務供應商（ISP）應該已向您提供了該資訊。如果您找不到該資訊，請聯繫您的ISP。</strong>',
'p210t005' : 'ISP用戶名：',
'p210t009' : '嘗試連接',
'p210t010' : 'PPPoE',
'p210t011' : '點對點乙太網協定（PPPoE）可以在您的路由器和ISP之間創建一個安全連接。電話公司通常使用該協定。<span class="nub"></span>',
'p211t001' : '正在建立連接．．．',
'p211t002' : '正在嘗試連接到您的互聯網服務供應商（ISP）。這可能需要花費2分鐘或更長時間。',
'p212DXt001' : '您的PPPoA設置錯誤。',
'p212DXt002' : '您的用戶名或密碼錯誤，或者，二者均不正確。請再試一次。如果您無法找到正確的資訊，請聯繫您的ISP。',
'p212t001' : '您的PPPoE設置錯誤。',
'p212t002' : '您的用戶名或密碼錯誤，或者，二者均不正確。請再試一次。如果您無法找到正確的資訊，請聯繫您的ISP。',
'p220t002' : '要完成連接並訪問互聯網，請輸入您的用戶名、密碼和服務位址。',
'p220t003' : '<strong>您的互聯網服務供應商（ISP）應該已向您提供了該資訊。如果您找不到該資訊，請聯繫您的ISP。</strong>',
'p220t006' : 'ISP用戶名：',
'p220t007' : '服務位址：',
'p220t010' : '嘗試連接',
'p220t013' : '您使用的是L2TP或PPTP連接。',
'p220t014' : '或者手動選擇“我的連接”&raquo;',
'p220t015' : 'L2TP和PPTP',
'p220t016' : '第2層隧道協議（L2TP）和點點對點通道通訊協定（PPTP）均可用於創建您與您的ISP之間的私密安全連接。<span class="nub"></span>',
'p221t001' : '正在建立連接．．．',
'p221t002' : '正在嘗試連接到您的互聯網服務供應商（ISP）。這可能需要花費2分鐘的時間。',
'p222t002' : '您的用戶名或密碼錯誤，或者，二者均不正確。請再試一次。如果您無法找到正確的資訊，請聯繫您的ISP。',
'p222t004' : '您的設置有誤。',
'p2300t001' : '您安裝的固件版本：',
'p2300t002' : '從本地保存檔更新固件：',
'p2300t006' : '您確定要安裝{{file}}嗎？',
'p2300t010' : '檢查新固件',
'p2400t006' : '您的當前設置將被替換。您確定要載入{{file}}嗎？',
'p2410t001' : '您確定要恢復出廠預設值嗎？',
'p2410t002' : '點擊“是”將刪除你的路由器設置（如用戶名和密碼），並將其替換為出廠預設值。',
'p300t005' : '您現在處於線上狀態。',
'p310t001' : '發現可用的更新！',
'p310t001x' : '該更新（v2.1.0c）包括：',
'p310t002' : '如需安裝新的固件，請閱讀並接受本授權合約。',
'p310t003' : '授權合約',
'p310t004' : '我接受該授權合約。',
'p310t005' : '安裝更新',
'p310t006' : '什麼是固件？',
'p310t007' : '固件是在您的路由器上運行的軟體。更新固件旨在提高您的路由器性能，因此，確保您的固件保持最新大有裨益。<span class="nub"></span>',
'p315t001' : '下載新的固件。',
'p315t002' : '下載進度：',
'p315t003' : '什麼是固件？',
'p315t004' : '固件是在您的路由器上運行的軟體。更新固件旨在提高您的路由器性能，因此，確保您的固件保持最新大有裨益。<span class="nub"></span>',
'p320t001' : '正在安裝新的固件。',
'p320t002' : '當新的固件得以應用時，將重新啟動您的路由器來完成安裝。',
'p320t004' : '什麼是固件？',
'p320t005' : '固件是在您的路由器上運行的軟體。更新固件旨在提高您的路由器性能，因此，確保您的固件保持最新大有裨益。<span class="nub"></span>',
'p320t006' : '這一過程需要三分鐘左右的時間。更新進度：',
'p320t010' : '當新的固件得以應用時，將重新啟動您的數據機來完成安裝。',
'p321t001' : '重新啟動您的路由器',
'p321t002' : '重新啟動您的數據機',
'p321t003' : '固件已安裝完畢，路由器將重新啟動從而使其生效。',
'p321t004' : '重新啟動：',
'p321t005' : '固件更新',
'p321t006' : '固件是用來執行網路和安全協定的軟體。更新固件可以提高您的路由器的可靠性與功能性，因此，確保您的固件保持最新大有裨益。<span class="nub"></span>',
'p321t010' : '固件已安裝完畢，數據機將重新啟動從而使其生效。',
'p330t001' : '檢測您的連線速度．．．',
'p330t002' : '執行快速速度測試可説明您的路由器優化Internet連接。這一過程需要一兩分鐘的時間。',
'p331t001' : '您的固件已是最新版本。',
'p332t001' : '以後再嘗試固件更新。',
'p333t001' : '您的固件已經更新。',
'p334t001' : '您的網速測試結果！',
'p334t002' : '此處顯示有：',
'p334t003' : '下載速度',
'p334t004' : 'Mb/s',
'p334t005' : '上載速度',
'p334t006' : 'Mb/s',
'p340t002' : '正在重新連接您的路由器以繼續。',
'p341t001' : '請重新啟動您的路由器。',
'p341t002' : '重新連接您的路由器遇到問題。快速重啟可能會奏效。',
'p341t003' : '請拔掉您的路由器電源，等待幾秒鐘，然後重新插上。當您的路由器上的藍燈持續亮起時，連接準備就緒。',
'p341t003w' : '請拔掉您的路由器電源，等待幾秒鐘，然後重新插上。當您的路由器上的藍燈持續亮起時，連接準備就緒。',
'p341t004' : '當您進行上述操作時，系統將等待路由器恢復正常。',
'p342t001' : '正在重新連接您的路由器以繼續。',
'p342t002' : '您可能需要從無線網路清單中重新選擇您的無線網路<span tid="Network24SSID">({替換為2.4 SSID})</span>以繼續。',
'p343t002' : '正在重新連接您的路由器以繼續。',
'p343t003' : '您可能需要重新選擇您的無線網路<span tid="Network24SSID">({替換為2.4 SSID})</span>以繼續。',
'p344t001' : '請重新啟動您的路由器。',
'p344t002' : '重新連接您的路由器遇到問題。快速重啟可能會奏效。',
'p344t003' : '請拔掉您的路由器電源，等待15秒，然後重新插上。當您的路由器上的藍燈持續亮起時，系統將進行重新連接。',
'p344t003w' : '請拔掉您的路由器電源，等待15秒，然後重新插上。當您的路由器上的藍燈持續亮起時，系統將進行重新連接。',
'p344t004' : '當您進行上述操作時，系統將等待路由器恢復正常。',
'p400f010' : 'WPA2',
'p400f011' : 'WPA/WPA2',
'p400f012' : 'WEP',
'p400f013' : '開啟',
'p400t001' : '更為快速地連接所有設備。',
'p400t002' : '為您的新路由器設置與舊路由器相同的網路名稱和密碼，可使您的所有設備立即連接上。',
'p400t004' : '網路名稱：',
'p400t008' : '安全類型：<em class="hide-on-phones">（WPA2最為安全。）</em>',
'p400t014' : '你的5GHz頻段將具有相同的名稱，但末尾添加有".media"。',
'p400t015' : '稍後您可以自行更改。',
'p400t017' : '保存並繼續',
'p400t018' : '我為什麼要重命名我的網路？',
'p400t019' : '如果您使用相同的網路名稱和密碼，所有先前連接到您的舊路由器上的無線設備，均會自動連接至新的路由器。此外，當您在設備上搜索您的網路時，也便於您找到獨一無二的名稱。<span class="nub"></span>',
'p450a009' : '太好了！下一步是什麼？',
'p450t001' : '您的更改已保存。',
'p450t002' : '以下是您的新網路名稱和密碼。',
'p450t003' : '如果你已經使用了舊的網絡名稱和密碼，則您現有的無線上網設備現在將重新連接。',
'p450t004' : '名稱：',
'p450t008' : '您的路由器底部自帶了一張紙，用於記錄您的新網路名稱。這樣做是便於您隨時查看您的新網路名稱。',
'p450t011' : '如果您使用此前的網路名稱和密碼，則您的大多數無線設備將在您下一次將其啟動時自動重新連接。對於其他無線設備，則需要您為其重新選擇網路後方可自動連接。您的《快速安裝指南》中帶有Windows、OS X、IOS以及Android作業系統的說明。<span class="nub"></span>',
'p451a009' : '太好了！下一步是什麼？',
'p451t001' : '無更改。',
'p451t002' : '您的網路名稱和密碼未進行更改。',
'p451t003' : '您需要為您所有的無線設備上提供您的網路名稱和密碼：',
'p451t004' : '名稱：',
'p451t008' : '您的路由器底部自帶了一張紙，用於記錄您的新網路名稱。這樣做是便於您隨時查看您的新網路名稱。',
'p451t011' : '您需要在您的每一無線設備上輸入您的網路名稱。您的《快速安裝指南》中帶有Windows、OS X、IOS以及Android作業系統的說明。<span class="nub"></span>',
'p500t001' : '註冊您的路由器。',
'p500t002' : '註冊很快速且可以節省大量的時間，註冊後您可以隨時獲得所需的客戶支援。',
'p500t004' : '為什麼要註冊？',
'p500t005' : '對您有所瞭解可以讓我們在您需要的時候更為迅速地為您提供幫助。<span class="nub"></span>',
'p500tCancel' : '稍後註冊&raquo;',
'p500tSubmit' : '完成註冊',
'p600t001' : '您可以訪問路由器的可選軟體頁面，來為您的其他電腦和移動設備檢索類似軟體。',
'p600t002' : '謝謝，不必了。請返回功能面板。',
'p600t003' : '可選軟體',
'p600t004' : '這些軟體工具可以説明您利用您的路由器所提供的先進功能。我們提供了蘋果iOS、Android、Windows以及OS X版本的軟體可供您下載。<span class="nub"></span>',
'p601t001' : '<strong>感謝您的註冊！</strong>',
'p700MRt001' : '系統無法自動為您設置連接。請告知我們更多一些資訊，以便能夠為您連接。',
'p700MRt002' : '您所要設置的連接是什麼類型？',
'p700MRt003' : '我的連接是：',
'p700MRt005' : '動態連接（1483橋接）',
'p700MRt007' : 'PPPoE 連接',
'p700MRt009' : 'PPPoA 連接',
'p700MRt011' : '靜態連接（IPoA）',
'p700MRt014' : '我不能確定我的連接類型：',
'p700MRt016' : '自動再試一次。',
'p700MRt017' : '連接類型',
'p700MRt018' : '<span class="black">動態連接—</span>此類連接越來越多地用於一些DSL供應商。',
'p700MRt019' : '<span class="black">PPPoE及PPoA連接—</span>此類連接需要由ISP提供的用戶名和密碼。',
'p700MRt021' : '<span class="black">靜態連接—</span>此類連接要求每一用戶採用唯一的自訂參數。<span class="nub"></span>',
'p700t001' : '系統無法自動為您設置連接。請告知我們更多一些資訊，以便能夠為您連接。',
'p700t002' : '您所要設置的連接是什麼類型？',
'p700t003' : '我的連接是：',
'p700t005' : '動態連接',
'p700t007' : 'PPPoE 連接',
'p700t008' : 'L2TP或PPTP連接',
'p700t013' : '靜態設置',
'p700t014' : '我不能確定我的連接類型：',
'p700t914' : '如果您仍然無法確定您的連接類型，請聯繫您的互聯網服務供應商（ISP）。',
'p700t016' : '自動再試一次。',
'p700t017' : '連接類型',
'p700t018' : '<span class="black">動態連接—</span>常用於大多數電纜和光纖互聯網服務供應商和一些DSL供應商。',
'p700t019' : '<span class="black">PPPoE及PPTP連接—</span>需要由ISP提供用戶名和密碼。',
'p700t021' : '<span class="black">靜態連接—</SPAN>要求每一用戶採用唯一的自訂參數。<span class="nub"></span>',
'p701MRt001' : '您已選擇了動態連接。',
'p701MRt002' : '您的互聯網服務供應商（ISP）應該已向您提供了附加配置設置。',
'p701MRt004' : '動態設置：',
'p701MRt006' : '',
'p701MRt007' : '',
'p701MRt016' : '嘗試連接',
'p701MRt017' : '動態連接',
'p701MRt018' : '動態連接將在建立與ISP的通信之後自動配置。<span class="nub"></span>',
'p701t001' : '正在建立動態連接．．．',
'p701t002' : '系統正在向您的互聯網服務供應商（ISP）請求連接。',
'p702t001' : '正在重新啟動數據機．．．',
'p702t002' : '系統已準備好重新開機您的數據機來嘗試不同的連接類型。',
'p710MRt001' : '您已選擇了靜態連接。',
'p710MRt002' : '您的互聯網服務供應商（ISP）應向您提供靜態連接設置參數。如果您找不到該資訊，請聯繫您的ISP。',
'p710MRt004' : '靜態連結設置：',
'p710MRt005' : 'IP地址：',
'p710MRt006' : '',
'p710MRt007' : '子網路遮罩：',
'p710MRt008' : '',
'p710MRt009' : '預設閘道器：',
'p710MRt010' : '',
'p710MRt011' : 'DNS伺服器（首選）：',
'p710MRt012' : '',
'p710MRt013' : 'DNS伺服器（備用）：',
'p710MRt014' : '',
'p710MRt015' : '注：並非所有ISP都需要備用DNS伺服器。',
'p710MRt016' : '嘗試我的靜態連結',
'p710MRt017' : '靜態連接',
'p710MRt018' : '靜態連接需要手動配置，但可為您的路由器提供一個恒定的位址，從而更便於您在您的網路之外進行訪問。靜態連接不常用于居民互聯網服務，且一般費用更高。<span class="nub"></span>',
'p710t001' : '您已選擇了靜態連接。',
'p710t002' : '您的互聯網服務供應商（ISP）應向您提供靜態連接設置參數。如果您找不到該資訊，請聯繫您的ISP。',
'p710t004' : '靜態連結設置：',
'p710t005' : 'IP地址：',
'p710t006' : '',
'p710t007' : '子網路遮罩：',
'p710t008' : '',
'p710t009' : '預設閘道器：',
'p710t010' : '',
'p710t011' : 'DNS伺服器（首選）：',
'p710t012' : '',
'p710t013' : 'DNS伺服器（備用）：',
'p710t014' : '',
'p710t015' : '注：並非所有ISP都需要備用DNS伺服器。',
'p710t016' : '嘗試我的靜態連結',
'p710t017' : '靜態連接',
'p710t018' : '靜態連接需要手動配置，但可為您的路由器提供一個恒定的位址，從而更便於您在您的網路之外進行訪問。靜態連接不常用于居民互聯網服務，且一般費用更高。<span class="nub"></span>',
'p711t001' : '正在建立靜態連接．．．',
'p711t002' : '系統正在向您的互聯網服務供應商（ISP）請求連接。',
'p712t001' : '您的靜態連結設置有誤。',
'p712t002' : '您所輸入的位址或其他項目中的一個不正確，但系統無法辨別是哪一個。',
'p800t001' : '應用您的更改。',
'p800t002' : '系統正在應用您的更改，並重啟路由器使其生效。',
'p801t002' : '系統正等待路由器重新連接。當路由器重新連接成功後將繼續。',
'p802t002' : '需要路由器的無線連接以繼續。',
'p802t004' : '返回設備無線網路功能表',
'p802t005' : '選擇您的新網路，名為<strong tid="Network24SSID">({替換為2.4 SSID})</strong>',
'p802t007' : '輸入您的密碼，<strong tid="Network24Passkey">({替換為2.4 密碼})</strong>',
'p802t009' : '在您連接到路由器之後繼續。',
'p802t010' : '系統正等待路由器重新連接。',
'p803t002' : '需要路由器的無線連接以繼續。',
'p803t003' : '由於您更改了您的網路名稱，您可能需要重新選擇您的無線網路：',
'p803t004' : '返回設備無線網路功能表',
'p803t005' : '選擇您的新網路，名為<strong tid="Network24SSID">({替換為2.4 SSID})</strong>',
'p803t007' : '輸入您的密碼，<strong tid="Network24Passkey">({替換為2.4 密碼})</strong>',
'p803t009' : '在您連接到路由器之後繼續。',
'p803t010' : '系統正等待路由器重新連接。',
'p804t001' : '您的設備未能重新連接。',
'p804t002' : '這種情況有時會發生，且易於修復。',
'p804t025' : '如果您周圍有聯網的設備，請訪問以下網址來獲取説明資訊：<strong>http://belk.in/PMuxOg</strong>',
'p804t026' : '如果這樣做不起作用，請在您的數據機和電腦之間直接插入乙太網電纜。',
'p804t027' : '當連接成功後，系統將自動繼續。',
'p900t001' : '請重新啟動您的數據機。',
'p900t002' : '您的數據機無法通信。',
'p900t003' : '請執行以下步驟來重新開機您的數據機。',
'p900t004' : '請關閉您的數據機。這通常需要按下數據機上的開關，或者，簡單地將其電源拔下。有些數據機帶有電池，在這種情況下，您需要找到數據機上的重定按鈕。',
'p900t005' : '等待15秒。',
'p900t006' : '啟動您的數據機。',
'p900t007' : '幾秒鐘後，指示燈會亮起，與路由器通信準備就緒。',
'p900t008' : '手動開啟和關閉您的數據機，然後程式會自動繼續。',
'p900t009' : '為什麼要重新啟動數據機？',
'p900t010' : '某些數據機在與新的路由器或新接入的電腦通信之前，需要重新開機。可以檢測到您的數據機，但未能與您的新路由器通信，所以，快速重啟可能是最為有效的措施。<span class="nub"></span>',
'p901t001' : '現在，請重新啟動您的數據機．．．',
'p901t002' : '數據機關閉後再開啟期間，系統將一直等待。',
'p902t001' : '您的數據機已關閉。',
'p902t002' : '系統正等待數據機重新工作。',
'p903t001' : '是否需要更長時間？',
'p903t002' : '系統正等待路由器重新啟動。您是否需要更長時間？',
'p903t005' : '這通常需要按下數據機上的開關，或者，簡單地將其電源拔下，但有些數據機帶有電池；在這種情況下，您需要找到數據機上的重定按鈕。',
'p904t001' : '是否需要更長時間？',
'p904t002' : '系統正等待路由器重新工作。您是否需要更長時間？',
'p905t001' : '再次發現您的數據機．．．',
'p905t002' : '系統正等待數據機與您的ISP同步。這一過程需要一兩分鐘的時間。',
'p950IMRt001' : '系統無法檢測到與您的ADSL線的連接。',
'p950IMRt002' : '請檢查並確保您的ADSL壁裝插口與您的路由器上的灰色埠之間採用網路電纜進行連接。',
'p950IMRt004' : '可能存在佈線問題。',
'p950IMRt005' : '您的路由器上的灰色埠與您的ADSL/電話插口之間應採用網路電纜進行連接。該電纜用於將信號從您的ISP傳輸到路由器，缺少該電纜您將無法上網。請檢查該電纜連線是否正確。',
'p950IMRt006' : '下圖是該連接成功時的狀態：',
'p950IMRt007' : '您的ADSL壁裝插口與您的路由器電源插頭之間應採用網路電纜進行連接。該電纜用於將信號從您的ISP傳輸到路由器，缺少該電纜您將無法上網。',
'p950IMRt009' : '下圖是該連接成功時的狀態：',
'p950IMRt010' : '當您進行檢查時，系統將一直等待連接成功。',
'p950IMRt014' : '佈線',
'p950IMRt015' : '最常見的佈線困難在於壁裝插口和路由器之間。對電纜兩端進行檢查非常重要。電纜的一端應插入您的新路由器上的灰色埠，另一端應連接至您的ADSL插口。在某些情況下，壁裝插口和電纜之間可能需要一個濾波器。 <span class="nub"></span>',
'p950PMt001' : '系統無法檢測到與您的ADSL線的連接。',
'p950PMt002' : '請確保您的路由器與其電源插頭（帶有內置的數據機）之間採用網路電纜進行連接。',
'p950PMt004' : '可能存在佈線問題。',
'p950PMt005' : '檢查並確保從數據機電源線分出的網路電纜已連接至您的路由器的黃色WAN埠。無此網路連接，您將無法上網。',
'p950PMt009' : '下圖是該連接成功時的狀態：',
'p950PMt010' : '當您進行檢查時，系統將一直等待連接成功。',
'p950PMt011' : '佈線',
'p950PMt012' : '最常見的佈線困難在於壁裝插口和數據機之間。對電纜兩端進行檢查非常重要。電纜的一端應插入您的新路由器上的供電電源，另一端應連接至您的ADSL插口。在某些情況下，壁裝插口和電纜之間可能需要一個濾波器。 <span class="nub"></span>',
'p950t001' : '系統未能檢測到您的數據機連接。',
'p950t002' : '請確保您的數據機已插入並已開啟。',
'p950t003' : '確保您的數據機與路由器之間用乙太網電纜連線。',
'p950t004' : '可能存在佈線問題。',
'p950t005' : '您的數據機應該開啟，且您的數據機與路由器上的黃色埠之間應該乙太網電纜連線。',
'p950t006' : '請檢查以下內容：',
'p950t007' : '請確保您的數據機已開啟。檢查數據機電源適配器的兩端均應已插上，且數據機上的一個或多個指示燈亮起。',
'p950t008' : '您的數據機與路由器上的黃色埠之間應該用乙太網電纜連線。該電纜用於將信號從您的路由器傳輸到數據機，缺少該電纜您將無法上網。',
'p950t009' : '您的連接應該是這種狀態：',
'p950t010' : '當您進行檢查時，系統將一直等待連接成功。',
'p950t011' : '佈線',
'p950t012' : '最常見的佈線困難在於數據機和路由器之間。電纜的一端應插入您的新路由器上的黃色埠，另一端應連接至數據機上的類似埠。確保兩端均已完全插入。不同的數據機製造商對埠的標記也不同，您可能會發現該埠上標記有“資料”、“局域網”、“網路”或“乙太網”。<span class="nub"></span>',
'p951IMRt001' : '是否需要更長時間？',
'p951IMRt002' : '系統正等待您插入您的ADSL線。您是否需要更長時間？',
'p951t001' : '是否需要更長時間？',
'p951t002' : '系統正等待路由器重新工作。您是否需要更長時間？',
'pDAt001' : '重複管理員',
'pDAt002' : '該設備當前正由<span id="ipaddr"></span>進行管理！',
'PIC_blocked_content' : '家長互聯網控制已啟動，本設備目前已阻斷互聯網訪問。按下以下按鈕來管理家長互聯網控制設置。',
'PIC_blocked_title' : '本設備目前已阻斷互聯網訪問。',
'PIC_S1t0006' : '互聯網存取時間表：',
'PIC_S1t006' : '最近您的網路上的設備：',
'PIC_S2t003' : '返校夜',
'PIC_S2t004' : '週末',
'PIC_S2t005' : '（周日－週四）',
'PIC_S2t006' : '（週五－週六）',
'PIC-blocked' : '阻斷',
'PIC-S1dt001' : '您需要中止您的整個網路與互聯網的連接嗎？',
'PIC-S1t001' : '阻斷所有設備',
'PIC-S1t003' : '所有設備均已從互聯網上斷開。',
'PIC-S1t004' : '恢復訪問',
'PIC-S1t005' : '目前您的網路上的設備：',
'PIC-S1t010' : '正在搜索設備：',
'PIC-S1t020' : '您的家長互聯網控制計畫已暫停。',
'PIC-S1t021' : '路由器無法知曉當前時間，這將阻止阻斷/解鎖您的家長互聯網控制計畫的發生。這一問題將在您的路由器重新連接至NTP時間伺服器並重新確定正確時間時得到修復。',
'PIC-S1t022' : '路由器會每隔幾分鐘自動檢查一次NTP時間，或者，您可以通過訪問<a href="#" tid="gtSystemSettings">“系統設置”</a>來更改時間伺服器。',
'PIC-unblocked' : '未阻斷',
'pNoTime_content' : '由於與NTP時間伺服器的連接中斷，您的路由器無法顯示當前時間。在重新連接至NTP時間伺服器之前，路由器基於時間的功能（如家長互聯網控制、ECO模式、自我修復等）處於暫停狀態。<br> <br>路由器會每隔幾分鐘自動檢查一次時間。',
'pNoTime_title' : '現在的時間是？',
'pODLAplt001' : '正在應用語言包',
'pODLAplt002' : '正在更改為您所選擇的語言．．．',
'pODLDLt001' : '正在下載語言包',
'pODLDLt002' : '從伺服器獲取您所選擇的語言．．．',
'pODLErrt001' : '很抱歉',
'pODLErrt002' : '確認',
'pStatst004' : '查看全部&raquo;',
'Support1t001' : '系統未能檢測到您的數據機連接。',
'Support1t002' : '請確保您的數據機已插入並已開啟。',
'Support1t003' : '確保您的數據機與路由器之間用乙太網電纜連線。',
'Support1t004' : '可能存在佈線問題。',
'Support1t005' : '您的數據機應該開啟，且您的數據機與路由器上的黃色埠之間應該乙太網電纜連線。',
'Support1t006' : '請檢查以下內容：',
'Support1t007' : '請確保您的數據機已開啟。檢查數據機電源適配器的兩端均應已插上，且數據機上的一個或多個指示燈亮起。',
'Support1t008' : '您的數據機與路由器上的黃色埠之間應該用乙太網電纜連線。該電纜用於將信號從您的路由器傳輸到數據機，缺少該電纜您將無法上網。',
'Support1t009' : '您的連接應該是這種狀態：',
'Support1t010' : '當您完成上述步驟之後，請再次按一下嘗試。',
'Support7t012' : '請通過聯網設備訪問<strong>http://belk.in/Q4XXca</strong>。',
'Support1t016' : '佈線',
'Support1t017' : '最常見的佈線困難在於數據機和路由器之間。電纜的一端應插入您的新路由器上的黃色埠，另一端應連接至數據機上的類似埠。確保兩端均已完全插入。不同的數據機製造商對埠的標記也不同，您可能會發現該埠上標記有“資料”、“局域網”、“網路”或“乙太網”。<span class="nub"></span>',
'Support2t001' : '您的數據機未能重新啟動。',
'Support2t002' : '請試著拔下數據機的電源。',
'Support2t003' : '如果您的數據機上有重定按鈕，請將其按下。',
'Support2t004' : '重新啟動您的數據機是否存在困難？',
'Support2t005' : '請試著按以下步驟來重新開機您的數據機：',
'Support2t006' : '拔下您的數據機的電源。',
'Support2t007' : '等待數據機上的所有指示燈熄滅。',
'Support2t008' : '如果指示燈仍然亮著，則您的數據機可能帶有電池。數據機的某處（通常是在背面）有一個重定按鈕。請將其按下。',
'Support2t009' : '您應該能看到數據機上的指示燈熄滅。等待幾秒鐘，然後再重新插入電源。',
'Support2t010' : '當您完成上述步驟之後，請再次按一下嘗試。',
'Support2t016' : '為什麼要重新啟動數據機？',
'Support2t017' : '某些數據機在與新的路由器或新接入的電腦通信之前，需要重新開機。可以檢測到您的數據機，但未能與您的新路由器通信，所以，快速重啟可能是最為有效的措施。<span class="nub"></span>',
'Support3MRt001' : '系統無法檢測到與您的ADSL線的連接。',
'Support3MRt002' : '請檢查並確保您的ADSL壁裝插口與您的路由器之間採用網路電纜進行連接。',
'Support3MRt003' : '在某些區域，可能需要一個濾波器。',
'Support3MRt004' : '可以肯定存在佈線問題。',
'Support3MRt005' : '您的路由器上的灰色埠與您的ADSL/電話插口之間應採用網路電纜進行連接。',
'Support3MRt006' : '請檢查並確保電纜兩端完全到位。',
'Support3MRt007' : '請檢查並確保電纜已插入您的路由器的灰色埠（而不是黃色埠）。',
'Support3MRt008' : '如果您安裝有ADSL線路濾波器，請確保該濾波器安裝在電纜和您的ADSL插口之間。',
'Support3MRt010' : '請檢查並確保電纜兩端完全到位。',
'Support3MRt011' : '請檢查並確保電纜已插入您的路由器供電電源的網路埠。',
'Support3MRt012' : '如果您安裝有ADSL線路濾波器，請確保該濾波器安裝在電纜和您的ADSL插口之間。',
'Support3MRt016' : '當您完成上述步驟之後，再次嘗試準備就緒。',
'Support3MRt018' : '在聯網設備中輸入以下網址，來瞭解如何自行解決該問題：<strong>www.belkin.com/support3mr</strong>',
'Support3MRt021' : '佈線',
'Support3MRt022' : '最常見的佈線困難在於您的ADSL插口。對電纜兩端進行檢查非常重要。 <span class="nub"></span>',
'Support3MRt050' : '請檢查並確保您的路由器供電電源與電話插口之間採用網路電纜進行連接。',
'Support3MRt051' : '您的路由器上供電電源與您的ADSL/電話插口之間應採用網路電纜進行連接。',
'Support3PMt001' : '系統無法檢測到與您的ADSL線的連接。',
'Support3PMt002' : '請確保您的路由器與其電源插頭（帶有內置的數據機）之間採用網路電纜進行連接。',
'Support3PMt004' : '可以肯定存在佈線問題。',
'Support3PMt005' : '您的路由器上的黃色埠與路由器的供電電源之間應採用網路電纜進行連接。',
'Support3PMt006' : '查看路由器的電源插頭，並找到分出兩個單獨線路的電纜。這些線路中的一個帶有乙太網插頭。',
'Support3PMt007' : '將乙太網插頭插入您路由器上的黃色埠。',
'Support3PMt010' : '當您完成上述步驟之後，再次嘗試準備就緒。',
'Support3PMt012' : '請通過聯網設備訪問<strong>www.belkin.com/support3PM</strong>。',
'Support3PMt016' : '佈線',
'Support3PMt017' : '確保您的ADSL插口與您的路由器之間擁有完整系列的連接十分重要。通過黃色埠的信號傳送至路由器。從路由器供電電源接出的電纜將信號和電力傳送至路由器；該電纜分出的兩個插頭都必須插入路由器以正常工作。 <span class="nub"></span>',
'Support3t001' : '您的數據機無法重新工作。',
'Support3t002' : '檢查數據機是否有電。',
'Support3t003' : '在數據機準備就緒之前，您可能需要等待片刻。',
'Support3t004' : '重新啟動您的數據機是否存在困難？',
'Support7t005' : '請嘗試通過以下步驟來建立ADSL連接：',
'Support7t006' : '檢查並確保從您的數據機－路由器接出的電纜已連接至帶有互聯網連接的電話插口。然後，點擊“再試一次”，並查看您的數據機－路由器是否可以檢測到互聯網。',
'Support7t007' : '如果您的數據機－路由器與固定電話（通過分流器）共用電話插口，請使用濾波器－分流器（可選）來替換分流器。然後，點擊“再試一次”，並查看您的數據機－路由器是否可以檢測到互聯網服務供應商（ISP）。',
'Support7t008' : '如果上述步驟2無法奏效，則可能需要ADSL濾波器*。如果您擁有濾波器（通常由您的互聯網服務提供者提供），則將濾波器連接至固定電話及其電話插口之間。',
'Support7t009' : '如果在嘗試上述步驟1－3之後，ADSL連接仍無法正常工作，則請聯繫您的互聯網服務供應商以尋求技術支援。告知其您的數據機－路由器與ISP同步遇到問題。',
'Support3t010' : '當您完成上述步驟之後，請再次按一下嘗試。',
'Support3t016' : '為什麼要重新啟動數據機？',
'Support3t017' : '某些數據機在與新的路由器或新接入的電腦通信之前，需要重新開機。可以檢測到您的數據機，但未能與您的新路由器通信，所以，快速重啟可能是最為有效的措施。<span class="nub"></span>',
'Support4t001' : '系統無法重新連接至您的路由器。',
'Support4t002' : '請試著重新啟動您的路由器。',
'Support4t003' : '當您的路由器建立完畢並在運行時，請嘗試再次連接到您的路由器。',
'Support4t004' : '請嘗試一些其他的操作。',
'Support4t005' : '首先，請重新啟動您的路由器。',
'Support4t006' : '拔下您的路由器電源，等待幾秒鐘，然後再將電源重新插上。',
'Support4t006w' : '拔下您的路由器電源，等待幾秒鐘，然後再將電源重新插上。',
'Support4t007' : '當您的路由器上的藍燈持續亮起時，連接準備就緒。',
'Support4t008' : '然後，請嘗試一個無線連接。',
'Support4t031' : '這將需要幾秒鐘的時間來建立連接，此後，準備進行再次嘗試。',
'Support4t032' : '或者，您也可以嘗試一個有線連接。',
'Support4t033' : '您可以通過電纜來將這台電腦連接至路由器。通過乙太網電纜來連接電腦與路由器上的一個灰色埠。通過訪問http://router/，您可以再次試著進行設置。',
'Support4t034' : '當您完成上述步驟之後，請再次按一下嘗試。',
'Support4t040' : '請通過聯網設備訪問<strong>http://belk.in/PMuxOg</strong>。',
'Support4t050' : '重新獲取連接',
'Support4t051' : '在此類情況下，您的路由器可能需要重新開機，或者，僅需要重新建立連接。因此，對於這兩種情況我們都給出了相應的說明。由於在上一步您可能已經更改了您的網路密碼，您重新開機路由器之後，您可能需要重新選擇網路。<span class="nub"></span>',
'Support5t001' : '系統無法重新連接至您的路由器。',
'Support5t002' : '請試著重新啟動您的路由器。',
'Support5t003' : '當您的路由器建立完畢並在運行時，請嘗試再次連接到您的路由器。',
'Support5t004' : '請嘗試一些其他的操作。',
'Support5t005' : '首先，請重新啟動您的路由器。',
'Support5t006' : '拔下您的路由器電源，等待幾秒鐘，然後再將電源重新插上。',
'Support5t006w' : '拔下您的路由器電源，等待幾秒鐘，然後再將電源重新插上。',
'Support5t007' : '當您的路由器上的藍燈持續亮起時，連接準備就緒。',
'Support5t008' : '然後，請嘗試一個無線連接。',
'Support5t009' : '這將需要幾秒鐘的時間來建立連接，此後，準備進行再次嘗試。',
'Support5t010' : '或者，您也可以嘗試一個有線連接。',
'Support5t011' : '您可以通過電纜來將這台電腦連接至路由器。通過乙太網電纜來連接電腦與路由器上的一個灰色埠。通過訪問http://router/，您可以再次試著進行設置。',
'Support5t012' : '當您完成上述步驟之後，請再次按一下嘗試。',
'Support5t015' : '請通過聯網設備訪問<strong>http://belk.in/PMuxOg</strong>。',
'Support5t020' : '重新獲取連接',
'Support5t021' : '在此類情況下，很難判斷您的路由器需要重新開機，還是僅僅需要重新建立連接。因此，對於這兩種情況我們都給出了相應的說明。由於在上一步您已經更改了您的網路名稱，當您重新開機路由器之後，請確保連接至新的網路。<span class="nub"></span>',
'Support6t001' : '系統無法重新連接至您的路由器。',
'Support6t002' : '請試著重新啟動您的路由器。',
'Support6t003' : '當您的路由器建立完畢並在運行時，請嘗試再次連接到您的路由器。',
'Support6t004' : '請嘗試一些其他的操作。',
'Support6t005' : '首先，請重新啟動您的路由器。',
'Support6t006' : '拔下您的路由器電源，等待幾秒鐘，然後再將電源重新插上。',
'Support6t006w' : '拔下您的路由器電源，等待幾秒鐘，然後再將電源重新插上。',
'Support6t007' : '當您的路由器上的藍燈持續亮起時，連接準備就緒。',
'Support6t008' : '然後，請嘗試一個無線連接。',
'Support6t031' : '這將需要幾秒鐘的時間來建立連接，此後，準備進行再次嘗試。',
'Support6t032' : '或者，您也可以嘗試一個有線連接。',
'Support6t033' : '您可以通過電纜來將這台電腦連接至路由器。通過乙太網電纜來連接電腦與路由器上的一個灰色埠。通過訪問http://router/，您可以再次試著進行設置。',
'Support6t034' : '當您完成上述步驟之後，請再次按一下嘗試。',
'Support6t037' : '請通過聯網設備訪問<strong>http://belk.in/Nm1f5S</strong>。',
'Support6t050' : '重新獲取連接',
'Support6t051' : '在此類情況下，您的路由器可能需要重新開機，或者，僅需要重新建立連接。因此，對於這兩種情況我們都給出了相應的說明。由於在上一步您可能已經更改了您的網路密碼，您重新開機路由器之後，您可能需要重新選擇網路。<span class="nub"></span>',
'Support7t001' : '您的數據機－路由器未連接至互聯網。',
'Support7t004' : '您的電話插口連接存在問題。',
'Support7t050' : '連接故障',
'Support7t051' : '在這種情況下，很難判定系統無法連接至ISP的原因。我們已對您的佈線進行了最大限度的檢查，因此，接下來您需要檢查並確保您使用了正確的插口和濾波器（如果需要）；如果故障仍無法排除，請致電您的ISP。 <span class="nub"></span>',
'SupportNumber' : '1-800-123-4567',
'UpSpeed' : '12.5',
'p2410t012' : '單擊“還原”將刪除你的路由器設置，如用戶名和密碼，將其替換為出廠默認值。你的電腦，手機等，然後進行配置，以匹配這些設置，以便通過這個路由器上網。您確定要繼續嗎？',
'gtRestore' : '還原',
'gtCancel' : '取消',
'alt="Loading"' : '下載',
'alt="Restart Router"' : '重新啟動路由器',
'alt="Check Wires"' : '檢查電線',
'alt="Check Phone Connection"' : '檢查電話連接',
'alt="Check WAN Connection"' : '檢查WAN連接',
'alt="Checkmark"' : '複選標記',
'alt="Change"' : '更改  ',
'alt="Print"' : '打印',
'alt="Expand"' : '扩大',
'alt="Caret"' : '插入符號',
'alt="Cut"' : '切',
'alt="Browser"' : '瀏覽器',
'alt="Wifi"' : '無線上網',
'alt="Password"' : '密碼',
'alt="Check Phone Jack"' : '檢查電話插孔',
'alt="Turn Off Modem"' : '關閉調製解調器',
'alt="Turn On Modem"' : '打開調製解調器',
'alt="Check Phone Filters"' : '查詢電話過濾器',
'gtSerial' : '序號',
'gt5GName' : '5GHz SSID',
'gt5GKey' : '5GHz Key',
'p1020MRt001' : '與您的互聯網服務供應商通信遇到問題。',
'p1020MRt002' : '請重新啟動您的數據機－路由器。',
'p1020MRt003' : '未檢測到互聯網連接，請嘗試重新啟動您的數據機－路由器。',
'p1020MRt004' : '請關閉您的數據機－路由器。這通常需要按下數據機－路由器上的開關，或者，簡單地將其電源拔下。',
'p1020MRt005' : '等待15秒。',
'p1020MRt006' : '啟動您的數據機－路由器。',
'p1020MRt007' : '幾秒鐘後，指示燈會亮起，與您的ISP的連接準備就緒。',
'p1020MRt008' : '如果該問題一直存在，請聯繫您的ISP來排除您的帳戶故障。',
'p1020MRt009' : '手動開啟和關閉您的數據機－路由器，然後程式會自動繼續。',
'p1020MRt010' : '為什麼要重新啟動數據機？',
'p1020MRt011' : '某些數據機在與新的路由器或新接入的電腦通信之前，需要重新開機。而且，如果您的互聯網服務供應商出現一點小的問題，數據機也可能為意外斷開連接。可以檢測到您的數據機，但沒有互聯網訪問，所以，快速重啟可能是最為有效的措施。<span class="nub"></span>',
'p1010t001' : '與數據機通信遇到問題。',
'p1010t002' : '可能存在連線問題。',
'p1010t003' : '您的數據機與路由器上的黃色埠之間應該用電纜連線。您的數據機應該開啟。',
'p1010t004' : '請進行以下操作以確保一切準備就緒：',
'p1010t005' : '請確保您的數據機已開啟。數據機的電源適配器的兩端均應已插在，且數據機上的一個或多個指示燈應亮起。',
'p1010t006' : '您的調製調器與路由器上的黃色埠之間應該用網路電纜連線。該電纜用於將信號從您的路由器傳輸到數據機，缺少該電纜您無法上網。',
'p1010t007' : '如果上述內容均正常，您可能需要嘗試拔下數據機的電源來將其重新啟動，等待15秒，然後將電源重新插上。如果您的數據機帶有電池，您可能需要找到數據機的重定按鈕並按下。',
'p1010t008' : '下圖就是這些連接成功時的狀態：',
'p1010t009' : '當您進行檢查時，系統將一直等待連接成功。',
'p1010t010' : '最常見的連線困難在於數據機和路由器之間。對電纜兩端進行檢查非常重要。電纜的一端應插入您的新路由器上的黃色埠，另一端應連接至數據機上的類似埠。不同的數據機製造商對埠的標記也不同，您可能會發現該埠上標記有“資料”、“局域網”、“網路”或“乙太網”。',
'Support3t005' : '請試著按以下步驟來重新開機您的數據機：',
'Support3t006' : '檢查您的數據機的前端，查看是否存在亮起的指示燈。如果存在亮起的指示燈，則您的數據機已經開啟，在您的數據機準備就緒之前，您可能需要等待片刻。',
'Support3t007' : '檢查並您的數據機電源是否已正確連接到數據機和牆壁電源插座。',
'Support3t008' : '如果您的數據機上帶有電源開關，請檢查開關是否處於開啟位置。',
'Support3t009' : '仔細檢查並確保您的數據機仍舊連接到您的新路由器。',
'Support1t012' : '請通過聯網設備訪問<strong>http://belk.in/LIkBoH</strong>。',
'QOSt001' : '要啟用Intellistream，做以下幾點：',
'QOSt002' : '使用以太網電纜將計算機連接到您的Belkin路由器（建議).',
'QOSt003' : '運行<a href="http://www.speedtest.net" target="_blank" class="speed_font4">Speedtest.net</a>點擊這裡為您的互聯網連接速度測試',
'QOSt004' : '在運行速度測試之後，你看到的輸入值Speedtest.net到下載速度和上傳速度場以上，然後點擊“保存”。',
'gtMbps' : 'Mbps',
'QOSt006' : '隨著你的高下載速度，Intellistream將優先考慮你的上傳速度。',
'QOSt007' : '隨著高的上傳速度，Intellistream將優先考慮您的下載速度。',
'QOSt008' : '這些高互聯網速度，Intellistream不會幫助，所以它不會在此處啟用。',
'QOSt009' : '請輸入大於0.01。',
'QOSt010' : '請輸入號碼大於0.01。',
'gtSettingsNotSaved' : '您有未保存的設置。選擇將它們保存，或離開或重置以放棄更改。',
'QOSt011' : '請輸入一個數字，0.01和100.00之間。',
'QOSt012' : '請輸入數字，0.01和100.00之間。',
'QOSt013' : '請輸入一個數字，0.01和1000.00之間。',
'QOSt014' : '請輸入數字，0.01和1000.00之間。',


// End belkin transation table
LastID : "LastValue"	
	
	
} 

function translate(key) {
	return langDictionary[key];
}
