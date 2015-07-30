function dw(message)
{
	document.write(message);	
}

chkwait='Buscando firmware nuevo...';


common_err1=" %s is NULL";
common_err2="Activado";
common_err3="Desactivado";
dyndns_err1="Sin mensaje.";
dyndns_err2="Estos campos no deben estar vacios";
dyndns_err3="La direccion IP es la misma, no necesita ser actualizada!";
dyndns_err4="NULL en nombre de usuario, password o hostname";
dyndns_err5="DNS error en pregunta";
dyndns_err6="DNS error de servidor";
dyndns_err7="No respuesta DNS or error de conexion en Internet";
dyndns_err8="HTTP no puede conectarse";
dyndns_err9="Error en nombre de usuario o password";
dyndns_err10="Actualizacion OK: correcto";
dyndns_err11="Actualizacion OK: correcto";
dyndns_err12="Por favor espere";
dyndns_err13="Nombre de dominio no completamente qualificado: notfqdn";
dyndns_err14="El host no existe: no host";
dyndns_err15="El host no esta dirigido por usted";
dyndns_err16="Bloqueado debido a un abuso: abuso";
dyndns_err17="DynDNS error de servidor: numhost";
dyndns_err18="El servicio ha sido cerrado";
dyndns_err19="Codigo devuelto recibido desconocido!";
dyndns_err20="Ha ocurrido un error desconocido!";
dyndns_err21="No se puede abrir HTTP llave";
dyndns_err22="La direccion WAN IP es NULL";
dyndns_err23='Registro fallido';
dyndns_err24='Registrado';
dyndns_err25='No se ha podido iniciar la sesión';
dyndns_err26='No se ha podido establecer la conexión';
upgrade_err1="El archivo actualizado no es el tipo o la versión correcta para este dispositivo. Fallo en la actualización. Busca el archivo correcto y prueba de nuevo.";
upgrade_err2="Se ha cerrado la actualización del software por falta de recursos. Fallo en la actualización.\nInténtelo de nuevo cuando el sistema esté en reposo (sin tráfico de Internet).";
upgrade_err3="Cannot upload, please contact administrator.";
upgrade_err4="Firmware is too large, upgrade failed.";
upgrade_err5="You already have the lastest firmware installed.";
upgrade_err6="Parece que la actualización del firmware está dañada.  Por favor, descargue de nuevo el archivo del firmware y pruebe de nuevo.";
upgrade_err7="El gestor de redes inalámbricas no puede actualizar el firmware.";
upgrade_err8="El archivo de actualización es nulo o demasiado pequeño.\nPor favor, obtenga el archivo correcto y pruebe de nuevo.";
OK='Aceptar';
Cancel='Cancelar';
Close='Cerrar';
show0='Configuración del router';
show1='Inicio';
show2='Ayuda';
show3='Acceder';
show4='Salir';
show5='Estado de Internet';
show6='Conectado';
show7='No conectado';
show8='Configuración de LAN';
show9='Ajustes LAN';
show10='Lista de clientes DHCP';
show11='Internet WAN';
show12='Tipo de conexión';
show13='DNS';
show14='Dirección MAC';
show15='DDNS';
show16='WLAN no disponible';
show17='Inalámbrico';
show18='Canal y SSID';
show19='Seguridad';
show20='Utilizar como Punto de acceso';
/*show21='Specify IP Address';*/
show21='Acceso Protegido Wi-Fi';
show22='Control de direcciones MAC';
show23='Puente inalámbrico';
show24='Firewall';
show25='Servidores virtuales';
show26='Filtros IP de clientes';
show27='Filtrado de direcciones MAC';
show28='DMZ';
show29='Bloquear ping a WAN';
show30='Registro de seguridad';
show31='Utilidades';
show33='Reiniciar el router';
show34='Reiniciar PA';
show35='Restablecer configuración predeterminada de fábrica';
show36='Guardar/Copia de seguridad ajustes';
show37='Restablecer ajustes anteriores';
show38='Actualización del firmware';
show39='Ajustes del sistema';
show42='EWC Setting';
show43='Setup Wizard';
show44='Manual Settings';
show47='Control de acceso';
show48='Self Healing';
show54='Ajustes de la conexión';
sm1='Más información';
btn1='Borrar cambios';
btn2='Aplicar cambios';
btn3='Sitio web';
btn4='Reset to Default';
btn5='Previous';
btn6='Routing Table';
btn7='Apply';
Router='Router';
AP='AP';
Dynamic='Dinámica';
Static='Estática';
PPPoE='PPPoE';
PPTP='PPTP';
L2TP='L2TP';
Multi_PPPoE='Multi-PPP over Ethernet';
UNKNOWN='UNKNOWN';
cff1='Comprobación de firmware con éxito';
cff2='Información sobre el firmware.';
cff3='No existe ninguna actualización nueva de firmware disponible para este Router';
cff4='Imposible conectar con el servidor de información del firmware, <br>vuelva a comprobar la conexión WAN.';
d1='Belkin | Duplicar Administrador';
d2='Duplicar Administrador';
d3='Este dispositivo es gestionado por';
d4='¡¡actualmente!!';
fc1='Firewall > Filtros IP de clientes';
fc2a='El Router puede ser configurado para restringir el acceso a Internet, al correo electrónico o a otros servicios de red en determinados días y horas.';
IP='IP';
Port='Puerto';
Type='Tipo';
BT='Tiempo de bloqueo';
Day='Día';
Tm='Hora';
Enable='Activar';
BOTH='AMBOS';
Always='Siempre';
Block='Bloqueo';
SUN='>DOM';
MON='>LUN';
TUE='>MAR';
WED='>MIÉR';
THU='>JUE';
FRI='>VIE';
SAT='>SÁB';
PM=':00 PM';
AM=':00 AM';
PM2=':30 PM';
AM2=':30 AM';
EcoMode='Modo Eco:';
Dimicons='Atenuar iconos';
DisableEco='Desactivar la radio de';
EcoTo='A';
EcoSu='D';
EcoMo='L';
EcoTu='M';
EcoWe='X';
EcoTh='J';
EcoFr='V';
EcoSa='S';
EcoExcept='excepto';

fcsm='El número en el recuadro de introducción del puerto deberá encontrarse entre 1 y 65535.';
fcrm='El último en la serie de puertos deberá ser mayor que el primero.';
fcripm='El último en la serie de ip deberá ser mayor que el primero.';
fcnsm='La serie de puertos privados no es correcta.';
fcwdm='The end Day must be later than the start Day.';
fcdtm='The Time must be later than the start Time when they are in the same day.';
fclanip='The IP filter range should not cover the LAN IP address.';
fd1='Firewall > DMZ';
fd2='La función DMZ le permite especificar un ordenador de su red para ser colocado fuera del firewall NAT. Esto puede ser necesario en el caso de que la propiedad NAT esté causando problemas con una aplicación como, por ejemplo, una aplicación de juegos o de videoconferencias. Utilice esta característica de forma temporal.';
fd3='El ordenador que se encuentra en la DMZ no está protegido contra los ataques de piratas informáticos.</font>  ';
fd4='Para situar un ordenador en la DMZ, introduzca los dígitos finales de su dirección IP en el campo inferior y seleccione "Activar" . Haga clic en "Aplicar cambios" para que los cambios tengan efecto.';
fd5='Dirección IP del host virtual de DMZ';
fd6='IP Estática ';
fd7='IP privado';
fd8='Activar';
fmc1='Firewall > Filtrado de direcciones MAC';
fmc2='Esta función le permite establecer una lista de clientes permitidos. Cuando desactive esta función, debe introducir laadirección MAC de cada cliente en su acceso a red para cada uno.';
fmc3='Activar filtrado de direcciones MAC ';
fmc4='Lista para el filtrado de direcciones MAC';
fmc5='Bloqueo';
fmc6='Host';
fmc7='Dirección MAC';
fmc8='¡Esta MAC ya ha sido añadida!';
fmc9='Sólo se puede añadir hasta 20ntradas.';
Add='Añadir';
Added='Added'
Del='Borrar';
fmcipm='Bien no ha introducido todos los dígitos hexadecimales o bien algunos de los dígitos hexadecimales introducidos es incorrecto. Un dígito hexadecimal puede ser un número entre 0 y 9 o una letra de la A(a) a la F(f).';
fmn1='Firewall > ';
fmn2='Su router se encuentra equipado con un firewall que protege su red de una amplia gama de ataques habituales de piratas informáticos, incluyendo los ataques Ping of Death (PoD) y Denial of Service (DoS). En caso necesario, puede desactivar la función de firewall. Si desactiva la protección por firewall, no dejará su red completamente vulnerable a los ataques de los piratas, pero es recomendable dejar activado el firewall siempre que sea posible.';
fmn3='Activar / Desactivar el firewall ';
Disable='Desactivado';
fp1='Firewall > Bloquear Ping a WAN';
fp2='¡FUNCIÓN AVANZADA! Es posible configurar el router para que no responda a un ping ICMP (un ping al puerto WAN). Esta característica ofrece un mayor nivel de seguridad.';
fp3='Bloquear ping ICMP ';
fs1='Firewall > Registro de seguridad';
fs1b='Utilidades > Registro de seguridad';
fs2='El router conserva un registro de toda actividad que tiene lugar en el mismo como, por ejemplo, las entradas y salidas y todos los intentos de acceder al router desde Internet. El registro puede ser visualizado en la parte inferior.';
fs3='Archivo de registro';
Save='Guardar';
Clear='Borrar';
Refresh='Actualizar';
System_log='Registro del sistema:';
Firewall_log='Registro del firewall:';
fv1='Firewall > Servidores virtuales';
fvipm='Bien no ha introducido todas las direcciones ip, \n o bien algunos de los números introducidos es incorrecto. \n El número en el recuadro de entrada de la dirección IP deberá ser un número entre 1 y 254.';
fvrm='Desactive la gestión remota. Su puerto está colisionando con uno de sus servidores virtuales\' puerto de entrada.';
fvipr='La gama de puertos de entrada no es correcta.';
fvppr='La serie de puertos privados no es correcta.';
fvippnm='La gama de puertos de entrada no es correcta.';
fv2='Esta función le permitirá dirigir llamadas (Internet) externas para servicios como un servidor web(puerto 80), servidor FTP (puerto 21), u otras aplicaciones mediante su router a su red interna.';
fv3='Active Worlds';
fv4='Age of Empires';
fv5='Expansión de Age of Empires: The Rise of Rome';
fv6='Expansión de Age of Empires II: The Conquerors';
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
fv23='Close Combat para Windows';
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
fv39='Juegos DirectX 7';
fv40='Juegos DirectX 8';
fv41='Servidor de nombres de dominio (DNS)';
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
fv54='Flight Simulator 98';
fv55='Freetel';
fv56='Servidor FTP';
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
fv95='Protocolo horario de red (NTP)';
fv96='Servidor de noticias (NNTP)';
fv97='OKWeb';
fv98='OKWin';
fv99='Outlaws';
fv100='pcAnywhere v7.5';
fv101='PhoneFree';
fv102='Polycom ViaVideo H.323';
fv103='Polycom ViaVideo H.324';
fv104='Quake';
fv105='Quake II (cliente y servidor)';
fv106='Quake III';
fv107='Red Alert';
fv108='Rise of Rome';
fv109='Roger Wilco';
fv110='Rogue Spear';
fv111='Servidor Secure Shell (SSH)';
fv112='Servidor web seguro (HTTPS)';
fv113='ShoutCast';
fv114='SNMP ';
fv115='Trap SNMP';
fv116='Speak Freely';
fv117='StarCraft';
fv118='Starfleet Command';
fv119='StarLancer';
fv120='SWAT3';
fv121='Servidor Telnet';
fv122='The 4th Coming';
fv123='Tiberian Sun: C&C ';
fv124='Tiberian Sun: C&C III"';
fv125='Total Annihilation';
fv126='Ultima';
fv127='Unreal Tournament';
fv128='Urban Assault';
fv129='VoxPhone 3.0 ';
fv130='Warbirds 2';
fv131='Servidor web (HTTP)';
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
fv200='Borrar entrada';
Description='Descripción';
Inb='Puerto de entrada';
Type='Tipo';
Pipa='Dirección IP privada';
Pport='Puerto Privado';
htop='arriba';
h1='Ayuda';
h2='GLOSARIO DE TÉRMINOS';
h3='<b>Administrador</b> Un Administrador realiza el servicio de mantener una red. En el caso de este router, la persona que lo configura y efectúa los cambios en los ajustes.';
h4='<b>Cliente</b> Un ordenador de la red que emplea los servicios del router como, por ejemplo, el servidor DHCP automático y el firewall.';
d5='<b>DDNS</b> El servicio DNS dinámico le permite otorgar a una dirección IP dinámica uno de los muchos nombres de host estático que ofrece la lista de dominios de DynDNS.org; de esta manera, podrá acceder a sus ordenadores en red de manera más sencilla desde varias ubicaciones en Internet. DynDNS.org ofrece a la comunidad de Internet este servicio para hasta cinco nombres de host en forma gratuita.';
h5='<b>DHCP</b> Protocolo de configuración de host dinámico. Este protocolo configura automáticamente los ajustes TCP/IP de todos los ordenadores de la red de su hogar.';
h6='<b>Dial-Up</b> Una conexión que emplea la red telefónica pública.';
h7='<b>DMZ</b> Una zona virtual en el router que no se encuentra protegida por el firewall del router.  Es posible situar un ordenador en la DMZ.';
h8='<b>"Dirección de servidor DNS</b> DNS significa "Domain Name System" (Sistema de nombres de dominio) y permite a los ordenadores host de Internet disponer de un nombre de dominio (como belkin.com) y una o más direcciones IP (como 192.34.45.8). Un servidor DNS conserva una base de datos de los ordenadores host y de sus respectivos nombres de dominio y direcciones IP, de forma que cuando se requiere un nombre de dominio (como, por ejemplo, al introducir "belkin.com" en su navegador de Internet), el usuario es enviado a la dirección IP correcta. La dirección del servidor DNS utilizada por los ordenadores de la red de su hogar es la ubicación del servidor DNS que ha asignado su ISP.';
h9='<b>Módem DSL</b> DSL significa Línea de abonados digitales. Un módem DSL emplea sus líneas de teléfono existentes para transmitir los datos a altas velocidades.';
h10='<b>IP dinámica</b> Una dirección IP que se obtiene de forma automática de un servidor DHCP.';
h11='<b>Ethernet</b> Un estándar para redes de ordenadores. Las redes Ethernet se conectan mediante hubs y cables especiales, y transfieren datos a hasta 10 millones de bits por segundo (Mbps).';
h12='<b>Firewall</b> Una frontera electrónica que evita el acceso de usuarios no autorizados a determinados archivos u ordenadores de una red.';
h13='<b>Firmware</b> El software almacenado en la memoria. Los programas esenciales que permanecen incluso cuando se apaga el sistema. El firmware es más fácil de modificar que el hardware pero es más permanente que el software almacenado en un disco.';
h14='<b>Dirección IP</b> IP significa Protocolo de Internet. Una dirección IP se compone de una serie de números separados por periodos que identifica a un único y exclusivo host de Internet. Ejemplo: 192.34.45.8.';
h15='<b>ISDN</b> Red digital de servicios integrados. Son las líneas digitales de telecomunicación que pueden transmitir tanto voz como servicios de red digital hasta 128 K, mucho más rápidas y más robustas que los módems analógicos de alta velocidad. Las líneas ISDN son ofrecidas por numerosas compañías de teléfono.';
h16='<b>ISP</b> Proveedor de servicios de Internet. Un ISP es una empresa que proporciona conectividad a Internet para personas individuales o para empresas u organizaciones.';
h17='<b>Dirección de puerta de enlace del ISP</b> (consulte la definición de ISP). La Dirección de puerta de enlace del ISP es una dirección IP para el router de Internet situado en la sede del ISP. Esta dirección es requerida únicamente cuando se emplea un módem por cable o DSL.';
h18='<b>LAN</b> Red de área local. Una LAN es un grupo de ordenadores y dispositivos conectados juntos en una zona relativamente reducida (como una casa o una oficina). La red de su hogar es considerada como una LAN.';
h19='<b>Dirección MAC</b> MAC significa Control de acceso a los medios. Una dirección MAC es la dirección de hardware de un dispositivo conectado a una red.';
h20='<b>MTU</b> Unidad de transmisión máxima. La mayor unidad de datos que puede ser transmitida por un medio físico individual.';
h21='<b>NAT</b> Traducción de direcciones de red. Este proceso permite que todos los ordenadores en la red de su casa utilicen una sola dirección IP. Utilizando la propiedad NAT de la puerta de enlace para red de hogar HomeConnect, podrá acceder a Internet desde cualquier ordenador de la red de su hogar sin necesidad de adquirir más direcciones IP de su ISP.';
h22='<b>Puerto</b> n canal lógico que es identificado por su número de puerto exclusivo. Las aplicaciones escuchan los diferentes puertos para ver si existe en ellos información que pueda estar relacionada con ellas.';
h23='<b>PPPoE</b> Protocolo punto a punto a través de Ethernet. El Protocolo punto a punto a través de Ethernet es un método para la transmisión segura de datos creado originalmente para conexiones telefónicas; el PPPoE es para conexiones de Ethernet.';
h24='<b>PPTP</b> Protocolo de túnel punto a punto. Una versión del PPP (Protocolo punto a punto) que tiene la capacidad de encapsular paquetes de datos formateados para un protocolo de red en paquetes utilizados por otro protocolo. Esta técnica de túneles permite que los datos TCP/IP sean transmitidos sobre una red que no es TCP/IP. El PPTP puede ser empleado para unir diferentes redes físicas utilizando Internet como intermediario.';
h25='<b>SNTP</b> Protocolo horario de red simple. Un estándar de comunicación que permite la transmisión de información en tiempo real por una red o por Internet.';
h26='<b>SPI</b> Inspección de paquetes de datos. SPI es el tipo de seguridad de Internet de nivel corporativo proporcionada por su puerta de enlace de red doméstica HomeConnect. Utilizando la SPI, la puerta de enlace actúa a modo de "firewall", protegiendo su red de los piratas informáticos.';
h27='<b>IP estática</b> Una dirección IP que es configurada manualmente y nunca cambia.';
h28='<b>Máscara de subred</b> Una máscara de subred, que puede formar parte de la información de TCP/IP suministrada por su ISP, es un conjunto de cuatro números configurado como dirección IP. Se emplea para crear números de direcciones IP empleados exclusivamente dentro de una red particular (al contrario de los números de direcciones IP válidas reconocidos por Internet, que deben ser asignados por InterNIC).';
h29='<b>TCP</b> Protocolo de control de transmisiones. Es el protocolo de nivel de transporte de Internet más común. El TCP está orientado a la conexión y al flujo de información y proporciona una comunicación fiable a través de redes de conmutación de paquetes.';
h30='<b>TCP/IP</b> Protocolo de control de transmisiones a través de protocolo de Internet. Este es el protocolo estándar para la transmisión de datos a través de Internet.';
h31='<b>UDP</b> Protocolo de los datagramas del usuario. Protocolo de comunicaciones del nivel de red de Internet, nivel de transporte y nivel de sesión, que hace posible enviar un mensaje datagrama desde un ordenador hasta una aplicación que se esté ejecutando en otro ordenador. A diferencia del TCP, el UDP carece de conexión y no garantiza una comunicación fiable; la propia aplicación debe procesar todo tipo de errores y controlar que el envío sea fiable. ';
h32='<b>WAN</b> Red de área amplia. Una red que conecta ordenadores situados en áreas geográficas separadas, (es decir, diferentes edificios, ciudades, países). Internet es una red de área amplia.';
h33='<b>Dirección IP de WAN</b> La dirección IP asignada al router por el ISP.';
h34='<b>WLAN</b> Red inalámbrica de área local. Una red de área local que conecta ordenadores cercanos a través de radioemisión (como 802.11b)';
h35="<b>L2TP</b> Layer Two (2) Tunneling Protocol. an extension to the PPP protocol that enables ISPs to operate Virtual Private Networks (VPNs). L2TP merges the best features of two other tunneling protocols: PPTP from Microsoft and L2F from Cisco Systems. Like PPTP, L2TP requires that the ISP's routers support the protocol.";
h39='<b>DHCP</b> La función de servidor DHCP facilita en gran medida la tarea de establecer una red asignando direcciones IP a cada ordenador de la red. El servidor DHCP puede ser desconectado si es necesario. Para desactivar el servidor DHCP será necesario que usted establezca manualmente una dirección IP estática en cada ordenador de su red. El grupo de IP es la serie de las direcciones IP apartadas para la asignación dinámica a los ordenadores de su red. El valor predeterminado es 2-100 (99 ordenadores) y si desea cambiar este número, puede hacerlo introduciendo una primera dirección IP y última dirección IP nuevas y haciendo clic en "Aplicar cambios".';
Enabled='Activado';
Disabled='Desactivado';
Auto='Automático';
str1='Este dispositivo es gestionado por';
str2='¡¡actualmente!!';
DDNSDisable='Desactivado';
DynDNS='DynDNS';
DtDNS='DtDNS';
Current='Canal actual';
i1='Configurar inicio';
i2='Estado';
i3='Información sobre la versión';
i4='Versión del firmware';
i5='Versión de arranque';
i6='Hardware';
i7='N° de serie';
i8='Ajustes LAN ';
i9='MAC de LAN/WLAN';
i9a='MAC de LAN';
i9b='WLAN no disponible';
i10='Dirección IP';
i11='Máscara de subred ';
i12='Servidor DHCP ';
NoClients='No clientes';
Clients='Clientes';
i13='Ajustes de Internet';
i14='Dirección MAC de WAN';
i15='Tipo de conexión';
i16='Máscara de subred';
i17='IP de WAN';
i18='Puerta de enlace predeterminada';
i19='Dirección DNS';
i20='Propiedades';
i21='NAT';
i22='Ajustes de Firewall ';
i23='SSID';
i24='Seguridad';
i25='Impresora';
i26='(activar/desactivar)';
i27='Deberá registrarse para poder modificar cualquiera de los ajustes.';
i28='Idioma';
i29='Idioma actual';
i30='Idiomas disponibles';
i31='IP Estática';
i32='Inalámbrico Desactivado';
ld1='LAN > DHCP';
ld2='LAN > Lista de clientes DHCP';
ld3='Esta página le muestra la dirección IP, el nombre de host y la dirección MAC de cada uno de los ordenadores conectados a su red. Si el ordenador no tiene especificado ningún nombre de host, el campo de Nombre de host estará en blanco. Al pulsar "Actualizar" se actualizará la lista.';
ld4='Dirección IP';
ld5='Nombre de host';
ld6='Dirección MAC';
lm1='LAN';
lm2='Su router está equipado con un servidor DHCP que asignará automáticamente direcciones IP a cada uno de los ordenadores de su red. Los ajustes establecidos de fábrica para el servidor DHCP funcionarán en la mayoría de aplicaciones. Si precisa efectuar cambios en estos ajustes, podrá hacerlo.';
lm3='Los cambios que puede realizar son:';
lm4='Modificar la dirección IP interna del router. Valor predeterminado = 192.168.2.1';
lm5='Modificar la Máscara de subred. Valor predeterminado = 255.255.255.0';
lm6='Activar/Desactivar la función de servidor DHCP. Valor predeterminado= ON (Activada)';
lm7='Especificar la primera y última dirección del grupo de IP. Valor predeterminado = primera: 2 / última: 100';
lm8='Especificar el tiempo límite de concesión de la dirección IP. Valor predeterminado= Siempre';
lm9='Especificar un Nombre de dominio local. Valor predeterminado = Belkin';
lm10='Para realizar los cambios, haga clic en "Ajustes de LAN" en la pestaña LAN de la izquierda.';
lm11='El router le proporcionará asimismo una lista de todos los ordenadores cliente conectados a la red. Para ver la lista, haga clic en "Lista de clientes DHCP" en la pestaña LAN de la izquierda.';
ls1='LAN > Ajustes LAN';
ls2='Aquí podrá hacer cambios en la red de área local (LAN). Para que los cambios tengan efecto, deberá pulsar el botón "Aplicar cambios" que se encuentra en la parte inferior de la pantalla.';
ls3='Dirección IP';
ls4='Máscara de subred';
ls5='Servidor DHCP';
On='Activado';
Off='Desactivado';
ls6='La función de servidor DHCP facilita en gran medida la tarea de establecer una red asignando direcciones IP a cada ordenador de la red de forma automática. Aquí no es necesario efectuar cambios.';
ls7='Primera dirección del grupo de IP';
ls8='Última dirección del grupo de IP';
ls9='Tiempo límite de concesión';
ls10='Siempre';
ls11='Media hora ';
ls12='Un hora ';
ls13='Dos horas';
ls14='Medio día';
ls15='Un día ';
ls16='Dos días ';
ls17='Una semana';
ls18='Dos semanas';
ls19='La cantidad de tiempo que el servidor DHCP reservará la dirección IP para cada ordenador.';
ls20='Nombre de dominio local';
Optional='Opcional';
ls21='Una propiedad que le permite asignar un nombre a su red.';
lssm='El número de Máscara de subred que ha introducido no es válido.';
lsnetm='El grupo de IP deberá encontrarse en la misma subred que la IP de la puerta de enlace ';
lsendm='La última dirección IP deberá ser mayor que la primera dirección IP.';
lspoolm='La dirección IP de LAN no puede encontrarse en el grupo de direcciones de DHCP.';
lsipm2='Dirección IP de Lan no válida, el último número no puede ser 0 ni 255';
lsipm3='Dirección IP de Lan no válida, el primer número no puede ser 127 ni 0';
lsldnm='Invalid Local Domain Name: `~!@#$%^&*()_+[]{}\\|;:\'"<>/?.,';
lsipm4='La dirección IP introducida no es válida';
lsipalert='Introduzca de forma manual la nueva dirección Lan en el recuadro de entrada de la Dirección de la barra de estado de su navegador';
lsipm5='La dirección IP que seleccione deberá se un IP no enrutable.\n  192.168.x.x (en donde x es un valor entre 0 y 255.) \n10.x.x.x (donde x es cualquier valor entre 0 y 255.)\n172.y.x.x (donde y es cualquier valor entre 16 y 31 y x es cualquier valor entre 0 y 255.)';
lsipc='¿Desea realmente modificar la dirección IP de LAN?';
lo1='Acceder';
lo2='Para poder modificar cualquiera de los ajustes, deberá acceder con una contraseña. Si no ha establecido aún una contraseña personalizada, deje este espacio en blanco y haga clic en "Submit" (Enviar). ';
lo3='Contraseña ';
lo4='Valor predeterminado = dejar en blanco ';
Clear='Borrar';
Submit='Enviar';
le1='Belkin | Error de acceso';
lerror='¡Error de acceso!';
Utilities='Utilidades > ';
ss1='Cambios realizados con éxito ';
rs1='Reinicio correcto ';
rs3='El router se está reiniciando';
rs4='segundos restantes.';
ugs1='Actualización del firmware finalizada con éxito. ';
rf1='Restablecer configuración predeterminada de fábrica Correcto';
rss1='Ajustes restablecidos correctamente ';
ufy1='Restablecer configuración predeterminada de fábrica';
ufy2='El empleo de esta opción restablecerá los ajustes (predeterminados) de fábrica del router. Se recomienda que realice una copia de seguridad de sus ajustes antes de restablecer todos los ajustes predeterminados. Para restablecer los ajustes predeterminados de fábrica, haga clic en el botón "Restablecer ajustes predeterminados" de la parte inferior.';
ufy3='ADVERTENCIA: ¡Se perderán todos sus ajustes!\n¿Está seguro de que desea hacerlo?';
ufy4='Restablecer los ajustes predeterminados puede durar hasta 60 segundos. No apague o desconecte el router durante este proceso.';
ufy5='No restablecerá la configuración predeterminada de fábrica. ¡No se perderá ningún ajuste!';
ufy='Restablecer ajustes predeterminados';
ufe1='Utilidades > Actualización del firmware';
ufe2='De vez en cuando, es posible que Belkin publique nuevas versiones del firmware del router. Las actualizaciones del firmware contienen mejoras y soluciones para los problemas que puedan haber existido. Haga clic en el vínculo de la parte inferior para comprobar si existe una nueva actualización de firmware disponible para este router.';
ufe3='NOTA: Realice copias de seguridad de sus ajustes actuales antes de actualizar la versión del firmware.';
ufe4='Haga clic aquí';
ufe5='para ir a la página de Guardar copia de seguridad de ajustes actuales.';
ufe6='Buscar una nueva versión del firmware';
ufe7='Búsqueda de firmware';
ufe8='Actualizar Firmware';
Update='Actualizar';
ufe9='Especifique la ubicación del archivo de actualización. Introduzca la ruta y el nombre del archivo o haga clic en "Examinar" para buscar la ubicación del archivo.';
ufe10='¿Está seguro de que desea continuar con la actualización?';
ufe11='Al final de la actualización, es posible que el router no responda a los comandos durante 180 segundos. Esto es normal. No apague ni reinicie el router durante ese tiempo.';
ufe12='Versión del firmware';
um1='Esta pantalla le permite gestionar diferentes parámetros del router y llevar a cabo determinadas funciones administrativas.';
um5='Reiniciar el router';
um6='Algunas veces es posible que sea necesario reiniciar el router en caso de que comience a funcionar mal. Al reiniciar el router no se borrará ninguno de sus ajustes de configuración.';
um7='Restablecer configuración predeterminada de fábrica';
um8='El empleo de esta opción restablecerá los ajustes (predeterminados) de fábrica del router. Se recomienda que realice una copia de seguridad de sus ajustes antes de restablecer todos los ajustes predeterminados.';
um9='Guardar copia de seguridad de ajustes actuales';
um10='Puede guardar su configuración actual utilizando esta propiedad. El guardar su configuración le permitirá restablecerla posteriormente, en caso de que sus ajustes se pierdan o se modifiquen. Se recomienda realizar una copia de seguridad de su configuración actual antes de llevar a cabo una actualización del firmware.';
um11='Restablecer ajustes guardados anteriormente';
um12='Esta opción le permitirá restablecer una configuración guardada anteriormente.';
um13='Actualización del firmware';
um14='De vez en cuando, es posible que Belkin publique nuevas versiones del firmware del router. Las actualizaciones del firmware contienen mejoras de las propiedades y soluciones para los problemas que puedan haber existido. ';
um15='Ajustes del sistema';
um16='La página de Ajustes del sistema es donde podrá introducir una nueva contraseña de administrador';
um17=', establecer la zona horaria, activar la gestión a distancia y encender y apagar la función NAT del router.';
um18=' del router.';
not='no';
pwd='Contraseña';
uprev1='Utilidades > Restablecer ajustes guardados previamente';
uprev2='Esta opción le permitirá restablecer una configuración guardada anteriormente.';
Restore='Restablecer';
uprev3='Introduzca el nombre del archivo que contiene la copia de seguridad de los ajustes.';
uprev4='¿Desea continuar y restablecer los ajustes?';
uprev5='Tras el restablecimiento de los ajustes, es posible que el router no responda\n a los comandos durante un plazo de 60 segundos. Esto es normal. No apague el router durante este tiempo.';
ueco1='Utilidades > Ajustes del modo eco';
ueco2='ECO is a mode about "energy saving" mode';
ur1='Utilidades > Reiniciar el router';
ur2='Algunas veces es posible que sea necesario reiniciar el router en caso de que comience a funcionar mal. Al reiniciar el router no se borrará ninguno de sus ajustes de configuración. Haga clic en el botón de "Reiniciar el router" de la parte inferior para reiniciar el router.';
ur3='Reiniciar el router';
ur4='¿Está seguro de que desea reiniciar el router? El reinicio del router no afectará a su configuración.';
ur5='Espere 30 segundos hasta que se reinicie el router. No apague el router antes de que se haya completado el reinicio.';
ur6='Espere 60 segundos hasta que se reinicie el router. No apague el router antes de que se haya completado el reinicio.';
usave1='Utilidades > Guardar copia de seguridad de ajustes actuales';
usave2='Puede guardar su configuración actual utilizando esta propiedad. El guardar su configuración le permitirá restablecerla posteriormente, en caso de que sus ajustes se pierdan o se modifiquen. Se recomienda realizar una copia de seguridad de su configuración actual antes de llevar a cabo una actualización del firmware.';
Save='Guardar';
usys1='Utilidades > Ajustes del sistema';
usys2='Contraseña de administrador: ';
usys3='El router efectúa el envío SIN necesidad de introducir contraseña. Si desea añadir una contraseña para disfrutar de una mayor seguridad, puede establecerla aquí.';
usys4='Introduzca la contraseña actual';
usys5='Introduzca la nueva contraseña';
usys6='Confirme la nueva contraseña';
usys7='Tiempo límite de acceso';
usys8='(1-99 minutos)';
usys9='Hora y Zona horaria: ';
January='Enero';
February='Febrero';
March='Marzo';
April='April';
May='Mayo';
June='Junio';
July='Julio';
August='Agosto';
September='Septiembre';
October='Octubre';
November='Noviembre';
December='Diciembre';
usys10='Establezca su zona horaria. Si reside en una zona que se realiza el cambio de hora según el horario de verano, coloque una marca en este recuadro.';
usys11='Zona horaria';
usys12='(GMT-12:00) Enewetak, Kwajalein ';
usys13='(GMT-11:00) Isla Midway, Samoa';
usys14='(GMT-10:00) Hawái';
usys15='(GMT-09:00) Alaska';
usys16='(GMT-08:00) Hora del Pacífico (EE.UU. y Canadá); Tijuana ';
usys17='(GMT-07:00) Arizona ';
usys18='(GMT-07:00) Hora Estándar de la Montaña (EE.UU. y Canadá), Nuevo Méjico ';
usys19='(GMT-06:00) Ciudad de México ';
usys19a='(GMT-06:00) Hora central (EE.UU. y Canadá), Chicago  ';
usys20='(GMT-06:00) Tegucigalpa ';
usys21='(GMT-06:00) Saskatchewan ';
usys22='(GMT-05:00) Bogotá, Lima, Quito ';
usys23='(GMT-05:00) Hora del Este (EE.UU. y Canadá) ';
usys24='(GMT-05:00) Indiana (Este) ';
usys25='(GMT-04:00) Hora del Atlántico (Canadá) ';
usys26='(GMT-04:00) Caracas, La Paz ';
usys27='(GMT-04:00) Santiago ';
usys28='(GMT-03:00) Newfoundland ';
usys29='(GMT-03:00) Brasilia ';
usys30='(GMT-03:00) Buenos Aires, Georgetown ';
usys31a='(GMT-02:00) Atlántico medio ';
usys32='(GMT-01:00) Islas Azores, Cabo Verde ';
usys33='(GMT) Casablanca, Monrovia ';
usys34='(GMT) Hora media de Greenwich: Lisboa, Londres, Edimburgo ';
usys35='(GMT) Hora media de Greenwich: Dublín ';
usys36='(GMT+01:00) Ámsterdam, Berlín, Berna, Roma ';
usys37='(GMT+01:00) Estocolmo, Viena, Belgrado ';
usys38='(GMT+01:00) Bratislava, Budapest, Liubliana ';
usys39='(GMT+01:00) Praga, Bruselas, Copenhague, Madrid ';
usys40='(GMT+01:00) París, Sarajevo, Skopje ';
usys41='(GMT+01:00) Varsovia, Zagreb ';
usys42='(GMT+02:00) Atenas, Estanbul, Minsk, Vilnius, Sofía ';
usys43='(GMT+02:00) Bucarest ';
usys43a='(GMT+02:00) Israel ';
usys44='(GMT+02:00) El Cairo ';
usys45='(GMT+02:00) Harare, Pretoria ';
usys46='(GMT+02:00) Helsinki, Riga, Tallín ';
usys48='(GMT+03:00) Bagdad, Kuwait, Nairobi, Riad ';
usys50='(GMT+03:00) Moscú, San Petersburgo,Volgogrado,Kazán ';
usys50b='(GMT+03:30) Teherán ';
usys51='(GMT+04:00) Abu Dhabi, Muscat, Tiflis ';
usys52='(GMT+04:30) Kabul ';
usys53='(GMT+05:00) Islamabad, Karachi, Ekaterimburgo ';
usys53a='(GMT+05:30) Chennai, Calcuta, Bombay, Nueva Delhi ';
usys54='(GMT+06:00) Almaty, Dhaka ';
usys55='(GMT+07:00) Bangkok, Yakarta, Hanoi ';
usys56='(GMT+08:00) PekÃ­n, Chongqing, Urumqi ';
usys57='(GMT+08:00) Hong Kong, Perth, Singapur, Taipei ';
usys58='(GMT+09:00) Tokio, Osaka, Saporo ';
usys58a='(GMT+09:00) Seoul ';
usys96='(GMT+09:30) Adelaida, Darwin ';
usys59='(GMT+10:00) Brisbane ';
usys60='(GMT+10:00) Canberra, Melbourne, Sydney ';
usys61='(GMT+10:00) Guam, Port Moresby ';
usys62='(GMT+10:00) Hobart ';
usys63='(GMT+11:00) Magadán, Islas Salomón, Nueva Caledonia ';
usys64='(GMT+12:00) Wellington, Auckland ';
usys65='(GMT+12:00) Fiji, Kamchatka, Marshall ls. ';
usys97='(GMT+13:00) Nukualofa';
usys66='Cambio de hora según el horario de verano';
usys67='Cambiar la hora automáticamente según el horario de verano';
printps='Servidor NTP primario';
bakntps='Servidor NTP de respaldo';
usys68='Gestión a distancia:';
AF='¡PROPIEDAD AVANZADA!';
usys69='La gestión a distancia le permite efectuar cambios en los ajustes de su router desde cualquier parte en Internet. Antes de activar esta función, ';
usys70='ASEGÚRESE DE HABER ESTABLECIDO LA CONTRASEÑA DEL ADMINISTRADOR.';
usys71='Cualquier dirección IP puede gestionar el router a distancia.';
usys72='Únicamente esta dirección IP puede gestionar el router a distancia';
usys73='Activación de NAT:';
usys74='Le permite desactivar la propiedad de Traducción de direcciones de red. En prácticamente NINGÚN caso debería desactivar esta función. ';
usys75='Activar / Desactivar NAT';
 
