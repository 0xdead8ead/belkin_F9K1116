
function dw(message)
{
	document.write(message);	
}

common_err1=" %s is NULL";
common_err2="Abilitato";
common_err3="Disabilita";
dyndns_err1="Nessun messaggio.";
dyndns_err2="Questi campi non possono essere vuoti";
dyndns_err3="L' indirizzo IP e' il medesimo, e non deve essere aggiornato!";
dyndns_err4="On campo nullo in username, password o nome host";
dyndns_err5="Errore domanda DNS";
dyndns_err6="Errore server DNS";
dyndns_err7="Impossibile connettersi aalla rete Internet o nessun server DNS";
dyndns_err8="HTTP non connesso";
dyndns_err9="errore username o password";
dyndns_err10="aggiornamento andato a buon fine";
dyndns_err11="aggiornamento andato a buon fine";
dyndns_err12="attendere prego";
dyndns_err13="Donimio non interamente qualificato; Nome: notfqdn";
dyndns_err14="L' Host non esiste: nohost";
dyndns_err15="L' host non e' amministrato da te";
dyndns_err16="bloccato causa abuso: abuso";
dyndns_err17="Errore Server DNS: numhost";
dyndns_err18="Il servizio e' stato interrotto";
dyndns_err19="ricevuto codice ritorno sconosciuto!";
dyndns_err20="errore sconosiuto!";
dyndns_err21="impossibile aprire la presa HTTP";
dyndns_err22="WAN indirizzo IP e' nullo";
dyndns_err23='Registrazione non riuscita';
dyndns_err24='Registrato';
dyndns_err25='Login non riuscito';
dyndns_err26='Connessione non riuscita';
upgrade_err1="La versione dell'aggiornamento file non è compatibile con la versione di questo dispositivo. Aggiornamento non riuscito. Si prega di procurarsi il file corretto e ritentare.";
upgrade_err2="L'aggiornamento del firmware è stato terminato a causa di risorse insufficienti. Aggiornamento fallito. Ritentare quando il sistema è inattivo (nessun traffico Internet)";
upgrade_err3="Cannot upload, please contact administrator.";
upgrade_err4="Firmware is too large, upgrade failed.";
upgrade_err5="You already have the lastest firmware installed.";
upgrade_err6="Sembra che il file dell'aggiornamento firmware sia stato corrotto.  Scaricare nuovamente il file del firmware e riprovare.";
upgrade_err7="Il client wireless non è in grado di aggiornare il firmware.";
upgrade_err8="Il file di aggiornamento è VUOTO o troppo piccolo. Aggiornamento fallito. Ottenere il file corretto e provare nuovamente";
OK='OK';
Cancel='Annulla';
Close='Chiudi';
show0='Configurazione del router';
show1='Casa';
show2='Aiuto';
show3='Login';
show4='Disconnetti';
show5='Stato Internet';
show6='Collegato';
show7='Non collegato';
show8='Installazione LAN';
show9='Impostazioni LAN';
show10='Elenco dei client DHCP';
show11='Internet WAN';
show12='Tipo di connessione';
show13='DNS';
show14='Indirizzo MAC';
show15='DDNS';
show16='WLAN non disponibile';
show17='Senza fili';
show18='Canale e SSID';
show19='Protezione';
show20='Utilizza come Punto di Accesso';
/*show21='Specify IP Address';*/
show21='Accesso protetto WI-FI';
show22='Controllo indirizzi MAC';
show23='Bridge wireless ';
show24='Firewall';
show25='Server virtuali';
show26='Filtri IP Client';
show27='Filtraggio indirizzi MAC';
show28='DMZ';
show29='Blocco WAN Ping';
show30='Elenco di protezione';
show31='Utility';
show33='Riavvia il router';
show34='Riavvia l\'AP';
show35='Ripristina valori predefiniti';
show36='Salva/Crea backup delle impostazioni';
show37='Ripristino delle impostazioni precedenti';
show38='Aggiornamento del firmware';
show39='Impostazioni del sistema';
show42='EWC Setting';
show43='Setup Wizard';
show44='Manual Settings';
show47="Controllo dell'accesso";
show48='Self Healing';
show54='Impostazioni di connessione';
sm1='Informazioni ';
btn1='cancellare I cambi';
btn2='apportare I cambi';
btn3='Web Site';
btn4='Reset to Default';
btn5='Previous';
btn6='Routing Table';
btn7='Apply';
Router='Router';
AP='AP';
Dynamic='Dinamico';
Static='Statico';
PPPoE='PPPoE';
PPTP='PPTP';
L2TP='L2TP';
Multi_PPPoE='Multi-PPP over Ethernet';
UNKNOWN='UNKNOWN';
cff1='Controllo firmware completato';
cff2='Informazioni sul firmware';
cff3='I nuovi aggiornamenti per il firmware di questo router non sono disponibili!';
cff4='Impossibile connettersi al server informazioni del firmware, <br>verificare con attenzione la connessione wan.';
d1='Belkin | Copia amministratore';
d2='Copia amministratore';
d3='Questo dispositivo è attualmente amministrato da';
d4='.';
fc1='Firewall > Filtri IP Client';
fc2a='Il router può essere configurato in modo da limitare l\'accesso ad Internet, alla posta elettronica o ad altri servizi di rete in particolari giorni e orari.';
IP='IP';
Port='Porta';
Type='Tipo';
BT='Blocco ora';
Day='Giorno';
Tm='Ora';
Enable='Abilita';
BOTH='ENTRAMBI';
Always='Sempre';
Block='Blocco';
SUN='>DOM';
MON='>LUN';
TUE='>MAR';
WED='>MER';
THU='>GIO';
FRI='>VEN';
SAT='>SAB';
PM=':00 PM';
AM=':00 AM';
PM2=':30 PM';
AM2=':30 AM';
EcoMode='Modalità ECO:';
Dimicons='Icona dimensioni';
DisableEco='Disattiva radio da';
EcoTo='a';
EcoSu='Dom';
EcoMo='Lun';
EcoTu='Mar';
EcoWe='Mer';
EcoTh='Gio';
EcoFr='Ven';
EcoSa='Sab';
EcoExcept='tranne';

fcsm='Il numero nella casella di inserimento della porta deve essere compreso tra 1 e 65535.';
fcrm='Il numero dell\'ultima porta deve essere maggiore del precedente.';
fcripm='Il numero dell\'ultimo ip deve essere maggiore del precedente.';
fcnsm='La gamma privata della porta non è corretta.';
fcwdm='The end Day must be later than the start Day.';
fcdtm='The Time must be later than the start Time when they are in the same day.';
fclanip='The IP filter range should not cover the LAN IP address.';
fd1='Firewall > DMZ';
fd2='L’impostazione DMZ consente di specificare un computer della rete da posizionare al di fuori del firewall di protezione NAT. Questa operazione potrebbe essere necessaria qualora la funzione NAT entrasse in conflitto con un\'applicazione, come ad esempio un gioco o un\'applicazione di videoconferenza. Utilizzare questa funzione solo provvisoriamente.';
fd3='Il computer nella DMZ non è protetto dagli attacchi degli hacker.';
fd4='Per mettere un computer nella DMZ, inserire le ultime cifre del suo indirizzo IP nel campo seguente e selezionare "Abilita". Fare clic su "Applica modifiche" per rendere valide le modifiche.';
fd5='Indirizzo IP dell\'host DMZ virtuale ';
fd6='IP statico';
fd7='IP privato';
fd8='Abilita';
fmc1='Firewall > Filtraggio indirizzi MAC';
fmc2='Questa opzione consente di impostare un elenco di client ammessi. Quando si abilita questa funzione, è necessario digitare l’indirizzo MAC di ogni client sulla vostra rete per consentire l’accesso a ogni client. ';
fmc3='Abilita filtraggio indirizzi MAC';
fmc4='Elenco filtraggio indirizzi MAC';
fmc5='Blocco';
fmc6='Host ';
fmc7='Indirizzo MAC';
fmc8='Questo MAC è già stato aggiunto!';
fmc9='Si può solo aggiungere fino a 20 voci.';
Add='Aggiungi';
Added='Added'
Del='Elimina';
fmcipm='Non avete inserito tutte le cifre esadecimali o alcune delle cifre esadecimali da voi inserite non sono valide. Un carattere esadecimale può essere un numero compreso tra 0 e 9 o una lettera compresa tra A(a) e F(f).';
fmn1='Firewall';
fmn2='Il router è dotato di una protezione firewall che salvaguarda la rete da una vasta gamma di comuni attacchi degli hacker, tra cui Ping of Death (PoD) e Denial of Service (DoS). Se necessario, la funzione firewall può essere disattivata. Disattivando la protezione firewall, la rete non rimarrà completamente vulnerabile agli attacchi degli hacker. Tuttavia, si consiglia di lasciare la protezione firewall attiva quando possibile.';
fmn3='Abilita / Disabilita Firewall';
Disable='Disabilita';
fp1='Firewall > Blocco WAN Ping';
fp2='FUNZIONE AVANZATA</b> Il router può essere configurato in modo da non rispondere a un ping ICMP (ping per porta WAN). In questo modo si ottiene un livello di protezione ancora maggiore.';
fp3='Blocca ping ICMP ';
fs1='Firewall > Elenco di protezione';
fs1b='Utility > Elenco di protezione';
fs2='Il router mantiene un un registro di tutte le attività legate al router, tra cui le operazioni di login e logout e qualsiasi tentativo da parte di Internet di accedere al router. Il registro è illustrato di seguito.';
fs3='File di registro';
Save='Salva';
Clear='Cancella';
Refresh='Aggiorna';
System_log='System log:';
Firewall_log='Firewall log:';
fv1='Firewall > Server virtuali';
fvipm='Non avete inserito tutti gli indirizzi IP \n o alcune delle cifre da voi inserite non sono valide. \n Il numero nella casella dell\'indirizzo IP deve essere compreso tra 1 e 254.';
fvrm='Disattivare la Gestione remota. Poiché la porta ad essa relativa crea una collisione con una porta in entrata del server virtuale.';
fvipr='La gamma inbound della porta non è corretta.';
fvppr='La gamma privata della porta non è corretta.';
fvippnm='La gamma inbound della porta non è corretta.';
fv2='Questa funzione consente di instradare eventuali richieste di servizio esterne (di Internet), tra cui server web (porta 80), server FTP (porta 21) o altre applicazioni attraverso il proprio router nella rete interna. ';
fv3='Active Worlds';
fv4='Age of Empire';
fv5='Age of Empires Expansion: The Rise of Rome';
fv6='Age of Empires II Expansion: The Conquerors ';
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
fv44='Dwyco Video Conferencing';
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
fv56='FTP Server ';
fv57='GNUtella ';
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
fv70='Kohan Immortal Sovereigns ';
fv71='LapLink Gold ';
fv72='Links 2001';
fv73='Lotus Notes Server';
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
fv87='Motorhead Server';
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
fv105='Quake II (Client and Server)';
fv106='Quake III';
fv107='Red Alert';
fv108='Rise of Rome';
fv109='Roger Wilco';
fv110='Rogue Spear';
fv111='Secure Shell Server (SSH)';
fv112='Secure Web Server (HTTPS) ';
fv113='ShoutCast';
fv114='SNMP';
fv115='SNMP Trap';
fv116='Speak Freely ';
fv117='StarCraft';
fv118='Starfleet Command';
fv119='StarLancer ';
fv120='SWAT3';
fv121='Telnet Server';
fv122='The 4th Coming ';
fv123='Tiberian Sun: C&C ';
fv124='Tiberian Sun: C&C III';
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
fv135='Yahoo Pager ';
fv136='Yahoo Messenger Chat';
fv137='Pal Talk';
fv138='Real Player 8 Plus';
fv139='RealAudio';
fv140='Netmeeting 2.0, 3.0, Intel Video Phone';
fv141='Westwood Online ';
fv142='CuSeeMe ';
fv143='ICUII Client     ';
fv200='Cancella immissione ';
Description='Descrizione ';
Inb='Porta di ingresso';
Type='Tipo';
Pipa='Indirizzo IP privato ';
Pport='Porta privata';
htop='torna su';
h1='Help';
h2='GLOSSARIO  ';
h3='<b>Amministratore</b> Un amministratore ha il compito di gestire una rete. Nel caso di questo router, la persona che imposta il router ed esegue le modifiche delle impostazioni.';
h4='<b>Client</b> Un computer della rete che utilizza i servizi del router, tra cui il server DHCP automatico e la protezione Firewall.';
d5="<b>DDNS</b> Il servizio Dynamic DNS (DNS dinamico) vi permette di trasformare un indirizzo IP dinamico in un nome host statico in uno qualsiasi dei domini offerti dalla DynDNS.org. Ciò permette di accedere ai computer di rete più facilmente da varie postazioni Internet. DynDNS.org offre gratuitamente questo servizio, per un massimo di 5 nomi host, alla comunità Internet.";
h5='<b>DHCP</b> Dynamic Host Configuration Protocol (Protocollo di Configurazione Host Dinamica) Questo protocollo configura automaticamente le impostazioni TCP/IP di tutti i computer della rete domestica.  ';
h6='<b>Dial-Up (Connessione remota)</b> Un tipo di connessione che sfrutta una linea telefonica pubblica';
h7='<b>DMZ</b> Una zona virtuale nel router che non è protetta dalla protezione firewall del router.  Nella DMZ è possibile inserire un computer   ';
h8='<b>Indirizzo di server DNS</b> DNS è l’acronimo di Domain Name System, che consente ai computer host in Internet di avere un nome di dominio (come ad esempio belkin.com) ed uno o più indirizzi IP (come ad esempio 192.34.45.8). Un server DNS mantiene un database dei computer host e dei rispettivi nomi di dominio ed indirizzi IP, in modo che quando si richiede un dominio (ad esempio digitando "belkin.com" nel proprio browser Internet), l’utente viene inviato all’indirizzo IP corretto. L\'indirizzo del server DNS utilizzato dai computer della rete domestica costituisce l\'ubicazione del server DNS assegnata dall\'ISP.';
h9='<b>DSL Modem</b> DSL è l\'acronimo di Digital Subscriber Line. Un modem DSL utilizza la linea telefonica per trasmettere dati ad alte velocità. ';
h10='<b>IP dinamico</b> Un indirizzo IP viene automaticamente ricevuto da un server DHCP ';
h11='<b>Ethernet</b> Uno standard per i computer di rete. Le reti Ethernet sono collegate attraverso alcuni cavi e hub speciali, e trasferiscono i dati con velocità di circa 10 milioni di bit al secondo (Mbps).';
h12='<b>Firewall</b> Un ostacolo elettronico che impedisce agli utenti non autorizzati di accedere ad alcuni file o computer nella rete. ';
h13='<b>Firmware</b> Software in memoria. Si tratta dei programmi essenziali che permangono anche dopo aver spento il sistema. Il firmware è più semplice da modificare rispetto all’hardware, ma è più durevole del software salvato su un disco. ';
h14='<b>Indirizzo IP</b> IP è l’acronimo di Internet Protocol. Un indirizzo IP è composto da una serie di quattro numeri separati da punti finali e identifica un unico host Internet. Esempio: 192.34.45.8.  ';
h15='<b>ISDN</b> È l’acronimo di Integrated Services Digital Network. Le linee di telecomunicazione digitale sono in grado di trasmettere i servizi di rete sia vocale, sia digitale con un massimo di 128 K e sono molto più veloci e affidabili dei modem analogici ad alta velocità. Le linee ISDN sono disponibili presso molte compagnie telefoniche.';
h16='<b>ISP</b> È l’acronimo di Internet Service Provider. Un ISP è un\'azienda che fornisce la connessione a Internet per privati e altre società.';
h17='<b>Indirizzo di gateway ISP</b> (vedi la definizione di ISP). L\'indirizzo del gateway dell\'ISP è un indirizzo IP per il router localizzato nell\'ufficio dell\'ISP. Questo indirizzo viene richiesto soltanto se si utilizza un modem via cavo o DSL.';
h18='<b>LAN</b> Acronimo di Local Area Network. Una LAN corrisponde a un gruppo di computer e dispositivi connessi all\'interno di un\'area relativamente piccola (come una casa o un ufficio). La rete di una casa è considerata una LAN.';
h19='<b>Indirizzo MAC</b> MAC è l’acronimo di Media Access Control. Un indirizzo MAC è l\'indirizzo dell\'hardware di un dispositivo connesso a una rete.';
h20='<b>MTU</b> È l’acronimo di Maximum Transmission Unit. L’unità di dati più vasta che possa essere trasmessa su qualsiasi particolare mezzo fisico';
h21='<b>NAT</b> Acronimo di Network Address Translation. Questa procedura permette a tutti i computer nella rete di casa di utilizzare un indirizzo IP. Utilizzando la funzionalità NAT del gateway di rete per la connessione locale Home Connect, è possibile accedere a Internet da qualsiasi computer nella propria rete locale senza dovere acquistare più indirizzi IP dal proprio ISP.';
h22='<b>Porta</b> Si tratta di un canale logico identificato dal suo numero di porta univoco. Le applicazioni attendono dalle porte specifiche comunicazioni che potrebbero riguardarle.';
h23='<b>PPPoE</b> Acronimo di Point-to-Point Protocol over Ethernet. Il Point-to-Point Protocol è un metodo per proteggere la trasmissione dei dati, originariamente creato per le connessioni di accesso remoto; il PPPoE si applica alle connessioni Ethernet.  ';
h24='<b>PPTP</b> È l’acronimo di Point-to-Point Tunneling Protocol. Una versione del PPP (Point-to-Point Protocol) in grado di incapsulare i pacchetti di dati formattati da un protocollo di rete in pacchetti utilizzati da un protocollo diverso. Questa tecnica consente di trasmettere i dati TCP/IP attraverso una rete non TCP/IP. Il protocollo PPTP può essere utilizzato per fondere diverse reti fisiche utilizzando Internet come intermediario.';
h25='<b>SNTP</b> Acronimo di Simple Network Time Protocol. Uno standard di comunicazione che consente di trasmettere le informazioni in tempo reale attraverso una rete o attraverso Internet.';
h26='<b>SPI</b> Acronimo di Stateful Packet Inspection. SPI è un tipo di protezione a livello aziendale fornita dal vostro gateway di rete per la connessione locale HomeConnect. Con SPI, il gateway agisce come protezione "firewall", proteggendo la rete dagli hacker.';
h27='<b>IP statico</b> Un indirizzo IP configurato manualmente e che non cambia mai.  ';
h28='<b>Subnet Mask</b> Una subnet mask, che può fare parte delle informazioni TCP/IP fornite dal proprio provider, è una serie di quattro numeri configurati come un indirizzo IP. Viene utilizzata per creare i numeri di indirizzo IP usati soltanto in una particolare rete (contrariamente ai numeri di indirizzo IP riconosciuti da Internet e che devono essere assegnati da InterNIC).  ';
h29='<b>TCP</b> Acronimo di Transmission Control Protocol. Il livello di protocollo di trasmissione più comune per Internet. Il protocollo TCP è orientato sul tipo di connessione e di flusso e offre una comunicazione affidabile mediante le reti collegate ai pacchetti. ';
h30='<b>TCP/IP</b> Acronimo di Transmission Control Protocol over Internet Protocol. Questo è un protocollo standard per la trasmissione dei dati in Internet.  ';
h31='<b>UDP</b> Acronimo di User Datagram Protocol. Protocollo di comunicazione per il livello di rete, di trasporto e di sessione Internet, che consente di inviare un messaggio datagramma da un computer ad un’applicazione attiva in un altro computer. A differenza del protocollo TCP, il protocollo UDP non richiede alcun tipo di connessione e non garantisce una comunicazione affidabile. L’applicazione stessa deve essere in grado di elaborare qualsiasi tipo di errore e accertare che i dati siano trasmessi in maniera affidabile. ';
h32='<b>WAN</b> Acronimo di Wide Area Network. Una rete alla quale sono connessi computer localizzati in aree geograficamente separate (ad es: tra diversi edifici, città, paesi). Internet è una WAN (wide area network). ';
h33='<b>Indirizzo IP WAN</b> L’indirizzo IP assegnato al router dall’ISP.';
h34='<b>WLAN</b> Acronimo di Wireless Local Area Network. Una rete locale che collega i computer vicini tra loro via radio (come ad esempio 802.11b)';
h35="<b>L2TP</b> Layer Two (2) Tunneling Protocol. an extension to the PPP protocol that enables ISPs to operate Virtual Private Networks (VPNs). L2TP merges the best features of two other tunneling protocols: PPTP from Microsoft and L2F from Cisco Systems. Like PPTP, L2TP requires that the ISP's routers support the protocol.";
h39='<b>DHCP</b> La funzione server DHCP agevola considerevolmente l\'impostazione delle reti, assegnando indirizzi IP  a ogni computer presente in rete. Se necessario, il server DHCP pu¨° essere disattivato. Disattivando il server DHCP ¨¨ necessario impostare manualmente un indirizzo IP statico in ogni computer della rete. Il pool IP ¨¨ la gamma di indirizzi IP prevista pre l\'assegnazione dinamica ai computer presenti in rete. Il valore predefinito ¨¨ 2-100 (99 computer), qualora si desiderasse modificare questo numero, digitare un nuovo indirizzo IP iniziale e finale, e fare clic su "Applica modifiche".';
Enabled='Abilitato';
Disabled='Disabilita';
Auto='Automatico';
str1='Questo dispositivo è attualmente amministrato da ';
str2=' currently!!';
DDNSDisable='Disabilita';
DynDNS='DynDNS';
DtDNS='DtDNS';
Current='Canale corrente';
i1='Imposta home';
i2='Stato';
i3='Informazioni versione';
i4='Versione del firmware';
i5='Versione Boot';
i6='Hardware';
i7='N. di serie ';
i8='Impostazioni LAN';
i9='MAC del LAN/WLAN';
i9a='MAC del LAN';
i9b='WLAN non disponibile';
i10='Indirizzo IP';
i11='Subnet Mask ';
i12='Server DHCP ';
NoClients='Nessun Cliente';
Clients='Client';
i13='Impostazioni Internet';
i14='Indirizzo WAN MAC';
i15='Tipo di connessione';
i16='Subnet Mask';
i17='IP Wan';
i18='Gateway Predefinito';
i19='Indirizzo DNS';
i20='Caratteristiche';
i21='NAT ';
i22='Impostazioni Firewall';
i23='SSID';
i24='Protezione';
i25='Stampante';
i26='abilita/disabilita';
i27='Prima di poter modificare le impostazioni è necessario registrarsi.';
i28='Lingua';
i29='Lingua attuale';
i30='Lingue disponibili';
i31='IP statico';
i32='Senza fili Disabilita';
ld1='LAN > DHCP';
ld2='LAN > Elenco client DHCP';
ld3='Questa pagina visualizza l’indirizzo IP, il nome host e l’indirizzo MAC di ogni computer collegato alla propria rete. Se per il computer non è stato specificato un nome host, il campo Nome host rimane vuoto. Cliccando su "Aggiorna", l’elenco verrà aggiornato.';
ld4='Indirizzo IP';
ld5='Nome host';
ld6='Indirizzo MAC';
lm1='Rete locale (LAN)';
lm2='Il router è dotato di un server DHCP che assegna automaticamente gli indirizzi IP a ciascun computer della propria rete. Le impostazioni predefinite del server DHCP funzionano con la maggior parte delle applicazioni. Per effettuare delle modifiche, procedere nel seguente modo.';
lm3='È possibile apportare le seguenti modifiche';
lm4='Modificare l’indirizzo IP interno del router. Predefinito = 192.168.2.1';
lm5='Modificare la Subnet mask. Predefinita = 255.255.255.0';
lm6='Abilitare/Disabilitare la funzione del server DHCP. Predefinita= ON (abilitata)';
lm7='Specificare il pool di indirizzi IP iniziale e finale. Predefinito = iniziale: 2 / finale: 100';
lm8='Specificare il tempo di validità dell\'indirizzo IP. Predefinito= Infinito';
lm9='Specificare un nome di dominio locale. Predefinito = Belkin';
lm10='Per effettuare modifiche, fare clic su "Impostazioni LAN" nella scheda LAN a sinistra.';
lm11='Il router segnalerà anche un elenco di tutti i computer client collegati alla rete. Per visualizzare l’elenco, fare clic su "Elenco client DHCP" nella scheda LAN a sinistra.';
ls1='LAN > Impostazioni LAN';
ls2='Da qui è possibile effettuare le modifiche della LAN (Local Area Network). Perché le modifiche vengano eseguite, occorre fare clic su "Applica modifiche" in fondo allo schermo.';
ls3='Indirizzo IP';
ls4='Subnet Mask     ';
ls5='Server DHCP ';
On='Acceso  ';
Off='Spento  ';
ls6='La funzione del server DHCP semplifica notevolmente l’impostazione di una rete, consentendo di assegnare gli indirizzi IP ad ogni computer nella rete. Non è necessaria alcuna modifica.';
ls7='Indirizzo iniziale dell\'IP Pool ';
ls8='Indirizzo finale dell\'IP Pool   ';
ls9='Lease Time  ';
ls10='Sempre';
ls11='30 minuti ';
ls12='1 ore';
ls13='2 ore';
ls14='12 ore ';
ls15='24 ore';
ls16='2 giorni';
ls17='1 settimana ';
ls18='2 settimane  ';
ls19='Il lasso di tempo durante il quale il server DHCP assegna un indirizzo IP a ogni computer.  ';
ls20='Local Domain Name (Dominio locale)';
Optional='Opzionale  ';
ls21='Opzione che consente di assegnare un nome alla propria rete.';
lssm='Il numero inserito per la Subnet mask non è valido.';
lsnetm='Il pool IP deve essere nella stessa sottorete dell\'IP gateway ';
lsendm='L\'indirizzo IP finale deve essere maggiore dell\'indirizzo IP iniziale.';
lspoolm='L’indirizzo IP della LAN non può essere nel pool di indirizzi DHCP.';
lsipm2='Indirizzo IP della LAN non valido, l\'ultimo numero non può essere 0 né 255.';
lsipm3='Indirizzo IP della LAN non valido, il primo numero non può essere 127 né 0.';
lsldnm='Invalid Local Domain Name: `~!@#$%^&*()_+[]{}\\|;:\'"<>/?.,';
lsipm4='L\'IP inserito non è valido';
lsipalert='Nella casella di scelta dell\'indirizzo nella barra di stato del browser, inserire manualmente il nuovo indirizzo LAN.';
lsipm5='L\'indirizzo IP scelto deve essere un IP non instradabile.\n  192.168.x.x (dove x è qualsiasi valore fra 0 e 255.) \n10.x.x.x (dove x è qualsiasi valore fra 0 e 255.)\n172.y.x.x (dove y è qualsiasi valore da 16 a 31 e x è qualsiasi valore da 0 a 255.)';
lsipc='Cambiare l\'indirizzo IP LAN?';
lo1='Login';
lo2='Prima di poter modificare qualsiasi impostazione, è necessario eseguire il login con la password. Se non fosse ancora stata impostata una password personalizzata, lasciare questo spazio in bianco e fare clic su "Inoltra". ';
lo3='Password ';
lo4='Predefinita = lasciare vuoto';
Clear='Cancella';
Submit='Inoltra';
le1='Belkin | Errore di login';
lerror='Errore di login!';
Utilities='Utility > ';
ss1='Modifiche applicate correttamente';
rs1='Reset con esito positivo ';
rs3='Riavvio del router in corso';
rs4='secondi residui. ';
ugs1='Aggiornamento del firmware eseguito correttament';
rf1='Ripristino valori preimpostati con esito positivo';
rss1='Impostazioni ripristinate con esito positivo ';
ufy1='Ripristina impostazioni predefinite';
ufy2='Con questa opzione è possibile ripristinare tutte le impostazioni eseguite dal produttore del router. Prima di ripristinare le impostazioni predefinite, è consigliabile eseguire un backup delle proprie impostazioni. Per ripristinare le impostazioni predefinite, fare clic su "Ripristina impostazioni predefinite" in basso.';
ufy3='AVVERTENZA: Tutte le impostazioni andranno perse! Procedere?';
ufy4='Il ripristino delle impostazioni predefinite richiede 60 secondi. Non spegnere il router durante questo processo.';
ufy5='Non saranno ripristinate le impostazioni predefinite. Nessuna impostazione andrà persa!';
ufy='Ripristina impostazioni predefinite';
ufe1='Utility > Aggiornamento firmware';
ufe2='Di tanto in tanto, Belkin potrebbe creare nuove versioni del firmware del router. Gli aggiornamenti del firmware contengono alcuni miglioramenti e consentono di risolvere eventuali problemi delle versioni precedenti. Fare clic sul link in basso per accertare la disponibilità di nuovi aggiornamenti del firmware per questo router.';
ufe3='NOTA BENE: prima di aggiornare il firmware con una nuova versione, è consigliabile eseguire un backup delle proprie impostazioni.';
ufe4='Fare clic qui';
ufe5='per andare alla pagina Salva/Crea backup delle impostazioni attuali.';
ufe6='Cerca nuove versioni del firmware ';
ufe7='Verifica firmware ';
ufe8='Aggiorna firmware ';
Update='Aggiorna';
ufe9='Specificare la posizione del file di aggiornamento. Digitare il percorso del file e il nome del file oppure fare clic su "Sfoglia" per navigare fino alla posizione del file.';
ufe10='Continuare l’aggiornamento?';
ufe11='Alla fine del processo di aggiornamento, il router potrebbe non rispondere ai comandi per un intervallo massimo di tre minuti. Questo è normale. Non spegnere o riavviare il router durante tale intervallo.';
ufe12='Versione del firmware';
um1='Questa schermata consente di gestire diversi parametri del router ed eseguire alcune specifiche funzioni amministrative.';
um5='Riavvia il router';
um6='A volte è consigliabile resettare o riavviare il router se comincia a non funzionare correttamente. Il reset o il riavvio del router non cancellano le impostazioni di configurazione.';
um7='Ripristina impostazioni predefinite';
um8='Con questa opzione è possibile ripristinare tutte le impostazioni eseguite dal produttore del router. Prima di ripristinare le impostazioni predefinite, è consigliabile eseguire un backup delle proprie impostazioni.';
um9='Salva/Crea Backup delle impostazioni correnti';
um10='Questa opzione consente di salvare la configurazione attuale. Salvando la configurazione corrente è possibile ripristinarla in un momento successivo nel caso le impostazioni andassero perdute o venissero modificate. Prima di eseguire un aggiornamento del firmware, è consigliabile eseguire un backup della configurazione attuale.';
um11='Ripristino delle impostazioni precedenti';
um12='Questa opzione consente di ripristinare qualsiasi configurazione precedentemente salvata.';
um13='Aggiornamento del firmware';
um14='Di tanto in tanto, Belkin potrebbe creare nuove versioni del firmware del router. Gli aggiornamenti del firmware contengono alcuni miglioramenti e consentono di risolvere possibili problemi esistenti nelle versioni precedenti. ';
um15='Impostazioni del sistema';
um16='La pagina "Impostazioni di sistema" consente di inserire una nuova password amministratore';
um17=', imposta il fuso orario, abilita la gestione remota e attiva/disattiva la funzione NAT del router.';
um18=' del router.';
not='non';
pwd='Password';
uprev1='Utility > Ripristina impostazioni salvate precedenti';
uprev2='Questa opzione consente di ripristinare qualsiasi configurazione precedentemente salvata.';
Restore='Ripristina';
uprev3='Digitare il nome del file contenente le impostazioni di backup.';
uprev4='Continuare e ripristinare le impostazioni?';
uprev5='Una volta ripristinate le impostazioni, il router potrebbe non rispondere ai comandi anche per 60 secondi.\nÈ normale. Non spegnere il router durante questo intervallo.';
ueco1='Utility > Impostazioni Eco';
ueco2='ECO is a mode about "energy saving" mode';
ur1='Utility > Riavvia router';
ur2='A volte, se inizia a funzionare in modo scorretto, il router deve essere riavviato. Il reset o il riavvio del router non comportano la cancellazione di nessuna delle impostazioni di configurazione. Fare clic sul pulsante &quot;Riavvia router&quot; qui sotto per riavviare il router.';
ur3='Riavvia il router';
ur4='Riavviare il router? Il riavvio del router non influenzerà la configurazione.';
ur5='Attendere 30 secondi perché il router si riavvii. Non spegnere il router fino a quanto il reset non sarà terminato.';
ur6='Attendere 60 secondi perché il router si riavvii. Non spegnere il router fino a quanto il reset non sarà terminato.';
usave1='Utility > Salva/Crea backup delle impostazioni attuali';
usave2='Questa opzione consente di salvare la configurazione attuale. Salvando la configurazione corrente è possibile ripristinarla in un momento successivo nel caso le impostazioni andassero perdute o venissero modificate. Prima di eseguire un aggiornamento del firmware, è consigliabile eseguire un backup della configurazione attuale.';
Save='Salva';
usys1='Utility > Impostazioni del sistema';
usys2='Password Amministratore';
usys3='Il router viene fornito SENZA password. Per ottenere una maggiore protezione, è possibile scegliere una password qui di seguito.';
usys4='Digitare la password attuale ';
usys5='Digitare la nuova password';
usys6='Confermare la nuova password ';
usys7='Timeout per la connessione';
usys8='(1-99 minuti)';
usys9='Orario e fuso orario ';
January='gennaio';
February='febbraio';
March='marzo';
April='aprile';
May='maggio';
June='giugno';
July='luglio';
August='agosto';
September='settembre';
October='ottobre';
November='novembre';
December='dicembre';
usys10='Impostare il proprio fuso orario. Se nella propria area vige l\'ora legale, selezionare questa casella.';
usys11='Fuso orario';
usys12='(GMT-12:00) Enewetak, Kwajalein';
usys13='(GMT-11:00) Midway Island, Samoa';
usys14='(GMT-10:00) Hawaii';
usys15='(GMT-09:00) Alaska';
usys16='(GMT-08:00) Pacific Time (USA & Canada); Tijuana ';
usys17='(GMT-07:00) Arizona ';
usys18='(GMT-07:00) Montagne Rocciose (USA e Canada), New Mexico  ';
usys19='(GMT-06:00) CittÅ• del Messico ';
usys19a='(GMT-06:00) Ora centrale (USA e Canada), Chicago ';
usys20='(GMT-06:00) Tegucigalpa ';
usys21='(GMT-06:00) Saskatchewan ';
usys22='(GMT-05:00) Bogota, Lima, Quito ';
usys23='(GMT-05:00) Eastern Time (USA & Canada) ';
usys24='(GMT-05:00) Indiana (Est) ';
usys25='(GMT-04:00) Atlantic Time (Canada) ';
usys26='(GMT-04:00) Caracas, La Paz ';
usys27='(GMT-04:00) Santiago ';
usys28='(GMT-03:00) Newfoundland ';
usys29='(GMT-03:00) Brasilia ';
usys30='(GMT-03:00) Buenos Aires, Georgetown ';
usys31a='(GMT-02:00) Mid-Atlantic ';
usys32='(GMT-01:00) Azzorre, Isola di Capo Verde ';
usys33='(GMT) Casablanca, Monrovia ';
usys34='(GMT) Greenwich Mean Time: Lisbona, Londra, Edimburgo ';
usys35='(GMT) Greenwich Mean Time: Dublino ';
usys36='(GMT+01:00) Amsterdam, Berlino, Berna, Roma ';
usys37='(GMT+01:00) Stoccolma, Vienna, Belgrado ';
usys38='(GMT+01:00) Bratislava, Budapest, Lubiana ';
usys39='(GMT+01:00) Praga, Bruxelles, Copenhagen, Madrid ';
usys40='(GMT+01:00) Parigi, Sarajevo, Skopje ';
usys41='(GMT+01:00) Varsavia, Zagabria ';
usys42='(GMT+02:00) Atene, Istanbul, Minsk, Vilnius, Sofia ';
usys43='(GMT+02:00) Bucarest ';
usys43a='(GMT+02:00) Israele ';
usys44='(GMT+02:00) Cairo ';
usys45='(GMT+02:00) Harare, Pretoria ';
usys46='(GMT+02:00) Helsinki, Riga, Tallinn ';
usys48='(GMT+03:00) Bagdad, Kuwait, Nairobi, Riyadh ';
usys50='(GMT+03:00) Mosca, San Pietroburgo,Volgograd, Kazan ';
usys50b='(GMT+03:30) Teheran ';
usys51='(GMT+04:00) Abu Dhabi, Muscat, Tbilis ';
usys52='(GMT+04:30) Kabul ';
usys53='(GMT+05:00) Islamabad, Karachi, Ekaterinburg ';
usys53a='(GMT+05:30) Chennai, Calcutta, Bombay, Nuova Delhi ';
usys54='(GMT+06:00) Almaty, Dhaka ';
usys55='(GMT+07:00) Bangkok, Jakarta, Hanoi ';
usys56='(GMT+08:00) Pechino, Chongqing, Urumqi ';
usys57='(GMT+08:00) Hong Kong, Perth, Singapore, Taipei ';
usys58='(GMT+09:00) Tokyo, Osaka, Sapporo ';
usys58a='(GMT+09:00) Seoul ';
usys96='(GMT+09:30) Adelaide, Darwin ';
usys59='(GMT+10:00) Brisbane ';
usys60='(GMT+10:00) Canberra, Melbourne, Sydney ';
usys61='(GMT+10:00) Guam, Port Moresby ';
usys62='(GMT+10:00) Hobart ';
usys63='(GMT+11:00) Magadan, Isole Salomone, Nuova Caledonia ';
usys64='(GMT+12:00) Wellington, Auckland ';
usys65='(GMT+12:00) Fiji, Kamchatka, Marshall ls. ';
usys97='(GMT+13:00) Nuku `alofa.';
usys66='Ora legale';
usys67='Regolazione automatica dell\'ora legale';
printps='Server NTP primario';
bakntps='Server NTP di backup';
usys68='Controllo remoto:   ';
AF='FUNZIONE AVANZATA!';
usys69='La gestione a distanza consente di modificare le impostazioni del router da qualsiasi punto di Internet. Prima di attivare questa funzione';
usys70='ACCERTARSI DI AVER IMPOSTATO LA PASSWORD AMMINISTRATORE.';
usys71='Qualsiasi indirizzo IP è in grado di gestire a distanza il router.';
usys72='Soltanto questo indirizzo IP è in grado di gestire a distanza il router ';
usys73='Abilitazione NAT';
usys74='Consente di disattivare la funzione NAT. NON è quasi mai opportuno disattivare questa funzione. ';
usys75='Abilita/Disabilita NAT';
 
