function dw(message)
{
	document.write(message);	
}

// Note this dictionary is a temporary demonstration
var langDictionary = {

// Copy belkin transation table to here	
'p100t011' : "tableau de bord.",
'p220t001' : "Vous avez une connexion DSL de type PPTP",
'p220t011' : "PPTP",
'p220t012' : "Le protocole de tunnellisation (PPTP) crée une connexion privée et cryptée entre vous et votre fournisseur de services Internet.",
'p222t001' : "Il semble y avoir une anomalie au niveau de vos paramètres PPTP.",
'p300t001' : "Vérification des mises à jour du micrologiciel.",
'p300t002' : "Nous vérifions si des mises à jour sont disponibles pour le micrologiciel de votre nouveau routeur.",
'p300t003' : "Pourquoi ai-je besoin de la plus récente version du micrologiciel?",
'p300t004' : "Votre routeur utilise ce micrologiciel pour mettre en place les protocoles réseau et de sécurité. Comme les mises à jour rehaussent la fiabilité et la fonctionnalité de votre routeur, il est bon de vous assurer d'avoir la version la plus récente.",
'gtUpdateNoPower' : "Nous mettons à jour le micrologiciel de votre routeur. N'éteignez pas votre routeur pendant cette opération.",
'p320t003' : "Cette opération prendra environ trois minutes. Progression de la mise à jour :",
'gtFirmwareRestart' : "Maintenant que le micrologiciel a été installé, nous devons redémarrer votre routeur pour l'activer.",
'p342t003' : "dans la liste des réseaux sans fil pour nous aider.",
'errorSSIDEmpty' : "Veuillez attribuer un nom à votre réseau sans fil.",
'errorSSIDTooLong' : "Le nom de votre réseau doit compter moins de 32 caractères.",
'errorSSIDInvalidChars' : "Le nom de votre réseau ne doit contenir que des lettres, des chiffres, des signes de ponctuation et des espaces.",
'errorWEPPasswordInvalidChars' : "Votre mot de passe réseau ne peut contenir que des chiffres et les lettres A à F.",
'errorWEPPasswordInvalidLength' : "Votre mot de passe du réseau doit contenir 10 ou 26 caractères.",
'errorWEPPasswordEmpty' : "Veuillez entrer un mot de passe pour sécuriser votre réseau sans fil.",
'errorWPAPasswordInvalidChars' : "Votre mot de passe réseau ne peut contenir que des lettres, des chiffres, des signes de ponctuation et des espaces.",
'errorWPAPasswordInvalidLength' : "Votre mot de passe réseau doit contenir entre 8 et 63 caractères.",
'errorWPAPasswordEmpty' : "Veuillez entrer un mot de passe pour sécuriser votre réseau sans fil.",
'errorGenericCommitError' : "Une erreur s'est produite.  Veuillez corriger les paramètres ci-dessous et essayer de nouveau.",
'p400t006' : "Mot de passe :",
'p450t006' : "Mot de passe: ",
'p451t006' : "Mot de passe: ",
'p500t007' : "Enregistrer maintenant",
'p500t008' : "Enregistrer plus tard",
'p700t011' : "PPTP DSL connection",
'errIpAddressEmpty' : "Le champ d'adresse IP ne peut pas être laissé en blanc.",
'errSubnetMaskEmpty' : "Le champ de masque de sous-réseau ne peut pas être laissé en blanc.",
'errSubnetMaskInvalid' : "Le masque de sous-réseau que vous avez entré ne ressemble pas à un masque de sous-réseau. Veuillez vérifier la valeur",
'errDefaultGatewayEmpty' : "Le champ d'adresse de passerelle par défaut ne peut pas être laissé en blanc.",
'errDNSServerEmpty' : "Le champ d'adresse de serveur DNS ne peut pas être laissé en blanc.",
'1781' : "",
'1782' : "",
'1783' : "",
'7102' : "Intellistream de Belkin priorise les services large bande et à faible temps d'attente tels que les services voix, vidéo et les jeux pour assurer la meilleure expérience en ligne possible.",
'7103' : "Pour être efficace, Intellistream a besoin de connaître la vitesse de votre connexion.",
'7104' : "La connectivité Internet sera temporairement suspendue durant le test.",
'7105' : "La connectivité Internet est temporairement suspendue durant le test.",
'7106' : "Effectuer un test de vitesse",
'7107' : "Test de vitesse",
'7108' : "Entrer manuellement",
'7109' : "Ping",
'7110' : "Vitesse de<br> téléchargement en aval",
'7111' : "Vitesse de<br> téléchargement en amont",
'7112' : "En cours...",
'7113' : "Terminé.",
'7114' : "Une erreur s'est produite durant le test.",
'7115' : "Entrez un nombre entre 0.1 et 100.",
'7116' : "Entrez un nombre entre 0.1 et 1000.",
'7117' : "Entre 0.1 et 100 seulement.",
'7118' : "Avec votre vitesse de téléchargement en amont élevée, Intellistream priorisera votre vitesse de téléchargement en aval seulement.",
'7119' : "Avec votre vitesse de téléchargement en aval élevée, Intellistream priorisera votre vitesse de téléchargement en amont seulement.",
'7120' : "Comme vos vitesses de téléchargement Internet sont élevées, il n'est pas nécessaire d'activer Intellistream.",
'7121' : "Enregistré le",
'7122' : "Enregistré manuellement le",
'7123' : "Pour activer Intellistream :",
'7124' : "Intellistream est activé.",
'7125' : "Intellistream est actuellement désactivé.",
'7126' : "Configuration manuelle",
'gtBBSTitle' : "Bienvenue à la Configuration de routeur Belkin",
'gtBack' : "Retour au tableau de bord",
'Support4t036' : "Lire tout à ce sujet.",
'Support4t037' : "Rendez-vous à l'adresse URL suivante à partir d'un appareil connecté à Internet et apprenez comment résoudre le problème vous-même : <STRONG>www.belkin.com/support/asdlkj</STRONG>",
'gtReadHelp' : "À partir d'un appareil connecté à Internet, rendez-vous sur le site <STRONG>http://belk.in/NLk29H</STRONG>",
'Support5t014' : "Lire tout à ce sujet.",
'p1200t001' : "Un peu plus de sécurité.",
'p1200t002' : "Vous pouvez protéger votre routeur par le verrouillage du tableau de bord avec un mot de passe.",
'errsetempt' : "Veuillez entrer un mot de passe.",
'errorpwdEmpty' : "Veuillez taper votre mot de passe.",
'errorpwdError' : "Votre mot de passe est incorrect.",
'60' : "Administrateur en double",
'61' : "Ce périphérique est géré par",
'62' : "à l'heure actuelle!!",
'gtDisconnected' : "Déconnecté",
'dft005' : "Centre d'assistance Belkin",
'dhToggleBand' : "Montrer 5,0 GHz",
'419' : "secondes restantes.",
'422' : "Les paramètres ont été restaurés correctement",
'423' : "Le fichier restauré ne convient pas à cet appareil. La restauration a échoué. Veuillez obtenir le bon fichier et essayer de nouveau",
'533' : "Si votre routeur commence à mal fonctionner, il pourrait être nécessaire de le redémarrer. Le redémarrage du routeur ne supprimera pas vos paramètres.",
'1200' : "Application des modifications en cours. Veuillez patienter.......",
'1386' : "La version ou le type de fichier de mise à niveau ne convient pas à cet appareil. La mise à niveau à échoué. Veuillez obtenir le bon fichier et essayer de nouveau",
'2053' : "Les modifications ont été appliquées correctement",
'2054' : "Mise à niveau réussie du micrologiciel",
'766' : "Les numéros de masque de sous-réseau que vous avez entrés ne sont pas valides.",
'1356' : "Adresse IP de passerelle non valide, le premier nombre doit être compris entre 1 et 223.",
'1357' : "Adresse IP de passerelle non valide, les deuxième et troisième nombres doivent être compris entre 0 et 255.",
'1358' : "Adresse IP de passerelle non valide, le dernier nombre doit être compris entre 1 et 254.",
'1360' : "Adresse IP non valide, le premier nombre doit être compris entre 1 et 223.",
'1354' : "Adresse IP non valide, les deuxième et troisième nombres doivent être compris entre 0 et 255.",
'675' : "Adresse IP non valide, le dernier nombre doit être compris entre 1 et 254.",
'403' : "L’adresse IP que vous avez entrée n’est pas valide.",
'760' : "Adresse IP",
'1760' : "Interdire tous",
'395' : "Vous n'avez pas entré tous les numéros, ou certains numéros que vous avez entrés ne sont pas valides. Le numéro entré dans chaque boîte doit être compris entre 0 et 255.",
'1395' : "Non configuré",
'1281' : "L'adresse IP du réseau étendu (WAN) ne peut pas couvrir le sous-réseau local (LAN).",
'641' : "Vous n'avez pas entré tous les numéros IP, ou certains numéros que vous avez entrés ne sont pas valides. Les numéros doivent être compris entre 0 et 255.",
'errUsernameTooLong' : "Votre nom d’utilisateur doit contenir moins de 64 caractères.",
'errUsernameInvalid' : "Votre nom d'utilisateur ne peut contenir que des lettres, des chiffres, des signes de ponctuation et des espaces.",
'errPasswordEmpty' : "Veuillez taper votre mot de passe.",
'errPasswordTooLong' : "Votre mot de passe doit contenir moins de 64 caractères.",
'errPasswordInvalid' : "Votre nom d'utilisateur ne peut contenir que des lettres, des chiffres, des signes de ponctuation et des espaces.",
'1398' : "OK",
'1399' : "Annuler",
'374' : "Activé",
'375' : "Éteint",
'47' : "Plus d'informations",
'48' : "Supprimer les modifications",
'49' : "Enregistrer",
'96' : "Activer",
'119' : "Désactiver",
'1298' : "Fermer",
'113' : "<< Ajouter",
'114' : "Supprimer",
'128' : "Actualiser",
'318' : "Désactivé",
'317' : "Activé",
'2006' : "Oui",
'2007' : "Non",
'3300' : "NOUVEAU",
'50' : "Mettre à jour DNS dynamique",
'98' : "Le système de noms de domaines dynamique (DDNS) vous permet d'accéder à votre réseau domestique à partir d'un compte établi par l'entremise d'un fournisseur DDNS. Établissez votre compte par l'intermédiaire de Dyn.com (<a href='http://www.dyn.com' target='_blank'>www.dyn.com</a>) et activez la fonction DDNS sur votre routeur. Vous devez créer un compte avant de pouvoir utiliser ce service.",
'100' : "Nom d’utilisateur",
'101' : "Mot de passe",
'102' : "Nom de domaine",
'742' : "Veuillez entrer votre nom d'utilisateur",
'757' : "Veuillez taper votre mot de passe!",
'822' : "non. Veuillez d'abord la corriger!",
'1307' : "DynDNS",
'1308' : "Service DDNS",
'1309' : "État DDNS",
'1310' : "Site Web",
'1315' : "Mettre à jour automatiquement le DDNS",
'1316' : "mettre à jour tous les",
'1317' : "jours",
'1369' : "Enregistré",
'1380' : "Configuration erronée",
'1381' : "Connexion",
'1382' : "Connexion non réussie",
'1383' : "Échec de la connexion",
'1384' : "Inscription non réussie",
'1385' : "Non inscrit",
'1751' : "",
'702' : "Le service de noms de domaines (DNS) traduit les adresses IP afin de localiser les appareils et services informatiques partout dans le monde. Si votre FSI vous a donné une adresse DNS, entrez-la ici.",
'703' : "Automatique du FSI",
'704' : "Adresse DNS",
'705' : "Adresse DNS secondaire",
'706' : "DNS = Serveur de noms de domaines. Un serveur de noms de domaines est un serveur Internet qui traduit les adresses URL comme « www.belkin.com » en adresses IP.",
'707' : "Vous devez entrer les paramètres DNS que votre FSI vous a fournis si vous n'utilisez pas la fonction DNS automatique.",
'780' : "Spécifier adresse IP",
'823' : "Pour modifier les paramètres DNS, rendez-vous d'abord sur le site {filtre de sites Web} et sélectionnez « Pas de filtres ».",
'55' : "Informations sur le micrologiciel",
'56' : "Il n'y a pas de mise à niveau de micrologiciel disponible pour ce routeur!",
'57' : "Impossible de se connecter au serveur d'information du micrologiciel; veuillez vérifier à nouveau la connexion WAN.",
'58' : "Micrologiciel actuel :",
'59' : "Télécharger le micrologiciel :",
'64' : "Le routeur peut être configuré de façon à restreindre l'accès à Internet, au courrier électronique ou à d’autres services réseau à des dates et heures précises.",
'65' : "IP",
'66' : "Port",
'67' : "Type",
'68' : "Heure de blocage",
'69' : "Jour",
'70' : "Heure",
'71' : "Activer",
'72' : "LES DEUX",
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
'83' : ":00 P.M.",
'84' : "Vous n'avez pas entré l'adresse IP du client, ou certains nombres dans l'adresse IP que vous avez entrée ne sont pas valides. Le nombre entré dans la boîte IP doit être compris entre 1 et 254.",
'85' : "Les numéros de port que vous avez entrés ne sont pas valides.",
'86' : "Le dernier numéro de la plage de ports doit être plus grand que le précédent.",
'87' : "Le dernier numéro de la plage d'adresses IP doit être plus grand que le précédent.",
'88' : "Le nombre entré dans la boîte IP doit être compris entre 1 et 65535.",
'1311' : "Aucune application n'a été sélectionnée.",
'1312' : "Des entrées en double ont été détectées. La règle existe déjà.",
'1355' : "L'adresse IP LAN du routeur doit être exclue de la plage d'adresses IP.",
'90' : "Ce paramètre vous permet de spécifier un appareil dans votre réseau à placer en-dehors de votre coupe-feu, tout en gardant les autres derrière le coupe-feu.",
'91' : "N’oubliez pas que l’ordinateur que vous placez dans la zone démilitarisée (DMZ) ne sera PAS protégé contre les attaques de pirates.",
'92' : "Pour placer un ordinateur dans la DMZ, tapez les derniers chiffres de son adresse IP dans le champ ci-dessous, puis sélectionnez « Activer ». Cliquez sur « Enregistrer » pour que la modification prenne effet.",
'93' : "Adresse IP de l'hôte DMZ virtuel",
'97' : "IP statique",
'95' : "IP privé",
'103' : "Veuillez taper l'adresse IP avant d'activer la fonction DMZ",
'1232' : "L'adresse IP de l'hôte n'est pas valide!",
'1253' : "L'adresse IP est hors plage [1-254]!",
'105' : "Cette fonction vous permet d'établir une liste de clients autorisés. Lorsque vous l'activez, vous devez entrer l’adresse MAC de chaque client auquel vous voulez donner accès à votre réseau.",
'106' : "Activer le filtrage d’adresses MAC",
'107' : "Liste de filtrage d’adresses MAC",
'108' : "Bloquer",
'110' : "Adresse MAC",
'112' : "Cette adresse MAC a déjà été ajoutée!",
'669' : "Adresse MAC non valide; cette adresse est vide",
'902' : "Adresse MAC non valide",
'903' : "Veuillez d’abord la corriger!",
'904' : "L’adresse MAC doit être exprimée sous la forme xx:xx:xx:xx:xx:xx (où x est une valeur entre 0-9 ou a-f).",
'1062' : "Remarque : Vous ne pourrez pas supprimer l’adresse MAC de l’ordinateur que vous utilisez pour accéder aux fonctions d’administration (c.-à-d. l’ordinateur que vous utilisez en ce moment).",
'1602' : "Défini par l'utilisateur 1",
'117' : "Votre routeur est doté d’un coupe-feu qui protège votre réseau contre une foule d'attaques courantes telles que le Ping de la mort (PoD) et le Déni de service (DoS). Vous pouvez désactiver la fonction Coupe-feu au besoin. Votre réseau ne sera pas complètement vulnérable aux attaques de pirates si vous désactivez cette fonction, mais il est quand même recommandé de l'activer dans la mesure du possible.",
'118' : "Activer coupe-feu / Désactiver",
'121' : "<b>FONCTION ÉVOLUÉE! </b> Vous pouvez configurer le routeur pour qu’il ne réponde pas aux signaux ping ICMP (sur le port WAN), augmentant ainsi le niveau de sécurité.",
'1076' : "Bloquer Ping ICMP",
'1827' : "Paramètres Accès invité – impression",
'2702' : "L'accès invité permet de se connecter à Internet par le port WAN, tout en empêchant l'accès au réseau interne local et sans fil (LAN et WLAN). Cette fonction est prise en charge seulement dans la bande 2,4 GHz pour en faciliter l'utilisation.",
'279' : "Port d'entrée",
'1828' : "Style Café (l'invité se connecte via une page Web)",
'1619' : "WPA/WPA2-PSK",
'1829' : "WEP",
'1830' : "Ouvert",
'1831' : "maximum de 32 caractères, sans espace",
'1617' : "Mot de passe (PSK)",
'842' : "Authentification",
'845' : "Technique de cryptage",
'854' : "Clé pré-partagée (PSK)",
'857' : "Dissimuler la clé PSK",
'855' : "WPA-PSK (sans serveur)",
'1335' : "Nom du réseau (SSID)",
'1825' : "8 à 63 caractères",
'1826' : "10 caractères hexadécimaux",
'1834' : "Nom du réseau",
'409' : "Mot de passe",
'1835' : "Chaque invité qui se connecte à votre réseau sans fil devra entrer ce mot de passe.",
'1715' : "Type de sécurité",
'1836' : "Pour se connecter au réseau sans fil :",
'1837' : "Windows",
'1838' : "1. Avec le bouton droit de la souris, cliquez sur l'icône de réseau sans fil dans la barre d’état système Windows et sélectionnez Afficher les réseaux sans fil disponibles au menu contextuel.",
'1839' : "2. Double-cliquez sur ",
'1840' : " réseau",
'1841' : "3. Une fenêtre contextuelle s'ouvrira, vous demandant d'entrer la clé réseau. Tapez le mot de passe ci-dessus et cliquez sur OK.",
'1842' : "MAC OS X",
'1843' : "1. Cliquez sur l'icône de réseau sans fil dans la barre de menus (coin supérieur droit) et sélectionnez ",
'1844' : " réseau",
'1845' : "2. Une fenêtre contextuelle s'ouvrira, vous demandant d'entrer la clé réseau. Tapez le mot de passe ci-dessus et cliquez sur OK.",
'1832' : "Style Café",
'1833' : "Mode Ouvert",
'1201' : "Le SSID ne peut pas être défini comme valeur NULLE!",
'1812' : "Le nombre de caractères du mot de passe n'est pas valide. Le mot de passe doit contenir un maximum de 63 caractères et un minimum de 8.",
'1824' : "La clé WEP doit être formée de 10 caractères hexadécimaux!",
'414' : "Erreur de connexion!!",
'1811' : "L'accès invité est une fonction qui permet aux utilisateurs d'avoir accès à Internet, tout en limitant l'accès au réseau domestique. Veuillez demander à l'administrateur du réseau de vous donner le mot de passe de l'accès invité et entrez-le ci-dessous.",
'1813' : "Réussi! Vous pouvez maintenant ouvrir un navigateur Web et surfer sur Internet.",
'909' : "L'adresse IP désigne l’adresse interne du routeur. Pour accéder à l’interface de configuration évoluée, tapez l’adresse IP dans la barre d’adresses de votre navigateur. Vous pourrez ensuite la modifier au besoin. Pour modifier l’adresse IP, tapez la nouvelle adresse IP, puis cliquez sur « Enregistrer ». L’adresse IP que vous sélectionnez doit être une adresse IP non routable. Exemples d'adresse IP non routables : 192.168.2.1, 10.0.0.1, 172.16.0.1",
'917' : "Il n’est pas nécessaire de modifier le masque de sous-réseau. Cependant, vous pouvez le modifier au besoin. Modifiez-le seulement si vous avez une raison précise de le faire.",
'929' : "La fonction Serveur DHCP facilite considérablement la configuration d’un réseau en attribuant des adresses IP à chaque ordinateur dans le réseau. Vous pouvez désactiver la fonction Serveur DHCP au besoin. Pour ce faire, vous devez définir manuellement une adresse IP statique pour chaque ordinateur dans votre réseau. Le pool IP est la plage d’adresses IP qui ont été mises de côté pour être attribuées de façon dynamique aux ordinateurs qui font partie de votre réseau. La valeur par défaut est 2-200 (199 ordinateurs). Si vous voulez modifier ce nombre, vous pouvez le faire en entrant une nouvelle adresse IP de début et de fin, puis en cliquant sur « Enregistrer ».",
'935' : "Vous pouvez définir un nom de domaine local pour votre réseau. Il n’est pas nécessaire de modifier ce paramètre, sauf si vous devez absolument le faire pour une raison précise. Vous pouvez attribuer n’importe quel nom au réseau, par exemple « MON RÉSEAU ».",
'962' : "Pour configurer le protocole PPPoE sur le routeur, tapez le nom d’utilisateur et le mot de passe que vous a fournis votre FSI dans les champs prévus à cette fin. Si vous n’avez pas de nom de service ou que vous ne le connaissez pas, laissez le champ « Nom du service » vide. Ensuite, cliquez sur « Enregistrer ». Une fois que les modifications ont été enregistrées, l’indicateur d'état « En ligne » apparaîtra si votre routeur a été configuré correctement.",
'967' : "Certains FSI utilisent le protocole PPTP pour connecter leurs abonnés à leur réseau. Cela vous oblige à entrer des paramètres supplémentaires que votre FSI devrait vous avoir communiqué. Après avoir enregistré vos modifications, l'indicateur « État connexion Internet » sera de couleur verte si l'opération est réussie.",
'971' : "Sélectionnez le type de connexion Telstra Bigpond en cliquant sur « Enregistrer ».",
'982' : "Déconnecter après X...",
'983' : "Ceci sert à déconnecter automatiquement votre routeur de votre FSI lorsqu’il n’y a pas d’activité pendant une période donnée. Cette option est utile si vous payez un tarif Internet à la minute.",
'htDDNS' : "Qu’est-ce que le service DDNS?",
'htDNS' : "Qu’est-ce que le service DNS?",
'htDMZ' : "Qu’est-ce qu'une zone démilitarisée (DMZ)?",
'htLAN' : "Que permettent de contrôler les paramètres LAN?",
'htWANMain' : "Qu’est-ce que des paramètres WAN?",
'htWANMAC' : "Qu’est-ce qu'une adresse MAC?",
'htWAN_PPPOE' : "Paramètres PPPoE",
'htWAN_PPTP' : "Paramètres PPTP",
'htIPv6' : "Qu’est-ce que le protocole IPv6?",
'htWifiID' : "Qu’est-ce que le nom de réseau et les paramètres de canal?",
'htWifiIDContent' : "Le nom de réseau s'appelle un SSID (ou identificateur de service ).  Tous les clients dans votre réseau doivent connaître le SSID pour pouvoir se connecter à votre réseau.",
'htWifiSec' : "Qu'est-ce que la sécurité Wi-Fi?",
'htWifiSecContent' : "Tous les routeurs Belkin sont livrés avec la fonction de sécurité Wi-Fi activée.  La sécurité Wi-Fi est une couche de protection contre l'accès non autorisé à votre réseau.  Lorsqu'elle est activée, l'utilisateur doit entrer un mot de passe pour accéder à votre réseau.",
'htWifiWPS' : "Qu'est-ce que le mode WPS (Wi-Fi Protected Setup)?",
'htWifiWPSContent' : "C'est une méthode de configuration facultative qui facilite l'établissement de réseaux avec sécurité Wi-Fi à la maison ou dans de petits bureaux. Vous pouvez toujours ajouter des appareils sans protection Wi-Fi (WPS) en sélectionnant le nom de réseau et en entrant le mot de passe réseau.",
'htWifiGuest' : "Comment s'utilise l'accès invité?",
'htWifiGuestContent' : "Lorsqu'il est activé, l'accès invité crée un réseau Wi-Fi distinct qui permet à l'utilisateur d'accéder à Internet, mais non aux autres appareils connectés à votre réseau.",
'htAP' : "Puis-je utiliser mon routeur comme point d'accès?",
'htAPContent' : "Les routeurs Belkin peuvent être configurés de façon à servir uniquement de point d'accès, ignorant ainsi toutes les fonctions d’acheminement et coupe-feu.  La configuration du routeur comme point d'accès  sert le plus souvent à ajouter la fonctionnalité sans fil à un réseau câblé existant.",
'htQos' : "Qu’est-ce que l'Intellistream de Belkin?",
'htDLNA' : "C'est le serveur multimédia de Belkin fourni par Twonky",
'htPortForward' : "Qu’est-ce le réacheminement vers d’autres ports?",
'htPortForwardContent' : "Le réacheminement vers d’autres ports permet à des ordinateurs distants de se connecter à un programme ou un service précis sur votre réseau local. Par exemple, vous utiliseriez cette fonction pour mettre en place un serveur Web (port 80) sur votre réseau.  La plupart des programmes d'aujourd'hui n'exigent pas le réacheminement vers d’autres ports. Ils peuvent configurer automatiquement les ports dont ils ont besoin.",
'htWanPing' : "À quoi sert le blocage Ping sur réseau étendu (WAN)?",
'htWanPingContent' : "Cette fonction permet de rehausser le niveau de sécurité de façon à empêcher les utilisateurs externes de trouver votre adresse IP. Cette fonction ignore tout simplement les signaux Ping émanant de l'extérieur de votre réseau.",
'htRestart' : "À quoi sert de redémarrer mon routeur?",
'htRestoreFC' : "Comment cela peut-il rétablir les paramètres par défaut du fabricant?",
'htSaveSettings' : "Pourquoi devrais-je enregistrer mes paramètres?",
'htRestoreSettings' : "Que signifie rétablir mes paramètres précédents?",
'htSystem' : "Qu’est-ce que les paramètres système?",
'htSystemContent' : "Sur cette page, vous pouvez définir divers paramètres de base du routeur, tels que le fuseau horaire et le mot de passe d'administrateur.",
'htSelfHeal' : "Qu’est-ce que l'autorétablissement?",
'hLANSettings' : "Cette page vous permet de configurer de nouvelles connexions, d'activer ou désactiver la fonction DHCP et de définir l'adresse IP du routeur sur votre réseau local.",
'htDHCPClientList' : "Qu’est-ce que la liste de clients DHCP?",
'htDHCPClientListContent' : "Cette page affiche l'adresse IP, le nom d'hôte et l'adresse MAC de chaque appareil connecté à votre réseau. Si aucun nom d'hôte n'est précisé pour l'ordinateur, le champ correspondant sera vide. Cliquez sur « Actualiser » pour mettre la liste à jour.",
'hWebsiteFilters' : "Cela sert de couche de protection contre les sites Web non sécuritaires ou inappropriés. Les filtres Web contrôlent les sites Web en vérifiant leur nom en regard d'une liste de sites approuvés.",
'hWANSettings' : "Ces paramètres réseau font référence à la connexion que vous avez établie avec votre fournisseur de services Internet (FSI).   Sélectionnez dans la liste le type de connexion fourni par votre FSI. ",
'htChannel' : "De la même façon qu'un appareil radio utilise différentes stations, votre routeur peut diffuser sur plusieurs canaux distincts pour communiquer avec les appareils dans votre réseau. L'option « Auto » est habituellement le meilleur choix.",
'3430' : "Le protocole Internet version 6 (IPv6) est appelé à succéder au protocole IPv4 qui régule presque tout le trafic Internet. Certains fournisseurs de services Internet (FSI) sont presque à court d'adresses IP. Le protocole IPv6 permet à un plus grand nombre d'appareils de communiquer sur Internet en utilisant de plus gros chiffres pour créer des adresses IP.  Votre FSI vous indiquera si vous devez utiliser le protocole IPv6.",
'3431' : "Type de connexion",
'3432' : "Autoconfiguration/DHCPv6 (valeur par défaut)",
'3433' : "Les adresses ci-dessous sont fournies par votre FSI. Le protocole DHCPv6 ajoute des fonctions qui rehaussent la connectivité.",
'3434' : "Réseau étendu (WAN)",
'3435' : "Adresse WAN",
'3436' : "Passerelle",
'3437' : "Réseau local (LAN)",
'3438' : "Utilisez cette section pour définir les paramètres réseau internes de votre routeur. Si vous changez l'adresse IPv6 de votre réseau local ici, vous devrez peut-être modifier les paramètres réseau de votre ordinateur pour y avoir à nouveau accès.",
'3439' : "Préfixe LAN",
'3440' : "Identifiant d'interface",
'3441' : "Liaison-Locale",
'3442' : "DNS",
'3443' : "Vos paramètres IPv6 DNS par défaut proviennent de votre fournisseur de services Internet s'ils sont disponibles dans les publicités du routeur WAN ou les messages DHCPv6.",
'3444' : "Principal",
'3445' : "Secondaire",
'3446' : "PPPoE sur IPv6",
'3447' : "Le protocole PPPoE sert essentiellement à connecter un modem DSL à Internet dans le cadre des services DSL.",
'3448' : "Connexion",
'3450' : "masquer le mot de passe",
'3451' : "Nom d’utilisateur",
'3452' : "Mot de passe",
'3453' : "Nom du service",
'3454' : "Tunnel 6to4",
'3455' : "Cette méthode permet d'acheminer des paquets IPv6 sur un réseau IPv4 sans qu'il soit nécessaire de configurer des tunnels explicites. Ce type de connexion est utile si votre fournisseur de services Internet ne prend pas en charge le protocole IPv6.",
'3456' : "Routeur de relais 6to4 distant",
'3457' : "Passe-système",
'3458' : "Les appareils connectés à votre routeur peuvent communiquer entre eux au moyen de paquets IPv6 natifs. Les paquets IPv6 sur le réseau local (LAN) seront automatiquement envoyés à toutes les interfaces LAN (ports Ethernet et réseaux 2,4 GHz et 5 GHz sans fil).",
'3459' : "Lorsque cette fonction est activée, les paquets IPv6 sont également copiés sur l'interface WAN. (Cela crée cependant une connexion directe et non sécurisée à Internet.)",
'3460' : "Veuillez communiquer avec votre FSI pour en savoir davantage sur le soutien offert en rapport avec le protocole IPv6.",
'3461' : "Adressage IPv6 statique",
'3462' : "L'adressage IPv6 statique n'est pas tellement courant car il peut être difficile à gérer. Il ne doit pas être utilisé avec les appareils qui se connectent à plusieurs réseaux, comme les ordinateurs portables ou les appareils mobiles.",
'3463' : "Fonction d'intercommunication locale seulement",
'3464' : "La fonction d'intercommunication (passe-système) IPv6 WAN est désactivée. Tous les appareils locaux dans votre réseau local et Wi-Fi peuvent encore communiquer directement les uns avec les autres, mais le routeur n'acheminera pas de paquet IPv6 en provenance ou à destination d'Internet et ne répondra pas directement à aucun paquet IPv6.",
'3465' : "Votre fournisseur de services Internet n'offre pas la connectivité IPv6. Veuillez communiquer avec votre FSI pour de plus amples renseignements sur le soutien IPv6, ou pour établir la connectivité.",
'3466' : "La fonction d'intercommunication locale est activée automatiquement pour permettre à vos appareils de s'envoyer des paquets IPv6 entre eux. L'autre option consiste à utiliser la fonction Tunnel 6to4 pour accéder à Internet au moyen d'une connexion IPv4.",
'3467' : "Chaque case doit contenir quatre caractères hexadécimaux (0 à 9 et a à f).",
'3468' : "Veuillez entrer une adresse autre que multidiffusion. Les adresses multidiffusion commencent généralement par les lettres ff.",
'3469' : "Le préfixe doit contenir de 1 à 127 caractères. Il contient habituellement 64, 56 ou 48 caractères.",
'3470' : "Il n'y a pas de connexion IPv4.",
'3471' : "Les paramètres DNS sont désactivés par vos contrôles parentaux",
'3472' : "Filtre de sites Web",
'3473' : "Veuillez sélectionner PPPoE sous Internet WAN > Paramètres de connexion avant de sélectionner PPPoE sur IPv6.",
'3474' : "La connectivité Internet a été perdue. Veuillez vérifier votre type de connexion WAN ou communiquer avec votre fournisseur de services Internet.",
'3475' : "Paramètres DNS par défaut fournis par votre FSI",
'gtTryManu' : "Si vous ne savez pas quel type de connexion vous utilisez, vous pouvez ",
'gtSetManual' : "configurer manuellement ",
'2100' : "Accès refusé. Entrez le mot de passe du routeur pour permettre l'accès temporaire à la page ou aux services bloqués.",
'2101' : "Page de renvoi",
'2102' : "Allez",
'354' : "Cette page affiche l'adresse IP, le nom d'hôte et l'adresse MAC de chaque ordinateur connecté à votre réseau. Si aucun nom d'hôte n'est précisé pour l'ordinateur, le champ Nom d'hôte sera vide. Cliquez sur « Actualiser » pour mettre la liste à jour.",
'355' : "Adresse IP",
'356' : "Nom d’hôte",
'357' : "Adresse MAC",
'370' : "Cette page vous permet de configurer de nouvelles connexions, d'activer ou désactiver la fonction DHCP et de définir l'adresse IP du routeur sur votre réseau local.",
'371' : "Adresse IP",
'372' : "Masque de sous-réseau",
'373' : "Serveur DHCP",
'378' : "La fonction Serveur DHCP facilite considérablement la configuration d’un réseau en attribuant des adresses IP à chaque ordinateur dans le réseau. Il n’est pas nécessaire de modifier quoi que ce soit ici.",
'379' : "Adresse de départ du groupe d'adresses IP",
'380' : "Adresse de fin du groupe d'adresses IP",
'381' : "Temps alloué",
'382' : "Toujours",
'383' : "Demi-heure",
'384' : "1 heure",
'385' : "Deux heures",
'386' : "Demi-journée",
'387' : "Un jour",
'388' : "Deux jours",
'389' : "Une semaine",
'390' : "Deux semaines",
'391' : "Désigne le temps pendant lequel une adresse IP est réservée à chaque ordinateur.",
'392' : "Nom de domaine local",
'393' : "Facultatif",
'394' : "Fonction qui permet d'attribuer un nom à votre réseau.",
'397' : "Le groupe d'adresses IP doit être dans le même sous-réseau que l'adresse IP de passerelle.",
'398' : "L’adresse IP de fin doit être un nombre plus grand que l’adresse IP de début.",
'399' : "L'adresse IP de réseau local ne peut pas être comprise dans le groupe d'adresses DHCP.",
'400' : "L’adresse IP que vous sélectionnez doit être une adresse IP non routable.",
'401' : "Adresse IP de réseau local non valide, le premier nombre ne peut pas être 127 ou 0",
'404' : "Veuillez remplacer manuellement l’adresse dans la barre d’état de votre navigateur par la nouvelle adresse de réseau local.",
'406' : "Voulez-vous vraiment modifier l'adresse IP de réseau local?",
'416' : "192.168.y.x.(où y est n’importe quel nombre entre 0 et 255 et x n’importe quel nombre entre 1 et 254.)",
'417' : "10.y.y.x (où y est n’importe quel nombre entre 0 et 255 et x n’importe quel nombre entre 1 et 254.)",
'418' : "172.z.y.x (où z est n’importe quel nombre entre 16 et 31, y n’importe quel nombre entre 0 et 255 et x n’importe quel nombre entre1 et 254.)",
'713' : "Nom de domaine local non valide :",
'1228' : "L'adresse de début du groupe d'adresses IP n'est pas valide!",
'1229' : "L'adresse de fin du groupe d'adresses IP n'est pas valide!",
'1240' : "L'adresse IP du réseau local (LAN) n'est pas valide!",
'3' : "Connexion",
'408' : "Avant de pouvoir modifier quelque paramètre, vous devez vous connecter en entrant un mot de passe. Si vous n'avez pas encore défini de mot de passe, laissez ce champ en blanc et cliquez sur « Soumettre ».",
'410' : "Valeur par défaut = laisser en blanc",
'412' : "Soumettre",
'1371' : "Mot de passe incorrect",
'1372' : "Veuillez confirmer votre mot de passe et essayer de nouveau.",
'124' : "Le routeur garde un relevé de toutes les activités liées au routeur, telles que la connexion ou déconnexion d'ordinateurs, ou les tentatives d'accès au routeur à partir d'Internet.",
'125' : "Fichier journal",
'126' : "Enregistrer",
'127' : "Effacer",
'1302' : "Journal système",
'1303' : "Journal du coupe-feu",
'8' : "Paramètres de réseau local (LAN)",
'9' : "Paramètres de réseau local",
'10' : "Appareils connectés",
'2500' : "Acheminement statique",
'11' : "WAN Internet",
'335' : "Type de connexion",
'690' : "Dynamique",
'692' : "Statique",
'694' : "PPPoE",
'696' : "PPTP",
'698' : "Câble Telstra BigPond/OptusNet",
'42' : "IPV6",
'43' : "Connexion IPv6",
'13' : "DNS",
'14' : "Adresse MAC",
'16' : "Wi-Fi",
'17' : "Nom du réseau",
'18' : "Sécurité",
'803' : "WEP 128 bits",
'804' : "WEP 64 bits",
'1296' : "WPA/WPA2-Personnel (PSK)",
'1297' : "WPA/WPA2-Entreprise (RADIUS)",
'805' : "WPA (avec serveur Radius)",
'1319' : "Méthode WPS",
'777' : "Utiliser comme point d’accès",
'833' : "Contrôle d’adresse MAC",
'1613' : "Accès invité",
'1850' : "Contrôles parentaux",
'1851' : "Filtre de sites Web",
'1710' : "Contrôle d’accès",
'20' : "de la carte média",
'7151' : "Tableau de trafic",
'7000' : "Serveur multimédia",
'1780' : "Torrent Mate",
'1790' : "Logiciel facultatif",
'23' : "Coupe-feu",
'24' : "Réacheminement vers d’autres ports",
'25' : "Filtres clients IP",
'26' : "Filtrage d’adresses MAC",
'27' : "DMZ",
'41' : "DDNS",
'28' : "Blocage Ping sur réseau étendu (WAN)",
'29' : "Journal de sécurité",
'30' : "Utilitaires",
'32' : "Redémarrer le routeur",
'34' : "Rétablir les paramètres par défaut du fabricant",
'35' : "Enregistrer/Sauvegarder les paramètres",
'36' : "Restaurer les paramètres précédents",
'37' : "Mettre à niveau le micrologiciel",
'38' : "Paramètres du système",
'39' : "Autorétablissement",
'1900' : "Connexion",
'132' : "La plage de ports d'entrée est incorrecte.",
'133' : "La plage de ports privés est incorrecte.",
'134' : "Cette fonction permet d’acheminer vers votre réseau interne les appels extérieurs (Internet) associés aux services tels que serveur Web (port 80), serveur FTP (port 21), ou toute autre application devant passer par votre routeur.",
'276' : "Supprimer entrée",
'277' : "Ajouter",
'278' : "Description",
'280' : "Type",
'281' : "Adresse IP privée",
'282' : "Port privé",
'376' : "tous",
'411' : "Effacer",
'648' : "Caractère non valide",
'672' : "Nombre non valide! Doit être entre 1..65535",
'905' : "Toutes les entrées ont été faites.\nVeuillez en supprimer quelques-unes et essayer à nouveau.",
'906' : "Voulez-vous supprimer l'entrée?",
'907' : "Voulez-vous supprimer toutes les entrées?",
'1241' : "L'adresse IP du réseau étendu (WAN) n'est pas valide!",
'1250' : "Le port n'est pas valide!",
'1362' : "La description est vide",
'1601' : "Auto",
'2055' : "Recouvrement de la plage du port d'entrée!!",
'2056' : "Recouvrement de la plage du port privée",
'3310' : "Intellistream",
'3311' : "Optimisez votre connexion Internet.",
'3312' : "Serveur multimédia",
'3313' : "Partagez des médias avec d'autres périphériques sur le réseau.",
'3314' : "Contrôles parentaux",
'3315' : "Filtres de sécurité DNS pour Internet",
'3316' : "Connexion IPv6",
'3317' : "Votre réseau est maintenant compatible avec le protocole IPv6",
'1852' : "Cela sert de couche de protection contre les sites Web non sécuritaires ou inappropriés. Les filtres Web contrôlent les sites Web en vérifiant leur nom en regard d'une liste de sites approuvés.",
'1854' : "Options de filtrage",
'1856' : "Pas de filtre",
'1858' : "Blocage des sites malicieux",
'1859' : "Bloque les logiciels malveillants, l'hameçonnage et les sites d'arnaque.",
'1860' : "Blocage des sites malicieux et des sites pour adultes",
'1861' : "Bloque les logiciels malveillants, l'hameçonnage,  les sites d'arnaque et ceux présentant un contenu sexuel explicite.",
'1862' : "Blocage des sites malicieux, pour adultes et autres sites non respectueux de la famille",
'1863' : "Bloque les logiciels malveillants, l'hameçonnage,  les sites d'arnaque, de même que tout site ayant un contenu sexuel explicite et pour adultes ou en rapport avec l'alcool, le tabac, le crime, les cultes, les drogues, le jeu, la haine, le suicide ou la violence.",
'1864' : "Pour modifier votre adresse DNS, continuez à Internet WAN > {DNS}",
'7152' : "Les tableaux ci-dessous affichent le trafic WAN entrant et sortant priorisé en différentes catégories. Ces tableaux affichent les 10 dernières minutes (et sont automatiquement actualisés toutes les 5 secondes).",
'7154' : "Légende de trafic",
'7155' : "Trafic entrant",
'7156' : "Trafic sortant",
'7157' : "Pour activer cette fonction, veuillez activer Intellistream",
'7158' : "ici",
'7159' : ".",
'7160' : "Connectivité réseau et contrôle",
'7161' : "Voix, clavardage vidéo et jeux",
'7162' : "Web et vidéo Web",
'7163' : "Courriel et RPV",
'7164' : "Téléchargements, torrents et autres",
'7170' : "Octets/sec",
'7174' : "Heure du jour/Heures:Minutes",
'326' : "Réseau local",
'327' : "Adresse MAC LAN/WLAN",
'332' : "Serveur DHCP",
'333' : "Paramètres Internet",
'334' : "Adresse MAC WAN",
'337' : "IP WAN",
'338' : "Passerelle par défaut",
'339' : "Adresse DNS",
'gtGuestName' : "SSID invité",
'gtGuestKey' : "Clé invité",
'347' : "Vous devrez vous connecter avant de pouvoir modifier quelque paramètre.",
'2022' : "Modem seulement",
'2031' : "Connecter",
'2032' : "Déconnecter",
'2033' : "Marge de bruit",
'2034' : "En aval",
'2035' : "En amont",
'2036' : "Affaiblissement (dB)",
'2037' : "Puissance de sortie (dBm)",
'2038' : "Débit (kbit/s)",
'tDashboard' : "Bienvenue à votre tableau de bord Belkin!",
'rtFeature' : "Caractéristiques",
'rtLink' : "Liens routeur",
'p1310t001' : "Détails de la connexion",
'p1310t002' : "Tester à nouveau la connexion",
'p1310t003' : "Dernière vérification",
'p1310t004' : "Vitesse de téléchargement en aval",
'p1310t005' : "Vitesse de téléchargement en amont",
'p1000t001' : "Dispositifs connectés",
'p1000t002' : "Afficher tout",
'2501' : "Veuillez entrer les paramètres de configuration suivants",
'2502' : "Adresse réseau",
'2503' : "Masque de sous-réseau",
'2504' : "Passerelle",
'396' : "Le numéro de masque de sous-réseau que vous avez entré n'est pas valide.",
'1231' : "La passerelle n'est pas valide!",
'1361' : "Adresse IP non valide, le premier nombre doit être compris entre 1 et 254.",
'1800' : "L'adresse IP et le masque de sous-réseau ne concordent pas.",
'Support1t011' : "Lire tout à ce sujet.",
'Support2t011' : "Lire tout à ce sujet.",
'Support2t012' : "Rendez-vous à l'adresse URL suivante à partir d'un appareil connecté à Internet et apprenez comment résoudre le problème vous-même : <STRONG>www.belkin.com/support/asdlkj</STRONG>",
'Support3t011' : "Lire tout à ce sujet.",
'Support3t012' : "Rendez-vous à l'adresse URL suivante à partir d'un appareil connecté à Internet et apprenez comment résoudre le problème vous-même : <STRONG>www.belkin.com/support/asdlkj</STRONG>",
'Support6t036' : "Lire tout à ce sujet.",
'425' : "Votre routeur reviendra à ses paramètres d'origine. Nous vous recommandons de <a href=\"ut_save.html\">sauvegarder vos paramètres</a> actuels avant de rétablir ceux d'origine. En sauvegardant la configuration de votre routeur, vous pourrez la rétablir si vos paramètres devaient être perdus ou modifiés.",
'426' : "MISE EN GARDE : Tous vos paramètres seront perdus!Êtes-vous certain de vouloir continuer?",
'427' : "Le rétablissement des paramètres par défaut peut prendre jusqu’à $s secondes. Ne coupez pas l’alimentation du routeur pendant cette opération.",
'428' : "Cette opération ne restaurera pas les paramètres par défaut du fabricant. Aucun paramètre ne sera perdu!",
'429' : "Rétablir paramètres par défaut",
'301' : "Cette option permet de redémarrer votre routeur sur une base hebdomadaire afin d'assurer un fonctionnement sans problème de votre réseau.",
'302' : "Initialiser automatiquement mon routeur",
'303' : "Définir les jours",
'304' : "Définir l'heure",
'527' : "Cette option vous permet de définir les paramètres de votre routeur selon la configuration que vous avez déjà sauvegardée.",
'528' : "Restaurer",
'529' : "Tapez le nom du fichier contenant les paramètres de sauvegarde.",
'530' : "Voulez-vous continuer et restaurer les paramètres?",
'531' : "Une fois les paramètres rétablis, il se pourrait que le périphérique ne réponde pas aux commandes pendant une minute.\n\nCeci est normal. N'éteignez pas le périphérique pendant ce temps.",
'451' : "Le fait de sauvegarder la configuration actuelle de votre routeur vous permettra de la rétablir si vos paramètres devaient être perdus ou modifiés. Nous vous recommandons de sauvegarder vos paramètres avant de faire toute mise à jour du micrologiciel.",
'539' : "Enregistrer",
'130' : "Vous n'avez pas entré toutes les adresses IP, ou certains nombres que vous avez entrés ne sont pas valides. Le nombre entré dans la boîte d'adresse IP doit être compris entre 1 et 254.",
'541' : "Mot de passe d'administrateur:",
'542' : "Le routeur est livré SANS mot de passe défini. Pour une sécurité accrue, vous pouvez définir un mot de passe à partir de cette page.",
'543' : "Tapez votre mot de passe actuel",
'544' : "Tapez votre nouveau mot de passe",
'545' : "Confirmer le nouveau mot de passe",
'546' : "Délai de connexion",
'547' : "(1-99 minutes)",
'548' : "Heure et fuseau horaire :",
'549' : "Janvier",
'550' : "Veuillez sélectionner votre fuseau horaire. Si vous êtes dans une région qui passe à l’heure d'été, cochez cette case.",
'551' : "Fuseau horaire",
'606' : "Heure d'été",
'607' : "Régler automatiquement l’heure d’été",
'608' : "Gestion à distance :",
'609' : "FONCTION AVANCÉE!",
'610' : "La gestion à distance vous permet de modifier les paramètres de votre routeur à partir de n’importe quel endroit sur Internet. Avant d'activer cette fonction,",
'611' : "ASSUREZ-VOUS D’AVOIR DÉFINI VOTRE MOT DE PASSE D’ADMINISTRATEUR.",
'642' : "L'activation de la gestion à distance augmente les risques pour la sécurité. Activez-la pour de courtes périodes seulement lorsque cela est nécessaire, désactivez-la lorsque cela n'est plus utile et surtout, ajoutez un mot de passe.",
'612' : "N’importe quelle adresse IP peut gérer le routeur à distance.",
'613' : "Seule cette adresse IP permet de &nbsp;&nbsp;&nbsp;gérer le routeur à distance",
'614' : "Activer / Désactiver la gestion à distance",
'615' : "L'attribution de port a été utilisée dans le serveur virtuel.",
'616' : "L'attribution d'une adresse IP crée un conflit avec l'adresse IP WAN actuelle.",
'617' : "Activation UPNP :",
'618' : "Permet d'activer ou de désactiver la fonction UPnP du routeur. Si vous utilisez des applications qui prennent en charge la fonction UPnP, l'activation de cette fonction permettra de configurer automatiquement le routeur.",
'619' : "Activer/Désactiver UPNP",
'620' : "Activation de la mise à niveau automatique du micrologiciel :",
'621' : "Permet de vérifier automatiquement si des mises à niveau du micrologiciel sont disponibles pour votre routeur.",
'622' : "Activer/désactiver la mise à niveau automatique du micrologiciel",
'623' : "Le mot de passe actuel n'est pas valide",
'624' : "Les nouveaux mots de passe que vous avez entrés ne concordent pas. Veuillez essayer de nouveau.",
'626' : "Le nombre de caractères du mot de passe n'est pas valide. Le nombre maximal est de 12 caractères et le nombre minimal, 3 caractères",
'628' : "Il est fortement recommandé de définir votre mot de passe d'administrateur.",
'629' : "Serveur NTP principal",
'630' : "Serveur NTP secondaire",
'640' : "Port à accès distant",
'738' : "La valeur que vous avez entrée comme temps d'inactivité n'est pas valide. La valeur doit être un nombre entier compris entre 1 et 99.",
'796' : "L'activation du mode Turbo permet au routeur ou au point d'accès d’avoir recours à l’éclatement de trames pour assurer un débit maximum aux clients 802.11g. Le mode Turbo est compatible avec les clients 802.11g qui prennent en charge ce mode. Les clients 802.11g Belkin qui utilisent le pilote le plus récent prennent en charge le mode Turbo. Ceux qui ne le prennent pas en charge fonctionneront normalement si le mode Turbo est activé.",
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
'1377' : "Asie-Pacifique",
'2300' : "(GMT-12:00) Enewetak, Kwajalein",
'2301' : "(GMT-11:00) Îles Midway, Samoa",
'2302' : "(GMT-10:00) Hawaii",
'2303' : "(GMT-09:00) Alaska",
'2304' : "(GMT-08:00) Heure du Pacifique (États-Unis et Canada); Tijuana",
'2305' : "(GMT-07:00) Arizona",
'2306' : "(GMT-07:00) Heure normale des Rocheuses (États-Unis et Canada)",
'2307' : "(GMT-06:00) Heure normale du Centre (États-Unis et Canada)",
'2308' : "(GMT-06:00) Mexico",
'2309' : "(GMT-06:00) Tegucigalpa",
'2310' : "(GMT-06:00) Saskatchewan",
'2311' : "(GMT-05:00) Bogota, Lima, Quito",
'2312' : "(GMT-05:00) Heure normale de l'Est (États-Unis et Canada)",
'2313' : "(GMT-05:00) Indiana (Est)",
'2314' : "(GMT-04:00) Heure de l'Atlantique (Canada)",
'2315' : "(GMT-04:00) Caracas, La Paz",
'2316' : "(GMT-04:00) Santiago",
'2317' : "(GMT-03:00) Terre-Neuve",
'2318' : "(GMT-03:00) Brasilia",
'2319' : "(GMT-03:00) Buenos Aires, Georgetown",
'2320' : "(GMT-02:00) Moyen-Atlantique",
'2321' : "(GMT-01:00) Açores, Cap-Vert",
'2322' : "(GMT) Casablanca, Monrovia",
'2323' : "(GMT) Temps moyen de Greenwich : Lisbonne, Londres, Édimbourg",
'2324' : "(GMT) Temps moyen de Greenwich : Dublin",
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
'2340' : "(GMT+04:00) Abu Dhabi, Muscat, Tbilissi",
'2341' : "(GMT+04:00) Kaboul",
'2342' : "(GMT+05:00) Islamabad, Karachi, Ekaterinbourg",
'2343' : "(GMT+05:30) Delhi",
'2344' : "(GMT+06:00) Almaty, Dhaka",
'2345' : "(GMT+07:00) Bangkok, Jakarta, Hanoï",
'2346' : "(GMT+08:00) Beijing, Chongqing, Urumqi",
'2347' : "(GMT+08:00) Hong Kong, Perth, Singapour, Taipei",
'2348' : "(GMT+09:00) Tokyo, Osaka, Sapporo",
'2349' : "(GMT+09:00) Séoul",
'2350' : "(GMT+09:30) Adélaïde, Darwin",
'2351' : "(GMT+10:00) Brisbane",
'2352' : "(GMT+10:00) Canberra, Melbourne, Sydney",
'2353' : "(GMT+10:00) Hobart",
'2354' : "(GMT+10:00) Guam, Port Moresby",
'2355' : "(GMT+11:00) Magadan, Salomon, Nouvelle-Calédonie",
'2356' : "(GMT+12:00) Wellington, Auckland",
'2357' : "(GMT+12:00) Fiji",
'2358' : "(GMT+13:00) Nuku`alofa.",
'2370' : "Di",
'2371' : "L",
'2372' : "M",
'2373' : "Me",
'2374' : "Je",
'2375' : "V",
'2376' : "Sa",
'2401' : "Mode ECO",
'2402' : "Baisser l'éclairage des DEL sur la face avant",
'2403' : "Désactiver radio de",
'2404' : "sauf",
'2405' : "Cette fonction vous permet de baisser l'éclairage des DEL à l'avant du routeur pour économiser l'énergie. Vous pouvez également désactiver la radio sans fil à des heures prédéterminées.",
'2406' : "L'heure de début ne peut pas être postérieure à l'heure de fin!",
'322' : "Version de micrologiciel",
'431' : "Belkin propose de temps en temps de nouvelles versions pour le système d'exploitation de votre routeur. Ces mises à jour apportent des améliorations et des correctifs à votre routeur.",
'432' : "<b>REMARQUE :</b> Veuillez <a href=\"ut_save.html\">sauvegarder vos paramètres actuels</a> avant de passer à une nouvelle version du micrologiciel.",
'433' : "Cliquez ici",
'434' : "pour passer à la page Enregistrer/Sauvegarder les paramètres actuels.",
'435' : "Vérifier nouvelle version de micrologiciel",
'436' : "Vérifier le micrologiciel",
'437' : "Mettre à niveau le micrologiciel",
'438' : "Mettre à niveau",
'439' : "Veuillez indiquer l'emplacement du fichier de mise à niveau. Tapez le chemin d'accès et le nom du fichier ou cliquez sur « Parcourir » pour passer à l'emplacement du fichier de mise à niveau.",
'440' : "Êtes-vous certain de vouloir continuer la mise à niveau?",
'441' : "Une fois la mise à niveau terminée, il se pourrait que le routeur ne réponde pas aux commandes pendant une minute. Ceci est normal. N'éteignez pas ou ne redémarrez pas le routeur pendant ce temps.",
'1198' : "Mise à jour du micrologiciel en cours.",
'534' : "Redémarrer le routeur",
'535' : "Êtes-vous certain de vouloir redémarrer le routeur? Cette opération n'affectera pas votre configuration.",
'536' : "Attendez jusqu'à $s secondes que le routeur redémarre. N'éteignez pas le routeur avant qu'il se soit complètement réinitialisé.",
'7001' : "Profitez de votre musique, de vos photos et de vos vidéos personnelles de façon pratique à partir de n'importe quel appareil DLNA connecté à votre réseau. Fourni par Twonky.",
'7002' : "Serveur DLNA",
'7003' : "Nom du serveur",
'7004' : "Lecteurs partagés :",
'7005' : "Prêt",
'7006' : "Indexation en cours...",
'7007' : "Dessert :",
'7008' : "vidéos",
'7009' : "chansons",
'7010' : "photos",
'7011' : "Non partagé sur le réseau.",
'7012' : "Il n'y a pas de lecteur USB connecté au routeur.",
'7016' : "Actualiser l'index",
'7017' : "Veuillez attribuer un nom convivial au serveur multimédia",
'7018' : "Caractère non permis",
'7019' : "Comme vous avez plus de médias que votre routeur est capable d'indexer, nous desservons les premiers",
'7020' : "éléments.",
'7021' : "Twonky est une gamme de produits logiciels domestiques créée par PacketVideo Corporation (PV).",
'7022' : "Impossible d'indexer un lecteur en lecture seule.",
'7023' : "Mo",
'7024' : "Go",
'7025' : "To",
'7026' : "vidéo",
'7027' : "chanson",
'7028' : "photo",
'770' : "Utilisez cette option pour les connexions Bigpond Cable et OptusNet Cable seulement. ",
'771' : "IMPORTANT :",
'775' : "3) Rebranchez le câble d'alimentation sur le routeur Belkin.",
'776' : "Pour confirmer que vous êtes connecté à Internet, ouvrez votre navigateur (Internet Explorer, Firefox ou Safari) et assurez-vous que vous pouvez afficher des pages Web.",
'731' : "Nom d’utilisateur",
'489' : "Mot de passe",
'732' : "Retaper le mot de passe",
'756' : "Veuillez taper à nouveau votre mot de passe!",
'1379' : "Vous n'avez pas entré tous les numéros IP, ou certains numéros que vous avez entrés ne sont pas valides. L'adresse IP doit être entrée sous la forme x.y.y.x (où y peut être n'importe quel nombre entre 0 et 255 et x n'importe quel nombre entre 1 et 254).",
'709' : "Pour définir votre adresse IP dynamique, tapez vos coordonnées ci-dessous et cliquez sur « Enregistrer ».",
'710' : "Nom d’hôte",
'711' : "Nom d’hôte = Nom que certains fournisseurs de services Internet exigent pour se connecter à leur système.",
'712' : "Modifier l’adresse MAC WAN",
'330' : "Adresse IP",
'331' : "Masque de sous-réseau",
'659' : "MTU non valide, doit être compris entre 500 et 1500.",
'730' : "Pour définir vos paramètres PPPoE, tapez vos coordonnées ci-dessous et cliquez sur « Enregistrer ».",
'733' : "Nom du service (facultatif)",
'734' : "MTU (500-1500)",
'735' : "Ne modifiez par les paramètres MTU, sauf si votre FSI exige spécifiquement une autre valeur",
'736' : "Déconnecter après",
'737' : "minutes d'inactivité",
'741' : "Valeur MTU non valide",
'2005' : "Adresse IP attribuée par le FSI",
'2021' : "Cliquez ici pour entrer vos paramètres DNS",
'2023' : "Les guillemets doubles ne sont pas permis.",
'2024' : "Le nom d'utilisateur contient des caractères non autorisés",
'2025' : "La barre oblique inverse n'est pas permise.",
'2030' : "Vous n'avez pas entré tous les numéros de passerelle par défaut, ou certains numéros que vous avez entrés ne sont pas valides. Les numéros doivent être compris entre 0 et 255.",
'2052' : "Le mot de passe contient des caractères non autorisés (<, > et &)",
'691' : "La connexion dynamique est la plus courante. Si vous utilisez un modem câble, vous aurez probablement une connexion dynamique. Si vous avez un câble modem et que vous n'êtes pas certain de votre type de connexion, utilisez celui-ci.",
'723' : "Y compris les FSI qui exigent un nom d'hôte et ceux qui lient la connexion à une adresse MAC spécifique.",
'693' : "La connexion IP statique est moins courante que les autres types de connexion. Utilisez cette valeur seulement si votre FSI vous a donné une adresse IP qui ne change jamais.",
'724' : "Le routeur prend en charge une connexion à un FSI qui attribue une adresse IP statique.",
'695' : "Si vous utilisez un modem DSL et/ou si votre FSI vous a attribué un nom d’utilisateur et un mot de passe, votre connexion est de type PPPoE. Utilisez ce type de connexion.",
'725' : "Le routeur prend en charge les connexions de type dynamique qui nécessitent une connexion PPPoE à des fins d'authentification.",
'697' : "Certains FSI utilisent le protocole PPTP pour connecter leurs abonnés à leur réseau. Cela vous oblige à entrer des paramètres supplémentaires que votre FSI devrait vous avoir communiqué. Après avoir enregistré vos modifications, l'indicateur « État connexion Internet » sera de couleur verte si l'opération est réussie.",
'726' : "Seulement pour utilisation avec les FSI qui exigent la méthode de connexion PPTP.",
'699' : "Utilisez cette option pour les connexions Bigpond Cable et OptusNet Cable seulement.",
'728' : "Australie SEULEMENT. Le routeur prend en charge les connexions avec Telstra BigPond.",
'2019' : "Pour définir vos paramètres de modem, tapez vos coordonnées ci-dessous et cliquez sur « Enregistrer ».",
'tBackToConnectionType' : "Retour à Type de connexion",
'759' : "Pour entrer vos paramètres d’adresse IP statique, tapez vos coordonnées ci-dessous, puis cliquez sur « Enregistrer ».",
'761' : "Masque de sous-réseau",
'762' : "Adresse de passerelle FSI",
'754' : "Cliquez ici pour entrer vos paramètres DNS",
'715' : "Chaque périphérique dans votre réseau a une adresse matérielle unique (adresse MAC) qui l'identifie aux autres périphériques sur le réseau et Internet.  Quelques fournisseurs de services Internet (FSI) exigent que vous entriez l'adresse MAC de votre carte réseau ou de votre ancien routeur dans les paramètres du routeur. Si vous n'en êtes pas certain, entrez l’adresse MAC de l’ordinateur qui était à l’origine connecté au modem avant d'installer le routeur.",
'716' : "Adresse MAC WAN",
'717' : "Cloner l'adresse MAC de l'ordinateur",
'718' : "Cloner",
'721' : "L’onglet Internet/WAN sert à configurer votre routeur pour la connexion à votre fournisseur de services Internet (FSI). Le routeur peut se connecter à pratiquement n’importe quel FSI, à condition que vous ayez défini correctement les paramètres de connexion appropriés. Pour configurer le routeur de manière à ce qu'il se connecte à votre FSI, cliquez sur « Type de connexion » sur l'onglet Internet/WAN dans la partie gauche de l'écran.",
'722' : "Types de connexion pris en charge :",
'htWANMainContent' : "Sélectionnez le type de connexion :",
'700' : "Suivant",
'744' : "Compte PPTP",
'745' : "Mot de passe",
'746' : "Retaper le mot de passe",
'747' : "Nom d’hôte",
'1770' : "Adresse IP attribuée par le FSI",
'1771' : "Oui",
'1772' : "Non",
'1773' : "Adresse de service",
'750' : "Masque de sous-réseau",
'778' : "Le routeur peut être configuré de façon à servir uniquement de point d'accès, ignorant ainsi toutes les fonctions d’acheminement et coupe-feu. Pour ce faire, sélectionnez « Activer » et tapez l'adresse IP que vous voulez affecter au point d'accès.",
'779' : "Mode Point d’accès :",
'781' : "Spécifiez le masque de sous-réseau",
'801' : "Mode Sécurité",
'806' : "Vous pouvez définir les paramètres de cryptage ou de sécurité sans fil ici. Ces paramètres doivent être activés pour assurer une sécurité sans fil maximale. L’accès protégé sans fil (WPA) permet le changement dynamique de clés et constitue la meilleure garantie de sécurité. Dans les environnements sans fil, où tous les périphériques ne prennent pas en charge le WPA, le cryptage WEP devrait être utilisé.",
'377' : "Auto",
'487' : "ACTIVÉ",
'488' : "DÉSACTIVÉ",
'787' : "Si vous voulez modifier les paramètres sans fil du routeur, faites-le ici. Cliquez sur « Enregistrer » pour sauvegarder les paramètres.",
'788' : "Canal sans fil",
'789' : "SSID",
'790' : "Mode sans fil",
'794' : "SSID de diffusion",
'797' : "Mode Protégé",
'1300' : "Canal supplémentaire",
'1301' : "Bande passante",
'1304' : "802.11e/WMM QoS",
'852' : "La clé pré-partagée doit compter entre 8 et 63 caractères, ou 64 caractères hexadécimaux",
'856' : "Accès Wi-Fi protégé avec clé pré-partagée : Cette clé est un mot de passe qui peut prendre la forme d’un mot, d’une phrase ou d’une série de lettres et de chiffres. La clé peut compter entre <b>8</b> et <b>63</b> caractères, incluant les espaces et symboles, ou  <b>64</b> caractères hexadécimaux (0-F) seulement. Chaque client qui se connecte au réseau doit utiliser la même clé (pré-partagée).",
'115' : "Vous n'avez pas entré tous les caractères hexadécimaux, ou certains caractères hexadécimaux que vous avez entrés ne sont pas valides. Un caractère hexadécimal peut être un nombre de 0 à 9, ou une lettre comprise entre A et F.",
'308' : "<b>SPI</b> Inspection dynamique de paquets. SPI est une sécurité Internet pour les entreprises offerte par la passerelle pour réseau domestique HomeConnect. Grâce à cette technique, la passerelle tient lieu de « coupe-feu » qui protège votre réseau contre les attaques de pirates informatiques.",
'808' : "NOTE :",
'809' : "Pour générer automatiquement des paires hexadécimales à partir d'une phrase de passe, cliquez sur le bouton à droite et tapez-la ici.",
'810' : "Phrase de passe",
'811' : "Générer",
'812' : "Veuillez taper une phrase de passe",
'814' : "Clé",
'818' : "(paires de caractères hexadécimaux)",
'296' : "<b>Adresse IP </b> IP est un acronyme anglais qui signifie « Protocole Internet ». Une adresse IP est constituée d'une série de quatre nombres entiers séparés par des points, qui identifie de façon unique un hôte Internet. Exemple : 192.34.45.8.",
'298' : "<b>FSI</b> Fournisseur de services Internet. Un FSI est une entreprise qui assure des connexions au réseau Internet aux particuliers et à d'autres entreprises ou organisations.",
'807' : "(13 paires de caractères hexadécimaux)",
'813' : "La clé est incomplète",
'821' : "est incomplète",
'1190' : "<br>Pour enregistrer votre nom d’hôte dynamique, rendez-vous à l’adresse http://www.dyn.com<br>",
'1339' : "Il est recommandé d'utiliser la méthode WPA/WPA2 lorsque le WPS est activé.",
'1363' : "En cours – veuillez patienter...",
'1364' : "Erreur détectée – Veuillez réessayer.",
'1365' : "Erreur de chevauchement de session : Veuillez attendre 60 secondes avant de relancer le processus ou reportez-vous à l'utilitaire client pour vous connecter manuellement à ce réseau.",
'1366' : "Réussi – Le périphérique est connecté au routeur.",
'1370' : "PIN non valide! Le NIP du périphérique est formé de quatre ou huit caractères numériques. Veuillez vérifier et l'entrer de nouveau.",
'1620' : "Amorce en cours - Veuillez amorcer la connexion WPS selon la méthode PBC sur le périphérique client dans les deux prochaines minutes.",
'1621' : "Amorce en cours - Veuillez amorcer la connexion WPS sur le périphérique client dans les deux prochaines minutes.",
'1622' : "Temporisation - Aucun client ne se connecte au routeur.",
'1623' : "Message WPS",
'1393' : "Bouton WPS",
'1320' : "WPS, de l'anglais « Wi-Fi Protected Setup », est la méthode standard utilisée dans l’industrie pour simplifier la mise en place de mesures de sécurité et la gestion des réseaux Wi-Fi. Vous pouvez facilement vous connecter à un réseau 802.11 WPA avec périphériques certifiés WPS en utilisant soit la méthode NIP (numéro d’identification personnel), soit la méthode PBC (configuration par bouton de commande). Vous pouvez ajouter d'anciens périphériques non WPS au réseau en utilisant la méthode de configuration manuelle.",
'1321' : "Méthode NIP (numéro d’identification personnel)",
'1322' : "Entrez le NIP du périphérique client, puis cliquez sur « Inscrire ». Ensuite, activez le WPS sur le périphérique à partir de son utilitaire sans fil ou de l'application WPS dans les 2 minutes qui suivent.",
'1323' : "Entrez le NIP du périphérique client",
'1324' : "Inscrire",
'1325' : "Si un registre externe est disponible, vous pouvez aussi entrer le NIP du routeur. Pour modifier le NIP du routeur, vous pouvez cliquer soit sur « Générer nouveau NIP », soit sur « Rétablir NIP par défaut » pour restaurer la valeur définie par le fabricant.",
'1326' : "NIP du routeur",
'1327' : "Générer nouveau NIP",
'1328' : "Rétablir NIP par défaut",
'1329' : "Méthode PBC (configuration par bouton de commande)",
'1330' : "Appuyez sur le bouton PBC de votre routeur et maintenez-le enfoncé pendant 3 secondes, ou cliquez sur « Démarrer PBC ». Démarrez ensuite le PBC sur le périphérique que vous souhaitez connecter au routeur dans les 2 minutes qui suivent.",
'1331' : "Démarrer PBC",
'1332' : "Méthode de configuration manuelle",
'1333' : "Pour les périphériques clients sans WPS, faites la configuration manuelle en utilisant les paramètres suivants.",
'1334' : "Sécurité sans fil",
'1336' : "Authentification du réseau",
'1337' : "Cryptage des données",
'1338' : "Clé de réseau (PSK)",
'1340' : "Déverrouiller le NIP du routeur",
'1341' : "Le NIP du routeur a été désactivé en raison d'un nombre trop élevé de tentatives d'accès infructueuses",
'1390' : "Échec de la somme de contrôle du NIP! Veuillez vérifier et l'entrer de nouveau.",
'1391' : "PIN non valide! Le NIP du périphérique est formé de huit caractères numériques. Veuillez vérifier et l'entrer de nouveau.",
'1392' : "Configuré",
'1396' : "Configurer manuellement la sécurité sans fil",
'1397' : "sécurité sans fil",
'common_err1' : "%s est une valeur NULLE",
'upgrade_err2' : "La mise à niveau du micrologiciel a pris fin en raison des ressources insuffisantes. L'opération a échoué.\nVeuillez essayer de nouveau lorsque le système sera inactif (pas de trafic Internet)",
'upgrade_err3' : "Impossible de télécharger en amont (vers le serveur), veuillez contacter l'administrateur.",
'upgrade_err4' : "Le micrologiciel est trop gros, échec de la mise à niveau.",
'upgrade_err5' : "La plus récente version du micrologiciel a déjà été installée.",
'upgrade_err6' : "Il semble que la mise à jour du micrologiciel soit corrompue. Veuillez re-télécharger le micrologiciel et essayer de nouveau.",
'show10' : "Liste de clients DHCP",
'show54' : "Paramètres de connexion",
'btn2' : "Appliquer les modifications",
'cff1' : "Vérification réussie du micrologiciel",
'PM2' : ":30 PM",
'AM2' : ":30 AM",
'Dimicons' : "Icônes Veilleuse",
'EcoTo' : "à",
'fvrm' : "Veuillez désactiver la gestion à distance. Parce que son port est en conflit avec un des ports d'arrivée de votre serveur virtuel.",
'lsipm2' : "Adresse IP de réseau local non valide, le dernier chiffre ne peut pas être 0 ou 255",
'lsldnm' : "Nom de domaine local non valide : `~!@#$%^&*()_+[]{}\|;:'\"<>/?.,",
'lsipm5' : "L’adresse IP que vous sélectionnez doit être une adresse IP non routable.\n  192.168.x.x (où x peut être n’importe quelle valeur entre 0 et 255.) \n10.x.x.x (où x peut être n’importe quelle valeur entre 0 et 255.)\n172.y.x.x (où y peut être n’importe quelle valeur entre 16 et 31 et x n’importe quelle valeur entre 0 et 255.)",
'ufy4' : "La restauration des paramètres par défaut peut prendre jusqu’à 60 secondes. Ne coupez pas l’alimentation du routeur pendant cette opération.",
'ufe11' : "Une fois la mise à niveau terminée, il se pourrait que le routeur ne réponde pas aux commandes pendant 180 secondes. Ceci est normal. N'éteignez pas ou ne redémarrez pas le routeur pendant ce temps.",
'ur5' : "Attendez jusqu'à 30 secondes que le routeur redémarre. N'éteignez pas le routeur avant qu'il se soit complètement réinitialisé.",
'ur6' : "Attendez jusqu'à 60 secondes que le routeur redémarre. N'éteignez pas le routeur avant qu'il soit complètement réinitialisé.",
'usys83' : "Les champs Nouveau mot de passe et Confirmer le nouveau mot de passe ne concordent pas",
'usys83_1' : "Les champs Mot de passe et Confirmer le mot de passe ne concordent pas.",
'usys85_1' : "Le mot de passe d'administration doit contenir entre 3 et 12 caractères.",
'usys88' : "Le mot de passe contient le nombre maximum de caractères!",
'usys89' : "AM",
'usys90' : "PM",
'usys92' : "Le numéro du port d'accès distant doit être compris entre 1 et 65535.",
'usysipm' : "Vous n'avez pas entré tous les numéros IP, ou certains numéros que vous avez entrés ne sont pas valides. L'adresse IP doit être entrée sous la forme x.y.y.z (où x peut être n’importe quelle valeur entre 1 et 223, y n’importe quelle valeur entre 0 et 255 et z n’importe quelle valeur entre 1 et 254).",
'self_healing60' : "Autorétablissement",
'chkwait' : "Vérification de nouvelle version du micrologiciel...",
'Europe' : "Europe",
'Australia' : "Australie et Nouvelle-Zélande",
'AsiaPacific' : "Asie-Pacifique",
'NorthAmerica' : "Amérique du Nord",
'vjs1' : "Adresse IP non valide, trop longue. Veuillez vérifier à nouveau",
'vjs2' : "Adresse IP non valide, il manque un point (.)  Veuillez vérifier à nouveau!",
'vjs3' : "Adresse IP non valide, il manque des chiffres entre le point (.)  Veuillez vérifier à nouveau!",
'vjs4' : "Adresse IP non valide, il y a un point (.) de trop.  Veuillez vérifier à nouveau!",
'vjs5' : "Adresse IP non valide – les chiffres entre le point (.) sont trop grands.  Veuillez vérifier à nouveau !",
'vm1' : "Caractère non valide ",
'vm2' : " à la position ",
'vm3' : "Doit être ",
'vjs6' : "Format d'année non valide, veuillez l'entrer sous la forme (p. ex. 2002)",
'vm4' : "Chiffre non valide ",
'vjs8' : "Non valide, doit être compris entre 1970 et 2037",
'vjs9' : "Format de mois non valide, veuillez l’entrer sous la forme (01…12, par exemple)",
'vjs161' : " n'est pas dans ",
'vjs162' : " masque de réseau",
'vjs163' : "La plage DHCP permise est ",
'vjs17' : "Vous avez tapé deux mots de passe différents, veuillez vérifier à nouveau!",
'vjs18' : "Veuillez entrer le numéro du premier port.",
'vjs19' : "Le numéro du premier port doit être plus petit que celui du dernier port.",
'vjs23' : "Adresse MAC non valide; ceci est une adresse de diffusion.",
'vjs24' : "Adresse MAC non valide; cette adresse est vide.",
'vjs25' : "Adresse MAC non valide; ceci est une adresse de multidiffusion.",
'vjs26' : "Adresses IP de début et de fin non valides; l'adresse IP de fin doit être un numéro plus grand que celui de début.",
'vjs28' : "Format de masque de réseau non valide.",
'vjs29' : "Format non valide; le masque de réseau doit être 255.255.255.0 ou 255.255.255.128 ou 255.255.255.192 ou 255.255.255.224 ou 255.255.255.240 ou 255.255.255.248 ou 255.255.255.252 ou 255.255.255.254",
'vjs30' : "Adresse IP non valide; le dernier chiffre ne peut pas être 0 ou 255",
'vjs31' : "Adresse IP de réseau local (LAN) non valide, le premier chiffre ne peut pas être 127",
'vjs32' : "Adresse IP de réseau local (LAN) non valide, elle ne peut pas être 0.0.0.0",
'vjs33' : "Adresse IP de réseau local (LAN) non valide; elle doit être inférieure à 224.0.0.0",
'vjs42' : "Les numéros de masque de sous-réseau que vous avez entrés ne sont pas valides.",
'vjs45' : "Spécifiez l'adresse IP",
'vjs46' : "n'est pas valide. Veuillez d'abord la corriger!",
'wcc2' : "Sélectionnez votre type de connexion :",
'wcc13' : "L2TP",
'wcc14' : "Certains FSI utilisent le protocole L2TP pour connecter leurs abonnés à leur réseau. Cela vous oblige à entrer des paramètres supplémentaires que votre FSI devrait vous avoir communiqué. Après avoir enregistré vos modifications, l'indicateur « État connexion Internet » sera de couleur verte si l'opération est réussie.",
'wds4_1' : "Adresse DNS principale",
'wds7' : "Vous devez entrer les paramètres DNS que votre FSI vous a fournis si vous n'utilisez pas la fonction DNS automatique",
'wds8' : "Pour modifier les paramètres DNS, rendez-vous d'abord sur %s Filtres de sites Web %s et sélectionnez « Pas de filtres ».",
'wmc6' : "L'adresse MAC WAN ne peut pas être identique à l'adresse MAC LAN. Veuillez en sélectionner une autre.",
'wdd9 ' : "Aucun service DDNS sélectionné.\n",
'wdd10' : "Aucun service DDNS n'a été sélectionné et toutes les données de cette page seront perdues. Voulez-vous continuer?",
'wm10b' : "Seulement pour utilisation avec les FSI qui exigent la méthode de connexion L2TP.",
'pm' : "Votre service a été incapable de vérifier le mot de passe que vous avez entré. Veuillez confirmer qu’il s’agit du bon mot de passe.",
'wpp17' : "Compte L2TP",
'wpp18' : "Mot de passe L2TP",
'wpp19' : "Veuillez entrer votre compte L2TP",
'wpp23' : "Attribution d'adresse IP",
'wpp24' : "Utiliser l'adresse IP statique",
'wpp25' : "Obtenir de façon dynamique du FSI",
'wppa7' : "Mon adresse IP",
'wppa9' : "ID connexion (facultatif)",
'wppa13' : "Veuillez entrer votre compte PPTP",
'wppa18' : "Le nom du service n'est pas valide.",
'ws2' : "Pour définir votre adresse IP statique, tapez vos coordonnées ci-dessous et cliquez sur « Appliquer les modifications ».",
'sm_1' : "Le masque de sous-réseau que vous avez entré n'est pas valide.",
'ws8' : "Veuillez entrer vos paramètres d’adresse DNS à l’écran suivant",
'wt2' : "Le routeur redémarrera si vous cliquez sur « Appliquer les modifications ». Une fois qu'il aura redémarré, faites ceci :",
'wt3' : "1) Débranchez le câble d'alimentation du modem câble et du routeur Belkin",
'wt4' : "2) Rebranchez le câble d'alimentation sur le modem câble et attendez que tous les voyants du modem cessent de clignoter",
'wt5' : "3) Rebranchez le câble d'alimentation sur le routeur Belkin",
'wt6' : "Pour confirmer que vous êtes connecté à Internet, ouvrez votre navigateur (Internet Explorer, Firefox ou Safari) et assurez-vous de pouvoir afficher des pages Web.",
'wlad2' : "Activer/Désactiver",
'wlc2' : "Si vous voulez modifier les paramètres sans fil du routeur, faites-le ici. Cliquez sur « Appliquer les modifications » pour enregistrer vos paramètres.",
'wlcgb' : "802.11b+g",
'wlcg' : "802.11g",
'wlcb' : "802.11b",
'wlc20' : "20 MHz",
'wlc22' : "20/40 MHz",
'wlcoff' : "DÉSACTIVÉ",
'wlcngb1' : "802.11b, 802.11g et 1x1 802.11n",
'wlcn1' : "1x1 802.11n",
'wlcngb2' : "802.11b, 802.11g et 802.11n",
'wlcn2' : "802.11n",
'wlcgn' : "802.11g+n",
'wlca' : "802.11a",
'wlcan' : "802.11a et 802.11n",
'wlc26' : "Le fait de masquer le nom de votre réseau désactivera la fonction WPS.",
'wlc27' : "Le fait de changer de type de sécurité désactivera la fonction WPS.",
'wlc28' : "La fonction WPS est désactivée en raison de votre <A href=%s><B>type de sécurité sans fil</B></A>.",
'wlc29' : "La fonction WPS est désactivée parce que vous avez masqué le nom de votre réseau (SSID).",
'wlc30' : "La fonction WPS est désactivée parce que vous avez masqué le nom de votre réseau (SSID) et aussi, en raison de votre <A href=%s><B>type de sécurité réseau</B></A>.",
'wlc31' : "En activant la fonction WPS, le nom de votre réseau (SSID) s'affichera.",
'wlc32' : "En activant la fonction WPS, votre type de sécurité changera à WPA/WPA2. Votre mot de passe réseau actuel fonctionnera correctement.",
'wlc33' : "En activant la fonction WPS, le nom de votre réseau (SSID) s'affichera et votre type de sécurité changera à WPA/WPA2. Votre mot de passe réseau actuel fonctionnera correctement.",
'wle3a' : "WPA-PSK",
'wle3b' : "WPA2-PSK",
'wle3c' : "WPA-PSK + WPA2-PSK",
'wps1' : "Mode « Wi-Fi Protected Setup » (WPS)",
'wps3' : "Veuillez configurer la sécurité sans fil",
'wps17' : "Dans le cas des dispositifs clients sans fonction WPS, veuillez exécuter l'Assistant de sécurité Belkin à partir du CD ou faire la configuration manuellement en utilisant les paramètres suivants :",
'wps23' : "WPA+WPA2-Personnel (PSK)",
'wps25' : "TKIP+AES",
'wps27' : "Clé de réseau (WEP) :",
'wps28_1' : "NUL",
'wle11' : "Clé 1",
'wle12' : "Clé 2",
'wle13' : "Clé 3",
'wle14' : "Clé 4",
'wpskerr2' : "La clé peut compter entre 8 et 63 caractères, incluant les espaces et symboles, ou 64 caractères hexadécimaux (0-F) seulement!",
'wpskerr4' : "Vous devez entrer la clé Invité",
'wpskerr7' : "La clé Invité doit compter 8 caractères",
'wpskerr8' : "La clé Invité doit être différente de la clé Réseau",
'wlguest1' : "Le code SSID doit être différent du code SSID Invité",
'wlguest2' : "Le code SSID Invité doit être différent du code SSID",
'rs_crc' : "Échec de la restauration < CRC >",
'rs_long' : "Échec de la restauration <too long>",
'rs_disposition' : "Échec de la restauration <No Content-Disposition>",
'rs_getpid' : "Échec de la restauration <Can't get pid!>",
'rs_unmatchpid' : "Échec de la restauration <Unmatched pid>",
'msg_ddns3 ' : "Les champs de nom de domaine ne peuvent pas être laissés en blanc.\n",
'msg_lan_dhcp1 ' : "Demande d'information de la passerelle.",
'msg_lan_dhcp2 ' : "Mise à jour de la base de données de configuration.",
'msg_wan_stat1 ' : "L'adresse IP ",
'msg_wan_stat2 ' : " n'est pas dans le ",
'msg_wan_stat3 ' : " réseau",
'msg_wls_chan2 ' : "Le code SSID Invité ne peut pas être une valeur NULLE!\n",
'fw_not_interrupt ' : "NE PAS ÉTEINDRE OU DÉBRANCHER LE ROUTEUR car ce faisant, vous le rendriez inutilisable.",
'msg_invalid_char ' : "Des caractères non valides ont été trouvés. Les caractères valides sont : 0-9, a-z, A-Z, `~!@#$%^&*()_-+=|\\{}[]:\";\',.<>/?",
'msg_invalid_domain_char ' : "Nom de domaine local non valide'+': ~!@#$%^&*()=+{}[]|\":;\\\'?/<>,`",
'msg_invalid_char_1 ' : "Des caractères non valides ont été trouvés. Les lettres et les chiffres sont des caractères valides. Les symboles suivants ne sont pas valides : `~!@#$%^&*()_+[]{}\\|;:\'\"<>/?.,",
'msg_hostIP_invalid ' : "L'adresse IP hôte n'est pas valide. Elle ne doit pas être l'adresse IP du réseau local (LAN) du routeur.\n",
'msg_dmzIP ' : "L'adresse IP DMZ",
'msg_blank ' : " ne peut pas être laissée en blanc.\n",
'msg_space ' : "Les blancs ou les espaces ne sont pas permis dans %s\n",
'msg_blank_in ' : "Les blancs ne sont pas permis dans %s\n",
'msg_allspaces ' : "%s ne peut pas comprendre que des espaces\n",
'msg_invalid ' : "Caractère(s) non valide(s) dans %s\nLes caractères valides sont : \n%s\n\n",
'msg_check_invalid ' : "%s contient un nombre non valide\n",
'msg_valid_range ' : "%s n'est pas valide. La plage valide va de %s à %s\n",
'msg_invalid_mac ' : "Adresse MAC non valide.\n",
'msg_multi_mac' : "L’adresse MAC ne peut pas être une adresse multidiffusion.\n",
'msg_confirmDefault ' : "Attention!\nLe chargement des paramètres par défaut du fabricant effacera tous les paramètres actuels.\nÊtes-vous certain de vouloir continuer?",
'Allowed_Services' : "Services autorisés",
'Allowing_Url' : "Autorisation de sites Web par adresse URL ",
'Allowing_Keyword' : "Autorisation de sites Web par mot clé",
'wipv63' : "Les appareils connectés à votre routeur peuvent communiquer entre eux au moyen de paquets IPv6 natifs. Les paquets IPv6 sur le réseau local (LAN) seront automatiquement envoyés à toutes les interfaces LAN (ports Ethernet et réseaux 2,4 GHz et 5 GHz sans fil).",
'wipv64' : "Lorsque la fonction d'intercommunication (passe-système) IPv6  est activée, les paquets IPv6 sont également copiés sur l'interface WAN, créant ainsi une connexion directe et non sécurisée à Internet.",
'wipv65' : "Veuillez communiquer directement avec votre FSI pour en savoir davantage sur le soutien offert en rapport avec le protocole IPv6.",
'wipv67' : "Protocole IPv6 Internet",
'wipv68' : "Votre réseau est compatible avec le protocole IPv6.",
'wipv69' : "Fonction d'interconnexion (passe-système)",
'mf1' : "Ces pages vous permettent de modifier le comportement de votre routeur lorsqu'il doit gérer certains types de trafic multimédia.",
'mf2' : "Optimisez automatiquement votre connexion Internet pour différents types de trafic.",
'mf3' : "Voyez de quelle façon votre routeur est utilisé.",
'mf8' : "Enregistrés sur %s",
'mf10' : "Télécharger (en aval)",
'mf11' : "Télécharger (en amont)",
'mf12' : "Vitesse",
'mf15' : "Appliquer les paramètres",
'mf18' : "Entrez un nombre entre {0.1 et %s}.",
'mf20' : "Entre {0.1 et %s} seulement.",
'mf26' : "Enregistrés manuellement sur %s",
'mf32' : "ou",
'mf44' : "Il se pourrait que les résultats du test de vitesse automatique ne soient pas précis à 100 %, selon le trafic Internet ou d'autres conditions. Pour comparer les résultats, rendez-vous sur un site Web de test de vitesse ou communiquez avec votre FSI pour confirmer vos débits Internet. Si les résultats sont incohérents, vous pouvez entrer les valeurs manuellement.",
'media_dlna18' : "Sans titre",
'media_dlna21' : "Comme vous avez plus de médias que votre routeur est capable d'indexer, nous desservons les 12 000 premiers.",
'errSubnetMaskInvalid_2' : "Le masque de sous-réseau que vous avez entré ne ressemble pas à un masque de sous-réseau. Veuillez vérifier la valeur",
'htWAN_L2TP' : "Paramètres L2TP",
'htWAN_L2TPContent' : "Certains FSI utilisent le protocole L2TP pour connecter leurs abonnés à leur réseau. Cela vous oblige à entrer des paramètres supplémentaires que votre FSI devrait vous avoir communiqué. Après avoir enregistré vos modifications, l'indicateur « État connexion Internet » sera de couleur verte si l'opération est réussie.",
'p400t001_error' : "Établissez toutes les connexions plus rapidement.",
'p400t018_error' : "Pourquoi devrais-je renommer?",
'p400t019_error' : "C'est ce que vous verrez lorsque vous chercherez votre réseau à partir d'autres périphériques. Des noms de réseau uniques sont plus faciles à trouver et à mémoriser. Si vos divers périphériques sans fil étaient auparavant connectés à un routeur différent, le fait d'utiliser les mêmes nom de réseau et mot de passe vous éviterait d'avoir à communiquer de nouvelles coordonnées à chacun d'eux; ils se connecteront automatiquement. ",
'dhToggleBand2G' : "Montrer 2.4 GHz",
'772' : "Le routeur redémarrera si vous cliquez sur « Appliquer les modifications ». Une fois qu'il aura redémarré, faites ceci :",
'773' : "1) Débranchez le câble d'alimentation du modem câble et du routeur Belkin",
'774' : "2) Rebranchez le câble d'alimentation sur le modem câble et attendez que tous les voyants du modem cessent de clignoter.",
'dft001' : "Il semble que vous ne soyez pas connecté.",
'dft002' : "Si vous avez besoin de soutien et que vous avez un appareil connecté, rendez-vous sur le site <strong>help.belkin.com</strong>.",
'gtNoSecCard     ' : "Veuillez noter le nom de votre réseau et votre mot de passe pour pouvoir vous y reporter plus tard.",
'gtFWUpdateMobileError' : "Les fichiers de microprogramme ne peuvent pas être téléchargés à partir d'appareils mobiles à l'heure actuelle.",
'gtSettingsMobileError' : "Les fichiers de microprogramme ne peuvent pas être téléchargés à partir d'appareils mobiles à l'heure actuelle.",
'gtMoreFromInternet' : "Connectez-vous à internet pour plus de langues",
'gtCantConnect' : "Nous sommes incapables de nous connecter à Internet.",
'p802t004' : "Affichez le menu de réseau sans fil de votre appareil",
'p803t004' : "Affichez le menu de réseau sans fil de votre appareil",
'PIC-S1t001' : "Bloquer tous les appareils",
'gtUnnamedDevice' : "Appareil sans nom",
'gtIC' : "Contrôle Internet ",
'errDefaultGatewayEmpty' : "Le champ d'adresse de passerelle par défaut ne peut pas être laissé en blanc.",
'errDefaultGatewayInvalid' : "L’adresse de passerelle par défaut doit être formée de quatre nombres (0-255) séparés par des points. Veuillez vérifier la valeur.",
'errDNSServerEmpty' : "Le champ d'adresse de serveur DNS ne peut pas être laissé en blanc.",
'errDNSServerInvalid' : "L’adresse de serveur DNS doit être formée de quatre nombres (0-255) séparés par des points. Veuillez vérifier la valeur.",
'errIpAddressEmpty' : "Le champ d'adresse IP ne peut pas être laissé en blanc.",
'errIpAddressInvalid' : "L’adresse IP doit être formée de quatre nombres (0-255) séparés par des points. Veuillez vérifier la valeur.",
'errorGenericCommitError' : "Une erreur s'est produite.  Veuillez corriger les paramètres ci-dessous et essayer de nouveau.",
'errorSSIDEmpty' : "Veuillez attribuer un nom à votre réseau sans fil.",
'errorSSIDInvalidChars' : "Le nom de votre réseau ne doit contenir que des lettres, des chiffres, des signes de ponctuation et des espaces.",
'errorSSIDTooLong' : "Le nom de votre réseau doit compter moins de 32 caractères.",
'errorWEPPasswordEmpty' : "Veuillez entrer un mot de passe pour sécuriser votre réseau sans fil.",
'errorWEPPasswordInvalidChars' : "Votre mot de passe réseau ne peut contenir que des chiffres et les lettres A à F.",
'errorWEPPasswordInvalidLength' : "Votre mot de passe du réseau doit contenir 10 ou 26 caractères.",
'errorWPAPasswordEmpty' : "Veuillez entrer un mot de passe pour sécuriser votre réseau sans fil.",
'errorWPAPasswordInvalidChars' : "Votre mot de passe réseau ne peut contenir que des lettres, des chiffres, des signes de ponctuation et des espaces.",
'errorWPAPasswordInvalidLength' : "Votre mot de passe réseau doit contenir entre 8 et 63 caractères.",
'errPasswordEmpty' : "Veuillez taper votre mot de passe.",
'errPasswordInvalid' : "Votre nom d'utilisateur ne peut contenir que des lettres, des chiffres, des signes de ponctuation et des espaces.",
'errPasswordTooLong' : "Votre mot de passe doit contenir moins de 64 caractères.",
'errServAddressEmpty' : "Veuillez entrer une adresse de service.",
'errSubnetMaskEmpty' : "Le champ de masque de sous-réseau ne peut pas être laissé en blanc.",
'errSubnetMaskInvalid' : "Le masque de sous-réseau doit être formé de quatre nombres (0-255) séparés par des points. Veuillez vérifier la valeur.",
'errUsernameInvalid' : "Votre nom d'utilisateur ne peut contenir que des lettres, des chiffres, des signes de ponctuation et des espaces.",
'errUsernameTooLong' : "Votre nom d’utilisateur doit contenir moins de 64 caractères.",
'errVCIInvalid' : "Veuillez entrer un nombre entre 0 et 65535. Votre FSI sera en mesure de vous dire quelle valeur utiliser.",
'errVPIInvalid' : "Veuillez entrer un nombre entre 0 et 255. Votre FSI sera en mesure de vous dire quelle valeur utiliser.",
'p802t003' : "Comme certains paramètres ont changé, vous devrez peut-être sélectionner à nouveau votre réseau sans fil :",
'p802t011' : "Comme certains paramètres ont changé, vous devrez peut-être sélectionner à nouveau votre réseau sans fil :",
'dft003' : "Besoin d’aide?",
'dft004' : "Avez-vous besoin d'aide ou une question à poser? Vous pouvez consulter notre Centre d'assistance en ligne 24 heures sur 24.<br><a href=\"http://www.belkin.com/support/\" id=\"dfBelkinHelp\">Centre d'assistance Belkin &rarr;</a>",
'dhChangeSSID' : "Changer &raquo;",
'dhPassLabel' : "Mot de passe :",
'dhPasswordObscured24' : "t********",
'dhShow' : "Montrer :",
'dhSSID24' : "{blahblah}",
'dhToggle24' : "2,4 Ghz",
'dhToggle5' : "5,0 Ghz",
'DownSpeed' : "32.6",
'errUsernameEmpty' : "Veuillez entrer votre nom d'utilisateur.",
'gt10am' : "10:00",
'gt10pm' : "22:00",
'gt11am' : "11:00",
'gt11pm' : "23:00",
'gt1am' : "01:00",
'gt1amNextDay' : "1 h 00 le jour suivant",
'gt1pm' : "13:00",
'gt24ghz' : "2,4 Ghz",
'gt24GKey' : "Clé 2,4 GHz",
'gt24GName' : "SSID 2,4 GHz",
'gt24PSK' : "Mot de passe",
'gt24Sec' : "WPA2",
'gt24SSID' : "12345678",
'gt2am' : "02:00",
'gt2pm' : "14:00",
'gt3am' : "03:00",
'gt3pm' : "15:00",
'gt4am' : "04:00",
'gt4pm' : "16:00",
'gt50ghz' : "5 Ghz",
'gt5am' : "05:00",
'gtGuestKey' : "Clé invité",
'gt5GMedia' : "Votre bande passante de 5 GHz porte le même nom, mais le suffixe \".media\" a été ajouté.",
'gtGuestName' : "SSID invité",
'gt5pm' : "17:00",
'gt6am' : "06:00",
'gt6pm' : "18:00",
'gt7am' : "07:00",
'gt7pm' : "19:00",
'gt8am' : "08:00",
'gt8pm' : "20:00",
'gt9am' : "09:00",
'gt9pm' : "21:00",
'gtAccessControl' : "Contrôle parental d'Internet",
'gtAccessPoint' : "Utiliser comme point d’accès",
'gtADSL' : "ADSL",
'gtAdvSettings' : "Paramètres avancés",
'gtAllElseFails' : "Si cela ne donne rien, appelez le Soutien technique Belkin in&nbsp;",
'gtAndroidConnect01' : "Téléphones et tablettes Android",
'gtAndroidConnect02' : "L'application Paramètres sur votre appareil contient une liste des réseaux sans fil disponibles.",
'gtAndroidConnect03' : "Ouvrez l'application <strong>Paramètres </strong>et sélectionnez <strong>Sans fil et réseau</strong>.",
'gtAndroidConnect04' : "Sélectionnez ensuite<strong>Wi-Fi</strong> pour afficher la liste des réseaux disponibles.",
'gtAndroidConnect05' : "Sélectionnez <strong tid=\"Network24SSID\">{REPLACE WITH 2.4 SSID}</strong>. <!-- IF NOT OPEN --> <span tid=\"gtNotOpen\">Si on vous le demande, entrez le mot de passe réseau <strong tid=\"Network24Passkey\">{REPLACE WITH 2.4 PASSWORD}</strong>.</span> <!-- /IF -->",
'gtAt' : "à",
'gtAttenuation' : "Affaiblissement",
'gtAustralia' : "Australie",
'gtBackToDashboard' : "&larr; Retour au tableau de bord",
'gtBelkin' : "Belkin",
'gtBootLoader' : "Chargeur de programme d'amorce",
'gtCantConnect' : "Nous sommes incapables de nous connecter à votre FSI.",
'gtCantConnectNoResponse' : "Nous sommes incapables de nous connecter à Internet – il n'y avait pas de réponse de votre FSI.",
'gtChina' : "Chine",
'gtClientList' : "Dispositifs connectés",
'gtClose' : "Fermer",
'gtConfig' : "Configurer",
'gtConfigureRouter' : "Configurer le routeur",
'gtConnDevices' : "Dispositifs connectés",
'gtConnectingToNew' : "Connexion à votre nouveau réseau",
'gtConnectionDet' : "Détails de la connexion",
'gtConnType' : "Type de connexion",
'gtContentFiltering' : "Filtre de sites Web",
'gtCopyright' : "Copyright &copy; 2012. Belkin. Tous droits réservés.",
'gtCurrTimezone' : "Europe/Helsinki {REPLACE THIS SPAN WITH DETECTED Belkin TZ ID description}",
'gtDashboard' : "&larr; Tableau de bord",
'gtDashTitle' : "Tableau de bord du routeur Belkin",
'gtDataRate' : "Débits",
'gtDDNS' : "DDNS",
'gtDHCPList' : "Dispositifs connectés",
'gtDHCPServer' : "Serveur DHCP",
'gtDMZ' : "DMZ",
'gtDNS' : "DNS",
'gtDown' : "Bas",
'gtDownloadSpeed' : "Vitesse de téléchargement en aval",
'gtEncap' : "Encapsulation :",
'gtFileInstallError' : "Ce fichier n'a pas pu être installé – il s'agit peut-être du mauvais type de fichier",
'gtFileLoadError' : "Ce fichier n'a pas pu être chargé – il s'agit peut-être du mauvais type de fichier",
'gtFirewall' : "Coupe-feu",
'gtFirmware' : "Micrologiciel",
'gtFirmwareUpdate' : "Mettre à niveau le micrologiciel",
'gtFrance' : "France",
'gtFreshest' : "Nous sommes en train d'obtenir la plus récente version de notre micrologiciel…",
'gtFrom' : "De :",
'gtFWUpdate' : "Mettre à niveau le micrologiciel",
'gtFWUpToDate' : "Votre micrologiciel est maintenant à jour.",
'gtGermany' : "Allemagne",
'gtGuestAccess' : "Accès invité",
'gtGuestNetwork' : "Réseau invité",
'gtHomeNetwork' : "Réseau domestique",
'gtIfYouKnowConnection1' : "Si vous connaissez le type de connexion que vous utilisez, vous pouvez <a href=\"700-SelectConnection.htm\" id=\"ISP1a010\">faire la configuration manuellement &raquo;</a>",
'gtIfYouKnowConnection2' : "Si vous connaissez le type de connexion que vous utilisez, vous pouvez <a href=\"700-SelectConnection.htm\" id=\"ISP2a010\">faire la configuration manuellement &raquo;</a>",
'gtIfYouKnowConnection3' : "Si vous connaissez le type de connexion que vous utilisez, vous pouvez <a href=\"700-SelectConnection.htm\" id=\"ISP3a010\">faire la configuration manuellement &raquo;</a>",
'gtIfYouKnowConnection4' : "Si vous connaissez le type de connexion que vous utilisez, vous pouvez <a href=\"700-SelectConnection.htm\" id=\"ISP4a010\">faire la configuration manuellement &raquo;</a>",
'gtIfYouKnowConnection4a' : "Si vous connaissez le type de connexion que vous utilisez, vous pouvez <a href=\"700-SelectConnection.htm\" id=\"ISP4aa010\">faire la configuration manuellement &raquo;</a>",
'gtIfYouKnowConnection5' : "Si vous connaissez le type de connexion que vous utilisez, vous pouvez <a href=\"700-SelectConnection.htm\" id=\"ISP5a010\">faire la configuration manuellement &raquo;</a>",
'gtIfYouKnowConnection6' : "Si vous connaissez le type de connexion que vous utilisez, vous pouvez <a href=\"700-SelectConnection.htm\" id=\"ISP6a010\">faire la configuration manuellement &raquo;</a>",
'gtIfYouKnowConnection7' : "Si vous connaissez le type de connexion que vous utilisez, vous pouvez <a href=\"700-SelectConnection.htm\" id=\"ISP7a010\">faire la configuration manuellement &raquo;</a>",
'gtIntellistream' : "Intellistream",
'gtInterleavePath' : "Chemin entrelacé",
'gtInternetSettings' : "Paramètres Internet",
'gtIOSConnect01' : "iPhone, iPad et iPod touch",
'gtIOSConnect02' : "L'application Paramètres sur votre appareil contient une liste des réseaux sans fil disponibles.",
'gtIOSConnect03' : "Ouvrez l'application <strong>Paramètres</strong> et sélectionnez <strong>Wi-Fi</strong>.",
'gtIOSConnect04' : "Sélectionnez <strong tid=\"Network24SSID\">{REPLACE WITH 2.4 SSID}</strong> dans la liste de réseaux. <!-- IF NOT OPEN --> <span tid=\"gtNotOpen\">Si on vous le demande, entrez le mot de passe réseau <strong tid=\"Network24Passkey\">{REPLACE WITH 2.4 PASSWORD}</strong>.</span> <!-- /IF -->",
'gtIPv6' : "IPv6",
'gtIPV6Connection' : "Connexion IPv6",
'gtISP' : "Type de connexion FSI",
'gtJapan' : "Japon",
'gtLANIP' : "Adresse IP LAN",
'gtLANMAC' : "Adresse MAC LAN/WLAN",
'gtLANSettings' : "Paramètres de réseau local (LAN)",
'gtLANSubnet' : "Masque de sous-réseau LAN",
'gtLLC' : "LLC",
'gtLoadPrevSettings' : "Charger les paramètres précédents",
'gtLocalNetwork' : "Réseau local",
'gtLocalSettings' : "Paramètres de réseau local",
'gtLocked' : "verrouillé",
'gtMACAddress' : "Adresse MAC",
'gtMACAddressFiltering' : "Filtrage d’adresses MAC",
'gtMacConnect01' : "Mac OS X",
'gtMacConnect02' : "Votre ordinateur offre un menu des réseaux sans fil disponibles à l'extrémité droite de la barre de menus.",
'gtMacConnect03' : "Cliquez sur l’icône représentant des ondes radio sans fil.",
'gtMacConnect04' : "Sélectionnez <strong tid=\"Network24SSID\">{REPLACE WITH 2.4 SSID}</strong> dans la liste de réseaux. <!-- IF NOT OPEN --> <span tid=\"gtNotOpen\">Si on vous le demande, entrez le mot de passe réseau <strong tid=\"Network24Passkey\">{REPLACE WITH 2.4 PASSWORD}</strong>.</span> <!-- /IF -->",
'gtMaybeLater' : "Peut-être plus tard",
'gtMbitPerSec' : "Mbit/s",
'gtMeaning' : "Qu’est-ce que cela signifie?",
'gtMedia' : "de la carte média",
'gtMediaServer' : "Serveur multimédia",
'gtmidnight' : "Minuit",
'gtModel' : "Modèle",
'gtName' : "Nom",
'gtNeedMoreHelp' : "Besoin de plus d’aide?",
'gtNetName' : "Nom du réseau",
'gtNewFWAvailableModem' : "Nous avons un nouveau micrologiciel pour votre modem.",
'gtNewFWAvailableRouter' : "Nous avons un nouveau micrologiciel pour votre routeur.",
'gtNewFWAvailableRouterAndModem' : "Nous avons un nouveau micrologiciel pour votre routeur et votre modem.",
'gtNext' : "Suivant",
'gtNo' : "Non",
'gtNoiseMargin' : "Marge de bruit",
'gtNoMyNet' : "Je ne vois pas mon réseau",
'gtNoon' : "Midi",
'gtNoSecCard' : "Veuillez noter le nom de votre réseau et votre mot de passe pour pouvoir vous y reporter plus tard.",
'gtNotOpen' : "Si on vous le demande, entrez le mot de passe réseau <strong tid=\"Network24Passkey\">{REPLACE WITH 2.4 PASSWORD}</strong>.",
'gtNZ' : "Nouvelle-Zélande",
'gtOffline' : "Hors ligne",
'gtOnline' : "En ligne",
'gtOptionalSoftware' : "Logiciel facultatif",
'gtOptionalSW' : "Logiciel facultatif",
'gtOptSW' : "Logiciel facultatif",
'gt-OR-' : "-OU-",
'gtOther' : "...",
'gtOutputPower' : "Puissance de sortie",
'gtParentalControls' : "Contrôles parentaux",
'gtPass' : "Mot de passe :",
'gtPIC' : "Contrôle parental d'Internet",
'gtPICOtherTimes' : "Pendant toutes les autres périodes, cet appareil n'aura pas accès à Internet.",
'gtPleaseCallISP' : "Veuillez appeler votre fournisseur de services Internet.",
'gtPortForwarding' : "Réacheminement vers d’autres ports",
'gtPrint' : "Imprimer",
'gtReadAllAboutIt' : "Pour plus d'informations :",
'gtReconnectingHell' : "Reconnexion en cours…",
'gtRegister' : "Enregistrer",
'gtRegistration' : "Connexion",
'gtRestartRouter' : "Redémarrer le routeur",
'gtRestoreDef' : "Rétablir paramètres par défaut",
'gtRestoreFactDefault' : "Rétablir les paramètres par défaut du fabricant",
'gtRestoreFactDefaults' : "Rétablir les paramètres par défaut du fabricant",
'gtRestoreSettigns' : "Rétablir les paramètres",
'gtRetest' : "Tester à nouveau la connexion",
'gtRouterDetails' : "Détails du routeur",
'gtRouterInfo' : "Info routeur",
'gtSave' : "Enregistrer",
'gtSaveCurrentSettings' : "Enregistrer paramètres actuels",
'gtSaved' : "Appareil sans nom enregistré",
'gtSaveRestore' : "Enregistrer/Rétablir les paramètres",
'gtSaveRestoreSettings' : "Enregistrer/Rétablir les paramètres",
'gtSaveSettings' : "Enregistrer/Sauvegarder les paramètres",
'gtSecLog' : "Journal de sécurité",
'gtSecurity' : "Sécurité",
'gtSelectLang' : "Sélectionner la langue :",
'gtSelfHeal' : "Autorétablissement",
'gtSelfHealing' : "Autorétablissement",
'gtSerialSupport' : "À la page suivante, nous allons enregistrer le numéro de série de votre routeur à des fins de soutien.",
'gtShowtime' : "Afficher l'heure",
'gtSpeedTestResults' : "Dernière vérification : il y a 1 jour à 15:57",
'gtStaticRouting' : "Acheminement statique",
'gtStatus' : "État",
'gtSystemSettings' : "Paramètres du système",
'gtTo' : "À :",
'gtTraffStats' : "Statistiques de trafic",
'gtTryAgain' : "Essayez à nouveau",
'gtUnlocked' : "déverrouillé",
'gtUp' : "Haut",
'gtUpdate' : "mettre à jour",
'gtUpdateNoPowerModem' : "Nous mettons à jour le micrologiciel de votre modem. N'éteignez pas votre routeur pendant cette opération.",
'gtUpdateNoPowerRouter' : "Nous mettons à jour le micrologiciel de votre routeur. N'éteignez pas votre routeur pendant cette opération.",
'gtUploadSpeed' : "Vitesse de téléchargement en amont",
'gtUSA' : "États-Unis",
'gtUserName' : "Nom d’utilisateur :",
'gtUtils' : "Utilitaires",
'gtVCI' : "VCI :",
'gtVCMUX' : "VC/MUX",
'gtVPI' : "VPI :",
'gtWAN' : "Paramètres WAN",
'gtWANDNS' : "Adresse DNS",
'gtWANGateway' : "Passerelle WAN",
'gtWANIP' : "Adresse IP WAN",
'gtWANMAC' : "Adresse MAC WAN",
'gtWANPingBlocking' : "Blocage Ping sur réseau étendu (WAN)",
'gtWANSubnet' : "Masque de sous-réseau WAN",
'gtWebsiteFilter' : "Filtre de sites Web",
'gtWelcome' : "Bienvenue",
'gtWiFi' : "Wi-Fi",
'gtWifiSettings' : "Vous avez modifié vos paramètres Wi-Fi avec succès.",
'gtWinConnect01' : "Windows 7 ou 8",
'gtWinConnect02' : "Votre ordinateur offre un menu des réseaux sans fil disponibles à l'extrémité droite de la barre des tâches.",
'gtWinConnect03' : "Avec le bouton droit de la souris, cliquez sur l'icône qui indique la puissance du signal.",
'gtWinConnect04' : "Sélectionnez <strong tid=\"Network24SSID\">{REPLACE WITH 2.4 SSID}</strong>. <!-- IF NOT OPEN --> <span tid=\"gtNotOpen\">Si on vous le demande, entrez le mot de passe réseau <strong tid=\"Network24Passkey\">{REPLACE WITH 2.4 PASSWORD}</strong>.</span> <!-- /IF -->",
'gtWinConnect05' : "Windows Vista et Windows XP",
'gtWinConnect06' : "Votre ordinateur offre un menu des réseaux sans fil disponibles à l'extrémité droite de la barre des tâches.",
'gtWinConnect07' : "Cliquez du bouton droit sur l'icône qui affiche un ordinateur avec des ondes radio sans fil (XP) ou deux ordinateurs (Vista).",
'gtWinConnect08' : "Choisissez <strong>Afficher les réseaux sans fil disponibles</strong> (XP) ou <strong>Se connecter à un réseau (Vista)</strong> au menu.",
'gtWinConnect09' : "Sélectionnez <strong tid=\"Network24SSID\">{REPLACE WITH 2.4 SSID}</strong>. <!-- IF NOT OPEN --> <span tid=\"gtNotOpen\">Si on vous le demande, entrez le mot de passe réseau <strong tid=\"Network24Passkey\">{REPLACE WITH 2.4 PASSWORD}</strong>.</span> <!-- /IF -->",
'gtWireless' : "Sans fil",
'gtWiring' : "Câblage",
'gtWPSShort' : "WPS",
'gtWPS' : "Méthode WPS",
'gtYes' : "Oui",
'htFWUpdate' : "Qu’est-ce qu'une mise à jour de micrologiciel?",
'htFWUpdateContent' : "Belkin propose de temps en temps de nouvelles versions pour le système d'exploitation de votre routeur. Ces mises à jour apportent des améliorations et des correctifs à votre routeur.<br><br>REMARQUE : Veuillez sauvegarder vos paramètres actuels avant de passer à une nouvelle version du micrologiciel.",
'htParent' : "Qu’est-ce qu'un filtre de sites Web?",
'htPIC' : "Votre contrôle Internet",
'htPICBlocked' : "Internet est suspendu",
'htPICBlockedContent' : "Veuillez restaurer l'accès lorsque vous serez prêt à rétablir l'accès à Internet à tous les appareils.",
'htPICContent' : "Avec le contrôle Internet, vous pouvez maintenant définir des périodes d'interdiction d'accès à Internet pour chaque appareil.",
'htSaveRestore' : "Que signifie enregistrer, charger ou rétablir les paramètres?",
'htSaveRestoreContent' : "Votre routeur se souvient des paramètres tels que le nom de réseau, le mot de passe, etc. Ces paramètres peuvent être enregistrés (c.-à-d. sauvegardés), puis chargés à nouveau dans votre routeur. Les paramètres du routeur peuvent aussi être ramenés à leurs valeurs initiales par défaut définies en usine.",
'htSaveRestoreContentMobile' : "<br>* Sur les appareils iPhone, iPad et iPod Touch, on ne peut pas enregistrer et charger de fichier de paramètres. Utilisez un autre appareil, comme un ordinateur portable, pour enregistrer et charger un fichier de paramètres.",
'ISP1t003' : "Dites-lui que votre routeur a réussi à obtenir une adresse IP, mais que le service DNS ne fonctionne pas.",
'ISP1t007' : "Le service DNS traduit les noms comme « belkin.com » en adresses numériques (adresses IP) que les ordinateurs utilisent pour naviguer sur Internet. Votre routeur a une adresse IP, ce qui signifie qu'il est connecté à Internet, mais le service DNS ne fonctionne pas. Cela laisse entendre que le problème se situe au niveau de votre FSI.  <span class=\"nub\"></span>",
'ISP2t003' : "Dites-lui que votre routeur a réussi à obtenir une adresse IP et que le service DNS fonctionne, mais que vous ne pouvez pas envoyer de signal Ping.",
'ISP2t007' : "Nous envoyons un signal Ping à d'autre machines sur Internet pour vérifier si nous pouvons communiquer avec elles. Le service DNS traduit les noms comme « belkin.com » en adresses numériques (adresses IP) que les ordinateurs utilisent pour naviguer sur Internet. Votre routeur a une adresse IP, ce qui signifie qu'il est connecté à Internet, et le service DNS de votre FSI fonctionne, mais nous ne pouvons pas envoyer de signal Ping. Cela laisse entendre que le problème se situe au niveau de votre FSI.<span class=\"nub\"></span>",
'ISP3t004' : "Dites-lui que votre nom d'utilisateur et votre mot de passe ont été acceptés, mais que vous n'avez toujours pas de connexion Internet.",
'ISP3t007' : "Nous envoyons un signal Ping à d'autre machines sur Internet pour vérifier si nous pouvons communiquer avec elles. Votre FSI a accepté votre nom d’utilisateur et votre mot de passe, mais comme nous ne pouvons pas envoyer de signal, vous ne pouvez pas naviguer sur Internet. Cela laisse entendre que le problème se situe au niveau de votre FSI.  <span class=\"nub\"></span>",
'ISP4t003' : "Dites-lui que votre nom d'utilisateur et votre mot de passe n'ont pas été acceptés après deux tentatives.",
'ISP4t007' : "Votre connexion Internet exige un nom d'utilisateur et un mot de passe, mais votre FSI n'a pas accepté ceux que vous avez entrés. Il pourra vérifier que vous avez fourni les bons renseignements.  <span class=\"nub\"></span>",
'ISP5t003' : "Dites-lui que vous avez choisi une connexion dynamique mais que vous avez été incapable d'obtenir une adresse IP.",
'ISP5t007' : "Une adresse IP sert à identifier un routeur ou tout autre appareil sur Internet. Comme votre FSI n'a pas attribué d'adresse à votre routeur, vous ne pouvez pas vous connecter. Cela laisse entendre que le problème se situe au niveau de votre FSI, ou que votre connexion n'est pas de type dynamique.  <span class=\"nub\"></span>",
'ISP6t003' : "Dites-lui que vous avez choisi une connexion statique mais que vous êtes incapable de vous connecter à Internet.",
'ISP6t007' : "Nous utilisons une connexion statique lorsque votre FSI vous attribue une ou plusieurs adresses IP.  <span class=\"nub\"></span>",
'ISP7t003' : "Dites-lui que vos paramètres VPI/VCI ne fonctionnent pas et que vous aimeriez qu'il vous donne les paramètres appropriés.",
'ISP7t007' : "Les paramètres VPI et VCI indiquent à votre routeur quel chemin utiliser pour communiquer avec votre FSI. Nous avons été incapables de détecter les bons paramètres. <span class=\"nub\"></span>",
'Network24Passkey' : "{REPLACE WITH 2.4 PASSWORD}",
'Network24SSID' : "{REPLACE WITH 2.4 SSID}",
'p100t002' : "Connectons-nous à Internet.",
'p100t003' : "Vous êtes connecté à votre nouveau routeur; nous allons donc le mettre en contact avec votre fournisseur de services Internet (FSI).",
'p100t004' : "Connectons-nous à Internet.",
'p100t005' : "Vous êtes connecté à votre nouveau routeur; nous allons donc le mettre en contact avec votre fournisseur de services Internet (FSI).",
'p100t007' : "Détecter ma connexion",
'p100t008' : "Si vous n'êtes pas certain de votre type de connexion, vous pouvez la <a href=\"700-SelectConnection.htm\" id=\"p100a009\" tid=\"p100t009\">configurer manuellement &raquo;</a>, ou aller directement au <a href=\"000-Dashboard.htm\" id=\"p100a010\" tid=\"p100t010\">tableau de bord &raquo;</a>.",
'p100t009' : "configurer manuellement &raquo;",
'p100t010' : "tableau de bord &raquo;",
'p100t013' : "Pour l'instant, nous affichons les pages in&nbsp;",
'p100t024' : "Une configuration presque automatique",
'p100t025' : "Tout d'abord, nous allons vérifier automatiquement votre câblage et détecter le type de connexion établie avec votre fournisseur de services Internet (FSI.) Vous ne devriez pas avoir grand-chose à faire. Ensuite, nous nous assurerons que le logiciel de votre routeur est à jour.<span class=\"nub\"></span>",
'p1010MRt001' : "Nous avons de la difficulté à communiquer avec votre modem.",
'p1010MRt002' : "Nous croyons qu'il y a un problème de câblage.",
'p1010MRt003' : "Voici ce que vous pouvez faire pour résoudre le problème :",
'p1010MRt004' : "Assurez-vous que votre modem-routeur est branché sur la prise téléphonique donnant accès à Internet. Il devrait y avoir un câble réseau reliant le port ADSL sur votre modem-routeur (port gris dans le haut) à la prise téléphonique.",
'p1010MRt005' : "Assurez-vous que votre modem est allumé. L'adaptateur de courant doit être branché aux deux extrémités, et un ou plusieurs voyants devraient être allumés sur le modem.",
'p1010MRt006' : "Votre modem devrait être relié au port jaune de votre routeur au moyen d'un câble réseau. Ce câble achemine le signal de votre modem jusqu'au routeur. Sans lui, vous ne pouvez pas vous connecter pour aller en ligne.",
'p1010MRt007' : "Si tout est correct de ce côté, vous pouvez essayer de redémarrer votre modem en le débranchant du bloc d’alimentation, puis en le rebranchant quinze secondes plus tard. Si votre modem a une batterie, vous devrez peut-être le réinitialiser.",
'p1010MRt008' : "Voici à quoi ces connexions devraient ressembler :",
'p1010MRt009' : "Nous continuerons à surveiller une connexion pendant que vous faites vos vérifications.",
'p1010MRt010' : "Le problème de câblage le plus courant se situe entre le modem et le routeur. Il est important de vérifier les deux extrémités du câble. Une extrémité doit être branchée sur le port jaune de votre nouveau routeur et l'autre, sur un port semblable sur votre modem. Diverses étiquettes identifient les différents ports sur le modem, à savoir \"data\", \"LAN\", \"network\" ou \"Ethernet\".  <span class=\"nub\"></span>",
'p1020t001' : "Nous avons de la difficulté à communiquer avec votre fournisseur de services Internet.",
'p1020t002' : "Veuillez redémarrer votre modem-routeur.",
'p1020t003' : "Nous n'obtenons pas de connexion Internet; essayons  de redémarrer votre modem-routeur.",
'p1020t004' : "Éteignez votre modem-routeur. Habituellement, vous n'avez qu'à appuyer sur l'interrupteur sur le modem-routeur ou à débrancher le bloc d'alimentation.",
'p1020t005' : "Attendez environ 15 secondes.",
'p1020t006' : "Rallumez votre modem-routeur.",
'p1020t007' : "Quelques secondes plus tard, les voyants s'allumeront et il devrait établit le contact avec votre FSI.",
'p1020t008' : "Si ce problème persiste, veuillez communiquer avec votre FSI pour trouver une solution de dépannage.",
'p1020t009' : "Nous surveillerons votre modem-routeur pendant qu'il s'éteint et se rallume, puis nous continuerons automatiquement.",
'p1020t010' : "Pourquoi redémarrer le modem?",
'p1020t011' : "Certains modems doivent redémarrer avant de pouvoir communiquer avec un nouveau routeur ou un ordinateur inconnu. Et si votre fournisseur de services Internet éprouve quelque difficulté, le modem pourrait subitement rompre la connexion. Nous pouvons voir votre modem mais non la connexion Internet; un redémarrage rapide devrait très probablement résoudre le problème.<span class=\"nub\"></span>",
'p1100t001' : "Une mise à jour du micrologiciel est disponible!",
'p1100t002' : "Nous vous recommandons d'installer la plus récente version du micrologiciel sur votre routeur pour vous assurer que tout fonctionne correctement.",
'p1100t003' : "Montrez-moi les nouveautés",
'p1201t001' : "Verrouillez le tableau de bord à l'aide d'un mot de passe.",
'p1201t002' : "Veuillez entrer un mot de passe pour verrouiller le tableau de bord",
'p1201t003' : "Veuillez entrer un mot de passe.",
'gtSetPassword' : "Définir un mot de passe",
'p1201t005' : "Annuler",
'p1210t001' : "Le tableau de bord est verrouillé.",
'p1210t002' : "Veuillez taper votre mot de passe:",
'p1210t003' : "Veuillez taper votre mot de passe.",
'p1210t004' : "Votre mot de passe est incorrect.",
'p1210t005' : "Laissez-moi entrer!",
'p1300t001' : "Un peu plus d'ardeur!",
'p1300t002' : "Vous pouvez obtenir une meilleure performance de votre connexion Internet en configurant Intellistream. Cela exige l'exécution d'un test de vitesse.",
'p1300t003' : "Configurer Intellistream",
'p1300t004' : "Peut-être plus tard",
'p1302t001' : "Votre micrologiciel est à jour.",
'p1316t001' : "L'installation de la version à jour du micrologiciel a échoué - veuillez essayer à nouveau en cliquant sur \"Vérifier nouvelle version de micrologiciel\".",
'p1318t001' : "La version ou le type de fichier de mise à niveau ne convient pas à cet appareil. La mise à niveau à échoué. Veuillez obtenir le bon fichier et essayer de nouveau",
'p1333t001' : "Votre micrologiciel a été mis à jour correctement.",
'p1400t001' : "Profitez pleinement de votre port USB.",
'p1400t002' : "Vous pouvez installer certains logiciels facultatifs qui vous permettront de tirer le maximum du port USB de votre routeur.",
'p1400t003' : "Montrez-moi les logiciels facultatifs",
'p1500t001' : "Vous êtes ici.",
'p1500t002' : "Il semble que vous soyez dans le fuseau horaire <span tid=\"gtCurrTimezone\">Europe/Helsinki {REPLACE THIS SPAN WITH DETECTED Belkin TZ ID description}</span>. Est-ce exact?",
'p1500t003' : "C'est exact",
'p1500t004' : "Laissez-moi choisir",
'p200t001' : "Établissement de connexion en cours...",
'p200t002' : " Nous vérifions les connexions physiques de votre routeur.",
'p202At001' : "Fonctionne toujours...",
'p202At002' : " Nous sommes en train de détecter le type de connexion de votre fournisseur de services Internet. Cette opération pourrait prendre quelques minutes.",
'p202Bt001' : "Fonctionne toujours...",
'p202Bt002' : " Nous vérifions si votre fournisseur de services Internet exige un mot de passe. Cette opération pourrait prendre quelques minutes.",
'p202Ct001' : "Fonctionne toujours...",
'p202Ct002' : " Nous testons maintenant la connexion.",
'p202t001' : "Établissement de connexion en cours...",
'p202t002' : " Nous sommes en train de détecter le type de connexion de votre fournisseur de services Internet.",
'p208t001' : "Avez-vous les numéros VPI/VCI sous la main?",
'p208t002' : "Afin de pouvoir vous connecter, vous devez entrer les numéros VPI et VCI. Ils indiquent la voie de communication que votre FSI veut que vous utilisiez.",
'p208t003' : "Votre FSI devrait vous avoir communiqué ces paramètres. Si vous ne les trouvez pas, veuillez appeler votre FSI.",
'p208t006' : "0",
'p208t007' : "0",
'p208t009' : "Essayer ma connexion",
'p208t011' : "VPI et VCI",
'p208t012' : "L'identificateur de conduit virtuel (VPI) et l'identificateur de circuit virtuel (VCI) indiquent à votre routeur le trajet à emprunter pour communiquer avec votre FSI. Il y a un certain nombre de paramètres courants que nous essayons automatiquement avant de solliciter votre aide.<span class=\"nub\"></span>",
'p209t001' : "Il semble y avoir une anomalie au niveau de ces paramètres.",
'p209t002' : "Votre FSI n'a pas aimé ces numéros VPI/VCI. Encore une fois?",
'p210CXt001' : "Vous avez une connexion de type PPPoE.",
'p210CXt002' : "Vous avez besoin d'un nom d'utilisateur et d'un mot de passe pour vous connecter à Internet.",
'p210CXt004' : "<strong>Votre fournisseur de services Internet devrait vous avoir communiqué ces renseignements. Si vous ne les trouvez pas, veuillez communiquer avec votre FSI.</strong>",
'p210CXt006' : "0",
'p210CXt007' : "0",
'p210CXt016' : "Essayer ma connexion",
'p210CXt017' : "PPPoE",
'p210CXt018' : "Le protocole PPPoE crée une connexion sécurisée entre votre routeur et votre FSI. C'est ce genre de connexion qu'utilisent habituellement les compagnies de téléphone.<span class=\"nub\"></span>",
'p210DXt001' : "Vous avez une connexion de type PPPoA.",
'p210DXt002' : "Vous avez besoin d'un nom d'utilisateur et d'un mot de passe pour vous connecter à Internet.",
'p210DXt004' : "<strong>Votre fournisseur de services Internet devrait vous avoir communiqué ces renseignements. Si vous ne les trouvez pas, veuillez communiquer avec votre FSI.</strong>",
'p210DXt006' : "0",
'p210DXt007' : "0",
'p210DXt016' : "Essayer ma connexion",
'p210DXt017' : "PPPoA",
'p210DXt018' : "Le protocole PPPoA crée une connexion sécurisée entre votre routeur et votre FSI. C'est ce genre de connexion qu'utilisent habituellement les compagnies de téléphone.<span class=\"nub\"></span>",
'p210t001' : "Vous avez une connexion DSL de type PPPoE.",
'p210t002' : "Vous avez besoin d'un nom d'utilisateur et d'un mot de passe pour vous connecter à Internet.",
'p210t003' : "<strong>Votre fournisseur de services Internet (FSI) devrait vous avoir communiqué ces renseignements. Si vous ne les trouvez pas, veuillez communiquer avec votre FSI.</strong>",
'p210t005' : "Nom d'utilisateur FSI :",
'p210t009' : "Essayer ma connexion",
'p210t010' : "PPPoE",
'p210t011' : "Le protocole PPPoE crée une connexion sécurisée entre votre routeur et votre FSI. C'est ce genre de connexion qu'utilisent habituellement les compagnies de téléphone.<span class=\"nub\"></span>",
'p211t001' : "Établissement de connexion en cours...",
'p211t002' : " Nous essayons de nous connecter à votre fournisseur de services Internet. Cette opération pourrait prendre jusqu'à deux minutes ou même davantage.",
'p212DXt001' : "Il semble y avoir une anomalie au niveau de vos paramètres PPPoA.",
'p212DXt002' : "Votre nom d’utilisateur ou votre mot de passe, ou les deux, est/sont incorrect(s). Veuillez essayer de nouveau. Si vous ne réussissez pas à obtenir ces renseignements, communiquez avec votre FSI.",
'p212t001' : "Il semble y avoir une anomalie au niveau de vos paramètres PPPoE.",
'p212t002' : "Votre nom d’utilisateur ou votre mot de passe, ou les deux, est/sont incorrect(s). Veuillez essayer de nouveau. Si vous ne réussissez pas à obtenir ces renseignements, communiquez avec votre FSI.",
'p220t002' : "Pour terminer la connexion et accéder à Internet, veuillez entrer un nom d'utilisateur, un mot de passe et une adresse de service.",
'p220t003' : "<strong>Votre fournisseur de services Internet devrait vous avoir communiqué ces renseignements. Si vous ne les trouvez pas, veuillez communiquer avec votre FSI.</strong>",
'p220t006' : "Nom d'utilisateur FSI :",
'p220t007' : "Adresse de service :",
'p220t010' : "Essayer ma connexion",
'p220t013' : "Vous avez une connexion de type L2TP ou PPTP.",
'p220t014' : "Ou choisir manuellement ma connexion &raquo;",
'p220t015' : "L2TP et PPTP",
'p220t016' : "Les deux protocoles L2TP (protocole de tunnellisation de couche 2) et PPTP (protocole de tunnellisation point à point) créent une connexion privée et cryptée entre vous et votre fournisseur de services Internet.<span class=\"nub\"></span>",
'p221t001' : "Établissement de connexion en cours...",
'p221t002' : " Nous essayons de nous connecter à votre fournisseur de services Internet. Cette opération peut prendre jusqu’à 2 minutes.",
'p222t002' : "Votre nom d’utilisateur ou votre mot de passe, ou les deux, est/sont incorrect(s). Veuillez essayer de nouveau. Si vous ne réussissez pas à obtenir ces renseignements, communiquez avec votre FSI.",
'p222t004' : "Il semble y avoir une anomalie au niveau de vos paramètres.",
'p2300t001' : "Votre version de micrologiciel installée :",
'p2300t002' : "Mettre à jour le micrologiciel à partir du fichier sauvegardé localement :",
'p2300t006' : "Êtes-vous certain de vouloir installer {{file}}?",
'p2300t010' : "Vérifier nouvelle version de micrologiciel",
'p2400t006' : "Vos paramètres actuels seront remplacés. Êtes-vous certain de vouloir charger {{file}}?",
'p2410t001' : "Êtes-vous certain de vouloir rétablir les paramètres par défaut du fabricant?",
'p2410t002' : "En cliquant sur 'Oui', vous effacerez les paramètres de votre routeur tels que le nom et le mot de passe, et les remplacerez par les paramètres par défaut du fabricant.",
'p300t005' : "Vous êtes maintenant en ligne.",
'p310t001' : "Une mise à jour est disponible!",
'p310t001x' : "Cette mise à jour (v2.1.0c) comprend ceci :",
'p310t002' : "Pour l'installer, veuillez lire et accepter le contrat de licence d'utilisation.",
'p310t003' : "Licence d'utilisation",
'p310t004' : "J'accepte la licence d'utilisation.",
'p310t005' : "Installer la mise à jour",
'p310t006' : "Qu'est-ce qu'un micrologiciel?",
'p310t007' : "C'est le logiciel qui fait fonctionner votre routeur. Comme nous mettons à jour le micrologiciel afin d'améliorer la performance de votre routeur, il est bon que vous ayez la version la plus récente.  <span class=\"nub\"></span>",
'p315t001' : "Téléchargement du nouveau micrologiciel en cours.",
'p315t002' : "Progression du téléchargement :",
'p315t003' : "Qu'est-ce qu'un micrologiciel?",
'p315t004' : "C'est le logiciel qui fait fonctionner votre routeur. Comme nous mettons à jour le micrologiciel afin d'améliorer la performance de votre routeur, il est bon que vous ayez la version la plus récente.  <span class=\"nub\"></span>",
'p320t001' : "Installation du nouveau micrologiciel.",
'p320t002' : "Une fois que le nouveau micrologiciel aura été appliqué, nous redémarrerons votre routeur pour terminer l'installation.",
'p320t004' : "Qu'est-ce qu'un micrologiciel?",
'p320t005' : "C'est le logiciel qui fait fonctionner votre routeur. Comme nous mettons à jour le micrologiciel afin d'améliorer la performance de votre routeur, il est bon que vous ayez la version la plus récente.  <span class=\"nub\"></span>",
'p320t006' : "Cette opération prendra environ trois minutes. Progression de la mise à jour :",
'p320t010' : "Une fois que le nouveau micrologiciel aura été appliqué, nous redémarrerons votre modem pour terminer l'installation.",
'p321t001' : "Redémarrage de votre routeur",
'p321t002' : "Redémarrage de votre modem",
'p321t003' : "Maintenant que le micrologiciel a été installé, nous devons redémarrer votre routeur pour l'activer.",
'p321t004' : "Redémarrage en cours :",
'p321t005' : "Mises à jour du micrologiciel",
'p321t006' : "Votre routeur utilise ce micrologiciel pour mettre en place les protocoles réseau et de sécurité. Comme les mises à jour rehaussent la fiabilité et la fonctionnalité, il est sage de vous assurer d'avoir la version la plus récente.<span class=\"nub\"></span>",
'p321t010' : "Maintenant que le micrologiciel a été installé, nous devons redémarrer votre modem pour l'activer.",
'p330t001' : "Vérification de la vitesse de votre connexion...",
'p330t002' : "Un  bref test de vitesse permettra à votre routeur d'optimiser votre connexion Internet. Cette opération prendra une minute ou deux.",
'p331t001' : "Votre micrologiciel est à jour.",
'p332t001' : "Nous essaierons à nouveau de mettre à jour votre micrologiciel plus tard.",
'p333t001' : "Votre micrologiciel a été mis à jour.",
'p334t001' : "Résultats du test de vitesse.",
'p334t002' : "Voici ce que nous avons appris :",
'p334t003' : "Vitesse de téléchargement en aval",
'p334t004' : "Mbit/s",
'p334t005' : "Vitesse de téléchargement en amont",
'p334t006' : "Mbit/s",
'p340t002' : " Nous rétablissons la connexion avec votre routeur pour pouvoir continuer.",
'p341t001' : "Veuillez redémarrer votre routeur.",
'p341t002' : "Nous avons du mal à nous reconnecter à votre routeur. Un redémarrage rapide devrait aider.",
'p341t003' : "Débranchez le bloc d'alimentation de votre routeur, attendez quelques secondes, puis rebranchez-le. Dès qu'un voyant bleu fixe apparaîtra sur votre routeur, nous serons prêts à établir la connexion.",
'p341t003w' : "Débranchez votre routeur, attendez quelques secondes, puis rebranchez-le. Dès qu'un voyant bleu fixe apparaîtra sur votre routeur, nous serons prêts à établir la connexion.",
'p341t004' : " Nous surveillerons votre routeur pendant que vous faites cette opération.",
'p342t001' : " Nous rétablissons la connexion avec votre routeur pour pouvoir continuer.",
'p342t002' : "Vous devrez peut-être sélectionner à nouveau votre réseau <span tid=\"Network24SSID\">({REPLACE WITH 2.4 SSID})</span> dans la liste des réseaux sans fil pour nous aider dans cette opération.",
'p343t002' : " Nous rétablissons la connexion avec votre routeur pour continuer.",
'p343t003' : "Vous devrez peut-être sélectionner à nouveau votre réseau sans fil <span tid=\"Network24SSID\">({REPLACE WITH 2.4 SSID})</span> pour continuer.",
'p344t001' : "Veuillez redémarrer votre routeur.",
'p344t002' : "Nous avons du mal à nous reconnecter à votre routeur. Un redémarrage rapide devrait aider.",
'p344t003' : "Débranchez le bloc d'alimentation de votre routeur, attendez 15 secondes, puis rebranchez-le. Dès qu'un voyant bleu fixe apparaîtra sur votre routeur, nous rétablirons la connexion.",
'p344t003w' : "Débranchez votre routeur, attendez 15 secondes, puis rebranchez-le. Dès qu'un voyant bleu fixe apparaîtra sur votre routeur, nous rétablirons la connexion.",
'p344t004' : " Nous surveillerons votre routeur pendant que vous faites cette opération.",
'p400f010' : "WPA2",
'p400f011' : "WPA/WPA2",
'p400f012' : "WEP",
'p400f013' : "Ouvrir",
'p400t001' : "Tout connecter plus rapidement.",
'p400t002' : "Le fait d'attribuer vos anciens nom de réseau et mot de passe à votre nouveau routeur permettra à tous vos appareils de se connecter immédiatement.",
'p400t004' : "Nom du réseau :",
'p400t008' : "Type de sécurisé : <em class=\"hide-on-phones\">(WPA2 est le plus sécuritaire.)</em>",
'p400t014' : "Votre bande passante de 5 GHz portera le même nom, mais le suffixe \".media\" sera ajouté.",
'p400t015' : "Vous pourrez le changer plus tard si vous voulez.",
'p400t017' : "Sauvegarder et continuer",
'p400t018' : "Pourquoi devrais-je renommer mon réseau?",
'p400t019' : "Tout appareil sans fil qui avait déjà été connecté à votre ancien routeur se connectera automatiquement à votre nouveau routeur si vous utilisez vos mêmes nom de réseau et mot de passe. De plus, lorsque vous cherchez votre réseau sur d'autres appareils, il sera plus facile de le trouver si vous avez utilisé le même nom.<span class=\"nub\"></span>",
'p450a009' : "Génial, quoi d'autre maintenant?",
'p450t001' : "Vos modifications ont été sauvegardées.",
'p450t002' : "Voici vos nouveaux nom de réseau et mot de passe",
'p450t003' : "Si vous avez utilisé vos anciens nom de réseau et mot de passe, vos appareils sans fil existants devraient se reconnecter maintenant.",
'p450t004' : "Nom:",
'p450t008' : "Inscrivez votre nouveau nom de réseau sur la fiche papier prévue à cette fin sous votre routeur. De cette façon, vous l'aurez toujours à portée de main.",
'p450t011' : "Si vous avez utilisé vos anciens nom de réseau et mot de passe, la plupart de vos appareils sans fil se reconnecteront automatiquement la prochaine fois que vous les démarrerez. Pour les autres, vous devrez à nouveau sélectionner votre réseau et après, ils se connecteront automatiquement. Votre Guide d'installation rapide contient des instructions pour les environnements Windows, OS X, iOS et Android.  <span class=\"nub\"></span>",
'p451a009' : "Génial, quoi d'autre maintenant?",
'p451t001' : "Aucune modification.",
'p451t002' : "Vos nom de réseau et mot de passe n'ont pas été modifiés.",
'p451t003' : "Vous devrez indiquer vos nouveaux nom de réseau et mot de passe à chacun de vos appareils sans fil :",
'p451t004' : "Nom:",
'p451t008' : "Inscrivez votre nouveau nom de réseau sur la fiche papier prévue à cette fin sous votre routeur. De cette façon, vous l'aurez toujours à portée de main.",
'p451t011' : "Chacun de vos appareils sans fil devra être informé de votre nouveau réseau. Votre Guide d'installation rapide contient des instructions pour les environnements Windows, OS X, iOS et Android.  <span class=\"nub\"></span>",
'p500t001' : "Enregistrer votre routeur.",
'p500t002' : "L'enregistrement est très rapide et vous fera gagner beaucoup de temps si vous deviez avoir besoin de soutien technique.",
'p500t004' : "Pourquoi l'enregistrer?",
'p500t005' : "En savoir un peu plus à votre sujet nous permettra de vous aider plus rapidement en cas de besoin.<span class=\"nub\"></span>",
'p500tCancel' : "Enregistrer plus tard &raquo;",
'p500tSubmit' : "Enregistrer maintenant",
'p600t001' : "Consultez la page des logiciels facultatifs de votre routeur pour afficher la liste des logiciels disponibles pour vos autres ordinateurs et appareils mobiles.",
'p600t002' : "Merci, amenez-moi au tableau de bord",
'p600t003' : "Logiciels facultatifs",
'p600t004' : "Ces outils logiciels vous permettront de profiter des fonctions évoluées qu'offre votre routeur. Vous pouvez télécharger des logiciels pour les environnements Apple iOS, Android, Windows et OS X.  <span class=\"nub\"></span>",
'p601t001' : "<strong>Merci de l'avoir enregistré!</strong>",
'p700MRt001' : "Nous avons été incapable de configurer automatiquement votre connexion. Donnez-nous quelques précisions supplémentaires qui nous aideront à vous connecter.",
'p700MRt002' : "Quel type de connexion configurez-vous?",
'p700MRt003' : "J'ai une :",
'p700MRt005' : "Connexion dynamique  (pont 1483)",
'p700MRt007' : "Connexion PPPoE",
'p700MRt009' : "Connexion PPPoA",
'p700MRt011' : "Connexion statique (IPoA)",
'p700MRt014' : "Je ne suis pas certain de mon type de connexion :",
'p700MRt016' : "Essayez à nouveau automatiquement",
'p700MRt017' : "Types de connexion",
'p700MRt018' : "<span class=\"black\">Dynamique —</span> Ces connexions sont de plus en plus fréquentes chez certains fournisseurs de connexions DSL.",
'p700MRt019' : "<span class=\"black\">PPPoE et PPPoA —</span> Ces connexions nécessitent un nom d'utilisateur et un mot de passe fournis par le FSI.",
'p700MRt021' : "<span class=\"black\">Statique —</span> Ces connexions nécessitent des paramètres personnalisés propres à chaque utilisateur. <span class=\"nub\"></span>",
'p700t001' : "Nous avons été incapable de configurer automatiquement votre connexion. Donnez-nous quelques précisions supplémentaires qui nous aideront à vous connecter.",
'p700t002' : "Quel type de connexion configurez-vous?",
'p700t003' : "J'ai une :",
'p700t005' : "Connexion dynamique",
'p700t007' : "Connexion PPPoE",
'p700t008' : "Connexion L2TP ou PPTP",
'p700t013' : "Connexion statique",
'p700t014' : 'Je ne suis pas certain du type de connexion :',
'p700t914' : "Si vous ne parvenez toujours  pas à déterminer votre type de connexion, communiquez avec votre FSI.",
'p700t016' : "Essayez à nouveau automatiquement",
'p700t017' : "Types de connexion",
'p700t018' : "<span class=\"black\">Dynamique —</span> Fréquent chez la plupart des fournisseurs de services Internet par câble et fibre optique et certains fournisseurs de connexions DSL.",
'p700t019' : "<span class=\"black\">PPPoE et PPTP —</span> Nécessitent un nom d'utilisateur et un mot de passe fournis par le FSI.",
'p700t021' : "<span class=\"black\">Statique —</span> Nécessite des paramètres personnalisés propres à chaque utilisateur. <span class=\"nub\"></span>",
'p701MRt001' : "Vous avez choisi une connexion dynamique.",
'p701MRt002' : "Il se pourrait que votre fournisseur de services Internet vous ait donné d'autres paramètres de configuration.",
'p701MRt004' : "Paramètres dynamiques :",
'p701MRt006' : "0",
'p701MRt007' : "0",
'p701MRt016' : "Essayer ma connexion",
'p701MRt017' : "Connexions dynamiques",
'p701MRt018' : "Une connexion dynamique est automatiquement configurée une fois que la communication avec le FSI a été établie.<span class=\"nub\"></span>",
'p701t001' : "Établissement d'une connexion dynamique...",
'p701t002' : " Nous demandons une connexion à votre fournisseur de services Internet.",
'p702t001' : "Redémarrage du modem…",
'p702t002' : "Nous sommes prêts à essayer un type de connexion différent en redémarrant votre modem.",
'p710MRt001' : "Vous avez choisi une connexion statique.",
'p710MRt002' : "Votre fournisseur de services Internet (FSI) devrait vous avoir communiqué les paramètres d'une configuration statique. Si vous ne les trouvez pas, communiquez avec votre FSI.",
'p710MRt004' : "Paramètres de connexion statique :",
'p710MRt005' : "Adresse IP :",
'p710MRt006' : "0",
'p710MRt007' : "Masque de sous-réseau :",
'p710MRt008' : "0",
'p710MRt009' : "Passerelle par défaut :",
'p710MRt010' : "0",
'p710MRt011' : "Serveur DNS (principal) :",
'p710MRt012' : "0",
'p710MRt013' : "Serveur DNS (secondaire) :",
'p710MRt014' : "0",
'p710MRt015' : "Remarque : Les FSI n'exigent pas tous un serveur DNS secondaire.",
'p710MRt016' : "Essayer ma connexion statique",
'p710MRt017' : "Connexion statique",
'p710MRt018' : "Une connexion statique se configure manuellement. Elle fournit une adresse constante à votre routeur à laquelle vous pouvez plus facilement avoir accès lorsque vous êtes à l'extérieur de votre réseau. Les connexions statiques ne sont pas tellement utilisées pour le service Internet résidentiel et généralement, elles coûtent plus cher. <span class=\"nub\"></span>",
'p710t001' : "Vous avez choisi une connexion statique.",
'p710t002' : "Votre fournisseur de services Internet (FSI) devrait vous avoir communiqué les paramètres d'une configuration statique. Si vous ne les trouvez pas, veuillez communiquer avec votre FSI.",
'p710t004' : "Paramètres de connexion statique :",
'p710t005' : "Adresse IP :",
'p710t006' : "0",
'p710t007' : "Masque de sous-réseau :",
'p710t008' : "0",
'p710t009' : "Passerelle par défaut :",
'p710t010' : "0",
'p710t011' : "Serveur DNS (principal) :",
'p710t012' : "0",
'p710t013' : "Serveur DNS (secondaire) :",
'p710t014' : "0",
'p710t015' : "Remarque : Les FSI n'exigent pas tous un serveur DNS secondaire.",
'p710t016' : "Essayer ma connexion statique",
'p710t017' : "Connexion statique",
'p710t018' : "Une connexion statique se configure manuellement. Elle fournit une adresse constante à votre routeur à laquelle vous pouvez plus facilement avoir accès lorsque vous êtes à l'extérieur de votre réseau. Les connexions statiques ne sont pas tellement utilisées pour le service Internet résidentiel et généralement, elles coûtent plus cher.  <span class=\"nub\"></span>",
'p711t001' : "Établissement d'une connexion statique...",
'p711t002' : " Nous demandons une connexion à votre fournisseur de services Internet.",
'p712t001' : "Il semble y avoir une anomalie au niveau de vos paramètres de connexion statique.",
'p712t002' : "Une des adresses ou un des éléments que vous avez entrés est incorrect, mais nous ne savons pas lequel.",
'p800t001' : "Application de vos modifications en cours.",
'p800t002' : "Nous appliquons vos modifications et redémarrons votre routeur pour les activer.",
'p801t002' : " Nous attendons que le routeur se reconnecte. Une fois que cela sera fait, nous continuerons.",
'p802t002' : "Nous avons besoin d'une connexion sans fil au routeur pour continuer.",
'p802t004' : "Passez au menu de réseau sans fil de votre appareil",
'p802t005' : "Sélectionnez votre nouveau réseau appelé <strong tid=\"Network24SSID\">{REPLACE WITH 2.4 SSID}</strong>",
'p802t007' : "Entrez votre mot de passe <strong tid=\"Network24Passkey\">{REPLACE WITH 2.4 PASSWORD}</strong>",
'p802t009' : "Lorsque vous serez connecté au routeur, nous continuerons.",
'p802t010' : " Nous attendons que le routeur se reconnecte.",
'p803t002' : "Nous avons besoin d'une connexion sans fil au routeur pour continuer.",
'p803t003' : "Comme vous avez modifié votre nom de réseau, vous devrez à nouveau sélectionner votre réseau sans fil :",
'p803t004' : "Passez au menu de réseau sans fil de votre appareil",
'p803t005' : "Sélectionnez votre nouveau réseau appelé <strong tid=\"Network24SSID\">{REPLACE WITH 2.4 SSID}</strong>",
'p803t007' : "Entrez votre mot de passe <strong tid=\"Network24Passkey\">{REPLACE WITH 2.4 PASSWORD}</strong>",
'p803t009' : "Lorsque vous serez connecté au routeur, nous continuerons.",
'p803t010' : " Nous attendons que vous vous reconnectiez.",
'p804t001' : "Votre appareil ne s'est pas reconnecté.",
'p804t002' : "Cela arrive parfois et il est très facile de corriger la situation.",
'p804t025' : "Si vous avez un appareil avec accès à Internet, rendez-vous à l'adresse URL pour obtenir des renseignements utiles : <strong>http://belk.in/PMuxOg</strong>",
'p804t026' : "Si cela ne donne aucun résultat, reliez directement votre modem à l'ordinateur en utilisant le câble Ethernet.",
'p804t027' : " Dès que nous verrons une connexion, nous continuerons automatiquement.",
'p900t001' : "Vous devez redémarrer votre modem.",
'p900t002' : "Votre modem ne répond pas.",
'p900t003' : "Veuillez effectuer les étapes suivantes pour redémarrer votre modem :",
'p900t004' : "Éteignez votre modem. Pour ce faire, appuyez sur l'interrupteur sur le modem ou débranchez tout simplement le bloc d'alimentation. Certains modems ont une batterie et dans ce cas, vous devez repérer le bouton de réinitialisation.",
'p900t005' : "Attendez environ 15 secondes.",
'p900t006' : "Rallumez votre modem.",
'p900t007' : "Après quelques secondes, les témoins lumineux s'allumeront et il sera prêt à communiquer avec le routeur.",
'p900t008' : "Nous surveillerons votre modem pendant qu'il s'éteint et se rallume, puis nous continuerons automatiquement.",
'p900t009' : "Pourquoi redémarrer le modem?",
'p900t010' : "Certains modems doivent redémarrer pour pouvoir communiquer avec un nouveau routeur ou un ordinateur inconnu. Nous pouvons voir votre modem, mais comme il ne communique pas avec votre nouveau routeur, un redémarrage rapide devrait régler le problème.<span class=\"nub\"></span>",
'p901t001' : "Veuillez redémarrer votre modem maintenant...",
'p901t002' : " Nous surveillerons votre modem pendant qu'il s'éteint et se rallume.",
'p902t001' : "Votre modem s'éteint, c'est bon signe…",
'p902t002' : " Nous attendons qu'il se rallume.",
'p903t001' : "Besoin de plus de temps?",
'p903t002' : " Nous attendons que votre modem redémarre. Avez-vous besoin de plus de temps?",
'p903t005' : "Habituellement, il suffit d'appuyer sur l'interrupteur sur le modem ou de débrancher le bloc d'alimentation. Cependant, certains modems ont une batterie et dans ce cas, vous devez repérer le bouton de réinitialisation.",
'p904t001' : "Besoin de plus de temps?",
'p904t002' : " Nous attendons que votre modem redémarre. Avez-vous besoin de plus de temps?",
'p905t001' : "Nous voyons à nouveau votre modem…",
'p905t002' : " Nous attendons qu'il se synchronise avec votre FSI. Cette opération devrait prendre une minute ou deux.",
'p950IMRt001' : "Nous avons été incapables de détecter une connexion jusqu'à votre ligne ADSL.",
'p950IMRt002' : "Vérifiez qu'un câble réseau relie votre prise murale ADSL au port gris sur votre routeur.",
'p950IMRt004' : "Nous croyons qu'il y a un problème de câblage.",
'p950IMRt005' : "En effet, un câble réseau devrait relier le port gris sur votre routeur à votre prise de téléphone/ADSL. Ce câble achemine le signal de votre FSI jusqu'au routeur– sans lui, vous ne pouvez pas établir de connexion Internet. Vérifiez que ce câble est connecté correctement.",
'p950IMRt006' : "Voici à quoi cette connexion devrait ressembler :",
'p950IMRt007' : "Un câble réseau devrait relier votre prise murale ADSL au bloc d'alimentation de votre routeur (lequel a un modem intégré). Ce câble achemine le signal de votre FSI jusqu'au routeur– sans lui, vous ne pouvez pas établir de connexion Internet.",
'p950IMRt009' : "Voici à quoi cette connexion devrait ressembler :",
'p950IMRt010' : "Nous continuerons à surveiller une connexion pendant que vous faites vos vérifications.",
'p950IMRt014' : "Câblage",
'p950IMRt015' : "Le problème de câblage le plus courant se situe entre la prise murale et le routeur. Il est important de vérifier les deux extrémités du câble. Une extrémité doit être branchée sur le port gris de votre nouveau routeur et l'autre, sur votre prise ADSL. Dans certains cas, un filtre entre la prise murale et le câble pourrait être nécessaire. <span class=\"nub\"></span>",
'p950PMt001' : "Nous avons été incapables de détecter une connexion jusqu'à votre ligne ADSL.",
'p950PMt002' : "Assurez-vous qu'il y a une connexion réseau entre votre routeur et son bloc d’alimentation (lequel a un modem intégré).",
'p950PMt004' : "Nous croyons qu'il y a un problème de câblage.",
'p950PMt005' : " Vérifiez que le câble réseau qui se sépare du cordon d'alimentation du modem est branché sur le port WAN (jaune) sur votre routeur. Sans cette connexion réseau, vous ne pouvez pas vous connecter à Internet.",
'p950PMt009' : "Voici à quoi cette connexion devrait ressembler :",
'p950PMt010' : "Nous continuerons à surveiller une connexion pendant que vous faites vos vérifications.",
'p950PMt011' : "Câblage",
'p950PMt012' : "Le problème de câblage le plus courant se situe entre la prise murale et le modem. Il est important de vérifier les deux extrémités du câble. Une extrémité doit être branchée sur le bloc d'alimentation de votre nouveau routeur et l'autre, sur votre prise ADSL. Dans certains cas, un filtre entre la prise murale et le câble pourrait être nécessaire. <span class=\"nub\"></span>",
'p950t001' : "Nous n'avons pas détecté de connexion avec votre modem.",
'p950t002' : "Assurez-vous que votre modem est branché et allumé.",
'p950t003' : "Assurez-vous que votre modem est relié à votre routeur au moyen d'un câble Ethernet.",
'p950t004' : "Nous croyons qu'il y a un problème de câblage.",
'p950t005' : "Votre modem devrait être allumé, avec un câble Ethernet le reliant au port jaune sur votre routeur.",
'p950t006' : "Faites les vérifications suivantes :",
'p950t007' : "Assurez-vous que votre modem est allumé. Vérifiez que l'adaptateur d'alimentation est branché aux deux extrémités et qu'un ou plusieurs témoins lumineux sont allumés sur le modem.",
'p950t008' : "Un câble Ethernet devrait relier votre modem au port jaune de votre routeur. Ce câble achemine le signal de votre modem jusqu'au routeur. Sans lui, vous ne pouvez pas vous connecter pour aller en ligne.",
'p950t009' : "Vos connexions devraient ressembler à ceci :",
'p950t010' : "Nous continuerons à surveiller une connexion pendant que vous faites vos vérifications.",
'p950t011' : "Câblage",
'p950t012' : "Le problème de configuration le plus courant provient du câblage entre le modem et le routeur. Une extrémité doit être branchée sur le port jaune de votre routeur et l'autre, sur un port semblable sur votre modem. Assurez-vous que les deux extrémités sont correctement branchées. Diverses étiquettes identifient les différents ports sur le modem, à savoir \"data\", \"LAN\", \"network\" ou \"Ethernet\".<span class=\"nub\"></span>",
'p951IMRt001' : "Besoin de plus de temps?",
'p951IMRt002' : " Nous attendons que vous vous branchiez sur votre ligne ADSL. Avez-vous besoin de plus de temps?",
'p951t001' : "Besoin de plus de temps?",
'p951t002' : " Nous attendons que votre modem redémarre. Avez-vous besoin de plus de temps?",
'pDAt001' : "Administrateur en double",
'pDAt002' : "Ce périphérique est géré par  <span id=\"ipaddr\"></span> à l'heure actuelle!",
'PIC_blocked_content' : "Le contrôle parental d'Internet est activé et l'accès à Internet est actuellement interdit pour cet appareil. Appuyez sur le bouton ci-dessous pour gérer les paramètres de contrôle parental d'Internet.",
'PIC_blocked_title' : "L'accès à Internet est actuellement interdit pour cet appareil.",
'PIC_S1t0006' : "Programmer l'accès à Internet :",
'PIC_S1t006' : "Actuellement dans votre réseau :",
'PIC_S2t003' : "Soirs d'école",
'PIC_S2t004' : "Fins de semaine",
'PIC_S2t005' : "(Dimanche à jeudi)",
'PIC_S2t006' : "(Vendredi et samedi)",
'PIC-blocked' : "bloqué",
'PIC-S1dt001' : "Voulez-vous suspendre la connectivité Internet pour l'ensemble du réseau?",
'PIC-S1t001' : "Bloquer tous les appareils",
'PIC-S1t003' : "Tous les appareils sont déconnectés d'Internet.",
'PIC-S1t004' : "Rétablir l'accès",
'PIC-S1t005' : "Actuellement dans votre réseau :",
'PIC-S1t010' : "Recherche d'appareils en cours :",
'PIC-S1t020' : "Votre horaire de contrôle parental d'Internet est en mode pause",
'PIC-S1t021' : "Le routeur ne sait pas l'heure qu'il est actuellement, ce qui l'empêche de bloquer/débloquer votre horaire de contrôle parental d'Internet.  Cette situation sera corrigée dès que votre routeur rétablira l'heure exacte en se connectant à nouveau au serveur NPT (protocole de temps réseau).",
'PIC-S1t022' : "Votre routeur vérifiera le serveur NPT à intervalles réguliers; vous pouvez aussi changer de serveur à partir des <a href=\"#\" tid=\"gtSystemSettings\" style=\"\">paramètres système</a>.",
'PIC-unblocked' : "débloqué",
'pNoTime_content' : "Votre routeur est incapable de vous indiquer l'heure parce qu'il a perdu contact avec le serveur NTP. Les fonctions horaires du routeur, comme le contrôle parental d'Internet, le mode Eco et  l'autorétablissement sont maintenant en mode pause jusqu'à ce qu'il puisse se connecter à nouveau à un serveur NTP. <br> <br>Le routeur vérifiera automatiquement l'heure à intervalles réguliers.",
'pNoTime_title' : "Quelle heure est-il?",
'pODLAplt001' : "Application du module linguistique en cours",
'pODLAplt002' : "Changement à la langue sélectionnée…",
'pODLDLt001' : "Téléchargement du module linguistique en cours",
'pODLDLt002' : "Obtention de la langue sélectionnée du serveur…",
'pODLErrt001' : "Désolé",
'pODLErrt002' : "OK",
'pStatst004' : "Afficher tout &raquo;",
'Support1t001' : "Nous n'avons pas détecté de connexion avec votre modem.",
'Support1t002' : "Assurez-vous que votre modem est branché et allumé.",
'Support1t003' : "Assurez-vous que votre modem est relié à votre routeur au moyen d'un câble Ethernet.",
'Support1t004' : "Nous croyons qu'il y a un problème de câblage.",
'Support1t005' : "Votre modem devrait être allumé, avec un câble Ethernet le reliant au port jaune sur votre routeur.",
'Support1t006' : "Faites les vérifications suivantes :",
'Support1t007' : "Assurez-vous que votre modem est allumé. Vérifiez que l'adaptateur d'alimentation est branché aux deux extrémités et qu'un ou plusieurs témoins lumineux sont allumés sur le modem.",
'Support1t008' : "Un câble Ethernet devrait relier votre modem au port jaune de votre routeur. Ce câble achemine le signal de votre modem jusqu'au routeur. Sans lui, vous ne pouvez pas vous connecter pour aller en ligne.",
'Support1t009' : "Vos connexions devraient ressembler à ceci :",
'Support1t010' : "Une fois que vous aurez effectué ces étapes, cliquez sur Essayer à nouveau.",
'Support7t012' : "À partir d'un appareil connecté à Internet, rendez-vous sur le site <strong>http://belk.in/Q4XXca</strong>",
'Support1t016' : "Câblage",
'Support1t017' : "Le problème de configuration le plus courant provient du câblage entre le modem et le routeur. Une extrémité doit être branchée sur le port jaune de votre routeur et l'autre, sur un port semblable sur votre modem. Assurez-vous que les deux extrémités sont correctement branchées. Diverses étiquettes identifient les différents ports sur le modem, à savoir \"data\", \"LAN\", \"network\" ou \"Ethernet\".<span class=\"nub\"></span>",
'Support2t001' : "Votre modem n'a jamais redémarré.",
'Support2t002' : "Essayez de débrancher le bloc d’alimentation de votre modem.",
'Support2t003' : "Vous devrez peut-être appuyer sur le bouton de réinitialisation de votre modem.",
'Support2t004' : "Vous avez de la difficulté à redémarrer votre modem?",
'Support2t005' : "Essayez d'effectuer les étapes suivantes pour redémarrer votre modem :",
'Support2t006' : "Débranchez le bloc d’alimentation de votre modem.",
'Support2t007' : "Attendez que les voyants sur le modem s'éteignent.",
'Support2t008' : "Si les voyants restent allumés, il se pourrait que votre modem soit alimenté par une batterie de secours. Le bouton de réinitialisation se trouve habituellement à l'arrière. Appuyez dessus.",
'Support2t009' : "Les voyants devraient s'éteindre. Attendez quelques secondes avant de rebrancher le bloc d'alimentation.",
'Support2t010' : "Une fois que vous aurez effectué ces étapes, cliquez sur Essayer à nouveau.",
'Support2t016' : "Pourquoi redémarrer le modem?",
'Support2t017' : "Certains modems doivent redémarrer pour pouvoir communiquer avec un nouveau routeur ou un ordinateur inconnu. Nous pouvons voir votre modem, mais comme il ne communique pas avec votre nouveau routeur, un redémarrage rapide devrait régler le problème.<span class=\"nub\"></span>",
'Support3MRt001' : "Nous avons été incapables de détecter une connexion jusqu'à votre ligne ADSL.",
'Support3MRt002' : "Vérifiez qu'un câble réseau relie votre prise murale ADSL à votre routeur.",
'Support3MRt003' : "Dans certains endroits, un filtre est nécessaire.",
'Support3MRt004' : "Nous sommes pratiquement certains qu'il s'agit d'un problème de câblage.",
'Support3MRt005' : "Un câble devrait relier le port gris sur votre routeur à votre prise de téléphone/ADSL.",
'Support3MRt006' : "Assurez-vous que les deux extrémités du câble sont bien en place.",
'Support3MRt007' : "Vérifiez que le câble est branché sur le port gris sur votre routeur, et non sur un des ports jaunes.",
'Support3MRt008' : "Si on vous a donné un filtre pour ligne ADSL, assurez-vous de l'installer entre le câble et votre prise  ADSL.",
'Support3MRt010' : "Assurez-vous que les deux extrémités du câble sont bien en place.",
'Support3MRt011' : "Vérifiez que le câble est branché sur le port réseau du bloc d'alimentation de votre routeur.",
'Support3MRt012' : "Si on vous a donné un filtre pour ligne ADSL, assurez-vous qu'il est installé entre le câble et votre prise  ADSL.",
'Support3MRt016' : "Une fois que vous aurez effectué ces étapes, vous serez prêt à essayer à nouveau.",
'Support3MRt018' : "Rendez-vous à l'adresse URL suivante à partir d'un appareil connecté à Internet et apprenez comment résoudre le problème vous-même : <strong>www.belkin.com/support3mr</strong>",
'Support3MRt021' : "Câblage",
'Support3MRt022' : "Le problème de câblage le plus fréquent concerne votre prise ADSL. Il est important de vérifier les deux extrémités du câble. <span class=\"nub\"></span>",
'Support3MRt050' : "Vérifiez qu'un câble réseau relie le bloc d’alimentation de votre routeur à la prise de téléphone.",
'Support3MRt051' : "En effet, un câble devrait relier le bloc d'alimentation de votre routeur à votre prise de téléphone/ADSL.",
'Support3PMt001' : "Nous avons été incapables de détecter une connexion jusqu'à votre ligne ADSL.",
'Support3PMt002' : "Assurez-vous qu'il y a une connexion réseau entre votre routeur et son bloc d’alimentation (lequel a un modem intégré).",
'Support3PMt004' : "Nous sommes pratiquement certains qu'il s'agit d'un problème de câblage.",
'Support3PMt005' : "Il devrait y avoir une connexion réseau entre le port jaune sur votre routeur et le bloc d’alimentation du routeur.",
'Support3PMt006' : "Jetez un coup d'œil au bloc d’alimentation du routeur et repérez le câble qui se sépare en deux lignes distinctes. Une de ces lignes a un fiche Ethernet.",
'Support3PMt007' : "Insérez la fiche Ethernet dans le port jaune sur votre routeur.",
'Support3PMt010' : "Une fois que vous l'aurez fait, vous pourrez essayer à nouveau.",
'Support3PMt012' : "À partir d'un appareil connecté à Internet, rendez-vous sur le site <strong>www.belkin.com/support3PM</strong>",
'Support3PMt016' : "Câblage",
'Support3PMt017' : "Vérifier qu'il y a une série ininterrompue de connexions depuis votre prise ADSL jusqu'au routeur est une étape essentielle. Le routeur s'attend à ce que ce signal arrive en passant par le port jaune. Le câble qui est branché sur le bloc d'alimentation de votre routeur achemine ce signal tout en alimentant le routeur; les deux moitiés doivent être branchées sur votre routeur pour que tout fonctionne normalement. <span class=\"nub\"></span>",
'Support3t001' : "Votre modem n'a jamais redémarré.",
'Support3t002' : "Vérifiez si votre modem est alimenté en courant.",
'Support3t003' : "Vous devrez peut-être attendre un peu avant qu'il soit prêt.",
'Support3t004' : "Vous avez de la difficulté à redémarrer votre modem?",
'Support7t005' : "Essayez les étapes suivantes pour établir une connexion ADSL :",
'Support7t006' : "Vérifiez que le câble réseau de votre modem-routeur est branché sur une prise de téléphone donnant accès à Internet. Ensuite, cliquez sur Essayer à nouveau et voyez si votre modem-routeur peut détecter la connexion Internet.",
'Support7t007' : "Si votre modem-routeur partage la prise téléphonique avec un téléphone filaire au moyen d'un séparateur, remplacez-le par un filtre-séparateur (facultatif). Ensuite, cliquez sur Essayer à nouveau et voyez si votre modem-routeur peut détecter le fournisseur de services Internet.",
'Support7t008' : "Si l'étape 2 ci-dessus ne donne aucun résultat, des filtres ADSL seront peut-être nécessaires*. Si vous en avez quelques-uns (habituellement fournis pas votre fournisseur de services Internet), installez-les entre vos téléphones filaires et les prises téléphoniques.",
'Support7t009' : "Si la connexion ADSL ne fonctionne toujours pas après avoir effectué les étapes 1 à 3 ci-dessus, appelez le soutien technique de votre fournisseur de services Internet. Dites-lui que votre modem-routeur ne parvient pas à se synchroniser avec votre FSI.",
'Support3t010' : "Une fois que vous aurez effectué ces étapes, cliquez sur Essayer à nouveau.",
'Support3t016' : "Pourquoi redémarrer le modem?",
'Support3t017' : "Certains modems doivent redémarrer pour pouvoir communiquer avec un nouveau routeur ou un ordinateur inconnu. Nous pouvons voir votre modem, mais comme il ne communique pas avec votre nouveau routeur, un redémarrage rapide devrait régler le problème.<span class=\"nub\"></span>",
'Support4t001' : "Nous avons été incapables de nous reconnecter à votre routeur.",
'Support4t002' : "Essayez de redémarrer votre routeur.",
'Support4t003' : "Une fois que votre routeur sera opérationnel, essayez à nouveau de vous y connecter.",
'Support4t004' : "Essayons autre chose.",
'Support4t005' : "D'abord, redémarrons votre routeur.",
'Support4t006' : "Débranchez le bloc d'alimentation de votre routeur, attendez quelques secondes, puis rebranchez-le.",
'Support4t006w' : "Débranchez le bloc d'alimentation de votre routeur, attendez quelques secondes, puis rebranchez-le.",
'Support4t007' : "Dès qu'un voyant bleu fixe apparaîtra sur votre routeur, nous serons prêts à établir la connexion.",
'Support4t008' : "Ensuite, essayons une connexion sans fil.",
'Support4t031' : "Il faudra quelques secondes pour établir la connexion, après quoi vous serez prêt à essayer à nouveau.",
'Support4t032' : "Ou encore, vous pouvez essayer d'utiliser une connexion câblée.",
'Support4t033' : "Essayez de brancher un ordinateur sur le routeur. Utilisez un câble Ethernet pour relier l'ordinateur à un des ports gris sur le routeur. En vous rendant sur le site http://router/ à partir de là, vous pourrez à nouveau essayer de faire la configuration.",
'Support4t034' : "Une fois que vous aurez effectué ces étapes, cliquez sur Essayer à nouveau.",
'Support4t040' : "À partir d'un appareil connecté à Internet, rendez-vous sur le site <strong>http://belk.in/PMuxOg</strong>",
'Support4t050' : "Rétablissement d'une connexion",
'Support4t051' : "Dans ce genre de situation, vous devrez peut-être redémarrer votre routeur ou simplement rétablir une connexion. Par conséquent, nous avons inclus des instructions pour ces deux éventualités. Comme vous avez changé votre mot de passe réseau à une étape précédente, vous devrez peut-être sélectionner à nouveau le réseau une fois que vous aurez redémarré le routeur.<span class=\"nub\"></span>",
'Support5t001' : "Nous avons été incapables de nous reconnecter à votre routeur.",
'Support5t002' : "Essayez de redémarrer votre routeur.",
'Support5t003' : "Une fois que votre routeur sera opérationnel, essayez à nouveau de vous y connecter.",
'Support5t004' : "Essayons autre chose.",
'Support5t005' : "D'abord, redémarrons votre routeur.",
'Support5t006' : "Débranchez le bloc d'alimentation de votre routeur, attendez quelques secondes, puis rebranchez-le.",
'Support5t006w' : "Débranchez votre routeur, attendez quelques secondes, puis rebranchez-le.",
'Support5t007' : "Dès qu'un voyant bleu fixe apparaîtra sur votre routeur, nous serons prêts à établir la connexion.",
'Support5t008' : "Ensuite, essayons une connexion sans fil.",
'Support5t009' : "Il faudra quelques secondes pour établir la connexion, après quoi vous serez prêt à essayer à nouveau.",
'Support5t010' : "Ou encore, vous pouvez essayer d'utiliser une connexion câblée.",
'Support5t011' : "Vous pourriez brancher un ordinateur sur le routeur. Utilisez un câble Ethernet pour relier l'ordinateur à un des ports gris sur le routeur. En vous rendant sur le site http://router/ à partir de là, vous pourrez à nouveau essayer de faire la configuration.",
'Support5t012' : "Une fois que vous aurez effectué ces étapes, cliquez sur Essayer à nouveau.",
'Support5t015' : "À partir d'un appareil connecté à Internet, rendez-vous sur le site <strong>http://belk.in/PMuxOg</strong>",
'Support5t020' : "Rétablissement d'une connexion",
'Support5t021' : "Dans ce genre de situation, il est difficile de dire si vous devez redémarrer votre routeur ou si nous devons simplement établir une nouvelle connexion. Pour cette raison, nous avons inclus des instructions pour ces deux éventualités. Comme nous avons changé votre nom de réseau à une étape précédente, assurez-vous de vous connecter au nouveau réseau une fois que vous aurez redémarré le routeur.<span class=\"nub\"></span>",
'Support6t001' : "Nous avons été incapables de nous reconnecter à votre routeur.",
'Support6t002' : "Essayez de redémarrer votre routeur.",
'Support6t003' : "Une fois que votre routeur sera opérationnel, essayez à nouveau de vous y connecter.",
'Support6t004' : "Essayons autre chose.",
'Support6t005' : "D'abord, redémarrons votre routeur.",
'Support6t006' : "Débranchez le bloc d'alimentation de votre routeur, attendez quelques secondes, puis rebranchez-le.",
'Support6t006w' : "Débranchez votre routeur, attendez quelques secondes, puis rebranchez-le.",
'Support6t007' : "Dès qu'un voyant bleu fixe apparaîtra sur votre routeur, nous serons prêts à établir la connexion.",
'Support6t008' : "Ensuite, essayons une connexion sans fil.",
'Support6t031' : "Il faudra quelques secondes pour établir la connexion, après quoi vous serez prêt à essayer à nouveau.",
'Support6t032' : "Ou encore, vous pouvez essayer d'utiliser une connexion câblée.",
'Support6t033' : "Vous pourriez brancher un ordinateur sur le routeur. Utilisez un câble Ethernet pour relier l'ordinateur à un des ports gris sur le routeur. En vous rendant sur le site http://router/ à partir de là, vous pourrez à nouveau essayer de faire la configuration.",
'Support6t034' : "Une fois que vous aurez effectué ces étapes, cliquez sur Essayer à nouveau.",
'Support6t037' : "À partir d'un appareil connecté à Internet, rendez-vous sur le site <strong>http://belk.in/Nm1f5S</strong>",
'Support6t050' : "Rétablissement d'une connexion",
'Support6t051' : "Dans ce genre de situation, vous devrez peut-être redémarrer votre routeur ou simplement rétablir une connexion. Par conséquent, nous avons inclus des instructions pour ces deux éventualités. Comme vous avez changé votre mot de passe réseau à une étape précédente, vous devrez peut-être sélectionner à nouveau le réseau une fois que vous aurez redémarré le routeur.<span class=\"nub\"></span>",
'Support7t001' : "Votre modem-routeur n'est pas connecté à Internet.",
'Support7t004' : "Il y a un problème de connexion au niveau de votre prise téléphonique.",
'Support7t050' : "Problèmes de connexion",
'Support7t051' : "Dans ces situations, il est difficile de savoir pourquoi nous avons du mal à nous connecter au FSI. Nous avons vérifié votre câblage autant qu'il était possible. La prochaine étape est donc de vérifier que vous utilisez la bonne prise et un filtre (s'il y a lieu), mais si cela ne change rien, vous devrez appeler votre FSI. <span class=\"nub\"></span>",
'SupportNumber' : "1-800-123-4567",
'UpSpeed' : "12.5",
'p2410t012' : "En cliquant sur 'Restaurer', vous effacerez les paramètres de votre routeur tels que le nom et le mot de passe, et les remplacerez par les paramètres par défaut du fabricant.  Vos ordinateurs, téléphones, etc., devront alors être configurés en fonction de ces paramètres afin de pouvoir établir une connexion Internet en passant par ce routeur.  Êtes-vous certain de vouloir continuer?",
'gtRestore' : "Restaurer",
'gtCancel' : "Annuler",
'alt="Loading"' : "Chargement en cours",
'alt="Restart Router"' : "Redémarrer le routeur",
'alt="Check Wires"' : "Vérifier les fils",
'alt="Check Phone Connection"' : "Vérifier la connexion téléphonique",
'alt="Check WAN Connection"' : "Vérifier la connexion WAN",
'alt="Checkmark"' : "Cocher",
'alt="Change"' : "Modifier",
'alt="Print"' : "Imprimer",
'alt="Expand"' : "Développer",
'alt="Caret"' : "Caret",
'alt="Cut"' : "Couper",
'alt="Browser"' : "Navigateur",
'alt="Wifi"' : "Wi-Fi",
'alt="Password"' : "Mot de passe",
'alt="Check Phone Jack"' : "Vérifier la prise téléphonique",
'alt="Turn Off Modem"' : "Éteindre le modem",
'alt="Turn On Modem"' : "Allumer le modem",
'alt="Check Phone Filters"' : "Vérifier les filtres de téléphone",
'gtSerial' : "Numéro de série",
'gt5GName' : "SSID 5 GHz",
'gt5GKey' : "Clé 5 GHz",
'p1020MRt001' : "Nous avons de la difficulté à communiquer avec votre fournisseur de services Internet.",
'p1020MRt002' : "Veuillez redémarrer votre modem-routeur.",
'p1020MRt003' : "Nous n'obtenons pas de connexion Internet; essayons  de redémarrer votre modem-routeur.",
'p1020MRt004' : "Éteignez votre modem-routeur. Habituellement, vous n'avez qu'à appuyer sur l'interrupteur sur le modem-routeur ou à débrancher le bloc d'alimentation.",
'p1020MRt005' : "Attendez environ 15 secondes.",
'p1020MRt006' : "Rallumez votre modem-routeur.",
'p1020MRt007' : "Quelques secondes plus tard, les voyants s'allumeront et il devrait établit le contact avec votre FSI.",
'p1020MRt008' : "Si ce problème persiste, veuillez communiquer avec votre FSI pour trouver une solution de dépannage.",
'p1020MRt009' : "Nous surveillerons votre modem-routeur pendant qu'il s'éteint et se rallume, puis nous continuerons automatiquement.",
'p1020MRt010' : "Pourquoi redémarrer le modem?",
'p1020MRt011' : "Certains modems doivent redémarrer avant de pouvoir communiquer avec un nouveau routeur ou un ordinateur inconnu. Et si votre fournisseur de services Internet éprouve quelque difficulté, le modem pourrait subitement rompre la connexion. Nous pouvons voir votre modem mais non la connexion Internet; un redémarrage rapide devrait très probablement résoudre le problème.<span class=\"nub\"></span>",
'p1010t001' : "Nous avons de la difficulté à communiquer avec votre modem.",
'p1010t002' : "Nous croyons qu'il y a un problème de câblage.",
'p1010t003' : "Votre modem devrait être relié au port jaune de votre routeur au moyen d'un câble. Votre modem devrait être allumé.",
'p1010t004' : "Voici quelques points à vérifier pour vous assurer que tout est en ordre :",
'p1010t005' : "Assurez-vous que votre modem est allumé. L'adaptateur de courant doit être branché aux deux extrémités, et un ou plusieurs voyants devraient être allumés sur le modem.",
'p1010t006' : "Votre modem devrait être relié au port jaune de votre routeur au moyen d'un câble réseau. Ce câble achemine le signal de votre modem jusqu'au routeur. Sans lui, vous ne pouvez pas vous connecter pour aller en ligne.",
'p1010t007' : "Si tout est correct de ce côté, vous pouvez essayer de redémarrer votre modem en le débranchant du bloc d’alimentation, puis en le rebranchant quinze secondes plus tard. Si votre modem a une batterie, vous devrez peut-être le réinitialiser.",
'p1010t008' : "Voici à quoi ces connexions devraient ressembler :",
'p1010t009' : "Nous continuerons à surveiller une connexion pendant que vous faites vos vérifications.",
'p1010t010' : "Le problème de câblage le plus courant se situe entre le modem et le routeur. Il est important de vérifier les deux extrémités du câble. Une extrémité doit être branchée sur le port jaune de votre nouveau routeur et l'autre, sur un port semblable sur votre modem. Diverses étiquettes identifient les différents ports sur le modem, à savoir « data », « LAN », « network » ou « Ethernet ».",
'Support3t005' : "Essayez d'effectuer les étapes suivantes pour redémarrer votre modem :",
'Support3t006' : "Vérifiez les voyants sur la face avant de votre modem. S'ils sont allumés, cela signifie que votre modem est allumé; vous devrez peut-être attendre un peu avant qu'il soit prêt.",
'Support3t007' : "Vérifiez que le bloc d'alimentation est connecté correctement au modem et branché sur une prise murale.",
'Support3t008' : "Si votre modem a un interrupteur, vérifiez qu'il est en position ON (allumé).",
'Support3t009' : "Vérifiez une deuxième fois qu'il est toujours connecté à votre nouveau routeur.",
'Support1t012' : "À partir d'un appareil connecté à Internet, rendez-vous sur le site <strong>http://belk.in/LIkBoH</strong>",
'QOSt001' : 'Pour activer Intellistream, effectuez l\'une des actions suivantes :',
'QOSt002' : 'Raccordez votre ordinateur à votre routeur à l\'aide d\'un câble Ethernet (conseillé). ',
'QOSt003' : 'Vérifiez la vitesse de votre connexion en cliquant ici pour <a href="http://www.speedtest.net" target="_blank" class="speed_font4">Speedtest.net</a>',
'QOSt004' : 'Après l\'épreuve de vitesse, entrez les valeurs indiquées sur Speedtest.net dans les champs Vitesse de téléchargement et Vitesse de téléversement ci-dessus, puis cliquez sur <Enregistrer> ci-dessous.',
'gtMbps' : 'Mo/s',
'QOSt006' : 'Avec votre vitesse de téléchargement en aval élevée, Intellistream priorisera votre vitesse de téléchargement en amont seulement.',
'QOSt007' : 'Avec votre vitesse de téléchargement en amont élevée, Intellistream priorisera votre vitesse de téléchargement en aval seulement.',
'QOSt008' : 'Comme vos vitesses de téléchargement Internet sont élevées, Intellistream ne sera pas nécessaire. Il ne sera donc pas activé ici.',
'QOSt009' : 'Veuillez entrer un nombre supérieur à 0,01.',
'QOSt010' : 'Veuillez entrer des nombres supérieurs à 0,01.',
'gtSettingsNotSaved' : 'Des paramètres n\'ont pas été enregistrés. Restez sur cette page pour les enregistrer; quittez ou actualisez la page pour annuler les modifications.',
'QOSt011' : 'Veuillez entrer un nombre entre 0,01 et 100,00.',
'QOSt012' : 'Veuillez entrer des nombres entre 0,01 et 100,00.',
'QOSt013' : 'Veuillez entrer un nombre entre 0,01 et 1000,00.',
'QOSt014' : 'Veuillez entrer des nombres entre 0,01 et 1000,00.',


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
common_err1 = '%s est une valeur NULLE';
upgrade_err2 = 'La mise à niveau du micrologiciel a pris fin en raison des ressources insuffisantes. L\'opération a échoué.\nVeuillez essayer de nouveau lorsque le système sera inactif (pas de trafic Internet)';
upgrade_err3 = 'Impossible de télécharger en amont (vers le serveur), veuillez contacter l\'administrateur.';
upgrade_err4 = 'Le micrologiciel est trop gros, échec de la mise à niveau.';
upgrade_err5 = 'La plus récente version du micrologiciel a déjà été installée.';
upgrade_err6 = 'Il semble que la mise à jour du micrologiciel soit corrompue. Veuillez re-télécharger le micrologiciel et essayer de nouveau.';
show10 = 'Liste de clients DHCP';
show54 = 'Paramètres de connexion';
btn2 = 'Appliquer les modifications';
cff1 = 'Vérification réussie du micrologiciel';
PM2 = ':30 PM';
AM2 = ':30 AM';
Dimicons = 'Icônes Veilleuse';
EcoTo = 'à';
fvrm = 'Veuillez désactiver la gestion à distance. Parce que son port est en conflit avec un des ports d\'arrivée de votre serveur virtuel.';
lsipm2 = 'Adresse IP de réseau local non valide, le dernier chiffre ne peut pas être 0 ou 255';
lsldnm = 'Nom de domaine local non valide : `~!@#$%^&*()_+[]{}\|;:\'"<>/?.,';
lsipm5 = 'L’adresse IP que vous sélectionnez doit être une adresse IP non routable.\n  192.168.x.x (où x peut être n’importe quelle valeur entre 0 et 255.) \n10.x.x.x (où x peut être n’importe quelle valeur entre 0 et 255.)\n172.y.x.x (où y peut être n’importe quelle valeur entre 16 et 31 et x n’importe quelle valeur entre 0 et 255.)';
ufy4 = 'La restauration des paramètres par défaut peut prendre jusqu’à 60 secondes. Ne coupez pas l’alimentation du routeur pendant cette opération.';
ufe11 = 'Une fois la mise à niveau terminée, il se pourrait que le routeur ne réponde pas aux commandes pendant 180 secondes. Ceci est normal. N\'éteignez pas ou ne redémarrez pas le routeur pendant ce temps.';
ur5 = 'Attendez jusqu\'à 30 secondes que le routeur redémarre. N\'éteignez pas le routeur avant qu\'il se soit complètement réinitialisé.';
ur6 = 'Attendez jusqu\'à 60 secondes que le routeur redémarre. N\'éteignez pas le routeur avant qu\'il soit complètement réinitialisé.';
usys83 = 'Les champs Nouveau mot de passe et Confirmer le nouveau mot de passe ne concordent pas';
usys83_1 = 'Les champs Mot de passe et Confirmer le mot de passe ne concordent pas.';
usys85_1 = 'Le mot de passe d\'administration doit contenir entre 1 et 63 caractères.';
usys88 = 'Le mot de passe contient le nombre maximum de caractères!';
usys89 = 'AM';
usys90 = 'PM';
usys92 = 'Le numéro du port d\'accès distant doit être compris entre 1 et 65535.';
usysipm = 'Vous n\'avez pas entré tous les numéros IP, ou certains numéros que vous avez entrés ne sont pas valides. L\'adresse IP doit être entrée sous la forme x.y.y.z (où x peut être n’importe quelle valeur entre 1 et 223, y n’importe quelle valeur entre 0 et 255 et z n’importe quelle valeur entre 1 et 254).';
self_healing60 = 'Autorétablissement';
chkwait = 'Vérification de nouvelle version du micrologiciel...';
Europe = 'Europe';
Australia = 'Australie et Nouvelle-Zélande';
AsiaPacific = 'Asie-Pacifique';
NorthAmerica = 'Amérique du Nord';
vjs1 = 'Adresse IP non valide, trop longue. Veuillez vérifier à nouveau';
vjs2 = 'Adresse IP non valide, il manque un point (.)  Veuillez vérifier à nouveau!';
vjs3 = 'Adresse IP non valide, il manque des chiffres entre le point (.)  Veuillez vérifier à nouveau!';
vjs4 = 'Adresse IP non valide, il y a un point (.) de trop.  Veuillez vérifier à nouveau!';
vjs5 = 'Adresse IP non valide – les chiffres entre le point (.) sont trop grands.  Veuillez vérifier à nouveau !';
vm1 = 'Caractère non valide ';
vm2 = ' à la position ';
vm3 = 'Doit être ';
vjs6 = 'Format d\'année non valide, veuillez l\'entrer sous la forme (p. ex. 2002)';
vm4 = 'Chiffre non valide ';
vjs8 = 'Non valide, doit être compris entre 1970 et 2037';
vjs9 = 'Format de mois non valide, veuillez l’entrer sous la forme (01…12, par exemple)';
vjs161 = ' n\'est pas dans ';
vjs162 = ' masque de réseau';
vjs163 = 'La plage DHCP permise est ';
vjs17 = 'Vous avez tapé deux mots de passe différents, veuillez vérifier à nouveau!';
vjs18 = 'Veuillez entrer le numéro du premier port.';
vjs19 = 'Le numéro du premier port doit être plus petit que celui du dernier port.';
vjs23 = 'Adresse MAC non valide; ceci est une adresse de diffusion.';
vjs24 = 'Adresse MAC non valide; cette adresse est vide.';
vjs25 = 'Adresse MAC non valide; ceci est une adresse de multidiffusion.';
vjs26 = 'Adresses IP de début et de fin non valides; l\'adresse IP de fin doit être un numéro plus grand que celui de début.';
vjs28 = 'Format de masque de réseau non valide.';
vjs29 = 'Format non valide; le masque de réseau doit être 255.255.255.0 ou 255.255.255.128 ou 255.255.255.192 ou 255.255.255.224 ou 255.255.255.240 ou 255.255.255.248 ou 255.255.255.252 ou 255.255.255.254';
vjs30 = 'Adresse IP non valide; le dernier chiffre ne peut pas être 0 ou 255';
vjs31 = 'Adresse IP de réseau local (LAN) non valide, le premier chiffre ne peut pas être 127';
vjs32 = 'Adresse IP de réseau local (LAN) non valide, elle ne peut pas être 0.0.0.0';
vjs33 = 'Adresse IP de réseau local (LAN) non valide; elle doit être inférieure à 224.0.0.0';
vjs42 = 'Les numéros de masque de sous-réseau que vous avez entrés ne sont pas valides.';
vjs45 = 'Spécifiez l\'adresse IP';
vjs46 = 'n\'est pas valide. Veuillez d\'abord la corriger!';
wcc2 = 'Sélectionnez votre type de connexion :';
wcc13 = 'L2TP';
wcc14 = '[Israël seulement]. Ce type de connexion est très courant en Israël. Si votre FSI vous a clairement indiqué que vous utilisiez le protocole L2TP et qu\'il vous a fourni les renseignements appropriés, utilisez cette option.';
wds4_1 = 'Adresse DNS principale';
wds7 = 'Vous devez entrer les paramètres DNS que votre FSI vous a fournis si vous n\'utilisez pas la fonction DNS automatique';
wds8 = 'Pour modifier les paramètres DNS, rendez-vous d\'abord sur %s Filtres de sites Web %s et sélectionnez « Pas de filtres ».';
wmc6 = 'L\'adresse MAC WAN ne peut pas être identique à l\'adresse MAC LAN. Veuillez en sélectionner une autre.';
wdd9  = 'Aucun service DDNS sélectionné.\n';
wdd10 = 'Aucun service DDNS n\'a été sélectionné et toutes les données de cette page seront perdues. Voulez-vous continuer?';
wm10b = 'Seulement pour utilisation avec les FSI qui exigent la méthode de connexion L2TP.';
pm = 'Votre service a été incapable de vérifier le mot de passe que vous avez entré. Veuillez confirmer qu’il s’agit du bon mot de passe.';
wpp17 = 'Compte L2TP';
wpp18 = 'Mot de passe L2TP';
wpp19 = 'Veuillez entrer votre compte L2TP';
wpp23 = 'Attribution d\'adresse IP';
wpp24 = 'Utiliser l\'adresse IP statique';
wpp25 = 'Obtenir de façon dynamique du FSI';
wppa7 = 'Mon adresse IP';
wppa9 = 'ID connexion (facultatif)';
wppa13 = 'Veuillez entrer votre compte PPTP';
wppa18 = 'Le nom du service n\'est pas valide.';
ws2 = 'Pour définir votre adresse IP statique, tapez vos coordonnées ci-dessous et cliquez sur « Appliquer les modifications ».';
sm_1 = 'Le masque de sous-réseau que vous avez entré n\'est pas valide.';
ws8 = 'Veuillez entrer vos paramètres d’adresse DNS à l’écran suivant';
wt2 = 'Le routeur redémarrera si vous cliquez sur « Appliquer les modifications ». Une fois qu\'il aura redémarré, faites ceci :';
wt3 = '1) Débranchez le câble d\'alimentation du modem câble et du routeur Belkin';
wt4 = '2) Rebranchez le câble d\'alimentation sur le modem câble et attendez que tous les voyants du modem cessent de clignoter';
wt5 = '3) Rebranchez le câble d\'alimentation sur le routeur Belkin';
wt6 = 'Pour confirmer que vous êtes connecté à Internet, ouvrez votre navigateur (Internet Explorer, Firefox ou Safari) et assurez-vous de pouvoir afficher des pages Web.';
wlad2 = 'Activer/Désactiver';
wlc2 = 'Si vous voulez modifier les paramètres sans fil du routeur, faites-le ici. Cliquez sur « Appliquer les modifications » pour enregistrer vos paramètres.';
wlcgb = '802.11b+g';
wlcg = '802.11g';
wlcb = '802.11b';
wlc20 = '20 MHz';
wlc22 = '20/40 MHz';
wlc22a='20/40/80 MHz';
wlcoff = 'DÉSACTIVÉ';
wlcngb1 = '802.11b, 802.11g et 1x1 802.11n';
wlcn1 = '1x1 802.11n';
wlcngb2 = '802.11b, 802.11g et 802.11n';
wlcn2 = '802.11n';
wlcgn = '802.11g+n';
wlca = '802.11a';
wlcan = '802.11a et 802.11n';
wlcnac='802.11n et 802.11ac';
wlcanac='802.11a et 802.11n et 802.11ac';
wlc26 = 'Le fait de masquer le nom de votre réseau désactivera la fonction WPS.';
wlc27 = 'Le fait de changer de type de sécurité désactivera la fonction WPS.';
wlc28 = 'La fonction WPS est désactivée en raison de votre <A href=%s><B>type de sécurité sans fil</B></A>.';
wlc29 = 'La fonction WPS est désactivée parce que vous avez masqué le nom de votre réseau (SSID).';
wlc30 = 'La fonction WPS est désactivée parce que vous avez masqué le nom de votre réseau (SSID) et aussi, en raison de votre <A href=%s><B>type de sécurité réseau</B></A>.';
wlc31 = 'En activant la fonction WPS, le nom de votre réseau (SSID) s\'affichera.';
wlc32 = 'En activant la fonction WPS, votre type de sécurité changera à WPA/WPA2. Votre mot de passe réseau actuel fonctionnera correctement.';
wlc33 = 'En activant la fonction WPS, le nom de votre réseau (SSID) s\'affichera et votre type de sécurité changera à WPA/WPA2. Votre mot de passe réseau actuel fonctionnera correctement.';
wle3a = 'WPA-PSK';
wle3b = 'WPA2-PSK';
wle3c = 'WPA-PSK + WPA2-PSK';
wps1 = 'Mode « Wi-Fi Protected Setup » (WPS)';
wps3 = 'Veuillez configurer la sécurité sans fil';
wps17 = 'Dans le cas des dispositifs clients sans fonction WPS, veuillez exécuter l\'Assistant de sécurité Belkin à partir du CD ou faire la configuration manuellement en utilisant les paramètres suivants :';
wps23 = 'WPA+WPA2-Personnel (PSK)';
wps25 = 'TKIP+AES';
wps27 = 'Clé de réseau (WEP) :';
wps28_1 = 'NUL';
wle11 = 'Clé 1';
wle12 = 'Clé 2';
wle13 = 'Clé 3';
wle14 = 'Clé 4';
wpskerr2 = 'La clé peut compter entre 8 et 63 caractères, incluant les espaces et symboles, ou 64 caractères hexadécimaux (0-F) seulement!';
wpskerr4 = 'Vous devez entrer la clé Invité';
wpskerr7 = 'La clé Invité doit compter 8 caractères';
wpskerr8 = 'La clé Invité doit être différente de la clé Réseau';
wlguest1 = 'Le code SSID doit être différent du code SSID Invité';
wlguest2 = 'Le code SSID Invité doit être différent du code SSID';
rs_crc = 'Échec de la restauration < CRC >';
rs_long = 'Échec de la restauration <too long>';
rs_disposition = 'Échec de la restauration <No Content-Disposition>';
rs_getpid = 'Échec de la restauration <Can\'t get pid!>';
rs_unmatchpid = 'Échec de la restauration <Unmatched pid>';
msg_ddns3  = 'Les champs de nom de domaine ne peuvent pas être laissés en blanc.\n';
msg_lan_dhcp1  = 'Demande d\'information de la passerelle.';
msg_lan_dhcp2  = 'Mise à jour de la base de données de configuration.';
msg_wan_stat1  = 'L\'adresse IP ';
msg_wan_stat2  = ' n\'est pas dans le ';
msg_wan_stat3  = ' réseau';
msg_wls_chan2  = 'Le code SSID Invité ne peut pas être une valeur NULLE!\n';
fw_not_interrupt  = 'NE PAS ÉTEINDRE OU DÉBRANCHER LE ROUTEUR car ce faisant, vous le rendriez inutilisable.';
msg_invalid_char  = 'Des caractères non valides ont été trouvés. Les caractères valides sont : 0-9, a-z, A-Z, `~!@#$%^&*()_-+=|\\{}[]:";\',.<>/?';
msg_invalid_domain_char  = 'Nom de domaine local non valide'+': ~!@#$%^&*()=+{}[]|":;\\\'?/<>,`';
msg_invalid_char_1  = 'Des caractères non valides ont été trouvés. Les lettres et les chiffres sont des caractères valides. Les symboles suivants ne sont pas valides : `~!@#$%^&*()_+[]{}\\|;:\'"<>/?.,';
msg_hostIP_invalid  = 'L\'adresse IP hôte n\'est pas valide. Elle ne doit pas être l\'adresse IP du réseau local (LAN) du routeur.\n';
msg_dmzIP  = 'L\'adresse IP DMZ';
msg_blank  = ' ne peut pas être laissée en blanc.\n';
msg_space  = 'Les blancs ou les espaces ne sont pas permis dans %s\n';
msg_blank_in  = 'Les blancs ne sont pas permis dans %s\n';
msg_allspaces  = '%s ne peut pas comprendre que des espaces\n';
msg_invalid  = 'Caractère(s) non valide(s) dans %s\nLes caractères valides sont : \n%s\n\n';
msg_check_invalid  = '%s contient un nombre non valide\n';
msg_valid_range  = '%s n\'est pas valide. La plage valide va de %s à %s\n';
msg_invalid_mac  = 'Adresse MAC non valide.\n';
msg_multi_mac = 'L’adresse MAC ne peut pas être une adresse multidiffusion.\n';
msg_confirmDefault  = 'Attention!\nLe chargement des paramètres par défaut du fabricant effacera tous les paramètres actuels.\nÊtes-vous certain de vouloir continuer?';
Allowed_Services = 'Services autorisés';
Allowing_Url = 'Autorisation de sites Web par adresse URL ';
Allowing_Keyword = 'Autorisation de sites Web par mot clé';
wipv63 = 'Les appareils connectés à votre routeur peuvent communiquer entre eux au moyen de paquets IPv6 natifs. Les paquets IPv6 sur le réseau local (LAN) seront automatiquement envoyés à toutes les interfaces LAN (ports Ethernet et réseaux 2,4 GHz et 5 GHz sans fil).';
wipv64 = 'Lorsque la fonction d\'intercommunication (passe-système) IPv6  est activée, les paquets IPv6 sont également copiés sur l\'interface WAN, créant ainsi une connexion directe et non sécurisée à Internet.';
wipv65 = 'Veuillez communiquer directement avec votre FSI pour en savoir davantage sur le soutien offert en rapport avec le protocole IPv6.';
wipv67 = 'Protocole IPv6 Internet';
wipv68 = 'Votre réseau est compatible avec le protocole IPv6.';
wipv69 = 'Fonction d\'interconnexion (passe-système)';
mf1 = 'Ces pages vous permettent de modifier le comportement de votre routeur lorsqu\'il doit gérer certains types de trafic multimédia.';
mf2 = 'Optimisez automatiquement votre connexion Internet pour différents types de trafic.';
mf3 = 'Voyez de quelle façon votre routeur est utilisé.';
mf8 = 'Enregistrés sur %s';
mf10 = 'Télécharger (en aval)';
mf11 = 'Télécharger (en amont)';
mf12 = 'Vitesse';
mf15 = 'Appliquer les paramètres';
mf18 = 'Entrez un nombre entre {0.1 et %s}.';
mf20 = 'Entre {0.1 et %s} seulement.';
mf26 = 'Enregistrés manuellement sur %s';
mf32 = 'ou';
mf44 = 'Il se pourrait que les résultats du test de vitesse automatique ne soient pas précis à 100 %, selon le trafic Internet ou d\'autres conditions. Pour comparer les résultats, rendez-vous sur un site Web de test de vitesse ou communiquez avec votre FSI pour confirmer vos débits Internet. Si les résultats sont incohérents, vous pouvez entrer les valeurs manuellement.';
media_dlna18 = 'Sans titre';
media_dlna21 = 'Comme vous avez plus de médias que votre routeur est capable d\'indexer, nous desservons les 12 000 premiers.';
errSubnetMaskInvalid_2 = 'Le masque de sous-réseau que vous avez entré ne ressemble pas à un masque de sous-réseau. Veuillez vérifier la valeur';