usys76='Activación de UPnP: ';
usys77='Le permite activar o desactivar la propiedad UPnP del router. Si emplea aplicaciones compatibles con UPnP, la activación del UPnP permitirá que dichas aplicaciones configuren automáticamente el router. ';
usys78='Activar / Desactivar UPnP';
usys79='Activar la actualización automática del firmware:';
usys80='Le permite comprobar automáticamente la disponibilidad de actualizaciones de firmware para su router.';
usys81='Activar / Desactivar la actualización automática del firmware ';
usys82='Actual password invalida';
usys83='La nueva contraseña y la repetición de la nueva contraseña no coinciden';
usys83_1='Las contraseñas no coinciden.';
usys84='Tiempo sin actividad de los numeros introducidos es invalido. El numero tiene que ser un numero entero entre 1 y 99';
usys84_1='El valor de tiempo sin actividad introducido no es válido. El tiempo sin actividad debe ser un número entero entre 1 y 99.';
usys85='La longitud de la contraseña no es válida. La longitud máxima de la contraseña es 12 y la longitud mínima de la contraseña es 3';
usys85_1='La contraseña del administrador debe tener entre 1 y 63 caracteres.';
usysntp='Two NTP Server IP address can not be the same.';
usys86='Introduzca de forma manual la dirección Lan predeterminada en el recuadro de entrada de la Dirección de la barra de estado de su navegador';
usys87='Se recomienda que establezca su contraseña de Administrador.';
usys88='The password has reached its max length!';
usys89='AM';
usys90='PM';
usys91='Puerto de acceso remoto';
usys92='Acceso remoto al puerto es invalido. Puerto valido debe ser entre 1 y 65535.';
usys93='Esta función sirve para ahorrar energía.';
usys94='IGMP Proxy';
usys95='IGMP Proxy Activar / Desactivar';
usysipm='Bien no ha introducido todos los números de la IP, o bien alguno de los números introducidos es incorrecto. La dirección IP debería ser del tipo  x.y.y.x(donde y es un valor entre 0 y 255, y x es un valor entre 1 y 254).';
usysipm_1='Bien no has introducido todos los números de la IP, o bien algunos de los números introducidos son incorrectos. Los números deben ser entre 0 y 255.';
self_healing='Estado > Mantenimiento regular';
self_healing1='Reiniciar el router periódicamente ayuda a prevenir problemas en la red.';
self_healing2='Auto inicializar mi router';
self_healing3='DÃ­as de Juego';
self_healing4='DOM';
self_healing5='LUN';
self_healing6='MAR';
self_healing7='MIÉR';
self_healing8='JUE';
self_healing9='VIE';
self_healing10='SÁB';
self_healing11='Ajuste la hora';
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
Australia='Australia y Nueva Zelanda ';
AsiaPacific='Asia Pacific';
NorthAmerica='Norte America';
wrhtpsswd='<b>Contraseña incorrecta</b><br>Por favor, confirme su contraseña e inténtelo de nuevo.';
usysb1='El router efectúa el envío SIN necesidad de introducir contraseña. Si desea añadir una contraseña para disfrutar de una mayor seguridad, puede establecerla aquí.';
vjs1='Dirección IP no válida, demasiado larga, compruebe de nuevo';
vjs2='Dirección IP no válida, falta \'.\' , ¡Compruebe de nuevo!';
vjs3='Dirección IP no válida, faltan números entre \'.\' , ¡Compruebe de nuevo!';
vjs4="Dirección IP no válida, extra '.' , ¡Compruebe de nuevo!";
vjs5='Dirección IP no válida, los números entre \'.\' son demasiado grandes, ¡Compruebe de nuevo!';
vm1='Uno de los caracteres no es válido ';
vm2=' en la posición ';
vm3='Deberá ser ';
vjs6='Formato del año no válido, introdúzcalo como (p. ej. 2002)';
vm4='Número no válido ';
vjs8='No válido, deberá estar entre 1970..2037';
vjs9='Formato del mes no válido, introdúzcalo como (p. ej. 01...12)';
vjs10='Introduzca primero el año y el mes';
vjs11='Formato del día no válido, introdúzcalo como (p. ej. 01...31), es posible que algún mes tan sólo como (00...28)';
vjs12='Formato de la hora no válido, introdúzcalo como (p. ej. 00...23)';
vjs13='Formato de minutos no válido, introdúzcalo como (p. ej. 00...59)';
vjs14='MTU no válido, deberá estar entre 500..0.1500';
vjs15='MRU no válido, deberá estar entre 128..65535';
vjs16="Ip no válida: ";
vjs161=" no en ";
vjs162=" máscara de red";
vjs163='El rango de DHCP permitido es ';
vjs17='Ha introducido dos contraseñas distintas, compruebe de nuevo ambas';
vjs18='Introduzca el número del puerto de inicio.';
vjs19='El número del puerto de inicio deberá ser inferior al del número del puerto de finalización.';
vjs20='Número de puerto no válido, los números de puerto deberán ser enteros positivos';
vjs21='Longitud no válida';
vjs22='Invalid Format at position ';
vjs23='Dirección MAC no válida, es una dirección de emisión.';
vjs24='Dirección MAC no válida, es una dirección nula.';
vjs25='Dirección MAC no válida, es una dirección mutlicast.';
vjs26='Primera y última dirección IP no válidas, la última IP deberá ser superior a la primera IP';
vjs27='¡Número no válido! Deberá estar entre 1..65535';
vjs28='Formato de máscara de red no válido.';
vjs29='Formato no válido, la máscara de red deberá ser 255.255.255.0 ó 255.255.255.128 ó 255.255.255.192 ó 255.255.255.224 ó 255.255.255.240 ó 255.255.255.248 ó 255.255.255.252 ó 255.255.255.254';
vjs30='Dirección Ip no válida, el último número no puede ser 0 ni 255';
vjs31='Dirección Ip de Lan no válida, el primer número no puede ser 127';
vjs32='Dirección Ip de Lan no válida, no puede ser 0.0.00.0';
vjs33='Dirección Ip de Lan no válida, deberá ser inferior a 224.0.0.0';
vjs34='El intervalo válido es ';
vjs35='The first entry of IP address must be within range 1 - 223.';
vjs36='Invalid network format.';
vjs37='Invalid gateway format.';
vjs38='IP is class A, netmask is invalid.';
vjs39='IP is class B, netmask is invalid.';
vjs40='IP is class C, netmask is invalid.';
vjs41='Invalid network ip, network ip is duplicate';
vjs42='La mascara de subred introducida es invalida.';
vjs43='Dirección IP no válida, el último número debe estar entre 1 y 254.';
vjs44='Dirección DNS no válida. El primer número debe estar entre 1 y 223';
vjs45='Especificar dirección IP';
vjs46='no es válida, por favor, ¡corrígela primero!'; 
vjs47='%s no es una IP válida que no está en %s de la máscara de subred. ';
dup='Duplicar Administrador';
wc1='WAN > Tipo de conexión';
wcc2='Seleccione su tipo de conexión:';
wcc3='Dinámica';
wcc4='El tipo de conexión Dinámica es la más habitual. Si emplea un módem por cable, entonces dispondrá probablemente de una conexión dinámica. Si tiene un módem por cable o no está seguro de su tipo de conexión, emplee ésta.';
wcc5='Estática';
wcc6='El tipo de conexión de Dirección IP estática es menos común que otros tipos de conexión. Utilice esta selección sólo si su ISP le ha proporcionado una dirección IP que no cambia nunca.';
wcc7='PPPoE';
wcc8='Si emplea un módem DSL o su ISP le ha proporcionado una Nombre de usuario y una Contraseña, entonces su tipo de conexión es PPPoE. Utilice este tipo de conexión.';
wcc9='PPTP';
wcc10='[Sólo para países europeos]. Este tipo de conexión es más habitual es países europeos. Si su ISP le ha indicado específicamente que utilice PPTP y le ha proporcionado la información apropiada para PPTP, utilice esta opción.';
wcc11='Cable Telstra Bigpond/OptusNet';
wcc12='Utilice esta opción sólo para conexiones de cables Bigpond y cables OptusNet.';


wcc12_a='Utilice esta opción sólo para conexiones de cables Bigpond y cables OptusNet.';


wcc13='L2TP';
wcc14='[Israel Only]. This type of connection is most common in Israel. If your ISP has specifically told you that you use L2TP and has supplied you with the proper L2TP information, then use this option.';
wcc15='Multi-PPPoE';
wcc16='[Japan Only] This type of connection is a unique function in Japan which is required for those who subscribe NTT\'s broadband Internet.';
Next='Siguiente';
wds1='WAN > DNS';
wds2='En el caso de que su ISP le haya proporcionado una dirección DNS específica, introdúzcala en esta ventana y haga clic en "Aplicar cambios".';
wds2_1='Si recibiste de tu proveedor ISP una configuración DNS específica, insertala aquí.';
wds3='Automáticamente desde el ISP ';
wds3_1='Automáticamente desde el ISP';
wds4='Dirección DNS';
wds4_1='Dirección DNS primaria';
wds5='Dirección DNS secundaria';
wds5_1='Dirección DNS secundaria';
wds6='DNS = Servidor de nombres de dominio. Un servidor ubicado en Internet que convierte los URL (Vínculos de recursos universales), como por ejemplo www.belkin.com, en direcciones IP. Deberá introducir los ajustes DNS que le ha proporcionado su ISP en caso de no emplear la función de DNS Automático.';
wds6_1='DNS= sistema de nombres de dominio, un servidor en internet que transforma direcciones URL, como por ejemplo www.belkin.com, en direcciones IP.';
wds7='Deberá introducir los ajustes DNS que le ha proporcionado su ISP en caso de no emplear la función de DNS Automático';
wds8='Para hacer cambios en las DNS, vaya primero a los filtros de páginas web y seleccione la opción «Sin filtros».';
wdy1='WAN > Tipo de conexión > IP dinámica';
wdy2='Para introducir los ajustes de su IP Dinámica, introduzca su información a continuación y haga clic en "Aplicar cambios".';
wdy3='Nombre de host';
wdy4='Nombre de host = un nombre que algunos proveedores de servicios de Internet requieren para conectar con su sistema.';
wdy5='Modificar la dirección MAC de WAN';
wdy6='Nombre del host no válido: `~!@#$%^&*()_+[]{}\\|;:\'"<>/?.,';
wmc1='WAN > Dirección MAC';
wmc2='Algunos ISP le requieren que clone (copie) la dirección MAC de la tarjeta de red de su ordenador en el router. Si no está seguro, clone simplemente la dirección MAC del ordenador que se encontraba orginariamente conectado al módem antes de instalar el router. La clonación de la dirección MAC no causará ningún tipo de problemas en su red.';
wmc3='Dirección Mac de WAN';
wmc4='Clonar la dirección MAC del ordenador';
wmc5='Clonar';
wmc6='La dirección MAC de WAN no puede ser la misma que la dirección MAC de LAN. Seleccione otro. ';
wdd1='Firewall > DDNS';
wdd2='El DNS dinámico le permite proporcionar a los usuarios de Internet un nombre de dominio fijo (en lugar de una dirección IP, que puede cambiar periódicamente), permitiendo el acceso a su router y las aplicaciones configuradas en los servidores virtuales de su router, desde diversas ubicaciones de Internet sin necesidad de conocer su dirección IP actual. Su Router inalámbrico es compatible con el DNS dinámico a través de DynDNS.org (<A href="http://www.dyndns.org/" ><B>http://www.dyndns.org</B></A>). Debe crear una cuenta de usuario antes de utilizar este servicio.';
wdd3='Servicio DDNS';
wdd4='Estado DDNS';
wdd5='Sitio web';
wdd6='Nombre de usuario';
wdd7='Contraseña';
wdd8='Nombre de dominio';
wdd9='El servicio DDNS no está seleccionado.\n';
wdd10='El servicio DDNS no está seleccionado y se perderás todos los datos en la página. ¿Desea continuar?';
wm1='Internet/WAN';
WAN='Internet WAN';
wm2='La pestaña Internet/WAN es donde configurará su router para conectar con su proveedor de servicios de Internet. El router es capaz de conectarse a prácticamente cualquier sistema de los ISP (proveedores de servicios de Internet) siempre que hayan sido configurados correctamente los ajustes del router para su tipo de conexión al ISP. Para configurar el router para la conexión con su ISP, haga clic en "Tipo de conexión" en la pestaña Internet/WAN de la parte izquierda de la pantalla.';
wm3='Tipos de conexión admitidos: ';
wm4='Dinámica';
wm4b='incluye los ISP que requieren un nombre de host y los ISP que establecen la conexión con una dirección MAC específica. ';
wm5='Dirección IP estática';
wm5b='el router admite una conexión con un ISP que asigna una dirección IP estática. ';
wm6='PPPoE';
wm6b='el router admite un tipo de conexión dinámica que requiere un acceso de PPPoE para la autenticación.';
wm7='PPTP';
wm7b='Sólo para usuarios europeos. El router permite conectarse con proveedores de internet europeos que usan el protocolo PPTP. ';
wm10='L2TP';
wm10b='Para uso único con aquellos ISP que requieran un metodo de conexión L2TP.';
wpe1='WAN > Tipo de conexión > PPPoE';
wpe2='Para introducir los ajustes de su PPPoE, introduzca su información a continuación y haga clic en "Aplicar cambios".';
wpe3='Nombre de usuario';
wpe4='Volver a introducir contraseña';
wpe5='Nombre de servicio (Opcional)';
wpe6='MTU (500-1500)';
wpe7='No realice cambios en el ajuste MTU a menos que su ISP requiera específicamente un ajuste diferente de 1454.';
wpe8='Desconectar después de';
wpe9=' minutos de inexistencia de actividad. ';
idlerangerro='Los números que ha introducido para el tiempo de inactividad no son válidos. El número debe ser un entero entre 1 y 99.';
wpe10='Carácter no válido: <>&';
wptid='Carácter no válido: "';
pm='Su servicio no ha podido verificar la contraseña que ha introducido. Confirme que haya introducido su contraseña correctamente.';
pm_1='Las nuevas contraseñas introducidas no coinciden. Vuelve a intentarlo de nuevo.';
wpe11='Valor MTU no válido';
wpe12='Introduzca su nombre de usuario';

	

wmpe1='WAN > Connection Type > Multi-PPPoE';
wmpe2='To enter your Multi-PPPoE settings, type in your information below and click "Apply changes".';
wmpe3='Description';
wmpe4='PPPoE Account';
wmpe5='Retype Password';
wmpe6='Service Name (Optional)';
wmpe7='MTU (1440-1454)';
wmpe7_1='MTU no válido, deberá estar entre 1440..0.1454';
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
wpp3='Contraseña';
wpp4='Volver a introducir contraseña';
wpp6='Dirección IP';
wpp7='Máscara de subred';
wpp14='Introduzca de nuevo su contraseña';
wpp15='Introduzca su contraseña';
wpp16='WAN > Connection Type > L2TP';
wpp17='L2TP Account';
wpp18='L2TP Password';
wpp19='Please enter your L2TP Account';
wpp20='IP asignado por el ISP';
wpp21='YES';
wpp22='NO';
wpp23='Asignación de dirección IP';
wpp24='Utilice la dirección IP estática';
wpp25='Asignado dinámicamente por el ISP';
wppa1='WAN > Tipo de conexión > PPTP';
wppa2='Cuenta PPTP';
wppa3='Contraseña PPTP';
wppa4='Volver a introducir contraseña';
wppa5='Nombre de host';
wppa6='Dirección IP de servicio';
wppa7='Mi dirección IP';
wppa8='Mi máscara de subred';
wppa9='ID de conexión (opcional)';
wppa10='Desconectar después de';
wppa11=' minutos de inexistencia de actividad.';
wppa12='Haga clic aquí para introducir sus ajustes DNS ';
wppa13='Introduzca su cuenta PPTP';
wppa14='Introduzca de nuevo su contraseña';
wppa15='Introduzca su contraseña';
wppa16='Dirección IP';
wppa17='Dirección IP de servicio';
wppa18='Nomber del servicio invalido.';
ws1='WAN > Tipo de conexión > IP estática';
ws2='Para introducir los ajustes de su IP estática, introduzca su información a continuación y haga clic en "Aplicar cambios".';
ws3='Dirección IP';
ws4='Máscara de subred';
ws5='Dirección de puerta de enlace del ISP';
ws6='¿Suministra mi ISP más de una dirección IP estática';
ws7='Haga clic aquí para introducir sus ajustes DNS ';
dm='Bien no ha introducido todos los números DNS, o bien alguno de los números introducidos es incorrecto. Los números deberán ser o encontrarse entre 0 y 255.';
sm='Los números de máscara de subred que ha introducido no son válidos.';
sm_1='La máscara de subred introducida no es válida.';
ws8='Por favor, introduzca y valide sus ajustes de dirección DNS en la siguiente pantalla';
ws9='IP Address is same with Alias IP Address, please change one or remove one!';
ws10='Puerta de enlace predeterminada';
wsc1='Dirección IP con alias';
im='La lista de direcciones IP con alias está llena. No es posible crear reglas adicionales.';
wt1 = 'IMPORTANTE';
wt2 = 'Al hacer clic sobre "Aplicar cambios" reiniciará el router. Una vez se haya reiniciado el router deberá hacer lo siguiente:';
wt3 = '1) Desconecte el cable de alimentación tanto del módem por cable como del router de Belkin';
wt4 = '2) Vuelva a conectar el cable de alimentación al módem por cable y espere hasta que las luces del módem dejen de parpadear';
wt5 = '3) Vuelva a conectar el cable de alimentación al router de Belkin';
wt6 = 'Para confirmar que se ha conectado correctamente a Internet, abra un navegador de Internet como Internet Explorer, Firefox o Safari y asegúrese de que puede navegar por las páginas.';
Logout='Salir';
wla1='Inalámbrico > Utilizar como punto de acceso';
wlad1='El router puede ser configurado para actuar estrictamente como un punto de acceso, anulando las funciones de enrutamiento y firewall. Para que esto suceda, seleccione "Activar" e introduzca la dirección IP que desee que tenga el punto de acceso.';
wlad2='Activar / Desactivar';
wlae1='Especificar dirección IP';
wlae2='Máscara de subred';
wlae3='Introduzca de forma manual la dirección Lan en el recuadro de entrada de la Dirección de la barra de estado de su navegador';
wlc1='Inalámbrico > Canal y SSID';
wlc2='Para efectuar cambios en los ajustes inalámbricos del router, realice los cambios aquí. Haga clic en "Aplicar cambios" para guardar los ajustes.';
wlc3='Canal inalámbrico';
wlc4='SSID';
wlcwch='Canal de ampliación';
wlc5='Modo inalámbrico';
wlcgb='802.11b+g';
wlcg='802.11g';
wlcb='802.11b';
wlc9='Emitir SSID';
wlc10='Modo Turbo';
wlc11="Al activar el modo Turbo se permite al router o punto de acceso utilizar la función de envío de ráfagas de tramas, para obtener el máximo rendimiento del router o punto de acceso con clientes 802.11g. El modo Turbo funcionará con clientes 802.11g que admitan el modo Turbo. Los clientes 802.11g de Belkin que empleen el último controlador admitirán el modo Turbo. Los clientes que no admitan el modo Turbo funcionarán normalmente cuando esté activado el modo Turbo.";
wlc12='Modo protegido';
wlc13="NOTA: En la mayoría de las situaciones, el mejor rendimiento se alcanza con el modo protegido DESACTIVADO. Si está trabajando en un entorno de tráfico 802.11b INTENSO o con interferencias, el mejor rendimiento se conseguirá con el modo protegido ACTIVADO.";
wlc14='Utilizar como Punto de acceso';
wlc15='Cuando emplee el router como punto de acceso, deberá especificar una dirección IP para el punto de acceso. Esta dirección IP deberá encontrarse dentro de la misma serie que la red a la que vaya a conectarlo. Para acceder de nuevo a la interfaz de configuración avanzada del router, introduzca la dirección IP en el navegador de Internet e inicie una sesión.';
wlc16='Inalámbrico > EWC Setting';
wlc17='Ancho de banda';
wlc18='Control Sideband';
wlc19='NPHY Rate';
wlc20='20MHz';
wlc21='40MHz only';
wlc22='20/40MHz';
wlc22a='20/40/80MHz';
wlc23='Cómo utilizar el conmutador en modo inalámbrico Este conmutador le permite fijar el router en los modos inalámbricos. Existen cuatro modos. <br>1) Apagado<br>Este modo desactivará el punto de acceso del router, por lo que no se podrá unir a la red ningún dispositivo inalámbrico. Desactivar la función inalámbrica de su router es una excelente manera de proteger su red cuando se va a ausentar de su casa durante un largo periodo de tiempo o si no desea utilizar la capacidad inalámbrica del router durante un tiempo determinado.<br>2) Sólo 802.11g<br>Si establece este modo para el router, sólo permitirá a los dispositivos compatibles con 802.11g unirse a la red, excluyendo a los dispositivos 802.11b, más lentos.<br> 3) Sólo 802.11n<br>Si establece este modo para el router, sólo permitirá a los dispositivos compatibles con 802.11n unirse a la red, excluyendo a los dispositivos 802.11b y 802.11g, más lentos.<br>  4) 802.11n y 802.11g y 802.11b<br>Si establece este modo para el router, permitirá a los dispositivos compatibles con 802.11n, 802.11g y 802.11b unirse a la red. ';
wlcoff='Desactivado';
wlcngb1='802.11b & 802.11g & 1x1 802.11n';
wlcn1='1x1 802.11n';
wlcngb2='802.11b & 802.11g & 802.11n';
wlcn2='802.11n';
wlcan='802.11a & 802.11n';
wlca='802.11a';
wlcgn='802.11g+n';
wlcnac='802.11n & 802.11ac';
wlcanac='802.11a & 802.11n & 802.11ac';
wlc24='Hay cuatro modos en la banda de 5 GHz.';
wlc25='1) 802.11a sólo <br>Configuración del router a este modo sólo permitirá 802.11a dispositivos compatibles para unirse a la red. <br> 2) 802.11a & 802.11n <br>Configuración del router para de este modo permitirá 802.11ay 802.11n dispositivos compatibles para unirse a la red. <br> 3) 802.11n sólo <br> Configuración del router a este modo, sólo se admitirán dispositivos compatibles con 802.11n para unirse, manteniendo fuera más lento dispositivos 802.11a. <br> 4) Desactivado <br> Este modo se apagará el router Wi-Fi, así que no hay dispositivos inalámbricos pueden unirse a la red. Desactivar la función inalámbrica del router es una gran manera de asegurar su red cuando usted está ausente de casa durante un largo período de tiempo, o no desea utilizar la función inalámbrica del router en un momento determinado.';
wlc26='Al ocultar tu nombre de usuario de red se desactivará la WPS.';
wlc27='Al cambiar tu modo de seguridad se desactivará la WPS.';
wlc28='La WPS está desactivada debido a tu <A href=%s><B>tipo de seguridad de red inalámbrica</B></A>.';
wlc29='La WPS está desactivada porque has ocultado tu nombre de usuario de red (SSID).';
wlc30='La WPS está desactivada porque has ocultado tu nombre de usuario de red (SSID), y debido a tu <A href=%s><B>tipo de seguridad de red inalámbrica</B></A>.';
wlc31='Al activar la WPS tu nombre de usuario de red inalámbrica (SSID) se hará público.';
wlc32='Al activar la WPS tu modo de seguridad se modificará de WPA a WPA2. Tu contraseña actual de usuario de red funcionará sin problemas. ';
wlc33='Al activar la WPS tu nombre de usuario de red inalámbrica (SSID) se hará público y tu tipo de seguridad se modificará de WPA a WPA 2. Tu contraseña actual de usuario de red funcionará sin problemas. ';
wlc34='Antes de activar la WPS, necesitas cambiar tu tipo de seguridad de WPA a WPA 2 y seleccionar una nueva contraseña de red inalámbrica.';
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

wlm1='Inalámbrico';
wlm2='En esta pestaña podrá regular los ajustes de la sección "Inalámbrico" del router.';
wlm3='Canal y SSID';
wlm4='Realice las adaptaciones del canal inalámbrico y del SSID (nombre de red inalámbrica)';
wlm5='Seguridad';
wlm6='Modifique los ajustes de seguridad inalámbrica como ajustes WPA o ajustes WEP. ';
wlm7='Utilizar como Punto de acceso';
wlm8='Establecer el modo de funcionamiento del router en modo PA ';
wlm9='Especificar dirección IP';
wlm10='Especificar dirección IP del PA.';
wlm11='Control de direcciones MAC';
wlm12='Establezca una lista de clientes a los que desee permitir o denegar el acceso a la red inalámbrica.';
wle1='Inalámbrico > Seguridad';
wle2='Modo de seguridad';
wle2a='Desactivado';
wle2b='WPA/WPA2-Personal(PSK)';
wle2c='WEP de 128 bits';
wle2d='WEP de 64 bits';
wle3='Autenticación';
wle3a='WPA-PSK';
wle3b='WPA2-PSK';
wle3c='WPA-PSK + WPA2-PSK';
wle7="Aquí podrá establecer sus ajustes de seguridad inalámbrica o encriptación. Se deberá activar la seguridad para garantizar la máxima seguridad inalámbrica. El WPA (Acceso inalámbrico protegido) proporciona cambios dinámicos de clave y constituye la mejor solución de seguridad. En entorno inalámbricos, donde no todos los dispositivos admiten WPA, se deberá emplear WEP (Privacidad equivalente a la del cable).";
bit64WEP='64bit WEP';
bit128WEP='128bit WEP';
WPAPSK='WPA/WPA2-Personal(PSK)';
wps1='Acceso Protegido Wi-Fi (WPS)';
wps2='Inalámbrico > Acceso Protegido Wi-Fi(WPS)';
wps3='Por favor, configure la seguridad inalámbrica';
wps4='La instalación protegida Wi-Fi (WPS) es el método estándar del sector que simplifica la instalación de seguridad y de gestión de las redes Wi-Fi. Ahora puede instalar y conectarse fácilmente a la red 802.11 WPA mediante dispositivos WPS certificados utilizando o bien el método del PIN (Personal Information Number) o bien el del PBC (Push Buttoin Configuration). Los dispositivos legados sin WPS pueden añadirse a la red mediante el método de configuración tradicional y manual.';
wps5='1) Método del número de información personal (PIN)';
wps6='Mantenga pulsado el botón PBC de su enrutador durante tres segunod o pinche en "Start PBC" (iniciar PBC). Entonces inicie el método PBC en el dispositivo que quiera conectar al router a los dos minutos.';
wps7='Introducir el PIN del dispositivo cliente';
wps8='Registrarse';
wps9='Si está disponible un registrador externo, también puede introducir el PIN del enrutador en el registrador externo. Para cambiar el PIN del router, pinche en "Generate new PIN" (generar un PIN nuevo) o en "Restore Default PIN" (restaurar el PIN predeterminado) para reiniciar el PIN con los ajustes predeterminados';
wps10='PIN del router:';
wps11='Generar un PIN nuevo';
wps12='Restaurar el PIN predeterminado';
wps13='2) Método de configuración PBC';
wps14='Mantenga pulsado el botón PBC de su Router durante tres segundos o clique sobre "Start PBC" (iniciar PBC). Tras dos minutos, inicie el método PBC en el dispositivo que quiera conectar al router.';
wps15='Iniciar PBC';
wps16='3) Método de configuración manual';
wps17_1='Para los dispositivos clientes sin WPS, configure el dispositivo de forma manual con los siguientes ajustes:';
wps17='En los clientes sin WPS, ejecutar el asistente de seguridad de Belkin desde el CD o implementar la siguiente configuración manual:';
wps18='Router Configuration:';
wps19='Configurado';
wps20='Nombre de la red (SSID):';
wps21='No configurado';
wps22='Autenticación de red:';
wps23='WPA+WPA2-Personal (PSK)';
wps24='Encriptación de datos:';
wps25='TKIP+AES';
wps26='Clave de red (PSK):';
wps27='Clave de red (WEP):';
wps28='AUTO';
wps28_1='NADA';
wps29='WPS';
wps30='La instalación protegida Wi-Fi (WPS) es el método estándar del sector que simplifica la instalación de seguridad y de gestión de las redes Wi-Fi.';
wps31='Seguridad inalámbrica:';
wps32='WPS boton hardware';
wps33='Desbloquear PIN del router';
wps_msg1='Mensaje WPS';
wps_msg2='PIN no válido El dispositivo PIN contiene ocho dígitos numéricos. Verifique y pruebe de nuevo.';
wps_msg3='Error en la suma de control del PIN Verifique e introduzca un PIN válido.';
wps_msg4='Iniciándose: inicie WPS en el dispositivo cliente en dos minutos';
wps_msg5='En progreso: por favor, espere...';
wps_msg6='Error detectado: pruebe de nuevo.';
wps_msg7='La conexión ha tenido éxito: el dispositivo está conectado al router';
wps_msg8='Sesión superpuesta detectada. Por favor espere 60 segundos antes de comenzar el proceso otra vez o refierase a su software especifico para conectarse manualmente a su red.';
wps_msg9='Límite de tiempo: ningún cliente se conecta al router';
wps_msg10='PIN del router inhabilitado tras un número excesivo de intentos';


wwmm1='QoS Configuration';
wwmm2='Configuración de QoS (Calidad de servicio)';
wwmm3='QoS establece la prioridad entre los datos importantes de su red como el contenido multimedia y de Voz por IP (VoIP) para que otros datos que se están enviando por la red no interfieran. Basada en 802.11e, esta función se puede activar o desactivar y puede elegir el modo de reconocimiento que quiera utilizar. Si quiere transmitir contenido multimedia o utilizar VoIP en su red, la función QoS debe activarse.';
wwmm4='802.11e/WMM QoS';
wle8='(13 pares de dígitos hexadecimales)';
wle9='NOTA: ';
wle10='Para generar automáticamente pares hexadecimales utilizando una Frase de paso, seleccione el recuadro de la izquierda e introduzca en él la frase de paso.';
PP='Frase de paso';
generate='generar';
errm='Introduzca una frase de paso';
keym='La clave no está completa';
wle11='Clave 1';
wle12='Clave 2';
wle13='Clave 3';
wle14='Clave 4';
wle15='(pares de dígitos hexadecimales)';
keym1=' no está completa';
keym2=' no es válida, ¡corríjala primero!';
wwp2='Clave precompartida (PSK)';
wwp3='WPA-PSK (sin servidor)';
wwp4='Acceso inalámbrico protegido con una clave precompartida: La clave es una contraseña, con forma de palabra, frase o serie de números y letras. La clave deberá tener entre 8 y 63 caracteres de longitud, puede incluir espacios y símbolos, o sólo 64 dígitos hexadecimales (de 0 a 9 y de A a F). Cada cliente que se conecte a la red deberá emplear la misma clave (clave precompartida).';
wwp5='Ocultar PSK';
wls_sec_msg='Se recomienda usar WPA/WPA2 cuando WPS esta inhabilitado.';
wguest2='Guest Settings';
wguest3='Acceso para invitados';
wpskerr1='La longitud de la clave precompartida deberá ser de 8 a 63 o 64 hex.';
wpskerr2='La clave deberá tener entre 8 y 63 caracteres de longitud, puede incluir espacios y símbolos, o sólo 64 dígitos hexadecimales (de 0 a 9 y de A a F)!';
wpskerr4='You must input the Guest Pre-shared Key (PSK)';
wpskerr7='La clave de invitado debe ser de 8 caracteres';
wpskerr8='La clave de invitado no debe ser la misma que la clave de red';
wlguest1='La SSID no debe ser la misma que la SSID de invitado';
wlguest2='La SSID de invitado no debe ser igual a la SSID';
ww3='Técnica de encriptación';
wlmc1='Inalámbrico > Control de direcciones MAC';
wlmc2='El Control de direcciones MAC es la capacidad de establecer una lista de clientes a los que desee permitir o denegar el acceso a la red inalámbrica.';
Allow='Permitir';
Deny='Denegar';
wlmc7='Seleccione primero si desea permitir o denegar el acceso a lista de direcciones MAC';
wlmc6='No puede introducir más de 32 direcciones MAC';
wlmc3='Dirección MAC no válida ';
wlmc4='¡Corríjala primero!';
wlmc5='La dirección MAC correcta deberá ser xx:xx:xx:xx:xx:xx en donde x está entre 0-9 y a-f!';
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
ENTRY_FULL	='Todas las entradas están llenas. Elimine algunas entradas y pruebe de nuevo.';
CLEAR_CONFIRM	='¿Desea borrar la entrada? ';
CLEAR_ALL_CONFIRM ='¿Desea borrar todas las entradas? ';
g1='La "Dirección IP" es la dirección IP interna del router. Para acceder a la interfaz de configuración avanzadaintroduzca esta dirección IP en la barra de direcciones de su navegador. Esta dirección puede modificarse si es necesario. Para modificar la dirección IP, introduzca la nueva dirección IP y haga clic en "AplicarCambios". La dirección IP que elija debería ser una IP no enrutable. Ejemplos de dirección no enrutable IP son: ';
g2='192.168.x.x (donde x es cualquier valor entre 0 y 255)<br>';
g3='10.x.x.x (donde x es cualquier valor entre 0 y 255.)<br>';
g4='172.y.x.x (donde y es cualquier valor entre 16 y 31, y x es cualquier valor entre 0 y 255.)<br>';
g5='No es necesario modificar la máscara de subred. Es posible modificar la máscara de subred en caso necesario. Únicamente realice cambios a la máscara de subred si tiene una razón específica para hacerlo.<br>';
g6='DNS es el acrónimo de Servidor de nombres de dominio. Un Servidor de nombres de dominio es un servidor situado en Internet que convierte los URL (Localizador de recursos universales), como www.belkin.com, en direcciones IP . Muchos ISP no precisan que usted introduzca esta información en el router. El recuadro de selección "Automáticamente desde el ISP" deberá encontrarse marcado si su ISP no le ha proporcionado ninguna dirección DNS específica. Si está utilizando un tipo de conexión con IP estática, entonces puede que necesite introducir una dirección DNS específica y una dirección DNS secundaria para que su conexión funcione de forma adecuada. Si su tipo de conexión es dinámica o PPPoE, es probable que no sea necesario introducir ninguna dirección DNS. Para introducir los ajustes de la dirección DNS, retire la marca del recuadro de selección "Automáticamente desde el ISP" e introduzca sus entradas DNS en los espacios correspondientes. Haga clic en "Aplicar cambios" para guardar los ajustes. <br>';
g6a='El servicio DNS dinámico le permite otorgar a una dirección IP dinámica uno de los muchos nombres de host estático que ofrece la lista de dominios de DynDNS.org; de esta manera, podrá acceder a sus ordenadores en red de manera más sencilla desde varias ubicaciones en Internet. DynDNS.org ofrece a la comunidad de Internet este servicio para hasta cinco nombres de host en forma gratuita.<br>El servicio DNSSM dinámico es ideal para una página web personal, un servidor de archivos o para facilitar el acceso a su PC del hogar y los archivos guardados cuando está en el trabajo. Mediante la utilización de este servicio puede estar seguro de que el nombre de host siempre conducirá a su dirección IP, independientemente de cuántas veces su ISP la cambie. Cuando su dirección IP cambia, sus amigos y socios pueden ubicarlo siempre visitando sunombre.dyndns.org.<br><br>Puede registrarse de manera gratuita para obtener su nombre de host DNS dinámico en http://www.dyndns.org.<br><br><b>Configuración del cliente de actualización para DNS dinámico del router</b><br>Debe registrarse en el servicio gratuito de actualización de DynDNS.org antes de poder utilizar esta función. Una vez que se haya registrado, siga las instrucciones que se indican a continuación.<br>1.Introduzca su nombre de usuario de DynDNS.org en el campo "Nombre de usuario" (1).<br>2.Introduzca su contraseña de DynDNS.org en el campo "Contraseña" (2).<br>3.Introduzca el nombre de dominio de DynDNS.org que ha configurado en DynDNS.org en el campo "Nombre de dominio" (3).<br>4.Haga clic en "Actualizar DNS dinámico" para actualizar su dirección IP.<br>Si la dirección IP dinámica que le ha asignado su ISP cambia, el router actualizará automáticamente los servidores de DynDNS.org con la dirección IP nueva. También puede hacer esto de manera manual pulsando el botón "Actualizar DNS dinámico" (4).';
g6b='Uso de DNS dinámico';

