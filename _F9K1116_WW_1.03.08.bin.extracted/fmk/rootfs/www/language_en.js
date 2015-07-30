function dw(message)
{
	document.write(message);	
}


common_err1=" %s is NULL";
common_err2="Enabled";
common_err3="Disabled";
dyndns_err1="No message.";
dyndns_err2="These fields must not be empty";
dyndns_err3="The IP address is the same, and does not need to be updated.";
dyndns_err4="There is a problem with the Username, Password, or Hostname.";
dyndns_err5="DNS query error";
dyndns_err6="DNS server error";
dyndns_err7="Either there is no response from the DNS server or the Internet connection is down.";
dyndns_err8="HTTP connection failed.";
dyndns_err9="Username or password error";
dyndns_err10="Update OK:good";
dyndns_err11="Update OK:good";
dyndns_err12="Please wait";
dyndns_err13="Not Fully Qualified Domain Name:notfqdn";
dyndns_err14="The host doesn't exist:nohost";
dyndns_err15="The host is not managed by you";
dyndns_err16="Blocked due to abuse:abuse";
dyndns_err17="DynDNS server error:numhost";
dyndns_err18="Service has been shut down";
dyndns_err19="Unknown return code received!";
dyndns_err20="Unknown error occurred!";
dyndns_err21="Can't open HTTP socket";
dyndns_err22="WAN IP address is NULL";
dyndns_err23='Registration failed';
dyndns_err24='Registered';
dyndns_err25='Login failed';
dyndns_err26='Connection failed';
upgrade_err1="Upgrade file is not the correct type of version for this device.\nUpgrade failed.\nPlease obtain the correct file and try again.";
upgrade_err2="Firmware upgrade terminated due to insufficient resources.Upgrade failed.\nPlease try again when system is idle (no Internet traffic)";
upgrade_err3="Cannot upload, please contact administrator.";
upgrade_err4="Firmware is too large, upgrade failed.";
upgrade_err5="You already have the lastest firmware installed.";
upgrade_err6="It appears that the firmware update has been corrupted.  Please re-download the firmware file and try again.";
upgrade_err7="Wireless Client Cannot upgrade firmware.";
upgrade_err8="Upgrade file is NULL or too small.\nUpgrade failed.\nPlease obtain the correct file and try again.";
OK='OK';
Cancel='Cancel';
Close='Close';
show0='Router Setup';
show1='Home';
show2='Help';
show3='Login';
show4='Logout';
show5='Internet Status';
show6='Connected';
show7='Not Connected';
show8='LAN Setup';
show9='LAN Settings';
show10='DHCP Client List';
show11='Internet WAN';
show12='Connection Type';
show13='DNS';
show14='MAC Address';
show15='DDNS';
show16='WLAN Not Available';
show17='Wireless';
show18='Channel and SSID';
show19='Security';
show20='Use as an Access Point';
/*show21='Specify IP Address';*/
show21='Wi-Fi Protected Setup';
show22='MAC Address Control';
show23='Wireless Bridge';
show24='Firewall';
show25='Virtual Servers';
show26='Client IP Filters';
show27='MAC Address Filtering';
show28='DMZ';
show29='WAN Ping Blocking';
show30='Security Log';
show31='Utilities';
show33='Restart Router';
show34='Restart AP';
show35='Restore Factory Defaults';
show36='Save/Backup Settings';
show37='Restore Previous Settings';
show38='Firmware Update';
show39='System Settings';
show42='EWC Setting';
show43='Setup Wizard';
show44='Manual Settings';
show47='Access Control';
show48='Self Healing';
show54='Connection Settings';
sm1='More Info';
btn1='Clear Changes';
btn2='Apply Changes';
btn3='Web Site';
btn4='Reset to Default';
btn5='Previous';
btn6='Routing Table';
btn7='Apply';
Router='Router';
AP='AP';
Dynamic='Dynamic';
Static='Static';
PPPoE='PPPoE';
PPTP='PPTP';
L2TP='L2TP';
Multi_PPPoE='Multi-PPP over Ethernet';
UNKNOWN='UNKNOWN';
cff1='Check Firmware Successfully';
cff2='Firmware Info.';
cff3='There is no new firmware update available for this Router!';
cff4='Cannot connect to the firmware information server, <br>please double check the wan connection.';
d1='Belkin | Duplicate Administrator';
d2='Duplicate Administrator';
d3='This device is managed by';
d4='currently!!';
fc1='Firewall > Client IP filters';
fc2a='The Router can be configured to restrict access to the Internet, e-mail or other network services at specific days and times.';
IP='IP';
Port='Port';
Type='Type';
BT='Block Time';
Day='Day';
Tm='Time';
Enable='Enable';
BOTH='BOTH';
Always='Always';
Block='Block';
SUN='>SUN';
MON='>MON';
TUE='>TUE';
WED='>WED';
THU='>THU';
FRI='>FRI';
SAT='>SAT';
PM=':00 PM';
AM=':00 AM';
PM2=':30 PM';
AM2=':30 AM';
EcoMode='Eco Mode:';
Dimicons='Dim icons';
DisableEco='Disable radio from';
EcoTo='to';
EcoSu='Su';
EcoMo='Mo';
EcoTu='Tu';
EcoWe='We';
EcoTh='Th';
EcoFr='Fr';
EcoSa='Sa';
EcoExcept='except';

fcsm='The number in port entry box should be between 1 - 65535.';
fcrm='The latter of the port range must be larger than the former.';
fcripm='The latter of the ip range must be larger than the former.';
fcnsm='The Private port range is not correct.';
fcwdm='The end Day must be later than the start Day.';
fcdtm='The Time must be later than the start Time when they are in the same day.';
fclanip='The IP filter range should not cover the LAN IP address.';
fd1='Firewall > DMZ';
fd2='The DMZ feature allows you to specify one computer on your network to be placed outside of the NAT firewall. This may be necessary if the NAT feature is causing problems with an application such as a game or video conferencing application. Use this feature on a temporary basis.';
fd3='The computer in the DMZ is not protected from hacker attacks.';
fd4='To put a computer in the DMZ, enter the last digits of its IP address in the field below and select "Enable". Click "Apply Changes" for the change to take effect.';
fd5='IP Address of Virtual DMZ Host';
fd6='Static IP';
fd7='Private IP';
fd8='Enable';
fmc1='Firewall > MAC Address Filtering';
fmc2='This feature lets you set up a list of allowed clients. When you enable this feature, you must enter the MAC address of each client on your network to allow network access to each.';
fmc3='Enable MAC Address Filtering';
fmc4='MAC Address Filtering List';
fmc5='Block';
fmc6='Host';
fmc7='MAC Address';
fmc8='This MAC has already been added!';
fmc9='You only can add up to 20 entries.';
Add='Add';
Added='Added'
Del='Delete';
fmcipm='Either you have not entered all of the hex digits or some of the hex digits you entered are invalid. A hex digit can be a number from 0-9 or a letter from A(a)-F(f).';
fmn1='Firewall >';
fmn2='Your Router is equipped with a firewall that will protect your network from a wide array of common hacker attacks including Ping of Death (PoD) and Denial of Service (DoS) attacks. You can turn the firewall function off if needed. Turning off the firewall protection will not leave your network completely vulnerable to hacker attacks, but it is recommended that you turn the firewall on whenever possible.';
fmn3='Firewall Enable / Disable';
Disable='Disable';
fp1='Firewall > WAN Ping Blocking';
fp2='<b>ADVANCED FEATURE!</b> You can configure the Router not to respond to an ICMP Ping (ping to the WAN port). This offers a heightened level of security.';
fp3='Block ICMP Ping';
fs1='Firewall > Security log';
fs1b='Utilities > Security log';
fs2='The router keeps a log of all activity within the router such as computers logging in and out and any attempts from the Internet to access the router. The log is viewable below.';
fs3='Log File';
Save='Save';
Clear='Clear';
Refresh='Refresh';
System_log='System log:';
Firewall_log='Firewall log:';
fv1='Firewall > Virtual Servers';
fvipm='Either you have not entered all of the ip addresses \n or some of the numbers you entered are invalid. \n The number in ip address entry box should be between 1 - 254.';
fvrm='Please disable Remote Management. Because its port has a collision with one of your virtual servers\' inbound port.';
fvipr='The Inbound port range is not correct.';
fvppr='The Private port range is not correct.';
fvippnm='The Inbound port range is not correct.';
fv2='This function will allow you to route external (Internet) calls for services such as a web server (port 80), FTP server (Port 21), or other applications through your Router to your internal network.';
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
fv200='Clear entry ';
Description='Description';
Inb='Inbound port';
Type='Type';
Pipa='Private IP address ';
Pport='Private port';
htop='top';
h1='Help';
h2='GLOSSARY OF TERMS';
h3='<b>Administrator</b> An administrator performs the service of maintaining a network. In the case of this Router, the person who sets up the Router and makes changes to the settings.';
h4='<b>Client</b> A computer on the network that uses the services of the Router, such as the automatic DHCP server and Firewall.';
d5='<b>DDNS</b> The DDNS service is very useful when combined with the "Virtual Server" feature (or DMZ feature). It allows Internet users to connect to your Virtual Servers (or DMZ PC) using a URL, rather than an IP Address.';
h5='<b>DHCP</b> Dynamic Host Configuration Protocol. This protocol automatically configures the TCP/IP settings of every computer on your home network.';
h6='<b>Dial-Up</b> A connection which uses the public telephone network.';
h7='<b>DMZ</b> A virtual zone in the router that is not protected by the Router\'s firewall.  One computer can be placed in the DMZ.';
h8='<b>DNS Server Address</b> DNS stands for Domain Name System, which allows Internet host computers to have a domain name (such as belkin.com) and one or more IP addresses (such as 192.34.45.8). A DNS server keeps a database of host computers and their respective domain names and IP addresses, so that when a domain name is requested (as in typing "belkin.com" into your Internet browser), the user is sent to the proper IP address. The DNS server address used by the computers on your home network is the location of the DNS server your ISP has assigned.';
h9='<b>DSL Modem</b> DSL stands for Digital Subscriber Line. A DSL modem uses your existing phone lines to transmit data at high speeds.';
h10='<b>Dynamic IP</b> An IP address that is automatically obtained from a DHCP server.';
h11='<b>Ethernet</b> A standard for computer networks. Ethernet networks are connected by special cables and hubs, and move data around at up to 10 million bits per second (Mbps).';
h12='<b>Firewall</b> An electronic boundary that prevents unauthorized users from accessing certain files or computers on a network.';
h13='<b>Firmware</b> Software stored in memory. Essential programs that remain even when the system is turned off. Firmware is easier to change than hardware but more permanent than software stored on a disk.';
h14='<b>IP Address</b> IP stands for Internet Protocol. An IP address consists of a series of four numbers separated by periods, that identifies an single, unique Internet computer host. Example: 192.34.45.8.';
h15='<b>ISDN</b> Integrated Services Digital Network. Digital telecommunications lines that can transmit both voice and digital network services up to 128K, and are much faster and more reliable than high-speed analog modems. ISDN lines are offered by many telephone companies.';
h16='<b>ISP</b> Internet Service Provider. An ISP is a business that provides connectivity to the Internet for individuals and other businesses or organizations.';
h17='<b>ISP Gateway Address</b> (see ISP for definition). The ISP Gateway Address is an IP address for the Internet router located at the IS\'s office. This address is required only when using a cable or DSL modem.';
h18='<b>LAN</b> Local Area Network. A LAN is a group of computers and devices connected together in a relatively small area (such as a house or an office). Your home network is considered a LAN.';
h19='<b>MAC Address</b> MAC stands for Media Access Control. A MAC address is the hardware address of a device connected to a network.';
h20='<b>MTU</b> Maximum Transmission Unit. The largest unit of data that can be transmitted on any particular physical medium.';
h21='<b>NAT</b> Network Address Translation. This process allows all of the computers on your home network to use one IP address. Using the NAT capability of the HomeConnect home network gateway, you can access the Internet from any computer on your home network without having to purchase more IP addresses from your ISP.';
h22='<b>Port</b> A logical channel that is identified by its unique port number. Applications listen on specific ports for information that may be related to it.';
h23='<b>PPPoE</b> Point-to-Point Protocol over Ethernet. Point-to-Point Protocol is a method of secure data transmission originally created for dial-up connections; PPPoE is for Ethernet connections.';
h24='<b>PPTP</b> Point-to-Point Tunneling Protocol. A version of PPP (Point-to-Point Protocol) that has the ability to encapsulate packets of data formatted for one network protocol in packets used by another protocol. This tunneling technique allows TCP/IP data to be transmitted over a non-TCP/IP network. PPTP can be used to join different physical networks using the Internet as an intermediary.';
h25='<b>SNTP</b> Simple Network Time Protocol. A communication standard that allows for the transmission of real time information over a network or the Internet.';
h26='<b>SPI</b> Stateful Packet Inspection. SPI is the type of corporate-grade Internet security provided by your HomeConnect home network gateway. Using SPI, the gateway acts as a "firewall", protecting your network from computer hackers.';
h27='<b>Static IP</b> An IP address that is manually configured and never changes.';
h28='<b>Subnet Mask</b> A subnet mask, which may be a part of the TCP/IP information provided by your ISP, is a set of four numbers configured like an IP address. It is used to create IP address numbers used only within a particular network (as opposed to valid IP address numbers recognized by the Internet, which must assigned by InterNIC).';
h29='<b>TCP</b> Transmission Control Protocol. The most common Internet transport layer protocol. TCP is connection-oriented and stream-oriented, and provides for reliable communication over packet-switched networks.';
h30='<b>TCP/IP</b> Transmission Control Protocol over Internet Protocol. This is the standard protocol for data transmission over the Internet.';
h31='<b>UDP</b> User Datagram Protocol. Communications protocol for the Internet network layer, transport layer, and session layer, which makes it possible to send a datagram message from one computer to an application running in another computer. Unlike TCP, UDP is connectionless and does not guarantee reliable communication; the application itself must process any errors and check for reliable delivery. ';
h32='<b>WAN</b> Wide Area Network. A network that connects computers located in geographically separate areas, (i.e., different buildings, cities, countries). The Internet is a wide area network.';
h33='<b>WAN IP Address</b> The IP address assigned to the router by the ISP.';
h34='<b>WLAN</b> Wireless Local Area Network. A local area network that connects computers close together via radio (such as 802.11b)';
h35="<b>L2TP</b> Layer Two (2) Tunneling Protocol. an extension to the PPP protocol that enables ISPs to operate Virtual Private Networks (VPNs). L2TP merges the best features of two other tunneling protocols: PPTP from Microsoft and L2F from Cisco Systems. Like PPTP, L2TP requires that the ISP's routers support the protocol.";
h39='<b>DHCP</b> The DHCP server function makes setting up a network very easy by assigning IP addresses to each computer on the network. The DHCP Server can be turned off if necessary. Turning off the DHCP server will require you to manually set a Static IP address in each computer on your network. The IP pool is the range of IP addresses set aside for dynamic assignment to the computers on your network. The default is 2-100 (99 computers) if you want to change this number, you can by entering a new starting and ending IP address and clicking on "Apply Changes".';
Enabled='Enabled';
Disabled='Disabled';
Auto='Auto';
str1='This device is managed by ';
str2=' currently!!';
DDNSDisable='Disabled';
DynDNS='DynDNS';
DtDNS='DtDNS';
Current='Current Channel';
i1='Setup Home';
i2='Status';
i3='Version Info';
i4='Firmware Version';
i5='Boot Loader';
i6='Hardware';
i7='Serial No.';
i8='LAN Settings ';
i9='LAN/WLAN MAC';
i9a='LAN MAC';
i9b='WLAN Not Available';
i10='IP Address';
i11='Subnet Mask ';
i12='DHCP Server ';
NoClients='No Clients';
Clients='Clients';
i13='Internet Settings';
i14='WAN MAC Address';
i15='Connection Type';
i16='Subnet Mask';
i17='Wan IP';
i18='Default Gateway';
i19='DNS Address';
i20='Features';
i21='NAT';
i22='Firewall Settings ';
i23='SSID';
i24='Security';
i25='Printer';
i26='(enable/disable)';
i27='You will need to log in before you can change any settings.';
i28='Language';
i29='Current Language';
i30='Avaliable Languages';
i31='Static IP';
i32='Wireless Disabled';
ld1='LAN > DHCP';
ld2='LAN > DHCP Client List';
ld3='This page shows you the IP address, Host Name and MAC address of each computer that is connected to your network. If the computer does not have a host name specified, then the Host Name field will be blank. Pressing "Refresh" will update the list.';
ld4='IP Address';
ld5='Host Name';
ld6='MAC Address';
lm1='LAN';
lm2='Your Router is equipped with a DHCP server that will automatically assign IP addresses to each computer on your network. The factory default settings for the DHCP server will work in most any application. If you need to make changes to the settings, you can do so.';
lm3='The changes that you can make are:';
lm4='Change the Internal IP address of the Router. The default = 192.168.2.1';
lm5='Change the Subnet Mask. The default = 255.255.255.0';
lm6='Enable/Disable the DHCP Server Function. Default= ON (Enabled)';
lm7='Specify the Starting and Ending IP Pool Address. Default = Starting: 2 / Ending: 100';
lm8='Specify the IP address Lease Time. Default= Forever';
lm9='Specify a local Domain Name. Default = Belkin';
lm10='To make changes, click "LAN Settings" on the LAN tab to the left.';
lm11='The Router will also provide you with a list of all client computers connected to the network. To view the list, click "DHCP Client List" on the LAN tab to the left.';
ls1='LAN > LAN Settings';
ls2='You can make changes to the Local Area Network (LAN) here. For changes to take effect, you must press the "Apply Changes" button at the bottom of the screen.';
ls3='IP Address';
ls4='Subnet Mask';
ls5='DHCP server';
On='On';
Off='Off';
ls6='The DHCP server function makes setting up a network very easy by assigning IP addresses to each computer on the network. It is not necessary to make any changes here.';
ls7='IP Pool Starting Address';
ls8='IP Pool Ending Address';
ls9='Lease Time';
ls10='Forever';
ls11='Half Hour ';
ls12='One Hour ';
ls13='Two Hours';
ls14='Half Day';
ls15='One Day ';
ls16='Two Days ';
ls17='One Week';
ls18='Two Weeks';
ls19='The length of time the DHCP server will reserve the IP address for each computer.';
ls20='Local Domain Name';
Optional='Optional';
ls21='A feature that lets you assign a name to your network.';
lssm='The Subnet mask number you entered is invalid.';
lsnetm='The IP pool must be in the same subnet as the gateway IP ';
lsendm='The ending IP address must be larger than the starting IP address.';
lspoolm='The LAN IP address can not be in the DHCP address pool.';
lsipm2='Invalid Lan Ip address, the last number cannot be 0 or 255';
lsipm3='Invalid Lan Ip address, the first number cannot be 127 or 0';
lsldnm='Invalid Local Domain Name: `~!@#$%^&*()_+[]{}\\|;:\'"<>/?.,';
lsipm4='The IP that you entered is invalid';
lsipalert='Please change the Address entry box in the status bar of your browser manually to the new lan address';
lsipm5='The IP address you choose should be a non-routable IP.\n  192.168.x.x (where x is anything between 0 and 255.) \n10.x.x.x (where x is anything between 0 and 255.)\n172.y.x.x (where y is anything from 16 to 31, and x is anything between 0 and 255.)';
lsipc='Do you really wish to change the LAN IP address?';
lo1='Login';
lo2='Before you can change any settings, you need to log in with a password. If you have not yet set a custom password, then leave this field blank and click "Submit." ';
lo3='Password ';
lo4='Default = leave blank ';
Clear='Clear';
Submit='Submit';
le1='Belkin | Login Error';
lerror='Login Error !!';
Utilities='Utilities > ';
ss1='Applied Changes Successfully';
rs1='Reset Successfully ';
rs3='Router is rebooting';
rs4='seconds remaining.';
ugs1='Update Firmware Successfully. ';
rf1='Restore factory defaults Successfully';
rss1='Restored Settings Successfully ';
ufy1='Restore Factory Defaults';
ufy2='Using this option will restore all of the settings in the Router to the factory (default) settings. It is recommended that you backup your settings before you restore all of the defaults. To restore the factory default settings, click the "Restore Defaults" button below.';
ufy3='WARNING: All Your Settings Will be Lost!\nAre You Sure You want to do this?';
ufy4='Restoring the default settings will take up to 60 seconds. Do not turn off power to the Router during this process.';
ufy5='Will Not Restore Factory Defaults.No Settings Will be lost!';
ufy='Restore Defaults';
ufe1='Utilities > Firmware Update';
ufe2='From time to time, Belkin may release new versions of the Router\'s firmware. Firmware updates contain improvements and fixes to problems that may have existed. Click the link below to see if there is a new firmware update available for this Router.';
ufe3='NOTE: Please backup your current settings before updating to a new version of firmware.';
ufe4='Click Here';
ufe5='to go to the Save/Backup current settings page.';
ufe6='Check For New Firmware Version';
ufe7='Check Firmware';
ufe8='Update Firmware';
Update='Update';
ufe9='Please specify the upgrade file\'s location. Either type the file\'s path and file name or click \"Browse\" to browse to the file\'s location.';
ufe10='Are you sure you want to continue with upgrading?';
ufe11='At the end of the upgrade, the Router may not respond to commands for as long as 180 seconds. This is normal. Do not turn off or reboot the Router during this time.';
ufe12='Firmware Version';
um1='This screen lets you manage different parameters of the Router and perform certain administrative functions.';
um5='Restart Router';
um6='Sometimes it may be necessary to Reset or Reboot the Router if it begins working improperly. Resetting or Rebooting the Router will not delete any of your configuration settings.';
um7='Restore Factory Defaults';
um8='Using this option will restore all of the settings in the Router to the factory (default) settings. It is recommended that you backup your settings before you restore all of the defaults.';
um9='Save/Backup Current Settings';
um10='You can save your current configuration by using this feature. Saving your configuration will allow you to restore it later if your settings are lost or changed. It is recommended that you backup your current configuration before performing a firmware update.';
um11='Restore Previous Saved Settings';
um12='This option will allow you to restore a previously saved configuration.';
um13='Firmware Update';
um14='From time to time, Belkin may release new versions of the Router\'s firmware. Firmware updates contain feature improvements and fixes to problems that may have existed. ';
um15='System Settings';
um16='The System Settings page is where you can enter a new administrator password';
um17=', set the time zone, enable remote management and turn on and off the NAT function of the Router.';
um18=' of the Router.';
not='not';
pwd='Password';
uprev1='Utilities > Restore Previous Saved Settings';
uprev2='This option will allow you to restore a previously saved configuration.';
Restore='Restore';
uprev3='Type the name of the file that contains the backup settings.';
uprev4='Do you want to continue and restore settings?';
uprev5='After settings are restored, the Router may not respond\n to commands for as long as 60 seconds.\nThis is normal. Do not power down the Router during this time.';
ueco1='Utilities > Eco settings';
ueco2='ECO is a mode about "energy saving" mode';
ur1='Utilities > Restart Router';
ur2='Sometimes it may be necessary to Restart or Reboot the Router if it begins working improperly. Restarting or Rebooting the Router will not delete any of your configuration settings. Click the &quot;Restart  Router&quot; button below to Restart the Router.';
ur3='Restart Router';
ur4='Are you sure you want to restart the Router? Restarting the Router will not affect your configuration.';
ur5='Allow up to 30 seconds for the Router to restart. Do not power down the Router before reset completes.';
ur6='Allow up to 60 seconds for the Router to restart. Do not power down the Router before reset completes.';
usave1='Utilities > Save/Backup Current Settings';
usave2='You can save your current configuration by using this feature. Saving your configuration will allow you to restore it later if your settings are lost or changed. It is recommended that you backup your current configuration before performing a firmware update.';
Save='Save';
usys1='Utilities > System Settings';
usys2='Administrator Password: ';
usys3='The Router ships with NO password entered. If you wish to add a password for more security, you can set a password here.';
usys4='Type in current Password';
usys5='Type in new Password';
usys6='Confirm new Password';
usys7='Login Timeout';
usys8='(1-99 minutes)';
usys9='Time and Time Zone: ';
January='January';
February='February';
March='March';
April='April';
May='May';
June='June';
July='July';
August='August';
September='September';
October='October';
November='November';
December='December';
usys10='Please set your time Zone. If you are in an area that observes daylight saving check this box.';
usys11='Time Zone';
usys12='(GMT-12:00) Enewetak, Kwajalein';
usys13='(GMT-11:00) Midway Island, Samoa';
usys14='(GMT-10:00) Hawaii';
usys15='(GMT-09:00) Alaska';
usys16='(GMT-08:00) Pacific Time (US & Canada); Tijuana';
usys17='(GMT-07:00) Arizona ';
usys18='(GMT-07:00) Mountain Time (US & Canada), New Mexico ';
usys19='(GMT-06:00) Mexico City ';
usys19a='(GMT-06:00) Central Time (US & Canada), Chicago ';
usys20='(GMT-06:00) Tegucigalpa ';
usys21='(GMT-06:00) Saskatchewan ';
usys22='(GMT-05:00) Bogota, Lima, Quito ';
usys23='(GMT-05:00) Eastern Time (US & Canada) ';
usys24='(GMT-05:00) Indiana (East) ';
usys25='(GMT-04:00) Atlantic Time (Canada) ';
usys26='(GMT-04:00) Caracas, La Paz ';
usys27='(GMT-04:00) Santiago ';
usys28='(GMT-03:00) Newfoundland ';
usys29='(GMT-03:00) Brasilia ';
usys30='(GMT-03:00) Buenos Aires, Georgetown ';
usys31a='(GMT-02:00) Mid-Atlantic ';
usys32='(GMT-01:00) Azores, Cape Verde Is. ';
usys33='(GMT) Casablanca, Monrovia ';
usys34='(GMT) Greenwich Mean Time: Lisbon, London, Edinburgh ';
usys35='(GMT) Greenwich Mean Time: Dublin ';
usys36='(GMT+01:00) Amsterdam, Berlin, Bern, Rome ';
usys37='(GMT+01:00) Stockholm, Vienna, Belgrade ';
usys38='(GMT+01:00) Bratislava, Budapest, Ljubljana ';
usys39='(GMT+01:00) Prague,Brussels, Copenhagen, Madrid ';
usys40='(GMT+01:00) Paris, Sarajevo, Skopje ';
usys41='(GMT+01:00) Warsaw, Zagreb ';
usys42='(GMT+02:00) Athens, Istanbul, Minsk, Vilnius, Sofia ';
usys43='(GMT+02:00) Bucharest';
usys43a='(GMT+02:00) Israel';
usys44='(GMT+02:00) Cairo ';
usys45='(GMT+02:00) Harare, Pretoria ';
usys46='(GMT+02:00) Helsinki, Riga, Tallinn';
usys48='(GMT+03:00) Baghdad, Kuwait, Nairobi, Riyadh ';
usys50='(GMT+03:00) Moscow, St. Petersburg,Volgograd, Kazan ';
usys50b='(GMT+03:30) Tehran ';
usys51='(GMT+04:00) Abu Dhabi, Muscat, Tbilisi ';
usys52='(GMT+04:30) Kabul ';
usys53='(GMT+05:00) Islamabad, Karachi, Ekaterinburg ';
usys53a='(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi ';
usys54='(GMT+06:00) Almaty, Dhaka ';
usys55='(GMT+07:00) Bangkok, Jakarta, Hanoi ';
usys56='(GMT+08:00) Beijing, Chongqing, Urumqi ';
usys57='(GMT+08:00) Hong Kong, Perth, Singapore, Taipei ';
usys58='(GMT+09:00) Tokyo, Osaka, Sapporo ';
usys58a='(GMT+09:00) Seoul ';
usys96='(GMT+09:30) Adelaide , Darwin ';
usys59='(GMT+10:00) Brisbane ';
usys60='(GMT+10:00) Canberra, Melbourne, Sydney ';
usys61='(GMT+10:00) Guam, Port Moresby ';
usys62='(GMT+10:00) Hobart ';
usys63='(GMT+11:00) Magadan, Solomon, New Caledonia ';
usys64='(GMT+12:00) Wellington, Auckland ';
usys65='(GMT+12:00) Fiji, Kamchatka, Marshall ls. ';
usys97='(GMT+13:00) Nuku `alofa. ';
usys66='Daylight Savings';
usys67='Automatically Adjust Daylight Saving';
printps='Primary NTP Server';
bakntps='Secondary NTP Server';
usys68='Remote Management:';
AF='ADVANCED FEATURE!';
usys69='Remote management allows you to make changes to your Router\'s settings from anywhere on the Internet. Before you enable this function, ';
usys70='MAKE SURE YOU HAVE SET THE ADMINISTRATOR PASSWORD.';
usys71='Any IP address can remotely manage the router.';
usys72='Only this IP address can remotely manage the router';
usys73='NAT Enabling:';
usys74='Allows you to turn the Network Address Translation feature off. In almost every case you would NOT want to turn this feature off. ';
usys75='NAT Enable / Disable';
 