usys76='Abilitazione UPnP:   ';
usys77='Consente di attivare e disattivare la funzione UPnP del router. Se si usano applicazioni che supportano l\'UPnP, l\'abilitazione dell\'UPnP consente di configurare automaticamente il router. ';
usys78='Abilita / Disabilita UPnP';
usys79='Abilitazione aggiornamento automatico firmware ';
usys80='Consente di verificare automaticamente la disponibilità di aggiornamenti del firmware del router.';
usys81='Abilita/disabilita aggiornamento automatico del firmware';
usys82='Password attuale non valida';
usys83='La nuova password e la conferma della nuova password non corrispondono';
usys83_1='I campi Password e Confermare password non coincidono.';
usys84='Il tempo di inattivita\' per I numeri inseriti non e\' valido. Il numero deve essere un intero compreso tra 1-99';
usys84_1='Il numero digitato per l\'intervallo di inattività non è valido. Il numero deve essere un\'unità intera compresa tra 1 e 99.';
usys85='La lunghezza della password non è valida. La lunghezza massima della password è 12 e la lunghezza minima della password è 3';
usys85_1='La lunghezza della password Amministratore deve essere compresa tra 1 e 63.';
usysntp='Two NTP Server IP address can not be the same.';
usys86='Nella casella di scelta dell\'indirizzo nella barra di stato del browser, inserire manualmente l\'indirizzo LAN predefinito.';
usys87='Si consiglia di impostare la propria password amministratore.';
usys88='The password has reached its max length!';
usys89='AM';
usys90='PM';
usys91='Porta di accesso remoto';
usys92='La porta di accesso remoto non e\' valida. La porta valida deve essere in 1-65535.';
usys93='Utilizzare questa funzionalità per risparmiare energia.';

usys94='IGMP Proxy';
usys95='IGMP Proxy Abilita / Disabilita ';

usysipm='Non sono stati inseriti tutti i numeri IP o alcuni dei numeri inseriti non sono validi\'. L\'indirizzo IP deve essere x.y.y.x (dove y è qualsiasi valore da 0 a 25 e x qualsiasi valore da 1 a 254).';
usysipm_1='Non sono stati inseriti tutti i numeri IP o alcuni dei numeri inseriti non sono validi. I numeri devono essere compresi fra 0 e 255.';
self_healing='Stato > Manutenzione regolare';
self_healing1='Una reinizializzazione regolare del router aiuta a mantenere la rete libera da eventuali problemi';
self_healing2='Auto inizializzare il mio router';
self_healing3='Impostare giorni';
self_healing4='DOM';
self_healing5='LUN';
self_healing6='MAR';
self_healing7='MER';
self_healing8='GIO';
self_healing9='VEN';
self_healing10='SAB';
self_healing11='Impostare ora';
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
chkwait='Ricerca di firmware più recenti...';
Europe='Europe';
Australia='Australia e Nuova Zelanda ';
AsiaPacific='Asia Pacifico';
NorthAmerica='Nord America';
wrhtpsswd='<b>Incorrect Password</b><br>Please confirm your password and try again.';
usysb1='Il router viene fornito SENZA password. Per ottenere una maggiore protezione, è possibile scegliere una password qui di seguito.';
vjs1='Indirizzo IP non valido, troppo lungo, verificare nuovamente';
vjs2='Indirizzo IP non valido, \'.\' mancante, verificare nuovamente';
vjs3='Indirizzo IP non valido, numeri mancanti fra \'.\', verificare nuovamente';
vjs4="Indirizzo IP non valido, '.' in più , verificare nuovamente";
vjs5='Indirizzo IP non valido, numeri fra \'.\' troppo grandi, verificare nuovamente';
vm1='Carattere non valido ';
vm2='nella posizione';
vm3='Deve essere ';
vjs6='Formato dell\'anno non valido, inserire come (per esempio 2002)';
vm4='Numero non valido  ';
vjs8='Non valido, deve essere compreso fra 1970 e 2037';
vjs9='Formato del mese non valido, inserire come (per esempio 01...12)';
vjs10='Inserire prima l\'anno e il mese';
vjs11='Formato del giorno non valido, inserire come (per esempio 01...31), in alcuni mesi è possibile inserire solo (00...28)';
vjs12='Formato dell\'ora non valido, inserire come (per esempio 00...23)';
vjs13='Formato dei minuti non valido, inserire come (per esempio 00...59)';
vjs14='MTU non valida, deve essere compresa fra 500 e 1500';
vjs15='MRU non valida, deve essere compresa fra 128 e 65535';
vjs16='IP non valido:';
vjs161=' non in ';
vjs162=' maschera di rete';
vjs163='L\'intervallo DHCP consentito è ';
vjs17='Sono state digitate due password diverse, verificare nuovamente!';
vjs18='Inserire un numero per la porta iniziale.';
vjs19='Il numero della porta iniziale deve essere inferiore rispetto al numero della porta finale.';
vjs20='Numero della porta non valido, i numeri delle porte devono essere unità intere positive';
vjs21='Lunghezza non valida';
vjs22='Invalid Format at position ';
vjs23='Indirizzo MAC non valido, è un indirizzo broadcast';
vjs24='Indirizzo MAC non valido, è un indirizzo nullo.';
vjs25='Indirizzo MAC non valido, è un indirizzo multicast';
vjs26='Indirizzo IP iniziale e finale non valido, l\'IP finale deve essere maggiore rispetto all\'IP iniziale';
vjs27='Numero non valido! Deve essere compreso fra 1 e 65535';
vjs28='Formato della maschera di rete non valido.';
vjs29='Formato non valido, la maschera di rete deve essere 255.255.255.0 oppure 255.255.255.128 oppure 255.255.255.192 oppure 255.255.255.224 oppure 255.255.255.240 oppure 255.255.255.248 oppure 255.255.255.252 oppure 255.255.255.254';
vjs30='Indirizzo IP non valido, l\'ultimo numero non può essere 0 né 255.';
vjs31='Indirizzo IP della LAN non valido, il primo numero non può essere 127';
vjs32='Indirizzo IP della LAN non valido, non può essere 0.0.0.0';
vjs33='Indirizzo IP della LAN non valido, deve essere inferiore a 244.0.0.0';
vjs34='La gamma valida è ';
vjs35='The first entry of IP address must be within range 1 - 223.';
vjs36='Invalid network format.';
vjs37='Invalid gateway format.';
vjs38='IP is class A, netmask is invalid.';
vjs39='IP is class B, netmask is invalid.';
vjs40='IP is class C, netmask is invalid.';
vjs41='Invalid network ip, network ip is duplicate';
vjs42='I numeri immessi nel subnet mask sono incorretti.';
vjs43='Indirizzo IP non valido, l\'ultimo numero deve essere compreso tra 1 e 254';
vjs44='Indirizzo DNS non valido. Il primo numero deve essere compreso tra 1 e 223';
vjs45='Specificare indirizzo IP';
vjs46='non valido, correggere prima di procedere';
vjs47='%s è un indirizzo IP non valido, che non rientra nella maschera di sottorete %s.';
dup='Copia amministratore';
wc1='WAN > Tipo di connessione';
wcc2='Scegliere il proprio tipo di connessione ';
wcc3='Dinamico';
wcc4='La connessione dinamica è la più comune. Se si utilizza un modem via cavo, molto probabilmente si utilizza una connessione dinamica. Se si utilizza un modem via cavo o se non si è certi del proprio tipo di connessione, usare questo';
wcc5='Statico';
wcc6='La connessione con indirizzo IP statico è meno frequente. Utilizzare questa opzione soltanto se il proprio ISP ha fornito un indirizzo IP che non cambia mai.';
wcc7='PPPoE';
wcc8='Se si utilizza un modem DSL e/o il proprio ISP ha fornito un Nome Utente e una Password, il proprio tipo di connessione è PPPoE. Utilizzare questo tipo di connessione';
wcc9='PPTP';
wcc10='[Valido soltanto per i paesi europei]. Questo tipo di connessione è più diffuso nei paesi europei. Se l’ISP avesse specificatamente indicato di utilizzare il protocollo PPTP ed avesse fornito le informazioni PPTP adatte, utilizzare questa opzione.';
wcc11='Cavo Telstra Bigpond/OptusNet';
wcc12='Usare questa opzione solamente per le connessioni via cavo Bigpond e OptusNet.';


wcc12_a='Usare questa opzione per le connessioni con il Cavo Bigpond e il cavo OptusNet.';
wcc13='L2TP';
wcc14='[Israel Only]. This type of connection is most common in Israel. If your ISP has specifically told you that you use L2TP and has supplied you with the proper L2TP information, then use this option.';
wcc15='Multi-PPPoE';
wcc16='[Japan Only] This type of connection is a unique function in Japan which is required for those who subscribe NTT\'s broadband Internet.';
Next='Avanti';
wds1='WAN > DNS';
wds2='Se il vostro provider vi ha segnalato un indirizzo DNS specifico da utilizzare, inserirlo in questa finestra e fare clic su "Applica modifiche" ';
wds2_1='Se il provider ha fornito impostazioni DNS specifiche, inserirle qui.';
wds3='Automatico da ISP ';
wds3_1='Automatico da ISP';
wds4='Indirizzo DNS';
wds4_1='Indirizzo DNS primario';
wds5='Indirizzo DNS secondario ';
wds5_1='Indirizzo DNS secondario';
wds6='DNS = Domain Name Server. Un server presente in Internet che traduce gli URL (Universal Resource Links) come "www.belkin.com" in indirizzi IP.Inserire le impostazioni DNS fornite dall\'ISP se non si utilizza la funzione DNS automatico.';
wds6_1='DNS = Domain Name Server, un server presente in Internet che traduce gli URL come www.belkin.com in indirizzi IP.';
wds7='Inserire le impostazioni DNS fornite dall\'ISP se non si utilizza la funzione DNS automatico';
wds8='Per modificare i parametri DNS, visitare prima "%s Filtri siti web %s" e selezionare "Nessun filtro".';
wdy1='WAN > Tipo di connessione > IP dinamico';
wdy2='Per inserire le proprie impostazioni IP dinamiche, digitare le proprie informazioni in basso e fare clic su "Applica modifiche"';
wdy3='Nome host';
wdy4='Nome host = Un nome che alcuni provider ISP richiedono per collegarsi al loro sistema.';
wdy5='Modifica dell\'indirizzo WAN MAC ';
wdy6='Nome host non valido: ~!@##$%^&*()=+{}[]|\'\\\":;?/.<> ';
wmc1='WAN > Indirizzo MAC';
wmc2='Alcuni provider richiedono che l’indirizzo MAC della propria scheda di rete venga clonato (copiato) nel router. Nel dubbio, è sufficiente clonare l’indirizzo MAC del computer originariamente collegato al modem prima di installare il Router. La clonazione dell’indirizzo MAC non causa alcun problema alla rete.';
wmc3='Indirizzo MAC WAN';
wmc4='Clona indirizzo MAC del computer';
wmc5='Clona';
wmc6="L'indirizzo MAC WAN non può essere uguale all'indirizzo MAC LAN. Sceglierne un altro.";
wdd1='Firewall > DDNS';
wdd2='Il DNS dinamico consente di offrire agli utenti Internet un nome di dominio fisso (invece di un indirizzo IP che potrebbe variare periodicamente), cosicché sia possibile l\'accesso al router e alle applicazioni impostate nei server virtuali del router stesso da diverse postazioni Internet, senza conoscere l\'indirizzo IP corrente dell\'utente. Questo router senza fili supporta il DNS dinamico da DynDNS.org (<A href="http://www.dyndns.org/"><B>http://www.dyndns.org</B></A>). È necessario creare un account prima di utilizzare questo servizio.';
wdd3='DDNS Service';
wdd4='DDNS Status';
wdd5='Web Site';
wdd6='Nome utente';
wdd7='Password';
wdd8='Nome del dominio';
wdd9 ='Nessun servizio DDNS selezionato.\n';
wdd10='Nessun servizio DDNS selezionato. Tutti i dati presenti nella pagina andranno persi, continuare?';
wm1='Internet/WAN';
WAN='Internet WAN';
wm2='Nella scheda Internet WAN viene impostato il router per collegarsi al proprio provider di servizi Intenet. Il router è in grado di collegarsi praticamente a qualsiasi sistema di provider Internet, a condizione che le impostazioni del router siano state configurate correttamente per il proprio tipo di connessione ISP. Per configurare il router in modo che si colleghi al proprio ISP, fare clic su Tipo di connessione nella finestra Internet/WAN a sinistra sullo schermo.';
wm3='Tipi di connessione supportati: ';
wm4='Dinamica';
wm4b='comprende gli ISP che richiedono un nome host e gli ISP che collegano la connessione a un indirizzo MAC specifico. ';
wm5='Indirizzo IP statico';
wm5b='il router supporta una connessione a un ISP che assegna un indirizzo IP statico.  ';
wm6='PPPoE';
wm6b=' il router supporta un tipo di connessione dinamica che richiede un login PPPoE per l\'autenticazione';
wm7='PPTP';
wm7b='ESCLUSIVAMENTE per l’Europa. Il router supporta le connessioni ai provider ISP europei che si collegano via PPTP.  ';
wm10='L2TP';
wm10b='Solo per i provider di servizi Internet che richiedono una connessione L2TP.';
wpe1='WAN > Tipo di connessione> PPPoE';
wpe2='Per inserire le proprie impostazioni PPPoE, digitare le proprie informazioni in basso e fare clic su "Applica modifiche".';
wpe3='Nome utente';
wpe4='Conferma password   ';
wpe5='Nome servizio (opzionale)  ';
wpe6='MTU (500-1500)   ';
wpe7='Non modificare le impostazioni MTU a meno che il proprio provider non richieda esplicitamente un’impostazione diversa da 1454.';
wpe8='Disconnetti dopo';
wpe9='minuti di inattività. ';
idlerangerro='Intervallo di inattività dei numeri indicati non valido.\n Il numero deve essere un\'unità intera compresa tra 1 e 99.';
wpe10='Carattere non valido: <>&';
wptid='Carattere non valido: "';
pm='Il servizio non è stato in grado di verificare la password inserita. Confermare di avere digitato la password corretta.';
pm_1='Le nuove password inserite non coincidono. Provare nuovamente.';
wpe11='Valore MTU non valido';
wpe12='Digitare il nome utente';
wmpe1='WAN > Connection Type > Multi-PPPoE';
wmpe2='To enter your Multi-PPPoE settings, type in your information below and click "Apply changes".';
wmpe3='Description';
wmpe4='PPPoE Account';
wmpe5='Retype Password';
wmpe6='Service Name (Optional)';
wmpe7='MTU (1440-1454)';
wmpe7_1='MTU non valida, deve essere compresa fra 1440 e 1454';
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
wpp4='Conferma password   ';
wpp6='Indirizzo IP';
wpp7='Subnet Mask     ';
wpp14='Ridigitare la password';
wpp15='Digitare la password';
wpp16='WAN > Connection Type > L2TP';
wpp17='L2TP Account';
wpp18='L2TP Password';
wpp19='Please enter your L2TP Account';
wpp20='IP assegnato dall\'ISP';
wpp21='YES';
wpp22='NO';
wpp23='Assegnazione dell\'indirizzo IP';
wpp24='Usare indirizzo IP statico';
wpp25='Ottieni in modo dinamico dal provider';
wppa1='WAN > Tipo di connessione> PPTP';
wppa2='Account PPTP   ';
wppa3='Password PPTP    ';
wppa4='Conferma password   ';
wppa5='Nome host';
wppa6='Indirizzo IP di servizio ';
wppa7='Indirizzo IP personale';
wppa8='Subnet Mask personale';
wppa9='ID di connessione (opzionale)   ';
wppa10='Disconnetti dopo';
wppa11=' minuti di inattività';
wppa12='Fare clic qui per inserire le proprie impostazioni DNS ';
wppa13='Inserire l\'account PPTP';
wppa14='Ridigitare la password';
wppa15='Digitare la password';
wppa16='Indirizzo IP';
wppa17='Indirizzo IP di servizio';
wppa18='Nome servizio invalido.';
ws1='WAN > Tipo di connessione > IP statico';
ws2='Per inserire le proprie impostazioni IP statiche, digitare le informazioni in basso e fare clic su "Applica modifiche".';
ws3='Indirizzo IP';
ws4='Subnet Mask     ';
ws5='Indirizzo gateway ISP   ';
ws6='L\'ISP mi ha fornito diversi indirizzi IP statici';
ws7='Fare clic qui per inserire le proprie impostazioni DNS  ';
dm='Non sono stati inseriti tutti i numeri DSN, oppure alcuni dei numeri inseriti non sono validi. I numeri devono essere 0 o 25, oppure compresi fra 0 e 25.';
sm='I numeri della Subnet mask inseriti non sono validi.';
sm_1='I numeri della maschera di sottorete inseriti non sono validi.';
ws8='Inserire/confermare le impostazioni dell\'indirizzo DNS dalla schermata seguente';
ws9='IP Address is same with Alias IP Address, please change one or remove one!';
ws10='Gateway Predefinito';
wsc1='Indirizzo IP alias  ';
im='L\'elenco degli indirizzi IP alias è pieno. Impossibile creare altre regole.';
wt1='IMPORTANTE';
wt2='Se si clicca su Applica modifiche il router si riavvia. Una volta riavviato il router, fare quanto segue';
wt3='1) Disconnettere il cavo di alimentazione dal modem via cavo e dal router Belkin';
wt4='2) Ricollegare il cavo di alimentazione al modem via cavo, attendere fino a quando tutte le luci smettono di lampeggiare';
wt5='3) Ricollegare il cavo di alimentazione al router Belkin';
wt6="Per confermare l'avvenuta connessione a Internet, aprire un browser Internet, come Internet Explorer, Firefox e Safari ed assicurarsi di poter navigare.";
Logout = 'Disconnetti';
wla1='Wireless > Usa come Punto di Accesso';
wlad1='Il router può essere configurato per funzionare esclusivamente come punto di accesso, bypassando tutte le funzioni di instradamento e di firewall. Per farlo, selezionare "Attiva" e digitare l’indirizzo IP che si desidera assegnare al Punto di Accesso.';
wlad2='Abilita / Disabilita';
wlae1='Specifica indirizzo IP ';
wlae2='Subnetmask ';
wlae3='Nella casella di scelta dell\'indirizzo nella barra di stato del browser, inserire manualmente l\'indirizzo LAN.';
wlc1='Wireless > Canale e SSID';
wlc2='Per modificare le impostazioni wireless del router, eseguire le modifiche da qui. Fare clic su "Applica modifiche" per salvare le impostazioni.';
wlc3='Canale wireless';
wlc4='SSID';
wlcwch='Extension Channel';
wlc5='Modalità wireless';
wlcgb='802.11b+g';
wlcg='802.11g';
wlcb='802.11b';
wlc9='SSID di broadcast';
wlc10='Modalità Turbo';
wlc11="L'abilitazione della modalità Turbo consente al router o al punto di accesso di utilizzare il frame bursting per ottenere il flusso massimo dal router o dal punto d'accesso verso i client 802.11g. La modalità Turbo funziona con i client 802.11g che supportano tale modalità. I client Belkin 802.11g in possesso del driver più recente potranno supportare la modalità Turbo. I client che non supportano la modalità Turbo potranno lavorare normalmente con questa abilitata.";
wlc12='Modalità protetta';
wlc13="NOTA BENE: nella maggior parte dei casi, la performance migliore (flusso) si ottiene con la modalità protetta disattivata. Trovandosi in un ambiente con traffico o interferenza 802.11b ELEVATI, le migliori prestazioni si ottengono con la modalità protetta ATTIVATA.";
wlc14='UTILIZZA un Punto di Accesso';
wlc15="Se si utilizza il router come Punto di Accesso, è necessario specificare un indirizzo IP per il punto di accesso. L'indirizzo IP deve rientrare nella stessa gamma della rete alla quale ci si connette. Per accedere nuovamente all'interfaccia d'impostazione del router, digitare l'indirizzo IP nel browser Web ed effettuare il login.";
wlc16='Wireless > EWC Setting';
wlc17='Bandwidth';
wlc18='Control Sideband';
wlc19='NPHY Rate';
wlc20='20MHz';
wlc21='40MHz only';
wlc22='20/40MHz';
wlc22a='20/40/80MHz';
wlc23='Utilizzo dello switch wireless. Questo switch consente di impostare le modalità wireless del router. Sono disponibili quattro possibilità. <br>1) OFF<br>Questa modalità disattiva il punto di accesso del router, così nessun dispositivo wireless può accedere alla rete. La disattivazione della funzione wireless del router è eccellente per garantire la sicurezza della rete, quando essa non viene utilizzata per un lungo periodo, o se ad un certo momento non si desidera utilizzare la funzione wireless del router.<br>2) Solo 802.11g<br>Impostando il router in questa modalità, sarà possibile accedere alla rete soltanto con dispositivi compatibili con 802.11g, escludendo qualsiasi dispositivo più lento 802.11b.<br>  3) Solo 802.11n<br>Impostando il router in questa modalità, sarà possibile accedere alla rete soltanto con dispositivi compatibili con 802.11n, escludendo qualsiasi dispositivo più lento 802.11b e 802.11g.<br> 4) 802.11n e 802.11g e 802.11b<br>Impostando il router in questa modalità, sarà possibile accedere alla rete con dispositivi compatibili con 802.11n, 802.11g e 802.11b. <br>';
wlcoff='Spento  ';
wlcngb1='802.11b & 802.11g & 1x1 802.11n';
wlcn1='1x1 802.11n';
wlcngb2='802.11b & 802.11g & 802.11n';
wlcn2='802.11n';
wlca='802.11a';
wlcan='802.11a & 802.11n';
wlcgn='802.11g+n';
wlcnac='802.11n & 802.11ac';
wlcanac='802.11a & 802.11n & 802.11ac';
wlc24='Ci sono quattro modi in banda di 5GHz.';
wlc25='1) 802.11a solo <br> Impostare il router a questa modalità solo consentirà 802.11a dispositivi conformi ad aderire alla rete. <br> 2) 802.11a & 802.11n <br> Impostare il router a questa modalità consentirà 802.11ae 802.11n dispositivi conformi ad aderire alla rete. <br> 3) 802.11n solo <br> Impostare il router a questa modalità, saranno ammesse solo le periferiche compatibili con 802.11n per unire, tenere fuori lento dispositivi 802.11a. <br> 4) Spento <br> Questa modalità si spengono il router Wi-Fi, in modo che nessun dispositivi wireless possono collegarsi alla rete. Spegnere la funzione wireless del tuo router è un ottimo modo per proteggere la rete quando si è lontani da casa per un lungo periodo di tempo, o non si desidera utilizzare la funzione wireless del router in un certo momento. <br>';
wlc26='Se si nasconde il nome della rete, il WPS sarà disabilitato.';
wlc27='Se si modifica il tipo di sicurezza, il WPS sarà disabilitato.';
wlc28='Il WPS è stato disabilitato a causa del <A href=%s><B>tipo di sicurezza wireless</B></A>.';
wlc29='Il WPS è stato disabilitato perché il nome della rete (SSID) è stato nascosto.';
wlc30='Il WPS è stato disabilitato perché il nome della rete (SSID) è stato nascosto e a causa del <A href=%s><B>tipo di sicurezza wireless</B></A>.';
wlc31='Se si attiva il WPS, il nome della rete (SSID) sarà reso visibile.';
wlc32='Se si attiva il WPS, il tipo di sicurezza sarà modificato a WPA/WPA2. L\'attuale password di rete funzionerà senza problemi.';
wlc33='Se si attiva il WPS, il nome della rete (SSID) sarà reso visibile e il tipo di sicurezza sarà modificato a WPA/WPA2. L\'attuale password di rete funzionerà senza problemi.';
wlc34='Prima di attivare il WPS, sarà necessario modificare il tipo di sicurezza a WPA/WPA2 e selezionare una nuova password di rete.';
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

wlm1='Senza fili';
wlm2='In questa scheda è possibile modificare le impostazioni in base alla sezione Wireless del router';
wlm3='Canale e SSID';
wlm4='Regola le impostazioni del canale wireless e SSID (nome di rete wireless)';
wlm5='Protezione';
wlm6='Modifica le impostazioni della protezione wireless, come le impostazioni WPA o quelle WEP';
wlm7='Utilizza come Punto di Accesso';
wlm8='Imposta la modalità operativa del router in modalità AP';
wlm9='Specifica l\'indirizzo IP';
wlm10='Specifica l\'indirizzo IP dell\'AP';
wlm11='Controllo indirizzi MAC';
wlm12='Creare un elenco di client a cui consentire o negare l\'accesso alla rete senza fili.';
wle1='Wireless > Protezione';
wle2='Modalità protezione';
wle2a='Disabilita';
wle2b='WPA/WPA2-Personal(PSK)';
wle2c='WEP a 128 bit';
wle2d='WEP a 64 bit';
wle3='Autenticazione';
wle3a='WPA-PSK';
wle3b='WPA2-PSK';
wle3c='WPA-PSK + WPA2-PSK';
wle7="È possibile configurare qui le impostazioni della protezione/crittografia senza fili. La protezione deve essere abilitata, al fine di garantire il massimo della sicurezza wireless. Il sistema WPA (Wireless Protected Access) fornisce modifiche dinamiche della chiave ed è la soluzione di protezione migliore. In ambienti wireless, in cui non tutti i dispositivi supportano il WPA, è bene utilizzare il WEP (Wired Equivalent Privacy).";
bit64WEP='64bit WEP';
bit128WEP='128bit WEP';
WPAPSK='WPA/WPA2-Personal(PSK)';

wps1='Accesso protetto WI-FI';
wps2='Senza fili >Accesso protetto WI-FI';
wps3='Configurare la protezione wireless';
wps4='Configurazione protetta Wi-Fi (WPS) è il metodo standard per semplificare l\'impostazione e la gestione della sicurezza nelle reti Wi-Fi. Ora è possibile configurare e connettere a una rete compatibile con WPA 802.11 con dispositivi certificati WPS utilizzando il PIN o il Push Button Configuration (PBC) (configurazione mediante il pulsante). I dispositivi di vecchia generazione senza WPS possono essere collegati alla rete utilizzando il tradizionale metodo di configurazione manuale.';
wps5='1) Metodo con il codice PIN';
wps6='Usa il metodo con il codice PIN WPA sul dispositivo client dalla utility wireless o WPS dall\'applicazione. Quindi inserire il PIN del dispositivo client e fare clic su "Enroll" entro due minuti';
wps7='Inserire PIN del Dispositivo Client';
wps8='Enroll';
wps9='Se è disponibile un registro esterno, è possibile inserire il PIN del router dal registro esterno. Per cambiare il PIN del router,f are click su "Generate New PIN"(generare nuovo PIN) oppure su "Restore Default PIN" (ripristinare PIN predefinito) per ripristinare il PIN predefinito.';
wps10='PINdel Router :';
wps11='Genera nuovo PIN';
wps12='Ripristinare PIN predefinito';
wps13='2) Usa il metodo Push Button Configuration (PBC) (configurazione mediante il pulsante)';
wps14='Tenere premuto il tasto PBC del router per 3 secondi oppure fare clic su "Start PBC" (avvia tramite PBC). Quindi avviare il PBC dal dispositivo che si vuole connettere al router entro 2 minuti.';
wps15='Avvia PBC';
wps16='3) Configurazione metodo manuale';
wps17_1='per il dispositivo client senza WPS, configurare manualmente il dispositivo includendo le seguenti impostazioni.';
wps17='Per i dispositivi client senza WPS, avviare il programma di installazione guidata della protezione utilizzando il CD o configurare manualmente tramite le seguenti impostazioni.';
wps18='Configurazione del router:';
wps19='Configurato';
wps20='Nome della rete (SSID) :';
wps21='Non configurato';
wps22='Autenticazione di rete :';
wps23='WPA-PSK + WPA2-PSK';
wps24='Crittografia dati :';
wps25='TKIP+AES';
wps26='Chiave di rete (PSK) :';
wps27='Chiave di rete (WEP):';
wps28='AUTO';
wps28_1='NULL';
wps29='WPS';
wps30='La Configurazione protetta Wi-Fi (WPS) è il metodo standard per semplificare l\'impostazione e la gestione della sicurezza nelle reti Wi-Fi.';
wps31='Protezione wireless:';
wps32='Taso Hardware WPS';
wps33='Sblocca PIN del router';
wps_msg1='Messaggio Wi-Fi protected setup';
wps_msg2='PIN non valido! Il PIN del dispositivo è composto da otto cifre. Verificarlo e inserirlo di nuovo.';
wps_msg3='Cheksum del PIN non riuscito! Verificare il PIN e inserirne uno valido.';
wps_msg4='Iniziazione - si prega di avviare il WPS PBC dal dispositivo client entro due minuti.';
wps_msg5='In corso - Attendere...';
wps_msg6='Si è verificato un errore - Ritentare ancora';
wps_msg7='Operazione riuscita - Il dispositivo è collegato al Router';
wps_msg8='E\' stata rilevata una sovrapposizione tra sessioni: per cortesia aspettare 60 secondi e riavviare il processo, o riferirsi al client utility per connettersi a questo network manualmente.';
wps_msg9='Intervallo di inattività - Nessun cliente si collega al router';
wps_msg10='PIN del router disabilitato a causa degli eccessivi tentativi di accesso';
wwmm1='QoS Configuration';
wwmm2='Configurazione QoS (Qualità del servizio)';
wwmm3="La QoS dà la priorità a dati importanti nella rete, quali contenuti multimediali e Voice over IP (VOIP), in modo tale da non ricevere interferenze da altri dati inviati all'interno della rete. Questa opzione, basata sulla tecnologia 802.11e, può essere attivata o disattivata, e si può scegliere il tipo di modalità che si vuole usare. Se si vogliono trasferire stream multimediali o usare VOIP all'interno della rete, l'opzione QoS deve essere attivata.";
wwmm4='802.11e/WMM QoS';
wle8='(13 coppie di caratteri esadecimali)';
wle9='NOTA BENE: ';
wle10='per generare automaticamente le coppie esadecimali utilizzando una frase di accesso, selezionare la casella a sinistra e inserire qui la frase di accesso.';
PP='Frase di accesso';
generate='genera';
errm='Inserire una frase di accesso';
keym='La chiave non è completa';
wle11='Chiave 1';
wle12='Chiave 2 ';
wle13='Chiave 3';
wle14='Chiave 4  ';
wle15='(coppie di caratteri esadecimali)';
keym1=' non è completo';
keym2='non è valido, correggere prima di procedere';
wwp2='Chiave precondivisa (PSK)';
wwp3='WPA-PSK (no server)';
wwp4='Accesso wireless protetto con chiave precondivisa: la chiave è una password in forma di parole, frasi o serie di lettere e numeri. La lunghezza della chiave deve essere compresa fra 8 e 63 è può comprendere spazi e simboli oppure solo 64 caratteri esadecimali (0-F). Ogni client che si connette alla rete deve utilizzare la stessa chiave (chiave precondivisa). ';
wwp5='Oscura PSK';
wls_sec_msg='E\' consigliabile usare WPA/WPA2 quando e\' attivo il WPS.';
wguest2='Guest Settings';
wguest3='Accesso Guest';
wpskerr1='La lunghezza della chiave precondivisa deve essere compresa fra 8 e 63 o 64 caratteri esadecimali';
wpskerr2='La lunghezza della chiave deve essere compresa fra 8 e 63 è può comprendere spazi e simboli oppure solo 64 caratteri esadecimali (0-F)!';
wpskerr4='You must input the Guest Pre-shared Key (PSK)';
wpskerr7='La chiave guest deve contenere 8 caratteri';
wpskerr8='La chiave guest deve essere diversa dalla chiave di rete';
wlguest1='L\'SSID deve essere diverso dall\'SSID guest';
wlguest2='L\'SSID guest deve essere diverso dall\'SSID';
ww3='Tecnica di crittografia';
wlmc1='Senza fili > Controllo dell\'indirizzo MAC';
wlmc2='Il controllo dell\'indirizzo MAC è la funzione che serve per creare un elenco di client a cui consentire o negare l\'accesso alla rete senza fili.';
Allow='Consenti';
Deny='Nega';
wlmc7='Indicare prima se si desideri consentire o negare l\'accesso all\'elenco di indirizzi MAC';
wlmc6='Impossibile inserire più di 32 indirizzi MAC';
wlmc3='Indirizzo MAC non valido ';
wlmc4='Correggere prima di procedere';
wlmc5='L indirizzo MAC corretto deve essere xx:xx:xx:xx:xx:xx, dove x deve essere compreso fra 0 e 9 e fra a e f.';
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
ENTRY_FULL	=' Le immissioni sono in eccesso.\nEliminare alcune immissioni e riprovare.';
CLEAR_CONFIRM	=' Cancellare l\'immissione? ';
CLEAR_ALL_CONFIRM =' Cancellare tutte le immissioni?';
g1="Per \"indirizzo IP\" si intende l'indirizzo IP interno del router. Per accedere all'interfaccia delle impostazioni avanzate digitare questo indirizzo IP nell'apposita barra indirizzi del browser. Questo indirizzo può essere modificato, se necessario. Per modificare l'indirizzo IP, digitare il nuovo indirizzo IP e fare clic su \"ApplicaModifiche\". L'indirizzo IP scelto dovrebbe essere un IP non instradabile. Esempi di indirizzi IP non instradabili sono";
g2='192.168.x.x (dove x indica qualsiasi cifra tra 0 e 255).<br>';
g3='10.x.x.x (dove x indica qualsiasi cifra tra 0 e 255).<br>';
g4='172.y.x.x (dove y è qualsiasi valore da 16 a 31 e x è qualsiasi valore fra 0 e 255). <br>';
g5='Non è necessario modificare la sottorete Se necessario la subnet mask può essere modificata. Modificare la Subnet Mask solo seesiste un motivo specifico per farlo.<br>';
g6="DNS è l'acronimo di Domain Name Server. Un DNS è un server che si trova in Internet e traduce gli URL(Uniform Resource Locator) come www.belkin.com in indirizzi IP. Molti provider Internet non richiedono l'immissione di questo tipo di informazione nel router. Se non è stato inserito alcun indirizzo DNS specifico, selezionare la casella \"Automatico da ISP\". Se si utilizza un tipo di connessione con IP statico, potrebbe essere necessario indicare un indirizzo DNS specifico e un indirizzo DNS secondario affinché la connessione funzioni correttamente. il proprio tipo di connessione fosse dinamico o PPPoE, è probabile che non sia necessario inserire un indirizzo DNS. Per inserire le impostazioni dell'indirizzo DNS, deselezionare la casella \"Automatico da ISP\" e inserire il proprio DNS negli spazi appositi. Fare clic su \"Applica modifiche\" per salvare le impostazioni.<br>";
g6a="Il servizio Dynamic DNS (DNS dinamico) vi permette di trasformare un indirizzo IP dinamico in un nome host statico in uno qualsiasi dei domini offerti dalla DynDNS.org. Ciò permette di accedere ai computer di rete più facilmente da varie postazioni Internet. DynDNS.org offre gratuitamente questo servizio, per un massimo di 5 nomi host, alla comunità Internet. Il servizio \"Dynamic DNSSM\" è ideale per i siti web domestici, file server o per semplificare l'accesso ai file archiviati ed al PC in casa. Con questo servizio si può essere certi che il proprio nome host porti sempre al proprio indirizzo IP, anche se l'ISP lo cambia. Quando l'indirizzo IP cambia, rimanete localizzabili attraverso il sito dyndns.org.Per registrarsi gratuitamente al servizio di nome host DNS dinamico, andare su http://www.dyndns.org. Impostazione dell'aggiornamento client del DNS dinamico del router Prima di poter usufruire del servizio di aggiornamento gratuito, bisogna registrarsi con DynDNS.org. Una volta effettuata la registrazione, seguire le seguenti istruzioni. 1. Inserire il proprio nome utente DynDNS.org nel campo \"Nome utente\" (1).2. Inserire la propria password DynDNS.org nel campo \"Password\" (2). 3. Nel campo \"Nome dominio\" (3), digitare il nome del dominio DynDNS.org creato con DynDNS.org. 4. Fare clic su \"Aggiorna il DNS dinamico\" per aggiornare il proprio indirizzo IP. Ogni volta che l'indirizzo IP fornito dall'ISP cambia, il router aggiornerà automaticamente i server di DynDNS.org con il nuovo indirizzo IP. È possibile effettuare questa operazione anche manualmente, facendo clic sul pulsante \"Aggiorna il DNS dinamico\" (4).<BR>";
g6b='Utilizzo del DNS dinamico';
	
