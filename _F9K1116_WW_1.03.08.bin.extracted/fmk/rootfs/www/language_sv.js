function dw(message)
{
	document.write(message);	
}

// Note this dictionary is a temporary demonstration
var langDictionary = {

// Copy belkin transation table to here	
'p100t011' : 'dashboard',
'p220t001' : 'Du har en anslutning av typ PPTP DSL.',
'p220t011' : 'PPTP',
'p220t012' : 'Point-to-Point Tunneling Protocol (PPTP) skapar en privat och krypterad anslutning mellan dig och din internetleverantör.',
'p222t001' : 'Något är fel med dina PPTP-inställningar.',
'p300t001' : 'Kontrollerar om det finns uppdateringar till den inbyggda programvaran.',
'p300t002' : 'Vi kontrollerar om det finns tillgängliga uppdateringar av inbyggd programvara för din nya router.',
'p300t003' : 'Varför behöver jag ha den senaste versionen av inbyggd programvara?',
'p300t004' : 'Inbyggd programvara är den mjukvara som din router använder för att implementera nätverks- och säkerhetsprotokoll. Uppdateringarna förbättrar din routers pålitlighet och funktion och därför är det bra att kontrollera att du har den senaste versionen.',
'gtUpdateNoPower' : 'Vi uppdaterar din router med den nya inbyggda programvaran. Stäng inte av strömmen under denna process.',
'p320t003' : 'Detta kommer att ta cirka 3 minuter. Uppdateringsförlopp:',
'gtFirmwareRestart' : 'Nu när programvaran har installerats måste vi starta om din router för att slutföra installationen.',
'p342t003' : 'från listan med trådlösa nätverk för att hjälpa detta på traven.',
'errorSSIDEmpty' : 'Ange ett namn för ditt trådlösa nätverk.',
'errorSSIDTooLong' : 'Ditt nätverksnamn måste vara kortare än 32 tecken.',
'errorSSIDInvalidChars' : 'Nätverksnamnet kan endast innehålla bokstäver, siffror, skiljetecken och mellanslag.',
'errorWEPPasswordInvalidChars' : 'Nätverkslösenordet får endast innehålla siffror samt bokstäverna A till F.',
'errorWEPPasswordInvalidLength' : 'Ditt lösenord till nätverket måste vara 10 eller 26 tecken långt.',
'errorWEPPasswordEmpty' : 'Ange ett lösenord för att skydda ditt trådlösa nätverk.',
'errorWPAPasswordInvalidChars' : 'Lösenordet till nätverket kan endast innehålla bokstäver, siffror, skiljetecken och mellanslag.',
'errorWPAPasswordInvalidLength' : 'Ditt lösenord till nätverket måste vara 8 till 63 tecken långt.',
'errorWPAPasswordEmpty' : 'Ange ett lösenord för att skydda ditt trådlösa nätverk.',
'errorGenericCommitError' : 'Ett fel uppstod.  Korrigera inställningarna nedan och försök igen.',
'p400t006' : 'Lösenord:',
'p450t006' : 'Lösenord: ',
'p451t006' : 'Lösenord: ',
'p500t007' : 'Slutför registreringen',
'p500t008' : 'Registrera senare',
'p700t011' : 'PPTP DSL connection',
'errIpAddressEmpty' : 'IP-adressen kan inte vara blank.',
'errSubnetMaskEmpty' : 'Nätmask kan inte vara blank.',
'errSubnetMaskInvalid' : 'Nätmasken ser inte ut som en nätmask. Kontrollera värdet.',
'errDefaultGatewayEmpty' : 'Standardgateway-adress kan inte vara blank.',
'errDNSServerEmpty' : 'DNS-serveradressen kan inte vara blank.',
'1781' : '',
'1782' : '',
'1783' : '',
'7102' : 'Belkin Intellistream prioriterar hög bandbredd och låglatenta tjänster såsom röst, video och spel för bästa möjliga online-upplevelse.',
'7103' : 'För att fungera bra behöver Intellistream känna till din uppkopplingshastighet.',
'7104' : 'Internetuppkopplingen kommer att avbrytas tillfälligt under testet.',
'7105' : 'Internetuppkopplingen avbryts tillfälligt under testet.',
'7106' : 'Kör ett hastighetstest',
'7107' : 'Hastighetstest',
'7108' : 'Ange manuellt',
'7109' : 'Ping',
'7110' : 'Nedladdningshastighet<br>',
'7111' : 'Uppladdningshastighet<br>',
'7112' : 'Kör...',
'7113' : 'Klart.',
'7114' : 'Fel uppstod under testet.',
'7115' : 'Ange ett tal mellan 0,1 - 100.',
'7116' : 'Ange ett tal mellan 0,1 - 1 000.',
'7117' : 'Endast mellan 0,1 - 100.',
'7118' : 'Med din höga uppladdningshastighet kommer Intellistream endast att prioritera din nedladdningshastighet.',
'7119' : 'Med din höga nedladdningshastighet kommer Intellistream endast att prioritera din uppladdningshastighet.',
'7120' : 'Med dina höga uppkopplingshastigheter behöver Intellistream inte vara aktiverat.',
'7121' : 'Registrerat på',
'7122' : 'Manuellt registrerat på',
'7123' : 'Aktivera Intellistream:',
'7124' : 'Intellistream är aktiverat.',
'7125' : 'Intellistream är för närvarande avaktiverat.',
'7126' : 'Manuell inställning.',
'gtBBSTitle' : 'Välkommen till Belkins routerinstallation',
'gtBack' : 'Tillbaka till Dashboard',
'Support4t036' : 'Läs allt om detta.',
'Support4t037' : 'Öppna följande URL på en enhet som är ansluten till internet och ta reda på hur du löser problemet själv: <STRONG>www.belkin.com/support/asdlkj</STRONG>',
'gtReadHelp' : 'Gå till <STRONG>http://belk.in/NLk29H</STRONG> på en enhet som är ansluten till internet.',
'Support5t014' : 'Läs allt om detta.',
'p1200t001' : 'Lite mer säkerhet.',
'p1200t002' : 'Du kan skydda din router genom att låsa instrumentbrädan med ett lösenord.',
'errsetempt' : 'Ange ett lösenord.',
'errorpwdEmpty' : 'Ange lösenord.',
'errorpwdError' : 'Lösenordet är felaktigt.',
'60' : 'Duplicerad administratör',
'61' : 'Enheten administreras av',
'62' : 'för tillfället.',
'gtDisconnected' : 'Bortkopplad',
'dft005' : 'Belkin hjälpcenter',
'dhToggleBand' : 'Visa 5,0 Ghz',
'419' : 'sekunder kvar.',
'422' : 'Inställningarna återställdes',
'423' : 'Den återställda filen är inte av rätt typ eller version för den här enheten. Återställningen misslyckades. Hämta rätt fil och försök igen.',
'533' : 'Om routern börjar fungera felaktigt kan det bli nödvändigt att starta om routern. Inställningarna försvinner inte om routern startas om.',
'1200' : 'Ändringarna verkställs. Vänta.......',
'1386' : 'Uppgraderingsfilen är inte av rätt typ eller version för den här enheten. Uppgraderingen misslyckades. Hämta rätt fil och försök igen.',
'2053' : 'Ändringarna har verkställts',
'2054' : 'Den inbyggda programvaran har uppdaterats',
'766' : 'De angivna nätmasknumren är ogiltiga.',
'1356' : 'Ogiltig gateway-IP-adress. Det första talet måste vara mellan 1 och 223.',
'1357' : 'Ogiltig gateway-IP-adress. Det andra och tredje talet ska vara mellan 0 och 255.',
'1358' : 'Ogiltig gateway-IP-adress. Det sista talet måste vara mellan 1 och 254.',
'1360' : 'Ogiltig IP-adress. Det första talet ska vara mellan 1 och 223.',
'1354' : 'Ogiltig IP-adress. Det andra och tredje talet ska vara mellan 0 och 255.',
'675' : 'Ogiltig IP-adress. Det sista talet ska vara mellan 1 och 254.',
'403' : 'Den angivna IP-adressen är ogiltig.',
'760' : 'IP-adress',
'1760' : 'Neka alla',
'395' : 'Du har antingen inte angett alla tal, eller så är några av de angivna talen ogiltiga. Varje ruta ska innehålla ett tal på mellan 0 och 255.',
'1395' : 'Inte konfigurerad',
'1281' : 'WAN-IP-adressen får inte täcka LAN-sidans nätmask.',
'641' : 'Du har antingen inte angett alla tal i IP-adressen, eller så är några av de angivna talen ogiltiga. Talen ska vara mellan 0 och 255.',
'errUsernameTooLong' : 'Användarnamnet måste vara kortare än 64 tecken.',
'errUsernameInvalid' : 'Användarnamnet kan endast innehålla bokstäver, siffror, skiljetecken och mellanslag.',
'errPasswordEmpty' : 'Ange lösenord.',
'errPasswordTooLong' : 'Lösenordet måste vara kortare än 64 tecken.',
'errPasswordInvalid' : 'Användarnamnet kan endast innehålla bokstäver, siffror, skiljetecken och mellanslag.',
'1398' : 'OK',
'1399' : 'Avbryt',
'374' : 'På',
'375' : 'Av',
'47' : 'Mer info',
'48' : 'Rensa ändringar',
'49' : 'Spara',
'96' : 'Aktivera',
'119' : 'Inaktivera',
'1298' : 'Stäng',
'113' : '<< Lägg till',
'114' : 'Ta bort',
'128' : 'Uppdatera',
'318' : 'Inaktiverad',
'317' : 'Aktiverad',
'2006' : 'Ja',
'2007' : 'Nej',
'3300' : 'NYHET',
'50' : 'Uppdatera dynamisk DNS',
'98' : 'Dynamiskt domännamnssystem (DDNS) låter dig komma åt ditt hemnätverk via ett konto som skapas genom en DDNS-leverantör. Skapa ett konto genom Dyn.com (<a href=\'http://www.dyn.com\' target=\'_blank\'>www.dyn.com</a>) och slå på routerns DDNS-funktion. Du måste skapa ett konto innan du kan använda den här tjänsten.',
'100' : 'Användarnamn',
'101' : 'Lösenord',
'102' : 'Domännamn',
'742' : 'Ange användarnamn',
'757' : 'Ange lösenord!',
'822' : 'är ogiltig. Korrigera den först.',
'1307' : 'DynDNS',
'1308' : 'DDNS-tjänst',
'1309' : 'DDNS-status',
'1310' : 'Webbplats',
'1315' : 'Automatisk DDNS-uppdatering',
'1316' : 'uppgradera var',
'1317' : 'dag',
'1369' : 'Registrerad',
'1380' : 'Fel konfiguration',
'1381' : 'Ansluta',
'1382' : 'Anslutningen misslyckades',
'1383' : 'Inloggningen misslyckades',
'1384' : 'Registreringen misslyckades',
'1385' : 'Avregistrerad',
'1751' : '',
'702' : 'Domännamnssystem (DNS) överför domännamn till IP-adresser för att hitta datortjänster och enheter över hela världen. Om din internetleverantör har gett dig en DNS-adress ska du ange den här.',
'703' : 'Automatiskt från internetleverantör',
'704' : 'DNS-adress',
'705' : 'Sekundär DNS-adress',
'706' : 'DNS = Domännamnserver. En server på Internet som översätter URL-adresser (Uniform Resource Locator), till exempel www.belkin.com, till IP-adresser.',
'707' : 'Du måste ange de DNS-inställningar som du fått av internetleverantören om du inte använder den automatiska DNS-funktionen.',
'780' : 'Ange IP-adress',
'823' : 'Besök först {Website Filter} och välj "No filters" (inga filter) för att göra DNS-ändringar.',
'55' : 'Information om inbyggd programvara',
'56' : 'Det finns ingen ny uppdatering av den inbyggda programvaran för den här routern.',
'57' : 'Det går inte att ansluta till servern med information om inbyggd programvara. Kontrollera WAN-anslutningen.',
'58' : 'Aktuell inbyggd programvara:',
'59' : 'Ladda ner inbyggd programvara:',
'64' : 'Routern kan konfigureras så att åtkomsten begränsas till Internet, e-post eller andra nätverkstjänster på angivna dagar och tidpunkter.',
'65' : 'IP',
'66' : 'Port',
'67' : 'Typ',
'68' : 'Blockeringstid',
'69' : 'Dag',
'70' : 'Tid',
'71' : 'Aktivera',
'72' : 'BÅDA',
'73' : 'Alltid',
'74' : 'Blockera',
'75' : 'SÖN',
'76' : 'MÅN',
'77' : 'TIS',
'78' : 'ONS',
'79' : 'TOR',
'80' : 'FRE',
'81' : 'LÖR',
'82' : '.00 EM',
'83' : '.00 FM',
'84' : 'Du har antingen inte angett klientens IP-adress, eller så är några av talen i den angivna IP-adressen ogiltiga. Varje IP-ruta ska innehålla ett tal på mellan 1 och 254.',
'85' : 'De angivna portnumren är ogiltiga.',
'86' : 'Det sista numret i portintervallet måste vara större än det första.',
'87' : 'Det sista talet i IP-intervallet måste vara större än det första.',
'88' : 'Varje portruta ska innehålla ett tal på 1–65535.',
'1311' : 'Inget program har valts',
'1312' : 'Dubblettposter har upptäckts. Regeln finns redan.',
'1355' : 'Routerns LAN-IP-adress bör inte ingå i IP-intervallet.',
'90' : 'Detta låter dig ange en enhet i nätverket som skall placeras utanför routerns brandvägg, medan övriga enheter befinner sig innanför brandväggen.',
'91' : 'Datorn i DMZ skyddas inte mot angrepp från hackare.',
'92' : 'Du placerar en dator i DMZ genom att ange de sista siffrorna i dess IP-adress i fältet nedan och välja ”Aktivera”. Klicka på "Spara" för att verkställa ändringen.',
'93' : 'IP-adress för virtuell DMZ-värd',
'97' : 'Statisk IP',
'95' : 'Privat IP',
'103' : 'Ange IP-adressen innan du aktiverar DMZ',
'1232' : 'DMZ-värdens IP-adress är ogiltig.',
'1253' : 'IP-adressen ligger utanför intervallet (1–254]!',
'105' : 'Med den här funktionen kan du skapa en lista med tillåtna klienter. När du aktiverar den här funktionen måste du ange MAC-adressen för varje klient på nätverket som ska få åtkomst till nätverket.',
'106' : 'Aktivera filtrering av MAC-adresser',
'107' : 'Lista för filtrering av MAC-adresser',
'108' : 'Blockera',
'110' : 'MAC-adress',
'112' : 'Den här MAC-adressen har redan lagts till.',
'669' : 'Ogiltig MAC-adress. Det är en nulladress.',
'902' : 'Ogiltig MAC-adress',
'903' : 'Korrigera den först.',
'904' : 'Korrekt MAC-adress anges i formatet xx:xx:xx:xx:xx:xx, där x motsvarar ett tecken på 0–9 eller a–f.',
'1062' : 'Obs! Du kan inte ta bort MAC-adressen för den dator du använder för att komma åt routerns administrativa funktioner (den dator du använder nu).',
'1602' : 'Användardefinierat 1',
'117' : 'Routern är utrustad med en brandvägg som skyddar nätverket mot en rad vanliga angrepp från hackare, bland annat Ping of Death (PoD) och Denial of Service (DoS). Du kan inaktivera brandväggsfunktionen om det behövs. Nätverket är inte helt öppet för angrepp av hackare bara för att du stänger av brandväggsskyddet, men vi rekommenderar att du aktivera brandväggen när så är möjligt.',
'118' : 'Aktivera/inaktivera brandvägg',
'121' : '<b>AVANCERAD FUNKTION! </b> Du kan konfigurera routern så att den inte svarar på ICMP-pingmeddelanden (pingmeddelanden till WAN-porten). Det ger en högre säkerhetsnivå.',
'1076' : 'Blockera ICMP-pingmeddelanden',
'1827' : 'Skrivarinställningar för gäståtkomst',
'2702' : 'Med gästbehörighet kan gäster få åtkomst till Internet via WAN-porten, utan att komma åt det interna nätverket, LAN eller WLAN. Den här funktionen stöds på 2,4 GHz endast för enklare användning.',
'279' : 'Inkommande port',
'1828' : 'Internetcafé-typ (gästen loggar in via en webbsida)',
'1619' : 'WPA/WPA2 PSK',
'1829' : 'WEP',
'1830' : 'Öppna',
'1831' : 'högst 32 tecken utan blanksteg',
'1617' : 'Lösenord (PSK)',
'842' : 'Autentisering',
'845' : 'Krypteringsteknik',
'854' : 'I förväg delad nyckel (PSK)',
'857' : 'Dölj PSK',
'855' : 'WPA-PSK (ingen server)',
'1335' : 'Nätverksnamn (SSID)',
'1825' : '8 till 63 tecken',
'1826' : '10 hexadecimala tecken',
'1834' : 'Nätverksnamn',
'409' : 'Lösenord',
'1835' : 'Varje gäst som ansluter till ditt trådlösa nätverk måste ange det här lösenordet.',
'1715' : 'Säkerhetstyp',
'1836' : 'Gör så här för att ansluta till det trådlösa nätverket:',
'1837' : 'Windows',
'1838' : '1. Högerklicka på ikonen för trådlösa nätverk i meddelandefältet i Windows och välj Visa tillgängliga trådlösa nätverk på popup-menyn.',
'1839' : '2. Dubbelklicka på ',
'1840' : ' nätverket.',
'1841' : '3. Ett fönster visas där du uppmanas att ange nätverksnyckel. Ange lösenordet ovan och klicka på OK.',
'1842' : 'MAC OS X',
'1843' : '1. Klicka på ikonen för trådlösa nätverk i menyfältet (högst upp till höger) och välj ',
'1844' : ' nätverket.',
'1845' : '2. Ett fönster visas där du uppmanas att ange nätverksnyckel. Ange lösenordet ovan och klicka på OK.',
'1832' : 'Internetcafé-typ',
'1833' : 'Öppet läge',
'1201' : 'SSID kan inte ställas in på NULL!',
'1812' : 'Lösenordets längd är ogiltig. Lösenordet måste bestå av högst 63 tecken och minst 8 tecken.',
'1824' : 'WEP-nyckeln måste bestå av 10 hexadecimala tecken!',
'414' : 'Inloggningsfel!',
'1811' : 'Med gästbehörighet kan användarna tillåta åtkomst till Internet men begränsa åtkomsten till hemnätverket. Be nätverksadministratören om lösenordet för gästbehörighet och ange det nedan.',
'1813' : 'Klart! Du kan nu öppna en webbläsare och surfa på Internet.',
'909' : '”IP-adress” är routerns interna IP-adress. För att komma åt de avancerade inställningarna ska du skriva in följande IP-adress i webbläsarens adressfält. Denna adress kan ändras vid behov. Om du vill ändra IP-adress anger du den nya IP-adressen och klickar på ”Spara". Den IP-adress du väljer ska inte vara en dirigerbar IP. Exempel på ej dirigerbara IP-adresser är: 192.168.2.1, 10.0.0.1, 172.16.0.1',
'917' : 'Nätmasken behöver inte ändras. Det går att ändra nätmasken om det behövs. Ändra endast nätmasken om du har en specifik anledning att göra detta.',
'929' : 'Med DHCP-serverfunktionen är det enkelt att konfigurera ett nätverk genom att tilldela IP-adresser till alla datorer på nätverket. DHCP-serverfunktionen kan stängas av om det behövs. Om DHCP-serverfunktionen stängs av måste du ställa in en statisk IP-adress för varje dator. IP-poolen är det område av IP-adresser som reserverats för dynamisk tilldelning till datorerna i ditt nätverk. Standardinställning är 2-200 (199 datorer). Om du vill ändra detta antal kan du göra det genom att ange nya inledande och avslutande IP-adresser samt klicka på "Spara".',
'935' : 'Du kan ange ett lokalt domännamn (nätverksnamn) för nätverket. Du behöver inte ändra denna inställning om du inte har särskilda skäl att göra det. Du kan ge nätverket vilket namn du vill, t.ex. "MITT NÄTVERK".',
'962' : 'Du anger att routern ska använda PPPoE genom att ange det användarnamn och lösenord du fick av internetleverantören i fälten. Om du inte har något tjänstnamn eller inte känner till det lämnar du fältet "Tjänstnamn" tomt. När du har angett informationen klickar du på ”Spara". När du har sparat kommer statusindikatorn att visa "Online" om routern är korrekt inställd.',
'967' : 'Vissa internetleverantörer använder PPTP-protokollet för att ansluta abonnenter till centralkontoret. Detta kräver att du anger ytterligare ett antal inställningar som internetleverantören bör ha tillhandahållit. När du har sparat ändringarna lyser internetindikatorn grönt om du har gjort en korrekt konfiguration.',
'971' : 'Välj anslutningstypen Telstra Bigpond genom att klicka på "Spara".',
'982' : 'Koppla bort efter X...',
'983' : 'Routern kopplas bort från internetleverantören efter en viss tids inaktivitet. Använd alternativet om du betalar för internetanslutningen per minut och du vill spara pengar.',
'htDDNS' : 'Vad är DDNS?',
'htDNS' : 'Var är DNS?',
'htDMZ' : 'Vad är DMZ?',
'htLAN' : 'Vad styrs av LAN-inställningarna?',
'htWANMain' : 'Vad är WAN-inställningar?',
'htWANMAC' : 'Vad är MAC-adress?',
'htWAN_PPPOE' : 'PPPoE-inställningar',
'htWAN_PPTP' : 'PPTP-inställningar',
'htIPv6' : 'Vad är IPv6?',
'htWifiID' : 'Vad är nätverksnamn och kanalinställningar?',
'htWifiIDContent' : 'Nätverksnamnet kallas en SSID (Service Set ID).  Alla klienter i ditt nätverk måste känna till SSID för att ingå i routerns nätverk.',
'htWifiSec' : 'Vad är Wi-Fi-säkerhet?',
'htWifiSecContent' : 'Alla Belkins routrar levereras med Wi-Fi-säkerhet aktiverat. Wi-Fi-säkerhet skapar ett säkerhetslager mot obehörig åtkomst till ditt nätverk.  När säkerheten är på, måste användaren ha ett lösenord för att komma åt ditt nätverk.',
'htWifiWPS' : 'Vad är Wi-Fi-skyddad inställning?',
'htWifiWPSContent' : 'Det är en valfri metod för att underlätta installation av säkerhetsaktiverade Wi-Fi-nätverk i hemmamiljö eller på små kontor. Enheter utan WPS (Wi-Fi protected setup) kan ändå läggas till i nätverket genom att välja nätverksnamnet och ange nätverkets lösenord.',
'htWifiGuest' : 'Hur används gäståtkomst?',
'htWifiGuestContent' : 'När det är på kommer gäståtkomst att skapa ett separat Wi-Fi-nätverk som har åtkomst till internet men inte till övriga enheter i nätverket.',
'htAP' : 'Kan jag använda routern som en åtkomstpunkt?',
'htAPContent' : 'Belkins routrar kan konfigureras så att de bara används som åtkomstpunkt, och routnings- och brandväggsfunktionerna förbigås.  Att ställa in routern som en åtkomstpunkt används vanligen för att utöka den trådlösa kapaciteten i ett existerande trådbundet nätverk.',
'htQos' : 'Vad är Belkin Intellistream?',
'htDLNA' : 'Belkin Media Server som drivs av Twonky',
'htPortForward' : 'Vad är portvidarebefordran?',
'htPortForwardContent' : 'Portvidarebefordran låter fjärrdatorer ansluta till ett specifikt program eller en specifik tjänst i ditt lokala nätverk. Du skulle exempelvis använda portvidarebefordran för att köra en webbserver (port 80) i ditt nätverk.  De flesta moderna program kräver inte att du använder portvidarebefordran. Den kan ställa in de portar som krävs automatiskt.',
'htWanPing' : 'Vad används blockering av WAN-pingmeddelanden till?',
'htWanPingContent' : 'Detta skapar en högre säkerhetsnivå för att förhindra externa internetanvändare från att ta reda på din IP-adress. Detta görs genom att pingar som som har sitt ursprung utanför ditt nätverk inte besvaras.',
'htRestart' : 'Varför ska jag starta om routern?',
'htRestoreFC' : 'Vad innebär återställning av standardinställningar?',
'htSaveSettings' : 'Varför bör jag spara/säkerhetskopiera mina inställningar?',
'htRestoreSettings' : 'Vad innebär återställning av tidigare inställningar?',
'htSystem' : 'Vad är systeminställningar?',
'htSystemContent' : 'Från denna sida kan du göra olika grundläggande routerinställningar, inklusive tidszon och administratörslösenord.',
'htSelfHeal' : 'Vad är självåterställning?',
'hLANSettings' : 'Denna sida hjälper dig skapa nya anslutningar, slå på och av DHCP och ställa in IP-adressen till routern i ditt lokala nätverk.',
'htDHCPClientList' : 'Vad är DHCP-klientlistan?',
'htDHCPClientListContent' : 'På den här sidan anges IP-adress, värdnamn och MAC-adress för varje enhet som är ansluten till nätverket. Om inget värdnamn har angetts för datorn är fältet tomt. Klicka på "Uppdatera" för att uppdatera listan.',
'hWebsiteFilters' : 'Detta utgör ett skyddslager mot osäkra/olämpliga hemsidor. Webbfiltren sållar bort hemsidor genom att kontrollera hemsidans namn mot en lista med godkända hemsidor.',
'hWANSettings' : 'Dessa nätverksinställningar gäller den anslutning du har med din internetleverantör.   Välj den anslutningstyp du har med din internetlevernatör i listan. ',
'htChannel' : 'På liknande sätt som en radio använder olika stationer kan routern sända på flera olika kanaler för att kommunicera med enheterna i ditt nätverk. Det är alltid bäst att använda "Auto".',
'3430' : 'IPv6 (Internetprotokoll, version 6) är en version av internetprotokoll (IP) som är avsedd att efterträda IPv4, som styr nästan all internettrafik. Visa internetleverantör har nästan slut på IP-adresser. IPv6 möjliggör för fler enheter att kommunicera via internet genom att använda större nummer för att skapa IP-adresser.  Din internetleverantör kommer att tala om ifall du behöver använda IPv6.',
'3431' : 'Anslutningstyp',
'3432' : 'Auto-konfig/DHCPv6 (standard)',
'3433' : 'Adresserna nedan tillhandahålls av din internetleverantör. DHCPv6 har ytterligare funktioner som förbättrar anslutningsbarheten.',
'3434' : 'WAN',
'3435' : 'WAN-adress',
'3436' : 'Gateway',
'3437' : 'LAN',
'3438' : 'Använd denna sektion för att konfigurera routerns interna nätverksinställningar. Om du ändrar LAN IPv6-adressen här kanske du måste justera datorns nätverksinställningar för att komma åt nätverket igen.',
'3439' : 'LAN-prefix',
'3440' : 'Gränssnitts-ID',
'3441' : 'Link-Local',
'3442' : 'DNS',
'3443' : 'Dina standardinställningar för IPv6 DNS kommer från din internetleverantör om de är tillgängliga i WAN routerannonser eller DHCPv6-meddelanden.',
'3444' : 'Primär',
'3445' : 'Sekundär',
'3446' : 'PPPoE över IPv6',
'3447' : 'PPPoE (Point-to-Point Protocol över Ethernet) används huvudsakligen av DSL-tjänster för att ansluta ett DSL-modem till internet.',
'3448' : 'Logga in',
'3450' : 'dölj lösenord',
'3451' : 'Användarnamn',
'3452' : 'Lösenord',
'3453' : 'Namn på tjänst',
'3454' : '6to4 Tunnel',
'3455' : 'Möjliggör överföring av IPv6-paket över ett IPv4-nätverk utan behov av att konfigurera uttryckliga tunnlar. Denna anslutningstyp är lämplig om din internetleverantör inte stödjer IPv6.',
'3456' : 'Remote 6to4 Relay Router',
'3457' : 'Pass-through',
'3458' : 'Enheter som är anslutna till routern kan tala med varandra med användning av ursprungliga IPv6-paket. IPv6-paket på LAN kommer automatiskt att skickas till alla LAN-gränssnitt (Ethernetportar och trådlösa nätverk med både 2,4 GHz och 5 GHz).',
'3459' : 'När pass-through är aktiverat, kommer IPv6-paket även att kopieras till WAN-gränssnittet. (Detta skapar en direkt oskyddad anslutning till internet.)',
'3460' : 'Kontakta din internetleverantör för information om stöd för IPv6.',
'3461' : 'Statisk IPv6',
'3462' : 'Statiska IPv6-adressering används normalt inte eftersom det kan vara svårt att administrera. Statisk IPv6 bör inte användas med enheter som ansluter till flera nätverk, t.ex. bärbara datorer eller mobila enheter.',
'3463' : 'Endast lokal pass-through',
'3464' : 'IPv6 WAN pass-through är deaktiverat. Alla lokala enheter på ditt LAN och WiFI kan fortfarande tala med varandra direkt, men routern skickar inga IPv6-paket till eller från internet och svarar inte heller direkt på några IPv6-paket.',
'3465' : 'Din internetleverantör tillhandahåller inte IPv6-anslutning. Kontakta din internetleverantör för information om stöd för IPv6 eller om att skapa anslutning.',
'3466' : 'Endast lokal pass-through är automatiskt inställt för att dina enheter ska skicka IPv6-paket till varandra. Det andra alternativet är att använda "6to4 Tunnel" för åtkomst till internet via en IPv4-anslutning.',
'3467' : 'Varje ruta ska innehålla fyra hexadecimala tecken (0-9 och a-f).',
'3468' : 'Ange en icke-multicastadress Multicastadresser börjar vanligen med ff.',
'3469' : 'Prefixets längd bör vara 1-127. Prefixets längd är vanligen 64, 56 eller 48.',
'3470' : 'IPv4-anslutning saknas.',
'3471' : 'Dessa DNS-inställningar åsidosätts av dina inställningar för föräldrakontroll',
'3472' : 'Hemsidefilter',
'3473' : 'Välj PPPoE i Internet WAN > Anslutningsinställning innan du väljer PPPoE över IPv6.',
'3474' : 'Förlorad internetanslutning. Kontrollera WAN-anslutningstyp eller kontakta din internetleverantör.',
'3475' : 'Standard-DNS som tillhandahålls av din internetleverantör',
'gtTryManu' : 'Om du är säker på din anslutningstyp kan du ',
'gtSetManual' : 'ställa in den manuellt ',
'2100' : 'Åtkomst nekad. Ange routerns lösenord om du vill ge tillfällig åtkomst till den blockerade sidan eller tjänsterna.',
'2101' : 'Landningssida',
'2102' : 'GÅ',
'354' : 'På den här sidan anges IP-adress, värdnamn och MAC-adress för varje dator som är ansluten till nätverket. Om inget värdnamn anges för datorn är fältet Värdnamn tomt. Du kan uppdatera listan genom att klicka på ”Uppdatera”.',
'355' : 'IP-adress',
'356' : 'Värdnamn',
'357' : 'MAC-adress',
'370' : 'Denna sida hjälper dig skapa nya anslutningar, slå på och av DHCP och ställa in IP-adressen till routern i ditt lokala nätverk.',
'371' : 'IP-adress',
'372' : 'Nätmask',
'373' : 'DHCP-server',
'378' : 'Med DHCP-serverfunktionen är det enkelt att konfigurera ett nätverk genom att tilldela IP-adresser till alla datorer på nätverket. Du behöver inte ändra något här.',
'379' : 'IP-poolens startadress',
'380' : 'IP-poolens slutadress',
'381' : 'Lånetid',
'382' : 'Oändlig',
'383' : 'Halvtimme',
'384' : 'En timme',
'385' : 'Två timmar',
'386' : 'Halvdag',
'387' : 'En dag',
'388' : 'Två dagar',
'389' : 'En vecka',
'390' : 'Två veckor',
'391' : 'Hur länge DHCP-servern reserverar IP-adressen för varje dator.',
'392' : 'Lokalt domännamn',
'393' : 'Valfritt',
'394' : 'Med den här funktionen kan du ge nätverket ett namn.',
'397' : 'IP-adresspoolen måste vara i samma nätmask som gateway-IP-adressen',
'398' : 'Slut-IP-adressen måste vara större än start-IP-adressen.',
'399' : 'LAN-IP-adressen får inte vara i DHCP-adresspoolen.',
'400' : 'Den IP-adress du väljer ska inte vara en dirigerbar IP.',
'401' : 'Ogiltig LAN-IP-adress. Det första talet får inte vara 127 eller 0',
'404' : 'Ändra rutan Adress i webbläsarens statusfält manuellt till den nya LAN-adressen.',
'406' : 'Vill du ändra LAN-IP-adressen?',
'416' : '192.168.y.x (där y motsvarar ett tal mellan 0 och 255, och x ett tal mellan 1 och 254).',
'417' : '10.y.y.x (där y motsvarar ett tal mellan 0 och 255, och x ett tal mellan 1 och 254).',
'418' : '172.z.y.x (där z motsvarar ett tal mellan 16 och 31, y ett tal mellan 0 och 255, och x ett tal mellan 1 och 254).',
'713' : 'Ogiltigt lokalt domännamn:',
'1228' : 'IP-poolens startadress är ogiltig.',
'1229' : 'IP-poolens slutadress är ogiltig.',
'1240' : 'LAN-IP-adressen är ogiltig.',
'3' : 'Logga in',
'408' : 'Innan du kan ändra några inställningar måste du logga in med ett lösenord. Om du inte har ställt in ett eget lösenord än lämnar du fältet tomt och klickar på ”Skicka”.',
'410' : 'Standard = lämna tomt',
'412' : 'Skicka',
'1371' : 'Fel lösenord',
'1372' : 'Bekräfta lösenordet och försök igen.',
'124' : 'Routern innehåller en logg över all aktivitet på routern, till exempel datorer som loggar in och ut och eventuella försök att få åtkomst till routern från Internet.',
'125' : 'Loggfil',
'126' : 'Spara',
'127' : 'Genomskinligt',
'1302' : 'Systemlogg',
'1303' : 'Brandväggslogg',
'8' : 'LAN-inställningar',
'9' : 'Lokala nätverksinställningar',
'10' : 'Anslutna enheter',
'2500' : 'Statisk väg',
'11' : 'Internet-WAN',
'335' : 'Anslutningstyp',
'690' : 'Dynamisk',
'692' : 'Statisk',
'694' : 'PPPoE',
'696' : 'PPTP',
'698' : 'Telstra Bigpond/OptusNet Cable',
'42' : 'IPV6',
'43' : 'IPv6-anslutning',
'13' : 'DNS',
'14' : 'MAC-adress',
'16' : 'Trådlöst nätverk',
'17' : 'Nätverksnamn',
'18' : 'Säkerhet',
'803' : '128-bitars WEP',
'804' : '64-bitars WEP',
'1296' : 'WPA/WPA2-Personal (PSK)',
'1297' : 'WPA/WPA2-Enterprise (RADIUS)',
'805' : 'WPA (med RADIUS-server)',
'1319' : 'Wi-Fi Protected Setup',
'777' : 'Använd som åtkomstpunkt',
'833' : 'MAC-adresskontroll',
'1613' : 'Gästbehörighet',
'1850' : 'Föräldrakontroll',
'1851' : 'Hemsidefilter',
'1710' : 'Åtkomstkontroll',
'20' : 'Media',
'7151' : 'Traffic Chart',
'7000' : 'Medieserver',
'1780' : 'Torrent Mate',
'1790' : 'Valfri mjukvara',
'23' : 'Brandvägg',
'24' : 'Portvidarebefordan',
'25' : 'Klient-IP-filter',
'26' : 'Filtrering av MAC-adresser',
'27' : 'DMZ',
'41' : 'DDNS',
'28' : 'Blockering av WAN-pingmeddelanden',
'29' : 'Säkerhetslogg',
'30' : 'Verktyg',
'32' : 'Starta om routern',
'34' : 'Återställ fabriksinställningar',
'35' : 'Spara/säkerhetskopiera inställningar',
'36' : 'Återställ tidigare inställningar',
'37' : 'Uppdatering av inbyggd programvara',
'38' : 'Systeminställningar',
'39' : 'Självåterställning',
'1900' : 'Registrering',
'132' : 'Intervallet för inkommande port är fel.',
'133' : 'Intervallet för privat port är fel.',
'134' : 'Med den här funktionen kan du dirigera externa tjänsteanrop (från Internet), till exempel en webbserver (port 80), en FTP-server (port 21) eller andra program, genom routern till det interna nätverket.',
'276' : 'Rensa post',
'277' : 'Lägg till',
'278' : 'Beskrivning',
'280' : 'Typ',
'281' : 'Privat IP-adress',
'282' : 'Privat port',
'376' : 'alla',
'411' : 'Genomskinligt',
'648' : 'Ogiltigt tecken',
'672' : 'Ogiltigt nummer! Måste vara mellan 1 och 65535.',
'905' : 'Alla poster är fulla.\nTa bort några poster och försök igen.',
'906' : 'Vill du radera posten',
'907' : 'Vill du radera alla poster?',
'1241' : 'WAN-IP-adressen är ogiltig.',
'1250' : 'Porten är ogiltig.',
'1362' : 'Beskrivningen är tom',
'1601' : 'Auto',
'2055' : 'Intervallöverlägg för inkommande port!',
'2056' : 'Intervallöverlägg för privat port',
'3310' : 'IntelliStream',
'3311' : 'Optimera din internetanslutning.',
'3312' : 'Medieserver',
'3313' : 'Dela media mellan enheter i nätverket.',
'3314' : 'Föräldrakontroll',
'3315' : 'DNS-säkerhetsfilter för internetsäkerhet',
'3316' : 'IPv6-anslutning',
'3317' : 'Ditt nätverk är nu IPv6-kompatibelt',
'1852' : 'Detta utgör ett skyddslager mot osäkra/olämpliga hemsidor. Webbfiltren sållar bort hemsidor genom att kontrollera hemsidans namn mot en lista med godkända hemsidor.',
'1854' : 'Filteralternativ',
'1856' : 'Inget filter',
'1858' : 'Blockera webbplatser med skadligt innehåll',
'1859' : 'Blockerar malware, phishing och falska webbplatser.',
'1860' : 'Blockera webbplatser med skadligt eller sexuellt innehåll',
'1861' : 'Blockerar malware, phishing, falska webbplatser och webbplatser med pornografiskt innehåll.',
'1862' : 'Blockera webbplatser med skadligt eller sexuellt innehåll eller andra platser som inte är lämpliga för barn',
'1863' : 'Blockerar malware, phishing och falska webbplatser och även webbplatser med pornografiskt innehåll, webbplatser med innehåll för vuxna samt abort, alkohol, tobak, brott, kulter, droger, spel, hat, självmord eller våld.',
'1864' : 'För att ändra din DNS-adress, gå till Internet WAN > {DNS}',
'7152' : 'Tabellen nedan visar både inkommande och utgående WAN-trafik, prioriterat i olika kategorier. Tabellerna visar de senaste 10 minutrarna (uppdateras automatiskt var femte sekund).',
'7154' : 'Trafiktext',
'7155' : 'Ingående trafik',
'7156' : 'Utgående trafik',
'7157' : 'För att använda denna funktion måste du aktivera Intellistream',
'7158' : 'här',
'7159' : '.',
'7160' : 'Netverksanslutning och kontroll',
'7161' : 'Röst, videochat och spel',
'7162' : 'Webb och webbvideo',
'7163' : 'E-post och VPN',
'7164' : 'Nedladdningar, torrents och övrigt',
'7170' : 'Byte/sek',
'7174' : 'Tid på dagen/timmar: minuter',
'326' : 'Lokalt nätverk',
'327' : 'LAN/WLAN-MAC-adress',
'332' : 'DHCP-server',
'333' : 'Internetinställningar',
'334' : 'WAN-MAC-adress',
'337' : 'WAN-IP-adress',
'338' : 'Standard-gateway',
'339' : 'DNS-adress',
'gtGuestName' : 'Gäst-SSID',
'gtGuestKey' : 'Gäst-nyckel',
'347' : 'Du måste logga in innan du kan ändra några inställningar.',
'2022' : 'Endast modem',
'2031' : 'Anslut',
'2032' : 'Koppla bort',
'2033' : 'Brusmarginal',
'2034' : 'Nedströms',
'2035' : 'Uppströms',
'2036' : 'Dämpning (dB)',
'2037' : 'Uteffekt (dBm)',
'2038' : 'Datahastighet (Kbit/s)',
'tDashboard' : 'Välkommen till Dashboard för din Belkin-router!',
'rtFeature' : 'Funktioner',
'rtLink' : 'Router-länkar',
'p1310t001' : 'Anslutningsdetaljer',
'p1310t002' : 'Testa om anslutningen',
'p1310t003' : 'Sista kontrollen',
'p1310t004' : 'Nedladdningshastighet',
'p1310t005' : 'Uppladdningshastighet',
'p1000t001' : 'Anslutna enheter',
'p1000t002' : 'Se alla',
'2501' : 'Ange följande konfigurationsparametrar',
'2502' : 'Nätverksadress',
'2503' : 'Nätmask',
'2504' : 'Gateway',
'396' : 'Det angivna nätmasknumret är ogiltigt.',
'1231' : 'Gateway är ogiltig!',
'1361' : 'Ogiltig IP-adress. Det första talet ska vara mellan 1 och 254.',
'1800' : 'IP-adressen och nätmasken matchar inte.',
'Support1t011' : 'Läs allt om detta.',
'Support2t011' : 'Läs allt om detta.',
'Support2t012' : 'Öppna följande URL på en enhet som är ansluten till internet och ta reda på hur du löser problemet själv: <STRONG>www.belkin.com/support/asdlkj</STRONG>',
'Support3t011' : 'Läs allt om detta.',
'Support3t012' : 'Öppna följande URL på en enhet som är ansluten till internet och ta reda på hur du löser problemet själv: <STRONG>www.belkin.com/support/asdlkj</STRONG>',
'Support6t036' : 'Läs allt om detta.',
'425' : 'Detta kommer att återställa routern till originalinställningarna. Vi rekommenderar att du <a href="ut_save.html">sparar/säkerhetskopierar dina inställningar</a> innan du återställer originalinställningarna. Om du sparar routerns konfiguration kan du återställa den om inställningarna försvinner eller ändras.',
'426' : 'Alla dina inställningar försvinner!\nVill du fortsätta?',
'427' : 'Det tar upp till $s sekunder att återställa standardinställningarna. Stäng inte av strömmen till routern under tiden.',
'428' : 'Fabriksinställningarna återställs inte. Inga inställningar raderas.',
'429' : 'Återställ standardinställningar',
'301' : 'Detta startar om routern varje vecka för att ge ett mer problemfritt nätverk.',
'302' : 'Initiera routern automatiskt',
'303' : 'Ställ in dagar',
'304' : 'Ställ in tid',
'527' : 'Detta låter dig ställa in din router enligt den konfiguration som du redan har sparat.',
'528' : 'Återställ',
'529' : 'Ange namnet på den fil som innehåller inställningarna för säkerhetskopieringen.',
'530' : 'Vill du fortsätta och återställa inställningarna?',
'531' : 'När inställningarna har återställts kanske enheten inte svarar på kommandon i upp till en minut.\n\nDetta är normalt. Stäng inte av enheten under tiden.',
'451' : 'Om du sparar routerns aktuella konfiguration kan du återställa den om inställningarna försvinner eller ändras. Vi rekommenderar att du sparar dina inställningar innan du uppdaterar den inbyggda programvaran.',
'539' : 'Spara',
'130' : 'Du har antingen inte angett alla IP-adresser, eller så är några av de angivna talen ogiltiga. Varje IP-adressruta ska innehålla ett tal på 1–254.',
'541' : 'Administratörslösenord:',
'542' : 'Routern levereras UTAN angivet lösenord. Om du vill lägga till ett lösenord av säkerhetsskäl kan du ange det här.',
'543' : 'Ange aktuellt lösenord',
'544' : 'Ange nytt lösenord',
'545' : 'Bekräfta nytt lösenord',
'546' : 'Timeout för inloggning',
'547' : '(1–99 minuter)',
'548' : 'Tid och tidszon:',
'549' : 'Januari',
'550' : 'Ange tidszon. Markera den här rutan om du befinner dig i ett område där sommartid används.',
'551' : 'Tidszon',
'606' : 'Sommartid',
'607' : 'Justera sommartid automatiskt',
'608' : 'Fjärradministration:',
'609' : 'AVANCERAD FUNKTION!',
'610' : 'Med fjärradministration kan du ändra routerns inställningar var som helst på Internet. Innan du aktiverar den här funktionen ska du',
'611' : 'KONTROLLERA ATT DU HAR STÄLLT IN ETT ADMINISTRATÖRSLÖSENORD.',
'642' : 'Om du aktiverar fjärradministration ökar säkerhetsrisken. Slå endast på fjärradministration under korta perioder när det är nödvändigt och stäng av denna funktion när den inte används. Ställ in ett lösenord.',
'612' : 'Routern kan fjärradministreras med vilken IP-adress som helst.',
'613' : 'Routern kan bara fjärradministreras &nbsp;&nbsp;&nbsp;med den här IP-adressen',
'614' : 'Fjärradministration Aktivera/Deaktivera',
'615' : 'Tilldelad port har använts i den virtuella servern.',
'616' : 'Tilldelad IP är i konflikt med aktuell WAN IP-adress.',
'617' : 'UPnP-aktivering:',
'618' : 'Ger dig möjlighet att sätta på eller stänga av routerns UPnP-funktion. Om du använder program med stöd för UPnP kan routern konfigureras automatiskt om du aktiverar UPnP.',
'619' : 'Aktivera/inaktivera UPnP',
'620' : 'Aktivera automatisk uppdatering av inbyggd programvara:',
'621' : 'Ger dig möjlighet att kontrollera om det finns uppdateringar för routerns inbyggda programvara automatiskt.',
'622' : 'Aktivera automatisk uppdatering av inbyggd programvara/&nbsp;&nbsp;&nbsp;Inaktivera',
'623' : 'Det aktuella lösenordet är ogiltigt',
'624' : 'De nya lösenorden som du angav överensstämmer inte. Försök igen.',
'626' : 'Lösenordets längd är ogiltig. Lösenordet måste bestå av högst 12 tecken och minst 3 tecken.',
'628' : 'Du bör ställa in ett administratörslösenord.',
'629' : 'Primär NTP-server',
'630' : 'Sekundär NTP-server',
'640' : 'Fjärråtkomstport',
'738' : 'Tidsvärdet för inaktivitet är ogiltigt. Talet måste vara ett heltal på 1–99.',
'796' : 'Om du aktiverar turboläge kan routern eller åtkomstpunkten använda så kallad Frame Bursting för högsta möjliga genomflöde från routern eller åtkomstpunkten till 802.11g-klienter. Turboläge fungerar med 802.11g-klienter som har stöd för turboläge. Alla Belkins 802.11g-klienter med den senaste drivrutinen har stöd för turboläge. Klienter utan stöd för turboläge fungerar som vanligt om turboläge har aktiverats.',
'1282' : 'Februari',
'1283' : 'Mars',
'1284' : 'April',
'1285' : 'Maj',
'1286' : 'Juni',
'1287' : 'Juli',
'1288' : 'Augusti',
'1289' : 'September',
'1290' : 'Oktober',
'1291' : 'November',
'1292' : 'December',
'1373' : 'Australien',
'1374' : 'Nya Zeeland',
'1375' : 'Nordamerika',
'1376' : 'Europa',
'1377' : 'Stillahavsregionen',
'2300' : '(GMT-12.00) Enewetak, Kwajalein',
'2301' : '(GMT-11.00) Midwayöarna, Samoa',
'2302' : '(GMT-10.00) Hawaii',
'2303' : '(GMT-09.00) Alaska',
'2304' : '(GMT-08.00) Pacific Time (USA och Canada), Tijuana',
'2305' : '(GMT-07.00) Arizona',
'2306' : '(GMT-07.00) Mountain Time (USA och Canada)',
'2307' : '(GMT-06.00) Central Time (USA och Canada)',
'2308' : '(GMT-06.00) Mexico City',
'2309' : '(GMT-06.00) Tegucigalpa',
'2310' : '(GMT-06.00) Saskatchewan',
'2311' : '(GMT-05.00) Bogotá, Lima, Quito',
'2312' : '(GMT-05.00) Eastern Time (USA och Canada)',
'2313' : '(GMT-05.00) Indiana (öst)',
'2314' : '(GMT-04.00) Atlantic Time (Canada)',
'2315' : '(GMT-04.00) Caracas, La Paz',
'2316' : '(GMT-04.00) Santiago',
'2317' : '(GMT-03.00) Newfoundland',
'2318' : '(GMT-03.00) Brasilia',
'2319' : '(GMT-03.00) Buenos Aires, Georgetown',
'2320' : '(GMT-02.00) Mid-Atlantic',
'2321' : '(GMT-01.00) Azorerna, Kap Verdeöarna',
'2322' : '(GMT) Casablanca, Monrovia',
'2323' : '(GMT) Greenwich Mean Time: Lissabon, London, Edinburgh',
'2324' : '(GMT) Greenwich Mean Time: Dublin',
'2325' : '(GMT+01.00) Amsterdam, Berlin, Bern, Rom',
'2326' : '(GMT+01.00) Stockholm, Wien, Belgrad',
'2327' : '(GMT+01.00) Bratislava, Budapest, Ljubljana',
'2328' : '(GMT+01.00) Prag, Bryssel, Köpenhamn, Madrid',
'2329' : '(GMT+01.00) Paris, Sarajevo, Skopje',
'2330' : '(GMT+01.00) Warszawa, Zagreb',
'2331' : '(GMT+02.00) Athen, Istanbul, Minsk, Vilnius, Sofia',
'2332' : '(GMT+02.00) Bukarest',
'2333' : '(GMT+02.00) Kairo',
'2334' : '(GMT+02.00) Harare, Pretoria',
'2335' : '(GMT+02.00) Helsingfors, Riga, Tallinn',
'2336' : '(GMT+02.00) Israel',
'2337' : '(GMT+03.00) Bagdad, Kuwait, Nairobi, Riyadh',
'2338' : '(GMT+03.00) Moskva, Sankt Petersburg,Volgograd, Kazan',
'2339' : '(GMT+03.00) Teheran',
'2340' : '(GMT+04.00) Abu Dhabi, Muskat, Tbilisi',
'2341' : '(GMT+04.00) Kabul',
'2342' : '(GMT+05.00) Islamabad, Karachi, Jekaterinburg',
'2343' : '(GMT+05:30) Delhi',
'2344' : '(GMT+06.00) Alma-Ata, Dhaka',
'2345' : '(GMT+07.00) Bangkok, Jakarta, Hanoi',
'2346' : '(GMT+08.00) Beijing, Chongqing, Ürümqi',
'2347' : '(GMT+08.00) Hongkong, Perth, Singapore, Taibei',
'2348' : '(GMT+09.00) Tokyo, Osaka, Sapporo',
'2349' : '(GMT+09.00) Seoul',
'2350' : '(GMT+09:30) Adelaide, Darwin',
'2351' : '(GMT+10.00) Brisbane',
'2352' : '(GMT+10.00) Canberra, Melbourne, Sydney',
'2353' : '(GMT+10.00) Hobart',
'2354' : '(GMT+10.00) Guam, Port Moresby',
'2355' : '(GMT+11.00) Magadan, Salomonöarna, Nya Kaledonien',
'2356' : '(GMT+12.00) Wellington, Auckland',
'2357' : '(GMT+12:00) Fiji',
'2358' : '(GMT+13:00) Nuku`alofa.',
'2370' : 'S',
'2371' : 'M',
'2372' : 'Ti',
'2373' : 'O',
'2374' : 'To',
'2375' : 'F',
'2376' : 'L',
'2401' : 'Miljöläge',
'2402' : 'Dimma frontpanelens lampor',
'2403' : 'Inaktivera radio från',
'2404' : 'förutom',
'2405' : 'Med den här funktionen kan du spara ström genom att tona ned lysdioderna på routerns framsida. Du kan även inaktivera den trådlösa radion vid angivna tidpunkter.',
'2406' : 'Starttiden kan inte vara senare en sluttiden!',
'322' : 'Version av inbyggd programvara',
'431' : 'Då och då släpper Belkin nya versioner av routerns inbyggda programvara. Dessa uppdateringar innehåller förbättringar och problemlösningar för din router.',
'432' : '<b>OBS!</b>Spara <a href="ut_save.html">aktuella inställningar </a>innan du uppdaterar till en ny version av fast programvara.',
'433' : 'Klicka här',
'434' : 'för att gå till sidan Spara/säkerhetskopiera aktuella inställningar.',
'435' : 'Sök efter ny version av inbyggd programvara',
'436' : 'Sök efter inbyggd programvara',
'437' : 'Uppdatera den inbyggda programvaran',
'438' : 'Uppdatera',
'439' : 'Ange var uppgraderingsfilen finns. Skriv filens sökväg och namn, eller bläddra till filen genom att klicka på ”Bläddra”.',
'440' : 'Vill du fortsätta med uppgraderingen?',
'441' : 'Efter uppgraderingen kan det hända att routern inte svarar på kommandon i upp till en minut. Detta är normalt. Stäng inte av eller starta om routern under tiden.',
'1198' : 'Den inbyggda programvaran uppdateras.',
'534' : 'Starta om routern',
'535' : 'Vill du starta om routern? Konfigurationen påverkas inte av att routern startas om.',
'536' : 'Det kan ta upp till $s sekunder innan routern startar om. Stäng inte av routern innan återställningen har slutförts.',
'7001' : 'Njut av musik, fotografier och filmer bekvämt via alla DLNA-enheter som är anslutna till ditt nätverk. Powered by Twonky.',
'7002' : 'DLNA-server',
'7003' : 'Servernamn',
'7004' : 'Delade enheter:',
'7005' : 'Klar',
'7006' : 'Indexerar...',
'7007' : 'Servar:',
'7008' : 'filmer',
'7009' : 'sånger',
'7010' : 'bilder',
'7011' : 'Delas inte i nätverket.',
'7012' : 'Det finns inga USB-enheter som är anslutna till routern.',
'7016' : 'Uppdatera index',
'7017' : 'Ange vänligt namn för mediaserver',
'7018' : 'Otillåtet tecken',
'7019' : 'Du har mer media än din router kan indexera. Därför servar vi de första',
'7020' : 'punkterna.',
'7021' : 'Twonky är en serie digitala mjukvaruprodukter för hemmabruk som skapats av PacketVideo Corporation (PV).',
'7022' : 'Kan inte indexera skrivskyddad enhet.',
'7023' : 'MB',
'7024' : 'GB',
'7025' : 'TB',
'7026' : 'video',
'7027' : 'sång',
'7028' : 'bild',
'770' : 'Använd endast det här alternativet för anslutningar med Bigpond Cable och OptusNet Cable. ',
'771' : 'VIKTIGT:',
'775' : '3) Återanslut elkabeln till Belkin-routern.',
'776' : 'Du kan kontrollera att du är ansluten till Internet genom att öppna en webbläsare, till exempel Internet Explorer, Firefox eller Safari, och se om du kan öppna några webbsidor.',
'731' : 'Användarnamn',
'489' : 'Lösenord',
'732' : 'Ange lösenordet igen',
'756' : 'Ange lösenordet igen!',
'1379' : 'Du har antingen inte angett alla tal i IP-adressen, eller så är några av de angivna talen ogiltiga. IP-adressen ska anges som x.y.y.x (där y motsvarar ett tal mellan 0 och 255 och x ett tal mellan 1 och 254).',
'709' : 'Du anger dina dynamiska IP-inställningar genom att ange informationen nedan och klicka på ”Spara”.',
'710' : 'Värdnamn',
'711' : 'Värdnamn = ett namn som krävs av vissa internetleverantörer för anslutning till deras system.',
'712' : 'Ändra WAN-MAC-adress',
'330' : 'IP-adress',
'331' : 'Nätmask',
'659' : 'Ogiltig MTU. Måste vara mellan 500 och 1500.',
'730' : 'Du anger dina PPPoE-inställningar genom att ange informationen nedan och klicka på ”Spara”.',
'733' : 'Tjänstnamn (valfritt)',
'734' : 'MTU (500–1500)',
'735' : 'Ändra inte MTU-inställningen om inte internetleverantören kräver ett annat värde',
'736' : 'Koppla bort efter',
'737' : 'minuter inaktivitet.',
'741' : 'Ogiltigt MTU-värde',
'2005' : 'IP tilldelad av internetleverantör',
'2021' : 'Klicka här för att ange DNS-inställningar',
'2023' : 'Dubbla citattecken är inte tillåtet.',
'2024' : 'Användarnamnet innehåller otillåtna tecken',
'2025' : 'Omvänt snedstreck är inte tillåtet.',
'2030' : 'Du har antingen inte angett hela standard-gateway-adressen, eller så är några av de angivna talen ogiltiga. Talen ska vara mellan 0 och 255.',
'2052' : 'Lösenordet innehåller otillåtna tecken (<, > och &)',
'691' : 'Det är vanligast att ha en dynamisk anslutningstyp. Om du använder ett kabelmodem är det troligt att du har en dynamisk anslutning. Välj det här alternativet om du har ett kabelmodem eller är osäker på vad du har för anslutningstyp.',
'723' : 'Inklusive internetleverantörer som kräver värdnamn och internetleverantörer som knyter anslutningen till en viss MAC-adress.',
'693' : 'Det är mindre vanligt att ha en statisk IP-adress som anslutningstyp. Det här alternativet ska bara användas om din internetleverantör har gett dig en IP-adress som aldrig ändras.',
'724' : 'Routern har stöd för anslutning till en internetleverantör som tilldelar en statisk IP-adress.',
'695' : 'Om du använder ett DSL-modem och/eller om din internetleverantör har gett dig ett användarnamn och lösenord är din anslutningstyp PPPoE. Välj den här anslutningstypen.',
'725' : 'Routern har stöd för en dynamisk anslutningstyp där PPPoE-inloggning krävs för autentisering.',
'697' : 'Vissa internetleverantörer använder PPTP-protokollet för att ansluta abonnenter till centralkontoret. Detta kräver att du anger ytterligare ett antal inställningar som internetleverantören bör ha tillhandahållit. När du har sparat ändringarna lyser internetindikatorn grönt om du har gjort en korrekt konfiguration.',
'726' : 'Används endast för de internetleverantörer som kräver PPTP som anslutningsmetod.',
'699' : 'Använd endast det här alternativet för anslutningar med Bigpond Cable och OptusNet Cable.',
'728' : 'ENDAST för användare i Australien. Routern kan anslutas till Telstra BigPond.',
'2019' : 'Du anger dina modeminställningar genom att ange informationen nedan och klicka på ”Spara”.',
'tBackToConnectionType' : 'Tillbaka till anslutningstyp',
'759' : 'Du anger dina statiska IP-inställningar genom att ange informationen nedan och klicka på ”Spara”.',
'761' : 'Nätmask',
'762' : 'Internetleverantörens gateway-adress',
'754' : 'Klicka här för att ange DNS-inställningar',
'715' : 'Varje enhet på ditt nätverk har en unik hårdvaruadress (MAC-adress) som identifierar den för andra enheter i nätverket och på internet.  Några få internetleverantörer kräver att du anger MAC-adressen på ditt nätverkskort eller äldre router i routerinställningarna. Om du inte vet ska du ange MAC-adressen till den dator som ursprungligen var ansluten till modemet innan routern installerades.',
'716' : 'WAN-MAC-adress',
'717' : 'Klona datorns MAC-adress',
'718' : 'Klona',
'721' : 'På fliken Internet/WAN konfigurerar du routern så att den kan anslutas till internetleverantören. Routern kan anslutas till i stort sett alla internetleverantörers system, såvida du har konfigurerat routerns inställningar korrekt enligt internetleverantörens anslutningstyp. Du konfigurerar routern för anslutning till internetleverantören genom att klicka på ”Anslutningstyp” på fliken Internet/WAN till vänster på skärmen.',
'722' : 'Anslutningstyper som stöds:',
'htWANMainContent' : 'Välj anslutningstyp:',
'700' : 'Nästa',
'744' : 'PPTP-konto',
'745' : 'Lösenord',
'746' : 'Ange lösenordet igen',
'747' : 'Värdnamn',
'1770' : 'IP tilldelad av internetleverantör',
'1771' : 'Ja',
'1772' : 'Nej',
'1773' : 'Serviceadress',
'750' : 'Nätmask',
'778' : 'Routern kan konfigureras så att den bara används som åtkomstpunkt, och routnings- och brandväggsfunktionerna förbigås. Välj i så fall ”Aktivera” och ange en IP-adress för åtkomstpunkten.',
'779' : 'Åtkomstpunktsläge:',
'781' : 'Ange nätmask',
'801' : 'Säkerhetsläge',
'806' : 'Här kan du konfigurera inställningar för trådlös säkerhet/kryptering. Säkerhetsfunktionerna bör aktiveras för maximal trådlös säkerhet. WPA (Wi-Fi Protected Access) tillhandahåller dynamiska nyckeländringar och är den bästa säkerhetslösningen. I trådlösa miljöer där inte alla enheter har stöd för WPA bör WEP (Wired Equivalent Privacy) användas.',
'377' : 'Auto',
'487' : 'PÅ',
'488' : 'AV',
'787' : 'Här kan du ändra routerns trådlösa inställningar. Klicka på "Spara" för att spara inställningarna.',
'788' : 'Trådlös kanal',
'789' : 'SSID',
'790' : 'Trådlöst läge',
'794' : 'Sänd SSID',
'797' : 'Skyddat läge',
'1300' : 'Tilläggskanal',
'1301' : 'Bandbredd',
'1304' : '802.11e/WMM QoS',
'852' : 'Den i förväg delade nyckeln ska bestå av mellan 8 och 63 eller 64 hexadecimala tecken',
'856' : 'Wi-Fi-skyddad åtkomst med en i förväg delad nyckel: Nyckeln är ett lösenord, i form av ett ord, fras eller serie av bokstäver och siffror. Nyckeln måste vara mellan <b>8</b> och <b>63</b> tecken och kan endast innehålla mellanslag och symboler eller <b>64</b> hexadecimaler (0-F). Varje klient som ansluter till nätverket måste använda samma nyckel (i förväg delad nyckel).',
'115' : 'Du har antingen inte angett alla hexadecimala tecken, eller så är några av de angivna hexadecimala tecknen ogiltiga. Ett hexadecimalt tecken kan vara en siffra på 0–9 eller en bokstav på A–F.',
'308' : '<b>SPI</b> Stateful Packet Inspection. SPI är en typ av internetsäkerhet i företagsklass som tillhandahålls av din HomeConnect-nätverksgateway. Med hjälp av SPI, fungerar gateway-enheten som en "brandvägg" som skyddar ditt nätverk från oönskade intrång.',
'808' : 'OBS!',
'809' : 'Du kan generera hexadecimala par automatiskt med en lösenfras genom att trycka på knappen till höger och ange lösenfrasen här',
'810' : 'Lösenfras',
'811' : 'Generera',
'812' : 'Ange en lösenfras',
'814' : 'Nyckeln',
'818' : '(hexadecimala par)',
'296' : '<b>IP-adress</b> IP står för Internet Protocol. En IP-adress består av en serie av fyra tal som skils åt med punkter. IP-adressen representerar en unik värddator på Internet. Exempel: 192.34.45.8.',
'298' : '<b>ISP</b> Internet Service Provider (internetleverantör). En internetleverantör är ett företag som erbjuder anslutning till Internet för privatpersoner, företag och organisationer.',
'807' : '(13 par hexadecimala tecken)',
'813' : 'Nyckeln är inte komplett',
'821' : 'är inte komplett',
'1190' : '<br>Registrera dig för ett dynamiskt DNS-värdnamn genom att gå till http://www.dyn.com.<br>',
'1339' : 'Du bör använda WPA/WPA2 när WPS har aktiverats.',
'1363' : 'Pågår – vänta...',
'1364' : 'Fel upptäckt – Försök igen.',
'1365' : 'Session overlap error: Vänta i 60 sekunder innan du inleder processen igen eller gå till klientverktyget om du vill ansluta till nätverket manuellt.',
'1366' : 'Klart. Enheten har anslutits till routern.',
'1370' : 'Ogiltig PIN-kod! Enhetens PIN-kod består av antingen fyra eller åtta siffror. Kontrollera och ange igen.',
'1620' : 'Initierar – Starta WPS PBC i klientenheten inom två minuter.',
'1621' : 'Initierar – Starta WPS i klientenheten inom två minuter.',
'1622' : 'Tiden är ute - ingen klient ansluts till routern.',
'1623' : 'Wi-Fi Protected Setup-meddelande',
'1393' : 'WPS hårdvaruknapp',
'1320' : 'Wi-Fi Protected Setup (WPS) är standardmetoden för att förenkla säkerhetskonfigurationen och administrationen av Wi-Fi-nätverk. Du kan nu enkelt konfigurera och ansluta till ett WPA-aktiverat 802.11-nätverk med WPS-certifierade enheter med antingen PIN-metoden (Personal Information Number) eller PBC-metoden (Push Button Configuration). Gamla enheter utan WPS kan läggas till i nätverket med hjälp av traditionell manuell konfigurering.',
'1321' : 'PIN-metod (Personal Information Number)',
'1322' : 'Ange PIN-koden från klientenheten och klicka på ”Registrera”. Starta sedan WPS på klientenheten från dess trådlösa verktyg eller WPS-program inom två minuter.',
'1323' : 'Ange PIN-kod för klientenhet',
'1324' : 'Registrera',
'1325' : 'Om en extern registrator är tillgänglig kan du även ange routerns PIN-kod på den externa registratorn. Du kan ändra routerns PIN-kod genom att klicka på ”Generera ny PIN-kod” eller återställa PIN-koden till fabriksinställningen genom att klicka på ”Återställ standard-PIN-kod”.',
'1326' : 'PIN-kod för router',
'1327' : 'Generera ny PIN-kod',
'1328' : 'Återställ standard-PIN-kod',
'1329' : 'PBC-metod (Push Button Configuration)',
'1330' : 'Håll PBC-knappen på routern nedtryckt i tre sekunder eller klicka på ”Starta PBC”. Starta sedan PBC på den enhet du vill ansluta till routern inom två minuter.',
'1331' : 'Starta PBC',
'1332' : 'Manuell konfigurationsmetod',
'1333' : 'För klientenheter utan WPS kan du konfigurera enheten manuellt med följande inställningar.',
'1334' : 'Trådlös säkerhet',
'1336' : 'Nätverksautentisering',
'1337' : 'Datakryptering',
'1338' : 'Nätverksnyckel (PSK)',
'1340' : 'Lås upp routerns PIN',
'1341' : 'Routerns PIN avaktiverad på grund av alltför många misslyckade åtkomstförsök',
'1390' : 'PIN checksum misslyckades! Kontrollera och ange igen.',
'1391' : 'Ogiltig PIN-kod! Enhetens PIN-kod består av åtta siffror. Kontrollera och ange igen.',
'1392' : 'Konfigurerad',
'1396' : 'Konfigurera trådlös säkerhet manuellt.',
'1397' : 'trådlös säkerhet',
'common_err1' : '%s är NULL',
'upgrade_err2' : 'Uppgraderingen av inbyggd programvara avslutades på grund av otillräckliga resurser. Uppgraderingen misslyckades.\nFörsök igen när systemet är inaktivt (ingen Internettrafik)',
'upgrade_err3' : 'Kan inte överföra. Kontakta administratören.',
'upgrade_err4' : 'Den inbyggda programvaran är för stor. Uppgraderingen misslyckades..',
'upgrade_err5' : 'Du har redan den senaste inbyggda programvaran installerad.',
'upgrade_err6' : 'Filen för uppdatering av inbyggd programvara verkar vara skadad. Överför filen för den inbyggda programvaran igen.',
'show10' : 'Lista med DHCP-klienter',
'show54' : 'Anslutningsinställningar',
'btn2' : 'Verkställ ändringar',
'cff1' : 'Kontrollera inbyggd programvara framgångsrikt',
'PM2' : ':30 PM',
'AM2' : '.30 AM',
'Dimicons' : 'Nedtoningsikoner',
'EcoTo' : 'till',
'fvrm' : 'Inaktivera fjärrhantering. Dess port står i konflikt med en av dina virtuella servrars inkommande port.',
'lsipm2' : 'Ogiltig LAN-IP-adress. Det sista talet får inte vara 0 eller 255',
'lsldnm' : 'Ogiltigt lokalt domännamn: `~!@#$%^&*()_+[]{}\|;:\'"<>/?.,',
'lsipm5' : 'Den IP-adress du väljer ska inte vara en dirigerbar IP.\n  192.168.x.x (där x motsvarar ett tal mellan 0 och 255). \n10.x.x.x (där x motsvarar ett tal mellan 0 och 255).\n172.y.x.x (där y motsvarar ett tal mellan 16 och 31, och x ett tal mellan 0 och 255).',
'ufy4' : 'Det tar upp till 60 sekunder att återställa standardinställningarna. Stäng inte av strömmen till routern under tiden.',
'ufe11' : 'Efter uppgraderingen kan det hända att routern inte svarar på kommandon i upp till 180 sekunder. Detta är normalt. Stäng inte av eller starta om routern under tiden.',
'ur5' : 'Det kan ta upp till 30 sekunder innan routern har startats om. Stäng inte av routern innan återställningen har slutförts.',
'ur6' : 'Det kan ta upp till 60 sekunder innan routern har startats om. Stäng inte av routern innan återställningen har slutförts.',
'usys83' : 'Fälten Nytt lösenord och Bekräfta nytt lösenord stämmer inte överens.',
'usys83_1' : 'Lösenord och bekräftat lösenord stämmer inte överens.',
'usys85_1' : 'Administrationslösenordet ska vara mellan 3 och 12 tecken långt.',
'usys88' : 'Lösenordet har nu sin maximala längd!',
'usys89' : 'AM',
'usys90' : 'PM',
'usys92' : 'Portnumret för fjärråtkomst ska vara ett tal mellan 1 och 65535.',
'usysipm' : 'Du har antingen inte angett alla tal i IP-adressen, eller så är några av de angivna talen ogiltiga. IP-adressen anges enligt formatet x.y.y.z (där x är ett tal mellan 1 och 223, y är ett tal mellan 0 och 255 samt z är ett tal mellan 1 och 254).',
'self_healing60' : 'Självåterställning',
'chkwait' : 'Söker efter nyare inbyggd programvara...',
'Europe' : 'Europa',
'Australia' : 'Australien och Nya Zeeland',
'AsiaPacific' : 'Stillahavsregionen',
'NorthAmerica' : 'Nordamerika',
'vjs1' : 'Ogiltig IP-adress. Adressen är för lång. Kontrollera igen',
'vjs2' : 'Ogiltig IP-adress. \'.\' saknas. Kontrollera igen!',
'vjs3' : 'Ogiltig IP-adress. Tal mellan \'.\' saknas. Kontrollera igen!',
'vjs4' : 'Ogiltig IP-adress. Extra \'.\' . Kontrollera igen!',
'vjs5' : 'Ogiltig IP-adress. Talen mellan \'.\' är för stora. Kontrollera igen!',
'vm1' : 'Ogiltigt tecken ',
'vm2' : ' vid position ',
'vm3' : 'Måste vara ',
'vjs6' : 'Ogiltigt årsformat. Ange som (t.ex. 2002).',
'vm4' : 'Ogiltigt nummer ',
'vjs8' : 'Ogiltigt. Måste vara mellan 1970 och 2037.',
'vjs9' : 'Ogiltigt månadsformat. Ange som (mellan 01...12)',
'vjs161' : ' inte i ',
'vjs162' : ' nätmask',
'vjs163' : 'Tillåtet DHCP-intervall är: ',
'vjs17' : 'Du har angivit två olika lösenord. Dubbelkontrollera igen!',
'vjs18' : 'Ange startportnummer.',
'vjs19' : 'Startportnumret ska vara mindre än slutportnumret.',
'vjs23' : 'Ogiltig MAC-adress. Det är en broadcastadress.',
'vjs24' : 'Ogiltig MAC-adress: nulladress.',
'vjs25' : 'Ogiltig MAC-adress. Det är en multicastadress.',
'vjs26' : 'Ogiltig start- och slut-IP-adress. Slut-IP-adressen ska vara större än start-IP-adressen.',
'vjs28' : 'Ogiltigt nätmaskformat.',
'vjs29' : 'Ogiltigt format. Här måste nätmasken vara 255.255.255.0 eller 255.255.255.128 eller 255.255.255.192 eller 255.255.255.224 eller 255.255.255.240 eller 255.255.255.248 eller 255.255.255.252 eller 255.255.255.254',
'vjs30' : 'Ogiltig IP-adress. Det sista talet får inte vara 0 eller 255',
'vjs31' : 'Ogiltig LAN-IP-adress. Det första talet får inte vara 127',
'vjs32' : 'Ogiltig LAN-IP-adress. Får inte vara 0.0.0.0.',
'vjs33' : 'Ogiltig LAN-IP-adress. Måste vara lägre än 224.0.0.0',
'vjs42' : 'De angivna nätmasknumren är ogiltiga.',
'vjs45' : 'Ange IP-adress',
'vjs46' : 'är ogiltig. Korrigera den först.',
'wcc2' : 'Välj anslutningstyp:',
'wcc13' : 'L2TP',
'wcc14' : 'Vissa internetleverantörer använder L2TP-protokollet för att ansluta abonnenter till centralkontoret. Detta kräver att du anger ytterligare ett antal inställningar som internetleverantören bör ha tillhandahållit. När du har sparat ändringarna lyser internetindikatorn grönt om du har gjort en korrekt konfiguration.',
'wds4_1' : 'Primär DNS-adress',
'wds7' : 'Du måste ange de DNS-inställningar som du fått av internetleverantören om du inte använder den automatiska DNS-funktionen',
'wds8' : 'Besök först %s Website Filters %s och välj "No filters" (inga filter) för att göra DNS-ändringar.',
'wmc6' : 'MAC-adressen för WAN får inte vara samma som MAC-adressen för LAN. Välj en annan adress.',
'wdd9 ' : 'Ingen DDNS-tjänst har valts.\n',
'wdd10' : 'Ingen DDNS-tjänst har valts och samtliga data på denna sida kommer att förloras. Vill du fortsätta?',
'wm10b' : 'Används endast för de internetleverantörer som kräver L2TP som anslutningsmetod.',
'pm' : 'Tjänsten kunde inte verifiera det angivna lösenordet. Kontrollera att du har angett rätt lösenord.',
'wpp17' : 'L2TP-konto',
'wpp18' : 'L2TP-lösenord',
'wpp19' : 'Ange L2TP-konto',
'wpp23' : 'Tilldelning av IP-adress',
'wpp24' : 'Använd statisk IP-adress',
'wpp25' : 'Hämta dynamiskt från internetleverantör',
'wppa7' : 'Min IP-adress',
'wppa9' : 'Anslutnings-ID (valfritt)',
'wppa13' : 'Ange PPTP-konto',
'wppa18' : 'Ogiltigt tjänstnamn.',
'ws2' : 'Du anger dina statiska IP-inställningar genom att ange informationen nedan och klicka på ”Verkställ ändringar”.',
'sm_1' : 'De angivna nätmasken är ogiltig.',
'ws8' : 'Ange/bekräfta inställningarna för DNS-adressen på följande skärm',
'wt2' : 'Om du klickar på Verkställ ändringar startas routern om. När routern har startats om måste du göra följande',
'wt3' : '1) Koppla bort nätkabeln från både kabelmodemet och Belkin-routern',
'wt4' : '2) Anslut nätkabeln till kabelmodemet igen och vänta tills alla lampor på modemet har slutat blinka',
'wt5' : '3) Anslut nätkabeln till Belkin-routern igen',
'wt6' : 'Du kan kontrollera att du är ansluten till Internet genom att öppna en webbläsare, till exempel Internet Explorer, Firefox eller Safari, och se om du kan öppna några webbsidor.',
'wlad2' : 'Aktivera/inaktivera',
'wlc2' : 'Här kan du ändra routerns trådlösa inställningar. Spara inställningarna genom att klicka på ”Verkställ ändringar”.',
'wlcgb' : '802.11b+g',
'wlcg' : '802.11g',
'wlcb' : '802.11b',
'wlc20' : '20 MHz',
'wlc22' : '20/40 MHz',
'wlcoff' : 'AV',
'wlcngb1' : '802.11b och 802.11g och 1x1 802.11n',
'wlcn1' : '1x1 802.11n',
'wlcngb2' : '802.11b och 802.11g och 1x1 802.11n',
'wlcn2' : '802.11n',
'wlcgn' : '802.11g+n',
'wlca' : '802.11a',
'wlcan' : '802.11a och 802.11n',
'wlc26' : 'Om du döljer ditt nätverksnamn inaktiveras WPS.',
'wlc27' : 'Om du ändrar säkerhetstyp inaktiveras WPS.',
'wlc28' : 'WPS är inaktiverat på grund av din <A href=%s><B>säkerhetstyp för trådlös användning</B></A>.',
'wlc29' : 'WPS är inaktiverat på grund av att du har dolt ditt nätverksnamn (SSID).',
'wlc30' : 'WPS är inaktiverat på grund av att du har dolt ditt nätverksnamn (SSID).och på grund av din <A href=%s><B>säkerhetstyp för trådlös användning</B></A>.',
'wlc31' : 'Ditt nätverksnamn (SSID) tas fram om du slår på WPS.',
'wlc32' : 'Säkerhetstypen ändras till WPA/WPA2 om du slår på WPS. Ditt aktuella nätverkslösenord kommer att fungera bra.',
'wlc33' : 'Ditt nätverksnamn (SSID) tas fram och säkerhetstypen ändras till WPA/WPA2 om du slår på WPS. Ditt aktuella nätverkslösenord kommer att fungera bra.',
'wle3a' : 'WPA-PSK',
'wle3b' : 'WPA2-PSK',
'wle3c' : 'WPA-PSK + WPA2-PSK',
'wps1' : 'Wi-Fi Protected Setup (WPS)',
'wps3' : 'Konfigurera trådlös säkerhet',
'wps17' : 'För klientenheter som saknar WPS bör du köra Belkin Security Assistant från en CD eller manuellt konfigurera enheten med följande inställningar:',
'wps23' : 'WPA+WPA2-Personal (PSK)',
'wps25' : 'TKIP+AES',
'wps27' : 'Nätverksnyckel (WEP)',
'wps28_1' : 'NULL',
'wle11' : 'Nyckel 1',
'wle12' : 'Nyckel 2',
'wle13' : 'Nyckel 3',
'wle14' : 'Nyckel 4',
'wpskerr2' : 'Nyckeln måste vara mellan 8 och 63 tecken och kan innehålla mellanslag och symboler, eller endast 64 hexadecimalt (0-F)!',
'wpskerr4' : 'Du måste ange gästnyckel',
'wpskerr7' : 'Gästnyckeln måste innehålla 8 tecken',
'wpskerr8' : 'Gästnyckeln får inte vara samma som nätverksnyckeln',
'wlguest1' : 'SSID får inte vara samma som gäst-SSID',
'wlguest2' : 'Gäst-SSID får inte vara samma som SSID',
'rs_crc' : 'Fel vid återställning < CRC >',
'rs_long' : 'Fel vid återställning <too long>',
'rs_disposition' : 'Fel vid återställning <No Content-Disposition>',
'rs_getpid' : 'Fel vid återställning <Can\'t get pid!>',
'rs_unmatchpid' : 'Fel vid återställning <Unmatched pid>',
'msg_ddns3 ' : 'Fälten för domännamn får inte vara tomma.\n',
'msg_lan_dhcp1 ' : 'Begär information från nätporten.',
'msg_lan_dhcp2 ' : 'Uppdaterar konfigurationsdatabasen.',
'msg_wan_stat1 ' : 'IP-adressen ',
'msg_wan_stat2 ' : ' finns inte i ',
'msg_wan_stat3 ' : ' nätverket.',
'msg_wls_chan2 ' : 'Gäst-SSID får inte vara NULL!\n',
'fw_not_interrupt ' : 'AVBRYT INTE ROUTERNS ÅTGÄRDER OCH DRA INTE UR KONTAKTEN till den. Routern kan då sluta fungera.',
'msg_invalid_char ' : 'Ogiltigt/ogiltiga tecken hittades. Giltiga tecken är: 0-9, a-z, A-Z, `~!@#$%^&*()_-+=|\\{}[]:";\',.<>/?',
'msg_invalid_domain_char ' : 'Ogiltigt lokalt domännamn'+': ~!@#$%^&*()=+{}[]|":;\\\'?/<>,`',
'msg_invalid_char_1 ' : 'Ogiltigt/ogiltiga tecken hittades. Giltiga tecken är bokstäver och siffror. Följande symboler är ogiltiga: `~!@#$%^&*()_+[]{}\\|;:\'"<>/?.,',
'msg_hostIP_invalid ' : 'Värddatorns IP-adress är ogiltig. Den får inte vara routerns LAN-IP-adress.\n',
'msg_dmzIP ' : 'IP-adressen för DMZ',
'msg_blank ' : ' får inte vara tom.\n',
'msg_space ' : 'Tomma celler eller blanksteg är inte tillåtna i %s\n',
'msg_blank_in ' : 'Blanksteg är inte tillåtna i %s\n',
'msg_allspaces ' : '%s får inte innehålla enbart blanksteg\n',
'msg_invalid ' : 'Ogiltigt eller ogiltiga tecken i %s\nGiltiga tecken är: \n%s\n\n',
'msg_check_invalid ' : '%s innehåller en ogiltig siffra\n',
'msg_valid_range ' : '%s är ogiltigt. Giltigt intervall är %s till %s\n',
'msg_invalid_mac ' : 'Ogiltig MAC-adress.\n',
'msg_multi_mac' : 'MAC-adressen kan inte vara multicastadress.\n',
'msg_confirmDefault ' : 'Varning!\nOm du läser in fabriksinställningarna raderas alla aktuella inställningar.\nVill du fortsätta?',
'Allowed_Services' : 'Tillåtna tjänster',
'Allowing_Url' : 'Tillåta webbplats utifrån URL-adress ',
'Allowing_Keyword' : 'Tillåta webbplats utifrån nyckelord',
'wipv63' : 'Enheter som är anslutna till routern kan tala med varandra med användning av ursprungliga IPv6-paket. IPv6-paket på det lokala nätverket kommer automatiskt att skickas till alla LAN-gränssnitt (Ethernetportar och trådlösa nätverk med både 2,4 GHz och 5 GHz).',
'wipv64' : 'När IPv6 pass-through är aktiverat, kommer även IPv6-paket att kopieras till WAN-gränssnittet.(När detta är aktiverat skapas en direkt, oskyddad anslutning till Internet.)',
'wipv65' : 'Kontakta din internetleverantör för information om stöd för IPv6.',
'wipv67' : 'Internet IPv6',
'wipv68' : 'Ditt nätverk är kompatibelt med IPv6.',
'wipv69' : 'Pass-through',
'mf1' : 'Med dessa sidor kan du reglera hur din router ska arbeta när den får vissa typer av medietrafik.',
'mf2' : 'Optimera din Internetanslutning automatiskt för olika typer av trafik.',
'mf3' : 'Se hur din router används.',
'mf8' : 'Registrerat på %s',
'mf10' : 'Hämta',
'mf11' : 'Överför',
'mf12' : 'Hastighet',
'mf15' : 'Verkställ inställningar',
'mf18' : 'Ange ett tal mellan {0,1 - %s}.',
'mf20' : 'Enbart mellan {0,1-%s}.',
'mf26' : 'Manuellt registrerat på %s',
'mf32' : 'eller',
'mf44' : 'Resultaten från det automatiska hastighetstestet kanske inte är 100% exakta beroende på Internettrafik eller andra förhållanden. Om du vill jämföra resultaten kan du besöka en webbplats för hastighetstest eller kontakta din internetleverantör för att få dina hastigheter på Internet bekräftad. Om hastighetsresultaten varierar kan du ange värdena manuellt.',
'media_dlna18' : 'Namnlös',
'media_dlna21' : 'Du har mer media än din router kan indexera, så vi hanterar de första 12 000 objekten.',
'errSubnetMaskInvalid_2' : 'Nätmasken ser inte ut som en nätmask. Kontrollera värdet.',
'htWAN_L2TP' : 'L2TP-inställningar',
'htWAN_L2TPContent' : 'Vissa internetleverantörer använder L2TP-protokollet för att ansluta abonnenter till centralkontoret. Detta kräver att du anger ytterligare ett antal inställningar som internetleverantören bör ha tillhandahållit. När du har sparat ändringarna lyser internetindikatorn grönt om du har gjort en korrekt konfiguration.',
'p400t001_error' : 'Anslut allting mycket snabbare.',
'p400t018_error' : 'Varför borde jag byta namn?',
'p400t019_error' : 'Det här är vad du kommer att se när du letar efter ditt nätverk från andra enheter. Unika nätverksnamn är lättare att hitta och komma ihåg. Om dina trådlösa enheter tidigare var anslutna till en annan router och du använder samma nätverksnamn och lösenord här innebär det att du inte behöver ange något nytt för dem, utan de kommer att ansluta automatiskt. ',
'dhToggleBand2G' : 'Visa 2.4 Ghz',
'772' : 'Om du klickar på Verkställ ändringar startas routern om. När routern har startats om måste du göra följande',
'773' : '1) Koppla bort nätkabeln från både kabelmodemet och Belkin-routern',
'774' : '2) Återanslut nätkabeln till kabelmodemet och vänta tills alla lampor på modemet har slutat blinka',
'dft001' : 'Du verkar inte ha någon anslutning.',
'dft002' : 'Besök <strong>help.belkin.com</strong> om du behöver hjälp och har en ansluten enhet.',
'gtNoSecCard     ' : 'Skriv ned ditt nätverksnamn och lösenord och förvara det på en säker plats',
'gtFWUpdateMobileError' : 'Firmware-filer kan för närvarande inte laddas upp från mobila enheter.',
'gtSettingsMobileError' : 'Inställningsfiler kan för närvarande inte laddas upp från mobila enheter.',
'gtMoreFromInternet' : 'Anslut till internet för mer',
'gtCantConnect' : 'Vi kan inte ansluta till internet.',
'p802t004' : 'Gå till din enhets meny för trådlösa nätverk',
'p803t004' : 'Gå till din enhets meny för trådlösa nätverk',
'PIC-S1t001' : 'Blockera alla enheter',
'gtUnnamedDevice' : 'Namnlös enhet',
'gtIC' : 'Internetkontroll',
'errDefaultGatewayEmpty' : 'Standardgateway-adressen får inte vara tom.',
'errDefaultGatewayInvalid' : 'Standardgateway-adressen måste vara fyra tal (0–255) som separeras av punkter. Kontrollera värdet.',
'errDNSServerEmpty' : 'DNS-serveradressen får inte vara tom.',
'errDNSServerInvalid' : 'DNS-serveradressen måste vara fyra tal (0–255) som separeras av punkter. Kontrollera värdet.',
'errIpAddressEmpty' : 'IP-adressen får inte vara tom.',
'errIpAddressInvalid' : 'IP-adressen måste vara fyra tal (0–255) som separeras av punkter. Kontrollera värdet.',
'errorGenericCommitError' : 'Ett fel uppstod.  Korrigera inställningarna nedan och försök igen.',
'errorSSIDEmpty' : 'Ange ett namn för ditt trådlösa nätverk.',
'errorSSIDInvalidChars' : 'Nätverksnamnet får endast innehålla bokstäver, siffror, skiljetecken och mellanslag.',
'errorSSIDTooLong' : 'Nätverksnamnet måste vara kortare än 32 tecken.',
'errorWEPPasswordEmpty' : 'Ange ett lösenord för att skydda ditt trådlösa nätverk.',
'errorWEPPasswordInvalidChars' : 'Lösenordet till nätverket får endast innehålla siffror samt bokstäverna A till F.',
'errorWEPPasswordInvalidLength' : 'Lösenordet till nätverket måste vara 10 eller 26 tecken långt.',
'errorWPAPasswordEmpty' : 'Ange ett lösenord för att skydda ditt trådlösa nätverk.',
'errorWPAPasswordInvalidChars' : 'Lösenordet till nätverket får endast innehålla bokstäver, siffror, skiljetecken och mellanslag.',
'errorWPAPasswordInvalidLength' : 'Lösenordet till nätverket måste vara 8 till 63 tecken långt.',
'errPasswordEmpty' : 'Ange lösenord.',
'errPasswordInvalid' : 'Användarnamnet får endast innehålla bokstäver, siffror, skiljetecken och mellanslag.',
'errPasswordTooLong' : 'Lösenordet måste vara kortare än 64 tecken.',
'errServAddressEmpty' : 'Ange en tjänstadress.',
'errSubnetMaskEmpty' : 'Nätmasken får inte vara tom.',
'errSubnetMaskInvalid' : 'Nätmasken måste vara fyra tal (0–255) som separeras av punkter. Kontrollera värdet.',
'errUsernameInvalid' : 'Användarnamnet får endast innehålla bokstäver, siffror, skiljetecken och mellanslag.',
'errUsernameTooLong' : 'Användarnamnet måste vara kortare än 64 tecken.',
'errVCIInvalid' : 'Ange ett tal mellan 0 och 65535. Din internetleverantör kan ge dig rätt värde.',
'errVPIInvalid' : 'Ange ett tal mellan 0 och 255. Din internetleverantör kan ge dig rätt värde.',
'p802t003' : 'Eftersom vissa inställningar har ändrats kan du behöva välja det trådlösa nätverket igen:',
'p802t011' : 'Eftersom vissa inställningar har ändrats kan du behöva välja det trådlösa nätverket igen:',
'dft003' : 'Behöver du hjälp?',
'dft004' : 'Har du frågor eller behöver du support? Vårt hjälpcenter online tillhandahåller support dygnet runt.<br><a href="http://www.belkin.com/support/" id="dfBelkinHelp">Belkins hjälpcenter &rarr;</a>',
'dhChangeSSID' : 'Ändra &raquo;',
'dhPassLabel' : 'Lösenord:',
'dhPasswordObscured24' : 't********',
'dhShow' : 'Visa:',
'dhSSID24' : '{blahblah}',
'dhToggle24' : '2,4 GHz',
'dhToggle5' : '5,0 GHz',
'DownSpeed' : '32.6',
'errUsernameEmpty' : 'Ange användarnamn.',
'gt10am' : '10.00',
'gt10pm' : '22.00',
'gt11am' : '11.00',
'gt11pm' : '23.00',
'gt1am' : '01.00',
'gt1amNextDay' : '01.00 nästa dag',
'gt1pm' : '13.00',
'gt24ghz' : '2,4 GHz',
'gt24GKey' : '2,4 GHz-nyckel',
'gt24GName' : '2,4 GHz SSID',
'gt24PSK' : 'Lösenord',
'gt24Sec' : 'WPA2',
'gt24SSID' : '12345678',
'gt2am' : '02.00',
'gt2pm' : '14.00',
'gt3am' : '03.00',
'gt3pm' : '15.00',
'gt4am' : '04.00',
'gt4pm' : '16.00',
'gt50ghz' : '5 GHz',
'gt5am' : '05.00',
'gtGuestKey' : 'Gästnyckel',
'gt5GMedia' : 'Ditt 5 GHz-band har samma namn, fast med tillägget ".media" i slutet.',
'gtGuestName' : 'Gäst-SSID',
'gt5pm' : '17.00',
'gt6am' : '06.00',
'gt6pm' : '18.00',
'gt7am' : '07.00',
'gt7pm' : '19.00',
'gt8am' : '08.00',
'gt8pm' : '20.00',
'gt9am' : '09.00',
'gt9pm' : '21.00',
'gtAccessControl' : 'Föräldrakontroll av internet',
'gtAccessPoint' : 'Använd som åtkomstpunkt',
'gtADSL' : 'ADSL',
'gtAdvSettings' : 'Avancerade inställningar',
'gtAllElseFails' : 'Om inget annat fungerar kan du kontakta Belkins support in&nbsp;',
'gtAndroidConnect01' : 'Androidtelefoner och -surfplattor',
'gtAndroidConnect02' : 'Din enhet har en meny med tillgängliga trådlösa nätverk i appen Settings (Inställningar).',
'gtAndroidConnect03' : 'Öppna appen <strong>Settings</strong> (Inställningar) och välj <strong>Wireless and network</strong> (Trådlöst och nätverk).',
'gtAndroidConnect04' : 'Välj <strong>Wi-Fi</strong> så öppnas en lista över tillgängliga nätverk.',
'gtAndroidConnect05' : 'Välj <strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong>. <!-- IF NOT OPEN --> <span tid="gtNotOpen">Ange vid behov nätverkslösenordet <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>.</span> <!-- /IF -->',
'gtAt' : 'vid',
'gtAttenuation' : 'Dämpning',
'gtAustralia' : 'Australien',
'gtBackToDashboard' : '&larr; Tillbaka till Dashboard',
'gtBelkin' : 'Belkin',
'gtBootLoader' : 'Startinläsaren',
'gtCantConnect' : 'Det går inte att ansluta till din internetleverantör.',
'gtCantConnectNoResponse' : 'Det går inte att ansluta till internet. Din internetleverantör svarade inte.',
'gtChina' : 'Kina',
'gtClientList' : 'Anslutna enheter',
'gtClose' : 'Stäng',
'gtConfig' : 'Konfigurera',
'gtConfigureRouter' : 'Konfigurera router',
'gtConnDevices' : 'Anslutna enheter',
'gtConnectingToNew' : 'Ansluta till ditt nya nätverk',
'gtConnectionDet' : 'Anslutningsuppgifter',
'gtConnType' : 'Anslutningstyp',
'gtContentFiltering' : 'Webbplatsfilter',
'gtCopyright' : 'Copyright &copy; 2012. Belkin. Med ensamrätt.',
'gtCurrTimezone' : 'Europa/Helsingfors {REPLACE THIS SPAN WITH DETECTED Belkin TZ ID description}',
'gtDashboard' : '&larr; Dashboard',
'gtDashTitle' : 'Dashboard för Belkin-router',
'gtDataRate' : 'Datahastighet',
'gtDDNS' : 'DDNS',
'gtDHCPList' : 'Anslutna enheter',
'gtDHCPServer' : 'DHCP-server',
'gtDMZ' : 'DMZ',
'gtDNS' : 'DNS',
'gtDown' : 'Ned',
'gtDownloadSpeed' : 'Nedladdningshastighet',
'gtEncap' : 'Inkapsling:',
'gtFileInstallError' : 'Filen kunde inte installeras – det kanske är fel filtyp',
'gtFileLoadError' : 'Filen kunde inte läsas in – det kanske är fel filtyp',
'gtFirewall' : 'Brandvägg',
'gtFirmware' : 'Inbyggd programvara',
'gtFirmwareUpdate' : 'Uppdatering av inbyggd programvara',
'gtFrance' : 'Frankrike',
'gtFreshest' : 'Vi hämtar den senaste versionen av vår inbyggda programvara...',
'gtFrom' : 'Från:',
'gtFWUpdate' : 'Uppdatering av inbyggd programvara',
'gtFWUpToDate' : 'Den inbyggda programvaran är nu uppdaterad.',
'gtGermany' : 'Tyskland',
'gtGuestAccess' : 'Gästbehörighet',
'gtGuestNetwork' : 'Gästnätverk',
'gtHomeNetwork' : 'Hemnätverk',
'gtIfYouKnowConnection1' : 'Om du vet vad du har för anslutningstyp kan du <a href="700-SelectConnection.htm" id="ISP1a010">ställa in den manuellt &raquo;</a>',
'gtIfYouKnowConnection2' : 'Om du vet vad du har för anslutningstyp kan du <a href="700-SelectConnection.htm" id="ISP2a010">ställa in den manuellt &raquo;</a>',
'gtIfYouKnowConnection3' : 'Om du vet vad du har för anslutningstyp kan du <a href="700-SelectConnection.htm" id="ISP3a010">ställa in den manuellt &raquo;</a>',
'gtIfYouKnowConnection4' : 'Om du vet vad du har för anslutningstyp kan du <a href="700-SelectConnection.htm" id="ISP4a010">ställa in den manuellt &raquo;</a>',
'gtIfYouKnowConnection4a' : 'Om du vet vad du har för anslutningstyp kan du <a href="700-SelectConnection.htm" id="ISP4aa010">ställa in den manuellt &raquo;</a>',
'gtIfYouKnowConnection5' : 'Om du vet vad du har för anslutningstyp kan du <a href="700-SelectConnection.htm" id="ISP5a010">ställa in den manuellt &raquo;</a>',
'gtIfYouKnowConnection6' : 'Om du vet vad du har för anslutningstyp kan du <a href="700-SelectConnection.htm" id="ISP6a010">ställa in den manuellt &raquo;</a>',
'gtIfYouKnowConnection7' : 'Om du vet vad du har för anslutningstyp kan du <a href="700-SelectConnection.htm" id="ISP7a010">ställa in den manuellt &raquo;</a>',
'gtIntellistream' : 'IntelliStream',
'gtInterleavePath' : 'Sökväg för överlagring',
'gtInternetSettings' : 'Internetinställningar',
'gtIOSConnect01' : 'iPhone, iPad och iPod touch',
'gtIOSConnect02' : 'Din enhet har en meny med tillgängliga trådlösa nätverk i appen Settings (Inställningar).',
'gtIOSConnect03' : 'Öppna appen <strong>Settings</strong> (Inställningar) och välj <strong>Wi-Fi</strong>.',
'gtIOSConnect04' : 'Välj <strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong> i nätverkslistan. <!-- IF NOT OPEN --> <span tid="gtNotOpen">Ange vid behov nätverkslösenordet <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>.</span> <!-- /IF -->',
'gtIPv6' : 'IPv6',
'gtIPV6Connection' : 'IPv6-anslutning',
'gtISP' : 'Typ av anslutning till internetleverantör',
'gtJapan' : 'Japan',
'gtLANIP' : 'LAN-IP-adress',
'gtLANMAC' : 'LAN/WLAN-MAC-adress',
'gtLANSettings' : 'LAN-inställningar',
'gtLANSubnet' : 'LAN-nätmask',
'gtLLC' : 'LLC',
'gtLoadPrevSettings' : 'Läs in tidigare gjorda inställningar',
'gtLocalNetwork' : 'Lokalt nätverk',
'gtLocalSettings' : 'Inställningar för lokalt nätverk',
'gtLocked' : 'låst',
'gtMACAddress' : 'MAC-adress',
'gtMACAddressFiltering' : 'Filtrering av MAC-adresser',
'gtMacConnect01' : 'Mac OS X',
'gtMacConnect02' : 'I datorn finns en meny med tillgängliga trådlösa nätverk till höger på menyraden.',
'gtMacConnect03' : 'Klicka på ikonen med trådlösa vågor.',
'gtMacConnect04' : 'Välj <strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong> i nätverkslistan. <!-- IF NOT OPEN --> <span tid="gtNotOpen">Ange vid behov nätverkslösenordet <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>.</span> <!-- /IF -->',
'gtMaybeLater' : 'Kanske senare',
'gtMbitPerSec' : 'Mbit/s',
'gtMeaning' : 'Vad innebär detta?',
'gtMedia' : 'Media',
'gtMediaServer' : 'Medieserver',
'gtmidnight' : '24.00',
'gtModel' : 'Modell',
'gtName' : 'Namn',
'gtNeedMoreHelp' : 'Behöver du mer hjälp?',
'gtNetName' : 'Nätverksnamn',
'gtNewFWAvailableModem' : 'Vi har ny inbyggd programvara för ditt modem.',
'gtNewFWAvailableRouter' : 'Vi har ny inbyggd programvara för din router.',
'gtNewFWAvailableRouterAndModem' : 'Vi har ny inbyggd programvara för din router och ditt modem.',
'gtNext' : 'Nästa',
'gtNo' : 'Nej',
'gtNoiseMargin' : 'Brusmarginal',
'gtNoMyNet' : 'Jag ser inte mitt nätverk',
'gtNoon' : '12.00',
'gtNoSecCard' : 'Skriv ned ditt nätverksnamn och lösenord och förvara det på en säker plats.',
'gtNotOpen' : 'Ange vid behov nätverkslösenordet <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>.',
'gtNZ' : 'Nya Zeeland',
'gtOffline' : 'Offline',
'gtOnline' : 'Online',
'gtOptionalSoftware' : 'Valfri programvara',
'gtOptionalSW' : 'Valfri programvara',
'gtOptSW' : 'Valfri programvara',
'gt-OR-' : '-ELLER-',
'gtOther' : '...',
'gtOutputPower' : 'Uteffekt',
'gtParentalControls' : 'Föräldrakontroll',
'gtPass' : 'Lösenord:',
'gtPIC' : 'Föräldrakontroll av internet',
'gtPICOtherTimes' : 'Övriga tider kommer enheten inte att ha åtkomst till internet.',
'gtPleaseCallISP' : 'Ring din internetleverantör',
'gtPortForwarding' : 'Portvidarebefordan',
'gtPrint' : 'Skriv ut',
'gtReadAllAboutIt' : 'Mer hjälp:',
'gtReconnectingHell' : 'Återansluter…',
'gtRegister' : 'Registrera',
'gtRegistration' : 'Registrering',
'gtRestartRouter' : 'Starta om routern',
'gtRestoreDef' : 'Återställ standardinställningar',
'gtRestoreFactDefault' : 'Återställ fabriksinställningar',
'gtRestoreFactDefaults' : 'Återställ fabriksinställningar',
'gtRestoreSettigns' : 'Återställ inställningar',
'gtRetest' : 'Testa anslutningen igen',
'gtRouterDetails' : 'Routeruppgifter',
'gtRouterInfo' : 'Routerinfo',
'gtSave' : 'Spara',
'gtSaveCurrentSettings' : 'Spara aktuella inställningar',
'gtSaved' : 'Namnlös enhet sparad',
'gtSaveRestore' : 'Spara/återställ inställningar',
'gtSaveRestoreSettings' : 'Spara/återställ inställningar',
'gtSaveSettings' : 'Spara/säkerhetskopiera inställningar',
'gtSecLog' : 'Säkerhetslogg',
'gtSecurity' : 'Säkerhet',
'gtSelectLang' : 'Välj språk:',
'gtSelfHeal' : 'Självåterställning',
'gtSelfHealing' : 'Självåterställning',
'gtSerialSupport' : 'På nästa sida registrerar vi routerns serienummer för supportändamål.',
'gtShowtime' : 'Starttid',
'gtSpeedTestResults' : 'Senaste kontroll: för 1 dag sedan kl. 15.57',
'gtStaticRouting' : 'Statisk routning',
'gtStatus' : 'Status',
'gtSystemSettings' : 'Systeminställningar',
'gtTo' : 'Till:',
'gtTraffStats' : 'Trafikstatistik',
'gtTryAgain' : 'Försök igen',
'gtUnlocked' : 'upplåst',
'gtUp' : 'Upp',
'gtUpdate' : 'uppdatera',
'gtUpdateNoPowerModem' : 'Vi uppdaterar ditt modem med den nya inbyggda programvaran. Stäng inte av strömmen medan detta pågår.',
'gtUpdateNoPowerRouter' : 'Vi uppdaterar din router med den nya inbyggda programvaran. Stäng inte av strömmen medan detta pågår.',
'gtUploadSpeed' : 'Uppladdningshastighet',
'gtUSA' : 'USA',
'gtUserName' : 'Användarnamn:',
'gtUtils' : 'Verktyg',
'gtVCI' : 'VCI:',
'gtVCMUX' : 'VC/MUX',
'gtVPI' : 'VPI:',
'gtWAN' : 'WAN-inställningar',
'gtWANDNS' : 'DNS-adress',
'gtWANGateway' : 'WAN-gateway',
'gtWANIP' : 'WAN-IP-adress',
'gtWANMAC' : 'WAN-MAC-adress',
'gtWANPingBlocking' : 'Blockering av WAN-pingmeddelanden',
'gtWANSubnet' : 'WAN-nätmask',
'gtWebsiteFilter' : 'Webbplatsfilter',
'gtWelcome' : 'Välkommen',
'gtWiFi' : 'WiFi',
'gtWifiSettings' : 'Dina WiFi-inställningar är nu ändrade.',
'gtWinConnect01' : 'Windows 7 eller 8',
'gtWinConnect02' : 'På datorn finns det en meny med tillgängliga trådlösa nätverk till höger i aktivitetsfältet.',
'gtWinConnect03' : 'Högerklicka på ikonen som visar signalstyrkan.',
'gtWinConnect04' : 'Välj <strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong>. <!-- IF NOT OPEN --> <span tid="gtNotOpen">Ange vid behov nätverkslösenordet <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>.</span> <!-- /IF -->',
'gtWinConnect05' : 'Windows Vista och Windows XP',
'gtWinConnect06' : 'På datorn finns det en meny med tillgängliga trådlösa nätverk till höger i aktivitetsfältet.',
'gtWinConnect07' : 'Högerklicka på den ikon som ser ut som en dator med trådlösa vågor (XP) eller två datorer (Vista).',
'gtWinConnect08' : 'Välj <strong>Visa tillgängliga trådlösa nätverk</strong> (XP) eller <strong>Anslut till ett nätverk</strong> (Vista) på menyn.',
'gtWinConnect09' : 'Välj <strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong>. <!-- IF NOT OPEN --> <span tid="gtNotOpen">Ange vid behov nätverkslösenordet <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>.</span> <!-- /IF -->',
'gtWireless' : 'Trådlöst',
'gtWiring' : 'Kopplingar',
'gtWPSShort' : 'WPS',
'gtWPS' : 'Wi-Fi Protected Setup',
'gtYes' : 'Ja',
'htFWUpdate' : 'Vad är uppdateringar av inbyggd programvara?',
'htFWUpdateContent' : 'Då och då släpper Belkin nya versioner av routerns inbyggda programvara. Uppdateringarna innehåller förbättringar och korrigeringar för routern.<br><br>OBS! Säkerhetskopiera nuvarande inställningar innan du uppdaterar till en ny version av inbyggd programvara.',
'htParent' : 'Var är webbplatsfiltret?',
'htPIC' : 'Din internetkontroll',
'htPICBlocked' : 'Ingen åtkomst till internet',
'htPICBlockedContent' : 'Återställ åtkomsten när du är beredd att återansluta alla enheter till internet.',
'htPICContent' : 'Med internetkontroll kan du nu anpassa när du vill blockera internetåtkomst för respektive enhet.',
'htSaveRestore' : 'Vad innebär det att spara, läsa in eller återställa inställningar?',
'htSaveRestoreContent' : 'Routern minns inställningar som till exempel nätverksnamn och lösenord. Dessa inställningar kan sparas (som säkerhetskopia) och sedan läsas in på routern igen. Routern kan även återställas till fabriksinställningarna.',
'htSaveRestoreContentMobile' : '<br>* På iPhone, iPad och iPod touch går det inte att spara och läsa in inställningsfiler. Du kan spara och läsa in en inställningsfil ändå med hjälp av en annan enhet, till exempel en bärbar dator.',
'ISP1t003' : 'Berätta att din router kunde få en IP-adress men DNS fungerar inte.',
'ISP1t007' : 'DNS översätter namn som "belkin.com" till numeriska adresser (IP-adresser) som datorer använder för att navigera på internet. Din router har en IP-adress, vilket innebär att den är ansluten till internet, men DNS fungerar inte och du kan därför inte surfa. Detta pekar på ett fel hos din internetleverantör.  <span class="nub"></span>',
'ISP2t003' : 'Berätta att din router kunde få en IP-adress och att DNS fungerar, men att vi inte kan pinga någon.',
'ISP2t007' : 'Vi "pingar" andra maskiner på internet för att testa om vi kan kommunicera med dem. DNS översätter namn som "belkin.com" till numeriska adresser (IP-adresser) som datorer använder för att navigera på internet. Din router har en IP-adress, vilket betyder att den är ansluten till internet, och den DNS som din internetleverantör tillhandahåller fungerar, men vi kan inte pinga. Detta pekar på ett fel hos din internetleverantör.<span class="nub"></span>',
'ISP3t004' : 'Berätta att ditt användarnamn och lösenord godkändes men att du ändå inte har någon internetanslutning.',
'ISP3t007' : 'Vi "pingar" andra maskiner på internet för att testa om vi kan kommunicera med dem. Din internetleverantör godkände ditt användarnamn och lösenord, men vi kan inte pinga och därför kan du inte surfa. Detta pekar på ett fel hos din internetleverantör.  <span class="nub"></span>',
'ISP4t003' : 'Berätta att ditt användarnamn och lösenord inte godkändes efter ett par försök.',
'ISP4t007' : 'Din internetanslutning kräver användarnamn och lösenord, men din internetleverantör godkände inte det du angav. Din internetleverantör kommer att kunna kontrollera att du har rätt information.  <span class="nub"></span>',
'ISP5t003' : 'Berätta att du har valt en dynamisk anslutning, men att du inte kunde få någon IP-adress.',
'ISP5t007' : 'En IP-adress identifierar en router eller andra enheter på internet. Din internetleverantör ger inte någon IP-adress till routern. Utan IP-adress kan du inte ansluta. Detta pekar på ett fel hos din internetleverantör, eller att din anslutning inte är en dynamisk anslutning.  <span class="nub"></span>',
'ISP6t003' : 'Berätta att du har valt en statisk anslutning men att du inte kunde ansluta till internet.',
'ISP6t007' : 'Vi använder en statisk anslutning när din internetleverantör har gett dig en eller flera specifika IP-adresser att använda.  <span class="nub"></span>',
'ISP7t003' : 'Ange att dina VPI/VCI-inställningar inte fungerar och att du vill ha rätt siffror från leverantören.',
'ISP7t007' : 'VPI och VCI anger vilken sökväg routern ska använda för att kommunicera med internetleverantören. Vi kunde inte hitta rätt inställningar. <span class="nub"></span>',
'Network24Passkey' : '{REPLACE WITH 2.4 PASSWORD}',
'Network24SSID' : '{REPLACE WITH 2.4 SSID}',
'p100t002' : 'Nu är det dags att ansluta till internet.',
'p100t003' : 'Du har anslutit till den nya routern. Nu ska vi få den att kommunicera med din internetleverantör.',
'p100t004' : 'Nu är det dags att ansluta till internet.',
'p100t005' : 'Du har anslutit till den nya routern. Nu ska vi få den att kommunicera med din internetleverantör.',
'p100t007' : 'Upptäck min anslutning',
'p100t008' : 'Om du är säker på din anslutningstyp kan du <a href="700-SelectConnection.htm" id="p100a009" tid="p100t009">ställa in den manuellt &raquo;</a> eller gå direkt till <a href="000-Dashboard.htm" id="p100a010" tid="p100t010">Dashboard &raquo;</a>.',
'p100t009' : 'ställa in den manuellt &raquo;',
'p100t010' : 'Dashboard &raquo;',
'p100t013' : 'Just nu visar vi sidorna in&nbsp;',
'p100t024' : 'En nästan automatisk installation',
'p100t025' : 'Först kommer vi att kontrollera dina anslutningar automatiskt samt ta reda på vilken typ av uppkoppling du har med din internetleverantör. Du kommer inte att behöva göra särskilt mycket. Därefter kontrollerar vi att programvaran i routern är uppdaterad. <span class="nub"></span>',
'p1010MRt001' : 'Vi kan inte kommunicera med ditt modem.',
'p1010MRt002' : 'Vi tror att det är ett kopplingsfel.',
'p1010MRt003' : 'Gör så här för att försöka lösa problemet:',
'p1010MRt004' : 'Kontrollera att modemroutern är ansluten till ett telefonjack med internetanslutning. En nätverkskabel ska vara ansluten mellan ADSL-porten på modemroutern (den grå porten på ovansidan) och telefonjacket.',
'p1010MRt005' : 'Kontrollera att modemet är på. Modemets nätadapter ska vara inkopplad i båda ändarna, och en eller flera lampor ska lysa på modemet.',
'p1010MRt006' : 'Det ska finnas en nätverkskabel som ansluter modemet till den gula porten på routern. Kabeln överför signalen från modemet till routern. Utan den kan du inte komma ut på nätet.',
'p1010MRt007' : 'Om båda dessa är OK kan du pröva med att starta om modemet genom att koppla bort strömmen och vänta femton sekunder innan du kopplar in den igen. Om modemet har ett batteri kanske du måste leta reda på modemets återställningsknapp och använda den i stället.',
'p1010MRt008' : 'Så ska anslutningarna se ut:',
'p1010MRt009' : 'Vi kommer att fortsätta att söka efter en anslutning medan du kontrollerar detta.',
'p1010MRt010' : 'Kopplingsproblem uppstår oftast mellan modemet och routern. Det är viktigt att kontrollera båda kabelns ändar. Den ena änden ska vara inkopplad i den gula porten på den nya routern. Den andra änden ska anslutas till en liknande port på modemet. Olika modemtillverkare märker portarna på olika sätt. Det kan stå "data", "LAN", "network" eller "Ethernet".  <span class="nub"></span>',
'p1020t001' : 'Vi kan inte kommunicera med din internetleverantör.',
'p1020t002' : 'Starta om modemroutern.',
'p1020t003' : 'Ingen internetanslutning kan upprättas, så modemroutern bör startas om.',
'p1020t004' : 'Stäng av modemroutern. Detta sker vanligtvis med en strömbrytare på modemroutern eller genom att helt enkelt koppla ur strömmen.',
'p1020t005' : 'Vänta i 15 sekunder.',
'p1020t006' : 'Slå på modemroutern igen.',
'p1020t007' : 'Efter några sekunder tänds lamporna och den försöker kommunicera med internetleverantören.',
'p1020t008' : 'Kontakta internetleverantören för att felsöka ditt konto om problemet kvarstår.',
'p1020t009' : 'Vi väntar medan modemroutern stängs av och slås på igen och därefter fortsätter vi automatiskt.',
'p1020t010' : 'Varför behöver modemet startas om?',
'p1020t011' : 'Vissa modem behöver startas om för att kunna kommunicera med en ny router eller en okänd dator. Om det uppstår problem hos din internetleverantör kan modemet tappa anslutningen utan förvarning. Vi kan se modemet men inte internet. Därför bör det hjälpa om du startar om det.<span class="nub"></span>',
'p1100t001' : 'Det finns en uppdatering av den inbyggda programvaran.',
'p1100t002' : 'Vi rekommenderar att du uppgraderar din router till den senaste inbyggda programvaran för att allt ska fungera korrekt.',
'p1100t003' : 'Visa mig vad som är nytt',
'p1201t001' : 'Lås Dashboard med ett lösenord.',
'p1201t002' : 'Ange ett lösenord för att låsa Dashboard:',
'p1201t003' : 'Ange ett lösenord.',
'gtSetPassword' : 'Välj lösenord',
'p1201t005' : 'Avbryt',
'p1210t001' : 'Dashboard är låst.',
'p1210t002' : 'Ange lösenord:',
'p1210t003' : 'Ange lösenord.',
'p1210t004' : 'Lösenordet är felaktigt.',
'p1210t005' : 'Släpp in mig!',
'p1300t001' : 'Lite mer kraft.',
'p1300t002' : 'Du kan få ut mer av din internetanslutning genom att ställa in Intellistream. Detta innebär att du måste köra ett hastighetstest.',
'p1300t003' : 'Ställ in Intellistream',
'p1300t004' : 'Kanske senare',
'p1302t001' : 'Den inbyggda programvaran är uppdaterad.',
'p1316t001' : 'Det gick inte att installera den uppdaterade inbyggda programvaran. Försök igen genom att klicka på "Check for New Firmware" (Sök efter ny inbyggd programvara).',
'p1318t001' : 'Uppgraderingsfilen är inte av rätt typ eller version för den här enheten. Uppgraderingen misslyckades. Hämta rätt fil och försök igen.',
'p1333t001' : 'Den inbyggda programvaran har uppdaterats.',
'p1400t001' : 'Dra full nytta av din USB-anslutning.',
'p1400t002' : 'Det finns en del valfri programvara som du kan installera som hjälper dig att få ut mesta möjliga av din routers USB-port.',
'p1400t003' : 'Visa mig den valfria programvaran',
'p1500t001' : 'Du är här.',
'p1500t002' : 'Du verkar befinna dig i tidszonen <span tid="gtCurrTimezone">Europa/Helsingfors {REPLACE THIS SPAN WITH DETECTED Belkin TZ ID description}</span>. Stämmer det?',
'p1500t003' : 'Det stämmer',
'p1500t004' : 'Låt mig välja',
'p200t001' : 'Upprättar en anslutning...',
'p200t002' : ' Vi kontrollerar de fysiska anslutningarna till din router.',
'p202At001' : 'Arbetar fortfarande...',
'p202At002' : ' Vi tar reda på din internetleverantörs typ av anslutning. Det kan ta några minuter.',
'p202Bt001' : 'Arbetar fortfarande...',
'p202Bt002' : ' Kontrollerar om din internetleverantör kräver ett lösenord. Det kan ta några minuter.',
'p202Ct001' : 'Arbetar fortfarande...',
'p202Ct002' : ' Testar anslutningen nu.',
'p202t001' : 'Upprättar en anslutning...',
'p202t002' : ' Vi tar reda på din internetleverantörs typ av anslutning.',
'p208t001' : 'Har du VPI/VCI-nummer inom räckhåll?',
'p208t002' : 'Du måste ange VPI- och VCI-nummer innan du kan ansluta till internet. De innehåller information om vilken sökväg din internetleverantör vill att du ska använda för kommunikation.',
'p208t003' : 'Du bör ha fått dessa nummer från din internetleverantör. Ring internetleverantören om du inte kan hitta dem.',
'p208t006' : '0',
'p208t007' : '0',
'p208t009' : 'Testa min anslutning',
'p208t011' : 'VPI och VCI',
'p208t012' : 'Med Virtual Path Identifier och Virtual Circuit Identifier får routern information om vilken sökväg som ska användas för att kommunicera med internetleverantören. Det finns några vanliga inställningar som vi provar automatiskt innan vi ber dig om hjälp.<span class="nub"></span>',
'p209t001' : 'Det är något fel med de här inställningarna.',
'p209t002' : 'Din internetleverantör godkänner inte dessa VPI/VCI-nummer. En gång till?',
'p210CXt001' : 'Du har en PPPoE-anslutning.',
'p210CXt002' : 'Du behöver ett användarnamn och ett lösenord för att ansluta till internet.',
'p210CXt004' : '<strong>Du bör ha fått dessa uppgifter från din internetleverantör. Kontakta din internetleverantör om du inte kan hitta dem.</strong>',
'p210CXt006' : '0',
'p210CXt007' : '0',
'p210CXt016' : 'Testa min anslutning',
'p210CXt017' : 'PPPoE',
'p210CXt018' : 'Med Point-to-Point Protocol over Ethernet skapas en säker anslutning mellan routern och internetleverantören. Det används som regel av telefonbolag.<span class="nub"></span>',
'p210DXt001' : 'Du har en PPPoA-anslutning.',
'p210DXt002' : 'Du behöver ett användarnamn och ett lösenord för att ansluta till internet.',
'p210DXt004' : '<strong>Du bör ha fått dessa uppgifter från din internetleverantör. Kontakta din internetleverantör om du inte kan hitta dem.</strong>',
'p210DXt006' : '0',
'p210DXt007' : '0',
'p210DXt016' : 'Testa min anslutning',
'p210DXt017' : 'PPPoA',
'p210DXt018' : 'Med Point-to-Point Protocol over ATM skapas en säker anslutning mellan routern och internetleverantören. Det används som regel av telefonbolag.<span class="nub"></span>',
'p210t001' : 'Du har en PPPoE DSL-anslutning.',
'p210t002' : 'Du behöver ett användarnamn och ett lösenord för att ansluta till internet.',
'p210t003' : '<strong>Du bör har fått dessa uppgifter från din internetleverantör. Kontakta din internetleverantör om du inte kan hitta dem.</strong>',
'p210t005' : 'Användarnamn från internetleverantör:',
'p210t009' : 'Testa min anslutning',
'p210t010' : 'PPPoE',
'p210t011' : 'Med Point-to-Point Protocol over Ethernet skapas en säker anslutning mellan routern och internetleverantören. Det används som regel av telefonbolag.<span class="nub"></span>',
'p211t001' : 'Upprättar en anslutning...',
'p211t002' : ' Vi försöker logga in hos din internetleverantör. Detta kan ta upp till två minuter eller mer.',
'p212DXt001' : 'Det är något fel med dina PPPoA-inställningar.',
'p212DXt002' : 'Användarnamn, lösenord eller båda delar är felaktiga. Försök igen. Kontakta din internetleverantör om du inte kan hitta rätt information.',
'p212t001' : 'Något är fel med dina PPPoE-inställningar.',
'p212t002' : 'Användarnamn, lösenord eller båda delar är felaktiga. Försök igen. Kontakta din internetleverantör om du inte kan hitta rätt information.',
'p220t002' : 'Upprätta anslutningen och få åtkomst till internet genom att ange användarnamn, lösenord och tjänstadress.',
'p220t003' : '<strong>Du bör ha fått dessa uppgifter från din internetleverantör. Kontakta din internetleverantör om du inte kan hitta dem.</strong>',
'p220t006' : 'Användarnamn från internetleverantör:',
'p220t007' : 'Tjänstadress:',
'p220t010' : 'Testa min anslutning',
'p220t013' : 'Du har en L2TP- eller PPTP-anslutning.',
'p220t014' : 'Eller välj anslutning manuellt &raquo;',
'p220t015' : 'L2TP och PPTP',
'p220t016' : 'Med både L2TP (Layer 2 Tunneling Protocol) och PPTP (Point-to-Point Tunneling Protocol) skapas en privat och krypterad anslutning mellan dig och din internetleverantör.<span class="nub"></span>',
'p221t001' : 'Upprättar en anslutning...',
'p221t002' : ' Vi försöker logga in hos din internetleverantör. Detta kan ta upp till två minuter.',
'p222t002' : 'Användarnamn, lösenord eller båda delar är felaktiga. Försök igen. Kontakta din internetleverantör om du inte kan hitta rätt information.',
'p222t004' : 'Det är något fel med dina inställningar.',
'p2300t001' : 'Installerad version av inbyggd programvara:',
'p2300t002' : 'Uppdatera inbyggd programvara från lokalt sparad fil:',
'p2300t006' : 'Vill du installera {{file}}?',
'p2300t010' : 'Sök efter ny inbyggd programvara',
'p2400t006' : 'Dina aktuella inställningar kommer att ersättas. Vill du läsa in {{file}}?',
'p2410t001' : 'Vill du återställa fabriksinställningarna?',
'p2410t002' : 'Om du klickar på "Yes" (Ja) raderas routerinställningar som namn och lösenord. De ersätts med fabriksinställningarna.',
'p300t005' : 'Du är nu online.',
'p310t001' : 'Det finns en uppdatering.',
'p310t001x' : 'Den här uppdateringen (v2.1.0c) omfattar:',
'p310t002' : 'Läs och godkänn licensavtalet för att börja installera den nya inbyggda programvaran.',
'p310t003' : 'Licensavtal',
'p310t004' : 'Jag godkänner licensavtalet.',
'p310t005' : 'Installera uppdatering',
'p310t006' : 'Vad är inbyggd programvara?',
'p310t007' : 'Inbyggd programvara är den programvara som din router använder. Vi uppdaterar programvaran för att förbättra routerns prestanda och därför är det bra att kontrollera att du har den senaste versionen.  <span class="nub"></span>',
'p315t001' : 'Laddar ner ny inbyggd programvara.',
'p315t002' : 'Nedladdningsförlopp:',
'p315t003' : 'Vad är inbyggd programvara?',
'p315t004' : 'Inbyggd programvara är den programvara som din router använder. Vi uppdaterar programvaran för att förbättra routerns prestanda och därför är det bra att kontrollera att du har den senaste versionen.  <span class="nub"></span>',
'p320t001' : 'Installerar ny inbyggd programvara.',
'p320t002' : 'När den nya inbyggda programvaran har installerats kommer vi att starta om routern så att installationen kan slutföras.',
'p320t004' : 'Vad är inbyggd programvara?',
'p320t005' : 'Inbyggd programvara är den programvara som din router använder. Vi uppdaterar programvaran för att förbättra routerns prestanda och därför är det bra att kontrollera att du har den senaste versionen.  <span class="nub"></span>',
'p320t006' : 'Detta tar cirka 3 minuter. Uppdateringsförlopp:',
'p320t010' : 'När den nya inbyggda programvaran har installerats kommer vi att starta om modemet så att installationen kan slutföras.',
'p321t001' : 'Startar om routern',
'p321t002' : 'Startar om modemet',
'p321t003' : 'Nu när programvaran har installerats måste vi starta om din router för att slutföra installationen.',
'p321t004' : 'Startar om:',
'p321t005' : 'Uppdateringar av inbyggd programvara',
'p321t006' : 'Inbyggd programvara är den programvara som används för att implementera nätverks- och säkerhetsprotokoll. Uppdateringarna förbättrar pålitligheten och funktionerna och därför är det bra att kontrollera att du har den senaste versionen. <span class="nub"></span>',
'p321t010' : 'Nu när den inbyggda programvaran har installerats måste vi starta om modemet så att installationen kan slutföras.',
'p330t001' : 'Kontrollerar din uppkopplingshastighet...',
'p330t002' : 'Med ett snabbt hastighetstest får routern hjälp att optimera internetanslutningen. Detta tar en eller ett par minuter.',
'p331t001' : 'Den inbyggda programvaran är uppdaterad.',
'p332t001' : 'Vi testar att uppdatera den inbyggda programvaran igen vid ett senare tillfälle.',
'p333t001' : 'Inbyggd programvara har uppdaterats.',
'p334t001' : 'Resultatet av hastighetstestet!',
'p334t002' : 'Detta fick vi reda på:',
'p334t003' : 'Nedladdningshastighet',
'p334t004' : 'Mbit/s',
'p334t005' : 'Uppladdningshastighet',
'p334t006' : 'Mbit/s',
'p340t002' : ' Vi återansluter till routern så att vi kan fortsätta.',
'p341t001' : 'Starta om routern',
'p341t002' : 'Vi har problem med att återansluta till din router. En snabb omstart bör hjälpa.',
'p341t003' : 'Koppla ur strömmen till routern, vänta några sekunder och koppla därefter in den igen. Vi kan ansluta när en blå lampa lyser stadigt på routern.',
'p341t003w' : 'Koppla bort routern, vänta några sekunder och koppla därefter in den igen. Vi kan ansluta när en blå lampa lyser stadigt på routern.',
'p341t004' : ' Vi väntar på att routern ska komma tillbaka medan du gör detta.',
'p342t001' : ' Vi återansluter till routern så att vi kan fortsätta.',
'p342t002' : 'Du kanske måste välja ditt trådlösa nätverk <span tid="Network24SSID">({REPLACE WITH 2.4 SSID})</span> igen i listan med trådlösa nätverk för att hjälpa detta på traven.',
'p343t002' : ' Vi återansluter till routern så att vi kan fortsätta.',
'p343t003' : 'Du kanske måste välja ditt trådlösa nätverk <span tid="Network24SSID">({REPLACE WITH 2.4 SSID})</span> igen för att fortsätta.',
'p344t001' : 'Starta om routern.',
'p344t002' : 'Vi har problem med att återansluta till din router. En snabb omstart bör hjälpa.',
'p344t003' : 'Koppla ur strömmen till routern, vänta 15 sekunder och koppla därefter in den igen. Vi återansluter när en blå lampa lyser stadigt på routern.',
'p344t003w' : 'Koppla bort routern, vänta i 15 sekunder och koppla därefter in den igen. Vi återansluter när en blå lampa lyser stadigt på routern.',
'p344t004' : ' Vi väntar på att routern ska komma tillbaka medan du gör detta.',
'p400f010' : 'WPA2',
'p400f011' : 'WPA/WPA2',
'p400f012' : 'WEP',
'p400f013' : 'Öppna',
'p400t001' : 'Anslut allt snabbare.',
'p400t002' : 'Genom att ge din nya router samma nätverksnamn och lösenord som din gamla router kan alla enheter anslutas med en gång.',
'p400t004' : 'Nätverksnamn:',
'p400t008' : 'Säkerhetstyp: <em class="hide-on-phones">(WPA2 är säkrast.)</em>',
'p400t014' : 'Ditt 5 GHz-band kommer att ha samma namn, fast med tillägget ".media" i slutet.',
'p400t015' : 'Du kan ändra detta senare om du vill.',
'p400t017' : 'Spara och fortsätt',
'p400t018' : 'Varför bör jag ändra namnet på mitt nätverk?',
'p400t019' : 'Alla trådlösa enheter som tidigare var anslutna till din gamla router kommer att anslutas automatiskt till den nya routern om du använder samma nätverksnamn och lösenord. Dessutom är det lättare att hitta ett unikt namn när du söker efter ditt nätverk på enheter.<span class="nub"></span>',
'p450a009' : 'Utmärkt! Vad ska vi göra nu?',
'p450t001' : 'Dina ändringar har sparats.',
'p450t002' : 'Här är ditt nya nätverksnamn och lösenord',
'p450t003' : 'Om du har använt ditt gamla nätverksnamn och lösenord bör dina befintliga trådlösa enheter återanslutas nu.',
'p450t004' : 'Namn:',
'p450t008' : 'Routern levererades med en etikett på undersidan där du kan skriva in det nya nätverksnamnet. På så vis har du det till hands när du behöver det.',
'p450t011' : 'Om du använde ditt gamla nätverksnamn och lösenord ansluts de flesta av dina trådlösa enheter automatiskt nästa gång du startar dem. För en del kommer du att behöva välja ditt nätverk igen varefter de kommer att anslutas automatiskt. Det finns instruktioner för Windows, OS X, iOS och Android i din snabbinstallationsguide.  <span class="nub"></span>',
'p451a009' : 'Utmärkt! Vad ska vi göra nu?',
'p451t001' : 'Inga ändringar.',
'p451t002' : 'Ditt nätverksnamn och lösenord har inte ändrats.',
'p451t003' : 'Du måste ange nätverksnamn och lösenord för var och en av dina trådlösa enheter.',
'p451t004' : 'Namn:',
'p451t008' : 'Routern levererades med en etikett på undersidan där du kan skriva in nätverksnamnet. På så vis har du det till hands när du behöver det.',
'p451t011' : 'Du måste ange det nya nätverket för alla dina trådlösa enheter. Det finns instruktioner för Windows, OS X, iOS och Android i din snabbinstallationsguide.  <span class="nub"></span>',
'p500t001' : 'Registrera routern.',
'p500t002' : 'Registreringen går snabbt och kan spara en massa tid om du skulle behöva support.',
'p500t004' : 'Fördelar med registrering',
'p500t005' : 'Om vi vet lite mer om dig kan det underlätta för oss så att vi kan hjälpa dig snabbare om det skulle behövas.<span class="nub"></span>',
'p500tCancel' : 'Registrera senare &raquo;',
'p500tSubmit' : 'Slutför registreringen',
'p600t001' : 'Besök routerns sida med valfri programvara för att hämta liknande programvara för dina andra datorer och mobila enheter.',
'p600t002' : 'Tack – jag vill komma till Dashboard',
'p600t003' : 'Valfri programvara',
'p600t004' : 'Dessa programvaruverktyg kan hjälpa dig att använda routerns avancerade funktioner. Det finns nedladdningar för Apple iOS, Android, Windows och OS X.  <span class="nub"></span>',
'p601t001' : '<strong>Tack för registreringen!</strong>',
'p700MRt001' : 'Vi kunde inte ställa in anslutningen automatiskt. Berätta lite mer så vi kan hjälpa dig ansluta.',
'p700MRt002' : 'Vilken typ av anslutning vill du skapa?',
'p700MRt003' : 'Min anslutning är en:',
'p700MRt005' : 'dynamisk anslutning  (1483 brygga)',
'p700MRt007' : 'PPPoE-anslutning',
'p700MRt009' : 'PPPoA-anslutning',
'p700MRt011' : 'Statisk anslutning (IPoA)',
'p700MRt014' : 'Jag vet inte vilken anslutningstyp jag har:',
'p700MRt016' : 'Försök ansluta automatiskt igen',
'p700MRt017' : 'Anslutningstyper',
'p700MRt018' : '<span class="black">Dynamisk –</span> dessa anslutningar blir allt vanligare hos vissa DSL-leverantörer.',
'p700MRt019' : '<span class="black">PPPoE och PPPoA –</span> för dessa anslutningar krävs användarnamn och lösenord som tillhandahålls av internetleverantören.',
'p700MRt021' : '<span class="black">Statisk –</span> för dessa krävs anpassade parametrar som är unika för varje användare. <span class="nub"></span>',
'p700t001' : 'Vi kunde inte ställa in anslutningen automatiskt. Berätta lite mer så vi kan hjälpa dig ansluta.',
'p700t002' : 'Vilken typ av anslutning vill du skapa?',
'p700t003' : 'Min anslutning är en:',
'p700t005' : 'Dynamisk anslutning',
'p700t007' : 'PPPoE-anslutning',
'p700t008' : 'L2TP- eller PPTP-anslutning',
'p700t013' : 'Statisk anslutning',
'p700t014' : 'Jag vet inte vilken anslutningstyp jag har:',
'p700t914' : 'Om du fortfarande inte kan fastställa din anslutningstyp bör du kontakta din internetleverantör.',
'p700t016' : 'Försök ansluta automatiskt igen',
'p700t017' : 'Anslutningstyper',
'p700t018' : '<span class="black">Dynamisk –</span> vanligt för de flesta kabel- och fiberleverantörer och för vissa DSL-leverantörer.',
'p700t019' : '<span class="black">PPPoE och PPTP –</span> för dessa krävs användarnamn och lösenord som tillhandahålls av internetleverantören.',
'p700t021' : '<span class="black">Statisk –</span> för dessa krävs anpassade parametrar som är unika för varje användare. <span class="nub"></span>',
'p701MRt001' : 'Du har valt en dynamisk anslutning.',
'p701MRt002' : 'Du har kanske fått ytterligare konfigureringsinställningar av din internetleverantör.',
'p701MRt004' : 'Dynamiska inställningar:',
'p701MRt006' : '0',
'p701MRt007' : '0',
'p701MRt016' : 'Testa min anslutning',
'p701MRt017' : 'Dynamiska anslutningar',
'p701MRt018' : 'En dynamisk anslutning konfigureras automatiskt när kommunikationen med internetleverantören upprättas.<span class="nub"></span>',
'p701t001' : 'Upprättar dynamisk anslutning...',
'p701t002' : ' Vi begär en anslutning av din internetleverantör.',
'p702t001' : 'Startar om modem…',
'p702t002' : 'Vi förbereder oss på att prova en annan anslutningstyp genom att starta om modemet.',
'p710MRt001' : 'Du har valt en statisk anslutning.',
'p710MRt002' : 'Du bör ha fått inställningar för statisk konfigurering av din internetleverantör. Kontakta din internetleverantör om du inte kan hitta dem.',
'p710MRt004' : 'Statiska inställningar:',
'p710MRt005' : 'IP-adress:',
'p710MRt006' : '0',
'p710MRt007' : 'Nätmask:',
'p710MRt008' : '0',
'p710MRt009' : 'Standardgateway:',
'p710MRt010' : '0',
'p710MRt011' : 'DNS-server (primär):',
'p710MRt012' : '0',
'p710MRt013' : 'DNS-server (sekundär):',
'p710MRt014' : '0',
'p710MRt015' : 'Obs! Inte alla internetleverantörer kräver en sekundär DNS-server.',
'p710MRt016' : 'Testa min statiska anslutning',
'p710MRt017' : 'Statiska anslutningar',
'p710MRt018' : 'En statisk anslutning konfigureras manuellt, men ger en konsekvent adress till routern som du lättare kan komma åt utanför ditt nätverk. Statiska anslutningar är ovanliga i bostäder och kostar i allmänhet mer. <span class="nub"></span>',
'p710t001' : 'Du har valt en statisk anslutning.',
'p710t002' : 'Du bör ha fått inställningar för statisk konfigurering av din internetleverantör. Kontakta din internetleverantör om du inte kan hitta dem.',
'p710t004' : 'Statiska inställningar:',
'p710t005' : 'IP-adress:',
'p710t006' : '0',
'p710t007' : 'Nätmask:',
'p710t008' : '0',
'p710t009' : 'Standardgateway:',
'p710t010' : '0',
'p710t011' : 'DNS-server (primär):',
'p710t012' : '0',
'p710t013' : 'DNS-server (sekundär):',
'p710t014' : '0',
'p710t015' : 'Obs! Inte alla internetleverantörer kräver en sekundär DNS-server.',
'p710t016' : 'Testa min statiska anslutning',
'p710t017' : 'Statiska anslutningar',
'p710t018' : 'En statisk anslutning konfigureras manuellt, men ger en konsekvent adress till routern som du lättare kan skaffa åtkomst till utanför ditt nätverk. Statiska anslutningar är ovanliga i bostäder och kostar i allmänhet mer.  <span class="nub"></span>',
'p711t001' : 'Upprättar statisk anslutning...',
'p711t002' : ' Vi begär en anslutning av din internetleverantör.',
'p712t001' : 'Något är fel med dina statiska inställningar.',
'p712t002' : 'En av adresserna eller någon annan uppgift som du har angett är felaktig, men vi kan inte avgöra vilken det är.',
'p800t001' : 'Verkställer ändringarna.',
'p800t002' : 'Vi verkställer dina ändringar och startar om routern för att bekräfta.',
'p801t002' : ' Vi väntar på att routern ska återanslutas. Vi fortsätter när detta sker.',
'p802t002' : 'Vi behöver en trådlös anslutning till routern för att fortsätta.',
'p802t004' : 'Gå till enhetens meny för trådlösa nätverk',
'p802t005' : 'Välj ditt nya nätverk, med namnet <strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong>',
'p802t007' : 'Ange lösenordet, som är <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>',
'p802t009' : 'Du ansluts till routern och vi går vidare.',
'p802t010' : ' Väntar på att routern ska återanslutas.',
'p803t002' : 'Vi behöver en trådlös anslutning till routern för att fortsätta.',
'p803t003' : 'Eftersom du har ändrat ditt nätverksnamn kanske du behöver välja det trådlösa nätverket igen:',
'p803t004' : 'Gå till enhetens meny för trådlösa nätverk',
'p803t005' : 'Välj ditt nya nätverk, med namnet <strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong>',
'p803t007' : 'Ange lösenordet, som är <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>',
'p803t009' : 'Du ansluts till routern och vi går vidare.',
'p803t010' : ' Väntar på att du ska återansluta.',
'p804t001' : 'Din enhet återanslöts inte.',
'p804t002' : 'Detta händer ibland och det är enkelt att fixa.',
'p804t025' : 'Om du har en internetaktiverad enhet i närheten kan du få information på följande URL: <strong>http://belk.in/PMuxOg</strong>',
'p804t026' : 'Om detta inte fungerar ska du koppla Ethernetkabeln direkt mellan modemet och datorn.',
'p804t027' : ' När vi ser en anslutning kommer vi att fortsätta automatiskt.',
'p900t001' : 'Du måste starta om modemet.',
'p900t002' : 'Ditt modem kommunicerar inte.',
'p900t003' : 'Gör följande för att starta om modemet:',
'p900t004' : 'Stäng av modemet. Detta sker vanligtvis med en strömbrytare på modemet eller genom att helt enkelt koppla ur strömmen. Vissa modem har ett batteri och i sådana fall måste du leta reda på modemets återställningsknapp.',
'p900t005' : 'Vänta i 15 sekunder.',
'p900t006' : 'Slå på modemet igen.',
'p900t007' : 'Efter flera sekunder tänds lamporna och modemet kan nu börja kommunicera med routern.',
'p900t008' : 'Vi väntar på att ditt modem ska stängas av och slås på igen och därefter fortsätter vi automatiskt.',
'p900t009' : 'Varför behöver modemet startas om?',
'p900t010' : 'Vissa modem behöver startas om för att kunna kommunicera med en ny router eller en okänd dator. Vi kan se modemet men det kommunicerar inte med den nya routern och därför kommer problemet sannolikt att lösas om du startar om.<span class="nub"></span>',
'p901t001' : 'Starta om modemet nu...',
'p901t002' : ' Vi väntar på att modemet ska stängas av och slås på igen.',
'p902t001' : 'Du har stängt av modemet. Bra.…',
'p902t002' : ' Vi väntar på att det ska komma igång igen.',
'p903t001' : 'Behöver du mer tid?',
'p903t002' : ' Vi väntar på att modemet ska startas om. Behöver du mer tid?',
'p903t005' : 'Detta sker vanligen med en strömbrytare på modemet eller genom att helt enkelt koppla ur strömmen, men vissa modem har ett batteri och du behöver då leta reda på modemets återställningsknapp.',
'p904t001' : 'Behöver du mer tid?',
'p904t002' : ' Vi väntar på att modemet ska slås på igen. Behöver du mer tid?',
'p905t001' : 'Vi ser modemet igen…',
'p905t002' : ' Vi väntar på att det ska synkroniseras med din internetleverantör. Detta tar en eller ett par minuter.',
'p950IMRt001' : 'Vi kunde inte upptäcka en anslutning till din ADSL-linje.',
'p950IMRt002' : 'Kontrollera att en nätverkskabel har anslutits från ADSL-vägguttaget till den grå porten på routern.',
'p950IMRt004' : 'Vi tror att det är ett kopplingsfel.',
'p950IMRt005' : 'Det ska finnas en nätverkskabel mellan den grå porten på routern och ADSL-uttaget/telefonjacket. Via kabeln överförs signalen från internetleverantören till routern. Utan den kan du inte komma ut på nätet. Kontrollera att kabeln har anslutits korrekt.',
'p950IMRt006' : 'Så här ska anslutningen se ut:',
'p950IMRt007' : 'Det ska finnas en nätverkskabel mellan ADSL-vägguttaget och routerns nätuttag (som har ett inbyggt modem). Via kabeln överförs signalen från internetleverantören till routern. Utan den kan du inte komma ut på nätet.',
'p950IMRt009' : 'Så här ska anslutningen se ut:',
'p950IMRt010' : 'Vi kommer att fortsätta att söka efter en anslutning medan du kontrollerar detta.',
'p950IMRt014' : 'Kopplingar',
'p950IMRt015' : 'Det vanligaste kopplingsproblemet är mellan vägguttaget och routern. Det är viktigt att kontrollera båda kabelns ändar. Den ena änden ska vara kopplad till den grå porten på den nya routern. Den andra änden ska anslutas till ADSL-uttaget. I vissa fall behövs ett filter mellan vägguttaget och kabeln. <span class="nub"></span>',
'p950PMt001' : 'Vi kunde inte upptäcka en anslutning till din ADSL-linje.',
'p950PMt002' : 'Kontrollera att det finns en nätverksanslutning mellan routern och dess nätkontakt (som har ett inbyggt modem).',
'p950PMt004' : 'Vi tror att det är ett kopplingsfel.',
'p950PMt005' : ' Kontrollera att nätverkskabeln som utgår från modemets nätsladd är ansluten till den gula WAN-porten på routern. Utan den här nätverksanslutningen kan du inte använda internet.',
'p950PMt009' : 'Så här ska anslutningen se ut:',
'p950PMt010' : 'Vi kommer att fortsätta att söka efter en anslutning medan du kontrollerar detta.',
'p950PMt011' : 'Kopplingar',
'p950PMt012' : 'Kopplingsproblem uppstår oftast mellan vägguttaget och modemet. Det är viktigt att kontrollera båda kabelns ändar. Den ena änden ska vara inkopplad i nätuttaget på den nya routern. Den andra änden ska anslutas till ADSL-uttaget. I vissa fall behövs ett filter mellan vägguttaget och kabeln. <span class="nub"></span>',
'p950t001' : 'Vi har inte upptäckt någon anslutning till ditt modem.',
'p950t002' : 'Kontrollera att modemet är inkopplat och på.',
'p950t003' : 'Kontrollera att Ethernetkabeln är ansluten mellan modemet och routern.',
'p950t004' : 'Vi tror att det är ett kopplingsfel.',
'p950t005' : 'Ditt modem ska vara på och det ska finnas en Ethernetkabel inkopplad mellan modemet och routerns gula uttag.',
'p950t006' : 'Kontrollera följande:',
'p950t007' : 'Kontrollera att modemet är på. Kontrollera att nätadaptern är inkopplad i båda ändar och att en eller flera av lamporna på modemet lyser.',
'p950t008' : 'Det ska finnas en Ethernetkabel inkopplad mellan modemet och routerns gula uttag. Kabeln överför signalen från modemet till routern. Utan den kan du inte komma ut på nätet.',
'p950t009' : 'Dina anslutningar ska se ut så här:',
'p950t010' : 'Vi kommer att fortsätta att söka efter en anslutning medan du kontrollerar detta.',
'p950t011' : 'Kopplingar',
'p950t012' : 'Det vanligaste installationsproblemet är kopplingarna mellan modemet och routern. Den ena änden ska vara inkopplad i den gula porten på den nya routern. Den andra änden ska anslutas till en liknande port på modemet. Kontrollera att båda ändarna är helt anslutna. Olika modemtillverkare märker portarna på olika sätt. Det kan stå "data", "LAN", "network" eller "Ethernet".<span class="nub"></span>',
'p951IMRt001' : 'Behöver du mer tid?',
'p951IMRt002' : ' Vi väntar på att du ansluter din ADSL-linje. Behöver du mer tid?',
'p951t001' : 'Behöver du mer tid?',
'p951t002' : ' Vi väntar på att modemet ska slås på igen. Behöver du mer tid?',
'pDAt001' : 'Duplicerad administratör',
'pDAt002' : 'Enheten administreras av  <span id="ipaddr"></span> för tillfället.',
'PIC_blocked_content' : 'Föräldrakontroll av internet är aktivt och denna enhet är för närvarande blockerad från internet. Tryck på knappen nedan för att ändra inställningarna för Föräldrakontroll av internet.',
'PIC_blocked_title' : 'Denna enhet är för närvarande blockerad från internet.',
'PIC_S1t0006' : 'Schemalägg internetåtkomst:',
'PIC_S1t006' : 'Nyligen i nätverket:',
'PIC_S2t003' : 'Skolkvällar',
'PIC_S2t004' : 'Helger',
'PIC_S2t005' : '(söndag–torsdag)',
'PIC_S2t006' : '(fredag–lördag)',
'PIC-blocked' : 'blockerad',
'PIC-S1dt001' : 'Vill du avbryta internetanslutningen för hela nätverket?',
'PIC-S1t001' : 'Blockera alla enheter',
'PIC-S1t003' : 'Alla enheter är nedkopplade från internet.',
'PIC-S1t004' : 'Återställ åtkomsten',
'PIC-S1t005' : 'För närvarande i nätverket:',
'PIC-S1t010' : 'Söker efter enheter:',
'PIC-S1t020' : 'Föräldrakontroll av internet har pausats',
'PIC-S1t021' : 'Routern känner inte till aktuell tid, vilket förhindrar blockering/upplåsning enligt schemat i Föräldrakontroll av internet.  Detta korrigeras när korrekt tid ställs in igen genom att routern återansluts till NTP-tidsservern.',
'PIC-S1t022' : 'Routern söker efter NTP-tidsservern med några minuters mellanrum. Du kan även ändra tidsserver genom att gå till <a href="#" tid="gtSystemSettings" style="">System Settings</a> (Systeminställningar).',
'PIC-unblocked' : 'ej blockerad',
'pNoTime_content' : 'Routern vet inte vad klockan är eftersom den har tappat kontakten med dess NTP-tidsserver. Routerns tidsbaserade funktioner som Föräldrakontroll av internet, Eko-läge och Självläkning är nu pausade tills den kan återansluta till en NTP-tidsserver. <br> <br>Routern kontrollerar automatiskt tiden med några minuters mellanrum.',
'pNoTime_title' : 'Vad är klockan?',
'pODLAplt001' : 'Tillämpar språkpaket',
'pODLAplt002' : 'Byter till det språk du har valt…',
'pODLDLt001' : 'Laddar ned språkpaket',
'pODLDLt002' : 'Hämtar det språk du har valt från servern…',
'pODLErrt001' : 'Vi beklagar',
'pODLErrt002' : 'OK',
'pStatst004' : 'Se alla &raquo;',
'Support1t001' : 'Vi har inte upptäckt någon anslutning till ditt modem.',
'Support1t002' : 'Kontrollera att modemet är inkopplat och på.',
'Support1t003' : 'Kontrollera att Ethernetkabeln är ansluten mellan modemet och routern.',
'Support1t004' : 'Vi tror att det är ett kopplingsfel.',
'Support1t005' : 'Ditt modem ska vara på och det ska finnas en Ethernetkabel inkopplad mellan modemet och routerns gula uttag.',
'Support1t006' : 'Kontrollera följande:',
'Support1t007' : 'Kontrollera att modemet är på. Kontrollera att nätadaptern är inkopplad i båda ändar och att en eller flera av lamporna på modemet lyser.',
'Support1t008' : 'Det ska finnas en Ethernetkabel inkopplad mellan modemet och routerns gula uttag. Kabeln överför signalen från modemet till routern. Utan den kan du inte komma ut på nätet.',
'Support1t009' : 'Dina anslutningar ska se ut så här:',
'Support1t010' : 'Pröva igen när du har vidtagit dessa åtgärder.',
'Support7t012' : 'Gå till <strong>http://belk.in/Q4XXca</strong> på en enhet som är ansluten till internet',
'Support1t016' : 'Kopplingar',
'Support1t017' : 'Det vanligaste installationsproblemet är kopplingarna mellan modemet och routern. Den ena änden ska vara inkopplad i den gula porten på den nya routern. Den andra änden ska anslutas till en liknande port på modemet. Kontrollera att båda ändarna är helt anslutna. Olika modemtillverkare märker portarna på olika sätt. Det kan stå "data", "LAN", "network" eller "Ethernet".<span class="nub"></span>',
'Support2t001' : 'Ditt modem startades aldrig om.',
'Support2t002' : 'Testa att koppla ur strömmen till modemet.',
'Support2t003' : 'Modemet kan ha en återställningsknapp som du måste trycka på.',
'Support2t004' : 'Har du problem med att starta om modemet?',
'Support2t005' : 'Testa följande för att starta om ditt modem:',
'Support2t006' : 'Koppla ur strömmen till ditt modem.',
'Support2t007' : 'Vänta tills eventuella lampor på modemet släcks.',
'Support2t008' : 'Om lamporna förblir tända kan ditt modem ha ett reservbatteri. Det ska sitta en återställningsknapp någonstans (ofta på baksidan). Tryck på den.',
'Support2t009' : 'Nu bör modemets lampor släckas. Vänta några sekunder innan du kopplar in strömmen igen.',
'Support2t010' : 'Pröva igen när du har vidtagit dessa åtgärder.',
'Support2t016' : 'Varför behöver modemet startas om?',
'Support2t017' : 'Vissa modem behöver startas om för att kunna kommunicera med en ny router eller en okänd dator. Vi kan se modemet men det kommunicerar inte med den nya routern och därför kommer problemet sannolikt att lösas om du startar om.<span class="nub"></span>',
'Support3MRt001' : 'Vi kunde inte upptäcka en anslutning till din ADSL-linje.',
'Support3MRt002' : 'Kontrollera att det finns en nätverkskabel mellan ADSL-vägguttaget och routern.',
'Support3MRt003' : 'I vissa områden krävs ett filter.',
'Support3MRt004' : 'Vi är ganska säkra på att ett kopplingsproblem har uppstått.',
'Support3MRt005' : 'Det ska finnas en kabel mellan den grå porten på routern och ADSL-uttaget/telefonjacket.',
'Support3MRt006' : 'Kontrollera att båda ändarna av kabeln är korrekt anslutna.',
'Support3MRt007' : 'Kontrollera att kabeln är ansluten till den grå porten på routern och inte till någon av de gula.',
'Support3MRt008' : 'Om du har fått ett ADSL-linjefilter ska det placeras mellan kabeln och ADSL-uttaget.',
'Support3MRt010' : 'Kontrollera att båda ändarna av kabeln är korrekt anslutna.',
'Support3MRt011' : 'Kontrollera att kabeln är ansluten till nätverksporten för routerns nätuttag.',
'Support3MRt012' : 'Om du har fått ett ADSL-linjefilter ska det anslutas mellan kabeln och ADSL-uttaget.',
'Support3MRt016' : 'När du har genomfört de här stegen kan du försöka igen.',
'Support3MRt018' : 'Öppna följande URL på en enhet som är ansluten till internet och ta reda på hur du löser problemet själv: <strong>www.belkin.com/support3mr</strong>',
'Support3MRt021' : 'Kopplingar',
'Support3MRt022' : 'Kopplingsproblem uppstår oftast i samband med ADSL-uttaget. Det är viktigt att kontrollera båda kabelns ändar. <span class="nub"></span>',
'Support3MRt050' : 'Kontrollera att det finns en nätverkskabel mellan routerns nätuttag och telefonjacket.',
'Support3MRt051' : 'Det ska finnas en kabel mellan routerns nätuttag och ADSL-uttaget/telefonjacket.',
'Support3PMt001' : 'Vi kunde inte upptäcka en anslutning till din ADSL-linje.',
'Support3PMt002' : 'Kontrollera att det finns en nätverksanslutning mellan routern och dess nätkontakt (som har ett inbyggt modem).',
'Support3PMt004' : 'Vi är ganska säkra på att ett kopplingsproblem har uppstått.',
'Support3PMt005' : 'Det ska finnas en nätverksanslutning mellan den gula porten på routern och routerns nätuttag.',
'Support3PMt006' : 'Se på routerns nätuttag och leta reda på den kabel som delas i två separata ledningar. En av ledningarna har en Ethernetkontakt.',
'Support3PMt007' : 'Anslut Ethernetkontakten till den gula porten på routern.',
'Support3PMt010' : 'När du har gjort detta kan du försöka igen.',
'Support3PMt012' : 'Gå till <strong>www.belkin.com/support3PM</strong> på en enhet som är ansluten till internet.',
'Support3PMt016' : 'Kopplingar',
'Support3PMt017' : 'Det är mycket viktigt att kontrollera att det finns en obruten serie anslutningar från ADSL-uttaget och ända fram till routern. Routern räknar med att signalen kommer genom den gula porten. Via kabeln som går från routerns nätuttag överförs den här signalen och strömmen till routern. Båda delar av den måste vara ansluten till routern för att anslutningen ska fungera. <span class="nub"></span>',
'Support3t001' : 'Modemet startades aldrig om.',
'Support3t002' : 'Kontrollera att modemet har strömtillförsel.',
'Support3t003' : 'Du kanske måste vänta en stund innan modemet är redo.',
'Support3t004' : 'Har du problem med att starta om modemet?',
'Support7t005' : 'Prova följande steg för att upprätta en ADSL-anslutning:',
'Support7t006' : 'Kontrollera att nätverkskabeln från modemroutern är ansluten till ett telefonjack med internetanslutning. Klicka sedan på Try Again (Försök igen) för att se om modemroutern kan identifiera internet.',
'Support7t007' : 'Om modemroutern delar telefonjack med en fast telefon (via en splitter) byter du ut splittern mot en filtersplitter (valfritt). Klicka sedan på Try Again (Försök igen) för att se om modemroutern kan identifiera internetleverantören.',
'Support7t008' : 'Om steg 2 ovan inte fungerar kanske ADSL-filter behövs*. Om du har filter (vanligen får man dem av internetleverantören) ansluter du dem mellan alla dina fasta telefonlinjer och respektive telefonjack.',
'Support7t009' : 'Om ADSL-anslutningen fortfarande inte fungerar då du har provat steg 1–3 ovan kan du kontakta internetleverantören för att få teknisk support. Ange att du har problem med att få modemroutern att synkroniseras med internetleverantören.',
'Support3t010' : 'Pröva igen när du har vidtagit dessa åtgärder.',
'Support3t016' : 'Varför behöver modemet startas om?',
'Support3t017' : 'Vissa modem behöver startas om för att kunna kommunicera med en ny router eller en okänd dator. Vi kan se modemet men det kommunicerar inte med den nya routern och därför kommer problemet sannolikt att lösas om du startar om.<span class="nub"></span>',
'Support4t001' : 'Vi kunde inte återansluta till routern.',
'Support4t002' : 'Testa att starta om routern.',
'Support4t003' : 'Pröva att ansluta en gång till när routern är igång igen.',
'Support4t004' : 'Vi får pröva några andra saker.',
'Support4t005' : 'Först får vi starta om routern.',
'Support4t006' : 'Koppla ur strömmen till routern, vänta några sekunder och koppla därefter in den igen.',
'Support4t006w' : 'Koppla ur strömmen till routern, vänta några sekunder och koppla därefter in den igen.',
'Support4t007' : 'Vi kan ansluta när en blå lampa lyser stadigt på routern.',
'Support4t008' : 'Därefter ska vi testa en trådlös anslutning.',
'Support4t031' : 'Det tar några minuter att skapa en anslutning, men sedan kan du försöka igen.',
'Support4t032' : 'Alternativt kan du testa med en trådbunden anslutning.',
'Support4t033' : 'Testa med att koppla in en dator till routern. Använd en Ethernetkabel för att ansluta mellan datorn och en av routerns grå portar. Om du besöker http://router/ därifrån kan du försöka göra om installationen.',
'Support4t034' : 'Pröva igen när du har vidtagit dessa åtgärder.',
'Support4t040' : 'Gå till <strong>http://belk.in/PMuxOg</strong> på en enhet som är ansluten till internet',
'Support4t050' : 'Återskapa en anslutning',
'Support4t051' : 'I de här situationerna kanske routern behöver startas om eller så kanske den bara behöver återskapa en anslutning. Därför har vi tagit med instruktioner för båda delar. Eftersom du kanske har ändrat nätverkets lösenord i ett tidigare moment, kan du behöva välja nätverket igen när du har startat om routern.<span class="nub"></span>',
'Support5t001' : 'Vi kunde inte återansluta till routern.',
'Support5t002' : 'Testa att starta om routern.',
'Support5t003' : 'Pröva att ansluta en gång till när routern är igång igen.',
'Support5t004' : 'Vi får pröva några andra saker.',
'Support5t005' : 'Först får vi starta om routern.',
'Support5t006' : 'Koppla ur strömmen till routern, vänta några sekunder och koppla därefter in den igen.',
'Support5t006w' : 'Koppla bort routern, vänta några sekunder och koppla därefter in den igen.',
'Support5t007' : 'Vi kan ansluta när en blå lampa lyser stadigt på routern.',
'Support5t008' : 'Därefter ska vi testa en trådlös anslutning.',
'Support5t009' : 'Det tar några minuter att skapa en anslutning, men sedan kan du försöka igen.',
'Support5t010' : 'Alternativt kan du testa med en trådbunden anslutning.',
'Support5t011' : 'Du kan koppla in en dator i routern. Koppla in en Ethernetkabel mellan datorn och en av routerns grå portar. Om du besöker http://router/ därifrån kan du försöka göra om installationen.',
'Support5t012' : 'Pröva igen när du har vidtagit dessa åtgärder.',
'Support5t015' : 'Gå till <strong>http://belk.in/PMuxOg</strong> på en enhet som är ansluten till internet',
'Support5t020' : 'Återskapa en anslutning',
'Support5t021' : 'I dessa situationer är det svårt att veta om routern behöver startas om eller om vi endast behöver återskapa en anslutning till den. Därför har vi tagit med instruktioner för båda delar. Eftersom vi bytte nätverksnamn i ett tidigare moment ska du vara noga med att ansluta till det nya nätverket när du har startat om routern.<span class="nub"></span>',
'Support6t001' : 'Vi kunde inte återansluta till routern.',
'Support6t002' : 'Testa att starta om routern.',
'Support6t003' : 'Pröva att ansluta en gång till när routern är igång igen.',
'Support6t004' : 'Vi får pröva några andra saker.',
'Support6t005' : 'Först får vi starta om routern.',
'Support6t006' : 'Koppla ur strömmen till routern, vänta några sekunder och koppla därefter in den igen.',
'Support6t006w' : 'Koppla bort routern, vänta några sekunder och koppla därefter in den igen.',
'Support6t007' : 'Vi kan ansluta när en blå lampa lyser stadigt på routern.',
'Support6t008' : 'Därefter ska vi testa en trådlös anslutning.',
'Support6t031' : 'Det tar några minuter att skapa en anslutning, men sedan kan du försöka igen.',
'Support6t032' : 'Alternativt kan du testa med en trådbunden anslutning.',
'Support6t033' : 'Du kan koppla in en dator i routern. Koppla in en Ethernetkabel mellan datorn och en av routerns grå portar. Om du besöker http://router/ därifrån kan du försöka göra om installationen.',
'Support6t034' : 'Pröva igen när du har vidtagit dessa åtgärder.',
'Support6t037' : 'Gå till <strong>http://belk.in/Nm1f5S</strong> på en enhet som är ansluten till internet.',
'Support6t050' : 'Återskapa en anslutning',
'Support6t051' : 'I de här situationerna kanske routern behöver startas om eller så kanske den bara behöver återskapa en anslutning. Därför har vi tagit med instruktioner för båda delar. Eftersom du kanske har ändrat nätverkets lösenord i ett tidigare moment, kan du behöva välja nätverket igen när du har startat om routern.<span class="nub"></span>',
'Support7t001' : 'Modemroutern är inte ansluten till internet.',
'Support7t004' : 'Ett problem har uppstått med anslutningen till telefonjacket.',
'Support7t050' : 'Anslutningsproblem',
'Support7t051' : 'I dessa situationer är det svårt att avgöra varför det inte går att ansluta till internetleverantören. Vi har kontrollerat dina anslutningar så gott det går, så nästa steg är att kontrollera att du använder rätt jack, ansluta ett filter vid behov och, om detta inte fungerar, ringa internetleverantören. <span class="nub"></span>',
'SupportNumber' : '1-800-123-4567',
'UpSpeed' : '12.5',
'p2410t012' : 'Om du klickar på "Restore" (Återställ) raderas routerinställningar som namn och lösenord. De ersätts med fabriksinställningarna.  Datorer, telefoner osv. måste då konfigureras så att de stämmer överens med de här inställningarna för att du ska kunna använda internet via routern.  Vill du fortsätta?',
'gtRestore' : 'Återställ',
'gtCancel' : 'Avbryt',
'alt="Loading"' : 'Läser in',
'alt="Restart Router"' : 'Starta om routern',
'alt="Check Wires"' : 'Kontrollera kopplingar',
'alt="Check Phone Connection"' : 'Kontrollera telefonanslutning',
'alt="Check WAN Connection"' : 'Kontrollera WAN-anslutning',
'alt="Checkmark"' : 'Bock',
'alt="Change"' : 'Ändra',
'alt="Print"' : 'Skriv ut',
'alt="Expand"' : 'Expandera',
'alt="Caret"' : 'Textmarkör',
'alt="Cut"' : 'Klipp ut',
'alt="Browser"' : 'Webbläsare',
'alt="Wifi"' : 'Wifi',
'alt="Password"' : 'Lösenord',
'alt="Check Phone Jack"' : 'Kontrollera telefonjack',
'alt="Turn Off Modem"' : 'Stäng av modem',
'alt="Turn On Modem"' : 'Sätt på modem',
'alt="Check Phone Filters"' : 'Kontrollera telefonfilter',
'gtSerial' : 'Serienr.',
'gt5GName' : '5 GHz SSID',
'gt5GKey' : '5 GHz Key',
'p1020MRt001' : 'Vi kan inte kommunicera med din internetleverantör.',
'p1020MRt002' : 'Starta om modemroutern.',
'p1020MRt003' : 'Ingen internetanslutning kan upprättas, så modemroutern bör startas om.',
'p1020MRt004' : 'Stäng av modemroutern. Detta sker vanligtvis med en strömbrytare på modemroutern eller genom att helt enkelt koppla ur strömmen.',
'p1020MRt005' : 'Vänta i 15 sekunder.',
'p1020MRt006' : 'Slå på modemroutern igen.',
'p1020MRt007' : 'Efter några sekunder tänds lamporna och den försöker kommunicera med internetleverantören.',
'p1020MRt008' : 'Kontakta internetleverantören för att felsöka ditt konto om problemet kvarstår.',
'p1020MRt009' : 'Vi väntar medan modemroutern stängs av och slås på igen och därefter fortsätter vi automatiskt.',
'p1020MRt010' : 'Varför behöver modemet startas om?',
'p1020MRt011' : 'Vissa modem behöver startas om för att kunna kommunicera med en ny router eller en okänd dator. Om det uppstår problem hos din internetleverantör kan modemet tappa anslutningen utan förvarning. Vi kan se modemet men inte internet. Därför bör det hjälpa om du startar om det.<span class="nub"></span>',
'p1010t001' : 'Vi kan inte kommunicera med ditt modem.',
'p1010t002' : 'Vi tror att det är ett ledningsfel.',
'p1010t003' : 'Det ska finnas en kabel som ansluter modemet till routerns gula uttag. Ditt modem ska vara på.',
'p1010t004' : 'Det finns några saker som du kan göra för att kontrollera att allt är i ordning:',
'p1010t005' : 'Kontrollera att modemet är på. Modemets strömadapter ska vara inkopplad i båda ändarna, och en eller flera lampor ska lysa på modemet.',
'p1010t006' : 'Det ska finnas en nätverkskabel som ansluter modemet till routerns gula uttag. Kabeln överför signalen från modemet till routern. Utan den kan du inte komma ut på nätet.',
'p1010t007' : 'Om båda dessa är ok kan du pröva med att starta om modemet genom att koppla ur strömtillförseln och vänta femton sekunder innan du kopplar in det igen. Om modemet har ett batteri kanske du måste ta reda på modemets återställningsknapp och använda den i stället.',
'p1010t008' : 'Så ska anslutningarna se ut:',
'p1010t009' : 'Vi kommer att fortsätta att hålla utkik efter en anslutning medan du kontrollerar detta.',
'p1010t010' : 'Det vanligaste kopplingsproblemet är mellan modemet och routern. Det är viktigt att kontrollera båda kabelns ändar. Den ena änden ska vara inkopplad i det gula uttaget på den nya routern. Den andra änden ska anslutas till ett liknande uttag på modemet. Olika modemtillverkare märker uttagen på olika sätt. Det kan stå "data", "LAN", "network" eller "Ethernet"',
'Support3t005' : 'Testa följande för att starta om ditt modem:',
'Support3t006' : 'Kontrollera om några lampor tänds på modemets framsida. Om de är tända så är modemet på och du kanske måste vänta en liten stund innan modemet är redo.',
'Support3t007' : 'Kontrollera att strömtillförseln till modemet är korrekt ansluten till modemet och till vägguttaget.',
'Support3t008' : 'Om modemet har en strömbrytare ska du kontrollera att den är i rätt läge.',
'Support3t009' : 'Kontrollera en gång till att modemet är anslutet till den nya routern.',
'Support1t012' : 'Gå till <strong>http://belk.in/LIkBoH</strong> på en enhet som är ansluten till internet',
'QOSt001' : 'Så här aktiverar du Intellistream:',
'QOSt002' : 'Anslut datorn till Belkin-routern med en Ethernetkabel (rekommenderas).',
'QOSt003' : 'Gör ett hastighetstest av din internetanslutning genom att klicka här för att gå till <a href="http://www.speedtest.net" target="_blank" class="speed_font4">Speedtest.net</a>',
'QOSt004' : 'När testet har slutförts skriver du in de värden som anges på Speedtest.net i fälten Download Speed (Nedladdningshastighet) och Upload Speed (Uppladdningshastighet). Klicka sedan på Save (Spara) nedan.',
'gtMbps' : 'Mbit/s',
'QOSt006' : 'Med din höga nedladdningshastighet kommer Intellistream endast att prioritera din uppladdningshastighet.',
'QOSt007' : 'Med din höga uppladdningshastighet kommer Intellistream endast att prioritera din nedladdningshastighet.',
'QOSt008' : 'Med dessa höga uppkopplingshastigheter är Intellistream inte till hjälp så det kommer inte att aktiveras här.',
'QOSt009' : 'Ange ett tal som är större än 0,01.',
'QOSt010' : 'Ange tal som är större än 0,01.',
'gtSettingsNotSaved' : 'Dina inställningar är inte sparade, stanna här för att spara dem. Lämna eller ladda om för att inte spara ändringarna. ',
'QOSt011' : 'Ange ett tal mellan 0,01 och 100,00.',
'QOSt012' : 'Ange tal mellan 0,01 och 100,00.',
'QOSt013' : 'Ange ett tal mellan 0,01 och 1000,00.',
'QOSt014' : 'Ange tal mellan 0,01 och 1000,00.',


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
common_err1 = '%s är NULL';
upgrade_err2 = 'Uppgraderingen av inbyggd programvara avslutades på grund av otillräckliga resurser. Uppgraderingen misslyckades.\nFörsök igen när systemet är inaktivt (ingen Internettrafik)';
upgrade_err3 = 'Kan inte överföra. Kontakta administratören.';
upgrade_err4 = 'Den inbyggda programvaran är för stor. Uppgraderingen misslyckades..';
upgrade_err5 = 'Du har redan den senaste inbyggda programvaran installerad.';
upgrade_err6 = 'Filen för uppdatering av inbyggd programvara verkar vara skadad. Överför filen för den inbyggda programvaran igen.';
show10 = 'Lista med DHCP-klienter';
show54 = 'Anslutningsinställningar';
btn2 = 'Verkställ ändringar';
cff1 = 'Kontrollera inbyggd programvara framgångsrikt';
PM2 = ':30 PM';
AM2 = '.30 AM';
Dimicons = 'Nedtoningsikoner';
EcoTo = 'till';
fvrm = 'Inaktivera fjärrhantering. Dess port står i konflikt med en av dina virtuella servrars inkommande port.';
lsipm2 = 'Ogiltig LAN-IP-adress. Det sista talet får inte vara 0 eller 255';
lsldnm = 'Ogiltigt lokalt domännamn: `~!@#$%^&*()_+[]{}\|;:\'"<>/?.,';
lsipm5 = 'Den IP-adress du väljer ska inte vara en dirigerbar IP.\n  192.168.x.x (där x motsvarar ett tal mellan 0 och 255). \n10.x.x.x (där x motsvarar ett tal mellan 0 och 255).\n172.y.x.x (där y motsvarar ett tal mellan 16 och 31, och x ett tal mellan 0 och 255).';
ufy4 = 'Det tar upp till 60 sekunder att återställa standardinställningarna. Stäng inte av strömmen till routern under tiden.';
ufe11 = 'Efter uppgraderingen kan det hända att routern inte svarar på kommandon i upp till 180 sekunder. Detta är normalt. Stäng inte av eller starta om routern under tiden.';
ur5 = 'Det kan ta upp till 30 sekunder innan routern har startats om. Stäng inte av routern innan återställningen har slutförts.';
ur6 = 'Det kan ta upp till 60 sekunder innan routern har startats om. Stäng inte av routern innan återställningen har slutförts.';
usys83 = 'Fälten Nytt lösenord och Bekräfta nytt lösenord stämmer inte överens.';
usys83_1 = 'Lösenord och bekräftat lösenord stämmer inte överens.';
usys85_1 = 'Administrationslösenordet ska vara mellan 1 och 63 tecken långt.';
usys88 = 'Lösenordet har nu sin maximala längd!';
usys89 = 'AM';
usys90 = 'PM';
usys92 = 'Portnumret för fjärråtkomst ska vara ett tal mellan 1 och 65535.';
usysipm = 'Du har antingen inte angett alla tal i IP-adressen, eller så är några av de angivna talen ogiltiga. IP-adressen anges enligt formatet x.y.y.z (där x är ett tal mellan 1 och 223, y är ett tal mellan 0 och 255 samt z är ett tal mellan 1 och 254).';
self_healing60 = 'Självåterställning';
chkwait = 'Söker efter nyare inbyggd programvara...';
Europe = 'Europa';
Australia = 'Australien och Nya Zeeland';
AsiaPacific = 'Stillahavsregionen';
NorthAmerica = 'Nordamerika';
vjs1 = 'Ogiltig IP-adress. Adressen är för lång. Kontrollera igen';
vjs2 = 'Ogiltig IP-adress. \'.\' saknas. Kontrollera igen!';
vjs3 = 'Ogiltig IP-adress. Tal mellan \'.\' saknas. Kontrollera igen!';
vjs4 = 'Ogiltig IP-adress. Extra \'.\' . Kontrollera igen!';
vjs5 = 'Ogiltig IP-adress. Talen mellan \'.\' är för stora. Kontrollera igen!';
vm1 = 'Ogiltigt tecken ';
vm2 = ' vid position ';
vm3 = 'Måste vara ';
vjs6 = 'Ogiltigt årsformat. Ange som (t.ex. 2002).';
vm4 = 'Ogiltigt nummer ';
vjs8 = 'Ogiltigt. Måste vara mellan 1970 och 2037.';
vjs9 = 'Ogiltigt månadsformat. Ange som (mellan 01...12)';
vjs161 = ' inte i ';
vjs162 = ' nätmask';
vjs163 = 'Tillåtet DHCP-intervall är: ';
vjs17 = 'Du har angivit två olika lösenord. Dubbelkontrollera igen!';
vjs18 = 'Ange startportnummer.';
vjs19 = 'Startportnumret ska vara mindre än slutportnumret.';
vjs23 = 'Ogiltig MAC-adress. Det är en broadcastadress.';
vjs24 = 'Ogiltig MAC-adress: nulladress.';
vjs25 = 'Ogiltig MAC-adress. Det är en multicastadress.';
vjs26 = 'Ogiltig start- och slut-IP-adress. Slut-IP-adressen ska vara större än start-IP-adressen.';
vjs28 = 'Ogiltigt nätmaskformat.';
vjs29 = 'Ogiltigt format. Här måste nätmasken vara 255.255.255.0 eller 255.255.255.128 eller 255.255.255.192 eller 255.255.255.224 eller 255.255.255.240 eller 255.255.255.248 eller 255.255.255.252 eller 255.255.255.254';
vjs30 = 'Ogiltig IP-adress. Det sista talet får inte vara 0 eller 255';
vjs31 = 'Ogiltig LAN-IP-adress. Det första talet får inte vara 127';
vjs32 = 'Ogiltig LAN-IP-adress. Får inte vara 0.0.0.0.';
vjs33 = 'Ogiltig LAN-IP-adress. Måste vara lägre än 224.0.0.0';
vjs42 = 'De angivna nätmasknumren är ogiltiga.';
vjs45 = 'Ange IP-adress';
vjs46 = 'är ogiltig. Korrigera den först.';
wcc2 = 'Välj anslutningstyp:';
wcc13 = 'L2TP';
wcc14 = '[Enbart Israel]. Den här anslutningstypen är vanligast i Israel. Använd det här alternativet om din internetleverantör har sagt att du använder L2TP och har gett dig korrekt L2TP-information.';
wds4_1 = 'Primär DNS-adress';
wds7 = 'Du måste ange de DNS-inställningar som du fått av internetleverantören om du inte använder den automatiska DNS-funktionen';
wds8 = 'Besök först %s Website Filters %s och välj "No filters" (inga filter) för att göra DNS-ändringar.';
wmc6 = 'MAC-adressen för WAN får inte vara samma som MAC-adressen för LAN. Välj en annan adress.';
wdd9  = 'Ingen DDNS-tjänst har valts.\n';
wdd10 = 'Ingen DDNS-tjänst har valts och samtliga data på denna sida kommer att förloras. Vill du fortsätta?';
wm10b = 'Används endast för de internetleverantörer som kräver L2TP som anslutningsmetod.';
pm = 'Tjänsten kunde inte verifiera det angivna lösenordet. Kontrollera att du har angett rätt lösenord.';
wpp17 = 'L2TP-konto';
wpp18 = 'L2TP-lösenord';
wpp19 = 'Ange L2TP-konto';
wpp23 = 'Tilldelning av IP-adress';
wpp24 = 'Använd statisk IP-adress';
wpp25 = 'Hämta dynamiskt från internetleverantör';
wppa7 = 'Min IP-adress';
wppa9 = 'Anslutnings-ID (valfritt)';
wppa13 = 'Ange PPTP-konto';
wppa18 = 'Ogiltigt tjänstnamn.';
ws2 = 'Du anger dina statiska IP-inställningar genom att ange informationen nedan och klicka på ”Verkställ ändringar”.';
sm_1 = 'De angivna nätmasken är ogiltig.';
ws8 = 'Ange/bekräfta inställningarna för DNS-adressen på följande skärm';
wt2 = 'Om du klickar på Verkställ ändringar startas routern om. När routern har startats om måste du göra följande';
wt3 = '1) Koppla bort nätkabeln från både kabelmodemet och Belkin-routern';
wt4 = '2) Anslut nätkabeln till kabelmodemet igen och vänta tills alla lampor på modemet har slutat blinka';
wt5 = '3) Anslut nätkabeln till Belkin-routern igen';
wt6 = 'Du kan kontrollera att du är ansluten till Internet genom att öppna en webbläsare, till exempel Internet Explorer, Firefox eller Safari, och se om du kan öppna några webbsidor.';
wlad2 = 'Aktivera/inaktivera';
wlc2 = 'Här kan du ändra routerns trådlösa inställningar. Spara inställningarna genom att klicka på ”Verkställ ändringar”.';
wlcgb = '802.11b+g';
wlcg = '802.11g';
wlcb = '802.11b';
wlc20 = '20 MHz';
wlc22 = '20/40 MHz';
wlc22a='20/40/80 MHz';
wlcoff = 'AV';
wlcngb1 = '802.11b och 802.11g och 1x1 802.11n';
wlcn1 = '1x1 802.11n';
wlcngb2 = '802.11b och 802.11g och 1x1 802.11n';
wlcn2 = '802.11n';
wlcgn = '802.11g+n';
wlca = '802.11a';
wlcan = '802.11a och 802.11n';
wlcnac='802.11n och 802.11ac';
wlcanac='802.11a och 802.11n och 802.11ac';
wlc26 = 'Om du döljer ditt nätverksnamn inaktiveras WPS.';
wlc27 = 'Om du ändrar säkerhetstyp inaktiveras WPS.';
wlc28 = 'WPS är inaktiverat på grund av din <A href=%s><B>säkerhetstyp för trådlös användning</B></A>.';
wlc29 = 'WPS är inaktiverat på grund av att du har dolt ditt nätverksnamn (SSID).';
wlc30 = 'WPS är inaktiverat på grund av att du har dolt ditt nätverksnamn (SSID).och på grund av din <A href=%s><B>säkerhetstyp för trådlös användning</B></A>.';
wlc31 = 'Ditt nätverksnamn (SSID) tas fram om du slår på WPS.';
wlc32 = 'Säkerhetstypen ändras till WPA/WPA2 om du slår på WPS. Ditt aktuella nätverkslösenord kommer att fungera bra.';
wlc33 = 'Ditt nätverksnamn (SSID) tas fram och säkerhetstypen ändras till WPA/WPA2 om du slår på WPS. Ditt aktuella nätverkslösenord kommer att fungera bra.';
wle3a = 'WPA-PSK';
wle3b = 'WPA2-PSK';
wle3c = 'WPA-PSK + WPA2-PSK';
wps1 = 'Wi-Fi Protected Setup (WPS)';
wps3 = 'Konfigurera trådlös säkerhet';
wps17 = 'För klientenheter som saknar WPS bör du köra Belkin Security Assistant från en CD eller manuellt konfigurera enheten med följande inställningar:';
wps23 = 'WPA+WPA2-Personal (PSK)';
wps25 = 'TKIP+AES';
wps27 = 'Nätverksnyckel (WEP)';
wps28_1 = 'NULL';
wle11 = 'Nyckel 1';
wle12 = 'Nyckel 2';
wle13 = 'Nyckel 3';
wle14 = 'Nyckel 4';
wpskerr2 = 'Nyckeln måste vara mellan 8 och 63 tecken och kan innehålla mellanslag och symboler, eller endast 64 hexadecimalt (0-F)!';
wpskerr4 = 'Du måste ange gästnyckel';
wpskerr7 = 'Gästnyckeln måste innehålla 8 tecken';
wpskerr8 = 'Gästnyckeln får inte vara samma som nätverksnyckeln';
wlguest1 = 'SSID får inte vara samma som gäst-SSID';
wlguest2 = 'Gäst-SSID får inte vara samma som SSID';
rs_crc = 'Fel vid återställning < CRC >';
rs_long = 'Fel vid återställning <too long>';
rs_disposition = 'Fel vid återställning <No Content-Disposition>';
rs_getpid = 'Fel vid återställning <Can\'t get pid!>';
rs_unmatchpid = 'Fel vid återställning <Unmatched pid>';
msg_ddns3  = 'Fälten för domännamn får inte vara tomma.\n';
msg_lan_dhcp1  = 'Begär information från nätporten.';
msg_lan_dhcp2  = 'Uppdaterar konfigurationsdatabasen.';
msg_wan_stat1  = 'IP-adressen ';
msg_wan_stat2  = ' finns inte i ';
msg_wan_stat3  = ' nätverket.';
msg_wls_chan2  = 'Gäst-SSID får inte vara NULL!\n';
fw_not_interrupt  = 'AVBRYT INTE ROUTERNS ÅTGÄRDER OCH DRA INTE UR KONTAKTEN till den. Routern kan då sluta fungera.';
msg_invalid_char  = 'Ogiltigt/ogiltiga tecken hittades. Giltiga tecken är: 0-9, a-z, A-Z, `~!@#$%^&*()_-+=|\\{}[]:";\',.<>/?';
msg_invalid_domain_char  = 'Ogiltigt lokalt domännamn'+': ~!@#$%^&*()=+{}[]|":;\\\'?/<>,`';
msg_invalid_char_1  = 'Ogiltigt/ogiltiga tecken hittades. Giltiga tecken är bokstäver och siffror. Följande symboler är ogiltiga: `~!@#$%^&*()_+[]{}\\|;:\'"<>/?.,';
msg_hostIP_invalid  = 'Värddatorns IP-adress är ogiltig. Den får inte vara routerns LAN-IP-adress.\n';
msg_dmzIP  = 'IP-adressen för DMZ';
msg_blank  = ' får inte vara tom.\n';
msg_space  = 'Tomma celler eller blanksteg är inte tillåtna i %s\n';
msg_blank_in  = 'Blanksteg är inte tillåtna i %s\n';
msg_allspaces  = '%s får inte innehålla enbart blanksteg\n';
msg_invalid  = 'Ogiltigt eller ogiltiga tecken i %s\nGiltiga tecken är: \n%s\n\n';
msg_check_invalid  = '%s innehåller en ogiltig siffra\n';
msg_valid_range  = '%s är ogiltigt. Giltigt intervall är %s till %s\n';
msg_invalid_mac  = 'Ogiltig MAC-adress.\n';
msg_multi_mac = 'MAC-adressen kan inte vara multicastadress.\n';
msg_confirmDefault  = 'Varning!\nOm du läser in fabriksinställningarna raderas alla aktuella inställningar.\nVill du fortsätta?';
Allowed_Services = 'Tillåtna tjänster';
Allowing_Url = 'Tillåta webbplats utifrån URL-adress ';
Allowing_Keyword = 'Tillåta webbplats utifrån nyckelord';
wipv63 = 'Enheter som är anslutna till routern kan tala med varandra med användning av ursprungliga IPv6-paket. IPv6-paket på det lokala nätverket kommer automatiskt att skickas till alla LAN-gränssnitt (Ethernetportar och trådlösa nätverk med både 2,4 GHz och 5 GHz).';
wipv64 = 'När IPv6 pass-through är aktiverat, kommer även IPv6-paket att kopieras till WAN-gränssnittet.(När detta är aktiverat skapas en direkt, oskyddad anslutning till Internet.)';
wipv65 = 'Kontakta din internetleverantör för information om stöd för IPv6.';
wipv67 = 'Internet IPv6';
wipv68 = 'Ditt nätverk är kompatibelt med IPv6.';
wipv69 = 'Pass-through';
mf1 = 'Med dessa sidor kan du reglera hur din router ska arbeta när den får vissa typer av medietrafik.';
mf2 = 'Optimera din Internetanslutning automatiskt för olika typer av trafik.';
mf3 = 'Se hur din router används.';
mf8 = 'Registrerat på %s';
mf10 = 'Hämta';
mf11 = 'Överför';
mf12 = 'Hastighet';
mf15 = 'Verkställ inställningar';
mf18 = 'Ange ett tal mellan {0,1 - %s}.';
mf20 = 'Enbart mellan {0,1-%s}.';
mf26 = 'Manuellt registrerat på %s';
mf32 = 'eller';
mf44 = 'Resultaten från det automatiska hastighetstestet kanske inte är 100% exakta beroende på Internettrafik eller andra förhållanden. Om du vill jämföra resultaten kan du besöka en webbplats för hastighetstest eller kontakta din internetleverantör för att få dina hastigheter på Internet bekräftad. Om hastighetsresultaten varierar kan du ange värdena manuellt.';
media_dlna18 = 'Namnlös';
media_dlna21 = 'Du har mer media än din router kan indexera, så vi hanterar de första 12 000 objekten.';
errSubnetMaskInvalid_2 = 'Nätmasken ser inte ut som en nätmask. Kontrollera värdet.';

