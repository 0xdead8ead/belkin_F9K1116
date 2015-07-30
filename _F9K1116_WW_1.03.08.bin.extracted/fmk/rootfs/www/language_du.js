function dw(message)
{
	document.write(message);	
}



common_err1=" %s is NULL";
common_err2="Geactiveerd";
common_err3="Deactiveren";
dyndns_err1="Geen Bericht.";
dyndns_err2="Deze vakjes mogen niet leeg zijn";
dyndns_err3="IP adres is onveranderd en hoeft niet te worden geactualiseerd!";
dyndns_err4="een NULL in gebruikersnaam, wachtwoord of hostnaam";
dyndns_err5="DNS verzoek mislukt";
dyndns_err6="DNS serverfout";
dyndns_err7="Geen antwoord van DNS server of geen internetverbiniding";
dyndns_err8="HTTP kan geen verbinding maken";
dyndns_err9="Gebruikersnaam of wachtwoord onjuist";
dyndns_err10="Update OK:Goed";
dyndns_err11="Update OK:good";
dyndns_err12="Wachten a.u.b.";
dyndns_err13="Domein naam nicht volledig gekwalificeerd:notfqdn";
dyndns_err14="Host bestaat niet:nohost";
dyndns_err15="Host wordt niet door u beheerd";
dyndns_err16="Vanwege misbruik geblokkeerd:abuse";
dyndns_err17="DynDNS Serverfout:numhost";
dyndns_err18="Dienst is uitgeschakeld";
dyndns_err19="Onbekende antwoord ontvangen!";
dyndns_err20="Er is een onbekende fout opgetrede!";
dyndns_err21="Kan geen HTTP socket openen";
dyndns_err22="WAN IP Adres is NULL";
dyndns_err23='Registratie mislukt';
dyndns_err24='Geregistreerd';
dyndns_err25='Aanmelden mislukt';
dyndns_err26='Verbinding mislukt';
upgrade_err1="Het upgradebestand is niet het juiste type of heeft niet de juiste versie voor dit apparaat. Bijwerken mislukt Download het juiste bestand en probeer het opnieuw.";
upgrade_err2="Firmware-upgrade beëindigd vanwege onvoldoende capaciteit. Upgrade mislukt.\nProbeer het opnieuw als het systeem niet actief (geen internetverkeer).";
upgrade_err3="Cannot upload, please contact administrator.";
upgrade_err4="Firmware is too large, upgrade failed.";
upgrade_err5="You already have the lastest firmware installed.";
upgrade_err6="Tijdens de upgrade is gebleken dat het firmwarebestand is beschadigd.  Download het firmwarebestand opnieuw en probeer het nog eens.";
upgrade_err7="Draadloze client kan de firmware niet bijwerken.";
upgrade_err8="Upgradebestand is NULL of te klein.\nUpgrade mislukt.\n	Download het juiste bestand en probeer het opnieuw.";
OK='OK';
Cancel='Annuleren';
Close='Sluiten';
show0='Router instellen';
show1='Home';
show2='Help';
show3='Inloggen';
show4='Uitloggen';
show5='Internetstatus';
show6='Verbonden';
show7='Niet verbonden';
show8='LAN-setup';
show9='LAN-instellingen';
show10='DHCP-cliëntenlijst';
show11='Internet WAN';
show12='Type verbinding';
show13='DNS';
show14='MAC-adres';
show15='DDNS';
show16='WLAN is niet beschikbaar';
show17='Draadloze communicatie';
show18='Kanaal en SSID';
show19='Beveiliging';
show20='Als accesspoint gebruiken';
/*show21='Specify IP Address';*/
show21='Wi-Fi Protected Setup';
show22='MAC-adressen beheren';
show23='Draadloze bridge (brug)';
show24='Firewall';
show25='Virtuele servers';
show26='Cliënt-IP-filters';
show27='MAC-adressenfilter';
show28='DMZ (Gedemilitariseerde zone)';
show29='WAN-ping blokkering';
show30='Beveiligingslog';
show31='Hulpprogramma\'s';
show33='Router herstarten';
show34='Accesspoint herstarten';
show35='Fabrieksinstellingen herstellen';
show36='Instellingen opslaan/bewaren';
show37='Vorige instellingen herstellen';
show38='Firmware bijwerken';
show39='Systeeminstellingen';
show42='EWC Setting';
show43='Setup Wizard';
show44='Manual Settings';
show47='Toegangscontrole';
//show48='Zelfherstellend';
show48='Self Healing';
show54='Verbindingsinstellingen';
sm1='Meer informatie';
btn1='Wijzigingen ongedaan maken';
btn2='Wijzigingen toepassen';
btn3='Web Site';
btn4='Reset to Default';
btn5='Previous';
btn6='Routing Table';
btn7='Apply';
Router='Router';
AP='Accesspoint';
Dynamic='Dynamisch';
Static='Statisch';
PPPoE='PPPoE';
PPTP='PPTP';
L2TP='L2TP';
Multi_PPPoE='Multi-PPP over Ethernet';
UNKNOWN='UNKNOWN';
cff1='Firmware gecontroleerd';
cff2='Informatie over firmware';
cff3='Er is geen nieuwe bijgewerkte firmware beschikbaar voor deze router!';
cff4='Kan geen verbinding maken met de firmware-informatieserver;  <br>controleer nogmaals de WAN-verbinding.';
d1='Belkin | Duplicaat-beheerder';
d2='Duplicaat-beheerder';
d3='Dit apparaat wordt beheerd door';
d4='op dit ogenblik!';
fc1='Firewall > Cliënt-IP-filters';
fc2a='U kunt de router zo configureren dat de toegang tot het internet, e-mail en andere netwerkdiensten op bepaalde dagen en uren gesloten is';
IP='IP';
Port='Poort';
Type='Type';
BT='Blokkeertijd';
Day='Dag';
Tm='Tijd';
Enable='Activeren';
BOTH='BEIDE';
Always='Altijd';
Block='Blokkeren';
SUN='>ZO';
MON='>MA';
TUE='>DI';
WED='>WO';
THU='>DO';
FRI='>VR';
SAT='>ZA';
PM=':00 PM';
AM=':00 AM';
PM2=':30 PM';
AM2=':30 AM';
EcoMode='Eco-modus:';
Dimicons='Pictogram dimmen';
DisableEco='Zender uitschakelen van';
EcoTo='Tot';
EcoSu='Zo';
EcoMo='Ma';
EcoTu='Di';
EcoWe='Wo';
EcoTh='Do';
EcoFr='Vr';
EcoSa='Za';
EcoExcept='met uitzondering van';
fcsm='Het getal in het poorteninvoervak moet een getal zijn tussen 1 en 65535.';
fcrm='De tweede reeks poorten moet groter zijn dan de eerste.';
fcripm='De tweede IP-reeks moet groter zijn dan de eerste.';
fcnsm='Het persoonlijke poortbereik is niet juist.';
fcwdm='The end Day must be later than the start Day.';
fcdtm='The Time must be later than the start Time when they are in the same day.';
fclanip='The IP filter range should not cover the LAN IP address.';
fd1='Firewall > DMZ';
fd2='Met de DMZ-functie kunt u een van de computers van uw netwerk buiten de NAT-firewall plaatsen. Dit kan nodig zijn wanneer de NAT-functie problemen veroorzaakt met applicaties als games en videoconferenties. Schakel deze functie alleen tijdelijk in.';
fd3='Computers in de DMZ (gedemilitariseerde zone) zijn niet tegen hackeraanvallen beveiligd.';
fd4='Om een computer in de DMZ te plaatsen, voert u de laatste twee cijfers van zijn IP-adres in het onderstaande veld in en selecteert u "Activeren". Klik op "Wijzigingen toepassen" om de wijziging van kracht te laten worden.';
fd5='IP-adres van virtuele DMZ-host ';
fd6='Statisch IP-adres';
fd7='Privé IP';
fd8='Activeren';
fmc1='Firewall > MAC-adressen filter';
fmc2='Met deze functie kunt u een lijst van toegestane cli?nten opstellen. Als u deze functie activeert, moet u de MAC-adressen van alle cli?nten op uw netwerk invoeren om elk van hen toegang te verlenen.';
fmc3='Filteren van MAC-adressen activeren';
fmc4='Lijst van te filteren MAC-adressen';
fmc5='Blokkeren';
fmc6='Host ';
fmc7='MAC-adres';
fmc8='Dit MAC is al toegevoegd!';
fmc9='U alleen kunt maximaal 20 items.';
Add='Toevoegen';
Added='Added'
Del='Verwijderen';
fmcipm='U hebt niet alle hexadecimale tekens ingevoerd ofwel een of meer hexadecimale tekens die u hebt ingevoerd zijn ongeldig. Een hexadecimaal teken kan een getal zijn van 0 t/m 9 of een letter van A(a) t/m F(f).';
fmn1='Firewall';
fmn2='Uw router is uitgerust met een firewall die uw netwerk beschermt tegen een groot aantal veel voorkomende aanvallen van hackers waaronder aanvallen met Ping of Death (PoD) en Denial of Service (DoS). U kunt de firewall-functie desgewenst uitschakelen. Hierdoor ligt uw netwerk weliswaar niet volledig open voor hackeraanvallen maar toch is het verstandig uw firewall zoveel mogelijk ingeschakeld te laten.';
fmn3='Firewall activeren / deactiveren';
Disable='Deactiveren';
fp1='Firewall > WAN Ping blokkeren';
fp2='GEAVANCEERDE FUNCTIE!</b> U kunt de router zo configureren dat hij niet reageert op een ICMP-ping (ping naar de WAN-poort). Hierdoor bent u beter beschermd.';
fp3='ICMP-ping blokkeren ';
fs1='Firewall > Beveiligingslog';
fs1b='Hulpprogramma’s > Beveiligingslog';
fs2='De router houdt een logboek bij van alle activiteiten binnen de router zoals het aan- en afmelden van computers en alle pogingen vanuit het internet om toegang te krijgen tot uw computer. U kunt het logboek hieronder bekijken';
fs3='Logbestand';
Save='Opslaan';
Clear='Leeg maken';
Refresh='Vernieuwen';
System_log='System log:';
Firewall_log='Firewall log:';
fv1='Firewall > Virtuele Servers';
fvipm='U hebt niet alle IP-adressen ingevoerd \n of sommige getallen die u hebt ingevoerd zijn ongeldig. \n Het getal in het invoervak voor IP-adressen moet een getal zijn tussen 0 en 254.';
fvrm='Schakel het extern beheer uit. Er is een conflict tussen de poort van het extern beheer en een inkomende poort van een virtuele server.';
fvipr='Het binnenkomende poortbereik is niet juist.';
fvppr='Het persoonlijke poortbereik is niet juist.';
fvippnm='Het binnenkomende poortbereik is niet juist.';
fv2='De functie Virtuele Servers biedt u de mogelijkheid externe (internet)verbindingen voor diensten zoals een webserver (poort 80), FTP-server (poort 21) of andere applicaties via uw router door te sturen naar uw interne netwerk. ';
fv3='Active Worlds';
fv4='Age of Empires';
fv5='Aanvulling op Age of Empires: The Rise of Rome';
fv6='Aanvulling op Age of Empires II: The Conquerors';
fv7='Age of Empires II: The Age of Kings';
fv8='Age of Kings';
fv9='Age of Wonders';
fv10='Aliens vs. Predator ';
fv11='Anarchy Online (BETA) ';
fv12='AOL Instant Messenger ';
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
fv39='DirectX 7 Games';
fv40='DirectX 8 Games';
fv41='Domain Name Server (DNS) ';
fv42='Doom';
fv43='Dune 2000';
fv44='Dwyco videoconferenties';
fv45='Elite Force';
fv46='Everquest';
fv47='F-16 ';
fv48='F-22 Lightning 3';
fv49='F-22 Raptor ';
fv50='F22 Raptor (Novalogic)';
fv51='Falcon 4.0';
fv52='Fighter Ace II';
fv53='Flight Simulator 2000 ';
fv54='Flight Simulator 98';
fv55='Freetel';
fv56='FTP-server ';
fv57='GNUtella ';
fv58='Golf editie 1998';
fv59='Golf editie 1999';
fv60='Golf editie 2001';
fv61='Go2Call';
fv62='Half Life';
fv63='Half Life-server';
fv64='Heretic II-server';
fv65='I76';
fv66='Ivisit';
fv67='IRC';
fv68='IStreamVideo2HPz';
fv69='KaZaA';
fv70='Kohan Immortal Sovereigns ';
fv71='LapLink Gold ';
fv72='Links 2001';
fv73='Lotus Notes-server';
fv74='Mail (POP3)';
fv75='Mail (SMTP)';
fv76='MechCommander 2.0 ';
fv77='MechWarrior 3';
fv78='MechWarrior 4';
fv79='Media Player 7';
fv80='Midtown Madness';
fv81='Midtown Madness 2';
fv82='Mig 29 ';
fv83='Monster Truck Madness ';
fv84='Monster Truck Madness 2';
fv85='Motocross Madness';
fv86='Motocross Madness 2';
fv87='Motorhead-server';
fv88='MSN Gaming Zone';
fv89='MSN Messenger';
fv90='Myth';
fv91='Myth II Server';
fv92='Myth: The Fallen Lords';
fv93='Need for Speed';
fv94='NetMech ';
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
fv105='Quake II (Cliënt en server)';
fv106='Quake III';
fv107='Red Alert';
fv108='Rise of Rome';
fv109='Roger Wilco';
fv110='Rogue Spear';
fv111='Secure Shell Server (SSH)';
fv112='Secure webserver (HTTPS) ';
fv113='ShoutCast';
fv114='SNMP';
fv115='SNMP Trap';
fv116='Speak Freely ';
fv117='StarCraft';
fv118='Starfleet Command';
fv119='StarLancer ';
fv120='SWAT3';
fv121='Telnet-server';
fv122='The 4th Coming ';
fv123='Tiberian Sun: C&C ';
fv124='Tiberian Sun: C&C III';
fv125='Total Annihilation';
fv126='Ultima';
fv127='Unreal Tournament';
fv128='Urban Assault';
fv129='VoxPhone 3.0 ';
fv130='Warbirds 2';
fv131='Webserver (HTTP)';
fv132='WebPhone 3.0';
fv133='Windows 2000 terminal-server';
fv134='X Windows';
fv135='Yahoo Pager ';
fv136='Yahoo Messenger Chat';
fv137='Pal Talk';
fv138='Real Player 8 Plus';
fv139='RealAudio';
fv140='Netmeeting 2.0, 3.0, Intel Video Phone';
fv141='Westwood Online ';
fv142='CuSeeMe ';
fv143='ICUII-cliënt     ';
fv200='Vermelding ongedaan maken ';
Description='Beschrijving ';
Inb='Binnenkomende poort';
Type='Type';
Pipa='Persoonlijk IP-adres ';
Pport='Persoonlijke poort';
htop='bovenzijde';
h1='Help';
h2='VERKLARENDE WOORDENLIJST  ';
h3='<b>Beheerder</b> Het is de taak van een beheerder om een netwerk te onderhouden. In het geval van deze router is het de beheerder die de router installeert en de instellingen wijzigt.';
h4='<b>Cliënt</b>  Dit is een computer op het netwerk die van de diensten van de router gebruik maakt, zoals de automatische DHCP-server en de brandmuur ofwel ‘firewall';
d5="<b>DDNS</b> De Dynamic DNS service staat statische hostnamen toe voor dynamische IP-adressen in een van de vele domeinen van DynDNS.org, waardoor toegang tot uw netwerkcomputers vanaf verschillende plaatsen op het internet eenvoudiger is. DynDNS.org biedt deze service, voor maximaal vijf hostnamen, als een gratis dienst voor de internetgemeenschap.";
h5='<b>DHCP</b> Dynamic Host Configuration Protocol. Dit protocol configureert automatisch de TCP/IP-instellingen van elke computer in uw privé-netwerk.  ';
h6='<b>Inbelverbinding</b> Verbinding die gebruik maakt van het openbare telefoonnet';
h7='<b>DMZ</b> (DeMilitarized Zone ofwel gedemililitariseerde zone) Virtuele zone in de router die niet door de brandmuur van de router wordt beveiligd.  In de DMZ kan één computer worden geplaatst.';
h8='<b>DNS Server Address</b> Afkorting van Domain Name System. Geeft internet host-computers de mogelijkheid een domeinnaam (zoals belkin.com) en één of meer IP-adressen (zoals 192.34.45.8) te hebben. Een DNS-server houdt een database bij met host-computers en hun respectieve domeinnamen en IP-adressen, zodat de gebruiker naar het juiste IP-adres wordt gestuurd als een bepaalde domeinnaam wordt opgegeven (zoals bijvoorbeeld het geval is als u "belkin.com" in uw internetbrowser intypt). Het DNS-serveradres dat de computers in uw privénetwerk gebruiken, is de locatie van de DNS server die u door uw internet-serviceprovider is toegewezen.';
h9='<b>DSL-modem</b> DSL is de afkorting van Digital Subscriber Line. Een DSL-modem gebruikt bestaande telefoonlijnen om data met hoge snelheid over te sturen. ';
h10='<b>Dynamic IP (Dynamisch IP-adres)</b>  IP-adres dat automatisch van een DHCP-server wordt verkregen. ';
h11='<b>Ethernet</b> Norm voor computernetwerken. Ethernet-netwerken zijn onderling met speciale kabels en hubs verbonden en sturen gegevens over met snelheden tot 10 miljoen bits per seconde (Mbps).';
h12='<b>Firewall</b> Elektronische begrenzing die niet-geautoriseerde gebruikers belet bepaalde bestanden en computers in een netwerk te openen. ';
h13='<b>Firmware</b> Software die in een geheugen is opgeslagen. Essentiële programma\'s die ook na uitschakeling van het systeem blijven functioneren. Firmware is gemakkelijker te vervangen dan hardware maar heeft een meer permanent karakter dan op een schijf opgeslagen software. ';
h14='<b>IP-adres</b> IP is de afkorting van Internet Protocol. Een IP-adres bestaat uit een combinatie van vier door punten gescheiden getallen die een enkele unieke internet computer-host aanduidt. Een voorbeeld: 192.34.45.8.  ';
h15='<b>ISDN</b> Integrated Services Digital Network. Digitale telecommunicatielijnen die zowel gesproken woord als netwerkdiensten tot 128 K kunnen transporteren. ISDN-modems werken veel sneller en zijn betrouwbaarder dan snelle analoge modems. ISDN-lijnen worden door veel telecommunicatiebedrijven aangeboden.';
h16='<b>ISP</b> Internet Service Provider. Een ISP (internetserviceprovider) is een bedrijf dat de verbinding met het internet verzorgt voor privé-personen, andere bedrijven en organisaties.';
h17='<b>ISP Gateway-adres</b> (zie ISP voor definitie). Het ISP-gateway-adres is een IP-adres voor de internetrouter die zich in het bedrijfsgebouw van de internetserviceprovider bevindt. Dit adres is alleen vereist bij het gebruik van een kabel- of DSL-modem.';
h18='<b>LAN</b> Local Area Network. Een LAN ofwel lokaal netwerk is een groep computers en apparaten die binnen een betrekkelijk kleine ruimte (zoals een woonhuis of een kantoor) met elkaar verbonden zijn. Uw privé-netwerk wordt als lokaal netwerk beschouwd.';
h19='<b>MAC Address</b> MAC is de afkorting van Media Access Control. Een MAC-adres is het hardware-adres van een apparaat dat met een netwerk is verbonden.';
h20='<b>MTU</b> Maximum Transmission Unit. De grootste gegevenseenheid die over een bepaald fysiek medium kan worden verzonden.';
h21='<b>NAT</b> Network Address Translation. Door middel van deze procedure kunnen alle computers in een privé-netwerk één IP-adres gebruiken. Wanneer u de NAT-faciliteiten van de HomeConnect gateway voor privénetwerken gebruikt, heeft elke computer in uw privénetwerk toegang tot het internet zonder dat u meer IP-adressen (abonnementen) van uw internetserviceprovider hoeft af te nemen.';
h22='<b>Port</b> Logisch kanaal dat herkenbaar is aan een eigen uniek poortnummer. Applicaties "luisteren" op specifieke poorten naar informatie die wellicht voor hen bestemd is.';
h23='<b>PPPoE</b> Point-to-Point Protocol over Ethernet. Point-to-Point Protocol is een methode voor beveiligde datatransmissie die oorspronkelijk voor telefoonverbindingen is ontwikkeld. PPPoE is bestemd voor Ethernet-verbindingen.  ';
h24='<b>PPTP</b> Point-to-Point Tunneling Protocol. Een versie van PPP (Point-to-Point Protocol) met de mogelijkheid datapakketten die voor een bepaald netwerkprotocol zijn geformatteerd in te kapselen in pakketten die door een ander protocol worden gebruikt. Deze tunnelingtechniek maakt het mogelijk TCP/IP-data over een niet-TCP/IP-netwerk te versturen. U kunt PPTP gebruiken voor het koppelen van verschillende fysieke netwerken waarbij het internet als "tussenpersoon" fungeert.';
h25='<b>SNTP</b> Simple Network Time Protocol. Communicatieprotocol dat de transmissie van real-time informatie via een netwerk of het internet mogelijk maakt.';
h26='<b>SPI</b> Stateful Packet Inspection. SPI is een vorm van bedrijfsmatige internetbeveiliging waarover u als gebruiker van een HomeConnect gateway voor privé-netwerken beschikt. Met behulp van SPI fungeert de gateway als een firewall die uw netwerk tegen computerhackers beschermt.';
h27='<b>Static IP</b> Met de hand ingesteld IP-adres dat nooit verandert.  ';
h28='<b>Subnet Mask</b> Een subnetmasker, dat een onderdeel kan vormen van de TCP/IP informatie die door uw internet-serviceprovider is verstrekt, is een combinatie van vier getallen die als een IP-adres zijn geconfigureerd. Het wordt gebruikt voor het aanmaken van IP-adresgetallen die uitsluitend binnen een bepaald netwerk worden gebruikt (dit in tegenstelling tot geldige IP-adresgetallen die door het internet worden herkend en die moeten worden toegewezen door InterNIC).  ';
h29='<b>TCP</b> Transmission Control Protocol. Het meest gebruikte protocol voor internettransportlagen. TCP is verbinding-georiënteerd en stroom-georiënteerd en zorgt voor betrouwbare communicatie via netwerken die gebruik maken van packet-switching. ';
h30='<b>TCP/IP</b> Transmission Control Protocol over Internet Protocol. Dit is het standaardprotocol voor gegevensoverdracht via het internet.  ';
h31='<b>UDP</b> User Datagram Protocol. Communicatieprotocol voor de internetnetwerklaag, -transportlaag en -sessielaag dat het mogelijk maakt een datagrambericht van een bepaalde computer te verzenden naar een applicatie die op een andere computer wordt uitgevoerd. In tegenstelling tot TCP heeft UDP geen aansluitingen en het garandeert geen betrouwbare communicatie; de applicatie zelf moet eventuele fouten verwerken en op een betrouwbare aflevering toezien. ';
h32='<b>WAN</b> Wide Area Network. Netwerk dat computers verbindt die zich op geografisch gescheiden plaatsen bevinden, (d.w.z. verschillende gebouwen, steden of landen). Het internet is een WAN. ';
h33='<b>WAN IP-adres)</b> Het IP adres dat door de ISP aan de router is toegekend.';
h34='<b>WLAN</b> Wireless Local Area Network. Lokaal netwerk dat computers via radiogolven met elkaar verbindt (zoals 802.11b).';
h35="<b>L2TP</b> Layer Two (2) Tunneling Protocol. an extension to the PPP protocol that enables ISPs to operate Virtual Private Networks (VPNs). L2TP merges the best features of two other tunneling protocols: PPTP from Microsoft and L2F from Cisco Systems. Like PPTP, L2TP requires that the ISP's routers support the protocol.";
h39='<b>DHCP</b> De DHCP-serverfunctie maakt het installeren van een netwerk bijzonder gemakkelijk omdat automatisch een IP-adres wordt toegekend aan elke computer in het netwerk. De DHCP-server kan zo nodig uitgeschakeld worden. Als u de DHCP-server uitschakelt, moet u voor elke computer in het netwerk met de hand een statisch IP-adres instellen . De IP-pool is de verzameling IP-adressen die is gereserveerd voor dynamische toewijzing aan de computers in uw netwerk. De standaardwaarde is 2-100 (99 computers). Als u dit aantal wilt veranderen, voert u een nieuw begin- en eind-IP-adres in en klikt u op ¡°Apply Changes¡± (Wijzigingen aanbrengen).';
Enabled='Geactiveerd';
Disabled='Deactiveren';
Auto='Auto';
str1='Dit apparaat wordt beheerd door ';
str2=' op dit ogenblik!';
DDNSDisable='Deactiveren';
DynDNS='DynDNS';
DtDNS='DtDNS';
Current='Actueel kanaal';
i1='Instellingen thuis';
i2='Status';
i3='Versie-informatie';
i4='Firmwareversie';
i5='Versie opstartprocedure';
i6='Hardware';
i7='Serienummer ';
i8='LAN-instellingen';
i9='LAN/WLAN MAC';
i9a='LAN MAC';
i9b='WLAN is niet beschikbaar';
i10='IP-adres';
i11='Subnetmasker ';
i12='DHCP-server ';
NoClients='Geen Clients';
Clients='Clients';
i13='Internetinstellingen';
i14='WAN MAC-Adres';
i15='Type verbinding';
i16='Subnetmasker';
i17='WAN IP';
i18='Standaard Gateway';
i19='DNS-adres';
i20='Productkenmerken';
i21='NAT ';
i22='Firewallinstellingen';
i23='SSID';
i24='Beveiliging';
i25='Printer';
i26='inschakelen/uitschakelen';
i27='U moet zich aanmelden voordat u wijzigingen kunt aanbrengen.';
i28='Taal';
i29='Huidige taal';
i30='Beschikbare talen';
i31='Statisch IP-adres';
i32='Draadloze communicatie Deactiveren ';
ld1='LAN > DHCP';
ld2='LAN > DHCP-cliëntenlijst';
ld3='Op dit tabblad vindt u het IP-adres, de hostnaam en het MAC-adres van elke computer die op uw netwerk aangesloten is. Als de computer geen specifieke hostnaam heeft, is het vak voor hostnamen leeg. Wanneer u op "Vernieuwen" klikt, wordt het overzicht bijgewerkt.';
ld4='IP-adres';
ld5='Hostnaam';
ld6='MAC-adres';
lm1='LAN (Lokaal netwerk)';
lm2='Uw router is voorzien van een DHCP-server die automatisch aan elke computer op uw netwerk een IP-adres toekent. De standaard-fabrieksinstellingen voor de DHCP-server zijn voor vrijwel elke applicatie geschikt. Als u de instellingen wilt wijzigen, kunt u dat zonder meer doen.';
lm3='U kunt het volgende doen:';
lm4='Intern IP-adres van de router wijzigen. De standaardinstelling = 192.168.2.1';
lm5='Subnetmasker wijzigen. De standaardinstelling = 255.255.255.0';
lm6='DHCP-serverfunctie activeren/deactiveren. De standaardinstelling = ON (Geactiveerd)';
lm7='Beginadres en eindadres van de IP-pool specificeren. Standaardinstelling = Beginadres: 2 / Eindadres: 100';
lm8='Leasetijd IP-adres specificeren. Standaardinstelling = altijd ';
lm9='Lokale domeinnaam specificeren. Standaardinstelling = Belkin ';
lm10='Om wijzigingen aan te brengen, klikt u op LAN instellingen op het tabblad "LAN" aan de linkerzijde.';
lm11='De router geeft u ook een overzicht van alle cliënt-computers die op het netwerk aangesloten zijn. Om deze lijst weer te geven, klikt u op "DHCP-cliëntenlijst" op het LAN-tabblad aan de linkerzijde.';
ls1=' LAN > LAN-instellingen';
ls2='Hier kunt u in het lokale netwerk (LAN) wijzigingen aanbrengen. Druk op "Wijzigingen toepassen" onder in het scherm om de wijzigingen door te voeren.';
ls3='IP-adres';
ls4='Subnetmasker     ';
ls5='DHCP-server ';
On='Aan  ';
Off='Uit  ';
ls6='Doordat de DHCP-serverfunctie automatisch een IP-adres aan elke computer in het netwerk toewijst, is het opzetten van een netwerk bijzonder eenvoudig. Hier hoeft u niets te veranderen.';
ls7='Beginadres van IP-pool ';
ls8='Eindadres van IP-pool   ';
ls9='Leasetijd  ';
ls10='Altijd';
ls11='Half uur ';
ls12='Een uur ';
ls13='Twee uur';
ls14='Halve dag ';
ls15='Een dag';
ls16='Twee dagen';
ls17='Een week ';
ls18='Twee weken  ';
ls19='De tijd gedurende welke de DHCP-server het IP-adres voor elke computer bewaart.  ';
ls20='Lokale domeinnaam';
Optional='Optioneel  ';
ls21='Een functie waarmee u aan uw netwerk een naam kunt toekennen.';
lssm='Het subnetmasker dat u hebt ingevoerd is ongeldig.';
lsnetm='De IP-pool moet hetzelfde subnet zijn als de gateway-IP. ';
lsendm='Het IP-eindadres moet groter zijn dan het begin-IP-adres.';
lspoolm='Het LAN IP-adres kan niet in de DHCP-adrespool zijn.';
lsipm2='Ongeldig LAN-IP-adres, het laatste getal kan niet 0 of 255 zijn.';
lsipm3='Ongeldig LAN-IP-adres, het laatste getal kan niet 0 of 127 zijn.';
lsldnm='Invalid Local Domain Name: `~!@#$%^&*()_+[]{}\\|;:\'"<>/?.,';
lsipm4='Het IP-adres dat u hebt ingevoerd is ongeldig.';
lsipalert='Verander het adresseninvoervak in de statusbalk van uw browser handmatig in het nieuwe LAN-adres.';
lsipm5='Het IP-adres dat u kiest, moet een niet-routeerbaar IP zijn.\n  192.168.x.x (waarin x elke waarde kan hebben tussen 0 en 255.) \n10.x.x.x (waarin x elke waarde kan hebben tussen 0 en 255.)\n172.y.x.x (waarin y elke waarde kan hebben tussen 16 en 31 en waarin x elke waarde kan hebben tussen 0 en 255.)';
lsipc='Wilt u het IP-adres van het lokale netwerk werkelijk wijzigen?';
lo1='Inloggen';
lo2='Voordat u een of meer instellingen kunt wijzigen, moet u zich met een wachtwoord aanmelden. Als u nog geen eigen wachtwoord hebt ingesteld, laat u dit veld leeg en klikt u op Submit (Verzenden). ';
lo3='Wachtwoord ';
lo4='Standaard = leeg laten ';
Clear='Leeg maken';
Submit='Verzenden';
le1='Belkin | Aanmeldingsfout';
lerror='Aanmeldingsfout!';
Utilities='Hulpprogramma\'s > ';
ss1='Wijzigingen aangebracht';
rs1='Beginwaarde instellen geslaagd ';
rs3='De router is bezig met opnieuw starten';
rs4='seconden geduld alstublieft. ';
ugs1='Firmware bijgewerkt';
rf1='Het herstellen van de standaardinstellingen is geslaagd';
rss1='Het systeem heeft de instellingen hersteld ';
ufy1='Standaardwaarden herstellen';
ufy2='Wanneer u deze optie gebruikt, worden alle instellingen in de router naar de (standaard-) fabrieksinstellingen teruggezet. Wij raden u aan een reservekopie te maken van uw instellingen voordat u alle standaardinstellingen herstelt. Klik op de onderstaande knop "Standaardinstellingen herstellen" om de standaardinstellingen te herstellen.';
ufy3='WAARSCHUWING: Al uw eigen instellingen gaan verloren!\nWeet u zeker dat u dit wilt doen?';
ufy4='Het herstellen van de standaardinstellingen kan tot 60 seconden duren. Schakel de router gedurende dit proces niet uit.';
ufy5='Standaardinstellingen worden niet hersteld. Er gaan geen instellingen verloren!';
ufy='Standaardinstellingen herstellen';
ufe1='Hulpprogramma’s > Firmware bijwerken';
ufe2='Belkin brengt regelmatig nieuwe versies uit van de firmware van de router. Nieuwe firmwareversies bevatten verbeteringen van functies en oplossingen voor eventuele problemen. Klik op de onderstaande koppeling om te kijken of er een nieuwe firmwareversie voor deze router beschikbaar is.';
ufe3='LET OP: Maak een reservekopie van uw huidige instellingen voordat u een nieuwe firmwareversie installeert.';
ufe4='Klik hier';
ufe5='om naar het tabblad "Huidige instellingen opslaan/als backupbestand opslaan" te gaan.';
ufe6='Controleer of er een nieuwe firmwareversie beschikbaar is. ';
ufe7='Firmware controleren ';
ufe8='Firmware bijwerken ';
Update='Bijwerken';
ufe9='Geef de locatie op waar de bijgewerkte bestanden moeten worden opgeslagen. Typ het bestandspad en de bestandsnaam in of klik op \"Bladeren"\ om naar de bestandslocatie te gaan.';
ufe10='Weet u zeker dat u door wilt gaan met bijwerken?';
ufe11="Het is mogelijk dat de router aan het einde van de upgrade gedurende 180 seconden niet op commando's reageert. Dit is een normaal verschijnsel. U mag de router gedurende deze periode niet uitschakelen of opnieuw starten.";
ufe12='Firmwareversie';
um1='In dit scherm kunt u verschillende parameters van de router beheren en bepaalde administratieve taken uitvoeren.';
um5='Router herstarten';
um6='Als de router niet goed meer werkt, moet u de router soms opnieuw instellen of starten. Door het opnieuw instellen of opnieuw starten van de router worden uw configuratie-instellingen niet gewist.';
um7='Standaardinstellingen herstellen';
um8='Wanneer u deze optie gebruikt, worden alle instellingen in de router naar de (standaard-) fabrieksinstellingen teruggezet. Maak een reservekopie van uw instellingen voordat u alle standaardinstellingen herstelt.';
um9='Huidige instellingen opslaan/als backupbestand opslaan';
um10='Met deze functie kunt u de huidige configuratie opslaan. Door een reservekopie te maken van uw huidige configuratie kunt u deze later in het geval van verlies of wijziging herstellen. Maak een reservekopie van uw huidige instellingen voordat u de firmware bijwerkt.';
um11='Vorige instellingen herstellen';
um12='Met deze optie kunt u een eerder opgeslagen configuratie herstellen.';
um13='Firmware bijwerken';
um14='Belkin brengt regelmatig nieuwe versies uit van de firmware van de router. Nieuwe firmwareversies bevatten verbeteringen van functies en oplossingen voor eventuele problemen. ';
um15='Systeeminstellingen';
um16='Op de pagina voor Systeeminstellingen kunt u een nieuw wachtwoord voor de systeembeheerder invoeren';
um17=', kunt u de tijdzone instellen, beheer op afstand inschakelen en de NAT-functie in- en uitschakelenvan de router.';
um18='  van de router.';
not='niet';
pwd='Wachtwoord';
uprev1='Hulpprogramma\'s > Vorige instellingen herstellen';
uprev2='Met deze optie kunt u een eerder opgeslagen configuratie herstellen.';
Restore='Herstellen';
uprev3='Typ de naam in van het bestand dat de backup-instellingen bevat.';
uprev4='Wilt u doorgaan en de instellingen herstellen?';
uprev5='Het komt voor dat de router pas 60 seconden nadat de instellingen zijn hersteld,\n op opdrachten reageert.\nDit is een normaal verschijnsel. U mag de router in de tussentijd niet uitschakelen.';
ueco1='Hulpprogramma\'s > Eco-instellingen';
ueco2='ECO is a mode about "energy saving" mode';
ur1='Hulpprogramma\'s > Router opnieuw starten';
ur2='Als de werking van de router niet meer optimaal is, kan het soms nodig zijn de router opnieuw te starten of te rebooten. Door het rebooten of herstarten van de router worden uw configuratie-instellingen niet gewist. Klik op de knop &quot;Router herstarten&quot; hieronder om de router opnieuw te starten.';
ur3='Router herstarten';
ur4='Weet u zeker dat de de router opnieuw wilt starten? Het opnieuw starten van de router heeft geen invloed op uw configuratie.';
ur5='De router heeft zo\'n 30 seconden nodig om opnieuw te starten. Schakel de router niet uit voordat het resetten voltooid is.';
ur6='De router heeft zo\'n 60 seconden nodig om opnieuw te starten. Schakel de router niet uit voordat het resetten voltooid is.';
usave1='Hulpprogramma’s > Huidige instellingen opslaan/als backupbestand opslaan';
usave2='Met deze functie kunt u de huidige configuratie opslaan. Door een reservekopie te maken van uw huidige configuratie kunt u deze later in het geval van verlies of wijziging herstellen. Maak een reservekopie van uw huidige instellingen voordat u de firmware bijwerkt.';
Save='Opslaan';
usys1='Hulpprogramma’s > Systeeminstellingen';
usys2='Beheerderswachtwoord';
usys3='De router wordt geleverd ZONDER vooraf geprogrammeerd wachtwoord. Als u in verband met de beveiliging een wachtwoord wilt gebruiken, kunt u dat hier invoeren.';
usys4='Typ uw huidige wachtwoord in ';
usys5='Typ uw nieuwe wachtwoord in';
usys6='Bevestig uw nieuwe wachtwoord ';
usys7='Login time-out';
usys8='(1-99 minuten)';
usys9='Tijd en tijdzone ';  
January='januari';
February='februari';
March='maart';
April='aprile';
May='mei';
June='juni';
July='juli';
August='augustus';
September='september';
October='oktober';
November='november';
December='december';
usys10='Stel uw tijdzone in. Als u in een land woont dat de zomer- en wintertijd volgt, kruis dan dit vakje aan.';
usys11='Tijdzone';
usys12='(WEZ-12:00) Enewetak, Kwajalein ';
usys13='(WEZ-11:00) Midway Eiland, Samoa';
usys14='(WEZ-10:00) Hawaii';
usys15='(WEZ-09:00) Alaska';
usys16='(WEZ-08:00) Pazifikzeit (USA u. Kanada); Tijuana ';
usys17='(WEZ-07:00) Arizona ';
usys18='(WEZ-07:00) Mountain Time (VS en Canada), Nieuw Mexico ';
usys19='(WEZ-06:00) Mexico City ';
usys19a='(WEZ-06:00) Central Time (VS en Canada), Chicago ';
usys20='(WEZ-06:00) Tegucigalpa ';
usys21='(WEZ-06:00) Saskatchewan ';
usys22='(WEZ-05:00) Bogota, Lima, Quito ';
usys23='(WEZ-05:00) Eastern Time (VS en Canada) ';
usys24='(WEZ-05:00) Indiana (East) ';
usys25='(WEZ-04:00) Atlantic Time (Canada) ';
usys26='(WEZ-04:00) Caracas, La Paz ';
usys27='(WEZ-04:00) Santiago ';
usys28='(WEZ-03:00) Newfoundland ';
usys29='(WEZ-03:00) Brazilië ';
usys30='(WEZ-03:00) Buenos Aires, Georgetown ';
usys31a='(WEZ-02:00) Midden-Atlantische tijd ';
usys32='(WEZ-01:00) Azoren, Kapverdische Inseln ';
usys33='(WEZ) Casablanca, Monrovia ';
usys34='(WEZ) Westeuropäische Zeit: Lissabon, London, Edinburgh ';
usys35='(WEZ) Westeuropäische Zeit: Dublin ';
usys36='(WEZ+01:00) Amsterdam, Berlin, Bern, Rom ';
usys37='(WEZ+01:00) Stockholm, Wien, Belgrad ';
usys38='(WEZ+01:00) Bratislava, Budapest, Ljubljana ';
usys39='(WEZ+01:00) Prag, Brüssel, Kopenhagen, Madrid ';
usys40='(WEZ+01:00) Paris, Sarajevo, Skopje ';
usys41='(WEZ+01:00) Warschau, Zagreb ';
usys42='(WEZ+02:00) Athen, Istanbul, Minsk, Vilnius, Sofia ';
usys43='(WEZ+02:00) Bukarest ';
usys43a='(WEZ+02:00) Israe ';
usys44='(WEZ+02:00) Caïro ';
usys45='(WEZ+02:00) Harare, Pretoria ';
usys46='(WEZ+02:00) Helsinki, Riga, Tallinn ';
usys48='(WEZ+03:00) Bagdad, Kuwait, Nairobi, Riad ';
usys50='(WEZ+03:00) Moskau, Sankt Petersburg,Wolgograd, Kasan ';
usys50b='(WEZ+03:30) Teheran ';
usys51='(WEZ+04:00) Abu Dhabi, Maskat, Tbilisi ';
usys52='(WEZ+04:30) Kabul ';
usys53='(WEZ+05:00) Islamabad, Karatschi, Jekaterinburg ';
usys53a='(WEZ+05:30) Chennai, Kolkata, Mumbai, New Delhi ';
usys54='(WEZ+06:00) Almaty, Dhaka ';
usys55='(WEZ+07:00) Bangkok, Jakarta, Hanoi ';
usys56='(WEZ+08:00) Peking, Chongqing, Urumchi ';
usys57='(WEZ+08:00) Hongkong, Perth, Singapur, Taipeh ';
usys58='(WEZ+09:00) Tokio, Osaka, Sapporo ';
usys58a='(WEZ+09:00) Seoul ';
usys96='(WEZ+09:30) Adelaide, Darwin ';
usys59='(WEZ+10:00) Brisbane ';
usys60='(WEZ+10:00) Canberra, Melbourne, Sydney ';
usys61='(WEZ+10:00) Guam, Port Moresby ';
usys62='(WEZ+10:00) Hobart ';
usys63='(WEZ+11:00) Magadan, Salomonseilanden, Nieuw Caledonië ';
usys64='(WEZ+12:00) Wellington, Auckland ';
usys65='(WEZ+12:00) Fiji, Kamchatka, Marshall ls. ';
usys97="(WEZ+13:00) Nuku'alofa. ";
usys66='Zomer-/wintertijd';
usys67='Zomer-/wintertijd automatisch instellen';
printps='Primaire NTP-server';
bakntps='NTP-backupserver';
usys68='Extern beheer:   ';
AF='GEAVANCEERDE FUNCTIE!';
usys69='Met behulp van de functie "Beheer op afstand" kunt u overal op het internet de instellingen van uw router wijzigen. Voordat u deze functie inschakelt,';
usys70='MOET U ERVOOR ZORGEN DAT U HET WACHTWOORD VAN SYSTEEMBEHEERDER HEBT INGESTELD.';
usys71='Elk IP-adres kan de router op afstand beheren.';
usys72='Alleen met dit IP-adres kunt u de router op afstand beheren ';
usys73='NAT inschakelen';
usys74='Hiermee kunt u de functie Network Address Translation (NAT) uitschakelen. U wilt deze functie vrijwel NOOIT uitschakelen. ';
usys75='NAT activeren/deactiveren'; 

usys76='UPnP inschakelen:   ';
usys77='Hiermee kunt u de UPnP-functie van de router in- of uitschakelen. Als u applicaties gebruikt die UPnP ondersteunen, bereikt u door UPnP in te schakelen dat deze applicaties de router automatisch configureren. ';
usys78='UPnP inschakelen/uitschakelen';
usys79='Automatisch bijwerken van firmware inschakelen ';
usys80='Hiermee kunt u automatisch controleren of er firmware-updates voor uw router beschikbaar zijn.';
usys81='Automatisch bijwerken van firmware inschakelen / uitschakelen';
usys82='Huidig wachtwoord is ongeldig';
usys83='Het nieuwe wachtwoord en het wachtwoord dat ter bevestiging is ingetypt komen niet overeen';
usys83_1='Het wachtwoord en het bevestigde wachtwoord komen niet overeen';
usys84='Ingevulde waarde is onjuist. Waarde moet een volledig cijfer tussen 1 en 99 zijn';
usys84_1='De ingevoerde waarde van de maximale inactieve tijd is ongeldig. Het getal moet een geheel getal tussen 1 en 99 zijn.';
usys85='De lengte van het wachtwoord is ongeldig. Het wachtwoord moet minimaal 3 tekens bevatten en mag maximaal 12 tekens lang zijn.';
usys85_1='Het beheerderswachtwoord moet tussen de 1 en 63 tekens bevatten.';
usysntp='Two NTP Server IP address can not be the same.';
usys86='Verander het adresseninvoervak in de statusbalk van uw browser handmatig in het standaard LAN-adres.';
usys87='Wij raden u met nadruk aan een beheerderswachtwoord in te stellen.';
usys88='The password has reached its max length!';
usys89='AM';
usys90='PM';
usys91='Remote Access Port (Poort voor toegang op afstand)';
usys92='Remote toegangspoort is onjuist. Geldige Poort zou tussen 1 en 65535 moeten liggen.';
usys93='Gebruik deze functie om energie te besparen.';
usys94='IGMP Proxy';
usys95=' IGMP Proxy Inschakelen / uitschakelen ';
usysipm='U hebt niet alle IP-getallen ingevoerd of enkele ingevoerde getallen zijn ongeldig. Het IP-adres moet overeenkomen met x.y.y.x (waarin y elke waarde van 0 tot 255 kan zijn en x elke waarde van 1 tot 254).';
usysipm_1='U hebt niet alle IP-getallen ingevoerd of u hebt een of meer ongeldige getallen ingevoerd. De getallen moeten tussen 0 en 255 liggen.';
self_healing='Conditie > Regelmatig onderhoud';
self_healing1='Het regelmatig opnieuw initialiseren van de router kan helpen om netwerkproblemen te voorkomen.';
self_healing2='Auto initialiseren mijn router';
self_healing3='Set Dagen';
self_healing4='ZO';
self_healing5='MA';
self_healing6='DI';
self_healing7='WO';
self_healing8='DO';
self_healing9='VR';
self_healing10='ZA';
self_healing11='Tijd instellen';
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
//self_healing60='Zelfherstellend';
self_healing60='Self Healing';
chkwait='Bezig met controleren of er een nieuwe firmwareversie beschikbaar is...';
Europe='Europe';
Australia='Australië  en Nieuw-Zeeland';
AsiaPacific='Asia Pacific';
NorthAmerica='Noord-Amerika';
wrhtpsswd='<b>Ongeldig wachtwoord</b><br>Bevestig uw wachtwoord en probeer het opnieuw.';
usysb1='De router wordt geleverd ZONDER vooraf geprogrammeerd wachtwoord. Als u in verband met de beveiliging een wachtwoord wilt gebruiken, kunt u dat hier invoeren.';
vjs1='Ongeldig IP-adres, te lang. Controleer het opnieuw.';
vjs2='Ongeldig IP-adres, \'.\' ontbreken. Controleer het opnieuw.';
vjs3='Ongeldig IP-adres, tussen \'.\' ontbreken cijfers. Controleer het opnieuw.';
vjs4="Ongeldig IP-adres, extra '.' . Controleer het opnieuw.";
vjs5='Ongeldig IP-adres, de cijfers tussen \'.\' zijn te groot. Controleer het opnieuw.';
vm1='Ongeldig teken ';
vm2='op positie';
vm3='moet zijn ';
vjs6='Ongeldig jaarformaat. Gebruiken als bijv. 2002.';
vm4='Ongeldige waarde  ';
vjs8='Ongeldig, moet tussen 1970 en 2037 liggen';
vjs9='Ongeldig maandformaat. Gebruiken als bijvoorbeeld . 01...12';
vjs10='Voer eerst het jaar en de maand in';
vjs11='Ongeldig dagformaat. Gebruiken als bijvoorbeeld . 01...31, soms alleen 00...28.';
vjs12='Ongeldig uurformaat. Gebruiken als bijvoorbeeld . 00...23';
vjs13='Ongeldig minutenformaat. Gebruiken als bijvoorbeeld . 00...59';
vjs14='Ongeldige MTU-waarde. Moet tussen 500 en 1500 liggen.';
vjs15='Ongeldige MRU-waarde. Moet tussen 128 en 65535 liggen.';
vjs16='Ongeldig Ip:';
vjs161=' niet binnen ';
vjs162=' netmasker';
vjs163='De toegestane waarden voor het DHCP zijn ';
vjs17='U hebt twee verschillende wachtwoorden ingevuld. Controleer het opnieuw.';
vjs18='Voer een beginpoort in.';
vjs19='De beginpoort moet een lager nummer hebben dan de eindpoort.';
vjs20='Ongeldig poortnummer, poortnummers moeten uit een positief geheel getal bestaan.';
vjs21='Ongeldige lengte';
vjs22='Invalid Format at position ';
vjs23='Ongeldig MAC-adres, het is een broadcast (uitzend)-adres.';
vjs24='Ongeldig MAC-adres, het is een null-adres.';
vjs25='Ongeldig MAC-adres, het is een multicast-adres.';
vjs26='Ongeldig IP-beginadres en IP-eindadres. Een IP-eindadres moet hoger liggen dan het IP-beginadres';
vjs27='Ongeldige waarde Moet tussen 1 en 65535 liggen';
vjs28='Ongeldig netmaskerformaat.';
vjs29='Ongeldig formaat, het netmasker moet hier zijn: 255.255.255.0 of 255.255.255.128 of 255.255.255.192 of 255.255.255.224 of 255.255.255.240 of 255.255.255.248 of 255.255.255.252 of 255.255.255.254';
vjs30='Ongeldig IP-adres, het laatste getal kan niet 0 of 255 zijn.';
vjs31='Ongeldig LAN IP-adres, het eerst getal kan niet 127 zijn.';
vjs32='Ongeldig LAN IP-adres, kan niet 0.0.0.0 zijn.';
vjs33='Ongeldig LAN IP-adres, moet onder 224.0.0.0 liggen';
vjs34='Een geldige reeks is ';
vjs35='The first entry of IP address must be within range 1 - 223.';
vjs36='Invalid network format.';
vjs37='Invalid gateway format.';
vjs38='IP is class A, netmask is invalid.';
vjs39='IP is class B, netmask is invalid.';
vjs40='IP is class C, netmask is invalid.';
vjs41='Invalid network ip, network ip is duplicate';
vjs42='De ingevulde subnetmasker is onjuist.';
vjs43='Ongeldig IP-adres. Het laatste getal moet tussen 1 en 254 liggen.';
vjs44='Ongeldig DNS-adres. Het eerste getal moet tussen 1 en 223 liggen';
vjs45='IP-adres opgeven';
vjs46='is ongeldig. Eerst wijzigen!';
vjs47='%s is een ongeldig IP, dat zich niet in het netmasker %s bevindt.';
dup='Duplicaat-beheerder';
wc1='WAN > Type verbinding';
wcc2='Selecteer uw type verbinding ';
wcc3='Dynamisch';
wcc4='Een dynamische verbinding is het meest gebruikelijk. Als u een kabelmodem gebruikt, hebt u waarschijnlijk een dynamische verbinding. Gebruik dit type verbinding als u een kabelmodem hebt of als u niet zeker weet welk type verbinding u hebt.';
wcc5='Statisch';
wcc6='Het type verbinding dat met statische IP-adressen werkt is minder gebruikelijk dan andere typen verbindingen. Gebruik deze keuzemogelijkheid uitsluitend als uw ISP u een IP-adres heeft toegekend dat nooit verandert.';
wcc7='PPPoE';
wcc8='Als u een DSL modem gebruikt en/of als uw ISP u een gebruikersnaam en een wachtwoord heeft toegekend, dan is PPPoE uw type verbinding. Gebruik dit type verbinding.';
wcc9='PPTP';
wcc10='[Alleen in Europese landen]. Dit type verbinding wordt vooral in Europa gebruikt. Als uw ISP u nadrukkelijk heeft laten weten dat u PPTP gebruikt en u de toepasselijke informatie over PPTP heeft toegezonden, dan moet u deze optie gebruiken.';
wcc11='Telstra Bigpond/OptusNet kabelmaatschappij';

wcc12='Gebruik deze optie uitsluitend voor Bigpond Cable en OptusNet Cable verbindingen.';
wcc12_a='Gebruik deze optie uitsluitend voor Bigpond en OptusNet kabelverbindingen.';

wcc13='L2TP';
wcc14='[Israel Only]. This type of connection is most common in Israel. If your ISP has specifically told you that you use L2TP and has supplied you with the proper L2TP information, then use this option.';
wcc15='Multi-PPPoE';
wcc16='[Japan Only] This type of connection is a unique function in Japan which is required for those who subscribe NTT\'s broadband Internet.';
Next='Volgende';
wds1='WAN > DNS';
wds2='Als uw internetserviceprovider u een bepaald DNS-adres heeft toegekend om te gebruiken, voer dat adres dan in dit venster in en klik op "Wijzigingen toepassen". ';
wds2_1='Als u van uw provider specifieke DNS-instellingen hebt gekregen, voer deze dan hier in.';
wds3='Automatisch van ISP ';
wds3_1='Automatisch van provider ';
wds4='DNS-adres';
wds4_1='Primair DNS-adres';
wds5='Secundair DNS-adres ';
wds5_1='Secundair DNS-adres';
wds6='DNS = Domain Name Server. Een Domain Name Server (Domeinnaamserver) is een server op het internet die URL\'s (Universal Resource Links) als "www.belkin.com" in IP-adressen vertaalt.	Als u de automatische DNS-functie niet gebruikt, moet u de DNS-instellingen die u van uw ISP hebt gekregen invoeren.';
wds6_1='DNS = Domain Name Server, een server op het internet die URL\'s als "www.belkin.com" in IP-adressen vertaalt.';
wds7='Als u de automatische DNS-functie niet gebruikt, moet u de DNS-instellingen die u van uw ISP hebt gekregen invoeren.';
wds8='Alvorens wijzigingen in de DNS-instellingen aan te brengen, gaat u naar "%s Websitefilters %s" en selecteert u de optie "Geen filters".';
wdy1='WAN > Type verbinding > Dynamisch IP';
wdy2='Typ om uw dynamische IP-instellingen in te voeren hieronder uw informatie in en klik op "Wijzigingen toepassen".';
wdy3='Hostnaam';
wdy4='Hostnaam = Een naam die sommige ISP\'s eisen om verbinding toe te staan met hun systeem.';
wdy5='WAN MAC-adres wijzigen ';
wdy6='Ongeldige hostnaam: ~!@##$%^&*()=+{}[]|\'\\\":;?/.<> ';
wmc1='WAN > MAC-adres';
wmc2='Bij sommige ISP\'s moet u het MAC-adres van de netwerkkaart van uw computer naar de router klonen (kopiëren). Als u het niet zeker weet, kloont u eenvoudigweg het MAC-adres van de computer die oorspronkelijk op de modem was aangesloten voordat u de router installeert. Het klonen van dit adres veroorzaakt geen problemen in uw netwerk.';
wmc3='WAN MAC-adres';
wmc4='MAC-adres van de computer klonen';
wmc5='Klonen';
wmc6='Het WAN MAC-adres kan niet gelijk zijn aan het LAN MAC-adres. Kies een ander adres.';
wdd1='Firewall > DDNS';
wdd2='Met Dynamic DNS kunt u internetgebruikers een vaste domeinnaam geven (in plaats van een IP-adres dat u periodiek kunt wijzigen), waardoor uw router en de setup van uw toepassingen in de virtuele servers van uw router\'s vanaf verschillende internetlocaties kunnen worden geopend zonder uw huidige IP-adres te kennen. Uw draadloze router ondersteunt dynamische DNS via DynDNS.org (<A href="http://www.dyndns.org/"><B>http://www.dyndns.org</B></A>). U moet een account aanmaken voordat u deze service gebruikt.';
wdd3='DDNS Service';
wdd4='DDNS Status';
wdd5='Web Site';
wdd6='Gebruikersnaam';
wdd7='Wachtwoord';
wdd8='Domeinnaam';
wdd9='Geen DDNS-service geselecteerd.\n';
wdd10='Geen DDNS-service geselecteerd en alle gegevens op deze pagina zullen verloren gaan. Wilt u doorgaan?';
wm1='Internet/WAN';
WAN='Internet WAN';
wm2='Op het tabblad "Internet/WAN" stelt u de router in voor het maken van een verbinding met uw Internet Service Provider (ISP). De router kan met vrijwel elke ISP verbinding maken mits u de instellingen van de router correct hebt geconfigureerd voor het type verbinding dat uw ISP gebruikt. Om de router te configureren voor het maken van een verbinding met een bepaalde ISP, klikt u op "Type verbinding" op het  tabblad "Internet/WAN" links op het scherm.';
wm3='Ondersteunde typen verbindingen: ';
wm4='Dynamisch';
wm4b='waaronder begrepen ISP’s die een hostnaam eisen en ISP’s die de verbinding aan een bepaald MAC-adres koppelen. ';
wm5='Statisch IP adres';
wm5b='de router ondersteunt verbindingen met ISP’s die een statisch IP-adres toewijzen. ';
wm6='PPPoE';
wm6b='de router ondersteunt een dynamisch verbindingstype dat voor authentificatie een PPPoE-aanmelding eist.';
wm7='PPTP';
wm7b='UITSLUITEND voor gebruikers in Europa. De router ondersteunt verbindingen met Europese internetproviders die verbindingen tot stand brengen via PPTP. ';
wm10='L2TP';
wm10b='Uitsluitend bedoeld voor gebruik bij providers die gebruik van de L2TP-verbindingsmethode vereisen.';
wpe1='WAN > Type verbinding > PPPoE';
wpe2='Typ hieronder uw informatie in om uw PPPoE-instellingen in te voeren en klik op "Wijzigingen toepassen".';
wpe3='Gebruikersnaam';
wpe4='Wachtwoord opnieuw intypen   ';
wpe5='Servicenaam (optioneel)  ';
wpe6='MTU (500-1500)   ';
wpe7='Verander niets aan de MTU-instelling tenzij uw specifieke ISP een andere instelling eist dan 1454.';
wpe8='Verbinding verbreken na';
wpe9='minuten zonder activiteit. ';
idlerangerro='Maximale niet-actieve tijd van de getallen die u hebt ingevoerd is niet geldig.\n De getallen kunnen een waarde hebben van 1 of 99 of een getal daar tussen in.';
wpe10='Ongeldig teken: <>&';
wptid='Ongeldig teken: "';
pm='Uw service was niet beschikbaar voor het verifiëren van het door u ingevoerde wachtwoord. Bevestig dat u uw wachtwoord juist hebt ingetypt.';
pm_1='De nieuwe wachtwoorden die u hebt ingevoerd komen niet overeen. Probeer het later nog eens.';
wpe11='Ongeldige MTU-waarde';
wpe12='Voer uw gebruikersnaam in';
wmpe1='WAN > Connection Type > Multi-PPPoE';
wmpe2='To enter your Multi-PPPoE settings, type in your information below and click "Apply changes".';
wmpe3='Description';
wmpe4='PPPoE Account';
wmpe5='Retype Password';
wmpe6='Service Name (Optional)';
wmpe7='MTU (1440-1454)';
wmpe7_1='Ongeldige MTU-waarde. Moet tussen 1440 en 1454 liggen.';
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

wpp3='Wachtwoord';
wpp4='Wachtwoord opnieuw intypen   ';
wpp6='IP-adres';
wpp7='Subnetmasker     ';
wpp14='Voer uw wachtwoord opnieuw in.';
wpp15='Voer uw wachtwoord in.';
wpp16='WAN > Connection Type > L2TP';
wpp17='L2TP Account';
wpp18='L2TP Password';
wpp19='Please enter your L2TP Account';
wpp20='Door internetserviceprovider toegewezen IP';
wpp21='YES';
wpp22='NO';
wpp23='IP-adressen toewijzen';
wpp24='Statisch IP-adres gebruiken';
wpp25='Dynamisch aanvragen bij internetprovider';
wppa1='WAN > Type verbinding > PPTP';
wppa2='PPTP-account   ';
wppa3='PPTP-wachtwoord    ';
wppa4='Wachtwoord opnieuw intypen   ';
wppa5='Hostnaam';
wppa6='Service IP-adres ';
wppa7='Mijn IP-adres';
wppa8='Mijn subnetmasker';
wppa9='Verbindingsidentificatiecode (optioneel)   ';
wppa10='Verbinding verbreken na';
wppa11=' minuten zonder activiteit.';
wppa12='Klik hier om uw DNS-instellingen in te voeren ';
wppa13='Vul hier uw PPTP-account in';
wppa14='Voer uw wachtwoord opnieuw in.';
wppa15='Voer uw wachtwoord in.';
wppa16='IP-adres';
wppa17='Service IP-adres';
wppa18='Ongeldige dienstnaam.';
ws1='WAN > Type verbinding > Statisch IP';
ws2='Typ hieronder uw informatie in om de instellingen voor een statisch IP in te voeren en klik op "Wijzigingen toepassen".';
ws3='IP-adres';
ws4='Subnetmasker     ';
ws5='Gateway-adres van uw ISP   ';
ws6='Wijst mijn ISP meer dan één statisch IP-adres toe';
ws7='Klik hier om uw DNS-instellingen in te voeren  ';
dm='U hebt niet alle DNS-nummers ingevoerd of een aantal getallen dat u hebt ingevoerd is ongeldig. De getallen moeten 0 of 255 zijn of een getal daar tussen in.';
sm='De subnetmaskergetallen die u hebt ingevoerd zijn ongeldig.';
sm_1='Het subnetmasker dat u hebt ingevoerd, is ongeldig.';
ws8='Voer uw DNS-adresinstellingen in op het volgende scherm en valideer ze.';
ws9='IP Address is same with Alias IP Address, please change one or remove one!';
ws10='Standaard Gateway';
wsc1='Alias-IP-adres  ';
im='Het alias-IP-adressenoverzicht is vol. Nieuwe regels kunnen niet worden gecreëerd.';
wt1 = 'BELANGRIJK';
wt2 = 'Als u op "Wijzigingen toepassen" klikt, zal de router rebooten. Zodra de router is gereboot, dient u het volgende te doen';
wt3 = '1) Ontkoppelde de voedingskabel van zowel het kabelmodem als de Belkin-router';
wt4 = '2) Sluit de voedingskabel weer aan op het kabelmodem en wacht tot de lampjes van het modem niet meer knipperen';
wt5 = '3) Sluit de voedingskabel weer aan op de Belkin router';
wt6 = 'Om er zeker van te zijn dat er een verbinding met het Internet tot stand is gebracht, opent u een internetbrowser, zoals bijvoorbeeld Internet Explorer, Firefox of Safari en controleer of u een website kan openen.';
Logout='Uitloggen';
wla1='Wireless > Als accesspoint gebruiken';
wlad1='De router kan zo worden geconfigureerd dat hij uitsluitend als accesspoint werkt waarbij alle routerings- en firewallfuncties worden omzeild. Als u dat wilt doen, selecteert u "Enable" (Inschakelen) en vult u het IP-adres in dat u aan het accesspoint wilt toekennen.';
wlad2='Inschakelen / uitschakelen';
wlae1='Geef uw IP-adres op';
wlae2='Subnetmasker ';
wlae3='Verander het adresseninvoervak in de statusbalk van uw browser handmatig in het LAN-adres.';
wlc1='Wireless > Kanaal en SSID';
wlc2='Als u de instellingen van de draadloze router wilt wijzigen, kunt u dat hier doen. Klik op "Wijzigingen toepassen" om de instellingen op te slaan.';
wlc3='Draadloos kanaal';
wlc4='SSID';
wlcwch='Extension Channel';
wlc5='Draadloze modus';
wlcgb='802.11b+g';
wlcg='802.11g';
wlcb='802.11b';
wlc9='SSID uitzenden';
wlc10='Turbo-modus';
wlc11="Doordat u de turbo-modus inschakelt, kan uw router of accesspoint de functie \"frame bursting\" gebruiken om te zorgen voor de snelst mogelijke gegevensoverdracht tussen de router of het accesspoint en 802.11g-cliënten. De turbo-modus werkt bij 802.11g-cliënten die de turbo-modus ondersteunen. 802.11g-cliënten van Belkin die het nieuwste stuurprogramma gebruiken, ondersteunen de turbo-modus. Cliënten die de turbo-modus niet ondersteunen, functioneren normaal als de turbo-modus wordt ingeschakeld.";
wlc12='Beveiligde modus';
wlc13="LET OP: Meestal worden de beste prestaties (overdrachtssnelheid) bereikt als de Protected Mode UITgeschakeld is. Als u zich in een netwerkomgeving bevindt met druk 802.11b-netwerkdataverkeer of interferentie, bereikt u meestal de beste prestaties met INgeschakelde Protected-modus.";
wlc14='GEBRUIK als accesspoint';
wlc15='Wanneer u de router als accesspoint gebruikt, moet u voor het accesspoint een IP adres opgeven Dit IP-adres moet deel uitmaken van dezelfde reeks als het netwerk waarop u het wilt aansluiten. Om de geavanceerde installatie-interface weer te openen, moet u dit adres in de adresbalk van uw browser typen. ';
wlc16='Wireless > EWC Setting';
wlc17='Bandbreedte';
wlc18='Control Sideband';
wlc19='NPHY Rate';
wlc20='20MHz';
wlc21='40MHz only';
wlc22='20/40MHz';
wlc22a='20/40/80MHz';
wlc23='Schakelaar voor draadloze modus gebruiken. Met deze schakelaar kunt u de draadloze modi voor de router instellen. Er zijn vier modi. <br>1) Uit<br>In deze modus is het toegangspunt van de router uitgeschakeld, dus kan er geen draadloze apparatuur gebruikmaken van het netwerk. Het uitschakelen van de draadloze functie van uw router is een uitstekende manier om uw netwerk te beveiligen wanneer u gedurende langere tijd niet thuis bent, of als u op een bepaald moment de draadloze functie van de router niet wilt gebruiken.<br>2) Alleen 802.11g<br>Als u deze modus voor de router instelt, wordt alleen apparatuur op het netwerk toegelaten die voldoet aan 802.11g. Tragere 802.11b-apparatuur wordt niet toegelaten.<br>  3) Alleen 802.11n<br>Als u deze modus voor de router instelt, wordt alleen apparatuur op het netwerk toegelaten die voldoet aan 802.11n. Tragere 802.11b- en 802.11g-apparatuur wordt niet toegelaten.<br>  4) 802.11n &amp; 802.11g &amp; 802.11b<br>Als u deze modus voor de router instelt, wordt apparatuur op het netwerk toegelaten die voldoet aan 802.11n, 802.11g en 802.11b.';
wlcoff='Uit  ';
wlcngb1='802.11b & 802.11g & 1x1 802.11n';
wlcn1='1x1 802.11n';
wlcngb2='802.11b & 802.11g & 802.11n';
wlcn2='802.11n';
wlca='802.11a';
wlcan='802.11a & 802.11n';
wlcgn='802.11g+n';
wlcnac='802.11n & 802.11ac';
wlcanac='802.11a & 802.11n & 802.11ac';
wlc24='Er zijn vier modi in de 5 GHz-band';
wlc25='1) 802.11a alleen <br> Instellen van de router om deze modus zal alleen toestaan 802.11a-compatibele apparaten aan het netwerk toe te treden.<br> 2) 802.11a & 802.11n <br> Instellen van de router om deze modus zal 802.11a en 802.11n-compatibele apparaten aan het netwerk toe te treden. <br> 3) 802.11n alleen <br> Instellen van de router om deze modus zal alleen 802.11n-compatibele apparaten aan te sluiten, waarbij uit langzamer 802.11a apparaten. <br> 4) Uit <br> Deze modus doven de router Wi-Fi, zodat er geen draadloze apparaten kunnen bij het netwerk aansluiten. Het uitschakelen van de draadloze functie van uw router is een geweldige manier om uw netwerk te beveiligen wanneer u weg bent van huis voor een lange periode van tijd, of niet willen de draadloze functie van de router te gebruiken op een bepaalde tijd. <br>';
wlc26='Als u de naam van uw netwerk verbergt, wordt WPS uitgeschakeld.';
wlc27='Als u het beveiligingstype wijzigt, wordt WPS uitgeschakeld.';
wlc28='WPS is uitgeschakeld vanwege uw <A href=%s><B>type draadloze beveiliging</B></A>.';
wlc29='WPS is uitgeschakeld omdat u de netwerknaam (SSID) hebt verborgen.';
wlc30='WPS is uitgeschakeld omdat u de naam van uw netwerk (SSID) hebt verborgen en vanwege het <A href=%s><B>type draadloze beveiliging</B></A>.';
wlc31='Als u WPS inschakelt, zal de netwerknaam (SSID) weer zichtbaar zijn.';
wlc32='Als u WPS inschakelt, zal het beveiligingstype WPA/WPA2 worden. Het huidige netwerkwachtwoord zal behouden blijven.';
wlc33='Als u WPS inschakelt, zal de naam van uw netwerk (SSID) zichtbaar worden en het beveiligingstype WPA/WPA2 worden. Het huidige netwerkwachtwoord zal behouden blijven.';
wlc34='U moet het beveiligingstype wijzigen in WPA/WPA2 en een nieuw netwerkwachtwoord kiezen voordat u WPS inschakelt.';
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

wlm1='Draadloze communicatie';
wlm2='Op dit tabblad kunt u de draadloze functies van de router instellen.';
wlm3='Kanaal en SSID';
wlm4='Stel het draadloze kanaal en de SSID in (naam draadloos netwerk)';
wlm5='Beveiliging';
wlm6='Wijzig de beveiligingsinstellingen zoals de WPA-instellingen en de WEP-instellingen.';
wlm7='Als accesspoint gebruiken';
wlm8='Stel de besturingsmodus van de router in op AP-modus.';
wlm9='Geef het IP-adres op';
wlm10='Geef het IP-adres van het accesspoint op.';
wlm11='MAC-adressen beheren';
wlm12='Stel een lijst van cliënten op die u de toegang tot het draadloze netwerk wilt toestaan of weigeren.';
wle1='Draadloos > Beveiliging';
wle2='Beveiligde modus';
wle2a='Deactiveren';
wle2b='WPA/WPA2-Personal(PSK)';
wle2c='128bit WEP';
wle2d='64bit WEP';
wle3='Authentificatie';
wle3a='WPA-PSK';
wle3b='WPA2-PSK';
wle3c='WPA-PSK + WPA2-PSK';
wle7="Hier kunt u de beveiligings- en encryptie-instellingen voor draadloze communicatie bepalen. Voor optimale draadloze veiligheid dient beveiliging geactiveerd te worden. WPA (Wireless Protected Access) biedt dynamische sleutelwijziging en is de beste beveiligingsoptie. In draadloze omgevingen waar niet alle apparaten WPA ondersteunen, dient u gebruik te maken van WEP (Wired Equivalent Privacy).";
bit64WEP='64bit WEP';
bit128WEP='128bit WEP';
WPAPSK='WPA/WPA2-Personal(PSK)';
wps1='Wi-Fi Protected Setup (WPS)';
wps2='Draadloze communicatie >Wi-Fi Protected Setup(WPS)';
wps3='Configureer de beveiligingsinstellingen voor draadloze communicatie';
wps4='Wi-Fi Protected Setup (WPS) is de genormaliseerde methode om de instelling van de beveiliging en het beheer van Wi-Fi netwerken te vereenvoudigen. U kunt nu gemakkelijk met WPS-gecertificeerde apparaten en met behulp van een Personal Information Number (PIN) of Push Button Configuration (PBC) code een door WPA-geactiveerd 802.11 netwerk instellen en hiermee verbinding maken. Oudere apparaten zonder WPS kunnen door middel van de gebruikelijke handmatige configuratiemethode aan het netwerk worden toegevoegd.';
wps5='1) Personal Information Number (PIN)-methode';
wps6='Start de WPS PIN-methode op het cliëntapparaat vanaf zijn draadloze hulpprogramma of WPS-toepassing. Voer vervolgens op het cliëntapparaat het PIN-nummer in en klik binnen twee minuten op "Enroll" (Inschrijven)';
wps7='PIN-nummer van cliëntapparaat invoeren';
wps8='Inschrijven';
wps9='Als een externe registar beschikbaar is, kunt u ook het PIN-nummer van de router bij de externe registar invoeren. Om het PIN-nummer van de router te wijzigen, klikt u op "Generate New PIN" (Nieuw PIN-nummer genereren) of op "Restore Default PIN" (Standaard PIN-nummer herstellen) om het PIN-nummer naar de standaardfabrieksinstelling terug te zetten.';
wps10='PIN-nummer van router:';
wps11='Nieuw PIN-nummer genereren';
wps12='Standaard PIN-nummer herstellen';
wps13='2) Push Button Configuration (PBC)-methode';
wps14='Halten Sie die PBC-Taste auf dem Router drei Sekunden gedrückt oder klicken Sie auf "PBC starten". Starten Sie dann innerhalb von 2 Minuten auf dem Gerät, mit welchem Sie eine Verbindung zum Router herstellen wollen, PBC.';
wps15='PBC starten';
wps16='3) Handmatige configuratiemethode';
wps17_1='Voor cliëntapparaten zonder WPS moet u het apparaat handmatig configureren met de volgende instellingen.';
wps17='Client-apparaten zonder WPS moet u handmatig configureren met de volgende instellingen. U kunt ook gebruik maken van de Belkin Security Assistent (Beveiligingsassistent) van de installatie-cd.';
wps18='Routerconfiguratie:';
wps19='Geconfigureerd';
wps20='Netwerknaam (SSID) :';
wps21='Niet geconfigureerd';
wps22='Netwerkauthenticatie :';
wps23='WPA-PSK + WPA2-PSK';
wps24='Dataversleuteling :';
wps25='TKIP+AES';
wps26='Netwerksleutel (PSK) :';
wps27='Netwerksleutel (WEP):';
wps28='AUTO';
wps28_1='NULL';
wps29='WPS';
wps30='Wi-FI Protected Setup (WPS) is de genormaliseerde methode voor het vereenvoudigen van het instellen van de beveiliging en het beheer van Wi-Fi-netwerken.';
wps31='Beveiliging van draadloze netwerken:';
wps32='Hardwarematige WPS Knop';
wps33='PIN van de router deblokkeren';
wps_msg1='Wi-Fi Protected Setup melding';
wps_msg2='Ongeldige pincode! De pincode van het apparaat bestaat uit acht numerieke tekens. Controleer de code en voer deze opnieuw in.';
wps_msg3='Controlegetal van pincode onjuist! Controleer het controlegetal en voer een geldige pincode in.';
wps_msg4='Bezig met initiëren-start binnen 2 minuten de WPS PBC in het cliëntapparaat.';
wps_msg5='Bezig met uitvoeren opdracht - wacht even a.u.b.';
wps_msg6='Fout ontdekt - probeer het opnieuw.';
wps_msg7='Gelukt - het apparaat is op de router aangesloten.';
wps_msg8='Overlappende sectie ontdekt...';
wps_msg9='Time-out. Geen verbinding tussen cliënt en router.';
wps_msg10='PIN van de router gedeactiveerd vanwege overmatig veel mistlukte toegangspogingen';

wwmm1='QoS Configuration';
wwmm2='QoS (Quality of Service) configuratie';
wwmm3='QoS geeft prioriteit aan belangrijke gegevens in uw netwerk, zoals multimediamateriaal en voice-over-IP (VoIP) zodat deze gegevens geen nadelige gevolgen ondervinden van andere gegevens die binnen het netwerk verstuurd worden. Gebaseerd op 802.11e kan deze functie naar keuze in- of uitgeschakeld worden en kunt u zelf de gewenste acknowledgement-modus instellen. Voor multimedia streaming of als u VoIP in uw netwerk wilt gebruiken, moet u de QoS-functie inschakelen. ';
wwmm4='802.11e/WMM QoS';
wle8='(13 hexadecimale tekenparen)';
wle9='LET OP: ';
wle10='Hexadecimale paren kunnen automatisch gegenereerd worden via een PassPhrase (meervoudig wachtwoord). Vink het vakje links aan en voer de passphrase in.';
PP='PassPhrase';
generate='genereren';
errm='Voer een wachtwoord in';
keym='Sleutel is niet volledig';
wle11='Sleutel 1';
wle12='Sleutel 2 ';
wle13='Sleutel 3';
wle14='Sleutel 4  ';
wle15='(hexadecimale tekenparen)';
keym1=' is niet volledig';
keym2='is ongeldig, wijzig deze eerst!';
wwp2='Pre-shared key (PSK)';
wwp3='WPA-PSK (zonder server)';
wwp4='Wireless Protected Access met een pre-shared key: Deze sleutel is een wachtwoord in de vorm van een woord, zin of reeks letter en cijfers. De sleutel moet tussen <b>8</b> en <b>63</b> tekens lang zijn en mag spaties en symbolen of uitsluitend <b>64</b> hexadecimale (0-F) tekens bevatten. Elke cliënt die verbinding met het netwerk maakt, moet dezelfde sleutel (pre-shared key) gebruiken.';
wwp5='PSK verbergen';
wls_sec_msg='Waneer WPS is geactiveerd is het aan te raden WPA/WPA2 te gebruiken.';
wguest2='Guest Settings';
wguest3='Gasttoegang';
wpskerr1='De lengte van de pre-shared key moet 8 tot 63 of 64 hexadecimale tekens zijn';
wpskerr2='De sleutel dient uit 8 tot 63 tekens te bestaan en mag ook spaties en symbolen bevatten!';
wpskerr4='You must input the Guest Pre-shared Key (PSK)';
wpskerr7='De gastsleutel moet bestaan uit 8 tekens';
wpskerr8='De gastsleutel mag niet gelijk zijn aan de netwerksleutel';
wlguest1='Het SSID mag niet gelijk zijn aan het gast-SSID';
wlguest2='Het gast-SSID mag niet gelijk zijn aan het SSID';
ww3='Encryptiemethode';
wlmc1='Draadloos >> MAC-adressenbeheer';
wlmc2='MAC Address Control (MAC-adressenbeheer is de mogelijkheid tot het aanleggen van een lijst van cliënten die u wel of juist niet tot het draadloze netwerk wilt toelaten. ';
Allow='Toelaten';
Deny='Weigeren';
wlmc7='Selecteer eerst op de MAC-adressenlijst wie u wel of niet wilt toelaten!';
wlmc6='U kunt maximaal 32 MAC-adressen invoeren!';
wlmc3='Ongeldig MAC-adres ';
wlmc4='Dit moet u eerst corrigeren!';
wlmc5='Het juiste MAC-adres moet xx:xx:xx:xx:xx:xx zijn, waarin x een cijfer is van "0" tot en met "9" of een letter van "a" tot en met "f".';
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
ENTRY_FULL	='Alle vermeldingen zijn ingevuld.\nVerwijder een aantal vermeldingen en probeer het opnieuw.';
CLEAR_CONFIRM	='Wilt u deze gegevens verwijderen? ';
CLEAR_ALL_CONFIRM ='Wilt u alle ingevoerde gegevens verwijderen?';
g1='Het "IP address" is het interne IP-adres van de router. Om de interface voor geavanceerde installatie te openen moet u dit IP-adres in de adresbalk van uw browser typen. U kunt dit adresdesgewenst wijzigen. Om het IP-adres te wijzigen, moet u het nieuwe IP-adres intypen en op "ApplyChanges" (Wijzigingen) klikken. Het IP-adres dat u kiest, moet een niet-routeerbaar IP zijn. Voorbeelden van een niet-routeerbaar IP zijn ';
g2='192.168.x.x (waarin x elke mogelijke waarde kan zijn tussen 0 en 255.)<br>';
g3='10.x.x.x (waarin x elke waarde kan zijn tussen 0 en 255.)<br>';
g4='172.y.x.x (waarin y elke waarde kan zijn tussen 16 en 31, en x elke willekeurige waarde tussen 0 en 255.)<br>';
g5='U hoeft het subnet niet te wijzigen.Het is wel mogelijk om het subnetmasker te wijzigen. Verander het subnetmasker alleenals u daarvoor een goede reden hebt.<br>';
g6='DNS is de afkorting van Domain Name Server. Een domeinnaamserver is een server die zich ergens op het internet bevindt en die URL(Uniform Resource Locator) als www.belkin.com in IP- adressen vertaalt. Bij de meeste internetaansluitingen hoeft u deze gegevens niet in de router in te voeren. U moet het selectievakje "Automatic from ISP" inschakelen als uw internetserviceprovider u geen specifiek DNS-adres heeft gegeven. Als u gebruik maakt van een statische IP-verbinding kan het nodig zijn dat u een specifiek DNS-adres en een secundair DNS-adres invoert als voorwaarde voor een goede verbinding. u een dynamische verbinding of PPPoE gebruikt, hoeft u waarschijnlijk geen DNS-adres in te vullen. Om de gegevens van het DNS-adres in te voeren, verwijdert u het vinkje vóór de optie "Automatic from ISP" en vult u uw DNS-gegevens in de daarvoor bestemde ruimte in. Klik op "Wijzigingen toepassen" om de instellingen op te slaan. <br>';
g6a='De Dynamic DNS service staat statische hostnamen toe voor dynamische IP-adressen in een van de vele domeinen van DynDNS.org, waardoor toegang tot uw netwerkcomputers vanaf verschillende plaatsen op het internet eenvoudiger is. DynDNS.org biedt deze service, voor maximaal vijf hostnamen, als een gratis dienst voor de internetgemeenschap.De dynamische DNS-service is ideaal voor een privé-website en bestandsserver, maar ook als u vanaf uw werk toegang wilt krijgen tot uw pc thuis en de bestanden die erop staan. Als u gebruik maakt van deze service verzekert u zich ervan dat uw hostnaam altijd verwijst naar uw IP-adres, zelfs als uw ISP dit adres wijzigt. Als uw IP-adres wijzigt, kunnen uw vrienden en zakenrelaties u altijd vinden via yourname.dyndns.org!	U kunt zich gratis aanmelden voor een Dynamische DNS-host-naam via http://www.dyndns.org.De Dynamic DNS Update Client van de router installeren.Voordat u van deze functionaliteit gebruik kunt maken, moet u zich aanmelden voor de gratis update-service van DynDNS.org. Zodra u dit gedaan hebt, kunt u verder. Volg daartoe onderstaande aanwijzingen.1. Voer uw DynDNS.org-gebruikersnaam in het veld "User Name"(Gebruikersnaam) in.2. Voer uw DynDNS.org-wachtwoord in het veld "Password" in.3. Vul uw DynDNS.org-domeinnaam die u met DynDNS.org hebt opgezet in het veld "Domain Name"Domeinnaam) in,	4. Klik op "Update Dynamic DNS"om uw IP-adres bij te werken.Als het door uw ISP aan u toegewezen IP-adres wordt gewijzigd, zal de router uw nieuwe IP-adres automatisch doorspelen aan de DynDNS.org-servers. U kunt dit ook handmatig doen door te klikken op de knop "Update Dynamic DNS"(4).';
g6b='Gebruik maken van een dynamisch DNS';
	
g7='De DHCP-serverfunctie maakt het installeren van een netwerk bijzonder gemakkelijk omdat automatisch een IP-adres wordt toegekend aan elke computer in het netwerk. De DHCP-server kan zo nodig uitgeschakeld worden. Als u de DHCP-server uitschakelt, moet u voor elke computer in het netwerk met de hand een statisch IP-adres instellen . De IP-pool is de verzameling IP-adressen die is gereserveerd voor dynamische toewijzing aan de computers in uw netwerk. De standaardwaarde is 2-100 (99 computers). Als u dit aantal wilt veranderen, voert u een nieuw begin- en eind-IP-adres in en klikt u op ¡°Apply Changes¡± (Wijzigingen aanbrengen). ';
g7a='DHCP-server';
g8='U kunt een lokale domeinnaam (netwerknaam) voor uw netwerk instellen. U hoeft deze instelling niet te wijzigen tenzij u daar een belangrijke reden voor hebt. U kunt het netwerk elke naam geven die u wilt zoals "MIJN NETWERK".  <br>';
g9='Dynamisch IP-adres';
g10='Bij kabelmodems wordt meestal een dynamisch verbindingstype gebruikt. Het instellen van het verbindingstype op "dynamisch" is in veel gevallen voldoende voor het tot stand brengen van de verbinding met uw provider. Sommige typen dynamische verbindingen vereisen een hostnaam. Als u een hostnaam is toegewezen kunt u deze op de daarvoor bestemde plaats invoeren. Deze hostnaam wordt u toegekend door uw provider. Sommige dynamische verbindingen kunnen eisen dat u het MAC-adres kloont van de pc die oorspronkelijk op uw modem was aangesloten. Dit gaat als volgt: klik in het scherm op de koppeling \'Change WAN MAC address\' (WAN MAC adres wijzigen). Als uw router correct is geïnstalleerd, geeft de internetstatusindicator "Connected" (Verbonden) terug. ';
g11='Het type verbinding dat werkt met statische IP-adressen is minder gebruikelijk dan andere typen verbindingen. Als uw internetserviceprovider   statische IP-adressering gebruikt, hebt u uw IP-adres, subnetmasker en ISP gateway-adres nodig. Deze informatie is verkrijgbaar bij uw internetserviceprovider of staat vermeld op de documenten die uw internetserviceprovider aan u heeft  gegeven. Typ uw gegevens in en klik op "Apply Changes" (Wijzigingen toepassen). Nadat de wijzigingen zijn ingegaan,   meldt de internetstatusindicator "Connected" (Verbonden) terug als uw router correct is geïnstalleerd. <br><br>';
g12='De meeste DSL-providers maken gebruik van PPPoE als type verbinding. Als uw internetaansluiting met een DSL modem werkt, gebruikt uw ISP waarschijnlijk PPPoE om u bij het systeem aan te melden. Als u thuis of op uw kantoor een internetaansluiting hebt waarvoor geen modem nodig is, gebruikt u waarschijnlijk ook PPPoE.Uw type verbinding is PPPoE als:1) Uw ISP u een gebruikersnaam en een wachtwoord heeft toegewezen die nodig zijn om de verbinding met het internet tot stand te brengen 2) Uw ISP u software als WinPOET of Enternet 300 heeft gegeven om de verbinding met het internet tot stand te brengen 3) U op een ander desktoppictogram dan uw browser moet dubbelklikken om met het internet verbinding te krijgen Om de router op het gebruiken van PPPoE in te stellen, moet u uw gebruikersnaam en wachtwoord  in de daarvoor bestemde vakken typen. Als u geen servicenaam hebt ontvangen of kent, laat u het vak "Servicenaam" leeg. Nadat u de verplichte gegevens hebt ingetypt, klikt u op "Apply Changes" (Wijzigingen toepassen). Nadat de wijzigingen zijn ingegaan, meldt de internetstatusindicator "Connected" (Verbonden) terug als uw router correct is ge?nstalleerd. Meer informatie over het configureren van uw router voor gebruik van PPPoE vindt u in de handleiding.';
gmpoe1='WAN Type is MultiSession PPPoE. This WAN type supports multiple PPPoE sessions. With properly configuration of each session, this router can transmit the packets through the correct PPPoE connection. Besides, PPPoE Session 1 will be treated as the master session. The packets which are not matched to the other PPPoE Sessions will be directed to the master session. If the WAN type is not correct, change it!';
gmpoe2='To make the router work properly under the multiple PPPoE WAN type, user has to define the trigger rules of each enabled PPPoE session. So that, once the PPPoE connections are successfully established, the packets can be treated well according to the trigger rules to find out the proper session and transmit the packets.There are two kinds of configuration methologies to define a trigger rule for each PPPoE session.By IP : Please specify the IP address, Subnet Mask and PPPoE Session ID that will be triggered.By Domain Name : Please specify the Domain Name and the PPPoE Session ID that will be triggered.Each rule will take effect if the enable check box is checked.';

g13='Bij sommige providers is een verbinding vereist die gebruikt maakt van het PPTP-protocol. Dit protocol brengt een rechtstreekse verbinding tot stand tussen de internetabonnee en het systeem van de internetserviceprovider. De door uw ISP verstrekte informatie moet u in de daarvoor bestemde ruimte invullen. Wanneer u hiermee klaar bent, klikt u op "Apply Changes" (Wijzigingen aanbrengen). Nadat u de nodige wijzigingen hebt aangebracht, geeft de internetstatusindicator de melding "Connected" (Verbonden) als uw router correct is geïnstalleerd. ';

g14a='Telstra BigPond';
g14b='Nadat u de wijzigingen hebt aangebracht, meldt de internetstatusindicator "Connected" (Verbonden) terug als uw router correct is geïnstalleerd. ';

g15='MTU-instelling';
g16='De MTU (Maximum Transmission Unit)-waarde mag nooit worden gewijzigd tenzij uw provider u een specifieke MTU-waarde heeft verstrekt. Door wijziging van de MTU-waarde kunnen problemen met uw internetverbinding ontstaan zoals verbreking van de verbinding, trage toegang tot het internet en een gebrekkige werking van internetapplicaties.  ';
g17='Verbinding verbreken na X... ';
g18='De functie "Disconnect" (Verbinding verbreken) wordt gebruikt om de verbinding van de router met het internet automatisch te verbreken als er gedurende een door u vooraf bepaalde tijd geen activiteit is. Wanneer u bijvoorbeeld deze optie aankruist en het getal 5 in het minutenveld typt, wordt de verbinding van de router met het internet verbroken als er gedurende 5 minuten geen internetactiviteit is geweest. Deze optie kan u veel geld besparen als u voor uw telefoonverbinding met het internet bijvoorbeeld per minuut betaalt.,  ';
g19='MAC is de afkorting voor Media Access Controller. Alle netwerkcomponenten waaronder kaarten, adapters en routers hebben een uniek "serienummer"dat bekend is als het MAC-adres. Uw provider slaat het MAC-adres van uw computer doorgaans op en laat alleen die computer verbinding maken met de internetservice. Wanneer u de router installeert, wordt het eigen MAC-adres van de router door de ISP "gezien" waardoor de verbinding waarschijnlijk niet werkt. Belkin omzeilt dat probleem met de mogelijkheid het MAC-adres van de computer in de router te klonen (kopiëren). Dit MAC-adres wordt op zijn beurt door het systeem van de ISP gezien als het oorspronkelijke MAC-adres waardoor de verbinding kan werken. Als u niet zeker weet of uw ISP het originele MAC-adres wil zien, kunt u nu eenvoudig het MAC-adres klonen van de computer die oorspronkelijk op de modem was aangesloten. Het klonen van dit adres levert voor uw netwerk geen enkel probleem op. Bij het klonen van uw MAC-adres moet u ervoor zorgen dat u de computer gebruikt die OORSPRONKELIJK WAS AANGESLOTEN op uw modem voordat de router werd geïnstalleerd. Klik op de knop "Clone MAC address" (MAC-adres klonen). Klik op "Apply Changes" (Wijzigingen toepassen). Uw MAC-adres is nu naar de router gekloond. ';
g20='U kunt het kanaal waarvan de router gebruik maakt wijzigen door in het uitrolmenu het gewenste kanaal te selecteren en uw kanaal te kiezen. Klik op "Apply Changes" (Wijzigingen toepassen) om de instellingen op te slaan. U kunt ook de SSID wijzigen. De SSID is het equivalent van de naam van uw draadloze netwerk. U kunt de SSID elke naam geven die u wilt. Als er andere draadloze netwerken in uw omgeving zijn, moet u uw draadloze netwerk een unieke naam geven. De standaardnaam is belkin.xxx. Om de SSID te veranderen, klikt u in het SSID-vak en typt u een nieuwe naam in. Klik op "Apply Changes" (Wijzigingen toepassen) om de wijziging te bevestigen. ';
				
g21='U kunt ook uw draadloze netwerk zo goed als onzichtbaar te maken. Wanneer u de optie SSID-uitzending uitschakelt, verschijnt het netwerk niet in site-overzichten. Site Survey (Site-overzicht) is een van de mogelijkheden van veel draadloze netwerkadapters die tegenwoordig in de handel zijn. Deze functie zoekt de ether af naar beschikbare netwerken en geeft de computer de mogelijkheid een netwerk in het site-overzicht te kiezen. Door het uitschakelen van de SSID-uitzending, helpt u de veiligheid te verhogen. ';
g25='Virtuele servers';
g26='De functie Virtuele Servers biedt u de mogelijkheid externe (internet)verbindingen voor diensten als een webserver (poort 80), FTP-server (poort 21) of andere applicaties via uw router door te sturen naar uw interne netwerk. Omdat uw interne computers door een brandmuur ofwel "firewall" worden beveiligd, kunnen computers buiten uw netwerk hen (via het internet) niet bereiken omdat ze "onzichtbaar" zijn. Als u de functie "virtual server" voor een specifieke applicatie wilt configureren, kijk dan in de meegeleverde lijst van veel gebruikte toepassingen. Als uw toepassing daar niet in staat, neem dan contact op met de leverancier van de toepassing om te bepalen welke poortinstellingen u nodig hebt. U kunt uit dit overzicht een keus maken door de gezochte applicatie in de vervolgkeuzelijst te selecteren. Selecteer de regel waarheen u de instellingen uit de vervolgkeuzelijst naast "to row" (naar regel) wilt kopiëren en klik vervolgens op "Enter". De instellingen worden overgebracht naar de regel die u hebt opgegeven. Klik op "Apply Changes" (Wijzigingen toepassen) om de instelling voor deze toepassing op te slaan. Om instellingen handmatig in te voeren, typt u het IP-adres in het vak voor de interne (server) computer in, geeft u de poort(en) op die vrijgegeven moeten worden (zet bij meer poorten een komma achter elke poort), selecteert u het poorttype (TCP of UDP) en klikt u op "Apply Changes" (Wijzigingen toepassen). U kunt per intern IP-adres slechts één poort vrijgeven. U neemt een zeker risico door poorten in uw firewall te openen. U kunt de instellingen snel in- en uitschakelen. Als u een bepaalde applicatie niet gebruikt, kunt u de instellingen beter uitschakelen. ';
g27='Cliënt-IP-filters';
g28='U kunt de router zo configureren dat de toegang tot het internet, e-mail en andere netwerkdiensten op bepaalde dagen en uren gesloten is. Deze beperking kan worden ingesteld voor één computer, een groep computers of verschillende computers. Om bijvoorbeeld de toegang tot het internet voor één enkele computer af te sluiten, moet u het IP-adres van de beoogde computer in de IP-velden invoeren. Vul vervolgens 80 en 80 in de poortvelden in. Selecteer TCP. Selecteer "Block" (Blokkeren). U kunt ook "Always" (Altijd) selecteren om de toegang altijd te blokkeren. Selecteer de begindatum bovenaan, de begintijd bovenaan, de einddatum onderaan en de eindtijd onderaan. Klik op "Apply Changes" (Wijzigingen toepassen). De computer op het door u opgegeven IP-adres krijgt nu tijdens de door u opgegeven periodes geen toegang tot het Internet. Let op: zorg ervoor dat u de juiste tijdzone selecteert onder Utilities> System Settings> Time Zone.  ';
g28_1='De router kan zo worden geconfigureerd dat toegang tot internet, e-mail of andere netwerkdiensten op bepaalde dagen en tijden beperkt is. Deze beperking kan worden ingesteld voor één computer, een groep computers of verschillende computers. Klik op de knop "Toevoegen" als u deze functie wilt gebruiken.';
		
g29='MAC-adressenfilter';
g30='De MAC-adressenfilter is een krachtig beveiligingsinstrument waarmee u kunt aangeven welke computers toegang hebben tot het netwerk. Elke computer die probeert het netwerk binnen te komen maar die niet in de filterlijst voorkomt, wordt de toegang geweigerd. Als u deze functie inschakelt, moet u het MAC-adres van elke cliënt op uw netwerk invoeren om elke cliënt toegang tot het netwerk te verlenen. Als u deze functie wilt inschakelen, selecteert u "MAC-adressenfilter inschakelen". Klik vervolgens op "Toevoegen" om het MAC-adres in te voeren van elke computer die onderdeel uitmaakt van uw netwerk. Klik op "Wijzigingen toepassen" om de instellingen op te slaan. Om een MAC-adres uit de lijst te verwijderen, klikt u eenvoudig op "Verwijderen" naast het MAC-adres dat u wilt verwijderen. Klik op "Wijzigingen toepassen" om de instellingen op te slaan. Let op: u kunt het MAC-adres van de computer die u gebruikt om toegang te krijgen tot de administratieve functies van de router niet verwijderen. (De computer die u nu gebruikt.) ';
g31='Met de DMZ-functie kunt u één van de computers van uw netwerk buiten de NAT-firewall plaatsen. Dit kan bijvoorbeeld nodig zijn als de NAT-functie bij een bepaalde applicatie als een game of bij videoconferencing problemen veroorzaakt. Schakel deze functie alleen tijdelijk in. "redBold"Computers in de DMZ (gedemilitariseerde zone) zijn niet tegen hackeraanvallen beveiligd. Om een computer in de DMZ te plaatsen, voert u de laatste twee cijfers van zijn IP-adres in het onderstaande veld in en selecteert u "Enable" (Activeren). Klik op "Apply Changes" (Wijzigingen toepassen) waardoor de wijziging van kracht wordt. Als u meerdere statische WAN IP-adressen gebruikt, kunt u aangeven aan welk WAN IP-adres de DMZ-host wordt gericht. Typ het WAN IP-adres in waarnaar de DMZ host zich moet richten, voer de laatste twee cijfers in van het IP adres van de DMZ hostcomputer, selecteer "Enable" (Inschakelen) en klik op "Apply Changes" (Wijzigingen toepassen).';
	
g32='ICMP-ping blokkeren';
g33='Computerhackers maken gebruik van een techniek die bekend is als Pingen om potentiële slachtoffers te vinden op het internet. Door naar een bepaald IP-adres te pingen en een reactie te ontvangen van het IP-adres, kan een hacker vaststellen of zich daar misschien iets interessants bevindt. De router kan zo worden ingesteld dat hij niet op ICMP-pings van buiten reageert. Hierdoor wordt de veiligheidsmarge van uw router verhoogd. Om het ping-antwoordbericht uit te schakelen, selecteert u "Block ICMP Ping" (ICMP-ping blokkeren) en klikt u op"Apply Changes"(Wijzigingen toepassen). De router reageert nu niet op ICMP-pings. ';
g34='Beheerderswachtwoord';
g35='De router wordt geleverd ZONDER vooraf geprogrammeerd wachtwoord. Als u in verband met de beveiliging een wachtwoord wilt gebruiken, kunt u dat hier invoeren. Schrijf uw wachtwoord op en bewaar het op een veilige plaats. U hebt dit wachtwoord nodig als u zich later bij de router wilt aanmelden. Het is ook verstandig een wachtwoord in te voeren als u van plan bent de functie voor extern beheer van deze router te gebruiken. Met de optie inlog-timeout kunt u de maximale tijdsduur instellen waarbinnen u ingelogd kunt blijven op de Advanced Setup Interface (Geavanceerde setup-interface) van de router. De tijdklok begint te lopen als er geen activiteit is geweest. U hebt bijvoorbeeld een aantal wijzigingen in de op het internet gebaseerde setup-interface aangebracht en daarna uw computer alleen gelaten zonder op "Logout" (Afmelden) te klikken. Als u de tijdoverschrijding bijvoorbeeld hebt ingesteld op 10 minuten, dan loopt de inlogsessie af 10 minuten nadat u de router alleen hebt gelaten. Als u meer wijzigingen wilt aanbrengen, moet u opnieuw op de router inloggen. Deze mogelijkheid is bedoeld als extra beveiliging en staat standaard ingesteld op 10 minuten. Er kan slechts één computer tegelijk zijn ingelogd op de geavanceerde setupinterface van de router.  ';
g36='Tijd en tijdzone';
g37='De tijdklok van de router wordt aangestuurd door een SNTP-server (Simple Network Time Protocol). Hierdoor loopt de systeemklok van de router synchroon met de tijd van het wereldwijde internet. De gesynchroniseerde klok in de router wordt gebruikt voor de registratie van de beveiligingslog en de aansturing van het cliëntenfilter. Selecteer de tijdzone waarin u woont. Als u in een zone woont waarvoor de zomertijd en wintertijd geldt, selecteer dan de optie "Zomertijd/wintertijd automatisch instellen". De systeemklok geeft niet onmiddellijk na inschakeling de juiste tijd aan. De router heeft ten minste 15 minuten nodig om verbinding te maken met de tijdservers op het internet en voor het ontvangen van een antwoordsignaal. U kunt de klok niet zelf instellen.  ';
g38='Beheer op afstand';
g39='Voordat u deze functie inschakelt, MOET U ERVOOR ZORGEN DAT U HET WACHTWOORD VAN SYSTEEMBEHEERDER HEBT INGESTELD. Met behulp van de functie "Beheer op afstand" kunt u overal op het internet de instellingen van uw router wijzigen. Er zijn twee methoden voor het op afstand beheren van de router. De eerste methode biedt toegang tot de router vanaf iedere willekeurige plaats op het internet door het selecteren van Any IP address can remotely manage the Router (De router kan op afstand worden beheerd vanaf ieder willekeurig IP-adres). Wanneer u uw WAN IP-adres intypt vanaf iedere willekeurige computer op het Internet, dan krijgt u een inlogscherm te zien waarin u het wachtwoord van uw router moet invoeren. De tweede methode houdt in dat u een specifiek IP-adres uitsluitend aanwijst voor het externe beheer van de router. Dit is weliswaar veiliger maar minder praktisch. Bij deze methode vult u in de daarvoor bestemde ruimte het IP-adres in van de computer waarmee u toegang tot de router wilt hebben en selecteert u "Only this IP address can remotely manage the Router" (Uitsluitend dit IP-adres kan de router op afstand beheren). WIJ RADEN WIJ U DRINGEND AAN uw systeembeheerderwachtwoord in te stellen voordat u deze functie inschakelt. Als u geen wachtwoord gebruikt, loopt uw router het risico van indringers.  ';
g40='NAT inschakelen';
g42='UPnP (Universal Plug-and-Play) is een technologie die een naadloze werking van voice messaging, video messaging, games en andere applicaties mogelijk maakt die voldoen aan UPnP. Een aantal applicaties vereist dat de firewall van de router op een bepaalde manier is geconfigureerd om correct te functioneren. Hiervoor moeten doorgaans de TCP- en UDP-poorten worden geopend en in sommige gevallen triggerpoorten worden ingesteld. Een applicatie die compatibel is met UPnP kan communiceren met de router. Hierbij wordt de router verteld hoe hij de firewall moet configureren. Bij aflevering is de UPnP-functie van de router uitgeschakeld. Als u applicaties gebruikt die voldoen aan UPnP en u wilt profiteren van de mogelijkheden van UPnP dan heeft het zin de UPnP-functie te activeren. Selecteer eenvoudig "Enable" (Inschakelen) in het onderdeel "UPnP Enabling" (UPnP inschakelen) van de utilities-pagina. Klik op "Apply Changes" (Wijzigingen toepassen) om de wijziging op te slaan. ';
g43='Automatische update-informatie Firmware';
g44='De router heeft de ingebouwde mogelijkheid automatisch te controleren of er een nieuwe firmware-versie beschikbaar is en u te waarschuwen als die er blijkt te zijn. Wanneer u inlogt op de geavanceerde interface van de router, dan gaat de router controleren of er nieuwe software beschikbaar is. Als er nieuwe firmware beschikbaar is, wordt u daarvan op de hoogte gebracht. U kunt er dan voor kiezen de nieuwe versie te downloaden of deze te negeren. Bij aflevering is deze functie op de router uitgeschakeld. Als u deze mogelijkheid wilt inschakelen, selecteert u "Enable" (Inschakelen) en klikt u op "Apply Changes" (Wijzigingen toepassen). ';
g45='Beveiliging van draadloze netwerken';
g46='Het gebruik van codering (encryptie) kan helpen uw draadloze netwerk te beveiligen. U kunt slechts één type beveiliging tegelijk gebruiken. Kies daarom een modus die door alle netwerkapparaten in het draadloze netwerk ondersteund wordt. Dit product van Belkin heeft vier verschillende beveiligingsinstellingen:<br><br>1) Uitgeschakeld. In deze modus is codering niet ingeschakeld. In open netwerken waar alle gebruikers welkom zijn, wordt encryptie soms achterwege gelaten.<br><br>2) WPA/WPA2-Personal(PSK) (Wi-Fi Protected Access) PSK is een op recente normen gebaseerde beveiligingstechniek waarbij elk informatiepakket met een andere code of sleutel wordt versleuteld. Omdat de sleutel voortdurend verandert, is WPA bijzonder veilig. WPA-PSK (Pre-Shared Key) is bedoeld voor particulieren en kleine bedrijven die geen server hebben. De PSK-encryptiesleutel wordt automatisch gegenereerd en bestaat uit een reeks tekens of een "Passphrase" (meervoudig wachtwoord). Het grootste veiligheidsrisico van WPA-PSK is als iemand erin slaagt uw meervoudige wachtwoord te achterhalen. <br><br>a. TKIP versus AES. Bij het installeren van WPA moet u aangeven of u voor de encryptie TKIP of AES wilt gebruiken. De WPA-standaard geeft TKIP op, dus dat is de standaardconfiguratie. Bovendien zorgt TKIP volgens de makers voor een betere compatibiliteit tussen draadloze producten van verschillende leveranciers (veel draadloze producten worden waarschijnlijk nooit naar AES opgewaardeerd). AES is een nieuwe encryptietechniek die gebaseerd is op de 802.11i-standaard. Er zijn nieuwe WPA-standaarden in ontwikkeling die van AES gebruikmaken. Hoewel AES niet zo populair is, zijn er gebruikers die aan deze techniek de voorkeur geven. In elk geval moeten alle netwerkapparaten in een netwerk dezelfde techniek gebruiken.<br><br>b. Pre-Shared Key. Voer een woord of korte zin van maximaal 64 tekens in. Voor elk ander draadloos netwerkapparaat in het netwerk moet u dezelfde PSK gebruiken. Let op het verschil tussen hoofdletters en kleine letters (voor de computer is "n" iets anders dan "N"). Hackers die uw netwerk willen binnendringen, proberen uw PSK te raden. Dat raden is eenvoudigste manier om uw wachtwoord te achterhalen.<br><br>3) 128-bit WEP. Tot voor kort was 128-bit WEP (Wired Equivalent Privacy) de norm voor de encryptie (codering) van draadloze netwerken. Ook als niet al uw draadloze apparaten WPA ondersteunen, is 128-bit WEP een uitstekende beveiligingsmethode. Hierbij moet u hexadecimale tekens invoeren. Deze kunt u echter ook automatisch genereren.<br><br>4) 64-bit WEP. Belkin adviseert de 64-bit modus alleen te gebruiken bij netwerken waarin een aantal apparaten geen WPA of 128-bit WEP ondersteunt. ';
g47='Some ISPs require a connection using L2TP protocol. This sets up a direct connection to the ISP\'s system. Type in the information provided by your ISP in the space provided. When you have finished, click "Apply Changes". After you apply the changes, the Internet Status indicator will read "Connected" if your Router is set up properly. ';
g48 = 'Access Control';
g49 = 'The Router can be configured to restrict access to the Internet, email, or other network services at specific days and times. Restriction can be set for a single computer.';
g50='Eco-modus';
g51='Met deze functie kunt u dimmen de LED\'s op de voorkant van de router om energie te besparen. U kunt ook disablethe draadloze radio op vooraf bepaalde tijdstippen.';

rs_file_error='Het bij te werken bestand is niet het juiste versietype voor dit apparaat. Bijwerken mislukt Verwerf het juiste bestand en probeer het opnieuw';
rs_crc='Terugzetten mislukt < CRC >';
rs_long='Terugzetten mislukt <te lang>';
rs_disposition='Terugzetten mislukt <Geen inhoudsindeling>';
rs_getpid='Terugzetten mislukt <PID niet beschikbaar!>';
rs_unmatchpid='Terugzetten mislukt <Geen overeenstemming PID>';

var msg_ddns1 ="Voer uw gebruikersnaam in!\n";
var msg_ddns2 ="Voer uw wachtwoord in!\n";
var msg_ddns3 ="Domeinnaam mag niet blanco zijn.\n";
var msg_ddns4 ="Dynamic DNS bijwerken";
var msg_ddns5 ="Domein naam zou minder dan 63 tekens moeten bevatten.";

// fw_dmz.html
var msg_fw_dmz1 = "Please enter the IP address before enabling DMZ.\n";
var msg_lan_dhcp1 ="Requesting information from the Gateway.";
var msg_lan_dhcp2 ="Updating configuration database.";
var msg_lan_sett1 ="Voer niet-routeerbare IP-adressen in (10 of 172 of 192)!\n";
var msg_lan_sett2 ="Voer niet-routeerbare IP-adressen in (168)!\n";
var msg_lan_sett3 ="Voer niet-routeerbare IP-adressen in (16 ~ 31)!\n";
var msg_lan_sett4 ="Voer niet-routeerbare IP-adressen in (1 ~ 254)!\n";
var msg_lan_sett5 ="Voer geldige IP-adressen in (0 ~ 255)!\n";
var msg_wan_stat1 ="IP-adres";
var msg_wan_stat2 =" is not in ";
var msg_wan_stat3 =" network.";
var msg_wan_stat='IP-adres%s niet in %s netwerk.';
var msg_wls_chan1 ="SSID kan niet worden ingesteld op NULL.";
var msg_wls_chan2 ="Het gast-SSID veld mag niet leeg gelaten worden!\n";
var fw_update ="Firmware wordt bijgewerkt. ";
var fw_not_interrupt ="U MAG DIT PROCES NIET ONDERBREKEN OF DE VOEDING UITSCHAKELEN. Als u dit wel doet, kan het zijn dat uw router niet meer werkt. ";
var show35a ="Standaardinstellingen herstellen";
var msg_invalid_char ='Ongeldig(e) teken(s) gevonden. De volgende tekens mogen gebruikt worden: 0-9,a-z, A-Z, `~!@#$%^&*()_-+=|\\{}[]:";\',.<>/?';
var vs_null ="Beschrijving is leeg.";
var msg_invalid_vs_char ='Ongeldig(e) teken(s) gevonden. De volgende tekens mogen gebruikt worden: 0-9, a-z, A-Z, `~!@#$%^&*()_-+=|{}[]:;\',.<>/?';
var msg_invalid_ssid_char ='Ongeldig(e) teken(s) gevonden. De volgende tekens mogen gebruikt worden: 0-9, a-z, A-Z, _+.';
var msg_invalid_domain_char ='Ongeldige lokale domeinnaam '+': ~!@#$%^&*()=+{}[]|":;\\\'?/<>,`';
var msg_invalid_char_1 ='Invalid Character(s) found. Valid characters are letters and numbers .The following symbols is invalid: `~!@#$%^&*()_+[]{}\\|;:\'"<>/?.,';
var msg_hostIP_invalid ="Het host-IP-adres is ongeldig Het mag niet overeenkomen met het LAN IP van de router.\n";
var msg_dmzIP_blank='Voer het IP-adres in voordat u de DMZ activeert.';
var msg_dmzIP ="DMZ IP-adres.";
ipm='U hebt niet alle DNS-nummers ingevoerd of een aantal getallen dat u hebt ingevoerd is ongeldig. De getallen moeten 0 of 255 zijn of een getal daar tussen in.';
ipmLast='Either you have not entered all the DNS numbers,\n or some of the numbers you entered are invalid.\n the numbers may be or between 1-254.';
var msg_blank =" mag niet blanco zijn.\n";
var msg_space ="Blanks or spaces are not allowed in %s\n";
var msg_blank_in ="Blanks are not allowed in %s\n";
var msg_allspaces ="%s cannot consist solely of spaces\n";
var msg_invalid ="Invalid character or characters in %s\nValid characters are: \n%s\n\n";
var msg_check_invalid ="%s contains an invalid number\n";
var msg_valid_range ="%s is invalid. Valid range is %s to %s\n";
var msg_invalid_mac ="Ongeldig MAC-adres.\n";
var msg_multi_mac="The MAC address can't be multicast address.\n";
var msg_vs_des="Invalid character : or - is not allowed in description.";
var msg_privateIP_invalid ="Het LAN IP-adres is ongeldig!\n";
var msg_dmzIP ="DMZ IP Address.";
var msg_confirmDefault ="Warning!\nLoading the Factory Default Settings will erase all the current settings.\nAre you sure you wish to do this?";

var con_noinfo='Selecteer het type verbinding waarvan uw Internet Service Provider (ISP) gebruik maakt.\nDeze informatie heeft u bij uw aanmelding van uw ISP gekregen.';
var con_miss='Het onderstaande veld bevat ongeldige gegevens.';
var con_nosure='Indien u niet zeker weet welk verbindingstype u dient te gebruiken, neem dan contact op met uw provider.\nBeëindig het telefoongesprek met uw provider pas als u al de vereiste informatie op de volgende pagina\'s ook hebt ingevoerd.';

var wiz_noinfo='Vul de vereiste informatie in, die hoort bij het verbindingstype dat u in het vorige scherm hebt gekozen.  Uw provider heeft u deze informatie verstrekt.';
var wiz_miss='Enkele van de onderstaande velden bevatten ongeldige gegevens. Vul de ontbrekende gegevens in.  Uw provider heeft u deze informatie verstrekt.';
var wiz_nosure='Neem contact op met uw provider als u twijfelt over de instellingen.';
var network_key1='Voer de netwerksleutel in!';
var network_key2='De sleutel dient uit 8 tot 63 tekens te bestaan en mag ook spaties en symbolen bevatten!';
var wiz_cd1='Plaats de installatie-cd in het cd-romstation van uw computer en sluit deze wizard.';
var wiz_cd2='Maakt u zich geen zorgen, we moeten alleen een instelling op uw computer corrigeren die speciaal geldt voor Australië en Nieuw-Zeeland. De installatiewizard op de cd bevat een speciaal programma om dit automatisch te doen.';
var wiz_cd3='Zo\'n 15 seconden nadat u de wizard hebt gesloten en u de installatie-cd in het cd-romstation hebt geplaatst, zou de installatiewizard op uw scherm moeten verschijnen.';
var wiz_cd4='U dient deze browser-based wizard te sluiten door onderaan op de knop "Sluiten" te klikken <br>om de installatie-cd te kunnen gebruiken.';
var wiz_chk_conn1='Controle van de internetverbinding...';
var wiz_chk_conn2='Een ogenblik geduld a.u.b. De router controleert de internetinstellingen.';
var wiz_chk_isp='Uw ISP heeft onderstaande instellingen niet geaccepteerd toen wij verbinding probeerden te maken. Wij verzoeken u de gegevens zorgvuldig te controleren.';
var wiz_chk_poeisp='Uw provider heeft onderstaande instellingen niet geaccepteerd toen wij verbinding probeerden te maken. Wij verzoeken u <br>de instellingen goed te controleren. Als u twijfelt over de instellingen, neem dan contact op met uw provider.';


btn5='Previous';
btn6='Routing Table';
Multi_PPPoE='Multi-PPP over Ethernet';
wcc15='Multi-PPPoE';
wcc16='[Japan Only] This type of connection is a unique function in Japan which is required for those who subscribe NTT\'s broadband Internet.';

var Australia_wz="Australië";
var Austria_wz="Oostenrijk";
var Belgium_wz="België";
var China_wz="China";
var Czech_wz="Tsjechië";
var Denmark_wz="Denemarken";
var France_wz="Frankrijk";
var Germany_wz="Duitsland";
var Hong_Kong_wz="Hong Kong";
var Hungary_wz="Hongarije";
var India_wz="India";
var Indonesia_wz="Indonesië";
var Israel_wz="Israël";
var Italy_wz="Italië";
var Japan_wz="Japan";
var Korea_wz="Korea";
var Malaysia_wz="Maleisië";
var Netherlands_wz="Nederland";
var New_Zealand_wz="Nieuw-Zeeland";
var Norway_wz="Noorwegen";
var Philippines_wz="Filippijnen";
var Portugal_wz="Portugal";
var Singapore_wz="Singapore";
var Spain_wz="Spanje";
var Sweden_wz="Zweden";
var Switzerland_wz="Zwitserland";
var Taiwan_wz="Taiwan";
var Thailand_wz="Thailand";
var UK_wz="Verenigd Koninkrijk";
var USA_wz="Verenigde Staten van Amerika";
var Other_wz="Anders";

g10_brief='Bij kabelmodems wordt meestal een dynamisch verbindingstype gebruikt. Het instellen van het verbindingstype op "dynamisch" is in veel gevallen voldoende voor het tot stand brengen van de verbinding met uw provider. Sommige typen dynamische verbindingen vereisen een hostnaam. Als u een hostnaam is toegewezen kunt u deze op de daarvoor bestemde plaats invoeren. Deze hostnaam wordt u toegekend door uw provider.';
var Finland_wz="Finland";
var Poland_wz="Polen";
 

var msg_invalid_IP = 'Een of meer van de IP-adressen die u hebt ingevoerd is/zijn niet geldig!';
var modem_miss = wiz_miss;
var modem_nosure = wiz_nosure;
var modem_noinfo = 'Voer de volgende gegevens in. Uw internetprovider heeft u deze informatie verstrekt.';
var run_detect1 = 'Dit modem detecteert nu de VPI/VCI. Een ogenblik geduld...';
 
var run_detect2 = 'Dit modem detecteert nu het WAN-verbindingstype. Een ogenblik geduld...';

run52='Inkapseling';
run19=run52;
run46=wiz_chk_isp;
run48='Modeminstellingen';

info_pppoe = 'De meeste DSL-providers maken gebruik van PPPoE als type verbinding. Als uw internetaansluiting met een DSL modem werkt, gebruikt uw ISP waarschijnlijk PPPoE om u bij het systeem aan te melden. Als u thuis of op uw kantoor een internetaansluiting hebt waarvoor geen modem nodig is, gebruikt u waarschijnlijk ook PPPoE. Uw type verbinding is PPPoE als:<br> 1) Uw ISP u een gebruikersnaam en een wachtwoord heeft toegewezen die nodig zijn om de verbinding met het internet tot stand te brengen.<br> 2) Uw ISP u software als WinPOET of Enternet 300 heeft gegeven om de verbinding met het internet tot stand te brengen.<br> 3) U op een ander desktoppictogram dan uw browser moet dubbelklikken om met het internet verbinding te krijgen.<br><br> Om de router op het gebruiken van PPPoE in te stellen, moet u uw gebruikersnaam en wachtwoord in de daarvoor bestemde vakken typen. Als u geen servicenaam hebt ontvangen of kent, laat u het vak "Servicenaam" leeg. Nadat u de verplichte gegevens hebt ingetypt, klikt u op "Apply Changes" (Wijzigingen toepassen). Nadat de wijzigingen zijn ingegaan, meldt de internetstatusindicator "Connected" (Verbonden) terug als uw router correct is geïnstalleerd. Meer informatie over het configureren van uw router voor gebruik van PPPoE vindt u in de handleiding.';
info_pppoa = 'De meeste DSL-providers maken gebruik van PPPoA als type verbinding. Als uw internetaansluiting met een DSL-modem werkt,  gebruikt uw internetserviceprovider waarschijnlijk PPPoA om u bij het systeem aan te melden. Als u thuis of op uw kantoor een internetaansluiting  hebt waarvoor geen modem nodig is, gebruikt u waarschijnlijk ook PPPoA. <br><br> Uw type verbinding is PPPoA als:<br>  1) Uw provider u een gebruikersnaam en een wachtwoord heeft toegewezen die nodig zijn om de verbinding met het internet tot stand te brengen.<br> 2) Uw provider u software heeft verstrekt die u gebruikt voor het tot stand brengen van een internetverbinding.<br> 3) U op een ander desktoppictogram dan uw browser moet dubbelklikken om met het internet verbinding te krijgen.<br><br> Om de router op het gebruiken van PPPoA in te stellen, moet u uw gebruikersnaam en wachtwoord  in de daarvoor bestemde vakken typen. Als u geen servicenaam hebt ontvangen of kent, laat u het vak "Servicenaam" leeg. Nadat u de verplichte gegevens hebt ingetypt, klikt u op "Wijzigingen toepassen". Nadat de wijzigingen zijn ingegaan,  geeft de internetstatusindicator aan dat u "Verbonden" bent, mits uw router correct is geïnstalleerd. Meer informatie over het configureren van uw router voor gebruik van PPPoA vindt u in de handleiding.';
info_ipoa = g11;
 
info_dial_up = 'U moet een modem gebruiken die verbonden is met seriële poort van uw router. Uw telefoonnummer, gebruikersnaam, wachtwoord enzovoort worden u door uw ISP verstrekt. Als uw modem speciale initialisatietekenreeksen nodig heeft om goed te kunnen werken, moet u deze informatie opvragen bij de leverancier van de modem. Als uw ISP u een bepaald IP adres heeft gegeven, moet u dit invoeren in de IP adresvelden onder aan het scherm.';
topic_dial_up = 'Externe inbelverbinding';
 
h9_1= 'DSL is de afkorting van Digital Subscriber Line. Een DSL-modem gebruikt bestaande telefoonlijnen om data met hoge snelheid over te sturen. ';
info_dsl_modem = h9_1;
 
h9_2= 'DSL-modem';
topic_dsl_modem = h9_2;
help_pppoa = '<b>PPPoA</b> De meeste DSL-providers maken gebruik van PPPoA als type verbinding. Als uw internetaansluiting met een DSL-modem werkt,  gebruikt uw internetserviceprovider waarschijnlijk PPPoA om u bij het systeem aan te melden. Als u thuis of op uw kantoor een internetaansluiting  hebt waarvoor geen modem nodig is, gebruikt u waarschijnlijk ook PPPoA. Uw type verbinding is PPPoA als:  1) Uw provider u een gebruikersnaam en een wachtwoord heeft toegewezen die nodig zijn om de verbinding met het internet tot stand te brengen. 2) Uw provider u software heeft verstrekt die u gebruikt voor het tot stand brengen van een internetverbinding. 3) U op een ander desktoppictogram dan uw browser moet dubbelklikken om met het internet verbinding te krijgen. Om de router op het gebruiken van PPPoA in te stellen, moet u uw gebruikersnaam en wachtwoord  in de daarvoor bestemde vakken typen. Als u geen servicenaam hebt ontvangen of kent, laat u het vak "Servicenaam" leeg. Nadat u de verplichte gegevens hebt ingetypt, klikt u op "Wijzigingen toepassen". Nadat de wijzigingen zijn ingegaan,  geeft de internetstatusindicator aan dat u "Verbonden" bent, mits uw router correct is geïnstalleerd. Meer informatie over het configureren van uw router voor gebruik van PPPoA vindt u in de handleiding.';
help_pppoe = '<b>PPPoE</b> De meeste DSL-providers maken gebruik van PPPoE als type verbinding. Als uw internetaansluiting met een DSL modem werkt, gebruikt uw ISP waarschijnlijk PPPoE om u bij het systeem aan te melden. Als u thuis of op uw kantoor een internetaansluiting hebt waarvoor geen modem nodig is, gebruikt u waarschijnlijk ook PPPoE. Uw type verbinding is PPPoE als: 1) Uw ISP u een gebruikersnaam en een wachtwoord heeft toegewezen die nodig zijn om de verbinding met het internet tot stand te brengen 2) Uw ISP u software als WinPOET of Enternet 300 heeft gegeven om de verbinding met het internet tot stand te brengen 3) U op een ander desktoppictogram dan uw browser moet dubbelklikken om met het internet verbinding te krijgen Om de router op het gebruiken van PPPoE in te stellen, moet u uw gebruikersnaam en wachtwoord in de daarvoor bestemde vakken typen. Als u geen servicenaam hebt ontvangen of kent, laat u het vak "Servicenaam" leeg. Nadat u de verplichte gegevens hebt ingetypt, klikt u op "Apply Changes" (Wijzigingen toepassen). Nadat de wijzigingen zijn ingegaan, meldt de internetstatusindicator "Connected" (Verbonden) terug als uw router correct is geïnstalleerd. Meer informatie over het configureren van uw router voor gebruik van PPPoE vindt u in de handleiding.';
help_ipoa = '<b>Statisch IP (IPoA)</b>' + g11;
help_dial_up = '<b>Externe inbelverbinding</b> U moet een modem gebruiken die verbonden is met seriële poort van uw router. Uw telefoonnummer, gebruikersnaam, wachtwoord enzovoort worden u door uw ISP verstrekt. Als uw modem speciale initialisatietekenreeksen nodig heeft om goed te kunnen werken, moet u deze informatie opvragen bij de leverancier van de modem. Als uw ISP u een bepaald IP adres heeft gegeven, moet u dit invoeren in de IP adresvelden onder aan het scherm.';
wb1='WAN > Type verbinding > Dynamisch/Vast IP (1483 Bridged)';
wb101='WAN > Type verbinding > Statisch IP(IPoA)';
wb102='WAN > Type verbinding > Alleen modem (Internet delen uitschakelen)';
wb3='IP toegekend door internetprovider';
wb7='VPI / VCI';
wb9='Automatisch herkennen';
wb11='Nee';
wb12='LLC';
wb13='VC MUX';
wpevpi1='Voer uw VPI (Virtual Path Identifier) in.';
var msg_vpi='Het VPI-getal kan 0 of 255 zijn of elk getal daar tussen in!';
wpevci1='Voer uw VCI (Virtual Channel Identifier) in.';
var msg_vci='Het VCI-getal kan 1 of 65535 zijn of elk getal daar tussen in!';
wc7='Dynamisch/Vast IP (1483 Bridged)';
wc9='Statisch IP (IPoA)';
wc11='Alleen modem (Internet delen uitschakelen)';
wppoa1='WAN > Type verbinding > PPPoA';
wppoa2='Typ hieronder uw gegevens in om uw PPPoA-instellingen in te voeren en klik op "Wijzigingen toepassen".';
wpmodem1='Typ hieronder uw gegevens in om uw modeminstellingen in te voeren en klik op "Wijzigingen toepassen".';
IPoA='IPoA';
PPPoA='PPPoA';
Modem='Alleen modem';
adsl_status='ADSL';
downstream = 'Downstream';
upstream = 'Upstream';
datarate = 'Gegevenssnelheid (Kbps)';

var change_lan_for_ip_conflict="Router WAN port gets an IP address who is in Router's LAN subnet, WAN port is disabled to insure LAN ports can work. As a result, you can not visit the internet now. Please change your WAN connection settings or LAN settings to solve this.";

var wizard_name = "Installatieprogramma van de router";
                   
stroute_1 = 'LAN > Static Routing';
showstroute='Static Routing';
stroute3 = 'The routing table is full!';
stroute32 = ' Network Address';
stroute33 = ' '+i11;
stroute34 = ' Gateway';
Remove='Remove';



acl_1 ='Parental Control > Toegangscontrole';
help_acl='After enabling Access Control, pressing the "Add" button will open up the "Connected Client List" Screen. This screen lists all the clients list with MAC addresses learned from the router. In the "Connected Client List" screen you can also create a Client you want to control by filling in the blanket MAC address column. You choose one of the clients from the "Connected Client List" by pressing the "Add" button. You will return to Access Control Screen. You can press the "Edit" button under the "Member" column to setup the Acceess Control Rule for each client. '
acl_setting='Internet Access <br> Policy';
acl_2 = 'The Acl table is full';
acl_3 = 'After enabling Access Control, pressing the <b>"Add"</b> button will open up the <b>"Connected Client List"</b> Screen.  This screen lists all the clients list with MAC addresses learned from the router. In the <B>"Connected Client List" </B> screen you can also create a Client you want to control by filling in the blanket MAC address column. You choose one of the clients from the "Connected Client List" by pressing the <b>"Add"</b> button.  You will return to Access Control Screen. You can press the <b>"Edit"</b> button under the <b>"Member"</b> column to setup the Acceess Control Rule for each client.';
acl_4='Wanneer u op de knop "Toevoegen" klikt, wordt een overzicht van de aangesloten clients weergegeven. Daarbij wordt ook het MAC-adres vermeld. In het scherm met aangesloten clients kunt u ook zelf clients opgeven door het MAC-adres van die client in te voeren in de kolom met MAC-adressen. U kiest een client in de lijst en klikt op de knop "Toevoegen" onder de actiekolom. Vervolgens keert u terug naar het scherm Toegangscontrole. In dit scherm moet u de gegevens invoeren voor de regels voor de gekozen client.';
acl1='Lid';
acl2='Apparaat';
acl3='MAC-adres';
acl4='Status';
acl5='Beperking';
acl6='Actie';
acl7=' ';
acl8='Alle apparaten van gast-SSID';
acl9='Uitzondering op regels voor lid';
acl10='Schema';
acl11='URL List';
acl12='URL Keyword List';
acl13='Dagen';
acl14='Elke dag';
acl15='Ma';
acl16='Di';
acl17='Wo';
acl18='Vr';
acl19='24 uur ';
acl20='Van';
acl21='Aan ';
acl22='Verwijderen lid';
acl23='Already existed.';
acl24='Reeds in ledenlijst';
acl25='Reeds in klantenlijst';
acl26='De poortnummers die u hebt ingevoerd zijn ongeldig.';
acl27='Landing wachtwoord';
acl28='Landing page';
acl29='Toegang geweigerd Voer het routerwachtwoord in om tijdelijk toegang te verlenen aan de geblokkeerde pagina of diensten.';
member_setting='Leden';
acl_member_setting='Exception of Control Rules for Member';
Allow_All='Allow All';
Deny_All='Deny All';
acl30='De router kan zo worden geconfigureerd dat toegang tot internet, e-mail of andere netwerkdiensten op bepaalde dagen en tijden beperkt is. Deze beperking kan worden ingesteld voor één computer, een groep computers of verschillende computers.';

Index='Index';
Services='Service';
Port_Rang_List='Poortbereik';
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
PortService_User_Defined='Door gebruiker te bepalen';
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
Block_All_Services='Alle diensten blokkeren';
Allowed_Services='Allowed Services';
Allow_All_Services='Allow All Services';
Blocking_Url='Website Blocking by URL Address ';
Allowing_Url='Website Allowing by URL Address ';
Block_All_URLs="Alle URL's blokkeren";
Allow_All_URLs="Alle URL's toestaan";
URL_Address='URL-adres';

Keyword='Trefwoord';
Blocking_Keyword='Website Blocking by keyword';
Allowing_Keyword='Website Allowing by keyword';



Connected_Client_List='Verbonden clients';
var save_reboot_time=30;
var restore_reboot_time=30;
var upgrade_reboot_time=70;
var normal_reboot_time=60;
rdt_msg1='Deze functie is niet geïmplementeerd. ';
rdt_msg2='U wordt doorgeleid naar de homepage...';
var disconnect_msg = 'Oops! Your connection to the router has failed.  Please reconnect to the router, click OK and retry.';
show49='Gasttoegang';
wguest1='Draadloos > Gasttoegang';
wguest4='Gasttoegang geeft toegang tot internet via de WAN-poort, maar geeft gasten geen toegang tot het interne netwerk, LAN en WLAN. Alleen om het gebruik te vergemakkelijken wordt deze functie alleen op 2.4 GHz ondersteund.';
wguest5='Type';
wguest6='Café-stijl (gastlog via een webpagina)';
wguest7='WPA/WPA2 PSK';
wguest8='WEP';
wguest9='Open';
wguest10='Netwerknaam (SSID)';
wguest11='maximaal 32 tekens, geen spaties';
wguest12='Wachtwoord (PSK)';
wguest13='8 tot 63 tekens';
wguest14='Toegang afdrukgast instellen';
wguest15='10 hexadecimale cijfers';
wlguest3='De lengte van het wachtwoord is ongeldig. Het wachtwoord moet minimaal 8 tekens bevatten en mag maximaal 63 tekens lang zijn.';
wlguest4='De WEP-sleutel moet 10 hexadecimale tekens lang zijn.';
wlguest5='Elke gast die met uw draadloze netwerk verbinding maakt heeft dit wachtwoord nodig';
wlguest6='Beveiligingstype';
wlguest7='Verbinding maken met het draadloze netwerk:';
wlguest8='Windows';
wlguest9='Klik met de rechter muisknop op het netwerkpictogram in uw Windows-taakbalk en selecteer "Bekijk de beschikbare draadloze netwerken" in het pop-upmenu.';
wlguest10='Dubbelklik op het';
wlguest11='Er verschijnt een voorgrondvenster dat naar de netwerksleutel vraagt. Voer hierboven het wachtwoord in en klik op OK.';
wlguest12='MAC OS X';
wlguest13='Klik op uw menubalk (rechtsboven) op het pictogram van het draadloze netwerk en selecteer het';
wlguest14='Er verschijnt een voorgrondvenster dat naar de netwerksleutel vraagt. Voer hierboven het wachtwoord in en klik op OK.';
wlguest15='Gasttoegang is een functie waarmee gebruikers wel op internet kunnen maar niet zomaar op het thuisnetwerk. Vraag de netwerkbeheerder om het wachtwoord voor gasttoegang en voer het hieronder in.';
wlguest16='Geslaagd! U kunt nu een webbrowser openen en op internet.';
wlguest17='Wachtwoord/PSK';
wipv61='IPv6 > Verbindingsinstellingen';
wipv62='IPv6 Pass-Through >';
wipv63='Apparaten die verbonden zijn met uw router, kunnen met elkaar communiceren via originele IPv6-pakketten. IPv6-pakketten op de LAN zullen automatisch worden verstuurd naar alle LAN-interfaces (Ethernet-poorten en draadloze 2,4GHz- en 5GHz-netwerken).';
wipv64='Indien pass-through is ingeschakeld, zullen de pakketten ook worden gekopieerd naar de WAN-interface. (Hierbij wordt een directe, onbeveiligde verbinding met het internet gecreëerd.)';
wipv65='Neem contact op met uw internetprovider voor informatie over hun ondersteuning van IPv6.';
wipv66='IPv6';
wipv67='Internet IPv6';
wipv68='Uw netwerk is nu compatibel met IPv6.';
wipv69='Pass-Through';

show50='Websitefilters';
web_filter1='Parental Control > Websitefilters';
web_filter2='Een eerste beveiliging voor alle apparaten die van het internet in uw woning gebruik maken en die u en uw gezin beschermt tegen onveilige en ongewenste websites.';
web_filter3='Filtermogelijkheden';
web_filter4='Deze beveiligingsfilters helpen u en uw gezin bij het maken van de juiste keuze als het gaat om browsen op het internet.';
web_filter5='Blokkeren van kwaadaardige, pornografische en andere gezinsonvriendelijke websites';
web_filter6='Blokkeren van kwaadaardige sites en sites voor volwassenen';
web_filter7='Blokkeren van kwaadaardige sites';
web_filter8='Geen filters';
web_filter9='Blokkeren van malware-, phishing- en oplichterijwebistes, evenals sites met ongewenste inhoud zoals expliciet seksueel materiaal, abortus, alcohol, misdaad, sekten, drugs, gokken, haat, zelfmoord, tabak of geweld.';
web_filter10='Blokkeren van malware- phishing-, oplichterijwebsites evenals sites met expliciet seksueel materiaal';
web_filter11='Blokkeren van malware-, phishing- en oplichterijwebsites';
web_filter12='Selecteer de door u gekozen DNS-provider';
web_filter13='Om het DNS-adres te wijzigen, gaat u naar Internet WAN > %s DNS %s';
web_filter14="U kunt uw kind veilig gebruik laten maken van het internet door websitefilters in te stellen. Kies uit drie eenvoudig te gebruiken filters om het veiligheidsniveau voor uw netwerk te selecteren.";

show51='Intellistream';
show53='Media-kenmerken';
mf1='Deze pagina\'s stellen u in staat het gedrag van uw router te wijzigen bij bepaald mediaverkeer.';
mf2='Optimaliseer uw internetverbinding automatisch voor verschillende soorten verkeer.';
mf3='Kijk hoe uw router gebruikt wordt.';
mf4='Media-kenmerken > Intellistream';
mf5='Intellistream geeft voorrang aan diensten die intensief gebruik maken van de bandbreedte evenals diensten waarbij de prestaties door vertraging sterk gehinderd worden, zoals het geval is bij gesprekken, video\'s en games.';
mf6='Uw internetverbinding zal kortdurend worden verbroken tijdens het uitvoeren van de test.';
mf7='Snelheidstest:';
mf8='Geregistreerd op %s';
mf9='Ping';
mf10='Downloaden';
mf11='Uploaden';
mf12='Snelheid';
mf13='Ms';
mf14='Mbps';
mf15='Instellingen toepassen';
mf16='Er is een fout opgetreden tijdens de test.';
mf17='Handmatig ingesteld';
mf18='Voer een getal tussen {0,1-%s} in.';
mf19='Intellistream inschakelen:';
mf20='Alleen tussen {0.1-%s}.';
mf22='Gereed.';
mf23='Vanwege uw hoge uploadsnelheid zal Intellistream alleen uw downloadsnelheid voorrang geven.';
mf24='Vanwege uw hoge downloadsnelheid zal Intellistream alleen uw uploadsnelheid voorrang geven.';
mf25="Dankzij uw hoge internetsnelheden hoeft Intellistream niet geactiveerd te worden.";
mf26='Handmatig geregistreerd op %s';
mf27='Bezig...';
mf28='Snelheidstest uitvoeren';
mf29='Ten behoeve van een goede werking, moet Intellistream weten hoe hoog uw verbindingssnelheid is.';
mf30='Intellistream wordt geactiveerd.';
mf31='Handmatig instellen';
mf32='of';
mf33='Intellistream is uitgeschakeld.';
mf43='Internet connectivity is momentarily suspended during the test.';
mf44='De resultaten van de automatische snelheidstest zijn mogelijk niet 100% accuraat omdat ze beïnvloed worden door internetverkeer en andere omstandigheden. Voor het vergelijken van resultaten verwijzen wij u naar een website voor snelheidstesten. U kunt uw internetsnelheden tevens verifiëren bij uw internetprovider. Indien de waargenomen snelheden veel variëren, kunt u de waarden handmatig invoeren.';

show52='Overzicht van het verkeer';
qos_stats1='Media-kenmerken > Overzicht van het verkeer';
qos_stats2='Hieronder ziet u hoe uitgaand en binnenkomend WAN-verkeer wordt geprioriteerd in verschillende categorieën. Hierbij zijn de gegevens van de laatste 10 minuten gebruikt. Deze worden elke 5 seconden bijgewerkt.';
qos_stats3='Verkeerslegenda'; 
qos_stats4='Bytes/sec';
qos_stats5='Dagdeel/uren:minuten';
qos_stats6='Binnenkomende verkeer';
qos_stats7='Uitgaand verkeer';
qos_stats8='Netwerkconnectiviteit en netwerkbeheer';
qos_stats9='Voice, video en games';
qos_stats10='Web en web-video';
qos_stats11='E-mail en VPN';
qos_stats12='Downloads, Torrents, e.a.';
qos_stats13='Om deze functie te activeren, dient u Intellistream ';
qos_stats14='hier';
qos_stats15=' in te schakelen.';

new1='Optimaliseer uw internetverbinding.';
new2='Parental Control';
new3='Webfilters voor veilig internetgebruik';
new4='IPv6-verbinding';
new5='Uw netwerk is nu compatibel met IPv6.';
new6='NIEUW';
new7='Mediabestanden delen met de apparaten binnen uw netwerk.';
new8='NIEUW';

media_feature1='Mediakenmerken';
media_feature2='The bandwidth gap between LAN and WAN may significantly degrade performance of critical network applications, such as VoIP, gaming, and VPN. This QoS function allows users to classify traffic of applications and provides them with differentiated services (Diffserv).';
media_dlna1='Media Server';
media_dlna2='Media Features > Media Server';
media_dlna3='Gebruik een willekeurig DLNA-apparaat binnen uw netwerk voor het beluisteren en/of bekijken van uw muziek, foto\'s en video\'s. Powered by Twonky.';
media_dlna4='DLNA-server';
media_dlna5='Servernaam';
media_dlna6='Gedeelde stations:';
media_dlna7='Gereed';
media_dlna8='Indexeren';
media_dlna9='Beschikbaar';
media_dlna10='video\'s';
media_dlna11='muziek';
media_dlna12='foto\'s';
media_dlna13='Eject';
media_dlna14='Vernieuwen';
media_dlna15='Wijzigingen toepassen';
media_dlna16='Twonky is een productlijn van software voor de digitale woning, ontwikkeld door PacketVideo Corporation (PV).';
media_dlna17='created by PacketVideo Corporation (PV).';
media_dlna18='Untitled';
media_dlna19='Er zijn geen USB-apparaten aangesloten op de router.';
media_dlna20='Niet gedeeld met het netwerk.';
media_dlna21='U hebt meer mediabestanden dan de router kan indexeren, dus we ondersteunen slechts de eerste 12000 bestanden.';
media_dlna22='Read-only (alleen lezen) station kan niet geïndexeerd worden.';

// Note this dictionary is a temporary demonstration
var langDictionary = {

// Copy belkin transation table to here	
'p100t011' : 'dashboard gaan.',
'p220t001' : 'U hebt een PPPTP DSL-verbinding.',
'p220t011' : 'PPTP',
'p220t012' : 'Point-to-Point Tunneling Protocol (PPTP) maakt een particuliere en gecodeerde verbinding tussen u en uw ISP.',
'p222t001' : 'Er is iets mis met uw PPTP-instellingen.',
'p300t001' : 'Zoeken naar firmware-updates.',
'p300t002' : 'We controleren of er bijgewerkte firmware beschikbaar is voor uw nieuwe router.',
'p300t003' : 'Waarom heb ik de laatste firmware nodig?',
'p300t004' : 'Firmware is de software die uw router gebruikt om netwerk- en beveiligingsprotocollen te implementeren. Updates verhogen de betrouwbaarheid en functionaliteit van uw router, dus het is goed om de laatste versies te hebben.',
'gtUpdateNoPower' : 'Wij werken uw router bij met nieuwe firmware. Schakel de stroom niet uit tijdens het bijwerken.',
'p320t003' : 'Dit duurt ongeveer drie minuten. Update-voortgang:',
'gtFirmwareRestart' : 'Nu de firmware geïnstalleerd is, moeten wij uw router opnieuw opstarten om het officieel te maken.',
'p342t003' : 'uit de lijst met draadloze netwerken om dit voor elkaar te krijgen.',
'errorSSIDEmpty' : 'Voer een naam in voor uw draadloze netwerk.',
'errorSSIDTooLong' : 'Uw netwerknaam mag niet langer zijn dan 32 tekens.',
'errorSSIDInvalidChars' : 'Uw netwerknaam mag alleen letters, nummers, interpunctie en spaties bevatten.',
'errorWEPPasswordInvalidChars' : 'Uw netwerkwachtwoord mag alleen nummer en de letters A t/m F bevatten.',
'errorWEPPasswordInvalidLength' : 'Uw netwerkwachtwoord moet tussen 10 en 26 tekens bevatten.',
'errorWEPPasswordEmpty' : 'Voer een wachtwoord in om uw draadloze netwerk te beveiligen.',
'errorWPAPasswordInvalidChars' : 'Uw netwerkwachtwoord mag alleen letters, nummers, interpunctie en spaties bevatten.',
'errorWPAPasswordInvalidLength' : 'Uw netwerkwachtwoord moet tussen 8 en -63 tekens bevatten.',
'errorWPAPasswordEmpty' : 'Voer een wachtwoord in om uw draadloze netwerk te beveiligen.',
'errorGenericCommitError' : 'Er was een fout.  Corrigeer de onderstaande instellingen en probeer het nog een keer.',
'p400t006' : 'Wachtwoord:',
'p450t006' : 'Wachtwoord: ',
'p451t006' : 'Wachtwoord: ',
'p500t007' : 'Registratie voltooien',
'p500t008' : 'Later registreren',
'p700t011' : 'PPTP DSL connection',
'errIpAddressEmpty' : 'Het IP-adres mag niet leeg zijn.',
'errSubnetMaskEmpty' : 'Het subnetmasker mag niet leeg zijn.',
'errSubnetMaskInvalid' : 'Het subnetmasker zier er niet uit als een subnetmasker. Controleer de waarde.',
'errDefaultGatewayEmpty' : 'Het standaard gatewayadres mag niet leeg zijn.',
'errDNSServerEmpty' : 'Het DNS-serveradres mag niet leeg zijn.',
'1781' : 'Vuze Offline Downloading',
'1782' : 'Clearing all offline downloads will erase all of the items in the queue including partial and complete files.',
'1783' : 'Clear All Offline Downloads',
'7102' : 'Belkin Intellistream geeft voorrang aan diensten die intensief gebruik maken van de bandbreedte evenals diensten waarbij de prestaties door vertraging sterk gehinderd worden, zoals het geval is bij gesprekken, video\'s en games.',
'7103' : 'Ten behoeve van een goede werking, moet Intellistream weten hoe hoog uw verbindingssnelheid is.',
'7104' : 'Uw internetverbinding zal kortdurend worden verbroken tijdens het uitvoeren van de test.',
'7105' : 'Uw internetverbinding is kort onderbroken tijdens de test.',
'7106' : 'Snelheidstest uitvoeren',
'7107' : 'Snelheidstest',
'7108' : 'Handmatig instellen',
'7109' : 'Ping',
'7110' : 'Download<br>snelheid',
'7111' : 'Upload<br>snelheid',
'7112' : 'Bezig...',
'7113' : 'Gereed.',
'7114' : 'Er is een fout opgetreden tijdens de test.',
'7115' : 'Voer een getal tussen 0,1-100 in.',
'7116' : 'Voer een getal tussen 0,1-1000 in.',
'7117' : 'Alleen tussen 0,1-100.',
'7118' : 'Vanwege uw hoge uploadsnelheid zal Intellistream alleen uw downloadsnelheid voorrang geven.',
'7119' : 'Vanwege uw hoge downloadsnelheid zal Intellistream alleen uw uploadsnelheid voorrang geven.',
'7120' : 'Dankzij uw hoge internetsnelheden hoeft Intellistream niet geactiveerd te worden.',
'7121' : 'Opgenomen op',
'7122' : 'Handmatig opgenomen op',
'7123' : 'Intellistream inschakelen:',
'7124' : 'Intellistream wordt geactiveerd.',
'7125' : 'Intellistream  is uitgeschakeld.',
'7126' : 'Handmatig ingesteld',
'gtBBSTitle' : 'Welkom bij de routerinstallatie van Belkin',
'gtBack' : 'Terug naar het dashboard',
'Support4t036' : 'Alle beschikbare informatie lezen.',
'Support4t037' : 'Gebruik de volgende URL op een apparaat dat is verbonden met het Internet, en lees hoe u de problemen zelf kunt oplossen: <STRONG>www.belkin.com/support/asdlkj</STRONG>',
'gtReadHelp' : 'Ga naar <STRONG>http://belk.in/NLk29H</STRONG> op een apparaat dat verbinding heeft met het internet.',
'Support5t014' : 'Alle beschikbare informatie lezen.',
'p1200t001' : 'Een beetje meer zekerheid.',
'p1200t002' : 'U kunt uw router verder beschermen door het blokkeren van het dashboard met een wachtwoord.',
'errsetempt' : 'Voer een wachtwoord in.',
'errorpwdEmpty' : 'Voer uw wachtwoord in',
'errorpwdError' : 'Uw wachtwoord is incorrect.',
'60' : 'Duplicaatbeheerder',
'61' : 'Dit apparaat wordt beheerd door',
'62' : 'momenteel!',
'gtDisconnected' : 'Verbinding verbroken',
'dft005' : 'Belkin Hulpcentrum',
'dhToggleBand' : '5 Ghz weergeven',
'419' : 'nog een paar seconden geduld alstublieft.',
'422' : 'De instellingen zijn hersteld',
'423' : 'Het herstelde bestand is niet het juiste type voor dit apparaat. Herstellen is mislukt. Download het juiste bestand en probeer het opnieuw',
'533' : 'Als uw router niet goed meer werkt, kan het nodig zijn om uw router opnieuw op te starten. Er worden geen instellingen verwijderd door het opnieuw opstarten van de router.',
'1200' : 'Wijzigingen worden toegepast. Even geduld.......',
'1386' : 'Het upgradebestand is niet het juiste type of de juiste versie voor dit apparaat. Bijwerken mislukt Download het juiste bestand en probeer het opnieuw',
'2053' : 'Wijzigingen aangebracht',
'2054' : 'Firmware bijgewerkt',
'766' : 'De subnetmaskergetallen die u hebt ingevoerd zijn ongeldig.',
'1356' : 'Ongeldig gateway-IP-adres: het eerste getal moet tussen 1 en 223 liggen.',
'1357' : 'Ongeldig gateway-IP-adres: het tweede en het derde getal moeten tussen 0 en 255 liggen.',
'1358' : 'Ongeldig Gateway IP-adres, het laatste nummer moet tussen 1 en 254 liggen.',
'1360' : 'Ongeldig IP-adres. Het eerste getal moet tussen 1 en 223 liggen.',
'1354' : 'Ongeldig IP-adres: het tweede en het derde getal moeten tussen 0 en 255 liggen.',
'675' : 'Ongeldig IP-adres. Het laatste getal moet tussen 1 en 254 liggen.',
'403' : 'Het IP-adres dat u hebt ingevoerd is ongeldig.',
'760' : 'IP-adres',
'1760' : 'Alles weigeren',
'395' : 'U hebt niet alle getallen ingevoerd of sommige getallen die u hebt ingevoerd zijn ongeldig. Het getal in elk invoervak moet tussen 0 en 255 liggen.',
'1395' : 'Niet geconfigureerd',
'1281' : 'Het WAN-IP kan het subnet van de LAN-zijde niet dekken.',
'641' : 'U hebt niet alle IP-getallen ingevoerd of u hebt een of meer ongeldige getallen ingevoerd. De getallen moeten tussen 0 en 255 liggen',
'errUsernameTooLong' : 'Uw gebruikersnaam mag niet langer zijn dan 64 tekens.',
'errUsernameInvalid' : 'Uw gebruikersnaam mag alleen letters, nummers, interpunctie en spaties bevatten.',
'errPasswordEmpty' : 'Voer uw wachtwoord in',
'errPasswordTooLong' : 'Uw wachtwoord mag niet langer zijn dan 64 tekens.',
'errPasswordInvalid' : 'Uw gebruikersnaam mag alleen letters, nummers, interpunctie en spaties bevatten.',
'1398' : 'OK',
'1399' : 'Annuleren',
'374' : 'Tot',
'375' : 'Uit',
'47' : 'Meer informatie',
'48' : 'Wijzigingen ongedaan maken',
'49' : 'Opslaan',
'96' : 'Inschakelen',
'119' : 'Uitschakelen',
'1298' : 'Sluiten',
'113' : '<< Toevoegen',
'114' : 'Verwijderen',
'128' : 'Vernieuwen',
'318' : 'Uitgeschakeld',
'317' : 'Ingeschakeld',
'2006' : 'Ja',
'2007' : 'Nee',
'3300' : 'NIEUW',
'50' : 'Dynamisch DNS bijwerken',
'98' : 'Met het Dynamic Domain Name System (DDNS) hebt u toegang tot uw thuisnetwerk via een account dat is ingesteld via een DDNS-provider. Stel uw account in via Dyn.com (<a href=\'http://www.dyn.com\' target=\'_blank\'>www.dyn.com</a>) en schakel de DDNS-functie in op uw router. U moet een account aanmaken voordat u deze service gebruikt.',
'100' : 'Gebruikersnaam',
'101' : 'Wachtwoord',
'102' : 'Domeinnaam',
'742' : 'Voer uw gebruikersnaam in',
'757' : 'Voer uw wachtwoord in.',
'822' : 'is ongeldig. Eerst wijzigen!',
'1307' : 'DynDNS',
'1308' : 'DDNS-service',
'1309' : 'DDNS-Status',
'1310' : 'Website',
'1315' : 'DDNS automatisch bijwerken',
'1316' : 'bijwerken elke',
'1317' : 'dagen',
'1369' : 'Geregistreerd',
'1380' : 'Verkeerde configuratie',
'1381' : 'Verbinding maken',
'1382' : 'Verbinding is mislukt',
'1383' : 'Aanmelden is niet gelukt',
'1384' : 'Registratie is mislukt',
'1385' : 'Niet geregistreerd',
'1751' : 'Serve media files to compatible networked media players',
'702' : 'De Domain Name Service (DNS) zet domeinnamen om naar IP-adressen voor het lokaliseren van wereldwijde computerdiensten en apparaten. Als uw internetprovider u een DNS-adres heeft gegeven, voer dit dan hier in.',
'703' : 'Automatisch van provider',
'704' : 'DNS-adres',
'705' : 'Secundair DNS-adres',
'706' : 'DNS = Domain Name Server. Een server op het internet die URL\'s (Universal Resource Locator) als "www.belkin.com" in IP-adressen vertaalt.',
'707' : 'Als u de automatische DNS-functie niet gebruikt, moet u de DNS-instellingen die u van uw provider hebt gekregen invoeren.',
'780' : 'IP-adres opgeven',
'823' : 'Alvorens wijzigingen in de DNS-instellingen aan te brengen, gaat u naar {Websitefilters} en selecteert u de optie "Geen filters".',
'55' : 'Firmware-info',
'56' : 'Er is geen nieuwe bijgewerkte firmware beschikbaar voor deze router!',
'57' : 'Kan geen verbinding maken met de firmware-informatieserver. Controleer de WAN-verbinding.',
'58' : 'Huidige firmware:',
'59' : 'Firmware downloaden:',
'64' : 'De router kan zo worden geconfigureerd dat de toegang tot internet, e-mail of andere netwerkdiensten op bepaalde dagen en tijden beperkt wordt.',
'65' : 'IP',
'66' : 'Poort',
'67' : 'Type',
'68' : 'Blokkeertijd',
'69' : 'Dag',
'70' : 'Tijd',
'71' : 'Inschakelen',
'72' : 'BEIDE',
'73' : 'Altijd',
'74' : 'Blokkeren',
'75' : 'ZO',
'76' : 'MA',
'77' : 'DI',
'78' : 'WO',
'79' : 'DO',
'80' : 'VR',
'81' : 'ZA',
'82' : ':00 N.M.',
'83' : ':00 V.M.',
'84' : 'U hebt geen IP-adres ingevoerd of sommige getallen die u hebt ingevoerd zijn ongeldig. Het getal in elk IP-invoervak moet tussen 1 en 254 liggen.',
'85' : 'De poortnummers die u hebt ingevoerd zijn ongeldig.',
'86' : 'De tweede reeks poorten moet groter zijn dan de eerste.',
'87' : 'De tweede IP-reeks moet groter zijn dan de eerste.',
'88' : 'Het getal in het invoervak voor poorten moet een getal zijn tussen 1 en 65535.',
'1311' : 'Er is geen toepassing geselecteerd',
'1312' : 'Er is een dubbele vermelding gedetecteerd. De regel bestaat al.',
'1355' : 'De IP-reeks mag niet overeenkomen met het LAN-IP-adres van de router',
'90' : 'Hiermee kunt u een apparaat uit uw netwerk opgeven dat buiten de firewall van uw router wordt geplaatst, terwijl andere apparaten achter de firewall blijven.',
'91' : 'De computer in de gedemilitariseerde zone wordt namelijk niet beschermd tegen hackeraanvallen.',
'92' : 'Als u een computer in de DMZ wilt plaatsen, voert u de laatste twee cijfers van het IP-adres ervan in het onderstaande veld in en selecteert u "Inschakelen". Klik op "Opslaan" om de wijziging van kracht te laten worden.',
'93' : 'IP-adres van virtuele DMZ-host',
'97' : 'Statisch IP-adres',
'95' : 'Privaat IP-adres',
'103' : 'Voer het IP-adres in voordat u de DMZ activeert.',
'1232' : 'Het IP-adres van de DMZ-host is ongeldig!',
'1253' : 'IP ligt buiten de toegestane waarden [1-254]!',
'105' : 'Als u deze functie inschakelt, moet u het MAC-adres van elke cliënt die u toegang tot uw netwerk wilt geven, invoeren.',
'106' : 'MAC-adresfiltering inschakelen',
'107' : 'Lijst van te filteren MAC-adressen',
'108' : 'Blokkeren',
'110' : 'MAC-adres',
'112' : 'Dit MAC-adres is al toegevoegd.',
'669' : 'Ongeldig MAC-adres: null-adres.',
'902' : 'Ongeldig MAC-adres',
'903' : 'Dit moet u eerst corrigeren!',
'904' : 'Het juiste MAC-adres moet xx:xx:xx:xx:xx:xx zijn, waarbij x een waarde van 0-9 of A-F is.',
'1062' : 'Let op: Het MAC adres van de computer waarmee u toegang hebt tot de administratieve functies van de router (dus de computer die u nu gebruikt) kunt u niet verwijderen.',
'1602' : 'Door gebruiker bepaald 1',
'117' : 'Uw router is uitgerust met een firewall die uw netwerk beschermt tegen een groot aantal veel voorkomende aanvallen van hackers, waaronder aanvallen met Ping of Death (PoD) en Denial of Service (DoS). U kunt de firewallfunctie desgewenst uitschakelen. Hierdoor ligt uw netwerk weliswaar niet volledig open voor hackeraanvallen, maar toch is het verstandig uw firewall zoveel mogelijk ingeschakeld te laten.',
'118' : 'Firewall activeren / deactiveren',
'121' : '<b>GEAVANCEERDE FUNCTIE! </b> U kunt de router zo configureren dat hij niet reageert op een ICMP-ping (ping naar de WAN-poort). Hierdoor bent u beter beschermd.',
'1076' : 'ICMP-ping blokkeren',
'1827' : 'Toegansinstallingen gasten afdrukken',
'2702' : 'Gasttoegang geeft toegang tot internet via de WAN-poort, maar geeft gasten geen toegang tot het interne netwerk, LAN en WLAN. Deze functie wordt alleen ondersteund op 2,4 GHz.',
'279' : 'Binnenkomende poort',
'1828' : 'Café-stijl (gasten loggen in via een webpagina)',
'1619' : 'WPA/WPA2 PSK',
'1829' : 'WEP',
'1830' : 'Open',
'1831' : 'maximaal 32 tekens, geen spaties',
'1617' : 'Wachtwoord (PSK)',
'842' : 'Authentificatie',
'845' : 'Encryptietechniek',
'854' : 'Pre-shared key (vooraf gedeelde sleutel) (PSK)',
'857' : 'PSK verbergen',
'855' : 'WPA-PSK (zonder server)',
'1335' : 'Netwerknaam (SSID)',
'1825' : '8 - 63 tekens',
'1826' : '10 hexadecimale cijfers',
'1834' : 'Netwerknaam',
'409' : 'Wachtwoord',
'1835' : 'Elke gast die verbinding maakt met uw draadloze netwerk moet dit wachtwoord gebruiken.',
'1715' : 'Beveiligingstype',
'1836' : 'Verbinding maken met het draadloze netwerk:',
'1837' : 'Windows',
'1838' : '1. Klik met de rechter muisknop op het netwerkpictogram in uw Windows-taakbalk en selecteer "Bekijk de beschikbare draadloze netwerken" in het pop-upmenu.',
'1839' : '2.Dubbelklik op het ',
'1840' : ' netwerk.',
'1841' : '3. Er verschijnt een venster dat naar de netwerksleutel vraagt. Voer het wachtwoord in en klik op OK.',
'1842' : 'MAC OS X',
'1843' : '1. Klik op uw menubalk (rechtsboven) op het pictogram van het draadloze netwerk en selecteer het ',
'1844' : ' netwerk.',
'1845' : '2. Er verschijnt een venster dat naar de netwerksleutel vraagt. Voer het wachtwoord in en klik op OK.',
'1832' : 'Café-stijl',
'1833' : 'Open modus',
'1201' : 'SSID kan niet worden ingesteld op NULL.',
'1812' : 'De lengte van het wachtwoord is ongeldig. De maximale wachtwoordlengte is 63 en de minimale wachtwoordlengte is 8.',
'1824' : 'De WEP-sleutel moet uit 10 hexadecimale cijfers bestaan!',
'414' : 'Aanmeldingsfout!',
'1811' : 'Gasttoegang is een functie waarmee gebruikers wel op internet kunnen maar niet zomaar op het thuisnetwerk. Vraag de netwerkbeheerder om het wachtwoord voor gasttoegang en voer het hieronder in.',
'1813' : 'Geslaagd! U kunt nu een webbrowser openen en op internet.',
'909' : 'Het "IP-adres" is het interne IP-adres van de router. Om de geavanceerde installatie-interface te openen, typt u dit adres in de adresbalk van uw browser. U kunt dit adres indien nodig wijzigen. Als u het IP-adres wilt wijzigen, voert u het nieuwe IP-adres in en klikt u op "Opslaan". Het IP-adres dat u kiest, moet een niet-routeerbaar IP-adres zijn. Voorbeelden van een niet-omleidbare IP zijn: 192.168.2.1, 10.0.0.1, 172.16.0.1',
'917' : 'Het subnetmasker hoeft niet te worden veranderd. Het is wel mogelijk om het subnetmasker te wijzigen. Wijzig het subnetmasker alleen als u daar een duidelijke reden voor hebt.',
'929' : 'Doordat de DHCP-serverfunctie automatisch een IP-adres aan elke computer in het netwerk toewijst, is het opzetten van een netwerk bijzonder eenvoudig. De DHCP-server kan zo nodig uitgeschakeld worden. Als u de DHCP-server uitschakelt, moet u voor elke computer in het netwerk met de hand een statisch IP-adres instellen. De IP-pool is de verzameling IP-adressen gereserveerd voor dynamische toewijzing aan de computers in het netwerk. De standaard is 2 - 200 (199 computers). Als u dit aantal wilt veranderen, voert u een nieuw begin- en eind-IP-adres in en klikt u op "Opslaan".',
'935' : 'U kunt een lokale domeinnaam (netwerknaam) voor uw netwerk instellen. U hoeft deze instelling niet te wijzigen tenzij u daar een belangrijke reden voor hebt. U kunt het netwerk elke naam geven die u wilt, zoals "MIJN NETWERK".',
'962' : 'Om de router geschikt te maken voor het gebruik van PPPoE, moet u de gebruikersnaam en het wachtwoord, dat u van uw ISP hebt gekregen, invoeren in de daarvoor bestemde ruimten. Als u geen servicenaam hebt of deze niet kent, laat u het veld ‘Servicenaam’ leeg. Klik op "Opslaan" nadat u uw informatie hebt ingevoerd. Nadat u hebt opgeslagen geeft de statusindicator "Online" aan als uw router correct is geconfigureerd.',
'967' : 'Sommige providers gebruiken het PPTP-protocol om gebruikers met een centrale plek te verbinden. In dat geval moet u een aantal extra instellingen invoeren. De benodigde gegevens zou u van uw provider gekregen moeten hebben. Zodra u de wijzigingen hebt opgeslagen zal de internetstatusindicator groen worden als u alles met succes hebt ingevoerd.',
'971' : 'Selecteer het Telstra Bigpond verbindingstype door te klikken op "Opslaan".',
'982' : 'Verbinding verbreken na X...',
'983' : 'Hier bepaalt u na welke periode zonder activiteit de verbinding tussen de router en uw provider automatisch verbroken wordt. U kunt deze optie gebruiken om geld te besparen als u voor gebruik van het internet per minuut moet betalen.',
'htDDNS' : 'Wat is DDNS?',
'htDNS' : 'Wat is DNS?',
'htDMZ' : 'Wat is de DMZ?',
'htLAN' : 'Welke instellingen kunt u bepalen bij LAN-instellingen?',
'htWANMain' : 'Wat zijn WAN-instellingen?',
'htWANMAC' : 'Wat is het MAC-adres?',
'htWAN_PPPOE' : 'PPPoE-instellingen',
'htWAN_PPTP' : 'PPTP-instellingen',
'htIPv6' : 'Wat is IPv6?',
'htWifiID' : 'Wat is de netwerknaam en wat zijn de kanaalinstellingen?',
'htWifiIDContent' : 'De netwerknaam wordt een SSID (Service Set ID) genoemd.  Alle clients in uw netwerk moeten de SSID kennen om deel te nemen aan het netwerk van de router.',
'htWifiSec' : 'Wat is Wi-Fi-beveiliging?',
'htWifiSecContent' : 'Alle routers van Belkin worden geleverd met Wi-Fi-beveiliging ingeschakeld.  Wi-Fi-beveiliging biedt een beschermingslaag tegen ongeautoriseerde toegang tot uw netwerk.  Als de beveiliging is ingeschakeld, moet de gebruiker een wachtwoord gebruiken om toegang te verkrijgen tot uw netwerk.',
'htWifiWPS' : 'Wat is Wi-Fi Protected Setup (WPS)?',
'htWifiWPSContent' : 'Dit is een optionele methode om de installatie van beveiligde Wi-Fi-netwerken in uw huis of kantoor te vereenvoudigen. Apparaten zonder Wi-Fi Protected Setup (WPS) kunnen nog steeds worden toegevoegd aan uw netwerk door de netwerknaam te selecteren en het netwerkwachtwoord in te voeren.',
'htWifiGuest' : 'Hoe wordt gasttoegang gebruikt?',
'htWifiGuestContent' : 'Indien ingeschakeld, maakt gasttoegang een apart Wi-Fi-netwerk aan dat nog steeds toegang heeft tot het internet, maar niet tot andere apparaten in uw netwerk.',
'htAP' : 'Kan ik mijn router gebruiken als accesspoint?',
'htAPContent' : 'Routers van Belkin kunnen worden ingesteld om alleen te werken als accesspoint, waardoor ze alle routerings- en firewallfuncties ontlopen.  Een router instellen als accesspoint wordt meestal gebruikt om draadloze capaciteit toe te voegen aan een bestaand draadloos netwerk.',
'htQos' : 'Wat is Belkin Intellistream?',
'htDLNA' : 'Belkin Media Server mogelijk gemaakt door Twonky.',
'htPortForward' : 'Wat is port forwarding (doorsturen van poorten)?',
'htPortForwardContent' : 'Computers kunnen dankzij port forwarding verbinding maken met een bepaald programma of een bepaalde dienst in uw lokale netwerk. Als u bijvoorbeeld port forwarding gebruikt om een webserver (poort 80) op uw netwerk te laten draaien. De meeste moderne programma\'s hebben port forwarding niet nodig. Ze kunnen automatisch de poorten instellen die ze nodig hebben.',
'htWanPing' : 'Wat doet de WAN-pingblokkering?',
'htWanPingContent' : 'Dit biedt een verhoogd beveiligingsniveau om te voorkomen dat externe internetgebruikers uw IP-adres kunnen vinden. Pings van buiten uw netwerk worden namelijk niet beantwoord.',
'htRestart' : 'Waarom moet mijn router opnieuw opgestart worden?',
'htRestoreFC' : 'Wat heeft dit voor invloed op het terugzetten van de standaardinstellingen?',
'htSaveSettings' : 'Waarom moet ik mijn instellingen opslaan of hier een back-up van maken?',
'htRestoreSettings' : 'Wat betekent het terugzetten van mijn vorige instellingen?',
'htSystem' : 'Wat zijn de systeeminstellingen?',
'htSystemContent' : 'Vanuit deze pagina kunt u verschillende basisinstellingen voor uw router instellen, waaronder de tijdzone en het beheerderswachtwoord.',
'htSelfHeal' : 'Wat is self-healing?',
'hLANSettings' : 'Met deze pagina kunt u nieuwe verbindingen instellen, DHCP in- en uitschakelen en het IP-adres van de router op uw lokale netwerk instellen.',
'htDHCPClientList' : 'Wat is de DHCP-clientlijst?',
'htDHCPClientListContent' : 'Op deze pagina vindt u het IP-adres, de hostnaam en het MAC-adres van elk apparaat dat op uw netwerk is aangesloten. Als de computer geen specifieke hostnaam heeft, dan is het veld leeg. Klik op "Vernieuwen" om de lijst bij te werken.',
'hWebsiteFilters' : 'Dit werkt als een beveiligingslaag tegen onveilige/ongepaste websites. De webfilters onderzoeken sites door de naam van de website te vergelijken met een lijst van toegestane sites.',
'hWANSettings' : 'Deze netwerkinstellingen refereren aan de verbinding die u heeft met uw internetprovider (ISP).   Selecteer het verbindingstype van uw ISP uit de lijst. ',
'htChannel' : 'Gelijk aan hoe een radio verschillende stations gebruikt, kan uw router op verschillende kanalen uitzenden door te communiceren met de apparaten in uw netwerk. Het gebruik van \'Auto\' is de beste keuze.',
'3430' : 'IPv6 (Internet Protocol versie 6) is een versie van het Internet Protocol (IP) en is bedoeld om IPv4 op te volgen, waarmee bijna alle IP-adressen worden toegewezen. Sommige internetproviders (ISP) hebben bijna geen IP-adressen meer. Met IPv6 kunnen meer apparaten communiceren met het internet door hogere nummers te gebruiken om IP-adressen aan te maken.  Uw ISP weet of u IPv6 moet gebruiken.',
'3431' : 'Type verbinding',
'3432' : 'Auto-Config/DHCPv6 (standaardinstelling)',
'3433' : 'De onderstaande adressen worden door uw provider verstrekt. DHCPv6 biedt u extra functies voor een betere connectiviteit.',
'3434' : 'WAN',
'3435' : 'WAN-adres',
'3436' : 'Gateway',
'3437' : 'LAN',
'3438' : 'Gebruik dit onderdeel voor het configureren van de interne netwerkinstellingen van uw router. Als u het LAN IPv6-adres hier wijzigt, dient u mogelijk ook de netwerkinstellingen van uw computer te wijzigen om uw netwerk opnieuw te kunnen benaderen.',
'3439' : 'LAN Prefix',
'3440' : 'Interface-ID',
'3441' : 'Link-Lokaal',
'3442' : 'DNS',
'3443' : 'De standaardinstellingen van uw IPv6 DNS worden door uw internetprovider verstrekt via WAN-routermeldingen (indien beschikbaar) of via DHCPv6-meldingen.',
'3444' : 'Primaire',
'3445' : 'Secundair',
'3446' : 'PPPoE over IPv6',
'3447' : 'Point-to-Point Protocol over Ethernet (PPPoE) wordt primair gebruikt door DSL-diensten om een DSL-modem met het internet te verbinden.',
'3448' : 'Inloggegevens',
'3450' : 'wachtwoord verbergen',
'3451' : 'Gebruikersnaam',
'3452' : 'Wachtwoord',
'3453' : 'Servicenaam',
'3454' : '6to4-tunnel',
'3455' : 'Maakt de verzending van IPv6-pakketten mogelijk via een IPv4-netwerk, zonder dat hierbij expliciete tunnels geconfigureerd hoeven te worden. Dit type verbinding is voor u van toepassing indien uw internetprovider IPv6 niet ondersteunt.',
'3456' : '6to4 relais router voor bediening op afstand',
'3457' : 'Pass-Through',
'3458' : 'Apparaten die verbonden zijn met uw router, kunnen met elkaar communiceren via originele IPv6-pakketten. IPv6-pakketten op de LAN zullen automatisch worden verstuurd naar alle LAN-interfaces (Ethernet-poorten en draadloze 2,4GHz- en 5GHz-netwerken).',
'3459' : 'Indien pass-through is ingeschakeld, zullen de pakketten ook worden gekopieerd naar de WAN-interface. (Hierbij wordt een directe, onbeveiligde verbinding met het internet gecreëerd.)',
'3460' : 'Neem contact op met uw internetprovider voor informatie over hun ondersteuning van IPv6.',
'3461' : 'Statische IPv6',
'3462' : 'Statische IPv6-adressering wordt niet veel gebruik omdat het beheren ervan ingewikkeld is. Statisch IPv6 dient niet gebruikt te worden voor apparaten die niet met meerdere netwerken verbinding kunnen maken, zoals laptops of mobiele apparaten.',
'3463' : 'Alleen lokale Pass-Through',
'3464' : 'IPv6 WAN Pass-Through is gedeactiveerd. Alle lokale apparaten binnen uw LAN- en Wi-Fi-netwerk kunnen nog steeds met elkaar communiceren, maar de router zal geen IPv6-pakketten naar of afkomstig van het internet versturen, noch rechtstreeks reageren op IPv6-pakketten.',
'3465' : 'Uw internetprovider ondersteunt geen IPv6-connectiviteit. Neem contact op met uw internetprovider voor informatie over ondersteuning van IPv6 of om een verbinding tot stand te brengen.',
'3466' : 'Alleen lokale Pass-Through is automatisch ingesteld voor uw apparaten als deze IPv6-pakketten naar elkaar willen versturen. De andere optie is het gebruik van de "6to4 Tunnel", voor toegang tot het internet via een IPv4-verbinding.',
'3467' : 'Elk vak moet vier hexadecimale tekens bevatten. (U hebt keuze uit 0-9 en a-f.)',
'3468' : 'Voer een niet-multicast-adres in. Multicast-adressen beginnen doorgaans met ff.',
'3469' : 'Prefixlengte moet tussen 1-127 liggen. Prefixlengte is doorgaans 64, 56 of 48.',
'3470' : 'Er is geen IPv4-verbinding.',
'3471' : 'De Ouderlijk toezicht-instellingen hebben voorrang op deze DNS-instellingen.',
'3472' : 'Websitefilter',
'3473' : 'Selecteer PPPoE in Internet WAN > Verbindingsinstellingen voordat u PPPoE over IPv6 selecteert.',
'3474' : 'Internetverbinding verbroken. Controleer het WAN-verbindingstype of neem contact op met uw internetprovider.',
'3475' : 'Standaard DNS-instellingen verstrekt door uw internetserviceprovider.',
'gtTryManu' : 'Als u uw verbindingstype weet, kunt u ',
'gtSetManual' : 'het handmatig instellen ',
'2100' : 'Toegang geweigerd Voer het routerwachtwoord in om tijdelijk toegang te verlenen aan de geblokkeerde pagina of diensten.',
'2101' : 'Openingspagina',
'2102' : 'GAAN',
'354' : 'Op dit tabblad vindt u het IP-adres, de hostnaam en het MAC-adres van elke computer die op uw netwerk is aangesloten. Als de computer geen specifieke hostnaam heeft, is het vak "Hostnaam" leeg. Wanneer u op "Vernieuwen" klikt, wordt de lijst bijgewerkt.',
'355' : 'IP-adres',
'356' : 'Hostnaam',
'357' : 'MAC-adres',
'370' : 'Met deze pagina kunt u nieuwe verbindingen instellen, DHCP in- en uitschakelen en het IP-adres van de router op uw lokale netwerk instellen.',
'371' : 'IP-adres',
'372' : 'Subnetmasker',
'373' : 'DHCP-server',
'378' : 'Doordat de DHCP-serverfunctie automatisch een IP-adres aan elke computer in het netwerk toewijst, is het opzetten van een netwerk bijzonder eenvoudig. Hier hoeft u niets te veranderen.',
'379' : 'Beginadres van IP-pool',
'380' : 'Eindadres van IP-pool',
'381' : 'Leasetijd',
'382' : 'Altijd',
'383' : 'Half uur',
'384' : 'Een uur',
'385' : 'Twee uur',
'386' : 'Halve dag',
'387' : 'Een dag',
'388' : 'Twee dagen',
'389' : 'Een week',
'390' : 'Twee weken',
'391' : 'Geeft aan hoe lang de DHCP-server het IP-adres voor elke computer bewaart.',
'392' : 'Lokale domeinnaam',
'393' : 'Optioneel',
'394' : 'Een functie waarmee u aan uw netwerk een naam kunt toekennen.',
'397' : 'De IP-pool moet hetzelfde subnet hebben als het IP-adres van de gateway.',
'398' : 'Het laatste IP-adres moet groter zijn dan het eerste IP-adres.',
'399' : 'Het LAN-IP-adres kan niet in de DHCP-adrespool liggen.',
'400' : 'Het IP-adres dat u kiest, moet een niet-routeerbaar IP-adres zijn.',
'401' : 'Ongeldig LAN-IP-adres, het laatste getal kan niet 0 of 127 zijn.',
'404' : 'Verander het adres in de statusbalk van uw browser met de hand in het nieuwe LAN-adres.',
'406' : 'Wilt u het IP-adres van het lokale netwerk werkelijk wijzigen?',
'416' : '192.168.y.x (waarin y elke waarde kan zijn tussen 0 en 255, en x elke willekeurige waarde tussen 1 en 254).',
'417' : '10.y.y.x (waarin y elke waarde kan zijn tussen 0 en 255, en x elke willekeurige waarde tussen 1 en 254).',
'418' : '172.z.y.x (waarin z elke waarde kan zijn tussen 16 en 31, en y elke willekeurige waarde tussen 0 en 255 en x elke waarde tussen 1 en 254).',
'713' : 'Ongeldige lokale domeinnaam :',
'1228' : 'Het beginadres van de IP-pool is ongeldig!',
'1229' : 'Het eindadres van de IP-pool is ongeldig!',
'1240' : 'Het LAN-IP-adres is ongeldig!',
'3' : 'Inloggegevens',
'408' : 'Voordat u een of meer instellingen kunt wijzigen, moet u zich met een wachtwoord aanmelden. Als u nog geen eigen wachtwoord hebt ingesteld, laat u dit veld leeg en klikt u op Verzenden.',
'410' : 'Standaard = leeg laten',
'412' : 'Verzenden',
'1371' : 'Wachtwoord ongeldig',
'1372' : 'Bevestig uw wachtwoord en probeer het opnieuw.',
'124' : 'De router houdt een logboek bij van alle activiteiten binnen de router zoals het aan- en afmelden van computers en alle pogingen vanuit het internet om toegang te krijgen tot uw computer.',
'125' : 'Logbestand',
'126' : 'Opslaan',
'127' : 'Wissen',
'1302' : 'Systeemlogbestand',
'1303' : 'Firewall-logbestand',
'8' : 'LAN-instellingen',
'9' : 'Lokale netwerkinstellingen',
'10' : 'Verbonden apparaten',
'2500' : 'Statische routing',
'11' : 'Internet-WAN',
'335' : 'Type verbinding',
'690' : 'Dynamisch',
'692' : 'Statisch',
'694' : 'PPPoE',
'696' : 'PPTP',
'698' : 'Telstra Bigpond/OptusNet Cable',
'42' : 'IPV6',
'43' : 'IPv6-verbinding',
'13' : 'DNS',
'14' : 'MAC-adres',
'16' : 'Wi-Fi',
'17' : 'Netwerknaam',
'18' : 'Beveiliging',
'803' : '128bit WEP',
'804' : '64bit WEP',
'1296' : 'WPA/WPA2-Personal (PSK)',
'1297' : 'WPA/WPA2-Enterprise (RADIUS)',
'805' : 'WPA (met RADIUS-server)',
'1319' : 'Wi-Fi Protected Setup',
'777' : 'Als accesspoint gebruiken',
'833' : 'MAC-adressen beheren',
'1613' : 'Gasttoegang',
'1850' : 'Ouderlijk toezicht',
'1851' : 'Websitefilter',
'1710' : 'Toegangscontrole',
'20' : 'Media',
'7151' : 'Overzicht van het verkeer',
'7000' : 'Media Server',
'1780' : 'Torrent Mate',
'1790' : 'Optionele software',
'23' : 'Firewall',
'24' : 'Port forwarding',
'25' : 'IP-filters client',
'26' : 'MAC-adressenfilter',
'27' : 'DMZ',
'41' : 'DDNS',
'28' : 'Blokkering WAN-ping',
'29' : 'Beveiligingslog',
'30' : 'Hulpprogramma’s',
'32' : 'Router opnieuw opstarten',
'34' : 'Fabrieksinstellingen herstellen',
'35' : 'Instellingen opslaan/back-up van instellingen maken',
'36' : 'Vorige instellingen herstellen',
'37' : 'Firmware bijwerken',
'38' : 'Systeeminstellingen',
'39' : 'Self-Healing',
'1900' : 'Registratie',
'132' : 'Het bereik van de binnenkomende poort is niet juist.',
'133' : 'Het bereik van de particuliere poort is niet juist.',
'134' : 'Deze functie biedt u de mogelijkheid externe (internet)verbindingen voor diensten zoals een webserver (poort 80), FTP-server (poort 21) en andere toepassingen via uw router door te sturen naar uw interne netwerk.',
'276' : 'Invoer wissen',
'277' : 'Toevoegen',
'278' : 'Beschrijving',
'280' : 'Type',
'281' : 'Persoonlijk IP-adres',
'282' : 'Private poort',
'376' : 'alle',
'411' : 'Wissen',
'648' : 'Ongeldig teken',
'672' : 'Ongeldige waarde Moet tussen 1 en 65535 liggen.',
'905' : 'Het maximum is bereikt.\nVerwijder een aantal gegevens en probeer het opnieuw.',
'906' : 'Wilt u de volgende vermelding wissen?',
'907' : 'Wilt u alle ingevoerde gegevens wissen?',
'1241' : 'Het WAN-IP-adres in ongeldig!',
'1250' : 'De poort is ongeldig!',
'1362' : 'Beschrijving is leeg',
'1601' : 'Auto',
'2055' : 'Overlappend bereik binnenkomende poorten.',
'2056' : 'Overlappend bereik privépoorten',
'3310' : 'Intellistream',
'3311' : 'Optimaliseer uw internetverbinding',
'3312' : 'Media Server',
'3313' : 'Mediabestanden delen met de apparaten binnen uw netwerk.',
'3314' : 'Ouderlijk toezicht',
'3315' : 'DNS-beveiligingsfilters voor internetveiligheid',
'3316' : 'IPv6-verbinding',
'3317' : 'Uw netwerk is nu compatibel met IPv6',
'1852' : 'Dit werkt als een beveiligingslaag tegen onveilige/ongepaste websites. De webfilters onderzoeken sites door de naam van de website te vergelijken met een lijst van toegestane sites.',
'1854' : 'Filtermogelijkheden',
'1856' : 'Geen filter',
'1858' : 'Blokkeren van kwaadaardige sites',
'1859' : 'Blokkeren van malware-, phishing- en oplichterijwebsites.',
'1860' : 'Blokkeren van kwaadaardige sites en sites voor volwassenen',
'1861' : 'Blokkeren van malware- phishing-, oplichterijwebsites evenals sites met expliciet seksueel materiaal.',
'1862' : 'Blokkeren van kwaadaardige, pornografische en andere gezinsonvriendelijke websites',
'1863' : 'Blokkeren van malware-, phishing- en oplichterijwebistes, evenals sites met ongewenste inhoud zoals expliciet seksueel materiaal, abortus, alcohol, misdaad, sekten, drugs, gokken, haat, zelfmoord, tabak of geweld.',
'1864' : 'Om het DNS-adres te wijzigen, gaat u naar Internet WAN >{DNS}',
'7152' : 'Hieronder ziet u hoe uitgaand en binnenkomend WAN-verkeer wordt geprioriteerd in verschillende categorieën. Hierbij zijn de gegevens van de laatste 10 minuten gebruikt. Deze worden elke 5 seconden bijgewerkt.',
'7154' : 'Verkeerslegenda',
'7155' : 'Binnenkomende verkeer',
'7156' : 'Uitgaand verkeer',
'7157' : 'Om deze functie te activeren, dient u Intellistream',
'7158' : 'hier',
'7159' : 'in te schakelen.',
'7160' : 'Netwerkconnectiviteit en netwerkbeheer',
'7161' : 'Stemgeluid, videogesprekken en games',
'7162' : 'Web en web-video',
'7163' : 'E-mail en VPN',
'7164' : 'Downloads, Torrents, e.a.',
'7170' : 'Bytes/sec.',
'7174' : 'Dagdeel/uren:minuten',
'326' : 'Lokaal netwerk',
'327' : 'LAN/WLAN MAC',
'332' : 'DHCP-server',
'333' : 'Internetinstellingen',
'334' : 'Mac-adres van WAN',
'337' : 'WAN IP',
'338' : 'Standaard-gateway',
'339' : 'DNS-adres',
'gtGuestName' : 'Gast-SSID',
'gtGuestKey' : 'Gastsleutel',
'347' : 'U moet zich aanmelden voordat u wijzigingen kunt aanbrengen.',
'2022' : 'Alleen modem',
'2031' : 'Verbinding maken',
'2032' : 'Verbinding verbreken',
'2033' : 'Ruismarge',
'2034' : 'Downstream',
'2035' : 'Upstream',
'2036' : 'Signaaldemping (dB)',
'2037' : 'Uitgangsvermogen (dBm)',
'2038' : 'Gegevenssnelheid (kbps)',
'tDashboard' : 'Welkom bij het dashboard van uw Belkin router!',
'rtFeature' : 'Productkenmerken',
'rtLink' : 'Routerlinks',
'p1310t001' : 'Verbindingsgegevens',
'p1310t002' : 'Een verbinding opnieuw testen',
'p1310t003' : 'Laatste controle',
'p1310t004' : 'Downloadsnelheid',
'p1310t005' : 'Uploadsnelheid',
'p1000t001' : 'Aangesloten apparaten',
'p1000t002' : 'Bekijk alles',
'2501' : 'Voer de volgende configuratieparameters in',
'2502' : 'Netwerkadres',
'2503' : 'Subnetmasker',
'2504' : 'Gateway',
'396' : 'Het subnetmasker dat u hebt ingevoerd is ongeldig.',
'1231' : 'Gateway is ongeldig!',
'1361' : 'Ongeldig IP-adres. Het eerste getal moet tussen 1 en 254 liggen.',
'1800' : 'Het IP-adres en subnetmasker stemmen niet overeen.',
'Support1t011' : 'Alle beschikbare informatie lezen.',
'Support2t011' : 'Alle beschikbare informatie lezen.',
'Support2t012' : 'Gebruik de volgende URL op een apparaat dat is verbonden met het Internet, en lees hoe u de problemen zelf kunt oplossen: <STRONG>www.belkin.com/support/asdlkj</STRONG>',
'Support3t011' : 'Alle beschikbare informatie lezen.',
'Support3t012' : 'Gebruik de volgende URL op een apparaat dat is verbonden met het Internet, en lees hoe u de problemen zelf kunt oplossen: <STRONG>www.belkin.com/support/asdlkj</STRONG>',
'Support6t036' : 'Alle beschikbare informatie lezen.',
'425' : 'Dit zet de router terug naar zijn originele instellingen. Wij raden u aan dat u <a href="ut_save.html">uw instellingen opslaat of hier een back-up van maakt</a> voordat u de originele instellingen terugzet. Door een back-up te maken van uw huidige routerconfiguratie kunt u deze in het geval van verlies of wijziging herstellen.',
'426' : 'WAARSCHUWING: Al uw instellingen gaan verloren!\nWeet u zeker dat u dit wilt doen?',
'427' : 'Het herstellen van de standaardinstellingen kan tot $s seconden duren. Schakel de router gedurende dit proces niet uit.',
'428' : 'Standaardinstellingen worden niet hersteld. Er gaan geen instellingen verloren!',
'429' : 'Fabrieksinstellingen herstellen',
'301' : 'Uw router wordt wekelijks opnieuw opgestart voor een probleemloos netwerk.',
'302' : 'Router automatisch initialiseren',
'303' : 'Dagen instellen',
'304' : 'Tijd instellen',
'527' : 'U kunt de routerinstellingen instellen op elke configuratie die u al hebt opgeslagen.',
'528' : 'Herstellen',
'529' : 'Typ de naam van het bestand dat de backup-instellingen bevat.',
'530' : 'Wilt u doorgaan en de instellingen herstellen?',
'531' : 'Nadat de instellingen zijn teruggezet, reageert het apparaat een minuut lang mogelijk niet op opdrachten.\n\nDit is normaal. U mag het apparaat in de tussentijd niet uitschakelen.',
'451' : 'Door een back-up te maken van uw huidige routerconfiguratie kunt u deze in het geval van verlies of wijziging herstellen. Wij raden u aan dat u uw instellingen opslaat voordat u firmware-updates uitvoert.',
'539' : 'Opslaan',
'130' : 'U hebt niet alle IP-adressen ingevoerd of sommige getallen die u hebt ingevoerd zijn ongeldig. Het getal in het invoervak voor IP-adressen moet een getal zijn tussen 1 en 254.',
'541' : 'Beheerderswachtwoord:',
'542' : 'De router wordt geleverd ZONDER vooraf geprogrammeerd wachtwoord. Als u in verband met de beveiliging een wachtwoord wilt gebruiken, kunt u dat hier invoeren.',
'543' : 'Typ uw huidige wachtwoord in',
'544' : 'Typ uw nieuwe wachtwoord in',
'545' : 'Bevestig uw nieuwe wachtwoord',
'546' : 'Inlog-timeout',
'547' : '(1-99 minuten)',
'548' : 'Tijd en tijdzone:',
'549' : 'januari',
'550' : 'Stel uw tijdzone in. Als u in een land woont dat de zomer- en wintertijd volgt, kruist u dit vakje aan.',
'551' : 'Tijdzone',
'606' : 'Zomer-/wintertijd',
'607' : 'Zomer-/wintertijd automatisch instellen',
'608' : 'Extern beheer:',
'609' : 'GEAVANCEERDE FUNCTIE!',
'610' : 'De functie \'Remote Management\' (Extern beheer) biedt u de mogelijkheid vanaf elke internetlocatie ter wereld de instellingen van uw router te wijzigen. Voordat u deze functie inschakelt,',
'611' : 'MOET U ERVOOR ZORGEN DAT U HET SYSTEEMBEHEERDERWACHTWOORD HEEFT INGESTELD.',
'642' : 'Het inschakelen van extern beheer vergroot het veiligheidsrisico. Schakel de instelling alleen in indien nodig en voor korte tijd, schakel deze uit wanneer u er geen gebruik van maakt. Wij adviseren u een wachtwoord in te stellen.',
'612' : 'U kunt de router vanaf elk IP-adres op afstand beheren.',
'613' : 'U kunt de router alleen vanaf dit IP-adres op afstand beheren &nbsp;&nbsp;&nbsp;',
'614' : 'Extern beheer inschakelen / uitschakelen',
'615' : 'Poort Toewijzen is gebruikt in Virtuele Server.',
'616' : 'IP Toewijzen veroorzaakt problemen met het huidige WAN IP-adres.',
'617' : 'UPNP inschakelen:',
'618' : 'Hiermee kunt u de UPNP-functie van de router in- of uitschakelen. Als u toepassingen gebruikt die UPnP ondersteunen, zal het inschakelen van UPnP toestaan dat deze toepassingen automatisch de router configureren.',
'619' : 'UPNP inschakelen/uitschakelen',
'620' : 'Automatisch bijwerken van firmware inschakelen:',
'621' : 'Hiermee kunt u automatisch controleren of er firmware-updates voor uw router beschikbaar zijn.',
'622' : 'Automatisch bijwerken van firmware inschakelen/uitschakelen',
'623' : 'Huidig wachtwoord is ongeldig',
'624' : 'De nieuwe wachtwoorden die u hebt ingevoerd komen niet overeen. Probeer het later nog eens.',
'626' : 'De lengte van het wachtwoord is ongeldig. Het wachtwoord moet minimaal 3 tekens bevatten en mag maximaal 12 tekens lang zijn.',
'628' : 'Wij raden u met nadruk aan een beheerderswachtwoord in te stellen.',
'629' : 'Primaire NTP-server',
'630' : 'Secundaire NTP-server',
'640' : 'Poort voor externe toegang',
'738' : 'De ingevoerde waarde van de maximale inactieve tijd is ongeldig. Het getal moet een geheel getal tussen 0 en 100 zijn.',
'796' : 'Doordat u de turbomodus inschakelt, kan uw router of accesspoint de functie "frame bursting" gebruiken om te zorgen voor de snelst mogelijke gegevensoverdracht tussen de router of het accesspoint en 802.11g-clients. De turbomodus werkt met 802.11g-clients die deze modus ondersteunen. Belkin 802.11g-clients met het nieuwste stuurprogramma ondersteunen de turbomodus. Clients die de turbomodus niet ondersteunen, werken normaal als de turbomodus wordt ingeschakeld.',
'1282' : 'februari',
'1283' : 'maart',
'1284' : 'april',
'1285' : 'mei',
'1286' : 'juni',
'1287' : 'juli',
'1288' : 'augustus',
'1289' : 'september',
'1290' : 'oktober',
'1291' : 'november',
'1292' : 'december',
'1373' : 'Australië',
'1374' : 'Nieuw-Zeeland',
'1375' : 'Noord-Amerika',
'1376' : 'Europa',
'1377' : 'Azië/Pacific',
'2300' : '(GMT-12:00) Enewetak, Kwajalein',
'2301' : '(GMT-11:00) Midway-eilanden, Samoa',
'2302' : '(GMT-10:00) Hawaï',
'2303' : '(GMT-09:00) Alaska',
'2304' : '(GMT-08:00) Pacific Time (VS en Canada); Tijuana',
'2305' : '(GMT-07:00) Arizona',
'2306' : '(GMT-07:00) Mountain Time (US en Canada)',
'2307' : '(GMT-06:00) Central Time (US en Canada)',
'2308' : '(GMT-06:00) Mexico City',
'2309' : '(GMT-06:00) Tegucigalpa',
'2310' : '(GMT-06:00) Saskatchewan',
'2311' : '(GMT-05:00) Bogota, Lima, Quito',
'2312' : '(GMT-05:00) Eastern Time (US en Canada)',
'2313' : '(GMT-05:00) Indiana (East)',
'2314' : '(GMT-04:00) Atlantic Time (Canada)',
'2315' : '(GMT-04:00) Caracas, La Paz',
'2316' : '(GMT-04:00) Santiago',
'2317' : '(GMT-03:00) Newfoundland',
'2318' : '(GMT-03:00) Brazilië',
'2319' : '(GMT-03:00) Buenos Aires, Georgetown',
'2320' : '(GMT-02:00) Midden-Atlantische tijd',
'2321' : '(GMT-01:00) Azoren, Kaapverdische Eilanden',
'2322' : '(GMT) Casablanca, Monrovia',
'2323' : '(GMT) Greenwich Mean Time: Lissabon, Londen, Edinburgh',
'2324' : '(GMT) Greenwich Mean Time: Dublin',
'2325' : '(GMT+01:00) Amsterdam, Berlijn, Bern, Rome',
'2326' : '(GMT+01:00) Stockholm, Wenen, Belgrado',
'2327' : '(GMT+01:00) Bratislava, Boedapest, Ljubljana',
'2328' : '(GMT+01:00) Praag, Brussel, Kopenhagen, Madrid',
'2329' : '(GMT+01:00) Parijs, Sarajevo, Skopje',
'2330' : '(GMT+01:00) Warschau, Zagreb',
'2331' : '(GMT+02:00) Athene, Istanboel, Minsk, Vilnius, Sofia',
'2332' : '(GMT+02:00) Boekarest',
'2333' : '(GMT+02:00) Caïro',
'2334' : '(GMT+02:00) Harare, Pretoria',
'2335' : '(GMT+02:00) Helsinki, Riga, Tallinn',
'2336' : '(GMT+02:00) Israël',
'2337' : '(GMT+03:00) Bagdad, Kuweit, Nairobi, Riyaad',
'2338' : '(GMT+03:00) Moskou, St. Petersburg, Volgograd, Kazan',
'2339' : '(GMT+03:00) Teheran',
'2340' : '(GMT+04:00) Abu Dhabi, Muscat, Tiflis',
'2341' : '(GMT+04:00) Kaboel',
'2342' : '(GMT+05:00) Islamabad, Karachi, Ekaterinenburg',
'2343' : '(GMT+05:30) Delhi',
'2344' : '(GMT+06:00) Almaty, Dacca',
'2345' : '(GMT+07:00) Bangkok, Jakarta, Hanoi',
'2346' : '(GMT+08:00) Beijing, Chongqing, Urumqi',
'2347' : '(GMT+08:00) Hong Kong, Perth, Singapore, Taipei',
'2348' : '(GMT+09:00) Tokio, Osaka, Sapporo',
'2349' : '(GMT+09:00) Seoul',
'2350' : '(GMT+09:30) Adelaide, Darwin',
'2351' : '(GMT+10:00) Brisbane',
'2352' : '(GMT+10:00) Canberra, Melbourne, Sydney',
'2353' : '(GMT+10:00) Hobart',
'2354' : '(GMT+10:00) Guam, Port Moresby',
'2355' : '(GMT+11:00) Magadan, Salomonseilanden, Nieuw Caledonië',
'2356' : '(GMT+12:00) Wellington, Auckland',
'2357' : '(GMT+12:00) Fiji',
'2358' : '(GMT+13:00) Nuku\'alofa.',
'2370' : 'Zo',
'2371' : 'Ma',
'2372' : 'Di',
'2373' : 'Wo',
'2374' : 'Do',
'2375' : 'Vr',
'2376' : 'Za',
'2401' : 'Eco-modus',
'2402' : 'Dim frontpaneel LED\'s',
'2403' : 'Zender uitschakelen van',
'2404' : 'M.u.v.',
'2405' : 'Met deze functie kunt u de lampjes op de voorzijde van de router dimmen. Zo bespaart u energie. U kunt ook het draadloze gedeelte uitschakelen op bepaalde tijden.',
'2406' : 'De starttijd mag niet later dan de eindtijd zijn!',
'322' : 'Firmwareversie',
'431' : 'Belkin brengt regelmatig nieuwe versies van het besturingsprogramma van uw router uit. Deze updates bevatten verbeteringen en oplossingen voor uw router.',
'432' : '<b>LET OP:</b> Maak <a href="ut_save.html">een back-up van uw huidige instellingen</a> voordat u bijwerkt naar een nieuwe firmwareversie.',
'433' : 'Klik hier',
'434' : 'om te gaan naar het tabblad Huidige instellingen opslaan/back-up van huidige instellingen maken.',
'435' : 'Controleren of er een nieuwe firmwareversie beschikbaar is',
'436' : 'Firmware controleren',
'437' : 'Firmware bijwerken',
'438' : 'Update',
'439' : 'Geef de locatie op waar de bijgewerkte bestanden moeten worden opgeslagen. Typ het bestandspad en de bestandsnaam in of klik op "Bladeren" om naar de bestandslocatie te gaan.',
'440' : 'Weet u zeker dat u wilt doorgaan met bijwerken?',
'441' : 'Het is mogelijk dat de router aan het einde van de bijwerkprocedure een minuut lang niet op opdrachten reageert. Dit is een normaal verschijnsel. U mag de router hierbij niet uitschakelen of opnieuw starten.',
'1198' : 'Firmware wordt bijgewerkt.',
'534' : 'Router opnieuw opstarten',
'535' : 'Weet u zeker dat de de router opnieuw wilt starten? Het opnieuw opstarten van de router heeft geen invloed op uw configuratie.',
'536' : 'De router heeft ongeveer $s seconden nodig om opnieuw op te starten. Schakel de router niet uit voordat het resetten voltooid is.',
'7001' : 'Gebruik een willekeurig DLNA-apparaat binnen uw netwerk voor het beluisteren en/of bekijken van uw muziek, foto\'s en video\'s. Mogelijk gemaakt door Twonky.',
'7002' : 'DLNA-server',
'7003' : 'Servernaam',
'7004' : 'Gedeelde stations',
'7005' : 'Gereed',
'7006' : 'Indexeren...',
'7007' : 'Beschikbaar:',
'7008' : 'video\'s',
'7009' : 'muziek',
'7010' : 'foto\'s',
'7011' : 'Niet gedeeld met het netwerk.',
'7012' : 'Er zijn geen USB-apparaten aangesloten op de router.',
'7016' : 'Index vernieuwen',
'7017' : 'Voer een beschrijvende naam in voor de mediaserver.',
'7018' : 'Niet toegestaan teken',
'7019' : 'U hebt meer media dan de router kan indexeren, dus we ondersteunen de eerste',
'7020' : 'resultaten.',
'7021' : 'Twonky is een productlijn van software voor de digitale woning, ontwikkeld door PacketVideo Corporation (PV).',
'7022' : 'Read-only (alleen lezen) station kan niet geïndexeerd worden',
'7023' : 'MB',
'7024' : 'GB',
'7025' : 'TB',
'7026' : 'video',
'7027' : 'nummer',
'7028' : 'foto',
'770' : 'Gebruik deze optie uitsluitend voor Bigpond Cable- en OptusNet Cable-verbindingen. ',
'771' : 'BELANGRIJK:',
'775' : '3)\tSluit de voedingskabel aan op de Belkin-router.',
'776' : 'Om te bevestigen dat u verbinding hebt met het internet, kunt u een internetbrowser zoals Internet Explorer, Firefox en Safari openen en controleren of u webpagina\'s kunt bekijken.',
'731' : 'Gebruikersnaam',
'489' : 'Wachtwoord',
'732' : 'Wachtwoord opnieuw typen',
'756' : 'Voer uw wachtwoord opnieuw in.',
'1379' : 'U hebt niet alle IP-nummers ingevoerd of sommige nummers die u hebt ingevoerd zijn ongeldig. Het IP-adres moet overeenkomen met x.y.y.x (waarbij y elke waarde tussen 0 en 255 kan zijn en x elke waarde tussen 1 en 254).',
'709' : 'Typ om uw dynamische IP-instellingen in te voeren hieronder uw informatie en klik op "Opslaan".',
'710' : 'Hostnaam',
'711' : 'Hostnaam = Een naam die sommige ISP\'s eisen om verbinding toe te staan met hun systeem.',
'712' : 'WAN MAC-adres wijzigen',
'330' : 'IP-adres',
'331' : 'Subnetmasker',
'659' : 'Ongeldige MTU-waarde. Dit moet tussen 500 en 1500 liggen.',
'730' : 'Typ om uw PPPoE-instellingen in te voeren hieronder uw informatie en klik op "Opslaan".',
'733' : 'Servicenaam (optioneel)',
'734' : 'MTU (500-1500)',
'735' : 'Verander niets aan de MTU-instelling tenzij uw provider u een specifieke, afwijkende waarde heeft gegeven.',
'736' : 'Verbinding verbreken na',
'737' : 'minuten zonder activiteit.',
'741' : 'Ongeldige MTU-waarde',
'2005' : 'IP toegekend door provider',
'2021' : 'Klik hier om uw DNS-instellingen in te voeren',
'2023' : 'Dubbele aanhalingstekens zijn niet toegestaan.',
'2024' : 'De gebruikersnaam bevat niet-toegelaten tekens.',
'2025' : 'Een  is niet toegestaan.',
'2030' : 'U hebt de standaardgateway niet correct ingevoerd of sommige getallen die u hebt ingevoerd zijn ongeldig. De getallen moeten tussen 0 en 255 liggen',
'2052' : 'Het wachtwoord bevat niet-toegelaten tekens (<, > of &).',
'691' : 'Een dynamische verbinding is het meest gebruikelijk. Als u een kabelmodem gebruikt, hebt u waarschijnlijk een dynamische verbinding. Gebruik dit type verbinding als u een kabelmodem hebt of als u niet zeker weet welk type verbinding u hebt.',
'723' : 'Inclusief providers die een hostnaam eisen en providers die de verbinding aan een bepaald MAC-adres koppelen.',
'693' : 'Het type verbinding dat met statische IP-adressen werkt is minder gebruikelijk dan andere typen verbindingen. Gebruik deze keuzemogelijkheid uitsluitend als uw provider u een IP-adres heeft toegekend dat nooit verandert.',
'724' : 'De router ondersteunt verbindingen met providers die een statisch IP-adres toewijzen.',
'695' : 'Als u een DSL-modem gebruikt en/of als uw provider u een gebruikersnaam en een wachtwoord heeft toegekend, hebt u waarschijnlijk een PPPoE-verbinding. Gebruik dit type verbinding.',
'725' : 'De router ondersteunt een dynamisch verbindingstype dat een PPPoE-aanmelding eist voor authentificatie.',
'697' : 'Sommige providers gebruiken het PPTP-protocol om gebruikers met een centrale plek te verbinden. In dat geval moet u een aantal extra instellingen invoeren. De benodigde gegevens zou u van uw provider gekregen moeten hebben. Zodra u de wijzigingen hebt opgeslagen zal de internetstatusindicator groen worden als u alles met succes hebt ingevoerd.',
'726' : 'Uitsluitend bedoeld voor gebruik bij providers die gebruik van de PPTP-verbindingsmethode vereisen.',
'699' : 'Gebruik deze optie uitsluitend voor Bigpond Cable- en OptusNet Cable-verbindingen.',
'728' : 'UITSLUITEND voor gebruikers in Australië. De router ondersteunt verbindingen met Telstra BigPond.',
'2019' : 'Typ om uw modem-instellingen in te voeren hieronder uw informatie en klik op "Opslaan".',
'tBackToConnectionType' : 'Terug naar Verbindingstype',
'759' : 'Typ om uw statische IP-instellingen in te voeren hieronder uw informatie en klik op "Opslaan".',
'761' : 'Subnetmasker',
'762' : 'Gateway-adres van uw ISP',
'754' : 'Klik hier om uw DNS-instellingen in te voeren',
'715' : 'Elk apparaat in uw netwerk heeft een uniek hardware-adres (MAC-adres). Dit adres wordt door andere apparaten op het netwerk en het internet gebruikt om het te identificeren. Bepaalde providers vereisen dat u het MAC-adres van uw netwerkkaart of oudere router invoert in de routerinstellingen. Als u het niet zeker weet, voert u het MAC-adres in van de computer die oorspronkelijk op het modem was aangesloten voor installatie van de router. Als u het niet zeker weet, voert u het MAC-adres in van de computer die oorspronkelijk op het modem was aangesloten voordat u de router installeert.',
'716' : 'WAN MAC-adres',
'717' : 'MAC-adres van de computer klonen',
'718' : 'Klonen',
'721' : 'Op het tabblad "Internet/WAN" stelt u de router in voor het maken van een verbinding met uw provider. De router kan verbinding maken met vrijwel elke provider mits u de instellingen van de router correct hebt geconfigureerd voor het type verbinding dat uw provider gebruikt. Om de router te configureren om verbinding met een bepaalde provider te maken, klikt u op "Type verbinding" op het tabblad "Internet/WAN" links op het scherm.',
'722' : 'Ondersteunde typen verbindingen:',
'htWANMainContent' : 'Selecteer verbindingstype:',
'700' : 'Volgende',
'744' : 'PPTP-account',
'745' : 'Wachtwoord',
'746' : 'Wachtwoord opnieuw typen',
'747' : 'Hostnaam',
'1770' : 'IP toegekend door provider',
'1771' : 'Ja',
'1772' : 'Nee',
'1773' : 'Service-adres',
'750' : 'Subnetmasker',
'778' : 'De router kan zo worden geconfigureerd dat deze uitsluitend als draadloos accesspoint werkt, waarbij alle routerings- en firewallfuncties worden omzeild. Als u dat wilt doen, selecteert u "Inschakelen" en vult u het IP-adres in dat u aan het accesspoint wilt toekennen.',
'779' : 'Toegangspunt-modus:',
'781' : 'Subnetmasker opgeven',
'801' : 'Beveiligde modus',
'806' : 'Hier kunt u de beveiligings- en coderingsinstellingen voor draadloze communicatie bepalen. Voor optimale draadloze veiligheid dient beveiliging geactiveerd te worden. WPA (Wi-Fi Protected Access) biedt dynamische sleutelwijzigingen en is de beste beveiligingsoptie. In draadloze omgevingen waar niet alle apparaten WPA ondersteunen, dient u gebruik te maken van WEP (Wired Equivalent Privacy).',
'377' : 'Auto',
'487' : 'AAN',
'488' : 'UIT',
'787' : 'Als u de instellingen van de draadloze router wilt wijzigen, kunt u dat hier doen. Klik op "Opslaan" om de instellingen op te slaan.',
'788' : 'Draadloos kanaal',
'789' : 'SSID',
'790' : 'Draadloze modus',
'794' : 'SSID uitzenden',
'797' : 'Beveiligde modus',
'1300' : 'Uitbreidingskanaal',
'1301' : 'Bandbreedte',
'1304' : '802.11e/WMM QoS',
'852' : 'De lengte van de pre-shared key moet 8 tot 63 of 64 hexadecimale tekens zijn',
'856' : 'Wi-Fi Protected Access met een vooraf gedeelde sleutel (Pre-shared Key): de sleutel is een wachtwoord in de vorm van een woord, zin of serie letters en cijfers. De sleutel moet uit <b>8</b> tot <b>63</b> tekens bestaan en mag ook spaties en symbolen bevatten  of alleen <b>64</b> hexadecimale (0-F) tekens. Elke client die verbinding maakt met het netwerk moet dezelfde sleutel (Pre-shared Key) gebruiken.',
'115' : 'U hebt niet alle hexadecimale tekens ingevoerd ofwel een of meer hexadecimale tekens die u hebt ingevoerd zijn ongeldig. Een hexadecimaal teken kan een getal zijn van 0 t/m 9 of een letter van A t/m F.',
'308' : '<b>SPI</b> Stateful Packet Inspection. SPI is een vorm van bedrijfsmatige internetbeveiliging waarover u als gebruiker van een HomeConnect gateway voor privénetwerken beschikt. Met behulp van SPI fungeert de gateway als een firewall die uw netwerk tegen computerhackers beschermt.',
'808' : 'OPMERKING:',
'809' : 'Hexadecimale paren kunnen automatisch worden gegenereerd via een wachtwoord. Druk op de knop aan de rechterkant en voer het wachtwoord in.',
'810' : 'Meervoudig wachtwoord',
'811' : 'Genereren',
'812' : 'Voer een wachtwoord in',
'814' : 'Sleutel',
'818' : '(hexadecimale tekenparen)',
'296' : '<b>IP-adres</b>IP is de afkorting van Internet Protocol. Een IP-adres bestaat uit een combinatie van vier door punten gescheiden getallen die één unieke internet computerhost aanduiden. Voorbeeld: 192.34.45.8.',
'298' : '<b>ISP</b> Internet Service Provider. Een internetserviceprovider of kortweg provider is een onderneming die verbinding met het internet verzorgt voor privépersonen, andere ondernemingen en organisaties.',
'807' : '(13 hexadecimale tekenparen)',
'813' : 'De sleutel is niet volledig.',
'821' : 'is niet volledig',
'1190' : '<br>U kunt zich aanmelden voor een Dynamische DNS-hostnaam via http://www.dyn.com<br>',
'1339' : 'Het wordt aanbevolen dat u WPA/WPA2 gebruikt als WPS is ingeschakeld',
'1363' : 'Even geduld...',
'1364' : 'Fout ontdekt. Probeer het opnieuw.',
'1365' : 'Fout sessie-overlapping: wacht 60 seconden voordat u het proces opnieuw start of gebruik het clienthulpprogramma om handmatig een verbinding met dit netwerk tot stand te brengen.',
'1366' : 'Gelukt. Het apparaat heeft verbinding gemaakt met de router.',
'1370' : 'Ongeldige pincode! De pincode van het apparaat bestaat uit vier of acht cijfers. Controleer de code en voer deze opnieuw in.',
'1620' : 'Bezig met initiëren. Start binnen twee minuten de WPS-functie op het clientapparaat.',
'1621' : 'Bezig met initiëren – start binnen 2 minuten de WPS in het clientapparaat.',
'1622' : 'Time-out. geen verbinding tussen cliënt en router.',
'1623' : 'Wi-Fi Protected Setup-bericht',
'1393' : 'WPS hardwareknop',
'1320' : 'Wi-Fi Protected Setup (WPS) is de genormaliseerde methode om de instelling van de beveiliging en het beheer van Wi-Fi netwerken te vereenvoudigen. U kunt nu gemakkelijk een 802.11-netwerk creëren en er met WPS-gecertificeerde apparaten verbinding mee maken met behulp van een PIN-code of Push Button Configuration (PBC of configuratie via drukknop). Oudere apparaten zonder WPS kunnen door middel van de gebruikelijke handmatige configuratiemethode aan het netwerk worden toegevoegd.',
'1321' : 'Personal Information Number (PIN) methode',
'1322' : 'Voer de pincode van het clientapparaat in en klik op Inschrijven. Start vervolgens WPS op het cliëntapparaat. U moet dit binnen twee minuten doen vanuit het hulpprogramma of de WPS-toepassing van het apparaat.',
'1323' : 'PIN-code van het clientapparaat invoeren',
'1324' : 'Inschrijven',
'1325' : 'Als een externe registratiefunctie beschikbaar is, kunt u ook de PIN-code van de router bij de externe registratiefunctie invoeren. Als u het PIN-nummer van de router wilt wijzigen, klikt u op "Nieuwe PIN-code genereren" of op "Standaard PIN-code herstellen" om het PIN-nummer naar de standaardfabrieksinstelling terug te zetten.',
'1326' : 'PIN-code van router',
'1327' : 'Nieuwe PIN-code genereren',
'1328' : 'Standaard PIN-code herstellen',
'1329' : 'Configuratie via drukknop (PBC)',
'1330' : 'Druk de PBC-knop van uw router drie seconden lang in of klik op "PBC starten". Start vervolgens binnen twee minuten de configuratie via de drukknop op het apparaat dat u op de extender wilt aansluiten.',
'1331' : 'PBC starten',
'1332' : 'Handmatige methode',
'1333' : 'Clientapparaten zonder WPS moet u handmatig configureren met de volgende instellingen.',
'1334' : 'Draadloze beveiliging',
'1336' : 'Netwerkauthentificatie',
'1337' : 'Data-encryptie',
'1338' : 'Netwerksleutel (PSK)',
'1340' : 'PIN van de router deblokkeren',
'1341' : 'PIN van de router gedeactiveerd vanwege overmatig veel mislukte toegangspogingen',
'1390' : 'PIN controlesom mislukt! Controleer de code en voer deze opnieuw in.',
'1391' : 'Ongeldige pincode! De pincode van het apparaat bestaat uit acht numerieke tekens. Controleer de code en voer deze opnieuw in.',
'1392' : 'Geconfigureerd',
'1396' : 'Configureer handmatig de draadloze beveiliging',
'1397' : 'draadloze beveiliging',
'common_err1' : '%s is NULL',
'upgrade_err2' : 'Firmware-upgrade beëindigd vanwege onvoldoende capaciteit. Upgrade mislukt.\nProbeer het opnieuw als het systeem niet actief is (geen internetverkeer).',
'upgrade_err3' : 'Niet in staat te uploaden, neem contact op met de beheerder.',
'upgrade_err4' : 'Firmware te groot. Upgrade mislukt.',
'upgrade_err5' : 'U beschikt al over de laatste firmwareversie.',
'upgrade_err6' : 'Tijdens de upgrade is gebleken dat het firmwarebestand is beschadigd. Download het firmwarebestand opnieuw en probeer het nog eens.',
'show10' : 'DHCP-clientlijst',
'show54' : 'Verbindingsinstellingen',
'btn2' : 'Wijzigingen toepassen',
'cff1' : 'Firmware gecontroleerd',
'PM2' : ':30 NM',
'AM2' : ':30 NM',
'Dimicons' : 'Pictogrammen dimmen',
'EcoTo' : 'tot',
'fvrm' : 'Schakel extern beheer uit. Omdat de poort conflicteert met een van de binnenkomende poorten van uw virtuele server.',
'lsipm2' : 'Ongeldig LAN-IP-adres, het laatste getal kan niet 0 of 255 zijn.',
'lsldnm' : 'Ongeldige lokale domeinnaam: `~!@#$%^&*()_+[]{}\|;:\'"<>/?.,',
'lsipm5' : 'Het IP-adres dat u kiest, moet een niet-routeerbaar IP-adres zijn.\n  192.168.x.x (waarbij x elke waarde kan hebben tussen 0 en 255 heeft.) \n10.x.x.x (waarbij x elke waarde kan hebben tussen 0 en 255.)\n172.y.x.x (waarbij y elke waarde kan hebben tussen 16 en 31 en waarbij x elke waarde kan hebben tussen 0 en 255.)',
'ufy4' : 'Het herstellen van de standaardinstellingen kan tot 60 seconden duren. Schakel de router gedurende dit proces niet uit.',
'ufe11' : 'Het is mogelijk dat de router aan het einde van de upgrade gedurende 180 seconden niet op commando\'s reageert. Dit is een normaal verschijnsel. U mag de router hierbij niet uitschakelen of opnieuw starten.',
'ur5' : 'De router heeft zo\'n 30 seconden nodig om opnieuw op te starten. Schakel de router niet uit voordat het resetten voltooid is.',
'ur6' : 'De router heeft zo\'n 60 seconden nodig om opnieuw op te starten. Schakel de router niet uit voordat het resetten voltooid is.',
'usys83' : 'Het nieuwe wachtwoord en het bevestigde nieuwe wachtwoord komen niet overeen.',
'usys83_1' : 'Het wachtwoord en het bevestigde wachtwoord komen niet overeen',
'usys85_1' : 'Het beheerderswachtwoord moet tussen de 3 en 12 tekens bevatten.',
'usys88' : 'Het wachtwoord heeft zijn maximale lengte bereikt!',
'usys89' : 'VM',
'usys90' : 'NM',
'usys92' : 'Het poortnummer voor externe toegang moet tussen 1 en 65535 liggen.',
'usysipm' : 'U hebt niet alle IP-nummers ingevoerd of sommige nummers die u hebt ingevoerd zijn ongeldig. Het IP-adres moet er als volgt uitzien: x.y.y.z (waarbij x elke waarde van 1 tot 223, y elke waarde van 0 tot 255 en z elke waarde van 1 tot 254 kan hebben).',
'self_healing60' : 'Self Healing (zelf herstellende werking)',
'chkwait' : 'Bezig met controleren of er een nieuwe firmwareversie beschikbaar is...',
'Europe' : 'Europa',
'Australia' : 'Australië en Nieuw-Zeeland',
'AsiaPacific' : 'Asia Pacific',
'NorthAmerica' : 'Noord-Amerika',
'vjs1' : 'Ongeldig IP-adres: te lang. Opnieuw controleren alstublieft.',
'vjs2' : 'Ongeldig IP-adres: \'.\' ontbreekt. Opnieuw controleren alstublieft.',
'vjs3' : 'Ongeldig IP-adres: er ontbreken cijfers tussen ".". Opnieuw controleren alstublieft.',
'vjs4' : 'Ongeldig IP-adres: extra \'.\'. Opnieuw controleren alstublieft.',
'vjs5' : 'Ongeldig IP-adres: de cijfers tussen "." zijn te groot. Opnieuw controleren alstublieft.',
'vm1' : 'Ongeldig teken ',
'vm2' : ' op positie ',
'vm3' : 'Moet zijn: ',
'vjs6' : 'Ongeldig jaarformaat. Gebruik bijvoorbeeld 2002',
'vm4' : 'Ongeldige waarde ',
'vjs8' : 'Ongeldig: moet tussen 1970 en 2037 liggen',
'vjs9' : 'Ongeldig maandformaat. Gebruik bijvoorbeeld. 01...12',
'vjs161' : ' niet binnen ',
'vjs162' : ' netmasker',
'vjs163' : 'Toegestaan bereik DHCP is ',
'vjs17' : 'U hebt twee verschillende wachtwoorden ingevuld. Controleer het opnieuw.',
'vjs18' : 'Voer een beginpoort in.',
'vjs19' : 'De beginpoort moet een lager nummer hebben dan de eindpoort.',
'vjs23' : 'Ongeldig MAC-adres: het is een broadcastadres.',
'vjs24' : 'Ongeldig MAC-adres: het is een null-adres.',
'vjs25' : 'Ongeldig MAC-adres: het is een multicast-adres.',
'vjs26' : 'Ongeldig begin-IP-adres en eind-IP-adres: een eind-IP-adres moet hoger liggen dan het begin-IP-adres.',
'vjs28' : 'Ongeldige netmaskerindeling.',
'vjs29' : 'Ongeldig formaat, het netmasker moet hier zijn: 255.255.255.0 of 255.255.255.128 of 255.255.255.192 of 255.255.255.224 of 255.255.255.240 of 255.255.255.248 of 255.255.255.252 of 255.255.255.254',
'vjs30' : 'Ongeldig IP-adres: het laatste getal kan niet 0 of 255 zijn.',
'vjs31' : 'Ongeldig LAN IP-adres: het eerst getal kan niet 127 zijn.',
'vjs32' : 'Ongeldig LAN IP-adres: kan niet 0.0.0.0 zijn.',
'vjs33' : 'Ongeldig LAN IP-adres: moet onder 224.0.0.0 liggen',
'vjs42' : 'De subnetmaskerwaarden die u hebt ingevoerd zijn ongeldig.',
'vjs45' : 'IP-adres opgeven',
'vjs46' : 'is ongeldig. Eerst wijzigen!',
'wcc2' : 'Selecteer uw verbindingstype:',
'wcc13' : 'L2TP',
'wcc14' : 'Sommige providers gebruiken het L2TP-protocol om gebruikers met een centrale plek te verbinden. In dat geval moet u een aantal extra instellingen invoeren. De benodigde gegevens zou u van uw provider gekregen moeten hebben. Zodra u de wijzigingen hebt opgeslagen zal de internetstatusindicator groen worden als u alles met succes hebt ingevoerd.',
'wds4_1' : 'Primair DNS-adres',
'wds7' : 'Als u de automatische DNS-functie niet gebruikt, moet u de DNS-instellingen die u van uw provider hebt gekregen, invoeren.',
'wds8' : 'Om DNS-wijzigingen door te voeren, gaat u eerst naar %s Websitefilters %s en selecteert u "Geen filters".',
'wmc6' : 'Het WAN MAC-adres kan niet gelijk zijn aan het LAN MAC-adres. Wijzig de waarden.',
'wdd9 ' : 'Geen DDNS-service geselecteerd.\n',
'wdd10' : 'Geen DDNS-service geselecteerd en alle gegevens op deze pagina zullen verloren gaan. Wilt u doorgaan?',
'wm10b' : 'Uitsluitend bedoeld voor gebruik bij providers die gebruik van de L2TP-verbindingsmethode vereisen.',
'pm' : 'Uw service was niet beschikbaar voor het verifiëren van het door u ingevoerde wachtwoord. Controleer of u uw wachtwoord juist hebt ingetypt.',
'wpp17' : 'L2TP-account',
'wpp18' : 'L2TP-wachtwoord',
'wpp19' : 'Voer uw L2TP-account in',
'wpp23' : 'IP-adressen toewijzen',
'wpp24' : 'Statisch IP-adres gebruiken',
'wpp25' : 'Dynamisch IP ontvangen van provider',
'wppa7' : 'Mijn IP-adres',
'wppa9' : 'Verbindingsidentificatiecode (optie)',
'wppa13' : 'Vul hier uw PPTP-account in',
'wppa18' : 'Ongeldige servicenaam.',
'ws2' : 'Typ hieronder uw gegevens voor de instellingen voor een statisch IP en klik op "Wijzigingen toepassen".',
'sm_1' : 'Het subnetmasker dat u hebt ingevoerd, is ongeldig.',
'ws8' : 'Voer uw DNS-adresinstellingen in op het volgende scherm en valideer ze.',
'wt2' : 'Als u op "Wijzigingen toepassen" klikt, wordt de router opnieuw opgestart. Zodra de router opnieuw is opgestart, dient u het volgende te doen',
'wt3' : '1) Ontkoppel de voedingskabel van zowel het kabelmodem als de Belkin router',
'wt4' : '2) Sluit de voedingskabel weer aan op het kabelmodem en wacht tot de lampjes van het modem niet meer knipperen',
'wt5' : '3) Sluit de voedingskabel weer aan op de Belkin router',
'wt6' : 'Om te bevestigen dat u verbinding hebt met het internet, kunt u een internetbrowser zoals Internet Explorer, Firefox en Safari openen en controleren of u webpagina\'s kunt bekijken.',
'wlad2' : 'Inschakelen / Uitschakelen',
'wlc2' : 'Als u de instellingen van de draadloze router wilt wijzigen, kunt u dat hier doen. Klik op "Wijzigingen toepassen" om de instellingen op te slaan.',
'wlcgb' : '802.11b+g',
'wlcg' : '802.11g',
'wlcb' : '802.11b',
'wlc20' : '20 MHz',
'wlc22' : '20/40 MHz',
'wlcoff' : 'UIT',
'wlcngb1' : '802.11b, 802.11g en 1x1 802.11n',
'wlcn1' : '1x1 802.11n',
'wlcngb2' : '802.11b, 802.11g en 802.11n',
'wlcn2' : '802.11n',
'wlcgn' : '802.11g+n',
'wlca' : '802.11a',
'wlcan' : '802.11a en 802.11n',
'wlc26' : 'Als u de naam van uw netwerk verbergt, wordt WPS uitgeschakeld.',
'wlc27' : 'Als u het beveiligingstype wijzigt, wordt WPS uitgeschakeld.',
'wlc28' : 'WPS is uitgeschakeld vanwege het <A href=%s><B>type beveiliging van uw draadloze netwerk</B></A>.',
'wlc29' : 'WPS is uitgeschakeld omdat u de netwerknaam (SSID) hebt verborgen.',
'wlc30' : 'WPS is uitgeschakeld omdat u de naam van uw netwerk (SSID) hebt verborgen en vanwege het<A href=%s><B>type beveiliging van uw draadloze netwerk</B></A>.',
'wlc31' : 'Als u WPS inschakelt, zal de netwerknaam (SSID) weer zichtbaar zijn.',
'wlc32' : 'Als u WPS inschakelt, zal het beveiligingstype WPA/WPA2 worden. Het huidige netwerkwachtwoord zal behouden blijven.',
'wlc33' : 'Als u WPS inschakelt, zal de naam van uw netwerk (SSID) zichtbaar worden en het beveiligingstype WPA/WPA2 worden. Het huidige netwerkwachtwoord zal behouden blijven.',
'wle3a' : 'WPA-PSK',
'wle3b' : 'WPA2-PSK',
'wle3c' : 'WPA-PSK + WPA2-PSK',
'wps1' : 'Wi-Fi Protected Setup (WPS) ofwel Wi-Fi Beveiligde Installatie',
'wps3' : 'Configureer de beveiligingsinstellingen voor draadloze communicatie',
'wps17' : 'Voor clientapparaten zonder WPS voert u de Belkin Security Assistant uit. Deze beveiligingsassistent vindt u op de cd. U kunt het apparaat ook handmatig configureren met de volgende instellingen:',
'wps23' : 'WPA+WPA2-Personal (PSK)',
'wps25' : 'TKIP+AES',
'wps27' : 'Netwerksleutel (WEP):',
'wps28_1' : 'NULL',
'wle11' : 'Sleutel 1',
'wle12' : 'Sleutel 2',
'wle13' : 'Sleutel 3',
'wle14' : 'Sleutel 4',
'wpskerr2' : 'De sleutel moet uit 8 en 63 tekens bestaan en mag ook spaties en symbolen bevatten of alleen 64 hexadecimale tekens (0-9 en A-F)!',
'wpskerr4' : 'Voer de gastsleutel in',
'wpskerr7' : 'De gastsleutel moet bestaan uit 8 tekens',
'wpskerr8' : 'De gastsleutel mag niet gelijk zijn aan de netwerksleutel.',
'wlguest1' : 'De SSID mag niet gelijk zijn aan de gast-SSID.',
'wlguest2' : 'De gast-SSID mag niet gelijk zijn aan de SSID.',
'rs_crc' : 'Terugzetten mislukt < CRC >',
'rs_long' : 'Terugzetten mislukt <too long>',
'rs_disposition' : 'Terugzetten mislukt <No Content-Disposition>',
'rs_getpid' : 'Terugzetten mislukt <Can\'t get pid!>',
'rs_unmatchpid' : 'Terugzetten mislukt <Unmatched pid>',
'msg_ddns3 ' : 'Domeinnaam mag niet blanco zijn.\n',
'msg_lan_dhcp1 ' : 'Bezig met gegevens opvragen van de gateway.',
'msg_lan_dhcp2 ' : 'Configuratiedatabase wordt bijgewerkt.',
'msg_wan_stat1 ' : 'IP-adres ',
'msg_wan_stat2 ' : ' bevindt zich niet in ',
'msg_wan_stat3 ' : ' netwerk.',
'msg_wls_chan2 ' : 'Gast-SSID kan niet worden ingesteld op NULL!\n',
'fw_not_interrupt ' : 'U MAG DIT PROCES NIET ONDERBREKEN OF DE VOEDING UITSCHAKELEN. Als u dit wel doet, kan het zijn dat uw router niet meer werkt.',
'msg_invalid_char ' : 'Ongeldig(e) teken(s) gevonden. Geldige tekens zijn: 0-9, a-z, A-Z, `~!@#$%^&*()_-+=|\\{}[]:";\',.<>/?',
'msg_invalid_domain_char ' : 'Ongeldige lokale domeinnaam'+': ~!@#$%^&*()=+{}[]|":;\\\'?/<>,`',
'msg_invalid_char_1 ' : 'Ongeldig(e) teken(s) gevonden. Geldige tekens zijn letters en cijfers. De volgende symbolen zijn ongeldig: `~!@#$%^&*()_+[]{}\\|;:\'"<>/?.,',
'msg_hostIP_invalid ' : 'Het host-IP-adres is ongeldig Het mag niet gelijk zijn aan het LAN IP van de router.\n',
'msg_dmzIP ' : 'DMZ IP-adres',
'msg_blank ' : ' mag niet blanco zijn.\n',
'msg_space ' : 'Iets blanco laten of spaties gebruiken is niet toegestaan in %s\n',
'msg_blank_in ' : 'Iets blanco laten is niet toegestaan in %s\n',
'msg_allspaces ' : '%s kan niet uitsluitend uit spaties bestaan\n',
'msg_invalid ' : 'Ongeldig(e) teken(s) in %s\nGeldige tekens zijn: \n%s\n\n',
'msg_check_invalid ' : '%s bevat een ongeldig cijfer\n',
'msg_valid_range ' : '%s is ongeldig. Geldige waarden liggen tussen %s en %s\n',
'msg_invalid_mac ' : 'Ongeldig MAC-adres.\n',
'msg_multi_mac' : 'Het MAC-adres mag geen multicast-adres zijn.\n',
'msg_confirmDefault ' : 'Waarschuwing!\nHet terugzetten van de fabrieksinstellingen zorgt ervoor dat al uw huidige instellingen worden gewist.\nWeet u zeker dat u dit wilt doen?',
'Allowed_Services' : 'Toegestane services',
'Allowing_Url' : 'Websitetoegang via URL-adres ',
'Allowing_Keyword' : 'Websitetoegang via trefwoord',
'wipv63' : 'Apparaten die verbonden zijn met uw router, kunnen met elkaar communiceren via originele IPv6-pakketten. IPv6-pakketten op de LAN zullen automatisch worden verstuurd naar alle LAN-interfaces (Ethernet-poorten en draadloze 2,4GHz- en 5GHz-netwerken).',
'wipv64' : 'Indien IPv6 pass-through is ingeschakeld, zullen de pakketten ook worden gekopieerd naar de WAN-interface.(Bij inschakeling wordt er een directe, niet beveiligde verbinding met het internet tot stand gebracht.)',
'wipv65' : 'Neem contact op met uw ISP (internetprovider) voor informatie over hun ondersteuning voor IPv6.',
'wipv67' : 'Internet IPv6',
'wipv68' : 'Uw netwerk is IPv6-compatible.',
'wipv69' : 'Pass-Through',
'mf1' : 'Deze pagina\'s stellen u in staat het gedrag van uw router te wijzigen bij bepaald mediaverkeer.',
'mf2' : 'Optimaliseer uw internetverbinding automatisch voor verschillende soorten verkeer.',
'mf3' : 'Kijk hoe uw router gebruikt wordt.',
'mf8' : 'Geregistreerd op %s',
'mf10' : 'Downloaden',
'mf11' : 'Uploaden',
'mf12' : 'Snelheid',
'mf15' : 'Wijzigingen toepassen',
'mf18' : 'Voer een getal in tussen {0,1-%s}.',
'mf20' : 'Uitsluitend {0,1-%s}.',
'mf26' : 'Handmatig geregistreerd op %s',
'mf32' : 'of',
'mf44' : 'De resultaten van de automatische snelheidstest zijn mogelijk niet 100% accuraat omdat ze beïnvloed worden door internetverkeer en andere omstandigheden. Voor het vergelijken van resultaten verwijzen wij u naar een website voor snelheidstesten. U kunt uw internetsnelheden tevens verifiëren bij uw internetprovider. Indien de waargenomen snelheden veel variëren, kunt u de waarden handmatig invoeren.',
'media_dlna18' : 'Zonder titel',
'media_dlna21' : 'U heeft meer media dan uw router kan indexeren dus reserveren we de eerste 12000 items.',
'errSubnetMaskInvalid_2' : 'Het subnetmasker zier er niet uit als een subnetmasker. Controleer de waarde.',
'htWAN_L2TP' : 'L2TP-instellingen',
'htWAN_L2TPContent' : 'Sommige providers gebruiken het L2TP-protocol om gebruikers met een centrale plek te verbinden. In dat geval moet u een aantal extra instellingen invoeren. De benodigde gegevens zou u van uw provider gekregen moeten hebben. Zodra u de wijzigingen hebt opgeslagen zal de internetstatusindicator groen worden als u alles met succes hebt ingevoerd.',
'p400t001_error' : 'Sluit alles sneller aan.',
'p400t018_error' : 'Waarom hernoemen?',
'p400t019_error' : 'Dit is wat u te zien krijgt als u met andere apparaten zoekt naar uw netwerk. Unieke netwerknamen zijn makkelijker te vinden en te onthouden. Elk draadloos apparaat dat eerder verbinding maakte met een andere router, zal automatisch verbinding maken met uw nieuwe router als u dezelfde netwerknaam en hetzelfde wachtwoord gebruikt. ',
'dhToggleBand2G' : '2,4 GHz weergeven',
'772' : 'Als u op "Wijzigingen toepassen" klikt, wordt de router opnieuw opgestart. Zodra de router opnieuw is opgestart, dient u het volgende te doen',
'773' : '1) Ontkoppel de voedingskabel van zowel het kabelmodem als de Belkin router',
'774' : '2) Sluit de voedingskabel aan op het kabelmodem en wacht tot de lampjes van het modem niet meer knipperen',
'dft001' : 'Het lijkt erop dat er geen verbinding is.',
'dft002' : 'Als u ondersteuning nodig hebt en beschikt over een apparaat met een internetverbinding, ga dan naar <strong>help.belkin.com</strong>.',
'gtNoSecCard     ' : 'Bewaar uw netwerknaam en wachtwoord op een veilige plaats voor toekomstig gebruik.',
'gtFWUpdateMobileError' : 'Firmwarebestanden kunnen nu niet worden  geüpload vanaf mobiele apparaten.',
'gtSettingsMobileError' : 'Instellingbestanden kunnen nu niet worden geüpload vanaf mobiele apparaten.',
'gtMoreFromInternet' : 'Maak verbinding met het Internet voor meer taalopties',
'gtCantConnect' : 'We kunnen geen verbinding maken met het internet.',
'p802t004' : 'Ga naar het menu "draadloos netwerk" van uw apparaat.',
'p803t004' : 'Ga naar het menu "draadloos netwerk" van uw apparaat.',
'PIC-S1t001' : 'Alle apparaten blokkeren',
'gtUnnamedDevice' : 'Naamloos apparaat',
'gtIC' : 'Controle over internetgebruik',
'errDefaultGatewayEmpty' : 'Het standaard gatewayadres mag niet leeg zijn.',
'errDefaultGatewayInvalid' : 'Het standaard gatewayadres bestaat uit vier getallen (0-255) die gescheiden worden door punten. Controleer de waarde.',
'errDNSServerEmpty' : 'Het DNS-serveradres mag niet leeg zijn.',
'errDNSServerInvalid' : 'Het DNS-serveradres bestaat uit vier getallen (0-255) die gescheiden worden door punten. Controleer de waarde.',
'errIpAddressEmpty' : 'Het IP-adres mag niet leeg zijn.',
'errIpAddressInvalid' : 'Het IP-adres bestaat uit vier getallen (0-255) die gescheiden worden door punten. Controleer de waarde.',
'errorGenericCommitError' : 'Er is een fout opgetreden.  Corrigeer de onderstaande instellingen en probeer het nog een keer.',
'errorSSIDEmpty' : 'Voer een naam in voor uw draadloze netwerk.',
'errorSSIDInvalidChars' : 'Uw netwerknaam mag alleen letters, cijfers, leestekens en spaties bevatten.',
'errorSSIDTooLong' : 'Uw netwerknaam moet korter zijn dan 32 tekens.',
'errorWEPPasswordEmpty' : 'Voer een wachtwoord in om uw draadloze netwerk te beveiligen.',
'errorWEPPasswordInvalidChars' : 'Uw netwerkwachtwoord mag alleen nummer en de letters A t/m F bevatten.',
'errorWEPPasswordInvalidLength' : 'Uw netwerkwachtwoord moet 10 of 26 tekens lang zijn.',
'errorWPAPasswordEmpty' : 'Voer een wachtwoord in om uw draadloze netwerk te beveiligen.',
'errorWPAPasswordInvalidChars' : 'Uw netwerkwachtwoord mag alleen letters, nummers, interpunctie en spaties bevatten.',
'errorWPAPasswordInvalidLength' : 'Uw netwerkwachtwoord moet tussen de 8 en 63 tekens lang zijn.',
'errPasswordEmpty' : 'Voer uw wachtwoord in.',
'errPasswordInvalid' : 'Uw gebruikersnaam mag alleen letters, cijfers, leestekens en spaties bevatten.',
'errPasswordTooLong' : 'Uw wachtwoord moet minder dan 64 tekens lang zijn.',
'errServAddressEmpty' : 'Voer een serviceadres in.',
'errSubnetMaskEmpty' : 'Het subnetmasker mag niet leeg zijn.',
'errSubnetMaskInvalid' : 'Het subnetmasker moet bestaan uit vier getallen (0-255) die door punten worden gescheiden. Controleer de waarde.',
'errUsernameInvalid' : 'Uw gebruikersnaam mag alleen letters, cijfers, leestekens en spaties bevatten.',
'errUsernameTooLong' : 'Uw gebruikersnaam moet minder dan 64 tekens lang zijn.',
'errVCIInvalid' : 'Voer een getal in tussen 0 en 65535. Uw internetprovider kan u vertellen welke waarde u moet gebruiken.',
'errVPIInvalid' : 'Voer een getal in tussen 0 en 255. Uw internetprovider kan u vertellen welke waarde u moet gebruiken.',
'p802t003' : 'Enkele instellingen zijn gewijzigd. Mogelijk moet u uw draadloze netwerk opnieuw selecteren:',
'p802t011' : 'Enkele instellingen zijn gewijzigd. Mogelijk moet u uw draadloze netwerk opnieuw selecteren:',
'dft003' : 'Hebt u hulp nodig?',
'dft004' : 'Hebt u een vraag of ondersteuning nodig? U kunt 24 uur per dag hulp krijgen in ons online hulpcentrum.<br><a href="http://www.belkin.com/support/" id="dfBelkinHelp">Belkin Hulpcentrum &rarr;</a>',
'dhChangeSSID' : 'Wijzigen &raquo;',
'dhPassLabel' : 'Wachtwoord:',
'dhPasswordObscured24' : 't********',
'dhShow' : 'Weergeven:',
'dhSSID24' : '{blahblah}',
'dhToggle24' : '2,4 GHz',
'dhToggle5' : '5,0 GHz',
'DownSpeed' : '32.6',
'errUsernameEmpty' : 'Voer uw gebruikersnaam in.',
'gt10am' : '10:00 uur',
'gt10pm' : '22:00 uur',
'gt11am' : '11:00 uur',
'gt11pm' : '23:00 uur',
'gt1am' : '1:00 uur',
'gt1amNextDay' : '1:00 uur volgende dag',
'gt1pm' : '13:00 uur',
'gt24ghz' : '2,4 GHz',
'gt24GKey' : '2,4 GHz sleutel',
'gt24GName' : '2,4 GHz SSID',
'gt24PSK' : 'Wachtwoord',
'gt24Sec' : 'WPA2',
'gt24SSID' : '12345678',
'gt2am' : '2:00 uur',
'gt2pm' : '14:00 uur',
'gt3am' : '3:00 uur',
'gt3pm' : '15:00 uur',
'gt4am' : '4:00 uur',
'gt4pm' : '16:00 uur',
'gt50ghz' : '5 GHz',
'gt5am' : '5:00 uur',
'gtGuestKey' : 'Gastsleutel',
'gt5GMedia' : 'Uw 5 GHz band heeft dezelfde naam, maar met ".media" toegevoegd aan het einde.',
'gtGuestName' : 'Gast-SSID',
'gt5pm' : '17:00 uur',
'gt6am' : '6:00 uur',
'gt6pm' : '18:00 uur',
'gt7am' : '7:00 uur',
'gt7pm' : '19:00 uur',
'gt8am' : '8:00 uur',
'gt8pm' : '20:00 uur',
'gt9am' : '9:00 uur',
'gt9pm' : '21:00 uur',
'gtAccessControl' : 'Ouderlijk toezicht op internetgebruik',
'gtAccessPoint' : 'Als accesspoint gebruiken',
'gtADSL' : 'ADSL',
'gtAdvSettings' : 'Geavanceerde instellingen',
'gtAllElseFails' : 'Als geen van deze oplossingen werkt, kunt u contact opnemen met de afdeling Technische Ondersteuning in&nbsp;',
'gtAndroidConnect01' : 'Android telefoons en tablets',
'gtAndroidConnect02' : 'Uw apparaat toont een menu met beschikbare draadloze netwerken in de app Instellingen.',
'gtAndroidConnect03' : 'Open de app <strong>Instellingen</strong> en selecteer <strong>Draadloos en netwerk</strong>.',
'gtAndroidConnect04' : 'Selecteer hier <strong>Wi-Fi</strong> om de lijst met beschikbare netwerken weer te geven.',
'gtAndroidConnect05' : 'Selecteer <strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong>. <!-- IF NOT OPEN --> <span tid="gtNotOpen">Voer het netwerkwachtwoord <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong> in als hierom wordt gevraagd.</span> <!-- /IF -->',
'gtAt' : 'op',
'gtAttenuation' : 'Signaaldemping',
'gtAustralia' : 'Australië',
'gtBackToDashboard' : '&larr; Terug naar het dashboard',
'gtBelkin' : 'Belkin',
'gtBootLoader' : 'Opstartlader',
'gtCantConnect' : 'We kunnen geen verbinding maken met uw internetprovider.',
'gtCantConnectNoResponse' : 'We kunnen geen verbinding maken met het internet – er kwam geen reactie van uw internetprovider.',
'gtChina' : 'China',
'gtClientList' : 'Aangesloten apparaten',
'gtClose' : 'Sluiten',
'gtConfig' : 'Configureren',
'gtConfigureRouter' : 'Router configureren',
'gtConnDevices' : 'Aangesloten apparaten',
'gtConnectingToNew' : 'Verbinding maken met uw nieuwe netwerk',
'gtConnectionDet' : 'Verbindingsgegevens',
'gtConnType' : 'Type verbinding',
'gtContentFiltering' : 'Websitefilter',
'gtCopyright' : 'Copyright &copy; 2012. Belkin. Alle rechten voorbehouden.',
'gtCurrTimezone' : 'Europa/Helsinki {REPLACE THIS SPAN WITH DETECTED Belkin TZ ID description}',
'gtDashboard' : '&larr; Dashboard',
'gtDashTitle' : 'Dashboard van Belkin-router',
'gtDataRate' : 'Gegevenssnelheid',
'gtDDNS' : 'DDNS',
'gtDHCPList' : 'Aangesloten apparaten',
'gtDHCPServer' : 'DHCP-server',
'gtDMZ' : 'DMZ',
'gtDNS' : 'DNS',
'gtDown' : 'Omlaag',
'gtDownloadSpeed' : 'Downloadsnelheid',
'gtEncap' : 'Encapsulatie:',
'gtFileInstallError' : 'Het bestand kon niet worden geïnstalleerd – misschien is het bestandstype onjuist',
'gtFileLoadError' : 'Het bestand kon niet geladen worden – misschien is het bestandstype onjuist',
'gtFirewall' : 'Firewall',
'gtFirmware' : 'Firmware',
'gtFirmwareUpdate' : 'Firmware bijwerken',
'gtFrance' : 'Frankrijk',
'gtFreshest' : 'We halen de laatste versie van onze firmware op…',
'gtFrom' : 'Van:',
'gtFWUpdate' : 'Firmware bijwerken',
'gtFWUpToDate' : 'Uw firmware is nu bijgewerkt.',
'gtGermany' : 'Duitsland',
'gtGuestAccess' : 'Gasttoegang',
'gtGuestNetwork' : 'Gastnetwerk',
'gtHomeNetwork' : 'Thuisnetwerk',
'gtIfYouKnowConnection1' : 'Als u uw verbindingstype weet, kunt u <a href="700-SelectConnection.htm" id="ISP1a010">het handmatig instellen &raquo;</a>',
'gtIfYouKnowConnection2' : 'Als u uw verbindingstype weet, kunt u <a href="700-SelectConnection.htm" id="ISP2a010">het handmatig instellen &raquo;</a>',
'gtIfYouKnowConnection3' : 'Als u uw verbindingstype weet, kunt u <a href="700-SelectConnection.htm" id="ISP3a010">het handmatig instellen &raquo;</a>',
'gtIfYouKnowConnection4' : 'Als u uw verbindingstype weet, kunt u <a href="700-SelectConnection.htm" id="ISP4a010">het handmatig instellen &raquo;</a>',
'gtIfYouKnowConnection4a' : 'Als u uw verbindingstype weet, kunt u <a href="700-SelectConnection.htm" id="ISP4aa010">het handmatig instellen &raquo;</a>',
'gtIfYouKnowConnection5' : 'Als u uw verbindingstype weet, kunt u <a href="700-SelectConnection.htm" id="ISP5a010">het handmatig instellen &raquo;</a>',
'gtIfYouKnowConnection6' : 'Als u uw verbindingstype weet, kunt u <a href="700-SelectConnection.htm" id="ISP6a010">het handmatig instellen &raquo;</a>',
'gtIfYouKnowConnection7' : 'Als u uw verbindingstype weet, kunt u <a href="700-SelectConnection.htm" id="ISP7a010">het handmatig instellen &raquo;</a>',
'gtIntellistream' : 'Intellistream',
'gtInterleavePath' : 'Interleave-pad',
'gtInternetSettings' : 'Internetinstellingen',
'gtIOSConnect01' : 'iPhone, iPad en iPod Touch',
'gtIOSConnect02' : 'Uw apparaat toont een menu met beschikbare draadloze netwerken in de app Instellingen.',
'gtIOSConnect03' : 'Open de app <strong>Instellingen</strong> en selecteer <strong>Wi-Fi</strong>.',
'gtIOSConnect04' : 'Selecteer <strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong> uit de netwerklijst. <!-- IF NOT OPEN --> <span tid="gtNotOpen">Voer het netwerkwachtwoord <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong> in als hierom wordt gevraagd.</span> <!-- /IF -->',
'gtIPv6' : 'IPv6',
'gtIPV6Connection' : 'IPv6-verbinding',
'gtISP' : 'Verbindingstype internetprovider',
'gtJapan' : 'Japan',
'gtLANIP' : 'IP-adres van LAN',
'gtLANMAC' : 'LAN/WLAN MAC',
'gtLANSettings' : 'LAN-instellingen',
'gtLANSubnet' : 'Subnetmasker van LAN',
'gtLLC' : 'LLC',
'gtLoadPrevSettings' : 'Vorige instellingen laden',
'gtLocalNetwork' : 'Lokaal netwerk',
'gtLocalSettings' : 'Lokale netwerkinstellingen',
'gtLocked' : 'vergrendeld',
'gtMACAddress' : 'MAC-adres',
'gtMACAddressFiltering' : 'MAC-adresfiltering',
'gtMacConnect01' : 'Mac OS X',
'gtMacConnect02' : 'Rechts in de menubalk geeft uw computer een menu met beschikbare draadloze netwerken weer.',
'gtMacConnect03' : 'Klik op het pictogram voor draadloze verbindingen.',
'gtMacConnect04' : 'Selecteer <strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong> uit de netwerklijst. <!-- IF NOT OPEN --> <span tid="gtNotOpen">Voer het netwerkwachtwoord <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong> in als hierom wordt gevraagd.</span> <!-- /IF -->',
'gtMaybeLater' : 'Misschien later',
'gtMbitPerSec' : 'Mbps',
'gtMeaning' : 'Wat betekent dit?',
'gtMedia' : 'Media',
'gtMediaServer' : 'Media Server',
'gtmidnight' : '24:00 uur',
'gtModel' : 'Model',
'gtName' : 'Naam',
'gtNeedMoreHelp' : 'Hebt u meer hulp nodig?',
'gtNetName' : 'Netwerknaam',
'gtNewFWAvailableModem' : 'We hebben nieuwe firmware voor uw modem.',
'gtNewFWAvailableRouter' : 'We hebben nieuwe firmware voor uw router.',
'gtNewFWAvailableRouterAndModem' : 'We hebben nieuwe firmware voor uw router en modem.',
'gtNext' : 'Volgende',
'gtNo' : 'Nee',
'gtNoiseMargin' : 'Ruismarge',
'gtNoMyNet' : 'Ik kan mijn netwerk niet vinden',
'gtNoon' : '12:00 uur',
'gtNoSecCard' : 'Bewaar uw netwerknaam en wachtwoord op een veilige plaats voor toekomstig gebruik.',
'gtNotOpen' : 'Voer het netwerkwachtwoord <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong> in als hierom wordt gevraagd.',
'gtNZ' : 'Nieuw-Zeeland',
'gtOffline' : 'Offline',
'gtOnline' : 'Online',
'gtOptionalSoftware' : 'Optionele software',
'gtOptionalSW' : 'Optionele software',
'gtOptSW' : 'Optionele software',
'gt-OR-' : '-OF-',
'gtOther' : '...',
'gtOutputPower' : 'Uitgangsvermogen',
'gtParentalControls' : 'Ouderlijk toezicht',
'gtPass' : 'Wachtwoord:',
'gtPIC' : 'Ouderlijk toezicht op internetgebruik',
'gtPICOtherTimes' : 'Op andere tijden zal het apparaat geen toegang tot het internet hebben.',
'gtPleaseCallISP' : 'Neem contact op met uw internetprovider',
'gtPortForwarding' : 'Port forwarding',
'gtPrint' : 'Afdrukken',
'gtReadAllAboutIt' : 'Voor meer informatie:',
'gtReconnectingHell' : 'Opnieuw verbinding maken…',
'gtRegister' : 'Registreren',
'gtRegistration' : 'Registratie',
'gtRestartRouter' : 'Router opnieuw opstarten',
'gtRestoreDef' : 'Standaardinstellingen herstellen',
'gtRestoreFactDefault' : 'Fabrieksinstellingen herstellen',
'gtRestoreFactDefaults' : 'Fabrieksinstellingen herstellen',
'gtRestoreSettigns' : 'Instellingen herstellen',
'gtRetest' : 'Verbinding opnieuw testen',
'gtRouterDetails' : 'Routergegevens',
'gtRouterInfo' : 'Routerinformatie',
'gtSave' : 'Opslaan',
'gtSaveCurrentSettings' : 'Huidige instellingen opslaan',
'gtSaved' : 'Naamloos apparaat opgeslagen',
'gtSaveRestore' : 'Instellingen opslaan/herstellen',
'gtSaveRestoreSettings' : 'Instellingen opslaan/herstellen',
'gtSaveSettings' : 'Instellingen opslaan/back-up maken',
'gtSecLog' : 'Beveiligingslogboek',
'gtSecurity' : 'Beveiliging',
'gtSelectLang' : 'Selecteer een taal:',
'gtSelfHeal' : 'Zelfherstel',
'gtSelfHealing' : 'Zelfherstel',
'gtSerialSupport' : 'Op de volgende pagina leggen we het serienummer van uw router vast ten behoeve van de ondersteuning.',
'gtShowtime' : 'Tijd weergeven',
'gtSpeedTestResults' : 'Laatste controle: 1 dag geleden om 15:57 uur',
'gtStaticRouting' : 'Statische routing',
'gtStatus' : 'Status',
'gtSystemSettings' : 'Systeeminstellingen',
'gtTo' : 'Tot:',
'gtTraffStats' : 'Verkeerstatistieken',
'gtTryAgain' : 'Opnieuw proberen',
'gtUnlocked' : 'ontgrendeld',
'gtUp' : 'Omhoog',
'gtUpdate' : 'update',
'gtUpdateNoPowerModem' : 'We werken uw modem bij met de nieuwe firmware. Schakel de stroom niet uit tijdens het bijwerken.',
'gtUpdateNoPowerRouter' : 'We werken uw router bij met de nieuwe firmware. Schakel de stroom niet uit tijdens het bijwerken.',
'gtUploadSpeed' : 'Uploadsnelheid',
'gtUSA' : 'De Verenigde Staten',
'gtUserName' : 'Gebruikersnaam:',
'gtUtils' : 'Hulpprogramma\'s',
'gtVCI' : 'VCI:',
'gtVCMUX' : 'VC/MUX',
'gtVPI' : 'VPI:',
'gtWAN' : 'WAN-instellingen',
'gtWANDNS' : 'DNS-adres',
'gtWANGateway' : 'Gateway van WAN',
'gtWANIP' : 'IP-adres van WAN',
'gtWANMAC' : 'WAN MAC-adres',
'gtWANPingBlocking' : 'Blokkering WAN-ping',
'gtWANSubnet' : 'Subnetmasker van WAN',
'gtWebsiteFilter' : 'Websitefilter',
'gtWelcome' : 'Welkom',
'gtWiFi' : 'Wi-Fi',
'gtWifiSettings' : 'De Wi-Fi-instellingen zijn gewijzigd.',
'gtWinConnect01' : 'Windows 7 of 8',
'gtWinConnect02' : 'Rechts in de taakbalk geeft uw computer een menu met beschikbare draadloze netwerken weer.',
'gtWinConnect03' : 'Klik met de rechtermuisknop op het pictogram dat de signaalsterkte weergeeft.',
'gtWinConnect04' : 'Selecteer <strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong>. <!-- IF NOT OPEN --> <span tid="gtNotOpen">Voer het netwerkwachtwoord <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong> in als hierom wordt gevraagd.</span> <!-- /IF -->',
'gtWinConnect05' : 'Windows Vista en Windows XP',
'gtWinConnect06' : 'Rechts in de taakbalk geeft uw computer een menu met beschikbare draadloze netwerken weer.',
'gtWinConnect07' : 'Klik met de rechtermuisknop op het pictogram dat een computer met een draadloze verbinding (XP) of twee computers (Vista) weergeeft.',
'gtWinConnect08' : 'Selecteer <strong>Beschikbare draadloze netwerken weergeven</strong> (XP) of <strong>Verbinding maken met een netwerk</strong> (Vista) uit het menu.',
'gtWinConnect09' : 'Selecteer <strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong>. <!-- IF NOT OPEN --> <span tid="gtNotOpen">Voer het netwerkwachtwoord <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong> in als hierom wordt gevraagd.</span> <!-- /IF -->',
'gtWireless' : 'Draadloos',
'gtWiring' : 'Bedrading',
'gtWPSShort' : 'WPS',
'gtWPS' : 'Wi-Fi Protected Setup',
'gtYes' : 'Ja',
'htFWUpdate' : 'Wat zijn firmware-updates?',
'htFWUpdateContent' : 'Belkin brengt regelmatig nieuwe versies van het besturingsprogramma van uw router uit. Deze updates bevatten verbeteringen en oplossingen voor uw router.<br><br>LET OP: Maak een back-up van uw huidige instellingen voordat u bijwerkt naar een nieuwe firmwareversie.',
'htParent' : 'Wat is het websitefilter?',
'htPIC' : 'Uw controle over internetgebruik',
'htPICBlocked' : 'Internetverbinding verbroken',
'htPICBlockedContent' : 'Herstel de toegang als alle apparaten weer toegang tot internet mogen hebben.',
'htPICContent' : 'Met internetcontrole kunt u nu voor elk apparaat een tijdstip instellen waarop toegang tot het internet wordt geblokkeerd.',
'htSaveRestore' : 'Wat houdt het opslaan, laden of herstellen van instellingen in?',
'htSaveRestoreContent' : 'Uw router onthoudt de instellingen voor bijvoorbeeld zijn netwerknaam, wachtwoord etc. Deze instellingen kunnen worden opgeslagen (als back-up) om later weer in uw router te worden geladen. De oorspronkelijke fabrieksinstellingen van de router kunnen ook worden hersteld.',
'htSaveRestoreContentMobile' : '<br>* Op iPhone, iPad en iPod Touch is het opslaan en laden van een instellingenbestand niet beschikbaar. Gebruik een ander apparaat, bijvoorbeeld een laptop, om een instellingenbestand op te slaan of te laden.',
'ISP1t003' : 'Geef aan dat uw router een IP-adres kon krijgen, maar dat DNS niet werkt.',
'ISP1t007' : 'DNS zet namen als "belkin.com" om in numerieke adressen (IP-adressen) die computers gebruiken om hun weg te vinden op het internet. Uw router heeft een IP-adres en is dus verbonden met het internet. Maar de DNS werkt niet, dus u kan niet op het internet surfen. Dit wijst erop dat er iets mis is bij uw internetprovider.  <span class="nub"></span>',
'ISP2t003' : 'Geef aan dat uw router een IP-adres kon krijgen en dat DNS werkt, maar dat we niemand kunnen pingen.',
'ISP2t007' : 'We "pingen" andere machines op het internet om te testen of we met ze kunnen communiceren. DNS zet namen als "belkin.com" om in numerieke adressen (IP-adressen) die computers gebruiken om hun weg te vinden op het internet. Uw router heeft een IP-adres en is dus verbonden met het internet. Ook de DNS van uw internetprovider werkt, maar we kunnen niet pingen. Dit wijst erop dat er iets mis is bij uw internetprovider.<span class="nub"></span>',
'ISP3t004' : 'Geef aan dat uw gebruikersnaam en wachtwoord zijn geaccepteerd, maar dat u nog steeds geen internetverbinding hebt.',
'ISP3t007' : 'We "pingen" andere machines op het internet om te testen of we met ze kunnen communiceren. Uw internetprovider heeft uw gebruikersnaam en wachtwoord geaccepteerd, maar we kunnen niet pingen en dus ook niet surfen. Dit wijst erop dat er iets mis is bij uw internetprovider.  <span class="nub"></span>',
'ISP4t003' : 'Geef aan dat uw gebruikersnaam en wachtwoord na een paar pogingen niet zijn geaccepteerd,',
'ISP4t007' : 'Uw internetverbinding vereist een gebruikersnaam en een wachtwoord, maar uw internetprovider accepteert niet wat u hebt ingevoerd. Zij kunnen controleren of u de juiste informatie hebt ingevoerd.  <span class="nub"></span>',
'ISP5t003' : 'Geef aan dat u een dynamische verbinding hebt geselecteerd, maar geen IP-adres kunt krijgen.',
'ISP5t007' : 'Een IP-adres identificeert een router of ander apparaat op het internet. Uw internetprovider geeft uw router geen adres, en zonder een IP-adres kunt u geen verbinding maken. Dit wijst erop dat er iets mis bij uw internetprovider, of uw verbinding is geen dynamische verbinding.  <span class="nub"></span>',
'ISP6t003' : 'Geef aan dat u een statische verbinding hebt geselecteerd, maar dat u niet op het internet kunt komen.',
'ISP6t007' : 'We gebruiken een statische verbinding als uw internetprovider u een of meerdere specifieke IP-adressen heeft toegewezen.  <span class="nub"></span>',
'ISP7t003' : 'Geef aan dat uw VPI/VCI-instellingen niet werken en dat u graag de juiste nummers van ze ontvangt.',
'ISP7t007' : 'VPI en VCI geven aan via welk pad uw router met uw internetprovider kan communiceren. We kunnen de juiste instellingen niet vinden. <span class="nub"></span>',
'Network24Passkey' : '{REPLACE WITH 2.4 PASSWORD}',
'Network24SSID' : '{REPLACE WITH 2.4 SSID}',
'p100t002' : 'Laten we verbinding maken met het internet.',
'p100t003' : 'U bent verbonden met uw nieuwe router, en nu gaan we communiceren met uw internetprovider.',
'p100t004' : 'Laten we verbinding maken met het internet.',
'p100t005' : 'U bent verbonden met uw nieuwe router, en nu gaan we communiceren met uw internetprovider.',
'p100t007' : 'Zoek mijn verbinding',
'p100t008' : 'Als u zeker bent van uw verbindingstype kunt u <a href="700-SelectConnection.htm" id="p100a009" tid="p100t009">het handmatig instellen &raquo;</a> of direct naar het <a href="000-Dashboard.htm" id="p100a010" tid="p100t010">dashboard gaan &raquo;</a>.',
'p100t009' : 'handmatig instellen &raquo;',
'p100t010' : 'dashboard &raquo;',
'p100t013' : 'Nu geven we de pagina\'s weer in&nbsp;',
'p100t024' : 'Een bijna automatische installatie',
'p100t025' : 'Eerst controleren we automatisch uw bedrading en zoeken we het verbindingstype tussen u en uw internetprovider. U hoeft weinig te doen. Hierna zorgen we dat de software van uw router is bijgewerkt. <span class="nub"></span>',
'p1010MRt001' : 'We kunnen niet communiceren met uw modem.',
'p1010MRt002' : 'We denken dat er een bedradingsprobleem is.',
'p1010MRt003' : 'U kunt dit als volgt oplossen:',
'p1010MRt004' : 'Controleer of uw modem-router is aangesloten op de telefoonaansluiting met internetverbinding. Er moet een netwerkkabel zijn aangesloten tussen de ADSL-poort van uw modem-router (de grijze poort bovenaan) en de telefoonaansluiting.',
'p1010MRt005' : 'Controleer of uw modem is ingeschakeld. De voedingsadapter moet aan beide uiteinden zijn aangesloten en een of meerdere lampjes op het modem moeten branden.',
'p1010MRt006' : 'Er moet een netwerkkabel zijn aangesloten tussen uw modem en de gele poort op uw router. De kabel brengt het signaal oven van uw modem naar uw router. Zonder deze kabel kunt u niet op het internet.',
'p1010MRt007' : 'Als dit het geval is, kunt u uw modem opnieuw opstarten door de voeding te ontkoppelen, vijftien seconden te wachten en de voeding weer aan te sluiten. Als uw modem een batterij heeft, moet u mogelijk de resetknop van het modem gebruiken.',
'p1010MRt008' : 'Zo moeten deze verbindingen eruit zien:',
'p1010MRt009' : 'Terwijl u dit controleert, blijven wij wachten tot er een verbinding is.',
'p1010MRt010' : 'Het meest voorkomende bedradingsprobleem zit tussen het modem en de router. Het is belangrijk om de beide uiteinden van de kabel te controleren. Het ene uiteinde moet zijn aangesloten op de gele poort van uw nieuwe router, het andere uiteinde moet zijn aangesloten op een soortgelijke poort van uw modem. Modemfabrikanten labellen hun poorten verschillend. De poort kan "data", "LAN", "netwerk" of "Ethernet" genoemd zijn.  <span class="nub"></span>',
'p1020t001' : 'We kunnen niet communiceren met uw internetprovider.',
'p1020t002' : 'Start uw modem-router opnieuw op.',
'p1020t003' : 'We kunnen geen verbinding maken met het internet, dus laten we eerst proberen uw modem-router opnieuw op te starten.',
'p1020t004' : 'Zet uw modem-router uit. Meestal gebeurt dit via de aan/uit-schakelaar op de modem-router of door de voeding te ontkoppelen.',
'p1020t005' : 'Wacht 15 seconden.',
'p1020t006' : 'Zet uw modem-router weer aan.',
'p1020t007' : 'Na een aantal seconden branden de lampjes en kan het apparaat communiceren met uw internetprovider.',
'p1020t008' : 'Als het probleem blijft bestaan, neem dan contact op met uw internetprovider om de problemen met uw account op te lossen.',
'p1020t009' : 'We wachten tot uw modem-router uit- en ingeschakeld is en gaan dan automatisch verder.',
'p1020t010' : 'Waarom moet het modem opnieuw opgestart worden?',
'p1020t011' : 'Sommige modems moeten opnieuw opgestart worden om te kunnen communiceren met een nieuwe router of een onbekende computer. Als er een probleem is bij uw internetprovider, kan het modem de verbinding onverwachts verbreken. We kunnen uw modem zien, maar het internet niet. Vaak helpt het dan om uw modem even opnieuw op te starten.<span class="nub"></span>',
'p1100t001' : 'Er is een firmware-update beschikbaar!',
'p1100t002' : 'We raden u aan uw modem bij te werken met de laatste firmware om ervoor te zorgen dat alles goed werkt.',
'p1100t003' : 'Laat mij zien wat er nieuw is',
'p1201t001' : 'Beveilig het dashboard met een wachtwoord.',
'p1201t002' : 'Voer een wachtwoord in om het dashboard te vergrendelen:',
'p1201t003' : 'Voer een wachtwoord in.',
'gtSetPassword' : 'Wachtwoord instellen',
'p1201t005' : 'Annuleren',
'p1210t001' : 'Het dashboard is vergrendeld.',
'p1210t002' : 'Voer uw wachtwoord in:',
'p1210t003' : 'Voer uw wachtwoord in.',
'p1210t004' : 'Uw wachtwoord is onjuist.',
'p1210t005' : 'Geef mij toegang!',
'p1300t001' : 'Een beetje meer pit.',
'p1300t002' : 'U kunt betere prestaties uit uw internetverbinding halen door Intellistream te installeren. Hiervoor moet u een snelheidstest uitvoeren.',
'p1300t003' : 'Intellistream installeren',
'p1300t004' : 'Misschien later',
'p1302t001' : 'Uw firmware is up-to-date.',
'p1316t001' : 'Het installeren van de bijgewerkte firmware is mislukt - probeer het opnieuw door te klikken op "Zoeken naar nieuwe firmware".',
'p1318t001' : 'Het upgradebestand is niet het juiste type of de juiste versie voor dit apparaat. Bijwerken mislukt Download het juiste bestand en probeer het opnieuw',
'p1333t001' : 'Uw firmware is bijgewerkt.',
'p1400t001' : 'Maak volledig gebruik van uw USB-poort.',
'p1400t002' : 'Er is bepaalde optionele software die u kunt installeren om u te helpen het meeste uit de USB-poort op uw router te halen.',
'p1400t003' : 'Laat mij de optionele software zien',
'p1500t001' : 'U bent hier.',
'p1500t002' : 'U bent waarschijnlijk in de tijdzone <span tid="gtCurrTimezone">Europa/Helsinki {REPLACE THIS SPAN WITH DETECTED Belkin TZ ID description}</span>. Klopt dat?',
'p1500t003' : 'Ja, dat klopt.',
'p1500t004' : 'Laat mij kiezen',
'p200t001' : 'Verbinding maken…',
'p200t002' : ' We controleren de fysieke verbindingen naar uw router.',
'p202At001' : 'Nog steeds bezig…',
'p202At002' : ' We zoeken het verbindingstype van uw internetprovider. Dit kan een paar minuten duren.',
'p202Bt001' : 'Nog steeds bezig…',
'p202Bt002' : ' Bezig met controleren of uw internetprovider een wachtwoord vereist. Dit kan een paar minuten duren.',
'p202Ct001' : 'Nog steeds bezig…',
'p202Ct002' : ' Bezig met het testen van de verbinding.',
'p202t001' : 'Verbinding maken…',
'p202t002' : ' We zoeken het verbindingstype van uw internetprovider.',
'p208t001' : 'Hebt u de VPI/VCI-nummers bij de hand?',
'p208t002' : 'Om op het internet te kunnen moet u het VPI- en VCI-nummer invoeren. Deze nummers staan voor het communicatiepad dat u van uw internetprovider moet gebruiken.',
'p208t003' : 'Uw internetprovider heeft u deze nummers gegeven. Neem contact op met uw internetprovider als u deze informatie niet kunt vinden.',
'p208t006' : '0',
'p208t007' : '0',
'p208t009' : 'Test mijn verbinding',
'p208t011' : 'VPI en VCI',
'p208t012' : 'De VPI (Virtual Path Identifier) en VCI (Virtual Circuit Identifier) laten uw router weten welk pad gebruikt moet worden om te communiceren met uw internetprovider. We proberen eerst automatisch enkele standaardinstellingen voordat we uw hulp inroepen.<span class="nub"></span>',
'p209t001' : 'Er is iets mis met deze instellingen.',
'p209t002' : 'Uw internetprovider accepteert deze VPI/VCI-nummers niet. Opnieuw proberen?',
'p210CXt001' : 'U hebt een PPPoE-verbinding.',
'p210CXt002' : 'U hebt een gebruikersnaam en wachtwoord nodig om toegang te krijgen tot het internet.',
'p210CXt004' : '<strong>Uw internetprovider heeft u deze informatie gegeven. Neem contact op met uw internetprovider als u deze informatie niet kunt vinden.</strong>',
'p210CXt006' : '0',
'p210CXt007' : '0',
'p210CXt016' : 'Test mijn verbinding',
'p210CXt017' : 'PPPoE',
'p210CXt018' : 'Point-to-Point Protocol over Ethernet maakt een veilige verbinding tussen uw router en internetprovider. Dit wordt meestal gebruikt door telefoonmaatschappijen.<span class="nub"></span>',
'p210DXt001' : 'U hebt een PPPoA-verbinding.',
'p210DXt002' : 'U hebt een gebruikersnaam en wachtwoord nodig om toegang te krijgen tot het internet.',
'p210DXt004' : '<strong>Uw internetprovider heeft u deze informatie gegeven. Neem contact op met uw internetprovider als u deze informatie niet kunt vinden.</strong>',
'p210DXt006' : '0',
'p210DXt007' : '0',
'p210DXt016' : 'Test mijn verbinding',
'p210DXt017' : 'PPPoA',
'p210DXt018' : 'Point-to-Point Protocol over ATM maakt een veilige verbinding tussen uw router en internetprovider. Dit wordt meestal gebruikt door telefoonmaatschappijen.<span class="nub"></span>',
'p210t001' : 'U hebt een PPPoE DSL-verbinding.',
'p210t002' : 'U hebt een gebruikersnaam en wachtwoord nodig om toegang te krijgen tot het internet.',
'p210t003' : '<strong>Uw internetprovider heeft u deze informatie gegeven. Neem contact op met uw internetprovider als u deze informatie niet kunt vinden.</strong>',
'p210t005' : 'Gebruikersnaam provider:',
'p210t009' : 'Test mijn verbinding',
'p210t010' : 'PPPoE',
'p210t011' : 'Point-to-Point Protocol over Ethernet maakt een veilige verbinding tussen uw router en internetprovider. Dit wordt meestal gebruikt door telefoonmaatschappijen.<span class="nub"></span>',
'p211t001' : 'Verbinding maken…',
'p211t002' : ' We proberen in te loggen bij uw internetprovider. Dit kan ongeveer twee minuten of langer duren.',
'p212DXt001' : 'Er is iets mis met uw PPPoA-instellingen.',
'p212DXt002' : 'Uw gebruikersnaam, wachtwoord of beide zijn onjuist. Probeer het later nog eens. Neem contact op met uw internetprovider als u de juiste informatie niet kunt vinden.',
'p212t001' : 'Er is iets mis met uw PPPoE-instellingen.',
'p212t002' : 'Uw gebruikersnaam, wachtwoord of beide zijn onjuist. Probeer het later nog eens. Neem contact op met uw internetprovider als u de juiste informatie niet kunt vinden.',
'p220t002' : 'Voer een gebruikersnaam, wachtwoord en serviceadres in om de verbinding tot stand te brengen en toegang te krijgen tot het internet.',
'p220t003' : '<strong>Uw internetprovider heeft u deze informatie gegeven. Neem contact op met uw internetprovider als u deze informatie niet kunt vinden.</strong>',
'p220t006' : 'Gebruikersnaam provider:',
'p220t007' : 'Serviceadres:',
'p220t010' : 'Test mijn verbinding',
'p220t013' : 'U hebt een L2TP- of PPTP-verbinding.',
'p220t014' : 'Of kies mijn verbinding handmatig &raquo;',
'p220t015' : 'L2TP en PPTP',
'p220t016' : 'Zowel L2TP (Layer 2 Tunneling Protocol) en PPTP (Point-to-Point Tunneling Protocol) maken een particuliere en versleutelde verbinding tussen u en uw internetprovider.<span class="nub"></span>',
'p221t001' : 'Verbinding maken…',
'p221t002' : ' We proberen in te loggen bij uw internetprovider. Dit kan ongeveer twee minuten duren.',
'p222t002' : 'Uw gebruikersnaam, wachtwoord of beide zijn onjuist. Probeer het later nog eens. Neem contact op met uw internetprovider als u de juiste informatie niet kunt vinden.',
'p222t004' : 'Er is iets mis met uw instellingen.',
'p2300t001' : 'Geïnstalleerde firmwareversie:',
'p2300t002' : 'Firmware bijwerken vanaf een lokaal bestand:',
'p2300t006' : 'Weet u zeker dat u {{file}} wilt installeren?',
'p2300t010' : 'Zoeken naar nieuwe firmware',
'p2400t006' : 'Uw huidige instellingen worden vervangen. Weet u zeker dat u {{file}} wilt laden?',
'p2410t001' : 'Weet u zeker dat u de standaardinstellingen wilt terugzetten?',
'p2410t002' : 'Klik op \'Ja\' om uw routerinstellingen zoals naam en wachtwoord te wissen en de oorspronkelijke fabrieksinstellingen terug te zetten.',
'p300t005' : 'U bent nu online.',
'p310t001' : 'Er is een update beschikbaar!',
'p310t001x' : 'Deze update (v2.1.0c) omvat:',
'p310t002' : 'Lees en accepteer de licentieovereenkomst om de nieuwe firmware te installeren.',
'p310t003' : 'Licentieovereenkomst',
'p310t004' : 'Ik accepteer de licentieovereenkomst.',
'p310t005' : 'Update installeren',
'p310t006' : 'Wat is firmware?',
'p310t007' : 'Firmware is de software waarop uw router draait. We werken de firmware bij om de prestaties van uw router te verbeteren, dus het is goed om de laatste versie te hebben.  <span class="nub"></span>',
'p315t001' : 'Nieuwe firmware downloaden.',
'p315t002' : 'Voortgang van het downloaden:',
'p315t003' : 'Wat is firmware?',
'p315t004' : 'Firmware is de software waarop uw router draait. We werken de firmware bij om de prestaties van uw router te verbeteren, dus het is goed om de laatste versie te hebben.  <span class="nub"></span>',
'p320t001' : 'Nieuwe firmware installeren.',
'p320t002' : 'Als de nieuwe firmware is toegepast, wordt uw router opnieuw opgestart om de installatie te voltooien.',
'p320t004' : 'Wat is firmware?',
'p320t005' : 'Firmware is de software waarop uw router draait. We werken de firmware bij om de prestaties van uw router te verbeteren, dus het is goed om de laatste versie te hebben.  <span class="nub"></span>',
'p320t006' : 'Dit duurt ongeveer drie minuten. Voortgang van het bijwerken:',
'p320t010' : 'Als de nieuwe firmware is toegepast, wordt uw modem opnieuw opgestart om de installatie te voltooien.',
'p321t001' : 'Uw router opnieuw opstarten',
'p321t002' : 'Uw modem opnieuw opstarten',
'p321t003' : 'Nu de firmware geïnstalleerd is, moeten we uw router opnieuw opstarten om de firmware te activeren.',
'p321t004' : 'Opnieuw opstarten:',
'p321t005' : 'Firmware-updates',
'p321t006' : 'Firmware is de software die wordt gebruikt om netwerk- en beveiligingsprotocollen te implementeren. Updates verhogen de betrouwbaarheid en functionaliteit, dus het is slim om de laatste versie te hebben. <span class="nub"></span>',
'p321t010' : 'Nu de firmware geïnstalleerd is, moeten we uw modem opnieuw opstarten om de firmware te activeren.',
'p330t001' : 'Uw verbindingssnelheid controleren…',
'p330t002' : 'Een korte snelheidstest helpt uw router om uw internetverbinding te optimaliseren. Dit duurt ongeveer twee minuten.',
'p331t001' : 'Uw firmware is bijgewerkt.',
'p332t001' : 'We proberen de firmware later opnieuw bij te werken.',
'p333t001' : 'Uw firmware is bijgewerkt.',
'p334t001' : 'De resultaten van uw snelheidstest!',
'p334t002' : 'Dit zijn onze bevindingen:',
'p334t003' : 'Downloadsnelheid',
'p334t004' : 'Mbps',
'p334t005' : 'Uploadsnelheid',
'p334t006' : 'Mbps',
'p340t002' : ' We maken opnieuw verbinding met uw router, zodat we verder kunnen gaan.',
'p341t001' : 'U moet uw router nu opnieuw starten',
'p341t002' : 'We kunnen niet opnieuw verbinding maken met uw router. Vaak helpt het om even opnieuw op te starten.',
'p341t003' : 'Ontkoppel de voeding van uw router, wacht een paar seconden en sluit de voeding weer aan. Als er een blauw lampje brandt op uw router, kunnen we weer verbinding maken.',
'p341t003w' : 'Trek de stekker van de router uit het stopcontact, wacht een paar seconden en steek hem er weer in. Als er een blauw lampje brandt op uw router, kunnen we weer verbinding maken.',
'p341t004' : ' Terwijl u dit doet, wachten wij tot uw router weer inschakelt.',
'p342t001' : ' We maken opnieuw verbinding met uw router, zodat we verder kunnen gaan.',
'p342t002' : 'U moet mogelijk opnieuw uw draadloze netwerk <span tid="Network24SSID">({REPLACE WITH 2.4 SSID})</span> selecteren uit de lijst met draadloze netwerken om dit voor elkaar te krijgen.',
'p343t002' : ' We maken opnieuw verbinding met uw router om verder te kunnen gaan.',
'p343t003' : 'U moet mogelijk opnieuw uw draadloze netwerk <span tid="Network24SSID">({REPLACE WITH 2.4 SSID})</span> selecteren om verder te gaan.',
'p344t001' : 'U moet uw router nu opnieuw starten.',
'p344t002' : 'We kunnen niet opnieuw verbinding maken met uw router. Vaak helpt het om even opnieuw op te starten.',
'p344t003' : 'Ontkoppel de voeding van uw router, wacht 15 seconden en sluit de voeding weer aan. Als er een blauw lampje brandt op uw router, kunnen we weer verbinding maken.',
'p344t003w' : 'Trek de stekker van de router uit het stopcontact, wacht 15 seconden en steek hem er weer in. Als er een blauw lampje brandt op uw router, kunnen we weer verbinding maken.',
'p344t004' : ' Terwijl u dit doet, wachten wij tot uw router weer inschakelt.',
'p400f010' : 'WPA2',
'p400f011' : 'WPA/WPA2',
'p400f012' : 'WEP',
'p400f013' : 'Open',
'p400t001' : 'Sluit alles sneller aan.',
'p400t002' : 'Geef uw nieuwe router dezelfde netwerknaam en hetzelfde wachtwoord als uw oude router, omdat u dan direct verbinding kunt maken met uw apparaten.',
'p400t004' : 'Netwerknaam:',
'p400t008' : 'Beveiligingstype: <em class="hide-on-phones">(WPA2 is het veiligst.)</em>',
'p400t014' : 'Uw 5 GHz band heeft dezelfde naam, maar met ".media" toegevoegd aan het einde.',
'p400t015' : 'U kunt dit later wijzigen.',
'p400t017' : 'Opslaan en Doorgaan',
'p400t018' : 'Waarom moet ik mijn netwerk een andere naam geven?',
'p400t019' : 'Elk draadloos apparaat dat eerder verbinding maakte met uw oude router, zal automatisch verbinding maken met uw nieuwe router als u dezelfde netwerknaam en hetzelfde wachtwoord gebruikt. Als u op apparaten zoekt naar uw netwerk is het makkelijker om een unieke naam te vinden.<span class="nub"></span>',
'p450a009' : 'Geweldig, wat nu?',
'p450t001' : 'De wijzigingen zijn opgeslagen.',
'p450t002' : 'Hier is uw nieuwe netwerknaam en wachtwoord.',
'p450t003' : 'Als u uw oude netwerknaam en wachtwoord hebt gebruikt, moeten uw bestaande draadloze apparaten nu opnieuw verbinding maken.',
'p450t004' : 'Naam:',
'p450t008' : 'Op een sticker aan de onderkant van de router kunt u de nieuwe netwerknaam schrijven. Zo hebt u de netwerknaam altijd bij de hand.',
'p450t011' : 'Als u uw vorige netwerknaam en wachtwoord gebruikt, zullen de meeste van uw draadloze apparaten automatisch verbinding maken als u ze de volgende keer opstart. Op andere apparaten moet u opnieuw het netwerk selecteren, en deze zullen hierna automatisch verbinding maken. In de beknopte installatiehandleiding staan instructies voor Windows, OS X, iOS en Android.  <span class="nub"></span>',
'p451a009' : 'Geweldig, wat nu?',
'p451t001' : 'Geen wijzigingen.',
'p451t002' : 'Uw netwerknaam en wachtwoord zijn niet gewijzigd.',
'p451t003' : 'U moet op uw draadloze apparaten uw netwerknaam en wachtwoord instellen.',
'p451t004' : 'Naam:',
'p451t008' : 'Op een sticker aan de onderkant van de router kunt u de netwerknaam schrijven. Zo hebt u de netwerknaam altijd bij de hand.',
'p451t011' : 'U moet uw nieuwe netwerknaam instellen op al uw draadloze apparaten. In de beknopte installatiehandleiding staan instructies voor Windows, OS X, iOS en Android.  <span class="nub"></span>',
'p500t001' : 'Registreer uw router.',
'p500t002' : 'De registratie gaat snel en kan veel tijd besparen als u ooit de hulp van de klantenservice nodig hebt.',
'p500t004' : 'Waarom registreren?',
'p500t005' : 'Als we iets meer van u weten, kunnen we u sneller helpen, mocht dat nodig zijn.<span class="nub"></span>',
'p500tCancel' : 'Later registreren &raquo;',
'p500tSubmit' : 'Registratie voltooien',
'p600t001' : 'Bezoek de pagina Optionele Software van uw router om soortgelijke software voor uw andere computers en mobiele apparaten te downloaden.',
'p600t002' : 'Bedankt, ik wil naar het dashboard',
'p600t003' : 'Optionele software',
'p600t004' : 'Met deze softwarehulpmiddelen kunt u profiteren van de geavanceerde functies die uw router biedt. Er zijn downloads voor Apple iOS, Android, Windows en OS X.  <span class="nub"></span>',
'p601t001' : '<strong>Bedankt voor uw registratie!</strong>',
'p700MRt001' : 'We kunnen uw verbinding niet automatisch instellen. Geef ons alstublieft iets meer informatie, zodat we u kunnen helpen bij het maken van verbinding.',
'p700MRt002' : 'Wat voor soort verbinding probeert u in te stellen?',
'p700MRt003' : 'Mijn verbinding is een:',
'p700MRt005' : 'Dynamische verbinding  (1483 Bridged)',
'p700MRt007' : 'PPPoE-verbinding',
'p700MRt009' : 'PPPoA-verbinding',
'p700MRt011' : 'Statische verbinding (IPoA)',
'p700MRt014' : 'Ik weet niet zeker wat mijn verbindingstype is:',
'p700MRt016' : 'Probeer het automatisch nog een keer',
'p700MRt017' : 'Verbindingstypes',
'p700MRt018' : '<span class="black">Dynamisch —</span> Deze verbindingen worden steeds meer gebruikt door ADSL-aanbieders.',
'p700MRt019' : '<span class="black">PPPoE en PPPoA —</span> Deze verbindingen vereisen een gebruikersnaam en wachtwoord die u ontvangt van uw internetprovider.',
'p700MRt021' : '<span class="black">Statisch —</span> Deze vereisen specifieke parameters die uniek zijn voor elke gebruiker. <span class="nub"></span>',
'p700t001' : 'We kunnen uw verbinding niet automatisch instellen. Geef ons alstublieft iets meer informatie, zodat we u kunnen helpen bij het maken van verbinding.',
'p700t002' : 'Wat voor soort verbinding probeert u in te stellen?',
'p700t003' : 'Mijn verbinding is een:',
'p700t005' : 'Dynamische verbinding',
'p700t007' : 'PPPoE-verbinding',
'p700t008' : 'L2TP- of PPTP-verbinding',
'p700t013' : 'Statische verbinding',
'p700t014' : 'Ik weet niet zeker wat mijn verbindingstype is:',
'p700t914' : 'Als u nog niet weet wat uw verbindingstype is, neem dan contact op met uw internetprovider.',
'p700t016' : 'Probeer het automatisch nog een keer',
'p700t017' : 'Verbindingstypes',
'p700t018' : '<span class="black">Dynamisch —</span> Gebruikelijk voor de meeste aanbieders van kabel- en glasvezelinternet en bepaalde DSL-aanbieders.',
'p700t019' : '<span class="black">PPPoE en PPTP —</span> Vereisen een gebruikersnaam en wachtwoord die u ontvangt van de internetprovider.',
'p700t021' : '<span class="black">Statisch —</span> Vereist specifieke parameters die uniek zijn voor elke gebruiker. <span class="nub"></span>',
'p701MRt001' : 'U hebt een dynamische verbinding gekozen.',
'p701MRt002' : 'Uw internetprovider heeft u mogelijk extra configuratie-instellingen gegeven.',
'p701MRt004' : 'Dynamische instellingen:',
'p701MRt006' : '0',
'p701MRt007' : '0',
'p701MRt016' : 'Test mijn verbinding',
'p701MRt017' : 'Dynamische verbindingen',
'p701MRt018' : 'Een dynamische verbinding wordt automatisch geconfigureerd nadat communicatie met de internetprovider tot stand is gebracht.<span class="nub"></span>',
'p701t001' : 'Dynamische verbinding maken…',
'p701t002' : ' We vragen uw internetprovider om een verbinding.',
'p702t001' : 'Modem opnieuw opstarten…',
'p702t002' : 'We starten uw modem opnieuw op om een ander verbindingstype te proberen.',
'p710MRt001' : 'U hebt een statische verbinding gekozen.',
'p710MRt002' : 'Uw internetprovider heeft u de statische configuratie-instellingen gegeven. Neem contact op met uw internetprovider als u deze informatie niet kunt vinden.',
'p710MRt004' : 'Statische instellingen:',
'p710MRt005' : 'IP-adres:',
'p710MRt006' : '0',
'p710MRt007' : 'Subnetmasker:',
'p710MRt008' : '0',
'p710MRt009' : 'Standaardgateway:',
'p710MRt010' : '0',
'p710MRt011' : 'DNS-server (primair):',
'p710MRt012' : '0',
'p710MRt013' : 'DNS-server (secundair):',
'p710MRt014' : '0',
'p710MRt015' : 'Let op: Niet alle internetproviders vereisen een secundaire DNS-server.',
'p710MRt016' : 'Test mijn statische verbinding',
'p710MRt017' : 'Statische verbindingen',
'p710MRt018' : 'Een statische verbinding wordt handmatig geconfigureerd, maar biedt een vast adres voor uw router. Dit adres is voor u eenvoudiger toegankelijk van buiten uw netwerk. Statische verbindingen zijn niet gangbaar voor particulieren internetdiensten en zijn meestal duurder. <span class="nub"></span>',
'p710t001' : 'U hebt een statische verbinding gekozen.',
'p710t002' : 'Uw internetprovider heeft u de statische configuratie-instellingen gegeven. Neem contact op met uw internetprovider als u deze informatie niet kunt vinden.',
'p710t004' : 'Statische instellingen:',
'p710t005' : 'IP-adres:',
'p710t006' : '0',
'p710t007' : 'Subnetmasker:',
'p710t008' : '0',
'p710t009' : 'Standaardgateway:',
'p710t010' : '0',
'p710t011' : 'DNS-server (primair):',
'p710t012' : '0',
'p710t013' : 'DNS-server (secundair):',
'p710t014' : '0',
'p710t015' : 'Let op: Niet alle internetproviders vereisen een secundaire DNS-server.',
'p710t016' : 'Test mijn statische verbinding',
'p710t017' : 'Statische verbindingen',
'p710t018' : 'Een statische verbinding wordt handmatig geconfigureerd, maar biedt een consistent adres voor uw router, waarmee u eenvoudiger toegang hebt van buiten uw netwerk. Statische verbindingen zijn niet gangbaar voor particuliere internetdiensten en kosten meestal meer.  <span class="nub"></span>',
'p711t001' : 'Statische verbinding maken…',
'p711t002' : ' We vragen uw internetprovider om een verbinding.',
'p712t001' : 'Er is iets mis met uw statische instellingen.',
'p712t002' : 'Een van de adressen of andere items die u hebt ingevoerd is onjuist, maar we weten niet welke.',
'p800t001' : 'Uw wijzigingen toepassen',
'p800t002' : 'We passen uw wijzigingen toe en starten de router opnieuw op om de wijzigingen te activeren.',
'p801t002' : ' We wachten tot uw router opnieuw verbinding maakt. Als dat gebeurd is, gaan we verder.',
'p802t002' : 'We hebben een draadloze verbinding met de router nodig om verder te gaan.',
'p802t004' : 'Ga naar het menu Draadloos netwerk van uw apparaat',
'p802t005' : 'Selecteer uw nieuwe netwerk, genaamd <strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong>',
'p802t007' : 'Voer uw wachtwoord in, te weten <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>',
'p802t009' : 'Er wordt verbinding gemaakt met uw router, en dan gaan we verder.',
'p802t010' : ' Wachten tot uw router opnieuw verbinding maakt.',
'p803t002' : 'We hebben een draadloze verbinding met de router nodig om verder te gaan.',
'p803t003' : 'Aangezien u uw netwerknaam hebt gewijzigd, moet u opnieuw uw draadloze netwerk selecteren.',
'p803t004' : 'Ga naar het menu Draadloos netwerk van uw apparaat',
'p803t005' : 'Selecteer uw nieuwe netwerk, genaamd <strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong>',
'p803t007' : 'Voer uw wachtwoord in, te weten <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>',
'p803t009' : 'Er wordt verbinding gemaakt met uw router, en dan gaan we verder.',
'p803t010' : ' Wachten tot er opnieuw verbinding wordt gemaakt.',
'p804t001' : 'Uw apparaat heeft niet opnieuw verbinding gemaakt.',
'p804t002' : 'Dit gebeurt soms en het is vrij makkelijk op te lossen.',
'p804t025' : 'Als u een apparaat met internettoegang bij de hand hebt, ga dan naar deze URL voor handige informatie: <strong>http://belk.in/PMuxOg</strong>',
'p804t026' : 'Als dit niet werkt, sluit dan de Ethernet-kabel direct aan tussen uw modem en uw computer.',
'p804t027' : ' Als we een verbinding zien gaan we automatisch verder.',
'p900t001' : 'U moet uw modem opnieuw opstarten.',
'p900t002' : 'Uw modem communiceert niet.',
'p900t003' : 'Volg de volgende stappen uit om uw modem opnieuw op te starten:',
'p900t004' : 'Zet uw modem uit. Meestal gebeurt dit via de aan/uit-schakelaar op het modem of door de voeding te ontkoppelen. Sommige modems hebben een batterij en bij deze modems moet u de resetknop gebruiken.',
'p900t005' : 'Wacht 15 seconden.',
'p900t006' : 'Zet uw modem weer aan.',
'p900t007' : 'Na een aantal seconden zijn de lampjes op het modem aan en deze kan weer communiceren met de router.',
'p900t008' : 'We wachten tot uw modem uit- en ingeschakeld is en we gaan automatisch verder.',
'p900t009' : 'Waarom moet het modem opnieuw opgestart worden?',
'p900t010' : 'Sommige modems moeten opnieuw opgestart worden om te kunnen communiceren met een nieuwe router of een onbekende computer. We kunnen uw modem zien, maar het communiceert niet met uw nieuwe router. Vaak helpt het dan om uw modem even opnieuw op te starten.<span class="nub"></span>',
'p901t001' : 'Start uw modem nu opnieuw op…',
'p901t002' : ' We wachten tot uw modem uitschakelt en opnieuw inschakelt.',
'p902t001' : 'Uw modem is uitgeschakeld, goed…',
'p902t002' : ' We wachten tot uw modem weer inschakelt.',
'p903t001' : 'Hebt u meer tijd nodig?',
'p903t002' : ' We wachten tot uw modem opnieuw opstart. Hebt u meer tijd nodig?',
'p903t005' : 'Meestal gebeurt dit via de aan/uit-schakelaar op het modem of door de voeding te ontkoppelen. Sommige modems hebben echter een batterij. Bij deze modems moet u de resetknop gebruiken.',
'p904t001' : 'Hebt u meer tijd nodig?',
'p904t002' : ' We wachten tot uw modem weer inschakelt. Hebt u meer tijd nodig?',
'p905t001' : 'We zien uw modem weer.…',
'p905t002' : ' We wachten tot het synchroniseert met uw internetprovider. Dit duurt ongeveer twee minuten.',
'p950IMRt001' : 'We kunnen geen verbinding met uw ADSL-lijn vaststellen.',
'p950IMRt002' : 'Controleer of er een netwerkkabel loopt van het ADSL-aansluitpunt naar de grijze poort op uw router.',
'p950IMRt004' : 'We denken dat er een bedradingsprobleem is.',
'p950IMRt005' : 'Er moet een netwerkkabel zijn aangesloten tussen de grijze poort op uw router en uw ADSL-/telefoonaansluiting. De kabel brengt het signaal van uw internetprovider naar uw router – zonder deze kabel kunt u niet op het internet. Controleer of deze kabel goed is aangesloten.',
'p950IMRt006' : 'Zo moeten deze verbinding eruit zien:',
'p950IMRt007' : 'Er moet een netwerkkabel zijn aangesloten tussen uw ADSL-aansluitpunt en de voedingsadapter van uw router (voorzien van ingebouwd modem). De kabel brengt het signaal van uw internetprovider naar uw router – zonder deze kabel kunt u niet op het internet.',
'p950IMRt009' : 'Zo moeten deze verbinding eruit zien:',
'p950IMRt010' : 'Terwijl u dit controleert, blijven wij wachten tot er een verbinding is.',
'p950IMRt014' : 'Bedrading',
'p950IMRt015' : 'Het meest voorkomende bedradingsprobleem zit tussen het aansluitpunt in de muur en de router. Het is belangrijk om de beide uiteinden van de kabel te controleren. Het ene uiteinde moet zijn aangesloten op de grijze poort van uw nieuwe router, het andere uiteinde moet zijn aangesloten op uw ADSL-aansluitpunt. In sommige gevallen moet er een filter tussen het aansluitpunt in de muur en de kabel worden geplaatst. <span class="nub"></span>',
'p950PMt001' : 'We kunnen geen verbinding met uw ADSL-lijn vaststellen.',
'p950PMt002' : 'Ga na of er een netwerkverbinding is tussen uw router en zijn voedingsadapter (met ingebouwd modem).',
'p950PMt004' : 'We denken dat er een bedradingsprobleem is.',
'p950PMt005' : ' Controleer of de netwerkkabel die zich afsplitst van het snoer van het modem, is verbonden met de gele WAN-poort op uw router. Zonder deze netwerkverbinding kunt u niet op het internet.',
'p950PMt009' : 'Zo moeten deze verbinding eruit zien:',
'p950PMt010' : 'Terwijl u dit controleert, blijven wij wachten tot er een verbinding is.',
'p950PMt011' : 'Bedrading',
'p950PMt012' : 'Het meest voorkomende bedradingsprobleem zit tussen het aansluitpunt in de muur en het modem. Het is belangrijk om de beide uiteinden van de kabel te controleren. Het ene uiteinde moet zijn aangesloten op de voedingsadapter van uw nieuwe router, het andere uiteinde moet zijn aangesloten op uw ADSL-aansluitpunt. In sommige gevallen moet er een filter tussen het aansluitpunt in de muur en de kabel worden geplaats. <span class="nub"></span>',
'p950t001' : 'We kunnen geen verbinding met uw modem maken.',
'p950t002' : 'Controleer of het modem is ingeschakeld en of de stekker in het stopcontact zit.',
'p950t003' : 'Controleer of er een Ethernet-kabel is aangesloten tussen uw modem en uw router.',
'p950t004' : 'We denken dat er een bedradingsprobleem is.',
'p950t005' : 'Uw modem moet ingeschakeld zijn en er moet een Ethernet-kabel zijn aangesloten op uw modem en de gele poort van uw router.',
'p950t006' : 'Controleer het volgende:',
'p950t007' : 'Controleer of uw modem is ingeschakeld. Controleer of de stroomadapter aan beide uiteinden is aangesloten en of er een of meerdere modemlampjes branden.',
'p950t008' : 'Er moet een Ethernet-kabel zijn aangesloten tussen uw modem en de gele poort van uw router. De kabel brengt het signaal oven van uw modem naar uw router , en zonder deze kabel kunt u niet op het internet.',
'p950t009' : 'Uw verbindingen moeten er zo uitzien:',
'p950t010' : 'Terwijl u dit controleert, blijven wij wachten tot er een verbinding is.',
'p950t011' : 'Bedrading',
'p950t012' : 'Het meest voorkomende installatieprobleem is de bedrading tussen het modem en de router. Het ene uiteinde moet zijn aangesloten op de gele poort van uw nieuwe router, het andere uiteinde moet zijn aangesloten op een soortgelijke poort van uw modem. Controleer of beide uiteinden goed zijn aangesloten. Modemfabrikanten labellen hun poorten verschillend. De poort kan "data", "LAN", "netwerk" of "Ethernet" genoemd zijn.<span class="nub"></span>',
'p951IMRt001' : 'Hebt u meer tijd nodig?',
'p951IMRt002' : ' We wachten tot u uw ADSL-lijn hebt aangesloten. Hebt u meer tijd nodig?',
'p951t001' : 'Hebt u meer tijd nodig?',
'p951t002' : ' We wachten tot uw modem weer inschakelt. Hebt u meer tijd nodig?',
'pDAt001' : 'Duplicaatbeheerder',
'pDAt002' : 'Dit apparaat wordt momenteel beheerd door  <span id="ipaddr"></span>!',
'PIC_blocked_content' : 'Ouderlijk toezicht op internetgebruik is actief en toegang tot het internet is momenteel geblokkeerd voor dit apparaat. Druk op de onderstaande knop om de instellingen voor ouderlijk toezicht op internetgebruik aan te passen.',
'PIC_blocked_title' : 'Toegang tot het internet is momenteel geblokkeerd voor dit apparaat.',
'PIC_S1t0006' : 'Schema internettoegang:',
'PIC_S1t006' : 'Recent op uw netwerk:',
'PIC_S2t003' : 'Avonden voor schooldagen',
'PIC_S2t004' : 'Weekend',
'PIC_S2t005' : '(zondag - donderdag)',
'PIC_S2t006' : '(vrijdag - zaterdag)',
'PIC-blocked' : 'geblokkeerd',
'PIC-S1dt001' : 'Wilt u de internetverbinding voor uw volledige netwerk onderbreken?',
'PIC-S1t001' : 'Alle apparaten blokkeren',
'PIC-S1t003' : 'De verbinding met het internet is voor alle apparaten verbroken.',
'PIC-S1t004' : 'Toegang herstellen',
'PIC-S1t005' : 'Nu op uw netwerk:',
'PIC-S1t010' : 'Apparaten zoeken:',
'PIC-S1t020' : 'Uw schema voor ouderlijk toezicht op internetgebruik is onderbroken',
'PIC-S1t021' : 'De router weet niet hoe laat het nu is. Daardoor vindt het (de)blokkeren in uw schema voor ouderlijk toezicht op internetgebruik niet plaats. Dit wordt verholpen als uw router de juiste tijd kan vaststellen door opnieuw verbinding te maken met de NTP-tijdserver.',
'PIC-S1t022' : 'Uw router zoekt om de paar minuten naar de NTP-tijdserver of u kunt een andere tijdserver kiezen door naar <a href="#" tid="gtSystemSettings" style="">Systeeminstellingen</a> te gaan.',
'PIC-unblocked' : 'niet geblokkeerd',
'pNoTime_content' : 'Uw router weet niet hoe laat het is omdat de verbinding met zijn NTP-tijdserver verbroken is. De op tijd gebaseerde functies zoals Ouderlijk toezicht op internetgebruik, Ecomodus en Zelfherstel zijn nu onderbroken, totdat de router weer verbinding heeft met een NTP-tijdserver. <br> <br>De router zal om de paar minuten automatisch verbinding proberen te maken.',
'pNoTime_title' : 'Hoe laat is het?',
'pODLAplt001' : 'Taalpakket installeren',
'pODLAplt002' : 'De taal wordt aangepast aan uw keuze.…',
'pODLDLt001' : 'Taalpakket downloaden',
'pODLDLt002' : 'De door u gekozen taal wordt opgehaald bij de server.…',
'pODLErrt001' : 'Helaas',
'pODLErrt002' : 'OK',
'pStatst004' : 'Alles bekijken &raquo;',
'Support1t001' : 'We kunnen geen verbinding met uw modem maken.',
'Support1t002' : 'Controleer of het modem is ingeschakeld en of de stekker in het stopcontact zit.',
'Support1t003' : 'Controleer of er een Ethernet-kabel is aangesloten tussen uw modem en uw router.',
'Support1t004' : 'We denken dat er een bedradingsprobleem is.',
'Support1t005' : 'Uw modem moet ingeschakeld zijn en er moet een Ethernet-kabel zijn aangesloten op uw modem en de gele poort van uw router.',
'Support1t006' : 'Controleer het volgende:',
'Support1t007' : 'Controleer of uw modem is ingeschakeld. Controleer of de stroomadapter aan beide uiteinden is aangesloten en of er een of meerdere modemlampjes branden.',
'Support1t008' : 'Er moet een Ethernet-kabel zijn aangesloten tussen uw modem en de gele poort van uw router. De kabel brengt het signaal oven van uw modem naar uw router , en zonder deze kabel kunt u niet op het internet.',
'Support1t009' : 'Uw verbindingen moeten er zo uitzien:',
'Support1t010' : 'Klik op Opnieuw proberen als u deze stappen hebt uitgevoerd.',
'Support7t012' : 'Ga naar <strong>http://belk.in/Q4XXca</strong> op een apparaat met internettoegang',
'Support1t016' : 'Bedrading',
'Support1t017' : 'Het meest voorkomende installatieprobleem is de bedrading tussen het modem en de router. Het ene uiteinde moet zijn aangesloten op de gele poort van uw nieuwe router, het andere uiteinde moet zijn aangesloten op een soortgelijke poort van uw modem. Controleer of beide uiteinden goed zijn aangesloten. Modemfabrikanten labellen hun poorten verschillend. De poort kan "data", "LAN", "netwerk" of "Ethernet" genoemd zijn.<span class="nub"></span>',
'Support2t001' : 'Uw modem is nooit opnieuw opgestart.',
'Support2t002' : 'Ontkoppel de voeding van uw modem.',
'Support2t003' : 'Uw modem heeft mogelijk een resetknop die u moet indrukken.',
'Support2t004' : 'Hebt u problemen met het opstarten van uw modem?',
'Support2t005' : 'Volg de volgende stappen om uw modem opnieuw op te starten:',
'Support2t006' : 'Ontkoppel de voeding van uw modem.',
'Support2t007' : 'Wacht totdat de lampjes van het modem niet meer branden.',
'Support2t008' : 'Als de lampjes blijven branden, heeft uw modem mogelijk een noodbatterij. Er is een resetknop aanwezig (meestal aan de achterkant). Druk hierop.',
'Support2t009' : 'De lampjes van het modem moeten uitgaan. Wacht een paar seconden voordat u de voeding weer aansluit.',
'Support2t010' : 'Klik op Opnieuw proberen als u deze stappen hebt uitgevoerd.',
'Support2t016' : 'Waarom moet het modem opnieuw opgestart worden?',
'Support2t017' : 'Sommige modems moeten opnieuw opgestart worden om te kunnen communiceren met een nieuwe router of een onbekende computer. We kunnen uw modem zien, maar het communiceert niet met uw nieuwe router. Vaak helpt het dan om uw modem even opnieuw op te starten.<span class="nub"></span>',
'Support3MRt001' : 'We kunnen geen verbinding met uw ADSL-lijn vaststellen.',
'Support3MRt002' : 'Controleer of er een netwerkkabel aanwezig is tussen uw ADSL-aansluitpunt in de muur en uw router.',
'Support3MRt003' : 'In sommige regio\'s is een filter vereist.',
'Support3MRt004' : 'We weten vrij zeker dat er een probleem met de bedrading is.',
'Support3MRt005' : 'Er moet een kabel zijn aangesloten tussen de grijze poort op uw router en uw ADSL-/telefoonaansluiting.',
'Support3MRt006' : 'Controleer of beide uiteinden van de kabel goed zijn aangesloten.',
'Support3MRt007' : 'Controleer of de kabel in de grijze poort van uw router is gestoken en niet in één van de gele poorten.',
'Support3MRt008' : 'Als u een ADSL-lijnfilter hebt gekregen, controleer dan of deze tussen de kabel en uw ADSL-aansluiting is geplaatst.',
'Support3MRt010' : 'Controleer of beide uiteinden van de kabel goed zijn aangesloten.',
'Support3MRt011' : 'Controleer of de kabel is aangesloten op de netwerkpoort van de voedingsadapter van uw router.',
'Support3MRt012' : 'Als u een ADSL-lijnfilter hebt gekregen, controleer dan of deze tussen de kabel en uw ADSL-aansluiting is geplaatst.',
'Support3MRt016' : 'Als u deze stappen hebt uitgevoerd, kunt u het opnieuw proberen.',
'Support3MRt018' : 'Gebruik de volgende URL op een apparaat met internettoegang en lees hoe u de problemen zelf kunt oplossen: <strong>www.belkin.com/support3mr</strong>',
'Support3MRt021' : 'Bedrading',
'Support3MRt022' : 'Het meest voorkomende bedradingsprobleem heeft betrekking op uw ADSL-aansluiting. Het is belangrijk om de beide uiteinden van de kabel te controleren. <span class="nub"></span>',
'Support3MRt050' : 'Controleer of er een netwerkkabel is aangesloten tussen de voedingsadapter van uw router en de telefoonaansluiting.',
'Support3MRt051' : 'Er moet een kabel zijn aangesloten tussen de voedingsadapter van uw router en uw ADSL-/telefoonaansluiting.',
'Support3PMt001' : 'We kunnen geen verbinding met uw ADSL-lijn vaststellen.',
'Support3PMt002' : 'Ga na of er een netwerkverbinding is tussen uw router en zijn voedingsadapter (met ingebouwd modem).',
'Support3PMt004' : 'We weten vrij zeker dat er een probleem met de bedrading is.',
'Support3PMt005' : 'Er moet een netwerkverbinding zijn tussen de gele poort op uw router en de voedingsadapter van de router.',
'Support3PMt006' : 'Neem de stekker van de voedingsadapter van de router en zoek de kabel die zich opsplitst in twee aparte lijnen. Een van deze lijnen is voorzien van een Ethernet-connector.',
'Support3PMt007' : 'Steek de Ethernet-connector in de gele poort op uw router.',
'Support3PMt010' : 'Als u dit gedaan hebt, kunt u het opnieuw proberen.',
'Support3PMt012' : 'Ga naar <strong>www.belkin.com/support3PM</strong> op een apparaat met internettoegang.',
'Support3PMt016' : 'Bedrading',
'Support3PMt017' : 'Het is van groot belang dat de reeks verbindingen van uw ADSL-aansluiting naar uw router ononderbroken is. De router verwacht dat dit signaal binnenkomt via de gele poort. De kabel van de voedingsadapter brengt dit signaal en de voedingsspanning naar de router. Voor een goede werking moeten beide helften van de kabel op uw router zijn aangesloten. <span class="nub"></span>',
'Support3t001' : 'Uw modem is niet meer aangegaan.',
'Support3t002' : 'Controleer of uw modem stroom krijgt.',
'Support3t003' : 'U moet mogelijk even wachten voordat het gereed is.',
'Support3t004' : 'Hebt u problemen met het opstarten van uw modem?',
'Support7t005' : 'Probeer de volgende stappen om een ADSL-verbinding tot stand te brengen:',
'Support7t006' : 'Controleer of de netwerkkabel van uw modem-router is aangesloten op een telefoonaansluiting met internet. Klik vervolgens op Opnieuw proberen en controleer of uw modem-router het internet kan vinden.',
'Support7t007' : 'Als uw modem-router de telefoonaansluiting deelt met een vaste telefoon (via een splitter), vervang de splitter dan door een filter/splitter (optioneel). Klik vervolgens op Opnieuw proberen en controleer of uw modem-router de internetprovider kan vinden.',
'Support7t008' : 'Als stap 2 hierboven niet werkt, dan kunnen ADSL-filters nodig zijn*. Mocht u ADSL-filters hebben (meestal krijgt u die van uw internetprovider), plaats deze dan tussen al uw vaste telefoons en hun aansluitingen.',
'Support7t009' : 'Als de ADSL-verbinding na stap 1 t/m 3 nog niet werkt, neem dan contact op met uw internetprovider voor technische ondersteuning. Geeft aan dat het u niet lukt om uw modem-router te synchroniseren met de internetprovider.',
'Support3t010' : 'Klik op Opnieuw proberen als u deze stappen hebt uitgevoerd.',
'Support3t016' : 'Waarom moet het modem opnieuw opgestart worden?',
'Support3t017' : 'Sommige modems moeten opnieuw opgestart worden om te kunnen communiceren met een nieuwe router of een onbekende computer. We kunnen uw modem zien, maar het communiceert niet met uw nieuwe router. Vaak helpt het dan om uw modem even opnieuw op te starten.<span class="nub"></span>',
'Support4t001' : 'We hebben niet opnieuw verbinding kunnen maken met uw router.',
'Support4t002' : 'Probeer uw router opnieuw te starten.',
'Support4t003' : 'Probeer opnieuw verbinding te maken als uw router is opgestart.',
'Support4t004' : 'Laten we iets anders proberen.',
'Support4t005' : 'Laten we eerst uw router opnieuw opstarten.',
'Support4t006' : 'Ontkoppel de voeding van uw router, wacht een paar seconden en sluit de voeding weer aan.',
'Support4t006w' : 'Ontkoppel de voeding van uw router, wacht een paar seconden en sluit de voeding weer aan.',
'Support4t007' : 'Als er een blauw lampje brandt op uw router, kunnen we weer verbinding maken.',
'Support4t008' : 'Laten we nu een draadloze verbinding proberen te maken.',
'Support4t031' : 'Het duurt een paar seconden voordat de verbinding wordt gemaakt. Hierna kunt u het opnieuw proberen.',
'Support4t032' : 'Of u kunt een bedrade verbinding proberen.',
'Support4t033' : 'U kunt ook een computer op de router aansluiten. Gebruik een Ethernet-kabel tussen de computer en een van de grijze poort op de router. Ga naar http://router/ om de installatie opnieuw uit te voeren.',
'Support4t034' : 'Klik op Opnieuw proberen als u deze stappen hebt uitgevoerd.',
'Support4t040' : 'Ga naar <strong>http://belk.in/PMuxOg</strong> op een apparaat met internettoegang',
'Support4t050' : 'Een verbinding herstellen',
'Support4t051' : 'In deze situaties kan een herstart van uw router vereist zijn of moet uw router gewoon de verbinding herstellen. We hebben instructies bijgevoegd voor beide opties. Als u uw netwerkwachtwoord in de vorige stap hebt gewijzigd, kan het zijn dat u het netwerk opnieuw moet selecteren na het herstarten van de router.<span class="nub"></span>',
'Support5t001' : 'We hebben niet opnieuw verbinding kunnen maken met uw router.',
'Support5t002' : 'Probeer uw router opnieuw te starten.',
'Support5t003' : 'Probeer opnieuw verbinding te maken als uw router is opgestart.',
'Support5t004' : 'Laten we iets anders proberen.',
'Support5t005' : 'Laten we eerst uw router opnieuw opstarten.',
'Support5t006' : 'Ontkoppel de voeding van uw router, wacht een paar seconden en sluit de voeding weer aan.',
'Support5t006w' : 'Trek de stekker van de router uit het stopcontact, wacht een paar seconden en steek hem er weer in.',
'Support5t007' : 'Als er een blauw lampje brandt op uw router, kunnen we weer verbinding maken.',
'Support5t008' : 'Laten we nu een draadloze verbinding proberen te maken.',
'Support5t009' : 'Het duurt een paar seconden voordat de verbinding wordt gemaakt. Hierna kunt u het opnieuw proberen.',
'Support5t010' : 'Of u kunt een bedrade verbinding proberen.',
'Support5t011' : 'U kunt een computer aansluiten op de router. Sluit een Ethernet-kabel aan tussen de computer en een van de grijze poorten van de router. Ga naar http://router/ om de installatie opnieuw uit te voeren.',
'Support5t012' : 'Klik op Opnieuw proberen als u deze stappen hebt uitgevoerd.',
'Support5t015' : 'Ga naar <strong>http://belk.in/PMuxOg</strong> op een apparaat met internettoegang',
'Support5t020' : 'Een verbinding herstellen',
'Support5t021' : 'In deze situaties is het moeilijk te zeggen of een herstart van uw router vereist is of dat we gewoon de verbinding moeten herstellen. We hebben instructies bijgevoegd voor beide opties. Aangezien we uw netwerknaam in de vorige stap hebben gewijzigd, moet u na het herstarten van de router niet vergeten verbinding te maken met het nieuwe netwerk.<span class="nub"></span>',
'Support6t001' : 'We hebben niet opnieuw verbinding kunnen maken met uw router.',
'Support6t002' : 'Probeer uw router opnieuw te starten.',
'Support6t003' : 'Probeer opnieuw verbinding te maken als uw router is opgestart.',
'Support6t004' : 'Laten we iets anders proberen.',
'Support6t005' : 'Laten we eerst uw router opnieuw opstarten.',
'Support6t006' : 'Ontkoppel de voeding van uw router, wacht een paar seconden en sluit de voeding weer aan.',
'Support6t006w' : 'Trek de stekker van de router uit het stopcontact, wacht een paar seconden en steek hem er weer in.',
'Support6t007' : 'Als er een blauw lampje brandt op uw router, kunnen we weer verbinding maken.',
'Support6t008' : 'Laten we nu een draadloze verbinding proberen te maken.',
'Support6t031' : 'Het duurt een paar seconden voordat de verbinding wordt gemaakt. Hierna kunt u het opnieuw proberen.',
'Support6t032' : 'Of u kunt een bedrade verbinding proberen.',
'Support6t033' : 'U kunt een computer aansluiten op de router. Sluit een Ethernet-kabel aan tussen de computer en een van de grijze poorten van de router. Ga naar http://router/ om de installatie opnieuw uit te voeren.',
'Support6t034' : 'Klik op Opnieuw proberen als u deze stappen hebt uitgevoerd.',
'Support6t037' : 'Ga naar <strong>http://belk.in/Nm1f5S</strong> op een apparaat met internettoegang',
'Support6t050' : 'Een verbinding herstellen',
'Support6t051' : 'In deze situaties kan een herstart van uw router vereist zijn of moet uw router gewoon de verbinding herstellen. We hebben instructies bijgevoegd voor beide opties. Als u uw netwerkwachtwoord in de vorige stap hebt gewijzigd, kan het zijn dat u het netwerk opnieuw moet selecteren na het herstarten van de router.<span class="nub"></span>',
'Support7t001' : 'Uw modem-router is niet verbonden met het internet.',
'Support7t004' : 'Er is een probleem met de verbinding bij uw telefoonaansluiting.',
'Support7t050' : 'Verbindingsproblemen',
'Support7t051' : 'In deze situaties is het moeilijk te zeggen waarom we geen verbinding kunnen maken met de internetprovider. We hebben uw bedrading zo goed mogelijk gecontroleerd. De volgende stap is nagaan of u de juiste connector gebruikt. Ook kan een filter nodig zijn. Als dat niet helpt, moet u contact opnemen met uw internetprovider. <span class="nub"></span>',
'SupportNumber' : '+1 800 123 4567',
'UpSpeed' : '12.5',
'p2410t012' : 'Klik op "Herstellen" om uw routerinstellingen zoals naam en wachtwoord te wissen en de oorspronkelijke fabrieksinstellingen terug te zetten. Uw computers, telefoons etc. moeten dan met deze instellingen geconfigureerd worden om via deze router op het internet te kunnen. Weet u zeker dat u wilt doorgaan?',
'gtRestore' : 'Herstellen',
'gtCancel' : 'Annuleren',
'alt="Loading"' : 'Bezig met laden',
'alt="Restart Router"' : 'Router opnieuw opstarten',
'alt="Check Wires"' : 'Bedrading controleren',
'alt="Check Phone Connection"' : 'Telefoonverbinding controleren',
'alt="Check WAN Connection"' : 'WAN-verbinding controleren',
'alt="Checkmark"' : 'Vinkje',
'alt="Change"' : 'Wijzigen',
'alt="Print"' : 'Afdrukken',
'alt="Expand"' : 'Uitbreiden',
'alt="Caret"' : 'Caret',
'alt="Cut"' : 'Knippen',
'alt="Browser"' : 'Browser',
'alt="Wifi"' : 'Wi-Fi',
'alt="Password"' : 'Wachtwoord',
'alt="Check Phone Jack"' : 'Telefoonaansluiting controleren',
'alt="Turn Off Modem"' : 'Modem uitzetten',
'alt="Turn On Modem"' : 'Modem aanzetten',
'alt="Check Phone Filters"' : 'Telefoonfilters controleren',
'gtSerial' : 'Serienummer',
'gt5GName' : '5 GHz SSID',
'gt5GKey' : '5 GHz sleutel',
'p1020MRt001' : 'We kunnen niet communiceren met uw internetprovider.',
'p1020MRt002' : 'Start uw modem-router opnieuw op.',
'p1020MRt003' : 'We kunnen geen verbinding maken met het internet, dus laten we eerst proberen uw modem-router opnieuw op te starten.',
'p1020MRt004' : 'Zet uw modem-router uit. Meestal gebeurt dit via de aan/uit-schakelaar op de modem-router of door de voeding te ontkoppelen.',
'p1020MRt005' : 'Wacht 15 seconden.',
'p1020MRt006' : 'Zet uw modem-router weer aan.',
'p1020MRt007' : 'Na een aantal seconden branden de lampjes en kan het apparaat communiceren met uw internetprovider.',
'p1020MRt008' : 'Als het probleem blijft bestaan, neem dan contact op met uw internetprovider om de problemen met uw account op te lossen.',
'p1020MRt009' : 'We wachten tot uw modem-router uit- en ingeschakeld is en gaan dan automatisch verder.',
'p1020MRt010' : 'Waarom moet het modem opnieuw opgestart worden?',
'p1020MRt011' : 'Sommige modems moeten opnieuw opgestart worden om te kunnen communiceren met een nieuwe router of een onbekende computer. Als er een probleem is bij uw internetprovider, kan het modem de verbinding onverwachts verbreken. We kunnen uw modem zien, maar het internet niet. Vaak helpt het dan om uw modem even opnieuw op te starten.<span class="nub"></span>',
'p1010t001' : 'We kunnen niet communiceren met uw modem.',
'p1010t002' : 'Wij denken dat er een bedradingsprobleem is.',
'p1010t003' : 'Er moet een kabel zijn aangesloten tussen uw modem en de gele poort van uw router. Uw modem moet aan staan.',
'p1010t004' : 'Er zijn een paar dingen die u kunt doen om ervoor te zorgen dat alles werkt:',
'p1010t005' : 'Controleer of uw modem is ingeschakeld. De voedingsadapter moet aan beide uiteinden zijn aangesloten, en een of meerdere lampjes op het modem moeten branden.',
'p1010t006' : 'Er moet een netwerkkabel zijn aangesloten tussen uw modem en de gele poort van uw router. De kabel brengt het signaal oven van uw modem naar uw router , en zonder deze kabel kunt u niet op het Internet.',
'p1010t007' : 'Als dit correct is, kunt u uw modem opnieuw opstarten door de voeding te ontkoppelen, vijftien seconden te wachten en de voeding weer aan te sluiten. Als u modem een batterij heeft, moet u mogelijk de resetknop van het modem gebruiken.',
'p1010t008' : 'Zo moeten deze verbindingen eruit zien:',
'p1010t009' : 'Wij zoeken naar een verbinding terwijl u dit controleert.',
'p1010t010' : 'Het meest voorkomende bedradingsprobleem is de bedrading tussen het modem en de router. Het is belangrijk om de beide uiteinden van de kabel te controleren. Het ene uiteinde moet zijn aangesloten op de gele poort van uw nieuwe router, het andere uiteinde moet zijn aangesloten op een gelijksoortige poort van uw modem. Modemfabrikanten labellen hun poorten verschillend. De poort kan "data", "LAN", "netwerk" of "Ethernet" genoemd zijn.',
'Support3t005' : 'Volg de volgende stappen om uw modem opnieuw op te starten:',
'Support3t006' : 'Controleer of er lampjes op de voorzijde van het modem branden. Als er lampjes branden is uw modem ingeschakeld, en moet u mogelijk even wachten tot het modem gereed is.',
'Support3t007' : 'Controleer of de voeding van uw modem correct is aangesloten op het modem en het stopcontact.',
'Support3t008' : 'Als uw modem een stroomschakelaar heeft, controleer dan of deze is ingeschakeld.',
'Support3t009' : 'Controleer nogmaals of uw modem nog steeds is verbonden met uw nieuwe router.',
'Support1t012' : 'Ga naar <strong>http://belk.in/LIkBoH</strong> op een apparaat met internettoegang',
'QOSt001' : 'Om Intellistream in te schakelen, gaat u als volgt te werk:',
'QOSt002' : 'Sluit uw computer met behulp van een Ethernet-kabel aan op uw Belkin-router (aanbevolen).',
'QOSt003' : 'Voer een snelheidstest uit voor uw internetverbinding door hier te klikken voor <a href="http://www.speedtest.net" target="_blank" class="speed_font4">Speedtest.net</a>.',
'QOSt004' : 'Nadat u de test hebt uitgevoerd, voert u de waarden die worden weergegeven op Speedtest.net in de bovenstaande velden \'Downloadsnelheid\' en \'Uploadsnelheid\' in. Vervolgens klikt u onderaan op \'Opslaan\'.',
'gtMbps' : 'Mbps',
'QOSt006' : 'Vanwege uw hoge downloadsnelheid zal Intellistream alleen uw uploadsnelheid voorrang geven.',
'QOSt007' : 'Vanwege uw hoge uploadsnelheid zal Intellistream alleen uw downloadsnelheid voorrang geven.',
'QOSt008' : 'Vanwege uw hoge internetsnelheden hoeft Intellistream niet te worden geactiveerd.',
'QOSt009' : 'Voer een getal in groter dan 0,01.',
'QOSt010' : 'Voer getallen in groter dan 0,01.',
'gtSettingsNotSaved' : 'Niet alle instellingen zijn opgeslagen. Blijf hier om ze op te slaan, of verlaat of ververs het scherm om de wijzigingen te negeren.',
'QOSt011' : 'Voer een getal in tussen 0,01 en 100,00.',
'QOSt012' : 'Voer getallen in tussen 0,01 en 100,00.',
'QOSt013' : 'Voer een getal in tussen 0,01 en 1000,00.',
'QOSt014' : 'Voer getallen in tussen 0,01 en 1000,00.',


// End belkin transation table
LastID : "LastValue"	
	
	
}

function translate(key) {
	return langDictionary[key];
}