usys76='UPnP Enabling: ';
usys77='Allows you to turn the UPnP feature of the Router on or off. If you use applications that support UPnP, enabling UPnP will allow these applications to automatically configure the router. ';
usys78='UPnP Enable / Disable';
usys79='Auto Update Firmware Enabling:';
usys80='Allows you to automatically check the availability of firmware updates for your router.';
usys81='Auto Update Firmware Enable / Disable ';
usys82='Invalid current password';
usys83='New Password and Confirm New Password fields do not match';
usys83_1='Password and confirm password do not match.';
usys84='Idle time should be from 1 to 99 minutes.';
usys84_1='Idle time of the number you entered are invalid. The number has to be an integer between 1-99.';
usys85='Password length is invalid. The maximum password length is 12 and the minimum password length is 3.';
usys85_1='Administration password length should be between 1 and 63.';
usysntp='Two NTP Server IP address can not be the same.';
usys86='Please change the Address entry box in the status bar of your browser manually to the default lan address';
usys87='It is strongly recommended that you set your Administrator password.';
usys88='The password has reached its max length!';
usys89='AM';
usys90='PM';
usys91='Remote Access Port';
usys92='The remote access port number should be from 1 to 65535.';
usys93='Use this function to save power.';

usys94='IGMP Proxy';
usys95='IGMP Proxy Enable / Disable';

usysipm='Either you have not entered all the IP numbers, or some of the numbers you entered are invalid. The IP address should be as x.y.y.z(where x is anything from 1 to 223, y is anything from 0 to 255 and z is anything from 1 to 254).';
usysipm_1='Either you have not entered all the IP numbers, or some of the numbers you entered are invalid. The numbers should be between 0 and 255.';

self_healing='Health > Regular Maintenance';
self_healing1='Regular router re-initialization is helpful in maintaining a more problem free network.';
self_healing2='Auto initialize my router';
self_healing3='Set Days';
self_healing4='SUN';
self_healing5='MON';
self_healing6='TUE';
self_healing7='WED';
self_healing8='THU';
self_healing9='FRI';
self_healing10='SAT';
self_healing11='Set Time';
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
self_healing60='Self Healing';
chkwait='Checking for newer firmware...';
Europe='Europe';
Australia='Australia & NZ';
AsiaPacific='Asia Pacific';
NorthAmerica='North America';
wrhtpsswd='<b>Incorrect Password</b><br>Please confirm your password and try again.';
usysb1='The Router ships with NO password entered. If you wish to add a password for more security, you can set a password here.';
vjs1='Invalid IP address, too long, Please check again';
vjs2='Invalid IP address, missing \'.\' , Please check again!';
vjs3='Invalid IP address, missing numbers between \'.\', Please check again!';
vjs4="Invalid IP address, extra '.' , Please check again!";
vjs5='Invalid IP address, numbers between \'.\' are too big, Please check again!';
vm1='Invalid Character ';
vm2=' at Position ';
vm3='Must be ';
vjs6='Invalid year format, please enter as (e.g. 2002)';
vm4='Invalid number ';
vjs8='Invalid,must between 1970..2037';
vjs9='Invalid month format, please enter as (e.g. 01...12)';
vjs10='Please enter Year and Month First';
vjs11='Invalid day format, please enter as (e.g. 01...31), some month may only as (00...28)';
vjs12='Invalid hour format, please enter as (e.g. 00...23)';
vjs13='Invalid minute format, please enter as (e.g. 00...59)';
vjs14='Invalid MTU, must be between 500...1500';
vjs15='Invalid MRU, must be between 128...65535';
vjs16="Invalid Ip: ";
vjs161=" not in ";
vjs162=" netmask";
vjs163="Allowed DHCP range is ";
vjs17='You typed two different passwords, please double check again!';
vjs18='Please enter start port number.';
vjs19='Start port number should be smaller than end port number.';
vjs20='Invalid port number, port numbers should be positive integer';
vjs21='Invalid Length';
vjs22='Invalid Format at position ';
vjs23='Invalid MAC address, it is a broadcast address.';
vjs24='Invalid MAC address, it is a null address.';
vjs25='Invalid MAC address, it is a multicast address.';
vjs26='Invalid start and end IP address, end IP should be larger than start IP.';
vjs27='Invalid number! Must between 1..65535';
vjs28='Invalid netmask format.';
vjs29='Invalid format, netmask here must be 255.255.255.0 or 255.255.255.128 or 255.255.255.192 or 255.255.255.224 or 255.255.255.240 or 255.255.255.248 or 255.255.255.252 or 255.255.255.254';
vjs30='Invalid Ip address, the last number cannot be 0 or 255';
vjs31='Invalid Lan Ip address, the first number cannot be 127';
vjs32='Invalid Lan Ip address, cannot be 0.0.0.0';
vjs33='Invalid Lan Ip address, must under 224.0.0.0';
vjs34='Valid range is ';
vjs35='Invalid IP address, the first number should be between 1 and 223.';
vjs36='Invalid network format.';
vjs37='Invalid gateway format.';
vjs38='IP is class A, netmask is invalid.';
vjs39='IP is class B, netmask is invalid.';
vjs40='IP is class C, netmask is invalid.';
vjs41='Invalid network ip, network ip is duplicate';
vjs42='The subnet mask numbers you entered are invalid.';
vjs43='Invalid IP address, the last number should be between 1 and 254.';
vjs44='Invalid DNS address, the first number must be between 1 and 223.';
vjs45='Specify IP Address';
vjs46='is invalid, please correct it first!';
vjs47='The %s is invalid IP which is not in the %s netmask.';
dup='Duplicate Administrator';
wc1='WAN > Connection Type';
wcc2='Select your connection type:';
wcc3='Dynamic';
wcc4='A Dynamic type of connection is the most common. If you use a cable modem, then most likely you will have a dynamic connection. If you have a cable modem or you are not sure of your connection type, use this.';
wcc5='Static';
wcc6='A Static IP address connection type is less common than others. Use this selection only if your ISP gave you an IP address that never changes.';
wcc7='PPPoE';
wcc8='If you use a DSL modem and/or your ISP gave you a User Name and Password, then your connection type is PPPoE. Use this connection type.';
wcc9='PPTP';
wcc10='[European Countries Only]. This type of connection is most common in European countries. If your ISP has specifically told you that you use PPTP and has supplied you with the proper PPTP information, then use this option.';
wcc11='Telstra Bigpond/OptusNet Cable';
wcc12='Use this option for Bigpond Cable and OptusNet Cable connections only.';


wcc12_a='Use this option for Bigpond Cable and OptusNet Cable connections only.';
wcc13='L2TP';
wcc14='[Israel Only]. This type of connection is most common in Israel. If your ISP has specifically told you that you use L2TP and has supplied you with the proper L2TP information, then use this option.';
wcc15='Multi-PPPoE';
wcc16='[Japan Only] This type of connection is a unique function in Japan which is required for those who subscribe NTT\'s broadband Internet.';
Next='Next';
wds1='WAN > DNS';
wds2='If your ISP provided you with a specific DNS address to use, enter the address in this window and click "Apply Changes".';
wds2_1='If your ISP gave you specific DNS settings, enter them here.';
wds3='Automatic from ISP ';
wds3_1='Automatic from ISP';
wds4='DNS Address';
wds4_1='Primary DNS address';
wds5='Secondary DNS Address';
wds5_1='Secondary DNS Address';
wds6='DNS = Domain Name Server. A server located on the Internet that translates URL\'s (Uniform Resource Locator) like www.belkin.com to IP addresses.You must enter the DNS settings provided by your ISP if you don\'t use the Automatic DNS function';
wds6_1='DNS = Domain Name Server, a server in the Internet that translates URLs like www.belkin.com into IP addresses.';
wds7='You must enter the DNS settings provided by your ISP if you don\'t use the Automatic DNS function';
wds8='To make DNS changes, first visit  %s Website Filters %s  and select "No filters".';
wdy1='WAN > Connection Type > Dynamic IP';
wdy2='To enter your Dynamic IP settings, type in your information below and click "Apply changes".';
wdy3='Host Name';
wdy4='Host Name = A name that some Internet Service Providers require for connection to their system.';
wdy5='Change WAN MAC Address ';
wdy6='Invalid Host Name: `~!@#$%^&*()_+[]{}\\|;:\'"<>/?.,';
wmc1='WAN > MAC Address';
wmc2='Some ISPs require that you clone (copy) the MAC address of your computer\'s network card into the Router. If you are not sure then simply clone the MAC address of the computer that was originally connected to the modem before installing the Router. Cloning your MAC address will not cause any problems with your network.';
wmc3='WAN MAC Address';
wmc4='Clone Computer\'s MAC Address';
wmc5='Clone';
wmc6='WAN MAC address can not be the same with LAN MAC address. Please choose another one.';
wdd1='Firewall > DDNS';
wdd2='Dynamic DNS allows you to provide Internet users with a fixed domain name (instead of an IP address which may periodically change), allowing your router and applications set up in your router\'s virtual servers to be accessed from various locations on the Internet without knowing your current IP address. Your Wireless Router supports dynamic DNS through DynDNS.org (<A href="http://www.dyndns.org/"><B>http://www.dyndns.org</B></A>). You must create an account before using this service.';
wdd3='DDNS Service';
wdd4='DDNS Status';
wdd5='Web Site';
wdd6='User Name';
wdd7='Password';
wdd8='Domain Name';
wdd9 ='No DDNS Service selected.\n';
wdd10='No DDNS Service selected and all data in this page will be lost, continue?';
wm1='Internet/WAN';
WAN='Internet WAN';
wm2='The Internet WAN Tab is where you will set up your Router to connect to your Internet Service Provider. The Router is capable of connecting to virtually any Internet Service Provider\'s system provided that you have correctly configured the Router\'s settings for your ISP\'s connection type. To configure the Router to connect to your ISP, click on "Connection type" on the Internet WAN Tab on the left of the screen.';
wm3='Connection types supported: ';
wm4='Dynamic';
wm4b='including ISPs that require a host name and ISPs that bind the connection to a specific MAC address. ';
wm5='Static IP address';
wm5b='the Router supports a connection to an ISP which assigns a static IP address. ';
wm6='PPPoE';
wm6b='the Router supports a dynamic connection type which requires a PPPoE login for authentication.';
wm7='PPTP';
wm7b='For European users ONLY. The Router supports connections to European ISPs which connect via PPTP. ';








wm10='L2TP';
wm10b='For use only with ISPs that require the L2TP connection method.';
wpe1='WAN > Connection Type > PPPoE';
wpe2='To enter your PPPoE settings, type in your information below and click "Apply changes".';
wpe3='User Name';
wpe4='Retype Password';
wpe5='Service Name (Optional)';
wpe6='MTU (500-1500)';
wpe7='Do not make changes to the MTU setting unless your ISP specifically requires a different setting than 1454.';
wpe8='Disconnect after';
wpe9=' minutes of no activity. ';
idlerangerro='Idle time of the numbers you entered are invalid.\n The number has to be an integer between 1-99.';
wpe10='Invalid character: <>&';
wptid='Invalid character: "';
pm='Your service was not able to verify the password that you entered. Please confirm that you typed your password correctly.';
pm_1='The new passwords you entered do not match. Please try again.';
wpe11='Invalid MTU value';
wpe12='Please enter your username';
wmpe1='WAN > Connection Type > Multi-PPPoE';
wmpe2='To enter your Multi-PPPoE settings, type in your information below and click "Apply changes".';
wmpe3='Description';
wmpe4='PPPoE Account';
wmpe5='Retype Password';
wmpe6='Service Name (Optional)';
wmpe7='MTU (1440-1454)';
wmpe7_1='Invalid MTU, must be between 1440...1454';
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
wpp3='Password';
wpp4='Retype Password';
wpp6='IP Address';
wpp7='Subnet Mask';
wpp14='Please re-enter your password!';
wpp15='Please enter your password!';
wpp16='WAN > Connection Type > L2TP';
wpp17='L2TP Account';
wpp18='L2TP Password';
wpp19='Please enter your L2TP Account';
wpp20='IP assigned by ISP';
wpp21='YES';
wpp22='NO';
wpp23='IP Address Assignment';
wpp24='Use Static IP Address';
wpp25='Get Dynamically From ISP';
wppa1='WAN > Connection Type > PPTP';
wppa2='PPTP Account';
wppa3='PPTP Password';
wppa4='Retype Password';
wppa5='Host Name';
wppa6='Service IP Address';
wppa7='My IP Address';
wppa8='My Subnet Mask';
wppa9='Connection ID (optional)';
wppa10='Disconnect after';
wppa11=' minutes of no activity.';
wppa12='Click here to enter your DNS Settings ';
wppa13='Please enter your PPTP Account';
wppa14='Please re-enter your password!';
wppa15='Please enter your password!';
wppa16='IP address';
wppa17='Service Address';
wppa18='Invalid Service Name.';
ws1='WAN > Connection Type > Static IP';
ws2='To enter your Static IP settings, type in your information below and click "Apply changes".';
ws3='IP Address';
ws4='Subnet Mask';
ws5='ISP Gateway Address';
ws6='My ISP Provides more than one Static IP address';
ws7='Click here to enter your DNS Settings';
dm='Either you have not entered all the DNS numbers, or some of the numbers you entered are invalid. the numbers must be or between  0 and 255.';
sm='The Subnet mask numbers you entered are invalid.';
sm_1='The subnet mask you entered are invalid.';
ws8='Please enter/validate your DNS address settings on the following screen';
ws9='IP Address is same with Alias IP Address, please change one or remove one!';
ws10='Default Gateway';
wsc1='Alias IP Address';
im='The Alias IP Address list is full. Additional rules can not be created.';
wt1='IMPORTANT';
wt2='Clicking Apply Changes will reboot the router. Once the router has rebooted you will need to do the following';
wt3='1) Unplug the power cable from both the Cable Modem and the Belkin Router';
wt4='2) Re-connect the power cable to the Cable Modem, wait until all the lights on the modem have stopped flashing';
wt5='3) Re-connect the power cable to the Belkin Router';
wt6='To confirm you are successfully connected to the Internet, open an Internet browser such as Internet Explorer, Firefox and Safari and ensure that you can browse web pages.';
Logout='Logout';
wla1='Wireless > Use as an Access Point';
wlad1='The Router can be configured to act strictly as an Access Point, bypassing all of the routing and firewall functions. To do so, select "Enable" and type in the IP address you want the Access Point to have.';
wlad2='Enable / Disable';
wlae1='Specify IP Address';
wlae2='Subnetmask';
wlae3='Please change the Address entry box in the status bar of your browser manually to the lan address';
wlc1='Wireless > Channel and SSID';
wlc2='To make changes to the wireless settings of the router, make the changes here. Click "Apply Changes" to save the settings.';
wlc3='Wireless Channel';
wlc4='SSID';
wlcwch='Extension Channel';
wlc5='Wireless Mode';
wlcgb='802.11b+g';
wlcg='802.11g';
wlcb='802.11b';
wlc9='Broadcast SSID';
wlc10='Turbo Mode';
wlc11="Enabling Turbo Mode allows the Router or Access Point to use Frame Bursting to get the maximum throughput from the Router or Access Point to 802.11g clients. Turbo mode will work with 802.11g clients that support Turbo Mode. Belkin 802.11g Clients using the latest driver will support Turbo Mode. Clients that do not support Turbo Mode will operate normally if Turbo Mode is enabled.";
wlc12='Protected Mode';
wlc13="NOTE: In most situations, best performance (throughput) is achieved with Protected Mode OFF. If you are operating in an environment with HEAVY 802.11b traffic or interference, best performance may be achieved with Protected Mode ON.";
wlc14='Use as an Access Point';
wlc15='When using the Router as an Access Point, you must specify an IP address for the Access Point. This IP address must fall into the same range as the network that you will be connecting it to. To access the advanced setup interface of the	Router again, type in the IP address in the web browser and login.';
wlc16='Wireless > EWC Setting';
wlc17='Bandwidth';
wlc18='Control Sideband';
wlc19='NPHY Rate';
wlc20='20MHz';
wlc21='40MHz only';
wlc22='20/40MHz';
wlc22a='20/40/80MHz';
wlc23='Using the Wireless Mode Switch. This switch allows you to set the Router\'s wireless modes. There are four modes.<br>1) Off<br>This mode will turn OFF the Router\'s access point, so no wireless devices can join the network. Turning off the wireless function of your Router is a great way to secure your network when you are away from home for a long period of time, or don\'t want to use the wireless feature of the Router at a certain time.<br>2) 802.11g only<br>Setting the Router to this mode will allow only 802.11g-compliant devices to join the network, keeping out any slower 802.11b devices.<br>3) 802.11n only<br>Setting the Router to this mode will allow only 802.11n-compliant devices to join the network, keeping out any slower 802.11b and 802.11g devices.<br>4) 802.11n & 802.11g & 802.11b<br>Setting the Router to this mode will let 802.11n-, 802.11g-, and 802.11b-compliant devices to join the network. <br>';
wlcoff='OFF';
wlcngb1='802.11b & 802.11g & 1x1 802.11n';
wlcn1='1x1 802.11n';
wlcngb2='802.11b & 802.11g & 802.11n';
wlcn2='802.11n';
wlcgn='802.11g+n';
wlca='802.11a';
wlcan='802.11a & 802.11n';
wlcnac='802.11n & 802.11ac';
wlcanac='802.11a & 802.11n & 802.11ac';
wlc24='There are four modes in 5GHz band.';
wlc25='1) 802.11a only <br> Setting the Router to this mode will only allow 802.11a-compliant devices to join the network.<br> 2) 802.11a & 802.11n <br>Setting the Router to this mode will allow 802.11a and 802.11n-compliant devices to join the network.<br> 3) 802.11n only <br> 4) Off <br> This mode will turn OFF the Router\'s Wi-Fi, so no wireless devices can join the network. Turning off the wireless function of your Router is a great way to secure your network when you are away from home for a long period of time, or don\'t want to use the wireless feature of the Router at a certain time.<br>';
wlc26='Hiding your network name will disable WPS.';
wlc27='Changing your security type will disable WPS.';
wlc28='WPS is disabled due to your <A href=%s><B>wireless security type</B></A>.';
wlc29='WPS is disabled because you\'ve hidden your network name(SSID).';
wlc30='WPS is disabled since you\'ve hidden your network name(SSID) and due to your <A href=%s><B>wireless security type</B></A>.';
wlc31='Turning on WPS will un-hide your network name(SSID).';
wlc32='Turning on WPS will change your security type to WPA/WPA2. Your current network password will work just fine.';
wlc33='Turning on WPS will un-hide your network name(SSID) and change your security type to WPA/WPA2. Your current network password will work just fine.';
wlc34='You\'ll need to change your security type to WPA/WPA2 and select a new network password before turning WPS on.';
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

wlm1='Wireless';
wlm2='In this tab you can adjust settings to the Wireless section of the Router.';
wlm3='Channel and SSID';
wlm4='Make adjustments to the wireless channel and SSID(wireless network name)';
wlm5='Security';
wlm6='Change the wireless security settings such as WPA settings or WEP settings. ';
wlm7='Use as an Access Point';
wlm8='Set the operating mode of the Router to AP mode ';
wlm9='Specify IP address';
wlm10='Specify IP address of the AP.';
wlm11='MAC Address Control';
wlm12='Set up a list of clients that you want to allow or deny access to the wireless network.';
wle1='Wireless > Security';
wle2='Security Mode>';
wle2a='Disabled';
wle2b='WPA/WPA2-Personal(PSK)';
wle2c='128bit WEP';
wle2d='64bit WEP';
wle3='Authentication';
wle3a='WPA-PSK';
wle3b='WPA2-PSK';
wle3c='WPA-PSK + WPA2-PSK';
wle7="You can configure wireless security/encryption settings here. Security should be enabled to assure maximum wireless security. WPA (Wireless Protected Access) provides dynamic key changes and constitutes the best security solution. In wireless environments, where not all devices support WPA, WEP (Wired Equivalent Privacy) should be used.";
bit64WEP='64bit WEP';
bit128WEP='128bit WEP';
WPAPSK='WPA/WPA2-Personal(PSK)';

wps1='Wi-Fi Protected Setup (WPS)';
wps2='Wireless > Wi-Fi Protected Setup(WPS)';
wps3='Please configure wireless security';
wps4='Wi-Fi Protected Setup (WPS) is the industry standard method to simplify the security setup and management of the Wi-Fi networks. You now can easily setup and connect to a WPA-enabled 802.11 network with WPS-certificated devices using either Personal Information Number (PIN) or Push Button Configuration (PBC) method. Legacy devices without WPS can be added to the network using the traditional manual configuration method.';
wps5='1) Personal Information Number (PIN) Method';
wps6='Enter the PIN from the client device and click "Enroll". Then start WPS on the client device from its wireless utility or WPS application within 2 minutes.';
wps7='Enter Client Device PIN';
wps8='Enroll';
wps9='If an external registrar is available, you can also enter Router\'s PIN at the external registrar. To change Router\'s PIN, click "Generate New PIN". Or click "Restore Default PIN" to reset the PIN to factory default.';
wps10='Router PIN:';
wps11='Generate New PIN';
wps12='Restore Default PIN';
wps13='2) Push Button Configuration (PBC) Method';
wps14='Push and hold PBC button on your Router for 3 seconds or click "Start PBC". Then start PBC on the device you want to connect to the Router within 2 minutes.';
wps15='Start PBC';
wps16='3) Manual Configuration Method';
wps17_1='For client devices without WPS, manually configure the device with the following settings:';
wps17='For client devices without WPS,please run Belkin Security Assistant from CD or manually configure the device with the following settings:';
wps18='Router Configuration:';
wps19='Configured';
wps20='Network Name (SSID):';
wps21='Not configured';
wps22='Network Authentication:';
wps23='WPA+WPA2-Personal (PSK)';
wps24='Data Encryption:';
wps25='TKIP+AES';
wps26='Network Key (PSK):';
wps27='Network Key (WEP):';
wps28='AUTO';
wps28_1='NULL';
wps29='WPS';
wps30='Wi-Fi Protected Setup (WPS) is the industry standard method to simplify the security setup and management of Wi-Fi networks.';
wps31='Wireless Security:';
wps32='WPS hardware button';
wps33='Unlock Router PIN';
wps_msg1='Wi-Fi Protected Setup Message';
wps_msg2='Invalid PIN! The device PIN is eight numeric digits. Please verify and enter again';
wps_msg3='PIN checksum failed! Please verify and enter a valid PIN.';
wps_msg4='Initiating - Please start WPS in client device within 2 minutes.';
wps_msg5='In Progress - Please wait...';
wps_msg6='Error Detected - Please try again.';
wps_msg7='Success - The device is connected to the Router';
wps_msg8='Session overlap error: Please wait 60 seconds before starting the process again or refer to your client utility to manually connect to this network.';
wps_msg9='Time out - No client connects to the Router';
wps_msg10='Router PIN disabled due to excessive failed access attempts';

wwmm1='QoS Configuration';
wwmm2='QoS (Quality of Service) Configuration';
wwmm3='QoS prioritizes important data on your network such as multimedia content and voice-over-IP (VoIP) so it will not be interfered with by other data being sent over the network. Based on 802.11e, this feature can be turned on or off and you can choose the acknowledgement mode you want to use. If you plan to stream multimedia content or use VoIP on your network, the QoS feature should be enabled.';
wwmm4='802.11e/WMM QoS';
wle8='(13 hex digit pairs)';
wle9='NOTE: ';
wle10='To automatically generate hex pairs using a PassPhrase, push the button on the right and input the passphrase here';
PP='PassPhrase';
generate='generate';
errm='Please enter a PassPhrase';
keym='Key is not complete';
wle11='Key 1';
wle12='Key 2';
wle13='Key 3';
wle14='Key 4';
wle15='(hex digit pairs)';
keym1=' is not complete';
keym2=' is invalid, please correct it first!';
wwp2='Pre-shared Key (PSK)';
wwp3='WPA-PSK (no server)';
wwp4='Wireless Protected Access with a Pre-Shared Key: The key is a password, in the form of a word, phrase or series of letters and numbers. The key must be between 8 and 63 characters long and can include spaces and symbols, or 64 Hex (0-F) only. Each client that connects to the network must use the same key (Pre-Shared Key). ';
wwp5='Obscure PSK';
wls_sec_msg='It is recommended to use WPA/WPA2 when WPS is enabled.';
wguest2='Guest Settings';
wguest3='Guest Access';
wpskerr1='The length of pre-shared key should be 8 to 63 characters or 64 Hex characters';
wpskerr2='The key must be between 8 and 63 characters long and can include spaces and symbols, or 64 Hex (0-F) only!';
wpskerr4='You must input the Guest Key';
wpskerr7='The Guest Key must be 8 characters';
wpskerr8='The Guest Key must not be the same as Network Key';
wlguest1='The SSID must not be the same as Guest SSID';
wlguest2='The Guest SSID must not be the same as SSID';
ww3='Encryption Technique';
wlmc1='Wireless > MAC address control';
wlmc2='Mac Address Control is the ability to set up a list of clients that you want to allow or deny access to the wireless network.';
Allow='Allow';
Deny='Deny';
wlmc7='Select you want to allow or deny access the MAC address list first!';
wlmc6="Can't enter more than 32 MAC addresses!";
wlmc3='Invalid MAC address ';
wlmc4='Please correct it first!';
wlmc5='The correct MAC address should be one of xx:xx:xx:xx:xx:xx / xx-xx-xx-xx-xx-xx. x should be between 0-9 and a(A)-f(F)!';
wlmc8='You set one mac more than one time!';
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
ENTRY_FULL	='All entries are full.\nPlease remove some entries then try again.';
CLEAR_CONFIRM	='Do you want to clear entry ';
CLEAR_ALL_CONFIRM ='Do you want to clear all entries?';
g1='The "IP address" is the Internal IP address of the Router. To access the advanced setup interface, type this IP address into the address bar of your browser. This address can be changed if needed. To Change the IP address, type in the new IP address and click "Apply Changes". The IP address you choose should be a non-routable IP. Examples of a non-routable IP are: ';
g2='192.168.x.z (where x is anything between 0 and 255, z is anything between 1 and 254.)<br>';
g3='10.x.x.z (where x is anything between 0 and 255, z is anything between 1 and 254.)<br>';
g4='172.y.x.z (where y is anything from 16 to 31, x is anything between 0 and 255, z is anything between 1 and 254.)<br>';
g5='There is no need to change the subnet mask. It is possible to change the subnet mask if necessary. Only make changes to the Subnet Mask if you specifically have a reason to do so.<br>';
g6='DNS is an acronym for Domain Name Server. A Domain Name Server is a server located on the Internet that translates URL (Uniform Resource Locator) like www.belkin.com to IP addresses. Many ISPs do not require you to enter this information into the Router. The "Automatic from ISP" checkbox should be checked if your ISP did not give you a specific DNS address. If you are using a Static IP connection type, then you may need to enter a specific DNS address and secondary DNS address for your connection to work properly. If your connection type is Dynamic or PPPoE, it is likely that you do not have to enter a DNS address. To enter the DNS address settings, uncheck the "Automatic from ISP" checkbox and enter your DNS entries in the spaces provided. Click "Apply Changes" to save the settings. <br>';
g6a="The Dynamic DNS service allows you to alias a dynamic IP address to a static host name in any of the many domains DynDNS.org offers, allowing your network computers to be more easily accessed from various locations on the Internet. DynDNS.org provides this service, for up to five host names, free to the Internet community.<br>The Dynamic DNSSM service is ideal for a home website, file server, or to make it easy to access your home PC and stored files while you're at work. Using the service can ensure that your host name always points to your IP address, no matter how often your ISP changes it. When your IP address changes, your friends and associates can always locate you by visiting yourname.dyndns.org instead!<br><br>To register free for your Dynamic DNS host name, please visit http://www.dyndns.org.<br><br><b>Setting up the Router's Dynamic DNS Update Client</b><br>	You must register with DynDNS.org's free update service before using this feature. Once you have your registration, follow the directions below.<br>1. Enter your DynDNS.org user name in the \"User Name\" field (1).<br>2. Enter your DynDNS.org password in the \"Password\" field (2).<br>3. Enter the DynDNS.org domain name you set up with DynDNS.org in the \"Domain Name\" field (3).<br>4. Click \"Update Dynamic DNS\" to update your IP address.<br>Whenever your IP address assigned by your ISP changes, the Router will automatically update DynDNS.org's servers with your new IP address. You can also do this manually by clicking the \"Update Dynamic DNS\" button (4).";
g6b='Using Dynamic DNS';

