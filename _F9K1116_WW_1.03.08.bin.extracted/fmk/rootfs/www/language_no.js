function dw(message)
{
	document.write(message);	
}

// Note this dictionary is a temporary demonstration
var langDictionary = {

// Copy belkin transation table to here	
'p100t011' : 'dashbordet',
'p220t001' : 'Du har en PPPT DSL-forbindelse.',
'p220t011' : 'PPTP',
'p220t012' : 'Point-to-Point Tunneling Protocol (PPTP) oppretter en privat og kryptert forbindelse mellom deg og Internettleverandøren.',
'p222t001' : 'Det er noe som ikke er riktig i PPTP-innstillingene.',
'p300t001' : 'Søker etter fastvareoppdateringer.',
'p300t002' : 'Vi undersøker om det finnes en oppdatering av fastvaren for den nye ruteren',
'p300t003' : 'Hvorfor må jeg ha den nyeste fastvaren?',
'p300t004' : 'Fastvaren er programvaren ruteren bruker til å implementere nettverks- og sikkerhetsprotokoller. Oppdateringer gir mer pålitelighet og funksjonalitet fra ruteren, så det er bra å sørge for at du har den nyeste.',
'gtUpdateNoPower' : 'Vi oppdaterer ruteren med den nye fastvaren. Ikke slå av ruteren mens dette pågår.',
'p320t003' : 'Dette skal ta cirka tre minutter. Oppdateringsforløp:',
'gtFirmwareRestart' : 'Nå som fastvaren er installert, må vi starte ruteren på nytt så oppdateringen kan tas i bruk.',
'p342t003' : 'fra listen med trådløse nettverk for at alt skal ordne seg.',
'errorSSIDEmpty' : 'Skriv inn et navn for det trådløse nettverket.',
'errorSSIDTooLong' : 'Nettverksnavnet må være kortere enn 32 tegn.',
'errorSSIDInvalidChars' : 'Nettverksnavnet kan bare inneholde bokstaver, tall, skilletegn og mellomrom.',
'errorWEPPasswordInvalidChars' : 'Nettverkspassordet kan bare inneholde tall og bokstavene fra A t.o.m. F.',
'errorWEPPasswordInvalidLength' : 'Nettverkspassordet må ha en lengde på 10–26 tegn.',
'errorWEPPasswordEmpty' : 'Skriv inn et passord for å sikre det trådløse nettverket.',
'errorWPAPasswordInvalidChars' : 'Nettverkspassordet kan bare inneholde bokstaver, tall, skilletegn og mellomrom.',
'errorWPAPasswordInvalidLength' : 'Nettverkspassordet må ha en lengde på 8–63 tegn.',
'errorWPAPasswordEmpty' : 'Skriv inn et passord for å sikre det trådløse nettverket.',
'errorGenericCommitError' : 'Det oppstod en feil. Korriger innstillingene nedenfor og prøv igjen.',
'p400t006' : 'Passord:',
'p450t006' : 'Passord: ',
'p451t006' : 'Passord: ',
'p500t007' : 'Fyll ut registrering',
'p500t008' : 'Registrer senere',
'p700t011' : 'PPTP DSL connection',
'errIpAddressEmpty' : 'IP-adressen kan ikke være tom.',
'errSubnetMaskEmpty' : 'Nettverksmasken kan ikke være tom.',
'errSubnetMaskInvalid' : 'Nettverksmasken ser ikke ut som en nettverksmaske. Kontroller verdien.',
'errDefaultGatewayEmpty' : 'Standard gateway-adresse kan ikke være tom.',
'errDNSServerEmpty' : 'DNS-serveradressen kan ikke være tom.',
'1781' : '',
'1782' : '',
'1783' : '',
'7102' : 'Belkin Intellistream prioriterer høy båndbredde og lav-ventetidstjenester som f.eks tale, video og spill for best mulig tilkoblingsopplevelse.',
'7103' : 'For å gjøre en god jobb, må Intellistream vite tilkoblingshastigheten.',
'7104' : 'Internettforbindelsen blir avbrutt en liten stund mens testen pågår.',
'7105' : 'Internettforbindelsen blir avbrutt en liten stund mens testen pågår.',
'7106' : 'Kjør en hastighetstest',
'7107' : 'Hastighetstest',
'7108' : 'Oppgi manuelt',
'7109' : 'Ping',
'7110' : 'Nedlastningshastighet<br>',
'7111' : 'Opplastningshastighet<br>',
'7112' : 'Kjører ...',
'7113' : 'Fullført.',
'7114' : 'En feil oppstod under testen.',
'7115' : 'Skriv en tall mellom 0.1-100.',
'7116' : 'Skriv en tall mellom 0.1-1000.',
'7117' : 'Bare mellom 0.1-100.',
'7118' : 'Med din høye opplastningshastighet prioriterer Intellistream bare nedlastningshastigheten.',
'7119' : 'Med din høye nedlastningshastighet prioriterer Intellistream bare opplastningshastigheten.',
'7120' : 'Med din høye Internetthastighet behøver ikke Intellistream være aktivert.',
'7121' : 'Registrert den',
'7122' : 'Manuelt registrert den',
'7123' : 'Slik aktiverer du Intellistream:',
'7124' : 'Intellistream er aktivert.',
'7125' : 'Intellistream er deaktivert i øyeblikket.',
'7126' : 'Angi manuelt',
'gtBBSTitle' : 'Velkommen til Belkin Router Setup',
'gtBack' : 'Tilbake til dashbordet',
'Support4t036' : 'Les om det.',
'Support4t037' : 'Åpne den følgende URL-adressen på en enhet som er koblet til Internett og finn ut hvordan du kan løse problemet selv: <STRONG>www.belkin.com/support/asdlkj</STRONG>',
'gtReadHelp' : 'Gå til <STRONG>http://belk.in/NLk29H</STRONG> på en enhet som har Internettforbindelse',
'Support5t014' : 'Les om det.',
'p1200t001' : 'Litt mer sikkerhet.',
'p1200t002' : 'Du kan videre beskytte ruteren ved å låse dashbordet med et passord.',
'errsetempt' : 'Skriv inn et passord.',
'errorpwdEmpty' : 'Skriv inn passordet.',
'errorpwdError' : 'Passordet er ikke riktig.',
'60' : 'Duplikat administrator',
'61' : 'Denne enheten styres av',
'62' : 'for øyeblikket!',
'gtDisconnected' : 'Frakoblet',
'dft005' : 'Belkin hjelpesenter',
'dhToggleBand' : 'Vis 5,0 Ghz',
'419' : 'sekunder gjenstår.',
'422' : 'Innstillingene er gjenopprettet',
'423' : 'Den gjenopprettede filen er ikke riktig type for denne enheten. Gjenoppretting var mislykket. Få tak i riktig fil og prøv igjen.',
'533' : 'Hvis ruteren begynner å gjøre feil, kan det være nødvendig å gjøre omstart på ruteren. Omstart på ruteren sletter ikke innstillingene dine.',
'1200' : 'Setter inn endringene. Vent litt.......',
'1386' : 'Oppdateringsfilen er ikke riktig type eller versjon for denne enheten. Oppdateringen var mislykket. Få tak i riktig fil og prøv igjen.',
'2053' : 'Endringene er nå i bruk',
'2054' : 'Oppdatering av fastvaren er fullført',
'766' : 'Tallene i nettverksmaske du skrev er ugyldige.',
'1356' : 'Ugyldig Gateway IP-adresse. Første tallet skal være mellom 1 og 223.',
'1357' : 'Ugyldig Gateway IP-adresse. Andre og tredje tallet skal være mellom 0 og 255.',
'1358' : 'Ugyldig Gateway IP-adresse. Siste tallet skal være mellom 1 og 254.',
'1360' : 'Ugyldig IP-adresse. Første tallet skal være mellom 1 og 223.',
'1354' : 'Ugyldig IP-adresse. Andre og tredje tallet skal være mellom 0 og 255.',
'675' : 'Ugyldig IP-adresse. Siste tallet skal være mellom 1 og 254.',
'403' : 'IP-adressen du skrev er ugyldig.',
'760' : 'IP-adresse',
'1760' : 'Nekt alt',
'395' : 'Enten har du ikke skrevet alle tallene eller så er noen av tallene du skrev ugyldige. Tallet i hver innleggsboks skal være mellom 0 og 255.',
'1395' : 'Ikke konfigurert',
'1281' : 'WAN IP kan ikke dekke delnettet på siden av nettverket.',
'641' : 'Enten har du ikke skrevet alle IP-tallene eller så er noen av tallene du skrev ugyldige. Tallene skal være mellom 0 og 255',
'errUsernameTooLong' : 'Brukernavnet må ha mindre enn 64 tegn.',
'errUsernameInvalid' : 'Brukernavnet kan bare inneholde bokstaver, tall, skilletegn og mellomrom.',
'errPasswordEmpty' : 'Skriv inn passordet.',
'errPasswordTooLong' : 'Passordet må ha mindre enn 64 tegn.',
'errPasswordInvalid' : 'Brukernavnet kan bare inneholde bokstaver, tall, skilletegn og mellomrom.',
'1398' : 'OK',
'1399' : 'Avbryt',
'374' : 'På',
'375' : 'Av',
'47' : 'Mer info',
'48' : 'Fjern endringene',
'49' : 'Lagre',
'96' : 'Aktiver',
'119' : 'Deaktiver',
'1298' : 'Lukk',
'113' : '<< Legg til',
'114' : 'Slett',
'128' : 'Oppdater',
'318' : 'Deaktivert',
'317' : 'Aktivert',
'2006' : 'Ja',
'2007' : 'Nei',
'3300' : 'NY',
'50' : 'Oppdater dynamisk DNS',
'98' : 'Dynamisk domenenavnsystem (DDNS) gjør at du får tilgang til hjemmenettverket gjennom en brukerkonto opprettet gjennom en DDNS-leverandør. Opprett brukerkontoen gjennom Dyn.com (<a href=\'http://www.dyn.com\' target=\'_blank\'>www.dyn.com</a>) og slå på DDNS-funksjonen på ruteren. Du må opprette en konto før du kan bruke denne tjenesten.',
'100' : 'Brukernavn',
'101' : 'Passord',
'102' : 'Domenenavn',
'742' : 'Skriv inn brukernavnet',
'757' : 'Skriv inn passordet.',
'822' : 'er ugyldig. Den må rettes først.',
'1307' : 'DynDNS',
'1308' : 'DDNS-tjeneste',
'1309' : 'DDNS-status',
'1310' : 'Nettsted',
'1315' : 'Oppdater DDNS automatisk',
'1316' : 'oppgrader hver',
'1317' : 'dager',
'1369' : 'Registrert',
'1380' : 'Feil konfigurasjon',
'1381' : 'Kobler til',
'1382' : 'Tilkobling var mislykket',
'1383' : 'Innlogging var mislykket',
'1384' : 'Registrering var mislykket',
'1385' : 'Ikke registrert',
'1751' : '',
'702' : 'Domenenavntjenesten (DNS) oversetter domenenavn til IP-adresser for å finne datamaskintjenester og enheter i hele verden. Internettleverandøren din har gitt deg en DNS-adresse som du kan bruke. Skriv den her.',
'703' : 'Automatisk fra Internettleverandør',
'704' : 'DNS-adresse',
'705' : 'Sekundær DNS-adresse',
'706' : 'DNS = Domain Name Server (domenenavnserver). En server på Internett som oversetter URL-adresser (Uniform Resource Locator) som f.eks. www.belkin.com til IP-adresser.',
'707' : 'Du må skrive inn DNS-innstillingene som du har fått av Internettleverandøren hvis du ikke bruker den automatiske DNS-funksjonen.',
'780' : 'Angi IP-adresse',
'823' : 'Hvis du vil gjøre DNS-endringer, må du først gå til {Website Filter} og velge Ingen filtre.',
'55' : 'Fastvareinfo',
'56' : 'Det er ikke noen ny fastvareoppdatering tilgjengelig for denne ruteren!',
'57' : 'Kan ikke koble til fastvareinformasjonsserveren. Kontroller WAN-forbindelsen.',
'58' : 'Nåværende fastvare:',
'59' : 'Last ned fastvare:',
'64' : 'Ruteren kan konfigureres slik at den begrenser tilgang til Internett, e-post eller andre nettverkstjenester på spesielle dager og tidspunkter.',
'65' : 'IP',
'66' : 'Port',
'67' : 'Type',
'68' : 'Blokkeringstid',
'69' : 'Dag',
'70' : 'Klokkeslett',
'71' : 'Aktiver',
'72' : 'BEGGE',
'73' : 'Alltid',
'74' : 'Blokker',
'75' : 'SØN',
'76' : 'MAN',
'77' : 'TIR',
'78' : 'ONS',
'79' : 'TOR',
'80' : 'FRE',
'81' : 'LØR',
'82' : ':00 P.M.',
'83' : ':00 A.M.',
'84' : 'Enten har du ikke skrevet klientens IP-adresse eller så er noen av tallene i IP-adressen du skrev ugyldige. Tallet i hver IP-innleggsboks skal være mellom 1 og 254.',
'85' : 'Portnumrene du skrev er ugyldige.',
'86' : 'Det siste portverdiområdet må være større enn det første.',
'87' : 'Det siste IP-verdiområdet må være større enn det første.',
'88' : 'Tallet i hver portinnleggsboks skal være mellom 1 og 65535.',
'1311' : 'Det er ikke valgt noe program',
'1312' : 'Duplikate oppføringer er oppdaget. Regelen finnes fra før.',
'1355' : 'Ruterens LAN IP-adresse skal utelukkes fra IP-området.',
'90' : 'Dette gir deg mulighet til å angi en enhet som skal plasseres utenfor ruterens brannmur, mens andre enheter blir værende innenfor brannmuren.',
'91' : 'Datamaskinen i DMZ er ikke beskyttet mot hackerangrep.',
'92' : 'Hvis du vil plassere en datamaskin i DMZ, skriver du de siste tallene i maskinens IP-adresse i feltet nedenfor og velger Aktiver. Klikk Lagre for at endringen skal tre i kraft.',
'93' : 'IP-adresse til virtuell DMZ-vert',
'97' : 'Statisk IP',
'95' : 'Privat IP',
'103' : 'Skriv inn IP-adressen før du aktiverer DMZ',
'1232' : 'Ugyldig IP-adresse for DMZ-vert.',
'1253' : 'IP er utenfor område (1-254]!',
'105' : 'Denne funksjonen lar deg opprette en liste over godkjente klienter. Når du aktiverer denne funksjonen må du skrive MAC-adressen til hver klient i nettverket for å gi hver av dem nettverkstilgang.',
'106' : 'Aktiver MAC-adressefiltrering',
'107' : 'MAC-adressefiltreringsliste',
'108' : 'Blokker',
'110' : 'MAC-adresse',
'112' : 'Denne MAC-adressen er lagt til allerede!',
'669' : 'Ugyldig MAC-adresse. Det er en tom adresse.',
'902' : 'Ugyldig MAC-adresse',
'903' : 'Du må rette den først.',
'904' : 'MAC-adressen skal være i formen xx:xx:xx:xx:xx:xx (der x er et tegn mellom 0-9 eller A-F).',
'1062' : 'Merk: Du kan ikke slette MAC-adressen til datamaskinen som du bruker til å åpne ruterens administrative funksjoner. (Datamaskinen som du bruker nå).',
'1602' : 'Brukerdefinert 1',
'117' : 'Ruteren er utstyrt med en brannmur som beskytter nettverket mot en lang rekke vanlige hackerangrep, deriblant angrep av typen Ping of Death (PoD) og Denial of Service (DoS). Du kan slå av brannmurfunksjonen om nødvendig. Å slå av brannmurbeskyttelsen betyr ikke at nettverket er helt ubeskyttet mot hackerangrep, men det anbefales at du lar brannmuren være på når det er mulig.',
'118' : 'Aktiver/deaktiver brannmur',
'121' : '<b>AVANSERT FUNKSJON! </b> Du kan konfigurere ruteren til å ikke svare på ICMP-ping (ping til WAN-porten). Dette gir et høyere nivå av sikkerhet.',
'1076' : 'Blokker ICMP-ping',
'1827' : 'Skriv ut gjestetilgangsinnstillinger',
'2702' : 'Gjestetilgang gir tilgang til Internett gjennom WAN-porten, men hindrer gjester i å få tilgang til det interne nettverket, LAN og WLAN. Funksjonen støttes bare på 2,4 GHz for enklere bruk.',
'279' : 'Inngående port',
'1828' : 'Kafé-stil (gjesteinnlogging via nettsted)',
'1619' : 'WPA/WPA2 PSK',
'1829' : 'WEP',
'1830' : 'Åpne',
'1831' : 'maksimum 32 tegn, ikke mellomrom',
'1617' : 'Passord (PSK)',
'842' : 'Godkjenning',
'845' : 'Krypteringsteknikk',
'854' : 'PSK-nøkkel (pre-shared key)',
'857' : 'Skjult PSK',
'855' : 'WPA-PSK (ingen server)',
'1335' : 'Nettverksnavn (SSID)',
'1825' : '8 til 63 tegn',
'1826' : '10 HEX-tegn',
'1834' : 'Nettverksnavn',
'409' : 'Passord',
'1835' : 'Hver gjest som skal kobles til det trådløse nettverket må ha dette passordet.',
'1715' : 'Sikkerhetstype',
'1836' : 'Slik kobler du til det trådløse nettverket:',
'1837' : 'Windows',
'1838' : '1. Høyreklikk ikonet for det trådløse nettverket i Windows-systemstatusfeltet og velg Vis tilgjengelige trådløse nettverk på hurtigmenyen.',
'1839' : '2. Dobbeltklikk på ',
'1840' : ' nettverket.',
'1841' : '3. Det kommer frem et vindu som spør etter nettverksnøkkelen. Skriv inn passordet ovenfor og klikk OK.',
'1842' : 'MAC OS X',
'1843' : '1. Klikk ikonet for det trådløse nettverket på menylinjen (øverst til høyre) og velg ',
'1844' : ' nettverket.',
'1845' : '2. Det kommer frem et vindu som spør etter nettverksnøkkelen. Skriv inn passordet ovenfor og klikk OK.',
'1832' : 'Cafe-stil',
'1833' : 'Åpen-modus',
'1201' : 'SSID kan ikke være TOM!',
'1812' : 'Passordlengden er ugyldig. Maksimum passordlengde er 63 tegn og minimum passordlengde er 8 tegn.',
'1824' : 'WEP-nøkkelen må bestå av 10 HEX-tegn!',
'414' : 'Innloggingsfeil!',
'1811' : 'Gjestetilgang er en funksjon som gir brukere tilgang til Internett men begrenser tilgang til hjemmenettverket. Be nettverksansvarlig om passordet til Gjestetilgang og skriv det nedenfor.',
'1813' : 'Vellykket! Nå kan du åpne en nettleser og surfe på Internett.',
'909' : 'IP-adressen er den interne IP-adressen til ruteren. For tilgang til det avanserte konfigurasjonsgrensesnittet, skriver du denne IP-adressen i adressefeltet i nettleseren. Denne adressen kan endres om nødvendig. Hvis du vil endre IP-adressen, skriver du inn den nye IP-adressen og klikker Lagre. IP-adressen du velger skal være privat (ikke rutbar). Eksempler på private (ikke-rutbare) IP-adresser er: 192.168.2.1, 10.0.0.1, 172.16.0.1',
'917' : 'Det er ikke nødvendig å endre nettverksmasken. Om nødvendig er det mulig å endre nettverksmasken. Nettverksmasken skal bare endres hvis det er en bestemt grunn til det.',
'929' : 'DHCP-serverfunksjonen gjør det svært enkelt å konfigurere et nettverk ved å tildele IP-adresser til alle datamaskiner i nettverket. DHCP-serveren kan slås av om nødvendig. Hvis du skal slå av DHCP-serveren må du angi en statisk IP-adresse manuelt på hver datamaskin på nettverket. IP-utvalget er verdiområdet med IP-adresser som er avsett til dynamisk tildeling for datamaskinene på nettverket. Standardverdiene er 2-200 (199 datamaskiner) hvis du vil endre dette nummeret. Du kan gjøre det ved å skrive en ny start- og slutt-IP-adresse og klikke Lagre.',
'935' : 'Du kan angi et lokalt domenenavn (nettverksnavn) for nettverket. Det er ikke nødvendig å endre denne innstillingen med mindre du har et bestemt, avansert behov for å gjøre det. Du kan kalle nettverket det du vil, f.eks "MITT NETTVERK".',
'962' : 'For å angi at ruteren skal bruke PPPoE, skriver du inn brukernavnet og passordet du har fått av Internettleverandøren i de angitte feltene. Hvis du ikke har et tjenestenavn eller ikke vet hva det er, kan du la Tjenestenavn-feltet stå tomt. Etter at du har skrevet inn informasjonen, klikker du Lagre. Etter lagring, skal statusindikatoren vise "Tilkoblet" hvis ruteren er riktig konfigurert.',
'967' : 'Noen Internettleverandører bruker PPTP-protokollen til å koble abonnenter til sentralkontoret. Dette krever at du legger inn noen flere innstillinger som du skal ha fått av Internettleverandøren. Når du har lagret endringene, viser Internettstatusindikatoren et grønt lys dersom det var vellykket.',
'971' : 'Velg tilkoblingstypen Telstra Bigpond ved å klikke Lagre.',
'982' : 'Koble fra etter X...',
'983' : 'Dette gjør at ruteren kobles fra Internettleverandøren etter et tidsrom med inaktivitet. Bruk dette alternativet til å spare penger dersom du betaler for Internettjenesten per minutt.',
'htDDNS' : 'Hva er DDNS?',
'htDNS' : 'Hva er DNS?',
'htDMZ' : 'Hva er DMZ?',
'htLAN' : 'Hva styres av LAN-innstillingene?',
'htWANMain' : 'Hva er WAN-innstillinger?',
'htWANMAC' : 'Hva er MAC-adresse?',
'htWAN_PPPOE' : 'PPPoE-innstillinger',
'htWAN_PPTP' : 'PPTP-innstillinger',
'htIPv6' : 'Hva er IPv6?',
'htWifiID' : 'Hva er nettverksnavnet og kanalinnstillingene?',
'htWifiIDContent' : 'Nettverksnavnet er kalt et SSID (Service Set ID).  Alle klientene på nettverket må vite SSID-en for å kobles til med ruterens nettverk.',
'htWifiSec' : 'Hva er Wi-Fi-sikkerhet?',
'htWifiSecContent' : 'Alle Belkin-rutere leveres med Wi-Fi-sikkerhet aktivert.  Wi-Fi-sikkerhet gir et lag med beskyttelse mot uautorisert tilgang til nettverket.  Når sikkerheten er på, må brukere ha et passord for å få tilgang til nettverket.',
'htWifiWPS' : 'Wha er WPS (Wi-Fi Protected Setup)?',
'htWifiWPSContent' : 'Dette er en valgfri metode som gjør det enklere å konfigurere et sikret WiFi-nettverk for privatboliger eller små kontorer. Enheter uten WPS (Wi-Fi Protected Setup) kan likevel legges til på nettverket ved å velge nettverksnavnet og skrive inn nettverkspassordet.',
'htWifiGuest' : 'Hvordan brukes gjestetilgang?',
'htWifiGuestContent' : 'Når denne er aktivert, opprettes et adskilt WiFi-nettverk for gjestetilgang som gir tilgang til Internett, men ikke til andre enheter på nettverket.',
'htAP' : 'Kan jeg bruke ruteren som tilgangspunkt?',
'htAPContent' : 'Belkin-rutere kan konfigureres til å fungere utelukkende som tilgangspunkt og dermed omgå alle ruting- og brannmurfunksjoner.  Konfigurering av ruteren som tilgangspunkt er mest vanlig når noen vil legge til trådløse egenskaper på et eksisterende kabelbasert nettverk.',
'htQos' : 'Hva er Belkin Intellistream?',
'htDLNA' : 'Belkin Media Server drevet av Twonky',
'htPortForward' : 'Hva er portvideresending?',
'htPortForwardContent' : 'Portvideresending gjør det mulig for eksterne datamaskiner å koble seg til et bestemt program eller en bestemt tjeneste på lokalnettverket ditt. Du ville f.eks bruke portvideresending til å kjøre en nettserver (port 80) på nettverket.  De fleste moderne programmer krever ikke at du bruker portvideresending. De kan konfigurere portene de trenger automatisk.',
'htWanPing' : 'Hva gjør WAN-pingblokkering?',
'htWanPingContent' : 'Dette gir et høyere nivå av sikkerhet for å hindre eksterne Internett-brukere i å få tak i IP-adressen din. Den gjør dette ved å ikke svare på ping som kommer utenfra nettverket.',
'htRestart' : 'Hvorfor skal jeg starte ruteren på nytt?',
'htRestoreFC' : 'Hva oppnås ved å gjenopprette fabrikkinnstillingene?',
'htSaveSettings' : 'Hvorfor skal jeg lagre/sikkerhetskopiere innstillingene mine?',
'htRestoreSettings' : 'Hva betyr det å gjenopprette mine tidligere innstillinger?',
'htSystem' : 'Hva er systeminnstillinger?',
'htSystemContent' : 'Fra denne siden kan du angi en rekke grunnleggende ruterinnstilllinger, deriblant tidssone og administratorpassord.',
'htSelfHeal' : 'Hva er selvhelbreding?',
'hLANSettings' : 'Denne siden hjelper til med å konfigurere nye tilkoblinger, slå av og på DHCP, og angi IP-adressen til ruteren på det lokale nettverket.',
'htDHCPClientList' : 'Hva er DHCP-klientlisten?',
'htDHCPClientListContent' : 'Denne siden viser IP-adressen, vertsnavnet og MAC-adressen til alle enheter som er koblet til nettverket. Hvis datamaskinen ikke har et angitt vertsnavn, vil feltet være tomt. Klikk Oppdater for å oppdatere listen.',
'hWebsiteFilters' : 'Dette gir et ekstra lag med beskyttelse mot usikre/upassende nettsteder. Nettfilteret siler ut nettsteder ved å sjekke navnet på nettstedet opp mot en liste med godkjente steder.',
'hWANSettings' : 'Disse nettverksinnstillingene henviser til forbindelsen du har med Internettleverandøren (ISP).   Velg tilkoblingstypen som du har fra Internettleverandøren fra listen. ',
'htChannel' : 'I likhet med måten en radio bruker forskjellige stasjoner, kan ruteren kringkaste over ulike kanaler for å kommunisere med enhetene på nettverket. Auto (automatisk) er vanligvis det beste valget.',
'3430' : 'IPv6 (Internet Protocol version 6)er en versjon av Internet Protocol (IP) som skal etterfølge IPv4, og dirigerer nesten all Internettrafikk. Noen Internettleverandører har nesten gått tom for IP-adresser. IPv6 gjør at flere enheter kan kommunisere over Internett ved å bruke større tall til å opprette IP-adresser. Internettleverandøren din lar deg vite om du må bruke IPv6.',
'3431' : 'Tilkoblingstype',
'3432' : 'Auto-Config/DHCPv6 (standard)',
'3433' : 'Adressene nedenfor er gitt av Internettleverandøren. DHCPv6 gir flere funksjoner for å utvide oppkobling.',
'3434' : 'WAN',
'3435' : 'WAN-adresse',
'3436' : 'Gateway',
'3437' : 'LAN',
'3438' : 'Bruk denne delen til å konfigurere de interne nettverksinnstillingene på ruteren. Hvis du endrer LAN IPv6-adressen her, må du kanskje justere datamaskinens nettverksinnstillinger for å få tilgang til nettverket igjen.',
'3439' : 'LAN-prefiks',
'3440' : 'Grensesnitt-ID',
'3441' : 'Link-Local',
'3442' : 'DNS',
'3443' : 'Standardinnstillingene for IPv6 DNS er fra Internettleverandøren hvis tilgjengelige i WAN-ruterreklame eller DHCPv6-meldinger.',
'3444' : 'Primær',
'3445' : 'Sekundær',
'3446' : 'PPPoE over IPv6',
'3447' : 'Point-to-Point Protocol over Ethernet (PPPoE) brukes hovedsaklig av DSL-tjenester til å koble et DSL-modem til Internettet.',
'3448' : 'Logg inn',
'3450' : 'skjult passord',
'3451' : 'Brukernavn',
'3452' : 'Passord',
'3453' : 'Tjenestenavn',
'3454' : '6to4 Tunnel',
'3455' : 'Gjør at IPv6-pakker kan overføres på et IPv4-nettverk uten å måtte konfigurere bestemte tunneller. Denne tilkoblingstypen er aktuell dersom Internettleverandøren ikke støtter IPv6.',
'3456' : 'Ekstern 6to4 Relay-ruter',
'3457' : 'Pass-Through',
'3458' : 'Enheter som er tilkoblet ruteren kan kommunisere med hverandre ved hjelp av native IPv6-pakker. IPv6-pakker på lokalnettverket blir automatisk sendt til alle LAN-grensesnitt (Ethernet-porter og både 2,4 GHz og 5 GHz trådløse nettverk).',
'3459' : 'Når Pass-Through er aktivert, blir også IPv6-pakkene kopierte til WAN-grensesnittet. (Dette skaper en direkte, usikret forbindelse med Internettet.)',
'3460' : 'Ta kontakt med Internettleverandøren for å finne ut om de støtter IPv6.',
'3461' : 'Statisk IPv6',
'3462' : 'Statisk IPv6-adressering er ikke vanligvis brukt fordi det kan være vanskelig å administrere. Statisk IPv6 bør ikke brukes med enheter som kobles til flere nettverk, som f.eks bærbare datamaskiner og mobile enheter.',
'3463' : 'Bare lokal Pass-Through',
'3464' : 'IPv6 WAN Pass-Through er deaktivert. Alle lokale enheter på lokalnettverket og WiFi kan fremdeles kommunisere med hverandre direkte, men ruteren sender ikke noen IPv6-pakker til eller fra Internett, og sender heller ikke direkte respons til IPv6-pakker.',
'3465' : 'Internettleverandøren din gir ingen IPv6-tilkobling. Ta kontakt med dem for å finne ut om IPv6-støtte eller for å opprette oppkobling.',
'3466' : 'Bare lokal Pass-Through er innstilt automatisk for at enhetene dine skal sende IPv6-pakker mellom hverandre. Det andre alternativet er å bruke "6to4 Tunnel" for tilgang til Internett gjennom en IPv4-tilkobling.',
'3467' : 'Hver boks skal inneholde fire heksadesimale sifre (0–9 og a–f).',
'3468' : 'Skriv en ikke-multicast-adresse. Multicast-adresser begynner vanligvis med ff.',
'3469' : 'Prefiksets lengde skal være 1–127. Prefiksets lengde er vanligvis 64, 56, eller 48.',
'3470' : 'Har ingen IPv4-forbindelse.',
'3471' : 'Disse DNS.innstillingene overstyres av foreldrekontrollen',
'3472' : 'Nettstedfilter',
'3473' : 'Velg PPPoE i Internett-WAN > Tilkoblingsinnstillinger før du velger PPPoE over IPv6.',
'3474' : 'Har mistet Internettforbindelsen. Kontroller WAN-tilkoblingstypen eller ta kontakt med Internettleverandøren.',
'3475' : 'Standard DNS som fås av Internettleverandøren',
'gtTryManu' : 'Hvis du vet tilkoblingstypen din, kan du ',
'gtSetManual' : 'konfigurere den manuelt ',
'2100' : 'Tilgang nektet. Oppgi ruterpassordet for å gi midlertidig adgang til den blokkerte siden eller tjenestene.',
'2101' : 'Landingsside',
'2102' : 'Start',
'354' : 'Denne siden viser IP-adressen, vertsnavnet og MAC-adressen til alle datamaskiner som er koblet til nettverket. Hvis datamaskinen ikke har et angitt vertsnavn, vil Vertsnavn-feltet være tomt. Listen kan oppdateres ved å trykke Oppdater.',
'355' : 'IP-adresse',
'356' : 'Vertsnavn',
'357' : 'MAC-adresse',
'370' : 'Denne siden hjelper til med å konfigurere nye tilkoblinger, slå av og på DHCP, og angi IP-adressen til ruteren på det lokale nettverket.',
'371' : 'IP-adresse',
'372' : 'Nettverksmaske',
'373' : 'DHCP-server',
'378' : 'DHCP-serverfunksjonen gjør det svært enkelt å konfigurere et nettverk ved å tildele IP-adresser til alle datamaskiner i nettverket. Det er ikke nødvendig å gjøre endringer her.',
'379' : 'Startadresse for IP-utvalg',
'380' : 'Sluttadresse for IP-utvalg',
'381' : 'Leasingtid',
'382' : 'Uendelig',
'383' : 'Halv time',
'384' : 'Én time',
'385' : 'To timer',
'386' : 'Halv dag',
'387' : 'Én dag',
'388' : 'To dager',
'389' : 'Én uke',
'390' : 'To uker',
'391' : 'Hvor lenge DHCP-serveren vil reservere IP-adressen for hver datamaskin.',
'392' : 'Lokalt domenenavn',
'393' : 'Valgfritt',
'394' : 'En funksjon som lar deg tildele et navn til nettverket.',
'397' : 'IP-utvalget må være i samme delnett som gateway-IP-adressen.',
'398' : 'IP-adressen på slutten må være større en IP-adressen i begynnelsen.',
'399' : 'LAN IP-adressen skal ikke være i samme utvalg som DHCP-adressene.',
'400' : 'IP-adressen du velger skal ikke kunne rutes.',
'401' : 'Ugyldig LAN IP-adresse. Det første tallet kan ikke være 127 eller 0',
'404' : 'Endre Adresse-innleggsboksen i statusfeltet til nettleseren manuelt til den nye LAN-adressen.',
'406' : 'Vil du virkelig endre LAN IP-adressen?',
'416' : '192.168.y.x (der y er et tall mellom 0 og 255, og x er et tall mellom 1 og 254).',
'417' : '10.y.y.x (der y er et tall mellom 0 og 255, og x er et tall mellom 1 og 254).',
'418' : '172.z.y.x (der z er et tall fra 16 til 31, og y er et tall mellom 0 og 255, og x er et tall mellom 1 og 254).',
'713' : 'Ugyldig lokalt domenenavn:',
'1228' : 'Ugyldig startadresse for IP-utvalg.',
'1229' : 'Ugyldig sluttadresse for IP-utvalg.',
'1240' : 'Ugyldig LAN IP-adresse.',
'3' : 'Logg inn',
'408' : 'Du må logge inn med et passord før du kan endre instillinger. Hvis du ikke har angitt et tilpasset passord ennå, kan du la feltet være tomt og klikke Send inn.',
'410' : 'Standardinnstilling = la feltet stå tomt',
'412' : 'Send inn',
'1371' : 'Feil passord',
'1372' : 'Kontroller passordet og prøv igjen.',
'124' : 'Ruteren fører en logg over all aktivitet innenfor ruteren som f.eks. inn- og utlogging og ethvert forsøk på å få tilgang til ruteren fra Internett.',
'125' : 'Loggfil',
'126' : 'Lagre',
'127' : 'Transparent',
'1302' : 'Systemlogg',
'1303' : 'Brannmurlogg',
'8' : 'LAN-innstillinger',
'9' : 'Nettverksinnstillinger',
'10' : 'Tilkoblede enheter',
'2500' : 'Statisk ruting',
'11' : 'Internett WAN',
'335' : 'Tilkoblingstype',
'690' : 'Dynamisk',
'692' : 'Statisk',
'694' : 'PPPoE',
'696' : 'PPTP',
'698' : 'Telstra BigPond/OptusNet-kabel',
'42' : 'IPV6',
'43' : 'IPv6 Connection',
'13' : 'DNS',
'14' : 'MAC-adresse',
'16' : 'WiFi',
'17' : 'Nettverksnavn',
'18' : 'Sikkerhet',
'803' : '128-biters WEP',
'804' : '64-biters WEP',
'1296' : 'WPA/WPA2-Personal (PSK)',
'1297' : 'WPA/WPA2-Enterprise (RADIUS)',
'805' : 'WPA (med Radius-server)',
'1319' : 'Wi-Fi Protected Setup (WPS)',
'777' : 'Bruk som tilgangspunkt',
'833' : 'MAC-adressekontroll',
'1613' : 'Gjestetilgang',
'1850' : 'Foreldrekontroll',
'1851' : 'Nettstedfilter',
'1710' : 'Tilgangskontroll',
'20' : 'Media',
'7151' : 'Trafikkdiagram',
'7000' : 'Medieserver',
'1780' : 'Torrent Mate',
'1790' : 'Valgfri programvare',
'23' : 'Brannmur',
'24' : 'Portvideresending',
'25' : 'Klient-IP-filtre',
'26' : 'MAC-adressefiltrering',
'27' : 'DMZ',
'41' : 'DDNS',
'28' : 'WAN-pingblokkering',
'29' : 'Sikkerhetslogg',
'30' : 'Verktøy',
'32' : 'Start ruteren på nytt',
'34' : 'Gjenopprett fabrikkinnstillingene',
'35' : 'Lagre/sikkerhetskopier innstillinger',
'36' : 'Gjenopprett de forrige innstillingene',
'37' : 'Fastvareoppdatering',
'38' : 'Systeminnstillinger',
'39' : 'Selvhelbreding',
'1900' : 'Registrering',
'132' : 'Verdiområdet for inngående port er ikke riktig.',
'133' : 'Verdiområdet for privat port er ikke riktig.',
'134' : 'Med denne funksjonen kan du sende eksterne (Internett-) anrop for tjenester som f.eks. en webserver (port 80), FTP-server (Port 21) eller andre programmer gjennom ruteren til det interne nettverket.',
'276' : 'Tøm innlegg',
'277' : 'Legg til',
'278' : 'Beskrivelse',
'280' : 'Type',
'281' : 'Privat IP-adresse',
'282' : 'Privat port',
'376' : 'alle',
'411' : 'Transparent',
'648' : 'Ugyldig tegn',
'672' : 'Ugyldig tall! Tallet skal være mellom 1–65535',
'905' : 'Alle oppføringene er fulle.\nFjern noen først og prøv på nytt.',
'906' : 'Vil du fjerne oppføringen?',
'907' : 'Vil du fjerne alle oppføringene?',
'1241' : 'Ugyldig WAN IP-adresse.',
'1250' : 'Porten er ugyldig.',
'1362' : 'Beskrivelsen er tom',
'1601' : 'Automatisk',
'2055' : 'Inngående portområdeoverlegg',
'2056' : 'Privat portområdeoverlegg',
'3310' : 'Intellistream',
'3311' : 'Optimer Internettforbindelsen.',
'3312' : 'Medieserver',
'3313' : 'Del media mellom enheter på nettverket.',
'3314' : 'Foreldrekontroll',
'3315' : 'DNS-sikkerhet filtrerer for Internett-sikkerhet',
'3316' : 'IPv6-tilkobling',
'3317' : 'Nettverket er nå IPv6-kompatibelt.',
'1852' : 'Dette gir et ekstra lag med beskyttelse mot usikre/upassende nettsteder. Nettfilteret siler ut nettsteder ved å sjekke navnet på nettstedet opp mot en liste med godkjente steder.',
'1854' : 'Filtreringsalternativer',
'1856' : 'Ikke noe filter',
'1858' : 'Blokker ondskapsfulle nettsteder',
'1859' : 'Blokkerer skadelig programvare, phishing- og svindelnettsteder',
'1860' : 'Blokker ondskapsfulle og pornografiske nettsteder',
'1861' : 'Blokkerer skadelig programvare, phishing, svindelnettsteder, og nettsteder som viser tydelig seksuelt innhold.',
'1862' : 'Blokker ondskapsfulle, pornografiske og andre nettsteder som er uegnet for barn.',
'1863' : 'Blokkerer skadelig program, phishing-, svindelnettsteder og nettsteder som inneholder tydelig seksuelt innhold, innhold som er uegnet for barn, abort, alkohol, tabakk, kriminalitet, kult, narkotika, gambling, hat, selvmord og vold.',
'1864' : 'Hvis du vil endre DNS-adressen kan du fortsette til Internett WAN > {DNS}',
'7152' : 'Diagrammene nedenfor viser både WAN utgående og innkommende trafikk prioritert i ulike kategorier. Diagrammene viser de siste 10 minuttene (oppdateres automatisk hvert 5. sekund).',
'7154' : 'Tegnforklaring for trafikk',
'7155' : 'Innkommende trafikk',
'7156' : 'Utgående trafikk',
'7157' : 'Hvis du vil aktivere denne funksjonen, må du aktivere Intellistream',
'7158' : 'her',
'7159' : '.',
'7160' : 'Nettverkstilkobling og kontroll',
'7161' : 'Tale, videosamtale og spill',
'7162' : 'Web og web-video',
'7163' : 'Epost og VPN',
'7164' : 'Nedlastning, Torrents og annet',
'7170' : 'Byter/sek',
'7174' : 'Tidspunkt/timer:minutter',
'326' : 'Lokalt nettverk',
'327' : 'LAN/WLAN MAC',
'332' : 'DHCP-server',
'333' : 'Internettinnstillinger',
'334' : 'WAN MAC-adresse',
'337' : 'WAN IP',
'338' : 'Standard gateway',
'339' : 'DNS-adresse',
'gtGuestName' : 'Gjeste-SSID',
'gtGuestKey' : 'Gjestenøkkel',
'347' : 'Du må logge inn før du kan endre innstillinger.',
'2022' : 'Bare modem',
'2031' : 'Koble til',
'2032' : 'Koble fra',
'2033' : 'Støymargin',
'2034' : 'Downstream',
'2035' : 'Upstream',
'2036' : 'Demping (dB)',
'2037' : 'Utgangsstrøm (dBm)',
'2038' : 'Datahastighet (kbps)',
'tDashboard' : 'Velkommen til ditt Belkin ruterdashbord!',
'rtFeature' : 'Egenskaper',
'rtLink' : 'Ruterlinker',
'p1310t001' : 'Tilkoblingsdetaljer',
'p1310t002' : 'Test forbindelsen på nytt',
'p1310t003' : 'Forrige kontroll',
'p1310t004' : 'Nedlastningshastighet',
'p1310t005' : 'Opplastningshastighet',
'p1000t001' : 'Tilkoblede enhteter',
'p1000t002' : 'Se alt',
'2501' : 'Skriv inn følgende konfigurasjonsparametre',
'2502' : 'Nettverksadresse',
'2503' : 'Nettverksmaske',
'2504' : 'Gateway',
'396' : 'Nettverksmasketallet du skrev er ugyldig.',
'1231' : 'Ugyldig Gateway.',
'1361' : 'Ugyldig IP-adresse. Første tallet skal være mellom 1 og 254.',
'1800' : 'IP-adressen og nettverksmasken samsvarer ikke.',
'Support1t011' : 'Les om det.',
'Support2t011' : 'Les om det.',
'Support2t012' : 'Åpne den følgende URL-adressen på en enhet som er koblet til Internett og finn ut hvordan du kan løse problemet selv: <STRONG>www.belkin.com/support/asdlkj</STRONG>',
'Support3t011' : 'Les om det.',
'Support3t012' : 'Åpne den følgende URL-adressen på en enhet som er koblet til Internett og finn ut hvordan du kan løse problemet selv: <STRONG>www.belkin.com/support/asdlkj</STRONG>',
'Support6t036' : 'Les om det.',
'425' : 'Dette vil sette ruteren tilbake til originalinnstillingene. Vi anbefaler at du <a href="ut_save.html">lagrer/sikkerhetskopierer innstilllingene</a> før du gjenoppretter originalinnstillingene. Ved å lagre ruterkonfigurasjonen kan du gjenopprette den senere hvis innstillingene er tapt eller endret.',
'426' : 'ADVARSEL: Alle innstillingene dine vil gå tapt!\nEr du sikker på at du vil gjøre dette?',
'427' : 'Gjenoppretting av standardinnstillingene tar opptil $s sekunder. Slå ikke av strøm til ruteren mens denne prosessen pågår.',
'428' : 'Vil ikke gjenopprette fabrikkinnstillingene. Ingen innstillinger er tapt!',
'429' : 'Gjenopprett standardinnstillingene',
'301' : 'Dette gjør omstart på ruteren hver uke for et mer problemfritt nettverk.',
'302' : 'Initialiser ruteren automatisk',
'303' : 'Angi dager',
'304' : 'Angi tidspunkt',
'527' : 'Dette lar deg sette ruterinnstillingene til en konfigurasjon som du har lagret tidligere.',
'528' : 'Gjenopprett',
'529' : 'Skriv inn navnet på  filen som inneholder de sikkerhetskopierte innstillingene.',
'530' : 'Vil du fortsette og gjenopprette innstillingene?',
'531' : 'Etter at innstillingene er gjenopprettet, svarer kanskje ikke enheten i opptil et minutt.\n\nDette er normalt. Slå ikke av enheten mens dette pågår.',
'451' : 'Ved å lagre den nåværende ruterkonfigurasjonen kan du gjenopprette den senere hvis innstillingene er tapt eller endret. Vi anbefaler at du lagrer innstilllingene før du gjør fastvareoppdateringer.',
'539' : 'Lagre',
'130' : 'Enten har du ikke skrevet alle IP-adressene eller så er noen av tallene du skrev ugyldige. Tallet i hver IP-innleggsboks skal være mellom 1 og 254.',
'541' : 'Administratorpassord:',
'542' : 'Ruteren leveres UTEN noe passord angitt. Hvis du vil legge til et passord for økt sikkerhet, kan du angi et passord her.',
'543' : 'Skriv inn gjeldende passord',
'544' : 'Skriv inn nytt passord',
'545' : 'Bekreft nytt passord',
'546' : 'Tidsavbrudd for innlogging',
'547' : '(1-99 minutter)',
'548' : 'Tid og tidssone:',
'549' : 'Januar',
'550' : 'Angi tidssonen. Merk av i denne ruten hvis du er i et område som skifter til sommertid.',
'551' : 'Tidssone',
'606' : 'Sommertid',
'607' : 'Juster sommertid automatisk',
'608' : 'Eksternbehandling:',
'609' : 'AVANSERT FUNKSJON!',
'610' : 'Med Ekstern behandling kan du gjøre endringer i ruterinnstillingene fra hvor som helst på Internett. Før du aktiverer denne funksjonen:',
'611' : 'PÅSE AT DU HAR ANGITT ADMINISTRATORPASSORD.',
'642' : 'Når ekstern behandling er slått på, har du en økt sikkerhetsrisiko. Bare slå den på for korte perioder når det er nødvendig, og slå den av når du ikke trenger den. Bruk også et passord.',
'612' : 'Enhver IP-adresse kan eksternbehandle ruteren.',
'613' : 'Bare denne IP-adressen kan eksternbehandle ruteren',
'614' : 'Aktiver/deaktiver ekstern behandling',
'615' : 'Tildeling av port er brukt i den virtuelle serveren.',
'616' : 'Tildeling av IP er i konflikt med WAN IP-adressen.',
'617' : 'UPNP-aktivering:',
'618' : 'Her kan du slå ruterens UPNP-funksjon av eller på. Hvis du bruker programmer som støtter UPnP, kan du aktivere UPnP for å gi disse programmene mulighet til å konfigurere ruteren automatisk.',
'619' : 'Aktiver/deaktiver UPnP',
'620' : 'Aktivere automatisk fastvareoppdatering:',
'621' : 'Lar deg undersøke tilgjengeligheten av fastvareoppdateringer for ruteren automatisk.',
'622' : 'Aktiver/deaktiver automatisk fastvareoppdatering',
'623' : 'Nåværende passord er ugyldig',
'624' : 'De nye passordene stemmer ikke. Prøv igjen.',
'626' : 'Passordlengden er ugyldig. Maksimum passordlengde er 12 tegn og minimum passordlengde er 3 tegn',
'628' : 'Det anbefales på det sterkeste at du angir et administratorpassord.',
'629' : 'Primær NTP-server',
'630' : 'Sekundær NTP-server',
'640' : 'Eksternbehandlingsport',
'738' : 'Verdien du skrev for inaktiv tid er ugyldig. Tallet må være et heltall mellom 1-99.',
'796' : 'Aktivert Turbo-modus gir ruteren eller tilgangspunktet adgang til å bruke "Frame Bursting" (fjerne pausene mellom pakker og dermed øke overføringshastigheten) for å oppnå maksimum datagjennomstrømning fra ruteren eller tilgangspunktet til 802.11g-klienter. Turbo-modus fungerer med 802.11g-klienter som støtter turbomodus. Belkin 802.11g-klienter som bruker den nyeste driveren støtter Turbo-modus. Klienter som ikke støtter Turbo-modus fungerer normalt selv om Turbo-modus er aktivert.',
'1282' : 'Februar',
'1283' : 'Mars',
'1284' : 'April',
'1285' : 'Mai',
'1286' : 'Juni',
'1287' : 'Juli',
'1288' : 'August',
'1289' : 'September',
'1290' : 'Oktober',
'1291' : 'November',
'1292' : 'Desember',
'1373' : 'Australia',
'1374' : 'New Zealand',
'1375' : 'Nord-Amerika',
'1376' : 'Europa',
'1377' : 'Asia-Stillehavsområdet',
'2300' : '(GMT-12:00) Enewetak, Kwajalein',
'2301' : '(GMT-11:00) Midwayøyane, Samoa',
'2302' : '(GMT-10:00) Hawaii',
'2303' : '(GMT-09:00) Alaska',
'2304' : '(GMT-08:00) Pacific Time (USA & Canada); Tijuana',
'2305' : '(GMT-07:00) Arizona',
'2306' : '(GMT-07:00) Mountain Time (USA & Canada)',
'2307' : '(GMT-06:00) Central Time (USA & Canada)',
'2308' : '(GMT-06:00) Mexico City',
'2309' : '(GMT-06:00) Tegucigalpa',
'2310' : '(GMT-06:00) Saskatchewan',
'2311' : '(GMT-05:00) Bogota, Lima, Quito',
'2312' : '(GMT-05:00) Eastern Time (USA & Canada)',
'2313' : '(GMT-05:00) Indiana (Øst)',
'2314' : '(GMT-04:00) Atlantic Time (Canada)',
'2315' : '(GMT-04:00) Caracas, La Paz',
'2316' : '(GMT-04:00) Santiago',
'2317' : '(GMT-03:00) Newfoundland',
'2318' : '(GMT-03:00) Brasilia',
'2319' : '(GMT-03:00) Buenos Aires, Georgetown',
'2320' : '(GMT-02:00) Midt-Atlanterhavet',
'2321' : '(GMT-01:00) Azores, Kapp Verde-øyene.',
'2322' : '(GMT) Casablanca, Monrovia',
'2323' : '(GMT) Greenwich Mean Time: Lisboa, London, Edinburgh',
'2324' : '(GMT) Greenwich Mean Time: Dublin',
'2325' : '(GMT+01:00) Amsterdam, Berlin, Bern, Roma',
'2326' : '(GMT+01:00) Stockholm, Wien, Beograd',
'2327' : '(GMT+01:00) Bratislava, Budapest, Ljubljana',
'2328' : '(GMT+01:00) Praha, Brussel, København, Madrid',
'2329' : '(GMT+01:00) Paris, Sarajevo, Skopje',
'2330' : '(GMT+01:00) Warszawa, Zagreb',
'2331' : '(GMT+02:00) Aten, Istanbul, Minsk, Vilnius, Sofia',
'2332' : '(GMT+02:00) Bukarest',
'2333' : '(GMT+02:00) Kairo',
'2334' : '(GMT+02:00) Harare, Pretoria',
'2335' : '(GMT+02:00) Helsinki, Riga, Tallinn',
'2336' : '(GMT+02:00) Israel',
'2337' : '(GMT+03:00) Bagdad, Kuwait, Nairobi, Riyadh',
'2338' : '(GMT+03:00) Moskva, St. Petersburg,Volgograd, Kazan',
'2339' : '(GMT+03:00) Teheran',
'2340' : '(GMT+04:00) Abu Dhabi, Muscat, Tbilisi',
'2341' : '(GMT+04:00) Kabul',
'2342' : '(GMT+05:00) Islamabad, Karachi, Ekaterinburg',
'2343' : '(GMT+05:30) Delhi',
'2344' : '(GMT+06:00) Almaty, Dhaka',
'2345' : '(GMT+07:00) Bangkok, Jakarta, Hanoi',
'2346' : '(GMT+08:00) Beijing, Chongqing, Urumqi',
'2347' : '(GMT+08:00) Hongkong, Perth, Singapore, Taipei',
'2348' : '(GMT+09:00) Tokyo, Osaka, Sapporo',
'2349' : '(GMT+09:00) Seoul',
'2350' : '(GMT+09:30) Adelaide, Darwin',
'2351' : '(GMT+10:00) Brisbane',
'2352' : '(GMT+10:00) Canberra, Melbourne, Sydney',
'2353' : '(GMT+10:00) Hobart',
'2354' : '(GMT+10:00) Guam, Port Moresby',
'2355' : '(GMT+11:00) Magadan, Solamon, Ny-Caledonia',
'2356' : '(GMT+12:00) Wellington, Auckland',
'2357' : '(GMT+12:00) Fiji',
'2358' : '(GMT+13:00) Nuku`alofa.',
'2370' : 'Sø',
'2371' : 'Ma',
'2372' : 'Ti',
'2373' : 'O',
'2374' : 'To',
'2375' : 'Fr',
'2376' : 'Lø',
'2401' : 'ECO-modus',
'2402' : 'Demp lampene på frontpanelet',
'2403' : 'Deaktiver radio fra',
'2404' : 'unntatt',
'2405' : 'Med denne funksjonen kan du dempe LED-indikatorene foran på ruteren for å spare strøm. Du kan også deaktivere den trådløse radioen til forhåndsbestemte tider.',
'2406' : 'Starttiden kan ikke være senere enn sluttiden!',
'322' : 'Fastvareversjon',
'431' : 'Fra tid til annen kan Belkin utgi nye versjoner av ruterens operativprogram. Slike oppdateringer inneholder forbedringer og korrigeringer for ruteren.',
'432' : '<b>MERK:</b>Du bør <a href="ut_save.html">sikkerhetskopiere de gjeldende innstillingene</a> før du oppdaterer til en ny versjon av fastvaren.',
'433' : 'Klikk her',
'434' : 'for å gå til siden Lagre/sikkerhetskopier gjeldende innstillinger.',
'435' : 'Se etter ny fastvareversjon',
'436' : 'Undersøk fastvaren',
'437' : 'Update Firmware (Oppdatere fastvare)',
'438' : 'Oppdater',
'439' : 'Angi plasseringen for oppgraderingsfilen. Skriv enten filens bane og filnavn eller klikk Bla gjennom for å bla til filens plassering.',
'440' : 'Er du sikker på at du vil fortsette med oppgraderingen?',
'441' : 'På slutten av oppgraderingen svarer kanskje ikke ruteren på kommandoer i opptil et minutt. Dette er normalt. Ikke slå av eller start ruteren på nytt mens dette pågår.',
'1198' : 'Fastvareoppdatering pågår.',
'534' : 'Start ruteren på nytt',
'535' : 'Er du sikker på at du vil starte ruteren på nytt? Starte ruteren på nytt påvirker ikke konfigurasjonen.',
'536' : 'Det kan ta opptil $s sekunder for ruteren å starte på nytt. Slå ikke av ruteren før tilbakestillingen er fullført.',
'7001' : 'Kos deg med musikken, bildene og videoene dine på en lettvinn måte gjennom en hvilken som helst DLNA-enhet koblet til nettverket. Drevet av Twonky.',
'7002' : 'DLNA-server',
'7003' : 'Servernavn',
'7004' : 'Delte stasjoner:',
'7005' : 'Klar',
'7006' : 'Indekserer ...',
'7007' : 'Tjener:',
'7008' : 'videoer',
'7009' : 'sanger',
'7010' : 'bilder',
'7011' : 'Ikke delt med nettverket.',
'7012' : 'Det er ingen USB-stasjoner tilkoblet med ruteren.',
'7016' : 'Oppdater indeks',
'7017' : 'Skriv inn et beskrivende navn for medieserveren',
'7018' : 'Dette tegnet er ikke tillatt',
'7019' : 'Du har mer media enn ruteren kan indeksere, så vi tar oss av de første',
'7020' : 'elementene.',
'7021' : 'Twonky er en produktlinje med digital programvare til privatbruk laget av PacketVideo Corporation (PV).',
'7022' : 'Kan ikke indeksere skrivebeskyttet stasjon.',
'7023' : 'MB',
'7024' : 'GB',
'7025' : 'TB',
'7026' : 'video',
'7027' : 'sang',
'7028' : 'bilde',
'770' : 'Bruk dette alternativet bare for Bigpond-kabel og OptusNet-kabel. ',
'771' : 'VIKTIG:',
'775' : '3) Koble strømledningen til Belkin-ruteren igjen.',
'776' : 'Du kan kontrollere at du er tilkoblet Internett ved å åpne nettleseren, f.eks. Internett Utforsker, Firefox eller Safari, og se om du kan åpne ulike nettsteder.',
'731' : 'Brukernavn',
'489' : 'Passord',
'732' : 'Skriv passordet en gang til',
'756' : 'Du må skrive passordet på nytt!',
'1379' : 'Enten har du ikke skrevet alle IP-tallene eller så er noen av tallene du skrev ugyldige. IP-adressen skal være lik x.y.y.x (der y er et tall mellom 0 og 255 og x er et tall mellom 1 og 254).',
'709' : 'Legg inn de dynamiske IP-innstillingene ved å skrive inn informasjonen nedenfor og klikke Lagre.',
'710' : 'Vertsnavn',
'711' : 'Vertsnavn = et navn som Internettleverandøren krever for tilkobling med systemet deres.',
'712' : 'Endre WAN MAC-adresse',
'330' : 'IP-adresse',
'331' : 'Nettverksmaske',
'659' : 'Ugyldig MTU – skal være mellom 500…1500.',
'730' : 'Legg inn PPPoE-innstillingene ved å skrive inn informasjonen nedenfor og klikke Lagre.',
'733' : 'Tjenestenavn (valgfritt)',
'734' : 'MTU (500-1500)',
'735' : 'MTU-innstillingen skal ikke endres med mindre Internettleverandøren krever en annen verdi',
'736' : 'Koble fra etter',
'737' : 'minutter med inaktivitet.',
'741' : 'Ugyldig MTU-verdi',
'2005' : 'IP tildelt av Internettleverandør',
'2021' : 'Klikk her for å skrive inn DNS-innstillingene',
'2023' : 'Doble anførselstegn er ikke tillatt.',
'2024' : 'Brukernavnet inneholder ugyldige tegn',
'2025' : 'Omvendt skråstrek kan ikke brukes.',
'2030' : 'Enten har du ikke skrevet hele adressen til Standard Gateway eller så er noen av tallene du skrev ugyldige. Tallene skal være mellom 0 og 255',
'2052' : 'Passordet inneholder ugyldige tegn (<,> og &)',
'691' : 'En dynamisk tilkobling er det vanligste. Hvis du bruker et kabelmodem har du mest sannsynlig en dynamisk tilkobling. Bruk denne hvis du har et kabelmodem eller du ikke er sikker på tilkoblingstypen.',
'723' : 'Deriblant Internettleverandører som krever et vertsnavn og Internettleverandører som binder tilkoblingen til en bestemt MAC-adresse.',
'693' : 'Tilkobling med en statisk IP-adresse er mindre vanlig enn andre. Bruk dette valget bare hvis Internettleverandøren ga deg en IP-adresse som aldri endres.',
'724' : 'Ruteren støtter tilkobling med en Internettleverandør som tildeler statisk IP-adresse.',
'695' : 'Hvis du bruker et DSL-modem og/eller Internettleverandøren ga deg et brukernavn og passord, er sannsynligvis tilkoblingstypen din PPPoE. Bruk denne tilkoblingstypen.',
'725' : 'Ruteren støtter en dynamisk tilkoblingstype som krever PPPoE-innlogging for godkjenning.',
'697' : 'Noen Internettleverandører bruker PPTP-protokollen til å koble abonnenter til sentralkontoret. Dette krever at du legger inn noen flere innstillinger som du skal ha fått av Internettleverandøren. Når du har lagret endringene, viser Internettstatusindikatoren et grønt lys dersom det var vellykket.',
'726' : 'Til bruk med Internettleverandører som krever PPTP-tilkoblingsmetoden.',
'699' : 'Bruk dette alternativet bare til Bigpond- og OptusNet-kabeltilkoblinger.',
'728' : 'BARE for brukere i Australia. Ruteren støtter tilkobling med Telstra BigPond.',
'2019' : 'Legg inn modeminnstillingene ved å skrive inn informasjonen nedenfor og klikke Lagre.',
'tBackToConnectionType' : 'Tilbake til tilkoblingstype',
'759' : 'Legg inn de statiske IP-innstillingene ved å skrive inn informasjonen nedenfor og klikke Lagre.',
'761' : 'Nettverksmaske',
'762' : 'ISP Gateway-adresse',
'754' : 'Klikk her for å skrive inn DNS-innstillingene',
'715' : 'Hver enhet på nettverket har en unik maskinvareadresse (MAC-adresse) som identifiserer enheten for andre enheter på nettverket og Internett.  Noen få Internettleverandører krever at du angir MAC-adressen fra nettverkskortet eller tidligere ruter i ruterinnstillingene. Hvis du ikke er sikker, skriver du MAC-adressen til datamaskinen som var opprinnelig koblet til modemet før ruteren ble installert.',
'716' : 'WAN MAC-adresse',
'717' : 'Klon datamaskinens MAC-adresse',
'718' : 'Klon',
'721' : 'I Internett/WAN-kategorien konfigurerer du ruteren til å koble seg til Internettleverandøren. Ruteren kan koble seg til så å si enhver Internettleverandørs system, så lenge du har konfigurert ruterinnstillingene riktig for den aktuelle Internettleverandørens tilkoblingstype. For å konfigurere ruteren til å koble seg til Internettleverandøren, klikker du Tilkoblingstype i Internett/WAN-kategorien til venstre i skjermbildet.',
'722' : 'Disse tilkoblingstypene støttes:',
'htWANMainContent' : 'Velg tilkoblingstype:',
'700' : 'Neste',
'744' : 'PPTP-konto',
'745' : 'Passord',
'746' : 'Skriv passordet en gang til',
'747' : 'Vertsnavn',
'1770' : 'IP tildelt av Internettleverandør',
'1771' : 'Ja',
'1772' : 'Nei',
'1773' : 'Adresse for tjenesten',
'750' : 'Nettverksmaske',
'778' : 'Ruteren kan konfigureres til å fungere utelukkende som tilgangspunkt (AP) og dermed omgå alle rute- og brannmurfunksjoner. Dette kan gjøres ved å velge Aktiver og skrive inn IP-adressen du vil at tilgangspunktet skal ha.',
'779' : 'Tilgangspunktmodus:',
'781' : 'Angi nettverksmasken',
'801' : 'Sikkerhetsmodus',
'806' : 'Du kan konfigurere trådløse sikkerhets-/krypteringsinnstillinger her. Sikkerhet skal være aktivert for å sikre maksimal trådløs sikkerhet. WPA (Wi-Fi Protected Access) beskytter dynamiske nøkkelendringer og er den beste sikkerhetsløsningen. I trådløse miljøer hvor ikke alle enhetene støtter WPA, skal det brukes WEP (Wired Equivalent Privacy).',
'377' : 'Automatisk',
'487' : 'PÅ',
'488' : 'AV',
'787' : 'Hvis du vil gjøre endringer i de trådløse innstillingene for ruteren, gjør du dem her. Klikk Lagre for å lagre innstillingene.',
'788' : 'Trådløs kanal',
'789' : 'SSID',
'790' : 'Trådløs modus',
'794' : 'Kringkast SSID',
'797' : 'Beskyttet modus',
'1300' : 'Utvidelseskanal',
'1301' : 'Båndbredde',
'1304' : '802.11e/WMM QoS',
'852' : 'Lengden på PSK-nøkkelen skal være 8 til 63 eller 64 Hex-tegn',
'856' : 'WPA PSK (beskyttet Wi-Fi-tilgang med forhåndsdelt nøkkel): Nøkkelen er et passord i form av et ord, en frase eller en serie med bokstaver og tall. Nøkkelen må være mellom <b>8</b> og <b>63</b> tegn og kan inneholde mellomrom og symboler, eller <b>64</b> Hex-tegn (bare 0-9 og A-F). Alle klienter som kobler til nettverket må bruke samme PSK-nøkkel.',
'115' : 'Enten har du ikke skrevet alle HEX-tegnene eller et av HEX-tegnene du skrev er ugyldig. Et HEX-tegn kan være et tall fra 0-9 eller en bokstav fra A-F.',
'308' : '<b>SPI</b> Stateful Packet Inspection. SPI er det korporative nivået for Internettsikkerhet som en HomeConnect-hjemmenettverksgateway gir. Ved å bruke SPI fungerer gatewayen som en "brannmur" og beskytter nettverket ditt mot hackere.',
'808' : 'MERK:',
'809' : 'For automatisk generering av heksadesimale tallpar ved bruk av en passfrase, skriver du passfrasen her og trykker på knappen til høyre.',
'810' : 'Passfrase',
'811' : 'Generer',
'812' : 'Skriv inn en passfrase',
'814' : 'Nøkkel',
'818' : '(heksadesimale tallpar)',
'296' : '<b>IP-adresse</b> IP står for Internet Protocol (internettprotokoll). En IP-adresse består av en serie på fire tall adskilt av punktum. Denne adressen identifiserer en enkelt, unik Internett-vert. Eksempel: 192.34.45.8.',
'298' : '<b>ISP</b> – Internet Service Provider (internettleverandør). En ISP er et selskap som tilbyr internettilgang til privatpersoner, selskaper eller organisasjoner.',
'807' : '(13 heksadesimale tallpar)',
'813' : 'Nøkkelen er ikke fullstendig',
'821' : 'er ikke fullstendig',
'1190' : '<br>Du kan registrere deg og få ditt eget dynamiske DNS-vertsnavn på http://www.dyn.com.<br>',
'1339' : 'Det anbefales å bruke WPA/WPA2 når WPS er aktivert.',
'1363' : 'Prosessen pågår – Vent litt...',
'1364' : 'Oppdaget en feil – Prøv igjen.',
'1365' : 'Overlappingsfeil i økten: Vent i 60 sekunder før du starter prosessen på nytt eller se klientverktøyet hvis du vil koble deg til dette nettverket manuelt.',
'1366' : 'Fullført – Enheten er koblet til ruteren.',
'1370' : 'Ugyldig PIN! Enhetens PIN er enten fire eller åtte sifre. Kontroller og skriv inn på nytt.',
'1620' : 'Initierer – Start WPS PBC på klientenheten innen to minutter.',
'1621' : 'Initierer – Start WPS på klientenheten innen to minutter.',
'1622' : 'Tidsavbrudd – Ingen klient kobler til ruteren.',
'1623' : 'Wi-Fi Protected Setup-melding',
'1393' : 'WPS-maskinvareknapp',
'1320' : 'Wi-Fi Protected Setup (WPS) er industristandardmetoden for enklere sikkerhetskonfigurasjon og behandling av Wi-Fi-nettverk. Nå kan du installere og koble til et WPA-aktivert 802.11-nettverk på enkelt vis med WPS-sertifiserte enheter, enten ved hjelp av Personal Information Number (PIN)- eller Push Button Configuration (PBC)-metoden. Eldre enheter som ikke har WPS kan legges til i nettverket ved hjelp av vanlig manuell konfigureringsmetode.',
'1321' : 'Personal Information Number (PIN)-metoden',
'1322' : 'Skriv inn PIN-koden fra klientenheten og klikk Registrer. Start deretter WPS på klientenheten fra enhetens trådløse verktøy eller WPS-program innen 2 minutter.',
'1323' : 'Skriv inn klientenhetens PIN',
'1324' : 'Registrer',
'1325' : 'Hvis en ekstern registrator er tilgjengelig, kan du også skrive inn ruterens PIN på den eksterne registratoren. Du kan endre ruterens PIN ved å klikke Generer ny PIN eller Gjenopprett standard-PIN for å tilbakestille PIN-koden til standardinnstillingen.',
'1326' : 'Ruter-PIN',
'1327' : 'Generer ny PIN',
'1328' : 'Gjenopprett standard-PIN',
'1329' : 'Push Button Configuration (PBC)-metoden',
'1330' : 'Trykk og hold PBC-knappen på ruteren i 3 sekunder eller klikk Start PBC. Start deretter PBC på enheten du vil koble til ruteren innen 2 minutter.',
'1331' : 'Start PBC',
'1332' : 'Manuell konfigureringsmetode',
'1333' : 'For klientenheter som ikke har WPS, konfigurerer du enheten manuelt med de følgende innstillingene.',
'1334' : 'Trådløs sikkerhet',
'1336' : 'Nettverksgodkjenning',
'1337' : 'Datakryptering',
'1338' : 'Nettverksnøkkel (PSK)',
'1340' : 'Lås opp ruter-PIN',
'1341' : 'Ruterens PIN er deaktivert fordi det ble gjort for mange mislykkede tilgangsforsøk',
'1390' : 'Mislykket PIN-kontrollsum! Kontroller og skriv inn på nytt.',
'1391' : 'Ugyldig PIN! Enhetens PIN er åtte numeriske sifre. Kontroller og skriv inn på nytt.',
'1392' : 'Konfigurert',
'1396' : 'Konfigurer trådløs sikkerhet manuelt',
'1397' : 'trådløs sikkerhet',
'common_err1' : '%s er NULL',
'upgrade_err2' : 'Fastvareoppdateringen ble avsluttet pga utilstrekkelige ressurser. Oppdateringen var mislykket.\nPrøv igjen når systemet er inaktivt (ingen Internettrafikk)',
'upgrade_err3' : 'Kan ikke laste opp. Ta kontakt med administrator.',
'upgrade_err4' : 'Fastvaren er for stor. Oppdateringen var mislykket.',
'upgrade_err5' : 'Den nyeste programvaren er allerede installert.',
'upgrade_err6' : 'Det ser ut som fastvareoppdateringen er ødelagt. Last ned fastvarefilen på nytt og prøv igjen.',
'show10' : 'DHCP-klientliste',
'show54' : 'Tilkoblingsinnstillinger',
'btn2' : 'Bruk endringene',
'cff1' : 'Fullført søk etter fastvare',
'PM2' : ':30 PM',
'AM2' : ':30 AM',
'Dimicons' : 'Demp symboler',
'EcoTo' : 'til',
'fvrm' : 'Du må deaktivere eksternbehandling. Fordi porten er i kollisjonskurs med den inngående porten til en av de virtuelle serverne.',
'lsipm2' : 'Ugyldig LAN IP-adresse. Det siste tallet kan ikke være 0 eller 255',
'lsldnm' : 'Ugyldig lokalt domenenavn: `~!@#$%^&*()_+[]{}\|;:\'"<>/?.,',
'lsipm5' : 'IP-adressen du velger skal være privat (ikke rutbar).\n  192.168.x.x (der x er et tall mellom 0 og 255.) \n10.x.x.x (der x er et tall mellom 0 og 255.)\172.y.x.x (der y er et tall fra 16 til 31, og x er et tall mellom 0 og 255.)',
'ufy4' : 'Gjenoppretting av standardinnstillingene kan ta opptil 60 sekunder. Slå ikke av strøm til ruteren mens denne prosessen pågår.',
'ufe11' : 'På slutten av oppdateringen svarer kanskje ikke ruteren på kommandoer i opptil 180 sekunder. Dette er normalt. Ikke slå av eller start ruteren på nytt mens dette pågår.',
'ur5' : 'Det kan ta opptil 30 sekunder for ruteren å starte på nytt. Slå ikke av ruteren før tilbakestillingen er fullført.',
'ur6' : 'Det kan ta opptil 60 sekunder for ruteren å starte på nytt. Slå ikke av ruteren før tilbakestillingen er fullført.',
'usys83' : 'Feltene Nytt passord og Bekreft passord er ikke like',
'usys83_1' : 'Passord og Bekreft passord er ikke like.',
'usys85_1' : 'Administratorpassordet skal være mellom 3 og 12 tegn.',
'usys88' : 'Passordet har nådd maksimal lengde!',
'usys89' : 'AM',
'usys90' : 'PM',
'usys92' : 'Det eksterne tilgangsportnummeret skal være fra 1 til 65535.',
'usysipm' : 'Enten har du ikke skrevet alle IP-tallene eller så er noen av tallene du skrev ugyldige. IP-adressen skal være i formatet x.y.y.z(der x er et tall fra 1 til 223, y er et tall fra 0 til 255 og z er et tall fra 1 til 254).',
'self_healing60' : 'Selvhelbreding',
'chkwait' : 'Ser etter nyere fastvare ...',
'Europe' : 'Europa',
'Australia' : 'Australia & NZ',
'AsiaPacific' : 'Asia-Stillehavsområdet',
'NorthAmerica' : 'Nord-Amerika',
'vjs1' : 'Ugyldig IP-adresse er for lang. Prøv igjen.',
'vjs2' : 'Ugyldig IP-adresse mangler \'.\'. Prøv igjen.',
'vjs3' : 'Ugyldig IP-adresse mangler tall mellom \'.\'. Prøv igjen.',
'vjs4' : 'Ugyldig IP-adresse har et ekstra \'.\'. Prøv igjen.',
'vjs5' : 'Ugyldig IP-adresse har for store tall mellom \'.\'. Prøv igjen.',
'vm1' : 'Ugyldig tegn ',
'vm2' : ' i posisjon ',
'vm3' : 'Må være ',
'vjs6' : 'Ugyldig årsformat – skal skrives som f.eks. 2002',
'vm4' : 'Ugyldig tall ',
'vjs8' : 'Ugyldig årstall – skal være mellom 1970...2037',
'vjs9' : 'Ugyldig månedsformat – skal skrives som f.eks. 01...12)',
'vjs161' : ' ikke i ',
'vjs162' : ' nettmaske',
'vjs163' : 'Tillatt DHCP-område er ',
'vjs17' : 'Du skrev to forskjellige passord. Undersøk igjen!',
'vjs18' : 'Skriv inn startportnummer.',
'vjs19' : 'Startportnummeret skal være mindre enn sluttportnummeret.',
'vjs23' : 'Ugyldig MAC-adresse. Det er en kringkastingsadresse.',
'vjs24' : 'Ugyldig MAC-adresse. Det er en null-adresse.',
'vjs25' : 'Ugyldig MAC-adresse. Det er en multicast-adresse.',
'vjs26' : 'Ugyldig start- og slutt-IP-adresse. Slutt-IP skal være større enn start-IP.',
'vjs28' : 'Ugyldig nettverksmaskeformat.',
'vjs29' : 'Ugyldig format. Nettmasken her skal være 255.255.255.0 eller 255.255.255.128 eller 255.255.255.192 eller 255.255.255.224 eller 255.255.255.240 eller 255.255.255.248 eller 255.255.255.252 eller 255.255.255.254',
'vjs30' : 'Ugyldig IP-adresse. Det siste tallet kan ikke være 0 eller 255',
'vjs31' : 'Ugyldig LAN IP-adresse. Første tallet kan ikke være 127',
'vjs32' : 'Ugyldig LAN IP-adresse – kan ikke være 0.0.0.0',
'vjs33' : 'Ugyldig LAN IP-address. Må være under 224.0.0.0',
'vjs42' : 'Nettverksmasketallene du skrev er ugyldige.',
'vjs45' : 'Angi IP-adresse',
'vjs46' : 'er ugyldig. Den må rettes først.',
'wcc2' : 'Velg tilkoblingstypen:',
'wcc13' : 'L2TP',
'wcc14' : 'Noen Internettleverandører bruker L2TP-protokollen til å koble abonnenter til sentralkontoret. Dette krever at du legger inn noen flere innstillinger som du skal ha fått av Internettleverandøren. Når du har lagret endringene, viser Internettstatusindikatoren et grønt lys dersom det var vellykket.',
'wds4_1' : 'Primær DNS-adresse',
'wds7' : 'Du må skrive inn DNS-innstillingene som du har fått av Internettleverandøren hvis du ikke bruker den automatiske DNS-funksjonen',
'wds8' : 'Hvis du vil gjøre DNS-endringer, må du først gå til {Website Filter} og velge Ingen filtre.',
'wmc6' : 'WAN MAC-adressen kan ikke være det samme som LAN MAC-adressen. Velg en annen.',
'wdd9 ' : 'Det er ikke valgt noen DDNS-tjeneste.\n',
'wdd10' : 'Det er ikke valgt noen DDNS-tjeneste og alle data på denne siden vil gå tapt. Vil du fortsette?',
'wm10b' : 'Til bruk med Internettleverandører som krever L2TP-tilkoblingsmetoden.',
'pm' : 'Tjenesten kunne ikke verifisere passordet du skrev. Kontroller at du skrev passordet riktig.',
'wpp17' : 'L2TP-konto',
'wpp18' : 'L2TP-passord',
'wpp19' : 'Skriv inn L2TP-brukerkontoen',
'wpp23' : 'IP-adressetildeling',
'wpp24' : 'Bruk statisk IP-adresse',
'wpp25' : 'Hent dynamisk fra Internettleverandøren',
'wppa7' : 'Min IP-adresse',
'wppa9' : 'Tilkoblings-ID (valgfritt)',
'wppa13' : 'Skriv inn PPTP-kontoen',
'wppa18' : 'Ugyldig tjenestenavn.',
'ws2' : 'Legg inn de statiske IP-innstillingene ved å skrive inn informasjonen nedenfor og klikke Bruk endringene.',
'sm_1' : 'Nettverksmasken du skrev er ugyldig.',
'ws8' : 'Skriv inn/bekreft DNS-adresseinnstillingene på neste skjerm',
'wt2' : 'Når du klikker Bruk endringene blir ruteren startet på nytt. Etter at ruteren er startet på nytt må du gjøre følgende',
'wt3' : '1) Trekk ut strømledningen både fra kabelmodemet og Belkin-ruteren',
'wt4' : '2) Koble strømledningen til kabelmodemet igjen og vent til alle lampene på modemet har sluttet å blinke',
'wt5' : '3) Koble strømledningen til Belkin-ruteren igjen',
'wt6' : 'Du kan kontrollere at du er tilkoblet Internett ved å åpne nettleseren, f.eks. Internett Utforsker, Firefox eller Safari, og se om du kan åpne ulike nettsteder.',
'wlad2' : 'Aktiver/deaktiver',
'wlc2' : 'Hvis du vil gjøre endringer i de trådløse innstillingene for ruteren, gjør du dem her. Klikk Bruk endringene for å lagre innstillingene.',
'wlcgb' : '802.11b+g',
'wlcg' : '802.11g',
'wlcb' : '802.11b',
'wlc20' : '20 MHz',
'wlc22' : '20/40 MHz',
'wlcoff' : 'AV',
'wlcngb1' : '802.11b & 802.11g & 1x1 802.11n',
'wlcn1' : '1x1 802.11n',
'wlcngb2' : '802.11b & 802.11g & 802.11n',
'wlcn2' : '802.11n',
'wlcgn' : '802.11g+n',
'wlca' : '802.11a',
'wlcan' : '802.11a & 802.11n',
'wlc26' : 'Hvis du skjuler nettverksnavnet blir WPS deaktivert.',
'wlc27' : 'Hvis du endrer sikkerhetstypen blir WPS deaktivert.',
'wlc28' : 'WPS er deaktivert på grunn av din <A href=%s><B>trådløse sikkerhetstype</B></A>.',
'wlc29' : 'WPS er deaktivert fordi du har skjult nettverksnavnet (SSID).',
'wlc30' : 'WPS er deaktivert fordi du har skjult nettverksnavnet (SSID) og på grunn av din <A href=%s><B>trådløse sikkerhetstype</B></A>.',
'wlc31' : 'Hvis du slår på WPS blir nettverksnavnet synlig (SSID).',
'wlc32' : 'Hvis du slår på WPS blir sikkerhetstypen endret til WPA/WPA2. Det nåværende nettverkspassordet vil fungere helt fint.',
'wlc33' : 'Hvis du slår på WPS blir nettverksnavnet synlig (SSID) og sikkerhetstypen blir endret til WPA/WPA2. Det nåværende nettverkspassordet vil fungere helt fint.',
'wle3a' : 'WPA-PSK',
'wle3b' : 'WPA2-PSK',
'wle3c' : 'WPA-PSK + WPA2-PSK',
'wps1' : 'Wi-Fi Protected Setup (WPS)',
'wps3' : 'Konfigurer trådløs sikkerhet',
'wps17' : 'For klientenheter uten WPS, må du kjøre Belkin Security Assistant fra CD eller manuelt konfigurere enheten med følgende innstillinger:',
'wps23' : 'WPA+WPA2-Personal (PSK)',
'wps25' : 'TKIP+AES',
'wps27' : 'Nettverksnøkkel (WEP):',
'wps28_1' : 'NULL',
'wle11' : 'Nøkkel 1',
'wle12' : 'Nøkkel 2',
'wle13' : 'Nøkkel 3',
'wle14' : 'Nøkkel 4',
'wpskerr2' : 'Nøkkelen må være mellom 8 og 63 tegn og kan inneholde mellomrom og symboler, eller 64 Hex-tegn (bare 0-9 og A-F).',
'wpskerr4' : 'Du må legge inn gjestenøkkelen',
'wpskerr7' : 'Gjestenøkkelen skal være 8 tegn',
'wpskerr8' : 'Gjestenøkkelen kan ikke være det samme som nettverksnøkkelen',
'wlguest1' : 'SSID-en kan ikke være det samme som Gjeste-SSID-en',
'wlguest2' : 'Gjeste-SSID-en kan ikke være det samme som SSID-en',
'rs_crc' : 'Gjenopprettingsfeil < CRC >',
'rs_long' : 'Gjenopprettingsfeil <too long>',
'rs_disposition' : 'Gjenopprettingsfeil <No Content-Disposition>',
'rs_getpid' : 'Gjenopprettingsfeil <Can\'t get pid!>',
'rs_unmatchpid' : 'Gjenopprettingsfeil <Unmatched pid>',
'msg_ddns3 ' : 'Domenenavnfeltene kan ikke være tomme\n',
'msg_lan_dhcp1 ' : 'Ber om informasjon fra Gateway-en',
'msg_lan_dhcp2 ' : 'Oppdaterer konfigurasjonsdatabasen.',
'msg_wan_stat1 ' : 'IP-adresse ',
'msg_wan_stat2 ' : ' er ikke i ',
'msg_wan_stat3 ' : ' nettverket.',
'msg_wls_chan2 ' : 'Gjeste-SSID kan ikke være TOM!\n',
'fw_not_interrupt ' : 'IKKE FORSTYRR ELLER KOBLE FRA RUTEREN, for dette kan gjøre ruteren ubrukelig.',
'msg_invalid_char ' : 'Fant ugyldig(e) tegn. Gyldige tegn er: 0-9, a-z, A-Z, `~!@#$%^&*()_-+=|\\{}[]:";\',.<>/?',
'msg_invalid_domain_char ' : 'Ugyldig lokalt domenenavn'+': ~!@#$%^&*()=+{}[]|":;\\\'?/<>,`',
'msg_invalid_char_1 ' : 'Fant ugyldig(e) tegn. Gyldige tegn er bokstaver og tall. Følgende symboler er ugyldige: `~!@#$%^&*()_+[]{}\\|;:\'"<>/?.,',
'msg_hostIP_invalid ' : 'Verts-IP-adressen er ugyldig. Det skal ikke være ruterens LAN IP.\n',
'msg_dmzIP ' : 'DMZ IP-adresse.',
'msg_blank ' : ' kan ikke være tom.\n',
'msg_space ' : 'Tomrom eller mellomrom er ikke lov i %s\n',
'msg_blank_in ' : 'Tomrom er ikke lov i %s\n',
'msg_allspaces ' : '%s kan ikke bestå bare av mellomrom\n',
'msg_invalid ' : 'Det er ett eller flere ugyldige tegn i %s\nGyldige tegn er: \n%s\n\n',
'msg_check_invalid ' : '%s inneholder et ugyldig tall\n',
'msg_valid_range ' : '%s er ugyldig. Gyldig verdiområde er %s til %s\n',
'msg_invalid_mac ' : 'Ugyldig MAC-adresse.\n',
'msg_multi_mac' : 'MAC-adressen kan ikke være en multicast-adresse.\n',
'msg_confirmDefault ' : 'Advarsel!\nHvis du laster inn fabrikkinnstillingene blir alle de nåværende innstillingene slettet.\nEr du sikker på at du vil gjøre dette?',
'Allowed_Services' : 'Tillatte tjenester',
'Allowing_Url' : 'Nettstedstillatelse etter URL-adresse ',
'Allowing_Keyword' : 'Nettstedstillatelse etter nøkkelord',
'wipv63' : 'Enheter som er tilkoblet ruteren kan kommunisere med hverandre ved hjelp av native IPv6-pakker. IPv6-pakker på lokalnettverket blir automatisk sendt til alle LAN-grensesnitt (Ethernet-porter og både 2,4 GHz og 5 GHz trådløse nettverk).',
'wipv64' : 'Når IPv6 Pass-Through er aktivert, blir også IPv6-pakkene kopierte til WAN-grensesnittet.(Hvis dette er aktivert, opprettes en direkte, usikret forbindelse med Internettet.)',
'wipv65' : 'Ta kontakt med Internettleverandøren for å finne ut om de støtter IPv6.',
'wipv67' : 'Internett IPv6',
'wipv68' : 'Nettverket ditt er IPv6-kompatibelt.',
'wipv69' : 'Pass-Through',
'mf1' : 'På disse sidene kan du justere ruterens oppførsel når den mottar visse typer medietrafikk.',
'mf2' : 'Optimer Internettforbindelsen automatisk for ulike typer trafikk.',
'mf3' : 'Se hvordan ruteren blir brukt.',
'mf8' : 'Registrert den %s',
'mf10' : 'Last ned',
'mf11' : 'Last opp',
'mf12' : 'Hastighet',
'mf15' : 'Bruk innstillingene',
'mf18' : 'Skriv et tall mellom {0.1-%s}.',
'mf20' : 'Bare mellom {0.1-%s}.',
'mf26' : 'Manuelt registrert den %s',
'mf32' : 'eller',
'mf44' : 'De automatiske hastighet-testresultatene er kanskje ikke 100 % nøyaktige avhengig av Internettrafikk eller andre forhold. Du kan sammenligne resultatene ved å gå til et nettsted for hastighetstesting eller ta kontakt med Internettleverandøren og få bekreftet Internetthastigheten. Hvis hastighetsresultatene er ulike kan du skrive inn verdiene manuelt.',
'media_dlna18' : 'Uten tittel',
'media_dlna21' : 'Du har flere mediefiler enn ruteren kan indeksere, så vi betjener de første 12000.',
'errSubnetMaskInvalid_2' : 'Nettverksmasken ser ikke ut som en nettverksmaske. Kontroller verdien.',
'htWAN_L2TP' : 'L2TP-innstillinger',
'htWAN_L2TPContent' : 'Noen Internettleverandører bruker L2TP-protokollen til å koble abonnenter til sentralkontoret. Dette krever at du legger inn noen flere innstillinger som du skal ha fått av Internettleverandøren. Når du har lagret endringene, viser Internettstatusindikatoren et grønt lys dersom det var vellykket.',
'p400t001_error' : 'Få alt tilkoblet hurtigere.',
'p400t018_error' : 'Hva er fordelen ved å endre navnet?',
'p400t019_error' : 'Dette er navnet du ser når du søker etter nettverket fra andre enheter. Unike nettverksnavn er lettere både å finne og huske. Hvis de ulike trådløse enhetene dine var tilkoblet med en annen ruter tidligere, er fordelen ved å bruke samme nettverksnavnet og passordet, at de kobler seg til automatisk uten at du må angi nytt navn og passord på hver enkelt enhet. ',
'dhToggleBand2G' : 'Vis 2.4 Ghz',
'772' : 'Når du klikker Bruk endringene blir ruteren startet på nytt. Etter at ruteren er startet på nytt må du gjøre følgende',
'773' : '1) Trekk ut strømledningen både fra kabelmodemet og Belkin-ruteren',
'774' : '2) Koble strømledningen til kabelmodemet igjen og vent til alle lampene på modemet har sluttet å blinke',
'dft001' : 'Det ser ut til at du ikke er tilkoblet.',
'dft002' : 'Hvis du trenger support og har en tilkoblet enhet, kan du gå til <strong>help.belkin.com</strong>.',
'gtNoSecCard     ' : 'Husk å skrive ned nettverksnavnet og passordet slik at du kan finne det senere.',
'gtFWUpdateMobileError' : 'På dette tidspunkt kan ikke fastvarefiler lastes opp fra mobile enheter.',
'gtSettingsMobileError' : 'På dette tidspunkt kan ikke innstillingsfiler lastes opp fra mobile enheter.',
'gtMoreFromInternet' : 'Koble til Internett for mer',
'gtCantConnect' : 'Vi får ikke forbindelse med Internettet.',
'p802t004' : 'Gå til enhetens meny for trådløst nettverk',
'p803t004' : 'Gå til enhetens meny for trådløst nettverk',
'PIC-S1t001' : 'Blokker alle enheter',
'gtUnnamedDevice' : 'Enhet uten navn',
'gtIC' : 'Internettkontroll',
'errDefaultGatewayEmpty' : 'Standard gateway-adressen kan ikke være tom.',
'errDefaultGatewayInvalid' : 'Standard gateway-adressen skal ha fire tall (0-255) adskilt med punktum. Kontroller verdien.',
'errDNSServerEmpty' : 'DNS-serveradressen kan ikke være tom.',
'errDNSServerInvalid' : 'DNS-serveradressen skal ha fire tall (0-255) adskilt med punktum. Kontroller verdien.',
'errIpAddressEmpty' : 'IP-adressen kan ikke være tom.',
'errIpAddressInvalid' : 'IP-adressen skal ha fire tall (0-255) adskilt med punktum. Kontroller verdien.',
'errorGenericCommitError' : 'Det oppstod en feil. Korriger innstillingene nedenfor og prøv igjen.',
'errorSSIDEmpty' : 'Skriv inn et navn for det trådløse nettverket.',
'errorSSIDInvalidChars' : 'Nettverksnavnet kan bare inneholde bokstaver, tall, skilletegn og mellomrom.',
'errorSSIDTooLong' : 'Nettverksnavnet må være kortere enn 32 tegn.',
'errorWEPPasswordEmpty' : 'Skriv inn et passord for å sikre det trådløse nettverket.',
'errorWEPPasswordInvalidChars' : 'Nettverkspassordet kan bare inneholde tall og bokstavene fra A t.o.m. F.',
'errorWEPPasswordInvalidLength' : 'Nettverkspassordet må ha en lengde på 10–26 tegn.',
'errorWPAPasswordEmpty' : 'Skriv inn et passord for å sikre det trådløse nettverket.',
'errorWPAPasswordInvalidChars' : 'Nettverkspassordet kan bare inneholde bokstaver, tall, skilletegn og mellomrom.',
'errorWPAPasswordInvalidLength' : 'Nettverkspassordet må ha en lengde på 8-63 tegn.',
'errPasswordEmpty' : 'Skriv inn passordet.',
'errPasswordInvalid' : 'Brukernavnet kan bare inneholde bokstaver, tall, skilletegn og mellomrom.',
'errPasswordTooLong' : 'Passordet må ha mindre enn 64 tegn.',
'errServAddressEmpty' : 'Skriv inn en tjenesteadresse.',
'errSubnetMaskEmpty' : 'Nettverksmasken kan ikke være tom.',
'errSubnetMaskInvalid' : 'Nettverksmasken skal ha fire tall (0-255) adskilt med punktum. Kontroller verdien.',
'errUsernameInvalid' : 'Brukernavnet kan bare inneholde bokstaver, tall, skilletegn og mellomrom.',
'errUsernameTooLong' : 'Brukernavnet må ha mindre enn 64 tegn.',
'errVCIInvalid' : 'Skriv inn et tall mellom 0 og 65535. Internettleverandøren kan gi deg de rette verdiene som skal brukes.',
'errVPIInvalid' : 'Skriv inn et tall mellom 0 og 255. Internettleverandøren kan gi deg de rette verdiene som skal brukes.',
'p802t003' : 'Siden noen innstillinger er endret, må du muligens velge det trådløse nettverket på nytt:',
'p802t011' : 'Siden noen innstillinger er endret, må du muligens velge det trådløse nettverket på nytt:',
'dft003' : 'Trenger du hjelp?',
'dft004' : 'Har du spørsmål eller trenger support? Du får hjelp 24 timer i døgnet ved vårt hjelpesenter på nettet.<br><a href="http://www.belkin.com/support/" id="dfBelkinHelp">Belkin Hjelpesenter &rarr;</a>',
'dhChangeSSID' : 'Endre &raquo;',
'dhPassLabel' : 'Passord:',
'dhPasswordObscured24' : 't********',
'dhShow' : 'Vis:',
'dhSSID24' : '{blahblah}',
'dhToggle24' : '2,4 Ghz',
'dhToggle5' : '5,0 Ghz',
'DownSpeed' : '32.6',
'errUsernameEmpty' : 'Skriv inn brukernavnet.',
'gt10am' : '10.00',
'gt10pm' : '22.00',
'gt11am' : '11.00',
'gt11pm' : '23.00',
'gt1am' : '01.00',
'gt1amNextDay' : 'kl 1.00 neste dag',
'gt1pm' : '13.00',
'gt24ghz' : '2,4 Ghz',
'gt24GKey' : '2,4 GHz-nøkkel',
'gt24GName' : '2,4 GHz SSID',
'gt24PSK' : 'Passord',
'gt24Sec' : 'WPA2',
'gt24SSID' : '12345678',
'gt2am' : '02.00',
'gt2pm' : '14.00',
'gt3am' : '03.00',
'gt3pm' : '15.00',
'gt4am' : '04.00',
'gt4pm' : '16.00',
'gt50ghz' : '5 Ghz',
'gt5am' : '05.00',
'gtGuestKey' : 'Gjestenøkkel',
'gt5GMedia' : '5 Ghz-båndet har samme navn, men med ".media" lagt til på slutten.',
'gtGuestName' : 'Gjeste-SSID',
'gt5pm' : '17.00',
'gt6am' : '06.00',
'gt6pm' : '18.00',
'gt7am' : '07.00',
'gt7pm' : '19.00',
'gt8am' : '08.00',
'gt8pm' : '20.00',
'gt9am' : '09.00',
'gt9pm' : '21.00',
'gtAccessControl' : 'Foreldrekontroll for Internett',
'gtAccessPoint' : 'Bruk som tilgangspunkt',
'gtADSL' : 'ADSL',
'gtAdvSettings' : 'Avanserte innstillinger',
'gtAllElseFails' : 'Hvis alt annet mislykkes, kan du ringe til Belkin Support i&nbsp;',
'gtAndroidConnect01' : 'Android-telefoner og nettbrett',
'gtAndroidConnect02' : 'Enheten din har en meny med tilgjengelige trådløse nettverk i Innstillinger-appen.',
'gtAndroidConnect03' : 'Åpne <strong>Innstillinger</strong>-appen og velg <strong>Wireless and Network</strong> (trådløst og nettverk).',
'gtAndroidConnect04' : 'Herfra kan du velge <strong>Wi-Fi</strong> for å se listen over tilgjengelige nettverk.',
'gtAndroidConnect05' : 'Velg <strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong>. <!-- IF NOT OPEN --> <span tid="gtNotOpen">Hvis spurt, skriver du inn nettverkspassordet <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>.</span> <!-- /IF -->',
'gtAt' : 'ved',
'gtAttenuation' : 'Demping',
'gtAustralia' : 'Australia',
'gtBackToDashboard' : '&larr; Tilbake til dashbordet',
'gtBelkin' : 'Belkin',
'gtBootLoader' : 'Boot-laster',
'gtCantConnect' : 'Vi får ikke tilkobling med Internettleverandøren din.',
'gtCantConnectNoResponse' : 'Vi får ikke forbindelse med Internett – ingen respons fra Internettleverandøren.',
'gtChina' : 'Kina',
'gtClientList' : 'Tilkoblede enheter',
'gtClose' : 'Lukk',
'gtConfig' : 'Konfigurer',
'gtConfigureRouter' : 'Konfigurer ruter',
'gtConnDevices' : 'Tilkoblede enheter',
'gtConnectingToNew' : 'Koble til det nye nettverket',
'gtConnectionDet' : 'Tilkoblingsdetaljer',
'gtConnType' : 'Tilkoblingstype',
'gtContentFiltering' : 'Nettstedsfilter',
'gtCopyright' : 'Copyright &copy; 2012. Belkin. Med enerett.',
'gtCurrTimezone' : 'Europa/Helsinki {REPLACE THIS SPAN WITH DETECTED Belkin TZ ID description}',
'gtDashboard' : '&larr; Dashbord',
'gtDashTitle' : 'Belkin-ruter dashbord',
'gtDataRate' : 'Datahastighet',
'gtDDNS' : 'DDNS',
'gtDHCPList' : 'Tilkoblede enheter',
'gtDHCPServer' : 'DHCP-server',
'gtDMZ' : 'DMZ',
'gtDNS' : 'DNS',
'gtDown' : 'Ned',
'gtDownloadSpeed' : 'Nedlastningshastighet',
'gtEncap' : 'Innkapsling:',
'gtFileInstallError' : 'Filen kunne ikke installeres – kanskje det er feil filtype',
'gtFileLoadError' : 'Filen kunne ikke lastes inn – kanskje det er feil filtype',
'gtFirewall' : 'Brannmur',
'gtFirmware' : 'Fastvare',
'gtFirmwareUpdate' : 'Fastvareoppdatering',
'gtFrance' : 'Frankrike',
'gtFreshest' : 'Vi henter den nyeste versjonen av fastvaren …',
'gtFrom' : 'Fra:',
'gtFWUpdate' : 'Fastvareoppdatering',
'gtFWUpToDate' : 'Fastvaren er nå oppdatert.',
'gtGermany' : 'Tyskland',
'gtGuestAccess' : 'Gjestetilgang',
'gtGuestNetwork' : 'Gjestenettverk',
'gtHomeNetwork' : 'Hjemmenettverk',
'gtIfYouKnowConnection1' : 'Hvis du vet tilkoblingstypen, kan du <a href="700-SelectConnection.htm" id="ISP1a010">konfigurere manuelt &raquo;</a>',
'gtIfYouKnowConnection2' : 'Hvis du vet tilkoblingstypen, kan du <a href="700-SelectConnection.htm" id="ISP2a010">konfigurere manuelt &raquo;</a>',
'gtIfYouKnowConnection3' : 'Hvis du vet tilkoblingstypen, kan du <a href="700-SelectConnection.htm" id="ISP3a010">konfigurere manuelt &raquo;</a>',
'gtIfYouKnowConnection4' : 'Hvis du vet tilkoblingstypen, kan du <a href="700-SelectConnection.htm" id="ISP4a010">konfigurere manuelt &raquo;</a>',
'gtIfYouKnowConnection4a' : 'Hvis du vet tilkoblingstypen, kan du <a href="700-SelectConnection.htm" id="ISP4aa010">konfigurere manuelt &raquo;</a>',
'gtIfYouKnowConnection5' : 'Hvis du vet tilkoblingstypen, kan du <a href="700-SelectConnection.htm" id="ISP5a010">konfigurere manuelt &raquo;</a>',
'gtIfYouKnowConnection6' : 'Hvis du vet tilkoblingstypen, kan du <a href="700-SelectConnection.htm" id="ISP6a010">konfigurere manuelt &raquo;</a>',
'gtIfYouKnowConnection7' : 'Hvis du vet tilkoblingstypen, kan du <a href="700-SelectConnection.htm" id="ISP7a010">konfigurere manuelt &raquo;</a>',
'gtIntellistream' : 'Intellistream',
'gtInterleavePath' : 'Innfellingsbane',
'gtInternetSettings' : 'Internettinnstillinger',
'gtIOSConnect01' : 'iPhone, iPad, og iPod touch',
'gtIOSConnect02' : 'Enheten din har en meny med tilgjengelige trådløse nettverk i Innstillinger-appen.',
'gtIOSConnect03' : 'Åpne <strong>Innstillinger</strong>-appen og velg <strong>Wi-Fi</strong>.',
'gtIOSConnect04' : 'Velg <strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong> fra nettverkslisten. <!-- IF NOT OPEN --> <span tid="gtNotOpen">Hvis spurt, skriver du inn nettverkspassordet <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>.</span> <!-- /IF -->',
'gtIPv6' : 'IPv6',
'gtIPV6Connection' : 'IPv6-tilkobling',
'gtISP' : 'ISP-tilkoblingstype',
'gtJapan' : 'Japan',
'gtLANIP' : 'LAN IP-adresse',
'gtLANMAC' : 'LAN/WLAN MAC',
'gtLANSettings' : 'LAN-innstillinger',
'gtLANSubnet' : 'LAN-nettverksmaske',
'gtLLC' : 'LLC',
'gtLoadPrevSettings' : 'Last inn de forrige innstillingene',
'gtLocalNetwork' : 'Lokalt nettverk',
'gtLocalSettings' : 'Nettverksinnstillinger',
'gtLocked' : 'låst',
'gtMACAddress' : 'MAC-adresse',
'gtMACAddressFiltering' : 'MAC-adressefiltrering',
'gtMacConnect01' : 'Mac OS X',
'gtMacConnect02' : 'Datamaskinen har en meny med tilgjengelige trådløse nettverk på høyre side av menylinjen.',
'gtMacConnect03' : 'Klikk på symbolet med trådløse bølger.',
'gtMacConnect04' : 'Velg <strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong> fra nettverkslisten. <!-- IF NOT OPEN --> <span tid="gtNotOpen">Hvis spurt, skriver du inn nettverkspassordet <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>.</span> <!-- /IF -->',
'gtMaybeLater' : 'Kanskje senere',
'gtMbitPerSec' : 'Mbps',
'gtMeaning' : 'Hva betyr dette?',
'gtMedia' : 'Media',
'gtMediaServer' : 'Medieserver',
'gtmidnight' : 'kl 24.00',
'gtModel' : 'Modell',
'gtName' : 'Navn',
'gtNeedMoreHelp' : 'Trenger du mer hjelp?',
'gtNetName' : 'Nettverksnavn',
'gtNewFWAvailableModem' : 'Vi har ny fastvare til modemet.',
'gtNewFWAvailableRouter' : 'Vi har ny fastvare til ruteren.',
'gtNewFWAvailableRouterAndModem' : 'Vi har ny fastvare til ruteren og modemet.',
'gtNext' : 'Neste',
'gtNo' : 'Nei',
'gtNoiseMargin' : 'Støymargin',
'gtNoMyNet' : 'Jeg ser ikke nettverket mitt',
'gtNoon' : 'kl 12.00',
'gtNoSecCard' : 'Husk å skrive ned nettverksnavnet og passordet slik at du kan finne det senere.',
'gtNotOpen' : 'Hvis spurt, skriver du inn nettverkspassordet <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>.',
'gtNZ' : 'New Zealand',
'gtOffline' : 'Frakoblet',
'gtOnline' : 'Tilkoblet',
'gtOptionalSoftware' : 'Valgfri programvare',
'gtOptionalSW' : 'Valgfri programvare',
'gtOptSW' : 'Valgfri programvare',
'gt-OR-' : '-ELLER-',
'gtOther' : '...',
'gtOutputPower' : 'Utgangseffekt',
'gtParentalControls' : 'Foreldrekontroll',
'gtPass' : 'Passord:',
'gtPIC' : 'Foreldrekontroll for Internett',
'gtPICOtherTimes' : 'Til alle andre tider får ikke denne enheten tilgang til Internett.',
'gtPleaseCallISP' : 'Ta kontakt med Internettleverandøren',
'gtPortForwarding' : 'Portvideresending',
'gtPrint' : 'Skriv ut',
'gtReadAllAboutIt' : 'Hvis du trenger mer hjelp:',
'gtReconnectingHell' : 'Kobler til på nytt ...',
'gtRegister' : 'Registrer',
'gtRegistration' : 'Registrering',
'gtRestartRouter' : 'Start ruteren på nytt',
'gtRestoreDef' : 'Gjenopprett standardinnstillingene',
'gtRestoreFactDefault' : 'Gjenopprett fabrikkinnstillingene',
'gtRestoreFactDefaults' : 'Gjenopprett fabrikkinnstillingene',
'gtRestoreSettigns' : 'Gjenopprett innstillingene',
'gtRetest' : 'Test forbindelsen på nytt',
'gtRouterDetails' : 'Ruterdetaljer',
'gtRouterInfo' : 'Ruterinfo',
'gtSave' : 'Lagre',
'gtSaveCurrentSettings' : 'Lagre gjeldende innstillinger',
'gtSaved' : 'Enhet uten navn ble lagret',
'gtSaveRestore' : 'Lagre/gjenopprett innstillinger',
'gtSaveRestoreSettings' : 'Lagre/gjenopprett innstillinger',
'gtSaveSettings' : 'Lagre/sikkerhetskopier innstillinger',
'gtSecLog' : 'Sikkerhetslogg',
'gtSecurity' : 'Sikkerhet',
'gtSelectLang' : 'Velg språk:',
'gtSelfHeal' : 'Selvhelbreding',
'gtSelfHealing' : 'Selvhelbreding',
'gtSerialSupport' : 'På neste side skal vi registrere ruterens serienummer til sikkerhetsmessige formål.',
'gtShowtime' : 'Visningstid',
'gtSpeedTestResults' : 'Sist kontrollert: 1 dag siden kl 15.57',
'gtStaticRouting' : 'Statisk ruting',
'gtStatus' : 'Status',
'gtSystemSettings' : 'Systeminnstillinger',
'gtTo' : 'Til:',
'gtTraffStats' : 'Trafikkstatistikk',
'gtTryAgain' : 'Prøv igjen',
'gtUnlocked' : 'ulåst',
'gtUp' : 'Opp',
'gtUpdate' : 'oppdater',
'gtUpdateNoPowerModem' : 'Vi oppdaterer modemet med den nye fastvaren. Ikke slå av ruteren mens dette pågår.',
'gtUpdateNoPowerRouter' : 'Vi oppdaterer ruteren med den nye fastvaren. Ikke slå av ruteren mens dette pågår.',
'gtUploadSpeed' : 'Opplastningshastighet',
'gtUSA' : 'USA',
'gtUserName' : 'Brukernavn:',
'gtUtils' : 'Verktøy',
'gtVCI' : 'VCI:',
'gtVCMUX' : 'VC/MUX',
'gtVPI' : 'VPI:',
'gtWAN' : 'WAN-innstillinger',
'gtWANDNS' : 'DNS-adresse',
'gtWANGateway' : 'WAN-gateway',
'gtWANIP' : 'WAN IP-adresse',
'gtWANMAC' : 'WAN MAC-adresse',
'gtWANPingBlocking' : 'WAN-pingblokkering',
'gtWANSubnet' : 'WAN-nettverksmaske',
'gtWebsiteFilter' : 'Nettstedsfilter',
'gtWelcome' : 'Velkommen',
'gtWiFi' : 'WiFi',
'gtWifiSettings' : 'Dine WiFi innstillinger er nå endret.',
'gtWinConnect01' : 'Windows 7 eller 8',
'gtWinConnect02' : 'Datamaskinen har en meny med tilgjengelige trådløse nettverk på høyre side av oppgavelinjen.',
'gtWinConnect03' : 'Høyreklikk på symbolet som viser signalstyrkelinjer.',
'gtWinConnect04' : 'Velg <strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong>. <!-- IF NOT OPEN --> <span tid="gtNotOpen">Hvis spurt, skriver du inn nettverkspassordet <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>.</span> <!-- /IF -->',
'gtWinConnect05' : 'Windows Vista og Windows XP',
'gtWinConnect06' : 'Datamaskinen har en meny med tilgjengelige trådløse nettverk på høyre side av oppgavelinjen.',
'gtWinConnect07' : 'Høyreklikk på symbolet som viser en datamaskin med trådløse bølger (XP) eller to datamaskiner (Vista).',
'gtWinConnect08' : 'Velg <strong>Vis tilgjengelige trådløse nettverk</strong> (XP) eller <strong>Koble til et nettverk</strong> (Vista) på menyen som kommer frem.',
'gtWinConnect09' : 'Velg <strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong>. <!-- IF NOT OPEN --> <span tid="gtNotOpen">Hvis spurt, skriver du inn nettverkspassordet <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>.</span> <!-- /IF -->',
'gtWireless' : 'Trådløst',
'gtWiring' : 'Kabler',
'gtWPSShort' : 'WPS',
'gtWPS' : 'Wi-Fi Protected Setup (WPS)',
'gtYes' : 'Ja',
'htFWUpdate' : 'Hva er fastvareoppdateringer?',
'htFWUpdateContent' : 'Fra tid til annen kan Belkin utgi nye versjoner av ruterens operativprogram. Slike oppdateringer inneholder forbedringer og korrigeringer for ruteren.<br><br>MERK: Sikkerhetskopier de gjeldende innstillingene før du oppdaterer til en ny versjon av fastvaren.',
'htParent' : 'Hva er nettstedsfilter?',
'htPIC' : 'Din Internettkontroll',
'htPICBlocked' : 'Internett er frakoblet',
'htPICBlockedContent' : 'Gjenopprett tilgangen når du er klar til å gi Internettforbindelse til alle enhetene.',
'htPICContent' : 'Med Internettkontroll kan du nå angi et tidspunkt da Internettilgangen skal blokkeres for hver enhet.',
'htSaveRestore' : 'Hva betyr det å lagre, laste eller gjenopprette innstillingene?',
'htSaveRestoreContent' : 'Ruteren husker innstillingene for slike ting som nettverksnavn, passord, osv. Disse innstillingene kan lagres (som en sikkerhetskopi), og kan deretter lastes inn igjen til ruteren. Ruterinnstillingene kan også gjenopprettes til de opprinnelige fabrikkinnstillingene.',
'htSaveRestoreContentMobile' : '<br>* På iPhone, iPad, og iPod Touch, er det ikke mulig å lagre eller laste inn en innstillingsfil. Bruk en annen enhet, f.eks en bærbar PC, til å lagre eller laste inn en innstillingsfil.',
'ISP1t003' : 'Fortell dem at ruteren fikk en IP-adresse, men DNS fungerer ikke.',
'ISP1t007' : 'DNS oversetter navn som belkin.com til numeriske adresser (IP-adresser) som datamaskinen bruker til å navigere på Internett. Ruteren din har en IP-adresse, noe som betyr at den er koblet til Internett, men DNS fungerer ikke, så du kan ikke surfe. Dette antyder at noe er feil med Internettleverandøren.  <span class="nub"></span>',
'ISP2t003' : 'Fortell dem at ruteren fikk en IP-adresse, og DNS fungerer, men at den ikke kan pinge noen.',
'ISP2t007' : 'Vi "pinger" andre maskiner på Internettet for å teste om vi kan kommunisere med dem eller ikke. DNS oversetter navn som belkin.com til numeriske adresser (IP-adresser) som datamaskinen bruker til å navigere på Internett. Ruteren har en IP-adresse, noe som betyr at den er koblet til Internett, og DNS-en fra Internettleverandøren fungerer, men den kan ikke pinge. Dette antyder at noe er feil med Internettleverandøren.<span class="nub"></span>',
'ISP3t004' : 'Fortell dem at brukernavnet og passordet ble godtatt, men at du fremdeles ikke har noen Internettforbindelse.',
'ISP3t007' : 'Vi "pinger" andre maskiner på Internettet for å teste om vi kan kommunisere med dem eller ikke. Internettleverandøren aksepterte brukernavnet og passordet, men vi kan ikke pinge, så du kan ikke surfe. Dette antyder at noe er feil med Internettleverandøren.  <span class="nub"></span>',
'ISP4t003' : 'Fortell dem at brukernavnet og passordet ikke ble akseptert etter et par forsøk.',
'ISP4t007' : 'Internettforbindelsen krever brukernavn og passord, men Internettleverandøren aksepterte ikke det du skrev. De er i stand til å kontrollere om du har den rette informasjonen.  <span class="nub"></span>',
'ISP5t003' : 'Fortell dem at du valgte en Dynamisk tilkobling, men fikk ikke noen IP-adresse.',
'ISP5t007' : 'En IP-adresse identifiserer ruteren eller annen enhet på Internettet. Internettleverandøren din gir ikke ruteren noen adresse, og uten IP-adresse kan du ikke kobles til. Dette betyr at noe er galt med Internettleverandøren, eller at du ikke har en dynamisk tilkoblingstype.  <span class="nub"></span>',
'ISP6t003' : 'Fortell dem at du valgte en statisk tilkobling, men ikke var i stand til å komme på nettet.',
'ISP6t007' : 'Vi bruker en statisk tilkobling når Internettleverandøren har gitt deg en eller flere spesifikke IP-adresser som du skal bruke.  <span class="nub"></span>',
'ISP7t003' : 'Fortell dem at VPI/VCI-innstillingene ikke fungerer, og at du trenger de riktige tallene.',
'ISP7t007' : 'VPI og VCI gir ruteren banen som skal brukes til kommunikasjon med Internettleverandøren. Vi registrerte ikke de riktige innstillingene. <span class="nub"></span>',
'Network24Passkey' : '{REPLACE WITH 2.4 PASSWORD}',
'Network24SSID' : '{REPLACE WITH 2.4 SSID}',
'p100t002' : 'La oss koble til Internett.',
'p100t003' : 'Du er koblet til den nye ruteren din, så neste trinn er å åpne forbindelsen til Internettleverandøren din.',
'p100t004' : 'La oss koble til Internett.',
'p100t005' : 'Du er koblet til den nye ruteren din, så neste trinn er å åpne forbindelsen til Internettleverandøren din.',
'p100t007' : 'Registrer forbindelsen jeg har',
'p100t008' : 'Hvis du er sikker på tilkoblingstypen, kan du <a href="700-SelectConnection.htm" id="p100a009" tid="p100t009">konfigurer den manuelt &raquo;</a>, eller gå direkte til <a href="000-Dashboard.htm" id="p100a010" tid="p100t010">dashbordet &raquo;</a>.',
'p100t009' : 'konfigurere manuelt &raquo;',
'p100t010' : 'dashbord &raquo;',
'p100t013' : 'For øyeblikket viser vi sidene i &nbsp;',
'p100t024' : 'En nesten automatisk installasjon',
'p100t025' : 'Først skal vi gjøre en automatisk undersøkelse av kabler og finne ut hva slags forbindelse du har med Internettleverandøren (ISP) din. Det skal ikke bli mye å gjøre for ditt vedkommende. Så skal vi forsikre om at ruterens fastvare er oppdatert. <span class="nub"></span>',
'p1010MRt001' : 'Vi har problemer med å kommunisere med modemet.',
'p1010MRt002' : 'Vi tror det må være et kabelproblem.',
'p1010MRt003' : 'Dette kan du gjøre for å ordne dette:',
'p1010MRt004' : 'Påse at modemruteren er koblet til telefonkontakten som har Internett. Det skal være en nettverkskabel som kobler ADSL-porten på modemruteren (den grå porten oppå) til telefonkontakten.',
'p1010MRt005' : 'Kontroller at modemet er slått på. Strømadapteren skal være koblet til i begge ender, og en eller flere lamper på modemet skal være på.',
'p1010MRt006' : 'En nettverkskabel skal være tilkoblet mellom modemet og den gule porten på ruteren. Denne kabelen sender signalet fra modemet til ruteren, og uten denne kan du ikke komme på nett.',
'p1010MRt007' : 'Hvis begge disse er slik de skal være, kan du prøve å gjøre omstart på modemet ved å ta ut kontakten, vente 15 sekunder og så sette den i igjen. Hvis modemet har et batteri, må du kanskje finne modemets tilbakestillingsknapp og bruke den i stedet.',
'p1010MRt008' : 'Slik skal tilkoblingene se ut:',
'p1010MRt009' : 'Vi fortsetter med å vente på en forbindelse mens du undersøker.',
'p1010MRt010' : 'Det vanligste kabelproblemet er mellom modemet og ruteren. Det er viktig å kontrollere begge endene av kabelen. Den ene enden skal være koblet til den gule porten på den nye ruteren, mens den andre enden skal være koblet til en lignende port på modemet. Ulike modemprodusenter merker portene forskjellig. Den kan f.eks være kalt "data", "LAN", "nettverk" eller "Ethernet".  <span class="nub"></span>',
'p1020t001' : 'Vi har problemer med å kommunisere med Internettleverandøren.',
'p1020t002' : 'Start modemruteren på nytt.',
'p1020t003' : 'Siden vi ikke får noen Internettforbindelse, skal vi prøve med en omstart av modemruteren.',
'p1020t004' : 'Slå av modemruteren. Dette dreier seg vanligvis om å bruke en av/på-bryter på modemruteren eller å ta ut strømforsyningen.',
'p1020t005' : 'Vent i 15 sekunder.',
'p1020t006' : 'Slå modemruteren på igjen.',
'p1020t007' : 'Etter noen sekunder lyser lampene og enheten tar kontakt med <internettleverandøren.',
'p1020t008' : 'Hvis probemet vedvarer, skal du ta kontakt med Internettleverandøren og feilsøke brukerkontoen din.',
'p1020t009' : 'Vi venter til modemruteren er slått av og på igjen, og så fortsetter vi automatisk.',
'p1020t010' : 'Hvorfor må jeg starte modemet på nytt?',
'p1020t011' : 'Enkelte modemer må startes på nytt for å kommunisere med en ny ruter eller en ukjent datamaskin. Og hvis det det er noe kluss hos Internettleverandøren, kan modemet miste forbindelsen helt uventet. Vi ser modemet, men ikke Internett, så en rask omstart vil sannsynligvis gjøre susen.<span class="nub"></span>',
'p1100t001' : 'En fastvareoppdatering er tilgjengelig!',
'p1100t002' : 'Vi anbefaler at du oppdaterer ruteren med den nyeste fastvaren for å sikre at alt fungerer skikkelig.',
'p1100t003' : 'Vis meg hva som er nytt',
'p1201t001' : 'Lås dashbordet med et passord.',
'p1201t002' : 'Skriv et passord for å låse dashbordet:',
'p1201t003' : 'Skriv inn et passord.',
'gtSetPassword' : 'Angi passord',
'p1201t005' : 'Avbryt',
'p1210t001' : 'Dashbordet er låst.',
'p1210t002' : 'Skriv inn passordet:',
'p1210t003' : 'Skriv inn passordet.',
'p1210t004' : 'Passordet er ikke riktig.',
'p1210t005' : 'Slipp meg inn!',
'p1300t001' : 'Litt mer futt.',
'p1300t002' : 'Du kan få mer ytelse ut av Internettforbindelsen ved å installere Intellistream. Dette innebærer kjøring av en hastighetstest.',
'p1300t003' : 'Installer Intellistream',
'p1300t004' : 'Kanskje senere',
'p1302t001' : 'Fastvaren er oppdatert.',
'p1316t001' : 'Installering av den oppdaterte fastvaren var mislykket – prøv ogjen ved å klikke Se etter ny fastvare.',
'p1318t001' : 'Oppdateringsfilen er ikke riktig type eller versjon for denne enheten. Oppdateringen var mislykket. Få tak i riktig fil og prøv igjen.',
'p1333t001' : 'Fastvaren er nå oppdatert.',
'p1400t001' : 'Få fullt utbytte av USB-porten.',
'p1400t002' : 'Det finnes valgfri programvare som du kan installere, og som bidrar til at du får mest mulig ut av USB-porten på ruteren.',
'p1400t003' : 'Vis meg den valgfrie programvaren',
'p1500t001' : 'Du er her.',
'p1500t002' : 'Det ser ut som du befinner deg i tidssonen <span tid="gtCurrTimezone">Europa/Helsinki {REPLACE THIS SPAN WITH DETECTED Belkin TZ ID description}</span>. Er det riktig?',
'p1500t003' : 'Det er riktig.',
'p1500t004' : 'La meg velge',
'p200t001' : 'Oppretter forbindelse …',
'p200t002' : ' Vi undersøker den fysiske forbindelsen til ruteren.',
'p202At001' : 'Ikke helt ferdig ennå …',
'p202At002' : ' Vi skal registrere tilkoblingstypen til Internettleverandøren. Dette kan ta noen minutter.',
'p202Bt001' : 'Ikke helt ferdig ennå …',
'p202Bt002' : ' Undersøker om Internettleverandøren krever et passord. Dette kan ta noen minutter.',
'p202Ct001' : 'Ikke helt ferdig ennå …',
'p202Ct002' : ' Nå tester vi forbindelsen.',
'p202t001' : 'Oppretter forbindelse …',
'p202t002' : ' Vi skal registrere tilkoblingstypen til Internettleverandøren.',
'p208t001' : 'Har du VPI/VCI-tallene for hånden?',
'p208t002' : 'Du må skrive inn VPI- og VCI-tallene for å komme på nett. De identifiserer kommunikasjonsbanen som Internettleverandøren vil du skal bruke.',
'p208t003' : 'Internettleverandøren skal ha gitt deg disse tallene. Hvis du ikke finner dem, kan du spørre Internettleverandøren.',
'p208t006' : '0',
'p208t007' : '0',
'p208t009' : 'Prøv forbindelsen',
'p208t011' : 'VPI og VCI',
'p208t012' : 'Virtual Path Identifier (VPI) og Virtual Circuit Identifier (VCI) sier fra til ruteren hvilken bane som skal brukes til å kommunisere med Internettleverandøren. Vi har et knippe med vanlige innstillinger som vi prøver automatisk før vi ber deg om hjelp.<span class="nub"></span>',
'p209t001' : 'Det er noe som ikke er riktig i disse innstillingene.',
'p209t002' : 'Internettleverandøren aksepterte ikke disse VPI/VCI-tallene. Prøve en gang til?',
'p210CXt001' : 'Du har PPPoE-tilkobling.',
'p210CXt002' : 'Du trenger et brukernavn og passord for å få tilgang til Internett.',
'p210CXt004' : '<strong>Internettleverandøren skal ha gitt deg disse opplysningene. Hvis du ikke finner dem, kan du spørre Internettleverandøren.</strong>',
'p210CXt006' : '0',
'p210CXt007' : '0',
'p210CXt016' : 'Prøv forbindelsen',
'p210CXt017' : 'PPPoE',
'p210CXt018' : 'Punkt-til-punkt-protokoll over Ethernet oppretter en sikker forbindelse mellom ruteren og Internettleverandøren. Den blir vanligvis brukt av telefonselskaper.<span class="nub"></span>',
'p210DXt001' : 'Du har PPPoA-tilkobling.',
'p210DXt002' : 'Du trenger et brukernavn og passord for å få tilgang til Internett.',
'p210DXt004' : '<strong>Internettleverandøren skal ha gitt deg disse opplysningene. Hvis du ikke finner dem, kan du spørre Internettleverandøren.</strong>',
'p210DXt006' : '0',
'p210DXt007' : '0',
'p210DXt016' : 'Prøv forbindelsen',
'p210DXt017' : 'PPPoA',
'p210DXt018' : 'Punkt-til-punkt-protokoll over ATM oppretter en sikker forbindelse mellom ruteren og Internettleverandøren. Den brukes vanligvis av telefonselskaper.<span class="nub"></span>',
'p210t001' : 'Du har en PPPoE DSL-forbindelse.',
'p210t002' : 'Du trenger et brukernavn og passord for å få tilgang til Internett.',
'p210t003' : '<strong>Internettleverandøren (ISP) skal ha gitt deg disse opplysningene. Hvis du ikke finner dem, kan du spørre Internettleverandøren.</strong>',
'p210t005' : 'ISP-brukernavn:',
'p210t009' : 'Prøv forbindelsen',
'p210t010' : 'PPPoE',
'p210t011' : 'Punkt-til-punkt-protokoll over Ethernet oppretter en sikker forbindelse mellom ruteren og Internettleverandøren. Den blir vanligvis brukt av telefonselskaper.<span class="nub"></span>',
'p211t001' : 'Oppretter forbindelse …',
'p211t002' : ' Vi prøver å logge inn til Internettleverandøren. Dette kan ta opptil to minutter eller mer.',
'p212DXt001' : 'Det er en feil i PPPoA-innstillingene.',
'p212DXt002' : 'Brukernavnet, passordet eller begge er ukorrekt. Prøv igjen. Ta kontakt med Internettleverandøren hvis du ikke finner den riktige informasjonen.',
'p212t001' : 'Det er en feil i PPPoE-innstillingene.',
'p212t002' : 'Brukernavnet, passordet eller begge er ukorrekt. Prøv igjen. Ta kontakt med Internettleverandøren hvis du ikke finner den riktige informasjonen.',
'p220t002' : 'Du må skrive inn et brukernavn, passord og tjenesteadresse for å fullføre tilkoblingen og få tilgang til Internett.',
'p220t003' : '<strong>Internettleverandøren skal ha gitt deg disse opplysningene. Hvis du ikke finner dem, kan du spørre Internettleverandøren.</strong>',
'p220t006' : 'ISP-brukernavn:',
'p220t007' : 'Tjenesteadresse:',
'p220t010' : 'Prøv forbindelsen',
'p220t013' : 'Du har L2TP- eller PPTP-tilkobling.',
'p220t014' : 'Eller velg tilkoblingen manuelt &raquo;',
'p220t015' : 'L2TP og PPTP',
'p220t016' : 'Både L2TP (Layer 2 Tunneling Protocol) og PPTP (Point-to-Point Tunneling Protocol) oppretter en privat og kryptert forbindelse mellom deg og Internettleverandøren.<span class="nub"></span>',
'p221t001' : 'Oppretter forbindelse …',
'p221t002' : ' Vi prøver å logge inn til Internettleverandøren. Dette kan ta opptil 2 minutter.',
'p222t002' : 'Brukernavnet, passordet eller begge er ukorrekt. Prøv igjen. Ta kontakt med Internettleverandøren hvis du ikke finner den riktige informasjonen.',
'p222t004' : 'Det er en feil i innstillingene dine.',
'p2300t001' : 'Den installerte fasvareversjonen:',
'p2300t002' : 'Oppdater fastvaren fra lokalt lagret fil:',
'p2300t006' : 'Er du sikker på at du vil installere {{file}}?',
'p2300t010' : 'Se etter ny fastvare',
'p2400t006' : 'Nåværende innstillinger blir erstattet. Er du sikker på at du vil laste inn {{file}}?',
'p2410t001' : 'Er du sikker på at du vil gjenopprette fabrikkinnstillingene?',
'p2410t002' : 'Hvis du klikker Ja, slettes ruterinnstillingene, deriblant navn og passord, og de blir erstattet med originalinnstillingene fra fabrikken.',
'p300t005' : 'Nå er du på nett.',
'p310t001' : 'En oppdatering er tilgjengelig!',
'p310t001x' : 'Denne oppdateringen (v2.1.0c) omfatter:',
'p310t002' : 'Les og godta lisensavtalen for å installere fastvaren.',
'p310t003' : 'Lisensavtale',
'p310t004' : 'Jeg godtar lisensavtalen',
'p310t005' : 'Installer oppdatering',
'p310t006' : 'Hva er fastvare?',
'p310t007' : 'Fastvare er programvaren som kjører ruteren. Vi oppdaterer fastvaren for å forbedre ruterens ytelse, så det er bra å sørge for at du har den nyeste.  <span class="nub"></span>',
'p315t001' : 'Laster ned ny fastvare.',
'p315t002' : 'Nedlastningsforløp:',
'p315t003' : 'Hva er fastvare?',
'p315t004' : 'Fastvare er programvaren som kjører ruteren. Vi oppdaterer fastvaren for å forbedre ruterens ytelse, så det er bra å sørge for at du har den nyeste.  <span class="nub"></span>',
'p320t001' : 'Installerer ny fastvare.',
'p320t002' : 'Når den nye fastvaren er installert, starter vi ruteren på nytt for å fullføre installasjonen.',
'p320t004' : 'Hva er fastvare?',
'p320t005' : 'Fastvare er programvaren som kjører ruteren. Vi oppdaterer fastvaren for å forbedre ruterens ytelse, så det er bra å sørge for at du har den nyeste.  <span class="nub"></span>',
'p320t006' : 'Dette skal ta cirka tre minutter. Oppdateringsforløp:',
'p320t010' : 'Når den nye fastvaren er installert, starter vi ruteren på nytt for å fullføre installasjonen.',
'p321t001' : 'Starter ruteren på nytt',
'p321t002' : 'Starter modemet på nytt',
'p321t003' : 'Nå som fastvaren er installert, må vi starte ruteren på nytt så oppdateringen kan tas i bruk.',
'p321t004' : 'Starter på nytt:',
'p321t005' : 'Fastvareoppdateringer',
'p321t006' : 'Fastvaren er programvaren som brukes til å implementere nettverks- og sikkerhetsprotokoller. Oppdateringer forbedrer påliteligheten og funksjonaliteten, så det er lurt å sørge for at du har den nyeste. <span class="nub"></span>',
'p321t010' : 'Nå som fastvaren er installert, må vi starte modemet på nytt så oppdateringen kan tas i bruk.',
'p330t001' : 'Undersøker tilkoblingshastigheten ...',
'p330t002' : 'En rask hastighetstest hjelper ruteren med å optimere Internettforbindelsen. Dette tar et minutt eller to.',
'p331t001' : 'Fastvaren er oppdatert.',
'p332t001' : 'Vi prøver fastvareoppdateringen igjen senere.',
'p333t001' : 'Fastvaren ble oppdatert.',
'p334t001' : 'Resultatet av hastighetstesten',
'p334t002' : 'Her er det vi fant ut:',
'p334t003' : 'Nedlastningshastighet',
'p334t004' : 'Mbps',
'p334t005' : 'Opplastningshastighet',
'p334t006' : 'Mbps',
'p340t002' : ' Vi kobler til ruteren igjen så vi kan fortsette.',
'p341t001' : 'Start ruteren på nytt',
'p341t002' : 'Vi har problemer med å koble til ruteren igjen. En rask omstart skulle hjelpe.',
'p341t003' : 'Ta ut strømforsyningen til ruteren, vent noen få sekunder, og sett den i igjen. Når ruteren har et vedvarende blått lys, er alt klart for tilkobling.',
'p341t003w' : 'Ta ut strømforsyningen til ruteren, vent noen få sekunder, og sett den i igjen. Når ruteren har et vedvarende blått lys, er alt klart for tilkobling.',
'p341t004' : ' Vi skal vente til ruteren kommer tilbake mens du gjør dette.',
'p342t001' : ' Vi kobler til ruteren igjen så vi kan fortsette.',
'p342t002' : 'Du må kanskje velge det trådløse nettverket på nytt <span tid="Network24SSID">({REPLACE WITH 2.4 SSID})</span> fra listen med trådløse nettverk for å få alt i orden igjen.',
'p343t002' : ' Vi kobler til ruteren igjen for å fortsette.',
'p343t003' : 'Du må kanskje velge det trådløse nettverket på nytt <span tid="Network24SSID">({REPLACE WITH 2.4 SSID})</span> for å fortsette.',
'p344t001' : 'Start ruteren på nytt.',
'p344t002' : 'Vi har problemer med å koble til ruteren igjen. En rask omstart skulle hjelpe.',
'p344t003' : 'Ta ut strømforsyningen til ruteren, vent 15 sekunder, og sett den i igjen. Når ruteren viser et vedvarende blått lys, kobler vi til igjen.',
'p344t003w' : 'Ta ut strømforsyningen til ruteren, vent 15 sekunder, og sett den i igjen. Når ruteren viser et vedvarende blått lys, kobler vi til igjen.',
'p344t004' : ' Vi skal vente til ruteren kommer tilbake mens du gjør dette.',
'p400f010' : 'WPA2',
'p400f011' : 'WPA/WPA2',
'p400f012' : 'WEP',
'p400f013' : 'Åpne',
'p400t001' : 'Få alt tilkoblet hurtigere.',
'p400t002' : 'Hvis du gir den nye ruteren samme navn og passord som den gamle, kan alle enhetene kobles til med det samme.',
'p400t004' : 'Nettverksnavn:',
'p400t008' : 'Sikkerhetstype: <em class="hide-on-phones">(WPA2 er den sikreste.)</em>',
'p400t014' : '5 Ghz-båndet vil ha samme navn, men med ".media" lagt til på slutten.',
'p400t015' : 'Du kan endre dette senere om du vil.',
'p400t017' : 'Lagre og fortsett',
'p400t018' : 'Hvorfor skal jeg gi nytt navn på nettverket?',
'p400t019' : 'Alle trådløse enheter som har vært tilkoblet med den gamle ruteren tidligere, vil kobles til den nye ruteren automatisk hvis du bruker samme nettverksnavn og passord. Dessuten, når du søker etter nettverket på enhetene er det enklere å finne et unikt navn.<span class="nub"></span>',
'p450a009' : 'Flott! Hva er neste trinn?',
'p450t001' : 'Endringene er lagret.',
'p450t002' : 'Her er det nye nettverksnavnet og passordet',
'p450t003' : 'Hvis du bruker det gamle nettverksnavnet og passordet, skal de eksisterende trådløse enhetene dine kobles til på nytt nå.',
'p450t004' : 'Navn:',
'p450t008' : 'Ruteren ble levert med en etikett på undersiden, der du kan skrive det nye nettverksnavnet. Dermed kan du alltid finne det der når du trenger det.',
'p450t011' : 'Hvis du bruker det tidligere nettverksnavnet og passordet, vil de fleste trådløse enhetene dine kobles til på nytt automatisk neste gang du slår dem på. På andre må du velge nettverket på nytt, og så kobler de seg til automatisk etter det. Du finner instruksjoner for Windows, OS X, iOS, og Android i hurtiginstallasjonsveiledningen.  <span class="nub"></span>',
'p451a009' : 'Flott! Hva er neste trinn?',
'p451t001' : 'Ingen endringer.',
'p451t002' : 'Nettverksnavnet og passordet ble ikke endret.',
'p451t003' : 'Du må gi hver av de trådløse enhetene nettverksnavnet og passordet:',
'p451t004' : 'Navn:',
'p451t008' : 'Ruteren ble levert med en etikett på undersiden, der du kan skrive nettverksnavnet. Dermed kan du alltid finne det der når du trenger det.',
'p451t011' : 'Alle de trådløse enhetene må få vite om det nye nettverket. Du finner instruksjoner for Windows, OS X, iOS, og Android i hurtiginstallasjonsveiledningen.  <span class="nub"></span>',
'p500t001' : 'Registrer ruteren.',
'p500t002' : 'Registreringen er hurtig og kan spare masse tid dersom du noen gang skulle behøve kundeservice.',
'p500t004' : 'Hva er vitsen med å registrere?',
'p500t005' : 'Hvis vi vet litt om deg kan vi hjelpe deg mye raskere dersom det skulle bli behov for det.<span class="nub"></span>',
'p500tCancel' : 'Registrer senere &raquo;',
'p500tSubmit' : 'Fyll ut registrering',
'p600t001' : 'Gå til ruterens valgfrie programvareside for å hente lignende programvare til andre datamaskiner og mobile enheter.',
'p600t002' : 'Ja takk, sett meg over til dashbordet',
'p600t003' : 'Valgfri programvare',
'p600t004' : 'Disse programvareverktøyene hjelper deg med å dra fordel av de avanserte funksjonene som ruteren tilbyr. Du finner nedlastning for Apple iOS, Android, Windows, og OS X.  <span class="nub"></span>',
'p601t001' : '<strong>Takk for at du registrerte enheten!</strong>',
'p700MRt001' : 'Vi var ikke i stand til å installere forbindelsen automatisk. Fortell oss litt mer så vi kan hjelpe deg med forbindelsen.',
'p700MRt002' : 'Hvilken type tilkobling installerer du?',
'p700MRt003' : 'Min tilkobling er en:',
'p700MRt005' : 'Dynamisk tilkobling  (1483-bro)',
'p700MRt007' : 'PPPoE-tilkobling',
'p700MRt009' : 'PPPoA-tilkobling',
'p700MRt011' : 'Statisk tilkobling (IPoA)',
'p700MRt014' : 'Jeg er ikke sikker på hva slags tilkoblingstype jeg har:',
'p700MRt016' : 'Prøv automatisk igjen',
'p700MRt017' : 'Tilkoblingstyper',
'p700MRt018' : '<span class="black">Dynamisk —</span> Denne tilkoblingstypen er blitt mer vanlig blant enkelte DSL-leverandører.',
'p700MRt019' : '<span class="black">PPPoE og PPToA —</span> Krever brukernavn og passord gitt av Internettleverandøren.',
'p700MRt021' : '<span class="black">Statisk —</span> Denne krever tilpassede parametre som er unike for hver bruker. <span class="nub"></span>',
'p700t001' : 'Vi var ikke i stand til å installere forbindelsen automatisk. Fortell oss litt mer så vi kan hjelpe deg med forbindelsen.',
'p700t002' : 'Hvilken type tilkobling installerer du?',
'p700t003' : 'Min tilkobling er en:',
'p700t005' : 'Dynamisk tilkobling',
'p700t007' : 'PPPoE-tilkobling',
'p700t008' : 'L2TP- eller PPTP-tilkobling',
'p700t013' : 'Statisk tilkobling',
'p700t014' : 'Jeg er ikke sikker på hva slags tilkoblingstype jeg har:',
'p700t914' : 'Hvis du fremdeles ikke kan bestemme tilkoblingstypen, kan du kontakte Internettleverandøren (ISP).',
'p700t016' : 'Prøv automatisk igjen',
'p700t017' : 'Tilkoblingstyper',
'p700t018' : '<span class="black">Dynamisk —</span> Vanlig for de fleste Internettleverandører med kabel og fiber og enkelte DSL-leverandører.',
'p700t019' : '<span class="black">PPPoE og PPTP —</span> Krever brukernavn og passord gitt av Internettleverandøren.',
'p700t021' : '<span class="black">Statisk —</span> Krever tilpassede parametre som er unike for hver bruker. <span class="nub"></span>',
'p701MRt001' : 'Du har valgt en dynamisk tilkobling.',
'p701MRt002' : 'Internettleverandøren kan ha gitt deg andre konfigurasjonsinnstillinger.',
'p701MRt004' : 'Dynamiske innstillinger:',
'p701MRt006' : '0',
'p701MRt007' : '0',
'p701MRt016' : 'Prøv forbindelsen',
'p701MRt017' : 'Dynamiske tilkoblinger',
'p701MRt018' : 'En dynamisk tilkobling konfigureres automatisk når kommunikasjon med Internettleverandøren er opprettet.<span class="nub"></span>',
'p701t001' : 'Oppretter dynamisk tilkobling ...',
'p701t002' : ' Vi ber Internettleverandøren din om en forbindelse.',
'p702t001' : 'Starter modemet på nytt ...',
'p702t002' : 'Vi gjør oss klar til å prøve en annen tilkoblingstype ved å starte modemet på nytt.',
'p710MRt001' : 'Du har valgt en statisk tilkobling',
'p710MRt002' : 'Internettleverandøren skal ha gitt deg de statiske konfigurasjonsinnstillingene. Ta kontakt med Internettleverandøren hvis du ikke finner dem.',
'p710MRt004' : 'Statiske innstillinger:',
'p710MRt005' : 'IP-adresse:',
'p710MRt006' : '0',
'p710MRt007' : 'Nettverksmaske:',
'p710MRt008' : '0',
'p710MRt009' : 'Standard gateway:',
'p710MRt010' : '0',
'p710MRt011' : 'DNS-server (primær):',
'p710MRt012' : '0',
'p710MRt013' : 'DNS-server (sekundær):',
'p710MRt014' : '0',
'p710MRt015' : 'Merk: Ikke alle Internettleverandører krever en sekundær DNS-server.',
'p710MRt016' : 'Prøv den statiske forbindelsen',
'p710MRt017' : 'Statiske tilkoblinger',
'p710MRt018' : 'En statisk tilkobling konfigureres manuelt, men gir en konstant adresse til ruteren som er lettere å få tilgang til fra utsiden av nettverket. Statisk tilkobling er ikke vanlig for Internettjeneste i privatboliger, og koster vanligvis mer. <span class="nub"></span>',
'p710t001' : 'Du har valgt en statisk tilkobling',
'p710t002' : 'Internettleverandøren skal ha gitt deg de statiske konfigurasjonsinnstillingene. Hvis du ikke finner dem, kan du spørre Internettleverandøren.',
'p710t004' : 'Statiske innstillinger:',
'p710t005' : 'IP-adresse:',
'p710t006' : '0',
'p710t007' : 'Nettverksmaske:',
'p710t008' : '0',
'p710t009' : 'Standard gateway:',
'p710t010' : '0',
'p710t011' : 'DNS-server (primær):',
'p710t012' : '0',
'p710t013' : 'DNS-server (sekundær):',
'p710t014' : '0',
'p710t015' : 'Merk: Ikke alle Internettleverandører krever en sekundær DNS-server.',
'p710t016' : 'Prøv den statiske forbindelsen',
'p710t017' : 'Statiske tilkoblinger',
'p710t018' : 'En statisk tilkobling konfigureres manuelt, men gir en konstant adresse til ruteren som er lettere å få tilgang til fra utsiden av nettverket. Statiske tilkoblinger er ikke vanlig for Internettjeneste i boligområder, og koster vanligvis mer.  <span class="nub"></span>',
'p711t001' : 'Oppretter statisk tilkobling ...',
'p711t002' : ' Vi ber Internettleverandøren din om en forbindelse.',
'p712t001' : 'Det er en feil i de statiske innstillingene.',
'p712t002' : 'En av adressene eller annen del du har skrevet er ukorrekt, men vi vet ikke hvilken.',
'p800t001' : 'Setter inn endringene dine.',
'p800t002' : 'Vi setter inn endringene og gjør omstart på ruteren for at de skal tre i kraft.',
'p801t002' : ' Vi venter på at ruteren skal tilkobles på nytt. Når det skjer, fortsetter vi.',
'p802t002' : 'Vi trenger en trådløs forbindelse til ruteren for å fortsette.',
'p802t004' : 'Gå til enhetens meny for trådløst nettverk',
'p802t005' : 'Velg nettverket ditt, som heter<strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong>',
'p802t007' : 'Skriv inn passordet, som er <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>',
'p802t009' : 'Du blir koblet til ruteren, og så fortsetter vi.',
'p802t010' : ' Venter på at ruteren skal kobles til på nytt.',
'p803t002' : 'Vi trenger en trådløs forbindelse til ruteren for å fortsette.',
'p803t003' : 'Siden du har endret nettverksnavnet, må du velge det trådløse nettverket på nytt:',
'p803t004' : 'Gå til enhetens meny for trådløst nettverk',
'p803t005' : 'Velg nettverket ditt, som heter<strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong>',
'p803t007' : 'Skriv inn passordet, som er <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>',
'p803t009' : 'Du blir koblet til ruteren, og så fortsetter vi.',
'p803t010' : ' Venter på at du skal koble til på nytt.',
'p804t001' : 'Enheten din koblet ikke til igjen.',
'p804t002' : 'Dette skjer av og til, og er ganske enkelt å ordne.',
'p804t025' : 'Hvis du har en enhet med Internett for hånden, kan du gå til denne URL-adressen og finne nyttig informasjon: <strong>http://belk.in/PMuxOg</strong>',
'p804t026' : 'Hvis dette ikke fungerer, kobler du til Ethernet-kabelen direkte mellom modemet og datamaskinen.',
'p804t027' : ' Når vi ser en forbindelse forsetter vi automatisk.',
'p900t001' : 'Du må starte modemet på nytt.',
'p900t002' : 'Modemet ditt kommuniserer ikke.',
'p900t003' : 'Gjør følgende for å starte modemet på nytt.',
'p900t004' : 'Slå av modemet. Dette dreier seg vanligvis om en av/på-bryter på modemet eller å ta ut strømforsyningen. Enkelte modemer har batteri og for disse må du finne modemets tilbakestillingsknapp.',
'p900t005' : 'Vent i 15 sekunder.',
'p900t006' : 'Slå modemet på igjen.',
'p900t007' : 'Etter flere sekunder vil lampene være på og modemet er klart til å kommunisere med ruteren.',
'p900t008' : 'Vi venter til modemet er slått av og på igjen, og så fortsetter vi automatisk.',
'p900t009' : 'Hvorfor må jeg starte modemet på nytt?',
'p900t010' : 'Enkelte modemer må startes på nytt for å kommunisere med en ny ruter eller en ukjent datamaskin. Vi ser modemet, men det kommuniserer ikke med den nye ruteren, så en rask omstart vil sannsynligvis gjøre susen.<span class="nub"></span>',
'p901t001' : 'Start modemet på nytt nå ...',
'p901t002' : ' Vi venter på at modemet skal slås av og på igjen.',
'p902t001' : 'Modemet er slått av, fint…',
'p902t002' : ' Vi venter på at det skal våkne til igjen.',
'p903t001' : 'Trenger du mer tid?',
'p903t002' : ' Vi venter på at modemet skal startes på nytt. Trenger du mer tid?',
'p903t005' : 'Dette dreier seg vanligvis om å bruke av/på-bryteren på modemet eller å ta ut strømforsyningen, men enkelte modemer har batteri. På et slikt modem må du finne modemets tilbakestillingsknapp.',
'p904t001' : 'Trenger du mer tid?',
'p904t002' : ' Vi venter på at modemet skal slå seg på igjen. Trenger du mer tid?',
'p905t001' : 'Nå ser vi modemet igjen…',
'p905t002' : ' Vi venter på at det skal synkroniseres med Internettleverandøren. Dette tar et minutt eller to.',
'p950IMRt001' : 'Vi kunne ikke finne noen forbindelse med ADSL-linjen.',
'p950IMRt002' : 'Undersøk om nettverkskabelen er koblet fra ADSL-kontakten i veggen til den grå porten på ruteren.',
'p950IMRt004' : 'Vi tror det må være et kabelproblem.',
'p950IMRt005' : 'Det skal være en nettverkskabel som kobler den grå porten på ruteren til ADSL-/telefonkontakten. Denne kabelen sender signalet fra Internettleverandøren til ruteren, og uten denne kan du ikke komme på nett. Se etter om denne kabelen er skikkelig tilkoblet.',
'p950IMRt006' : 'Slik skal tilkoblingen se ut:',
'p950IMRt007' : 'Det skal være en nettverkskabel som kobler ADSL-kontakten i veggen til ruterens strømkontakt (som har et innebygd modem). Denne kabelen sender signalet fra Internettleverandøren til ruteren, og uten denne kan du ikke komme på nett.',
'p950IMRt009' : 'Slik skal tilkoblingen se ut:',
'p950IMRt010' : 'Vi fortsetter med å vente på en forbindelse mens du undersøker.',
'p950IMRt014' : 'Kabler',
'p950IMRt015' : 'Det vanligste kabelproblemet er mellom veggkontakten og ruteren. Det er viktig å kontrollere begge endene av kabelen. Den ene enden skal være koblet til den grå porten på den nye ruteren, mens den andre enden skal være koblet til ADSL-kontakten. I enkelte tilfeller kan det være nødvendig å bruke et filter mellom veggkontakten og kabelen. <span class="nub"></span>',
'p950PMt001' : 'Vi kunne ikke finne noen forbindelse med ADSL-linjen.',
'p950PMt002' : 'Kontroller at det er nettverksforbindelse mellom ruteren og dets strømforsyningskontakt (som har et innebygd modem).',
'p950PMt004' : 'Vi tror det må være et kabelproblem.',
'p950PMt005' : ' Kontroller at nettverkskabelen som går ut fra modemets strømkabel, er koblet til den gule WAN-porten på ruteren. Uten denne nettverksforbindelsen, kommer du ikke på nett.',
'p950PMt009' : 'Slik skal tilkoblingen se ut:',
'p950PMt010' : 'Vi fortsetter med å vente på en forbindelse mens du undersøker.',
'p950PMt011' : 'Kabler',
'p950PMt012' : 'Det vanligste kabelproblemet er mellom veggkontakten og modemet. Det er viktig å kontrollere begge endene av kabelen. Den ene enden skal være koblet til strømforsyningen til den nye ruteren, mens den andre enden skal være koblet til ADSL-kontakten. I enkelte tilfeller kan det være nødvendig å bruke et filter mellom veggkontakten og kabelen. <span class="nub"></span>',
'p950t001' : 'Vi har ikke funnet en forbindelse med modemet.',
'p950t002' : 'Påse at kontakten er satt i og modemet er slått på.',
'p950t003' : 'Kontroller at Ethernet-kabelen er tilkoblet mellom modemet og ruteren.',
'p950t004' : 'Vi tror det må være et kabelproblem.',
'p950t005' : 'Modemet skal være på og en Ethernet-kabel skal være koblet til modemet og den gule porten på ruteren.',
'p950t006' : 'Kontroller følgende:',
'p950t007' : 'Kontroller at modemet er slått på. Kontroller at strømadapteren er koblet til i begge ender, og at en eller flere av modemlampene er på.',
'p950t008' : 'En Ethernet-kabel skal være tilkoblet mellom modemet og den gule porten på ruteren. Denne kabelen sender signalet fra modemet til ruteren, og uten denne kan du ikke komme på nett.',
'p950t009' : 'Tilkoblingene dine skal se slik ut:',
'p950t010' : 'Vi fortsetter med å vente på en forbindelse mens du undersøker.',
'p950t011' : 'Kabler',
'p950t012' : 'Det vanligste installasjonsproblemet er kabelen mellom modemet og ruteren. Den ene enden skal være koblet til den gule porten på den nye ruteren, mens den andre enden skal være koblet til en lignende port på modemet. Kontroller at begge ender sitter godt fast. Ulike modemprodusenter merker portene forskjellig. Den kan f.eks være kalt "data", "LAN", "nettverk" eller "Ethernet".<span class="nub"></span>',
'p951IMRt001' : 'Trenger du mer tid?',
'p951IMRt002' : ' Vi venter på at du skal koble til ADSL-linjen. Trenger du mer tid?',
'p951t001' : 'Trenger du mer tid?',
'p951t002' : ' Vi venter på at modemet skal slå seg på igjen. Trenger du mer tid?',
'pDAt001' : 'Duplikat administrator',
'pDAt002' : 'Denne enheten styres av  <span id="ipaddr"></span> i øyeblikket!',
'PIC_blocked_content' : 'Foreldrekontroll for Internett er aktiv og denne enheten er for øyeblikket blokkert fra Internett. Trykk knappen nedenfor for å endre innstillingene for Foreldrekontroll for Internett.',
'PIC_blocked_title' : 'Denne enheten er blokkert fra Internett i øyeblikket.',
'PIC_S1t0006' : 'Planlegg Internettilgang',
'PIC_S1t006' : 'På nettverket nylig:',
'PIC_S2t003' : 'Skoledager',
'PIC_S2t004' : 'Helger',
'PIC_S2t005' : '(søndag – torsdag)',
'PIC_S2t006' : '(fredag – lørdag)',
'PIC-blocked' : 'blokkert',
'PIC-S1dt001' : 'Vil du frakoble Internettforbindelsen for hele nettverket?',
'PIC-S1t001' : 'Blokker alle enheter',
'PIC-S1t003' : 'Alle enheter er frakoblet fra Internett.',
'PIC-S1t004' : 'Gjenopprett tilgang',
'PIC-S1t005' : 'På nettverket i øyeblikket:',
'PIC-S1t010' : 'Søker etter enheter:',
'PIC-S1t020' : 'Tidsplanen til Foreldrekontroll for Internett er stanset',
'PIC-S1t021' : 'Ruteren vet ikke hva klokken er i øyeblikket, og dette hindrer blokkering/opphevet blokkering i tidsplanen til Foreldrekontroll for Internett fra å finne sted. Dette blir ordnet når ruteren oppretter riktig klokke ved tilkobling med NTP-tidsserveren igjen.',
'PIC-S1t022' : 'Ruteren vil se etter NTP-tidsserveren med få minutters mellomrom, eller du kan endre tidsserveren ved å gå til<a href="#" tid="gtSystemSettings" style="">Systeminnstillinger</a>.',
'PIC-unblocked' : 'ublokkert',
'pNoTime_content' : 'Ruteren vet ikke hva klokken er fordi den mistet kontakten med sin NTP-tidsserver. Ruterens tidsbaserte funksjoner som Foreldrekontroll for Internett, Eco-modus og Selvhelbreding er stanset til den får kontakt med en NTP-tidsserver igjen. <br> <br>Ruteren undersøker klokken automatisk med få minutters mellomrom.',
'pNoTime_title' : 'Hva er klokken?',
'pODLAplt001' : 'Setter inn språkpakken',
'pODLAplt002' : 'Skifter til det valgte språket…',
'pODLDLt001' : 'Laster ned språkpakke',
'pODLDLt002' : 'Henter det valgte språket fra serveren…',
'pODLErrt001' : 'Beklager',
'pODLErrt002' : 'OK',
'pStatst004' : 'Se alt &raquo;',
'Support1t001' : 'Vi har ikke funnet en forbindelse med modemet.',
'Support1t002' : 'Påse at kontakten er satt i og modemet er slått på.',
'Support1t003' : 'Kontroller at Ethernet-kabelen er tilkoblet mellom modemet og ruteren.',
'Support1t004' : 'Vi tror det må være et kabelproblem.',
'Support1t005' : 'Modemet skal være på og en Ethernet-kabel skal være koblet til modemet og den gule porten på ruteren.',
'Support1t006' : 'Kontroller følgende:',
'Support1t007' : 'Kontroller at modemet er slått på. Kontroller at strømadapteren er koblet til i begge ender, og at en eller flere av modemlampene er på.',
'Support1t008' : 'En Ethernet-kabel skal være tilkoblet mellom modemet og den gule porten på ruteren. Denne kabelen sender signalet fra modemet til ruteren, og uten denne kan du ikke komme på nett.',
'Support1t009' : 'Tilkoblingene dine skal se slik ut:',
'Support1t010' : 'Når du har gjort dette, klikker du Prøv igjen.',
'Support7t012' : 'Gå til <strong>http://belk.in/Q4XXca</strong> på en enhet som har Internettforbindelse',
'Support1t016' : 'Kabler',
'Support1t017' : 'Det vanligste installasjonsproblemet er kabelen mellom modemet og ruteren. Den ene enden skal være koblet til den gule porten på den nye ruteren, mens den andre enden skal være koblet til en lignende port på modemet. Kontroller at begge ender sitter godt fast. Ulike modemprodusenter merker portene forskjellig. Den kan f.eks være kalt "data", "LAN", "nettverk" eller "Ethernet".<span class="nub"></span>',
'Support2t001' : 'Modemet startet ikke på nytt.',
'Support2t002' : 'Prøv med å ta ut strømforsyningen til modemet.',
'Support2t003' : 'Modemet har kanskje en tilbakestillingsknapp som du må trykke.',
'Support2t004' : 'Problemer med å starte modemet på nytt?',
'Support2t005' : 'Prøv følgende for å starte modemet på nytt:',
'Support2t006' : 'Ta ut strømforsyningen til modemet.',
'Support2t007' : 'Vent til eventuelle lamper på modemet slås av.',
'Support2t008' : 'Hvis lampene forblir på, kan modemet ha et backupbatteri. Ett eller annet sted er det en tilbakestillingsknapp (ofte på baksiden). Trykk den.',
'Support2t009' : 'Du skal se at modemets lamper går av. Vent noen sekunder før du kobler til strømforsyningen igjen.',
'Support2t010' : 'Når du har gjort dette, klikker du Prøv igjen.',
'Support2t016' : 'Hvorfor må jeg starte modemet på nytt?',
'Support2t017' : 'Enkelte modemer må startes på nytt for å kommunisere med en ny ruter eller en ukjent datamaskin. Vi ser modemet, men det kommuniserer ikke med den nye ruteren, så en rask omstart vil sannsynligvis gjøre susen.<span class="nub"></span>',
'Support3MRt001' : 'Vi kunne ikke finne noen forbindelse med ADSL-linjen.',
'Support3MRt002' : 'Kontroller at det er en nettverkskabel mellom ADSL-kontakten i veggen og ruteren.',
'Support3MRt003' : 'I enkelte områder er det nødvendig å bruke filter.',
'Support3MRt004' : 'Vi er ganske sikre på at det er et kabelproblem.',
'Support3MRt005' : 'Det skal være en kabel som kobler den grå porten på ruteren til ADSL-/telefonkontakten.',
'Support3MRt006' : 'Kontroller at begge ender av kabelen sitter godt fast.',
'Support3MRt007' : 'Kontroller at kabelen er koblet til den grå porten på ruteren, og ikke en av de gule.',
'Support3MRt008' : 'Hvis du har fått et ADSL-linjefilter, må du sørge for at dette sitter mellom kabelen og ADSL-kontakten.',
'Support3MRt010' : 'Kontroller at begge ender av kabelen sitter godt fast.',
'Support3MRt011' : 'Kontroller at kabelen er koblet til nettverksporten på ruterens strømforsyning.',
'Support3MRt012' : 'Hvis du har fått et ADSL-linjefilter, må du sørge for at dette er tilkoblet mellom kabelen og ADSL-kontakten.',
'Support3MRt016' : 'Når du har utført disse trinnene er du klar til å prøve igjen.',
'Support3MRt018' : 'Åpne den følgende URL-adressen på en enhet som er koblet til Internett og finn ut hvordan du kan løse problemet selv: <strong>www.belkin.com/support3mr</strong>',
'Support3MRt021' : 'Kabler',
'Support3MRt022' : 'Det vanligste kabelproblemet har med ADSL-kontakten å gjøre. Det er viktig å undersøke begge endene til kabelen. <span class="nub"></span>',
'Support3MRt050' : 'Kontroller at det er en nettverkskabel mellom ruterens strømforsyning og telefonkontakten.',
'Support3MRt051' : 'Det skal være en kabel som kobler ruterens strømforsyning til ADSL-/telefonkontakten.',
'Support3PMt001' : 'Vi kunne ikke finne noen forbindelse med ADSL-linjen.',
'Support3PMt002' : 'Kontroller at det er nettverksforbindelse mellom ruteren og dets strømforsyningskontakt (som har et innebygd modem).',
'Support3PMt004' : 'Vi er ganske sikre på at det er et kabelproblem.',
'Support3PMt005' : 'Det skal være en nettverkstilkobling mellom den gule porten på ruteren og ruterens strømforsyning.',
'Support3PMt006' : 'Se på ruterens strømforsyningskontakt, og finn kabelen som deles inn i to adskilte ledninger. En av disse ledningen har en Ethernet-kontakt.',
'Support3PMt007' : 'Stikk Ethernet-kontakten i den gule porten på ruteren.',
'Support3PMt010' : 'Når dette er gjort er du klar til å prøve igjen.',
'Support3PMt012' : 'Gå til <strong>www.belkin.com/support3PM</strong> på en enhet som har Internettforbindelse.',
'Support3PMt016' : 'Kabler',
'Support3PMt017' : 'Det er viktig å sørge for at du har en ubrutt serie tilkoblinger fra ADSL-kontakten helt frem til ruteren. Ruteren venter at dette signalet kommer inn gjennom den gule porten. Kabelen som kommer fra ruterens strømforsyning bærer dette signalet og gir strøm til ruteren. Begge halvdelene må være koblet til ruteren for at alt skal fungere slik det skal. <span class="nub"></span>',
'Support3t001' : 'Modemet slo seg ikke på igjen.',
'Support3t002' : 'Kontroller at modemet har strøm.',
'Support3t003' : 'Du må kanskje vente en stund før det er klart.',
'Support3t004' : 'Problemer med å starte modemet på nytt?',
'Support7t005' : 'Prøv følgende for å opprette en ADSL-forbindelse:',
'Support7t006' : 'Kontroller at nettverkskabelen fra modemruteren er koblet til en telefonkontakt med Internett. Klikk deretter Prøv igjen og se om modemruteren finner Internettforbindelsen.',
'Support7t007' : 'Hvis modemruteren deler sin telefonkontakt med en fasttelefonlinje (via en splitter), erstatter du splitteren med en filtersplitter (valgfritt). Klikk deretter Prøv igjen og se om modemruteren finner Internettforbindelsen.',
'Support7t008' : 'Hvis trinn 2 ovenfor ikke fungerer, kan det være at du må ha ADSL-filtre*. Hvis du har noen (disse fås vanligvis fra Internettleverandøren), kobler du dem til mellom alle fasttelefoner og deres telefonkontakter.',
'Support7t009' : 'Hvis ADSL-forbindelsen fremdeles ikke fungerer etter å ha prøvd trinn 1–3 ovenfor, må du be Internettleverandøren om hjelp. Fortell dem at du har problemer med å få modemruteren til å synkroniseres med Internettleverandøren.',
'Support3t010' : 'Når du har gjort dette, klikker du Prøv igjen.',
'Support3t016' : 'Hvorfor må jeg starte modemet på nytt?',
'Support3t017' : 'Enkelte modemer må startes på nytt for å kommunisere med en ny ruter eller en ukjent datamaskin. Vi ser modemet, men det kommuniserer ikke med den nye ruteren, så en rask omstart vil sannsynligvis gjøre susen.<span class="nub"></span>',
'Support4t001' : 'Vi var ikke i stand til å koble til ruteren igjen.',
'Support4t002' : 'Start ruteren på nytt.',
'Support4t003' : 'Når ruteren er klar igjen, kan du prøve å koble til på nytt.',
'Support4t004' : 'Vi kan prøve forskjellige andre løsninger.',
'Support4t005' : 'La oss begynne med å starte ruteren på nytt.',
'Support4t006' : 'Ta ut strømforsyningen til ruteren, vent noen få sekunder, og sett den i igjen.',
'Support4t006w' : 'Ta ut strømforsyningen til ruteren, vent noen få sekunder, og sett den i igjen.',
'Support4t007' : 'Når ruteren har et vedvarende blått lys, er alt klart for tilkobling.',
'Support4t008' : 'Nå kan vi prøve en trådløs forbindelse.',
'Support4t031' : 'Det tar noen sekunder å opprette forbindelsen, og deretter er du klar til å prøve igjen.',
'Support4t032' : 'Eller du kan prøve med en kabelbasert tilkobling.',
'Support4t033' : 'Vurder om du skal koble en datamaskin til ruteren. Bruk en Ethernet-kabel mellom datamaskinen og en av de grå portene på ruteren. Hvis du går til http://router/ derfra kan du prøve å installere på nytt.',
'Support4t034' : 'Når du har gjort dette, klikker du Prøv igjen.',
'Support4t040' : 'Gå til <strong>http://belk.in/PMuxOg</strong> på en enhet som har Internettforbindelse',
'Support4t050' : 'Gjenopprette en forbindelse',
'Support4t051' : 'I slike situasjoner må kanskje ruteren startes på nytt eller den må bare gjenopprette forbindelse. Vi har derfor lagt ved instruksjoner for begge deler. Fordi du kanskje endret nettverkspassordet i et tidligere trinn, må du kanskje velge nettverket på nytt etter at du har gjort omstart på ruteren.<span class="nub"></span>',
'Support5t001' : 'Vi var ikke i stand til å koble til ruteren igjen.',
'Support5t002' : 'Start ruteren på nytt.',
'Support5t003' : 'Når ruteren er klar igjen, kan du prøve å koble til på nytt.',
'Support5t004' : 'Vi kan prøve forskjellige andre løsninger.',
'Support5t005' : 'La oss begynne med å starte ruteren på nytt.',
'Support5t006' : 'Ta ut strømforsyningen til ruteren, vent noen få sekunder, og sett den i igjen.',
'Support5t006w' : 'Ta ut strømforsyningen til ruteren, vent noen få sekunder, og sett den i igjen.',
'Support5t007' : 'Når ruteren har et vedvarende blått lys, er alt klart for tilkobling.',
'Support5t008' : 'Nå kan vi prøve en trådløs forbindelse.',
'Support5t009' : 'Det tar noen sekunder å opprette forbindelsen, og deretter er du klar til å prøve igjen.',
'Support5t010' : 'Eller du kan prøve med en kabelbasert tilkobling.',
'Support5t011' : 'Du kunne også koble en datamaskin til ruteren. Koble til en Ethernet-kabel mellom datamaskinen og en av de grå portene på ruteren. Hvis du går til http://router/ derfra kan du prøve å installere på nytt.',
'Support5t012' : 'Når du har gjort dette, klikker du Prøv igjen.',
'Support5t015' : 'Gå til <strong>http://belk.in/PMuxOg</strong> på en enhet som har Internettforbindelse',
'Support5t020' : 'Gjenopprette en forbindelse',
'Support5t021' : 'I disse situasjonene er det vanskelig å si om ruteren trenger omstart eller vi bare må gjenopprette en forbindelse med den. Vi har derfor lagt ved instruksjoner for begge deler. Fordi vi endret nettverksnavnet i et tidligere trinn, må du huske å koble til det nye nettverket etter at du har gjort omstart på ruteren.<span class="nub"></span>',
'Support6t001' : 'Vi var ikke i stand til å koble til ruteren igjen.',
'Support6t002' : 'Start ruteren på nytt.',
'Support6t003' : 'Når ruteren er klar igjen, kan du prøve å koble til på nytt.',
'Support6t004' : 'Vi kan prøve forskjellige andre løsninger.',
'Support6t005' : 'La oss begynne med å starte ruteren på nytt.',
'Support6t006' : 'Ta ut strømforsyningen til ruteren, vent noen få sekunder, og sett den i igjen.',
'Support6t006w' : 'Ta ut strømforsyningen til ruteren, vent noen få sekunder, og sett den i igjen.',
'Support6t007' : 'Når ruteren har et vedvarende blått lys, er alt klart for tilkobling.',
'Support6t008' : 'Nå kan vi prøve en trådløs forbindelse.',
'Support6t031' : 'Det tar noen sekunder å opprette forbindelsen, og deretter er du klar til å prøve igjen.',
'Support6t032' : 'Eller du kan prøve med en kabelbasert tilkobling.',
'Support6t033' : 'Du kunne også koble en datamaskin til ruteren. Koble til en Ethernet-kabel mellom datamaskinen og en av de grå portene på ruteren. Hvis du går til http://router/ derfra kan du prøve å installere på nytt.',
'Support6t034' : 'Når du har gjort dette, klikker du Prøv igjen.',
'Support6t037' : 'Gå til <strong>http://belk.in/Nm1f5S</strong> på en enhet som har Internettforbindelse',
'Support6t050' : 'Gjenopprette en forbindelse',
'Support6t051' : 'I slike situasjoner må kanskje ruteren startes på nytt eller den må bare gjenopprette forbindelse. Vi har derfor lagt ved instruksjoner for begge deler. Fordi du kanskje endret nettverkspassordet i et tidligere trinn, må du kanskje velge nettverket på nytt etter at du har gjort omstart på ruteren.<span class="nub"></span>',
'Support7t001' : 'Modemruteren er ikke koblet til Internett.',
'Support7t004' : 'Det er et problem med forbindelsen ved telefonkontakten.',
'Support7t050' : 'Problemer med forbindelsen',
'Support7t051' : 'I disse situasjonene er det vanskelig å si hvorfor vi har problemer med forbindelsen til Internettleverandøren. Vi har kontrollert kablene i den grad det er mulig, så neste trinn er å undersøke om du bruker riktig kontakt, om filter er nødvendig, eller hvis dette ikke virker, å ringe til Internettleverandøren. <span class="nub"></span>',
'SupportNumber' : '1-800-123-4567',
'UpSpeed' : '12.5',
'p2410t012' : 'Ved å klikke Gjenopprett sletter du ruterens innstillinger, deriblant navn og passord, og erstatter dem med de opprinnelige fabrikkinnstillingene. Datamaskiner, telefoner, osv, må da konfigureres til å samsvare med disse innstillingene for å bruke nettet gjennom denne ruteren. Er du sikker på at du vil fortsette?',
'gtRestore' : 'Gjenopprett',
'gtCancel' : 'Avbryt',
'alt="Loading"' : 'Innlasting',
'alt="Restart Router"' : 'Start ruteren på nytt',
'alt="Check Wires"' : 'Kontroller kablene',
'alt="Check Phone Connection"' : 'Kontroller telefonforbindelsen',
'alt="Check WAN Connection"' : 'Kontroller WAN-forbindelsen',
'alt="Checkmark"' : 'Avmerking',
'alt="Change"' : 'Endre',
'alt="Print"' : 'Skriv ut',
'alt="Expand"' : 'Utvid',
'alt="Caret"' : 'Innskuddstegn',
'alt="Cut"' : 'Klipp ut',
'alt="Browser"' : 'Nettleser',
'alt="Wifi"' : 'WiFi',
'alt="Password"' : 'Passord',
'alt="Check Phone Jack"' : 'Kontroller telefonkontakten',
'alt="Turn Off Modem"' : 'Slå av modemet',
'alt="Turn On Modem"' : 'Slå på modemet',
'alt="Check Phone Filters"' : 'Kontroller telefonfiltrene',
'gtSerial' : 'Serienr.',
'gt5GName' : '5 GHz SSID',
'gt5GKey' : '5 GHz-nøkkel',
'p1020MRt001' : 'Vi har problemer med å kommunisere med Internettleverandøren.',
'p1020MRt002' : 'Start modemruteren på nytt.',
'p1020MRt003' : 'Siden vi ikke får noen Internettforbindelse, skal vi prøve med en omstart av modemruteren.',
'p1020MRt004' : 'Slå av modemruteren. Dette dreier seg vanligvis om å bruke en av/på-bryter på modemruteren eller å ta ut strømforsyningen.',
'p1020MRt005' : 'Vent i 15 sekunder.',
'p1020MRt006' : 'Slå modemruteren på igjen.',
'p1020MRt007' : 'Etter noen sekunder lyser lampene og enheten tar kontakt med <internettleverandøren.',
'p1020MRt008' : 'Hvis probemet vedvarer, skal du ta kontakt med Internettleverandøren og feilsøke brukerkontoen din.',
'p1020MRt009' : 'Vi venter til modemruteren er slått av og på igjen, og så fortsetter vi automatisk.',
'p1020MRt010' : 'Hvorfor må jeg starte modemet på nytt?',
'p1020MRt011' : 'Enkelte modemer må startes på nytt for å kommunisere med en ny ruter eller en ukjent datamaskin. Og hvis det det er noe kluss hos Internettleverandøren, kan modemet miste forbindelsen helt uventet. Vi ser modemet, men ikke Internett, så en rask omstart vil sannsynligvis gjøre susen.<span class="nub"></span>',
'p1010t001' : 'Vi har problemer med å kommunisere med modemet.',
'p1010t002' : 'Vi tror det må være et kabelproblem.',
'p1010t003' : 'En kabel skal være tilkoblet mellom modemet og den gule porten på ruteren. Modemet skal være på.',
'p1010t004' : 'Det er en del ting du kan gjøre for å påse at alt er klart:',
'p1010t005' : 'Kontroller at modemet er slått på. Strømadapteren skal være koblet til i begge ender, og en eller flere lamper på modemet skal være på.',
'p1010t006' : 'En nettverkskabel skal være tilkoblet mellom modemet og den gule porten på ruteren. Denne kabelen sender signalet fra modemet til ruteren, og uten denne kan du ikke komme på nett.',
'p1010t007' : 'Hvis begge disse er slik de skal være, kan du prøve å gjøre omstart på modemet ved å ta ut kontakten, vente 15 sekunder og så sette den i igjen. Hvis modemet har et batteri, må du kanskje finne modemets tilbakestillingsknapp og bruke den i stedet.',
'p1010t008' : 'Slik skal tilkoblingene se ut:',
'p1010t009' : 'Vi fortsetter med å vente på en forbindelse mens du undersøker.',
'p1010t010' : 'Det vanligste kabelproblemet er mellom modemet og ruteren. Det er viktig å kontrollere begge endene av kabelen. Den ene enden skal være koblet til den gule porten på den nye ruteren, mens den andre enden skal være koblet til en lignende port på modemet. Ulike modemprodusenter merker portene forskjellig. Den kan f.eks være kalt "data", "LAN", "nettverk" eller "Ethernet".',
'Support3t005' : 'Prøv følgende for å starte modemet på nytt:',
'Support3t006' : 'Se på eventuelle lamper på modemets frontpanel. Hvis de lyser er modemet på, og du må kanskje vente en stund til modemet gjør seg klar.',
'Support3t007' : 'Kontroller at modemets strømforsyning sitter godt fast i modemet og en stikkontakt.',
'Support3t008' : 'Hvis modemet har en av/på-knapp, undersøker du om den er på.',
'Support3t009' : 'Forsikre deg om at modemet er fremdeles koblet til den nye ruteren.',
'Support1t012' : 'Gå til <strong>http://belk.in/LIkBoH</strong> på en enhet som har Internettforbindelse',
'QOSt001' : 'For å aktivere Intellistream, gjør følgende:',
'QOSt002' : 'Bruk en Ethernet-kabel til å koble datamaskinen din til Belkin-ruteren (anbefales).',
'QOSt003' : 'Kjør en hastighetstest for Internett-tilkoblingen ved å klikke her for å gå til <a href="http://www.speedtest.net" target="_blank" class="speed_font4">Speedtest.net</a>.',
'QOSt004' : 'Etter at du har kjørt hastighetstesten, angir du verdiene du ser på Speedtest.net i feltene Nedlastningshastighet og Opplastingshastighet over, klikk deretter på "Lagre" under.',
'gtMbps' : 'Mbps',
'QOSt006' : 'Med din høye nedlastningshastighet, prioriterer Intellistream bare opplastningshastigheten.',
'QOSt007' : 'Med din høye opplastningshastighet, prioriterer Intellistream bare nedlastningshastigheten.',
'QOSt008' : 'Med disse høye Internett-hastighetene, vil ikke Intellistream være til hjelp så den aktiveres ikke her.',
'QOSt009' : 'Angi et tall som er større enn 0,01.',
'QOSt010' : 'Angi tall som er større enn 0,01.',
'gtSettingsNotSaved' : 'Du har gjort innstillinger som ikke er lagret. Bli her for å lagre dem, eller forlat eller last inn på nytt for å forkaste endringene.',
'QOSt011' : 'Skriv inn et tall mellom 0,01 og 100,00.',
'QOSt012' : 'Skriv inn tall mellom 0,01 og 100,00.',
'QOSt013' : 'Skriv inn et tall mellom 0,01 og 1000,00.',
'QOSt014' : 'Skriv inn tall mellom 0,01 og 1000,00.',



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
upgrade_err2 = 'Fastvareoppdateringen ble avsluttet pga utilstrekkelige ressurser. Oppdateringen var mislykket.\nPrøv igjen når systemet er inaktivt (ingen Internettrafikk)';
upgrade_err3 = 'Kan ikke laste opp. Ta kontakt med administrator.';
upgrade_err4 = 'Fastvaren er for stor. Oppdateringen var mislykket.';
upgrade_err5 = 'Den nyeste programvaren er allerede installert.';
upgrade_err6 = 'Det ser ut som fastvareoppdateringen er ødelagt. Last ned fastvarefilen på nytt og prøv igjen.';
show10 = 'DHCP-klientliste';
show54 = 'Tilkoblingsinnstillinger';
btn2 = 'Bruk endringene';
cff1 = 'Fullført søk etter fastvare';
PM2 = ':30 PM';
AM2 = ':30 AM';
Dimicons = 'Demp symboler';
EcoTo = 'til';
fvrm = 'Du må deaktivere eksternbehandling. Fordi porten er i kollisjonskurs med den inngående porten til en av de virtuelle serverne.';
lsipm2 = 'Ugyldig LAN IP-adresse. Det siste tallet kan ikke være 0 eller 255';
lsldnm = 'Ugyldig lokalt domenenavn: `~!@#$%^&*()_+[]{}\|;:\'"<>/?.,';
lsipm5 = 'IP-adressen du velger skal være privat (ikke rutbar).\n  192.168.x.x (der x er et tall mellom 0 og 255.) \n10.x.x.x (der x er et tall mellom 0 og 255.)\172.y.x.x (der y er et tall fra 16 til 31, og x er et tall mellom 0 og 255.)';
ufy4 = 'Gjenoppretting av standardinnstillingene kan ta opptil 60 sekunder. Slå ikke av strøm til ruteren mens denne prosessen pågår.';
ufe11 = 'På slutten av oppdateringen svarer kanskje ikke ruteren på kommandoer i opptil 180 sekunder. Dette er normalt. Ikke slå av eller start ruteren på nytt mens dette pågår.';
ur5 = 'Det kan ta opptil 30 sekunder for ruteren å starte på nytt. Slå ikke av ruteren før tilbakestillingen er fullført.';
ur6 = 'Det kan ta opptil 60 sekunder for ruteren å starte på nytt. Slå ikke av ruteren før tilbakestillingen er fullført.';
usys83 = 'Feltene Nytt passord og Bekreft passord er ikke like';
usys83_1 = 'Passord og Bekreft passord er ikke like.';
usys85_1 = 'Administratorpassordet skal være mellom 1 og 63 tegn.';
usys88 = 'Passordet har nådd maksimal lengde!';
usys89 = 'AM';
usys90 = 'PM';
usys92 = 'Det eksterne tilgangsportnummeret skal være fra 1 til 65535.';
usysipm = 'Enten har du ikke skrevet alle IP-tallene eller så er noen av tallene du skrev ugyldige. IP-adressen skal være i formatet x.y.y.z(der x er et tall fra 1 til 223, y er et tall fra 0 til 255 og z er et tall fra 1 til 254).';
self_healing60 = 'Selvhelbreding';
chkwait = 'Ser etter nyere fastvare ...';
Europe = 'Europa';
Australia = 'Australia & NZ';
AsiaPacific = 'Asia-Stillehavsområdet';
NorthAmerica = 'Nord-Amerika';
vjs1 = 'Ugyldig IP-adresse er for lang. Prøv igjen.';
vjs2 = 'Ugyldig IP-adresse mangler \'.\'. Prøv igjen.';
vjs3 = 'Ugyldig IP-adresse mangler tall mellom \'.\'. Prøv igjen.';
vjs4 = 'Ugyldig IP-adresse har et ekstra \'.\'. Prøv igjen.';
vjs5 = 'Ugyldig IP-adresse har for store tall mellom \'.\'. Prøv igjen.';
vm1 = 'Ugyldig tegn ';
vm2 = ' i posisjon ';
vm3 = 'Må være ';
vjs6 = 'Ugyldig årsformat – skal skrives som f.eks. 2002';
vm4 = 'Ugyldig tall ';
vjs8 = 'Ugyldig årstall – skal være mellom 1970...2037';
vjs9 = 'Ugyldig månedsformat – skal skrives som f.eks. 01...12)';
vjs161 = ' ikke i ';
vjs162 = ' nettmaske';
vjs163 = 'Tillatt DHCP-område er ';
vjs17 = 'Du skrev to forskjellige passord. Undersøk igjen!';
vjs18 = 'Skriv inn startportnummer.';
vjs19 = 'Startportnummeret skal være mindre enn sluttportnummeret.';
vjs23 = 'Ugyldig MAC-adresse. Det er en kringkastingsadresse.';
vjs24 = 'Ugyldig MAC-adresse. Det er en null-adresse.';
vjs25 = 'Ugyldig MAC-adresse. Det er en multicast-adresse.';
vjs26 = 'Ugyldig start- og slutt-IP-adresse. Slutt-IP skal være større enn start-IP.';
vjs28 = 'Ugyldig nettverksmaskeformat.';
vjs29 = 'Ugyldig format. Nettmasken her skal være 255.255.255.0 eller 255.255.255.128 eller 255.255.255.192 eller 255.255.255.224 eller 255.255.255.240 eller 255.255.255.248 eller 255.255.255.252 eller 255.255.255.254';
vjs30 = 'Ugyldig IP-adresse. Det siste tallet kan ikke være 0 eller 255';
vjs31 = 'Ugyldig LAN IP-adresse. Første tallet kan ikke være 127';
vjs32 = 'Ugyldig LAN IP-adresse – kan ikke være 0.0.0.0';
vjs33 = 'Ugyldig LAN IP-address. Må være under 224.0.0.0';
vjs42 = 'Nettverksmasketallene du skrev er ugyldige.';
vjs45 = 'Angi IP-adresse';
vjs46 = 'er ugyldig. Den må rettes først.';
wcc2 = 'Velg tilkoblingstypen:';
wcc13 = 'L2TP';
wcc14 = '[Bare i Israel]. Denne tilkoblingstypen er mest vanlig i Israel. Hvis Internettleverandøren din har sagt at du bruker L2TP og har utstyrt deg med den aktuelle L2TP-informasjonen, skal du bruke dette alternativet.';
wds4_1 = 'Primær DNS-adresse';
wds7 = 'Du må skrive inn DNS-innstillingene som du har fått av Internettleverandøren hvis du ikke bruker den automatiske DNS-funksjonen';
wds8 = 'Hvis du vil gjøre DNS-endringer, må du først gå til {Website Filter} og velge Ingen filtre.';
wmc6 = 'WAN MAC-adressen kan ikke være det samme som LAN MAC-adressen. Velg en annen.';
wdd9  = 'Det er ikke valgt noen DDNS-tjeneste.\n';
wdd10 = 'Det er ikke valgt noen DDNS-tjeneste og alle data på denne siden vil gå tapt. Vil du fortsette?';
wm10b = 'Til bruk med Internettleverandører som krever L2TP-tilkoblingsmetoden.';
pm = 'Tjenesten kunne ikke verifisere passordet du skrev. Kontroller at du skrev passordet riktig.';
wpp17 = 'L2TP-konto';
wpp18 = 'L2TP-passord';
wpp19 = 'Skriv inn L2TP-brukerkontoen';
wpp23 = 'IP-adressetildeling';
wpp24 = 'Bruk statisk IP-adresse';
wpp25 = 'Hent dynamisk fra Internettleverandøren';
wppa7 = 'Min IP-adresse';
wppa9 = 'Tilkoblings-ID (valgfritt)';
wppa13 = 'Skriv inn PPTP-kontoen';
wppa18 = 'Ugyldig tjenestenavn.';
ws2 = 'Legg inn de statiske IP-innstillingene ved å skrive inn informasjonen nedenfor og klikke Bruk endringene.';
sm_1 = 'Nettverksmasken du skrev er ugyldig.';
ws8 = 'Skriv inn/bekreft DNS-adresseinnstillingene på neste skjerm';
wt2 = 'Når du klikker Bruk endringene blir ruteren startet på nytt. Etter at ruteren er startet på nytt må du gjøre følgende';
wt3 = '1) Trekk ut strømledningen både fra kabelmodemet og Belkin-ruteren';
wt4 = '2) Koble strømledningen til kabelmodemet igjen og vent til alle lampene på modemet har sluttet å blinke';
wt5 = '3) Koble strømledningen til Belkin-ruteren igjen';
wt6 = 'Du kan kontrollere at du er tilkoblet Internett ved å åpne nettleseren, f.eks. Internett Utforsker, Firefox eller Safari, og se om du kan åpne ulike nettsteder.';
wlad2 = 'Aktiver/deaktiver';
wlc2 = 'Hvis du vil gjøre endringer i de trådløse innstillingene for ruteren, gjør du dem her. Klikk Bruk endringene for å lagre innstillingene.';
wlcgb = '802.11b+g';
wlcg = '802.11g';
wlcb = '802.11b';
wlc20 = '20 MHz';
wlc22 = '20/40 MHz';
wlc22a='20/40/80 MHz';
wlcoff = 'AV';
wlcngb1 = '802.11b & 802.11g & 1x1 802.11n';
wlcn1 = '1x1 802.11n';
wlcngb2 = '802.11b & 802.11g & 802.11n';
wlcn2 = '802.11n';
wlcgn = '802.11g+n';
wlca = '802.11a';
wlcan = '802.11a & 802.11n';
wlcnac='802.11n & 802.11ac';
wlcanac='802.11a & 802.11n & 802.11ac';
wlc26 = 'Hvis du skjuler nettverksnavnet blir WPS deaktivert.';
wlc27 = 'Hvis du endrer sikkerhetstypen blir WPS deaktivert.';
wlc28 = 'WPS er deaktivert på grunn av din <A href=%s><B>trådløse sikkerhetstype</B></A>.';
wlc29 = 'WPS er deaktivert fordi du har skjult nettverksnavnet (SSID).';
wlc30 = 'WPS er deaktivert fordi du har skjult nettverksnavnet (SSID) og på grunn av din <A href=%s><B>trådløse sikkerhetstype</B></A>.';
wlc31 = 'Hvis du slår på WPS blir nettverksnavnet synlig (SSID).';
wlc32 = 'Hvis du slår på WPS blir sikkerhetstypen endret til WPA/WPA2. Det nåværende nettverkspassordet vil fungere helt fint.';
wlc33 = 'Hvis du slår på WPS blir nettverksnavnet synlig (SSID) og sikkerhetstypen blir endret til WPA/WPA2. Det nåværende nettverkspassordet vil fungere helt fint.';
wle3a = 'WPA-PSK';
wle3b = 'WPA2-PSK';
wle3c = 'WPA-PSK + WPA2-PSK';
wps1 = 'Wi-Fi Protected Setup (WPS)';
wps3 = 'Konfigurer trådløs sikkerhet';
wps17 = 'For klientenheter uten WPS, må du kjøre Belkin Security Assistant fra CD eller manuelt konfigurere enheten med følgende innstillinger:';
wps23 = 'WPA+WPA2-Personal (PSK)';
wps25 = 'TKIP+AES';
wps27 = 'Nettverksnøkkel (WEP):';
wps28_1 = 'NULL';
wle11 = 'Nøkkel 1';
wle12 = 'Nøkkel 2';
wle13 = 'Nøkkel 3';
wle14 = 'Nøkkel 4';
wpskerr2 = 'Nøkkelen må være mellom 8 og 63 tegn og kan inneholde mellomrom og symboler, eller 64 Hex-tegn (bare 0-9 og A-F).';
wpskerr4 = 'Du må legge inn gjestenøkkelen';
wpskerr7 = 'Gjestenøkkelen skal være 8 tegn';
wpskerr8 = 'Gjestenøkkelen kan ikke være det samme som nettverksnøkkelen';
wlguest1 = 'SSID-en kan ikke være det samme som Gjeste-SSID-en';
wlguest2 = 'Gjeste-SSID-en kan ikke være det samme som SSID-en';
rs_crc = 'Gjenopprettingsfeil < CRC >';
rs_long = 'Gjenopprettingsfeil <too long>';
rs_disposition = 'Gjenopprettingsfeil <No Content-Disposition>';
rs_getpid = 'Gjenopprettingsfeil <Can\'t get pid!>';
rs_unmatchpid = 'Gjenopprettingsfeil <Unmatched pid>';
msg_ddns3  = 'Domenenavnfeltene kan ikke være tomme\n';
msg_lan_dhcp1  = 'Ber om informasjon fra Gateway-en';
msg_lan_dhcp2  = 'Oppdaterer konfigurasjonsdatabasen.';
msg_wan_stat1  = 'IP-adresse ';
msg_wan_stat2  = ' er ikke i ';
msg_wan_stat3  = ' nettverket.';
msg_wls_chan2  = 'Gjeste-SSID kan ikke være TOM!\n';
fw_not_interrupt  = 'IKKE FORSTYRR ELLER KOBLE FRA RUTEREN, for dette kan gjøre ruteren ubrukelig.';
msg_invalid_char  = 'Fant ugyldig(e) tegn. Gyldige tegn er: 0-9, a-z, A-Z, `~!@#$%^&*()_-+=|\\{}[]:";\',.<>/?';
msg_invalid_domain_char  = 'Ugyldig lokalt domenenavn'+': ~!@#$%^&*()=+{}[]|":;\\\'?/<>,`';
msg_invalid_char_1  = 'Fant ugyldig(e) tegn. Gyldige tegn er bokstaver og tall. Følgende symboler er ugyldige: `~!@#$%^&*()_+[]{}\\|;:\'"<>/?.,';
msg_hostIP_invalid  = 'Verts-IP-adressen er ugyldig. Det skal ikke være ruterens LAN IP.\n';
msg_dmzIP  = 'DMZ IP-adresse.';
msg_blank  = ' kan ikke være tom.\n';
msg_space  = 'Tomrom eller mellomrom er ikke lov i %s\n';
msg_blank_in  = 'Tomrom er ikke lov i %s\n';
msg_allspaces  = '%s kan ikke bestå bare av mellomrom\n';
msg_invalid  = 'Det er ett eller flere ugyldige tegn i %s\nGyldige tegn er: \n%s\n\n';
msg_check_invalid  = '%s inneholder et ugyldig tall\n';
msg_valid_range  = '%s er ugyldig. Gyldig verdiområde er %s til %s\n';
msg_invalid_mac  = 'Ugyldig MAC-adresse.\n';
msg_multi_mac = 'MAC-adressen kan ikke være en multicast-adresse.\n';
msg_confirmDefault  = 'Advarsel!\nHvis du laster inn fabrikkinnstillingene blir alle de nåværende innstillingene slettet.\nEr du sikker på at du vil gjøre dette?';
Allowed_Services = 'Tillatte tjenester';
Allowing_Url = 'Nettstedstillatelse etter URL-adresse ';
Allowing_Keyword = 'Nettstedstillatelse etter nøkkelord';
wipv63 = 'Enheter som er tilkoblet ruteren kan kommunisere med hverandre ved hjelp av native IPv6-pakker. IPv6-pakker på lokalnettverket blir automatisk sendt til alle LAN-grensesnitt (Ethernet-porter og både 2,4 GHz og 5 GHz trådløse nettverk).';
wipv64 = 'Når IPv6 Pass-Through er aktivert, blir også IPv6-pakkene kopierte til WAN-grensesnittet.(Hvis dette er aktivert, opprettes en direkte, usikret forbindelse med Internettet.)';
wipv65 = 'Ta kontakt med Internettleverandøren for å finne ut om de støtter IPv6.';
wipv67 = 'Internett IPv6';
wipv68 = 'Nettverket ditt er IPv6-kompatibelt.';
wipv69 = 'Pass-Through';
mf1 = 'På disse sidene kan du justere ruterens oppførsel når den mottar visse typer medietrafikk.';
mf2 = 'Optimer Internettforbindelsen automatisk for ulike typer trafikk.';
mf3 = 'Se hvordan ruteren blir brukt.';
mf8 = 'Registrert den %s';
mf10 = 'Last ned';
mf11 = 'Last opp';
mf12 = 'Hastighet';
mf15 = 'Bruk innstillingene';
mf18 = 'Skriv et tall mellom {0.1-%s}.';
mf20 = 'Bare mellom {0.1-%s}.';
mf26 = 'Manuelt registrert den %s';
mf32 = 'eller';
mf44 = 'De automatiske hastighet-testresultatene er kanskje ikke 100 % nøyaktige avhengig av Internettrafikk eller andre forhold. Du kan sammenligne resultatene ved å gå til et nettsted for hastighetstesting eller ta kontakt med Internettleverandøren og få bekreftet Internetthastigheten. Hvis hastighetsresultatene er ulike kan du skrive inn verdiene manuelt.';
media_dlna18 = 'Uten tittel';
media_dlna21 = 'Du har flere mediefiler enn ruteren kan indeksere, så vi betjener de første 12000.';
errSubnetMaskInvalid_2 = 'Nettverksmasken ser ikke ut som en nettverksmaske. Kontroller verdien.';

