function dw(message)
{
	document.write(message);
}

common_err1=" %s is NULL";
common_err2="启用";
common_err3="关闭";
dyndns_err1="无信息.";
dyndns_err2="初始化";
dyndns_err3="IP地址冲突，请确定IP地址是否正确!";
dyndns_err4="使用者名称，密码或者主机名为空";
dyndns_err5="DNS访问错误";
dyndns_err6="DNS服务错误";
dyndns_err7="DNS服务器无响应或 Internet无连接";
dyndns_err8=" HTTP不能连接";
dyndns_err9="用户名或者密码错误";
dyndns_err10="更新成功";
dyndns_err11="更新成功";
dyndns_err12="请等待";
dyndns_err13="无主机域名";
dyndns_err14="主机名称不存在：无主机名";
dyndns_err15="你不能管理主机";
dyndns_err16="溢出屏蔽";
dyndns_err17="DynDNS服务错误";
dyndns_err18="服务器关闭";
dyndns_err19="接受到未知的返回代码!";
dyndns_err20="发生未知错误!";
dyndns_err21="无法打开HTTP";
dyndns_err22="WAN IP地址为空";
dyndns_err23='注册失败';
dyndns_err24='注册';
dyndns_err25='登录失败';
dyndns_err26='连接失败';
upgrade_err1="升级失败。升级文件无效。请获得正确的文件，并再次尝试。";
upgrade_err2="由于资源不足，固件更新已终止。更新失败。\n请在系统闲置时再次尝试（无网络数据流）。";
upgrade_err3="无法进行上传，请联系管理员。";
upgrade_err4="固件太大，更新失败。";
upgrade_err5="您已经安装了最新版本的固件。";
upgrade_err6="固件更新文件可能已被损坏。请重新下载固件文件并重试。";
upgrade_err7="无线客户端无法升级固件。";
upgrade_err8="升级文件是无效或过小。\ n更新失败。\ n请找到正确的文件重试。";
OK='确定';
Cancel='取消';
Close='关闭';
show0='路由器设置';
show1='首页';
show2='帮助';
show3='登录';
show4='退出';
show5='因特网状态';
show6='已连接';
show7='无连接';
show8='局域网安装';
show9='局域网设置';
show10='DHCP 客户列表';
show11='广域网络';
show12='连接类型';
show13='DNS服务器';
show14='MAC地址';
show15='DDNS';
show16='无线局域网不可用';
show17='无线';
show18='通信信道 和 SSID';
show19='安全';
show20='设定为AP（接入点）';
/*show21='Specify IP Address';*/
show21='Wi-Fi 保护型设定程序';
show22='MAC地址控制';
show23='无线网桥';
show24='防火墙';
show25='虚拟服务器';
show26='用户端IP地址过滤器';
show27='MAC地址过滤';
show28='非军事区';
show29='WAN Ping阻挡';
show30='安全登录记录';
show31='工具程式';
show33='重新启动路由器';
show34='重新启动AP接入点';
show35='恢复出厂设置';
show36='保存/备份 设置';
show37='恢复之前的设置';
show38='Firmware更新';
show39='系统设定';
show42='EWC Setting';
show43='Setup Wizard';
show44='Manual Settings';
show47='访问控制';
//show48='自我修复';
show48='Self Healing';
show54='连接设置';
sm1='更多信息';
btn1='清除变更';
btn2='套用变更';
btn3='Web Site';
btn4='重设到缺省值';
btn5='Previous';
btn6='Routing Table';
btn7='Apply';
Router='路由器';
AP='接入点';
Dynamic='动态';
Static='静态';
PPPoE='PPPoE';
PPTP='PPTP';
L2TP='L2TP';
Multi_PPPoE='Multi-PPP over Ethernet';
UNKNOWN='UNKNOWN';
cff1='检查Firmware成功';
cff2='Firmware信息';
cff3='没有更新的Firmware可用';
cff4='无法与Firmware信息服务器连接，请检查WAN口网络连接';
d1='Belkin | 复制管理员';
d2='复制管理员';
d3='此设备由xxx管理';
d4='现在';
fc1='防火墙 > 用户IP过滤';
fc2a='此路由器可被设定为只在特定日期与时间存取网络、电子邮件或其他网络服务';
IP='IP';
Port='端口';
Type='类型';
BT='阻挡时间';
Day='日期';
Tm='时间';
Enable='开启';
BOTH='两者均用';
Always='永远启用';
Block='阻挡';
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
Dimicons='减弱图标';
DisableEco='禁用来自下方的无线电';
EcoTo='至';
EcoSu='周日';
EcoMo='周一';
EcoTu='周二';
EcoWe='周三';
EcoTh='周四';
EcoFr='周五';
EcoSa='周六';
EcoExcept='除了';

fcsm='在此端口输入栏中的数字应界于1到65535';
fcrm='端口范围应该是后大于前';
fcripm='IP范围应该是后大于前';
fcnsm='私人端口范围不正确';
fcwdm='The end Day must be later than the start Day.';
fcdtm='在同一日之内, 这时间必须在开始时间之后';
fclanip='The IP filter range should not cover the LAN IP address.';
fd1='防火墙 > 非军事区';
fd2='非军事区功能能让您指定特定任一在您区域中的电脑被NAT防火墙隔离。如果NAT发生问题，这项功能是必需的，由其当您使用电脑游戏或是视讯会议时。若临时状况发生请使用此项功能。';
fd3='在此非军事区的电脑并未受到黑客侵略的保护';
fd4='请输入IP地址的最后一位数字并选取『开启』。点选“套用变更”使更改生效。';
fd5='虚拟非军事区主机IP地址';
fd6='静态IP';
fd7='私人IP ';
fd8='开启';
fmc1='防火墙 > MAC地址过滤';
fmc2='此項功能能让您设定准许用戶清单。当您启用此項功能，您必須在您的网络中输入每一位使用者的MAC地址，这样每一位使用者才能存取网络中的資料';
fmc3='启用MAC地址过滤';
fmc4='MAC地址过滤清单';
fmc5='阻挡';
fmc6='主机';
fmc7='MAC地址';
fmc8='这个MAC地址已经加入';
fmc9='您只可以添加最多20个条目。';
Add='加入';
Added='Added'
Del='删除';
fmcipm='您可能未输入全部的十六进制数字或是部份您所输入的十六进制数字是不正确的。一个十六进制数字应为0至9或是A至F的字母';
fmn1='防火墙';
fmn2='您的路由器有一个防火墙可以保护您的网络被一般黑客入侵，包括Ping of Death(PoD)和Denial of Service (DoS)。如果需要您可以将防火墙关闭。虽然将防火墙关闭不会让您完全无法阻挡黑客的攻击，但还是建议您尽量都开启防火墙。';
fmn3='防火墙启用/禁用';
Disable='关闭';
fp1='防火墙>阻挡WAN Ping';
fp2='进阶设定功能 您可以设定路由器不回应ICMP Ping(ping to the WAN端口)。这可以提高安全度';
fp3='阻挡ICMP Ping';
fs1='防火墙 > 安全记录';
fs1b='工具程式 > 安全记录';
fs2='此路由器保存所有登入与登出之记录，以及所有网络上的攻击，记录可在下方查阅';
fs3='记录档案';
Save='存档';
Clear='清除';
Refresh='重新整理';
System_log='系统记录';
Firewall_log='防火墙记录';
fv1='防火墙>虚拟服务器';
fvipm='您可能尚未输入所有IP地址，或是部份您所输入的数字是不正确的。IP地址的数字应界于0至255之间。';
fvrm='请停用远程管理因为它的连接端口与您的虚拟网络内传连接端口相冲';
fvipr='内传端口范围不正确';
fvppr='私人端口范围不正确';
fvippnm='内传端口范围不正确';
fv2='这项功能能够让您追踪外部(因特网)的服务连接，例如网络服务器(端口80)，FTP服务器(端口21)或其他应用程式藉由路由器到达您內部网络的其他程式';
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
fv39='DirectX 7 游戏';
fv40='DirectX 8 游戏';
fv41='DNS服务器';
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
fv56='FTP服务器';
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
fv73='Lotus Notes服务器';
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
fv121='Telnet服务器';
fv122='The 4th Coming';
fv123='Tiberian Sun: C&C';
fv124='Tiberian Sun: C&C III"';
fv125='Total Annihilation';
fv126='Ultima';
fv127='Unreal Tournament';
fv128='Urban Assault';
fv129='VoxPhone 3.0';
fv130='Warbirds 2';
fv131='WEB服务器(HTTP)';
fv132='WebPhone 3.0';
fv133='Windows 2000 Terminal Server';
fv134='X Windows';
fv135='Yahoo Pager';
fv136='Yahoo Messenger Chat';
fv137='Pal Talk';
fv138='Real Player 8 Plus';
fv139='RealAudio';
fv140='Netmeeting 2.0, 3.0, Intel Video Phone';
fv141='Westwood Online';
fv142='CuSeeMe';
fv143='ICUII Client';
fv200='清除记录';
Description='说明';
Inb='内传端口';
Type='类型';
Pipa='私人IP地址';
Pport='私人端口';
htop='回到最前面';
h1='帮助';
h2='名词解释';
h3='管理员 管理员可提供网络维护服务。对此路由器而言，管理者可更改路由器设定';
h4='用戶 指在此网络上的电脑，其可使用路由器所提供的功能，例如自动DHCP服务器及防火墙';
d5='<b>DDNS</b> 当DDNS组合虚拟网络功能或非军事区功能时, 让网际网络使用者透过网址来连接虚拟网络或非军事区，不需使用IP地址。';
h5='DHCP 动态主机配置协议，此通訊协议可自动将网络中每一台电脑的TCP/IP地址进行配置';
h6='拨号连接  使用公用电话进行网络连接';
h7='DMZ 路由器中的虚拟区域并不受到路由器防火墙的保护。在同一时间內，只有一台电脑可以放在非军事区中';
h8='DNS服务器地址  DNS指网域名称系統服务器，可使网络电脑主机享有一个网域名称(例如:belkin.com)以及一个或更多IP地址(例如:192.34.45.8)。一个DNS服务器可保有主机电脑的资料库, 网域名称及IP地址，故当您需要一个网域名称时，使用者可以得到一个正确的IP地址。家用网络电脑所使用的DNS服务器地址位于您ISP服务供应商所指定的DNS服务器';
h9='DSL调制解调器  DSL指数字用户专线，一个DSL调制解调器是用您現有的电话线以高速来传送资料';
h10='动态IP  即指一个自动由DHCP服务器上获得的IP地址';
h11='以太网络 这是电脑网络标准。 以太网络是透过讯号线和网络集线器进行连接，传送资料的速度可高达每秒1000Mbits';
h12='防火墙 防火墙意指一道电子墙，可以阻挡未经授权的使用者存取特定档案或在网络中的电脑';
h13='Firmware 意指安装在记忆体中的软体。必要的程序将会持续运行尽管系统已经关闭。软体比硬体容易更改但比储存在磁盘上的软件来得稳定';
h14='IP地址 意指网际网络协议  一个IP地址是由四组以句点分开的数字所组成，可用来标识一个网际网络的电脑主机，例如:192.34.45.8';
h15='ISDN  集成服务数字网络。ISDN可以同时传送声音、影像等资讯，速度高达128Kps，比一般高速模拟调制解调器更快更稳定。许多电信公司都提供ISDN服务支持';
h16='网际网络服务提供商ISP就是可以让个人、企业或组织连接到网际网络的公司';
h17='ISP网关地址 (參照ISP说明) ISP网关地址是給路由器的IP地址，只有在使用CABLE或DSL调制解调器时，才需要使用这个地址';
h18='局域网LAN就是一群在相对而言较小的区域內(例如:家里或办公室內)相互连接在一起的电脑和装置。您家中的网络就是一个LAN';
h19='MAC地址 MAC意指媒体存取控制。媒体存取控制地址就是连接到网络之裝置的硬体地址';
h20='MTU指最大传输单元  即每次传输资料的最大值';
h21='网络地址转换  此流程可让您家中的所有电脑共享一个IP地址，这样您就可以透过家中网络的任何一部电脑存取网际网络上的资料，而无需向ISP购买其他的IP地址';
h22='连接端口 一个特定的频道是介由特定的连接端口号码所定义。';
h23='乙太网络使用的点对点协议  点对点协议是一种安全的资料传输方法，最早是用于电话拨号连接。PPPoE是用于乙太网络';
h24='PPTP点对点通讯协议  它是PPP(点对点通讯协议)的一种，可以将一个通讯协议压缩的许多档案让另一个通訊协议使用。这种通訊科技可让TCP/IP資料在非TCP/IP网络上传输。PPTP可让您利用网络当成媒介去加入不同的网络';
h25='SNTP简易网络时间通讯协议  可以让您的路由器与系統的时间显示一致';
h26='动态包状态侦测  SPI是一种由您家用的网关提供的企业用户級网络安全保护。使用SPI，网关即可像防火墙一样保护您的网络不受黑客侵袭';
h27='静态IP 意指由手动配置且不会改变的IP';
h28='子网掩码 子网掩码可为您的ISP所提供的信息，是由四组很类似IP地址的数字所组成。用来建立使用在特定网络的IP地址(相反与可被网络辨识的IP地址，其必需被电脑网卡指定。';
h29='传输控制协议 TCP是最常被使用的协议 TCP是高连线性与不中断性，故其可以提供稳定的传输性能';
h30='TCP/IP 是透过网络进行资料信息传输的标准协议';
h31='UDP网络终端机协议 ：从一台电脑传送一个终端机讯息到另外一台正在运作应用程序的计算机。不像是TCP，UDP是透过无线传输模式而能保证绝对稳定的传输，这个应用程序本身必须侦测所有错误并检查可靠的传送';
h32='广域网  一系列彼此相连的LAN，连接许多位于不同地点(例如:不同建筑物、城市、国家)因特网就是一个广域网络';
h33='WAN IP地址 此IP地址由ISP的路由器指定';
h34='无线局域网  一個透过无线的方式连接許多电脑的局域网';
h35="<b>L2TP</b> Layer Two (2) Tunneling Protocol. an extension to the PPP protocol that enables ISPs to operate Virtual Private Networks (VPNs). L2TP merges the best features of two other tunneling protocols: PPTP from Microsoft and L2F from Cisco Systems. Like PPTP, L2TP requires that the ISP's routers support the protocol.";
h39='<b>DHCP</b> DHCP服务器可以让设定网络非常简易，您只要替网絡中的每一個電腦指派一個IP位址。如果有需要您可以關閉DHCP伺服器。您需要替网絡中的每一台電腦手動设定一個靜態IP位址來關閉DHCP伺服器。IP位址的範圍应該，数值应介于2-100(99台電腦)，如果您要更改這個数字，您可以输入一组新的開始與結束数字，然后選取"应用更改值"';
Enabled='启用';
Disabled='关闭';
Auto='自动';
str1='此设备由xxx管理 ';
str2=' 现在';
DDNSDisable='关闭';
DynDNS='DynDNS';
DtDNS='DtDNS';
Current='当前信道';
i1='设定首页';
i2='状态';
i3='版本信息';
i4='Firmware版本';
i5='启动版本';
i6='硬体';
i7='序号';
i8='局域网设置';
i9='局域网/无线局域网 MAC地址';
i9a='局域网 MAC地址';
i9b='无线局域网不可用';
i10='IP地址';
i11='子网掩码';
i12='DHCP服务器';
NoClients='无客户端';
Clients='客户端';
i13='因特网设置';
i14='广域网 MAC地址';
i15='连接类型';
i16='子网掩码';
i17='WAN IP';
i18='缺省网关';
i19='DNS地址';
i20='特性';
i21='网络地址转换';
i22='防火墙设置';
i23='SSID';
i24='安全';
i25='打印';
i26='(启用/关闭)';
i27='在更改任何设定前，您必須先登录';
i28='语言';
i29='当前语言';
i30='可用语言';
i31='静态IP';
i32='无线 关闭';
ld1='局域网 > DHCP';
ld2='局域网 > DHCP用户名单';
ld3='此页显示您网络中每一台电脑的IP地址、主机名称与MAC地址。如果电脑沒有特定的主机名称，可将主机名称栏目留白。请按"重新整理"來重新整理清单';
ld4='IP地址';
ld5='主机名称';
ld6='MAC地址';
lm1='局域网';
lm2='您的路由器是由DHCP指定您网络中每一台电脑的IP地址，DHCP服务器运行时大部份时间會使用原厂设定值，若您需要更改，可以随时更改';
lm3='您所能更改的设定为: ';
lm4='更改路由器的IP地址，缺省值为：192.168.2.1';
lm5='更改子网掩码地址，缺省值为：255.255.255.0';
lm6='启用/禁用DHCP服务器功能，缺省值为：启用';
lm7='指定开始与结束IP地址清单。开始缺省值为2，结束为100 ';
lm8='指定一个IP地址租赁时间，缺省值为：永远';
lm9='指定一个当地的网域名称，缺省值为：Belkin';
lm10='若需更改设定，请选在左边LAN tab键的 局域网设置';
lm11='路由器给出您一个连接到电脑的用户列表。要检查此列表，请按LAN键旁的"DHCP用户清单"';
ls1='局域网>局域网设置';
ls2='您可以在此更改局域网设置。若要更改生效，请选取"确认变更"';
ls3='IP地址';
ls4='子网掩码';
ls5='DHCP服务器';
On='启用';
Off='关闭';
ls6='DHCP服务器能简易地透过设定网络中的每台电脑一个IP地址来建立网络。您可以不必更改任何内容。';
ls7='IP地址池开始地址';
ls8='IP地址池结束地址';
ls9='租赁时间';
ls10='永远';
ls11='半小時';
ls12='一小時';
ls13='兩小時';
ls14='半天';
ls15='一天';
ls16='两天';
ls17='一周';
ls18='两周';
ls19='DHCP服务器能够为每台电脑在指定的时间內预留特定的IP地址';
ls20='本地网域名称';
Optional='可选项目';
ls21='让您为您的网络命名';
lssm='您所输入的子网掩码是不正确的';
lsnetm='IP地址值应与IP网关地址一样位于一样的子网掩码中';
lsendm='结束的IP地址必須大于开始的IP地址';
lspoolm='局域网的IP地址不能來自于DHCP地址池';
lsipm2='不正确的局域网IP地址，最后一个数字不可为0或255';
lsipm3='不正确的局域网IP地址，最后一个数字不可为127或0';
lsldnm='Invalid Local Domain Name: `~!@#$%^&*()_+[]{}\\|;:\'"<>/?.,';
lsipm4='您输入的IP地址不正确';
lsipalert='请手动更改浏览器地址输入栏到新的局域网IP地址';
lsipm5='您所选的IP地址应为non-routable，IP.\n  192.168.x.x (x可以界于0和255.) \n10.x.x.x (x可以界于0和255.)\n172.y.x.x (y可为界于16和31的任何数字, 而且x 可界于0和255.)';
lsipc='您确定要更改局域网IP地址吗？';
lo1='登录';
lo2='在您做出任何更改前，您需要用一個密码登录。如果您尚未设定您個人的密码，请将此栏留白然后选取';
lo3='密码';
lo4='缺省值＝留白';
Clear='清除';
Submit='提交';
le1='Belkin | 登录错误';
lerror='登录错误';
Utilities='工具程式 > ';
ss1='套用变更成功';
rs1='重新启动成功';
rs3='路由器正在启动中';
rs4='所剩秒数';
ugs1='更新软件成功 ';
rf1='恢复出厂设置值成功';
rss1='恢复设定成功';
ufy1='恢复出厂设置';
ufy2='使用此选项可以将所有设定恢复为原厂设定值。我们建议您在恢复所有预设值前，请先储存您的设定值。若要恢复原厂设定值，请按下方的"恢复默认值"键';
ufy3='警告: 您所有的设定都会消失，您确定要继续吗?';
ufy4='恢复预设值需要60秒的时间。请不要在过程中关闭电源';
ufy5='将不會恢复原厂预设值。沒有任何设定会消失。';
ufy='恢复默认值';
ufe1='工具程式>Firmware更新';
ufe2='有时Belkin会发布新版本的软体。更新版的软体包含了可以修改现有问题的补丁程序。请按下方按键检查是否有新的软体更新版本';
ufe3='注意: 在更新软体版本前，请先储存您現在的设定';
ufe4='请按此';
ufe5='到这里储存/备份现有设定';
ufe6='按此获得新的Firmware版本';
ufe7='检查软体';
ufe8='更新软体';
Update='更新';
ufe9='请指定更新档案的位置。请输入档案路径和档案名称。按"浏览"來寻找档案位置';
ufe10='您确定您要继续更新吗? ';
ufe11='在升級的最后，路由器大約在180秒內暂时不会有响应。这是很正常的現象，请不要关闭电源或重新启动';
ufe12='Firmware版本';
um1='改屏幕能让您使得不同的参数与特定的管理功能协调运作';
um5='重新启动路由器';
um6='有時后不一定需要重新启动路由器。当路由器开始不正常运作时，重新启动不会删除任何您的配置设定';
um7='恢复出厂设置';
um8='选用此选项能让您将所有设定恢复为出厂设定值。建议您先备份您的设定再恢复所有预设值';
um9='保存/备份现在设置';
um10='您可使用此功能储存您目前的配置设定。保存您的配置设定可以让您在稍后更改或不小心遗失时恢复。我们建议您在Firmware更新前先备份您的配置设定值。';
um11='恢复先前保存的设置值';
um12='此选项能让您恢复先前所储存的配置设定';
um13='Firmware更新';
um14='有时Belkin会发布新版本的Firmware。更新版的Firmware包含了可以修改現有问题的资讯。';
um15='系统设定';
um16='您可以在系统设定頁面设定管理者密码';
um17=', 设定时区，开启远程管理并开启或关闭NAT功能路由器';
um18=' 属于路由器。';
not='不';
pwd='密码';
uprev1='工具程式 > 恢复之前储存的设定';
uprev2='此选项能让您恢复先前所储存的配置设定';
Restore='恢复';
uprev3='输入含有备份设置值的档案名称';
uprev4='您要继续恢复设置值吗？';
uprev5='还原设置后，路由器对命令的响应\n时间可能会延迟60秒钟。\n\n这是正常现象。此时请勿关闭路由器。';
ueco1='Utilities > Eco settings';
ueco2='ECO is a mode about "energy saving" mode';
ur1='工具程式 > 重启路由器';
ur2='当路由器开始不正常运作时，有時候您可能必須重新启动路由器。重新启动并不会使您的设置设定值消失，请按下方按鍵重新启动';
ur3='重新启动路由器';
ur4='您确定要重新启动吗？重新启动不会更改您的配置';
ur5='路由器需要30秒的時间重新启动。在重新启动完成前请勿将电源关闭';
ur6='路由器需要60秒的時间重新启动。在重新启动完成前请勿将电源关闭';
usave1='工具程式 > 保存/备份現在的配置值';
usave2='您可使用此功能储存您目前的配置设定。保存您的配置设定可以让您在稍后更改或不小心遗失时恢复。我们建议您在Firmware更新前先备份您的配置设定值。';
Save='存档';
usys1='工具程式 > 系统设定';
usys2='管理者密码';
usys3='此路由器并未设定任何密码，为了确保安全，您可以在此设定一组密码';
usys4='输入现在的密码';
usys5='输入新的密码';
usys6='确认新的密码';
usys7='登录持续时间';
usys8='1-99分钟';
usys9='时间和时区';
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
usys10='请设定您所在的时区。如果您在夏时制时区(指在夏季把标准時间拨早1小時的时区)，请按此处';
usys11='时区';
usys12='(GMT-12:00) 瓜加林岛 ';
usys13='(GMT-11:00) 中途岛，萨摩亚群岛';
usys14='(GMT-10:00) 夏威夷';
usys15='(GMT-09:00) 美国阿拉斯加州';
usys16='(GMT-08:00)太平洋时区(美国与加拿大) ';
usys17='(GMT-07:00) 亚利桑那';
usys18='(GMT-07:00) 美国与加拿大山区，新墨西哥  ';
usys19='(GMT-06:00) 墨西哥 ';
usys19a='(GMT-06:00) 美国与加拿大中部，芝加哥  ';
usys20='(GMT-06:00) 德古斯加巴(宏都拉斯首都) ';
usys21='(GMT-06:00) 萨斯喀彻温 ';
usys22='(GMT-05:00) 波哥大，利马，里奥布朗库 ';
usys23='(GMT-05:00) 东部时间(美国和加拿大) ';
usys24='(GMT-05:00) 印地安那州(东部) ';
usys25='(GMT-04:00) 大西洋时间(加拿大) ';
usys26='(GMT-04:00) 卡拉卡斯(委内瑞拉首都)，拉巴斯(玻利维亚之首都) ';
usys27='(GMT-04:00) 圣地亚哥 ';
usys28='(GMT-03:00) 纽芬兰 ';
usys29='(GMT-03:00) 巴西利亚 ';
usys30='(GMT-03:00)布宜诺斯艾利斯(阿根廷首都)，乔治城(南美盖亚那共和国首都) ';
usys31a='(GMT-02:00) 中大西洋 ';
usys32='(GMT-01:00)亚速尔群岛 ';
usys33='(GMT) 卡萨布兰卡，蒙罗维亚 ';
usys34='(GMT) 格林威治时间：里斯本、伦敦、爱丁堡 ';
usys35='(GMT) 格林威治时间：都伯林 ';
usys36='(GMT+01:00) 阿姆斯特丹、柏林、伯恩、罗马 ';
usys37='(GMT+01:00) 斯德哥尔摩、维也纳、贝尔格勒(南斯拉夫首都)格 ';
usys38='(GMT+01:00) 伯拉第斯拉瓦(捷克)、布达佩斯(匈牙利首都)、卢布尔雅那(斯洛维尼亚共和国首都) ';
usys39='(GMT+01:00) 布拉格、布鲁塞、哥本哈根、马德里 ';
usys40='(GMT+01:00) 巴黎、塞拉耶佛(玻兹尼亚泽哥维那共和国首都)、史可普列(马其顿共和国首都) ';
usys41='(GMT+01:00) 萨格勒布(克罗埃西亚共和国首都) ';
usys42='(GMT+02:00) 雅典、伊斯坦堡、明斯克(白俄罗斯首都)、维尔纽斯(立陶宛共和国首都)、华沙(波兰首都) ';
usys43='(GMT+02:00) 布加勒斯特(罗马尼亚首都)';
usys43a='(GMT+02:00) 以色列';
usys44='(GMT+02:00) 开罗 ';
usys45='(GMT+02:00) 哈拉雷，比勒陀利亚 ';
usys46='(GMT+02:00)赫尔辛基、里加(拉脱维亚共和国首都)、 塔林(爱沙尼亚共和国首都) ';
usys48='(GMT+03:00) 巴格达(伊拉克首都)、科威特、奈洛比(肯亚共和国首都)、利雅德(沙特阿拉伯) ';
usys50='(GMT+03:00) 莫斯科(俄罗斯首都) ';
usys50b='(GMT+03:30) 德黑兰(伊朗首都) ';
usys51='(GMT+04:00) 阿布达比(阿拉伯联合大公国之首都)、马斯喀特(阿曼首都)、第比利斯(格鲁吉亚共和国首都)';
usys52='(GMT+04:30) 喀布尔 ';
usys53='(GMT+05:00) 伊斯兰马巴德(巴基斯坦首都)、喀拉蚩港市(巴基斯坦) ';
usys53a='(GMT+05:30) 金奈，加尔各答，孟买，新德里 ';
usys54='(GMT+06:00) 阿拉木图、达卡(孟加拉国首都) ';
usys55='(GMT+07:00) 曼谷，河内，雅加达 ';
usys56='(GMT+08:00) 北京、重庆、乌鲁木齐 ';
usys57='(GMT+08:00) 香港、柏斯、新加坡、台北 ';
usys58='(GMT+09:00) 东京、大阪、札幌 ';
usys58a='(GMT+09:00) 汉城 ';
usys96='(GMT+09:30) 阿德莱德，达尔文 ';
usys59='(GMT+10:00) 布里斯班 ';
usys60='(GMT+10:00) 堪培拉，墨尔本，悉尼 ';
usys61='(GMT+10:00) 关岛，莫尔兹比港 ';
usys62='(GMT+10:00) 霍巴特 ';
usys63='(GMT+11:00) 马加丹，索罗门群岛，新喀里多尼亚 ';
usys64='(GMT+12:00) 威灵顿、奥克兰 ';
usys65='(GMT+12:00) 斐济，堪察加半岛，马绍尔群岛. ';
usys97='(GMT+13:00) 努库阿洛法 ';
usys66='日光节约';
usys67='自动调整到节约日光时区';
printps='主 NTP 服务器';
bakntps='备用 NTP 服务器';
usys68='远程管理';
AF='进阶功能';
usys69='远程管理能让您从网络上的任何地方更改路由器的设定，在您开启此功能前';
usys70='请确认您已设定管理者密码';
usys71='任何IP地址皆可远程管理路由器';
usys72='只有此IP地址可远程管理路由器';
usys73='NAT启用';
usys74='允许您关闭Network Address Translation功能，在大多数的狀況里您最好不要将此功能关闭';
usys75='NAT启用 / 关闭';

usys76='UPnP启用';
usys77='允许您开启或关闭UPnP功能。如果您使用此项功能来支持UPnP，开启UPnP能让这些应用程序自动安装到路由器';
usys78='UPnP启用 / 关闭';
usys79='自动更新 Firmware开启';
usys80='允许您自动检查路由器Firmware更新';
usys81='自动更新 Firmware开启 / 关闭';
usys82='当前密码不可用';
usys83='“新密码”与“确认新密码”字段不一致';
usys83_1='密码/确认密码不匹配';
usys84='你输入的数字不正确，请输入1-99之间的数字';
usys84_1='空闲时间的号码值是无效。数量是1-99之间的整数。';
usys85='密码长度不正确，最短3个数字，最长12个';
usys85_1='管理密码长度应该在1至63字';
usysntp='Two NTP Server IP address can not be the same.';
usys86='请手动更改状态栏的地址输入栏为预设LAN地址';
usys87='我们强烈建议您设定管理者密码';
usys88='密码已是最多位';
usys89='AM';
usys90='PM';
usys91='远程访问端口';
usys92='远程访问端口不正确。正确端口应在1至65535';
usys93='使用此功能以节省电源。';