g7='La función de servidor DHCP facilita en gran medida la tarea de establecer una red asignando direcciones IP a cada ordenador de la red. El servidor DHCP puede ser desconectado si es necesario. Para desactivar el servidor DHCP será necesario que usted establezca manualmente una dirección IP estática en cada ordenador de su red. El grupo de IP es la serie de las direcciones IP apartadas para la asignación dinámica a los ordenadores de su red. El valor predeterminado es 2-100 (99 ordenadores) y si desea cambiar este número, puede hacerlo introduciendo una primera dirección IP y última dirección IP nuevas y haciendo clic en "Aplicar cambios". <br>';
g7a='Servidor DHCP';
g8='Puede establecer un nombre de dominio local (nombre de red) para su red. No es necesario modificar esta configuración a no ser que tenga una necesidad avanzada específica para hacerlo. Puede dar a la red el nombre que quiera como "MI RED". <br>';
g9='IP dinámica';
g10='Un tipo de conexión dinámica es el tipo de conexión más habitual para módems por cable. Configurar el tipo de conexión como dinámico es suficiente en muchos casos para completar la conexión con su ISP. Algunos tipos de conexión dinámica es posible que requieran un Nombre de host. Puede introducir su Nombre de host en el espacio correspondiente, si le ha sido asignado uno. Su ISP le asignará su Nombre de host. Algunas conexiones dinámicas es posible que requieran la clonación de la dirección MAC del PC que se encontraba originariamente conectado al módem. Para hacerlo, haga clic en el vínculo "Modificar la dirección MAC de WAN" que aparece en la pantalla. El indicador del estado de Internet mostrará el mensaje "Conectado" si su router está configurado correctamente. ';
g11='El tipo de conexión de Dirección IP estática es menos común que otros tipos de conexión. Si su ISP   emplea direccionamiento IP estático, necesitará su Dirección IP, Máscara de subred y Dirección de puerta de enlace del ISP  . Esta información puede obtenerla de su ISP o en la documentación que le envió  su ISP. Introduzca su información y haga clic en "Aplicar cambios". Después de aplicar los cambios,  el indicador de estado de Internet mostrará "Conexión" si su router está configurado correctamente. Si su ISP le asigna más de una dirección IP estática, su router tendrá la capacidad de gestionar  hasta cinco direcciones IP WAN estáticas. Seleccione "Mi ISP suministra más de una dirección IP estática"  e introduzca las demás direcciones.<br><br>';
g12='La mayoría de proveedores de DSL emplean PPPoE como tipo de conexión. Si utiliza un módem DSL para conectarse a Internet, es posible que su ISP emplee PPPoE para darle acceso al servicio. Si dispone de una conexión a Interneten su casa u oficina pequeña que no requiere módem, es posible que también utilice PPPoE. <br><br>Su tipo de conexión es PPPoE si:<br>1) Su ISP le proporcionó un nombre de usuario y contraseña que son necesarios para conectarse a Internet<br>2) Su ISP le proporcionó software como WinPOET, Enternet300 que usted emplea para conectarse a Internet<br>3) Usted debe hacer doble clic en un icono de escritorio distinto del de su navegador para acceder a Internet<br><br>Para configurar el router de forma que utilice PPPoE, introduzca su Nombre de usuario y Contraseña en los espacios correspondientes. Si no dispone de Nombre de servicio o no lo conoce, deje en blanco el campo Nombre de servicio. Una vez introducida la información, haga clic en "Aplicar cambios". Después de aplicar los cambios, el indicador del estado de Internet mostrará el mensaje "Conectado" si su router está configurado correctamente. Para obtener más detalles acerca de cómo configurar su router para utilizar PPPoE, consulte el Manual del usuario.<br>';
gmpoe1='WAN Type is MultiSession PPPoE. This WAN type supports multiple PPPoE sessions. With properly configuration of each session, this router can transmit the packets through the correct PPPoE connection. Besides, PPPoE Session 1 will be treated as the master session. The packets which are not matched to the other PPPoE Sessions will be directed to the master session. If the WAN type is not correct, change it!';
gmpoe2='To make the router work properly under the multiple PPPoE WAN type, user has to define the trigger rules of each enabled PPPoE session. So that, once the PPPoE connections are successfully established, the packets can be treated well according to the trigger rules to find out the proper session and transmit the packets.There are two kinds of configuration methologies to define a trigger rule for each PPPoE session.By IP : Please specify the IP address, Subnet Mask and PPPoE Session ID that will be triggered.By Domain Name : Please specify the Domain Name and the PPPoE Session ID that will be triggered.Each rule will take effect if the enable check box is checked.';
g13='Algunos ISP requieren una conexión que emplee el protocolo PPTP. Este protocolo establece una conexión directa con el sistema del ISP. Introduzca la información proporcionada por su ISP en el espacio correspondiente. Cuando haya terminado, haga clic en "Aplicar cambios". Después de aplicar los cambios, el indicador de estado de Internet mostrará "Conectado" si su router ha sido configurado correctamente. ';

g14a='Telstra BigPond';
g14b='Después de aplicar los cambios, el indicador de estado de Internet mostrará "Conectado" si su router ha sido configurado correctamente.';

g15='Ajuste MTU';
g16='El ajuste MTU no debería ser modificado nunca a no ser que su ISP le proporcione un ajuste MTU específico. Si cambia el ajuste MTU puede tener problemas con su conexión a Internet, incluso desconexión a Internet, acceso lento a Internet y problemas para que las aplicaciones a Internet funcionen correctamente. ';
g17='Desconectar después de X...';
g18='La función de Desconexión se utiliza para desconectar automáticamente el router de su ISP cuando no existe actividad durante un determinado periodo de tiempo. Por ejemplo, al colocar una marca junto a esta opción e introducir 5 en el campo para los minutos, el router se desconectará de Internet después de 5 minutos sin actividad en Internet. Esta opción deberá utilizarse en el caso de que usted abone sus servicios de Internet por minutos. ';
g19='MAC es el acrónimo de Controlador de acceso a los medios. Todos los componentes de red, incluidos adaptadores, tarjetas y routers, disponen de un "número de serie" exclusivo llamado dirección MAC. Es posible que su ISP registre la dirección MAC del adaptador de su ordenador y que sólo permita a ese ordenador en particular la conexión al servicio de Internet. Cuando instale el router, la dirección MAC del mismo será "examinada" por el ISP y esto puede provocar que la conexión no funcione. Belkin incorpora la posibilidad de clonar (copiar) la dirección MAC del ordenador al router. Esta dirección MAC será considerada por el sistema del ISP como la dirección MAC original y le permitirá que la conexión funcione. Si no está seguro de si su ISP necesita ver la dirección MAC original, clone simplemente la dirección MAC del ordenador que se encontraba originariamente conectado al módem. La clonación de la dirección no causará ningún tipo de problemas en su red. ';
g20='Para modificar el canal de funcionamiento del router, seleccione el canal deseado del menú desplegable y seleccione su canal. Haga clic en "Aplicar cambios" para guardar el ajuste. También puede cambiar el SSID. El SSID es el equivalente al nombre de la red inalámbrica. Puede llamar al SSID como desee. Si existen otras redes inalámbricas en su área, deberá dar a su red inalámbrica un nombre exclusivo. El nombre predeterminado es belkin.xxx. Para modificar el SSID, haga clic en el recuadro de SSID e introduzca un nuevo nombre. Haga clic en "Aplicar cambios" para realizar el cambio.';
g21='Es posible lograr que su red inalámbrica sea prácticamente invisible. Al desactivar la emisión del SSID, su red no aparecerá en un estudio del sitio. La funcionalidad de estudio del sitio está hoy disponible en muchos de los adaptadores de red inalámbricos del mercado. Buscará en el "aire" cualquier red disponible y permitirá que el ordenador seleccione la red desde el estudio del sitio. Si desactiva la la emisión del SSID contribuirá a aumentar la seguridad. ';
g25='Servidores virtuales';
g26='Esta función le permitirá dirigir llamadas (Internet) externas para servicios como un servidor web (puerto 80), servidor FTP (puerto 21), y otras aplicaciones a través de su router hasta su red interna. Debido a que sus ordenadores internos están protegidos por un firewall, no pueden acceder a ellos otras máquinas a través de Internet, porque no pueden ser \'vistos\'. Si necesita configurar la función de Servidor virtual para una aplicación determinada, puede disponer de la lista de de aplicaciones comunes proporcionada. Si su aplicación no se encuentra en la lista, será preciso que se ponga en contacto con el vendedor de la aplicación para conocer la configuración de puertos que necesita. Para seleccionar un elemento de la lista, seleccione su aplicación en la lista desplegable. Seleccione la fila de la que desea copiar los ajustes en la lista desplegable que hay junto a la fila, a continuación haga clic en "Introducir". Los ajustes serán transferidos a la fila seleccionada que especifique. Haga clic en "Aplicar cambios" para guardar los ajustes de esa aplicación. Para introducir los ajustes de forma manual, introduzca la dirección IP en el espacio correspondiente para la máquina interna (servidor), los puertos que se deben pasar (utilice una coma entre los distintos puertos), seleccione el tipo de puerto (TCP o UDP), y haga clic en "Aplicar cambios". Únicamente podrá pasar un puerto por cada dirección IP interna. Abrir puertos en su firewall puede significar un riesgo para la seguridad de la red. Puede activar y desactivar los ajustes con gran rapidez. Se recomienda desactivar los ajustes cuando no esté utilizando una aplicación específica. ';

g27='Filtros IP de clientes';
g28='El router puede ser configurado para restringir el acceso a Internet, al correo electrónico o a otros servicios de red en determinados días y horas. Puede establecerse una restricción para un ordenador, un nivel de ordenadores o varios ordenadores. Para restringir el acceso a Internet a un único ordenador, introduzca la dirección IP del ordenador al que desea restringir el acceso en los campos de IP. A continuación, introduzca 80 y 80 en los campos de Puerto. Seleccione TCP. Seleccione Bloquear. También puede seleccionar Siempre para bloquear el acceso de forma permanente. Seleccione el día de comienzo en la parte superior, la hora de comienzo en la parte superior, el día de finalización en la parte inferior y la hora de finalización en la parte inferior. Haga clic en "Aplicar cambios". A partir de ahora, el ordenador con la dirección IP que ha especificado tendrá bloqueado el acceso en los momentos que ha fijado. Nota: asegúrese de haber seleccionado la zona horaria correcta en Utilidades> Ajustes del sistema> Zona horaria.';
g28_1='El router puede ser configurado para restringir el acceso a Internet, al e-mail o a otros servicios de red en determinados días y horas. Puede establecerse una restricción para un ordenador, un tipo de ordenadores o varios ordenadores. Para hace uso de esta función, haga clic en "Añadir".';
g29='Filtrado de direcciones MAC';
g30='El filtro de direcciones MAC es una potente función de seguridad que permite especificar qué ordenadores pueden acceder a la red. Cualquier ordenador que trate de acceder a la red y no esté especificado en la lista de filtrado no obtendrá permiso para acceder. Cuando se activa esta función, hay que introducir la dirección MAC de cada cliente de la red para permitirle el acceso a la misma. Para activar esta función, seleccionar "Activar filtrado de direcciones MAC".  A continuación, introducir la dirección MAC de cada ordenador y hacer clic en "Añadir". Hacer clic en "Aplicar cambios" para guardar los ajustes. Para borrar una dirección MAC de la lista, basta con hacer clic en "Borrar" junto a la dirección MAC que se desea borrar. Hacer clic en "Aplicar cambios" para guardar los ajustes. Nota: no se puede borrar la dirección MAC del ordenador que se utiliza para acceder a las funciones administrativas del Router. (El ordenador que se está usando ahora mismo). ';

g31='La característica DMZ le permite especificar un ordenador de su red para colocarlo fuera del firewall NAT. Esto puede ser necesario en el caso de que la propiedad NAT esté causando problemas con una aplicación como, por ejemplo, una aplicación de juegos o de videoconferencia. Utilice esta característica de forma temporal. <font class="redBold">El ordenador que se encuentra en la DMZ no está protegido contra los ataques de piratas informáticos.</font> Para situar un ordenador en la DMZ, introduzca los dígitos finales de su dirección IP en el campo IP y seleccione "Activar". Haga clic en "Aplicar cambios" para que se efectúe el cambio. Si está utilizando múltiples direcciones IP estáticas de WAN, será posible seleccionar a qué dirección IP de WAN será dirigido el host de DMZ. Introduzca la dirección IP de WAN a la que desee dirigir el host de DMZ, introduzca los dos últimos dígitos de la dirección IP del del ordenador host de DMZ, seleccione "Activar" y haga clic en "Aplicar cambios". ';
	
g32='Bloquear ping ICMP';
g33='Los piratas informáticos utilizan lo que se conoce como "pinging" (revisar actividad) para encontrar víctimas potenciales en Internet. Al revisar la actividad de una dirección IP específica y recibir una respuesta de la dirección IP el pirata informático puede decidirse a comprobar si existe algo de interés. El Router puede ser configurado de forma que no responda a los intentos de ping ICMP provenientes del exterior. Esto eleva el nivel de seguridad de su router. Para desactivar la respuesta al ping, seleccione "Bloquear ping ICMP" y haga clic en "Aplicar cambios". El router no responderá a ningún ping ICMP.  ';
g34='Contraseña de administrador';
g35='El router que se le ha suministrado viene SIN contraseña. Si desea añadir una contraseña para aumentar la seguridad, puede establecerla aquí. Guarde su contraseña en un lugar seguro, ya que la necesitará si tiene que acceder al router en el futuro. También se recomienda que establezca una contraseña si va a utilizar la característica de gestión a distancia de este router. ';
g36='Hora y Zona horaria';
g37='El router se mantiene en hora conectándose a un servidor SNTP (Simple Network Time Protocol, protocolo horario de red simple). Esto permite al router sincronizar el reloj del sistema con Internet. El reloj sincronizado en el router se utiliza para grabar el registro de seguridad y controlar el filtro de clientes. Hay que seleccionar la zona horaria en la que se reside. Si en esta zona se realiza el cambio de hora según el horario de verano, se debe marcar la casilla "Horario de verano". Puede que el reloj del sistema no se actualice de forma inmediata. El router necesitará al menos 15 minutos para conectar con los servidores de hora en Internet y obtener una respuesta. No se puede cambiar la hora del reloj directamente. ';
g38='Gestión a distancia';
g39='Antes de activar esta función,<font class="plaintext_bold"> ASEGÚRESE DE HABER ESTABLECIDO LA CONTRASEÑA DEL ADMINISTRADOR. </font>La gestión a distancia le permite efectuar cambios en los ajustes de su router desde cualquier parte a través de Internet. Existen dos métodos de gestionar el router a distancia. El primer método consiste en permitir el acceso al router desde cualquier parte en Internet seleccionando "Cualquier dirección IP puede gestionar el router a distancia". Al introducir su dirección IP de WAN desde cualquier ordenador en Internet, aparecerá una ventana de acceso en la que deberá introducir la contraseña de su router. El segundo método consiste en permitir la gestión a distancia del router únicamente a una dirección IP específica. Este método es más seguro, pero menos cómodo. Para utilizar este método, introduzca la dirección IP desde la que vaya a acceder al al router en el espacio previsto y seleccione "Solo esta dirección IP puede gestionar el router a distancia". Antes de activar esta función, se RECOMIENDA ENCARECIDAMENTE que establezca su contraseña de administrador. Si deja la contraseña vacía, dejará expuesto su router a posibles intrusiones. ';
g40='Activación de NAT';
g42='UPnP (Plug-and-play universal) es una tecnología que ofrece un funcionamiento perfecto de las opciones de mensajes de voz mensajes de vídeo, juegos y otras aplicaciones compatibles con UPnP. Algunas aplicaciones requieren que se configure el firewall del router de forma específica para que puedan funcionar correctamente. Normalmente se requiere abrir los puertos TCP y UDP y en algunos casos establecer puertos de activación. Una aplicación compatible con UPnP tiene la capacidad de comunicarse con el router, básicamente "indicando" al router de qué forma necesita que se configure el firewall. El router que se le ha suministrado viene con la función UPnP desactivada. Si está utilizando cualquier aplicación compatible con UPnP, y desea aprovechar las ventajas de las funcionalidades UPnP, puede activar esta opción UPnP. Simplemente seleccione "Activar" en la sección "Activar UPnP" de la página de Utilidades. Haga clic en "Aplicar cambios" para guardar el cambio.  ';
g43='Notificación automática de actualización del firmware';
g44='El router tiene la capacidad incorporada de buscar automáticamente una nueva versión del firmware y de informarle de que existe una nueva versión disponible. Cuando acceda a la interfaz avanzada del router, este efectuará una búsqueda para comprobar si existe una nueva versión del firmware disponible. Si existe un nuevo firmware disponible, aparecerá una notificación. Puede optar por descargar la nueva versión o por ignorar el mensaje. El router se suministra con esta la función desactivada. Si desea activarla, seleccione "Activar" y haga clic en "Aplicar cambios".  ';
g45='Seguridad inalámbrica';

g46='El cifrado de datos ayuda a mantener la red segura. Sólo puede seleccionarse un tipo de seguridad a la vez. Por lo tanto, se debe seleccionar un modo compatible con todos los dispositivos de red que haya en la red inalámbrica. Este producto de Belkin cuenta con 4 modos de seguridad:<br><br>1) Desactivado. En este modo no se activa ningún cifrado. Las redes abiertas en las que cualquier usuario es bienvenido a veces prefieren no activar la seguridad. <br><br>2) WPA/WPA2-Personal(PSK)  (Wireless protected Access) es una técnica de seguridad basada en estándares recientes, en la que cada paquete de información se cifra con un código o clave diferentes. Como la clave está cambiando constantemente, el WPA es muy seguro. El WPA-PSK se dirige a los usuarios domésticos y de oficinas pequeñas que no tienen un servidor. La clave de cifrado PSK se genera automáticamente a partir de una cadena de caracteres o de una frase de paso. Obviamente, el mayor riesgo para la seguridad en WPA PSK es que alguien descubra la frase de paso. <br><br>a. TKIP frente a AES. La configuración de WPA requiere que el usuario elija entre cifrar utilizando TKIP o AES. El estándar WPA especifica TKIP, que es el valor predeterminado. Además, TKIP debería proporcionar mejor compatibilidad entre los productos inalámbricos de los diferentes proveedores ya que muchos productos inalámbricos nunca incorporan AES. AES es una nueva técnica de cifrado basada en el estándar 802.11i. Los nuevos estándares WPA posiblemente incorporen AES. A pesar de que AES no es tan común, algunos usuarios lo prefieren. En cualquier caso, todos los dispositivos de una misma red deben utilizar la misma técnica. <br><br>b. Clave precompartida (PSK). Hay que introducir una palabra o frase cualquiera de hasta 64 caracteres. Se debe utilizar también la misma PSK para cada dispositivo de red inalámbrica de la red. Es importante recordar que el sistema distingue entre mayúsculas y minúsculas ("n" no es lo mismo que "N".) La forma más sencilla de romper su seguridad es que alguien adivine la PSK.<br><br>3) WEP de 128-bit . Hasta hace poco, la WEP de 128 bits (Wired Equivalent Privacy, privacidad equivalente a cableado) era el estándar de la seguridad inalámbrica. Si en una red todos los dispositivos no son compatibles con WPA, la WEP de 128 bits todavía ofrece una opción de seguridad muy buena. Funciona con  números hexadecimales, que se pueden generar también automáticamente. <br><br>4) WEP de 64-bit. Belkin sólo recomienda el modo de 64 bits en redes en las que algunos dispositivos no admitan ni WPA ni WEP de 128bits. ';

g47='Some ISPs require a connection using L2TP protocol. This sets up a direct connection to the ISP\'s system. Type in the information provided by your ISP in the space provided. When you have finished, click "Apply Changes". After you apply the changes, the Internet Status indicator will read "Connected" if your Router is set up properly. ';
g48 = 'Access Control';
g49 = 'The Router can be configured to restrict access to the Internet, email, or other network services at specific days and times. Restriction can be set for a single computer.';
g50='Modo Eco';
g51='Esta función le permite atenuar el LED en la parte frontal del router para ahorrar energía. También puede disablethe radio inalámbrica en momentos determinados.';

rs_file_error='El archivo de actualización no es del tipo o versión correcta para este dispositivo. Fallo en la actualización. Consiga el archivo correcto y pruebe de nuevo';
rs_crc='Error al restaurar < CRC >';
rs_long='Error al restaurar <demasiado larga>';
rs_disposition='Error al restaurar <No hay disposición del contenido>';
rs_getpid='Error al restaurar <No se puede obtener la pid>';
rs_unmatchpid='Error al restaurar <pid no encaja>';

var msg_ddns1 ="Introduzca su nombre de usuario!\n";
var msg_ddns2 ="Introduzca su contraseña!\n";
var msg_ddns3 ="No puede dejar el nombre del dominio en blanco.\n";
var msg_ddns4 ="Actualizar DNS dinámico";
var msg_ddns5 ="La longitud del nombre de dominio debe ser inferior a  63.";
// fw_dmz.html
var msg_fw_dmz1 = "Please enter the IP address before enabling DMZ.\n";
var msg_lan_dhcp1 ="Requesting information from the Gateway.";
var msg_lan_dhcp2 ="Updating configuration database.";
var msg_lan_sett1 ="Por favor, introduzca direcciones IP no enrutables (10 o 172 o 192)!\n";
var msg_lan_sett2 ="Por favor, introduzca direcciones IP no enrutables (168)!\n";
var msg_lan_sett3 ="Por favor, introduzca direcciones IP no enrutables (16 ~ 31)!\n";
var msg_lan_sett4 ="Por favor, introduzca direcciones IP no enrutables (1 ~ 254)!\n";
var msg_lan_sett5 ="Por favor, introduzca direcciones IP válidas (0 ~ 255)!\n";
var msg_wan_stat='La dirección IP %s no está en la red %s.';
var msg_wan_stat1 ="Dirección IP ";
var msg_wan_stat2 =" is not in ";
var msg_wan_stat3 =" network.";
var msg_wls_chan1 ="SSID no se puede ajustar como NULO";
var msg_wls_chan2 ="La SSID de invitado no puede ser NULA!\n";
var fw_update ="Actualización del firmware en curso. ";
var fw_not_interrupt ="NO APAGUE O DESACTIVE EL ROUTER, si lo hace podría dañar el router dejándolo inoperable.";
var show35a ="Restablecer ajustes predeterminados";
var msg_invalid_char ='Carácter(es) inválido(s) encontrado(s). Los caracteres válidos son: 0-9,a-z, A-Z, `~!@#$%^&*()_-+=|\\{}[]:";\',.<>/?';
var vs_null ="La descripción está vacía.";
var msg_invalid_vs_char ='Se han encontrado caracteres no válidos. Los caracteres válidos son: 0-9, a-z, A-Z, `~!@#$%^&*()_-+=|{}[]:;\',.<>/?';
var msg_invalid_ssid_char ='Se han encontrado caracteres no válidos. Los caracteres válidos son: 0-9, a-z, A-Z, _+.';
var msg_invalid_domain_char ='Nombre de dominio local no válido'+': ~!@#$%^&*()=+{}[]|":;\\\'?/<>,`';
var msg_invalid_char_1 ='Invalid Character(s) found. Valid characters are letters and numbers .The following symbols is invalid: `~!@#$%^&*()_+[]{}\\|;:\'"<>/?.,';
var msg_hostIP_invalid ="La dirección IP del host es inválida. No tiene que ser la dirección IP LAN del router.\n";
var msg_dmzIP_blank='Por favor, introduzca la dirección IP antes de activar DMZ.';
var msg_dmzIP ="Dirección IP DMZ.";
ipm='Bien no ha introducido todos los números DNS, o bien alguno de los números introducidos es incorrecto. Los números deberán ser o encontrarse entre 0 y 255.';
ipmLast='Bien no ha introducido todos los números DNS, o bien alguno de los números introducidos es incorrecto. Los números deberán ser o encontrarse entre 1 y 254.';
var msg_blank =" no se puede dejar en blanco.\n";
var msg_space ="Blanks or spaces are not allowed in %s\n";
var msg_blank_in ="Blanks are not allowed in %s\n";
var msg_allspaces ="%s cannot consist solely of spaces\n";
var msg_invalid ="Invalid character or characters in %s\nValid characters are: \n%s\n\n";
var msg_check_invalid ="%s contains an invalid number\n";
var msg_valid_range ="%s is invalid. Valid range is %s to %s\n";
var msg_invalid_mac ="Dirección MAC no válida.\n";
var msg_multi_mac="The MAC address can't be multicast address.\n";
var msg_vs_des="Invalid character : or - is not allowed in description.";
var msg_privateIP_invalid ="La dirección IP LAN no es válida.\n";
var msg_dmzIP ="DMZ IP Address.";
var msg_confirmDefault ="Warning!\nLoading the Factory Default Settings will erase all the current settings.\nAre you sure you wish to do this?";


var con_noinfo='Elija la conexión que su ISP (proveedor de acceso a Internet) utilice.\n.Su ISP le debe haber proporcionado esta información en el momento del contrato de la línea.';
var con_miss='El campo a continuación ha sido rellenado con datos no válidos o incorrectos.';
var con_nosure='Por favor, póngase en contacto con su ISP si no está seguro de su tipo de conexión.\nAsegúrese de mantenerlos en el teléfono hasta que tenga toda la información requerida en las páginas siguientes.';

var wiz_noinfo='Introduzca la información siguiente necesaria para el tipo de conexión que eligió en la última pantalla. Su ISP le debe haber proporcionado esta información.';
var wiz_miss='Algunos campos a continuación han sido rellenados con datos no válidos o incorrectos (por ejemplo: nombre de cuenta no válido o contraseña o caracteres)';
var wiz_nosure='Por favor, póngase en contacto con su ISP si no está seguro de los ajustes a continuación.';
var network_key1='Debe introducir su clave de red!';
var network_key2='La clave deberá tener entre 8 y 63 caracteres de longitud, puede incluir espacios y símbolos, o sólo 64 dígitos hexadecimales (de 0 a 9 y de A a F)!';
var wiz_cd1='Por favor, introduzca el CD de Solución de problemas en el ordenador y salga de este asistente.';
var wiz_cd2='No se preocupe, sólo precisamos corregir en su ordenador una configuración específica para Australia y Nueva Zelanda.  El asistente de instalación del CD tiene un programa especial que lo realiza automáticamente.';
var wiz_cd3='Cuando haya salido de este asistente e introduzca el disco, debe aparecer el asistente de configuración del CD de Solución de problemas en pantalla antes de 15 segundos.';
var wiz_cd4='Debe cerrar este Asistente que utiliza el navegador haciendo clic en el botón Salir a continuación para utilizar el CD de solución de problemas.';
var wiz_chk_conn1='Comprobación de la conexión a Internet...';
var wiz_chk_conn2='Por favor espere mientras el router verifica sus ajustes de Internet.';
var wiz_chk_isp='Cuando hemos intentado conectar, su operador no ha aceptado la configuración que aparece abajo.  Examínela cuidadosamente para saber si figura algo incorrecto.';
var wiz_chk_poeisp='u ISP no aceptó los ajustes fijados a continuación cuando intentamos conectar. Por favor<br>revíselas atentamente para ver si algo está incorrecto. Si no está seguro de que los ajustes están correctos por favor póngase en contacto con su ISP.';
btn5='Previous';
btn6='Routing Table';
Multi_PPPoE='Multi-PPP over Ethernet';
wcc15='Multi-PPPoE';
wcc16='[Japan Only] This type of connection is a unique function in Japan which is required for those who subscribe NTT\'s broadband Internet.';
Australia_wz='Australia';
Austria_wz='Austria';
Belgium_wz='Bélgica';
China_wz='China';
Czech_wz='República Checa';
Denmark_wz='Dinamarca';
France_wz='Francia';
Germany_wz='Alemania';
Hong_Kong_wz='Hong Kong';
Hungary_wz='Hungría';
India_wz='India';
Indonesia_wz='Indonesia';
Israel_wz='Israel';
Italy_wz='Italia';
Japan_wz='Japón';
Korea_wz='Corea';
Malaysia_wz='Malasia';
Netherlands_wz='Holanda';
New_Zealand_wz='Nueva Zelandia';
Norway_wz='Noruega';
Philippines_wz='Filipinas';
Portugal_wz='Portugal';
Singapore_wz='Singapur';
Spain_wz='Spain';
Sweden_wz='Suecia';
Switzerland_wz='Suiza';
Taiwan_wz='Taiwán';
Thailand_wz='Tailandia';
UK_wz='Reino Unido';
USA_wz='Estados Unidos de América';
Other_wz='Otro';

g10_brief='Un tipo de conexión dinámica es el tipo de conexión más habitual para módems por cable. Configurar el tipo de conexión como dinámico es suficiente en muchos casos para completar la conexión con su ISP. Algunos tipos de conexión dinámica es posible que requieran un Nombre de host. Puede introducir su Nombre de host en el espacio correspondiente, si le ha sido asignado uno. Su ISP le asignará su Nombre de host.';
Finland_wz="Finlandia";
 
Poland_wz='Polonia';

var msg_invalid_IP = '¡Una o más de las direcciones IP que introdujo no son válidas!';
var modem_miss = wiz_miss;
var modem_nosure = wiz_nosure;
var modem_noinfo = 'Por favor introduzca la siguiente información. Su ISP le proporcionó esta información.';

var run_detect1 = 'El módem está detectando VPI/VCI, por favor espere......';
var run_detect2 = 'El módem está detectando el tipo de conexión wan, por favor espere......';

run19='Encapsulado:';
run46=wiz_chk_isp;
run48='Configuración del módem';
run52='Encapsulación';

info_pppoa='La mayoría de proveedores DSL emplean PPPoA como tipo de conexión. Si utiliza un módem DSL para conectarse a  Internet, es posible que su ISP emplee PPPoA para darle acceso al servicio. Si dispone de una conexión a Internet  en su casa u oficina pequeña que no requiere módem, es posible que también utilice PPPoA.<br><br>  Su tipo de conexión es PPPoA si:<br>  1) Su ISP le proporcionó un nombre de usuario y contraseña que son necesarios para conectarse a Internet.<br> 2) Su ISP le proporcionó software que usted emplea para conectarse a Internet<br>  3) Usted debe hacer doble clic en un icono de escritorio distinto del de su navegador para acceder a Internet<br><br>  Para configurar el Router de forma que utilice PPPoA, introduzca su Nombre de Usuario y Contraseña en los espacios previstos. Si no dispone de un nombre de servicio o no lo conoce, deje en blanco el campo de nombre de servicio.  Una vez introducida la información, haga clic en "Aplicar cambios". Después de aplicar los cambios,  el indicador del estado de Internet mostrará el mensaje "Conectado" si su router está configurado correctamente. Para obtener más detalles acerca de cómo configurar su router para utilizar PPPoA, consulte el Manual del usuario.';
info_pppoe = 'La mayoría de proveedores de DSL emplean PPPoE como tipo de conexión. Si utiliza un módem DSL para conectarse a   Internet, es posible que su ISP emplee PPPoE para darle acceso al servicio. Si dispone de una conexión a Internet   en su casa u oficina pequeña que no requiere módem, es posible que también utilice PPPoE. <br><br> Su tipo de conexión es PPPoE si:<br> 1) Su ISP le proporcionó un nombre de usuario y contraseña que son necesarios para conectarse a Internet.<br> 2) Su ISP le proporcionó software como WinPOET, Enternet300 que usted emplea para conectarse a Internet.<br>  3) Usted debe hacer doble clic en un icono de escritorio distinto del de su navegador para acceder a Internet<br><br>  Para configurar el router de forma que utilice PPPoE, introduzca su Nombre de usuario y Contraseña en los espacios correspondientes. Si no dispone de Nombre de servicio o no lo conoce, deje en blanco el campo Nombre de servicio.   Una vez introducida la información, haga clic en "Aplicar cambios". Después de aplicar los cambios,  el indicador del estado de Internet mostrará el mensaje "Conectado" si su router está configurado correctamente.  Para obtener más detalles acerca de cómo configurar su router para utilizar PPPoE, consulte el Manual del usuario.';
info_ipoa = 'El tipo de conexión de Dirección IP estática es menos común que otros tipos de conexión. Si su ISP   emplea direccionamiento IP estático, necesitará su Dirección IP, Máscara de subred y Dirección de puerta de enlace del ISP  . Esta información puede obtenerla de su ISP o en la documentación que le envió  su ISP. Introduzca su información y haga clic en "Aplicar cambios". Después de aplicar los cambios,  el indicador de estado de Internet mostrará "Conexión" si su router está configurado correctamente. ';
info_dial_up = 'Deberá utilizar un módem que esté conectado al puerto serie de su Router.El número de teléfono para la conexión, el nombre de usuario, la contraseña, etc. le serán proporcionados por su ISP.En el caso de que se precisen secuencias especiales de inicialización para que su módem funcione correctamente, esta información deberá ser obtenida del fabricante del módem. Si su ISP le ha proporcionado una dirección IP específica, debe introducirla en los campos de dirección IP en el final de la pantalla.';

topic_dial_up = 'Conexión Externa';
info_dsl_modem = 'DSL significa Línea de abonados digitales. Un módem DSL emplea sus líneas de teléfono existentes para transmitir los datos a altas velocidades.';
topic_dsl_modem = 'Módem DSL';

help_pppoa = '<b>PPPoA</b> La mayoría de proveedores DSL emplean PPPoA como tipo de conexión. Si utiliza un módem DSL para conectarse a  Internet, es posible que su ISP emplee PPPoA para darle acceso al servicio. Si dispone de una conexión a Internet  en su casa u oficina pequeña que no requiere módem, es posible que también utilice PPPoA.  Su tipo de conexión es PPPoA si:<br>  1) Su ISP le proporcionó un nombre de usuario y contraseña que son necesarios para conectarse a Internet. 2) Su ISP le proporcionó software que usted emplea para conectarse a Internet.  3) Usted debe hacer doble clic en un icono de escritorio distinto del de su navegador para acceder a Internet.  Para configurar el Router de forma que utilice PPPoA, introduzca su Nombre de Usuario y Contraseña en los espacios previstos. Si no dispone de un nombre de servicio o no lo conoce, deje en blanco el campo de nombre de servicio.  Una vez introducida la información, haga clic en "Aplicar cambios". Después de aplicar los cambios,  el indicador del estado de Internet mostrará el mensaje "Conectado" si su router está configurado correctamente. Para obtener más detalles acerca de cómo configurar su router para utilizar PPPoA, consulte el Manual del usuario.';
help_pppoe = '<b>PPPoE</b> La mayoría de proveedores de DSL emplean PPPoE como tipo de conexión. Si utiliza un módem DSL para conectarse a Internet, es posible que su ISP emplee PPPoE para darle acceso al servicio. Si dispone de una conexión a Internet en su casa u oficina pequeña que no requiere módem, es posible que también utilice PPPoE. Su tipo de conexión es PPPoE si: 1) Su ISP le proporcionó un nombre de usuario y contraseña que son necesarios para conectarse a Internet. 2) Su ISP le proporcionó software como WinPOET, Enternet300 que usted emplea para conectarse a Internet. 3) Usted debe hacer doble clic en un icono de escritorio distinto del de su navegador para acceder a Internet.  Para configurar el router de forma que utilice PPPoE, introduzca su Nombre de usuario y Contraseña en los espacios correspondientes. Si no dispone de Nombre de servicio o no lo conoce, deje en blanco el campo Nombre de servicio.  Una vez introducida la información, haga clic en "Aplicar cambios". Después de aplicar los cambios,  el indicador del estado de Internet mostrará el mensaje "Conectado" si su router está configurado correctamente.  Para obtener más detalles acerca de cómo configurar su router para utilizar PPPoE, consulte el Manual del usuario.';
help_ipoa = '<b>IP Estática (IPoA)</b> El tipo de conexión de Dirección IP estática es menos común que otros tipos de conexión. Si su ISP   emplea direccionamiento IP estático, necesitará su Dirección IP, Máscara de subred y Dirección de puerta de enlace del ISP  . Esta información puede obtenerla de su ISP o en la documentación que le envió  su ISP. Introduzca su información y haga clic en "Aplicar cambios". Después de aplicar los cambios,  el indicador de estado de Internet mostrará "Conexión" si su router está configurado correctamente. Si su ISP le asigna más de una dirección IP estática, su router tendrá la capacidad de gestionar  hasta cinco direcciones IP WAN estáticas. Seleccione "Mi ISP suministra más de una dirección IP estática"  e introduzca las demás direcciones.';
help_dial_up = '<b>Marcación externa</b> Deberá utilizar un módem que esté conectado al puerto serie de su Router.El número de teléfono para la conexión, el nombre de usuario, la contraseña, etc. le serán proporcionados por su ISP.En el caso de que se precisen secuencias especiales de inicialización para que su módem funcione correctamente, esta información deberá ser obtenida del fabricante del módem. Si su ISP le ha proporcionado una dirección IP específica, debe introducirla en los campos de dirección IP en el final de la pantalla.';

wb1='WAN > Tipo de conexión > IP fija / dinámica (Puenteado 1483)';
wb101='WAN > Tipo de conexión > IP estática (IPoA)';
wb102='WAN > Tipo de conexión > Sólo módem (Desactivar Compartir Internet)';
wb3='IP Asignada por ISP';
wb7='VPI / VCI';
wb9='Auto Detección';
wb11='No';
wb12='LLC';
wb13='VC MUX';
wpevpi1='Por favor introduzca VPI';
var msg_vpi='El número de VPI deberá ser o estar dentro del rango de 0-255!';
wpevci1='Por favor introduzca VCI';
var msg_vci='El número de VCI deberá ser o estar dentro del rango de 1-65535!';
wc7='IP dinámica / fija (Puenteado 1483)';
wc9='IP estática (IPoA)';
wc11='Sólo módem (Desactivar Compartir Internet)';
wppoa1='WAN > Tipo de conexión > PPPoA';
wppoa2='Para introducir los ajustes para PPPoA, introduzca su información a continuación y haga clic en "Aplicar cambios".';
wpmodem1='Para introducir los ajustes para su módem, introduzca su información a continuación y haga clic en "Aplicar cambios".';
IPoA='IPoA';
PPPoA='PPPoA';
Modem='Sólo Módem';
adsl_status='ADSL';
downstream = 'Bajada';
upstream = 'Subida';
datarate = 'Velocidad de datos(Kbps)';