g7='The DHCP server function makes setting up a network very easy by assigning IP addresses to each computer on the network. The DHCP Server can be turned off if necessary. Turning off the DHCP server will require you to manually set a Static IP address in each computer on your network. The IP pool is the range of IP addresses set aside for dynamic assignment to the computers on your network. The default is 2-100 (99 computers) if you want to change this number, you can do so by entering a new starting and ending IP address and clicking on "Apply Changes". <br>';
g7a='DHCP Server';
g8='You can set a local domain name (network name) for your network. There is no need to change this setting unless you have a specific advanced need to do so. You can name the network anything you want such as "MY NETWORK". <br>';
g9='Dynamic IP';
g10='A dynamic connection type is the most common connection type found with cable modems. Setting the connection type to dynamic in many cases is enough to complete the connection to your ISP. Some dynamic connection types may require a Host Name. You can enter your Host Name in the space provided if you were assigned one. Your Host Name is assigned by your ISP. Some dynamic connections may require that you clone the MAC address of the PC that was originally connected to the modem. To do so, click on the "Change WAN MAC address" link in the screen. The Internet Status indicator will read "Connected" if your Router is set up properly. <br>';
g11='A Static IP address connection type is less common than other connection types. If your ISP uses static IP addressing, you will need your IP address, Subnet Mask, and ISP gateway address. This information is available from your ISP or on the paperwork that your ISP left with you. Type in your information then click "Apply Changes". After you apply the changes, the Internet Status indicator will read "Connected" if your Router is set up properly.<br><br>';
g12='Most DSL providers use PPPoE as the connection type. If you use a DSL modem to connect to the Internet, your ISP may use PPPoE to log you into the service. If you have an Internet connection in your home or small office that doesn\'t require a modem, you may also use PPPoE. <br><br>Your connection type is PPPoE if:<br>1) Your ISP gave you a user name and password which is required to connect to the Internet<br>2) Your ISP gave you software such as WinPOET, Enternet300 that you use to connect to the Internet<br>3) You have to double-click on a desktop Icon other than your browser to get on the Internet<br><br>To set the Router to use PPPoE, type in your User Name and Password in the spaces provided. If you do not have a Service Name or do not know it, leave the Service Name field blank. After you have typed in your information, click "Apply Changes". After you apply the changes, the Internet Status indicator will read "Connected" if your Router is set up properly. For more details on configuring your Router to use PPPoE, see the user manual.';
	
gmpoe1='WAN Type is MultiSession PPPoE. This WAN type supports multiple PPPoE sessions. With properly configuration of each session, this router can transmit the packets through the correct PPPoE connection. Besides, PPPoE Session 1 will be treated as the master session. The packets which are not matched to the other PPPoE Sessions will be directed to the master session. If the WAN type is not correct, change it!';
gmpoe2='To make the router work properly under the multiple PPPoE WAN type, user has to define the trigger rules of each enabled PPPoE session. So that, once the PPPoE connections are successfully established, the packets can be treated well according to the trigger rules to find out the proper session and transmit the packets.There are two kinds of configuration methologies to define a trigger rule for each PPPoE session.By IP : Please specify the IP address, Subnet Mask and PPPoE Session ID that will be triggered.By Domain Name : Please specify the Domain Name and the PPPoE Session ID that will be triggered.Each rule will take effect if the enable check box is checked.';
g13='Some ISPs require a connection using PPTP protocol. This sets up a direct connection to the ISP\'s system. Type in the information provided by your ISP in the space provided. When you have finished, click "Apply Changes". After you apply the changes, the Internet Status indicator will read "Connected" if your Router is set up properly. ';

g14a='Telstra BigPond';
g14b='After you apply the changes, the Internet Status indicator will read, "Connected" if your Router is set up properly. ';

g15='MTU Setting';
g16='The MTU setting should never be changed unless your ISP gives you a specific MTU setting. Making changes to the MTU setting can cause problems with your Internet connection including disconnection from the Internet, slow Internet access and problems with Internet applications working properly. ';
g17='Disconnect after X...';
g18='The Disconnect feature is used to automatically disconnect the router from your ISP when there is no activity for a specified period of time. For instance, placing a checkmark next to this option and entering 5 into the minute field will cause the router to disconnect from the Internet after 5 minutes of no Internet activity. This option should be used if you pay for your Internet service by the minute. ';
g19='MAC is an acronym for Media Access Controller. All network components including cards, adapters, and routers, have a unique "serial number" called a MAC address. Your ISP may record the MAC address of your computer\'s adapter and only let that particular computer connect to the Internet service. When you install the router, the Router\'s own MAC address will be "seen" by the ISP and may cause the connection not to work. Belkin has provided the ability to clone (copy) the MAC address of the computer into the router. This MAC address, in turn, will be seen by the ISP\'s system as the original MAC address and will allow the connection to work. If you are not sure if your ISP needs to see the original MAC address, simply clone the MAC address of the computer that was originally connected to the modem. Cloning the address will not cause any problems with your network. <br> To Clone your MAC address, make sure that you are using the computer which was ORIGINALLY CONNECTED to your modem before the Router was installed. Click the "'+wmc5+'" button. Click "Apply Changes". Your MAC address is now cloned to the router. ';
g20='To change the channel of operation of the Router, select the desired channel from the drop-down menu. Click "Apply Changes" to save the setting. You can also change the SSID. The SSID is the equivalent to the wireless network\'s name. You can make the SSID anything you want to. If there are other wireless networks in your area, you should give your wireless network a unique name. The default is belkin.xxx. To change the SSID, click inside of the SSID box and type in a new name. Click "Apply Changes" to make the change.';
				
g21='It is possible to make your wireless network nearly invisible. By turning off the broadcast of the SSID, your network will not appear in a site survey. Site Survey is a feature of many wireless network adapters on the market today. It will scan the "air" for any available network and allow the computer to select the network from the site survey. Turning off the broadcast of the SSID will help increase security.';











g25='Virtual Servers';
g26='This function will allow you to route external (Internet) calls for services such as a web server (port 80), FTP server (Port 21), or other applications through your Router to your internal network. Since your internal computers are protected by a firewall, machines from the Internet cannot get to them because they cannot be \'seen\'. If you need to configure the Virtual Server function for a specific application, a list of common applications has been provided. If your application is not listed, you will need to contact the application vendor to find out which port settings you need. To select from the provided list, select your application from the drop-down list. Select the row that you want to copy the settings to from the drop-down list next to "to row", then click "Enter". The settings will be transferred to the row you specified. Click "Apply Changes" to save the setting for that application. To manually enter settings, enter the IP address in the space provided for the internal (server) machine, the port(s) required to pass (use a comma between multiple ports), select the port type (TCP or UDP) and click "Apply Changes". You can only pass one port per internal IP address. Opening ports in your firewall can pose a security risk. You can enable and disable settings very quickly. It is recommended that you disable the settings when you are not using a specific application. ';
g27='Client IP filters';
g28='The Router can be configured to restrict access to the Internet, e-mail or other network services at specific days and times. Restriction can be set for a single computer, a range of computers, or multiple computers. To restrict Internet access to a single computer for example, enter the IP address of the computer you wish to restrict access to in the IP fields. Next enter 80 and 80 in the Port fields. Select TCP. Select Block. You can also select Always to block access all of the time. Select the day to start on top, the time to start on top, the day to end on the bottom and the time to stop on the bottom. Click "Apply Changes". The computer at the IP address you specified will now be blocked from Internet access at the times you specified. Note: be sure you have selected the correct time zone under Utilities> System Settings> Time Zone. ';
g28_1='The Router can be configured to restrict/allow access to the Internet, email, or other network services at specific days and times. Restriction can be set for a single computer, a range of computers, or multiple computers. Press "Add" button to use this feature.';	

g29='MAC Address Filtering';
g30='The MAC Address Filter is a powerful security feature that allows you to specify which computers are allowed on the network. Any computer attempting to access the network that is not specified in the filter list will be denied access. When you enable this feature, you must enter the MAC address of each client on your network to allow network access to each. To enable this feature, select "Enable MAC Address Filtering". Next, enter the MAC address of each computer on your network by clicking "Add". Click "Apply Changes" to save the settings. To delete a MAC address from the list, simply click "Delete" next to the MAC address you wish to delete. Click "Apply Changes" to save the settings. <br><br>Note: you will not be able to delete the MAC address of the computer you are using to access the Router\'s administrative functions. (The computer you are using now). ';
g31='The DMZ feature allows you to specify one computer on your network to be placed outside of the NAT firewall. This may be necessary if the NAT feature is causing problems with an application such as a game or video conferencing application. Use this feature on a temporary basis. The computer in the DMZ is not protected from hacker attacks. To put a computer in the DMZ, enter the last digits of its IP address in the IP field and select "Enable". Click "Apply Changes" for the change to take effect. If you are using multiple static WAN IP addresses, it is possible to select which WAN IP address the DMZ host will be directed to. Type in the WAN IP address you wish the DMZ host to direct to, enter the last two digits of the IP address of the DMZ host computer, select "Enable" and click "Apply Changes".';
	
g32='Block ICMP Ping';
g33='Computer hackers use what is known as "Pinging" to find potential victims on the Internet. By pinging a specific IP address and receiving a response from the IP address, a hacker can determine that something of interest might be there. The Router can be set up so it will not respond to an ICMP Ping from the outside. This heightens the level of security of your Router. To turn off the ping response, select "Block ICMP Ping" and click "Apply Changes". The router will not respond to an ICMP ping. ';
g34='Administrator Password';
g35='The Router ships with NO password entered. If you wish to add a password for more security, you can set a password here. Keep your password in a safe place, as you will need this password if you need to log into the router in the future. It is also recommended that you set a password if you plan to use the Remote management feature of this Router. <br><br>The login timeout option allows you to set the period of time that you can be logged into the Router\'s advanced setup interface. The timer starts when there has been no activity. For example, you have made some changes in the advanced setup interface, then left your computer alone without clicking "Logout". Assuming the timeout is set to 10 minutes, then 10 minutes after you leave, the login session will expire. You will have to login to the router again to make any more changes. The login timeout option is for security purposes and the default is set to 10 minutes. As a note, only one computer can be logged into the Router\'s advanced setup interface at one time. ';
g36='Time and Time Zone';
g37='The Router keeps time by connecting to a Simple Network Time Protocol (SNTP) server. This allows the Router to synchronize the system clock to the global Internet. The synchronized clock in the Router is used to record the security log and control client filtering. Select the time zone that you reside in. If you reside in an area that observes Daylight Saving, then place a checkmark in the box next to "Daylight Savings". The system clock may not update immediately. Allow at least 15 minutes for the router to contact the time servers on the Internet and get a response. You cannot set the clock yourself. ';
g38='Remote Management';
g39='Before you enable this function,<font class="plaintext_bold"> MAKE SURE YOU HAVE SET THE ADMINISTRATOR PASSWORD. </font>Remote management allows you to make changes to your Router\'s settings from anywhere on the Internet. There are two methods of remotely managing the router. The first method is to allow access to the router from anywhere on the Internet by selecting "Any IP address can remotely manage the router". By typing in your WAN IP address from any computer on the Internet, you will be presented with a login screen where you need to type in the password of your router. The Second method is to allow a specific IP address only to remotely manage the router. This is more secure, but less convenient. To use this method, enter the IP address you know you will be accessing the Router from in the space provided and select "Only this IP address can remotely manage the Router". Before you enable this function, it is STRONGLY RECOMMENDED that you set your administrator password. Leaving the password empty will potentially open your router to intrusion. ';
g40='NAT Enabling';
g42='UPnP (Universal Plug-and-Play) is a technology that offers seamless operation of voice messaging, video messaging, games, and other applications that are UPnP compliant. Some applications require the Router\'s firewall to be configured in a specific way to operate properly. This usually requires opening TCP and UDP ports and in some instances setting trigger ports. An application that is UPnP compliant has the ability to communicate with the Router, basically "telling" the Router which way it needs the firewall configured. The Router ships with the UPnP feature enabled. If you are using any applications that are UPnP compliant, and wish to take advantage of the UPnP features, you can enable the UPnP feature. Simply select "Enable" in the "UPnP Enabling" section of the Utilities page. Click "Apply Changes" to save the change. ';
g43='Automatic Firmware Update Notification';
g44='The Router has the capability built-in to automatically check for a new version of firmware and alert you that the new firmware is available. When you log into the Router advanced interface, the router will perform a check to see if new firmware is available. If new firmware is available, you will be notified. You can choose to download the new version or ignore it. The router ships with this feature disabled. If you want to enable it, select "Enable" and click "Apply Changes". ';
g45='Wireless Security';
g46='Using Encryption can help secure your wireless network. Only one type of security may be selected at a time. Therefore the customer must select a mode that is supported on all network devices on the wireless network. This Belkin product has 4 possible Security settings:<br><br>1) Disabled. No encryption is enabled in this mode. Open networks where all users are welcome sometimes prefer not to enable encryption.<br><br>2) WPA/WPA2-Personal(PSK) (Wireless protected Access) PSK is a recent standards-based security technique where each packet of information is encrypted with a different code, or key. Since the key is constantly changing, WPA is very secure. WPA-PSK (Pre-shared Key) is for home and small business users who do not have a server. The PSK encryption key is generated automatically from a string of characters or Pass Phrase. Obviously, the biggest security risk in WPA PSK is if someone finds out your Pass Phrase.<br><br>a. TKIP verses AES. WPA setup requires the user to select whether to encrypt using TKIP or AES. The WPA standard specifies TKIP, so that is the default. Additionally TKIP should provide better compatibility between wireless products from different vendors since many wireless products will never be upgraded to AES. AES is a new encryption technique based on the un-ratified 802.11i standard. New WPA standards are being considered using AES. Although AES is not as popular, some users may prefer to use this technique. Either way, all networks devices must use the same technique.<br><br>b. Pre-shared Key. Enter any word or phrase up to 64 characters. The same PSK must also be used for every other wireless network device on the network. Watch out for upper and lower case differences ( "n" is different than "N"). Remember, the easiest way to break your security is for someone to guess your PSK.<br><br>3) 128-bit WEP. Until recently, 128-bit WEP (Wired Equivalent Privacy) was the standard for wireless encryption. If not all of your wireless devices support WPA, 128bit WEP still offers very good security option. It will require you to enter hex numbers, or you can generate them automatically.<br><br>4) 64-bit WEP. Belkin only recommends 64-bit mode on networks where some devices do not support either WPA or 128bit WEP.';
g47='Some ISPs require a connection using L2TP protocol. This sets up a direct connection to the ISP\'s system. Type in the information provided by your ISP in the space provided. When you have finished, click "Apply Changes". After you apply the changes, the Internet Status indicator will read "Connected" if your Router is set up properly. ';
g48 = 'Access Control';
g49 = 'The Router can be configured to restrict access to the Internet, email, or other network services at specific days and times. Restriction can be set for a single computer.';
g50='ECO Mode';
g51='This function allows you to dim the LEDs on the front of the router to save power. You can also disable the wireless radio at predetermined times.';

rs_file_error='Upgrade file is not the correct type or version for this device. Upgrade failed. Please obtain the correct file and try again';
rs_crc='Restore failure < CRC >';
rs_long='Restore failure <too long>';
rs_disposition='Restore failure <No Content-Disposition>';
rs_getpid='Restore failure <Can\'t get pid!>';
rs_unmatchpid='Restore failure <Unmatched pid>';

var msg_ddns1 ="Please enter your username!\n";
var msg_ddns2 ="Please enter your password!\n";
var msg_ddns3 ="Domain name fields can not be blank.\n";
var msg_ddns4 ="Update Dynamic DNS";
var msg_ddns5 ="The Domain Name should be less than 63 characters long.";
// fw_dmz.html
var msg_fw_dmz1 = "Please enter the IP address before enabling DMZ.\n";
var msg_lan_dhcp1 ="Requesting information from the Gateway.";
var msg_lan_dhcp2 ="Updating configuration database.";
var msg_lan_sett1 ="Please input non-routable IP addresses(10 or 172 or 192)!\n";
var msg_lan_sett2 ="Please input non-routable IP addresses(168)!\n";
var msg_lan_sett3 ="Please input non-routable IP addresses(16 ~ 31)!\n";
var msg_lan_sett4 ="Please input non-routable IP addresses(1 ~ 254)!\n";
var msg_lan_sett5 ="Please input valid IP addresses(0 ~ 255)!\n";
var msg_wan_stat ="IP address %s is not in %s network.";
var msg_wan_stat1 ="IP address ";
var msg_wan_stat2 =" is not in ";
var msg_wan_stat3 =" network.";
var msg_wls_chan1 ="SSID can not be set as NULL!\n";
var msg_wls_chan2 ="Guest SSID can not be set as NULL!\n";
var fw_update ="Firmware update in progress.";
var fw_not_interrupt ="DO NOT INTERRUPT OR UNPLUG THE ROUTER, doing so could render the Router inoperable.";
var show35a ="Restore Defaults";
var msg_invalid_char ='Invalid Character(s) found. Valid characters are: 0-9, a-z, A-Z, `~!@#$%^&*()_-+=|\\{}[]:";\',.<>/?';
var vs_null ="description is empty.";
var msg_invalid_vs_char ='Invalid Character(s) found. Valid characters are: 0-9, a-z, A-Z, `~!@#$%^&*()_-+=|{}[]:;\',.<>/?';
var msg_invalid_ssid_char ='Invalid Character(s) found. Valid characters are: 0-9, a-z, A-Z, _+.';
var msg_invalid_domain_char ='Invalid Local Domain Name'+': ~!@#$%^&*()=+{}[]|":;\\\'?/<>,`';
var msg_invalid_char_1 ='Invalid Character(s) found. Valid characters are letters and numbers .The following symbols is invalid: `~!@#$%^&*()_+[]{}\\|;:\'"<>/?.,';
var msg_hostIP_invalid ="The host IP address is invalid. It should not be the Router's LAN IP.\n";
var msg_dmzIP_blank ="Please enter the IP address before enabling DMZ.";
var msg_dmzIP ="DMZ IP Address.";
ipm='Either you have not entered all the DNS numbers,\n or some of the numbers you entered are invalid.\n the numbers may be or between 0-255.';
ipmLast='Either you have not entered all the DNS numbers,\n or some of the numbers you entered are invalid.\n the numbers may be or between 1-254.';
var msg_blank =" can not be blank.\n";
var msg_space ="Blanks or spaces are not allowed in %s\n";
var msg_blank_in ="Blanks are not allowed in %s\n";
var msg_allspaces ="%s cannot consist solely of spaces\n";
var msg_invalid ="Invalid character or characters in %s\nValid characters are: \n%s\n\n";
var msg_check_invalid ="%s contains an invalid number\n";
var msg_valid_range ="%s is invalid. Valid range is %s to %s\n";
var msg_invalid_mac ="Invalid MAC address.\n";
var msg_multi_mac="The MAC address can't be multicast address.\n";
var msg_vs_des="Invalid character : or - is not allowed in description.";
var msg_privateIP_invalid ="LAN IP Address is invalid!\n";
var msg_dmzIP ="DMZ IP Address.";
var msg_confirmDefault ="Warning!\nLoading the Factory Default Settings will erase all the current settings.\nAre you sure you wish to do this?";
var con_noinfo='Choose the connection type that your ISP uses.\nYour ISP provided this information when you signed up with them.';
var con_miss='The field below has been filled in with data we believe to be correct.';
var con_nosure='Please contact your ISP if you are unsure of your connection type.\nBe sure to keep them on the phone until you have all required information for the pages that follow.';

var wiz_miss='Some of the fields below have been filled in with data we believe to be correct.   Please enter any missing information.  Your ISP provided this information.';
var wiz_nosure='Please contact your ISP if you are unsure of the settings below.';
var wiz_chk_isp='Your ISP did not accept the settings set below when we tried to connect. Please<br>examine them closely to see if anything is incorrect.';

var Australia_wz="Australia";
var Austria_wz="Austria";
var Belgium_wz="Belgium";
var China_wz="China";
var Czech_wz="Czech";
var Denmark_wz="Denmark";
var France_wz="France";
var Germany_wz="Germany";
var Hong_Kong_wz="Hong Kong";
var Hungary_wz="Hungary";
var India_wz="India";
var Indonesia_wz="Indonesia";
var Israel_wz="Israel";
var Italy_wz="Italy";
var Japan_wz="Japan";
var Korea_wz="Korea";
var Malaysia_wz="Malaysia";
var Netherlands_wz="Netherlands";
var New_Zealand_wz="New Zealand";
var Norway_wz="Norway";
var Philippines_wz="Philippines";
var Portugal_wz="Portugal";
var Singapore_wz="Singapore";
var Spain_wz="Spain";
var Sweden_wz="Sweden";
var Switzerland_wz="Switzerland";
var Taiwan_wz="Taiwan";
var Thailand_wz="Thailand";
var UK_wz="UK";
var USA_wz="United States of America";
var Other_wz="Other";

g10_brief='A dynamic connection type is the most common connection type found with cable modems. Setting the connection type to dynamic in many cases is enough to complete the connection to your ISP. Some dynamic connection types may require a Host Name. You can enter your Host Name in the space provided if you were assigned one. Your Host Name is assigned by your ISP.';
Finland_wz="Finland";
Poland_wz="Poland";

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
info_dsl_modem = h9_1;
h9_2 = 'DSL Modem';
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
var wizard_name = "Router Setup Utility";

stroute_1 = 'LAN > Static Routing';
showstroute='Static Routing';
stroute3 = 'The routing table is full!';
stroute32 = ' Network Address';
stroute33 = ' '+i11;
stroute34 = ' Gateway';
Remove='Remove';



acl_1 = 'Parental Controls > Access Control';
help_acl='After enabling Access Control, pressing the "Add" button will open up the "Connected Client List" Screen. This screen lists all the clients list with MAC addresses learned from the router. In the "Connected Client List" screen you can also create a Client you want to control by filling in the blanket MAC address column. You choose one of the clients from the "Connected Client List" by pressing the "Add" button. You will return to Access Control Screen. You can press the "Edit" button under the "Member" column to setup the Acceess Control Rule for each client. '
acl_setting='Internet Access <br> Policy';
acl_2 = 'The Acl table is full';
acl_3 = 'After enabling Access Control, pressing the <b>"Add"</b> button will open up the <b>"Connected Client List"</b> Screen.  This screen lists all the clients list with MAC addresses learned from the router. In the <B>"Connected Client List" </B> screen you can also create a Client you want to control by filling in the blanket MAC address column. You choose one of the clients from the "Connected Client List" by pressing the <b>"Add"</b> button.  You will return to Access Control Screen. You can press the <b>"Edit"</b> button under the <b>"Member"</b> column to setup the Acceess Control Rule for each client.';
acl_4='Pressing the "Add" button to open up the "Connected Client List" screen that lists all the clients with MAC address learned from router.In the "Connected Client List" screen user can also create a client you want to control by fill in the blank MAC address column.After you choose one of client from Connected Client List by pressing "Add" button under action column,and then you will return to Access Control Screen.In this screen you need to fill in information of control rules for the client you choose.';
acl1=' Member';
acl2=' Device';
acl3=' Mac Address';
acl4=' Status';
acl5=' Restriction';
acl6=' Action';
acl7=' ';
acl8='All devices from Guest SSID';
acl9='Control Rules for Member';
acl10='Schedule';
acl11='URL List';
acl12='URL Keyword List';
acl13='Days';
acl14='Everyday';
acl15='M';
acl16='T';
acl17='W';
acl18='F';
acl19='24 Hours';
acl20='From';
acl21='To';
acl22='Do you want to delete member';
acl23='Already existed.';
acl24='Already existed in member list';
acl25='Already existed in client list';
acl26='The port numbers you entered are invalid.';
acl27='Landing Password';
acl28='Landing Page';
acl29='Access denied.Enter Router password to temporarily allow access to the blocked page or services.';
member_setting='Member List';
acl_member_setting='Exception of Control Rules for Member';
Allow_All='Allow All';
Deny_All='Deny All';
acl30='The Router can be configured to restrict/allow access to the Internet,email,or other network services at specific days and times.Restriction can be set for a single computer,a range of computers,or multiple computers.';

Index='Index';
Services='Service';
Port_Rang_List='Port Range List';
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

fw_access2='Please enter legal character in [0-9]!';
fw_access3='Please enter legal character in [1-65535]!';
fw_access4='Port is out of range [1 - 65535]';
fw_access5='The Port Range List is empty.';
fw_access6='The URL is invalid.';
fw_access7='The Keyword is invalid.';
fw_access8='Dupliate URL';
fw_access9='Dupliate Keyword';

Blocked_Services='Blocked Services';
Block_All_Services='Block All Services';
Allowed_Services='Allowed Services';
Allow_All_Services='Allow All Services';
Blocking_Url='Website Blocking by URL Address ';
Allowing_Url='Website Allowing by URL Address ';
Block_All_URLs='Block All URLs';
Allow_All_URLs='Allow All URLs';
URL_Address='URL Address';

Keyword='Keyword';
Blocking_Keyword='Website Blocking by keyword';
Allowing_Keyword='Website Allowing by keyword';



Connected_Client_List='Connected Client List';
var save_reboot_time=30;
var restore_reboot_time=30;
var upgrade_reboot_time=70;
var normal_reboot_time=60;
rdt_msg1='This feature is not implemented. ';
rdt_msg2='Redirecting to home page... ';
var disconnect_msg = 'Oops! Your connection to the router has failed.  Please reconnect to the router, click OK and retry.';

show49='Guest Access';
wguest1='Wireless > Guest Access';
wguest4='Guest Access allows access to the Internet through the WAN port, but limits guests from accessing the internal network, LAN and WLAN. The feature is supported on 2.4GHz only to simplify use.';
wguest5='Type';
wguest6='Cafe-style(guest log in via a webpage)';
wguest7='WPA/WPA2 PSK';
wguest8='WEP';
wguest9='Open';
wguest10='Network Name (SSID)';
wguest11='maximum 32 characters, no space';
wguest12='Password(PSK)';
wguest13='8 to 63 characters';
wguest14='Print guest access settings';
wguest15='10 hex digits';
wlguest3='Password length is invalid. The maximum password length is 63 characters and the minimum password length is 8 characters.';
wlguest4='WEP key must be 10 Hex digits!';
wlguest5='Each guest that connects to your wireless network will need this password.';
wlguest6='Security Type';
wlguest7='To connect to the wireless network:';
wlguest8='Windows';
wlguest9='Right-click the wireless network icon in your Windows system tray and select View Available Wireless Networks from the pop-up menu.';
wlguest10='Double click on the';
wlguest11='A window will popup asking for the network key. Enter the password above and click OK.';
wlguest12='MAC OS X';
wlguest13='Click the wireless network icon in your menu bar (top right) and select the';
wlguest14='A window will popup asking for the network key. Enter the password above and click OK.';
wlguest15='Guest Access is a feature that allows users to access the Internet but limits access to the home network. Please ask the network administrator for the Guest Access password and enter it below.';
wlguest16='Success! You may now open a web browser and surf the Internet.';
wlguest17='Password/PSK';
wipv61='IPv6 > Connection Settings';
wipv62='IPv6 Pass-Through >';
wipv63='Devices connected to your router can talk to each other using native IPv6 packets. IPv6 packets on the LAN will automatically be sent to all LAN interfaces(Ethernet ports and both 2.4 GHz and 5 GHz wireless networks).';
wipv64='When IPv6 pass-through is enabled, IPv6 packets will also be copied to the WAN interface.(When enabled, this creates a direct, non-secure connection to the internet.)';
wipv65='Please contact your ISP directly for information about their support for IPv6.';
wipv66='IPv6';
wipv67='Internet IPv6';
wipv68='Your network is IPv6-compatible.';
wipv69='Pass-Through';

show50='Website Filters';
web_filter1='Parental Controls > Website Filters';
web_filter2='Provides a first layer of whole-home internet protection to guard you from unsafe and inappropriate websites on any device on your network.';
web_filter3='Filtering Options';
web_filter4='These security filters are provided to guide your family towards <br> making better decisions when browsing the internet.';
web_filter5='Block Malicious, Adult and other non-family friendly sites';
web_filter6='Block Malicious and Adult Sites';
web_filter7='Block Malicious Sites';
web_filter8='No Filters';
web_filter9='Blocks malware, phishing, and scam sites and also sites that contain sexually explicit material, mature content, abortion, alcohol, tobacco, crime, cult, drugs, gambling, hate, suicide or violence.';
web_filter10='Blocks malware, phishing, scam sites and sites that contain sexually explicit content.';
web_filter11='Blocks malware, phishing and scam sites.';
web_filter12='Use the DNS provider of your choice.';
web_filter13='To change your DNS address please continue to Internet WAN > %s DNS %s';
web_filter14="Website Filters are provided to give you peace of mind about your child's safety while they use the internet.Choose from three easy-to-use filters to select the level of security for your network.";

