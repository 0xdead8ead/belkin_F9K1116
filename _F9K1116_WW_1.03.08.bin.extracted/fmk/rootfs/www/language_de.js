function dw(message)
{
	document.write(message);	
}


chkwait='Es wird überprüft, ob neuere Firmware vorhanden ist...';


common_err1=" %s is NULL";
common_err2="Aktiviert";
common_err3="Deaktiviert";
dyndns_err1="Kein Bericht.";
dyndns_err2="Diese Fächer dürfen nicht leer sein";
dyndns_err3="IP Addresse ist unverändert, und braucht nicht aktualisiert zu werden!";
dyndns_err4="eine NULL in Benutzernamen, Kennwort oder Hostnamen";
dyndns_err5="DNS Abfrage fehlgeschlagen";
dyndns_err6="DNS Serverfehler";
dyndns_err7="Keine Rückmeldung von DNS Server oder keine Internetverbindung";
dyndns_err8="HTTP kann nicht verbinden";
dyndns_err9="Benutzername- oder Kennwortfehler";
dyndns_err10="Update OK: Gut";
dyndns_err11="Update OK: Gut";
dyndns_err12="Bitte Warten";
dyndns_err13="Domainname nicht vollständig qualifiziert:notfqdn";
dyndns_err14="Host existiert nicht:nohost";
dyndns_err15="Host wird nicht von Ihnen verwaltet";
dyndns_err16="Blockiert wegen Misbrauch:abuse";
dyndns_err17="DynDNS Serverfehler:numhost";
dyndns_err18="Dienst ist deaktiviert worden";
dyndns_err19="Unbekannte Rückmeldung erhalten!";
dyndns_err20="Unbekannte Fehler ist aufgetreten!";
dyndns_err21="Kann HTTP Sockel nicht öffnen";
dyndns_err22="WAN IP Adresse ist NULL";
dyndns_err23='Registrierung fehlgeschlagen';
dyndns_err24='Registriert';
dyndns_err25='Die Anmeldung ist fehlgeschlagen';
dyndns_err26='Verbindung fehlgeschlagen';
upgrade_err1="Die Upgrade-Datei ist nicht der korrekte Typ oder die richtige Version für dieses Gerät. Das Upgrade ist fehlgeschlagen. Bitte versuchen Sie es mit der korrekten Datei erneut.";
upgrade_err2="Firmware-Upgrade wurde aufgrund von unzureichenden Quellen abgebrochen. Upgrade fehlgeschlagen.\nBitte erneut versuchen, wenn das System deaktiviert ist (kein Internetverkehr)";
upgrade_err3="Hochladen nicht möglich, bitte Kontakt mit Administrator aufnehmen.";
upgrade_err4="Firmware ist zu groß, Upgrade fehlgeschlagen.";
upgrade_err5="Die neueste Firmware ist bei Ihnen bereits installiert.";
upgrade_err6="Das Firmware-Update ist anscheinend unterbrochen worden.  Bitte laden Sie die Firmware-Datei erneut herunter und versuchen Sie es noch einmal.";
upgrade_err7="Kabelloser Client kann kein Firmware-Upgrade durchführen.";
upgrade_err8="Upgrade-Datei ist NULL oder zu klein.\nUpgrade fehlgeschlagen.\nBitte die korrekte Datei besorgen und erneut versuchen.";
OK='OK';
Cancel='Abbrechen';
Close='Schließen';
show0='Router-Einrichtung';
show1='Start';
show2='Hilfe';
show3='Anmelden';
show4='Abmelden';
show5='Internetstatus';
show6='Verbunden';
show7='Nicht verbunden';
show8='LAN-Konfigurierung';
show9='LAN-Einstellungen';
show10='DHCP-Client-Liste';
show11='Internet WAN';
show12='Verbindungstyp';
show13='DNS';
show14='MAC-Adresse';
show15='DDNS';
show16='WLAN nicht verfügbar';
show17='Funknetz';
show18='Kanal und SSID';
show19='Sicherheit';
show20='Als Access Point verwenden';
/*show21='Specify IP Address';*/
show21='Wi-Fi Protected Setup';
show22='MAC-Adresskontrolle';
show23='Funkbrücke (Bridge)';
show24='Firewall';
show25=' Virtuelle Server';
show26='Client-IP-Filter';
show27='MAC-Adressfilter';
show28='DMZ';
show29='WAN-Ping-Filter';
show30='Sicherheitsprotokoll';
show31='Dienstprogramme';
show33='Router neu starten';
show34='AP neu starten';
show35='Werkseinstellungen wiederherstellen';
show36='Einstellungen Speichern/Sichern';
show37='Vorherige Einstellungen wiederherstellen';
show38='Firmware aktualisieren';
show39='Systemeinstellungen';
show42='EWC Setting';
show43='Setup Wizard';
show44='Manual Settings';
show47='Zugriffskontrolle';
show48='Self Healing';
show54='Verbindungseinstellungen';
sm1='Details';
btn1='Änderungen aufheben';
btn2='Änderungen übernehmen';
btn3='Website';
btn4='Reset to Default';
btn5='Previous';
btn6='Routing Table';
btn7='Apply';
Router='Router';
AP='AP';
Dynamic='Dynamisch';
Static='Statisch';
PPPoE='PPPoE';
PPTP='PPTP';
L2TP='L2TP';
Multi_PPPoE='Multi-PPP over Ethernet';
UNKNOWN='UNBEKANNT';
cff1='Firmware erfolgreich prüfen';
cff2='Firmware-Informationen.';
cff3='Für diesen Router steht keine Firmware-Aktualisierung zur Verfügung.';
cff4='Kann keine Verbindung zum Firmware-Server herstellen, <br>bitte überprüfen Sie die WAN-Verbindung.';
d1='Belkin | Administrator duplizieren';
d2='Administrator duplizieren';
d3='Dieses Gerät wird verwaltet von';
d4='derzeit!!';
fc1=' Firewall > Client-IP-Filter';
fc2a='Sie können den Router so einstellen, dass der Zugriff auf das Internet, E-Mails oder andere Netzwerkdienste auf bestimmte Tage und Uhrzeiten beschränkt wird.';
IP='IP';
Port='Schnittstelle';
Type='Typ';
BT='Sperrzeit';
Day='Tag';
Tm='Zeit';
Enable='Aktivieren';
BOTH='BEIDE';
Always='Immer';
Block='Blockieren';
SUN='>SON';
MON='>MON';
TUE='>DIE';
WED='>MIT';
THU='>DON';
FRI='>FRE';
SAT='>SAM';
PM=':00 PM';
AM=':00 AM';
PM2=':30 PM';
AM2=':30 AM';
EcoMode='ECO-Modus:';
Dimicons='Dim-Symbol';
DisableEco='Funk deaktivieren von';
EcoTo='Bis';
EcoSu='So';
EcoMo='Mo';
EcoTu='Di';
EcoWe='Mi';
EcoTh='Do';
EcoFr='Fr';
EcoSa='Sa';
EcoExcept='außer';
fcsm='Die Zahl im Eingabefeld für die Schnittstelle muss zwischen 1 und 65535 liegen.';
fcnsm='Der private Schnittstellenbereich ist nicht korrekt.';
fcripm='Die zweite Zahl des IP-Bereichs muss größer sein als die erste.';
fcnsm='Die Bereiche der Eingangsschnittstellen dürfen keine Überschneidung haben.';
fcwdm='Der Endtag muss später sein als der Beginntag.';
fcdtm='Die Zeit muss später sein als die Start-Zeit, wenn beide auf denselben Tag fallen.';
fclanip='Der IP-Filter-Bereich sollte die LAN-IP-Adresse nicht umfassen.';
fd1='Firewall > DMZ ';
fd2='Mit der DMZ-Funktion können Sie einen Computer festlegen, der von der NAT-Firewall ausgenommen werden soll. Das kann erforderlich sein, wenn die NAT-Funktion bei einer Anwendung Probleme verursacht, zum Beispiel bei einem Spiel oder einer Videokonferenz. Benutzen Sie diese Funktion nur zeitweise.';
fd3='Der DMZ-Computer ist NICHT vor Hacker-Angriffen geschützt.</font> ';
fd4='Um einen Computer in den DMZ-Status zu versetzen, geben Sie die letzten Ziffern seiner IP-Adresse in das Eingabefeld unten ein und wählen Sie "Aktivieren". Klicken Sie auf "Änderungen übernehmen", um die Änderung in Kraft zu setzen.';
fd5='IP-Adresse des virtuellen DMZ-Hosts';
fd6='Statische IP';
fd7='IP-Adresse des virtuellen DMZ-Host ';
fd8='Aktivieren';
fmc1='Firewall > MAC-Adressfilter';
fmc2='Mit dieser Funktion richten Sie eine Liste zulässiger Clients ein. Wenn Sie diese Funktion aktivieren, müssen Sie die MAC-Adressen aller Clients in Ihrem Netzwerk eintragen, damit sie auf das Netzwerk zugreifen können.';
fmc3=' MAC-Adresse aller Clients in Ihrem Netzwerk angeben.';
fmc4='MAC-Adressfilterliste';
fmc5='Blockieren';
fmc6='Host';
fmc7='MAC-Adresse';
fmc8='Diese MAC-Adresse wurde bereits zugefügt!';
fmc9='Sie nur können bis zu 20 Einträge.';
Add='Hinzufügen';
Added='Added'
Del='Entfernen';
fmcipm='Entweder haben Sie nicht alle Hexadezimal-Ziffern eingegeben oder einige der eingegebenen Hexadezimal-Ziffern sind ungültig. Ein Hexadezimalzeichen ist entweder eine Zahl zwischen 0 und 9 oder ein Buchstabe zwischen A(a) und F(f).';
fmn1='Firewall > ';
fmn2='Ihr Router ist mit einer Firewall ausgestattet, die Ihr Netzwerk vor einer Reihe häufig vorkommender Hacker-Attacken schützt, darunter PoD (Ping of Death) und DoS-Angriffe (Denial of Service). Sie können die Firewall bei Bedarf abschalten. Dadurch ist Ihr Netzwerk Angriffen nicht völlig schutzlos ausgeliefert; die Gefahr unbefugter Eingriffe wächst jedoch. Daher sollten Sie die Firewall weitmöglichst aktiviert lassen.';
fmn3='Firewall aktivieren/deaktivieren ';
Disable='Deaktivieren';
fp1='Firewall > WAN Ping-Blockierung';
fp2='ERWEITERTE FUNKTION! Sie können den Router so einstellen, dass er auf ICMP-Pings (Pings an der WAN-Schnittstelle) nicht reagiert. Dadurch erhöht sich Ihre Sicherheit.';
fp3='ICMP-Ping blockieren ';
fs1='Firewall > Sicherheitsprotokoll';
fs1b='Dienstprogramme > Sicherheitsprotokoll';
fs2='Der Router protokolliert alle routerinternen Aktivitäten wie das An- und Abmelden von Computern und Versuche aus dem Internet, auf den Router zuzugreifen. Das Protokoll kann unten angezeigt werden. ';
fs3='Protokolldatei';
Save='Speichern';
Clear='Löschen';
Refresh='Aktualisieren';
System_log='Systemprotokoll:';
Firewall_log='Firewall-Protokoll:';
fv1=' Firewall > Virtuelle Server';
fvipm='Entweder haben Sie nicht alle IP-Adressen eingegeben \n oder einige der eingegebenen Zahlen sind ungültig. \n Die Zahl im Eingabefeld für die IP-Adresse muss zwischen 0 und 254 liegen.';
fvrm='Bitte deaktivieren Sie die Fernverwaltung. Es liegt ein Konflikt mit einer Schnittstelle Ihres virtuellen Servers vor.\' Eingangsschnittstelle.';
fvipr='Der Eingangsschnittstellenbereich ist nicht korrekt.';
fvppr='Der private Schnittstellenbereich ist nicht korrekt.';
fvippnm='Der Eingangsschnittstellenbereich ist nicht korrekt.';
fv2='Mit dieser Funktion können Sie externe (Internet-)Anfragen bei Diensten wie Web-Server(Port 80), FTP-Server (Port 21) oder andere Anwendungen über Ihren Router zum internen Netzwerk aktivieren.';
fv3='Active Worlds';
fv4='Age of Empires';
fv5='Age of Empires-Erweiterung: The Rise of Rome';
fv6='Age of Empires II-Erweiterung: The Conquerors';
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
fv22='CART Precision Racing';
fv23='Close Combat für Windows';
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
fv39='DirectX 7 Spiele';
fv40='DirectX 8 Spiele';
fv41='DNS-Server (Domain Name Server)';
fv42='Doom';
fv43='Dune 2000';
fv44='Dwyco Videokonferenzen';
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
fv56='FTP-Server';
fv57='GNUtella';
fv58='Golf 1998 Edtion';
fv59='Golf 1999 Edition';
fv60='Golf 2001 Edition';
fv61='Go2Call';
fv62='Half Life';
fv63='Half Life Server';
fv64='Heretic II Server';
fv65='I76';
fv66='Ivisit';
fv67='IRC';
fv68='IStreamVideo2HP';
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
fv79='Media Player (Medienwiedergabe) 7';
fv80='Midtown Madness ';
fv81='Midtown Madness 2';
fv82='Mig 29';
fv83='Monster Truck Madness ';
fv84='Motocross Madness 2';
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
fv95='NTP-Protokoll (Network Time Protocol)';
fv96='NNTP (News Server)';
fv97='OKWeb';
fv98='OKWin';
fv99='Outlaws';
fv100='pcAnywhere v7.5';
fv101='PhoneFree';
fv102='Polycom ViaVideo H.323';
fv103='Polycom ViaVideo H.324';
fv104='Quake';
fv105='Quake II (Client und Server)';
fv106='Quake III';
fv107='Red Alert';
fv108='Rise of Rome';
fv109='Roger Wilco';
fv110='Rogue Spear';
fv111='Secure Shell Server (SSH)';
fv112='Secure Web Server (HTTPS)';
fv113='ShoutCast';
fv114='SNMP ';
fv115='SNMP-Trap';
fv116='Speak Freely';
fv117='StarCraft';
fv118='Starfleet Command';
fv119='StarLancer';
fv120='SWAT3';
fv121='Telnet-Server';
fv122='The 4th Coming';
fv123='Tiberian Sun: C&C ';
fv124='Tiberian Sun: C&C III"';
fv125='Total Annihilation';
fv126='Ultima';
fv127='Unreal Tournament';
fv128='Urban Assault';
fv129='VoxPhone 3.0 ';
fv130='Warbirds 2';
fv131='Web-Server (HTTP)';
fv132='WebPhone 3.0';
fv133='Windows 2000 Terminalserver';
fv134='X Windows';
fv135='Yahoo Pager';
fv136='Yahoo Messenger Chat';
fv137='Pal Talk';
fv138='Real Player 8 Plus';
fv139='RealAudio';
fv140='Netmeeting 2.0, 3.0, Intel Video Phone';
fv141='Westwood Online ';
fv142='CuSeeMe ';
fv143='ICUII-Client';
fv200='Eingabe löschen ';
Description='Beschreibung';
Inb='Interne Schnittstelle';
Type='Typ';
Pipa='Private IP-Adresse ';
Pport='Private Schnittstelle';
htop='oben';
h1='Hilfe';
h2='FACHGLOSSAR';
h3='<b>Administrator</b> Ein Administrator ist für die Wartung eines Netzwerks verantwortlich. Bei diesem Router die Person, die ihn einrichtet und seine Einstellungen verändert.';
h4='<b>Client</b> Computer im Netzwerk, der die Dienste des Routers nutzt, zum Beispiel den automatischen DHCP-Server und die Firewall.';
d5='<b>DDNS</b> Der dynamische DNS-Dienst ermöglicht es Ihnen, eine dynamische IP-Adresse in jeder der zahlreichen Domänen, die DynDNS.org anbietet, als statischen Hostnamen auszuweisen. Sie erlauben Ihren Netzwerkcomputern damit, leichter auf verschiedene Bereiche des Internets zuzugreifen. DynDNS.org bietet diesen Dienst für maximal fünf Hostnamen kostenlos im Internet an.';
h5='<b>DHCP</b> Dynamic Host Configuration Protocol. Dieses Protokoll konfiguriert die TCP/IP-Einstellungen jedes Computers im SoHo-Netzwerk automatisch.';
h6='<b>DFÜ</b> Verbindung, die über das öffentliche Telefonnetz zustande kommt.';
h7='<b>DMZ</b> Virtuelle Zone im Router, die von seiner Firewall nicht geschützt wird.  Es kann jeweils nur ein Computer in die DMZ-Zone versetzt werden.';
h8='<b>DNS-Serveradresse</b> DNS steht für Domain Name System (Domänen-Namensystem). Mit DNS können Internet-Hostrechner einen Domänennamen (zum Beispiel belkin.de) und mehrere IP-Adressen wie 192.34.45.8 besitzen. DNS-Server unterhalten eine Datenbank, in denen die Hostrechner und ihre jeweiligen Domänennamen und IP-Adressen verzeichnet sind. Wird ein Domänenname abgefragt (zum Beispiel durch die Eingabe von "belkin.com" in Ihrem Browser) wird der Benutzer mit der entsprechenden IP-Adresse verbunden. Die Computer in Ihrem Netzwerk zu Hause verwenden die DNS-Serveradresse des DNS-Servers, den Ihnen Ihr Provider zugewiesen hat.';
h9='<b>DSL-Modem</b> DSL ist die Abkürzung von "Digital Subscriber Line" (Digitale Teilnehmerleitung). DSL-Modems nutzen die vorhandene Telefonleitung zur Datenübertragung mit hoher Geschwindigkeit.';
h10='<b>Dynamische IP</b> IP-Adresse, die von einem DHCP-Server automatisch zugewiesen wurde.';
h11='<b>Ethernet</b> Standard für Computernetzwerke. Ethernet-Netzwerke verbinden Computer durch spezielle Kabel und Hubs und ermöglichen Datenübertragungen mit bis zu 10 Millionen Bit pro Sekunde (Mbit/s).';
h12='<b>Firewall</b> Elektronische Schwelle, die den Zugriff Unbefugter auf bestimmte Dateien oder Computer in einem Netzwerk verhindert.';
h13='<b>Firmware</b> Software, die permanent im Arbeitsspeicher gespeichert ist. Wichtige Programme, die auch beim Abschalten des Systems im Speicher bleiben. Firmware kann leichter als Hardware verändert werden, ist aber dauerhafter als die Software auf einer Festplatte.';
h14='<b>IP-Adresse</b> IP steht für "Internet Protocol" (Internet-Protokoll). IP-Adressen bestehen aus vier Zahlen, die durch Punkte voneinander getrennt werden. Die Zahlenfolge kennzeichnet jeweils einen bestimmten, eindeutigen Host-Computer im Internet. Beispiel: 192.34.45.8.';
h15='<b>ISDN</b> Kürzel für "Integrated Services Digital Network". Digitale Telekommunikationsverbindungen, die sowohl Sprach- als auch digitale Netzwerkdienste bei Raten bis zu 128 K bieten. Sie sind wesentlich schneller und zuverlässiger als analoge Hi-Speed Verbindungen per Modem. ISDN-Leitungen werden in der Regel von Telefongesellschaften angeboten.';
h16='<b>ISP</b> Abkürzung für Internet Service Provider (Internet-Dienstanbieter, Provider). Der ISP stellt die Verbindung für Einzelpersonen, Unternehmen und Organisationen zum Internet bereit.';
h17='<b>ISP-Gateway-Adresse</b> (siehe auch ISP). Die ISP-Gateway-Adresse ist eine IP-Adresse für den Internet-Router des Providers. Diese Adresse wird nur für Kabel- oder DSL-Modems benötigt.';
h18='<b>LAN</b> Local Area Network (lokales Netzwerk). Als LAN wird eine Gruppe von Computern und Geräten bezeichnet, die auf relativ kleiner Fläche miteinander verbunden sind (zum Beispiel in einem Haus oder Büro). Ihr Netzwerk zu Hause ist ein solches LAN.';
h19='<b>MAC-Adresse</b> MAC steht für Media Access Control (Medienzugangskontrolle). MAC-Adresse ist die Bezeichnung für die Hardware-Adresse eines Geräts, das mit einem Netzwerk verbunden ist.';
h20='<b>MTU</b> Maximum Transmission Unit (maximale Übertragungseinheit). Die größte Datenmenge, die auf ein bestimmtes physikalisches Medium übertragen werden kann.';
h21='<b>NAT</b> Network Address Translation (Netzwerkadressübersetzung). Durch dieses Verfahren können alle Computer in Ihrem Heimnetzwerk eine IP-Adresse gemeinsam nutzen. Durch die NAT-Funktionalität des HomeConnect Heimnetzwerk-Gateways können alle Computer in Ihrem Heimnetzwerk auf das Internet zugreifen, ohne dass Sie mehrere IP-Adressen von Ihrem Provider beziehen müssen.';
h22='<b>Schnittstelle (Port)</b> Logischer Kanal, der durch seine eindeutige Schnittstellennummer gekennzeichnet ist. Anwendungen warten an bestimmten Schnittstellen auf Daten, die für sie bestimmt sein könnten.';
h23='<b>PPPoE</b> Point-to-Point Protocol over Ethernet (PPP-Protokoll über Ethernet). Das PPP-Protokoll ist ein Verfahren zur sicheren Datenübertragung, das ursprünglich für DFÜ-Verbindungen entwickelt wurde. PPPoE setzt dieses Verfahren in Ethernet-Netzwerken um.';
h24='<b>PPTP</b> Point-to-Point Tunneling Protocol (PPTP-Tunnel-Protokoll) Eine Version des PPP-Protokolls, das Datenpakete, die für ein bestimmtes Netzwerk formatiert wurden, zu Paketen für ein anderes Protokoll umformen kann. Durch dieses Tunnelverfahren können TCP/IP-Daten auch über TCP/IP-fremde Netzwerke übertragen werden. PPTP kann zur Vernetzung unterschiedlicher physikalischer Netzwerke mit dem Internet als Mittler dienen.';
h25='<b>SNTP</b> Simple Network Time Protocol (Einfaches Netzwerkzeitprotokoll) Kommunikationsstandard, der die Übertragung von Echtzeitdaten über ein Netzwerk oder das Internet ermöglicht.;  ';
h26='<b>SPI</b> Stateful Packet Inspection (Paketstatus-Überprüfung). SPI ist die Bezeichnung für ein Internet-Sicherheitsverfahren in Industriequalität, das vom HomeConnect Heimnetz-Gateway bereitgestellt wird. Unter SPI dient der Gateway als Firewall, die Ihr Netzwerk vor Computerhackern schützt.';
h27='<b>Statische IP</b> IP-Adresse, die manuell konfiguriert wird und sich nicht ändert.';
h28='<b>Subnetz-Maske</b> Als Subnetz-Maske wird eine Folge von vier Zahlen bezeichnet, die wie eine IP-Adresse aufgebaut ist. In den vom Provider bereitgestellten TCP/IP-Daten sind oft auch Subnetz-Masken enthalten. Subnetz-Masken dienen zur Erstellung von IP-Adressen, die nur innerhalb eines bestimmten Netzwerks gelten (anders als die IP-Adressen im Internet, die von der Organisation InterNIC zentral vergeben werden).';
h29='<b>TCP</b> Transmission Control Protocol (Übertragungskontrollprotokoll). Das gängigste Protokoll für die Internet-Transportschicht. TCP ist verbindungsorientiert und datenstromorientiert und sorgt für zuverlässige Kommunikation über paketvermittelte Netzwerke.';
h30='<b>TCP/IP</b> Transmission Control Protocol over Internet Protocol (Übertragungskontrollprotokoll/Internet-Protokoll). Das Standardprotokoll zur Datenübertragung im Internet.';
h31='<b>UDP</b> User Datagram Protocol. Kommunikationsprotokoll für die Internet-Vermittlungsschicht, Transport- und Sitzungsschicht, das es möglich macht, eine Datagramm-Meldung von einem Computer an eine Anwendung zu versenden, die auf einem anderen Computer läuft. Anders als TCP ist UDP nicht verbindungsorientiert und gewährleistet keine zuverlässige Kommunikation. Die jeweilige Anwendung muss Fehler selbst verarbeiten und die Zuverlässigkeit der Datenvermittlung überprüfen. ';
h32='<b>WAN</b> Wide Area Network (Überregionales Netzwerk). Netzwerk, das Computer, die sich zum Beispiel in verschiedenen Gebäuden, Städten oder Ländern befinden, weiträumig miteinander verbindet. Das bekannteste Beispiel für ein WAN ist das Internet.';
h33='<b>WAN IP-Adresse</b> Die IP-Adresse, die der Provider dem Router zuweist.';
h34='<b>WLAN</b> Wireless Local Area Network (Kabelloses lokales Netzwerk). Lokales Netzwerk, das Computer über Funk miteinander verbindet (zum Beispiel 802.11b)';
h35="<b>L2TP</b> Layer Two (2) Tunneling Protokoll. Eine Erweiterung zum PPP-Protokoll, die es Providern ermöglicht, mit virtuellen privaten Netzwerken (VPNs) zu arbeiten. L2TP verbindet die besten Funktionen der anderen zwei Tunneling Protokolle: PPTP von Microsoft und L2F von Cisco Systems. Wie bei PPTP müssen die Router des Providers bei L2TP das Protokoll unterstützen.";
h39='<b>DHCP</b> Mit der DHCP-Serverfunktion wird die Einstellung eines Netzwerks sehr vereinfacht, weil jedem Computer im Netzwerk eine IP-Adresse zugeteilt wird. Der DHCP-Server kann bei Bedarf deaktiviert werden. Wenn Sie den DHCP-Server deaktivieren, müssen Sie auf jedem Computer im Netzwerk manuell eine statische IP-Adresse einstellen . Der IP-Pool ist der IP-Adressbereich, der für eine dynamische Zuweisung an die Computer im Netzwerk reserviert ist. Die Vorgabe ist 2-100 (99 Computer). Wenn Sie diese Zahl verändern möchten, geben Sie eine neue Start- und eine neue Endadresse ein, und klicken Sie auf „Änderungen übernehmen".';
Enabled='Aktiviert';
Disabled='Deaktiviert';
Auto='Automatisch';
str1='Dieses Gerät wird verwaltet von ';
str2=' derzeit!!';
DDNSDisable='Deaktiviert';
DynDNS='DynDNS';
DtDNS='DtDNS';
Current='Aktueller Kanal';
i1='Einrichten Start';
i2='Status';
i3='Version';
i4='Firmware-Version';
i5='Boot-Version';
i6='Hardware';
i7='Seriennummer';
i8='LAN-Einstellungen ';
i9='LAN/WLAN MAC';
i9a='LAN MAC';
i9b='WLAN nicht verfügbar';
i10='IP-Adresse';
i11='Subnetz-Maske ';
i12='DHCP-Server ';
NoClients='Keine Clients';
Clients='Clients';
i13='Internet-Einstellungen';
i14='WAN MAC-Adresse';
i15='Verbindungstyp';
i16='Subnetz-Maske';
i17='Wan-IP';
i18='Standard-Gateway';
i19='DNS-Adresse';
i20='Merkmale';
i21='NAT';
i22='Firewall-Einstellungen ';
i23='SSID';
i24='Sicherheit';
i25='Drucker';
i26='(aktivieren/deaktivieren)';
i27='Um Einstellungen ändern zu können, müssen Sie sich anmelden.';
i28='Sprache';
i29='Derzeitige Sprache';
i30='Mögliche Sprachen';
i31='Statische IP';
i32='Funknetz Deaktiviert';
ld1='LAN > DHCP';
ld2='LAN > DHCP-Client-Liste';
ld3='Auf dieser Seite werden IP-Adresse, Hostname und MAC-Adresse der einzelnen Computer angegeben, die mit dem Netzwerk verbunden sind. Wenn für einen Computer kein Hostname festgelegt ist, ist das entsprechende Hostnamen-Feld leer. Mit "Aktualisieren" können Sie die Liste aktualisieren.';
ld4='IP-Adresse';
ld5='Hostname';
ld6='MAC-Adresse';
lm1='LAN';
lm2='Ihr Router ist mit einem DHCP-Server ausgestattet, der jedem Computer im Netzwerk automatisch eine IP-Adresse zuweist. Die Werkseinstellungen für den DHCP-Server funktionieren für die meisten Anwendungen. Sie können die Einstellungen jedoch bei Bedarf verändern.';
lm3='Folgende Änderungen können durchgeführt werden:';
lm4='Ändern der internen IP-Adresse des Routers. Vorgabe = 192.168.2.1';
lm5='Ändern der Subnetz-Maske. Vorgabe = 255.255.255.0';
lm6='DHCP-Serverfunktion aktivieren/deaktivieren. Vorgabe= AN (Aktiviert)';
lm7='Einstellen der Start- und der Endadresse des IP-Pools. Vorgabe = Startadresse: 2 / Endadresse: 100';
lm8='Frist für die IP-Adresse angeben. Vorgabe= Unbefristet';
lm9='Lokalen Domänennamen angeben. Vorgabe = Belkin';
lm10='Zur Durchführung von Änderungen klicken Sie links in der Registerkarte "LAN" auf "LAN-Einstellungen';
lm11='Der Router stellt eine Liste aller Client-Computer bereit, die mit dem Netzwerk verbunden sind. Um die Liste abzurufen, klicken Sie links auf der Registerkarte "LAN" auf "DCHP-Client-Liste".';
ls1='LAN > LAN-Einstellungen';
ls2='Hier können Sie Änderungen der Einstellungen für das LAN-Netzwerk vornehmen. Damit die Änderungen umgesetzt werden, müssen Sie auf die Schaltfläche "Änderungen übernehmen" unten auf dem Bildschirm klicken.';
ls3='IP-Adresse';
ls4='Subnetz-Maske';
ls5='DHCP-Server';
On='Aktiviert';
Off='Deaktiviert';
ls6='Die DHCP-Serverfunktion erleichtert die Einrichtung eines Netzwerks, da jedem Computer eine IP-Adresse zugewiesen wird. Hier müssen keine Änderungen durchgeführt werden.';
ls7='IP-Pool-Startadresse';
ls8='IP-Pool-Endadresse';
ls9='Frist';
ls10='Unbefristet';
ls11='Eine halbe Stunde ';
ls12='Ein Stunde';
ls13='Zwei Stunden';
ls14='Ein halber Tag';
ls15='Ein Tag ';
ls16='Zwei Tage ';
ls17='Eine Woche';
ls18='Zwei Wochen';
ls19='Die Zeit, während der der DHCP-Server die IP-Adresse für die einzelnen Computer reserviert.';
ls20='Lokaler Domänenname';
Optional='Optional';
ls21='Funktion zur Benennung eines Netzwerks.';
lssm='Sie haben eine ungültige Nummer für die Subnetz-Maske eingegeben.';
lsnetm='Der IP-Pool muss sich im gleichen Subnetz wie die Gateway-IP befinden. ';
lsendm='Die IP-Endadresse muss größer sein als die IP-Startadresse.';
lspoolm='Die LAN IP-Adresse darf sich nicht im DHCP-Adresspool befinden.';
lsipm2='Ungültige LAN IP-Adresse. Die letzte Zahl kann nicht 0 oder 255 sein.';
lsipm3='Ungültige LAN IP-Adresse. Die erste Zahl kann nicht 0 oder 127 sein.';
lsldnm='Invalid Local Domain Name: `~!@#$%^&*()_+[]{}\\|;:\'"<>/?.,';
lsipm4='Die eingegebene IP ist ungültig';
lsipalert='Bitte geben Sie die neue LAN-Adresse manuell in das Adressfeld in der Statusleiste Ihres Browsers ein.;';
lsipm5='Die gewählte IP-Adresse muss unroutbar sein.\n  192.168.x.x (x steht für eine Zahl zwischen 0 und 255.) \n10.x.x.x (x steht für eine Zahl zwischen 0 und 255.)\n172.y.x.x (y steht für eine Zahl zwischen 16 und 31 und x für eine Zahl zwischen  0 und 255.)';
lsipc='Soll die LAN IP-Adresse wirklich geändert werden?';
lo1='Anmelden';
lo2='Um Einstellungen ändern zu können, müssen Sie sich mit einem Kennwort anmelden. Wenn Sie noch kein eigenes Kennwort eingestellt haben, können Sie dieses Feld leer lassen und auf "Absenden" klicken. ';
lo3='Kennwort ';
lo4='Vorgabe = leer lassen ';
Clear='Löschen';
Submit='Absenden';
le1='Belkin | Anmeldefehler';
lerror='Anmeldefehler !!';
Utilities='Dienstprogramme > ';
ss1='Änderungen vorgenommen';
rs1='Zurücksetzen ';
rs3='Router wird neu gestartet';
rs4='Restdauer in Sekunden.';
ugs1='Erfolgreiche Firmware-Aktualisierung. ';
rf1='Werkseinstellungen wiederherstellen';
rss1='Einstellungen wiederhergestellt';
ufy1='Werkseinstellungen wiederherstellen';
ufy2='Mit dieser Option setzen Sie alle Router-Einstellungen auf die Werkseinstellungen zurück. Es wird empfohlen, die aktuellen Einstellungen zu sichern, bevor Sie die Werkseinstellungen wiederherstellen. Um die Werkseinstellungen des Routers wiederherzustellen, klicken Sie auf die Schaltfläche "Werkseinstellungen wiederherstellen".';
ufy3='ACHTUNG: Alle Einstellungen gehen verloren!\nMöchten Sie den Vorgang fortsetzen?';
ufy4='Die Wiederherstellung der Werkseinstellungen nimmt bis zu 30 Sekunden in Anspruch. Schalten Sie den Router während dieses Vorgangs nicht ab.';
ufy5='Werkseinstellungen werden nicht wiederhergestellt. Alle Einstellungen bleiben erhalten!';
ufy='Werkseinstellungen wiederherstellen';
ufe1='Dienstprogramme > Firmware aktualisieren';
ufe2='Von Zeit zu Zeit veröffentlicht Belkin neue Versionen der Router-Firmware. Firmware-Updates enthalten Verbesserungen und Lösungen für mögliche Probleme. Klicken Sie auf den Link unten, um zu überprüfen, ob für diesen Router neue Firmware verfügbar ist.';
ufe3='HINWEIS: Bitte sichern Sie die aktuellen Einstellungen, bevor Sie auf eine neue Firmware-Version aufrüsten.';
ufe4='Klicken Sie hier';
ufe5='Klicken Sie hier, um auf die Seite Aktuelle Einstellungen Speichern/Sichern zurückzukehren.';
ufe6='Neue Firmwareversion abfragen';
ufe7='Firmware suchen';
ufe8='Aktualisieren der Firmware';
Update='Aktualisieren';
ufe9='Bitte geben Sie den Pfad der Aktualisierungsdatei an. Geben Sie hierzu Pfad und Namen der Datei ein, oder klicken Sie auf "Durchsuchen", um die Datei zu suchen.';
ufe10='Sind Sie sicher, dass Sie die Aktualisierung fortsetzen möchten?';
ufe11='Am Ende der Aktualisierung reagiert der Router bis zu 180 Sekunden lang nicht auf Befehle. Dies ist völlig normal. Schalten Sie den Router während dieser Zeit nicht ab, und führen Sie keinen Neustart durch.';
ufe12='Firmware-Version';
um1='Auf dieser Seite können Sie verschiedene Parameter des Routers verwalten und Verwaltungsfunktionen durchführen.';
um5='Router neu starten';
um6='Wenn der Router nicht mehr fehlerfrei funktioniert, kann ein Neustart oft Abhilfe schaffen. Bei einem Neustart bleiben Ihre Konfigurationseinstellungen erhalten';
um7='Werkseinstellungen wiederherstellen';
um8='Mit dieser Option setzen Sie alle Router-Einstellungen auf die Werkseinstellungen zurück. Es wird empfohlen, die aktuellen Einstellungen zu sichern, bevor Sie die Werkseinstellungen wiederherstellen.';
um9='Aktuelle Einstellungen Speichern/Sichern';
um10='Mit dieser Funktion können Sie die aktuelle Konfiguration sichern. Dadurch können Sie Ihre Konfigurierung später wiederherstellen, wenn die Einstellungen zwischenzeitlich verloren gehen oder geändert werden. Sie sollten die aktuelle Konfiguration sichern, bevor Sie eine Firmware-Aktualisierung durchführen.';
um11='Vorherige Einstellungen wiederherstellen';
um12='Über diese Option stellen Sie die zuvor gespeicherten Einstellungen wieder her.';
um13='Firmware aktualisieren';
um14='Von Zeit zu Zeit veröffentlicht Belkin neue Versionen der Router-Firmware. Firmware-Aktualisierungen enthalten verbesserte Funktionen und Lösungen für eventuelle Probleme. ';
um15='Systemeinstellungen';
um16='Auf der Seite Systemeinstellungen können Sie ein neues Administratorkennwort festlegen';
um17=', die Zeitzone einstellen, die Fernverwaltung aktivieren und die NAT-Funktion des Routers ein- oder ausschalten.des Routers.';
um18=' des Routers.';
not='nicht';
pwd='Kennwort';
uprev1='Dienstprogramme > Vorherige Einstellungen wiederherstellen';
uprev2='Über diese Option stellen Sie die zuvor gespeicherten Einstellungen wieder her.';
Restore='Wiederherstellen';
uprev3='Geben Sie den Namen der Datei ein, die die gesicherten Einstellungen enthält.';
uprev4='Möchten Sie die Wiederherstellung der Einstellungen fortsetzen?';
uprev5='Nach der Wiederherstellung der Einstellungen reagiert\n der Router bis zu 30 Sekunden lang nicht auf Befehle.\nDies ist völlig normal. Währenddessen darf der Router nicht abgeschaltet werden.';
ueco1='Dienstprogramme > Eco-Einstellungen';
ueco2='ECO is a mode about "energy saving" mode';
ur1='Dienstprogramme > Router neu starten';
ur2='Wenn der Router nicht mehr fehlerfrei funktioniert, kann oft ein Neustart Abhilfe schaffen. Bei einem Neustart bleiben die Konfigurationseinstellungen erhalten. Klicken Sie die Taste &quot;Router neu starten&quot; unten, um den Router neu zu starten.';
ur3='Router neu starten';
ur4='Sind Sie sicher, dass Sie den Router neu starten möchten? Der Router-Neustart wirkt sich nicht auf die Konfiguration aus.';
ur5='Der Neustart des Routers dauert etwa 30 Sekunden. Bis zum Ende des Neustarts darf der Router nicht abgeschaltet werden.';
ur6='Der Neustart des Routers dauert etwa 60 Sekunden. Bis zum Ende des Neustarts darf der Router nicht abgeschaltet werden.';
usave1='Dienstprogramme > Aktuelle Einstellungen Speichern/Sichern';
usave2='Mit dieser Funktion können Sie die aktuelle Konfiguration sichern. Dadurch können Sie Ihre Konfigurierung später wiederherstellen, wenn die Einstellungen zwischenzeitlich verloren gehen oder geändert werden. Sie sollten die aktuelle Konfiguration sichern, bevor Sie eine Firmware-Aktualisierung durchführen.';
Save='Speichern';
usys1='Dienstprogramme > Systemein Stellungen';
usys2='Administratorkennwort: ';
usys3='Der Router wird OHNE festgelegtes Kennwort geliefert. Sie können hier ein Kennwort festlegen und dadurch die Sicherheit erhöhen.';
usys4='Aktuelles Kennwort eingeben';
usys5='Neues Kennwort eingeben';
usys6='Neues Kennwort bestätigen';
usys7='Anmeldezeitlimit';
usys8='(1-99 Minuten)';
usys9='Uhrzeit und Zeitzone: ';
January='Januar';
February='Februar';
March='März';
April='April';
May='Mai';
June='Juni';
July='Juli';
August='August';
September='September';
October='Oktober';
November='November';
December='Dezember';
usys10='Bitte stellen Sie Ihre Zeitzone ein. Wenn in Ihrem Land zwischen Sommerzeit und Winterzeit umgeschaltet wird, markieren Sie dieses Feld.';
usys11='Zeitzone';
usys12='(GMT-12:00) Enewetak, Kwajalein ';
usys13='(WEZ-11:00) Midwayinseln, Samoa';
usys14='(WEZ-10:00) Hawaii';
usys15='(WEZ-09:00) Alaska';
usys16='(GMT-08:00) Pacific Time (VS en Canada); Tijuana ';
usys17='(WEZ-07:00) Arizona ';
usys18='(GMT-07:00) Mountain Time (US & Kanada), New Mexico  ';
usys19='(GMT-06:00) Mexico City ';
usys19a='(GMT-06:00) Central Time (USA & Kanada), Chicago  ';
usys20='(GMT-06:00) Tegucigalpa ';
usys21='(WEZ-06:00) Saskatchewan ';
usys22='(WEZ-05:00) Bogota, Lima, Quito ';
usys23='(WEZ-05:00) Ostküstenzeit (USA u. Kanada) ';
usys24='(WEZ-05:00) Indiana (Ost) ';
usys25='(WEZ-04:00) Atlantikzeit (Kanada) ';
usys26='(WEZ-04:00) Caracas, La Paz ';
usys27='(WEZ-04:00) Santiago ';
usys28='(GMT-03:00) Newfoundland ';
usys29='(WEZ-03:00) Brasilien ';
usys30='(WEZ-03:00) Buenos Aires, Georgetown ';
usys31a='(WEZ-02:00) Mittlere Atlantikzeit ';
usys32='(GMT-01:00) Azoren, Kaapverdische Eilanden ';
usys33='(WEZ) Casablanca, Monrovia ';
usys34='(GMT) Greenwich Mean Time: Lissabon, Londen, Edinburgh ';
usys35='(GMT) Greenwich Mean Time: Dublin ';
usys36='(GMT+01:00) Amsterdam, Berlijn, Bern, Rome ';
usys37='(GMT+01:00) Stockholm, Wenen, Belgrado ';
usys38='(GMT+01:00) Bratislava, Budapest, Ljubljana ';
usys39='(GMT+01:00) Praag, Brussel, Kopenhagen, Madrid ';
usys40='(GMT+01:00) Parijs, Sarajevo, Skopje ';
usys41='(GMT+01:00) Warschau, Zagreb ';
usys42='(GMT+02:00) Athene, Istanbul, Minsk, Vilnius, Sofia ';
usys43='(GMT+02:00) Bukarest ';
usys43a='(GMT+02:00) Israël ';
usys44='(WEZ+02:00) Kairo ';
usys45='(WEZ+02:00) Harare, Pretoria ';
usys46='(GMT+02:00) Helsinki, Riga, Tallinn ';
usys48='(GMT+03:00) Bagdad, Kuweit, Nairobi, Riyaad ';
usys50='(GMT+03:00) Moskou, St. Petersburg,Volgograd, Kazan ';
usys50b='(GMT+03:30) Teheran ';
usys51='(GMT+04:00) Abu Dhabi, Muscat, Tiflis ';
usys52='(GMT+04:30) Kabul ';
usys53='(GMT+05:00) Islamabad, Karachi, Ekaterinenburg ';
usys53a='(GMT+05:30) Chennai, Kolkata, Mumbai, Neu-Delhi ';
usys54='(GMT+06:00) Almaty, Dacca ';
usys55='(WEZ+07:00) Bangkok, Jakarta, Hanoi ';
usys56='(GMT+08:00) Beijing, Chongqing, Urumqi ';
usys57='(GMT+08:00) Hong Kong, Perth, Singapore, Taipei ';
usys58='(GMT+09:00) Tokio, Osaka, Sapporo ';
usys58a='(GMT+09:00) Seoul ';
usys96='(GMT+09:30) Adelaide, Darwin ';
usys59='(WEZ+10:00) Brisbane ';
usys60='(WEZ+10:00) Canberra, Melbourne, Sydney ';
usys61='(GMT+10:00) Guam, Port Moresby ';
usys62='(WEZ+10:00) Hobart ';
usys63='(WEZ+11:00) Magadan, Salomoneninseln, Neukaledonien ';
usys64='(GMT+12:00) Wellington, Auckland ';
usys65='(GMT+12:00) Fiji, Kamchatka, Marshall ls. ';
usys97='(GMT+13:00) Nukuʻalofa ';
usys66='Sommerzeit';
usys67='Sommerzeit automatisch einstellen';
printps='Primärer NTP-Server';
bakntps='Sicherungs-NTP-Server';
usys68='Fernverwaltung:';
AF='ERWEITERTE FUNKTION!';
usys69='Die Fernverwaltung ermöglicht das Ändern Ihrer Routereinstellungen von jedem Ort aus, an dem sich ein Internet-Anschluss befindet. Bevor Sie diese Funktion aktivieren, ';
usys70='SOLLTEN SIE UNBEDINGT EIN ADMINISTRATORKENNWORT FESTLEGEN.';
usys71='Beliebige IP-Adresse zur Fernverwaltung des Routers.';
usys72='Nur diese IP-Adresse zur Fernverwaltung des Routers zulassen';
usys73='NAT-Aktivierung:';
usys74='Ermöglicht die Deaktivierung der NAT-Funktion. Normalerweise sollte diese Funktion NICHT deaktiviert werden. ';
usys75='NAT aktivieren / deaktivieren';
 
usys76='UPnP-Aktivierung: ';
usys77='Ermöglicht die Deaktivierung der UPnP-Funktion des Routers. Wenn Sie Anwendungen benutzen, die UPnP unterstützen, können diese Anwendungen automatisch den Router konfigurieren, wenn Sie UPnP aktivieren. ';
usys78='UPnP aktivieren / deaktivieren';
usys79='Aktivieren der Automatischen Firmware-Aktualisierung:';
usys80='Ermöglicht Ihnen die automatische Suche nach Firmware-Aktualisierungen für den Router.';
usys81='Automatische Firmware-Aktualisierung Aktivieren / Deaktivieren ';
usys82='Das aktuelle Kennwort ist ungültig';
usys83='Neues Kennwort und bestätigtes neues Kennwort stimmen nicht überein';
usys83_1='Kennwort und bestätigtes Kennwort stimmen nicht überein. ';
usys84='Anmeldezeitlimit-Bereich: 1-99';
usys84_1='Die Zahl, die Sie für das Zeitlimit eingegeben haben, ist ungültig. Die Zahl muss eine ganze Zahl zwischen 1 und 99 sein.';
usys85='Unzulässige Kennwortlänge. Das Kennwort muss aus mindestens 3 und höchstens 12 Zeichen bestehen.';
usys85_1='Das Administrationskennwort sollte aus 1 bis 63 Zeichen bestehen.';
usysntp='Zwei NTP-Server IP-Adressen können nicht identisch sein.';
usys86='Bitte geben Sie die vorgegebene LAN-Adresse manuell in das Adressfeld in der Statusleiste Ihres Browsers ein.';
usys87='Es wird dringend empfohlen, ein Administratorkennwort festzulegen.';
usys88='Das Kennwort hat die maximale Länge erreicht!';
usys89='AM';
usys90='PM';
usys91='Fernzugriffsport';
usys92='Fernzugriffsport ist ungültig. Gültiger Port sollte im Bereich 1 - 65535 liegen.';
usys93='Verwenden Sie diese Funktion, um Strom zu sparen.';
usys94='IGMP Proxy';
usys95='IGMP Proxy Aktivieren / Deaktivieren';
usysipm='Entweder haben Sie nicht alle IP-Nummern eingegeben, oder einige der eingegebenen Nummern sind ungültig. Die IP-Addresse sollte folgendermaßen aussehen: x.y.y.x (hierbei kann y eine beliebige Zahl zwischen 0 und 255 sein und x eine beliebige Zahl zwischen 1 und 254).';
usysipm_1='Entweder haben Sie nicht alle IP-Nummern eingegeben, oder einige der eingegebenen Nummern sind ungültig. Die Nummern sollten zwischen 0 und 255 liegen.';
self_healing='Befinden > Regelmäßige Wartung';
self_healing1='Regelmäßiges Rücksetzen des Routers trägt zum reibungslosen Betrieb des Netzwerks bei.';
self_healing2='Auto initialisieren meinen Router';
self_healing3='Set Tage';
self_healing4='SON';
self_healing5='MON';
self_healing6='DIE';
self_healing7='MIT';
self_healing8='DON';
self_healing9='FRE';
self_healing10='SAM';
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

Europe='Europa';
Australia='Australien und Neuseeland ';
AsiaPacific='Asien Pazifik';
NorthAmerica='Nordamerika';
wrhtpsswd='<b>Ungültiges Kennwort</b><br>Bitte überprüfen Sie das Kennwort und geben Sie es erneut ein.';
usysb1='Der Router wird OHNE festgelegtes Kennwort geliefert. Sie können hier ein Kennwort festlegen und dadurch die Sicherheit erhöhen.';
vjs1='Ungültige IP-Adresse, zu lang. Bitte erneut prüfen.';
vjs2='Ungültige IP-Adresse, fehlende(r)\'.\' , Bitte erneut prüfen.!';
vjs3='Ungültige IP-Adresse, fehlende Nummern zwischen \'.\' , Bitte erneut prüfen!';
vjs4="Ungültige IP-Adresse, zu viel'.' , Bitte erneut prüfen!";
vjs5='Ungültige IP-Adresse, Nummern zwischen \'.\'  sind zu groß. Bitte erneut prüfen!';
vm1='Ungültiges Zeichen ';
vm2=' an Position ';
vm3='Zulässig ist ';
vjs6='Ungültiges Jahresformat, bitte eingeben als (z.B. 2002).';
vm4='Ungültige Zahl ';
vjs8='Ungültig, zulässig ist der Zahlenbereich 1970 bis 2037';
vjs9='Ungültiges Monatsformat, bitte eingeben als (01 bis 12)';
vjs10='Bitte Jahr und Monat zuerst eingeben';
vjs11='Ungültiges Tagesformat. Bitte als (01 bis 31) eingeben, für bestimmte Monate nur (01 bis 28).';
vjs12='Ungültiges Stundenformat, bitte eingeben als (00 bis 23).';
vjs13='Ungültiges Minutenformat, bitte eingeben als (00 bis 59).';
vjs14='Ungültige MTU; Zulässig sind Zahlen von 500 bis 1500.';
vjs15='Ungültige MRU; Gültig ist der Zahlenbereich 128 bis 65535';
vjs16='Ungültige IP:';
vjs161=' nicht in ';
vjs162=' Netmask';
vjs163='Der zulässige DHCP-Bereich ist ';
vjs17='Sie haben zwei verschiedene Kennwörter eingeben. Bitte nochmals überprüfen!';
vjs18='Bitte Schnittstellen-Startnummer eingeben.';
vjs19='Die Schnittstellen-Startnummer muss kleiner sein als die Endnummer.';
vjs20='Ungültige Schnittstellennummer. Für Schnittstellen sind nur positive ganze Zahlen zulässig.';
vjs21='Ungültige Länge';
vjs22='Invalid Format at position ';
vjs23='Ungültige MAC-Adresse; dies ist eine Rundsendeadresse.';
vjs24='Ungültige MAC-Adresse; dies ist eine Nulladresse.';
vjs25='Ungültige MAC-Adresse; dies ist eine Multicast-Adresse.';
vjs26='Ungültige IP-Start- und Endadresse; IP-Endadresse muss größer sein als IP-Startadresse';
vjs27='Ungültige Zahl! Gültig ist der Bereich 1 bis 65535';
vjs28='Ungültiges Netzmasken-Format.';
vjs29='Ungültiges Format, gültige Netzmaske ist hier  255.255.255.0 oder 255.255.255.128 oder 255.255.255.192 oder 255.255.255.224 oder 255.255.255.240 oder 255.255.255.248 oder 255.255.255.252 oder 255.255.255.254';
vjs30='Ungültige IP-Adresse. Die letzte Zahl kann nicht 0 oder 255 sein';
vjs31='Ungültige LAN IP-Adresse. Die erste Zahl kann nicht 127 sein';
vjs32='Ungültige LAN IP-Adresse (0.0.0.0)';
vjs33='Ungültige LAN IP-Adresse. Adresse muss unter 224.0.0.0 liegen';
vjs34='Gültiger Zahlenbereich: ';
vjs35='Ungültige IP-Adresse; die erste Zahl muss zwischen 1 und 223 liegen.';
vjs36='Invalid network format.';
vjs37='Invalid gateway format.';
vjs38='IP is class A, netmask is invalid.';
vjs39='IP is class B, netmask is invalid.';
vjs40='IP is class C, netmask is invalid.';
vjs41='Invalid network ip, network ip is duplicate';
vjs42='Die Subnetzmaske die Sie eingetragen haben ist ungültig.';
vjs43='Ungültige IP-Adresse; die letzte Zahl muss zwischen 1 und 254 liegen.';
vjs44='Ungültige DNS-Adresse. Die erste Zahl muss zwischen 1 und 223 liegen';
vjs45='IP-Adresse angeben';
vjs46='ist ungültig, bitte zuerst korrigieren!';
vjs47='%s ist eine ungültige IP, die nicht in der %s Netzmaske erscheint.';
dup='Administrator duplizieren';
wc1='WAN > Verbindungstyp';
wcc2='Verbindungstyp wählen:';
wcc3='Dynamisch';
wcc4='Dynamische Verbindungen sind der gängigste Verbindungstyp. Wenn Sie ein Kabelmodem verwenden, arbeiten Sie vermutlich mit einer dynamischen Verbindung. Wenn Sie ein Kabelmodem besitzen oder Ihren Verbindungstyp nicht kennen, sollten Sie diese Option verwenden.';
wcc5='Statisch';
wcc6='Statische IP-Adressen werden seltener als andere Verbindungstypen verwendet. Verwenden Sie diese Option nur, wenn Sie von Ihrem Provider eine IP-Adresse erhalten haben, die sich nicht ändert.';
wcc7='PPPoE';
wcc8='Wenn Sie ein DSL-Modem verwenden oder Ihr Provider einen Benutzernamen und ein Kennwort für Sie festgelegt hat, arbeiten Sie mit dem Verbindungstyp PPPoE. Verwenden Sie diesen Verbindungstyp.';
wcc9='PPTP';
wcc10='[nur europäische Länder]. Dieser Verbindungstyp ist in vielen europäischen Ländern üblich. Wenn Ihnen Ihr Provider mitgeteilt hat, dass Sie PPTP verwenden und Ihnen die erforderlichen PPTP-Daten übermittelt hat, verwenden Sie diese Option.';
wcc11='Telstra Bigpond/OptusNet Cable';
wcc12='Verwenden Sie diese Option nur für Verbindungen mit Bigpond Cable und OptusNet Cable.';
wcc12_a='Verwenden Sie diese Option nur für Verbindungen mit Bigpond Cable und OptusNet Cable.';
wcc13='L2TP';
wcc14='[Israel Only]. This type of connection is most common in Israel. If your ISP has specifically told you that you use L2TP and has supplied you with the proper L2TP information, then use this option.';
wcc15='Multi-PPPoE';
wcc16='[Japan Only] This type of connection is a unique function in Japan which is required for those who subscribe NTT\'s broadband Internet.';
Next='Weiter';
wds1='WAN > DNS';
wds2='Wenn Ihnen der Provider eine bestimmte DNS-Adresse zugewiesen hat, geben Sie die Adresse in diesem Fenster ein, und klicken Sie auf "Änderungen übernehmen".';
wds2_1='Wenn Sie von Ihrem Internet-Anbieter spezielle DNS-Einstellungen erhalten haben, geben Sie sie hier ein.';
wds3='Automatisch vom Provider ';
wds3_1='Automatisch vom ISP';
wds4='DNS-Adresse';
wds4_1='Primäre DNS-Adresse';
wds5='Sekundäre DNS-Adresse';
wds5_1='Sekundäre DNS-Adresse';
wds6='DNS = DNS-Server (Domain Name Server). Server im Internet, der URLs (Universal Resource Links - Einheitliche Ortsangeber für Ressourcen) wie www.belkin.com zu IP-Adressen auflöst.Wenn Sie die automatische DNS-Funktion nicht nutzen möchten, müssen Sie die DNS-Einstellungen eingeben, die Ihnen Ihr Internet-Provider zugewiesen hat.';
wds6_1='DNS = Domain Name Server, ein Server im Internet der URLs wie www.belkin.com in IP-Adressen umsetzt. ';
wds7='Wenn Sie die automatische DNS-Funktion nicht nutzen möchten, müssen Sie die DNS-Einstellungen eingeben, die Ihnen Ihr Internet-Provider zugewiesen hat';
wds8='Gehen Sie zu den  %s Website-Filtern %s , um Änderungen im DNS vorzunehmen, und wählen Sie “Keine Filter” aus.';
wdy1='WAN > Verbindungstyp > Dynamische IP';
wdy2='Geben Sie die Daten für die dynamische IP unten ein, und klicken Sie auf "Änderungen übernehmen".';
wdy3='Hostname';
wdy4='Hostname = Name, den manche Provider für die Verbindung mit Ihrem System verlangen.';
wdy5='WAN MAC-Adresse ändern ';
wdy6='Ungültiger Host-Name: `~!@#$%^&*()_+[]{}\\|;:\'"<>/?.,';
wmc1='WAN > MAC-Adresse';
wmc2='Bei manchen Providern ist es erforderlich, dass Sie die MAC-Adresse der Netzwerkkarte von Ihrem Computer klonen (in den Router kopieren). Wenn Sie nicht wissen, ob das bei Ihnen der Fall ist, klonen Sie einfach die MAC-Adresse des Computers, der vor der Routerinstallation ursprünglich an das Modem angeschlossen war. Das Klonen der MAC-Adresse verursacht keine Probleme im Netzwerk.';
wmc3='WAN MAC-Adresse';
wmc4='MAC-Adresse des Computers klonen';
wmc5='Klonen';
wmc6='Die WAN-MAC-Adresse kann nicht dieselbe sein wie die LAN-MAC-Adresse. Bitte wählen Sie eine andere.';
wdd1='Firewall > DDNS ';
wdd2='Mit dynamischer DNS können Sie Internet-Nutzern einen festen Domänennamen (anstatt einer sicher immer wieder ändernden IP-Adresse) zuteilen, indem Sie Ihren Router und die Anwendungen in den virtuellen Servern des Routers von jedem Ort über das Internet zugänglich machen, ohne dass die aktuelle IP-Adresse bekannt sein muss. Ihr Kabelloser Router unterstützt dynamisches DMS über DynDNS.org (<A href="http://www.dyndns.org/"><B>http://www.dyndns.org</B></A>). Sie müssen ein Konto einrichten, bevor Sie diesen Dienst nutzen können';
wdd3='DDNS-Dienst';
wdd4='DDNS-Status';
wdd5='Website';
wdd6='Benutzername';
wdd7='Kennwort';
wdd8='Domänenname';
wdd9 ='Kein DDNS-Dienst ausgewählt.\n';
wdd10='Kein DDNS-Dienst ausgewählt und alle Daten auf dieser Seite gehen verloren; fortfahren?';
wm1='Internet/WAN';
WAN='Internet WAN';
wm2='Auf der Registerkarte "Internet/WAN" richten Sie den Router für die Verbindung mit Ihrem Provider ein. Der Router kann die Verbindung zu fast jedem Provider-System herstellen, sofern Sie die Routereinstellungen an den Verbindungstyp anpassen. Für die Einrichtung des Routers zur Verbindung mit dem Provider klicken Sie links auf dem Bildschirm auf der Registerkarte "Internet/WAN" auf "Verbindungstyp".';
wm3='Unterstützte Verbindungstypen: ';
wm4='Dynamisch';
wm4b='einschließlich der Provider, die einen Hostnamen verlangen oder die Verbindung an eine bestimmte MAC-Adresse koppeln. ';
wm5='Statische IP-Adresse';
wm5b='der Router unterstützt die Verbindung zu einem Provider, der eine statische IP-Adresse zuweist. ';
wm6='PPPoE';
wm6b='der Router unterstützt einen dynamischen Verbindungstyp, der eine PPPoE-Anmeldung zur Authentifizierung verlangt.';
wm7='PPTP';
wm7b='Nur für Benutzer in Europa. Der Router unterstützt Verbindungen mit europäischen ISPs, die mit dem PPTP-Protokoll arbeiten. ';
wm10='L2TP';
wm10b='Nur zur Verwendung bei ISPs, die die L2TP-Verbindungsmethode erfordern.';
wpe1='WAN > Verbindungstyp > PPPoE';
wpe2='Geben Sie die Daten für die PPPoE-Einstellungen unten ein, und klicken Sie auf "Änderungen übernehmen".';
wpe3='Benutzername';
wpe4='Kennwort erneut eingeben';
wpe5='Dienstname (optional)';
wpe6='MTU (500-1500)';
wpe7='Lassen Sie die MTU-Einstellung unverändert, es sei denn, Ihr Provider verlangt ausdrücklich eine andere Einstellung als 1454.';
wpe8='Trennen nach';
wpe9=' Minuten ohne Aktivität. ';
idlerangerro='Passivzeitlimit: ungültige Zahlenangaben.\n Sie können Zahlen zwischen 1 und 99 eingeben.';
wpe10='Ungültiges Zeichen: <>&';
wptid='Ungültiges Zeichen: "';
pm='Ihr Dienst konnte das eingegebene Kennwort nicht bestätigen. Bitte überprüfen Sie, ob Sie das Kennwort richtig eingegeben haben.';
pm_1='Die neuen Kennwörter, die Sie eingegeben haben, werden nicht erkannt. Bitte erneut versuchen.';
wpe11='Ungültiger MTU-Wert';
wpe12='Bitte geben Sie Ihren Benutzernamen ein';
wmpe1='WAN > Verbindungstyp > Multi-PPPoE';
wmpe2='Geben Sie die Daten für die Multi-PPPoE-Einstellungen unten ein, und klicken Sie auf „Änderungen übernehmen".';
wmpe3='Beschreibung';
wmpe4='PPPoE-Konto';
wmpe5=wpe4;
wmpe6=wpe5;
wmpe7='MTU (1440-1454)';
wmpe7_1='Ungültige MTU; Zulässig sind Zahlen von 1440 bis 1454.';
wmpe8='Sub-Sitzung';
wmpe9='WAN > Verbindungstyp > Routing-Tabelle';
wmpe10='Zur Übertragung eines Pakets auf die Wan-Seite (oder Internet) wird überprüft, ob das Ziel des Pakets zu einer bestimmten Regel passt.&nbsp; Wenn es passt, schickt der Router das Paket weiter an die betreffende Sitzung.<br>Wenn keine Regel passt, wird dieses Paket über die Master-Sitzung weitergeleitet.';
wmpe11='Zieltyp >';
wmpe12='Sitzung 1 (Master-Sitzung)';
wmpe13='Sitzung 2 (Slave-Sitzung)';
wmpe14='Verbindungszeit';
wmpe15='Master';
wmpe16='Slave';
wmpe17='*Wenn Sie Multi-PPPoE verwenden wollen, wählen Sie eine Sub-Sitzung..';
wmpe18='Konto';
id_wmpe='ID';
ip_wmpe='IP';
domain_wmpe='Domäne';
session_wmpe=wmpe4;
enable_wmpe=Enable;
none='kein(e)';
east='Ostjapan';
west='Westjapan';
manual='Manuell';
wpp3='Kennwort';
wpp4='Kennwort erneut eingeben';
wpp6='IP-Adresse';
wpp7='Subnetz-Maske';
wpp14='Bitte geben Sie das Kennwort erneut ein!';
wpp15='Bitte geben Sie das Kennwort ein!';
wpp16='WAN > Verbindungstyp > L2TP';
wpp17='L2TP-Konto';
wpp18='L2TP Kennwort';
wpp19='Bitte geben Sie Ihr L2TP-Konto ein';
wpp20='Vom ISP zugewiesene IP-Adresse';
wpp21='Ja';
wpp22='Nein';
wpp23='IP-Adressen-Zuteilung';
wpp24='Statische IP-Adresse verwenden';
wpp25='Vom ISP dynamisch erhalten';
wppa1='WAN > Verbindungstyp > PPPTP';
wppa2='PPTP-Konto';
wppa3='PPTP-Kennwort';
wppa4='Kennwort erneut eingeben';
wppa5='Hostname';
wppa6='Dienst-IP-Adresse';
wppa7='Eigene IP-Adresse';
wppa8='Eigene Subnetz-Maske';
wppa9='Verbindungskennung (optional)';
wppa10='Trennen nach';
wppa11=' Minuten ohne Aktivität';
wppa12='Klicken Sie hier, um Ihre DNS-Einstellungen einzugeben';
wppa13='Bitte geben Sie Ihr PPTP-Konto ein.';
wppa14='Bitte geben Sie das Kennwort erneut ein!';
wppa15='Bitte geben Sie das Kennwort ein!';
wppa16='IP-Adresse';
wppa17='Dienst-IP-Adresse';
wppa18='Ungültiger Dienstname.';
ws1='WAN > Verbindungstyp > Statische IP';
ws2='Geben Sie die Daten für die statische IP unten ein, und klicken Sie auf "Änderungen übernehmen".';
ws3='IP-Adresse';
ws4='Subnetz-Maske';
ws5='Gateway-Adresse des Providers';
ws6='Mein Provider hat mir mehrere statische IP-Adressen zugeteilt';
ws7='Klicken Sie hier, um Ihre DNS-Einstellungen einzugeben';
dm='Entweder haben Sie nicht alle DNS-Nummern eingegeben oder es sind nicht alle Nummern gültig. Zulässig sind Zahlen zwischen 0 und 255.';
sm='Sie haben ungültige Subnetz-Masken-Nummern eingegeben';
sm_1='Sie haben keine gültige Subnetzmaske eingegeben.';
ws8='Bitte geben Sie Ihre DNS-Adresseinstellungen im folgenden Bildschirm ein oder überprüfen Sie sie';
ws9='Die IP-Adresse ist dieselbe wie die Alias-IP-Adresse; bitte ändern oder entfernen Sie eine!';
ws10='Standard-Gateway';
wsc1='Alias-IP-Adresse';
im='Die Alias-IP-Adressenliste ist voll. Es können keine zusätzlichen Regeln erstellt werden.';
wt1='WICHTIGER HINWEIS';
wt2='Durch Klicken auf Änderungen übernehmen wird der Computer neu gestartet. Wenn der Router neu gestartet worden ist, müssen Sie Folgendes tun';
wt3='1) Ziehen Sie das Stromkabel am Kabelmodem und am Belkin Router ab';
wt4='2) Schließen Sie das Stromkabel erneut an das Kabelmodem an und warten Sie, bis all Leuchtanzeigen am Modem aufhören zu blinken';
wt5='3) Schließen Sie das Stromkabel erneut an den Belkin Router an';
wt6='Öffnen Sie zur Bestätigung, dass Sie eine erfolgreiche Verbindung zum Internet hergestellt haben, einen Browser wie Internet Explorer, Firefox oder Safari und überprüfen Sie, ob Sie im Internet browsen können.';
Logout='Abmelden';
wla1='Funknetz > Als Access Point verwenden';
wlad1='Der Router kann als reiner Access Point eingerichtet werden, so dass alle Routing- und Firewallfunktionen abgestellt werden. Wählen Sie hierzu "Aktivieren", und geben Sie die gewünschte IP-Adresse für den Access Point ein.;';
wlad2='Aktivieren / Deaktivieren';
wlae1='IP-Adresse festlegen';
wlae2='Subnetz-Maske';
wlae3='Bitte geben Sie die LAN-Adresse manuell in das Adressfeld in der Statusleiste Ihres Browsers ein';
wlc1='Funknetz > Kanal und SSID';
wlc2='Hier können Sie die Funkeinstellungen des Routers ändern. Klicken Sie auf "Änderungen übernehmen", um die Einstellungen zu sichern.';
wlc3='Funkkanal';
wlc4='SSID';
wlcwch='Erweiterungskanal';
wlc5='Funkmodus';
wlcgb='802.11b+g';
wlcg='802.11g';
wlcb='802.11b';
wlc9='SSID rundsenden';
wlc10='Turbo-Modus';
wlc11="Durch die Aktivierung des Turbo-Modus kann der Router (oder Access Point) Frame Bursting einsetzen, um eine maximale Durchsatzleistung vom Router oder Access Point zu den 802.11g-Clients zu erzielen. Der Turbo-Modus funktioniert bei 802.11g-Clients, die den Turbo-Modus unterstützen. 802.11g-Clients von Belkin mit aktuellen Treibern unterstützen den Turbo-Modus. Clients, die den Turbo-Modus nicht unterstützen, funktionieren normal, wenn der Turbo-Modus aktiviert ist.";
wlc12='Geschützter Modus';
wlc13="HINWEIS: Meistens wird die beste Durchsatzleistung erreicht, wenn der geschützte Modus deaktiviert ist. Wenn Sie in einer Umgebung mit INTENSIVEM 802.11b-Datenverkehr oder -Interferenzen arbeiten, wird die beste Durchsatzleistung erreicht, wenn der geschützte Modus eingeschaltet ist.";
wlc14='Als Access Point verwenden';
wlc15='Wenn Sie den Router als Access Point verwenden, müssen Sie eine IP-Adresse für den Access Point festlegen. Die IP-Adresse muss sich im gleichen Bereich befinden wie das Netzwerk, zu welchem Sie eine Verbindung herstellen wollen. Um die erweiterte Konfigurierung des Routers erneut zu öffnen, geben Sie die IP-Adresse in den Browser ein und melden Sie sich an. ';
wlc16='Wireless > EWC Setting';
wlc17='Bandbreite';
wlc18='Control Sideband';
wlc19='NPHY Rate';
wlc20='20MHz';
wlc21='40MHz only';
wlc22='20/40 MHz';
wlc22a='20/40/80MHz';
wlc23='Verwenden des Funkmodus Über diesen Schalter stellen Sie den Funkmodus des Routers ein. Es gibt vier Modi. <br>1) Off<br>In diesem Modus wird der Access Point des Routers ausgeschaltet, so dass keine kabellosen Geräte Zugang zu Ihrem Netzwerk erhalten. Das Ausschalten dieser Funktion ist eine sehr gute Methode, Ihr Netzwerk abzusichern, wenn Sie eine Zeit lang nicht zu Hause sind, oder Sie diese Funktion des Routers eine Zeit lang nicht benötigen.<br>2) Nur 802.11g<br>Verwenden Sie diesen Modus, wenn 802.11g-kompatible Geräte in das Netzwerk eingebunden werden; langsamere 802.11b-Geräte bleiben außen vor.<br>3) Nur 802.11n<br>Verwenden Sie diesen Modus, wenn ausschließlich 802.11n-kompatible Geräte in das Netzwerk eingebunden werden sollen und alle langsameren 802.11b- und 802.11g-Geräte außen vor bleiben sollen.<br>4) 802.11n und 802.11g und 802.11b<br>Verwenden Sie diesen Modus, wenn 802.11n- und 802.11g- und 802.11b-kompatible Geräte in das Netzwerk eingebunden werden sollen.';
wlcoff='Deaktiviert';
wlcngb1='802.11b & 802.11g & 1x1 802.11n';
wlcn1='1x1 802.11n';
wlcngb2='802.11b & 802.11g & 802.11n';
wlca='802.11a';
wlcn2='802.11n';
wlcan='802.11a & 802.11n';
wlcnac='802.11n & 802.11ac';
wlcanac='802.11a & 802.11n & 802.11ac';
wlc24='Es gibt vier Modi im 5 GHz-Band';
wlc25='1) 802.11a nur <br> Einrichten des Routers, um diesen Modus erlaubt nur das 802.11a-fähige Geräte an das Netzwerk anzuschließen.<br> 2) 802.11a & 802.11n <br> Einrichten des Routers, um diesen Modus ermöglicht 802.11a und 802.11n-fähige Geräte an das Netzwerk anzuschließen.<br> 3) 802.11n nur <br>Einrichten des Routers an diesem Modus erlauben nur 802.11n-kompatible Geräte zu beteiligen, Fernhalten von langsameren 802.11b-Geräten. <br> 4) Deaktiviert <br> Dieser Modus OFF des Routers Wi-Fi-, so dass keine drahtlose Geräte können dem Netzwerk beizutreten. Ausschalten des Wireless-Funktion des Routers ist ein guter Weg, um Ihr Netzwerk zu sichern, wenn Sie weg sind von zu Hause für eine lange Zeit, oder wollen nicht auf die Wireless-Funktion des Routers zu einem bestimmten Zeitpunkt zu verwenden. <br>';
wlc26='Durch das Ausblenden Ihres Netzwerknamens wird WPS deaktiviert.';
wlc27='Durch die Änderung Ihres Sicherheitstypen wird WPS deaktiviert.';
wlc28='WPS ist aufgrund Ihres <A href=%s><B>Drahtlossicherheitstypen deaktiviert</B></A>.';
wlc29='WPS ist deaktiviert, weil Sie Ihren Netzwerknamen (SSID) ausgeblendet haben.';
wlc30='WPS ist deaktiviert, weil Sie Ihren Netzwerknamen (SSID) ausgeblendet haben und aufgrund Ihres <A href=%s><B>Drahtlossicherheitstypen</B></A>.';
wlc31='Durch das Aktivieren von WPS wird Ihr Netzwerkname (SSID) eingeblendet.';
wlc32='Durch das Aktivieren von WPS wird Ihr Sicherheitstyp in WPA/WPA2 geändert. Ihr aktuelles Netzwerkkennwort sollte einwandfrei funktionieren.';
wlc33='Durch die Aktivierung von WPS wird Ihr Netzwerkname (SSID) eingeblendet und Ihr Sicherheitstyp wird in WPA/WPA2 geändert. Ihr aktuelles Netzwerkkennwort sollte einwandfrei funktionieren.';
wlc34='Sie müssen Ihren Sicherheitstypen in WPA/WPA2 ändern und ein neues Netzwerkkennwort auswählen,bevor Sie WPS aktivieren.';
wlcgn='802.11g+n';
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
wlm1='Funknetz';
wlm2='Auf dieser Registerkarte können Sie die Funkeinstellungen des Routers bestimmen.';
wlm3='Kanal und SSID';
wlm4='Funkkanal und SSID (Name des kabellosen Netzwerks) einstellen';
wlm5='Sicherheit';
wlm6='Sicherheitseinstellungen des kabellosen Netzwerks wie WPA- oder WEP-Einstellungen ändern. ';
wlm7='Als Access Point verwenden';
wlm8='AP als Routerbetriebsmodus festlegen';
wlm9='IP-Adresse festlegen';
wlm10='IP-Adresse für den AP festlegen.';
wlm11='MAC-Adresskontrolle';
wlm12='Richten Sie eine Liste zulässiger Clients ein, denen Sie den Zugriff auf das kabellose Netzwerk entweder erlauben oder verwehren möchten.';
wle1='Funknetz > Sicherheit';
wle2='Sicherheitsmodus';
wle2a='Deaktiviert';
wle2b='WPA/WPA2-Personal(PSK)';
wle2c='128-Bit-WEP';
wle2d='64-Bit-WEP';
wle3='Authentifizierung';
wle3a='WPA-PSK';
wle3b='WPA2-PSK';
wle3c='WPA-PSK + WPA2-PSK';
wle7="Hier können Sie Sicherheits-/Verschlüsselungseinstellungen konfigurieren. Die Sicherheitseinstellungen sollten aktiviert sein, damit die maximale Sicherheit im kabellosen Netzwerk gewährleistet werden kann. WPA (Wireless Protected Access) ermöglicht dynamische Änderungen der Schlüssel und bietet die sicherste Lösung. In Funknetzumgebungen, in denen nicht alle Geräte WPA unterstützen, sollte WEP (Wired Equivalent Privacy) verwendet werden.";
bit64WEP='64bit WEP';
bit128WEP='128bit WEP';
WPAPSK='WPA/WPA2-Personal(PSK)';

wps1='Wi-Fi Protected Setup (WPS)';
wps2='Funknetz > Wi-Fi Protected Setup(WPS)';
wps3='Bitte Funksicherheit konfigurieren';
wps4='Wi-Fi Protected Setup (WPS) ist der Industriestandard, mit dem die Sicherheitskonfiguration und Verwaltung von Wi-Fi Netzwerken vereinfacht wird. Sie können jetzt ganz einfach ein 802.11-Netzwerk mit dem Standard WPA einrichten und eine Verbindung zu einem Netzwerk mit WPS-zertifizierten Geräten herstellen, indem Sie eine der folgenden Methoden benutzen: Personal Information Number (PIN) oder Push Button Configuration (PBC). Ältere Geräte, die nicht mit WPS ausgestattet sind, können mit der manuellen Konfigurationsmethode ins Netzwerk eingebunden werden.';
wps5='1) PIN-Methode (Personal Information Number)';
wps6='Starten Sie die WPS-PIN-Methode über das Dienstprogramm für kabellose Netzwerke des Client-Geräts oder über die WPS-Anwendung. Geben Sie dann die PIN-Nummer des Client-Geräts ein und klicken Sie innerhalb von 2 Minuten auf "Anmelden"';
wps7='PIN-Nummer des Client-Geräts eingeben';
wps8='Anmelden';
wps9='Wenn ein externer Registrator vorhanden ist, können Sie auch die PIN-Nummer des Routers bei einem externen Registrator eingeben. Wenn Sie die PIN-Nummer des Routers ändern wollen, klicken Sie auf "Neue PIN-Nummer erstellen" oder klicken Sie auf "Standard PIN-Nummer wiederherstellen", um die Werkseinstellung der PIN-Nummer wiederherzustellen.';
wps10='Router-PIN-Nummer:';
wps11='Neue PIN-Nummer erstellen';
wps12='Standard-PIN-Nummer wiederherstellen';
wps13='2) "Push Button Configuration" (PBC-Methode)';
wps14='Halten Sie die PBC-Taste auf dem Router drei Sekunden gedrückt oder klicken Sie auf "PBC starten". Starten Sie dann innerhalb von 2 Minuten auf dem Gerät, mit welchem Sie eine Verbindung zum Router herstellen wollen, PBC.';
wps15='PBC starten';
wps16='3) Manuelle Konfigurationsmethode';
wps17_1='Konfigurieren Sie Client-Geräte ohne WPS manuell mit den folgenden Einstellungen:';
wps17='Führen Sie auf Client-Geräten ohne WPS den Belkin Sicherheitsassistenten auf der CD aus oder konfigurieren Sie die folgenden Einstellungen manuell.';
wps18='Router Configuration:';
wps19='Konfiguriert';
wps20='Netzwerkname (SSID):';
wps21='Nicht konfiguriert';
wps22='Netzwerk-Authentifizierung:';
wps23='WPA+WPA2-Personal (PSK)';
wps24='Datenverschlüsselung:';
wps25='TKIP+AES';
wps26='Netzwerk-Schlüssel (PSK):';
wps27='Netzwerk-Schlüssel (WEP):';
wps28='AUTO';
wps28_1='NULL';
wps29='WPS';
wps30='Wi-Fi Protected Setup (WPS) ist der Industriestandard, mit dem die Sicherheitskonfiguration und Verwaltung von Wi-Fi Netzwerken vereinfacht wird.';
wps31='Sicherheitseinstellungen des Funknetzwerks:';
wps32='Hardwaremäßige WPS Knopf';
wps33='Router-PIN entsperren';
wps_msg1='Wi-Fi Protected Setup Meldung';
wps_msg2='Ungültige PIN-Nummer! Die PIN-Nummer des Geräts besteht aus acht Ziffern. Bitte überprüfen und erneut eingeben.';
wps_msg3='PIN-Prüfsumme ungültig! Bitte überprüfen und gültige PIN-Nummer eingeben.';
wps_msg4='Initiierung - Bitte WPS innerhalb von 2 Minuten am Client-Gerät starten.';
wps_msg5='Vorgang noch nicht abgeschlossen - Bitte warten...';
wps_msg6='Fehler gefunden - Bitte erneut versuchen.';
wps_msg7='Verbindung hergestellt - Das Gerät ist mit dem Router verbunden';
wps_msg8='Sitzungsüberschneidung festgestellt...';
wps_msg9='Zeitlimit überschritten - Keine Client-Verbindung mit dem Router';
wps_msg10='Router-PIN ist aufgrund von häufigen vergeblichen Zugriffsversuchen deaktiviert';

wwmm1='QoS-Konfiguration';
wwmm2='QoS (Quality of Service)-Einstellung';
wwmm3='QoS schützt wichtigen Daten in Ihrem Netzwerk, wie Multimediainhalte und "Voice over IP" (VoIP), so dass diese nicht mit anderen im Netzwerk gesendeten Daten kollidieren. Auf der Grundlage von 802.11e kann diese Funktion nach Wahl aus- oder eingeschaltet werden. Wenn Sie Multimediainhalte oder VoIP in Ihrem Netzwerk verwenden, sollte die QoS-Funktion aktiviert sein.';
wwmm4='802.11e/WMM QoS';
wle8='(13 zweistellige Hexadezimalzahlen)';
wle9='ACHTUNG: ';
wle10='Um ein Hexadezimalpaar automatisch zu erstellen, aktivieren Sie das Feld links und geben Sie dort eine Kennfolge (Passphrase) ein.';
PP='Kennfolge';
generate='erstellen';
errm='Geben Sie eine Kennfolge ein';
keym='Schlüssel ist unvollständig';
wle11='Schlüssel 1';
wle12='Schlüssel  2';
wle13='Schlüssel  3';
wle14='Schlüssel  4';
wle15='(zweistellige Hexadezimalzahlen)';
keym1=' ist unvollständig';
keym2=' ist ungültig, bitte zuerst korrigieren!';
wwp2='Pre-shared Key (PSK)';
wwp3='WPA-PSK (kein Server)';
wwp4="Wireless Protected Access mit PSK (Pre-Shared Key): Der Schlüssel ist ein Kennwort, das entweder aus einem Wort, einem Satz oder eine Folge von Buchstaben und Zahlen besteht. Zulässig sind Schlüssel, die aus <b>8</b> bis <b>63</b> Zeichen bestehen (einschließlich Leerzeichen und Sonderzeichen) oder nur <b>64</b> Hex(0-F). Jeder Client, der ins Netzwerk eingebunden wird, muss denselben Schlüssel verwenden (Pre-Shared Key: PSK).";
wwp5='Verdeckter PSK';
wls_sec_msg='Bei aktiviertem WPS ist es empfohlen WPA/WPA2 zu benutzen.';
wguest2='Gasteinstellungen';
wguest3='Gastzugriff';
wpskerr1='Die Länge des PSK sollte zwischen 8 und 63 oder 64 Hex liegen';
wpskerr2='La clé doit être composée de 8 à 63 caractères, et peut inclure des espaces et des symboles, ou une clé hex 64 bits (0-F) seulement!';
wpskerr4='You must input the Guest Pre-shared Key (PSK)';
wpskerr7='Der Gastschlüssel muss aus 8 Zeichen bestehen';
wpskerr8='Der Gastschlüssel darf nicht derselbe wie der Netzwerkschlüssel sein';
wlguest1='Die SSID darf nicht dieselbe wie die Gast-SSID sein';
wlguest2='Die Gast-SSID darf nicht dieselbe wie die SSID sein';
ww3='Verschlüsselungstechnik';
wlmc1='Funknetz > MAC-Adressenkontrolle';
wlmc2='Mit der MAC-Adressenkontrolle können Sie eine Liste von Clients bestimmen, denen Sie den Zugriff auf das kabellose Netzwerk entweder erlauben oder verwehren möchten.';
Allow='Zulassen';
Deny='Nicht Zulassen';
wlmc7='Legen Sie zuerst fest, ob der MAC-Adressenliste der Zugriff erlaubt oder verwehrt werden soll!';
wlmc6='Es können höchstens 32 MAC-Adressen eingegeben werden.';
wlmc3='Ungültige MAC-Adresse ';
wlmc4='Bitte zuerst korrigieren.';
wlmc5='Die korrekte MAC-Adresse muss folgendermaßen aussehen: xx:xx:xx:xx:xx:xx (wobei x eine Zahl zwischen 0-9 oder ein Buchstabe zwischen a-f ist)!';
wlmc8='Sie haben eine MAC-Adresse mehr als einmal eingestellt!';
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
ENTRY_FULL	='Alle Einträge sind belegt.\nBitte löschen Sie einige Einträge, und versuchen Sie es erneut.';
CLEAR_CONFIRM	='Soll der Eintrag gelöscht werden? ';
CLEAR_ALL_CONFIRM ='Sollen alle Einträge gelöscht werden?';
g1='Die "IP-Adresse" ist die interne IP-Adresse des Routers. Um die erweiterte Konfigurations- Oberfläche zu öffnen, geben Sie diese IP-Adresse in die Adresszeile Ihres Browsers ein. Diese Adresse kann bei Bedarf geändert werden. Geben Sie hierzu die neue IP-Adresse ein, und klicken Sie auf "Änderungen übernehmen". Achten Sie darauf, dass Sie eine nicht routbare IP-Adresse wählen. Beispiele für nicht routbare IP-Adressen:';
g2='192.168.x.x (x steht für eine Zahl zwischen 0 und 255.)<br>';
g3='10.x.x.x (x steht für eine Zahl zwischen 0 und 255.)<br>';
g4='172.y.x.x (y steht für eine Zahl zwischen 16 und 31, x für eine Zahl zwischen 0 und 255)<br>';
g5='Die Subnetz- Maske muss nicht verändert werden. Bei Bedarf ist eine Änderung der Subnetz-Maske möglich. Sie sollten die Subnetz-Maske jedoch nur dann verändern, wenn es hierfür einen bestimmten Grund gibt.<br>';
g6='DNS ist die Abkürzung für (Domänennamen-Server). Ein Domänennamen-Server ist ein Server im Internet, der URL(Uniform Resource Locator) wie www.belkin.com in IP- Adressen übersetzt. Bei vielen Providern ist eine Eingabe dieser Daten in den Router unnötig. Das Feld "Automatisch vom Provider" sollte markiert sein, wenn Ihr Provider Ihnen keine spezifische DNS-Adresse zugeteilt hat. Wenn Sie mit einem statischen IP-Verbindungstyp arbeiten, müssen Sie eine spezifische DNS-Adresse und eine sekundäre DNS-Adresse angeben, damit die Verbindung richtig funktioniert Falls Sie mit einem dynamischen Verbindungstyp oder PPPoE arbeiten, müssen Sie wahrscheinlich keine DNS Adresse eingeben. Um die DNS-Adresseinstellungen einzugeben, deaktivieren Sie die Funktion "Automatisch vom Provider" und geben Sie Ihre DNS-Adresse in das entsprechende Feld ein. Klicken Sie auf "Änderungen übernehmen", um die Einstellungen zu sichern. <br>';
g6a='Der dynamische DNS-Dienst ermöglicht es Ihnen, eine dynamische IP-Adresse in jeder der zahlreichen Domänen, die DynDNS.org anbietet, als statischen Hostnamen auszuweisen. Sie erlauben Ihren Netzwerkcomputern damit, leichter auf verschiedene Bereiche des Internets zuzugreifen. DynDNS.org bietet diesen Dienst für maximal fünf Hostnamen kostenlos im Internet an.<br>	Der Dynamische DNSSM-Dienst ist ideal für private Internetseiten, Dateiserver oder um den Zugriff zu Ihrem Heim-PC von Ihrem Arbeitsplatz aus zu erleichtern. Verwenden Sie den Dienst, wenn Sie sicher gehen möchten, dass Ihr Hostname immer zu Ihrer IP-Adresse führt, unabhängig davon, wie oft diese von Ihrem Provider geändert wird. Auch wenn sich Ihre IP-Adresse ändert, können Ihre Freunde und Bekannte sie immer im Internet finden, indem Sie ersatzweise die Adresse ihrname.dyndns.org eingeben!<br>	<br>Um sich kostenlos für Dynamic DNS anzumelden, öffnen Sie die Seite http://www.dyndns.org (englischsprachig).<br>	<br><b>Einstellen des Update-Clients für Dynamisches DNS</b><br>Sie müssen sich beim kostenlosen Aktualisierungsdienst von DynDNS.org anmelden, bevor Sie diese Funktion nutzen können. Nach der Registrierung befolgen Sie bitte diese Anweisungen.<br>	1.Geben Sie in das Feld "Benutzername" Ihren DynDNS.org-Benutzernamen ein (1).<br>	2.Geben Sie in das Feld "Kennwort" Ihr DynDNS.org-Kennwort ein (2).<br>	3.Geben Sie in das Feld "Domänenname" den DynDNS.org-Domänennamen ein, den Sie mit DynDNS.org eingestellt haben, ein (3).<br>4.Klicken Sie auf  "Dynamisches DNS aktualisieren", um Ihre IP-Adresse zu aktualisieren.<br>	Immer wenn Ihre IP-Adresse vom Provider verändert wird, wird der Router automatisch die Server von DynDNS.org mit der neuen IP-Adresse aktualisieren. Sie können dies auch manuell tun, indem Sie auf die Schaltfläche "Dynamische DNS aktualisieren" klicken (4).';
g6b='Verwenden der dynamischen DNS';
	
g7='Mit der DHCP-Serverfunktion wird die Einstellung eines Netzwerks sehr vereinfacht, weil jedem Computer im Netzwerk eine IP-Adresse zugeteilt wird. Der DHCP-Server kann bei Bedarf deaktiviert werden. Wenn Sie den DHCP-Server deaktivieren, müssen Sie auf jedem Computer im Netzwerk manuell eine statische IP-Adresse einstellen . Der IP-Pool ist der IP-Adressbereich, der für eine dynamische Zuweisung an die Computer im Netzwerk reserviert ist. Die Vorgabe ist 2-100 (99 Computer). Wenn Sie diese Zahl verändern möchten, geben Sie eine neue Start- und eine neue Endadresse ein, und klicken Sie auf „Änderungen übernehmen". <br>';
g7a='DHCP-Server';
g8='Sie können einen lokalen Domänennamen (Netzwerknamen) für Ihr Netzwerk festlegen. Diese Einstellung muss normalerweise nicht geändert werden, soweit Ihrerseits kein bestimmter Grund vorliegt. Sie können den Namen für Ihr Netzwerk frei wählen, z. B. "MEIN NETZWERK". <br>';
g9='Dynamische IP';
g10='Die meisten Kabelmodems arbeiten mit einem dynamischen Verbindungstyp. Für die Verbindung zum Provider genügt es daher meistens, wenn Sie die Option "Dynamisch" wählen . Für manche dynamischen Verbindungstypen muss ein Hostname angegeben werden. Wenn Ihnen ein Hostname zugewiesen wurde, können Sie ihn im entsprechenden Feld eintragen. Der Hostname wird Ihnen vom Provider zugewiesen. Bei bestimmten dynamischen Verbindungen müssen Sie die MAC-Adresse des PCs klonen, der ursprünglich mit dem Modem verbunden war. Klicken Sie hierzu auf den Link "WAN MAC-Adresse ändern" . Wenn der Router korrekt eingerichtet ist, zeigt die Internet-Statusanzeige die Meldung "Verbunden" an. <br>';
g11='Statische IP-Adressen werden seltener als andere Verbindungstypen verwendet. Falls Ihr Provider   mit statischen IP-Adressen arbeitet, brauchen Sie die IP-Adresse, die Subnetz-Maske und die Provider-Gateway-  Adresse. Diese Informationen erhalten Sie bei Ihrem Provider. Meistens sind sie in den Anmeldeunterlagen  enthalten. Geben Sie die Angaben ein, und klicken Sie auf "Änderungen übernehmen". Wenn Sie die Einstellungen übernommen haben,  zeigt die Internet-Statusanzeige die Meldung "Connected" (Verbunden) an.  Sollte Ihr Provider Ihnen mehr als eine statische IP-Adresse zuteilen, ist Ihr Router in der Lage,  bis zu fünf statische WAN-IP-Adressen zu verwalten. Wählen Sie die Option "Mein Provider hat mir mehrere statische IP-Adressen zugeteilt"  und geben Sie die weiteren Adressen ein.';
g12='Die meisten DSL-Anbieter nutzen den Verbindungstyp PPPoE. Wenn Sie für die Internetverbindung ein DSL-Modem verwendenverwendet Ihr ISP vermutlich PPPoE, um Sie für diesen Dienst anzumelden. Bei vorhandenem Internet-Zugang: Wenn Sie zu Hause oder in Ihrem Büro eine Internetverbindung ohne Modem haben, müssen Sie ebenfalls PPPoE verwenden. <br><br>Ihr Verbindungstyp ist PPPoE, wenn folgende Voraussetzungen zutreffen:<br>1) Ihr Provider hat Ihnen einen Benutzernamen und ein Kennwort für die Verbindung zum Internet zugewiesen<br>2) Ihr Provider hat Ihnen für die Verbindung zum Internet bestimmte Software wie WinPOET oder Enternet300 bereitgestellt<br>3) Sie müssen auf ein anderes Symbol als auf das des Browsers klicken, um eine Internetverbindung herzustellen<br><br>Um den Router auf PPPoE einzurichten, geben Sie in den entsprechenden Feldern Ihren Benutzernamen und Ihr Kennwort ein.Wenn Ihnen kein Dienstname bekannt ist, lassen Sie das Feld "Dienstname" leer. Klicken Sie nach der Eingabe Ihrer Informationen auf "Änderungen übernehmen". Wenn Sie die Einstellungen übernommen haben, zeigt die Internet-Statusanzeige die Meldung "Verbunden" an, wenn der Router ordnungsgemäß konfiguriert wurde. Weitere Informationen zur Konfigurierung des Routers für PPPoE finden Sie im Benutzerhandbuch.<br>';
gmpoe1='WAN-Typ ist Multi-Sitzungs-PPPoE. Dieser WAN-Typ unterstützt verschiedene PPPoE-Sitzungen. Wenn jede Sitzung ordnungsgemäß konfiguriert ist, kann dieser Router die Pakete über die korrekte PPPoE-Verbindung übertragen. Außerdem wird die PPPoE-Sitzung 1 als Master-Sitzung behandelt. Die Pakete, die nicht auf die anderen PPPoE-Sitzungen abgestimmt sind, werden zur Master-Sitzung geleitet. Wenn der WAN-Typ nicht korrekt ist, ändern sie ihn!';
gmpoe2='Der Benutzer muss die Trigger-Regeln von jeder aktivierten PPPoE-Sitzung festlegen, wenn der Router unter verschiedenen PPPoE-WAN-Typen ordnungsgemäß  funktionieren soll. Wenn die PPPoE-Verbindungen hergestellt worden sind, können die Pakete entsprechend den Trigger-Regeln behandelt werden, um die richtige Sitzung zu finden und die Pakete zu übertragen. Es gibt zwei Konfigurationsmethoden zur Bestimmung einer Trigger-Regel für jede PPPoE-Sitzung. Über IP:   Bitte geben Sie die IP-Adresse, Subnetz-Maske und PPPoE-Sitzungs-ID ein, die abgerufen werden. Bei Domänenname : Bitte geben Sie den Domänennamen und die ID der PPPoE-Sitzung ein, die gestartet wird. Jede Regel wird ausgeführt, wenn das Aktivierungsfeld markiert ist.';

g14a='Telstra BigPond';
g14b='Wenn Sie die Einstellungen übernommen haben, meldet die Internet-Statusanzeige "Verbunden" , wenn der Router korrekt konfiguriert wurde.   ';

	
g13='Einige Provider verlangen ein PPTP-Protokoll für die Verbindung. Hierbei wird eine direkte Verbindung zum System des Providers hergestellt. Geben Sie im entsprechenden Feld die Informationen ein, die Sie vom Provider erhalten haben. Klicken Sie danach auf "Änderungen übernehmen". Wenn Sie die Einstellungen übernommen haben, meldet die Statusanzeige "Verbunden", wenn der Router korrekt konfiguriert wurde. ';
g15='MTU-Einstellungen';
g16='Die MTU-Einstellung darf nicht geändert werden, es sei denn, Ihr Provider verlangt ausdrücklich eine bestimmte MTU-Einstellung. Änderungen an der MTU-Einstellung können zu Problemen mit der Internet-Verbindung führen, wie Trennung vom Internet, langsame Verbindungen und Fehler bei der Arbeit mit Internet-Anwendungen. ';
g17='Trennen nach X...';
g18='Die Funktion "Trennen" dient zur automatischen Trennung des Routers vom Internet, wenn eine bestimmte Zeit lang keine Aktivität mehr festgestellt wird. Wenn Sie diese Option aktivieren und zum Beispiel 5 in das Minutenfeld eingeben, wird der Router nach fünf Minuten Inaktivität vom Internet getrennt. Diese Option sollte nur verwendet werden, wenn Ihre Internet-Nutzung nach Zeit abgerechnet wird.  ';
g19='MAC ist das Kürzel für "Media Access Controller". Alle Netzwerk-Komponenten, einschließlich Karten Adapter und Router, besitzen eine eindeutige Seriennummer, die als MAC-Adresse bezeichnet wird. Ihr Provider speichert die MAC-Adresse des Adapters Ihres Computers, damit nur dieser Computer auf das Internet zugreifen kann. Wenn Sie den Router installieren, wird die MAC-Adresse des Routers vom Provider erkannt und die Verbindung unter Umständen unterbrochen. Belkin hat daher die Möglichkeit entwickelt, die MAC-Adresse des Computers in den Router zu kopieren (Klonen). Die MAC-Adresse wird dann vom Provider-System als die ursprüngliche MAC-Adresse erkannt, so dass es die Verbindung zulässt. Wenn Sie nicht wissen, ob Ihr Provider die ursprüngliche MAC-Adresse verlangt, klonen Sie einfach die MAC-Adresse des Computers, der ursprünglich an das Modem angeschlossen war. Das Klonen der Adresse verursacht keine Probleme im Netzwerk. Achten Sie beim Klonen der MAC-Adresse darauf, dass Sie den Computer verwenden, der URSPRÜNGLICH mit Ihrem Modem VERBUNDEN war, bevor der Router installiert wurde. Klicken Sie auf "'+wmc5+'". Klicken Sie auf "Änderungen übernehmen". Ihre MAC-Adresse wurde in den Router kopiert.';  

g20='Sie können den Betriebskanal des Routers wechseln. Wählen Sie hierzu den gewünschten neuen Kanal im Dropdown-Menü. Klicken Sie auf "Änderungen übernehmen", um die Einstellung zu sichern. Sie können auch die SSID ändern. Die SSID ist der Name des kabellosen Netzwerks. Sie können die SSID frei festlegen. Wenn sich weitere Funknetzwerke in Ihrer Umgebung befinden, sollten Sie Ihrem Netzwerk einen besonderen Namen geben. Die Vorgabe ist belkin.xxx. Um die SSID zuändern, klicken Sie auf das Feld "SSID" und geben einen neuen Namen ein. Klicken Sie auf "Änderungen übernehmen", um die Änderung zu speichern.';
				
g21='Sie können Ihr kabelloses Netzwerk fast unsichtbar machen. Wenn Sie das Rundsenden der SSID deaktivieren, wird Ihr Netzwerk nicht in Standortübersichten aufgenommen. Die Standortübersicht ist eine Funktion, mit der viele moderne Netzwerkadapter ausgestattet sind. Dabei wird die "Luft" nach erreichbaren Netzwerken abgesucht und werden gefundene Netzwerke zur Verbindung angeboten. Wenn Sie die Rundsendung der SSID deaktivieren, verbessern Sie die Netzwerksicherheit. ';
g25=' Virtuelle Server';
g26='Mit dieser Funktion können Sie externe (Internet-)Anfragen bei Diensten wie Web-Server (Port 80), FTP-Server (Port 21) oder andere Anwendungen über Ihren Router an das interne Netzwerk leiten. Weil die internen Computer durch eine Firewall geschützt sind, können die Rechner aus dem Internet nicht auf sie zugreifen, da sie nicht "sichtbar" sind. Wenn Sie die virtuelle Serverfunktion für eine bestimmte Anwendung einstellen müssen, sehen Sie in der Liste der verbreitetsten Anwendungen nach. Wenn Ihre Anwendung dort nicht aufgeführt wird, wenden Sie sich an den Hersteller des Programms, um dort zu erfahren, welche Port-Einstellungen Sie vornehmen müssen. Wählen Sie, wenn vorhanden, die entsprechende Anwendung aus der Dropdown-Liste aus. Wählen Sie die Reihe, aus der Sie die Einstellungen kopieren möchten, aus der Dropdown-Liste neben "In Zeile" aus und klicken Sie auf "Eingabe". Die Einstellungen werden in die angegebene Zeile übertragen. Klicken Sie auf "Apply Changes" (Änderungen übernehmen), um die Einstellung zu sichern Um Einstellungen manuell einzugeben, tragen Sie die IP-Adresse in das Feld für den internen Server ein, dann die Ports, die freigegeben werden müssen (bei mehreren Ports trennen Sie diese durch Kommata); wählen Sie den Port-Typ aus (TCP oder UDP) und klicken Sie auf "Änderungen übernehmen". Sie können pro interner IP-Adresse nur einen Port freigeben. Das Öffnen von Ports in Ihrer Firewall kann ein Sicherheitsrisiko darstellen. Das Aktivieren und Deaktivieren von Einstellungen geht schnell. Daher sollten Sie die Einstellungen deaktivieren, wenn Sie eine bestimmte Anwendung momentan nicht verwenden. ';
g27='Client-IP-Filter';
g28='Sie können den Router so einstellen, dass der Zugriff auf das Internet, E-Mail oder andere Netzwerke zu einer bestimmten Zeit beschränkt wird. Die Beschränkung kann für einen einzelnen oder mehrere Computer festgelegt werden. Wenn Sie z.B. den Internet-Zugriff für einen bestimmten Computer einschränken möchten, geben Sie seine IP-Adresse in die IP-Felder ein. Geben Sie dann in die beiden Schnittstellenfelder jeweils 80 ein. Wählen Sie "TCP". Wählen Sie "Blockieren". Sie können auch "Immer" auswählen, um den Zugriff rund um die Uhr zu sperren. Wählen Sie oben den Starttag, und die Startzeit und den Endtag und die Endzeit unten. Klicken Sie auf "Änderungen übernehmen". Der Computer mit der angegebenen IP-Adresse wird jetzt zu den bestimmten Zeiten vom Internet-Zugriff ausgeschlossen. Hinweis: Achten Sie darauf, dass unter "Dienstprogramme> Systemeinstellungen> Zeitzone" die richtige Zeitzone ausgewählt ist.  ';
g28_1='Sie können den Router so einstellen, dass der Zugriff auf das Internet, E-Mail oder andere Netzwerke auf bestimmte Tage und Zeiten beschränkt bzw. zugelassen wird. Die Beschränkung kann für einen einzelnen oder mehrere Computer festgelegt werden. Klicken Sie auf "Hinzufügen", um diese Funktion zu nutzen.';		

g29='MAC-Adressfilter';
g30='Der MAC-Adressfilter ist eine leistungsstarke Sicherheitsfunktion, mit der Sie festlegen können, welche Computer für das Netzwerk zugelassen sind. Computern, die nicht in der Filterliste verzeichnet sind, wird der Zugriff auf das Netzwerk verweigert. Wenn Sie diese Funktion aktivieren, müssen Sie die MAC-Adressen aller Clients in Ihrem Netzwerk eintragen, damit sie auf das Netzwerk zugreifen können. Zum Aktivieren dieser Funktion wählen Sie "MAC-Adressfilter aktivieren". Geben Sie dann die MAC-Adresse jedes vernetzten Computers ein, indem Sie auf "Hinzufügen" klicken. Klicken Sie auf "Änderungen übernehmen", um die Einstellungen zu speichern. Um eine MAC-Adresse in der Liste zu löschen, klicken Sie neben der betreffenden Adresse.auf die Option "Löschen".  Klicken Sie auf "Änderungen übernehmen", um die Einstellungen zu speichern. Hinweis: Die MAC-Adresse des Computers, mit dem Sie die Verwaltungsfunktionen des Routers bedienen, kann nicht gelöscht werden. (Dies ist der Computer, der gerade verwendet wird). ';
g31='Mit der DMZ-Funktion können Sie einen Computer festlegen, der von der NAT-Firewall ausgenommen werden soll. Das kann erforderlich sein, wenn die NAT-Funktion bei einer Anwendung Probleme verursacht, zum Beispiel bei einem Spiel oder einer Videokonferenzanwendung. Verwenden Sie diese Funktion nur zeitweise. <font class="redBold">Der DMZ-Computer ist NICHT vor Hacker-Angriffen geschützt.</font>Um einen Computer in den DMZ-Status zu versetzen, geben Sie die letzten Ziffern seiner IP-Adresse in das IP-Feld ein, und wählen Sie "Aktivieren". Klicken Sie auf "Änderungen übernehmen", um die Änderung in Kraft zu setzen. Wenn Sie mehrere statische WAN-IP-Adressen verwenden, können Sie die WAN-IP-Adresse festlegen, zu der der DMZ-Host umgeleitet wird. Geben Sie die WAN-IP-Adresse ein, zu der der DMZ-Host umgeleitet werden soll; geben Sie die beiden letzten Ziffern der IP-Adresse desDMZ-Host-Computers ein, wählen Sie "Aktivieren", und klicken Sie auf "Änderungen übernehmen". ';
	
g32='ICMP Ping blockieren';
g33='Computerhacker bedienen sich sogenannter "Pings", um potenzielle Opfer im Internet zu finden. Über die Ping-Prüfung einer IP-Adresse und die Antwort des adressierten Rechners kann ein Hacker Angriffspunkte feststellen. Der Router kann so eingerichtet werden, dass er auf ICMP-Pings von außen nicht antwortet. Hierdurch verbessern Sie den Schutz Ihres Routers. Um die Ping-Antwort abzuschalten, wählen Sie "ICMP-Ping blockieren" und klicken auf "Änderungen übernehmen". Der Router lässt jetzt ICMP-Pings unbeantwortet. ';
g34='Administratorkennwort';

g35='Der Router wird OHNE festgelegtes Kennwort geliefert. Wenn Sie ein Kennwort hinzufügen möchten, um den Schutz Ihres Routers zu erhöhen, können Sie hier ein Kennwort eingeben. Bewahren Sie das Kennwort sicher auf. Sie benötigen es, wenn Sie sich künftig am Router anmelden möchten. Sie sollten ein Kennwort festlegen, wenn Sie die Fernverwaltung des Routers nutzen möchten. <br><br>Mit dem Anmeldezeitlimit legen Sie fest, wie lange Sie an der Erweiterten Benutzeroberfläche für die Routerkonfiguration angemeldet bleiben können. Die Zähluhr startet, wenn keine Aktivität mehr registriert wird. Beispiel: Sie haben Änderungen mit der Erweiterten Benutzeroberfläche vorgenommen und verlassen ihren Arbeitsplatz, ohne auf "Abmelden" zu klicken. Angenommen, das Zeitlimit beträgt 10 Minuten, wird die Sitzung 10 Minuten, nachdem Sie den Computer verlassen haben, beendet. Wenn Sie weitere Änderungen vornehmen möchten, müssen Sie sich erneut am Router anmelden. Das Zeitlimit für die Anmeldung dient der Sicherheit und ist auf 10 Minuten voreingestellt. Hinweis: Es kann jeweils nur ein Computer an der erweiterten Konfigurationsoberfläche zur Routerkonfiguration angemeldet sein. ';

g36='Uhrzeit und Zeitzone';
g37='Der Router hält die Uhrzeit auf dem Laufenden, indem er eine Verbindung mit einem Simple Network Time Protocol (SNTP)-Server herstellt. Dadurch kann der Router die Systemuhr mit dem weltweiten Internet synchronisieren. Die synchronisierte Routeruhr dient zur Aufzeichnung des Sicherheitsprotokolls und zur Steuerung des Client-Filters. Wählen Sie Ihre Zeitzone aus. Wenn in Ihrem Land zwischen Sommer- und Winterzeit umgeschaltet wird, markieren Sie das Kontrollkästchen "Sommerzeit". Die Systemuhr wird nicht immer sofort aktualisiert. Sie müssen mindestens 15 Minuten abwarten, bis der Router die Zeitserver im Internet abfragt und eine Antwort erhält. Sie können die Uhr nicht selbst einstellen. ';
g38='Fernverwaltung';

g39='Bevor Sie diese Funktion aktivieren, <font class="plaintext_bold">SOLLTEN SIE UNBEDINGT EIN ADMINISTRATORKENNWORT FESTLEGEN. </font>Mit dem Fernmanagement können Sie überall vom Internet aus Änderungen an den Router-Einstellungen vornehmen. Für die Fernverwaltung des Routers gibt es zwei Methoden. Zum einen können Sie den Zugriff auf den Router vom gesamten Internet aus erlauben, in dem Sie die Funktion "Beliebige IP-Adresse zur Fernverwaltung des Routers" einstellen. Wenn Sie Ihre WAN-IP-Adresse von einem Computer mit Internetverbindung eingeben, sehen Sie einen Anmeldebildschirm, über den Sie das Kennwort für Ihren Router eingeben müssen. Zum anderen können Sie eine bestimmte IP-Adresse festlegen, an der Sie die Fernverwaltung des Routers durchführen möchten. Dies ist sicherer, aber auch unpraktischer. Geben Sie für diese Methode die IP-Adresse des Computers, an dem Sie den Router fernverwalten möchten, in das entsprechende Feld ein und aktivieren Sie die Option "Nur diese IP-Adresse zur Fernverwaltung" des Routers zulassen. Es wird DRINGEND EMPFOHLEN, dass Sie ein Administratorkennwort festlegen, bevor Sie diese Funktion aktivieren. Wenn Sie auf das Kennwort verzichten, setzen Sie Ihren Router der Gefahr von Manipulationen durch Unbefugte aus.';
g40='NAT-Aktivierung';
g42='Die UPnP (Universal Plug-and-Play)-Technologie ermöglicht den reibungslosen Betrieb von Sprach-und Videonachrichten, Spielen und anderen Anwendungen, die dem UPnP-Standard entsprechen. Einige Anwendungen benötigen für eine einwandfreie Funktion eine spezielle Konfiguration der Firewall im Router. Hierzu müssen meistens TCP- und UDP-Ports geöffnet und in bestimmten Fällen auch Trigger-Ports gesetzt werden. UPnP-kompatible Anwendungen können mit dem Router kommunizieren und ihm mitteilen, wie die Firewall konfiguriert werden muss. Werkseitig ist die UPnP-Funktion des Routers deaktiviert. Wenn Sie UPnP-kompatible Anwendungen einsetzen und die UPnP-Funktionen nutzen möchten, können Sie die UPnP-Option aktivieren. Wählen Sie hierzu auf der Seite "Dienstprogramme" im Abschnitt "UPnP-Aktivierung" die Option "Aktivieren". Klicken Sie auf "Änderungen übernehmen", um die Änderung zu speichern. ';
g43='Automatische Benachrichtigung zur Firmware-Aktualisierung';
g44='Der Router kann automatisch anfragen, ob eine neue Firmware-Version vorliegt und Sie ggf. darauf aufmerksam machen. Wenn Sie sich an der Erweiterten Benutzeroberfläche des Routers anmelden, überprüft der Router, ob neue Firmware verfügbar ist. Ist dies der Fall, werden Sie benachrichtigt. Sie können die neue Version herunterladen oder die Benachrichtigung ignorieren. Werkseitig ist diese Funktion des Routers deaktiviert. Wenn Sie sie aktivieren möchten, klicken Sie auf "Aktivieren" und dann auf "Änderungen übernehmen". ';
g45='Sicherheitseinstellungen des Funknetzwerks';

g46='Verschlüsselungstechniken erhöhen die Sicherheit Ihres WLAN-Netzwerks. Es kann jeweils nur ein Sicherheitstyp ausgewählt werden. Anwender müssen daher einen Modus auswählen, der von allen Netzwerkgeräten im WLAN-Netzwerk unterstützt wird. Dieses Belkin-Produkt verfügt über 4 mögliche Sicherheitseinstellungen:<br><br>1) Deaktiviert. In diesem Modus wird keine Verschlüsselung aktiviert. Offene Netzwerke, in denen jeder Benutzer willkommen ist, sind meistens nicht verschlüsselt.<br><br>2) WPA/WPA2-Personal(PSK) (Wireless protected Access) PSK ist eine aktuelle, standardisierte Sicherheitstechnik, bei der jedes Informationspaket mit einem anderen Code oder Schlüssel verschlüsselt wird. Weil sich der Schlüssel immer wieder ändert, ist WPA sehr sicher. WPA-PSK (Pre-Shared Key) eignet sich für Privatanwender und Kleinbetriebe, die keinen Server haben. Die PSK-Verschlüsselung wird automatisch aus einer Zeichenreihe oder einer Passphrase (Kennfolge) generiert. Das größte Sicherheitsrisiko bei WPA-PSK liegt daher in der Preisgabe der Passphrase.<br><br>a. TKIP im Vgl. zu AES. Während der WPA-Einrichtung muss der Nutzer die Wahl zwischen der Verschlüsselung mit TKIP oder AES treffen. Der WPA-Standard bestimmt TKIP; daher ist dies die Standardeinstellung. Darüber hinaus sollte TKIP eine bessere Kompatibilität mit WLAN-Geräten unterschiedlicher Hersteller gewährleisten, da viele WLAN-Produkte kein AES-Upgrade erhalten. AES ist eine neue Verschlüsselungstechnik auf der Grundlage des 802.11i-Standards. Neue WPA-Standards arbeiten meist mit AES. Obwohl AES nicht so gängig ist, wird diese Technik von einigen Anwendern vorgezogen. In jedem Fall müssen alle Netzwerkgeräte auf dieselbe Technik eingestellt sein.<br><br>b. Pre-shared Key (Vorinstallierter Schlüssel). Geben Sie ein Wort oder einen Satz mit maximal 64 Zeichen ein. Derselbe PSK muss ebenfalls für alle anderen Netzwerkgeräte im Netzwerk eingestellt werden. Achten Sie dabei auf die Groß- und Kleinschreibung ("n" ist ein anderes Zeichen als "N"). Der leichteste Weg, Ihre Sicherheitseinstellungen zu umgehen, ist die Preisgabe Ihres PSK.<br><br>3) 128-Bit WEP. Bis vor kurzem galt 128-Bit WEP (Wired Equivalent Privacy) als Standard für Drahtlosverschlüsselung. Wenn nicht alle Ihre WLAN-Geräte WPA unterstützen, ist 128-Bit WEP noch immer eine sehr gute Sicherheitseinstellung. Sie müssen dazu Hexadezimalzahlen eingeben oder diese automatisch generieren lassen.<br><br>4) 64-Bit WEP. Belkin empfiehlt den 64 Bit-Modus für Netzwerke, in denen einige Geräte weder WPA noch 128-Bit WEP unterstützen. ';

g47='Einige Provider verlangen ein L2TP-Protokoll für die Verbindung. Hierbei wird eine direkte Verbindung zum System des Providers hergestellt. Geben Sie im entsprechenden Feld die Informationen ein, die Sie vom Provider erhalten haben. Klicken Sie danach auf „Änderungen übernehmen". Wenn Sie die Einstellungen übernommen haben, meldet die Statusanzeige „Verbunden", wenn der Router korrekt konfiguriert wurde';
g48 = 'Access Control';
g49 = 'The Router can be configured to restrict access to the Internet, email, or other network services at specific days and times. Restriction can be set for a single computer.';
g50='ECO-Modus';
g51='Mit dieser Funktion können Sie die LED-Leuchten an der Router-Vorderseite dimmen und so Strom einsparen. Sie können die Funkverbindung auch zu voreingestellten Zeiten deaktivieren.';

rs_file_error='Upgrade-Datei hat nicht den korrekten Typen oder die richtige Version für dieses Gerät. Das Upgrade ist fehlgeschlagen. Bitte versuchen Sie es mit der korrekten Datei erneut';
rs_crc='Fehler bei der Wiederherstellung < CRC >';
rs_long='Fehler bei der Wiederherstellung <zu lang>';
rs_disposition='Fehler bei der Wiederherstellung <Keine Inhaltseinteilung>';
rs_getpid='Fehler bei der Wiederherstellung <PID nicht erhältlich!>';
rs_unmatchpid='Fehler bei der Wiederherstellung <keine Übereinstimmung bei PID>';

var msg_ddns1="Bitte geben Sie Ihren Benutzernamen ein!\n";
var msg_ddns2="Bitte geben Sie das Kennwort ein!\n";
var msg_ddns3 ="Domänennamenfelder dürfen nicht leer sein.\n";
var msg_ddns4="Dynamisches DNS aktualisieren";
var msg_ddns5="Domainname sollte kürzer als 63 stellig sein.";
// fw_dmz.html
var msg_fw_dmz1 = "Please enter the IP address before enabling DMZ.\n";
var msg_lan_dhcp1 ="Informationen werden vom Gateway angefordert.";
var msg_lan_dhcp2 ="Aktualisieren der Konfigurationsdatenbank.";
var msg_lan_sett1 ="Bitte geben Sie nicht routbare IP-Adressen ein (10 oder 172 oder 192)!\n";
var msg_lan_sett2 ="Bitte geben Sie nicht routbare IP-Adressen ein (168)!\n";
var msg_lan_sett3 ="Bitte geben Sie nicht routbare IP-Adressen ein (16 ~ 31)!\n";
var msg_lan_sett4 ="Bitte geben Sie nicht routbare IP-Adressen ein (1 ~ 254)!\n";
var msg_lan_sett5 ="Bitte geben Sie nicht routbare IP-Adressen ein (0 ~ 255)!\n";
var msg_wan_stat1 ="IP-Adresse ";
var msg_wan_stat2 =" ist nicht vorhanden ";
var msg_wan_stat3 =" Netzwerk.";
var msg_wls_chan1 ="SSID kann nicht als NULL gesendet werden";
var msg_wls_chan2 ="Die Gast-SSID darf nicht NULL sein; es muss ein Wert eingetragen werden!\n";
var fw_update ="Firmware wird aktualisiert. ";
var fw_not_interrupt ="UNTERBRECHEN SIE DEN ROUTER NICHT, SCHALTEN SIE IHN NICHT AB! Dies könnte dazu führen, dass der Router nicht mehr funktioniert. ";
var show35a ="Werkseinstellungen wiederherstellen";
var msg_invalid_char ='Ungültige(s) Zeichen gefunden. Gültige Zeichen sind: 0-9,a-z, A-Z, `~!@#$%^&*()_-+=|\\{}[]:";\',.<>/?';
var vs_null ="Beschreibung fehlt.";
var msg_invalid_vs_char='Ungültige(s) Zeichen gefunden. Gültige Zeichen sind: 0-9, a-z, A-Z, `~!@#$%^&*()_-+=|{}[]:;\',.<>/?';
var msg_invalid_ssid_char='Ungültige(s) Zeichen gefunden. Gültige Zeichen sind: 0-9, a-z, A-Z, _+.';
var msg_invalid_domain_char='Ungültiger lokaler Domänenname'+': ~!@#$%^&*()=+{}[]|":;\\\'?/<>,`';
var msg_invalid_char_1 ='Ungültige(s) Zeichen gefunden. Gültige Zeichen sind Buchstaben und Zahlen. Die folgenden Symbole sind unzulässig: `~!@#$%^&*()_+[]{}\\|;:\'"<>/?.,';
var msg_hostIP_invalid ="Die Host-IP-Adresse ist ungültig. Es sollte nicht die LAN IP-Adresse des Routers sein.\n";
var msg_dmzIP_blank="Bitte geben Sie die IP-Adresse ein, bevor Sie die DMZ aktivieren.";
var msg_dmzIP ="DMZ-IP-Adresse.";
ipm='Entweder haben Sie nicht alle DNS-Nummern eingegeben oder es sind nicht alle Nummern gültig. Zulässig sind Zahlen zwischen 0 und 255.';
ipmLast='Entweder haben Sie nicht alle DNS-Nummern eingegeben oder es sind nicht alle Nummern gültig. Zulässig sind Zahlen zwischen 1 und 254.';
var msg_blank =" darf nicht leer sein.\n";
var msg_space ="Leere Felder oder Leerzeichen sind bei %s nicht zulässig\n";
var msg_blank_in ="Leere Felder sind bei %s nicht zulässig\n";
var msg_allspaces ="%s kann nicht nur aus Leerzeichen bestehen\n";
var msg_invalid ="Ungültige(s) Zeichen in %s\nGültige Zeichen sind: \n%s\n\n";
var msg_check_invalid ="%s enthält eine ungültige Zahl\n";
var msg_valid_range ="%s ist ungültig. Gültiger Bereich ist %s bis %s\n";
var msg_invalid_mac ="Ungültige MAC-Adresse.\n";
var msg_multi_mac="Die MAC-Adresse kann keine Multicast-Adresse sein.\n";
var msg_vs_des="Ungültiges Zeichen : oder - in der Beschreibung nicht zugelassen.";
var msg_privateIP_invalid ="LAN-IP-Adresse ist ungültig!\n";
var msg_dmzIP ="DMZ-IP-Adresse.";
var msg_confirmDefault ="Achtung!\nDurch das Laden der Werkseinstellungen werden alle aktuellen Einstellungen gelöscht.\nSind Sie sicher, dass Sie fortfahren wollen?";

var con_noinfo='Wählen Sie den Verbindungstypen Ihres Providers.\nSie haben diese Daten bei der Anmeldung von Ihrem Provider erhalten.';
var con_miss='Im Feld unten sind Daten eingetragen, die inkorrekt oder ungültig sind.';
var con_nosure='Bitte nehmen Sie Kontakt mit Ihrem Provider auf, wenn Sie sich nicht sicher sind, welchen Verbindungstyp Sie haben.\nBitte fragen Sie den Provider nach allen Daten, die auf den folgenden Seiten benötigt werden.';

var wiz_noinfo='Tragen Sie die folgenden Informationen ein, die für die von Ihnen im letzten Fenster ausgewählte Internetverbindung benötigt werden.  Sie haben diese Informationen von Ihrem Provider erhalten.';
var wiz_miss='In manche der Felder unten sind ungültige oder inkorrekte Daten eingegeben worden (z.B. ungültiger Kontoname, ungültiges Kennwort oder ungültige Zeichen).  Geben Sie bitte die fehlenden Daten ein.  Sie haben diese Informationen von Ihrem Provider erhalten.';
var wiz_nosure='Bitte nehmen Sie Kontakt mit Ihrem Provider auf, wenn Sie Fragen zu den Einstellungen unten haben.';
var network_key1='Sie müssen den Netzwerkschlüssel eintragen!';
var network_key2='La clé doit être composée de 8 à 63 caractères, et peut inclure des espaces et des symboles, ou une clé hex 64 bits (0-F) seulement!';
var wiz_cd1='Bitte legen Sie die CD mit Installationssoftware in den Computer ein und beenden Sie diesen Assistenten.';
var wiz_cd2='Kein Sorge, es muss nur eine Einstellung auf Ihren Computer verändert werden, die sich auf Australien und Neuseeland bezieht.  Auf der CD befindet sich dafür ein spezielles Programm.';
var wiz_cd3='Wenn Sie diesen Assistenten beendet haben und die CD eingelegt haben, müsste der Installationsassistent innerhalb von 15 Sekunden erscheinen.';
var wiz_cd4='Sie müssen diesen browserbasierten Assistenten schließen, indem Sie unten auf die Schaltfläche Beenden klicken, um die <br> CD zu benutzen';
var wiz_chk_conn1='Internet-Verbindung wird überprüft...';
var wiz_chk_conn2='Bitte warten während der Router Ihre Internet-Einstellungen überprüft.';
var wiz_chk_isp='Ihr Internet Provider hat die Einstellungen nicht akzeptiert, als Sie versuchten, eine Verbindung herzustellen.  Sehen Sie sich diese Einstellungen noch einmal genau an, um eventuelle Fehler zu entdecken.';
var wiz_chk_poeisp='Ihr Provider hat die Einstellungen unten nicht akzeptiert, als versucht wurde, eine Verbindung herzustellen. Bitte<br>sehen Sie genau nach, ob alles korrekt eingestellt ist. Wenn Sie nicht sicher sind, ob die Einstellungen korrekt sind, nehmen Sie Kontakt mit Ihrem Provider auf.';
btn5='Zurück';
btn6='Routing-Tabelle';
Multi_PPPoE='Multi-PPP over Ethernet';
wcc15='Multi-PPPoE';
wcc16='[Nur Japan] Dieser Verbindungstyp ist eine spezielle Funktion in Japan, die für Nutzer von NTT\'s Breitband Internet erforderlich ist';


var Australia_wz="Australien";
var Austria_wz="Österreich";
var Belgium_wz="Belgien";
var China_wz="China";
var Czech_wz="Tschechische Republik";
var Denmark_wz="Dänemark";

var France_wz="Frankreich";
var Germany_wz="Deutschland";
var Hong_Kong_wz="Hongkong";
var Hungary_wz="Ungarn";
var India_wz="Indien";
var Indonesia_wz="Indonesien";
var Israel_wz="Israel";
var Italy_wz="Italien";
var Japan_wz="Japan";
var Korea_wz="Korea";
var Malaysia_wz="Malaysia";
var Netherlands_wz="Niederlande";
var New_Zealand_wz="Neuseeland";
var Norway_wz="Norwegen";
var Philippines_wz="Philippinen";

var Portugal_wz="Portugal";
var Singapore_wz="Singapur";
var Spain_wz="Spanien";
var Sweden_wz="Schweden";
var Switzerland_wz="Schweiz";
var Taiwan_wz="Taiwan";
var Thailand_wz="Thailand";
var UK_wz="GB";
var USA_wz="USA"
var Other_wz="Sonstige";
 

g10_brief='Die meisten Kabelmodems arbeiten mit einem dynamischen Verbindungstyp. Für die Verbindung zum Provider genügt es daher meistens, wenn Sie die Option "Dynamisch" wählen . Für manche dynamischen Verbindungstypen muss ein Hostname angegeben werden. Wenn Ihnen ein Hostname zugewiesen wurde, können Sie ihn im entsprechenden Feld eintragen. Der Hostname wird Ihnen vom Provider zugewiesen.';
var Finland_wz="Finnland";
var Poland_wz="Poland";

var msg_invalid_IP = 'Eine oder mehrere eingegebene IP-Adressen sind nicht gültig!';
var modem_miss = wiz_miss;
var modem_nosure = wiz_nosure;
var modem_noinfo = 'Bitte geben Sie die folgenden Daten ein. Sie haben diese Informationen von Ihrem Provider erhalten.';
var run_detect1 = 'Dieses Modem sucht gerade VPI/VCI, bitte warten......';
var run_detect2 = 'Dieses Modem sucht gerade den WAN-Verbindungstypen, bitte warten......';
 

run19='Verkapselt:';
run46=wiz_chk_isp;
run48='Modemeinstellungen';
run52='Kapselung';
info_pppoe = 'Die meisten DSL-Anbieter nutzen den Verbindungstyp PPPoE. Wenn Sie für die Internetverbindung ein DSL-Modem verwenden  verwendet Ihr ISP vermutlich PPPoE, um Sie für diesen Dienst anzumelden. Bei vorhandenem Internet-  Zugang: Wenn Sie zu Hause oder in Ihrem Büro eine Internetverbindung ohne Modem haben, müssen Sie ebenfalls PPPoE verwenden. <br><br>  Ihr Verbindungstyp ist PPPoE, wenn folgende Voraussetzungen zutreffen:<br>  1) Ihr Provider hat Ihnen einen Benutzernamen und ein Kennwort für die Verbindung zum Internet zugewiesen.<br>  2) Ihr Provider hat Ihnen für die Verbindung zum Internet bestimmte Software wie WinPOET oder Enternet300 bereitgestellt.<br>  3) Sie müssen auf ein anderes Symbol als auf das des Browsers klicken, um eine Internetverbindung herzustellen.<br><br>  Um den Router auf PPPoE einzurichten, geben Sie in den entsprechenden Feldern Ihren Benutzernamen und Ihr Kennwort ein. Wenn Ihnen kein Dienstname bekannt ist, lassen Sie das Feld "Dienstname" leer.  Klicken Sie nach der Eingabe Ihrer Informationen auf "Änderungen übernehmen". Wenn Sie die Einstellungen übernommen haben,  zeigt die Internet-Statusanzeige die Meldung "Verbunden" an, wenn der Router ordnungsgemäß konfiguriert wurde. Weitere Informationen zur Konfigurierung des Routers für PPPoE finden Sie im Benutzerhandbuch.';
info_pppoa = 'Die meisten DSL-Anbieter nutzen den Verbindungstyp PPPoA. Wenn Sie für die Internetverbindung ein DSL-Modem verwenden, benutzt Ihr ISP vermutlich PPPoA, um Sie für diesen Dienst anzumelden. Bei vorhandenem Internet- Zugang: Wenn Sie zu Hause oder in Ihrem Büro eine Internetverbindung ohne Modem haben, müssen Sie ebenfalls PPPoA verwenden.<br><br> Ihr Verbindungstyp ist PPPoA, wenn folgende Voraussetzungen zutreffen:<br> 1) Ihr Provider hat Ihnen einen Benutzernamen und ein Kennwort für die Verbindung zum Internet zugewiesen.<br> 2) Ihr Provider hat Ihnen für die Verbindung zum Internet bestimmte Software bereitgestellt.<br> 3) Sie müssen auf ein anderes Symbol als auf das des Browsers klicken, um eine Internetverbindung herzustellen.<br><br>  Um den Router auf PPPoA einzurichten, geben Sie in den entsprechenden Feldern Ihren Benutzernamen und Ihr Kennwort ein. Wenn Ihnen kein Dienstname bekannt ist, lassen Sie das Feld "Service Name" (Dienstname) leer. Klicken Sie nach der Eingabe Ihrer Informationen auf "Änderungen übernehmen". Wenn Sie die Einstellungen übernommen haben, zeigt die Internet-Statusanzeige die Meldung "Verbunden" an, wenn der Router ordnungsgemäß konfiguriert ist. Weitere Informationen zur Konfigurierung des Routers für PPPoA finden Sie im Benutzerhandbuch.';
info_ipoa = g11;
info_dial_up = 'Sie benötigen ein Modem, das an die serielle Routerschnittstelle angeschlossen ist. Einwahl-Telefonnummer, Benutzername, Kennwort usw. werden Ihnen vom Provider genannt. Wenn Ihr Modem spezielle Initialisierungsfolgen benötigt, müssen diese vom Hersteller des Modems angegeben werden. Falls Ihnen der Provider eine bestimmte IP-Adresse zugewiesen hat, müssen Sie sie in die IP-Adressfelder unten auf dem Bildschirm eingeben.';
topic_dial_up = 'Externe Einwahl';
 
h9_1 = 'DSL ist die Abkürzung von "Digital Subscriber Line" (Digitale Teilnehmerleitung). DSL-Modems nutzen die vorhandene Telefonleitung zur Datenübertragung mit hoher Geschwindigkeit.';
info_dsl_modem = h9_1;
 
h9_2 = 'DSL-Modem';
topic_dsl_modem = h9_2;
help_pppoa = '<b>PPPoA</b> Die meisten DSL-Anbieter nutzen den Verbindungstyp PPPoA. Wenn Sie für die Internetverbindung ein DSL-Modem verwenden, benutzt Ihr ISP vermutlich PPPoA, um Sie für diesen Dienst anzumelden. Bei vorhandenem Internet- Zugang: Wenn Sie zu Hause oder in Ihrem Büro eine Internetverbindung ohne Modem haben, müssen Sie ebenfalls PPPoA verwenden. Ihr Verbindungstyp ist PPPoA, wenn folgende Voraussetzungen zutreffen: 1) Ihr Provider hat Ihnen einen Benutzernamen und ein Kennwort für die Verbindung zum Internet zugewiesen. 2) Ihr Provider hat Ihnen für die Verbindung zum Internet bestimmte Software bereitgestellt. 3) Sie müssen auf ein anderes Symbol als auf das des Browsers klicken, um eine Internetverbindung herzustellen.  Um den Router auf PPPoA einzurichten, geben Sie in den entsprechenden Feldern Ihren Benutzernamen und Ihr Kennwort ein. Wenn Ihnen kein Dienstname bekannt ist, lassen Sie das Feld "Service Name" (Dienstname) leer. Klicken Sie nach der Eingabe Ihrer Informationen auf "Änderungen übernehmen". Wenn Sie die Einstellungen übernommen haben, zeigt die Internet-Statusanzeige die Meldung "Verbunden" an, wenn der Router ordnungsgemäß konfiguriert ist. Weitere Informationen zur Konfigurierung des Routers für PPPoA finden Sie im Benutzerhandbuch.';
help_pppoe = '<b>PPPoE</b> Die meisten DSL-Anbieter nutzen den Verbindungstyp PPPoE. Wenn Sie für die Internetverbindung ein DSL-Modem verwenden  verwendet Ihr ISP vermutlich PPPoE, um Sie für diesen Dienst anzumelden. Bei vorhandenem Internet-  Zugang: Wenn Sie zu Hause oder in Ihrem Büro eine Internetverbindung ohne Modem haben, müssen Sie ebenfalls PPPoE verwenden.  Ihr Verbindungstyp ist PPPoE, wenn folgende Voraussetzungen zutreffen:  1) Ihr Provider hat Ihnen einen Benutzernamen und ein Kennwort für die Verbindung zum Internet zugewiesen.  2) Ihr Provider hat Ihnen für die Verbindung zum Internet bestimmte Software wie WinPOET oder Enternet300 bereitgestellt.  3) Sie müssen auf ein anderes Symbol als auf das des Browsers klicken, um eine Internetverbindung herzustellen.  Um den Router auf PPPoE einzurichten, geben Sie in den entsprechenden Feldern Ihren Benutzernamen und Ihr Kennwort ein. Wenn Ihnen kein Dienstname bekannt ist, lassen Sie das Feld "Dienstname" leer.  Klicken Sie nach der Eingabe Ihrer Informationen auf "Änderungen übernehmen". Wenn Sie die Einstellungen übernommen haben,  zeigt die Internet-Statusanzeige die Meldung "Verbunden" an, wenn der Router ordnungsgemäß konfiguriert wurde. Weitere Informationen zur Konfigurierung des Routers für PPPoE finden Sie im Benutzerhandbuch.';
help_ipoa = '<b>Statische IP (IPoA)</b>' + g11;
help_dial_up = '<b>Externe Einwahl</b> Sie benötigen ein Modem, das an die serielle Routerschnittstelle angeschlossen ist. Einwahl-Telefonnummer, Benutzername, Kennwort usw. werden Ihnen vom Provider genannt. Wenn Ihr Modem spezielle Initialisierungsfolgen benötigt, müssen diese vom Hersteller des Modems angegeben werden. Falls Ihnen der Provider eine bestimmte IP-Adresse zugewiesen hat, müssen Sie sie in die IP-Adressfelder unten auf dem Bildschirm eingeben.';

wb1='WAN > Verbindungstyp > Dynamische/Statische IP (1483 Bridged)';
wb101='WAN > Verbindungstyp > Statische IP (IPoA)';
wb102='WAN > Verbindungstyp > Nur Modem (Gemeinsame Internetnutzung wird deaktiviert)';
wb3='IP vom ISP zugeteilt';
wb7='VPI / VCI';
wb9='Automatische Erkennung';
wb11='Nein';
wb12='LLC';
wb13='VC MUX';
wpevpi1='Bitte VPI eingeben';
var msg_vpi='Die VPI-Zahlen müssen im Bereich von 0 bis 255 liegen.';
wpevci1='Bitte VCI eingeben';
var msg_vci='Die VCI-Zahlen müssen im Bereich von 1 bis 65535 liegen.';
wc7='Dynamische/Statische IP (1483 Bridged)';
wc9='Statische IP (IPoA)';
wc11='Nur Modem (Gemeinsame Internetnutzung wird deaktiviert)';
wppoa1='WAN > Verbindungstyp > PPPoA';
wppoa2='Geben Sie die Daten für die PPPoA-Einstellungen unten ein und klicken Sie auf "Änderungen übernehmen".';
wpmodem1='Geben Sie die Daten für die Modem-Einstellungen unten ein und klicken Sie auf "Änderungen übernehmen".';
IPoA='IPoA';
PPPoA='PPPoA';
Modem='Nur Modem';
adsl_status='ADSL';
downstream = 'Downstream (zum Gerät)';
upstream = 'Upstream (zum Computer)';
datarate = 'Datenrate (Kbit/s)';
                 
var change_lan_for_ip_conflict="Router WAN-Schnittstelle erhält eine IP-Adresse, die sich im LAN-Subnetz des Routers befindet; WAN-Schnittstelle ist deaktiviert, um sicher zu stellen, dass LAN-Schnittstellen funktionieren. Dies hat zur Folge, dass das Internet nicht genutzt werden kann.  Bitte ändern Sie die Einstellungen Ihrer WAN-Verbindung oder der LAN-Einstellungen, um das Problem zu beheben.";
var wizard_name = "Konfigurationsprogramm des Routers";
stroute_1 = 'LAN > Static Routing';
showstroute='Static Routing';
stroute3 = 'The routing table is full!';
stroute32 = ' Network Address';
stroute33 = ' '+i11;
stroute34 = ' Gateway';
Remove='Remove';



acl_1='Kindersicherung > Zugriffskontrolle';
help_acl='After enabling Access Control, pressing the "Add" button will open up the "Connected Client List" Screen. This screen lists all the clients list with MAC addresses learned from the router. In the "Connected Client List" screen you can also create a Client you want to control by filling in the blanket MAC address column. You choose one of the clients from the "Connected Client List" by pressing the "Add" button. You will return to Access Control Screen. You can press the "Edit" button under the "Member" column to setup the Acceess Control Rule for each client. '
acl_setting='Internet Access <br> Policy';
acl_2 = 'The Acl table is full';
acl_3 = 'After enabling Access Control, pressing the <b>"Add"</b> button will open up the <b>"Connected Client List"</b> Screen.  This screen lists all the clients list with MAC addresses learned from the router. In the <B>"Connected Client List" </B> screen you can also create a Client you want to control by filling in the blanket MAC address column. You choose one of the clients from the "Connected Client List" by pressing the <b>"Add"</b> button.  You will return to Access Control Screen. You can press the <b>"Edit"</b> button under the <b>"Member"</b> column to setup the Acceess Control Rule for each client.';
acl_4='Über die Schaltfläche "Hinzufügen" öffnen Sie das Fenster "Liste eingebundener Clients", in dem alle Clients mit MAC-Adressen vom Router aufgelistet sind. Im Fenster "Liste eingebundener Clients" können Nutzer einen Client erstellen, den Sie bedienen möchten, indem Sie die leere MAC-Adresszeile ausfüllen. Wenn Sie einen Client in der Liste eingebundener Clients ausgewählt haben, klicken Sie in der Aktionsspalte auf "Hinzufügen". Dann gelangen Sie wieder zum Fenster Zugriffskontrolle. In diesem Fenster müssen Sie Daten zu Kontrollregeln für den Client eingeben, den Sie auswählen.';
acl1='Mitglied';
acl2='Gerät';
acl3='MAC-Adresse';
acl4='Status';
acl5='Einschränkung';
acl6='Aktion';
acl7=' ';
acl8='Alle Geräte von Gast-SSID';
acl9='Kontrollregelausnahme für Mitglieder';
acl10='Plan ';
acl11='URL-Liste';
acl12='URL-Schlüsselwortliste ';
acl13='Tage';
acl14='Jeden Tag ';
acl15='Mo';
acl16='Di';
acl17='Mi ';
acl18='Fr ';
acl19='24 Stunden ';
acl20='Von';
acl21='Bis';
acl22='Wollen Sie ein Mitglied löschen';
acl23='Already existed.';
acl24='Gab es bereits in den Mitgliedsländern Liste';
acl25='Bereits Bestandteil der Client-Liste';
acl26='Sie haben keine gültigen Schnittstellen eingegeben';
acl27='Kennwort für Landeseite';
acl28='Landeseite';
acl29='Zugriff verweigert. Geben Sie ein Router-Kennwort ein, um vorübergehenden Zugriff auf eine blockierte Seite oder auf blockierte Dienste zu bekommen.';
member_setting='Mitgliederliste';
acl_member_setting='Exception of Control Rules for Member';
Allow_All='Allow All';
Deny_All='Deny All';
acl30='Sie können den Router so einstellen, dass der Zugriff auf das Internet, E-Mail oder andere Netzwerke auf bestimmte Tage und Zeiten beschränkt bzw. zugelassen wird. Die Beschränkung kann für einen einzelnen oder mehrere Computer festgelegt werden.';

Index='Index';
Services='Dienst';
Port_Rang_List='Portbereichsliste'; 
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
PortService_User_Defined='Benutzerdefiniert';
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
Block_All_Services='Alle Dienste blockieren';
Allowed_Services='Allowed Services';
Allow_All_Services='Allow All Services';
Blocking_Url='Website Blocking by URL Address ';
Allowing_Url='Website Allowing by URL Address ';
Block_All_URLs='Alle URLs blockieren';
Allow_All_URLs='Alle URLs zulassen ';
URL_Address='URL-Adresse';

Keyword='Schlüsselwort';
Blocking_Keyword='Website Blocking by keyword';
Allowing_Keyword='Website Allowing by keyword';



Connected_Client_List='Liste eingebundener Clients';
var save_reboot_time=30;
var restore_reboot_time=30;
var upgrade_reboot_time=70;
var normal_reboot_time=60;
rdt_msg1='Diese Funktion ist nicht implementiert. ';
rdt_msg2='Umleitung zur Homepage...';
var disconnect_msg = 'Oops! Your connection to the router has failed.  Please reconnect to the router, click OK and retry.';
show49='Gastzugriff';
wguest1='Funknetz > Gastzugriff';
wguest4='Gastzugriff ermöglicht den Zugriff auf das Internet über den WAN-Port, ist aber für den Zugriff auf das interne Netzwerk, LAN und WLAN beschränkt. Die Funktion wird nur auf 2,4 GHz unterstützt, um die Verwendung zu vereinfachen.';
wguest5='Typ';
wguest6='Cafe-Stil (Anmelden über eine Webseite)';
wguest7='WPA/WPA2 PSK';
wguest8='WEP';
wguest9='Öffnen';
wguest10='Netzwerkname (SSID)';
wguest11='maximal 32 Zeichen, kein Leerzeichen';
wguest12='Kennwort (PSK)';
wguest13='8 bis 63 Zeichen';
wguest14='Gastzugriffseinstellungen für den Drucker';
wguest15='10 Hexadezimalzahlen';
wlguest3='Unzulässige Kennwortlänge. Das Kennwort muss aus mindestens 8 und höchstens 63 Zeichen bestehen.';
wlguest4='Ein WEP-Schlüssel muss aus 10 Hexadezimalzahlen bestehen!';
wlguest5='Jeder Gast, der auf Ihr kabelloses Netzwerk zugreift, braucht dieses Kennwort.';
wlguest6='Sicherheitstyp';
wlguest7='Zur Verbindung mit dem kabellosen Netzwerk:';
wlguest8='Windows';
wlguest9='Klicken Sie mit der rechten Maustaste auf das Symbol für das kabellose Netzwerk im System-Tray und wählen Sie aus dem Menü den Eintrag "Verfügbare Netzwerke anzeigen" aus.';
wlguest10='Klicken Sie doppelt auf';
wlguest11='In einem neuen Fenster werden Sie aufgefordert, den Netzwerkschlüssel einzugeben. Geben Sie das Kennwort ein und klicken Sie auf OK.';
wlguest12='MAC OS X';
wlguest13='Klicken Sie n der Menüleiste auf das Symbol für das kabellose Netzwerk (oben rechts) und wählen Sie das';
wlguest14='In einem neuen Fenster werden Sie aufgefordert, den Netzwerkschlüssel einzugeben. Geben Sie das Kennwort ein und klicken Sie auf OK.';
wlguest15='Der Gastzugriff ist eine Funktion, die es Nutzern ermöglicht, auf das Internet zuzugreifen, aber nur eingeschränkt auf das Netzwerk. Bitte fragen Sie den Netzwerk-Administrator nach dem Kennwort für den Gastzugriff und geben Sie es unten ein.';
wlguest16='Erfolgreich abgeschlossen! Sie können nun einen Internetbrowser öffnen und im Internet surfen.';
wlguest17='Kennwort/PSK';
wipv61='IPv6 > Verbindungseinstellungen';
wipv62='IPv6 Pass-Through >';
wipv63='Mit Ihrem Router verbundene Geräte können über systemeigene IPv6-Pakete miteinander kommunizieren. IPv6-Pakete im LAN werden automatisch an alle LAN-Schnittstellen gesendet (Ethernet-Schnittstellen sowie das 2,4-GHz- und das 5-GHz-WLAN). ';
wipv64='Wenn Pass-Through aktiviert ist, werden die IPv6-Pakete auch an die WAN-Schnittstelle kopiert. (Dadurch wird eine direkte, ungesicherte Verbindung zum Internet hergestellt.)';
wipv65='Bitte wenden Sie sich an Ihren Internetanbieter, um Informationen über dessen IPv6-Unterstützung zu erhalten.';
wipv66='IPv6';
wipv67='Internet IPv6';
wipv68='Ihr Netzwerk ist jetzt IPv6-kompatibel.';
wipv69='Pass-Through';

show50='Website-Filter';
web_filter1='Kindersicherung > Website-Filter';
web_filter2='Bietet Ihnen eine erste Schutzstufe vor unsicheren und unangemessenen Websites auf jedem Gerät Ihres Heim-Netzwerks.';
web_filter3='Filteroptionen';
web_filter4='Diese Sicherheitsfilter helfen Familien zu entscheiden, auf welche Websites zugegriffen werden kann.';
web_filter5='Bösartige, jugendgefährdende und andere familienunfreundliche Websites blockieren ';
web_filter6='Bösartige und jugendgefährdende Websites blockieren';
web_filter7='Bösartige Sites blockieren';
web_filter8='Keine Filter';
web_filter9='Blockiert Malware, Phishing und Betrüger-Websites sowie Websites mit sexuellem Inhalt, potentiell anstößigen Inhalten und Websites zu Themen wie Abtreibung, Alkohol, Tabak, Verbrechen, Kult, Drogen, Glücksspiel, Hass, Selbstmord oder Gewalt.';
web_filter10='Blockiert Malware, Phishing, Betrüger-Websites und Websites mit sexuellem Inhalt';
web_filter11='Blockiert Malware, Phishing und Betrüger-Websites';
web_filter12='Verwenden Sie den DNS-Anbieter Ihrer Wahl';
web_filter13='Um Ihre DNS-Adresse zu ändern, gehen Sie bitte zu Internet WAN > %s DNS %s';
web_filter14="Dank der Web-Filter brauchen Sie sich keine Sorgen mehr um die Sicherheit Ihrer Kinder zu machen, wenn sie im Internet surfen. Sie können aus drei benutzerfreundlichen Filtern auswählen und so das Sicherheitsniveau Ihres Netzwerks festlegen.";

show51='Intellistream';
show53='Medienfunktionen';
mf1='Auf diesen Seiten können Sie das Verhalten Ihres Routers anpassen, wenn bestimmte Datenverkehrstypen genutzt werden. ';
mf2='Optimieren Sie Ihre Internetverbindung für verschiedene Datenverkehrstypen.';
mf3='Sehen Sie, wie Ihr Router benutzt wird.';
mf4='Medienfunktionen > Intellistream';
mf5='Intellistream gibt Diensten mit hoher Bandbreite und geringer Wartezeit (z. B. Sprachfunktionen, Video und Gaming) Priorität, um das beste Online-Erlebnis zu erzielen.';
mf6='Die Internet-Verbindung wird während des Tests vorübergehend unterbrochen.';
mf7='Geschwindigkeitstest:';
mf8='Aufgezeichnet am %s';
mf9='Ping';
mf10='Download';
mf11='Upload';
mf12='Geschwindigkeit';
mf13='Ms';
mf14='Mbps';
mf15='Einstellungen übernehmen';
mf16='Während des Tests ist ein Fehler aufgetreten.';
mf17='Manuell eingestellt';
mf18='Zwischen den Zahlen {0.1-%s} eingeben.';
mf19='Zur Aktivierung von Intellistream:';
mf20='Nur zwischen {0.1-%s}.';
mf22='Abgeschlossen.';
mf23='Aufgrund Ihrer hohen Upload-Geschwindigkeit priorisiert Intellistream nur Ihre Download-Geschwindigkeit.';
mf24='Aufgrund Ihrer hohen Download-Geschwindigkeit priorisiert Intellistream nur Ihre Upload-Geschwindigkeit.';
mf25="Aufgrund Ihrer hohen Internet-Verbindungsgeschwindigkeit braucht Intellistream nicht aktiviert zu werden.";
mf26='Manuell aufgezeichnet am %s';
mf27='Wird ausgeführt ...';
mf28='Einen Geschwindigkeitstest ausführen';
mf29='Um Ihnen optimal zu helfen, muss Intellistream Ihre Verbindungsgeschwindigkeit kennen.';
mf30='Intellistream ist aktiviert.';
mf31='Manuell eingeben';
mf32='oder';
mf33='Intellistream ist gerade deaktiviert.';
mf43='Internet connectivity is momentarily suspended during the test.';
mf44='Abhängig vom Internetverkehr und anderen Umständen sind die Ergebnisse des automatischen Geschwindigkeitstests möglicherweise nicht 100 % akkurat. Um die Ergebnisse zu vergleichen, besuchen Sie eine Website für Geschwindigkeitstests oder nehmen Sie Kontakt mit Ihrem Internetanbieter auf, um Ihre Internetgeschwindigkeit zu überprüfen. Wenn die Ergebnisse nicht übereinstimmen, können Sie die Werte manuell eingeben.';

show52='Datenverkehrsdiagramm';
qos_stats1='Medienfunktionen > Datenverkehrsdiagramm';
qos_stats2='Die Diagramme unten zeigen sowohl eingehenden als auch ausgehenden WAN-Datenverkehr an, der in verschiedenen Kategorien priorisiert wird. Die Diagramme zeigen die letzten 10 Minuten an (alle 5 Sekunden findet eine automatische Aktualisierung statt).';
qos_stats3='Datenverkehrslegende'; 
qos_stats4='Bytes/Sek';
qos_stats5='Tageszeit/Stunden: Minuten';
qos_stats6='Eingehender Datenverkehr';
qos_stats7='Ausgehender Datenverkehr';
qos_stats8='Netzwerkkonnektivität- & Kontrolle';
qos_stats9='Sprache, Videodiagramm & Gaming';
qos_stats10='Web & Webvideo';
qos_stats11='E-Mail & VPN';
qos_stats12='Downloads, Torrents & sonstiges';
qos_stats13='Aktivieren Sie Intellistream, um diese Funktion zu aktivieren ';
qos_stats14='hier';
qos_stats15='.';

new1='Verbessern Sie Ihre Internet-Verbindung.';
new2='Kindersicherung';
new3='Webfilter für sicheres Browsen.';
new4='IPv6-Verbindung';
new5='Ihr Netzwerk ist jetzt IPv6-kompatibel.';
new6='NEU';
new7='Geben Sie Medien für verschiedene Geräte im Netzwerk frei.';
new8='NEU';

media_feature1='Medienfunktionen';
media_feature2='The bandwidth gap between LAN and WAN may significantly degrade performance of critical network applications, such as VoIP, gaming, and VPN. This QoS function allows users to classify traffic of applications and provides them with differentiated services (Diffserv).';
media_dlna1='Media Server';
media_dlna2='Media Features > Media Server';
media_dlna3='Genießen Sie persönliche Musik, Fotos und Videos bequem über ein beliebiges DLNA-Gerät, das in Ihr Netzwerk eingebunden ist. Betrieben über Twonky.';
media_dlna4='DLNA-Server';
media_dlna5='Servername';
media_dlna6='Freigegebene Laufwerke:';
media_dlna7='Betriebsbereit';
media_dlna8='Indexierung';
media_dlna9='Übermittlung';
media_dlna10='Videos';
media_dlna11='Musiktitel';
media_dlna12='Bilder';
media_dlna13='Eject';
media_dlna14='Aktualisieren';
media_dlna15='Einstellungen übernehmen';
media_dlna16='Twonky ist eine Produktlinie digitaler Software-Produkte für Privathaushalte, die von der Firma PacketVideo Corporation (PV) entwickelt worden ist.';
media_dlna17='created by PacketVideo Corporation (PV).';
media_dlna18='Untitled';
media_dlna19='Es sind keine USB-Laufwerke an den Router angeschlossen.';
media_dlna20='Im Netzwerk nicht freigegeben.';
media_dlna21='Sie haben mehr Medien als Ihr Router indexieren kann; deshalb übermitteln wir die ersten 12000 Elemente.';
media_dlna22='Schreibgeschütztes Laufwerk kann nicht indexiert werden.';

// Note this dictionary is a temporary demonstration
var langDictionary = {

// Copy belkin transation table to here	
'p100t011' : 'Dashboard gehen.',
'p220t001' : 'Sie haben eine PPTP DSL-Verbindung.',
'p220t011' : 'PPTP',
'p220t012' : 'Das Point-to-Point-Tunneling-Protokoll (PPTP) erstellt eine private und verschlüsselte Verbindung zwischen Ihnen und Ihrem Internetprovider.',
'p222t001' : 'Etwas stimmt mit Ihren PPTP-Einstellungen nicht.',
'p300t001' : 'Auf Firmware-Updates wird geprüft.',
'p300t002' : 'Wir prüfen, ob für Ihren neuen Router aktualisierte Firmware verfügbar ist.',
'p300t003' : 'Warum benötige ich die neueste Firmware?',
'p300t004' : 'Firmware ist die Software, die Ihr Router für die Implementierung von Netzwerk- und Sicherheitsprotokollen verwendet. Updates verbessern die Zuverlässigkeit und Funktionalität Ihres Routers, deshalb sollten Sie immer die Neusten haben.',
'gtUpdateNoPower' : 'Wir aktualisieren Ihre Router mit der neuen Firmware. Bitte schalten Sie ihn währenddessen nicht aus.',
'p320t003' : 'Dies dauert ungefähr drei Minuten. Update-Fortschritt:',
'gtFirmwareRestart' : 'Jetzt, nach Installation der Firmware, müssen wir Ihren Router neu starten, damit sie wirksam wird.',
'p342t003' : 'aus der Liste der WLANs, um dabei zu helfen.',
'errorSSIDEmpty' : 'Bitte geben Sie einen Namen für Ihr WLAN ein.',
'errorSSIDTooLong' : 'Ihr Netzwerkname darf höchstens 32 Zeichen haben.',
'errorSSIDInvalidChars' : 'Ihr Netzwerkname darf nur Buchstaben, Zahlen, Interpunktion und Leerzeichen enthalten.',
'errorWEPPasswordInvalidChars' : 'Ihr Netzwerkkennwort darf nur Zahlen und die Buchstaben A bis F enthalten.',
'errorWEPPasswordInvalidLength' : 'Ihr Netzwerkkennwort muss zwischen 10 und 26 Zeichen lang sein.',
'errorWEPPasswordEmpty' : 'Bitte geben Sie ein Kennwort für Ihr WLAN ein.',
'errorWPAPasswordInvalidChars' : 'Ihr Netzwerkkennwort darf nur Buchstaben, Zahlen, Interpunktion und Leerzeichen enthalten.',
'errorWPAPasswordInvalidLength' : 'Ihr Netzwerkkennwort muss zwischen 8 und 63 Zeichen lang sein.',
'errorWPAPasswordEmpty' : 'Bitte geben Sie ein Kennwort für Ihr WLAN ein.',
'errorGenericCommitError' : 'Es ist ein Fehler aufgetreten.  Bitte korrigieren Sie die nachstehenden Einstellungen und versuchen Sie es erneut.',
'p400t006' : 'Kennwort:',
'p450t006' : 'Kennwort: ',
'p451t006' : 'Kennwort: ',
'p500t007' : 'Registrierung durchführen',
'p500t008' : 'Später registrieren',
'p700t011' : 'PPTP DSL connection',
'errIpAddressEmpty' : 'Die IP-Adresse kann nicht leer sein.',
'errSubnetMaskEmpty' : 'Die Subnetzmaske kann nicht leer sein.',
'errSubnetMaskInvalid' : 'Die Subnetzmaske sieht nicht wie eine Subnetzmaske aus. Bitte überprüfen Sie den Wert.',
'errDefaultGatewayEmpty' : 'Die Standardgatewayadresse kann nicht leer sein.',
'errDNSServerEmpty' : 'Die DNS-Serveradresse kann nicht leer sein.',
'1781' : 'Vuze Offline Herunterladen',
'1782' : 'L�schen aller Offline-Downloads l�scht alle Elemente in der Warteschlange, einschlie�lich der teilweisen und vollst�ndigen Dateien.',
'1783' : 'Clear All Offline-Downloads',
'7102' : 'Belkin Intellistream gibt Diensten mit hoher Bandbreite und geringer Wartezeit (z.B. Sprachfunktionen, Video und Gaming) Priorität, um das beste Online-Erlebnis zu erzielen.',
'7103' : 'Um Ihnen optimal zu helfen, muss Intellistream Ihre Verbindungsgeschwindigkeit kennen.',
'7104' : 'Die Internet-Verbindung wird während des Tests vorübergehend unterbrochen.',
'7105' : 'Die Internet-Verbindung wird während des Tests vorübergehend unterbrochen.',
'7106' : 'Einen Geschwindigkeitstest ausführen',
'7107' : 'Geschwindigkeitstest',
'7108' : 'Manuell eingeben',
'7109' : 'Ping',
'7110' : 'Download-<br>Geschwindigkeit',
'7111' : 'Upload-<br>Geschwindigkeit',
'7112' : 'Wird ausgeführt ...',
'7113' : 'Abgeschlossen.',
'7114' : 'Während des Tests ist ein Fehler aufgetreten.',
'7115' : 'Geben Sie eine Zahl zwischen 0,1 und 100 ein.',
'7116' : 'Geben Sie eine Zahl zwischen 0,1 und 1000 ein.',
'7117' : 'Nur zwischen 0,1 und 100.',
'7118' : 'Aufgrund Ihrer hohen Upload-Geschwindigkeit priorisiert Intellistream nur Ihre Download-Geschwindigkeit.',
'7119' : 'Aufgrund Ihrer hohen Download-Geschwindigkeit priorisiert Intellistream nur Ihre Upload-Geschwindigkeit.',
'7120' : 'Aufgrund Ihrer hohen Internet-Verbindungsgeschwindigkeit braucht Intellistream nicht aktiviert zu werden.',
'7121' : 'Aufgezeichnet am',
'7122' : 'Manuell aufgezeichnet am',
'7123' : 'Zur Aktivierung von Intellistream:',
'7124' : 'Intellistream ist aktiviert.',
'7125' : 'Intellistream   ist gerade deaktiviert.',
'7126' : 'Manuelles Einstellen',
'gtBBSTitle' : 'Willkommen beim Belkin Router-Setup',
'gtBack' : 'Zurück zum Dashboard',
'Support4t036' : 'Lesen Sie alles darüber.',
'Support4t037' : 'Rufen Sie die folgende URL auf einem Gerät auf, das mit dem Internet verbunden ist, und erfahren Sie, wie Sie das Problem selbst beheben können: <STRONG>www.belkin.com/support/asdlkj</STRONG>',
'gtReadHelp' : 'Gehen Sie zu <STRONG>http://belk.in/NLk29H</STRONG> auf einem Gerät, das mit dem Internet verbunden ist.',
'Support5t014' : 'Lesen Sie alles darüber.',
'p1200t001' : 'Ein wenig mehr Sicherheit.',
'p1200t002' : 'Sie können Ihren Router schützen, indem Sie ein Kennwort für Ihr Dashboard nutzen.',
'errsetempt' : 'Bitte geben Sie ein Kennwort ein.',
'errorpwdEmpty' : 'Bitte geben Sie das Kennwort ein.',
'errorpwdError' : 'Ihr Kennwort ist nicht richtig.',
'60' : 'Administrator duplizieren',
'61' : 'Dieses Gerät wird derzeit verwaltet von',
'62' : 'zurzeit!!',
'gtDisconnected' : 'Getrennt',
'dft005' : 'Belkin Hilfecenter',
'dhToggleBand' : '5,0 GHz anzeigen',
'419' : 'Sekunden verbleiben.',
'422' : 'Einstellungen wiederhergestellt',
'423' : 'Die wiederhergestellte Datei ist nicht der richtige Typ für dieses Gerät. Wiederherstellen fehlgeschlagen. Bitte versuchen Sie es mit der korrekten Datei erneut',
'533' : 'Wenn Ihr Router nicht mehr richtig funktioniert, kann es erforderlich sein, den Router neu zu starten oder erneut zu booten. Der Router-Neustart löscht Ihre  Einstellungen nicht.',
'1200' : 'Änderungen werden übernommen. Bitte warten.......',
'1386' : 'Die Upgrade-Datei hat nicht den richtigen Typ oder die richtige Version für dieses Gerät. Das Upgrade ist fehlgeschlagen. Bitte versuchen Sie es mit der korrekten Datei erneut',
'2053' : 'Änderungen vorgenommen',
'2054' : 'Firmware aktualisiert',
'766' : 'Sie haben keine gültigen Zahlen für die Subnetzmaske eingegeben.',
'1356' : 'Ungültige Gateway-IP; die erste Zahl muss zwischen 1 und 223 liegen.',
'1357' : 'Ungültige Gateway-IP; die zweite und die dritte Zahl müssen zwischen 0 und 255 liegen.',
'1358' : 'Ungültige Gateway-IP; die letzte Zahl muss zwischen 1 und 254 liegen.',
'1360' : 'Ungültige IP-Adresse; die erste Zahl muss zwischen 1 und 223 liegen.',
'1354' : 'Ungültige IP-Adresse; die zweite und die dritte Zahl müssen zwischen 0 und 255 liegen.',
'675' : 'Ungültige IP-Adresse; die letzte Zahl muss zwischen 1 und 254 liegen.',
'403' : 'Die eingegebene IP ist ungültig.',
'760' : 'IP-Adresse',
'1760' : 'Alle verweigern',
'395' : 'Entweder haben Sie nicht alle Zahlen eingegeben, oder einige der eingegebenen Zahlen sind ungültig. Die Zahl im Eingabefeld muss zwischen 0 und 255 liegen.',
'1395' : 'Nicht konfiguriert',
'1281' : 'Die WAN-IP kann das LAN-seitige Teilnetz nicht abdecken.',
'641' : 'Entweder haben Sie nicht alle IP-Nummern eingegeben, oder einige der eingegebenen Nummern sind ungültig. Die Nummern sollten zwischen 0 und 255 liegen',
'errUsernameTooLong' : 'Ihr Benutzername darf höchstens 64 Zeichen lang sein.',
'errUsernameInvalid' : 'Ihr Benutzername darf nur Buchstaben, Zahlen, Interpunktion und Leerzeichen enthalten.',
'errPasswordEmpty' : 'Bitte geben Sie das Kennwort ein.',
'errPasswordTooLong' : 'Ihr Kennwort darf höchstens 64 Zeichen lang sein.',
'errPasswordInvalid' : 'Ihr Benutzername darf nur Buchstaben, Zahlen, Interpunktion und Leerzeichen enthalten.',
'1398' : 'OK',
'1399' : 'Abbrechen',
'374' : 'An',
'375' : 'Aus',
'47' : 'Weitere Infos',
'48' : 'Änderungen löschen',
'49' : 'Speichern',
'96' : 'Aktivieren',
'119' : 'Deaktivieren',
'1298' : 'Schließen',
'113' : '<< Hinzufügen',
'114' : 'Löschen',
'128' : 'Aktualisieren',
'318' : 'Deaktiviert',
'317' : 'Aktiviert',
'2006' : 'Ja',
'2007' : 'Nein',
'3300' : 'NEU',
'50' : 'Dynamisches DNS aktualisieren',
'98' : 'Mit dem Dynamic Domain Name System (DDNS) können Sie über ein Konto, das bei einem DDNS-Anbieter eingerichtet ist, auf Ihr Heimnetzwerk zugreifen. Richten Sie Ihr Konto über Dyn.com (<a href=\'http://www.dyn.com\' target=\'_blank\'>www.dyn.com</a>) ein und schalten Sie die DDNS-Funktion an Ihrem Router ein Sie müssen ein Konto erstellen, bevor Sie diesen Service nutzen können.',
'100' : 'Benutzername',
'101' : 'Kennwort',
'102' : 'Domänenname',
'742' : 'Bitte geben Sie Ihren Benutzernamen ein.',
'757' : 'Bitte geben Sie das Kennwort ein.',
'822' : 'ist ungültig, bitte zuerst korrigieren!',
'1307' : 'DynDNS',
'1308' : 'DDNS-Dienst',
'1309' : 'DDNS-Status',
'1310' : 'Website',
'1315' : 'AutoUpdate DDNS',
'1316' : 'Upgrade alle',
'1317' : 'Tage',
'1369' : 'Registriert',
'1380' : 'Falsche Konfiguration',
'1381' : 'Verbindung',
'1382' : 'Verbindung fehlgeschlagen',
'1383' : 'Anmeldung fehlgeschlagen',
'1384' : 'Registrierung fehlgeschlagen',
'1385' : 'Nicht registriert',
'1751' : 'Servieren Sie Mediendateien mit kompatiblen vernetzten Medien-Player',
'702' : 'Der Domain Name Service (DNS) übersetzt Domänennamen in IP-Adresse, um Computerdienste und Geräte weltweit zu finden. Wenn Ihr Internetprovider (ISP) Ihnen eine DNS-Adresse gegeben hat, tragen Sie sie hier ein.',
'703' : 'Automatisch vom ISP',
'704' : 'DNS-Adresse',
'705' : 'Sekundäre DNS-Adresse',
'706' : 'DNS = DNS-Server (Domain Name Server). Server im Internet, der URLs (Universal Resource Locator) wie www.belkin.com in IP-Adressen auflöst.',
'707' : 'Wenn Sie die automatische DNS-Funktion nicht nutzen möchten, müssen Sie die DNS-Einstellungen eingeben, die Ihnen Ihr ISP zugewiesen hat.',
'780' : 'IP-Adresse angeben',
'823' : 'Gehen Sie zu {Website Filter}, um Änderungen am DNS vorzunehmen, und wählen Sie „Keine Filter“ aus.',
'55' : 'Firmware-Info.',
'56' : 'Für diesen Router steht keine Firmware-Aktualisierung zur Verfügung.',
'57' : 'Kann keine Verbindung zum Firmware-Server herstellen; bitte überprüfen Sie die WAN-Verbindung.',
'58' : 'Aktuelle Firmware:',
'59' : 'Firmware herunterladen:',
'64' : 'Sie können den Router so einstellen, dass der Zugriff auf das Internet, E-Mail- oder andere Netzwerkdienste auf bestimmte Tage und Uhrzeiten beschränkt wird.',
'65' : 'IP',
'66' : 'Port',
'67' : 'Typ',
'68' : 'Blockierzeit',
'69' : 'Tag',
'70' : 'Zeit',
'71' : 'Aktivieren',
'72' : 'Beides',
'73' : 'Immer',
'74' : 'Blockieren',
'75' : 'SO',
'76' : 'MO',
'77' : 'DI',
'78' : 'MI',
'79' : 'DO',
'80' : 'FR',
'81' : 'SA',
'82' : ':00 P.M.',
'83' : ':00 A.M.',
'84' : 'Entweder haben Sie die Client-IP-Adresse nicht eingegeben, oder bestimmte Zahlen in der IP-Adresse sind ungültig. Die Zahl im IP-Eingabefeld muss zwischen 1 und 254 liegen.',
'85' : 'Sie haben keine gültigen Portnummern eingegeben.',
'86' : 'Die zweite Zahl des Portbereichs muss größer sein als die erste.',
'87' : 'Die zweite Zahl des IP-Bereichs muss größer sein als die erste.',
'88' : 'Die Zahl im Eingabefeld für den Port muss zwischen 1 und 65535 liegen.',
'1311' : 'Es wurde keine Anwendung ausgewählt',
'1312' : 'Doppeleinträge gefunden. Die Regel ist bereits vorhanden.',
'1355' : 'Die LAN-IP des Routers soll vom IP-Bereich ausgeschlossen werden.',
'90' : 'Dadurch können Sie angeben, dass ein Gerät in Ihrem Netzwerk außerhalb der Firewall Ihres Routers platziert wird, während andere Geräte hinter der Firewall bleiben.',
'91' : 'Der DMZ-Computer ist NICHT vor Hacker-Angriffen geschützt.',
'92' : 'Um einen Computer in den DMZ-Status zu versetzen, geben Sie die letzten Ziffern seiner IP-Adresse in das Eingabefeld unten ein, und wählen Sie „Aktivieren“. Klicken Sie auf „Speichern“, damit die Änderungen wirksam werden.',
'93' : 'IP-Adresse des virtuellen DMZ-Host',
'97' : 'Statische IP-Adresse',
'95' : 'Private IP',
'103' : 'Bitte geben Sie die IP-Adresse ein, bevor Sie die DMZ aktivieren',
'1232' : 'IP-Adresse des DMZ Hosts ist ungültig.',
'1253' : 'IP-Nummer liegt außerhalb des zulässigen Bereichs [1-254]!',
'105' : 'Mit dieser Funktion richten Sie eine Liste zulässiger Clients ein. Wenn Sie diese Funktion aktivieren, müssen Sie die MAC-Adressen aller Clients in Ihrem Netzwerk eintragen, damit sie auf das Netzwerk zugreifen können.',
'106' : 'MAC-Adressfilter aktivieren',
'107' : 'MAC-Adressfilterliste',
'108' : 'Blockieren',
'110' : 'MAC-Adresse',
'112' : 'Diese MAC-Adresse wurde bereits hinzugefügt!',
'669' : 'Ungültige MAC-Adresse; dies ist eine Nulladresse.',
'902' : 'Ungültige MAC-Adresse',
'903' : 'Bitte zuerst korrigieren.',
'904' : 'Die korrekte MAC-Adresse muss folgendermaßen aussehen: xx:xx:xx:xx:xx:xx (wobei x eine Zahl zwischen 0-9 oder ein Buchstabe zwischen a-f ist).',
'1062' : 'Hinweis: Die MAC-Adresse des Computers, mit dem Sie auf die Verwaltungsfunktionen des Routers zugreifen, kann nicht gelöscht werden. (Dies ist der Computer, der gerade verwendet wird).',
'1602' : 'Benutzerdefiniert 1',
'117' : 'Ihr Router ist mit einer Firewall ausgestattet, die Ihr Netzwerk vor einer Reihe häufig vorkommender Hacker-Attacken schützt, darunter PoD (Ping of Death) und DoS-Angriffe (Denial of Service). Sie können die Firewall bei Bedarf abschalten. Dadurch ist Ihr Netzwerk Angriffen nicht völlig schutzlos ausgeliefert; die Gefahr unbefugter Eingriffe wächst jedoch. Daher sollten Sie die Firewall weitmöglichst aktiviert lassen.',
'118' : 'Firewall aktivieren/deaktivieren',
'121' : '<b>ERWEITERTE FUNKTION! </b> Sie können den Router so einstellen, dass er auf ICMP-Pings (Pings an der WAN-Schnittstelle) nicht reagiert. Dadurch erhöht sich Ihre Sicherheit.',
'1076' : 'ICMP-Ping blockieren',
'1827' : 'Gastzugriffseinstellungen für den Drucker',
'2702' : 'Gastzugriff ermöglicht den Zugriff auf das Internet über den WAN-Port, ist aber für den Zugriff auf das interne Netzwerk, LAN und WLAN beschränkt. Die Funktion wird nur bei 2,4 GHz unterstützt, um die Verwendung zu vereinfachen.',
'279' : 'Eingehender Port',
'1828' : 'Café-Stil (Anmelden über eine Webseite)',
'1619' : 'WPA/WPA2-PSK',
'1829' : 'WEP',
'1830' : 'Offen',
'1831' : 'maximal 32 Zeichen, kein Leerzeichen',
'1617' : 'Kennwort (PSK)',
'842' : 'Authentifizierung',
'845' : 'Verschlüsselungstechnik',
'854' : 'Pre-shared Key (PSK)',
'857' : 'Verdeckter PSK',
'855' : 'WPA-PSK (kein Server)',
'1335' : 'Netzwerkname (SSID)',
'1825' : '8 bis 63 Zeichen',
'1826' : '10 Hexadezimalzahlen',
'1834' : 'Netzwerkname',
'409' : 'Kennwort',
'1835' : 'Jeder Gast, der auf Ihr WLAN zugreift, braucht dieses Kennwort.',
'1715' : 'Sicherheitstyp',
'1836' : 'Zur Verbindung mit dem WLAN:',
'1837' : 'Windows',
'1838' : '1. Klicken Sie mit der rechten Maustaste auf das Symbol für das WLAN im System-Tray und wählen Sie aus dem Menü den Eintrag „Verfügbare Netzwerke anzeigen“ aus.',
'1839' : '2. Klicken Sie doppelt auf ',
'1840' : ' Netzwerk.',
'1841' : '3. In einem neuen Fenster werden Sie aufgefordert, den Netzwerkschlüssel einzugeben. Geben Sie das Kennwort ein und klicken Sie auf OK.',
'1842' : 'MAC OS X',
'1843' : '1. Klicken Sie in der Menüleiste auf das Symbol für das WLAN (oben rechts) und wählen Sie das ',
'1844' : ' Netzwerk.',
'1845' : '2. In einem neuen Fenster werden Sie aufgefordert, den Netzwerkschlüssel einzugeben. Geben Sie das Kennwort ein und klicken Sie auf OK.',
'1832' : 'Cafe-Stil',
'1833' : 'Offener Modus',
'1201' : 'SSID kann nicht als NULL gesendet werden',
'1812' : 'Unzulässige Kennwortlänge. Das Kennwort muss aus mindestens 8 und höchstens 63 Zeichen bestehen.',
'1824' : 'Ein WEP-Schlüssel muss aus 10 Hexadezimalzahlen bestehen!',
'414' : 'Anmeldefehler!',
'1811' : 'Der Gastzugriff ist eine Funktion, die es Nutzern ermöglicht, auf das Internet zuzugreifen, aber nur eingeschränkt auf das Netzwerk. Bitte fragen Sie den Netzwerk-Administrator nach dem Kennwort für den Gastzugriff und geben Sie es unten ein.',
'1813' : 'Erfolgreich! Sie können nun einen Webbrowser öffnen und im Internet surfen.',
'909' : 'Diese „IP-Adresse“ ist die interne IP-Adresse des Routers. Um die erweiterte Konfigurationsoberfläche zu öffnen, geben Sie diese IP-Adresse in die Adresszeile Ihres Browsers ein. Bei Bedarf können Sie die Adresse ändern. Geben Sie hierzu die neue IP-Adresse ein, und klicken Sie auf „Speichern“. Achten Sie darauf, dass Sie eine nicht routbare IP-Adresse wählen. Beispiele für nicht routbare IP-Adressen sind: 192.168.2.1, 10.0.0.1, 172.16.0.1',
'917' : 'Die Subnetzmaske muss nicht verändert werden. Bei Bedarf ist eine Änderung der Subnetzmaske möglich. Sie sollten Sie jedoch nur dann verändern, wenn es hierfür einen bestimmten Grund gibt.',
'929' : 'Die DHCP-Serverfunktion erleichtert die Einrichtung eines Netzwerks, da jedem Computer eine IP-Adresse zugewiesen wird. Der DHCP-Server kann bei Bedarf deaktiviert werden. In diesem Fall müssen Sie auf jedem Computer im Netzwerk eine statische IP-Adresse manuell einstellen. Der IP-Pool ist die Reihe der IP-Adressen, die für eine dynamische Zuweisung an die Computer im Netzwerk reserviert sind. Die Vorgabe ist 2-200 (199 Computer). Wenn Sie diese Zahl ändern möchten, geben Sie eine neue Start- und eine neue End-IP-Adresse ein und klicken auf „Speichern“.',
'935' : 'Sie können einen lokalen Domänennamen (Netzwerknamen) für Ihr Netzwerk festlegen. Diese Einstellung muss normalerweise nicht geändert werden, soweit Ihrerseits kein bestimmter Grund vorliegt. Sie können den Netzwerknamen frei wählen.',
'962' : 'Um den Router auf PPPoE einzurichten, geben Sie in den entsprechenden Feldern den Benutzernamen und das Kennwort von Ihrem ISP ein. Wenn Sie keinen Dienstnamen haben oder diesen nicht kennen, lassen Sie das Feld „Dienstname“ leer. Klicken Sie nach der Eingabe Ihrer Informationen auf „Speichern“. Nach dem Speichern meldet die Statusanzeige „Online“, wenn der Router korrekt konfiguriert wurde.',
'967' : 'Manche ISPs verwenden das PPTP-Protokoll, um Abonnenten mit der Zentralstelle zu verbinden. Hierzu müssen Sie ein paar zusätzliche Einstellungen vornehmen, die Sie vom ISP erhalten haben müssten. Bei erfolgreicher Speicherung der Änderungen müsste die Internetstatusanzeige grün leuchten.',
'971' : 'Wählen Sie den Verbindungstyp „Telstra Bigpond“, indem Sie auf „Speichern“ klicken.',
'982' : 'Trennen nach X...',
'983' : 'Hierdurch wird Ihr Router nach einer Zeit der Inaktivität vom ISP getrennt. Verwenden Sie diese Option, um Geld zu sparen, wenn Sie Ihren Internetdienst pro Minute bezahlen.',
'htDDNS' : 'Was ist DDNS?',
'htDNS' : 'Was ist DNS?',
'htDMZ' : 'Was ist die DMZ?',
'htLAN' : 'Was kontrollieren LAN-Einstellungen?',
'htWANMain' : 'Was sind WAN-Einstellungen?',
'htWANMAC' : 'Was ist die MAC-Adresse?',
'htWAN_PPPOE' : 'PPPoE-Einstellungen',
'htWAN_PPTP' : 'PPTP-Einstellungen',
'htIPv6' : 'Was ist IPv6?',
'htWifiID' : 'Was sind der Netzwerkname und die Kanaleinstellungen?',
'htWifiIDContent' : 'Der Netzwerkname wird eine SSID (Service Set ID) genannt.  Alle Clients in Ihrem Netzwerk müssen die SSID kennen, um dem Netzwerk des Routers beizutreten.',
'htWifiSec' : 'Was ist WLAN-Sicherheit?',
'htWifiSecContent' : 'Alle Belkin Router werden mit aktivierter WLAN-Sicherheit geliefert.  WLAN-Sicherheit bietet eine Schutzebene gegen nicht befugten Zugriff auf Ihr Netzwerk.  Wenn die Sicherheit aktiviert ist, benötigt der Benutzer ein Kennwort, um auf Ihr Netzwerk zuzugreifen.',
'htWifiWPS' : 'Was ist Wi-Fi Protected Setup?',
'htWifiWPSContent' : 'Dies ist eine optionale Methode, die das Setup von WLANs mit aktivierter Sicherheit in Ihrem Zuhause oder kleinen Büro erleichtern soll. Geräte ohne Wi-Fi Protected Setup (WPS) können trotzdem zu Ihrem Netzwerk hinzugefügt werden, indem Sie den Netzwerknamen auswählen und das Netzwerkkennwort eingeben.',
'htWifiGuest' : 'Wie wird der Gastzugriff verwendet?',
'htWifiGuestContent' : 'Wenn er eingeschaltet ist, erstellt der Gastzugriff ein getrenntes WLAN, das immer noch auf das Internet zugreifen kann, jedoch nicht auf andere Geräte in Ihrem Netzwerk.',
'htAP' : 'Kann ich meinen Router als Zugriffspunkt verwenden?',
'htAPContent' : 'Belkin Router können als reiner Zugriffspunkt konfiguriert werden, so dass alle Routing- und Firewallfunktionen umgangen werden.  Die Einrichtung des Routers als Zugriffspunkt wird meistens verwendet, um WLAN-Funktionen zu einem vorhandenen verkabelten Netzwerk hinzuzufügen.',
'htQos' : 'Was ist Belkin Intellistream?',
'htDLNA' : 'Belkin Media Server powered by Twonky',
'htPortForward' : 'Was ist Portweiterleitung?',
'htPortForwardContent' : 'Portweiterleitung ermöglicht es Remote-Computern, sich mit einem spezifischen Programm oder Dienst in Ihrem lokalen Netzwerk zu verbinden. Sie könnten Portweiterleitung zum Beispiel verwenden, um einen Webserver (Port 80) in Ihrem Netzwerk zu betreiben.  Für die meisten modernen Programme muss keine Portweiterleitung verwendet werden. Sie können alle Ports, die sie benötigen, automatisch einrichten.',
'htWanPing' : 'Was tut WAN-Pingblockierung?',
'htWanPingContent' : 'Sie bietet ein erhöhtes Sicherheitsniveau und verhindert, dass externe Internetbenutzer Ihre IP-Adresse herausfinden. Dies wird erreicht, indem Pings von außerhalb Ihres Netzwerks nicht beantwortet werden.',
'htRestart' : 'Warum sollte ich meinen Router neu starten?',
'htRestoreFC' : 'Was geschieht, um meine werkseitigen Standardeinstellungen wiederherzustellen?',
'htSaveSettings' : 'Warum sollte ich meine Einstellungen speichern/sichern?',
'htRestoreSettings' : 'Was bedeutet Wiederherstellung meiner früheren Einstellungen?',
'htSystem' : 'Was sind Systemeinstellungen?',
'htSystemContent' : 'Auf dieser Seite können Sie eine Vielzahl grundlegender Routereinstellungen vornehmen, zum Beispiel Zeitzone und Administratorkennwort.',
'htSelfHeal' : 'Was ist self-healing',
'hLANSettings' : 'Auf dieser Seite können Sie neue Verbindungen einrichten, DHCP ein-/ausschalten und die IP-Adresse des Routers in Ihrem lokalen Netzwerk einstellen.',
'htDHCPClientList' : 'Was ist die DHCP-Client-Liste?',
'htDHCPClientListContent' : 'Auf dieser Seite werden IP-Adresse, Hostname und MAC-Adresse der einzelnen Geräte angegeben, die mit dem Netzwerk verbunden sind. Wenn für einen Computer kein Hostname festgelegt ist, ist das entsprechende Feld leer. Klicken Sie auf „Aktualisieren“, um die Liste zu aktualisieren.',
'hWebsiteFilters' : 'Dies dient als Schutzebene vor unsicheren/unangemessenen Websites. Die Webfilter prüfen Sites durch Überprüfung des Namens der Website gegenüber einer Liste zugelassener Sites.',
'hWANSettings' : 'Diese Netzwerkeinstellungen beziehen sich auf die Verbindung, die Sie zu Ihrem Internetprovider (ISP) haben.   Wählen Sie den von Ihrem ISP angegebenen Verbindungstyp aus der Liste aus. ',
'htChannel' : 'Ähnlich wie ein Radio verschiedene Sender verwendet, kann Ihr Router auf verschiedenen Kanälen übertragen, um mit den Geräten in Ihrem Netzwerk zu kommunizieren. Die Verwendung von „Auto“ ist die beste Wahl.',
'3430' : 'IPv6 (Internet Protocol version 6) ist eine Version des Internetprotokolls (IP), das als Nachfolger von IPv4 gedacht ist und fast den gesamten Internetverkehr leitet. Einige Internetprovider (ISP) haben fast keine IP-Adressen mehr. Mit IPv6 können mehr Geräte im Internet kommunizieren, indem sie größere Nummern zur Erstellung von IP-Adressen verwenden.  Ihr ISP teilt Ihnen mit, wenn Sie IPv6 verwenden müssen.',
'3431' : 'Verbindungstyp',
'3432' : 'Auto-Konfig/DHCPv6 (Standard)',
'3433' : 'Die Adressen unten werden von Ihrem ISP bereit gestellt. DHCPv6 stellt zusätzliche Funktionen bereit, um die Verbindung zu verbessern.',
'3434' : 'WAN',
'3435' : 'WAN-Adresse',
'3436' : 'Gateway',
'3437' : 'LAN',
'3438' : 'In diesem Abschnitt können Sie die Netzwerkeinstellungen Ihres Routers zu konfigurieren. Wenn Sie die LAN-IPv6-Adresse hier verändern, müssen Sie möglicherweise die Netzwerkeinstellungen Ihres Computers anpassen, um erneut auf das Netzwerk zuzugreifen.',
'3439' : 'LAN-Präfix',
'3440' : 'Schnittstellen-ID',
'3441' : 'Link-Local',
'3442' : 'DNS',
'3443' : 'Ihre IPv6-DNS-Standardeinstellungen sind von Ihrem Internetanbieter, wenn sie in WAN-Router-Ankündigungen oder DHCPv6-Meldungen verfügbar sind.',
'3444' : 'Primär',
'3445' : 'Sekundär',
'3446' : 'PPPoE über IPv6',
'3447' : 'Point-to-Point Protocol über Ethernet (PPPoE) wird hauptsächlich von DSL-Diensten verwendet, um ein DSL-Modem mit dem Internet zu verbinden.',
'3448' : 'Anmelden',
'3450' : 'Kennwort verschleiern',
'3451' : 'Benutzername',
'3452' : 'Kennwort',
'3453' : 'Dienstname',
'3454' : '6to4-Tunnel',
'3455' : 'Ermöglicht die Übertragung von IPv6-Paketen über ein IPv4-Netzwerk. Die Konfigurierung bestimmter Tunnel ist hierzu nicht erforderlich. Dies ist der passende Verbindungstyp, wenn Ihr Internetprovider IPv6 nicht unterstützt.',
'3456' : 'Remote 6to4 Relay Router',
'3457' : 'Pass-Through',
'3458' : 'Mit Ihrem Router verbundene Geräte können über systemeigene IPv6-Pakete miteinander kommunizieren. IPv6-Pakete im LAN werden automatisch an alle LAN-Schnittstellen gesendet (Ethernet-Schnittstellen sowie das 2,4-GHz- und das 5-GHz-WLAN).',
'3459' : 'Wenn Pass-Through aktiviert ist, werden die IPv6-Pakete auch an die WAN-Schnittstelle kopiert. (Dadurch wird eine direkte, ungesicherte Verbindung zum Internet hergestellt.)',
'3460' : 'Bitte wenden Sie sich an Ihren ISP, um Informationen über dessen IPv6-Unterstützung zu erhalten.',
'3461' : 'Statische IPv6',
'3462' : 'Eine statische IPv6-Adressierung wird nicht häufig verwendet, weil die Verwaltung schwierig ist. Eine statische IPv6 sollte nicht bei Geräten verwendet werden, die zur Verbindung mit mehreren Netzwerken genutzt werden, z. B. Notebooks und andere mobile Geräte.',
'3463' : 'Nur lokales Pass-Through',
'3464' : 'IPv6 WAN Pass-Through ist deaktiviert. Alle lokalen Geräte in Ihrem LAN und WLAN können noch immer direkt miteinander kommunizieren, aber es werden keine IPv6-Pakete vom Router zum Internet geschickt oder umgekehrt. Der Router reagiert auch nicht direkt auf IPv6-Pakete.',
'3465' : 'Ihr Internetprovider stellt keine IPv6-Verbindung bereit. Bitte erkundigen Sie sich bei Ihrem Internetdienstanbieter nach Informationen zur IPv6-Unterstützung oder zur Herstellung einer  Verbindung.',
'3466' : '„Nur Lokales Pass-Through“ ist die automatische Einstellung, die Ihren Geräten die Versendung von IPv6-Paketen ermöglicht.  Die andere Option ist „6to4 Tunnel“. Damit wird der Internetzugriff über eine IPv4-Verbindung ermöglicht.',
'3467' : 'In jedem Feld sollten vier Hexadezimalzahlen stehen (0-9 und a-f).',
'3468' : 'Bitte geben Sie eine Adresse ein, die keine Multicast-Adresse ist. Multicast-Adressen fangen normalerweise mit ff an.',
'3469' : 'Die Präfix-Länge sollte 1-127 sein. Die Präfix-Länge ist normalerweise 64, 56 oder 48.',
'3470' : 'Es gibt keine IPv4-Verbindung.',
'3471' : 'Diese DNS-Einstellungen werden von Ihrer Kindersicherung außer Kraft gesetzt',
'3472' : 'Website-Filter',
'3473' : 'Bitte wählen Sie PPPoE unter „Internet WAN > Verbindungseinstellungen“ aus, bevor Sie PPPoE über IPv6 auswählen.',
'3474' : 'Internetverbindung unterbrochen. Bitte überprüfen Sie Ihren WAN-Verbindungstypen oder nehmen Sie Kontakt mit Ihrem Internetprovider auf.',
'3475' : 'Standard-DNS Ihres Internetproviders',
'gtTryManu' : 'Wenn Sie Ihren Verbindungstyp kennen, können ',
'gtSetManual' : 'Sie ihn manuell einrichten ',
'2100' : 'Zugriff verweigert. Geben Sie ein Router-Kennwort ein, um vorübergehenden Zugriff auf eine blockierte Seite oder auf blockierte Dienste zu bekommen.',
'2101' : 'Einstiegsseite',
'2102' : 'LOS',
'354' : 'Auf dieser Seite werden IP-Adresse, Hostname und MAC-Adresse der einzelnen Computer angegeben, die mit dem Netzwerk verbunden sind. Wenn für einen Computer kein Hostname festgelegt ist, ist das entsprechende Hostnamen-Feld leer. Mit „Aktualisieren“ können Sie die Liste aktualisieren.',
'355' : 'IP-Adresse',
'356' : 'Hostname',
'357' : 'MAC-Adresse',
'370' : 'Auf dieser Seite können Sie neue Verbindungen einrichten, DHCP ein-/ausschalten und die IP-Adresse des Routers in Ihrem lokalen Netzwerk einstellen.',
'371' : 'IP-Adresse',
'372' : 'Subnetzmaske',
'373' : 'DHCP-Server',
'378' : 'Die DHCP-Serverfunktion erleichtert die Einrichtung eines Netzwerks, da jedem Computer eine IP-Adresse zugewiesen wird. Hier müssen keine Änderungen durchgeführt werden.',
'379' : 'IP-Pool-Startadresse',
'380' : 'IP-Pool-Endadresse',
'381' : 'Vergabedauer',
'382' : 'Unbefristet',
'383' : 'Halbe Stunde',
'384' : '1 Stunde',
'385' : 'Zwei Stunden',
'386' : 'Halber Tag',
'387' : 'Ein Tag',
'388' : 'Zwei Tage',
'389' : 'Eine Woche',
'390' : 'Zwei Wochen',
'391' : 'Die Zeit, während der der DHCP-Server die IP-Adresse für die einzelnen Computer reserviert.',
'392' : 'Lokaler Domänenname',
'393' : 'Optional',
'394' : 'Funktion zur Benennung eines Netzwerks.',
'397' : 'Der IP-Pool muss sich im gleichen Subnetz wie die Gateway-IP befinden',
'398' : 'Die IP-Endadresse muss größer sein als die IP-Startadresse.',
'399' : 'Die LAN IP-Adresse darf sich nicht im DHCP-Adresspool befinden.',
'400' : 'Achten Sie darauf, dass Sie eine nicht routbare IP-Adresse wählen.',
'401' : 'Ungültige LAN IP-Adresse. Die erste Zahl kann nicht 0 oder 127 sein.',
'404' : 'Bitte geben Sie die neue LAN-Adresse manuell in das Adressfeld in der Statusleiste Ihres Browsers ein.',
'406' : 'Soll die LAN IP-Adresse wirklich geändert werden?',
'416' : '192.168.y.x. (y steht für eine Zahl zwischen 0 und 255, x für eine Zahl zwischen 1 und 254.)',
'417' : '10.y.y.x (y steht für eine Zahl zwischen 0 und 255, x für eine Zahl zwischen 1 und 254.)',
'418' : '172.z.y.x (z steht für eine Zahl zwischen 16 und 31, y für eine Zahl zwischen 0 und 255 und x für eine Zahl zwischen 1 und 254.)',
'713' : 'Ungültiger lokaler Domänenname :',
'1228' : 'IP-Pool-Startadresse ist ungültig.',
'1229' : 'IP-Pool-Endadresse ist ungültig.',
'1240' : 'LAN-IP-Adresse ist ungültig.',
'3' : 'Anmelden',
'408' : 'Um Einstellungen ändern zu können, müssen Sie sich mit einem Kennwort anmelden. Wenn Sie noch kein eigenes Kennwort eingestellt haben, können Sie dieses Feld leer lassen und auf „Absenden“ klicken.',
'410' : 'Standard = leer lassen',
'412' : 'Absenden',
'1371' : 'Ungültiges Kennwort',
'1372' : 'Bitte überprüfen Sie das Kennwort und geben Sie es erneut ein.',
'124' : 'Der Router protokolliert alle routerinternen Aktivitäten wie das An- und Abmelden von Computern und Versuche aus dem Internet, auf den Router zuzugreifen.',
'125' : 'Protokolldatei',
'126' : 'Speichern',
'127' : 'Löschen',
'1302' : 'Systemprotokoll',
'1303' : 'Firewall-Protokoll',
'8' : 'LAN-Einstellungen',
'9' : 'Lokale Netzwerkeinstellungen',
'10' : 'Verbundene Geräte',
'2500' : 'Statisches Routing',
'11' : 'Internet/WAN',
'335' : 'Verbindungstyp',
'690' : 'Dynamisch',
'692' : 'Statisch',
'694' : 'PPPoE',
'696' : 'PPTP',
'698' : 'Telstra BigPond/OptusNet Cable',
'42' : 'IPV6',
'43' : 'IPv6-Verbindung',
'13' : 'DNS',
'14' : 'MAC-Adresse',
'16' : 'WLAN',
'17' : 'Netzwerkname',
'18' : 'Sicherheit',
'803' : '128-Bit-WEP',
'804' : '64-Bit-WEP',
'1296' : 'WPA/WPA2-Personal (PSK)',
'1297' : 'WPA/WPA2-Enterprise (RADIUS)',
'805' : 'WPA (mit Radius-Server)',
'1319' : 'Wi-Fi Protected Setup',
'777' : 'Als Zugriffspunkt verwenden',
'833' : 'MAC-Adresskontrolle',
'1613' : 'Gastzugriff',
'1850' : 'Kindersicherung',
'1851' : 'Website-Filter',
'1710' : 'Zugriffssteuerung',
'20' : 'Medien',
'7151' : 'Datenverkehrsübersicht',
'7000' : 'Medienserver',
'1780' : 'Torrent Mate',
'1790' : 'Optionale Software',
'23' : 'Firewall',
'24' : 'Port-Weiterleitung',
'25' : 'Client-IP-Filter',
'26' : 'MAC-Adressfilter',
'27' : 'DMZ',
'41' : 'DDNS',
'28' : 'WAN-Ping-Blockierung',
'29' : 'Sicherheitsprotokoll',
'30' : 'Dienstprogramme',
'32' : 'Router neu starten',
'34' : 'Standardeinstellungen wiederherstellen',
'35' : 'Einstellungen speichern/sichern',
'36' : 'Vorherige Einstellungen wiederherstellen',
'37' : 'Nach Firmware suchen',
'38' : 'Systemeinstellungen',
'39' : 'Self-Healing',
'1900' : 'Registrierung',
'132' : 'Der interne Portbereich ist nicht korrekt.',
'133' : 'Der private Portbereich ist nicht korrekt.',
'134' : 'Mit dieser Funktion können Sie externe Aufrufe (aus dem Internet) von Diensten wie Webserver (Port 80), FTP-Server (Port 21) und andere Anwendungen über Ihren Router in das interne Netzwerk umleiten.',
'276' : 'Eintrag löschen',
'277' : 'Hinzufügen',
'278' : 'Beschreibung',
'280' : 'Typ',
'281' : 'Private IP-Adresse',
'282' : 'Privater Port',
'376' : 'alle',
'411' : 'Löschen',
'648' : 'Ungültiges Zeichen',
'672' : 'Ungültige Zahl. Gültig ist der Bereich 1 bis 65535',
'905' : 'Alle Einträge sind belegt.\nBitte löschen Sie einige Einträge, und versuchen Sie es erneut.',
'906' : 'Soll der folgende Eintrag gelöscht werden?',
'907' : 'Sollen alle Einträge gelöscht werden?',
'1241' : 'WAN-IP-Adresse ist ungültig.',
'1250' : 'Port ist ungültig.',
'1362' : 'Beschreibung fehlt',
'1601' : 'Autom.',
'2055' : 'Eingangsport-Doppelbelegung!!',
'2056' : 'Privatport-Doppelbelegung!',
'3310' : 'Intellistream',
'3311' : 'Verbessern Sie Ihre Internet-Verbindung.',
'3312' : 'Medienserver',
'3313' : 'Geben Sie Medien für verschiedene Geräte im Netzwerk frei.',
'3314' : 'Kindersicherung',
'3315' : 'DNS-Sicherheitsfilter für Internet-Sicherheit',
'3316' : 'IPv6-Verbindung',
'3317' : 'Ihr Netzwerk ist jetzt IPv6-kompatibel',
'1852' : 'Dies dient als Schutzebene vor unsicheren/unangemessenen Websites. Die Webfilter prüfen Sites durch Überprüfung des Namens der Website gegenüber einer Liste zugelassener Sites.',
'1854' : 'Filteroptionen',
'1856' : 'Kein Filter',
'1858' : 'Bösartige Websites blockieren',
'1859' : 'Blockiert Malware, Phishing und Betrüger-Websites.',
'1860' : 'Bösartige und jugendgefährdende Websites blockieren',
'1861' : 'Blockiert Malware, Phishing, Betrüger-Websites und Websites mit sexuellem Inhalt.',
'1862' : 'Bösartige, jugendgefährdende und andere familienunfreundliche Websites blockieren',
'1863' : 'Blockiert Malware, Phishing und Betrüger-Websites sowie Websites mit sexuellem Inhalt, potentiell anstößigen Inhalten und Websites zu Themen wie Abtreibung, Alkohol, Tabak, Verbrechen, Kult, Drogen, Glücksspiel, Hass, Selbstmord oder Gewalt.',
'1864' : 'Um Ihre DNS-Adresse zu ändern, gehen Sie bitte zu Internet WAN > {DNS}',
'7152' : 'Die Diagramme unten zeigen sowohl eingehenden als auch ausgehenden WAN-Datenverkehr an, der in verschiedenen Kategorien priorisiert wird. Die Diagramme zeigen die letzten 10 Minuten an (alle 5 Sekunden findet eine automatische Aktualisierung statt).',
'7154' : 'Datenverkehrslegende',
'7155' : 'Eingehender Datenverkehr',
'7156' : 'Ausgehender Datenverkehr',
'7157' : 'Aktivieren Sie Intellistream, um diese Funktion zu aktivieren',
'7158' : 'hier',
'7159' : '.',
'7160' : 'Netzwerkkonnektivität & Kontrolle',
'7161' : 'Sprache, Videochat & Gaming',
'7162' : 'Web & Webvideo',
'7163' : 'E-Mail & VPN',
'7164' : 'Downloads, Torrents & sonstiges',
'7170' : 'Bytes/Sek.',
'7174' : 'Tageszeit/Stunden: Minuten',
'326' : 'Lokales Netzwerk',
'327' : 'LAN/WLAN MAC',
'332' : 'DHCP-Server',
'333' : 'Internet-Einstellungen',
'334' : 'WAN MAC-Adresse',
'337' : 'WAN-IP',
'338' : 'Standardgateway',
'339' : 'DNS-Adresse',
'gtGuestName' : 'Gast-SSID',
'gtGuestKey' : 'Gastschlüssel',
'347' : 'Sie müssen sich anmelden, wenn Sie Einstellungen verändern möchten.',
'2022' : 'Nur Modem',
'2031' : 'Verbinden',
'2032' : 'Trennen',
'2033' : 'Rausch-Marge',
'2034' : 'Downstream',
'2035' : 'Upstream',
'2036' : 'Dämpfung (dB)',
'2037' : 'Ausgangsleistung (dBm)',
'2038' : 'Datenrate (Kbit/s)',
'tDashboard' : 'Willkommen beim Belkin Router-Dashboard!',
'rtFeature' : 'Merkmale',
'rtLink' : 'Router-Verknüpfungen',
'p1310t001' : 'Verbindungsdetails',
'p1310t002' : 'Verbindung erneut testen',
'p1310t003' : 'Letzte Überprüfung',
'p1310t004' : 'Download-Geschwindigkeit',
'p1310t005' : 'Upload-Geschwindigkeit',
'p1000t001' : 'Angeschlossene Geräte',
'p1000t002' : 'Alles anzeigen',
'2501' : 'Bitte geben Sie die folgenden Konfigurationsparameter ein',
'2502' : 'Netzwerkadresse',
'2503' : 'Subnetzmaske',
'2504' : 'Gateway',
'396' : 'Sie haben eine ungültige Zahl für die Subnetzmaske eingegeben.',
'1231' : 'Gateway ist ungültig!',
'1361' : 'Ungültige IP-Adresse; die erste Zahl muss zwischen 1 und 254 liegen.',
'1800' : 'Die IP-Adresse und die Subnetzmaske stimmen nicht überein.',
'Support1t011' : 'Lesen Sie alles darüber.',
'Support2t011' : 'Lesen Sie alles darüber.',
'Support2t012' : 'Rufen Sie die folgende URL auf einem Gerät auf, das mit dem Internet verbunden ist, und erfahren Sie, wie Sie das Problem selbst beheben können: <STRONG>www.belkin.com/support/asdlkj</STRONG>',
'Support3t011' : 'Lesen Sie alles darüber.',
'Support3t012' : 'Rufen Sie die folgende URL auf einem Gerät auf, das mit dem Internet verbunden ist, und erfahren Sie, wie Sie das Problem selbst beheben können: <STRONG>www.belkin.com/support/asdlkj</STRONG>',
'Support6t036' : 'Lesen Sie alles darüber.',
'425' : 'Dadurch wird Ihr Router auf seine ursprünglichen Einstellungen zurückgesetzt. Sie sollten <a href="ut_save.html">Ihre Einstellungen speichern/sichern</a>, bevor Sie die ursprünglichen Einstellungen wiederherstellen. Dadurch können Sie Ihre Routerkonfiguration wiederherstellen, wenn die Einstellungen zwischenzeitlich verloren gehen oder geändert werden.',
'426' : 'WARNUNG: Ihre Einstellungen gehen dabei vollständig verloren!\nMöchten Sie den Vorgang fortsetzen?',
'427' : 'Die Wiederherstellung der Standardeinstellungen nimmt bis zu $s Sekunden in Anspruch. Schalten Sie den Router während dieses Vorgangs nicht ab.',
'428' : 'Werkseitige Standardeinstellungen werden nicht wiederhergestellt. Alle Einstellungen bleiben erhalten!',
'429' : 'Standardeinstellungen wiederherstellen',
'301' : 'Dadurch wird Ihr Router jede Woche neu gebootet. Dadurch macht Ihr Netzwerk weniger Probleme.',
'302' : 'Meinen Router automatisch starten',
'303' : 'Tage einstellen',
'304' : 'Zeit einstellen',
'527' : 'Dadurch können Sie die Einstellungen Ihres Routers auf jede beliebige Konfiguration festlegen, die Sie bereits gespeichert haben.',
'528' : 'Wiederherstellen',
'529' : 'Geben Sie den Namen der Datei an, die die gesicherten Einstellungen enthält.',
'530' : 'Möchten Sie die Wiederherstellung der Einstellungen fortsetzen?',
'531' : 'Nach der Wiederherstellung der Einstellungen reagiert das Gerät möglicherweise bis zu eine Minute lang nicht auf Befehle.\n\nDas ist normal. Währenddessen darf das Gerät nicht abgeschaltet werden.',
'451' : 'Dadurch können Sie Ihre aktuelle Routerkonfiguration wiederherstellen, wenn die Einstellungen zwischenzeitlich verloren gehen oder geändert werden. Sie sollten Ihre Einstellungen speichern, bevor Sie Firmware-Updates vornehmen.',
'539' : 'Speichern',
'130' : 'Entweder haben Sie nicht alle IP-Adressen eingegeben, oder einige der eingegebenen Zahlen sind ungültig. Die Zahl im Eingabefeld für die IP-Adresse muss zwischen 1 und 254 liegen.',
'541' : 'Administratorkennwort:',
'542' : 'Der Router wird ohne festgelegtes Kennwort geliefert. Sie können auf dieser Seite ein Kennwort festlegen und dadurch die Sicherheit erhöhen.',
'543' : 'Aktuelles Kennwort eingeben',
'544' : 'Neues Kennwort eingeben',
'545' : 'Neues Kennwort bestätigen',
'546' : 'Anmeldezeitlimit',
'547' : '(1-99 Minuten)',
'548' : 'Uhrzeit und Zeitzone:',
'549' : 'Januar',
'550' : 'Bitte stellen Sie Ihre Zeitzone ein. Wenn es in Ihrem Land Sommerzeit gibt, markieren Sie dieses Kästchen.',
'551' : 'Zeitzone',
'606' : 'Sommerzeit',
'607' : 'Sommerzeit automatisch einstellen',
'608' : 'Fernverwaltung:',
'609' : 'ERWEITERTE FUNKTION!',
'610' : 'Mit der Fernverwaltung können Sie überall vom Internet aus Änderungen an den Router-Einstellungen vornehmen. Bevor Sie diese Funktion aktivieren,',
'611' : 'SOLLTEN SIE UNBEDINGT EIN ADMINISTRATORKENNWORT FESTLEGEN.',
'642' : 'Das Einschalten der Fernverwaltung vergrößert Ihr Sicherheitsrisiko. Schalten Sie sie nur über kurze Zeiträume ein, wenn es wirklich nötig ist. Schalten Sie sie aus, wenn Sie sie nicht verwenden und stellen Sie ein Kennwort ein.',
'612' : 'Beliebige IP-Adresse zur Fernverwaltung des Routers',
'613' : 'Nur diese IP-Adresse zur Fernverwaltung &nbsp;&nbsp;&nbsp;des Routers zulassen',
'614' : 'Fernverwaltung aktivieren/deaktivieren',
'615' : 'Der zugewiesene Port wurde im virtuellen Server verwendet.',
'616' : 'Die zugewiesene IP steht im Konflikt mit Ihrer aktuellen WAN-IP-Adresse.',
'617' : 'UPnP-Aktivierung:',
'618' : 'Ermöglicht das Ein-/Ausschalten der UPNP-Funktion des Routers. Wenn Sie Anwendungen benutzen, die UPnP unterstützen, können diese Anwendungen automatisch den Router konfigurieren, wenn Sie UPnP aktivieren.',
'619' : 'UPNP aktivieren/deaktivieren',
'620' : 'Aktivieren der Automatischen Firmware-Aktualisierung:',
'621' : 'Ermöglicht Ihnen die automatische Suche nach Firmware-Updates für den Router.',
'622' : 'Automatische Firmware-Aktualisierung Aktivieren / &nbsp;&nbsp;&nbsp;Deaktivieren',
'623' : 'Das aktuelle Kennwort ist ungültig',
'624' : 'Die neuen Kennwörter, die Sie eingegeben haben, werden nicht erkannt. Bitte versuchen Sie es erneut.',
'626' : 'Unzulässige Kennwortlänge. Das Kennwort muss aus mindestens 3 und höchstens 12 Zeichen bestehen.',
'628' : 'Es wird dringend empfohlen, ein Administratorkennwort festzulegen.',
'629' : 'Primärer NTP-Server',
'630' : 'Sekundärer NTP-Server',
'640' : 'Fernzugriffsport',
'738' : 'Passivzeitlimit: ungültige Zahlenangaben. Sie können Zahlen zwischen 1 und 99 eingeben.',
'796' : 'Durch die Aktivierung des Turbo-Modus kann der Router (oder Zugriffspunkt) Frame Bursting einsetzen, um eine maximale Durchsatzleistung vom Router oder Zugriffspunkt zu den 802.11g-Clients zu erzielen. Der Turbo-Modus funktioniert bei 802.11g-Clients, die den Turbo-Modus unterstützen. 802.11g-Clients von Belkin mit aktuellen Treibern unterstützen den Turbo-Modus. Clients, die den Turbo-Modus nicht unterstützen, funktionieren normal, wenn der Turbo-Modus aktiviert ist.',
'1282' : 'Februar',
'1283' : 'März',
'1284' : 'April',
'1285' : 'Mai',
'1286' : 'Juni',
'1287' : 'Juli',
'1288' : 'August',
'1289' : 'September',
'1290' : 'Oktober',
'1291' : 'November',
'1292' : 'Dezember',
'1373' : 'Australien',
'1374' : 'Neuseeland',
'1375' : 'Nordamerika',
'1376' : 'Europa',
'1377' : 'Asien-Pazifikraum',
'2300' : '(GMT-12:00) Eniwetok, Kwajalein',
'2301' : '(GMT-11:00) Midway-Inseln, Samoa',
'2302' : '(GMT-10:00) Hawaii',
'2303' : '(GMT-09:00) Alaska',
'2304' : '(GMT-08:00) Pazifische Zeit (USA & Kanada); Tijuana',
'2305' : '(GMT-07:00) Arizona',
'2306' : '(GMT-07:00) Mountain-Zeit (USA & Kanada)',
'2307' : '(GMT-06:00) Zentralzeit (USA & Kanada)',
'2308' : '(GMT-06:00) Mexiko-Stadt',
'2309' : '(GMT-06:00) Tegucigalpa',
'2310' : '(GMT-06:00) Saskatchewan',
'2311' : '(GMT-05:00) Bogota, Lima, Quito',
'2312' : '(GMT-05:00) Ostküstenzeit (USA & Kanada)',
'2313' : '(GMT-05:00) Indiana (Ost)',
'2314' : '(GMT-04:00) Atlantic Time (Kanada)',
'2315' : '(GMT-04:00) Caracas, La Paz',
'2316' : '(GMT-04:00) Santiago',
'2317' : '(GMT-03:30) Neufundland',
'2318' : '(GMT-03:00) Brasilien',
'2319' : '(GMT-03:00) Buenos Aires, Georgetown',
'2320' : '(GMT-02:00) Mittel-Atlantik',
'2321' : '(GMT-01:00) Azoren, Kapverdische Inseln',
'2322' : '(GMT) Casablanca, Monrovia',
'2323' : '(GMT) Greenwich Mean Time: Lissabon, London, Edinburgh',
'2324' : '(GMT) Greenwich Mean Time: Dublin',
'2325' : '(GMT+01:00) Amsterdam, Berlin, Bern, Rom',
'2326' : '(GMT+01:00) Stockholm, Wien, Belgrad',
'2327' : '(GMT+01:00) Bratislava, Budapest, Ljubljana',
'2328' : '(GMT+01:00) Prag, Brüssel, Kopenhagen, Madrid',
'2329' : '(GMT+01:00) Paris, Sarajevo, Skopje',
'2330' : '(GMT+01:00) Warschau, Zagreb',
'2331' : '(GMT+02:00) Athen, Istanbul, Minsk, Vilnius, Sofia',
'2332' : '(GMT+02:00) Bukarest',
'2333' : '(GMT+02:00) Kairo',
'2334' : '(GMT+02:00) Harare, Pretoria',
'2335' : '(GMT+02:00) Helsinki, Riga, Tallinn',
'2336' : '(GMT+02:00) Israel',
'2337' : '(GMT+03:00) Bagdad, Kuwait, Nairobi, Riad',
'2338' : '(GMT+03:00) Moskau, St. Petersburg, Wolgograd, Kasan',
'2339' : '(GMT+03:30) Teheran',
'2340' : '(GMT+04:00) Abu Dhabi, Muscat, Tiflis',
'2341' : '(GMT+04:00) Kabul',
'2342' : '(GMT+05:00) Islamabad, Karatschi, Jekaterinenburg',
'2343' : '(GMT+05:30) Delhi',
'2344' : '(GMT+06:00) Alma-Ata, Dhaka',
'2345' : '(GMT+07:00) Bangkok, Jakarta, Hanoi',
'2346' : '(GMT+08:00) Peking, Chongqing, Urumchi',
'2347' : '(GMT+08:00) Hongkong, Perth, Singapur, Taipeh',
'2348' : '(GMT+09:00) Tokio, Osaka, Sapporo',
'2349' : '(GMT+09:00) Seoul',
'2350' : '(GMT+09:30) Adelaide, Darwin',
'2351' : '(GMT+10:00) Brisbane',
'2352' : '(GMT+10:00) Canberra, Melbourne, Sydney',
'2353' : '(GMT+10:00) Hobart',
'2354' : '(GMT+10:00) Guam, Port Moresby',
'2355' : '(GMT+11:00) Magadan, Salomoneninseln, Neukaledonien',
'2356' : '(GMT+12:00) Wellington, Auckland',
'2357' : '(GMT+12:00) Fidschi',
'2358' : '(GMT+13:00) Nukuʻalofa',
'2370' : 'So',
'2371' : 'Mo',
'2372' : 'Di',
'2373' : 'Mi',
'2374' : 'Do',
'2375' : 'Fr',
'2376' : 'Sa',
'2401' : 'ECO-Modus',
'2402' : 'LEDs an der Vorderseite dimmen',
'2403' : 'Funk deaktivieren von',
'2404' : 'außer',
'2405' : 'Mit dieser Funktion können Sie die LED-Leuchten an der Router-Vorderseite dimmen und so Strom sparen. Sie können die WLAN-Verbindung auch zu voreingestellten Zeiten deaktivieren.',
'2406' : 'Startzeit kann nicht später als die Endzeit sein!',
'322' : 'Firmware-Version',
'431' : 'Von Zeit zu Zeit veröffentlicht Belkin neue Versionen des Router-Betriebsprogramms. Diese Updates enthalten bestimmte Verbesserungen und Fixes für Ihren Router.',
'432' : '<b>HINWEIS:</b> Bitte <a href="ut_save.html">sichern Sie Ihre aktuellen Einstellungen</a>, bevor Sie die Firmware-Version aktualisieren.',
'433' : 'Klicken Sie hier',
'434' : ', um auf die Seite Aktuelle Einstellungen speichern/sichern zurückzukehren.',
'435' : 'Nach aktueller Firmware suchen',
'436' : 'Firmware suchen',
'437' : 'Firmware aktualisieren',
'438' : 'Update',
'439' : 'Bitte geben Sie den Pfad der Aktualisierungsdatei an. Geben Sie hierzu Pfad und Namen der Datei ein oder klicken Sie auf „Durchsuchen“, um die Datei zu suchen.',
'440' : 'Sind Sie sicher, dass Sie die Aktualisierung fortsetzen möchten?',
'441' : 'Am Ende der Aktualisierung reagiert der Router bis zu einer Minute lang nicht auf Befehle. Dies ist völlig normal. Schalten Sie den Router während dieser Zeit nicht ab, und führen Sie keinen Neustart durch.',
'1198' : 'Firmware wird aktualisiert',
'534' : 'Router neu starten',
'535' : 'Sind Sie sicher, dass Sie den Router neu starten möchten? Der Router-Neustart wirkt sich nicht auf die Konfiguration aus.',
'536' : 'Der Neustart des Routers dauert etwa $s Sekunden. Bis zum Ende des Neustarts darf der Router nicht abgeschaltet werden.',
'7001' : 'Genießen Sie persönliche Musik, Fotos und Videos bequem über ein beliebiges DLNA-Gerät, das in Ihr Netzwerk eingebunden ist. Betrieben über Twonky.',
'7002' : 'DLNA-Server',
'7003' : 'Servername',
'7004' : 'Freigegebene Laufwerke:',
'7005' : 'Betriebsbereit',
'7006' : 'Indexierung...',
'7007' : 'Übermittlung:',
'7008' : 'Videos',
'7009' : 'Musiktitel',
'7010' : 'Bilder',
'7011' : 'Im Netzwerk nicht freigegeben.',
'7012' : 'Es sind keine USB-Laufwerke mit dem Router verbunden.',
'7016' : 'Index aktualisieren',
'7017' : 'Bitte geben Sie einen benutzerfreundlichen Namen für den Medienserver ein.',
'7018' : 'Nicht erlaubtes Zeichen',
'7019' : 'Sie haben mehr Medien als Ihr Router indexieren kann, deshalb übermitteln wir die ersten',
'7020' : 'Elemente.',
'7021' : 'Twonky ist eine Produktlinie digitaler Software-Produkte für Privathaushalte, die von der Firma PacketVideo Corporation (PV) entwickelt worden ist.',
'7022' : 'Schreibgeschütztes Laufwerk kann nicht indexiert werden.',
'7023' : 'MB',
'7024' : 'GB',
'7025' : 'TB',
'7026' : 'Video',
'7027' : 'Musiktitel',
'7028' : 'Bild',
'770' : 'Verwenden Sie diese Option nur für Verbindungen mit Bigpond Cable und OptusNet Cable. ',
'771' : 'Wichtig:',
'775' : '3)\tSchließen Sie das Stromkabel erneut an den Belkin Router an.',
'776' : 'Öffnen Sie zur Bestätigung, dass Sie eine erfolgreiche Verbindung zum Internet hergestellt haben, einen Browser wie Internet Explorer, Firefox oder Safari und überprüfen Sie, ob Sie im Internet surfen können.',
'731' : 'Benutzername',
'489' : 'Kennwort',
'732' : 'Kennwort erneut eingeben',
'756' : 'Bitte geben Sie das Kennwort erneut ein.',
'1379' : 'Entweder haben Sie nicht alle IP-Nummern eingegeben, oder einige der eingegebenen Nummern sind ungültig. Die IP-Adresse sollte folgendermaßen aussehen: x.y.y.x (hierbei kann y eine beliebige Zahl zwischen 0 und 255 sein und x eine beliebige Zahl zwischen 1 und 254).',
'709' : 'Geben Sie die Daten für die dynamische IP unten ein, und klicken Sie auf „Speichern“.',
'710' : 'Hostname',
'711' : 'Hostname = Name, den manche Internetprovider für die Verbindung mit Ihrem System verlangen.',
'712' : 'WAN MAC-Adresse ändern',
'330' : 'IP-Adresse',
'331' : 'Subnetzmaske',
'659' : 'Ungültige MTU; MTU muss zwischen 500 und 1500 liegen.',
'730' : 'Geben Sie die Daten für die PPPoE-Einstellungen unten ein und klicken Sie auf „Speichern“.',
'733' : 'Dienstname (optional)',
'734' : 'MTU (500-1500)',
'735' : 'Bitte ändern Sie die MTU-Einstellung nur, wenn Ihr ISP einen anderen Wert erfordert.',
'736' : 'Verbindung nach',
'737' : 'Minuten Inaktivität',
'741' : 'Ungültiger MTU-Wert',
'2005' : 'Vom ISP zugewiesene IP-Adresse',
'2021' : 'Klicken Sie hier, um Ihre DNS-Einstellungen einzugeben',
'2023' : 'Doppelte Anführungszeichen sind nicht zugelassen.',
'2024' : 'Nicht akzeptierte Zeichen im Benutzernamen',
'2025' : 'Umgekehrter Schrägstrich (Backslash) ist nicht zugelassen.',
'2030' : 'Entweder haben Sie nicht die komplette Bezeichnung des Standardgateways eingegeben oder einige der eingegebenen Zahlen sind ungültig. Die Nummern sollten zwischen 0 und 255 liegen',
'2052' : 'Unzulässige Zeichen im Kennwort (<,> und &)',
'691' : 'Dynamische Verbindungen sind der gängigste Verbindungstyp. Wenn Sie ein Kabelmodem verwenden, arbeiten Sie vermutlich mit einer dynamischen Verbindung. Wenn Sie ein Kabelmodem besitzen oder Ihren Verbindungstyp nicht kennen, sollten Sie diese Option verwenden.',
'723' : 'Einschließlich der ISPs, die einen Hostnamen verlangen oder die Verbindung an eine bestimmte MAC-Adresse koppeln.',
'693' : 'Statische IP-Adressen werden seltener als andere Verbindungstypen verwendet. Verwenden Sie diese Option nur, wenn Sie von Ihrem ISP eine IP-Adresse erhalten haben, die sich nicht ändert.',
'724' : 'Der Router unterstützt die Verbindung zu einem ISP, der eine statische IP-Adresse zuweist.',
'695' : 'Wenn Sie ein DSL-Modem verwenden oder Ihr ISP einen Benutzernamen und ein Kennwort für Sie festgelegt hat, arbeiten Sie mit dem Verbindungstyp PPPoE. Verwenden Sie diesen Verbindungstyp.',
'725' : 'Der Router unterstützt einen dynamischen Verbindungstyp, der eine PPPoE-Anmeldung zur Authentifizierung verlangt.',
'697' : 'Manche ISPs verwenden das PPTP-Protokoll, um Abonnenten mit der Zentralstelle zu verbinden. Hierzu müssen Sie ein paar zusätzliche Einstellungen vornehmen, die Sie vom ISP erhalten haben müssten. Bei erfolgreicher Speicherung der Änderungen müsste die Internetstatusanzeige grün leuchten.',
'726' : 'Nur zur Verwendung bei ISPs, die die PPTP-Verbindungsmethode erfordern.',
'699' : 'Verwenden Sie diese Option nur für Verbindungen mit Bigpond Cable und OptusNet Cable.',
'728' : 'Nur für Australien. Der Router unterstützt die Verbindung zu Telstra BigPond.',
'2019' : 'Geben Sie die Daten für die Modemeinstellungen unten ein und klicken Sie auf „Speichern“.',
'tBackToConnectionType' : 'Zurück zu Verbindungstyp',
'759' : 'Geben Sie die Daten für die statische IP unten ein, und klicken Sie auf „Speichern“.',
'761' : 'Subnetzmaske',
'762' : 'Gateway-Adresse des Anbieters',
'754' : 'Klicken Sie hier, um Ihre DNS-Einstellungen einzugeben',
'715' : 'Jedes Gerät in Ihrem Netzwerk hat eine eindeutige Hardware-Adresse (MAC-Adresse), die es gegenüber anderen Geräte im Netzwerk und im Internet identifiziert.  Bei einigen wenigen Internetprovidern (ISP) müssen Sie die MAC-Adresse von Ihrer Netzwerkkarte oder Ihrem alten Router in den Routereinstellungen eintragen. Wenn Sie nicht wissen, ob das bei Ihnen der Fall ist, geben Sie einfach die MAC-Adresse des Computers ein, der vor der Routerinstallation ursprünglich an das Modem angeschlossen war.',
'716' : 'WAN MAC-Adresse',
'717' : 'MAC-Adresse des Computers klonen',
'718' : 'Klonen',
'721' : 'Auf der Registerkarte „Internet/WAN“ richten Sie den Router für die Verbindung zu Ihrem Internetprovider ein. Der Router kann die Verbindung zu fast jedem Internetprovider-System herstellen, sofern Sie die Routereinstellungen an den Verbindungstyp anpassen. Für die Einrichtung des Routers zur Verbindung mit dem ISP klicken Sie links auf dem Bildschirm in der Registerkarte „Internet/WAN“ auf „Verbindungstyp“.',
'722' : 'Unterstützte Verbindungstypen:',
'htWANMainContent' : 'Verbindungstyp wählen:',
'700' : 'Weiter',
'744' : 'PPTP-Konto',
'745' : 'Kennwort',
'746' : 'Kennwort erneut eingeben',
'747' : 'Hostname',
'1770' : 'Vom ISP zugewiesene IP-Adresse',
'1771' : 'Ja',
'1772' : 'Nein',
'1773' : 'Serviceadresse',
'750' : 'Subnetzmaske',
'778' : 'Der Router kann als reiner Zugriffspunkt eingerichtet werden, so dass alle Routing- und Firewallfunktionen abgestellt werden. Wählen Sie hierzu „Aktivieren“, und geben Sie die gewünschte IP-Adresse für den Zugriffspunkt ein.',
'779' : 'Zugriffspunkt-Modus',
'781' : 'Subnetzmaske angeben',
'801' : 'Sicherheitsmodus',
'806' : 'Hier können Sie WLAN-Sicherheits-/Verschlüsselungseinstellungen konfigurieren. Die Sicherheitseinstellungen sollten aktiviert sein, damit die maximale Sicherheit im WLAN-Netzwerk gewährleistet werden kann. WPA (Wi-Fi Protected Access) ermöglicht dynamische Änderungen der Schlüssel und bietet die sicherste Lösung. In WLAN-Umgebungen, in denen nicht alle Geräte WPA unterstützen, sollte WEP (Wired Equivalent Privacy) verwendet werden.',
'377' : 'Autom.',
'487' : 'EIN',
'488' : 'AUS',
'787' : 'Hier können Sie die WLAN-Einstellungen des Routers ändern. Klicken Sie auf „Speichern“, um die Einstellungen zu speichern.',
'788' : 'WLAN-Kanal',
'789' : 'SSID',
'790' : 'WLAN-Modus',
'794' : 'SSID übertragen',
'797' : 'Geschützter Modus',
'1300' : 'Erweiterungskanal',
'1301' : 'Bandbreite',
'1304' : '802.11e/WMM QoS',
'852' : 'Die Länge des PSK sollte zwischen 8 und 63 oder 64 Hex liegen',
'856' : 'Wi-Fi Protected Access mit einem Pre-shared Key: Der Schlüssel ist ein Kennwort in Form eines Wortes, eines Ausdrucks oder einer Reihe von Buchstaben und Zahlen. Der Schlüssel muss aus <b>8</b> bis <b>63</b> Zeichen bestehen und kann Leer- und Sonderzeichen oder nur <b>64</b> Hexadezimalzeichen (0-F) enthalten. Jeder Client, der ins Netzwerk eingebunden wird, muss denselben Schlüssel verwenden (Pre-shared Key: PSK)',
'115' : 'Entweder haben Sie nicht alle Hexadezimalzeichen eingegeben oder einige der eingegebenen Hexadezimalzeichen sind ungültig. Ein Hexadezimalzeichen ist entweder eine Zahl zwischen 0 und 9 oder ein Buchstabe zwischen A und F.',
'308' : '<b>SPI</b> Stateful Packet Inspection (Paketstatus-Überprüfung). SPI ist die Bezeichnung für ein Internet-Sicherheitsverfahren in Industriequalität, das vom HomeConnect Heimnetz-Gateway bereitgestellt wird. Unter SPI dient das Gateway als Firewall, die Ihr Netzwerk vor Computerhackern schützt.',
'808' : 'HINWEIS:',
'809' : 'Um ein Hexadezimalpaar automatisch zu erstellen, klicken Sie auf die Schaltfläche rechts und geben Sie dort eine Kennfolge (Passphrase) ein.',
'810' : 'PassPhrase',
'811' : 'Generieren',
'812' : 'Bitte geben Sie eine PassPhrase (Kennfolge) ein.',
'814' : 'Schlüssel',
'818' : '(zweistellige Hexadezimalzeichen)',
'296' : '<b>IP-Adresse</b> IP steht für „Internet Protocol“ (Internet-Protokoll). IP-Adressen bestehen aus vier Zahlen, die durch Punkte voneinander getrennt werden. Die Zahlenfolge kennzeichnet jeweils einen bestimmten, eindeutigen Host-Computer im Internet. Beispiel: 192.34.45.8.',
'298' : '<b>ISP</b> Abkürzung für Internet Service Provider (Internetdienstanbieter). Der ISP stellt die Verbindung für Einzelpersonen, Unternehmen und Organisationen zum Internet bereit.',
'807' : '(13 zweistellige Hexadezimalzeichen)',
'813' : 'Schlüssel ist nicht vollständig',
'821' : 'ist nicht vollständig',
'1190' : '<br>Um sich für Dynamic DNS anzumelden, öffnen Sie die Seite http://www.dyn.com<br>',
'1339' : 'Es wird empfohlen, WPA/WPA2 zu verwenden, wenn WPS aktiviert ist.',
'1363' : 'Vorgang noch nicht abgeschlossen - Bitte warten...',
'1364' : 'Fehler gefunden - Bitte erneut versuchen.',
'1365' : 'Sitzungsüberlappungsfehler: Bitte warten Sie 60 Sekunden lang, bevor Sie den Vorgang erneut starten, oder verwenden Sie Ihr Client-Dienstprogramm, um manuell eine Verbindung zu diesem Netzwerk herzustellen',
'1366' : 'Verbindung hergestellt - Das Gerät ist mit dem Router verbunden.',
'1370' : 'Ungültige PIN-Nummer! Die PIN-Nummer des Geräts besteht entweder aus vier oder aus acht Ziffern. Bitte überprüfen und erneut eingeben.',
'1620' : 'Initiierung - Bitte WPS PBC innerhalb von 2 Minuten am Client-Gerät starten.',
'1621' : 'Initiierung - Bitte WPS innerhalb von 2 Minuten am Client-Gerät starten.',
'1622' : 'Zeitlimit überschritten - Keine Client-Verbindung mit dem Router.',
'1623' : 'Wi-Fi Protected Setup-Meldung',
'1393' : 'WPS Hardware-Taste',
'1320' : 'Wi-Fi Protected Setup (WPS) ist der Industriestandard, mit dem die Sicherheitskonfiguration und Verwaltung von WLANs vereinfacht wird. Nun können Sie ein WPA-aktiviertes 802.11-Netzwerk mit WPS-zertifizierten Geräten einfach mit Ihrer persönlichen Identifikationsnummer (PIN) oder der Konfiguration über Taste (PBC-Methode) einrichten und anschließen. Ältere Geräte ohne WPS können über die herkömmliche Konfigurationsmethode zum Netzwerk hinzugefügt werden.',
'1321' : 'PIN-Methode (Personal Information Number)',
'1322' : 'Geben Sie die PIN des Client-Geräts ein und klicken Sie auf „Registrieren“. Starten Sie dann innerhalb von 2 Minuten WPS im WLAN-Dienstprogramm des Client-Geräts oder der WPS-Anwendung.',
'1323' : 'PIN-Nummer des Client-Geräts eingeben',
'1324' : 'Registrieren',
'1325' : 'Wenn ein externer Registrator vorhanden ist, können Sie auch die PIN-Nummer des Routers bei einem externen Registrator eingeben. Wenn Sie die PIN-Nummer des Routers ändern wollen, klicken Sie auf „Neue PIN-Nummer erstellen“ oder klicken Sie auf „Standard PIN-Nummer wiederherstellen“, um die Standardeinstellung der PIN-Nummer wiederherzustellen“.',
'1326' : 'Router-PIN-Nummer',
'1327' : 'Neue PIN-Nummer erstellen',
'1328' : 'Standard-PIN-Nummer wiederherstellen',
'1329' : 'Konfiguration über Taste (PBC-Methode)',
'1330' : 'Halten Sie die PBC-Taste auf dem Router drei Sekunden gedrückt oder klicken Sie auf „PBC starten“. Starten Sie dann innerhalb von 2 Minuten auf dem Gerät, das mit dem Extender verbunden werden soll, PBC.',
'1331' : 'PBC starten',
'1332' : 'Manuelle Konfigurationsmethode',
'1333' : 'Konfigurieren Sie Client-Geräte ohne WPS manuell mit den folgenden Einstellungen:',
'1334' : 'WLAN-Sicherheit',
'1336' : 'Netzwerk-Authentifizierung',
'1337' : 'Datenverschlüsselung',
'1338' : 'Netzwerk-Schlüssel (PSK)',
'1340' : 'Router-PIN entsperren',
'1341' : 'Router-PIN ist aufgrund von häufigen vergeblichen Zugriffsversuchen deaktiviert',
'1390' : 'PIN-Prüfsumme fehlgeschlagen! Bitte überprüfen und erneut eingeben.',
'1391' : 'Ungültige PIN-Nummer! Die PIN-Nummer des Geräts besteht aus acht Ziffern. Bitte überprüfen und erneut eingeben.',
'1392' : 'Konfiguriert',
'1396' : 'WLAN-Sicherheit manuell konfigurieren',
'1397' : 'WLAN-Sicherheit',
'common_err1' : '%s ist NULL',
'upgrade_err2' : 'Firmware-Upgrade abgebrochen, da nicht genügend Ressourcen vorhanden waren. Upgrade fehlgeschlagen.\nBitte versuchen Sie es mit dem System im Leerlauf (kein Internet-Datenverkehr) erneut.',
'upgrade_err3' : 'Hochladen nicht möglich, bitte Kontakt mit Administrator aufnehmen.',
'upgrade_err4' : 'Firmware ist zu groß, Upgrade fehlgeschlagen.',
'upgrade_err5' : 'Die neueste Firmware ist bei Ihnen bereits installiert.',
'upgrade_err6' : 'Das Firmware-Update scheint beschädigt zu sein. Bitte laden Sie die Firmware-Datei erneut herunter und versuchen Sie es noch einmal.',
'show10' : 'DHCP-Client-Liste',
'show54' : 'Verbindungseinstellungen',
'btn2' : 'Änderungen übernehmen',
'cff1' : 'Firmware erfolgreich geprüft',
'PM2' : ':30: PM',
'AM2' : ':30: AM',
'Dimicons' : 'Leuchtanzeigen dimmen',
'EcoTo' : 'zu',
'fvrm' : 'Bitte deaktivieren Sie die Fernverwaltung. Es liegt ein Konflikt mit einem eingehenden Port Ihres virtuellen Servers vor.',
'lsipm2' : 'Ungültige LAN IP-Adresse. Die letzte Zahl kann nicht 0 oder 255 sein.',
'lsldnm' : 'Ungültiger lokaler Domänenname: `~!@#$%^&*()_+[]{}\|;:\'"<>/?.,',
'lsipm5' : 'Achten Sie darauf, dass Sie eine nicht routbare IP-Adresse wählen.\n  192.168.x.x (x steht für eine Zahl zwischen 0 und 255.) \n10.x.x.x (x steht für eine Zahl zwischen 0 und 255.)\n172.y.x.x (y steht für eine Zahl zwischen 16 und 31 und x für eine Zahl zwischen  0 und 255.)',
'ufy4' : 'Die Wiederherstellung der Werkseinstellungen nimmt bis zu 60 Sekunden in Anspruch. Schalten Sie den Router während dieses Vorgangs nicht ab.',
'ufe11' : 'Am Ende des Upgrades reagiert der Router bis zu 180 Sekunden lang nicht auf Befehle. Dies ist völlig normal. Schalten Sie den Router während dieser Zeit nicht ab, und führen Sie keinen Neustart durch.',
'ur5' : 'Der Neustart des Routers dauert etwa 30 Sekunden. Bis zum Ende des Neustarts darf der Router nicht abgeschaltet werden.',
'ur6' : 'Der Neustart des Routers dauert etwa 60 Sekunden. Bis zum Ende des Neustarts darf der Router nicht abgeschaltet werden.',
'usys83' : 'Neues Kennwort und bestätigtes neues Kennwort stimmen nicht überein.',
'usys83_1' : 'Kennwort und bestätigtes Kennwort stimmen nicht überein.',
'usys85_1' : 'Das Administrationskennwort sollte aus 3 bis 12 Zeichen bestehen.',
'usys88' : 'Das Kennwort hat die maximale Länge erreicht!',
'usys89' : 'AM',
'usys90' : 'PM',
'usys92' : 'Die Nummer des Fernzugriffsport sollte eine Zahl zwischen 1 und 65535 sein.Nummer',
'usysipm' : 'Entweder haben Sie nicht alle IP-Nummern eingegeben, oder einige der eingegebenen Nummern sind ungültig. Die IP-Adresse sollte folgendermaßen aussehen: x.y.y.z (hierbei kann x eine beliebige Zahl zwischen 1 und 223 sein, y eine Zahl zwischen 0 und 255 und z eine beliebige Zahl zwischen 1 und 254).',
'self_healing60' : 'Self Healing',
'chkwait' : 'Es wird überprüft, ob neuere Firmware vorhanden ist...',
'Europe' : 'Europa',
'Australia' : 'Australien & Neuseeland',
'AsiaPacific' : 'Asien-Pazifikraum',
'NorthAmerica' : 'Nordamerika',
'vjs1' : 'Ungültige IP-Adresse, zu lang. Bitte erneut prüfen.',
'vjs2' : 'Ungültige IP-Adresse, \'.\' fehlt. Bitte erneut prüfen.',
'vjs3' : 'Ungültige IP-Adresse, fehlende Zahlen zwischen \'.\'. Bitte erneut prüfen.',
'vjs4' : 'Ungültige IP-Adresse, \'.\' zu viel. Bitte erneut prüfen.',
'vjs5' : 'Ungültige IP-Adresse, Zahlen zwischen \'.\' sind zu groß. Bitte erneut prüfen.',
'vm1' : 'Ungültiges Zeichen ',
'vm2' : ' an Position ',
'vm3' : 'Gültig ist ',
'vjs6' : 'Ungültiges Jahresformat, bitte eingeben als (z. B. 2002).',
'vm4' : 'Ungültige Zahl ',
'vjs8' : 'Ungültig, zulässig ist der Zahlenbereich 1970 bis 2037.',
'vjs9' : 'Ungültiges Monatsformat, bitte eingeben als (01 bis 12).',
'vjs161' : ' nicht in ',
'vjs162' : ' Netzmaske',
'vjs163' : 'Der zulässige DHCP-Bereich ist ',
'vjs17' : 'Sie haben zwei verschiedene Kennwörter eingeben. Bitte nochmals überprüfen!',
'vjs18' : 'Bitte Startportnummer eingeben.',
'vjs19' : 'Die Startportnummer muss kleiner sein als die Endnummer.',
'vjs23' : 'Ungültige MAC-Adresse; dies ist eine Rundsendeadresse.',
'vjs24' : 'Ungültige MAC-Adresse; dies ist eine Nulladresse.',
'vjs25' : 'Ungültige MAC-Adresse; dies ist eine Multicast-Adresse.',
'vjs26' : 'Ungültige IP-Start- und Endadresse; IP-Endadresse muss größer sein als IP-Startadresse.',
'vjs28' : 'Ungültiges Netzmaskenformat.',
'vjs29' : 'Ungültiges Format, gültige Netzmaske ist hier  255.255.255.0 oder 255.255.255.128 oder 255.255.255.192 oder 255.255.255.224 oder 255.255.255.240 oder 255.255.255.248 oder 255.255.255.252 oder 255.255.255.254',
'vjs30' : 'Ungültige IP-Adresse. Die letzte Zahl kann nicht 0 oder 255 sein.',
'vjs31' : 'Ungültige LAN IP-Adresse. Die erste Zahl kann nicht 127 sein.',
'vjs32' : 'Ungültige LAN IP-Adresse; 0.0.0.0 ist nicht gültig.',
'vjs33' : 'Ungültige LAN IP-Adresse. Adresse muss unter 224.0.0.0 liegen.',
'vjs42' : 'Sie haben keine gültigen Zahlen für die Subnetzmaske eingegeben.',
'vjs45' : 'IP-Adresse angeben',
'vjs46' : 'ist ungültig, bitte zuerst korrigieren!',
'wcc2' : 'Verbindungstyp wählen:',
'wcc13' : 'L2TP',
'wcc14' : 'Manche ISPs verwenden das L2TP-Protokoll, um Abonnenten mit der Zentralstelle zu verbinden. Hierzu müssen Sie ein paar zusätzliche Einstellungen vornehmen, die Sie vom ISP erhalten haben müssten. Bei erfolgreicher Speicherung der Änderungen müsste die Internetstatusanzeige grün leuchten.die Inter',
'wds4_1' : 'Primäre DNS-Adresse',
'wds7' : 'Wenn Sie die automatische DNS-Funktion nicht nutzen möchten, müssen Sie die DNS-Einstellungen eingeben, die Ihnen Ihr ISP zugewiesen hat',
'wds8' : 'Gehen Sie zu den %s Website-Filtern %s, um Änderungen im DNS vorzunehmen, und wählen Sie “Keine Filter” aus.',
'wmc6' : 'Die WAN-MAC-Adresse kann nicht dieselbe sein wie die LAN-MAC-Adresse. Bitte wählen Sie eine andere.',
'wdd9 ' : 'Kein DDNS-Dienst ausgewählt.\n',
'wdd10' : 'Kein DDNS-Dienst ausgewählt und alle Daten auf dieser Seite gehen verloren; fortfahren?',
'wm10b' : 'Nur zur Verwendung bei ISPs, die die L2TP-Verbindungsmethode erfordern.',
'pm' : 'Ihr Dienst konnte das eingegebene Kennwort nicht bestätigen. Bitte überprüfen Sie, ob Sie das Kennwort richtig eingegeben haben.',
'wpp17' : 'L2TP-Konto',
'wpp18' : 'L2TP-Kennwort',
'wpp19' : 'Bitte geben Sie Ihr L2TP-Konto an',
'wpp23' : 'IP-Adressen-Zuteilung',
'wpp24' : 'Statische IP-Adresse verwenden',
'wpp25' : 'Vom ISP dynamisch erhalten',
'wppa7' : 'Eigene IP-Adresse',
'wppa9' : 'Connection ID (Verbindungskennung; optional)',
'wppa13' : 'Bitte geben Sie Ihr PPTP-Konto an.',
'wppa18' : 'Ungültiger Dienstname.',
'ws2' : 'Geben Sie die Daten für die statische IP unten ein, und klicken Sie auf "Änderungen übernehmen".',
'sm_1' : 'Sie haben keine gültige Subnetzmaske eingegeben.',
'ws8' : 'Bitte geben Sie Ihre DNS-Adresseinstellungen im folgenden Bildschirm ein oder überprüfen Sie sie',
'wt2' : 'Durch Klicken auf "Änderungen übernehmen" wird der Router neu gestartet. Wenn der Router neu gestartet worden ist, müssen Sie Folgendes tun',
'wt3' : '1) Ziehen Sie das Stromkabel am Kabelmodem und am Belkin Router ab',
'wt4' : '2) Schließen Sie das Stromkabel erneut an das Kabelmodem an und warten Sie, bis alle Leuchtanzeigen am Modem aufhören zu blinken',
'wt5' : '3) Schließen Sie das Stromkabel erneut an den Belkin Router an',
'wt6' : 'Öffnen Sie zur Bestätigung, dass Sie eine erfolgreiche Verbindung zum Internet hergestellt haben, einen Browser wie Internet Explorer, Firefox oder Safari und überprüfen Sie, ob Sie im Internet surfen können.',
'wlad2' : 'Aktivieren / Deaktivieren',
'wlc2' : 'Hier können Sie die WLAN-Einstellungen des Routers ändern. Klicken Sie auf "Änderungen übernehmen", um die Einstellungen zu speichern.',
'wlcgb' : '802.11b+g',
'wlcg' : '802.11g',
'wlcb' : '802.11b',
'wlc20' : '20 MHz',
'wlc22' : '20/40 MHz',
'wlcoff' : 'AUS',
'wlcngb1' : '802.11b + 802.11g + 1x1 802.11n',
'wlcn1' : '1x1 802.11n',
'wlcngb2' : '802.11b und 802.11g und 802.11n',
'wlcn2' : '802.11n',
'wlcgn' : '802.11g+n',
'wlca' : '802.11a',
'wlcan' : '802.11a und 802.11n',
'wlc26' : 'Durch das Ausblenden Ihres Netzwerknamens wird WPS deaktiviert.',
'wlc27' : 'Durch die Änderung Ihres Sicherheitstypen wird WPS deaktiviert.',
'wlc28' : 'WPS ist aufgrund Ihres <A href=%s><B>Drahtlossicherheitstyps</B></A> deaktiviert.',
'wlc29' : 'WPS ist deaktiviert, weil Sie Ihren Netzwerknamen (SSID) ausgeblendet haben.',
'wlc30' : 'WPS ist deaktiviert, weil Sie Ihren Netzwerknamen (SSID) ausgeblendet haben und aufgrund Ihres <A href=%s><B>Drahtlossicherheitstyps</B></A>.',
'wlc31' : 'Durch das Aktivieren von WPS wird Ihr Netzwerkname (SSID) eingeblendet.',
'wlc32' : 'Durch das Aktivieren von WPS wird Ihr Sicherheitstyp in WPA/WPA2 geändert. Ihr aktuelles Netzwerkkennwort sollte einwandfrei funktionieren.',
'wlc33' : 'Durch die Aktivierung von WPS wird Ihr Netzwerkname (SSID) eingeblendet und Ihr Sicherheitstyp wird in WPA/WPA2 geändert. Ihr aktuelles Netzwerkkennwort sollte einwandfrei funktionieren.',
'wle3a' : 'WPA-PSK',
'wle3b' : 'WPA2-PSK',
'wle3c' : 'WPA-PSK + WPA2-PSK',
'wps1' : 'Wi-Fi Protected Setup (WPS)',
'wps3' : 'Bitte WLAN-Sicherheit konfigurieren',
'wps17' : 'Führen Sie auf Client-Geräten ohne WPS den Belkin Sicherheitsassistenten auf der CD aus oder konfigurieren Sie die folgenden Einstellungen manuell.',
'wps23' : 'WPA+WPA2-Personal (PSK)',
'wps25' : 'TKIP+AES',
'wps27' : 'Netzwerk-Schlüssel (WEP):',
'wps28_1' : 'NULL',
'wle11' : 'Schlüssel 1',
'wle12' : 'Schlüssel 2',
'wle13' : 'Schlüssel 3',
'wle14' : 'Schlüssel 4',
'wpskerr2' : 'Der Schlüssel muss aus 8 bis 63 Zeichen bestehen und kann Leer- und Sonderzeichen oder nur 64 Hexadezimalzeichen (0-F) enthalten!',
'wpskerr4' : 'Sie müssen den Gastschlüssel eingeben',
'wpskerr7' : 'Der Gastschlüssel muss aus 8 Zeichen bestehen',
'wpskerr8' : 'Der Gastschlüssel darf nicht derselbe wie der Netzwerkschlüssel sein',
'wlguest1' : 'Die SSID darf nicht dieselbe wie die Gast-SSID sein',
'wlguest2' : 'Die Gast-SSID darf nicht dieselbe wie die SSID sein',
'rs_crc' : 'Fehler bei der Wiederherstellung < CRC >',
'rs_long' : 'Fehler bei der Wiederherstellung <too long>',
'rs_disposition' : 'Fehler bei der Wiederherstellung <No Content-Disposition>',
'rs_getpid' : 'Fehler bei der Wiederherstellung <Can\'t get pid!>',
'rs_unmatchpid' : 'Fehler bei der Wiederherstellung <Unmatched pid>',
'msg_ddns3 ' : 'Domänennamenfelder dürfen nicht leer sein.\n',
'msg_lan_dhcp1 ' : 'Abrufen von Daten des Gateway.',
'msg_lan_dhcp2 ' : 'Aktualisieren der Konfigurationsdatenbank.',
'msg_wan_stat1 ' : 'IP-Adresse ',
'msg_wan_stat2 ' : ' ist nicht im ',
'msg_wan_stat3 ' : ' Netzwerk.',
'msg_wls_chan2 ' : 'Die Gast-SSID darf nicht NULL sein; es muss ein Wert eingetragen werden!\n',
'fw_not_interrupt ' : 'UNTERBRECHEN SIE DEN ROUTER NICHT, TRENNEN SIE DIE STROMVERBINDUNG NICHT! Dies könnte dazu führen, dass der Router nicht mehr funktioniert.',
'msg_invalid_char ' : 'Ungültige(s) Zeichen gefunden. Die folgenden Zeichen sind gültig: 0-9, a-z, A-Z, `~!@#$%^&*()_-+=|\\{}[]:";\',.<>/?',
'msg_invalid_domain_char ' : 'Ungültiger lokaler Domänenname'+': ~!@#$%^&*()=+{}[]|":;\\\'?/<>,`',
'msg_invalid_char_1 ' : 'Ungültige(s) Zeichen gefunden. Gültige Zeichen sind Buchstaben und Zahlen. Die folgenden Symbole sind unzulässig: `~!@#$%^&*()_+[]{}\\|;:\'"<>/?.,',
'msg_hostIP_invalid ' : 'Die Host-IP-Adresse ist nicht gültig Es sollte nicht die LAN IP-Adresse des Routers sein.\n',
'msg_dmzIP ' : 'DMZ IP-Adresse.',
'msg_blank ' : ' darf nicht leer sein.\n',
'msg_space ' : 'Leere Felder oder Leerzeichen sind bei %s nicht zulässig\n',
'msg_blank_in ' : 'Leere Felder sind bei %s nicht zulässig\n',
'msg_allspaces ' : '%s kann nicht nur aus Leerzeichen bestehen\n',
'msg_invalid ' : 'Ungültiges Zeichen oder Zeichen in %s\nFolgende Zeichen sind gültig: \n%s\n\n',
'msg_check_invalid ' : '%s enthält eine ungültige Zahl\n',
'msg_valid_range ' : '%s ist ungültig Der gültige Bereich ist %s bis %s\n',
'msg_invalid_mac ' : 'Ungültige MAC-Adresse.\n',
'msg_multi_mac' : 'Die MAC-Adresse kann keine Multicast-Adresse sein.\n',
'msg_confirmDefault ' : 'Warnung!\nDurch die Wiederherstellung der Werkseinstellungen werden die aktuellen Einstellungen gelöscht.\nMöchten Sie den Vorgang fortsetzen?',
'Allowed_Services' : 'Zugelassene Dienste',
'Allowing_Url' : 'Zugriff auf Websites über URL-Adresse erlauben ',
'Allowing_Keyword' : 'Zugriff auf Websites über Stichwörter erlauben',
'wipv63' : 'Mit Ihrem Router verbundene Geräte können über systemeigene IPv6-Pakete miteinander kommunizieren. IPv6-Pakete im LAN werden automatisch an alle LAN-Schnittstellen gesendet (Ethernet-Schnittstellen sowie das 2,4-GHz- und das 5-GHz-WLAN).',
'wipv64' : 'Wenn IPv6-Passthrough aktiviert ist, werden die IPv6-Pakete auch an die WAN-Schnittstelle kopiert.(In diesem Fall wird eine direkte, ungesicherte Verbindung zum Internet hergestellt.)',
'wipv65' : 'Bitte wenden Sie sich an Ihren Internetprovider, um Informationen über dessen IPv6-Unterstützung zu erhalten.',
'wipv67' : 'Internet IPv6',
'wipv68' : 'Ihr Netzwerk ist IPv6-kompatibel.',
'wipv69' : 'Passthrough',
'mf1' : 'Auf diesen Seiten können Sie das Verhalten Ihres Routers anpassen, wenn bestimmte Datenverkehrstypen genutzt werden.',
'mf2' : 'Optimieren Sie Ihre Internetverbindung für verschiedene Datenverkehrstypen.',
'mf3' : 'Sehen Sie, wie Ihr Router benutzt wird.',
'mf8' : 'Aufgezeichnet am %s',
'mf10' : 'Download',
'mf11' : 'Upload',
'mf12' : 'Geschwindigkeit',
'mf15' : 'Einstellungen übernehmen',
'mf18' : 'Geben Sie eine Zahl zwischen {0.1-%s} ein.',
'mf20' : 'Nur zwischen {0.1-%s}.',
'mf26' : 'Manuell aufgezeichnet am %s',
'mf32' : 'oder',
'mf44' : 'Abhängig vom Internetverkehr und anderen Umständen sind die Ergebnisse des automatischen Geschwindigkeitstests möglicherweise nicht 100 % akkurat. Um die Ergebnisse zu vergleichen, besuchen Sie eine Website für Geschwindigkeitstests oder nehmen Sie Kontakt mit Ihrem Internetprovider auf, um Ihre Internetgeschwindigkeit zu überprüfen. Wenn die Ergebnisse nicht übereinstimmen, können Sie die Werte manuell eingeben.',
'media_dlna18' : 'Unbenannt',
'media_dlna21' : 'Sie haben mehr Medien als Ihr Router indexieren kann; deshalb übermitteln wir die ersten 12000 Elemente.',
'errSubnetMaskInvalid_2' : 'Die Subnetzmaske sieht nicht wie eine Subnetzmaske aus. Bitte überprüfen Sie den Wert.',
'htWAN_L2TP' : 'L2TP-Einstellungen',
'htWAN_L2TPContent' : 'Manche ISPs verwenden das L2TP-Protokoll, um Abonnenten mit der Zentralstelle zu verbinden. Hierzu müssen Sie ein paar zusätzliche Einstellungen vornehmen, die Sie vom ISP erhalten haben müssten. Bei erfolgreicher Speicherung der Änderungen müsste die Internetstatusanzeige grün leuchten.die Inter',
'p400t001_error' : 'Noch schnellerer Verbindungsaufbau.',
'p400t018_error' : 'Warum sollte ich den Namen ändern?',
'p400t019_error' : 'Sie sehen diese Informationen, wenn Sie auf einem anderen Gerät nach Ihrem Netzwerk suchen. Ein eindeutiger Netzwerkname ist einfacher zu finden und zu merken. Wenn Ihre Drahtlosgeräte vorher mit einem anderen Router verbunden waren, müssen Sie die auf dem Gerät gespeicherten Zugangsdaten nicht ändern, wenn Sie hier denselben Netzwerknamen und dasselbe Kennwort verwenden. Die Geräte stellen automatisch eine Verbindung her. ',
'dhToggleBand2G' : '2,4 GHz anzeigen',
'772' : 'Durch Klicken auf "Änderungen übernehmen" wird der Router neu gestartet. Wenn der Router neu gestartet worden ist, müssen Sie Folgendes tun',
'773' : '1) Ziehen Sie das Stromkabel am Kabelmodem und am Belkin Router ab',
'774' : '2) Schließen Sie das Stromkabel erneut an das Kabelmodem an und warten Sie, bis alle Leuchtanzeigen am Modem aufhören zu blinken',
'dft001' : 'Scheinbar besteht keine Verbindung',
'dft002' : 'Wenn Sie Unterstützung brauchen und ein verbundenes Gerät haben, besuchen Sie <strong>help.belkin.com</strong>.',
'gtNoSecCard     ' : 'Bitte notieren Sie sich Ihren Netzwerknamen und Ihr Kennwort, damit Sie später darauf zurückgreifen können.',
'gtFWUpdateMobileError' : 'Zurzeit können keine Firmware-Dateien von Mobilgeräten hochgeladen werden.',
'gtSettingsMobileError' : 'Zurzeit können keine Einstellungsdateien von Mobilgeräten hochgeladen werden.',
'gtMoreFromInternet' : 'Stellen Sie eine Internetverbindung her, um weitere Sprachoptionen zu erhalten. ',
'gtCantConnect' : 'Wir können keine Verbindung zum Internet herstellen.',
'p802t004' : 'Gehen Sie zum WLAN-Menü Ihres Geräts',
'p803t004' : 'Gehen Sie zum WLAN-Menü Ihres Geräts',
'PIC-S1t001' : 'Alle Geräte blockieren',
'gtUnnamedDevice' : 'Unbenanntes Gerät',
'gtIC' : 'Internetkontrolle',
'errDefaultGatewayEmpty' : 'Die Standardgatewayadresse kann nicht leer sein.',
'errDefaultGatewayInvalid' : 'Die Standardgatewayadresse muss aus vier Zahlen (0-255), durch Punkte getrennt, bestehen. Bitte überprüfen Sie den Wert.',
'errDNSServerEmpty' : 'Die DNS-Serveradresse kann nicht leer sein.',
'errDNSServerInvalid' : 'Die DNS-Serveradresse muss aus vier Zahlen (0-255), durch Punkte getrennt, bestehen. Bitte überprüfen Sie den Wert.',
'errIpAddressEmpty' : 'Die IP-Adresse kann nicht leer sein.',
'errIpAddressInvalid' : 'Die IP-Adresse muss aus vier Zahlen (0-255), durch Punkte getrennt, bestehen. Bitte überprüfen Sie den Wert.',
'errorGenericCommitError' : 'Es ist ein Fehler aufgetreten.  Bitte korrigieren Sie die nachstehenden Einstellungen und versuchen Sie es erneut.',
'errorSSIDEmpty' : 'Bitte geben Sie einen Namen für Ihr WLAN ein.',
'errorSSIDInvalidChars' : 'Ihr Netzwerkname darf nur Buchstaben, Zahlen, Interpunktion und Leerzeichen enthalten.',
'errorSSIDTooLong' : 'Ihr Netzwerkname muss kürzer als 32 Zeichen sein.',
'errorWEPPasswordEmpty' : 'Bitte geben Sie ein Kennwort für Ihr WLAN ein.',
'errorWEPPasswordInvalidChars' : 'Ihr Netzwerkkennwort darf nur Zahlen und die Buchstaben A bis F enthalten.',
'errorWEPPasswordInvalidLength' : 'Ihr Netzwerkkennwort muss zwischen 10 bis 26 Zeichen lang sein.',
'errorWPAPasswordEmpty' : 'Bitte geben Sie ein Kennwort für Ihr WLAN ein.',
'errorWPAPasswordInvalidChars' : 'Ihr Netzwerkkennwort darf nur Buchstaben, Zahlen, Interpunktion und Leerzeichen enthalten.',
'errorWPAPasswordInvalidLength' : 'Ihr Netzwerkkennwort muss 8 bis 63 Zeichen lang sein.',
'errPasswordEmpty' : 'Bitte geben Sie Ihr Kennwort ein.',
'errPasswordInvalid' : 'Ihr Benutzername darf nur Buchstaben, Zahlen, Interpunktion und Leerzeichen enthalten.',
'errPasswordTooLong' : 'Ihr Kennwort darf nicht länger als 64 Zeichen sein.',
'errServAddressEmpty' : 'Bitte geben Sie eine Serviceadresse ein.',
'errSubnetMaskEmpty' : 'Die Subnetzmaske kann nicht leer sein.',
'errSubnetMaskInvalid' : 'Die Subnetzmaske muss aus vier Zahlen (0-255), durch Punkte getrennt, bestehen. Bitte überprüfen Sie den Wert.',
'errUsernameInvalid' : 'Ihr Benutzername darf nur Buchstaben, Zahlen, Interpunktion und Leerzeichen enthalten.',
'errUsernameTooLong' : 'Ihr Benutzername muss kürzer als 64 Zeichen sein.',
'errVCIInvalid' : 'Bitte geben Sie eine Zahl zwischen 0 und 65535 ein. Ihr ISP kann Ihnen mitteilen, welchen Wert Sie eingeben müssen.',
'errVPIInvalid' : 'Bitte geben Sie eine Zahl zwischen 0 und 255 ein. Ihr ISP kann Ihnen mitteilen, welchen Wert Sie eingeben müssen.',
'p802t003' : 'Da manche Einstellungen geändert worden sind, müssen Sie Ihr WLAN möglicherweise erneut auswählen:',
'p802t011' : 'Da manche Einstellungen geändert worden sind, müssen Sie Ihr WLAN möglicherweise erneut auswählen:',
'dft003' : 'Benötigen Sie Unterstützung?',
'dft004' : 'Haben Sie eine Frage oder benötigen Sie Unterstützung? In unserem Onlinehilfecenter können Sie rund um die Uhr Hilfe erhalten.<br><a href="http://www.belkin.com/support/" id="dfBelkinHelp">Belkin Hilfecenter &rarr;</a>',
'dhChangeSSID' : 'Ändern &raquo;',
'dhPassLabel' : 'Kennwort:',
'dhPasswordObscured24' : 't********',
'dhShow' : 'Anzeigen:',
'dhSSID24' : '{blahblah}',
'dhToggle24' : '2,4 GHz',
'dhToggle5' : '5,0 GHz',
'DownSpeed' : '32.6',
'errUsernameEmpty' : 'Bitte geben Sie Ihren Benutzernamen ein.',
'gt10am' : '10:00',
'gt10pm' : '22:00',
'gt11am' : '11:00',
'gt11pm' : '23:00',
'gt1am' : '01:00',
'gt1amNextDay' : '01:00 am nächsten Tag',
'gt1pm' : '13:00',
'gt24ghz' : '2,4 GHz',
'gt24GKey' : '2,4-GHz-Schlüssel',
'gt24GName' : '2,4-GHz-SSID',
'gt24PSK' : 'Kennwort',
'gt24Sec' : 'WPA2',
'gt24SSID' : '12345678',
'gt2am' : '02:00',
'gt2pm' : '14:00',
'gt3am' : '03:00',
'gt3pm' : '15:00',
'gt4am' : '04:00',
'gt4pm' : '16:00',
'gt50ghz' : '5 GHz',
'gt5am' : '05:00',
'gtGuestKey' : 'Gastschlüssel',
'gt5GMedia' : 'Ihr 5-GHz-Frequenzband hat denselben Namen, jedoch mit der Erweiterung „.media“.',
'gtGuestName' : 'Gast-SSID',
'gt5pm' : '17:00',
'gt6am' : '06:00',
'gt6pm' : '18:00',
'gt7am' : '07:00',
'gt7pm' : '19:00',
'gt8am' : '08:00',
'gt8pm' : '20:00',
'gt9am' : '09:00',
'gt9pm' : '21:00',
'gtAccessControl' : 'Internet-Kindersicherung',
'gtAccessPoint' : 'Als Access Point verwenden',
'gtADSL' : 'ADSL',
'gtAdvSettings' : 'Erweiterte Einstellungen',
'gtAllElseFails' : 'Falls alles andere fehlschlägt, wenden Sie sich an den Belkin Support in&nbsp;',
'gtAndroidConnect01' : 'Android-Telefone und -Tablets',
'gtAndroidConnect02' : 'Ihr Gerät bietet ein Menü der verfügbaren WLANs in der Einstellungen-App.',
'gtAndroidConnect03' : 'Öffnen Sie die <strong>Einstellungen</strong>-App und wählen Sie <strong>WLAN und Netzwerk</strong>.',
'gtAndroidConnect04' : 'Wählen Sie dann <strong>WLAN</strong>, um eine Liste der verfügbaren Netzwerke anzuzeigen.',
'gtAndroidConnect05' : 'Wählen Sie <strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong>. <!-- IF NOT OPEN --> <span tid="gtNotOpen">Wenn Sie dazu aufgefordert werden, geben Sie Ihr Netzwerkkennwort ein <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>.</span> <!-- /IF -->',
'gtAt' : 'um',
'gtAttenuation' : 'Dämpfung',
'gtAustralia' : 'Australien',
'gtBackToDashboard' : '&larr; Zurück zum Dashboard',
'gtBelkin' : 'Belkin',
'gtBootLoader' : 'Startladeprogramm',
'gtCantConnect' : 'Wir können keine Verbindung mit Ihrem ISP herstellen.',
'gtCantConnectNoResponse' : 'Wir können keine Verbindung mit dem Internet herstellen; es gab keine Reaktion von Ihrem ISP.',
'gtChina' : 'China',
'gtClientList' : 'Angeschlossene Geräte',
'gtClose' : 'Schließen',
'gtConfig' : 'Konfigurieren',
'gtConfigureRouter' : 'Router konfigurieren',
'gtConnDevices' : 'Angeschlossene Geräte',
'gtConnectingToNew' : 'Verbindung mit Ihrem neuen Netzwerk',
'gtConnectionDet' : 'Verbindungsdetails',
'gtConnType' : 'Verbindungstyp',
'gtContentFiltering' : 'Website-Filter',
'gtCopyright' : 'Copyright &copy; 2012. Belkin, Alle Rechte vorbehalten.',
'gtCurrTimezone' : 'Europa/Helsinki {REPLACE THIS SPAN WITH DETECTED Belkin TZ ID description}',
'gtDashboard' : '&larr; Dashboard',
'gtDashTitle' : 'Belkin Router Dashboard',
'gtDataRate' : 'Datenrate',
'gtDDNS' : 'DDNS',
'gtDHCPList' : 'Angeschlossene Geräte',
'gtDHCPServer' : 'DHCP-Server',
'gtDMZ' : 'DMZ',
'gtDNS' : 'DNS',
'gtDown' : 'Nach unten',
'gtDownloadSpeed' : 'Download-Geschwindigkeit',
'gtEncap' : 'Kapselung:',
'gtFileInstallError' : 'Diese Datei konnte nicht installiert werden; möglicherweise ist der Dateityp falsch',
'gtFileLoadError' : 'Diese Datei konnte nicht geladen werden; möglicherweise ist der Dateityp falsch',
'gtFirewall' : 'Firewall',
'gtFirmware' : 'Firmware',
'gtFirmwareUpdate' : 'Firmware-Update',
'gtFrance' : 'Frankreich',
'gtFreshest' : 'Wir rufen die neueste Version unserer Firmware ab...',
'gtFrom' : 'Von:',
'gtFWUpdate' : 'Firmware-Update',
'gtFWUpToDate' : 'Ihre Firmware ist jetzt auf dem neuesten Stand.',
'gtGermany' : 'Deutschland',
'gtGuestAccess' : 'Gastzugriff',
'gtGuestNetwork' : 'Gastnetzwerk',
'gtHomeNetwork' : 'Heimnetzwerk',
'gtIfYouKnowConnection1' : 'Wenn Sie Ihren Verbindungstyp kennen, können Sie <a href="700-SelectConnection.htm" id="ISP1a010">ihn manuell einrichten &raquo;</a>',
'gtIfYouKnowConnection2' : 'Wenn Sie Ihren Verbindungstyp kennen, können Sie <a href="700-SelectConnection.htm" id="ISP2a010">ihn manuell einrichten &raquo;</a>',
'gtIfYouKnowConnection3' : 'Wenn Sie Ihren Verbindungstyp kennen, können Sie <a href="700-SelectConnection.htm" id="ISP3a010">ihn manuell einrichten &raquo;</a>',
'gtIfYouKnowConnection4' : 'Wenn Sie Ihren Verbindungstyp kennen, können Sie <a href="700-SelectConnection.htm" id="ISP4a010">ihn manuell einrichten &raquo;</a>',
'gtIfYouKnowConnection4a' : 'Wenn Sie Ihren Verbindungstyp kennen, können Sie <a href="700-SelectConnection.htm" id="ISP4aa010">ihn manuell einrichten &raquo;</a>',
'gtIfYouKnowConnection5' : 'Wenn Sie Ihren Verbindungstyp kennen, können Sie <a href="700-SelectConnection.htm" id="ISP5a010">ihn manuell einrichten &raquo;</a>',
'gtIfYouKnowConnection6' : 'Wenn Sie Ihren Verbindungstyp kennen, können Sie <a href="700-SelectConnection.htm" id="ISP6a010">ihn manuell einrichten &raquo;</a>',
'gtIfYouKnowConnection7' : 'Wenn Sie Ihren Verbindungstyp kennen, können Sie <a href="700-SelectConnection.htm" id="ISP7a010">ihn manuell einrichten &raquo;</a>',
'gtIntellistream' : 'Intellistream',
'gtInterleavePath' : 'Überlappender Pfad',
'gtInternetSettings' : 'Internet-Einstellungen',
'gtIOSConnect01' : 'iPhone, iPad und iPod touch',
'gtIOSConnect02' : 'Ihr Gerät bietet ein Menü der verfügbaren WLANs in der Einstellungen-App.',
'gtIOSConnect03' : 'Öffnen Sie die <strong>Einstellungen</strong>-App und wählen Sie <strong>WLAN</strong>.',
'gtIOSConnect04' : 'Wählen Sie auf der Netzwerkliste <strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong> aus.  <!-- IF NOT OPEN --> <span tid="gtNotOpen">Wenn Sie dazu aufgefordert werden, geben Sie Ihr Netzwerkkennwort ein <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>.</span> <!-- /IF -->',
'gtIPv6' : 'IPv6',
'gtIPV6Connection' : 'IPv6-Verbindung',
'gtISP' : 'ISP-Verbindungstyp',
'gtJapan' : 'Japan',
'gtLANIP' : 'LAN-IP-Adresse',
'gtLANMAC' : 'LAN/WLAN MAC',
'gtLANSettings' : 'LAN-Einstellungen',
'gtLANSubnet' : 'LAN-Subnetzmaske',
'gtLLC' : 'LLC',
'gtLoadPrevSettings' : 'Vorherige Einstellungen laden',
'gtLocalNetwork' : 'Lokales Netzwerk',
'gtLocalSettings' : 'Lokale Netzwerkeinstellungen',
'gtLocked' : 'gesperrt',
'gtMACAddress' : 'MAC-Adresse',
'gtMACAddressFiltering' : 'MAC-Adressfilter',
'gtMacConnect01' : 'Mac(r) OS X',
'gtMacConnect02' : 'Ihr Computer zeigt rechts in der Menüleiste ein Menü mit verfügbaren WLANs an.',
'gtMacConnect03' : 'Klicken Sie auf das Funkwellensymbol.',
'gtMacConnect04' : 'Wählen Sie auf der Netzwerkliste <strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong> aus.  <!-- IF NOT OPEN --> <span tid="gtNotOpen">Wenn Sie dazu aufgefordert werden, geben Sie Ihr Netzwerkkennwort ein <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>.</span> <!-- /IF -->',
'gtMaybeLater' : 'Vielleicht später',
'gtMbitPerSec' : 'Mbit/s',
'gtMeaning' : 'Was bedeutet das?',
'gtMedia' : 'Medien',
'gtMediaServer' : 'Medienserver',
'gtmidnight' : 'Mitternacht',
'gtModel' : 'Modell',
'gtName' : 'Name',
'gtNeedMoreHelp' : 'Benötigen Sie mehr Hilfe?',
'gtNetName' : 'Netzwerkname',
'gtNewFWAvailableModem' : 'Wir haben neue Firmware für Ihr Modem.',
'gtNewFWAvailableRouter' : 'Wir haben neue Firmware für Ihren Router.',
'gtNewFWAvailableRouterAndModem' : 'Wir haben neue Firmware für Ihren Router und Ihr Modem.',
'gtNext' : 'Weiter',
'gtNo' : 'Nein',
'gtNoiseMargin' : 'Rauschabstand',
'gtNoMyNet' : 'Ich sehe mein Netzwerk nicht',
'gtNoon' : 'Mittag',
'gtNoSecCard' : 'Bitte notieren Sie sich Ihren Netzwerknamen und Ihr Kennwort, damit Sie später darauf zurückgreifen können.',
'gtNotOpen' : 'Wenn Sie dazu aufgefordert werden, geben Sie das Netzwerkkennwort <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong> ein.',
'gtNZ' : 'Neuseeland',
'gtOffline' : 'Offline',
'gtOnline' : 'Online',
'gtOptionalSoftware' : 'Optionale Software',
'gtOptionalSW' : 'Optionale Software',
'gtOptSW' : 'Optionale Software',
'gt-OR-' : '-ODER-',
'gtOther' : '...',
'gtOutputPower' : 'Ausgangsleistung',
'gtParentalControls' : 'Kindersicherung',
'gtPass' : 'Kennwort:',
'gtPIC' : 'Internet-Kindersicherung',
'gtPICOtherTimes' : 'Zu allen anderen Zeiten hat dieses Gerät keinen Zugriff auf das Internet.',
'gtPleaseCallISP' : 'Bitte wenden Sie sich an Ihren Internet-Provider',
'gtPortForwarding' : 'Portweiterleitung',
'gtPrint' : 'Drucken',
'gtReadAllAboutIt' : 'Weitere Hilfe:',
'gtReconnectingHell' : 'Verbindung wird wiederhergestellt',
'gtRegister' : 'Registrieren',
'gtRegistration' : 'Registrierung',
'gtRestartRouter' : 'Router neu starten',
'gtRestoreDef' : 'Standardeinstellungen wiederherstellen',
'gtRestoreFactDefault' : 'Werkseinstellungen wiederherstellen',
'gtRestoreFactDefaults' : 'Werkseinstellungen wiederherstellen',
'gtRestoreSettigns' : 'Einstellungen wiederherstellen',
'gtRetest' : 'Verbindung erneut testen',
'gtRouterDetails' : 'Router-Details',
'gtRouterInfo' : 'Router-Info',
'gtSave' : 'Speichern',
'gtSaveCurrentSettings' : 'Aktuelle Einstellungen speichern',
'gtSaved' : 'Unbenanntes Gerät gespeichert',
'gtSaveRestore' : 'Einstellungen speichern/wiederherstellen',
'gtSaveRestoreSettings' : 'Einstellungen speichern/wiederherstellen',
'gtSaveSettings' : 'Einstellungen speichern/sichern',
'gtSecLog' : 'Sicherheitsprotokoll',
'gtSecurity' : 'Sicherheit',
'gtSelectLang' : 'Sprache auswählen:',
'gtSelfHeal' : 'Self-Healing',
'gtSelfHealing' : 'Self-Healing',
'gtSerialSupport' : 'Auf der nächsten Seite zeichnen wir die Seriennummer Ihres Routers für Supportzwecke auf.',
'gtShowtime' : 'Zeitanzeige',
'gtSpeedTestResults' : 'Letzte Kontrolle: vor 1 Tag um 15:57 Uhr',
'gtStaticRouting' : 'Statisches Routing',
'gtStatus' : 'Status',
'gtSystemSettings' : 'Systemeinstellungen',
'gtTo' : 'An:',
'gtTraffStats' : 'Datenverkehrsstatistik',
'gtTryAgain' : 'Erneut versuchen',
'gtUnlocked' : 'entsperrt',
'gtUp' : 'Nach oben',
'gtUpdate' : 'Aktualisieren',
'gtUpdateNoPowerModem' : 'Wir aktualisieren Ihr Modem mit der neuen Firmware. Bitte währenddessen nicht ausschalten.',
'gtUpdateNoPowerRouter' : 'Wir aktualisieren Ihren Router mit der neuen Firmware. Bitte währenddessen nicht ausschalten.',
'gtUploadSpeed' : 'Upload-Geschwindigkeit',
'gtUSA' : 'die Vereinigten Staaten',
'gtUserName' : 'Benutzername:',
'gtUtils' : 'Dienstprogramme',
'gtVCI' : 'VCI:',
'gtVCMUX' : 'VC/MUX',
'gtVPI' : 'VPI:',
'gtWAN' : 'WAN-Einstellungen',
'gtWANDNS' : 'DNS-Adresse',
'gtWANGateway' : 'WAN-Gateway',
'gtWANIP' : 'WAN-IP-Adresse',
'gtWANMAC' : 'WAN MAC-Adresse',
'gtWANPingBlocking' : 'WAN-Ping-Blockierung',
'gtWANSubnet' : 'WAN-Subnetzmaske',
'gtWebsiteFilter' : 'Website-Filter',
'gtWelcome' : 'Willkommen',
'gtWiFi' : 'WLAN',
'gtWifiSettings' : 'Ihre WLAN-Einstellungen sind erfolgreich geändert worden.',
'gtWinConnect01' : 'Windows 7 oder 8',
'gtWinConnect02' : 'Ihr Computer zeigt rechts in der Taskleiste ein Menü mit verfügbaren WLANs an.',
'gtWinConnect03' : 'Klicken Sie mit der rechten Maustaste auf das Symbol mit Signalstärkenbalken.',
'gtWinConnect04' : 'Wählen Sie <strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong>. <!-- IF NOT OPEN --> <span tid="gtNotOpen">Wenn Sie dazu aufgefordert werden, geben Sie Ihr Netzwerkkennwort ein <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>.</span> <!-- /IF -->',
'gtWinConnect05' : 'Windows Vista und Windows XP',
'gtWinConnect06' : 'Ihr Computer zeigt rechts in der Taskleiste ein Menü mit verfügbaren WLANs an.',
'gtWinConnect07' : 'Klicken Sie mit der rechten Maustaste auf das Symbol, das einen Computer mit Funkwellen (XP) oder zwei Computer (Windows Vista) anzeigt.',
'gtWinConnect08' : 'Wählen Sie <strong>Verfügbare Drahtlosnetzwerke anzeigen</strong> (XP) oder <strong>Verbindung mit einem Netzwerk herstellen</strong> (Vista) in dem dann angezeigten Menü aus.',
'gtWinConnect09' : 'Wählen Sie <strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong>. <!-- IF NOT OPEN --> <span tid="gtNotOpen">Wenn Sie dazu aufgefordert werden, geben Sie Ihr Netzwerkkennwort ein <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>.</span> <!-- /IF -->',
'gtWireless' : 'WLAN',
'gtWiring' : 'Verkabelung',
'gtWPSShort' : 'WPS',
'gtWPS' : 'Wi-Fi Protected Setup',
'gtYes' : 'Ja',
'htFWUpdate' : 'Was sind Firmware-Updates?',
'htFWUpdateContent' : 'Von Zeit zu Zeit veröffentlicht Belkin neue Versionen des Router-Betriebsprogramms. Diese Updates enthalten bestimmte Verbesserungen und Problemlösungen für Ihren Router.<br><br>HINWEIS: Bitte sichern Sie Ihre aktuellen Einstellungen, bevor Sie die Firmware-Version aktualisieren.',
'htParent' : 'Was ist der Website-Filter?',
'htPIC' : 'Ihre Internetkontrolle',
'htPICBlocked' : 'Der Internetzugriff ist unterbrochen',
'htPICBlockedContent' : 'Bitte reaktivieren Sie den Zugriff, wenn Sie bereit sind, allen Geräten die Internetverbindung erneut zur Verfügung zu stellen.',
'htPICContent' : 'Mit Ihrer Internetkontrolle können Sie Zeiten einstellen, zu denen der Internetzugriff für jedes Gerät blockiert wird.',
'htSaveRestore' : 'Was bedeutet Einstellungen speichern, laden oder wiederherstellen?',
'htSaveRestoreContent' : 'Ihr Router speichert die Einstellungen für Dinge wie den Netzwerknamen, das Kennwort, etc. Diese Einstellungen können zur Sicherung gespeichert werden und wieder auf den Router geladen werden. Die Werkseinstellungen des Routers können auch wiederhergestellt werden.',
'htSaveRestoreContentMobile' : '<br>* Auf iPhone, iPad und iPod touch können Einstellungsdateien nicht gespeichert oder geladen werden. Verwenden Sie ein anderes Gerät, z. B. ein Notebook, um die Einstellungsdatei zu speichern und zu laden.',
'ISP1t003' : 'Sagen Sie ihnen, dass Ihr Router eine IP-Adresse erhalten konnte, die DNS aber nicht funktioniert.',
'ISP1t007' : 'DNS übersetzt Namen wie „belkin.com“ in nummerische Adressen (IP-Adressen), die Computer verwenden, um im Internet zu navigieren. Ihr Router hat eine IP-Adresse, das heißt, er ist mit dem Internet verbunden, aber das DNS funktioniert nicht, daher können Sie nicht surfen. Das bedeutet, dass etwas bei Ihrem ISP nicht stimmt.  <span class="nub"></span>',
'ISP2t003' : 'Sagen Sie ihnen, dass Ihr Router eine IP-Adresse erhalten konnte und DNS funktioniert, aber wir keinen Ping mehr ausführen können.',
'ISP2t007' : 'Wir können einen Ping zu anderen Systemen im Internet ausführen, um zu testen, ob wir mit ihnen kommunizieren können oder nicht. DNS übersetzt Namen wie „belkin.com“ in nummerische Adressen (IP-Adressen), die Computer verwenden, um im Internet zu navigieren. Ihr Router hat eine IP-Adresse. Das bedeutet, er ist mit dem Internet verbunden und das von Ihrem ISP angegebene DNS funktioniert, aber wir können keinen Ping durchführen. Dies weist darauf hin, dass etwas bei Ihrem ISP nicht stimmt. <span class="nub"></span>',
'ISP3t004' : 'Sagen Sie ihnen, dass Ihr Benutzername und Ihr Kennwort akzeptiert wurden, aber Sie immer noch keine Internetverbindung haben.',
'ISP3t007' : 'Wir können einen Ping zu anderen Systemen im Internet ausführen, um zu testen, ob wir mit ihnen kommunizieren können oder nicht. Ihr ISP hat Ihren Benutzernamen und Ihr Kennwort akzeptiert, aber wir können keinen Ping ausführen, daher können Sie nicht surfen. Dies weist darauf hin, dass etwas bei Ihrem ISP nicht stimmt.  <span class="nub"></span>',
'ISP4t003' : 'Sagen Sie ihnen, dass Ihr Benutzername und Ihr Kennwort nach einigen Versuchen nicht akzeptiert wurde.',
'ISP4t007' : 'Ihre Internetverbindung erfordert einen Benutzernamen und ein Kennwort, aber Ihr ISP hat Ihre Eingabe nicht akzeptiert. Sie können sicherstellen, dass Sie die richtigen Informationen haben.  <span class="nub"></span>',
'ISP5t003' : 'Sagen Sie ihnen, dass Sie eine dynamische Verbindung gewählt haben, aber keine IP-Adresse erhalten konnte.',
'ISP5t007' : 'Eine IP-Adresse identifiziert einen Router oder ein anderes Gerät im Internet. Ihr ISP gibt Ihrem Router keine Adresse und ohne eine IP-Adresse können Sie sich nicht verbinden. Dies weist darauf hin, dass etwas bei Ihrem ISP nicht stimmt oder Ihre Verbindung keine dynamische Verbindung ist.  <span class="nub"></span>',
'ISP6t003' : 'Sagen Sie ihnen, dass Sie eine statische Verbindung gewählt haben, aber nicht ins Internet gehen können.',
'ISP6t007' : 'Wir verwenden eine statische Verbindung, wenn Ihr ISP Ihnen eine oder mehrere spezifische IP-Adressen zur Verwendung gegeben hat.  <span class="nub"></span>',
'ISP7t003' : 'Sagen Sie Ihnen, dass Ihre VPI/VCI-Einstellungen nicht funktionieren und Sie die korrekten Zahlen von ihnen benötigen.',
'ISP7t007' : 'VPI und VCI teilen Ihrem Router mit, welcher Pfad verwendet werden muss, um mit Ihrem ISP zu kommunizieren. Wir konnten die richtigen Einstellungen nicht erkennen. <span class="nub"></span>',
'Network24Passkey' : '{REPLACE WITH 2.4 PASSWORD}',
'Network24SSID' : '{REPLACE WITH 2.4 SSID}',
'p100t002' : 'Verbindung mit dem Internet.',
'p100t003' : 'Sie sind mit einem neuen Router verbunden, den Sie dazu bringen müssen, mit Ihrem Internetprovider zu kommunizieren.',
'p100t004' : 'Verbindung mit dem Internet.',
'p100t005' : 'Sie sind mit einem neuen Router verbunden, den Sie dazu bringen müssen, mit Ihrem Internetprovider zu kommunizieren.',
'p100t007' : 'Erkennung meiner Verbindung',
'p100t008' : 'Wenn Sie Ihren Verbindungstyp kennen, können Sie <a href="700-SelectConnection.htm" id="p100a009" tid="p100t009">ihn manuell einstellen &raquo;</a> oder direkt zum <a href="000-Dashboard.htm" id="p100a010" tid="p100t010">Dashboard &raquo;</a> gehen.',
'p100t009' : 'manuell einrichten &raquo;',
'p100t010' : 'Dashboard &raquo;',
'p100t013' : 'Gerade jetzt zeigen wir die Seiten in&nbsp;',
'p100t024' : 'Fast automatische Einrichtung',
'p100t025' : 'Zuerst überprüfen wir automatisch Ihre Verkabelung und möchten wissen, welche Art von Verbindung Sie zu ihrem Internetprovider (ISP) haben. Hier sollten Sie nicht viel tun müssen. Anschließend stellen wir sicher, dass Ihre Routersoftware auf dem neuesten Stand ist.<span class="nub"></span>',
'p1010MRt001' : 'Wir haben Probleme, mit Ihrem Modem zu kommunizieren.',
'p1010MRt002' : 'Wir denken, dass es sich um ein Verkabelungsproblem handelt.',
'p1010MRt003' : 'Gehen Sie nach folgenden Schritten vor, um das Problem zu beheben:',
'p1010MRt004' : 'Stellen Sie sicher, dass der Modem-Router mit Ihrem Telefonanschluss mit Internetverbindung verbunden ist. Ein Netzwerkkabel muss vom ADSL-Anschluss Ihres Modem-Routers (dem grauen Anschluss an der Oberseite) zum Telefonanschluss führen.',
'p1010MRt005' : 'Stellen Sie sicher, dass Ihr Modem eingeschaltet ist. Sein Netzadapter sollte an beiden Enden angeschlossen sein und ein oder mehrere Lämpchen am Modem sollten leuchten.',
'p1010MRt006' : 'Ein Netzwerkkabel sollte Ihr Modem mit dem gelben Anschluss an Ihrem Router verbinden. Dieses Kabel überträgt das Signal von Ihrem Modem zum Router. Es ist zur Herstellung einer Internetverbindung erforderlich.',
'p1010MRt007' : 'Wenn dies beides so ist, wie es sein sollte, können Sie versuchen, Ihr Modem neu zu starten, indem Sie es von der Stromversorgung trennen, fünfzehn Sekunden warten und es dann wieder anschließen. Wenn Ihr Modem mit einem Akku ausgestattet ist, müssen Sie die Reset-Taste des Modems suchen und drücken.',
'p1010MRt008' : 'So sollten diese Verbindungen aussehen:',
'p1010MRt009' : 'Wir werden weiterhin auf eine Verbindung warten, während Sie prüfen.',
'p1010MRt010' : 'Das häufigste Problem bei der Verkabelung tritt zwischen dem Modem und dem Router auf. Es ist wichtig, beide Enden der Kabel zu überprüfen. Ein Ende sollten an den gelben Anschluss an Ihrem neuen Router und das andere Ende sollte an einen ähnlichen Anschluss an Ihrem Modem angeschlossen sein. Verschiedene Modemhersteller beschriften die Anschlüsse unterschiedlich. Der Anschluss kann mit „data“, „LAN“, „network“ oder „Ethernet“ beschriftet sein.  <span class="nub"></span>',
'p1020t001' : 'Wir haben Probleme, mit Ihrem Internetprovider zu kommunizieren.',
'p1020t002' : 'Bitte starten Sie den Modem-Router neu.',
'p1020t003' : 'Wir können keine Internetverbindung herstellen. Versuchen Sie deshalb, Ihren Modem-Router neu zu starten.',
'p1020t004' : 'Schalten Sie den Modem-Router aus. Normalerweise müssen Sie dazu einen Schalter am Modem-Router drücken oder ihn einfach von der Stromversorgung trennen.',
'p1020t005' : 'Warten Sie 15 Sekunden.',
'p1020t006' : 'Schalten Sie Ihren Modem-Router wieder ein.',
'p1020t007' : 'Nach wenigen Sekunden gehen seine Leuchten an und es müsste eine Verbindung mit Ihrem ISP hergestellt werden.',
'p1020t008' : 'Sollte dieses Problem weiterhin auftreten, wenden Sie sich an Ihren ISP, damit dieser den Fehler Ihres Kontos behebt.',
'p1020t009' : 'Wir warten, bis Ihr Modem-Router aus- und wieder eingeschaltet wird, und fahren dann automatisch fort.',
'p1020t010' : 'Warum sollten Sie das Modem neu starten?',
'p1020t011' : 'Einige Modems müssen neu gestartet werden, bevor sie mit einem neuen Router oder unbekannten Computer kommunizieren. Bei einer Störung bei Ihrem Internetprovider kann es sein, dass das Modem die Verbindung plötzlich verliert. Wir können Ihr Modem sehen, aber nicht das Internet. Wenn Sie es neu starten, sollte es wieder gehen. <span class="nub"></span>',
'p1100t001' : 'Ein Firmware-Update ist verfügbar!',
'p1100t002' : 'Sie sollten Ihren Router auf die neueste Firmware aktualisieren, um sicherzustellen, dass alles richtig funktioniert.',
'p1100t003' : 'Was gibt es Neues?',
'p1201t001' : 'Sperren Sie das Dashboard mit einem Kennwort.',
'p1201t002' : 'Bitte geben Sie ein Kennwort ein, um das Dashboard zu sperren:',
'p1201t003' : 'Bitte geben Sie ein Kennwort ein.',
'gtSetPassword' : 'Kennwort festlegen',
'p1201t005' : 'Abbrechen',
'p1210t001' : 'Das Dashboard ist gesperrt.',
'p1210t002' : 'Bitte geben Sie Ihr Kennwort ein:',
'p1210t003' : 'Bitte geben Sie Ihr Kennwort ein.',
'p1210t004' : 'Ihr Kennwort ist nicht richtig.',
'p1210t005' : 'Ich möchte hinein!',
'p1300t001' : 'Etwas mehr Schwung.',
'p1300t002' : 'Durch die Installation von Intellistream können Sie eine höhere Leistung Ihrer Internetverbindung erreichen. Dies umfasst die Ausführung eines Geschwindigkeitstests.',
'p1300t003' : 'Intellistream einrichten',
'p1300t004' : 'Vielleicht später',
'p1302t001' : 'Ihre Firmware ist auf dem neuesten Stand.',
'p1316t001' : 'Die Installation der aktualisierten Firmware ist fehlgeschlagen - bitte versuchen Sie es erneut, indem Sie auf "Nach aktueller Firmware suchen" klicken.',
'p1318t001' : 'Die Upgrade-Datei hat nicht den richtigen Typ oder die richtige Version für dieses Gerät. Das Upgrade ist fehlgeschlagen. Bitte versuchen Sie es mit der korrekten Datei erneut',
'p1333t001' : 'Ihre Firmware wurde erfolgreich aktualisiert.',
'p1400t001' : 'Nutzen Sie Ihren USB-Anschluss optimal',
'p1400t002' : 'Es gibt optionale Software, die Sie installieren können, um den USB-Anschluss an Ihrem Router optimal zu nutzen.',
'p1400t003' : 'Optionale Software anzeigen',
'p1500t001' : 'Sie sind hier.',
'p1500t002' : 'Sie befinden sich in folgender Zeitzone <span tid="gtCurrTimezone">Europa/Helsinki {REPLACE THIS SPAN WITH DETECTED Belkin TZ ID description}</span>. Stimmt das?',
'p1500t003' : 'Es stimmt',
'p1500t004' : 'Ich möchte auswählen',
'p200t001' : 'Aufbauen der Verbindung...',
'p200t002' : ' Wir prüfen die physischen Verbindungen zu Ihrem Router.',
'p202At001' : 'Der Vorgang ist noch nicht abgeschlossen...',
'p202At002' : ' Wir suchen nach dem Verbindungstyp Ihres Internetproviders. Dies kann einige Minuten in Anspruch nehmen.',
'p202Bt001' : 'Der Vorgang ist noch nicht abgeschlossen...',
'p202Bt002' : ' Es wird überprüft, ob Ihr Internetprovider ein Kennwort benötigt. Dies kann einige Minuten in Anspruch nehmen.',
'p202Ct001' : 'Der Vorgang ist noch nicht abgeschlossen...',
'p202Ct002' : ' Die Verbindung wird jetzt getestet.',
'p202t001' : 'Aufbauen der Verbindung...',
'p202t002' : ' Wir suchen nach dem Verbindungstyp Ihres Internetproviders.',
'p208t001' : 'Haben Sie die VPI- und VCI-Nummer zur Hand?',
'p208t002' : 'Sie müssen die VPI- und VCI-Nummer eingeben, um eine Internetverbindung herzustellen. Damit wird der vom ISP vorgeschriebene Kommunikationspfad identifiziert.',
'p208t003' : 'Sie sollten diese Zahlen von Ihrem Internetprovider erhalten haben. Wenn Sie sie nicht finden, wenden Sie sich an Ihren ISP.',
'p208t006' : '0',
'p208t007' : '0',
'p208t009' : 'Testen meiner Verbindung',
'p208t011' : 'VPI und VCI',
'p208t012' : 'Virtual Path Identifier und Virtual Circuit Identifier teilen Ihrem Router den Pfad mit, der genutzt werden soll, um mit Ihrem ISP zu kommunizieren. Es gibt einige allgemeine Einstellungen, die wir automatisch testen, bevor wir Sie um Hilfe bitten.<span class="nub"></span>',
'p209t001' : 'Etwas stimmt mit Ihren Einstellungen nicht.',
'p209t002' : 'Ihr ISP erkennt diese VPI/VCI-Nummern nicht an. Noch einmal?',
'p210CXt001' : 'Sie haben eine PPPoE-Verbindung.',
'p210CXt002' : 'Sie benötigen einen Benutzernamen und ein Kennwort, um auf das Internet zuzugreifen.',
'p210CXt004' : '<strong>Sie sollten diese Angaben von Ihrem Internetprovider  (ISP) erhalten haben. Wenn Sie sie nicht finden, wenden Sie sich an Ihren ISP.</strong>',
'p210CXt006' : '0',
'p210CXt007' : '0',
'p210CXt016' : 'Testen meiner Verbindung',
'p210CXt017' : 'PPPoE',
'p210CXt018' : 'Das Point-to-Point-Protokoll über Ethernet erstellt eine sichere Verbindung zwischen Ihrem Router und dem ISP. Es wird normalerweise von Telefongesellschaften verwendet. <span class="nub"></span>',
'p210DXt001' : 'Sie haben eine PPPoA-Verbindung.',
'p210DXt002' : 'Sie benötigen einen Benutzernamen und ein Kennwort, um auf das Internet zuzugreifen.',
'p210DXt004' : '<strong>Sie sollten diese Angaben von Ihrem Internetprovider  (ISP) erhalten haben. Wenn Sie sie nicht finden, wenden Sie sich an Ihren ISP.</strong>',
'p210DXt006' : '0',
'p210DXt007' : '0',
'p210DXt016' : 'Testen meiner Verbindung',
'p210DXt017' : 'PPPoA',
'p210DXt018' : 'Das Point-to-Point-Protokoll über ATM stellt eine sichere Verbindung zwischen Ihrem Router und dem ISP her. Es wird normalerweise von Telefongesellschaften verwendet.<span class="nub"></span>',
'p210t001' : 'Sie haben eine PPPoE DSL-Verbindung.',
'p210t002' : 'Sie benötigen einen Benutzernamen und ein Kennwort, um auf das Internet zuzugreifen.',
'p210t003' : '<strong>Sie sollten diese Angaben von Ihrem Internetprovider  (ISP) erhalten haben. Wenn Sie sie nicht finden, wenden Sie sich an Ihren ISP.</strong>',
'p210t005' : 'Internet-Benutzername:',
'p210t009' : 'Testen meiner Verbindung',
'p210t010' : 'PPPoE',
'p210t011' : 'Das Point-to-Point-Protokoll über Ethernet erstellt eine sichere Verbindung zwischen Ihrem Router und dem ISP. Es wird normalerweise von Telefongesellschaften verwendet. <span class="nub"></span>',
'p211t001' : 'Aufbauen der Verbindung...',
'p211t002' : ' Wir versuchen, uns bei Ihrem Internetprovider anzumelden. Dies kann zwei Minuten oder länger in Anspruch nehmen.',
'p212DXt001' : 'Etwas stimmt mit Ihren PPPoA-Einstellungen nicht.',
'p212DXt002' : 'Ihr Benutzername, Ihr Kennwort oder beides ist falsch. Bitte versuchen Sie es erneut. Wenn Sie die richtigen Angaben nicht haben, wenden Sie sich an Ihren ISP.',
'p212t001' : 'Etwas stimmt mit Ihren PPPoE-Einstellungen nicht.',
'p212t002' : 'Ihr Benutzername, Ihr Kennwort oder beides ist falsch. Bitte versuchen Sie es erneut. Wenn Sie die richtigen Angaben nicht haben, wenden Sie sich an Ihren ISP.',
'p220t002' : 'Um die Verbindung herzustellen und Zugriff auf das Internet zu erhalten, geben Sie bitte Ihren Benutzernamen, Ihr Kennwort und die Serviceadresse ein.',
'p220t003' : '<strong>Sie sollten diese Angaben von Ihrem Internetprovider  (ISP) erhalten haben. Wenn Sie sie nicht finden, wenden Sie sich an Ihren ISP.</strong>',
'p220t006' : 'Internet-Benutzername:',
'p220t007' : 'Serviceadresse:',
'p220t010' : 'Testen meiner Verbindung',
'p220t013' : 'Sie haben eine L2TP- oder PPTP-Verbindung.',
'p220t014' : 'Oder wählen Sie manuell meine Verbindung aus &raquo;',
'p220t015' : 'L2TP und PPTP',
'p220t016' : 'Sowohl L2TP (Layer 2 Tunneling Protocol) als auch PPTP (Point-to-Point Tunneling Protocol) stellen eine private und verschlüsselte Verbindung zwischen Ihnen und Ihrem ISP her.<span class="nub"></span>',
'p221t001' : 'Aufbauen der Verbindung...',
'p221t002' : ' Wir versuchen, uns bei Ihrem Internetprovider anzumelden. Dies kann bis zu 2 Minuten in Anspruch nehmen.',
'p222t002' : 'Ihr Benutzername, Ihr Kennwort oder beides ist falsch. Bitte versuchen Sie es erneut. Wenn Sie die richtigen Angaben nicht haben, wenden Sie sich an Ihren ISP.',
'p222t004' : 'Etwas stimmt mit Ihren Einstellungen nicht.',
'p2300t001' : 'Ihre installierte Firmware-Version:',
'p2300t002' : 'Firmware über eine lokale Datei aktualisieren:',
'p2300t006' : 'Sind Sie sicher, dass Sie {{file}} installieren möchten?',
'p2300t010' : 'Nach aktueller Firmware suchen',
'p2400t006' : 'Ihre aktuellen Einstellungen werden geändert. Sind Sie sicher, dass Sie {{file}} laden möchten?',
'p2410t001' : 'Möchten Sie die Werkseinstellungen wirklich wiederherstellen?',
'p2410t002' : 'Wenn Sie auf \'Ja\' klicken, werden Ihre Router-Einstellungen wie Name und Kennwort gelöscht und durch die Werkseinstellungen ersetzt.',
'p300t005' : 'Sie sind jetzt online.',
'p310t001' : 'Ein Update ist verfügbar!',
'p310t001x' : 'Dieses Update (v2.1.0c) enthält:',
'p310t002' : 'Um die neue Firmware zu installieren, lesen Sie bitte die Lizenzvereinbarung und akzeptieren Sie sie.',
'p310t003' : 'Lizenzvereinbarung',
'p310t004' : 'Ich bestätige die Lizenzvereinbarung.',
'p310t005' : 'Update installieren',
'p310t006' : 'Was ist Firmware?',
'p310t007' : 'Firmware ist die Software, mit der Ihr Router betrieben wird. Wir aktualisieren Firmware, um die Leistung Ihres Routers zu verbessern, deshalb sollten Sie die Neueste haben.  <span class="nub"></span>',
'p315t001' : 'Neue Firmware wird heruntergeladen.',
'p315t002' : 'Download-Vorgang:',
'p315t003' : 'Was ist Firmware?',
'p315t004' : 'Firmware ist die Software, mit der Ihr Router betrieben wird. Wir aktualisieren Firmware, um die Leistung Ihres Routers zu verbessern, deshalb sollten Sie die Neueste haben.  <span class="nub"></span>',
'p320t001' : 'Neue Firmware wird installiert.',
'p320t002' : 'Sobald die neue Firmware übernommen wurde, starten wir Ihren Router neu, um die Installation abzuschließen.',
'p320t004' : 'Was ist Firmware?',
'p320t005' : 'Firmware ist die Software, mit der Ihr Router betrieben wird. Wir aktualisieren Firmware, um die Leistung Ihres Routers zu verbessern, deshalb sollten Sie die Neueste haben.  <span class="nub"></span>',
'p320t006' : 'Dies dauert ungefähr drei Minuten. Update-Fortschritt:',
'p320t010' : 'Sobald die neue Firmware übernommen wurde, starten wir Ihr Modem neu, um die Installation abzuschließen.',
'p321t001' : 'Neustart Ihres Routers',
'p321t002' : 'Neustart Ihres Modems',
'p321t003' : 'Jetzt, nach Installation der Firmware, müssen wir Ihren Router neu starten, damit sie wirksam wird.',
'p321t004' : 'Neustart wird durchgeführt:',
'p321t005' : 'Firmware-Updates',
'p321t006' : 'Firmware ist die Software, die für die Implementierung von Netzwerk- und Sicherheitsprotokollen verwendet wird. Updates verbessern Zuverlässigkeit und Funktionalität; deshalb sollten Sie immer die neusten haben.<span class="nub"></span>',
'p321t010' : 'Jetzt, nach Installation der Firmware, müssen wir Ihr Modem neu starten, damit sie wirksam wird.',
'p330t001' : 'Überprüfung Ihrer Verbindungsgeschwindigkeit',
'p330t002' : 'Ein kurzer Geschwindigkeitstest hilft Ihrem Router, Ihre Internetverbindung zu optimieren. Dies dauert ein oder zwei Minuten.',
'p331t001' : 'Ihre Firmware ist auf dem neuesten Stand.',
'p332t001' : 'Wir versuchen das Firmware-Update später noch einmal.',
'p333t001' : 'Ihre Firmware wurde aktualisiert.',
'p334t001' : 'Die Ergebnisse Ihres Geschwindigkeitstests!',
'p334t002' : 'Das haben wir herausgefunden:',
'p334t003' : 'Download-Geschwindigkeit',
'p334t004' : 'Mbit/s',
'p334t005' : 'Upload-Geschwindigkeit',
'p334t006' : 'Mbit/s',
'p340t002' : ' Wir verbinden uns wieder mit Ihrem Router, damit wir fortfahren können.',
'p341t001' : 'Starten Sie Ihren Router neu',
'p341t002' : 'Wir haben Probleme, uns wieder mit Ihrem Router zu verbinden. Ein schneller Neustart sollte helfen.',
'p341t003' : 'Trennen Sie Ihren Router von der Stromversorgung, warten Sie einige Sekunden und schließen Sie ihn wieder an. Sobald das blaue Lämpchen am Router leuchtet, sind wir verbindungsbereit.',
'p341t003w' : 'Trennen Sie Ihren Router von der Stromversorgung, warten Sie einige Sekunden und schließen Sie ihn wieder an. Sobald das blaue Lämpchen am Router leuchtet, sind wir verbindungsbereit.',
'p341t004' : ' Während Sie dies tun, warten wir darauf, dass Ihr Router wieder eingeschaltet ist.',
'p342t001' : ' Wir verbinden uns wieder mit Ihrem Router, damit wir fortfahren können.',
'p342t002' : 'Sie müssen hierzu möglicherweise Ihr WLAN<span tid="Network24SSID">({REPLACE WITH 2.4 SSID})</span> erneut in der Liste der WLANs auswählen.',
'p343t002' : ' Wir verbinden uns gerade wieder mit Ihrem Router, um fortzufahren.',
'p343t003' : 'Sie müssen hierzu möglicherweise Ihr WLAN erneut auswählen <span tid="Network24SSID">({REPLACE WITH 2.4 SSID})</span>.',
'p344t001' : 'Starten Sie Ihren Router neu.',
'p344t002' : 'Wir haben Probleme, uns wieder mit Ihrem Router zu verbinden. Ein schneller Neustart sollte helfen.',
'p344t003' : 'Trennen Sie Ihren Router von der Stromversorgung, warten Sie 15 Sekunden und schließen Sie ihn wieder an. Sobald das blaue Lämpchen am Router leuchtet, werden wir die Verbindung wieder herstellen.',
'p344t003w' : 'Trennen Sie Ihren Router von der Stromversorgung, warten Sie 15 Sekunden und schließen Sie ihn wieder an. Sobald das blaue Lämpchen am Router leuchtet, werden wir die Verbindung wieder herstellen.',
'p344t004' : ' Während Sie dies tun, warten wir darauf, dass Ihr Router wieder eingeschaltet ist.',
'p400f010' : 'WPA2',
'p400f011' : 'WPA/WPA2',
'p400f012' : 'WEP',
'p400f013' : 'Öffnen',
'p400t001' : 'Sorgen Sie dafür, dass alle Verbindungen schneller hergestellt werden.',
'p400t002' : 'Wenn Sie Ihrem neuen Router denselben Netzwerknamen und dasselbe Netzwerkkennwort geben wie Ihrem alten, kann für alle Geräte sofort eine Verbindung hergestellt werden.',
'p400t004' : 'Netzwerkname:',
'p400t008' : 'Sicherheitstyp: <em class="hide-on-phones">(WPA2 ist am sichersten.)</em>',
'p400t014' : 'Ihr 5-GHz-Band hat denselben Namen, jedoch mit der Erweiterung „.media“.',
'p400t015' : 'Sie können dies später ändern, wenn Sie möchten.',
'p400t017' : 'Speichern und fortfahren',
'p400t018' : 'Warum sollte ich mein Netzwerk umbenennen?',
'p400t019' : 'Alle WLAN-Geräte, die früher mit Ihrem alten Router verbunden waren, verbinden sich automatisch mit Ihrem neuen Router, wenn Sie denselben Netzwerknamen und dasselbe Kennwort verwenden. Außerdem ist es, wenn sich auf Ihren Geräten nach Ihrem Netzwerk suchen, einfacher, einen eindeutigen Namen zu finden. <span class="nub"></span>',
'p450a009' : 'Großartig. Und was kommt als Nächstes?',
'p450t001' : 'Ihre Änderungen wurden gespeichert.',
'p450t002' : 'Hier sind Ihr neuer Netzwerkname und Ihr Kennwort',
'p450t003' : 'Wenn Sie Ihren alten Netzwerknamen und Ihr altes Kennwort verwendet haben, sollten sich Ihre vorhandenen WLAN-Geräte jetzt wieder verbinden.',
'p450t004' : 'Name:',
'p450t008' : 'Unten an Ihrem Router befindet sich ein Zettel, auf dem Sie Ihren neuen Netzwerknamen notieren können. So haben Sie ihn immer zur Hand, wenn Sie ihn benötigen.',
'p450t011' : 'Wenn Sie Ihren früheren Netzwerknamen und Ihr früheres Kennwort verwendet haben, verbinden sich die meisten Ihrer WLAN-Geräte automatisch wieder, wenn Sie sie das nächste Mal starten. Bei anderen müssen Sie Ihr Netzwerk erneut auswählen und sie verbinden sich danach automatisch. In Ihrer Kurzanleitung für die Installation finden Sie eine Anleitung für Windows, OS X, iOS und Android.  <span class="nub"></span>',
'p451a009' : 'Großartig. Und was kommt als Nächstes?',
'p451t001' : 'Keine Änderungen.',
'p451t002' : 'Ihr Netzwerkname und Ihr Kennwort wurden nicht geändert.',
'p451t003' : 'Sie müssen jedem Ihrer WLAN-Geräte Ihren Netzwerknamen und Ihr Kennwort mitteilen.',
'p451t004' : 'Name:',
'p451t008' : 'Unten an Ihrem Router befindet sich ein Zettel, auf dem Sie Ihren Netzwerknamen notieren können. So haben Sie ihn immer zur Hand, wenn Sie ihn benötigen.',
'p451t011' : 'Sie müssen jedem Ihrer WLAN-Geräte Ihr neues Netzwerk mitteilen. In Ihrer Kurzanleitung für die Installation finden Sie eine Anleitung für Windows, OS X, iOS und Android.  <span class="nub"></span>',
'p500t001' : 'Registrieren Sie Ihren Router.',
'p500t002' : 'Die Registrierung geht schnell und kann viel Zeit sparen, sollten Sie einmal den Kundensupport benötigen.',
'p500t004' : 'Warum sollten Sie sich registrieren?',
'p500t005' : 'Wenn wir etwas mehr über Sie wissen, können wir Ihnen bei Bedarf schneller helfen. <span class="nub"></span>',
'p500tCancel' : 'Später registrieren &raquo;',
'p500tSubmit' : 'Registrierung durchführen',
'p600t001' : 'Besuchen Sie unsere Seite für optionale Software für den Router, um ähnliche Software für Ihre anderen Computer und mobilen Geräte abzurufen.',
'p600t002' : 'Vielen Dank. Ich möchte zum Dashboard',
'p600t003' : 'Optionale Software',
'p600t004' : 'Diese Softwaretools können Ihnen helfen, die fortschrittlichen Funktionen zu nutzen, die Ihr Router bietet. Es gibt Downloads für Apple iOS, Android, Windows und OS X.  <span class="nub"></span>',
'p601t001' : '<strong>Vielen Dank für die Registrierung!</strong>',
'p700MRt001' : 'Wir konnten Ihre Verbindung nicht automatisch herstellen. Bitte sagen Sie uns etwas mehr, damit wir Ihnen beim Verbinden helfen können.',
'p700MRt002' : 'Welche Art von Verbindung möchten Sie einrichten?',
'p700MRt003' : 'Meine Verbindung ist eine:',
'p700MRt005' : 'Dynamische Verbindung  (1483 Bridge)',
'p700MRt007' : 'PPPoE-Verbindung',
'p700MRt009' : 'PPPoA-Verbindung',
'p700MRt011' : 'Statische Verbindung (IPoA)',
'p700MRt014' : 'Ich kenne meinen Verbindungstyp nicht genau:',
'p700MRt016' : 'Automatische Verbindung erneut versuchen',
'p700MRt017' : 'Verbindungstypen',
'p700MRt018' : '<span class="black">Dynamisch—</span> DSL-Provider verwenden diese Verbindungen immer häufiger.',
'p700MRt019' : '<span class="black">PPPoE und PPPoA —</span> Für diese Verbindungen ist ein Benutzername und ein Kennwort erforderlich, die vom ISP bereitgestellt werden.',
'p700MRt021' : '<span class="black">Statisch—</span> Diese Verbindungen erfordern benutzerspezifische Parameter, die für jeden Benutzer eindeutig sind.<span class="nub"></span>',
'p700t001' : 'Wir konnten Ihre Verbindung nicht automatisch herstellen. Bitte sagen Sie uns etwas mehr, damit wir Ihnen beim Verbinden helfen können.',
'p700t002' : 'Welche Art von Verbindung möchten Sie einrichten?',
'p700t003' : 'Meine Verbindung ist eine:',
'p700t005' : 'Dynamische Verbindung',
'p700t007' : 'PPPoE-Verbindung',
'p700t008' : 'L2TP- oder PPTP-Verbindung',
'p700t013' : 'Statische Verbindung',
'p700t014' : 'Ich kenne meinen Verbindungstyp nicht genau:',
'p700t914' : 'Wenn Sie nicht wissen, welchen Verbindungstyp Sie haben, wenden Sie sich an Ihren Internetprovider (ISP).',
'p700t016' : 'Automatische Verbindung erneut versuchen',
'p700t017' : 'Verbindungstypen',
'p700t018' : '<span class="black">Dynamisch—</span> Wird von den meisten Kabel- und Glasfaser-ISPs und einigen DSL-Providern verwendet.',
'p700t019' : '<span class="black">PPPoE und PPTP —</span> Benötigen einen Benutzernamen und ein Kennwort vom ISP.',
'p700t021' : '<span class="black">Statisch —</span> Diese Verbindungen erfordern benutzerspezifische Parameter, die für jeden Benutzer eindeutig sind.<span class="nub"></span>',
'p701MRt001' : 'Sie haben eine dynamische Verbindung ausgewählt.',
'p701MRt002' : 'Ihr Internetprovider hat Ihnen möglicherweise zusätzliche Konfigurationseinstellungen zur Verfügung gestellt.',
'p701MRt004' : 'Dynamische Einstellungen:',
'p701MRt006' : '0',
'p701MRt007' : '0',
'p701MRt016' : 'Testen meiner Verbindung',
'p701MRt017' : 'Dynamische Verbindungen',
'p701MRt018' : 'Eine dynamische Verbindung wird automatisch konfiguriert, wenn die Kommunikation mit dem ISP hergestellt worden ist.<span class="nub"></span>',
'p701t001' : 'Dynamische Verbindung wird aufgebaut...',
'p701t002' : ' Wir bitten Ihren Internetprovider um eine Verbindung.',
'p702t001' : 'Das Modem wird neu gestartet...',
'p702t002' : 'Wir starten Ihr Modem neu, um einen anderen Verbindungstyp zu versuchen.',
'p710MRt001' : 'Sie haben eine statische Verbindung ausgewählt.',
'p710MRt002' : 'Sie sollten die Einstellungen für die statische Konfiguration von Ihrem Internetprovider erhalten haben. Wenn Sie sie nicht finden, rufen Sie bitte Ihren ISP an.',
'p710MRt004' : 'Statische Einstellungen:',
'p710MRt005' : 'IP-Adresse:',
'p710MRt006' : '0',
'p710MRt007' : 'Subnetzmaske:',
'p710MRt008' : '0',
'p710MRt009' : 'Standardgateway:',
'p710MRt010' : '0',
'p710MRt011' : 'Primärer DNS-Server:',
'p710MRt012' : '0',
'p710MRt013' : 'Sekundärer DNS-Server:',
'p710MRt014' : '0',
'p710MRt015' : 'Hinweis: Nicht alle ISPs benötigen die Angabe eines sekundären DNS-Servers.',
'p710MRt016' : 'Testen meiner statischen Verbindung',
'p710MRt017' : 'Statische Verbindungen',
'p710MRt018' : 'Eine statische Verbindung wird manuell konfiguriert, bietet aber eine ständige Adresse für Ihren Router, auf die Sie von außerhalb Ihres Netzwerks leichter zugreifen können. Statische Verbindungen sind bei Internetdiensten in Wohngebäuden unüblicher und kosten im Allgemeinen mehr. <span class="nub"></span>',
'p710t001' : 'Sie haben eine statische Verbindung ausgewählt.',
'p710t002' : 'Sie sollten die Einstellungen für die statische Konfiguration von Ihrem Internetprovider erhalten haben. Wenn Sie sie nicht finden, wenden Sie sich an Ihren ISP.',
'p710t004' : 'Statische Einstellungen:',
'p710t005' : 'IP-Adresse:',
'p710t006' : '0',
'p710t007' : 'Subnetzmaske:',
'p710t008' : '0',
'p710t009' : 'Standardgateway:',
'p710t010' : '0',
'p710t011' : 'Primärer DNS-Server:',
'p710t012' : '0',
'p710t013' : 'Sekundärer DNS-Server:',
'p710t014' : '0',
'p710t015' : 'Hinweis: Nicht alle ISPs benötigen die Angabe eines sekundären DNS-Servers.',
'p710t016' : 'Testen meiner statischen Verbindung',
'p710t017' : 'Statische Verbindungen',
'p710t018' : 'Eine statische Verbindung wird manuell konfiguriert, bietet aber eine ständige Adresse für Ihren Router, auf die Sie von außerhalb Ihres Netzwerks leichter zugreifen können. Statische Verbindungen sind bei Internetdiensten in Wohngebäuden unüblicher und kosten im Allgemeinen mehr.  <span class="nub"></span>',
'p711t001' : 'Eine statische Verbindung wird aufgebaut...',
'p711t002' : ' Wir bitten Ihren Internetprovider um eine Verbindung.',
'p712t001' : 'Etwas stimmt mit Ihren statischen Einstellungen nicht.',
'p712t002' : 'Eine der Adressen oder andere von Ihnen eingegebene Elemente sind falsch, wir können Ihnen aber nicht sagen, welche.',
'p800t001' : 'Ihre Änderungen werden übernommen.',
'p800t002' : 'Wir übernehmen Ihre Änderungen und starten den Router neu, damit sie wirksam werden.',
'p801t002' : ' Wir warten darauf, dass der Router eine neue Verbindung herstellt. Sobald dies geschehen ist, fahren wir fort.',
'p802t002' : 'Wie benötigen eine WLAN-Verbindung zum Router, um fortzufahren.',
'p802t004' : 'Gehen Sie zum WLAN-Menü Ihres Geräts.',
'p802t005' : 'Wählen Sie Ihr neues Netzwerk mit folgendem Namen aus <strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong>',
'p802t007' : 'Geben Sie folgendes Kennwort ein <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>',
'p802t009' : 'Sie werden mit dem Router verbunden. Dann fahren wir fort.',
'p802t010' : ' Warten auf die Herstellung einer Verbindung mit dem Router.',
'p803t002' : 'Wie benötigen eine WLAN-Verbindung zum Router, um fortzufahren.',
'p803t003' : 'Da Sie Ihren Netzwerknamen geändert haben, müssen Sie Ihr WLAN neu auswählen.',
'p803t004' : 'Gehen Sie zum WLAN-Menü Ihres Geräts.',
'p803t005' : 'Wählen Sie Ihr neues Netzwerk mit folgendem Namen aus <strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong>',
'p803t007' : 'Geben Sie folgendes Kennwort ein <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>',
'p803t009' : 'Sie werden mit dem Router verbunden. Dann fahren wir fort.',
'p803t010' : ' Warten auf die Herstellung einer neuen Verbindung.',
'p804t001' : 'Ihr Gerät hat keine neue Verbindung hergestellt.',
'p804t002' : 'Dies passiert manchmal und ist leicht zu beheben.',
'p804t025' : 'Wenn Sie ein internetfähiges Gerät in der Nähe haben, gehen Sie zur folgenden URL, um hilfreiche Informationen zu erhalten: <strong>http://belk.in/PMuxOg</strong>',
'p804t026' : 'Sollte dies nicht funktionieren, schließen Sie das Ethernetkabel direkt an Ihr Modem und Ihren Computer an.',
'p804t027' : ' Sobald wir eine Verbindung sehen, fahren wir automatisch fort.',
'p900t001' : 'Sie müssen Ihr Modem neu starten.',
'p900t002' : 'Ihr Modem kommuniziert nicht.',
'p900t003' : 'Bitte führen Sie die folgenden Schritte aus, um Ihr Modem neu zu starten:',
'p900t004' : 'Schalten Sie das Modem aus. Normalerweise müssen Sie dazu den Ein-/Aus-Schalter des Modems benutzen oder das Modem einfach vom Netzteil trennen. Manche Modems sind mit einem Akku ausgestattet. Bei diesen müssen Sie die Reset-Taste suchen und drücken.',
'p900t005' : 'Warten Sie 15 Sekunden.',
'p900t006' : 'Schalten Sie das Modem wieder ein.',
'p900t007' : 'Nach einigen Sekunden leuchten die Lämpchen des Modems und es ist bereit, mit dem Router zu kommunizieren.',
'p900t008' : 'Wir warten, bis Ihr Modem aus- und wieder eingeschaltet wird, und fahren dann automatisch fort.',
'p900t009' : 'Warum sollten Sie das Modem neu starten?',
'p900t010' : 'Einige Modems müssen neu gestartet werden, um mit einem neuen Router oder unbekannten Computer zu kommunizieren. Wir können Ihr Modem sehen; es kommuniziert nicht mit Ihrem neuen Router. Durch einen Neustart können Sie dieses Problem wahrscheinlich beheben. <span class="nub"></span>',
'p901t001' : 'Bitte starten Sie Ihr Modem jetzt neu...',
'p901t002' : ' Wir warten, bis Ihr Modem aus- und wieder eingeschaltet wird.',
'p902t001' : 'Ihr Modem wurde abgeschaltet. ...',
'p902t002' : ' Wir warten, bis es wieder aktiviert wird.',
'p903t001' : 'Benötigen Sie mehr Zeit?',
'p903t002' : ' Wir warten darauf, dass Ihr Modem neu gestartet wird. Benötigen Sie mehr Zeit?',
'p903t005' : 'Normalerweise müssen Sie dazu den Ein-/Aus-Schalter des Modems bedienen oder das Modem einfach vom Netzteil trennen. Manche Modems sind mit einem Akku ausgestattet. Bei diesen müssen Sie die Reset-Taste suchen und drücken.',
'p904t001' : 'Benötigen Sie mehr Zeit?',
'p904t002' : ' Wir warten darauf, dass Ihr Modem wieder eingeschaltet ist. Benötigen Sie mehr Zeit?',
'p905t001' : 'Wir sehen Ihr Modem wieder...',
'p905t002' : ' Wir warten darauf, dass es sich mit Ihrem ISP synchronisiert. Dies dauert ein oder zwei Minuten.',
'p950IMRt001' : 'Wir haben keine Verbindung mit Ihrer ADSL-Leitung erkannt.',
'p950IMRt002' : 'Überprüfen Sie, ob ein Netzwerkkabel an den ADSL-Anschluss an der Wand und den grauen Anschluss am Router angeschlossen ist',
'p950IMRt004' : 'Wir denken, dass es sich um ein Verkabelungsproblem handelt.',
'p950IMRt005' : 'Es sollte ein Netzwerkkabel an den grauen Anschluss Ihres Routers und an den ADSL-/Telefonanschluss angeschlossen sein. Dieses Kabel überträgt das Signal von Ihrem ISP auf Ihren Router. Es ist erforderlich, um eine Internetverbindung herzustellen. Bitte überprüfen Sie, ob dieses Kabel fest angeschlossen ist.',
'p950IMRt006' : 'Die Verbindung sollte folgendermaßen aussehen:',
'p950IMRt007' : 'Ein Netzwerkkabel sollte Ihren ADSL-Wandanschluss mit dem Netzteil des Routers verbinden, das mit einem integrierten Modem ausgestattet ist. Dieses Kabel überträgt das Signal von Ihrem ISP auf Ihren Router. Es ist erforderlich, um eine Internetverbindung herzustellen.',
'p950IMRt009' : 'Die Verbindung sollte folgendermaßen aussehen:',
'p950IMRt010' : 'Wir werden weiterhin auf eine Verbindung warten, während Sie prüfen.',
'p950IMRt014' : 'Verkabelung',
'p950IMRt015' : 'Das häufigste Problem bei der Verkabelung ist die Verbindung zwischen dem Modem und dem Router. Es ist wichtig, beide Enden der Kabel zu überprüfen. Ein Ende sollte an den grauen Anschluss Ihres neuen Routers und das andere Ende an Ihren ADSL-Anschluss angeschlossen sein. In manchen Fällen muss sich ein Splitter (auch Filter genannt) zwischen dem Wandanschluss und dem Kabel befinden. <span class="nub"></span>',
'p950PMt001' : 'Wir haben keine Verbindung mit Ihrer ADSL-Leitung erkannt.',
'p950PMt002' : 'Stellen Sie sicher, dass eine Netzwerkverbindung zwischen Ihrem Router und dem Netzteil (mit einem integrierten Modem) besteht.',
'p950PMt004' : 'Wir denken, dass es sich um ein Verkabelungsproblem handelt.',
'p950PMt005' : ' Überprüfen Sie, ob das Netzwerkkabel, das vom Netzteil des Modems ausgeht, an den gelben WAN-Anschluss des Routers angeschlossen ist. Ohne diese Netzwerkverbindung erhalten Sie keinen Zugriff auf das Internet.Sie nicht online ',
'p950PMt009' : 'Die Verbindung sollte folgendermaßen aussehen:',
'p950PMt010' : 'Wir werden weiterhin auf eine Verbindung warten, während Sie prüfen.',
'p950PMt011' : 'Verkabelung',
'p950PMt012' : 'Das häufigste Problem bei der Verkabelung ist die Verbindung zwischen dem Wandanschluss und dem Modem. Es ist wichtig, beide Enden der Kabel zu überprüfen. Ein Ende sollte an das Netzteil Ihres neuen Routers und das andere Ende an Ihren ADSL-Anschluss angeschlossen sein. In manchen Fällen muss sich ein Splitter (auch Filter genannt) zwischen dem Wandanschluss und dem Kabel befinden. <span class="nub"></span>',
'p950t001' : 'Wir haben eine Verbindung mit Ihrem Modem erkannt.',
'p950t002' : 'Vergewissern Sie sich, dass das Modem angeschlossen und eingeschaltet ist.',
'p950t003' : 'Überprüfen Sie, ob Ihr Modem und Ihr Router über ein Ethernetkabel miteinander verbunden sind.',
'p950t004' : 'Wir denken, dass es sich um ein Verkabelungsproblem handelt.',
'p950t005' : 'Ihr Modem sollte eingeschaltet sein und es sollte ein Ethernetkabel an Ihr Modem und an den gelben Anschluss Ihres Routers angeschlossen sein.',
'p950t006' : 'Bitte überprüfen Sie Folgendes:',
'p950t007' : 'Stellen Sie sicher, dass Ihr Modem eingeschaltet ist. Prüfen Sie, ob das Netzteil an beiden Enden angeschlossen ist und ein oder mehrere Lämpchen am Modem leuchten.',
'p950t008' : 'Ein Ethernetkabel sollte an Ihr Modem und an den gelben Anschluss an Ihrem Router angeschlossen sein. Dieses Kabel überträgt das Signal von Ihrem Modem zum Router. Es ist zur Herstellung einer Internetverbindung erforderlich.',
'p950t009' : 'Ihre Verbindungen sollten folgendermaßen aussehen:',
'p950t010' : 'Wir werden weiterhin auf eine Verbindung warten, während Sie prüfen.',
'p950t011' : 'Verkabelung',
'p950t012' : 'Das häufigste Setup-Problem ist die Verkabelung zwischen dem Modem und dem Router. Ein Ende sollte an den gelben Anschluss Ihres neuen Routers und das andere Ende sollte an einen ähnlichen Anschluss an Ihrem Modem angeschlossen sein. Vergewissern Sie sich, dass beide fest angeschlossen sind. Verschiedene Modemhersteller beschriften die Anschlüsse unterschiedlich. Der Anschluss kann mit „data“, „LAN“, „network“ oder „Ethernet“ beschriftet sein. <span class="nub"></span>',
'p951IMRt001' : 'Benötigen Sie mehr Zeit?',
'p951IMRt002' : ' Wir warten, bis Sie ein Kabel an den ADSL-Anschluss angeschlossen haben. Benötigen Sie mehr Zeit?',
'p951t001' : 'Benötigen Sie mehr Zeit?',
'p951t002' : ' Wir warten darauf, dass Ihr Modem wieder eingeschaltet ist. Benötigen Sie mehr Zeit?',
'pDAt001' : 'Administrator duplizieren',
'pDAt002' : 'Dieses Gerät wird derzeit verwaltet von  <span id="ipaddr"></span> !',
'PIC_blocked_content' : 'Die Internet-Kindersicherung ist aktiv und der Internetzugriff dieses Geräts wird zurzeit blockiert. Klicken Sie auf diese Schaltfläche unten, um die Internet-Kindersicherung einzustellen.',
'PIC_blocked_title' : 'Der Internetzugriff dieses Geräts ist zurzeit blockiert.',
'PIC_S1t0006' : 'Zeiten für den Internetzugriff festlegen:',
'PIC_S1t006' : 'Kürzlich in Ihrem Netzwerk:',
'PIC_S2t003' : 'Abende an Schultagen',
'PIC_S2t004' : 'Wochenenden',
'PIC_S2t005' : '(Sonntag - Donnerstag)',
'PIC_S2t006' : '(Freitag - Samstag)',
'PIC-blocked' : 'blockiert',
'PIC-S1dt001' : 'Wollen Sie im ganzen Netzwerk die Internetverbindung unterbrechen?',
'PIC-S1t001' : 'Alle Geräte blockieren',
'PIC-S1t003' : 'Die Internetverbindung aller Geräte ist unterbrochen.',
'PIC-S1t004' : 'Zugriff wiederherstellen',
'PIC-S1t005' : 'Zurzeit in Ihrem Netzwerk:',
'PIC-S1t010' : 'Geräte werden gesucht:',
'PIC-S1t020' : 'Der Zeitplan für Ihre Internet-Kindersicherung ist unterbrochen worden',
'PIC-S1t021' : 'Da dem Router die aktuelle Zeit nicht bekannt ist, wird das Blockieren/Entsperren Ihres Zeitplans für die Internet-Kindersicherung verhindert. Dieses Problem wird behoben, wenn Ihr Router eine neue Verbindung mit dem NTP-Zeitserver herstellt, wodurch er die aktuelle Zeit abrufen kann.',
'PIC-S1t022' : 'Ihr Router fragt die Zeit auf dem NTP-Zeitserver alle paar Minuten ab. Sie können den Zeitserver auch ändern, indem Sie zu den <a href="#" tid="gtSystemSettings" style="">Systemeinstellungen</a> gehen.',
'PIC-unblocked' : 'nicht blockiert',
'pNoTime_content' : 'Ihr Router verfügt nicht über die aktuelle Zeit, weil die Verbindung mit dem NTP-Zeitserver unterbrochen wurde. Die zeitbasierten Funktionen des Routers wie die Kindersicherung, der Eco-Modus und Self-Healing sind unterbrochen, bis eine neue Verbindung mit einem NTP-Zeitserver hergestellt wird. <br> <br>Der Router fragt automatisch alle paar Minuten die Zeit ab.',
'pNoTime_title' : 'Wie spät ist es?',
'pODLAplt001' : 'Language Pack wird angewendet',
'pODLAplt002' : 'Zur gewählten Sprache wechseln...',
'pODLDLt001' : 'Language Pack wird heruntergeladen',
'pODLDLt002' : 'Gewählte Sprache wird vom Server heruntergeladen...',
'pODLErrt001' : 'Fehler',
'pODLErrt002' : 'OK',
'pStatst004' : 'Alle anzeigen &raquo;',
'Support1t001' : 'Wir haben eine Verbindung mit Ihrem Modem erkannt.',
'Support1t002' : 'Vergewissern Sie sich, dass das Modem angeschlossen und eingeschaltet ist.',
'Support1t003' : 'Überprüfen Sie, ob Ihr Modem und Ihr Router über ein Ethernetkabel miteinander verbunden sind.',
'Support1t004' : 'Wir denken, dass es sich um ein Verkabelungsproblem handelt.',
'Support1t005' : 'Ihr Modem sollte eingeschaltet sein und es sollte ein Ethernetkabel an Ihr Modem und an den gelben Anschluss Ihres Routers angeschlossen sein.',
'Support1t006' : 'Bitte überprüfen Sie Folgendes:',
'Support1t007' : 'Stellen Sie sicher, dass Ihr Modem eingeschaltet ist. Prüfen Sie, ob das Netzteil an beiden Enden angeschlossen ist und ein oder mehrere Lämpchen am Modem leuchten.',
'Support1t008' : 'Ein Ethernetkabel sollte an Ihr Modem und an den gelben Anschluss an Ihrem Router angeschlossen sein. Dieses Kabel überträgt das Signal von Ihrem Modem zum Router. Es ist zur Herstellung einer Internetverbindung erforderlich.',
'Support1t009' : 'Ihre Verbindungen sollten folgendermaßen aussehen:',
'Support1t010' : 'Klicken Sie, sobald Sie diese Schritten abgeschlossen haben, auf Erneut versuchen.',
'Support7t012' : 'Gehen Sie auf einem Gerät mit Internetverbindung zu: <strong>http://belk.in/Q4XXca</strong>',
'Support1t016' : 'Verkabelung',
'Support1t017' : 'Das häufigste Setup-Problem ist die Verkabelung zwischen dem Modem und dem Router. Ein Ende sollte an den gelben Anschluss Ihres neuen Routers und das andere Ende sollte an einen ähnlichen Anschluss an Ihrem Modem angeschlossen sein. Vergewissern Sie sich, dass beide fest angeschlossen sind. Verschiedene Modemhersteller beschriften die Anschlüsse unterschiedlich. Der Anschluss kann mit „data“, „LAN“, „network“ oder „Ethernet“ beschriftet sein. <span class="nub"></span>',
'Support2t001' : 'Ihr Modem wurde nicht neu gestartet.',
'Support2t002' : 'Versuchen Sie, das Modem von der Stromversorgung zu trennen.',
'Support2t003' : 'Ihr Modem hat möglicherweise eine Reset-Taste, die Sie drücken müssen.',
'Support2t004' : 'Haben Sie Probleme beim Neustarten Ihres Modems?',
'Support2t005' : 'Gehen Sie nach folgenden Schritte vor, um Ihr Modem neu zu starten:',
'Support2t006' : 'Trennen Sie das Modem von der Stromversorgung.',
'Support2t007' : 'Warten Sie, bis die Lämpchen am Modem erlöschen.',
'Support2t008' : 'Wenn die Lämpchen eingeschaltet bleiben, ist Ihr Modem möglicherweise mit einem Akku ausgestattet. Irgendwo (häufig auf der Rückseite) befindet sich eine Reset-Taste. Drücken Sie sie.',
'Support2t009' : 'Die Lämpchen des Modems sollten erlöschen. Warten Sie einige Sekunden, bevor Sie es wieder an die Stromversorgung anschließen.',
'Support2t010' : 'Klicken Sie, sobald Sie diese Schritten abgeschlossen haben, auf Erneut versuchen.',
'Support2t016' : 'Warum sollten Sie das Modem neu starten?',
'Support2t017' : 'Einige Modems müssen neu gestartet werden, um mit einem neuen Router oder unbekannten Computer zu kommunizieren. Wir können Ihr Modem sehen; es kommuniziert nicht mit Ihrem neuen Router. Durch einen Neustart können Sie dieses Problem wahrscheinlich beheben. <span class="nub"></span>',
'Support3MRt001' : 'Wir haben keine Verbindung mit Ihrer ADSL-Leitung erkannt.',
'Support3MRt002' : 'Überprüfen Sie, ob ein Netzwerkkabel von Ihrem ADSL-Wandanschluss zu Ihrem Router führt.',
'Support3MRt003' : 'In manchen Regionen ist ein Splitter/Filter erforderlich.',
'Support3MRt004' : 'Wir sind ziemlich sicher, dass es sich um ein Verkabelungsproblem handelt.',
'Support3MRt005' : 'Es sollte ein Kabel an den grauen Anschluss Ihres Routers und an den ADSL-/Telefonanschluss angeschlossen sein.',
'Support3MRt006' : 'Überprüfen Sie, ob beide Kabel fest angeschlossen sind.',
'Support3MRt007' : 'Überprüfen Sie, ob das Kabel an den grauen Anschluss Ihres Routers und nicht an einen der gelben angeschlossen ist.',
'Support3MRt008' : 'Wenn Sie einen ADSL-Splitter (auch Filter genannt) erhalten haben, muss dieser sich zwischen dem Kabel und dem ADSL-Anschluss befinden.',
'Support3MRt010' : 'Überprüfen Sie, ob beide Kabel fest angeschlossen sind.',
'Support3MRt011' : 'Überprüfen Sie, ob das Kabel an den Netzwerkanschluss des Netzteils des Routers angeschlossen ist.',
'Support3MRt012' : 'Wenn Sie einen ADSL-Splitter (auch Filter genannt) erhalten haben, muss dieser sich zwischen dem Kabel und dem ADSL-Anschluss befinden.',
'Support3MRt016' : 'Wenn Sie diese Schritte ausgeführt haben, können Sie es erneut versuchen.',
'Support3MRt018' : 'Rufen Sie die folgende URL auf einem Gerät auf, das mit dem Internet verbunden ist, und erfahren Sie, wie Sie das Problem selbst beheben können: <strong>www.belkin.com/support3mr</strong>',
'Support3MRt021' : 'Verkabelung',
'Support3MRt022' : 'Verkabelungsprobleme treten am häufigsten am ADSL-Anschluss auf. Überprüfen Sie beide Enden der Kabel. <span class="nub"></span>',
'Support3MRt050' : 'Überprüfen Sie, ob ein Netzwerkkabel an das Netzteil Ihres Routers und Ihre Telefonbuchse angeschlossen ist.',
'Support3MRt051' : 'Ein Kabel sollte das Netzteil Ihres Routers mit dem ADSL-/Telefonanschluss verbinden.',
'Support3PMt001' : 'Wir haben keine Verbindung mit Ihrer ADSL-Leitung erkannt.',
'Support3PMt002' : 'Stellen Sie sicher, dass eine Netzwerkverbindung zwischen Ihrem Router und dem Netzteil (mit einem integrierten Modem) besteht.',
'Support3PMt004' : 'Wir sind ziemlich sicher, dass es sich um ein Verkabelungsproblem handelt.',
'Support3PMt005' : 'Es muss eine Netzwerkverbindung zwischen dem gelben Anschluss Ihres Routers und dem Netzteil des Routers bestehen.',
'Support3PMt006' : 'Sehen Sie sich das Netzteil des Routers an und suchen Sie das Kabel, das in zwei Leitungen gespalten ist. Eine dieser Leitungen ist mit einem Ethernetstecker ausgestattet.',
'Support3PMt007' : 'Schließen Sie den Ethernetstecker an den gelben Anschluss des Routers an.',
'Support3PMt010' : 'Wenn Sie diese Schritte ausgeführt haben, können Sie es erneut versuchen.',
'Support3PMt012' : 'Gehen Sie auf einem Gerät mit Internetverbindung zu:  <strong>www.belkin.com/support3PM</strong>',
'Support3PMt016' : 'Verkabelung',
'Support3PMt017' : 'Es ist wichtig zu überprüfen, dass die Verbindung von Ihrem ADSL-Anschluss zu Ihrem Router an keiner Stelle unterbrochen ist. Der Router erwartet, dass dieses Signal über den gelben Anschluss übertragen wird. Das Kabel, das vom Netzteil Ihres Routers ausgeht, überträgt dieses Signal und den Strom auf den Router; beide Hälften müssen an Ihren Router angeschlossen sein, um einen ordnungsgemäßen Betrieb zu ermöglichen.  <span class="nub"></span>',
'Support3t001' : 'Ihr Modem wurde nicht wieder eingeschaltet.',
'Support3t002' : 'Überprüfen Sie, ob Ihr Modem mit Strom versorgt wird.',
'Support3t003' : 'Sie müssen möglicherweise etwas warten, bis es bereit ist.',
'Support3t004' : 'Haben Sie Probleme beim Neustarten Ihres Modems?',
'Support7t005' : 'Gehen Sie nach folgenden Schritten vor, um eine ADSL-Verbindung herzustellen:',
'Support7t006' : 'Überprüfen Sie, ob das Netzwerkkabel des Modem-Routers an eine Telefonbuchse mit Internetverbindung angeschlossen ist. Klicken Sie dann auf Erneut versuchen, um zu überprüfen, ob Ihr Router die Internetverbindung erkennt.',
'Support7t007' : 'Wenn Ihr Modem-Router über einen Splitter mit dem Festnetzanschluss des Telefons verbunden ist, ersetzen Sie den Splitter durch einen Filter-Splitter (optional). Klicken Sie dann auf Erneut versuchen, um zu überprüfen, ob Ihr Router Ihren ISP erkennt.',
'Support7t008' : 'Wenn der oben beschriebene Schritt 2 nicht funktioniert, sind möglicherweise ADSL-Filter (Splitter) erforderlich*. Wenn diese bereits vorhanden sind (normalerweise vom Internetprovider bereitgestellt), schließen Sie sie an alle Festnetztelefone und die entsprechenden Telefonbuchsen an.',
'Support7t009' : 'Wenn die ADSL-Verbindung auch dann nicht funktioniert, wenn Sie die oben beschriebenen Schritte 1-3 ausgeführt haben, nehmen Sie Kontakt mit dem technischen Support Ihres Internetproviders auf. Teilen Sie den Mitarbeitern mit, dass Sie Probleme beim Synchronisieren Ihres Modem-Routers mit dem ISP haben.',
'Support3t010' : 'Klicken Sie, sobald Sie mit diesen Schritten fertig sind, auf „Erneut versuchen“.',
'Support3t016' : 'Warum sollten Sie das Modem neu starten?',
'Support3t017' : 'Einige Modems müssen neu gestartet werden, um mit einem neuen Router oder unbekannten Computer zu kommunizieren. Wir können Ihr Modem sehen; es kommuniziert nicht mit Ihrem neuen Router. Durch einen Neustart können Sie dieses Problem wahrscheinlich beheben. <span class="nub"></span>',
'Support4t001' : 'Wir konnten die Verbindung mit Ihrem Router nicht wieder herstellen.',
'Support4t002' : 'Starten Sie Ihren Router neu.',
'Support4t003' : 'Sobald Ihr Router läuft, versuchen Sie erneut, sich zu verbinden.',
'Support4t004' : 'Versuchen Sie ein paar andere Dinge.',
'Support4t005' : 'Starten Sie zuerst Ihren Router neu.',
'Support4t006' : 'Trennen Sie Ihren Router von der Stromversorgung, warten Sie einige Sekunden und schließen Sie ihn wieder an.',
'Support4t006w' : 'Trennen Sie Ihren Router von der Stromversorgung, warten Sie einige Sekunden und schließen Sie ihn wieder an.',
'Support4t007' : 'Sobald das blaue Lämpchen am Router leuchtet, sind wir verbindungsbereit.',
'Support4t008' : 'Versuchen wir nun eine WLAN-Verbindung.',
'Support4t031' : 'Es dauert einige Sekunden, die Verbindung aufzubauen. Dann können Sie es erneut versuchen.',
'Support4t032' : 'Oder Sie können eine Kabelverbindung herstellen.',
'Support4t033' : 'Sie können auch einen Computer an den Router anschließen. Schließen Sie ein Ethernetkabel mit einem Ende an den Computer und mit dem anderen Ende an einen der grauen Anschlüsse am Router an. Unter http://router/ können Sie das Einrichten erneut versuchen.',
'Support4t034' : 'Klicken Sie, sobald Sie mit diesen Schritten fertig sind, auf „Erneut versuchen“.',
'Support4t040' : 'Gehen Sie zu <strong>http://belk.in/PMuxOg</strong> auf einem Gerät, das mit dem Internet verbunden ist.',
'Support4t050' : 'Erneuter Aufbau einer Verbindung',
'Support4t051' : 'In solchen Situationen muss Ihr Router möglicherweise neu gestartet werden oder es muss einfach eine Verbindung neu aufgebaut werden. Daher haben wir eine Anleitung für beides angegeben. Da Sie Ihr Netzwerkkennwort möglicherweise in einem der vorherigen Schritte geändert haben, müssen Sie das Netzwerk erneut auswählen, sobald Sie den Router neu gestartet haben. <span class="nub"></span>',
'Support5t001' : 'Wir konnten die Verbindung mit Ihrem Router nicht wieder herstellen.',
'Support5t002' : 'Starten Sie Ihren Router neu.',
'Support5t003' : 'Sobald Ihr Router läuft, versuchen Sie erneut, sich zu verbinden.',
'Support5t004' : 'Versuchen Sie ein paar andere Dinge.',
'Support5t005' : 'Starten Sie zuerst Ihren Router neu.',
'Support5t006' : 'Trennen Sie Ihren Router von der Stromversorgung, warten Sie einige Sekunden und schließen Sie ihn wieder an.',
'Support5t006w' : 'Trennen Sie Ihren Router von der Stromversorgung, warten Sie einige Sekunden und schließen Sie ihn wieder an.',
'Support5t007' : 'Sobald das blaue Lämpchen am Router leuchtet, sind wir verbindungsbereit.',
'Support5t008' : 'Versuchen wir nun eine WLAN-Verbindung.',
'Support5t009' : 'Es dauert einige Sekunden, die Verbindung aufzubauen. Dann können Sie es erneut versuchen.',
'Support5t010' : 'Oder Sie können eine Kabelverbindung herstellen.',
'Support5t011' : 'Sie könnten einen Computer an den Router anschließen. Schließen Sie ein Ethernetkabel mit einem Ende an den Computer und mit dem anderen Ende an einen der grauen Anschlüsse am Router an. Unter http://router/ können Sie das Einrichten erneut versuchen.',
'Support5t012' : 'Klicken Sie, sobald Sie mit diesen Schritten fertig sind, auf „Erneut versuchen“.',
'Support5t015' : 'Gehen Sie zu <strong>http://belk.in/PMuxOg</strong> auf einem Gerät, das mit dem Internet verbunden ist.',
'Support5t020' : 'Erneuter Aufbau einer Verbindung',
'Support5t021' : 'In solchen Situationen ist es schwierig, zu erkennen, ob Ihr Router neu gestartet werden muss oder wir nur die Verbindung zu ihm neu aufbauen müssen. Daher haben wir eine Anleitung für beides angegeben. Da wir Ihren Netzwerknamen in einem früheren Schritt geändert haben, sollten Sie sich vergewissern, dass Sie mit dem Netzwerk verbunden sind, sobald Sie den Router neu gestartet haben. <span class="nub"></span>',
'Support6t001' : 'Wir konnten die Verbindung mit Ihrem Router nicht wieder herstellen.',
'Support6t002' : 'Starten Sie Ihren Router neu.',
'Support6t003' : 'Sobald Ihr Router läuft, versuchen Sie erneut, sich zu verbinden.',
'Support6t004' : 'Versuchen Sie ein paar andere Dinge.',
'Support6t005' : 'Starten Sie zuerst Ihren Router neu.',
'Support6t006' : 'Trennen Sie Ihren Router von der Stromversorgung, warten Sie einige Sekunden und schließen Sie ihn wieder an.',
'Support6t006w' : 'Trennen Sie Ihren Router von der Stromversorgung, warten Sie einige Sekunden und schließen Sie ihn wieder an.',
'Support6t007' : 'Sobald das blaue Lämpchen am Router leuchtet, sind wir verbindungsbereit.',
'Support6t008' : 'Versuchen wir nun eine WLAN-Verbindung.',
'Support6t031' : 'Es dauert einige Sekunden, die Verbindung aufzubauen. Dann können Sie es erneut versuchen.',
'Support6t032' : 'Oder Sie können eine Kabelverbindung herstellen.',
'Support6t033' : 'Sie könnten einen Computer an den Router anschließen. Schließen Sie ein Ethernetkabel mit einem Ende an den Computer und mit dem anderen Ende an einen der grauen Anschlüsse am Router an. Unter http://router/ können Sie das Einrichten erneut versuchen.',
'Support6t034' : 'Klicken Sie, sobald Sie mit diesen Schritten fertig sind, auf „Erneut versuchen“.',
'Support6t037' : 'Gehen Sie auf einem Gerät, das mit dem Internet verbunden ist zu <strong>http://belk.in/Nm1f5S</strong>',
'Support6t050' : 'Erneuter Aufbau einer Verbindung',
'Support6t051' : 'In solchen Situationen muss Ihr Router möglicherweise neu gestartet werden oder es muss einfach eine Verbindung neu aufgebaut werden. Daher haben wir eine Anleitung für beides angegeben. Da Sie Ihr Netzwerkkennwort möglicherweise in einem der vorherigen Schritte geändert haben, müssen Sie das Netzwerk erneut auswählen, sobald Sie den Router neu gestartet haben. <span class="nub"></span>',
'Support7t001' : 'Ihr Modem-Router ist nicht mit dem Internet verbunden.',
'Support7t004' : 'An Ihrem Telefonanschluss ist ein Problem aufgetreten.',
'Support7t050' : 'Verbindungsprobleme',
'Support7t051' : 'In solchen Fällen ist es nicht einfach festzustellen, warum Probleme beim Herstellen einer Verbindung mit dem ISP auftreten. Wir haben Ihre Kabelverbindungen so gut wie möglich überprüft. Als nächstes sollten Sie überprüfen, ob Sie den richtigen Anschluss, oder, bei Bedarf, den richtigen Filter (Splitter) verwenden. Wenn Sie das Problem trotzdem nicht beheben können, wenden Sie sich an Ihren ISP. <span class="nub"></span>',
'SupportNumber' : '1-800-123-4567',
'UpSpeed' : '12.5',
'p2410t012' : 'Wenn Sie auf \'Wiederherstellen\' klicken, werden Ihre Router-Einstellungen wie Name und Kennwort gelöscht und durch die Werkseinstellungen ersetzt.  Ihre Computer, Telefone, etc. müssen dann entsprechend dieser Einstellungen konfiguriert werden, damit über diesen Router eine Internetverbindung hergestellt werden kann.  Möchten Sie wirklich fortfahren?',
'gtRestore' : 'Wiederherstellen',
'gtCancel' : 'Abbrechen',
'alt="Loading"' : 'Wird geladen',
'alt="Restart Router"' : 'Router neu starten',
'alt="Check Wires"' : 'Kabel überprüfen',
'alt="Check Phone Connection"' : 'Telefonverbindung überprüfen',
'alt="Check WAN Connection"' : 'WAN-Verbindung überprüfen',
'alt="Checkmark"' : 'Häkchen',
'alt="Change"' : 'Ändern',
'alt="Print"' : 'Drucken',
'alt="Expand"' : 'Erweitern',
'alt="Caret"' : 'Caret-Zeichen',
'alt="Cut"' : 'Ausschneiden',
'alt="Browser"' : 'Browser',
'alt="Wifi"' : 'WLAN',
'alt="Password"' : 'Kennwort',
'alt="Check Phone Jack"' : 'Telefonstecker überprüfen',
'alt="Turn Off Modem"' : 'Modem ausschalten',
'alt="Turn On Modem"' : 'Modem einschalten',
'alt="Check Phone Filters"' : 'Telefonfilter/-Splitter überprüfen',
'gtSerial' : 'Seriennummer',
'gt5GName' : '5-GHz-SSID',
'gt5GKey' : '5-GHz-Schlüssel',
'p1020MRt001' : 'Wir haben Probleme, mit Ihrem Internetprovider zu kommunizieren.',
'p1020MRt002' : 'Bitte starten Sie den Modem-Router neu.',
'p1020MRt003' : 'Wir können keine Internetverbindung herstellen. Versuchen Sie deshalb, Ihren Modem-Router neu zu starten.',
'p1020MRt004' : 'Schalten Sie den Modem-Router aus. Normalerweise müssen Sie dazu einen Schalter am Modem-Router drücken oder ihn einfach von der Stromversorgung trennen.',
'p1020MRt005' : 'Warten Sie 15 Sekunden.',
'p1020MRt006' : 'Schalten Sie Ihren Modem-Router wieder ein.',
'p1020MRt007' : 'Nach wenigen Sekunden gehen seine Leuchten an und es müsste eine Verbindung mit Ihrem ISP hergestellt werden.',
'p1020MRt008' : 'Sollte dieses Problem weiterhin auftreten, wenden Sie sich an Ihren ISP, damit dieser den Fehler Ihres Kontos behebt.',
'p1020MRt009' : 'Wir warten, bis Ihr Modem-Router aus- und wieder eingeschaltet wird, und fahren dann automatisch fort.',
'p1020MRt010' : 'Warum sollten Sie das Modem neu starten?',
'p1020MRt011' : 'Einige Modems müssen neu gestartet werden, bevor sie mit einem neuen Router oder unbekannten Computer kommunizieren. Bei einer Störung bei Ihrem Internetprovider kann es sein, dass das Modem die Verbindung plötzlich verliert. Wir können Ihr Modem sehen, aber nicht das Internet. Wenn Sie es neu starten, sollte es wieder gehen. <span class="nub"></span>',
'p1010t001' : 'Wir haben Probleme, mit Ihrem Modem zu kommunizieren.',
'p1010t002' : 'Wir denken, es handelt sich um ein Verkabelungsproblem.',
'p1010t003' : 'Ein Kabel sollte Ihr Modem mit dem gelben Anschluss an Ihrem Router verbinden. Ihr Modem sollte eingeschaltet sein.',
'p1010t004' : 'Es gibt einige Dinge, die Sie tun können, um sicherzustellen, dass alles betriebsbereit ist:',
'p1010t005' : 'Vergewissern Sie sich, dass Ihr Modem eingeschaltet ist. Sein Netzadapter sollte an beiden Enden angeschlossen sein und ein oder mehrere Lämpchen am Modem sollten leuchten.',
'p1010t006' : 'Ein Netzwerkkabel sollte Ihr Modem mit dem gelben Anschluss an Ihrem Router verbinden. Dieses Kabel überträgt das Signal von Ihrem Modem zum Router. Ohne es können Sie nicht ins Internet gehen.',
'p1010t007' : 'Wenn dies beides so ist, wie es sein sollte, können Sie versuchen, Ihr Modem neu zu starten, indem Sie es von der Stromversorgung trennen, fünfzehn Sekunden warten und es dann wieder anschließen. Wenn Ihr Modem eine Batterie hat, müssen Sie die Reset-Taste des Modems finden und diese stattdessen verwenden.',
'p1010t008' : 'So sollten diese Verbindungen aussehen:',
'p1010t009' : 'Wir werden weiterhin auf eine Verbindung warten, während Sie prüfen.',
'p1010t010' : 'Das häufigste Problem bei der Verkabelung ist zwischen dem Modem und dem Router. Es ist wichtig, beide Enden der Kabel zu prüfen. Ein Ende sollten an den gelben Anschluss an Ihrem neuen Router und das andere Ende sollte an einen ähnlichen Anschluss an Ihrem Modem angeschlossen sein. Verschiedene Modemhersteller beschriften die Anschlüsse unterschiedlich. Der Anschluss kann mit „data“, „LAN“, „network“ oder „Ethernet“ beschriftet sein.',
'Support3t005' : 'Versuchen Sie die folgenden Schritte, um Ihr Modem neu zu starten:',
'Support3t006' : 'Sehen Sie nach, ob auf der Vorderseite des Modems Lämpchen leuchten. Wenn Sie leuchten, ist Ihr Modem eingeschaltet und Sie müssen möglicherweise etwas warten, bis es bereit ist.',
'Support3t007' : 'Überprüfen Sie, ob die Stromversorgung richtig an das Modem und die Wandsteckdose angeschlossen ist.',
'Support3t008' : 'Wenn Ihr Modem einen Netzschalter hat, überprüfen Sie, ob er eingeschaltet ist.',
'Support3t009' : 'Überprüfen Sie noch einmal, ob Ihr Modem immer noch an Ihren neuen Router angeschlossen ist.',
'Support1t012' : 'Gehen Sie auf einem Gerät mit Internetverbindung zu: <strong>http://belk.in/LIkBoH</strong>',
'QOSt001' : 'Gehen Sie folgendermaßen vor, um Intellistream zu aktivieren:',
'QOSt002' : 'Verbinden Sie Ihren Computer über ein Ethernetkabel mit Ihrem Belkin Router (empfohlen).',
'QOSt003' : 'Führen Sie einen Geschwindigkeitstest für Ihre Internetverbindung aus, indem Sie hier auf <a href="http://www.speedtest.net" target="_blank" class="speed_font4">Speedtest.net</a> klicken.',
'QOSt004' : 'Wenn Sie den Geschwindigkeitstest ausgeführt haben, geben Sie die Werte, die auf Speedtest.net angezeigt werden, in die obigen Felder Download-Geschwindigkeit und Upload-Geschwindigkeit ein. Klicken Sie dann unten auf \'Speichern\'. ',
'gtMbps' : 'Mbit/s',
'QOSt006' : 'Da Ihre Download-Geschwindigkeit hoch ist, priorisiert Intellistream nur Ihre Upload-Geschwindigkeit.',
'QOSt007' : 'Da Ihre Upload-Geschwindigkeit hoch ist, priorisiert Intellistream nur Ihre Download-Geschwindigkeit.',
'QOSt008' : 'Da Sie bereits eine sehr schelle Internetverbindung haben, kann Intellistream die Geschwindigkeit nicht erhöhen und wird deshalb nicht aktiviert.',
'QOSt009' : 'Bitte geben Sie eine Zahl ein, die größer als 0.01 ist.',
'QOSt010' : 'Bitte geben Sie Zahlen ein, die größer als 0.01 sind.',
'gtSettingsNotSaved' : 'Nicht alle Einstellungen sind gespeichert. Klicken Sie hier, um sie zu speichern oder verlassen bzw. aktualisieren Sie den Bildschirm, um die Änderungen zu verwerfen.',
'QOSt011' : 'Bitte geben Sie eine Zahl zwischen 0,01 und 100,00 ein.',
'QOSt012' : 'Bitte geben Sie Zahlen zwischen 0,01 und 100,00 ein.',
'QOSt013' : 'Bitte geben Sie eine Zahl zwischen 0,01 und 1000,00 ein.',
'QOSt014' : 'Bitte geben Sie Zahlen zwischen 0,01 und 1000,00 ein.',


// End belkin transation table
LastID : "LastValue"	
	
	
}

function translate(key) {
	return langDictionary[key];
}