usys94='IGMP Proxy';
usys95='IGMP Proxy 启用/关闭';

usysipm='您可能未输入所有的IP地址号码或是部份您所输入的号码是不正确的。这些号码应如 x.y.y.x (y 于0至255; x于1至254)';
usysipm_1='输入IP号码是无效​​的。数应为0到255';
self_healing='健康>定期检修';
self_healing1='定期路由器重新初始化有助于保持一个更加自由的网络问题。';
self_healing2='我的路由器自动初始化';
self_healing3='设置时间';
self_healing4='星期天';
self_healing5='星期一';
self_healing6='星期二';
self_healing7='星期三';
self_healing8='星期四';
self_healing9='星期五';
self_healing10='星期六';
self_healing11='设置时间';
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
//self_healing60='自我修复';
self_healing60 ='Self Healing';
chkwait='检查新固件...';
Europe='欧洲';
Australia='澳洲 & 纽西兰';
AsiaPacific='亚太地区';
NorthAmerica='北美';
wrhtpsswd='<b>密码错误</b><br>请确认密码并重试。';
usysb1='此路由器并未设定任何密码，为了确保安全，您可以在此设定一组密码';
vjs1='不正确的IP地址，IP地址太长，请再次确认';
vjs2='不正确的IP地址，少了xxx，请再次确认';
vjs3='不正确的IP地址，在XX之间少了一些号码，请再次确认';
vjs4="不正确的IP地址，有多余的.，请再次确认";
vjs5='不正确的IP地址，在XX之间号码太长，请再次确认';
vm1='不正确的字母';
vm2='位置';
vm3='必须为';
vjs6='不正确的年份格式，请输入为(例如:2002)';
vm4='不正确的号码';
vjs8='不正确，必需介于1970..2037 ';
vjs9='不正确的月份格式，请输入01...12';
vjs10='请先输入年份与月份';
vjs11='不正确的日期格式，请输入01...31，某些月份可能只有00..28';
vjs12='不正确的小时格式，请输入00...23';
vjs13='不正确的分钟格式，请输入00…59';
vjs14='不正确的MTU值，其需介于500…1500';
vjs15='不正确的MRU值，其需介于128…65535 ';
vjs16="不正确的IP ";
vjs161="不是在 ";
vjs162=" 子网掩码";
vjs163='允许DHCP范围';
vjs17='您输入两组不一样的密码，请再次确认';
vjs18='请输入开始连接端口的数值';
vjs19='开始连接端口值必须小于结束端口值';
vjs20='不正确的连接端口值，连接端口值应为一正整数';
vjs21='不正确的长度';
vjs22='Invalid Format at position ';
vjs23='不正确的MAC地址，其为一广播地址';
vjs24='不正确的MAC地址，其为空地址。';
vjs25='不正确的MAC地址，其为广播地址';
vjs26='不正确的开头或末尾IP地址，末尾IP位址应大于开始IP地址';
vjs27='不正确的数字， 必須介于1到65535';
vjs28='不正确的子网掩码格式';
vjs29='不正确的子网掩码格式，子网掩码必须是：255.255.255.0 or 255.255.255.128 or 255.255.255.192 or 255.255.255.224 or 255.255.255.240 or 255.255.255.248 or 255.255.255.252 or 255.255.255.254';
vjs30='不正确的IP地址，其最后一码不能为0或255';
vjs31='不正确的局域网IP地址，其第一码不能为127';
vjs32='不正确的局域网IP地址，其不能为0.0.0.0';
vjs33='不正确的局域网IP地址，其必需低于224.0.0.0';
vjs34='正确的范围是：';
vjs35='无效IP地址，第一个数字应介于1至223之间.';
vjs36='Invalid network format.';
vjs37='Invalid gateway format.';
vjs38='IP is class A, netmask is invalid.';
vjs39='IP is class B, netmask is invalid.';
vjs40='IP is class C, netmask is invalid.';
vjs41='Invalid network ip, network ip is duplicate';
vjs42='你输入的子网掩码不可用.';
vjs43='IP地址无效，最后一个数字应该是1到254';
vjs44='无效的DNS地址。第一个数字是1到223';
vjs45='指定IP地址';
vjs46='无效。请更正!';
vjs47='％s是无效的IP，这是不是在％s掩码。';
dup='复制管理员';
wc1='广域网 > 连接类型';
wcc2='选择您的连接类型';
wcc3='动态';
wcc4='动态类型的连接是最普遍的。如果您使用Cable调制解调器，您比较有可能是用动态连接。如果您有一个Cable调制解调器或您不确定你的连接类型，请使用这个';
wcc5='静态';
wcc6='一個静态IP地址连接类型较不为普遍。当您的ISP供应商提供您一个永不改变的IP地址时您才使用这个选项';
wcc7='PPPoE';
wcc8='如果您使用ADSL调制解调器或您的ISP提供您一个使用者名称与密码，那么您的连接类型就为PPPoE，请使用此种连接类型';
wcc9='PPTP';
wcc10='[仅欧洲国家]　这种连接类型在歐洲国家最为普遍。如果您的ISP已告知您特別使用PPTP并已提供您正确的PPTP资讯，您可使用此选项';
wcc11='Telstra Bigpond/OptusNet Cable';
wcc12='只有连接在Bigpond电缆和OptusNet电缆使用此选项';
wcc12_a='在Bigpond使用此选项电缆和OptusNet电缆只有连接';

wcc13='L2TP';
wcc14='[Israel Only]. 此联机种类普遍用于以色列。如您的网际网络服务供货商注明您需要用L2TP并提供正确L2TP信息给您, 请用此选项。';
wcc15='Multi-PPPoE';
wcc16='[Japan Only] This type of connection is a unique function in Japan which is required for those who subscribe NTT\'s broadband Internet.';
Next='下一步';
wds1='广域网 > DNS';
wds2='如果您的ISP提供您一个特定的DNS地址，请在窗口中输入并点选"套用变更"';
wds2_1='如果您的互联网提供商给你特定的DNS设置，在这里输入​​。';
wds3='自动从ISP获得';
wds3_1='自动从互联网提供商';
wds4='DNS地址';
wds4_1='DNS地址（主）';
wds5='次级DNS地址';
wds5_1='DNS地址(副)';
wds6='DNS=Domain Name Server.它是一个将URL地址转换为IP地址的功能，就像将WWW.belkin.com转换为一组IP地址。如果你不想使用自动获取DNS功能，那么你必须输入你的ISP提供的DNS.';
wds6_1='DNS= 域名服务器，在互联网上，像www.belkin.com网址转换成IP地址的服务器。';
wds7='如果您不启用自动DNS功能的话，您必须输入ISP所提供的DNS设定';
wds8='如需要更改DNS，在%s网站过滤%s，选择“无过滤器”。';
wdy1='广域网 > 连接类型 > 动态IP ';
wdy2='输入您的动态IP地址，请输入以下信息并选取"套用变更"';
wdy3='主机名称';
wdy4='主机名称是ISP连接是需要的';
wdy5='更改广域网 MAC地址';
wdy6='不正确的主机名称: `~!@#$%^&*()_+[]{}\\|;:\'"<>/?.,';
wmc1='广域网 > MAC地址';
wmc2='部份ISP让您从电脑网卡上复制MAC地址到路由器。如果您不确定，只要复制在安裝路由器前原本连接到Modem的电脑网卡的MAC地址。复制您的MAC地址不会造成任何问题';
wmc3='广域网 MAC地址';
wmc4='复制电脑 MAC地址';
wmc5='复制';
wmc6='广域网络媒体存取控制地址不可与局域网络媒体存取控制地址相同。请选另外一个';
wdd1='防火墙 > DDNS';
wdd2='动态DNS能提供网络使用者一个网络名称(而非IP地址)来存取虚拟服务器。虚拟服务器可以在因特网上存取而无须知道IP地址。您的无线路由器支持动态DNS服务器。请先到 (<A href="http://www.dyndns.org/"><B>http://www.dyndns.org</B></A>)注册 在使用此功能前，您必须使用DynDNS.org 的免费更新服务进行注册。一旦注册，请按以下指示进行操作。';
wdd3='动态DNS服务';
wdd4='动态DNS状况';
wdd5='网站';
wdd6='使用者名称';
wdd7='密码';
wdd8='域名';
wdd9 ='没有选择DDNS服务\n';
wdd10='没有选择DDNS服务并这页全部数据将会失去, 想继续吗？';
wm1='因特网/广域网';
WAN='广域网络';
wm2='您可以在因特网/广域网 栏设定您的路由器来连接ISP。路由器能够与任何ISP虚拟连接，只要您能正确地将路由器设定与ISP的设定匹配。要将您的路由器与ISP连接，请按屏幕左边的"连接类型"';
wm3='支持连接类型';
wm4='动态IP';
wm4b='包括要求一个主机名称的ISP，其会连接至一个特定的MAC地址';
wm5='静态IP';
wm5b='路由器支持与有指定静态IP地址的ISP连接 ';
wm6='PPPoE';
wm6b='乙太网络使用的点对点协议 路由器支持PPPoE，其将要求PPPoE登录确认';
wm7='PPTP';
wm7b='PPTP 只限于欧洲用户 路由器支持透过PPTP连接到欧洲ISP ';
wm10='L2TP';
wm10b='用于与需要L2TP连接方法的ISP（互联网服务提供商）。';
wpe1='广域网 > 连接类型 > PPPoE';
wpe2='输入您的PPPoE设定，输入您以下的信息并选取"套用变更"';
wpe3='使用者名称';
wpe4='重新输入密码';
wpe5='服务名称(可填可不填) ';
wpe6='MTU (500-1500)';
wpe7='请不要更改MTU值，除非您的ISP特別指定一個非1454的设定';
wpe8='断线于';
wpe9='无活动分钟';
idlerangerro='您所输入的闲置时间是不正确的。这个号码可能介于1-99';
wpe10='无效字符';
wptid='无效字符: "';
pm='您的服务无法确认您所输入的密码。请确认您所输入的密码是正确的';
pm_1='新的密码是不正确的。再试一次';
wpe11='Invalid MTU value';
wpe12='请输入您的使用者名称';
wmpe1='WAN >连接类型> Multi-PPPoE';
wmpe2='输入您的多PPPoE设定，输入您的以下信息，并点击“应用更改”';
wmpe3='Description';
wmpe4='PPPoE帐户';
wmpe5='再次输入密码';
wmpe6='服务名称（可选）';
wmpe7='MTU (1440-1454)';
wmpe7_1='不正确的MTU值，其需介于1440…1454';
wmpe8='子会话';
wmpe9='WAN >连接类型>路由表';
wmpe10='将数据包传输至广域网（或互联网）时，路由将检查数据包的目的地是否符合特定规则。&nbsp;如果符合，将通过指定会话发送数据包。<br>如果没有任何匹配规则，将通过主会话发送数据包。';
wmpe11='目的地类型>';
wmpe12='会话1（主会话）';
wmpe13='会话2（从会话）';
wmpe14='联机时间';
wmpe15='主';
wmpe16='从';
wmpe17='*如果您想使用Multi-PPPoE，请选择其中一个小组会议..';
wmpe18='Account';
id_wmpe='ID';
ip_wmpe='IP';
domain_wmpe='域';
session_wmpe='PPPoE账户';
enable_wmpe='开启';
none='none';
east='东日本';
west='西日本';
manual='手册';
wpp3='密码';
wpp4='请再次输入密码';
wpp6='IP地址';
wpp7='子网掩码';
wpp14='请再次输入密码';
wpp15='请输入您的密码';
wpp16='WAN >连接类型> L2TP';
wpp17='L2TP账户';
wpp18='L2TP密码';
wpp19='请输入您的L2TP账户';
wpp20='由ISP指定的IP';
wpp21='是';
wpp22='否';
wpp23='IP地址分配';
wpp24='使用静态IP地址';
wpp25='从ISP获得动态';
wppa1='广域网 > 连接类型 > PPTP';
wppa2='PPTP帐号';
wppa3='PPTP密码';
wppa4='重新输入密码';
wppa5='主机名称';
wppa6='服务IP地址';
wppa7='我的IP地址';
wppa8='我的子网掩码';
wppa9='连接ID(選用項目) ';
wppa10='断线于';
wppa11='无活动分钟数';
wppa12='请按此输入您的DNS设定';
wppa13='请输入您的PPTP帐号';
wppa14='请再次输入密码';
wppa15='请输入您的密码';
wppa16='IP地址';
wppa17='服务IP地址 ';
wppa18='服务名称不可用.';
ws1='广域网 > 连接类型 > 静态IP ';
ws2='输入您的静态IP设定，请输入以下信息然后选取"套用变更"';
ws3='IP地址';
ws4='子网掩码';
ws5='ISP网关地址';
ws6='我的ISP是否提供超过一个静态IP地址';
ws7='按此输入您的DNS设定';
dm='可能您尚未输入所有的DNS号码，或部份您所输入的号码不正确。此号码应介于0到255';
sm='您所输入的子网掩码数字是不正确的';
sm_1='子网掩码是无效';
ws8='请在接下來的视窗输入您的DNS地址';
ws9='IP Address is same with Alias IP Address, please change one or remove one!';
ws10='缺省网关';
wsc1='IP地址別名';
im='IP地址别名已滿，无法再增加';
wt1='重要';
wt2='点击更改设定路由器将重启.一旦路由器重启,你需要做好以下几项';
wt3='1）拔下电缆调制解调器和Belkin路由器的电源线';
wt4='2）重新连接电源线到电缆调制数据机，等到所有解调器的灯停止闪动';
wt5='3）重新将电源线连接到Belkin路由器';
wt6='确认你已成功连接到互联网,在互联网上开启一个浏览器,例如Internet Explorer, Firefox和Safari以保证你可以浏览网页.';
Logout='退出';
wla1='设定为AP（接入点）';
wlad1='路由器可以只限定用为一个AP无线接入点，屏蔽所有路由和防火墙功能。您可以选取"启用" 然后输入您想给AP指定的IP地址即可';
wlad2='启用/关闭';
wlae1='选择IP地址';
wlae2='子网掩码';
wlae3='请在您的浏览器中手動更改输入栏的地址为局域网的地址';
wlc1='无线 > 频道 与 SSID ';
wlc2='如需更改路由器的无线设置，请在此更改。单击“存档”来存档设置。';
wlc3='无线频道';
wlc4='SSID';
wlcwch='延伸频道';
wlc5='无线模式';
wlcgb='802.11b+g';
wlcg='802.11g';
wlcb='802.11b';
wlc9='广播SSID ';
wlc10='增强模式';
wlc11="启用 Turbo 模式允许路由器或访问点使用帧迸发获取从路由器或访问点到 802.11g 客户机的最大吞吐量。Turbo 模式与支持 Turbo 模式的 802.11g 客户机协同运行。使用最新驱动程序的 Belkin 802.11g 客户机支持 Turbo 模式。不支持 Turbo 模式的客户机在启用 Turbo 模式时正常运行。";
wlc12='保护模式';
wlc13="在大多数的情况中，最佳状况(吞吐量)是将保护模式关闭。如果您使用HEAVY802.11b，最佳效能应为将保护模式关闭时";
wlc14='用作AP无线接入点';
wlc15='当您欲将路由器当做存取点时，您必须为其指定一个IP位址。此IP位址需落在您所连接的网路范围内。欲进入路由器进阶设定之介面，在网路浏览器输入IP位址并登入。';
wlc16='Wireless > EWC Setting';
wlc17='带宽';
wlc18='Control Sideband';
wlc19='NPHY Rate';
wlc20='20MHz';
wlc21='40MHz only';
wlc22='20/40MHz';
wlc22a='20/40/80MHz';
wlc23='使用无线模式切换使用此切换您可以设置路由器的三种无线模式。1) 802.11g only 2) 802.11g 和 802.11b 3) 关闭 4) 此模式将关闭路由器的访问点，因此没有无线设备可以连接网络。当您离家很长时间或不需要使用路由器的无线功能时，关闭路由器的无线功能是保护网络的极佳方法。<br>';
wlcoff='关闭';
wlcngb1='802.11b & 802.11g & 1x1 802.11n';
wlcn1='1x1 802.11n';
wlcngb2='802.11b & 802.11g & 802.11n';
wlcn2='802.11n';
wlca='802.11a';
wlcan='802.11a & 802.11n';
wlcgn='802.11g+n';
wlcnac='802.11n & 802.11ac';
wlcanac='802.11a & 802.11n & 802.11ac';
wlc24='在5GHz频带有四种模式';
wlc25='1) 802.11a 唯一模式 <br> 若将路由设置为此模式，则只能使用符合 802.11a 的设备连接网络。<br> 2) 802.11a & 802.11n <br> 若将路由设置为此模式，则可以使用符合 802.11a 和 802.11n 的设备连接网络。<br> 3) 802.11n 唯一模式 <br> 若将路由设置为此模式，则只能使用符合 802.11n 的设备接入网络。<br> 4) 关闭 <br> 此模式将关闭路由器的 Wi-Fi，阻止无线设备连接网络。如果您离家很久或某段时间不想使用路由器的的无线功能，则关闭路由器的无线功能是确保网络安全的最佳方法。<br>';
wlc26='隐藏您的网络名称将关闭WPS';
wlc27='更改路由器的安全类型将关闭WPS';
wlc28='WPS的被禁用由于您的<A href=%s><B>无线安全类型</B></A>.';
wlc29='WPS被禁用，因为你隐藏你的网络名称（SSID）。';
wlc30='WPS是禁用的，因為你隱藏你的網絡名稱（SSID）和因您的<a href=%s><B>無線安全類型</ B></ A>。';
wlc31='启动WPS将取消隐藏你的网络名称（SSID）';
wlc32='启动WPS将改变您的安全类型 到WPA/WPA2的。您当前的网络密码仍然正常运作';
wlc33='启动WPS将取消隐藏你的网络名称（SSID,改变您的安全到类型WPA/WPA2。您当前的网络密码仍然正常运作';
wlc34='启动的WPS之前，您需要更改您的安全型成为WPA/WPA2和新的网络密码';
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
wlm1='无线';
wlm2='在这里您可以调整设定为无线区';
wlm3='通信信道 和 SSID';
wlm4='调整无线频道和SSID（无线网络名称）';
wlm5='安全';
wlm6='更改无线安全设定，例如WPA设定或WEP设定';
wlm7='设定为AP（接入点）';
wlm8='设定路由器的运作模式为AP模式';
wlm9='指定IP地址';
wlm10='指定AP的IP地址';
wlm11='MAC地址控制';
wlm12='设定一个您想要允許或是拒绝的无线网络用户清单';
wle1='无线 > 安全';
wle2='安全模式';
wle2a='关闭';
wle2b='WPA/WPA2-Personal(PSK)';
wle2c='128位元WEP ';
wle2d='64位元WEP ';
wle3='确认';
wle3a='WPA-PSK';
wle3b='WPA2-PSK';
wle3c='WPA-PSK + WPA2-PSK';
wle7="您可以在此设定无线安全/加密。安全开启时可确保最大值的无线安全。WPA提供的是不断随机改变的加密代码以及指定出最佳的保全解决方案。在无线环境里，并非所有的设备都能支持WPA，所以就必须使用WEP ";
bit64WEP='64bit WEP';
bit128WEP='128bit WEP';
WPAPSK='WPA/WPA2-Personal(PSK)';

wps1='Wi-Fi保护型设定程式(WPS)';
wps2='无线 >Wi－Fi保护设置(WPS)';
wps3='请配置无线安全';
wps4='Wi－Fi 保护设置（WPS）是为简化Wi－Fi网络安全设置和管理的业界标准方法，您可以通过WPS认证的设备，通过PIN或者PBC方法，非常容易的设置和连接到支持WPA的802.11网络，传统的不支持WPS的设备可以通过传统的手动配置加入到网络中。';
wps5='1) 私人密码(PIN)方法';
wps6='从用户装置输入PIN后再按"登记"键。然后在两分钟之内从用户装置启动无线置输程式的WPS功能';
wps7='输入用户装置PIN';
wps8='登记';
wps9='您可以从外部登录者输入路由器PIN码。如想更改路由器PIN码,按"产生新PIN码"键或按"恢复PIN码设定值"重设PIN码原厂设定值';
wps10='路由器PIN码';
wps11='产生新PIN码';
wps12='恢复PIN码设定值';
wps13='2) 按钮组态(PBC)方法';
wps14='按开始PBC键,您的装置会开始PBC,在两分钟之内与路由器连接';
wps15='开始PBC';
wps16='3) 手动组态方法';
wps17_1='对于没有WPS功能的设备,手动配置设备如下：';
wps17='没有WPS的设备，请从CD运行Belkin安全助手或以下手动设置:';
wps18='Router Configuration:';
wps19='组态完成';
wps20='网路名称(SSID):';
wps21='组态未完成';
wps22='网络确认';
wps23='WPA+WPA2-Personal (PSK)';
wps24='资料加密';
wps25='TKIP+AES';
wps26='网络钥匙 (PSK)';
wps27='网络钥匙 (WEP):';
wps28='自动';
wps28_1='空';
wps29='WPS';
wps30='Wi-Fi保护型设定程式(WPS)是业界标准方案,它简化了安全设定和Wi-Fi网路的管理。';
wps31='无线安全:';
wps32='WPS按钮';
wps33='路由器的密码解锁';
wps_msg1='Wi-Fi 保护型设定程序讯息';
wps_msg2='不正确PIN码! 装置PIN码应是八位数字。请检查及重新输入。';
wps_msg3='不正确PIN码! 请检查及重新输入。';
wps_msg4='初始中 - 请在两分钟之内开始附设装置中的WPS';
wps_msg5='进行中 - 请稍后片刻…';
wps_msg6='发生错误 - 请再试一次';
wps_msg7='成功 – 设备已经连接到路由器';
wps_msg8='会话冲突：请等待60秒后重新尝试会话或确认你的客户端与网络连接.';
wps_msg9='限时已过 - 没有用户装置连接路由器';
wps_msg10='由于失败的访问尝试过多，路由器密码被禁用';

wwmm1='QoS组态';
wwmm2='QoS配置';
wwmm3='QoS 将网络中的重要数据（如多媒体内容和基于 IP 的语音（VoIP））列为最高优先级，因此这些数据不会受到正在通过网络发送的其它数据的干扰。基于 802.11e，您可以打开或关闭此功能，并可选择要使用的应答模式。如果您想在网络中传递多媒体内容或使用 VoIP，则应启用 QoS。';
wwmm4='802.11e/WMM QoS';
wle8='13个十六进制的成对数字';
wle9='注意';
wle10='若须使用PassPhrase产生成对的十六位数字，请按在左边的栏位并输入PassPhrase';
PP='PassPhrase ';
generate='产生';
errm='请输入PassPhrase';
keym='密钥不完整';
wle11='密钥1';
wle12='密钥2';
wle13='密钥3';
wle14='密钥4';
wle15='十六進位的成對数字';
keym1='不完整';
keym2='不完整';
wwp2='PSK';
wwp3='WPA-PSK(无服务器)';
wwp4='此为一密码，以单词，片语，一串字母或数字所组成。这个密码必须介于8和63个字母，其中可以包括空白或是标点符号。每一个连接到此网络的使用者必须要使用同一个密码 ';
wwp5='模糊 PSK';
wls_sec_msg='当WPS启用后，通过WPA/WPA2连接.';
wguest2='Guest Settings';
wguest3='访客存取';
wpskerr1='PSK的长度应为8到63或64的十六进制数';
wpskerr2='密钥长度必须介于8至63个字符之间，可以包含空格和符号，或者只能是64个十六进制数字(0-F)。';
wpskerr4='You must input the Guest Pre-shared Key (PSK)';
wpskerr7='The Guest Key must be 8 characters';
wpskerr8='The Guest Key must be not same as Network Key';
wlguest1='SSID不能与访客SSID相同';
wlguest2='The Guest SSID must be not be same as SSID';
ww3='加密技术';
wlmc1='无线 > MAC地址控制';
wlmc2='MAC地址控制 是设定一份您允许或拒绝存取无线网络的用户清单';
Allow='准许';
Deny='拒绝';
wlmc7='请先选择您要允许或拒绝网络存取的MAC地址清单';
wlmc6='无法输入超过32个MAC地址';
wlmc3='不正确的MAC地址';
wlmc4='请先更正';
wlmc5='正确的MAC地址应该是xx:xx:xx:xx:xx:xx / xx-xx-xx-xx-xx-xx. x应介于0-9和a(A)-f(F)!';
wlmc8='您设定一个MAC多个一次';
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
ENTRY_FULL	='所有的输入记录已满，请清除部份输入记录并再试一次';
CLEAR_CONFIRM	='您要清除输入记录吗?';
CLEAR_ALL_CONFIRM ='您要清除所有输入记录吗？';
g1='IP位址是路由器的内部IP位址。存取进阶设定介面，请在您的浏览器位址栏位中输入此IP位址，如果有需要您可以更改这个位址，只要输入新的位址然后选取"应用更改"。您选择的IP位址为无法路由传送IP。下列为无法路由传送: ';
g2='192.168.x.z (x是在0至255之间, z是在1至254之间.)<br>';
g3='10.x.x.z (x是在0至255之间, z是在1至254之间.)<br>';
g4='172.y.x.z (y是在16至31之间, x是在0至255之间, z是在1至254之间.)<br>';
g5='无需改变子网掩码。如果需要的话可以更改子网掩码。仅在您有特殊理由时才更改子网掩码。<br>';
g6='DNS是网域名称系统伺服器的缩写。一个网域名称伺服器是一个位于URL位址的伺服器，例如:www.belkin.com,在您开始使用一个路由器前，许多网际网路服务供应商并不会要求您输入这项资讯。当您的网际网路服务供应商不提供您一个特定的DNS位址时，您应该要检查自动由网际网路供应商获取。如果您是使用静态IP连线，您需要输入一个特定的DNS位址，及一个次级的DNS位址。如果您的连线类型是是动态IP或PPPoE，您很有可能不一定需要输入一个DNS位址。输入DNS位址设定，自动从网际网路供应商获取并输入DNS，按应用更改来储存设定. <br>';
g6a='动态 DNS 服务允许您在许多域 DynDNS.org 产品中为动态 IP 地址指定静态主机名别名，从而更容易地从因特网上的不同区域访问您的网络计算机。DynDNS.org 为因特网社区免费提供此服务（最多五个主机名）。动态 DNSSM 服务是家庭网站、文件服务器的理想选择，或使您在工作时更易访问您的家用 PC 和已存储的文件。使用此服务可确保您的主机名总是指向您的 IP 地址，而不管您的 ISP 多久对其更改了一次。当您的 IP 地址更改时，您的朋友和同事则可通过访问 yourname.dyndns.org 来找到您！要免费注册您的动态 DNS 主机名，请访问 http://www.dyndns.org。设置路由器的动态 DNS 更新客户机在使用此功能前，您必须使用DynDNS.org 的免费更新服务进行注册。一旦注册，请按以下指示进行操作。1. 在“用户名”字段中 (1) 输入您的 DynDNS.org 用户名。2. 在“密码”字段中 (2) 输入您的 DynDNS.org 密码。3. 在“域名”字段中 (3) 输入您通过 DynDNS.org 设置的 DynDNS.org 域名。4. 单击“更新动态 DNS”更新您的 IP 地址。无论何时当由您的 ISP 指定的 IP 地址更改时，路由器都会使用您的新 IP 地址自动更新 DynDNS.org 的服务器。您还可以通过单击“更新动态 DNS”按钮 (4) 来手动完成此操作。<BR> ';
g6b='使用动态 DNS';

g7='DHCP服务器功能通过指定每台网络计算机的IP地址，以便轻松对网络进行设置。您可在必要时关闭DHCP服务器。关闭DHCP服务器时，系统会要求您手动为每台网络计算机设置一个静态IP地址。IP 地址池表示为网络计算机设置的动态地址分配范围。默认值介于2-100（99 台计算机）之间。如果您要更改此值，可以输入一个新的起始IP地址和终止IP地址，然后单击“应用更改”。<br>';
g7a='DHCP服务器';
g8='您能设置一个地方域名(网络名)为您的网络。除非您有具体先进的需要如此，否则没有需要改变这个设置。您能命名网络您要例如「我的网络」 <br>';
g9='动态IP';
g10='动态连线是最多缆线数据机使用的连线类型。通常只要连线至网际网路供应商就可以将设定改为动态IP有些动态连线可能会要求一个主机名称，如果您有一个指定的主机名称，将其输入即可。您的主机名称也是由您的网际网路供应商指定的。某些动态连线可能会要求您复制原本连接电脑的媒体存取控制位址。选取萤幕中的"更改广域网路媒体存取控制位址"连结如果您的路由器已正确连接，网路状态显示会"连线中"。 <br>';
g11='一个静态IP位址连线类型较其他类型普遍。如果您的ISP使用静态IP位址，您可能须要您的IP位址、子网路遮罩、与ISP闸道您的ISP应提供相关资讯输入您的资料然后选取"应用"，在您应用这些改变后，如果您的路由器已正确设定,您的网路状态会显示为"连线中".<br><br>';
g12='大部份的DSL ISP提供乙太网络的点对点协议。如果您使用DSL调制解调器來連接网络，您的ISP可能會使用乙太網路的PPPoE协议來让您登入网络。如果您的家用网络或小型办公室连接不需要Modem，在以下的狀況您可以使用PPPoE: 1)您的ISP提供您一个使用者名称与密碼來进行连接 2)您的ISP提供您网络连接的软件，例如 WinPOET、Enternet300 3)您必须确认选取桌面上的圖示來进行连接  將路由器設定使用PPPoE，输入您的使用者名称与密码，如果您沒有或您不知道，將该栏留空白即可。在您输入所有资讯后选取"套用更改"，若您的路由器安裝正确，您的网络连接状态將会显示为"连接中"。若您需要更多资讯，请参阅使用手冊。<br>';
gmpoe1='广域网类型为MultiSession PPPoE协议。这种广域网支持多种类型的PPPoE会议。适当配置的每一届会议上，该路由器可以传输的数据包，通过正确的PPPoE连接。此外， PPPoE协议会话1将被视为主会议。数据包是不相称的其他的PPPoE会话将被引导到主会议。如果广域网类型是不正确的，改变它！';
gmpoe2='To make the router work properly under the multiple PPPoE WAN type, user has to define the trigger rules of each enabled PPPoE session. So that, once the PPPoE connections are successfully established, the packets can be treated well according to the trigger rules to find out the proper session and transmit the packets.There are two kinds of configuration methologies to define a trigger rule for each PPPoE session.By IP : Please specify the IP address, Subnet Mask and PPPoE Session ID that will be triggered.By Domain Name : Please specify the Domain Name and the PPPoE Session ID that will be triggered.Each rule will take effect if the enable check box is checked.';

