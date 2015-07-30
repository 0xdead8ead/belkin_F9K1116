function dw(message)
{
	document.write(message);	
}

// Note this dictionary is a temporary demonstration
var langDictionary = {

// Copy belkin transation table to here	
'p100t011' : 'kojelautaan',
'p220t001' : 'SInulla on PPTP DSL -yhteys.',
'p220t011' : 'PPTP',
'p220t012' : 'Point-to-Point Tunneling Protocol (PPTP) luo yksityisen ja salatun yhteyden sinun ja Internet-palveluntarjoajan välille.',
'p222t001' : 'PPTP-asetuksissa on jotain vikaa.',
'p300t001' : 'Tarkistamme laiteohjelmiston päivitystä.',
'p300t002' : 'Tarkistamme, onko uudelle reitittimelle laiteohjelmiston päivitystä',
'p300t003' : 'Miksi tarvitsen uusimman laiteohjelman?',
'p300t004' : 'Laiteohjelma tarkoittaa ohjelmistoa, jolla reititin toteuttaa verkko- ja suojausprotokollat. Päivitykset parantavat reitittimen luotettavuutta ja toimintaa, joten on hyvä hankkia tuorein versio.',
'gtUpdateNoPower' : 'Päivitämme reititintä uudella laiteohjelmalla. Älä katkaise virtaa tämän aikana.',
'p320t003' : 'Tähän kuluu noin kolme minuuttia. Päivityksen eteneminen:',
'gtFirmwareRestart' : 'Nyt kun laiteohjelma on asennettu, meidän on käynnistettävä reititin uudelleen tehdäksemme siitä virallisen.',
'p342t003' : 'langattomien verkkojen luettelosta auttaaksesi prosessia.',
'errorSSIDEmpty' : 'Anna langattoman verkon nimi.',
'errorSSIDTooLong' : 'Verkon nimen on oltava alle 32 merkkiä pitkä.',
'errorSSIDInvalidChars' : 'Verkon nimi voi sisältää ainoastaan kirjaimia, numeroita, välimerkkejä ja välilyöntejä.',
'errorWEPPasswordInvalidChars' : 'Verkon salasana saa sisältää vain numeroita ja kirjaimia välillä A-F.',
'errorWEPPasswordInvalidLength' : 'Verkon salasanan on oltava 10-26 merkkiä pitkä.',
'errorWEPPasswordEmpty' : 'Suojaa langaton verkko antamalla salasana.',
'errorWPAPasswordInvalidChars' : 'Verkon salasana voi sisältää ainoastaan kirjaimia, numeroita, välimerkkejä ja välilyöntejä.',
'errorWPAPasswordInvalidLength' : 'Verkon salasanan on oltava 8-63 merkkiä pitkä.',
'errorWPAPasswordEmpty' : 'Suojaa langaton verkko antamalla salasana.',
'errorGenericCommitError' : 'Tämä oli virhe.  Korjaa alla olevat asetukset ja yritä uudelleen.',
'p400t006' : 'Salasana:',
'p450t006' : 'Salasana: ',
'p451t006' : 'Salasana: ',
'p500t007' : 'Suorita rekisteröinti',
'p500t008' : 'Rekisteröi myöhemmin',
'p700t011' : 'PPTP DSL connection',
'errIpAddressEmpty' : 'IP-osoite ei voi olla tyhjä.',
'errSubnetMaskEmpty' : 'Aliverkon peite ei voi olla tyhjä.',
'errSubnetMaskInvalid' : 'Aliverkon peite ei näytä aliverkon peitteeltä. Tarkista arvo.',
'errDefaultGatewayEmpty' : 'Oletusyhdyskäytävän osoite ei voi olla tyhjä.',
'errDNSServerEmpty' : 'DNS-palvelimen osoite ei voi olla tyhjä.',
'1781' : '',
'1782' : '',
'1783' : '',
'7102' : 'Belkin Intellistream pitää etusijalla suuren kaistanleveyden ja pienen latenssin palveluita, kuten ääntä, videoita ja pelejä, jotta online-kokemus olisi paras mahdollinen.',
'7103' : 'Jotta Intellistream voisi tehdä työnsä hyvin, sen on tiedettävä yhteysnopeutesi.',
'7104' : 'Internet-yhteys katkeaa hetkellisesti testin ajaksi.',
'7105' : 'Internet-yhteys katkeaa hetkellisesti testin ajaksi.',
'7106' : 'Nopeustestin suorittaminen',
'7107' : 'Nopeustesti',
'7108' : 'Anna manuaalisesti',
'7109' : 'Ping',
'7110' : 'Latausnopeus<br>',
'7111' : 'Lähetysnopeus<br>',
'7112' : 'Käynnissä...',
'7113' : 'Suoritettu',
'7114' : 'Testin aikana tapahtui virhe.',
'7115' : 'Anna luku välillä 0.1-100.',
'7116' : 'Anna luku välillä 0.1-1000.',
'7117' : 'Ainoastaan välillä 0.1-100.',
'7118' : 'Suuren lähetysnopeuden takia Intellistream priorisoi vain latausnopeuden.',
'7119' : 'Suuren latausnopeuden takia Intellistream priorisoi vain lähetysnopeuden.',
'7120' : 'Suuren Internet-nopeuden takia Intellistreamin ei tarvitse olla käytössä.',
'7121' : 'Tallennettu',
'7122' : 'Tallennettu manuaalisesti',
'7123' : 'Intellistreamin käyttöönotto:',
'7124' : 'Intellistream on käytössä.',
'7125' : 'Intellistream on tällä hetkellä poissa käytöstä.',
'7126' : 'Määritä manuaalisesti',
'gtBBSTitle' : 'Tervetuloa asentamaan Belkin-reititin',
'gtBack' : 'Takaisin kojelautaan',
'Support4t036' : 'Lue lisätiedot.',
'Support4t037' : 'Avaa seuraava URL laitteessa, joka on yhteydessä Internetiin, ja lue, miten ongelma voidaan korjata itse: <STRONG>www.belkin.com/support/asdlkj</STRONG>',
'gtReadHelp' : 'Siirry Internetiin yhteydessä olevalla laitteella osoitteeseen <STRONG>http://belk.in/NLk29H</STRONG>',
'Support5t014' : 'Lue lisätiedot.',
'p1200t001' : 'Hieman lisää turvallisuutta.',
'p1200t002' : 'Voit myös suojata reititin lukitsemallakojelautaansalasanalla.',
'errsetempt' : 'Anna salasana.',
'errorpwdEmpty' : 'Kirjoita salasana.',
'errorpwdError' : 'Salasanasi on virheellinen.',
'60' : 'Kaksi järjestelmänvalvojaa',
'61' : 'Tätä laitetta ohjaa',
'62' : 'tällä hetkellä.',
'gtDisconnected' : 'Yhteys katkennut',
'dft005' : 'Belkin Help Center',
'dhToggleBand' : 'Näytä 5.0 Ghz',
'419' : 'sekuntia jäljellä.',
'422' : 'Asetusten palauttaminen onnistui',
'423' : 'Palautettu tiedosto ei ole oikeantyyppinen tätä laitetta varten. Palautus epäonnistui. Hanki oikea tiedosto ja yritä uudelleen.',
'533' : 'Jos reitittimeen tulee vika, se voidaan joutua käynnistämään uudelleen. Reitittimen uudelleen käynnistäminen ei poista asetuksia.',
'1200' : 'Muutoksia otetaan käyttöön. Odota hetki.......',
'1386' : 'Päivitystiedosto ei ole oikeantyyppinen tai sen versio ei ole oikea tätä laitetta varten. Päivitys epäonnistui. Hanki oikea tiedosto ja yritä uudelleen.',
'2053' : 'Muutosten käyttöön ottaminen onnistui',
'2054' : 'Laiteohjelmiston päivitys onnistui',
'766' : 'Kirjoittamasi aliverkon peitteen numerot eivät kelpaa.',
'1356' : 'Yhdyskäytävän IP-osoite ei kelpaa, ensimmäisen numeron on oltava 1-223.',
'1357' : 'Virheellinen IP-osoite, toisen ja kolmannen numeron on oltava 0–255.',
'1358' : 'Yhdyskäytävän IP-osoite ei kelpaa, viimeisen numeron on oltava 1-254.',
'1360' : 'IP-osoite ei kelpaa, ensimmäisen numeron on oltava 1–223.',
'1354' : 'Virheellinen IP-osoite, toisen ja kolmannen numeron on oltava 0-255.',
'675' : 'IP-osoite ei kelpaa, viimeisen numeron on oltava 1–254.',
'403' : 'Kirjoittamasi IP-osoite ei kelpaa.',
'760' : 'IP-osoite:',
'1760' : 'Estä kaikki',
'395' : 'Et joko ole kirjoittanut kaikkia numeroita tai jotkin kirjoittamasi numerot eivät kelpaa. Kuhunkin osoiteruutuun kirjoitetun numeron on oltava 0-255.',
'1395' : 'Ei määritetty',
'1281' : 'WAN IP ei voi kattaa LAN-sivun aliverkkoa.',
'641' : 'Et joko ole kirjoittanut kaikkia IP-numeroita tai jotkin kirjoittamasi numerot eivät kelpaa. Numeroiden tulee olla 0–255.',
'errUsernameTooLong' : 'Käyttäjätunnuksen on oltava alle 64 merkkiä pitkä.',
'errUsernameInvalid' : 'Käyttäjätunnus voi sisältää ainoastaan kirjaimia, numeroita, välimerkkejä ja välilyöntejä.',
'errPasswordEmpty' : 'Kirjoita salasana.',
'errPasswordTooLong' : 'Salasanan on oltava alle 64 merkkiä pitkä.',
'errPasswordInvalid' : 'Käyttäjätunnus voi sisältää ainoastaan kirjaimia, numeroita, välimerkkejä ja välilyöntejä.',
'1398' : 'OK',
'1399' : 'Peruuta',
'374' : 'Valo palaa',
'375' : 'Valo ei pala',
'47' : 'Lisätietoja',
'48' : 'Poista muutokset',
'49' : 'Tallenna',
'96' : 'Ota käyttöön',
'119' : 'Poista käytöstä',
'1298' : 'Sulje',
'113' : '<< Lisää',
'114' : 'Poista',
'128' : 'Virkistä',
'318' : 'Pois käytöstä',
'317' : 'Käytössä',
'2006' : 'kyllä',
'2007' : 'Ei',
'3300' : 'NEW',
'50' : 'Päivitä dynaaminen DNS',
'98' : 'DDNS (Dynamic domain name system) -järjestelmällä voit käyttää kotiverkkoa DDNS-palveluntarjoajan avaaman tilin kautta. Avaa tili sivulla Dyn.com (<a href=\'http://www.dyn.com\' target=\'_blank\'>www.dyn.com</a>) ja kytke reitittimen DDNS-ominaisuus päälle. Sinun on luotava tili ennen tämän palvelun käyttämistä.',
'100' : 'Käyttäjätunnus',
'101' : 'Salasana',
'102' : 'Toimialueen nimi',
'742' : 'Kirjoita käyttäjätunnus',
'757' : 'Kirjoita salasana.',
'822' : 'ei kelpaa, korjaa se ensin.',
'1307' : 'DynDNS',
'1308' : 'DDNS-palvelu',
'1309' : 'DDNS-tila',
'1310' : 'Internet-sivusto',
'1315' : 'Päivitä DDNS automaattisesti',
'1316' : 'päivitä',
'1317' : 'päivän välein',
'1369' : 'Rekisteröity',
'1380' : 'Väärä kokoonpano',
'1381' : 'Yhteyden luominen',
'1382' : 'Yhteys epäonnistui',
'1383' : 'Sisäänkirjautuminen epäonnistui',
'1384' : 'Rekisteröinti epäonnistui',
'1385' : 'Ei rekisteröity',
'1751' : '',
'702' : 'DNS (domain name service) muuntaa toimialueen nimet IP-osoitteiksi, jotta tietokonepalveluita ja laitteita voidaan paikantaa ympäri maailmaa. Jos Internet-palveluntarjoaja (ISP) on antanut DNS-osoitteen, syötä se tähän.',
'703' : 'Automaattinen Internet-palveluntarjoajalta',
'704' : 'DNS-osoite',
'705' : 'Toissijainen DNS-osoite',
'706' : 'DNS = toimialueen nimipalvelin. Internetissä sijaitseva palvelin, joka muuntaa URL-osoitteet, kuten www.belkin.com, IP-osoitteiksi.',
'707' : 'Sinun on kirjoitettava Internet-palveluntarjoajan antamat DNS-asetukset, jos et käytä automaattista DNS-toimintoa.',
'780' : 'Määritä IP-osoite',
'823' : 'Jos haluat muuttaa DNS-toimintoa, siirry ensin kohtaan {Sivuston suodatin} ja valitse "Ei suodattimia".',
'55' : 'Laiteohjelmiston tiedot',
'56' : 'Tälle reitittimelle ei ole tarjolla laiteohjelmiston päivitystä!',
'57' : 'Ei voi luoda yhteyttä laiteohjelmiston tietopalvelimeen. Tarkista WAN-yhteys.',
'58' : 'Nykyinen laiteohjelma:',
'59' : 'Lataa laiteohjelma:',
'64' : 'Reitittimen asetukset voidaan määrittää siten, että ne rajoittavat Internetin käyttöä, sähköpostia ja muita verkkopalveluja tiettyinä päivinä ja kellonaikoina.',
'65' : 'IP',
'66' : 'Portti',
'67' : 'Tyyppi',
'68' : 'Estoaika',
'69' : 'Päivä',
'70' : 'Kellonaika',
'71' : 'Ota käyttöön',
'72' : 'MOLEMMAT',
'73' : 'Aina',
'74' : 'Estä',
'75' : 'SU',
'76' : 'MA',
'77' : 'TI',
'78' : 'KE',
'79' : 'TO',
'80' : 'PE',
'81' : 'LA',
'82' : ':00 (iltapäivällä)',
'83' : ':00 (aamupäivällä)',
'84' : 'Et joko ole kirjoittanut asiakkaan IP-osoitetta tai jotkin kirjoittamasi IP-osoitteen numerot eivät kelpaa. IP-osoiteruutuun kirjoitetun numeron on oltava 1-254.',
'85' : 'Kirjoittamasi portin numerot eivät kelpaa.',
'86' : 'Porttialueen jälkimmäisen osan on oltava suurempi kuin ensimmäisen.',
'87' : 'IP-alueen jälkimmäisen osan on oltava suurempi kuin ensimmäisen.',
'88' : 'Porttiruutuun kirjoitetun numeron on oltava 1-65535.',
'1311' : 'Sovelluksia ei ole valittu',
'1312' : 'Samanlaisia tietueita havaittu. Sääntö on jo olemassa.',
'1355' : 'Reitittimen LAN IP -osoitteen ei tulisi olla IP-alueella.',
'90' : 'Tällä voit määrittää verkosta laitteen, joka jätetään reitittimen palomuurin ulkopuolelle muiden laitteiden jäädessä sen taakse.',
'91' : 'DMZ:ssä sijaitseva tietokone ei ole suojattu hakkerien hyökkäyksiltä.',
'92' : 'Aseta tietokone DMZ:hen kirjoittamalla sen IP-osoitteen viimeiset numerot alla olevaan kenttään ja valitsemalla "Valitse". Ota muutos käyttöön napsauttamalla "Tallenna".',
'93' : 'DMZ-näennäisisännän IP-osoite',
'97' : 'Staattinen IP',
'95' : 'Yksityinen IP',
'103' : 'Kirjoita IP-osoite ennen DMZ:n käyttöön ottamista.',
'1232' : 'DMZ-isännän IP-osoite ei kelpaa.',
'1253' : 'IP on alueen ulkopuolella (1-254]!',
'105' : 'Tämän toiminnon avulla voit määrittää sallittujen asiakkaiden luettelon. Kun otat tämän toiminnon käyttöön, sinun on kirjoitettava jokaisen verkon asiakkaan MAC-osoite verkkoyhteyden luomiseksi niihin kuhunkin.',
'106' : 'Ota käyttöön MAC-osoitteen suodatus',
'107' : 'MAC-osoitteen suodatusluettelo',
'108' : 'Estä',
'110' : 'MAC-osoite',
'112' : 'Tämä MAC on jo lisätty.',
'669' : 'Virheellinen MAC-osoite, se on nollaosoite',
'902' : 'Virheellinen MAC-osoite',
'903' : 'Korjaa se ensin.',
'904' : 'Oikean MAC-osoitteen tulisi olla muodossa xx:xx:xx:xx:xx:xx (missä x on väliltä 0–9 tai a-f).',
'1062' : 'Huom. et voi poistaa sen tietokoneen MAC-osoitetta, jolla käytät reitittimen hallintatoimintoja. (tietokone, jota käytät nyt).',
'1602' : 'Käyttäjän määrittämä 1',
'117' : 'Reitittimessä on palomuuri, joka suojaa verkkoa monenlaisilta yleisiltä hakkerien hyökkäyksiltä, mukaan lukien Ping of Death (PoD)- ja Denial of Service (DoS) -hyökkäykset. Voit poistaa palomuuritoiminnon käytöstä tarvittaessa. Palomuurisuojauksen käytöstä poistaminen ei jätä verkkoa ilman suojaa hakkerien hyökkäyksiä vastaan, mutta on suositeltavaa jättää palomuuri aina käyttöön, mikäli se on mahdollista.',
'118' : 'Palomuuri käyttöön/pois käytöstä',
'121' : '<b>LISÄTOIMINTO </b> Olet määrittänyt, että reititin ei vastaa ICMP-ping-komentoon (ping-komento WAN-porttiin). Tämä lisää suojaustasoa.',
'1076' : 'Estä ICMP-ping-komento',
'1827' : 'Tulosta vieraan käyttöoikeusasetukset',
'2702' : 'Vieras-tilin avulla Internetiä voidaan käyttää WAN-portin kautta, mutta se rajoittaa vieraat sisäisen verkon )LAN tai WLAN) ulkopuolelle. Tätä toimintoa tuetaan 2,4 GHz:ssa ainoastaan käytön helpottamiseksi.',
'279' : 'Saapuvien portti',
'1828' : 'Kahvilatyyli (vieraat kirjautuvat sisään Internet-sivun kautta)',
'1619' : 'WPA/WPA2 PSK',
'1829' : 'WEP',
'1830' : 'Avaa',
'1831' : 'enintään 32 merkkiä, ei välejä',
'1617' : 'Salasana (PSK)',
'842' : 'Todennus',
'845' : 'Salausmenetelmä',
'854' : 'Ennalta jaettu avain (PSK)',
'857' : 'Epämääräinen PSK',
'855' : 'WPA-PSK (ei palvelinta)',
'1335' : 'Verkon nimi (SSID)',
'1825' : '8–63 merkkiä',
'1826' : '10 heksadesimaalimerkkiä',
'1834' : 'Verkon nimi',
'409' : 'Salasana',
'1835' : 'Jokainen vieras, joka luo yhteyden langattomaan verkkoon, tarvitsee tämän salasanan.',
'1715' : 'Suojaustyyppi',
'1836' : 'Yhteys langattomaan verkkoon:',
'1837' : 'Windows',
'1838' : '1. Napsauta hiiren oikealla painikkeella langattoman verkon kuvaketta Windowsin järjestelmäpalkissa ja valitse Näytä käytettävissä olevat verkot avattavasta valikosta.',
'1839' : '2. Kaksoisnapsauta ',
'1840' : ' verkko.',
'1841' : '3. Esiin tulee ikkuna, jossa pyydetään verkkoavainta. Kirjoita salasana ja napsauta OK.',
'1842' : 'Mac OS X',
'1843' : '1. Osoita langattoman verkon kuvaketta valikkopalkissa (yläoikealla) ja valitse ',
'1844' : ' verkko.',
'1845' : '2. Esiin tulee ikkuna, jossa pyydetään verkkoavainta. Kirjoita salasana ja napsauta OK.',
'1832' : 'Kahvilatyyli',
'1833' : 'Avoin tila',
'1201' : 'SSID ei voi olla NOLLA!',
'1812' : 'Salasana on vääränpituinen. Salasanan maksimipituus on 63 ja minimipituus 8.',
'1824' : 'WEP-avaimen on oltava 10 heksadesimaalimerkkiä!',
'414' : 'Sisäänkirjautumisvirhe',
'1811' : 'Vieras-tili on toiminto, jonka avulla käyttäjät voivat luoda Internet-yhteyden, mutta joka rajoittaa kotiverkon käyttöoikeutta. Pyydä verkon järjestelmänvalvojalta vieras-tilin salasana ja kirjoita se alle.',
'1813' : 'Onnistui! Voit nyt avata selaimen ja surffata netissä.',
'909' : 'IP-osoite on reitittimen sisäinen IP-osoite. Voit siirtyä asennuksen lisäkäyttöliittymään kirjoittamalla tämä IP-osoite selaimen osoiteriville. Osoitetta voidaan muuttaa tarvittaessa. Vaihda IP-osoite kirjoittamalla uusi IP-osoite ja napsauttamalla "Tallenna". Valitsemasi IP-osoitteen ei tulisi olla reititettävä. Esimerkkejä ei-reititettävistä IP-osoitteista: 192.168.2.1, 10.0.0.1, 172.16.0.1',
'917' : 'Aliverkon peitettä ei tarvitse muuttaa. Aliverkon peite voidaan muuttaa tarvittaessa. Muuta aliverkon peitettä vain, jos siihen on jokin erityinen syy.',
'929' : 'DHCP-palvelintoiminto helpottaa verkon asetusten määrittämistä, koska se antaa jokaiselle verkon tietokoneelle IP-osoitteen. DHCP-palvelin voidaan poistaa käytöstä tarvittaessa. DHCP-palvelimen käytöstä poistaminen vaatii sen, että sinun on määritettävä kunkin verkon tietokoneen staattinen IP-osoite. IP-ryhmä on niiden IP-osoitteiden alue, jotka on varattu verkon tietokoneiden dynaamisille osoitteille. Oletusalue on 2-200 (199 tietokonetta); jos haluat muuttaa tätä lukua, voit syöttää uuden IP-osoitteen alku- ja loppuarvon ja napsauttaa "Tallenna".',
'935' : 'Voit määrittää paikallisen toimialueen nimen (verkon nimen) verkolle. Tätä asetusta ei tarvitse muuttaa, ellei siihen ole erityistä, edistynyttä syytä. Voit antaa verkolle minkä tahansa nimen, kuten "OMA VERKKO".',
'962' : 'Voit määrittää reititin käyttämään PPPoE:tä kirjoittamalla Internet-palveluntarjoajan antama käyttäjätunnus ja salasana niille varattuihin kohtiin. Jos sinulla ei ole palvelun nimeä tai et tunne sitä, jätä Palvelun nimi -kenttä tyhjäksi. Kun olet kirjoittanut tiedot, napsauta "Tallenna". Kun olet tallentanut tiedot, tilassa lukee "Online", jos reititin on asennettu asianmukaisesti.',
'967' : 'Jotkut ISP:t käyttävät PPTP-protokollaa yhdistäessään tilaajat keskukseen. Tämä edellyttää, että annat runsaasti lisäasetuksia, jotka ISP:n olisi kuulunut antaa. Kun olet tallentanut muutokset, Internet-tilavalo palaa vihreänä, jos asetukset ovat onnistuneet.',
'971' : 'Valitse Telstra Bigpond -yhteystyyppi napsauttamalla "Tallenna".',
'982' : 'Katkaise yhteys X:n jälkeen...',
'983' : 'Tämä katkaisee reitittimen yhteyden ISP:hen, kun toimintaa ei ole ollut tiettyyn aikaan. Tällä vaihtoehdolla voit säästää rahaa, jos maksat Internet-palvelusta minuuttitaksan.',
'htDDNS' : 'Mikä on DDNS?',
'htDNS' : 'Mikä on DNS?',
'htDMZ' : 'Mikä on DMZ?',
'htLAN' : 'Mihin LAN-asetukset vaikuttavat?',
'htWANMain' : 'Mitä ovat WAN-asetukset?',
'htWANMAC' : 'Mikä on MAC-osoite?',
'htWAN_PPPOE' : 'PPPoE-asetukset',
'htWAN_PPTP' : 'PPTP-asetukset',
'htIPv6' : 'Mikä on IPv6?',
'htWifiID' : 'Mitä ovat verkon nimi ja kanava-asetukset?',
'htWifiIDContent' : 'Verkon nimeä kutsutaan SSID:ksi (Service Set ID).  Kaikkien verkon asiakkaiden on tiedettävä SSID, jotta voivat liittyä reitittimen verkkoon.',
'htWifiSec' : 'Mikä on Wi-Fi-suojaus?',
'htWifiSecContent' : 'Kaikissa Belkin-reitittimissä Wi-Fi-suojaus on käytössä lähetyshetkellä.  WI-Fi-suojaus on suojauskerros verkon luvattomalle käytölle.  Kun suojaus on käytössä, verkon käyttö edellyttää salasanan antamista.',
'htWifiWPS' : 'Mikä on WPS (Wi-Fi Protected Setup)?',
'htWifiWPSContent' : 'Se on valinnainen tapa, joka helpottaa suojatun Wi-Fi-verkon asennusta kotiin tai pieneen toimistoon. Laitteet, joissa ei ole WPS:ää (Wi-Fi protected setup), voidaan silti lisätä verkkoon valitsemalla verkon nimi ja kirjoittamalla verkon salasana.',
'htWifiGuest' : 'Miten vierastiliä käytetään?',
'htWifiGuestContent' : 'Kun vierastili on käytössä, se luo erillisen Wi-Fi-verkon, jolla voidaan käyttää Internetiä mutta ei muita verkon laitteita.',
'htAP' : 'Voinko käyttää reititintä tukiasemana?',
'htAPContent' : 'Belkin-reitittimet voidaan määrittää toimimaan ainoastaan tukiasemana, ohittaen kaikki reititys- ja palomuuritoiminnot.  Reititintä käytetään tavallisesti tukiasemana, kun olemassa olevaan verkkoon halutaan lisätä langattomia ominaisuuksia.',
'htQos' : 'Mikä on Belkin Intellistream?',
'htDLNA' : 'Belkin-mediapalvelimen tarjoaa Twonky',
'htPortForward' : 'Mitä on portinsiirto?',
'htPortForwardContent' : 'Portinsiirrolla etätietokoneet voivat muodostaa yhteyden tiettyyn paikallisverkon ohjelmaan tai palveluun. Voit esimerkiksi määrittää portinsiirron suorittamaan Internet-palvelinta (portti 80) verkossa.  Useimmat nykyiset ohjelmat edellyttävät, että käytät portinsiirtoa; ne voivat määrittää automaattisesti tarvitsemansa portit.',
'htWanPing' : 'Mitä WAN ping -esto tekee?',
'htWanPingContent' : 'Se on korkeampi suojaustaso ja estää ulkopuolisia Internet-käyttäjiä saamasta selville IP-osoitettasi. Se ei vastaa verkon ulkopuolelta tuleviin ping-pyyntöihin.',
'htRestart' : 'Miksi reititin käynnistetään uudelleen?',
'htRestoreFC' : 'Mitä tehdasasetusten palauttaminen tekee?',
'htSaveSettings' : 'Miksi minun tulisi tallentaa/varmuuskopioida asetukseni?',
'htRestoreSettings' : 'Mitä edellisten asetusten palauttaminen tarkoittaa?',
'htSystem' : 'Mitä ovat järjestelmäasetukset?',
'htSystemContent' : 'Tältä sivulta voit määrittää erilaisia reitittimen perusasetuksia, kuten aikavyöhyke ja valvojan salasana.',
'htSelfHeal' : 'Mikä on itsekorjautuminen?',
'hLANSettings' : 'Tämä sivu auttaa määrittämään uusia yhteyksiä, sallii kytkeä DHCP:n päälle ja pois ja sallii määrittää paikallisverkon reitittimen IP-osoitteen.',
'htDHCPClientList' : 'Mikä on DHCP-asiakasluettelo?',
'htDHCPClientListContent' : 'Tällä sivulla näkyy jokaisen verkkoon kytketun laitteen IP-osoite, isännän nimi ja MAC-osoite. Jos tietokoneelle ei ole määritetty isännän nimeä, kenttä jää tyhjäksi. Päivitä luettelo napsauttamalla "Päivitä".',
'hWebsiteFilters' : 'Tämä toimii suojauskerroksena vaarallisia/epäasianmukaisia sivustoja vastaan. Internet-suodatin suodattaa sivustoja tarkistamalla niiden nimen epäasianmukaisten sivustojen luetteloa vastaan.',
'hWANSettings' : 'Nämä verkkoasetukset viittaavat Internet-palveluntarjoajan (ISP) kanssa olevaan yhteyteen.   Valitse luettelosta ISP:n tarjoaman yhteyden tyyppi. ',
'htChannel' : 'Vähän kuin radio käyttää erilaisia asemia, reititin voi lähettää eri kanavilla ja kommunikoida verkon laitteiden kanssa. Tavallisesti paras valinta on "Auto".',
'3430' : 'IPv6 (Internet Protocol version 6) on Internet-protokollan (IP) versio, joka on IPv4:n seuraaja; se ohjaa lähes kaikkea Internet-liikennettä. IP-osoitteet ovat lähes lopussa joiltain Internet-palveluntarjoajilta (ISP). IPv6:llä useampia laitteita voi olla yhteydessä Internetiin käyttämällä suurempia lukuja IP-osoitteissa.  ISP kertoo, tuleeko sinun käyttää IPv6:tta.',
'3431' : 'Yhteystyyppi',
'3432' : 'Auto-Config/DHCPv6 (oletusasetus)',
'3433' : 'ISP ilmoittaa alla esitetyt osoitteet. DHCPv6 tarjoaa lisäominaisuuksia yhteyden parantamiseksi.',
'3434' : 'WAN',
'3435' : 'WAN-osoite',
'3436' : 'Yhdyskäytävä',
'3437' : 'LAN',
'3438' : 'Käytä tätä osuutta määrittämään reitittimen sisäisen verkon asetukset. Jos muutat LAN IPv6 -osoitetta tässä, voit joutua säätämään tietokoneverkon asetuksia muodostaaksesi verkkoyhteyden uudelleen.',
'3439' : 'LAN-etuliite',
'3440' : 'Liitännän tunnus',
'3441' : 'Link-Local',
'3442' : 'DNS',
'3443' : 'IPv6 DNS -oletusasetukset on hankittu Internet-palveluntarjoajalta, jos ne ilmoitetaan WAN-reitittimen mainoksissa tai DHCPv6-ilmoituksissa.',
'3444' : 'Ensisijainen',
'3445' : 'Toissijainen',
'3446' : 'PPPoE over IPv6',
'3447' : 'Point-to-Point Protocol over Ethernet (PPPoE) -protokollaa käytetään ensisijaisesti DSL-palveluissa kytkemään DLS-modeemi Internetiin.',
'3448' : 'Sisäänkirjautuminen',
'3450' : 'piilotettu salasana',
'3451' : 'Käyttäjätunnus',
'3452' : 'Salasana',
'3453' : 'Palvelun nimi',
'3454' : '6to4 Tunnel',
'3455' : 'Sallii IPv6-pakettien lähettämisen IPv4-verkossa ilman, että on määritettävä tietyt tunnelit. Tämä yhteystyyppi on sopiva, jos Internet-palveluntarjoaja ei tue IPv6:tta.',
'3456' : '6to4-etävälitysreititin',
'3457' : 'Läpivienti',
'3458' : 'Reitittimeen kytketyt laitteet voivat keskustella keskenään alkuperäisten IPv6-pakettien välityksellä. LAN-verkon IPv6-paketit lähetetään automaattisesti kaikkiin LAN-liittymiin (Ethernet-portit ja sekä 2,4 GHz että 5 GHz langattomat verkot).',
'3459' : 'Kun läpivienti on käytössä, IPv6-paketit kopioidaan myös WAN-liitäntään. (Tämä luo suoran, suojaamattoman yhteyden Internetiin.)',
'3460' : 'Kysy ISP:ltä, tukeeko se IPv6:tta.',
'3461' : 'Staattinen IPv6',
'3462' : 'Staattisia IPv6-osoitteita ei tavallisesti käytetä, sillä niiden hallinta voi olla vaikeaa. Staattista IPv6:tta ei tule käyttää laitteissa, jotka ovat yhteydessä useaan verkkoon, kuten matkatietokoneissa ja mobiililaitteissa.',
'3463' : 'Vain paikallinen läpivienti',
'3464' : 'IPv6 WAN -läpivienti on poistettu käytöstä Kaikki paikalliset LAN- ja Wi-Fi-verkon laitteet voivat yhä keskustella toistensa kanssa suoraan, mutta reititin ei lähetä IPv6-paketteja Internetiin tai lataa niitä sieltä eikä vastaa suoraan mihinkään IPv6-paketteihin.',
'3465' : 'Internet-palveluntarjoaja ei tarjoa IPv6-yhteyttä. Pyydä heiltä tietoja IPv6-tuesta tai yhteyden luomisesta.',
'3466' : 'Vain paikallinen läpivienti määritetään automaattisesti laitteille, jotta ne voivat lähettää IPv6-paketteja toisilleen. Toinen vaihtoehto on käyttää asetusta "6to4 Tunnel", jolloin Internetiä voidaan käyttää IPv4-yhteyden kautta.',
'3467' : 'Kussakin ruudussa tulee olla neljä heksadesimaalista lukua (0-9 ja a-f).',
'3468' : 'Anna muu kuon monilähetysosoite. Monilähetysosoitteet alkavat tavallisesti merkinnällä ff.',
'3469' : 'Etuliitteen pituuden tulisi olla  1-127. Etuliitteen pituus on tavallisesti 64, 56 tai 48.',
'3470' : 'IPv4-yhteyttä ei ole.',
'3471' : 'Lapsilukitus on ohittanut nämä DNS-asetukset.',
'3472' : 'Internet-sivustosuodatin',
'3473' : 'Valitse PPPoE kohdasta Internet WAN > Yhteysasetukset ennen kuin valitset PPPoE over IPv6.',
'3474' : 'Internet-yhteys katkesi. Tarkista WAN-yhteystyyppi tai ota yhteys Internet-palveluntarjoajaan.',
'3475' : 'Internet-palveluntarjoajan oletusarvoinen DNS-palveluntarjoaja',
'gtTryManu' : 'Jos olet tiedä yhteystyyppiä, voit ',
'gtSetManual' : 'määrittää sen manuaalisesti ',
'2100' : 'Käyttö estetty. Kirjoita reitittimen salasana antaaksesi väliaikaisen käyttöoikeuden estettyyn sivuun tai palveluihin.',
'2101' : 'Avaussivu',
'2102' : 'SIIRRY',
'354' : 'Tällä sivulla näkyy jokaisen verkkoon kytketyn tietokoneen IP-osoite, isännän nimi ja MAC-osoite. Jos tietokoneelle ei ole määritetty isännän nimeä, isännän nimikenttä jää tyhjäksi. Kun painat "Virkistä", luettelo päivitetään.',
'355' : 'IP-osoite:',
'356' : 'Isännän nimi',
'357' : 'MAC-osoite',
'370' : 'Tämä sivu auttaa määrittämään uusia yhteyksiä, sallii kytkeä DHCP:n päälle ja pois ja sallii määrittää paikallisverkon reitittimen IP-osoitteen.',
'371' : 'IP-osoite:',
'372' : 'Aliverkon peite',
'373' : 'DHCP-palvelin',
'378' : 'DHCP-palvelintoiminto helpottaa verkon asetusten määrittämistä, koska se antaa jokaiselle verkon tietokoneelle IP-osoitteen. Tähän ei tarvitse tehdä muutoksia.',
'379' : 'IP-osoitejoukon ensimmäiset osoitteet',
'380' : 'IP-osoitejoukon viimeiset osoitteet',
'381' : 'Käyttöaika',
'382' : 'Ikuisesti',
'383' : 'Puoli tuntia',
'384' : '1 tunti',
'385' : 'Kaksi tuntia',
'386' : 'Puoli päivää',
'387' : 'Yksi päivä',
'388' : 'Kaksi päivää',
'389' : 'Yksi viikko',
'390' : 'Kaksi viikkoa',
'391' : 'Aika, jonka DHCP-palvelin varaa IP-osoitteen kullekin tietokoneelle.',
'392' : 'Paikallinen toimialueen nimi',
'393' : 'Valinnainen',
'394' : 'Tällä toiminnolla voit määrittää verkon nimen.',
'397' : 'IP-joukon on oltava samassa aliverkossa kuin yhdyskäytävän IP.',
'398' : 'Viimeisen IP-osoitteen on oltava suurempi kuin ensimmäisen IP-osoitteen.',
'399' : 'LAN IP -osoite ei saa olla DHCP-osoitteiden joukossa.',
'400' : 'Valitsemasi IP-osoitteen ei tulisi olla reititettävä.',
'401' : 'Lähiverkon IP-osoite ei kelpaa. Ensimmäinen numero ei voi olla 127 tai 0',
'404' : 'Lisää selaimen tilapalkin Osoite-kenttään manuaalisesti uusi LAN-osoite.',
'406' : 'Haluatko varmasti muuttaa LAN IP -osoitteen?',
'416' : '192.168.y.x (missä y on väliltä 0–255 ja x on väliltä 1–254.)',
'417' : '10.y.y.x (missä y on väliltä 0–255 ja x on väliltä 1–254.)',
'418' : '172.y.x.x (missä z on väliltä 16–31, y on väliltä 0–255 ja x on väliltä 1–254).<br>',
'713' : 'Väärä paikallisen toimialueen nimi:',
'1228' : 'IP-osoitejoukon ensimmäinen osoite ei kelpaa.',
'1229' : 'IP-osoitejoukon viimeinen osoite ei kelpaa.',
'1240' : 'Lähiverkon IP-osoite ei kelpaa.',
'3' : 'Sisäänkirjautuminen',
'408' : 'Sinun on kirjauduttava sisään salasanalla ennen kuin voit muuttaa mitään asetuksia. Jos et ole vielä määrittänyt omaa salasanaa, jätä tämä kenttä tyhjäksi ja napsauta "Lähetä".',
'410' : 'Oletus = jätä tyhjäksi',
'412' : 'Lähetä',
'1371' : 'Väärä salasana',
'1372' : 'Vahvista salasana ja yritä uudelleen.',
'124' : 'Reititin kirjaa lokiin kaikki reitittimen toiminnot, kuten tietokoneiden sisäänkirjautumisen ja uloskirjautumisen ja kaikki Internetistä tulevat yritykset käyttää reititintä.',
'125' : 'Lokitiedosto',
'126' : 'Tallenna',
'127' : 'Poista',
'1302' : 'Järjestelmäloki',
'1303' : 'Palomuurin loki',
'8' : 'LAN-asetukset',
'9' : 'Paikallisverkon asetukset',
'10' : 'Yhdistetyt laitteet',
'2500' : 'Staattinen reititys',
'11' : 'Internet-WAN',
'335' : 'Yhteystyyppi',
'690' : 'Dynaaminen',
'692' : 'Staattinen',
'694' : 'PPPoE',
'696' : 'PPTP',
'698' : 'Telstra BigPond/OptusNet -kaapeli',
'42' : 'IPV6',
'43' : 'IPv6-yhteys',
'13' : 'DNS',
'14' : 'MAC-osoite',
'16' : 'WIFI',
'17' : 'Verkon nimi',
'18' : 'Turvallisuus',
'803' : '128-bittinen WEP',
'804' : '64-bittinen WEP',
'1296' : 'WPA/WPA2-henkilökohtainen (PSK)',
'1297' : 'WPA/WPA2-yritys (RADIUS)',
'805' : 'WPA (ei Radius-palvelinta)',
'1319' : 'Wi-Fi suojattu asennus',
'777' : 'Käytä tukiasemana',
'833' : 'MAC-osoitteen ohjaus',
'1613' : 'Vieras-tili',
'1850' : 'Lapsilukitus',
'1851' : 'Internet-sivustosuodatin',
'1710' : 'Käytönohjaus',
'20' : 'Tiedotus',
'7151' : 'Liikennekartta',
'7000' : 'Mediapalvelin',
'1780' : 'Torrent Mate',
'1790' : 'Valinnaiset ohjelmat',
'23' : 'Palomuuri',
'24' : 'Portinvälitys',
'25' : 'Asiakkaan IP-suodattimet',
'26' : 'MAC-osoitteen suodatus',
'27' : 'DMZ',
'41' : 'DDNS',
'28' : 'WAN-ping-komennon estäminen',
'29' : 'Turvallisuusloki',
'30' : 'Apuohjelmat',
'32' : 'Käynnistä reititin uudelleen',
'34' : 'Palauta tehdasasetukset',
'35' : 'Tallenna/varmuuskopioi asetukset',
'36' : 'Palauta aikaisemmat asetukset',
'37' : 'Laiteohjelmiston päivitys',
'38' : 'Järjestelmäasetukset',
'39' : 'Itsekorjautuminen',
'1900' : 'Rekisteröinti',
'132' : 'Saapuvan portin alue ei ole oikea.',
'133' : 'Yksityisen portin alue ei ole oikea.',
'134' : 'Tämän toiminnon avulla voit suunnata ulkoiset (Internet) palvelupyynnöt, kuten Internet-palvelinpyynnöt (portti 80), FTP-palvelinpyynnöt (portti 21) tai muut sovelluspyynnöt reitittimen kautta sisäiseen verkkoon.',
'276' : 'Poista tietue',
'277' : 'Lisää',
'278' : 'Kuvaus',
'280' : 'Tyyppi',
'281' : 'Yksityinen IP-osoite',
'282' : 'Yksityinen portti',
'376' : 'kaikki',
'411' : 'Poista',
'648' : 'Merkki ei kelpaa',
'672' : 'Numero ei kelpaa! Sen on oltava 1–65535',
'905' : 'Kaikki kohdat ovat täynnä.\nPoista joitakin tietueita ja yritä uudelleen.',
'906' : 'Haluatko poistaa tietueen?',
'907' : 'Haluatko poistaa kaikki tietueet?',
'1241' : 'WAN IP -osoite ei kelpaa.',
'1250' : 'Portti ei kelpaa!',
'1362' : 'Kuvaus on tyhjä.',
'1601' : 'Automaattinen',
'2055' : 'Saapuvien porttialueet päällekkäin.',
'2056' : 'Yksityiset porttialueet päällekkäin',
'3310' : 'IntelliStream',
'3311' : 'Optimoi Internet-yhteys.',
'3312' : 'Mediapalvelin',
'3313' : 'Jaa mediaa verkon laitteiden välillä.',
'3314' : 'Lapsilukitus',
'3315' : 'DNS-suojaussuodattimet suojaavat Internet-yhteyttä',
'3316' : 'IPv6-yhteys',
'3317' : 'Verkkosi on nyt IPv6-yhteensopiva',
'1852' : 'Tämä toimii suojauskerroksena vaarallisia/epäasianmukaisia sivustoja vastaan. Internet-suodatin suodattaa sivustoja tarkistamalla niiden nimen epäasianmukaisten sivustojen luetteloa vastaan.',
'1854' : 'Suodatusasetukset',
'1856' : 'Ei suodatinta',
'1858' : 'Estä haitalliset sivustot',
'1859' : 'Estä haittaohjelmat, tietojen kalastelu- ja huijaussivustot.',
'1860' : 'Estä haitalliset ja aikuisille tarkoitetut sivustot',
'1861' : 'Estä haittaohjelmat, tietojen kalastelu- ja huijaussivustot ja sivustot, jotka sisältävät seksuaalista sisältöä.',
'1862' : 'Estä haitalliseti sivustot, aikuisille tarkoitetut sivustot ja muut ei-perheystävälliset sivustot.',
'1863' : 'Estä haittaohjelmat, tietojen kalasteju- ja huijaussivustot sekä sivustot, jotka sisältävät seksuaalista materiaalia, aikuissisältöä, abortteja, alkoholia, tupakkaa, rikoksia, kultteja, huumeita, vedonlyöntiä, vihaa, itsemurhia tai väkivaltaa.',
'1864' : 'Voit vaihtaa DNS-osoitteen kohdasta Internet WAN > {DNS}',
'7152' : 'Alla olevat kartat esittävät lähtevän ja saapuvan WAN-liikenteen luokiteltuna eri kategorioihin. Kartat esitetään viimeisen 10 minuutin ajalta (päivitys automaattisesti 5 sekunnin välein).',
'7154' : 'Liikenteen selostus',
'7155' : 'Saapuva liikenne',
'7156' : 'Lähtevä liikenne',
'7157' : 'Voit aktivoida tämän ominaisuuden ottamalla Intellistreamin käyttöön',
'7158' : 'tässä',
'7159' : '.',
'7160' : 'Verkon yhteys ja hallinta',
'7161' : 'Puhe, videokeskustelu ja pelaaminen',
'7162' : 'Internet ja Internet-video',
'7163' : 'Sähköposti ja VPN',
'7164' : 'Lataukset, torrentit ja muut',
'7170' : 'Tavua/s',
'7174' : 'Aika/tunnit:minuutit',
'326' : 'Paikallisverkko',
'327' : 'LAN/WLAN MAC',
'332' : 'DHCP-palvelin',
'333' : 'Internet-asetukset',
'334' : 'WAN MAC -osoite',
'337' : 'WAN IP',
'338' : 'Oletusyhdyskäytävä',
'339' : 'DNS-osoite',
'gtGuestName' : 'Vieras-SSID',
'gtGuestKey' : 'Vierasavain',
'347' : 'Sinun on kirjauduttava sisään ennen kuin voit muuttaa asetuksia.',
'2022' : 'Ainoastaan modeemi',
'2031' : 'Liitä',
'2032' : 'Katkaise',
'2033' : 'Häiriömarginaali',
'2034' : 'Edessä',
'2035' : 'Takana',
'2036' : 'Vaimennus (dB)',
'2037' : 'Lähtöteho (dBm)',
'2038' : 'Tiedonsiirtonopeus (Kbps)',
'tDashboard' : 'Tervetuloa käyttämään Belkin-reitittimen kojetaulua!',
'rtFeature' : 'Ominaisuudet',
'rtLink' : 'Reitittimen linkit',
'p1310t001' : 'Yhteyden tiedot',
'p1310t002' : 'Testaa yhteys uudelleen',
'p1310t003' : 'Edellinen tarkastus',
'p1310t004' : 'Latausnopeus',
'p1310t005' : 'Lähetysnopeus',
'p1000t001' : 'Kytketyt laitteet',
'p1000t002' : 'Näytä kaikki',
'2501' : 'Kirjoita seuraavat määritysparametrit',
'2502' : 'Verkko-osoite',
'2503' : 'Aliverkon peite',
'2504' : 'Yhdyskäytävä',
'396' : 'Kirjoittamasi aliverkon peitteen numero ei kelpaa.',
'1231' : 'Yhdyskäytävä ei kelpaa!',
'1361' : 'IP-osoite ei kelpaa, ensimmäisen numeron on oltava 1–254.',
'1800' : 'IP-osoite ja aliverkon peite eivät ole samat.',
'Support1t011' : 'Lue lisätiedot.',
'Support2t011' : 'Lue lisätiedot.',
'Support2t012' : 'Avaa seuraava URL laitteessa, joka on yhteydessä Internetiin, ja lue, miten ongelma voidaan korjata itse: <STRONG>www.belkin.com/support/asdlkj</STRONG>',
'Support3t011' : 'Lue lisätiedot.',
'Support3t012' : 'Avaa seuraava URL laitteessa, joka on yhteydessä Internetiin, ja lue, miten ongelma voidaan korjata itse: <STRONG>www.belkin.com/support/asdlkj</STRONG>',
'Support6t036' : 'Lue lisätiedot.',
'425' : 'Tämä palauttaa reitittimen alkuperäisiin asetuksiin. Suosittelemme, että <a href="ut_save.html">tallennat/varmuuskopioit asetuksesi</a> ennen alkuperäisten asetusten palauttamista. Kun olet tallentanut reitittimen asetukset, voit palauttaa ne, jos asetukset katoavat tai muuttuvat.',
'426' : 'VAROITUS: Kaikki asetukset katoavat!\nHaluatko varmasti tehdä tämän?',
'427' : 'Oletusasetusten palauttaminen vie enintään $s sekuntia. Älä sammuta reititintä tämän prosessin aikana.',
'428' : 'Ei palauta tehdasasetuksia. Asetukset eivät katoa!',
'429' : 'Palauta oletusasetukset',
'301' : 'Tämä käynnistää reitittimen uudelleen viikoittain, jotta verkon kanssa olisi vähemmän ongelmia.',
'302' : 'Alusta reititin automaattisesti',
'303' : 'Aseta päivät',
'304' : 'Aseta kellonaika',
'527' : 'Tällä voit määrittää reitittimen asetukset mihin tahansa jo tallentamaasi kokoonpanoon.',
'528' : 'Palauta',
'529' : 'Kirjoita sen tiedoston nimi, joka sisältää varmuuskopiointiasetukset.',
'530' : 'Haluatko jatkaa ja palauttaa asetukset?',
'531' : 'Kun asetukset on palautettu, laiteei ehkä vastaa komentoihin jopa minuuttiin.\n\nTämä on normaalia. Älä sammuta laitetta tänä aikana.',
'451' : 'Kun olet tallentanut reitittimen nykyiset asetukset, voit palauttaa ne, jos asetukset katoavat tai muuttuvat. Suosittelemme, että tallennat asetukset ennen laiteohjelmapäivityksiä.',
'539' : 'Tallenna',
'130' : 'Et joko ole kirjoittanut kaikkia IP-osoitteita tai jotkin kirjoittamasi numerot eivät kelpaa. IP-osoiteruutuun kirjoitetun numeron on oltava 1-254.',
'541' : 'Järjestelmänvalvojan salasana:',
'542' : 'Reititin toimitetaan ILMAN salasanaa. Jos haluat lisätä salasanan suojauksen lisäämiseksi, voit määrittää sen tässä.',
'543' : 'Kirjoita nykyinen salasana',
'544' : 'Kirjoita uusi salasana',
'545' : 'Vahvista uusi salasana',
'546' : 'Sisäänkirjautumiseen varattu aika',
'547' : '(1-99 minuuttia)',
'548' : 'Kellonaika ja aikavyöhyke:',
'549' : 'Tammikuu',
'550' : 'Valitse aikavyöhyke. Jos olet alueella, jossa käytetään kesäaikaa, valitse tämä ruutu.',
'551' : 'Aikavyöhyke',
'606' : 'Kesäaika',
'607' : 'Säädä kesäaika automaattisesti',
'608' : 'Etähallinta:',
'609' : 'LISÄTOIMINTO!',
'610' : 'Etähallinnan avulla voit tehdä muutoksia reitittimen asetuksiin mistä tahansa Internetin välityksellä. Tarkista ennen tämän toiminnon käyttöön ottamista,',
'611' : 'VARMISTA, ETTÄ OLET MÄÄRITTÄNYT JÄRJESTELMÄNVALVOJAN SALASANAN.',
'642' : 'Etähallinnan käyttöönotto suurentaa turvallisuusriskiä. Kytke se päälle tarvittaessa vain hetkellisesti ja poista se sitten käytöstä, kun et käytä sitä, ja aseta salasana.',
'612' : 'Mikä tahansa IP-osoite voi hallita reititintä etäyhteyden kautta.',
'613' : 'Vain tämä IP-osoite voi hallita &nbsp;&nbsp;&nbsp;reititintä etäyhteyden kautta.',
'614' : 'Etähallinnan käyttöönotto/poisto käytöstä',
'615' : 'Määrittävää porttia on käytetty virtuaalisessa palvelimessa.',
'616' : 'Määrittävä IP-osoite on ristiriidassa nykyisen WAN IP -osoitteen kanssa.',
'617' : 'UPNP:n käyttöönotto:',
'618' : 'Tämän avulla voit ottaa reitittimen UPnP-toiminnon käyttöön tai pois käytöstä. Jos käytät sovelluksia, jotka tukevat UPnP-toimintoa, UPnP-toiminnon ollessa käytössä nämä sovellukset voivat määrittää reitittimen asetukset automaattisesti.',
'619' : 'UPNP:n käyttöönotto/käytöstä poistaminen',
'620' : 'Laiteohjelmiston automaattisen päivityksen käyttöön ottaminen:',
'621' : 'Tällä toiminnolla voit tarkistaa automaattisesti reitittimen laiteohjelmiston päivitysten saatavuuden.',
'622' : 'Laiteohjelmiston automaattisen päivityksen käyttöön ottaminen tai &nbsp;&nbsp;&nbsp;käytöstä poistaminen',
'623' : 'Nykyinen salasana ei kelpaa.',
'624' : 'Antamasi uusi salasana ei kelpaa. Yritä uudelleen.',
'626' : 'Salasana on vääränpituinen. Salasanan maksimipituus on 12 ja minimipituus 3',
'628' : 'Suosittelemme järjestelmänvalvojan salasanan määrittämistä.',
'629' : 'Ensisijainen NTP-palvelin',
'630' : 'Toissijainen NTP-palvelin',
'640' : 'Etäkäyttöportti',
'738' : 'Kirjoittamasi käyttämättä oloaika ei kelpaa. Numeron on oltava kokonaisluku väliltä 1–99.',
'796' : 'Kun turbotila on otettu käyttöön, reititin tai tukiasema voi käyttää kehyspursketta maksimaalisen suorituskyvyn saavuttamiseksi reitittimen tai tukiaseman kautta 802.11g-asiakkaille. Turbotila toimii 802.11g-asiakkaissa, jotka tukevat turbotilaa. Belkinin 802.11g-asiakkaat, jotka käyttävät uusimpia ohjaimia, tukevat turbotilaa. Asiakkaat, jotka eivät tue turbotilaa, toimivat normaalisti, jos turbotila on otettu käyttöön.',
'1282' : 'Helmikuu',
'1283' : 'Maaliskuu',
'1284' : 'Huhtikuu',
'1285' : 'touko',
'1286' : 'Kesäkuu',
'1287' : 'Heinäkuu',
'1288' : 'Elokuu',
'1289' : 'Syyskuu',
'1290' : 'Lokakuu',
'1291' : 'Marraskuu',
'1292' : 'Joulukuu',
'1373' : 'Australia',
'1374' : 'Uusi-Seelanti',
'1375' : 'Pohjois-Amerikka',
'1376' : 'Eurooppa',
'1377' : 'Aasia, Tyynenmeren alue',
'2300' : '(GMT-12:00) Enewetak, Kwajalein',
'2301' : '(GMT-11:00) Midway Island, Samoa',
'2302' : '(GMT-10:00) Havaiji',
'2303' : '(GMT-09:00) Alaska',
'2304' : '(GMT-08:00) Tyynenmeren aikavyöhyke (USA ja Kanada); Tijuana',
'2305' : '(GMT-07:00) Arizona',
'2306' : '(GMT-07:00) Kalliovuorten aikavyöhyke (USA ja Kanada)',
'2307' : '(GMT-06:00) Keskiaikavyöhyke (USA ja Kanada)',
'2308' : '(GMT-06:00) Mexico City',
'2309' : '(GMT-06:00) Tegucigalpa',
'2310' : '(GMT-06:00) Saskatchewan',
'2311' : '(GMT-05:00) Bogota, Lima, Quito',
'2312' : '(GMT-05:00) Itäinen aikavyöhyke (USA ja Kanada)',
'2313' : '(GMT-05:00) Indiana (itäinen)',
'2314' : '(GMT-04:00) Atlantin aikavyöhyke (Kanada)',
'2315' : '(GMT-04:00) Caracas, La Paz',
'2316' : '(GMT-04:00) Santiago',
'2317' : '(GMT-03:00) Newfoundland',
'2318' : '(GMT-03:00) Brasilia',
'2319' : '(GMT-03:00) Buenos Aires, Georgetown',
'2320' : '(GMT-02:00) Keski-Atlantin aikavyöhyke',
'2321' : '(GMT-01:00) Azorit, Kap Verde',
'2322' : '(GMT) Casablanca, Monrovia',
'2323' : '(GMT) Greenwichin normaaliaika: Lissabon, Lontoo, Edinburgh',
'2324' : '(GMT) Greenwichin normaaliaika; Dublin',
'2325' : '(GMT+01:00) Amsterdam, Berliini, Bern, Rooma',
'2326' : '(GMT+01:00) Tukholma, Wien, Belgrad',
'2327' : '(GMT+01:00) Bratislava, Budapest, Ljubljana',
'2328' : '(GMT+01:00) Praha, Bryssel, Kööpenhamina, Madrid',
'2329' : '(GMT+01:00) Pariisi, Sarajevo, Skopje',
'2330' : '(GMT+01:00) Varsova, Zagreb',
'2331' : '(GMT+02:00) Ateena, Istanbul, Minsk, Vilna, Sofia',
'2332' : '(GMT+02:00) Bukarest',
'2333' : '(GMT+02:00) Kairo',
'2334' : '(GMT+02:00) Harare, Pretoria',
'2335' : '(GMT+02:00) Helsinki, Riika, Tallinna',
'2336' : '(GMT+02:00) Israel',
'2337' : '(GMT+03:00) Bagdad, Kuwait, Nairobi, Riyadh',
'2338' : '(GMT+03:00) Moskova, Pietari,Volgograd, Kazan',
'2339' : '(GMT+02:00) Teheran',
'2340' : '(GMT+04:00) Abu Dhabi, Muscat, Tbilisi',
'2341' : '(GMT+04:00) Kabul',
'2342' : '(GMT+05:00) Islamabad, Karachi, Ekaterinburg',
'2343' : '(GMT+05:30) Delhi',
'2344' : '(GMT+06:00) Almaty, Dhaka',
'2345' : '(GMT+07:00) Bangkok, Jakarta, Hanoi',
'2346' : '(GMT+08:00) Peking, Chongqing, Urumqi',
'2347' : '(GMT+08:00) Hongkong, Perth, Singapore, Taipei',
'2348' : '(GMT+09:00) Tokio, Osaka, Sapporo',
'2349' : '(GMT+09:00) Seoul',
'2350' : '(GMT+09:30) Adelaide, Darwin',
'2351' : '(GMT+10:00) Brisbane',
'2352' : '(GMT+10:00) Canberra, Melbourne, Sydney',
'2353' : '(GMT+10:00) Hobart',
'2354' : '(GMT+10:00) Guam, Port Moresby',
'2355' : '(GMT+11:00) Magadan, Solamon, Uusi-Kaledonia',
'2356' : '(GMT+12:00) Wellington, Auckland',
'2357' : '(GMT+12:00) Fiji',
'2358' : '(GMT+13:00) Nuku`alofa.',
'2370' : 'su',
'2371' : 'ma',
'2372' : 'ti',
'2373' : 'ke',
'2374' : 'to',
'2375' : 'pe',
'2376' : 'la',
'2401' : 'ECO-tila',
'2402' : 'Himmennä etupaneelin merkkivalot',
'2403' : 'Poista radio käytöstä kohteesta',
'2404' : 'paitsi',
'2405' : 'Tällä toiminnolla voit himmentää reitittimen etuosan valot virran säästämiseksi. Voit myös poistaa langattoman radion käytöstä ennalta määritettynä ajankohtana.',
'2406' : 'Aloitusaika ei voi olla myöhemmin kuin lopetusaika!',
'322' : 'Laiteohjelmistoversio',
'431' : 'Belkin voi julkaista aika ajoin uusia versioita reitittimen käyttöohjelmista. Nämä päivitykset sisältävät parannuksia ja korjauksia reitittimeen.',
'432' : '<b>HUOM.</b><a href="ut_save.html"> Luo varmuuskopio nykyisistä asetuksista </a>ennen uuteen laiteohjelmiston versioon päivittämistä.',
'433' : 'Napsauta tätä',
'434' : 'kun haluat siirtyä nykyisten asetusten tallennus-/varmuuskopiointisivulle.',
'435' : 'Tarkista uutta laiteohjelmiston versiota',
'436' : 'Tarkista laiteohjelmisto',
'437' : 'Valmisohjelmiston päivittäminen',
'438' : 'Päivitä',
'439' : 'Määritä päivitystiedoston sijainti. Kirjoita joko tiedoston polku ja tiedostonimi tai siirry tiedoston sijaintikohtaan napsauttamalla Selaa.',
'440' : 'Haluatko varmasti jatkaa päivitystä?',
'441' : 'Päivityksen päätteeksi reititin ei ehkä vastaa komentoihin jopa minuuttiin. Tämä on normaalia. Älä sammuta reititintä äläkä käynnistä sitä uudelleen tänä aikana.',
'1198' : 'Laiteohjelmiston päivitys meneillään.',
'534' : 'Käynnistä reititin uudelleen',
'535' : 'Haluatko varmasti käynnistää reitittimen uudelleen? Reitittimen uudelleen käynnistäminen ei vaikuta asetuksiin.',
'536' : 'Odota $s sekuntia, kunnes reititin käynnistyy uudelleen. Älä sammuta reititintä ennen kuin nollaus on suoritettu loppuun.',
'7001' : 'Nauti omasta musiikistasi, valokuvistasi ja videoistasi mukavasti verkkoon kytketyllä DLNA-laitteella. Palvelun tarjoaa Twonky.',
'7002' : 'DLNA-palvelin',
'7003' : 'Palvelimen nimi',
'7004' : 'Jaetut asemat:',
'7005' : 'Valmis',
'7006' : 'Indeksoidaan...',
'7007' : 'Tarjotaan:',
'7008' : 'videot',
'7009' : 'kappaleet',
'7010' : 'kuvat',
'7011' : 'Ei jaettu verkossa.',
'7012' : 'Reitittimeen ei ole kytketty USB-asemia.',
'7016' : 'Indeksiä päivitetään',
'7017' : 'Anna mediapalvelimelle ystävällinen nimi',
'7018' : 'Ei sallittu merkki',
'7019' : 'Sinulla on enemmän mediaa kuin reititin voi indeksoida, joten tarjoamme ensimmäisen',
'7020' : 'tiedoston.',
'7021' : 'Twonky on digitaalisten kotiohjelmistojen merkki, jonka on luonut PacketVideo Corporation (PV).',
'7022' : 'Kirjoitussuojattua asemaa ei voi indeksoida.',
'7023' : 'Mt',
'7024' : 'Gt',
'7025' : 'Tt',
'7026' : 'video',
'7027' : 'kappale',
'7028' : 'kuva',
'770' : 'Käytä tätä asetusta ainoastaan Bigpond-kaapeli- ja OptusNet-kaapeliyhteyksiä varten. ',
'771' : 'TÄRKEÄÄ:',
'775' : '3) Kytke virtajohto takaisin Belkin-reitittimeen.',
'776' : 'Vahvista, että sinulla on Internet-yhteys, avaamalla Internet-selain, kuten Internet Explorer, Firefox tai Safari, ja vahvista, että voit avata sivustoja.',
'731' : 'Käyttäjätunnus',
'489' : 'Salasana',
'732' : 'Kirjoita salasana uudelleen',
'756' : 'Kirjoita salasana uudelleen!',
'1379' : 'Et joko ole kirjoittanut kaikkia IP-numeroita tai jotkin kirjoittamasi numerot eivät kelpaa. IP-osoitteen on oltava muotoa x.y.y.x (missä y on välillä 0-255 ja x on väliltä 1-254).',
'709' : 'Lisää dynaamiset IP-asetukset kirjoittamalla tiedot alle ja napsauta "Tallenna".',
'710' : 'Isännän nimi',
'711' : 'Isännän nimi = Nimi, jonka jotkin Internet-palveluntarjoajat vaativat yhteyden luomiseksi järjestelmäänsä.',
'712' : 'Muuta WAN MAC -osoite',
'330' : 'IP-osoite',
'331' : 'Aliverkon peite',
'659' : 'MTU ei kelpaa, sen on oltava 500–1500.',
'730' : 'Lisää PPPoE-asetukset kirjoittamalla tiedot alle ja napsauta "Tallenna".',
'733' : 'Palvelutunnus (valinnainen)',
'734' : 'MTU (500-1500)',
'735' : 'Älä muuta MTU-asetusta, ellei ISP vaadi eri arvoa.',
'736' : 'Katkaise yhteys',
'737' : 'minuuttia ilman toimintaa.',
'741' : 'MTU-arvo ei kelpaa',
'2005' : 'IP Internet-palveluntarjoajan antama',
'2021' : 'Kirjoita DNS-asetukset napsauttamalla tätä.',
'2023' : 'Kaksoislainausmerkkejä ei sallita.',
'2024' : 'Käyttäjätunnuksessa ei saa olla ei-hyväksyttyjä merkkejä',
'2025' : 'Kenoviivaa ei sallita.',
'2030' : 'Et joko ole kirjoittanut kaikkia oletusyhdyskäytäviä tai jotkin kirjoittamasi numerot eivät kelpaa. Numeroiden tulee olla 0–255.',
'2052' : 'Salasanassa ei saa olla ei-hyväksyttyjä merkkejä (<,> ja &)',
'691' : 'Dynaaminen yhteystyyppi on kaikkein yleisin. Jos käytät kaapelimodeemia, sinulla on kaikkein todennäköisimmin dynaaminen yhteys. Jos käytössä on kaapelimodeemi tai jos et ole varma yhteystyypistä, käytä tätä.',
'723' : 'Mukaan lukien Internet-palveluntarjoajat, jotka vaativat isäntänimen, ja Internet-palveluntarjoajat, jotka sitovat yhteyden tiettyyn MAC-osoitteeseen.',
'693' : 'Staattinen IP-osoite -yhteystyyppi on harvinaisempi kuin muut. Käytä tätä vaihtoehtoa ainoastaan silloin, jos Internet-palveluntarjoaja antoi sinulle IP-osoitteen, joka ei vaihdu koskaan.',
'724' : 'Reititin tukee yhteyttä Internet-palveluntarjoajaan, joka määrittää staattisen IP-osoitteen.',
'695' : 'Jos käytät DSL-modeemia ja/tai Internet-palveluntarjoajasi antoi sinulle käyttäjänimen ja salasanan, yhteystyyppi on todennäköisimmin PPPoE. Käytä tätä yhteystyyppiä.',
'725' : 'Reititin tukee dynaamista yhteystyyppiä, joka vaatii PPPoE-sisäänkirjautumisen tarkistusta varten.',
'697' : 'Jotkut ISP:t käyttävät PPTP-protokollaa yhdistäessään tilaajat keskukseen. Tämä edellyttää, että annat runsaasti lisäasetuksia, jotka ISP:n olisi kuulunut antaa. Kun olet tallentanut muutokset, Internet-tilavalo palaa vihreänä, jos asetukset ovat onnistuneet.',
'726' : 'Käytettäväksi vain sellaisten ISP:iden kanssa, jotka edellyttävät PPTP-yhteysmenetelmää.',
'699' : 'Käytä tätä asetusta ainoastaan Bigpond-kaapeli- ja OptusNet-kaapeliyhteyksiä varten.',
'728' : 'VAIN australialaisille käyttäjille. Reititin tukee yhteyttä Telstra BigPondiin.',
'2019' : 'Lisää modeemiasetukset kirjoittamalla tiedot alle ja napsauta "Tallenna".',
'tBackToConnectionType' : 'Palaa yhteystyyppiin',
'759' : 'Lisää staattiset IP-asetukset kirjoittamalla tiedot alle ja napsauta "Tallenna".',
'761' : 'Aliverkon peite',
'762' : 'ISP-yhdyskäytäväosoite',
'754' : 'Kirjoita DNS-asetukset napsauttamalla tätä.',
'715' : 'Kullakin verkkoon kytketyllä laitteella on ainutlaatuinen laiteosoite (MAC-osoite), jolla muut verkon ja Internetin laitteet tunnistavat sen.  Jotkut Internet-palveluntarjoajat (ISP:t) vaativat, että kirjoitat verkkokortin tai vanhan reitittimen MAC-osoitteen reitittimen asetuksiin. Jos et ole varma asiasta, kirjoita sen tietokoneen MAC-osoite, joka oli kytketty modeemiin ennen reitittimen asentamista.',
'716' : 'WAN MAC -osoite',
'717' : 'Kloonaa tietokoneen MAC-osoite',
'718' : 'Kloonaa',
'721' : 'Internet/WAN-välilehti, jolla määrität reitittimen asetukset luodaksesi yhteyden Internet-palveluntarjoajaan. Reititin pystyy luomaan yhteyden melkein mihin tahansa Internet-palveluntarjoajan järjestelmään, jos olet määrittänyt reitittimen asetukset Internet-palveluntarjoajan yhteystyyppiä varten. Määritä reititin luomaan yhteys Internet-palveluntarjoajaan napsauttamalla näytön vasemmassa laidassa olevan Internet/WAN-välilehden kohtaa Yhteystyyppi.',
'722' : 'Tuetut yhteystyypit:',
'htWANMainContent' : 'Valitse yhteystyyppi:',
'700' : 'Seuraava',
'744' : 'PPTP-tili',
'745' : 'Salasana',
'746' : 'Kirjoita salasana uudelleen',
'747' : 'Isännän nimi',
'1770' : 'IP Internet-palveluntarjoajan antama',
'1771' : 'kyllä',
'1772' : 'Ei',
'1773' : 'Palvelun osoite',
'750' : 'Aliverkon peite',
'778' : 'Reititin voidaan määrittää toimimaan ainoastaan tukiasemana, ohittaen kaikki reititys- ja palomuuritoiminnot. Tee näin valitsemalla Ota käyttöön ja kirjoittamalla tukiasemalle valitsemasi IP-osoite.',
'779' : 'Tukiasematila:',
'781' : 'Määritä aliverkon peite',
'801' : 'Suojaustila',
'806' : 'Voit määrittää langattoman yhteyden suojaus-/salausasetukset tässä. Suojauksen tulisi olla käytössä parhaan mahdollisen langattoman yhteyden tietosuojan saavuttamiseksi. WPA (Wi-Fi Protected Access) tarjoaa dynaamiset avainmuutokset ja muodostaa parhaan suojausratkaisun. Langattomissa ympäristöissä, joissa kaikki laitteet eivät tue WPA:ta, WEP (Wired Equivalent Privacy) on suositeltu asetus.',
'377' : 'Automaattinen',
'487' : 'KÄYTÖSSÄ',
'488' : 'POIS',
'787' : 'Voit tehdä muutoksia reitittimen langattomiin asetuksiin tässä. Tallenna asetukset napsauttamalla “Tallenna”.',
'788' : 'Langaton kanava',
'789' : 'SSID',
'790' : 'Langaton tila',
'794' : 'SSID-lähetys',
'797' : 'Suojattu tila',
'1300' : 'Laajennuskanava',
'1301' : 'Kaistanleveys',
'1304' : '802.11e/WMM QoS',
'852' : 'Ennalta jaetun avaimen pituuden on oltava 8–63 tai 64 heksadesimaalia',
'856' : 'Wi-Fi Protected Access with a Pre-shared Key: Avain on salasana, joka on sana, lause tai kirjainten ja numeroiden sarja. Avaimen on oltava <b>8</b>–<b>63</b> merkkiä pitkä ja siinä voi olla välilyöntejä ja symboleja, tai <b>64</b> heksadesimaalia (vain 0-F). Jokaisella verkkoon yhteyden luovalla asiakkaalla on oltava sama avain (ennalta jaettu avain).',
'115' : 'Et joko ole kirjoittanut kaikkia heksadesimaalilukuja tai jotkin kirjoittamasi heksadesimaaliluvut eivät kelpaa. Heksadesimaaliluvun on oltava numero 0-9 tai kirjain A-F.',
'308' : '<b>SPI</b> (Stateful Packet Inspection. ) SPI on yritystasolla toimiva Internet-suojausmenetelmätyyppi, jonka HomeConnect-kotiverkkoyhdyskäytävä antaa. SPI:tä käyttävä yhdyskäytävä toimii "palomuurina" ja suojaa verkkoasi hakkereilta.',
'808' : 'HUOMAUTUS:',
'809' : 'Voit luoda heksadesimaaliparit automaattisesti käyttämällä salalausetta: kirjoita salalause tähän ja paina oikealla olevaa painiketta.',
'810' : 'Salalause',
'811' : 'Luo',
'812' : 'Kirjoita salalause',
'814' : 'Avain',
'818' : '(heksadesimaaliparit)',
'296' : '<b>IP-osoite</b> IP on lyhenne sanoista Internet Protocol (Internet-protokolla). IP-osoite koostuu neljästä muutaman numeron sarjasta, joita erottavat pisteet. Jokainen IP-osoite yksilöi yhden tietyn Internet-isäntätietokoneen. Esimerkiksi 192.34.45.8.',
'298' : '<b>ISP</b> Internet-palveluntarjoaja. ISP on yritys, joka tarjoaa Internet-liitäntöjä yksittäisille ihmisille ja muille yrityksille tai organisaatioille.',
'807' : '(13 heksadesimaaliparia)',
'813' : 'Avain ei ole valmis.',
'821' : 'ei ole valmis.',
'1190' : '<br>Voit rekisteröidä dynaamisen DNS-isäntänimen osoitteessa http://www.dyn.com.<br>',
'1339' : 'On suositeltua käyttää WPA/WPA2:ta, kun WPS on käytössä.',
'1363' : 'Meneillään, odota hetki...',
'1364' : 'Virhe havaittu - yritä uudelleen.',
'1365' : 'Istunnot lomittain -virhe: Odota 60 sekuntia ennen kuin käynnistät prosessin uudelleen tai kytke tähän verkkoon manuaalisesti asiakasapuohjelman mukaisesti.',
'1366' : 'Onnistui. Laite on kytketty reitittimeen.',
'1370' : 'PIN ei kelpaa. Laitteen PIN on joko neljän tai kahdeksan numeron mittainen. Tarkista ja yritä uudelleen.',
'1620' : 'Alustaa - Käynnistä WPS PBC asiakaslaitteessa kahden minuutin kuluessa.',
'1621' : 'Alustaa - Käynnistä WPS asiakaslaitteessa kahden minuutin kuluessa.',
'1622' : 'Aikakatkaisu – Asiakkaita ei ole yhteydessä reitittimeen.',
'1623' : 'Wi-Fi suojatun asennuksen viesti',
'1393' : 'WPS-laitepainike',
'1320' : 'Wi-Fi Protected Setup (WPS) on alan standardimenetelmä suojausasennuksen helpottamiseksi ja Wi-Fi-verkkojen hallintaa varten. Nyt voit helposti asentaa ja luoda yhteyden WPA:ta käyttävää 802.11-verkkoa WPS-hyväksyttyjen laitteiden kanssa, jotka käyttävät joko Personal Information Number (PIN)- tai Push Button Configuration (PBC) -menetelmää. Vanhemmat laitteet, joissa ei ole WPS:ää, voidaan lisätä verkkoon käyttäen perinteistä manuaalista määritystä.',
'1321' : 'Personal Information Number (PIN) -menetelmä',
'1322' : 'Kirjoita PIN asiakaslaitteesta ja napsauta Kirjaudu. Käynnistä WPS asiakaslaitteessa sen langattomasta apuohjelmasta tai WPS-sovelluksesta 2 minuutin sisällä.',
'1323' : 'Kirjoita asiakaslaitteen PIN',
'1324' : 'Kirjaudu',
'1325' : 'Jos ulkoinen rekisteröinti on käytettävissä, voit myös kirjoittaa reitittimen PIN-tunnuksen ulkoisen rekisteröinnin kanssa. Muuta reitittimen PIN napsauttamalla Laadi uusi PIN tai nollaa PIN tehdasoletukseen napsauttamalla Palauta oletus-PIN.',
'1326' : 'Reitittimen PIN',
'1327' : 'Luo uusi PIN',
'1328' : 'Palauta oletus-PIN',
'1329' : 'Push Button Configuration (PBC) -menetelmä',
'1330' : 'Pidä reitittimen PBC-painiketta alhaalla 3 sekuntia tai napsauta Käynnistä PBS. Käynnistä PBC laitteessa, jonka haluat kytkeä reitittimeen, 2 minuutin sisällä.',
'1331' : 'Käynnistä PBS',
'1332' : 'Manuaalinen määritysmenetelmä',
'1333' : 'Määritä sellaisille asiakkaille, joissa ei ole WPS:ää, laite seuraavia asetuksia käyttäen.',
'1334' : 'Langaton suojaus',
'1336' : 'Verkon todennus',
'1337' : 'Tietojen salaus',
'1338' : 'Verkkoavain (PSK)',
'1340' : 'Vapauta reitittimen PIN-lukitus',
'1341' : 'Reitittimen PIN on poistettu käytöstä, koska epäonnistuneita yrityksiä on liikaa',
'1390' : 'PIN-koodin tarkistussumma epäonnistui! Tarkista ja yritä uudelleen.',
'1391' : 'PIN ei kelpaa! Laitteen PIN on kahdeksan numeron mittainen. Tarkista ja yritä uudelleen.',
'1392' : 'Määritetty',
'1396' : 'Määritä langaton suojaus manuaalisesti',
'1397' : 'langaton suojaus manuaalisesti.',
'common_err1' : '%s on NOLLA',
'upgrade_err2' : 'Laiteohjelman päivitys keskeytyi riittämättömien resurssien takia. Päivitys epäonnistui.\nYritä uudelleen, kun järjestelmä ei ole käytössä (ei Internet-liikennettä)',
'upgrade_err3' : 'Lähetys ei onnistu. Ota yhteys valvojaan.',
'upgrade_err4' : 'Laiteohjelma on liian suuri, päivitys epäonnistui.',
'upgrade_err5' : 'Laitteessa on jo tuorein laiteohjelma.',
'upgrade_err6' : 'Laiteohjelman päivitys on viallinen. Lataa laiteohjelmatiedosto uudelleen ja yritä uudelleen.',
'show10' : 'DHCP-asiakasluettelo',
'show54' : 'Yhteysasetukset',
'btn2' : 'Ota muutokset käyttöön',
'cff1' : 'Tarkista laiteohjelmisto onnistuneesti',
'PM2' : ':30 iltapäivällä',
'AM2' : ':30 aamupäivällä',
'Dimicons' : 'Himmennä kuvakkeet',
'EcoTo' : '<Check Alignment of PHs>–',
'fvrm' : 'Poista etähallinta käytöstä. Koska sen portti on ristiriidassa virtuaalipalvelimen jonkin sisääntulevan portin kanssa.',
'lsipm2' : 'Lähiverkon IP-osoite ei kelpaa. Viimeinen numero ei voi olla 0 tai 255',
'lsldnm' : 'Väärä paikallisen toimialueen nimi: `~!@#$%^&*()_+[]{}\|;:\'"<>/?.,',
'lsipm5' : 'Valitsemasi IP-osoitteen ei tulisi olla reititettävä.\n  192.168.x.x (missä x on luku välillä 0–255). \n10.x.x.x (missä x on luku välillä 0–255).\n172.y.x.x (missä y on luku välillä 16–31 ja x on luku välillä 0–255).',
'ufy4' : 'Oletusasetusten palauttaminen vie jopa 60 sekuntia. Älä sammuta reititintä tämän prosessin aikana.',
'ufe11' : 'Päivityksen päätteeksi reititin ei ehkä vastaa komentoihin jopa 180 sekuntia. Tämä on normaalia. Älä sammuta reititintä äläkä käynnistä sitä uudelleen tänä aikana.',
'ur5' : 'Odota 30 sekuntia, kunnes reititin käynnistyy uudelleen. Älä sammuta reititintä ennen kuin nollaus on suoritettu loppuun.',
'ur6' : 'Odota 60 sekuntia, kunnes reititin käynnistyy uudelleen. Älä sammuta reititintä ennen kuin nollaus on suoritettu loppuun.',
'usys83' : 'Uusi salasana ja vahvistussalasana-kentät eivät vastaa toisiaan.',
'usys83_1' : 'Salasana ja vahvistussalasana eivät vastaa toisiaan.',
'usys85_1' : 'Valvojan salasanan pituuden tulee olla välillä 3–12.',
'usys88' : 'Salasana on saavuttanut maksimipituuden!',
'usys89' : 'ap.',
'usys90' : 'ip.',
'usys92' : 'Etäkäyttöportin numeron tulee olla välillä 1–65535.',
'usysipm' : 'Et joko ole kirjoittanut kaikkia IP-numeroita tai jotkin kirjoittamasi numerot eivät kelpaa. IP-osoitteen on oltava muotoa x.y.y.z (missä x on välillä 1–223, y on välillä 0–255 ja z on välillä 1–254).',
'self_healing60' : 'Itsestään korjaantuva',
'chkwait' : 'Itsensä korjaava',
'Europe' : 'Eurooppa',
'Australia' : 'Australia ja Uusi-Seelanti',
'AsiaPacific' : 'Aasia, Tyynenmeren alue',
'NorthAmerica' : 'Pohjois-Amerikka',
'vjs1' : 'Virheellinen IP-osoite, liian pitkä. Tarkista osoite uudelleen.',
'vjs2' : 'Virheellinen IP-osoite, puuttuva ".". Tarkista osoite uudelleen!',
'vjs3' : 'Virheellinen IP-osoite, puuttuvia numeroita välillä ".". Tarkista osoite uudelleen!',
'vjs4' : 'Virheellinen IP-osoite, ylimääräinen ".". Tarkista osoite uudelleen!',
'vjs5' : 'Virheellinen IP-osoite, numerot välillä "." ovat liian suuria. Tarkista osoite uudelleen!',
'vm1' : 'Merkki ei kelpaa ',
'vm2' : ' kohdassa ',
'vm3' : 'On oltava ',
'vjs6' : 'Virheellinen vuoden muoto. Kirjoita muodossa (esim. 2002)',
'vm4' : 'Numero ei kelpaa ',
'vjs8' : 'Väärä, on oltava 1970..2037',
'vjs9' : 'Virheellinen kuukauden muoto. Kirjoita muodossa (esim. 01...12)',
'vjs161' : ' ei sisään ',
'vjs162' : ' verkon peite',
'vjs163' : 'Sallittu DHCP-alue on ',
'vjs17' : 'Kirjoitit salasanan eri tavoilla. Tarkista uudelleen!',
'vjs18' : 'Lisää portin numero.',
'vjs19' : 'Portin aloitusnumeron on oltava pienempi kuin viimeisen portin numeron.',
'vjs23' : 'Virheellinen MAC-osoite, se on yleislähetysosoite.',
'vjs24' : 'Virheellinen MAC-osoite, se on nollaosoite.',
'vjs25' : 'Virheellinen MAC-osoite, se on monilähetysosoite.',
'vjs26' : 'Väärä ensimmäinen ja viimeinen IP-osoite, viimeisen IP-osoitteen on oltava suurempi kuin ensimmäisen IP-osoitteen.',
'vjs28' : 'Verkkopeitteen muoto ei kelpaa.',
'vjs29' : 'Virheellinen muoto, verkonpeitteen on oltava  255.255.255.0 or 255.255.255.128 tai 255.255.255.192 tai 255.255.255.224 tai 255.255.255.240 tai 255.255.255.248 tai 255.255.255.252 tai 255.255.255.254',
'vjs30' : 'IP-osoite ei kelpaa. Viimeinen numero ei voi olla 0 tai 255',
'vjs31' : 'Lähiverkon IP-osoite ei kelpaa. Ensimmäinen numero ei voi olla 127',
'vjs32' : 'LAN IP -osoite ei voi olla 0.0.0.0',
'vjs33' : 'Virheellinen lähivrekon IP-osoite, on oltava alle 224.0.0.0',
'vjs42' : 'Kirjoittamasi aliverkon peitteen numerot eivät kelpaa.',
'vjs45' : 'Määritä IP-osoite',
'vjs46' : 'ei kelpaa, korjaa se ensin.',
'wcc2' : 'Valitse yhteystyyppi:',
'wcc13' : 'L2TP',
'wcc14' : 'Jotkut ISP:t käyttävät L2TP-protokollaa yhdistäessään tilaajat keskukseen. Tämä edellyttää, että annat runsaasti lisäasetuksia, jotka ISP:n olisi kuulunut antaa. Kun olet tallentanut muutokset, Internet-tilavalo palaa vihreänä, jos asetukset ovat onnistuneet.',
'wds4_1' : 'Ensisijainen DNS-osoite',
'wds7' : 'Sinun on kirjoitettava Internet-palveluntarjoajan antamat DNS-asetukset, jos et käytä automaattista DNS-toimintoa',
'wds8' : 'Jos haluat muuttaa DNS-toimintoa, siirry ensin kohtaan %2 Sivuston suodattimet %2 ja valitse "Ei suodattimia".',
'wmc6' : 'WAN MAC-osoite ei voi olla sama kuin LAN MAC-osoite. Valitse toinen osoite.',
'wdd9 ' : 'DDNS-palvelua ei ole valittu.\n',
'wdd10' : 'DDNS-palvelu on valittu ja kaikki sivun tiedot menetetään. Haluatko jatkaa?',
'wm10b' : 'Käytettäväksi vain sellaisten ISP:iden kanssa, jotka edellyttävät L2TP-yhteysmenetelmää.',
'pm' : 'Palvelu ei pysty tarkistamaan antamaasi salasanaa. Tarkista, että kirjoitit salasanan oikein.',
'wpp17' : 'L2TP-tili',
'wpp18' : 'L2TP-salasana',
'wpp19' : 'Kirjoita L2TP-tilisi',
'wpp23' : 'IP-osoitteen määrittäminen',
'wpp24' : 'Käytä staattista IP-osoitetta',
'wpp25' : 'Hae dynaamisesti Internet-palveluntarjoajalta',
'wppa7' : 'Oma IP-osoite',
'wppa9' : 'Yhteystunnus (valinnainen)',
'wppa13' : 'Kirjoita PPTP-tilisi',
'wppa18' : 'Virheellinen palvelun nimi.',
'ws2' : 'Lisää staattiset IP-asetukset kirjoittamalla tiedot alle ja napsauta Ota muutokset käyttöön.',
'sm_1' : 'Kirjoittamasi aliverkon peitteet eivät kelpaa.',
'ws8' : 'Kirjoita/vahvista DNS-osoitteen asetukset seuraavassa näytössä',
'wt2' : 'Kun napsautat Ota muutokset käyttöön, reititin käynnistetään uudelleen. Kun reititin on käynnistetty uudelleen, sinun on toimittava seuraavasti',
'wt3' : '1) Irrota virtajohto sekä kaapelimodeemista ja Belkinin reitittimestä.',
'wt4' : '2) Kytke virtajohto takaisin kaapelimodeemiin ja odota, kunnes kaikki modeemin valot lopettavat vilkkumisen',
'wt5' : '3) Kytke virtajohto takaisin Belkinin reitittimeen',
'wt6' : 'Vahvista, että sinulla on Internet-yhteys, avaamalla Internet-selain, kuten Internet Explorer, Firefox tai Safari, ja vahvista, että voit avata sivustoja.',
'wlad2' : 'Ota käyttöön/pois käytöstä',
'wlc2' : 'Voit tehdä muutoksia reitittimen langattomiin asetuksiin tässä. Tallenna asetukset napsauttamalla Ota muutokset käyttöön.',
'wlcgb' : '802.11b+g',
'wlcg' : '802.11g',
'wlcb' : '802.11b',
'wlc20' : '20 MHz',
'wlc22' : '20/40 MHz',
'wlcoff' : 'POIS',
'wlcngb1' : '802.11b ja 802.11g ja 1x1 802.11n',
'wlcn1' : '1x1 802.11n',
'wlcngb2' : '802.11b & 802.11g & 802.11n',
'wlcn2' : '802.11n',
'wlcgn' : '802.11g+n',
'wlca' : '802.11a',
'wlcan' : '802.11a ja 802.11n',
'wlc26' : 'Verkon nimen piilottaminen poistaa WPS:n käytöstä.',
'wlc27' : 'Suojaustyypin vaihtaminen poistaa WPS:n käytöstä.',
'wlc28' : 'WPS on poistettu käytöstä <A href=%s><B>langattoman yhteyden suojaustyypin takia</B></A>.',
'wlc29' : 'WPS on poistettu käytöstä, koska verkon nimi (SSID) on piilotettu.',
'wlc30' : 'WPS on poistettu käytöstä, koska verkon nimi (SSID) on piilotettu, ja <A href=%s><B>langattoman yhteyden suojaustyypin </B></A>takia.',
'wlc31' : 'WPS:n kytkeminen päälle tuo verkon nimen (SSID) näkyviin.',
'wlc32' : 'WPS:n kytkeminen päälle vaihtaa suojaustyypiksi WPA/WPA2. Nykyinen verkon salasana toimii hyvin.',
'wlc33' : 'WPS:n kytkeminen päälle näyttää verkon nimen (SSID) ja vaihtaa suojaustyypiksi WPA/WPA2. Nykyinen verkon salasana toimii hyvin.',
'wle3a' : 'WPA-PSK',
'wle3b' : 'WPA2-PSK',
'wle3c' : 'WPA-PSK + WPA2-PSK',
'wps1' : 'Wi-Fi Protected Setup (WPS)',
'wps3' : 'Määritä langaton suojaus',
'wps17' : 'Suorita sellaisessa asiakaslaitteessa, jossa ei ole WPS:ään Belkin Security Assistant CD:ltä tai määritä laite manuaalisesti seuraavin asetuksin:',
'wps23' : 'WPA/WPA2-henkilökohtainen (PSK)',
'wps25' : 'TKIP+AES',
'wps27' : 'Verkkoavain (WEP):',
'wps28_1' : 'NOLLA',
'wle11' : 'Avain 1',
'wle12' : 'Avain 2',
'wle13' : 'Avain 3',
'wle14' : 'Avain 4',
'wpskerr2' : 'Avaimen on oltava 8–63 merkkiä pitkä ja siinä voi olla välilyöntejä ja symboleja, tai 64 heksadesimaalia (vain 0-F).',
'wpskerr4' : 'Vierasavain on syötettävä',
'wpskerr7' : 'Vierasavaimen on oltava 8 merkkiä pitkä',
'wpskerr8' : 'Vierasavain ei voi olla sama kuin verkkoavain',
'wlguest1' : 'SSID:in ei saa olla sama kuin Guest SSID:in',
'wlguest2' : 'Guest SSID:in ei saa olla sama kuin SSID:in',
'rs_crc' : 'Palautusvirhe < CRC >',
'rs_long' : 'Palautusvirhe <too long>',
'rs_disposition' : 'Palautusvirhe <No Content-Disposition>',
'rs_getpid' : 'Palautusvirhe <Can\'t get pid!>',
'rs_unmatchpid' : 'Palautusvirhe <Unmatched pid>',
'msg_ddns3 ' : 'Toimialueen nimikenttä ei voi olla tyhjä.\n',
'msg_lan_dhcp1 ' : 'Pyydetään tietoja yhdyskäytävältä.',
'msg_lan_dhcp2 ' : 'Asetustietokantaa päivitetään.',
'msg_wan_stat1 ' : 'IP-osoite ',
'msg_wan_stat2 ' : ' ei ole ',
'msg_wan_stat3 ' : ' verkossa.',
'msg_wls_chan2 ' : 'Guest SSID ei voi olla NOLLA!\n',
'fw_not_interrupt ' : 'ÄLÄ KESKEYTÄ TOIMINTOA TAI KYTKE REITITINTÄ IRTI., koska tämä voi tehdä reitittimestä käyttökelvottoman.',
'msg_invalid_char ' : 'Virheellisiä merkkejä löytyi. Sallitut merkit: 0-9, a-z, A-Z, `~!@#$%^&*()_-+=|\\{}[]:";\',.<>/?',
'msg_invalid_domain_char ' : 'Väärä paikallisen toimialueen nimi'+': ~!@#$%^&*()=+{}[]|":;\\\'?/<>,`',
'msg_invalid_char_1 ' : 'Virheellisiä merkkejä löytyi. Vain kirjaimet ja numerot hyväksytään. Seuraavia symboleja ei hyväksytä: `~!@#$%^&*()_+[]{}\\|;:\'"<>/?.,',
'msg_hostIP_invalid ' : 'Isännän IP-osoite on virheellinen. Se ei saa olla sama kuin reitittimen LAN IP.\n',
'msg_dmzIP ' : 'DMZ IP-osoite.',
'msg_blank ' : ' ei voi olla tyhjä.\n',
'msg_space ' : 'Tyhjiä tai välilyöntejä ei sallita kohdassa %s\n',
'msg_blank_in ' : 'Tyhjiä ei sallita kohdassa %s\n',
'msg_allspaces ' : '%s ei voi muodostua pelkistä välilyönneistä\n',
'msg_invalid ' : 'Virheellisiä merkkejä kohteessa %s\nSallitut merkit ovat: \n%s\n\n',
'msg_check_invalid ' : '%s sisältää väärän numeron\n',
'msg_valid_range ' : '%s on virheellinen. Sallittu alue on %s–%s\n',
'msg_invalid_mac ' : 'Virheellinen MAC-osoite.\n',
'msg_multi_mac' : 'MAC-osoite ei voi olla monilähetysosoite.\n',
'msg_confirmDefault ' : 'Varoitus!\nTehdasastusten lataaminen poistaa kaikki nykyiset asetukset.\nHaluatko varmasti tehdä tämän?',
'Allowed_Services' : 'Sallitut palvelut',
'Allowing_Url' : 'Internet-sivuston salliminen URL-osoitteen perusteella ',
'Allowing_Keyword' : 'Internet-sivuston salliminen hakusanan perusteella',
'wipv63' : 'Reitittimeen kytketyt laitteet voivat keskustella keskenään alkuperäisten IPv6-pakettien välityksellä. LAN-verkon IPv6-paketit lähetetään automaattisesti kaikkiin LAN-liittymiin (Ethernet-portit ja sekä 2,4 GHz että 5 GHz langattomat verkot).',
'wipv64' : 'Kun läpivienti on käytössä, IPv6-paketit kopioidaan myös WAN-liitäntään.(Kun käytössä, tämä luo suoran, suojaamattoman yhteyden Internetiin.)',
'wipv65' : 'Kysy suoraan ISP:ltä, tukeeko se IPv6:tta.',
'wipv67' : 'Internet IPv6',
'wipv68' : 'Verkkosi on IPv6-yhteensopiva.',
'wipv69' : 'Läpivienti',
'mf1' : 'Näillä sivuilla voit säätää reitittimen käyttäytymistä sen vastaanottaessa tietyn tyyppistä medialiikennettä.',
'mf2' : 'Optimoi Internet-yhteytesi automaattisesti eri liikennetyyppien mukaan.',
'mf3' : 'Näe, miten reititintä käytetään.',
'mf8' : 'Tallennettu kohteeseen %s',
'mf10' : 'Lataa',
'mf11' : 'Lataa',
'mf12' : 'Nopeus',
'mf15' : 'Ota asetukset käyttöön',
'mf18' : 'Anna luku välillä {0.1-%s}.',
'mf20' : 'Ainoastaan välillä {0.1-%s}.',
'mf26' : 'Tallennettu manuaalisesti kohteeseen %s',
'mf32' : 'tai',
'mf44' : 'Automaattisen nopeustestin tulos ei välttämättä ole 100 % tarkka, Internet-liikenteen ja muiden tekijöiden takia. Voit vertailla tuloksia vierailemalla nopeustestisivustolla tai pyytämällä ISP:tä tarkistamaan Internet-nopeus. Jos nopeustulokset eivät ole yhdenmukaisia, voit antaa arvot manuaalisesti.',
'media_dlna18' : 'Nimetön',
'media_dlna21' : 'Sinulla on enemmän mediaa kuin reititin voi indeksoida, joten ilmoitamme ensimmäiset 12000.',
'errSubnetMaskInvalid_2' : 'Aliverkon peite ei näytä aliverkon peitteeltä. Tarkista arvo.',
'htWAN_L2TP' : 'L2TP-asetukset',
'htWAN_L2TPContent' : 'Jotkut ISP:t käyttävät L2TP-protokollaa yhdistäessään tilaajat keskukseen. Tämä edellyttää, että annat runsaasti lisäasetuksia, jotka ISP:n olisi kuulunut antaa. Kun olet tallentanut muutokset, Internet-tilavalo palaa vihreänä, jos asetukset ovat onnistuneet.',
'p400t001_error' : 'Saa kaikki yhdistettyä nopeammin.',
'p400t018_error' : 'Miksi muuttaisin nimeä?',
'p400t019_error' : 'Tämän näet, kun etsit verkosta muita laitteita. Ainutlaatuiset verkon nimet on helpompi löytää ja muistaa. Jos langattomat laitteet olivat aikaisemmin yhteydessä toiseen reitittimeen, saman verkkonimen ja salasanan käyttö tässä tarkoittaa, että niille ei tarvitse määrittää uusia; yhteys muodostetaan automaattisesti. ',
'dhToggleBand2G' : 'Näytä 2.4 Ghz',
'772' : 'Kun napsautat Ota muutokset käyttöön, reititin käynnistetään uudelleen. Kun reititin on käynnistetty uudelleen, sinun on toimittava seuraavasti',
'773' : '1) Irrota virtajohto sekä kaapelimodeemista ja Belkinin reitittimestä.',
'774' : '2) Kytke virtajohto takaisin kaapelimodeemiin ja odota, kunnes kaikki modeemin valot lopettavat vilkkumisen.',
'dft001' : 'Näyttää siltä, että yhteys puuttuu.',
'dft002' : 'Jos tarvitset tukea ja laitteesi on yhteydessä Internetiin, vieraile sivulla <strong>help.belkin.com</strong>.',
'gtNoSecCard     ' : 'Kirjoita verkkosi nimi ja salasana muistiin, jotta voit viitata siihen myöhemmin.',
'gtFWUpdateMobileError' : 'Laitteisto-ohjelmistotiedostoja ei voi tällä hetkellä lähettää mobiililaitteista.',
'gtSettingsMobileError' : 'Asetustiedostoja ei voi tällä hetkellä lähettää mobiililaitteista.',
'gtMoreFromInternet' : 'Muodosta Internet-yhteys saadaksesi lisätietoja',
'gtCantConnect' : 'Emme voi muodostaa Internet-yhteyttä.',
'p802t004' : 'Siirry laitteen langattoman verkon valikkoon',
'p803t004' : 'Siirry laitteen langattoman verkon valikkoon',
'PIC-S1t001' : 'Estä kaikki laitteet',
'gtUnnamedDevice' : 'Nimetön laite',
'gtIC' : 'Internet-ohjaus',
'errDefaultGatewayEmpty' : 'Oletusyhdyskäytävän osoite ei voi olla tyhjä.',
'errDefaultGatewayInvalid' : 'Oletusyhdyskäytävän osoitteen on oltava pistein erotetut neljä lukua (0–255). Tarkista arvo.',
'errDNSServerEmpty' : 'DNS-palvelimen osoite ei voi olla tyhjä.',
'errDNSServerInvalid' : 'DNS-palvelimen osoitteen on oltava pistein erotetut neljä lukua (0–255). Tarkista arvo.',
'errIpAddressEmpty' : 'IP-osoite ei voi olla tyhjä.',
'errIpAddressInvalid' : 'IP-osoitteen on oltava pistein erotetut neljä lukua (0–255). Tarkista arvo.',
'errorGenericCommitError' : 'Tämä oli virhe.  Korjaa alla olevat asetukset ja yritä uudelleen.',
'errorSSIDEmpty' : 'Anna langattoman verkon nimi.',
'errorSSIDInvalidChars' : 'Verkon nimi voi sisältää ainoastaan kirjaimia, numeroita, välimerkkejä ja välilyöntejä.',
'errorSSIDTooLong' : 'Verkon nimen on oltava alle 32 merkkiä pitkä.',
'errorWEPPasswordEmpty' : 'Suojaa langaton verkko antamalla salasana.',
'errorWEPPasswordInvalidChars' : 'Verkon salasana saa sisältää vain numeroita ja kirjaimia välillä A–F.',
'errorWEPPasswordInvalidLength' : 'Verkon salasanan on oltava 10–26 merkkiä pitkä.',
'errorWPAPasswordEmpty' : 'Suojaa langaton verkko antamalla salasana.',
'errorWPAPasswordInvalidChars' : 'Verkon salasana voi sisältää ainoastaan kirjaimia, numeroita, välimerkkejä ja välilyöntejä.',
'errorWPAPasswordInvalidLength' : 'Verkon salasanan on oltava 8–63 merkkiä pitkä.',
'errPasswordEmpty' : 'Kirjoita salasana.',
'errPasswordInvalid' : 'Käyttäjätunnus voi sisältää ainoastaan kirjaimia, numeroita, välimerkkejä ja välilyöntejä.',
'errPasswordTooLong' : 'Salasanan on oltava alle 64 merkkiä pitkä.',
'errServAddressEmpty' : 'Kirjoita palvelun osoite.',
'errSubnetMaskEmpty' : 'Aliverkon peite ei voi olla tyhjä.',
'errSubnetMaskInvalid' : 'Aliverkon peitteen on oltava pistein erotetut neljä lukua (0–255). Tarkista arvo.',
'errUsernameInvalid' : 'Käyttäjätunnus voi sisältää ainoastaan kirjaimia, numeroita, välimerkkejä ja välilyöntejä.',
'errUsernameTooLong' : 'Käyttäjätunnuksen on oltava alle 64 merkkiä pitkä.',
'errVCIInvalid' : 'Valitse luku väliltä 0–65535. Internet-palveluntarjoaja pystyy kertomaan oikean käytettävän arvon.',
'errVPIInvalid' : 'Valitse luku väliltä 0–255. Internet-palveluntarjoaja pystyy kertomaan oikean käytettävän arvon.',
'p802t003' : 'Koska jotkut asetukset ovat muuttuneet, voit joutua valitsemaan langattoman verkon uudelleen:',
'p802t011' : 'Koska jotkut asetukset ovat muuttuneet, voit joutua valitsemaan langattoman verkon uudelleen:',
'dft003' : 'Tarvitsetko neuvoja?',
'dft004' : 'Onko sinulla kysyttävää tai tarvitsetko tukea? Online-palvelukeskuksestamme saa apua 24 tuntia päivässä.<br><a href="http://www.belkin.com/support/" id="dfBelkinHelp">Belkin Help Center &rarr;</a>',
'dhChangeSSID' : 'Muuta &raquo;',
'dhPassLabel' : 'Salasana:',
'dhPasswordObscured24' : 't********',
'dhShow' : 'Näytä:',
'dhSSID24' : '{blahblah}',
'dhToggle24' : '2,4 Ghz',
'dhToggle5' : '5,0 Ghz',
'DownSpeed' : '32.6',
'errUsernameEmpty' : 'Kirjoita käyttäjätunnus.',
'gt10am' : '10.00',
'gt10pm' : '22.00',
'gt11am' : '11.00',
'gt11pm' : '23.00',
'gt1am' : '1.00',
'gt1amNextDay' : '1.00 seuraavana päivänä',
'gt1pm' : '13.00',
'gt24ghz' : '2,4Ghz',
'gt24GKey' : '2,4 GHz avain',
'gt24GName' : '2,4 GHz SSID',
'gt24PSK' : 'Salasana',
'gt24Sec' : 'WPA2',
'gt24SSID' : '12345678',
'gt2am' : '2.00',
'gt2pm' : '14.00',
'gt3am' : '3.00',
'gt3pm' : '15.00',
'gt4am' : '4.00',
'gt4pm' : '16.00',
'gt50ghz' : '5 Ghz',
'gt5am' : '5.00',
'gtGuestKey' : 'Vierasavain',
'gt5GMedia' : '5 GHz:n alueella on sama nimi, mutta loppuun on lisätty ".media".',
'gtGuestName' : 'Vieras-SSID',
'gt5pm' : '17.00',
'gt6am' : '6.00',
'gt6pm' : '18.00',
'gt7am' : '7.00',
'gt7pm' : '19.00',
'gt8am' : '8.00',
'gt8pm' : '20.00',
'gt9am' : '9.00',
'gt9pm' : '21.00',
'gtAccessControl' : 'Internet-lapsilukitus',
'gtAccessPoint' : 'Käytä tukiasemana',
'gtADSL' : 'ADSL',
'gtAdvSettings' : 'Lisäasetukset',
'gtAllElseFails' : 'Jos mikään muu ei toimi, soita Belkinin tukeen numerossa&nbsp;',
'gtAndroidConnect01' : 'Android-puhelimet ja taulutietokoneet',
'gtAndroidConnect02' : 'Laitteesi Asetukset-sovelluksessa on käytettävissä olevien langattomien laitteiden valikko.',
'gtAndroidConnect03' : 'Avaa <strong>Asetukset</strong> -sovellus ja valitse <strong>Langaton ja verkko</strong>.',
'gtAndroidConnect04' : 'Valitse tästä <strong>Wi-Fi</strong>, jolloin näet käytettävissä olevien verkkojen luettelon.',
'gtAndroidConnect05' : 'Valitse <strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong>. <!-- IF NOT OPEN --> <span tid="gtNotOpen">Jos kysytään, kirjoita verkon salasana <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>.</span> <!-- /IF -->',
'gtAt' : 'klo',
'gtAttenuation' : 'Vaimennus',
'gtAustralia' : 'Australia',
'gtBackToDashboard' : '&larr; Takaisin ohjauspöytään',
'gtBelkin' : 'Belkin',
'gtBootLoader' : 'Lataus',
'gtCantConnect' : 'Emme saa yhteyttä ISP:hen.',
'gtCantConnectNoResponse' : 'Et voi luoda Internet-yhteyttä – Internet-palveluntarjoaja ei vastannut.',
'gtChina' : 'Kiina',
'gtClientList' : 'Kytketyt laitteet',
'gtClose' : 'Sulje',
'gtConfig' : 'Määritä',
'gtConfigureRouter' : 'Määritä reititin',
'gtConnDevices' : 'Kytketyt laitteet',
'gtConnectingToNew' : 'Yhteyden muodostaminen uuteen verkkoon',
'gtConnectionDet' : 'Yhteyden tiedot',
'gtConnType' : 'Yhteystyyppi',
'gtContentFiltering' : 'Internet-sivustosuodatin',
'gtCopyright' : 'Copyright &copy; 2012. Belkin, Kaikki Oikeudet Pidätetään.',
'gtCurrTimezone' : 'Eurooppa/Helsinki {REPLACE THIS SPAN WITH DETECTED Belkin TZ ID description}',
'gtDashboard' : '&larr; Ohjauspöytä',
'gtDashTitle' : 'Belkinin reitittimen ohjauspöytä',
'gtDataRate' : 'Tiedonsiirtonopeus',
'gtDDNS' : 'DDNS',
'gtDHCPList' : 'Kytketyt laitteet',
'gtDHCPServer' : 'DHCP-palvelin',
'gtDMZ' : 'DMZ',
'gtDNS' : 'DNS',
'gtDown' : 'Alas',
'gtDownloadSpeed' : 'Latausnopeus',
'gtEncap' : 'Kapselointi:',
'gtFileInstallError' : 'Tätä tiedostoa ei voitu asentaa – ehkä sen tiedostotyyppi on väärä',
'gtFileLoadError' : 'Tätä tiedostoa ei voitu ladata – ehkä sen tiedostotyyppi on väärä',
'gtFirewall' : 'Palomuuri',
'gtFirmware' : 'Laiteohjelmisto',
'gtFirmwareUpdate' : 'Laiteohjelmiston päivitys',
'gtFrance' : 'Ranska',
'gtFreshest' : 'Hankimme uusinta versiota laiteohjelmasta',
'gtFrom' : 'Kohteesta:',
'gtFWUpdate' : 'Laiteohjelmiston päivitys',
'gtFWUpToDate' : 'Laiteohjelma on nyt ajan tasalla.',
'gtGermany' : 'Saksa',
'gtGuestAccess' : 'Vieras-tili',
'gtGuestNetwork' : 'Vieras verkko',
'gtHomeNetwork' : 'Kotiverkko',
'gtIfYouKnowConnection1' : 'Jos tunnet yhteystyypin, voit <a href="700-SelectConnection.htm" id="ISP1a010">määrittää sen manuaalisesti &raquo;</a>',
'gtIfYouKnowConnection2' : 'Jos tunnet yhteystyypin, voit <a href="700-SelectConnection.htm" id="ISP2a010">määrittää sen manuaalisesti &raquo;</a>',
'gtIfYouKnowConnection3' : 'Jos tunnet yhteystyypin, voit <a href="700-SelectConnection.htm" id="ISP3a010">määrittää sen manuaalisesti &raquo;</a>',
'gtIfYouKnowConnection4' : 'Jos tunnet yhteystyypin, voit <a href="700-SelectConnection.htm" id="ISP4a010">määrittää sen manuaalisesti &raquo;</a>',
'gtIfYouKnowConnection4a' : 'Jos tunnet yhteystyypin, voit <a href="700-SelectConnection.htm" id="ISP4aa010">määrittää sen manuaalisesti &raquo;</a>',
'gtIfYouKnowConnection5' : 'Jos tunnet yhteystyypin, voit <a href="700-SelectConnection.htm" id="ISP5a010">määrittää sen manuaalisesti &raquo;</a>',
'gtIfYouKnowConnection6' : 'Jos tunnet yhteystyypin, voit <a href="700-SelectConnection.htm" id="ISP6a010">määrittää sen manuaalisesti &raquo;</a>',
'gtIfYouKnowConnection7' : 'Jos tunnet yhteystyypin, voit <a href="700-SelectConnection.htm" id="ISP7a010">määrittää sen manuaalisesti &raquo;</a>',
'gtIntellistream' : 'IntelliStream',
'gtInterleavePath' : 'Interleave-polku',
'gtInternetSettings' : 'Internet-asetukset',
'gtIOSConnect01' : 'iPhone, iPad ja iPod Touch',
'gtIOSConnect02' : 'Laitteesi Asetukset-sovelluksessa on käytettävissä olevien langattomien laitteiden valikko.',
'gtIOSConnect03' : 'Avaa <strong>Asetukset</strong>-sovellus ja valitse <strong>Wi-Fi</strong>.',
'gtIOSConnect04' : 'Valitse <strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong> verkkoluettelosta. <!-- IF NOT OPEN --> <span tid="gtNotOpen">Jos kysytään, kirjoita verkon salasana <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>.</span> <!-- /IF -->',
'gtIPv6' : 'IPv6',
'gtIPV6Connection' : 'IPv6-yhteys',
'gtISP' : 'ISP-yhteystyyppi',
'gtJapan' : 'Japani',
'gtLANIP' : 'LAN:in IP-osoite',
'gtLANMAC' : 'LAN/WLAN MAC',
'gtLANSettings' : 'LAN-asetukset',
'gtLANSubnet' : 'LAN:in aliverkonpeite',
'gtLLC' : 'LLC',
'gtLoadPrevSettings' : 'Lataa aikaisemmat asetukset',
'gtLocalNetwork' : 'Paikallisverkko',
'gtLocalSettings' : 'Paikallisverkon asetukset',
'gtLocked' : 'lukittu',
'gtMACAddress' : 'MAC-osoite',
'gtMACAddressFiltering' : 'MAC-osoitteen suodatus',
'gtMacConnect01' : 'Mac OS X',
'gtMacConnect02' : 'Tietokoneesi tarjoaa käytettävissä olevien langattomien verkkojen valikkopalkin oikeassa laidassa.',
'gtMacConnect03' : 'Napsauta langattoman yhteyden aaltokuvaketta.',
'gtMacConnect04' : 'Valitse <strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong> verkkoluettelosta. <!-- IF NOT OPEN --> <span tid="gtNotOpen">Jos kysytään, kirjoita verkon salasana <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>.</span> <!-- /IF -->',
'gtMaybeLater' : 'Ehkä myöhemmin',
'gtMbitPerSec' : 'Mt/s',
'gtMeaning' : 'Mitä tämä tarkoittaa?',
'gtMedia' : 'Tiedotus',
'gtMediaServer' : 'Mediapalvelin',
'gtmidnight' : 'Keskiyö',
'gtModel' : 'Malli',
'gtName' : 'Nimi',
'gtNeedMoreHelp' : 'Tarvitsetko lisää apua?',
'gtNetName' : 'Verkon nimi',
'gtNewFWAvailableModem' : 'Modeemiisi löytyy uusi laiteohjelma.',
'gtNewFWAvailableRouter' : 'Reitittimeesi löytyy uusi laiteohjelma.',
'gtNewFWAvailableRouterAndModem' : 'Reitittimeesi ja modeemiisi löytyy uusi laiteohjelma.',
'gtNext' : 'Seuraava',
'gtNo' : 'Ei',
'gtNoiseMargin' : 'Häiriömarginaali',
'gtNoMyNet' : 'En näe verkkoa',
'gtNoon' : 'Keskipäivä',
'gtNoSecCard' : 'Kirjoita verkkosi nimi ja salasana muistiin, jotta voit viitata siihen myöhemmin.',
'gtNotOpen' : 'Jos kysytään, kirjoita verkon salasana <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>.',
'gtNZ' : 'Uusi-Seelanti',
'gtOffline' : 'Ei käytössä',
'gtOnline' : 'Online',
'gtOptionalSoftware' : 'Valinnaiset ohjelmat',
'gtOptionalSW' : 'Valinnaiset ohjelmat',
'gtOptSW' : 'Valinnaiset ohjelmat',
'gt-OR-' : '–TAI-',
'gtOther' : '...',
'gtOutputPower' : 'Lähtöteho',
'gtParentalControls' : 'Lapsilukitus',
'gtPass' : 'Salasana:',
'gtPIC' : 'Internet-lapsilukitus',
'gtPICOtherTimes' : 'Muina aikoina tämä laite ei voi käyttää Internetiä.',
'gtPleaseCallISP' : 'Ota yhteys Internet-palveluntarjoajaan',
'gtPortForwarding' : 'Portinvälitys',
'gtPrint' : 'Tulosta',
'gtReadAllAboutIt' : 'Lisäohjeita:',
'gtReconnectingHell' : 'Luo yhteyden uudelleen…',
'gtRegister' : 'Rekisteröi',
'gtRegistration' : 'Rekisteröinti',
'gtRestartRouter' : 'Käynnistä reititin uudelleen',
'gtRestoreDef' : 'Palauta oletusasetukset',
'gtRestoreFactDefault' : 'Palauta tehdasasetukset',
'gtRestoreFactDefaults' : 'Palauta tehdasasetukset',
'gtRestoreSettigns' : 'Palauta asetukset',
'gtRetest' : 'Testaa yhteys uudelleen',
'gtRouterDetails' : 'Reitittimen tiedot',
'gtRouterInfo' : 'Reitittimen tiedot',
'gtSave' : 'Tallenna',
'gtSaveCurrentSettings' : 'Tallenna nykyiset asetukset',
'gtSaved' : 'Nimetön laite tallennettu',
'gtSaveRestore' : 'Tallenna/palauta asetukset',
'gtSaveRestoreSettings' : 'Tallenna/palauta asetukset',
'gtSaveSettings' : 'Tallenna/varmuuskopioi asetukset',
'gtSecLog' : 'Turvallisuusloki',
'gtSecurity' : 'Turvallisuus',
'gtSelectLang' : 'Valitse kieli:',
'gtSelfHeal' : 'Itsekorjautuminen',
'gtSelfHealing' : 'Itsekorjautuminen',
'gtSerialSupport' : 'Seuraavalla sivulla kirjaamme reittimen sarjanumeron tukitarkoituksia varten.',
'gtShowtime' : 'Esitysaika',
'gtSpeedTestResults' : 'Edellinen tarkistus: 1 päivä sitten klo 15.57',
'gtStaticRouting' : 'Staattinen reititys',
'gtStatus' : 'Tila',
'gtSystemSettings' : 'Järjestelmäasetukset',
'gtTo' : 'Loppuarvo:',
'gtTraffStats' : 'Tilastotiedot',
'gtTryAgain' : 'Yritä uudelleen',
'gtUnlocked' : 'auki',
'gtUp' : 'Ylös',
'gtUpdate' : 'päivitä',
'gtUpdateNoPowerModem' : 'Päivitämme modeemia uudella laiteohjelmalla. Älä katkaise virtaa tämän aikana.',
'gtUpdateNoPowerRouter' : 'Päivitämme reititintä uudella laiteohjelmalla. Älä katkaise virtaa tämän aikana.',
'gtUploadSpeed' : 'Lähetysnopeus',
'gtUSA' : 'Yhdysvallat',
'gtUserName' : 'Käyttäjätunnus:',
'gtUtils' : 'Apuohjelmat',
'gtVCI' : 'VCI:',
'gtVCMUX' : 'VC/MUX',
'gtVPI' : 'VPI:',
'gtWAN' : 'WAN-asetukset',
'gtWANDNS' : 'DNS-osoite',
'gtWANGateway' : 'WAN:in yhdyskäytävä',
'gtWANIP' : 'WAN IP -osoite',
'gtWANMAC' : 'WAN MAC -osoite',
'gtWANPingBlocking' : 'WAN-ping-komennon estäminen',
'gtWANSubnet' : 'WAN:in aliverkonpeite',
'gtWebsiteFilter' : 'Internet-sivustosuodatin',
'gtWelcome' : 'Tervetuloa',
'gtWiFi' : 'WIFI',
'gtWifiSettings' : 'WiFi-asetustesi muuttaminen on onnistunut.',
'gtWinConnect01' : 'Windows 7 tai 8',
'gtWinConnect02' : 'Tietokone tarjoaa käytettävissä olevien langattomien verkkojen valikkopalkin oikeassa laidassa.',
'gtWinConnect03' : 'Napsauta oikealla painikkeella kuvaketta, jossa näkyy signaalinvoimakkuus.',
'gtWinConnect04' : 'Valitse <strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong>. <!-- IF NOT OPEN --> <span tid="gtNotOpen">Jos kysytään, kirjoita verkon salasana <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>.</span> <!-- /IF -->',
'gtWinConnect05' : 'Windows Vista ja Windows XP',
'gtWinConnect06' : 'Tietokone tarjoaa käytettävissä olevien langattomien verkkojen valikkopalkin oikeassa laidassa.',
'gtWinConnect07' : 'Napsauta hiiren oikealla painikkeella kuvaketta, joka esittää tietokonetta ja langattomia aaltoja (XP) tai kahta tietokonetta (Vista).',
'gtWinConnect08' : 'Valitse valikosta <strong>Näytä käytettävissä olevat langattomat verkot</strong> (XP) tai <strong>Luo yhteys verkkoon</strong> (Vista).',
'gtWinConnect09' : 'Valitse <strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong>. <!-- IF NOT OPEN --> <span tid="gtNotOpen">Jos kysytään, kirjoita verkon salasana <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>.</span> <!-- /IF -->',
'gtWireless' : 'Langattomat tuotteet',
'gtWiring' : 'Kytkennät',
'gtWPSShort' : 'WPS',
'gtWPS' : 'Wi-Fi suojattu asennus',
'gtYes' : 'kyllä',
'htFWUpdate' : 'Mitä ovat laiteohjelmapäivitykset?',
'htFWUpdateContent' : 'Belkin voi julkaista aika ajoin uusia versioita reitittimen käyttöohjelmista. Nämä päivitykset sisältävät parannuksia ja korjauksia reitittimeen.<br><br>HUOM: Luo varmuuskopio nykyisistä asetuksista ennen uuteen laiteohjelmiston versioon päivittämistä.',
'htParent' : 'Mikä on sivustosuodatin?',
'htPIC' : 'Internet-ohjaus',
'htPICBlocked' : 'Internet-yhteys on poistettu käytöstä',
'htPICBlockedContent' : 'Palauta pääsy kun olet valmis palauttamaan kaikkien laitteiden Internet-yhteyden.',
'htPICContent' : 'Internet-ohjauksella voit nyt määrittää ajan, jolloin kunkin laitteen Internet-yhteys estetään.',
'htSaveRestore' : 'Mitä tarkoittaa asetusten tallentaminen, lataaminen tai palauttaminen?',
'htSaveRestoreContent' : 'Reititin muistaa mm. verkon nimen, salasanan tms. asetukset. Nämä asetukset voidaan tallentaa (varmuuskopiona) ja ne voidaan ladata takaisin reitittimeen. Reitittimen asetukset voidaan palauttaa takaisin alkuperäisiin tehtaan oletusasetuksiin.',
'htSaveRestoreContentMobile' : '<br>* iPhonessa, iPadissa ja iPod Touchissa asetustiedostoa ei voi tallentaa. Tallenna ja lataa asetustiedosto käyttämällä toista laitetta, kuten kannettavaa tietokonetta.',
'ISP1t003' : 'Kerro, että reititin pystyi hankkimaan IP-osoitteen, mutta DNS ei toimi.',
'ISP1t007' : 'DNS muuntaa nimet, kuten "belkin.com", numeerisiksi osoitteiksi (IP-osoitteiksi), joiden avulla tietokoneet navigoivat Internetissä. Reitittimellä on IP-osoite, mikä tarkoittaa, että se on yhteydessä Internetiin, mutta DNS ei toimi, joten et voi surffata, mikä viittaa vahvasti siihen, että ISP:n puolella on jotain vikaa.   <span class="nub"></span>',
'ISP2t003' : 'Kerro, että reititin pystyi hankkimaan IP-osoitteen ja että DNS toimii, mutta emme saa vastausta ping-pyyntöön keneltäkään.',
'ISP2t007' : 'Lähetämme ping-pyynnön muille Internet-koneille testataksemme, pystymmekö keskustelemaan niiden kanssa. DNS muuntaa nimet, kuten "belkin.com", numeerisiksi osoitteiksi (IP-osoitteiksi), joiden avulla tietokoneet navigoivat Internetissä. Reitittimellä on IP-osoite, mikä tarkoittaa, että se on yhteydessä Internetiin, ja ISP:n antama DNS toimii, mutta emme saa vastausta ping-pyyntöön keneltäkään. Tämä viittaa siihen, että ISP:n puolella on jotain vikaa. <span class="nub"></span>',
'ISP3t004' : 'Kerro, että käyttäjätunnus ja salasana hyväksytään, mutta sinulla ei silti ole Internet-yhteyttä.',
'ISP3t007' : 'Lähetämme ping-pyynnön muille Internet-koneille testataksemme, pystymmekö keskustelemaan niiden kanssa. ISP hyväksyi käyttäjätunnuksen ja salasanan, mutta emme saa vastausta ping-pyyntöön, joten emme voi surffata. Tämä viittaa siihen, että ISP:n puolella on jotain vikaa.  <span class="nub"></span>',
'ISP4t003' : 'Kerro, että käyttäjätunnusta ja salasanaa ei hyväksytty useasta yrityksestä huolimatta.',
'ISP4t007' : 'Internet-yhteytesi vaatii käyttäjätunnuksen ja salasanan, mutta ISP ei hyväksynyt niitä, kun ne annettiin. ISP voi varmistaa, että tietosi ovat oikeat.  <span class="nub"></span>',
'ISP5t003' : 'Kerro, että valitsit dynaamisen yhteyden mutta et saanut IP-osoitetta.',
'ISP5t007' : 'IP-osoite tunnistaa reitittimen ja muut laitteet Internetissä. ISP ei anna reitittimelle osoitetta, ja ilman IP-osoitetta ei voida muodostaa yhteyttä. Tämä viittaa siihen, että ISP:n puolella on jotain vikaa tai että yhteytesi ei ole dynaaminen yhteys.  <span class="nub"></span>',
'ISP6t003' : 'Kerro, että valitsit staattisen yhteyden mutta et saanut yhteyttä Internetiin.',
'ISP6t007' : 'Käytämme staattista yhteyttä, kun ISP on antamut yhden tai useamman määrätyn IP-osoitteen käytettäväksi.  <span class="nub"></span>',
'ISP7t003' : 'Kerro heille, että VPI/VCI-asetukset eivät toimi ja että haluaisit heidän antavan sinulle oikeat luvut.',
'ISP7t007' : 'VPI ja VCI kertovat reitittimelle, mitä polkua Internet-palveluntarjoajaan saa yhteyden. Emme pystyneet tunnistamaan oikeita asetuksia. <span class="nub"></span>',
'Network24Passkey' : '{REPLACE WITH 2.4 PASSWORD}',
'Network24SSID' : '{REPLACE WITH 2.4 SSID}',
'p100t002' : 'Muodostetaan Internet-yhteys.',
'p100t003' : 'Olet kytkemässä uutta reititintä, joten annetaan sen keskustella Internet-palveluntarjoajan kanssa.',
'p100t004' : 'Muodostetaan Internet-yhteys.',
'p100t005' : 'Olet kytkemässä uutta reititintä, joten annetaan sen keskustella Internet-palveluntarjoajan kanssa.',
'p100t007' : 'Paikanna yhteyteni',
'p100t008' : 'Jos olet varma yhteystyypistäsi, voit <a href="700-SelectConnection.htm" id="p100a009" tid="p100t009">määritä se manuaalisesti &raquo;</a> tai siirry suoraan <a href="000-Dashboard.htm" id="p100a010" tid="p100t010">ohjauspöytään &raquo;</a>.',
'p100t009' : 'määritä se manuaalisesti &raquo;',
'p100t010' : 'ohjauspöytä &raquo;',
'p100t013' : 'Tällä hetkellä näytetään sivut &nbsp;',
'p100t024' : 'Lähes automaattinen asennus',
'p100t025' : 'Tarkistamme ensin automaattisesti kytkennät ja tunnistamme, mitä liitäntätyyppiä Internet-palveluntarjoajan (ISP) kanssa käytetään. Tämä tapahtuu pääasiassa automaattisesti. Sitten varmistamme, että reitittimen ohjelmisto on ajan tasalla. <span class="nub"></span>',
'p1010MRt001' : 'Modeemin kanssa keskustelu tuottaa vaikeuksia.',
'p1010MRt002' : 'Uskomme, että kytkennässä on jotain vikaa.',
'p1010MRt003' : 'Näin voit korjata ongelman:',
'p1010MRt004' : 'Varmista, että modeemireititin on kytketty puhelinpistorasiaan, josta on Internet-yhteys. Pitäisi olla verkkokaapeli modeemireitittimen DSL-portista (harmaa liitäntä ylälaidassa) puhelinpistorasiaan.',
'p1010MRt005' : 'Varmista, että modeemi on päällä. Sen verkkolaitteen tulisi olla kytketty molemmista päistä, ja modeemissa tulisi palaa vähintään yksi valo.',
'p1010MRt006' : 'Modeemin tulisi olla kytketty reitittimen keltaiseen porttiin kaapelilla. Tämä kaapeli välittää signaalin modeemilta reitittimelle; ilman sitä et pääse Internetiin.',
'p1010MRt007' : 'Jos nämä ovat molemmat kuten pitäisikin, voit kokeilla käynnistää modeemin uudelleen irrottamalla sen verkkolaitteesta, odottamalla 15 sekuntia ja kytkemällä sen takaisin. Jos modeemissa on akku, sinun tulee etsiä modeemin nollauspainike ja käyttää sitä.',
'p1010MRt008' : 'Näiden yhteyksien tulisi näyttää tällaisilta:',
'p1010MRt009' : 'Odotamme yhteyttä samalla kun tarkistat tilanteen.',
'p1010MRt010' : 'Yleisin kytkentäongelma on kytkentä modeemin ja reitittimen välillä. On tärkeää tarkistaa kaapelin molemmat päät. Yhden pään tulee olla kytketty uuden reitittimen keltaiseen porttiin; toisen pään tulee olla kytketty modeemin vastaavaan porttiin. Eri modeeminvalmistajat merkitsevät portit eri tavalla; ne voi olla merkitty "data", "LAN", "network" tai "Ethernet".  <span class="nub"></span>',
'p1020t001' : 'Keskustelu Internet-palveluntarjoajan kanssa tuottaa vaikeuksia.',
'p1020t002' : 'Käynnistä modeemireititin uudelleen.',
'p1020t003' : 'Internet-yhteyttä ei saada, joten kokeile modeemireitittimen uudelleenkäynnistämistä.',
'p1020t004' : 'Sammuta modeemireititin. Tämä tapahtuu tavallisesti painamalla modeemireitittimenn kytkintä tai irrottamalla sen verkkolaite.',
'p1020t005' : 'Odota 15 sekuntia.',
'p1020t006' : 'Kytke modeemireititin taas päälle.',
'p1020t007' : 'Muutaman sekunnin jälkeen sen valot palavat ja siitä pitäisi olla yhteys Internetiin.',
'p1020t008' : 'Jos ongelma jatkuu, ota yhteys Internet-yhteys, jotta tilillesi voidaan suorittaa vianmääritys.',
'p1020t009' : 'Odotamme, että modeemireititin sammuu ja käynnistyy, ja sitten jatkamme automaattisesti.',
'p1020t010' : 'Miksi modeemi käynnistetään uudelleen.',
'p1020t011' : 'Joidenkin modeemien on käynnistyttävä uudelleen, jotta ne voivat alkaa kommunikoida uuden reitittimen tai vieraan tietokoneen kanssa. Jos taas Internet-palveluntarjoajan kanssa on vaikeuksia, modeemi voi katkaista yhteyden odottamatta. Näemme modeemin mutta emme Internetiä, joten pikainen uudelleenkäynnistys luultavasti korjaa tilanteen.<span class="nub"></span>',
'p1100t001' : 'Laiteohjelmiston päivitys on saatavilla!',
'p1100t002' : 'Suosittelemme reitittimen päivitystä tuoreimpaan laiteohjelmaan sen varmistamiseksi, että kaikki toimii kunnolla.',
'p1100t003' : 'Näytä, mitä uutta',
'p1201t001' : 'Lukitse kojelauta salasanalla.',
'p1201t002' : 'Lukitse kojelauta antamalla salasana:',
'p1201t003' : 'Anna salasana.',
'gtSetPassword' : 'Määritä salasana',
'p1201t005' : 'Peruuta',
'p1210t001' : 'Kojelauta on lukittu.',
'p1210t002' : 'Kirjoita salasana:',
'p1210t003' : 'Kirjoita salasana.',
'p1210t004' : 'Salasanasi on virheellinen.',
'p1210t005' : 'Päästä minut sisään!',
'p1300t001' : 'Vähän enemmän tehoa.',
'p1300t002' : 'Saat enemmän irti Internet-yhteydestä asentamalla Intellistreamin. Tähän sisältyy nopeustestin suorittaminen.',
'p1300t003' : 'Asenna Intellistream',
'p1300t004' : 'Ehkä myöhemmin',
'p1302t001' : 'Laiteohjelmisto on ajan tasalla.',
'p1316t001' : 'Päivitetyn laiteohjelmiston asennus epäonnistui – yritä uudelleen napsauttamalla "Tarkista, onko uutta laiteohjelmistoa".',
'p1318t001' : 'Päivitystiedosto ei ole oikeantyyppinen tai sen versio ei ole oikea tätä laitetta varten. Päivitys epäonnistui. Hanki oikea tiedosto ja yritä uudelleen.',
'p1333t001' : 'Laiteohjelman päivitys onnistui.',
'p1400t001' : 'Saa USB-portista kaikki irti.',
'p1400t002' : 'Voit asentaa eräitä valinnaisia ohjelmia, joilla saat kaiken irti reitittimen USB-portista.',
'p1400t003' : 'Näytä valinnaiset ohjelmat',
'p1500t001' : 'Olet tässä.',
'p1500t002' : 'Näyttää siltä, että olet <span tid="gtCurrTimezone">Eurooppa/Helsinki {REPLACE THIS SPAN WITH DETECTED Belkin TZ ID description}</span> -aikavyöhykkeellä. Pitääkö se paikkansa?',
'p1500t003' : 'Totta',
'p1500t004' : 'Anna minun valita',
'p200t001' : 'Muodostaa yhteyttä...',
'p200t002' : ' Tarkistamme reitittimen fyysiset yhteydet.',
'p202At001' : 'Edelleen meneillään...',
'p202At002' : ' Tunnistamme Internet-palveluntarjoajan liitäntätyypin. Tämä saattaa kestää joitakin minuutteja.',
'p202Bt001' : 'Edelleen meneillään...',
'p202Bt002' : ' Tarkistamme, edellyttääkö Internet-palveluntarjoaja salasanaa. Tämä saattaa kestää joitakin minuutteja.',
'p202Ct001' : 'Edelleen meneillään...',
'p202Ct002' : ' Yhteyttä testataan.',
'p202t001' : 'Muodostaa yhteyttä...',
'p202t002' : ' Tunnistamme Internet-palveluntarjoajan liitäntätyypin.',
'p208t001' : 'Ovatko VPI/VCI-numerot käden ulottuvilla?',
'p208t002' : 'Jos haluat luoda Internet-yhteyden, kirjoita VPI- ja VCI-numerot. NIiden avulla tunnistetaan tiedonsiirtoreitti, jota Internet-palveluntarjoaja haluaa käytettävän.',
'p208t003' : 'Internet-palveluntarjoajan olisi pitänyt antaa nämä numerot. Jos et löydä niitä, ota yhteys Internet-palveluntarjoajaan.',
'p208t006' : '0',
'p208t007' : '0',
'p208t009' : 'Tarkista yhteys',
'p208t011' : 'VPI ja VCI',
'p208t012' : 'VPI (Virtual Path Identifier) ja VCI (Virtual Circuit Identifier) ilmoittavat reitittimelle, mitä reittiä tulisi käyttää yhteydessä Internet-palveluntarjoajaan. Koetamme automaattisesti muutamia yleisasetuksia ennen kuin pyydämme sinua auttamaan.<span class="nub"></span>',
'p209t001' : 'Näissä asetuksissa on jotain vikaa.',
'p209t002' : 'Internet-palveluntarjoaja ei pitänyt näistä VPI/VCI-numeroista. Vielä kerran?',
'p210CXt001' : 'Sinulla on PPPoE-yhteys.',
'p210CXt002' : 'Tarvitset käyttäjätunnuksen ja salasanan, jotta voit käyttää Internetiä.',
'p210CXt004' : '<strong>Internet-palveluntarjoaja on varmasti antanut nämä tiedot. Jos et löydä niitä, ota yhteys Internet-palveluntarjoajaan.</strong>',
'p210CXt006' : '0',
'p210CXt007' : '0',
'p210CXt016' : 'Tarkista yhteys',
'p210CXt017' : 'PPPoE',
'p210CXt018' : 'Point-to-Point Protocol over Ethernet luo suojatun yhteyden reitittimen ja Internet-palveluntarjoajan välille. Tele-yritykset käyttävät sitä tavallisesti.<span class="nub"></span>',
'p210DXt001' : 'Sinulla on PPPoA-yhteys.',
'p210DXt002' : 'Tarvitset käyttäjätunnuksen ja salasanan, jotta voit käyttää Internetiä.',
'p210DXt004' : '<strong>Internet-palveluntarjoaja on varmasti antanut nämä tiedot. Jos et löydä niitä, ota yhteys Internet-palveluntarjoajaan.</strong>',
'p210DXt006' : '0',
'p210DXt007' : '0',
'p210DXt016' : 'Tarkista yhteys',
'p210DXt017' : 'PPPoA',
'p210DXt018' : 'Point-to-Point Protocol over ATM luo suojatun yhteyden reitittimen ja Internet-palveluntarjoajan välille. Puhelinlaitokset käyttävät yleensä tätä asetusta.<span class="nub"></span>',
'p210t001' : 'Sinulla on PPPoE DSL -yhteys.',
'p210t002' : 'Tarvitset käyttäjätunnuksen ja salasanan, jotta voit käyttää Internetiä.',
'p210t003' : '<strong>Internet-palveluntarjoaja (ISP) on varmasti antanut nämä tiedot. Jos et löydä niitä, ota yhteys Internet-palveluntarjoajaan.</strong>',
'p210t005' : 'Internet-käyttäjätunnus:',
'p210t009' : 'Tarkista yhteys',
'p210t010' : 'PPPoE',
'p210t011' : 'Point-to-Point Protocol over Ethernet luo suojatun yhteyden reitittimen ja Internet-palveluntarjoajan välille. Tele-yritykset käyttävät sitä tavallisesti.<span class="nub"></span>',
'p211t001' : 'Muodostaa yhteyttä...',
'p211t002' : ' Yritämme kirjautua sisään Internet-palveluntarjoajan palvelimeen. Tämä voi viedä ainakin pari minuuttia.',
'p212DXt001' : 'PPPoA-asetuksissa on jotain vikaa.',
'p212DXt002' : 'Käyttäjätunnus, salasana tai molemmat ovat virheellisiä. Yritä uudelleen. Jos et löydä oikeita tietoja, ota yhteys ISP:hen.',
'p212t001' : 'PPPoE-asetuksissa on jotain vikaa.',
'p212t002' : 'Käyttäjätunnus, salasana tai molemmat ovat virheellisiä. Yritä uudelleen. Jos et löydä oikeita tietoja, ota yhteys ISP:hen.',
'p220t002' : 'Luo Internet-yhteys kirjoittamalla käyttäjätunnus, salasana ja palvelun osoita.',
'p220t003' : '<strong>Internet-palveluntarjoaja on varmasti antanut nämä tiedot. Jos et löydä sitä, ota yhteys Internet-palveluntarjoajaan.</strong>',
'p220t006' : 'Internet-käyttäjätunnus:',
'p220t007' : 'Palvelun osoite:',
'p220t010' : 'Tarkista yhteys',
'p220t013' : 'Sinulla on L2TP- tai PPTP-yhteys.',
'p220t014' : 'Tai valitse yhteys manuaalisesti &raquo;',
'p220t015' : 'L2TP ja PPTP',
'p220t016' : 'Sekä L2TP (Layer 2 Tunneling Protocol) että PPTP (Point-to-Point Tunneling Protocol) luovat yksityisen ja salaisen yhteyden Internet-palveluntarjoajaan.<span class="nub"></span>',
'p221t001' : 'Muodostaa yhteyttä...',
'p221t002' : ' Yritämme kirjautua sisään Internet-palveluntarjoajan palvelimeen. Tämä saattaa kestää jopa 2 minuuttia.',
'p222t002' : 'Käyttäjätunnus, salasana tai molemmat ovat virheellisiä. Yritä uudelleen. Jos et löydä oikeita tietoja, ota yhteys ISP:hen.',
'p222t004' : 'Asetuksissa on jotain vikaa.',
'p2300t001' : 'Asennettu laiteohjelmiston versio:',
'p2300t002' : 'Päivitä laiteohjelmisto paikallisesti tallannetusta tiedostosta:',
'p2300t006' : 'Haluatko varmasti asentaa tiedoston {{file}}?',
'p2300t010' : 'Tarkista, onko uutta laiteohjelmistoa',
'p2400t006' : 'Nykyiset asetukset korvataan. Haluatko varmasti ladata tiedoston {{file}}?',
'p2410t001' : 'Haluatko varmasti palauttaa tehtaan oletusasetukset?',
'p2410t002' : 'Kun napsautat \'Kyllä\', reitittimen asetukset, kuten nimi ja salasana, korvataan alkuperäisillä tehtaan asetuksilla.',
'p300t005' : 'Sinulla on nyt Internet-yhteys.',
'p310t001' : 'Päivitys on saatavilla!',
'p310t001x' : 'Tämän päivityksen (v2.1.0c) sisältö:',
'p310t002' : 'Asenna laiteohjelma lukemalla ja hyväksymällä käyttöoikeussopimus.',
'p310t003' : 'Käyttöoikeussopimus',
'p310t004' : 'Hyväksyn käyttöoikeussopimuksen.',
'p310t005' : 'Asenna päivitys',
'p310t006' : 'Mikä on laiteohjelma?',
'p310t007' : 'Laiteohjelma on reititintä käyttävä ohjelmisto. Laiteohjelma päivitetään parantamaan reitittimen toimintaa, joten on hyvä varmistaa, että sinulla on tuorein versio.  <span class="nub"></span>',
'p315t001' : 'Uutta laiteohjelmaa ladataan.',
'p315t002' : 'Latauksen eteneminen:',
'p315t003' : 'Mikä on laiteohjelma?',
'p315t004' : 'Laiteohjelma on reititintä käyttävä ohjelmisto. Laiteohjelma päivitetään parantamaan reitittimen toimintaa, joten on hyvä varmistaa, että sinulla on tuorein versio.  <span class="nub"></span>',
'p320t001' : 'Uutta laiteohjelmaa asennetaan.',
'p320t002' : 'Kun uusi laiteohjelma on asennettu, käynnistämme reitittimen uudelleen asennuksen päättämiseksi.',
'p320t004' : 'Mikä on laiteohjelma?',
'p320t005' : 'Laiteohjelma on reititintä käyttävä ohjelmisto. Laiteohjelma päivitetään parantamaan reitittimen toimintaa, joten on hyvä varmistaa, että sinulla on tuorein versio.  <span class="nub"></span>',
'p320t006' : 'Tähän kuluu noin kolme minuuttia. Päivityksen eteneminen:',
'p320t010' : 'Kun uusi laiteohjelma on asennettu, käynnistämme modeemin uudelleen asennuksen päättämiseksi.',
'p321t001' : 'Reititintä käynnistetään uudelleen',
'p321t002' : 'Modeemia käynnistetään uudelleen',
'p321t003' : 'Nyt kun laiteohjelma on asennettu, meidän on käynnistettävä reititin uudelleen tehdäksemme siitä virallisen.',
'p321t004' : 'Käynnistetään uudelleen:',
'p321t005' : 'Laiteohjelmiston päivitykset',
'p321t006' : 'Laiteohjelmalla reititin toteuttaa verkko- ja suojausprotokollat. Päivitykset parantavat luotettavuutta ja toimintaa, joten on fiksua hankkia tuorein versio. <span class="nub"></span>',
'p321t010' : 'Nyt kun laiteohjelma on asennettu, meidän on käynnistettävä modeemi uudelleen tehdäksemme siitä virallisen.',
'p330t001' : 'Tarkistetaan yhteysnopeutta...',
'p330t002' : 'Pikainen nopeustesti auttaa reititintä optimoimaan Internet-yhteyden. Tämä kestää minuutin, pari.',
'p331t001' : 'Laiteohjelma on ajan tasalla.',
'p332t001' : 'Yritämme päivittää laiteohjelman uudelleen myöhemmin.',
'p333t001' : 'Laiteohjelma on päivitetty.',
'p334t001' : 'Nopeustestin tulokset!',
'p334t002' : 'Saimme selville seuraavat seikat:',
'p334t003' : 'Latausnopeus',
'p334t004' : 'Mt/s',
'p334t005' : 'Lähetysnopeus',
'p334t006' : 'Mt/s',
'p340t002' : ' Muodostamme reitittimen yhteyden uudelleen, jotta voimme jatkaa.',
'p341t001' : 'Käynnistä reititin uudelleen',
'p341t002' : 'Reitittimen yhteyden muodostaminen uudelleen tuottaa vaikeuksia. Pikaisesta uudelleenkäynnistyksestä pitäisi olla apua.',
'p341t003' : 'Irrota reitittimen verkkolaite, odota muutama sekunti ja kytke se takaisin. Kun reitittimessä palaa tasainen sininen valo, olemme valmiit muodostamaan yhteyden.',
'p341t003w' : 'Irrota reitittimen verkkolaite, odota muutama sekunti ja kytke se takaisin. Kun reitittimessä palaa tasainen sininen valo, olemme valmiit muodostamaan yhteyden.',
'p341t004' : ' Odotamme tällä välin, että reititin käynnistyy uudelleen.',
'p342t001' : ' Muodostamme reitittimen yhteyden uudelleen, jotta voimme jatkaa.',
'p342t002' : 'Voit joutua valitsemaan langattoman verkon <span tid="Network24SSID">({REPLACE WITH 2.4 SSID})</span>  uudelleen langattomien verkkojen luettelosta auttaaksesi prosessia.',
'p343t002' : ' Muodostamme yhteyden reitittimeen uudelleen, jotta voimme jatkaa.',
'p343t003' : 'Voit joutua valitsemaan langattoman verkon <span tid="Network24SSID">({REPLACE WITH 2.4 SSID})</span> uudelleen voidaksesi jatkaa.',
'p344t001' : 'Käynnistä reititin uudelleen',
'p344t002' : 'Reitittimen yhteyden muodostaminen uudelleen tuottaa vaikeuksia. Pikaisesta uudelleenkäynnistyksestä pitäisi olla apua.',
'p344t003' : 'Irrota reitittimen verkkolaite, odota 15 sekuntia ja kytke se takaisin. Kun reitittimessä palaa tasainen sininen valo, muodostamme yhteyden.',
'p344t003w' : 'Irrota reitittimen verkkolaite, odota 15 sekuntia ja kytke se takaisin. Kun reitittimessä palaa tasainen sininen valo, muodostamme yhteyden.',
'p344t004' : ' Odotamme tällä välin, että reititin käynnistyy uudelleen.',
'p400f010' : 'WPA2',
'p400f011' : 'WPA/WPA2',
'p400f012' : 'WEP',
'p400f013' : 'Avaa',
'p400t001' : 'Muodosta kaikki yhteydet nopeammin.',
'p400t002' : 'Jos annat uudelle reitittimelle saman verkon nimen ja salasanan kuin vanhalle, kaikki laitteet voivat muodostaa yhteyden heti.',
'p400t004' : 'Verkon nimi:',
'p400t008' : 'Suojaustyyppi: <em class="hide-on-phones">(WPA2 on turvallisin.)</em>',
'p400t014' : '5 GHz alueella on sama nimi, mutta loppuun on lisätty "media".',
'p400t015' : 'Voit muuttaa sen myöhemmin, jos haluat.',
'p400t017' : 'Tallenna ja jatka',
'p400t018' : 'Miksi nimeäisin verkon uudelleen?',
'p400t019' : 'Kaikki vanhaan reitittimeen aikaisemmin kytketyt laitteet muodostavat automaattisesti yhteyden uuteen reitittimeen, jos käytät samaa verkon nimeä ja salasanaa. Lisäksi, kun etsitä laitteissa verkkoa, ainutlaatuinen nimi on helpompi löytää.<span class="nub"></span>',
'p450a009' : 'Hienoa. Mitä seuraavaksi?',
'p450t001' : 'Muutokset on tallennettu.',
'p450t002' : 'Tässä on uusi verkon nimi ja salasana',
'p450t003' : 'Jos olet käyttänyt vanhan verkon nimeä ja salasanaa, vanhojen langattomien laitteiden tulisi muodostaa yhteys nyt.',
'p450t004' : 'Nimi:',
'p450t008' : 'Reitittimen pohjassa on lappu, johon voit kirjoittaa verkon nimen. Näin se on aina saatavilla.',
'p450t011' : 'Jos olet käyttänyt aikaisempaa verkon nimeä ja salasanaa, useimmat langattomat laitteet muodostavat yhteyden automaattisesti, kun käynnistät ne seuraavan kerran. Muiden on valittava verkko uudelleen, minkä jälkeen ne muodostavat yhteyden automaattisesti. Pikaoppaassa on ohjeet Windows-, OS X, iOS- ja  Android-käyttöjärjestelmille.  <span class="nub"></span>',
'p451a009' : 'Hienoa. Mitä seuraavaksi?',
'p451t001' : 'Ei muutoksia.',
'p451t002' : 'Verkon nimeä tai salasanaa ei ole muutettu.',
'p451t003' : 'Sinun on kerrottava kullekin langattomalle laitteelle verkon nimi ja salasana.',
'p451t004' : 'Nimi:',
'p451t008' : 'Reitittimen pohjassa on lappu, johon voit kirjoittaa uuden verkon nimen. Näin se on aina saatavilla.',
'p451t011' : 'Kullekin langattomalle laitteelle on kerrottava uudesta verkosta. Pikaoppaassa on ohjeet Windows-, OS X, iOS- ja  Android-käyttöjärjestelmille.  <span class="nub"></span>',
'p500t001' : 'Rekisteröi reititin.',
'p500t002' : 'Rekisteröinti on nopeaa, ja säästät paljon aikaa, jos joskus tarvitset asiakastukea.',
'p500t004' : 'Miksi rekisteröinti?',
'p500t005' : 'Se, että tiedämme sinusta jotain, auttaa meitä auttamaan sinua nopeammin, jos siihen syntyy tarvetta.<span class="nub"></span>',
'p500tCancel' : 'Rekisteröi myöhemmin &raquo;',
'p500tSubmit' : 'Suorita rekisteröinti',
'p600t001' : 'Lataa reitittimen valinnaisten ohjelmien sivulta vastaava ohjelmisto muihin tietokoneisiin ja mobiililaitteisiin.',
'p600t002' : 'Kiitos, siirry kojelautaan',
'p600t003' : 'Valinnaiset ohjelmat',
'p600t004' : 'Nämä ohjelmistotyökalut voivat auttaa hyödyntämään reitittimen lisäominaisuuksia. Ne ovat ladattavissa Apple iOS, Android-, Windows- ja OS X -käyttöjärjestelmiin.  <span class="nub"></span>',
'p601t001' : '<strong>Kiitos rekisteröinnistä!</strong>',
'p700MRt001' : 'Emme pystyneet asentamaan yhteyttä automaattisesti. Kerro meille vähän lisää, jotta voimme auttaa yhteyden muodostuksessa.',
'p700MRt002' : 'Minkä tyyppistä yhteyttä asennat?',
'p700MRt003' : 'Yhteyteni on:',
'p700MRt005' : 'Dynaaminen yhteys  (1483-silta)',
'p700MRt007' : 'PPPoE-yhteys',
'p700MRt009' : 'PPPoA-yhteys',
'p700MRt011' : 'Staattinen yhteys (IPoA)',
'p700MRt014' : 'En ole varma yhteystyypistä:',
'p700MRt016' : 'Yritä uudelleen automaattisesti',
'p700MRt017' : 'Yhteystyypit',
'p700MRt018' : '<span class="black">Dynaaminen —</span> Nämä liitännät ovat aina vain yleisemmät joillekin DSL-palveluntarjoajille.',
'p700MRt019' : '<span class="black">PPPoE ja PPPoA –</span> Nämä yhteyden vaativat Internet-palveluntarjoajan antaman käyttäjätunnuksen ja salasanan.',
'p700MRt021' : '<span class="black">Staattinen –</span> Vaatii mukautetut parametrit, jotka ovat ainutlaatuiset jokaiselle käyttäjälle.<span class="nub"></span>',
'p700t001' : 'Emme pystyneet asentamaan yhteyttä automaattisesti. Kerro meille vähän lisää, jotta voimme auttaa yhteyden muodostuksessa.',
'p700t002' : 'Minkä tyyppistä yhteyttä asennat?',
'p700t003' : 'Yhteyteni on:',
'p700t005' : 'Dynaaminen yhteys',
'p700t007' : 'PPPoE-yhteys',
'p700t008' : 'L2TP- tai PPTP-yhteys',
'p700t013' : 'Staattinen yhteys',
'p700t014' : 'En ole varma yhteystyypistä.',
'p700t914' : 'Jos et edelleenkään voi määrittää yhteystyyppiä, ota yhteys Internet-palveluntarjoajaan.',
'p700t016' : 'Yritä uudelleen automaattisesti',
'p700t017' : 'Yhteystyypit',
'p700t018' : '<span class="black">Dynaaminen –</span> Yleinen tyyppi useimmille kaapeli- ja kuituoptisille Internet-palveluntarjoajille ja joillekin DSL-palveluntarjoajille.',
'p700t019' : '<span class="black">PPPoE ja PPTP –</span> Vaativat Internet-palveluntarjoajan antaman käyttäjätunnuksen ja salasanan.',
'p700t021' : '<span class="black">Staattinen –</span> Vaatii mukautetut parametrit, jotka ovat ainutlaatuiset jokaiselle käyttäjälle.<span class="nub"></span>',
'p701MRt001' : 'Olet valinnut dynaamisen yhteyden.',
'p701MRt002' : 'Internet-palveluntarjoaja on saattanut antaa sinulle lisää kokoonpanoasetuksia.',
'p701MRt004' : 'Dynaamiset asetukset:',
'p701MRt006' : '0',
'p701MRt007' : '0',
'p701MRt016' : 'Tarkista yhteys',
'p701MRt017' : 'Dynaamiset yhteydet',
'p701MRt018' : 'Dynaaminen yhteys määritetään automaattisesti, kun yhteys Internet-palveluntarjoajaan on muodostettu.<span class="nub"></span>',
'p701t001' : 'Dynaamista yhteyttä luodaan...',
'p701t002' : ' Pyydämme yhteyttä Internet-palveluntarjoajalta.',
'p702t001' : 'Modeemia käynnistetään uudelleen…',
'p702t002' : 'Valmistaudumme kokeilemaan erilaisia yhteystyyppejä käynnistämällä modeemin uudelleen.',
'p710MRt001' : 'Olet valinnut staattisen yhteyden.',
'p710MRt002' : 'Internet-palveluntarjoaja on varmasti antanut sinulle staattisen kokoonpanon asetukset. Jos et löydä niitä, soita ISP:lle.',
'p710MRt004' : 'Staattiset asetukset:',
'p710MRt005' : 'IP-osoite:',
'p710MRt006' : '0',
'p710MRt007' : 'Aliverkon peite:',
'p710MRt008' : '0',
'p710MRt009' : 'Oletusyhdyskäytävä:',
'p710MRt010' : '0',
'p710MRt011' : 'DNS-palvelin (ensisijainen):',
'p710MRt012' : '0',
'p710MRt013' : 'DNS-palvelin (toissijainen):',
'p710MRt014' : '0',
'p710MRt015' : 'Huom. Kaikki ISP:t eivät vaadi toissijaista DNS-palvelinta.',
'p710MRt016' : 'Tarkista staattinen yhteys',
'p710MRt017' : 'Staattiset yhteydet',
'p710MRt018' : 'Staattinen yhteys määritetään manuaalisesti, mutta se antaa reitittimelle pysyvän osoitteen, mihin voi olla helpompi muodostaa yhteys verkon ulkopuolelta. Staattiset yhteydet eivät ole tavallisesti kotikäyttöisiä Internet-palveluita ja maksavat yleensä enemmän. <span class="nub"></span>',
'p710t001' : 'Olet valinnut staattisen yhteyden.',
'p710t002' : 'Internet-palveluntarjoaja on varmasti antanut sinulle staattisen kokoonpanon asetukset. Jos et löydä niitä, ota yhteys ISP:hen.',
'p710t004' : 'Staattiset asetukset:',
'p710t005' : 'IP-osoite:',
'p710t006' : '0',
'p710t007' : 'Aliverkon peite:',
'p710t008' : '0',
'p710t009' : 'Oletusyhdyskäytävä:',
'p710t010' : '0',
'p710t011' : 'DNS-palvelin (ensisijainen):',
'p710t012' : '0',
'p710t013' : 'DNS-palvelin (toissijainen):',
'p710t014' : '0',
'p710t015' : 'Huom. Kaikki ISP:t eivät vaadi toissijaista DNS-palvelinta.',
'p710t016' : 'Tarkista staattinen yhteys',
'p710t017' : 'Staattiset yhteydet',
'p710t018' : 'Staattinen yhteys määritetään manuaalisesti, mutta se antaa reitittimelle pysyvän osoitteen, mihin voi olla helpompi muodostaa yhteys verkon ulkopuolelta. Staattiset yhteydet eivät ole tavallisesti kotikäyttöisiä Internet-palveluita ja maksavat yleensä enemmän.  <span class="nub"></span>',
'p711t001' : 'Staattista yhteyttä muodostetaan...',
'p711t002' : ' Pyydämme yhteyttä Internet-palveluntarjoajalta.',
'p712t001' : 'Staattisissa asetuksissa on jotain vikaa.',
'p712t002' : 'Yksi antamasi osoite tai arvo on virheellinen, mutta emme tiedä mikä.',
'p800t001' : 'Muutoksia otetaan käyttöön.',
'p800t002' : 'Otamme muutokset käyttöön ja käynnistämme reitittimen uudelleen tehdäksemme siitä virallista.',
'p801t002' : ' Odotamme, että reititin muodostaa yhteyden uudelleen. Sen jälkeen jatkamme.',
'p802t002' : 'Jotta voisimme jatkaa, tarvitsemme langattoman yhteyden reitittimeen.',
'p802t004' : 'Siirry laitteen langattoman verkon valikkoon',
'p802t005' : 'Valitse uusi verkko, joka tunnetaan nimellä <strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong>',
'p802t007' : 'Kirjoita salasana, joka on <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>',
'p802t009' : 'Muodostamme yhteyden reitittimeen ja jatkamme sitten.',
'p802t010' : ' Odotamme, että reititin muodostaa yhteyden uudelleen.',
'p803t002' : 'Jotta voisimme jatkaa, tarvitsemme langattoman yhteyden reitittimeen.',
'p803t003' : 'Koska olet vaihtanut verkon nimeä, sinun on valittava langaton verkko uudelleen:',
'p803t004' : 'Siirry laitteen langattoman verkon valikkoon',
'p803t005' : 'Valitse uusi verkko, joka tunnetaan nimellä <strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong>',
'p803t007' : 'Kirjoita salasana, joka on <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>',
'p803t009' : 'Muodostamme yhteyden reitittimeen ja jatkamme sitten.',
'p803t010' : ' Odotamme, että yhteys muodostetaan uudelleen.',
'p804t001' : 'Laite ei muodostanut yhteyttä uudelleen.',
'p804t002' : 'Näin käy joskus, ja tilanne on helppo korjata.',
'p804t025' : 'Jos sinulla on toinen laite, jossa on Internet-yhteys, lue lisätietoja tästä URL:stä: <strong>http://belk.in/PMuxOg</strong>',
'p804t026' : 'Jos se ei toimi, kytke Ethernet-kaapeli suoraan modeemin ja tietokoneen välille.',
'p804t027' : ' Kun näemme yhteyden, jatkamme automaattisesti.',
'p900t001' : 'Sinun on käynnistettävä modeemi uudelleen.',
'p900t002' : 'Modeemi ei vastaa.',
'p900t003' : 'Käynnistä modeemi uudelleen suorittamalla seuraavat vaiheet.',
'p900t004' : 'Sammuta modeemi. Tämä tapahtuu tavallisesti painamalla modeemin on/off-kytkintä tai irrottamalla verkkolaite. Joissain modeemeissa on akku, ja tällöin niiden nollauskytkin on löydettävä.',
'p900t005' : 'Odota 15 sekuntia.',
'p900t006' : 'Kytke modeemi taas päälle.',
'p900t007' : 'Muutaman sekunnin kuluttua sen valot palavat jälleen ja se on valmis kommunikoimaan reitittimen kanssa.',
'p900t008' : 'Odotamme, että modeemi sammuu ja käynnistyy, ja sitten jatkamme automaattisesti.',
'p900t009' : 'Miksi modeemi käynnistetään uudelleen.',
'p900t010' : 'Joidenkin modeemien on käynnistyttävä uudelleen, jotta ne voivat taas alkaa kommunikoida uuden reitittimen tai vieraan tietokoneen kanssa. Näemme modeemin mutta se ei kommunikoi uuden reitittimen kanssa, joten pikainen uudelleenkäynnistys luultavasti korjaa tilanteen.<span class="nub"></span>',
'p901t001' : 'Käynnistä modeemi uudelleen nyt...',
'p901t002' : ' Odotamme, että modeemi sammuu ja käynnistyy taas.',
'p902t001' : 'Modeemi sammui. Hyvä.…',
'p902t002' : ' Odotamme, että se herää taas.',
'p903t001' : 'Tarvitsetko lisää aikaa?',
'p903t002' : ' Odotamme, että modeemi käynnistyy uudelleen. Tarvitsetko lisää aikaa?',
'p903t005' : 'Tavallisesti tämä koskee modeemin virtakytkintä tai yksinkertaisesti irti kytkemistä verkkolaitteesta, mutta joissakin modeemeissa on akku. Siinä tapauksessa sinun on etsittävä modeemin nollauspainike.',
'p904t001' : 'Tarvitsetko lisää aikaa?',
'p904t002' : ' Odotamme, että modeemi käynnistyy taas. Tarvitsetko lisää aikaa?',
'p905t001' : 'Näemme taas modeemin…',
'p905t002' : ' Odotamme, että se synkronoi ISP:n kanssa. Tämä kestää minuutin, pari.',
'p950IMRt001' : 'Emme pystyneet luomaan yhteyttä DSL-linjaan.',
'p950IMRt002' : 'Tarkista, onko DSL-seinäpistorasian ja reitittimen harmaan liitännän välillä verkkokaapeli.',
'p950IMRt004' : 'Uskomme, että kytkennässä on jotain vikaa.',
'p950IMRt005' : 'Reitittimen harmaasta liitännästä tulisi olla verkkokaapeli DSL-/puhelinpistorasiaan. Tämä kaapeli välittää signaalin Internet-palveluntarjoajalta reitittimeen; ilman sitä et pääse Internetiin. Tarkista, että kaapeli on kytketty kunnolla.',
'p950IMRt006' : 'Tämän yhteyden tulisi näyttää tällaiselta:',
'p950IMRt007' : 'DSL-seinäpistorasiasta tulisi olla verkkokaapeli reitittimeen virtakytkentään (jossa on mukana modeemi). Tämä kaapeli välittää signaalin Internet-palveluntarjoajalta reitittimeen; ilman sitä et pääse Internetiin.',
'p950IMRt009' : 'Tämän yhteyden tulisi näyttää tällaiselta:',
'p950IMRt010' : 'Odotamme yhteyttä samalla kun tarkistat tilanteen.',
'p950IMRt014' : 'Kytkennät',
'p950IMRt015' : 'Yleisin kytkentäongelma on kytkentä seinäpistorasian ja reitittimen välillä. On tärkeää tarkistaa kaapelin molemmat päät. Yhden pään tulee olla kytketty uuden reitittimen harmaaseen porttiin; toisen pään tulee olla kytketty DSL-liitäntään. Joissakin tapauksissa saatetaan tarvita suodatin seinäpistorasian ja kaapelin välille. <span class="nub"></span>',
'p950PMt001' : 'Emme pystyneet luomaan yhteyttä DSL-linjaan.',
'p950PMt002' : 'Varmista, että reitittimen ja sen virtapistorasian (jossa on mukana modeemi) välillä on verkkoyhteys.',
'p950PMt004' : 'Uskomme, että kytkennässä on jotain vikaa.',
'p950PMt005' : ' Tarkista, että verkkokaapeli, joka eroaa modeemin virtajohdosta, on kytketty reitittimen keltaiseen WAN-porttiin. Ilman verkkoyhteyttä eri pääse Internetiin.',
'p950PMt009' : 'Tämän yhteyden tulisi näyttää tällaiselta:',
'p950PMt010' : 'Odotamme yhteyttä samalla kun tarkistat tilanteen.',
'p950PMt011' : 'Kytkennät',
'p950PMt012' : 'Yleisin kytkentäongelma on kytkentä seinäpistorasian ja modeemin välillä. On tärkeää tarkistaa kaapelin molemmat päät. Yhden pään tulee olla kytketty uuden reitittimen virtalähteeseen; toisen pään tulee olla kytketty DSL-liitäntään. Joissakin tapauksissa saatetaan tarvita suodatin seinäpistorasian ja kaapelin välille. <span class="nub"></span>',
'p950t001' : 'Olemme paikantaneet modeemiyhteyden.',
'p950t002' : 'Varmista, että modeemi on kytketty pistorasiaan ja päällä.',
'p950t003' : 'Varmista, että Ethernet-kaapeli on kytketty modeemin ja reitittimen välille.',
'p950t004' : 'Uskomme, että kytkennässä on jotain vikaa.',
'p950t005' : 'Modeemin tulisi olla päällä ja Ethernet-kaapelin tulisi olla kytketty modeemiin ja reitittimen keltaiseen porttiin.',
'p950t006' : 'Tarkista seuraavat:',
'p950t007' : 'Varmista, että modeemi on päällä. Tarkista, että verkkolaite on kytketty molemmista päistä, ja että yksi tai useampi modeemin valo palaa.',
'p950t008' : 'Ethernet-kaapelin tulisi olla kytketty modeemiin ja reitittimen keltaiseen porttiin. Tämä kaapeli välittää signaalin modeemilta reitittimelle; ilman sitä et pääse Internetiin.',
'p950t009' : 'Yhteyksien tulisi näyttää tältä:',
'p950t010' : 'Odotamme yhteyttä samalla kun tarkistat tilanteen.',
'p950t011' : 'Kytkennät',
'p950t012' : 'Yleisin asennusongelma on kytkentä modeemin ja reitittimen välillä. Yhden pään tulee olla kytketty uuden reitittimen keltaiseen porttiin; toisen pään tulee olla kytketty modeemin vastaavaan porttiin. Varmista, että molemmat on kytketty kunnolla. Eri modeeminvalmistajat merkitsevät portit eri tavalla; ne voi olla merkitty "data", "LAN", "network" tai "Ethernet".<span class="nub"></span>',
'p951IMRt001' : 'Tarvitsetko lisää aikaa?',
'p951IMRt002' : ' Odotamme, että kytket DSL-linjan. Tarvitsetko lisää aikaa?',
'p951t001' : 'Tarvitsetko lisää aikaa?',
'p951t002' : ' Odotamme, että modeemi käynnistyy taas. Tarvitsetko lisää aikaa?',
'pDAt001' : 'Kaksi järjestelmänvalvojaa',
'pDAt002' : 'Tätä laitetta ohjaa tällä hetkellä   <span id="ipaddr"></span>!',
'PIC_blocked_content' : 'Internet-lapsilukitus on aktiivinen, ja tämän laitteen Internet-yhteys on tällä hetkellä estetty. Voit hallinnoida Internet-lapsilukituksen asetuksia painamalla alla olevaa painiketta.',
'PIC_blocked_title' : 'Tämän laitteen Internet-yhteys on tällä hetkellä estetty.',
'PIC_S1t0006' : 'Aikataulun mukainen Internet-yhteys:',
'PIC_S1t006' : 'Äskettäin verkossasi:',
'PIC_S2t003' : 'Kouluillat',
'PIC_S2t004' : 'Viikonloppuisin',
'PIC_S2t005' : '(sunnuntai–torstai)',
'PIC_S2t006' : '(perjantai–lauantai)',
'PIC-blocked' : 'estetty',
'PIC-S1dt001' : 'Haluatko poistaa koko verkon Internet-yhteyden käytöstä?',
'PIC-S1t001' : 'Estä kaikki laitteet',
'PIC-S1t003' : 'Kaikkien laitteiden Internet-yhteys on purettu.',
'PIC-S1t004' : 'Palauta pääsy',
'PIC-S1t005' : 'Tällä hetkellä verkossasi:',
'PIC-S1t010' : 'Laitteiden etsintä',
'PIC-S1t020' : 'Internet-lapsilukitus on keskeytetty',
'PIC-S1t021' : 'Reititin ei tunne kellonaikaa, mikä estää Internet-lapsilukituksen estämisen/vapauttamisen.  Tämä korjataan, kun reititin määrittää oikean kellonajan uudelleen luomalla yhteyden NTP-aikapalveluun.',
'PIC-S1t022' : 'Reititin tarkistaa NTP-aikapalvelimen muutaman minuutin välein tai voit muuttaa aikapalvelimen <a href="#" tid="gtSystemSettings" style="">järjestelmäasetuksissa</a>.',
'PIC-unblocked' : 'estämätön',
'pNoTime_content' : 'Reititin ei tiedä kellonaikaa, sillä se ei saa yhteyttä NTP-aikapalvelimeen. Reitittimen aikaan perustuvat toiminnot, kuten Internet-lapsilukitus, Eco-tila ja itseparantaminen on nyt keskeytetty, kunnes laite saa yhteyden NTP-aikapalvelimeen. <br> <br>Reititin tarkistaa ajan automaattisesti muutaman minuutin välein.',
'pNoTime_title' : 'Paljonko kello on?',
'pODLAplt001' : 'Kielipaketin käyttäminen',
'pODLAplt002' : 'Valitun kielen vaihtaminen…',
'pODLDLt001' : 'Kielipaketin lataaminen',
'pODLDLt002' : 'Valitsemasi kielen saaminen palvelimelta…',
'pODLErrt001' : 'Anteeksi',
'pODLErrt002' : 'OK',
'pStatst004' : 'Katso kaikki &raquo;',
'Support1t001' : 'Olemme paikantaneet modeemiyhteyden.',
'Support1t002' : 'Varmista, että modeemi on kytketty pistorasiaan ja päällä.',
'Support1t003' : 'Varmista, että Ethernet-kaapeli on kytketty modeemin ja reitittimen välille.',
'Support1t004' : 'Uskomme, että kytkennässä on jotain vikaa.',
'Support1t005' : 'Modeemin tulisi olla päällä ja Ethernet-kaapelin tulisi olla kytketty modeemiin ja reitittimen keltaiseen porttiin.',
'Support1t006' : 'Tarkista seuraavat:',
'Support1t007' : 'Varmista, että modeemi on päällä. Tarkista, että verkkolaite on kytketty molemmista päistä, ja että yksi tai useampi modeemin valo palaa.',
'Support1t008' : 'Ethernet-kaapelin tulisi olla kytketty modeemiin ja reitittimen keltaiseen porttiin. Tämä kaapeli välittää signaalin modeemilta reitittimelle; ilman sitä et pääse Internetiin.',
'Support1t009' : 'Yhteyksien tulisi näyttää tältä:',
'Support1t010' : 'Kun olet tehnyt näin, napsauta Yritä uudelleen.',
'Support7t012' : 'Siirry Internetiin yhteydessä olevalla laitteella osoitteeseen <strong>http://belk.in/Q4XXca</strong>',
'Support1t016' : 'Kytkennät',
'Support1t017' : 'Yleisin asennusongelma on kytkentä modeemin ja reitittimen välillä. Yhden pään tulee olla kytketty uuden reitittimen keltaiseen porttiin; toisen pään tulee olla kytketty modeemin vastaavaan porttiin. Varmista, että molemmat on kytketty kunnolla. Eri modeeminvalmistajat merkitsevät portit eri tavalla; ne voi olla merkitty "data", "LAN", "network" tai "Ethernet".<span class="nub"></span>',
'Support2t001' : 'Modeemi ei käynnistynyt uudelleen.',
'Support2t002' : 'Kokeile irrottaa modeemin verkkolaite.',
'Support2t003' : 'Modeemissa voi olla nollauspainike, jota on painettava.',
'Support2t004' : 'Tuottaako modeemin käynnistäminen vaikeuksia?',
'Support2t005' : 'Kokeile käynnistää modeemi uudelleen suorittamalla seuraavat vaiheet.',
'Support2t006' : 'Irrota modeemin verkkolaite.',
'Support2t007' : 'Odota, että modeemin valot sammuvat.',
'Support2t008' : 'Jos valot jäävät palamaan, modeemissa voi olla akku. Jossain (usein takana) on nollauspainike. Paina sitä.',
'Support2t009' : 'Modeemin valojen tulisi sammua. Odota muutama sekunti, ennen kuin kytket verkkolaitteen uudelleen.',
'Support2t010' : 'Kun olet tehnyt näin, napsauta Yritä uudelleen.',
'Support2t016' : 'Miksi modeemi käynnistetään uudelleen.',
'Support2t017' : 'Joidenkin modeemien on käynnistyttävä uudelleen, jotta ne voivat taas alkaa kommunikoida uuden reitittimen tai vieraan tietokoneen kanssa. Näemme modeemin mutta se ei kommunikoi uuden reitittimen kanssa, joten pikainen uudelleenkäynnistys luultavasti korjaa tilanteen.<span class="nub"></span>',
'Support3MRt001' : 'Emme pystyneet luomaan yhteyttä DSL-linjaan.',
'Support3MRt002' : 'Tarkista, että DSL-seinäpistorasian ja reitittimen välillä on verkkokaapeli.',
'Support3MRt003' : 'Joillakin alueilla tarvitaan suodatin.',
'Support3MRt004' : 'Olemme melko varmoja, että kyseessä on johtoja koskeva ongelma.',
'Support3MRt005' : 'Reitittimen harmaasta liitännästä tulisi olla kaapeli DSL-/puhelinpistorasiaan.',
'Support3MRt006' : 'Tarkista, että kaapelin kumpikin pää on kytketty kunnolla.',
'Support3MRt007' : 'Tarkista, että kaapeli on kytketty reitittimen harmaaseen porttiin, eikä toiseen keltaisista porteista.',
'Support3MRt008' : 'Jos sinulla on DSL-linjasuodatin, varmista, että se on kaapelin ja DSL-liitännän välillä.',
'Support3MRt010' : 'Tarkista, että kaapelin kumpikin pää on kytketty kunnolla.',
'Support3MRt011' : 'Tarkista, että kaapeli on kytketty reitittimen virtalähteen verkkoporttiin.',
'Support3MRt012' : 'Jos sinulla on DSL-linjasuodatin, varmista, että se on kytketty kaapelin ja DSL-liitännän välille.',
'Support3MRt016' : 'Kun olet suorittanut nämä vaiheet, olet valmis yrittämään uudelleen.',
'Support3MRt018' : 'Avaa seuraava URL laitteessa, joka on yhteydessä Internetiin, ja lue, miten ongelma voidaan korjata itse: <strong>www.belkin.com/support3mr</strong>',
'Support3MRt021' : 'Kytkennät',
'Support3MRt022' : 'Kaikkein tavallisin johto-ongelma koskee DSL-liitäntää. On tärkeää tarkistaa kaapelin molemmat päät. <span class="nub"></span>',
'Support3MRt050' : 'Tarkista, että reitittimen virtalähteen ja puhelinpistokkeen välill on verkkokaapeli.',
'Support3MRt051' : 'Reitittimen virtalähteen ja DSL-/puhelinpistokkeen välillä on oltava kaapeli.',
'Support3PMt001' : 'Emme pystyneet luomaan yhteyttä DSL-linjaan.',
'Support3PMt002' : 'Varmista, että reitittimen ja sen virtapistorasian (jossa on mukana modeemi) välillä on verkkoyhteys.',
'Support3PMt004' : 'Olemme melko varmoja, että kyseessä on johtoja koskeva ongelma.',
'Support3PMt005' : 'Reitittimen keltaisen portin ja reitittimen virtalähteen välillä tulisi olla verkkoyhteys.',
'Support3PMt006' : 'Katso reitittimen verkkopistoketta ja etsi kaapeli, joka jakaa sen kahdeksi erilliseksi linjaksi. Toisessa näistä linjoista on Ethernet-pistoke.',
'Support3PMt007' : 'Työnnä Ethernet-pistoke reitittimen keltaiseen porttiin.',
'Support3PMt010' : 'Kun olet tehnyt tämän, olet valmis yrittämään uudelleen.',
'Support3PMt012' : 'Siirry Internetiin yhteydessä olevalla laitteella osoitteeseen <strong>www.belkin.com/support3PM</strong>',
'Support3PMt016' : 'Kytkennät',
'Support3PMt017' : 'On tärkeää, että DSl-pistorasian ja reitittimen välillä on jatkuva yhteyksien sarja. Reititin odottaa tämän signaalin tulevan keltaisesta portista. Reitittimen virtalähteestä tuleva kaapeli kuljettaa tätä signaalia ja virtaa reitittimeen. Kumpikin puoli on kytkettävä reitittimeen, jotta kaikki toimisi kunnolla. <span class="nub"></span>',
'Support3t001' : 'Modeemi ei käynnistynyt uudelleen.',
'Support3t002' : 'Tarkista, saako modeemi virtaa.',
'Support3t003' : 'Voit joutua odottamaan hetken sen tullessa valmiiksi.',
'Support3t004' : 'Tuottaako modeemin käynnistäminen vaikeuksia?',
'Support7t005' : 'Koeta muodostaa DSL-yhteys suorittamalla seuraavat vaiheet:',
'Support7t006' : 'Tarkista, että modeemireitittimen verkkokaapeli on kytketty puhelinliitäntään, josta on Internet-yhteys. Napsauta Yritä uudelleen ja katso, tunnistaako modeemireititin Internetin.',
'Support7t007' : 'Jos modeemireititin jakaa puhelinliitännän lankapuhelimen (jossa on jakaja) kanssa, vaihda jakaja suodatinjakajaan (valinnainen). Napsauta Yritä uudelleen ja katso, tunnistaako modeemireititin Internet-palveluntarjoajan.',
'Support7t008' : 'Jos vaihe 2 ei toimi, DSL-suodattimet voivat olla tarpeen*. Jos sinulla on suodattimia (tavallisesti Internet-palveluntarjoajan antamia), kytke ne kaikkiin lankapuhelimiin ja niiden puhelinliitäntöihin.',
'Support7t009' : 'Jos DSL-liitäntä ei edelleenkään toimi, kun edellä mainitut vaiheet 1–3 on suoritettu, ota yhteys Internet-palveluntarjoajan tekniseen tukeen. Kerro heille, että sinulla on ongelmia saada modeemireititin synkronoimaan Internet-palveluntarjoajan kanssa.',
'Support3t010' : 'Kun olet tehnyt näin, napsauta Yritä uudelleen.',
'Support3t016' : 'Miksi modeemi käynnistetään uudelleen.',
'Support3t017' : 'Joidenkin modeemien on käynnistyttävä uudelleen, jotta ne voivat taas alkaa kommunikoida uuden reitittimen tai vieraan tietokoneen kanssa. Näemme modeemin mutta se ei kommunikoi uuden reitittimen kanssa, joten pikainen uudelleenkäynnistys luultavasti korjaa tilanteen.<span class="nub"></span>',
'Support4t001' : 'Emme pystyneet muodostamaan reitittimen yhteyttä uudelleen.',
'Support4t002' : 'Kokeile käynnistää reititin uudelleen.',
'Support4t003' : 'Kun reititin on käynnissä, yritä muodostaa siihen yhteys uudelleen.',
'Support4t004' : 'Yritetäänpä jotain muuta.',
'Support4t005' : 'Käynnistä ensin reititin uudelleen.',
'Support4t006' : 'Irrota reitittimen verkkolaite, odota muutama sekunti ja kytke se takaisin.',
'Support4t006w' : 'Irrota reitittimen verkkolaite, odota muutama sekunti ja kytke se takaisin.',
'Support4t007' : 'Kun reitittimessä palaa tasainen sininen valo, olemme valmiit muodostamaan yhteyden.',
'Support4t008' : 'Kokeillaan seuraavaksi langatonta yhteyttä.',
'Support4t031' : 'Yhteyden muodostus kestää muutaman sekunnin, minkä jälkeen voit yrittää uudelleen.',
'Support4t032' : 'Voit myös kokeilla langallista yhteyttä.',
'Support4t033' : 'Voit kytkeä tietokoneen reitittimeen. Kytke Ethernet-kaapeli tietokoneeseen ja yhteen reitittimen harmaista porteista. Voit yrittää asennusta uudelleen siirtymästä sieltä osoitteeseen http://router/.',
'Support4t034' : 'Kun olet tehnyt näin, napsauta Yritä uudelleen.',
'Support4t040' : 'Siirry Internetiin yhteydessä olevalla laitteella osoitteeseen <strong>http://belk.in/PMuxOg</strong>',
'Support4t050' : 'Yhteyden korjaaminen',
'Support4t051' : 'Tällaisessa tilanteessa reitittimesi on käynnistettävä uudelleen, tai yhteys on vain muodostettava uudelleen. Alla on ohjeet molempiin. Koska olet saattanut vaihtaa verkon salasanaa edellisessä vaiheessa, voit joutua valitsemaan verkon uudelleen käynnistettyäsi reitittimen uudelleen.<span class="nub"></span>',
'Support5t001' : 'Emme pystyneet muodostamaan reitittimen yhteyttä uudelleen.',
'Support5t002' : 'Kokeile käynnistää reititin uudelleen.',
'Support5t003' : 'Kun reititin on käynnissä, yritä muodostaa siihen yhteys uudelleen.',
'Support5t004' : 'Yritetäänpä jotain muuta.',
'Support5t005' : 'Käynnistä ensin reititin uudelleen.',
'Support5t006' : 'Irrota reitittimen verkkolaite, odota muutama sekunti ja kytke se takaisin.',
'Support5t006w' : 'Irrota reitittimen verkkolaite, odota muutama sekunti ja kytke se takaisin.',
'Support5t007' : 'Kun reitittimessä palaa tasainen sininen valo, olemme valmiit muodostamaan yhteyden.',
'Support5t008' : 'Kokeillaan seuraavaksi langatonta yhteyttä.',
'Support5t009' : 'Yhteyden muodostus kestää muutaman sekunnin, minkä jälkeen voit yrittää uudelleen.',
'Support5t010' : 'Voit myös kokeilla langallista yhteyttä.',
'Support5t011' : 'Voit kytkeä tietokoneen reitittimeen. Kytke Ethernet-kaapeli tietokoneeseen ja yhteen reitittimen harmaista porteista. Voit yrittää asennusta uudelleen siirtymästä sieltä osoitteeseen http://router/.',
'Support5t012' : 'Kun olet tehnyt näin, napsauta Yritä uudelleen.',
'Support5t015' : 'Siirry Internetiin yhteydessä olevalla laitteella osoitteeseen <strong>http://belk.in/PMuxOg</strong>',
'Support5t020' : 'Yhteyden korjaaminen',
'Support5t021' : 'Näissä tilanteissa on vaikea tietää, onko reititin käynnistettävä uudelleen vai tuleeko siihen vain muodostaa yhteys uudelleen. Alla on siis ohjeet molempiin. Koska muutimme verkon nimeä edellisessä vaiheessa, varmista että muodostat yhteyden uuteen verkkoon, kun olet käynnistänyt reitittimen uudelleen.<span class="nub"></span>',
'Support6t001' : 'Emme pystyneet muodostamaan reitittimen yhteyttä uudelleen.',
'Support6t002' : 'Kokeile käynnistää reititin uudelleen.',
'Support6t003' : 'Kun reititin on käynnissä, yritä muodostaa siihen yhteys uudelleen.',
'Support6t004' : 'Yritetäänpä jotain muuta.',
'Support6t005' : 'Käynnistä ensin reititin uudelleen.',
'Support6t006' : 'Irrota reitittimen verkkolaite, odota muutama sekunti ja kytke se takaisin.',
'Support6t006w' : 'Irrota reitittimen verkkolaite, odota muutama sekunti ja kytke se takaisin.',
'Support6t007' : 'Kun reitittimessä palaa tasainen sininen valo, olemme valmiit muodostamaan yhteyden.',
'Support6t008' : 'Kokeillaan seuraavaksi langatonta yhteyttä.',
'Support6t031' : 'Yhteyden muodostus kestää muutaman sekunnin, minkä jälkeen voit yrittää uudelleen.',
'Support6t032' : 'Voit myös kokeilla langallista yhteyttä.',
'Support6t033' : 'Voit kytkeä tietokoneen reitittimeen. Kytke Ethernet-kaapeli tietokoneeseen ja yhteen reitittimen harmaista porteista. Voit yrittää asennusta uudelleen siirtymästä sieltä osoitteeseen http://router/.',
'Support6t034' : 'Kun olet tehnyt näin, napsauta Yritä uudelleen.',
'Support6t037' : 'Siirry Internetiin yhteydessä olevalla laitteella osoitteeseen <strong>http://belk.in/Nm1f5S</strong>',
'Support6t050' : 'Yhteyden korjaaminen',
'Support6t051' : 'Tällaisessa tilanteessa reitittimesi on käynnistettävä uudelleen, tai yhteys on vain muodostettava uudelleen. Alla on ohjeet molempiin. Koska olet saattanut vaihtaa verkon salasanaa edellisessä vaiheessa, voit joutua valitsemaan verkon uudelleen käynnistettyäsi reitittimen uudelleen.<span class="nub"></span>',
'Support7t001' : 'Modeemireititintä ei ole kytketty Internetiin.',
'Support7t004' : 'Puhelinlinjan liitännässä on ongelma.',
'Support7t050' : 'Yhteysongelmat',
'Support7t051' : 'Näissä tapauksissa on vaikea sanoa, miksi sinulla on ongelmia luoda yhteys Internet-palveluntarjoajaan. Olemme tarkistaneet johdot mahdollisuuksien mukaan, joten seuraava vaihe on tarkistaa, että käytössä on oikea liitäntä, tarvittaessa suodatin ja jos tämä ei auta, ota yhteys Internet-palveluntarjoajaan. <span class="nub"></span>',
'SupportNumber' : '1-800-123-4567',
'UpSpeed' : '12.5',
'p2410t012' : 'Kun napsautat \'Palauta\', reitittimen asetukset, kuten nimi ja salasana, poistetaan ja palautetaan alkuperäisiin tehtaan asetuksiin.  Tietokoneet, puhelimet jne. on sitten määritettävä vastaamaan näitä asetuksia, jotta pääset tämän reitittimen kautta Internetiin.  Haluatko varmasti jatkaa?',
'gtRestore' : 'Palauta',
'gtCancel' : 'Peruuta',
'alt="Loading"' : 'Lataus meneillään',
'alt="Restart Router"' : 'Käynnistä reititin uudelleen',
'alt="Check Wires"' : 'Tarkista johdot',
'alt="Check Phone Connection"' : 'Tarkista puhelinyhteys',
'alt="Check WAN Connection"' : 'Tarkista WAN-yhteys',
'alt="Checkmark"' : 'Valintamerkki',
'alt="Change"' : 'Muuta',
'alt="Print"' : 'Tulosta',
'alt="Expand"' : 'Laajenna',
'alt="Caret"' : 'Poisjääntimerkki',
'alt="Cut"' : 'Leikkaa',
'alt="Browser"' : 'Selain',
'alt="Wifi"' : 'WiFi',
'alt="Password"' : 'Salasana',
'alt="Check Phone Jack"' : 'Tarkista puhelinpistoke',
'alt="Turn Off Modem"' : 'Sammuta modeemi',
'alt="Turn On Modem"' : 'Käynnistä modeemi',
'alt="Check Phone Filters"' : 'Tarkista puhelinsuodattimet',
'gtSerial' : 'Sarjanumero',
'gt5GName' : '5 GHz SSID',
'gt5GKey' : '5 GHz avain',
'p1020MRt001' : 'Keskustelu Internet-palveluntarjoajan kanssa tuottaa vaikeuksia.',
'p1020MRt002' : 'Käynnistä modeemireititin uudelleen.',
'p1020MRt003' : 'Internet-yhteyttä ei saada, joten kokeile modeemireitittimen uudelleenkäynnistämistä.',
'p1020MRt004' : 'Sammuta modeemireititin. Tämä tapahtuu tavallisesti painamalla modeemireitittimenn kytkintä tai irrottamalla sen verkkolaite.',
'p1020MRt005' : 'Odota 15 sekuntia.',
'p1020MRt006' : 'Kytke modeemireititin taas päälle.',
'p1020MRt007' : 'Muutaman sekunnin jälkeen sen valot palavat ja siitä pitäisi olla yhteys Internetiin.',
'p1020MRt008' : 'Jos ongelma jatkuu, ota yhteys Internet-yhteys, jotta tilillesi voidaan suorittaa vianmääritys.',
'p1020MRt009' : 'Odotamme, että modeemireititin sammuu ja käynnistyy, ja sitten jatkamme automaattisesti.',
'p1020MRt010' : 'Miksi modeemi käynnistetään uudelleen.',
'p1020MRt011' : 'Joidenkin modeemien on käynnistyttävä uudelleen, jotta ne voivat alkaa kommunikoida uuden reitittimen tai vieraan tietokoneen kanssa. Jos taas Internet-palveluntarjoajan kanssa on vaikeuksia, modeemi voi katkaista yhteyden odottamatta. Näemme modeemin mutta emme Internetiä, joten pikainen uudelleenkäynnistys luultavasti korjaa tilanteen.<span class="nub"></span>',
'p1010t001' : 'Modeemin kanssa keskustelu tuottaa vaikeuksia.',
'p1010t002' : 'Uskomme, että kytkennässä on jotain vikaa.',
'p1010t003' : 'Modeemin tulisi olla kytketty reitittimen keltaiseen porttiin kaapelilla. Modeemin tulisi olla päällä.',
'p1010t004' : 'Voit varmistaa muutamalla keinolla, että kaikki on käyttövalmista:',
'p1010t005' : 'Varmista, että modeemi on päällä. Sen verkkolaitteen tulisi olla kytketty molemmista päistä, ja modeemissa tulisi palaa vähintään yksi valo.',
'p1010t006' : 'Modeemin tulisi olla kytketty reitittimen keltaiseen porttiin kaapelilla. Tämä kaapeli välittää signaalin modeemilta reitittimelle; ilman sitä et pääse Internetiin.',
'p1010t007' : 'Jos nämä ovat molemmat kuten pitäisikin, voit kokeilla käynnistää modeemin uudelleen irrottamalla sen verkkolaitteesta, odottamalla 15 sekuntia ja kytkemällä sen takaisin. Jos modeemissa on akku, sinun tulee etsiä modeemin nollauspainike ja käyttää sitä.',
'p1010t008' : 'Näiden yhteyksien tulisi näyttää tällaisilta:',
'p1010t009' : 'Odotamme yhteyttä samalla kun tarkistat tilanteen.',
'p1010t010' : 'Yleisin kytkentäongelma on kytkentä modeemin ja reitittimen välillä. On tärkeää tarkistaa kaapelin molemmat päät. Yhden pään tulee olla kytketty uuden reitittimen keltaiseen porttiin; toisen pään tulee olla kytketty modeemin vastaavaan porttiin. Eri modeeminvalmistajat merkitsevät portit eri tavalla; ne voi olla merkitty "data", "LAN", "network" tai "Ethernet".',
'Support3t005' : 'Kokeile käynnistää modeemi uudelleen suorittamalla seuraavat vaiheet.',
'Support3t006' : 'Tarkista, onko modeemin etupaneelissa valoja. Jos valot palavat, modeemi on päällä; voit joutua odottamaan hetken, ennen kuin modeemi on valmis.',
'Support3t007' : 'Tarkista, että modeemin verkkolaite on asianmukaisesti kytketty modeemiin ja pistorasiaan.',
'Support3t008' : 'Jos modeemissa on virtakytkin, tarkista että se on päällä.',
'Support3t009' : 'Tarkista uudelleen, että modeemi on yhä kytketty uuteen reitittimeen.',
'Support1t012' : 'Siirry Internetiin yhteydessä olevalla laitteella osoitteeseen <strong>http://belk.in/LIkBoH</strong>',
'QOSt001' : 'Ota Intellistream käyttöön seuraavasti:',
'QOSt002' : 'Kytke Belkin-reititin tietokoneeseen Ethernet-kaapelilla (suositus).',
'QOSt003' : 'Tee Internet-yhteyden nopeustesti napsauttamalla kohtaa <a href="http://www.speedtest.net" target="_blank" class="speed_font4">Speedtest.net</a>',
'QOSt004' : 'Kun olet tehnyt nopeustestin, syötä Speedtest.netissä näkyvät arvot yllä oleviin Download Speed (latausnopeus)-  ja Upload Speed (lähetysnopeus) -kenttiin ja napsauta sitten alla Save (tallenna).',
'gtMbps' : 'Mbps',
'QOSt006' : 'Suuren latausnopeuden takia Intellistream priorisoi vain lähetysnopeuden.',
'QOSt007' : 'Suuren lähetysnopeuden takia Intellistream priorisoi vain latausnopeuden.',
'QOSt008' : 'Suurten Internet-nopeuksien takia Intellistreamista ei ole apua, joten sitä ei oteta käyttöön tässä.',
'QOSt009' : 'Anna luku, joka on suurempi kuin 0.01.',
'QOSt010' : 'Anna lukuja, jotka ovat suurempia kuin 0.01.',
'gtSettingsNotSaved' : 'Sinulla on tallentamattomia muutoksia. Tallenna muutokset, poistu tai lataa uudestaan piittaamatta muutoksista.',
'QOSt011' : 'Valitse luku väliltä 0.01–100.00.',
'QOSt012' : 'Lisää numerot väliltä 0.01–100.00.',
'QOSt013' : 'Valitse luku väliltä 0.01–1000.00.',
'QOSt014' : 'Lisää numerot väliltä 0.01–1000.00.',



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
common_err1 = '%s on NOLLA';
upgrade_err2 = 'Laiteohjelman päivitys keskeytyi riittämättömien resurssien takia. Päivitys epäonnistui.\nYritä uudelleen, kun järjestelmä ei ole käytössä (ei Internet-liikennettä)';
upgrade_err3 = 'Lähetys ei onnistu. Ota yhteys valvojaan.';
upgrade_err4 = 'Laiteohjelma on liian suuri, päivitys epäonnistui.';
upgrade_err5 = 'Laitteessa on jo tuorein laiteohjelma.';
upgrade_err6 = 'Laiteohjelman päivitys on viallinen. Lataa laiteohjelmatiedosto uudelleen ja yritä uudelleen.';
show10 = 'DHCP-asiakasluettelo';
show54 = 'Yhteysasetukset';
btn2 = 'Ota muutokset käyttöön';
cff1 = 'Tarkista laiteohjelmisto onnistuneesti';
PM2 = ':30 iltapäivällä';
AM2 = ':30 aamupäivällä';
Dimicons = 'Himmennä kuvakkeet';
EcoTo = '<Check Alignment of PHs>–';
fvrm = 'Poista etähallinta käytöstä. Koska sen portti on ristiriidassa virtuaalipalvelimen jonkin sisääntulevan portin kanssa.';
lsipm2 = 'Lähiverkon IP-osoite ei kelpaa. Viimeinen numero ei voi olla 0 tai 255';
lsldnm = 'Väärä paikallisen toimialueen nimi: `~!@#$%^&*()_+[]{}\|;:\'"<>/?.,';
lsipm5 = 'Valitsemasi IP-osoitteen ei tulisi olla reititettävä.\n  192.168.x.x (missä x on luku välillä 0–255). \n10.x.x.x (missä x on luku välillä 0–255).\n172.y.x.x (missä y on luku välillä 16–31 ja x on luku välillä 0–255).';
ufy4 = 'Oletusasetusten palauttaminen vie jopa 60 sekuntia. Älä sammuta reititintä tämän prosessin aikana.';
ufe11 = 'Päivityksen päätteeksi reititin ei ehkä vastaa komentoihin jopa 180 sekuntia. Tämä on normaalia. Älä sammuta reititintä äläkä käynnistä sitä uudelleen tänä aikana.';
ur5 = 'Odota 30 sekuntia, kunnes reititin käynnistyy uudelleen. Älä sammuta reititintä ennen kuin nollaus on suoritettu loppuun.';
ur6 = 'Odota 60 sekuntia, kunnes reititin käynnistyy uudelleen. Älä sammuta reititintä ennen kuin nollaus on suoritettu loppuun.';
usys83 = 'Uusi salasana ja vahvistussalasana-kentät eivät vastaa toisiaan.';
usys83_1 = 'Salasana ja vahvistussalasana eivät vastaa toisiaan.';
usys85_1 = 'Valvojan salasanan pituuden tulee olla välillä 1–63.';
usys88 = 'Salasana on saavuttanut maksimipituuden!';
usys89 = 'ap.';
usys90 = 'ip.';
usys92 = 'Etäkäyttöportin numeron tulee olla välillä 1–65535.';
usysipm = 'Et joko ole kirjoittanut kaikkia IP-numeroita tai jotkin kirjoittamasi numerot eivät kelpaa. IP-osoitteen on oltava muotoa x.y.y.z (missä x on välillä 1–223, y on välillä 0–255 ja z on välillä 1–254).';
self_healing60 = 'Itsestään korjaantuva';
chkwait = 'Itsensä korjaava';
Europe = 'Eurooppa';
Australia = 'Australia ja Uusi-Seelanti';
AsiaPacific = 'Aasia, Tyynenmeren alue';
NorthAmerica = 'Pohjois-Amerikka';
vjs1 = 'Virheellinen IP-osoite, liian pitkä. Tarkista osoite uudelleen.';
vjs2 = 'Virheellinen IP-osoite, puuttuva ".". Tarkista osoite uudelleen!';
vjs3 = 'Virheellinen IP-osoite, puuttuvia numeroita välillä ".". Tarkista osoite uudelleen!';
vjs4 = 'Virheellinen IP-osoite, ylimääräinen ".". Tarkista osoite uudelleen!';
vjs5 = 'Virheellinen IP-osoite, numerot välillä "." ovat liian suuria. Tarkista osoite uudelleen!';
vm1 = 'Merkki ei kelpaa ';
vm2 = ' kohdassa ';
vm3 = 'On oltava ';
vjs6 = 'Virheellinen vuoden muoto. Kirjoita muodossa (esim. 2002)';
vm4 = 'Numero ei kelpaa ';
vjs8 = 'Väärä, on oltava 1970..2037';
vjs9 = 'Virheellinen kuukauden muoto. Kirjoita muodossa (esim. 01...12)';
vjs161 = ' ei sisään ';
vjs162 = ' verkon peite';
vjs163 = 'Sallittu DHCP-alue on ';
vjs17 = 'Kirjoitit salasanan eri tavoilla. Tarkista uudelleen!';
vjs18 = 'Lisää portin numero.';
vjs19 = 'Portin aloitusnumeron on oltava pienempi kuin viimeisen portin numeron.';
vjs23 = 'Virheellinen MAC-osoite, se on yleislähetysosoite.';
vjs24 = 'Virheellinen MAC-osoite, se on nollaosoite.';
vjs25 = 'Virheellinen MAC-osoite, se on monilähetysosoite.';
vjs26 = 'Väärä ensimmäinen ja viimeinen IP-osoite, viimeisen IP-osoitteen on oltava suurempi kuin ensimmäisen IP-osoitteen.';
vjs28 = 'Verkkopeitteen muoto ei kelpaa.';
vjs29 = 'Virheellinen muoto, verkonpeitteen on oltava  255.255.255.0 or 255.255.255.128 tai 255.255.255.192 tai 255.255.255.224 tai 255.255.255.240 tai 255.255.255.248 tai 255.255.255.252 tai 255.255.255.254';
vjs30 = 'IP-osoite ei kelpaa. Viimeinen numero ei voi olla 0 tai 255';
vjs31 = 'Lähiverkon IP-osoite ei kelpaa. Ensimmäinen numero ei voi olla 127';
vjs32 = 'LAN IP -osoite ei voi olla 0.0.0.0';
vjs33 = 'Virheellinen lähivrekon IP-osoite, on oltava alle 224.0.0.0';
vjs42 = 'Kirjoittamasi aliverkon peitteen numerot eivät kelpaa.';
vjs45 = 'Määritä IP-osoite';
vjs46 = 'ei kelpaa, korjaa se ensin.';
wcc2 = 'Valitse yhteystyyppi:';
wcc13 = 'L2TP';
wcc14 = '[Ainoastaan Israel]. Tämä yhteystyyppi on yleisin Israelissa. Jos ISP:si on erityisesti pyytänyt käyttämään L2TP:tä ja antanut sinulle siitä asianmukaisesti L2TP-tiedot, käytä sitä.';
wds4_1 = 'Ensisijainen DNS-osoite';
wds7 = 'Sinun on kirjoitettava Internet-palveluntarjoajan antamat DNS-asetukset, jos et käytä automaattista DNS-toimintoa';
wds8 = 'Jos haluat muuttaa DNS-toimintoa, siirry ensin kohtaan %2 Sivuston suodattimet %2 ja valitse "Ei suodattimia".';
wmc6 = 'WAN MAC-osoite ei voi olla sama kuin LAN MAC-osoite. Valitse toinen osoite.';
wdd9  = 'DDNS-palvelua ei ole valittu.\n';
wdd10 = 'DDNS-palvelu on valittu ja kaikki sivun tiedot menetetään. Haluatko jatkaa?';
wm10b = 'Käytettäväksi vain sellaisten ISP:iden kanssa, jotka edellyttävät L2TP-yhteysmenetelmää.';
pm = 'Palvelu ei pysty tarkistamaan antamaasi salasanaa. Tarkista, että kirjoitit salasanan oikein.';
wpp17 = 'L2TP-tili';
wpp18 = 'L2TP-salasana';
wpp19 = 'Kirjoita L2TP-tilisi';
wpp23 = 'IP-osoitteen määrittäminen';
wpp24 = 'Käytä staattista IP-osoitetta';
wpp25 = 'Hae dynaamisesti Internet-palveluntarjoajalta';
wppa7 = 'Oma IP-osoite';
wppa9 = 'Yhteystunnus (valinnainen)';
wppa13 = 'Kirjoita PPTP-tilisi';
wppa18 = 'Virheellinen palvelun nimi.';
ws2 = 'Lisää staattiset IP-asetukset kirjoittamalla tiedot alle ja napsauta Ota muutokset käyttöön.';
sm_1 = 'Kirjoittamasi aliverkon peitteet eivät kelpaa.';
ws8 = 'Kirjoita/vahvista DNS-osoitteen asetukset seuraavassa näytössä';
wt2 = 'Kun napsautat Ota muutokset käyttöön, reititin käynnistetään uudelleen. Kun reititin on käynnistetty uudelleen, sinun on toimittava seuraavasti';
wt3 = '1) Irrota virtajohto sekä kaapelimodeemista ja Belkinin reitittimestä.';
wt4 = '2) Kytke virtajohto takaisin kaapelimodeemiin ja odota, kunnes kaikki modeemin valot lopettavat vilkkumisen';
wt5 = '3) Kytke virtajohto takaisin Belkinin reitittimeen';
wt6 = 'Vahvista, että sinulla on Internet-yhteys, avaamalla Internet-selain, kuten Internet Explorer, Firefox tai Safari, ja vahvista, että voit avata sivustoja.';
wlad2 = 'Ota käyttöön/pois käytöstä';
wlc2 = 'Voit tehdä muutoksia reitittimen langattomiin asetuksiin tässä. Tallenna asetukset napsauttamalla Ota muutokset käyttöön.';
wlcgb = '802.11b+g';
wlcg = '802.11g';
wlcb = '802.11b';
wlc20 = '20 MHz';
wlc22 = '20/40 MHz';
wlc22a='20/40/80 MHz';
wlcoff = 'POIS';
wlcngb1 = '802.11b ja 802.11g ja 1x1 802.11n';
wlcn1 = '1x1 802.11n';
wlcngb2 = '802.11b & 802.11g & 802.11n';
wlcn2 = '802.11n';
wlcgn = '802.11g+n';
wlca = '802.11a';
wlcan = '802.11a ja 802.11n';
wlcnac='802.11n ja 802.11ac';
wlcanac='802.11a ja 802.11n ja 802.11ac';
wlc26 = 'Verkon nimen piilottaminen poistaa WPS:n käytöstä.';
wlc27 = 'Suojaustyypin vaihtaminen poistaa WPS:n käytöstä.';
wlc28 = 'WPS on poistettu käytöstä <A href=%s><B>langattoman yhteyden suojaustyypin takia</B></A>.';
wlc29 = 'WPS on poistettu käytöstä, koska verkon nimi (SSID) on piilotettu.';
wlc30 = 'WPS on poistettu käytöstä, koska verkon nimi (SSID) on piilotettu, ja <A href=%s><B>langattoman yhteyden suojaustyypin </B></A>takia.';
wlc31 = 'WPS:n kytkeminen päälle tuo verkon nimen (SSID) näkyviin.';
wlc32 = 'WPS:n kytkeminen päälle vaihtaa suojaustyypiksi WPA/WPA2. Nykyinen verkon salasana toimii hyvin.';
wlc33 = 'WPS:n kytkeminen päälle näyttää verkon nimen (SSID) ja vaihtaa suojaustyypiksi WPA/WPA2. Nykyinen verkon salasana toimii hyvin.';
wle3a = 'WPA-PSK';
wle3b = 'WPA2-PSK';
wle3c = 'WPA-PSK + WPA2-PSK';
wps1 = 'Wi-Fi Protected Setup (WPS)';
wps3 = 'Määritä langaton suojaus';
wps17 = 'Suorita sellaisessa asiakaslaitteessa, jossa ei ole WPS:ään Belkin Security Assistant CD:ltä tai määritä laite manuaalisesti seuraavin asetuksin:';
wps23 = 'WPA/WPA2-henkilökohtainen (PSK)';
wps25 = 'TKIP+AES';
wps27 = 'Verkkoavain (WEP):';
wps28_1 = 'NOLLA';
wle11 = 'Avain 1';
wle12 = 'Avain 2';
wle13 = 'Avain 3';
wle14 = 'Avain 4';
wpskerr2 = 'Avaimen on oltava 8–63 merkkiä pitkä ja siinä voi olla välilyöntejä ja symboleja, tai 64 heksadesimaalia (vain 0-F).';
wpskerr4 = 'Vierasavain on syötettävä';
wpskerr7 = 'Vierasavaimen on oltava 8 merkkiä pitkä';
wpskerr8 = 'Vierasavain ei voi olla sama kuin verkkoavain';
wlguest1 = 'SSID:in ei saa olla sama kuin Guest SSID:in';
wlguest2 = 'Guest SSID:in ei saa olla sama kuin SSID:in';
rs_crc = 'Palautusvirhe < CRC >';
rs_long = 'Palautusvirhe <too long>';
rs_disposition = 'Palautusvirhe <No Content-Disposition>';
rs_getpid = 'Palautusvirhe <Can\'t get pid!>';
rs_unmatchpid = 'Palautusvirhe <Unmatched pid>';
msg_ddns3  = 'Toimialueen nimikenttä ei voi olla tyhjä.\n';
msg_lan_dhcp1  = 'Pyydetään tietoja yhdyskäytävältä.';
msg_lan_dhcp2  = 'Asetustietokantaa päivitetään.';
msg_wan_stat1  = 'IP-osoite ';
msg_wan_stat2  = ' ei ole ';
msg_wan_stat3  = ' verkossa.';
msg_wls_chan2  = 'Guest SSID ei voi olla NOLLA!\n';
fw_not_interrupt  = 'ÄLÄ KESKEYTÄ TOIMINTOA TAI KYTKE REITITINTÄ IRTI., koska tämä voi tehdä reitittimestä käyttökelvottoman.';
msg_invalid_char  = 'Virheellisiä merkkejä löytyi. Sallitut merkit: 0-9, a-z, A-Z, `~!@#$%^&*()_-+=|\\{}[]:";\',.<>/?';
msg_invalid_domain_char  = 'Väärä paikallisen toimialueen nimi'+': ~!@#$%^&*()=+{}[]|":;\\\'?/<>,`';
msg_invalid_char_1  = 'Virheellisiä merkkejä löytyi. Vain kirjaimet ja numerot hyväksytään. Seuraavia symboleja ei hyväksytä: `~!@#$%^&*()_+[]{}\\|;:\'"<>/?.,';
msg_hostIP_invalid  = 'Isännän IP-osoite on virheellinen. Se ei saa olla sama kuin reitittimen LAN IP.\n';
msg_dmzIP  = 'DMZ IP-osoite.';
msg_blank  = ' ei voi olla tyhjä.\n';
msg_space  = 'Tyhjiä tai välilyöntejä ei sallita kohdassa %s\n';
msg_blank_in  = 'Tyhjiä ei sallita kohdassa %s\n';
msg_allspaces  = '%s ei voi muodostua pelkistä välilyönneistä\n';
msg_invalid  = 'Virheellisiä merkkejä kohteessa %s\nSallitut merkit ovat: \n%s\n\n';
msg_check_invalid  = '%s sisältää väärän numeron\n';
msg_valid_range  = '%s on virheellinen. Sallittu alue on %s–%s\n';
msg_invalid_mac  = 'Virheellinen MAC-osoite.\n';
msg_multi_mac = 'MAC-osoite ei voi olla monilähetysosoite.\n';
msg_confirmDefault  = 'Varoitus!\nTehdasastusten lataaminen poistaa kaikki nykyiset asetukset.\nHaluatko varmasti tehdä tämän?';
Allowed_Services = 'Sallitut palvelut';
Allowing_Url = 'Internet-sivuston salliminen URL-osoitteen perusteella ';
Allowing_Keyword = 'Internet-sivuston salliminen hakusanan perusteella';
wipv63 = 'Reitittimeen kytketyt laitteet voivat keskustella keskenään alkuperäisten IPv6-pakettien välityksellä. LAN-verkon IPv6-paketit lähetetään automaattisesti kaikkiin LAN-liittymiin (Ethernet-portit ja sekä 2,4 GHz että 5 GHz langattomat verkot).';
wipv64 = 'Kun läpivienti on käytössä, IPv6-paketit kopioidaan myös WAN-liitäntään.(Kun käytössä, tämä luo suoran, suojaamattoman yhteyden Internetiin.)';
wipv65 = 'Kysy suoraan ISP:ltä, tukeeko se IPv6:tta.';
wipv67 = 'Internet IPv6';
wipv68 = 'Verkkosi on IPv6-yhteensopiva.';
wipv69 = 'Läpivienti';
mf1 = 'Näillä sivuilla voit säätää reitittimen käyttäytymistä sen vastaanottaessa tietyn tyyppistä medialiikennettä.';
mf2 = 'Optimoi Internet-yhteytesi automaattisesti eri liikennetyyppien mukaan.';
mf3 = 'Näe, miten reititintä käytetään.';
mf8 = 'Tallennettu kohteeseen %s';
mf10 = 'Lataa';
mf11 = 'Lataa';
mf12 = 'Nopeus';
mf15 = 'Ota asetukset käyttöön';
mf18 = 'Anna luku välillä {0.1-%s}.';
mf20 = 'Ainoastaan välillä {0.1-%s}.';
mf26 = 'Tallennettu manuaalisesti kohteeseen %s';
mf32 = 'tai';
mf44 = 'Automaattisen nopeustestin tulos ei välttämättä ole 100 % tarkka, Internet-liikenteen ja muiden tekijöiden takia. Voit vertailla tuloksia vierailemalla nopeustestisivustolla tai pyytämällä ISP:tä tarkistamaan Internet-nopeus. Jos nopeustulokset eivät ole yhdenmukaisia, voit antaa arvot manuaalisesti.';
media_dlna18 = 'Nimetön';
media_dlna21 = 'Sinulla on enemmän mediaa kuin reititin voi indeksoida, joten ilmoitamme ensimmäiset 12000.';
errSubnetMaskInvalid_2 = 'Aliverkon peite ei näytä aliverkon peitteeltä. Tarkista arvo.';