var change_lan_for_ip_conflict="Router WAN port gets an IP address who is in Router's LAN subnet, WAN port is disabled to insure LAN ports can work. As a result, you can not visit the internet now. Please change your WAN connection settings or LAN settings to solve this.";

var wizard_name = "Programa de configuración del router";
stroute_1 = 'LAN > Static Routing';
showstroute='Static Routing';
stroute3 = 'The routing table is full!';
stroute32 = ' Network Address';
stroute33 = ' '+i11;
stroute34 = ' Gateway';
Remove='Remove';



acl_1 = 'Controles parentales > Control de acceso';
help_acl='After enabling Access Control, pressing the "Add" button will open up the "Connected Client List" Screen. This screen lists all the clients list with MAC addresses learned from the router. In the "Connected Client List" screen you can also create a Client you want to control by filling in the blanket MAC address column. You choose one of the clients from the "Connected Client List" by pressing the "Add" button. You will return to Access Control Screen. You can press the "Edit" button under the "Member" column to setup the Acceess Control Rule for each client. '
acl_setting='Internet Access <br> Policy';
acl_2 = 'The Acl table is full';
acl_3 = 'After enabling Access Control, pressing the <b>"Add"</b> button will open up the <b>"Connected Client List"</b> Screen.  This screen lists all the clients list with MAC addresses learned from the router. In the <B>"Connected Client List" </B> screen you can also create a Client you want to control by filling in the blanket MAC address column. You choose one of the clients from the "Connected Client List" by pressing the <b>"Add"</b> button.  You will return to Access Control Screen. You can press the <b>"Edit"</b> button under the <b>"Member"</b> column to setup the Acceess Control Rule for each client.';
acl_4='Haga clic en "Añadir" para abrir la pantalla "Lista de clientes conectados" que muestra una lista de direcciones MAC registradas por el router. En la pantalla "Lista de clientes conectados" también puede crear un cliente que quiera controlar introduciendo la dirección MAC en la columna en blanco. Cuando escoja uno de los clientes de la lista de clientes conectados haciendo clic en "Añadir" en la columna de acción, irá a la pantalla de control de acceso. Es esta pantalla debe completar los datos de las reglas de control del cliente que haya elegido.';
acl1='Miembro';
acl2='Dispositivo';
acl3='Dirección MAC';
acl4='Estado';
acl5='Restricción';
acl6='Acción';
acl7=' ';
acl8='Todos los dispositivos de SSID invitado';
acl9='Excepción en la reglas de control para el usuario';
acl10='Calendario';
acl11='URL List';
acl12='URL Keyword List';
acl13='Días';
acl14='Cada día ';
acl15='L';
acl16='M';
acl17='X';
acl18='V';
acl19='24 horas';
acl20='De';
acl21='A';
acl22='¿Desea borrar este miembro?';
acl23='Already existed.';
acl24='Ya existía en la lista de miembros';
acl25='Ya existía en la lista de clientes';
acl26='Los números de puerto que ha introducido no son válidos.';
acl27='Contraseña de entrada';
acl28='Landing page';
acl29='Acceso denegado. Escriba la contraseña del router para permitir que se acceda temporalmente a la página o los servicios bloqueados.';
member_setting='Lista de miembros';
acl_member_setting='Exception of Control Rules for Member';
Allow_All='Allow All';
Deny_All='Deny All';
acl30='El router puede ser configurado para restringir el acceso a Internet, al e-mail o a otros servicios de red en determinados días y horas. Puede establecerse una restricción para un ordenador, un tipo de ordenadores o varios ordenadores.';

Index='Contenido';
Services='Servicio';
Port_Rang_List='Lista de los intervalos de puerto';
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
PortService_User_Defined='Definido según usuario';
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
URL_Address='Dirección URL';

Keyword='Contraseña';
Blocking_Keyword='Website Blocking by keyword';
Allowing_Keyword='Website Allowing by keyword';



Connected_Client_List='Lista de clientes conectados';
var save_reboot_time=30;
var restore_reboot_time=30;
var upgrade_reboot_time=70;
var normal_reboot_time=60;

rdt_msg1='Esta función no está disponible. ';
rdt_msg2='Redirigiendo a la página de inicio...';
var disconnect_msg = 'Oops! Your connection to the router has failed.  Please reconnect to the router, click OK and retry.';
show49='Acceso para invitados';
wguest1='Inalámbrico > Acceso para invitados';
wguest4='El acceso para invitados permite el acceso a Internet a través del puerto WAN, pero limita el acceso a la red interna, LAN y WLAN a los invitados. Para simplificar el uso, esta función sólo usa la frecuencia de 2,4GHz.';
wguest5='Tipo';
wguest6='Modo cibercafé (acceso de invitados por medio de una página web)';
wguest7='WPA/WPA2 PSK';
wguest8='WEP';
wguest9='Open';
wguest10='Nombre de la red (SSID)';
wguest11='máximo 32 caracteres, sin espacios';
wguest12='Contraseña(PSK)';
wguest13='de 8 a 63 caracteres';
wguest14='Configuración de la impresora para invitados';
wguest15='10 caracteres hexadecimales';
wlguest3='La longitud de la contraseña no es válida. La longitud máxima de la contraseña es 63 y la longitud mínima de la contraseña es 8';
wlguest4='La clave WEP debe tener 10 dígitos hexadecimales.';
wlguest5='Cada invitado que se conecte a su red inalámbrica necesitará esta contraseña.';
wlguest6='Tipo de seguridad';
wlguest7='Para conectarse a la red inalámbrica:';
wlguest8='Windows';
wlguest9='Haga clic con el botón derecho del ratón sobre el icono de red inalámbrica situado en la bandeja del sistema de Windows y seleccione en el menú Ver redes inalámbricas disponibles.';
wlguest10='Haga doble clic en';
wlguest11='Se abrirá una ventana que le solicitará la clave de red. Introduzca la contraseña y haga clic en Aceptar.';
wlguest12='MAC OS X';
wlguest13='Haga clic en el icono de red inalámbrica de la barra de menús (arriba a la derecha) y seleccione';
wlguest14='Se abrirá una ventana que le solicitará la clave de red. Introduzca la contraseña y haga clic en Aceptar.';
wlguest15='El acceso de invitado es una opción que permite a los usuarios acceder a Internet pero limita el acceso a la red doméstica. Pregunte al administrador de red por la contraseña del acceso de invitado e introdúzcala más abajo';
wlguest16='¡Ya está! Ya puede navegar por Internet.';
wlguest17='Contraseña/PSK';
wipv61='IPv6 > Ajustes de la conexión';
wipv62='IPv6 Pass-Through >';
wipv63='Los dispositivos conectados al router pueden comunicarse entre ellos usando los paquetes IPv6 nativos. Los paquetes IPv6 en la red LAN se envían de forma automática a todas las interfaces LAN (puertos Ethernet y las redes inalámbricas de 2,4 GHz y 5 GHz).';
wipv64='Cuando la opción pass-through a través de IPv6 está activada, los paquetes IPv6 también se copian en la interfaz WAN. (Esto crea una conexión directa, no segura a internet.)';
wipv65='Tu proveedor de internet te informará sobre la compatibilidad con IPv6.';
wipv66='IPv6';
wipv67='Internet IPv6';
wipv68='Tu conexión ya es compatible con IPv6.';
wipv69='Pass-Through';

show50='Filtros de páginas web';
web_filter1='Controles parentales > Filtros de páginas web';
web_filter2='Te ofrece un primer nivel de seguridad integral en internet para cualquier dispositivo en tu hogar,  protegiendote de páginas web potencialmente inseguras y de contenido inapropiado.';
web_filter3='Opciones de filtrado';
web_filter4='Estos filtros de seguridad son proporcionados para orientar a tu familia a la hora de usar internet de una manera responsable.';
web_filter5='Bloquea el acceso a páginas web tanto de contenido adulto e inapropiado como de malware preligroso para tu ordenador ';
web_filter6='Bloquea el acceso a páginas web de malware potencialmente peligrosas y de contenido adulto';
web_filter7='Bloquea el acceso a páginas web peligrosas con contenido malware';
web_filter8='Sin filtros';
web_filter9='Bloquea páginas web con contenido malware, phishing y scam, además de páginas pornográficas y otros contenidos para adultos como aborto, alcohol, crimen, sectas, drogas, juego, suicidio o violencia.';
web_filter10='Bloquea el acceso a páginas web peligrosas de malware, phishing y scam, y a páginas de contenido sexual explícito';
web_filter11='Bloquea páginas web peligrosas con contenido malware, phishing y scam';
web_filter12='Elige personalmente tu proveedor de DNS';
web_filter13='Para cambiar tus direcciones DNS, ve a WAN > %s DNS %s';
web_filter14="Los filtros de páginas web están pensados para que tengas la confianza de que tus hijos usan internet de manera segura. Escoge entre cualquiera de los tres filtros disponibles, y fija el nivel de seguridad deseado para tu conexión.";

show51='Intellistream';
show53='Opciones de Multimedia';
mf1='Estas páginas te permiten ajustas el comportamiento de tu router ante ciertas formas de tráfico de contenido multimedia.';
mf2='Optimiza automaticamente tu conexión a internet para los distintos tipos de tráfico de datos.';
mf3='Ver como tu router está operando.';
mf4='Opciones de Multimedia > Intellistream';
mf5='Intellistream da preferencia a los servicios de alto ancho de banda y latencia baja, tales como de voz, video y juegos, proporcionando así la mejor experiencia interactiva posible.';
mf6='La conectividad a internet se interrumpirá momentaneamente durante la duración del test.';
mf7='Test de velocidad:';
mf8='Guardado a %s';
mf9='Ping';
mf10='Descargar';
mf11='Cargar';
mf12='Velocidad';
mf13='Ms';
mf14='Mbps';
mf15='Aplicar configuración';
mf16='Se ha producido un error durante el test.';
mf17='Establecer manualmente';
mf18='Inserta entre el número {0.1-%s}.';
mf19='Para activar Intellistream:';
mf20='Entre {0.1-%s} sólo.';
mf22='Completado.';
mf23='Debido a tu alta tasa de subida, Intellisteam dará preferencia solo a tu velocidad de descarga.';
mf24='Debido a tu alta tasa de descarga, Intellisteam dará preferencia solo a tu velocidad de subida.';
mf25="Debido tu alta velocidad de conexión a internet, no es necesario activar el Intellistream. ";
mf26='Grabado manualmente a %s';
mf27='En curso...';
mf28='Efectuar un test de velocidad';
mf29='Para operar efectivamente, Intellistream necesita determinar la velocidad de tu conexión.';
mf30='Intellistream está activado.';
mf31='Introducir manualmente';
mf32='o';
mf33='El Intellistream está actualmente desactivado.';
mf43='Internet connectivity is momentarily suspended during the test.';
mf44='Es posible que debido al volumen de tráfico en internet o a otras causas los resultados del test automático de velocidad no sean 100% precisos  Puede comparar los resultados visitando una página web de test de velocidad o consultando la velocidad de la conexión con su ISP.  Si los resultados del test de velocidad fuesen inconsistentes, es posible insertar los valores manualmente.';

show52='Cuadro de tráfico';
qos_stats1='Opciones de Multimedia > Cuadro de tráfico';
qos_stats2='Los cuadros de abajo muestran el tráfico WAN tanto de salida como de entrada, priorizado en distintas categorías. Estos muestran información sobre los últimos 10 minutos (se actualizan automáticamente cada 5 segundos).';
qos_stats3='Leyenda del tráfico'; 
qos_stats4='Bytes/Seg';
qos_stats5='Momento del día/Horas:Minutos';
qos_stats6='Tráfico de entrada';
qos_stats7='Tráfico de salida';
qos_stats8='Control y conectividad de la red';
qos_stats9='Cuadro de voz, video y juego en línea';
qos_stats10='Video Web y Web';
qos_stats11='Email y VPN';
qos_stats12='Descargas, torrents y otros';
qos_stats13='Para activar esta función, debes activar el Intellistream ';
qos_stats14='aquí';
qos_stats15='.';

new1='Optimiza tu conexión a internet.';
new2='Controles parentales';
new3='Filtros de paginas web.';
new4='Conexión IPv6';
new5='Tu conexión ya es compatible con IPv6.';
new6='NUEVO';
new7='Comparte contenido multimedia entre los dispositivos de la red.';
new8='NUE<br>VO';

media_feature1='Opciones de Multimedia';
media_feature2='The bandwidth gap between LAN and WAN may significantly degrade performance of critical network applications, such as VoIP, gaming, and VPN. This QoS function allows users to classify traffic of applications and provides them with differentiated services (Diffserv).';
media_dlna1='Media Server';
media_dlna2='Media Features > Media Server';
media_dlna3='Disfruta de tu música, fotos y vídeos de una manera confortable a través de cualquier dispositivo DLNA conectado a tu red. Se alimenta a través de un servidor Twonky.';
media_dlna4='Servidor DLNA';
media_dlna5='Nombre del servidor';
media_dlna6='Unidades compartidas:';
media_dlna7='Listo';
media_dlna8='Indexando';
media_dlna9='Distribuyendo';
media_dlna10='videos';
media_dlna11='canciones';
media_dlna12='fotos';
media_dlna13='Eject';
media_dlna14='Actualizar';
media_dlna15='Aplicar ajustes';
media_dlna16='Twonky is a line of digital home software products created by PacketVideo Corporation (PV).';
media_dlna17='created by PacketVideo Corporation (PV).';
media_dlna18='Sin título';
media_dlna19='No existen unidades USB acopladas al router.';
media_dlna20='No compartido con la red.';
media_dlna21='Tienes más contenido multimedia del que el router es capaz de indexar, por lo que se están distribuyendo los primeros 12000 artículos.';
media_dlna22='No se puede indexar la unidad de solo lectura.';