show51='Intellistream';
show53='Media Features';
mf1='These pages allow you to adjust the behavior of your router when presented with certain types of media traffic.';
mf2='Automatically optimize your internet connection for different types of traffic.';
mf3='See how your router is being used.';
mf4='Media Features > Intellistream';
mf5='Intellistream prioritizes high-bandwidth and low-latency services such as voice,video,and games for the best possible online experience.';
mf6='Internet connectivity will be momentarily suspended during the test.';
mf7='Speed Test:';
mf8='Recorded on %s';
mf9='Ping';
mf10='Download';
mf11='Upload';
mf12='Speed';
mf13='Ms';
mf14='Mbps';
mf15='Apply Settings';
mf16='Error occurred during test.';
mf17='Manually Set';
mf18='Enter between the number {0.1-%s}.';
mf19='To enable Intellistream:';
mf20='Between {0.1-%s} only.';
mf22='Completed.';
mf23='With your high upload speed Intellistream will prioritize your download speed only.';
mf24='With your hign download speed Intellistream will prioritize your upload speed only.';
mf25="With your high internet speeds Intellistream doesn't need to be enabled.";
mf26='Manually recorded on %s';
mf27='Running...';
mf28='Run a Speed Test';
mf29='To do a good job,Intellistream needs to know your connection speed.';
mf30='Intellistream is enabled.';
mf31='Manually Enter';
mf32='or';
mf33='Intellistream is currently disabled.';
mf43='Internet connectivity is momentarily suspended during the test.';
mf44='The automatic speed test results may not be 100% accurate based upon internet traffic or other conditions. To compare results please visit a speed test website or contact your ISP to confirm your internet speeds. If the speed results are inconsistent you may enter the values manually.';

show52='Traffic Chart';
qos_stats1='Media Features > Traffic Chart';
qos_stats2='The charts below display both WAN outbound and inbound traffic prioritized into different categories. Charts are displaying the last 10 minutes (automatically updating every 5 seconds).';
qos_stats3='Traffic Legend'; 
qos_stats4='Bytes/sec';
qos_stats5='Time of Day/Hours:Minutes';
qos_stats6='Inbound Traffic';
qos_stats7='Outbound Traffic';
qos_stats8='Network Connectivity & Control';
qos_stats9='Voice, Video Chat, & Gaming';
qos_stats10='Web & Web Video';
qos_stats11='Email & VPN';
qos_stats12='Downloads, Torrents, & Others';
qos_stats13='To active this feature, please enable Intellistream ';
qos_stats14='here';
qos_stats15='.';

new1='Optimize you internet connection.';
new2='Parental Controls';
new3='Web filters for safe  browsing.';
new4='IPv6 connection';
new5='Your network is now IPv6-compatible.';
new6='NEW';
new7='Share media between devices on the network.';
new8='NEW';

media_feature1='Media Features';
media_feature2='The bandwidth gap between LAN and WAN may significantly degrade performance of critical network applications, such as VoIP, gaming, and VPN. This QoS function allows users to classify traffic of applications and provides them with differentiated services (Diffserv).';
media_dlna1='Media Server';
media_dlna2='Media Features > Media Server';
media_dlna3='Enjoy personal music, photos, and videos conveniently through any DLNA device connected to your network. Powered by Twonky.';
media_dlna4='DLNA Server';
media_dlna5='Server Name';
media_dlna6='Shared Drives:';
media_dlna7='Ready';
media_dlna8='Indexing';
media_dlna9='Serving';
media_dlna10='videos';
media_dlna11='songs';
media_dlna12='pictures';
media_dlna13='Eject';
media_dlna14='Refresh Index';
media_dlna15='Apply Settings';
media_dlna16='Twonky is a line of digital home software products created by PacketVideo Corporation (PV).';
media_dlna17='created by PacketVideo Corporation (PV).';
media_dlna18='Untitled';
media_dlna19='There are no USB drives mounted to the router.';
media_dlna20='Not shared with the network.';
media_dlna21='You have more media than your router can index, so we\'re serving the first 12000 items.';
media_dlna22='Cannot index read-only drive.';