g7="La funzione server DHCP agevola considerevolmente l'impostazione delle reti, assegnando indirizzi IP a ogni computer presente in rete. Se necessario, il server DHCP può essere disattivato. Disattivando il server DHCP è necessario impostare manualmente un indirizzo IP statico in ogni computer della rete. Il pool IP è la gamma di indirizzi IP prevista pre l'assegnazione dinamica ai computer presenti in rete. Il valore predefinito è 2-100 (99 computer), qualora si desiderasse modificare questo numero, digitare un nuovo indirizzo IP iniziale e finale, e fare clic su \"Applica modifiche\".";
g7a="Server DHCP";
g8="Per la propria rete è possibile impostare un dominio locale (nome della rete). Non è necessario modificare questa impostazione, salvo in caso di esigenze avanzate specifiche. È possibile dare alla rete qualsiasi nome, come per esempio \"LA MIA RETE\".<br>";
g9='IP dinamico';
g10="Un tipo di connessione dinamico è il tipo di connessione più comune che si può trovare nei modem via cavo. L'impostazione di una connessione dinamica spesso è sufficiente per completare la connessione al proprio provider. Alcuni tipi di connessione dinamici possono richiedere un nome host. È possibile inserire il proprio nome host nell'apposito spazio, nel caso in cui ne sia stato assegnato uno all'utente. Il nome host viene assegnato dal proprio provider. Per alcune connessioni dinamiche può essere necessario clonare l'indirizzo MAC originariamente connesso al modem. Per farlo, fare clic sul link \"Modifica indirizzo MAC WAN\" sullo schermo. Se il router è stato impostato correttamente, l'indicatore \"Internet Status\" (Stato Internet) visualizzerà il messaggio \"connesso\".<br>";
g11="Il tipo di connessione statico all'indirizzo IP è meno diffuso degli altri tipi di connessione. Se il proprio ISP usa un indirizzo IP statico, è necessario conoscere il proprio indirizzo IP, la Subnet Mask e l'indirizzo ISP gateway. Queste informazioni sono riportate nella documentazione messa a disposizione dal provider. Digitare i propri dati e fare clic su \"Applica modifiche\". Dopo avere applicato le modifiche, se il router è stato impostato correttamente, l'indicatore \"Internet Status\" (Stato Internet) visualizzerà il messaggio \"connesso\". Se il proprio ISP assegna all'utente più di un indirizzo IP statico, il router può gestire fino a cinque indirizzi IP WAN statici. Selezionare \"L'ISP mi ha fornito diversi indirizzi IP statici\" e inserire gli ulteriori indirizzi.<br><br>";
g12='La maggior parte dei provider DSL implementa un tipo di connessione PPPoE. Se si utilizza un modem DSL per la connessione a Internet, l\'ISP potrebbe utilizzare PPPoE per consentire l\'accesso al servizio. è possibile utilizzare il PPPoE anche se si dispone di una connessione Internet a casa o in un piccolo ufficio che non necessita di modem. Il proprio tipo di connessione è PPPoE se 1) Il proprio ISP ha fornito un nome utente ed una password per collegarsi ad Internet2) Il proprio ISP ha fornito un software del tipo WinPOET Enternet300 da utilizzare per collegarsi ad Internet3) Per entrare in Internet, è necessario fare doppio clic su un\'icona del desktop diversa dal proprio browserPer impostare il router in modo da utilizzare il servizio PPPoE, digitare il proprio nome utente e la password negli appositi spazi.Nel caso non si avesse o non si conoscesse il proprio nome di servizio, lasciare vuoto il campo Nome servizio. Dopo aver inserito i propri dati, fare clic su "Applica modifiche". Dopo avere applicato le modifiche, se il router è stato impostato correttamente, l\'indicatore "Internet Status" (Stato Internet) visualizzerà il messaggio "connesso". Per maggiori informazioni sulla configurazione del router per utilizzare il servizio PPPoE, consultare il Manuale d\'uso.';
	
g13="Alcuni provider richiedono una connessione che sfrutti il protocollo PPTP. Questo protocollo consente di impostare una connessione diretta con il sistema dell'ISP. Digitare nello spazio previsto le informazioni fornite dall'ISP. Una volta concluso, fare clic su \"Applica modifiche\". Una volta applicate le modifiche, l'indicatore di stato Internet leggerà Connesso, se il router è¨¨ correttamente impostato. ";

g14a='Telstra BigPond';
g14b='Una volta applicate le modifiche, l\'indicatore di stato Internet leggerà "Connesso" se il router è correttamente impostato.   ';

g15='Impostazione MTU';
g16="L'impostazione MTU non dovrebbe mai essere modificata, sempre che il proprio ISP non fornisca un'impostazione MTU specifica. Eventuali modifiche all'impostazione MTU possono causare problemi a livello della connessione Internet, compresi la disconnessione da Internet, accesso lento a Internet e malfunzionamenti delle applicazioni di Internet. ";
g17='Disconnetti dopo X... ';
g18="La funzione Disconnetti si utilizza per disconnettere automaticamente il router dall'ISP in assenza di attività per un determinato periodo di tempo. Per esempio, selezionando questa opzione e inserendo 5 nel campo dei minuti, il router si disconnetterà da Internet dopo 5 minuti di assenza di attività Internet. Questa funzione è utile nel caso il servizio di Internet venga pagato a minuti. ";
g19="MAC è l'acronimo di Media Access Controller. Tutti i componenti di rete, comprese le schede, gli adattatori ed i router sono dotati di un \"numero seriale\" unico, chiamato indirizzo MAC. L'ISP può registrare l'indirizzo MAC dell'adattatore del computer dell'utente e autorizzare solo questo computer specifico per la connessione al servizio Internet. Nel momento un cui si installa il router, l'indirizzo MAC del router sarà \"visto\" dall'ISP e la connessione potrebbe non funzionare. Belkin offre la possibilità di clonare (copiare) l'indirizzo MAC del computer nel router. Questo indirizzo MAC verrà a sua volta visto dal sistema ISP come indirizzo MAC originale e consentirà la connessione. Nel dubbio che l'ISP necessiti di vedere l'indirizzo MAC originale, clonare semplicemente l'indirizzo MAC del computer originariamente connesso al modem. La clonazione dell'indirizzo MAC non causa alcun problema alla rete. <BR>Per clonare l'indirizzo MAC, accertarsi di utilizzare il computer che era ORIGINARIAMENTE CONNESSO al modem prima dell'installazione del router. Fare clic sul pulsante \"Clona indirizzo MAC\". Fare clic su \"Applica modifichev\". Il proprio indirizzo MAC a questo punto è clonato sul router.";
g20="Per cambiare canale, selezionare il canale di funzionamento del router dal menu a discesa e selezionare il proprio canale. Fare clic su \"Applica modifiche\" per salvare le impostazioni. È inoltre possibile modificare i parametri SSID. I parametri SSID sono l'equivalente del nome della rete wireless. I parametri SSID possono essere di qualsiasi tipo si desideri. Se nella propria zona sono presenti altre reti senza fili, è opportuno dare alla propria rete un nome unico. Il nome predefinito è belkin.xxx. Per cambiare SSID è sufficiente fare clic nella casella SSID ed inserire un nuovo nome. Fare clic su \"Applica modifiche\" per salvare le modifiche.";
				
g21="È possibile rendere la propria rete wireless quasi invisibile. Disattivando il broadcast del SSID, la rete non compare nell'analisi del sito. L'Analisi del Sito è una funzione presente in molti adattatori di rete senza fili disponibili oggi sul mercato. Analizza \"l'aria\" alla ricerca di reti disponibili e consente al computer di selezionare la rete dalla descrizione generale. Disattivando il boradcast del SSID, la protezione aumenta.";
g25='Server virtuali';
g26="Questa funzione consente di instradare le chiamate (Internet) esterne per servizi quali un server Web (porta 80), server FTP (porta 21) o altre applicazioni, attraverso il router verso la rete interna. Poiché i computer interni sono protetti da un firewall, le macchine che accedono da Internet non possono raggiungerli, perché non possono essere \"viste\". Se è necessario configurare la funzione server virtuale per un'applicazione specifica, è disponibile un elenco di applicazioni comuni. Se l'applicazione in questione non è presente nell'elenco, è necessario contattare il fornitore dell'applicazione per sapere quali siano le impostazioni di porta necessarie. Per procedere alla selezione dall'elenco fornito, selezionare la propria applicazione dall'elenco a discesa. Selezionare la riga nella quale si desidera copiare le impostazioni dall'elenco a discesa accanto a \"alla riga\", quindi fare clic su \"Inviov\". Le impostazioni saranno trasferite alla riga specificata. Fare clic su \"Applica modifiche\" per salvare le impostazioni relative all'applicazione in questione. Per inserire le impostazioni manualmente, inserire l'indirizzo IP nello spazio previsto per la macchina (server) interna, la porta necessaria (o le porte necessarie) per l'autorizzazione (separare le diverse porte con una virgola), quindi selezionare il tipo di protocollo (TCP o UDP) e fare clic su \"Applica modifiche\". È possibile autorizzare una sola porta per ogni indirizzo IP interno. L'apertura delle porte nella protezione firewall può comportare un rischio per la sicurezza. È possibile attivare e disattivare le impostazioni molto rapidamente. Si consiglia di disattivare le impostazioni quando non si utilizza un'applicazione specifica. ";
g27='Filtri IP Client';
g28="È possibile configurare il router in modo da limitare l'accesso a Internet, e-mail o altri servizi di rete in giorni e orari specifici. È possibile applicare restrizioni per un solo computer, per una serie di computer o per più computer diversi. Per limitare l'accesso a Internet su un solo computer, per esempio, inserire l'indirizzo IP del computer al quale applicare la limitazione dell'accesso nei campi IP. Quindi, inserire 80 e 80 nei campi relativi alla Porta. Selezionare TCP. Selezionare Blocca. È possibile selezionare anche l'opzione \" Sempre\" per bloccare l'accesso in qualsiasi momento. Selezionare il giorno d'inizio in alto, l'ora d'inizio in alto, il giorno di fine in basso e l'ora di fine in basso. Fare clic su \"Applica modifiche\". Il computer e l'indirizzo IP specificati non potranno quindi accedere a Internet per il tempo specificato. Nota bene: accertarsi di avere selezionato il fuso orario corretto in Utility> Impostazioni di sistema> Fuso orario.";
g28_1='Il router può essere configurato in modo da limitare o consentire l\'accesso ad Internet, alla posta elettronica o ad altri servizi di rete in particolari giorni o momenti. È possibile impostare la limitazione per un computer, un intervallo di computer o diversi computer. Premere il pulsante "Aggiungi" per utilizzare questa opzione.';
		
g29='Filtraggio indirizzi MAC';
g30='Il filtro indirizzi MAC è una potente funzionalità di protezione, che consente di specificare quali computer possano accedere alla rete. Sarà negato l’accesso a qualsiasi computer che dovesse tentare di accedere alla rete e che non fosse specificato nell’elenco dei filtri. Quando si abilita questa funzione, è necessario digitare l’indirizzo MAC di ogni client presente sulla rete per consentire l’accesso a ogni client. Per attivare questa funzione, selezionare "Abilita filtro indirizzi MAC". Quindi, inserire l\'indirizzo MAC di ogni computer presente nella propria rete facendo clic su "Aggiungi". Fare clic su "Applica modifiche" per salvare le impostazioni. Per eliminare un indirizzo MAC dalla lista, è sufficiente fare clic su "Elimina" accanto all\'indirizzo MAC che si desidera rimuovere. Fare clic su "Applica modifiche" per salvare le impostazioni. Nota: non sarà possibile eliminare l’indirizzo MAC del computer utilizzato per accedere alle funzioni di gestione del router. (il computer utilizzato attualmente). ';
g31="L'impostazione DMZ consente di specificare un computer della rete da posizionare al di fuori del firewall NAT. Ciò potrebbe essere necessario se la funzione NAT causa problemi con un'applicazione, come un gioco o un'applicazione di videoconferenza. Utilizzare questa funzione solo provvisoriamente. redBold Il computer nella DMZ non è protetto dagli attacchi degli hacker. Per inserire un computer nella DMZ, inserire le ultime cifre del suo indirizzo IP nel campo IP e selezionare \"Abilita\". Fare clic su \"Applica modifiche\" perché le modifiche abbiano effetto. Se si utilizzano più indirizzi IP WAN statici, è possibile selezionare l'indirizzo IP WAN al quale si riferirà l'host DMZ. Digitare l'indirizzo IP WAN al quale indirizzare l'host DMZ, inserire gli ultimi due caratteri dell'indirizzo IP del computer host DMZ, selezionare \"Abilita\" e fare clic su \"Applica modifiche\".";
	
g32='Blocca ping ICMP';
g33="Gli hacker utilizzano quello che è noto come \"pinging\" per scoprire le potenziali vittime in Internet. Con il pinging di un indirizzo IP specifico e ricevendo una risposta dall'indirizzo IP gli hacker possono intuire che sono in presenza di qualcosa di interessante. Il router si può impostare in modo da non rispondere quando riceve un ping ICMP dall'esterno. In questo modo il livello di protezione del proprio router aumenta. Per disattivare la risposta ping, selezionare Blocca Ping ICMP e fare clic su \"Applica modifiche\". Il router in questo modo non reagirà se colpito da un ping ICMP.";
g34='Password Amministratore';
g35="Il router viene fornito SENZA password. Se si desidera aggiungere una password ai fini di una maggiore sicurezza, è possibile impostarla qui. Conservare la password in un luogo sicuro, in quanto sarà necessaria in futuro per accedere al router. Si consiglia inoltre di impostare una password se si pensa di utilizzare la funzione di controllo remoto del router.<BR> L'opzione di timeout della connessione consente di impostare il tempo di accesso all'interfaccia delle impostazioni avanzate del router. Il timer parte dal momento in cui non si rileva alcuna attività. Per esempio, nel caso in cui siano state apportate modifiche all'interfaccia delle impostazioni avanzate e ci si sia allontanati dal computer senza fare clic su \"Disconnetti\" Supponendo che il timeout sia impostato a 10 minuti, 10 minuti dopo essersi allontanati, la sessione di login scade. È necessario eseguire nuovamente il login al router per apportare ulteriori modifiche. L'opzione di timeout per la connessione è stata prevista a scopo cautelativo ed è preimpostata su 10 minuti. Nota: solo un computer per volta può accedere all'interfaccia delle impostazioni avanzate del router.";
g36='Orario e fuso orario';
g37="Il router aggiorna l'orario collegandosi ad un server SNTP (Simple Network Time Protocol). In questo modo il router è in grado di sincronizzare l’orologio del sistema con la rete Internet mondiale. L'orologio sincronizzato presente nel router viene utilizzato per registrare l'elenco di protezione e controllare il filtro client. Selezionare il fuso orario della zona in cui si risiede. Se nella propria regione vige l'ora legale, selezionare la casella accanto a \"Ora legale\". L’orologio del sistema potrebbe non aggiornarsi immediatamente. Attendere almeno 15 secondi affinché il router possa contattare i server di Internet e ricevere una risposta. L’utente non può impostare autonomamente l’orologio.";
g38='Gestione a distanza';
g39="Prima di attivare questa funzione ACCERTARSI DI AVER IMPOSTATO LA PASSWORD AMMINISTRATORE. La gestione a distanza consente di modificare le impostazioni del router da qualsiasi punto di Internet. Ci sono due metodi per gestire a distanza il router. Il primo consiste nel consentire l'accesso al router da qualsiasi punto di Internet, selezionando Qualsiasi indirizzo IP è in grado di gestire a distanza il router. Inserendo il proprio indirizzo IP WAN, da qualsiasi computer in Internet, si potrà visualizzare una schermata di login, in cui basterà inserire la password del proprio router. Il secondo metodo consiste nell'autorizzare un solo indirizzo IP specifico per il controllo remoto del router. Questo metodo è più sicuro, ma meno comodo. Per utilizzare questo metodo, inserire l'indirizzo IP dal quale si accederà al router nell'apposito spazio e selezionare \"Soltanto questo indirizzo IP è in grado di gestire a distanza il router\". Prima di attivare questa funzione, SI CONSIGLIA di impostare la propria password amministratore. Lasciando in bianco la password, si lascia spazio alla potenziale intrusione nel router.";
g40='Abilitazione NAT';
g42="L'UPnP (Universal Plug-and-Play) è una tecnologia che consente il funzionamento senza problemi delle messaggerie vocali, dei videomessaggi, dei giochi e di altre applicazioni compatibili con UPnP. Alcune applicazioni richiedono che la protezione firewall del router sia configurata in una determinata maniera per funzionare correttamente. In genere, questo richiede che si aprano le porte TCP e UDP e, in alcuni casi, che si impostino le porte trigger. Un'applicazione conforme al servizio UPnP ha la capacità di comunicare con il router, fondamentalmente \"dicendo\" al router come configurare la protezione firewall. Il router viene fornito con l'opzione UPnP disabilitata. Se si utilizzano applicazioni compatibili con UPnP e si desidera sfruttare le funzionalità UPnP, è possibile attivare tale funzionalità. È sufficiente selezionare \"Abilita\" nella sezione \"Abilitazione UPnP\" della pagina Utility. Fare clic su \"Applica modifiche\" per salvare la modifica.";
g43='Notifica aggiornamento automatico firmware';
g44="Il router integra l'opzione di ricerca automatica delle nuove versioni del firmware e avvisa nel momento in cui è disponibile un nuovo firmware. Quando si accede all'interfaccia avanzata del router, il router verifica se siano disponibili nuovi firmware. In questo caso, si viene avvisati. È possibile scegliere di scaricare la nuova versione o di ignorarla. Il router viene fornito con questa opzione disabilitata. Per abilitarla, selezionare \"Abilita\" e fare clic su \"Applica modifiche\".";
g45='Protezione wireless';

g46="La crittografia aiuta a proteggere la rete wireless. È possibile selezionare soltanto un tipo di protezione per volta. Il cliente deve pertanto scegliere una modalità supportata su tutti i dispositivi collegati alla rete wireless. Esistono 4 opzioni per impostare la protezione di questo prodotto:<br><br>1) Disattivata</b>. Con questa modalità è impossibile abilitare la crittografia. Nelle reti aperte a tutti gli utenti a volte si preferisce non abilitare la crittografia.<br><br>2) Protezione WPA/WPA2-Personal (PSK) La chiave precondivisa per l\'accesso protetto alla rete wireless (WPA PSK) è un recente metodo per la codifica dei dati, per cui ogni pacchetto di informazioni viene cifrato con un codice o chiave differente. Dato che la chiave cambia di continuo, l'accesso alla rete tramite WPA è molto sicuro. WPA-PSK (Pre-Shared Key) è per le case o le piccole aziende che non hanno un server. La chiave di crittografia PSK viene creata automaticamente da una stringa di caratteri (frase di accesso). Ovviamente la protezione WPA PSK viene messa in pericolo se qualcuno scopre la frase di accesso.<br><br>a. TKIP o AES. L'impostazione di WPA richiede di scegliere tra la crittografia TKIP o AES. Lo standard WPA specifica TKIP (impostazione predefinita). TKIP dovrebbe inoltre garantire una compatibilità migliore tra dispositivi wireless prodotti da diverse aziende, dato che molti di questi prodotti non saranno mai adattati ad AES. AES è un metodo di crittografia nuovo che si basa sullo standard 802.11i. I nuovi standard WPA potrebbero utilizzare AES. Sebbene AES non sia molto conosciuto, alcuni utenti potrebbero preferire questo metodo. In ogni caso, tutti i dispositivi di rete devono usare lo stesso metodo.<br><br>b. Chiave precondivisa. Digitare una parola o una frase che non contenga più di 64 caratteri. La stessa chiave precondivisa deve essere utilizzata anche per tutti gli altri dispositivi collegati alla rete. Attenzione alle maiuscole e alle minuscole (\"n\" è diversa da \"N\"). È bene ricordare che il rischio di intrusione nella rete è maggiore se qualcuno conosce la chiave precondivisa. <br><br>3) WEP a 128-bit. Fino a poco tempo fa, la crittografia WEP (Wired Equivalent Privacy) a 128 bit è stata lo standard per la crittografia wireless. Se non tutti i dispositivi wireless supportano il WPA, il WEP a 128 bit offre un ottimo sistema di protezione. Sarà richiesto di inserire delle cifre esadecimali, che possono comunque essere generate in modo automatico.<br><br>4) WEP a 64-bit. Belkin consiglia una modalità a 64 bit sulle reti in cui alcuni dispositivi non supportano il WPA o il WEP a 128 bit.";
g47='Some ISPs require a connection using L2TP protocol. This sets up a direct connection to the ISP\'s system. Type in the information provided by your ISP in the space provided. When you have finished, click "Apply Changes". After you apply the changes, the Internet Status indicator will read "Connected" if your Router is set up properly. ';
g48 = 'Access Control';
g49 = 'The Router can be configured to restrict access to the Internet, email, or other network services at specific days and times. Restriction can be set for a single computer.';
g50='Modalità ECO';
g51='Questa funzione permette di abbassare i LED sulla parte anteriore del router per risparmiare energia. È inoltre possibile disablethe radio wireless a orari prestabiliti.';

rs_file_error='La versione dell\'aggiornamento file non è compatibile con la versione di questo dispositivo. Aggiornamento non riuscito. Si prega di procurarsi il file corretto e ritentare.';
rs_crc='Errore durante ripristino <CRC>';
rs_long='Errore durante ripristino <troppo lungo>';
rs_disposition='Errore durante ripristino <Nessun contenuto a disposizione>';
rs_getpid='Errore durante ripristino <Impossibile ottenere pid!>';
rs_unmatchpid='Errore durante ripristino <Pid non corrisposto>';

var msg_ddns1 ="Digitare il nome utente!\n";
var msg_ddns2 ="Digitare la password!\n";
var msg_ddns3 ="Il campo Nome di dominio non può essere lasciato vuoto.\n";
var msg_ddns4 ="Aggiorna DNS dinamico";
var msg_ddns5 ="La lunghezza del Dominio deve essere inferiore a 63.";

// fw_dmz.html
var msg_fw_dmz1 = "Please enter the IP address before enabling DMZ.\n";
var msg_lan_dhcp1 ="Requesting information from the Gateway.";
var msg_lan_dhcp2 ="Updating configuration database.";
var msg_lan_sett1 ="Inserire indirizzi IP non instradabili (10, 172 o 192)!\n";
var msg_lan_sett2 ="Inserire indirizzi IP non instradabili (168)!\n";
var msg_lan_sett3 ="Inserire indirizzi IP non instradabili (16 ~ 31)!\n";
var msg_lan_sett4 ="Inserire indirizzi IP non instradabili (1 ~ 254)!\n";
var msg_lan_sett5 ="Inserire indirizzi IP validi (0 ~ 255)!\n";
msg_wan_stat='L\'indirizzo IP %s non è presente nella rete %s.';
var msg_wan_stat1 ="Indirizzo IP ";
var msg_wan_stat2 =" is not in ";
var msg_wan_stat3 =" network.";
var msg_wls_chan1 ="Il SSID non può essere uguale a ZERO";
var msg_wls_chan2 ="Il campo SSID guest non deve essere NULL!\n (vuoto)";
var fw_update ="Aggiornamento del firmware in corso. ";
var fw_not_interrupt ="NON ARRESTARE O SCOLLEGARE IL ROUTER, il router potrebbe divenire inutilizzabile.";
var show35a ="Ripristina impostazioni predefinite";
var msg_invalid_char = 'Trovato/i carattere/i non valido/i. I caratteri validi sono: 0-9,a-z, A-Z, `~!@#$%^&*()_-+=|\\{}[]:";\',.<>/?';
var vs_null ="Descrizione non eseguita.";
var msg_invalid_vs_char ='Trovato/i carattere/i non valido/i. I caratteri validi sono: 0-9, a-z, A-Z, `~!@#$%^&*()_-+=|{}[]:;\',.<>/?';
var msg_invalid_ssid_char='Trovato/i carattere/i non valido/i. I caratteri validi sono: 0-9, a-z, A-Z, _+';
var msg_invalid_domain_char='Nome dominio locale non valido '+': ~!@#$%^&*()=+{}[]|":;\\\'?/<>,`';
var msg_invalid_char_1 ='Invalid Character(s) found. Valid characters are letters and numbers .The following symbols is invalid: `~!@#$%^&*()_+[]{}\\|;:\'"<>/?.,';
var msg_hostIP_invalid ="L'indirizzo IP host non è valido. Non dovrebbe essere l'indirizzo IP LAN del router.\n";
var msg_dmzIP_blank='Inserire l\'indirizzo IP prima di abilitare DMZ.';
ipm='Non sono stati inseriti tutti i numeri DSN, oppure alcuni dei numeri inseriti non sono validi. I numeri devono essere 0 o 25, oppure compresi fra 0 e 25.';
ipmLast='Either you have not entered all the DNS numbers,\n or some of the numbers you entered are invalid.\n the numbers may be or between 1-254.';
var msg_blank ="non può essere lasciato vuoto.\n";
var msg_space ="Blanks or spaces are not allowed in %s\n";
var msg_blank_in ="Blanks are not allowed in %s\n";
var msg_allspaces ="%s cannot consist solely of spaces\n";
var msg_invalid ="Invalid character or characters in %s\nValid characters are: \n%s\n\n";
var msg_check_invalid ="%s contains an invalid number\n";
var msg_valid_range ="%s is invalid. Valid range is %s to %s\n";
var msg_invalid_mac ="Indirizzo MAC non valido .\n";
var msg_multi_mac="The MAC address can't be multicast address.\n";
var msg_vs_des="Invalid character : or - is not allowed in description.";
var msg_privateIP_invalid ="L'indirizzo IP LAN non è valido\n";
var msg_dmzIP='Indirizzo IP DMZ';
var msg_confirmDefault ="Warning!\nLoading the Factory Default Settings will erase all the current settings.\nAre you sure you wish to do this?";

var con_noinfo='Selezionare il tipo di connessione utilizzato dal provider Internet.\n Il provider Internet ha fornito queste informazioni al momento della stipulazione del contratto.';
var con_miss='I campi sottostanti presentano dati incorretti o non validi.';
var con_nosure='Se non si conosce con certezza il tipo di connessione, contattare il provider (ISP).\n Accertarsi di avere tutte le informazioni necessarie da inserire nelle pagine successive.';

var wiz_noinfo="Inserire le informazioni necessarie per il tipo di connessione scelto nella schermata precedente.  Le informazioni sono state fornite dal vostro provider Internet (ISP)."
var wiz_miss="Alcuni dei campi sottostanti presentano dati incorretti o non validi (per esempio nome account, password o caratteri non validi).  Si prega di inserire le informazioni mancanti.  Le informazioni sono state fornite dal vostro provider Internet (ISP)."
var wiz_nosure='Nel caso sorgano dubbi sulle impostazioni Internet, contattare il proprio provider (ISP).';
var network_key1='È necessario inserire la chiave di rete!';
var network_key2='La lunghezza della chiave deve essere compresa fra 8 e 63 è può comprendere spazi e simboli oppure solo 64 caratteri esadecimali (0-F)!';
var wiz_cd1='Inserire il CD per la risoluzione dei problemi nel computer e uscire dal programma di installazione guidata.';
var wiz_cd2='Bisogna correggere un\'impostazione del computer che è solo per l\'Australia e la Nuova Zelanda. Non preoccupatevi:  Il programma sul CD contiene un programma apposito per farlo in modo automatico.Una volta inserito il disco, il programma contenuto sul CD dovrebbe apparire sullo schermo nel giro di 15 secondi.';
var wiz_cd3="Dopo essere usciti dal programma di installazione guidata e aver inserito il CD, attendere almeno 15 secondi per visualizzare l\'assistente di installazione.";
var wiz_cd4='Per usare il CD di assistenza, chiudere il programma basato sul browser facendo clic sul pulsante \'Esci\' .<br> .';
var wiz_chk_conn1='Verifica della connessione ad Internet...';
var wiz_chk_conn2='Attendere mentre il router verifica le impostazioni Internet.';
var wiz_chk_isp='L\'ISP non ha accettato le impostazioni sotto riportate durante il tentativo di connessione.  Verificare con attenzione la presenza di eventuali errori.';
var wiz_chk_poeisp='Nessuna delle impostazioni è stata accettata dal provider (ISP) durante il tentativo di connessione.  Verificare con attenzione la presenza di eventuali errori.<br>. Nel caso sorgano dubbi sulle impostazioni Internet, contattare il proprio provider (ISP) per informazioni più dettagliate.';


btn5='Previous';
btn6='Routing Table';
Multi_PPPoE='Multi-PPP over Ethernet';
wcc15='Multi-PPPoE';
wcc16='[Japan Only] This type of connection is a unique function in Japan which is required for those who subscribe NTT\'s broadband Internet.';

gmpoe1='WAN Type is MultiSession PPPoE. This WAN type supports multiple PPPoE sessions. With properly configuration of each session, this router can transmit the packets through the correct PPPoE connection. Besides, PPPoE Session 1 will be treated as the master session. The packets which are not matched to the other PPPoE Sessions will be directed to the master session. If the WAN type is not correct, change it!';
gmpoe2='To make the router work properly under the multiple PPPoE WAN type, user has to define the trigger rules of each enabled PPPoE session. So that, once the PPPoE connections are successfully established, the packets can be treated well according to the trigger rules to find out the proper session and transmit the packets.There are two kinds of configuration methologies to define a trigger rule for each PPPoE session.By IP : Please specify the IP address, Subnet Mask and PPPoE Session ID that will be triggered.By Domain Name : Please specify the Domain Name and the PPPoE Session ID that will be triggered.Each rule will take effect if the enable check box is checked.';

var Australia_wz="Australia";
var Austria_wz="Austria";
var Belgium_wz="Belgio";
var China_wz="Cina";
var Czech_wz="Repubblica Ceca";
var Denmark_wz="Danimarca";
var France_wz="Francia";
var Germany_wz="Germania";
var Hong_Kong_wz="Hong Kong";
var Hungary_wz="Ungheria";
var India_wz="India";
var Indonesia_wz="Indonesia";
var Israel_wz="Israele";
var Italy_wz="Italia";
var Japan_wz="Giappone";
var Korea_wz="Corea";
var Malaysia_wz="Malesia";
var Netherlands_wz="Paesi Bassi";
var New_Zealand_wz="Nuova Zelanda";
var Norway_wz="Norvegia";
var Philippines_wz="Filippine";
var Portugal_wz="Portogallo";
var Singapore_wz="Singapore";
var Spain_wz="Spagna";
var Sweden_wz="Svezia";
var Switzerland_wz="Svizzera";
var Taiwan_wz="Taiwan";
var Thailand_wz="Tailandia";
var UK_wz="Regno Unito";
var USA_wz="Stati Uniti d'America";
var Other_wz="Altro";

g10_brief="Un tipo di connessione dinamico è il tipo di connessione più comune che si può trovare nei modem via cavo. L'impostazione di una connessione dinamica spesso è sufficiente per completare la connessione al proprio provider. Alcuni tipi di connessione dinamici possono richiedere un nome host. È possibile inserire il proprio nome host nell'apposito spazio, nel caso in cui ne sia stato assegnato uno all'utente. Il nome host viene assegnato dal proprio provider.";
var Finland_wz= "Finlandia";
var Poland_wz="Polonia";

var msg_invalid_IP = "uno o più indirizzi IP digitati non validi!";
var modem_miss = wiz_miss;
var modem_nosure = wiz_nosure;
var modem_noinfo = 'Inserire le seguenti informazioni. Le informazioni sono state fornite dal vostro provider Internet (ISP).'; 
var run_detect1 = 'Il modem rileva parametri VPI/VCI, attendere...';
var run_detect2 = 'Il modem rileva parametri connessione WAN, attendere...';

run52= "Incapsulamento";
run19= run52;
run46=wiz_chk_isp;
run48= "Impostazioni del modem";

info_pppoe= 'La maggior parte dei provider DSL implementa un tipo di connessione PPPoE. Se si utilizza un modem DSL per la connessione a Internet, l\'ISP potrebbe utilizzare PPPoE per consentire l\'accesso al servizio. È possibile utilizzare il PPPoE anche se si dispone di una connessione Internet a casa o in un piccolo ufficio che non necessita di modem.<br><br> Il proprio tipo di connessione è PPPoE se 1) Il proprio ISP ha fornito un nome utente ed una password per collegarsi ad Internet<br> 2) Il proprio ISP ha fornito un software del tipo WinPOET Enternet300 da utilizzare per collegarsi ad Internet<br> 3) Per entrare in Internet, è necessario fare doppio clic su un\'icona del desktop diversa dal proprio browser<br><br> Per impostare il router in modo da utilizzare il servizio PPPoE, digitare il proprio nome utente e la password negli appositi spazi. Nel caso non si avesse o non si conoscesse il proprio nome di servizio, lasciare vuoto il campo Nome servizio. Dopo aver inserito i propri dati, fare clic su "Applica modifiche". Dopo avere applicato le modifiche, se il router è stato impostato correttamente, l\'indicatore "Internet Status" (Stato Internet) visualizzerà il messaggio "connesso". Per maggiori informazioni sulla configurazione del router per utilizzare il servizio PPPoE, consultare il Manuale<br>';
info_pppoa = 'La maggior parte dei provider DSL implementa un tipo di connessione PPPoA. Se si utilizza un modem DSL per la connessione a Internet, l\'ISP potrebbe utilizzare PPPoA per consentire l\'accesso al servizio. È possibile utilizzare il PPPoA anche se si dispone di una connessione Internet a casa o in un piccolo ufficio che non necessita di modem.<br><br>  Il proprio tipo di connessione è PPPoA se: 1) Il proprio ISP ha fornito un nome utente ed una password per collegarsi ad Internet<br>2) Il proprio ISP ha fornito un software per collegarsi a Internet <br>  3) Per entrare in Internet, è necessario fare doppio clic su un?icona del desktop diversa dal proprio browser<br><br> Per impostare il router in modo da utilizzare il servizio PPPoA, digitare il proprio nome utente e la password negli appositi spazi.Nel caso non si avesse o non si conoscesse il proprio nome di servizio, lasciare vuoto il campo Nome di servizio Dopo aver inserito i propri dati, fare clic su "Apply Changes" (Applica modifiche). Dopo avere applicato le modifiche,  se il router è stato impostato correttamente, l?indicatore "Internet Status" (Stato Internet) visualizzerà il messaggio "Connesso". Per maggiori informazioni sulla configurazione del router per utilizzare il servizio PPPoA, consultare il manuale d\'uso.<br>';
info_ipoa = g11;
info_dial_up = 'È necessario usare un modem che sia collegato alla porta seriale del router. Il numero da chiamare, il nome utente, la password ecc sono forniti dal proprio ISP. Eventuali stringhe di inizializzazione specifiche necessarie per fare funzionare correttamente il modem andranno richieste al produttore del modem. Se l\'ISP avesse fornito un indirizzo IP specifico, inserirlo nei campi destinati all\'indirizzo IP in fondo allo schermo.';
topic_dial_up = 'Connessione esterna';
info_dsl_modem = 'DSL è l\'acronimo di Digital Subscriber Line. Un modem DSL utilizza la linea telefonica per trasmettere dati ad alta velocità.';
topic_dsl_modem = 'Modem via cavo ADSL';

help_pppoa = '<b>PPPoA</b> La maggior parte dei provider DSL implementa un tipo di connessione PPPoA. Se si utilizza un modem DSL per la connessione a Internet, l\'ISP potrebbe utilizzare PPPoA per consentire l\'accesso al servizio. È possibile utilizzare il PPPoA anche se si dispone di una connessione Internet a casa o in un piccolo ufficio che non necessita di modem.  Il proprio tipo di connessione è PPPoA se: 1) Il proprio ISP ha fornito un nome utente ed una password per collegarsi ad Internet2) Il proprio ISP ha fornito un software per collegarsi a Internet   3) Per entrare in Internet, è necessario fare doppio clic su un?icona del desktop diversa dal proprio browser Per impostare il router in modo da utilizzare il servizio PPPoA, digitare il proprio nome utente e la password negli appositi spazi.Nel caso non si avesse o non si conoscesse il proprio nome di servizio, lasciare vuoto il campo Nome di servizio Dopo aver inserito i propri dati, fare clic su "Apply Changes" (Applica modifiche). Dopo avere applicato le modifiche,  se il router è stato impostato correttamente, l?indicatore "Internet Status" (Stato Internet) visualizzerà il messaggio "Connesso". Per maggiori informazioni sulla configurazione del router per utilizzare il servizio PPPoA, consultare il manuale d\'uso.';
help_pppoe= '<b>PPPoE</b> La maggior parte dei provider DSL implementa un tipo di connessione PPPoE. Se si utilizza un modem DSL per la connessione a Internet, l\'ISP potrebbe utilizzare PPPoE per consentire l\'accesso al servizio. È possibile utilizzare il PPPoE anche se si dispone di una connessione Internet a casa o in un piccolo ufficio che non necessita di modem. Il proprio tipo di connessione è PPPoE se 1) Il proprio ISP ha fornito un nome utente ed una password per collegarsi ad Internet 2) Il proprio ISP ha fornito un software del tipo WinPOET Enternet300 da utilizzare per collegarsi ad Internet 3) Per entrare in Internet, è necessario fare doppio clic su un\'icona del desktop diversa dal proprio browser Per impostare il router in modo da utilizzare il servizio PPPoE, digitare il proprio nome utente e la password negli appositi spazi. Nel caso non si avesse o non si conoscesse il proprio nome di servizio, lasciare vuoto il campo Nome servizio. Dopo aver inserito i propri dati, fare clic su "Applica modifiche". Dopo avere applicato le modifiche, se il router è stato impostato correttamente, l\'indicatore "Internet Status" (Stato Internet) visualizzerà il messaggio "connesso". Per maggiori informazioni sulla configurazione del router per utilizzare il servizio PPPoE, consultare il Manuale';
help_ipoa = '<b>IP statico (IPoA)</b>' + g11;
help_dial_up = "<b>External Dial-Up</b> È necessario usare un modem che sia collegato alla porta seriale del router. Il numero da chiamare, il nome utente, la password ecc sono forniti dal proprio ISP. Eventuali stringhe di inizializzazione specifiche necessarie per fare funzionare correttamente il modem andranno richieste al produttore del modem. Se l'ISP avesse fornito un indirizzo IP specifico, inserirlo nei campi destinati all'indirizzo IP in fondo allo schermo";

wb1='WAN > Tipo di connessione > IP dinamico/fisso (1483 con bridge)';
wb101='WAN > Tipo di connessione > IP statico (IPoA)';
wb102='WAN > Tipo di connessione > Soltanto modem (disattivare la condivisione Internet)';
wb3= 'IP assegnato dall\'ISP';
wb7= 'VPI / VCI';
wb9= 'Rilevamento automatico';
wb11= 'No';
wb12= 'LLC';
wb13= 'VC MUX';
wpevpi1= 'Inserire VPI';
var msg_vpi='I valori VPI comprendono numeri tra 0 e 255.';
wpevci1= 'Inserire VCI';
var msg_vci='I valori VCI comprendono numeri tra 1 e 65535.';
wc7= 'IP dinamico/fisso (1483 con bridge)';
wc9= 'IP statico (IPoA)';
wc11= 'Soltanto modem (disattiva condivisione Internet)';
wppoa1='WAN > Tipo di connessione > PPPoA';
wppoa2='Per inserire le proprie impostazioni PPPoA, digitare le proprie informazioni in basso e fare clic su "Apply changes" (Applica modifiche)';
wpmodem1='Per inserire le proprie impostazioni modem, digitare le proprie informazioni in basso e fare clic su "Apply changes" (Applica modifiche).';
IPoA='IPoA';
PPPoA='PPPoA';
Modem= 'Modem Only';
adsl_status='ADSL';
downstream = 'In entrata';
upstream = 'In uscita';
datarate = 'Data Rate (Kbps)';