g13='有些网际网路服务供应商要求PPTP通讯协定。这将会使您可以直接设定一个I网际网路供应商系统输入网际网路供应商提供的资讯，当您输入完毕,选取"套用变更"。在您应用更新值后如果您的路由器已正确连接，网路状态显示会"连线中"。';

g14a='Telstra BigPond';
g14b='如果您的路由器已正确连接，网络状态会显示"连接中"  ';

g15='MTU设定';
g16='MTU设定值不會改变除非您的网际网路供应商提供您一個特定的MTU值。更改MTU值可以让您解決以下问题:从网路断线、连线速度慢、网路应用作業问题 ';
g17='在X之后断线… ';
g18='断线功能仅供在路由器从网际网路供应商自动断线时使用，当一段时间无连线时。例如:在选项旁边句选记号并且在分钟栏位内输入5，让路由器在网际网路无连线5分钟后中断当您使用的网路是以分计费时，您可以使用此选项。 ';
g19='MAC意指媒体存取控制。所有的网路零组件，包括网路卡、连接器以及路由器都有独有的"序号"叫做媒体存取控制位址。您的网际网路服务供应商可能会记录所有您的电脑的媒体存取控制位址，并且仅让特定的电脑来使用网路服务。当您安装路由器，路由器本身的MAC位址会被网际网路供应商查觉并造成网路无法作业。Belkin已提供复制MAC位址(电脑进入路由器)的能力。 MAC位址会依次地被网际网路供应商系统查看如果您无法确定您的网际网路服务供应商是否需要检查原本的MAC位址，只要复制原本连接至数据机的MAC位址复制位址不会造成网域问题 <br> 若要复制MAC位址，请确保您所使用的电脑所连接的是在您安装路由器前所使用的数据机。选取"'+wmc5+'"按钮，再选取" 套用变更"，您的MAC位址即已被路由器复制。';
g20='欲更改路由器的运作频道，从选单下选取取频道，选取"套用变更"并储存设定。您可以更改SSID。SSID是同等于无线网络名称。如果您所在的区域有其它的无线网络，您应该为其命名。默认值为belkin.xxx。欲更改SSID，选取SSID栏位并输入一个新的名称。选取"套用变更"使新的设定值生效';

g21='使无线网络几乎完全看不到已成为现实。只要关闭SSID广播，网络就不会显示在位置测量中。位置测量是当今市场上许多无线网络适配器均具备的一项功能。此功能将扫描任何可用网络的“连接状况”，并允许计算机根据位置测量选择网络。关闭SSID广播有助于提高安全性。';
g25='虚拟服务器';
g26='这项功能可以让您将路线外部（ Internet ）要求服务，如Web服务器（端口80 ） ， FTP服务器（端口21 ），或其他应用程序通过您的路由器到您的内部网络。由于您的内部计算机都受防火墙，机器从互联网不能去，因为他们不能被\'阅读\' 。如果您需要配置虚拟服务器功能的一个具体应用的名单，常见的应用提供了。如果您的应用程序没有列出，您将需要的应用程序供应商联系，以找出哪些端口设置您所需要的。要选择从所提供的清单中，选择您的应用程序从下拉列表中。请选择该行，您要复制的设置，从下拉列表旁边的“行” ，然后按一下“回车” 。这些设置将被转移到该行指定。单击“将更改应用于”保存设置该应用程序。手动输入设置，输入的IP地址在提供的空间，以便在内部（服务器）电脑，连接埠（县）必须通过（使用逗号之间多个端口） ，选择端口类型（ TCP或UDP ） ，然后点击“应用更改“ 。您只能通过每一个港口内部IP地址。开放港口在您的防火墙可以带来安全风险。您可以启用和禁用设置非常快。我们建议您禁用该设置时，您使用的不是特定的应用。 ';
g27='用戶IP防火墙';
g28='路由器可以设定在某些特定日期或特定时间无法连线到网路、电子邮件、或其他网路服务。这项设定可在一台电脑、一系列的电脑或是很多电脑。例如:您要限制某一台特定的电脑，输入其IP位址与您欲限制的IP范围。接下来在连接埠栏位输入80，然后选择TCP，接下来选择Block。您也可以选择永远阻挡，在上方选择开始日期与时间，然后在下方选择结束日期与时间。选择"套用变更"后，这台电脑在您所指定的时间就无法连线到你所指定的限制IP。注意:请确认您选择正确的时区。 ';
g28_1='可以将路由器配置为限制或允许在特定日期或时间访问网络、电子邮件或其他网络服务。可以为一台计算机、一组计算机或多台计算机设置限制。按下“添加”按钮以使用此功能。';

g29='MAC地址过滤';
g30='媒体存取控制位址防火墙能够让您设定哪些电脑被允许连线。任何不被允许的电脑都将无法存取资讯。当您启用这项功能，您必须在您网络中的每一台电脑都输入 MAC位址。欲使用这项功能，选取"开启媒体存取控制位址防火墙"，接下来在每一台电脑输入媒体存取控制防火墙位址，您只要选取"增加"，然后在空白栏位中输入媒体存取控制防火墙，然后选择"套用变更"即可。若要从清单上删除媒体存取控制位址，只要在您欲删除的媒体存取控制位址旁边按"删除"即可，然后选取"套用变更"储存设定。 <br><br>注意:您所用来当做路由器管理员电脑，将无法删除媒体存取控制功能。 (指您现在所使用的电脑) ';
g31='非軍事区功能能让您指定特定任一在您区域中的电脑被网络位址防火墙取代。如果网络位址发生问题，这項功能是必需的，由其当您使用电脑游戏或是视讯会议时。若临时狀況发生请使用此項功能。這台在非軍事区的电脑并未受到黑客攻击的保护，将電腦放至非軍事区，输入最后一個IP位址的数字，然后選取"启用"，要让更改生效请選取"套用变更"。若您要使用多個广域网IP地址，请选取非軍事区主機能夠直接连线的广域网IP地址，输入非軍事区主机电脑IP地址的最后两码，选择"启用"然后选取"套用变更"';

g32='阻挡ICMP Ping';
g33='计算机黑客使用大家熟知的"Ping"方法来搜索网络中的攻击对象。通过ping一个特定的IP地址并获得IP地址响应后，黑客即可确定是否有机可乘。您可以对路由器进行设置，以便不会对外部的ICMP Ping请求做出任何响应。这有助于加强路由器的安全等级。要关闭ping响应，请选择“阻止ICMP Ping”并单击“应用更改”。路由器将不会对ICMP ping请求做出响应。 ';
g34='管理员密码';
g35='本路由器并未设定任何密码。若您要提高安全层级，你可以现在设定。请妥善保管您的密码，未来您将需要此密码来使用此路由器。若您要使用遥控管理功能，我们建议您最好设定密码。 <br><br>登出时间能让您设定您能够使用路由器进阶设定的时间长度。当您开始闲置时，计时器会开始计时。例如:您已经在进阶设定中做了更改，未点选"登出"就离开电脑，假设您设定登出时间为十分钟，则在您离开电脑十分钟之后，系统就会自动将您登出。这项功能是为了提高安全性，系统预设的登出时间为十分钟。注意:在同一时间内只有一台电脑可以登入至进阶设定的介面。';
g36='时间与时区';
g37='这台路由器的时间透过简易网路时间通讯协定设定。如此可让路由器与全球网路时间同步。路由器中的同步时钟是用来记录与控制使用者登入。请选择你所居住地的时区。若您住在节约日光地区，则选择"节约日光"。系统可能不会马上更新，请等候至少15分钟让路由器联络时区伺服器并得到回应，您无法自行设定时间。 ';
g38='远程管理';
g39='启用此功能之前，<font class="plaintext_bold">请确保已经设置了管理员密码。</font>远程管理可让您在任何网络位置对路由器设置进行更改。有两种对路由器进行远程管理的方法。第一种方法是通过选择“任何IP地址均可远程管理路由器”，以便从网络的任何位置访问路由器。在任意网络计算机中键入您的WAN IP地址之后，系统将显示一个登录屏幕并要求您键入路由器密码。第二种方法是仅允许通过一个特定的IP地址远程管理路由器。这种方法更为安全，但不是很方便。若要使用此方法，请在提供的空白处输入您要用来访问路由器的IP地址，然后选择“仅限此IP地址远程管理路由器”。启用此功能之前，强烈建议您设置管理员密码。若将管理员密码留为空白，可能会导致路由器受到攻击。';
g40='启用NAT';
g42='UPnP "全球随插即用"提供无疏漏的作业，涵盖了语音讯息、视讯讯息、游戏及其他全球随插即用的应用程式。某些应用程式需要路由器的防火墙透过特定的方式组态方能运作。通常会需要打开TCP与UDP的连接埠，有时还需要设定触发程式连接埠。全球随插即用可与路由器连线，它会告知路由器何处需要防火墙组态。此路由器的全球随插即用功能是启用的。如果您欲使用此功能，只要在工具程式页面寻找"启用全球随插即用"然后选取"启用"，再选取"套用变更"即可。';
g43='自动Firmware更新提醒';
g44='此路由器内建自动确认新版本的轫体并提醒您是否有新软体可供更新。当您登入路由器的进阶设定介面时，路由器会确认是否有新软体可供更新。如果有，路由器会通知您。您可选择下载新的软体或是忽略该提示。此项功能设定为关闭，如果您要启用，只要选取"启用"，然后选取"套用变更"即可。';
g45='无线安全';
g46='使用加密可以保护你的无线网络，同一时间只能够选择一种安全类型。因此客户可以在所有的安全类型中选择一种。Belkin产品提供4种安全类型：<br><br>1) 关闭。没有启用加密模式。所有的用户都可以连接到这个开放的网络，且不需要密码。<br><br>2) WPA/WPA2-Personal(PSK)，家用（无服务器）PSK是一种将所有信息包设置不同的代码或者密码，由于代码是在不断的变更的，所以WPA是非常安全的。共有两种WPA，一种是WPA-PSK(共享码)，另一种是WPA-Radius Server。两者最显著的差别是一个需要服务器，一个不需要服务器。WPA-PSK是提供没有服务器的适合家庭或小型办公网络的，PSK密码由数字，字母组成。很明显最大的风险在于别人知道你的共享密码。.<br><br>a. TKIP（暂时密钥完整通信协议）指AES（进阶加密标准），WPA标准指定TKIP，所以此为预设值。除此之外，TKIP提供了更佳的性能，可能许多无线产品还不能升级到AES，AES是一种基于802.11i的最新的加密技术，新的WPA标准将使用AES，虽然目前来说AES尚未普及，但用户喜欢使用此技术。但不管使用哪一种标准，所有网络产品都一定要用一样的技术标准。<br><br>b. Pre-shared Key输入一个超过64个字节的字母或者数字，同样PSK一定要可以使用在每一个网络中的无线设备。请注意上方和下方栏的不同（大写N和小写n是不一样的）。最简单破解网络安全的方式就是猜出您的PSK码。<br><br>3) 128-bit WEP.是一种无线加密的标准。如果您不是所有的设备都支持WPA，128bitWEP可以提供极佳的安全选择，系统会要求您输入一个16位进制的数字，您也可以让其自动生成。<br><br>4) 64-bit WEP.如果您的网络中有些设备不支持WPA和128bitWEP加密方式，Belkin建议您使用64bitWEP模式。 ';
g47='有些网际网路供应商使用L2TP协议要求连接。这设定了与网际网路供应商系统的直接连接。信息类型由您的网际网路供应商提供了。当您完成了时，点击「应用变动」。如果您的路由器适当地被设定，在您套用变动之后，互联网状态指示将读「连接」。';
g48 = 'Access Control';
g49 = 'The Router can be configured to restrict access to the Internet, email, or other network services at specific days and times. Restriction can be set for a single computer.';
g50='ECO 模式';
g51='此功能可使您减弱路由器前面的 LED 灯亮度，以便节省电源。您也可在预定时间禁用无线通讯装置。';

rs_file_error='更新文件不正确，更新失败，请找到正确的文件重试。';
rs_crc='还原失败< CRC >';
rs_long='Restore failure <too long>';
rs_disposition='还原失败<无内容-处理>';
rs_getpid='还原失败<无法\获取pid！>';
rs_unmatchpid='还原失败<pid不匹配>';

var msg_ddns1 ="请输入您的使用者名称";
var msg_ddns2 ="请输入您的密码";
var msg_ddns3 ="网域名称不可能是空白的";
var msg_ddns4 ="更新DDNS";
var msg_ddns5 ="域名长度可能低于63位 .";

// fw_dmz.html
var msg_fw_dmz1 = "Please enter the IP address before enabling DMZ.\n";
var msg_lan_dhcp1 ="从闸口要求资料";
var msg_lan_dhcp2 ="更新组态数据库";
var msg_lan_sett1 ="请输入不能路由的IP地址(10或172或192)";
var msg_lan_sett2 ="请输入不能路由的IP地址(168)";
var msg_lan_sett3 ="请输入不能路由的IP地址(16~31)";
var msg_lan_sett4 ="请输入不能路由的IP地址(1~254)";
var msg_lan_sett5 ="请输入正确IP地址(0~255)";
var msg_wan_stat1 ="IP地址 ";
var msg_wan_stat2 =" 不是在 ";
var msg_wan_stat3 =" 网络";
var msg_wls_chan1 ="SSID不能设置为空";
var msg_wls_chan2 ="Guest SSID can not be set as NULL!\n";
var fw_update ="Firmware更新进行中";
var fw_not_interrupt ="切勿中断路由器运行或拔出路由器的插头，此类操作会导致路由器不能工作";
var show35a ="恢复默认值";
var msg_invalid_char ='发现无效字符。有效字符包括0-9、a-z、A-Z、`~!@#$%^&*()_-+=|\\{}[]:";\',.<>/?';
var vs_null ="描述是空的.";
var msg_invalid_vs_char ='找到不正确字符。正确字符是 0-9, a-z, A-Z, `~!@#$%^&*()_-+=|{}[]:;\',.<>/?';
var msg_invalid_ssid_char ='找到不正确字符。正确字符是 0-9, a-z, A-Z, _+。';
var msg_invalid_domain_char ='不正确的网域名称'+': ~!@#$%^&*()=+{}[]|\":;\\\'?/<>,`';
var msg_invalid_char_1 ='找到不正确字符。正确字符是文字和数字。以下符号不正确`~!@#$%^&*()_+[]{}\\|;:\'"<>/?';
var msg_hostIP_invalid ="主机IP地址不正确。它不是路由器局域网络IP地址";
var msg_dmzIP_blank ="请在启用非军事区前输入IP地址";
var msg_dmzIP ="非军事区IP地址";
ipm='可能您尚未输入所有的DNS号码，或部份您所输入的号码不正确。此号码应介于0到255';
ipmLast='可能您尚未输入所有的DNS号码，或部份您所输入的号码不正确。此号码应介于1到254';
var msg_blank =" 不可能是空白的";
var msg_space ="Blanks or spaces are not allowed in %s\n";
var msg_blank_in ="Blanks are not allowed in %s\n";
var msg_allspaces ="%s cannot consist solely of spaces\n";
var msg_invalid ="Invalid character or characters in %s\nValid characters are: \n%s\n\n";
var msg_check_invalid ="%s contains an invalid number\n";
var msg_valid_range ="%s is invalid. Valid range is %s to %s\n";
var msg_invalid_mac ="不正确MAC地址";
var msg_multi_mac="The MAC address can't be multicast address.\n";
var msg_vs_des="Invalid character : or - is not allowed in description.";
var msg_privateIP_invalid ="LAN IP地址无效";
var msg_dmzIP ="非军事区IP地址";
var msg_confirmDefault ="Warning!\nLoading the Factory Default Settings will erase all the current settings.\nAre you sure you wish to do this?";
var con_noinfo='Choose the connection type that your ISP uses.\nYour ISP provided this information when you signed up with them.';
var con_miss='The field below has been filled in with data we believe to be correct.';
var con_nosure='Please contact your ISP if you are unsure of your connection type.\nBe sure to keep them on the phone until you have all required information for the pages that follow.';

var wiz_noinfo='Enter the following information needed for the connection type you chose on the last screen.  Your ISP provided this information.';
var wiz_miss='Some of the fields below have been filled in with data we believe to be correct.   Please enter any missing information.  Your ISP provided this information.';
var wiz_nosure='Please contact your ISP if you are unsure of the settings below.';
var network_key1='You must input the Network Key!';
var network_key2='The key must be between 8 and 63 characters long and can include spaces and symbols, or 64 Hex (0-F) only.';
var wiz_cd1='Please insert the Troubleshooting CD into the computer and exit this wizard.';
var wiz_cd2='别担心，我们只需要在您的计算机上更正一项特别针对澳洲和纽西兰的设定。光盘上的设定精灵 (Setup Wizard) 备有特别的程序来自动完成这项操作。';
var wiz_cd3='After exiting this wizard and inserting the disk, the Troubleshooting CD-based Setup Wizard should appear on your screen within 15 seconds.';
var wiz_cd4='You must close this browser-based Wizard by clicking on the Exit button below to use <br>the troubleshooting CD.';
var wiz_chk_conn1='Checking internet connection...';
var wiz_chk_conn2='Please wait while the Router verifies your Internet Settings.';
var wiz_chk_isp='您的 ISP 在我们尝试连接时不接受下面显示的设定。请仔细检查，看看是否存在任何错误。';
var wiz_chk_poeisp='Your ISP did not accept the settings set below when we tried to connect. Please<br>examine them closely to see if anything is incorrect.If you are unsure the settings are correct please contact your ISP.';
btn5='上一步';
btn6='路由表';
Multi_PPPoE='以太网上的Multi-PPP';
wcc15='Multi-PPPoE';
wcc16='[只限日本]这种类型的连接是一个独特的功能在日本这是为那些需要谁订阅NTT的宽带互联网。';


var Australia_wz="澳大利亚";
var Austria_wz="奥地利";
var Belgium_wz="比利时";
var China_wz="中国";
var Czech_wz="捷克";
var Denmark_wz="丹麦";
var France_wz="法国";
var Germany_wz="德国";
var Hong_Kong_wz="香港";
var Hungary_wz="匈牙利";
var India_wz="印度";
var Indonesia_wz="印度尼西亚";
var Israel_wz="以色列";
var Italy_wz="意大利";
var Japan_wz="日本";
var Korea_wz="韩国";
var Malaysia_wz="马来西亚";
var Netherlands_wz="荷兰";
var New_Zealand_wz="新西兰";
var Norway_wz="挪威";
var Philippines_wz="菲律宾";
var Portugal_wz="葡萄牙";
var Singapore_wz="新加坡";
var Spain_wz="西班牙";
var Sweden_wz="瑞典";
var Switzerland_wz="瑞士";
var Taiwan_wz="台湾";
var Thailand_wz="泰国";
var UK_wz="英国";
var USA_wz="美国";
var Other_wz="其他";

g10_brief='A dynamic connection type is the most common connection type found with cable modems. Setting the connection type to dynamic in many cases is enough to complete the connection to your ISP. Some dynamic connection types may require a Host Name. You can enter your Host Name in the space provided if you were assigned one. Your Host Name is assigned by your ISP.';
var Finland_wz="Finland"; 
var Poland_wz="Poland"; 

var msg_invalid_IP = "One or more of the IP Addresses you entered is not valid!";
var modem_miss = wiz_miss;
var modem_nosure = wiz_nosure;
var modem_noinfo = 'Please enter the following information. Your ISP provided this information.';
var run_detect1 = 'This modem is detecting VPI/VCI now, please wait......';
var run_detect2 = 'This modem is detecting wan connection type now, please wait......';

run52='Encapsulation';
run19=run52;
run46=wiz_chk_isp;
run48='Modem Settings'; 

info_pppoe = "Most DSL providers use PPPoE as the connection type. If you use a DSL modem to connect to the Internet, your ISP may use PPPoE to log you into the service. If you have an Internet connection in your home or small office that doesn't require a modem, you may also use PPPoE.	<br><br> Your connection type is PPPoE if:<br> 1) Your ISP gave you a user name and password which is required to connect to the Internet.<br> 2) Your ISP gave you software such as WinPOET, Enternet300 that you use to connect to the Internet.<br> 3) You have to double-click on a desktop Icon other than your browser to get on the Internet.<br><br> To set the Router to use PPPoE, type in your User Name and Password in the spaces provided. If you do not have a Service Name or do not know it, leave the Service Name field blank. After you have typed in your information, click \"Apply Changes\". After you apply the changes, the Internet Status indicator will read \"Connected\" if your Router is set up properly.For more details on configuring your Router to use PPPoE, see the user manual.";
info_pppoa = 'Most DSL providers use PPPoA as the connection type. If you use a DSL modem to connect to the Internet, your ISP may use PPPoA to log you into the service. If you have an Internet connection in your home or small office that doesn\'t require a modem, you may also use PPPoA.<br><br>Your connection type is PPPoA if:<br>1) Your ISP gave you a user name and password which is required to connect to the Internet<br>2) Your ISP gave you software that you use to connect to the Internet<br>3) You have to double-click on a desktop Icon other than your browser to get on the Internet<br><br>To set the Router to use PPPoA, type in your User Name and Password in the spaces provided. If you do not have a Service Name or do not know it, leave the Service Name field blank. After you have typed in your information, click "Apply Changes". After you apply the changes, the Internet Status indicator will read "Connected" if your Router is set up properly. For more details on configuring your Router to use PPPoA, see the user manual.';
info_ipoa = g11;
info_dial_up = 'You must be using a modem which is connected to the serial port on your Router.Your dial-up phone number, user name, password, etc. are provided to you by your ISP.If special modem initialization strings are needed for your modem to work properly, this information should be obtained from the modem manufacturer.If your ISP provided you with a specific IP address, then you must enter it in the IP address fields at the bottom of the screen.';

topic_dial_up = 'External Dial-Up';
 
h9_1 = 'DSL stands for Digital Subscriber Line. A DSL modem uses your existing phone lines to transmit data at high speeds.';
h9_2 = 'DSL Modem';
info_dsl_modem = h9_1;
topic_dsl_modem = h9_2;

help_pppoa = '<b>PPPoA</b> Most DSL providers use PPPoA as the connection type. If you use a DSL modem to connect to the Internet, your ISP may use PPPoA to log you into the service. If you have an Internet connection in your home or small office that doesn\'t require a modem, you may also use PPPoA.Your connection type is PPPoA if:1) Your ISP gave you a user name and password which is required to connect to the Internet2) Your ISP gave you software that you use to connect to the Internet3) You have to double-click on a desktop Icon other than your browser to get on the InternetTo set the Router to use PPPoA, type in your User Name and Password in the spaces provided. If you do not have a Service Name or do not know it, leave the Service Name field blank. After you have typed in your information, click "Apply Changes". After you apply the changes, the Internet Status indicator will read "Connected" if your Router is set up properly. For more details on configuring your Router to use PPPoA, see the user manual.';
help_pppoe = '<b>PPPoE</b> Most DSL providers use PPPoE as the connection type. If you use a DSL modem to connect to the Internet, your ISP may use PPPoE to log you into the service. If you have an Internet connection in your home or small office that doesn\'t require a modem, you may also use PPPoE. Your connection type is PPPoE if: 1) Your ISP gave you a user name and password which is required to connect to the Internet. 2) Your ISP gave you software such as WinPOET, Enternet300 that you use to connect to the Internet. 3) You have to double-click on a desktop Icon other than your browser to get on the Internet. To set the Router to use PPPoE, type in your User Name and Password in the spaces provided. If you do not have a Service Name or do not know it, leave the Service Name field blank. After you have typed in your information, click "Apply Changes". After you apply the changes, the Internet Status indicator will read \"Connected\" if your Router is set up properly.For more details on configuring your Router to use PPPoE, see the user manual.';
help_ipoa = '<b>Static IP (IPoA)</b>' + g11;
help_dial_up = '<b>External Dial-Up</b> You must be using a modem which is connected to the serial port on your Router.Your dial-up phone number, user name, password, etc. are provided to you by your ISP.If special modem initialization strings are needed for your modem to work properly, this information should be obtained from the modem manufacturer.If your ISP provided you with a specific IP address, then you must enter it in the IP address fields at the bottom of the screen.';

wb1='WAN > Connection Type > Dynamic/Fixed IP (1483 Bridged)';
wb101='WAN > Connection Type > Static IP(IPoA)';
wb102='WAN > Connection Type > Modem Only (Disable Internet Sharing)';
wb3='IP Assigned by ISP';
wb7='VPI / VCI';
wb9='Auto Detect';
wb11='No';
wb12='LLC';
wb13='VC MUX';
wpevpi1='Please enter VPI';
var msg_vpi='VPI must be a number between 0 and 255!';
wpevci1='Please enter VCI';
var msg_vci='VCI must be a number between 1 and 65535!';
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

var wizard_name = "路由器设置实用程序";
stroute_1 = 'LAN > Static Routing';
showstroute='Static Routing';
stroute3 = 'The routing table is full!';
stroute32 = ' Network Address';
stroute33 = ' '+i11;
stroute34 = ' Gateway';
Remove='Remove';



acl_1 = '家长控制 > 访问控制 ';
help_acl='After enabling Access Control, pressing the "Add" button will open up the "Connected Client List" Screen. This screen lists all the clients list with MAC addresses learned from the router. In the "Connected Client List" screen you can also create a Client you want to control by filling in the blanket MAC address column. You choose one of the clients from the "Connected Client List" by pressing the "Add" button. You will return to Access Control Screen. You can press the "Edit" button under the "Member" column to setup the Acceess Control Rule for each client. '
acl_setting='Internet Access <br> Policy';
acl_2 = 'The Acl table is full';
acl_3 = 'After enabling Access Control, pressing the <b>"Add"</b> button will open up the <b>"Connected Client List"</b> Screen.  This screen lists all the clients list with MAC addresses learned from the router. In the <B>"Connected Client List" </B> screen you can also create a Client you want to control by filling in the blanket MAC address column. You choose one of the clients from the "Connected Client List" by pressing the <b>"Add"</b> button.  You will return to Access Control Screen. You can press the <b>"Edit"</b> button under the <b>"Member"</b> column to setup the Acceess Control Rule for each client.';
acl_4='按“添加”按钮打开“连接的客户端列表”屏幕，其中列出具有从路由器获取的MAC地址的所有客户端。在“连接的客户端列表”屏幕中，用户也可以通过填写空白MAC地址列来创建想要控制的客户端。按下动作列下的“添加”按钮以从“连接的客户端列表”屏幕中选择其中一个客户端后，然后您将返回到“访问控制屏幕”。在此屏幕中，您需要为选择的客户端填写控制规则的信息.';
acl1='成员';
acl2='设备';
acl3='MAC地址';
acl4='状态';
acl5='限制';
acl6='操作';
acl7=' ';
acl8='来自来宾 SSID 的所有设备';
acl9='会员控制规则';
acl10='方案';
acl11='网址';
acl12='网址关键词列表';
acl13='日';
acl14='每天';
acl15='周一';
acl16='周二';
acl17='周三 ';
acl18='周五';
acl19='24 小时';
acl20='从';
acl21='至';
acl22='是否要删除会员';
acl23='已经存在。';
acl24='会员列表中已存在';
acl25='客户端列表中已存在';
acl26='您所输入的端口号码是不正确的';
acl27='登陆密码';
acl28='Landing page';
acl29='访问拒绝.输入路由器密码从而允许临时访问被阻止的网页或服务.';
member_setting='会员列表';
acl_member_setting='Exception of Control Rules for Member';
Allow_All='Allow All';
Deny_All='Deny All';
acl30='可以将路由器配置为限制或允许在特定日期或时间访问网络、电子邮件或其他网络服务。可以为一台计算机、一组计算机或多台计算机设置限制。';

Index='索引';
Services='服务';
Port_Rang_List='端口范围列表';
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
PortService_User_Defined='用户自定义';
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
Block_All_Services='阻止所有的服务';
Allowed_Services='Allowed Services';
Allow_All_Services='Allow All Services';
Blocking_Url='Website Blocking by URL Address ';
Allowing_Url='Website Allowing by URL Address ';
Block_All_URLs='封锁所有网址';
Allow_All_URLs='允许所有网址';
URL_Address='URL 地址';

Keyword='关键词';
Blocking_Keyword='Website Blocking by keyword';
Allowing_Keyword='Website Allowing by keyword';