// Note this dictionary is a temporary demonstration
var langDictionary = {

// Copy belkin transation table to here	
'p100t011' : 'panel de control',
'p220t001' : 'Tiene una conexión DSL PPTP',
'p220t011' : 'PPTP',
'p220t012' : 'El PPTP (Point-to-Point Tunneling Protocol) crea una conexión privada y encriptada entre usted y su proveedor de servicios internet.',
'p222t001' : 'Existe algún problema con su configuración PPTP.',
'p300t001' : 'Buscando actualizaciones del firmware.',
'p300t002' : 'Estamos comprobando se existe una versión de firmware disponible para su nuevo router',
'p300t003' : '¿Por qué necesito la última versión de firmware?',
'p300t004' : 'El firmware es el software que su router usa para implementar los protocolos de red y de seguridad. Las actualizaciones mejoran la fiabilidad y funcionalidad de su router, por lo que es recomendable que compruebe que tiene la última versión instalada.',
'gtUpdateNoPower' : 'Estamos actualizando el router con la nueva versión de firmware. No apague el dispositivo mientras que la operación esté en proceso.',
'p320t003' : 'Este proceso puede tardar unos 3 minutos. Progreso de la actualización:',
'gtFirmwareRestart' : 'Ahora que ya se ha completado la instalación del firmware, se procederá a reiniciar el router para confirmar la operación.',
'p342t003' : 'de la lista de redes inalámbricas.',
'errorSSIDEmpty' : 'Introduzca un nombre para su red inalámbrica.',
'errorSSIDTooLong' : 'El nombre de la red inalámbrica debe tener menos de 32 caracteres.',
'errorSSIDInvalidChars' : 'El nombre de red puede contener únicamente letras, números, signos de puntuación y espacios.',
'errorWEPPasswordInvalidChars' : 'La contraseña de red puede contener únicamente números y letras entre A y F.',
'errorWEPPasswordInvalidLength' : 'La contraseña de red debe tener 10 o 26 caracteres.',
'errorWEPPasswordEmpty' : 'Introduzca una contraseña para asegurar su red inalámbrica',
'errorWPAPasswordInvalidChars' : 'La contraseña de red puede contener únicamente letras, números, signos de puntuación y espacios.',
'errorWPAPasswordInvalidLength' : 'La contraseña de red debe tener entre 8 y 63 caracteres.',
'errorWPAPasswordEmpty' : 'Introduzca una contraseña para asegurar su red inalámbrica',
'errorGenericCommitError' : 'Se ha producido un error.  Corrija los ajustes aquí abajo y vuelva a intentarlo.',
'p400t006' : 'Contraseña:',
'p450t006' : 'Contraseña: ',
'p451t006' : 'Contraseña: ',
'p500t007' : 'Completar el registro',
'p500t008' : 'Registrarlo más tarde',
'p700t011' : 'PPTP DSL connection',
'errIpAddressEmpty' : 'La dirección IP no puede estar en blanco.',
'errSubnetMaskEmpty' : 'La máscara de subred no puede estar en blanco.',
'errSubnetMaskInvalid' : 'Los valores de la máscara de subred no parecen ser los usuales de una máscara de subred. Compruebe los valores.',
'errDefaultGatewayEmpty' : 'La puerta de enlace predeterminada no puede estar en blanco.',
'errDNSServerEmpty' : 'La dirección del servidor DNS no puede estar en blanco.',
'1781' : 'Descargar Vuze sin conexi�n ',
'1782' : 'Eliminaci�n de todas las descargas en l�nea, se borrar�n todos los elementos en la cola incluidos los archivos parciales y completas.',
'1783' : 'Clear \'Todas las descargas fuera de l�nea',
'7102' : 'El Intellistream de Belkin da preferencia a los servicios de alto ancho de banda y latencia baja, tales como de voz, vídeo y juegos, proporcionando así la mejor experiencia posible en internet.',
'7103' : 'Para operar efectivamente, el Intellistream necesita determinar la velocidad de su conexión.',
'7104' : 'La conectividad a internet será suspendida momentáneamente durante el test.',
'7105' : 'La conectividad a internet está suspendida momentáneamente durante la duración del test.',
'7106' : 'Ejecutar prueba de velocidad',
'7107' : 'Prueba de velocidad',
'7108' : 'Introducir manualmente',
'7109' : 'Ping',
'7110' : 'Velocidad de<br> descarga',
'7111' : 'Velocidad de<br> subida',
'7112' : 'En curso...',
'7113' : 'Completado.',
'7114' : 'Se ha producido un error durante el test.',
'7115' : 'Inserta un número entre 0.1-100.',
'7116' : 'Inserta un número entre 0.1-1000.',
'7117' : 'Entre 0.1-100 sólo.',
'7118' : 'Debido a su alta tasa de subida, Intellistream dará preferencia solo a su velocidad de descarga.',
'7119' : 'Debido a su alta tasa de descarga, Intellistream dará preferencia solo a su velocidad de subida.',
'7120' : 'Debido su alta velocidad de conexión a internet, no es necesario activar el Intellistream.',
'7121' : 'Grabado en',
'7122' : 'Grabado manualmente a',
'7123' : 'Para activar Intellistream:',
'7124' : 'Intellistream está activado.',
'7125' : 'Intellistream  está actualmente desactivado.',
'7126' : 'Configurado manualmente',
'gtBBSTitle' : 'Bienvenido a la herramienta de configuración del router de Belkin',
'gtBack' : 'Volver al panel de control',
'Support4t036' : 'Leer toda la información.',
'Support4t037' : 'Visite la siguiente URL en un dispositivo que esté conectado a internet y aprenda como resolver el problema usted mismo: <STRONG>www.belkin.com/support/asdlkj</STRONG>',
'gtReadHelp' : 'Vaya a <STRONG>http://belk.in/NLk29H</STRONG> desde un dispositivo que esté conectado a internet',
'Support5t014' : 'Leer toda la información.',
'p1200t001' : 'Un poco más de seguridad.',
'p1200t002' : 'Además, usted puede proteger su router mediante el bloqueo del tablero de instrumentos con una contraseña.',
'errsetempt' : 'Introduzca una contraseña.',
'errorpwdEmpty' : 'Introduzca su contraseña.',
'errorpwdError' : 'La contraseña introducida no es correcta.',
'60' : 'Duplicar el administrador',
'61' : 'Este dispositivo lo gestiona',
'62' : 'en este momento',
'gtDisconnected' : 'Desconectado',
'dft005' : 'Centro de ayuda de Belkin',
'dhToggleBand' : 'Mostrar 5.0 Ghz',
'419' : 'segundos restantes.',
'422' : 'Configuración restaurada con éxito',
'423' : 'El archivo restaurado no es el tipo o la versión correcta para este dispositivo. No se ha podido llevar a cabo la restauración. Busque el archivo correcto y pruebe de nuevo',
'533' : 'Si el router comienza a funcionar incorrectamente, puede que necesite restablecer la configuración original o reiniciarlo. Reiniciar el router no afectará a su configuración.',
'1200' : 'Aplicando los cambios. Por favor, espere.......',
'1386' : 'El archivo de actualización no es del tipo o versión correcta para este dispositivo. Fallo en la actualización. Busque el archivo correcto y pruebe de nuevo',
'2053' : 'Cambios realizados con éxito',
'2054' : 'Actualización del firmware completada con éxito',
'766' : 'Los números de máscara de subred que ha introducido no son válidos.',
'1356' : 'Dirección IP de la puerta de enlace no válida, el primer número debe estar entre 1 y 223.',
'1357' : 'Dirección IP de puerta de enlace no válida, el segundo y tercer número deben estar entre 0 y 255.',
'1358' : 'Dirección IP de puerta de enlace no válida, el último número debe estar entre 1 y 254.',
'1360' : 'Dirección IP no válida, el primer número debe estar entre 1 y 223.',
'1354' : 'Dirección IP no válida, el segundo y tercer número deben estar entre 0 y 255.',
'675' : 'Dirección IP no válida, el último número debe estar entre 1 y 254.',
'403' : 'La dirección IP introducida no es válida.',
'760' : 'Dirección IP',
'1760' : 'Denegar todo',
'395' : 'Bien no ha introducido todos los números, o bien algunos de los números introducidos es incorrecto. El número deberá encontrarse entre 0 y 255 en todos los recuadros de introducción.',
'1395' : 'No configurado',
'1281' : 'La IP de WAN no puede cubrir la subred del lado LAN.',
'641' : 'Bien no has introducido todos los números de la IP, o bien algunos de los números introducidos son incorrectos. Los números deben ser entre 0 y 255',
'errUsernameTooLong' : 'El nombre de usuario debe tener menos de 64 caracteres.',
'errUsernameInvalid' : 'El nombre de red puede contener únicamente letras, números, signos de puntuación y espacios.',
'errPasswordEmpty' : 'Introduzca su contraseña.',
'errPasswordTooLong' : 'La contraseña debe tener menos de 64 caracteres.',
'errPasswordInvalid' : 'El nombre de red puede contener únicamente letras, números, signos de puntuación y espacios.',
'1398' : 'Aceptar',
'1399' : 'Cancelar',
'374' : 'Encendido',
'375' : 'Apagado',
'47' : 'Más información',
'48' : 'Borrar cambios',
'49' : 'Guardar',
'96' : 'Activar',
'119' : 'Desactivar',
'1298' : 'Cerrar',
'113' : '<< Añadir',
'114' : 'Eliminar',
'128' : 'Actualizar',
'318' : 'Desactivado',
'317' : 'Activado',
'2006' : 'Sí',
'2007' : 'No',
'3300' : 'NUEVO',
'50' : 'Actualizar el DNS dinámico',
'98' : 'El DDNS (Dynamic domain name system) le permite acceder a su red doméstica a través de una cuenta creada por medio de un proveedor DDNS. Cree y configure su cuenta a través de Dyn.com (<a href=\'http://www.dyn.com\' target=\'_blank\'>www.dyn.com</a>) y active la opción DDNS en el router. Para usar este servicio, necesita darse de alta.',
'100' : 'Nombre de usuario',
'101' : 'Contraseña',
'102' : 'Nombre de dominio',
'742' : 'Introduzca su nombre de usuario',
'757' : 'Introduzca su contraseña',
'822' : 'no es válida, por favor, ¡corrígala primero!',
'1307' : 'DynDNS',
'1308' : 'Servicio DDNS',
'1309' : 'Estado DDNS',
'1310' : 'Pàgina web',
'1315' : 'Actualización automática DDNS',
'1316' : 'actualización cada',
'1317' : 'días',
'1369' : 'Registrado',
'1380' : 'Configuración errónea',
'1381' : 'Conexión',
'1382' : 'Fallo en la conexión',
'1383' : 'Acceso denegado',
'1384' : 'Error de registro',
'1385' : 'No registrado',
'1751' : 'Los medios de comunicación servir archivos a reproductores multimedia compatibles en red',
'702' : 'El DNS (domain name service) transforma nombres de dominio en direcciones IP con el objetivo de localizar servicios informáticos y dispositivos de manera global. Si su proveedor de servicios de internet (ISP) le ha proporcionado una dirección DNS, introdúzcala aquí.',
'703' : 'Automáticamente desde el ISP',
'704' : 'Dirección DNS',
'705' : 'Dirección DNS secundaria',
'706' : 'DNS = Domain Name Server (Servidor de nombre de dominio). Un servidor ubicado en Internet que convierte las URL (vínculos de recursos universales) como, por ejemplo, www.belkin.com en direcciones IP.',
'707' : 'Deberá introducir los ajustes DNS que le ha proporcionado su ISP en caso de no emplear la función de DNS automático.',
'780' : 'Especificar dirección IP',
'823' : 'Para hacer cambios en las DNS, vaya primero a los filtros de páginas web y seleccione la opción «Sin filtros».',
'55' : 'Información sobre el firmware.',
'56' : 'No existe ninguna actualización nueva de firmware disponible para este router.',
'57' : 'Imposible conectar con el servidor de información del firmware, vuelva a comprobar la conexión WAN.',
'58' : 'Versión actual del firmware:',
'59' : 'Descargar firmware:',
'64' : 'El router puede configurarse para restringir el acceso a Internet, al correo electrónico o a otros servicios de red en determinados días y horas.',
'65' : 'IP',
'66' : 'Puerto',
'67' : 'Tipo',
'68' : 'Tiempo de bloqueo',
'69' : 'Día',
'70' : 'Hora',
'71' : 'Activar',
'72' : 'AMBOS',
'73' : 'Siempre',
'74' : 'Bloquear',
'75' : 'D',
'76' : 'L',
'77' : 'M',
'78' : 'X',
'79' : 'J',
'80' : 'V',
'81' : 'S',
'82' : ':00 P.M.',
'83' : ':00 A.M.',
'84' : 'Bien no ha introducido la dirección IP del cliente o bien alguno de los números de la dirección IP que ha introducido no es válido. El número de cada casilla de la IP debe encontrarse entre 1 y 254.',
'85' : 'Los números de puerto que ha introducido no son válidos',
'86' : 'El último en la serie de puertos deberá ser mayor que el primero.',
'87' : 'El último en la serie de puertos deberá ser mayor que el primero.',
'88' : 'El número en la casilla del puerto deberá encontrarse entre 1 y 65535.',
'1311' : 'No hay ninguna aplicación seleccionada',
'1312' : 'Entradas duplicadas detectadas. La regla ya existe.',
'1355' : 'La IP LAN del router debe excluirse del alcance IP.',
'90' : 'Esto le permite especificar un dispositivo en su red para desplazarlo fuera del firewall del router, mientras que otros dispositivos permanecen dentro del firewall.',
'91' : 'El ordenador que se encuentra en la DMZ no está protegido contra los ataques de piratas informáticos.',
'92' : 'Para situar un ordenador en la DMZ, introduzca los dígitos finales de su dirección IP en el campo inferior y seleccione "Activar". Haga clic en «Guardar» para que los cambios tengan efecto.',
'93' : 'Dirección IP del host virtual de DMZ',
'97' : 'IP estática',
'95' : 'IP privada',
'103' : 'Por favor, introduzca la dirección IP antes de activar DMZ',
'1232' : 'La dirección IP del host DMZ no es válida.',
'1253' : 'La IP está fuera del intervalo (1-254)',
'105' : 'Esta función le permite establecer una lista de clientes permitidos. Cuando se activa esta función, hay que introducir la dirección MAC de cada cliente de la red para permitirle el acceso a cada uno.',
'106' : 'Activar filtrado de direcciones MAC',
'107' : 'Lista para el filtrado de direcciones MAC',
'108' : 'Bloquear',
'110' : 'Dirección MAC',
'112' : 'Este MAC ya ha sido añadido!',
'669' : 'Dirección MAC no válida, es una dirección nula.',
'902' : 'Dirección MAC no válida',
'903' : 'Corríjala antes de continuar.',
'904' : 'Una dirección MAC tiene el formato xx:xx:xx:xx:xx:xx (donde x está entre 0-9 y A-F).',
'1062' : 'Nota: no se puede borrar la dirección MAC del ordenador que se utiliza para acceder a las funciones administrativas del router. (El ordenador que está usando ahora mismo).',
'1602' : 'Valor asignado por el usuario 1',
'117' : 'Su router está equipado con un firewall que protegerá a su red de una amplia gama de ataques por parte de piratas informáticos incluyendo Ping of Death (PoD) y Denial of Service (DoS). En caso necesario, puede desactivar la función de firewall. Si desactivara la protección del firewall, no dejará su red completamente vulnerable a los ataques de los piratas informáticos, aunque se recomienda que active el firewall lo antes posible.',
'118' : 'Activar / Desactivar el firewall',
'121' : '<b>¡FUNCIÓN AVANZADA! </b> Es posible configurar el router para que no responda a un ping ICMP (un ping al puerto WAN). Esta característica ofrece un mayor nivel de seguridad.',
'1076' : 'Bloquear ping ICMP',
'1827' : 'Configuración de la impresora para el acceso de invitados',
'2702' : 'El acceso de invitados permite el acceso a internet a través del puerto WAN, pero limita el acceso a la red interna, LAN y WLAN a los invitados. Para simplificar el uso, esta función solo usa la frecuencia de 2,4GHz.',
'279' : 'Puerto de entrada',
'1828' : 'Modo cibercafé (acceso de invitados por medio de una página web)',
'1619' : 'WPA/WPA2 PSK',
'1829' : 'WEP',
'1830' : 'Abierto',
'1831' : 'máximo 32 caracteres, sin espacios',
'1617' : 'Contraseña(PSK)',
'842' : 'Autenticación',
'845' : 'Técnica de encriptación',
'854' : 'Clave precompartida (PSK)',
'857' : 'Ocultar PSK',
'855' : 'WPA-PSK (sin servidor)',
'1335' : 'Nombre de la red (SSID)',
'1825' : 'de 8 a 63 caracteres',
'1826' : '10 caracteres hexadecimales',
'1834' : 'Nombre de red',
'409' : 'Contraseña',
'1835' : 'Cada invitado que se conecte a su red inalámbrica necesitará esta contraseña.',
'1715' : 'Tipo de seguridad',
'1836' : 'Para conectarse a la red inalámbrica:',
'1837' : 'Windows',
'1838' : '1. Haga clic con el botón derecho del ratón sobre el icono de red inalámbrica situado en la bandeja del sistema de Windows y seleccione en el menú Ver redes inalámbricas disponibles.',
'1839' : '2. Haga doble clic en. ',
'1840' : ' la red.',
'1841' : '3. Se abrirá una ventana que le solicitará la clave de red. Introducir la contraseña y hacer clic en «Aceptar».',
'1842' : 'Mac OS X',
'1843' : '1. Haga clic en el icono de red inalámbrica de la barra de menús (arriba a la derecha) y seleccione ',
'1844' : ' la red.',
'1845' : '2. Se abrirá una ventana que le solicitará la clave de red. Introducir la contraseña y hacer clic en «Aceptar».',
'1832' : 'Modo cibercafé',
'1833' : 'Modo abierto',
'1201' : 'el SSID no se puede configurar como NULO',
'1812' : 'La longitud de la contraseña no es válida. La longitud máxima de la contraseña es 63 y la longitud mínima de la contraseña es 8',
'1824' : 'La clave WEP debe tener 10 dígitos hexadecimales.',
'414' : '¡¡Error de acceso!!',
'1811' : 'El acceso de invitados es una opción que permite a los usuarios acceder a internet pero limita el acceso a la red doméstica. Pregunte al administrador de red por la contraseña del acceso de invitado e introdúzcala más abajo',
'1813' : '¡Ya está! Ya puede navegar por Internet.',
'909' : 'La «Dirección IP» es la dirección IP interna del router. Para acceder a la interfaz de configuración avanzada, escriba esta dirección IP en la barra de direcciones de su navegador. Esta dirección puede ser modificada si es necesario. Para modificar la dirección IP, introduzca la nueva dirección IP y haga clic en «Guardar». La dirección IP que elija debería ser una IP no enrutable. Ejemplos de una dirección no enrutable son: 192.168.2.1, 10.0.0.1, 172.16.0.1',
'917' : 'No es necesario modificar la máscara de subred. Pero se puede modificar si fuese necesario. Únicamente realice cambios a la máscara de subred si tiene una razón específica para hacerlo.',
'929' : 'La función de servidor DHCP facilita en gran medida la tarea de configurar una red asignando direcciones IP a cada ordenador de la red. El servidor DHCP puede ser desconectado si es necesario. Para desactivar el servidor DHCP será necesario que establezca manualmente una dirección IP estática en cada ordenador de su red. El grupo de IP es la serie de direcciones IP apartadas para la asignación dinámica a los ordenadores de su red. El valor predeterminado es 2-200 (199 ordenadores) y si desea cambiar este número, puede hacerlo introduciendo una dirección IP nueva de inicio y final y haciendo clic en «Guardar».',
'935' : 'Puede establecer un nombre de dominio local (nombre de red) para su red. No es necesario modificar esta configuración a no ser que tenga una necesidad avanzada específica para hacerlo. Puede llamar a la red como usted desee, como por ejemplo «MI RED».',
'962' : 'Para configurar el router de forma que utilice PPPoE, introduzca su nombre de usuario y contraseña provistos por su ISP en los espacios correspondientes. Si no dispone de nombre de servicio o no lo conoce, deje en blanco el espacio «Nombre de servicio». Una vez introducida la información, haga clic en «Guardar». Una vez guardados los cambios, el indicador de estado de mostrará el mensaje «Conectado» si el router se ha configurado correctamente.',
'967' : 'Algunos ISP usan el protocolo PPTP para conectar a los usuarios con la central. Esto significa que tendrá que introducir algunos parámetros adicionales, que su ISP le debería haber proporcionado. Una vez que haya guardado los cambios, la luz del el indicador de estado de internet se encenderá en verde si la operación se hubiese ejecutado con éxito.',
'971' : 'Seleccione el tipo de conexión de Telstra Bigpond haciendo clic en «Guardar».',
'982' : 'Desconectar después de X...',
'983' : 'Descontecta el router del ISP tras un periodo de inactividad. Use esta opción para ahorrar dinero si su servicio de internet es por minutos.',
'htDDNS' : '¿Qué es el DDNS?',
'htDNS' : '¿Qué es el DNS?',
'htDMZ' : '¿Qué es el DMZ?',
'htLAN' : '¿Para que sirve el control de ajustes de LAN?',
'htWANMain' : '¿Qué son los ajustes de WAN?',
'htWANMAC' : '¿Qué son las direcciones MAC?',
'htWAN_PPPOE' : 'Configuración PPPoE',
'htWAN_PPTP' : 'Configuración PPTP',
'htIPv6' : '¿Qué es el IPv6?',
'htWifiID' : '¿Qué son el nombre de red y los ajustes de canal?',
'htWifiIDContent' : 'Se conoce al nombre de red como el SSID (Service Set ID).  Todos los clientes que estén conectados en su red deben conocer el SSID de su red para poder conectarse a la misma.',
'htWifiSec' : '¿Qué es la seguridad WiFi?',
'htWifiSecContent' : 'Todos los routers de Belkin son distribuidos con la seguridad WiFi habilitada.  La seguridad WiFi proporciona un nivel de protección en contra de accesos no autorizados en su red. Cuando la seguridad está habilitada, necesitará una contraseña para poder acceder a su red.',
'htWifiWPS' : '¿Qué es la instalación protegida WiFi (WPS)?',
'htWifiWPSContent' : 'Es un método óptimo diseñado para facilitar la instalación y configuración de redes WiFi con esta seguridad habilitada, ya sea en su hogar o en una oficina pequeña. Aquellos dispositivos sin WPS (instalación protegida WiFi) pueden ser añadidos a la red escogiendo el nombre de red  e introduciendo la contraseña de red.',
'htWifiGuest' : '¿Cómo se usa el acceso de invitados?',
'htWifiGuestContent' : 'Cuando la funcionalidad de acceso de invitados está activada, se crea una red WiFi separada con capacidad de conexión a internet pero no a otros dispositivos en su red.',
'htAP' : '¿Puedo usar mi router como un punto de acceso?',
'htAPContent' : 'Los routers de Belkin pueden ser configurados para actuar estrictamente como un punto de acceso inalámbrico, anulando las funciones de enrutamiento y firewall.  Esta opción de configuración del router como un punto de acceso es utilizada en su mayoría para añadir funcionalidad inalámbrica a una red por cableado ya existente.',
'htQos' : '¿Qué es el Intellistream de Belkin?',
'htDLNA' : 'Belkin Media Server con la tecnología de Twonky',
'htPortForward' : '¿En qué consiste el reenvío de puertos?',
'htPortForwardContent' : 'El reenvío de puertos permite a ordenadores conectados remotamente conectarse a un programa o servicio específico en su red local. Por ejemplo, podría usar el reenvío de puertos para administrar un servidor web (puerto 80) en su red.  La mayoría de programas moderno no necesitan usar el reenvío de puertos ya que configuran usan automáticamente los puertos que necesiten en cada momento.',
'htWanPing' : '¿Cuál es la función del bloqueo del ping de WAN (WAN ping blocking)?',
'htWanPingContent' : 'Esto proporciona un nivel de seguridad superior para evitar que usuarios externos de internet obtengan su dirección IP. Esto lo consigue ignorando aquellos pings que hayan sido originados fuera de su red.',
'htRestart' : '¿Por qué debo reiniciar mi router?',
'htRestoreFC' : '¿Qué es lo que pasa cuando se restablecen los valores de fábrica?',
'htSaveSettings' : '¿Por qué debería guardar/hacer copias de seguridad de mi configuración?',
'htRestoreSettings' : '¿Qué es lo que ocurre cuando restauro mi última configuración?',
'htSystem' : '¿Qué es la configuración del sistema?',
'htSystemContent' : 'Desde esta página, puede establecer una serie de ajustes básicos de su router, incluyendo la zona horaria y la contraseña del administrador.',
'htSelfHeal' : '¿En qué consiste la autorecuperación?',
'hLANSettings' : 'Esta página le ayudar a configurar conexiones nuevas, permitiéndole activar y desactivar el DHCP y establecer la dirección IP del router en su red local.',
'htDHCPClientList' : '¿Qué es la lista de cliente DHCP?',
'htDHCPClientListContent' : 'Esta página le muestra la dirección IP, el nombre de host y la dirección MAC de cada uno de los ordenadores conectados a su red. Si el ordenador no tiene especificado ningún nombre de host, el campo permanecerá en blanco. Haga clic en «Actualizar» para actualizar la lista.',
'hWebsiteFilters' : 'Esto actúa como un nivel de defensa contra páginas peligrosas o de contenido no apropiado. Los filtros de web escanean páginas web comparando el nombre de la página web con una lista de páginas web autorizadas.',
'hWANSettings' : 'Estos ajustes de red se refieren a la conexión que tiene con su proveedor de servicios de internet (ISP).   Seleccione de la lista el tipo de conexión que su ISP le proporciona. ',
'htChannel' : 'De una manera similar en la que la radio usa distintas cadenas de radio, su router puede transmitir en canales distintos para comunicarse con los dispositivos en su red. La mejor opción es usar el modo «Auto».',
'3430' : 'El IPv6 (Internet Protocol version 6) es una versión  del protocolo de internet (IP) creado para suceder al IPv4, por el cual se organiza la mayoría del tráfico en internet. A algunos proveedores de servicio a internet (ISP) se les están acabando las direcciones IP que puede dar a sus usuarios. El IPv6 permite a un número mayor de dispositivos la comunicación con internet. usando números mayores para crear direcciones IP.  Su ISP le confirmará si necesita usar o no el IPv6.',
'3431' : 'Tipo de conexión',
'3432' : 'Auto-Config/DHCPv6 (por defecto)',
'3433' : 'Las direcciones a continuación son proporcionadas por tu ISP. DHCPv6 ofrece opciones adicionales para ampliar la conectividad.',
'3434' : 'WAN',
'3435' : 'Dirección WAN',
'3436' : 'Puerta de enlace',
'3437' : 'LAN',
'3438' : 'Usa esta sección para configurar los ajustes de la red interna de tu router. Si cambia aquí la dirección LAN IPv6 es posible que también necesite ajustar de nuevo la configuración de red de su ordenador.',
'3439' : 'Prefijo LAN',
'3440' : 'ID de interfaz',
'3441' : 'Enlace local',
'3442' : 'DNS',
'3443' : 'Tus ajustes predeterminados de DNS IPv6 serán proporcionados, si estos existiesen, por tu proveedor de acceso a internet en las notificaciones del router WAN o en los mensajes DHCPv6.',
'3444' : 'Primario',
'3445' : 'Secundario',
'3446' : 'IPv6 sobre PPPoE',
'3447' : 'El Protocolo de Punto a Punto sobre Ethernet (PPPoE) es usado preferentemente por servicios de DSL para conectar los modems DSL a internet.',
'3448' : 'Accesa',
'3450' : 'ocultar contraseña',
'3451' : 'Nombre de usuario',
'3452' : 'Contraseña',
'3453' : 'Nombre de servicio',
'3454' : 'Túnel 6to4',
'3455' : 'Permite transmitir paquetes IPv6 sobre una red IPv4 sin tener que configurar manualmente los túneles. Este tipo de conexión es apropiada en el caso que su proveedor de acceso a internet no ofrezca compatibilidad con IPv6.',
'3456' : 'Router 6to4 Relay remoto',
'3457' : 'Pass-Through',
'3458' : 'Los dispositivos conectados al router pueden comunicarse entre ellos usando los paquetes IPv6 nativos. Los paquetes IPv6 en la red LAN se envían de forma automática a todas las interfaces LAN (puertos Ethernet y las redes inalámbricas de 2,4 GHz y 5 GHz).',
'3459' : 'Cuando la opción pass-through a través de IPv6 está activada, los paquetes IPv6 también se copian en la interfaz WAN. (Esto crea una conexión directa, no segura a internet.)',
'3460' : 'Su proveedor de internet le informará sobre la compatibilidad con IPv6.',
'3461' : 'IPv6 estática',
'3462' : 'Las direcciones IPv6 estáticas no se usan muy a menudo ya que presentan dificultades para su gestión. Las IPv6 estáticas no deberían ser usadas con aquellos dispositivos que son conectados a múltiples redes, como por ejemplo ordenadores portátiles y teléfonos móviles.',
'3463' : 'Local Pass-Through Only (sólo transferencia local)',
'3464' : 'La opción Pass-Through IPv6 WAN está desactivada. Todos los servicios locales en su LAN y en su WiFi pueden aún comunicarse entre ellos directamente, aunque el router no enviará ni recibirá paquetes IPv6 a o desde internet. Tampoco responderá directamente a ningún paquete IPv6.',
'3465' : 'Tu proveedor de acceso a internet no proporciona conectividad IPv6. Consulta a tu proveedor de acceso a internet sobre sus servicios de IPv6 o para establecer la conexión.',
'3466' : 'El modo de Local Pass-Through Only («sólo transferencia local») es el predeterminado para que tus dispositivos se envíen paquetes IPv6 entre sí.  La otra opción es la de usar «6to4 Tunnel» (Túnel 6to4) para poder acceder a internet a través de una conexión IPv4.',
'3467' : 'Cada caja debería contener cuatro dígitos hexadecimales (0-9 y a-f).',
'3468' : 'Por favor, introduzca una dirección no-multicast. Las direcciones multicast empiezan generalmente con FF.',
'3469' : 'La longitud del prefijo debería ser 1-127. La longitud del prefijo es normalmente 64,56 o 48.',
'3470' : 'No existe conexión IPv4.',
'3471' : 'Esta configuración de DNS es anulada por los Controles Parentales.',
'3472' : 'Filtros de pàaginas web',
'3473' : 'Selecciona PPPoE en «Internet WAN > Ajustes de la conexión», antes de seleccionar PPPoE sobre IPv6.',
'3474' : 'La conexión a internet se ha interrumpido. Consulta tu tipo de conexión WAN o contacta tu proveedor de acceso a internet.',
'3475' : 'DNS por defecto proporcionadas por tu proveedor de acceso a internet',
'gtTryManu' : 'Si no está seguro de su tipo de conexión, puede ',
'gtSetManual' : 'configurarla manualmente ',
'2100' : 'Acceso denegado. Introduzca la contraseña del router para permitir que se acceda temporalmente a la página o los servicios bloqueados.',
'2101' : 'Página de bienvenida',
'2102' : 'IR A',
'354' : 'Esta página le muestra la dirección IP, el Nombre de Host y la dirección MAC de cada uno de los ordenadores conectados a su red. Si el ordenador no tiene especificado ningún nombre de host, el campo de Nombre de host estará en blanco. Al pulsar «Actualizar» se actualizará la lista.',
'355' : 'Dirección IP',
'356' : 'Nombre de host',
'357' : 'Dirección MAC',
'370' : 'Esta página le ayudar a configurar conexiones nuevas, permitiéndole activar y desactivar el DHCP, y establecer la dirección IP del router en su red local.',
'371' : 'Dirección IP',
'372' : 'Máscara de subred',
'373' : 'Servidor DHCP',
'378' : 'La función de servidor DHCP facilita en gran medida la tarea de configurar una red asignando direcciones IP a cada ordenador de la red. No es necesario efectuar cambios aquí.',
'379' : 'Primera dirección del grupo de direcciones IP',
'380' : 'Última dirección del grupo de direcciones IP',
'381' : 'Tiempo límite de concesión',
'382' : 'Para siempre',
'383' : 'Media hora',
'384' : '1 hora',
'385' : 'Dos horas',
'386' : 'Medio día',
'387' : 'Un día',
'388' : 'Dos días',
'389' : 'Una semana',
'390' : 'Dos semanas',
'391' : 'El tiempo que el servidor DHCP reservará la dirección IP para cada ordenador.',
'392' : 'Local Domain Name (nombre de dominio local)',
'393' : 'Opcional',
'394' : 'Una función que le permite asignar un nombre a su red.',
'397' : 'El grupo de direcciones IP debe encontrarse en la misma subred que la dirección IP de la puerta de enlace.',
'398' : 'La última dirección IP debe ser mayor que la primera dirección IP.',
'399' : 'La dirección IP de LAN no puede encontrarse en el grupo de direcciones de DHCP.',
'400' : 'La dirección IP que elija debería ser una IP no enrutable.',
'401' : 'Dirección IP de Lan no válida, el primer número no puede ser 127 ni 0',
'404' : 'Introduzca manualmente la nueva dirección LAN en la barra de dirección de su navegador',
'406' : '¿Seguro que quiere modificar la dirección IP de LAN?',
'416' : '192.168.y.x.x (en donde y es una cifra entre 0 y 255 y x es una cifra entre 1 y 254.)',
'417' : '10.y.y.x  (en donde y es una cifra entre 0 y 255 y x es una cifra entre 1 y 254.)',
'418' : '172.z.y.x  (en donde z es una cifra entre 16 y 31, y es una cifra entre 0 y 255 y x es una cifra entre 1 y 254).',
'713' : 'Nombre de dominio local no válido',
'1228' : 'La primera dirección del grupo de IP es incorrecta.',
'1229' : 'La última dirección del grupo de IP es incorrecta.',
'1240' : 'La dirección IP de LAN no es correcta.',
'3' : 'Accesa',
'408' : 'Para poder cambiar cualquiera de los ajustes, debes acceder con una contraseña. Si no ha establecido aún una contraseña personalizada, deje este campo en blanco y haga clic sobre «Enviar».',
'410' : 'Valor predeterminado = dejar en blanco',
'412' : 'Enviar',
'1371' : 'Contraseña incorrecta',
'1372' : 'Confirme su contraseña e inténtelo de nuevo.',
'124' : 'El router conserva un registro de toda actividad que tiene lugar en el mismo como, por ejemplo, las entradas y salidas y todos los intentos de acceder al router desde Internet.',
'125' : 'Archivo del registro',
'126' : 'Guardar',
'127' : 'Borrar',
'1302' : 'Registro del sistema',
'1303' : 'Registro del firewall',
'8' : 'Ajustes LAN',
'9' : 'Ajustes de red local',
'10' : 'Dispositivos conectados',
'2500' : 'Ruta estática',
'11' : 'Internet WAN',
'335' : 'Tipo de conexión',
'690' : 'Dinámica',
'692' : 'Estática',
'694' : 'PPPoE',
'696' : 'PPTP',
'698' : 'Cable Telstra BigPond/OptusNet',
'42' : 'IPV6',
'43' : 'Conexión IPv6',
'13' : 'DNS',
'14' : 'Dirección MAC',
'16' : 'WiFi',
'17' : 'Nombre de red',
'18' : 'Seguridad',
'803' : 'WEP de 128 bit',
'804' : 'WEP de 64 bit',
'1296' : 'WPA/WPA2-Personal (PSK)',
'1297' : 'WPA/WPA2-Enterprise (RADIUS)',
'805' : 'WPA (con servidor Radius)',
'1319' : 'Wi-Fi Protected Setup',
'777' : 'Utilizar como punto de acceso',
'833' : 'Control de direcciones MAC',
'1613' : 'Acceso de invitados',
'1850' : 'Controles parentales',
'1851' : 'Filtros de pàaginas web',
'1710' : 'Control de acceso',
'20' : 'Media',
'7151' : 'Cuadro de tráfico',
'7000' : 'Media Server',
'1780' : 'Torrent Mate',
'1790' : 'Software opcional',
'23' : 'Firewall',
'24' : 'Reenvío de puertos',
'25' : 'Filtros para IP de clientes',
'26' : 'Filtrado de direcciones MAC',
'27' : 'DMZ',
'41' : 'DDNS',
'28' : 'Bloquear ping a WAN',
'29' : 'Registro de seguridad',
'30' : 'Utilidades',
'32' : 'Reiniciar el router',
'34' : 'Restablecer la configuración de fábrica',
'35' : 'Guardar/Copia de seguridad de la configuración',
'36' : 'Restaurar una configuración anterior',
'37' : 'Actualizar el firmware',
'38' : 'Ajustes del sistema',
'39' : 'Self Healing',
'1900' : 'Tarjeta de',
'132' : 'La gama de puertos de entrada no es correcta.',
'133' : 'La gama de puertos privados no es correcta.',
'134' : 'Esta función le permitirá enrutar llamadas externas (Internet) para servicios como servidor web (puerto 80), servidor FTP (puerto 21) y otras aplicaciones a través de su router hasta su red interna.',
'276' : 'Borrar entrada',
'277' : 'Añadir',
'278' : 'Descripción',
'280' : 'Tipo',
'281' : 'Dirección IP privada',
'282' : 'Puerto privado',
'376' : 'todo',
'411' : 'Borrar',
'648' : 'Carácter no válido',
'672' : 'Número no válido Deberá estar entre 1..65535',
'905' : 'Todas las entradas están llenas.\nElimine algunas entradas y pruebe de nuevo.',
'906' : '¿Desea borrar la entrada?',
'907' : '¿Desea borrar todas las entradas?',
'1241' : 'La dirección IP de WAN no es válida.',
'1250' : 'El puerto no es válido.',
'1362' : 'La descripción está vacía',
'1601' : 'Auto',
'2055' : 'Superposición del intervalo de puertos de entrada',
'2056' : 'Superposición del rengo de puertos privados',
'3310' : 'Intellistream',
'3311' : 'Optimiza tu conexión a internet.',
'3312' : 'Media Server',
'3313' : 'Comparte contenido multimedia entre los dispositivos de la red.',
'3314' : 'Controles parentales',
'3315' : 'Filtros DNS de seguridad para protección en internet',
'3316' : 'Conexión IPv6',
'3317' : 'Tu conexión ya es compatible con IPv6',
'1852' : 'Esto actúa como un nivel de defensa contra páginas peligrosas o de contenido no apropiado. Los filtros de web escanean páginas web comparando el nombre de la página web con una lista de páginas web autorizadas.',
'1854' : 'Opciones de filtrado',
'1856' : 'Sin filtro',
'1858' : 'Bloquee el acceso a páginas web peligrosas de contenido malware',
'1859' : 'Bloquee páginas web peligrosas con contenido malware, phishing y scam.',
'1860' : 'Bloquee el acceso a páginas web peligrosas con contenido malware y a páginas de contenido adulto',
'1861' : 'Bloquee el acceso a páginas web peligrosas de malware, phishing y scam, y a páginas de contenido sexual explícito.',
'1862' : 'Bloquee el acceso a páginas web tanto de contenido adulto e inapropiado como de malware preligroso para tu ordenador',
'1863' : 'Bloquee páginas web con contenido malware, phishing y scam, además de páginas pornográficas y otros contenidos para adultos como aborto, alcohol, crimen, sectas, drogas, juego, suicidio o violencia.',
'1864' : 'Para cambiar sus direcciones DNS, vaya a WAN > {DNS}',
'7152' : 'Los cuadros de abajo muestran el tráfico WAN tanto de salida como de entrada, priorizado en distintas categorías. Estos muestran información sobre los últimos 10 minutos (se actualizan automáticamente cada 5 segundos).',
'7154' : 'Leyenda del tráfico',
'7155' : 'Tráfico de entrada',
'7156' : 'Tráfico de salida',
'7157' : 'Para activar esta función, debe activar el Intellistream',
'7158' : 'aquí',
'7159' : '.',
'7160' : 'Control y conectividad de la red',
'7161' : 'Cuadro de voz, vídeo y juego en línea',
'7162' : 'Vídeo Web y Web',
'7163' : 'Email y VPN',
'7164' : 'Descargas, torrents y otros',
'7170' : 'Bytes/Seg',
'7174' : 'Momento del día/Horas:Minutos',
'326' : 'Red local',
'327' : 'MAC de LAN/WLAN',
'332' : 'Servidor DHCP',
'333' : 'Ajustes de Internet',
'334' : 'Dirección MAC de WAN',
'337' : 'IP de WAN',
'338' : 'Puerta de enlace predeterminada',
'339' : 'Dirección DNS',
'gtGuestName' : 'Invitado SSID',
'gtGuestKey' : 'Clave de invitado',
'347' : 'Debe registrarse para poder modificar cualquiera de los ajustes.',
'2022' : 'Sólo módem',
'2031' : 'Conectar',
'2032' : 'Desconectar',
'2033' : 'Margen de ruido',
'2034' : 'Canal de bajada',
'2035' : 'Canal de subida',
'2036' : 'Atenuación(dB)',
'2037' : 'Potencia de salida (dBm)',
'2038' : 'Velocidad de transmisión de datos (Kbps)',
'tDashboard' : '¡Bienvenido al panel de control de su router Belkin!',
'rtFeature' : 'Características',
'rtLink' : 'Enlaces del router',
'p1310t001' : 'Detalles de la conexión',
'p1310t002' : 'Probar de nuevo de la conexión',
'p1310t003' : 'Última prueba',
'p1310t004' : 'Velocidad de descarga',
'p1310t005' : 'Velocidad de subida',
'p1000t001' : 'Dispositivos conectados',
'p1000t002' : 'Ver todo',
'2501' : 'Por favor, introduzca los siguientes parámetros de configuración',
'2502' : 'Dirección de red',
'2503' : 'Máscara de subred',
'2504' : 'Puerta de enlace',
'396' : 'El número de máscara de subred que ha introducido no es válido.',
'1231' : 'La puerta de enlace no es válida.',
'1361' : 'Dirección IP no válida, el primer número debe estar entre 1 y 254.',
'1800' : 'La dirección IP y la máscara de subred no coinciden.',
'Support1t011' : 'Leer toda la información.',
'Support2t011' : 'Leer toda la información.',
'Support2t012' : 'Visite la siguiente URL en un dispositivo que esté conectado a internet y aprenda como resolver el problema usted mismo: <STRONG>www.belkin.com/support/asdlkj</STRONG>',
'Support3t011' : 'Leer toda la información.',
'Support3t012' : 'Visite la siguiente URL en un dispositivo que esté conectado a internet y aprenda como resolver el problema usted mismo: <STRONG>www.belkin.com/support/asdlkj</STRONG>',
'Support6t036' : 'Leer toda la información.',
'425' : 'Esto fijará de nuevo los ajustes de fábrica del router. Le recomendamos que <a href="ut_save.html">guarde o haga una copia de seguridad de su configuración</a> antes de restablecer los ajustes originales de fábrica. Guardar su configuración del router le permitirá restablecerla posteriormente, en caso de que sus ajustes se pierdan o sean modificados.',
'426' : 'AVISO: ¡Se borrarán todos sus ajustes! \n¿Está seguro de que quiere hacer esto?',
'427' : 'La restauración de los ajustes originales de fábrica le levará unos $s segundos. No apague el router durante este proceso.',
'428' : 'No restablecerá la configuración predeterminada de fábrica. ¡No se perderá ningún ajuste!',
'429' : 'Restablecer configuración predeterminada',
'301' : 'Esto reiniciará su router cada semana para mantener su red en perfecto estado de mantenimiento.',
'302' : 'Inicializar automáticamente el router',
'303' : 'Establecer los días',
'304' : 'Establecer la hora',
'527' : 'Esto le permite implementar en su router cualquier configuración que haya guardado previamente.',
'528' : 'Restaurar',
'529' : 'Introduzca el nombre del archivo que contiene la copia de seguridad de los ajustes.',
'530' : '¿Desea continuar y restablecer los ajustes?',
'531' : 'Tras el restablecimiento de los ajustes, es posible que el router no responda los comandos durante un plazo de un minuto.\n\nEsto es normal. No apague el dispositivo mientras que esta operación dure.',
'451' : 'Guardar su configuración actual del router le permitirá restablecerla posteriormente, en caso de que sus ajustes se pierdan o sean modificados. Le recomendamos que guarde su configuración antes de ejecutar cualquier actualización de firmware.',
'539' : 'Guardar',
'130' : 'Bien no ha introducido todas las direcciones IP, o bien alguno de los números introducidos es incorrecto. El número en el recuadro de entrada de la dirección IP deberá ser un número entre 1 y 254.',
'541' : 'Contraseña de administrador:',
'542' : 'El router que se le ha suministrado viene SIN contraseña. Si desea incluir una contraseña para más seguridad, puede establecer una aquí.',
'543' : 'Escriba la contraseña actual',
'544' : 'Escriba la nueva contraseña',
'545' : 'Confirme la nueva contraseña',
'546' : 'Tiempo límite de acceso',
'547' : '(1-99 minutos)',
'548' : 'Hora y zona horaria:',
'549' : 'Enero',
'550' : 'Establezca su zona horaria. Si reside en una zona en la que se realiza el cambio de hora según el horario de verano, asegúrese de marcar la casilla correspondiente.',
'551' : 'Zona horaria',
'606' : 'Horario de verano',
'607' : 'Cambiar la hora automáticamente de acuerdo al horario de verano',
'608' : 'Administración a distancia:',
'609' : '¡FUNCIONALIDAD AVANZADA!',
'610' : 'La gestión a distancia le permite realizar cambios a los ajustes de su router desde cualquier sitio en Internet. Antes de activar esta función,',
'611' : 'ASEGÚRESE DE HABER ESTABLECIDO LA CONTRASEÑA DEL ADMINISTRADOR.',
'642' : 'El uso de la opción de gestión a distancia conlleva un aumento de riesgo para su red. Le recomendamos que fije una contraseña y que mantenga esta opción activa solo por cortos periodos de tiempo, únicamente cuando realmente necesite usarla.',
'612' : 'Cualquier dirección IP puede gestionar el router a distancia.',
'613' : 'Únicamente esta dirección IP puede gestionar &nbsp;&nbsp;&nbsp;el router a distancia',
'614' : 'Activar la administración a distancia Activar / Desactivar',
'615' : 'Se ha usado la asignación de puerto en el servidor virtual.',
'616' : 'La asignación de IP entra en conflicto con la dirección IP WAN actual.',
'617' : 'Activación de UPNP:',
'618' : 'Le permite activar o desactivar la función UPNP del router. Si se emplean aplicaciones compatibles con UPnP, activar UPnP permitirá que dichas aplicaciones configuren automáticamente el router.',
'619' : 'Activar / Desactivar UPNP',
'620' : 'Activación de la actualización automática del firmware:',
'621' : 'Le permite comprobar automáticamente la disponibilidad de actualizaciones del firmware para su router.',
'622' : 'Activar/Desactivar la actualización automática del firmware',
'623' : 'La contraseña actual no es válida',
'624' : 'Las nuevas contraseñas introducidas no coinciden. Vuelva a intentarlo de nuevo.',
'626' : 'La longitud de la contraseña no es válida. La longitud máxima de la contraseña es 12 y la longitud mínima de la contraseña es 3',
'628' : 'Se recomienda que establezca su contraseña de administrador.',
'629' : 'Servidor NTP principal',
'630' : 'Servidor NTP secundario',
'640' : 'Puerto de acceso remoto',
'738' : 'Los números que ha introducido para el tiempo de inactividad no son válidos. El número debe ser un entero entre 1 y 99',
'796' : 'Al activar el modo Turbo se permite al router o punto de acceso utilizar la función de envío de ráfagas de tramas, para obtener el máximo rendimiento del router o punto de acceso con clientes 802.11g. El modo Turbo funcionará con clientes 802.11g compatibles. Los clientes 802.11g de Belkin que usen la última versión del controlador son compatibles con el modo Turbo. Los clientes que no soporten el Modo Turbo operarán normalmente cuando esté activado el Modo Turbo.',
'1282' : 'Febrero',
'1283' : 'Marzo',
'1284' : 'Abril',
'1285' : 'May',
'1286' : 'Junio',
'1287' : 'Julio',
'1288' : 'Agosto',
'1289' : 'Septiembre',
'1290' : 'Octubre',
'1291' : 'Noviembre',
'1292' : 'Diciembre',
'1373' : 'Australia',
'1374' : 'Nueva Zelanda',
'1375' : 'América del Norte',
'1376' : 'Europa',
'1377' : 'Asia Pacífico',
'2300' : '(GMT-12:00) Enewetak, Kwajalein',
'2301' : '(GMT-11:00) Isla Midway, Samoa',
'2302' : '(GMT-10:00) Hawái',
'2303' : '(GMT-09:00) Alaska',
'2304' : '(GMT-08:00) Hora del Pacífico (EE.UU. y Canadá); Tijuana',
'2305' : '(GMT-07:00) Arizona',
'2306' : '(GMT-07:00) Hora de las montañas (EE.UU. y Canadá)',
'2307' : '(GMT-06:00) Hora central (EE.UU. y Canadá)',
'2308' : '(GMT-06:00) México DF',
'2309' : '(GMT-06:00) Tegucigalpa',
'2310' : '(GMT-06:00) Saskatchewan',
'2311' : '(GMT-05:00) Bogotá, Lima, Quito',
'2312' : '(GMT-05:00) Hora del Este (EE.UU. y Canadá)',
'2313' : '(GMT-05:00) Indiana (Este)',
'2314' : '(GMT-04:00) Hora del Atlántico (Canadá)',
'2315' : '(GMT-04:00) Caracas, La Paz',
'2316' : '(GMT-04:00) Santiago',
'2317' : '(GMT-03:00) Terranova',
'2318' : '(GMT-03:00) Brasilia',
'2319' : '(GMT-03:00) Buenos Aires, Georgetown',
'2320' : '(GMT-02:00) Atlántico medio',
'2321' : '(GMT-01:00) Islas Azores, Cabo Verde',
'2322' : '(GMT) Casablanca, Monrovia',
'2323' : '(GMT) Hora del meridiano de Greenwich: Lisboa, Londres, Edinburgo',
'2324' : '(GMT) Hora del meridiano de Greenwich: Dublin',
'2325' : '(GMT+01:00) Ámsterdam, Berlín, Berna, Roma',
'2326' : '(GMT+01:00) Estocolmo, Viena, Belgrado',
'2327' : '(GMT+01:00) Bratislava, Budapest, Liubliana',
'2328' : '(GMT+01:00) Praga, Bruselas, Copenhague, Madrid',
'2329' : '(GMT+01:00) París, Sarajevo, Skopje',
'2330' : '(GMT+01:00) Varsovia, Zagreb',
'2331' : '(GMT+02:00) Atenas, Estambul, Minsk Vilna, Sofía',
'2332' : '(GMT+02:00) Bucarest',
'2333' : '(GMT+02:00) El Cairo',
'2334' : '(GMT+02:00) Harare, Pretoria',
'2335' : '(GMT+02:00) Helsinki, Riga, Tallín',
'2336' : '(GMT+02:00) Israel',
'2337' : '(GMT+03:00) Bagdad, Kuwait, Nairobi, Riad',
'2338' : '(GMT+03:00) Moscú, San Petersburgo, Volgogrado, Kazán',
'2339' : '(GMT+03:00) Teherán',
'2340' : '(GMT+04:00)Abu Dabi, Muscat, Tiflis',
'2341' : '(GMT+04:30) Kabul',
'2342' : '(GMT+05:00) Islamabad, Karachi, Ekaterimburgo',
'2343' : '(GMT+05:30) Nueva Delhi',
'2344' : '(GMT+06:00) Almaty, Daka',
'2345' : '(GMT+07:00) Bangkok, Yakarta, Hanoi',
'2346' : '(GMT+08:00) Pekín, Chongqing, Urumqi',
'2347' : '(GMT+08:00) Hong Kong, Perth, Singapur, Taipei',
'2348' : '(GMT+09:00) Tokio, Osaka, Sapporo',
'2349' : '(GMT+09:00) Seúl',
'2350' : '(GMT+09:30) Adelaida , Darwin',
'2351' : '(GMT+10:00) Brisbane',
'2352' : '(GMT+10:00) Camberra, Melbourne, Sydney',
'2353' : '(GMT+10:00) Hobart',
'2354' : '(GMT+10:00) Guam, Puerto Moresby',
'2355' : '(GMT+11:00) Magadán, Islas Salomón, Nueva Caledonia',
'2356' : '(GMT+12:00) Wellington, Auckland',
'2357' : '(GMT+12:00) Fiyi',
'2358' : '(GMT+13:00) Nukualofa.',
'2370' : 'D',
'2371' : 'L',
'2372' : 'T',
'2373' : 'W',
'2374' : 'J',
'2375' : 'F',
'2376' : 'S',
'2401' : 'Modo Eco',
'2402' : 'Atenuar indicadores LED del panel frontal',
'2403' : 'Desactivar la señal inalámbrica de',
'2404' : 'excepto',
'2405' : 'Esta función le permite reducir la intensidad de los LED de la parte frontal del router para ahorrar energía. También puede desactivar la señal inalámbrica en horas determinadas.',
'2406' : 'La hora de inicio no puede ser más tarde que la hora de finalización',
'322' : 'Versión del firmware',
'431' : 'De vez en cuando, es posible que Belkin publique una nueva versión del software del router. Estas actualizaciones contienen mejoras y correcciones a problemas de uso para su router.',
'432' : '<b>NOTA:</b>Por favor,<a href="ut_save.html">haga una copia de seguridad de sus ajustes actuales</a>antes de actualizar a una nueva versión de firmware.',
'433' : 'Haga clic aquí',
'434' : 'para ir a la página donde podrá ejecutar una operación de Guardar/Copia de seguridad de ajustes actuales.',
'435' : 'Buscar nueva versión del firmware',
'436' : 'Búsqueda de firmware',
'437' : 'Actualizar el firmware',
'438' : 'Actualizar',
'439' : 'Especifique la ubicación del archivo de actualización. Introduzca la ruta y el nombre del archivo o haga clic en «Examinar»,  para buscar la ubicación del archivo.',
'440' : '¿Está seguro de que desea continuar con la actualización?',
'441' : 'Al final de la actualización, es posible que el router no responda a los comandos durante un plazo de un minuto. Esto es normal. No apague ni reinicie el router durante ese tiempo.',
'1198' : 'Actualización del firmware en curso.',
'534' : 'Reiniciar el router',
'535' : '¿Está seguro de que desea reiniciar el router? Reiniciar el router no afectará a su configuración',
'536' : 'Dele unos $s segundos al router para que pueda completar el reinicio. No apague el router antes de que se haya completado el reinicio.',
'7001' : 'Disfrute de su música, fotos y vídeos de una manera confortable a través de cualquier dispositivo DLNA conectado a su red. Se alimenta a través de un servidor Twonky.',
'7002' : 'Servidor DLNA',
'7003' : 'Nombre del servidor',
'7004' : 'Unidades compartidas:',
'7005' : 'Listo',
'7006' : 'Indexando...',
'7007' : 'Distribuyendo:',
'7008' : 'vídeos',
'7009' : 'canciones',
'7010' : 'fotos',
'7011' : 'No compartido con la red.',
'7012' : 'No hay unidades USB conectadas al router.',
'7016' : 'Actualizar índice',
'7017' : 'Introduzca un nombre para el media server que le sea fácil de recordar',
'7018' : 'Carácter no permitido',
'7019' : 'Tiene más contenido multimedia del que el router es capaz de indexar, por lo que se están distribuyendo los primeros',
'7020' : 'elementos.',
'7021' : 'Twonky es una gama de productos de software digital para el hogar creados por PacketVideo Corporation (PV).',
'7022' : 'No se puede indexar la unidad de solo lectura.',
'7023' : 'MB',
'7024' : 'GB',
'7025' : 'TB',
'7026' : 'vídeo',
'7027' : 'canción',
'7028' : 'foto',
'770' : 'Utilice esta opción sólo para conexiones de cables Bigpond y cables OptusNet. ',
'771' : 'IMPORTANTE:',
'775' : '3) Vuelva a conectar el cable de alimentación en el router de Belkin.',
'776' : 'Para confirmar que se ha establecido la conexión a Internet, abrir un navegador de Internet como Internet Explorer, Firefox o Safari y comprobar que se puede navegar por la web.',
'731' : 'Nombre de usuario',
'489' : 'Contraseña',
'732' : 'Volver a introducir contraseña',
'756' : 'Introduzca de nuevo su contraseña',
'1379' : 'Bien no ha introducido todos los números de la IP, o bien algunos de los números introducidos es incorrecto. La dirección IP debería ser del tipo  x.y.y.x(donde y es un valor entre 0 y 255, y x es un valor entre 1 y 254).',
'709' : 'Para insertar los parámetros de su dirección IP dinámica, escriba los valores aquí abajo y haga clic en «Guardar».',
'710' : 'Nombre de host',
'711' : 'Nombre de Host = un nombre que algunos Proveedores de servicios de Internet requieren para conectar con su sistema.',
'712' : 'Cambiar la dirección MAC de WAN',
'330' : 'Dirección IP',
'331' : 'Máscara de subred',
'659' : 'MTU no válido, deberá estar entre 500 y 1500.',
'730' : 'Para insertar los parámetros de su dirección IP dinámica, escriba los valores aquí abajo y haga clic en «Guardar» (Guardar).',
'733' : 'Nombre de servicio (Opcional)',
'734' : 'MTU (500-1500)',
'735' : 'No modifique la configuración de MTU a no ser que su ISP requiera un valor distinto.',
'736' : 'Desconectar después de',
'737' : 'minutos de inactividad.',
'741' : 'Valor MTU no válido',
'2005' : 'IP asignado por el ISP',
'2021' : 'Haga clic aquí para introducir sus datos DNS',
'2023' : 'No se permite el uso de doble comillas',
'2024' : 'El nombre de usuario contiene caracteres no aceptables',
'2025' : 'No se permite el uso de la oblicua inversa',
'2030' : 'Bien no ha introducido todos los números de la pasarela predeterminada, o bien algunos de los números introducidos es incorrecto. Los números deben ser entre 0 y 255',
'2052' : 'La contraseña contiene caracteres no aceptables (<,> y &)',
'691' : 'El tipo de conexión dinámica es la más habitual. Si tiene un módem de cable, entonces dispondrá probablemente de una conexión dinámica. Si tiene un módem por cable o no está seguro de su tipo de conexión, emplee ésta.',
'723' : 'Incluye los ISPs que requieren un nombre de host y los ISPs que establecen la conexión con una dirección MAC específica.',
'693' : 'Un tipo de conexión de dirección IP Estática es menos común que otros tipos de conexión. Utilice esta selección sólo si su ISP le ha proporcionado una dirección IP que no cambia nunca.',
'724' : 'El router es compatible con una conexión con un ISP que asigna una dirección IP estática.',
'695' : 'Si emplea un módem DSL y/o su ISP le ha proporcionado una nombre de usuario y una contraseña, entonces su tipo de conexión es PPPoE. Utilice este tipo de conexión.',
'725' : 'El router admite un tipo de conexión dinámica que requiere un acceso de PPPoE para la autenticación.',
'697' : 'Algunos ISP usan el protocolo PPTP para conectar a los usuarios con la central. Esto significa que tendrá que introducir algunos parámetros adicionales, que su ISP le debería haber proporcionado. Una vez que haya guardado los cambios, la luz del el indicador de estado de internet se encenderá en verde si la operación se hubiese ejecutado con éxito.',
'726' : 'Para uso único con aquellos ISP que requieran un metodo de conexión PPTP.',
'699' : 'Utilice esta opción sólo para conexiones de cables Bigpond y cables OptusNet.',
'728' : 'Usuarios australianos SOLAMENTE. El router soporta la conexión con Telstra BigPond.',
'2019' : 'Para insertar los parámetros de configuración de su módem, escriba los valores aquí abajo y haga clic en «Guardar».',
'tBackToConnectionType' : 'Volver a «Tipo de conexión»',
'759' : 'Para insertar su parámetros de la dirección IP estática escriba los valores aquí abajo y haga clic en «Guardar».',
'761' : 'Máscara de subred',
'762' : 'Dirección de la puerta de enlace del ISP',
'754' : 'Haga clic aquí para introducir sus datos DNS',
'715' : 'Cada dispositivo en su red tiene una dirección de hardware única (dirección MAC), que lo identifica para los otros dispositivos en la red y en internet.  Algunos proveedores de servicios de internet (ISP) requieren que introduzca la dirección MAC de su tarjeta de red o router antiguo en la configuración del router. Si no está seguro, introduzca simplemente la dirección MAC del ordenador que se encontraba originariamente conectado al módem antes de instalar el router.',
'716' : 'Dirección MAC de WAN',
'717' : 'Clonar la dirección MAC del ordenador',
'718' : 'Clonar',
'721' : 'La pestaña Internet/WAN es donde configurará su router para conectar con su proveedor de servicios de internet (ISP). El router es capaz de conectarse al sistema de prácticamente cualquier proveedor de servicios de internet siempre que hayan sido configurados correctamente los ajustes del router para su tipo de conexión al ISP. Para configurar el router para que se conecte a su ISP, haga clic sobre «Tipo de conexión», en la pestaña Internet/WAN en la parte izquierda de la pantalla.',
'722' : 'Tipos de conexión compatibles:',
'htWANMainContent' : 'Seleccionar tipo de conexión:',
'700' : 'Siguiente',
'744' : 'Cuenta PPTP',
'745' : 'Contraseña',
'746' : 'Volver a introducir contraseña',
'747' : 'Nombre de host',
'1770' : 'IP asignada por el ISP',
'1771' : 'Sí',
'1772' : 'No',
'1773' : 'Dirección de servicio',
'750' : 'Máscara de subred',
'778' : 'El router puede ser configurado para actuar estrictamente como un punto de acceso, anulando las funciones de enrutamiento y firewall. Para ello, seleccione «Enable» (Activar) y escriba la dirección IP que desea asignar al punto de acceso.',
'779' : 'Modo de punto de acceso:',
'781' : 'Especificar mascara de subnet',
'801' : 'Modo de seguridad',
'806' : 'En este apartado puede configurar la seguridad inalámbrica y la encriptación. Se debe activar la seguridad para garantizar la máxima seguridad inalámbrica. El WPA (Wi-Fi Protected Access) ofrece cambios de contraseña dinámicos y constituye la mejor solución de seguridad. En entorno inalámbricos, donde no todos los dispositivos admiten el WPA, se debe emplear WEP (Wired Equivalent Privacy).',
'377' : 'Auto',
'487' : 'ENCENDIDO',
'488' : 'APAGADO',
'787' : 'Para efectuar cambios en los ajustes inalámbricos del router, realice los cambios aquí. Haga clic sobre «Guardar» para guardar las configuraciones.',
'788' : 'Canal inalámbrico',
'789' : 'SSID',
'790' : 'Modo inalámbrico',
'794' : 'Emitir SSID',
'797' : 'Modo protegido',
'1300' : 'Canal de extensión',
'1301' : 'Ancho de banda',
'1304' : '802.11e/WMM QoS',
'852' : 'La longitud de la clave precompartida debe ser de 8 a 63 o 64 hex',
'856' : 'Wi-Fi Protected Access (WPS) con una clave precompartida: la clave es una contraseña, en la forma de una palabra, frase o una serie de letras y números. La clave deberá tener entre<b>8</b> y <b>63</b> caracteres de longitud y puede incluir espacios y símbolos, o solo <b>64</b> Hex (0-F). Cada cliente que se conecte a la red deberá emplear la misma clave (clave precompartida).',
'115' : 'Bien no ha introducido todos los dígitos hexadecimales o bien algunos de los dígitos hexadecimales introducidos es incorrecto. Un dígito hexadecimal puede ser un número entre 0 y 9 o una letra de la A a la F.',
'308' : '<b>SPI</b> Stateful Packet Inspection (Inspección de paquetes de datos). SPI es el tipo de seguridad de Internet de nivel corporativo proporcionada por su puerta de enlace de red doméstica HomeConnect. Utilizando SPI, la pasarela actúa como un «firewall», protegiendo a su red de los piratas informáticos.',
'808' : 'ATENCIÓN:',
'809' : 'Para generar automáticamente pares hexadecimales utilizando una frase de paso, escriba la frase de paso aquí y pulse el botón de la derecha.',
'810' : 'Frase de paso',
'811' : 'Generar',
'812' : 'Introduzca una Frase de paso',
'814' : 'Clave',
'818' : '(pares de dígitos hexadecimales)',
'296' : '<b>Dirección IP</b> IP significa Internet Protocol (Protocolo de Internet). Una dirección IP se compone de una serie de números separados por periodos que identifica a un único y exclusivo host de Internet. Ejemplo 192.34.45.8.',
'298' : '<b>ISP</b> Internet Service Provider (Proveedor de servicios de internet). Un ISP es una empresa que proporciona conectividad a Internet a clientes particulares y a otras empresas u organizaciones.',
'807' : '(13 pares de dígitos hexadecimales)',
'813' : 'La clave no está completa.',
'821' : 'no está completa',
'1190' : '<br>Puede registrarse para obtener su nombre de host DNS dinámico en http://www.dyn.org<br>',
'1339' : 'Se recomienda usar WPA/WP2 cuando WPS esté activado.',
'1363' : 'En progreso: por favor, espere...',
'1364' : 'Error detectado: inténtelo de nuevo',
'1365' : 'Error superposición de sesión: espere 60 segundos antes de comenzar el proceso de nuevo, o intente conectarse manualmente a esta red por medio de su gestor del cliente.',
'1366' : 'Éxito: el dispositivo está conectado al router.',
'1370' : '¡PIN no válido! El dispositivo PIN contiene cuatro u ocho dígitos numéricos. Verifíquelo y pruebe de nuevo.',
'1620' : 'Iniciando: pulse el botón WPS en el dispositivo cliente en el curso de dos minutos.',
'1621' : 'Iniciándose: inicie el WPS en el dispositivo cliente en dos minutos.',
'1622' : 'Límite de tiempo: ningún cliente se conecta al router.',
'1623' : 'Mensaje WPS',
'1393' : 'Botón WPS',
'1320' : 'La configuración protegida Wi-Fi (Wi-Fi Protected Setup o WPS) es el método estándar del sector que simplifica la instalación y la gestión de la seguridad de las redes WiFi. Podrá instalar y conectarse de un modo sencillo a una red 802.11 con tecnología WPA con los dispositivos certificados WPS por medio de un número de información personal o PIN, o al método PBC (Push Button Configuration). Los sistemas antiguos sin tecnología WPS pueden añadirse a la red gracias al método tradicional de configuración manual.',
'1321' : 'Método PIN',
'1322' : 'Introduzca el PIN desde el dispositivo cliente y haga clic en «Registrarse». Después, en un plazo de 2 minutos, inicie WPS en el dispositivo cliente desde el gestor de redes inalámbricas o aplicación WPS.',
'1323' : 'Introduzca el PIN del dispositivo cliente',
'1324' : 'Registrarse',
'1325' : 'Si está disponible un registrador externo, también puede introducir el PIN del router en el registrador externo. Para cambiar el PIN del router, haga clic en «Generar un PIN nuevo» o en «Restaurar el PIN predeterminado» para restablecer el PIN con los ajustes predeterminados.',
'1326' : 'PIN del router',
'1327' : 'Generar un PIN nuevo',
'1328' : 'Restaurar el PIN predeterminado',
'1329' : 'Método de configuración PBC:',
'1330' : 'Mantenga pulsado el botón PBC de su router durante tres segundo o haga clic en «Iniciar PBC». Inicie el método PBC en el dispositivo que quiera conectar al router en un plazo de 2 minutos.',
'1331' : 'Iniciar PBC',
'1332' : 'Método de configuración manual',
'1333' : 'Para los dispositivos clientes sin WPS, configure el dispositivo de forma manual con los siguientes ajustes',
'1334' : 'Seguridad inalámbrica',
'1336' : 'Autenticación de red:',
'1337' : 'Cifrado de datos',
'1338' : 'Clave de red (PSK)',
'1340' : 'Desbloquear el PIN del router',
'1341' : 'PIN del router inhabilitado tras un número excesivo de intentos',
'1390' : '¡Error en la suma de control del PIN! Verifíquelo y pruebe de nuevo.',
'1391' : '¡PIN no válido! El PIN del dispositivo tiene ocho dígitos numéricos. Verifíquelo y pruebe de nuevo.',
'1392' : 'Configurado',
'1396' : 'Configurar manualmente la seguridad inalámbrica',
'1397' : 'de la seguridad inalámbrica',
'common_err1' : '% es NULO',
'upgrade_err2' : 'Se ha cerrado la actualización del software por falta de recursos. Fallo en la actualización.\nInténtelo de nuevo cuando el sistema esté en modo reposo (sin tráfico de internet)',
'upgrade_err3' : 'No se pueden subir los datos. Póngase en contacto con el administrador.',
'upgrade_err4' : 'El archivo de firmware es demasiado grande, no se pudo llevar a cabo la actualización.',
'upgrade_err5' : 'Ya tiene instalada la versión más reciente del software.',
'upgrade_err6' : 'Parece que la actualización del firmware está dañada. Por favor, descargue de nuevo el archivo del firmware y pruebe de nuevo.',
'show10' : 'Lista de clientes DHCP',
'show54' : 'Ajustes de la conexión',
'btn2' : 'Aplicar cambios',
'cff1' : 'Se ha comprobado el firmware con éxito',
'PM2' : ':30 PM',
'AM2' : ':30 AM',
'Dimicons' : 'Atenuar iconos',
'EcoTo' : 'a',
'fvrm' : 'Por favor, desactive la gestión remota. Su puerto está colisionando con uno de los puertos de entrada de los servidores virtuales.',
'lsipm2' : 'Dirección IP de LAN no válida, el último número no puede ser 0 ni 255',
'lsldnm' : 'Nombre de dominio local no válido: `~!@#$%^&*()_+[]{}\|;:\'"<>/?.,',
'lsipm5' : 'La dirección IP que seleccione deberá se un IP no enrutable.\n  192.168.x.x (en donde x es un valor entre 0 y 255. \n10.x.x.x (en donde x es cualquier valor entre 0 y 255.)\172.y.x.x (donde y es cualquier valor entre 16 y 31, y x es cualquier valor entre 0 y 255.)',
'ufy4' : 'El reinicio de las configuraciones por defecto puede durar hasta 60 segundos. No apague el router durante este proceso.',
'ufe11' : 'Al final de la actualización, es posible que el router no responda a los comandos durante un periodo máximo de 180 segundos. Esto es normal. No apague ni reinicie el router durante ese tiempo.',
'ur5' : 'Espere 30 segundos hasta que se reinicie el router. No apague el router antes de que se haya completado el reinicio.',
'ur6' : 'Espere 60 segundos hasta que se reinicie el router. No apague el router antes de que se haya completado el reinicio.',
'usys83' : 'La contraseña y la nueva contraseña confirmada no coinciden',
'usys83_1' : 'Las contraseñas no coinciden.',
'usys85_1' : 'La contraseña del administrador debe tener entre 3 y 12 caracteres.',
'usys88' : '¡La contraseña ya tiene el número máximo permitido de caracteres!.',
'usys89' : 'AM',
'usys90' : 'PM',
'usys92' : 'El puerto de número del control remoto debería estar entre 1 y 65535.',
'usysipm' : 'Bien no ha introducido todos los números de la IP, o bien algunos de los números introducidos es incorrecto. La dirección IP debería tener el siguiente formato x.y.y.z (donde x es cualquier valor entre 1 y 223, y es cualquier valor entre 0 y 255, y z es cualquier valor entre 1 y 254).',
'self_healing60' : 'Recuperación automática',
'chkwait' : 'Buscando firmware nuevo...',
'Europe' : 'Europa',
'Australia' : 'Australia y Nueva Zelanda',
'AsiaPacific' : 'Asia Pacífico',
'NorthAmerica' : 'América del Norte',
'vjs1' : 'Dirección IP no válida, demasiado larga, compruébela de nuevo',
'vjs2' : 'Dirección IP no válida, falta  \'.\' , ¡Compruebe los valores de nuevo!',
'vjs3' : 'Dirección IP no válida, faltan números entre \'.\', ¡Compruebe los valores de nuevo!.',
'vjs4' : 'Dirección IP no válida, sobra \'.\' , ¡Compruebe los valores de nuevo!.',
'vjs5' : 'Dirección IP no válida, los números entre \'.\' son demasiado grandes, compruebe de nuevo.',
'vm1' : 'Carácter no válido ',
'vm2' : ' en la posición ',
'vm3' : 'Debe ser ',
'vjs6' : 'Formato del año no válido, debe tener el siguiente formato: 2002',
'vm4' : 'Número no válido ',
'vjs8' : 'No válido, deberá estar entre 1970 y 2037',
'vjs9' : 'Formato del mes no válido, introdúzcalo como, p. ej., 01... 12',
'vjs161' : ' no en ',
'vjs162' : ' máscara de red',
'vjs163' : 'El rango de DHCP permitido es ',
'vjs17' : 'Ha introducido dos contraseñas distintas, compruebe de nuevo ambas.',
'vjs18' : 'Introduzca el número del puerto de inicio.',
'vjs19' : 'El número del puerto de inicio deberá ser inferior al del número del puerto de finalización.',
'vjs23' : 'Dirección MAC no válida, es una dirección de emisión.',
'vjs24' : 'Dirección MAC no válida: es una dirección nula.',
'vjs25' : 'Dirección MAC no válida: es una dirección multicast.',
'vjs26' : 'Direcciones IP de inicio y final no válidas, la IP final debe ser superior que la IP de inicio.',
'vjs28' : 'Formato de máscara de red no válido.',
'vjs29' : 'Formato no válido, la máscara de red deberá ser 255.255.255.0 o 255.255.255.128 o 255.255.255.192 o 255.255.255.224 o 255.255.255.240 o 255.255.255.248 o 255.255.255.252 o 255.255.255.254',
'vjs30' : 'Dirección IP no válida, el último número no puede ser 0 ni 255',
'vjs31' : 'Dirección IP de LAN no válida, el primer número no puede ser 127',
'vjs32' : 'Dirección IP de LAN no válida, no puede ser 0.0.0.0',
'vjs33' : 'Dirección IP de LAN no válida, deberá ser inferior a 224.0.0.0',
'vjs42' : 'Los números de máscara de subred que ha introducido no son válidos.',
'vjs45' : 'Especificar dirección IP',
'vjs46' : 'no es válida, por favor, ¡corrígala primero!',
'wcc2' : 'Seleccione su tipo de conexión:',
'wcc13' : 'L2TP',
'wcc14' : 'Algunos ISP usan el protocolo L2TP para conectar a los usuarios con la central. Esto significa que tendrá que introducir algunos parámetros adicionales, que su ISP le debería haber proporcionado. Una vez que haya confirmado los cambios, la luz del el indicador de estado de internet se encenderá en verde si la operación se hubiese ejecutado con éxito.',
'wds4_1' : 'Dirección DNS primaria',
'wds7' : 'Deberá introducir los ajustes DNS que le ha proporcionado su ISP en caso de no emplear la función de DNS automático',
'wds8' : 'Para hacer cambios en las DNS, vaya primero a los filtros de páginas web y seleccione la opción «Sin filtros».',
'wmc6' : 'La dirección MAC de WAN no puede ser la misma que la dirección MAC de LAN. Seleccione otra.',
'wdd9 ' : 'El servicio DDNS no está seleccionado.\n',
'wdd10' : 'El servicio DDNS no está seleccionado y se perderás todos los datos en la página. ¿Desea continuar?',
'wm10b' : 'Para uso único con aquellos ISP que requieran un metodo de conexión L2TP.',
'pm' : 'Su servicio no ha podido verificar la contraseña que ha introducido. Confirme que haya introducido su contraseña correctamente.',
'wpp17' : 'Cuenta L2TP',
'wpp18' : 'Contraseña L2TP',
'wpp19' : 'Introduzca su cuenta L2TP',
'wpp23' : 'Asignación de dirección IP',
'wpp24' : 'Utilice la dirección IP estática',
'wpp25' : 'Asignado dinámicamente por el ISP',
'wppa7' : 'Mi dirección IP',
'wppa9' : 'ID de conexión (opcional)',
'wppa13' : 'Introduzca su cuenta PPTP',
'wppa18' : 'Nombre de servicio no válido.',
'ws2' : 'Para introducir los ajustes de su IP estática, escriba su información a continuación y haga clic en «Aplicar cambios».',
'sm_1' : 'La máscara de subred introducida no es válida.',
'ws8' : 'Por favor introduzca/valide sus ajustes de dirección DNS en la siguiente pantalla',
'wt2' : 'Al hacer clic sobre «Aplicar cambios» se reiniciará el router. Una vez se haya reiniciado el router deberá hacer lo siguiente:',
'wt3' : '1) Desconecte el cable de alimentación tanto del módem por cable como del router de Belkin',
'wt4' : '2) Vuelva a conectar el cable de alimentación al módem por cable y espere hasta que las luces del módem dejen de parpadear',
'wt5' : '3) Vuelva a conectar el cable de alimentación al router de Belkin',
'wt6' : 'Para confirmar que se ha establecido la conexión a Internet, abrir un navegador de Internet como Internet Explorer, Firefox o Safari y comprobar que se puede navegar por la web.',
'wlad2' : 'Activar / Desactivar',
'wlc2' : 'Para efectuar cambios en los ajustes inalámbricos del router, realice los cambios aquí. Haga clic en «Aplicar cambios» para guardar los ajustes.',
'wlcgb' : '802.11b+g',
'wlcg' : '802.11g',
'wlcb' : '802.11b',
'wlc20' : '20 MHz',
'wlc22' : '20 /40 MHz',
'wlcoff' : 'APAGADO',
'wlcngb1' : '802.11b & 802.11g y 1x1 802.11n',
'wlcn1' : '1x1 802.11n',
'wlcngb2' : '802.11b y 802.11g y 802.11n',
'wlcn2' : '802.11n',
'wlcgn' : '802.11g+n',
'wlca' : '802.11a',
'wlcan' : '802.11a y  802.11n',
'wlc26' : 'Al ocultar su nombre de usuario de red se desactivará la WPS.',
'wlc27' : 'Al cambiar su modo de seguridad se desactivará la WPS.',
'wlc28' : 'La WPS está desactivada debido a su <A href=%s><B>tipo de seguridad de red inalámbrica</B></A>.',
'wlc29' : 'La WPS está desactivada porque ha ocultado su nombre de usuario de red (SSID).',
'wlc30' : 'La WPS está desactivada porque ha ocultado su nombre de usuario de red (SSID), y debido a su <A href=%s><B>tipo de seguridad de red inalámbrica</B></A>.',
'wlc31' : 'Al activar la WPS su nombre de usuario de red inalámbrica (SSID) se hará público.',
'wlc32' : 'Al activar la WPS su modo de seguridad se modificará de WPA a WPA2. Su contraseña actual de usuario de red funcionará sin problemas.',
'wlc33' : 'Al activar la WPS su nombre de usuario de red inalámbrica (SSID) se hará público y su tipo de seguridad se modificará de WPA a WPA 2. Su contraseña actual de usuario de red funcionará sin problemas.',
'wle3a' : 'WPA-PSK',
'wle3b' : 'WPA2-PSK',
'wle3c' : 'WPA-PSK + WPA2-PSK',
'wps1' : 'Configuración protegida Wi-Fi (WPS, Wi-Fi Protected Setup)',
'wps3' : 'Por favor, configure la seguridad inalámbrica',
'wps17' : 'En los clientes sin WPS, ejecute el asistente de seguridad de Belkin desde el CD o implemente la siguiente configuración manual:',
'wps23' : 'WPA+WPA2-Personal (PSK)',
'wps25' : 'TKIP+AES',
'wps27' : 'Clave de red (WEP):',
'wps28_1' : 'NULO',
'wle11' : 'Clave 1',
'wle12' : 'Clave2',
'wle13' : 'Clave3',
'wle14' : 'Clave4',
'wpskerr2' : 'La clave deberá tener entre 8y 63 caracteres de longitud y puede incluir espacios y símbolos, o solo 64 Hex (0-F).',
'wpskerr4' : 'Necesita introducir la clave de visitante',
'wpskerr7' : 'La clave de visitante debe tener 8 caracteres',
'wpskerr8' : 'La clave de visitante no puede ser la misma de la clave de red',
'wlguest1' : 'El SSID no puede ser la misma que el SSID de visitante',
'wlguest2' : 'El SSID de visitante no puede ser la misma que el SSID',
'rs_crc' : 'Error al restaurar < CRC >',
'rs_long' : 'Error al restaurar <too long>',
'rs_disposition' : 'Error al restaurar <No Content-Disposition>',
'rs_getpid' : 'Error al restaurar <Can\'t get pid!>',
'rs_unmatchpid' : 'Error al restaurar <Unmatched pid>',
'msg_ddns3 ' : 'No puede dejar el nombre del dominio en blanco.\n',
'msg_lan_dhcp1 ' : 'Solicitando información de la puerta de enlace.',
'msg_lan_dhcp2 ' : 'Actualizando la base de datos de configuración.',
'msg_wan_stat1 ' : 'Dirección IP ',
'msg_wan_stat2 ' : ' no está en ',
'msg_wan_stat3 ' : ' la red.',
'msg_wls_chan2 ' : 'El SSID de visitante no se puede configurar como NULO\n',
'fw_not_interrupt ' : 'NO APAGUE O DESACTIVE EL ROUTER, si lo hace podría dañar el router dejándolo inoperable.',
'msg_invalid_char ' : 'Se han encontrado caracteres no válidos. Caracteres válidos son: 0-9, a-z. A-Z, `~!@#$%^&*()_-+=|\\{}[]:";\',.<>/?',
'msg_invalid_domain_char ' : 'Nombre de dominio local no válido'+': ~!@#$%^&*()=+{}[]|":;\\\'?/<>,`',
'msg_invalid_char_1 ' : 'Se han encontrado caracteres no válidos. Los caracteres validos son letras y números. Los siguientes símbolos no son válidos: `~!@#$%^&*()_+[]{}\\|;:\'"<>/?.,',
'msg_hostIP_invalid ' : 'La dirección IP del host es inválida. No debería ser la dirección IP LAN del router.\n',
'msg_dmzIP ' : 'Dirección IP DMZ.',
'msg_blank ' : ' no se puede dejar en blanco.\n',
'msg_space ' : 'No se permiten espacios en blanco en %s\n',
'msg_blank_in ' : 'No se permiten espacios en blanco en %s\n',
'msg_allspaces ' : '%s no puede contener solo espacios en blanco\n',
'msg_invalid ' : 'Existen caracteres inválidos en %s\nCaracteres válidos son: \n%s\n\n',
'msg_check_invalid ' : '%s contiene un número invalido\n',
'msg_valid_range ' : '% es inválido. Un rango válido es de %s a %s\n',
'msg_invalid_mac ' : 'Dirección MAC no válida.\n',
'msg_multi_mac' : 'La dirección MAC no puede ser una dirección multicast.\n',
'msg_confirmDefault ' : '¡Advertencia!\nCargar la configuración predeterminada de fábrica eliminará la configuración actual.\n¿Está seguro de que quiere hacer esto?',
'Allowed_Services' : 'Servicios con permiso',
'Allowing_Url' : 'Permiso de acceso a website según dirección URL ',
'Allowing_Keyword' : 'Permiso de acceso a website por contraseña',
'wipv63' : 'Los dispositivos conectados al router pueden comunicarse entre ellos usando los paquetes IPv6 nativos. Los paquetes IPv6 en la red LAN se envían de forma automática a todas las interfaces LAN (puertos Ethernet y las redes inalámbricas de 2,4 GHz y 5 GHz).',
'wipv64' : 'Cuando el paso a través de IPv6 está activado, los paquetes IPv6 también se copian en la interfaz WAN.(Cuando está activado, se crea una conexión directa, no segura a internet.)',
'wipv65' : 'Su proveedor de internet le informará sobre la compatibilidad con IPv6.',
'wipv67' : 'Internet IPv6',
'wipv68' : 'Su conexión es compatible con IPv6.',
'wipv69' : 'Pass-through',
'mf1' : 'Estas páginas le permiten ajustar el comportamiento de su router ante ciertas formas de tráfico de contenido multimedia.',
'mf2' : 'Optimiza automáticamente su conexión a internet para los distintos tipos de tráfico de datos.',
'mf3' : 'Ver como su router está operando.',
'mf8' : 'Grabado en %s',
'mf10' : 'Descargar',
'mf11' : 'Cargar',
'mf12' : 'Velocidad',
'mf15' : 'Aplicar configuración',
'mf18' : 'Inserte entre el número {.0,1-%s}.',
'mf20' : 'Solo entre {0.1-%s}.',
'mf26' : 'Grabado manualmente en %s',
'mf32' : 'o',
'mf44' : 'Es posible que debido al volumen de tráfico en internet o a otras causas los resultados del test automático de velocidad no sean 100% precisos Puede comparar los resultados visitando una página web de test de velocidad o consultando la velocidad de la conexión con su ISP. Si los resultados del test de velocidad fuesen inconsistentes, es posible insertar los valores manualmente.',
'media_dlna18' : 'Sin título',
'media_dlna21' : 'Tiene más contenido multimedia del que el router es capaz de indexar, por lo que se están distribuyendo los primeros 12000 elementos.',
'errSubnetMaskInvalid_2' : 'Los valores de la máscara de subred no parecen ser los usuales de una máscara de subred. Compruebe los valores.',
'htWAN_L2TP' : 'Ajustes de L2TP',
'htWAN_L2TPContent' : 'Algunos ISP usan el protocolo L2TP para conectar a los usuarios con la central. Esto significa que tendrá que introducir algunos parámetros adicionales, que su ISP le debería haber proporcionado. Una vez que haya confirmado los cambios, la luz del el indicador de estado de internet se encenderá en verde si la operación se hubiese ejecutado con éxito.',
'p400t001_error' : 'Conecte todo más rapidamente.',
'p400t018_error' : '¿Por qué debería renombrarla?',
'p400t019_error' : 'Esto es lo que se mostrará cuando ejecute una búsqueda de su red desde otros dispositivos. Cuanto más original sea el nombre de red, más fácil será de localizar y recordar. Si sus dispositivos WiFi hubiesen estado conectados previamente a un router distinto y decide mantener el mismo nombre de red y la misma contraseña con el nuevo no necesitará configurar nada a este respecto porque los dispositivos se conectarán automáticamente. ',
'dhToggleBand2G' : 'Mostrar 2,4 GHz',
'772' : 'Al hacer clic sobre «Aplicar cambios» se reiniciará el router. Una vez se haya reiniciado el router deberá hacer lo siguiente:',
'773' : '1) Desconecte el cable de alimentación tanto del módem por cable como del router de Belkin',
'774' : '2) Vuelva a conectar el cable de alimentación en el módem por cable y espere hasta que las luces del módem dejen de parpadear',
'dft001' : 'Parece no está conectado.',
'dft002' : 'Si necesita asesoría y puede acceder a internet con otro dispositivo, vaya a <strong>help.belkin.com</strong>.',
'gtNoSecCard     ' : 'Anote bien su nombre de red y contraseña por si los necesita en el futuro.',
'gtFWUpdateMobileError' : 'En este momento no es posible subir archivos de firmware desde dispositivos móviles.',
'gtSettingsMobileError' : 'En este momento no es posible subir archivos de configuración desde dispositivos móviles.',
'gtMoreFromInternet' : 'Conectar a internet para más opciones de idiomas',
'gtCantConnect' : 'No se puede conectar a internet.',
'p802t004' : 'Vaya al menú de redes inalámbricas de su dispositivo',
'p803t004' : 'Vaya al menú de redes inalámbricas de su dispositivo',
'PIC-S1t001' : 'Bloquear todos los dispositivos:',
'gtUnnamedDevice' : 'Dispositivo sin nombre',
'gtIC' : 'Control de internet',
'errDefaultGatewayEmpty' : 'La puerta de enlace predeterminada no puede estar en blanco.',
'errDefaultGatewayInvalid' : 'La dirección de la puerta de enlace predeterminada debe tener cuatro números (0-255) separados por puntos. Compruebe los valores.',
'errDNSServerEmpty' : 'La dirección del servidor DNS no puede estar en blanco.',
'errDNSServerInvalid' : 'La dirección de la puerta de enlace predeterminada debe tener cuatro números (0-255) separados por puntos. Compruebe los valores.',
'errIpAddressEmpty' : 'La dirección IP no puede estar en blanco.',
'errIpAddressInvalid' : 'La dirección IP debe tener cuatro números (0-255) separados por puntos. Compruebe los valores.',
'errorGenericCommitError' : 'Se ha producido un error.  Corrija los ajustes aquí abajo y vuelva a intentarlo.',
'errorSSIDEmpty' : 'Introduzca un nombre para su red inalámbrica.',
'errorSSIDInvalidChars' : 'El nombre de red puede contener únicamente letras, números, signos de puntuación y espacios.',
'errorSSIDTooLong' : 'El nombre de la red inalámbrica debe tener menos de 32 caracteres.',
'errorWEPPasswordEmpty' : 'Introduzca una contraseña para asegurar su red inalámbrica',
'errorWEPPasswordInvalidChars' : 'La contraseña de red puede contener únicamente números y letras entre A y F.',
'errorWEPPasswordInvalidLength' : 'La contraseña de red debe tener 10 o 26 caracteres.',
'errorWPAPasswordEmpty' : 'Introduzca una contraseña para asegurar su red inalámbrica',
'errorWPAPasswordInvalidChars' : 'La contraseña de red puede contener únicamente letras, números, signos de puntuación y espacios.',
'errorWPAPasswordInvalidLength' : 'La contraseña de red debe tener entre 8 y 63 caracteres.',
'errPasswordEmpty' : 'Introduzca su contraseña.',
'errPasswordInvalid' : 'El nombre de red puede contener únicamente letras, números, signos de puntuación y espacios.',
'errPasswordTooLong' : 'La contraseña debe tener menos de 64 caracteres.',
'errServAddressEmpty' : 'Por favor, introduzca una dirección de servicio.',
'errSubnetMaskEmpty' : 'La máscara de subred no puede estar en blanco.',
'errSubnetMaskInvalid' : 'La máscara de subred debe tener cuatro números (0-255) separados por puntos. Compruebe los valores.',
'errUsernameInvalid' : 'El nombre de red puede contener únicamente letras, números, signos de puntuación y espacios.',
'errUsernameTooLong' : 'El nombre de usuario debe tener menos de 64 caracteres.',
'errVCIInvalid' : 'Introduzca un número entre 0 y 65535. Su ISP le proporcionará el valor correcto que usar.',
'errVPIInvalid' : 'Introduzca un número entre 0 y 255. Su ISP le proporcionará el valor correcto que usar.',
'802t003' : 'Debido a que se ha modificado la configuración, puede que tenga que seleccionar de nuevo su red inalámbrica:',
'802t011' : 'Como ha cambiado el tipo de seguridad es posible que tenga que seleccionar de nuevo la red inalámbrica:',
'dft003' : '¿Necesita ayuda?',
'dft004' : '¿Tiene alguna pregunta o necesita asistencia? Puede ponerse en contacto las 24 horas del día en nuestro centro de ayuda online.<br><a href="http://www.belkin.com/support/" id="dfBelkinHelp">Centro de ayuda de Belkin &rarr;</a>',
'dhChangeSSID' : 'Cambio &raquo;',
'dhPassLabel' : 'Contraseña:',
'dhPasswordObscured24' : 't********',
'dhShow' : 'Mostrar:',
'dhSSID24' : '{blahblah}',
'dhToggle24' : '2,4 Ghz',
'dhToggle5' : '5,0 Ghz',
'DownSpeed' : '32.6',
'errUsernameEmpty' : 'Introduzca su nombre de usuario.',
'gt10am' : '10:00 a.m.',
'gt10pm' : '10:00 p.m.',
'gt11am' : '11:00 a.m.',
'gt11pm' : '11:00 p.m.',
'gt1am' : '1:00 a.m.',
'gt1amNextDay' : '1:00 a.m. del día siguiente',
'gt1pm' : '13:00 a.m.',
'gt24ghz' : '2,4Ghz',
'gt24GKey' : '2.4GHz Key',
'gt24GName' : '2.4 GHz SSID',
'gt24PSK' : 'Contraseña',
'gt24Sec' : 'WPA2',
'gt24SSID' : '12345678',
'gt2am' : '2:00 a.m.',
'gt2pm' : '2:00 p.m.',
'gt3am' : '3:00 a.m.',
'gt3pm' : '3:00 p.m.',
'gt4am' : '4:00 a.m.',
'gt4pm' : '4:00 p.m.',
'gt50ghz' : '5 Ghz',
'gt5am' : '5:00 a.m.',
'gtGuestKey' : 'Clave de invitado',
'gt5GMedia' : 'La banda de 5 Ghz tendrá el mismo nombre, pero con la extensión «.media» añadida al final.',
'gtGuestName' : 'Invitado SSID',
'gt5pm' : '5:00 p.m.',
'gt6am' : '6:00 a.m.',
'gt6pm' : '6:00 p.m.',
'gt7am' : '7:00 a.m.',
'gt7pm' : '7:00 p.m.',
'gt8am' : '8:00 a.m.',
'gt8pm' : '8:00 p.m.',
'gt9am' : '9:00 a.m.',
'gt9pm' : '9:00 p.m.',
'gtAccessControl' : 'Control parental de internet',
'gtAccessPoint' : 'Utilizar como punto de acceso',
'gtADSL' : 'ADSL',
'gtAdvSettings' : 'Configuración avanzada',
'gtAllElseFails' : 'Si después de todo, necesitase más asistencia, llame al servicio técnico de Belkin n&nbsp;',
'gtAndroidConnect01' : 'Teléfonos Android y tabletas',
'gtAndroidConnect02' : 'Su dispositivo tiene un menú disponible de redes inalámbricas en la herramienta de configuración.',
'gtAndroidConnect03' : 'Abra la herramienta de <strong>Configuración</strong> y seleccione <strong>Conexiones inalámbricas</strong>.',
'gtAndroidConnect04' : 'Aquí, seleccione la conexión <strong>WiFi</strong>para ver la lista de redes disponibles.',
'gtAndroidConnect05' : 'Select <strong tid="Network24SSID">{REMPLAZAR CON SSID 2.4}</strong>. <!-- IF NOT OPEN --> <span tid="gtNotOpen">Si así se le fuese requerido, introduzca la contraseña de red <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>.</span> <!-- /IF -->',
'gtAt' : 'en',
'gtAttenuation' : 'Atenuación',
'gtAustralia' : 'Australia',
'gtBackToDashboard' : '&larr; Volver al panel de inicio',
'gtBelkin' : 'Belkin',
'gtBootLoader' : 'Cargador de inicio',
'gtCantConnect' : 'No se puede realizar la conexión con su ISP.',
'gtCantConnectNoResponse' : 'No se puede conectar a internet, no se obtuvo respuesta de su ISP.',
'gtChina' : 'China',
'gtClientList' : 'Dispositivos conectados',
'gtClose' : 'Cerrar',
'gtConfig' : 'Configurar',
'gtConfigureRouter' : 'Configurar Router',
'gtConnDevices' : 'Dispositivos conectados',
'gtConnectingToNew' : 'Conectando a su nueva red',
'gtConnectionDet' : 'Detalles de la conexión',
'gtConnType' : 'Tipo de conexión',
'gtContentFiltering' : 'Filtros de página web',
'gtCopyright' : 'Copyright &copy; 2012. Belkin, todos los derechos reservados.',
'gtCurrTimezone' : 'Europe/Helsinki {REPLACE THIS SPAN WITH DETECTED Belkin TZ ID description}',
'gtDashboard' : '&larr; Panel de inicio',
'gtDashTitle' : 'Panel de inicio del router de Belkin',
'gtDataRate' : 'Velocidad de datos',
'gtDDNS' : 'DDNS',
'gtDHCPList' : 'Dispositivos conectados',
'gtDHCPServer' : 'Servidor DHCP',
'gtDMZ' : 'DMZ',
'gtDNS' : 'DNS',
'gtDown' : 'Abajo',
'gtDownloadSpeed' : 'Velocidad de descarga',
'gtEncap' : 'Encapsulación:',
'gtFileInstallError' : 'No se puede instalar ese archivo, quizás el tipo de archivo es erróneo',
'gtFileLoadError' : 'No se puede cargar ese archivo, quizás el tipo de archivo es erróneo',
'gtFirewall' : 'Firewall',
'gtFirmware' : 'El firmware',
'gtFirmwareUpdate' : 'Actualizar el firmware',
'gtFrance' : 'Francia',
'gtFreshest' : 'Se está descargando la versión más reciente de firmware...',
'gtFrom' : 'De:',
'gtFWUpdate' : 'Actualizar el firmware',
'gtFWUpToDate' : 'El firmware está ahora actualizado.',
'gtGermany' : 'Alemania',
'gtGuestAccess' : 'Acceso de invitados',
'gtGuestNetwork' : 'Red de invitados',
'gtHomeNetwork' : 'Red doméstica',
'gtIfYouKnowConnection1' : 'Si no conoce su tipo de conexión, puede <a href="700-SelectConnection.htm" id="ISP1a010">configurarla manualmente &raquo;</a>',
'gtIfYouKnowConnection2' : 'Si no conoce su tipo de conexión, puede <a href="700-SelectConnection.htm" id="ISP2a010">configurarla manualmente &raquo;</a>',
'gtIfYouKnowConnection3' : 'Si no conoce su tipo de conexión, puede <a href="700-SelectConnection.htm" id="ISP3a010">configurarla manualmente &raquo;</a>',
'gtIfYouKnowConnection4' : 'Si no conoce su tipo de conexión, puede <a href="700-SelectConnection.htm" id="ISP4a010">configurarla manualmente &raquo;</a>',
'gtIfYouKnowConnection4a' : 'Si no conoce su tipo de conexión, puede <a href="700-SelectConnection.htm" id="ISP4aa010">configurarla manualmente &raquo;</a>',
'gtIfYouKnowConnection5' : 'Si no conoce su tipo de conexión, puede <a href="700-SelectConnection.htm" id="ISP5a010">configurarla manualmente &raquo;</a>',
'gtIfYouKnowConnection6' : 'Si no conoce su tipo de conexión, puede <a href="700-SelectConnection.htm" id="ISP6a010">configurarla manualmente &raquo;</a>',
'gtIfYouKnowConnection7' : 'Si no conoce su tipo de conexión, puede <a href="700-SelectConnection.htm" id="ISP7a010">configurarla manualmente &raquo;</a>',
'gtIntellistream' : 'Intellistream',
'gtInterleavePath' : 'Ruta de intercalación',
'gtInternetSettings' : 'Ajustes de Internet',
'gtIOSConnect01' : 'iPhone, iPad, and iPod Touch',
'gtIOSConnect02' : 'Su dispositivo tiene un menú disponible de redes inalámbricas en la herramienta de configuración.',
'gtIOSConnect03' : 'Abra la herramienta de <strong>Configuración</strong> y seleccione <strong>WiFi</strong>.',
'gtIOSConnect04' : 'Seleccione <strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong> de la lista de redes.  <!-- IF NOT OPEN --> <span tid="gtNotOpen">Si así se le fuese requerido, introduzca la contraseña de red <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>.</span> <!-- /IF -->',
'gtIPv6' : 'IPv6',
'gtIPV6Connection' : 'Conexión IPv6',
'gtISP' : 'Tipo de conexión del ISP',
'gtJapan' : 'Japón',
'gtLANIP' : 'Dirección IP de LAN',
'gtLANMAC' : 'MAC de LAN/WLAN',
'gtLANSettings' : 'Ajustes LAN',
'gtLANSubnet' : 'Máscara de subred LAN',
'gtLLC' : 'LLC',
'gtLoadPrevSettings' : 'Cargar configuraciones previas',
'gtLocalNetwork' : 'Red local',
'gtLocalSettings' : 'Ajustes de red local',
'gtLocked' : 'bloqueado',
'gtMACAddress' : 'Dirección MAC',
'gtMACAddressFiltering' : 'Filtrado de direcciones MAC',
'gtMacConnect01' : 'Mac OS X',
'gtMacConnect02' : 'Su ordenador proporciona un menú de redes inalámbricas disponibles en el extremo derecho de la barra de menús.',
'gtMacConnect03' : 'Haga clic en el icono de las ondas',
'gtMacConnect04' : 'Seleccione <strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong> de la lista de redes.  <!-- IF NOT OPEN --> <span tid="gtNotOpen">Si así se le fuese requerido, introduzca la contraseña de red <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>.</span> <!-- /IF -->',
'gtMaybeLater' : 'Quizás más tarde',
'gtMbitPerSec' : 'Mb/s',
'gtMeaning' : '¿Qué significa esto?',
'gtMedia' : 'Media',
'gtMediaServer' : 'Media Server',
'gtmidnight' : 'Medianoche',
'gtModel' : 'Modelo',
'gtName' : 'Nombre',
'gtNeedMoreHelp' : '¿Necesita ayuda adicional?',
'gtNetName' : 'Nombre de red',
'gtNewFWAvailableModem' : 'Existe una nueva versión del firmware disponible para su módem.',
'gtNewFWAvailableRouter' : 'Existe una nueva versión del firmware disponible para su router.',
'gtNewFWAvailableRouterAndModem' : 'Existe una nueva versión del firmware disponible para su módem y router.',
'gtNext' : 'Siguiente',
'gtNo' : 'No',
'gtNoiseMargin' : 'Margen de ruido',
'gtNoMyNet' : 'No veo mi red',
'gtNoon' : 'Mediodía',
'gtNoSecCard' : 'Anote bien su nombre de red y contraseña por si los necesita en el futuro.',
'gtNotOpen' : 'Si así se le fuese requerido, introduzca la contraseña de red <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>.',
'gtNZ' : 'Nueva Zelanda',
'gtOffline' : 'Desconectado',
'gtOnline' : 'Conectado',
'gtOptionalSoftware' : 'Software opcional',
'gtOptionalSW' : 'Software opcional',
'gtOptSW' : 'Software opcional',
'gt-OR-' : '-O-',
'gtOther' : '...',
'gtOutputPower' : 'Alimentación de salida',
'gtParentalControls' : 'Controles parentales',
'gtPass' : 'Contraseña:',
'gtPIC' : 'Control parental de internet',
'gtPICOtherTimes' : 'En cualquier otro momento este dispositivo no tendrá acceso a internet.',
'gtPleaseCallISP' : 'Tenga la bondad de llamar a su proveedor de internet,',
'gtPortForwarding' : 'Reenvío de puertos',
'gtPrint' : 'Imprimir',
'gtReadAllAboutIt' : 'Para más ayuda:',
'gtReconnectingHell' : 'Reconectando...',
'gtRegister' : 'Registrar',
'gtRegistration' : 'Registro',
'gtRestartRouter' : 'Reiniciar el router',
'gtRestoreDef' : 'Restablecer configuración predeterminada',
'gtRestoreFactDefault' : 'Restablecer la configuración de fábrica',
'gtRestoreFactDefaults' : 'Restablecer la configuración de fábrica',
'gtRestoreSettigns' : 'Restaurar configuración',
'gtRetest' : 'Probar de nuevo de la conexión',
'gtRouterDetails' : 'Detalles del router',
'gtRouterInfo' : 'Info del router',
'gtSave' : 'Guardar',
'gtSaveCurrentSettings' : 'Guardar los ajustes actuales',
'gtSaved' : 'Se ha guardado el dispositivo sin nombre',
'gtSaveRestore' : 'Guardar/Restaurar la configuración',
'gtSaveRestoreSettings' : 'Guardar/Restaurar la configuración',
'gtSaveSettings' : 'Guardar/Copia de seguridad de la configuración',
'gtSecLog' : 'Registro de seguridad',
'gtSecurity' : 'Seguridad',
'gtSelectLang' : 'Seleccionar idioma:',
'gtSelfHeal' : 'Self Healing',
'gtSelfHealing' : 'Self Healing',
'gtSerialSupport' : 'En la siguiente página registraremos el número de serie del router para el servicio técnico.',
'gtShowtime' : '¡El momento de la verdad!',
'gtSpeedTestResults' : 'Ultimo control: hace un 1 día a las 15:57',
'gtStaticRouting' : 'Ruta estática',
'gtStatus' : 'Estado',
'gtSystemSettings' : 'Ajustes del sistema',
'gtTo' : 'A:',
'gtTraffStats' : 'Estadísticas de tráfico',
'gtTryAgain' : 'Intentar de nuevo',
'gtUnlocked' : 'desbloqueado',
'gtUp' : 'Arriba',
'gtUpdate' : 'actualizar',
'gtUpdateNoPowerModem' : 'Estamos actualizando el router con la nueva versión de firmware. No apague el dispositivo mientras que la operación esté en proceso.',
'gtUpdateNoPowerRouter' : 'Estamos actualizando el router con la nueva versión de firmware. No apague el dispositivo mientras que la operación esté en proceso.',
'gtUploadSpeed' : 'Velocidad de subida',
'gtUSA' : 'los Estados Unidos',
'gtUserName' : 'Nombre de usuario:',
'gtUtils' : 'Utilidades',
'gtVCI' : 'VCI:',
'gtVCMUX' : 'VC/MUX',
'gtVPI' : 'VPI:',
'gtWAN' : 'Configuración WAN',
'gtWANDNS' : 'Dirección DNS',
'gtWANGateway' : 'Puerta de enlace WAN',
'gtWANIP' : 'Dirección IP WAN',
'gtWANMAC' : 'Dirección MAC de WAN',
'gtWANPingBlocking' : 'Bloquear ping a WAN',
'gtWANSubnet' : 'Máscara de subred WAN',
'gtWebsiteFilter' : 'Filtros de página web',
'gtWelcome' : 'Bienvenido',
'gtWiFi' : 'WiFi',
'gtWifiSettings' : 'Se ha modificado con éxito su configuración WiFi.',
'gtWinConnect01' : 'Windows 7/8',
'gtWinConnect02' : 'El ordenador ofrece un menú de redes inalámbricas disponibles en el extremo derecho de la barra de herramientas.',
'gtWinConnect03' : 'Haga clic con el botón derecho en el icono que muestra las barras de potencia de señal.',
'gtWinConnect04' : 'Select <strong tid="Network24SSID">{REMPLAZAR CON SSID 2.4}</strong>. <!-- IF NOT OPEN --> <span tid="gtNotOpen">Si así se le fuese requerido, introduzca la contraseña de red <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>.</span> <!-- /IF -->',
'gtWinConnect05' : 'Windows Vista y Windows XP',
'gtWinConnect06' : 'El ordenador ofrece un menú de redes inalámbricas disponibles en el extremo derecho de la barra de herramientas.',
'gtWinConnect07' : 'Hacer clic con el botón derecho sobre el icono que muestra un ordenador con ondas inalámbricas (XP) o dos ordenadores (Vista).',
'gtWinConnect08' : 'Seleccione la opción de <strong> Ver las redes inalámbricas disponibles</strong> (XP) o <strong>Conectarse a un red</strong> (Vista) del menú siguiente.',
'gtWinConnect09' : 'Select <strong tid="Network24SSID">{REMPLAZAR CON SSID 2.4}</strong>. <!-- IF NOT OPEN --> <span tid="gtNotOpen">Si así se le fuese requerido, introduzca la contraseña de red <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>.</span> <!-- /IF -->',
'gtWireless' : 'WiFi',
'gtWiring' : 'Cableado',
'gtWPSShort' : 'WPS',
'gtWPS' : 'Wi-Fi Protected Setup',
'gtYes' : 'Sí',
'htFWUpdate' : '¿Qué son las actualizaciones de firmware?',
'htFWUpdateContent' : 'De vez en cuando, es posible que Belkin publique una nueva versión del software del router. Estas actualizaciones contienen mejoras y correcciones a problemas de uso para su router.<br><br>NOTA: haga una copia de seguridad de su configuración actual antes de actualizar a una nueva versión de firmware.',
'htParent' : '¿Qué son los filtros de páginas web?',
'htPIC' : 'Su Control de internet',
'htPICBlocked' : 'Se ha suspendido el acceso a internet',
'htPICBlockedContent' : 'Restaure el acceso cuando desee habilitar de nuevo la conectividad a internet en todos los dispositivos.',
'htPICContent' : 'Con Control de internet puede personalizar un intervalo de tiempo para bloquear el acceso a internet para cada dispositivo.',
'htSaveRestore' : '¿Qué ocurre al guardar, cargar o restaurar la configuración?',
'htSaveRestoreContent' : 'Su router recuerda los valores de elementos como el nombre de red, la contraseña, etc Se pueden guardar estos ajustes (como copia de seguridad) y cargarlos posteriormente de nuevo en su router.  Se pueden restablecer igualmente los ajustes predeterminados de fábrica del router.',
'htSaveRestoreContentMobile' : '<br>* En iPhone, iPad, y iPod Touch, no es posible guardar y cargar un archivo de de configuración. Use otro dispositivo, como por ejemplo un ordenador portátil, para guardar y cargar un archivo de configuración.',
'ISP1t003' : 'Explique que su router pudo obtener una dirección IP  pero que el DNS no funciona.',
'ISP1t007' : 'El DNS transforma nombres tales como «belkin.com» en direcciones numéricas (direcciones IP) que los ordenadores usan para navegar por internet. Su router tiene una dirección IP, lo que significa que este está conectado a internet, pero el DNS no funciona por lo que no puede navegar por internet. Probablemente su ISP sufre algún problema en este momento.  <span class="nub"></span>',
'ISP2t003' : 'Explíqueles que su router ha podido obtener una dirección IP y que el DNS funciona, pero que no puede ejecutar ningún ping.',
'ISP2t007' : 'Se ejecuta un «ping» a otros ordenadores en internet para probar que existe comunicación entre ellos. El DNS transforma nombres tales como «belkin.com» en direcciones numéricas (direcciones IP) que los ordenadores usan para navegar por internet. Su router tiene una dirección IP, lo que significa que está conectado a internet. Así mismo el DNS que su ISP le ha proporcionado funciona correctamente pero no se pueden ejecutar pings. Esto indica que su ISP está sufriendo problemas. <span class="nub"></span>',
'ISP3t004' : 'Explíqueles que su nombre de usuario y su contraseña fueron aceptados, pero que aun no tiene conexión a internet.',
'ISP3t007' : 'Se ejecuta un «ping» a otros ordenadores en internet para probar que existe comunicación entre ellos. Su ISP ha aceptado su nombre de usuario y la contraseña, pero no se pueden ejecutar los pings, lo que impide que pueda navegar por páginas web. Esto indica que su ISP está sufriendo problemas.  <span class="nub"></span>',
'ISP4t003' : 'Explíqueles que su nombre de usuario y la contraseña no fueron aceptadas y que lo intentó en repetidas ocasiones.',
'ISP4t007' : 'Su conexión a internet requiere de un nombre de usuario y de una contraseña, pero su ISP no ha aceptado los que usted ha introducido. Ellos se asegurarán de que usted recibe la información adecuada.  <span class="nub"></span>',
'ISP5t003' : 'Dígales que escoge una conexión dinámica, pero que no puede obtener una dirección IP.',
'ISP5t007' : 'Una dirección IP identifica a un router sobre otros dispositivos en internet. Su ISP no está suministrando a su router una dirección y sin una dirección IP no podrá conectarse. Esto sugiere que existe algún tipo de problema con su ISP, o que su conexión no es una conexión dinámica.  <span class="nub"></span>',
'ISP6t003' : 'Comente que usted escoge una conexión estática, pero que no puede conectarse a internet.',
'ISP6t007' : 'Se usa una conexión estática en el caso de que su ISP le haya asignado al menos una dirección IP específica.  <span class="nub"></span>',
'ISP7t003' : 'Explíqueles que sus ajustes de VPI/VCI no funcionan y que si le pudiesen proporcionar los valores correctos.',
'ISP7t007' : 'VPI y VCI le indicarán a su router que ruta usar para comunicarse con su ISP. No se pudieron detectar los valores de configuración correctos. <span class="nub"></span>',
'Network24Passkey' : '{REEMPLAZAR CON CONTRASEÑA 2.4}',
'Network24SSID' : '{REEMPLAZAR CON SSID 2.4}',
'p100t002' : '¡Vamos a conectarnos a internet!.',
'p100t003' : 'Está conectado a su nuevo router, así que es un buen momento para establecer la comunicación con su proveedor de servicios de internet.',
'p100t004' : '¡Vamos a conectarnos a internet!.',
'p100t005' : 'Está conectado a su nuevo router, así que es un buen momento para establecer la comunicación con su proveedor de servicios de internet.',
'p100t007' : 'Detectar mi conexión',
'p100t008' : 'Si no está seguro su tipo de conexión, puede <a href="700-SelectConnection.htm" id="p100a009" tid="p100t009">configúrelo manualmente &raquo;</a>, o vaya directamente al <a href="000-Dashboard.htm" id="p100a010" tid="p100t010">panel de inicio &raquo;</a>.',
'p100t009' : 'configúrelo manualmente &raquo;',
'p100t010' : 'panel de inicio &raquo;',
'p100t013' : 'En este momento, se muestran las páginas in&nbsp;',
'p100t024' : 'Casi una configuración automática',
'p100t025' : 'Primero, se comprobará el cableado y se detectará el tipo de conexión que tiene con su proveedor de servicios de internet (ISP). Este paso debería realizarse casi de manera automática. Una vez hecho esto se procederá a comprobar si el software de su router está actualizado. <span class="nub"></span>',
'p1010MRt001' : 'Existen problemas de comunicación con el módem.',
'p1010MRt002' : 'Puede ser un error de escritura.',
'p1010MRt003' : 'Esto es lo que puede hacer para solucionar esto:',
'p1010MRt004' : 'Asegúrese de que su módem router está conectado una entrada de teléfono que tenga la línea de internet activada. Debería haber un cable de red que conecte el puerto ADSL en su módem router (el puerto gris de la parte superior) a la entrada de teléfono.',
'p1010MRt005' : 'Asegúrese de que su módem esté encendido. Su adaptador de corriente debería estar bien enchufado en ambos extremos, y al menos una de las luces del módem debería estar encendida.',
'p1010MRt006' : 'Su módem debería estar conectado al puerto amarillo del router mediante un cable red. Este cable transporta la señal desde el módem al router, y sin él no se puede efectuar la conexión a internet.',
'p1010MRt007' : 'Si ambos estuviesen bien conectados, puede probar a reiniciar el módem desenchufando la fuente de alimentación, esperando 15 segundos y volviendo a enchufarlo. Si su módem tiene una batería puede que necesite encontrar el botón de «Reset» (Restablecer) en vez de la primera posibilidad.',
'p1010MRt008' : 'Aquí abajo puede ver el aspecto que estas conexiones deberían tener:',
'p1010MRt009' : 'Se seguirá esperando a detectar la conexión mientras realiza la consulta.',
'p1010MRt010' : 'El problema de cableado más común se da entre el módem y el router. Es importante que compruebe ambos extremos del cable. Uno de los extremos debería estar conectado en el puerto amarillo del router nuevo, mientras que el otro extremo lo debería estar en un puerto similar en el módem. El etiquetado de los puertos es distinto según el fabricante; puede que lo encuentre etiquetado como «data», «LAN», «network», o «Ethernet» (datos, LAN, red o Ethernet).  <span class="nub"></span>',
'p1020t001' : 'Existen problemas de comunicación con su proveedor de servicios de internet (ISP).',
'p1020t002' : 'Por favor reinicie el módem router.',
'p1020t003' : 'No se detecta una conexión a internet, pruebe a reiniciar su módem router.',
'p1020t004' : 'Apague el módem router. Normalmente para hacer esto tiene que pulsar algún interruptor en el módem router o desenchufarlo de la corriente.',
'p1020t005' : 'Espere 15 segundos.',
'p1020t006' : 'Vuelva a encender el módem router.',
'p1020t007' : 'Tras algunos segundos se volverán a encender las luces y se debería establecer la conexión con su ISP.',
'p1020t008' : 'Si el problema persiste, póngase en contacto con su ISP para solucionar los problemas que su cuenta pudiese tener.',
'p1020t009' : 'Cuando el módem router se haya apagado y reiniciado de nuevo la operación continuará automáticamente.',
'p1020t010' : '¿Por qué se debe reiniciar el módem?',
'p1020t011' : 'Algunos módems necesitan ser reiniciados antes de poder establecer la comunicación con un router u ordenador nuevo. Si su proveedor de servicios de internet estuviese experimentando algún tipo de problema, es posible que una de las consecuencia fuese que el módem interrumpiese la conexión a internet. Se detecta su módem pero no la conexión a internet, pruebe a reiniciar el módem para resolver el problema. <span class="nub"></span>',
'p1100t001' : '¡Se ha encontrado una actualización de firmware disponible!',
'p1100t002' : 'Le recomendamos que actualice su router con la última versión disponible de firmware para asegurarse que todo funciona adecuadamente.',
'p1100t003' : 'Mostrar lo más reciente',
'p1201t001' : 'Bloquear el panel de control con una contraseña.',
'p1201t002' : 'Introduzca una contraseña para bloquear el panel de control:',
'p1201t003' : 'Introduzca una contraseña.',
'gtSetPassword' : 'Establecer contraseña',
'p1201t005' : 'Cancelar',
'p1210t001' : 'El panel de control está bloqueado.',
'p1210t002' : 'Introduzca su contraseña:',
'p1210t003' : 'Introduzca su contraseña.',
'p1210t004' : 'La contraseña introducida no es correcta.',
'p1210t005' : '¡Déjeme entrar!',
'p1300t001' : 'Un poco más de potencia.',
'p1300t002' : 'Es posible aumentar el rendimiento de su conexión a internet instalando y configurando el Intellistream. Esto implicará ejecutar una prueba de velocidad.',
'p1300t003' : 'Instalar Intellistream',
'p1300t004' : 'Quizás más tarde',
'p1302t001' : 'Su firmware está al día.',
'p1316t001' : 'La instalación o la actualización del firmare ha fallado, por favor inténtelo de nuevo haciendo clic en «Buscar nueva versión del firmware».',
'p1318t001' : 'El archivo de actualización no es del tipo o versión correcta para este dispositivo. Fallo en la actualización. Busque el archivo correcto y pruebe de nuevo',
'p1333t001' : 'El firmware se ha actualizado con éxito.',
'p1400t001' : 'Aproveche al máximo el potencial de su puerto USB',
'p1400t002' : 'Existe software opcional que se puede instalar para ayudarle a exprimir todo el potencial de los puertos USB de su router.',
'p1400t003' : 'Mostrar el software opcional',
'p1500t001' : 'Usted está aquí',
'p1500t002' : 'Parece que usted se encuentra en Ia zona horaria de <span tid="gtCurrTimezone">Europa/Helsinki {REPLACE THIS SPAN WITH DETECTED Belkin TZ ID description}</span> . ¿Es esto correcto?',
'p1500t003' : 'Si, efectivamente',
'p1500t004' : 'Quiero escoger',
'p200t001' : 'Estableciendo la conexión...',
'p200t002' : ' Se están comprobando las conexiones físicas a su router.',
'p202At001' : 'Aún en proceso...',
'p202At002' : ' Se está detectando el tipo de conexión de su proveedor de servicios de internet. Esto puede llevar algunos minutos.',
'p202Bt001' : 'Aún en proceso...',
'p202Bt002' : ' Comprobando si su proveedor de servicios de internet requiere de una contraseña. Esto puede llevar algunos minutos.',
'p202Ct001' : 'Aún en proceso...',
'p202Ct002' : ' Comprobando la conexión.',
'p202t001' : 'Estableciendo la conexión...',
'p202t002' : ' Se está detectando el tipo de conexión de su proveedor de servicios de internet.',
'p208t001' : '¿Tiene a mano los valores VPI/VCI?',
'p208t002' : 'Para poder conectarse debe introducir los valores VPI y VCI. Estos identifican la ruta de comunicación que su ISP desea usar.',
'p208t003' : 'Su proveedor de internet debería haberle suministrado estos valores. Si no encuentra esta información, contacte con su ISP.',
'p208t006' : '0',
'p208t007' : '0',
'p208t009' : 'Comprobar mi conexión',
'p208t011' : 'VPI y VCI',
'p208t012' : 'Los identificadores Virtual Path Identifier y Virtual Circuit Identifier le proporcionan la ruta se debería usar para establecer y efectuar la comunicación con su ISP. Existen un buen numero de ajustes que se controlan de forma automática antes mostrarle un mensaje de error.<span class="nub"></span>',
'p209t001' : 'Existe algún problema con su configuración.',
'p209t002' : 'Su ISP no ha aceptado esos valores de VPI/VCI. ¿Desea probar una vez más?',
'p210CXt001' : 'Tiene una conexión PPPoE.',
'p210CXt002' : 'Necesitará un nombre de usuario y una contraseña para acceder a internet.',
'p210CXt004' : '<strong>Su proveedor de servicios de internet le debería haber proporcionado esta información. Si no la encontrase, contacte con su ISP.</strong>',
'p210CXt006' : '0',
'p210CXt007' : '0',
'p210CXt016' : 'Comprobar mi conexión',
'p210CXt017' : 'PPPoE',
'p210CXt018' : 'El protocolo Point-to-Point sobre Ethernet crea una conexión segura entre su router y el ISP. Esto es lo normal con compañías de teléfono. <span class="nub"></span>',
'p210DXt001' : 'Tiene una conexión PPPoA.',
'p210DXt002' : 'Necesitará un nombre de usuario y una contraseña para acceder a internet.',
'p210DXt004' : '<strong>Su proveedor de servicios de internet le debería haber proporcionado esta información. Si no la encontrase, contacte con su ISP.</strong>',
'p210DXt006' : '0',
'p210DXt007' : '0',
'p210DXt016' : 'Comprobar mi conexión',
'p210DXt017' : 'PPPoA',
'p210DXt018' : 'El protocolo Point-to-Point sobre ATM crea una conexión segura entre su router y el ISP. Esta es la que las compañías de teléfono usan normalmente.<span class="nub"></span>',
'p210t001' : 'Tiene una conexión DSL PPPoE.',
'p210t002' : 'Necesitará un nombre de usuario y una contraseña para acceder a internet.',
'p210t003' : '<strong>Su proveedor de servicios a de internet (ISP) debería haberle proporcionado esta información. Si no la encontrase, contacte con su ISP.</strong>',
'p210t005' : 'Nombre de usuario ISP:',
'p210t009' : 'Comprobar mi conexión',
'p210t010' : 'PPPoE',
'p210t011' : 'El protocolo Point-to-Point sobre Ethernet crea una conexión segura entre su router y el ISP. Esto es lo normal con compañías de teléfono. <span class="nub"></span>',
'p211t001' : 'Estableciendo la conexión...',
'p211t002' : ' Se está intentando iniciar la sesión con su proveedor de servicios de internet. Esto podría tardar unos dos minutos aproximadamente.',
'p212DXt001' : 'Existe algún tipo de error con su configuración PPPoA.',
'p212DXt002' : 'Su nombre de usuario, contraseña o ambos son incorrectos. Vuelva a intentarlo de nuevo. Si no encuentra la información correcta, contacte con su ISP.',
'p212t001' : 'Existe algún tipo de error con su configuración PPPoE.',
'p212t002' : 'Su nombre de usuario, contraseña o ambos son incorrectos. Vuelva a intentarlo de nuevo. Si no encuentra la información correcta, contacte con su ISP.',
'p220t002' : 'Para completar la conexión y el acceso a internet, introduzca un nombre de usuario, una contraseña y una dirección de servicio.',
'p220t003' : '<strong>Su proveedor de servicios de internet le debería haber proporcionado esta información. Si no la encontrase, contacte con su ISP.</strong>',
'p220t006' : 'Nombre de usuario ISP:',
'p220t007' : 'Dirección de servicio:',
'p220t010' : 'Comprobar mi conexión',
'p220t013' : 'Tiene una conexión de tipo L2TP o PPTP.',
'p220t014' : 'O seleccione de forma manual mi conexión &raquo;',
'p220t015' : 'L2TP y PPTP',
'p220t016' : 'Tanto L2TP (Layer 2 Tunneling Protocol) como PPTP (Point-to-Point Tunneling Protocol) crean una conexión privada encriptada entre usted y su ISP.<span class="nub"></span>',
'p221t001' : 'Estableciendo la conexión...',
'p221t002' : ' Se está intentando iniciar la sesión con su proveedor de servicios de internet. Esto puede tardar hasta 2 minutos.',
'p222t002' : 'Su nombre de usuario, contraseña o ambos son incorrectos. Vuelva a intentarlo de nuevo. Si no encuentra la información correcta, contacte con su ISP.',
'p222t004' : 'Existe algún tipo de error con su configuración.',
'p2300t001' : 'Su versión instalada de Firmware:',
'p2300t002' : 'Actualizar firmware desde un archivo guardado localmente:',
'p2300t006' : '¿Está seguro de que desea instalar {{file}}?',
'p2300t010' : 'Buscar nueva versión del firmware',
'p2400t006' : 'Sus ajustes actuales serán modificados. ¿Está seguro de que desea instalar {{file}}?',
'p2410t001' : '¿Seguro que se quieres restablecer los ajustes de fábrica?',
'p2410t002' : 'Al hacer clic en «Si» se borrarán los ajustes del router, como por ejemplo el nombre de usuario y la contraseña, reemplazándolos por los valores predeterminados de fábrica.',
'p300t005' : 'Ahora está conectado.',
'p310t001' : '¡Existe una actualización disponible!',
'p310t001x' : 'Esta actualización (v2.1.0c) incluye:',
'p310t002' : 'Para instalar la última versión del firmware, lea y acepte el acuerdo de licencia.',
'p310t003' : 'Acuerdo de licencia',
'p310t004' : 'Acepto el acuerdo de licencia.',
'p310t005' : 'Instalar la actualización',
'p310t006' : '¿Qué es el firmware?',
'p310t007' : 'El firmware es el software que opera su router. Se actualiza el firmware para mejorar el rendimiento del router, por lo que es recomendable tener la última versión disponible.  <span class="nub"></span>',
'p315t001' : 'Descargando la nueva versión de firmware.',
'p315t002' : 'Progreso de la descarga:',
'p315t003' : '¿Qué es el firmware?',
'p315t004' : 'El firmware es el software que opera su router. Se actualiza el firmware para mejorar el rendimiento del router, por lo que es recomendable tener la última versión disponible.  <span class="nub"></span>',
'p320t001' : 'Instalando la nueva versión de firmware.',
'p320t002' : 'Una vez que la nueva versión de firmware se haya implementado, se reiniciará el router para finalizar la instalación.',
'p320t004' : '¿Qué es el firmware?',
'p320t005' : 'El firmware es el software que opera su router. Se actualiza el firmware para mejorar el rendimiento del router, por lo que es recomendable tener la última versión disponible.  <span class="nub"></span>',
'p320t006' : 'Este proceso puede tardar unos 3 minutos. Progreso de la actualización:',
'p320t010' : 'Una vez que la nueva versión de firmware se haya implementado, se reiniciará el módem para finalizar la instalación.',
'p321t001' : 'Reiniciando el router',
'p321t002' : 'Reiniciando el módem',
'p321t003' : 'Ahora que ya se ha completado la instalación del firmware, se procederá a reiniciar el router para confirmar la operación.',
'p321t004' : 'Reiniciando:',
'p321t005' : 'Actualizaciones del firmware',
'p321t006' : 'El firmware es el software que se usa para implementar los protocolos de red y de seguridad. Las actualizaciones mejoran la fiabilidad y funcionalidad del dispositivo, por lo que es recomendable que compruebe que tiene la última versión instalada. <span class="nub"></span>',
'p321t010' : 'Ahora que ya se ha completado la instalación del firmware, se procederá a reiniciar el módem para confirmar la operación.',
'p330t001' : 'Comprobando la velocidad de conexión...',
'p330t002' : 'Una prueba rápida de velocidad facilitará al router la optimización su conexión a internet. Esta operación puede durar uno o dos minutos.',
'p331t001' : 'El firmware se ha actualizado.',
'p332t001' : 'Se intentará más tarde de nuevo la actualización de firmware.',
'p333t001' : 'El firmware se ha actualizado.',
'p334t001' : '¡Estos son los resultados de la prueba de velocidad!',
'p334t002' : 'Estas son las conclusiones de la misma:',
'p334t003' : 'Velocidad de descarga',
'p334t004' : 'Mb/s',
'p334t005' : 'Velocidad de subida',
'p334t006' : 'Mb/s',
'p340t002' : ' Se está efectuando de nuevo la conexión a su router para continuar la operación.',
'p341t001' : 'Por favor reinicie el router',
'p341t002' : 'Existe un problema para efectuar la reconexión con el router. Un reinicio rápido podría ayudar a resolver el problema.',
'p341t003' : 'Desenchufe la fuente de alimentación del router, espere unos segundos y vuelva a enchufarlo. Cuando el router tenga encendida una luz azul fija estará listo para continuar.',
'p341t003w' : 'Desenchufe la fuente de alimentación del router, espere unos segundos y vuelva a enchufarlo. Cuando el router tenga encendida una luz azul fija estará listo para continuar.',
'p341t004' : ' Mientras que efectúa la operación se detectará automáticamente cuando el router esté listo de nuevo.',
'p342t001' : ' Se está efectuando de nuevo la conexión a su router para continuar la operación.',
'p342t002' : 'Puede que necesite seleccionar de nuevo su red inalámbrica <span tid="Network24SSID">({REPLACE WITH 2.4 SSID})</span> de la lista de redes inalámbricas para poder continuar.',
'p343t002' : ' Se está volviendo a conectar con su router para continuar.',
'p343t003' : 'Puede que tenga que seleccionar de nuevo su red inalámbrica <span tid="Network24SSID">({REPLACE WITH 2.4 SSID})</span> para continuar.',
'p344t001' : 'Por favor reinicie el router.',
'p344t002' : 'Existe un problema para efectuar la reconexión con el router. Un reinicio rápido podría ayudar a resolver el problema.',
'p344t003' : 'Desenchufe la fuente de alimentación del router, espere unos 15 segundos y vuelva a enchufarla. Cuando el router tenga encendida una luz azul fija se volverá a intentar la conexión.',
'p344t003w' : 'Desenchufe la fuente de alimentación del router, espere unos segundos y vuelva a enchufarlo. Cuando el router tenga encendida una luz azul fija se volverá a intentar la conexión.',
'p344t004' : ' Mientras que efectúa la operación se detectará automáticamente cuando el router esté listo de nuevo.',
'p400f010' : 'WPA2',
'p400f011' : 'WPA/WPA2',
'p400f012' : 'WEP',
'p400f013' : 'Abrir',
'p400t001' : 'Conectar todo más rápidamente.',
'p400t002' : 'Si le da al nuevo router el mismo nombre y contraseña de red que al antiguo facilitará la conexión de todos los otros dispositivos.',
'p400t004' : 'Nombre de red:',
'p400t008' : 'Tipo de seguridad: <em class="hide-on-phones">: (WPA2 es el más seguro).</em>',
'p400t014' : 'La banda de 5 Ghz tendrá el mismo nombre, pero con la extensión «.media» añadida al final.',
'p400t015' : 'Puede cambiar esto posteriormente si así lo desea.',
'p400t017' : 'Guardar y continuar',
'p400t018' : '¿Por qué debería renombrar mi red?',
'p400t019' : 'Si usa el mismo nombre y contraseña de red todos aquellos dispositivos inalámbricos que estuviesen previamente conectados a su router antiguo se conectarán automáticamente a su nuevo router. Así mismo será más sencillo encontrar un nombre más característico cuando esté buscando por su red en otros dispositivos. <span class="nub"></span>',
'p450a009' : '¿Cuál es el siguiente paso?',
'p450t001' : 'Los cambios se han guardado.',
'p450t002' : 'Aquí tiene su nombre y contraseña de red',
'p450t003' : 'Si ha introducido su nombre y contraseña de red antiguos, se procederá a la reconexión de sus dispositivos inalámbricos ya existentes.',
'p450t004' : 'Nombre:',
'p450t008' : 'Su router tiene una pegatina en la parte de abajo donde puede escribir su nombre de red nuevo. De esta forma siempre lo podrá encontrar cuando lo necesite.',
'p450t011' : 'Si ha seleccionado su nombre y contraseña de red antiguos; la mayoría de sus dispositivos inalámbricos se reconectarán de forma automática la próxima vez que los encienda. En otros casos tendrá que seleccionar de nuevo su red antes de que puedan conectarse. Existen instrucciones para Windows SO X, iOS, y Android en la Guía rápida de instalación.  <span class="nub"></span>',
'p451a009' : '¿Cuál es el siguiente paso?',
'p451t001' : 'Sin cambios.',
'p451t002' : 'No se ha modificado su nombre y contraseña de red.',
'p451t003' : 'Tendrá que introducir en cada uno de sus dispositivos inalámbricos su nombre y contraseña de red:',
'p451t004' : 'Nombre:',
'p451t008' : 'Su router tiene una pegatina en la parte de abajo donde puede escribir su nombre nuevo de red. De esta forma siempre lo podrá encontrar cuando lo necesite.',
'p451t011' : 'Tiene que configurar cada uno de sus dispositivos inalámbricos con la nueva red. Existen instrucciones para Windows SO X, iOS, y Android en la Guía rápida de instalación.  <span class="nub"></span>',
'p500t001' : 'Por favor, registre su router.',
'p500t002' : 'El proceso de registro es rápido y le puede ahorrar mucho tiempo si alguna vez tiene que ponerse en contacto con el servicio técnico.',
'p500t004' : '¿Por qué debo registrarlo?',
'p500t005' : 'Si el servicio técnico tiene un mínimo de datos sobre sus aparatos y conexión puede ayudarle de manera más eficaz si así lo requiere en un futuro. <span class="nub"></span>',
'p500tCancel' : 'Registrar más tarde &raquo;',
'p500tSubmit' : 'Completar el registro',
'p600t001' : 'Visite la página de software opcional de su router para obtener software similar para sus otros ordenadores o dispositivos móviles.',
'p600t002' : 'Gracias, volver al panel de control',
'p600t003' : 'Software opcional',
'p600t004' : 'Estas herramientas de software le pueden ayudar a sacarle todo el partido a las opciones avanzadas que el router le ofrece. Existen descargas disponibles para Apple iOS, Android, Windows y SO X.  <span class="nub"></span>',
'p601t001' : '<strong>¡Gracias por su registro!</strong>',
'p700MRt001' : 'No se pudo configurar automáticamente su conexión. Para ayudarle con el problema, introduzca más información.',
'p700MRt002' : '¿Qué tipo de conexión está configurando?',
'p700MRt003' : 'Mi conexión es una:',
'p700MRt005' : 'Conexión dinámica  (Bridge 1483)',
'p700MRt007' : 'Conexión PPPoE',
'p700MRt009' : 'Conexión PPPoA',
'p700MRt011' : 'Conexión estática (IPoA)',
'p700MRt014' : 'No estoy seguro que tipo de conexión tengo:',
'p700MRt016' : 'Intentar el modo automático de nuevo',
'p700MRt017' : 'Tipos de conexión',
'p700MRt018' : '<span class="black">Dinámica —</span> Estas conexiones se están ganando cada vez más en popularidad para algunos proveedores de DSL.',
'p700MRt019' : '<span class="black">PPPoE y PPTP —</span>Estas conexiones requieren de un nombre y contraseña de red que son suministrados por el ISP.',
'p700MRt021' : '<span class="black">Estática —</span> Requiere de unos parámetros personalizados y únicos para cada usuario. <span class="nub"></span>',
'p700t001' : 'No se pudo configurar automáticamente su conexión. Para ayudarle con el problema, introduzca más información.',
'p700t002' : '¿Qué tipo de conexión está configurando?',
'p700t003' : 'Mi conexión es una:',
'p700t005' : 'Conexión dinámica',
'p700t007' : 'Conexión PPPoE',
'p700t008' : 'Conexión L2TP o PPTP',
'p700t013' : 'Conexión estática',
'p700t014' : 'No estoy seguro que tipo de conexión es:',
'p700t914' : 'Si aun no puede determinar su tipo de conexión, póngase en contacto con su proveedor de servicios de internet (ISP).',
'p700t016' : 'Intentar el modo automático de nuevo',
'p700t017' : 'Tipos de conexión',
'p700t018' : '<span class="black">Dinámica  —</span> Común para la mayoría de los proveedores de cable y fibra óptica y algunos proveedores de DSL.',
'p700t019' : '<span class="black">PPPoE y PPTP  —</span>Requiere de un nombre y contraseña de red que es suministrado por el ISP.',
'p700t021' : '<span class="black">Estática —</span> Requiere de unos parámetros personalizados y únicos para cada usuario. <span class="nub"></span>',
'p701MRt001' : 'Ha seleccionado un tipo de conexión dinámica.',
'p701MRt002' : 'Es posible que su proveedor de internet le haya suministrado valores de configuración adicionales.',
'p701MRt004' : 'Configuración dinámica:',
'p701MRt006' : '0',
'p701MRt007' : '0',
'p701MRt016' : 'Comprobar mi conexión',
'p701MRt017' : 'Conexiones dinámica',
'p701MRt018' : 'Una conexión dinámica es configurada automáticamente una vez que se ha establecido la comunicación con el ISP. <span class="nub"></span>',
'p701t001' : 'Estableciendo conexión dinámica...',
'p701t002' : ' Se está efectuando una petición de conexión a su proveedor de servicios de internet.',
'p702t001' : 'Reiniciando el módem...',
'p702t002' : 'Preparando para reiniciar el módem e intentar un nuevo tipo de conexión.',
'p710MRt001' : 'Ha seleccionado un tipo de conexión estática.',
'p710MRt002' : 'Su proveedor de internet debería haberle suministrado los valores de configuración de su conexión estática. Si no encuentra esta información, contacte con su ISP.',
'p710MRt004' : 'Parámetros de la conexión estática:',
'p710MRt005' : 'Dirección IP:',
'p710MRt006' : '0',
'p710MRt007' : 'Máscara de subred:',
'p710MRt008' : '0',
'p710MRt009' : 'Puerta de enlace predeterminada:',
'p710MRt010' : '0',
'p710MRt011' : 'Servidor DNS primario:',
'p710MRt012' : '0',
'p710MRt013' : 'Servidor DNS secundario:',
'p710MRt014' : '0',
'p710MRt015' : 'Nota: no todos los ISP requieren de un servidor DNS secundario.',
'p710MRt016' : 'Comprobar mi conexión estática.',
'p710MRt017' : 'Conexiones estáticas',
'p710MRt018' : 'Una conexión estática se configura manualmente, pero proporciona una dirección fija a su router, a la cual se puede acceder más fácilmente desde fuera de su red. Las conexiones estáticas son inusuales en servicios de internet domésticos y generalmente son más caras. <span class="nub"></span>',
'p710t001' : 'Ha seleccionado un tipo de conexión estática.',
'p710t002' : 'Su proveedor de internet debería haberle suministrado los valores de configuración de su conexión estática. Si no encuentra esta información, contacte con su ISP.',
'p710t004' : 'Parámetros de la conexión estática:',
'p710t005' : 'Dirección IP:',
'p710t006' : '0',
'p710t007' : 'Máscara de subred:',
'p710t008' : '0',
'p710t009' : 'Puerta de enlace predeterminada:',
'p710t010' : '0',
'p710t011' : 'Servidor DNS primario:',
'p710t012' : '0',
'p710t013' : 'Servidor DNS secundario:',
'p710t014' : '0',
'p710t015' : 'Nota: no todos los ISP requieren de un servidor DNS secundario.',
'p710t016' : 'Comprobar mi conexión estática.',
'p710t017' : 'Conexiones estáticas',
'p710t018' : 'Una conexión estática se configura manualmente, pero proporciona una dirección fija a su router, a la cual se puede acceder más fácilmente desde fuera de su red. Conexiones estáticas son inusuales en servicios de internet domésticos y generalmente son más caros.  <span class="nub"></span>',
'p711t001' : 'Estableciendo conexión estática...',
'p711t002' : ' Se está efectuando una petición de conexión a su proveedor de servicios de internet.',
'p712t001' : 'Existe algún tipo de error con la configuración de su conexión estática.',
'p712t002' : 'El valor de alguna de las direcciones o de algún otro elemento introducido es incorrecto, pero no se puede determinar cual.',
'p800t001' : 'Aplicando los cambios',
'p800t002' : 'Se están aplicando los cambios y se procederá a reiniciar el router para confirmarlos.',
'p801t002' : ' Se está esperando a que el router se vuelva a conectar. Una vez esta operación se haya realizado se continuará.',
'p802t002' : 'Se necesita una conexión inalámbrica con el router para continuar.',
'p802t004' : 'Vaya al menú de redes inalámbricas del dispositivo',
'p802t005' : 'Seleccione su nueva red, con el siguiente nombre <strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong>',
'p802t007' : 'Introduzca su contraseña, que es <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>',
'p802t009' : 'Se conectará al router y se procederá con la operación.',
'p802t010' : ' Esperando a que el router se vuelva a conectar.',
'p803t002' : 'Se necesita una conexión inalámbrica con el router para continuar.',
'p803t003' : 'Como ha cambiado el nombre de red, es posible que tenga que seleccionar de nuevo su red inalámbrica:',
'p803t004' : 'Vaya al menú de redes inalámbricas del dispositivo',
'p803t005' : 'Seleccione su nueva red, con el siguiente nombre <strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong>',
'p803t007' : 'Introduzca su contraseña, que es <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>',
'p803t009' : 'Se conectará al router y se procederá con la operación.',
'p803t010' : ' Esperando a que el router se vuelva a conectar.',
'p804t001' : 'El dispositivo no se ha conectado.',
'p804t002' : 'Esto ocurre de vez en cuando y tiene fácil solución.',
'p804t025' : 'Si puede conectarse a internet desde otro dispositivo, vaya a: <strong>http://belk.in/PMuxOg</strong>',
'p804t026' : 'Si esto no resultase, enchufe el cable Ethernet directamente conectando el módem al ordenador.',
'p804t027' : ' Una vez se haya detectado una conexión se procederá a continuar automáticamente con la operación.',
'p900t001' : 'Se tiene que reiniciar el módem.',
'p900t002' : 'El módem no responde.',
'p900t003' : 'Efectúe las siguientes operaciones para reiniciar su módem:',
'p900t004' : 'Apague el módem. Normalmente lo que debe hacer es pulsar el botón de apagado en el módem o simplemente desenchufar la fuente de alimentación del mismo. Para aquellos módems que con una batería, tendrá que encontrar el botón de «Reset» (Restablecer).',
'p900t005' : 'Espere 15 segundos.',
'p900t006' : 'Vuelva a encender el módem.',
'p900t007' : 'Tras unos segundos las luces del mismo se encenderán de nuevo, indicando que este está listo para iniciar la comunicación con el router.',
'p900t008' : 'Se detectará automáticamente el proceso de apagado y encendido de su módem, tras el cual la operación se continuará.',
'p900t009' : '¿Por qué se debe reiniciar el módem?',
'p900t010' : 'Porque esta operación es necesaria para algunos modelos si se quiere establecer comunicación con un nuevo router u ordenador. Se ha detectado su módem, pero no se ha establecido comunicación con el nuevo router. Un reinicio rápido resolverá este problema. <span class="nub"></span>',
'p901t001' : 'Reinicie ahora su módem...',
'p901t002' : ' Se está esperando que el módem se apague y se encienda de nuevo.',
'p902t001' : 'Se ha detectado que el módem se ha apagado, ¡bien hecho!…',
'p902t002' : ' Se espera que este se vuelva a encender de nuevo.',
'p903t001' : '¿Necesita más tiempo?',
'p903t002' : ' Se está esperando que el módem se reinicie. ¿Necesita más tiempo?',
'p903t005' : 'Normalmente esto significa que debe usar el botón de encender y apagar en el módem o simplemente desenchufarlo de la corriente, aunque algunos módem funcionan con batería por lo que en estos casos tendrá que encontrar el botón de Restablecer.',
'p904t001' : '¿Necesita más tiempo?',
'p904t002' : ' Se está esperando que el módem se reinicie de nuevo. ¿Necesita más tiempo?',
'p905t001' : 'Se ha detectado de nuevo su módem…',
'p905t002' : ' Se espera que este se sincronice con su ISP. Esta operación puede durar uno o dos minutos.',
'p950IMRt001' : 'No se pudo detectar una conexión a su línea ADSL.',
'p950IMRt002' : 'Compruebe que hay un cable de red conectando la toma de ADSL de la pared con el puerto de color gris de su router.',
'p950IMRt004' : 'Puede ser un error de escritura.',
'p950IMRt005' : 'Debería haber un cable de red conectando el puerto gris en su router con la entrada de ADSL o de teléfono. Este cable transporta la señal desde su ISP hasta su router, y sin él no se puede efectuar la conexión a internet. Compruebe que este cable está bien conectado.',
'p950IMRt006' : 'Aquí abajo puede ver el aspecto que estas conexiones deberían tener:',
'p950IMRt007' : 'Debería haber un cable de red conectando la toma de pared de la ADSL a al entrada de alimentación de su router (que contiene un módem integrado). Este cable transporta la señal desde su ISP hasta su router, y sin él no se puede efectuar la conexión a internet.',
'p950IMRt009' : 'Aquí abajo puede ver el aspecto que estas conexiones deberían tener:',
'p950IMRt010' : 'Se seguirá esperando a detectar la conexión mientras realiza la consulta.',
'p950IMRt014' : 'Cableado',
'p950IMRt015' : 'La dificultad en la instalación del cableado más común se da entre la toma de pared y el router. Es importante que compruebe ambos extremos del cable. Uno de los extremos debería estar conectado en el puerto gris del router nuevo, mientras que el otro extremo lo debería estar a la toma de ADSL. En muchos casos se puede necesitar un filtro entre la toma de pared de ADSL y el cable. <span class="nub"></span>',
'p950PMt001' : 'No se pudo detectar una conexión a su línea ADSL.',
'p950PMt002' : 'Asegúrese que existe una conexión de red entre su router y la entrada de la fuente de alimentación (la cual tiene un módem integrado).',
'p950PMt004' : 'Puede ser un error de escritura.',
'p950PMt005' : ' Compruebe que el cable de red que aparece separándose del cable de corriente está conectado al puerto amarillo WAN en el router. Sin esta conexión de red no podrá conectarse a internet.',
'p950PMt009' : 'Aquí abajo puede ver el aspecto que estas conexiones deberían tener:',
'p950PMt010' : 'Se seguirá esperando a detectar la conexión mientras realiza la consulta.',
'p950PMt011' : 'Cableado',
'p950PMt012' : 'La dificultad en la instalación del cableado más común se da entre la toma de pared y el módem. Es importante que compruebe ambos extremos del cable. Uno de los extremos debería estar conectado a la fuente de alimentación del router nuevo, mientras que el otro extremo lo debería estar a la toma de ADSL. En muchos casos se puede necesitar un filtro entre la toma de pared de ADSL y el cable. <span class="nub"></span>',
'p950t001' : 'No se ha detectado aún ninguna conexión con su módem.',
'p950t002' : 'Asegúrese de que el módem está enchufado y encendido.',
'p950t003' : 'Asegúrese que hay un cable Ethernet conectando el módem a su router.',
'p950t004' : 'Puede ser un error de escritura.',
'p950t005' : 'Su módem debería estar encendido y conectado al puerto amarillo del router mediante un puerto Ethernet.',
'p950t006' : 'Compruebe lo siguiente:',
'p950t007' : 'Asegúrese de que su módem esté encendido. Compruebe que ambos extremos del adaptador de corriente estén bien enchufados, y que las luces del módem estén encendidas.',
'p950t008' : 'Su módem debería estar conectado al puerto amarillo del router mediante un puerto Ethernet. Este cable transporta la señal desde el módem al router, y sin él no se puede efectuar la conexión a internet.',
'p950t009' : 'Su conexiones deberían aparecer así:',
'p950t010' : 'Se seguirá esperando a detectar la conexión mientras realiza la consulta.',
'p950t011' : 'Cableado',
'p950t012' : 'El problema de instalación más común es el de un cableado defectuoso entre el módem y el router. Uno de los extremos debería estar conectado en el puerto amarillo del router nuevo, mientras que el otro extremo lo debería estar en un puerto similar en el módem. Asegúrese de que ambos están bien enchufados. El etiquetado de los puertos es distinto según el fabricante; puede que lo encuentre etiquetado como «data», «LAN», «network», o «Ethernet» (datos, LAN, red o Ethernet). <span class="nub"></span>',
'p951IMRt001' : '¿Necesita más tiempo?',
'p951IMRt002' : ' Necesita enchufarlo a su línea ADSL. ¿Necesita más tiempo?',
'p951t001' : '¿Necesita más tiempo?',
'p951t002' : ' Se está esperando que el módem se reinicie de nuevo. ¿Necesita más tiempo?',
'pDAt001' : 'Duplicar el administrador',
'pDAt002' : 'Este dispositivo está siendo gestionado por  <span id="ipaddr"></span> en este momento',
'PIC_blocked_content' : 'El Control parental de internet está activado y el acceso a internet de este dispositivo está actualmente bloqueado. Haga clic en el botón de abajo para configurar los ajustes del Control parental de internet.',
'PIC_blocked_title' : 'El acceso a internet de este dispositivo está actualmente bloqueado.',
'PIC_S1t0006' : 'Horario acceso a internet:',
'PIC_S1t006' : 'Recientemente en su red:',
'PIC_S2t003' : 'Noches entresemana',
'PIC_S2t004' : 'Fines de semana',
'PIC_S2t005' : '(Domingo - Jueves)',
'PIC_S2t006' : '(Viernes - Sábado)',
'PIC-blocked' : 'bloqueado',
'PIC-S1dt001' : '¿Desea suspender la conectividad a internet en toda su red?',
'PIC-S1t001' : 'Bloquear todos los dispositivos:',
'PIC-S1t003' : 'Todos los dispositivos están desconectados de internet.',
'PIC-S1t004' : 'Restaurar acceso',
'PIC-S1t005' : 'Actualmente en su red:',
'PIC-S1t010' : 'Buscando dispositivos:',
'PIC-S1t020' : 'Se ha pausado su programación de Control parental de internet',
'PIC-S1t021' : 'El router no conoce la hora actual, lo que impide que la función de bloquear/desbloquear no pueda llevarse a cabo en su programación de Control parental de internet.  Esto se resolverá cuando el router haya restablecido la hora correcta después de volver a conectar con el servidor tiempo NTP.',
'PIC-S1t022' : 'Su router buscará el servidor de tiempo NTP regularmente cada cierto tiempo, aunque usted también puede cambiar el servidor de tiempo desde la  <a href="#" tid="gtSystemSettings" style="">Configuración del sistema</a>.',
'PIC-unblocked' : 'desbloqueado',
'pNoTime_content' : 'Su router no puede proporcionar la hora porque ha perdido la conexión con el servidor de tiempo NTP. Las funcionalidades del router gestionadas por intervalos de tiempo, como el Control parental de internet, el Modo Eco, o el Self-Healing estarán deshabilitadas hasta que se pueda efectuar la conexión con el servidor de tiempo NTP. <br> <br> El router consultará la hora de forma automática cada varios minutos.',
'pNoTime_title' : '¿Qué hora es?',
'pODLAplt001' : 'Aplicando el paquete de idioma',
'pODLAplt002' : 'Cambiando al idioma seleccionado…',
'pODLDLt001' : 'Descargar paquete de idioma',
'pODLDLt002' : 'Obteniendo del servidor el idioma escogida…',
'pODLErrt001' : 'Lo lamentamos',
'pODLErrt002' : 'Aceptar',
'pStatst004' : 'Ver todo &raquo;',
'Support1t001' : 'No se ha detectado aún ninguna conexión con su módem.',
'Support1t002' : 'Asegúrese de que el módem está enchufado y encendido.',
'Support1t003' : 'Asegúrese que hay un cable Ethernet conectando el módem a su router.',
'Support1t004' : 'Puede ser un error de escritura.',
'Support1t005' : 'Su módem debería estar encendido y conectado al puerto amarillo del router mediante un puerto Ethernet.',
'Support1t006' : 'Compruebe lo siguiente:',
'Support1t007' : 'Asegúrese de que su módem esté encendido. Compruebe que ambos extremos del adaptador de corriente estén bien enchufados, y que las luces del módem estén encendidas.',
'Support1t008' : 'Su módem debería estar conectado al puerto amarillo del router mediante un puerto Ethernet. Este cable transporta la señal desde el módem al router, y sin él no se puede efectuar la conexión a internet.',
'Support1t009' : 'Su conexiones deberían aparecer así:',
'Support1t010' : 'Una vez que haya intentando estos pasos haga clic en «Intentar de nuevo».',
'Support7t012' : 'Vaya a <strong>http://belk.in/Q4XXca</strong>en un dispositivo con conexión a internet',
'Support1t016' : 'Cableado',
'Support1t017' : 'El problema de instalación más común es el de un cableado defectuoso entre el módem y el router. Uno de los extremos debería estar conectado en el puerto amarillo del router nuevo, mientras que el otro extremo lo debería estar en un puerto similar en el módem. Asegúrese de que ambos están bien enchufados. El etiquetado de los puertos es distinto según el fabricante; puede que lo encuentre etiquetado como «data», «LAN», «network», o «Ethernet» (datos, LAN, red o Ethernet). <span class="nub"></span>',
'Support2t001' : 'Su módem nunca ha sido reiniciado.',
'Support2t002' : 'Pruebe a desenchufar el módem de la toma de corriente.',
'Support2t003' : 'Es posible que su módem tenga un botón de «Reset» (Restablecer), que usted debe pulsar.',
'Support2t004' : '¿Tiene problemas al reiniciar el módem?',
'Support2t005' : 'Intente llevar a cabo los siguientes pasos para reiniciar su módem:',
'Support2t006' : 'Desenchufe la fuente de alimentación del módem.',
'Support2t007' : 'Espere a que todas la luces de estado se hayan apagado.',
'Support2t008' : 'Si la luces siguieran encendidas, es posible que su módem tenga una batería de reserva. En algún lugar del panel trasero debe haber un botón de «Reset» (Restablecer). Púlselo.',
'Support2t009' : 'Las luces del módem deberían ahora apagarse completamente. Espere unos segundos antes de volver a enchufar la fuente de alimentación.',
'Support2t010' : 'Una vez que haya intentando estos pasos haga clic en «Intentar de nuevo».',
'Support2t016' : '¿Por qué se debe reiniciar el módem?',
'Support2t017' : 'Porque esta operación es necesaria para algunos modelos si se quiere establecer comunicación con un nuevo router u ordenador. Se ha detectado su módem, pero no se ha establecido comunicación con el nuevo router. Un reinicio rápido resolverá este problema. <span class="nub"></span>',
'Support3MRt001' : 'No se pudo detectar una conexión a su línea ADSL.',
'Support3MRt002' : 'Asegúrese de que haya un cable de red conectando la toma de pared de ADSL y su router.',
'Support3MRt003' : 'En algunas localidades se requiere del uso de un filtro.',
'Support3MRt004' : 'Es bastante probable que el problema sea causado por una mala conexión de los cables.',
'Support3MRt005' : 'Debería haber un cable de red conectando el puerto gris en su router con la entrada de ADSL o de teléfono.',
'Support3MRt006' : 'Compruebe que ambos extremos del cable están bien conectados.',
'Support3MRt007' : 'Compruebe que el cable esta conectado al puerto gris de su router y no en los otros de color amarillo.',
'Support3MRt008' : 'Si se le hubiese proporcionado un filtro de línea ADSL, asegúrese de que este está bien instalado entre el cable y la toma de ADSL.',
'Support3MRt010' : 'Compruebe que ambos extremos del cable están bien conectados.',
'Support3MRt011' : 'Compruebe que el cable está conectado al puerto de red de la fuente de alimentación de su router-',
'Support3MRt012' : 'Si se le hubiese proporcionado un filtro de línea ADSL, asegúrese de que este está bien instalado entre el cable y la toma de ADSL.',
'Support3MRt016' : 'Una vez que haya seguido todos estos pasos, estará listo para intentarlo de nuevo.',
'Support3MRt018' : 'Visite la siguiente URL en un dispositivo que esté conectado a internet y aprenda como resolver el problema usted mismo: <strong>www.belkin.com/support3mr</strong>',
'Support3MRt021' : 'Cableado',
'Support3MRt022' : 'El problema de cableado más común se suele producir en relación a la toma de ADSL. Es importante que compruebe ambos extremos del cable. <span class="nub"></span>',
'Support3MRt050' : 'Compruebe que hay un cable de red conectando la fuente de alimentación de su router y la toma del teléfono.',
'Support3MRt051' : 'Debería haber un cable conectando la fuente de alimentación de su router y la toma de teléfono/ADSL.',
'Support3PMt001' : 'No se pudo detectar una conexión a su línea ADSL.',
'Support3PMt002' : 'Asegúrese que existe una conexión de red entre su router y la entrada de la fuente de alimentación (la cual tiene un módem integrado).',
'Support3PMt004' : 'Es bastante probable que el problema sea causado por una mala conexión de los cables.',
'Support3PMt005' : 'Debería haber una conexión de red entre el puerto amarillo de su router y la fuente de alimentación de su router.',
'Support3PMt006' : 'Consulte la salida de la fuente de alimentación del router y encuentre el cable que se separa dividiéndose en dos líneas distintas. Una de estas tiene un conector ethernet.',
'Support3PMt007' : 'Introduzca el conector ethernet en el puerto amarillo de su router.',
'Support3PMt010' : 'Una vez que haya hecho esto, podrá intentarlo de nuevo.',
'Support3PMt012' : 'Vaya a <strong>www.belkin.com/support3PM</strong>desde un dispositivo con conexión a internet.',
'Support3PMt016' : 'Cableado',
'Support3PMt017' : 'Es esencial asegurar que las conexiones entre la toma de ADSL y el router no tengan cortes y estén bien aseguradas. El router espera que esta señal venga a través del puerto amarillo. El cable que sale desde la fuente de alimentación del router transporta la señal y la corriente al router y las dos mitades del mismo deben ser conectadas al router para que todo funcione correctamente. <span class="nub"></span>',
'Support3t001' : 'El módem nunca se volvió a encender.',
'Support3t002' : 'Compruebe que el módem está recibiendo corriente.',
'Support3t003' : 'Puede que tenga que esperar un poco para que este esté listo para continuar.',
'Support3t004' : '¿Tiene problemas al reiniciar el módem?',
'Support7t005' : 'Pruebe a seguir los siguientes pasos para establecer una conexión ADSL:',
'Support7t006' : 'Compruebe que el cable de red que sale de su módem router está conectado a una toma de teléfono con una línea de internet activada.  Tras esto haga clic en Volver a intentar y compruebe si el módem router está conectado a internet.',
'Support7t007' : 'Si su módem router comparte la toma de teléfono con una línea de teléfono ordinaria (a través de un divisor splitter ADSL), remplace el divisor splitter ADSL por un filtro splitter (opcional). Tras esto haga clic en Volver a intentar y compruebe si el módem router detecta el proveedor de servicios de internet.',
'Support7t008' : 'Si el paso 2 de arriba no funciona, es muy posible que requiera el us de filtros de ADSL*. Si dispusiese ya de estos (los proveedores de servicios de internet suelen proporcionarlos), conéctelos entre los teléfonos de línea ordinarios y sus tomas de teléfono.',
'Support7t009' : 'Si después de haber intentado llevar a cabo los pasos 1-3 el problema con la conexión de ADSL aun persiste, pónganse en contacto con su proveedor de servicios de internet y requiera asistencia técnica. Comenteles que está teniendo problemas al intentar sincronizar su módem router con el ISP.',
'Support3t010' : 'Una vez que haya intentando estos pasos haga clic en «Intentar de nuevo».',
'Support3t016' : '¿Por qué se debe reiniciar el módem?',
'Support3t017' : 'Porque esta operación es necesaria para algunos modelos si se quiere establecer comunicación con un nuevo router u ordenador. Se ha detectado su módem, pero no se ha establecido comunicación con el nuevo router. Un reinicio rápido resolverá este problema. <span class="nub"></span>',
'Support4t001' : 'No se pudo conectar de nuevo al router.',
'Support4t002' : 'Pruebe a reiniciar el router.',
'Support4t003' : 'Una vez que el router este funcionando de nuevo, pruebe a conectarse a él de nuevo.',
'Support4t004' : 'Existen otras medidas que puede tomar para resolver el problema.',
'Support4t005' : 'Primero, pruebe a reiniciar el router.',
'Support4t006' : 'Desenchufe la fuente de alimentación del router, espere unos segundos y vuelva a enchufarlo.',
'Support4t006w' : 'Desenchufe la fuente de alimentación del router, espere unos segundos y vuelva a enchufarlo.',
'Support4t007' : 'Cuando el router tenga encendida una luz azul fija estará listo para continuar.',
'Support4t008' : 'Lo siguiente es probar con una conexión inalámbrica.',
'Support4t031' : 'Se tardarán unos segundos en restablecer la conexión, tras los que puede intentarlo de nuevo.',
'Support4t032' : 'También puede intentarlo con una conexión por cableado.',
'Support4t033' : 'Plantéese enchufar el router a un ordenador. Haga uso de un cable Ethernet para conectar el ordenador a uno de los puerto gris del router. Desde la página: http://router/ , podrá volver a intentar la configuración.',
'Support4t034' : 'Una vez que haya intentando estos pasos haga clic en «Intentar de nuevo».',
'Support4t040' : 'Vaya a <strong>http://belk.in/PMuxOg</strong>en un dispositivo con conexión a internet',
'Support4t050' : 'Recuperando una conexión',
'Support4t051' : 'En estas situaciones es probable que el router debe ser reiniciado o que se debe restablecer de nuevo la conexión. Es por ello por lo que hemos incluido instrucciones para llevar a cabo ambas operaciones. Como es posible que su contraseña haya cambiado en un paso anterior del proceso, puede ser que necesite seleccionar de nuevo la red una vez que reinicie el ordenador. <span class="nub"></span>',
'Support5t001' : 'No se pudo conectar de nuevo al router.',
'Support5t002' : 'Pruebe a reiniciar el router.',
'Support5t003' : 'Una vez que el router este funcionando de nuevo, pruebe a conectarse a él de nuevo.',
'Support5t004' : 'Existen otras medidas que puede tomar para resolver el problema.',
'Support5t005' : 'Primero, pruebe a reiniciar el router.',
'Support5t006' : 'Desenchufe la fuente de alimentación del router, espere unos segundos y vuelva a enchufarlo.',
'Support5t006w' : 'Desenchufe la fuente de alimentación del router, espere unos segundos y vuelva a enchufarlo.',
'Support5t007' : 'Cuando el router tenga encendida una luz azul fija estará listo para continuar.',
'Support5t008' : 'Lo siguiente es probar con una conexión inalámbrica.',
'Support5t009' : 'Se tardarán unos segundos en restablecer la conexión, tras los que puede intentarlo de nuevo.',
'Support5t010' : 'También puede intentarlo con una conexión por cableado.',
'Support5t011' : 'Podría enchufar el router a un ordenador. Haga uso de un cable Ethernet para conectar el ordenador a uno de los puertos grises del router. Desde la página: http://router/ , podrá volver a intentar la configuración.',
'Support5t012' : 'Una vez que haya intentando estos pasos haga clic en «Intentar de nuevo».',
'Support5t015' : 'Vaya a <strong>http://belk.in/PMuxOg</strong>en un dispositivo con conexión a internet',
'Support5t020' : 'Recuperando una conexión',
'Support5t021' : 'Este tipo de situaciones es difícil determinar si el router necesita reiniciarse o si se debe intentar restablecer la conexión directamente con él mismo. Es por ello por lo que hemos incluido instrucciones para llevar a cabo ambas operaciones. Como se ha cambiado su nombre de red en un paso anterior, debe asegurarse ahora que se conectar a la nueva red una vez que el router se haya reiniciado. <span class="nub"></span>',
'Support6t001' : 'No se pudo conectar de nuevo al router.',
'Support6t002' : 'Pruebe a reiniciar el router.',
'Support6t003' : 'Una vez que el router este funcionando de nuevo, pruebe a conectarse a él de nuevo.',
'Support6t004' : 'Existen otras medidas que puede tomar para resolver el problema.',
'Support6t005' : 'Primero, pruebe a reiniciar el router.',
'Support6t006' : 'Desenchufe la fuente de alimentación del router, espere unos segundos y vuelva a enchufarlo.',
'Support6t006w' : 'Desenchufe la fuente de alimentación del router, espere unos segundos y vuelva a enchufarlo.',
'Support6t007' : 'Cuando el router tenga encendida una luz azul fija estará listo para continuar.',
'Support6t008' : 'Lo siguiente es probar con una conexión inalámbrica.',
'Support6t031' : 'Se tardarán unos segundos en restablecer la conexión, tras los que puede intentarlo de nuevo.',
'Support6t032' : 'También puede intentarlo con una conexión por cableado.',
'Support6t033' : 'Podría enchufar el router a un ordenador. Haga uso de un cable Ethernet para conectar el ordenador a uno de los puertos grises del router. Desde la página: http://router/ , podrá volver a intentar la configuración.',
'Support6t034' : 'Una vez que haya intentando estos pasos haga clic en «Intentar de nuevo».',
'Support6t037' : 'Vaya a <strong>http://belk.in/Nm1f5S</strong> desde un dispositivo que esté conectado a internet',
'Support6t050' : 'Recuperando una conexión',
'Support6t051' : 'En estas situaciones es probable que el router debe ser reiniciado o que se debe restablecer de nuevo la conexión. Es por ello por lo que hemos incluido instrucciones para llevar a cabo ambas operaciones. Como es posible que su contraseña haya cambiado en un paso anterior del proceso, puede ser que necesite seleccionar de nuevo la red una vez que reinicie el ordenador. <span class="nub"></span>',
'Support7t001' : 'Su módem router no está conectado a internet.',
'Support7t004' : 'Existe un problema con la conexión en la toma de teléfono.',
'Support7t050' : 'Problemas de conexión',
'Support7t051' : 'En estas situaciones es difícil evaluar la cause real de los problemas de conexión con el ISP. Se ha comprobado al máximo la instalación del cableado así que el próximo paso es verifique que está usando la entrada adecuada, si necesita de un filtro o si todo falla contacte su ISP.<span class="nub"></span>',
'SupportNumber' : '1-800-123-4567',
'UpSpeed' : '12.5',
'p2410t012' : 'Al hacer clic en «Restablecer» se borrarán la configuraciones del router, como por ejemplo el nombre de usuario y la contraseña, reemplazándolas por los valores predeterminados de fábrica.  Si desea conectarse a internet con este router tendrá que configurar la información relativa sus ordenadores, teléfonos, y otros aparatos para hacer coincidir estos valores con los predeterminados de fábrica.  ¿Está seguro que se desea continuar?',
'gtRestore' : 'Restablecer',
'gtCancel' : 'Cancelar',
'alt="Loading"' : 'Cargando',
'alt="Restart Router"' : 'Reiniciar el router',
'alt="Check Wires"' : 'Comprobar los cables',
'alt="Check Phone Connection"' : 'Compruebe la línea de teléfono',
'alt="Check WAN Connection"' : 'Compruebe la conexión WAN',
'alt="Checkmark"' : 'Marca de verificación',
'alt="Change"' : 'Cambiar',
'alt="Print"' : 'Imprimir',
'alt="Expand"' : 'Expandir',
'alt="Caret"' : 'Caret',
'alt="Cut"' : 'Cortar',
'alt="Browser"' : 'Explorador',
'alt="Wifi"' : 'WiFi',
'alt="Password"' : 'Contraseña',
'alt="Check Phone Jack"' : 'Compruebe la toma de teléfono',
'alt="Turn Off Modem"' : 'Apague el módem',
'alt="Turn On Modem"' : 'Encienda el módem',
'alt="Check Phone Filters"' : 'Compruebe los filtros del teléfono',
'gtSerial' : 'Nº de serie',
'gt5GName' : 'SSID de 5 GHz ',
'gt5GKey' : 'Clave de 5 GHz ',
'p1020MRt001' : 'Existen problemas de comunicación con su proveedor de servicios de internet (ISP).',
'p1020MRt002' : 'Por favor reinicie el módem router.',
'p1020MRt003' : 'No se detecta una conexión a internet, pruebe a reiniciar su módem router.',
'p1020MRt004' : 'Apague el módem router. Normalmente para hacer esto tiene que pulsar algún interruptor en el módem router o desenchufarlo de la corriente.',
'p1020MRt005' : 'Espere 15 segundos.',
'p1020MRt006' : 'Vuelva a encender el módem router.',
'p1020MRt007' : 'Tras algunos segundos se volverán a encender las luces y se debería establecer la conexión con su ISP.',
'p1020MRt008' : 'Si el problema persiste, póngase en contacto con su ISP para solucionar los problemas que su cuenta pudiese tener.',
'p1020MRt009' : 'Cuando el módem router se haya apagado y reiniciado de nuevo la operación continuará automáticamente.',
'p1020MRt010' : '¿Por qué se debe reiniciar el módem?',
'p1020MRt011' : 'Algunos módems necesitan ser reiniciados antes de poder establecer la comunicación con un router u ordenador nuevo. Si su proveedor de servicios de internet estuviese experimentando algún tipo de problema, es posible que una de las consecuencia fuese que el módem interrumpiese la conexión a internet. Se detecta su módem pero no la conexión a internet, pruebe a reiniciar el módem para resolver el problema. <span class="nub"></span>',
'p1010t001' : 'Existen problemas de comunicación con el módem.',
'p1010t002' : 'Puede ser un error de escritura.',
'p1010t003' : 'Su módem debería estar conectado al puerto amarillo del router mediante un cable. Su módem debería estar encendido.',
'p1010t004' : 'Puede comprobar algunas cosas para asegurarse de que todo está listo para funcionar:',
'p1010t005' : 'Asegúrese de que su módem esté encendido. Su adaptador de corriente debería estar bien enchufado en ambos extremos, y al menos una de las luces del módem debería estar encendida.',
'p1010t006' : 'Su módem debería estar conectado al puerto amarillo del router mediante un cable red. Este cable transporta la señal desde el módem al router, y sin él no se puede efectuar la conexión a internet.',
'p1010t007' : 'Si ambos fuese correctos, puede probar a reiniciar el módem desenchufando la fuente de alimentación, esperando 15 segundos y volviendo a enchufarlo. Si su módem tiene una batería puede que necesite encontrar el botón de «Reset» (Restablecer) en vez de la primera posibilidad.',
'p1010t008' : 'Aquí abajo puede ver el aspecto que estas conexiones deberían tener:',
'p1010t009' : 'Se seguirá esperando a detectar la conexión mientras realiza la consulta.',
'p1010t010' : 'La dificultad de cableado más común se dá entre el módem y el router. Es importante que compruebe ambos extremos del cable. Uno de los extremos debería estar conectado en el puerto amarillo del router nuevo, mientras que el otro extremo lo debería estar en un puerto similar en el módem. El etiquetado de los puertos es distinto según el fabricante; puede que lo encuentre etiquetado como «data», «LAN», «network», o «Ethernet» (datos, LAN, red o Ethernet).',
'Support3t005' : 'Intente llevar a cabo los siguientes pasos para reiniciar su módem:',
'Support3t006' : 'Mire que las luces del panel frontal del mismo estén encendidas. Si lo estuviesen, el módem está encendido y puede que tenga que esperar unos instantes mientras que el módem termina de prepararse.',
'Support3t007' : 'Compruebe que la fuente de alimentación del módem está correctamente conectado al módem y a la toma de corriente de la pared.',
'Support3t008' : 'Si su módem tuviese un interruptor de encendido, compruebe que está en la posición de encendido.',
'Support3t009' : 'Compruebe que su módem esté aún conectado al nuevo router.',
'Support1t012' : 'Vaya a <strong>http://belk.in/LIkBoH</strong>en un dispositivo con conexión a internet',
'QOSt001' : 'Para habilitar el Intellistream, haz lo siguiente:',
'QOSt002' : 'Usa un cable Ethernet para conectar tu ordenador a tu router de Belkin (recomendado).',
'QOSt003' : 'Haz clic aquí para ejecutar en <a href="http://www.speedtest.net" target="_blank" class="speed_font4">Speedtest.net</a> una prueba de velocidad de tu conexión de internet.',
'QOSt004' : 'Una vez completada la prueba de velocidad, introduce los valores que aparecen en Speedtest.net en los campos arriba mostrados, «Download Speed» (Velocidad de descarga) y «Upload Speed» (Velocidad de subida), y haz clic en «Save» (Guardar) abajo.',
'gtMbps' : 'Mbps',
'QOSt006' : 'Con tu alta velocidad de descarga, Instellistream priorizará solo tu velocidad de subida.',
'QOSt007' : 'Con tu alta velocidad de subida, Instellistream priorizará solo tu velocidad de descarga.',
'QOSt008' : 'Con estas altas velocidades de internet, Instellistream no será de utilidad así que no se activará.',
'QOSt009' : 'Por favor, introduce un número mayor que 0,01.',
'QOSt010' : 'Por favor, introduce números mayores que 0,01.',
'gtSettingsNotSaved' : 'Tiene configuraciones sin guardar. Permanezca en esta página para guardarlas, o ciérrela o vuélvala a cargar para descartar los cambios.',
'QOSt011' : 'Por favor, introduzca un número entre 0,01 y 100,00.',
'QOSt012' : 'Por favor, introduzca números entre 0,01 y 100,00.',
'QOSt013' : 'Por favor, introduzca un número entre 0,01 y 1000,00.',
'QOSt014' : 'Por favor, introduzca números entre 0,01 y 1000,00.',


// End belkin transation table
LastID : "LastValue"	
	
	
}

function translate(key) {
	return langDictionary[key];
}