var change_lan_for_ip_conflict="Router WAN port gets an IP address who is in Router's LAN subnet, WAN port is disabled to insure LAN ports can work. As a result, you can not visit the internet now. Please change your WAN connection settings or LAN settings to solve this.";

var wizard_name = "Programma di configurazione del router";
stroute_1 = 'LAN > Static Routing';
showstroute='Static Routing';
stroute3 = 'The routing table is full!';
stroute32 = ' Network Address';
stroute33 = ' '+i11;
stroute34 = ' Gateway';
Remove='Remove';



acl_1 ="Controllo genitori > Controllo dell'accesso";
help_acl='After enabling Access Control, pressing the "Add" button will open up the "Connected Client List" Screen. This screen lists all the clients list with MAC addresses learned from the router. In the "Connected Client List" screen you can also create a Client you want to control by filling in the blanket MAC address column. You choose one of the clients from the "Connected Client List" by pressing the "Add" button. You will return to Access Control Screen. You can press the "Edit" button under the "Member" column to setup the Acceess Control Rule for each client. '
acl_setting='Internet Access <br> Policy';
acl_2 = 'The Acl table is full';
acl_3 = 'After enabling Access Control, pressing the <b>"Add"</b> button will open up the <b>"Connected Client List"</b> Screen.  This screen lists all the clients list with MAC addresses learned from the router. In the <B>"Connected Client List" </B> screen you can also create a Client you want to control by filling in the blanket MAC address column. You choose one of the clients from the "Connected Client List" by pressing the <b>"Add"</b> button.  You will return to Access Control Screen. You can press the <b>"Edit"</b> button under the <b>"Member"</b> column to setup the Acceess Control Rule for each client.';
acl_4='Premendo il pulsante "Aggiungi" viene visualizzata la schermata "Elenco dei client collegati" che mostra tutti i client con indirizzo MAC appreso dal router. Nella schermata "Elenco dei client collegati", inoltre, è possibile creare un client che si desidera controllare compilando le colonne dell\'indirizzo MAC vuoto. Scegliere un client da Elenco dei client collegati e premere "Aggiungi" sotto la colonna Azione. Viene quindi visualizzata di nuovo la schermata del Controllo dell\'accesso. In questa schermata si dovranno compilare le informazioni relative alle regole di controllo per il client scelto';
acl1='Membro';
acl2='Dispositivo';
acl3='Indirizzo MAC';
acl4='Stato';
acl5='Restrizione';
acl6='Azione';
acl7=' ';
acl8='Tutti i dispositivi da Guest SSID';
acl9='Eccezione di regole di controllo per membro';
acl10='Programma';
acl11='URL List';
acl12='URL Keyword List';
acl13='Giorni';
acl14='Tutti i giorni';
acl15='Lun';
acl16='Mar';
acl17='Mer';
acl18='Ven';
acl19='24 ore';
acl20='Da';
acl21='a';
acl22='Eliminare il membro?';
acl23='Already existed.';
acl24='Esisteva già nella lista membri';
acl25='Esisteva già nel client list';
acl26='I numeri digitati per le porte non sono validi.';
acl27='Password di destinazione ';
acl28='Pagina di destinazione';
acl29="Accesso negato. Inserire la password del router per consentire l'accesso temporaneo alla pagina o ai servizi bloccati.";
member_setting='Elenco membri';
acl_member_setting='Exception of Control Rules for Member';
Allow_All='Allow All';
Deny_All='Deny All';
acl30="Il router può essere configurato in modo da limitare o consentire l'accesso ad Internet, alla posta elettronica o ad altri servizi di rete in particolari giorni o momenti. È possibile impostare la limitazione per un computer, un intervallo di computer o diversi computer.";

Index='Indice';
Services='Servizio';
Port_Rang_List='Elenco intervallo delle porte';
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
PortService_User_Defined='Definito dall’utente';
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
URL_Address='Indirizzo URL';

Keyword='Parola chiave';
Blocking_Keyword='Website Blocking by keyword';
Allowing_Keyword='Website Allowing by keyword';



Connected_Client_List='Elenco dei client collegati';
var save_reboot_time=30;
var restore_reboot_time=30;
var upgrade_reboot_time=70;
var normal_reboot_time=60;

rdt_msg1='Questa funzionalità non è disponibile.';
rdt_msg2='Reindirizzamento alla homepage...';
var disconnect_msg = 'Oops! Your connection to the router has failed.  Please reconnect to the router, click OK and retry.';
show49='Accesso Guest';
wguest1='Wireless > Accesso guest';
wguest4="L'Accesso guest permette di accedere a Internet mediante la porta WAN, tuttavia impedisce agli ospiti (guest) di accedere alla rete interna, LAN e WLAN. Per semplificarne l'uso, questa funzionalità è supportata solo sulla frequenza da 2,4 GHz.";
wguest5='Tipo';
wguest6='Stile - Internet Café (accesso guest tramite pagina web)';
wguest7='WPA/WPA2 PSK';
wguest8='WEP';
wguest9='Aprire';
wguest10='Nome della rete (SSID)';
wguest11='massimo 32 caratteri, senza spazi';
wguest12='Password(PSK)';
wguest13='da 8 a 63 caratteri';
wguest14='Impostazioni accesso guest stampante';
wguest15='10 cifre esadecimali';
wlguest3='La lunghezza della password non è valida. La lunghezza massima della password è 63 e la lunghezza minima della password è 8.';
wlguest4='La chiave WEP deve avere 10 cifre esadecimali!';
wlguest5='Ogni utente guest che si collega alla vostra rete wireless necessita di questa password.';
wlguest6='Tipo di protezione';
wlguest7='Per collegarsi alla rete wireless:';
wlguest8='Windows';
wlguest9="Fare clic col tasto destro sull'icona della rete senza fili nell'area di notifica di Windows e selezionare Mostra reti senza fili nel menu a discesa.";
wlguest10='Fare doppio clic sulla';
wlguest11='Una finestra vi richiederà la chiave di rete. Digitare la password sopraindicata e fare clic su OK.';
wlguest12='MAC OS X';
wlguest13="Fare clic sull'icona della rete senza fili nella barra dei menu (in alto a destra) e selezionare la";
wlguest14='Una finestra vi richiederà la chiave di rete. Digitare la password sopraindicata e fare clic su OK.';
wlguest15="L'accesso guest permette agli utenti di accedere a Internet limitando l'accesso alla rete domestica. Richiedere la password per l'accesso guest al proprio amministratore di rete ed inserirla qui sotto.";
wlguest16='Operazione riuscita Ora è possibile aprire il browser e navigare in Internet.';
wlguest17='Password/PSK';
wipv61='IPv6 > Impostazioni di connessione';
wipv62='IPv6 Passante >';
wipv63='I dispositivi collegati al router possono comunicare l\'uno con l\'altro utilizzando pacchetti IPv6 nativi.  I pacchetti IPv6 presenti sulla LAN saranno automaticamente inviati a tutte le interfacce LAN (Porte Ethernet ed entrambi le reti wireless da 2,4 GHz e 5 GHz). ';
wipv64='Quando il passante è abilitato, i pacchetti IPv6 saranno copiati anche nell\'interfaccia WAN. (Ciò crea una connessione Internet diretta ma non protetta).';
wipv65='Contattare direttamente il proprio ISP per ricevere informazioni sul supporto fornito per IPv6.';
wipv66='IPv6';
wipv67='Internet IPv6';
wipv68='La rete è ora compatibile con IPv6.';
wipv69='Passante';

show50='Filtri siti web';
web_filter1='Controllo genitori > Filtri siti web';
web_filter2='Garantisce un primo livello di protezione Internet prevenendo l\'accesso a siti non sicuri e dal contenuto non appropriato su qualsiasi dispositivo all\'interno della rete.';
web_filter3='Opzioni di filtraggio';
web_filter4='Questi filtri di sicurezza sono forniti per consentire alle famiglie di prendere decisioni coscienziose quando si naviga in Internet.';
web_filter5='Blocca siti maligni, per adulti e non adatti a famiglie';
web_filter6='Blocca siti maligni e per adulti';
web_filter7='Blocca siti maligni';
web_filter8='Nessun filtro';
web_filter9="Blocca siti con malware, phishing e scam, oltre a siti che contengono materiale sessualmente esplicito, contenuti per soli adulti, aborto, alcol, crimini, culti, droghe, giochi d'azzardo, odio, suicidio, tabacco o violenza.";
web_filter10='Blocca siti con malware, phishing e scam, oltre a siti che contengono materiale sessualmente esplicito. ';
web_filter11='Blocca siti con malware, phishing e scam';
web_filter12='Utilizza il provider DNS preferito';
web_filter13='Per modificare l\'indirizzo DNS, continuare su Internet/WAN > %s DNS %s';
web_filter14="I filtri siti web sono forniti per garantire tranquillità riguardo l'utilizzo di Internet da parte dei bambini. Scegliere uno dei tre filtri facili da usare, per selezionare il livello di sicurezza della rete.";

show51='Intellistream';
show53='Funzionalità multimediali';
mf1='Queste pagine permettono di modificare il comportamento del router in base alla tipologia di traffico generata. ';
mf2='Ottimizza automaticamente la connessione Internet per diverse tipologie di traffico.';
mf3='Visualizza come viene utilizzato il tuo router';
mf4='Funzionalità multimediali > Intellistream';
mf5='Intellistream permette di aumentare la priorità della larghezza di banda e dei servizi a bassa latenza, come audio vocale, video e giochi, per garantire la migliore esperienza online.';
mf6='La connettività Internet sarà momentaneamente sospesa durante il test.';
mf7='Test della velocità:';
mf8='Registrato il %s';
mf9='Ping';
mf10='Download';
mf11='Upload';
mf12='Velocità';
mf13='Ms';
mf14='Mbps';
mf15='Applica impostazioni';
mf16='Si è verificato un errore durante il test.';
mf17='Impostato manualmente';
mf18='Inserisci tra i numeri {0.1-%s}.';
mf19='Per abilitare Intellistream:';
mf20='Solo tra {0.1-%s}.';
mf22='Completato.';
mf23='Data l\'elevata velocità di upload, Intellistream aumenterà soltanto la priorità della velocità di download.';
mf24='Data l\'elevata velocità di download, Intellistream aumenterà soltanto la priorità della velocità di upload.';
mf25="Date le elevate velocità Internet, non è necessario abilitare Intellistream.";
mf26='Registrato manualmente il %s';
mf27='In corso...';
mf28='Testa la velocità';
mf29='Per ottenere prestazioni ottimali, Intellistream necessita di conoscere la velocità della tua connessione.';
mf30='Intellistream è abilitato.';
mf31='Inserisci manualmente';
mf32='o';
mf33='Intellistream è attualmente disabilitato. ';
mf43='Internet connectivity is momentarily suspended during the test.';
mf44='I risultati del test di velocità automatico potrebbero non essere accurati al 100%, a causa del traffico Internet o di altre condizioni. Per confrontare i risultati, visitare un sito di test della velocità o contattare il proprio provider di servizi Internet per confermare la velocità di connessione.  Se i risultati della velocità sono inconsistenti, è possibile inserire i valori manualmente. ';

show52='Diagramma del traffico';
qos_stats1='Funzionalità multimediali > Diagramma del traffico';
qos_stats2='I diagrammi in basso mostrano il traffico WAN in uscita e in entrata suddiviso per categorie in base alla priorità. I diagrammi visualizzano gli ultimi 10 minuti e vengono aggiornati automaticamente ogni 5 secondi. ';
qos_stats3='Legenda del traffico'; 
qos_stats4='Byte/sec';
qos_stats5='Data: giorno/ore: minuti';
qos_stats6='Traffico in entrata';
qos_stats7='Traffico in uscita';
qos_stats8='Controllo e connettività della rete ';
qos_stats9='Diagramma voce, video e gioco';
qos_stats10='Web e video web';
qos_stats11='E-mail e VPN';
qos_stats12='Download, torrent e altro';
qos_stats13='Per attivare questa funzionalità, abilitare Intellistream ';
qos_stats14='qui';
qos_stats15='.';

new1='Ottimizza la connessione a Internet.';
new2='Controllo genitori';
new3='Filtri web per navigare in modo sicuro.';
new4='Connessione IPv6';
new5='La rete è ora compatibile con IPv6.';
new6='NOVITÀ';
new7='Condividi file multimediali tra i dispositivi presenti sulla tua rete.';
new8='NOV<br>ITÀ';

media_feature1='Funzionalità multimediali';
media_feature2='The bandwidth gap between LAN and WAN may significantly degrade performance of critical network applications, such as VoIP, gaming, and VPN. This QoS function allows users to classify traffic of applications and provides them with differentiated services (Diffserv).';
media_dlna1='Media Server';
media_dlna2='Media Features > Media Server';
media_dlna3='Goditi la tua musica, le tue foto e i tuoi video in tutta praticità tramite qualsiasi dispositivo DLNA collegato alla tua rete. Con tecnologia di Twonky.';
media_dlna4='Server DLNA';
media_dlna5='Nome del server';
media_dlna6='Drive condivisi:';
media_dlna7='Pronto';
media_dlna8='Indicizzazione';
media_dlna9='In distribuzione';
media_dlna10='video';
media_dlna11='canzoni';
media_dlna12='foto';
media_dlna13='Eject';
media_dlna14='Aggiorna';
media_dlna15='Applica impostazioni';
media_dlna16='Twonky è una linea di prodotti software digitali per l\'uso domestico creati da PacketVideo Corporation (PV).';
media_dlna17='created by PacketVideo Corporation (PV).';
media_dlna18='Senza titolo';
media_dlna19='Nessun drive USB montato sul router.';
media_dlna20='Non condiviso sulla rete.';
media_dlna21='Sono disponibili più file multimediali di quanti il router ne possa indicizzare, perciò saranno distribuiti i primi 12000 oggetti.';
media_dlna22='Non è possibile indicizzare un drive di sola lettura.';