Connected_Client_List='已连接客户端列表';
var save_reboot_time=30;
var restore_reboot_time=30;
var upgrade_reboot_time=70;
var normal_reboot_time=60;

rdt_msg1='不可执行。';
rdt_msg2='转到首页…';
var disconnect_msg = 'Oops! Your connection to the router has failed.  Please reconnect to the router, click OK and retry.';
show49='访客存取';
wguest1='无线 > 访客存取';
wguest4='访客访问允许通过WAN端口而对互联网进行访问,但是限制访客对LAN或WLAN以及内网的访问。 为了简化使用,该功能只能由2.4GHz的频率支持';
wguest5='类型';
wguest6='Cafe-style(访客通过网页登录)';
wguest7='WPA/WPA2 PSK';
wguest8='WEP';
wguest9='开放式';
wguest10='网络名称SSID';
wguest11='最长32位,无空格';
wguest12='密码 (PSK)';
wguest13='8-63位的字符串';
wguest14='打印访客访问设置';
wguest15='10位的16进制数';
wlguest3='密码长度必须为 8 到 63 个字符。';
wlguest4='WEP密钥必须是10位的16进制数!';
wlguest5='每一个无线网络的访客需要该密码';
wlguest6='安全类型';
wlguest7='如何连接无线网络:';
wlguest8='视窗';
wlguest9='右击Windows系统的无线网络图标，然后从弹出菜单中选择“查看可用的无线网络';
wlguest10='双击该';
wlguest11='会有一个窗口弹出要求输入网络密匙。输入上面的密码然后单击OK';
wlguest12='MAC OS X';
wlguest13='单击菜单栏上的无线网络图标(右上),然后选择该';
wlguest14='会有一个窗口弹出要求输入网络密匙。输入上面的密码然后单击OK';
wlguest15='访客存取功能允许用户访问网络，但限制用户访问家庭网络。请询问网络管理员获取访客存取的密码，并在以下位置进行输入。';
wlguest16='成功！您现在就可打开网页浏览器并上网冲浪。';
wlguest17='密码/PSK';
wipv61='IPv6 > 连接设置';
wipv62='IPv6 直通 >';
wipv63='连接到路由器的设备可以互相交谈，使用原生的IPv6数据包。局域网上的IPv6数据包将被自动发送到所有网络接口（以太网端口和两个2.4 GHz和5 GHz无线网络）。';
wipv64='当直通启用，IPv6数据包也将被复制到广域网接口。 （这将创建一个直接的，非安全连接到互联网。）';
wipv65='他们对IPv6的支持信息，请联系您的ISP。';
wipv66='IPv6';
wipv67='Internet IPv6';
wipv68='您的网络是IPv6兼容的。';
wipv69='直通';

show50='网站过滤';
web_filter1='家长控制/家庭安全 > 网站过滤器';
web_filter2='提供网上保护的第一层,防范不安全和不恰当的网站';
web_filter3='过滤选项';
web_filter4='安全过滤器，让您的家人来浏览互联网时，做出更好的决策。';
web_filter5='阻止恶意/成人/非家庭合适的网站';
web_filter6='阻止恶意/成人网站';
web_filter7='阻止恶意软件网站';
web_filter8='过滤(关闭)';
web_filter9='阻止恶意软件/网上诱骗/诈骗/成人内容/流产/酒精/烟草/犯罪/邪教/毒品/赌博/自杀/仇恨/暴力/家庭非合适的网站';
web_filter10='阻止恶意软件/网上诱骗/诈骗/成人内容网站';
web_filter11='阻止恶意软件/网上诱骗/诈骗网站';
web_filter12='使用您选择DNS的提供商';
web_filter13='要更改您的DNS地址，请继续到互联网的广域网>的 %s DNS %s';
web_filter14="网站过滤器提供安全网络环境给孩子上网浏览.选择三个较容易使用过滤器来选择你的网络的安全级别.";

show51='智能流量控制';
show53='多媒体特性';
mf1='这些页面允许你调整你的路由器的行为与某些类型的媒体流量。';
mf2='为不同类型的流量,自动优化您的网络连接';
mf3='如何使用你的路由器';
mf4='多媒体特性 > 智能流量控制';
mf5='智能流量控制将优先保证高带宽或低延迟的音频，视频和游戏等的在线体验';
mf6='在测试中网络将用瞬间的暂停';
mf7='速率测试:';
mf8='记录 %s';
mf9='Ping';
mf10='下载';
mf11='上载';
mf12='速度';
mf13='Ms';
mf14='Mbps';
mf15='确认';
mf16='测试过程出错';
mf17='手动设置';
mf18='输入数字 {0.1-%s}.';
mf19='启用智能流量控制:';
mf20='仅仅在 {0.1-%s} 之间.';
mf22='完成.';
mf23='当有高速上传时，智能流量控制只能优先保证您的下载速率.';
mf24='当高速下载时，智能流量控制只能优先保证您的上传速率.';
mf25="您的网速很高，您不需要开启智能流量控制.";
mf26='手动记录 %s';
mf27='运行中...';
mf28='开始速率测试';
mf29='为更好的工作，智能流量控制需要知道你的连接速度.';
mf30='智能流量控制被启用.';
mf31='输入（手动）';
mf32='或';
mf33='智能流量控制(停用)';
mf43='Internet connectivity is momentarily suspended during the test.';
mf44='自动速度测试结果未必100％准确，根据互联网流量或其他条件。比较结果，请访问速度测试网站，或您的ISP联系，以确认您的上网速度。如果速度结果不一致，你可以手动输入值。';

show52='流量图';
qos_stats1='多媒体特性 > 流量图';
qos_stats2='以下图表显示的广域网出站和入站流量分成不同的组(优先)。图表显示最后10分钟（每5秒自动更新）。';
qos_stats3='流量图例'; 
qos_stats4='字节/秒';
qos_stats5='日/小时/分钟的时间';
qos_stats6='流量（入）';
qos_stats7='流量（出）';
qos_stats8='网络连接与控制';
qos_stats9='语音/视频/游戏';
qos_stats10='网络/网络视频';
qos_stats11='电子邮件/ VPN';
qos_stats12='下载/BT/其他';
qos_stats13='啟用智能流量控制積極功能 ';
qos_stats14='此';
qos_stats15='.';

new1='优化您的网络连接.';
new2='家长控制/家庭安全';
new3='网站过滤(安全浏览)';
new4='IPv6连接';
new5='您的电脑现在已经兼容IPv6';
new6='新';
new7='网络上的设备之间的共享媒体。';
new8='新';

media_feature1='多媒体特点';
media_feature2='The bandwidth gap between LAN and WAN may significantly degrade performance of critical network applications, such as VoIP, gaming, and VPN. This QoS function allows users to classify traffic of applications and provides them with differentiated services (Diffserv).';
media_dlna1='媒体服务器';
media_dlna2='Media Features > Media Server';
media_dlna3='由Twonky享受通过DLNA设备连接到网络的任何个人的音乐, 照片和视频方便.';
media_dlna4='DLNA服务器';
media_dlna5='服务器名称';
media_dlna6='共享的驱动器:';
media_dlna7='就绪';
media_dlna8='索引';
media_dlna9='服务';
media_dlna10='视频';
media_dlna11='歌曲';
media_dlna12='图片';
media_dlna13='Eject';
media_dlna14='刷新';
media_dlna15='应用设置';
media_dlna16='Twonky是PacketVideo Corporation (PV)家庭软件产品线其数部分芝下.';
media_dlna17='created by PacketVideo Corporation (PV).';
media_dlna18='无标题的';
media_dlna19='没有USB驱动器连接到路由器.';
media_dlna20='不与网络共享的.';
media_dlna21='你有你的路由器可以索引更多的媒体，所以我们第一个12000项服务.';
media_dlna22='不能索引读取驱动器.';