// Note this dictionary is a temporary demonstration
var langDictionary = {

// Copy belkin transation table to here	
'p100t011' : 'dashboard',
'p220t001' : 'You have a PPTP DSL Connection',
'p220t011' : 'PPTP',
'p220t012' : 'Point-to-Point Tunneling Protocol (PPTP) creates a private and encrypted connection between you and your Internet Service Provider.',
'p222t001' : 'Something is not right with your PPTP settings.',
'p300t001' : 'Checking for firmware updates.',
'p300t002' : 'We\'re checking to see if there\'s updated firmware available for your new router',
'p300t003' : 'Why do I need the latest firmware?',
'p300t004' : 'Firmware is the software your router uses to implement network and security protocols. Updates enhance the reliability and functionality of your router, so it is good to make sure you have the latest.',
'gtUpdateNoPower' : 'We\'re updating your router with the new firmware. Please don\'t turn off the power while this is happening.',
'p320t003' : 'This will take three minutes or so. Update progress:',
'gtFirmwareRestart' : 'Now that the firmware has been installed, we need to restart your router to make it official.',
'p342t003' : 'from the list of wireless networks in order to help this along.',
'errorSSIDEmpty' : 'Please enter a name for your wireless network.',
'errorSSIDTooLong' : 'Your network name must be shorter than 32 characters.',
'errorSSIDInvalidChars' : 'Your network name can only contain letters, numbers, punctuation, and spaces.',
'errorWEPPasswordInvalidChars' : 'Your network password can only contain numbers and the letters A through F.',
'errorWEPPasswordInvalidLength' : 'Your network password must be 10 or 26 characters long.',
'errorWEPPasswordEmpty' : 'Please enter a password to secure your wireless network.',
'errorWPAPasswordInvalidChars' : 'Your network password can only contain letters, numbers, punctuation, and spaces.',
'errorWPAPasswordInvalidLength' : 'Your network password must be 8-63 characters long.',
'errorWPAPasswordEmpty' : 'Please enter a password to secure your wireless network.',
'errorGenericCommitError' : 'There was an error.  Please correct the settings below and try again.',
'p400t006' : 'Password:',
'p450t006' : 'Password: ',
'p451t006' : 'Password: ',
'p500t007' : 'Complete Registration',
'p500t008' : 'Register Later',
'p700t011' : 'PPTP DSL connection',
'errIpAddressEmpty' : 'The IP address can\'t be blank.',
'errSubnetMaskEmpty' : 'The subnet mask can\'t be blank.',
'errSubnetMaskInvalid' : 'The subnet mask doesn\'t look like a subnet mask. Please check the value.',
'errDefaultGatewayEmpty' : 'The default gateway address can\'t be blank.',
'errDNSServerEmpty' : 'The DNS server address can\'t be blank.',
'1781' : 'Vuze Offline Downloading',
'1782' : 'Clearing all offline downloads will erase all of the items in the queue including partial and complete files.',
'1783' : 'Clear All Offline Downloads',
'7102' : 'Belkin Intellistream prioritizes high-bandwidth and low-latency services such as voice, video,and games for the best possible online experience.',
'7103' : 'To do a good job, Intellistream needs to know your connection speed.',
'7104' : 'Internet connectivity will be momentarily suspended during the test.',
'7105' : 'Internet connectivity is momentarily suspended during the test.',
'7106' : 'Run a Speed Test',
'7107' : 'Speed Test',
'7108' : 'Manually Enter',
'7109' : 'Ping',
'7110' : 'Download<br> Speed',
'7111' : 'Upload<br>Speed',
'7112' : 'Running...',
'7113' : 'Completed.',
'7114' : 'Error occurred during test.',
'7115' : 'Enter between the number 0.1-100.',
'7116' : 'Enter between the number 0.1-1000.',
'7117' : 'Between 0.1-100 only.',
'7118' : 'With your high upload speed Intellistream will prioritize your download speed only.',
'7119' : 'With your high download speed Intellistream will prioritize your upload speed only.',
'7120' : 'With your high internet speeds Intellistream doesn\'t need to be enable.',
'7121' : 'Recorded on',
'7122' : 'Manually recorded on',
'7123' : 'To enable Intellistream:',
'7124' : 'Intellistream is enabled.',
'7125' : 'Intellistream is currently disabled.',
'7126' : 'Manual Set',
'gtBBSTitle' : 'Welcome to Belkin Router Setup',
'gtBack' : 'Back to Dashboard',
'Support4t036' : 'Read all about it.',
'Support4t037' : 'Pull up the following URL on a device that is connected to the Internet and learn how to fix the problem yourself: <STRONG>www.belkin.com/support/asdlkj</STRONG>',
'gtReadHelp' : 'Go to <STRONG>http://belk.in/NLk29H</STRONG> on a device connected to the Internet',
'Support5t014' : 'Read all about it.',
'p1200t001' : 'A little more security.',
'p1200t002' : 'You can further protect your router by locking the dashboard with a password.',
'errsetempt' : 'Please enter a password.',
'errorpwdEmpty' : 'Please enter your password.',
'errorpwdError' : 'Your password is not correct.',
'60' : 'Duplicate Administrator',
'61' : 'This device is managed by',
'62' : 'currently!!',
'gtDisconnected' : 'Disconnected',
'dft005' : 'Belkin Help Center',
'dhToggleBand' : 'Show 5.0Ghz',
'419' : 'seconds remaining.',
'422' : 'Restored Settings Successfully',
'423' : 'Restored file is not the correct type for this device. Restore failed. Please obtain the correct file and try again',
'533' : 'If your router begins working improperly, it may be necessary to restart or reboot the router. Restarting the router will not delete your settings.',
'1200' : 'Applying changes. Please wait.......',
'1386' : 'Upgrade file is not the correct type or version for this device. Upgrade failed. Please obtain the correct file and try again',
'2053' : 'Applied Changes Successfully',
'2054' : 'Update Firmware Successfully',
'766' : 'The Subnet mask numbers you entered are invalid.',
'1356' : 'Invalid Gateway IP, the first number should be between 1 and 223.',
'1357' : 'Invalid Gateway IP, the second and the third number should be between 0 and 255.',
'1358' : 'Invalid Gateway IP, the last number should be between 1 and 254.',
'1360' : 'Invalid IP address, the first number should be between 1 and 223.',
'1354' : 'Invalid IP address, the second and the third number should be between 0 and 255.',
'675' : 'Invalid IP address, the last number should be between 1 and 254.',
'403' : 'The IP that you entered is invalid.',
'760' : 'IP Address',
'1760' : 'Deny All',
'395' : 'Either you have not entered all of the numbers  or some of the numbers you entered are invalid. The number in each entry box should be between 0 and 255.',
'1395' : 'Not Configured',
'1281' : 'The WAN IP can not cover the LAN side subnet.',
'641' : 'Either you have not entered all the IP numbers or some of the numbers you entered are invalid. The numbers should be between 0 and 255',
'errUsernameTooLong' : 'Your username must be less than 64 characters long.',
'errUsernameInvalid' : 'Your username can only contain letters, numbers, punctuation, and spaces.',
'errPasswordEmpty' : 'Please enter your password.',
'errPasswordTooLong' : 'Your password must be less than 64 characters long.',
'errPasswordInvalid' : 'Your username can only contain letters, numbers, punctuation, and spaces.',
'1398' : 'OK',
'1399' : 'Cancel',
'374' : 'On',
'375' : 'Off',
'47' : 'More Info',
'48' : 'Clear Changes',
'49' : 'Save',
'96' : 'Enable',
'119' : 'Disable',
'1298' : 'Close',
'113' : '<< Add',
'114' : 'Delete',
'128' : 'Refresh',
'318' : 'Disabled',
'317' : 'Enabled',
'2006' : 'Yes',
'2007' : 'No',
'3300' : 'NEW',
'50' : 'Update Dynamic DNS',
'98' : 'Dynamic domain name system (DDNS) allows you to access your home network through an account set up through a DDNS provider. Set up your account through Dyn.com (<a href=\'http://www.dyn.com\' target=\'_blank\'>www.dyn.com</a>) and turn on the DDNS feature on your router. You must create an account before using this service.',
'100' : 'User Name',
'101' : 'Password',
'102' : 'Domain Name',
'742' : 'Please enter your username',
'757' : 'Please enter your password!',
'822' : 'is invalid, please correct it first!',
'1307' : 'DynDNS',
'1308' : 'DDNS Service',
'1309' : 'DDNS Status',
'1310' : 'Web Site',
'1315' : 'AutoUpdate DDNS',
'1316' : 'upgrade every',
'1317' : 'days',
'1369' : 'Registered',
'1380' : 'Wrong Configuration',
'1381' : 'Connecting',
'1382' : 'Connection Failed',
'1383' : 'Login Failed',
'1384' : 'Registration Failed',
'1385' : 'Unregistered',
'1751' : 'Serve media files to compatible networked media players',
'702' : 'The domain name service (DNS) translates domain names into IP addresses for locating computer services and devices worldwide. If your Internet service provider (ISP) has given you a DNS address to use, enter it here.',
'703' : 'Automatic from ISP',
'704' : 'DNS Address',
'705' : 'Secondary DNS Address',
'706' : 'DNS = Domain Name Server. A server located on the Internet that translates URL\'s (Uniform Resource Locator) like www.belkin.com to IP addresses.',
'707' : 'You must enter the DNS settings provided by your ISP if you don\'t use the Automatic DNS function.',
'780' : 'Specify IP Address',
'823' : 'To make DNS changes, first visit {Website Filter} and select "No filters".',
'55' : 'Firmware Info.',
'56' : 'There is no new firmware update available for this Router!',
'57' : 'Cannot connect to the firmware information server,please double check the WAN connection.',
'58' : 'Current firmware:',
'59' : 'Download firmware:',
'64' : 'The Router can be configured to restrict access to the Internet, e-mail or other network services at specific days and times.',
'65' : 'IP',
'66' : 'Port',
'67' : 'Type',
'68' : 'Block Time',
'69' : 'Day',
'70' : 'Time',
'71' : 'Enable',
'72' : 'BOTH',
'73' : 'Always',
'74' : 'Block',
'75' : 'SUN',
'76' : 'MON',
'77' : 'TUE',
'78' : 'WED',
'79' : 'THU',
'80' : 'FRI',
'81' : 'SAT',
'82' : ':00 P.M.',
'83' : ':00 A.M.',
'84' : 'Either you have not entered the client IP address or some of the numbers in the IP address you entered are invalid. The number in IP entry box should be between 1 and 254.',
'85' : 'The port numbers you entered are invalid.',
'86' : 'The latter of the port range must be larger than the former.',
'87' : 'The latter of the ip range must be larger than the former.',
'88' : 'The number in port entry box should be between 1 - 65535.',
'1311' : 'There is no application is selected',
'1312' : 'Duplicate entries detected. The rule already exists.',
'1355' : 'Router\'s LAN IP should be excluded from IP Range.',
'90' : 'This allows you to specify a device on your network to be placed outside your router\'s firewall, while other devices remain behind the firewall.',
'91' : 'The computer in the DMZ is not protected from hacker attacks.',
'92' : 'To put a computer in the DMZ, enter the last digits of its IP address in the field below and select "Enable". Click "Save" for the change to take effect.',
'93' : 'IP Address of Virtual DMZ Host',
'97' : 'Static IP',
'95' : 'Private IP',
'103' : 'Please enter the IP address before enabling DMZ',
'1232' : 'IP Address of DMZ Host is invalid!',
'1253' : 'IP is out of range [1-254]!',
'105' : 'This feature lets you set up a list of allowed clients. When you enable this feature, you must enter the MAC address of each client on your network to allow network access to each.',
'106' : 'Enable MAC Address Filtering',
'107' : 'MAC Address Filtering List',
'108' : 'Block',
'110' : 'MAC Address',
'112' : 'This MAC has already been added!',
'669' : 'Invalid MAC address, it is a null address',
'902' : 'Invalid MAC address',
'903' : 'Please correct it first!',
'904' : 'The correct MAC address should be xx:xx:xx:xx:xx:xx and x is between 0-9 and a-f!',
'1062' : 'Note: you will not be able to delete the MAC address of the computer you are using to access the Router\'s administrative functions. (The computer you are using now).',
'1602' : 'User Defined 1',
'117' : 'Your Router is equipped with a firewall that will protect your network from a wide array of common hacker attacks including Ping of Death (PoD) and Denial of Service (DoS) attacks. You can turn the firewall function off if needed. Turning off the firewall protection will not leave your network completely vulnerable to hacker attacks, but it is recommended that you turn the firewall on whenever possible.',
'118' : 'Firewall Enable / Disable',
'121' : '<b>ADVANCED FEATURE! </b> You can configure the Router not to respond to an ICMP Ping (ping to the WAN port). This offers a heightened level of security.',
'1076' : 'Block ICMP Ping',
'1827' : 'Print guest access settings',
'2702' : 'Guest Access allows access to the Internet through the WAN port, but limits guests from accessing the internal network, LAN and WLAN. The feature is supported on 2.4GHz only to simplify use.',
'279' : 'Inbound port',
'1828' : 'Cafe-style(Guests log in via a webpage)',
'1619' : 'WPA/WPA2 PSK',
'1829' : 'WEP',
'1830' : 'Open',
'1831' : 'maximum 32 characters, no space',
'1617' : 'Password(PSK)',
'842' : 'Authentication',
'845' : 'Encryption Technique',
'854' : 'Pre-shared Key (PSK)',
'857' : 'Obscure PSK',
'855' : 'WPA-PSK (no server)',
'1335' : 'Network Name (SSID)',
'1825' : '8 to 63 characters',
'1826' : '10 hex digits',
'1834' : 'Network Name',
'409' : 'Password',
'1835' : 'Each guest that connects to your wireless network will need this password.',
'1715' : 'Security Type',
'1836' : 'To connect to the wireless network:',
'1837' : 'Windows',
'1838' : '1. Right-click the wireless network icon in your Windows system tray and select View Available Wireless Networks from the pop-up menu.',
'1839' : '2. Double click on the ',
'1840' : ' network.',
'1841' : '3. A window will popup asking for the network key. Enter the password above and click OK.',
'1842' : 'MAC OS X',
'1843' : '1. Click the wireless network icon in your menu bar (top right) and select the ',
'1844' : ' network.',
'1845' : '2. A window will popup asking for the network key. Enter the password above and click OK.',
'1832' : 'Cafe-Style',
'1833' : 'Open Mode',
'1201' : 'SSID can not be set as NULL!',
'1812' : 'Password length is invalid. The maximum password length is 63 and The minimum password length is 8.',
'1824' : 'WEP key must be 10 Hex digits!',
'414' : 'Login Error !!',
'1811' : 'Guest Access is a feature that allows users to access the Internet but limits access to the home network. Please ask the network administrator for the Guest Access password and enter it below.',
'1813' : 'Success! You may now open a web browser and surf the Internet.',
'909' : 'The "IP address" is the Internal IP address of the Router. To access the advanced setup interface, type this IP address into the address bar of your browser. This address can be changed if needed. To change the IP address, type in the new IP address and click "Save". The IP address you choose should be a non-routable IP. Examples of a non-routable IP are: 192.168.2.1, 10.0.0.1, 172.16.0.1',
'917' : 'There is no need to change the subnet mask. It is possible to change the subnet mask if necessary. Only make changes to the subnet mask if you specifically have a reason to do so.',
'929' : 'The DHCP server function makes setting up a network very easy by assigning IP addresses to each computer on the network. The DHCP Server can be turned off if necessary. Turning off the DHCP server will require you to manually set a Static IP address in each computer on your network. The IP pool is the range of IP addresses set aside for dynamic assignment to the computers on your network. The default is 2-200 (199 computers) if you want to change this number, you can by entering a new starting and ending IP address and clicking on "Save".',
'935' : 'You can set a local domain name (network name) for your network. There is no need to change this setting unless you have a specific advanced need to do so. You can name the network anything you want such as "MY NETWORK".',
'962' : 'To set the router to use PPPoE, type in the user name and password from your ISP in the spaces provided. If you do not have a service name or do not know it, leave the "Service Name" field blank. After you have typed in your information, click "Save". After you save, the status indicator will read "Online" if your router is set up properly.',
'967' : 'Some ISPs use the PPTP protocol to connect subscribers to the central office. This requires you to enter a handful of additional settings which your ISP should have provided. Once you have saved your changes, the Internet status indicator will show green if you\'ve been successful.',
'971' : 'Select the Telstra Bigpond connection type by clicking "Save".',
'982' : 'Disconnect after X...',
'983' : 'This disconnects your router from your ISP after a period of inactivity. Use this option to save money if you pay for your Internet service by the minute.',
'htDDNS' : 'What is DDNS?',
'htDNS' : 'What is DNS?',
'htDMZ' : 'What Is the DMZ?',
'htLAN' : 'What do LAN Settings control?',
'htWANMain' : 'What are WAN Settings?',
'htWANMAC' : 'What is the MAC address?',
'htWAN_PPPOE' : 'PPPoE Settings',
'htWAN_PPTP' : 'PPTP Settings',
'htIPv6' : 'What Is IPv6?',
'htWifiID' : 'What are the network name and channel settings?',
'htWifiIDContent' : 'The network name is called an SSID (Service Set ID).  All of the clients on your network must know the SSID to join the router\'s network.',
'htWifiSec' : 'What Is Wi-Fi Security?',
'htWifiSecContent' : 'All Belkin routers ship with Wi-Fi security enabled.  Wi-Fi security provides a layer of protection against unauthorized access to your network.  When security is on, user will need a password to access your network.',
'htWifiWPS' : 'What Is Wi-Fi Protected Setup?',
'htWifiWPSContent' : 'This is an optional method designed to ease set up of security-enabled Wi-Fi networks in your home or small office. Devices without Wi-Fi protected setup (WPS) can still be added to your network by choosing the network name and entering the network password.',
'htWifiGuest' : 'How is guest access used?',
'htWifiGuestContent' : 'When turned on, guest access will create a separate Wi-Fi network that can still access the Internet, but not other devices on your network.',
'htAP' : 'Can I use my router as an access point?',
'htAPContent' : 'Belkin routers can be set up to act strictly as an access point, bypassing all of the routing and firewall functions.  Setting up your router as an access point is most commonly used to add wireless capability to an existing wired network.',
'htQos' : 'What is Belkin Intellistream?',
'htDLNA' : 'Belkin Media Server powered by Twonky',
'htPortForward' : 'What is port forwarding?',
'htPortForwardContent' : 'Port forwarding allows remote computers to connect to a specific program or service on your local network. For example, you would use port forwarding to run a web server (port 80) on your network.  Most modern programs do not require you to use port forwarding; They can set up any ports they needs automatically.',
'htWanPing' : 'What does WAN ping blocking do?',
'htWanPingContent' : 'This provides a heightened level of security to keep external Internet users from finding out your IP address. It does this by not answering pings that originate outside your network.',
'htRestart' : 'Why restart my router?',
'htRestoreFC' : 'What does it to restore factory defaults?',
'htSaveSettings' : 'Why should I save/backup my settings?',
'htRestoreSettings' : 'What does restoring my previous settings mean?',
'htSystem' : 'What are the system settings?',
'htSystemContent' : 'From this page, you can set a variety of basic router settings, including time zone and administrator password.',
'htSelfHeal' : 'What is self-healing?',
'hLANSettings' : 'This page helps you set up new connections, allows you to turn on/off DHCP  and allows you to set the IP address of the router on your local network.',
'htDHCPClientList' : 'What Is the DHCP Client List?',
'htDHCPClientListContent' : 'This page shows you the IP address, host name and MAC address of each device that is connected to your network. If the computer does not have a host name specified, then the field will be blank. Click on "Refresh" to update the list.',
'hWebsiteFilters' : 'This serves as a layer of protection against unsafe/inappropriate websites. The web filters screen sites by checking the name of the website against a list of approved sites.',
'hWANSettings' : 'These network settings refer to the connection you have with your Internet service provider (ISP).   Select the connection type provided by your ISP from the list. ',
'htChannel' : 'Similar to the way a radio use different stations, your router can broadcast on several different channels to communicate with the devices on your network. Using \'Auto\' is usually the best choice.',
'3430' : 'IPv6 (Internet Protocol version 6) is a version of the Internet Protocol (IP) intended to succeed IPv4, which directs almost all Internet traffic. Some Internet service providers (ISP) are almost out of IP addresses. IPv6 allows more devices to communicate on the Internet by using bigger numbers to create IP addresses.  Your ISP will let know whether you need to use IPv6.',
'3431' : 'Connection Type',
'3432' : 'Auto-Config/DHCPv6 (default)',
'3433' : 'The addresses below are provided by your ISP. DHCPv6 provides added features to enhance connectivity.',
'3434' : 'WAN',
'3435' : 'WAN Address',
'3436' : 'Gateway',
'3437' : 'LAN',
'3438' : 'Use this section to configure the internal networking settings of your router. If you change the LAN IPv6 address here, you may need to adjust your computer\'s network settings to access the network again.',
'3439' : 'LAN Prefix',
'3440' : 'Interface ID',
'3441' : 'Link-Local',
'3442' : 'DNS',
'3443' : 'Your IPv6 DNS default settings are from your Internet Service Provider if available in WAN router advertisements or DHCPv6 messages.',
'3444' : 'Primary',
'3445' : 'Secondary',
'3446' : 'PPPoE over IPv6',
'3447' : 'Point-to-Point Protocol over Ethernet (PPPoE) is primarily used by DSL services to connect a DSL modem to the Internet.',
'3448' : 'Login',
'3450' : 'obscure password',
'3451' : 'User Name',
'3452' : 'Password',
'3453' : 'Service Name',
'3454' : '6to4 Tunnel',
'3455' : 'Allows for IPv6 packets to be transmitted over an IPv4 network without the need to configure explicit tunnels. This connection type is appropriate if your Internet Service Provider does not support IPv6.',
'3456' : 'Remote 6to4 Relay Router',
'3457' : 'Pass-Through',
'3458' : 'Devices connected to your router can talk to each other using native IPv6 packets. IPv6 packets on the LAN will automatically be sent to all LAN interfaces (Ethernet ports and both 2.4 GHz and 5 GHz wireless networks).',
'3459' : 'When pass-through is enabled, IPv6 packets will also be copied to the WAN interface. (This creates a direct, non-secure connection to the Internet.)',
'3460' : 'Please contact your ISP for information about their support for IPv6.',
'3461' : 'Static IPv6',
'3462' : 'Static IPv6 addressing is not commonly used as it can be difficult to administer. Static IPv6 should not be used with devices that connect to multiple networks, such as laptops or mobile devices.',
'3463' : 'Local Pass-Through Only',
'3464' : 'IPv6 WAN Pass-Through is disabled. All local devices on your LAN and WiFi can still talk to each other directly, but the router won\'t send any IPv6 packets to or from the Internet, nor respond directly to any IPv6 packets.',
'3465' : 'Your Internet Service Provider is not providing IPv6 connectivity. Please contact them for information about IPv6 support or to establish connectivity.',
'3466' : 'Local Pass-Through Only is auto set for your devices to send IPv6 packets between each other. The other option is to use "6to4 Tunnel" to access the internet through an IPv4 connection.',
'3467' : 'Each box should contain four hexadecimal digits (0-9 and a-f).',
'3468' : 'Please enter a non-multicast address. Multicast addresses generally begin with ff.',
'3469' : 'Prefix length should be 1-127. Prefix length is usually 64, 56, or 48.',
'3470' : 'There is no IPv4 connection.',
'3471' : 'These DNS settings are overridden by your Parental Controls',
'3472' : 'Website Filter',
'3473' : 'Please select PPPoE in Internet WAN > Connection Settings before selecting PPPoE over IPv6.',
'3474' : 'Lost internet connectivity. Please check your WAN connection type or contact your Internet Provider.',
'3475' : 'Default DNS provided by your Internet Service Provider',
'gtTryManu' : 'If you know your connection type, you can ',
'gtSetManual' : 'set it up manually ',
'2100' : 'Access denied. Enter Router password to temporarily allow access to the blocked page or services.',
'2101' : 'Landing Page',
'2102' : 'GO',
'354' : 'This page shows you the IP address, Host Name and MAC address of each computer that is connected to your network. If the computer does not have a host name specified, then the Host Name field will be blank. Pressing "Refresh" will update the list.',
'355' : 'IP Address',
'356' : 'Host Name',
'357' : 'MAC Address',
'370' : 'This page helps you set up new connections, allows you to turn on/off DHCP and allows you to set the IP address of the router on your local network.',
'371' : 'IP Address',
'372' : 'Subnet Mask',
'373' : 'DHCP Server',
'378' : 'The DHCP server function makes setting up a network very easy by assigning IP addresses to each computer on the network. It is not necessary to make any changes here.',
'379' : 'IP Pool Starting Address',
'380' : 'IP Pool Ending Address',
'381' : 'Lease Time',
'382' : 'Forever',
'383' : 'Half Hour',
'384' : '1 Hour',
'385' : 'Two Hours',
'386' : 'Half Day',
'387' : 'One Day',
'388' : 'Two Days',
'389' : 'One Week',
'390' : 'Two Weeks',
'391' : 'The length of time the DHCP server will reserve the IP address for each computer.',
'392' : 'Local Domain Name',
'393' : 'Optional',
'394' : 'A feature that lets you assign a name to your network.',
'397' : 'The IP pool must be in the same subnet as the gateway IP',
'398' : 'The ending IP address must be larger than the starting IP address.',
'399' : 'The LAN IP address can not be in the DHCP address pool.',
'400' : 'The IP address you choose should be a non-routable IP.',
'401' : 'Invalid Lan Ip address, the first number cannot be 127 or 0',
'404' : 'Please change the Address entry box in the status bar of your browser manually to the new lan address.',
'406' : 'Do you really wish to change the LAN IP address?',
'416' : '192.168.y.x (where y is anything between 0 and 255, and x is anything between 1 and 254.)',
'417' : '10.y.y.x (where y is anything between 0 and 255, and x is anything between 1 and 254.)',
'418' : '172.z.y.x (where z is anything from 16 to 31, and y is anything between 0 and 255, and x is anything between 1 and 254.)',
'713' : 'Invalid Local Domain Name :',
'1228' : 'IP Pool Starting Address is invalid!',
'1229' : 'IP Pool Ending Address is invalid!',
'1240' : 'LAN IP Address is invalid!',
'3' : 'Login',
'408' : 'Before you can change any settings, you need to login with a password. If you have not yet set a custom password, then leave this field blank and click "Submit".',
'410' : 'Default = leave blank',
'412' : 'Submit',
'1371' : 'Incorrect password',
'1372' : 'Please confirm your password and try again.',
'124' : 'The router keeps a log of all activity within the router such as computers logging in and out and any attempts from the Internet to access the router.',
'125' : 'Log File',
'126' : 'Save',
'127' : 'Clear',
'1302' : 'System Log',
'1303' : 'Firewall Log',
'8' : 'LAN Settings',
'9' : 'Local Network Settings',
'10' : 'Connected Devices',
'2500' : 'Static Routing',
'11' : 'Internet WAN',
'335' : 'Connection Type',
'690' : 'Dynamic',
'692' : 'Static',
'694' : 'PPPoE',
'696' : 'PPTP',
'698' : 'Telstra BigPond/OptusNet Cable',
'42' : 'IPV6',
'43' : 'IPv6 Connection',
'13' : 'DNS',
'14' : 'MAC Address',
'16' : 'WiFi',
'17' : 'Network Name',
'18' : 'Security',
'803' : '128bit WEP',
'804' : '64bit WEP',
'1296' : 'WPA/WPA2-Personal (PSK)',
'1297' : 'WPA/WPA2-Enterprise (RADIUS)',
'805' : 'WPA (with Radius Server)',
'1319' : 'Wi-Fi Protected Setup',
'777' : 'Use as an Access Point',
'833' : 'MAC Address Control',
'1613' : 'Guest Access',
'1850' : 'Parental Controls',
'1851' : 'Website Filter',
'1710' : 'Access Control',
'20' : 'Media',
'7151' : 'Traffic Chart',
'7000' : 'Media Server',
'1780' : 'Torrent Mate',
'1790' : 'Optional Software',
'23' : 'Firewall',
'24' : 'Port Forwarding',
'25' : 'Client IP Filters',
'26' : 'MAC Address Filtering',
'27' : 'DMZ',
'41' : 'DDNS',
'28' : 'WAN Ping Blocking',
'29' : 'Security Log',
'30' : 'Utilities',
'32' : 'Restart Router',
'34' : 'Restore Factory Defaults',
'35' : 'Save/Backup Settings',
'36' : 'Restore Previous Settings',
'37' : 'Firmware Update',
'38' : 'System Settings',
'39' : 'Self-Healing',
'1900' : 'Registration',
'132' : 'The Inbound port range is not correct.',
'133' : 'The Private port range is not correct.',
'134' : 'This function will allow you to route external (Internet) calls for services such as a web server (port 80), FTP server (Port 21), or other applications through your Router to your internal network.',
'276' : 'Clear entry',
'277' : 'Add',
'278' : 'Description',
'280' : 'Type',
'281' : 'Private IP address',
'282' : 'Private port',
'376' : 'all',
'411' : 'Clear',
'648' : 'Invalid Character',
'672' : 'Invalid number! Must between 1..65535',
'905' : 'All entries are full.\nPlease remove some entries then try again.',
'906' : 'Do you want to clear entry',
'907' : 'Do you want to clear all entries?',
'1241' : 'WAN IP Address is invalid!',
'1250' : 'Port is invalid!',
'1362' : 'Description is empty',
'1601' : 'Auto',
'2055' : 'Inbound port range overlay!!',
'2056' : 'Private port range overlay',
'3310' : 'Intellistream',
'3311' : 'Optimize your internet connection.',
'3312' : 'Media Server',
'3313' : 'Share media between devices on the network.',
'3314' : 'Parental Controls',
'3315' : 'DNS security filters for internet safety',
'3316' : 'IPv6 connection',
'3317' : 'Your network is now IPv6-compatible',
'1852' : 'This serves as a layer of protection against unsafe/inappropriate websites. The web filters screen sites by checking the name of the website against a list of approved sites.',
'1854' : 'Filtering Options',
'1856' : 'No Filter',
'1858' : 'Block malicious sites',
'1859' : 'Blocks malware, phishing and scam sites.',
'1860' : 'Block malicious and adult sites',
'1861' : 'Blocks malware, phishing, scam sites and sites that contain sexually explicit content.',
'1862' : 'Block Malicious, Adult and other non-family friendly sites',
'1863' : 'Blocks malware, phishing, and scam sites and also sites that contain sexually explicit material, mature content, abortion, alcohol, tobacco, crime, cult, drugs, gambling, hate, suicide or violence.',
'1864' : 'To change your DNS address please continue to Internet WAN > {DNS}',
'7152' : 'The charts below display both WAN outbound and inbound traffic prioritized into different categories. Charts are displaying the last 10 minutes (automatically updating every 5 seconds).',
'7154' : 'Traffic Legend',
'7155' : 'Inbound Traffic',
'7156' : 'Outbound Traffic',
'7157' : 'To activate this feature, please enable Intellistream',
'7158' : 'here',
'7159' : '.',
'7160' : 'Network Connectivity & Control',
'7161' : 'Voice, Video Chat, & Gaming',
'7162' : 'Web & Web Video',
'7163' : 'Email & VPN',
'7164' : 'Downloads, Torrents, & Others',
'7170' : 'Bytes/Sec',
'7174' : 'Time of Day/Hours:Minutes',
'326' : 'Local Network',
'327' : 'LAN/WLAN MAC',
'332' : 'DHCP Server',
'333' : 'Internet Settings',
'334' : 'WAN MAC Address',
'337' : 'WAN IP',
'338' : 'Default Gateway',
'339' : 'DNS Address',
'gtGuestName' : 'Guest SSID',
'gtGuestKey' : 'Guest Key',
'347' : 'You will need to log in before you can change any settings.',
'2022' : 'Modem only',
'2031' : 'Connect',
'2032' : 'Disconnect',
'2033' : 'Noise Margin',
'2034' : 'Downstream',
'2035' : 'Upstream',
'2036' : 'Attenuation(dB)',
'2037' : 'Output power(dBm)',
'2038' : 'Data rate(Kbps)',
'tDashboard' : 'Welcome to your Belkin router dashboard!',
'rtFeature' : 'Features',
'rtLink' : 'Router Links',
'p1310t001' : 'Connection Details',
'p1310t002' : 'Re-test connection',
'p1310t003' : 'Last check',
'p1310t004' : 'Download Speed',
'p1310t005' : 'Upload Speed',
'p1000t001' : 'Connected Devices',
'p1000t002' : 'See all',
'2501' : 'Please Enter the Following Configuration Parameters',
'2502' : 'Network Address',
'2503' : 'Subnet Mask',
'2504' : 'Gateway',
'396' : 'The Subnet mask number you entered is invalid.',
'1231' : 'Gateway is invalid!',
'1361' : 'Invalid IP address, the first number should be between 1 and 254.',
'1800' : 'The IP address and Subnet mask do not match.',
'Support1t011' : 'Read all about it.',
'Support2t011' : 'Read all about it.',
'Support2t012' : 'Pull up the following URL on a device that is connected to the Internet and learn how to fix the problem yourself: <STRONG>www.belkin.com/support/asdlkj</STRONG>',
'Support3t011' : 'Read all about it.',
'Support3t012' : 'Pull up the following URL on a device that is connected to the Internet and learn how to fix the problem yourself: <STRONG>www.belkin.com/support/asdlkj</STRONG>',
'Support6t036' : 'Read all about it.',
'425' : 'This will return your router to its original settings. We recommend that you <a href="ut_save.html">save/backup your settings</a> before restoring the original settings. Saving your router configuration will allow you to restore it if your settings are lost or changed.',
'426' : 'WARNING: All your settings will be lost!\nAre you sure you want to do this?',
'427' : 'Restoring the default settings will take up to $s seconds. Do not turn off power to the Router during this process.',
'428' : 'Will Not Restore Factory Defaults.No Settings Will be lost!',
'429' : 'Restore Defaults',
'301' : 'This reboots your router on a weekly basis for a more problem-free network.',
'302' : 'Auto initialize my router',
'303' : 'Set Days',
'304' : 'Set Time',
'527' : 'This allows you to set your router\'s settings to any configuration you\'ve already saved.',
'528' : 'Restore',
'529' : 'Type the name of the file that contains the backup settings.',
'530' : 'Do you want to continue and restore settings?',
'531' : 'After settings are restored, the device may not respond to commands for as long as one minute.\n\nThis is normal. Do not power down the device during this time.',
'451' : 'Saving your current router configuration will allow you to restore it if your settings are lost or changed. We recommend that you save your settings before making firmware updates.',
'539' : 'Save',
'130' : 'Either you have not entered all of the ip addresses or some of the numbers you entered are invalid. The number in ip address entry box should be between 1 - 254.',
'541' : 'Administrator Password:',
'542' : 'The Router ships with NO password entered. If you wish to add a password for more security, you can set a password here.',
'543' : 'Type in current Password',
'544' : 'Type in new Password',
'545' : 'Confirm new Password',
'546' : 'Login Timeout',
'547' : '(1-99 minutes)',
'548' : 'Time and Time Zone:',
'549' : 'January',
'550' : 'Please set your time Zone. If you are in an area that observes daylight saving check this box.',
'551' : 'Time Zone',
'606' : 'Daylight Savings',
'607' : 'Automatically Adjust Daylight Saving',
'608' : 'Remote Management:',
'609' : 'ADVANCED FEATURE!',
'610' : 'Remote management allows you to make changes to your Router\'s settings from anywhere on the Internet. Before you enable this function,',
'611' : 'MAKE SURE YOU HAVE SET THE ADMINISTRATOR PASSWORD.',
'642' : 'Turning remote management on increases your security risk. Turn it on for short periods only when necessary, turn it off when you are not using it, and please set a password.',
'612' : 'Any IP address can remotely manage the router.',
'613' : 'Only this IP address can remotely &nbsp;&nbsp;&nbsp;manage the router',
'614' : 'Remote Management Enable / Disable',
'615' : 'Assigning Port has been used in Virtual Server.',
'616' : 'Assigning IP conflicts with current WAN IP address.',
'617' : 'UPNP Enabling:',
'618' : 'Allows you to turn the UPNP feature of the Router on or off. If you use applications that support UPnP, enabling UPnP will allow these applications to automatically configure the router.',
'619' : 'UPNP Enable / Disable',
'620' : 'Auto Update Firmware Enabling:',
'621' : 'Allows you to automatically check the availability of firmware updates for your router.',
'622' : 'Auto Update Firmware Enable / &nbsp;&nbsp;&nbsp;Disable',
'623' : 'Current Password is invalid',
'624' : 'The new passwords you entered do not match. Please try again.',
'626' : 'Password length is invalid. The maximum password length is 12 and The minimum password length is 3',
'628' : 'It is strongly recommended that you set your Administrator password.',
'629' : 'Primary NTP Server',
'630' : 'Secondary NTP Server',
'640' : 'Remote Access Port',
'738' : 'Idle time of the numbers you entered are invalid. The number has to be an integer between 1-99.',
'796' : 'Enabling Turbo Mode allows the Router or Access Point to use Frame Bursting to get the maximum throughput from the Router or Access Point to 802.11g clients. Turbo mode will work with 802.11g clients that support Turbo Mode. Belkin 802.11g Clients using the latest driver will support Turbo Mode. Clients that do not support Turbo Mode will operate normally if Turbo Mode is enabled.',
'1282' : 'February',
'1283' : 'March',
'1284' : 'April',
'1285' : 'May',
'1286' : 'June',
'1287' : 'July',
'1288' : 'August',
'1289' : 'September',
'1290' : 'October',
'1291' : 'November',
'1292' : 'December',
'1373' : 'Australia',
'1374' : 'New Zealand',
'1375' : 'North America',
'1376' : 'Europe',
'1377' : 'Asia Pacific',
'2300' : '(GMT-12:00) Enewetak, Kwajalein',
'2301' : '(GMT-11:00) Midway Island, Samoa',
'2302' : '(GMT-10:00) Hawaii',
'2303' : '(GMT-09:00) Alaska',
'2304' : '(GMT-08:00) Pacific Time (US & Canada); Tijuana',
'2305' : '(GMT-07:00) Arizona',
'2306' : '(GMT-07:00) Mountain Time (US & Canada)',
'2307' : '(GMT-06:00) Central Time (US & Canada)',
'2308' : '(GMT-06:00) Mexico City',
'2309' : '(GMT-06:00) Tegucigalpa',
'2310' : '(GMT-06:00) Saskatchewan',
'2311' : '(GMT-05:00) Bogota, Lima, Quito',
'2312' : '(GMT-05:00) Eastern Time (US & Canada)',
'2313' : '(GMT-05:00) Indiana (East)',
'2314' : '(GMT-04:00) Atlantic Time (Canada)',
'2315' : '(GMT-04:00) Caracas, La Paz',
'2316' : '(GMT-04:00) Santiago',
'2317' : '(GMT-03:00) Newfoundland',
'2318' : '(GMT-03:00) Brasilia',
'2319' : '(GMT-03:00) Buenos Aires, Georgetown',
'2320' : '(GMT-02:00) Mid-Atlantic',
'2321' : '(GMT-01:00) Azores, Cape Verde Is.',
'2322' : '(GMT) Casablanca, Monrovia',
'2323' : '(GMT) Greenwich Mean Time: Lisbon, London, Edinburgh',
'2324' : '(GMT) Greenwich Mean Time: Dublin',
'2325' : '(GMT+01:00) Amsterdam, Berlin, Bern, Rome',
'2326' : '(GMT+01:00) Stockholm, Vienna, Belgrade',
'2327' : '(GMT+01:00) Bratislava, Budapest, Ljubljana',
'2328' : '(GMT+01:00) Prague,Brussels, Copenhagen, Madrid',
'2329' : '(GMT+01:00) Paris, Sarajevo, Skopje',
'2330' : '(GMT+01:00) Warsaw, Zagreb',
'2331' : '(GMT+02:00) Athens, Istanbul, Minsk, Vilnius, Sofia',
'2332' : '(GMT+02:00) Bucharest',
'2333' : '(GMT+02:00) Cairo',
'2334' : '(GMT+02:00) Harare, Pretoria',
'2335' : '(GMT+02:00) Helsinki, Riga, Tallinn',
'2336' : '(GMT+02:00) Israel',
'2337' : '(GMT+03:00) Baghdad, Kuwait, Nairobi, Riyadh',
'2338' : '(GMT+03:00) Moscow, St. Petersburg,Volgograd, Kazan',
'2339' : '(GMT+03:00) Tehran',
'2340' : '(GMT+04:00) Abu Dhabi, Muscat, Tbilisi',
'2341' : '(GMT+04:00) Kabul',
'2342' : '(GMT+05:00) Islamabad, Karachi, Ekaterinburg',
'2343' : '(GMT+05:30) Delhi',
'2344' : '(GMT+06:00) Almaty,Dhaka',
'2345' : '(GMT+07:00) Bangkok, Jakarta, Hanoi',
'2346' : '(GMT+08:00) Beijing, Chongqing, Urumqi',
'2347' : '(GMT+08:00) Hong Kong, Perth, Singapore, Taipei',
'2348' : '(GMT+09:00) Toyko, Osaka, Sapporo',
'2349' : '(GMT+09:00) Seoul',
'2350' : '(GMT+09:30) Adelaide, Darwin',
'2351' : '(GMT+10:00) Brisbane',
'2352' : '(GMT+10:00) Canberra, Melbourne, Sydney',
'2353' : '(GMT+10:00) Hobart',
'2354' : '(GMT+10:00) Guam, Port Moresby',
'2355' : '(GMT+11:00) Magadan, Solamon, New Caledonia',
'2356' : '(GMT+12:00) Wellington, Auckland',
'2357' : '(GMT+12:00) Fiji',
'2358' : '(GMT+13:00) Nuku`alofa.',
'2370' : 'Su',
'2371' : 'M',
'2372' : 'T',
'2373' : 'W',
'2374' : 'Th',
'2375' : 'F',
'2376' : 'Sa',
'2401' : 'ECO Mode',
'2402' : 'Dim front panel LEDs',
'2403' : 'Disable radio from',
'2404' : 'except',
'2405' : 'This function allows you to dim the LED\'s on the front of the router to save power. You can also disable the wireless radio at predetermined times.',
'2406' : 'Starting time can not be later than ending time!',
'322' : 'Firmware Version',
'431' : 'From time to time, Belkin may release new versions of your router\'s operating programming. These updates contain improvements and fixes for your router.',
'432' : '<b>NOTE:</b> Please <a href="ut_save.html">backup your current settings</a> before updating to a new version of firmware.',
'433' : 'Click Here',
'434' : 'to go to the Save/Backup current settings page.',
'435' : 'Check for New Firmware Version',
'436' : 'Check Firmware',
'437' : 'Update Firmware',
'438' : 'Update',
'439' : 'Please specify the upgrade file\'s location. Either type the file\'s path and file name or click "Browse" to browse to the file\'s location.',
'440' : 'Are you sure you want to continue with upgrading?',
'441' : 'At the end of the upgrade, the Router may not respond to commands for as long as one minute. This is normal. Do not turn off or reboot the Router during this time.',
'1198' : 'Firmware update in progress.',
'534' : 'Restart Router',
'535' : 'Are you sure you want to restart the Router? Restarting the Router will not affect your configuration',
'536' : 'Allow up to $s seconds for the Router to restart. Do not power down the Router before reset completes.',
'7001' : 'Enjoy personal music, photos, and videos conveniently through any DLNA device connected to your network. Powered by Twonky.',
'7002' : 'DLNA Server',
'7003' : 'Server Name',
'7004' : 'Shared Drives:',
'7005' : 'Ready',
'7006' : 'Indexing...',
'7007' : 'Serving:',
'7008' : 'videos',
'7009' : 'songs',
'7010' : 'pictures',
'7011' : 'Not shared with the network.',
'7012' : 'There are no USB drives connected to the router.',
'7016' : 'Refresh Index',
'7017' : 'Please input friendly name for media server',
'7018' : 'Not allowed character',
'7019' : 'You have more media than your router can index,so we\'re serving the first',
'7020' : 'items.',
'7021' : 'Twonky is a line of digital home software products created by PacketVideo Corporation (PV).',
'7022' : 'Cannot index read-only drive.',
'7023' : 'MB',
'7024' : 'GB',
'7025' : 'TB',
'7026' : 'video',
'7027' : 'song',
'7028' : 'picture',
'770' : 'Use this option for Bigpond Cable and OptusNet Cable connections only. ',
'771' : 'IMPORTANT:',
'775' : '3) Reconnect the power cable to the Belkin Router.',
'776' : 'To confirm you are successfully connected to the Internet, open an Internet browser such as Internet Explorer, Firefox and Safari and ensure that you can browse web pages.',
'731' : 'User Name',
'489' : 'Password',
'732' : 'Retype Password',
'756' : 'Please re-enter your password!',
'1379' : 'Either you have not entered all the IP numbers, or some of the numbers you entered are invalid. The IP address should be as x.y.y.x(where y is anything between 0 and 255 and x is anything between 1 and 254).',
'709' : 'To enter your Dynamic IP settings, type in your information below and click "Save".',
'710' : 'Host Name',
'711' : 'Host Name = A name that some Internet Service Providers require for connection to their system.',
'712' : 'Change WAN MAC Address',
'330' : 'IP address',
'331' : 'Subnet mask',
'659' : 'Invalid MTU, must be between 500...1500.',
'730' : 'To enter your PPPoE settings, type in your information below and click "Save".',
'733' : 'Service Name (Optional)',
'734' : 'MTU (500-1500)',
'735' : 'Please do not change the MTU setting unless your ISP requires a different value',
'736' : 'Disconnect after',
'737' : 'minutes of inactivity.',
'741' : 'Invalid MTU value',
'2005' : 'IP assigned by ISP',
'2021' : 'Click here to enter your DNS Settings',
'2023' : 'Double quotes are not allowed.',
'2024' : 'User name contain unacceptable characters',
'2025' : 'Back slash is not allowed.',
'2030' : 'Either you have not entered all the Default Gateway or some of the numbers you entered are invalid. The numbers should be between 0 and 255',
'2052' : 'Password contain unacceptable characters(<,> and &)',
'691' : 'A Dynamic type of connection is the most common. If you use a cable modem, then most likely you will have a dynamic connection. If you have a cable modem or you are not sure of your connection type, use this.',
'723' : 'Including ISPs that require a host name and ISPs that bind the connection to a specific MAC address.',
'693' : 'A Static IP address connection type is less common than others. Use this selection only if your ISP gave you an IP address that never changes.',
'724' : 'The Router supports a connection to an ISP which assigns a static IP address.',
'695' : 'If you use a DSL modem and/or your ISP gave you a User Name and Password, then your connection type is PPPoE. Use this connection type.',
'725' : 'The Router supports a dynamic connection type which requires a PPPoE login for authentication.',
'697' : 'Some ISPs use the PPTP protocol to connect subscribers to the central office. This requires you to enter a handful of additional settings which your ISP should have provided. Once you have saved your changes, the Internet status indicator will show green if you\'ve been successful.',
'726' : 'For use only with ISPs that require the PPTP connection method.',
'699' : 'Use this option for Bigpond Cable and OptusNet Cable connections only.',
'728' : 'Australian users ONLY. The router supports connection to Telstra BigPond.',
'2019' : 'To enter your Modem settings, type in your information below and click "Save".',
'tBackToConnectionType' : 'Back to Connection Type',
'759' : 'To enter your Static IP settings, type in your information below and click "Save".',
'761' : 'Subnet Mask',
'762' : 'ISP Gateway Address',
'754' : 'Click here to enter your DNS Settings',
'715' : 'Each device on your network has a unique hardware address (MAC address) that identifies it to other devices on the network and the Internet.  A few Internet service providers (ISP) require that you put the MAC address from your network card or older router into the router settings. If you\'re not sure, enter the MAC address of the computer that was originally connected to the modem before installing the router.',
'716' : 'WAN MAC Address',
'717' : 'Clone Computer\'s MAC Address',
'718' : 'Clone',
'721' : 'The Internet/WAN Tab is where you will set up your Router to connect to your Internet Service Provider. The Router is capable of connecting to virtually any Internet Service Provider\'s system provided that you have correctly configured the Router\'s settings for your ISP\'s connection type. To configure the Router to connect to your ISP, click on "Connection type" on the Internet/WAN Tab on the left of the screen.',
'722' : 'Connection types supported:',
'htWANMainContent' : 'Select connection type:',
'700' : 'Next',
'744' : 'PPTP Account',
'745' : 'Password',
'746' : 'Retype Password',
'747' : 'Host Name',
'1770' : 'IP Assigned by ISP',
'1771' : 'Yes',
'1772' : 'No',
'1773' : 'Service Address',
'750' : 'Subnet Mask',
'778' : 'The Router can be configured to act as strictly an Access Point, bypassing all of the routing and firewall functions. To do so, select "Enable" and type in the IP address you want the Access point to have.',
'779' : 'Access Point Mode:',
'781' : 'Specify Subnetmask',
'801' : 'Security Mode',
'806' : 'You can configure wireless security/encryption settings here. Security should be enabled to assure maximum wireless security. WPA (Wi-Fi Protected Access) provides dynamic key changes and constitutes the best security solution. In wireless environments, where not all devices support WPA, WEP (Wired Equivalent Privacy) should be used.',
'377' : 'Auto',
'487' : 'ON',
'488' : 'OFF',
'787' : 'To make changes to the wireless settings of the router, make the changes here. Click "Save" to save the settings.',
'788' : 'Wireless Channel',
'789' : 'SSID',
'790' : 'Wireless Mode',
'794' : 'Broadcast SSID',
'797' : 'Protected Mode',
'1300' : 'Extension Channel',
'1301' : 'Bandwidth',
'1304' : '802.11e/WMM QoS',
'852' : 'The length of pre-shared key should be 8 to 63 or 64 Hex',
'856' : 'Wi-Fi Protected Access with a Pre-shared Key: The key is a password, in the form of a word, phrase or series of letters and numbers. The key must be between <b>8</b> and <b>63</b> characters long and can include spaces and symbols, or <b>64</b> Hex (0-F) only. Each client that connects to the network must use the same key (Pre-shared Key).',
'115' : 'Either you have not entered all of the hex digits or some of the hex digits you entered are invalid. A hex digit can be a number from 0-9 or a letter from A-F.',
'308' : '<b>SPI</b> Stateful Packet Inspection. SPI is the type of corporate-grade Internet security provided by your HomeConnect home network gateway. Using SPI, the gateway acts as a "firewall," protecting your network from computer hackers.',
'808' : 'NOTE:',
'809' : 'To automatically generate hex pairs using a PassPhrase, push the button on the right and input the passphrase here',
'810' : 'PassPhrase',
'811' : 'Generate',
'812' : 'Please enter a PassPhrase',
'814' : 'Key',
'818' : '(hex digit pairs)',
'296' : '<b>IP Address</b> IP stands for Internet Protocol. An IP address consists of a series of four numbers separated by periods, that identifies an single, unique Internet computer host. Example: 192.34.45.8.',
'298' : '<b>ISP</b> Internet Service Provider. An ISP is a business that provides connectivity to the Internet for individuals and other businesses or organizations.',
'807' : '(13 hex digit pairs)',
'813' : 'Key is not complete',
'821' : 'is not complete',
'1190' : '<br>To register for your Dynamic DNS host name, please visit http://www.dyn.com<br>',
'1339' : 'It is recommended to use WPA/WPA2 when WPS is enabled.',
'1363' : 'In Progress - Please wait...',
'1364' : 'Error Detected - Please try again.',
'1365' : 'Session overlap error: Please wait 60 seconds before starting the process again or refer to your client utility to manually connect to this network',
'1366' : 'Success - The device is connected to the Router.',
'1370' : 'Invalid PIN! The device PIN is either four or eight numeric digits. Please verify and enter again.',
'1620' : 'Initiating - Please start WPS PBC in client device within 2 minutes.',
'1621' : 'Initiating - Please start WPS in client device within 2 minutes.',
'1622' : 'Time out - No client connects to the Router.',
'1623' : 'Wi-Fi Protected Setup Message',
'1393' : 'WPS hardware button',
'1320' : 'Wi-Fi Protected Setup (WPS) is the industry standard method to simplify the security setup and management of the Wi-Fi networks. You now can easily setup and connect to a WPA-enabled 802.11 network with WPS-certificated devices using either Personal Information Number (PIN) or Push Button Configuration (PBC) method. Legacy devices without WPS can be added to the network using the traditional manual configuration method.',
'1321' : 'Personal Information Number (PIN) Method',
'1322' : 'Enter the PIN from the client device and click "Enroll". Then start WPS on the client device from it\'s wireless utility or WPS application within 2 minutes',
'1323' : 'Enter Client Device PIN',
'1324' : 'Enroll',
'1325' : 'If an external registrar is available, you can also enter Router\'s PIN at the external registrar. To change Router\'s PIN, click "Generate New PIN" or click "Restore Default PIN" to reset the PIN to factory default.',
'1326' : 'Router PIN',
'1327' : 'Generate New PIN',
'1328' : 'Restore Default PIN',
'1329' : 'Push Button Configuration (PBC) Method',
'1330' : 'Push and hold PBC button on your Router for 3 seconds or click "Start PBC". Then start PBC on the device you want to connect to the Router within 2 minutes.',
'1331' : 'Start PBC',
'1332' : 'Manual Configuration Method',
'1333' : 'For client devices without WPS, manually configure the device with the following settings.',
'1334' : 'Wireless Security',
'1336' : 'Network Authentication',
'1337' : 'Data Encryption',
'1338' : 'Network Key (PSK)',
'1340' : 'Unlock Router PIN',
'1341' : 'Router PIN disabled due to excessive failed access attempts',
'1390' : 'PIN check sum failed! Please verify and enter again.',
'1391' : 'Invalid PIN! The device PIN is eight numeric digits. Please verify and enter again.',
'1392' : 'Configured',
'1396' : 'Manually configure wireless security',
'1397' : 'wireless security',
'common_err1' : '%s is NULL',
'upgrade_err2' : 'Firmware upgrade terminated due to insufficient resources.Upgrade failed.\nPlease try again when system is idle (no Internet traffic)',
'upgrade_err3' : 'Cannot upload, please contact administrator.',
'upgrade_err4' : 'Firmware is too large, upgrade failed.',
'upgrade_err5' : 'You already have the lastest firmware installed.',
'upgrade_err6' : 'It appears that the firmware update has been corrupted. Please re-download the firmware file and try again.',
'show10' : 'DHCP Client List',
'show54' : 'Connection Settings',
'btn2' : 'Apply Changes',
'cff1' : 'Check Firmware Successfully',
'PM2' : ':30 PM',
'AM2' : ':30 AM',
'Dimicons' : 'Dim icons',
'EcoTo' : 'to',
'fvrm' : 'Please disable Remote Management. Because its port has a collision with one of your virtual servers\' inbound port.',
'lsipm2' : 'Invalid Lan Ip address, the last number cannot be 0 or 255',
'lsldnm' : 'Invalid Local Domain Name: `~!@#$%^&*()_+[]{}\|;:\'"<>/?.,',
'lsipm5' : 'The IP address you choose should be a non-routable IP.\n  192.168.x.x (where x is anything between 0 and 255.) \n10.x.x.x (where x is anything between 0 and 255.)\n172.y.x.x (where y is anything from 16 to 31, and x is anything between 0 and 255.)',
'ufy4' : 'Restoring the default settings will take up to 60 seconds. Do not turn off power to the Router during this process.',
'ufe11' : 'At the end of the upgrade, the Router may not respond to commands for as long as 180 seconds. This is normal. Do not turn off or reboot the Router during this time.',
'ur5' : 'Allow up to 30 seconds for the Router to restart. Do not power down the Router before reset completes.',
'ur6' : 'Allow up to 60 seconds for the Router to restart. Do not power down the Router before reset completes.',
'usys83' : 'New Password and Confirm New Password fields do not match',
'usys83_1' : 'Password and confirm password do not match.',
'usys85_1' : 'Administration password length should be between 3 and 12.',
'usys88' : 'The password has reached its max length!',
'usys89' : 'AM',
'usys90' : 'PM',
'usys92' : 'The remote access port number should be from 1 to 65535.',
'usysipm' : 'Either you have not entered all the IP numbers, or some of the numbers you entered are invalid. The IP address should be as x.y.y.z(where x is anything from 1 to 223, y is anything from 0 to 255 and z is anything from 1 to 254).',
'self_healing60' : 'Self Healing',
'chkwait' : 'Checking for newer firmware...',
'Europe' : 'Europe',
'Australia' : 'Australia & NZ',
'AsiaPacific' : 'Asia Pacific',
'NorthAmerica' : 'North America',
'vjs1' : 'Invalid IP address, too long, Please check again',
'vjs2' : 'Invalid IP address, missing \'.\' , Please check again!',
'vjs3' : 'Invalid IP address, missing numbers between \'.\', Please check again!',
'vjs4' : 'Invalid IP address, extra \'.\' , Please check again!',
'vjs5' : 'Invalid IP address, numbers between \'.\' are too big, Please check again!',
'vm1' : 'Invalid Character ',
'vm2' : ' at Position ',
'vm3' : 'Must be ',
'vjs6' : 'Invalid year format, please enter as (e.g. 2002)',
'vm4' : 'Invalid number ',
'vjs8' : 'Invalid,must between 1970..2037',
'vjs9' : 'Invalid month format, please enter as (e.g. 01...12)',
'vjs161' : ' not in ',
'vjs162' : ' netmask',
'vjs163' : 'Allowed DHCP range is ',
'vjs17' : 'You typed two different passwords, please double check again!',
'vjs18' : 'Please enter start port number.',
'vjs19' : 'Start port number should be smaller than end port number.',
'vjs23' : 'Invalid MAC address, it is a broadcast address.',
'vjs24' : 'Invalid MAC address, it is a null address.',
'vjs25' : 'Invalid MAC address, it is a multicast address.',
'vjs26' : 'Invalid start and end IP address, end IP should be larger than start IP.',
'vjs28' : 'Invalid netmask format.',
'vjs29' : 'Invalid format, netmask here must be 255.255.255.0 or 255.255.255.128 or 255.255.255.192 or 255.255.255.224 or 255.255.255.240 or 255.255.255.248 or 255.255.255.252 or 255.255.255.254',
'vjs30' : 'Invalid Ip address, the last number cannot be 0 or 255',
'vjs31' : 'Invalid Lan Ip address, the first number cannot be 127',
'vjs32' : 'Invalid Lan Ip address, cannot be 0.0.0.0',
'vjs33' : 'Invalid Lan Ip address, must under 224.0.0.0',
'vjs42' : 'The subnet mask numbers you entered are invalid.',
'vjs45' : 'Specify IP Address',
'vjs46' : 'is invalid, please correct it first!',
'wcc2' : 'Select your connection type:',
'wcc13' : 'L2TP',
'wcc14' : 'Some ISPs use the L2TP protocol to connect subscribers to the central office. This requires you to enter a handful of additional settings which your ISP should have provided. Once you have saved your changes, the Internet status indicator will show green if you\'ve been successful.',
'wds4_1' : 'Primary DNS address',
'wds7' : 'You must enter the DNS settings provided by your ISP if you don\'t use the Automatic DNS function',
'wds8' : 'To make DNS changes, first visit %s Website Filters %s and select "No filters".',
'wmc6' : 'WAN MAC address can not be the same with LAN MAC address. Please choose another one.',
'wdd9 ' : 'No DDNS Service selected.\n',
'wdd10' : 'No DDNS Service selected and all data in this page will be lost, continue?',
'wm10b' : 'For use only with ISPs that require the L2TP connection method.',
'pm' : 'Your service was not able to verify the password that you entered. Please confirm that you typed your password correctly.',
'wpp17' : 'L2TP Account',
'wpp18' : 'L2TP Password',
'wpp19' : 'Please enter your L2TP Account',
'wpp23' : 'IP Address Assignment',
'wpp24' : 'Use Static IP Address',
'wpp25' : 'Get Dynamically From ISP',
'wppa7' : 'My IP Address',
'wppa9' : 'Connection ID (optional)',
'wppa13' : 'Please enter your PPTP Account',
'wppa18' : 'Invalid Service Name.',
'ws2' : 'To enter your Static IP settings, type in your information below and click "Apply changes".',
'sm_1' : 'The subnet mask you entered are invalid.',
'ws8' : 'Please enter/validate your DNS address settings on the following screen',
'wt2' : 'Clicking Apply Changes will reboot the router. Once the router has rebooted you will need to do the following',
'wt3' : '1) Unplug the power cable from both the Cable Modem and the Belkin Router',
'wt4' : '2) Re-connect the power cable to the Cable Modem, wait until all the lights on the modem have stopped flashing',
'wt5' : '3) Re-connect the power cable to the Belkin Router',
'wt6' : 'To confirm you are successfully connected to the Internet, open an Internet browser such as Internet Explorer, Firefox and Safari and ensure that you can browse web pages.',
'wlad2' : 'Enable / Disable',
'wlc2' : 'To make changes to the wireless settings of the router, make the changes here. Click "Apply Changes" to save the settings.',
'wlcgb' : '802.11b+g',
'wlcg' : '802.11g',
'wlcb' : '802.11b',
'wlc20' : '20MHz',
'wlc22' : '20/40MHz',
'wlcoff' : 'OFF',
'wlcngb1' : '802.11b & 802.11g & 1x1 802.11n',
'wlcn1' : '1x1 802.11n',
'wlcngb2' : '802.11b & 802.11g & 802.11n',
'wlcn2' : '802.11n',
'wlcgn' : '802.11g+n',
'wlca' : '802.11a',
'wlcan' : '802.11a & 802.11n',
'wlc26' : 'Hiding your network name will disable WPS.',
'wlc27' : 'Changing your security type will disable WPS.',
'wlc28' : 'WPS is disabled due to your <A href=%s><B>wireless security type</B></A>.',
'wlc29' : 'WPS is disabled because you\'ve hidden your network name(SSID).',
'wlc30' : 'WPS is disabled since you\'ve hidden your network name(SSID) and due to your <A href=%s><B>wireless security type</B></A>.',
'wlc31' : 'Turning on WPS will un-hide your network name(SSID).',
'wlc32' : 'Turning on WPS will change your security type to WPA/WPA2. Your current network password will work just fine.',
'wlc33' : 'Turning on WPS will un-hide your network name(SSID) and change your security type to WPA/WPA2. Your current network password will work just fine.',
'wle3a' : 'WPA-PSK',
'wle3b' : 'WPA2-PSK',
'wle3c' : 'WPA-PSK + WPA2-PSK',
'wps1' : 'Wi-Fi Protected Setup (WPS)',
'wps3' : 'Please configure wireless security',
'wps17' : 'For client devices without WPS,please run Belkin Security Assistant from CD or manually configure the device with the following settings:',
'wps23' : 'WPA+WPA2-Personal (PSK)',
'wps25' : 'TKIP+AES',
'wps27' : 'Network Key (WEP):',
'wps28_1' : 'NULL',
'wle11' : 'Key 1',
'wle12' : 'Key 2',
'wle13' : 'Key 3',
'wle14' : 'Key 4',
'wpskerr2' : 'The key must be between 8 and 63 characters long and can include spaces and symbols, or 64 Hex (0-F) only!',
'wpskerr4' : 'You must input the Guest Key',
'wpskerr7' : 'The Guest Key must be 8 characters',
'wpskerr8' : 'The Guest Key must not be the same as Network Key',
'wlguest1' : 'The SSID must not be the same as Guest SSID',
'wlguest2' : 'The Guest SSID must not be the same as SSID',
'rs_crc' : 'Restore failure < CRC >',
'rs_long' : 'Restore failure <too long>',
'rs_disposition' : 'Restore failure <No Content-Disposition>',
'rs_getpid' : 'Restore failure <Can\'t get pid!>',
'rs_unmatchpid' : 'Restore failure <Unmatched pid>',
'msg_ddns3 ' : 'Domain name fields can not be blank.\n',
'msg_lan_dhcp1 ' : 'Requesting information from the Gateway.',
'msg_lan_dhcp2 ' : 'Updating configuration database.',
'msg_wan_stat1 ' : 'IP address ',
'msg_wan_stat2 ' : ' is not in ',
'msg_wan_stat3 ' : ' network.',
'msg_wls_chan2 ' : 'Guest SSID can not be set as NULL!\n',
'fw_not_interrupt ' : 'DO NOT INTERRUPT OR UNPLUG THE ROUTER, doing so could render the Router inoperable.',
'msg_invalid_char ' : 'Invalid Character(s) found. Valid characters are: 0-9, a-z, A-Z, `~!@#$%^&*()_-+=|\\{}[]:";\',.<>/?',
'msg_invalid_domain_char ' : 'Invalid Local Domain Name'+': ~!@#$%^&*()=+{}[]|":;\\\'?/<>,`',
'msg_invalid_char_1 ' : 'Invalid Character(s) found. Valid characters are letters and numbers .The following symbols is invalid: `~!@#$%^&*()_+[]{}\\|;:\'"<>/?.,',
'msg_hostIP_invalid ' : 'The host IP address is invalid. It should not be the Router\'s LAN IP.\n',
'msg_dmzIP ' : 'DMZ IP Address.',
'msg_blank ' : ' can not be blank.\n',
'msg_space ' : 'Blanks or spaces are not allowed in %s\n',
'msg_blank_in ' : 'Blanks are not allowed in %s\n',
'msg_allspaces ' : '%s cannot consist solely of spaces\n',
'msg_invalid ' : 'Invalid character or characters in %s\nValid characters are: \n%s\n\n',
'msg_check_invalid ' : '%s contains an invalid number\n',
'msg_valid_range ' : '%s is invalid. Valid range is %s to %s\n',
'msg_invalid_mac ' : 'Invalid MAC address.\n',
'msg_multi_mac' : 'The MAC address can\'t be multicast address.\n',
'msg_confirmDefault ' : 'Warning!\nLoading the Factory Default Settings will erase all the current settings.\nAre you sure you wish to do this?',
'Allowed_Services' : 'Allowed Services',
'Allowing_Url' : 'Website Allowing by URL Address ',
'Allowing_Keyword' : 'Website Allowing by keyword',
'wipv63' : 'Devices connected to your router can talk to each other using native IPv6 packets. IPv6 packets on the LAN will automatically be sent to all LAN interfaces(Ethernet ports and both 2.4 GHz and 5 GHz wireless networks).',
'wipv64' : 'When IPv6 pass-through is enabled, IPv6 packets will also be copied to the WAN interface.(When enabled, this creates a direct, non-secure connection to the internet.)',
'wipv65' : 'Please contact your ISP directly for information about their support for IPv6.',
'wipv67' : 'Internet IPv6',
'wipv68' : 'Your network is IPv6-compatible.',
'wipv69' : 'Pass-Through',
'mf1' : 'These pages allow you to adjust the behavior of your router when presented with certain types of media traffic.',
'mf2' : 'Automatically optimize your internet connection for different types of traffic.',
'mf3' : 'See how your router is being used.',
'mf8' : 'Recorded on %s',
'mf10' : 'Download',
'mf11' : 'Upload',
'mf12' : 'Speed',
'mf15' : 'Apply Settings',
'mf18' : 'Enter between the number {0.1-%s}.',
'mf20' : 'Between {0.1-%s} only.',
'mf26' : 'Manually recorded on %s',
'mf32' : 'or',
'mf44' : 'The automatic speed test results may not be 100% accurate based upon internet traffic or other conditions. To compare results please visit a speed test website or contact your ISP to confirm your internet speeds. If the speed results are inconsistent you may enter the values manually.',
'media_dlna18' : 'Untitled',
'media_dlna21' : 'You have more media than your router can index, so we\'re serving the first 12000 items.',
'errSubnetMaskInvalid_2' : 'The subnet mask doesn\'t look like a subnet mask. Please check the value.',
'htWAN_L2TP' : 'L2TP Settings',
'htWAN_L2TPContent' : 'Some ISPs use the L2TP protocol to connect subscribers to the central office. This requires you to enter a handful of additional settings which your ISP should have provided. Once you have saved your changes, the Internet status indicator will show green if you\'ve been successful.',
'p400t001_error' : 'Get everything connected quicker.',
'p400t018_error' : 'Why should I rename?',
'p400t019_error' : 'This is what you\'ll see when you search for your network from other devices. Unique network names are easier to find and remember. If your various wireless devices were previously connected to a different router, using the same network name and password here will mean not having to tell them about a new one; they\'ll connect automatically. ',
'dhToggleBand2G' : 'Show 2.4GHz',
'772' : 'Clicking Apply Changes will reboot the router. Once the router has rebooted you will need to do the following',
'773' : '1) Unplug the power cable from both the Cable Modem and the Belkin Router',
'774' : '2) Reconnect the power cable to the Cable Modem, wait until all the lights on the modem have stopped flashing',
'dft001' : 'It looks like you\'re not connected.',
'dft002' : 'If you need support and have a connected device, visit<strong>help.belkin.com</strong>.',
'gtNoSecCard?????' : 'Please write down your network name and password so you can refer to it later.',
'gtFWUpdateMobileError' : 'Firmware files currently cannot be uploaded from mobile devices.',
'gtSettingsMobileError' : 'Settings files currently cannot be uploaded from mobile devices.',
'gtMoreFromInternet' : 'Connect to Internet for more',
'gtCantConnect' : 'We can\'t connect to the Internet.',
'p802t004' : 'Go to your device¡¯s wireless network menu',
'p803t004' : 'Go to your device¡¯s wireless network menu',
'PIC-S1t001' : 'Block All Devices',
'gtUnnamedDevice' : 'Unnamed Device',
'gtIC' : 'Internet Control',
'errDefaultGatewayEmpty' : 'The default gateway address can\'t be blank.',
'errDefaultGatewayInvalid' : 'The default gateway address must be four numbers (0-255) separated by periods. Please check the value.',
'errDNSServerEmpty' : 'The DNS server address can\'t be blank.',
'errDNSServerInvalid' : 'The DNS server address must be four numbers (0-255) separated by periods. Please check the value.',
'errIpAddressEmpty' : 'The IP address can\'t be blank.',
'errIpAddressInvalid' : 'The IP address must be four numbers (0-255) separated by periods. Please check the value.',
'errorGenericCommitError' : 'There was an error.  Please correct the settings below and try again.',
'errorSSIDEmpty' : 'Please enter a name for your wireless network.',
'errorSSIDInvalidChars' : 'Your network name can only contain letters, numbers, punctuation, and spaces.',
'errorSSIDTooLong' : 'Your network name must be shorter than 32 characters.',
'errorWEPPasswordEmpty' : 'Please enter a password to secure your wireless network.',
'errorWEPPasswordInvalidChars' : 'Your network password can only contain numbers and the letters A through F.',
'errorWEPPasswordInvalidLength' : 'Your network password must be 10 or 26 characters long.',
'errorWPAPasswordEmpty' : 'Please enter a password to secure your wireless network.',
'errorWPAPasswordInvalidChars' : 'Your network password can only contain letters, numbers, punctuation, and spaces.',
'errorWPAPasswordInvalidLength' : 'Your network password must be 8-63 characters long.',
'errPasswordEmpty' : 'Please enter your password.',
'errPasswordInvalid' : 'Your username can only contain letters, numbers, punctuation, and spaces.',
'errPasswordTooLong' : 'Your password must be less than 64 characters long.',
'errServAddressEmpty' : 'Please enter a service address.',
'errSubnetMaskEmpty' : 'The subnet mask can\'t be blank.',
'errSubnetMaskInvalid' : 'The subnet mask must be four numbers (0-255) separated by periods. Please check the value.',
'errUsernameInvalid' : 'Your username can only contain letters, numbers, punctuation, and spaces.',
'errUsernameTooLong' : 'Your username must be less than 64 characters long.',
'errVCIInvalid' : 'Please enter a number between 0 and 65535. Your ISP will be able to tell you the right value to use.',
'errVPIInvalid' : 'Please enter a number between 0 and 255. Your ISP will be able to tell you the right value to use.',
'p802t003' : 'Since some settings have changed, you might need to re-select your wireless network:',
'p802t011' : 'Since some settings have changed, you might need to re-select your wireless network:',
'dft003' : 'Need Help?',
'dft004' : 'Have a question or need some support? You can get 24-hour help in our online help center.<br><a href="http://www.belkin.com/support/" id="dfBelkinHelp">Belkin Help Center &rarr;</a>',
'dhChangeSSID' : 'Change &raquo;',
'dhPassLabel' : 'Password:',
'dhPasswordObscured24' : 't********',
'dhShow' : 'Show:',
'dhSSID24' : '{blahblah}',
'dhToggle24' : '2.4 Ghz',
'dhToggle5' : '5.0 Ghz',
'DownSpeed' : '32.6',
'errUsernameEmpty' : 'Please enter your username.',
'gt10am' : '10:00 am',
'gt10pm' : '10:00 pm',
'gt11am' : '11:00 am',
'gt11pm' : '11:00 pm',
'gt1am' : '1:00 am',
'gt1amNextDay' : '1:00 am next day',
'gt1pm' : '1:00 pm',
'gt24ghz' : '2.4Ghz',
'gt24GKey' : '2.4GHz Key',
'gt24GName' : '2.4 GHz SSID',
'gt24PSK' : 'Password',
'gt24Sec' : 'WPA2',
'gt24SSID' : '12345678',
'gt2am' : '2:00 am',
'gt2pm' : '2:00 pm',
'gt3am' : '3:00 am',
'gt3pm' : '3:00 pm',
'gt4am' : '4:00 am',
'gt4pm' : '4:00 pm',
'gt50ghz' : '5 Ghz',
'gt5am' : '5:00 am',
'gtGuestKey' : 'Guest Key',
'gt5GMedia' : 'Your 5Ghz band has the same name, but with ".media" added to the end.',
'gtGuestName' : 'Guest SSID',
'gt5pm' : '5:00 pm',
'gt6am' : '6:00 am',
'gt6pm' : '6:00 pm',
'gt7am' : '7:00 am',
'gt7pm' : '7:00 pm',
'gt8am' : '8:00 am',
'gt8pm' : '8:00 pm',
'gt9am' : '9:00 am',
'gt9pm' : '9:00 pm',
'gtAccessControl' : 'Parental Internet Control',
'gtAccessPoint' : 'Use as Access Point',
'gtADSL' : 'ADSL',
'gtAdvSettings' : 'Advanced Settings',
'gtAllElseFails' : 'If all else fails, call Belkin Support in&nbsp;',
'gtAndroidConnect01' : 'Android phones and tablets',
'gtAndroidConnect02' : 'Your device provides a menu of available wireless networks in the Settings app.',
'gtAndroidConnect03' : 'Open the <strong>Settings</strong> app and select <strong>Wireless and network</strong>.',
'gtAndroidConnect04' : 'From there, select <strong>Wi-Fi</strong> to see the list of available networks.',
'gtAndroidConnect05' : 'Select <strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong>. <!-- IF NOT OPEN --> <span tid="gtNotOpen">If asked, enter the network password <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>.</span> <!-- /IF -->',
'gtAt' : 'at',
'gtAttenuation' : 'Attenuation',
'gtAustralia' : 'Australia',
'gtBackToDashboard' : '&larr; Back to Dashboard',
'gtBelkin' : 'Belkin',
'gtBootLoader' : 'Boot Loader',
'gtCantConnect' : 'We can\'t connect to your ISP.',
'gtCantConnectNoResponse' : 'We can\'t connect to the Internet - there was no response from your ISP.',
'gtChina' : 'China',
'gtClientList' : 'Connected Devices',
'gtClose' : 'Close',
'gtConfig' : 'Configure',
'gtConfigureRouter' : 'Configure Router',
'gtConnDevices' : 'Connected Devices',
'gtConnectingToNew' : 'Connecting to your new network',
'gtConnectionDet' : 'Connection Details',
'gtConnType' : 'Connection Type',
'gtContentFiltering' : 'Website Filter',
'gtCopyright' : 'Copyright &copy; 2012. Belkin, All Rights Reserved.',
'gtCurrTimezone' : 'Europe/Helsinki {REPLACE THIS SPAN WITH DETECTED Belkin TZ ID description}',
'gtDashboard' : '&larr; Dashboard',
'gtDashTitle' : 'Belkin router dashboard',
'gtDataRate' : 'Data Rate',
'gtDDNS' : 'DDNS',
'gtDHCPList' : 'Connected Devices',
'gtDHCPServer' : 'DHCP Server',
'gtDMZ' : 'DMZ',
'gtDNS' : 'DNS',
'gtDown' : 'Down',
'gtDownloadSpeed' : 'Download Speed',
'gtEncap' : 'Encapsulation:',
'gtFileInstallError' : 'That file couldn\'t be installed - perhaps it\'s the wrong file type',
'gtFileLoadError' : 'That file couldn\'t be loaded - perhaps it\'s the wrong file type',
'gtFirewall' : 'Firewall',
'gtFirmware' : 'Firmware',
'gtFirmwareUpdate' : 'Firmware Update',
'gtFrance' : 'France',
'gtFreshest' : 'We\'re getting the most recent version of our firmware...',
'gtFrom' : 'From:',
'gtFWUpdate' : 'Firmware Update',
'gtFWUpToDate' : 'Your firmware is now up-to-date.',
'gtGermany' : 'Germany',
'gtGuestAccess' : 'Guest Access',
'gtGuestNetwork' : 'Guest Network',
'gtHomeNetwork' : 'Home Network',
'gtIfYouKnowConnection1' : 'If you know your connection type, you can <a href="700-SelectConnection.htm" id="ISP1a010">set it up manually &raquo;</a>',
'gtIfYouKnowConnection2' : 'If you know your connection type, you can <a href="700-SelectConnection.htm" id="ISP2a010">set it up manually &raquo;</a>',
'gtIfYouKnowConnection3' : 'If you know your connection type, you can <a href="700-SelectConnection.htm" id="ISP3a010">set it up manually &raquo;</a>',
'gtIfYouKnowConnection4' : 'If you know your connection type, you can <a href="700-SelectConnection.htm" id="ISP4a010">set it up manually &raquo;</a>',
'gtIfYouKnowConnection4a' : 'If you know your connection type, you can <a href="700-SelectConnection.htm" id="ISP4aa010">set it up manually &raquo;</a>',
'gtIfYouKnowConnection5' : 'If you know your connection type, you can <a href="700-SelectConnection.htm" id="ISP5a010">set it up manually &raquo;</a>',
'gtIfYouKnowConnection6' : 'If you know your connection type, you can <a href="700-SelectConnection.htm" id="ISP6a010">set it up manually &raquo;</a>',
'gtIfYouKnowConnection7' : 'If you know your connection type, you can <a href="700-SelectConnection.htm" id="ISP7a010">set it up manually &raquo;</a>',
'gtIntellistream' : 'Intellistream',
'gtInterleavePath' : 'Interleave Path',
'gtInternetSettings' : 'Internet Settings',
'gtIOSConnect01' : 'iPhone, iPad, and iPod Touch',
'gtIOSConnect02' : 'Your device provides a menu of available wireless networks in the Settings app.',
'gtIOSConnect03' : 'Open the <strong>Settings</strong> app and select <strong>Wi-Fi</strong>.',
'gtIOSConnect04' : 'Select <strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong> from the network list. <!-- IF NOT OPEN --> <span tid="gtNotOpen">If asked, enter the network password <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>.</span> <!-- /IF -->',
'gtIPv6' : 'IPv6',
'gtIPV6Connection' : 'IPv6 Connection',
'gtISP' : 'ISP Connection Type',
'gtJapan' : 'Japan',
'gtLANIP' : 'LAN IP Address',
'gtLANMAC' : 'LAN/WLAN MAC',
'gtLANSettings' : 'LAN Settings',
'gtLANSubnet' : 'LAN Subnet Mask',
'gtLLC' : 'LLC',
'gtLoadPrevSettings' : 'Load Previous Settings',
'gtLocalNetwork' : 'Local Network',
'gtLocalSettings' : 'Local Network Settings',
'gtLocked' : 'locked',
'gtMACAddress' : 'MAC Address',
'gtMACAddressFiltering' : 'MAC Address Filtering',
'gtMacConnect01' : 'Mac OS X',
'gtMacConnect02' : 'Your computer provides a menu of available wireless networks at the right end of the menu bar.',
'gtMacConnect03' : 'Click the wireless waves icon.',
'gtMacConnect04' : 'Select <strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong> from the network list. <!-- IF NOT OPEN --> <span tid="gtNotOpen">If asked, enter the network password <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>.</span> <!-- /IF -->',
'gtMaybeLater' : 'Maybe Later',
'gtMbitPerSec' : 'Mb/s',
'gtMeaning' : 'What does this mean?',
'gtMedia' : 'Media',
'gtMediaServer' : 'Media Server',
'gtmidnight' : 'Midnight',
'gtModel' : 'Model',
'gtName' : 'Name',
'gtNeedMoreHelp' : 'Need more help?',
'gtNetName' : 'Network Name',
'gtNewFWAvailableModem' : 'We have some new firmware for your modem.',
'gtNewFWAvailableRouter' : 'We have some new firmware for your router.',
'gtNewFWAvailableRouterAndModem' : 'We have some new firmware for your router and modem.',
'gtNext' : 'Next',
'gtNo' : 'No',
'gtNoiseMargin' : 'Noise Margin',
'gtNoMyNet' : 'I don\'t see my network',
'gtNoon' : 'Noon',
'gtNoSecCard' : 'Please write down your network name and password so you can refer to it later.',
'gtNotOpen' : 'If asked, enter the network password <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>.',
'gtNZ' : 'New Zealand',
'gtOffline' : 'Offline',
'gtOnline' : 'Online',
'gtOptionalSoftware' : 'Optional Software',
'gtOptionalSW' : 'Optional Software',
'gtOptSW' : 'Optional Software',
'gt-OR-' : '-OR-',
'gtOther' : '...',
'gtOutputPower' : 'Output Power',
'gtParentalControls' : 'Parental Controls',
'gtPass' : 'Password:',
'gtPIC' : 'Parental Internet Control',
'gtPICOtherTimes' : 'At all other times, this device will not be able to access the Internet.',
'gtPleaseCallISP' : 'Please call your Internet Service Provider',
'gtPortForwarding' : 'Port Forwarding',
'gtPrint' : 'Print',
'gtReadAllAboutIt' : 'For more help:',
'gtReconnectingHell' : 'Reconnecting...',
'gtRegister' : 'Register',
'gtRegistration' : 'Registration',
'gtRestartRouter' : 'Restart Router',
'gtRestoreDef' : 'Restore Defaults',
'gtRestoreFactDefault' : 'Restore Factory Defaults',
'gtRestoreFactDefaults' : 'Restore Factory Defaults',
'gtRestoreSettigns' : 'Restore Settings',
'gtRetest' : 'Re-test connection',
'gtRouterDetails' : 'Router Details',
'gtRouterInfo' : 'Router Info',
'gtSave' : 'Save',
'gtSaveCurrentSettings' : 'Save Current Settings',
'gtSaved' : 'Unnamed Device Saved',
'gtSaveRestore' : 'Save/Restore Settings',
'gtSaveRestoreSettings' : 'Save/Restore Settings',
'gtSaveSettings' : 'Save/Backup Settings',
'gtSecLog' : 'Security Log',
'gtSecurity' : 'Security',
'gtSelectLang' : 'Select language:',
'gtSelfHeal' : 'Self-Healing',
'gtSelfHealing' : 'Self-Healing',
'gtSerialSupport' : 'On the next page we\'ll record your router\'s serial number for support purposes.',
'gtShowtime' : 'Showtime',
'gtSpeedTestResults' : 'Last check: 1 day ago at 3:57pm',
'gtStaticRouting' : 'Static Routing',
'gtStatus' : 'Status',
'gtSystemSettings' : 'System Settings',
'gtTo' : 'To:',
'gtTraffStats' : 'Traffic Statistics',
'gtTryAgain' : 'Try again',
'gtUnlocked' : 'unlocked',
'gtUp' : 'Up',
'gtUpdate' : 'update',
'gtUpdateNoPowerModem' : 'We\'re updating your modem with the new firmware. Please don\'t turn off the power while this is happening.',
'gtUpdateNoPowerRouter' : 'We\'re updating your router with the new firmware. Please don\'t turn off the power while this is happening.',
'gtUploadSpeed' : 'Upload Speed',
'gtUSA' : 'the United States',
'gtUserName' : 'User Name:',
'gtUtils' : 'Utilities',
'gtVCI' : 'VCI:',
'gtVCMUX' : 'VC/MUX',
'gtVPI' : 'VPI:',
'gtWAN' : 'WAN Settings',
'gtWANDNS' : 'DNS Address',
'gtWANGateway' : 'WAN Gateway',
'gtWANIP' : 'WAN IP Address',
'gtWANMAC' : 'WAN MAC Address',
'gtWANPingBlocking' : 'WAN Ping Blocking',
'gtWANSubnet' : 'WAN Subnet Mask',
'gtWebsiteFilter' : 'Website Filter',
'gtWelcome' : 'Welcome',
'gtWiFi' : 'WiFi',
'gtWifiSettings' : 'Your WiFi settings were successfully changed.',
'gtWinConnect01' : 'Windows 7 or 8',
'gtWinConnect02' : 'Your computer provides a menu of available wireless networks at the right end of the task bar.',
'gtWinConnect03' : 'Right-click on the icon that shows signal strength bars.',
'gtWinConnect04' : 'Select <strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong>. <!-- IF NOT OPEN --> <span tid="gtNotOpen">If asked, enter the network password <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>.</span> <!-- /IF -->',
'gtWinConnect05' : 'Windows Vista and Windows XP',
'gtWinConnect06' : 'Your computer provides a menu of available wireless networks at the right end of the task bar.',
'gtWinConnect07' : 'Right-click on the icon that shows a computer with wireless waves (XP) or two computers (Vista).',
'gtWinConnect08' : 'Choose <strong>View Available Wireless Networks</strong> (XP) or <strong>Connect to a network</strong> (Vista) from the resulting menu.',
'gtWinConnect09' : 'Select <strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong>. <!-- IF NOT OPEN --> <span tid="gtNotOpen">If asked, enter the network password <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>.</span> <!-- /IF -->',
'gtWireless' : 'Wireless',
'gtWiring' : 'Wiring',
'gtWPSShort' : 'WPS',
'gtWPS' : 'Wi-Fi Protected Setup',
'gtYes' : 'Yes',
'htFWUpdate' : 'What are firmware updates?',
'htFWUpdateContent' : 'From time to time, Belkin may release new versions of your router\'s operating programming. These updates contain improvements and fixes for your router.<br><br>NOTE: Please backup your current settings before updating to a new version of firmware.',
'htParent' : 'What is the website filter?',
'htPIC' : 'Your Internet Control',
'htPICBlocked' : 'Internet is suspended',
'htPICBlockedContent' : 'Please restore access when you are ready to return internet connectivity to all devices.',
'htPICContent' : 'With internet control you can now customize a time to block internet access for each device.',
'htSaveRestore' : 'What does it mean to save, load, or restore settings?',
'htSaveRestoreContent' : 'Your router remembers the settings for things like its network name, password, etc. These settings can be saved (as a backup), and can then be loaded back into your router. The router settings can also be restored back to its original factory default settings.',
'htSaveRestoreContentMobile' : '<br>* On iPhone, iPad, and iPod Touch, saving and loading a settings file is not available. Use another device, such as a laptop, to save and load a settings file.',
'ISP1t003' : 'Tell them that your router was able to get an IP address, but DNS is not working.',
'ISP1t007' : 'DNS translates names like "belkin.com" into numeric addresses (IP addresses) that computers use to navigate the Internet. Your router has an IP address, which means it is connected to the Internet, but the DNS is not working, so you can\'t surf which suggests something is wrong at your ISP. <span class="nub"></span>',
'ISP2t003' : 'Tell them that your router was able to get an IP address, and DNS is working, but we can\'t ping anyone.',
'ISP2t007' : 'We "ping" other machines on the Internet to test whether or not we can talk to them. DNS translates names like "belkin.com" into numeric addresses (IP addresses) that computers use to navigate the Internet. Your router has an IP address, which means it is connected to the Internet, and the DNS provided by your ISP is working, but we can\'t ping. This suggests that something is wrong at your ISP.<span class="nub"></span>',
'ISP3t004' : 'Tell them that your username and password were accepted, but you still don\'t have an Internet connection.',
'ISP3t007' : 'We "ping" other machines on the Internet to test whether or not we can talk to them. Your ISP accepted your username and password, but we can\'t ping, so you can\'t surf. This suggests that something is wrong at your ISP. <span class="nub"></span>',
'ISP4t003' : 'Tell them that your username and password weren\'t accepted after a couple of tries.',
'ISP4t007' : 'Your Internet connection requires a username and password, but your ISP didn\'t accept what you entered. They will be able to make sure you have the correct information. <span class="nub"></span>',
'ISP5t003' : 'Tell them that you chose a Dynamic connection, but weren\'t able to get an IP address.',
'ISP5t007' : 'An IP address identifies a router or other device on the Internet. Your ISP is not giving your router an address, and without an IP address you can\'t connect. This suggests that something is wrong at your ISP, or your connection is not a Dynamic connection. <span class="nub"></span>',
'ISP6t003' : 'Tell them that you chose a Static connection, but weren\'t able to get on the Internet.',
'ISP6t007' : 'We use a Static connection when your ISP has assigned you one or more specific IP addresses to use. <span class="nub"></span>',
'ISP7t003' : 'Tell them that your VPI/VCI settings aren\'t working, and you\'d like them to give you the correct numbers.',
'ISP7t007' : 'VPI and VCI tell your router what path to use to talk to your ISP. We weren\'t able to detect the right settings. <span class="nub"></span>',
'Network24Passkey' : '{REPLACE WITH 2.4 PASSWORD}',
'Network24SSID' : '{REPLACE WITH 2.4 SSID}',
'p100t002' : 'Let\'s connect to the Internet.',
'p100t003' : 'You\'re connected to your new router, so let\'s get it talking with your Internet Service Provider.',
'p100t004' : 'Let\'s connect to the Internet.',
'p100t005' : 'You\'re connected to your new router, so let\'s get it talking with your Internet Service Provider.',
'p100t007' : 'Detect my connection',
'p100t008' : 'If you\'re sure of your connection type, you can <a href="700-SelectConnection.htm" id="p100a009" tid="p100t009">set it up manually &raquo;</a>, or go straight to the <a href="000-Dashboard.htm" id="p100a010" tid="p100t010">dashboard &raquo;</a>.',
'p100t009' : 'set it up manually &raquo;',
'p100t010' : 'dashboard &raquo;',
'p100t013' : 'Right now, we\'re displaying the pages in&nbsp;',
'p100t024' : 'A nearly automatic setup',
'p100t025' : 'First, we\'ll automatically check your wiring and detect the type of connection you have with your Internet Service Provider (ISP). There should be very little for you to do. Then we\'ll make sure your router\'s software is up-to-date. <span class="nub"></span>',
'p1010MRt001' : 'We\'re having trouble talking with your modem.',
'p1010MRt002' : 'We think there\'s a wiring problem.',
'p1010MRt003' : 'Here\'s what you can do to fix this:',
'p1010MRt004' : 'Make sure your modem-router is connected to your phone jack that has the Internet. There should be a network cable connecting the ADSL port on your modem-router (the grey port at the top) to the phone jack.',
'p1010MRt005' : 'Make sure your modem is turned on. Its power adapter should be plugged in at both ends, and one or more lights on the modem should be on.',
'p1010MRt006' : 'There should be a network cable connecting your modem to the yellow port on your router. This cable carries the signal from your modem to your router; without it, you can\'t get online.',
'p1010MRt007' : 'If these are both as they should be, you might try restarting your modem by unplugging its power supply, waiting fifteen seconds, then plugging it back in. If your modem has a battery you may need to find the modem\'s reset button and use that instead.',
'p1010MRt008' : 'Here\'s what these connections should look like:',
'p1010MRt009' : 'We\'ll continue watching for a connection while you check.',
'p1010MRt010' : 'The most common wiring difficulty is between the modem and the router. It\'s important to check both ends of the cable. One end should be plugged into the yellow port on your new router; the other end should be connected to a similar port on your modem. Different modem makers label the ports differently; you might find it labeled "data", "LAN", "network", or "Ethernet". <span class="nub"></span>',
'p1020t001' : 'We\'re having trouble talking with your Internet Service Provider.',
'p1020t002' : 'Please restart your modem-router.',
'p1020t003' : 'We\'re not getting an Internet connection, so let\'s try restarting your modem-router.',
'p1020t004' : 'Turn off your modem-router. Usually this involves throwing a switch on the modem-router or simply unplugging its power supply.',
'p1020t005' : 'Wait 15 seconds.',
'p1020t006' : 'Turn your modem-router back on.',
'p1020t007' : 'After several seconds its lights will be on and it should make contact with your ISP.',
'p1020t008' : 'If this problem persists, please contact your ISP to troubleshoot your account.',
'p1020t009' : 'We\'ll watch for your modem-router to turn off and on, then we\'ll continue automatically.',
'p1020t010' : 'Why restart the modem?',
'p1020t011' : 'Some modems need to be restarted before they will talk to a new router or an unfamiliar computer. And if there\'s a hiccup at your Internet Service Provider, the modem can drop your connection unexpectedly. We can see your modem but not the Internet, so giving it a quick restart will most likely do the trick.<span class="nub"></span>',
'p1100t001' : 'A firmware update is available!',
'p1100t002' : 'We recommend upgrading your router to the newest firmware to ensure everything functions properly.',
'p1100t003' : 'Show me what\'s new',
'p1201t001' : 'Lock the dashboard with a password.',
'p1201t002' : 'Please enter a password to lock the dashboard:',
'p1201t003' : 'Please enter a password.',
'gtSetPassword' : 'Set Password',
'p1201t005' : 'Cancel',
'p1210t001' : 'The dashboard is locked.',
'p1210t002' : 'Please enter your password:',
'p1210t003' : 'Please enter your password.',
'p1210t004' : 'Your password is not correct.',
'p1210t005' : 'Let me in!',
'p1300t001' : 'A little more oomph.',
'p1300t002' : 'You can squeeze more performance out of your Internet connection by setting up Intellistream. This involves running a speed test.',
'p1300t003' : 'Set Up Intellistream',
'p1300t004' : 'Maybe Later',
'p1302t001' : 'Your firmware is up to date.',
'p1316t001' : 'Installation of updated firmware failed - please try again by clicking "Check for New Firmware".',
'p1318t001' : 'Upgrade file is not the correct type or version for this device. Upgrade failed. Please obtain the correct file and try again',
'p1333t001' : 'Your firmware has been successfully updated.',
'p1400t001' : 'Get full use of your USB port.',
'p1400t002' : 'There is some optional software you can install that will help you get the most out of the USB port on your router.',
'p1400t003' : 'Show Me the Optional Software',
'p1500t001' : 'You are here.',
'p1500t002' : 'It looks like you\'re in the <span tid="gtCurrTimezone">Europe/Helsinki {REPLACE THIS SPAN WITH DETECTED Belkin TZ ID description}</span> timezone. Is that right?',
'p1500t003' : 'That\'s right',
'p1500t004' : 'Let me choose',
'p200t001' : 'Establishing connection...',
'p200t002' : ' We\'re checking the physical connections to your router.',
'p202At001' : 'Still working...',
'p202At002' : ' We\'re detecting your Internet Service Provider\'s connection type. This could take a few minutes.',
'p202Bt001' : 'Still working...',
'p202Bt002' : ' Checking if your Internet Service Provider requires a password. This could take a few minutes.',
'p202Ct001' : 'Still working...',
'p202Ct002' : ' Testing the connection now.',
'p202t001' : 'Establishing connection...',
'p202t002' : ' We\'re detecting your Internet Service Provider\'s connection type.',
'p208t001' : 'Do you have VPI/VCI numbers handy?',
'p208t002' : 'In order to get online, you need to enter the VPI and VCI numbers. They identify the communication path your ISP wants you to use.',
'p208t003' : 'Your Internet Service Provider should have provided you with these numbers. If you can\'t find them, please call your ISP.',
'p208t006' : '',
'p208t007' : '',
'p208t009' : 'Try my connection',
'p208t011' : 'VPI and VCI',
'p208t012' : 'The Virtual Path Identifier and Virtual Circuit Identifier tell your router what path should be used to talk to your ISP. There are a handful of common settings we automatically try before asking you for help.<span class="nub"></span>',
'p209t001' : 'Something is not right with these settings.',
'p209t002' : 'Your ISP didn\'t like those VPI/VCI numbers. One more time?',
'p210CXt001' : 'You have a PPPoE connection.',
'p210CXt002' : 'This requires a username and password in order to access the Internet.',
'p210CXt004' : '<strong>Your Internet Service Provider should have given you this information. If you can\'t find them, please contact your ISP.</strong>',
'p210CXt006' : '',
'p210CXt007' : '',
'p210CXt016' : 'Try my connection',
'p210CXt017' : 'PPPoE',
'p210CXt018' : 'Point-to-Point Protocol over Ethernet creates a secure connection between your router and ISP. It\'s usually used by telephone companies.<span class="nub"></span>',
'p210DXt001' : 'You have a PPPoA connection.',
'p210DXt002' : 'This requires a username and password in order to access the Internet.',
'p210DXt004' : '<strong>Your Internet Service Provider should have given you this information. If you can\'t find them, please contact your ISP.</strong>',
'p210DXt006' : '',
'p210DXt007' : '',
'p210DXt016' : 'Try my connection',
'p210DXt017' : 'PPPoA',
'p210DXt018' : 'Point-to-Point Protocol over ATM creates a secure connection between your router and ISP. It\'s usually used by telephone companies.<span class="nub"></span>',
'p210t001' : 'You have a PPPoE DSL connection.',
'p210t002' : 'You\'ll need a username and password in order to access the Internet.',
'p210t003' : '<strong>Your Internet Service Provider (ISP) should have given you this information. If you can\'t find them, please contact your ISP.</strong>',
'p210t005' : 'ISP Username:',
'p210t009' : 'Try my connection',
'p210t010' : 'PPPoE',
'p210t011' : 'Point-to-Point Protocol over Ethernet creates a secure connection between your router and ISP. It\'s usually used by telephone companies.<span class="nub"></span>',
'p211t001' : 'Establishing connection...',
'p211t002' : ' We\'re trying to log in to your Internet Service Provider. This could take up to two minutes or more.',
'p212DXt001' : 'Something is wrong with your PPPoA settings.',
'p212DXt002' : 'Your username, password, or both are incorrect. Please try again. If you can\'t find the correct information, contact your ISP.',
'p212t001' : 'Something is wrong with your PPPoE settings.',
'p212t002' : 'Your username, password, or both are incorrect. Please try again. If you can\'t find the correct information, contact your ISP.',
'p220t002' : 'To complete the connection and access the Internet, please enter a username, password, and service address.',
'p220t003' : '<strong>Your Internet Service Provider should have given you this information. If you can\'t find it, please contact your ISP.</strong>',
'p220t006' : 'ISP Username:',
'p220t007' : 'Service Address:',
'p220t010' : 'Try my connection',
'p220t013' : 'You have an L2TP or PPTP connection.',
'p220t014' : 'Or manually choose my connection &raquo;',
'p220t015' : 'L2TP and PPTP',
'p220t016' : 'Both L2TP (Layer 2 Tunneling Protocol) and PPTP (Point-to-Point Tunneling Protocol) create a private and encrypted connection between you and your ISP.<span class="nub"></span>',
'p221t001' : 'Establishing connection...',
'p221t002' : ' We\'re trying to log in to your Internet Service Provider. This may take up to 2 minutes.',
'p222t002' : 'Your username, password, or both are incorrect. Please try again. If you can\'t find the correct information, contact your ISP.',
'p222t004' : 'Something is wrong with your settings.',
'p2300t001' : 'Your Installed Firmware Version:',
'p2300t002' : 'Update Firmware From Locally Saved File:',
'p2300t006' : 'Are you sure you want to install {{file}}?',
'p2300t010' : 'Check for New Firmware',
'p2400t006' : 'Your current settings will be replaced. Are you sure that you want to load {{file}}?',
'p2410t001' : 'Are you sure you want to Restore Factory Defaults?',
'p2410t002' : 'Clicking \'Yes\' will erase your router settings like name and password, and will replace them with the original factory defaults.',
'p300t005' : 'Now you\'re online.',
'p310t001' : 'An update is available!',
'p310t001x' : 'This update (v2.1.0c) includes:',
'p310t002' : 'To install the new firmware, please read and accept the license agreement.',
'p310t003' : 'License Agreement',
'p310t004' : 'I accept the license agreement.',
'p310t005' : 'Install update',
'p310t006' : 'What is firmware?',
'p310t007' : 'Firmware is the software that runs your router. We update firmware to improve your router\'s performance, so it\'s good to make sure you have the latest. <span class="nub"></span>',
'p315t001' : 'Downloading new firmware.',
'p315t002' : 'Download progress:',
'p315t003' : 'What is firmware?',
'p315t004' : 'Firmware is the software that runs your router. We update firmware to improve your router\'s performance, so it\'s good to make sure you have the latest. <span class="nub"></span>',
'p320t001' : 'Installing new firmware.',
'p320t002' : 'Once the new firmware has been applied, we\'ll restart your router to complete the installation.',
'p320t004' : 'What is firmware?',
'p320t005' : 'Firmware is the software that runs your router. We update firmware to improve your router\'s performance, so it\'s good to make sure you have the latest. <span class="nub"></span>',
'p320t006' : 'This will take three minutes or so. Update progress:',
'p320t010' : 'Once the new firmware has been applied, we\'ll restart your modem to complete the installation.',
'p321t001' : 'Restarting your router',
'p321t002' : 'Restarting your modem',
'p321t003' : 'Now that the firmware has been installed, we need to restart your router to make it official.',
'p321t004' : 'Restarting:',
'p321t005' : 'Firmware updates',
'p321t006' : 'Firmware is the software used to implement network and security protocols. Updates enhance reliability and functionality, so it is smart to make sure you have the latest. <span class="nub"></span>',
'p321t010' : 'Now that the firmware has been installed, we need to restart your modem to make it official.',
'p330t001' : 'Checking your connection speed...',
'p330t002' : 'A quick speed test will help your router optimize your Internet connection. This takes a minute or two.',
'p331t001' : 'Your firmware is up-to-date.',
'p332t001' : 'We\'ll try the firmware update again later.',
'p333t001' : 'Your firmware has been updated.',
'p334t001' : 'Your speed test results!',
'p334t002' : 'Here\'s what we learned:',
'p334t003' : 'Download Speed',
'p334t004' : 'Mb/s',
'p334t005' : 'Upload Speed',
'p334t006' : 'Mb/s',
'p340t002' : ' We\'re reconnecting to your router so we can continue.',
'p341t001' : 'Please restart your router',
'p341t002' : 'We\'re having trouble reconnecting to your router. A quick restart should help.',
'p341t003' : 'Unplug your router\'s power supply, wait a few seconds, and plug it back in. Once your router is showing a solid blue light we are ready to connect.',
'p341t003w' : 'Unplug your router, wait a few seconds, and plug it back in. Once your router is showing a solid blue light we are ready to connect.',
'p341t004' : ' We\'ll watch for your router to come back while you do this.',
'p342t001' : ' We\'re reconnecting to your router so we can continue.',
'p342t002' : 'You may need to re-select your wireless network <span tid="Network24SSID">({REPLACE WITH 2.4 SSID})</span> from the list of wireless networks in order to help this along.',
'p343t002' : ' We\'re reconnecting to your router to continue.',
'p343t003' : 'You may need to re-select your wireless network <span tid="Network24SSID">({REPLACE WITH 2.4 SSID})</span> to resume.',
'p344t001' : 'Please restart your router.',
'p344t002' : 'We\'re having trouble reconnecting to your router. A quick restart should help.',
'p344t003' : 'Unplug your router\'s power supply, wait 15 seconds, and plug it back in. Once your router is showing a solid blue light we\'ll reconnect.',
'p344t003w' : 'Unplug your router, wait 15 seconds, and plug it back in. Once your router is showing a solid blue light we\'ll reconnect.',
'p344t004' : ' We\'ll watch for your router to come back while you do this.',
'p400f010' : 'WPA2',
'p400f011' : 'WPA/WPA2',
'p400f012' : 'WEP',
'p400f013' : 'Open',
'p400t001' : 'Connect everything quicker.',
'p400t002' : 'Giving your new router the same network name and password as your old one will help all of your devices connect right away.',
'p400t004' : 'Network Name:',
'p400t008' : 'Security Type: <em class="hide-on-phones">(WPA2 is the most secure.)</em>',
'p400t014' : 'Your 5Ghz band will have the same name, but with ".media" added to the end.',
'p400t015' : 'You can change this later if you like.',
'p400t017' : 'Save and Continue',
'p400t018' : 'Why should I rename my network?',
'p400t019' : 'Any wireless devices that were previously connected to your old router, will connect automatically to your new router if you use the same network name and password. Also, when you search for your network on devices it\'s easier to find a unique name.<span class="nub"></span>',
'p450a009' : 'Great, what\'s next?',
'p450t001' : 'Your changes have been saved.',
'p450t002' : 'Here is your new network name and password',
'p450t003' : 'If you\'ve used your old network name and password, your existing wireless devices should be reconnecting now.',
'p450t004' : 'Name:',
'p450t008' : 'Your router came with a slip of paper on the bottom with a place to write your new network name. This way its always there when you need it.',
'p450t011' : 'If you used your prior network name and password, most of your wireless devices reconnect automatically the next time you start them up. Others will need you to re-select your network, and will connect automatically after that. There are instructions for Windows, OS X, iOS, and Android in your Quick Install Guide. <span class="nub"></span>',
'p451a009' : 'Great, what\'s next?',
'p451t001' : 'No changes.',
'p451t002' : 'Your network name and password was not changed.',
'p451t003' : 'You\'ll need to tell each of your wireless devices about your network name and password:',
'p451t004' : 'Name:',
'p451t008' : 'Your router came with a slip of paper on the bottom with a place to write your network name. This way its always there when you need it.',
'p451t011' : 'Each of your wireless devices will need to be told about your new network. There are instructions for Windows, OS X, iOS, and Android in your Quick Install Guide. <span class="nub"></span>',
'p500t001' : 'Register your router.',
'p500t002' : 'Registration is quick and can save lots of time if you should ever need customer support.',
'p500t004' : 'Why register?',
'p500t005' : 'Knowing a little bit about you can help us help you faster should the need arise.<span class="nub"></span>',
'p500tCancel' : 'Register Later &raquo;',
'p500tSubmit' : 'Complete Registration',
'p600t001' : 'Visit your router\'s Optional Software page to retrieve similar software for your other computers and mobile devices.',
'p600t002' : 'Thanks, take me to the dashboard',
'p600t003' : 'Optional software',
'p600t004' : 'These software tools can help you take advantage of the advanced features your router offers. There are downloads for Apple iOS, Android, Windows, and OS X. <span class="nub"></span>',
'p601t001' : '<strong>Thanks for registering!</strong>',
'p700MRt001' : 'We weren\'t able to automatically setup your connection. Please tell us a little bit more so we can help you connect.',
'p700MRt002' : 'What type of connection are you setting up?',
'p700MRt003' : 'My connection is a:',
'p700MRt005' : 'Dynamic connection (1483 Bridge)',
'p700MRt007' : 'PPPoE connection',
'p700MRt009' : 'PPPoA connection',
'p700MRt011' : 'Static connection (IPoA)',
'p700MRt014' : 'I\'m sure not sure what my connection type is:',
'p700MRt016' : 'Try automatic again',
'p700MRt017' : 'Connection Types',
'p700MRt018' : '<span class="black">Dynamic ¡ª</span> These connections are becoming more common for some DSL providers.',
'p700MRt019' : '<span class="black">PPPoE and PPPoA ¡ª</span> These connections require a username and password provided by the ISP.',
'p700MRt021' : '<span class="black">Static ¡ª</span> These require custom parameters that are unique to each user. <span class="nub"></span>',
'p700t001' : 'We weren\'t able to automatically setup your connection. Please tell us a little bit more so we can help you connect.',
'p700t002' : 'What type of connection are you setting up?',
'p700t003' : 'My connection is a:',
'p700t005' : 'Dynamic connection',
'p700t007' : 'PPPoE connection',
'p700t008' : 'L2TP or PPTP connection',
'p700t013' : 'Static connection',
'p700t014' : 'I\'m not sure what my connection type is:',
'p700t914' : 'If you still can\'t determine your connection type, contact your Internet Service Provider (ISP).',
'p700t016' : 'Try automatic again',
'p700t017' : 'Connection Types',
'p700t018' : '<span class="black">Dynamic &mdash;</span> Common for most cable and fiber ISPs and some DSL providers.',
'p700t019' : '<span class="black">PPPoE and PPTP &mdash;</span> Require a username and password provided by the ISP.',
'p700t021' : '<span class="black">Static &mdash;</span> Require custom parameters that are unique to each user. <span class="nub"></span>',
'p701MRt001' : 'You\'ve chosen a Dynamic connection.',
'p701MRt002' : 'Your Internet Service Provider may have given you additional configuration settings.',
'p701MRt004' : 'Dynamic Settings:',
'p701MRt006' : '',
'p701MRt007' : '',
'p701MRt016' : 'Try my connection',
'p701MRt017' : 'Dynamic connections',
'p701MRt018' : 'A dynamic connection is configured automatically once communication with the ISP is established.<span class="nub"></span>',
'p701t001' : 'Establishing Dynamic connection...',
'p701t002' : ' We\'re asking your Internet Service Provider for a connection.',
'p702t001' : 'Restarting modem...',
'p702t002' : 'We\'re getting ready to try a different connection type by restarting your modem.',
'p710MRt001' : 'You\'ve chosen a Static connection.',
'p710MRt002' : 'Your Internet Service Provider should have given you static configuration settings. If you can\'t find them, please give your ISP a call.',
'p710MRt004' : 'Static Settings:',
'p710MRt005' : 'IP Address:',
'p710MRt006' : '',
'p710MRt007' : 'Subnet Mask:',
'p710MRt008' : '',
'p710MRt009' : 'Default Gateway:',
'p710MRt010' : '',
'p710MRt011' : 'DNS Server (Primary):',
'p710MRt012' : '',
'p710MRt013' : 'DNS Server (Secondary):',
'p710MRt014' : '',
'p710MRt015' : 'Note: Not all ISPs require a secondary DNS Server.',
'p710MRt016' : 'Try my static connection',
'p710MRt017' : 'Static connections',
'p710MRt018' : 'A static connection is configured manually, but provides a consistent address to your router one you can more easily get to from outside your network. Static connections are uncommon in residential Internet service, and generally cost more. <span class="nub"></span>',
'p710t001' : 'You\'ve chosen a Static connection.',
'p710t002' : 'Your Internet Service Provider should have given you static configuration settings. If you can\'t find them, please contact your ISP.',
'p710t004' : 'Static Settings:',
'p710t005' : 'IP Address:',
'p710t006' : '',
'p710t007' : 'Subnet Mask:',
'p710t008' : '',
'p710t009' : 'Default Gateway:',
'p710t010' : '',
'p710t011' : 'DNS Server (Primary):',
'p710t012' : '',
'p710t013' : 'DNS Server (Secondary):',
'p710t014' : '',
'p710t015' : 'Note: Not all ISPs require a secondary DNS Server.',
'p710t016' : 'Try my static connection',
'p710t017' : 'Static connections',
'p710t018' : 'A static connection is configured manually, but provides a consistent address to your router which you can more easily access from outside your network. Static connections are uncommon in residential Internet service and generally cost more. <span class="nub"></span>',
'p711t001' : 'Establishing Static connection...',
'p711t002' : ' We\'re asking your Internet Service Provider for a connection.',
'p712t001' : 'Something is wrong with your Static settings.',
'p712t002' : 'One of the addresses or other items you entered is incorrect, but we can\'t tell which one.',
'p800t001' : 'Applying your changes.',
'p800t002' : 'We\'re applying your changes and rebooting the router to make it official.',
'p801t002' : ' We\'re waiting for the router to reconnect. Once that happens we\'ll proceed.',
'p802t002' : 'We need a wireless connection to the router to continue.',
'p802t004' : 'Go to your device\'s wireless network menu',
'p802t005' : 'Select your new network, called <strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong>',
'p802t007' : 'Enter your password, which is <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>',
'p802t009' : 'You\'ll be connected to the router, and we\'ll proceed.',
'p802t010' : ' Waiting for the router to reconnect.',
'p803t002' : 'We need a wireless connection to the router to continue.',
'p803t003' : 'Since you\'ve changed your network name, you will have to re-select your wireless network:',
'p803t004' : 'Go to your device\'s wireless network menu',
'p803t005' : 'Select your new network, called <strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong>',
'p803t007' : 'Enter your password, which is <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>',
'p803t009' : 'You\'ll be connected to the router, and we\'ll proceed.',
'p803t010' : ' Waiting for you to reconnect.',
'p804t001' : 'Your device didn\'t reconnect.',
'p804t002' : 'This happens sometimes and is pretty easy to fix.',
'p804t025' : 'If you have an internet enabled device around, go to this URL for helpful information: <strong>http://belk.in/PMuxOg</strong>',
'p804t026' : 'If this doesn\'t work, plug the Ethernet cable directly between your modem and computer.',
'p804t027' : ' Once we see a connection we\'ll proceed automatically.',
'p900t001' : 'We need you to restart your modem.',
'p900t002' : 'Your modem isn\'t talking.',
'p900t003' : 'Please perform the following steps to restart your modem:',
'p900t004' : 'Turn off your modem. Usually this involves an on/off switch on the modem or simply unplugging its power supply. Some modems have a battery and for those you\'ll need to find the modem\'s reset button.',
'p900t005' : 'Wait 15 seconds.',
'p900t006' : 'Turn your modem back on.',
'p900t007' : 'After several seconds its lights will be on and it\'ll be ready to talk to the router.',
'p900t008' : 'We\'ll watch for your modem to turn off and on, then we\'ll continue automatically.',
'p900t009' : 'Why restart the modem?',
'p900t010' : 'Some modems need to be restarted to talk with a new router or an unfamiliar computer. We can see your modem, but it\'s not talking to your new router, so giving it a quick restart will most likely do the trick.<span class="nub"></span>',
'p901t001' : 'Please restart your modem now...',
'p901t002' : 'We\'re watching for your modem to turn off and back on.',
'p902t001' : 'Your modem shut off, good...',
'p902t002' : ' We\'re watching for it to wake up again.',
'p903t001' : 'Need more time?',
'p903t002' : ' We\'re watching for your modem to restart. Do you need more time?',
'p903t005' : 'Usually this involves an on/off switch on the modem or simply unplugging its power supply, but some modems have a battery; for those you\'ll need to find the modem\'s reset button.',
'p904t001' : 'Need more time?',
'p904t002' : ' We\'re watching for your modem to come back on. Do you need more time?',
'p905t001' : 'We see your modem again...',
'p905t002' : ' We\'re waiting for it to sync with your ISP. This will take a minute or two.',
'p950IMRt001' : 'We weren\'t able to detect a connection to your ADSL line.',
'p950IMRt002' : 'Check that there\'s a network cable running from your ADSL wall jack to the grey port on your router.',
'p950IMRt004' : 'We think there\'s a wiring problem.',
'p950IMRt005' : 'There should be a network cable connecting the grey port on your router to your ADSL/phone jack. This cable carries the signal from your ISP to your router - without it, you can\'t get online. Please check that this cable is connected properly.',
'p950IMRt006' : 'Here\'s what this connection should look like:',
'p950IMRt007' : 'There should be a network cable connecting your ADSL wall jack to your router\'s power plug (which has a built-in modem). This cable carries the signal from your ISP to your router - without it, you can\'t get online.',
'p950IMRt009' : 'Here\'s what this connection should look like:',
'p950IMRt010' : 'We\'ll continue watching for a connection while you check.',
'p950IMRt014' : 'Wiring',
'p950IMRt015' : 'The most common wiring difficulty is between the wall jack and the router. It\'s important to check both ends of the cable. One end should be plugged into the grey port on your new router; the other end should be connected to your ADSL jack. In some cases a filter may be required between the wall jack and cable. <span class="nub"></span>',
'p950PMt001' : 'We weren\'t able to detect a connection to your ADSL line.',
'p950PMt002' : 'Make sure there\'s a network connection between your router and its power supply plug (which has a built-in modem).',
'p950PMt004' : 'We think there\'s a wiring problem.',
'p950PMt005' : ' Check that the network cable that splits off from the modem\'s power cord, is connected to the yellow WAN port on your router. Without this network connection, you can\'t get online.',
'p950PMt009' : 'Here\'s what this connection should look like:',
'p950PMt010' : 'We\'ll continue watching for a connection while you check.',
'p950PMt011' : 'Wiring',
'p950PMt012' : 'The most common wiring difficulty is between the wall jack and the modem. It\'s important to check both ends of the cable. One end should be plugged into the power supply of your new router; the other end should be connected to your ADSL jack. In some cases a filter may be required between the wall jack and cable. <span class="nub"></span>',
'p950t001' : 'We haven\'t detected a connection to your modem.',
'p950t002' : 'Make sure your modem is plugged in and turned on.',
'p950t003' : 'Make sure an Ethernet cable is connected between your modem and your router.',
'p950t004' : 'We think there\'s a wiring problem.',
'p950t005' : 'Your modem should be on and there should be an Ethernet cable plugged into your modem and the yellow port on your router.',
'p950t006' : 'Please check the following:',
'p950t007' : 'Make sure your modem is turned on. Check that the power adapter is plugged in on both ends, and one or more of the modem lights are on.',
'p950t008' : 'There should be an Ethernet cable plugged between your modem and the yellow port on your router. This cable carries the signal from your modem to your router; without it, you can\'t get online.',
'p950t009' : 'Your connections should look like this:',
'p950t010' : 'We\'ll continue watching for a connection while you check.',
'p950t011' : 'Wiring',
'p950t012' : 'The most common setup issue is the wiring between the modem and the router. One end should be plugged into the yellow port on your new router; the other end should be plugged into a similar port on your modem. Make sure both are plugged in completely. Different modem makers label the ports differently; you might find it labeled "data", "LAN", "network", or "Ethernet".<span class="nub"></span>',
'p951IMRt001' : 'Need more time?',
'p951IMRt002' : ' We\'re watching for you to plug in your ADSL line. Do you need more time?',
'p951t001' : 'Need more time?',
'p951t002' : ' We\'re watching for your modem to come back on. Do you need more time?',
'pDAt001' : 'Duplicate Administrator',
'pDAt002' : 'This device is managed by <span id="ipaddr"></span> currently!',
'PIC_blocked_content' : 'Parental Internet Control is active and this device is currently blocked from the Internet. Press the button below to manage Parental Internet Control settings.',
'PIC_blocked_title' : 'This device is currently blocked from the Internet.',
'PIC_S1t0006' : 'Schedule Internet access:',
'PIC_S1t006' : 'Recently on your network:',
'PIC_S2t003' : 'School nights',
'PIC_S2t004' : 'Weekends',
'PIC_S2t005' : '(Sunday - Thursday)',
'PIC_S2t006' : '(Friday - Saturday)',
'PIC-blocked' : 'blocked',
'PIC-S1dt001' : 'Do you want to suspend internet connectivity from your whole network?',
'PIC-S1t001' : 'Block All Devices',
'PIC-S1t003' : 'All devices are disconnected from the internet.',
'PIC-S1t004' : 'Restore Access',
'PIC-S1t005' : 'Currently on your network:',
'PIC-S1t010' : 'Searching for devices:',
'PIC-S1t020' : 'Your Parental Internet Control schedule is paused',
'PIC-S1t021' : 'The router doesn\'t know the current time, which is preventing the blocking/unlocking in your Parental Internet Control schedule from happening.  This will be fixed when your router re-establishes the correct time by re-connecting to the NTP time server.',
'PIC-S1t022' : 'Your router will check for the NTP time server every few minutes, or you can change the time server by visiting <a href="#" tid="gtSystemSettings" style="">System Settings</a>.',
'PIC-unblocked' : 'unblocked',
'pNoTime_content' : 'Your router is not able to tell the time because it lost contact with its NTP time server. The router\'s time-based functions such as Parental Internet Control, Eco Mode, and Self-Healing are now paused until it can re-connect to an NTP time server. <br> <br>The router will automatically check for the time every few minutes.',
'pNoTime_title' : 'What time is it?',
'pODLAplt001' : 'Applying language pack',
'pODLAplt002' : 'Changing to your chosen language...',
'pODLDLt001' : 'Downloading language pack',
'pODLDLt002' : 'Getting your chosen language from the server...',
'pODLErrt001' : 'Sorry',
'pODLErrt002' : 'OK',
'pStatst004' : 'See all &raquo;',
'Support1t001' : 'We haven\'t detected a connection to your modem.',
'Support1t002' : 'Make sure your modem is plugged in and turned on.',
'Support1t003' : 'Make sure an Ethernet cable is connected between your modem and your router.',
'Support1t004' : 'We think there\'s a wiring problem.',
'Support1t005' : 'Your modem should be on and there should be an Ethernet cable plugged into your modem and the yellow port on your router.',
'Support1t006' : 'Please check the following:',
'Support1t007' : 'Make sure your modem is turned on. Check that the power adapter is plugged in on both ends, and one or more of the modem lights are on.',
'Support1t008' : 'There should be an Ethernet cable plugged between your modem and the yellow port on your router. This cable carries the signal from your modem to your router; without it, you can\'t get online.',
'Support1t009' : 'Your connections should look like this:',
'Support1t010' : 'Once you\'ve done these steps, click Try again.',
'Support7t012' : 'Go to <strong>http://belk.in/Q4XXca</strong> on a device connected to the Internet',
'Support1t016' : 'Wiring',
'Support1t017' : 'The most common setup issue is the wiring between the modem and the router. One end should be plugged into the yellow port on your new router; the other end should be plugged into a similar port on your modem. Make sure both are plugged in completely. Different modem makers label the ports differently; you might find it labeled "data", "LAN", "network", or "Ethernet".<span class="nub"></span>',
'Support2t001' : 'Your modem never restarted.',
'Support2t002' : 'Try unplugging your modem\'s power supply.',
'Support2t003' : 'Your modem may have a reset button that you need to press.',
'Support2t004' : 'Trouble restarting your modem?',
'Support2t005' : 'Try the following steps to restart your modem:',
'Support2t006' : 'Unplugging your modem\'s power supply.',
'Support2t007' : 'Wait for any lights on the modem to turn off.',
'Support2t008' : 'If the lights stay on, your modem may have a battery backup. Somewhere (often on the back) is a reset button. Press it.',
'Support2t009' : 'You should see the modem\'s lights go off. Wait a few seconds before plugging the power supply back in.',
'Support2t010' : 'Once you\'ve done these steps, click Try again.',
'Support2t016' : 'Why restart the modem?',
'Support2t017' : 'Some modems need to be restarted to talk with a new router or an unfamiliar computer. We can see your modem, but it\'s not talking to your new router, so giving it a quick restart will most likely do the trick.<span class="nub"></span>',
'Support3MRt001' : 'We weren\'t able to detect a connection to your ADSL line.',
'Support3MRt002' : 'Check that there\'s a network cable between your ADSL wall jack and your router.',
'Support3MRt003' : 'In some areas a filter is required.',
'Support3MRt004' : 'We\'re pretty sure there\'s a wiring problem.',
'Support3MRt005' : 'There should be a cable connecting the grey port on your router to your ADSL/phone jack.',
'Support3MRt006' : 'Check that both ends of the cable are fully seated.',
'Support3MRt007' : 'Check that the cable is plugged into the grey port of your router, rather than one of the yellow ones.',
'Support3MRt008' : 'If you were given a ADSL line filter, please make sure it is between the cable and your ADSL jack.',
'Support3MRt010' : 'Check that both ends of the cable are fully seated.',
'Support3MRt011' : 'Check that the cable is plugged into the network port of your router\'s power supply.',
'Support3MRt012' : 'If you were given an ADSL line filter, please make sure it is connected between the cable and your ADSL jack.',
'Support3MRt016' : 'Once you\'ve done these steps you\'ll be ready to try again.',
'Support3MRt018' : 'Pull up the following URL on a device that is connected to the Internet and learn how to fix the problem yourself: <strong>www.belkin.com/support3mr</strong>',
'Support3MRt021' : 'Wiring',
'Support3MRt022' : 'The most common wiring difficulty involves your ADSL jack. It\'s important to check both ends of the cable. <span class="nub"></span>',
'Support3MRt050' : 'Check that there\'s a network cable between your router\'s power supply and the phone jack.',
'Support3MRt051' : 'There should be a cable connecting your router\'s power supply to your ADSL/phone jack.',
'Support3PMt001' : 'We weren\'t able to detect a connection to your ADSL line.',
'Support3PMt002' : 'Make sure there\'s a network connection between your router and its power supply plug (which has a built-in modem).',
'Support3PMt004' : 'We\'re pretty sure there\'s a wiring problem.',
'Support3PMt005' : 'There should be a network connection between the yellow port on your router and the router\'s power supply.',
'Support3PMt006' : 'Look at the router\'s power supply plug, and find the cable that splits into two separate lines. One of these lines has an ethernet plug.',
'Support3PMt007' : 'Insert the ethernet plug into the yellow port on your router.',
'Support3PMt010' : 'Once you\'ve done this, you\'ll be ready to try again.',
'Support3PMt012' : 'Go to <strong>www.belkin.com/support3PM</strong> on a device connected to the Internet.',
'Support3PMt016' : 'Wiring',
'Support3PMt017' : 'Making sure there is an unbroken series of connections from your ADSL jack through to your router is essential. The router expects this signal to come in through the yellow port. The cable coming from your router\'s power supply carries this signal and power to the router; both halves of it must be plugged into your router for things to work as they should. <span class="nub"></span>',
'Support3t001' : 'Your modem never came back on.',
'Support3t002' : 'Check that the modem has power.',
'Support3t003' : 'You may need to wait a little while for it to become ready.',
'Support3t004' : 'Trouble restarting your modem?',
'Support7t005' : 'Try the following steps to establish an ADSL connection:',
'Support7t006' : 'Check that the network cable from your modem-router is attached to a phone jack that has Internet. Then click Try Again and see if your modem-router can detect the Internet.',
'Support7t007' : 'If your modem-router shares its phone jack with a landline phone (through a splitter), replace the splitter with a filter-splitter (optional). Then click Try Again and see if your modem-router can detect the Internet Service Provider.',
'Support7t008' : 'If step 2 above doesn\'t work, then ADSL filters may be required*. If you have some (usually given by your Internet Service Provider), connect them between all your landline phones and their phone jacks.',
'Support7t009' : 'If the ADSL connection still doesn\'t work after trying steps 1-3 above, then contact your Internet Service Provider for their tech support. Tell them that you\'re having trouble getting your modem-router to synchronize with the ISP.',
'Support3t010' : 'Once you\'ve done these steps click Try again.',
'Support3t016' : 'Why restart the modem?',
'Support3t017' : 'Some modems need to be restarted to talk with a new router or an unfamiliar computer. We can see your modem, but it\'s not talking to your new router, so giving it a quick restart will most likely do the trick.<span class="nub"></span>',
'Support4t001' : 'We weren\'t able to reconnect to your router.',
'Support4t002' : 'Try restarting your router.',
'Support4t003' : 'Once your router is up and running, try connecting to it again.',
'Support4t004' : 'Let\'s try some other things.',
'Support4t005' : 'First, let\'s restart your router.',
'Support4t006' : 'Unplug your router\'s power supply, wait a few seconds, and plug it back in.',
'Support4t006w' : 'Unplug your router\'s power supply, wait a few seconds, and plug it back in.',
'Support4t007' : 'Once your router is showing a solid blue light we are ready to connect.',
'Support4t008' : 'Next, let\'s try a wireless connection.',
'Support4t031' : 'It\'ll take a few seconds to establish the connection, then you\'ll be ready to try again.',
'Support4t032' : 'Or you can try a wired connection.',
'Support4t033' : 'Consider plugging a computer into the router. Use an Ethernet cable between the computer and one of the grey ports on the router. Visiting http://router/ from there will let you try setting up again.',
'Support4t034' : 'Once you\'ve done these steps click Try again.',
'Support4t040' : 'Go to <strong>http://belk.in/PMuxOg</strong> on a device connected to the Internet',
'Support4t050' : 'Regaining a connection',
'Support4t051' : 'In these situations your router could need to restart or just need to reestablish a connection. So we\'ve included instructions for both. Since you may have changed your network password in a previous step, you may need to re-select the network once you\'ve restarted the router.<span class="nub"></span>',
'Support5t001' : 'We weren\'t able to reconnect to your router.',
'Support5t002' : 'Try restarting your router.',
'Support5t003' : 'Once your router is up and running, try connecting to it again.',
'Support5t004' : 'Let\'s try some other things.',
'Support5t005' : 'First, let\'s restart your router.',
'Support5t006' : 'Unplug your router\'s power supply, wait a few seconds, and plug it back in.',
'Support5t006w' : 'Unplug your router, wait a few seconds, and plug it back in.',
'Support5t007' : 'Once your router is showing a solid blue light we are ready to connect.',
'Support5t008' : 'Next, let\'s try a wireless connection.',
'Support5t009' : 'It\'ll take a few seconds to establish the connection, then you\'ll be ready to try again.',
'Support5t010' : 'Or you can try a wired connection.',
'Support5t011' : 'You could plug a computer into the router. Plug an Ethernet cable between the computer and one of the grey ports on the router. Visiting http://router/ from there will let you try setting up again.',
'Support5t012' : 'Once you\'ve done these steps click Try again.',
'Support5t015' : 'Go to <strong>http://belk.in/PMuxOg</strong> on a device connected to the Internet',
'Support5t020' : 'Regaining a connection',
'Support5t021' : 'In these situations it is difficult to tell if your router needs to restart or we just need to re-establish a connection to it. So we\'ve included instructions for both of these. Since we changed your network name in a previous step, please make sure to connect to the new network once you\'ve re-started the router.<span class="nub"></span>',
'Support6t001' : 'We weren\'t able to reconnect to your router.',
'Support6t002' : 'Try restarting your router.',
'Support6t003' : 'Once your router is up and running, try connecting to it again.',
'Support6t004' : 'Let\'s try some other things.',
'Support6t005' : 'First, let\'s restart your router.',
'Support6t006' : 'Unplug your router\'s power supply, wait a few seconds, and plug it back in.',
'Support6t006w' : 'Unplug your router, wait a few seconds, and plug it back in.',
'Support6t007' : 'Once your router is showing a solid blue light we are ready to connect.',
'Support6t008' : 'Next, let\'s try a wireless connection.',
'Support6t031' : 'It\'ll take a few seconds to establish the connection, then you\'ll be ready to try again.',
'Support6t032' : 'Or you can try a wired connection.',
'Support6t033' : 'You could plug a computer into the router. Plug an Ethernet cable between the computer and one of the grey ports on the router. Visiting http://router/ from there will let you try setting up again.',
'Support6t034' : 'Once you\'ve done these steps click Try again.',
'Support6t037' : 'Go to <strong>http://belk.in/Nm1f5S</strong> on a device connected to the Internet',
'Support6t050' : 'Regaining a connection',
'Support6t051' : 'In these situations your router could need to restart or just need to reestablish a connection. So we\'ve included instructions for both. Since you may have changed your network password in a previous step, you may need to re-select the network once you\'ve restarted the router.<span class="nub"></span>',
'Support7t001' : 'Your modem-router isn\'t connected to the internet.',
'Support7t004' : 'There\'s a problem with the connection at your phone jack.',
'Support7t050' : 'Connection troubles',
'Support7t051' : 'In these situations it is difficult to tell why we\'re having trouble connecting to the ISP. We\'ve checked your wiring to the extent possible, so the next step is to check that you\'re using the right jack, a filter if needed, and if that fails, to call your ISP. <span class="nub"></span>',
'SupportNumber' : '1-800-123-4567',
'UpSpeed' : '12.5',
'p2410t012' : 'Clicking \'Restore\' will erase your router settings like name and password, and will replace them with the original factory defaults.  Your computers, phones, etc, would then have to be configured to match these settings in order to get online through this router.  Are you sure you want to continue?',
'gtRestore' : 'Restore',
'gtCancel' : 'Cancel',
'alt="Loading"' : 'Loading',
'alt="Restart Router"' : 'Restart Router',
'alt="Check Wires"' : 'Check Wires',
'alt="Check Phone Connection"' : 'Check Phone Connection',
'alt="Check WAN Connection"' : 'Check WAN Connection',
'alt="Checkmark"' : 'Checkmark',
'alt="Change"' : 'Change',
'alt="Print"' : 'Print',
'alt="Expand"' : 'Expand',
'alt="Caret"' : 'Caret',
'alt="Cut"' : 'Cut',
'alt="Browser"' : 'Browser',
'alt="Wifi"' : 'Wifi',
'alt="Password"' : 'Password',
'alt="Check Phone Jack"' : 'Check Phone Jack',
'alt="Turn Off Modem"' : 'Turn Off Modem',
'alt="Turn On Modem"' : 'Turn On Modem',
'alt="Check Phone Filters"' : 'Check Phone Filters',
'gtSerial' : 'Serial No.',
'gt5GName' : '5GHz SSID',
'gt5GKey' : '5GHz Key',
'p1020MRt001' : 'We\'re having trouble talking with your Internet Service Provider.',
'p1020MRt002' : 'Please restart your modem-router.',
'p1020MRt003' : 'We\'re not getting an Internet connection, so let\'s try restarting your modem-router.',
'p1020MRt004' : 'Turn off your modem-router. Usually this involves throwing a switch on the modem-router or simply unplugging its power supply.',
'p1020MRt005' : 'Wait 15 seconds.',
'p1020MRt006' : 'Turn your modem-router back on.',
'p1020MRt007' : 'After several seconds its lights will be on and it should make contact with your ISP.',
'p1020MRt008' : 'If this problem persists, please contact your ISP to troubleshoot your account.',
'p1020MRt009' : 'We\'ll watch for your modem-router to turn off and on, then we\'ll continue automatically.',
'p1020MRt010' : 'Why restart the modem?',
'p1020MRt011' : 'Some modems need to be restarted before they will talk to a new router or an unfamiliar computer. And if there\'s a hiccup at your Internet Service Provider, the modem can drop your connection unexpectedly. We can see your modem but not the Internet, so giving it a quick restart will most likely do the trick.<span class="nub"></span>',
'p1010t001' : 'We\'re having trouble talking with your modem.',
'p1010t002' : 'We think there\'s a wiring problem.',
'p1010t003' : 'There should be a cable connecting your modem to the yellow port on your router. Your modem should be on.',
'p1010t004' : 'There are a few things you can do to make sure things are ready to go:',
'p1010t005' : 'Make sure your modem is turned on. Its power adapter should be plugged in at both ends, and one or more lights on the modem should be on.',
'p1010t006' : 'There should be a network cable connecting your modem to the yellow port on your router. This cable carries the signal from your modem to your router; without it, you can\'t get online.',
'p1010t007' : 'If these are both as they should be, you might try restarting your modem by unplugging its power supply, waiting fifteen seconds, then plugging it back in. If your modem has a battery you may need to find the modem\'s reset button and use that instead.',
'p1010t008' : 'Here\'s what these connections should look like:',
'p1010t009' : 'We\'ll continue watching for a connection while you check.',
'p1010t010' : 'The most common wiring difficulty is between the modem and the router. It\'s important to check both ends of the cable. One end should be plugged into the yellow port on your new router; the other end should be connected to a similar port on your modem. Different modem makers label the ports differently; you might find it labeled "data", "LAN", "network", or "Ethernet".',
'Support3t005' : 'Try the following steps to restart your modem:',
'Support3t006' : 'Check your modem\'s front panel for any lights. If they are lit, your modem is on, and you might need to wait a little while for the modem to be ready.',
'Support3t007' : 'Check that your modem\'s power supply is properly connect to the modem and a wall socket.',
'Support3t008' : 'If your modem has a power switch, check that it is in the on position.',
'Support3t009' : 'Double-check that your modem is still connected to your new router.',
'Support1t012' : 'Go to <strong>http://belk.in/LIkBoH</strong> on a device connected to the Internet',
'QOSt001' : 'To enable Intellistream, do the following:',
'QOSt002' : 'Use an ethernet cable to connect your computer to your Belkin router (recommended).',
'QOSt003' : 'Run a speed test for your internet connection by clicking here for <a href="http://www.speedtest.net" target="_blank" class="speed_font4">Speedtest.net</a>',
'QOSt004' : 'After running the speed test, enter the values you see at Speedtest.net into the Download Speed and Upload Speed fields above, then click \'Save\' below.',
'gtMbps' : 'Mbps',
'QOSt006' : 'With your high Download Speed, Intellistream will prioritize your Upload Speed only.',
'QOSt007' : 'With your high Upload Speed, Intellistream will prioritize your Download Speed only.',
'QOSt008' : 'With these high internet speeds, Intellistream won\'t be of help so it won\'t be enabled here.',
'QOSt009' : 'Please enter a number greater than 0.01.',
'QOSt010' : 'Please enter numbers greater than 0.01.',
'gtSettingsNotSaved' : 'You have unsaved settings. Stay here to save them, or leave or reload to discard the changes.',
'QOSt011' : 'Please enter a number between 0.01 and 100.00.',
'QOSt012' : 'Please enter numbers between 0.01 and 100.00.',
'QOSt013' : 'Please enter a number between 0.01 and 1000.00.',
'QOSt014' : 'Please enter numbers between 0.01 and 1000.00.',


// End belkin transation table
LastID : "LastValue"	
	
	
}

function translate(key) {
	return langDictionary[key];
}