// Note this dictionary is a temporary demonstration
var langDictionary = {

// Copy belkin transation table to here	
'p100t011' : 'pannello di controllo',
'p220t001' : 'Hai una connessione DSL PPTP',
'p220t011' : 'PPTP',
'p220t012' : 'Il Point-to-Point Tunneling Protocol (PPTP) crea una connessione privata e criptata tra il router e il provider di servizi Internet.',
'p222t001' : 'Si sono verificati dei problemi con le tue impostazioni PPTP.',
'p300t001' : 'Ricerca di aggiornamenti firmware.',
'p300t002' : 'Stiamo verificando la presenza di un nuovo firmware per il tuo router',
'p300t003' : 'Perché devo avere l\'ultimo firmware?',
'p300t004' : 'Il firmware è il software che il router utilizza per implementare i protocolli di rete e di sicurezza. Gli aggiornamenti migliorano l\'affidabilità e la funzionalità del tuo router, perciò è importante accertarsi di avere a disposizione sempre la versione più recente.',
'gtUpdateNoPower' : 'Stiamo aggiornando il router con il nuovo firmware. Non spegnere il router durante l\'operazione.',
'p320t003' : 'L\'operazione durerà più o meno 3 minuti. Avanzamento dell\'aggiornamento:',
'gtFirmwareRestart' : 'Ora che il firmware è stato installato, dobbiamo riavviare il router per rendere la modifica effettiva.',
'p342t003' : 'dall\'elenco di reti wireless per aiutarci.',
'errorSSIDEmpty' : 'Inserisci un nome per la tua rete wireless.',
'errorSSIDTooLong' : 'Il nome della rete deve essere più corto di 32 caratteri.',
'errorSSIDInvalidChars' : 'Il nome della rete può contenere solo lettere, numeri, punteggiatura e spazi.',
'errorWEPPasswordInvalidChars' : 'La password di rete può contenere solo numeri e lettere dalla A alla F.',
'errorWEPPasswordInvalidLength' : 'La password di rete deve essere lunga 10-26 caratteri.',
'errorWEPPasswordEmpty' : 'Inserisci una password per rendere protetta la rete wireless.',
'errorWPAPasswordInvalidChars' : 'La password di rete può contenere solo lettere, numeri, punteggiatura e spazi.',
'errorWPAPasswordInvalidLength' : 'La password di rete deve essere lunga 8-63 caratteri.',
'errorWPAPasswordEmpty' : 'Inserisci una password per rendere protetta la rete wireless.',
'errorGenericCommitError' : 'Si è verificato un errore.  Verifica le informazioni in basso e riprova.',
'p400t006' : 'Password:',
'p450t006' : 'Password: ',
'p451t006' : 'Password: ',
'p500t007' : 'Completa la registrazione',
'p500t008' : 'Registrati più tardi',
'p700t011' : 'PPTP DSL connection',
'errIpAddressEmpty' : 'L\'indirizzo IP non può essere vuoto.',
'errSubnetMaskEmpty' : 'La maschera di sottorete non può essere vuota.',
'errSubnetMaskInvalid' : 'La maschera di sottorete non sembra una maschera di sottorete. Controlla i valori.',
'errDefaultGatewayEmpty' : 'L\'indirizzo del gateway predefinito non può essere vuoto.',
'errDNSServerEmpty' : 'L\'indirizzo del server DNS non può essere vuoto.',
'1781' : 'Download Vuze non in linea',
'1782' : 'Cancellazione di tutti i download offline canceller� tutti gli elementi nella coda inclusi i file parziale e completa.',
'1783' : 'Cancella \'Tutti i download non in linea',
'7102' : 'Intellistream di Belkin permette di aumentare la priorità della larghezza di banda e dei servizi a bassa latenza, come audio vocale, video e giochi, per garantire la migliore esperienza online.',
'7103' : 'Per ottenere prestazioni ottimali, Intellistream necessita di conoscere la velocità della tua connessione.',
'7104' : 'La connettività Internet sarà momentaneamente sospesa durante il test.',
'7105' : 'La connettività Internet viene momentaneamente sospesa durante il test.',
'7106' : 'Testa la velocità',
'7107' : 'Test della velocità',
'7108' : 'Inserisci manualmente',
'7109' : 'Ping',
'7110' : 'Velocità di<br> download',
'7111' : 'Velocità di<br> upload',
'7112' : 'In corso...',
'7113' : 'Completato.',
'7114' : 'Si è verificato un errore durante il test.',
'7115' : 'Inserisci un valore tra i numeri 0.1-100.',
'7116' : 'Inserisci un valore tra i numeri 0.1-1000.',
'7117' : 'Solo tra 0.1-100.',
'7118' : 'Data l\'elevata velocità di upload, Intellistream aumenterà soltanto la priorità della velocità di download.',
'7119' : 'Data l\'elevata velocità di download, Intellistream aumenterà soltanto la priorità della velocità di upload.',
'7120' : 'Date le elevate velocità Internet, non è necessario abilitare Intellistream.',
'7121' : 'Registrato il',
'7122' : 'Registrato manualmente il',
'7123' : 'Per abilitare Intellistream:',
'7124' : 'Intellistream è abilitato.',
'7125' : 'Intellistream   è attualmente disabilitato.',
'7126' : 'Impostazione manuale',
'gtBBSTitle' : 'Benvenuto nella configurazione del router Belkin',
'gtBack' : 'Torna al pannello di controllo',
'Support4t036' : 'Leggi tutte le informazioni relative.',
'Support4t037' : 'Visita l\'URL seguente su un dispositivo connesso a Internet e scopri come risolvere il problema da solo: <STRONG>www.belkin.com/support/asdlkj.</STRONG>',
'gtReadHelp' : 'Visita l\'indirizzo <STRONG>http://belk.in/NLk29H</STRONG> su un dispositivo connesso a Internet.',
'Support5t014' : 'Leggi tutte le informazioni relative.',
'p1200t001' : 'Un po\' più di sicurezza.',
'p1200t002' : 'Puoi proteggere ulteriormente il tuo router bloccando il pannello di controllo con una password.',
'errsetempt' : 'Inserisci una password.',
'errorpwdEmpty' : 'Inserisci la password.',
'errorpwdError' : 'La password non è corretta.',
'60' : 'Doppio amministratore',
'61' : 'Questo dispositivo è gestito da',
'62' : 'in questo momento.',
'gtDisconnected' : 'Disconnesso',
'dft005' : 'Centro assistenza Belkin',
'dhToggleBand' : 'Mostra 5.0 GHz',
'419' : 'secondi residui.',
'422' : 'Impostazioni ripristinate con esito positivo',
'423' : 'Il file di ripristino non è compatibile con questo dispositivo. Ripristino non riuscito. Procurati il file corretto e ritenta',
'533' : 'Se il router non funziona correttamente, potrebbe essere necessario riavviare o resettare il router. Il riavvio del router non eliminerà le impostazioni',
'1200' : 'Esecuzione delle modifiche in corso. Attendi per favore.......',
'1386' : 'La versione del file di aggiornamento non è compatibile con la versione di questo dispositivo. Aggiornamento non riuscito. Procurati il file corretto e ritenta',
'2053' : 'Modifiche applicate correttamente',
'2054' : 'Aggiornamento del firmware eseguito correttamente',
'766' : 'I numeri della maschera di sottorete inseriti non sono validi.',
'1356' : 'Indirizzo IP del gateway non valido, il primo numero deve essere compreso tra 1 e 223.',
'1357' : 'Indirizzo IP del gateway non valido, il secondo e il terzo numero devono essere compresi tra 0 e 255.',
'1358' : 'Indirizzo IP del gateway non valido, l\'ultimo numero deve essere compreso tra 1 e 254.',
'1360' : 'Indirizzo IP non valido, il primo numero deve essere compreso tra 1 e 223.',
'1354' : 'Indirizzo IP non valido, il secondo e il terzo numero devono essere compresi tra 0 e 255.',
'675' : 'Indirizzo IP non valido, l\'ultimo numero deve essere compreso tra 1 e 254',
'403' : 'L\'IP inserito non è valido.',
'760' : 'Indirizzo IP',
'1760' : 'Nega tutti',
'395' : 'Non sono stati inseriti tutti i numeri o alcuni dei numeri inseriti non sono validi. Il numero in ogni casella di inserimento deve essere compreso tra 0 e 255.',
'1395' : 'Non configurato',
'1281' : 'L\'IP WAN non può coprire la sottorete LAN.',
'641' : 'Non sono stati inseriti tutti i numeri IP o alcuni dei numeri inseriti non sono validi. I numeri devono essere compresi fra 0 e 255',
'errUsernameTooLong' : 'La lunghezza del nome utente deve essere minore di 64 caratteri.',
'errUsernameInvalid' : 'Il  nome utente può contenere solo lettere, numeri, punteggiatura e spazi.',
'errPasswordEmpty' : 'Inserisci la password.',
'errPasswordTooLong' : 'La lunghezza della password deve essere minore di 64 caratteri.',
'errPasswordInvalid' : 'Il  nome utente può contenere solo lettere, numeri, punteggiatura e spazi.',
'1398' : 'OK',
'1399' : 'Annulla',
'374' : 'Accesa',
'375' : 'Spenta',
'47' : 'Ulteriori informazioni',
'48' : 'Cancella modifiche',
'49' : 'Salva',
'96' : 'Abilita',
'119' : 'Disabilita',
'1298' : 'Chiudi',
'113' : '<< Aggiungi',
'114' : 'Elimina',
'128' : 'Aggiorna',
'318' : 'Disabilitato',
'317' : 'Abilitato',
'2006' : 'Sì',
'2007' : 'No',
'3300' : 'NOVITÀ',
'50' : 'Aggiorna DNS dinamico',
'98' : 'Il DDNS (Dynamic Domain Name System) ti permette di accedere alla rete domestica con un account creato attraverso un provider DDNS. Crea il tuo account all\'indirizzo Dyn.com (<a href=\'http://www.dyn.com\' target=\'_blank\'>www.dyn.com</a>) e attiva la funzionalità DDNS sul tuo router. È necessario creare un account prima di utilizzare questo servizio.',
'100' : 'Nome utente',
'101' : 'Password',
'102' : 'Nome di dominio',
'742' : 'Inserisci il nome utente',
'757' : 'Inserisci la password!',
'822' : 'il valore non è valido, correggi prima di procedere',
'1307' : 'DynDNS',
'1308' : 'Servizio DDNS',
'1309' : 'Stato DDNS',
'1310' : 'Sito Web',
'1315' : 'Aggiornamento automatico DDNS',
'1316' : 'aggiorna ogni',
'1317' : 'giorni',
'1369' : 'Registrato',
'1380' : 'Configurazione errata',
'1381' : 'Collegamento',
'1382' : 'Connessione non riuscita',
'1383' : 'Login non riuscito',
'1384' : 'Registrazione non riuscita',
'1385' : 'Non registrato',
'1751' : 'Media servono file multimediali compatibili giocatori in rete',
'702' : 'Il DNS (Domain Name Service) traduce i nomi di dominio in indirizzi IP per localizzare i servizi e i dispositivi computer in tutto il mondo. Se il tuo provider di servizi Internet (ISP) ti ha fornito un indirizzo DNS da utilizzare, inseriscilo qui.',
'703' : 'Automatico da ISP',
'704' : 'Indirizzo DNS',
'705' : 'Indirizzo DNS secondario',
'706' : 'DNS = Domain Name Server. Un server presente in Internet che traduce gli URL (Uniform Resource Locators) come www.belkin.com in indirizzi IP.',
'707' : 'Inserisci le impostazioni DNS fornite dall\'ISP se non utilizzi la funzione DNS automatico.',
'780' : 'Specifica indirizzo IP',
'823' : 'Per modificare i parametri DNS, visita prima {Filtri siti web} e seleziona "Nessun filtro".',
'55' : 'Informazioni sul firmware.',
'56' : 'Non sono disponibili nuovi aggiornamenti firmware per questo router!',
'57' : 'Impossibile connettersi al server di informazioni sul firmware, verifica con attenzione la connessione WAN.',
'58' : 'Firmware attuale:',
'59' : 'Scarica firmware:',
'64' : 'Il router può essere configurato in modo da limitare l’accesso a Internet, al servizio di e-mail o ad altri servizi di rete in giorni e orari specifici.',
'65' : 'IP',
'66' : 'Porta',
'67' : 'Tipo',
'68' : 'Tempo di blocco',
'69' : 'Giorno',
'70' : 'Orario',
'71' : 'Abilita',
'72' : 'ENTRAMBI',
'73' : 'Sempre',
'74' : 'Blocca',
'75' : 'DOM',
'76' : 'LUN',
'77' : 'MAR',
'78' : 'MER',
'79' : 'GIO',
'80' : 'VEN',
'81' : 'SAB',
'82' : ':00 pomeriggio',
'83' : ':00 mattina',
'84' : 'Non hai inserito l’indirizzo IP del client oppure alcune delle cifre dell’indirizzo IP non sono valide. Il numero nella casella IP deve essere compreso tra 1 e 254.',
'85' : 'I numeri di porta digitati non sono validi.',
'86' : 'Il numero dell\'ultima porta deve essere maggiore del precedente.',
'87' : 'Il numero dell\'indirizzo IP deve essere maggiore del precedente.',
'88' : 'Il numero nella casella di inserimento della porta deve essere compreso tra 1 e 65535.',
'1311' : 'Nessuna applicazione selezionata',
'1312' : 'Duplicato di dati rilevato. La regola esiste già.',
'1355' : 'L\'indirizzo IP LAN del router deve essere escluso dal range IP.',
'90' : 'Questo ti consente di specificare un dispositivo sulla tua rete da posizionare al di fuori del firewall del router, mentre altri dispositivi rimangono al suo interno.',
'91' : 'Il computer nella DMZ non è protetto dagli attacchi degli hacker.',
'92' : 'Per collocare un computer nella DMZ, inserisci le ultime cifre del suo indirizzo IP nel campo seguente e seleziona "Abilita". Fai clic su "Salva" per rendere effettive le modifiche.',
'93' : 'Indirizzo IP dell\'host DMZ virtuale',
'97' : 'IP statico',
'95' : 'IP privato',
'103' : 'Inserisci l\'indirizzo IP prima di abilitare la DMZ',
'1232' : 'L\'indirizzo IP dell\'host DMZ non è valido',
'1253' : 'L\'IP non rientra nella gamma [1-254]!',
'105' : 'Questa opzione ti permette di impostare un elenco di client ammessi. Quando abiliti questa funzione, devi digitare l’indirizzo MAC di ogni client presente sulla rete per consentire l’accesso a ogni client.',
'106' : 'Abilita filtraggio indirizzi MAC',
'107' : 'Elenco filtraggio indirizzi MAC',
'108' : 'Blocca',
'110' : 'Indirizzo MAC',
'112' : 'Questo MAC è già stato aggiunto!',
'669' : 'Indirizzo MAC non valido, è un indirizzo nullo',
'902' : 'Indirizzo MAC non valido',
'903' : 'Correggi prima di procedere',
'904' : 'L\'indirizzo MAC corretto deve essere xx:xx:xx:xx:xx:xx, dove x deve essere un valore compreso fra 0 e 9 e fra a e f.',
'1062' : 'Nota: non potrai cancellare l\'indirizzo MAC del computer che stai utilizzando per accedere alle funzioni di gestione del router. l\'accesso alle funzioni amministrative del router (il computer utilizzato in questo momento).',
'1602' : 'Definito dall\'utente 1',
'117' : 'Il router è dotato di una protezione firewall che salvaguarda la rete da una vasta gamma di comuni attacchi degli hacker, tra cui Ping of Death (PoD) e Denial of Service (DoS). Se necessario, puoi disattivare la funzione firewall. Disattivando la protezione firewall  la rete non rimarrà completamente vulnerabile agli attacchi degli hacker. Tuttavia, si consiglia di lasciare la protezione firewall attiva quando possibile.',
'118' : 'Abilita / Disabilita Firewall',
'121' : '<b>FUNZIONE AVANZATA! </b> Il router può essere configurato in modo da non rispondere a un ping ICMP (ping per porta WAN). In questo modo si ottiene un livello di protezione ancora maggiore.',
'1076' : 'Blocca ping ICMP',
'1827' : 'Stampa impostazioni accesso guest',
'2702' : 'L\'Accesso guest permette di accedere a Internet mediante la porta WAN, tuttavia impedisce agli ospiti (guest) di accedere alla rete interna, LAN e WLAN. Per semplificarne l\'uso, questa funzionalità è supportata solo sulla frequenza da 2,4 GHz.',
'279' : 'Porta in entrata',
'1828' : 'Stile - Internet Café (accesso guest tramite pagina web)',
'1619' : 'WPA/WPA2 PSK',
'1829' : 'WEP',
'1830' : 'Aperto',
'1831' : 'massimo 32 caratteri, senza spazi',
'1617' : 'Password (PSK)',
'842' : 'Autenticazione',
'845' : 'Crittografia   Tecnica',
'854' : 'Chiave precondivisa (PSK)',
'857' : 'Oscura PSK',
'855' : 'WPA-PSK (senza server)',
'1335' : 'Nome della rete (SSID)',
'1825' : 'da 8 a 63 caratteri',
'1826' : '10 cifre esadecimali',
'1834' : 'Nome della rete',
'409' : 'Password',
'1835' : 'Ogni utente guest che si collega alla tua rete wireless necessita di questa password.',
'1715' : 'Tipo di protezione',
'1836' : 'Per collegarsi alla rete wireless:',
'1837' : 'Windows',
'1838' : '1. Fai clic col tasto destro sull\'icona della rete senza fili nell\'area di notifica di Windows e seleziona "Mostra reti senza fili" nel menu a discesa.',
'1839' : '2. Fai doppio clic sulla ',
'1840' : ' rete.',
'1841' : '3. Una finestra richiederà la chiave di rete. Digita la password sopraindicata e fai clic su OK.',
'1842' : 'MAC OS X',
'1843' : '1. Fai clic sull\'icona della rete senza fili nella barra dei menu (in alto a destra) e seleziona ',
'1844' : ' rete.',
'1845' : '2. Una finestra richiederà la chiave di rete. Digita la password sopraindicata e fai clic su OK.',
'1832' : 'Stile Internet Café',
'1833' : 'Modalità aperta',
'1201' : 'SSID non può essere uguale a ZERO',
'1812' : 'La lunghezza della password non è valida. La lunghezza massima della password è 63 e la lunghezza minima della password è 8.',
'1824' : 'La chiave WEP deve avere 10 cifre esadecimali!',
'414' : 'Errore di login!',
'1811' : 'L\'accesso guest permette agli utenti di accedere a Internet limitando l\'accesso alla rete domestica. Richiedi la password per l\'accesso guest al tuo amministratore di rete e inseriscila qui sotto.',
'1813' : 'Operazione riuscita! Ora puoi aprire il browser e navigare in Internet.',
'909' : 'Per "Indirizzo IP" si intende l’indirizzo IP interno del router. Per accedere all\'interfaccia di impostazione avanzata, digita l\'indirizzo IP nell\'apposita barra indirizzi del browser. Questo indirizzo, se necessario, può essere modificato. Per modificare l\'indirizzo IP, digita il nuovo indirizzo IP e fai clic su "Salva". L’indirizzo IP scelto dovrebbe corrispondere ad un IP non instradabile. Esempi di IP non instradabili sono: 192.168.2.1, 10.0.0.1, 172.16.0.1',
'917' : 'Non è necessario modificare la maschera di sottorete. Se necessario la maschera di sottorete può essere modificata. Modifica la maschera di sottorete soltanto se specificatamente necessario.',
'929' : 'La funzione del server DHCP semplifica l’impostazione di una rete, consentendo di assegnare gli indirizzi IP a ogni computer nella rete. Se necessario, il server DHCP può essere disattivato. Disattivando il server DHCP devi impostare manualmente un indirizzo IP statico in ogni computer della rete. Il pool IP è l\'intervallo di indirizzi IP previsto per l\'assegnazione dinamica ai computer della rete. Il valore predefinito è 2-200 (199 computer). Puoi modificare questo numero digitando un nuovo indirizzo IP iniziale e finale e facendo clic su "Salva".',
'935' : 'Puoi impostare un nome di dominio locale (nome della rete) per la tua rete. Non devi necessariamente modificare questa impostazione, a meno che non vi sia un\'esigenza specifica per farlo. Puoi assegnare alla rete un nome qualsiasi, come ad esempio "LA MIA RETE".',
'962' : 'Per impostare il router in modo da utilizzare il servizio PPPoE, digita il nome utente e la password forniti dall\'ISP negli appositi spazi. Nel caso non possiedi o non conosci il tuo nome di servizio, lascia lo spazio "Service Name" (Nome di servizio) in bianco. Dopo aver inserito i tuoi dati, fai clic su "Salva". Dopo avere salvato le modifiche, l\'indicatore di stato visualizzerà il messaggio "Online" se il router è stato impostato correttamente.',
'967' : 'Alcuni provider dei servizi Internet usano il protocollo PPTP per connettere gli abbonati alla sede centrale. In questo caso è necessario inserire alcune impostazioni aggiuntive che dovrebbero essere state fornite dal provider dei servizi Internet. Dopo aver applicato le modifiche, l\'indicatore Stato Internet diventa verde ad indicare che l\'operazione è riuscita.',
'971' : 'Seleziona il tipo di connessione Telstra Bigpond facendo clic su "Salva".',
'982' : 'Disconnetti dopo X...',
'983' : 'In questo modo si disconnette il router dal provider dopo un periodo di inattività. Usare questa opzione per risparmiare denaro se il servizio di Internet viene pagato a minuti.',
'htDDNS' : 'Cos\'è il DDNS?',
'htDNS' : 'Cos\'è il DNS?',
'htDMZ' : 'Cos\'è la DMZ?',
'htLAN' : 'Cosa controllano le impostazioni LAN?',
'htWANMain' : 'Cosa sono le impostazioni WAN?',
'htWANMAC' : 'Cos\'è l\'indirizzo MAC?',
'htWAN_PPPOE' : 'Impostazioni PPPoE',
'htWAN_PPTP' : 'Impostazioni PPTP',
'htIPv6' : 'Cos\'è l\'IPv6?',
'htWifiID' : 'Cosa sono il nome della rete e le impostazioni del canale?',
'htWifiIDContent' : 'Il nome della rete è denominato SSID (Service Set ID).  Tutti i client sulla tua rete devono conoscere l\'SSID per collegarsi alla rete del router.',
'htWifiSec' : 'Cos\'è la sicurezza Wi-Fi?',
'htWifiSecContent' : 'Tutti i router Belkin sono forniti con la sicurezza Wi-Fi abilitata. La sicurezza Wi-Fi fornisce un livello di protezione contro gli accessi non autorizzati alla tua rete. Quando la sicurezza è attiva, gli utenti necessiteranno di una password per accedere alla tua rete.',
'htWifiWPS' : 'Cos\'è il WPS (Wi-Fi Protected Setup)?',
'htWifiWPSContent' : 'Si tratta di un metodo opzionale per facilitare la configurazione di reti Wi-Fi con sicurezza abilitata nelle case o nei piccoli uffici. I dispositivi senza WPS (Configurazione protetta Wi-Fi) possono comunque essere aggiunti alla rete scegliendo il nome della rete e la relativa password.',
'htWifiGuest' : 'Come si usa l\'accesso guest?',
'htWifiGuestContent' : 'Quando è abilitato, l\'accesso guest crea una rete Wi-Fi separata che può consentire l\'accesso a Internet, ma non ai dispositivi presenti sulla tua rete.',
'htAP' : 'Come posso usare il mio router come access point?',
'htAPContent' : 'I router Belkin possono essere configurati per funzionare esclusivamente come un access point, bypassando tutte le funzioni di instradamento e di firewall.  L\'impostazione del router come un access point è utilizzata per aggiungere capacità wireless a una rete cablata esistente.',
'htQos' : 'Cos\'è l\'Intellistream di Belkin?',
'htDLNA' : 'Media Server Belkin con tecnologia Twonky',
'htPortForward' : 'Cos\'è l\'inoltro di porte?',
'htPortForwardContent' : 'L\'inoltro di porte consente ai computer remoti di connettersi a un programma o un servizio specifico sulla tua rete locale. Ad esempio, potresti utilizzare l\'inoltro di porte per eseguire un server web (porta 80) sulla tua rete.  La maggior parte dei programmi moderni non richiede l\'utilizzo dell\'inoltro di porte. Possono impostare qualsiasi porta necessitino automaticamente.',
'htWanPing' : 'A cosa serve il blocco del ping WAN?',
'htWanPingContent' : 'Serve a fornire un livello maggiore di sicurezza per evitare che gli utenti Internet esterni scoprano il tuo indirizzo IP. In questo modo, i ping che provengono dall\'esterno della tua rete non riceveranno una risposta.',
'htRestart' : 'Perché devo riavviare il router?',
'htRestoreFC' : 'Cosa accade quando si ripristinano le impostazioni predefinite?',
'htSaveSettings' : 'Perché dovrei salvare o archiviare le mie impostazioni?',
'htRestoreSettings' : 'Cosa significa il ripristino delle mie impostazioni precedenti?',
'htSystem' : 'Cosa sono le impostazioni del sistema?',
'htSystemContent' : 'In questa pagina è possibile impostare una serie di impostazioni di base per il router, inclusi il fuso orario e la password amministratore.',
'htSelfHeal' : 'Cos\'è Self-Healing?',
'hLANSettings' : 'Questa pagina ti aiuta a impostare nuove connessione, ad attivare o disattivare il DHCP e a impostare l\'indirizzo IP del router sulla tua rete locale.',
'htDHCPClientList' : 'Cos\'è l\'elenco dei client DHCP?',
'htDHCPClientListContent' : 'Questa pagina visualizza l’indirizzo IP, il nome host e l’indirizzo MAC di ogni dispositivo collegato alla rete. Se per il computer non è stato specificato un nome host, il campo rimane vuoto. Fai clic su "Aggiorna" per aggiornare l\'elenco.',
'hWebsiteFilters' : 'Serve per aggiungere un livello di protezione contro siti web non sicuri o inappropriati. I filtri web filtrano i siti confrontando il nome dei siti web contro l\'elenco di siti approvati.',
'hWANSettings' : 'Queste impostazioni di rete si riferiscono alla connessione che hai con il tuo provider di servizi Internet (ISP). Seleziona il tipo di connessione fornita dal tuo provider di servizi Internet dall\'elenco. ',
'htChannel' : 'Nello stesso modo in cui una radio utilizza diverse stazioni, il router può trasmettere su diversi canali per comunicare con i dispositivi sulla rete. L\'impostazione "Auto" (automatico) è la scelta migliore.',
'3430' : 'L\'IPv6 (Internet Protocol version 6) è una versione del protocollo Internet (IP) intesa per sostituire l\'IPv4, in cui si ha quasi tutto il traffico Internet. Alcuni provider di servizi Internet (ISP) hanno quasi esaurito gli indirizzi IP. L\'IPv6 consente a più dispositivi di comunicare su Internet utilizzando numeri maggiori per creare indirizzi IP.  Il tuo provider di servizi Internet ti farà sapere se devi utilizzare l\'IPv6.',
'3431' : 'Tipo di connessione',
'3432' : 'Auto-Config/DHCPv6 (default)',
'3433' : 'Gli indirizzi in basso sono forniti dall\'ISP Il DHCPv6 fornisce funzionalità aggiuntive per migliorare la connettività.',
'3434' : 'WAN',
'3435' : 'Indirizzo WAN',
'3436' : 'Gateway',
'3437' : 'LAN',
'3438' : 'Utilizza questa sessione per configurare le impostazioni di rete interne del tuo router. Se modifichi qui l\'indirizzo IPv6 LAN, potresti dover modificare le impostazioni di rete del tuo computer per poter accedere nuovamente alla rete.',
'3439' : 'Prefisso LAN',
'3440' : 'ID interfaccia',
'3441' : 'Link-Locale',
'3442' : 'DNS',
'3443' : 'Le impostazioni predefinite per il DNS IPv6 provengono dal provider di servizi Internet, se disponibile, tramite gli avvisi del router WAN o i messaggi del DHCPv6.',
'3444' : 'Primario',
'3445' : 'Secondario',
'3446' : 'PPPoE over IPv6',
'3447' : 'Il Point-to-Point Protocol over Ethernet (PPPoE) è utilizzato principalmente dai servizi DSL per connettere un modem DSL a Internet.',
'3448' : 'Login',
'3450' : 'Oscura password',
'3451' : 'Nome utente',
'3452' : 'Password',
'3453' : 'Nome del servizio',
'3454' : 'Tunnel 6to4',
'3455' : 'Consente ai pacchetti IPv6 di essere trasmessi su una rete IPv4 senza dover configurare tunnel espliciti. Questo tipo di connessione è appropriato nel caso il provider di servizi Internet non supporti l\'IPv6.',
'3456' : '6to4 relay router remoto',
'3457' : 'Pass-Through',
'3458' : 'I dispositivi collegati al router possono comunicare l\'uno con l\'altro utilizzando pacchetti IPv6 nativi. I pacchetti IPv6 presenti sulla LAN saranno automaticamente inviati a tutte le interfacce LAN (Porte Ethernet ed entrambi le reti wireless da 2,4 GHz e 5 GHz).',
'3459' : 'Quando il pass-through è abilitato, i pacchetti IPv6 saranno copiati anche nell\'interfaccia WAN. (ciò crea una connessione Internet diretta ma non protetta).',
'3460' : 'Contatta direttamente il tuo ISP per ricevere informazioni sul supporto fornito per IPv6.',
'3461' : 'IPv6 statico',
'3462' : 'L\'indirizzamento IPv6 statico non è molto utilizzato, poiché è difficile da gestire. L\'IPv6 statico non dovrebbe essere utilizzato con dispositivi che si connettono a reti multiple, come laptop o altri dispositivi portatili.',
'3463' : 'Solo pass-through locale',
'3464' : 'Il pass-through WAN IPv6 è disattivato Tutti i dispositivi locali sulla LAN e sulla rete Wi-Fi possono comunicare direttamente l\'uno con l\'altro, ma il router non trasferirà nessun pacchetto IPv6 verso o da Internet, né risponderà direttamente a qualsiasi pacchetto IPv6.',
'3465' : 'Il tuo provider di servizi Internet non fornisce connettività IPv6. Contatta il tuo provider per informazioni sul supporto IPv6 o per stabilire la connettività.',
'3466' : 'L\'opzione "Solo pass-through  locale" è impostata automaticamente affinché i dispositivi possano scambiarsi pacchetti IPv6 l\'uno con l\'altro. L\'altra opzione è di usare un "tunnel 6to4" per accedere a Internet tramite una connessione IPv4.',
'3467' : 'Ciascuna casella deve contenere 4 cifre esadecimali ( 0-9 e a-f).',
'3468' : 'Inserisci un indirizzo non-multicast. Gli indirizzi multicast iniziano di solito con ff.',
'3469' : 'La lunghezza del prefisso dovrebbe essere 1-127. La lunghezza del prefisso è di solito 64, 56 o 48.',
'3470' : 'Nessuna connessione IPv4.',
'3471' : 'Queste impostazioni DNS sono disabilitate temporaneamente dal Controllo genitori.',
'3472' : 'Filtro siti Web',
'3473' : 'Seleziona PPPoE in "Internet/WAN > Impostazioni di connessione", prima di selezionare PPPoE tramite IPv6.',
'3474' : 'Connettività Internet persa. Verifica la tipologia di connessione WAN\no contatta il provider di servizi Internet.',
'3475' : 'DNS predefinito fornito dal provider di servizi Internet',
'gtTryManu' : 'Se sei certo di quale tipo di connessione utilizzi, puoi ',
'gtSetManual' : 'impostarla manualmente ',
'2100' : 'Accesso negato. Inserisci la password del router per consentire l\'accesso temporaneo alla pagina o ai servizi bloccati.',
'2101' : 'Pagina di destinazione',
'2102' : 'VAI',
'354' : 'Questa pagina visualizza l’indirizzo IP, il nome host e l’indirizzo MAC di ogni computer collegato alla tua rete. Se per il computer non è stato specificato un nome host, il campo Nome host rimane vuoto. Facendo clic su "Aggiorna", l’elenco verrà aggiornato.',
'355' : 'Indirizzo IP',
'356' : 'Nome host',
'357' : 'Indirizzo MAC',
'370' : 'Questa pagina ti aiuta a impostare nuove connessioni, ad attivare o disattivare il DHCP e a impostare l\'indirizzo IP del router sulla tua rete locale.',
'371' : 'Indirizzo IP',
'372' : 'Maschera di sottorete',
'373' : 'Server DHCP',
'378' : 'La funzione del server DHCP semplifica l’impostazione di una rete, consentendo di assegnare gli indirizzi IP a ogni computer nella rete. Non è necessaria alcuna modifica.',
'379' : 'Indirizzo iniziale del pool IP',
'380' : 'Indirizzo finale del pool IP',
'381' : 'Tempo di validità',
'382' : 'Per sempre',
'383' : '30 minuti',
'384' : '1 ora',
'385' : '2 ore',
'386' : '12 ore',
'387' : '24 ore',
'388' : '2 giorni',
'389' : '1 settimana',
'390' : '2 settimane',
'391' : 'Il lasso di tempo durante il quale il server DHCP assegna un indirizzo IP a ogni computer.',
'392' : 'Nome di dominio locale',
'393' : 'Opzionale',
'394' : 'Opzione che ti consente di assegnare un nome alla tua rete.',
'397' : 'Il pool IP deve essere nella stessa sottorete dell\'IP gateway',
'398' : 'L\'indirizzo IP finale deve essere maggiore dell\'indirizzo IP iniziale.',
'399' : 'L’indirizzo IP della LAN non può essere nel pool di indirizzi DHCP.',
'400' : 'L’indirizzo IP scelto dovrebbe corrispondere ad un IP non instradabile.',
'401' : 'Indirizzo IP della LAN non valido, il primo numero non può essere 127 né 0.',
'404' : 'Nella casella di scelta dell\'indirizzo nella barra di stato del browser, inserisci manualmente il nuovo indirizzo LAN.',
'406' : 'Sei sicuro di voler cambiare l\'indirizzo IP della LAN?',
'416' : '192.168.y.x. (dove y è qualsiasi valore da 0 a 255 e x è qualsiasi valore fra 1 e 254).',
'417' : '10.y.y.x. (dove y è qualsiasi valore da 0 a 255 e x è qualsiasi valore fra 1 e 254).',
'418' : '172.z.y.x (dove z indica un numero tra 16 e 31 e y indica qualsiasi numero tra 0 e 255, e x indica qualsiasi numero tra 1 e 254).',
'713' : 'Nome di dominio locale non valido :',
'1228' : 'Il pool degli indirizzi iniziali non è valido',
'1229' : 'Il pool degli indirizzi finali non è valido',
'1240' : 'L\'indirizzo IP LAN non è valido',
'3' : 'Login',
'408' : 'Prima di poter modificare qualsiasi impostazione, devi eseguire il login con la password. Se disponi ancora di una password personalizzata, lascia vuoto questo spazio e fai clic su "Inoltra".',
'410' : 'Predefinita = lascia vuoto',
'412' : 'Inoltra',
'1371' : 'Password errata',
'1372' : 'Conferma la password e riprova.',
'124' : 'Il router mantiene un registro di tutte le attività legate al router, tra cui le operazioni di login e logout e qualsiasi tentativo da parte di Internet di accedere al router.',
'125' : 'File di registro',
'126' : 'Salva',
'127' : 'Cancella',
'1302' : 'Registro del sistema',
'1303' : 'Registro del firewall',
'8' : 'Impostazioni LAN',
'9' : 'Impostazioni rete locale',
'10' : 'Dispositivi connessi',
'2500' : 'Instradamento statico',
'11' : 'Internet WAN',
'335' : 'Tipo di connessione',
'690' : 'Dinamico',
'692' : 'Statico',
'694' : 'PPPoE',
'696' : 'PPTP',
'698' : 'Connessioni via cavo Telstra Bigpond/OptusNet',
'42' : 'IPV6',
'43' : 'Connessione IPv6',
'13' : 'DNS',
'14' : 'Indirizzo MAC',
'16' : 'Wi-Fi',
'17' : 'Nome della rete',
'18' : 'Sicurezza',
'803' : 'WEP a 128 bit',
'804' : 'WEP a 64 bit',
'1296' : 'Protezione WPA/WPA2-Personal (PSK)',
'1297' : 'WPA/WPA2-Enterprise (RADIUS)',
'805' : 'WPA (con server Radius)',
'1319' : 'Configurazione protetta Wi-Fi',
'777' : 'Utilizza come un punto di accesso',
'833' : 'Controllo indirizzi MAC',
'1613' : 'Accesso guest',
'1850' : 'Controllo genitori',
'1851' : 'Filtro siti Web',
'1710' : 'Controllo accesso',
'20' : 'Media',
'7151' : 'Diagramma del traffico',
'7000' : 'Media Server',
'1780' : 'Torrent Mate',
'1790' : 'Software opzionale',
'23' : 'Firewall',
'24' : 'Inoltro delle porte',
'25' : 'Filtri IP Client',
'26' : 'Filtraggio indirizzi MAC',
'27' : 'DMZ',
'41' : 'DDNS',
'28' : 'Blocco del ping WAN',
'29' : 'Registro di protezione',
'30' : 'Utilità',
'32' : 'Riavvia il router',
'34' : 'Ripristina impostazioni predefinite',
'35' : 'Salva/Effettua backup delle impostazioni',
'36' : 'Ripristina impostazioni precedenti',
'37' : 'Aggiornamento firmware',
'38' : 'Impostazioni del sistema',
'39' : 'Self-Healing',
'1900' : 'Registrazione',
'132' : 'L\'intervallo di porte in entrata non è corretto.',
'133' : 'L\'intervallo di porte private non è corretto.',
'134' : 'Questa funzione consente di instradare eventuali chiamate esterne (Internet) per servizi quali server web (porta 80), server FTP (porta 21) o altre applicazioni attraverso il router verso la tua rete interna.',
'276' : 'Cancella immissione',
'277' : 'Aggiungi',
'278' : 'Descrizione',
'280' : 'Tipo',
'281' : 'Indirizzo IP privato',
'282' : 'Porta privata',
'376' : 'tutti',
'411' : 'Cancella',
'648' : 'Carattere non valido',
'672' : 'Numero non valido! Deve essere compreso fra 1 e 65535',
'905' : 'Le immissioni sono in eccesso.\nElimina alcune immissioni e riprova.',
'906' : 'Cancellare l\'immissione?',
'907' : 'Cancellare tutte le immissioni?',
'1241' : 'L\'indirizzo IP WAN non è valido',
'1250' : 'La porta non è valida',
'1362' : 'Descrizione non eseguita',
'1601' : 'Automatico',
'2055' : 'Sovrapposizione intervallo di porte in entrata!!',
'2056' : 'Sovrapposizione intervallo di porte private',
'3310' : 'Intellistream',
'3311' : 'Ottimizza la connessione a Internet.',
'3312' : 'Media Server',
'3313' : 'Condividi file multimediali tra i dispositivi presenti sulla tua rete.',
'3314' : 'Controllo genitori',
'3315' : 'Filtri di protezione DNS per la sicurezza Internet',
'3316' : 'Connessione IPv6',
'3317' : 'La rete è ora compatibile con IPv6',
'1852' : 'Serve per aggiungere un livello di protezione contro siti web non sicuri o inappropriati. I filtri web filtrano i siti confrontando il nome dei siti web contro l\'elenco di siti approvati.',
'1854' : 'Opzioni di filtraggio',
'1856' : 'Nessun filtro',
'1858' : 'Blocca siti maligni',
'1859' : 'Blocca siti con malware, phishing e scam.',
'1860' : 'Blocca siti maligni e per adulti',
'1861' : 'Blocca siti con malware, phishing e scam, oltre a siti che contengono materiale sessualmente esplicito.',
'1862' : 'Blocca siti maligni, per adulti e non adatti a famiglie',
'1863' : 'Blocca siti con malware, phishing e scam, oltre a siti che contengono materiale sessualmente esplicito, contenuti per soli adulti, aborto, alcol, crimini, culti, droghe, giochi d\'azzardo, odio, suicidio, tabacco o violenza.',
'1864' : 'Per modificare l\'indirizzo DNS, continua su Internet/WAN > {DNS}',
'7152' : 'I diagrammi in basso mostrano il traffico WAN in uscita e in entrata suddiviso per categorie in base alla priorità. I diagrammi visualizzano gli ultimi 10 minuti e vengono aggiornati automaticamente ogni 5 secondi.',
'7154' : 'Legenda del traffico',
'7155' : 'Traffico in entrata',
'7156' : 'Traffico in uscita',
'7157' : 'Per attivare questa funzionalità, abilita Intellistream',
'7158' : 'qui',
'7159' : '.',
'7160' : 'Controllo e connettività della rete',
'7161' : 'Voce, chat video e gioco',
'7162' : 'Web e video web',
'7163' : 'E-mail e VPN',
'7164' : 'Download, torrent e altro',
'7170' : 'Byte/sec',
'7174' : 'Data: giorno/ore: minuti',
'326' : 'Rete locale',
'327' : 'MAC LAN/WLAN',
'332' : 'Server DHCP',
'333' : 'Impostazioni Internet',
'334' : 'Indirizzo MAC WAN',
'337' : 'IP WAN',
'338' : 'Gateway predefinito',
'339' : 'Indirizzo DNS',
'gtGuestName' : 'SSID per guest',
'gtGuestKey' : 'Chiave guest',
'347' : 'Prima di poter modificare le impostazioni devi registrarti.',
'2022' : 'Soltanto modem',
'2031' : 'Connetti',
'2032' : 'Disconnetti',
'2033' : 'Margine di rumore',
'2034' : 'Downstream',
'2035' : 'Upstream',
'2036' : 'Attenuazione (dB)',
'2037' : 'Potenza erogata (dBm)',
'2038' : 'Velocità di trasferimento (Kbps)',
'tDashboard' : 'Benvenuto nel pannello di controllo del router Belkin!',
'rtFeature' : 'Caratteristiche',
'rtLink' : 'Collegamenti del router',
'p1310t001' : 'Dettagli connessione',
'p1310t002' : 'Riesegui il test della connessione',
'p1310t003' : 'Ultimo controllo',
'p1310t004' : 'Velocità di download',
'p1310t005' : 'Velocità di upload',
'p1000t001' : 'Dispositivi connessi',
'p1000t002' : 'Mostra tutti',
'2501' : 'Inserisci i seguenti parametri di configurazione',
'2502' : 'Indirizzo di rete',
'2503' : 'Maschera di sottorete',
'2504' : 'Gateway',
'396' : 'Il numero inserito per la maschera di sottorete non è valido.',
'1231' : 'Il gateway non è valido',
'1361' : 'Indirizzo IP non valido, il primo numero deve essere compreso tra 1 e 254.',
'1800' : 'L\'indirizzo IP e la maschera di sottorete non corrispondono.',
'Support1t011' : 'Leggi tutte le informazioni relative.',
'Support2t011' : 'Leggi tutte le informazioni relative.',
'Support2t012' : 'Visita l\'URL seguente su un dispositivo connesso a Internet e scopri come risolvere il problema da solo: <STRONG>www.belkin.com/support/asdlkj.</STRONG>',
'Support3t011' : 'Leggi tutte le informazioni relative.',
'Support3t012' : 'Visita l\'URL seguente su un dispositivo connesso a Internet e scopri come risolvere il problema da solo: <STRONG>www.belkin.com/support/asdlkj.</STRONG>',
'Support6t036' : 'Leggi tutte le informazioni relative.',
'425' : 'In questo modo, il router sarà ripristinato ai valori di fabbrica. Ti consigliamo di <a href="ut_save.html">salvare/eseguire un backup delle tue impostazioni,</a> prima di ripristinare le impostazioni predefinite. Salvando la configurazione del router, potrai ripristinarla in un momento successivo nel caso perdi o modifichi le tue impostazioni.',
'426' : 'ATTENZIONE: tutte le impostazioni andranno perse!nSei sicuro di voler continuare?"',
'427' : 'Il ripristino delle impostazioni predefinite richiede $s secondi. Non spegnere il router durante questo processo.',
'428' : 'Non saranno ripristinate le impostazioni predefinite. Nessuna impostazione andrà persa!',
'429' : 'Ripristina impostazioni predefinite',
'301' : 'Questa opzione riavvia il router ogni settimana per evitare che si verifichino problemi sulla rete.',
'302' : 'Inizializza automaticamente il router',
'303' : 'Imposta giorni',
'304' : 'Imposta ora',
'527' : 'Questa opzione permette di impostare la configurazione del router secondo le impostazioni già salvate.',
'528' : 'Ripristina',
'529' : 'Digita il nome del file contenente le impostazioni di backup.',
'530' : 'Vuoi continuare e ripristinare le impostazioni?',
'531' : 'Una volta ripristinate le impostazioni, il dispositivo potrebbe non rispondere ai comandi per un intervallo massimo di un minuto.\n\nQuesto è normale. Non spegnere il dispositivo durante questo intervallo.',
'451' : 'Salvando la configurazione corrente, potrai ripristinarla in un momento successivo nel caso perdi o modifichi le tue impostazioni. Ti consigliamo di salvare le impostazioni prima di eseguire aggiornamenti del firmware.',
'539' : 'Salva',
'130' : 'Non sono stati inseriti tutti gli indirizzi IP o alcune delle cifre inserite non sono valide. Il numero nella casella dell\'indirizzo IP deve essere compreso tra 1 e 254.',
'541' : 'Password Amministratore:',
'542' : 'Il router viene fornito SENZA alcuna password. Per ottenere una maggiore protezione, puoi scegliere una password qui di seguito.',
'543' : 'Digita la password attuale',
'544' : 'Digita la nuova password',
'545' : 'Conferma la nuova password',
'546' : 'Timeout per la connessione',
'547' : '(1-99 minuti)',
'548' : 'Orario e fuso orario:',
'549' : 'Gennaio',
'550' : 'Imposta il tuo fuso orario. Se nella tua area vige l\'ora legale, seleziona questa casella.',
'551' : 'Fuso orario',
'606' : 'Ora legale',
'607' : 'Regolazione automatica dell\'ora legale',
'608' : 'Gestione remota:',
'609' : 'FUNZIONE AVANZATA!',
'610' : 'La gestione a distanza consente di modificare le impostazioni del router da qualsiasi postazione utilizzando Internet. Prima di abilitare questa funzione,',
'611' : 'ACCERTATI DI AVER IMPOSTATO LA PASSWORD AMMINISTRATORE.',
'642' : 'Se abiliti la gestione remota, aumentano i rischi di sicurezza. Abilitala per periodi brevi, solo quando necessario, e disattivala quando non la usi. Ti consigliamo inoltre di impostare una password.',
'612' : 'Qualsiasi indirizzo IP è in grado di gestire a distanza il router.',
'613' : 'Soltanto questo indirizzo IP è in grado di &nbsp;&nbsp;&nbsp;gestire a distanza il router',
'614' : 'Gestione remota Abilita/Disabilita',
'615' : 'L\'opzione "Assegnazione della porta" è stata usata nel server virtuale.',
'616' : 'L\'assegnazione dell\'IP è in conflitto con l\'attuale indirizzo IP WAN.',
'617' : 'Abilitazione UPNP:',
'618' : 'Ti permette di attivare e disattivare la funzione UPNP del router. Se utilizzi applicazioni che supportano l\'UPnP, l\'abilitazione dell\'UPnP ti consente di configurare automaticamente il router.',
'619' : 'Abilita/Disabilita UPNP',
'620' : 'Abilitazione dell\'aggiornamento automatico del firmware:',
'621' : 'Ti permette di verificare automaticamente la disponibilità di aggiornamenti del firmware del router.',
'622' : 'Abilita/Disabilita aggiornamento automatico del firmware',
'623' : 'La password corrente non è valida',
'624' : 'Le nuove password inserite non coincidono. Riprova.',
'626' : 'La lunghezza della password non è valida. La lunghezza massima della password è 12 e la lunghezza minima della password è 3',
'628' : 'Ti consigliamo di impostare la tua password amministratore.',
'629' : 'Server NTP primario',
'630' : 'Server NTP secondario',
'640' : 'Porta di accesso remoto',
'738' : 'Il valore digitato per l\'intervallo di inattività non è valido. Il numero deve essere un\'unità intera compresa tra 1 e 99.',
'796' : 'L\'abilitazione della modalità Turbo consente al router o al punto di accesso di utilizzare il frame bursting per ottenere il flusso massimo dal router o dal punto d\'accesso verso i client 802.11g. La modalità Turbo funziona con i client 802.11g che supportano tale modalità. I client Belkin 802.11g in possesso del driver più recente potranno supportare la modalità Turbo. I client che non supportano la modalità Turbo potranno lavorare normalmente con questa abilitata.',
'1282' : 'Febbraio',
'1283' : 'Marzo',
'1284' : 'Aprile',
'1285' : 'Maggio',
'1286' : 'Giugno',
'1287' : 'Luglio',
'1288' : 'Agosto',
'1289' : 'Settembre',
'1290' : 'Ottobre',
'1291' : 'Novembre',
'1292' : 'Dicembre',
'1373' : 'Australia',
'1374' : 'Nuova Zelanda',
'1375' : 'America settentrionale',
'1376' : 'Europa',
'1377' : 'Asia-Pacifico',
'2300' : '(GMT-12:00) Enewetak, Kwajalein',
'2301' : '(GMT-11:00) Isola Midway, Samoa',
'2302' : '(GMT-10:00) Hawaii',
'2303' : '(GMT-09:00) Alaska',
'2304' : '(GMT-08:00) Pacifico (USA e Canada); Tijuana',
'2305' : '(GMT-07:00) Arizona',
'2306' : '(GMT-07:00) Montagne Rocciose (USA e Canada)',
'2307' : '(GMT-06:00) Ora centrale (USA e Canada)',
'2308' : '(GMT-06:00) Città del Messico',
'2309' : '(GMT-06:00) Tegucigalpa',
'2310' : '(GMT-06:00) Saskatchewan',
'2311' : '(GMT-05:00) Bogota, Lima, Quito',
'2312' : '(GMT-05:00) Ora occidentale (USA e Canada)',
'2313' : '(GMT-05:00) Indiana (Est)',
'2314' : '(GMT-04:00) Atlantico (Canada)',
'2315' : '(GMT-04:00) Caracas, La Paz',
'2316' : '(GMT-04:00) Santiago',
'2317' : '(GMT-03:00) Newfoundland',
'2318' : '(GMT-03:00) Brasilia',
'2319' : '(GMT-03:00) Buenos Aires, Georgetown',
'2320' : '(GMT-02:00) Atlantico medio',
'2321' : '(GMT-01:00) Azzorre, Isola di Capo Verde',
'2322' : '(GMT) Casablanca, Monrovia',
'2323' : '(GMT) Orario Medio di Greenwich: Lisbona, Londra, Edimburgo',
'2324' : '(GMT) Orario Medio di Greenwich: Dublino',
'2325' : '(GMT+01:00) Amsterdam, Berlino, Berna, Roma',
'2326' : '(GMT+01:00) Stoccolma, Vienna, Belgrado',
'2327' : '(GMT+01:00) Bratislava, Budapest, Lubiana',
'2328' : '(GMT+01:00) Praga, Bruxelles, Copenaghen, Madrid',
'2329' : '(GMT+01:00) Parigi, Sarajevo, Skopje',
'2330' : '(GMT+01:00) Varsavia, Zagabria',
'2331' : '(GMT+02:00) Atene, Istanbul, Minsk, Vilnius, Sofia',
'2332' : '(GMT+02:00) Bucarest',
'2333' : '(GMT+02:00) Il Cairo',
'2334' : '(GMT+02:00) Harare, Pretoria',
'2335' : '(GMT+02:00) Helsinki, Riga, Tallinn',
'2336' : '(GMT+02:00) Israele',
'2337' : '(GMT+03:00) Baghdad, Kuwait, Nairobi, Riyadh',
'2338' : '(GMT+03:00) Mosca, San Pietroburgo, Volgograd, Kazan',
'2339' : '(GMT+03:00) Teheran',
'2340' : '(GMT+04:00) Abu Dhabi, Muscat, Tbilisi',
'2341' : '(GMT+04:00) Kabul',
'2342' : '(GMT+05:00) Islamabad, Karachi, Ekaterinburg',
'2343' : '(GMT+05:30) Delhi',
'2344' : '(GMT+06:00) Almaty, Dhaka',
'2345' : '(GMT+07:00) Bangkok, Jakarta, Hanoi',
'2346' : '(GMT+08:00) Pechino, Chongqing, Urumqi',
'2347' : '(GMT+08:00) Hong Kong, Perth, Singapore, Taipei',
'2348' : '(GMT+09:00) Tokyo, Osaka, Sapporo',
'2349' : '(GMT+09:00) Seoul',
'2350' : '(GMT+09:30) Adelaide , Darwin',
'2351' : '(GMT+10:00) Brisbane',
'2352' : '(GMT+10:00) Canberra, Melbourne, Sydney',
'2353' : '(GMT+10:00) Hobart',
'2354' : '(GMT+10:00) Guam, Port Moresby',
'2355' : '(GMT+11:00) Magadan, Isole Salomone, Nuova Caledonia',
'2356' : '(GMT+12:00) Wellington, Auckland',
'2357' : '(GMT+12:00) Figi',
'2358' : '(GMT+13:00) Nuku `alofa.',
'2370' : 'Dom',
'2371' : 'Lun',
'2372' : 'Mar',
'2373' : 'Mer',
'2374' : 'Gio',
'2375' : 'Ven',
'2376' : 'Sab',
'2401' : 'Modalità ECO',
'2402' : 'Riduci intensità LED pannello frontale',
'2403' : 'Disattiva radio da',
'2404' : 'tranne',
'2405' : 'Questa funzione ti consente di ridurre l\'intensità del LED anteriore per risparmiare energia. Inoltre è possibile disabilitare la radio wireless a ore predeterminate.',
'2406' : 'L\'orario di inizio non può essere successivo all\'orario di fine!',
'322' : 'Versione del firmware',
'431' : 'Di tanto in tanto, Belkin potrebbe creare nuove versioni del firmware del router. Questi aggiornamenti contengono miglioramenti e risoluzioni di problemi per il router.',
'432' : '<b>NOTA:</b> Prima <a href="ut_save.html">di aggiornare il firmware,</a> esegui il backup delle tue impostazioni attuali.',
'433' : 'Fai clic qui',
'434' : 'per andare alla pagina Salva/Crea backup delle impostazioni attuali.',
'435' : 'Ricerca nuove versioni del firmware',
'436' : 'Verifica firmware',
'437' : 'Aggiorna firmware',
'438' : 'Aggiorna',
'439' : 'Specifica la posizione del file di aggiornamento. Digita il percorso del file e il nome del file oppure fai clic su "Sfoglia" per navigare fino alla posizione del file.',
'440' : 'Continuare l’aggiornamento?',
'441' : 'Alla fine del processo di aggiornamento, il router potrebbe non rispondere ai comandi per un intervallo massimo di un minuto. Questo è normale. Non spegnere o riavviare il router durante tale intervallo.',
'1198' : 'Aggiornamento del firmware in corso.',
'534' : 'Riavvia il router',
'535' : 'Sei sicuro di voler riavviare il router? Il riavvio del router non influenzerà la configurazione.',
'536' : 'Attendi $s secondi perché il router si riavvii. Non spegnere il router fino a quanto il reset non sarà terminato.',
'7001' : 'Goditi la tua musica, le tue foto e i tuoi video in tutta praticità tramite qualsiasi dispositivo DLNA collegato alla tua rete. Con tecnologia Twonky.',
'7002' : 'Server DLNA',
'7003' : 'Nome del server',
'7004' : 'Drive condivisi:',
'7005' : 'Pronto',
'7006' : 'Indicizzazione...',
'7007' : 'In distribuzione:',
'7008' : 'video',
'7009' : 'canzoni',
'7010' : 'foto',
'7011' : 'Non condiviso sulla rete.',
'7012' : 'Nessun drive USB connesso al router.',
'7016' : 'Aggiorna indice',
'7017' : 'Scegli un nome facile da ricordare per il server media',
'7018' : 'Carattere non consentito',
'7019' : 'Hai più file multimediali di quanti il router ne possa indicizzare, perciò saranno distribuiti i primi {number}',
'7020' : 'oggetti.',
'7021' : 'Twonky è una linea di prodotti software digitali per l\'uso domestico creati da PacketVideo Corporation (PV).',
'7022' : 'Non è possibile indicizzare un drive di sola lettura.',
'7023' : 'MB',
'7024' : 'GB',
'7025' : 'TB',
'7026' : 'video',
'7027' : 'canzone',
'7028' : 'foto',
'770' : 'Usa questa opzione solamente per le connessioni via cavo Bigpond e OptusNet. ',
'771' : 'IMPORTANTE:',
'775' : '3)\tRicollega il cavo di alimentazione al Router Belkin.',
'776' : 'Per confermare l\'avvenuta connessione a Internet, apri un browser Internet, come Internet Explorer, Firefox e Safari e assicurati di poter navigare.',
'731' : 'Nome utente',
'489' : 'Password',
'732' : 'Conferma password',
'756' : 'Ridigita la password',
'1379' : 'Non sono stati inseriti tutti i numeri o alcuni dei numeri inseriti non sono validi. "L\'indirizzo IP deve essere x.y.y.x (dove y è qualsiasi valore tra 0 e 25 e x qualsiasi valore tra 1 e 254)".',
'709' : 'Per inserire le tue impostazioni IP dinamiche, digita le informazioni in basso e fai clic su "Salva"',
'710' : 'Nome host',
'711' : 'Nome host = Un nome che alcuni provider ISP richiedono per collegarsi al loro sistema.',
'712' : 'Modifica l\'indirizzo MAC WAN',
'330' : 'Indirizzo IP',
'331' : 'Maschera di sottorete',
'659' : 'Valore MTU non valido, deve essere compreso tra 500 e 1500.',
'730' : 'Per inserire le tue impostazioni PPPoE, digita le tue informazioni in basso e fai clic su "Salva".',
'733' : 'Nome servizio (opzionale)',
'734' : 'MTU (500-1500)',
'735' : 'Non modificare le impostazioni MTU a meno che il tuo provider dei servizi Internet non richieda un valore diverso',
'736' : 'Disconnetti dopo',
'737' : 'minuti di inattività.',
'741' : 'Valore MTU non valido',
'2005' : 'IP assegnato dall\'ISP',
'2021' : 'Fai clic qui per inserire le tue impostazioni DNS',
'2023' : 'Le doppie virgolette non sono consentite.',
'2024' : 'Il nome utente contiene caratteri non validi',
'2025' : 'Back slash non consentito.',
'2030' : 'Non hai inserito tutti i gateway predefiniti o alcuni dei numeri inseriti non sono validi. I numeri devono essere compresi fra 0 e 255',
'2052' : 'La password contiene caratteri non validi (<,> e &)',
'691' : 'La connessione dinamica è la più comune. Se utilizzi un modem via cavo, molto probabilmente hai una connessione dinamica. Se utilizzi un modem via cavo o se non sei certo del tuo tipo di connessione, usa questo.',
'723' : 'Comprendono gli ISP che richiedono un nome host e i provider ISP che legano la connessione ad uno specifico indirizzo MAC.',
'693' : 'La connessione con indirizzo IP statico è meno frequente. Utilizza questa opzione soltanto se il tuo ISP ha fornito un indirizzo IP che non cambia mai.',
'724' : 'Il router supporta una connessione ad un provider ISP che assegna un indirizzo IP statico.',
'695' : 'Se utilizzi un modem DSL e/o il tuo ISP ha fornito un nome utente e una password, il tuo tipo di connessione è PPPoE. Utilizza questo tipo di connessione.',
'725' : 'Il router supporta una connessione dinamica che richiede un login PPPoE per l’autenticazione.',
'697' : 'Alcuni provider dei servizi Internet usano il protocollo PPTP per connettere gli abbonati alla sede centrale. In questo caso è necessario inserire alcune impostazioni aggiuntive che dovrebbero essere state fornite dal provider dei servizi Internet. Dopo aver applicato le modifiche, l\'indicatore Stato Internet diventa verde ad indicare che l\'operazione è riuscita.',
'726' : 'Solo per i provider di servizi Internet che richiedono una connessione PPTP.',
'699' : 'Usa questa opzione solamente per le connessioni via cavo Bigpond e OptusNet.',
'728' : 'SOLO per gli utenti australiani. Il router supporta una connessione a Telstra BigPond.',
'2019' : 'Per inserire le impostazioni del modem, digita le tue informazioni in basso e fai clic su "Salva".',
'tBackToConnectionType' : 'Indietro al tipo di connessione',
'759' : 'Per inserire le tue impostazioni IP statiche, digita le informazioni in basso e fai clic su "Salva"',
'761' : 'Maschera di sottorete',
'762' : 'Indirizzo gateway dell\'ISP',
'754' : 'Fai clic qui per inserire le tue impostazioni DNS',
'715' : 'Ciascun dispositivo sulla tua rete possiede un indirizzo hardware unico (Indirizzo MAC) che lo identifica rispetto ad altri dispositivi sulla tua rete e su Internet.  Alcuni provider di servizi Internet (ISP) richiedono che tu inserisca l\'indirizzo MAC riportato sulla scheda informativa di rete o sul tuo vecchio router nelle impostazioni del router. Nel dubbio, inserisci l’indirizzo MAC del computer originariamente collegato al modem prima di installare il router.',
'716' : 'Indirizzo MAC WAN',
'717' : 'Clona l\'indirizzo MAC del computer',
'718' : 'Clona',
'721' : 'Nella scheda Internet/WAN puoi impostare il router per collegarti al tuo provider di servizi Internet. Il router è in grado di collegarsi con qualsiasi Internet Service Provider, a condizione che le impostazioni siano state configurate correttamente per il proprio tipo di connessione fornito dall\'ISP. Per configurare il router in modo che si colleghi al proprio ISP, fare clic su "Tipo di connessione" nella scheda Internet/WAN a sinistra sullo schermo.',
'722' : 'Tipi di connessione supportati:',
'htWANMainContent' : 'Scegli il tipo di protezione:',
'700' : 'Avanti',
'744' : 'Account PPTP',
'745' : 'Password',
'746' : 'Conferma password',
'747' : 'Nome host',
'1770' : 'IP assegnato dall\'ISP',
'1771' : 'Sì',
'1772' : 'No',
'1773' : 'Indirizzo del servizio',
'750' : 'Maschera di sottorete',
'778' : 'Il router può essere configurato per funzionare esclusivamente come un access point, bypassando tutte le funzioni di instradamento e di firewall. Per farlo, seleziona "Abilita" e digita l’indirizzo IP che desideri assegnare all\'access point.',
'779' : 'Modalità Access Point:',
'781' : 'Specifica maschera di sottorete',
'801' : 'Modalità di protezione',
'806' : 'Puoi configurare qui le impostazioni della protezione/crittografia senza fili. La protezione deve essere abilitata, al fine di garantire il massimo della sicurezza wireless. Il sistema WPA (Wi-Fi Protected Access) fornisce modifiche dinamiche della chiave ed è la soluzione di protezione migliore. In ambienti wireless, in cui non tutti i dispositivi supportano WPA, è bene utilizzare la funzionalità WEP (Wired Equivalent Privacy).',
'377' : 'Automatico',
'487' : 'ON',
'488' : 'OFF',
'787' : 'Per modificare le impostazioni wireless del router, esegui le modifiche da qui. Fai clic su "Salva" per salvare le impostazioni.',
'788' : 'Canale wireless',
'789' : 'SSID',
'790' : 'Modalità wireless',
'794' : 'Trasmetti SSID',
'797' : 'Modalità protetta',
'1300' : 'Canale di estensione',
'1301' : 'Larghezza di banda',
'1304' : '802.11e/WMM QoS',
'852' : 'La lunghezza della chiave precondivisa deve essere compresa fra 8 e 63 o 64 caratteri esadecimali',
'856' : 'WPA (Wi-Fi Protected Access) con chiave precondivisa: la chiave è una password che può essere una parola, una frase o una serie di lettere e numeri. La lunghezza della chiave deve essere compresa tra <b>8</b> e <b>63</b> caratteri e può comprendere spazi e simboli oppure <b>64</b> caratteri esadecimali (0-F)  esclusivamente. Ogni client che si collega alla rete deve usare la stessa chiave (chiave precondivisa).',
'115' : 'Non hai inserito tutte le cifre esadecimali o alcune delle cifre esadecimali inserite non sono valide. Un carattere esadecimale può essere un numero compreso tra 0 e 9 o una lettera compresa tra A e F.',
'308' : '<b>SPI</b> Stateful Packet Inspection. SPI è un tipo di protezione a livello aziendale fornita dal tuo gateway di rete per la connessione locale HomeConnect. Utilizzando la protezione SPI, il gateway agisce come protezione "firewall", proteggendo la rete dagli hacker.',
'808' : 'NOTA:',
'809' : 'per generare automaticamente le coppie esadecimali utilizzando una frase di accesso, fai clic sul pulsante a destra e inserisci qui la frase di accesso.',
'810' : 'Frase di accesso',
'811' : 'Genera',
'812' : 'Inserisci una frase di accesso',
'814' : 'Chiave',
'818' : '(coppie di caratteri esadecimali)',
'296' : '<b>Indirizzo IP: IP è l’acronimo di Internet Protocol. </b> Un indirizzo IP è composto da una serie di quattro numeri separati da punti finali e identifica un unico host Internet. Esempio: 192.34.45.8.',
'298' : '<b>ISP</b> ISP è l’acronimo di Internet Service Provider. Un ISP è un\'azienda che consente a privati, imprese o altre organizzazioni di connettersi a Internet.',
'807' : '(13 coppie di caratteri esadecimali)',
'813' : 'La chiave non è completa',
'821' : 'non è completa',
'1190' : '<br>Per registrarti al servizio Dynamic DNS Host Name, visita il sito http://www.dyn.com.<br>',
'1339' : 'Ti consigliamo di utilizzare WPA/WPA2 quando la protezione WPS è attiva.',
'1363' : 'Operazione in corso. Attendi prego...',
'1364' : 'Si è verificato un errore. Riprova.',
'1365' : 'Errore di sovrapposizione sessioni. Attendi 60 secondi prima di iniziare nuovamente il procedimento oppure consulta l\'utilità del client per collegarti manualmente alla rete',
'1366' : 'Operazione riuscita - Il dispositivo è collegato al router.',
'1370' : 'PIN non valido! Il PIN del dispositivo è compreso tra quattro e otto cifre. Verifica e inserisci nuovamente.',
'1620' : 'Iniziazione - avvia la configurazione WPS PBC dal dispositivo client entro due minuti.',
'1621' : 'Inizializzazione - avvia la configurazione WPS dal dispositivo client entro due minuti.',
'1622' : 'Intervallo di inattività - Nessun cliente si collega al router.',
'1623' : 'Messaggio di configurazione protetta Wi-Fi',
'1393' : 'Pulsante WPS',
'1320' : 'La Configurazione protetta Wi-Fi (WPS) è il metodo standard per semplificare l\'impostazione e la gestione della sicurezza nelle reti Wi-Fi. È possibile configurare e connettersi a una rete compatibile con WPA 802.11 con dispositivi certificati WPS utilizzando il PIN o la PBC (configurazione mediante il pulsante). I dispositivi di vecchia generazione senza WPS possono essere collegati alla rete utilizzando il metodo di configurazione manuale tradizionale.',
'1321' : 'Metodo con il codice PIN (Personal Information Number)',
'1322' : 'Inserisci il PIN del dispositivo client e fai clic su "Registra". Avvia la configurazione WPS sul dispositivo client dalla utilità wireless o dall\'applicazione WPS entro 2 minuti.',
'1323' : 'Inserisci il PIN del dispositivo client',
'1324' : 'Registra',
'1325' : 'Se è disponibile un registrar esterno, puoi inserire il PIN del router nel registrar esterno. Per cambiare il PIN del router, fai clic su "Genera nuovo PIN" oppure su "Ripristina PIN predefinito" per ripristinare il PIN ai valori di fabbrica.',
'1326' : 'PIN del router',
'1327' : 'Genera nuovo PIN',
'1328' : 'Ripristina PIN predefinito',
'1329' : 'Configurazione mediante Push Button (PBC)',
'1330' : 'Premi e tieni premuto il tasto PBC del router per tre secondi oppure fai clic su "Avvia PBC". Quindi avvia il metodo PBC dal dispositivo che vuoi connettere al router entro 2 minuti.',
'1331' : 'Avvia PBC',
'1332' : 'Configurazione manuale',
'1333' : 'Per i dispositivi client senza WPS, configura manualmente il dispositivo includendo le seguenti impostazioni.',
'1334' : 'Protezione wireless',
'1336' : 'Autenticazione di rete',
'1337' : 'Crittografia dati',
'1338' : 'Chiave di rete (PSK)',
'1340' : 'Sblocca PIN del router',
'1341' : 'PIN del router disabilitato a causa degli eccessivi tentativi di accesso',
'1390' : 'Somma di controllo del PIN non riuscita! Verifica e inserisci nuovamente.',
'1391' : 'PIN non valido! Il PIN del dispositivo è composto da 8 cifre. Verifica e inserisci nuovamente.',
'1392' : 'Configurato',
'1396' : 'Configura la sicurezza wireless manualmente',
'1397' : 'sicurezza wireless',
'common_err1' : '%s è NULLO',
'upgrade_err2' : 'L\'aggiornamento del firmware è stato terminato a causa di risorse insufficienti. Aggiornamento fallito. Ritenta quando il sistema è inattivo (nessun traffico Internet)',
'upgrade_err3' : 'Caricamento impossibile, contatta l\'amministratore.',
'upgrade_err4' : 'Il file del firmware è troppo grande. L\'aggiornamento è fallito.',
'upgrade_err5' : 'Hai già installato il firmware più recente.',
'upgrade_err6' : 'Sembra che il file dell\'aggiornamento firmware sia stato corrotto. Scarica nuovamente il file del firmware e riprova.',
'show10' : 'Elenco dei client DHCP',
'show54' : 'Impostazioni di connessione',
'btn2' : 'Applica modifiche',
'cff1' : 'Controllo firmware completato',
'PM2' : ':30 PM',
'AM2' : ':30 AM',
'Dimicons' : 'Attenua luminosità LED',
'EcoTo' : 'a',
'fvrm' : 'Disattiva la gestione remota. Poiché la porta ad essa relativa crea una collisione con una porta in entrata del server virtuale.',
'lsipm2' : 'Indirizzo IP LAN non valido, l\'ultimo numero non può essere 0 o 255.',
'lsldnm' : 'Nome di dominio locale non valido: `~!@#$%^&*()_+[]{}\|;:\'"<>/?.,',
'lsipm5' : 'L’indirizzo IP scelto dovrebbe corrispondere ad un IP non instradabile.\n  192.168.x.x (dove x è qualsiasi valore tra 0 e 255). \n10.x.x.x (dove x è qualsiasi valore fra 0 e 255.)\n172.y.x.x (dove y è qualsiasi valore da 16 a 31 e x è qualsiasi valore da 0 a 255.)',
'ufy4' : 'Il ripristino delle impostazioni predefinite richiede 60 secondi. Non spegnere il router durante questo processo.',
'ufe11' : 'Alla fine del processo di aggiornamento, il router potrebbe non rispondere ai comandi per un intervallo massimo di 180 secondi. Questo è normale. Non spegnere o riavviare il router durante tale intervallo.',
'ur5' : 'Attendi 30 secondi perché il router si riavvii. Non spegnere il router fino a quando il reset non sarà terminato.',
'ur6' : 'Attendi 60 secondi perché il router si riavvii. Non spegnere il router fino a quando il reset non sarà terminato.',
'usys83' : 'I campi Password e Conferma nuova password non coincidono',
'usys83_1' : 'I campi Password e Conferma password non coincidono.',
'usys85_1' : 'La lunghezza della password amministratore deve essere compresa tra 3 e 12.',
'usys88' : 'La password ha raggiunto la lunghezza massima!',
'usys89' : 'AM',
'usys90' : 'PM',
'usys92' : 'Il numero della porta di accesso remoto deve essere compreso tra 1 e 65535.',
'usysipm' : 'Non sono stati inseriti tutti i numeri o alcuni dei numeri inseriti non sono validi. L\'indirizzo IP deve essere nel formato x.y.y.z (dove x indica qualsiasi numero da 1 a 223, y qualsiasi numero da 0 a 255 e z qualsiasi numero da 1 a 254).',
'self_healing60' : 'Self Healing',
'chkwait' : 'Ricerca di firmware più recenti...',
'Europe' : 'Europa',
'Australia' : 'Australia e Nuova Zelanda',
'AsiaPacific' : 'Asia-Pacifico',
'NorthAmerica' : 'America settentrionale',
'vjs1' : 'Indirizzo IP non valido, troppo lungo. Verifica nuovamente',
'vjs2' : 'Indirizzo IP non valido, \'.\' , mancante. Verifica nuovamente!',
'vjs3' : 'Indirizzo IP non valido, numeri mancanti fra \'.\',. Verifica nuovamente!',
'vjs4' : 'Indirizzo IP non valido, \'.\' , aggiuntivo. Verifica nuovamente.',
'vjs5' : 'Indirizzo IP non valido, numeri fra \'.\' troppo grandi. Verifica nuovamente!',
'vm1' : 'Carattere non valido ',
'vm2' : ' nella posizione ',
'vm3' : 'Deve essere ',
'vjs6' : 'Formato dell\'anno non valido, inserisci come (es. 2002)',
'vm4' : 'Numero non valido ',
'vjs8' : 'Non valido, deve essere compreso fra 1970 e 2037',
'vjs9' : 'Formato del mese non valido, inserisci come (es. 01...12)',
'vjs161' : ' non in ',
'vjs162' : ' maschera di rete',
'vjs163' : 'L\'intervallo DHCP consentito è ',
'vjs17' : 'Hai digitato due password diverse, verifica nuovamente!',
'vjs18' : 'Inserisci un numero per la porta iniziale.',
'vjs19' : 'Il numero della porta iniziale deve essere inferiore rispetto al numero della porta finale.',
'vjs23' : 'Indirizzo MAC non valido, è un indirizzo broadcast.',
'vjs24' : 'Indirizzo MAC non valido, è un indirizzo nullo.',
'vjs25' : 'Indirizzo MAC non valido, è un indirizzo multicast.',
'vjs26' : 'Indirizzo IP iniziale e finale non valido, l\'IP finale deve essere maggiore rispetto all\'IP iniziale.',
'vjs28' : 'Formato della maschera di rete non valido.',
'vjs29' : 'Formato non valido, la maschera di rete deve essere 255.255.255.0 oppure 255.255.255.128 oppure 255.255.255.192 oppure 255.255.255.224 oppure 255.255.255.240 oppure 255.255.255.248 oppure 255.255.255.252 oppure 255.255.255.254',
'vjs30' : 'Indirizzo IP non valido, l\'ultimo numero non può essere 0 né 255',
'vjs31' : 'Indirizzo IP LAN non valido, il primo numero non può essere 127',
'vjs32' : 'Indirizzo IP LAN non valido, non può essere 0.0.0.0',
'vjs33' : 'Indirizzo IP LAN non valido, deve essere inferiore a 244.0.0.0',
'vjs42' : 'I numeri della maschera di sottorete inseriti non sono validi.',
'vjs45' : 'Specifica indirizzo IP',
'vjs46' : 'non valido, correggi prima di procedere!',
'wcc2' : 'Seleziona il tuo tipo di connessione:',
'wcc13' : 'L2TP',
'wcc14' : 'Alcuni provider usano il protocollo L2TP per connettere gli abbonati alla sede centrale. In questo caso è necessario inserire alcune impostazioni aggiuntive che dovrebbero essere state fornite dal provider dei servizi Internet. Dopo aver applicato le modifiche, l\'indicatore Stato Internet diventa verde ad indicare che l\'operazione è riuscita.',
'wds4_1' : 'Indirizzo DNS primario',
'wds7' : 'Inserisci le impostazioni DNS fornite dall\'ISP se non utilizzi la funzione DNS automatico',
'wds8' : 'Per modificare i parametri DNS, visita prima %s Filtri siti web %s e seleziona "Nessun filtro".',
'wmc6' : 'L\'indirizzo MAC WAN non può essere uguale all\'indirizzo MAC LAN. Selezionane un altro.',
'wdd9 ' : 'Nessun servizio DDNS selezionato.\n',
'wdd10' : 'Nessun servizio DDNS selezionato. Tutti i dati presenti nella pagina andranno persi, continuare?',
'wm10b' : 'Solo per i provider di servizi Internet che richiedono una connessione L2TP.',
'pm' : 'Il servizio non è stato in grado di verificare la password inserita. Conferma di avere digitato la password corretta.',
'wpp17' : 'Account L2TP',
'wpp18' : 'Password L2TP',
'wpp19' : 'Digita il tuo nome di account L2TP',
'wpp23' : 'Assegnazione dell\'indirizzo IP',
'wpp24' : 'Utilizza un indirizzo IP statico',
'wpp25' : 'Ottieni in modo dinamico dal provider',
'wppa7' : 'Indirizzo IP personale',
'wppa9' : 'ID di connessione (opzionale)',
'wppa13' : 'Inserisci il tuo account PPTP',
'wppa18' : 'Nome del servizio non valido.',
'ws2' : 'Per inserire le tue impostazioni IP statiche, digita le informazioni in basso e fai clic su "Applica modifiche".',
'sm_1' : 'I numeri della maschera di sottorete inseriti non sono validi.',
'ws8' : 'Inserisci/conferma le impostazioni dell\'indirizzo DNS dalla schermata seguente',
'wt2' : 'Se fai clic su “Applica modifiche” il router si riavvia. Una volta riavviato il router, segui il seguente procedimento',
'wt3' : '1) Disconnetti il cavo di alimentazione dal modem via cavo e dal router Belkin',
'wt4' : '2) Ricollega il cavo di alimentazione al modem via cavo, attendi fino a quando tutte le luci smettono di lampeggiare',
'wt5' : '3) Ricollega il cavo di alimentazione al router Belkin',
'wt6' : 'Per confermare l\'avvenuta connessione a Internet, apri un browser Internet, come Internet Explorer, Firefox e Safari e assicurati di poter navigare.',
'wlad2' : 'Abilita/Disabilita',
'wlc2' : 'Per modificare le impostazioni wireless del router, esegui le modifiche da qui. Fai clic su "Applica modifiche" per salvare le impostazioni.',
'wlcgb' : '802.11b+g',
'wlcg' : '802.11g',
'wlcb' : '802.11b',
'wlc20' : '20 MHz',
'wlc22' : '20/40 MHz',
'wlcoff' : 'OFF',
'wlcngb1' : '802.11b & 802.11g & 1x1 802.11n',
'wlcn1' : '1x1 802.11n',
'wlcngb2' : '802.11b, 802.11g e 802.11n',
'wlcn2' : '802.11n',
'wlcgn' : '802.11g+n',
'wlca' : '802.11a',
'wlcan' : '802.11a e 802.11n',
'wlc26' : 'Se nascondi il nome della rete, il WPS sarà disabilitato.',
'wlc27' : 'Se modifichi il tipo di sicurezza, il WPS sarà disabilitato.',
'wlc28' : 'Il WPS è stato disabilitato a causa del <A href=%s><B>tipo di sicurezza wireless</B></A>.',
'wlc29' : 'Il WPS è stato disabilitato perché il nome della rete (SSID) è stato nascosto.',
'wlc30' : 'Il WPS è stato disabilitato perché il nome della rete (SSID) è stato nascosto e a causa del <A href=%s><B>tipo di sicurezza wireless</B></A>.',
'wlc31' : 'Se attivi il WPS, il nome della rete (SSID) sarà reso visibile.',
'wlc32' : 'Se attivi  il WPS, il tipo di sicurezza sarà modificato a WPA/WPA2. L\'attuale password di rete funzionerà senza problemi.',
'wlc33' : 'Se attivi il WPS, il nome della rete (SSID) sarà reso visibile e il tipo di sicurezza sarà modificato a WPA/WPA2. L\'attuale password di rete funzionerà senza problemi.',
'wle3a' : 'WPA-PSK',
'wle3b' : 'WPA2-PSK',
'wle3c' : 'WPA-PSK + WPA2-PSK',
'wps1' : 'Wi-Fi Protected Setup (WPS)',
'wps3' : 'Configura la protezione wireless',
'wps17' : 'Per i dispositivi client senza WPS, avvia il programma di installazione guidata della protezione Belkin utilizzando il CD o configura manualmente tramite le seguenti impostazioni.',
'wps23' : 'WPA+WPA2-Personal (PSK)',
'wps25' : 'TKIP + AES',
'wps27' : 'Chiave di rete (WEP):',
'wps28_1' : 'NULLO',
'wle11' : 'Chiave 1',
'wle12' : 'Chiave 2',
'wle13' : 'Chiave 3',
'wle14' : 'Chiave 4',
'wpskerr2' : 'La lunghezza della chiave deve essere compresa tra 8 e 63 caratteri e può comprendere spazi e simboli oppure solo 64 caratteri esadecimali (0-F).',
'wpskerr4' : 'Inserisci la chiave guest',
'wpskerr7' : 'La chiave guest deve contenere 8 caratteri',
'wpskerr8' : 'La chiave guest deve essere diversa dalla chiave di rete',
'wlguest1' : 'L\'SSID deve essere diverso dall\'SSID guest',
'wlguest2' : 'L\'SSID guest deve essere diverso dall\'SSID',
'rs_crc' : 'Errore durante ripristino <CRC>',
'rs_long' : 'Errore durante il ripristino<too long>',
'rs_disposition' : 'Errore durante il ripristino<No Content-Disposition>',
'rs_getpid' : 'Errore durante il ripristino<Can\'t get pid!>',
'rs_unmatchpid' : 'Errore durante il ripristino<Unmatched pid>',
'msg_ddns3 ' : 'Il campo Nome di dominio non può essere lasciato vuoto.\n',
'msg_lan_dhcp1 ' : 'Recupero informazioni dal gateway.',
'msg_lan_dhcp2 ' : 'Aggiornamento del database di configurazione.',
'msg_wan_stat1 ' : 'Indirizzo IP ',
'msg_wan_stat2 ' : ' non presente nella ',
'msg_wan_stat3 ' : ' rete.',
'msg_wls_chan2 ' : 'Il campo SSID guest non può essere NULLO!\n',
'fw_not_interrupt ' : 'NON ARRESTARE O SCOLLEGARE IL ROUTER, il router potrebbe divenire inutilizzabile.',
'msg_invalid_char ' : 'Trovati caratteri non validi. I caratteri validi sono: 0-9, a-z, A-Z, `~!@#$%^&*()_-+=|\\{}[]:";\',.<>/?',
'msg_invalid_domain_char ' : 'Nome di dominio locale non valido'+': ~!@#$%^&*()=+{}[]|":;\\\'?/<>,`',
'msg_invalid_char_1 ' : 'Trovati caratteri non validi. I caratteri validi sono lettere e numeri. I seguenti simboli non sono validi: `~!@#$%^&*()_+[]{}\\|;:\'"<>/?.,',
'msg_hostIP_invalid ' : 'L\'indirizzo IP host non è valido. Non dovrebbe essere l\'indirizzo IP LAN del router.\n',
'msg_dmzIP ' : 'Indirizzo IP DMZ.',
'msg_blank ' : ' non può essere lasciato vuoto.\n',
'msg_space ' : 'Non sono consentiti spazi vuoti o bianchi in %s\n',
'msg_blank_in ' : 'Non sono consentiti spazi vuoti in %s\n',
'msg_allspaces ' : '%s non può comprendere solo spazi\n',
'msg_invalid ' : 'Carattere o caratteri non validi in %s\nI caratteri validi sono: \n%s\n\n',
'msg_check_invalid ' : '%s contiene un numero non valido\n',
'msg_valid_range ' : '%s non valido. La gamma valida è da %s a %s\n',
'msg_invalid_mac ' : 'Indirizzo MAC non valido.\n',
'msg_multi_mac' : 'L\'indirizzo MAC non può essere un indirizzo multicast.\n',
'msg_confirmDefault ' : 'Attenzione!\nCaricando le impostazioni di fabbrica cancellerai le impostazioni attuali.n\Sei sicuro di volerlo fare?"',
'Allowed_Services' : 'Servizi consentiti',
'Allowing_Url' : 'Accesso a siti web mediante indirizzo URL ',
'Allowing_Keyword' : 'Accesso a siti web mediante parola chiave',
'wipv63' : 'I dispositivi collegati al router possono comunicare l\'uno con l\'altro utilizzando pacchetti IPv6 nativi. I pacchetti IPv6 presenti sulla LAN saranno automaticamente inviati a tutte le interfacce LAN (Porte Ethernet ed entrambi le reti wireless da 2,4 GHz e 5 GHz).',
'wipv64' : 'Quando il pass-through IPv6 è abilitato, i pacchetti IPv6 saranno copiati anche nell\'interfaccia WAN. (Se l\'opzione viene abilitata si crea una connessione Internet diretta ma non protetta).',
'wipv65' : 'Contatta direttamente il tuo ISP per ricevere informazioni sul supporto fornito per IPv6.',
'wipv67' : 'Internet IPv6',
'wipv68' : 'La rete è compatibile con IPv6.',
'wipv69' : 'Pass-through',
'mf1' : 'Queste pagine ti permettono di modificare il comportamento del router in base alla tipologia di traffico generata.',
'mf2' : 'Ottimizza automaticamente la connessione Internet per diverse tipologie di traffico.',
'mf3' : 'Visualizza come viene utilizzato il tuo router',
'mf8' : 'Registrato il %s',
'mf10' : 'Download',
'mf11' : 'Upload',
'mf12' : 'Velocità',
'mf15' : 'Applica impostazioni',
'mf18' : 'Inserisci tra i numeri {0.1-%s}.',
'mf20' : 'Solo tra {0.1-%s}.',
'mf26' : 'Registrato manualmente il %s',
'mf32' : 'o',
'mf44' : 'I risultati del test di velocità automatico potrebbero non essere accurati al 100%, a causa del traffico Internet o di altre condizioni. Per confrontare i risultati, visita un sito di test della velocità o contatta il tuo provider di servizi Internet per confermare la velocità di connessione. Se i risultati della velocità sono inconsistenti, puoi inserire i valori manualmente.',
'media_dlna18' : 'senza titolo',
'media_dlna21' : 'Sono disponibili più file multimediali di quanti il router ne possa indicizzare, perciò distribuiremo i primi 12000 oggetti.',
'errSubnetMaskInvalid_2' : 'La maschera di sottorete non sembra una maschera di sottorete. Controlla i valori.',
'htWAN_L2TP' : 'Impostazioni L2TP',
'htWAN_L2TPContent' : 'Alcuni provider usano il protocollo L2TP per connettere gli abbonati alla sede centrale. In questo caso è necessario inserire alcune impostazioni aggiuntive che dovrebbero essere state fornite dal provider dei servizi Internet. Dopo aver applicato le modifiche, l\'indicatore Stato Internet diventa verde ad indicare che l\'operazione è riuscita.',
'p400t001_error' : 'Connetti tutto più velocemente.',
'p400t018_error' : 'Perché devo dare un altro nome?',
'p400t019_error' : 'Questa schermata appare quando ricerchi la tua rete da altri dispositivi.  I nomi di rete unici sono più facili da trovare e da ricordare. Se i tuoi diversi dispositivi wireless erano precedentemente connessi ad un altro router, utilizzando lo stesso nome di rete e la stessa password, non dovrai configurarli per il nuovo router; si connetteranno automaticamente.  ',
'dhToggleBand2G' : 'Mostra 2,4 GHz',
'772' : 'Se fai clic su “Applica modifiche” il router si riavvia. Una volta riavviato il router, segui il seguente procedimento',
'773' : '1) Disconnetti il cavo di alimentazione dal modem via cavo e dal router Belkin',
'774' : '2) Ricollega il cavo di alimentazione al modem via cavo e attendi fino a quando tutte le luci smettono di lampeggiare',
'dft001' : 'Sembra che non sei connesso.',
'dft002' : 'Se hai bisogno di assistenza e disponi di un dispositivo connesso, visita <strong>help.belkin.com</strong>.',
'gtNoSecCard     ' : 'Annota il nome e la password della rete, così potrai ricordarli in un secondo momento. ',
'gtFWUpdateMobileError' : 'I file del firmware non possono essere attualmente caricati da dispositivi mobili.',
'gtSettingsMobileError' : 'I file delle impostazioni non possono essere attualmente caricati da dispositivi mobili.',
'gtMoreFromInternet' : 'Connettiti a Internet per scoprire altro',
'gtCantConnect' : 'Non riusciamo a stabilire una connessione a Internet.',
'p802t004' : 'Vai al menu della rete wireless del tuo dispositivo',
'p803t004' : 'Vai al menu della rete wireless del tuo dispositivo',
'PIC-S1t001' : 'Blocca tutti i dispositivi',
'gtUnnamedDevice' : 'Dispositivo senza nome',
'gtIC' : 'Controllo di Internet',
'errDefaultGatewayEmpty' : 'L\'indirizzo del gateway predefinito non può essere vuoto.',
'errDefaultGatewayInvalid' : 'L\'indirizzo del gateway predefinito deve essere composto da 4 numeri (0-255) separati da punti. Controlla i valori.',
'errDNSServerEmpty' : 'L\'indirizzo del server DNS non può essere vuoto.',
'errDNSServerInvalid' : 'L\'indirizzo del server DNS deve essere composto da 4 numeri (0-255) separati da punti. Controlla i valori.',
'errIpAddressEmpty' : 'L\'indirizzo IP non può essere vuoto.',
'errIpAddressInvalid' : 'L\'indirizzo IP deve essere composto da 4 numeri (0-255) separati da punti. Controlla i valori.',
'errorGenericCommitError' : 'Si è verificato un errore.  Verifica le informazioni in basso e riprova.',
'errorSSIDEmpty' : 'Inserisci un nome per la tua rete wireless.',
'errorSSIDInvalidChars' : 'Il nome della rete può contenere solo lettere, numeri, punteggiatura e spazi.',
'errorSSIDTooLong' : 'Il nome della rete deve essere più corto di 32 caratteri.',
'errorWEPPasswordEmpty' : 'Inserisci una password per rendere protetta la rete wireless.',
'errorWEPPasswordInvalidChars' : 'La password di rete può contenere solo numeri e lettere dalla A alla F.',
'errorWEPPasswordInvalidLength' : 'La password di rete deve essere lunga 10-26 caratteri.',
'errorWPAPasswordEmpty' : 'Inserisci una password per rendere protetta la rete wireless.',
'errorWPAPasswordInvalidChars' : 'La password di rete può contenere solo lettere, numeri, punteggiatura e spazi.',
'errorWPAPasswordInvalidLength' : 'La password di rete deve essere lunga 8-63 caratteri.',
'errPasswordEmpty' : 'Inserisci la password.',
'errPasswordInvalid' : 'Il  nome utente può contenere solo lettere, numeri, punteggiatura e spazi.',
'errPasswordTooLong' : 'La lunghezza della password deve essere minore di 64 caratteri.',
'errServAddressEmpty' : 'Inserisci un indirizzo di servizio.',
'errSubnetMaskEmpty' : 'La maschera di sottorete non può essere vuota.',
'errSubnetMaskInvalid' : 'La maschera di sottorete deve essere composta da 4 numeri (0-255) separati da punti. Controlla i valori.',
'errUsernameInvalid' : 'Il  nome utente può contenere solo lettere, numeri, punteggiatura e spazi.',
'errUsernameTooLong' : 'La lunghezza del nome utente deve essere minore di 64 caratteri.',
'errVCIInvalid' : 'Inserisci un numero compreso tra 0 e 65535. Il tuo ISP sarà in grado di fornirti il valore corretto da utilizzare.',
'errVPIInvalid' : 'Inserisci un numero compreso tra 0 e 255. Il tuo ISP sarà in grado di fornirti il valore corretto da utilizzare.',
'p802t003' : 'Poiché alcune impostazioni sono cambiate, potresti dover riselezionare la tua rete wireless:',
'p802t011' : 'Poiché alcune impostazioni sono cambiate, potresti dover riselezionare la tua rete wireless:',
'dft003' : 'Hai bisogno di aiuto?',
'dft004' : 'Hai domande o ti serve assistenza? Puoi ricevere aiuto 24 ore su 24 nel nostro centro di assistenza online.<br><a href="http://www.belkin.com/support/" id="dfBelkinHelp">Centro assistenza Belkin &rarr;</a>',
'dhChangeSSID' : 'Cambia &raquo;',
'dhPassLabel' : 'Password:',
'dhPasswordObscured24' : 't********',
'dhShow' : 'Mostra:',
'dhSSID24' : '{blahblah}',
'dhToggle24' : '2,4 GHz',
'dhToggle5' : '5,0 GHz',
'DownSpeed' : '32.6',
'errUsernameEmpty' : 'Digita il nome utente.',
'gt10am' : '10:00 a.m.',
'gt10pm' : '10:00 p.m.',
'gt11am' : '11:00 a.m.',
'gt11pm' : '11:00 p.m.',
'gt1am' : '1:00 a.m.',
'gt1amNextDay' : '1:00 a.m. il giorno seguente',
'gt1pm' : '1:00 p.m.',
'gt24ghz' : '2,4 Ghz',
'gt24GKey' : 'Chiave 2,4 GHz',
'gt24GName' : 'SSID rete 2,4 GHz',
'gt24PSK' : 'Password',
'gt24Sec' : 'WPA2',
'gt24SSID' : '12345678',
'gt2am' : '2:00 a.m.',
'gt2pm' : '2:00 p.m.',
'gt3am' : '3:00 a.m.',
'gt3pm' : '3:00 p.m.',
'gt4am' : '4:00 a.m.',
'gt4pm' : '4:00 p.m.',
'gt50ghz' : '5 GHz',
'gt5am' : '5:00 a.m.',
'gtGuestKey' : 'Chiave guest',
'gt5GMedia' : 'La tua banda da 5 GHz ha lo stesso nome, ma con ".media" aggiunto alla fine.',
'gtGuestName' : 'SSID per guest',
'gt5pm' : '5:00 p.m.',
'gt6am' : '6:00 a.m.',
'gt6pm' : '6:00 p.m.',
'gt7am' : '7:00 a.m.',
'gt7pm' : '7:00 p.m.',
'gt8am' : '8:00 a.m.',
'gt8pm' : '8:00 p.m.',
'gt9am' : '9:00 a.m.',
'gt9pm' : '9:00 p.m.',
'gtAccessControl' : 'Controllo genitori su Internet',
'gtAccessPoint' : 'Utilizzare come punto di accesso',
'gtADSL' : 'ADSL',
'gtAdvSettings' : 'Impostazioni avanzate',
'gtAllElseFails' : 'Se i problemi persistono, contatta l\'Assistenza Belkin &nbsp;',
'gtAndroidConnect01' : 'Telefoni e tablet Android',
'gtAndroidConnect02' : 'Il dispositivo fornisce un menu delle reti wireless disponibili nell\'app Impostazioni.',
'gtAndroidConnect03' : 'Apri l\'app <strong>Impostazioni</strong> e seleziona <strong>Wireless e rete</strong>.',
'gtAndroidConnect04' : 'Da qui, seleziona <strong>Wi-Fi</strong> per visualizzare l\'elenco di reti disponibili.',
'gtAndroidConnect05' : 'Seleziona <strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong>. <!-- IF NOT OPEN --> <span tid="gtNotOpen">Se richiesto, inserisci una password di rete <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>.</span> <!-- /IF -->',
'gtAt' : 'su',
'gtAttenuation' : 'Attenuazione',
'gtAustralia' : 'Australia',
'gtBackToDashboard' : '&larr; Torna al pannello di controllo',
'gtBelkin' : 'Belkin',
'gtBootLoader' : 'Programma di caricamento',
'gtCantConnect' : 'Non riusciamo a connetterci al tuo provider di servizi Internet.',
'gtCantConnectNoResponse' : 'Non riusciamo a stabilire una connessione a Internet - il tuo provider di servizi Internet non risponde.',
'gtChina' : 'Cina',
'gtClientList' : 'Dispositivi connessi',
'gtClose' : 'Chiudi',
'gtConfig' : 'Configura',
'gtConfigureRouter' : 'Configura il router',
'gtConnDevices' : 'Dispositivi connessi',
'gtConnectingToNew' : 'Connessione alla nuova rete',
'gtConnectionDet' : 'Dettagli connessione',
'gtConnType' : 'Tipo di connessione',
'gtContentFiltering' : 'Filtro siti Web',
'gtCopyright' : 'Copyright &copy; 2012. Belkin. Tutti i diritti riservati.',
'gtCurrTimezone' : 'Europa/Helsinki {REPLACE THIS SPAN WITH DETECTED Belkin TZ ID description}',
'gtDashboard' : '&larr; Pannello di controllo',
'gtDashTitle' : 'Pannello di controllo del router Belkin',
'gtDataRate' : 'Velocità di trasmissione dati',
'gtDDNS' : 'DDNS',
'gtDHCPList' : 'Dispositivi connessi',
'gtDHCPServer' : 'Server DHCP',
'gtDMZ' : 'DMZ',
'gtDNS' : 'DNS',
'gtDown' : 'Giù',
'gtDownloadSpeed' : 'Velocità di download',
'gtEncap' : 'Incapsulamento:',
'gtFileInstallError' : 'Non è stato possibile installare il file, forse è il tipo di file sbagliato',
'gtFileLoadError' : 'Non è stato possibile caricare il file, forse è il tipo di file sbagliato',
'gtFirewall' : 'Firewall',
'gtFirmware' : 'Firmware',
'gtFirmwareUpdate' : 'Aggiornamento firmware',
'gtFrance' : 'Francia',
'gtFreshest' : 'Stiamo scaricando la versione più recente del nostro firmware...',
'gtFrom' : 'Da:',
'gtFWUpdate' : 'Aggiornamento firmware',
'gtFWUpToDate' : 'Il tuo firmware è ora aggiornato.',
'gtGermany' : 'Germania',
'gtGuestAccess' : 'Accesso guest',
'gtGuestNetwork' : 'Rete guest',
'gtHomeNetwork' : 'Rete domestica',
'gtIfYouKnowConnection1' : 'Se sei certo di quale tipo di connessione utilizzi, puoi <a href="700-SelectConnection.htm" id="ISP1a010">impostarlo manualmente &raquo;</a>',
'gtIfYouKnowConnection2' : 'Se sei certo di quale tipo di connessione utilizzi, puoi <a href="700-SelectConnection.htm" id="ISP2a010">impostarlo manualmente &raquo;</a>',
'gtIfYouKnowConnection3' : 'Se sei certo di quale tipo di connessione utilizzi, puoi <a href="700-SelectConnection.htm" id="ISP3a010">impostarlo manualmente &raquo;</a>',
'gtIfYouKnowConnection4' : 'Se sei certo di quale tipo di connessione utilizzi, puoi <a href="700-SelectConnection.htm" id="ISP4a010">impostarlo manualmente &raquo;</a>',
'gtIfYouKnowConnection4a' : 'Se sei certo di quale tipo di connessione utilizzi, puoi <a href="700-SelectConnection.htm" id="ISP4aa010">impostarlo manualmente &raquo;</a>',
'gtIfYouKnowConnection5' : 'Se sei certo di quale tipo di connessione utilizzi, puoi <a href="700-SelectConnection.htm" id="ISP5a010">impostarlo manualmente &raquo;</a>',
'gtIfYouKnowConnection6' : 'Se sei certo di quale tipo di connessione utilizzi, puoi <a href="700-SelectConnection.htm" id="ISP6a010">impostarlo manualmente &raquo;</a>',
'gtIfYouKnowConnection7' : 'Se sei certo di quale tipo di connessione utilizzi, puoi <a href="700-SelectConnection.htm" id="ISP7a010">impostarlo manualmente &raquo;</a>',
'gtIntellistream' : 'Intellistream',
'gtInterleavePath' : 'Percorso interlacciato',
'gtInternetSettings' : 'Impostazioni Internet',
'gtIOSConnect01' : 'iPhone, iPad e iPod touch',
'gtIOSConnect02' : 'Il dispositivo fornisce un menu delle reti wireless disponibili nell\'app Impostazioni.',
'gtIOSConnect03' : 'Apri l\'app <strong>Impostazioni</strong> e seleziona <strong>Wi-Fi</strong>.',
'gtIOSConnect04' : 'Seleziona <strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong> dall\'elenco delle reti. <!-- IF NOT OPEN --> <span tid="gtNotOpen">Se richiesto, inserisci una password di rete <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>.</span> <!-- /IF -->',
'gtIPv6' : 'IPv6',
'gtIPV6Connection' : 'Connessione IPv6',
'gtISP' : 'Tipo di connessione dell\'ISP',
'gtJapan' : 'Giappone',
'gtLANIP' : 'Indirizzo IP LAN',
'gtLANMAC' : 'MAC LAN/WLAN',
'gtLANSettings' : 'Impostazioni LAN',
'gtLANSubnet' : 'Maschera di sottorete LAN',
'gtLLC' : 'LLC',
'gtLoadPrevSettings' : 'Carica impostazioni precedenti',
'gtLocalNetwork' : 'Rete locale',
'gtLocalSettings' : 'Impostazioni rete locale',
'gtLocked' : 'bloccato',
'gtMACAddress' : 'Indirizzo MAC',
'gtMACAddressFiltering' : 'Filtraggio indirizzi MAC',
'gtMacConnect01' : 'Mac OS X',
'gtMacConnect02' : 'Il computer fornisce un menu delle reti wireless disponibili all\'estremità destra della barra dei menu.',
'gtMacConnect03' : 'Fai clic sull\'icona con le onde wireless.',
'gtMacConnect04' : 'Seleziona <strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong> dall\'elenco delle reti. <!-- IF NOT OPEN --> <span tid="gtNotOpen">Se richiesto, inserisci una password di rete <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>.</span> <!-- /IF -->',
'gtMaybeLater' : 'Forse più tardi.',
'gtMbitPerSec' : 'Mb/s',
'gtMeaning' : 'Cosa significa?',
'gtMedia' : 'Media',
'gtMediaServer' : 'Media Server',
'gtmidnight' : 'Mezzanotte',
'gtModel' : 'Modello',
'gtName' : 'Nome',
'gtNeedMoreHelp' : 'Ti serve altro aiuto?',
'gtNetName' : 'Nome della rete',
'gtNewFWAvailableModem' : 'Abbiamo un nuovo firmware per il tuo modem.',
'gtNewFWAvailableRouter' : 'Abbiamo un nuovo firmware per il tuo router.',
'gtNewFWAvailableRouterAndModem' : 'Abbiamo un nuovo firmware per il tuo modem router.',
'gtNext' : 'Avanti',
'gtNo' : 'No',
'gtNoiseMargin' : 'Margine di rumore',
'gtNoMyNet' : 'Non vedo la mia rete.',
'gtNoon' : 'Mezzogiorno',
'gtNoSecCard' : 'Annota il nome e la password della rete, così potrai ricordarli in un secondo momento.',
'gtNotOpen' : 'Se richiesto, inserisci una password di rete <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>.',
'gtNZ' : 'Nuova Zelanda',
'gtOffline' : 'Offline',
'gtOnline' : 'Online',
'gtOptionalSoftware' : 'Software opzionale',
'gtOptionalSW' : 'Software opzionale',
'gtOptSW' : 'Software opzionale',
'gt-OR-' : '-O-',
'gtOther' : '...',
'gtOutputPower' : 'Potenza erogata',
'gtParentalControls' : 'Controllo genitori',
'gtPass' : 'Password:',
'gtPIC' : 'Controllo genitori su Internet',
'gtPICOtherTimes' : 'In qualsiasi altro orario, questo dispositivo non potrà accedere a Internet.',
'gtPleaseCallISP' : 'Contatta il tuo provider di servizi Internet',
'gtPortForwarding' : 'Inoltro delle porte',
'gtPrint' : 'Stampa',
'gtReadAllAboutIt' : 'Per ricevere ulteriore aiuto:',
'gtReconnectingHell' : 'Riconnessione...',
'gtRegister' : 'Registra',
'gtRegistration' : 'Registrazione',
'gtRestartRouter' : 'Riavvia il router',
'gtRestoreDef' : 'Ripristina impostazioni predefinite',
'gtRestoreFactDefault' : 'Ripristina impostazioni predefinite',
'gtRestoreFactDefaults' : 'Ripristina impostazioni predefinite',
'gtRestoreSettigns' : 'Ripristina impostazioni',
'gtRetest' : 'Riesegui il test della connessione',
'gtRouterDetails' : 'Dettagli del router',
'gtRouterInfo' : 'Informazioni sul router',
'gtSave' : 'Salva',
'gtSaveCurrentSettings' : 'Salvataggio delle impostazioni correnti',
'gtSaved' : 'Dispositivo senza nome salvato',
'gtSaveRestore' : 'Salva/Ripristina impostazioni',
'gtSaveRestoreSettings' : 'Salva/Ripristina impostazioni',
'gtSaveSettings' : 'Salva/Effettua backup delle impostazioni',
'gtSecLog' : 'Registro di protezione',
'gtSecurity' : 'Sicurezza',
'gtSelectLang' : 'Seleziona lingua:',
'gtSelfHeal' : 'Self-Healing',
'gtSelfHealing' : 'Self-Healing',
'gtSerialSupport' : 'Nella pagina seguente registreremo il numero seriale del tuo router per un\'eventuale futura assistenza.',
'gtShowtime' : 'Inizio',
'gtSpeedTestResults' : 'Ultimo controllo: 1 giorno fa alle 3:57 pm',
'gtStaticRouting' : 'Instradamento statico',
'gtStatus' : 'Stato',
'gtSystemSettings' : 'Impostazioni del sistema',
'gtTo' : 'A:',
'gtTraffStats' : 'Statistiche del traffico',
'gtTryAgain' : 'Riprova',
'gtUnlocked' : 'sbloccato',
'gtUp' : 'Su',
'gtUpdate' : 'Aggiorna',
'gtUpdateNoPowerModem' : 'Stiamo aggiornando il modem con il nuovo firmware. Non spegnere il router durante l\'operazione.',
'gtUpdateNoPowerRouter' : 'Stiamo aggiornando il router con il nuovo firmware. Non spegnere il router durante l\'operazione.',
'gtUploadSpeed' : 'Velocità di upload',
'gtUSA' : 'Stati Uniti',
'gtUserName' : 'User name (Nome utente):',
'gtUtils' : 'Utilità',
'gtVCI' : 'VCI:',
'gtVCMUX' : 'VC/MUX',
'gtVPI' : 'VPI:',
'gtWAN' : 'Impostazioni WAN',
'gtWANDNS' : 'Indirizzo DNS',
'gtWANGateway' : 'Gateway WAN',
'gtWANIP' : 'Indirizzo IP WAN',
'gtWANMAC' : 'Indirizzo MAC WAN',
'gtWANPingBlocking' : 'Blocco del ping WAN',
'gtWANSubnet' : 'Maschera di sottorete WAN',
'gtWebsiteFilter' : 'Filtro siti Web',
'gtWelcome' : 'Benvenuto',
'gtWiFi' : 'Wi-Fi',
'gtWifiSettings' : 'Le tue impostazioni Wi-Fi sono state modificate con successo.',
'gtWinConnect01' : 'Windows 7 o 8',
'gtWinConnect02' : 'Il computer fornisce un menu delle reti wireless disponibili all\'estremità destra della barra delle applicazioni.',
'gtWinConnect03' : 'Fai clic con il tasto destro del mouse sull\'icona composta dalle barre della potenza del segnale.',
'gtWinConnect04' : 'Seleziona <strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong>. <!-- IF NOT OPEN --> <span tid="gtNotOpen">Se richiesto, inserisci una password di rete <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>.</span> <!-- /IF -->',
'gtWinConnect05' : 'Windows Vista e Windows XP',
'gtWinConnect06' : 'Il computer fornisce un menu delle reti wireless disponibili all\'estremità destra della barra delle applicazioni.',
'gtWinConnect07' : 'Fai clic con il tasto destro del mouse sull\'icona che mostra un computer con onde wireless (XP) o due computer (Vista).',
'gtWinConnect08' : 'Scegli dal menu <strong>Visualizza reti wireless disponibili</strong> (XP) o <strong>Connetti a una rete</strong> (Vista).',
'gtWinConnect09' : 'Seleziona <strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong>. <!-- IF NOT OPEN --> <span tid="gtNotOpen">Se richiesto, inserisci una password di rete <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>.</span> <!-- /IF -->',
'gtWireless' : 'Wireless',
'gtWiring' : 'Cablaggio',
'gtWPSShort' : 'WPS',
'gtWPS' : 'Configurazione protetta Wi-Fi',
'gtYes' : 'Sì',
'htFWUpdate' : 'Cosa sono gli aggiornamenti firmware?',
'htFWUpdateContent' : 'Di tanto in tanto, Belkin potrebbe creare nuove versioni del firmware del router. Questi aggiornamenti contengono miglioramenti e risoluzioni di problemi per il router. <br><br>NOTE: prima di aggiornare il firmware, esegui il backup delle tue impostazioni attuali.',
'htParent' : 'Cos\'è un filtro per siti web?',
'htPIC' : 'Controllo di Internet',
'htPICBlocked' : 'Connessione Internet sospesa',
'htPICBlockedContent' : 'Riattiva l\'accesso quando sei pronto a ripristinare la connettività Internet su tutti i dispositivi.',
'htPICContent' : 'Con l\'opzione Controllo di Internet puoi personalizzare l\'orario in modo da bloccare l\'accesso a Internet per ciascun dispositivo.',
'htSaveRestore' : 'Cosa significa salvare, caricare o ripristinare le impostazioni?',
'htSaveRestoreContent' : 'Il tuo router ricorda le impostazioni per opzioni come il nome della rete, la password ecc. Queste impostazioni possono essere salvate (es. con un backup) e possono quindi essere caricate di nuovo nel router. Le impostazioni del router possono anche essere ripristinate agli originari valori di fabbrica.',
'htSaveRestoreContentMobile' : '<br>* Su iPhone, iPad e iPod touch, non è possibile salvare e caricare il file delle impostazioni. Dovrai utilizzare un altro dispositivo, come un laptop, per salvare e caricare il file delle impostazioni.',
'ISP1t003' : 'Spiega che sei riuscito a ottenere un indirizzo IP, ma il DNS non funziona.',
'ISP1t007' : 'Il DNS traduce nomi come "belkin.com" in indirizzi numerici (indirizzi IP) che i computer utilizzano per navigare in Internet. Il tuo computer ha un indirizzo IP, ciò significa che è connesso a Internet, ma il DNS non funziona, perciò non puoi navigare in rete. C\'è qualcosa che non funziona con il tuo provider di servizi Internet.   <span class="nub"></span>',
'ISP2t003' : 'Spiega che il tuo router è riuscito a ottenere un indirizzo IP, che il DNS funziona, ma che non è possibile inviare ping a nessuno.',
'ISP2t007' : 'I ping vengono inviati ad altre macchine su Internet per verificare se è possibile avviare con loro una comunicazione. Il DNS traduce nomi come "belkin.com" in indirizzi numerici (indirizzi IP) che i computer utilizzano per navigare in Internet. Il tuo router ha un indirizzo IP, ciò significa che è connesso a Internet, e il DNS fornito dal provider di servizi Internet funziona, ma non riusciamo a inviare ping. C\'è qualcosa che non funziona con il tuo provider di servizi Internet. <span class="nub"></span>',
'ISP3t004' : 'Spiega che il nome utente e la password sono stati accettati, ma non riesci ancora a stabilire una connessione Internet.',
'ISP3t007' : 'I ping vengono inviati ad altre macchine su Internet per verificare se è possibile avviare con loro una comunicazione. Il tuo provider di servizi Internet ha accettato il nome utente e la password, ma non riusciamo a inviare ping, perciò non puoi navigare. C\'è qualcosa che non funziona con il tuo provider di servizi Internet.  <span class="nub"></span>',
'ISP4t003' : 'Spiega che il nome utente e la password non sono stati accettati dopo alcuni tentativi.',
'ISP4t007' : 'La connessione Internet richiede un nome utente e una password, ma il tuo provider di servizi Internet non ha accettato i valori da te inseriti. Il provider sarà in grado di fornirti le informazioni corrette.   <span class="nub"></span>',
'ISP5t003' : 'Spiega che ha scelto un tipo di connessione dinamica, ma che non sei riuscito a ottenere un indirizzo IP.',
'ISP5t007' : 'Un indirizzo IP identifica un router o un altro dispositivo su Internet. Il tuo provider di servizi Internet non sta fornendo un indirizzo al router e senza un indirizzo IP non puoi connetterti. Ci dev\'essere qualche problema con il tuo provider di servizi Internet o la tua connessione non è dinamica.   <span class="nub"></span>',
'ISP6t003' : 'Spiega che ha scelto un tipo di connessione statica e che non riesci a connetterti a Internet.',
'ISP6t007' : 'La connessione statica viene utilizzata quando il provider di servizi Internet assegna uno o più specifici indirizzi IP da utilizzare.   <span class="nub"></span>',
'ISP7t003' : 'Spiega che le tue attuali impostazioni per i valori VPI/VCI non funzionano e che ti servono i valori corretti.',
'ISP7t007' : 'I valori VPI e VCI indicano al router il percorso necessario per comunicare con il provider di servizi Internet. Non siamo riusciti a rilevare le corrette impostazioni.<span class="nub"></span>',
'Network24Passkey' : '{REPLACE WITH 2.4 PASSWORD}',
'Network24SSID' : '{REPLACE WITH 2.4 SSID}',
'p100t002' : 'Colleghiamoci a Internet.',
'p100t003' : 'Sei connesso al nuovo router, perciò è ora possibile avviare la comunicazione con il provider di servizi Internet.',
'p100t004' : 'Colleghiamoci a Internet.',
'p100t005' : 'Sei connesso al nuovo router, perciò è ora possibile avviare la comunicazione con il provider di servizi Internet.',
'p100t007' : 'Rileva la mia connessione',
'p100t008' : 'Se sei certo di quale tipo di connessione utilizzi, puoi <a href="700-SelectConnection.htm" id="p100a009" tid="p100t009">impostarlo manualmente &raquo;</a>, o passare direttamente al <a href="000-Dashboard.htm" id="p100a010" tid="p100t010">pannello di controllo &raquo;</a>.',
'p100t009' : 'impostalo manualmente &raquo;',
'p100t010' : 'pannello di controllo &raquo;',
'p100t013' : 'In questo momento, stiamo visualizzando le pagine in &nbsp;',
'p100t024' : 'un\'installazione quasi automatica',
'p100t025' : 'Innanzitutto, rileveremo automaticamente il tipo di cablaggio e il tipo di connessione fornito dal provider di servizi Internet (ISP). Dovrai eseguire solo alcune operazioni. Dopodiché, faremo in modo che il software del router sia aggiornato. <span class="nub"></span>',
'p1010MRt001' : 'Stiamo avendo problemi a comunicare con il tuo modem.',
'p1010MRt002' : 'Pensiamo vi sia un problema di cavi.',
'p1010MRt003' : 'Ecco cosa puoi fare per risolverlo:',
'p1010MRt004' : 'Accertati che il modem router sia connesso alla presa telefonica abilitata per il collegamento a Internet. Dovrebbe esserci un cavo di rete collegato dalla porta ADSL del modem router (la porta grigia in alto) alla presa telefonica.',
'p1010MRt005' : 'Assicurati che il modem sia acceso. L\'alimentatore dovrebbe essere collegato a entrambe le estremità e una o più spie luminose sul modem dovrebbero essere accese.',
'p1010MRt006' : 'Dovrebbe esserci un cavo di rete collegato al modem e alla porta gialla sul router. Questo cavo trasporta il segnale dal modem al router, senza il suo ausilio, non puoi connetterti online.',
'p1010MRt007' : 'Se i cavi sono collegati correttamente, potresti provare a riavviare il router scollegando il suo alimentatore. Attendi quindi 15 secondi e ricollegalo. Se il tuo modem è dotato di una batteria, individua il pulsante di reset del modem e utilizza quello invece.',
'p1010MRt008' : 'Ecco come dovrebbero apparire le tue connessioni:',
'p1010MRt009' : 'Continueremo a ricercare una connessione mentre tu controlli.',
'p1010MRt010' : 'Il problema di cablaggio più comune è quello tra il modem e il router. É importante controllare entrambe le estremità del cavo. Un\'estremità dovrebbe essere collegata alla porta gialla sul nuovo router, mentre l\'altra alla porta simile sul modem. I diversi produttori di modem etichettano le porte in modo diverso; potrebbe perciò essere denominata "data", "LAN", "network" (rete), o "Ethernet".  <span class="nub"></span>',
'p1020t001' : 'Stiamo avendo difficoltà a comunicare con il tuo provider di servizi Internet.',
'p1020t002' : 'Riavvia il tuo modem-router.',
'p1020t003' : 'Non riusciamo a ottenere una connessione Internet. Proviamo a riavviare il tuo modem router.',
'p1020t004' : 'Spegni il modem router. Solitamente, è necessario utilizzare un interruttore sul modem router o ti basta semplicemente scollegare l\'alimentatore.',
'p1020t005' : 'Attendi 15 secondi.',
'p1020t006' : 'Riaccendi il modem router.',
'p1020t007' : 'Dopo alcuni secondi le spie luminose si accenderanno e sarà possibile avviare la comunicazione con il provider di servizi Internet.',
'p1020t008' : 'Se il problema persiste, contatta il tuo provider di servizi Internet per verificare le impostazioni dell\'account.',
'p1020t009' : 'Attenderemo che il modem router si accenda e spenga, quindi continueremo la procedura automatica.',
'p1020t010' : 'Perché devo riavviare il modem?',
'p1020t011' : 'Alcuni modem devono essere riavviati prima di iniziare a comunicare con un nuovo router o un computer non conosciuto. Se vi sono problemi con il tuo provider di servizi Internet, il modem potrebbe farti perdere la connessione inaspettatamente. Abbiamo rilevato il modem, ma non la connessione Internet. Riavviandolo potrai risolvere il problema.<span class="nub"></span>',
'p1100t001' : 'È disponibile un aggiornamento firmware!',
'p1100t002' : 'Ti consigliamo di aggiornare il router alla versione firmware più recente per fare in modo che tutto funzioni correttamente.',
'p1100t003' : 'Mostrami le novità',
'p1201t001' : 'Blocca il pannello di controllo con una password.',
'p1201t002' : 'Inserisci una password per bloccare il pannello di controllo.',
'p1201t003' : 'Inserisci una password.',
'gtSetPassword' : 'Imposta password',
'p1201t005' : 'Annulla',
'p1210t001' : 'Il pannello di controllo è bloccato.',
'p1210t002' : 'Inserisci la password:',
'p1210t003' : 'Inserisci la password.',
'p1210t004' : 'La password non è corretta.',
'p1210t005' : 'Lasciami entrare!',
'p1300t001' : 'Per una maggiore potenza.',
'p1300t002' : 'Puoi migliorare le prestazioni della connessione Internet installando Intellistream. L\'operazione prevede l\'esecuzione di un test della velocità.',
'p1300t003' : 'Installa Intellistream',
'p1300t004' : 'Forse più tardi.',
'p1302t001' : 'Il firmware è aggiornato.',
'p1316t001' : 'Installazione della versione aggiornata del firmware non riuscita. Prova nuovamente facendo clic su "Ricerca nuove versioni del firmware".',
'p1318t001' : 'La versione del file di aggiornamento non è compatibile con la versione di questo dispositivo. Aggiornamento non riuscito. Procurati il file corretto e ritenta',
'p1333t001' : 'Il tuo firmware è stato aggiornato con successo.',
'p1400t001' : 'Ottieni il massimo dalla tua porta USB.',
'p1400t002' : 'Esistono alcuni software opzionali che puoi installare per aiutarti a ottenere il massimo dalla porta USB del tuo router.',
'p1400t003' : 'Mostrami i software opzionali',
'p1500t001' : 'Sei qui.',
'p1500t002' : 'Sembra che sei nel fuso orario <span tid="gtCurrTimezone">Europa/Helsinki {REPLACE THIS SPAN WITH DETECTED Belkin TZ ID description}</span>. Giusto?',
'p1500t003' : 'Giusto',
'p1500t004' : 'Fammi scegliere',
'p200t001' : 'Collegamento in corso...',
'p200t002' : ' Stiamo verificando le connessioni fisiche del router.',
'p202At001' : 'Tentativo ancora in corso...',
'p202At002' : ' Stiamo rilevando il tipo di connessione del tuo provider di servizi Internet. Questa operazione potrebbe richiedere alcuni minuti.',
'p202Bt001' : 'Tentativo ancora in corso...',
'p202Bt002' : '  Stiamo verificando se il provider di servizi Internet richiede una password. Questa operazione potrebbe richiedere alcuni minuti.',
'p202Ct001' : 'Tentativo ancora in corso...',
'p202Ct002' : ' Ora verifichiamo la connessione.',
'p202t001' : 'Collegamento in corso...',
'p202t002' : ' Stiamo rilevando il tipo di connessione del tuo provider di servizi Internet.',
'p208t001' : 'Hai i numeri VPI/VCI a portata di mano?',
'p208t002' : 'Per poterti connettere, ti servono i numeri VPI e VCI. Questi valori servono per identificare il percorso di comunicazione che il tuo provider di servizi Internet desidera usare.',
'p208t003' : 'Il provider dei servizi Internet dovrebbe aver fornito questi numeri. Se non li trovi, contatta il tuo provider di servizi Internet.',
'p208t006' : '0',
'p208t007' : '0',
'p208t009' : 'Prova la mia connessione',
'p208t011' : 'VPI e VCI',
'p208t012' : 'I parametri Virtual Path Identifier e Virtual Circuit Identifier indicano al router quale percorso deve essere utilizzato per la comunicazione con il provider di servizi Internet. Ci sono un paio di impostazioni comuni che proviamo ad attuare automaticamente, prima di dover per forza chiedere il tuo aiuto.<span class="nub"></span>',
'p209t001' : 'Si sono verificati dei problemi con le tue impostazioni.',
'p209t002' : 'Il tuo provider di servizi Internet non ha accettato i valori VPI/VCI immessi. Riproviamo?',
'p210CXt001' : 'Hai una connessione PPPoE.',
'p210CXt002' : 'Avrai bisogno di un nome utente e di una password per accedere a Internet.',
'p210CXt004' : '<strong>Il tuo provider di servizi Internet dovrebbe averti fornito queste informazioni. Se non le trovi, contatta il tuo ISP.</strong>',
'p210CXt006' : '0',
'p210CXt007' : '0',
'p210CXt016' : 'Prova la mia connessione',
'p210CXt017' : 'PPPoE',
'p210CXt018' : 'Il Point-to-Point Protocol over Ethernet crea una connessione sicura tra il router e l\'ISP. Viene di solito utilizzato dalle compagnie telefoniche.<span class="nub"></span>',
'p210DXt001' : 'Hai una connessione PPPoA.',
'p210DXt002' : 'Avrai bisogno di un nome utente e di una password per accedere a Internet.',
'p210DXt004' : '<strong>Il tuo provider di servizi Internet dovrebbe averti fornito queste informazioni. Se non le trovi, contatta il tuo ISP.</strong>',
'p210DXt006' : '0',
'p210DXt007' : '0',
'p210DXt016' : 'Prova la mia connessione',
'p210DXt017' : 'PPPoA',
'p210DXt018' : 'Il Point-to-Point Protocol over ATM crea una connessione sicura tra il router e l\'ISP. Viene di solito utilizzato dalle compagnie telefoniche.<span class="nub"></span>',
'p210t001' : 'Hai una connessione DSL PPPoE.',
'p210t002' : 'Avrai bisogno di un nome utente e di una password per accedere a Internet.',
'p210t003' : '<strong>Il tuo provider di servizi Internet (ISP) dovrebbe averti fornito queste informazioni. Se non le trovi, contatta il tuo ISP.</strong>',
'p210t005' : 'Nome utente ISP:',
'p210t009' : 'Prova la mia connessione',
'p210t010' : 'PPPoE',
'p210t011' : 'Il Point-to-Point Protocol over Ethernet crea una connessione sicura tra il router e l\'ISP. Viene di solito utilizzato dalle compagnie telefoniche.<span class="nub"></span>',
'p211t001' : 'Collegamento in corso...',
'p211t002' : ' Stiamo cercando di effettuare l\'accesso al provider di servizi Internet. L\'operazione potrebbe richiedere 2 o più minuti.',
'p212DXt001' : 'Si sono verificati dei problemi con le tue impostazioni PPPoA.',
'p212DXt002' : 'Il nome utente, la password o entrambi non sono corretti. Riprova. Se non riesci a reperirli, contatta l\'ISP.',
'p212t001' : 'Si sono verificati dei problemi con le tue impostazioni PPPoE.',
'p212t002' : 'Il nome utente, la password o entrambi non sono corretti. Riprova. Se non riesci a reperirli, contatta l\'ISP.',
'p220t002' : 'Per completare la connessione e l\'accesso a Internet, inserisci un nome utente, una password e l\'indirizzo del servizio.',
'p220t003' : '<strong>Il tuo provider di servizi Internet dovrebbe averti fornito queste informazioni. Se non le trovi, contatta il tuo ISP.</strong>',
'p220t006' : 'Nome utente ISP:',
'p220t007' : 'Indirizzo del servizio:',
'p220t010' : 'Prova la mia connessione',
'p220t013' : 'Hai una connessione L2TP o PPTP.',
'p220t014' : 'In alternativa, scegli manualmente la tua connessione &raquo;',
'p220t015' : 'L2TP e PPTP',
'p220t016' : 'I protocolli L2TP (Layer 2 Tunneling Protocol) e PPTP (Point-to-Point Tunneling Protocol) creano una connessione privata e criptata tra te e il tuo provider di servizi Internet. <span class="nub"></span>',
'p221t001' : 'Collegamento in corso...',
'p221t002' : ' Stiamo cercando di effettuare l\'accesso al provider di servizi Internet. L\'operazione potrebbe richiedere fino a 2 minuti.',
'p222t002' : 'Il nome utente, la password o entrambi non sono corretti. Riprova. Se non riesci a reperirli, contatta l\'ISP.',
'p222t004' : 'Si sono verificati dei problemi con le tue impostazioni.',
'p2300t001' : 'La tua versione del firmware installata:',
'p2300t002' : 'Aggiorna il firmware da un file salvato localmente:',
'p2300t006' : 'Sei sicuro di voler installare {{file}}?',
'p2300t010' : 'Ricerca nuovo firmware',
'p2400t006' : 'Le tue impostazioni attuali saranno sostituite. Sei sicuro di voler caricare {{file}}?',
'p2410t001' : 'Sei sicuro di voler ripristinare i valori predefiniti?',
'p2410t002' : 'Facendo clic su "Sì", saranno cancellate le impostazioni del router, come il nome e la password, e saranno sostituite con i valori originari di fabbrica.',
'p300t005' : 'Ora sei online.',
'p310t001' : 'É disponibile un aggiornamento!',
'p310t001x' : 'Questo aggiornamento (v2.1.0c) include:',
'p310t002' : 'Per installare il nuovo firmware, leggi e accetta il contratto di licenza.',
'p310t003' : 'Contratto di licenza',
'p310t004' : 'Ich bestätige die Lizenzvereinbarung.',
'p310t005' : 'Installa aggiornamento',
'p310t006' : 'Cos\'è un firmware?',
'p310t007' : 'Il firmware è il software eseguito dal tuo router. Il firmware viene aggiornato per migliorare le prestazioni del router, perciò è bene accertarsi di avere a disposizione sempre l\'ultima versione.   <span class="nub"></span>',
'p315t001' : 'Download del nuovo firmware.',
'p315t002' : 'Stato del download:',
'p315t003' : 'Cos\'è un firmware?',
'p315t004' : 'Il firmware è il software eseguito dal tuo router. Il firmware viene aggiornato per migliorare le prestazioni del router, perciò è bene accertarsi di avere a disposizione sempre l\'ultima versione.   <span class="nub"></span>',
'p320t001' : 'Installazione del nuovo firmware.',
'p320t002' : 'Al termine dell\'aggiornamento del firmware, riavvieremo il router per completare l\'installazione.',
'p320t004' : 'Cos\'è un firmware?',
'p320t005' : 'Il firmware è il software eseguito dal tuo router. Il firmware viene aggiornato per migliorare le prestazioni del router, perciò è bene accertarsi di avere a disposizione sempre l\'ultima versione.   <span class="nub"></span>',
'p320t006' : 'L\'operazione durerà più o meno 3 minuti. Avanzamento dell\'aggiornamento:',
'p320t010' : 'Al termine dell\'aggiornamento del firmware, riavvieremo il modem per completare l\'installazione.',
'p321t001' : 'Riavvio del router',
'p321t002' : 'Riavvio del modem',
'p321t003' : 'Ora che il firmware è stato installato, dobbiamo riavviare il router per rendere la modifica effettiva.',
'p321t004' : 'Riavvio:',
'p321t005' : 'Aggiornamenti del firmware',
'p321t006' : 'Il firmware è il software che utilizzato per implementare i protocolli di rete e di sicurezza. Gli aggiornamenti migliorano l\'affidabilità e la funzionalità, perciò è utile accertarsi di avere a disposizione sempre la versione più recente.<span class="nub"></span>',
'p321t010' : 'Ora che il firmware è stato installato, dobbiamo riavviare il modem per rendere la modifica effettiva.',
'p330t001' : 'Verifica della velocità di connessione...',
'p330t002' : 'Un rapido test della velocità aiuterà il router a ottimizzare la tua connessione Internet. L\'operazione richiederà un minuto o due.',
'p331t001' : 'Il tuo firmware è aggiornato.',
'p332t001' : 'Proveremo l\'aggiornamento del firmware un\'altra volta.',
'p333t001' : 'Il tuo firmware è stato aggiornato.',
'p334t001' : 'Ecco i risultati del tuo test!',
'p334t002' : 'Vediamo cosa abbiamo scoperto:',
'p334t003' : 'Velocità di download',
'p334t004' : 'Mb/s',
'p334t005' : 'Velocità di upload',
'p334t006' : 'Mb/s',
'p340t002' : ' Ci stiamo riconnettendo al tuo router, così possiamo continuare.',
'p341t001' : 'Riavvia il tuo router',
'p341t002' : 'Stiamo avendo problemi a riconnetterci al tuo router. Un riavvio veloce dovrebbe essere d\'aiuto.',
'p341t003' : 'Scollega l\'alimentatore del router, attendi alcuni secondi, e ricollegalo. Quando la spia sul router è blu fisso, sarà possibile effettuare la connessione.',
'p341t003w' : 'Scollega il router, attendi alcuni secondi, e ricollegalo. Quando la spia sul router è blu fisso, sarà possibile effettuare la connessione.',
'p341t004' : ' Controlleremo il router mentre sei intento a eseguire queste fasi.',
'p342t001' : ' Ci stiamo riconnettendo al tuo router, così possiamo continuare.',
'p342t002' : 'Potresti dover riselezionare la tua rete wireless <span tid="Network24SSID">({REPLACE WITH 2.4 SSID})</span> dall\'elenco delle reti wireless per aiutarci.',
'p343t002' : ' Ci stiamo riconnettendo al router per continuare.',
'p343t003' : 'Potresti dover riselezionare la tua rete wireless <span tid="Network24SSID">({REPLACE WITH 2.4 SSID})</span> per riprendere l\'operazione.',
'p344t001' : 'Riavvia il tuo router.',
'p344t002' : 'Stiamo avendo problemi a riconnetterci al tuo router. Un riavvio veloce dovrebbe essere d\'aiuto.',
'p344t003' : 'Scollega l\'alimentatore del router, attendi 15 secondi, e ricollegalo. Quando la spia sul router è blu fisso, sarà possibile effettuare nuovamente la connessione.',
'p344t003w' : 'Scollega il router, attendi 15 secondi, e ricollegalo. Quando la spia sul router è blu fisso, sarà possibile effettuare nuovamente la connessione.',
'p344t004' : ' Controlleremo il router mentre sei intento a eseguire queste fasi.',
'p400f010' : 'WPA2',
'p400f011' : 'WPA/WPA2',
'p400f012' : 'WEP',
'p400f013' : 'Apri',
'p400t001' : 'Connetti tutto più velocemente.',
'p400t002' : 'Se dai al tuo nuovo router lo stesso nome e la stessa password di rete del tuo vecchio router, sarà più semplice connettere immediatamente tutti i tuoi dispositivi.',
'p400t004' : 'Nome della rete:',
'p400t008' : 'Tipo di sicurezza: <em class="hide-on-phones">(WPA2 è il metodo più sicuro.)</em>',
'p400t014' : 'La tua banda da 5 GHz avrà lo stesso nome, ma con ".media" aggiunto alla fine.',
'p400t015' : 'Se vuoi, puoi modificarlo più tardi.',
'p400t017' : 'Salva e Continua',
'p400t018' : 'Perché devo rinominare la mia rete?',
'p400t019' : 'Tutti i dispositivi wireless precedentemente connessi al tuo vecchio router si connetteranno automaticamente al nuovo router, se utilizzi lo stesso nome e la stessa password per la rete. Inoltre, quando ricerchi la rete sui tuoi dispositivi, è più facile quando il nome è unico.<span class="nub"></span>',
'p450a009' : 'Grande! E adesso?',
'p450t001' : 'Le tue modifiche sono state salvate.',
'p450t002' : 'Ecco i nuovi nome e password di rete',
'p450t003' : 'Se hai utilizzato il nome e la password di rete vecchi, i dispositivi wireless esistenti dovrebbero riconnettersi ora.',
'p450t004' : 'Nome:',
'p450t008' : 'Il router è stato fornito con un foglietto di carta attaccato alla base su cui puoi scrivere il nuovo nome della tua rete. Così, quando ti serve, l\'avrai subito a disposizione.',
'p450t011' : 'Se hai utilizzato il nome e la password di rete vecchi, la maggior parte dei tuoi dispositivi di rete si riconnetterà automaticamente al prossimo avvio. Per alcuni dispositivi potresti dover riselezionare la tua rete, dopodiché la connessione sarà automatica. Nella guida di installazione rapida troverai le istruzioni per Windows, OS X, iOS e Android.   <span class="nub"></span>',
'p451a009' : 'Grande! E adesso?',
'p451t001' : 'Nessuna modifica.',
'p451t002' : 'Il nome e la password di rete non sono cambiati.',
'p451t003' : 'Dovrai inserire le nuove informazioni del nome e la password di rete su tutti i tuoi dispositivi wireless:',
'p451t004' : 'Nome:',
'p451t008' : 'Il router è stato fornito con un foglietto di carta attaccato alla base su cui puoi scrivere il nome della tua rete. Così, quando ti serve, l\'avrai subito a disposizione.',
'p451t011' : 'Devi inserire le informazioni della tua nuova rete su tutti i tuoi dispositivi wireless. Nella guida di installazione rapida troverai le istruzioni per Windows, OS X, iOS e Android.  <span class="nub"></span>',
'p500t001' : 'Registra il tuo router.',
'p500t002' : 'La registrazione è veloce e ti può aiutare a risparmiare molto tempo, nel caso dovessi aver bisogno del Servizio Clienti.',
'p500t004' : 'Perché registrarti?',
'p500t005' : 'Sapere un po\' di più su di te, ci aiuta ad aiutarti più velocemente quando ne hai bisogno.  <span class="nub"></span>',
'p500tCancel' : 'Registrati più tardi &raquo;',
'p500tSubmit' : 'Completa la registrazione',
'p600t001' : 'Visita la pagina Software opzionali del router per recuperare software simili per i tuoi altri computer e dispositivi portatili.',
'p600t002' : 'Grazie, passa al pannello di controllo',
'p600t003' : 'Software opzionali',
'p600t004' : 'Questi strumenti software ti aiutano ad approfittare delle funzionalità avanzate offerte dal tuo router. Sono disponibili download per Apple iOS, Android, Windows e OS X.  <span class="nub"></span>',
'p601t001' : '<strong>Grazie per la registrazione!</strong>',
'p700MRt001' : 'Non siamo riusciti a configurare automaticamente la tua connessione. Ci servono maggiori informazioni per aiutarti a connetterti.',
'p700MRt002' : 'Che tipo di connessione stai cercando di configurare?',
'p700MRt003' : 'La mia connessione è una:',
'p700MRt005' : 'Connessione dinamica  (1483 Bridge)',
'p700MRt007' : 'Connessione PPPoE',
'p700MRt009' : 'Connessione PPPoA',
'p700MRt011' : 'Connessione statica (IPoA)',
'p700MRt014' : 'Non sono sicuro quale tipo di connessione sia:',
'p700MRt016' : 'Riprova l\'opzione automatica',
'p700MRt017' : 'Tipi di connessione',
'p700MRt018' : '<span class="black">Dinamica —</span> Queste connessioni stanno diventando sempre più comuni per alcuni provider DSL.',
'p700MRt019' : '<span class="black">PPPoE e PPTP —</span> Queste connessioni richiedono un nome utente e una password forniti dal provider di servizi Internet.',
'p700MRt021' : '<span class="black">Statica —</span> Queste connessioni richiedono parametri personalizzati e unici per un determinato utente. <span class="nub"></span>',
'p700t001' : 'Non siamo riusciti a configurare automaticamente la tua connessione. Ci servono maggiori informazioni per aiutarti a connetterti.',
'p700t002' : 'Che tipo di connessione stai cercando di configurare?',
'p700t003' : 'La mia connessione è una:',
'p700t005' : 'Connessione dinamica',
'p700t007' : 'Connessione PPPoE',
'p700t008' : 'Connessione L2TP o PPTP',
'p700t013' : 'Connessione statica',
'p700t014' : 'Non sono sicuro quale tipo di connessione sia:',
'p700t914' : 'Se non riesci ancora a determinare il tuo tipo di connessione, contatta il provider di servizi Internet (ISP).',
'p700t016' : 'Riprova l\'opzione automatica',
'p700t017' : 'Tipi di connessione',
'p700t018' : '<span class="black">Dinamica —</span> Comune per la maggior parte dei provider di connessioni via cavo e con fibra ottica e in alcuni casi per provider di connessioni DSL.',
'p700t019' : '<span class="black">PPPoE e PPTP —</span> Richiede un nome utente e una password forniti dal provider di servizi Internet.',
'p700t021' : '<span class="black">Statica —</span> Richiede parametri personalizzati e unici per un determinato utente. <span class="nub"></span>',
'p701MRt001' : 'Hai scelto una connessione dinamica.',
'p701MRt002' : 'Il provider dei servizi Internet potrebbe aver fornito impostazioni aggiuntive per la configurazione.',
'p701MRt004' : 'Impostazioni dinamiche:',
'p701MRt006' : '0',
'p701MRt007' : '0',
'p701MRt016' : 'Prova la mia connessione',
'p701MRt017' : 'Connessioni dinamiche',
'p701MRt018' : 'Una connessione dinamica viene configurata automaticamente, una volta che è stata stabilita la comunicazione con il provider di servizi Internet.<span class="nub"></span>',
'p701t001' : 'Connessione dinamica in corso...',
'p701t002' : ' Stiamo richiedendo una connessione al provider di servizi Internet',
'p702t001' : 'Riavvio del modem...',
'p702t002' : 'Ci stiamo preparando per provare un diverso tipo di connessione riavviando il modem.',
'p710MRt001' : 'Hai scelto una connessione statica.',
'p710MRt002' : 'Il provider dei servizi Internet dovrebbe aver fornito le impostazioni per la configurazione statica. Se non le trovi, contatta il tuo ISP.',
'p710MRt004' : 'Impostazioni statiche:',
'p710MRt005' : 'Indirizzo IP:',
'p710MRt006' : '0',
'p710MRt007' : 'Maschera di sottorete:',
'p710MRt008' : '0',
'p710MRt009' : 'Gateway predefinito:',
'p710MRt010' : '0',
'p710MRt011' : 'Server DNS (primario):',
'p710MRt012' : '0',
'p710MRt013' : 'Server DNS (secondario):',
'p710MRt014' : '0',
'p710MRt015' : 'Nota: non tutti i provider di servizi Internet richiedono un server DNS secondario.',
'p710MRt016' : 'Prova la mia connessione statica',
'p710MRt017' : 'Connessioni statiche',
'p710MRt018' : 'Una connessione statica viene configurata manualmente, ma fornisce un indirizzo consistente al router, a cui è possibile accedere facilmente dall\'esterno della rete. Le connessioni statiche non sono comuni in aree residenziali con servizio Internet e in genere hanno un costo maggiore.<span class="nub"></span>',
'p710t001' : 'Hai scelto una connessione statica.',
'p710t002' : 'Il provider dei servizi Internet dovrebbe aver fornito le impostazioni per la configurazione statica. Se non le trovi, contatta il tuo ISP.',
'p710t004' : 'Impostazioni statiche:',
'p710t005' : 'Indirizzo IP:',
'p710t006' : '0',
'p710t007' : 'Maschera di sottorete:',
'p710t008' : '0',
'p710t009' : 'Gateway predefinito:',
'p710t010' : '0',
'p710t011' : 'Server DNS (primario):',
'p710t012' : '0',
'p710t013' : 'Server DNS (secondario):',
'p710t014' : '0',
'p710t015' : 'Nota: non tutti i provider di servizi Internet richiedono un server DNS secondario.',
'p710t016' : 'Prova la mia connessione statica',
'p710t017' : 'Connessioni statiche',
'p710t018' : 'Una connessione statica viene configurata manualmente, ma fornisce un indirizzo consistente al router, a cui è possibile accedere facilmente dall\'esterno della rete. Le connessioni statiche non sono comuni in aree residenziali con servizio Internet e in genere hanno un costo maggiore.   <span class="nub"></span>',
'p711t001' : 'Connessione statica in corso...',
'p711t002' : ' Stiamo richiedendo una connessione al provider di servizi Internet',
'p712t001' : 'Si sono verificati dei problemi con le tue impostazioni statiche.',
'p712t002' : 'Uno degli indirizzi o altri valori inseriti non sono corretti, ma non riusciamo a capire quali siano.',
'p800t001' : 'Applicazione delle modifiche.',
'p800t002' : 'Stiamo applicando le modifiche e riavviando il router per rendere effettive.',
'p801t002' : ' Stiamo aspettando che il router si riconnetta. Terminata l\'operazione potremo procedere.',
'p802t002' : 'Il router necessita di una connessione wireless per poter continuare.',
'p802t004' : 'Vai al menu della rete wireless del tuo dispositivo',
'p802t005' : 'Seleziona la tua nuova rete chiamata <strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong>',
'p802t007' : 'Inserisci la tua password, cioè <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>',
'p802t009' : 'Sarai quindi connesso al router e potremo procedere.',
'p802t010' : ' Stiamo aspettando che il router si riconnetta.',
'p803t002' : 'Il router necessita di una connessione wireless per poter continuare.',
'p803t003' : 'Poiché hai modificato il nome della rete, devi riselezionare la tua rete wireless:',
'p803t004' : 'Vai al menu della rete wireless del tuo dispositivo',
'p803t005' : 'Seleziona la tua nuova rete chiamata <strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong>',
'p803t007' : 'Inserisci la tua password, cioè <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>',
'p803t009' : 'Sarai quindi connesso al router e potremo procedere.',
'p803t010' : ' Stiamo aspettando che ti riconnetta.',
'p804t001' : 'Il tuo dispositivo non si è riconnesso.',
'p804t002' : 'Ciò può accadere alcune volte, ma è un problema facile da risolvere.',
'p804t025' : 'Se hai a disposizione un dispositivo dotato di Internet, visita questo URL per consultare informazioni utili: <strong>http://belk.in/PMuxOg.</strong>',
'p804t026' : 'Se il problema persiste, collega il cavo Ethernet direttamente al modem e al computer.',
'p804t027' : ' Dopo aver rilevato una connessione, procederemo in modo automatico.',
'p900t001' : 'Devi riavviare il modem.',
'p900t002' : 'Il modem non risponde.',
'p900t003' : 'Esegui queste operazioni per riavviare il modem:',
'p900t004' : 'Spegni il modem. Solitamente, è necessario utilizzare l\'interruttore on/off sul modem o ti basta semplicemente scollegare l\'alimentatore. Alcuni modem hanno una batteria, in quel caso dovrai individuare il pulsante di reset del modem.',
'p900t005' : 'Attendi 15 secondi.',
'p900t006' : 'Riaccendi il modem.',
'p900t007' : 'Dopo alcuni secondi le spie luminose si accenderanno e sarà possibile avviare la comunicazione con il router.',
'p900t008' : 'Attenderemo che il modem si accenda e spenga, quindi continueremo la procedura automatica.',
'p900t009' : 'Perché devo riavviare il modem?',
'p900t010' : 'Alcuni modem devono essere riavviati per poter comunicare con un nuovo router o un computer non conosciuto. Abbiamo rilevato il modem, ma non è in fase di comunicazione con il tuo nuovo router. Riavviandolo potrai risolvere il problema. <span class="nub"></span>',
'p901t001' : 'Riavvia il tuo modem ora...',
'p901t002' : ' Attendiamo che il modem si accenda e spenga. ',
'p902t001' : 'Il tuo modem si è spento. Bene. …',
'p902t002' : ' Ora vediamo se si risveglia.',
'p903t001' : 'Ti serve più tempo?',
'p903t002' : ' Il tuo modem si sta riavviando. Ti serve più tempo?',
'p903t005' : 'Solitamente, è necessario utilizzare l\'interruttore on/off sul modem o ti basta semplicemente scollegare l\'alimentatore. Alcuni modem, però, hanno una batteria e, in quel caso, dovrai individuare il pulsante di reset del modem.',
'p904t001' : 'Ti serve più tempo?',
'p904t002' : ' Attendiamo che il modem sia di nuovo disponibile. Ti serve più tempo?',
'p905t001' : 'Ecco, il tuo modem è di nuovo visibile.…',
'p905t002' : ' Stiamo aspettando che effettui la sincronizzazione con l\'ISP. L\'operazione richiederà un minuto o due.',
'p950IMRt001' : 'Non siamo riusciti a rilevare una connessione nella tua linea ADSL.',
'p950IMRt002' : 'Verifica il corretto collegamento del cavo di rete dalla presa ADSL alla porta grigia sul router.',
'p950IMRt004' : 'Pensiamo vi sia un problema di cavi.',
'p950IMRt005' : 'Dovrebbe esserci un cavo di rete che collega la porta grigia del router alla presa telefonica/ADSL. Questo cavo trasporta il segnale dall\'ISP al router, senza il suo ausilio, non puoi connetterti online. Verifica che questo cavo sia connesso correttamente.',
'p950IMRt006' : 'Ecco come dovrebbe apparire la connessione:',
'p950IMRt007' : 'Ci dovrebbe essere un cavo di rete collegato dalla presa ADSL a muro all\'alimentatore del router (il modem è integrato nell\'alimentatore). Questo cavo trasporta il segnale dall\'ISP al router, senza il suo ausilio, non puoi connetterti online.',
'p950IMRt009' : 'Ecco come dovrebbe apparire la connessione:',
'p950IMRt010' : 'Continueremo a ricercare una connessione mentre tu controlli.',
'p950IMRt014' : 'Cablaggio',
'p950IMRt015' : 'Il problema di cablaggio più comune è quello tra presa a muro e router. É importante controllare entrambe le estremità del cavo. Un\'estremità dovrebbe essere collegata alla porta grigia sul nuovo router, mentre l\'altra alla presa ADSL a muro. In alcuni casi, potrebbe essere necessario utilizzare un filtro tra la presa a muro e il cavo. <span class="nub"></span>',
'p950PMt001' : 'Non siamo riusciti a rilevare una connessione nella tua linea ADSL.',
'p950PMt002' : 'Accertati che vi sia una connessione di rete tra il router e il suo alimentatore (con modem integrato).',
'p950PMt004' : 'Pensiamo vi sia un problema di cavi.',
'p950PMt005' : ' Verifica che il cavo di rete proveniente dalla diramazione de cavo di alimentazione del modem sia collegato alla porta WAN gialla del router. Senza questa connessione di rete, non puoi collegarti a Internet.',
'p950PMt009' : 'Ecco come dovrebbe apparire la connessione:',
'p950PMt010' : 'Continueremo a ricercare una connessione mentre tu controlli.',
'p950PMt011' : 'Cablaggio',
'p950PMt012' : 'Il problema di cablaggio più comune è quello tra presa a muro e modem. É importante controllare entrambe le estremità del cavo. Un\'estremità dovrebbe essere collegata all\'alimentatore del nuovo router, mentre l\'altra alla presa ADSL a muro. In alcuni casi, potrebbe essere necessario utilizzare un filtro tra la presa a muro e il cavo. <span class="nub"></span>',
'p950t001' : 'Non siamo riusciti a rilevare una connessione dal modem.',
'p950t002' : 'Controlla che il modem sia collegato e acceso.',
'p950t003' : 'Accertati che il cavo Ethernet sia collegato dal modem al router.',
'p950t004' : 'Pensiamo vi sia un problema di cavi.',
'p950t005' : 'Il tuo modem dovrebbe essere acceso e dovrebbe esserci un cavo Ethernet collegato al modem e alla porta gialla sul router.',
'p950t006' : 'Controlla le seguenti impostazioni:',
'p950t007' : 'Assicurati che il modem sia acceso. Controlla che l\'alimentatore sia collegato ad entrambe le estremità e che una o più spie luminose sul modem siano accese.',
'p950t008' : 'Dovrebbe esserci un cavo Ethernet collegato al modem e alla porta gialla sul router. Questo cavo trasporta il segnale dal modem al router, senza il suo ausilio, non puoi connetterti online.',
'p950t009' : 'Le tue connessioni dovrebbero apparire come indicato qui:',
'p950t010' : 'Continueremo a ricercare una connessione mentre tu controlli.',
'p950t011' : 'Cablaggio',
'p950t012' : 'Il problema di installazione più comune è il cablaggio tra il modem e il router. Un\'estremità dovrebbe essere collegata alla porta gialla sul nuovo router, mentre l\'altra alla porta simile sul modem. Accertati che siano collegati completamente. I diversi produttori di modem etichettano le porte in modo diverso; potrebbe perciò essere denominata "data", "LAN", "network" (rete), o "Ethernet". <span class="nub"></span>',
'p951IMRt001' : 'Ti serve più tempo?',
'p951IMRt002' : ' Ti preghiamo di effettuare il collegamento alla linea ADSL. Ti serve più tempo?',
'p951t001' : 'Ti serve più tempo?',
'p951t002' : ' Attendiamo che il modem sia di nuovo disponibile. Ti serve più tempo?',
'pDAt001' : 'Doppio amministratore',
'pDAt002' : 'Questo dispositivo è gestito da  <span id="ipaddr"></span> in questo momento.',
'PIC_blocked_content' : 'Il Controllo genitori su Internet è attivo e questo dispositivo non può connettersi a Internet. Premi il pulsante in basso per gestire il Controllo genitori su Internet.',
'PIC_blocked_title' : 'Questo dispositivo è attualmente bloccato per l\'accesso a Internet.',
'PIC_S1t0006' : 'Pianifica l\'accesso a Internet:',
'PIC_S1t006' : 'Di recente sulla tua rete:',
'PIC_S2t003' : 'Giorni scolastici',
'PIC_S2t004' : 'Weekend',
'PIC_S2t005' : '(Domenica - Giovedì)',
'PIC_S2t006' : '(Venerdì - Sabato)',
'PIC-blocked' : 'bloccato',
'PIC-S1dt001' : 'Vuoi sospendere la connettività Internet su tutta la rete?',
'PIC-S1t001' : 'Blocca tutti i dispositivi',
'PIC-S1t003' : 'Tutti i dispositivi sono disconnessi da Internet.',
'PIC-S1t004' : 'Ripristina accesso',
'PIC-S1t005' : 'Attualmente sulla tua rete:',
'PIC-S1t010' : 'Ricerca dispositivi:',
'PIC-S1t020' : 'La pianificazione del Controllo genitori su Internet è in pausa',
'PIC-S1t021' : 'Il router non è in grado di rilevare l\'orario attuale e ciò impedisce il blocco/sblocco della pianificazione del Controllo genitori su Internet.  Il problema sarà risolto una volta che il router ristabilisce l\'orario corretto riconnettendosi al server di riferimento orario NTP.',
'PIC-S1t022' : 'Il router controllerà il server di riferimento orario NTP ogni qualche minuto. In alternativa, puoi modificare il server di riferimento orario visitando la sezione <a href="#" tid="gtSystemSettings" style="">Impostazioni del sistema</a>.',
'PIC-unblocked' : 'sbloccato',
'pNoTime_content' : 'Il tuo router non riesce a stabilire l\'orario perché ha perso la connessione con il server di riferimento orario NTP. Le funzionalità basate sull\'orario del router, come il Controllo genitori su Internet, la Modalità Eco e Self-Healing saranno messe in pausa fino a quando il router non si riconnette al server di riferimento orario NTP. <br> <br>Il router controllerà automaticamente l\'orario ogni qualche minuto.',
'pNoTime_title' : 'Che ore sono?',
'pODLAplt001' : 'Applicazione del pacchetto lingua',
'pODLAplt002' : 'Modifica della lingua scelta…',
'pODLDLt001' : 'Download del pacchetto lingua',
'pODLDLt002' : 'Recupero della lingua scelta dal server…',
'pODLErrt001' : 'Siamo spiacenti',
'pODLErrt002' : 'OK',
'pStatst004' : 'Vedi tutti &raquo;',
'Support1t001' : 'Non siamo riusciti a rilevare una connessione dal modem.',
'Support1t002' : 'Controlla che il modem sia collegato e acceso.',
'Support1t003' : 'Accertati che il cavo Ethernet sia collegato dal modem al router.',
'Support1t004' : 'Pensiamo vi sia un problema di cavi.',
'Support1t005' : 'Il tuo modem dovrebbe essere acceso e dovrebbe esserci un cavo Ethernet collegato al modem e alla porta gialla sul router.',
'Support1t006' : 'Controlla le seguenti impostazioni:',
'Support1t007' : 'Assicurati che il modem sia acceso. Controlla che l\'alimentatore sia collegato ad entrambe le estremità e che una o più spie luminose sul modem siano accese.',
'Support1t008' : 'Dovrebbe esserci un cavo Ethernet collegato al modem e alla porta gialla sul router. Questo cavo trasporta il segnale dal modem al router, senza il suo ausilio, non puoi connetterti online.',
'Support1t009' : 'Le tue connessioni dovrebbero apparire come indicato qui:',
'Support1t010' : 'Dopo aver seguito queste fasi, fai clic su Riprova.',
'Support7t012' : 'Visita l\'indirizzo <strong>http://belk.in/Q4XXca</strong>, utilizzando un dispositivo connesso a Internet.',
'Support1t016' : 'Cablaggio',
'Support1t017' : 'Il problema di installazione più comune è il cablaggio tra il modem e il router. Un\'estremità dovrebbe essere collegata alla porta gialla sul nuovo router, mentre l\'altra alla porta simile sul modem. Accertati che siano collegati completamente. I diversi produttori di modem etichettano le porte in modo diverso; potrebbe perciò essere denominata "data", "LAN", "network" (rete), o "Ethernet". <span class="nub"></span>',
'Support2t001' : 'Il tuo modem non è stato mai riavviato.',
'Support2t002' : 'Prova a scollegare l\'alimentatore del modem.',
'Support2t003' : 'Il modem potrebbe essere dotato di un pulsante di reset che devi premere.',
'Support2t004' : 'Hai problemi a riavviare il modem?',
'Support2t005' : 'Prova a eseguire queste operazioni per riavviare il modem:',
'Support2t006' : 'Scollegare l\'alimentatore del modem.',
'Support2t007' : 'Attendi che le spie luminose (se esistenti) sul modem si spengano.',
'Support2t008' : 'Se le spie luminose rimangono accese, il tuo modem è dotato di una batteria di backup. Da qualche parte sul modem (di solito sul retro) ci dovrebbe essere un pulsante di reset. Premilo.',
'Support2t009' : 'Le spie luminose si dovrebbero spegnere. Attendi qualche secondo prima di collegare di nuovo l\'alimentatore.',
'Support2t010' : 'Dopo aver seguito queste fasi, fai clic su Riprova.',
'Support2t016' : 'Perché devo riavviare il modem?',
'Support2t017' : 'Alcuni modem devono essere riavviati per poter comunicare con un nuovo router o un computer non conosciuto. Abbiamo rilevato il modem, ma non è in fase di comunicazione con il tuo nuovo router. Riavviandolo potrai risolvere il problema. <span class="nub"></span>',
'Support3MRt001' : 'Non siamo riusciti a rilevare una connessione nella tua linea ADSL.',
'Support3MRt002' : 'Verifica che vi sia un cavo di rete collegato dalla presa ADSL alla porta del router.',
'Support3MRt003' : 'In alcuni Paesi è richiesto l\'utilizzo di un filtro.',
'Support3MRt004' : 'Siamo praticamente sicuri che si tratti di un problema di cablaggio.',
'Support3MRt005' : 'Dovrebbe esserci un cavo che collega la porta grigia del router alla presa telefonica/ADSL.',
'Support3MRt006' : 'Verifica che entrambe le estremità del cavo siano collegate correttamente.',
'Support3MRt007' : 'Accertati che il cavo sia collegato alla porta grigia del router e non a una di quelle gialle.',
'Support3MRt008' : 'Se ti è stato fornito un filtro ADSL, verifica che sia installato tra il cavo e la presa ADSL.',
'Support3MRt010' : 'Verifica che entrambe le estremità del cavo siano collegate correttamente.',
'Support3MRt011' : 'Controlla che il cavo sia collegato alla porta di rete dell\'alimentatore del router.',
'Support3MRt012' : 'Se ti è stato fornito un filtro ADSL, verifica che sia installato tra il cavo e la presa ADSL.',
'Support3MRt016' : 'Una volta completati questi passi, sarai pronto a riprovare.',
'Support3MRt018' : 'Visita l\'URL seguente su un dispositivo connesso a Internet e scopri come risolvere il problema da solo: <strong>www.belkin.com/support3mr.</strong>',
'Support3MRt021' : 'Cablaggio',
'Support3MRt022' : 'I problemi di cablaggio più comuni si verificano con la presa ADSL. É importante controllare entrambe le estremità del cavo. <span class="nub"></span>',
'Support3MRt050' : 'Verifica che vi sia un cavo di rete collegato dall\'alimentatore del router alla presa telefonica.',
'Support3MRt051' : 'Ci dovrebbe essere un cavo che collega l\'alimentatore del router alla presa telefonica/ADSL.',
'Support3PMt001' : 'Non siamo riusciti a rilevare una connessione nella tua linea ADSL.',
'Support3PMt002' : 'Accertati che vi sia una connessione di rete tra il router e il suo alimentatore (con modem integrato).',
'Support3PMt004' : 'Siamo praticamente sicuri che si tratti di un problema di cablaggio.',
'Support3PMt005' : 'Ci dovrebbe essere un cavo di rete che collega la porta gialla sul router e l\'alimentatore del router.',
'Support3PMt006' : 'Controlla la presa dell\'alimentatore del router e individua il cavo che si dirama in due linee separate. Una di queste linee è dotata di un connettore Ethernet.',
'Support3PMt007' : 'Inserisci il connettore Ethernet nella porta gialla del router.',
'Support3PMt010' : 'Una volta completata questa operazione, sarai pronto a riprovare.',
'Support3PMt012' : 'Visita l\'indirizzo <strong>www.belkin.com/support3PM</strong>, utilizzando un dispositivo connesso a Internet.',
'Support3PMt016' : 'Cablaggio',
'Support3PMt017' : 'È essenziale accertarsi che non vi siano collegamenti interrotti dalla presa ADSL al router. Il router si aspetta che questo segnale provenga dalla porta gialla. Il cavo proveniente dall\'alimentatore del router trasporta sia il segnale di rete che l\'alimentazione al router. Entrambe le parti devono perciò essere collegate correttamente al router, per garantire il normale funzionamento. <span class="nub"></span>',
'Support3t001' : 'Il modem non si accende più.',
'Support3t002' : 'Verifica che sia collegato a una fonte di alimentazione.',
'Support3t003' : 'Potresti dover attendere qualche istante prima che sia pronto.',
'Support3t004' : 'Hai problemi a riavviare il modem?',
'Support7t005' : 'Per stabilire una connessione ADSL, prova i seguenti passi:',
'Support7t006' : 'Accertati che il cavo di rete dal modem router sia collegato a una presa telefonica attiva per la connessione a Internet. Fai clic quindi su Riprova e verifica che il modem router sia in grado di rilevare la connessione a Internet.',
'Support7t007' : 'Se il modem router condivide la presa telefonica con il telefono di linea fissa (attraverso uno sdoppiatore), sostituisci lo sdoppiatore con un filtro-sdoppiatore (opzionale). Fai clic quindi su Riprova e verifica che il modem router sia in grado di rilevare la connessione proveniente dal provider di servizi Internet.',
'Support7t008' : 'Se il passo 2 non risolve il problema, potrebbe essere necessario utilizzare filtri ADSL*. Se questi ultimi sono in dotazione (di solito sono forniti dal provider di servizi Internet), collegarli tra i telefoni della linea fissa e le prese telefoniche.',
'Support7t009' : 'Se dopo aver seguito i passi 1-3, la connessione ADSL continua a non funzionare, contatta il tuo provider di servizi Internet per richiedere supporto tecnico. Spiega che stai avendo problemi a sincronizzare il modem router con il provider di servizi Internet.',
'Support3t010' : 'Dopo aver seguito queste fasi, fai clic su Riprova.',
'Support3t016' : 'Perché devo riavviare il modem?',
'Support3t017' : 'Alcuni modem devono essere riavviati per poter comunicare con un nuovo router o un computer non conosciuto. Abbiamo rilevato il modem, ma non è in fase di comunicazione con il tuo nuovo router. Riavviandolo potrai risolvere il problema. <span class="nub"></span>',
'Support4t001' : 'Non siamo riusciti a effettuare la riconnessione al tuo router.',
'Support4t002' : 'Prova a riavviare il tuo router.',
'Support4t003' : 'Dopo aver riavviato il router, prova a riconnetterti.',
'Support4t004' : 'Proviamo altre soluzioni.',
'Support4t005' : 'Innanzitutto, riavviamo il router.',
'Support4t006' : 'Scollega l\'alimentatore del router, attendi alcuni secondi, e ricollegalo.',
'Support4t006w' : 'Scollega l\'alimentatore del router, attendi alcuni secondi, e ricollegalo.',
'Support4t007' : 'Quando la spia sul router è blu fisso, sarà possibile effettuare la connessione.',
'Support4t008' : 'A questo punto, proviamo a effettuare una connessione wireless.',
'Support4t031' : 'Saranno necessari alcuni secondi per stabilire la connessione e dopo sarai pronto per riprovare.',
'Support4t032' : 'In alternativa, puoi tentare una connessione cablata.',
'Support4t033' : 'Devi collegare il collegare fisicamente il computer al router. Utilizza un cavo Ethernet per collegare il computer e una delle porte grigie sul router. Visitando la pagina http://router, potrai riprovare a eseguire la configurazione.',
'Support4t034' : 'Dopo aver seguito queste fasi, fai clic su Riprova.',
'Support4t040' : 'Visita l\'indirizzo <strong>http://belk.in/PMuxOg</strong> su un dispositivo connesso a Internet.',
'Support4t050' : 'Recupero della connessione',
'Support4t051' : 'In queste situazioni, potresti dover riavviare il router o ristabilire una connessione. Abbiamo incluso le istruzioni per entrambi i casi. Se hai cambiato la password di rete in una fase precedente, potresti dover riselezionare la rete dopo aver riavviato il router.  <span class="nub"></span>',
'Support5t001' : 'Non siamo riusciti a effettuare la riconnessione al tuo router.',
'Support5t002' : 'Prova a riavviare il tuo router.',
'Support5t003' : 'Dopo aver riavviato il router, prova a riconnetterti.',
'Support5t004' : 'Proviamo altre soluzioni.',
'Support5t005' : 'Innanzitutto, riavviamo il router.',
'Support5t006' : 'Scollega l\'alimentatore del router, attendi alcuni secondi, e ricollegalo.',
'Support5t006w' : 'Scollega il router, attendi alcuni secondi, e ricollegalo.',
'Support5t007' : 'Quando la spia sul router è blu fisso, sarà possibile effettuare la connessione.',
'Support5t008' : 'A questo punto, proviamo a effettuare una connessione wireless.',
'Support5t009' : 'Saranno necessari alcuni secondi per stabilire la connessione e dopo sarai pronto per riprovare.',
'Support5t010' : 'In alternativa, puoi tentare una connessione cablata.',
'Support5t011' : 'Potresti collegare un computer al router. Utilizza un cavo Ethernet per collegare il computer e una delle porte grigie sul router. Visitando la pagina http://router, potrai riprovare a eseguire la configurazione.',
'Support5t012' : 'Dopo aver seguito queste fasi, fai clic su Riprova.',
'Support5t015' : 'Visita l\'indirizzo <strong>http://belk.in/PMuxOg</strong> su un dispositivo connesso a Internet.',
'Support5t020' : 'Recupero della connessione',
'Support5t021' : 'In queste situazioni è difficile constatare se il router deve essere riavviato o se è soltanto necessario ristabilire una connessione. Abbiamo perciò incluso le istruzioni per entrambi i casi. Poiché abbiamo cambiato il nome della rete in una fase precedente, ricordati di connetterti alla nuova rete dopo aver riavviato il router. <span class="nub"></span>',
'Support6t001' : 'Non siamo riusciti a effettuare la riconnessione al tuo router.',
'Support6t002' : 'Prova a riavviare il tuo router.',
'Support6t003' : 'Dopo aver riavviato il router, prova a riconnetterti.',
'Support6t004' : 'Proviamo altre soluzioni.',
'Support6t005' : 'Innanzitutto, riavviamo il router.',
'Support6t006' : 'Scollega l\'alimentatore del router, attendi alcuni secondi, e ricollegalo.',
'Support6t006w' : 'Scollega il router, attendi alcuni secondi, e ricollegalo.',
'Support6t007' : 'Quando la spia sul router è blu fisso, sarà possibile effettuare la connessione.',
'Support6t008' : 'A questo punto, proviamo a effettuare una connessione wireless.',
'Support6t031' : 'Saranno necessari alcuni secondi per stabilire la connessione e dopo sarai pronto per riprovare.',
'Support6t032' : 'In alternativa, puoi tentare una connessione cablata.',
'Support6t033' : 'Potresti collegare un computer al router. Utilizza un cavo Ethernet per collegare il computer e una delle porte grigie sul router. Visitando la pagina http://router, potrai riprovare a eseguire la configurazione.',
'Support6t034' : 'Dopo aver seguito queste fasi, fai clic su Riprova.',
'Support6t037' : 'Visita l\'indirizzo <strong>http://belk.in/Nm1f5S</strong> su un dispositivo connesso a Internet.',
'Support6t050' : 'Recupero della connessione',
'Support6t051' : 'In queste situazioni, potresti dover riavviare il router o ristabilire una connessione. Abbiamo incluso le istruzioni per entrambi i casi. Se hai cambiato la password di rete in una fase precedente, potresti dover riselezionare la rete dopo aver riavviato il router.  <span class="nub"></span>',
'Support7t001' : 'Il modem router non è connesso a Internet.',
'Support7t004' : 'C\'è un problema di connessione a livello della presa telefonica.',
'Support7t050' : 'Problemi di connessione',
'Support7t051' : 'In queste situazioni è difficile diagnosticare perché si stanno avendo problemi a connettersi al provider di servizi Internet. Abbiamo verificato il più accuratamente possibile la tua installazione e il cablaggio, perciò il prossimo passo sarà controllare che tu stia utilizzando la giusta presa; magari è necessario installare un filtro. Nel caso il problema dovesse persistere, ti preghiamo di contattare il tuo provider di servizi Internet. <span class="nub"></span>',
'SupportNumber' : '1-800-123-4567',
'UpSpeed' : '12.5',
'p2410t012' : 'Facendo clic su "Ripristina", saranno cancellate le impostazioni del router, come il nome e la password, e saranno sostituite con i valori originari di fabbrica.  I computer, i telefoni ecc., dovranno quindi essere configurati con queste impostazioni per poter collegarsi a Internet con questo router. Sei sicuro di voler continuare?',
'gtRestore' : 'Ripristina',
'gtCancel' : 'Annulla',
'alt="Loading"' : 'Caricamento',
'alt="Restart Router"' : 'Riavvia il router',
'alt="Check Wires"' : 'Verifica cavi',
'alt="Check Phone Connection"' : 'Controlla la connessione telefonica',
'alt="Check WAN Connection"' : 'Controlla la connessione WAN',
'alt="Checkmark"' : 'Segno di spunta',
'alt="Change"' : 'Modifica',
'alt="Print"' : 'Stampa',
'alt="Expand"' : 'Espandi',
'alt="Caret"' : 'Accento circonflesso',
'alt="Cut"' : 'Taglia',
'alt="Browser"' : 'Browser',
'alt="Wifi"' : 'Wi-Fi',
'alt="Password"' : 'Password',
'alt="Check Phone Jack"' : 'Controlla la presa telefonica',
'alt="Turn Off Modem"' : 'Spegni modem',
'alt="Turn On Modem"' : 'Accendi modem',
'alt="Check Phone Filters"' : 'Controlla i filtri telefonici',
'gtSerial' : 'N. di serie',
'gt5GName' : 'SSID rete 5 GHz ',
'gt5GKey' : 'Chiave 5 GHz',
'p1020MRt001' : 'Stiamo avendo difficoltà a comunicare con il tuo provider di servizi Internet.',
'p1020MRt002' : 'Riavvia il tuo modem-router.',
'p1020MRt003' : 'Non riusciamo a ottenere una connessione Internet. Proviamo a riavviare il tuo modem router.',
'p1020MRt004' : 'Spegni il modem router. Solitamente, è necessario utilizzare un interruttore sul modem router o ti basta semplicemente scollegare l\'alimentatore.',
'p1020MRt005' : 'Attendi 15 secondi.',
'p1020MRt006' : 'Riaccendi il modem router.',
'p1020MRt007' : 'Dopo alcuni secondi le spie luminose si accenderanno e sarà possibile avviare la comunicazione con il provider di servizi Internet.',
'p1020MRt008' : 'Se il problema persiste, contatta il tuo provider di servizi Internet per verificare le impostazioni dell\'account.',
'p1020MRt009' : 'Attenderemo che il modem router si accenda e spenga, quindi continueremo la procedura automatica.',
'p1020MRt010' : 'Perché devo riavviare il modem?',
'p1020MRt011' : 'Alcuni modem devono essere riavviati prima di iniziare a comunicare con un nuovo router o un computer non conosciuto. Se vi sono problemi con il tuo provider di servizi Internet, il modem potrebbe farti perdere la connessione inaspettatamente. Abbiamo rilevato il modem, ma non la connessione Internet. Riavviandolo potrai risolvere il problema.<span class="nub"></span>',
'p1010t001' : 'Stiamo avendo problemi a comunicare con il tuo modem.',
'p1010t002' : 'Pensiamo vi sia un problema di cavi.',
'p1010t003' : 'Dovrebbe esserci un cavo collegato al modem e alla porta gialla sul router. Il modem dovrebbe essere acceso.',
'p1010t004' : 'Ci sono alcune cose che puoi fare per accertarti che tutto sia pronto per l\'utilizzo:',
'p1010t005' : 'Assicurati che il modem sia acceso. L\'alimentatore dovrebbe essere collegato a entrambe le estremità e una o più spie luminose sul modem dovrebbero essere accese.',
'p1010t006' : 'Dovrebbe esserci un cavo di rete collegato al modem e alla porta gialla sul router. Questo cavo trasporta il segnale dal modem al router, senza il suo ausilio, non puoi connetterti online.',
'p1010t007' : 'Se i cavi sono collegati correttamente, potresti provare a riavviare il router scollegando il suo alimentatore. Attendi quindi 15 secondi e ricollegalo. Se il tuo modem è dotato di una batteria, individua il pulsante di reset del modem e utilizza quello invece.',
'p1010t008' : 'Ecco come dovrebbero apparire le tue connessioni:',
'p1010t009' : 'Continueremo a ricercare una connessione mentre tu controlli.',
'p1010t010' : 'Il problema di cablaggio più comune è quello tra il modem e il router. É importante controllare entrambe le estremità del cavo. Un\'estremità dovrebbe essere collegata alla porta gialla sul nuovo router, mentre l\'altra alla porta simile sul modem. I diversi produttori di modem etichettano le porte in modo diverso; potrebbe perciò essere denominata "data", "LAN", "network" (rete), o "Ethernet".',
'Support3t005' : 'Prova a eseguire queste operazioni per riavviare il modem:',
'Support3t006' : 'Controlla se sul pannello frontale del modem si accendono le spie luminose. Se sono accese, il tuo modem è acceso, ma potresti dover attendere ancora qualche istante perché sia pronto per l\'uso.',
'Support3t007' : 'Verifica che l\'alimentatore del modem sia collegato correttamente al modem e alla presa a muro.',
'Support3t008' : 'Se il tuo modem è dotato di un interruttore di accensione, verifica che si trovi nella posizione corretta.',
'Support3t009' : 'Controlla che il modem sia ancora connesso al tuo nuovo router.',
'Support1t012' : 'Visita l\'indirizzo <strong>http://belk.in/LIkBoH</strong>, utilizzando un dispositivo connesso a Internet.',
'QOSt001' : 'Per abilitare Intellistream, esegui le seguenti operazioni:',
'QOSt002' : 'Utilizza un cavo Ethernet per collegare il computer al router Belkin (raccomandato).',
'QOSt003' : 'Verifica la velocità della tua connessione Internet, facendo clic qui per <a href="http://www.speedtest.net" target="_blank" class="speed_font4">Speedtest.net</a>',
'QOSt004' : 'Dopo aver effettuato il test della velocità, inserisci i valori indicati su Speedtest.net nei campi Velocità di download e Velocità di upload in alto, quindi fai clic su Salva.',
'gtMbps' : 'Mbps',
'QOSt006' : 'Data l\'elevata velocità di download, Intellistream aumenterà soltanto la priorità della velocità di upload.',
'QOSt007' : 'Data l\'elevata velocità di upload, Intellistream aumenterà soltanto la priorità della velocità di download.',
'QOSt008' : 'Date le elevate velocità Internet, Intellistream non è necessario e non sarà quindi attivato. ',
'QOSt009' : 'Inserisci un numero maggiore di 0,01.',
'QOSt010' : 'Inserisci numeri maggiori di 0,01.',
'gtSettingsNotSaved' : 'Alcune impostazioni non sono state salvate. Rimani qui per salvarle oppure esci o ricarica la schermata per annullare le modifiche.',
'QOSt011' : 'Inserisci un numero compreso tra 0,01 e 100,00.',
'QOSt012' : 'Inserisci numeri compresi tra 0,01 e 100,00.',
'QOSt013' : 'Inserisci un numero compreso tra 0,01 e 1000,00.',
'QOSt014' : 'Inserisci numeri compresi tra 0,01 e 1000,00.',



// End belkin transation table
LastID : "LastValue"	
	
	
} 


function translate(key) {
	return langDictionary[key];
}
