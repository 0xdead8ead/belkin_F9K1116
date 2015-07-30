function dw(message)
{
	document.write(message);	
}

chkwait='Recherche d\'une nouvelle version du micrologiciel...';


common_err1=" %s is NULL";
common_err2="Activé";
common_err3="Désactivé";
dyndns_err1="Pas de message.";
dyndns_err2="Ces champs ne doivent pas être vides";
dyndns_err3="L'adresse IP est la même et n'a pas besoin d'être mise à jour";
dyndns_err4="Un vide dans le mot de passe utilisateur ou nom de l'hôte";
dyndns_err5="Erreur de requête DNS";
dyndns_err6="Erreur de serveur DNS";
dyndns_err7="Impossible de se connecter à Internet et le serveur DNS ne répond pas";
dyndns_err8="HTTP ne peut se connecter";
dyndns_err9="Erreur de nom d'utilisateur ou de mot de passe";
dyndns_err10="Mise à jour OK: bon";
dyndns_err11="Mise à jour OK: bon";
dyndns_err12="Patientez";
dyndns_err13="Le nom de domaine n'est pas complêtement qualifié:notfqdn";
dyndns_err14="L'hôte n'existe pas: nohost";
dyndns_err15="L'hôte n'est pas administré par vous";
dyndns_err16="Bloqué en raison d'abus :abus";
dyndns_err17="Erreur de serveur DynDNS :numhost";
dyndns_err18="le service a été arrêté";
dyndns_err19="Le retour de code reçu est inconnu!";
dyndns_err20="Une erreur inconnue s'est produite!";
dyndns_err21="Impossible d'ouvrir la connection HTTP";
dyndns_err22="l'adresse IP WAN est vide";
dyndns_err23='Échec de l\'enregistrement';
dyndns_err24='Enregistré';
dyndns_err25='Échec d\'ouverture de session';
dyndns_err26='Échec de la connexion';
upgrade_err1='Le type ou la version du fichier de mise à jour ne convient pas à cet appareil. Échec de la mise à jour. Veuillez obtenir le fichier approprié et réessayer.';
upgrade_err2="Mise à jour avortée car ressources insuffisantes. Échec de la mise à jour.\nVeuillez réessayer lorsque le système n'est pas en cours d'utilisation (aucun trafic Internet)";
upgrade_err3="Cannot upload, please contact administrator.";
upgrade_err4="Firmware is too large, upgrade failed.";
upgrade_err5="You already have the lastest firmware installed.";
upgrade_err6="Le fichier de mise  jour du micrologiciel semble être corrompu.  Veuillez télécharger le fichier à nouveau et réessayer.";
upgrade_err7="Impossible de mettre à jour le micrologiciel du client sans fil.";
upgrade_err8="Fichier de mise à jour vide ou incomplet.\nÉchec de la mise à jour.\nVeuillez obtenir le fichier approprié et réessayer.";
OK='OK';
Cancel='Annuler';
Close='Fermer';
show0='Configuration du routeur';
show1='Accueil';
show2='Aide';
show3='Connexion';
show4='Déconnexion';
show5='Statut d\'Internet';
show6='Connecté';
show7='Non connecté';
show8='Mise en place du réseau local (LAN)';
show9='Paramètres de réseau local';
show10='Liste de Clients DHCP';
show11='Internet WAN';
show12='Type de Connexion';
show13='DNS';
show14='Adresse MAC';
show15='DDNS';
show16='WLAN non disponible';
show17='Sans Fil';
show18='Canal et SSID';
show19='Sécurité';
show20='Utiliser en tant que Point d\'Accès';
/*show21='Specify IP Address';*/
show21='Configuration du Wi-Fi protégée';
show22='Contrôle d\'adresse MAC';
show23=' Pont Sans Fil';
show24='Pare-feu  ';
show25='Serveurs Virtuels';
show26='Filtres d\'IP des clients';
show27='Pare-Feu > Filtrage des adresses MAC';
show28='DMZ';
show29='Blocage du ping WAN';
show30='Journal de sécurité';
show31='Utilitaires';
show33='Redémarrer le routeur';
show34='Redémarrer le PA';
show35='Rétablir les paramètres par défaut';
show36='Sauvegarder les paramètres';
show37='Rétablir les paramètres précédents';
show38='Mise à jour du micrologiciel ';
show39='Paramètres du système ';
show42='EWC Setting';
show43='Setup Wizard';
show44='Manual Settings';
show47="Contrôle de l'accès";
show48='Self Healing';
show54='Paramètres de connexion';
sm1='Plus d\'infos';
btn1='Effacer les modifications';
btn2='Enregistrer les modifications';
btn3='Site Web';
btn4='Reset to Default';
btn5='Previous';
btn6='Routing Table';
btn7='Apply';
Router='Routeur';
AP='PA';
Dynamic='Dynamique';
Static='Fixe';
PPPoE='PPPoE';
PPTP='PPTP';
L2TP='L2TP';
Multi_PPPoE='Multi-PPP over Ethernet';
UNKNOWN='UNKNOWN';
cff1='Vérification du micrologiciel réussie';
cff2='Informations sur le micrologiciel. ';
cff3='Aucune mise à jour du micrologiciel n\'est disponible pour ce routeur !';
cff4='Échec de la connexion au serveur d\'informations sur le micrologiciel, <br>vérifiez la connexion WAN.';
d1='Belkin | Administrateur Secondaire';
d2='Administrateur secondaire';
d3='Ce périphérique est administré par';
d4='en ce moment !!';
fc1='Pare-feu > Filtres d\'IP des clients';
fc2a='Le Routeur peut être configuré de sorte à limiter l\'accès de certains ordinateurs à Internet, au courrier électronique ou à certains services réseau';
IP='IP';
Port='Port';
Type='Type';
BT='Temps de blocage';
Day='Jour';
Tm='Heure';
Enable='Activé';
BOTH='Les Deux';
Always='Toujours';
Block='Bloquer';
SUN='>DIM';
MON='>LUN';
TUE='>MAR';
WED='>MER';
THU='>JEU';
FRI='>VEN';
SAT='>SAM';
PM=':00 PM';
AM=':00 AM';
PM2=':30 PM';
AM2=':30 AM';
EcoMode='Mode Eco:';
Dimicons='Icône Dim';
DisableEco='Désactiver radio de';
EcoTo='À';
EcoSu='Di';
EcoMo='Lu';
EcoTu='Ma';
EcoWe='Me';
EcoTh='Je';
EcoFr='Ve';
EcoSa='Sa';
EcoExcept='sauf';
fcsm='Le numéro de la zone de saisie du port doit être compris entre 1 et 65535.';
fcrm='Le dernier numéro de port doit être supérieur au premier.';
fcripm='Le dernier numéro d\'IP doit être supérieur au premier.';
fcnsm='La plage du port privé est incorrecte.';
fcwdm='The end Day must be later than the start Day.';
fcdtm='The Time must be later than the start Time when they are in the same day.';
fclanip='The IP filter range should not cover the LAN IP address.';
fd1='Pare-Feu > DMZ';
fd2='La zone DMZ vous permet de spécifier quel ordinateur de votre réseau doit être placé à l\'extérieur du pare-feu NAT. Cette opération peut s\'avérer nécessaire si la traduction d\'adresse réseau (NAT) empêche le bon fonctionnement d\'applications telles que les jeux ou les vidéoconférences. Servez-vous de cette fonction au besoin.';
fd3='L\'ordinateur placé dans la zone DMZ ne sera pas protégé contre les attaques provenant de hackers. ';
fd4='Pour placer un ordinateur dans la zone DMZ, entrez les derniers chiffres de son adresse IP dans le champ de saisie ci-dessous, et sélectionnez « Activer ». Cliquez « Enregistrer les modifications » pour que les modifications apportées soient prises en compte.';
fd5='Adresse IP de l\'hôte DMZ virtuel';
fd6='IP fixe ';
fd7='IP privée';
fd8='Activé';
fmc1='Pare-Feu > Filtrage des adresses MAC';
fmc2='Cette fonction vous permet de dresser une liste de clients autorisés. Lorsque vous activez cette fonction, vous devez entrer l\'adresse MAC de chaque client de votre réseau, pour permettre à chacun d\'accéder au réseau.';
fmc3='Activer le Filtrage des Adresses MAC ';
fmc4='Liste de Filtrage des adresses MAC  ';
fmc5='Bloquer';
fmc6='Hôte  ';
fmc7='Adresse MAC';
fmc8="L'adresse MAC que vous souhaitez ajouter se trouve déjà dans la liste.";
fmc9='Vous ne pouvez ajouter jusqu\'à 20 entrées.';
Add='Ajouter';
Added='Added'
Del='Supprimer';
fmcipm='Vous n\'avez pas entré tous les chiffres hexadécimaux ou certains chiffres hexadécimaux entrés ne sont pas valides. Un chiffre hex peut être un nombre de 0 à 9 ou une lettre de A(a) à F(f).';
fmn1='Pare-feu > ';
fmn2='Votre Routeur possède un pare-feu afin de protéger votre réseau contre une multitude d\'attaques provenant de pirates informatiques, incluant le Ping de la Mort (Ping of Death - PoD) et l\'attaque par Déni de Service (Denial of Service - DoS). Vous pouvez désactiver la fonction de pare-feu au besoin. Désactiver le pare-feu ne rendra pas votre réseau totalement vulnérable aux attaques provenant des pirates informatiques, mais il est recommandé d\'activer le pare-feu aussi souvent que possible.';
fmn3='Activer/Désactiver Pare-Feu ';
Disable='Désactiver';
fp1='Pare-Feu > Blocage du ping WAN';
fp2='<b>FONCTION AVANCÉE !</b>Vous pouvez configurer le Routeur de sorte qu\'il ignore un ping ICMP (ping au port WAN). Cette fonction rehausse le niveau de sécurité.';
fp3='Blocage du Ping ICMP ';
fs1='Pare-feu > Journal de sécurité';
fs1b='Utilitaires > Journal de sécurité';
fs2='Le routeur conserve un journal de l\'activité à l\'intérieur de celui-ci, telle que les connexions et déconnexions, et toute tentative de connexion au routeur en provenance de l\'Internet. Vous pouvez visualiser le journal ci-dessous.';
fs3='Journal';
Save='Enregistrer';
Clear='Effacer';
Refresh='Actualiser';
System_log='Journal système:';
Firewall_log='Journal du pare-feu:';
fv1='Pare-Feu > Serveurs Virtuels';
fvipm='Vous n\'avez pas entré toutes les adresses IP \n ou certains numéros entrés ne sont pas valides. \n Le numéro de l\'adresse IP doit être compris entre 1 et 254.';
fvrm="Veuillez désactiver la Gestion à distance. Son port est en conflit avec le port d'entrée de l'un de vos serveurs virtuels.";
fvipr='La plage du port entrant est incorrecte.';
fvppr='La plage du port privé est incorrecte.';
fvippnm='La plage du port entrant est incorrecte.';
fv2='Cette fonction vous permet d\'acheminer, via le routeur et vers votre réseau interne, les appels externes (Internet) de services tels qu\'un serveur Web (port 80), un serveur FTP (port 21) ou d\'autres applications. ';
fv3='Active Worlds';
fv4='Age of Empires ';
fv5='Age of Empires Expansion: The Rise of Rome';
fv6='Age of Empires II Expansion: The Conquerors';
fv7='Age of Empires II: The Age of Kings';
fv8='Age of Kings';
fv9='Age of Wonders';
fv10='Aliens vs. Predator';
fv11='Anarchy Online (BETA) ';
fv12='AOL Instant Messenger';
fv13='Audiogalaxy Satellite';
fv14='Baldur\'s Gate ';
fv15='BattleCom';
fv16='Battlefield Communicator';
fv17='Black and White';
fv18='Blizzard Battle.net';
fv19='Buddy Phone';
fv20='Bungie.net';
fv21='Camerades';
fv22='CART Precision Racing';
fv23='Close Combat pour Windows';
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
fv39='Jeux DirectX 7';
fv40='Jeux DirectX 8';
fv41='Serveur de nom de domaine (DNS)';
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
fv54='Flight Simulator 98 ';
fv55='Freetel';
fv56='Serveur FTP';
fv57='GNUtella';
fv58='Golf Édition 1998';
fv59='Golf Édition 1999';
fv60='Golf Édition 2001';
fv61='Go2Call';
fv62='Half Life';
fv63='Serveur Half Life';
fv64='Serveur Heretic II';
fv65='I76';
fv66='Ivisit';
fv67='IRC';
fv68='IStreamVideo2HPz';
fv69='KaZaA';
fv70='Kohan Immortal Sovereigns';
fv71='LapLink Gold';
fv72='Links 2001';
fv73='Serveur Lotus Notes';
fv74='Messagerie (POP3)';
fv75='Messagerie (SMTP)';
fv76='MechCommander 2.0';
fv77='MechWarrior 3';
fv78='MechWarrior 4';
fv79='Media Player 7';
fv80='Midtown Madness ';
fv81='Midtown Madness 2';
fv82='Mig 29';
fv83='Monster Truck Madness ';
fv84='Monster Truck Madness 2';
fv85='Motocross Madness ';
fv86='Motocross Madness 2';
fv87='Serveur Motorhead';
fv88='MSN Gaming Zone';
fv89='MSN Messenger';
fv90='Myth';
fv91='Serveur Myth II';
fv92='Myth: The Fallen Lords';
fv93='Need for Speed';
fv94='NetMech';
fv95='Network Time Protocol (NTP)';
fv96='Serveur de News (NNTP)';
fv97='OKWeb';
fv98='OKWin';
fv99='Outlaws';
fv100='pcAnywhere v7.5';
fv101='PhoneFree';
fv102='Polycom ViaVideo H.323';
fv103='Polycom ViaVideo H.324';
fv104='Quake';
fv105='Quake II (client et serveur)';
fv106='Quake III';
fv107='Red Alert';
fv108='Rise of Rome';
fv109='Roger Wilco';
fv110='Rogue Spear';
fv111='Serveur de shell sécurisé (SSH)';
fv112='Serveur Web sécurisé (HTTPS)';
fv113='ShoutCast';
fv114='SNMP';
fv115='Interruption SNMP';
fv116='Speak Freely';
fv117='StarCraft';
fv118='Starfleet Command';
fv119='StarLancer';
fv120='SWAT3';
fv121='Telnet Server';
fv122='The 4th Coming';
fv123='Tiberian Sun: C&C ';
fv124='Tiberian Sun: C&C III';
fv125='Total Annihilation';
fv126='Ultima';
fv127='Unreal Tournament';
fv128='Urban Assault';
fv129='VoxPhone 3.0';
fv130='Warbirds 2';
fv131='Serveur Web (HTTP)';
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
fv143='Client ICUII';
fv200='Effacer l\'entrée';
Description='Description';
Inb='Port Entrant  ';
Type='Type';
Pipa='Adresse IP privée  ';
Pport='Port privé  ';
htop='haut';
h1='Aide';
h2='GLOSSAIRE  ';
h3='<b>Administrateur</b> Un administrateur est chargé de la maintenance du réseau. Dans le cas précis de ce routeur, c\'est la personne qui configure le routeur et apporte les changements aux paramètres.';
h4='<b>Client</b> Se dit d\'un ordinateur faisant partie d\'un réseau et qui utilise les services du routeur, tels que le serveur DHCP automatique et le Pare-Feu.';
d5="<b>DDNS</b> Le service DNS Dynamique vous permet d'attribuer une adresse IP dynamique à un nom d'hôte statique parmi ceux offerts par DynDNS.org, ce qui vous permet d'accéder à vos ordinateurs à partir de maints endroits sur Internet. DynDNS.org offre ce service à la communauté des Internautes, gratuitement, pour jusqu'à cinq noms d'hôte.";
h5='<b>DHCP</b> Dynamic Host Configuration Protocol. Ce protocole configure automatiquement les paramètres TCP/IP de tous les ordinateurs de votre réseau domestique.';
h6='<b>Accès à distance</b> Connexion qui utilise le réseau téléphonique public.';
h7='<b>DMZ</b> Zone virtuelle du routeur qui n\'est pas protégée par son pare-feu.  Un ordinateur peut être placé dans la zone DMZ.';
h8='<b>Adresse de serveur DNS</b> Le DNS (système de nom de domaine) permet aux ordinateurs hôtes Internet de disposer d\'un nom de domaine (comme belkin.com, par exemple) et d\'une ou de plusieurs adresses IP (192.34.45.8, par exemple). Le serveur DNS gère la base de données des ordinateurs hôtes, de leurs noms de domaines respectifs ainsi que de leurs adresses IP. Ainsi, lorsqu\'un nom de domaine est demandé (vous tapez belkin.com dans votre navigateur Web), l\'utilisateur est renvoyé vers l\'adresse IP appropriée. L\'adresse du serveur DNS utilisé par les ordinateurs de votre réseau domestique est l\'emplacement du serveur DNS que votre fournisseur d\'accès a attribué.';
h9='<b>Modem DSL</b> DSL est l\'acronyme de Digital Subscriber Line. Un modem DSL utilise vos lignes téléphoniques existantes pour transmettre des données à haut débit.';
h10='<b>IP dynamique</b> Adresse IP obtenue automatiquement auprès du serveur DHCP.';
h11='<b>Ethernet</b> Norme des réseaux informatiques. Les réseaux Ethernet sont connectés par des câbles et des hubs spéciaux. Ils transmettent les données jusqu\'à 10 millions de bits par seconde (Mbps).';
h12='<b>Pare-feu</b> Frontière électronique qui empêche tout utilisateur non autorisé d\'accéder à certains fichiers ou ordinateurs d\'un réseau.';
h13='<b>Micrologiciel</b> Logiciel emmagasiné dans la mémoire. Programmes essentiels qui demeurent en place même lorsque le système est éteint. Les micrologiciels sont plus faciles à modifier que les matériels informatiques, mais plus permanents que les logiciels stockés sur disque.';
h14='<b>Adresse IP</b> IP est l\'acronyme d\'Internet Protocol. Une adresse IP est constituée d\'une série de quatre nombres séparés par des points. Elle permet d\'identifier un ordinateur hôte Internet unique. Par exemple : 192.34.45.8.';
h15='<b>ISDN</b> Acronyme de Integrated Services Digital Network. Lignes de télécommunications numériques qui peuvent transmettre à la fois de la voix et des services réseaux numériques à un débit jusqu\'à 128 K et qui sont beaucoup plus rapides et fiables que les modems haut débit analogiques. Les lignes ISDN sont offertes par la plupart des opérateurs téléphoniques.';
h16='<b>FAI</b> Fournisseur d\'accès à Internet. Un FAI est une entreprise qui permet aux individus et aux autres entreprises de se connecter à Internet.';
h17='<b>Adresse de passerelle du FAI</b> (voir FAI pour la définition). L\'adresse de passerelle du FAI est une adresse IP correspondant au routeur Internet situé chez votre fournisseur d\'accès. Cette adresse n\'est requise que lorsque vous utilisez un modem câble ou ADSL.';
h18='<b>LAN</b> Réseau local. Un LAN est un groupe d\'ordinateurs et de périphériques connectés entre eux dans une zone relativement restreinte (la maison ou le bureau, par exemple). Votre réseau à domicile est considéré comme un réseau local.';
h19='<b>Adresse MAC</b> MAC est l\'acronyme de Media Access Control. L\'adresse MAC est l\'adresse matérielle du périphérique connecté à un réseau.';
h20='<b>MTU</b> Acronyme de Maximum Transmission Unit. Le plus grand paquet (unité) de données pouvant être transmis sur un médium physique particulier.';
h21='<b>NAT</b> Acronyme de Network Address Translation. Ce procédé permet à tous les ordinateurs de votre réseau domestique d\'utiliser une seule adresse IP. Grâce à la technologie NAT du de votre passerelle réseau domestique HomeConnect, vous pouvez accéder à Internet depuis tous les ordinateurs de votre réseau domestique sans devoir vous procurer d\'autres adresses IP auprès de votre FAI.';
h22='<b>Port</b> Canal logique identifié par son numéro de port unique. Les applications écoutent certains ports pour repérer des informations pouvant y être liées.';
h23='<b>PPPoE</b> Acronyme de Point-to-Point Protocol over Ethernet (Protocole Poste à Poste par l\'Ethernet). Le protocole poste à poste est un moyen de sécurisation de la transmission des données créé, à l\'origine, pour les accès distants. PPPoE est utilisé pour les connexions Ethernet.;  ';
h24='<b>PPPTP</b> Acronyme de Point-to-Point Tunneling Protocol (Protocole de Tunnelisation Poste à Poste). Une version améliorée du PPP qui possède la capacité d\'encapsuler des paquets de données formatés pour un protocole réseau en paquets pouvant être utilisés par un autre protocole. Cette technique de tunnelisation permet aux données TCP/IP d\'être transmises sur un réseau non-TCP/IP. Le PPTP peut être utilisé pour relier deux réseaux physiques différents, en utilisant l\'Internet comme intermédiaire.';
h25='<b>SNTP</b> Acronyme de Simple Network Time Protocol. Une norme de communication permettant la transmission d\'information en temps réel sur un réseau ou l\'Internet.';
h26='<b>SPI</b> Acronyme de Stateful Packet Inspection. SPI est le type de sécurité Internet pour entreprises que propose votre passerelle réseau domestique HomeConnect. Grâce au SPI, la passerelle se comporte comme un pare-feu et protège votre réseau contre les pirates informatiques.';
h27='<b>IP fixe</b> Adresse IP configurée manuellement et qui ne change jamais.';
h28='<b>Masque de sous-réseau Mask</b> Un masque de sous-réseau (qui peut faire partie des informations TCP/IP fournies par votre FAI) est un ensemble de quatre nombres configurés comme une adresse IP. Il s\'emploie pour créer des nombres d\'adresses IP qui s\'utilisent uniquement avec un réseau donné (contrairement aux numéros d\'adresses IP valides reconnus sur Internet qui doivent être attribués par le InterNIC).';
h29='<b>TCP</b> Acronyme de Transmission Control Protocol. Protocole de transport de données le plus courant sur Internet. Le protocole TCP est orienté vers la connexion et la transmission, et procure une communication fiable entre les réseaux à commutation de paquets.';
h30='<b>TCP/IP</b> Acronyme de Transmission Control Protocol over Internet Protocol. Il s\'agit du protocole standard pour la transmission des données sur Internet.';
h31='<b>UDP</b> Acronyme de User Datagram Protocol. Protocole de communication pour la couche réseau Internet, la couche de transport et la couche session, ce qui rend possible l\'envoi d\'un message datagramme depuis un ordinateur vers une application fonctionnant sur un autre ordinateur. Contrairement au TCP, l\'UDP ne requiert pas de connexion et ne garantit pas une communication fiable ; l\'application elle-même doit traiter les erreurs et vérifier la fiabilité de la transmission. ';
h32='<b>WAN</b> Réseau étendu. Réseau qui permet de connecter des ordinateurs situés dans des zones géographiquement distinctes (bâtiments, villes ou pays différents). Internet est un réseau étendu.';
h33='<b>Adresse IP WAN</b> Adresse IP attribuée au routeur par le FAI.';
h34='<b>WLAN</b> Réseau local sans fil. Réseau local qui relie des ordinateurs proches entre eux via des ondes radio (comme 802.11b)';
h35="<b>L2TP</b> Layer Two (2) Tunneling Protocol. an extension to the PPP protocol that enables ISPs to operate Virtual Private Networks (VPNs). L2TP merges the best features of two other tunneling protocols: PPTP from Microsoft and L2F from Cisco Systems. Like PPTP, L2TP requires that the ISP's routers support the protocol.";
h39='<b>DHCP</b> La fonction de serveur DHCP permet la mise en place d\'un réseau en toute simplicité, en attribuant une adresse IP à chacun des ordinateurs du réseau. Le serveur DHCP peut être désactivé au besoin. Si vous désactivez le serveur DHCP, vous devrez entrer manuellement une adresse IP fixe pour chaque ordinateur du réseau. Le pool d\'adresses IP est la plage d\'adresses IP mises de côté pour attribution dynamique aux ordinateurs de votre réseau. La valeur par défaut est de 2 à 100 (99 ordinateurs). Pour changer ce nombre, entrez de nouvelles adresses IP de début et de fin, puis cliquez sur « Enregistrer les modifications ».';
Enabled='Activé';
Disabled='Désactivé';
Auto='Auto';
str1='Ce périphérique est administré par ';
str2=' en ce moment !!';
DDNSDisable='Désactivé';
DynDNS='DynDNS';
DtDNS='DtDNS';
Current='Canal actuel';
i1='Accueil Configuration ';
i2='État';
i3='Information sur la version ';
i4='Version du microprogramme ';
i5='Version de l\'Amorce  ';
i6='Matériel  ';
i7='N° de série';
i8='Paramètres de réseau local ';
i9='MAC LAN/WLAN';
i9a='MAC du réseau local';
i9b='WLAN non disponible';
i10='Adresse IP ';
i11='Masque de sous-réseau ';
i12='Serveur DHCP';
NoClients='Pas de client';
Clients='Clients';
i13='Paramètres Internet  ';
i14='Adresse MAC WAN ';
i15='Type de Connexion';
i16='Masque de sous-réseau  ';
i17='IP WAN';
i18='Passerelle Par défaut  ';
i19='Adresse DNS  ';
i20='Caractéristiques ';
i21='NAT';
i22='Paramètres du Pare-Feu ';
i23='SSID ';
i24='Sécurité';
i25='Imprimante ';
i26='(activer/désactiver)';
i27='Vous devez ouvrir une session avant d\'apporter des modifications.';
i28='Langage';
i29='Langue';
i30='Langues disponibles';
i31='IP fixe';
i32='Sans Fil Désactivé';
ld1='LAN > DHCP';
ld2='LAN > Liste de Clients DHCP';
ld3='Cette page montre l\'adresse IP, le Nom d\'Hôte et l\'adresse MAC de chaque ordinateur relié à votre réseau. Si vous n\'avez pas spécifié de nom d\'hôte pour l\'ordinateur, le champ Nom d\'Hôte sera vide. Pour mettre la liste à jour, cliquez sur « Actualiser ».';
ld4='Adresse IP ';
ld5='Nom d\'hôte';
ld6='Adresse MAC';
lm1='LAN';
lm2='Le serveur DHCP attribue automatiquement des adresses IP à chaque ordinateur afin de simplifier la configuration de la mise en réseau. Les paramètres par défaut du serveur DHCP sont compatibles avec la plupart des applications. Vous pouvez apporter des modifications aux paramètres si vous le désirez.';
lm3='Les modifications que vous pouvez apporter sont :';
lm4='Modifier l\'adresse IP interne du routeur. L\'adresse par défaut';
lm5='Modifier le masque de sous-réseau. L\'adresse par défaut';
lm6='Activer/Désactiver la fonction de serveur DHCP. Par défaut';
lm7='Spécifier l\'adresse de départ et de fin de la Réserve d\'Adresses IP Par défaut';
lm8='Entrer la durée d\'autorisation de l\'adresse IP Par défaut';
lm9='Entrer un Nom de Domaine local. Par défaut';
lm10='Pour apporter des modifications, cliquez sur « Paramètres du Réseau local » sur l\'onglet LAN, situé à la gauche.';
lm11='Le Routeur vous fournira aussi une liste de tous les clients reliés au réseau. Pour visualiser la liste, cliquez « Liste de Clients DHCP » à l\'onglet LAN, à gauche.';
ls1='LAN > Paramètres de réseau local';
ls2='Vous pouvez ici apporter des modifications au réseau local (LAN). Pour que les modifications soient prises en compte, vous devez appuyer sur le bouton « Enregistrer les Modifications » au bas de l\'écran.; ';
ls3='Adresse IP ';
ls4='Masque de sous-réseau     ';
ls5='Serveur DHCP  ';
On='Activé';
Off='Désactivé  ';
ls6='La fonction de serveur DHCP permet la mise en place d\'un réseau en toute simplicité, en attribuant une adresse IP à chacun des ordinateurs du réseau. Il n\'est pas nécessaire d\'apporter des modifications ici.';
ls7='Adresse de début du pool IP  ';
ls8='Adresse de fin du pool IP   ';
ls9='Durée d\'autorisation   ';
ls10='Toujours ';
ls11='Demi-heure';
ls12='1 heure';
ls13='2 heures ';
ls14='Demi-journée ';
ls15='Un jour';
ls16='Deux jours';
ls17='Une semaine ';
ls18='Deux semaines  ';
ls19='La durée pendant laquelle le serveur DHCP réservera l\'adresse IP pour chaque ordinateur.  ';
ls20='Nom de domaine local';
Optional='Facultatif    ';
ls21='Fonction qui vous permet d\'attribuer un nom à votre réseau. ';
lssm='Les nombres du masque de sous-réseau que vous avez entrés sont incorrects.';
lsnetm='Le pool IP doit être dans le même masque de sous-réseau que la passerelle IP ';
lsendm='L\'IP de fin doit être supérieur à l\'IP de départ.';
lspoolm='L\'adresse IP LAN ne peut pas figurer dans la réserve d\'adresses DHCP. ';
lsipm2='Adresse IP LAN non valide, le dernier numéro ne peut être ni 0 ni 255';
lsipm3='Adresse IP LAN non valide, le premier numéro ne peut être ni 127 ni 0';
lsldnm='Invalid Local Domain Name: `~!@#$%^&*()_+[]{}\\|;:\'"<>/?.,';
lsipm4='L\'IP entrée n\'est pas valide';
lsipalert='Veuillez modifier manuellement la zone de saisie Adresse dans la barre d\'état de votre navigateur et indiquer la nouvelle adresse LAN';
lsipm5='L\'adresse IP choisie doit être une adresse IP non-acheminable.)\n  192.168.x.x (où x est un nombre compris entre 0 et 255). \n10.x.x.x (où x est un nombre compris entre 0 et 255.)\n172.y.x.x (où y est un nombre compris entre 16 et 31, et x est compris entre 0 et 255.)';
lsipc='Souhaitez-vous vraiment changer l\'adresse IP du réseau local ?';
lo1='Connexion';
lo2='Avant d\'apporter des modifications, vous devez vous connecter avec votre mot de passe. Si vous n\'avez pas encore créé un mot de passe personnalisé, laissez ce champ vide et cliquez sur « Envoyer ». ';
lo3='Mot de passe  ';
lo4='Par défaut ';
Clear='Effacer';
Submit='Envoyer';
le1='Belkin | Erreur de connexion';
lerror='Erreur de connexion !!';
Utilities='Utilitaires >';
ss1='Modifications enregistrées avec succès';
rs1='Initialisation Réussie';
rs3='Le Routeur redémarre';
rs4='secondes restantes.  ';
ugs1='Mise à jour du micrologiciel réussie';
rf1='Restauration des paramètres par défaut du constructeur réussie ';
rss1='Rétablissement des paramètres réussi';
ufy1='Restaurer les paramètres par défaut du constructeur';
ufy2='Cette option rétablira les paramètres du routeur vers les paramètres par défaut du fabricant. Nous vous recommandons de faire une copie de vos paramètres avant de rétablir la configuration par défaut. Pour rétablir la configuration par défaut, cliquez sur le bouton « Rétablir les Paramètres par Défaut » ci-dessous.';
ufy3='AVERTISSEMENT : Tous vos réglages seront perdus !\nEst-ce vraiment ce que vous voulez faire ?';
ufy4='La restauration des paramètres par défaut peut prendre jusqu\'à 60 secondes. N\'éteignez pas le routeur pendant le processus.';
ufy5='Les paramètres par défaut ne seront pas restaurés. Aucun paramètre ne sera perdu !';
ufy='Rétablir les Paramètres par Défaut';
ufe1='Utilitaires > Mise à jour du micrologiciel';
ufe2='De temps à autre, Belkin peut lancer une nouvelle version du micrologiciel du Routeur. Ces mises à jour peuvent contenir des améliorations et des solutions à des problèmes existants. Cliquez sur le lien ci-dessous pour vérifier la disponibilité d\'une mise à jour du micrologiciel de ce Routeur.';
ufe3='NOTE : Veuillez faire une copie de vos paramètres avant de mettre à jour le micrologiciel.';
ufe4='Cliquez ici';
ufe5='pour vous rendre à la page de Sauvegarde des Paramètres.';
ufe6='Rechercher une Nouvelle Version du Micrologiciel';
ufe7='Vérifier le micrologiciel ';
ufe8='Mise à jour du micrologiciel';
Update='Mise à Jour';
ufe9='Veuillez spécifier où se trouve le fichier de mise à niveau. Entrez le nom du fichier ainsi que son chemin d\'accès ou cliquez sur « Parcourir » pour accéder à l\'emplacement du fichier.';
ufe10='Voulez-vous vraiment poursuivre la mise à jour ?';
ufe11='À la fin du processus de mise à niveau, le routeur peut ne pas répondre aux commandes pendant une période pouvant aller jusqu\'à environ 180 secondes. Ceci est normal. Ne fermez ni ne redémarrez votre Routeur pendant cette période.';
ufe12='Version du microprogramme ';
um1='Cet écran vous permet de gérer plusieurs paramètres du Routeur et accomplir certaines tâches administratives.';
um5='Redémarrer le Routeur';
um6='Parfois il peut être utile de redémarrer le routeur lorsque celui-ci fonctionne de façon inappropriée. Redémarrer le Routeur n\'affectera en rien vos paramètres de configuration.';
um7='Rétablir les paramètres par défaut du fabricant';
um8='Cette option rétablira les paramètres du routeur vers les paramètres par défaut du fabricant. Nous vous recommandons de faire une copie de vos paramètres avant de rétablir la configuration par défaut.';
um9='Enregistrer/Sauvegarder les paramètres actuels';
um10='Vous pouvez sauvegarder votre configuration actuelle grâce à cette fonction. Cela vous permettra de la rétablir plus tard si vous perdez les paramètres ou s\'ils sont modifiés. Nous vous recommandons de faire une copie de vos paramètres avant de mettre à jour le micrologiciel.';
um11='Rétablir les Paramètres Précédents';
um12='Cette option vous permet de rétablir une configuration sauvegardée préalablement.';
um13='Mise à jour du micrologiciel ';
um14='De temps à autre, Belkin peut lancer une nouvelle version du micrologiciel du Routeur. Ces mises à jour peuvent contenir des améliorations et des solutions aux problèmes existants. ';
um15='Paramètres du système ';
um16='La page « Paramètres du système » est l\'endroit où vous pouvez entrer un nouveau mot de passe d\'administrateur';
um17=', régler le fuseau horaire, activer la gestion à distance, et activer/désactiver la fonction de NAT du Routeur';
um18='du Routeur';
not='non';
pwd='Mot de passe';
uprev1='Utilitaires > Rétablir les Paramètres Préalablement Sauvegardés';
uprev2='Cette option vous permet de rétablir une configuration sauvegardée préalablement.';
Restore='Rétablir';
uprev3='Entrez le nom du fichier contenant les paramètres sauvegardés.';
uprev4='Voulez-vous poursuivre et rétablir les paramètres ?';
uprev5='Suite au rétablissement des paramètres, le Routeur peut ne pas répondre aux commandes pendant une période pouvant aller jusqu\'à environ 60 secondes.\nCeci est normal. Ne débranchez pas votre Routeur pendant cette période.';
ueco1='Utilitaires > Paramètres Eco';
ueco2='ECO is a mode about "energy saving" mode';
ur1='Utilitaires > Redémarrer le Routeur';
ur2='Il peut parfois être utile de redémarrer le Routeur lorsque celui-ci fonctionne de façon incongrue. Redémarrer le Routeur n\'affectera en rien vos paramètres de configuration. Cliquez sur le bouton « Redémarrer le Routeur » ci-dessous pour redémarrer le Routeur.';
ur3='Redémarrer le Routeur';
ur4='Voulez-vous vraiment redémarrer le Routeur ? Redémarrer le routeur n\'affectera en rien votre configuration.';
ur5='Allouez jusqu\'à 30 secondes au Routeur pour redémarrer. Ne débranchez pas le Routeur avant que le processus de redémarrage ne soit complété.';
ur6='Allouez jusqu\'à 60 secondes au Routeur pour redémarrer. Ne débranchez pas le Routeur avant que le processus de redémarrage ne soit complété.';
usave1='Utilitaires > Sauvegarder les Paramètres Actuels';
usave2='Vous pouvez sauvegarder votre configuration actuelle grâce à cette fonction. Cela vous permettra de la rétablir plus tard si vous perdez les paramètres ou s\'ils sont modifiés. Nous vous recommandons de faire une copie de vos paramètres avant de mettre à jour le micrologiciel.';
Save='Enregistrer';
usys1='Utilitaires > Paramètres système';
usys2='Mot de passe Administrateur : ';
usys3='Le routeur est livré SANS mot de passe défini. Si par souci de sécurité vous désirer ajouter un mot de passe, vous pouvez le configurer ici.';
usys4='Entrez le Mot de Passe actuel  ';
usys5='Entrez le nouveau mot de passe  ';
usys6='Confirmer le nouveau Mot de Passe  ';
usys7='Temporisation de la Connexion';
usys8='(1-99 minutes) ';
usys9='Définition d\'un fuseau horaire ';
January='Janvier';
February='Février';
March='Marzo';
April='April';
May='Mayo';
June='Junio';
July='July';
August='Agosto';
September='Septiembre';
October='Octubre';
November='Noviembre';
December='December';
usys10='Définissez votre fuseau horaire. Si vous demeurez dans une région ayant recours à l\'heure d\'été, cochez cette case.';
usys11='Fuseau horaire';
usys12='(GMT-12:00) Enewetak, Kwajalein ';
usys13='(GMT-11:00) Îles Midway, Samoa';
usys14='(GMT-10:00) Hawaii';
usys15='(GMT-09:00) Alaska';
usys16='(GMT-08:00) Pacifique (É.U. et Canada) ; Tijuana ';
usys17='(GMT-07:00) Arizona';
usys18='(GMT-07:00) Montagnes Rocheuses (USA et Canada), Nouveau-Mexique  ';
usys19='(GMT-06:00) Mexico ';
usys19a='(GMT-06:00) Centre (USA et Canada), Chicago ';
usys20='(GMT-06:00) Tegucigalpa ';
usys21='(GMT-06:00) Saskatchewan';
usys22='(GMT-05:00) Bogota, Lima, Quito';
usys23='(GMT-05:00) Est (É.-U. et Canada)';
usys24='(GMT-05:00) Indiana (Est)';
usys25='(GMT-04:00) Heure de Atlantique (Canada)';
usys26='(GMT-04:00) Caracas, La Paz ';
usys27='(GMT-04:00) Santiago';
usys28='(GMT-03:00) Newfoundland ';
usys29='(GMT-03:00) Brasilia';
usys30='(GMT-03:00) Buenos Aires, Georgetown ';
usys31a='(GMT-02:00) Centre-Atlantique';
usys32='(GMT-01:00) Açores, Iles du Cap-Vert ';
usys33='(GMT) Casablanca, Monrovia';
usys34='(GMT) Heure de Greenwich Lisbonne, Londres ,Édimbourg ';
usys35='(GMT) Heure de Greenwich Dublin ';
usys36='(GMT+01:00) Amsterdam, Berlin, Berne, Rome ';
usys37='(GMT+01:00) Stockholm, Vienne, Belgrade ';
usys38='(GMT+01:00) Bratislava, Budapest, Ljubljana ';
usys39='(GMT+01:00) Prague, Bruxelles, Copenhague, Madrid ';
usys40='(GMT+01:00) Paris, Sarajevo, Skopje ';
usys41='(GMT+01:00) Varsovie, Zagreb ';
usys42='(GMT+02:00) Athènes, Istanbul, Minsk ';
usys43='(GMT+02:00) Bucarest ';
usys43a='(GMT+02:00) Israël ';
usys44='(GMT+02:00) Le Caire';
usys45='(GMT+02:00) Harare, Pretoria';
usys46='(GMT+02:00) Helsinki, Riga, Tallinn ';
usys48='(GMT+03:00) Bagdad, Koweït, Nairobi, Riyad ';
usys50='(GMT+03:00) Moscou, St. Petersbourg,Volgograd, Kazan ';
usys50b='(GMT+03:30) Téhéran ';
usys51='(GMT+04:00) Abu Dhabi, Muscat, Tbilissi ';
usys52='(GMT+04:30) Kabul ';
usys53='(GMT+05:00) Islamabad, Karachi, Iekaterinbourg ';
usys53a='(GMT+05:30) Calcutta, Chennai, Mumbai, New Delhi ';
usys54='(GMT+06:00) Almaty, Novosibirsk ';
usys55='(GMT+07:00) Bangkok, Jakarta, Hanoi';
usys56='(GMT+08:00) Pékin, Chongqoing, Ouroumtsi ';
usys57='(GMT+08:00) Hong Kong, Perth, Singapour, Taipei ';
usys58='(GMT+09:00) Tokyo, Osaka, Sapporo ';
usys58a='(GMT+09:00) Seoul ';
usys96='(GMT+09:30) Adelaïde, Darwin ';
usys59='(GMT+10:00) Brisbane';
usys60='(GMT+10:00) Canberra, Melbourne, Sydney';
usys61='(GMT+10:00) Guam, Port Moresby ';
usys62='(GMT+10:00) Hobart';
usys63='(GMT+11:00) Magadan, Iles Salomon, Nouvelle-Calédonie';
usys64='(GMT+12:00) Wellington, Auckland ';
usys65='(GMT+12:00) Fiji, Kamchatka, Marshall ls. ';
usys66='Heure d\'été';
usys67='Ajuster automatiquement à l\'heure d\'été';
usys97="(GMT+13:00) Nuku'alofa ";
printps='Serveur NTP principal';
bakntps='Serveur NTP secondaire';
usys68='Gestion à distance    ';
AF='FONCTION AVANCÉE !';
usys69='La gestion à distance vous permet d\'apporter des changements aux paramètres de votre routeur, où que vous soyez grâce à l\'Internet. Avant d\'activer cette fonction, ';
usys70='ASSUREZ-VOUS D\'AVOIR ENTRÉ UN MOT DE PASSE ADMINISTRATEUR.';
usys71='N\'importe quelle adresse IP peut gérer le routeur à distance.  ';
usys72='Seule cette adresse IP peut gérer le routeur à distance >  ';
usys73='Activation de la NAT :    ';
usys74='Vous permet d\'éteindre la fonction de traduction d\'adresse réseau (NAT). Dans la plupart des cas, il est recommandé de ne PAS DÉSACTIVER cette fonctionnalité. ';
usys75='Activation/Désactivation NAT';
 
usys76='Activation de l\'UPnP :    ';
usys77=' Vous permet d\'activer/désactiver la fonction UPnP du routeur. Si vous utilisez des applications prenant en charge l\'UPnP, cette fonction permettra à ces applications de configurer automatiquement le routeur. ';
usys78='Activation/Désactivation de l\'UPnP';
usys79='Activer la mise à jour automatique du micrologiciel :  ';
usys80='Vous permet de vérifier automatiquement la disponibilité de mises à jour pour votre routeur.';
usys81='Activation/Désactivation de la mise à jour automatique du micrologiciel ';
usys82='Le mot de passe actuel est invalide';
usys83='Le nouveau mot de passe et le mot de passe de vérification ne correspondent pas.';
usys83_1='Les mots de passe ne correspondent pas.';
usys84='Le temps d\'inactivité des numéros que vous avez inscrits ne sont pas valides. Le nombre doit être un entier compris entre 1-99';
usys84_1='La valeur de temps d\'inactivité entrée est incorrecte. La valeur doit être un nombre entier compris entre 1 et 99.';
usys85='La longueur du mot de passe est incorrecte. La longueur du mot de passe doit être comprise entre 3 et 12 caractères';
usys85_1='Le mot de passe d\'administration doit comprendre entre 1 et 63 caractères.';
usysntp='Two NTP Server IP address can not be the same.';
usys86='Veuillez modifier manuellement la zone de saisie Adresse dans la barre d\'état de votre navigateur et indiquer l\'adresse LAN par défaut';
usys87='Avant d\'activer cette fonction, il est FORTEMENT RECOMMANDÉ que vous ajoutiez un mot de passe administrateur.';
usys88='The password has reached its max length!';
usys89='AM';
usys90='PM';
usys91='Port d\'accès distant';
usys92='Remote access port is invalid. Valid port should be in 1 - 65535.';
usys93="Utilisez cette fonction pour économiser de l'énergie";
usys94='IGMP Proxy';
usys95=' IGMP Proxy Activer / Désactiver';
usysipm='Vous n\'avez pas entré les numéros de l\'IP ou certains numéros entrés ne sont pas valides. L\'adresse IP doit être x.y.y.x (où y est un nombre entre 0 et 255 et x un nombre entre 1 et 254).';
usysipm_1='Vous n\'avez pas entré les nombres de l\'IP ou certains nombres entrés sont incorrects. Ils doivent être compris entre 0 et 255.';
self_healing='Santé > Maintenance régulière';
self_healing1='La réinitialisation régulière du routeur peut aider à garder le réseau exempt de problèmes.';
self_healing2='Auto initialiser mon routeur';
self_healing3='Set Jours';
self_healing4='DIM';
self_healing5='LUN';
self_healing6='MAR';
self_healing7='MER';
self_healing8='JEU';
self_healing9='VEN';
self_healing10='SAM';
self_healing11="Définir l'heure";
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
Europe='Europe';
Australia='Australie et NZ ';
AsiaPacific='Asia Pacific';
NorthAmerica='Amérique du Nord';
wrhtpsswd='<b>Mot de passe incorrect</b><br>Veuillez confirmez le mot de passe et essayer à nouveau.';
usysb1='Le routeur est livré SANS mot de passe défini. Si par souci de sécurité vous désirer ajouter un mot de passe, vous pouvez le configurer ici.';
vjs1='Adresse IP incorrecte, trop longue. Veuillez vérifier.';
vjs2='Adresse IP incorrecte, manque \'.\'. Veuillez réessayer !';
vjs3='Adresse IP incorrecte, il manque des nombres entre \'.\'. Veuillez réessayer !';
vjs4="Adresse IP incorrecte, '.' superflu , veuillez réessayer !";
vjs5='Adresse IP incorrecte, les nombres entre \'.\' sont trop grands. Veuillez réessayer !';
vm1='Caractère Invalide ';
vm2=' à la position ';
vm3='Doit être ';
vjs6='Format d\'année incorrect. Veuillez l\'entrer de nouveau (2002, par exemple)';
vm4='Numéro incorrect.  ';
vjs8='Incorrect, doit être compris entre 1970..2037';
vjs9='Format de mois incorrect. Veuillez l\'entrer de nouveau (01...12, par exemple)';
vjs10='Veuillez d\'abord entrer l\'année et le mois';
vjs11='Format de jour incorrect. Veuillez l\'entrer de nouveau (01...31, par exemple), certains mois ne pouvant être que (00...28)';
vjs12='Format horaire incorrect. Veuillez l\'entrer de nouveau (00...23, par exemple)';
vjs13='Format des minutes incorrect. Veuillez l\'entrer de nouveau (00..59, par exemple)';
vjs14='MTU incorrect, doit être comprise entre 500...1500';
vjs15='MTU incorrect, doit être compris entre 128...65535';
vjs16='IP incorrecte:';
vjs161=' non comprise ';
vjs162=' sous-réseau';
vjs163="La plage DHCP permise est ";
vjs17='Les deux mots de passe entrés sont différents. Veuillez vérifier !.';
vjs18='Veuillez entrer un numéro de port de début.';
vjs19='Le numéro de port de début doit être inférieur à celui du port de fin.';
vjs20='Numéro de port incorrect. Les numéros de ports doive être des entiers positifs.';
vjs21='Longueur incorrecte';
vjs22='Invalid Format at position ';
vjs23='Adresse MAC invalide, ceci est une adresse de diffusion.';
vjs24='Adresse MAC incorrecte. Il s\'agit d\'une adresse de type Null.';
vjs25='Adresse MAC invalide, ceci est une adresse de multidiffusion.';
vjs26='Adresses IP de début et de fin incorrectes. L\'adresse IP de fin doit être supérieure à celle du début.';
vjs27='Numéro incorrect ! Doit être compris entre 1..65535';
vjs28='Format de masque de réseau incorrect.';
vjs29='Format invalide. Masque de réseau soit être 255.255.255.0 ou 255.255.255.128 ou 255.255.255.192 ou 255.255.255.224 ou 255.255.255.240 ou 255.255.255.248 ou 255.255.255.252 ou 255.255.255.254';
vjs30='Adresse IP incorrecte. Le dernier numéro ne peut être ni 0 ni 255.';
vjs31='Adresse IP LAN non valide, le premier numéro ne peut pas être 127.';
vjs32='Adresse IP LAN incorrecte. Il ne peut s\'agir de 0.0.0.0';
vjs33='Adresse IP LAN incorrecte. Il ne peut s\'agir de 224.0.0.0';
vjs34='La plage autorisée est ';
vjs35='Adresse IP non valide : le premier nombre doit être compris entre 1 et 223.';
vjs36='Invalid network format.';
vjs37='Invalid gateway format.';
vjs38='IP is class A, netmask is invalid.';
vjs39='IP is class B, netmask is invalid.';
vjs40='IP is class C, netmask is invalid.';
vjs41='Invalid network ip, network ip is duplicate';
vjs42='Les numéros de masque de sous réseau que vous avez inscrits ne sont pas valides.';
vjs43='Adresse IP incorrecte. Le dernier nombre doit être compris entre 1 et 254.';
vjs44='Adresse DNS incorrecte. Le premier nombre doit être compris entre 1 et 223';
vjs45='Spécifier l\'adresse IP'; 
vjs46='est incorrect, veuillez d\'abord corriger !';
vjs47='%s est une adresse IP incorrecte, non comprise dans le masque réseau %s.';
dup='Administrateur secondaire';
wc1='WAN > Type de Connexion';
wcc2='Sélectionnez votre type de connexion : ';
wcc3='Dynamique';
wcc4='La connexion de type Dynamique est la plus courante. Si vous utilisez un modem câble, il est fort probable que vous possédiez une connexion dynamique. Si vous utilisez un modem câble ou n\'êtes pas certains de votre type de connexion, utilisez celle-ci.  ';
wcc5='Fixe';
wcc6='Une connexion de type Adresse IP Fixe est moins courante que les autres types de connexion. Utilisez ce type de sélection si votre FAI vous a attribué une adresse IP qui ne change jamais.  ';
wcc7='PPPoE';
wcc8='Si vous utilisez un modem DSL et/ou votre FAI vous a attribué un nom d\'utilisateur et un mot de passe, il est fort probablement que votre connexion soit de type PPPoE. Sélectionnez ce type de connexion.  ';
wcc9='PPTP';
wcc10='[Europe seulement]. Ce type de connexion se retrouve surtout en Europe. Si votre FAI vous recommande d\'utiliser spécifiquement le protocole PPTP et vous a fourni les informations requises, utilisez alors cette option. ';
wcc11='Telstra Bigpond/OptusNet Cable';

wcc12='Utilisez cette option pour les connexions Bigpond Cable et OptusNet Cable seulement.';

wcc12_a='Utilisez cette option pour les connexions Bigpond Cable et OptusNet Cable seulement.';
wcc13='L2TP';
wcc14='[Israel Only]. This type of connection is most common in Israel. If your ISP has specifically told you that you use L2TP and has supplied you with the proper L2TP information, then use this option.';
wcc15='Multi-PPPoE';
wcc16='[Japan Only] This type of connection is a unique function in Japan which is required for those who subscribe NTT\'s broadband Internet.';
Next='Suivant';
wds1='WAN > DNS';
wds2='Si votre FAI vous a attribué une adresse DNS spécifique, entrez l\'adresse dans cette fenêtre et cliquez sur « Enregistrer les Modifications ». ';
wds2_1='Si votre FAI vous a fourni des paramètres DNS spécifiques, veuillez les entrer ici.';
wds3='Automatiquement du FAI  ';
wds3_1='Automatiquement du FAI';
wds4='Adresse DNS  ';
wds4_1='Adresse DNS principale';
wds5='Adresse DNS secondaire   ';
wds5_1='Adresse DNS secondaire   ';
wds6='DNSVous devez entrer les paramètres DNS fournis par votre FAI si vous n\'utilisez pas la fonction DNS automatique';
wds6_1='DNS = Domain Name Server (serveur de nom de domaine). C\'est un serveur qui se trouve sur Internet et qui traduit les adresses URL (Universal Resource Locator), telles que www.belkin.com, en adresses IP.';
wds7='Vous devez entrer les paramètres DNS fournis par votre FAI si vous n\'utilisez pas la fonction DNS automatique';
wds8='Pour modifier le DNS, allez d\'abord à  %s Filtres de site Web %s , puis sélectionnez « Aucun filtre ».';
wdy1='WAN > Type de connexion > IP dynamique';
wdy2='Pour configurer vos paramètres d\'adressage IP dynamique, entrez les informations de connexion ci-dessous et cliquez sur « Enregistrer les Modifications ».';
wdy3='Nom d\'hôte';
wdy4='Nom d\'hôte ';
wdy5='Changer l\'Adresse MAC du WAN  ';
wdy6='Nom d\'hôte incorrect: `~!@#$%^&*()_+[]{}\\|;:\'"<>/?.,';
wmc1='WAN > Adresse MAC';
wmc2='Certains FAI exigent que l\'adresse MAC de la carte réseau de votre ordinateur soit clonée (copiée) dans le routeur. Advenant le cas que vous ignoriez si votre FAI l\'exige, clonez simplement l\'adresse MAC de l\'ordinateur originellement connecté au modem. Le clonage de l\'adresse MAC n\'entraînera aucun problème pour votre réseau.';
wmc3='Adresse MAC du WAN ';
wmc4='Cloner l\'Adresse MAC de l\'Ordinateur  ';
wmc5='Cloner';
wmc6="L'adresse MAC WAN ne peut être identique à l'adresse MAC LAN. Veuillez faire un autre choix.";
wdd1='Pare-feu > DDNS ';
wdd2="Le « Dynamic DNS » offre aux utilisateurs d'Internet un nom de domaine fixe (au lieu d'une adresse IP qui change de temps à autre), permettant l'accès à votre routeur et aux applications configurées dans les serveurs virtuels de votre routeur à partir de plusieurs endroits sur l'Internet, sans devoir connaître votre adresse IP actuelle. Votre routeur sans fil prend en charge le DNS dynamique via DynDNS.org (<A href=\"http://www.dyndns.org/\"><B>http://www.dyndns.org</B></A>). Vous devez créer un compte avant de pouvoir utiliser ce service.";
wdd3='Service DDNS';
wdd4='État DDNS';
wdd5='Site Web';
wdd6='Nom d\'utilisateur   ';
wdd7='Mot de passe';
wdd8='Nom de Domaine';
wdd9 ='Aucun service DDNS sélectionné.\n';
wdd10='Aucun service DDNS sélectionné, toutes les données des cette page seront perdues. Continuer ?';
wm1='Internet / WAN';
WAN='Internet / WAN';
wm2='Vous pouvez configurer votre Routeur selon les paramètres de votre FAI à l\'onglet Internet / WAN. Le Routeur peut pratiquement se connecter à tous les systèmes de FAI, si bien sûr vous avez configuré votre Routeur avec les paramètres appropriés à votre type de connexion. Pour configurer votre Routeur selon les paramètres de votre FAI, cliquez sur Type de Connexion à l\'onglet Internet / WAN, à la gauche de l\'écran.';
wm3='Types de Connexions prises en charge : ';
wm4='Dynamique';
wm4b=' y compris les FAI qui exigent un nom d\'hôte et ceux qui lient la connexion à une adresse MAC spécifique. ';
wm5='Adresse IP fixe';
wm5b='le routeur prend en charge les connexions aux FAI qui attribuent une adresse IP fixe.';
wm6='PPPoE';
wm6b='le Routeur prend en charge les connexions dynamiques qui exigent une connexion PPPoE comme authentification.';
wm7='PPTP';
wm7b="Pour l'Europe SEULEMENT. Le routeur prend en charge les connexions aux FAI européens utilisant le protocole PPTP. ";
wm10='L2TP';
wm10b="N'utilisez que si votre FAI nécessite la méthode de connexion L2TP.";
wpe1='WAN > Type de Connexion > PPPoE';
wpe2='Pour entrez vos paramètres PPPoE, entrez les informations ci-dessous et cliquez sur « Enregistrer les Modifications ».';
wpe3='Nom d\'utilisateur   ';
wpe4='Entrez à nouveau le mot de passe   ';
wpe5='Nom de Service (Facultatif)    ';
wpe6='MTU (500-1500)    ';
wpe7='N\'apportez aucun changement aux paramètres de MTU, à moins que votre FAI ne vous ait fourni un paramètre différent de 1454.';
wpe8='Déconnecter après';
wpe9=' minutes d\'inactivité. ';
idlerangerro='La durée d\'inactivité des numéros entrés est invalide.\n Les numéros doivent être compris entre 1 et 99.';
wpe10='Caractère non valide : <>&';
wptid='Caractère non valide : "';
pm='Votre service est dans l\'impossibilité de vérifier le mot de passe entré. Veuillez vous assurer que vous l\'avez correctement entré.';
pm_1='Les nouveaux mots de passe entrés sont différents. Veuillez essayer de nouveau.';
wpe11='Valeur MTU incorrecte';
wpe12='Veuillez entrer votre nom d\'utilisateur';
wmpe1='WAN > Connection Type > Multi-PPPoE';
wmpe2='To enter your Multi-PPPoE settings, type in your information below and click "Apply changes".';
wmpe3='Description';
wmpe4='PPPoE Account';
wmpe5='Retype Password';
wmpe6='Service Name (Optional)';
wmpe7='MTU (1440-1454)';
wmpe7_1='MTU incorrect, doit être comprise entre 1440...1454';
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
wpp3='Mot de passe';
wpp4='Entrez à nouveau le mot de passe   ';
wpp6='Adresse IP ';
wpp7='Masque de sous-réseau     ';
wpp14='Veuillez entrer à nouveau le mot de passe !';
wpp15='Veuillez entrer le mot de passe !';
wpp16='WAN > Connection Type > L2TP';
wpp17='L2TP Account';
wpp18='L2TP Password';
wpp19='Please enter your L2TP Account';
wpp20='IP attribuée par le FAI';
wpp21='Oui';
wpp22='Non';
wpp23='Attribution d\'adresse IP ';
wpp24='Utiliser l\'adresse IP fixe'; 
wpp25 ='Obtenir dynamiquement du FAI';
wppa1='WAN > Type de Connexion > PPTP';
wppa2='Compte PPTP    ';
wppa3='Mot de passe PPTP    ';
wppa4='Entrez à nouveau le mot de passe   ';
wppa5='Nom d\'hôte';
wppa6='Adresse de service IP  ';
wppa7='Mon adresse IP  ';
wppa8='Mon masque de sous-réseau  ';
wppa9='ID de connexion (optionnel)    ';
wppa10='Déconnecter après';
wppa11=' minutes d\'inactivité.';
wppa12='Cliquez ici pour entrer vos paramètres de DNS. ';
wppa13='Veuillez entrer votre compte PPTP';
wppa14='Veuillez entrer à nouveau le mot de passe !';
wppa15='Veuillez entrer le mot de passe !';
wppa16='Adresse IP';
wppa17='Adresse de service IP';
wppa18='Le nom de service n\'est pas valide.';
ws1='WAN > Type de connexion > IP dynamique';
ws2='Pour configurer vos paramètres d\'adressage IP fixe, entrez les informations de connexion ci-dessous et cliquez sur « Enregistrer les Modifications ».';
ws3='Adresse IP ';
ws4='Masque de sous-réseau     ';
ws5='Adresse de passerelle du FAI   ';
ws6='Mon FAI m\'attribue plus d\'une adresse IP fixe';
ws7='Cliquez ici pour entrer vos paramètres de DNS.  ';
dm='Il est possible que vous n\'ayez pas entré tous les numéros DNS ou certains de ces numéros ne sont pas valides. Ils doivent être compris entre 0 et 255.';
sm='Les numéros de masque de sous-réseau que vous avez entrés sont invalides.';
sm_1='Le masque de sous-réseau entré est incorrect.';
ws8='Veuillez entrer/valider vos paramètres d\'adresse DNS à l\'écran suivant.';
ws9='IP Address is same with Alias IP Address, please change one or remove one!';
ws10='Passerelle Par défaut';
wsc1='Alias d\'Adresse IP  ';
im='La liste d\'alias d\'Adresses IP est pleine. Il est impossible de créer d\'autres règles';
wt1 = 'IMPORTANT';
wt2 = 'Cliquez sur « Appliquer les modifications » pour redémarrer le routeur. Après le redémarrage du routeur, vous devrez procéder comme suit';
wt3 = '1) Débranchez le câble d\'alimentation du modem câble et du routeur Belkin';
wt4 = '2) Rebranchez le câble d\'alimentation sur le modem câble. Attendez que tous les voyants du modem cessent de clignoter';
wt5 = '3) Rebranchez le câble d\'alimentation sur le routeur Belkin';
wt6 = 'Pour confirmer la connexion à l\'Internet, ouvrez un navigateur tel Internet Explorer, Firefox ou Safari, et assurez-vous de pouvoir ouvrir des pages Web.';
Logout='Déconnexion';
wla1='Sans Fil > Utilisation comme Point d\'Accès';
wlad1='Le Routeur peut être configuré pour agir strictement en tant que Point d\'Accès, outre-passant entièrement les fonction d\'acheminement et de pare-feu. Pour ce faire, sélectionnez « Activer » et entrez l\'Adresse IP que vous désirez attribuer au point d\'accès.';
wlad2='Activer / Désactiver';
wlae1='Spécifier l\'adresse IP';
wlae2='Masque de Sous-Réseau  ';
wlae3='Veuillez modifier manuellement la zone de saisie Adresse dans la barre d\'état de votre navigateur et indiquer l\'adresse LAN ';
wlc1='Sans fil > Canal et SSID';
wlc2='Pour apporter des modifications aux paramètres du routeur, veuillez le faire ici. Cliquez sur « Enregistrer » pour enregistrer les paramètres.';
wlc3='Canal sans fil';
wlc4='SSID ';
wlcwch='Canal d\'extension';
wlc5='Mode Sans Fil ';
wlcgb='802.11b+g';
wlcg='802.11g';
wlcb='802.11b';
wlc9='Diffusion du SSID  ';
wlc10='Mode Turbo ';
wlc11="L'activation du Mode Turbo permet au routeur ou au point d'accès d'utiliser le Frame Bursting pour obtenir un débit maximal entre le routeur ou le point d'accès et les clients 802.11g, Le Mode Turbo fonctionne uniquement auprès de clients 802.11g prenant en charge le Mode Turbo. Les clients 802.11g de Belkin possédant les pilotes les plus récents prennent en charge le Mode Turbo. Les clients qui ne prennent pas en charge le Mode Turbo fonctionneront de façon habituelle si le Mode Turbo est activé.;";
wlc12='Mode Protégé';
wlc13="NOTE : Dans la majorité des cas, vous obtiendrez de meilleures performances (débit) avec le Mode Protégé étant Désactivé. Si vous travaillez dans un environnement avec un trafic 802.11b TRÈS DENSE ou subissez des interférences, vous obtiendrez de meilleures performances avec le Mode Protégé étant Activé.;";
wlc14='Utiliser comme point d\'accès';
wlc15="Lorsque vous utilisez le routeur comme point d'accès, vous devez indiquer l'adresse IP du point d'accès. Cette adresse IP doit figurer dans la même plage que le réseau auquel vous allez vous connecter. Pour accéder à nouveau à l'interface d'installation évoluée du routeur, entrez l'adresse IP dans le navigateur Web et connectez-vous. ";
wlc16='Wireless > EWC Setting';
wlc17='Bande passante';
wlc18='Control Sideband';
wlc19='NPHY Rate';
wlc20='20 MHz';
wlc21='40MHz only';
wlc22='20/40 MHz';
wlc22a='20/40/80 MHz';
wlc23='Utilisation de la fonction de commutation entre les modes sans fil. Ce commutateur vous permet de configurer les modes sans fil du routeur. Il existe plusieurs modes. <br>1) Off<br>Ce paramètre vous permet d\'éteindre le point d\'accès du routeur, pour ainsi empêcher tout dispositif réseau de rejoindre votre réseau. Ceci vous permet de sécuriser votre réseau en votre absence, par exemple, ou lorsque vous désirez ne pas utiliser la fonction sans fil de votre Réseau à un moment donné.<br>2) 802.11g only<br>Ce paramètre du routeur vous permet de relier des dispositifs 802.11g à votre réseau et en laissant de côté les périphériques 802.11b plus lents.<br> 3) 802.11n only<br>Ce paramètre vous permet de relier des dispositifs 802.11g à votre réseau, en laissant de côté les périphériques 802.11b et 802.11g plus lents.<br> 4) 802.11n &amp; 802.11g &amp; 802.11b<br>Ce paramètre du routeur vous permet de relier des dispositifs 802.11n, 802.11g et 802.11b à votre réseau.';
wlcoff='Désactivé  ';
wlcngb1='802.11b & 802.11g & 1x1 802.11n';
wlcn1='1x1 802.11n';
wlcngb2='802.11b & 802.11g & 802.11n';
wlcn2='802.11n';
wlca='802.11a'; 
wlcan='802.11a & 802.11n';
wlcgn='802.11g+n';
wlcnac='802.11n & 802.11ac';
wlcanac='802.11a & 802.11n & 802.11ac';
wlc24='Il existe quatre modes dans la bande 5 GHz.';
wlc25='1) 802.11a uniquement <br> Configuration du routeur à ce mode ne permettra 802.11a périphériques conformes aux normes rejoindre le réseau. <br> 2) 802.11a & 802.11n <br> Réglage du routeur de façon à ce mode pour permettre 802.11a et 802.11n périphériques conformes aux normes rejoindre le réseau. <br> 3) 802.11n uniquement <br>Configuration du routeur à ce mode ne permettra qu\'une 802.11n périphériques conformes aux normes rejoindre, écartant lentement 802.11a appareils. <br> 4) Désactivé <br> Ce mode s\'éteindra le routeur Wi-Fi, donc pas de dispositifs sans fil peuvent se joindre au réseau. La désactivation de la fonction sans fil de votre routeur est un excellent moyen de sécuriser votre réseau lorsque vous êtes loin de chez eux pendant une longue période de temps, ou ne voulez pas utiliser la fonction sans fil du routeur à un certain moment. <br> ';
wlc26='Masquer le nom de votre réseau désactivera le WPS.';
wlc27='Modifier le type de sécurité désactivera le WPS.';
wlc28='Le WPS est désactivé en raison de votre <B><A href=%s>type de sécurité sans fil</a></b>.';
wlc29='Le WPS est désactivé parce que vous avez masqué le nom de votre réseau (SSID).';
wlc30='Le WPS est désactivé parce que vous avez masqué le nom de votre réseau (SSID) et en raison de votre <B><A href=%s>type de sécurité sans fil</a></b>.';
wlc31='Activer le WPS affichera le nom de votre réseau (SSID).';
wlc32='Activer le WPS modifiera le type de sécurité avec WPA/WPA2. Votre mot de passe réseau actuel fonctionne très bien.';
wlc33='Activer le WPS affichera le nom de votre réseau (SSID) et modifiera le type de sécurité avec WPA/WPA2. Votre mot de passe réseau actuel fonctionne très bien.';
wlc34='Vous devez modifier le type de sécurité avec WPA/WPA2 et sélectionner un nouveau mot de passe réseau avant d\'activer le WPS.';
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
wlm1='Sans Fil';
wlm2='Dans cet onglet, vous pouvez ajuster les paramètres de la section Sans Fil du Routeur.';
wlm3='Canal et SSID';
wlm4='Faire des ajustements au canal sans fil et au SSID (nom du réseau sans fil).';
wlm5='Sécurité';
wlm6='Modifiez les paramètres de sécurité, tels que les paramètres de WPA ou de WEP. ';
wlm7='Utiliser en tant que Point d\'Accès';
wlm8='Définissez le mode de fonctionnement du routeur sur Point d\'accès ';
wlm9='Spécifier l\'adresse IP';
wlm10='Spécifiez l\'adresse IP du PA.';
wlm11='Contrôle d\'adresse MAC';
wlm12='Dressez une liste de clients qui obtiendront ou se verront refuser l\'accès au réseau sans fil.';
wle1='Sans Fil > Sécurité';
wle2='Mode Sécurisé';
wle2a='Désactivé';
wle2b='WPA/WPA2-Personal(PSK)';
wle2c='WEP 128 bits';
wle2d='WEP 64 bits';
wle3='Authentification';
wle3a='WPA-PSK';
wle3b='WPA2-PSK';
wle3c='WPA-PSK + WPA2-PSK';
wle7="Vous pouvez configurer les paramètres de sécurité/chiffrement ici. La Sécurité devrait être activée pour assurer la sécurité maximale du réseau sans fil. Le WPA (Wireless Protected Access) pré©©©©sente un changement de clés dynamique et constitue la meilleure option de sécurité. Dans les environnements sans fil, là où aucun des périphériques ne prend en charge le WPA, le mode WEP (Wired Equivalent Privacy) devrait être utilisé.;";
bit64WEP='64bit WEP';
bit128WEP='128bit WEP';
WPAPSK='WPA/WPA2-Personal(PSK)';

wps1='Configuration du Wi-Fi protégée';
wps2='Sans Fil >Configuration du Wi-Fi protégée';
wps3='Veuillez configurer la sécurité sans fil';
wps4='Wi-Fi Protected Setup (WPS) est la méthode standard de l\'industrie pour simplifier la configuration et la gestion de la sécurité des réseaux Wi-Fi. Vous pouvez maintenant facilement configurer et vous connecter à un réseau 802.11 activé WPA avec périphériques certifiés WPS avec soit la méthode du numéro d\'information personnel (Personal Information Number, PIN), soit celle de la configuration du bouton poussoir (Push Button Configuration, PBC). Des dispositifs classiques sans WPS peuvent être ajoutés au réseau à l\'aide de la méthode de configuration manuelle traditionnelle.';
wps5='1) Méthode Personal Information Number (PIN)';
wps6='Démarrez la méthode PIN WPS sur le périphérique client depuis son utilitaire sans fil ou son application WPS. Entrez ensuite le PIN du périphérique client et cliquez sur "Inscrire" dans les 2 minutes.';
wps7='Entrez le code PIN du périphérique client';
wps8='Inscrire';
wps9='Si un registraire externe est disponible, vous pouvez également entrer le code PIN du routeur sur le registraire externe. Pour modifier le code PIN du routeur, cliquez sur "Générer nouveau code PIN" ou cliquez sur "Restaurer code PIN par défaut" pour réinitialiser le code PIN à la valeur par défaut d\'usine.';
wps10='PIN routeur:';
wps11='Générer nouveau code PIN';
wps12='Restaurer code PIN par défaut';
wps13='2) Méthode Push Button Configuration (PBC)';
wps14='Appuyez sur le bouton PBC de votre routeur et maintenez-le enfoncé pendant 3 secondes, ou cliquez « Démarrer PBC ». Démarrez ensuite le PBC sur le périphérique que vous souhaitez connecter au routeur dans les 2 minutes.';
wps15='Démarrer PBC';
wps16='3) Méthode de configuration manuelle';
wps17_1='Pour les périphériques clients sans WPS, configurez manuellement le périphériques avec les paramètres suivants:';
wps17='Pour les périphériques clients sans WPS, exécutez l\'assistant de sécurité Belkin à partir du CD ou effectuez manuellement la configuration avec les paramètres qui suivent.';    
wps18='Router Configuration:';
wps19='Configuré';
wps20='Nom du réseau (SSID):';
wps21='Non configuré';
wps22='Authentification réseau:';
wps23='WPA+WPA2-Personal (PSK)';
wps24='Chiffrement de données:';
wps25='TKIP+AES';
wps26='Clé réseau (PSK):';
wps27='Clé réseau (WEP):';
wps28='Auto';
wps28_1='NULL';
wps29='WPS';
wps30='Wi-Fi Protected Setup (WPS) est la méthode standard de l\'industrie pour simplifier la configuration et la gestion de la sécurité des réseaux Wi-Fi.';
wps31='Sécurité sans fil:';
wps32='bouton WPS matériel';
wps33='Déverrouiller le PIN du routeur';
wps_msg1='Message Wi-Fi Protected Setup';
wps_msg2='PIN incorrect! Le PIN du périphérique comprend huit chiffres. Veuillez vérifier et entrer à nouveau.';
wps_msg3='Échec somme de contrôle du code PIN ! Veuillez vérifier et entrer un PIN valide.';
wps_msg4='Démarrage - Veuillez démarrer WPS dans le périphérique client dans les 2 minutes.';
wps_msg5='En cours - Veuillez patienter...';
wps_msg6='Erreur détectée - Veuillez réessayer.';
wps_msg7='Réussite - Le périphérique est connecté au routeur.';
wps_msg8='Dépassement de session détecté … Merci de patienter 60 secondes avant de redémarrer le processus ou de consulter votre client utilitaire pour vous connecter manuellement à ce réseau.';
wps_msg9="Délai d'attente dépassé - Aucun client ne s'est connecté au routeur";
wps_msg10='PIN du routeur désactivé en raison d\'un trop grand nombre d\'échecs de connexion';

wwmm1='QoS Configuration';
wwmm2='Configuration du QoS (Quality of Service)';
wwmm3="Le QoS s'assure que les données prioritaires sur votre réseau, telles que le contenu multimédia et la Voix sur IP (VoIP), ne soient pas « contaminées » par les données transmises sur votre réseau. Basé sur la norme 802.11e, vous pouvez activer/désactiver cette fonction ou vous pouvez choisir le mode d'accusé de réception de votre choix. Si vous comptez utiliser le transfert multimédia en temps réel ou la Voix sur IP sur votre réseau, il est recommandé d'activer la fonction QoS.";
wwmm4='802.11e/WMM QoS';
wle8='(paires de 13 chiffres hexadécimaux)  ';
wle9='NOTE : ';
wle10='Pour générer automatiquement des paires hexadécimales à l\'aide d\'une expression mot de passe, cochez la case de gauche et saisissez ici votre expression mot de passe';
PP='Expression mot de passe ';
generate='générer';
errm='Veuillez entrer une expression mot de passe';
keym='La clé n\'est pas complète';
wle11='Clé 1  ';
wle12='Clé 2 ';
wle13='Clé 3 ';
wle14='Clé 4   ';
wle15='(paires de 13 chiffres hexadécimaux) ';
keym1=' est incomplète.';
keym2=' est invalide, veuillez d\'abord corriger !';
wwp2='Clé Pré-Partagée (Pre-Shared Key - PSK)';
wwp3='WPA-PSK (sans serveur)';
wwp4="Wireless Protected Access avec clé pré-partagée (pre-shared key)&nbsp;: La clé est un mot de passe, sous la forme d'un mot, d'une phrase ou d'une chaîne de lettres et de chiffres. La clé doit être composée de <b>8</b> à <b>63</b> caractères, et peut inclure des espaces et des symboles, ou une clé hex 64 bits (0-F) seulement. Chaque client se connectant à un réseau doit utiliser la même clé (clé pré-partagée)";
wwp5='Dissimuler la PSK'; 
wls_sec_msg='Il est recommandé d\'utiliser WPA/WPA2 quand WPS est activé.';
wguest2='Guest Settings';
wguest3='Accès invité';
wpskerr1='La clé pré-partagée doit être composée de 8 à 63 caractères ou 64 hex';
wpskerr2='Zulässig sind Schlüssel, die aus 8 bis 63 Zeichen bestehen (einschließlich Leerzeichen und Sonderzeichen) oder nur 64 Hex(0-F)!';
wpskerr4='You must input the Guest Pre-shared Key (PSK)';
wpskerr7='La Clé Invité doit comporter 8 caractères';
wpskerr8='La Clé Invité ne peut être identique à la Clé réseau';
wlguest1='Le SSID ne peut être identique au SSID Invité';
wlguest2='Le SSID Invité ne peut être identique au SSID';
ww3='Technique de chiffrement';
wlmc1='Sans Fil > Contrôle de l\'Adresse MAC';
wlmc2='Le Contrôle de l\'Adresse MAC permet de dresser une liste de clients à qui vous permettrez ou refuserez l\'accès au réseau sans fil.';
Allow='Autoriser';
Deny='Refuser';
wlmc7='Déterminez si vous voulez permettre ou restreindre l\'accès à la liste d\'adresses MAC en premier lieu !';
wlmc6='Impossible d\'entrer plus de 32 adresses MAC !';
wlmc3='Adresse MAC Invalide ;';
wlmc4='Veuillez d\'abord la corriger !';
wlmc5='L adresse MAC exacte doit être XX:XX:XX:XX:XX:XX, X étant compris entre 0~9 et a-f !';
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
ENTRY_FULL	=' \'Toutes les entrées sont pleines.\nVeuillez effacer certaines entrées et recommencer.';
CLEAR_CONFIRM	=' \'Voulez-vous effacer l\'entrée ';
CLEAR_ALL_CONFIRM =' \'Voulez-vous effacer toutes les entrées ?';
g1="L'Adresse IP représente l'Adresse IP interne du Routeur. Pour accéder à l'interface de configuration avancée, entrez cette adresse IP dans la barre d'adresse de votre navigateur. Cette adresse peut être modifiée au besoin. Pour modifier l'adresse IP, entrez la nouvelle adresse IP et cliquez sur « Enregistrer les modifications ». L'adresse IP choisie doit être une adresse IP non-acheminable. Exemples d'adresse IP non acheminable sont :";
g2='192.168.x.x (où x est un nombre compris entre 0 et 255.)<br>';
g3='10.x.x.x (où x est un nombre compris entre 0 et 255)<br>';
g4='172.y.x.x (où y est un nombre compris entre 16 et 31, et x est un chiffre est compris entre 0 et 255.)<br>';
g5="Il n'est pas nécessaire de modifier le masque de sous-réseau. Il est toutefois possible de le modifier au besoin. N'apportez des changements au masque de sous-réseau que si vous le devez absolument.<br>";
g6="DNS est l'acronyme de Domain Name Server, qui se traduit par Serveur de noms de domaine. Un serveur de noms de domaine est un serveur qui se trouve sur Internet et qui traduit les adresses URL (Universal Resource Links), telles que www.belkin.com, en adresses IP. La plupart des FAI n'exigent pas que vous entriez ces informations lors de la configuration du routeur. La boîte « Obtenir Automatiquement du FAI » ne devrait être cochée que lorsque votre FAI ne vous a pas attribué d'adresse de DNS spécifique. Si vous utilisez une connexion de type IP fixe, il est possible que vous deviez entrer une adresse DNS spécifique et une adresse DNS secondaire pour assurer le bon fonctionnement de votre connexion. Si vous utilisez une connexion de type dynamique ou PPPoE, il est fort probable que vous n'ayez pas à entrer une adresse de votre FAI. Pour entrer les paramètres d'adresse DNS, désélectionnez la case « Automatique du FAI » et entrez les chiffres DNS dans les espaces fournis à cet effet. Cliquez sur « Enregistrer les modifications » pour enregistrer les paramètres. <br>";
g6a="Le service DNS Dynamique vous permet d'attribuer une adresse IP dynamique à un nom d'hôte statique parmi ceux offerts par DynDNS.org, ce qui vous permet d'accéder à vos ordinateurs à partir de maints endroits sur Internet. DynDNS.org offre ce service à la communauté des Internautes, gratuitement, pour jusqu'à cinq noms d'hôte.<br>	Le service DNS Dynamique est idéal pour les sites Web maison, les serveurs de fichiers, ou pour vous faciliter l'accès à votre PC ou aux fichiers stockés sur votre PC lorsque vous êtes au travail. Le service garantit que votre nom d'hôte pointe toujours vers votre adresse IP, peut importe si votre FAI modifie celle-ci. Lorsque votre adresse IP change, vos amis et associés peuvent toujours vous retrouver en visitant votrenom.dyndns.org&nbsp;!<br>	<br>Inscrivez-vous gratuitement et obtenez votre nom d'hôte DNS Dynamique à http://www.dyndns.org.<br>	<br><b>Configuration du client DNS Dynamique du routeur</b><br>	Vous devez vous inscrire au service gratuit de mise à jour de DynDNS.org avant d'utiliser cette fonction. Après vous être inscrit, veuillez suivre les étapes ci-dessous.<br>	1.Entrez votre nom d'utilisateur DynDNS.org dans le champ «&nbsp;User Name [Nom d'utilisateur]&nbsp;» (1).<br>2.Entrez votre mot de passe DynDNS.org dans le champ «&nbsp;Password [Mot de passe]&nbsp;» (2).<br>	3.Entrez votre nom d'utilisateur DynDNS.org dans le champ «&nbsp;User Name [Nom d'utilisateur]&nbsp;» (3).<br>4.Cliquez sur «&nbsp;Update Dynamic DNS [Mise à jour DNS Dynamique]&nbsp;» pour mettre à jour votre adresse IP.<br>Lorsque votre FAI modifie l'adresse IP qui vous est attribuée, le routeur s'occupe de la mise à jour des serveurs DynDNS.org, avec votre nouvelle adresse IP. Vous pouvez également le faire manuellement, en cliquant sur le bouton «&nbsp;Update Dynamic DNS [Mise à jour DNS Dynamique]&nbsp;» (4).";

g6b='Utilisation du serveur DNS dynamique';
	
g7='La fonction de serveur DHCP permet la mise en place d\'un réseau en toute simplicité, en attribuant une adresse IP à chacun des ordinateurs du réseau. Le serveur DHCP peut être désactivé au besoin. Si vous désactivez le serveur DHCP, vous devrez entrer manuellement une adresse IP fixe pour chaque ordinateur du réseau. Le pool d\'adresses IP est la plage d\'adresses IP mises de côté pour attribution dynamique aux ordinateurs de votre réseau. La valeur par défaut est de 2 à 100 (99 ordinateurs). Pour changer ce nombre, entrez de nouvelles adresses IP de début et de fin, puis cliquez sur « Enregistrer les modifications ». <br>';
g7a='Serveur DHCP';
g8="Vous pouvez donner un nom de domaine local (nom de réseau) à votre réseau. Il n'est pas nécessaire de modifier ce paramètre à moins qu'un impératif particulier ne vous y oblige. Vous pouvez donner n'importe quel nom à votre réseau (« MON RÉSEAU », par exemple).  <br>";
g9='IP dynamique';
g10="Une connexion de type dynamique est le type de connexion le plus courant, et se retrouve sur les modems câble. Choisir l'option de connexion dynamique est souvent suffisant pour compléter la connexion à votre FAI. Certains types de connexion dynamique peuvent exiger un Nom d'Hôte. Si votre FAI vous a attribué un Nom d'Hôte vous pouvez entrer celui-ci dans l'espace prévu. Votre Nom d'Hôte est attribué par votre FAI. Certaines connexions dynamiques peuvent exiger le clonage de l'adresse MAC du PC originellement connecté au modem. Pour ce faire, cliquez sur le lien Modifier l'adresse MAC du WAN à l'écran. L'indicateur d'état de l'Internet affichera « Connexion OK » si votre routeur est configuré de façon appropriée. <br>";
g11="La connexion « IP fixe » est moins répandue que les autres types de connexion. Si c'est le cas,   vous devez connaître votre adresse IP, celle de votre masque de sous-réseau ainsi que l'adresse de passerelle  de votre FAI. Vous pouvez obtenir ces informations auprès de votre FAI ou parmi les documents fournis par votre FAI. Entrez les informations, et cliquez sur « Enregistrer les Modifications ». Après avoir enregistré les modifications,  l'indicateur d'état de l'Internet affichera « Connexion OK » si votre routeur est correctement configuré. Si votre FAI vous a attribué plus d'une adresse IP fixe, votre routeur est en mesure de recevoir jusqu'à cinq adresses IP fixes WAN. Sélectionnez « Mon FAI fournit plus d'une adresse IP fixe », et entrez les autres adresses. <br><br>";
g12='La plupart des fournisseurs de services ADSL utilisent la connexion de type PPPoE. Si vous utilisez un modem ADSL pour vous connecter à Internet, votre FAI utilise probablement le protocole PPPoE pour vous connecter au service. Si vous disposez, chez vous ou au bureau, d\'une connexion à Internet qui ne nécessite pas de modem, vous pouvez également utiliser PPPoE. <br><br>Vous possédez une connexion de type PPPoE si :<br>1) Votre FAI vous a attribué un nom d\'utilisateur et un mot de passe, qui sont requis pour vous brancher à Internet.<br>2) Votre FAI vous a fourni des logiciels tels que WinPOET et Enternet300, et vous utilisez ceux-ci pour vous brancher à Internet.<br>3) Vous devez double-cliquer une icône sur votre bureau, autre que celle de votre navigateur, pour vous brancher à Internet.<br><br>Pour configurer le routeur selon le protocole PPPoE, entrez votre nom d\'utilisateur et votre mot de passe dans les champs prévus. Si vous n\'avez pas de nom de service ou si vous l\'ignorez, laissez le champ Nom du service vide. Après avoir entré les informations, cliquez sur « Enregistrer les modifications ». Après avoir enregistré les modifications, l\'indicateur Statut d\'Internet affichera « Connexion OK » si votre routeur est correctement configuré. Pour plus d\'informations sur la configuration de votre Routeur selon le protocole PPPoE, reportez-vous au manuel de l\'utilisateur.<br>';
	
gmpoe1='WAN Type is MultiSession PPPoE. This WAN type supports multiple PPPoE sessions. With properly configuration of each session, this router can transmit the packets through the correct PPPoE connection. Besides, PPPoE Session 1 will be treated as the master session. The packets which are not matched to the other PPPoE Sessions will be directed to the master session. If the WAN type is not correct, change it!';
gmpoe2='To make the router work properly under the multiple PPPoE WAN type, user has to define the trigger rules of each enabled PPPoE session. So that, once the PPPoE connections are successfully established, the packets can be treated well according to the trigger rules to find out the proper session and transmit the packets.There are two kinds of configuration methologies to define a trigger rule for each PPPoE session.By IP : Please specify the IP address, Subnet Mask and PPPoE Session ID that will be triggered.By Domain Name : Please specify the Domain Name and the PPPoE Session ID that will be triggered.Each rule will take effect if the enable check box is checked.';
g13="Certains FAI exigent une connexion suivant le protocole PPTP. Ceci crée une connexion directe avec le système du FAI. Entrez l'information fournie par votre FAI dans le champ prévu à cet effet. Lorsque vous avez terminé, Cliquez sur « Enregistrer les Modifications ». Après avoir enregistré les modifications, l'indicateur Statut d'Internet affichera « Connecté » si votre routeur est correctement configuré. ";

g14a='Telstra BigPond';
g14b='Après avoir enregistré les modifications, l\'indicateur Statut d\'Internet affichera « Connecté » si votre routeur est correctement configuré.  ';

g15='Paramètre MTU';
g16="Le paramètre MTU ne devrait jamais être modifié, à moins que votre FAI ne vous ait fourni un paramètre spécifique. Modifier le paramètre de MTU peut entraîner des problèmes relatifs à votre connexion à Internet, notamment des déconnexions, un accès Internet lent et une défaillance des applications Internet. ";
g17='Déconnecter après X... ';
g18="La fonction de déconnexion permet de déconnecter automatiquement le routeur de votre FAI lorsque celui-ci est inactif pendant une période de temps déterminée. Par exemple, en sélectionnant cette option et en entrant le chiffre 5 dans le champ des minutes, le routeur se déconnectera automatiquement d'Internet après 5 minutes d'inactivité Internet. Cette option devrait être utilisée si votre FAI vous facture à la minute. ";
g19="MAC est l'acronyme de Media Access Control. Tous les composants réseau, notamment les cartes, les adaptateurs et les routeurs ont un « numéro de série » unique appelé adresse MAC. Il est possible que votre FAI enregistre l'adresse MAC de l'adaptateur de votre ordinateur et n'autorise que cet ordinateur à se brancher à Internet. Lorsque vous installez le routeur, son adresse MAC sera lue par votre FAI et ceci peut empêcher le bon fonctionnement de votre connexion. Belkin vous permet de cloner (copier) l'adresse MAC de l'ordinateur dans le routeur. Cette adresse MAC à son tour, sera vue par le système du FAI comme l'adresse MAC d'origine et autorisera la connexion. Si vous ne savez pas si votre FAI a besoin de voir l'adresse MAC d'origine, clonez simplement l'adresse MAC de l'ordinateur qui était relié au modem au départ. Le clonage de l'adresse n'entraînera aucun problème à votre réseau. Pour cloner l'adresse MAC, assurez-vous d'utiliser l'ordinateur qui était CONNECTÉ À L'ORIGINE u modem avant que le routeur ne soit installé. Cliquez sur le bouton « Cloner l'adresse MAC ». Cliquez sur « Enregistrer les Modifications ». Votre adresse MAC est maintenant clonée dans le routeur. ";
g20='Pour modifier le canal d\'opération du routeur, sélectionnez le canal désiré à partir de la liste déroulante et sélectionnez votre canal. Cliquez sur « Enregistrer les modifications » pour enregistrer les paramètres. Vous pouvez également modifier le SSID. Le SSID est l\'équivalent du nom du réseau sans fil. Vous pouvez lui donner n\'importe quel nom. S\'il existe d\'autres réseaux sans fil dans votre environnement immédiat, vous devez donner un nom unique au vôtre. La valeur par défaut est belkin.xxx. Pour le modifier, cliquez à l\'intérieur de la case SSID et entrez le nouveau nom. Cliquez sur « Enregistrer les modifications ».';
				
g21="Il est possible de rendre presque invisible votre réseau sans fil. En désactivant l'émission du SSID, votre réseau n'apparaîtra pas lors de l'analyse du site. L'analyse de site est une fonction que possèdent la majorité des adaptateurs réseau sans fil disponibles sur le marché. Elle balaye « l'air ambiant » à la recherche de réseaux et permet à l'ordinateur de choisir parmi eux. Le fait de désactiver la fonction d'émission du SSID renforce la sécurité du réseau. ";
g25="Serveurs Virtuels ";
g26="Cette fonction vous permet de relayer les appels de service externes (Interner) tel un serveur Web (port 80), un serveur FTP (port 21) ou d'autres applications, via le routeur et vers votre réseau interne. Étant donné que vos ordinateurs internes sont protégés par le pare-feu, les machines provenant d'Internet ne peuvent pas accéder à ceux-ci puisqu'ils sont « invisibles ». Si vous devez configurer la fonction de Serveur virtuel pour une application particulière, une liste d'applications courantes vous est fournie. Si votre application ne s'y trouve pas, vous devez communiquer avec le fabricant de l'application et déterminer quels paramètres de ports sont requis. Pour effectuer une sélection dans la liste fournie, choisissez votre application à partir de la liste déroulante. Sélectionnez la ligne dont vous voulez copier les paramètres dans la liste déroulante « vers la ligne », puis cliquez « Entrée ». Les paramètres seront transférés vers la ligne spécifiée. Cliquez sur « Enregistrer les modifications » pour enregistrer les paramètres de cette application. Pour entrer les paramètres manuellement, entrez l'adresse IP dans l'espace prévu pour la machine (serveur) interne, les ports publics et LAN nécessaires pour la passerelle (séparer à l'aide d'une virgule), sélectionnez le type de port (TCP ou UDP) puis cliquez sur « Enregistrer les modifications ». Vous pouvez uniquement faire passer un seul port par adresse IP interne. L'ouverture des ports de votre pare-feu risque de compromettre la sécurité de votre réseau. Vous pouvez rapidement activer ou désactiver cette fonction. Il est recommandé de désactiver cette fonction lorsque vous n'utilisez pas d'application spécifique. ";
g27='Filtres d\'IP des clients';
g28="Le Routeur peut être configuré de sorte à limiter l'accès de certains ordinateurs à Internet, au courrier électronique et autres fonctions réseaux, à des jours et des heures donnés. La restriction peut s'appliquer à un seul ordinateur, à un groupe d'ordinateurs ou à plusieurs ordinateurs. Par exemple, pour limiter l'accès à Internet à un ordinateur particulier, entrez l'adresse IP de l'ordinateur dont vous désirez contrôler l'accès dans les champs IP. Ensuite, entrez 80 et 80 dans les champs de ports. Sélectionnez TCP. Sélectionnez Bloquer. Vous pouvez aussi sélectionner Toujours pour bloquer l'accès en tout temps. Sélectionnez le jour du début en haut, l'heure du début en haut, le jour de fin en bas et l'heure de fin en bas. Cliquez sur « Enregistrer les Modifications ». L'ordinateur à l'adresse IP que vous avez spécifiée ne pourra dorénavant plus accéder à l'Internet aux heures spécifiées. Remarque : Assurez-vous d'avoir sélectionné le fuseau horaire approprié sous Utilitaires > Paramètres du Système > Fuseau Horaire. ";
g28_1='Le routeur peut être configuré de sorte à limiter/autoriser l\'accès à Internet, au courrier électronique et autres fonctions de réseau, à des jours et des heures donnés. La restriction peut s\'appliquer à un seul ordinateur, à un groupe d\'ordinateurs ou à plusieurs ordinateurs. Appuyez sur le bouton "Ajouter" pour utiliser cette fonction.';	
		
g29='Pare-Feu > Filtrage des adresses MAC';
g30="Le filtrage d'adresses MAC est une fonction de sécurité puissante qui vous permet de spécifier les ordinateurs autorisés à se connecter au réseau. Tout ordinateur non spécifié dans les paramètres du filtre et qui tente d'accéder au réseau se verra refuser l'accès. Lorsque vous activez cette fonction, vous devez entrer l'adresse MAC de chaque client de votre réseau, pour permettre à chacun d'accéder au réseau. Pour activer cette fonction, sélectionnez Activer le Filtrage d'Adresse MAC. Ensuite, entrez l'adresse MAC de chaque ordinateur du réseau en cliquant sur « Ajouter ». Cliquez sur « Enregistrer les modifications » pour enregistrer les paramètres. Pour supprimer une adresse MAC de la liste, cliquez simplement sur « Supprimer » près de l'adresse MAC à supprimer. Cliquez sur « Enregistrer les modifications » pour enregistrer les paramètres. Remarque : vous ne pouvez pas supprimer l'adresse MAC de l'ordinateur à partir duquel vous accédez aux fonctions administratives du Routeur. (celui que vous utilisez en ce moment). ";
g31='La fonctionnalité DMZ vous permet d\'indiquer un ordinateur du réseau qui sera placé hors du pare-feu NAT. Cette opération peut s\'avérer nécessaire si la traduction d\'adresse réseau (NAT) empêche le bon fonctionnement d\'applications telles que les jeux ou les vidéoconférences. Servez-vous de cette fonction au besoin. <font  class="redBold">\'L\'ordinateur placé dans la zone DMZ ne sera pas protégé contre les attaques provenant de hackers.</font> Pour placer un ordinateur dans la DMZ, entrez les derniers chiffres de son adresse IP dans le champ « IP », puis cliquez sur « Activer ». Cliquez sur « Enregistrer les modifications » pour que le changement soit pris en compte. Si vous utilisez plusieurs adresses IP WAN fixes, il est possible de choisir celle vers laquelle l\'hôte DMZ sera dirigé. Entrez l\'adresse IP WAN vers laquelle vous désirez diriger l\'hôte DMZ, entrez les deux derniers chiffres de l\'adresse IP de \'l\'ordinateur hôte de la zone DMZ, sélectionnez « Activez » puis cliquez sur « Enregistrer les modifications ».';
	
g32='Blocage du Ping ICMP';
g33="Les pirates informatiques utilisent une technique appelée Pinging pour dénicher sur Internet Internet. En émettant un ping sur une certaine adresse IP et en recevant une réponse de celle-ci, un pirate peut savoir qu'il a un poste à pirater. L' pouvez configurer le routeur de sorte qu'il ignore un ping ICMP venant de l'extérieur. Ceci rehausse le niveau de sécurité de votre routeur. Pour désactiver la réponse au ping, sélectionnez « Blocage du ping ICMP » et cliquez sur « Enregistrer les modifications ». Le routeur ignorera un ping ICMP. ";
g34='Mot de passe Administrateur';
g35="Le routeur est livré SANS mot de passe défini. Si par souci de sécurité vous désirer ajouter un mot de passe, vous pouvez le configurer ici. Conservez votre mot de passe dans un endroit sûr puisque vous en aurez besoin lorsque vous voudrez vous connecter au routeur par la suite. Nous recommandons aussi l'ajout d'un mot de passe si vous prévoyez utiliser la fonction de gestion à distance du routeur. <br><br>L'option de temporisation de la connexion vous permet de déterminer la plage horaire pendant laquelle vous pouvez être connecté au niveau de l'interface de configuration avancée du routeur. La temporisation débute lorsqu'il n'y a plus d'activité. Par exemple, vous avez apporté des modifications au niveau de l'interface de configuration évoluée, puis vous avez quitté l'ordinateur sans cliquer sur « Déconnexion ». En supposant que vous ayez paramétré la temporisation à 10 minutes, votre connexion prendra fin 10 minutes après votre départ. Vous devrez de nouveau vous connecter au routeur pour procéder à d'autres modifications. L'option de temporisation de la connexion sert à des fins de sécurité. La valeur par défaut est 10 minutes. Prenez note qu'un seul ordinateur à la fois peut être connecté à l'interface de configuration avancée du routeur. ";
g36='Définition d\'un fuseau horaire';
g37="Le routeur harmonise le temps en se connectant à un serveur SNTP (Simple Network Time Protocol). Ceci lui permet de synchroniser l'horloge du système avec l'Internet planétaire. L'horloge ainsi synchronisée est utilisée par le routeur pour garder un journal de connexions et pour contrôler le filtrage des clients. Sélectionnez le fuseau horaire du pays dans lequel vous résidez. Si vous résidez dans une région qui applique l'horaire d'été, cochez la case en regard de l'option « Appliquer les horaires d'été ». L'horloge du système peut ne pas être mise à jour immédiatement. Laissez au moins 15 minutes au routeur pour contacter les serveurs sur Internet et recevoir une réponse. Vous ne pouvez pas modifier l'horloge vous-même.  ";
g38='Gestion à distance';
g39="Avant d'activer cette fonction, ASSUREZ-VOUS D'AVOIR AJOUTÉ UN MOT DE PASSE ADMINISTRATEUR. La gestion à distance vous permet d'apporter des changements aux paramètres du routeur où que vous soyez sur Internet. Il existe deux méthodes pour gérer votre routeur à distance. La première méthode consiste à permettre l'accès au routeur à partir de l'Internet en sélectionnant « N'importe quelle adresse IP peut gérer le routeur à distance ». Lorsque vous aurez entré votre adresse IP WAN depuis un ordinateur sur Internet, un écran de connexion apparaîtra. Vous devrez y entrer le mot de passe du routeur. La deuxième méthode consiste à permettre à une adresse IP spécifique de gérer le routeur à distance. Cette méthode est la plus sécuritaire, mais la moins pratique. Pour y avoir recours, entrez l'adresse IP autorisée à accéder au routeur dans le champ fourni à cet effet, puis sélectionnez « Seule cette adresse IP est autorisée à gérer le routeur à distance ». Avant d'activer cette fonction, nous vous CONSEILLONS VIVEMENT de définir un mot de passe d'administrateur. Si vous laissez le mot de passe vide, vous autorisez potentiellement des intrusions sur le routeur. ";
g40='Activer la NAT';
g42="L'UPnP (Universal Plug-and-Play) est une technologie qui offre un fonctionnement transparent de la messagerie vocale et vidéo, des jeux, et d'autres applications compatibles avec l'UPnP. Certaines applications nécessitent que le pare-feu du routeur soit configuré selon certains paramètres pour fonctionner correctement. Pour ce faire, vous devez habituellement ouvrir des ports TCP et UDP, et parfois même configurer des ports de déclenchement. Une application qui est compatible avec l'UPnP possède la capacité de communiquer avec le routeur, lui indiquant la manière dont le pare-feu doit être configuré. Le routeur est livré avec la fonction UPnP désactivée. Si vous utilisez une application qui est compatible avec l'UPnP, et si vous désirez bénéficier des avantages de l'UPnP, vous pouvez activer la fonction UPnP. Sélectionnez simplement l'option « Activer » dans la section « Activation de l'UPnP » dans la page Utilitaires. Cliquez sur « Appliquer les modifications » pour enregistrer les modifications. ";
g43='Notification automatique de mise à jour du microprogramme';
g44="Le Routeur possède la capacité intrinsèque de vérifier automatiquement s'il existe une nouvelle version du microprogramme et vous avertit lorsque la nouvelle version est disponible. Lorsque vous vous connectez à l'interface avancée du routeur, le routeur procédera à la recherche d'une nouvelle version du micrologiciel, si celle-ci est disponible. Vous serez averti lorsqu'une une nouvelle version du micrologiciel est disponible. Vous pouvez choisir de télécharger cette nouvelle version ou de l'ignorer. Le routeur est livré avec cette fonction désactivée. Si vous voulez l'activer, sélectionnez « Activer » et cliquez sur « Enregistrer les Modifications ». ";
g45='Sécurité sans fil';

g46="Le chiffrement peut vous aider à sécuriser votre réseau sans fil. On ne peut sélectionner qu'un seul mode de sécurité à la fois. L'utilisateur doit donc sélectionner le mode qui est pris en charge par tous les appareils du réseau sans fil. Ce produit de Belkin présente 4 réglages de sécurité :<br><br>1) Désactivé. Aucun chiffrement n'est activé dans ce mode. Réseau ouvert, où tous les utilisateurs sont les bienvenus et où le chiffrement n'est pas souhaitable.<br><br>2) Le WPA/WP2-Personal (PSK) (Wireless Protected Access) PSK est une technologie de sécurité récente basée sur des normes où chaque paquet de données est chiffré au moyen d'un code ou d'une clé différente. Puisque la clé change constamment, le WPA est très sûr. Le WPA-PSK (avec clé pré-partagée) convient aux utilisateurs à domicile ou petites entreprises qui n'ont pas de serveur. La clé de chiffrement PSK est automatiquement générée à partir d'une chaîne de caractères ou expression mot de passe. Le plus grand risque encouru au niveau de la sécurité pour le WPA-PSK est bien sûr qu'un autre utilisateur découvre l'expression mot de passe.<br><br>a. TKIP ou AES. Pour configurer le WPA, l'utilisateur doit choisir entre le chiffrement TKIP ou l'AES. La norme WPA définit le TKIP comme le chiffrement par défaut. De plus, le TKIP assure une meilleure compatibilité entre les appareils sans fil de différents fabricants puisque la majorité d'entre eux ne seront jamais mis à niveau vers l'AES. L'AES est une nouvelle technique de chiffrement basée sur la norme 802.11i. Il est généralement considéré que les nouvelles normes WPA utilisent l'AES. Bien qu'elle ne soit pas répandue, certains utilisateurs peuvent préférer utiliser cette technique de chiffrement. D'une manière comme de l'autre, tous les appareils réseau doivent utiliser la même technique. <br><br>b. Clé pré-partagée. Entrez un mot ou une expression comportant jusqu'à 64 caractères. La même clé doit aussi être utilisée pour tous les autres périphériques réseau faisant partie de ce réseau. Faites attention à la casse (« n » est différent de « N »). N'oubliez pas que la meilleure façon pour quelqu'un de pénétrer sur votre réseau, c'est de deviner votre clé.<br><br>3) WEP 128 bits. Jusqu'à tout récemment, le WEP (Wired Equivalent Privacy) 128 bits était la norme de chiffrement sans fil. Si vos périphériques ne prennent pas tous en charge le WPA, le WEP 128 bits représente une excellente option de sécurité. Vous devrez entrer des nombres hexadécimaux, mais il est aussi possible de les générer automatiquement.<br><br>4)WEP 64 bits. Belkin ne recommande le mode 64 bits que pour les réseaux où certains périphériques ne prennent en charge ni le WPA ni le WEP 128 bits.";

g47='Some ISPs require a connection using L2TP protocol. This sets up a direct connection to the ISP\'s system. Type in the information provided by your ISP in the space provided. When you have finished, click "Apply Changes". After you apply the changes, the Internet Status indicator will read "Connected" if your Router is set up properly. ';
g48 = 'Access Control';
g49 = 'The Router can be configured to restrict access to the Internet, email, or other network services at specific days and times. Restriction can be set for a single computer.';
g50='Mode Eco';
g51="Cette fonction vous permet d'éteindre les LED à l'avant du routeur pour économiser l'énergie. Vous pouvez également disablethe radio sans fil à des moments prédéterminés.";
rs_file_error="Le fichier de mise à jour n'est pas du type ou de la version correct pour ce périphérique. Échec de la mise à jour. Veuillez obtenir le fichier correct et réessayezz";
rs_crc='Échec du rétablissement < CRC >';
rs_long='Échec du rétablissement < trop long >';
rs_disposition='Échec du rétablissement < aucune disposition du contenu >';
rs_getpid="Échec du rétablissement < Impossible d'obtenir le PID !>";
rs_unmatchpid='Échec du rétablissement < PID ne correspond pas >';

var msg_ddns1 ='Veuillez entrer votre nom d\'utilisateur!\n';
var msg_ddns2 ="Veuillez entrer le mot de passe !\n";
var msg_ddns3 ="Les champs du nom de domaine  ne peut pas être vide.\n";
var msg_ddns4 ="Mise à jour DNS Dynamique";
var msg_ddns5 ="La longueur du nom de domaine devrait être de moins de  63.";

// fw_dmz.html
var msg_fw_dmz1 = "Please enter the IP address before enabling DMZ.\n";
var msg_lan_dhcp1 ="Requesting information from the Gateway.";
var msg_lan_dhcp2 ="Updating configuration database.";
var msg_lan_sett1 ="Veuillez entrer des adresses IP non-acheminables (10 o 172 ou 192) !\n";
var msg_lan_sett2 ="Veuillez entrer des adresses IP non-acheminables (168) !\n";
var msg_lan_sett3 ="Veuillez entrer des adresses IP non-acheminables (16~31) !\n";
var msg_lan_sett4 ="Veuillez entrer des adresses IP non-acheminables (1~254) !\n";
var msg_lan_sett5 ="Veuillez entrer des adresses IP correctes (0~255) !\n";
msg_wan_stat="L'adresse IP %s n'est pas comprise dans le réseau %s.";
var msg_wan_stat1 ="Adresse IP ";
var msg_wan_stat2 =" is not in ";
var msg_wan_stat3 =" network.";
var msg_wls_chan1 ="Le SSID ne peut être NUL !";
var msg_wls_chan2 ="Le SSID Invité ne peut être vide !\n";
var fw_update ="Mise à jour du micrologiciel en cours ";
var fw_not_interrupt ="N'INTERROMPEZ PAS LE PROCESSUS ET NE DÉBRANCHEZ PAS LE ROUTEUR. Ceci pourrait rendre votre Routeur inutilisable. ";
var show35a ="Rétablir les paramètres par défaut";
var msg_invalid_char ='Caractère(s) non valide(s). Caractères valides : 0-9,a-z, A-Z, `~!@#$%^&*()_-+=|\\{}[]:";\',.<>/?';
var vs_null ="La description est vide.";
var msg_invalid_vs_char ='Caractère(s) non valide(s) trouvé(s). Les caractères valides sont : 0-9, a-z, A-Z, `~!@#$%^&*()_-+=|{}[]:;\',.<>/?';
var msg_invalid_ssid_char='Caractère(s) non valide(s) trouvé(s). Les caractères valides sont : 0-9, a-z, A-Z, _+';
var msg_invalid_domain_char='Nom du domaine local non valide'+': ~!@#$%^&*()=+{}[]|":;\\\'?/<>,`';
var msg_invalid_char_1 ='Invalid Character(s) found. Valid characters are letters and numbers .The following symbols is invalid: `~!@#$%^&*()_+[]{}\\|;:\'"<>/?.,';
var msg_hostIP_invalid ="L'adresse IP de l'hôte est incorrecte. Elle doit être différente de l'adresse IP LAN du routeur.\n";
var msg_dmzIP_blank='Veuillez entrer l\'adresse IP avant d\'activer la DMZ.';
ipm='Il est possible que vous n\'ayez pas entré tous les numéros DNS ou certains de ces numéros ne sont pas valides. Ils doivent être compris entre 0 et 255.';
ipmLast='Il est possible que vous n\'ayez pas entré tous les numéros DNS ou certains de ces numéros ne sont pas valides. Ils doivent être compris entre 1 et 254.';
var msg_blank ="ne peut pas être vide.\n";
var msg_space ="Blanks or spaces are not allowed in %s\n";
var msg_blank_in ="Blanks are not allowed in %s\n";
var msg_allspaces ="%s cannot consist solely of spaces\n";
var msg_invalid ="Invalid character or characters in %s\nValid characters are: \n%s\n\n";
var msg_check_invalid ="%s contains an invalid number\n";
var msg_valid_range ="%s is invalid. Valid range is %s to %s\n";
var msg_invalid_mac ="Adresse MAC Invalide.\n";
var msg_multi_mac="The MAC address can't be multicast address.\n";
var msg_vs_des="Invalid character : or - is not allowed in description.";
var msg_privateIP_invalid ="L\'adresse IP LAN est incorrecte !\n";
var msg_dmzIP='Adresse IP DMZ';
var msg_confirmDefault ="Warning!\nLoading the Factory Default Settings will erase all the current settings.\nAre you sure you wish to do this?";


var con_noinfo='Sélectionnez le type de connexion de votre FAI.\nVotre FAI vous a fourni ces renseignements lors de votre inscription.';
var con_miss='Le champ ci-dessous contient des données non valides ou incorrectes.';
var con_nosure='Si vous ne connaissez pas votre type de connexion, communiquez avec votre FAI\nAssurez-vous d\'obtenir toutes les informations requises pour les pages suivantes.';

var wiz_noinfo='Entrez les informations suivantes, qui sont nécessaires au type de connexion choisi au dernier écran.  Votre FAI vous a fourni ces informations.';
var wiz_miss='Certains champs ci-dessous contiennent des données non valides ou incorrectes (par ex. identifiants erronés ou caractères non valides).  Veuillez saisir toute information manquante.  Votre FAI vous a fourni ces informations.';
var wiz_nosure='Si vous ne connaissez pas les paramètres ci-dessous, communiquez avec votre FAI.';
var network_key1='Vous devez saisir la clé réseau!';
var network_key2='Zulässig sind Schlüssel, die aus 8 bis 63 Zeichen bestehen (einschließlich Leerzeichen und Sonderzeichen) oder nur 64 Hex(0-F)!';
var wiz_cd1='Veuillez insérer le CD de dépannage dans l\'ordinateur et quitter cet assistant.';
var wiz_cd2='Pas d\'inquiétude, un paramètre spécifique à l\'Australie et la Nouvelle-Zélande doit être réglé sur votre ordinateur.  L\'assistant d\'installation sur CD dispose d\'un programme spécial à cet effet. Après avoir inséré le disque, l\'assistant du CD doit apparaître dans les 15 secondes.';
var wiz_cd3='Après avoir quitté cet assistant et inséré le disque, l\'assistant du CD de dépannage devrait apparaître à l\'écran dans les 15 secondes qui suivent.';
var wiz_cd4='Vous devez fermer cet assistant par navigateur en cliquant sur le bouton Quitter ci-dessous <br>pour utiliser le CD de dépannage.';
var wiz_chk_conn1='Vérification de la connexion Internet...';
var wiz_chk_conn2='Veuillez patienter pendant que le routeur vérifie les paramètres Internet.';
var wiz_chk_isp='Votre FAI a refusé les paramètres ci-dessous lors de la tentative de connexion.  Veuillez en vérifier l\'exactitude.';
var wiz_chk_poeisp='Votre FAI a refusé les paramètres ci-dessous lors de la tentative de connexion. Veuillez<br>en vérifier l\'exactitude. Si vous n\'êtes pas certain de l\'exactitude des paramètres, communiquez avec votre FAI.';
btn5='Previous';
btn6='Routing Table';
Multi_PPPoE='Multi-PPP over Ethernet';
wcc15='Multi-PPPoE';
wcc16='[Japan Only] This type of connection is a unique function in Japan which is required for those who subscribe NTT\'s broadband Internet.';


Australia_wz='Australie';
Austria_wz='Autriche';
Belgium_wz='Belgique';
China_wz='Chine';
Czech_wz='République Tchèque';
Denmark_wz='Danemark';
France_wz='France';
Germany_wz='Allemagne';
Hong_Kong_wz='Hong Kong';
Hungary_wz='Hongrie';
India_wz='Inde';
Indonesia_wz='Indonésie';
Israel_wz='Israël';
Italy_wz='Italie';
Japan_wz='Japon';
Korea_wz='Corée';
Malaysia_wz='Malaisie';
Netherlands_wz='Pays-Bas';
New_Zealand_wz='Nouvelle-Zélande';
Norway_wz='Norvège';
Philippines_wz='Philippines';
Portugal_wz='Portugal';
Singapore_wz='Singapour';
Spain_wz='Espagne';
Sweden_wz='Suède';
Switzerland_wz='Suisse';
Taiwan_wz='Taïwan';
Thailand_wz='Thaïlande';
UK_wz='Royaume-Uni';
USA_wz='États-Unis';
Other_wz='Autre';

g10_brief="Une connexion de type dynamique est le type de connexion le plus courant, et se retrouve sur les modems câble. Choisir l'option de connexion dynamique est souvent suffisant pour compléter la connexion à votre FAI. Certains types de connexion dynamique peuvent exiger un Nom d'Hôte. Si votre FAI vous a attribué un Nom d'Hôte vous pouvez entrer celui-ci dans l'espace prévu. Votre Nom d'Hôte est attribué par votre FAI.";
Finland_wz="Finland";
Poland_wz='Pologne';

var msg_invalid_IP = 'Une (ou plusieurs) adresse IP entrée est incorrecte !';
var modem_miss = wiz_miss;
var modem_nosure = wiz_nosure;
var modem_noinfo = 'Veuillez entrer les informations suivantes. Votre FAI vous a fourni ces informations.';
var run_detect1 = 'Détection des paramètres VPI/VCI en cours, veuillez patienter......';
var run_detect2 = 'Détection du type de connexion WAN en cours, veuillez patienter......';

run19='Encapsulé :';
run46=wiz_chk_isp;
run48='Paramètres du modem';
run52='Encapsulé :';

info_pppoe = "La plupart des fournisseurs de services ADSL utilisent la connexion de type PPPoE. Si vous utilisez un modem ADSL pour vous connecter à    Internet, votre FAI utilise probablement le protocole PPPoE pour vous connecter au service. Si vous disposez,   chez vous ou au bureau, d'une connexion à Internet qui ne nécessite pas de modem, vous pouvez également utiliser PPPoE. <br><br> Vous possédez une connexion de type PPPoE si&nbsp;:<br>  1) Votre FAI vous a attribué un nom d'utilisateur et un mot de passe, qui sont requis pour vous brancher à Internet.<br> 2) Votre FAI vous a fourni des logiciels tels que WinPOET et Enternet300, et vous utilisez ceux-ci pour vous brancher à Internet.<br>  3) Vous devez double-cliquer une icône sur votre bureau, autre que celle de votre navigateur, pour vous brancher à Internet.<br><br> Pour configurer le routeur selon le protocole PPPoE, entrez votre nom d'utilisateur et votre mot de passe dans les champs prévus. Si vous n'avez pas de nom de service ou si vous l'ignorez, laissez le champ Nom du service vide.  Après avoir entré les informations, cliquez sur «&nbsp;Enregistrer les modifications&nbsp;». Après avoir enregistré les modifications,  l'indicateur Statut d'Internet affichera «&nbsp;Connexion OK&nbsp;» si votre routeur est correctement configuré.  Pour plus d'informations sur la configuration de votre Routeur selon le protocole PPPoE, reportez-vous au manuel de l'utilisateur.";
info_pppoa = "La plupart des fournisseurs de services ADSL utilisent la connexion de type PPPoA. Si vous utilisez un modem ADSL pour vous connecter à  'Internet, votre FAI utilise probablement le protocole PPPoA pour vous connecter au service. Si vous disposez,  chez vous ou dans votre bureau, d'une connexion à Internet qui ne nécessite pas de modem, vous pouvez également utiliser PPPoA.<br><br> Vous possédez une connexion de type PPPoA si:<br> 1) Votre FAI vous a attribué un nom d'utilisateur et un mot de passe, qui sont requis pour vous brancher à Internet.<br> 2) Votre FAI vous a fourni des logiciels et vous utilisez ceux-ci pour vous brancher à Internet.<br> 3) Vous devez double-cliquer une icône sur votre bureau, autre que celle de votre navigateur, pour vous brancher à Internet.<br><br> Pour configurer le routeur selon le protocole PPPoA, entrez votre nom d'utilisateur et votre mot de passe dans les champs prévus. Si vous n'avez pas de nom de service ou si vous l'ignorez, laissez le champ Nom du service vide. Après avoir entré les informations, cliquez sur « Enregistrer les modifications ». Après avoir enregistré les modifications, l'indicateur Statut d'Internet affichera « Connexion OK » si votre routeur est correctement configuré. Pour plus d'informations sur la configuration de votre Routeur selon le protocole PPPoA, reportez-vous au manuel de l'utilisateur.<br>";
info_ipoa = g11;
info_dial_up = 'Vous devez utiliser un modem branché à un port série de votre Routeur. Votre numéro de téléphone de connexion, nom d\'utilisateur et mot de passe, etc. vous sont fournis par votre FAI. Si une chaîne d\'initialisation spécifique est nécessaire pour le bon fonctionnement de votre modem, vous pouvez obtenir cette information auprès de son fabricant. Si votre FAI vous a attribué une adresse IP spécifique, vous devez entrer cette adresse dans les champs prévus à cet effet, au bas de l\'écran.';

topic_dial_up = 'Connexion Externe par numérotation';
 
h9_1='DSL est l\'acronyme de Digital Subscriber Line. Un modem DSL utilise vos lignes téléphoniques existantes pour transmettre des données à haut débit.';
h9_2= 'Modem DSL';
info_dsl_modem = h9_1;
topic_dsl_modem = h9_2;

help_pppoa = "<b>PPPoA</b> La plupart des fournisseurs de services ADSL utilisent la connexion de type PPPoA. Si vous utilisez un modem ADSL pour vous connecter à  'Internet, votre FAI utilise probablement le protocole PPPoA pour vous connecter au service. Si vous disposez,  chez vous ou dans votre bureau, d'une connexion à Internet qui ne nécessite pas de modem, vous pouvez également utiliser PPPoA.Vous possédez une connexion de type PPPoA si: 1) Votre FAI vous a attribué un nom d'utilisateur et un mot de passe, qui sont requis pour vous brancher à Internet. 2) Votre FAI vous a fourni des logiciels et vous utilisez ceux-ci pour vous brancher à Internet. 3) Vous devez double-cliquer une icône sur votre bureau, autre que celle de votre navigateur, pour vous brancher à Internet. Pour configurer le routeur selon le protocole PPPoA, entrez votre nom d'utilisateur et votre mot de passe dans les champs prévus. Si vous n'avez pas de nom de service ou si vous l'ignorez, laissez le champ Nom du service vide. Après avoir entré les informations, cliquez sur « Enregistrer les modifications ». Après avoir enregistré les modifications, l'indicateur Statut d'Internet affichera « Connexion OK » si votre routeur est correctement configuré. Pour plus d'informations sur la configuration de votre Routeur selon le protocole PPPoA, reportez-vous au manuel de l'utilisateur.";
help_pppoe = "<b>PPPoE</b> La plupart des fournisseurs de services ADSL utilisent la connexion de type PPPoE. Si vous utilisez un modem ADSL pour vous connecter à    Internet, votre FAI utilise probablement le protocole PPPoE pour vous connecter au service. Si vous disposez,   chez vous ou au bureau, d'une connexion à Internet qui ne nécessite pas de modem, vous pouvez également utiliser PPPoE.  Vous possédez une connexion de type PPPoE si&nbsp;:  1) Votre FAI vous a attribué un nom d'utilisateur et un mot de passe, qui sont requis pour vous brancher à Internet. 2) Votre FAI vous a fourni des logiciels tels que WinPOET et Enternet300, et vous utilisez ceux-ci pour vous brancher à Internet.  3) Vous devez double-cliquer une icône sur votre bureau, autre que celle de votre navigateur, pour vous brancher à Internet. Pour configurer le routeur selon le protocole PPPoE, entrez votre nom d'utilisateur et votre mot de passe dans les champs prévus. Si vous n'avez pas de nom de service ou si vous l'ignorez, laissez le champ Nom du service vide.  Après avoir entré les informations, cliquez sur «&nbsp;Enregistrer les modifications&nbsp;». Après avoir enregistré les modifications,  l'indicateur Statut d'Internet affichera «&nbsp;Connexion OK&nbsp;» si votre routeur est correctement configuré.  Pour plus d'informations sur la configuration de votre Routeur selon le protocole PPPoE, reportez-vous au manuel de l'utilisateur.";
help_ipoa = "<b>IPoA</b>" + g11;
help_dial_up = '<b>Connexion Externe par numérotation</b> Vous devez utiliser un modem branché à un port série de votre Routeur. Votre numéro de téléphone de connexion, nom d\'utilisateur et mot de passe, etc. vous sont fournis par votre FAI. Si une chaîne d\'initialisation spécifique est nécessaire pour le bon fonctionnement de votre modem, vous pouvez obtenir cette information auprès de son fabricant. Si votre FAI vous a attribué une adresse IP spécifique, vous devez entrer cette adresse dans les champs prévus à cet effet, au bas de l\'écran.';

wb1='WAN > Type de connexion > IP dynamique/fixe (1483 Bridged)';
wb101='WAN > Type de connexion > IP fixe (IPoA)';
wb102='WAN > Type de connexion > Modem uniquement (désactiver le partage Internet)';
wb3='IP attribuée par le FAI';
wb7='VPI / VCI';
wb9='Détection auto';
wb11='Non';
wb12='LLC';
wb13='VC MUX';
wpevpi1='Veuillez entrer le VPI';
var msg_vpi='Le VPI doit être un nombre compris entre 0 et 255!';
wpevci1='Veuillez entrer le VCI';
var msg_vci='Le VCI doit être un nombre compris entre 1 et 65535.';
wc7='IP dynamique/fixe (1483 Bridged)';
wc9='IP fixe (IPoA)';
wc11='Modem uniquement (désactiver le partage Internet)';
wppoa1='WAN > Type de Connexion > PPPoA';
wppoa2='Pour entrez vos paramètres PPPoA, entrez les informations ci-dessous et cliquez sur «&nbsp;Enregistrer les Modifications&nbsp;».';
wpmodem1='Pour entrez vos paramètres modem, entrez les informations ci-dessous et cliquez sur «&nbsp;Enregistrer les Modifications&nbsp;».';
IPoA='IPoA';
PPPoA='PPPoA';
Modem='Modem seulement';
adsl_status='ADSL';
downstream = 'Voie descendante';
upstream = 'Voie ascendante';
datarate = 'Débit de données(Kbps)';

var change_lan_for_ip_conflict="Router WAN port gets an IP address who is in Router's LAN subnet, WAN port is disabled to insure LAN ports can work. As a result, you can not visit the internet now. Please change your WAN connection settings or LAN settings to solve this.";

var wizard_name = "Utilitaire de configuration du routeur";
stroute_1 = 'LAN > Static Routing';
showstroute='Static Routing';
stroute3 = 'The routing table is full!';
stroute32 = ' Network Address';
stroute33 = ' '+i11;
stroute34 = ' Gateway';
Remove='Remove';



acl_1 = "Contrôle parental > Contrôle de l'accès";
help_acl='After enabling Access Control, pressing the "Add" button will open up the "Connected Client List" Screen. This screen lists all the clients list with MAC addresses learned from the router. In the "Connected Client List" screen you can also create a Client you want to control by filling in the blanket MAC address column. You choose one of the clients from the "Connected Client List" by pressing the "Add" button. You will return to Access Control Screen. You can press the "Edit" button under the "Member" column to setup the Acceess Control Rule for each client. '
acl_setting='Internet Access <br> Policy';
acl_2 = 'The Acl table is full';
acl_3 = 'After enabling Access Control, pressing the <b>"Add"</b> button will open up the <b>"Connected Client List"</b> Screen.  This screen lists all the clients list with MAC addresses learned from the router. In the <B>"Connected Client List" </B> screen you can also create a Client you want to control by filling in the blanket MAC address column. You choose one of the clients from the "Connected Client List" by pressing the <b>"Add"</b> button.  You will return to Access Control Screen. You can press the <b>"Edit"</b> button under the <b>"Member"</b> column to setup the Acceess Control Rule for each client.';
acl_4='Appuyez sur le bouton "Ajouter" pour ouvrir l\'écran "Liste des clients connectés" qui contient l\'ensemble des clients qui possèdent des adresses MAC obtenues à partir du routeur. Dans l\'écran "Liste des clients connectés", l\'utilisateur peut également créer un client à contrôler en renseignant la colonne de l\'adresse MAC. Après avoir choisi un client dans la Liste des clients connectés en appuyant sur le bouton "Ajouter" sous la colonne action, vous revenez dans l\'écran du contrôle d\'accès. Saisissez-y les données des règles de contrôle pour le client souhaité.';
acl1='Membre';
acl2='Périphérique';
acl3='Adresse MAC';
acl4='État';
acl5='Restriction';
acl6='Action';
acl7=' ';
acl8='Tous les périphériques de SSID Invité';
acl9='Exception des règles de contrôle pour membre';
acl10='Planification';
acl11="Liste d'URL";
acl12="Liste de mots-clés d'URL";
acl13='Jours ';
acl14='Tous les jours';
acl15='Ma';
acl16='Me';
acl17='M';
acl18='V';
acl19='24 heures';
acl20='De';
acl21='À';
acl22='Souhaitez-vous supprimer un membre';
acl23='Already existed.';
acl24='Existaient déjà dans la liste de membres';
acl25='Existaient déjà dans la liste des clients';
acl26='Les numéros de ports que vous avez entrés sont invalides.';
acl27='Mot de passe';
acl28="Page d'accueil";
acl29='Accès refusé. Entrez le mot de passe du routeur pour accorder un accès temporaire aux pages et services bloqués.';
member_setting='Liste des membres';
acl_member_setting='Exception of Control Rules for Member';
Allow_All='Allow All';
Deny_All='Deny All';
acl30="Le routeur peut être configuré de sorte à limiter/autoriser l'accès à Internet, au courrier électronique et autres fonctions de réseau, à des jours et des heures donnés. La restriction peut s'appliquer à un seul ordinateur, à un groupe d'ordinateurs ou à plusieurs ordinateurs.";

Index='Index';
Services='Service';
Port_Rang_List='Plage de ports';
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
PortService_User_Defined="Défini par l'utilisateur";
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
Block_All_Services='Bloquer tous les services';
Allowed_Services='Allowed Services';
Allow_All_Services='Allow All Services';
Blocking_Url='Website Blocking by URL Address ';
Allowing_Url='Website Allowing by URL Address ';
Block_All_URLs='Bloquer toutes les adresses URL';
Allow_All_URLs='Autoriser toutes les adresses URL';
URL_Address='Adresse URL';

Keyword='Mot-clé';
Blocking_Keyword='Website Blocking by keyword';
Allowing_Keyword='Website Allowing by keyword';



Connected_Client_List='Liste des clients connectés';
var save_reboot_time=30;
var restore_reboot_time=30;
var upgrade_reboot_time=70;
var normal_reboot_time=60;

rdt_msg1='Cette fonctionnalité n\'est pas en fonction. ';
rdt_msg2='Redirection vers la page d\'accueil...';
var disconnect_msg = 'Oops! Your connection to the router has failed.  Please reconnect to the router, click OK and retry.';
show49='Accès invité';
wguest1='Sans fil > Accès invité';
wguest4="L'Accès invité permet d'accéder à Internet par le biais du port WAN, mais empêche les invités d'accéder au réseau interne, au réseau local et au réseau local sans fil. La fonction est prise en charge sur les radios de 2,4 GHz seulement pour faciliter l'utilisation.";
wguest5='Type';
wguest6='Cybercafé (les invités se connectent via un page Web)';
wguest7='WPA/WPA2 PSK';
wguest8='WEP';
wguest9='Ouvrir';
wguest10='Nom du réseau (SSID)';
wguest11='32 caractères maximum, sans espace';
wguest12='Mot de passe (PSK)';
wguest13='8 À 63 caractères';
wguest14='Imprimer les paramètres d\'accès invité';
wguest15='10 nombres hexadécimaux';
wlguest3='La longueur du mot de passe est incorrecte. Le mot de passe doit contenir entre 8 et 63 caractères.';
wlguest4='La clé WEP doit comporter 10 nombres hexadécimaux !';
wlguest5='Chaque invité se connectant à votre réseau sans fil a besoin de ce mot de passe.';
wlguest6='Type de sécurité';
wlguest7='Pour se connecter au réseau sans fil :';
wlguest8='Windows';
wlguest9="Cliquez avec le bouton droit de votre souris sur l'icône sans fil de la barre de tâches Windows et sélectionnez Afficher les réseaux sans fil disponibles au menu contextuel.";
wlguest10='Cliquez deux fois sur le';
wlguest11='Une fenêtre s\'affiche, vous invitant à entrer la clé réseau. Saisissez le mot de passe puis cliquez sur OK.';
wlguest12='MAC OS X';
wlguest13="Cliquez sur l'icône réseau sans fil de la barre de menus (en haut à droite) et sélectionnez le";
wlguest14="Une fenêtre s'affiche, vous invitant à entrer la clé réseau. Saisissez le mot de passe puis cliquez sur OK.";
wlguest15="L'accès client est une fonction qui permet aux utilisateurs d'accéder à Internet mais limite l'accès au réseau domestique. Demandez le mot de passe d'accès invité à l'administrateur du réseau et saisissez-le ci-dessous.";
wlguest16='Vous avez réussi ! Vous pouvez maintenant ouvrir un navigateur Internet et surfer.';
wlguest17='Mot de passe/PSK';
wipv61='IPv6 > Paramètres de connexion';
wipv62='IPv6 Pass-Through >';
wipv63='Les périphériques connectés à votre routeur peuvent parler les uns aux autres en utilisant des paquets IPv6 natifs. Les paquets IPv6 sur le réseau local seront automatiquement envoyés à toutes les interfaces LAN (ports Ethernet sur les deux réseaux sans fil, 2,4 GHz et 5 GHz).';
wipv64='Lorsque le pass-through IPv6 est activé, les paquets IPv6 seront également copiés vers l\'interface WAN. (Une connexion directe non sécurisée à Internet est créée.)';
wipv65='Veuillez contacter votre FAI pour des informations sur leur prise en charge d\'IPv6.';
wipv66='IPv6';
wipv67='Internet IPv6';
wipv68='Votre réseau est maintenant compatible IPv6.';
wipv69='Pass-Through';

show50='Filtres de sites web';
web_filter1='Contrôle parental > Filtres de sitesd Web';
web_filter2='Procure un premier niveau de protection pour empêcher l\'accès à des sites web au contenu inapproprié à partir de tous les appareils connectés à votre réseau.';
web_filter3='Options de filtrage';
web_filter4='Ces filtres de sécurité sont fournis pour aider votre famille à faire de meilleures choix lorsqu\'elle navigue sur Internet.';
web_filter5='Bloquer les sites au contenu malveillant, traitant de sujets adultes ou non familial';
web_filter6='Bloquer les sites au contenu malveillant et traitant de sujets adultes';
web_filter7='Bloquer les sites au contenu malveillant';
web_filter8='Aucun filtre';
web_filter9="Bloque les maliciels, les tentatives de filoutage et les sites d'arnaques, ainsi que les sites qui contiennent du matériel explicite à caractère sexuel ou qui traitent de sujets pour adultes, d'avortement, d'alcool, de criminalité, de cultes, de drogue, de jeu, de haine, de suicide, de tabac ou de violence.";
web_filter10='Bloque les maliciels, les tentatives de filoutage et les sites d\'arnaques, ainsi que les sites qui contiennent du matériel explicite à caractère sexuel.';
web_filter11='Bloque les maliciels, les tentatives de filoutage et les sites d\'arnaques.';
web_filter12='Utilisez le fournisseur de DNS de votre choix';
web_filter13='Pour changer votre adresse DNS, veuillez consulter la section Internet WAN > %s DNS %s';
web_filter14="Les filtres de sécurité Internet vous assurent la tranquillité d'esprit lorsque vos enfants surfent sur le Web. Choisissez l'un des trois filtres simples d'utilisation pour définir le niveau de sécurité pour votre réseau.";

show51='Intellistream';
show53='Fonctions multimédia';
mf1='Ces pages vous permettent d\'ajuster le comportement de votre routeur lorsqu\'il doit traiter divers types de trafic multimédia.';
mf2='Optimisez automatiquement votre connexion Internet pour différents types de trafic.';
mf3='Voyez comment votre routeur est utilisé.';
mf4='Fonctions multimédia > Intellistream';
mf5='Intellistream donne la priorité aux services à forte consommation de bande passante et à faible latence comme la voix sur IP, la vidéo et les jeux, pour une expérience en ligne sans faille.';
mf6='La connectivité Internet sera temporairement suspendue pendant le test.';
mf7='Test de vitesse :';
mf8='Enregistré le %s';
mf9='Ping';
mf10='Téléchargement (aval)';
mf11='Téléchargement (amont)';
mf12='Débit';
mf13='Ms';
mf14='Mbps';
mf15='Enregistrer les paramètres';
mf16='Une erreur s\'est produite lors du test.';
mf17='Définir manuellement';
mf18='Entrez un nombre entre {0.1-%s}.';
mf19='Pour activer Intellistream :';
mf20='Entre {0.1-%s} seulement.';
mf22='Terminé.';
mf23='Compte tenu de votre vitesse de téléchargement en amont élevée, Intellistream ne donnera la priorité qu\'à votre vitesse de téléchargement en aval.';
mf24='Compte tenu de votre vitesse de téléchargement en aval élevée, Intellistream ne donnera la priorité qu\'à votre vitesse de téléchargement en amont.';
mf25="Compte tenu de la vitesse élevée de votre connexion Internet, il est inutile d'activer Intellistream.";
mf26='Enregistré manuellement le %s';
mf27='En cours...';
mf28='Exécuter un test de vitesse';
mf29='Pour faire un bon travail, Intellistream a besoin de connaître votre vitesse de connexion.';
mf30='IntelliStream est activé.';
mf31='Saisie manuelle';
mf32='ou';
mf33='Intellistream est actuellement désactivé.';
mf43='Internet connectivity is momentarily suspended during the test.';
mf44='Les résultats du test de vitesse peuvent ne pas être exacts à 100 % en raison du trafic Internet ou autres conditions. Pour comparer les résultats, visitez un site web permettant de mesurer la vitesse Internet ou communiquez avec votre FAI pour confirmer la vitesse de votre connexion. Si les résultats sont contradictoires, vous pouvez entrer les valeurs manuellement.';

show52='Trafic réseau';
qos_stats1='Fonctions multimédia > Trafic réseau';
qos_stats2='Les tableaux ci-dessous affichent le trafic WAN sortant et entrant priorisé, suivant différentes catégories.Les tableaux affichent les 10 dernières minutes (mise à jour automatique toutes les 5 secondes).';
qos_stats3='Légende du trafic'; 
qos_stats4='octets/sec';
qos_stats5='Heure/heures:minutes';
qos_stats6='Trafic entrant';
qos_stats7='Trafic sortant';
qos_stats8='Connectivité réseau et contrôle';
qos_stats9='Voix, vidéo et jeux';
qos_stats10='Web et vidéo Web';
qos_stats11='E-mail et RPV';
qos_stats12='Téléchargements, torrents et autres';
qos_stats13='Pour utiliser cette fonction, activez Intellistream ';
qos_stats14='ici';
qos_stats15='.';

new1='Optimisez votre connexion Internet.';
new2='Contrôle parental';
new3='Filtres de sites web pour une navigation en toute sécurité.';
new4='Connexion IPv6';
new5='Votre réseau est maintenant compatible IPv6.';
new6='NOUVEAU';
new7='Partagez des fichiers multimédia entre des périphériques sur le réseau.';
new8='NOUV<br>EAU';

media_feature1='Fonctions multimédia';
media_feature2='The bandwidth gap between LAN and WAN may significantly degrade performance of critical network applications, such as VoIP, gaming, and VPN. This QoS function allows users to classify traffic of applications and provides them with differentiated services (Diffserv).';
media_dlna1='Media Server';
media_dlna2='Media Features > Media Server';
media_dlna3='Profitez pleinement de votre musique, de vos photos et de vos vidéos en toute simplicité, par l\'entremise d\'un périphérique DLNA connecté à votre réseau. Powered by Twonky.';
media_dlna4='Serveur DLNA';
media_dlna5='Nom du serveur';
media_dlna6='Disques partagés:';
media_dlna7='Prêt';
media_dlna8='Indexation en cours';
media_dlna9='Service';
media_dlna10='videos';
media_dlna11='chansons';
media_dlna12='photos';
media_dlna13='Eject';
media_dlna14='Actualiser';
media_dlna15='Enregistrer les paramètres';
media_dlna16='Twonky est une gamme de logiciels créés par PacketVideo Corporation (PV).';
media_dlna17='created by PacketVideo Corporation (PV).';
media_dlna18='Untitled';
media_dlna19='Aucun disque USB connecté au routeur.';
media_dlna20='Non partagé avec le réseau.';
media_dlna21='Vous avez plus de fichiers multimédia que votre routeur peut indexer, ainsi nous vous présentons les premiers 12000 fichiers.';
media_dlna22='Impossible d\'indexer un disque en lecture seule.';


// Note this dictionary is a temporary demonstration
var langDictionary = {

// Copy belkin transation table to here	
'p100t011' : "tableau de bord",
'p220t001' : "Vous disposez d'une connexion DSL PPTP.",
'p220t011' : "PPTP",
'p220t012' : "Le protocole Point-to-Point Tunneling Protocol (PPTP) crée une connexion privée et cryptée entre vous et votre fournisseur d'accès Internet.",
'p222t001' : "Il y a quelque chose ne va pas avec vos paramètres PPTP.",
'p300t001' : "Nous vérifions pour des mises à jour du micrologiciel.",
'p300t002' : "Nous vérifions la présence de mises à jour pour le micrologiciel de votre nouveau routeur",
'p300t003' : "Pourquoi dois-je installer le dernier micrologiciel ?",
'p300t004' : "Le micrologiciel est le logiciel que votre routeur utilise pour mettre en œuvre des réseaux et des protocoles de sécurité. Les mises à jour améliorent la fiabilité et la fonctionnalité de votre routeur, il est donc important d'être toujours à jour.",
'gtUpdateNoPower' : "Nous mettons à jour votre routeur avec le nouveau micrologiciel. Veuillez ne pas mettre le routeur hors tension pendant cette procédure.",
'p320t003' : "Cela va prendre environ trois minutes environ. Progression de la mise à jour :",
'gtFirmwareRestart' : "Maintenant que le micrologiciel a été installé, nous devons redémarrer votre routeur pour officialiser le tout.",
'p342t003' : "à partir de la liste des réseaux sans fil.",
'errorSSIDEmpty' : "Veuillez entrer un nom pour votre réseau sans fil.",
'errorSSIDTooLong' : "Votre nom de réseau doit être inférieur à 32 caractères.",
'errorSSIDInvalidChars' : "Votre nom de réseau ne peut contenir que des lettres, des chiffres, des signes de ponctuation et des espaces.",
'errorWEPPasswordInvalidChars' : "Votre mot de passe réseau ne peut contenir que des chiffres et des lettres (A à F).",
'errorWEPPasswordInvalidLength' : "Votre mot de passe réseau doit comporter 10 ou 26 caractères.",
'errorWEPPasswordEmpty' : "Veuillez entrer un mot de passe pour sécuriser votre réseau sans fil.",
'errorWPAPasswordInvalidChars' : "Votre mot de passe réseau ne peut contenir que des lettres, des chiffres, des signes de ponctuation et des espaces.",
'errorWPAPasswordInvalidLength' : "Votre mot de passe réseau doit comporter entre 8 et 63 caractères.",
'errorWPAPasswordEmpty' : "Veuillez entrer un mot de passe pour sécuriser votre réseau sans fil.",
'errorGenericCommitError' : "Une erreur est survenue.  Veuillez vérifier les paramètres ci-dessous et réessayer.",
'p400t006' : "Mot de passe :",
'p450t006' : "Mot de passe : ",
'p451t006' : "Mot de passe : ",
'p500t007' : "Enregistrement terminé.",
'p500t008' : "Enregistrer plus tard",
'p700t011' : "PPTP DSL connection",
'errIpAddressEmpty' : "L'adresse IP ne peut pas être vide.",
'errSubnetMaskEmpty' : "Le masque de sous-réseau ne peut pas être vide.",
'errSubnetMaskInvalid' : "Le masque de sous réseau ne ressemble pas à un masque de sous réseau. Veuillez vérifier la valeur.",
'errDefaultGatewayEmpty' : "La passerelle par défaut ne peut pas être vide.",
'errDNSServerEmpty' : "L'adresse du serveur DNS ne peut pas être vide.",
'1781' : "Le t�l�chargement en mode hors connexion Vuze",
'1782' : "Effacement de tous les t�l�chargements d�connect� va effacer tous les �l�ments de la file d'attente y compris les fichiers partiels et complets.",
'1783' : "Clear 'Tous les t�l�chargements en mode hors connexion",
'7102' : "Intellistream de Belkin donne la priorité aux services à forte consommation de bande passante et à faible latence comme la voix sur IP, la vidéo et les jeux, pour une expérience en ligne sans faille.",
'7103' : "Pour faire un bon travail, Intellistream doit connaître votre vitesse de connexion.",
'7104' : "La connectivité Internet sera temporairement suspendue pendant le test.",
'7105' : "La connectivité Internet est temporairement suspendue pendant le test.",
'7106' : "Exécuter un test de vitesse",
'7107' : "Test de vitesse",
'7108' : "Saisie manuelle",
'7109' : "Ping",
'7110' : "Vitesse en aval<br>",
'7111' : "Vitesse en amont<br>",
'7112' : "En cours...",
'7113' : "Terminé.",
'7114' : "Une erreur s'est produite lors du test.",
'7115' : "Entrez un nombre entre 0,1-100.",
'7116' : "Entrez un nombre entre 0,1-1000.",
'7117' : "Entre 0,1-100 seulement.",
'7118' : "Compte tenu de votre vitesse de téléchargement en amont élevée, Intellistream ne donnera la priorité qu'à votre vitesse de téléchargement en aval.",
'7119' : "Compte tenu de votre vitesse de téléchargement en aval élevée, Intellistream ne donnera la priorité qu'à votre vitesse de téléchargement en amont.",
'7120' : "Compte tenu de la vitesse élevée de votre connexion Internet, il est inutile d'activer Intellistream.",
'7121' : "Date/heure d'enregistrement",
'7122' : "Enregistré manuellement le",
'7123' : "Pour activer Intellistream :",
'7124' : "IntelliStream est activé.",
'7125' : "Intellistream  est actuellement désactivé.",
'7126' : "Configuration manuelle",
'gtBBSTitle' : "Bienvenue au programme d'installation du routeur Belkin",
'gtBack' : "Retour au tableau de bord",
'Support4t036' : "Pour tout savoir.",
'Support4t037' : "Accédez à l'URL suivante sur un appareil connecté à Internet et découvrez comment résoudre le problème vous-même : <STRONG>www.belkin.com/support/asdlkj</STRONG>",
'gtReadHelp' : "Allez à <STRONG>http://belk.in/PMuxOg</STRONG> sur un dispositif connecté à l'Internet",
'Support5t014' : "Pour tout savoir.",
'p1200t001' : "Un peu plus de sécurité.",
'p1200t002' : "Vous pouvez protéger votre routeur par le verrouillage du tableau de bord avec un mot de passe.",
'errsetempt' : "Veuillez entrer un mot de passe.",
'errorpwdEmpty' : "Veuillez entrer votre mot de passe",
'errorpwdError' : "Votre mot de passe est incorrect.",
'60' : "Administrateur secondaire",
'61' : "Ce périphérique est administré par",
'62' : "en ce moment !!",
'gtDisconnected' : "Déconnecté",
'dft005' : "Centre d'assistance Belkin",
'dhToggleBand' : "Montrer 5,0 GHz",
'419' : "secondes restantes.",
'422' : "Rétablissement des paramètres réussi",
'423' : "Le fichier restauré n’est pas de type approprié pour ce dispositif. Échec de la restauration. Veuillez obtenir le fichier approprié et réessayer",
'533' : "Si votre routeur fonctionne plus correctement, un redémarrage est peut-être nécessaire. Redémarrer le routeur n'affectera en rien vos paramètres.",
'1200' : "Enregistrement des modifications. Veuillez patienter.......",
'1386' : "Le type ou la version du fichier de mise à jour ne convient pas à cet appareil. Échec de la mise à jour. Veuillez obtenir le fichier approprié et réessayer",
'2053' : "Modifications enregistrées avec succès",
'2054' : "Mise à jour du micrologiciel réussie",
'766' : "Les nombres du masque de sous-réseau entrés sont incorrects.",
'1356' : "IP de passerelle incorrecte : le premier nombre doit être compris entre 1 et 223.",
'1357' : "IP de passerelle incorrecte : le deuxième et le troisième nombre doivent être compris entre 0 et 255.",
'1358' : "IP de passerelle non valide : le dernier nombre doit être compris entre 1 et 254.",
'1360' : "Adresse IP incorrecte : le premier nombre doit être compris entre 1 et 223.",
'1354' : "Adresse IP incorrecte : le deuxième et le troisième nombre doivent être compris entre 0 et 255.",
'675' : "Adresse IP incorrecte. Le dernier nombre doit être compris entre 1 et 254.",
'403' : "L'IP que vous avez entrée est incorrecte.",
'760' : "Adresse IP",
'1760' : "Interdire tous",
'395' : "Vous n'avez pas entré les numéros ou certains numéros entrés ne sont pas valides. Les numéros contenus dans les zones de saisie doivent être compris entre 0 et 255.",
'1395' : "Non configuré",
'1281' : "L'IP WAN ne peut pas couvrir le sous-réseau côté LAN.",
'641' : "Vous n'avez pas entré les nombres de l'IP ou certains nombres entrés sont incorrects. Ils doivent être compris entre 0 et 255",
'errUsernameTooLong' : "Votre nom d'utilisateur doit comporter moins de 64 caractères.",
'errUsernameInvalid' : "Votre nom d'utilisateur ne peut contenir que des lettres, des chiffres, des signes de ponctuation et des espaces.",
'errPasswordEmpty' : "Veuillez entrer votre mot de passe",
'errPasswordTooLong' : "Votre mot de passe doit comporter moins de 64 caractères.",
'errPasswordInvalid' : "Votre nom d'utilisateur ne peut contenir que des lettres, des chiffres, des signes de ponctuation et des espaces.",
'1398' : "OK",
'1399' : "Annuler",
'374' : "Activer",
'375' : "Désactiver",
'47' : "Plus d'infos",
'48' : "Effacer",
'49' : "Enregistrer",
'96' : "Activé",
'119' : "Désactivé",
'1298' : "Fermer",
'113' : "<< Ajouter",
'114' : "Supprimer",
'128' : "Actualiser",
'318' : "Désactivé",
'317' : "Activé",
'2006' : "Oui",
'2007' : "Non",
'3300' : "NOUVEAU",
'50' : "Mise à jour DNS Dynamique",
'98' : "Le Dynamic Domain Name System (DDNS) vous permet d'accéder à votre réseau domestique grâce à un compte établi par un fournisseur DDNS. Configurez votre compte sur Dyn.com (<a href='http://www.dyn.com' target='_blank'> www.dyn.com </a>) et activez la fonction DDNS sur votre routeur. Vous devez créer un compte avant d'utiliser ce service.",
'100' : "Nom d'utilisateur",
'101' : "Mot de passe",
'102' : "Nom de domaine",
'742' : "Veuillez entrer votre nom d'utilisateur",
'757' : "Veuillez entrer le mot de passe !",
'822' : "est incorrect, veuillez d'abord corriger !",
'1307' : "DynDNS",
'1308' : "Service DDNS",
'1309' : "État DDNS",
'1310' : "Site Web",
'1315' : "Mise à jour automatique DDNS",
'1316' : "mise à jour tous les",
'1317' : "jours",
'1369' : "Enregistré",
'1380' : "Configuration incorrecte",
'1381' : "Connexion",
'1382' : "Échec de la connexion",
'1383' : "Échec de connexion",
'1384' : "Échec d'enregistrement",
'1385' : "Non enregistré",
'1751' : "Servir des fichiers multimédia sur un support compatible en réseau des acteurs",
'702' : "Le service de noms de domaine (DNS) traduit les noms de domaine en adresses IP pour localiser les services informatiques et les dispositifs à travers le monde. Si votre fournisseur d'accès Internet (FAI) vous a donné une adresse DNS à utiliser, saisissez-la ici.",
'703' : "Automatiquement du FAI",
'704' : "Adresse DNS",
'705' : "Adresse DNS secondaire",
'706' : "DNS = serveur de nom de domaine. Un serveur de nom de domaine est un serveur Internet qui traduit les adresses URL (Uniform Resource Locator) telles que www.belkin.com en adresses IP.",
'707' : "Vous devez entrer les paramètres DNS fournis par votre FAI si vous n'utilisez pas la fonction DNS automatique.",
'780' : "Spécifier l'adresse IP",
'823' : "Pour modifier le DNS, allez d'abord à {Filtres de site Web}, puis sélectionnez « Aucun filtre ».",
'55' : "Info. sur le micrologiciel",
'56' : "Aucune mise à jour du micrologiciel n'est disponible pour ce routeur !",
'57' : "Échec de la connexion au serveur d'informations sur le micrologiciel, vérifiez la connexion WAN.",
'58' : "Micrologiciel actuel :",
'59' : "Télécharger le micrologiciel :",
'64' : "Le routeur peut être configuré de sorte à limiter l'accès de certains ordinateurs à Internet, au courrier électronique et autres fonctions réseaux, à des jours et des heures donnés.",
'65' : "IP",
'66' : "Port",
'67' : "Type",
'68' : "Temps de blocage",
'69' : "Jour(s)",
'70' : "Heure",
'71' : "Activer",
'72' : "Les deux",
'73' : "Toujours",
'74' : "Bloquer",
'75' : "DIM",
'76' : "LUN",
'77' : "MAR",
'78' : "MER",
'79' : "JEU",
'80' : "VEN",
'81' : "SAM",
'82' : ":00 P.M.",
'83' : ":00 A.M.",
'84' : "Vous n'avez pas entré l'adresse IP en entier ou quelques-uns uns des chiffres de l'adresse IP entrée sont invalides. Le nombre contenu dans la zone de saisie de l'adresse IP doit être compris entre 1 et 254.",
'85' : "Les numéros de ports entrés sont incorrects.",
'86' : "Le dernier numéro de port doit être supérieur au premier.",
'87' : "Le dernier nombre de la plage IP doit être supérieur au premier.",
'88' : "Le numéro dans la zone de saisie du port doit être compris entre 1 et 65535.",
'1311' : "Aucune application sélectionnée",
'1312' : "Doublons détectés. La règle existe déjà.",
'1355' : "L'adresse IP LAN du routeur doit être exclue de la plage d'adresses IP.",
'90' : "Cela vous permet de spécifier un dispositif sur votre réseau qui sera placé à l'extérieur pare-feu de votre routeur, tandis que d'autres appareils restent derrière le pare-feu.",
'91' : "L'ordinateur placé dans la zone DMZ ne sera pas protégé contre les attaques provenant de hackers.",
'92' : "Pour placer un ordinateur dans la zone DMZ, entrez les derniers chiffres de son adresse IP dans le champ de saisie ci-dessous, et sélectionnez « Activer ». Cliquez « Enregistrer » pour que les modifications apportées soient prises en compte.",
'93' : "Adresse IP de l'hôte DMZ virtuel",
'97' : "IP statique",
'95' : "IP privée",
'103' : "Veuillez entrer l'adresse IP avant d'activer la DMZ",
'1232' : "L'adresse IP de l'hôte DMZ est incorrecte !",
'1253' : "L'IP est hors de la plage [1-254] !",
'105' : "Cette fonction vous permet de dresser la liste des clients autorisés. Lorsque vous activez cette fonction, vous devez entrer l'adresse MAC de chaque client de votre réseau, pour permettre à chacun d'accéder au réseau.",
'106' : "Activer le filtrage d'adresses MAC",
'107' : "Liste de filtrage d'adresses MAC",
'108' : "Bloquer",
'110' : "Adresse MAC",
'112' : "Cette adresse MAC existe déjà !",
'669' : "Adresse MAC incorrecte. Il s'agit d'une adresse vide.",
'902' : "Adresse MAC non valide",
'903' : "Veuillez d'abord la corriger !",
'904' : "L'adresse MAC exacte doit être XX:XX:XX:XX:XX:XX, X étant compris entre 0~9 et a-f !",
'1062' : "Remarque : vous ne pouvez pas supprimer l'adresse MAC de l'ordinateur à partir duquel vous accédez aux fonctions administratives du routeur. (Celui que vous utilisez en ce moment.)",
'1602' : "Défini par l'utilisateur 1",
'117' : "Votre routeur possède un pare-feu afin de protéger votre réseau contre une multitude d'attaques provenant de pirates informatiques, incluant le Ping de la mort (Ping of Death - PoD) et l'attaque par Déni de service (Denial of Service - DoS). Vous pouvez désactiver la fonction de pare-feu au besoin. Désactiver le pare-feu ne rendra pas votre réseau totalement vulnérable aux attaques des pirates, mais il est recommandé de l'activer aussi souvent que possible.",
'118' : "Activer/Désactiver le pare-feu",
'121' : "<b>FONCTION AVANCÉE ! </b> Vous pouvez configurer le routeur de sorte qu'il ignore les pings ICMP (ping sur le port WAN). Cette fonction offre un niveau de sécurité supérieur.",
'1076' : "Bloquer le ping ICMP",
'1827' : "Imprimer les paramètres d'accès invité",
'2702' : "L'Accès invité permet d'accéder à Internet par le biais du port WAN, mais empêche les invités d'accéder au réseau interne, au réseau local et au réseau local sans fil. La fonction est prise en charge sur les radios de 2,4 GHz seulement pour faciliter l'utilisation.",
'279' : "Port entrant",
'1828' : "Cybercafé (les invités se connectent via une page Web)",
'1619' : "WPA/WPA2 PSK",
'1829' : "WEP",
'1830' : "Ouvert",
'1831' : "32 caractères maximum, sans espace",
'1617' : "Mot de passe (PSK)",
'842' : "Authentification",
'845' : "Technique de chiffrement",
'854' : "Clé pré-partagée (PSK)",
'857' : "Dissimuler la PSK",
'855' : "WPA-PSK (sans serveur)",
'1335' : "Nom du réseau (SSID)",
'1825' : "Entre 8 et 63 caractères",
'1826' : "10 nombres hexadécimaux",
'1834' : "Nom du réseau",
'409' : "Mot de passe",
'1835' : "Chaque invité se connectant à votre réseau sans fil a besoin de ce mot de passe.",
'1715' : "Type de sécurité",
'1836' : "Pour se connecter au réseau sans fil :",
'1837' : "Windows",
'1838' : "1. Cliquez avec le bouton droit de votre souris sur l'icône sans fil de la barre de tâches Windows et sélectionnez Afficher les réseaux sans fil disponibles au menu contextuel.",
'1839' : "2. Cliquez deux fois sur le ",
'1840' : " réseau.",
'1841' : "3. Une fenêtre s'affiche, vous invitant à entrer la clé réseau. Saisissez le mot de passe puis cliquez sur OK.",
'1842' : "Mac OS X",
'1843' : "1. Cliquez sur l'icône réseau sans fil de la barre de menus (en haut à droite) et sélectionnez le ",
'1844' : " réseau.",
'1845' : "2. Une fenêtre s'affiche, vous invitant à entrer la clé réseau. Saisissez le mot de passe puis cliquez sur OK.",
'1832' : "Cybercafé",
'1833' : "Ouvert",
'1201' : "Le SSID ne peut être vide !",
'1812' : "La longueur du mot de passe est incorrecte. Le mot de passe doit contenir entre 8 et 63 caractères.",
'1824' : "La clé WEP doit comporter 10 nombres hexadécimaux !",
'414' : "Erreur de connexion !!",
'1811' : "L'accès client est une fonction qui permet aux utilisateurs d'accéder à Internet mais limite l'accès au réseau domestique. Demandez le mot de passe d'accès invité à l'administrateur du réseau et saisissez-le ci-dessous.",
'1813' : "Installation réussie : Vous pouvez maintenant ouvrir un navigateur Internet et surfer.",
'909' : "L'adresse IP représente l'adresse IP interne du routeur. Pour accéder à l'interface de configuration avancée, entrez cette adresse IP dans la barre d'adresse de votre navigateur. Cette adresse peut être modifiée au besoin. Pour modifier l'adresse IP, entrez la nouvelle adresse IP et cliquez sur « Enregistrer ». L'adresse IP choisie doit être une adresse IP non-acheminable. Exemples d'adresses IP non-acheminables : 192.168.2.1, 10.0.0.1, 172.16.0.1",
'917' : "Il n'est pas nécessaire de modifier le masque de sous-réseau. Il est toutefois possible de le modifier au besoin. N'apportez des changements au masque de sous-réseau que si vous le devez absolument.",
'929' : "La fonction de serveur DHCP permet de créer un réseau en toute simplicité en attribuant une adresse IP à chaque ordinateur du réseau. Le serveur DHCP peut être désactivé au besoin. Si vous désactivez le serveur DHCP, vous devrez entrer manuellement une adresse IP statique pour chaque ordinateur du réseau. Le pool d'adresses IP est la plage d'adresses IP mises de côté pour attribution dynamique aux ordinateurs de votre réseau. La valeur par défaut est de 2 à 200 (199 ordinateurs). Pour changer ce nombre, entrez de nouvelles adresses IP de début et de fin, puis cliquez sur « Enregistrer ».",
'935' : "Vous pouvez donner un nom de domaine local (nom de réseau) à votre réseau. Il n'est pas nécessaire de modifier ce paramètre à moins qu'un impératif particulier ne vous y oblige. Vous pouvez donner n'importe quel nom à votre réseau (« MON RÉSEAU », par exemple).",
'962' : "Pour configurer le routeur selon le protocole PPPoE, entrez le nom d'utilisateur et le mot de passe fournis par votre FAI dans les champs prévus. Si vous n'avez pas de nom de service ou si vous ne le connaissez pas, laissez le champ « Nom de service » vide. Après avoir entré les informations, cliquez sur « Enregistrer ». Après l'enregistrement, l'indicateur d'état de connexion affiche « Connecté » si votre routeur est correctement configuré.",
'967' : "Certains FAI utilisent le protocole PPTP pour connecter les abonnés à la centrale. Cela vous oblige à entrer quelques paramètres supplémentaires que votre FAI doit fournir. Après avoir enregistré vos modifications, l'indicateur d'état d'Internet sera vert si vous avez réussi.",
'971' : "Sélectionnez le type de connexion Telstra Bigpond en cliquant sur « Enregistrer ».",
'982' : "Déconnecter après X...",
'983' : "Cette fonctionnalité déconnecte votre routeur de votre FAI après une période d'inactivité. Utilisez cette option pour économiser de l'argent si vous payez pour votre service Internet à la minute.",
'htDDNS' : "Qu'est-ce que le DDNS ?",
'htDNS' : "Qu'est-ce que le DNS ?",
'htDMZ' : "Qu'est-ce que la zone démilitarisée (DMZ) ?",
'htLAN' : "Que contrôlent les paramètres LAN ?",
'htWANMain' : "Quels sont les paramètres WAN ?",
'htWANMAC' : "Qu'est-ce que l'adresse MAC ?",
'htWAN_PPPOE' : "Paramètres PPPoE",
'htWAN_PPTP' : "Paramètres PPTP",
'htIPv6' : "Qu'est-ce que l'IPv6 ?",
'htWifiID' : "Quels sont le nom du réseau et les réglages des canaux ?",
'htWifiIDContent' : "Le nom de réseau est appelé SSID (Service Set ID).  Tous les clients de votre réseau doivent connaître le SSID pour rejoindre le réseau du routeur.",
'htWifiSec' : "Qu'est-ce que la sécurité Wi-Fi ?",
'htWifiSecContent' : "La sécurité Wi-Fi est activée par défaut sur tous les routeurs Belkin.  La sécurité Wi-Fi fournit une couche de protection contre l'accès non autorisé à votre réseau.  Lorsque la sécurité est activée, l'utilisateur a besoin d'un mot de passe pour accéder à votre réseau.",
'htWifiWPS' : "Qu'est-ce que le Wi-Fi Protected Setup ?",
'htWifiWPSContent' : "Il s'agit d'une méthode facultative qui facilite la configuration de la sécurité Wi-Fi sur les réseaux domestiques ou dans un petit bureau. Les dispositifs sans Wi-Fi Protected Setup (WPS) peuvent quand même être ajoutés à votre réseau en choisissant le nom du réseau et en entrant le mot de passe.",
'htWifiGuest' : "Comment utiliser l'accès invité ?",
'htWifiGuestContent' : "Lorsqu'il est activé, l'accès invité ouvre un réseau Wi-Fi qui permet d'accéder à Internet, mais empêche l'accès aux autres dispositifs sur le réseau.",
'htAP' : "Puis-je utiliser mon routeur comme point d'accès ?",
'htAPContent' : "Le routeur Belkin peut être configuré pour agir strictement en tant que point d'accès, outrepassant les fonctions d'acheminement et de pare-feu.  La configuration de votre routeur comme point d'accès sert généralement à ajouter des fonctionnalités sans fil à un réseau filaire existant.",
'htQos' : "Qu'est-ce que Belkin Intellistream ?",
'htDLNA' : "Il s'agit d'un serveur multimédia Belkin optimisé par Twonky.",
'htPortForward' : "Qu'est-ce que la redirection de port ?",
'htPortForwardContent' : "La redirection de port permet à des ordinateurs distants de se connecter à un programme ou à un service spécifique sur votre réseau local. Par exemple, vous pouvez utiliser la redirection de port pour exécuter un serveur web (port 80) sur votre réseau.  La plupart des programmes modernes ne vous obligent pas à utiliser la redirection de port. En effet, ils peuvent configurer tous les ports nécessaires automatiquement.",
'htWanPing' : "Qu'est-ce que le blocage de ping WAN ?",
'htWanPingContent' : "Cette fonction fournit un niveau accru de sécurité pour empêcher les utilisateurs Internet externes de trouver votre adresse IP. Pour ce faire, il n'y a pas d'envoi de réponse aux pings provenant de l'extérieur de votre réseau.",
'htRestart' : "Pourquoi redémarrer mon routeur ?",
'htRestoreFC' : "Que faut-il pour rétablir les paramètres d'usine ?",
'htSaveSettings' : "Pourquoi devrais-je enregistrer/sauvegarder mes paramètres ?",
'htRestoreSettings' : "Que veut dire restaurer mes paramètres précédents ?",
'htSystem' : "Quels sont les paramètres du système ?",
'htSystemContent' : "Sur cette page, vous pouvez définir une variété de paramètres de base du routeur, y compris le fuseau horaire et le mot de passe administrateur.",
'htSelfHeal' : "Qu'est-ce que l'auto-réparation ?",
'hLANSettings' : "Cette page vous aide à configurer de nouvelles connexions, vous permet d'activer/désactiver le DHCP et vous permet de définir l'adresse IP du routeur sur votre réseau local.",
'htDHCPClientList' : "Qu'est-ce que la liste des clients DHCP ?",
'htDHCPClientListContent' : "Cette page vous indique l'adresse IP, le nom d'hôte et l'adresse MAC de tous les dispositifs reliés à votre réseau. Si un ordinateur n'a pas de nom d'hôte spécifié, le champ Nom d'hôte sera vide. Cliquez sur « Actualiser » pour mettre à jour la liste.",
'hWebsiteFilters' : "Il sert de couche de protection contre les sites dangereux/inappropriés. Le filtres de sites web filtrent les sites en vérifiant si le nom du site apparaît dans une liste de sites approuvés.",
'hWANSettings' : "Ces paramètres réseau se réfèrent à la connexion avec votre fournisseur de services Internet (ISP).   Sélectionnez le type de connexion fourni par votre FAI dans la liste. ",
'htChannel' : "Un peu comme une radio avec plusieurs stations, votre routeur peut diffuser sur différents canaux pour communiquer avec les dispositifs sur votre réseau. Le paramètre « Auto » est généralement la meilleure option.",
'3430' : "IPv6 (Internet Protocol version 6) est une version du protocole Internet (IP) destiné à succéder à IPv4, qui dirige la quasi-totalité du trafic Internet. Certains fournisseurs d'accès Internet (FAI) sont presque à court d'adresses IP. IPv6 permet à plus de dispositifs de communiquer sur Internet en utilisant de plus grands nombres pour créer les adresses IP.  Votre fournisseur d'accès vous indiquera si vous devez utiliser le protocole IPv6.",
'3431' : "Type de connexion",
'3432' : "Auto-Config/DHCPv6 (par défaut)",
'3433' : "Les adresses suivantes sont fournies par votre FAI. DHCPv6 fournit des fonctionnalités supplémentaires pour optimiser la connectivité.",
'3434' : "WAN",
'3435' : "Adresse WAN",
'3436' : "Passerelle",
'3437' : "LAN",
'3438' : "Utilisez cette section pour configurer les paramètres de réseau internes de votre routeur. Si vous modifiez l'adresse LAN IPv6 ici, vous devrez peut-être ajuster les paramètres réseau de votre ordinateur pour accéder à nouveau au réseau.",
'3439' : "Préfixe LAN",
'3440' : "Interface ID",
'3441' : "Lien-local",
'3442' : "DNS",
'3443' : "Les paramètres DNS IPv6 par défaut sont fournies par votre fournisseur d'accès Internet si disponible dans les communications du routeur WAN ou les messages DHCPv6.",
'3444' : "Primaire",
'3445' : "Secondaire",
'3446' : "PPPoE sur IPv6",
'3447' : "Point-to-Point Protocol over Ethernet (PPPoE) est principalement utilisé par les services DSL pour connecter un modem ADSL à Internet.",
'3448' : "Connexion",
'3450' : "masquer le mot de passe",
'3451' : "Nom d'utilisateur",
'3452' : "Mot de passe",
'3453' : "Nom de service",
'3454' : "Tunnel 6to4",
'3455' : "Permet aux paquets IPv6 d'être transmis sur un réseau IPv4, sans configuration explicite des tunnels. Ce type de connexion est approprié si votre fournisseur de d'accès Internet ne prend pas en charge l'IPv6.",
'3456' : "Routeur relais 6to4 distant",
'3457' : "Pass-Through",
'3458' : "Les périphériques connectés à votre routeur peuvent parler les uns aux autres en utilisant des paquets IPv6 natifs. Les paquets IPv6 sur le réseau local seront automatiquement envoyés à toutes les interfaces LAN (ports Ethernet sur les deux réseaux sans fil, 2,4 GHz et 5 GHz).",
'3459' : "Lorsque le pass-through IPv6 est activé, les paquets IPv6 seront également copiés vers l'interface WAN. (Une connexion directe non sécurisée à Internet est créée.)",
'3460' : "Veuillez contacter votre FAI pour des informations sur leur prise en charge d'IPv6.",
'3461' : "IPv6 statiques",
'3462' : "L'adressage IPv6 statique n'est pas couramment utilisé car il peut être difficile à administrer. L'IPv6 statique ne devrait pas être utilisé avec des périphériques qui se connectent à plusieurs réseaux, tels que les ordinateurs portables ou les appareils mobiles.",
'3463' : "Pass-Through local uniquement",
'3464' : "Le Pass-Through WAN IPv6 est désactivé. Tous les dispositifs locaux sur votre LAN et votre Wi-Fi peuvent encore communiquer directement entre eux, mais le routeur n'enverra ou ne recevra pas de paquets d'Internet, et ne répondra pas directement aux paquets IPv6.",
'3465' : "Votre fournisseur d'accès à Interne fournit pas de connectivité IPv6. Veuillez communiquer avec votre FAI pour obtenir des informations sur la prise en charge d'IPv6 ou pour établir une connexion.",
'3466' : "L'option Pass-Through local uniquement réglée automatiquement pour que vos appareils s'envoient des paquets IPv6. L'autre option est d'utiliser « Tunnel 6to4 » pour accéder à Internet via une connexion IPv4.",
'3467' : "Chaque case doit contenir les quatre chiffres hexadécimaux (0-9 et AF).",
'3468' : "Veuillez entrer une adresse autre qu'une adresse de multidiffusion. Les adresses de multidiffusion commencent généralement par FF.",
'3469' : "La longueur du préfixe doit être entre 1 et 127. La longueur du préfixe est généralement 64, 56, ou 48.",
'3470' : "Il n'y a pas de connexion IPv4.",
'3471' : "Ces paramètres DNS sont remplacés par les paramètres de contrôle parental.",
'3472' : "Filtre de sites web",
'3473' : "Sélectionnez PPPoE sous « Internet WAN > Paramètres de connexion » avant de sélectionner PPPoE sur IPv6",
'3474' : "Connexion Internet perdue. Vérifiez le type de connexion WAN\nou communiquez avec votre FAI.",
'3475' : "DNS par défaut fourni par votre FAI",
'gtTryManu' : "Si vous connaissez votre type de connexion, vous pouvez ",
'gtSetManual' : "la configurer manuellement ",
'2100' : "Accès refusé. Entrez le mot de passe du routeur pour accorder un accès temporaire aux pages et services bloqués.",
'2101' : "Page d'accueil",
'2102' : "ALLER",
'354' : "Cette page vous indique l'adresse IP, le nom d'hôte et l'adresse MAC de tous les ordinateurs reliés à votre réseau. Si un ordinateur n'a pas de nom, le champ Nom d'hôte sera vide. Pour mettre à jour la liste, cliquez sur Rafraîchir.",
'355' : "Adresse IP",
'356' : "Nom d'hôte",
'357' : "Adresse MAC",
'370' : "Cette page vous aide à configurer de nouvelles connexions, vous permet d'activer/désactiver le DHCP et vous permet de définir l'adresse IP du routeur sur votre réseau local.",
'371' : "Adresse IP",
'372' : "Masque de sous-réseau",
'373' : "Serveur DHCP",
'378' : "La fonction de serveur DHCP permet de créer un réseau en toute simplicité en attribuant une adresse IP à chaque ordinateur du réseau. Il n'est pas nécessaire d'apporter des modifications ici.",
'379' : "Adresse de départ du pool d'adresses IP",
'380' : "Adresse de fin du pool d'adresses IP",
'381' : "Durée d'autorisation",
'382' : "Illimitée",
'383' : "Demi-heure",
'384' : "1 heure",
'385' : "2 heures",
'386' : "Demi-journée",
'387' : "1 jour",
'388' : "2 jours",
'389' : "1 semaine",
'390' : "2 semaines",
'391' : "La durée pendant laquelle le serveur DHCP réservera l'adresse IP pour chaque ordinateur.",
'392' : "Nom de domaine local",
'393' : "Facultatif",
'394' : "Fonction qui vous permet d'attribuer un nom à votre réseau.",
'397' : "Le pool IP doit être dans le même masque de sous-réseau que la passerelle IP",
'398' : "L'IP de fin doit être supérieure à l'IP de départ.",
'399' : "L'adresse IP LAN ne peut pas figurer dans la réserve d'adresses DHCP.",
'400' : "L'adresse IP choisie doit être une adresse IP non-acheminable.",
'401' : "Adresse IP LAN non valide, le premier numéro ne peut être ni 127 ni 0",
'404' : "Veuillez modifier manuellement la barre d'adresse de votre navigateur et indiquer la nouvelle adresse de réseau local.",
'406' : "Souhaitez-vous vraiment changer l'adresse IP du réseau local ?",
'416' : "192.168.y.x (où y est un nombre compris entre 0 et 255, et x est compris entre 1 et 254.)",
'417' : "10.y.y.x (où y est un nombre compris entre 0 et 255, et x est compris entre 1 et 254.)",
'418' : "172.z.y.x (où z est un nombre compris entre 16 et 31, y est un nombre compris entre 0 et 255, et x est compris entre 1 et 254.)",
'713' : "Nom du domaine local incorrect :",
'1228' : "L'adresse de départ du pool d'adresses IP est incorrecte !",
'1229' : "L'adresse de fin du pool d'adresses IP est incorrecte !",
'1240' : "L'adresse IP LAN est incorrecte !",
'3' : "Connexion",
'408' : "Avant d'apporter des modifications, vous devez vous connecter avec votre mot de passe. Si vous n'avez pas encore créé de mot de passe personnalisé, laissez ce champ vide et cliquez sur « Soumettre ».",
'410' : "Par défaut = laisser vide",
'412' : "Soumettre",
'1371' : "Mot de passe incorrect",
'1372' : "Veuillez confirmer le mot de passe et essayez à nouveau.",
'124' : "Le routeur conserve un journal de l'activité à l'intérieur de celui-ci, telle que les connexions et déconnexions, et toute tentative de connexion au routeur en provenance de l'Internet.",
'125' : "Journal",
'126' : "Enregistrer",
'127' : "Effacer",
'1302' : "Journal système",
'1303' : "Journal du pare-feu",
'8' : "Paramètres LAN",
'9' : "Paramètres du réseau local",
'10' : "Dispositifs connectés",
'2500' : "Routage statique",
'11' : "Internet / WAN",
'335' : "Type de connexion",
'690' : "Dynamique",
'692' : "Statique",
'694' : "PPPoE",
'696' : "PPTP",
'698' : "Telstra BigPond/OptusNet Cable",
'42' : "IPV6",
'43' : "Connexion IPv6",
'13' : "DNS",
'14' : "Adresse MAC",
'16' : "Wi-Fi",
'17' : "Nom du réseau",
'18' : "Sécurité",
'803' : "WEP 128 bits",
'804' : "WEP 64 bits",
'1296' : "Configuration WPA/WPA2-Personal (PSK)",
'1297' : "Configuration WPA/WPA2-Enterprise (RADIUS)",
'805' : "Configuration WPA (avec serveur Radius)",
'1319' : "Wi-Fi Protected Setup",
'777' : "Utiliser comme point d'accès",
'833' : "Contrôle d'adresse MAC",
'1613' : "Accès invité",
'1850' : "Contrôle parental",
'1851' : "Filtre de sites web",
'1710' : "Contrôle de l'accès",
'20' : "Médias",
'7151' : "Trafic réseau",
'7000' : "Media Server",
'1780' : "Torrent Mate",
'1790' : "Logiciels facultatifs",
'23' : "Pare-feu",
'24' : "Redirection de port",
'25' : "Filtres d'IP des clients",
'26' : "Filtrage des adresses MAC",
'27' : "DMZ",
'41' : "DDNS",
'28' : "Blocage du ping WAN",
'29' : "Journal de sécurité",
'30' : "Utilitaires",
'32' : "Redémarrer le routeur",
'34' : "Rétablir les paramètres par défaut",
'35' : "Sauvegarder les Paramètres",
'36' : "Rétablir les paramètres précédents",
'37' : "Mise à jour du micrologiciel",
'38' : "Paramètres du système",
'39' : "Auto-réparation",
'1900' : "Carte",
'132' : "La plage du port entrant est incorrecte.",
'133' : "La plage du port privé est incorrecte.",
'134' : "Cette fonction vous permet d'acheminer, via le routeur et vers votre réseau interne, les appels externes (Internet) de services tels qu'un serveur web (port 80), un serveur FTP (port 21) ou d'autres applications.",
'276' : "Effacer l'entrée",
'277' : "Ajouter",
'278' : "Description",
'280' : "Type",
'281' : "Adresse IP privée",
'282' : "Port privé",
'376' : "tout",
'411' : "Effacer",
'648' : "Caractère incorrect",
'672' : "Numéro incorrect. Il doit être compris entre 1..65535",
'905' : "Toutes les entrées sont pleines.\nVeuillez effacer certaines entrées et recommencer.",
'906' : "Voulez-vous effacer l'entrée",
'907' : "Voulez-vous effacer toutes les entrées ?",
'1241' : "L'adresse IP WAN est incorrecte !",
'1250' : "Le port est incorrect !",
'1362' : "La description est vide",
'1601' : "Automatique",
'2055' : "Chevauchement de plage de ports entrants !!",
'2056' : "Chevauchement de plage du port privé",
'3310' : "Intellistream",
'3311' : "Optimisez votre connexion Internet.",
'3312' : "Media Server",
'3313' : "Partagez des fichiers multimédia entre des périphériques sur le réseau.",
'3314' : "Contrôle parental",
'3315' : "Filtres de sécurité DNS pour sécurité Internet",
'3316' : "Connexion IPv6",
'3317' : "Votre réseau est maintenant compatible IPv6",
'1852' : "Il sert de couche de protection contre les sites dangereux/inappropriés. Le filtres de sites web filtrent les sites en vérifiant si le nom du site apparaît dans une liste de sites approuvés.",
'1854' : "Options de filtrage",
'1856' : "Aucun filtre",
'1858' : "Bloquer les sites au contenu malveillant",
'1859' : "Bloque les maliciels, les tentatives de filoutage et les sites d'arnaques..",
'1860' : "Bloquer les sites au contenu malveillant et traitant de sujets adultes",
'1861' : "Bloque les maliciels, les tentatives de filoutage et les sites d'arnaques, ainsi que les sites qui contiennent du matériel explicite à caractère sexuel..",
'1862' : "Bloquer les sites au contenu malveillant, traitant de sujets adultes ou non familial",
'1863' : "Bloque les maliciels, les tentatives de filoutage et les sites d'arnaques, ainsi que les sites qui contiennent du matériel explicite à caractère sexuel ou qui traitent de sujets pour adultes, d'avortement, d'alcool, de criminalité, de cultes, de drogue, de jeu, de haine, de suicide, de tabac ou de violence.",
'1864' : "Pour changer votre adresse DNS, veuillez aller à Internet WAN > {DNS}",
'7152' : "Les tableaux ci-dessous affichent le trafic WAN sortant et entrant priorisé, suivant différentes catégories. Les tableaux affichent les 10 dernières minutes (mise à jour automatique toutes les 5 secondes).",
'7154' : "Légende du trafic",
'7155' : "Trafic entrant",
'7156' : "Trafic sortant",
'7157' : "Pour utiliser cette fonction, activez Intellistream",
'7158' : "ici",
'7159' : ".",
'7160' : "Connectivité et contrôle réseau",
'7161' : "Voix, chat vidéo et jeux",
'7162' : "Web et vidéo Web",
'7163' : "E-mail et RPV",
'7164' : "Téléchargements, torrents et autres",
'7170' : "octets/sec",
'7174' : "Heure/heures:minutes",
'326' : "Réseau local",
'327' : "MAC LAN/WAN",
'332' : "Serveur DHCP",
'333' : "Paramètres Internet",
'334' : "Adresse MAC WAN",
'337' : "IP WAN",
'338' : "Passerelle par défaut",
'339' : "Adresse DNS",
'gtGuestName' : "SSID invité",
'gtGuestKey' : "Clé invité",
'347' : "Vous devez vous connecter avant d'apporter des modifications.",
'2022' : "Modem uniquement",
'2031' : "Se connecter",
'2032' : "Se déconnecter",
'2033' : "Marge d'immunité au bruit",
'2034' : "Aval",
'2035' : "Amont",
'2036' : "Atténuation (dB)",
'2037' : "Puissance de sortie (dBm)",
'2038' : "Débit de données (Kb/s)",
'tDashboard' : "Bienvenue au tableau de bord de votre routeur Belkin !",
'rtFeature' : "Caractéristiques",
'rtLink' : "Liens routeur",
'p1310t001' : "Détails de la connexion",
'p1310t002' : "Tester à nouveau la connexion",
'p1310t003' : "Dernière vérification",
'p1310t004' : "Vitesse en aval",
'p1310t005' : "Vitesse en amont",
'p1000t001' : "Dispositifs connectés",
'p1000t002' : "Tout voir",
'2501' : "Veuillez définir les paramètres de configuration suivants",
'2502' : "Adresse du réseau",
'2503' : "Masque de sous-réseau",
'2504' : "Passerelle",
'396' : "Les nombres du masque de sous-réseau sont incorrects.",
'1231' : "La passerelle est incorrecte !",
'1361' : "Adresse IP incorrecte : le premier nombre doit être compris entre 1 et 254.",
'1800' : "L'adresse IP et le masque de sous-réseau ne concordent pas.",
'Support1t011' : "Pour tout savoir.",
'Support2t011' : "Pour tout savoir.",
'Support2t012' : "Accédez à l'URL suivante sur un appareil connecté à Internet et découvrez comment résoudre le problème vous-même : <STRONG>www.belkin.com/support/asdlkj</STRONG>",
'Support3t011' : "Pour tout savoir.",
'Support3t012' : "Accédez à l'URL suivante sur un appareil connecté à Internet et découvrez comment résoudre le problème vous-même : <STRONG>www.belkin.com/support/asdlkj</STRONG>",
'Support6t036' : "Pour tout savoir.",
'425' : "Ceci rétablira les paramètres d'origine de votre routeur. Nous vous recommandons d'<a href=\"ut_save.html\">enregistrer/de sauvegarder vos paramètres</a> avant de restaurer les paramètres d'origine. Cela vous permettra de les rétablir plus tard si vous perdez les paramètres ou s'ils sont modifiés.",
'426' : "Attention ! Tous vos paramètres seront perdus !Souhaitez-vous continuer ? »",
'427' : "La restauration des paramètres par défaut peut prendre jusqu'à $s secondes. N'éteignez pas le routeur pendant le processus.",
'428' : "Les paramètres par défaut ne seront pas restaurés. Aucun paramètre ne sera perdu !",
'429' : "Rétablir les paramètres par défaut",
'301' : "Cette commande fait redémarrer votre routeur sur une base hebdomadaire pour un réseau sans tracas.",
'302' : "Initialiser automatiquement mon routeur",
'303' : "Définir les jours",
'304' : "Définir l'heure",
'527' : "Cette commande vous permet de définir les paramètres de votre routeur avec une quelconque configuration enregistrée précédemment.",
'528' : "Restaurer",
'529' : "Entrez le nom du fichier contenant les paramètres sauvegardés.",
'530' : "Voulez-vous poursuivre et rétablir les paramètres ?",
'531' : "Suite au rétablissement des paramètres, l'appareil peut ne pas répondre aux commandes pendant une période pouvant aller jusqu'à environ une minute.\n\nCeci est normal. N'éteignez pas votre routeur pendant ce délai.",
'451' : "La sauvegarde de votre configuration vous permettra de la rétablir plus tard si vous perdez les paramètres ou s'ils sont modifiés. Nous vous recommandons d'enregistrer vos paramètres avant de faire la mise à jour du micrologiciel.",
'539' : "Enregistrer",
'130' : "Vous n'avez pas entré toutes les adresses IP ou certains numéros entrés ne sont pas valides. Le numéro de l'adresse IP doit être compris entre 1 et 254.",
'541' : "Mot de passe administrateur:",
'542' : "Le routeur est livré SANS mot de passe défini. Si, par souci de sécurité, vous désirez ajouter un mot de passe, vous pouvez en définir un ici.",
'543' : "Entrez le mot de passe actuel",
'544' : "Entrez le nouveau mot de passe",
'545' : "Confirmer le nouveau mot de passe",
'546' : "Temporisation de la connexion",
'547' : "(1-99 minutes)",
'548' : "Heure et fuseau horaire :",
'549' : "Janvier",
'550' : "Définissez votre fuseau horaire. Si vous résidez dans un pays qui applique l'heure d'été, cochez cette case.",
'551' : "Fuseau horaire",
'606' : "Horaires d'été",
'607' : "Ajuster automatiquement à l'heure d'été",
'608' : "Gestion à distance :",
'609' : "FONCTION AVANCÉE !",
'610' : "La gestion à distance vous permet d'apporter des changements aux paramètres du routeur où que vous soyez sur Internet. Avant d'activer cette fonction,",
'611' : "ASSUREZ-VOUS D'AVOIR ENTRÉ UN MOT DE PASSE ADMINISTRATEUR.",
'642' : "Activer la prise en main à distance présente un risque pour la sécurité de votre réseau. Ne l'activez que pour de courtes périodes au besoin, et désactivez la fonction lorsqu'elle ne sert pas. N'oubliez pas de définir un mot de passe.",
'612' : "N'importe quelle adresse IP peut gérer le routeur à distance.",
'613' : "Seule cette adresse IP peut gérer le routeur à distance",
'614' : "Activer/désactiver gestion à distance",
'615' : "Le port d'attribution a été utilisé dans Virtual Server.",
'616' : "L'adresse IP d'attribution est en conflit avec l'adresse IP WAN actuelle.",
'617' : "Activation de l'UPnP :",
'618' : "Vous permet d'activer/désactiver la fonction UPnP du routeur. Si vous utilisez des applications prenant en charge l'UPnP, cette fonction permettra à ces applications de configurer automatiquement le routeur.",
'619' : "Activer/désactiver l'UPnP",
'620' : "Activer la mise à jour automatique du micrologiciel :",
'621' : "Vous permet de vérifier automatiquement la disponibilité de mises à jour pour votre routeur.",
'622' : "Activer/désactiver la mise à jour automatique du micrologiciel",
'623' : "Le mot de passe actuel est incorrect",
'624' : "Les nouveaux mots de passe entrés sont différents. Veuillez réessayer.",
'626' : "La longueur du mot de passe est incorrecte. La longueur du mot de passe doit être comprise entre 3 et 12 caractères",
'628' : "Avant d'activer cette fonction, il est fortement recommandé que vous ajoutiez un mot de passe administrateur.",
'629' : "Serveur NTP principal",
'630' : "Serveur NTP secondaire",
'640' : "Port d'accès distant",
'738' : "Les nombres entrés comme temps mort sont incorrects. La valeur doit être un nombre entier compris entre 1 et 99.",
'796' : "L'activation du Mode Turbo permet au routeur ou au point d'accès d'utiliser le frame bursting pour obtenir un débit maximal entre le routeur ou le point d'accès et les clients 802.11g, Le mode Turbo fonctionne uniquement auprès de clients 802.11g prenant en charge le mode Turbo. Les clients 802.11g de Belkin possédant les pilotes les plus récents prennent en charge le mode Turbo. Les clients qui ne prennent pas en charge le Mode Turbo fonctionneront de façon habituelle si le Mode Turbo est activé.",
'1282' : "Février",
'1283' : "Mars",
'1284' : "Avril",
'1285' : "Mai",
'1286' : "Juin",
'1287' : "Juillet",
'1288' : "Août",
'1289' : "Septembre",
'1290' : "Octobre",
'1291' : "Novembre",
'1292' : "Décembre",
'1373' : "Australie",
'1374' : "Nouvelle-Zélande",
'1375' : "Amérique du Nord",
'1376' : "Europe",
'1377' : "Asie/Pacifique",
'2300' : "(GMT-12:00) Enewetak, Kwajalein",
'2301' : "(GMT-11:00) Îles Midway, Samoa",
'2302' : "(GMT-10:00) Hawaii",
'2303' : "(GMT-09:00) Alaska",
'2304' : "(GMT-08:00) Pacifique (É.U. et Canada) ; Tijuana",
'2305' : "(GMT-07:00) Arizona",
'2306' : "(GMT-07:00) Montagnes Rocheuses (USA et Canada)",
'2307' : "(GMT-06:00) Centre (USA et Canada)",
'2308' : "(GMT-06:00) Mexico City",
'2309' : "(GMT-06:00) Tegucigalpa",
'2310' : "(GMT-06:00) Saskatchewan",
'2311' : "(GMT-05:00) Bogota, Lima, Quito",
'2312' : "(GMT-05:00) Est (USA et Canada)",
'2313' : "(GMT-05:00) Indiana (Est)",
'2314' : "(GMT-04:00) Atlantique (Canada)",
'2315' : "(GMT-04:00) Caracas, La Paz",
'2316' : "(GMT-04:00) Santiago",
'2317' : "(GMT-03:00) Terre-Neuve",
'2318' : "(GMT-03:00) Brasilia",
'2319' : "(GMT-03:00) Buenos Aires, Georgetown",
'2320' : "(GMT-02:00) Centre-Atlantique",
'2321' : "(GMT-01:00) Açores, Iles du Cap-Vert",
'2322' : "(GMT) Casablanca, Monrovia",
'2323' : "(GMT) Heure de Greenwich : Lisbonne, Londres, Edimbourg",
'2324' : "(GMT) Heure de Greenwich : Dublin",
'2325' : "(GMT+01:00) Amsterdam, Berlin, Berne, Rome",
'2326' : "(GMT+01:00) Stockholm, Vienne, Belgrade",
'2327' : "(GMT+01:00) Bratislava, Budapest, Ljubljana",
'2328' : "(GMT+01:00) Prague, Bruxelles, Copenhague, Madrid",
'2329' : "(GMT+01:00) Paris, Sarajevo, Skopje",
'2330' : "(GMT+01:00) Varsovie, Zagreb",
'2331' : "(GMT+02:00) Athènes, Istanbul, Minsk, Vilnius, Sofia",
'2332' : "(GMT+02:00) Bucarest",
'2333' : "(GMT+02:00) Le Caire",
'2334' : "(GMT+02:00) Harare, Pretoria",
'2335' : "(GMT+02:00) Helsinki, Riga, Tallinn",
'2336' : "(GMT+02:00) Israël",
'2337' : "(GMT+03:00) Bagdad, Koweït, Nairobi, Riyad",
'2338' : "(GMT+03:00) Moscou, Saint-Pétersbourg, Volgograd, Kazan",
'2339' : "(GMT+03:00) Téhéran",
'2340' : "(GMT+04:00) Abou Dhabi, Muscat, Tbilissi",
'2341' : "(GMT+04:00) Kaboul",
'2342' : "(GMT+05:00) Islamabad, Karachi, Iekaterinbourg",
'2343' : "(GMT+05:30) Delhi",
'2344' : "(GMT+06:00) Almaty, Dacca",
'2345' : "(GMT+07:00) Bangkok, Jakarta, Hanoi",
'2346' : "(GMT+08:00) Pékin, Chongqoing, Ouroumtsi",
'2347' : "(GMT+08:00) Hong Kong, Perth, Singapour, Taipei",
'2348' : "(GMT+09:00) Osaka, Sapporo, Tokyo",
'2349' : "(GMT+09:00) Séoul",
'2350' : "(GMT+9:30) Adelaïde, Darwin",
'2351' : "(GMT+10:00) Brisbane",
'2352' : "(GMT+10:00) Canberra, Melbourne, Sydney",
'2353' : "(GMT+10:00) Hobart",
'2354' : "(GMT+10:00) Guam, Port Moresby",
'2355' : "(GMT+11:00) Magadan, Iles Salomon, Nouvelle-Calédonie",
'2356' : "(GMT+12:00) Wellington, Auckland",
'2357' : "(GMT+12:00) Fidji",
'2358' : "(GMT+13:00) Nuku'alofa",
'2370' : "D",
'2371' : "L",
'2372' : "Ma",
'2373' : "Me",
'2374' : "J",
'2375' : "V",
'2376' : "S",
'2401' : "Mode Éco",
'2402' : "Diminuer la luminosité des voyants",
'2403' : "Désactiver radio de",
'2404' : "sauf",
'2405' : "Cette fonction vous permet de diminuer la luminosité des voyants à l'avant du routeur pour économiser de l'énergie. Vous pouvez également désactiver la fonction de radio sans fil à certaines heures.",
'2406' : "L'heure de départ ne peut pas être plus tard que l'heure de fin !",
'322' : "Version du micrologiciel",
'431' : "De temps à autre, Belkin peut lancer une nouvelle version du micrologiciel du routeur. Ces mises à jour contiennent des améliorations et des correctifs pour votre routeur.",
'432' : "<b>REMARQUE :</b>veuillez faire une <a href=\"ut_save.html\">copie de vos paramètres</a> avant de mettre à jour le micrologiciel.",
'433' : "Cliquez ici",
'434' : "pour vous rendre à la page Enregistrer/sauvegarder les paramètres.",
'435' : "Rechercher une nouvelle version du micrologiciel",
'436' : "Vérifier le micrologiciel",
'437' : "Mettre à jour le micrologiciel",
'438' : "Mettre à jour",
'439' : "Veuillez spécifier où se trouve le fichier de mise à niveau. Entrez le nom du fichier ainsi que son chemin d'accès ou cliquez sur « Parcourir » pour accéder à l'emplacement du fichier.",
'440' : "Voulez-vous vraiment poursuivre la mise à jour ?",
'441' : "À la fin de la mise à niveau, il est possible que le routeur ne réponde pas aux commandes pendant une minute. Ceci est normal. Ne fermez ni ne redémarrez votre routeur pendant cette période.",
'1198' : "Mise à jour du micrologiciel en cours.",
'534' : "Redémarrer le routeur",
'535' : "Voulez-vous vraiment redémarrer le routeur ? Redémarrer le routeur n'affectera en rien votre configuration",
'536' : "Allouez jusqu'à $s secondes au routeur pour redémarrer. Ne débranchez pas le routeur avant que le processus de redémarrage ne soit complété.",
'7001' : "Profitez pleinement de votre musique, de vos photos et de vos vidéos en toute simplicité, par l'entremise d'un périphérique DLNA connecté à votre réseau. Powered by Twonky.",
'7002' : "Serveur DLNA",
'7003' : "Nom du serveur",
'7004' : "Disques partagés :",
'7005' : "Prêt",
'7006' : "Indexation en cours...",
'7007' : "Service:",
'7008' : "vidéos",
'7009' : "chansons",
'7010' : "photos",
'7011' : "Non partagé avec le réseau.",
'7012' : "Aucun disque USB connecté au routeur.",
'7016' : "Actualiser l'index",
'7017' : "Donnez un nom convivial à votre serveur multimédia.",
'7018' : "Caractère non autorisé",
'7019' : "Vous avez plus de fichiers multimédia que votre routeur peut indexer, ainsi nous vous présentons les premiers {number}",
'7020' : "fichiers.",
'7021' : "Twonky est une gamme de logiciels créés par PacketVideo Corporation (PV).",
'7022' : "Impossible d'indexer un disque en lecture seule.",
'7023' : "Mo",
'7024' : "Go",
'7025' : "To",
'7026' : "vidéo",
'7027' : "chanson",
'7028' : "photo",
'770' : "Utilisez cette option pour les connexions Bigpond Cable et OptusNet Cable seulement. ",
'771' : "IMPORTANT :",
'775' : "3) Rebranchez le câble d'alimentation sur le routeur Belkin.",
'776' : "Pour vérifier que vous êtes bien connecté à Internet, ouvrez un navigateur comme Internet Explorer, Firefox ou Safari, et assurez-vous de pouvoir ouvrir des pages Web.",
'731' : "Nom d'utilisateur",
'489' : "Mot de passe",
'732' : "Entrez à nouveau le mot de passe.",
'756' : "Veuillez entrer à nouveau le mot de passe !",
'1379' : "Vous n'avez pas entré les nombres de l'adresse IP ou certains nombres entrés sont incorrects. L'adresse IP doit être x.y.y.x (où y est un nombre entre 0 et 255 et x un nombre entre 1 et 254).",
'709' : "Pour configurer vos paramètres d'adressage IP dynamique, entrez les informations de connexion ci-dessous et cliquez sur « Enregistrer ».",
'710' : "Nom d'hôte",
'711' : "Nom d'hôte = nom requis par certains FAI pour la connexion à leur système.",
'712' : "Modifier l'adresse MAC WAN",
'330' : "Adresse IP",
'331' : "Masque de sous-réseau",
'659' : "Valeur MTU incorrecte. Elle doit être comprise entre 500...1500.",
'730' : "Pour configurer vos paramètres PPPoE, entrez les informations de connexion ci-dessous et cliquez sur « Enregistrer ».",
'733' : "Nom de service (facultatif)",
'734' : "MTU (500-1500)",
'735' : "Veuillez ne pas modifier le paramètre MTU sauf si votre FAI requiert une valeur différente",
'736' : "Déconnecter après",
'737' : "minutes d'inactivité.",
'741' : "Valeur MTU incorrecte",
'2005' : "IP attribuée par le FAI",
'2021' : "Cliquez ici pour entrer vos paramètres DNS",
'2023' : "Les guillemets doubles ne sont pas autorisés.",
'2024' : "Le nom d'utilisateur contient des caractères non autorisés",
'2025' : "La barre oblique inversée n'est pas permise.",
'2030' : "Vous n'avez pas entré les nombres de la passerelle par défaut ou certains nombres saisis sont incorrects. Ils doivent être compris entre 0 et 255",
'2052' : "Le mot de passe de l'utilisateur contient des caractères non autorisés (<,> et &)",
'691' : "La connexion de type Dynamique est la plus courante. Si vous utilisez un modem câble, vous avez très probablement une connexion dynamique. Si vous utilisez un modem câble ou n'êtes pas certain de votre type de connexion, utilisez celle-ci.",
'723' : "Incluant les FAI qui exigent un nom d'hôte et ceux qui lient la connexion à une adresse MAC spécifique.",
'693' : "Une connexion de type Adresse IP Statique est moins courante que les autres types de connexion. Utilisez ce type de sélection si votre FAI vous a attribué une adresse IP qui ne change jamais.",
'724' : "Le routeur prend en charge les connexions aux FAI attribuant une adresse IP statique.",
'695' : "Si vous utilisez un modem ADSL et/ou si votre FAI vous a donné un nom d'utilisateur et un mot de passe, votre type de connexion est PPPoE. Sélectionnez ce type de connexion.",
'725' : "Le routeur prend en charge les connexions dynamiques qui exigent une connexion PPPoE pour l'authentification.",
'697' : "Certains FAI utilisent le protocole PPTP pour connecter les abonnés à la centrale. Cela vous oblige à entrer quelques paramètres supplémentaires que votre FAI doit fournir. Après avoir enregistré vos modifications, l'indicateur d'état d'Internet sera vert si vous avez réussi.",
'726' : "N'utilisez que si votre FAI nécessite la méthode de connexion PPTP.",
'699' : "Utilisez cette option pour les connexions Bigpond Cable et OptusNet Cable seulement.",
'728' : "Pour utilisateurs Australiens SEULEMENT. Le routeur prend en charge les connexions à Telstra BigPond.",
'2019' : "Pour configurer vos paramètres du modem, entrez les informations de connexion ci-dessous et cliquez sur « Enregistrer ».",
'tBackToConnectionType' : "Retour au type de connexion",
'759' : "Pour configurer vos paramètres d'adressage IP statique, entrez les informations de connexion ci-dessous et cliquez sur « Enregistrer ».",
'761' : "Masque de sous-réseau",
'762' : "Adresse de passerelle du FAI",
'754' : "Cliquez ici pour entrer vos paramètres DNS",
'715' : "Chaque dispositif sur votre réseau possède une adresse matérielle unique (adresse MAC) qui l'identifie par rapport aux autres dispositifs sur le réseau et l'Internet.  Quelques fournisseurs d'accès Internet (FAI) exigent que vous mettiez l'adresse MAC de votre carte réseau ou ancien routeur dans les paramètres du routeur. En cas de doute, entrez simplement l'adresse MAC de l'ordinateur originellement connecté au modem avant d'installer le routeur.",
'716' : "Adresse MAC WAN",
'717' : "Cloner l'adresse MAC de l'ordinateur",
'718' : "Cloner",
'721' : "Vous pouvez configurer votre routeur selon les paramètres de votre FAI à l'onglet Internet/WAN. Le routeur peut pratiquement se connecter à tous les systèmes de FAI, si bien sûr vous avez configuré votre routeur avec les paramètres appropriés à votre type de connexion. Pour configurer le routeur selon les paramètres de votre FAI, cliquez sur « Type de Connexion » dans l'onglet « Internet / WAN », sur le côté gauche de l'écran.",
'722' : "Types de connexions prises en charge :",
'htWANMainContent' : "Sélect. type de connexion :",
'700' : "Suivant",
'744' : "Compte PPTP",
'745' : "Mot de passe",
'746' : "Entrez à nouveau le mot de passe.",
'747' : "Nom d'hôte",
'1770' : "IP attribuée par le FAI",
'1771' : "Oui",
'1772' : "Non",
'1773' : "Adresse du service",
'750' : "Masque de sous-réseau",
'778' : "Le routeur peut être configuré pour agir strictement en tant que point d'accès, outre-passant entièrement les fonction d'acheminement et de pare-feu. Pour ce faire, sélectionnez « Activer » et entrez l'adresse IP que vous désirez attribuer au point d'accès.",
'779' : "Mode Point d'accès :",
'781' : "Spécifiez le masque de sous-réseau",
'801' : "Mode de sécurité",
'806' : "Vous pouvez configurer les paramètres de sécurité/chiffrement ici. La Sécurité devrait être activée pour assurer la sécurité maximale du réseau sans fil. Le WPA (Wireless Protected Access) propose un changement dynamique de la clé et constitue la meilleure option de sécurité. Dans les environnements sans fil, là où aucun des périphériques ne prend en charge le WPA, le mode WEP (Wired Equivalent Privacy) devrait être utilisé.",
'377' : "Automatique",
'487' : "MARCHE",
'488' : "ARRÊT",
'787' : "Pour apporter des modifications aux paramètres du routeur, veuillez le faire ici. Cliquez sur « Enregistrer » pour enregistrer les paramètres.",
'788' : "Canal sans fil",
'789' : "SSID",
'790' : "Mode sans-fil",
'794' : "Diffuser le SSID",
'797' : "Mode Protégé",
'1300' : "Canal d'extension",
'1301' : "Bande passante",
'1304' : "802.11e/WMM QoS",
'852' : "La clé pré-partagée doit être composée de 8 à 63 caractères ou 64 chiffres hex",
'856' : "Wi-Fi Protected Access avec clé pré-partagée : la clé est un mot de passe, sous la forme d'un mot, d'une phrase ou d'une série de lettres et de chiffres. La clé doit être composée de <b>8</b> à <b>63</b> caractères, et peut inclure des espaces et des symboles, ou de <b>64</b> caractères hexadécimaux (0-F) seulement. Chaque client se connectant à un réseau doit utiliser la même clé (clé pré-partagée).",
'115' : "Vous n'avez pas entré tous les chiffres hexadécimaux ou certains chiffres hexadécimaux entrés ne sont pas valides. Un chiffre hexadécimal peut être un nombre de 0 à 9 ou une lettre de A à F.",
'308' : "<b>SPI</b> Stateful Packet Inspection. SPI est le type de sécurité Internet pour entreprises que propose votre passerelle réseau domestique HomeConnect. Grâce au SPI, la passerelle se comporte comme un « pare-feu » et protège votre réseau contre les pirates informatiques.",
'808' : "REMARQUE :",
'809' : "Pour générer des paires hexadécimales à l'aide d'une expression mot de passe, entrez l'expression ici et appuyez sur le bouton à droite.",
'810' : "Expression mot de passe",
'811' : "Générer",
'812' : "Veuillez entrer une expression mot de passe",
'814' : "Clé",
'818' : "(paires hexadécimales)",
'296' : "<b>Adresse IP</b> IP est l'acronyme d'Internet Protocol. Une adresse IP est constituée par une série de quatre nombres séparées par des points. Elle permet d'identifier un ordinateur hôte Internet unique. Exemple : 192.34.45.8.",
'298' : "<b>FAI</b> Fournisseur d'accès à Internet. Un FAI est une entreprise qui permet aux individus et aux autres entreprises de se connecter à Internet.",
'807' : "(paires de 13 chiffres hexadécimaux)",
'813' : "La clé est incomplète",
'821' : "est incomplète.",
'1190' : "<br>Pour enregistrer votre nom d'hôte DNS dynamique, visitez http://www.dyn.com<br>",
'1339' : "Il est préférable d'utiliser le WPA/WPA2 lorsque le WPS est activé.",
'1363' : "En cours - Veuillez patienter...",
'1364' : "Erreur détectée – Veuillez réessayer.",
'1365' : "Erreur de chevauchement de session : veuillez patienter 60 secondes avant de redémarrer la procédure ou effectuez une connexion manuelle au réseau à l'aide de l'utilitaire client",
'1366' : "Réussite – Le dispositif est connecté au routeur.",
'1370' : "Le PIN n'est pas valide! Le PIN du périphérique comprend quatre ou huit chiffres. Vérifiez et entrez le PIN à nouveau.",
'1620' : "Initialisation - Veuillez démarrer la PBC WPS sur le périphérique client dans un délai de 2 minutes.",
'1621' : "Démarrage - Veuillez démarrer WPS dans le périphérique client dans les 2 minutes.",
'1622' : "Délai d'attente dépassé - Aucun client ne s'est connecté au routeur.",
'1623' : "Message Wi-Fi Protected Setup",
'1393' : "Bouton WPS",
'1320' : "Le Wi-Fi Protected Setup (WPS) est la méthode standard de l'industrie pour simplifier la configuration et la gestion de la sécurité des réseaux Wi-Fi. Désormais, vous pouvez facilement configurer et vous connecter à un réseau 802.11 compatible WPA avec des périphériques certifiés WPS, en utilisant la méthode du numéro d'identification personnel (PIN) ou celle de la configuration par bouton de commande (PBC). Les périphériques moins récents qui ne sont pas compatibles WPS peuvent être ajoutés au réseau à l'aide de la méthode de configuration manuelle traditionnelle.",
'1321' : "Méthode Personal Information Number (PIN)",
'1322' : "Entrez le PIN du périphérique client et cliquez sur « Inscrire ». Démarrez ensuite le WPS sur le périphérique client depuis son utilitaire sans fil ou son application WPS, dans un délai de 2 minutes.",
'1323' : "Entrez le code confidentiel du périphérique client",
'1324' : "Inscrire",
'1325' : "Si un registraire externe est disponible, vous pouvez également entrer le code PIN du routeur sur le registraire externe. Pour modifier le code PIN du routeur, cliquez sur « Générer un nouveau PIN » ou cliquez sur « Restaurer code PIN par défaut » pour réinitialiser le code PIN à la valeur par défaut d'usine.",
'1326' : "PIN routeur",
'1327' : "Générer nouveau code PIN",
'1328' : "Restaurer code PIN par défaut",
'1329' : "Méthode Push Button Configuration (PBC)",
'1330' : "Maintenez le bouton PBC enfoncé sur votre routeur pendant 3 secondes ou cliquez sur « Démarrer PBC ». Démarrez ensuite la PBC sur le périphérique que vous souhaitez connecter au routeur dans les 2 minutes qui suivent.",
'1331' : "Démarrer PBC",
'1332' : "Méthode de configuration manuelle",
'1333' : "Pour les périphériques clients sans WPS, configurez manuellement le périphérique avec les paramètres qui suivent.",
'1334' : "Sécurité sans fil",
'1336' : "Authentification réseau",
'1337' : "Chiffrement de données",
'1338' : "Clé réseau (PSK)",
'1340' : "Déverrouiller le PIN du routeur",
'1341' : "PIN du routeur désactivé en raison d'un trop grand nombre d'échecs de connexion",
'1390' : "Échec de la somme de contrôle du PIN ! Vérifiez et entrez le PIN à nouveau.",
'1391' : "Le PIN n'est pas valide! Le code PIN du périphérique doit comprendre huit chiffres. Vérifiez et entrez le PIN à nouveau.",
'1392' : "Configuré",
'1396' : "Configurer manuellement la sécurité sans fil",
'1397' : "sécurité sans fil",
'common_err1' : "%s est vide.",
'upgrade_err2' : "Mise à jour avortée car ressources insuffisantes. Échec de la mise à jour.\nVeuillez réessayer lorsque le système n'est pas en cours d'utilisation (aucun trafic Internet)",
'upgrade_err3' : "Envoi impossible, veuillez contacter l'administrateur.",
'upgrade_err4' : "Fichier micrologiciel trop important, échec de la mise à jour.",
'upgrade_err5' : "La dernière version du micrologiciel est déjà installée.",
'upgrade_err6' : "Le fichier de mise à jour du micrologiciel semble être corrompu. Veuillez télécharger le fichier à nouveau et réessayer.",
'show10' : "Liste de Clients DHCP",
'show54' : "Paramètres de connexion",
'btn2' : "Appliquer",
'cff1' : "Vérification du micrologiciel réussie",
'PM2' : ":30: PM",
'AM2' : ":30: AM",
'Dimicons' : "Luminosité",
'EcoTo' : "à",
'fvrm' : "Veuillez désactiver la gestion à distance. Son port est en conflit avec le port d'entrée de l'un de vos serveurs virtuels.",
'lsipm2' : "Adresse IP LAN non valide, le dernier numéro ne peut être ni 0 ni 255",
'lsldnm' : "Nom du domaine local non valide : `~!@#$%^&*()_+[]{}\|;:'\"<>/?.,",
'lsipm5' : "L'adresse IP choisie doit être une adresse IP non-acheminable.192.168.x.x (où x est un nombre compris entre 0 et 255.) \n10.x.x.x (où x est un nombre compris entre 0 et 255.)\n172.y.x.x (où y est un nombre compris entre 16 et 31, et x est compris entre 0 et 255.)",
'ufy4' : "La restauration des paramètres par défaut peut prendre jusqu'à 60 secondes. N'éteignez pas le routeur pendant le processus.",
'ufe11' : "À la fin du processus de mise à niveau, le routeur peut ne pas répondre aux commandes pendant une période pouvant aller jusqu'à environ 180 secondes. Ceci est normal. Ne fermez ni ne redémarrez votre routeur pendant cette période.",
'ur5' : "Allouez jusqu'à 30 secondes au routeur pour redémarrer. Ne débranchez pas le routeur avant que le processus de redémarrage ne soit complété.",
'ur6' : "Allouez jusqu'à 60 secondes au routeur pour redémarrer. Ne débranchez pas le routeur avant que le processus de redémarrage ne soit complété.",
'usys83' : "Le nouveau mot de passe et le mot de passe de confirmation ne correspondent pas.",
'usys83_1' : "Les mots de passe ne correspondent pas.",
'usys85_1' : "Le mot de passe d'administration doit comprendre entre 3 et 12 caractères.",
'usys88' : "Le mot de passe a atteint sa longueur maximale !",
'usys89' : "AM",
'usys90' : "PM",
'usys92' : "Le numéro de port d'accès à distance doit être entre 1 et 65535.",
'usysipm' : "Vous n'avez pas entré les nombres de l'adresse IP ou certains nombres entrés ne sont pas valides. L'adresse IP doit être x.y.y.z (où x est un nombre entre 1 et 223, y est un nombre entre 0 et 255 et x un nombre entre 1 et 254).",
'self_healing60' : "Auto-réparation",
'chkwait' : "Recherche d'une nouvelle version du micrologiciel...",
'Europe' : "Europe",
'Australia' : "Australie et NZ",
'AsiaPacific' : "Asie/Pacifique",
'NorthAmerica' : "Amérique du Nord",
'vjs1' : "Adresse IP non valide, trop longue. Veuillez vérifier à nouveau.",
'vjs2' : "Adresse IP non valide, manque '.'. Veuillez réessayer.",
'vjs3' : "Adresse IP non valide, il manque des nombres entre '.'. Veuillez réessayer !",
'vjs4' : "Adresse IP non valide, '.' en trop. Veuillez réessayer.",
'vjs5' : "Adresse IP non valide, les nombres entre '.' sont trop grands. Veuillez réessayer !",
'vm1' : "Caractère non valide ",
'vm2' : " à la position ",
'vm3' : "Il doit s'agir de ",
'vjs6' : "Format d'année non valide. Veuillez l'entrer de nouveau (2002, par exemple)",
'vm4' : "Nombre non valide ",
'vjs8' : "Non valide, doit être compris entre 1970..2037",
'vjs9' : "Format de mois non valide. Veuillez l'entrer de nouveau (01...12, par exemple)",
'vjs161' : " non comprise ",
'vjs162' : " le sous-réseau",
'vjs163' : "La plage DHCP permise est ",
'vjs17' : "Les deux mots de passe entrés sont différents. Veuillez vérifier à nouveau.",
'vjs18' : "Veuillez entrer un numéro de port de début.",
'vjs19' : "Le numéro de port de début doit être inférieur à celui du port de fin.",
'vjs23' : "Adresse MAC non valide. Il s'agit d'une adresse de diffusion.",
'vjs24' : "Adresse MAC non valide. Il s'agit d'une adresse vide.",
'vjs25' : "Adresse MAC non valide. Il s'agit d'une adresse de multidiffusion.",
'vjs26' : "Adresses IP de début et de fin ne sont pas valides. L'adresse IP de fin doit être supérieure à celle du début.",
'vjs28' : "Format de masque de sous-réseau non valide.",
'vjs29' : "Format invalide. Masque de réseau soit être 255.255.255.0 ou 255.255.255.128 ou 255.255.255.192 ou 255.255.255.224 ou 255.255.255.240 ou 255.255.255.248 ou 255.255.255.252 ou 255.255.255.254",
'vjs30' : "Adresse IP non valide. Le dernier numéro ne peut être ni 0 ni 255.",
'vjs31' : "Adresse IP LAN non valide, le premier numéro ne peut pas être 127.",
'vjs32' : "Adresse IP LAN non valide, ne peut être 0.0.0.0",
'vjs33' : "Adresse IP LAN non valide, doit être inférieure à 224.0.0.0",
'vjs42' : "Les nombres du masque de sous-réseau entrés ne sont pas valides.",
'vjs45' : "Spécifier l'adresse IP",
'vjs46' : "est non valide, veuillez d'abord corriger !",
'wcc2' : "Sélectionnez votre type de connexion :",
'wcc13' : "L2TP",
'wcc14' : "Certains FAI utilisent le protocole L2TP pour connecter les abonnés à la centrale. Cela vous oblige à entrer quelques paramètres supplémentaires que votre FAI doit fournir. Après avoir enregistré vos modifications, l'indicateur d'état d'Internet sera vert si vous avez réussi.",
'wds4_1' : "Adresse DNS principale",
'wds7' : "Vous devez entrer les paramètres DNS fournis par votre FAI si vous n'utilisez pas la fonction DNS automatique",
'wds8' : "Pour modifier le DNS, allez d'abord à %s Filtres de site web %s, puis sélectionnez « Aucun filtre ».",
'wmc6' : "L'adresse MAC WAN ne peut être identique à l'adresse MAC LAN. Veuillez faire un autre choix.",
'wdd9 ' : "Aucun service DDNS sélectionné.\n",
'wdd10' : "Aucun service DDNS sélectionné, toutes les données des cette page seront perdues. Continuer ?",
'wm10b' : "N'utilisez que si votre FAI nécessite la méthode de connexion L2TP.",
'pm' : "Votre service est dans l'impossibilité de vérifier le mot de passe entré. Veuillez confirmer l'entrée de votre mot de passe.",
'wpp17' : "Compte L2TP",
'wpp18' : "Mot de passe L2TP",
'wpp19' : "Veuillez entrer vos identifiants de compte L2TP",
'wpp23' : "Attribution d'adresse IP",
'wpp24' : "Utiliser l'adresse IP fixe",
'wpp25' : "Obtenir dynamiquement du FAI",
'wppa7' : "Mon adresse IP",
'wppa9' : "ID de connexion (optionnel)",
'wppa13' : "Veuillez entrer votre compte PPTP",
'wppa18' : "Nom de service non valide.",
'ws2' : "Pour configurer vos paramètres d'adressage IP statique, entrez les informations de connexion ci-dessous et cliquez sur « Appliquer les modifications ».",
'sm_1' : "Le masque de sous-réseau entré est non valide.",
'ws8' : "Veuillez entrer/valider vos paramètres d'adresse DNS à l'écran suivant.",
'wt2' : "Cliquez sur « Appliquer les modifications » pour redémarrer le routeur. Après le redémarrage du routeur, vous devrez procéder comme suit",
'wt3' : "1) Débranchez le câble d'alimentation du modem câble et du routeur Belkin",
'wt4' : "2) Rebranchez le câble d'alimentation sur le modem câble. Attendez que tous les voyants du modem cessent de clignoter",
'wt5' : "3) Rebranchez le câble d'alimentation sur le routeur Belkin",
'wt6' : "Pour vérifier que vous êtes bien connecté à Internet, ouvrez un navigateur comme Internet Explorer, Firefox ou Safari, et assurez-vous de pouvoir ouvrir des pages Web.",
'wlad2' : "Activer/Désactiver",
'wlc2' : "Pour apporter des modifications aux paramètres du routeur, veuillez le faire ici. Cliquez sur « Enregistrer » pour enregistrer les paramètres.",
'wlcgb' : "802.11b+g",
'wlcg' : "802.11g",
'wlcb' : "802.11b",
'wlc20' : "20 MHz",
'wlc22' : "20/40 MHz",
'wlcoff' : "ARRÊT",
'wlcngb1' : "802.11b & 802.11g & 1x1 802.11n",
'wlcn1' : "1x1 802.11n",
'wlcngb2' : "802.11b&802.11g&802.11n",
'wlcn2' : "802.11n",
'wlcgn' : "802.11g+n",
'wlca' : "802.11a",
'wlcan' : "802.11a & 802.11n",
'wlc26' : "Masquer le nom de votre réseau désactivera le WPS.",
'wlc27' : "Modifier le type de sécurité désactivera le WPS.",
'wlc28' : "La fonction WPS est désactivée en raison de votre <A href=%s><B>type de sécurité sans fil</B></A>.",
'wlc29' : "Le WPS est désactivé parce que vous avez masqué le nom de votre réseau (SSID).",
'wlc30' : "La fonction WPS est désactivée en raison du masquage du nom de votre réseau (SSID) ou de votre <A href=%s><B>type de sécurité sans fil</B></A>.",
'wlc31' : "Activer le WPS affichera le nom de votre réseau (SSID).",
'wlc32' : "Activer le WPS modifiera le type de sécurité avec WPA/WPA2. Votre mot de passe réseau actuel fonctionne très bien.",
'wlc33' : "Activer le WPS affichera le nom de votre réseau (SSID) et modifiera le type de sécurité avec WPA/WPA2. Votre mot de passe réseau actuel fonctionne très bien.",
'wle3a' : "WPA PSK",
'wle3b' : "WPA2-PSK",
'wle3c' : "WPA-PSK + WPA2-PSK",
'wps1' : "Wi-Fi Protected Setup (WPS)",
'wps3' : "Veuillez configurer la sécurité sans fil",
'wps17' : "Pour les périphériques clients sans WPS, exécutez l'assistant de sécurité Belkin à partir du CD ou effectuez manuellement la configuration avec les paramètres qui suivent :",
'wps23' : "WPA+WPA2-Personal (PSK)",
'wps25' : "TKIP+AES",
'wps27' : "Clé réseau (WEP) :",
'wps28_1' : "VIDE",
'wle11' : "Clé 1",
'wle12' : "Clé 2",
'wle13' : "Clé 3",
'wle14' : "Clé 4",
'wpskerr2' : "La clé doit être composée de 8 à 63 caractères, et peut inclure des espaces et des symboles, ou de 64 caractères hexadécimaux (0-F) seulement !",
'wpskerr4' : "Vous devez saisir la Clé invité",
'wpskerr7' : "La Clé invité doit comporter 8 caractères",
'wpskerr8' : "La Clé invité ne peut être identique à la Clé réseau",
'wlguest1' : "Le SSID ne peut être identique au SSID invité",
'wlguest2' : "Le SSID invité ne peut être identique au SSID",
'rs_crc' : "Échec de la restauration < CRC >",
'rs_long' : "Échec de la restauration<too long>",
'rs_disposition' : "Échec de la restauration<No Content-Disposition>",
'rs_getpid' : "Échec de la restauration<Can't get pid!>",
'rs_unmatchpid' : "Échec de la restauration<Unmatched pid>",
'msg_ddns3 ' : "Les champs du nom de domaine ne peuvent pas être vides.\n",
'msg_lan_dhcp1 ' : "Requête d'information de la passerelle.",
'msg_lan_dhcp2 ' : "Mise à jour de la base de données de configuration.",
'msg_wan_stat1 ' : "Adresse IP ",
'msg_wan_stat2 ' : " n'est pas comprise ",
'msg_wan_stat3 ' : " réseau.",
'msg_wls_chan2 ' : "Le SSID Invité ne peut être vide !\n",
'fw_not_interrupt ' : "N'INTERROMPEZ PAS LE PROCESSUS ET NE DÉBRANCHEZ PAS LE ROUTEUR. Ceci pourrait rendre votre routeur inutilisable.",
'msg_invalid_char ' : "Caractère(s) non valide(s) trouvé(s). Caractères valides : 0-9, a-z, A-Z, `~!@#$%^&*()_-+=|\\{}[]:\";\',.<>/?",
'msg_invalid_domain_char ' : "Nom du domaine local non valide'+': ~!@#$%^&*()=+{}[]|\":;\\\'?/<>,`",
'msg_invalid_char_1 ' : "Caractère(s) non valide(s) trouvé(s). Les caractères valides sont les lettres et les chiffres. Les symboles suivants ne peuvent pas être utilisés : `~!@#$%^&*()_+[]{}\\|;:\'\"<>/?.,",
'msg_hostIP_invalid ' : "L'adresse IP de l'hôte est non valide. Elle doit être différente de l'adresse IP LAN du routeur.\n",
'msg_dmzIP ' : "Adresse IP DMZ.",
'msg_blank ' : " ne peut pas être vide.\n",
'msg_space ' : "Les espaces ne sont pas admis dans %s\n",
'msg_blank_in ' : "Les espaces ne sont pas admis dans %s\n",
'msg_allspaces ' : "%s ne peut comporter que des espaces\n",
'msg_invalid ' : "Caractère(s) non valide(s) dans %s\nCaractères valides : \n%s\n\n",
'msg_check_invalid ' : "%s contient un nombre non valide\n",
'msg_valid_range ' : "%s est non valide. La plage de validité est de %s à %s\n",
'msg_invalid_mac ' : "Adresse MAC non valide.\n",
'msg_multi_mac' : "L'adresse MAC ne peut être une adresse multidiffusion.\n",
'msg_confirmDefault ' : "Avertissement !\nLe fait de charger les paramètres par défaut effacera les paramètres actuels.\nSouhaitez-vous continuer ?",
'Allowed_Services' : "Services autorisés",
'Allowing_Url' : "Autorisation de sites Web par adresse URL ",
'Allowing_Keyword' : "Autorisation des sites Web par mot-clé",
'wipv63' : "Les périphériques connectés à votre routeur peuvent parler les uns aux autres en utilisant des paquets IPv6 natifs. Les paquets IPv6 sur le réseau local seront automatiquement envoyés à toutes les interfaces LAN (ports Ethernet sur les deux réseaux sans fil, 2,4 GHz et 5 GHz).",
'wipv64' : "Lorsque l'intercommunication IPv6 est activée, les paquets IPv6 seront également copiés vers l'interface WAN.(Lorsqu'elle est activée, une connexion directe non sécurisée à Internet est créée.)",
'wipv65' : "Veuillez contacter votre FAI directement pour des informations sur leur prise en charge d'IPv6.",
'wipv67' : "Internet IPv6",
'wipv68' : "Votre réseau est compatible IPv6.",
'wipv69' : "Intercommunication",
'mf1' : "Ces pages vous permettent d'ajuster le comportement de votre routeur lorsqu'il doit traiter divers types de trafic multimédia.",
'mf2' : "Optimisez automatiquement votre connexion Internet pour différents types de trafic.",
'mf3' : "Voyez comment votre routeur est utilisé.",
'mf8' : "Enregistré le %s",
'mf10' : "Téléchargement (aval)",
'mf11' : "Téléchargement (amont)",
'mf12' : "Débit",
'mf15' : "Enregistrer les paramètres",
'mf18' : "Entrez un nombre entre {0,1-%s}.",
'mf20' : "Entre {0,1-%s} seulement.",
'mf26' : "Enregistré manuellement le %s",
'mf32' : "ou",
'mf44' : "Les résultats du test de vitesse peuvent ne pas être exacts à 100 % en raison du trafic Internet ou autres conditions. Pour comparer les résultats, visitez un site web permettant de mesurer la vitesse Internet ou communiquez avec votre FAI pour confirmer la vitesse de votre connexion. Si les résultats sont contradictoires, vous pouvez entrer les valeurs manuellement.",
'media_dlna18' : "Sans titre",
'media_dlna21' : "Vous avez plus de fichiers multimédia que votre routeur peut indexer, ainsi nous vous présentons les premiers 12000 fichiers.",
'errSubnetMaskInvalid_2' : "Le masque de sous réseau ne ressemble pas à un masque de sous réseau. Veuillez vérifier la valeur.",
'htWAN_L2TP' : "Paramètres L2TP",
'htWAN_L2TPContent' : "Certains FAI utilisent le protocole L2TP pour connecter les abonnés à la centrale. Cela vous oblige à entrer quelques paramètres supplémentaires que votre FAI doit fournir. Après avoir enregistré vos modifications, l'indicateur d'état d'Internet sera vert si vous avez réussi.",
'p400t001_error' : "Établissez une connexion plus rapidement.",
'p400t018_error' : "Pourquoi renommer ?",
'p400t019_error' : "Voici ce que vous voyez lorsque vous recherchez votre réseau sur d'autres dispositifs. Les réseaux au nom unique sont plus faciles à retenir et à trouver. Si vos dispositifs sans fil ont été précédemment connectés à un autre routeur, le fait d'utiliser le même nom de réseau et mot de passe ici vous permet de ne pas avoir à leur indiquer la présence d'un nouveau réseau ; ils s'y connecteront automatiquement. ",
'dhToggleBand2G' : "Montrer 2,4 GHz",
'772' : "Cliquez sur « Appliquer les modifications » pour redémarrer le routeur. Après le redémarrage du routeur, vous devrez procéder comme suit",
'773' : "1) Débranchez le câble d'alimentation du modem câble et du routeur Belkin",
'774' : "2) Rebranchez le câble d'alimentation sur le modem câble. Attendez que tous les voyants du modem cessent de clignoter",
'dft001' : "Il semble que vous n'êtes pas connecté.",
'dft002' : "Si vous avez besoin d'aide et vous disposez d'un appareil connecté à Internet, visitez <strong>help.belkin.com</strong>.",
'gtNoSecCard     ' : "Veuillez prendre note du nom de votre réseau et de votre mot de passe afin de les utiliser plus tard.",
'gtFWUpdateMobileError' : "Il est actuellement impossible de télécharger vers le serveur des fichiers de micrologiciel d’appareils mobiles.",
'gtSettingsMobileError' : "Il est actuellement impossible de télécharger vers le serveur des fichiers de paramètres d’appareils mobiles.",
'gtMoreFromInternet' : "Connectez-vous à internet pour plus de langues",
'gtCantConnect' : "Connexion à Internet impossible.",
'p802t004' : "Allez dans le menu réseau sans fil de votre appareil",
'p803t004' : "Allez dans le menu réseau sans fil de votre appareil",
'PIC-S1t001' : "Bloquer tous les appareils",
'gtUnnamedDevice' : "Appareil sans nom",
'gtIC' : "Contrôle Internet ",
'errDefaultGatewayEmpty' : "La passerelle par défaut ne peut pas être vide.",
'errDefaultGatewayInvalid' : "La passerelle par défaut doit être quatre chiffres (0-255) séparés par des points. Veuillez vérifier la valeur.",
'errDNSServerEmpty' : "L'adresse du serveur DNS ne peut pas être vide.",
'errDNSServerInvalid' : "L'adresse du serveur DNS doit être quatre chiffres (0-255) séparés par des points. Veuillez vérifier la valeur.",
'errIpAddressEmpty' : "L'adresse IP ne peut pas être vide.",
'errIpAddressInvalid' : "L'adresse IP doit être quatre chiffres séparés (0-255) par des points. Veuillez vérifier la valeur.",
'errorGenericCommitError' : "Une erreur est survenue.  Veuillez vérifier les paramètres ci-dessous et réessayer.",
'errorSSIDEmpty' : "Veuillez entrer un nom pour votre réseau sans fil.",
'errorSSIDInvalidChars' : "Votre nom de réseau ne peut contenir que des lettres, des chiffres, des signes de ponctuation et des espaces.",
'errorSSIDTooLong' : "Votre nom de réseau doit être inférieur à 32 caractères.",
'errorWEPPasswordEmpty' : "Veuillez entrer un mot de passe pour sécuriser votre réseau sans fil.",
'errorWEPPasswordInvalidChars' : "Votre mot de passe réseau ne peut contenir que des chiffres et des lettres (A à F).",
'errorWEPPasswordInvalidLength' : "Votre mot de passe réseau doit comporter 10 ou 26 caractères.",
'errorWPAPasswordEmpty' : "Veuillez entrer un mot de passe pour sécuriser votre réseau sans fil.",
'errorWPAPasswordInvalidChars' : "Votre mot de passe réseau ne peut contenir que des lettres, des chiffres, des signes de ponctuation et des espaces.",
'errorWPAPasswordInvalidLength' : "Votre mot de passe réseau doit comporter entre 8 et 63 caractères.",
'errPasswordEmpty' : "Veuillez entrer votre mot de passe",
'errPasswordInvalid' : "Votre nom d'utilisateur ne peut contenir que des lettres, des chiffres, des signes de ponctuation et des espaces.",
'errPasswordTooLong' : "Votre mot de passe doit comporter moins de 64 caractères.",
'errServAddressEmpty' : "Veuillez entrer une adresse de service.",
'errSubnetMaskEmpty' : "Le masque de sous-réseau ne peut pas être vide.",
'errSubnetMaskInvalid' : "Le masque de sous-réseau doit être quatre chiffres (0-255) séparés par des points. Veuillez vérifier la valeur.",
'errUsernameInvalid' : "Votre nom d'utilisateur ne peut contenir que des lettres, des chiffres, des signes de ponctuation et des espaces.",
'errUsernameTooLong' : "Votre nom d'utilisateur doit comporter moins de 64 caractères.",
'errVCIInvalid' : "Veuillez entrer un nombre compris entre 0 et 65535. Votre FAI est en mesure de vous dire la bonne valeur à utiliser.",
'errVPIInvalid' : "Veuillez entrer un nombre compris entre 0 et 255. Votre FAI est en mesure de vous dire la bonne valeur à utiliser.",
'p802t003' : "Comme certains paramètres ont été modifiés, il se peut que vous deviez sélectionner à nouveau votre réseau sans fil :",
'p802t011' : "Comme certains paramètres ont été modifiés, il se peut que vous deviez sélectionner à nouveau votre réseau sans fil :",
'dft003' : "Besoin d'aide ?",
'dft004' : "Vous avez une question ou besoin d'aide ? Vous pouvez obtenir de l'aide dans notre centre d'assistance en ligne.<br><a href=\"http://www.belkin.com/support/\" id=\"dfBelkinHelp\">Centre d'assistance Belkin &rarr;</a>",
'dhChangeSSID' : "Changer &raquo;",
'dhPassLabel' : "Mot de passe :",
'dhPasswordObscured24' : "t********",
'dhShow' : "Afficher :",
'dhSSID24' : "{blabla}",
'dhToggle24' : "2,4 GHz",
'dhToggle5' : "5,0 GHz",
'DownSpeed' : "32.6",
'errUsernameEmpty' : "Veuillez entrer votre nom d'utilisateur.",
'gt10am' : "10h00",
'gt10pm' : "22h00",
'gt11am' : "11h00",
'gt11pm' : "23h00",
'gt1am' : "01h00",
'gt1amNextDay' : "1h00 le lendemain",
'gt1pm' : "13h00",
'gt24ghz' : "2,4 GHz",
'gt24GKey' : "Clé 2,4 GHz",
'gt24GName' : "SSID 2,4 GHz",
'gt24PSK' : "Mot de passe",
'gt24Sec' : "WPA2",
'gt24SSID' : "12345678",
'gt2am' : "02h00",
'gt2pm' : "14h00",
'gt3am' : "03h00",
'gt3pm' : "15h00",
'gt4am' : "04h00",
'gt4pm' : "16h00",
'gt50ghz' : "5 GHz",
'gt5am' : "05h00",
'gtGuestKey' : "Clé invité",
'gt5GMedia' : "La bande 5 GHz a le même nom, mais avec « .media » à la fin.",
'gtGuestName' : "SSID invité",
'gt5pm' : "17h00",
'gt6am' : "06h00",
'gt6pm' : "18h00",
'gt7am' : "07h00",
'gt7pm' : "19h00",
'gt8am' : "08h00",
'gt8pm' : "20h00",
'gt9am' : "09h00",
'gt9pm' : "21h00",
'gtAccessControl' : "Contrôle parental Internet",
'gtAccessPoint' : "Utiliser comme point d'accès",
'gtADSL' : "ADSL",
'gtAdvSettings' : "Paramètres avancés",
'gtAllElseFails' : "Si le problème n'est toujours pas résolu, appelez l'assistance technique Belkin",
'gtAndroidConnect01' : "Téléphones et tablettes Android",
'gtAndroidConnect02' : "Votre appareil propose un menu de réseaux sans fil disponibles dans l'application Settings (Réglages).",
'gtAndroidConnect03' : "Ouvrez l'application <strong>Settings</strong> (Réglages) et sélectionnez <strong>Wireless and network</strong> (Sans fil et réseau).",
'gtAndroidConnect04' : "De là, sélectionnez <strong>Wi-Fi</strong> pour voir la liste des réseaux disponibles.",
'gtAndroidConnect05' : "Sélectionnez <strong tid=\"Network24SSID\">{REPLACE WITH 2.4 SSID}</strong>. <!-- IF NOT OPEN --> <span tid=\"gtNotOpen\">Si demandé, entrez le mot de passe réseau<strong tid=\"Network24Passkey\"> {REPLACE WITH 2.4 PASSWORD}</strong>.</span> <!-- /IF -->",
'gtAt' : "le",
'gtAttenuation' : "Atténuation",
'gtAustralia' : "Australie",
'gtBackToDashboard' : "&larr; Retour au tableau de bord",
'gtBelkin' : "Belkin",
'gtBootLoader' : "Chargeur d'amorce",
'gtCantConnect' : "Nous ne pouvons pas vous connecter à votre FAI.",
'gtCantConnectNoResponse' : "Connexion à Internet impossible – pas de réponse de votre FAI.",
'gtChina' : "Chine",
'gtClientList' : "Dispositifs connectés",
'gtClose' : "Fermer",
'gtConfig' : "Configurer",
'gtConfigureRouter' : "Configurer le routeur",
'gtConnDevices' : "Dispositifs connectés",
'gtConnectingToNew' : "Nous nous connectons à votre nouveau réseau",
'gtConnectionDet' : "Détails de la connexion",
'gtConnType' : "Type de connexion",
'gtContentFiltering' : "Filtre de sites web",
'gtCopyright' : "Copyright &copy; 2012. Belkin. Tous droits réservés.",
'gtCurrTimezone' : "Europe/Helsinki {REPLACE THIS SPAN WITH DETECTED Belkin TZ ID description}",
'gtDashboard' : "&larr; Tableau de bord",
'gtDashTitle' : "Tableau de bord du routeur Belkin",
'gtDataRate' : "Débit de données",
'gtDDNS' : "DDNS",
'gtDHCPList' : "Dispositifs connectés",
'gtDHCPServer' : "Serveur DHCP",
'gtDMZ' : "DMZ",
'gtDNS' : "DNS",
'gtDown' : "Bas",
'gtDownloadSpeed' : "Vitesse en aval",
'gtEncap' : "Encapsulation :",
'gtFileInstallError' : "Ce fichier n'a pas pu être installé – le type de fichier est peut-être incorrect",
'gtFileLoadError' : "Ce fichier n'a pas pu être chargé – le type de fichier est peut-être incorrect",
'gtFirewall' : "Pare-feu",
'gtFirmware' : "Micrologiciel",
'gtFirmwareUpdate' : "Mise à jour du micrologiciel",
'gtFrance' : "France",
'gtFreshest' : "Nous obtenons la version la plus récente de notre micrologiciel...",
'gtFrom' : "De :",
'gtFWUpdate' : "Mise à jour du micrologiciel",
'gtFWUpToDate' : "Le micrologiciel est à jour.",
'gtGermany' : "Allemagne",
'gtGuestAccess' : "Accès invité",
'gtGuestNetwork' : "Réseau invité",
'gtHomeNetwork' : "Réseau domestique",
'gtIfYouKnowConnection1' : "Si vous connaissez votre type de connexion, vous pouvez la <a href=\"700-SelectConnection.htm\" id=\"ISP1a010\">configurer manuellement &raquo;</a>",
'gtIfYouKnowConnection2' : "Si vous connaissez votre type de connexion, vous pouvez la <a href=\"700-SelectConnection.htm\" id=\"ISP2a010\">configurer manuellement &raquo;</a>",
'gtIfYouKnowConnection3' : "Si vous connaissez votre type de connexion, vous pouvez la <a href=\"700-SelectConnection.htm\" id=\"ISP3a010\">configurer manuellement &raquo;</a>",
'gtIfYouKnowConnection4' : "Si vous connaissez votre type de connexion, vous pouvez la <a href=\"700-SelectConnection.htm\" id=\"ISP4a010\">configurer manuellement &raquo;</a>",
'gtIfYouKnowConnection4a' : "Si vous connaissez votre type de connexion, vous pouvez la <a href=\"700-SelectConnection.htm\" id=\"ISP4aa010\">configurer manuellement &raquo;</a>",
'gtIfYouKnowConnection5' : "Si vous connaissez votre type de connexion, vous pouvez la <a href=\"700-SelectConnection.htm\" id=\"ISP5a010\">configurer manuellement &raquo;</a>",
'gtIfYouKnowConnection6' : "Si vous connaissez votre type de connexion, vous pouvez la <a href=\"700-SelectConnection.htm\" id=\"ISP6a010\">configurer manuellement &raquo;</a>",
'gtIfYouKnowConnection7' : "Si vous connaissez votre type de connexion, vous pouvez la <a href=\"700-SelectConnection.htm\" id=\"ISP7a010\">configurer manuellement &raquo;</a>",
'gtIntellistream' : "Intellistream",
'gtInterleavePath' : "Interleaved Path",
'gtInternetSettings' : "Paramètres Internet",
'gtIOSConnect01' : "iPhone, iPad et iPod touch",
'gtIOSConnect02' : "Votre appareil propose un menu de réseaux sans fil disponibles dans l'application Settings (Réglages).",
'gtIOSConnect03' : "Ouvrez l'appli <strong>Settings</strong> (Réglages) et sélectionnez <strong>Wi-Fi</strong>.",
'gtIOSConnect04' : "Sélectionnez <strong tid=\"Network24SSID\">{REPLACE WITH 2.4 SSID}</strong> dans la liste des réseaux. <!-- IF NOT OPEN --> <span tid=\"gtNotOpen\">Si demandé, entrez le mot de passe réseau<strong tid=\"Network24Passkey\"> {REPLACE WITH 2.4 PASSWORD}</strong>.</span> <!-- /IF -->",
'gtIPv6' : "IPv6",
'gtIPV6Connection' : "Connexion IPv6",
'gtISP' : "Type de connexion du FAI",
'gtJapan' : "Japon",
'gtLANIP' : "Adresse IP du réseau local",
'gtLANMAC' : "MAC LAN/WAN",
'gtLANSettings' : "Paramètres de réseau local",
'gtLANSubnet' : "Masque de sous-réseau LAN",
'gtLLC' : "LLC",
'gtLoadPrevSettings' : "Charger les paramètres précédents",
'gtLocalNetwork' : "Réseau local",
'gtLocalSettings' : "Paramètres du réseau local",
'gtLocked' : "verrouillé",
'gtMACAddress' : "Adresse MAC",
'gtMACAddressFiltering' : "Filtrage des adresses MAC",
'gtMacConnect01' : "Mac OS X",
'gtMacConnect02' : "Votre ordinateur propose un menu des réseaux sans fil disponibles à la droite de la barre de menu.",
'gtMacConnect03' : "Cliquez sur l'icône avec les ondes sans fil.",
'gtMacConnect04' : "Sélectionnez <strong tid=\"Network24SSID\">{REPLACE WITH 2.4 SSID}</strong> dans la liste des réseaux. <!-- IF NOT OPEN --> <span tid=\"gtNotOpen\">Si demandé, entrez le mot de passe réseau<strong tid=\"Network24Passkey\"> {REPLACE WITH 2.4 PASSWORD}</strong>.</span> <!-- /IF -->",
'gtMaybeLater' : "Plus tard",
'gtMbitPerSec' : " Mb/s",
'gtMeaning' : "Qu'est-ce que cela veut dire ?",
'gtMedia' : "Médias",
'gtMediaServer' : "Media Server",
'gtmidnight' : "Minuit",
'gtModel' : "Modèle",
'gtName' : "Name",
'gtNeedMoreHelp' : "Encore besoin d'aide ?",
'gtNetName' : "Nom du réseau",
'gtNewFWAvailableModem' : "Un nouveau micrologiciel est disponible pour votre modem.",
'gtNewFWAvailableRouter' : "Un nouveau micrologiciel est disponible pour votre routeur.",
'gtNewFWAvailableRouterAndModem' : "Un nouveau micrologiciel est disponible pour votre routeur et votre modem.",
'gtNext' : "Suivant",
'gtNo' : "Non",
'gtNoiseMargin' : "Marge d'immunité au bruit",
'gtNoMyNet' : "Je ne vois pas mon réseau",
'gtNoon' : "Midi",
'gtNoSecCard' : "Veuillez prendre note du nom de votre réseau et de votre mot de passe afin de les utiliser plus tard.",
'gtNotOpen' : "Si demandé, entrez le mot de passe réseau <strong tid=\"Network24Passkey\">{REPLACE WITH 2.4 PASSWORD}</strong>.",
'gtNZ' : "Nouvelle-Zélande",
'gtOffline' : "Déconnecté",
'gtOnline' : "Connecté",
'gtOptionalSoftware' : "Logiciel facultatif",
'gtOptionalSW' : "Logiciel facultatif",
'gtOptSW' : "Logiciel facultatif",
'gt-OR-' : "-Ou-",
'gtOther' : "...",
'gtOutputPower' : "Puissance en sortie",
'gtParentalControls' : "Contrôle parental",
'gtPass' : "Mot de passe :",
'gtPIC' : "Contrôle parental Internet",
'gtPICOtherTimes' : "Cet appareil ne pourra pas accéder à Internet le reste du temps.",
'gtPleaseCallISP' : "Veuillez communiquer avec votre FAI",
'gtPortForwarding' : "Redirection de port",
'gtPrint' : "Imprimer",
'gtReadAllAboutIt' : "Pour plus d'aide :",
'gtReconnectingHell' : "Reconnexion...",
'gtRegister' : "S'enregistrer",
'gtRegistration' : "Enregistrement",
'gtRestartRouter' : "Redémarrer le routeur",
'gtRestoreDef' : "Rétablir les paramètres par défaut",
'gtRestoreFactDefault' : "Rétablir les paramètres par défaut",
'gtRestoreFactDefaults' : "Rétablir les paramètres par défaut",
'gtRestoreSettigns' : "Rétablir les paramètres",
'gtRetest' : "Tester à nouveau la connexion",
'gtRouterDetails' : "Détails du routeur",
'gtRouterInfo' : "Infos routeur",
'gtSave' : "Enregistrer",
'gtSaveCurrentSettings' : "Sauvegarder les paramètres actuels",
'gtSaved' : "Périphérique sans nom sauvegardé",
'gtSaveRestore' : "Enregistrer/Restaurer les paramètres",
'gtSaveRestoreSettings' : "Enregistrer/Restaurer les paramètres",
'gtSaveSettings' : "Enregistrer/Sauvegarder les paramètres",
'gtSecLog' : "Journal de sécurité",
'gtSecurity' : "Sécurité",
'gtSelectLang' : "Choix de la langue :",
'gtSelfHeal' : "Self-Healing",
'gtSelfHealing' : "Self-Healing",
'gtSerialSupport' : "À la page suivante, nous allons enregistrer le numéro de série de votre routeur à des fins d'assistance technique.",
'gtShowtime' : "Showtime",
'gtSpeedTestResults' : "Dernière vérification : il y a 1 jour à 15 h 57",
'gtStaticRouting' : "Routage statique",
'gtStatus' : "État",
'gtSystemSettings' : "Paramètres du système",
'gtTo' : "À :",
'gtTraffStats' : "Statistiques du trafic",
'gtTryAgain' : "Réessayer",
'gtUnlocked' : "déverrouillé",
'gtUp' : "Haut",
'gtUpdate' : "mise à jour",
'gtUpdateNoPowerModem' : "Nous mettons à jour votre modem avec le nouveau micrologiciel. Veuillez ne pas mettre le routeur hors tension pendant cette procédure.",
'gtUpdateNoPowerRouter' : "Nous mettons à jour votre routeur avec le nouveau micrologiciel. Veuillez ne pas mettre le routeur hors tension pendant cette procédure.",
'gtUploadSpeed' : "Vitesse en amont",
'gtUSA' : "États-Unis",
'gtUserName' : "Nom d'utilisateur :",
'gtUtils' : "Utilitaires",
'gtVCI' : "VCI :",
'gtVCMUX' : "VC/MUX",
'gtVPI' : "VPI :",
'gtWAN' : "Paramètres WAN",
'gtWANDNS' : "Adresse DNS",
'gtWANGateway' : "Passerelle WAN",
'gtWANIP' : "Adresse IP WAN",
'gtWANMAC' : "Adresse MAC WAN",
'gtWANPingBlocking' : "Blocage du ping WAN",
'gtWANSubnet' : "Masque de sous-réseau WAN",
'gtWebsiteFilter' : "Filtre de sites web",
'gtWelcome' : "Bienvenue",
'gtWiFi' : "Wi-Fi",
'gtWifiSettings' : "Vos paramètres Wi-Fi ont été modifiés.",
'gtWinConnect01' : "Windows 7 ou 8",
'gtWinConnect02' : "Votre ordinateur propose un menu des réseaux sans fil disponibles à la droite de la barre de tâches.",
'gtWinConnect03' : "Cliquez-droit sur l'icône qui indique des mesures d'intensité du signal.",
'gtWinConnect04' : "Sélectionnez <strong tid=\"Network24SSID\">{REPLACE WITH 2.4 SSID}</strong>. <!-- IF NOT OPEN --> <span tid=\"gtNotOpen\">Si demandé, entrez le mot de passe réseau<strong tid=\"Network24Passkey\"> {REPLACE WITH 2.4 PASSWORD}</strong>.</span> <!-- /IF -->",
'gtWinConnect05' : "Windows Vista et Windows XP",
'gtWinConnect06' : "Votre ordinateur propose un menu des réseaux sans fil disponibles à la droite de la barre de tâches.",
'gtWinConnect07' : "Faites un clic droit sur l'icône qui représente un ordinateur avec des ondes sans fil (XP) ou deux ordinateurs (Vista).",
'gtWinConnect08' : "Choisissez <strong>Afficher les réseaux sans fil disponibles</strong> (XP) ou <strong>Connexion à un réseau</strong> (Vista) à partir du menu.",
'gtWinConnect09' : "Sélectionnez <strong tid=\"Network24SSID\">{REPLACE WITH 2.4 SSID}</strong>. <!-- IF NOT OPEN --> <span tid=\"gtNotOpen\">Si demandé, entrez le mot de passe réseau<strong tid=\"Network24Passkey\"> {REPLACE WITH 2.4 PASSWORD}</strong>.</span> <!-- /IF -->",
'gtWireless' : "Sans fil",
'gtWiring' : "Branchements",
'gtWPSShort' : "WPS",
'gtWPS' : "Wi-Fi Protected Setup",
'gtYes' : "Oui",
'htFWUpdate' : "Quelles sont les mises à jour du micrologiciel ?",
'htFWUpdateContent' : "De temps à autre, Belkin peut lancer une nouvelle version du micrologiciel du routeur. Ces mises à jour contiennent des améliorations et des correctifs pour votre routeur.<br><br>REMARQUE :Veuillez faire une copie de vos paramètres avant de mettre à jour le micrologiciel.",
'htParent' : "Qu'est-ce que le filtre site web ?",
'htPIC' : "Votre contrôle Internet",
'htPICBlocked' : "L’accès Internet est suspendu",
'htPICBlockedContent' : "Veuillez restaurer l’accès dès que vous êtes prêt à rétablir la connexion Internet de tous les appareils.",
'htPICContent' : "Grâce au contrôle Internet, vous pouvez désormais spécifier une tranche horaire pour bloquer l’accès Internet de chaque appareil.",
'htSaveRestore' : "Que signifient enregistrer, charger ou restaurer les paramètres ?",
'htSaveRestoreContent' : "Votre routeur enregistre les paramètres pour diverses choses, comme le nom du réseau, le mot de passe, etc. Ces paramètres peuvent être enregistrés (comme sauvegarde), et peuvent ensuite être chargés dans votre routeur. Les paramètres du routeur peut également être restaurés avec ses paramètres par défaut d'usine.",
'htSaveRestoreContentMobile' : "<br>* Sur iPhone, iPad et iPod touch, l'enregistrement et le chargement d'un fichier de paramètres ne sont pas pris en charge. Utilisez un autre appareil, comme un ordinateur portable, pour enregistrer et charger un fichier de paramètres.",
'ISP1t003' : "Dites-leur que votre routeur est en mesure d'obtenir une adresse IP, mais que le DNS ne fonctionne pas.",
'ISP1t007' : "Le DNS traduit les noms tels que « belkin.com » en adresses numériques (adresses IP), que les ordinateurs utilisent pour naviguer sur Internet. Votre routeur possède une adresse IP, ce qui signifie qu'il est connecté à Internet, mais le DNS ne fonctionne pas, donc vous ne pouvez pas surfer, ce qui suggère quelque chose ne va pas du côté de votre FAI.  <span class=\"nub\"></span>",
'ISP2t003' : "Dites-leur que votre routeur est en mesure d'obtenir une adresse IP et que le DNS fonctionne, mais que nous ne pouvons pas exécuter de commande ping vers qui que ce soit.",
'ISP2t007' : "Nous envoyons des commandes « ping » vers d'autres machines sur Internet pour tester si oui ou non nous pouvons leur parler. Le DNS traduit les noms tels que « belkin.com » en adresses numériques (adresses IP), que les ordinateurs utilisent pour naviguer sur Internet. Votre routeur possède une adresse IP, ce qui signifie qu'il est connecté à Internet, et le DNS fourni par votre FAI fonctionne, mais nous ne pouvons pas exécuter une commande ping. Cela suggère que quelque chose ne va pas du côté de votre FAI. <span class=\"nub\"></span>",
'ISP3t004' : "Dites-leur que votre nom d'utilisateur et mot de passe ont été acceptés, mais que vous n'avez pas encore de connexion Internet.",
'ISP3t007' : "Nous envoyons des commandes « ping » vers d'autres machines sur Internet pour tester si oui ou non nous pouvons leur parler. Votre FAI a accepté votre nom d'utilisateur et mot de passe, mais nous ne pouvons pas exécuter de commande ping, de sorte que vous ne pouvez pas surfer. Cela suggère que quelque chose ne va pas du côté de votre FAI.  <span class=\"nub\"></span>",
'ISP4t003' : "Dites-leur que votre nom d'utilisateur et mot de passe n'ont pas été acceptés après un certain nombre de tentatives.",
'ISP4t007' : "Votre connexion Internet nécessite un nom d'utilisateur et un mot de passe, mais votre FAI n'accepte pas ce que vous avez saisi. Il sera  en mesure de vous communiquer la bonne information.  <span class=\"nub\"></span>",
'ISP5t003' : "Dites-leur que vous avez choisi une connexion dynamique, mais que vous n'êtes pas en mesure d'obtenir une adresse IP.",
'ISP5t007' : "Une adresse IP identifie un routeur ou un autre dispositif sur Internet. Votre fournisseur d'accès n'attribue pas d'adresse à votre routeur. Sans cette adresse IP, vous ne pouvez pas vous connecter. Cela suggère que quelque chose ne va pas du côté de votre FAI ou que votre connexion n'est pas de type dynamique.  <span class=\"nub\"></span>",
'ISP6t003' : "Dites-leur que vous avez choisi une connexion statique, mais que vous n'êtes pas en mesure de vous connecter à Internet.",
'ISP6t007' : "Nous utilisons une connexion statique lorsque votre FAI vous a attribué une ou plusieurs adresses IP spécifiques à utiliser.  <span class=\"nub\"></span>",
'ISP7t003' : "Dites-leur que vos paramètres VPI/VCI ne fonctionnent pas, et que vous voudriez qu'ils vous donner les bonnes valeurs.",
'ISP7t007' : "Les paramètres VPI et VCI disent à votre routeur quel chemin utiliser pour parler à votre fournisseur d'accès à Internet. Nous n'avons pas été en mesure de détecter les bons paramètres. <span class=\"nub\"></span>",
'Network24Passkey' : "{REPLACE WITH 2.4 PASSWORD}",
'Network24SSID' : "{REPLACE WITH 2.4 SSID}",
'p100t002' : "Connectons-nous à Internet",
'p100t003' : "Vous êtes connecté à votre nouveau routeur, connectons-le maintenant à votre FAI.",
'p100t004' : "Connectons-nous à Internet",
'p100t005' : "Vous êtes connecté à votre nouveau routeur, connectons-le maintenant à votre FAI.",
'p100t007' : "Détecter ma connexion",
'p100t008' : "Si vous ne savez pas votre type de connexion, vous pouvez <a href=\"700-SelectConnection.htm\" id=\"p100a009\" tid=\"p100t009\">la configurer manuellement &raquo;</a>, ou aller directement au <a href=\"000-Dashboard.htm\" id=\"p100a010\" tid=\"p100t010\">tableau de bord &raquo;</a>.",
'p100t009' : "configurer manuellement &raquo;",
'p100t010' : "tableau de bord &raquo;",
'p100t013' : "Actuellement, nous affichons les pages",
'p100t024' : "Une configuration quasi automatique",
'p100t025' : "Tout d'abord, nous allons vérifier automatiquement votre câblage et détecter le type de connexion de votre fournisseur d'accès Internet. Vous ne devriez pas avoir à intervenir. Ensuite, nous ferons en sorte que le logiciel de votre routeur soit à jour. <span class=\"nub\"></span>",
'p1010MRt001' : "Nous avons de la difficulté à parler avec votre modem.",
'p1010MRt002' : "Nous pensons qu'il y a un problème de câblage.",
'p1010MRt003' : "Voici ce que vous pouvez faire pour résoudre ce problème :",
'p1010MRt004' : "Assurez-vous que votre modem-routeur est connecté à votre prise téléphonique avec connexion Internet. Il devrait y avoir un câble réseau reliant le port ADSL sur votre modem-routeur (le port gris en haut) à la prise téléphonique.",
'p1010MRt005' : "Assurez-vous que le modem est allumé. Son adaptateur d'alimentation doit être branché aux deux extrémités, et un ou plusieurs voyants sur le modem doit être allumé.",
'p1010MRt006' : "Un câble réseau doit être branché à votre modem et au port jaune sur votre routeur. Ce câble transmet le signal de votre modem vers votre routeur. Sans lui, vous ne pouvez pas vous connecter à Internet.",
'p1010MRt007' : "Si tout est branché correctement, essayez de redémarrer votre modem en débranchant son alimentation, en attendant une quinzaine de secondes, puis en le rebranchant. Certains modems ont une batterie. Le cas échéant, vous devez trouver le bouton de réinitialisation du modem.",
'p1010MRt008' : "Vos branchements devraient ressembler à ceci :",
'p1010MRt009' : "Nous allons continuer à vérifier la présence d'une connexion pendant que vous vérifiez les branchements.",
'p1010MRt010' : "Le problème le plus courant est un mauvais branchement entre le modem et le routeur. Il est important de vérifier les deux extrémités du câble. Une extrémité doit être branchée au port jaune sur votre nouveau routeur, et l'autre extrémité doit être branchée dans un port similaire sur votre modem. Les divers fabricants de modems donnent divers noms aux ports. Vous trouverez peut-être un port nommé « données », « LAN », « réseau » ou « Ethernet ».  <span class=\"nub\"></span>",
'p1020t001' : "Nous allons avoir du mal à parler avec votre fournisseur d'accès Internet.",
'p1020t002' : "Veuillez redémarrer votre modem-routeur.",
'p1020t003' : "Nous n'obtenons pas de connexion Internet, nous allons donc essayer de redémarrer votre modem-routeur.",
'p1020t004' : "Éteignez le modem-routeur. Pour ce faire, utilisez l'interrupteur marche/arrêt ou débranchez le modem-routeur de sa source d'alimentation.",
'p1020t005' : "Patientez 15 secondes.",
'p1020t006' : "Allumez de nouveau le modem-routeur.",
'p1020t007' : "Après quelques secondes, ses voyants sont allumés et il devrait communiquer avec votre FAI.",
'p1020t008' : "Si le problème persiste, veuillez contacter votre FAI pour résoudre le problème avec votre compte.",
'p1020t009' : "Nous attendons que votre modem s'éteigne puis se rallume, et nous continuerons automatiquement.",
'p1020t010' : "Pourquoi redémarrer le modem ?",
'p1020t011' : "Il est parfois nécessaire de redémarrer un modem pour qu'il communique avec un nouveau routeur ou un ordinateur inconnu. Si votre fournisseur d'accès Internet éprouve des problèmes, le modem peut couper la connexion de manière inattendue. Nous pouvons voir votre modem, mais pas l'Internet. Redémarrer le modem devrait résoudre le problème. <span class=\"nub\"></span>",
'p1100t001' : "Une mise à jour du micrologiciel est disponible!",
'p1100t002' : "Nous vous recommandons de mettre à jour votre routeur avec la dernière version du micrologiciel pour vous assurer d'un fonctionnement optimal.",
'p1100t003' : "Montrez-moi ce qui est nouveau",
'p1201t001' : "Verrouillez le tableau de bord avec un mot de passe.",
'p1201t002' : "Veuillez entrer un mot de passe pour verrouiller le tableau de bord :",
'p1201t003' : "Veuillez entrer un mot de passe.",
'gtSetPassword' : "Configurer le mot de passe.",
'p1201t005' : "Annuler",
'p1210t001' : "Le tableau de bord est verrouillé.",
'p1210t002' : "Veuillez entrer votre mot de passe :",
'p1210t003' : "Veuillez entrer votre mot de passe",
'p1210t004' : "Votre mot de passe est incorrect.",
'p1210t005' : "Laissez-moi entrer !",
'p1300t001' : "Un peu plus de punch.",
'p1300t002' : "Vous pouvez tirer de meilleures performance de votre connexion Internet en configurant Intellistream. Vous devez d'abord exécuter un test de vitesse.",
'p1300t003' : "Configurer Intellistream",
'p1300t004' : "Plus tard",
'p1302t001' : "Votre micrologiciel est à jour.",
'p1316t001' : "L'installation de la mise à jour du micrologiciel a échoué – veuillez essayer à nouveau en cliquant sur \" s'il vous plaît essayer à nouveau en cliquant sur Rechercher une nouvelle version du micrologiciel.",
'p1318t001' : "Le type ou la version du fichier de mise à jour ne convient pas à cet appareil. Échec de la mise à jour. Veuillez obtenir le fichier approprié et réessayer",
'p1333t001' : "Le micrologiciel a été mis à jour.",
'p1400t001' : "Profitez pleinement de votre port USB.",
'p1400t002' : "Il existe des logiciels facultatifs que vous pouvez installer, et qui vous aideront à tirer le meilleur parti du port USB de votre routeur.",
'p1400t003' : "Montrez-moi ces logiciels facultatifs",
'p1500t001' : "Vous êtes ici.",
'p1500t002' : "Il semble que vous êtes dans le fuseau horaire <span tid=\"gtCurrTimezone\">Europe/Helsinki {REPLACE THIS SPAN WITH DETECTED Belkin TZ ID description}</span>. Est-ce exact ?",
'p1500t003' : "C'est exact",
'p1500t004' : "Laissez-moi choisir",
'p200t001' : "Établissement d'une connexion...",
'p200t002' : " Nous vérifions les connexions physiques sur votre routeur.",
'p202At001' : "Encore au travail...",
'p202At002' : " Nous détectons le type de connexion de votre fournisseur d'accès Internet. Cette opération peut prendre quelques minutes.",
'p202Bt001' : "Encore au travail...",
'p202Bt002' : " Nous vérifions si votre fournisseur d'accès Internet nécessite un mot de passe. Cette opération peut prendre quelques minutes.",
'p202Ct001' : "Encore au travail...",
'p202Ct002' : " Nous testons maintenant la connexion.",
'p202t001' : "Établissement d'une connexion...",
'p202t002' : " Nous détectons le type de connexion de votre fournisseur d'accès Internet.",
'p208t001' : "Avez-vous les valeurs VPI/VCI à portée de main ?",
'p208t002' : "Pour vous connecter, vous devez entrer les valeurs VPI et VCI. Ces paramètres identifient le chemin de communication que votre FAI vous demande d'utiliser.",
'p208t003' : "Votre fournisseur d'accès Internet devrait vous avoir fourni ces valeurs. Si vous ne pouvez pas les trouver, communiquez avec votre FAI.",
'p208t006' : "0",
'p208t007' : "0",
'p208t009' : "Essayer ma connexion",
'p208t011' : "VPI et VCI",
'p208t012' : "Les identifiants Virtual Path Identifier (VPI) et Virtual Circuit Identifier (VPI) indiquent à votre routeur le chemin à utiliser pour communiquer avec votre FAI. Nous essayons quelques paramètres courants automatiquement avant de vous demander de l'aide.<span class=\"nub\"></span>",
'p209t001' : "Quelque chose ne va pas avec ces paramètres.",
'p209t002' : "Votre FAI n'a pas accepté ces valeurs VPI/VCI. On essaie encore une fois ?",
'p210CXt001' : "Vous disposez d'une connexion PPPoE.",
'p210CXt002' : "Vous aurez besoin d'un nom d'utilisateur et d'un mot de passe pour accéder à Internet.",
'p210CXt004' : "<strong>Votre fournisseur d'accès à Internet devrait vous avoir donné cette information. Si vous ne pouvez les trouver, communiquez avec votre FAI.</strong>",
'p210CXt006' : "0",
'p210CXt007' : "0",
'p210CXt016' : "Essayer ma connexion",
'p210CXt017' : "PPPoE",
'p210CXt018' : "Le protocole Point-to-Point Protocol over Ethernet crée une connexion sécurisée entre votre routeur et votre FAI. Il est généralement utilisé par les opérateurs téléphoniques. <span class=\"nub\"></span>",
'p210DXt001' : "Vous disposez d'une connexion PPPoA.",
'p210DXt002' : "Vous aurez besoin d'un nom d'utilisateur et d'un mot de passe pour accéder à Internet.",
'p210DXt004' : "<strong>Votre fournisseur d'accès à Internet devrait vous avoir donné cette information. Si vous ne pouvez les trouver, communiquez avec votre FAI.</strong>",
'p210DXt006' : "0",
'p210DXt007' : "0",
'p210DXt016' : "Essayer ma connexion",
'p210DXt017' : "PPPoA",
'p210DXt018' : "Le protocole Point-to-Point Protocol over ATM crée une connexion sécurisée entre votre routeur et votre FAI. Il est généralement utilisé par les opérateurs téléphoniques.<span class=\"nub\"></span>",
'p210t001' : "Vous disposez d'une connexion DSL PPPoE.",
'p210t002' : "Vous aurez besoin d'un nom d'utilisateur et d'un mot de passe pour accéder à Internet.",
'p210t003' : "<strong>Votre fournisseur d'accès à Internet (FAI) devrait vous avoir donné cette information. Si vous ne pouvez les trouver, communiquez avec votre FAI.</strong>",
'p210t005' : "Nom d'utilisateur FAI :",
'p210t009' : "Essayer ma connexion",
'p210t010' : "PPPoE",
'p210t011' : "Le protocole Point-to-Point Protocol over Ethernet crée une connexion sécurisée entre votre routeur et votre FAI. Il est généralement utilisé par les opérateurs téléphoniques. <span class=\"nub\"></span>",
'p211t001' : "Établissement d'une connexion...",
'p211t002' : " Nous essayons de vous connecter à votre fournisseur de d'accès Internet. Cette opération peut prendre jusqu'à deux minutes ou plus.",
'p212DXt001' : "Quelque chose ne va pas avec vos paramètres PPPoA.",
'p212DXt002' : "Votre nom d'utilisateur, votre mot de passe, ou les deux sont inexacts. Veuillez réessayer. Si vous ne pouvez les trouver, communiquez avec votre FAI.",
'p212t001' : "Quelque chose ne va pas avec vos paramètres PPPoE.",
'p212t002' : "Votre nom d'utilisateur, votre mot de passe, ou les deux sont inexacts. Veuillez réessayer. Si vous ne pouvez les trouver, communiquez avec votre FAI.",
'p220t002' : "Pour terminer la connexion et accéder à Internet, veuillez entrer un nom d'utilisateur, un mot de passe et l'adresse de service.",
'p220t003' : "<strong>Votre fournisseur d'accès à Internet devrait vous avoir donné cette information. Si vous ne pouvez les trouver, communiquez avec votre FAI.</strong>",
'p220t006' : "Nom d'utilisateur FAI :",
'p220t007' : "Adresse du service :",
'p220t010' : "Essayer ma connexion",
'p220t013' : "Vous disposez d'une connexion L2TP ou PPTP.",
'p220t014' : "Ou choisir manuellement ma connexion &raquo;",
'p220t015' : "L2TP et PPTP",
'p220t016' : "Les protocoles L2TP (Layer 2 Tunneling Protocol) et PPTP (Point-to-Point Tunneling Protocol) créent une connexion privée et cryptée entre vous et votre fournisseur d'accès.<span class=\"nub\"></span>",
'p221t001' : "Établissement d'une connexion...",
'p221t002' : " Nous essayons de vous connecter à votre fournisseur de d'accès Internet. Cette opération peut prendre jusqu'à 2 minutes.",
'p222t002' : "Votre nom d'utilisateur, votre mot de passe, ou les deux sont inexacts. Veuillez réessayer. Si vous ne pouvez les trouver, communiquez avec votre FAI.",
'p222t004' : "Quelque chose ne va pas avec vos paramètres.",
'p2300t001' : "Votre version installée du micrologiciel :",
'p2300t002' : "Mise à jour de micrologiciel à partir du fichier enregistré localement :",
'p2300t006' : "Voulez-vous vraiment installer le fichier {{file}} ?",
'p2300t010' : "Rechercher une nouvelle version du micrologiciel",
'p2400t006' : "Vos paramètres actuels seront remplacés. Voulez-vous vraiment charger le fichier {{file}} ?",
'p2410t001' : "Voulez-vous vraiment rétablir les paramètres par défaut ?",
'p2410t002' : "En cliquant sur 'Oui', les paramètres de votre routeur comme le nom et le mot de passe seront effacés et remplacés par les valeurs par défaut d'usine.",
'p300t005' : "Vous êtes désormais connecté.",
'p310t001' : "Une mise à jour est disponible !",
'p310t001x' : "Cette mise à jour (v2.1.0c) comprend :",
'p310t002' : "Pour installer le nouveau micrologiciel, veuillez lire et accepter le contrat de licence.",
'p310t003' : "Contrat de licence",
'p310t004' : "J'accepte les termes du contrat de licence.",
'p310t005' : "Installer la mise à jour",
'p310t006' : "Qu'est-ce que le micrologiciel ?",
'p310t007' : "Le micrologiciel est le logiciel qui gère votre routeur. Nous mettons à jour le micrologiciel pour améliorer les performances de votre routeur, il est donc important d'être toujours à jour.  <span class=\"nub\"></span>",
'p315t001' : "Nous téléchargeons le nouveau micrologiciel.",
'p315t002' : "Progression du téléchargement:",
'p315t003' : "Qu'est-ce que le micrologiciel ?",
'p315t004' : "Le micrologiciel est le logiciel qui gère votre routeur. Nous mettons à jour le micrologiciel pour améliorer les performances de votre routeur, il est donc important d'être toujours à jour.  <span class=\"nub\"></span>",
'p320t001' : "Nous installons le nouveau micrologiciel.",
'p320t002' : "Après avoir installé le nouveau micrologiciel, nous allons redémarrer votre routeur pour terminer l'installation.",
'p320t004' : "Qu'est-ce que le micrologiciel ?",
'p320t005' : "Le micrologiciel est le logiciel qui gère votre routeur. Nous mettons à jour le micrologiciel pour améliorer les performances de votre routeur, il est donc important d'être toujours à jour.  <span class=\"nub\"></span>",
'p320t006' : "Cela va prendre environ trois minutes environ. Progression de la mise à jour :",
'p320t010' : "Après avoir installé le nouveau micrologiciel, nous allons redémarrer votre modem pour terminer l'installation.",
'p321t001' : "Nous redémarrons votre routeur",
'p321t002' : "Nous redémarrons votre modem",
'p321t003' : "Maintenant que le micrologiciel a été installé, nous devons redémarrer votre routeur pour officialiser le tout.",
'p321t004' : "Redémarrage en cours :",
'p321t005' : "Mises à jour du micrologiciel",
'p321t006' : "Le micrologiciel est le logiciel que votre routeur utilise pour mettre en œuvre des réseaux et des protocoles de sécurité. Les mises à jour améliorent la fiabilité et la fonctionnalité, il est donc important d'être toujours à jour. <span class=\"nub\"></span>",
'p321t010' : "Maintenant que le micrologiciel a été installé, nous devons redémarrer votre modem pour officialiser le tout.",
'p330t001' : "Nous vérifions votre vitesse de connexion...",
'p330t002' : "Un test de vitesse permettra à votre routeur d'optimiser votre connexion Internet. Cela prend une minute ou deux.",
'p331t001' : "Le micrologiciel est à jour.",
'p332t001' : "Nous allons réessayer la mise à jour du micrologiciel plus tard.",
'p333t001' : "Le micrologiciel a été mis à jour.",
'p334t001' : "Les résultats du test de vitesse !",
'p334t002' : "Voici ce que nous avons appris :",
'p334t003' : "Vitesse en aval",
'p334t004' : " Mb/s",
'p334t005' : "Vitesse en amont",
'p334t006' : " Mb/s",
'p340t002' : " Nous reconnectons à votre routeur pour continuer.",
'p341t001' : "Veuillez redémarrer votre routeur",
'p341t002' : "Nous avons du mal à nous reconnecter à votre routeur. Un redémarrage rapide devrait aider à résoudre le problème.",
'p341t003' : "Débranchez l'alimentation de votre routeur, attendez quelques secondes, puis rebranchez-la. Lorsque votre routeur affiche une voyant bleu, nous sommes prêt à nous connecter.",
'p341t003w' : "Débranchez votre routeur, attendez quelques secondes, puis rebranchez-le. Lorsque votre routeur affiche une voyant bleu, nous sommes prêt à nous connecter.",
'p341t004' : " Nous attendrons le retour de votre routeur pendant que vous effectuez la procédure.",
'p342t001' : " Nous reconnectons à votre routeur pour continuer.",
'p342t002' : "Vous devrez peut-être re-sélectionner votre réseau sans fil <span tid=\"Network24SSID\">({REPLACE WITH 2.4 SSID})</span> à partir de la liste des réseaux sans fil.",
'p343t002' : " Nous nous reconnectons à votre routeur pour continuer.",
'p343t003' : "Vous devrez peut-être re-sélectionner votre réseau sans fil <span tid=\"Network24SSID\">({REPLACE WITH 2.4 SSID})</span> pour continuer.",
'p344t001' : "Veuillez redémarrer votre routeur.",
'p344t002' : "Nous avons du mal à nous reconnecter à votre routeur. Un redémarrage rapide devrait aider à résoudre le problème.",
'p344t003' : "Débranchez l'alimentation de votre routeur, attendez 15 secondes, puis rebranchez-la. Lorsque votre routeur affiche une voyant bleu, nous tenterons de nous reconnecter.",
'p344t003w' : "Débranchez votre routeur, attendez 15 secondes, puis rebranchez-le. Lorsque votre routeur affiche une voyant bleu, nous tenterons de nous reconnecter.",
'p344t004' : " Nous attendrons le retour de votre routeur pendant que vous effectuez la procédure.",
'p400f010' : "WPA2",
'p400f011' : "WPA/WPA2",
'p400f012' : "WEP",
'p400f013' : "Ouvrir",
'p400t001' : "Établissez une connexion plus rapidement.",
'p400t002' : "En donnant à votre nouveau routeur les mêmes nom de réseau et mot de passe que votre ancien permettra à tous vos dispositifs de se connecter immédiatement.",
'p400t004' : "Nom du réseau:",
'p400t008' : "Type de sécurité : <em class=\"hide-on-phones\">(WPA2 est le plus sûr.)</em>",
'p400t014' : "La bande 5 GHz aura le même nom, mais avec « .media » à la fin.",
'p400t015' : "Vous pouvez le changer plus tard si vous le souhaitez.",
'p400t017' : "Enregistrer et continuer",
'p400t018' : "Pourquoi dois-je renommer mon réseau ?",
'p400t019' : "Tout dispositif sans fil qui était précédemment connecté à votre ancien routeur, se connectera automatiquement à votre nouveau routeur si vous utilisez les mêmes nom de réseau et mot de passe. Aussi, lorsque vous cherchez votre réseau sur les dispositifs, il est plus facile de trouver un nom unique. <span class=\"nub\"></span>",
'p450a009' : "Excellent, et maintenant ?",
'p450t001' : "Vos changements ont été enregistrés.",
'p450t002' : "Voici votre nouveau nom de réseau et votre nouveau mot de passe",
'p450t003' : "Si vous avez déjà utilisé vos anciens nom et mot de passe réseau, vos dispositifs sans fil existants devraient se reconnecter maintenant.",
'p450t004' : "Nom :",
'p450t008' : "Votre routeur est livré avec un bout de papier sous son socle, où vous pouvez écrire votre nouveau nom de réseau. De cette façon, il sera toujours là quand vous en aurez besoin.",
'p450t011' : "Si vous avez utilisé vos anciens nom et mot de passe réseau, la plupart de vos appareils sans fil se reconnectent automatiquement lors de leur prochain démarrage. Pour d'autres, vous devrez re-sélectionner votre réseau. Ils se re-connecteront automatiquement par la suite. Des instructions pour Windows, OS X, iOS et Android se trouvent dans le guide d'installation rapide.  <span class=\"nub\"></span>",
'p451a009' : "Excellent, et maintenant ?",
'p451t001' : "Pas de changement.",
'p451t002' : "Le nom de réseau et le mot de passe n'ont pas été modifiés.",
'p451t003' : "Vous devrez indiquer le nom de réseau et le mot de passe à chaque dispositif sans fil.",
'p451t004' : "Nom :",
'p451t008' : "Votre routeur est livré avec un bout de papier sous son socle, où vous pouvez écrire le nom de réseau. De cette façon, il sera toujours là quand vous en aurez besoin.",
'p451t011' : "Vous devez indiquer le nouveau réseau à tous vos dispositifs sans fil. Des instructions pour Windows, OS X, iOS et Android se trouvent dans le guide d'installation rapide.  <span class=\"nub\"></span>",
'p500t001' : "Enregistrez votre routeur.",
'p500t002' : "L'enregistrement est rapide et permet d'économiser beaucoup de temps si vous avez besoin d'une assistance technique.",
'p500t004' : "Pourquoi s'enregistrer ?",
'p500t005' : "Le fait d'en connaître un peu plus sur vous nous permet de vous aider plus rapidement en cas de besoin. <span class=\"nub\"></span>",
'p500tCancel' : "S'enregistrer plus tard &raquo;",
'p500tSubmit' : "Enregistrement terminé.",
'p600t001' : "Visitez la page des Logiciels facultatifs de votre routeur pour télécharger un logiciel similaire pour vos autres ordinateurs et autres appareils mobiles.",
'p600t002' : "Merci, amenez-moi au tableau de bord",
'p600t003' : "Logiciels facultatif",
'p600t004' : "Ces outils logiciels peuvent vous aider à tirer parti des fonctionnalités avancées de votre routeur. Il y a des fichiers à télécharger pour Apple iOS, Android, Windows et OS X.  <span class=\"nub\"></span>",
'p601t001' : "<strong>Merci de vous être enregistré !</strong>",
'p700MRt001' : "Nous n'avons pu configurer automatiquement votre connexion. Veuillez nous en dire un peu plus pour que nous puissions vous aider à vous connecter.",
'p700MRt002' : "Quel type de connexion configurez-vous ?",
'p700MRt003' : "Ma connexion est :",
'p700MRt005' : "Connexion dynamique  (1483 Bridge)",
'p700MRt007' : "Connexion PPPoE",
'p700MRt009' : "Connexion PPPoA",
'p700MRt011' : "Connexion statique (IPoA)",
'p700MRt014' : "Je ne suis pas certain de mon type de connexion :",
'p700MRt016' : "Essayez à nouveau la configuration automatique",
'p700MRt017' : "Types de connexion",
'p700MRt018' : "<span class=\"black\">Dynamique —</span> Ces connexions sont de plus en plus fréquentes avec certains fournisseurs d'accès DSL.",
'p700MRt019' : "<span class=\"black\">PPPoE et PPTP —</span> Ces connexions exigent un nom d'utilisateur et un mot de passe fournis par le FAI.",
'p700MRt021' : "<span class=\"black\">Statique —</span> Ce type de connexion exige des paramètres personnalisés qui sont uniques à chaque utilisateur. <span class=\"nub\"></span>",
'p700t001' : "Nous n'avons pu configurer automatiquement votre connexion. Veuillez nous en dire un peu plus pour que nous puissions vous aider à vous connecter.",
'p700t002' : "Quel type de connexion configurez-vous ?",
'p700t003' : "Ma connexion est :",
'p700t005' : "Connexion dynamique",
'p700t007' : "Connexion PPPoE",
'p700t008' : "Connexion L2TP ou PPTP",
'p700t013' : "Connexion statique",
'p700t014' : 'Je ne suis pas certain de mon type de connexion :',
'p700t914' : "Si vous n'arrivez toujours pas à déterminer votre type de connexion, contactez votre fournisseur d'accès à Internet (FAI).",
'p700t016' : "Essayez à nouveau la configuration automatique",
'p700t017' : "Types de connexion",
'p700t018' : "<span class=\"black\">Dynamique —</span> Courant chez les fournisseurs d'accès Internet câble/fibre optique, et certains fournisseurs DSL.",
'p700t019' : "<span class=\"black\">PPPoE et PPTP —</span> Exigent un nom d'utilisateur et un mot de passe fournis par le FAI.",
'p700t021' : "<span class=\"black\">Statique —</span> Ce type de connexion exige des paramètres personnalisés qui sont uniques à chaque utilisateur. <span class=\"nub\"></span>",
'p701MRt001' : "Vous avez choisi une connexion dynamique.",
'p701MRt002' : "Votre fournisseur d'accès Internet devrait vous avoir fourni des paramètres supplémentaires.",
'p701MRt004' : "Paramètres dynamiques :",
'p701MRt006' : "0",
'p701MRt007' : "0",
'p701MRt016' : "Essayer ma connexion",
'p701MRt017' : "Connexions dynamiques",
'p701MRt018' : "Une connexion dynamique est configurée automatiquement une fois que la communication avec le fournisseur d'accès à Internet a été établie. <span class=\"nub\"></span>",
'p701t001' : "Établissement d'une connexion dynamique...",
'p701t002' : " Nous demandons à votre fournisseur d'accès Internet d'établir une connexion.",
'p702t001' : "Redémarrage du modem en cours...",
'p702t002' : "Nous nous apprêtons à essayer un autre type de connexion en redémarrant votre modem.",
'p710MRt001' : "Vous avez choisi une connexion statique.",
'p710MRt002' : "Votre fournisseur d'accès Internet devrait vous avoir fourni des paramètres de connexion statique. Si vous ne pouvez les trouver, communiquez avec votre FAI.",
'p710MRt004' : "Paramètres statiques :",
'p710MRt005' : "Adresse IP :",
'p710MRt006' : "0",
'p710MRt007' : "Masque de sous-réseau :",
'p710MRt008' : "0",
'p710MRt009' : "Passerelle par défaut :",
'p710MRt010' : "0",
'p710MRt011' : "Serveur DNS principal :",
'p710MRt012' : "0",
'p710MRt013' : "Serveur DNS secondaire :",
'p710MRt014' : "0",
'p710MRt015' : "Remarque : tous les FAI exigent un serveur DNS secondaire.",
'p710MRt016' : "Essayer ma connexion statique",
'p710MRt017' : "Connexions statiques",
'p710MRt018' : "Une connexion statique est configurée manuellement, mais fournit une adresse fixe à votre routeur, vous permettant d'accéder plus facilement à votre routeur de l'extérieur de votre réseau. Les connexions statiques sont rares pour les services Internet résidentiels et coûtent généralement plus cher. <span class=\"nub\"></span>",
'p710t001' : "Vous avez choisi une connexion statique.",
'p710t002' : "Votre fournisseur d'accès Internet devrait vous avoir fourni des paramètres de connexion statique. Si vous ne pouvez les trouver, communiquez avec votre FAI.",
'p710t004' : "Paramètres statiques :",
'p710t005' : "Adresse IP :",
'p710t006' : "0",
'p710t007' : "Masque de sous-réseau :",
'p710t008' : "0",
'p710t009' : "Passerelle par défaut :",
'p710t010' : "0",
'p710t011' : "Serveur DNS principal :",
'p710t012' : "0",
'p710t013' : "Serveur DNS secondaire :",
'p710t014' : "0",
'p710t015' : "Remarque : tous les FAI exigent un serveur DNS secondaire.",
'p710t016' : "Essayer ma connexion statique",
'p710t017' : "Connexions statiques",
'p710t018' : "Une connexion statique est configuré manuellement, mais fournit une adresse fixe à votre routeur, vous permettant d'accéder plus facilement à votre routeur de l'extérieur de votre réseau. Les connexions statiques sont rares pour les services Internet résidentiels et coûtent généralement plus cher.  <span class=\"nub\"></span>",
'p711t001' : "Établissement d'une connexion statique...",
'p711t002' : " Nous demandons à votre fournisseur d'accès Internet d'établir une connexion.",
'p712t001' : "Quelque chose ne va pas avec vos paramètres de connexion statique.",
'p712t002' : "L'une des adresses ou un autre élément entré est incorrect(e), mais nous ne pouvons dire lequel.",
'p800t001' : "Application des modifications en cours.",
'p800t002' : "Nous allons appliquer vos modifications et redémarrer le routeur pour les confirmer.",
'p801t002' : " Nous attendons que le routeur se reconnecte. Une fois reconnecté, nous pourrons continuer.",
'p802t002' : "Une connexion sans fil au routeur est nécessaire pour continuer.",
'p802t004' : "Allez au menu réseau sans fil de votre appareil",
'p802t005' : "Sélectionnez votre nouveau réseau, appelé <strong tid=\"Network24SSID\">{REPLACE WITH 2.4 SSID}</strong>",
'p802t007' : "Entrez votre mot de passe, soit <strong tid=\"Network24Passkey\">{REPLACE WITH 2.4 PASSWORD}</strong>",
'p802t009' : "Vous serez connecté au routeur et nous pourrons continuer.",
'p802t010' : " Nous attendons que le routeur se reconnecte.",
'p803t002' : "Une connexion sans fil au routeur est nécessaire pour continuer.",
'p803t003' : "Puisque vous avez changé le nom du réseau, vous devrez peut-être sélectionner à nouveau votre réseau sans fil :",
'p803t004' : "Allez au menu réseau sans fil de votre appareil",
'p803t005' : "Sélectionnez votre nouveau réseau, appelé <strong tid=\"Network24SSID\">{REPLACE WITH 2.4 SSID}</strong>",
'p803t007' : "Entrez votre mot de passe, soit <strong tid=\"Network24Passkey\">{REPLACE WITH 2.4 PASSWORD}</strong>",
'p803t009' : "Vous serez connecté au routeur et nous pourrons continuer.",
'p803t010' : " Nous attendons que vous vous reconnectiez.",
'p804t001' : "Votre dispositif ne se reconnecte pas.",
'p804t002' : "Cela arrive parfois et c'est assez facile à corriger.",
'p804t025' : "Si vous avez sous la main un dispositif pouvant se connecter à Internet, allez à l'adresse suivante : <strong>http://belk.in/PMuxOg</strong>",
'p804t026' : "Si cela ne fonctionne pas, branchez le câble Ethernet directement entre votre modem et l'ordinateur.",
'p804t027' : " Une fois la connexion établie, nous continuerons la procédure automatiquement.",
'p900t001' : "Vous devez redémarrer votre modem.",
'p900t002' : "Votre modem ne parle pas.",
'p900t003' : "Veuillez suivre la procédure suivante pour redémarrer votre modem :",
'p900t004' : "Éteignez le modem. Pour ce faire, utilisez l'interrupteur marche/arrêt ou débranchez le modem de sa source d'alimentation. Certains modems ont une batterie. Le cas échéant, vous devez trouver le bouton de réinitialisation du modem.",
'p900t005' : "Patientez 15 secondes.",
'p900t006' : "Allumez de nouveau le modem.",
'p900t007' : "Après quelques secondes, ses voyants s'allument et il sera prêt à parler au routeur.",
'p900t008' : "Nous attendons que votre modem s'éteigne puis se rallume, et nous continuerons automatiquement.",
'p900t009' : "Pourquoi redémarrer le modem ?",
'p900t010' : "Il est parfois nécessaire de redémarrer un modem pour qu'il communique avec un nouveau routeur ou un ordinateur inconnu. Nous pouvons voir votre modem, mais il ne parle pas à votre nouveau routeur. Redémarrer le modem devrait résoudre le problème. <span class=\"nub\"></span>",
'p901t001' : "Veuillez redémarrer votre modem maintenant...",
'p901t002' : " Nous attendons que votre modem s'éteigne puis se rallume.",
'p902t001' : "Votre modem est maintenant éteint....",
'p902t002' : " Nous attendons qu'il se rallume.",
'p903t001' : "Besoin d'un peu plus de temps ?",
'p903t002' : " Nous attendons que votre modem se rallume. Avez-vous besoin d'un peu plus de temps ?",
'p903t005' : "Il s'agit habituellement d'utiliser l'interrupteur marche/arrêt sur le modem ou simplement de le débrancher de sa source d'alimentation, mais certains modems possèdent une batterie. Pour ces derniers, vous devrez trouver le bouton de réinitialisation du modem.",
'p904t001' : "Besoin d'un peu plus de temps ?",
'p904t002' : " Nous attendons que votre modem se rallume. Avez-vous besoin d'un peu plus de temps ?",
'p905t001' : "Nous voyons à nouveau votre modem....",
'p905t002' : " Nous attendons qu'il se synchronise avec votre avec votre FAI. Cela prend une minute ou deux.",
'p950IMRt001' : "Nous n'avons pas été en mesure de détecter une connexion à votre ligne ADSL.",
'p950IMRt002' : "Assurez-vous qu'un câble relie la prise murale ADSL au port gris sur votre routeur.",
'p950IMRt004' : "Nous pensons qu'il y a un problème de câblage.",
'p950IMRt005' : "Il devrait y avoir un câble réseau reliant le port gris sur votre routeur à la prise téléphone/ADSL. Ce câble transmet le signal de votre FAI vers votre routeur. Sans lui, vous ne pouvez pas vous connecter à Internet. Vérifiez que ce câble est correctement branché.",
'p950IMRt006' : "Vos branchements devraient ressembler à ceci :",
'p950IMRt007' : "Il devrait y avoir un câble réseau reliant la prise murale ADSL et la prise d'alimentation de votre routeur (avec modem intégré). Ce câble transmet le signal de votre FAI vers votre routeur. Sans lui, vous ne pouvez pas vous connecter à Internet.",
'p950IMRt009' : "Vos branchements devraient ressembler à ceci :",
'p950IMRt010' : "Nous allons continuer à vérifier la présence d'une connexion pendant que vous vérifiez les branchements.",
'p950IMRt014' : "Branchements",
'p950IMRt015' : "Le problème le plus courant est un mauvais branchement entre la prise murale et le routeur. Il est important de vérifier les deux extrémités du câble. Une extrémité doit être branchée au port gris sur votre nouveau routeur, et l'autre extrémité doit être branchée à la prise ADSL. Dans certains cas, un filtre doit être placé entre la prise murale et le câble. <span class=\"nub\"></span>",
'p950PMt001' : "Nous n'avons pas été en mesure de détecter une connexion à votre ligne ADSL.",
'p950PMt002' : "Assurez-vous qu'il y a une connexion réseau entre votre routeur et sa fiche d'alimentation électrique (avec modem intégré).",
'p950PMt004' : "Nous pensons qu'il y a un problème de câblage.",
'p950PMt005' : " Vérifiez que le câble réseau qui se sépare du cordon d'alimentation du modem est connecté au port jaune WAN de votre routeur. Sans cette connexion réseau, vous ne pouvez pas aller sur Internet.",
'p950PMt009' : "Vos branchements devraient ressembler à ceci :",
'p950PMt010' : "Nous allons continuer à vérifier la présence d'une connexion pendant que vous vérifiez les branchements.",
'p950PMt011' : "Branchements",
'p950PMt012' : "Le problème le plus courant est un mauvais branchement entre la prise murale et le modem. Il est important de vérifier les deux extrémités du câble. Une extrémité doit être branchée à la prise d'alimentation de votre nouveau routeur, et l'autre extrémité doit être branchée à la prise ADSL. Dans certains cas, un filtre doit être placé entre la prise murale et le câble. <span class=\"nub\"></span>",
'p950t001' : "Nous n'avons pas détecté de connexion à votre modem.",
'p950t002' : "Assurez-vous que votre modem est branché et mis sous tension.",
'p950t003' : "Assurez-vous qu'un câble Ethernet est connecté entre votre modem et votre routeur.",
'p950t004' : "Nous pensons qu'il y a un problème de câblage.",
'p950t005' : "Votre modem doit être allumé et un câble Ethernet doit être branché à votre modem et au port jaune sur votre routeur.",
'p950t006' : "Veuillez vérifier les éléments suivants :",
'p950t007' : "Assurez-vous que le modem est allumé. Vérifiez à ce que l'adaptateur secteur soit branché aux deux extrémités, et à ce qu'un un ou plusieurs voyant(s) du modem soient allumé(s).",
'p950t008' : "Un câble Ethernet doit être branché à votre modem et au port jaune sur votre routeur. Ce câble transmet le signal de votre modem vers votre routeur. Sans lui, vous ne pouvez pas vous connecter à Internet.",
'p950t009' : "Vos branchements devraient ressembler à ceci :",
'p950t010' : "Nous allons continuer à vérifier la présence d'une connexion pendant que vous vérifiez les branchements.",
'p950t011' : "Branchements",
'p950t012' : "Le problème le plus courant est un mauvais branchement entre le modem et le routeur. Une extrémité doit être branchée au port jaune sur votre nouveau routeur, et l'autre extrémité doit être branchée dans un port similaire sur votre modem. Assurez-vous que les deux extrémités sont correctement branchées. Les divers fabricants de modems donnent divers noms aux ports. Vous trouverez peut-être un port nommé « données », « LAN », « réseau » ou « Ethernet ». <span class=\"nub\"></span>",
'p951IMRt001' : "Besoin d'un peu plus de temps ?",
'p951IMRt002' : " Nous attendons pendant que vous branchez la ligne ADSL. Avez-vous besoin d'un peu plus de temps ?",
'p951t001' : "Besoin d'un peu plus de temps ?",
'p951t002' : " Nous attendons que votre modem se rallume. Avez-vous besoin d'un peu plus de temps ?",
'pDAt001' : "Administrateur secondaire",
'pDAt002' : "Ce périphérique est administré par  <span id=\"ipaddr\"></span> en ce moment !",
'PIC_blocked_content' : "Le contrôle parental Internet est activé et l’accès Internet de cet appareil est actuellement bloqué. Appuyez sur le bouton ci-dessous pour gérer les paramètres du contrôle parental Internet.",
'PIC_blocked_title' : "L’accès Internet de cet appareil est actuellement bloqué.",
'PIC_S1t0006' : "Programmer l’accès Internet :",
'PIC_S1t006' : "Récemment sur votre réseau :",
'PIC_S2t003' : "Soirs d’école",
'PIC_S2t004' : "Week-ends",
'PIC_S2t005' : "(Dimanche – Jeudi)",
'PIC_S2t006' : "(Vendredi – Samedi)",
'PIC-blocked' : "bloqué",
'PIC-S1dt001' : "Voulez-vous suspendre la connexion Internet de tout votre réseau ?",
'PIC-S1t001' : "Bloquer tous les appareils",
'PIC-S1t003' : "Tous les appareils sont déconnectés d’Internet.",
'PIC-S1t004' : "Restaurer l’accès",
'PIC-S1t005' : "Actuellement sur votre réseau :",
'PIC-S1t010' : "Recherche d’appareils :",
'PIC-S1t020' : "L'horaire de contrôle parental sur Internet est suspendu",
'PIC-S1t021' : "Le routeur ne sait pas l'heure actuelle, ce qui empêche le blocage/déblocage des sites suivant l'horaire de contrôle parental.  Ce problème sera résolu lorsque votre routeur rétablira l'heure exacte en se reconnectant au serveur de temps NTP.",
'PIC-S1t022' : "Votre routeur va vérifier auprès du serveur de temps NTP toutes les quelques minutes, ou vous pouvez modifier le serveur de temps en visitant <a href=\"#\" tid=\"gtSystemSettings\" style=\"\">Paramètres système</a>.",
'PIC-unblocked' : "débloqué",
'pNoTime_content' : "Votre routeur n’est pas capable d’indiquer l’heure, car il a perdu contact avec un serveur de temps NTP. Les fonctions du serveur basées sur l'heure, comme le Contrôle parental Internet, le mode Éco et la fonction d'auto-réparation, sont désactivées jusqu’à ce qu’il puisse entrer en contact avec un serveur de temps NTP. <br> <br>Le routeur vérifie automatiquement l'heure toutes les quelques minutes.",
'pNoTime_title' : "Quelle heure est-il ?",
'pODLAplt001' : "Application du module linguistique en cours",
'pODLAplt002' : "Modification de la langue choisie...",
'pODLDLt001' : "Téléchargement du module linguistique en cours",
'pODLDLt002' : "Téléchargement de la langue choisie à partir du serveur...",
'pODLErrt001' : "Désolé",
'pODLErrt002' : "OK",
'pStatst004' : "Voir tous &raquo;",
'Support1t001' : "Nous n'avons pas détecté de connexion à votre modem.",
'Support1t002' : "Assurez-vous que votre modem est branché et mis sous tension.",
'Support1t003' : "Assurez-vous qu'un câble Ethernet est connecté entre votre modem et votre routeur.",
'Support1t004' : "Nous pensons qu'il y a un problème de câblage.",
'Support1t005' : "Votre modem doit être allumé et un câble Ethernet doit être branché à votre modem et au port jaune sur votre routeur.",
'Support1t006' : "Veuillez vérifier les éléments suivants :",
'Support1t007' : "Assurez-vous que le modem est allumé. Vérifiez à ce que l'adaptateur secteur soit branché aux deux extrémités, et à ce qu'un un ou plusieurs voyant(s) du modem soient allumé(s).",
'Support1t008' : "Un câble Ethernet doit être branché à votre modem et au port jaune sur votre routeur. Ce câble transmet le signal de votre modem vers votre routeur. Sans lui, vous ne pouvez pas vous connecter à Internet.",
'Support1t009' : "Vos branchements devraient ressembler à ceci :",
'Support1t010' : "Après avoir suivi toutes ces étapes, cliquez sur Réessayer.",
'Support7t012' : "Allez à <strong>http://belk.in/Q4XXca</strong> sur un dispositif connecté à l'Internet",
'Support1t016' : "Branchements",
'Support1t017' : "Le problème le plus courant est un mauvais branchement entre le modem et le routeur. Une extrémité doit être branchée au port jaune sur votre nouveau routeur, et l'autre extrémité doit être branchée dans un port similaire sur votre modem. Assurez-vous que les deux extrémités sont correctement branchées. Les divers fabricants de modems donnent divers noms aux ports. Vous trouverez peut-être un port nommé « données », « LAN », « réseau » ou « Ethernet ». <span class=\"nub\"></span>",
'Support2t001' : "Votre modem n'a pas redémarré.",
'Support2t002' : "Essayez de débrancher l'alimentation de votre modem.",
'Support2t003' : "Votre modem a peut-être un bouton de réinitialisation sur lequel vous devez appuyer.",
'Support2t004' : "Vous avez de la difficulté à redémarrer votre modem ?",
'Support2t005' : "Essayez la procédure suivante pour redémarrer votre modem :",
'Support2t006' : "Débranchez l'alimentation de votre modem.",
'Support2t007' : "Attendez que tous les voyants du modem soient éteints.",
'Support2t008' : "Si les voyants restent allumés, votre modem est peut-être équipé d'une batterie de secours. Quelque part (souvent au dos) se trouve un bouton de réinitialisation. Appuyez sur ce bouton.",
'Support2t009' : "Les voyants du modem devraient s'éteindre. Attendez quelques secondes avant de rebrancher l'alimentation.",
'Support2t010' : "Après avoir suivi toutes ces étapes, cliquez sur Réessayer.",
'Support2t016' : "Pourquoi redémarrer le modem ?",
'Support2t017' : "Il est parfois nécessaire de redémarrer un modem pour qu'il communique avec un nouveau routeur ou un ordinateur inconnu. Nous pouvons voir votre modem, mais il ne parle pas à votre nouveau routeur. Redémarrer le modem devrait résoudre le problème. <span class=\"nub\"></span>",
'Support3MRt001' : "Nous n'avons pas été en mesure de détecter une connexion à votre ligne ADSL.",
'Support3MRt002' : "Vérifiez qu'un câble réseau relie la prise murale ADSL et votre routeur.",
'Support3MRt003' : "Dans certaines régions, un filtre est nécessaire.",
'Support3MRt004' : "Nous sommes pratiquement sûrs qu'il y a un problème de branchement.",
'Support3MRt005' : "Il devrait y avoir un câble reliant le port gris sur votre routeur à la prise téléphone/ADSL.",
'Support3MRt006' : "Vérifiez que les deux extrémités du câble sont bien en place.",
'Support3MRt007' : "Vérifiez que le câble est branché au port gris du routeur, plutôt que sur l'un des ports jaunes.",
'Support3MRt008' : "Si l'on vous a donné un filtre ADSL, vérifiez qu'il est bien en place entre le câble et la prise ADSL.",
'Support3MRt010' : "Vérifiez que les deux extrémités du câble sont bien en place.",
'Support3MRt011' : "Vérifiez que le câble est bien branché au port réseau de la source d'alimentation de votre routeur.",
'Support3MRt012' : "Si l'on vous a donné un filtre ADSL, vérifiez qu'il est bien en place entre le câble et la prise ADSL.",
'Support3MRt016' : "Après avoir effectué toutes ces vérifications, vous pouvez réessayer.",
'Support3MRt018' : "Accédez à l'URL suivante sur un appareil connecté à Internet et découvrez comment résoudre le problème vous-même : <strong>www.belkin.com/support3mr</strong>",
'Support3MRt021' : "Branchements",
'Support3MRt022' : "Les problèmes de branchements les plus courants se trouvent au niveau de la prise ADSL. Il est important de vérifier les deux extrémités du câble. <span class=\"nub\"></span>",
'Support3MRt050' : "Vérifiez qu'il y a un câble réseau entre l'alimentation de votre routeur et la prise téléphonique.",
'Support3MRt051' : "Il devrait y avoir un câble reliant l'alimentation de votre routeur à votre prise téléphone/ADSL.",
'Support3PMt001' : "Nous n'avons pas été en mesure de détecter une connexion à votre ligne ADSL.",
'Support3PMt002' : "Assurez-vous qu'il y a une connexion réseau entre votre routeur et sa fiche d'alimentation électrique (avec modem intégré).",
'Support3PMt004' : "Nous sommes pratiquement sûrs qu'il y a un problème de branchement.",
'Support3PMt005' : "Il devrait y avoir une connexion réseau entre le port jaune sur votre routeur et l'alimentation du routeur.",
'Support3PMt006' : "Regardez à la prise d'alimentation du routeur et repérez le câble qui se divise en deux câbles distincts. L'un de ces câbles possède une fiche Ethernet.",
'Support3PMt007' : "Insérez la fiche dans le port Ethernet jaune sur votre routeur.",
'Support3PMt010' : "Après avoir effectué cette opération, vous pouvez réessayer.",
'Support3PMt012' : "Allez à <strong>www.belkin.com/support3PM</strong> sur un dispositif connecté à l'Internet",
'Support3PMt016' : "Branchements",
'Support3PMt017' : "Il est essentiel de vous assurer que toutes les connexions entre la prise ADSL et le routeur soient adéquates. Le routeur s'attend à ce que ce signal entre par le port jaune. Le câble provenant de la source d'alimentation de votre routeur transporte ce signal et l'alimentation vers le routeur. Les deux moitiés doivent être branchées au routeur pour que tout fonctionne comme il se doit. <span class=\"nub\"></span>",
'Support3t001' : "Votre modem ne s'est pas rallumé.",
'Support3t002' : "Vérifiez que le modem est sous tension.",
'Support3t003' : "Vous devrez peut-être attendre un peu pour qu'il soit prêt.",
'Support3t004' : "Vous avez de la difficulté à redémarrer votre modem ?",
'Support7t005' : "Essayez les étapes suivantes pour établir une connexion ADSL :",
'Support7t006' : "Vérifiez que le câble réseau de votre modem-routeur est relié à une prise téléphonique avec connexion Internet active. Puis cliquez sur Réessayer et vérifiez que votre modem-routeur détecte la connexion Internet.",
'Support7t007' : "Si votre modem-routeur partage la prise téléphonique avec un téléphone fixe (par le biais d'un séparateur), remplacez le séparateur par un filtre séparateur (facultatif). Puis cliquez sur Réessayer et vérifiez que votre modem-routeur détecte le FAI.",
'Support7t008' : "Si l'étape 2 ci-dessus ne fonctionne pas, c'est qu'un filtre ADSL peut être nécessaire*. Si vous en avez quelques-uns (habituellement fournis par votre fournisseur d'accès à Internet), connectez-les entre chaque téléphone fixe et leur prise téléphonique.",
'Support7t009' : "Si la connexion ADSL ne fonctionne toujours pas après avoir essayé les étapes 1-3 ci-dessus, contactez votre fournisseur d'accès à Internet pour obtenir de l'aide. Dites-leur que vous avec de la difficulté à faire synchroniser votre modem-routeur avec le FAI.",
'Support3t010' : "Après avoir suivi toutes ces étapes, cliquez sur Réessayer.",
'Support3t016' : "Pourquoi redémarrer le modem ?",
'Support3t017' : "Il est parfois nécessaire de redémarrer un modem pour qu'il communique avec un nouveau routeur ou un ordinateur inconnu. Nous pouvons voir votre modem, mais il ne parle pas à votre nouveau routeur. Redémarrer le modem devrait résoudre le problème. <span class=\"nub\"></span>",
'Support4t001' : "Nous n'avons pu nous reconnecter à votre routeur.",
'Support4t002' : "Essayez de redémarrer le routeur.",
'Support4t003' : "Après son redémarrage, essayez de vous connecter à nouveau à votre routeur.",
'Support4t004' : "Essayons autre chose.",
'Support4t005' : "Tout d'abord, nous allons redémarrer votre routeur.",
'Support4t006' : "Débranchez l'alimentation de votre routeur, attendez quelques secondes, puis rebranchez-la.",
'Support4t006w' : "Débranchez l'alimentation de votre routeur, attendez quelques secondes, puis rebranchez-la.",
'Support4t007' : "Lorsque votre routeur affiche une voyant bleu, nous sommes prêt à nous connecter.",
'Support4t008' : "Ensuite, nous allons essayer une connexion sans fil.",
'Support4t031' : "Quelques secondes sont nécessaires pour établir la connexion, vous pourrez ensuite réessayer.",
'Support4t032' : "Ou vous pouvez essayer une connexion filaire.",
'Support4t033' : "Envisagez de brancher un ordinateur au routeur. Branchez un câble Ethernet entre l'ordinateur et l'un des ports de gris sur le routeur. Visiter ensuite http://router/ pour recommencer l'installation et la configuration.",
'Support4t034' : "Après avoir suivi toutes ces étapes, cliquez sur Réessayer.",
'Support4t040' : "Aller à <strong>http://belk.in/PMuxOg</strong> sur un dispositif connecté à l'Internet",
'Support4t050' : "Rétablissement de la connexion",
'Support4t051' : "Dans ces situations, votre routeur pourrait avoir besoin d'être redémarré ou tout simplement avoir besoin de rétablir la connexion. Nous avons donc inclus des instructions pour ces deux situations. Puisque vous avez peut-être changé le mot de passe réseau à une étape précédente, vous devrez peut-être re-sélectionner le réseau après avoir redémarré le routeur. <span class=\"nub\"></span>",
'Support5t001' : "Nous n'avons pu nous reconnecter à votre routeur.",
'Support5t002' : "Essayez de redémarrer le routeur.",
'Support5t003' : "Après son redémarrage, essayez de vous connecter à nouveau à votre routeur.",
'Support5t004' : "Essayons autre chose.",
'Support5t005' : "Tout d'abord, nous allons redémarrer votre routeur.",
'Support5t006' : "Débranchez l'alimentation de votre routeur, attendez quelques secondes, puis rebranchez-la.",
'Support5t006w' : "Débranchez votre routeur, attendez quelques secondes, puis rebranchez-le.",
'Support5t007' : "Lorsque votre routeur affiche une voyant bleu, nous sommes prêt à nous connecter.",
'Support5t008' : "Ensuite, nous allons essayer une connexion sans fil.",
'Support5t009' : "Quelques secondes sont nécessaires pour établir la connexion, vous pourrez ensuite réessayer.",
'Support5t010' : "Ou vous pouvez essayer une connexion filaire.",
'Support5t011' : "Vous pouvez aussi brancher un ordinateur au routeur. Branchez un câble Ethernet entre l'ordinateur et l'un des ports de gris sur le routeur. Visiter ensuite http://router/ pour recommencer l'installation et la configuration.",
'Support5t012' : "Après avoir suivi toutes ces étapes, cliquez sur Réessayer.",
'Support5t015' : "Aller à <strong>http://belk.in/PMuxOg</strong> sur un dispositif connecté à l'Internet",
'Support5t020' : "Rétablissement de la connexion",
'Support5t021' : "Dans ces situations, il est difficile de dire si votre routeur doit être redémarré ou si c'est la connexion qui doit être rétablie. C'est pourquoi nous avons inclus des instructions pour ces deux situations. Parce que nous avons changé le nom du réseau à une étape précédente, assurez-vous de vous connecter au nouveau réseau après avoir redémarré le routeur. <span class=\"nub\"></span>",
'Support6t001' : "Nous n'avons pu nous reconnecter à votre routeur.",
'Support6t002' : "Essayez de redémarrer le routeur.",
'Support6t003' : "Après son redémarrage, essayez de vous connecter à nouveau à votre routeur.",
'Support6t004' : "Essayons autre chose.",
'Support6t005' : "Tout d'abord, nous allons redémarrer votre routeur.",
'Support6t006' : "Débranchez l'alimentation de votre routeur, attendez quelques secondes, puis rebranchez-la.",
'Support6t006w' : "Débranchez votre routeur, attendez quelques secondes, puis rebranchez-le.",
'Support6t007' : "Lorsque votre routeur affiche une voyant bleu, nous sommes prêt à nous connecter.",
'Support6t008' : "Ensuite, nous allons essayer une connexion sans fil.",
'Support6t031' : "Quelques secondes sont nécessaires pour établir la connexion, vous pourrez ensuite réessayer.",
'Support6t032' : "Ou vous pouvez essayer une connexion filaire.",
'Support6t033' : "Vous pouvez aussi brancher un ordinateur au routeur. Branchez un câble Ethernet entre l'ordinateur et l'un des ports de gris sur le routeur. Visiter ensuite http://router/ pour recommencer l'installation et la configuration.",
'Support6t034' : "Après avoir suivi toutes ces étapes, cliquez sur Réessayer.",
'Support6t037' : "Allez à <strong>http://belk.in/PMuxOg</strong> sur un dispositif connecté à l'Internet",
'Support6t050' : "Rétablissement de la connexion",
'Support6t051' : "Dans ces situations, votre routeur pourrait avoir besoin d'être redémarré ou tout simplement avoir besoin de rétablir la connexion. Nous avons donc inclus des instructions pour ces deux situations. Puisque vous avez peut-être changé le mot de passe réseau à une étape précédente, vous devrez peut-être re-sélectionner le réseau après avoir redémarré le routeur. <span class=\"nub\"></span>",
'Support7t001' : "Votre modem-routeur n'est pas connecté à Internet.",
'Support7t004' : "Il y a un problème avec la connexion à votre prise téléphonique.",
'Support7t050' : "Problèmes de connexion",
'Support7t051' : "Dans ces situations, il est difficile de dire pourquoi vous éprouvez des difficultés à vous connecter à votre FAI. Nous avons vérifié le câblage dans la mesure du possible, la prochaine étape est de vérifier que vous utilisez la bonne prise, un filtre si nécessaire, et si le problème n'est toujours pas résolu, de communiquer avec votre FAI. <span class=\"nub\"></span>",
'SupportNumber' : "1 800 123-4567",
'UpSpeed' : "12.5",
'p2410t012' : "En cliquant sur 'Restaurer', les paramètres de votre routeur comme le nom et le mot de passe seront effacés et remplacés par les valeurs par défaut d'usine.  Vos ordinateurs, téléphones, etc. devraient alors être configurés avec ces mêmes paramètres pour se connecter à Internet par ce routeur.  Souhaitez-vous continuer ?",
'gtRestore' : "Restaurer",
'gtCancel' : "Annuler",
'alt="Loading"' : "Chargement en cours",
'alt="Restart Router"' : "Redémarrer le routeur",
'alt="Check Wires"' : "Vérifier les câbles",
'alt="Check Phone Connection"' : "Vérifier la connexion téléphonique",
'alt="Check WAN Connection"' : "Vérifier la connexion WAN",
'alt="Checkmark"' : "Cocher",
'alt="Change"' : "Modifier",
'alt="Print"' : "Imprimer",
'alt="Expand"' : "Développer",
'alt="Caret"' : "Caret",
'alt="Cut"' : "Couper",
'alt="Browser"' : "Navigateur",
'alt="Wifi"' : "Wifi",
'alt="Password"' : "Mot de passe",
'alt="Check Phone Jack"' : "Vérifier la prise téléphone",
'alt="Turn Off Modem"' : "Éteindre le modem",
'alt="Turn On Modem"' : "Allumer le modem",
'alt="Check Phone Filters"' : "Vérifier les filtres",
'gtSerial' : "N° de série",
'gt5GName' : "SSID 5  GHz",
'gt5GKey' : "Clé 5  GHz",
'p1020MRt001' : "Nous allons avoir du mal à parler avec votre fournisseur d'accès Internet.",
'p1020MRt002' : "Veuillez redémarrer votre modem-routeur.",
'p1020MRt003' : "Nous n'obtenons pas de connexion Internet, nous allons donc essayer de redémarrer votre modem-routeur.",
'p1020MRt004' : "Éteignez le modem-routeur. Pour ce faire, utilisez l'interrupteur marche/arrêt ou débranchez le modem-routeur de sa source d'alimentation.",
'p1020MRt005' : "Patientez 15 secondes.",
'p1020MRt006' : "Allumez de nouveau le modem-routeur.",
'p1020MRt007' : "Après quelques secondes, ses voyants sont allumés et il devrait communiquer avec votre FAI.",
'p1020MRt008' : "Si le problème persiste, veuillez contacter votre FAI pour résoudre le problème avec votre compte.",
'p1020MRt009' : "Nous attendons que votre modem s'éteigne puis se rallume, et nous continuerons automatiquement.",
'p1020MRt010' : "Pourquoi redémarrer le modem ?",
'p1020MRt011' : "Il est parfois nécessaire de redémarrer un modem pour qu'il communique avec un nouveau routeur ou un ordinateur inconnu. Si votre fournisseur d'accès Internet éprouve des problèmes, le modem peut couper la connexion de manière inattendue. Nous pouvons voir votre modem, mais pas l'Internet. Redémarrer le modem devrait résoudre le problème. <span class=\"nub\"></span>",
'p1010t001' : "Nous avons de la difficulté à parler avec votre modem.",
'p1010t002' : "Nous pensons qu'il y a un problème de câblage.",
'p1010t003' : "Un câble doit être branché à votre modem et au port jaune sur votre routeur. Votre modem doit être allumé.",
'p1010t004' : "Vous pouvez effectuer quelques manipulations pour vous assurer que tout est en ordre.",
'p1010t005' : "Assurez-vous que le modem est allumé. Son adaptateur d'alimentation doit être branché aux deux extrémités, et un ou plusieurs voyants sur le modem doit être allumé.",
'p1010t006' : "Un câble réseau doit être branché à votre modem et au port jaune sur votre routeur. Ce câble transmet le signal de votre modem vers votre routeur. Sans lui, vous ne pouvez pas vous connecter à Internet.",
'p1010t007' : "Si tout est branché correctement, essayez de redémarrer votre modem en débranchant son alimentation, en attendant une quinzaine de secondes, puis en le rebranchant. Certains modems ont une batterie. Le cas échéant, vous devez trouver le bouton de réinitialisation du modem.",
'p1010t008' : "Vos branchements devraient ressembler à ceci :",
'p1010t009' : "Nous allons continuer à vérifier la présence d'une connexion pendant que vous vérifiez les branchements.",
'p1010t010' : "Le problème le plus courant est un mauvais branchement entre le modem et le routeur. Il est important de vérifier les deux extrémités du câble. Une extrémité doit être branchée au port jaune sur votre nouveau routeur, et l'autre extrémité doit être branchée dans un port similaire sur votre modem. Les divers fabricants de modems donnent divers noms aux ports. Vous trouverez peut-être un port nommé « données », « LAN », « réseau » ou « Ethernet ».",
'Support3t005' : "Essayez la procédure suivante pour redémarrer votre modem :",
'Support3t006' : "Regardez si les voyants de la face avant sont allumés. S'ils sont allumés, votre modem est allumé, et vous devrez peut-être attendre un peu pour qu'il soit prêt.",
'Support3t007' : "Vérifiez que l'alimentation de votre modem est correctement connectée au modem et à la prise murale.",
'Support3t008' : "Si votre modem dispose d'un interrupteur d'alimentation, vérifiez s'il est en position de marche.",
'Support3t009' : "Vérifiez que votre modem est toujours connecté à votre nouveau routeur.",
'Support1t012' : "Allez à <strong>http://belk.in/LIkBoH</strong> sur un dispositif connecté à l'Internet",
'QOSt001' : 'Pour activer Intellistream, procédez comme suit :',
'QOSt002' : 'Connectez votre ordinateur à votre routeur Belkin à l\'aide d\'un câble Ethernet (recommandé).',
'QOSt003' : 'Effectuez un test de vitesse sur votre connexion Internet en cliquant ici pour <a href="http://www.speedtest.net" target="_blank" class="speed_font4">Speedtest.net</a>.',
'QOSt004' : 'Après avoir effectué le test de vitesse, entrez les valeurs obtenues sur Speedtest.net dans les champs Vitesse en aval et Vitesse en amont, puis cliquez sur \'Enregistrer\'.',
'gtMbps' : 'Mbit/s',
'QOSt006' : 'Compte tenu de votre vitesse de téléchargement en aval élevée, Intellistream ne donnera la priorité qu\'à votre vitesse de téléchargement en amont.',
'QOSt007' : 'Compte tenu de votre vitesse de téléchargement en amont élevée, Intellistream ne donnera la priorité qu\'à votre vitesse de téléchargement en aval.',
'QOSt008' : 'La vitesse de votre connexion Internet étant élevée, Intellistream ne vous sera pas utile. La fonction sera désactivée.',
'QOSt009' : 'Veuillez entrer un nombre plus grand que 0,01.',
'QOSt010' : 'Veuillez entrer des nombres plus grands que 0,01.',
'gtSettingsNotSaved' : 'Certains paramètres n\'ont pas été enregistrés. Cliquez ici pour les enregistrer, ou quittez ou actualisez pour abandonner les modifications.',
'QOSt011' : 'Veuillez entrer un nombre compris entre 0,01 et 100,00.',
'QOSt012' : 'Veuillez entrer un nombre compris entre 0,01 et 100,00.',
'QOSt013' : 'Veuillez entrer un nombre compris entre 0,01 et 1000,00.',
'QOSt014' : 'Veuillez entrer un nombre compris entre 0,01 et 1000,00.',


// End belkin transation table
LastID : "LastValue"	
	
	
}

function translate(key) {
	return langDictionary[key];
}