// Note this dictionary is a temporary demonstration
var langDictionary = {

// Copy belkin transation table to here	
'p100t011' : '功能面板',
'p220t001' : '您使用的是PPTP DSL连接。',
'p220t011' : 'PPTP',
'p220t012' : '点点对点隧道协议（PPTP）可在您与您的互联网服务供应商（ISP）之间创建一个私有加密连接。',
'p222t001' : '您的PPTP设置有误。',
'p300t001' : '正在检查固件更新。',
'p300t002' : '正在为您的新路由器检查是否存在已更新的固件',
'p300t003' : '为什么需要最新的固件？',
'p300t004' : '固件是您的路由器用来执行网络和安全协议的软件。更新固件可以提高您的路由器的可靠性与功能性，因此，确保您的固件保持最新大有裨益。',
'gtUpdateNoPower' : '现在使用新的固件对您的路由器进行更新。更新过程中请勿关闭电源。',
'p320t003' : '这一过程需要三分钟左右的时间。更新进度：',
'gtFirmwareRestart' : '固件已安装完毕，路由器将重新启动从而使其生效。',
'p342t003' : '从无线网络列表中重新选择您的无线网络以继续。',
'errorSSIDEmpty' : '请为您的无线网络输入一个名称。',
'errorSSIDTooLong' : '您的网络名称长度必须小于32个字符。',
'errorSSIDInvalidChars' : '您的网络名称只能由字母、数字、标点符号和空格组成。',
'errorWEPPasswordInvalidChars' : '您的网络密码只能由数字和从A到F的字母组成。',
'errorWEPPasswordInvalidLength' : '您的网络密码长度必须为10个或26个字符。',
'errorWEPPasswordEmpty' : '请输入密码以保护您的无线网络。',
'errorWPAPasswordInvalidChars' : '您的网络密码只能由字母、数字、标点符号和空格组成。',
'errorWPAPasswordInvalidLength' : '您的网络密码长度必须为8至63个字符。',
'errorWPAPasswordEmpty' : '请输入密码以保护您的无线网络。',
'errorGenericCommitError' : '出现错误。请更正以下设置后再试一次。',
'p400t006' : '密码：',
'p450t006' : '密码：',
'p451t006' : '密码：',
'p500t007' : '完成注册',
'p500t008' : '稍后注册',
'p700t011' : 'PPPoE DSL连接',
'errIpAddressEmpty' : 'IP地址不能为空。',
'errSubnetMaskEmpty' : '子网掩码不能为空。',
'errSubnetMaskInvalid' : '子网掩码格式不正确。请检查数值。',
'errDefaultGatewayEmpty' : '默认网关地址不能为空。',
'errDNSServerEmpty' : 'DNS服务器地址不能为空。',
'1781' : 'Vuze 离线下载',
'1782' : '清除所有离线下载将清除队列中的所有项目（包括部分完成和已完成的文件）。',
'1783' : '清除所有离线下载',
'7102' : 'Belkin Intellistream可优化高带宽和低延迟服务（如语音、视频和游戏）以提供最佳在线体验。',
'7103' : '为提供更好的服务，Intellistream需要知道您的连接速度。',
'7104' : '测试期间，互联网连通性将被暂时中止。',
'7105' : '测试期间，互联网连通性被暂时中止。',
'7106' : '运行一次网速测试',
'7107' : '网速测试',
'7108' : '手动输入',
'7109' : 'Ping',
'7110' : '下载<br>速度',
'7111' : '上载<br>速度',
'7112' : '运行中……',
'7113' : '已完成。',
'7114' : '测试过程中出现错误。',
'7115' : '输入0.1－100之间的数字。',
'7116' : '输入0.1－1000之间的数字。',
'7117' : '仅允许0.1－100之间的数字。',
'7118' : '有了您的最高上载速度，Intellistream仅能优化您的下载速度。',
'7119' : '有了您的最高下载速度，Intellistream仅能优化您的上载速度。',
'7120' : '高英特网速度条件下，Intellistream无需启动。',
'7121' : '记录于',
'7122' : '手动记录于',
'7123' : '启用Intellistream：',
'7124' : 'Intellistream已启用。',
'7125' : 'Intellistream已禁用。',
'7126' : '手动设置',
'gtBBSTitle' : '欢迎您进入Belkin路由器设置页面！',
'gtBack' : '返回功能面板',
'Support4t036' : '阅读所有相关内容。',
'Support4t037' : '在联网设备中输入以下网址，来了解如何自行解决该问题：<STRONG>www.belkin.com/support/asdlkj</STRONG> ',
'gtReadHelp' : '拉起一个设备连接到互联网，并学会如何解决自己的问题，下面的网址：<STRONG> www.belkin.com /支持/ asdlkj的</strong>',
'Support5t014' : '阅读所有相关内容。',
'p1200t001' : '一个小更安全。',
'p1200t002' : '您可以进一步保护你的路由器带有密码锁的仪表板。',
'errsetempt' : '请输入您的密码。',
'errorpwdEmpty' : '请输入您的密码。',
'errorpwdError' : '您输入的密码不正确。',
'60' : '重复管理员',
'61' : '该设备',
'62' : '目前正由……控制！！',
'gtDisconnected' : '已离线',
'dft005' : 'Belkin帮助中心',
'dhToggleBand' : '显示5.0Ghz',
'419' : '剩余……秒。',
'422' : '成功恢复设置',
'423' : '恢复文件类型不适用于该设备。恢复失败。请获取正确的文件后再试一次。',
'533' : '如果您的路由器出现运行不正常的迹象，可能需要重新启动路由器。重新启动路由器不会删除您的设置。',
'1200' : '正在应用您的更改。请等待……',
'1386' : '升级文件类型或版本不适用于该设备。升级失败。请获取正确的文件后再试一次。',
'2053' : '成功应用更改',
'2054' : '成功更新固件',
'766' : '您输入的子网掩码数字无效。',
'1356' : '无效的网关IP地址，第一个数字应为1至223之间的值。',
'1357' : '无效的网关IP地址，第二个和第三个数字应为0至255之间的值。',
'1358' : '无效的网关IP地址，最后一个数字应为1至254之间的值。',
'1360' : '无效的IP地址，第一个数字应为1至223之间的值。',
'1354' : '无效的IP地址，第二个和第三个数字应为0至255之间的值。',
'675' : '无效的IP地址，最后一个数字应为1至254之间的值。',
'403' : '您输入的IP地址无效',
'760' : 'IP地址',
'1760' : '拒绝全部',
'395' : '或者您未能输入所有数字，或者您输入的数字无效。每一输入框中的数字应为0－255之间的值。',
'1395' : '未配置',
'1281' : '广域网IP地址不能覆盖局域网端子网。',
'641' : '或者您未能输入所有数字，或者您输入的数字无效。数字应为0－255之间的值。',
'errUsernameTooLong' : '您的用户名长度必须小于64个字符。',
'errUsernameInvalid' : '您的用户名只能由字母、数字、标点符号和空格组成。',
'errPasswordEmpty' : '请输入您的密码。',
'errPasswordTooLong' : '您的密码长度必须小于64个字符。',
'errPasswordInvalid' : '您的用户名只能由字母、数字、标点符号和空格组成。',
'1398' : '确定',
'1399' : '取消',
'374' : '开启',
'375' : '关闭',
'47' : '更多信息',
'48' : '清除更改',
'49' : '存档',
'96' : '启用',
'119' : '禁用',
'1298' : '关闭',
'113' : '<< 添加',
'114' : '删除',
'128' : '刷新',
'318' : '已禁用',
'317' : '已启用',
'2006' : '是',
'2007' : '否',
'3300' : '新',
'50' : '更新动态DNS',
'98' : '通过DDNS供应商所设置的帐户，您可以使用动态域名系统（DDNS）访问您的家庭网络。您可以在Dyn.com (<a href=\'http://www.dyn.com\' target=\'_blank\'>www.dyn.com</a>)设定您的帐户，然后在您的路由器上启动DDNS的功能。使用这项服务前，您必须先创建一个帐户。',
'100' : '用户名',
'101' : '密码',
'102' : '域名',
'742' : '请输入您的用户名',
'757' : '请输入您的密码！',
'822' : '无效，请更正！',
'1307' : 'DynDNS',
'1308' : 'DDNS服务',
'1309' : 'DDNS状态',
'1310' : '网站',
'1315' : '自动更新DDNS',
'1316' : '每日',
'1317' : '更新一次',
'1369' : '已注册',
'1380' : '错误的配置',
'1381' : '连接中',
'1382' : '连接失败',
'1383' : '登录失败',
'1384' : '注册失败',
'1385' : '未注册',
'1751' : '提供网络媒体播放器兼容的媒体文件',
'702' : '域名服务（DNS）可将域名转换成IP地址，用于定位全球计算机服务和设备。如果您的Internet服务提供商（ISP）已为您提供DNS地址，请在这里输入。',
'703' : '自动从ISP获取',
'704' : 'DNS地址',
'705' : '辅助DNS地址',
'706' : 'DNS＝域名服务器。将www.belkin.com这样的的URL（统一资源定位符）转换为IP地址的互联网上的服务器。',
'707' : '如果您不使用自动DNS功能，则必须输入由ISP提供的DNS设置。',
'780' : '指定IP地址',
'823' : '要更改DNS，首先访问{网站过滤器}，然后选择“无过滤器”。',
'55' : '固件信息。',
'56' : '无路由器可用的新固件更新！',
'57' : '无法连接到固件信息服务器，请仔细检查广域网连接。',
'58' : '当前固件：',
'59' : '下载固件：',
'64' : '可以配置路由器以在特定日期和时间限制接入互联网、电子邮件或其他网络服务。',
'65' : 'IP地址',
'66' : '端口',
'67' : '类型',
'68' : '阻断时间',
'69' : '日期',
'70' : '时间',
'71' : '启用',
'72' : '两者都',
'73' : '始终',
'74' : '阻断',
'75' : '星期日',
'76' : '星期一',
'77' : '星期二',
'78' : '星期三',
'79' : '星期四',
'80' : '星期五',
'81' : '星期六',
'82' : ':00 P.M.',
'83' : ':00 A.M.',
'84' : '或者您没有输入客户端IP地址，或者，您输入的IP地址的数字无效。IP地址输入框中的数字应为1－254之间的值。',
'85' : '您输入的端口号无效。',
'86' : '端口范围的后一数值必须大于前一数值。',
'87' : 'IP地址范围的后一数值必须大于前一数值。',
'88' : '端口输入框中的数字应为1－65535之间的值。',
'1311' : '未选中任何应用程序。',
'1312' : '检测到重复的输入值。该规则已存在。',
'1355' : '路由器的局域网IP地址应从IP地址范围内排除。',
'90' : '通过DMZ，您可以将指定的网络上的设备置于路由器防火墙之外，而其他设备仍然受防火墙保护。',
'91' : '无法保护DMZ中的计算机免受黑客攻击。',
'92' : '如需将一台计算机添加至DMZ，请在下面的字段中输入其IP地址的最后一位数字，并选择“启用”。单击“存档”来使更改生效。',
'93' : '虚拟DMZ主机的IP地址',
'97' : '静态IP地址',
'95' : '私有IP地址',
'103' : '使启用DMZ之前，请输入IP地址',
'1232' : 'DMZ主机的IP地址无效！',
'1253' : 'IP地址超出[1－254]范围！',
'105' : '通过此功能，您可以建立一个允许客户端列表。当启用此功能时，您必须输入您网络上每一客户端的MAC地址，使得网络能够相互访问。',
'106' : '启用MAC地址过滤',
'107' : 'MAC地址过滤列表',
'108' : '阻断',
'110' : 'MAC地址',
'112' : '该MAC已添加至列表！',
'669' : '无效的MAC地址，这是一个空地址。',
'902' : '无效的MAC地址',
'903' : '请更正！',
'904' : '正确的MAC地址应该是xx:xx:xx:xx:xx:xx，其中x是0－9以及a－f之间的值！',
'1062' : '注意：您无法删除您正在用来访问路由器管理功能的计算机的MAC地址。（您正在使用的计算机）。',
'1602' : '用户自定义1',
'117' : '您的路由器配备有防火墙，能够保护您的网络免受多种常见黑客攻击，其中包括Ping炸弹（PoD）和拒绝服务（DoS）攻击。如有必要，您可以开启防火墙功能。关闭防火墙保护并不会完全使您的网络容易受到黑客攻击，但我们建议您在可能的情况下尽量启用防火墙。',
'118' : '防火墙启用/禁用',
'121' : '<b>高级功能！</b>您可以配置路由器使其对ICMP ping不响应（ping广域网端口）。这样的配置可提高安全水平。',
'1076' : '阻挡ICMP Ping攻击',
'1827' : '打印来宾访问设置',
'2702' : '来宾访问允许通过广域网端口接入互联网，但限制来宾访问内部网络、局域网和无线局域网。为简化使用，该功能仅2.4GHz支持。',
'279' : '入站端口',
'1828' : '餐馆模式（来宾通过网页登录）',
'1619' : 'WPA/WPA2 PSK',
'1829' : 'WEP',
'1830' : '开启',
'1831' : '最大长度为32字符，不能有空格',
'1617' : '密码（PSK）',
'842' : '认证',
'845' : '加密技术',
'854' : '预共享密码（PSK）',
'857' : '隐藏PSK',
'855' : 'WPA-PSK（无服务器）',
'1335' : '网络名称（SSID）',
'1825' : '8－63字符',
'1826' : '10个十六进制数字',
'1834' : '网络名称',
'409' : '密码',
'1835' : '连接至您的无线网络的每一名来宾均需要此密码。',
'1715' : '安全类型',
'1836' : '连接无线网络的方式：',
'1837' : 'Windows',
'1838' : '1. 右键单击Windows系统托盘中的无线网络图标，从弹出的菜单中选择“查看可用的无线网络”。',
'1839' : '2. 双击 ',
'1840' : ' 网络。',
'1841' : '3. 将弹出一个要求输入网络密码的窗口。输入上述密码并单击确定。',
'1842' : 'MAC OS X',
'1843' : '1. 单击菜单栏（右上方）中的无线网络图标，并选择 ',
'1844' : ' 网络。',
'1845' : '2. 将弹出一个要求输入网络密码的窗口。输入上述密码并单击确定。',
'1832' : '餐馆模式',
'1833' : '开放模式',
'1201' : 'SSID不能设置为空！',
'1812' : '密码长度无效。最大密码长度为63个字符，最小密码长度为8个字符。',
'1824' : 'WEP密码必须是10个十六进制数字！',
'414' : '登录错误！！',
'1811' : '来宾访问是一项允许用户访问互联网，但限制接入家庭网络的功能。请向网络管理员询问来宾访问密码，并将其输入在下方。',
'1813' : '成功！您现在可以打开网页浏览器来访问互联网。',
'909' : '“IP地址”为路由器的内部IP地址。如需访问高级设置界面，请在浏览器的地址栏输入该IP地址。可以更改这一IP地址，如有必要。如需更改IP地址，请输入新的IP地址并单击“存档”。您选择的IP地址必须是非路由IP地址。以下是非路由IP的示例：192.168.2.1、10.0.0.1、172.16.0.1。',
'917' : '没有必要更改子网掩码。如有必要，可对子网掩码进行更改。仅在有特别原因时，对子网掩码进行更改。',
'929' : '通过为网络上的每一台计算机分配IP地址，DHCP服务器功能使得建立一个网络变得很容易。如有必要，可将DHCP服务器关闭。关闭DHCP服务器，需要您为网络上的每一台计算机手动设置静态IP地址。IP地址池是为您网络上的计算机动态分配预留的IP地址范围。默认值为2－200（199台计算机），如果您需要更改该数字，您可以输入一个新的起始IP地址和一个新的终止IP地址，并单击“存档”。',
'935' : '您可以为您的网络设置一个本地域名（网络名称）。除非有特定理由，否则没有必要更改此设置。您可以对网络进行任意命名，如“我的网络”。',
'962' : '如需设置路由器使用PPPoE，请在空格处输入您的ISP提供的用户名和密码。如果您没有或不知道服务名称，请将“服务名称”字段留空。当您输入完您的信息之后，请单击“存档”。当您存档之后，如果您的路由器设置正确，状态指示灯将会显示“在线”。',
'967' : '有些ISP(互联网服务提供商)使用PPTP协议连接用户到中央办公室。这就要求您输入您的ISP提供的几个额外的设置。如果更改已保存和过程已成功,互联网状态的指示灯会显示绿色的.',
'971' : '通过单击“存档”来选择Telstra Bigpond连接类型。',
'982' : '……分钟无活动后断开',
'983' : '一段没有网络活动的时间之后，路由器将会从你的ISP（互联网服务提供商）断线.如果您的ISP（互联网服务提供商）服务以分钟计算,使用此選項将节省钱',
'htDDNS' : '什么是DDNS？',
'htDNS' : '什么是DNS？',
'htDMZ' : '什么是DMZ？',
'htLAN' : '局域网设置能控制什么？',
'htWANMain' : '广域网设置是什么？',
'htWANMAC' : '什么是MAC地址？',
'htWAN_PPPOE' : 'PPPoE设置',
'htWAN_PPTP' : 'PPTP设置',
'htIPv6' : '什么是IPv6？',
'htWifiID' : '什么是网络名称和通道设置？',
'htWifiIDContent' : '网络名称称作SSID（服务集标识）。要加入路由器网络，网络上的所有客户端必须知道该SSID。',
'htWifiSec' : '什么是Wi-Fi安全？',
'htWifiSecContent' : '所有Belkin由器均在Wi-Fi安全启用下运行。Wi-Fi安全为防止未经授权访问到您的网络提供了一层保护。当安全功能开启时，用户需要密码才能访问您的网络。',
'htWifiWPS' : '什么是Wi-Fi保护设置？',
'htWifiWPSContent' : 'Wi-Fi保护设置为可选方式，意在便于您在家庭或小型办公室设置启用安全的Wi-Fi网络。通过选择网络名称并输入网络密码，也可将无Wi-Fi保护设置（WPS）的设备添加至您的网络。',
'htWifiGuest' : '来宾访问是如何使用的？',
'htWifiGuestContent' : '当开启时，来宾访问将创建一个单独的Wi-Fi网络，该网络可以访问互联网但不能访问网络上的其他设备。',
'htAP' : '我能否将我的路由器用作接入点？',
'htAPContent' : '可以对Belkin器进行设置，使其禁用所有的路由选择及防火墙功能，仅作为接入点使用。将路由器设置为接入点，是为已有的有线网络添加无线功能的最常用方式。',
'htQos' : '什么是Belkin Intellistream？',
'htDLNA' : '由Twonky提供技术支持的Belkin 媒体服务器',
'htPortForward' : '什么是端口转发？',
'htPortForwardContent' : '端口转发允许远程计算机连接至本地网络上的特定程序或服务。例如，您可以使用端口转发来在您的网络上运行Web服务器（80端口）。大多数现行的应用程序可以自动建立任何所需的端口而无需使用端口转发。',
'htWanPing' : '广域网Ping阻断的作用是什么？',
'htWanPingContent' : '广域网Ping阻断能够提高您的网络安全等级，可防止外部互联网用户找出您的IP地址。广域网Ping阻断通过不对您网络以外的Ping作出响应来达到这一目的。',
'htRestart' : '为什么要重新启动路由器？',
'htRestoreFC' : '恢复出厂默认值会怎么样？',
'htSaveSettings' : '我为什么要保存/备份我的设置？',
'htRestoreSettings' : '恢复我以前的设置是什么意思？',
'htSystem' : '什么是系统设置？',
'htSystemContent' : '通过此页面，您可以对所有基本路由器设置进行设定，包括时区和管理员密码。',
'htSelfHeal' : '什么是自我修复？',
'hLANSettings' : '本页面可帮助您设置新的连接，您可以开启/关闭DHCP，并设置本地网络上的路由器IP地址。',
'htDHCPClientList' : '什么是DHCP客户端列表？',
'htDHCPClientListContent' : '此页显示连接至您的网络上的每一设备的IP地址、主机名和MAC地址。如果计算机未指定主机名，则主机名字段为空。点击“刷新”以更新列表。',
'hWebsiteFilters' : '网站过滤器用作防止不安全/不当网站的保护层。网站过滤器通过将网站名称与经批准的站点列表进行对比对照，来对站点进行选择性屏蔽。',
'hWANSettings' : '这些网络设置是指您的Internet服务提供商（ISP）所提供的连接。从列表中选择您的ISP所提供的连接类型。',
'htChannel' : '与无线电使用不同站点的方式相类似，您的路由器可以在数个不同的频道广播来和您网络上的设备通信。使用“自动”，通常是最佳选择。',
'3430' : 'IPv6 （互联网协议第6版）是一个设计用来替代IPv4的互联网协议（IP），可指示几乎所有的互联网流量。一些互联网服务供应商（ISP）几乎用完了IP地址。通过使用更大的数字来创建IP地址，IPv6可使更多的设备在互联网上通信。您的ISP将告知您是否需要使用IPv6。',
'3431' : '连接类型',
'3432' : '自动配置/DHCPv6（默认）',
'3433' : '以下地址由您的ISP提供。DHCPv6可提供附件功能，以提高连通性。',
'3434' : '广域网',
'3435' : '广域网地址',
'3436' : '网关',
'3437' : '局域网',
'3438' : '本节内容用于配置您的路由器内部网络设置。如果您更改了此处的局域网IPv6地址，您可能需要调整您的计算机网络设置以再次访问网络。',
'3439' : '局域网前缀',
'3440' : '接口ID',
'3441' : '本地链路',
'3442' : 'DNS',
'3443' : '如果在WAN路由器广播或DHCPv6消息可用，您的IPv6 DNS的默认设置来自您的互联网服务供应商（IPS）。',
'3444' : '首选',
'3445' : '备用',
'3446' : 'PPPoE over IPv6',
'3447' : '点对点以太网协议（PPPoE）主要用于DSL服务来将DSL调制解调器连接至互联网。',
'3448' : '登录',
'3450' : '隐藏密码',
'3451' : '用户名',
'3452' : '密码',
'3453' : '服务名称',
'3454' : '6to4隧道',
'3455' : '允许IPv6数据包在IPv4网络上传输，而不需要配置明确的隧道。如果您的互联网服务供应商（ISP）不支持IPv6，则可使用这种连接方式。',
'3456' : '远程6to4中继路由器',
'3457' : '直通',
'3458' : '连接到路由器的设备可以通过原生IPv6数据包互相通信。局域网内的IPv6数据包将自动发送至所有局域网接口（以太网端口以及2.4 GHz和5 GHz无线网络）。',
'3459' : '当启用IPv6直通功能时，IPv6数据包也将被复制至广域网接口。（当该功能启用时，将创建一个与互联网的直接非安全连接。）',
'3460' : '请直接联系您的ISP来了解其对IPv6的支持信息。',
'3461' : '静态IPv6',
'3462' : '静态IPv6由于难以管理而不常使用。连接到多个网络的设备，如笔记本电脑或移动设备，不宜使用静态IPv6。',
'3463' : '仅局域网直通',
'3464' : 'IPv6广域网直通禁用。局域网和WiFi上的所有本地设备仍然可以直接互相通信，但路由器不会从互联网收发任何IPv6数据包，也不会直接响应任何IPv6数据包。',
'3465' : '您的互联网服务供应商未提供IPv6连通性。请联系您的互联网服务供应商来了解其对IPv6的支持信息或建立连通性。',
'3466' : '系统已经为您的设备自动设置仅局域网直通，用于设备之间互相发送IPv6数据包。另一选项为使用“6to4隧道”通过IPv4连接来访问互联网。',
'3467' : '每一输入框中应包含四个十六进制数字（0－9和a－f）。',
'3468' : '请输入一个非多播地址。多播地址一般以ff开头。',
'3469' : '前缀长度应为1－127。前缀长度通常是64、56或48个字符。',
'3470' : '无IPv4连接。',
'3471' : 'DNS设置被您的家长控制重载。',
'3472' : '网站过滤器',
'3473' : '在选择PPPoE over IPv6之前，请通过“Internet广域网＞连接设置”来选择PPPoE。',
'3474' : '网络连接丢失。请检查您的广域网连接类型或联系您的互联网供应商（ISP）。',
'3475' : '您的互联网服务供应商（ISP）提供的默认DNS。',
'gtTryManu' : '如果您知道您的连接类型，您可以进行 ',
'gtSetManual' : '手动设置 ',
'2100' : '访问被拒绝 输入路由器密码来临时允许进入被阻断的网页或服务。',
'2101' : '登录页面',
'2102' : '前往',
'354' : '此页显示连接至您的网络上的每台计算机的IP地址、主机名和MAC地址。如果计算机未指定主机名，则主机名字段为空。按下“刷新”将更新列表。',
'355' : 'IP地址',
'356' : '主机名',
'357' : 'MAC地址',
'370' : '本页面可帮助您设置新的连接，您可以开启/关闭DHCP，并设置本地网络上的路由器IP地址。',
'371' : 'IP地址',
'372' : '子网掩码',
'373' : 'DHCP服务器',
'378' : '通过为网络上的每一台计算机分配IP地址，DHCP服务器功能使得建立一个网络变得很容易。没有必要对此进行任何更改。',
'379' : 'IP地址池起始地址',
'380' : 'IP地址池终止地址',
'381' : '租约时间',
'382' : '永久',
'383' : '半小时',
'384' : '一小时',
'385' : '两小时',
'386' : '半天',
'387' : '一天',
'388' : '两天',
'389' : '一周',
'390' : '两周',
'391' : 'DHCP服务器持续时间内将保留每一台计算机的IP地址。',
'392' : '本地域名',
'393' : '可选',
'394' : '此功能允许您为您的网络制定一个名称。',
'397' : 'IP地址池必须和网关IP处于同一子网',
'398' : '终止IP地址必须大于起始IP地址。',
'399' : '局域网IP地址不能位于DHCP地址池。',
'400' : '您选择的IP地址必须是非路由IP地址。',
'401' : '无效的局域网IP地址，第一个数字不能是127或0。',
'404' : '请将您浏览器状态栏中的IP地址输入框手动更改为新的局域网地址。',
'406' : '您确定要更改局域网IP地址吗？',
'416' : '192.168.y.x（其中，y为0至255之间的任意数字，x为1至254之间的任意数字。）',
'417' : '10.y.y.x（其中，y为0至255之间的任意数字，x为1至254之间的任意数字。）',
'418' : '172.z.y.x（其中，z为16至31之间的任意数字，y为0至255之间的任意数字，x是1至254之间的任意数字。）',
'713' : '无效的本地域名：',
'1228' : 'IP地址池起始地址无效！',
'1229' : 'IP地址池终止地址无效！',
'1240' : '局域网IP地址无效！',
'3' : '登录',
'408' : '在您可以更改任何设置之前，您需要使用密码进行登录。如果您还未设置自定义密码，则将该字段留空，并点击“提交”。',
'410' : '默认＝留空',
'412' : '提交',
'1371' : '密码不正确',
'1372' : '请确认您的密码，然后再试一次。',
'124' : '路由器会保存一份路由器内部所有活动的日志，如计算机登录和注销，以及从互联网访问路由器的所有尝试。',
'125' : '日志文件',
'126' : '存档',
'127' : '清除',
'1302' : '系统日志',
'1303' : '防火墙日志',
'8' : '局域网设置',
'9' : '本地网络设置',
'10' : '已连接的设备',
'2500' : '静态路由',
'11' : 'Internet广域网',
'335' : '连接类型',
'690' : '动态',
'692' : '静态',
'694' : 'PPPoE',
'696' : 'PPTP',
'698' : 'Telstra BigPond/OptusNet电缆',
'42' : 'IPV6',
'43' : 'IPv6连接',
'13' : 'DNS',
'14' : 'MAC地址',
'16' : 'WiFi',
'17' : '网络名称',
'18' : '安全性',
'803' : '128位WEP',
'804' : '64位WEP',
'1296' : 'WPA＋WPA2-Personal（PSK）',
'1297' : 'WPA/WPA2-Enterprise（RADIUS）',
'805' : 'WPA（Radius服务器）',
'1319' : 'Wi-Fi保护设置',
'777' : '用作接入点',
'833' : 'MAC地址控制',
'1613' : '来宾访问',
'1850' : '家长控制',
'1851' : '网站过滤器',
'1710' : '访问控制',
'20' : '媒体',
'7151' : '流量图',
'7000' : '媒体服务器',
'1780' : 'Torrent Mate',
'1790' : '可选软件',
'23' : '防火墙',
'24' : '端口转发',
'25' : '客户端IP地址过滤器',
'26' : 'MAC地址过滤',
'27' : 'DMZ',
'41' : 'DDNS',
'28' : '阻止广域网Ping攻击',
'29' : '安全日志',
'30' : '应用程序',
'32' : '重新启动路由器',
'34' : '恢复出厂设置',
'35' : '保存/备份设置',
'36' : '恢复至以前的设置',
'37' : '固件更新',
'38' : '系统设置',
'39' : '自我修复',
'1900' : '注册',
'132' : '入站端口范围不正确。',
'133' : '私有端口范围不正确。',
'134' : '此功能允许您为外部（Internet）服务提供路由，如Web服务器（端口80）、FTP服务器（端口21）或通过路由器连接至您的内部网络的其他应用程序。',
'276' : '清除条目',
'277' : '添加',
'278' : '描述',
'280' : '类型',
'281' : '私有IP地址',
'282' : '私有端口',
'376' : '所有',
'411' : '清除',
'648' : '无效字符',
'672' : '无效的数字！必须在1……65535之间。',
'905' : '所有条目已满。\n请删除一些条目，然后再试一次。',
'906' : '您要清除该条目吗？',
'907' : '您要清除所有条目吗？',
'1241' : '广域网IP地址无效！',
'1250' : '端口无效！',
'1362' : '描述为空。',
'1601' : '自动',
'2055' : '入站端口范围重复！！',
'2056' : '专用端口范围重复',
'3310' : 'Intellistream',
'3311' : '优化您的互联网连接。',
'3312' : '媒体服务器',
'3313' : '在网络上的设备之间共享媒体。',
'3314' : '家长控制',
'3315' : '互联网安全的DNS安全过滤器',
'3316' : 'IPv6连接',
'3317' : '现在，您的网络已兼容IPv6。',
'1852' : '网站过滤器用作防止不安全/不当网站的保护层。网站过滤器通过将网站名称与经批准的站点列表进行对比对照，来对站点进行选择性屏蔽。',
'1854' : '过滤选项',
'1856' : '无过滤器',
'1858' : '阻断恶意网站',
'1859' : '阻断恶意软件、网络钓鱼和诈骗网站。',
'1860' : '阻断恶意网站和成人网站',
'1861' : '阻断恶意软件、网络钓鱼、诈骗网站和含有色情内容的网站。',
'1862' : '阻断恶意网站、成人网站及其他非家庭友好网站。',
'1863' : '阻断恶意软件、网络钓鱼、诈骗网站以及含有色情材料、成人内容、堕胎、酒精、烟草、犯罪、邪教、吸毒、赌博、仇恨、自杀或暴力内容的网站。',
'1864' : '如需更改您的DNS地址，请通过“Internet广域网>{DNS}”继续',
'7152' : '下面的图表显示了广域网出站和入站流量优先分成不同的类别。图表显示的是最后10分钟的内容（每5秒自动更新一次）。',
'7154' : '流量图',
'7155' : '入站流量',
'7156' : '出站流量',
'7157' : '如需激活此功能，请',
'7158' : '在此处启用Intellistream',
'7159' : '.',
'7160' : '网络连通性与控制',
'7161' : '语音、视频聊天和游戏',
'7162' : '网络与网络视频',
'7163' : '电子邮件和VPN',
'7164' : '下载、torrent文件及其他',
'7170' : '字节/秒',
'7174' : '日期/小时：分钟',
'326' : '本地网络',
'327' : '局域网/无线局域网MAC',
'332' : 'DHCP服务器',
'333' : 'Internet设置',
'334' : '广域网MAC地址',
'337' : '广域网IP地址',
'338' : '默认网关',
'339' : 'DNS地址',
'gtGuestName' : '来宾SSID',
'gtGuestKey' : '来宾密码',
'347' : '您需要登录才可以更改设置。',
'2022' : '仅调制解调器',
'2031' : '连接',
'2032' : '断开',
'2033' : '噪声容限',
'2034' : '下行',
'2035' : '上行',
'2036' : '衰减（dB）',
'2037' : '输出功率（dBm）',
'2038' : '数据传输速率（Kbps）',
'tDashboard' : '欢迎您进入Belkin路由器功能面板！',
'rtFeature' : '特征',
'rtLink' : '路由器链路',
'p1310t001' : '连接详细信息',
'p1310t002' : '重新测试连接',
'p1310t003' : '上一次检查',
'p1310t004' : '下载速度',
'p1310t005' : '上载速度',
'p1000t001' : '已连接的设备',
'p1000t002' : '查看全部',
'2501' : '请输入以下配置参数',
'2502' : '网络地址',
'2503' : '子网掩码',
'2504' : '网关',
'396' : '您输入的子网掩码数字无效。',
'1231' : '网关无效！',
'1361' : '无效的IP地址，第一个数字应为1至254之间的值。',
'1800' : '您输入的IP地址与子网掩码不匹配。',
'Support1t011' : '阅读所有相关内容。',
'Support2t011' : '阅读所有相关内容。',
'Support2t012' : '在联网设备中输入以下网址，来了解如何自行解决该问题：<STRONG>www.belkin.com/support/asdlkj</STRONG>',
'Support3t011' : '阅读所有相关内容。',
'Support3t012' : '在联网设备中输入以下网址，来了解如何自行解决该问题：<STRONG>www.belkin.com/support/asdlkj</STRONG>',
'Support6t036' : '阅读所有相关内容。',
'425' : '恢复出厂默认值会将您的路由器恢复至初始设置。我们建议您在恢复至初始设置之前<a href="ut_save.html">保存/备份您的设置</a>。通过保存您的路由器配置，您可以在设置丢失或更改时对其进行恢复。',
'426' : '警告：所有设置都将丢失！\n您确定要这样做吗？',
'427' : '恢复默认设置将耗时$s秒。在此过程中，请勿关闭路由器的电源。',
'428' : '不会恢复出厂设置。不会丢失任何设置！',
'429' : '还原为默认值',
'301' : '自我修复将每周重新启动您的路由器一次，从而使您的网络更加畅通无阻。',
'302' : '自动初始化我的路由器',
'303' : '设置天',
'304' : '设置时间',
'527' : '通过恢复以前的设置，您可以将您的路由器设置为您此前所保存的任意配置。',
'528' : '重置',
'529' : '输入包含备份设置文件的名称。',
'530' : '您要继续并重置设置吗？',
'531' : '当设置重置后，设备可能在一分钟内无法响应命令。\n\n这是正常现象。在此期间，请勿关闭设备电源。',
'451' : '通过保存您的路由器配置，您可以在设置丢失或更改时对其进行恢复。我们建议您在进行固件更新之前保存您的设置。',
'539' : '存档',
'130' : '或者您未能输入所有IP地址，或者您输入的数字无效。IP地址输入框中的数字应为1－254之间的值。',
'541' : '管理员密码：',
'542' : '路由器无密码运行。如果您出于安全考虑，需要添加密码，您可以在这里设置。',
'543' : '请输入您的当前密码',
'544' : '请输入您的新密码',
'545' : '请确认您的新密码',
'546' : '登录超时',
'547' : '（1－99分钟）',
'548' : '时间和时区：',
'549' : '一月',
'550' : '请设置您的时区。如果您处于夏令时区域，请勾选此复选框。',
'551' : '时区',
'606' : '节约日光时',
'607' : '自动调整节约日光时',
'608' : '远程管理：',
'609' : '高级功能！',
'610' : '通过远程管理，在任何地点您都可以通过互联网来更改您的路由器设置。在您启用此功能之前，',
'611' : '请确保您已经设置了管理员密码。',
'642' : '开启远程管理会增加安全风险。仅在必要时短时间将其开启，当您不使用时将其关闭，并请设置一个密码。',
'612' : '任何IP地址均可对路由器进行远程管理。',
'613' : '只有这一个IP地址可以对路由器进行远程管理。',
'614' : '远程管理启用/禁用',
'615' : '分配端口已用于虚拟服务器。',
'616' : '分配IP地址与当前广域网IP地址冲突。',
'617' : 'UPNP的启用：',
'618' : '允许您开启或关闭路由器的UPnP功能。如果您使用支持UPnP的应用程序，启用UPnP将允许这些应用程序对路由器进行自动配置。',
'619' : 'UPNP启用/禁用',
'620' : '自动更新固件的启用：',
'621' : '允许您自动检查路由器固件更新的可用性。',
'622' : '自动更新固件启用/禁用',
'623' : '当前密码无效。',
'624' : '您两次输入的新密码不匹配。请再试一次。',
'626' : '密码长度无效。最大密码长度为12个字符，最小密码长度为3个字符。',
'628' : '我们强烈建议您设置管理员密码。',
'629' : '主NTP服务器',
'630' : '辅助NTP服务器',
'640' : '远程访问端口',
'738' : '您输入的空闲时间数字无效。该数字必须是1－99之间的一个整数。',
'796' : '启用Turbo模式，可使路由器或接入点使用Frame Burst（帧突发）来获得从路由器或接入点到802.11g客户端的最大的吞吐量。Turbo模式将用于支持Turbo模式的802.11g客户端。使用最新的驱动程序的Belkin802.11g客户端可支持Turbo模式。当启用Turbo模式时，不支持Turbo模式的客户端也能够正常运行。',
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
'1373' : '澳大利亚',
'1374' : '新西兰',
'1375' : '北美地区',
'1376' : '欧洲',
'1377' : '亚太地区',
'2300' : '（GMT－12：00）埃尼威托克，夸贾林',
'2301' : '（GMT－11：00）中途岛，萨摩亚',
'2302' : '（GMT－10：00）夏威夷',
'2303' : '（GMT－09：00）阿拉斯加',
'2304' : '（GMT－08：00）太平洋时间（美国和加拿大）；蒂华纳',
'2305' : '（GMT－07：00）亚利桑那',
'2306' : '（GMT－07：00）山地时间（美国和加拿大）',
'2307' : '（GMT－06：00）中部时间（美国和加拿大）',
'2308' : '（GMT－06：00）墨西哥城',
'2309' : '（GMT－06：00）特古西加尔巴',
'2310' : '（GMT－06：00）萨斯喀彻温省',
'2311' : '（GMT－05：00）波哥大，利马，基多',
'2312' : '（GMT－05：00）东部时间（美国和加拿大）',
'2313' : '（GMT－05：00）印地安那（东）',
'2314' : '（GMT－04：00）大西洋时间（加拿大）',
'2315' : '（GMT－04：00）加拉加斯，拉巴斯',
'2316' : '（GMT－04：00）圣地亚哥',
'2317' : '（GMT－03：00）纽芬兰',
'2318' : '（GMT－03：00）巴西利亚',
'2319' : '（GMT－03：00）布宜诺斯艾利斯，乔治敦',
'2320' : '（GMT－02：00）大西洋中部',
'2321' : '（GMT－01：00）亚速尔群岛，佛得角群岛',
'2322' : '（GMT）卡萨布兰卡，蒙罗维亚',
'2323' : '（GMT）格林威治时间：里斯本，伦敦，爱丁堡',
'2324' : '（GMT）格林威治时间：都柏林',
'2325' : '（GMT＋01：00）阿姆斯特丹，柏林，伯尔尼，罗马',
'2326' : '（GMT＋01：00）斯德哥尔摩，维也纳，贝尔格莱德',
'2327' : '（GMT＋01：00）布拉迪斯拉发，布达佩斯，卢布尔雅那',
'2328' : '（GMT＋01：00）布拉格，布鲁塞尔，哥本哈根，马德里',
'2329' : '（GMT＋01：00）巴黎，萨拉热窝，斯科普里',
'2330' : '（GMT＋01：00）华沙，萨格勒布',
'2331' : '（GMT＋02：00）雅典，伊斯坦布尔，明斯克，维尔纽斯，索非亚',
'2332' : '（GMT＋02：00）布加勒斯特',
'2333' : '(GMT+02:00) Cairo',
'2334' : '（GMT＋02：00）哈拉雷，比勒陀利亚',
'2335' : '（GMT＋02：00）赫尔辛基，里加，塔林',
'2336' : '（GMT＋02：00）以色列',
'2337' : '（GMT＋03：00）巴格达，科威特，利雅得，内罗毕',
'2338' : '（GMT＋03：00）莫斯科，圣彼得堡，伏尔加格勒，喀山',
'2339' : '（GMT＋03：00）德黑兰',
'2340' : '（GMT＋04：00）阿布扎比，马斯喀特，第比利斯',
'2341' : '（GMT＋04：00）喀布尔',
'2342' : '（GMT＋05：00）伊斯兰堡，卡拉奇，叶卡捷琳堡',
'2343' : '（GMT＋05：30）德里',
'2344' : '（GMT＋06：00）阿拉木图，达卡',
'2345' : '（GMT＋07：00）曼谷，河内，雅加达',
'2346' : '（GMT＋08：00）北京，重庆，乌鲁木齐',
'2347' : '（GMT＋08：00），香港，珀斯，新加坡，台北',
'2348' : '（GMT＋09：00）东京，大阪，札幌',
'2349' : '（GMT＋09：00）首尔',
'2350' : '（GMT＋09：30）阿德莱德，达尔文',
'2351' : '（GMT＋10：00）布里斯班',
'2352' : '（GMT＋10：00）堪培拉，墨尔本，悉尼',
'2353' : '（GMT＋10：00）霍巴特',
'2354' : '（GMT＋10：00）关岛，莫尔兹比港',
'2355' : '（GMT＋11：00）马加丹，新喀里多尼亚，Solamon',
'2356' : '（GMT＋12：00）惠灵顿，奥克兰',
'2357' : '（GMT＋12：00）斐济',
'2358' : '（GMT＋13：00）努库阿洛法',
'2370' : '星期日',
'2371' : '星期一',
'2372' : '星期二',
'2373' : '星期三',
'2374' : '星期四',
'2375' : '星期五',
'2376' : '星期六',
'2401' : 'ECO模式',
'2402' : '暗化前面板LED',
'2403' : '禁用……无线网络信号',
'2404' : '……除外',
'2405' : '通过此功能，您可以暗化路由器前端的LED以节省电力。您也可以在预定的时间禁用无线网络信号。',
'2406' : '起始时间不能晚于终止时间！',
'322' : '固件版本',
'431' : 'Belkin 可能会不时推出新版本的路由器操作程序。这些更新包含对您路由器的改善和修复。',
'432' : '<b>注意：</b>在更新至新版本固件之前，请<a href="ut_save.html">备份您的当前设置</a>。',
'433' : '单击此处',
'434' : '前往保存/备份当前设置页面。',
'435' : '检查新固件的版本',
'436' : '检查固件',
'437' : '更新固件',
'438' : '更新',
'439' : '请指定升级文件的位置。您可以输入文件路径和文件名，或者，单击“浏览”以浏览文件的位置。',
'440' : '您确定要继续更新吗？',
'441' : '当升级结束时，路由器可能在一分钟内无法响应命令。这是正常现象。在此时间内，请勿关闭或重新启动路由器。',
'1198' : '固件更新中。',
'534' : '重新启动路由器',
'535' : '您确定要重新启动路由器吗？ 重新启动路由器不会影响您的配置',
'536' : '路由器重新启动至多需要$s秒。在复位完成之前，请勿关闭路由器电源。',
'7001' : '您可以通过连接到网络的任何DLNA设备方便地享受个人音乐、照片和视频。由Twonky提供技术支持。',
'7002' : 'DLNA服务器',
'7003' : '服务器名称',
'7004' : '共享驱动器：',
'7005' : '就绪',
'7006' : '检索中……',
'7007' : '服务：',
'7008' : '视频',
'7009' : '歌曲',
'7010' : '图片',
'7011' : '不在网络共享。',
'7012' : '无连接到路由器的USB驱动器。',
'7016' : '刷新索引',
'7017' : '请为媒体服务器输入友好名称',
'7018' : '不允许的字符',
'7019' : '您的媒体多于路由器可以索引的媒体，因此我们将服务靠前的',
'7020' : '项目。',
'7021' : 'Twonky是PacketVideo公司（PV）出品的一系列数码家庭软件(Twonky is a line of digital home software products created by PacketVideo Corporation (PV))',
'7022' : '无法检索只读驱动器。',
'7023' : 'MB',
'7024' : 'GB',
'7025' : 'TB',
'7026' : '视频',
'7027' : '歌曲',
'7028' : '图片',
'770' : '仅在使用BigPond电缆和OptusNet电缆连接时，使用此选项。',
'771' : '重要：',
'775' : '3）重新连接Belkin路由器上的电源线。',
'776' : '为了确认您已成功连接至互联网，请打开互联网浏览器（如Internet Explorer、Firefox或Safari），并确保您可以浏览网页。',
'731' : '用户名',
'489' : '密码',
'732' : '请重新输入密码',
'756' : '请重新输入您的密码！',
'1379' : '或者您未能输入所有数字，或者您输入的数字无效。IP地址格式应为x.y.y.x（其中，y为0至254之间的任意数字，x为1至255之间的任意数字。）',
'709' : '要输入您的动态IP地址设置，请在下方输入您的信息，并单击“存档”。',
'710' : '主机名',
'711' : '主机名称＝某些互联网服务提供商连接至其系统所需的名称。',
'712' : '更改广域网MAC地址',
'330' : 'IP地址',
'331' : '子网掩码',
'659' : '有效的MUT必须在500至1500之间。',
'730' : '要输入您的PPPoE设置，请在下方输入您的信息，并单击“存档”。',
'733' : '服务名称（可选）',
'734' : 'MTU（500－1500）',
'735' : '除非您的ISP（互联网服务提供商）需要不同的值,请不要更改MTU的设置',
'736' : '……分钟无活动后离线',
'737' : '没有网络活动的时间（分钟）',
'741' : 'MTU值无效',
'2005' : 'ISP分配的IP地址',
'2021' : '单击此处来进入您的DNS设置页面',
'2023' : '不允许使用双引号。',
'2024' : '用户名含有不可接受的字符',
'2025' : '不允许使用反斜杠。',
'2030' : '或者您未能输入默认网关的所有数字，或者您输入的数字无效。数字应为0－255之间的值。',
'2052' : '密码含有不可接受的字符（<、>以及&）',
'691' : '动态连接类型最为常见。如果您使用的是电缆调制解调器，那么您很可能使用动态连接。如果您用的是电缆调制解调器，或者，您不能确定您的连接类型，请使用此连接类型。',
'723' : '包括需要主机名的互联网服务供应商（ISP）和绑定连接至特定MAC地址的互联网服务供应商（ISP）。',
'693' : '静态IP地址连接类型不大常见。仅在您的ISP向您提供了永久不变的IP地址的情况下，使用此选项。',
'724' : '路由器支持连接至分配静态IP地址的ISP。',
'695' : '如果您使用的是DSL调制解调器和/或您的ISP向您提供了用户名和密码，则您的连接类型为PPPoE。请使用此连接类型。',
'725' : '路由器支持需要PPPoE登录进行身份验证的动态连接类型。',
'697' : '有些ISP(互联网服务提供商)使用PPTP协议连接用户到中央办公室。这就要求您输入您的ISP提供的几个额外的设置。如果更改已保存和过程已成功,互联网状态的指示灯会显示绿色的.',
'726' : '用于与需要PPTP连接方法的ISP（互联网服务提供商）。',
'699' : '仅在使用BigPond电缆和OptusNet电缆连接时，使用此选项。',
'728' : '仅适用于澳大利亚用户。路由器支持连接到Telstra BigPond。',
'2019' : '要输入您的调制解调器设置，请在下方输入您的信息，并单击“存档”。',
'tBackToConnectionType' : '返回连接类型',
'759' : '要输入您的静态IP地址设置，请在下方输入您的信息，并单击“存档”。',
'761' : '子网掩码',
'762' : 'ISP网关地址',
'754' : '单击此处来进入您的DNS设置页面',
'715' : '网络上的每一台设备都有一个唯一的硬件地址（MAC地址），用于将其与网络和互联网上的其他设备相区分。有些互联网服务供应商（ISP）要求用户在路由器设置中输入网卡或旧路由器的MAC地址。如果您不能确定，请在安装路由器之前，输入最初连接到调制解调器的计算机的MAC地址。',
'716' : '广域网MAC地址',
'717' : '克隆计算机的MAC地址',
'718' : 'Clone',
'721' : '您需要在“互联网/广域网”选项卡中设置您的路由器来连接到您的互联网服务供应商。只要您为您的ISP的连接类型正确配置了路由器设置，路由器几乎能连接至所有互联网服务供应商的系统。如需通过配置路由器来连接到您的ISP，请在屏幕左侧的“互联网/广域网”选项卡中单击“连接类型”。',
'722' : '支持的连接类型：',
'htWANMainContent' : '选择连接类型：',
'700' : '下一步',
'744' : 'PPTP帐号',
'745' : '密码',
'746' : '请重新输入密码',
'747' : '主机名',
'1770' : 'ISP分配的IP地址',
'1771' : '是',
'1772' : '否',
'1773' : '服务地址',
'750' : '子网掩码',
'778' : '可以对路由器进行配置，使其禁用所有的路由选择及防火墙功能，仅作为接入点使用。如需这样设置，请选择“启用”并输入接入点所需的IP地址。',
'779' : '接入点模式：',
'781' : '指定子网掩码',
'801' : '安全模式',
'806' : '您可以在此处配置无线网络安全/加密设置。应启用安全功能，以保证最大程度的无线网络安全。WPA（无线保护接入）可提供动态的密码变化，构成最佳安全解决方案。在并非所有的设备都支持WPA的无线环境中，应使用WEP（有线等效保密）。',
'377' : '自动',
'487' : '开启',
'488' : '关闭',
'787' : '如需更改路由器的无线设置，请在此更改。单击“存档”来存档设置。',
'788' : '无线频道',
'789' : 'SSID',
'790' : '无线模式',
'794' : '广播SSID',
'797' : '保护模式',
'1300' : '扩展频道',
'1301' : '带宽',
'1304' : '802.11e/WMM QoS',
'852' : '预共享密码的长度应为8到63个字符或64个十六进制字符',
'856' : '带有预共享密码的无线保护接入（WPA）：密码的形式为单词、词组或一系列字母和数字组成的密码。密码长度必须是<b>8</b>到<b>63</b>个字符，可以包含空格和符号，或仅< <b>64</b>个十六进制字符。连接到网络的每一客户端必须使用相同的密码（预共享密码）。',
'115' : '或者您未能输入全部十六进制数字，或者您输入的一些十六进制数字无效。十六进制数字，可以是从0到9的一个数字或从A到F的一个字母。',
'308' : '<b>SPI</b>状态包检测。SPI是由您的HomeConnect家庭网络网关所提供的企业级互联网安全类型。当使用SPI时，网关可作为一个“防火墙”来保护您的网络免受黑客攻击。',
'808' : '注意：',
'809' : '要使用口令自动生成十六进制数字对，请勾选左侧的复选框，并在此输入口令。',
'810' : '口令',
'811' : '生成',
'812' : '请输入口令',
'814' : '密码',
'818' : '（十六进制数字对）',
'296' : '<b>IP地址</b>IP代表互联网协议。IP地址是由句点分隔的四个数字段，用以确定一台独一无二的互联网计算机主机。示例：192.34.45.8。',
'298' : '<b>ISP</b>互联网服务供应商。ISP是为个人和其他企业或组织提供互联网连接的企业。',
'807' : '（13个十六进制数字对）',
'813' : '密码不完整',
'821' : '不完整',
'1190' : '<br>要注册您的动态DNS主机名，请访问http://www.dyn.com<br>',
'1339' : '当WPS启用时，建议使用WPA/WPA2。',
'1363' : '进行中－请等待……',
'1364' : '检测到错误－请再试一次。',
'1365' : '时域重叠错误：请等待60秒再重新启动进程，或者，手动操作您的客户端程序来连接到该网络。',
'1366' : '成功－设备已连接到路由器。',
'1370' : '无效的PIN码！设备PIN码为4个或者8个数字。请检查并重新输入。',
'1620' : '启动－请在2分钟内启动客户端设备的WPS PBC。',
'1621' : '启动－请在2分钟内启动客户端设备的WPS。',
'1622' : '超时－无连接至路由器的客户端。',
'1623' : 'Wi-Fi保护设置消息',
'1393' : 'WPS硬件按钮',
'1320' : 'Wi-Fi保护设置（WPS）是简化Wi-Fi网络安全设置和管理的行业标准方法。您可以使用个人信息号码（PIN）或按钮配置（PBC）方法，轻松安装并连接至使用WPS认证设备的启用WPA的 802.11网络。无WPS功能的旧设备，可以通过传统的手工配置方法添加到网络。',
'1321' : '个人信息号码（PIN）法',
'1322' : '从客户端设备输入PIN码，点击“注册”。然后，在2分钟之内通过无线网络应用程序或WPS应用程序，开启客户端设备上的WPS功能。',
'1323' : '输入客户端设备PIN',
'1324' : '注册',
'1325' : '如果外部访问程序可用，则您也可以在外部访问程序输入路由器PIN。如需更改路由器PIN，请单击“生成新PIN”或单击“还原默认PIN”来将PIN恢复到出厂默认值。',
'1326' : '路由器PIN',
'1327' : '生成新的PIN',
'1328' : '还原默认PIN',
'1329' : '按钮配置（PBC）法',
'1330' : '按住路由器上的PBC按钮并保持3秒，或者，单击“启动PBC”。然后，在2分钟内启用您需要连接到路由器的设备上的PBC。',
'1331' : '启用PBC',
'1332' : '手动配置法',
'1333' : '对于无WPS的客户端设备，请手动对设备的以下设置进行配置：',
'1334' : '无线安全',
'1336' : '网络身份验证',
'1337' : '数据加密',
'1338' : '网络密码（PSK）',
'1340' : '解锁路由器PIN',
'1341' : '由于访问尝试失败次数过多，路由器PIN被禁用。',
'1390' : 'PIN码校验失败！请检查并重新输入。',
'1391' : '无效的PIN码！设备PIN码为8个数字。请检查并重新输入。',
'1392' : '已配置',
'1396' : '请对无线网络安全进行手动配置',
'1397' : '无线网络安全',
'common_err1' : '%s为空。',
'upgrade_err2' : '固件升级由于资源不足而终止。升级失败。\n请在系统处于闲置状态时（无互联网流量），再试一次。',
'upgrade_err3' : '无法上传，请联系管理员。',
'upgrade_err4' : '固件过大，升级失败。',
'upgrade_err5' : '您已经安装了最新的固件。',
'upgrade_err6' : '固件更新似乎已损坏。请重新下载固件文件后再试一次。',
'show10' : 'DHCP客户端列表',
'show54' : '连接设置',
'btn2' : '应用更改',
'cff1' : '成功检查固件',
'PM2' : ':30 PM',
'AM2' : ':30 AM',
'Dimicons' : '暗化图标',
'EcoTo' : 'to',
'fvrm' : '由于远程管理端口与您虚拟服务器的一个入站端口相冲突，请将其禁用。',
'lsipm2' : '无效的局域网IP地址，最后一个数字不能是0或255。',
'lsldnm' : '无效的本地域名：`~!@#$%^&*()_+[]{}\|;:\'"<>/?.,',
'lsipm5' : '您选择的IP地址应该是一个非路由IP。192.168.x.x（其中，x是0和255之间的任意值。）\n10.x.x.x（其中，x是0和255之间的任意值。）\n172.y.x.x （其中y是16和31之间的任意值，x是0和255之间的任意值。）',
'ufy4' : '恢复默认设置将耗时60秒。在此过程中，请勿关闭路由器的电源。',
'ufe11' : '当升级结束时，路由器可能在180秒内无法响应命令。这是正常现象。在此时间内，请勿关闭或重新启动路由器。',
'ur5' : '路由器重新启动至多需要30秒。在复位完成之前，请勿关闭路由器电源。',
'ur6' : '路由器重新启动至多需要60秒。在复位完成之前，请勿关闭路由器电源。',
'usys83' : '新密码和确认新密码字段不匹配。',
'usys83_1' : '密码和确认密码不匹配。',
'usys85_1' : '管理密码长度应在3至12位之间。',
'usys88' : '已达到最大密码长度！',
'usys89' : 'AM',
'usys90' : 'PM',
'usys92' : '远程访问端口号应是1至65535 之间的值。',
'usysipm' : '或者您未能输入所有数字，或者您输入的数字无效。IP地址格式应为x.y.y.x（其中，x为1至253之间的任意数字，y为0至255之间的任意数字，z为1至254之间的任意数字。）',
'self_healing60' : 'Self Healing',
'chkwait' : '检查更新的固件...',
'Europe' : '欧洲',
'Australia' : '澳大利亚和新西兰',
'AsiaPacific' : '亚太地区',
'NorthAmerica' : '北美地区',
'vjs1' : '无效的IP地址，过长。请重新检查！',
'vjs2' : '无效的IP地址，“.”缺失。请重新检查！',
'vjs3' : '无效的IP地址，“.”之间的数字缺失。请重新检查！',
'vjs4' : '无效的IP地址，“.”多余。请重新检查！',
'vjs5' : '无效的IP地址，“.”之间的数字过大。请重新检查！',
'vm1' : '无效字符 ',
'vm2' : ' 在……位置 ',
'vm3' : '必须是 ',
'vjs6' : '无效的年份格式，请输入（例如2002）',
'vm4' : '无效的数字 ',
'vjs8' : '无效，必须在1970……2037之间。',
'vjs9' : '无效的月份格式，请输入（例如：01……12 ）',
'vjs161' : ' 不在范围内 ',
'vjs162' : ' 子网掩码',
'vjs163' : '允许的DHCP范围为 ',
'vjs17' : '您输入了两个不同的密码，请再仔细检查一遍！',
'vjs18' : '请输入启动端口号。',
'vjs19' : '起始端口号应小于终止端口号。',
'vjs23' : '无效的MAC地址，这是一个广播地址。',
'vjs24' : '无效的MAC地址，这是一个空地址。',
'vjs25' : '无效的MAC地址，这是一个多播地址。',
'vjs26' : '无效的起始及终止IP地址，终止IP应大于起始IP。',
'vjs28' : '无效的子网掩码格式。',
'vjs29' : '无效的格式，此处的子网掩码必须是255.255.255.0或255.255.255.128或255.255.255.192或255.255.255.224或255.255.255.240或255.255.255.248或255.255.255.252或255.255.255.254。',
'vjs30' : '无效的IP地址，最后一个数字不能是0或255。',
'vjs31' : '无效的局域网IP地址，第一个数字不能是127。',
'vjs32' : '无效的局域网IP地址，不能是0.0.0.0。',
'vjs33' : '无效的局域网IP地址，必须根据224.0.0.0。',
'vjs42' : '您输入的子网掩码数字无效。',
'vjs45' : '指定IP地址',
'vjs46' : '无效，请更正！',
'wcc2' : '请选择您的连接类型：',
'wcc13' : 'L2TP',
'wcc14' : '有些ISP(互联网服务提供商)使用L2TP协议连接用户到中央办公室。这就要求您输入您的ISP提供的几个额外的设置。如果更改已保存和过程已成功,互联网状态的指示灯会显示绿色的.',
'wds4_1' : '首选DNS地址',
'wds7' : '如果您不使用自动DNS功能，则必须输入由ISP提供的DNS设置。',
'wds8' : '如需更改DNS，请首先访问％s网站过滤器％s，然后选择“无过滤器”。',
'wmc6' : '广域网MAC地址不能与局域网MAC地址相同。请另择一个MAC地址。',
'wdd9 ' : '未选择DDNS服务。\n',
'wdd10' : '未选择DDNS服务，本页中的所有数据都将丢失。是否继续？',
'wm10b' : '用于与需要L2TP连接方法的ISP（互联网服务提供商）。',
'pm' : '您的服务无法验证您输入的密码。请确认您的密码输入正确。',
'wpp17' : 'L2TP帐户',
'wpp18' : 'L2TP密码',
'wpp19' : '请输入您的L2TP帐户。',
'wpp23' : 'IP地址分配',
'wpp24' : '使用静态IP地址',
'wpp25' : '从ISP获取动态IP地址',
'wppa7' : '我的IP地址',
'wppa9' : '连接ID （可选）',
'wppa13' : '请输入您的PPTP帐户。',
'wppa18' : '无效的服务名称。',
'ws2' : '如需输入您的静态IP设置，请在下方输入您的信息，并点击“应用更改”。',
'sm_1' : '您输入的子网掩码无效。',
'ws8' : '请输入/确认屏幕上显示的DNS地址设置。',
'wt2' : '单击“应用更改”将重新启动路由器。在路由器重新启动完成后，您需要进行以下操作：',
'wt3' : '1）拔下电缆调制解调器和Belkin路由器上的电源线。',
'wt4' : '2 ）重新连接电缆调制解调器上的电源线，等待，直到调制解调器上的所有指示灯已停止闪烁。',
'wt5' : '3）重新连接Belkin路由器上的电源线。',
'wt6' : '为了确认您已成功连接至互联网，请打开互联网浏览器（如Internet Explorer、Firefox或Safari），并确保您可以浏览网页。',
'wlad2' : '启用/禁用',
'wlc2' : '如需更改路由器的无线设置，请在此更改。单击“存档”来存档设置。',
'wlcgb' : '802.11b+g',
'wlcg' : '802.11g',
'wlcb' : '802.11b',
'wlc20' : '20MHz',
'wlc22' : '20/40MHz',
'wlcoff' : '关闭',
'wlcngb1' : '802.11b、802.11g 和1x1 802.11n',
'wlcn1' : '1x1 802.11n',
'wlcngb2' : '802.11b、802.11g、802.11n',
'wlcn2' : '802.11n',
'wlcgn' : '802.11g+n',
'wlca' : '802.11a',
'wlcan' : '802.11a和802.11n',
'wlc26' : '隐藏您网络名称将禁用WPS。',
'wlc27' : '更改您的安全类型将禁用WPS。',
'wlc28' : '由于您的<A href=%s><B>无线安全类型</B></A> ，WPS被禁用。',
'wlc29' : '"由于您隐藏了您的网络名称（SSID），WPS被禁用。',
'wlc30' : '由于您隐藏了您的网络名称（SSID）且由于您的<A href=%s><B>无线安全类型</B></A> ，WPS被禁用。',
'wlc31' : '开启WPS将取消隐藏您的网络名称（SSID）。',
'wlc32' : '开启WPS将改变您的安全类型为WPA/WPA2。您当前的网络密码将继续有效。',
'wlc33' : '开启WPS将取消隐藏您的网络名称（SSID）并改变您的安全类型为WPA/WPA2。您当前的网络密码将继续有效。',
'wle3a' : 'WPA-PSK',
'wle3b' : 'WPA2-PSK',
'wle3c' : 'WPA-PSK＋WPA2-PSK',
'wps1' : 'Wi-Fi保护设置（WPS）',
'wps3' : '请对无线网络安全进行配置',
'wps17' : '对于无WPS的客户端设备，请从光盘上运行贝尔安全助手或手动对设备的以下设置进行配置：',
'wps23' : 'WPA＋WPA2-Personal（PSK）',
'wps25' : 'TKIP＋AES',
'wps27' : '网络密码（WEP）：',
'wps28_1' : '空',
'wle11' : '密码1',
'wle12' : '密码2',
'wle13' : '密码3',
'wle14' : '密码4',
'wpskerr2' : '密码长度必须为8至63个字符，可以包括空格和符号，或仅使用64进制（0－F）！',
'wpskerr4' : '您必须输入来宾密码',
'wpskerr7' : '来宾密码必须为8个字符',
'wpskerr8' : '来宾密码必须不同于网络密码。',
'wlguest1' : 'SSID必须不同于来宾SSID。',
'wlguest2' : '来宾SSID必须不同于SSID。',
'rs_crc' : '重置失败 < CRC >',
'rs_long' : '重置失败 <过长>',
'rs_disposition' : '重置失败 <无Content-Disposition（内容配置）>',
'rs_getpid' : '重置失败 <无法获取PID>',
'rs_unmatchpid' : '重置失败 <PID不匹配>',
'msg_ddns3 ' : '域名字段不能为空。\n',
'msg_lan_dhcp1 ' : '从网关请求信息。',
'msg_lan_dhcp2 ' : '更新配置数据库。',
'msg_wan_stat1 ' : 'IP地址 ',
'msg_wan_stat2 ' : ' 不在 ',
'msg_wan_stat3 ' : ' 网络。',
'msg_wls_chan2 ' : '来宾SSID不能设置为空！\n',
'fw_not_interrupt ' : '请勿中断或拔掉路由器，这样做可能会导致路由器无法使用。',
'msg_invalid_char ' : '检测到无效字符。有效字符包括：0－9, a－z, A－Z, `~!@#$%^&*()_-+=|\\{}[]:";\',.<>/?',
'msg_invalid_domain_char ' : '无效的本地域名：~!@#$%^&*()=+{}[]|":;\\\'?/<>,`',
'msg_invalid_char_1 ' : '检测到无效字符。有效字符为字母和数字。以下符号无效： `~!@#$%^&*()_+[]{}\\|;:\'"<>/?.,',
'msg_hostIP_invalid ' : '主机IP地址无效。主机IP地址不能是路由器的局域网IP地址。\n',
'msg_dmzIP ' : 'DMZ IP地址。',
'msg_blank ' : ' 不能为空。\n',
'msg_space ' : '％s不允许留空或存在空格。\n',
'msg_blank_in ' : '％s不允许留空。\n',
'msg_allspaces ' : '％s不能仅包含空格\n',
'msg_invalid ' : '％s中存在无效字符。\n有效字符为：\n%s\n\n',
'msg_check_invalid ' : '％s中包含无效数字\n',
'msg_valid_range ' : '%s无效。有效范围为％s至％s\n',
'msg_invalid_mac ' : '无效的MAC地址。\n',
'msg_multi_mac' : 'MAC地址不能是组播地址。\n',
'msg_confirmDefault ' : '警告！\n载入出厂默认设置将清除所有当前设置。\n您确定要这样做吗？',
'Allowed_Services' : '允许的服务',
'Allowing_Url' : 'URL地址允许的网站 ',
'Allowing_Keyword' : '关键字允许的网站',
'wipv63' : '连接到路由器的设备可以通过原生IPv6数据包互相通信。局域网内的IPv6数据包将自动发送至所有局域网接口（以太网端口以及2.4 GHz和5 GHz无线网络）。',
'wipv64' : '当启用IPv6直通功能时，IPv6数据包也将被复制至广域网接口。（当该功能启用时，将创建一个与互联网的直接非安全连接。）',
'wipv65' : '请直接联系您的ISP来了解其对IPv6的支持信息。',
'wipv67' : '互联网IPv6',
'wipv68' : '您的网络兼容IPv6。',
'wipv69' : '直通',
'mf1' : '此类页面允许您在出现某些类型的媒体流量时调整您的路由器行为。',
'mf2' : '为不同类型的流量自动优化您的网络连接。',
'mf3' : '查看您路由器的使用方式。',
'mf8' : '记录在％s',
'mf10' : '下载',
'mf11' : '上载',
'mf12' : '速度',
'mf15' : '应用设置',
'mf18' : '输入{0.1－%s}之间的数字。',
'mf20' : '仅允许{0.1－%s}之间的数字。',
'mf26' : '手动记录于％s',
'mf32' : '或者',
'mf44' : '受互联网流量或其他条件的影响，自动速度测试结果未必100％准确。为比较结果，请访问速度测试网站，或联系您的ISP以确认您的上网速度。如果速度结果不一致，您可以手动输入这些数值。',
'media_dlna18' : '无标题',
'media_dlna21' : '您的媒体多于路由器可以索引的媒体，因此我们将服务首个12000项。',
'errSubnetMaskInvalid_2' : '子网掩码格式不正确。请检查数值。',
'htWAN_L2TP' : 'L2TP设置',
'htWAN_L2TPContent' : '有些ISP(互联网服务提供商)使用L2TP协议连接用户到中央办公室。这就要求您输入您的ISP提供的几个额外的设置。如果更改已保存和过程已成功,互联网状态的指示灯会显示绿色的.',
'p400t001_error' : '更快的连接。',
'p400t018_error' : '更改名为?',
'p400t019_error' : '当从设备搜索网络时这将会显示.特殊网络名字是比较容易记住和找到.如果您的各种无线设备以前连接到不同的路由器,重用相同的网络名称和密码,无线设备自动连接',
'dhToggleBand2G' : '显示 2.4Ghz',
'772' : '单击“Apply Changes”（应用更改）将重新启动路由器。当路由器成功重新启动，你需要做到以下',
'773' : '1) 从电缆调制解调器和Belkin路由器,拔下电源电缆',
'774' : '2）重新连接调制解调器的电源，等待到所有的调制解调器的灯光已经停止闪烁',
'dft001' : '3) 没有连接',
'dft002' : '如果需要联系技术支持，请使用一个已连接的设备,游览<strong>help.belkin.com</strong>.',
'gtNoSecCard     ' : '请写下您的网络名称和密码作为将来参考。',
'gtFWUpdateMobileError' : '目前无法从移动设备上传固件文件。',
'gtSettingsMobileError' : '目前无法从移动设备上传设置文件。',
'gtMoreFromInternet' : '连接至互联网以查看更多信息',
'gtCantConnect' : '系统无法连接至互联网。',
'p802t004' : '返回设备无线网络菜单',
'p803t004' : '返回设备无线网络菜单',
'PIC-S1t001' : '阻止所有设备',
'gtUnnamedDevice' : '未命名的设备',
'gtIC' : '互联网控制',
'errDefaultGatewayEmpty' : '默认网关地址不能为空。',
'errDefaultGatewayInvalid' : '默认网关地址必须是由句点分隔的四个数字（0－255）组成。请检查数值。',
'errDNSServerEmpty' : 'DNS服务器地址不能为空。',
'errDNSServerInvalid' : 'DNS服务器地址必须是由句点分隔的四个数字（0－255）组成。请检查数值。',
'errIpAddressEmpty' : 'IP地址不能为空。',
'errIpAddressInvalid' : 'IP地址必须是由句点分隔的四个数字（0－255）组成。请检查数值。',
'errorGenericCommitError' : '出现错误。请更正以下设置后再试一次。',
'errorSSIDEmpty' : '请为您的无线网络输入一个名称。',
'errorSSIDInvalidChars' : '您的网络名称只能由字母、数字、标点符号和空格组成。',
'errorSSIDTooLong' : '您的网络名称长度必须小于32个字符。',
'errorWEPPasswordEmpty' : '请输入密码以保护您的无线网络。',
'errorWEPPasswordInvalidChars' : '您的网络密码只能由数字和从A到F的字母组成。',
'errorWEPPasswordInvalidLength' : '您的网络密码长度必须为10个或26个字符。',
'errorWPAPasswordEmpty' : '请输入密码以保护您的无线网络。',
'errorWPAPasswordInvalidChars' : '您的网络密码只能由字母、数字、标点符号和空格组成。',
'errorWPAPasswordInvalidLength' : '您的网络密码长度必须为8－63个字符。',
'errPasswordEmpty' : '请输入您的密码。',
'errPasswordInvalid' : '您的用户名只能由字母、数字、标点符号和空格组成。',
'errPasswordTooLong' : '您的密码长度必须小于64个字符。',
'errServAddressEmpty' : '请输入一个服务地址。',
'errSubnetMaskEmpty' : '子网掩码不能为空。',
'errSubnetMaskInvalid' : '子网掩码必须是由句点分隔的四个数字（0－255）组成。请检查数值。',
'errUsernameInvalid' : '您的用户名只能由字母、数字、标点符号和空格组成。',
'errUsernameTooLong' : '您的用户名长度必须小于64个字符。',
'errVCIInvalid' : '请输入一个0－65535之间的数字。您的ISP将告知您所使用的正确值。',
'errVPIInvalid' : '请输入一个0－255之间的数字。您的ISP将告知您所使用的正确值。',
'p802t003' : '由于某些设置发生了变化，您可能需要重新选择您的无线网络：',
'p802t011' : '由于某些设置发生了变化，您可能需要重新选择您的无线网络：',
'dft003' : '您是否需要帮助？',
'dft004' : '您是否存有疑问或需要支持？我们的在线帮助中心可为您提供24小时在线帮助。<br><a href="http://www.belkin.com/support/" id="dfBelkinHelp">贝尔金帮助中心&rarr;</a>',
'dhChangeSSID' : '更改状态',
'dhPassLabel' : '密码：',
'dhPasswordObscured24' : 't********',
'dhShow' : '显示：',
'dhSSID24' : '{blahblah}',
'dhToggle24' : '2.4 Ghz',
'dhToggle5' : '5.0 Ghz',
'DownSpeed' : '32.6',
'errUsernameEmpty' : '请输入您的用户名。',
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
'gt24PSK' : '密码',
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
'gtGuestKey' : '来宾密钥',
'gt5GMedia' : '您的5GHz频段具有相同的名称，但末尾添加有“.media”。',
'gtGuestName' : '来宾SSID',
'gt5pm' : '5:00 下午',
'gt6am' : '6:00 上午',
'gt6pm' : '6:00 下午',
'gt7am' : '7:00 上午',
'gt7pm' : '7:00 下午',
'gt8am' : '8:00 上午',
'gt8pm' : '8:00 下午',
'gt9am' : '9:00 上午',
'gt9pm' : '9:00 下午',
'gtAccessControl' : '家长互联网控制',
'gtAccessPoint' : '用作接入点',
'gtADSL' : 'ADSL',
'gtAdvSettings' : '高级设置',
'gtAllElseFails' : '如果问题仍未解决，请致电贝尔金支持中心',
'gtAndroidConnect01' : '安卓系统手机和平板电脑',
'gtAndroidConnect02' : '您的设备在设置应用程序中提供了可用无线网络菜单。',
'gtAndroidConnect03' : '打开<strong>设置</strong> 应用程序并选择<strong>无线与网络</strong>。',
'gtAndroidConnect04' : '从中选择<strong>Wi-Fi</strong>来查看可用网络列表。',
'gtAndroidConnect05' : '选择<strong tid="Network24SSID">({替换为2.4 SSID})</strong>。<!-- IF NOT OPEN --> <span tid="gtNotOpen">如询问密码，请输入网络密码。<strong tid="Network24Passkey">({替换为2.4密码})</strong></span> <!-- /IF -->',
'gtAt' : 'at',
'gtAttenuation' : '衰减',
'gtAustralia' : '澳大利亚',
'gtBackToDashboard' : '&larr;返回功能面板',
'gtBelkin' : '贝尔金',
'gtBootLoader' : '引导装入程序',
'gtCantConnect' : '系统无法连接到您的互联网服务供应商（ISP）。',
'gtCantConnectNoResponse' : '系统无法连接到互联网－您的ISP未响应。',
'gtChina' : '中国',
'gtClientList' : '已连接的设备',
'gtClose' : '关闭',
'gtConfig' : '配置',
'gtConfigureRouter' : '配置路由器',
'gtConnDevices' : '已连接的设备',
'gtConnectingToNew' : '连接到您的新网络',
'gtConnectionDet' : '连接详细信息',
'gtConnType' : '连接类型',
'gtContentFiltering' : '网站过滤器',
'gtCopyright' : '版权所有&copy;2012 Belkin，保留所有权利。',
'gtCurrTimezone' : '欧洲/赫尔辛基{使用检测到的贝尔金TZ ID说明替换本取值范围}',
'gtDashboard' : '&larr; 功能面板',
'gtDashTitle' : '贝尔金路由器功能面板',
'gtDataRate' : '数据传输速率',
'gtDDNS' : 'DDNS',
'gtDHCPList' : '已连接的设备',
'gtDHCPServer' : 'DHCP服务器',
'gtDMZ' : 'DMZ',
'gtDNS' : 'DNS',
'gtDown' : '下载',
'gtDownloadSpeed' : '下载速度',
'gtEncap' : '封装：',
'gtFileInstallError' : '文件无法安装－可能是文件类型错误',
'gtFileLoadError' : '文件无法载入－可能是文件类型错误',
'gtFirewall' : '防火墙',
'gtFirmware' : '固件',
'gtFirmwareUpdate' : '固件更新',
'gtFrance' : '法国',
'gtFreshest' : '正在获取最新版本的固件．．．',
'gtFrom' : '从：',
'gtFWUpdate' : '固件更新',
'gtFWUpToDate' : '您的固件现在已更新至最新版本。',
'gtGermany' : '德国',
'gtGuestAccess' : '来宾访问',
'gtGuestNetwork' : '来宾网络',
'gtHomeNetwork' : '家庭网络',
'gtIfYouKnowConnection1' : '如果您知道您的连接类型，您可以进行<a href="700-SelectConnection.htm" id="ISP1a010">手动设置&raquo;</a>',
'gtIfYouKnowConnection2' : '如果您知道您的连接类型，您可以进行<a href="700-SelectConnection.htm" id="ISP2a010">手动设置&raquo;</a>',
'gtIfYouKnowConnection3' : '如果您知道您的连接类型，您可以进行<a href="700-SelectConnection.htm" id="ISP3a010">手动设置&raquo;</a>',
'gtIfYouKnowConnection4' : '如果您知道您的连接类型，您可以进行<a href="700-SelectConnection.htm" id="ISP4a010">手动设置&raquo;</a>',
'gtIfYouKnowConnection4a' : '如果您知道您的连接类型，您可以进行<a href="700-SelectConnection.htm" id="ISP4aa010">手动设置&raquo;</a>',
'gtIfYouKnowConnection5' : '如果您知道您的连接类型，您可以进行<a href="700-SelectConnection.htm" id="ISP5a010">手动设置&raquo;</a>',
'gtIfYouKnowConnection6' : '如果您知道您的连接类型，您可以进行<a href="700-SelectConnection.htm" id="ISP6a010">手动设置&raquo;</a>',
'gtIfYouKnowConnection7' : '如果您知道您的连接类型，您可以进行<a href="700-SelectConnection.htm" id="ISP7a010">手动设置&raquo;</a>',
'gtIntellistream' : 'Intellistream',
'gtInterleavePath' : '交织通道',
'gtInternetSettings' : 'Internet设置',
'gtIOSConnect01' : 'iPhone、iPad以及iPod Touch',
'gtIOSConnect02' : '您的设备在设置应用程序中提供了可用无线网络菜单。',
'gtIOSConnect03' : '打开<strong>设置</strong> 应用程序并选择<strong>Wi-Fi</strong>。',
'gtIOSConnect04' : '从网络列表中选择<strong tid="Network24SSID">{替换为2.4 SSID}</strong>。<!-- IF NOT OPEN --> <span tid="gtNotOpen">如询问密码，请输入网络密码。<strong tid="Network24Passkey">({替换为2.4密码})</strong></span> <!-- /IF -->',
'gtIPv6' : 'IPv6',
'gtIPV6Connection' : 'IPv6连接',
'gtISP' : 'ISP连接类型',
'gtJapan' : '日本',
'gtLANIP' : '局域网IP地址',
'gtLANMAC' : '局域网/无线局域网MAC',
'gtLANSettings' : '局域网设置',
'gtLANSubnet' : '局域网子网掩码',
'gtLLC' : 'LLC',
'gtLoadPrevSettings' : '加载以前的设置',
'gtLocalNetwork' : '本地网络',
'gtLocalSettings' : '本地网络设置',
'gtLocked' : '已锁定',
'gtMACAddress' : 'MAC地址',
'gtMACAddressFiltering' : 'MAC地址过滤',
'gtMacConnect01' : 'Mac OS X',
'gtMacConnect02' : '您计算机菜单栏的右端提供了可用无线网络菜单。',
'gtMacConnect03' : '单击无线电波图标。',
'gtMacConnect04' : '从网络列表中选择<strong tid="Network24SSID">{替换为2.4 SSID}</strong>。<!-- IF NOT OPEN --> <span tid="gtNotOpen">如询问密码，请输入网络密码。<strong tid="Network24Passkey">({替换为2.4密码})</strong></span> <!-- /IF -->',
'gtMaybeLater' : '稍后再询问',
'gtMbitPerSec' : 'Mb/s',
'gtMeaning' : '这是什么意思？',
'gtMedia' : '媒体',
'gtMediaServer' : '媒体服务器',
'gtmidnight' : '午夜',
'gtModel' : '模型',
'gtName' : '名称',
'gtNeedMoreHelp' : '是否需要更多帮助？',
'gtNetName' : '网络名称',
'gtNewFWAvailableModem' : '系统已为您的调制解调器找到新的固件。',
'gtNewFWAvailableRouter' : '已为您的路由器找到新的固件。',
'gtNewFWAvailableRouterAndModem' : '已为您的路由器和调制解调器找到新的固件。',
'gtNext' : '下一步',
'gtNo' : '否',
'gtNoiseMargin' : '噪声容限',
'gtNoMyNet' : '我找不到我的网络',
'gtNoon' : '中午',
'gtNoSecCard' : '请写下您的网络名称和密码作为将来参考。',
'gtNotOpen' : '如询问密码，请输入网络密码<strong tid="Network24Passkey">({替换为2.4密码})</strong>。',
'gtNZ' : '新西兰',
'gtOffline' : '离线',
'gtOnline' : '在线',
'gtOptionalSoftware' : '可选软件',
'gtOptionalSW' : '可选软件',
'gtOptSW' : '可选软件',
'gt-OR-' : '－或者－',
'gtOther' : '．．．',
'gtOutputPower' : '输出功率',
'gtParentalControls' : '家长控制',
'gtPass' : '密码：',
'gtPIC' : '家长互联网控制',
'gtPICOtherTimes' : '在此以外的所有其他时间，该设备将无法访问互联网。',
'gtPleaseCallISP' : '请致电您的互联网服务供应商（ISP）。',
'gtPortForwarding' : '端口转发',
'gtPrint' : '打印',
'gtReadAllAboutIt' : '如需更多帮助：',
'gtReconnectingHell' : '重新连接中．．．',
'gtRegister' : '注册',
'gtRegistration' : '注册',
'gtRestartRouter' : '重新启动路由器',
'gtRestoreDef' : '还原为默认值',
'gtRestoreFactDefault' : '恢复出厂设置',
'gtRestoreFactDefaults' : '恢复出厂设置',
'gtRestoreSettigns' : '重置设置；',
'gtRetest' : '重新测试连接',
'gtRouterDetails' : '路由器详细信息',
'gtRouterInfo' : '路由器信息',
'gtSave' : '保存',
'gtSaveCurrentSettings' : '保存当前设置',
'gtSaved' : '未命名设备已保存',
'gtSaveRestore' : '保存/重置设置',
'gtSaveRestoreSettings' : '保存/重置设置',
'gtSaveSettings' : '保存/备份设置',
'gtSecLog' : '安全日志',
'gtSecurity' : '安全性',
'gtSelectLang' : '选择语言：',
'gtSelfHeal' : '自我修复',
'gtSelfHealing' : '自我修复',
'gtSerialSupport' : '在下一页面中，我们将记录您路由器的序列号，以提供支持。',
'gtShowtime' : '显示时间',
'gtSpeedTestResults' : '上一次检查：一天前3：57 pm',
'gtStaticRouting' : '静态路由',
'gtStatus' : '状态',
'gtSystemSettings' : '系统设置',
'gtTo' : '至：',
'gtTraffStats' : '流量统计',
'gtTryAgain' : '再试一次。',
'gtUnlocked' : '已解锁',
'gtUp' : '上',
'gtUpdate' : '更新',
'gtUpdateNoPowerModem' : '现在使用新的固件对您的调制解调器进行更新。更新过程中请勿关闭电源。',
'gtUpdateNoPowerRouter' : '现在使用新的固件对您的路由器进行更新。更新过程中请勿关闭电源。',
'gtUploadSpeed' : '上载速度',
'gtUSA' : '美国',
'gtUserName' : '用户名：',
'gtUtils' : '应用程序',
'gtVCI' : 'VCI：',
'gtVCMUX' : 'VC/MUX',
'gtVPI' : 'VPI：',
'gtWAN' : '广域网设置',
'gtWANDNS' : 'DNS地址',
'gtWANGateway' : '广域网网关',
'gtWANIP' : '广域网IP地址',
'gtWANMAC' : '广域网MAC地址',
'gtWANPingBlocking' : '广域网Ping阻断',
'gtWANSubnet' : '广域网子网掩码',
'gtWebsiteFilter' : '网站过滤器',
'gtWelcome' : '欢迎',
'gtWiFi' : 'WiFi',
'gtWifiSettings' : '您的WiFi设置已成功更改。',
'gtWinConnect01' : 'Windows 7或8',
'gtWinConnect02' : '您计算机任务栏的右端提供了可用无线网络菜单。',
'gtWinConnect03' : '右击显示信号强度条的图标。',
'gtWinConnect04' : '选择<strong tid="Network24SSID">({替换为2.4 SSID})</strong>。<!-- IF NOT OPEN --> <span tid="gtNotOpen">如询问密码，请输入网络密码。<strong tid="Network24Passkey">({替换为2.4密码})</strong></span> <!-- /IF -->',
'gtWinConnect05' : 'Windows Vista和Windows XP',
'gtWinConnect06' : '您计算机任务栏的右端提供了可用无线网络菜单。',
'gtWinConnect07' : '右击显示带有无线电波的计算机图标（XP系统）或显示两台计算机的图标（Vista系统）。',
'gtWinConnect08' : '从弹出的菜单中选择<strong>查看可用无线网络</strong>（XP系统）或<strong>连接至网络</strong>（Vista系统）。',
'gtWinConnect09' : '选择<strong tid="Network24SSID">({替换为2.4 SSID})</strong>。<!-- IF NOT OPEN --> <span tid="gtNotOpen">如询问密码，请输入网络密码。<strong tid="Network24Passkey">({替换为2.4密码})</strong></span> <!-- /IF -->',
'gtWireless' : '无线',
'gtWiring' : '布线',
'gtWPSShort' : 'WPS',
'gtWPS' : 'Wi-Fi保护设置',
'gtYes' : '是',
'htFWUpdate' : '什么是固件更新？',
'htFWUpdateContent' : '贝尔金公司可能会不时推出新版本的路由器操作程序。这些更新包含对您路由器的改善和修复。<br><br>注意：在更新至新版本固件之前，请备份您的当前设置。',
'htParent' : '什么是网站过滤器？',
'htPIC' : '互联网控制',
'htPICBlocked' : '互联网接入被中止',
'htPICBlockedContent' : '当您准备恢复所有设备的互联网连接时，请恢复访问。',
'htPICContent' : '互联网控制可以让您自定义阻断每一设备接入互联网的时间。',
'htSaveRestore' : '保存、加载或恢复设置是什么意思？',
'htSaveRestoreContent' : '您的路由器可以记住诸如网络名称、密码等设置。这些设置可以保存（作为备份），而后可以重新加载至您的路由器。路由器设置也可以恢复至出厂默认设置。',
'htSaveRestoreContentMobile' : '<br>* 对于iPhone、iPad和iPod Touch，保存和加载设置文件不可用。请使用其他设备，如笔记本电脑，来保存和加载设置文件。',
'ISP1t003' : '告诉您的ISP您的路由器能够获取IP地址，但DNS无法正常工作。',
'ISP1t007' : 'DNS将诸如“Belkin.com”这样的域名转换为计算机用来浏览互联网的数字地址（IP地址）。您的路由器上有一个IP地址，这就是说它已连接到互联网，但DNS无法正常工作，所以您无法上网，这表明您的ISP有误。<span class="nub"></span>',
'ISP2t003' : '告诉您的ISP您的路由器能够获取IP地址，DNS正在运行，但系统无法ping通。',
'ISP2t007' : '我们通过“ping”互联网上的其他计算机来检测是否能够与之通信。DNS将诸如Belkin.com这样的域名转换为计算机用来浏览互联网的数字地址（擨P地址）。您的路由器上有一个IP地址，这就是说它已连接到互联网，且您的ISP提供的DNS正在运行，但系统无法ping通。这表明您的ISP有误。<span class="nub"></span>',
'ISP3t004' : '告诉您的ISP您的用户名和密码被接受，但您仍然无法连接至互联网。',
'ISP3t007' : '我们通过“ping”互联网上的其他计算机来检测是否能够与之通信。您的ISP接受了您的用户名和密码，但系统无法ping通，所以您无法上网。这表明您的ISP有误。<span class="nub"></span>',
'ISP4t003' : '告诉您的ISP经过多次尝试您的用户名和密码仍无法被接受。',
'ISP4t007' : '您的互联网连接需要用户名和密码，但您的ISP不能接受您输入的用户名和密码。您的ISP将确保您输入的信息正确。<span class="nub"></span>',
'ISP5t003' : '告诉您的ISP您选择了动态连接，但无法获取IP地址。',
'ISP5t007' : 'IP地址用于标识互联网上的路由器或其他设备。您的ISP未能给您的路由器分配IP地址，缺少IP地址您无法进行连接。这表明您的ISP有误，或者，您的连接不是动态连接。<span class="nub"></span>',
'ISP6t003' : '告诉您的ISP您选择了静态连接，但无法连接到互联网。',
'ISP6t007' : '当您的ISP分配给您一个或多个特定的IP地址以供使用时，请使用静态连接。<span class="nub"></span>',
'ISP7t003' : '告诉您的ISP您的VPI/VCI设置无法正常运行，您需要其给出正确的数字。',
'ISP7t007' : 'VPI和VCI用于告知您的路由器用于与您的ISP通信的通道。系统无法检测到正确的设置。 <span class="nub"></span>',
'Network24Passkey' : '{替换为2.4密码}',
'Network24SSID' : '{替换为2.4 SSID}',
'p100t002' : '尝试连接至互联网。',
'p100t003' : '您已连接至新路由器，新路由器将与您的互联网服务供应商（ISP）通信。',
'p100t004' : '尝试连接至互联网。',
'p100t005' : '您已连接至新路由器，新路由器将与您的互联网服务供应商（ISP）通信。',
'p100t007' : '检测我的连接',
'p100t008' : '如果您确定您的连接类型，您可以进行<a href="700-SelectConnection.htm" id="p100a009" tid="p100t009">手动设置&raquo;</a>，或直接进入<a href="000-Dashboard.htm" id="p100a010" tid="p100t010">功能面板&raquo;</a>。',
'p100t009' : '手动设置&raquo;',
'p100t010' : '功能面板&raquo;',
'p100t013' : '现在，显示页面&nbsp;',
'p100t024' : '近乎全自动的设置',
'p100t025' : '首先，程序会自动检查您的接线，并检测您的互联网服务供应商（ISP）为您提供的连接类型。需要您进行的操作很少。系统将检测您的路由器软件是否为最新版本。<span class="nub"></span>',
'p1010MRt001' : '与调制解调器通信遇到问题。',
'p1010MRt002' : '可能存在布线问题。',
'p1010MRt003' : '您可以通过以下操作解决此问题：',
'p1010MRt004' : '请确保您的调制解调器－路由器已连接到您的带有互联网连接的电话插口。您的调制调器－路由器上的ADSL端口（顶部灰色端口）与电话插口之间应采用网络电缆连接。',
'p1010MRt005' : '请确保您的调制解调器已开启。调制解调器的电源适配器的两端均应已插在，且调制解调器上的一个或多个指示灯应亮起。',
'p1010MRt006' : '您的调制调器与路由器上的黄色端口之间应该用网络电缆连接。该电缆用于将信号从您的路由器传输到调制解调器，缺少该电缆您将无法上网。',
'p1010MRt007' : '如果上述内容均正常，您可能需要尝试拔下调制解调器的电源来将其重新启动，等待15秒，然后将电源重新插上。如果您的调制解调器带有电池，您可能需要找到调制解调器的复位按钮并按下。',
'p1010MRt008' : '下图就是这些连接成功时的状态：',
'p1010MRt009' : '当您进行检查时，系统将一直等待连接成功。',
'p1010MRt010' : '最常见的布线困难在于调制解调器和路由器之间。对电缆两端进行检查非常重要。电缆的一端应插入您的新路由器上的黄色端口，另一端应连接至调制解调器上的类似端口。不同的调制解调器制造商对端口的标记也不同，您可能会发现该端口上标记有“数据”、“局域网”、“网络”或“以太网”。<span class="nub"></span>',
'p1020t001' : '与您的互联网服务供应商通信遇到问题。',
'p1020t002' : '请重新启动您的调制解调器－路由器。',
'p1020t003' : '未检测到互联网连接，请尝试重新启动您的调制解调器－路由器。',
'p1020t004' : '请关闭您的调制解调器－路由器。这通常需要按下调制解调器－路由器上的开关，或者，简单地将其电源拔下。',
'p1020t005' : '等待15秒。',
'p1020t006' : '启动您的调制解调器－路由器。',
'p1020t007' : '几秒钟后，指示灯会亮起，与您的ISP的连接准备就绪。',
'p1020t008' : '如果该问题一直存在，请联系您的ISP来排除您的帐户故障。',
'p1020t009' : '手动开启和关闭您的调制解调器－路由器，然后程序会自动继续。',
'p1020t010' : '为什么要重新启动调制解调器？',
'p1020t011' : '某些调制解调器在与新的路由器或新接入的计算机通信之前，需要重新启动。而且，如果您的互联网服务供应商出现一点小的问题，调制解调器也可能为意外断开连接。可以检测到您的调制解调器，但没有互联网访问，所以，快速重启可能是最为有效的措施。<span class="nub"></span>',
'p1100t001' : '发现可用的固件更新！',
'p1100t002' : '我们建议您将路由器固件升级为最新，以确保所有功能正常。',
'p1100t003' : '为我展示最新动态',
'p1201t001' : '使用密码锁定功能面板。',
'p1201t002' : '请输入密码来锁定功能面板：',
'p1201t003' : '请输入您的密码。',
'gtSetPassword' : '设置密码',
'p1201t005' : '取消',
'p1210t001' : '功能面板已锁定。',
'p1210t002' : '请输入您的密码：',
'p1210t003' : '请输入您的密码。',
'p1210t004' : '您输入的密码不正确。',
'p1210t005' : '让我进去！',
'p1300t001' : '吸引力较高。',
'p1300t002' : '设置Intellistream，可以让您的互联网连接性能更高。这需要运行一次网速测试。',
'p1300t003' : '安装Intellistream',
'p1300t004' : '稍后再询问',
'p1302t001' : '您的固件已是最新版本。',
'p1316t001' : '更新固件安装失败－请通过点击“检查新固件”再试一次。',
'p1318t001' : '升级文件类型或版本不适用于该设备。升级失败。请获取正确的文件后再试一次。',
'p1333t001' : '您的固件已成功更新。',
'p1400t001' : '充分利用您的USB端口。',
'p1400t002' : '您可以安装一些可选的软件，这将有助于最大程度地利用您路由器上的USB端口。',
'p1400t003' : '向我展示可选软件',
'p1500t001' : '您所在的位置。',
'p1500t002' : '您好像位于<span tid="gtCurrTimezone">欧洲/赫尔辛基{使用检测到的贝尔金TZ ID说明替换本取值范围}</span>时区。是否正确？',
'p1500t003' : '正确。',
'p1500t004' : '让我自己选择。',
'p200t001' : '正在建立连接．．．',
'p200t002' : '现在将对您的路由器的物理连接进行检查。',
'p202At001' : '仍在运行．．．',
'p202At002' : '现在将对您的互联网服务供应商（ISP）的连接类型进行检测。这可能需要几分钟的时间。',
'p202Bt001' : '仍在运行．．．',
'p202Bt002' : '正在检查您的互联网服务供应商（ISP）是否需要密码。这可能需要几分钟的时间。',
'p202Ct001' : '仍在运行．．．',
'p202Ct002' : '现在将对连接进行测试。',
'p202t001' : '正在建立连接．．．',
'p202t002' : '现在将对您的互联网服务供应商（ISP）的连接类型进行检测。',
'p208t001' : '您知道VPI/VCI值吗？',
'p208t002' : '您需要输入VPI和VCI值方可联网。这些值用于确定您的ISP需要您使用的通信通路。',
'p208t003' : '您的互联网服务供应商（ISP）应该已向您提供了这些值。如果您找不到这些值，请致电您的ISP。',
'p208t006' : '',
'p208t007' : '',
'p208t009' : '尝试连接',
'p208t011' : 'VPI和VCI',
'p208t012' : 'VPI（虚拟通道标识符）和VCI（虚拟电路标识符）用于告知您的路由器用于与您的ISP通信的通道。在要求您的帮助之前，系统会自动尝试若干常见的设置。<span class="nub"></span>',
'p209t001' : '设置有误。',
'p209t002' : '您的ISP无法使用该VPI/VCI值。是否重新更换一次？',
'p210CXt001' : '您使用的是PPPoE连接。',
'p210CXt002' : '您需要用户名和密码才能访问互联网。',
'p210CXt004' : '<strong>您的互联网服务供应商（ISP）应该已向您提供了该信息。如果您找不到该信息，请联系您的ISP。</strong>',
'p210CXt006' : '',
'p210CXt007' : '',
'p210CXt016' : '尝试连接',
'p210CXt017' : 'PPPoE',
'p210CXt018' : '点对点以太网协议（PPPoE）可以在您的路由器和ISP之间创建一个安全连接。电话公司通常使用该协议。<span class="nub"></span>',
'p210DXt001' : '您使用的是PPPoA连接。',
'p210DXt002' : '您需要用户名和密码才能访问互联网。',
'p210DXt004' : '<strong>您的互联网服务供应商（ISP）应该已向您提供了该信息。如果您找不到该信息，请联系您的ISP。</strong>',
'p210DXt006' : '',
'p210DXt007' : '',
'p210DXt016' : '尝试连接',
'p210DXt017' : 'PPPoA',
'p210DXt018' : '异步传输模式点对点以协议（PPPoA）可以在您的路由器和ATM之间创建一个安全连接。电话公司通常使用该协议。<span class="nub"></span>',
'p210t001' : '您使用的是PPPoE DSL连接。',
'p210t002' : '您需要用户名和密码才能访问互联网。',
'p210t003' : '<strong>您的互联网服务供应商（ISP）应该已向您提供了该信息。如果您找不到该信息，请联系您的ISP。</strong>',
'p210t005' : 'ISP用户名：',
'p210t009' : '尝试连接',
'p210t010' : 'PPPoE',
'p210t011' : '点对点以太网协议（PPPoE）可以在您的路由器和ISP之间创建一个安全连接。电话公司通常使用该协议。<span class="nub"></span>',
'p211t001' : '正在建立连接．．．',
'p211t002' : '正在尝试连接到您的互联网服务供应商（ISP）。这可能需要花费2分钟或更长时间。',
'p212DXt001' : '您的PPPoA设置错误。',
'p212DXt002' : '您的用户名或密码错误，或者，二者均不正确。请再试一次。如果您无法找到正确的信息，请联系您的ISP。',
'p212t001' : '您的PPPoE设置错误。',
'p212t002' : '您的用户名或密码错误，或者，二者均不正确。请再试一次。如果您无法找到正确的信息，请联系您的ISP。',
'p220t002' : '要完成连接并访问互联网，请输入您的用户名、密码和服务地址。',
'p220t003' : '<strong>您的互联网服务供应商（ISP）应该已向您提供了该信息。如果您找不到该信息，请联系您的ISP。</strong>',
'p220t006' : 'ISP用户名：',
'p220t007' : '服务地址：',
'p220t010' : '尝试连接',
'p220t013' : '您使用的是L2TP或PPTP连接。',
'p220t014' : '或者手动选择“我的连接”&raquo;',
'p220t015' : 'L2TP和PPTP',
'p220t016' : '第2层隧道协议（L2TP）和点点对点隧道协议（PPTP）均可用于创建您与您的ISP之间的私密安全连接。<span class="nub"></span>',
'p221t001' : '正在建立连接．．．',
'p221t002' : '正在尝试连接到您的互联网服务供应商（ISP）。这可能需要花费2分钟的时间。',
'p222t002' : '您的用户名或密码错误，或者，二者均不正确。请再试一次。如果您无法找到正确的信息，请联系您的ISP。',
'p222t004' : '您的设置有误。',
'p2300t001' : '您安装的固件版本：',
'p2300t002' : '从本地保存文件更新固件：',
'p2300t006' : '您确定要安装{{file}}吗？',
'p2300t010' : '检查新固件',
'p2400t006' : '您的当前设置将被替换。您确定要加载{{file}}吗？',
'p2410t001' : '您确定要恢复出厂默认值吗？',
'p2410t002' : '点击“是”将删除你的路由器设置（如用户名和密码），并将其替换为出厂默认值。',
'p300t005' : '您现在处于在线状态。',
'p310t001' : '发现可用的更新！',
'p310t001x' : '该更新（v2.1.0c）包括：',
'p310t002' : '如需安装新的固件，请阅读并接受本许可协议。',
'p310t003' : '许可协议',
'p310t004' : '我接受该许可协议。',
'p310t005' : '安装更新',
'p310t006' : '什么是固件？',
'p310t007' : '固件是在您的路由器上运行的软件。更新固件旨在提高您的路由器性能，因此，确保您的固件保持最新大有裨益。<span class="nub"></span>',
'p315t001' : '下载新的固件。',
'p315t002' : '下载进度：',
'p315t003' : '什么是固件？',
'p315t004' : '固件是在您的路由器上运行的软件。更新固件旨在提高您的路由器性能，因此，确保您的固件保持最新大有裨益。<span class="nub"></span>',
'p320t001' : '正在安装新的固件。',
'p320t002' : '当新的固件得以应用时，将重新启动您的路由器来完成安装。',
'p320t004' : '什么是固件？',
'p320t005' : '固件是在您的路由器上运行的软件。更新固件旨在提高您的路由器性能，因此，确保您的固件保持最新大有裨益。<span class="nub"></span>',
'p320t006' : '这一过程需要三分钟左右的时间。更新进度：',
'p320t010' : '当新的固件得以应用时，将重新启动您的调制解调器来完成安装。',
'p321t001' : '重新启动您的路由器',
'p321t002' : '重新启动您的调制解调器',
'p321t003' : '固件已安装完毕，路由器将重新启动从而使其生效。',
'p321t004' : '重新启动：',
'p321t005' : '固件更新',
'p321t006' : '固件是用来执行网络和安全协议的软件。更新固件可以提高您的路由器的可靠性与功能性，因此，确保您的固件保持最新大有裨益。<span class="nub"></span>',
'p321t010' : '固件已安装完毕，调制解调器将重新启动从而使其生效。',
'p330t001' : '检测您的连接速度．．．',
'p330t002' : '执行快速速度测试可帮助您的路由器优化Internet连接。这一过程需要一两分钟的时间。',
'p331t001' : '您的固件已是最新版本。',
'p332t001' : '以后再尝试固件更新。',
'p333t001' : '您的固件已经更新。',
'p334t001' : '您的网速测试结果！',
'p334t002' : '此处显示有：',
'p334t003' : '下载速度',
'p334t004' : 'Mb/s',
'p334t005' : '上载速度',
'p334t006' : 'Mb/s',
'p340t002' : '正在重新连接您的路由器以继续。',
'p341t001' : '请重新启动您的路由器。',
'p341t002' : '重新连接您的路由器遇到问题。快速重启可能会奏效。',
'p341t003' : '请拔掉您的路由器电源，等待几秒钟，然后重新插上。当您的路由器上的蓝灯持续亮起时，连接准备就绪。',
'p341t003w' : '请拔掉您的路由器电源，等待几秒钟，然后重新插上。当您的路由器上的蓝灯持续亮起时，连接准备就绪。',
'p341t004' : '当您进行上述操作时，系统将等待路由器恢复正常。',
'p342t001' : '正在重新连接您的路由器以继续。',
'p342t002' : '您可能需要从无线网络列表中重新选择您的无线网络<span tid="Network24SSID">({替换为2.4 SSID})</span>以继续。',
'p343t002' : '正在重新连接您的路由器以继续。',
'p343t003' : '您可能需要重新选择您的无线网络<span tid="Network24SSID">({替换为2.4 SSID})</span>以继续。',
'p344t001' : '请重新启动您的路由器。',
'p344t002' : '重新连接您的路由器遇到问题。快速重启可能会奏效。',
'p344t003' : '请拔掉您的路由器电源，等待15秒，然后重新插上。当您的路由器上的蓝灯持续亮起时，系统将进行重新连接。',
'p344t003w' : '请拔掉您的路由器电源，等待15秒，然后重新插上。当您的路由器上的蓝灯持续亮起时，系统将进行重新连接。',
'p344t004' : '当您进行上述操作时，系统将等待路由器恢复正常。',
'p400f010' : 'WPA2',
'p400f011' : 'WPA/WPA2',
'p400f012' : 'WEP',
'p400f013' : '开启',
'p400t001' : '更为快速地连接所有设备。',
'p400t002' : '为您的新路由器设置与旧路由器相同的网络名称和密码，可使您的所有设备立即连接上。',
'p400t004' : '网络名称：',
'p400t008' : '安全类型：<em class="hide-on-phones">（WPA2最为安全。）</em>',
'p400t014' : '你的5GHz频段将具有相同的名称，但末尾添加有".media"。',
'p400t015' : '稍后您可以自行更改。',
'p400t017' : '保存并继续',
'p400t018' : '我为什么要重命名我的网络？',
'p400t019' : '如果您使用相同的网络名称和密码，所有先前连接到您的旧路由器上的无线设备，均会自动连接至新的路由器。此外，当您在设备上搜索您的网络时，也便于您找到独一无二的名称。<span class="nub"></span>',
'p450a009' : '太好了！下一步是什么？',
'p450t001' : '您的更改已保存。',
'p450t002' : '以下是您的新网络名称和密码。',
'p450t003' : '如果你已经使用了旧的网络名称和密码，则您现有的无线上网设备现在将重新连接。',
'p450t004' : '名称：',
'p450t008' : '您的路由器底部自带了一张纸，用于记录您的新网络名称。这样做是便于您随时查看您的新网络名称。',
'p450t011' : '如果您使用此前的网络名称和密码，则您的大多数无线设备将在您下一次将其启动时自动重新连接。对于其他无线设备，则需要您为其重新选择网络后方可自动连接。您的《快速安装指南》中带有Windows、OS X、IOS以及Android操作系统的说明。<span class="nub"></span>',
'p451a009' : '太好了！下一步是什么？',
'p451t001' : '无更改。',
'p451t002' : '您的网络名称和密码未进行更改。',
'p451t003' : '您需要为您所有的无线设备上提供您的网络名称和密码：',
'p451t004' : '名称：',
'p451t008' : '您的路由器底部自带了一张纸，用于记录您的新网络名称。这样做是便于您随时查看您的新网络名称。',
'p451t011' : '您需要在您的每一无线设备上输入您的网络名称。您的《快速安装指南》中带有Windows、OS X、IOS以及Android操作系统的说明。<span class="nub"></span>',
'p500t001' : '注册您的路由器。',
'p500t002' : '注册很快速且可以节省大量的时间，注册后您可以随时获得所需的客户支持。',
'p500t004' : '为什么要注册？',
'p500t005' : '对您有所了解可以让我们在您需要的时候更为迅速地为您提供帮助。<span class="nub"></span>',
'p500tCancel' : '稍后注册&raquo;',
'p500tSubmit' : '完成注册',
'p600t001' : '您可以访问路由器的可选软件页面，来为您的其他计算机和移动设备检索类似软件。',
'p600t002' : '谢谢，不必了。请返回功能面板。',
'p600t003' : '可选软件',
'p600t004' : '这些软件工具可以帮助您利用您的路由器所提供的先进功能。我们提供了苹果iOS、Android、Windows以及OS X版本的软件可供您下载。<span class="nub"></span>',
'p601t001' : '<strong>感谢您的注册！</strong>',
'p700MRt001' : '系统无法自动为您设置连接。请告知我们更多一些信息，以便能够为您连接。',
'p700MRt002' : '您所要设置的连接是什么类型？',
'p700MRt003' : '我的连接是：',
'p700MRt005' : '动态连接（1483桥接）',
'p700MRt007' : 'PPPoE 连接',
'p700MRt009' : 'PPPoA 连接',
'p700MRt011' : '静态连接（IPoA）',
'p700MRt014' : '我不能确定我的连接类型：',
'p700MRt016' : '自动再试一次。',
'p700MRt017' : '连接类型',
'p700MRt018' : '<span class="black">动态连接—</span>此类连接越来越多地用于一些DSL供应商。',
'p700MRt019' : '<span class="black">PPPoE及PPoA连接—</span>此类连接需要由ISP提供的用户名和密码。',
'p700MRt021' : '<span class="black">静态连接—</span>此类连接要求每一用户采用唯一的自定义参数。<span class="nub"></span>',
'p700t001' : '系统无法自动为您设置连接。请告知我们更多一些信息，以便能够为您连接。',
'p700t002' : '您所要设置的连接是什么类型？',
'p700t003' : '我的连接是：',
'p700t005' : '动态连接',
'p700t007' : 'PPPoE 连接',
'p700t008' : 'L2TP或PPTP连接',
'p700t013' : '静态设置',
'p700t014' : '我不能确定我的连接类型：',
'p700t914' : '如果您仍然无法确定您的连接类型，请联系您的互联网服务供应商（ISP）。',
'p700t016' : '自动再试一次。',
'p700t017' : '连接类型',
'p700t018' : '<span class="black">动态连接—</span>常用于大多数电缆和光纤互联网服务供应商和一些DSL供应商。',
'p700t019' : '<span class="black">PPPoE及PPTP连接—</span>需要由ISP提供用户名和密码。',
'p700t021' : '<span class="black">静态连接—</SPAN>要求每一用户采用唯一的自定义参数。<span class="nub"></span>',
'p701MRt001' : '您已选择了动态连接。',
'p701MRt002' : '您的互联网服务供应商（ISP）应该已向您提供了附加配置设置。',
'p701MRt004' : '动态设置：',
'p701MRt006' : '',
'p701MRt007' : '',
'p701MRt016' : '尝试连接',
'p701MRt017' : '动态连接',
'p701MRt018' : '动态连接将在建立与ISP的通信之后自动配置。<span class="nub"></span>',
'p701t001' : '正在建立动态连接．．．',
'p701t002' : '系统正在向您的互联网服务供应商（ISP）请求连接。',
'p702t001' : '正在重新启动调制解调器．．．',
'p702t002' : '系统已准备好重新启动您的调制解调器来尝试不同的连接类型。',
'p710MRt001' : '您已选择了静态连接。',
'p710MRt002' : '您的互联网服务供应商（ISP）应向您提供静态连接设置参数。如果您找不到该信息，请联系您的ISP。',
'p710MRt004' : '静态链接设置：',
'p710MRt005' : 'IP地址：',
'p710MRt006' : '',
'p710MRt007' : '子网掩码：',
'p710MRt008' : '',
'p710MRt009' : '默认网关：',
'p710MRt010' : '',
'p710MRt011' : 'DNS服务器（首选）：',
'p710MRt012' : '',
'p710MRt013' : 'DNS服务器（备用）：',
'p710MRt014' : '',
'p710MRt015' : '注：并非所有ISP都需要备用DNS服务器。',
'p710MRt016' : '尝试我的静态链接',
'p710MRt017' : '静态连接',
'p710MRt018' : '静态连接需要手动配置，但可为您的路由器提供一个恒定的地址，从而更便于您在您的网络之外进行访问。静态连接不常用于居民互联网服务，且一般费用更高。<span class="nub"></span>',
'p710t001' : '您已选择了静态连接。',
'p710t002' : '您的互联网服务供应商（ISP）应向您提供静态连接设置参数。如果您找不到该信息，请联系您的ISP。',
'p710t004' : '静态链接设置：',
'p710t005' : 'IP地址：',
'p710t006' : '',
'p710t007' : '子网掩码：',
'p710t008' : '',
'p710t009' : '默认网关：',
'p710t010' : '',
'p710t011' : 'DNS服务器（首选）：',
'p710t012' : '',
'p710t013' : 'DNS服务器（备用）：',
'p710t014' : '',
'p710t015' : '注：并非所有ISP都需要备用DNS服务器。',
'p710t016' : '尝试我的静态链接',
'p710t017' : '静态连接',
'p710t018' : '静态连接需要手动配置，但可为您的路由器提供一个恒定的地址，从而更便于您在您的网络之外进行访问。静态连接不常用于居民互联网服务，且一般费用更高。<span class="nub"></span>',
'p711t001' : '正在建立静态连接．．．',
'p711t002' : '系统正在向您的互联网服务供应商（ISP）请求连接。',
'p712t001' : '您的静态链接设置有误。',
'p712t002' : '您所输入的地址或其他项目中的一个不正确，但系统无法辨别是哪一个。',
'p800t001' : '应用您的更改。',
'p800t002' : '系统正在应用您的更改，并重启路由器使其生效。',
'p801t002' : '系统正等待路由器重新连接。当路由器重新连接成功后将继续。',
'p802t002' : '需要路由器的无线连接以继续。',
'p802t004' : '返回设备无线网络菜单',
'p802t005' : '选择您的新网络，名为<strong tid="Network24SSID">({替换为2.4 SSID})</strong>',
'p802t007' : '输入您的密码，<strong tid="Network24Passkey">({替换为2.4 密码})</strong>',
'p802t009' : '在您连接到路由器之后继续。',
'p802t010' : '系统正等待路由器重新连接。',
'p803t002' : '需要路由器的无线连接以继续。',
'p803t003' : '由于您更改了您的网络名称，您可能需要重新选择您的无线网络：',
'p803t004' : '返回设备无线网络菜单',
'p803t005' : '选择您的新网络，名为<strong tid="Network24SSID">({替换为2.4 SSID})</strong>',
'p803t007' : '输入您的密码，<strong tid="Network24Passkey">({替换为2.4 密码})</strong>',
'p803t009' : '在您连接到路由器之后继续。',
'p803t010' : '系统正等待路由器重新连接。',
'p804t001' : '您的设备未能重新连接。',
'p804t002' : '这种情况有时会发生，且易于修复。',
'p804t025' : '如果您周围有联网的设备，请访问以下网址来获取帮助信息：<strong>http://belk.in/PMuxOg</strong>',
'p804t026' : '如果这样做不起作用，请在您的调制解调器和计算机之间直接插入以太网电缆。',
'p804t027' : '当连接成功后，系统将自动继续。',
'p900t001' : '请重新启动您的调制解调器。',
'p900t002' : '您的调制解调器无法通信。',
'p900t003' : '请执行以下步骤来重新启动您的调制解调器。',
'p900t004' : '请关闭您的调制解调器。这通常需要按下调制解调器上的开关，或者，简单地将其电源拔下。有些调制解调器带有电池，在这种情况下，您需要找到调制解调器上的复位按钮。',
'p900t005' : '等待15秒。',
'p900t006' : '启动您的调制解调器。',
'p900t007' : '几秒钟后，指示灯会亮起，与路由器通信准备就绪。',
'p900t008' : '手动开启和关闭您的调制解调器，然后程序会自动继续。',
'p900t009' : '为什么要重新启动调制解调器？',
'p900t010' : '某些调制解调器在与新的路由器或新接入的计算机通信之前，需要重新启动。可以检测到您的调制解调器，但未能与您的新路由器通信，所以，快速重启可能是最为有效的措施。<span class="nub"></span>',
'p901t001' : '现在，请重新启动您的调制解调器．．．',
'p901t002' : '调制解调器关闭后再开启期间，系统将一直等待。',
'p902t001' : '您的调制解调器已关闭。',
'p902t002' : '系统正等待调制解调器重新工作。',
'p903t001' : '是否需要更长时间？',
'p903t002' : '系统正等待路由器重新启动。您是否需要更长时间？',
'p903t005' : '这通常需要按下调制解调器上的开关，或者，简单地将其电源拔下，但有些调制解调器带有电池；在这种情况下，您需要找到调制解调器上的复位按钮。',
'p904t001' : '是否需要更长时间？',
'p904t002' : '系统正等待路由器重新工作。您是否需要更长时间？',
'p905t001' : '再次发现您的调制解调器．．．',
'p905t002' : '系统正等待调制解调器与您的ISP同步。这一过程需要一两分钟的时间。',
'p950IMRt001' : '系统无法检测到与您的ADSL线的连接。',
'p950IMRt002' : '请检查并确保您的ADSL壁装插口与您的路由器上的灰色端口之间采用网络电缆进行连接。',
'p950IMRt004' : '可能存在布线问题。',
'p950IMRt005' : '您的路由器上的灰色端口与您的ADSL/电话插口之间应采用网络电缆进行连接。该电缆用于将信号从您的ISP传输到路由器，缺少该电缆您将无法上网。请检查该电缆连接是否正确。',
'p950IMRt006' : '下图是该连接成功时的状态：',
'p950IMRt007' : '您的ADSL壁装插口与您的路由器电源插头之间应采用网络电缆进行连接。该电缆用于将信号从您的ISP传输到路由器，缺少该电缆您将无法上网。',
'p950IMRt009' : '下图是该连接成功时的状态：',
'p950IMRt010' : '当您进行检查时，系统将一直等待连接成功。',
'p950IMRt014' : '布线',
'p950IMRt015' : '最常见的布线困难在于壁装插口和路由器之间。对电缆两端进行检查非常重要。电缆的一端应插入您的新路由器上的灰色端口，另一端应连接至您的ADSL插口。在某些情况下，壁装插口和电缆之间可能需要一个滤波器。 <span class="nub"></span>',
'p950PMt001' : '系统无法检测到与您的ADSL线的连接。',
'p950PMt002' : '请确保您的路由器与其电源插头（带有内置的调制解调器）之间采用网络电缆进行连接。',
'p950PMt004' : '可能存在布线问题。',
'p950PMt005' : '检查并确保从调制解调器电源线分出的网络电缆已连接至您的路由器的黄色WAN端口。无此网络连接，您将无法上网。',
'p950PMt009' : '下图是该连接成功时的状态：',
'p950PMt010' : '当您进行检查时，系统将一直等待连接成功。',
'p950PMt011' : '布线',
'p950PMt012' : '最常见的布线困难在于壁装插口和调制解调器之间。对电缆两端进行检查非常重要。电缆的一端应插入您的新路由器上的供电电源，另一端应连接至您的ADSL插口。在某些情况下，壁装插口和电缆之间可能需要一个滤波器。 <span class="nub"></span>',
'p950t001' : '系统未能检测到您的调制解调器连接。',
'p950t002' : '请确保您的调制解调器已插入并已开启。',
'p950t003' : '确保您的调制解调器与路由器之间用以太网电缆连接。',
'p950t004' : '可能存在布线问题。',
'p950t005' : '您的调制解调器应该开启，且您的调制解调器与路由器上的黄色端口之间应该以太网电缆连接。',
'p950t006' : '请检查以下内容：',
'p950t007' : '请确保您的调制解调器已开启。检查调制解调器电源适配器的两端均应已插上，且调制解调器上的一个或多个指示灯亮起。',
'p950t008' : '您的调制解调器与路由器上的黄色端口之间应该用以太网电缆连接。该电缆用于将信号从您的路由器传输到调制解调器，缺少该电缆您将无法上网。',
'p950t009' : '您的连接应该是这种状态：',
'p950t010' : '当您进行检查时，系统将一直等待连接成功。',
'p950t011' : '布线',
'p950t012' : '最常见的布线困难在于调制解调器和路由器之间。电缆的一端应插入您的新路由器上的黄色端口，另一端应连接至调制解调器上的类似端口。确保两端均已完全插入。不同的调制解调器制造商对端口的标记也不同，您可能会发现该端口上标记有“数据”、“局域网”、“网络”或“以太网”。<span class="nub"></span>',
'p951IMRt001' : '是否需要更长时间？',
'p951IMRt002' : '系统正等待您插入您的ADSL线。您是否需要更长时间？',
'p951t001' : '是否需要更长时间？',
'p951t002' : '系统正等待路由器重新工作。您是否需要更长时间？',
'pDAt001' : '重复管理员',
'pDAt002' : '该设备当前正由<span id="ipaddr"></span>进行管理！',
'PIC_blocked_content' : '家长互联网控制已启动，本设备目前已阻断互联网访问。按下以下按钮来管理家长互联网控制设置。',
'PIC_blocked_title' : '本设备目前已阻断互联网访问。',
'PIC_S1t0006' : '互联网访问时间表：',
'PIC_S1t006' : '最近您的网络上的设备：',
'PIC_S2t003' : '返校夜',
'PIC_S2t004' : '周末',
'PIC_S2t005' : '（周日－周四）',
'PIC_S2t006' : '（周五－周六）',
'PIC-blocked' : '阻断',
'PIC-S1dt001' : '您需要中止您的整个网络与互联网的连接吗？',
'PIC-S1t001' : '阻断所有设备',
'PIC-S1t003' : '所有设备均已从互联网上断开。',
'PIC-S1t004' : '恢复访问',
'PIC-S1t005' : '目前您的网络上的设备：',
'PIC-S1t010' : '正在搜索设备：',
'PIC-S1t020' : '您的家长互联网控制计划已暂停。',
'PIC-S1t021' : '路由器无法知晓当前时间，这将阻止阻断/解锁您的家长互联网控制计划的发生。这一问题将在您的路由器重新连接至NTP时间服务器并重新确定正确时间时得到修复。',
'PIC-S1t022' : '路由器会每隔几分钟自动检查一次NTP时间，或者，您可以通过访问<a href="#" tid="gtSystemSettings">“系统设置”</a>来更改时间服务器。',
'PIC-unblocked' : '未阻断',
'pNoTime_content' : '由于与NTP时间服务器的连接中断，您的路由器无法显示当前时间。在重新连接至NTP时间服务器之前，路由器基于时间的功能（如家长互联网控制、ECO模式、自我修复等）处于暂停状态。<br> <br>路由器会每隔几分钟自动检查一次时间。',
'pNoTime_title' : '现在的时间是？',
'pODLAplt001' : '正在应用语言包',
'pODLAplt002' : '正在更改为您所选择的语言．．．',
'pODLDLt001' : '正在下载语言包',
'pODLDLt002' : '从服务器获取您所选择的语言．．．',
'pODLErrt001' : '很抱歉',
'pODLErrt002' : '确认',
'pStatst004' : '查看全部&raquo;',
'Support1t001' : '系统未能检测到您的调制解调器连接。',
'Support1t002' : '请确保您的调制解调器已插入并已开启。',
'Support1t003' : '确保您的调制解调器与路由器之间用以太网电缆连接。',
'Support1t004' : '可能存在布线问题。',
'Support1t005' : '您的调制解调器应该开启，且您的调制解调器与路由器上的黄色端口之间应该以太网电缆连接。',
'Support1t006' : '请检查以下内容：',
'Support1t007' : '请确保您的调制解调器已开启。检查调制解调器电源适配器的两端均应已插上，且调制解调器上的一个或多个指示灯亮起。',
'Support1t008' : '您的调制解调器与路由器上的黄色端口之间应该用以太网电缆连接。该电缆用于将信号从您的路由器传输到调制解调器，缺少该电缆您将无法上网。',
'Support1t009' : '您的连接应该是这种状态：',
'Support1t010' : '当您完成上述步骤之后，请再次单击尝试。',
'Support7t012' : '请通过联网设备访问<strong>http://belk.in/Q4XXca</strong>。',
'Support1t016' : '布线',
'Support1t017' : '最常见的布线困难在于调制解调器和路由器之间。电缆的一端应插入您的新路由器上的黄色端口，另一端应连接至调制解调器上的类似端口。确保两端均已完全插入。不同的调制解调器制造商对端口的标记也不同，您可能会发现该端口上标记有“数据”、“局域网”、“网络”或“以太网”。<span class="nub"></span>',
'Support2t001' : '您的调制解调器未能重新启动。',
'Support2t002' : '请试着拔下调制解调器的电源。',
'Support2t003' : '如果您的调制解调器上有复位按钮，请将其按下。',
'Support2t004' : '重新启动您的调制解调器是否存在困难？',
'Support2t005' : '请试着按以下步骤来重新启动您的调制解调器：',
'Support2t006' : '拔下您的调制解调器的电源。',
'Support2t007' : '等待调制解调器上的所有指示灯熄灭。',
'Support2t008' : '如果指示灯仍然亮着，则您的调制解调器可能带有电池。调制解调器的某处（通常是在背面）有一个复位按钮。请将其按下。',
'Support2t009' : '您应该能看到调制解调器上的指示灯熄灭。等待几秒钟，然后再重新插入电源。',
'Support2t010' : '当您完成上述步骤之后，请再次单击尝试。',
'Support2t016' : '为什么要重新启动调制解调器？',
'Support2t017' : '某些调制解调器在与新的路由器或新接入的计算机通信之前，需要重新启动。可以检测到您的调制解调器，但未能与您的新路由器通信，所以，快速重启可能是最为有效的措施。<span class="nub"></span>',
'Support3MRt001' : '系统无法检测到与您的ADSL线的连接。',
'Support3MRt002' : '请检查并确保您的ADSL壁装插口与您的路由器之间采用网络电缆进行连接。',
'Support3MRt003' : '在某些区域，可能需要一个滤波器。',
'Support3MRt004' : '可以肯定存在布线问题。',
'Support3MRt005' : '您的路由器上的灰色端口与您的ADSL/电话插口之间应采用网络电缆进行连接。',
'Support3MRt006' : '请检查并确保电缆两端完全到位。',
'Support3MRt007' : '请检查并确保电缆已插入您的路由器的灰色端口（而不是黄色端口）。',
'Support3MRt008' : '如果您安装有ADSL线路滤波器，请确保该滤波器安装在电缆和您的ADSL插口之间。',
'Support3MRt010' : '请检查并确保电缆两端完全到位。',
'Support3MRt011' : '请检查并确保电缆已插入您的路由器供电电源的网络端口。',
'Support3MRt012' : '如果您安装有ADSL线路滤波器，请确保该滤波器安装在电缆和您的ADSL插口之间。',
'Support3MRt016' : '当您完成上述步骤之后，再次尝试准备就绪。',
'Support3MRt018' : '在联网设备中输入以下网址，来了解如何自行解决该问题：<strong>www.belkin.com/support3mr</strong>',
'Support3MRt021' : '布线',
'Support3MRt022' : '最常见的布线困难在于您的ADSL插口。对电缆两端进行检查非常重要。 <span class="nub"></span>',
'Support3MRt050' : '请检查并确保您的路由器供电电源与电话插口之间采用网络电缆进行连接。',
'Support3MRt051' : '您的路由器上供电电源与您的ADSL/电话插口之间应采用网络电缆进行连接。',
'Support3PMt001' : '系统无法检测到与您的ADSL线的连接。',
'Support3PMt002' : '请确保您的路由器与其电源插头（带有内置的调制解调器）之间采用网络电缆进行连接。',
'Support3PMt004' : '可以肯定存在布线问题。',
'Support3PMt005' : '您的路由器上的黄色端口与路由器的供电电源之间应采用网络电缆进行连接。',
'Support3PMt006' : '查看路由器的电源插头，并找到分出两个单独线路的电缆。这些线路中的一个带有以太网插头。',
'Support3PMt007' : '将以太网插头插入您路由器上的黄色端口。',
'Support3PMt010' : '当您完成上述步骤之后，再次尝试准备就绪。',
'Support3PMt012' : '请通过联网设备访问<strong>www.belkin.com/support3PM</strong>。',
'Support3PMt016' : '布线',
'Support3PMt017' : '确保您的ADSL插口与您的路由器之间拥有完整系列的连接十分重要。通过黄色端口的信号传送至路由器。从路由器供电电源接出的电缆将信号和电力传送至路由器；该电缆分出的两个插头都必须插入路由器以正常工作。 <span class="nub"></span>',
'Support3t001' : '您的调制解调器无法重新工作。',
'Support3t002' : '检查调制解调器是否有电。',
'Support3t003' : '在调制解调器准备就绪之前，您可能需要等待片刻。',
'Support3t004' : '重新启动您的调制解调器是否存在困难？',
'Support7t005' : '请尝试通过以下步骤来建立ADSL连接：',
'Support7t006' : '检查并确保从您的调制解调器－路由器接出的电缆已连接至带有互联网连接的电话插口。然后，点击“再试一次”，并查看您的调制解调器－路由器是否可以检测到互联网。',
'Support7t007' : '如果您的调制解调器－路由器与固定电话（通过分流器）共享电话插口，请使用滤波器－分流器（可选）来替换分流器。然后，点击“再试一次”，并查看您的调制解调器－路由器是否可以检测到互联网服务供应商（ISP）。',
'Support7t008' : '如果上述步骤2无法奏效，则可能需要ADSL滤波器*。如果您拥有滤波器（通常由您的互联网服务提供商提供），则将滤波器连接至固定电话及其电话插口之间。',
'Support7t009' : '如果在尝试上述步骤1－3之后，ADSL连接仍无法正常工作，则请联系您的互联网服务供应商以寻求技术支持。告知其您的调制解调器－路由器与ISP同步遇到问题。',
'Support3t010' : '当您完成上述步骤之后，请再次单击尝试。',
'Support3t016' : '为什么要重新启动调制解调器？',
'Support3t017' : '某些调制解调器在与新的路由器或新接入的计算机通信之前，需要重新启动。可以检测到您的调制解调器，但未能与您的新路由器通信，所以，快速重启可能是最为有效的措施。<span class="nub"></span>',
'Support4t001' : '系统无法重新连接至您的路由器。',
'Support4t002' : '请试着重新启动您的路由器。',
'Support4t003' : '当您的路由器建立完毕并在运行时，请尝试再次连接到您的路由器。',
'Support4t004' : '请尝试一些其他的操作。',
'Support4t005' : '首先，请重新启动您的路由器。',
'Support4t006' : '拔下您的路由器电源，等待几秒钟，然后再将电源重新插上。',
'Support4t006w' : '拔下您的路由器电源，等待几秒钟，然后再将电源重新插上。',
'Support4t007' : '当您的路由器上的蓝灯持续亮起时，连接准备就绪。',
'Support4t008' : '然后，请尝试一个无线连接。',
'Support4t031' : '这将需要几秒钟的时间来建立连接，此后，准备进行再次尝试。',
'Support4t032' : '或者，您也可以尝试一个有线连接。',
'Support4t033' : '您可以通过电缆来将这台计算机连接至路由器。通过以太网电缆来连接计算机与路由器上的一个灰色端口。通过访问http://router/，您可以再次试着进行设置。',
'Support4t034' : '当您完成上述步骤之后，请再次单击尝试。',
'Support4t040' : '请通过联网设备访问<strong>http://belk.in/PMuxOg</strong>。',
'Support4t050' : '重新获取连接',
'Support4t051' : '在此类情况下，您的路由器可能需要重新启动，或者，仅需要重新建立连接。因此，对于这两种情况我们都给出了相应的说明。由于在上一步您可能已经更改了您的网络密码，您重新启动路由器之后，您可能需要重新选择网络。<span class="nub"></span>',
'Support5t001' : '系统无法重新连接至您的路由器。',
'Support5t002' : '请试着重新启动您的路由器。',
'Support5t003' : '当您的路由器建立完毕并在运行时，请尝试再次连接到您的路由器。',
'Support5t004' : '请尝试一些其他的操作。',
'Support5t005' : '首先，请重新启动您的路由器。',
'Support5t006' : '拔下您的路由器电源，等待几秒钟，然后再将电源重新插上。',
'Support5t006w' : '拔下您的路由器电源，等待几秒钟，然后再将电源重新插上。',
'Support5t007' : '当您的路由器上的蓝灯持续亮起时，连接准备就绪。',
'Support5t008' : '然后，请尝试一个无线连接。',
'Support5t009' : '这将需要几秒钟的时间来建立连接，此后，准备进行再次尝试。',
'Support5t010' : '或者，您也可以尝试一个有线连接。',
'Support5t011' : '您可以通过电缆来将这台计算机连接至路由器。通过以太网电缆来连接计算机与路由器上的一个灰色端口。通过访问http://router/，您可以再次试着进行设置。',
'Support5t012' : '当您完成上述步骤之后，请再次单击尝试。',
'Support5t015' : '请通过联网设备访问<strong>http://belk.in/PMuxOg</strong>。',
'Support5t020' : '重新获取连接',
'Support5t021' : '在此类情况下，很难判断您的路由器需要重新启动，还是仅仅需要重新建立连接。因此，对于这两种情况我们都给出了相应的说明。由于在上一步您已经更改了您的网络名称，当您重新启动路由器之后，请确保连接至新的网络。<span class="nub"></span>',
'Support6t001' : '系统无法重新连接至您的路由器。',
'Support6t002' : '请试着重新启动您的路由器。',
'Support6t003' : '当您的路由器建立完毕并在运行时，请尝试再次连接到您的路由器。',
'Support6t004' : '请尝试一些其他的操作。',
'Support6t005' : '首先，请重新启动您的路由器。',
'Support6t006' : '拔下您的路由器电源，等待几秒钟，然后再将电源重新插上。',
'Support6t006w' : '拔下您的路由器电源，等待几秒钟，然后再将电源重新插上。',
'Support6t007' : '当您的路由器上的蓝灯持续亮起时，连接准备就绪。',
'Support6t008' : '然后，请尝试一个无线连接。',
'Support6t031' : '这将需要几秒钟的时间来建立连接，此后，准备进行再次尝试。',
'Support6t032' : '或者，您也可以尝试一个有线连接。',
'Support6t033' : '您可以通过电缆来将这台计算机连接至路由器。通过以太网电缆来连接计算机与路由器上的一个灰色端口。通过访问http://router/，您可以再次试着进行设置。',
'Support6t034' : '当您完成上述步骤之后，请再次单击尝试。',
'Support6t037' : '请通过联网设备访问<strong>http://belk.in/Nm1f5S</strong>。',
'Support6t050' : '重新获取连接',
'Support6t051' : '在此类情况下，您的路由器可能需要重新启动，或者，仅需要重新建立连接。因此，对于这两种情况我们都给出了相应的说明。由于在上一步您可能已经更改了您的网络密码，您重新启动路由器之后，您可能需要重新选择网络。<span class="nub"></span>',
'Support7t001' : '您的调制解调器－路由器未连接至互联网。',
'Support7t004' : '您的电话插口连接存在问题。',
'Support7t050' : '连接故障',
'Support7t051' : '在这种情况下，很难判定系统无法连接至ISP的原因。我们已对您的布线进行了最大限度的检查，因此，接下来您需要检查并确保您使用了正确的插口和滤波器（如果需要）；如果故障仍无法排除，请致电您的ISP。 <span class="nub"></span>',
'SupportNumber' : '1-800-123-4567',
'UpSpeed' : '12.5',
'p2410t012' : '单击“还原”将删除你的路由器设置，如用户名和密码，将其替换为出厂默认值。你的电脑，手机等，然后进行配置，以匹配这些设置，以便通过这个路由器上网。您确定要继续吗？',
'gtRestore' : '还原',
'gtCancel' : '取消',
'alt="Loading"' : '下载',
'alt="Restart Router"' : '重新启动路由器',
'alt="Check Wires"' : '检查电线',
'alt="Check Phone Connection"' : '检查电话连接',
'alt="Check WAN Connection"' : '检查WAN连接',
'alt="Checkmark"' : '复选标记',
'alt="Change"' : '更改',
'alt="Print"' : '打印',
'alt="Expand"' : '扩大',
'alt="Caret"' : '复选插入符号',
'alt="Cut"' : '切',
'alt="Browser"' : '浏览器',
'alt="Wifi"' : '无线上网',
'alt="Password"' : '密码',
'alt="Check Phone Jack"' : '检查电话插孔',
'alt="Turn Off Modem"' : '关闭调制解调器',
'alt="Turn On Modem"' : '启动调制解调器',
'alt="Check Phone Filters"' : '查询电话过滤器',
'gtSerial' : '序号',
'gt5GName' : '5GHz SSID',
'gt5GKey' : '5GHz 关键',
'p1020MRt001' : '与您的互联网服务供应商通信遇到问题。',
'p1020MRt002' : '请重新启动您的调制解调器－路由器。',
'p1020MRt003' : '未检测到互联网连接，请尝试重新启动您的调制解调器－路由器。',
'p1020MRt004' : '请关闭您的调制解调器－路由器。这通常需要按下调制解调器－路由器上的开关，或者，简单地将其电源拔下。',
'p1020MRt005' : '等待15秒。',
'p1020MRt006' : '启动您的调制解调器－路由器。',
'p1020MRt007' : '几秒钟后，指示灯会亮起，与您的ISP的连接准备就绪。',
'p1020MRt008' : '如果该问题一直存在，请联系您的ISP来排除您的帐户故障。',
'p1020MRt009' : '手动开启和关闭您的调制解调器－路由器，然后程序会自动继续。',
'p1020MRt010' : '为什么要重新启动调制解调器？',
'p1020MRt011' : '某些调制解调器在与新的路由器或新接入的计算机通信之前，需要重新启动。而且，如果您的互联网服务供应商出现一点小的问题，调制解调器也可能为意外断开连接。可以检测到您的调制解调器，但没有互联网访问，所以，快速重启可能是最为有效的措施。<span class="nub"></span>',
'p1010t001' : '与调制解调器通信遇到问题。',
'p1010t002' : '可能存在连线问题。',
'p1010t003' : '您的调制解调器与路由器上的黄色端口之间应该用网线连接。您的调制解调器应该开启。',
'p1010t004' : '请进行以下操作以确保一切准备就绪：',
'p1010t005' : '请确保您的调制解调器已开启。调制解调器的电源适配器的两端均应已插在，且调制解调器上的一个或多个指示灯应亮起。',
'p1010t006' : '您的调制调器与路由器上的黄色端口之间应该用网络网线连接。该网线用于将信号从您的路由器传输到调制解调器，缺少该网线您无法上网。',
'p1010t007' : '如果上述内容均正常，您可能需要尝试拔下调制解调器的电源来将其重新启动，等待15秒，然后将电源重新插上。如果您的调制解调器带有电池，您可能需要找到调制解调器的复位按钮并按下。',
'p1010t008' : '下图就是这些连接成功时的状态：',
'p1010t009' : '当您进行检查时，系统将一直等待连接成功。',
'p1010t010' : '最常见的连线困难在于调制解调器和路由器之间。对网线两端进行检查非常重要。网线的一端应插入您的新路由器上的黄色端口，另一端应连接至调制解调器上的类似端口。不同的调制解调器制造商对端口的标记也不同，您可能会发现该端口上标记有“数据”、“局域网”、“网络”或“以太网”。',
'Support3t005' : '请试着按以下步骤来重新启动您的调制解调器：',
'Support3t006' : '检查您的调制解调器的前端，查看是否存在亮起的指示灯。如果存在亮起的指示灯，则您的调制解调器已经开启，在您的调制解调器准备就绪之前，您可能需要等待片刻。',
'Support3t007' : '检查并您的调制解调器电源是否已正确连接到调制解调器和墙壁电源插座。',
'Support3t008' : '如果您的调制解调器上带有电源开关，请检查开关是否处于开启位置。',
'Support3t009' : '仔细检查并确保您的调制解调器仍旧连接到您的新路由器。',
'Support1t012' : '请通过联网设备访问<strong>http://belk.in/LIkBoH</strong>。',
'QOSt001' : '要启用Intellistream，做以下几点：',
'QOSt002' : '使用以太网电缆将计算机连接到您的贝尔金路由器（建议).',
'QOSt003' : '运行<a href="http://www.speedtest.net" target="_blank" class="speed_font4">Speedtest.net</a>点击这里为您的互联网连接速度测试',
'QOSt004' : '在运行速度测试之后，你看到的输入值Speedtest.net到下载速度和上传速度场以上，然后点击“保存”。',
'gtMbps' : 'Mbps',
'QOSt006' : '随着你的高下载速度，Intellistream将优先考虑你的上传速度。',
'QOSt007' : '随着高的上传速度，Intellistream将优先考虑您的下载速度。',
'QOSt008' : '这些高互联网速度，Intellistream不会帮助，所以它不会在此处启用。',
'QOSt009' : '请输入大于0.01。',
'QOSt010' : '请输入号码大于0.01。',
'gtSettingsNotSaved' : '您有未保存的设置。选择将它们保存，或离开或重置以放弃更改。',
'QOSt011' : '请输入一个数字，0.01和100.00之间。',
'QOSt012' : '请输入数字，0.01和100.00之间。',
'QOSt013' : '请输入一个数字，0.01和1000.00之间。',
'QOSt014' : '请输入数字，0.01和1000.00之间。',


// End belkin transation table
LastID : "LastValue"	
	
	
}


function translate(key) {
	return langDictionary[key];
}
