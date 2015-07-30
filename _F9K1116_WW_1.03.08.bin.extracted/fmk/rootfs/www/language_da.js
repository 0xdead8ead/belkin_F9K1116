function dw(message)
{
	document.write(message);	
}

// Note this dictionary is a temporary demonstration
var langDictionary = {

// Copy belkin transation table to here	
'p100t011' : 'instrumentbræt',
'p220t001' : 'Du har en PPTP DSL-forbindelse',
'p220t011' : 'PPTP',
'p220t012' : 'Point-to-Point Tunneling Protocol (PPTP) opretter en privat og krypteret forbindelse mellem dig og din internetudbyder.',
'p222t001' : 'Der er noget galt med dine PPTP-indstillinger.',
'p300t001' : 'Søger efter firmwareopdateringer.',
'p300t002' : 'Vi kontrollerer om der er opdateret firmware tilgængelig til din nye router',
'p300t003' : 'Hvorfor har jeg brug for den nyeste firmware?',
'p300t004' : 'Firmware er den software, som din router bruger til at implementere netværks- og sikkerhedsprotokoller. Opdateringer forbedrer pålidelighed og funktionalitet af routeren, så det er godt at sørge for, at du har den nyeste.',
'gtUpdateNoPower' : 'Vi opdaterer din router med den nye firmware. Sluk ikke, mens det er i gang.',
'p320t003' : 'Det vil tage omkring tre minutter. Status for opdatering:',
'gtFirmwareRestart' : 'Det er nødvendigt at genstarte din router, nu da firmwaren er blevet installeret.',
'p342t003' : 'fra listen med trådløse netværk for at komme videre.',
'errorSSIDEmpty' : 'Angiv et navn på dit trådløse netværk.',
'errorSSIDTooLong' : 'Netværksnavnet skal være mindre end 32 tegn.',
'errorSSIDInvalidChars' : 'Netværksnavnet må kun indeholde bogstaver, tal, tegnsætning og mellemrum.',
'errorWEPPasswordInvalidChars' : 'Netværksnavnet må kun indeholde tal og bogstaverne A-F.',
'errorWEPPasswordInvalidLength' : 'Netværksnavnet skal være 10 eller 26 tegn langt.',
'errorWEPPasswordEmpty' : 'Indtast en adgangskode for at sikre dit trådløse netværk.',
'errorWPAPasswordInvalidChars' : 'Adgangskoden til dit netværk må kun indeholde bogstaver, tal, tegnsætningstegn og mellemrum.',
'errorWPAPasswordInvalidLength' : 'Adgangskoden til dit netværk skal være 8 eller -63 tegn langt.',
'errorWPAPasswordEmpty' : 'Indtast en adgangskode for at sikre dit trådløse netværk.',
'errorGenericCommitError' : 'Der opstod en fejl.  Ret indstillingerne nedenfor og prøv igen.',
'p400t006' : 'Adgangskode:',
'p450t006' : 'Adgangskode: ',
'p451t006' : 'Adgangskode: ',
'p500t007' : 'Udfør registrering',
'p500t008' : 'Registrer senere',
'p700t011' : 'PPTP DSL connection',
'errIpAddressEmpty' : 'IP-adressen må ikke være tom.',
'errSubnetMaskEmpty' : 'Undernetmasken må ikke være tom.',
'errSubnetMaskInvalid' : 'Undernetmasken ligner ikke en undernetmaske. Kontrollér venligst tallet.',
'errDefaultGatewayEmpty' : 'Standardgateway-adressen må ikke være tom.',
'errDNSServerEmpty' : 'DNS-serveradressen må ikke være tom.',
'1781' : '',
'1782' : '',
'1783' : '',
'7102' : 'Belkin Intellistream prioriterer høj båndbredde og tjenester med lav latenstid, såsom stemme, video og spil for den bedst mulige oplevelse online.',
'7103' : 'Intellistream skal have kendskab til din forbindelseshastighed.',
'7104' : 'Internetforbindelse vil blive midlertidigt afbrudt under testen.',
'7105' : 'Internetforbindelse er midlertidigt afbrudt under testen.',
'7106' : 'Kør en hastighedstest',
'7107' : 'Hastighedstest',
'7108' : 'Indtast manuelt',
'7109' : 'Ping',
'7110' : 'Download<br> hastighed',
'7111' : 'Upload<br>hastighed',
'7112' : 'Kører...',
'7113' : 'Fuldført.',
'7114' : 'Der opstod fejl under testen.',
'7115' : 'Indtast mellem tallet 0,1-100.',
'7116' : 'Indtast mellem tallet 0,1-1000.',
'7117' : 'Kun mellem 0,1-100.',
'7118' : 'Med din høje upload-hastighed vil Intellistream kun prioritere din download-hastighed.',
'7119' : 'Med din høje download-hastighed vil Intellistream kun prioritere din upload-hastighed.',
'7120' : 'Intellistream behøver ikke være aktiveret med dine højre internethastigheder.',
'7121' : 'Optaget d.',
'7122' : 'Manuelt optaget d.',
'7123' : 'Så aktiveres Intellistream:',
'7124' : 'Intellistream er aktiveret.',
'7125' : 'Intellistream er i øjeblikket deaktiveret.',
'7126' : 'Manuel indstilling',
'gtBBSTitle' : 'Velkommen til Belkin routerinstallation',
'gtBack' : 'Tilbage til dashboard',
'Support4t036' : 'Læs alt om det.',
'Support4t037' : 'Gå til den følgende URL på en enhed, som er tilsluttet internettet, og lær, hvordan du selv kan løse problemet: <STRONG>www.belkin.com/support/asdlkj</STRONG>',
'gtReadHelp' : 'Gå til <STRONG>http://belk.in/NLk29H</STRONG> på en enhed, som har forbindelse til internettet',
'Support5t014' : 'Læs alt om det.',
'p1200t001' : 'En lidt mere sikkerhed.',
'p1200t002' : 'Du kan yderligere beskytte din router ved at låse instrumentbrættet med en adgangskode.',
'errsetempt' : 'Indtast en adgangskode.',
'errorpwdEmpty' : 'Indtast din adgangskode.',
'errorpwdError' : 'Din adgangskode er ikke korrekt.',
'60' : 'Dubleret administrator',
'61' : 'Denne enhed bliver administreret af',
'62' : 'i øjeblikket.',
'gtDisconnected' : 'Afbrudt',
'dft005' : 'Belkin Hjælp-center',
'dhToggleBand' : 'Vis 5.0Ghz',
'419' : 'sekunder tilbage.',
'422' : 'Gendannede indstillinger fuldført',
'423' : 'Den gendannede fil er ikke den korrekte type for denne enhed. Gendannelse mislykkedes. Hent den rigtige fil og prøv igen',
'533' : 'Hvis din router begynder at fungere forkert, kan det blive nødvendigt at genstarte routeren. Genstart af routeren vil ikke slette dine indstillinger.',
'1200' : 'Anvender ændringer. Vent venligst.......',
'1386' : 'Opgraderingsfilen er ikke den korrekte type eller version for denne enhed. Opgraderingen lykkedes ikke. Hent den rigtige fil og prøv igen',
'2053' : 'Ændringerne er blevet anvendt.',
'2054' : 'Opdatering af firmware lykkedes',
'766' : 'De undernetmasketal, som du indtastede, er ugyldige.',
'1356' : 'Forkert gateway IP. Det første tal skal være mellem 1 og 223.',
'1357' : 'Forkert gateway IP. Det andet og tredje tal skal være mellem 0 og 255.',
'1358' : 'Forkert gateway IP. Det sidste tal skal være mellem 1 og 254.',
'1360' : 'Forkert IP-adresse. Det første tal skal være mellem 1 og 223.',
'1354' : 'Forkert IP-adresse, det andet og tredje tal skal være mellem 0 og 255.',
'675' : 'Forkert IP-adresse. Det sidste tal skal være mellem 1 og 254.',
'403' : 'Den IP-adresse, som du indtastede, er ugyldig.',
'760' : 'IP-adresse',
'1760' : 'Nægt alle',
'395' : 'Enten har du ikke indtastet alle tallene eller nogle af de indtastede tal er ugyldige. Tallet i hvert felt skal være mellem 0 og 255.',
'1395' : 'Ikke konfigureret',
'1281' : 'WAN IP kan ikke dække LAN-sideundernettet.',
'641' : 'Enten har du ikke indtastet alle IP-tallene eller nogle af de indtastede tal er ugyldige. Tallene skal være mellem 0 og 255.',
'errUsernameTooLong' : 'Dit brugernavn skal være kortere end 64 tegn.',
'errUsernameInvalid' : 'Dit brugernavn må kun indeholde bogstaver, tal, tegnsætningstegn og mellemrum.',
'errPasswordEmpty' : 'Indtast din adgangskode.',
'errPasswordTooLong' : 'Din adgangskode skal være kortere end 64 tegn.',
'errPasswordInvalid' : 'Dit brugernavn må kun indeholde bogstaver, tal, tegnsætningstegn og mellemrum.',
'1398' : 'OK',
'1399' : 'Annuller',
'374' : 'Tændt',
'375' : 'Slukket',
'47' : 'Mere information',
'48' : 'Ryd ændringer',
'49' : 'Gem',
'96' : 'Aktiver',
'119' : 'Deaktiver',
'1298' : 'Luk',
'113' : '<< Tilføj',
'114' : 'Slet',
'128' : 'Opdater',
'318' : 'Deaktiveret',
'317' : 'Aktiveret',
'2006' : 'Ja',
'2007' : 'Nej',
'3300' : 'NYHED',
'50' : 'Opdater dynamisk DNS',
'98' : 'Med Dynamic domain name system (DDNS) kan du få adgang til dit hjemmenetværk gennem en konto, som er oprettet gennem en DDNS-udbyder. Opret din konto gennem Dyn.com (<a href=\'http://www.dyn.com\' target=\'_blank\'>www.dyn.com</a>) og aktivér DDNS-funktionen på din router. Du skal oprette en konto, før du bruger denne tjeneste.',
'100' : 'Brugernavn',
'101' : 'Adgangskode',
'102' : 'Domænenavn',
'742' : 'Indtast dit brugernavn',
'757' : 'Indtast din adgangskode!',
'822' : 'er ugyldig. Ret fejlen, før du fortsætter!',
'1307' : 'DynDNS',
'1308' : 'DDNS-service',
'1309' : 'DDNS status',
'1310' : 'Website',
'1315' : 'Automatisk opdatering af DDNS',
'1316' : 'opgradér hver',
'1317' : 'dag',
'1369' : 'Registreret',
'1380' : 'Forkert konfiguration',
'1381' : 'Tilslutning',
'1382' : 'Tilslutning mislykkedes',
'1383' : 'Logon mislykkedes',
'1384' : 'Registrering mislykkedes',
'1385' : 'Afregistreret',
'1751' : '',
'702' : 'DNS (Domain Name Service) oversætter domænenavne til IP-adresser for at registrere computertjenester og enheder over hele verden. Hvis din internetudbyder har givet dig en DNS-adresse til at bruge, skal du indtaste den her.',
'703' : 'Automatisk fra internetudbyder',
'704' : 'DNS-adresse',
'705' : 'Sekundær DNS-adresse',
'706' : 'DNS = Domain Name Server En server, som er placeret på internettet, og som oversætter URL-adresser (Uniform Resource Locator), som f.eks. www.belkin.com til IP-adresser.',
'707' : 'Du skal indtaste de DNS-indstillinger, som du får af din internetudbyder, hvis du ikke bruger den automatiske DNS-funktion.',
'780' : 'Specificér IP-adresse',
'823' : 'For at foretage DNS-ændringer, skal du først gå til {Website Filter} og vælge "No filters" (Ingen filtre).',
'55' : 'Firmwareinformation',
'56' : 'Der er ingen ny firmwareopdatering tilgængelig for denne router!',
'57' : 'Kan ikke oprette forbindelse til firmwareinformationsserveren. Kontrollér WAN-forbindelsen.',
'58' : 'Aktuel firmware:',
'59' : 'Download firmware:',
'64' : 'Routeren kan konfigureres til at begrænse adgang til internettet, e-mail eller andre netværkstjenester på bestemte dage og tidspunkter.',
'65' : 'IP',
'66' : 'Port',
'67' : 'Type',
'68' : 'Blokeringstid',
'69' : 'dag',
'70' : 'Tid',
'71' : 'Aktiver',
'72' : 'BEGGE',
'73' : 'Altid',
'74' : 'Bloker',
'75' : 'SØN',
'76' : 'MAN',
'77' : 'TIRS',
'78' : 'ONS',
'79' : 'TORS',
'80' : 'FRE',
'81' : 'LØR',
'82' : '0.5',
'83' : '1',
'84' : 'Enten har du ikke indtastet klientens IP-adressen eller nogle af de tal, som du har indtastet i IP-adressen, er ugyldige. Tallet i IP-indtastningsboksen skal være mellem 1 og 254.',
'85' : 'De indtastede porttal er ugyldige.',
'86' : 'Det sidste i portområdet skal være større end det tidligere.',
'87' : 'Det sidste i IP-området skal være større end det tidligere.',
'88' : 'Tallet i portindtastningsboksen skal være mellem 1 og 65535.',
'1311' : 'Der er ikke valgt en applikation',
'1312' : 'Der er fundet dublerede poster. Reglen eksisterer allerede.',
'1355' : 'Routerens LAN IP skal være udelukket fra IP-området.',
'90' : 'Dette lader dig specificere en enhed på dit netværk, som skal anbringes uden for din routers firewall, mens andre enheder forbliver bag firewallen.',
'91' : 'Computeren i DMZ er ikke beskyttet mod angreb.',
'92' : 'Hvis du vil sætte en computer i DMZ\'en skal du indtaste de sidste cifre af IP-adressen i feltet nedenfor og vælge "Aktiver". Klik på “Gem” for at ændringen kan træde i kraft.',
'93' : 'IP-adressen på virtuel DMZ-vært',
'97' : 'Statisk IP',
'95' : 'Privat IP',
'103' : 'Indtast IP-adressen før DMZ aktiveres',
'1232' : 'DMZ-værtens IP-adresse er ugyldig!',
'1253' : 'IP er uden for området [1-254]!',
'105' : 'Med denne funktion kan du oprette en liste med tilladte klienter. Når du aktiverer denne egenskab, skal du indtaste MAC-adressen på hver klient (computer) på netværket for at give netværksadgang til hver.',
'106' : 'Aktivering af MAC-adressefiltrering',
'107' : 'Liste med MAC adressefiltrering',
'108' : 'Bloker',
'110' : 'MAC-adresse',
'112' : 'Denne MAC er allerede blevet tilføjet.',
'669' : 'Ugyldig MAC-adresse, det er en null adresse',
'902' : 'Ugyldig MAC-adresse',
'903' : 'Ret den først!',
'904' : 'Den korrekte MAC-adresse skal være xx:xx:xx:xx:xx:xx og x er mellem 0-9 og A-F!',
'1062' : 'Bemærk: Du kan ikke slette MAC-adressen på den computer, som du bruger til at tage adgang til routerens administrative funktioner. (Den computer, som du bruger nu).',
'1602' : 'Brugerdefineret 1',
'117' : 'Din router er udstyret med en firewall, som vil beskytte dit netværk mod en lang række almindelige angreb, inkl. Ping of Death (PoD)- og Denial of Service (DoS)-angreb. Du kan om nødvendigt slå firewallfunktionen fra. Når du slår firewallbeskyttelsen fra, bliver dit netværk ikke efterladt helt udsat for angreb, men det anbefales, at du lader firewallen være slået til når som helst det er muligt.',
'118' : 'Aktiver/deaktiver firewall',
'121' : '<b>AVANCERET FUNKTION! </b> Du kan konfigurere routeren til ikke at reagere på et ICMP-ping (ping til WAN-porten). Dette giver en højere grad af sikkerhed.',
'1076' : 'Bloker ICMP-ping',
'1827' : 'Udskriv indstillinger for gæsteadgang',
'2702' : 'Gæsteadgang giver adgang til internettet via WAN-porten, men forhindrer gæster i at få adgang til det interne netværk, LAN og WLAN. Funktionen er kun understøttet på 2.4 GHz for at enkeltgøre brug.',
'279' : 'Indgående port',
'1828' : 'Cafe-stil (log på som gæst via et websted)',
'1619' : 'WPA/WPA2 PSK',
'1829' : 'WEP',
'1830' : 'Åbn',
'1831' : 'maksimum 32 tegn, ingen mellemrum',
'1617' : 'Adgangskode (PSK)',
'842' : 'Autentificering',
'845' : 'Krypteringsteknik',
'854' : 'Forhåndsdelt nøgle (PSK)',
'857' : 'Skjul PSK',
'855' : 'WPA-PSK (ingen server)',
'1335' : 'Netværksnavn (SSID)',
'1825' : '8 til 63 tegn',
'1826' : '10 hex-cifre',
'1834' : 'Netværksnavn',
'409' : 'Adgangskode',
'1835' : 'Hver gæst som opretter forbindelse til dit trådløse netværk skal bruge denne adgangskode.',
'1715' : 'Sikkerhedstype',
'1836' : 'Sådan oprettes forbindelse til det trådløse netværk:',
'1837' : 'Windows',
'1838' : '1. Højreklik på det trådløse netværksikon på Windows proceslinjen og vælg Vis tilgængelige trådløse netværk fra popup-menuen.',
'1839' : '2. Dobbeltklik på ',
'1840' : ' netværket.',
'1841' : '3. Et vindue kommer frem som beder om netværksnøglen. Indtast adgangskoden og klik på OK.',
'1842' : 'MAC OS X',
'1843' : '1. Klik på det trådløse netværksikon på menulinjen (øverst til højre) og vælg ',
'1844' : ' netværket.',
'1845' : '2. Et vindue kommer frem som beder om netværksnøglen. Indtast adgangskoden og klik på OK.',
'1832' : 'Cafe-stil',
'1833' : 'Åben tilstand',
'1201' : 'SSID kan ikke indstilles som NULL!',
'1812' : 'Adgangskoden længde er ugyldig. Den maksimale længde for adgangskoden er 63 og minimum længden er 8.',
'1824' : 'WPS-nøglen skal være 10 hex-cifre!',
'414' : 'Intern fejl !!',
'1811' : 'Gæsteadgang er en funktion, som lader brugere tage adgang til internettet, men begrænser adgang til hjemmenetværket. Bed netværksadministratoren om adgangskoden til gæsteadgang og indtast den nedenfor.',
'1813' : 'Fuldført! Du kan nu åbne en webbrowser og surfe internettet.',
'909' : '"IP-adresse" er routerens interne IP-adresse. For at få adgang til den avancerede konfigurationsgrænseflade, skal du indtaste denne IP-adresse i browserens adresselinje. Denne adresse kan om nødvendigt ændres. For at ændre IP-adressen, skal du indtaste den nye IP-adresse og klikke på "Gem". Den IP-adresse, som du vælger, skal være en IP, der ikke kan routes. Eksempel på en IP, der ikke kan routes, er: 192.168.2.1, 10.0.0.1, 172.16.0.1',
'917' : 'Der er ingen grund til at ændre undernetmasken. Det er muligt at ændre undernetmasken, hvis det er nødvendigt. Foretag kun ændringer på undernetmasken, hvis du har en specifik grund til at gøre det.',
'929' : 'DHCP-serverfunktionen gør det meget nemt at installere et netværk ved at anvise IP-adresser til hver computer i netværket. DHCP-serveren kan om nødvendigt slås fra. Hvis DHCP-serveren slås fra, er det nødvendigt, at du manuelt indstiller en statisk IP-adresse i hver computer på dit netværk. IP-puljen er det område af IP-adresser, som er beregnet til dynamisk tildeling til computere på netværket. Standarden er 2-200 (199 computere). Hvis du vil ændre dette tal, kan det gøres ved at indtaste en ny start- og slut-IP-adresse og klik på "Gem".',
'935' : 'Du kan indstille et lokalt domænenavn (netværksnavn) på dit netværk. Det er ikke nødvendigt at ændre denne indstilling, medmindre du har et særligt behov for at gøre det. Du kan kalde netværket lige hvad du har lyst til, såsom "MIT NETVÆRK".',
'962' : 'For at indstille routeren til at bruge PPPoE, skal du indtaste brugernavnet og adgangskoden, som du har fået fra internetudbyderen, i felterne. Lad feltet "Servicenavn" være tomt, hvis du ikke har et servicenavn eller ikke kender det. Klik på "Gem", når du har oplysningerne. Når du har gemt, viser statusindikatoren "Online", hvis routeren er installeret rigtigt.',
'967' : 'Visser internetudbydere bruger PPTP-protokollen til at forbinde abonnenter til centralkontoret. Dette kræver, at du indtaster yderligere indstillinger, som du skulle have fået fra din internetudbyder. Når først du har gemt dine ændringer, lyser internetstatusdioden grønt, hvis det er lykkedes.',
'971' : 'Vælg Telstra Bigpond-forbindelsestypen ved at klikke på "Gem".',
'982' : 'Afbryd efter X....',
'983' : 'Dette afbryder din router fra din internetudbyder efter en periode uden aktivitet. Brug denne funktion, hvis du betaler for din internetservice pr. minut.',
'htDDNS' : 'Hvad er DDNS?',
'htDNS' : 'Hvad er DNS?',
'htDMZ' : 'Hvad er DMZ?',
'htLAN' : 'Hvad kontrollerer LAN-indstillinger?',
'htWANMain' : 'Hvad er WAN-indstillinger?',
'htWANMAC' : 'Hvad er MAC-adressen?',
'htWAN_PPPOE' : 'PPPoE-indstillinger',
'htWAN_PPTP' : 'pPTP-indstillinger',
'htIPv6' : 'Hvad er IPv6?',
'htWifiID' : 'Hvad er netværksnavnet og kanalindstillinger?',
'htWifiIDContent' : 'Netværksnavnet kaldes et SSID (Service Set ID).  Alle klienterne på dit netværk skal kende SSID for at være i routerens netværk.',
'htWifiSec' : 'Hvad er Wi-Fi-sikkerhed?',
'htWifiSecContent' : 'Alle Belkin-routere leveres med Wi-Fi-sikkerhed aktiveret.  Wi-Fi-sikkerhed giver beskyttelse mod uautoriseret adgang til dit netværk.  Når sikkerhed er aktiveret, skal brugeren have en adgangskode for at få adgang til dit netværk.',
'htWifiWPS' : 'Hvad er WPS (Wi-Fi Protected Setup)?',
'htWifiWPSContent' : 'Dette er en valgfri metode, som er udviklet for at gøre det nemmere at konfigurere sikkerhedsaktiverede Wi-Fi-netværk i dit hjem eller på kontoret. Enheder uden WPS kan stadig føjes til dit netværk ved at vælge netværksnavnet og indtaste adgangskoden til netværket.',
'htWifiGuest' : 'Hvordan bruges gæsteadgang?',
'htWifiGuestContent' : 'Når det er aktiveret, vil gæsteadgang oprette et separat Wi-Fi-netværk, som stadig kan få forbindelse til internettet, men ikke andre enheder på dit netværk.',
'htAP' : 'Kan jeg bruge min router som et adgangspunkt?',
'htAPContent' : 'Belkin-routere kan indstilles til udelukkende at fungere som et adgangspunkt og forbigå alle router- og firewallfunktioner.  Konfiguration af din router som et adgangspunkt bruges almindeligvis for at tilføje trådløs adgang til et eksisterende kabelført netværk.',
'htQos' : 'Hvad er Belkin Intellistream?',
'htDLNA' : 'Belkin Media Server leveret af Twonky',
'htPortForward' : 'Hvad er videresendelse af port?',
'htPortForwardContent' : 'Med videresendelse af port kan fjerncomputere oprette forbindelse til et specifikt program eller tjeneste på dit lokale netværk. Du bruger f.eks. videresendelse af port til at køre en webserver (port 80) på dit netværk.  De fleste moderne programmer kræver ikke videresendelse af port. De kan automatisk konfigurere alle nødvendige porte.',
'htWanPing' : 'Hvad gør WAN-pingblokering?',
'htWanPingContent' : 'Det leverer sikkerhed på et højere niveau for at forhindre eksterne internetbrugere i at finde ud af, hvad din IP-adresse er. Dette sker ved ikke at besvare pings, som stammer uden for dit netværk.',
'htRestart' : 'Hvorfor genstarte min router?',
'htRestoreFC' : 'Hvad sker der ved at gendanne til fabriksstandarder?',
'htSaveSettings' : 'Hvorfor bør jeg gemme/sikkerhedskopiere mine indstillinger?',
'htRestoreSettings' : 'Hvad betyder gendannelse af mine tidligere indstillinger?',
'htSystem' : 'Hvad er systemindstillinger?',
'htSystemContent' : 'Du kan på denne side indstille forskellige grundlæggende routerindstillinger, herunder tidszone og administratoradgangskode.',
'htSelfHeal' : 'Hvad er selvreparation?',
'hLANSettings' : 'Denne side hjælper dig med at indstille nye forbindelser, lader dig aktivere/deaktivere DHCP og lader dig indstille routerens IP-adresse på dit lokale netværk.',
'htDHCPClientList' : 'Hvad er DHCP-klientliste?',
'htDHCPClientListContent' : 'Denne side viser IP-adressen, værtsnavn og MAC-adresse på hver enhed, som er tilsluttet dit netværk. Hvis der ikke er specificeret et værtsnavn til computeren, vil feltet være tomt. Klik på "Forny" for at opdatere listen.',
'hWebsiteFilters' : 'Dette giver beskyttelse mod usikre/upassende websteder. Webfiltre sorterer websteder ved at kontrollere webstedets navn på en liste med godkendte websteder.',
'hWANSettings' : 'Disse netværksindstillinger henviser til den forbindelse du har med din internetudbyder.   Vælg forbindelsestypen fra din internetudbyder på listen. ',
'htChannel' : 'Ligesom en radio bruger forskellige stationer, kan din router sende på adskillige forskellige kanaler for at kommunikere med enhederne på dit netværk. Det bedste valg er som regel at bruge "Auto".',
'3430' : 'IPv6 (Internet Protocol version 6) er en version af den IP (Internet Protocol), som er beregnet til at erstatte IPv4, som dirigerer næsten al internettrafik. Visse internetudbydere har næsten ikke flere IP-adresser tilbage. Med IPv6 kan flere enheder kommunikere på internettet ved at bruge større tal til at oprette IP-adresser.  Din internetudbyder kan oplyse dig, som du skal bruge IPv6.',
'3431' : 'Tilslutningstype',
'3432' : 'Auto-Config/DHCPv6 (standard)',
'3433' : 'Adresserne nedenfor er fra din internetudbyder. DHCPv6 leverer yderligere funktioner til at forbedre konnektivitet.',
'3434' : 'WAN',
'3435' : 'WAN-adresse',
'3436' : 'Gateway',
'3437' : 'LAN',
'3438' : 'Brug dette afsnit til at konfigurere routerens interne netværksindstillinger. Hvis du ændrer LAN IPv6-adressen her, skal du måske justere din computers netværksindstillinger for at få adgang til netværket igen.',
'3439' : 'LAN præfiks',
'3440' : 'Grænseflade-id',
'3441' : 'Link lokal',
'3442' : 'DNS',
'3443' : 'Dine IPv6 DNS standardindstillinger er fra din internetudbyder, hvis de er tilgængelige i WAN-routerens meddelelser eller DHCPv6-meddelelser.',
'3444' : 'Primær',
'3445' : 'Sekundær',
'3446' : 'PPPoE over IPv6',
'3447' : 'PPPoE (Point-to-Point Protocol over Ethernet) bruges primært af DSL-tjenester til at slutte et DSL-modem til internettet.',
'3448' : 'Login',
'3450' : 'skjul adgangskode',
'3451' : 'Brugernavn',
'3452' : 'Adgangskode',
'3453' : 'Servicenavn',
'3454' : '6to4-tunnel',
'3455' : 'Lader IPv6-pakker blive sendt over et IPv4-netværk uden behov for at konfigurere udtrykkelige tunneler. Denne forbindelsestype er velegnet, hvis din internetudbyder ikke støtter IPv6.',
'3456' : 'Ekstern 6to4 relay-router',
'3457' : 'Pass-through',
'3458' : 'Enheder, som er tilsluttet din router, kan kommunikere med hinanden ved hjælp af oprindelige IPv6-pakker. IPv6-pakker på LAN bliver automatisk sendt til alle LAN-grænseflader (ethernet-porte og både 2.4 GHz og 5 GHz trådløse netværk).',
'3459' : 'Når pass-through er aktiveret, bliver IPv6-pakker også kopieret til WAN-grænsefladen. (Dette opretter en direkte, ikke-sikker forbindelse til internettet).',
'3460' : 'Kontakt din internetudbyder for oplysninger om deres support til IPv6.',
'3461' : 'Statisk IPv6',
'3462' : 'Statisk IPv6-adressering bliver normalt ikke benyttet, da det kan være svært at administrere. Statisk IPv6 bør ikke benyttes med enheder, som opretter forbindelse til flere netværk, såsom bærbare pc\'er eller mobilenheder.',
'3463' : 'Kun lokal pass-through',
'3464' : 'IPv6 WAN-pass-through er deaktiveret. Alle lokale enheder på dit LAN og WiFi kan stadig kommunikere med hinanden direkte, men routeren sender ikke nogen IPv6-pakker til eller fra internettet, ligesom der heller ikke bliver svaret direkte på nogen IPv6-pakker.',
'3465' : 'Din internetudbyder tilbyder ikke IPv6-konnektivitet. Kontakt dem for information om IPv6-support eller for at etablere konnektivitet.',
'3466' : 'Kun lokal pass-through er automatisk indstillet til dine enheden, så de kan sende IPv6-pakker blandt hinanden. Den anden mulighed er at bruge "6to4 Tunnel" for at få adgang til internettet via en IPv4-forbindelse.',
'3467' : 'Hvert felt bør indeholde fire hexadecimale cifre (0-9 og a-f).',
'3468' : 'Angiv en ikke-multicast adresse. Multicast-adresser starter som regel med ff.',
'3469' : 'Præfikslængden bør være 1-127. Præfikslængden er som regel 64, 56 eller 48.',
'3470' : 'Der er ingen IPv4-forbindelse.',
'3471' : 'Disse DNS-indstillinger tilsidesættes af dine Forældrekontrol',
'3472' : 'Webstedsfiltre',
'3473' : 'Vælg venligst PPPoE i Internet WAN > Forbindelsesindstillinger før PPPoE vælges over IPv6.',
'3474' : 'Forbindelsen til internettet mistet. Kontrollér din WAN-forbindelsestype eller kontakt din internetudbyder.',
'3475' : 'Standard DNS leveret fra din internetudbyder',
'gtTryManu' : 'Hvis du kender din forbindelsestype, kan du ',
'gtSetManual' : 'konfigurere den manuelt ',
'2100' : 'Adgang nægtet. Indtast routerens adgangskode for at få midlertidig adgang til den blokerede side eller servicer.',
'2101' : 'Landing Page',
'2102' : 'UDFØR',
'354' : 'Denne side viser IP-adressen, værtsnavn og MAC-adresse på hver computer, som er tilsluttet dit netværk. Hvis der ikke er specificeret et værtsnavn til computeren, vil feltet Værtsnavn være tomt. Tryk på "Opdater" vil opdatere listen.',
'355' : 'IP-adresse',
'356' : 'Værtsnavn',
'357' : 'MAC-adresse',
'370' : 'Denne side hjælper dig med at indstille nye forbindelser, lader dig aktivere/deaktivere DHCP og lader dig indstille routerens IP-adresse på dit lokale netværk.',
'371' : 'IP-adresse',
'372' : 'Undernetmaske',
'373' : 'DHCP-server',
'378' : 'DHCP-serverfunktionen gør det meget nemt at installere et netværk ved at anvise IP-adresser til hver computer i netværket. Det er ikke nødvendigt at foretage ændringer her.',
'379' : 'IP-gruppens startadresse',
'380' : 'IP-gruppens slutadresse',
'381' : 'Rettighedstid',
'382' : 'Altid',
'383' : '1/2 time',
'384' : '1 time',
'385' : 'To timer',
'386' : 'Halv dag',
'387' : 'En dag',
'388' : 'To dage',
'389' : 'En uge',
'390' : 'To uger',
'391' : 'Varighed, hvor DHCP-serveren vil reservere IP-adressen for hver computer.',
'392' : 'Lokalt domænenavn',
'393' : 'Valgfrit',
'394' : 'En funktion, som lader dig anvise et navn på dit netværk.',
'397' : 'IP-gruppen skal være i den same undermaske som gateway IP-adressen.',
'398' : 'Slut-IP-adressen skal være større end start-IP-adressen.',
'399' : 'LAN IP-adressen må ikke være i DHCP-adressegruppen.',
'400' : 'Den IP-adresse, som du vælger, skal være en IP, der ikke kan routes.',
'401' : 'Forkert IP-adresse. Det første tal kan ikke være 127 eller 0',
'404' : 'Ændr tekstboksen Adresse i din browsers statuslinje manuelt til den nye LAN-adresse.',
'406' : 'Er du sikker på, du vil ændre LAN IP-adressen?',
'416' : '192.168.y.x. (hvor y er et vilkårligt tal mellem 0 og 255, og x er et vilkårligt tal mellem 1 og 254).',
'417' : '10.y.y.x. (hvor y er et vilkårligt tal mellem 0 og 255, og x er et vilkårligt tal mellem 1 og 254).',
'418' : '172.z.y.x (hvor z er et vilkårligt tal mellem 16 og 31, y er et vilkårligt tal mellem 0 og 255, og x er et vilkårligt tal mellem 1 og 254).',
'713' : 'Ugyldigt lokalt domænenavn:',
'1228' : 'IP-gruppens startadresse er ugyldig!',
'1229' : 'IP-gruppens slutadresse er ugyldig!',
'1240' : 'LAN IP-adresse er ugyldig!',
'3' : 'Login',
'408' : 'Du skal logge på med en adgangskode, før du kan ændre indstillingerne. Hvis du endnu ikke har indstillet en speciel adgangskode, skal du lade dette felt være tomt og klikke på "Send".',
'410' : 'Standard = lad feltet være tomt',
'412' : 'Send',
'1371' : 'Forkert adgangskode',
'1372' : 'Godkend din adgangskode og forsøg igen.',
'124' : 'Routeren beholder en logfil med al aktiviteten i routeren, såsom computere, som har logget på og af og evt. forsøg fra internettet på at få adgang til routeren.',
'125' : 'Logfil',
'126' : 'Gem',
'127' : 'Slet',
'1302' : 'Systemlogfil',
'1303' : 'Firewall-logfil',
'8' : 'LAN-indstillinger',
'9' : 'Lokale netværksindstillinger',
'10' : 'Tilsluttede enheder',
'2500' : 'Statisk routing',
'11' : 'Internet WAN',
'335' : 'Tilslutningstype',
'690' : 'Dynamisk',
'692' : 'Statisk',
'694' : 'PPPoE',
'696' : 'PPTP',
'698' : 'Telstra BigPond/OptusNet Cable',
'42' : 'IPV6',
'43' : 'IPv6-forbindelse',
'13' : 'DNS',
'14' : 'MAC-adresse',
'16' : 'WiFi',
'17' : 'Netværksnavn',
'18' : 'Sikkerhed',
'803' : '128bit WEP',
'804' : '64bit WEP',
'1296' : 'WPA/WPA2-Personal (PSK)',
'1297' : 'WPA/WPA2-Enterprise (RADIUS)',
'805' : 'WPA (med Radius-server)',
'1319' : 'Wi-Fi-beskyttet installation',
'777' : 'Brug som adgangspunkt',
'833' : 'MAC-adressekontrol',
'1613' : 'Gæsteadgang',
'1850' : 'Forældrekontrol',
'1851' : 'Webstedsfiltre',
'1710' : 'Adgangskontrol',
'20' : 'Medier',
'7151' : 'Trafikdiagram',
'7000' : 'Medieserver',
'1780' : 'Torrent Mate',
'1790' : 'Valgfri software',
'23' : 'Firewall',
'24' : 'Videresendelse af port',
'25' : 'Klient IP-filtre',
'26' : 'MAC adressefiltrering',
'27' : 'DMZ',
'41' : 'DDNS',
'28' : 'Blokering af WAN ping',
'29' : 'Sikkerhedslog',
'30' : 'Funktioner',
'32' : 'Genstart routeren',
'34' : 'Gendan fabriksstandarder',
'35' : 'Gem/sikkerhedskopiér indstillinger',
'36' : 'Gendan tidligere indstillinger',
'37' : 'Firmwareopdatering',
'38' : 'Systemindstillinger',
'39' : 'Selvreparation',
'1900' : 'Registrering',
'132' : 'Det indgående portområde er ikke korrekt.',
'133' : 'Det private portområde er ikke korrekt.',
'134' : 'Med denne funktion kan du føre eksterne (internet) opkald til tjenester, såsom en webserver (port 80), FTP-server (port 21) eller andre programmer gennem din router til dit interne netværk.',
'276' : 'Slet forekomst',
'277' : 'Tilføj',
'278' : 'Beskrivelse',
'280' : 'Type',
'281' : 'Privat IP-adresse',
'282' : 'Privat port',
'376' : 'alle',
'411' : 'Slet',
'648' : 'Forkert tegn',
'672' : 'Forkert nummer! Skal være mellem 1..65535',
'905' : 'Alle indtastninger er fyldte.\nFjern nogle indtastninger og prøv igen.',
'906' : 'Ønsker du at rydde indtastningen?',
'907' : 'Ønsker du at rydde alle indtastninger?',
'1241' : 'WAN IP-adresse er ugyldig!',
'1250' : 'Porten er ugyldig!',
'1362' : 'Beskrivelse er tom',
'1601' : 'Auto',
'2055' : 'Indgående portintervalbelægning!!',
'2056' : 'Privat portintervalbelægning',
'3310' : 'Intellistream',
'3311' : 'Optimér din internetforbindelse.',
'3312' : 'Medieserver',
'3313' : 'Del medier blandt enheder på netværket.',
'3314' : 'Forældrekontrol',
'3315' : 'DNS-sikkerhed filtrerer for internetsikkerhed',
'3316' : 'IPv6-forbindelse',
'3317' : 'Dit netværk er nu IPv6-kompatibelt',
'1852' : 'Dette giver beskyttelse mod usikre/upassende websteder. Webfiltre sorterer websteder ved at kontrollere webstedets navn på en liste med godkendte websteder.',
'1854' : 'Filtreringsfunktioner',
'1856' : 'Intet filter',
'1858' : 'Blokér ondskabsfulde websteder',
'1859' : 'Blokér malware, phishing og svindel-websteder',
'1860' : 'Blokér ondskabsfulde og pornografiske websteder',
'1861' : 'Blokerer malware, phishing, svindel-websteder samt websteder, som indeholder seksuelt indhold.',
'1862' : 'Blokér ondskabsfulde, pornografiske og andre ikke-familievenlige websteder',
'1863' : 'Blokerer malware, phishing og svindel-websteder samt websteder, som indeholder seksuelt indhold, pornografisk indhold, abort, alkohol, tobak, kriminalitet, cult, stoffer, spil, had, selvmord eller vold.',
'1864' : 'For at ændre din DNS-adresse skal du fortsætte til Internet WAN > {DNS}',
'7152' : 'Skemaet herunder viser både WAN udgående og indgående trafik, som er prioriteret i forskellige kategorier. Skemaer viser de sidste 10 minutter (opdaterer automatisk hver 5. sekund).',
'7154' : 'Trafikforklaring',
'7155' : 'Indgående trafik',
'7156' : 'Udgående trafik',
'7157' : 'For at aktivere denne funktion skal Intellistream aktiveres',
'7158' : 'her',
'7159' : '.',
'7160' : 'Netværkskonnektivitet og -funktion',
'7161' : 'Stemme, videochat og spil',
'7162' : 'Web og webvideo',
'7163' : 'E-mail og VPN',
'7164' : 'Downloads, torrent og andet',
'7170' : 'Byte i alt pr. sekund',
'7174' : 'Tidspunkt/time:minutter',
'326' : 'Lokalnetværk',
'327' : 'LAN/WLAN MAC',
'332' : 'DHCP-server',
'333' : 'Internetindstillinger',
'334' : 'WAN MAC-adresse',
'337' : 'WAN IP',
'338' : 'Standard gateway',
'339' : 'DNS-adresse',
'gtGuestName' : 'Gæste SSID',
'gtGuestKey' : 'Gæstenøgle',
'347' : 'Du skal logge på, før du kan ændre indstillinger.',
'2022' : 'Kun modem',
'2031' : 'Opret forbindelse',
'2032' : 'Afbryd',
'2033' : 'Støjmargen',
'2034' : 'Downstream',
'2035' : 'Upstream',
'2036' : 'Dæmpning (dB)',
'2037' : 'Udgangseffekt (dBm)',
'2038' : 'Datahastighed (Kbps)',
'tDashboard' : 'Velkommen til din Belkin-routers dashboard!',
'rtFeature' : 'Funktioner',
'rtLink' : 'Routerlinks',
'p1310t001' : 'Detaljer om forbindelse',
'p1310t002' : 'Test forbindelsen igen',
'p1310t003' : 'Seneste kontrol',
'p1310t004' : 'Downloadhastighed',
'p1310t005' : 'Uploadhastighed',
'p1000t001' : 'Tilsluttede enheder',
'p1000t002' : 'Vis alle',
'2501' : 'Indtast de følgende konfigurationsparametre',
'2502' : 'Netværksadresse',
'2503' : 'Undernetmaske',
'2504' : 'Gateway',
'396' : 'Det undernetmasketal, som du indtastede, er ugyldigt.',
'1231' : 'Gateway er ugyldig!',
'1361' : 'Forkert IP-adresse. Det første tal skal være mellem 1 og 254.',
'1800' : 'IP-adressen og undernetmasken passer ikke sammen.',
'Support1t011' : 'Læs alt om det.',
'Support2t011' : 'Læs alt om det.',
'Support2t012' : 'Gå til den følgende URL på en enhed, som er tilsluttet internettet, og lær, hvordan du selv kan løse problemet: <STRONG>www.belkin.com/support/asdlkj</STRONG>',
'Support3t011' : 'Læs alt om det.',
'Support3t012' : 'Gå til den følgende URL på en enhed, som er tilsluttet internettet, og lær, hvordan du selv kan løse problemet: <STRONG>www.belkin.com/support/asdlkj</STRONG>',
'Support6t036' : 'Læs alt om det.',
'425' : 'Dette vil føre routeren tilbage til de originale indstillinger. Vi anbefaler, at du <a href="ut_save.html">gemmer/sikkerhedskopierer dine indstillinger</a>, før du gendanner de originale indstillinger. Når du gemmer din routers konfiguration, kan du gendanne den, hvis dine indstillinger går tabt eller bliver ændret.',
'426' : 'WARNING: All your settings will be lost!\nAre you sure you want to do this?” (Advarsel: Alle dine indstillinger vil gå tabt. Er du sikker på, du vil fortsætte?)',
'427' : 'Gendannelse til standardindstillingerne vil vare op til $s sekunder. Sluk ikke for routeren under denne proces.',
'428' : 'Vil ikke gendanne fabriksstandarder. Ingen indstillinger vil gå tabt!',
'429' : 'Gendan standarder',
'301' : 'Dette genstarter din router hver uge for at give dig et netværk uden problemer.',
'302' : 'Initialisér automatisk min router',
'303' : 'Indstil dage',
'304' : 'Stil tiden',
'527' : 'Med dette kan indstille routerens indstillinger til enhver konfiguration, som du allerede har gemt.',
'528' : 'Gendan',
'529' : 'Indtast navnet på den fil, som indeholder sikkerhedskopieringsindstillingerne.',
'530' : 'Vil du fortsætte og gendanne indstillinger?',
'531' : 'Når indstillingerne er gendannet, reagerer routeren måske ikke på kommandoer i op til et minut.\n\nDet er normalt. Sluk ikke for enheden i det tidsrum.',
'451' : 'Når du gemmer din routers aktuelle konfiguration, kan du gendanne den, hvis dine indstillinger går tabt eller bliver ændret. Vi anbefaler, at du gemmer dine indstillinger, før du foretager firmwareopdateringer.',
'539' : 'Gem',
'130' : 'Enten har du ikke indtastet alle IP-adresserne eller nogle af de tal, som du har indtastet, er ugyldige. Tallet i hver IP-adresseindtastningsfelt skal være mellem 1 og 254.',
'541' : 'Administratoradgangskode:',
'542' : 'Routeren sendes UDEN en indlæst adgangskode. Hvis du ønsker at tilføje en adgangskode for ekstra sikkerhed, kan du indstille den her.',
'543' : 'Indtast den aktuelle adgangskode',
'544' : 'Indtast den nye adgangskode',
'545' : 'Godkend ny adgangskode',
'546' : 'Login timeout',
'547' : '(1-99 minutter)',
'548' : 'Tidspunkt og tidszone:',
'549' : 'januar',
'550' : 'Indstil din tidszone. Markér dette felt, hvis du er i et område, som skifter til sommertid.',
'551' : 'Tidszone',
'606' : 'Sommertid',
'607' : 'Justér automatisk til sommertid',
'608' : 'Fjernadministration:',
'609' : 'AVANCERET FUNKTION!',
'610' : 'Med Fjernadministration kan du foretage ændringer af routerens indstillinger fra hvor som helst på internettet. Før du aktiverer denne funktion,',
'611' : 'SKAL DU SØRGE FOR, AT DU HAR INDSTILLET ADMINISTRATORADGANGSKODEN.',
'642' : 'Aktivering af ekstern administration øger din sikkerhedsrisiko. Aktivér det kun i korte perioder, når det er nødvendigt. Sluk det, når du ikke bruger det, og indstil en adgangskode.',
'612' : 'Alle IP-adresser kan fjernadministrere routeren.',
'613' : 'Kun denne IP-adresse kan fjernadministrere &nbsp;&nbsp;&nbsp; routeren',
'614' : 'Aktiver/deaktiver ekstern administration',
'615' : 'Den anviste port er blevet brugt i virtuel server.',
'616' : 'Den anviste port er i konflikt med den aktuelle WAN IP-adresse.',
'617' : 'UPNP-aktivering:',
'618' : 'Lader dig slå UPnP-funktionen på routeren til eller fra. Hvis du bruger programmer, som understøtter UPnP, vil aktivering af UPnP lade disse programmer konfigurere routeren automatisk.',
'619' : 'UPNP Aktiver/deaktiver',
'620' : 'Aktivering af automatisk firmwareopdatering:',
'621' : 'Lader dig automatisk søge efter tilgængelighed af firmwareopdateringer til din router.',
'622' : 'Aktiver automatisk firmwareopdatering / &nbsp;&nbsp;&nbsp;Deaktiver',
'623' : 'Den aktuelle adgangskode er ugyldig',
'624' : 'De nye adgangskoder, du har angivet, er ikke identiske. Forsøg igen.',
'626' : 'Adgangskoden længde er ugyldig. Den maksimale længde for adgangskoden er 12 og minimum længden er 3.',
'628' : 'Det anbefales kraftigt, at du indstiller din administratoradgangskode.',
'629' : 'Primære NTP-server',
'630' : 'Sekundære NTP-server',
'640' : 'Fjernadgangsport',
'738' : 'Den inaktive periode for de, som du indtastede, er ugyldig. Tallet skal være et heltal mellem 1-99.',
'796' : 'Med aktivering af Turbo-tilstand kan routeren eller adgangspunktet bruge frame-bursting til at få den maksimale overførsel fra routeren eller adgangspunktet til 802.11g-klienter. Turbo-tilstand vil fungere med 802.11g-klienter, som understøtter turbo-tilstand. Belkin 802.11g klienter, som bruger den nyeste driver, vil understøtte turbo-tilstand. Klienter, som ikke understøtter turbo-tilstand, vil fungere normalt, hvis turbo-tilstand er aktiveret.',
'1282' : 'Februar',
'1283' : 'Marts',
'1284' : 'April',
'1285' : 'Maj',
'1286' : 'Juni',
'1287' : 'Juli',
'1288' : 'August',
'1289' : 'September',
'1290' : 'Oktober',
'1291' : 'November',
'1292' : 'December',
'1373' : 'Australien',
'1374' : 'New Zealand',
'1375' : 'Nordamerika',
'1376' : 'Europa',
'1377' : 'Stillehavsområdet',
'2300' : '(GMT-12:00) Enewetak, Kwajalein',
'2301' : '(GMT-11:00) Midwayøerne, Samoaøerne',
'2302' : '(GMT-10:00) Hawaii',
'2303' : '(GMT-09:00) Alaska',
'2304' : '(GMT-08:00) Pacific Time (USA og Canada); Tijuana',
'2305' : '(GMT-07:00) Arizona',
'2306' : '(GMT-07:00) Mountain Time (USA og Canada)',
'2307' : '(GMT-06:00) Central Time (USA og Canada)',
'2308' : '(GMT-06:00) Mexico City',
'2309' : '(GMT-06:00) Tegucigalpa',
'2310' : '(GMT-06:00) Saskatchewan',
'2311' : '(GMT-05:00) Bogota, Lima, Quito',
'2312' : '(GMT-05:00) Eastern Time (USA og Canada)',
'2313' : '(GMT-05:00) Indiana (øst)',
'2314' : '(GMT-04:00) Atlantic Time (Canada)',
'2315' : '(GMT-04:00) Caracas, La Paz',
'2316' : '(GMT-04:00) Santiago',
'2317' : '(GMT-03:00) Newfoundland',
'2318' : '(GMT-03:00) Brasilia',
'2319' : '(GMT-03:00) Buenos Aires, Georgetown',
'2320' : '(GMT-02:00) Mid-Atlantic',
'2321' : '(GMT-01:00) Azores, Cape Verde Is.',
'2322' : '(GMT) Casablanca, Monrovia',
'2323' : '(GMT) Greenwich Mean Time: Lissabon, London, Edinburgh',
'2324' : '(GMT) Greenwich Mean Time: Dublin',
'2325' : '(GMT+01:00) Amsterdam, Berlin, Bern, Rom',
'2326' : '(GMT+01:00) Stockholm, Wien, Beograd',
'2327' : '(GMT+01:00) Bratislava, Budapest, Lubljana',
'2328' : '(GMT+01:00) Prag, Bruxelles, København, Madrid',
'2329' : '(GMT+01:00) Paris, Sarajevo, Skopje',
'2330' : '(GMT+01:00) Warsaw, Zagreb',
'2331' : '(GMT+02:00) Athen, Istanbul, Minsk, Vilnius, Sofia',
'2332' : '(GMT+02:00) Bukarest',
'2333' : '(GMT+02:00) Cairo',
'2334' : '(GMT+02:00) Harare, Pretoria',
'2335' : '(GMT+02:00) Helsinki, Riga, Tallinn',
'2336' : '(GMT+02:00) Israel',
'2337' : '(GMT+03:00) Baghdad, Kuwait, Nairobi, Riyadh',
'2338' : '(GMT+03:00) Moskva, Sankt Petersborg, Volgograd, Kazan',
'2339' : '(GMT+03:00) Tehran',
'2340' : '(GMT+04:00) Abu Dhabi, Muscat, Tbilisi',
'2341' : '(GMT+04:00) Kabul',
'2342' : '(GMT+05:00) Islamabad, Karachi, Ekaterinburg',
'2343' : '(GMT+05:30) Delhi',
'2344' : '(GMT+06:00) Almaty, Dhaka',
'2345' : '(GMT+07:00) Bangkok, Jakarta, Hanoi',
'2346' : '(GMT+08:00) Beijing, Chongqing, Urumqi',
'2347' : '(GMT+08:00) Hongkong, Perth, Singapore, Taipei',
'2348' : '(GMT+09:00) Toyko, Osaka, Sapporo',
'2349' : '(GMT+09:00) Seoul',
'2350' : '(GMT+09:30) Adelaide, Darwin',
'2351' : '(GMT+10:00) Brisbane',
'2352' : '(GMT+10:00) Canberra, Melbourne, Sydney',
'2353' : '(GMT+10:00) Hobart',
'2354' : '(GMT+10:00) Guam, Port Moresby',
'2355' : '(GMT+11:00) Magadan, Solamon, Ny Kaledonien',
'2356' : '(GMT+12:00) Wellington, Auckland',
'2357' : '(GMT+12:00) Fiji',
'2358' : '(GMT+13:00) Nuku`alofa.',
'2370' : 'søn.',
'2371' : 'man.',
'2372' : 'tirs.',
'2373' : 'ons.',
'2374' : 'tors.',
'2375' : 'fre.',
'2376' : 'lør.',
'2401' : 'ECO-tilstand',
'2402' : 'Dæmp frontpanelets lysdioder',
'2403' : 'Deaktivér radio fra',
'2404' : 'undtagen',
'2405' : 'Med denne funktion kan du dæmpe lysdioderne foran på routeren for at spare strøm. Du kan også deaktivere den trådløse radio på forudbestemte tidspunkter.',
'2406' : 'Starttidspunktet kan ikke være senere end sluttidspunktet!',
'322' : 'Firmwareversion',
'431' : 'Fra tid til anden udgiver Belkin måske nye versioner af routerens funktionsprogrammering. Disse opdateringer indeholder forbedringer og rettelser til din router.',
'432' : '<b>BEMÆRK:</b> Du bør <a href="ut_save.html">sikkerhedskopiere dine aktuelle indstillinger</a>, før du opdaterer til en ny version af firmwaren.',
'433' : 'Klik her',
'434' : 'for at gå til siden Gem/sikkerhedskopiér aktuelle indstillinger.',
'435' : 'Søg efter ny firmwareversion',
'436' : 'Søg efter firmware',
'437' : 'Opdatér firmware',
'438' : 'Opdater',
'439' : 'Angiv opgraderingsfilens placering. Du skal enten indtaste filens sti og filnavn eller klik på "Gennemse" for at gå til filens placering.',
'440' : 'Er du sikker på, du vil fortsætte med opgraderingen?',
'441' : 'I slutningen af opgraderingen reagerer routeren måske ikke på kommandoer i op til et minut. Dette er normalt. Routeren må ikke slukkes eller genstartes i det tidsrum.',
'1198' : 'Firmwareopdatering i gang.',
'534' : 'Genstart routeren',
'535' : 'Er du sikker på, du vil genstarte routeren? Genstart af routeren vil ikke påvirke din konfiguration.',
'536' : 'Vent op til $s sekunder, mens routeren genstarter. Sluk ikke for routeren, før gendannelsen er færdig.',
'7001' : 'Nyd personlig musik, billeder og videoer via enhver DLNA-enhed, som er tilsluttet dit netværk. Leveret af Twonky.',
'7002' : 'DLNA-server',
'7003' : 'Servernavn',
'7004' : 'Delte drev:',
'7005' : 'Klar',
'7006' : 'Indekserer...',
'7007' : 'Betjener:',
'7008' : 'videoer',
'7009' : 'sange',
'7010' : 'billeder',
'7011' : 'Ikke delt med netværket.',
'7012' : 'Ingen USB-drev er tilsluttet routeren.',
'7016' : 'Forny indeks',
'7017' : 'Indtast et navn til medieserveren',
'7018' : 'Tegn ikke tilladt',
'7019' : 'Du har flere medier, end din router kan indeksere, så vi betjener de første',
'7020' : 'elementer',
'7021' : 'Twonky er en serie med digitale softwareprodukter til personligt brug, som er udviklet af PacketVideo Corporation (PV).',
'7022' : 'Kan ikke indeksere skrivebeskyttet drev.',
'7023' : 'MB',
'7024' : 'GB',
'7025' : 'TB',
'7026' : 'video',
'7027' : 'sang',
'7028' : 'billede',
'770' : 'Brug kun denne indstilling for Bigpond Cable- og OptusNet Cable-forbindelser. ',
'771' : 'VIGTIGT:',
'775' : '3) Sæt strømkablet i Belkin-routeren igen.',
'776' : 'For at bekræft at du har forbindelse til internettet skal du åbne en internetbrowser, såsom Explorer, Firefox og Safari og sikre dig, at du kan gå se websites.',
'731' : 'Brugernavn',
'489' : 'Adgangskode',
'732' : 'Indtast adgangskode igen',
'756' : 'Indtast din adgangskode igen!',
'1379' : 'Enten har du ikke indtastet alle IP-tallene eller nogle af de indtastede tal er ugyldige. IP-adressen skal være som x.y.y.x(hvor y er hvad som helst mellem 0 og 255 og x er hvad som helst mellem 1 og 254).',
'709' : 'Indtast din information nedenfor og klik på "Gem" for at indtaste dine indstillinger for Dynamisk IP.',
'710' : 'Værtsnavn',
'711' : 'Værtsnavn = Et navn, som visse internetudbydere kræver for at man kan oprette forbindelse til deres system.',
'712' : 'Ændr WAN MAC-adresse',
'330' : 'IP-adresse',
'331' : 'Undernetmaske',
'659' : 'Forkert MTU. Skal være mellem 500...1500.',
'730' : 'Indtast din information nedenfor og klik på "Gem" for at indtaste dine PPPoE-indstillinger.',
'733' : 'Servicenavn (valgfrit)',
'734' : 'MTU (500-1500)',
'735' : 'Ændr ikke MTU-indstillingen, medmindre din internetudbyder forlanger et andet nummer',
'736' : 'Afbryd efter',
'737' : 'minutter uden aktivitet.',
'741' : 'Ugyldig MTU-værdi',
'2005' : 'IP anvist af internetudbyder',
'2021' : 'Klik her for at indtaste dine DNS-indstillinger',
'2023' : 'Dobbelte anførselstegn er ikke tilladt.',
'2024' : 'Brugernavn indeholder tegn, som ikke er acceptable',
'2025' : 'Omvendt skråstreg er ikke tilladt.',
'2030' : 'Enten har du ikke indtastet standard gateway\'en eller nogle af de indtastede tal er ugyldige. Tallene skal være mellem 0 og 255.',
'2052' : 'Adgangskoden indeholder tegn, som ikke er acceptable (<,> og &)',
'691' : 'En dynamisk forbindelsestype er den mest almindelige. Hvis du bruger et kabelmodem, har du sandsynligvis en dynamisk forbindelse. Prøv dette, hvis du har et kabelmodem, eller hvis du ikke er sikker på, hvilken forbindelsestype du har.',
'723' : 'Inklusive internetudbydere, som kræver et værtsnavn, og internetudbydere, som forbinder en forbindelse til en specifik MAC-adresse.',
'693' : 'En statisk IP-adresse er mindre almindeligt end andre. Brug kun denne type, hvis din internetudbyder gav dig en IP-adresse, som aldrig ændrer sig.',
'724' : 'Routeren understøtter en forbindelse til internetudbyder, som anviser en statisk IP-adresse.',
'695' : 'Hvis du bruger et DSL-model og/eller din internetudbyder gav dig et brugernavn og en adgangskode, så er din forbindelsestype PPPoE. Brug denne forbindelsestype.',
'725' : 'Routeren understøtter en dynamisk forbindelsestype, som kræver et PPPoE-login til autentificering.',
'697' : 'Visser internetudbydere bruger PPTP-protokollen til at forbinde abonnenter til centralkontoret. Dette kræver, at du indtaster yderligere indstillinger, som du skulle have fået fra din internetudbyder. Når først du har gemt dine ændringer, lyser internetstatusdioden grønt, hvis det er lykkedes.',
'726' : 'Kun til brug med internetudbydere, som kræver PPTP-forbindelsesmetoden.',
'699' : 'Brug kun denne indstilling for Bigpond Cable- og OptusNet Cable-forbindelser.',
'728' : 'KUN australske brugere. Routeren understøtter forbindelse til Telstra BigPond.',
'2019' : 'Indtast din information nedenfor og klik på "Gem" for at indtaste dine modem-indstillinger.',
'tBackToConnectionType' : 'Tilbage til Forbindelsestype',
'759' : 'Indtast din information nedenfor og klik på "Gem" for at indtaste dine indstillinger for Statisk IP.',
'761' : 'Undernetmaske',
'762' : 'ISP gateway-adresse',
'754' : 'Klik her for at indtaste dine DNS-indstillinger',
'715' : 'Hver enhed på dit netværk har en entydig hardwareadresse (MAC-adresse), som identificerer den til andre enheder på netværket og internettet.  Nogle få internetudbydere kræver, at du indtaster MAC-adressen fra dit netværkskort eller ældre router i routerindstillingerne. Hvis du ikke er sikker, så skal du indtaste MAC-adressen for den computer, som oprindeligt blev tilsluttet modemmet før installation af routeren.',
'716' : 'WAN MAC-adresse',
'717' : 'Klon computerens MAC-adresse',
'718' : 'Klon',
'721' : 'Fanebladet Internet/WAN er dér, hvor du indstiller routeren til at oprette forbindelse til din internetudbyder. Routeren er i stand til at oprette forbindelse til faktisk ethvert system hos en internetudbyder, forudsat at du har konfigureret routerens indstillinger til din internetudbyders forbindelsestype korrekt. Klik på "Forbindelsestype" på fanebladet Internet/WAN til venstre på skærmbilledet for at konfigurere routeren til at oprette forbindelse til internetudbyderen.',
'722' : 'Understøttede forbindelsestyper:',
'htWANMainContent' : 'Vælg tilslutningstype:',
'700' : 'Næste',
'744' : 'PPTP-konto',
'745' : 'Adgangskode',
'746' : 'Indtast adgangskode igen',
'747' : 'Værtsnavn',
'1770' : 'IP anvist af internetudbyder',
'1771' : 'Ja',
'1772' : 'Nej',
'1773' : 'Serviceadresse',
'750' : 'Undernetmaske',
'778' : 'Routeren kan konfigureres til udelukkende at fungere som et adgangspunkt og forbigå alle router- og firewallfunktioner. For at gøre det, skal du vælge "Aktivér" og indtaste den IP-adresse, som du vil give adgangspunktet.',
'779' : 'Adgangspunktmodus:',
'781' : 'Specificér undernetmaske',
'801' : 'Sikkerhedstilstand',
'806' : 'Du kan her konfigurere trådløse sikkerheds/krypteringsindstillinger. Sikkerhed skal aktiveres for at sikre maksimal trådløs sikkerhed. WPA (Wi-Fi Protected Access) har ændringer til den dynamiske nøgle og udgør den bedste sikkerhedsløsning. I trådløse miljøer, hvor ikke alle enheder understøtter WPA, bør WEP (Wired Equivalent Privacy) bruges.',
'377' : 'Auto',
'487' : 'TIL',
'488' : 'FRA',
'787' : 'Hvis du vil foretage ændringer af routerens trådløse indstillinger, skal det gøres her. Klik på “Gem” for at gemme indstillingerne.',
'788' : 'Trådløs kanal',
'789' : 'SSID',
'790' : 'Trådløs tilstand',
'794' : 'Udsend SSID',
'797' : 'Beskyttet tilstand',
'1300' : 'Udvidelseskanal',
'1301' : 'Båndbredde',
'1304' : '802.11e/WMM QoS',
'852' : 'Den forhåndsdelte nøgles længde skal være 8 til 63 eller 64 hexadecimale tegn',
'856' : 'WPA (Wi-Fi Protected Access) med en forhåndsdelt nøgle: Nøglen er en adgangskode, såsom et ord, sætning eller en række bogstaver og tal. Nøglen skal være mellem <b>8</b> og <b>63</b> tegn og kan inkludere mellemrum og symboler, eller kun <b>64</b> hextegn (0-F). Hver klient, som tilslutter netværket, skal bruge den samme nøgle (forhåndsdelt nøgle).',
'115' : 'Enten har du ikke indtastet alle hexadecimale cifre eller nogle af de hexadecimale cifre, som du indtastede, er ugyldige. Et hexadecimalt ciffer kan være et tal fra 0-9 eller et bogstav mellem A-F.',
'308' : '<b>SPI</b> Stateful Packet Inspection. SPI er den type internetsikkerhed på korporativt niveau, som din HomeConnect hjemmenetværksgateway har. Ved hjælp af SPI fungerer gateway\'en som en firewall, der beskytter dit netværk mod angreb.',
'808' : 'BEMÆRK:',
'809' : 'For automatisk at generere hex-par med et adgangsudtryk skal du trykke på knappen til højre og indtaste adgangsudtrykket her.',
'810' : 'Adgangsudtryk',
'811' : 'Generér',
'812' : 'Indtast et adgangsudtryk',
'814' : 'Tast',
'818' : '(hexadecimale par)',
'296' : '<b>IP Address</b> IP står for Internet Protocol. En IP-adresse (internetprotokol) består af fire tal, som er adskilt med punktummer, og som identificerer en enkel, entydig computervært. Eksempel: 192.34.45.8.',
'298' : '<b>ISP</b> Internetudbyder. En ISP er en virksomhed, der tilbyder tilslutning til internettet for individuelle personer og firmaer eller organisationer.',
'807' : '(13 hexadecimale par)',
'813' : 'Nøglen er ikke fuldført',
'821' : 'er ikke fuldført',
'1190' : '<br>Gå til http://www.dyn.com for at registrere for dit dynamisk DNS-værtsnavn.<br>',
'1339' : 'det anbefales at bruge WPA/WPA2, når WPS er aktiveret.',
'1363' : 'Under udførsel – vent venligst...',
'1364' : 'Der blev fundet en fejl – prøv igen.',
'1365' : 'Sessionoverlapningsfejl: Vent 60 sekunder før du starter processen igen eller se til at klientfunktionen opretter forbindelse manuelt til dette netværk',
'1366' : 'Fuldført – Enheden er koblet til routeren.',
'1370' : 'Ugyldig PIN-kode! Enhedens PIN-kode er enten fire eller otte numeriske cifre. Kontrollér koden og indtast den igen.',
'1620' : 'Starter – Start WPS PBC på klientenheden indenfor 2 minutter.',
'1621' : 'Starter – Start WPS på klientenheden indenfor 2 minutter.',
'1622' : 'Timeout – Ingen klient opretter forbindelse til routeren.',
'1623' : 'Wi-Fi-beskyttet installation-meddelelse',
'1393' : 'WPS-hardwareknap',
'1320' : 'WPS (Wi-Fi-beskyttet installation) er standardmetoden i branchen til at enkeltgøre sikkerhedsindstilling og administration af Wi-Fi-netværk. Du kan nu nemt installere og oprette forbindelse til et WPA-aktiveret 802.11-netværk med WPS-godkendte enheder ved hjælp af enten PIN- (Personal Information Number) eller PBC- (Push Button Configuration) metoden. Ældre enheder uden WPS kan føjes til netværket ved brug af den traditionelle manuelle konfigurationsmetode.',
'1321' : 'PIN-metode (Personal Information Number)',
'1322' : 'Indtast PIN-koden fra klientens enhed og klik på "Tilmeld". Start derefter WPS på klientens enhed fra dens trådløse funktion eller WPS-applikation inden for 2 minutter',
'1323' : 'Indtast PIN-koden for klientens enhed',
'1324' : 'Tilmeld',
'1325' : 'Hvis en ekstern registrator er tilgængelig, kan du også indtaste routerens PIN-kode ved den eksterne registrator. For at ændre routerens PIN-kode skal du klikke på "Generér ny PIN-kode" eller klik på "Gendan standard PIN-kode" for at nulstille PIN-koden til fabriksstandard.',
'1326' : 'Router PIN-kode',
'1327' : 'Generér ny PIN-kode',
'1328' : 'Gendan standard PIN-kode',
'1329' : 'PBC-metoden (Push Button Configuration)',
'1330' : 'Tryk og hold på PBC-knappen på din router i 3 sekunder eller klik på "Start PBC". Start derefter PBC-metoden på den enhed, som vil forbinde til routeren indenfor 2 minutter.',
'1331' : 'Start PBC',
'1332' : 'Manuel konfigurationsmetode',
'1333' : 'For klient-enheder uden WPS skal enheden konfigureres manuelt med følgende indstillinger.',
'1334' : 'Trådløs sikkerhed',
'1336' : 'Netværksautentificering',
'1337' : 'Datakryptering',
'1338' : 'Netværksnøgle (PSK)',
'1340' : 'Lås routerens PIN-kode op',
'1341' : 'Routerens PIN-kode er deaktiveret pga. for mange mislykkede forsøg på at få adgang',
'1390' : 'PIN-kodens kontrolsum mislykkedes! Kontrollér koden og indtast den igen.',
'1391' : 'Ugyldig PIN-kode! Enhedens PIN-kode er otte numeriske cifre. Kontrollér koden og indtast den igen.',
'1392' : 'Konfigureret',
'1396' : 'Konfigurér trådløs sikkerhed manuelt',
'1397' : 'trådløs sikkerhed',
'common_err1' : '%s er NULL',
'upgrade_err2' : 'Firmwareopgradering blev afsluttet pga. utilstrækkelige ressourcer. Opgradering lykkedes ikke.\nPrøv igen, når systemet er inaktivt (ingen internettrafik)',
'upgrade_err3' : 'Kan ikke uploade. Kontakt administratoren.',
'upgrade_err4' : 'Firmware er for stor. Opgradering lykkedes ikke.',
'upgrade_err5' : 'Den seneste firmware er allerede installeret.',
'upgrade_err6' : 'Det ser ud til, at firmwareopdateringen er blevet korrupt. Hent den rigtige firmwarefil og prøv igen.',
'show10' : 'DHCP-klientliste',
'show54' : 'Forbindelsesindstillinger',
'btn2' : 'Anvend ændringer',
'cff1' : 'Søg efter firmware lykkedes',
'PM2' : ':30 PM',
'AM2' : ':30 AM',
'Dimicons' : 'Nedton ikoner',
'EcoTo' : 'til',
'fvrm' : 'Aktivér Fjernadministration. Fordi dens port har en kollision med én af dine virtuelle serveres indgående port.',
'lsipm2' : 'Forkert IP-adresse. Det sidste tal kan ikke være 0 eller 255',
'lsldnm' : 'Ugyldigt lokalt domænenavn: `~!@#$%^&*()_+[]{}\|;:\'"<>/?.,',
'lsipm5' : 'Den IP-adresse, som du vælger, skal være en IP, der ikke kan routes.\n  192.168.x.x (hvor x er hvad som helst mellem 0 og 255). \n10.x.x.x (hvor x er hvad som helst mellem 0 og 255).\n172.y.x.x (hvor y er hvad som helst fra 16 til 31, og x er hvad som helst mellem 0 og 255).',
'ufy4' : 'Gendannelse til standardindstillingerne vil vare op til 60 sekunder. Sluk ikke for routeren under denne proces.',
'ufe11' : 'I slutningen af opgraderingen reagerer routeren måske ikke på kommandoer i op til to minutter. Dette er normalt. Routeren må ikke slukkes eller genstartes i det tidsrum.',
'ur5' : 'Vent op til 30 sekunder, mens routeren starter op igen. Sluk ikke for routeren, før gendannelsen er færdig.',
'ur6' : 'Vent op til 60 sekunder, mens routeren starter op igen. Sluk ikke for routeren, før gendannelsen er færdig.',
'usys83' : 'Felterne Ny adgangskode og Bekræft ny adgangskode stemmer ikke overens',
'usys83_1' : 'Adgangskode og adgangskodebekræftelse stemmer ikke overens.',
'usys85_1' : 'Længden på administratoradgangskoden skal være på mellem 3 og 12.',
'usys88' : 'Adgangskoden har nået den maksimale længde!',
'usys89' : 'AM',
'usys90' : 'PM',
'usys92' : 'Fjernadgangsportnummeret skal være fra 1 til 65535.',
'usysipm' : 'Enten har du ikke indtastet alle IP-tallene eller nogle af de indtastede tal er ugyldige. IP-adressen skal være som x.y.y.z(hvor x er hvad som helst fra 1 til 223, y er hvad som helst fra 0 til 255 og z er hvad som helst fra 1 til 254).',
'self_healing60' : 'Selvreparation',
'chkwait' : 'Søger efter nyere firmware...',
'Europe' : 'Europa',
'Australia' : 'Australien og NZ',
'AsiaPacific' : 'Stillehavsområdet',
'NorthAmerica' : 'Nordamerika',
'vjs1' : 'Forkert IP-adresse, for lang. Kontrollér igen',
'vjs2' : 'Forkert IP-adresse, mangler \'.\'. Kontrollér igen!',
'vjs3' : 'Forkert IP-adresse, mangler tal mellem \'.\'. Kontrollér igen!',
'vjs4' : 'Forkert IP-adresse, ekstra \'.\'. Kontrollér igen!',
'vjs5' : 'Forkert IP-adresse, tal mellem \'.\' er for store. Kontrollér igen!',
'vm1' : 'Forkert tegn ',
'vm2' : ' på pladsen ',
'vm3' : 'Skal være ',
'vjs6' : 'Forkert format af årstal. Indtast som (f.eks. 2002)',
'vm4' : 'Forkert nummer ',
'vjs8' : 'Forkert. Skal være mellem 1970..2037',
'vjs9' : 'Forkert månedsformat. Indtast som (f.eks. 01...12)',
'vjs161' : ' ikke i ',
'vjs162' : ' netmaske',
'vjs163' : 'Tilladte DHCP-område er ',
'vjs17' : 'Du indtastede to forskellige adgangskoder. Kontrollér igen!',
'vjs18' : 'Indtast start-portnummer.',
'vjs19' : 'Start-portnummer skal være mindre end portnummer.',
'vjs23' : 'Ugyldig MAC-adresse, det er en broadcastadresse.',
'vjs24' : 'Ugyldig MAC-adresse, det er en null adresse.',
'vjs25' : 'Ugyldig MAC-adresse, det er en multicast-adresse.',
'vjs26' : 'Ugyldig start- og slut IP-adresse, slut IP skal være større end start IP.',
'vjs28' : 'Ugyldigt netmaskeformat.',
'vjs29' : 'Ugyldigt format, netmaske her skal være 255.255.255.0 eller 255.255.255.128 eller 255.255.255.192 eller 255.255.255.224 or 255.255.255.240 eller 255.255.255.248 eller 255.255.255.252 eller 255.255.255.254',
'vjs30' : 'Forkert IP-adresse. Det sidste tal kan ikke være 0 eller 255.',
'vjs31' : 'Forkert LAN IP-adresse. Det første tal kan ikke være 127',
'vjs32' : 'Forkert LAN IP-adresse. Kan ikke være 0.0.0.0',
'vjs33' : 'Forkert LAN IP-adresse. Skal være under 224.0.0.0',
'vjs42' : 'De undernetmasketal, som du indtastede, er ugyldige.',
'vjs45' : 'Specificér IP-adresse',
'vjs46' : 'er ugyldig. Ret fejlen, før du fortsætter!',
'wcc2' : 'Vælg din forbindelsestype:',
'wcc13' : 'L2TP',
'wcc14' : 'Visser internetudbydere bruger L2TP-protokollen til at forbinde abonnenter til centralkontoret. Dette kræver, at du indtaster yderligere indstillinger, som du skulle have fået fra din internetudbyder. Når først du har gemt dine ændringer, lyser internetstatusdioden grønt, hvis det er lykkedes.',
'wds4_1' : 'Primære DNS-adresse',
'wds7' : 'Du skal indtaste de DNS-indstillinger, som du får af din internetudbyder, hvis du ikke bruger den automatiske DNS-funktion',
'wds8' : 'For at foretage DNS-ændringer, skal du først gå til %s Website Filters %s og vælge No filters (Ingen filtre).',
'wmc6' : 'WAN MAC-adresse kan ikke være den samme som LAN MAC-adressen. Vælg en anden.',
'wdd9 ' : 'Ingen DDNS-service er valgt.\n',
'wdd10' : 'Ingen DDNS-service er valgt og al data på denne side vil gå tabt. Vil du fortsætte?',
'wm10b' : 'Kun til brug med internetudbydere, som kræver L2TP-forbindelsesmetoden.',
'pm' : 'Din tjeneste kunne ikke bekræfte den adgangskode, som du indtastede. Bekræft, at du indtastede din adgangskode rigtigt.',
'wpp17' : 'L2TP-konto',
'wpp18' : 'L2TP-adgangskode',
'wpp19' : 'Indtast din L2TP-konto.',
'wpp23' : 'IP-adresseanvisning',
'wpp24' : 'Brug statisk IP-adresse',
'wpp25' : 'Hen dynamisk fra internetudbyder',
'wppa7' : 'Min IP-adresse',
'wppa9' : 'Forbindelses-id (valgfrit)',
'wppa13' : 'Indtast din PPTP-konto.',
'wppa18' : 'Ugyldigt servicenavn.',
'ws2' : 'Indtast din information nedenfor og klik på "Anvend ændringer" for at indtaste dine indstillinger for Statisk IP.',
'sm_1' : 'Den undernetmaske, som du indtastede, er ugyldig.',
'ws8' : 'På det efterfølgende skærmbillede skal du indtaste/validere dine DNS-adresseindstillinger',
'wt2' : 'Hvis du klikker på Anvend ændringer, vil routeren genstarte. Når først routeren har genstartet, skal du gøre følgende',
'wt3' : '1) Tag elstikket ud af både kabelmodemmet og Belkin-routeren',
'wt4' : '2) Sæt elstikket i kabelmodemmet og vent, til alle lamperne på modemmet er holdt op med at blinke',
'wt5' : '3) Sæt strømkablet i Belkin-routeren igen',
'wt6' : 'For at bekræft at du har forbindelse til internettet skal du åbne en internetbrowser, såsom Explorer, Firefox og Safari og sikre dig, at du kan gå se websites.',
'wlad2' : 'Aktivér/Deaktiver',
'wlc2' : 'Hvis du vil foretage ændringer af routerens trådløse indstillinger, skal det gøres her. Klik på “Anvend ændringer” for at gemme indstillingerne.',
'wlcgb' : '802.11b+g',
'wlcg' : '802.11g',
'wlcb' : '802.11b',
'wlc20' : '20 MHz',
'wlc22' : '20/40 MHz',
'wlcoff' : 'FRA',
'wlcngb1' : '802.11b og 802.11g og 1x1 802.11n',
'wlcn1' : '1x1 802.11n',
'wlcngb2' : '802.11b og 802.11g og 802.11n',
'wlcn2' : '802.11n',
'wlcgn' : '802.11g+n',
'wlca' : '802.11a',
'wlcan' : '802.11a og 802.11n',
'wlc26' : 'Hvis du skjuler dit netværksnavn, bliver WPS deaktiveret.',
'wlc27' : 'Hvis du ændrer din sikkerhedstype, bliver WPS deaktiveret.',
'wlc28' : 'WPS er deaktiveret pga. din <A href=%s><B>trådløse sikkerhedstype</B></A>.',
'wlc29' : 'WPS er deaktiveret, fordi du har skjult dit netværksnavn (SSID).',
'wlc30' : 'WPS er deaktiveret, eftersom du har skjult dit netværksnavn (SSID) og pga. din <A href=%s><B>trådløse sikkerhedstype</B></A>.',
'wlc31' : 'Hvis du aktiverer WPS, er dit netværksnavn (SSID) ikke længere skjult.',
'wlc32' : 'Hvis du aktiverer WPS, bliver din sikkerhedstype ændret til WPA/WPA2. Din aktuelle netværksadgangskode vil være helt fin.',
'wlc33' : 'Hvis du aktiverer WPS, er dit netværksnavn (SSID) ikke længere skjult og din sikkerhedstype bliver ændret til WPA/WPA2. Din aktuelle netværksadgangskode vil være helt fin.',
'wle3a' : 'WPA-PSK',
'wle3b' : 'WPA2-PSK',
'wle3c' : 'WPA-PSK + WPA2-PSK',
'wps1' : 'Wi-Fi Protected Setup (WPS)',
'wps3' : 'Konfigurér trådløs sikkerhed',
'wps17' : 'For klientenheder uden WPS, skal du køre Belkin Security Assistant fra cd\'en eller manuelt konfigurere enheden med de følgende indstillinger:',
'wps23' : 'WPA+WPA2-Personal (PSK)',
'wps25' : 'TKIP+AES',
'wps27' : 'Netværksnøgle (WEP):',
'wps28_1' : 'NULL',
'wle11' : 'Nøgle 1',
'wle12' : 'Nøgle 2',
'wle13' : 'Nøgle 3',
'wle14' : 'Nøgle 4',
'wpskerr2' : 'Nøglen skal være mellem 8 og 63 tegn og kan inkludere mellemrum og symboler, eller kun 64 hextegn (0-F).',
'wpskerr4' : 'Du skal indtaste gæstenøglen',
'wpskerr7' : 'Gæstenøglen skal være 8 tegn',
'wpskerr8' : 'Gæstenøglen må ikke være den samme som netværksnøglen',
'wlguest1' : 'SSID må ikke være den samme som gæste-SSID',
'wlguest2' : 'Gæste-SSID må ikke være den samme som SSID',
'rs_crc' : 'Gendannelse mislykkedes < CRC >',
'rs_long' : 'Gendannelse mislykkedes <too long>',
'rs_disposition' : 'Gendannelse mislykkedes <No Content-Disposition>',
'rs_getpid' : 'Gendannelse mislykkedes <Can\'t get pid!>',
'rs_unmatchpid' : 'Gendannelse mislykkedes <Unmatched pid>',
'msg_ddns3 ' : 'Domænenavnsfelterne må ikke være tomme.\n',
'msg_lan_dhcp1 ' : 'Anmoder om information fra gateway.',
'msg_lan_dhcp2 ' : 'Opdaterer konfigurationsdatabasen.',
'msg_wan_stat1 ' : 'IP-adresse ',
'msg_wan_stat2 ' : ' er ikke i ',
'msg_wan_stat3 ' : ' netværket.',
'msg_wls_chan2 ' : 'Gæste-SSID kan ikke indstilles som NULL!\n',
'fw_not_interrupt ' : 'ROUTEREN MÅ IKKE AFBRYDES ELLER SLÅS FRA, da det kan gøre routeren ubrugelig.',
'msg_invalid_char ' : 'Ugyldige tegn fundet. Gyldige tegn er: 0-9, a-z, A-Z, `~!@#$%^&*()_-+=|\\{}[]:";\',.<>/?',
'msg_invalid_domain_char ' : 'Ugyldigt lokalt domænenavn'+': ~!@#$%^&*()=+{}[]|":;\\\'?/<>,`',
'msg_invalid_char_1 ' : 'Ugyldige tegn fundet. Gyldige tegn er bogstaver og tal. De følgende symboler er ugyldige: `~!@#$%^&*()_+[]{}\\|;:\'"<>/?.,',
'msg_hostIP_invalid ' : 'Værts-IP-adressen er ugyldig. Den må ikke være routerens LAN IP.\n',
'msg_dmzIP ' : 'DMZ IP-adresse',
'msg_blank ' : ' må ikke være tom.\n',
'msg_space ' : 'Tomme felter eller mellemrum er ikke tilladt i %s\n',
'msg_blank_in ' : 'Tomme felter er ikke tilladt i %s\n',
'msg_allspaces ' : '%s kan ikke bestå af kun mellemrum\n',
'msg_invalid ' : 'Ugyldige tegn i %s\nGyldige tegn er: \n%s\n\n',
'msg_check_invalid ' : '%s indeholder et ugyldigt tal\n',
'msg_valid_range ' : '%s er ugyldig. Gyldigt område er %s til %s\n',
'msg_invalid_mac ' : 'Ugyldig MAC-adresse.\n',
'msg_multi_mac' : 'MAC-adressen kan ikke være multicast-adresse.\n',
'msg_confirmDefault ' : 'Advarsel!\nIndlæsning af fabriksstandardindstillingerne vil slette alle aktuelle indstillinger.\nEr du sikker på, du vil fortsætte?',
'Allowed_Services' : 'Tilladte tjenester',
'Allowing_Url' : 'Websted, som er tilladt iflg. URL-adresse ',
'Allowing_Keyword' : 'Websted, som er tilladt iflg. nøgleord',
'wipv63' : 'Enheder, som er tilsluttet din router, kan kommunikere med hinanden ved hjælp af oprindelige IPv6-pakker. IPv6-pakker på LAN bliver automatisk sendt til alle LAN-grænseflader (ethernet-porte og både 2.4 GHz og 5 GHz trådløse netværk).',
'wipv64' : 'Når IPv6 pass-through er aktiveret, bliver IPv6-pakker også kopieret til WAN-grænsefladen.(Dette opretter en direkte, ikke-sikker forbindelse til internettet, når det er aktiveret).',
'wipv65' : 'Kontakt din internetudbyder direkte for oplysninger om deres support til IPv6.',
'wipv67' : 'Internet IPv6',
'wipv68' : 'Dit netværk er IPv6-kompatibelt.',
'wipv69' : 'Pass-through',
'mf1' : 'Med disse sider kan du justere din routers adfærd, når den modtager forskellige typer medietrafik.',
'mf2' : 'Optimér automatisk din internetforbindelse til forskellige typer trafik.',
'mf3' : 'Se, hvordan din router bliver brugt.',
'mf8' : 'Optage den %s',
'mf10' : 'Download',
'mf11' : 'Upload',
'mf12' : 'Hastighed',
'mf15' : 'Anvend indstillinger',
'mf18' : 'Indtast mellem tallet {0.1-%s}.',
'mf20' : 'Kun mellem {0.1-%s}.',
'mf26' : 'Manuelt optaget d. %s',
'mf32' : 'eller',
'mf44' : 'Resultaterne for den automatiske hastighedstest er måske ikke 100 % nøjagtig baseret på internettrafik eller andre forhold. For at sammenligne resultater, kan du gå til et websted med hastighedstest eller kontakt din internetudbyder for at bekræfte din internethastighed. Hvis hastighedsresultaterne er uregelmæssige, skal du måske indtaste værdierne manuelt.',
'media_dlna18' : 'Uden titel',
'media_dlna21' : 'Du har flere medier, end din router kan indeksere, så vi leverer de første 12000 elementer.',
'errSubnetMaskInvalid_2' : 'Undernetmasken ligner ikke en undernetmaske. Kontrollér venligst tallet.',
'htWAN_L2TP' : 'L2TP-indstillinger',
'htWAN_L2TPContent' : 'Visser internetudbydere bruger L2TP-protokollen til at forbinde abonnenter til centralkontoret. Dette kræver, at du indtaster yderligere indstillinger, som du skulle have fået fra din internetudbyder. Når først du har gemt dine ændringer, lyser internetstatusdioden grønt, hvis det er lykkedes.',
'p400t001_error' : 'Få alting forbundet hurtigere.',
'p400t018_error' : 'Hvorfor skal jeg omdøbe den?',
'p400t019_error' : 'Det er dét, du vil se, når du søger efter dit netværk fra andre enheder. Entydige netværksnavne er nemmere at finde og huske. Hvis dine forskellige trådløse enheder tidligere var forbundet til en anden router, vil det ikke være nødvendigt at indstille dem til en ny router, hvis det samme netværksnavn og den samme adgangskode bliver brugt. De vil automatisk oprette forbindelse. ',
'dhToggleBand2G' : 'Vis 2.4Ghz',
'772' : 'Hvis du klikker på Anvend ændringer, vil routeren genstarte. Når først routeren har genstartet, skal du gøre følgende',
'773' : '1) Tag elstikket ud af både kabelmodemmet og Belkin-routeren',
'774' : '2) Sæt elstikket i kabelmodemet igen og vent, til alle lamperne på modemet er holdt op med at blinke.',
'dft001' : 'Det er ud til, du ikke har oprette forbindelse.',
'dft002' : 'Hvis du har brug for support og har en forbundet enhed, kan du gå til <strong>help.belkin.com</strong>.',
'gtNoSecCard     ' : 'Du bedes notere dit netværksnavn og din adgangskode, så du kan finde det senere.',
'gtFWUpdateMobileError' : 'Firmwarefiler kan i øjeblikket ikke overføres fra mobile enheder.',
'gtSettingsMobileError' : 'Indstillingsfiler kan i øjeblikket ikke overføres fra mobile enheder.',
'gtMoreFromInternet' : 'Opret forbindelse til internettet for mere',
'gtCantConnect' : 'Vi kan ikke oprettes forbindelse til internettet.',
'p802t004' : 'Gå til menuen for det trådløse netværk på din enhed',
'p803t004' : 'Gå til menuen for det trådløse netværk på din enhed',
'PIC-S1t001' : 'Bloker alle enheder',
'gtUnnamedDevice' : 'Enhed uden navn',
'gtIC' : 'Internetkontrol',
'errDefaultGatewayEmpty' : 'Standardgateway-adressen må ikke være tom.',
'errDefaultGatewayInvalid' : 'Standardgateway-adressen skal være fire tal (0-255), som er adskilt med punktummer. Kontrollér venligst tallet.',
'errDNSServerEmpty' : 'DNS-serveradressen må ikke være tom.',
'errDNSServerInvalid' : 'DNS-serveradressen skal være fire tal (0-255), som er adskilt med punktummer. Kontrollér venligst tallet.',
'errIpAddressEmpty' : 'IP-adressen må ikke være tom.',
'errIpAddressInvalid' : 'IP-adressen skal være fire tal (0-255), som er adskilt med punktummer. Kontrollér venligst tallet.',
'errorGenericCommitError' : 'Der opstod en fejl.  Ret indstillingerne nedenfor og prøv igen.',
'errorSSIDEmpty' : 'Angiv et navn på dit trådløse netværk.',
'errorSSIDInvalidChars' : 'Netværksnavnet må kun indeholde bogstaver, tal, tegnsætning og mellemrum.',
'errorSSIDTooLong' : 'Netværksnavnet skal være mindre end 32 tegn.',
'errorWEPPasswordEmpty' : 'Indtast en adgangskode for at sikre dit trådløse netværk.',
'errorWEPPasswordInvalidChars' : 'Netværksnavnet må kun indeholde tal og bogstaverne A-F.',
'errorWEPPasswordInvalidLength' : 'Netværksnavnet skal være 10 eller 26 tegn langt.',
'errorWPAPasswordEmpty' : 'Indtast en adgangskode for at sikre dit trådløse netværk.',
'errorWPAPasswordInvalidChars' : 'Adgangskoden til dit netværk må kun indeholde bogstaver, tal, tegnsætningstegn og mellemrum.',
'errorWPAPasswordInvalidLength' : 'Adgangskoden til dit netværk skal være 8 eller -63 tegn langt.',
'errPasswordEmpty' : 'Indtast din adgangskode.',
'errPasswordInvalid' : 'Dit brugernavn må kun indeholde bogstaver, tal, tegnsætningstegn og mellemrum.',
'errPasswordTooLong' : 'Din adgangskode skal være kortere end 64 tegn.',
'errServAddressEmpty' : 'Angiv en serviceadresse.',
'errSubnetMaskEmpty' : 'Undernetmasken må ikke være tom.',
'errSubnetMaskInvalid' : 'Undernetmasken skal være fire tal (0-255), som er adskilt med punktummer. Kontrollér venligst tallet.',
'errUsernameInvalid' : 'Dit brugernavn må kun indeholde bogstaver, tal, tegnsætningstegn og mellemrum.',
'errUsernameTooLong' : 'Dit brugernavn skal være kortere end 64 tegn.',
'errVCIInvalid' : 'Angiv et tal mellem 0 og 65535. Din internetudbyder kan oplyse dig om den rigtige værdi, som du skal bruge.',
'errVPIInvalid' : 'Angiv et tal mellem 0 og 255. Din internetudbyder kan oplyse dig om den rigtige værdi, som du skal bruge.',
'p802t003' : 'Fordi nogen indstillinger er blevet ændret, skal du muligvis vælge dit trådløse netværk igen:',
'p802t011' : 'Fordi nogen indstillinger er blevet ændret, skal du muligvis vælge dit trådløse netværk igen:',
'dft003' : 'Brug for hjælp?',
'dft004' : 'Har du et spørgsmål eller brug for support? Du kan få 24-timers hjælp i vores online hjælpecenter.<br><a href="http://www.belkin.com/support/" id="dfBelkinHelp">Belkin Hjælp-center &rarr;</a>',
'dhChangeSSID' : 'Skift &raquo;',
'dhPassLabel' : 'Adgangskode:',
'dhPasswordObscured24' : 't********',
'dhShow' : 'Vis:',
'dhSSID24' : '{blahblah}',
'dhToggle24' : '2,4 Ghz',
'dhToggle5' : '5,0 Ghz',
'DownSpeed' : '32.6',
'errUsernameEmpty' : 'Indtast dit brugernavn.',
'gt10am' : 'kl. 10:00',
'gt10pm' : 'kl. 22:00',
'gt11am' : 'kl. 11:00',
'gt11pm' : 'kl. 23:00',
'gt1am' : 'kl. 01:00',
'gt1amNextDay' : 'kl. 1:00 næste dag',
'gt1pm' : 'kl. 13:00',
'gt24ghz' : '2,4 Ghz',
'gt24GKey' : '2,4 GHz nøgle',
'gt24GName' : '2,4 GHz SSID',
'gt24PSK' : 'Adgangskode',
'gt24Sec' : 'WPA2',
'gt24SSID' : '12345678',
'gt2am' : 'kl. 02:00',
'gt2pm' : 'kl. 14:00',
'gt3am' : 'kl. 03:00',
'gt3pm' : 'kl. 15:00',
'gt4am' : 'kl. 04:00',
'gt4pm' : 'kl. 16:00',
'gt50ghz' : '5 Ghz',
'gt5am' : 'kl. 05:00',
'gtGuestKey' : 'Gæstenøgle',
'gt5GMedia' : 'Dit 5 Ghz bånd vil have det samme navn, men med ".media" tilføjet i slutningen af navnet.',
'gtGuestName' : 'Gæste SSID',
'gt5pm' : 'kl. 17:00',
'gt6am' : 'kl. 06:00',
'gt6pm' : 'kl. 18:00',
'gt7am' : 'kl. 07:00',
'gt7pm' : 'kl. 19:00',
'gt8am' : 'kl. 08:00',
'gt8pm' : 'kl. 20:00',
'gt9am' : 'kl. 09:00',
'gt9pm' : 'kl. 21:00',
'gtAccessControl' : 'Forældrekontrol til internettet',
'gtAccessPoint' : 'Brug som adgangspunkt',
'gtADSL' : 'ADSL',
'gtAdvSettings' : 'Avancerede indstillinger',
'gtAllElseFails' : 'Kontakt Belkin Support in&nbsp;',
'gtAndroidConnect01' : 'Android-telefoner og tablet-pc\'er',
'gtAndroidConnect02' : 'Din enhed leverer en menu med tilgængelige trådløse netværker i programmet Indstillinger.',
'gtAndroidConnect03' : 'Åbn programmet <strong>Indstillinger</strong> og vælg <strong>Trådløs og netværk</strong>.',
'gtAndroidConnect04' : 'Vælg derfra <strong>Wi-Fi</strong> for at se listen med tilgængelige netværk',
'gtAndroidConnect05' : 'Vælg <strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong>. <!-- IF NOT OPEN --> <span tid="gtNotOpen">Hvis du bliver bedt om det, skal du indtaste netværkets adgangskode <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>.</span> <!-- /IF -->',
'gtAt' : 'på',
'gtAttenuation' : 'Dæmpning',
'gtAustralia' : 'Australien',
'gtBackToDashboard' : '&larr; Tilbage til dashboard',
'gtBelkin' : 'Belkin',
'gtBootLoader' : 'Boot Loader',
'gtCantConnect' : 'Der kan ikke oprettes forbindelse til din internetudbyder.',
'gtCantConnectNoResponse' : 'Vi kan ikke oprette forbindelse til internettet – der var intet svar fra din internetudbyder.',
'gtChina' : 'Kina',
'gtClientList' : 'Tilsluttede enheder',
'gtClose' : 'Luk',
'gtConfig' : 'Konfigurér',
'gtConfigureRouter' : 'Konfigurér router',
'gtConnDevices' : 'Tilsluttede enheder',
'gtConnectingToNew' : 'Sådan opretter du forbindelse til dit nye netværk',
'gtConnectionDet' : 'Detaljer om forbindelse',
'gtConnType' : 'Tilslutningstype',
'gtContentFiltering' : 'Webstedsfiltre',
'gtCopyright' : 'Copyright &copy; 2012. Belkin. Alle rettigheder forbeholdes.',
'gtCurrTimezone' : 'Europa/Helsinki {REPLACE THIS SPAN WITH DETECTED Belkin TZ ID description}',
'gtDashboard' : '&larr; Dashboard',
'gtDashTitle' : 'Belkin-router dashboard',
'gtDataRate' : 'Datafrekvens',
'gtDDNS' : 'DDNS',
'gtDHCPList' : 'Tilsluttede enheder',
'gtDHCPServer' : 'DHCP-server',
'gtDMZ' : 'DMZ',
'gtDNS' : 'DNS',
'gtDown' : 'Ned',
'gtDownloadSpeed' : 'Downloadhastighed',
'gtEncap' : 'Indkapsling:',
'gtFileInstallError' : 'Filen kunne ikke installeres – måske er det den forkerte filtype',
'gtFileLoadError' : 'Filen kunne ikke indlæses – måske er det den forkerte filtype',
'gtFirewall' : 'Firewall',
'gtFirmware' : 'Firmware',
'gtFirmwareUpdate' : 'Firmwareopdatering',
'gtFrance' : 'Frankrig',
'gtFreshest' : 'Vi henter den nyeste version af vores firmware...',
'gtFrom' : 'Fra:',
'gtFWUpdate' : 'Firmwareopdatering',
'gtFWUpToDate' : 'Din firmware er nu opdateret.',
'gtGermany' : 'Tyskland',
'gtGuestAccess' : 'Gæsteadgang',
'gtGuestNetwork' : 'Gæstenetværk',
'gtHomeNetwork' : 'Hjemmenetværk',
'gtIfYouKnowConnection1' : 'Hvis du kender din forbindelsestype, kan du <a href="700-SelectConnection.htm" id="ISP1a010">konfigurere den manuelt &raquo;</a>',
'gtIfYouKnowConnection2' : 'Hvis du kender din forbindelsestype, kan du <a href="700-SelectConnection.htm" id="ISP2a010">konfigurere den manuelt &raquo;</a>',
'gtIfYouKnowConnection3' : 'Hvis du kender din forbindelsestype, kan du <a href="700-SelectConnection.htm" id="ISP3a010">konfigurere den manuelt &raquo;</a>',
'gtIfYouKnowConnection4' : 'Hvis du kender din forbindelsestype, kan du <a href="700-SelectConnection.htm" id="ISP4a010">konfigurere den manuelt &raquo;</a>',
'gtIfYouKnowConnection4a' : 'Hvis du kender din forbindelsestype, kan du <a href="700-SelectConnection.htm" id="ISP4aa010">konfigurere den manuelt &raquo;</a>',
'gtIfYouKnowConnection5' : 'Hvis du kender din forbindelsestype, kan du <a href="700-SelectConnection.htm" id="ISP5a010">konfigurere den manuelt &raquo;</a>',
'gtIfYouKnowConnection6' : 'Hvis du kender din forbindelsestype, kan du <a href="700-SelectConnection.htm" id="ISP6a010">konfigurere den manuelt &raquo;</a>',
'gtIfYouKnowConnection7' : 'Hvis du kender din forbindelsestype, kan du <a href="700-SelectConnection.htm" id="ISP7a010">konfigurere den manuelt &raquo;</a>',
'gtIntellistream' : 'Intellistream',
'gtInterleavePath' : 'Interleave-sti',
'gtInternetSettings' : 'Internetindstillinger',
'gtIOSConnect01' : 'iPhone, iPad og iPod touch',
'gtIOSConnect02' : 'Din enhed leverer en menu med tilgængelige trådløse netværker i programmet Indstillinger.',
'gtIOSConnect03' : 'Åbn programmet <strong>Indstillinger</strong> og vælg<strong>Wi-Fi</strong>.',
'gtIOSConnect04' : 'Vælg <strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong> fra netværkslisten. <!-- IF NOT OPEN --> <span tid="gtNotOpen">Hvis du bliver bedt om det, skal du indtaste netværkets adgangskode <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>.</span> <!-- /IF -->',
'gtIPv6' : 'IPv6',
'gtIPV6Connection' : 'IPv6-forbindelse',
'gtISP' : 'Internetudbyderens forbindelsestype',
'gtJapan' : 'Japan',
'gtLANIP' : 'LAN IP-adresse',
'gtLANMAC' : 'LAN/WLAN MAC',
'gtLANSettings' : 'LAN-indstillinger',
'gtLANSubnet' : 'LAN undernetmaske',
'gtLLC' : 'LLC',
'gtLoadPrevSettings' : 'Indlæs tidligere indstillinger',
'gtLocalNetwork' : 'Lokalnetværk',
'gtLocalSettings' : 'Lokale netværksindstillinger',
'gtLocked' : 'låst',
'gtMACAddress' : 'MAC-adresse',
'gtMACAddressFiltering' : 'MAC adressefiltrering',
'gtMacConnect01' : 'Mac OS X',
'gtMacConnect02' : 'Din computer har en menu med tilgængelige trådløse netværk til højre på menulinjen.',
'gtMacConnect03' : 'Klik på ikonet med de trådløse bølger.',
'gtMacConnect04' : 'Vælg <strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong> fra netværkslisten. <!-- IF NOT OPEN --> <span tid="gtNotOpen">Hvis du bliver bedt om det, skal du indtaste netværkets adgangskode <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>.</span> <!-- /IF -->',
'gtMaybeLater' : 'Måske senere',
'gtMbitPerSec' : 'Mb/s',
'gtMeaning' : 'Hvad betyder det?',
'gtMedia' : 'Medier',
'gtMediaServer' : 'Medieserver',
'gtmidnight' : 'kl. 24:00',
'gtModel' : 'Model',
'gtName' : 'Navn',
'gtNeedMoreHelp' : 'Har du brug for mere hjælp?',
'gtNetName' : 'Netværksnavn',
'gtNewFWAvailableModem' : 'Vi har ny firmware til dit modem.',
'gtNewFWAvailableRouter' : 'Vi har ny firmware til din router.',
'gtNewFWAvailableRouterAndModem' : 'Vi har ny firmware til din router og dit modem.',
'gtNext' : 'Næste',
'gtNo' : 'Nej',
'gtNoiseMargin' : 'Støjmargen',
'gtNoMyNet' : 'Jeg ser ikke mit netværk',
'gtNoon' : 'kl. 12:00',
'gtNoSecCard' : 'Du bedes notere dit netværksnavn og din adgangskode, så du kan finde det senere.',
'gtNotOpen' : 'Hvis du bliver bedt om det, skal du indtaste netværkets adgangskode <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>.',
'gtNZ' : 'New Zealand',
'gtOffline' : 'Offline',
'gtOnline' : 'Online',
'gtOptionalSoftware' : 'Valgfri software',
'gtOptionalSW' : 'Valgfri software',
'gtOptSW' : 'Valgfri software',
'gt-OR-' : '-ELLER-',
'gtOther' : '...',
'gtOutputPower' : 'Udgangseffekt',
'gtParentalControls' : 'Forældrekontrol',
'gtPass' : 'Adgangskode:',
'gtPIC' : 'Forældrekontrol til internettet',
'gtPICOtherTimes' : 'På alle andre tidspunkter vil denne enhed ikke have adgang til internettet.',
'gtPleaseCallISP' : 'Du bedes kontakte din internetudbyder',
'gtPortForwarding' : 'Videresendelse af port',
'gtPrint' : 'Udskriv',
'gtReadAllAboutIt' : 'For mere hjælp:',
'gtReconnectingHell' : 'Genopretter forbindelse...',
'gtRegister' : 'Registrér',
'gtRegistration' : 'Registrering',
'gtRestartRouter' : 'Genstart routeren',
'gtRestoreDef' : 'Gendan standarder',
'gtRestoreFactDefault' : 'Gendan fabriksstandarder',
'gtRestoreFactDefaults' : 'Gendan fabriksstandarder',
'gtRestoreSettigns' : 'Gendan indstillinger',
'gtRetest' : 'Test forbindelsen igen',
'gtRouterDetails' : 'Routerdetaljer',
'gtRouterInfo' : 'Routerinfo.',
'gtSave' : 'Gem',
'gtSaveCurrentSettings' : 'Gem aktuelle indstillinger',
'gtSaved' : 'Ikke-navngivet enhed gemt',
'gtSaveRestore' : 'Gem/gendan indstillinger',
'gtSaveRestoreSettings' : 'Gem/gendan indstillinger',
'gtSaveSettings' : 'Gem/sikkerhedskopiér indstillinger',
'gtSecLog' : 'Sikkerhedslog',
'gtSecurity' : 'Sikkerhed',
'gtSelectLang' : 'Vælg sprog:',
'gtSelfHeal' : 'Selvreparation',
'gtSelfHealing' : 'Selvreparation',
'gtSerialSupport' : 'På den næste side vil vi notere din routers serienummer til supportformål.',
'gtShowtime' : 'Showtime',
'gtSpeedTestResults' : 'Seneste søgning: For 1 dag siden, kl. 15.57',
'gtStaticRouting' : 'Statisk routing',
'gtStatus' : 'Status',
'gtSystemSettings' : 'Systemindstillinger',
'gtTo' : 'Til:',
'gtTraffStats' : 'Statistikker over trafik',
'gtTryAgain' : 'Forsøg igen',
'gtUnlocked' : 'låst op',
'gtUp' : 'Op',
'gtUpdate' : 'updater',
'gtUpdateNoPowerModem' : 'Vi opdaterer dit modem med den nye firmware. Sluk ikke, mens det er i gang.',
'gtUpdateNoPowerRouter' : 'Vi opdaterer din router med den nye firmware. Sluk ikke, mens det er i gang.',
'gtUploadSpeed' : 'Uploadhastighed',
'gtUSA' : 'USA',
'gtUserName' : 'Brugernavn:',
'gtUtils' : 'Funktioner',
'gtVCI' : 'VCI:',
'gtVCMUX' : 'VC/MUX',
'gtVPI' : 'VPI:',
'gtWAN' : 'WAN-indstillinger',
'gtWANDNS' : 'DNS-adresse',
'gtWANGateway' : 'WAN gateway',
'gtWANIP' : 'WAN IP-adresse',
'gtWANMAC' : 'WAN MAC-adresse',
'gtWANPingBlocking' : 'Blokering af WAN ping',
'gtWANSubnet' : 'WAN undernetmaske',
'gtWebsiteFilter' : 'Webstedsfiltre',
'gtWelcome' : 'Velkommen',
'gtWiFi' : 'WiFi',
'gtWifiSettings' : 'Dine WiFi indstillinger er nu ændret.',
'gtWinConnect01' : 'Windows 7 eller 8',
'gtWinConnect02' : 'Din computer har en menu med tilgængelige trådløse netværk til højre på proceslinjen.',
'gtWinConnect03' : 'Højreklik på det ikon, der viser signalstyrkesøjler.',
'gtWinConnect04' : 'Vælg <strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong>. <!-- IF NOT OPEN --> <span tid="gtNotOpen">Hvis du bliver bedt om det, skal du indtaste netværkets adgangskode <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>.</span> <!-- /IF -->',
'gtWinConnect05' : 'Windows Vista og Windows XP',
'gtWinConnect06' : 'Din computer har en menu med tilgængelige trådløse netværk til højre på proceslinjen.',
'gtWinConnect07' : 'Højreklik på det ikon, som viser en computer med trådløse bølger (XP) eller to computere (Vista).',
'gtWinConnect08' : 'Vælg <strong>Se tilgængelige trådløse netværk</strong> (XP) eller <strong>Opret forbindelse til et netværk</strong> (Vista) fra den resulterende menu.',
'gtWinConnect09' : 'Vælg <strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong>. <!-- IF NOT OPEN --> <span tid="gtNotOpen">Hvis du bliver bedt om det, skal du indtaste netværkets adgangskode <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>.</span> <!-- /IF -->',
'gtWireless' : 'Trådløs',
'gtWiring' : 'Ledningsføring',
'gtWPSShort' : 'WPS',
'gtWPS' : 'Wi-Fi-beskyttet installation',
'gtYes' : 'Ja',
'htFWUpdate' : 'Hvad er firmwareopdateringer?',
'htFWUpdateContent' : 'Fra tid til anden udgiver Belkin måske nye versioner af routerens funktionsprogrammering. Disse opdateringer indeholder forbedringer og rettelser til din router.<br><br>BEMÆRK: Du bør sikkerhedskopiere dine aktuelle indstillinger, før du opdaterer til en ny version af firmwaren.',
'htParent' : 'Hvad er webstedsfilter?',
'htPIC' : 'Din internetkontrol',
'htPICBlocked' : 'Internet er stoppet midlertidigt',
'htPICBlockedContent' : 'Du bedes gendanne adgang, når du er parat til at returnere internetforbindelse til alle enheder.',
'htPICContent' : 'Med internetkontrol kan du nu brugerindstille et tidsrum, hvor internetadgang blokeres for hver enhed.',
'htSaveRestore' : 'Hvad betyder det at gemme, indlæse eller gendanne indstillinger?',
'htSaveRestoreContent' : 'Din router husker indstillingerne på f.eks. ting, såsom netværksnavn, adgangskode, osv. Disse indstillinger kan gemmes (som en sikkerhedskopi), og kan derefter indlæses igen i din router. Routerens indstillinger kan også gendannes til de oprindelige fabriksstandardindstillinger.',
'htSaveRestoreContentMobile' : '<br>* På iPhone, iPad og iPod Touch er lagring og indlæsning af en indstillingsfil ikke tilgængelig. Brug en anden enhed, såsom en bærbar pc, til at gemme og indlæse en indstillingsfil.',
'ISP1t003' : 'Fortæl dem, at din router fik en IP-adresse, men DNS virker ikke.',
'ISP1t007' : 'DNS oversætter navne, såsom "belkin.com" til numeriske adresser (IP-adresser), som computere bruger til at navigere på internettet. Din router har en IP-adresse, hvilket betyder, at den har forbindelse til internettet, men DNS virker ikke, så du kan ikke gå på internettet, hvilket antyder, at der er noget galt hos internetudbyderen.  <span class="nub"></span>',
'ISP2t003' : 'Fortæl dem, at din router fik en IP-adresse, og DNS virker, men du kan ikke pinge nogen.',
'ISP2t007' : 'Man "pinger" andre maskiner på internettet for at teste om man kan kommunikere med dem. DNS oversætter navne, såsom "belkin.com" til numeriske adresser (IP-adresser), som computere bruger til at navigere på internettet. Din router har en IP-adresse, hvilket betyder, at den har forbindelse til internettet, og DNS, som du fik fra din internetudbyder virker, men det er ikke muligt at pinge. Dette antyder, at der er noget galt hos din internetudbyder.<span class="nub"></span>',
'ISP3t004' : 'Fortæl dem, at dit brugernavn og adgangskode blev godkendt, men du har stadig ikke nogen internetforbindelse.',
'ISP3t007' : 'Man "pinger" andre maskiner på internettet for at teste om man kan kommunikere med dem. Din internetudbyder godkendte dit brugernavn og adgangskode, men det er ikke muligt at pinge, så du kan ikke gå på internettet. Dette antyder, at der er noget galt hos din internetudbyder.  <span class="nub"></span>',
'ISP4t003' : 'Fortæl dem, at dit brugernavn og adgangskode ikke blev godkendt efter nogle forsøg.',
'ISP4t007' : 'Din internetforbindelse kræver et brugernavn og en adgangskode, men din internetudbyder godkendte ikke dét, du indtastede. De vil kunne sikre, at du har de rigtige oplysninger.  <span class="nub"></span>',
'ISP5t003' : 'Fortæl dem, at du valgte en dynamisk forbindelse, men var ikke i stand til at få en IP-adresse.',
'ISP5t007' : 'En IP-adresse identificerer en router eller anden enhed på internettet. Din internetudbyder giver ikke din router en adresse, og uden en IP-adresse kan du ikke oprette forbindelse. Dette antyder, at der er noget galt hos din internetudbyder, eller din forbindelse er ikke en dynamisk forbindelse.  <span class="nub"></span>',
'ISP6t003' : 'Fortæl dem, at du valgte en statisk forbindelse, men var ikke i stand til at komme på internettet.',
'ISP6t007' : 'En statisk forbindelse blev brugt, da din internetudbyder har anvist dig en eller flere specifikke IP-adresser.  <span class="nub"></span>',
'ISP7t003' : 'Fortæl dem, at dine VPI/VCI-indstillinger ikke virker, og bed dem give dig de rigtige tal.',
'ISP7t007' : 'VPI og VCI meddeler din router hvilken sti der skal anvendes til at kommunikere med din internetudbyder. Vi kunne ikke registrere de rigtige indstillinger. <span class="nub"></span>',
'Network24Passkey' : '{REPLACE WITH 2.4 PASSWORD}',
'Network24SSID' : '{REPLACE WITH 2.4 SSID}',
'p100t002' : 'Lad os oprette forbindelse til internettet.',
'p100t003' : 'Du har oprettet forbindelse til din nye router, så vi skal oprette forbindelse til din internetudbyder.',
'p100t004' : 'Lad os oprette forbindelse til internettet.',
'p100t005' : 'Du har oprettet forbindelse til din nye router, så vi skal oprette forbindelse til din internetudbyder.',
'p100t007' : 'Registrér min forbindelse',
'p100t008' : 'Hvis du er sikker på din forbindelsestype, kan du <a href="700-SelectConnection.htm" id="p100a009" tid="p100t009">konfigurere den manuelt &raquo;</a>, eller gå direkte til <a href="000-Dashboard.htm" id="p100a010" tid="p100t010">dashboard &raquo;</a>.',
'p100t009' : 'konfigurér den manuelt &raquo;',
'p100t010' : 'dashboard &raquo;',
'p100t013' : 'Lige nu viser vi siderne in&nbsp;',
'p100t024' : 'En installation, som næsten er automatisk',
'p100t025' : 'Først kontrollerer vi automatisk dine kabler og registrerer den forbindelsestype, som du har til din internetudbyder. Der er ikke meget for dig at lave. Derefter sikrer vi os, at din routers software er opdateret. <span class="nub"></span>',
'p1010MRt001' : 'Der er problemer med at kommunikere med dit modem.',
'p1010MRt002' : 'Vi tror, der er et kabelproblem.',
'p1010MRt003' : 'Du kan gøre følgende for at løse problemet:',
'p1010MRt004' : 'Sørg for, at din modem-router er tilsluttet det telefonstik, som har internetforbindelse. Der skal være et netværkskabel mellem ADSL-porten på din modem-router (det grå stik foroven) og telefonstikket.',
'p1010MRt005' : 'Sørg for, at modemmet er tændt. Begge ender af dets strømadapter skal være tilsluttet, og en eller flere dioder på modemmet skal lyse.',
'p1010MRt006' : 'Et netværkskabel skal være sat i modemmet og det gule stik på routeren. Kablet fører signalet fra dit modem til din router. Du kan ikke komme online uden det.',
'p1010MRt007' : 'Hvis de begge sidder korrekt, kan du forsøge at genstarte modemmet ved at afbryde det fra strømforsyningen, vente 15 sekunder og derefter sætte det i stikkontakten igen. Hvis dit modem har et batteri, skal du muligvis finde modemmets nulstillingsknap og bruge den i stedet for.',
'p1010MRt008' : 'Sådan skal disse forbindelser se ud:',
'p1010MRt009' : 'Der bliver forsat søgt efter en forbindelse, mens du kontrollerer.',
'p1010MRt010' : 'Det almindeligste ledningsproblem er mellem modemmet og routeren. Det er vigtigt at kontrollere kablets begge ender. En ende skal være sat i det gule stik på din nye router. Den anden ende skal være sat i et lignende stik på dit modem. Forskellige modemfabrikanter markerer stikkene forskelligt. Du vil måske se markeringerne "data", "LAN", "network" eller "Ethernet".  <span class="nub"></span>',
'p1020t001' : 'Der er problemer med forbindelsen til din internetudbyder.',
'p1020t002' : 'Du bedes genstarte din modem-router.',
'p1020t003' : 'Vi kan ikke få en internetforbindelse, så vi genstarter din modem-router.',
'p1020t004' : 'Sluk for modem-routeren. Dette sker som regel på en tænd/sluk-kontakt på modem-routeren, eller du kan blot afbryde den fra strømforsyningen.',
'p1020t005' : 'Vent 15 sekunder.',
'p1020t006' : 'Tænd for din modem-router igen.',
'p1020t007' : 'Efter adskillige sekunder vil lysdioderne lyse og oprette forbindelse til din internetudbyder.',
'p1020t008' : 'Hvis dette problem fortsætter, skal du kontakte din internetudbyder for at løse problemet med din konto.',
'p1020t009' : 'Når din modem-router har slukket og tændt igen, fortsætter konfigurationen automatisk.',
'p1020t010' : 'Hvorfor skal modemmet genstartes?',
'p1020t011' : 'Visser modemmer skal genstartes, før der kan oprettes forbindelse med en ny router eller en ubekendt computer. Og hvis der er flere problemer hos din internetudbyder, kan modemmet uventet afbryde din forbindelse. Modemmet er registreret, men ikke på internettet, så en genstart vil sandsynligvis løse problemet.<span class="nub"></span>',
'p1100t001' : 'En firmwareopdatering er tilgængelig!',
'p1100t002' : 'Vi anbefaler, at du opgraderer din router til den seneste firmware for at sikre, at alt fungerer korrekt.',
'p1100t003' : 'Lad mig se, hvad der er nyt',
'p1201t001' : 'Lås dashboardet med en adgangskode.',
'p1201t002' : 'Indtast en adgangskode for at låse dashboardet:',
'p1201t003' : 'Indtast en adgangskode.',
'gtSetPassword' : 'Angiv adgangskode',
'p1201t005' : 'Annuller',
'p1210t001' : 'Dashboardet er låst.',
'p1210t002' : 'Indtast din adgangskode:',
'p1210t003' : 'Indtast din adgangskode.',
'p1210t004' : 'Din adgangskode er ikke korrekt.',
'p1210t005' : 'Lad mig få adgang!',
'p1300t001' : 'Lidt mere fart.',
'p1300t002' : 'Du kan få større ydeevne ud af din internetforbindelse ved at installere Intellistream. Dette omfatter at hastighedstest.',
'p1300t003' : 'Konfigurér Intellistream',
'p1300t004' : 'Måske senere',
'p1302t001' : 'Din firmware er up-to-date.',
'p1316t001' : 'Installation af opdateret firmware lykkedes ikke – prøv igen ved at klikke på "Søg efter ny firmware".',
'p1318t001' : 'Opgraderingsfilen er ikke den korrekte type eller version for denne enhed. Opgraderingen lykkedes ikke. Hent den rigtige fil og prøv igen',
'p1333t001' : 'Din firmware er blevet opdateret.',
'p1400t001' : 'Få fuldt udbytte af din USB-port.',
'p1400t002' : 'Der er valgfri software, som du kan installere, og som vil hjælpe dig med at få det meste ud af USB-porten på din router.',
'p1400t003' : 'Vis mig den valgfri software',
'p1500t001' : 'Du er her.',
'p1500t002' : 'Du ser ud til at være i <span tid="gtCurrTimezone">Europa/Helsinki {REPLACE THIS SPAN WITH DETECTED Belkin TZ ID description}</span> tidszonen. Er det rigtigt?',
'p1500t003' : 'Det er rigtigt',
'p1500t004' : 'Jeg vælger selv',
'p200t001' : 'Etablerer forbindelse...',
'p200t002' : ' Vi kontrollerer de fysiske forbindelser til din router.',
'p202At001' : 'Kontrollerer stadig...',
'p202At002' : ' Vi registrerer din internetudbyders forbindelsestype. Dette kan tage nogle minutter.',
'p202Bt001' : 'Kontrollerer stadig...',
'p202Bt002' : ' Kontrollerer, om din internetudbyderkræver en adgangskode. Dette kan tage nogle minutter.',
'p202Ct001' : 'Kontrollerer stadig...',
'p202Ct002' : ' Tester forbindelsen nu.',
'p202t001' : 'Etablerer forbindelse...',
'p202t002' : ' Vi registrerer din internetudbyders forbindelsestype.',
'p208t001' : 'Har du VPI/VCI-tallene ved hånden?',
'p208t002' : 'For at komme online skal du indtaste VPI- og VCI-tallene. De identificerer den kommunikationssti, som din internetudbyder ønsker, du skal bruge.',
'p208t003' : 'Du skulle have fået disse tal fra din internetudbyder. Kontakt din internetudbyder, hvis du ikke kan finde dem.',
'p208t006' : '0',
'p208t007' : '0',
'p208t009' : 'Prøv min forbindelse',
'p208t011' : 'VPI og VCI',
'p208t012' : 'VPI (Virtual Path Identifier) og VCI (Virtual Circuit Identifier) angiver til routeren den sti, som skal bruges til at kommunikere med internetudbyderen. Der er en række almindelige indstillinger, som vi automatisk prøver, før du bliver bedt om oplysninger.<span class="nub"></span>',
'p209t001' : 'Der er noget galt med disse indstillinger.',
'p209t002' : 'Internetudbyderen afviste VPI/VCI-tallene. Vil du prøve igen?',
'p210CXt001' : 'Du har en PPPoE-forbindelse.',
'p210CXt002' : 'Dette kræver et brugernavn og en adgangskode for at få adgang til internettet.',
'p210CXt004' : '<strong>Du bør have fået disse oplysninger fra din internetudbyder. Kontakt din internetudbyder, hvis du ikke kan finde dem.</strong>',
'p210CXt006' : '0',
'p210CXt007' : '0',
'p210CXt016' : 'Prøv min forbindelse',
'p210CXt017' : 'PPPoE',
'p210CXt018' : 'Point-to-Point Protocol over ethernet skaber en sikker forbindelse mellem din router og internetudbyderen. Det benyttes som regel af telefonselskaber.<span class="nub"></span>',
'p210DXt001' : 'Du har en PPPoA-forbindelse.',
'p210DXt002' : 'Dette kræver et brugernavn og en adgangskode for at få adgang til internettet.',
'p210DXt004' : '<strong>Du bør have fået disse oplysninger fra din internetudbyder. Kontakt din internetudbyder, hvis du ikke kan finde dem.</strong>',
'p210DXt006' : '0',
'p210DXt007' : '0',
'p210DXt016' : 'Prøv min forbindelse',
'p210DXt017' : 'PPPoA',
'p210DXt018' : 'Point-to-Point Protocol over ATM skaber en sikker forbindelse mellem din router og internetudbyderen. Det benyttes som regel af telefonselskaber.<span class="nub"></span>',
'p210t001' : 'Du har en PPPoE DSL-forbindelse.',
'p210t002' : 'Du skal have et brugernavn og en adgangskode for at få adgang til internettet.',
'p210t003' : '<strong>Du bør have fået disse oplysninger fra din internetudbyder. Kontakt din internetudbyder, hvis du ikke kan finde dem.</strong>',
'p210t005' : 'Internetudbyder brugernavn:',
'p210t009' : 'Prøv min forbindelse',
'p210t010' : 'PPPoE',
'p210t011' : 'Point-to-Point Protocol over ethernet skaber en sikker forbindelse mellem din router og internetudbyderen. Det benyttes som regel af telefonselskaber.<span class="nub"></span>',
'p211t001' : 'Etablerer forbindelse...',
'p211t002' : ' Vi prøver at logge dig på hos din internetudbyder. Dette kan tage op til to minutter eller længere.',
'p212DXt001' : 'Der er noget galt med dine PPPoA-indstillinger.',
'p212DXt002' : 'Dit brugernavn, adgangskode eller begge dele er forkerte. Forsøg igen. Kontakt din internetudbyder, hvis du ikke kan finde de rigtige oplysninger.',
'p212t001' : 'Der er noget galt med dine PPPoE-indstillinger.',
'p212t002' : 'Dit brugernavn, adgangskode eller begge dele er forkerte. Forsøg igen. Kontakt din internetudbyder, hvis du ikke kan finde de rigtige oplysninger.',
'p220t002' : 'Du fuldfører forbindelsen og får adgang til internettet ved at indtaste et brugernavn, en adgangskode og serviceadresse.',
'p220t003' : '<strong>Du bør have fået disse oplysninger fra din internetudbyder. Kontakt din internetudbyder, hvis du ikke kan finde dem.</strong>',
'p220t006' : 'Internetudbyder brugernavn:',
'p220t007' : 'Service Address (Serviceadresse):',
'p220t010' : 'Prøv min forbindelse',
'p220t013' : 'Du har en L2TP- eller PPTP-forbindelse.',
'p220t014' : 'Eller vælg min forbindelse manuelt &raquo;',
'p220t015' : 'L2TP og PPTP',
'p220t016' : 'Både L2TP (Layer 2 Tunneling Protocol) og PPTP (Point-to-Point Tunneling Protocol) opretter en privat og krypteret forbindelse mellem dig og din internetudbyder.<span class="nub"></span>',
'p221t001' : 'Etablerer forbindelse...',
'p221t002' : ' Vi prøver at logge dig på hos din internetudbyder. Det kan tage op til 2 minutter.',
'p222t002' : 'Dit brugernavn, adgangskode eller begge dele er forkerte. Forsøg igen. Kontakt din internetudbyder, hvis du ikke kan finde de rigtige oplysninger.',
'p222t004' : 'Der er noget galt med dine indstillinger.',
'p2300t001' : 'Din installerede firmwareversion:',
'p2300t002' : 'Opdatér firmware fra lokalt gemte fil:',
'p2300t006' : 'Er du sikker på, at du vil installere {{file}}?',
'p2300t010' : 'Søg efter ny firmware',
'p2400t006' : 'Dine aktuelle indstillinger vil blive udskiftet. Er du sikker på, at du vil indlæse {{file}}?',
'p2410t001' : 'Er du sikker på, at du vil gendanne fabriksstandarder?',
'p2410t002' : 'Når du klikker på "Ja", bliver dine routerindstillinger såsom navn og adgangskode slettet og erstattes med de oprindelige fabriksstandarder.',
'p300t005' : 'Nu er du online!',
'p310t001' : 'Der findes en opdatering!',
'p310t001x' : 'Denne opdatering (v2.1.0c) inkluderer:',
'p310t002' : 'Du bedes læse og acceptere licensaftalen for at installere den nye firmware.',
'p310t003' : 'Licensaftale',
'p310t004' : 'Jeg accepterer licensaftalen.',
'p310t005' : 'Installer opdatering',
'p310t006' : 'Hvad er firmware?',
'p310t007' : 'Firmware er den software, som kører din router. Vi opdaterer firmware for at forbedre din routers ydeevne, så det er godt at sørge for, at du har den nyeste.  <span class="nub"></span>',
'p315t001' : 'Downloader ny firmware.',
'p315t002' : 'Status for overførsel:',
'p315t003' : 'Hvad er firmware?',
'p315t004' : 'Firmware er den software, som kører din router. Vi opdaterer firmware for at forbedre din routers ydeevne, så det er godt at sørge for, at du har den nyeste.  <span class="nub"></span>',
'p320t001' : 'Installerer ny firmware.',
'p320t002' : 'Når den nye firmware er blevet anvendt, vil vi genstarte din router for at fuldføre installationen.',
'p320t004' : 'Hvad er firmware?',
'p320t005' : 'Firmware er den software, som kører din router. Vi opdaterer firmware for at forbedre din routers ydeevne, så det er godt at sørge for, at du har den nyeste.  <span class="nub"></span>',
'p320t006' : 'Det vil tage omkring tre minutter. Status for opdatering:',
'p320t010' : 'Når den nye firmware er blevet anvendt, vil vi genstarte dit modem for at fuldføre installationen.',
'p321t001' : 'Genstarter  routeren',
'p321t002' : 'Genstarter dit modem',
'p321t003' : 'Det er nødvendigt at genstarte din router, nu da firmwaren er blevet installeret.',
'p321t004' : 'Genstarter:',
'p321t005' : 'Firmwareopdateringer',
'p321t006' : 'Firmware er den software, som bliver brugt til at implementere netværks- og sikkerhedsprotokoller. Opdateringer forbedrer pålidelighed og funktionalitet, så det er en god idé at sørge for, at du har den nyeste. <span class="nub"></span>',
'p321t010' : 'Det er nødvendigt at genstarte dit modem, nu da firmwaren er blevet installeret.',
'p330t001' : 'Kontrollerer forbindelseshastigheden...',
'p330t002' : 'En hurtig test vil hjælpe din router med at optimere internetforbindelsen. Det tager et par minutter.',
'p331t001' : 'Din firmware er opdateret.',
'p332t001' : 'Vi vil forsøge firmwareopdateringen igen senere.',
'p333t001' : 'Din firmware er blevet opdateret.',
'p334t001' : 'Resultater på hastighedstesten!',
'p334t002' : 'Dette er hvad vi fandt:',
'p334t003' : 'Downloadhastighed',
'p334t004' : 'Mb/s',
'p334t005' : 'Uploadhastighed',
'p334t006' : 'Mb/s',
'p340t002' : ' Vi genopretter forbindelse til din router, så vi kan fortsætte.',
'p341t001' : 'Genstart routeren',
'p341t002' : 'Vi har problemer med at genoprette forbindelse til din router. En genstart hjælper muligvis.',
'p341t003' : 'Tag din routers strømstik ud af stikkontakten, vent et par sekunder og sæt det i igen. Når din router viser en konstant blå diode, kan der oprettes forbindelse.',
'p341t003w' : 'Afbryd routeren, vent et par sekunder og sæt den i igen. Når din router viser en konstant blå diode, kan der oprettes forbindelse.',
'p341t004' : ' Vi venter på routeren, mens du gør dette.',
'p342t001' : ' Vi genopretter forbindelse til din router, så vi kan fortsætte.',
'p342t002' : 'Du skal muligvis vælge dit trådløse netværk igen <span tid="Network24SSID">({REPLACE WITH 2.4 SSID})</span> fra listen med trådløse netværk for at komme videre.',
'p343t002' : ' Vi genopretter forbindelse til din router for at fortsætte.',
'p343t003' : 'Du skal muligvis vælge dit trådløse netværk igen <span tid="Network24SSID">({REPLACE WITH 2.4 SSID})</span> for at fortsætte.',
'p344t001' : 'Genstart routeren.',
'p344t002' : 'Vi har problemer med at genoprette forbindelse til din router. En genstart hjælper muligvis.',
'p344t003' : 'Tag din routers strømstik ud af stikkontakten, vent 15 sekunder og sæt det i igen. Når din router viser en konstant blå diode, vil vi genoprette forbindelse.',
'p344t003w' : 'Afbryd routeren, vent 15 sekunder og sæt den i igen. Når din router viser en konstant blå diode, vil vi genoprette forbindelse.',
'p344t004' : ' Vi venter på routeren, mens du gør dette.',
'p400f010' : 'WPA2',
'p400f011' : 'WPA/WPA2',
'p400f012' : 'WEP',
'p400f013' : 'Åbn',
'p400t001' : 'Tilslut alting hurtigere.',
'p400t002' : 'Hvis du giver din nye router det samme netværksnavn og adgangskode som din gamle router, kan alle dine enheder oprette forbindelse med det samme.',
'p400t004' : 'Netværksnavn:',
'p400t008' : 'Sikkerhedstype: <em class="hide-on-phones">(WPA2 er den sikreste).</em>',
'p400t014' : 'Dit 5 Ghz bånd vil have det samme navn, men med ".media" tilføjet i slutningen af navnet.',
'p400t015' : 'Du kan ændre dette senere, hvis du vil.',
'p400t017' : 'Gem og fortsæt',
'p400t018' : 'Hvorfor skal jeg give mit netværk et andet navn?',
'p400t019' : 'Alle trådløse enheder, som tidligere var tilsluttet din gamle router, vil automatisk oprette forbindelse til det nye trådløse netværk, hvis du bruger samme netværksnavn og adgangskode. Desuden, når du søger efter dit netværk på enheder, er det nemmere at finde et entydigt navn.<span class="nub"></span>',
'p450a009' : 'Fint – hvad så?',
'p450t001' : 'Dine ændringer er gemt.',
'p450t002' : 'Her er dit netværksnavn og adgangskode',
'p450t003' : 'Hvis du brugte dit gamle netværksnavn og adgangskode, bør dine eksisterende trådløse enheder oprette forbindelse nu.',
'p450t004' : 'Navn:',
'p450t008' : 'Din router kom med en etiket i bunden, hvor du kan skrive det nye netværksnavn. På den måde er det der altid, når du har brug for det.',
'p450t011' : 'Hvis du brugte dit tidligere netværksnavn og adgangskode, genopretter de fleste af dine trådløse enheder automatisk forbindelse, næste gang du starter dem. Med andre skal du genvælge dit netværk, og de vil automatisk oprette forbindelse derefter. Der er anvisninger for Windows, OS X, iOS og Android i  din Guide til hurtig installation.  <span class="nub"></span>',
'p451a009' : 'Fint – hvad så?',
'p451t001' : 'Ingen ændringer.',
'p451t002' : 'Dit netværksnavn og adgangskode blev ikke ændret.',
'p451t003' : 'Du skal oplyse hver af dine trådløse enheder om dit netværksnavn og adgangskode:',
'p451t004' : 'Navn:',
'p451t008' : 'Din router kom med en etiket i bunden, hvor du kan skrive dit netværksnavn. På den måde er det der altid, når du har brug for det.',
'p451t011' : 'Hver af dine trådløse enheder skal oplyses om dit nye netværk. Der er anvisninger for Windows, OS X, iOS og Android i  din Guide til hurtig installation.  <span class="nub"></span>',
'p500t001' : 'Sådan registrerer du din router.',
'p500t002' : 'Registrering er hurtig og kan spare meget tid, hvis du får brug for kundesupport.',
'p500t004' : 'Hvorfor skal jeg registrere?',
'p500t005' : 'Vi kan hurtigere hjælpe dig, hvis der bliver brug for det.<span class="nub"></span>',
'p500tCancel' : 'Registrér senere &raquo;',
'p500tSubmit' : 'Udfør registrering',
'p600t001' : 'Gå til routerens Valgfri software-side for at hente lignende software til dine andre computere og mobilenheder.',
'p600t002' : 'Tak, tag mig til dashboardet',
'p600t003' : 'Valgfri software',
'p600t004' : 'Disse softwareværktøjer kan hjælpe dig med at drage fordel af de avancerede funktioner, som din router tilbyder. Der er downloads til Apple iOS, Android, Windows og OS X.  <span class="nub"></span>',
'p601t001' : '<strong>Tak for din registrering!</strong>',
'p700MRt001' : 'Vi kunne ikke automatisk konfigurere din forbindelse. Vi skal bruge nogen flere oplysninger, så vi kan hjælpe dig med at oprette forbindelse.',
'p700MRt002' : 'Hvilken type forbindelse konfigurerer du?',
'p700MRt003' : 'Min forbindelse er en:',
'p700MRt005' : 'Dynamisk forbindelse  (1483 bro)',
'p700MRt007' : 'PPPoE-forbindelse',
'p700MRt009' : 'PPPoA-forbindelse',
'p700MRt011' : 'Statisk forbindelse (IPoA)',
'p700MRt014' : 'Jeg er ikke sikker på, hvilken type forbindelse jeg har:',
'p700MRt016' : 'Prøve automatisk igen',
'p700MRt017' : 'Forbindelsestype',
'p700MRt018' : '<span class="black">Dynamisk –</span> Disse forbindelser er ved at blive mere almindelig for visse DSL-udbydere.',
'p700MRt019' : '<span class="black">PPPoE og PPPoA –</span> Disse forbindelser kræver et brugernavn og adgangskode fra internetudbyderen.',
'p700MRt021' : '<span class="black">Statisk –</span> Disse kræver tilpassede parametre, som er entydige for hver bruger. <span class="nub"></span>',
'p700t001' : 'Vi kunne ikke automatisk konfigurere din forbindelse. Vi skal bruge nogen flere oplysninger, så vi kan hjælpe dig med at oprette forbindelse.',
'p700t002' : 'Hvilken type forbindelse konfigurerer du?',
'p700t003' : 'Min forbindelse er en:',
'p700t005' : 'Dynamisk forbindelse',
'p700t007' : 'PPPoE-forbindelse',
'p700t008' : 'L2TP- eller PPTP-forbindelse',
'p700t013' : 'Statisk forbindelse',
'p700t014' : 'Jeg er ikke sikker på, hvilken type forbindelse jeg har:',
'p700t914' : 'Kontakt din internetudbyder, hvis du stadig ikke kan afgøre din forbindelsestype.',
'p700t016' : 'Prøve automatisk igen',
'p700t017' : 'Forbindelsestype',
'p700t018' : '<span class="black">Dynamisk –</span> Almindeligt for de fleste kabel- og fiber-internetudbydere og nogen DSL-udbydere.',
'p700t019' : '<span class="black">PPPoE og PPTP –</span> Kræver et brugernavn og adgangskode fra internetudbyderen.',
'p700t021' : '<span class="black">Statisk –</span> Kræver tilpassede parametre, som er entydige for hver bruger. <span class="nub"></span>',
'p701MRt001' : 'Du har valgt en dynamisk forbindelse.',
'p701MRt002' : 'Du skulle have fået yderligere konfigurationsindstillinger fra din internetudbyder.',
'p701MRt004' : 'Dynamiske indstillinger:',
'p701MRt006' : '0',
'p701MRt007' : '0',
'p701MRt016' : 'Prøv min forbindelse',
'p701MRt017' : 'Dynamiske forbindelser',
'p701MRt018' : 'En dynamisk forbindelse konfigureres automatisk, når der er oprettet kommunikation med internetudbyderen.<span class="nub"></span>',
'p701t001' : 'Opretter dynamisk forbindelse...',
'p701t002' : ' Vi beder din internetudbyder om en forbindelse.',
'p702t001' : 'Genstarter modem...',
'p702t002' : 'Gør klar til at prøve en anden forbindelsestype ved at genstarte modemmet.',
'p710MRt001' : 'Du har valgt en statisk forbindelse.',
'p710MRt002' : 'Du skulle have fået statiske konfigurationsindstillinger fra din internetudbyder. Ring til din internetudbyder, hvis du ikke kan finde dem.',
'p710MRt004' : 'Statiske indstillinger:',
'p710MRt005' : 'IP-adresse:',
'p710MRt006' : '0',
'p710MRt007' : 'Undernetmaske:',
'p710MRt008' : '0',
'p710MRt009' : 'Standard gateway:',
'p710MRt010' : '0',
'p710MRt011' : 'DNS-server (primær):',
'p710MRt012' : '0',
'p710MRt013' : 'DNS-server (sekundær):',
'p710MRt014' : '0',
'p710MRt015' : 'Bemærk: Ikke alle internetudbydere kræver en sekundær DNS-server.',
'p710MRt016' : 'Prøv min statiske forbindelse',
'p710MRt017' : 'Statiske forbindelser',
'p710MRt018' : 'En statisk forbindelse er konfigureret manuelt, men giver en konsistent adresse til din router, som du nemmere kan få adgang til uden for dit netværk. Statiske forbindelser er ualmindelige i beboelsesinternettjenester og er generelt dyrere. <span class="nub"></span>',
'p710t001' : 'Du har valgt en statisk forbindelse.',
'p710t002' : 'Du skulle have fået statiske konfigurationsindstillinger fra din internetudbyder. Kontakt din internetudbyder, hvis du ikke kan finde dem.',
'p710t004' : 'Statiske indstillinger:',
'p710t005' : 'IP-adresse:',
'p710t006' : '0',
'p710t007' : 'Undernetmaske:',
'p710t008' : '0',
'p710t009' : 'Standard gateway:',
'p710t010' : '0',
'p710t011' : 'DNS-server (primær):',
'p710t012' : '0',
'p710t013' : 'DNS-server (sekundær):',
'p710t014' : '0',
'p710t015' : 'Bemærk: Ikke alle internetudbydere kræver en sekundær DNS-server.',
'p710t016' : 'Prøv min statiske forbindelse',
'p710t017' : 'Statiske forbindelser',
'p710t018' : 'En statisk forbindelse er konfigureret manuelt, men giver en konsistent adresse til din router, som du nemmere kan få adgang til uden for dit netværk. Statiske forbindelser er ualmindelige i beboelsesinternettjenester og er generelt dyrere.  <span class="nub"></span>',
'p711t001' : 'Opretter statisk forbindelse...',
'p711t002' : ' Vi beder din internetudbyder om en forbindelse.',
'p712t001' : 'Der er noget galt med dine statiske indstillinger.',
'p712t002' : 'En af adresserne eller andre elementer, som du har indtastet, er forkert, men det er uklart hvilken en.',
'p800t001' : 'Anvender dine ændringer.',
'p800t002' : 'Dine ændringer bliver anvendt, og routeren bliver genstartet.',
'p801t002' : ' Routeren er ved at genoprette forbindelsen. Der fortsættes, når det er sket.',
'p802t002' : 'Der mangler en trådløs forbindelse til routeren for at fortsætte.',
'p802t004' : 'Gå til din enheds menu for det trådløse netværk',
'p802t005' : 'Vælg dit nye netværk, som hedder <strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong>',
'p802t007' : 'Indtast din adgangskode, som er <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>',
'p802t009' : 'Du vil få forbindelse til routeren og der fortsættes.',
'p802t010' : ' Venter på at routeren genopretter forbindelsen.',
'p803t002' : 'Der mangler en trådløs forbindelse til routeren for at fortsætte.',
'p803t003' : 'Fordi du har ændret dit netværksnavn, skal du vælge dit trådløse netværk igen:',
'p803t004' : 'Gå til din enheds menu for det trådløse netværk',
'p803t005' : 'Vælg dit nye netværk, som hedder <strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong>',
'p803t007' : 'Indtast din adgangskode, som er <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>',
'p803t009' : 'Du vil få forbindelse til routeren og der fortsættes.',
'p803t010' : ' Venter på, at der genoprettes forbindelse.',
'p804t001' : 'Din enhed genoprettede ikke forbindelse.',
'p804t002' : 'Dette sker til tider, og kan nemt ordnes.',
'p804t025' : 'Hvis du har en anden internetaktiveret enhed, kan du gå til følgende URL for nyttige oplysninger: <strong>http://belk.in/PMuxOg</strong>',
'p804t026' : 'Hvis det ikke virker, skal du forbinde ethernetkablet direkte mellem dit modem og computeren.',
'p804t027' : ' Når der er fundet en forbindelse, vil der automatisk blive fortsat.',
'p900t001' : 'Det er nødvendigt at genstarte dit modem.',
'p900t002' : 'Der er ingen kontakt med dit modem.',
'p900t003' : 'Foretag en af følgende trin for at genstarte modemmet:',
'p900t004' : 'Sluk for modemmet. Dette sker som regel på en tænd/sluk-kontakt på modemmet, eller du kan blot afbryde det fra strømforsyningen. Visse modemmer har et batteri og på dem skal du finde modemmets nulstillingsknap.',
'p900t005' : 'Vent 15 sekunder.',
'p900t006' : 'Tænd for dit modem igen.',
'p900t007' : 'Efter adskillige sekunder vil dioderne lyse, og modemmet er klar til at kommunikere med routeren.',
'p900t008' : 'Når dit modem har slukket og tændt igen, fortsætter konfigurationen automatisk.',
'p900t009' : 'Hvorfor skal modemmet genstartes?',
'p900t010' : 'Visser modemmer skal genstartes for at kommunikere med en ny router eller en ubekendt computer. Modemmet er registreret, men kommunikerer ikke med din nye router, så en genstart vil sandsynligvis løse problemet.<span class="nub"></span>',
'p901t001' : 'Du bedes genstarte dit modem nu...',
'p901t002' : ' Modemmet bliver overvåget, mens det slukker og tænder igen.',
'p902t001' : 'Dit modem slukker.…',
'p902t002' : ' Det bliver overvåget for at sikre, at det tænder igen.',
'p903t001' : 'Brug for mere tid?',
'p903t002' : ' Modemmet bliver overvåget, mens det genstarter. Er der brug for mere tid?',
'p903t005' : 'Dette sker som regel ved hjælp af en tænd/sluk-kontakt på modemmet eller blot afbryde det fra strømforsyningen, men visse modemmer har et batteri, så på dem skal du bruge modemmets nulstillingsknap.',
'p904t001' : 'Brug for mere tid?',
'p904t002' : ' Modemmet bliver overvåget, mens det tænder igen. Er der brug for mere tid?',
'p905t001' : 'Dit modem er registreret igen.…',
'p905t002' : ' Modemmet forsøger at synkronisere med din internetudbyder. Dette vil tage et par minutter.',
'p950IMRt001' : 'Vi kunne ikke registrere en forbindelse til din ADSL-linje.',
'p950IMRt002' : 'Kontrollér, at der er et netværkskabel fra ADSL-vægstikket til det grå stik på din router.',
'p950IMRt004' : 'Vi tror, der er et kabelproblem.',
'p950IMRt005' : 'Der skal være et netværkskabel, som går mellem det grå stik på din router og dit ADSL/telefonstik. Kablet fører signalet fra dit internetudbyder til din router. Du kan ikke komme online uden det. Undersøg, at dette kabel er tilsluttet korrekt.',
'p950IMRt006' : 'Sådan skal denne forbindelse se ud:',
'p950IMRt007' : 'Det skal være et netværkskabel, som går mellem dit ADSL-vægstik til routerens strømstik (som har et indbygget modem). Kablet fører signalet fra dit internetudbyder til din router. Du kan ikke komme online uden det.',
'p950IMRt009' : 'Sådan skal denne forbindelse se ud:',
'p950IMRt010' : 'Der bliver forsat søgt efter en forbindelse, mens du kontrollerer.',
'p950IMRt014' : 'Ledningsføring',
'p950IMRt015' : 'Det almindeligste ledningsproblem er mellem vægstikket og routeren. Det er vigtigt at kontrollere kablets begge ender. En ende skal være sat i det grå stik på din nye router. Den anden ende skal være sat i ADSL-stikket. I visse tilfælde kan et filter mellem vægstikket og kablet være nødvendigt. <span class="nub"></span>',
'p950PMt001' : 'Vi kunne ikke registrere en forbindelse til din ADSL-linje.',
'p950PMt002' : 'Sørg for, at der er en netværksforbindelse mellem din router og dens strømstik (som har et indbygget modem).',
'p950PMt004' : 'Vi tror, der er et kabelproblem.',
'p950PMt005' : ' Undersøg, at netværkskablet er opdelt fra modemmets strømkabel, er tilsluttet det gule WAN-stik på din router. Du kan ikke komme online uden denne netværksforbindelse.',
'p950PMt009' : 'Sådan skal denne forbindelse se ud:',
'p950PMt010' : 'Der bliver forsat søgt efter en forbindelse, mens du kontrollerer.',
'p950PMt011' : 'Ledningsføring',
'p950PMt012' : 'Det almindeligste ledningsproblem er mellem vægstikket og modemmet. Det er vigtigt at kontrollere kablets begge ender. En ende skal være sat i din nye routers strømforsyning. Den anden ende skal være sat i ADSL-stikket. I visse tilfælde kan et filter mellem vægstikket og kablet være nødvendigt. <span class="nub"></span>',
'p950t001' : 'Vi har ikke registreret en forbindelse til dit modem.',
'p950t002' : 'Sørg for, at dit modem er sat i stikkontakt og tændt.',
'p950t003' : 'Sørg for, at et ethernetkabel forbinder dit modem med din router.',
'p950t004' : 'Vi tror, der er et kabelproblem.',
'p950t005' : 'Dit modem skal være tændt, og et ethernetkabel skal være sat i modemmet og det gule stik på routeren.',
'p950t006' : 'Efterse venligst følgende:',
'p950t007' : 'Sørg for, at modemmet er tændt. Kontrollér, at strømadapteren er tilsluttet i begge ender, og at en eller flere dioder på modemmet lyser.',
'p950t008' : 'Et ethernetkabel skal være sat i modemmet og det gule stik på routeren. Kablet fører signalet fra dit modem til din router. Du kan ikke komme online uden det.',
'p950t009' : 'Dine forbindelser bør se således ud:',
'p950t010' : 'Der bliver forsat søgt efter en forbindelse, mens du kontrollerer.',
'p950t011' : 'Ledningsføring',
'p950t012' : 'Det mest almindelige konfigurationsproblem er ledningsføringen mellem modemmet og routeren. En ende skal være sat i det gule stik på din nye router. Den anden ende skal være sat i et lignende stik på dit modem. Sørg for, at begge er sat helt i. Forskellige modemfabrikanter markerer stikkene forskelligt. Du vil måske se markeringerne "data", "LAN", "network" eller "Ethernet".<span class="nub"></span>',
'p951IMRt001' : 'Brug for mere tid?',
'p951IMRt002' : ' Venter på, at du tilslutter ADSL-linjen. Er der brug for mere tid?',
'p951t001' : 'Brug for mere tid?',
'p951t002' : ' Modemmet bliver overvåget, mens det tænder igen. Er der brug for mere tid?',
'pDAt001' : 'Dubleret administrator',
'pDAt002' : 'Denne enhed bliver administreret af  <span id="ipaddr"></span> i øjeblikket!',
'PIC_blocked_content' : 'Forældrekontrol til internettet er aktiv, og denne enhed er i øjeblikket blokeret fra internettet. Tryk på knappen herunder for at administrere indstillinger til Forældrekontrol til internettet.',
'PIC_blocked_title' : 'Denne enhed er i øjeblikket blokeret fra internettet.',
'PIC_S1t0006' : 'Planlæg internetadgang:',
'PIC_S1t006' : 'For nylig på dit netværk:',
'PIC_S2t003' : 'Skoleaftener:',
'PIC_S2t004' : 'Weekender',
'PIC_S2t005' : '(søndag – torsdag)',
'PIC_S2t006' : '(fredag – lørdag)',
'PIC-blocked' : 'blokering',
'PIC-S1dt001' : 'Ønsker du at stoppe internetforbindelse fra hele netværket?',
'PIC-S1t001' : 'Bloker alle enheder',
'PIC-S1t003' : 'Alle enheder er blevet afbrudt fra internettet.',
'PIC-S1t004' : 'Gendan adgang',
'PIC-S1t005' : 'Aktuelt på dit netværk:',
'PIC-S1t010' : 'Søger efter enheder:',
'PIC-S1t020' : 'Tidsplanen for forældrekontrol til internettet er midlertidig stoppet.',
'PIC-S1t021' : 'Routeren har ikke det aktuelle klokkeslæt, hvilket forhindrer blokeringen/oplåsningen af tidsplanen for forældrekontrol til internettet i at køre.  Dette vil blive løst, når din router genetablerer det rigtige klokkeslæt ved at genoprette forbindelse til NTP-tidsserveren.',
'PIC-S1t022' : 'Din router vil søge efter NTP-tidsserveren med få minutters mellemrum, eller du kan ændre tidsserveren ved at gå til <a href="#" tid="gtSystemSettings" style="">Systemindstillinger</a>.',
'PIC-unblocked' : 'blokering fjernet',
'pNoTime_content' : 'Din router ved ikke, hvad klokken er, fordi forbindelsen til NTP-tidsserveren blev afbrudt. Routerens tidsbaserede funktioner, såsom Forældrekontrol til internettet, Eco-tilstand og Selvreparation er nu midlertidig stoppet, indtil den kan genoprette forbindelse med en NTP-tidsserver. <br> <br>Routeren vil automatisk søge efter klokkeslæt med få minutters mellemrum.',
'pNoTime_title' : 'Hvad er klokken?',
'pODLAplt001' : 'Anvender sprogpakke',
'pODLAplt002' : 'Skifter til dit valgte sprog…',
'pODLDLt001' : 'Downloader sprogpakke',
'pODLDLt002' : 'Henter dit valgt sprog fra serveren…',
'pODLErrt001' : 'Beklager',
'pODLErrt002' : 'OK',
'pStatst004' : 'Se alle &raquo;',
'Support1t001' : 'Vi har ikke registreret en forbindelse til dit modem.',
'Support1t002' : 'Sørg for, at dit modem er sat i stikkontakt og tændt.',
'Support1t003' : 'Sørg for, at et ethernetkabel forbinder dit modem med din router.',
'Support1t004' : 'Vi tror, der er et kabelproblem.',
'Support1t005' : 'Dit modem skal være tændt, og et ethernetkabel skal være sat i modemmet og det gule stik på routeren.',
'Support1t006' : 'Efterse venligst følgende:',
'Support1t007' : 'Sørg for, at modemmet er tændt. Kontrollér, at strømadapteren er tilsluttet i begge ender, og at en eller flere dioder på modemmet lyser.',
'Support1t008' : 'Et ethernetkabel skal være sat i modemmet og det gule stik på routeren. Kablet fører signalet fra dit modem til din router. Du kan ikke komme online uden det.',
'Support1t009' : 'Dine forbindelser bør se således ud:',
'Support1t010' : 'Klik på Prøv igen, når du har udført disse trin.',
'Support7t012' : 'Gå til <strong>http://belk.in/Q4XXca</strong> på en enhed, som har forbindelse til internettet',
'Support1t016' : 'Ledningsføring',
'Support1t017' : 'Det mest almindelige konfigurationsproblem er ledningsføringen mellem modemmet og routeren. En ende skal være sat i det gule stik på din nye router. Den anden ende skal være sat i et lignende stik på dit modem. Sørg for, at begge er sat helt i. Forskellige modemfabrikanter markerer stikkene forskelligt. Du vil måske se markeringerne "data", "LAN", "network" eller "Ethernet".<span class="nub"></span>',
'Support2t001' : 'Dit modem genstartede ikke.',
'Support2t002' : 'Prøv at tage modemmets strømstik ud af stikkontakten.',
'Support2t003' : 'Dit modem har måske en nulstillingsknap, du skal trykke på.',
'Support2t004' : 'Problemer med at genstarte dit modem?',
'Support2t005' : 'Prøv følgende trin for at genstarte modemmet:',
'Support2t006' : 'Tag modemmets strømstik ud af stikkontakten.',
'Support2t007' : 'Vent på, at alle dioder på modemmet går ud.',
'Support2t008' : 'Hvis dioderne bliver ved med at lyse, har dit modem måske et batteri-backup. Der er en nulstillingsknap et sted (som regel bag på). Tryk på den.',
'Support2t009' : 'Du bør se modemmets dioder gå ud. Vent et par sekunder før du sætter modemmets strømstik i igen.',
'Support2t010' : 'Klik på Prøv igen, når du har udført disse trin.',
'Support2t016' : 'Hvorfor skal modemmet genstartes?',
'Support2t017' : 'Visser modemmer skal genstartes for at kommunikere med en ny router eller en ubekendt computer. Modemmet er registreret, men kommunikerer ikke med din nye router, så en genstart vil sandsynligvis løse problemet.<span class="nub"></span>',
'Support3MRt001' : 'Vi kunne ikke registrere en forbindelse til din ADSL-linje.',
'Support3MRt002' : 'Undersøg, at der er et netværkskabel mellem ADSL-vægstikket og din router.',
'Support3MRt003' : 'I visse områder er et filter nødvendigt.',
'Support3MRt004' : 'Der er ret sikkert, at der er et kabelføringsproblem.',
'Support3MRt005' : 'Der skal være et kabel, som går mellem det grå stik på din router og dit ADSL/telefonstik.',
'Support3MRt006' : 'Undersøg, at begge ender af kablet er sat forsvarligt i.',
'Support3MRt007' : 'Undersøg, at kablet er sat i det grå stik på routeren og ikke i et af de gule stik.',
'Support3MRt008' : 'Hvis du fik et ADSL-linjefilter, skal du sørge for, at det er mellem kablet og ADSL-stikket.',
'Support3MRt010' : 'Undersøg, at begge ender af kablet er sat forsvarligt i.',
'Support3MRt011' : 'Undersøg, at kablet er sat i netværksstikket på routerens strømforsyning.',
'Support3MRt012' : 'Hvis du fik et ADSL-ledningsfilter, skal du sørge for, at det er tilsluttet mellem kablet og ADSL-stikket.',
'Support3MRt016' : 'Når du har udført disse trin, kan du prøve igen.',
'Support3MRt018' : 'Gå til den følgende URL på en enhed, som er tilsluttet internettet, og lær, hvordan du selv kan løse problemet: <strong>www.belkin.com/support3mr</strong>',
'Support3MRt021' : 'Ledningsføring',
'Support3MRt022' : 'De almindeligste kabelføringsproblemer har med ADSL-stikket at gøre. Det er vigtigt at kontrollere kablets begge ender. <span class="nub"></span>',
'Support3MRt050' : 'Undersøg, at der er et netværkskabel mellem routerens strømforsyning og telefonstikket.',
'Support3MRt051' : 'Der skal være et kabel, som slutter routerens strømforsyning til dit ADSL/telefonstik.',
'Support3PMt001' : 'Vi kunne ikke registrere en forbindelse til din ADSL-linje.',
'Support3PMt002' : 'Sørg for, at der er en netværksforbindelse mellem din router og dens strømstik (som har et indbygget modem).',
'Support3PMt004' : 'Der er ret sikkert, at der er et kabelføringsproblem.',
'Support3PMt005' : 'Der skal være en netværksforbindelse mellem det gule stik på din router og routerens strømforsyning.',
'Support3PMt006' : 'Kig på routerens strømforsyningsstik og find det kabel, som deles op i to separate ledninger. Et af disse ledninger har et ethernetstik.',
'Support3PMt007' : 'Sæt ethernetstikket i det gule stik på din router.',
'Support3PMt010' : 'Når du har gjort dette, kan du prøve igen.',
'Support3PMt012' : 'Gå til <strong>www.belkin.com/support3PM</strong> på en enhed, som har forbindelse til internettet.',
'Support3PMt016' : 'Ledningsføring',
'Support3PMt017' : 'Det er afgørende at sørge for, at der er en ubrudt række forbindelser fra ADSL-stikket til routeren. Routeren forventer, at dette signal skal komme gennem det gule stik. Kablet, som kommer fra routerens strømforsyning fører dette signal og strøm til routeren. Begge halvdele af kablet skal være sat i routeren for at alt kan fungere rigtigt. <span class="nub"></span>',
'Support3t001' : 'Dit modem tændte aldrig igen.',
'Support3t002' : 'Kontrollér, at modemmet har strøm.',
'Support3t003' : 'Du skal måske vente lidt, før det er klart.',
'Support3t004' : 'Problemer med at genstarte dit modem?',
'Support7t005' : 'Prøv følgende trin for at oprette en ADSL-forbindelse:',
'Support7t006' : 'Undersøg, at netværkskablet fra din router med modem er koblet til et telefonstik, som har internetforbindelse. Klik derefter på Prøv igen og se, om routeren med modem får forbindelse til internettet.',
'Support7t007' : 'Hvis din router med modem deler et telefonstik med en fastnettelefon (via en fordeler), bør fordeleren udskiftes med en filterfordeler (valgfrit). Klik derefter på Prøv igen og se, om routeren med modem får forbindelse til internetudbyderen.',
'Support7t008' : 'Hvis trin 2 ovenfor ikke virker, er ADSL-filtre muligvis nødvendige*. Hvis du har nogen filtre (som regel fra din internetudbyder), skal de forbindes mellem alle dine fastnettelefoner og deres telefonstik.',
'Support7t009' : 'Hvis ADSL-forbindelsen stadig ikke virker efter at have prøvet trin 1-3 ovenfor, skal du kontakte din internetudbyders tekniske support. Fortæl dem, at du har problemer med at få routeren med modem til at synkronisere med internetudbyderen.',
'Support3t010' : 'Klik på Prøv igen, når du har udført disse trin.',
'Support3t016' : 'Hvorfor skal modemmet genstartes?',
'Support3t017' : 'Visser modemmer skal genstartes for at kommunikere med en ny router eller en ubekendt computer. Modemmet er registreret, men kommunikerer ikke med din nye router, så en genstart vil sandsynligvis løse problemet.<span class="nub"></span>',
'Support4t001' : 'Vi kunne ikke genoprette forbindelsen til routeren.',
'Support4t002' : 'Prøv at genstarte routeren.',
'Support4t003' : 'Når først din router kører, kan du prøve at oprette forbindelse til den igen.',
'Support4t004' : 'Prøv nogle andre mulige løsninger.',
'Support4t005' : 'Genstart først routeren.',
'Support4t006' : 'Tag din routers strømstik ud af stikkontakten, vent et par sekunder og sæt det i igen.',
'Support4t006w' : 'Tag din routers strømstik ud af stikkontakten, vent et par sekunder og sæt det i igen.',
'Support4t007' : 'Når din router viser en konstant blå diode, kan der oprettes forbindelse.',
'Support4t008' : 'Prøv en trådløs forbindelse.',
'Support4t031' : 'Det vil tage et par sekunder at etablere forbindelsen. Derefter er du klar til at prøve igen.',
'Support4t032' : 'Du kan også prøve en kabelført forbindelse.',
'Support4t033' : 'Overvej at tilslutte en computer til routeren. Brug et ethernetkabel mellem computeren og et af de grå stik på routeren. Hvis du går til http://router/ kan du forsøge at konfigurere den igen.',
'Support4t034' : 'Klik på Prøv igen, når du har udført disse trin.',
'Support4t040' : 'Gå til <strong>http://belk.in/PMuxOg</strong> på en enhed, som har forbindelse til internettet',
'Support4t050' : 'Sådan genopretter du en forbindelse',
'Support4t051' : 'I disse situationer skal din router måske genstartes eller måske skal den blot genoprette en forbindelse. Vi har inkluderet anvisninger til begge dele. Da du måske har ændret din netværksadgangskode i et foregående trin, skal du måske vælge netværket igen, når du har genstartet routeren.<span class="nub"></span>',
'Support5t001' : 'Vi kunne ikke genoprette forbindelsen til routeren.',
'Support5t002' : 'Prøv at genstarte routeren.',
'Support5t003' : 'Når først din router kører, kan du prøve at oprette forbindelse til den igen.',
'Support5t004' : 'Prøv nogle andre mulige løsninger.',
'Support5t005' : 'Genstart først routeren.',
'Support5t006' : 'Tag din routers strømstik ud af stikkontakten, vent et par sekunder og sæt det i igen.',
'Support5t006w' : 'Afbryd routeren, vent et par sekunder og sæt den i igen.',
'Support5t007' : 'Når din router viser en konstant blå diode, kan der oprettes forbindelse.',
'Support5t008' : 'Prøv en trådløs forbindelse.',
'Support5t009' : 'Det vil tage et par sekunder at etablere forbindelsen. Derefter er du klar til at prøve igen.',
'Support5t010' : 'Du kan også prøve en kabelført forbindelse.',
'Support5t011' : 'Du kunne slutte en computer til routeren. Tilslut et ethernetkabel mellem computeren og et af de grå stik på routeren. Hvis du går til http://router/ kan du forsøge at konfigurere den igen.',
'Support5t012' : 'Klik på Prøv igen, når du har udført disse trin.',
'Support5t015' : 'Gå til <strong>http://belk.in/PMuxOg</strong> på en enhed, som har forbindelse til internettet',
'Support5t020' : 'Sådan genopretter du en forbindelse',
'Support5t021' : 'I disse situationer er det svært at sige, som routeren skal genstartes, eller om der blot skal genoprettes en forbindelse til den. Vi har inkluderet anvisninger til begge dele. Eftersom netværksnavnet blev ændret i et foregående trin, skal du sørge for at oprette forbindelse til det nye netværk, når først du har genstartet routeren.<span class="nub"></span>',
'Support6t001' : 'Vi kunne ikke genoprette forbindelsen til routeren.',
'Support6t002' : 'Prøv at genstarte routeren.',
'Support6t003' : 'Når først din router kører, kan du prøve at oprette forbindelse til den igen.',
'Support6t004' : 'Prøv nogle andre mulige løsninger.',
'Support6t005' : 'Genstart først routeren.',
'Support6t006' : 'Tag din routers strømstik ud af stikkontakten, vent et par sekunder og sæt det i igen.',
'Support6t006w' : 'Afbryd routeren, vent et par sekunder og sæt den i igen.',
'Support6t007' : 'Når din router viser en konstant blå diode, kan der oprettes forbindelse.',
'Support6t008' : 'Prøv en trådløs forbindelse.',
'Support6t031' : 'Det vil tage et par sekunder at etablere forbindelsen. Derefter er du klar til at prøve igen.',
'Support6t032' : 'Du kan også prøve en kabelført forbindelse.',
'Support6t033' : 'Du kunne slutte en computer til routeren. Tilslut et ethernetkabel mellem computeren og et af de grå stik på routeren. Hvis du går til http://router/ kan du forsøge at konfigurere den igen.',
'Support6t034' : 'Klik på Prøv igen, når du har udført disse trin.',
'Support6t037' : 'Gå til <strong>http://belk.in/Nm1f5S</strong> på en enhed, som har forbindelse til internettet',
'Support6t050' : 'Sådan genopretter du en forbindelse',
'Support6t051' : 'I disse situationer skal din router måske genstartes eller måske skal den blot genoprette en forbindelse. Vi har inkluderet anvisninger til begge dele. Da du måske har ændret din netværksadgangskode i et foregående trin, skal du måske vælge netværket igen, når du har genstartet routeren.<span class="nub"></span>',
'Support7t001' : 'Routeren med modem har ikke forbindelse til internettet.',
'Support7t004' : 'Der er et problem med forbindelsen ved dit telefonstik.',
'Support7t050' : 'Forbindelsesproblemer',
'Support7t051' : 'I disse situationer er det svært at finde ud af, hvorfor der er problemer med at oprette forbindelse til internetudbyderen. Kabelføringen er blevet undersøgt så godt, som det er muligt, så det næste trin er at undersøge, som du bruger det rigtige stik, om et filter er nødvendigt, og hvis det ikke løser problemer, så skal din internetudbyder kontaktes.<span class="nub"></span>',
'SupportNumber' : '1-800-123-4567',
'UpSpeed' : '12.5',
'p2410t012' : 'Når du klikker på "Gendan", bliver dine routerindstillinger såsom navn og adgangskode slettet og erstattes med de oprindelige fabriksstandarder.  Dine computere, telefoner, osv. skal derefter konfigureres til at passe til disse indstillinger for at komme online gennem denne router.  Er du sikker på, at du vil fortsætte?',
'gtRestore' : 'Gendan',
'gtCancel' : 'Annuller',
'alt="Loading"' : 'Indlæser',
'alt="Restart Router"' : 'Genstart routeren',
'alt="Check Wires"' : 'Undersøg ledninger',
'alt="Check Phone Connection"' : 'Undersøg telefonforbindelse',
'alt="Check WAN Connection"' : 'Undersøg WAN-forbindelse',
'alt="Checkmark"' : 'Afkrydsning',
'alt="Change"' : 'Ændr',
'alt="Print"' : 'Udskriv',
'alt="Expand"' : 'Udvid',
'alt="Caret"' : 'Caret',
'alt="Cut"' : 'Klip',
'alt="Browser"' : 'Webbrowser',
'alt="Wifi"' : 'Wifi',
'alt="Password"' : 'Adgangskode',
'alt="Check Phone Jack"' : 'Efterse telefonstik',
'alt="Turn Off Modem"' : 'Sluk for modem',
'alt="Turn On Modem"' : 'Tænd for modem',
'alt="Check Phone Filters"' : 'Undersøg telefonfiltre',
'gtSerial' : 'Serienr.',
'gt5GName' : '5 GHz SSID',
'gt5GKey' : '5 GHz nøgle',
'p1020MRt001' : 'Der er problemer med forbindelsen til din internetudbyder.',
'p1020MRt002' : 'Du bedes genstarte din modem-router.',
'p1020MRt003' : 'Vi kan ikke få en internetforbindelse, så vi genstarter din modem-router.',
'p1020MRt004' : 'Sluk for modem-routeren. Dette sker som regel på en tænd/sluk-kontakt på modem-routeren, eller du kan blot afbryde den fra strømforsyningen.',
'p1020MRt005' : 'Vent 15 sekunder.',
'p1020MRt006' : 'Tænd for din modem-router igen.',
'p1020MRt007' : 'Efter adskillige sekunder vil lysdioderne lyse og oprette forbindelse til din internetudbyder.',
'p1020MRt008' : 'Hvis dette problem fortsætter, skal du kontakte din internetudbyder for at løse problemet med din konto.',
'p1020MRt009' : 'Når din modem-router har slukket og tændt igen, fortsætter konfigurationen automatisk.',
'p1020MRt010' : 'Hvorfor skal modemmet genstartes?',
'p1020MRt011' : 'Visser modemmer skal genstartes, før der kan oprettes forbindelse med en ny router eller en ubekendt computer. Og hvis der er flere problemer hos din internetudbyder, kan modemmet uventet afbryde din forbindelse. Modemmet er registreret, men ikke på internettet, så en genstart vil sandsynligvis løse problemet.<span class="nub"></span>',
'p1010t001' : 'Der er problemer med at kommunikere med dit modem.',
'p1010t002' : 'Vi tror, der er et kabelproblem.',
'p1010t003' : 'Et kabel skal være sat i modemmet og det gule stik på routeren. Dit modem skal være tændt.',
'p1010t004' : 'Der er et par ting, som du kan gøre for at sikre, at alt er klar:',
'p1010t005' : 'Sørg for, at modemmet er tændt. Begge ender af dets strømadapter skal være tilsluttet, og en eller flere dioder på modemmet skal lyse.',
'p1010t006' : 'Et netværkskabel skal være sat i modemmet og det gule stik på routeren. Kablet fører signalet fra dit modem til din router. Du kan ikke komme online uden det.',
'p1010t007' : 'Hvis de begge sidder korrekt, kan du forsøge at genstarte modemmet ved at afbryde det fra strømforsyningen, vente 15 sekunder og derefter sætte det i stikkontakten igen. Hvis dit modem har et batteri, skal du muligvis finde modemmets nulstillingsknap og bruge den i stedet for.',
'p1010t008' : 'Sådan skal disse forbindelser se ud:',
'p1010t009' : 'Der bliver forsat søgt efter en forbindelse, mens du kontrollerer.',
'p1010t010' : 'Det almindeligste ledningsproblem er mellem modemmet og routeren. Det er vigtigt at kontrollere kablets begge ender. En ende skal være sat i det gule stik på din nye router. Den anden ende skal være sat i et lignende stik på dit modem. Forskellige modemfabrikanter markerer stikkene forskelligt. Du vil måske se markeringerne "data", "LAN", "network" eller "Ethernet".',
'Support3t005' : 'Prøv følgende trin for at genstarte modemmet:',
'Support3t006' : 'Kontrollér modemmets frontpanel for evt. dioder. Hvis de lyser, er dit modem tændt, og du skal måske vente lidt, før det er klart.',
'Support3t007' : 'Kontrollér, at modemmets strømforsyning er forsvarligt sat i modemmet og en stikkontakt.',
'Support3t008' : 'Hvis dit modem har en tænd/sluk-knap, skal du kontrollere, at der er tændt på knappen.',
'Support3t009' : 'Kontrollér igen, at dit modem stadig har forbindelse til din nye router.',
'Support1t012' : 'Gå til <strong>http://belk.in/LIkBoH</strong> på en enhed, som har forbindelse til internettet',
'QOSt001' : 'Du aktiverer Intellistream ved at gøre følgende:',
'QOSt002' : 'Brug et ethernetkabel til at oprette forbindelse mellem din computer og din Belkin-router (anbefales).',
'QOSt003' : 'Kør en hastighedstest på din internetforbindelse ved at klikke her for <a href="http://www.speedtest.net" target="_blank" class="speed_font4">Speedtest.net</a>',
'QOSt004' : 'Når du har kørt hastighedstesten, skal du angive de viste værdier på Speedtest.net i felterne Download Speed (Downloadhastighed) og Upload Speed (Uploadhastighed) ovenfor og derefter klikke på Save (Gem) nedenfor.',
'gtMbps' : 'Mbps',
'QOSt006' : 'Med din høje download-hastighed vil Intellistream kun prioritere din upload-hastighed.',
'QOSt007' : 'Med din høje upload-hastighed vil Intellistream kun prioritere din download-hastighed.',
'QOSt008' : 'Med disse høje internethastigheder kan Intellistream ikke hjælpe, så den bliver ikke aktiveret her.',
'QOSt009' : 'Angiv et tal større end 0,01.',
'QOSt010' : 'Angiv tal større end 0,01.',
'gtSettingsNotSaved' : 'Du har indstillinger der ikke er gemt. Bliv her for at gemme dem, eller forlad eller opdater for at annullere ændringerne.',
'QOSt011' : 'Angiv venligst et tal mellem 0,01 og 100,00.',
'QOSt012' : 'Angiv venligst tal mellem 0,01 og 100,00.',
'QOSt013' : 'Angiv venligst et tal mellem 0,01 og 1000,00.',
'QOSt014' : 'Angiv venligst tal mellem 0,01 og 1000,00.',



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
common_err1 = '%s er NULL';
upgrade_err2 = 'Firmwareopgradering blev afsluttet pga. utilstrækkelige ressourcer. Opgradering lykkedes ikke.\nPrøv igen, når systemet er inaktivt (ingen internettrafik)';
upgrade_err3 = 'Kan ikke uploade. Kontakt administratoren.';
upgrade_err4 = 'Firmware er for stor. Opgradering lykkedes ikke.';
upgrade_err5 = 'Den seneste firmware er allerede installeret.';
upgrade_err6 = 'Det ser ud til, at firmwareopdateringen er blevet korrupt. Hent den rigtige firmwarefil og prøv igen.';
show10 = 'DHCP-klientliste';
show54 = 'Forbindelsesindstillinger';
btn2 = 'Anvend ændringer';
cff1 = 'Søg efter firmware lykkedes';
PM2 = ':30 PM';
AM2 = ':30 AM';
Dimicons = 'Nedton ikoner';
EcoTo = 'til';
fvrm = 'Aktivér Fjernadministration. Fordi dens port har en kollision med én af dine virtuelle serveres indgående port.';
lsipm2 = 'Forkert IP-adresse. Det sidste tal kan ikke være 0 eller 255';
lsldnm = 'Ugyldigt lokalt domænenavn: `~!@#$%^&*()_+[]{}\|;:\'"<>/?.,';
lsipm5 = 'Den IP-adresse, som du vælger, skal være en IP, der ikke kan routes.\n  192.168.x.x (hvor x er hvad som helst mellem 0 og 255). \n10.x.x.x (hvor x er hvad som helst mellem 0 og 255).\n172.y.x.x (hvor y er hvad som helst fra 16 til 31, og x er hvad som helst mellem 0 og 255).';
ufy4 = 'Gendannelse til standardindstillingerne vil vare op til 60 sekunder. Sluk ikke for routeren under denne proces.';
ufe11 = 'I slutningen af opgraderingen reagerer routeren måske ikke på kommandoer i op til to minutter. Dette er normalt. Routeren må ikke slukkes eller genstartes i det tidsrum.';
ur5 = 'Vent op til 30 sekunder, mens routeren starter op igen. Sluk ikke for routeren, før gendannelsen er færdig.';
ur6 = 'Vent op til 60 sekunder, mens routeren starter op igen. Sluk ikke for routeren, før gendannelsen er færdig.';
usys83 = 'Felterne Ny adgangskode og Bekræft ny adgangskode stemmer ikke overens';
usys83_1 = 'Adgangskode og adgangskodebekræftelse stemmer ikke overens.';
usys85_1 = 'Længden på administratoradgangskoden skal være på mellem 1 og 63.';
usys88 = 'Adgangskoden har nået den maksimale længde!';
usys89 = 'AM';
usys90 = 'PM';
usys92 = 'Fjernadgangsportnummeret skal være fra 1 til 65535.';
usysipm = 'Enten har du ikke indtastet alle IP-tallene eller nogle af de indtastede tal er ugyldige. IP-adressen skal være som x.y.y.z(hvor x er hvad som helst fra 1 til 223, y er hvad som helst fra 0 til 255 og z er hvad som helst fra 1 til 254).';
self_healing60 = 'Selvreparation';
chkwait = 'Søger efter nyere firmware...';
Europe = 'Europa';
Australia = 'Australien og NZ';
AsiaPacific = 'Stillehavsområdet';
NorthAmerica = 'Nordamerika';
vjs1 = 'Forkert IP-adresse, for lang. Kontrollér igen';
vjs2 = 'Forkert IP-adresse, mangler \'.\'. Kontrollér igen!';
vjs3 = 'Forkert IP-adresse, mangler tal mellem \'.\'. Kontrollér igen!';
vjs4 = 'Forkert IP-adresse, ekstra \'.\'. Kontrollér igen!';
vjs5 = 'Forkert IP-adresse, tal mellem \'.\' er for store. Kontrollér igen!';
vm1 = 'Forkert tegn ';
vm2 = ' på pladsen ';
vm3 = 'Skal være ';
vjs6 = 'Forkert format af årstal. Indtast som (f.eks. 2002)';
vm4 = 'Forkert nummer ';
vjs8 = 'Forkert. Skal være mellem 1970..2037';
vjs9 = 'Forkert månedsformat. Indtast som (f.eks. 01...12)';
vjs161 = ' ikke i ';
vjs162 = ' netmaske';
vjs163 = 'Tilladte DHCP-område er ';
vjs17 = 'Du indtastede to forskellige adgangskoder. Kontrollér igen!';
vjs18 = 'Indtast start-portnummer.';
vjs19 = 'Start-portnummer skal være mindre end portnummer.';
vjs23 = 'Ugyldig MAC-adresse, det er en broadcastadresse.';
vjs24 = 'Ugyldig MAC-adresse, det er en null adresse.';
vjs25 = 'Ugyldig MAC-adresse, det er en multicast-adresse.';
vjs26 = 'Ugyldig start- og slut IP-adresse, slut IP skal være større end start IP.';
vjs28 = 'Ugyldigt netmaskeformat.';
vjs29 = 'Ugyldigt format, netmaske her skal være 255.255.255.0 eller 255.255.255.128 eller 255.255.255.192 eller 255.255.255.224 or 255.255.255.240 eller 255.255.255.248 eller 255.255.255.252 eller 255.255.255.254';
vjs30 = 'Forkert IP-adresse. Det sidste tal kan ikke være 0 eller 255.';
vjs31 = 'Forkert LAN IP-adresse. Det første tal kan ikke være 127';
vjs32 = 'Forkert LAN IP-adresse. Kan ikke være 0.0.0.0';
vjs33 = 'Forkert LAN IP-adresse. Skal være under 224.0.0.0';
vjs42 = 'De undernetmasketal, som du indtastede, er ugyldige.';
vjs45 = 'Specificér IP-adresse';
vjs46 = 'er ugyldig. Ret fejlen, før du fortsætter!';
wcc2 = 'Vælg din forbindelsestype:';
wcc13 = 'L2TP';
wcc14 = '[kun Israel]. Denne type forbindelse er mest almindelig i Israel. Brug denne indstilling, hvis din internetudbyder specifikt har fortalt dig, at du bruger L2TP og har givet dig den nødvendige L2TP-information.';
wds4_1 = 'Primære DNS-adresse';
wds7 = 'Du skal indtaste de DNS-indstillinger, som du får af din internetudbyder, hvis du ikke bruger den automatiske DNS-funktion';
wds8 = 'For at foretage DNS-ændringer, skal du først gå til %s Website Filters %s og vælge No filters (Ingen filtre).';
wmc6 = 'WAN MAC-adresse kan ikke være den samme som LAN MAC-adressen. Vælg en anden.';
wdd9  = 'Ingen DDNS-service er valgt.\n';
wdd10 = 'Ingen DDNS-service er valgt og al data på denne side vil gå tabt. Vil du fortsætte?';
wm10b = 'Kun til brug med internetudbydere, som kræver L2TP-forbindelsesmetoden.';
pm = 'Din tjeneste kunne ikke bekræfte den adgangskode, som du indtastede. Bekræft, at du indtastede din adgangskode rigtigt.';
wpp17 = 'L2TP-konto';
wpp18 = 'L2TP-adgangskode';
wpp19 = 'Indtast din L2TP-konto.';
wpp23 = 'IP-adresseanvisning';
wpp24 = 'Brug statisk IP-adresse';
wpp25 = 'Hen dynamisk fra internetudbyder';
wppa7 = 'Min IP-adresse';
wppa9 = 'Forbindelses-id (valgfrit)';
wppa13 = 'Indtast din PPTP-konto.';
wppa18 = 'Ugyldigt servicenavn.';
ws2 = 'Indtast din information nedenfor og klik på "Anvend ændringer" for at indtaste dine indstillinger for Statisk IP.';
sm_1 = 'Den undernetmaske, som du indtastede, er ugyldig.';
ws8 = 'På det efterfølgende skærmbillede skal du indtaste/validere dine DNS-adresseindstillinger';
wt2 = 'Hvis du klikker på Anvend ændringer, vil routeren genstarte. Når først routeren har genstartet, skal du gøre følgende';
wt3 = '1) Tag elstikket ud af både kabelmodemmet og Belkin-routeren';
wt4 = '2) Sæt elstikket i kabelmodemmet og vent, til alle lamperne på modemmet er holdt op med at blinke';
wt5 = '3) Sæt strømkablet i Belkin-routeren igen';
wt6 = 'For at bekræft at du har forbindelse til internettet skal du åbne en internetbrowser, såsom Explorer, Firefox og Safari og sikre dig, at du kan gå se websites.';
wlad2 = 'Aktivér/Deaktiver';
wlc2 = 'Hvis du vil foretage ændringer af routerens trådløse indstillinger, skal det gøres her. Klik på “Anvend ændringer” for at gemme indstillingerne.';
wlcgb = '802.11b+g';
wlcg = '802.11g';
wlcb = '802.11b';
wlc20 = '20 MHz';
wlc22 = '20/40 MHz';
wlc22a='20/40/80 MHz';
wlcoff = 'FRA';
wlcngb1 = '802.11b og 802.11g og 1x1 802.11n';
wlcn1 = '1x1 802.11n';
wlcngb2 = '802.11b og 802.11g og 802.11n';
wlcn2 = '802.11n';
wlcgn = '802.11g+n';
wlca = '802.11a';
wlcan = '802.11a og 802.11n';
wlcnac='802.11n og 802.11ac';
wlcanac='802.11a og 802.11n og 802.11ac';
wlc26 = 'Hvis du skjuler dit netværksnavn, bliver WPS deaktiveret.';
wlc27 = 'Hvis du ændrer din sikkerhedstype, bliver WPS deaktiveret.';
wlc28 = 'WPS er deaktiveret pga. din <A href=%s><B>trådløse sikkerhedstype</B></A>.';
wlc29 = 'WPS er deaktiveret, fordi du har skjult dit netværksnavn (SSID).';
wlc30 = 'WPS er deaktiveret, eftersom du har skjult dit netværksnavn (SSID) og pga. din <A href=%s><B>trådløse sikkerhedstype</B></A>.';
wlc31 = 'Hvis du aktiverer WPS, er dit netværksnavn (SSID) ikke længere skjult.';
wlc32 = 'Hvis du aktiverer WPS, bliver din sikkerhedstype ændret til WPA/WPA2. Din aktuelle netværksadgangskode vil være helt fin.';
wlc33 = 'Hvis du aktiverer WPS, er dit netværksnavn (SSID) ikke længere skjult og din sikkerhedstype bliver ændret til WPA/WPA2. Din aktuelle netværksadgangskode vil være helt fin.';
wle3a = 'WPA-PSK';
wle3b = 'WPA2-PSK';
wle3c = 'WPA-PSK + WPA2-PSK';
wps1 = 'Wi-Fi Protected Setup (WPS)';
wps3 = 'Konfigurér trådløs sikkerhed';
wps17 = 'For klientenheder uden WPS, skal du køre Belkin Security Assistant fra cd\'en eller manuelt konfigurere enheden med de følgende indstillinger:';
wps23 = 'WPA+WPA2-Personal (PSK)';
wps25 = 'TKIP+AES';
wps27 = 'Netværksnøgle (WEP):';
wps28_1 = 'NULL';
wle11 = 'Nøgle 1';
wle12 = 'Nøgle 2';
wle13 = 'Nøgle 3';
wle14 = 'Nøgle 4';
wpskerr2 = 'Nøglen skal være mellem 8 og 63 tegn og kan inkludere mellemrum og symboler, eller kun 64 hextegn (0-F).';
wpskerr4 = 'Du skal indtaste gæstenøglen';
wpskerr7 = 'Gæstenøglen skal være 8 tegn';
wpskerr8 = 'Gæstenøglen må ikke være den samme som netværksnøglen';
wlguest1 = 'SSID må ikke være den samme som gæste-SSID';
wlguest2 = 'Gæste-SSID må ikke være den samme som SSID';
rs_crc = 'Gendannelse mislykkedes < CRC >';
rs_long = 'Gendannelse mislykkedes <too long>';
rs_disposition = 'Gendannelse mislykkedes <No Content-Disposition>';
rs_getpid = 'Gendannelse mislykkedes <Can\'t get pid!>';
rs_unmatchpid = 'Gendannelse mislykkedes <Unmatched pid>';
msg_ddns3  = 'Domænenavnsfelterne må ikke være tomme.\n';
msg_lan_dhcp1  = 'Anmoder om information fra gateway.';
msg_lan_dhcp2  = 'Opdaterer konfigurationsdatabasen.';
msg_wan_stat1  = 'IP-adresse ';
msg_wan_stat2  = ' er ikke i ';
msg_wan_stat3  = ' netværket.';
msg_wls_chan2  = 'Gæste-SSID kan ikke indstilles som NULL!\n';
fw_not_interrupt  = 'ROUTEREN MÅ IKKE AFBRYDES ELLER SLÅS FRA, da det kan gøre routeren ubrugelig.';
msg_invalid_char  = 'Ugyldige tegn fundet. Gyldige tegn er: 0-9, a-z, A-Z, `~!@#$%^&*()_-+=|\\{}[]:";\',.<>/?';
msg_invalid_domain_char  = 'Ugyldigt lokalt domænenavn'+': ~!@#$%^&*()=+{}[]|":;\\\'?/<>,`';
msg_invalid_char_1  = 'Ugyldige tegn fundet. Gyldige tegn er bogstaver og tal. De følgende symboler er ugyldige: `~!@#$%^&*()_+[]{}\\|;:\'"<>/?.,';
msg_hostIP_invalid  = 'Værts-IP-adressen er ugyldig. Den må ikke være routerens LAN IP.\n';
msg_dmzIP  = 'DMZ IP-adresse';
msg_blank  = ' må ikke være tom.\n';
msg_space  = 'Tomme felter eller mellemrum er ikke tilladt i %s\n';
msg_blank_in  = 'Tomme felter er ikke tilladt i %s\n';
msg_allspaces  = '%s kan ikke bestå af kun mellemrum\n';
msg_invalid  = 'Ugyldige tegn i %s\nGyldige tegn er: \n%s\n\n';
msg_check_invalid  = '%s indeholder et ugyldigt tal\n';
msg_valid_range  = '%s er ugyldig. Gyldigt område er %s til %s\n';
msg_invalid_mac  = 'Ugyldig MAC-adresse.\n';
msg_multi_mac = 'MAC-adressen kan ikke være multicast-adresse.\n';
msg_confirmDefault  = 'Advarsel!\nIndlæsning af fabriksstandardindstillingerne vil slette alle aktuelle indstillinger.\nEr du sikker på, du vil fortsætte?';
Allowed_Services = 'Tilladte tjenester';
Allowing_Url = 'Websted, som er tilladt iflg. URL-adresse ';
Allowing_Keyword = 'Websted, som er tilladt iflg. nøgleord';
wipv63 = 'Enheder, som er tilsluttet din router, kan kommunikere med hinanden ved hjælp af oprindelige IPv6-pakker. IPv6-pakker på LAN bliver automatisk sendt til alle LAN-grænseflader (ethernet-porte og både 2.4 GHz og 5 GHz trådløse netværk).';
wipv64 = 'Når IPv6 pass-through er aktiveret, bliver IPv6-pakker også kopieret til WAN-grænsefladen.(Dette opretter en direkte, ikke-sikker forbindelse til internettet, når det er aktiveret).';
wipv65 = 'Kontakt din internetudbyder direkte for oplysninger om deres support til IPv6.';
wipv67 = 'Internet IPv6';
wipv68 = 'Dit netværk er IPv6-kompatibelt.';
wipv69 = 'Pass-through';
mf1 = 'Med disse sider kan du justere din routers adfærd, når den modtager forskellige typer medietrafik.';
mf2 = 'Optimér automatisk din internetforbindelse til forskellige typer trafik.';
mf3 = 'Se, hvordan din router bliver brugt.';
mf8 = 'Optage den %s';
mf10 = 'Download';
mf11 = 'Upload';
mf12 = 'Hastighed';
mf15 = 'Anvend indstillinger';
mf18 = 'Indtast mellem tallet {0.1-%s}.';
mf20 = 'Kun mellem {0.1-%s}.';
mf26 = 'Manuelt optaget d. %s';
mf32 = 'eller';
mf44 = 'Resultaterne for den automatiske hastighedstest er måske ikke 100 % nøjagtig baseret på internettrafik eller andre forhold. For at sammenligne resultater, kan du gå til et websted med hastighedstest eller kontakt din internetudbyder for at bekræfte din internethastighed. Hvis hastighedsresultaterne er uregelmæssige, skal du måske indtaste værdierne manuelt.';
media_dlna18 = 'Uden titel';
media_dlna21 = 'Du har flere medier, end din router kan indeksere, så vi leverer de første 12000 elementer.';
errSubnetMaskInvalid_2 = 'Undernetmasken ligner ikke en undernetmaske. Kontrollér venligst tallet.';

