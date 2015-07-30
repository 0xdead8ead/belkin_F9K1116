function dw(message)
{
	document.write(message);	
}


// Note this dictionary is a temporary demonstration
var langDictionary = {

// Copy belkin transation table to here	
'p100t011' : 'panel',
'p220t001' : 'Usted tiene una conexión DSL PPTP.',
'p220t011' : 'PPTP',
'p220t012' : 'El protocolo de túnel punto a punto (PPTP) genera una conexión privada y cifrada entre su proveedor de servicio de Internet y usted.',
'p222t001' : 'Hay un problema con su configuración PPTP.',
'p300t001' : 'Verificando actualizaciones de firmware.',
'p300t002' : 'Estamos verificando que haya actualizaciones de firmware disponibles para su nuevo enrutador.',
'p300t003' : '¿Por qué necesito la última versión del firmware?',
'p300t004' : 'El firmware es el software que usa el enrutador para implementar protocolos de red y de seguridad. Las actualizaciones mejoran la confiabilidad y la funcionalidad de su enrutador, por eso es bueno que usted se asegure de contar con la última versión.',
'gtUpdateNoPower' : 'Estamos actualizando su enrutador con el nuevo firmware. No apague la alimentación durante el proceso.',
'p320t003' : 'Esto demorará unos tres minutos. Progreso de la actualización:',
'gtFirmwareRestart' : 'Ahora que el firmware está instalado, tenemos que reiniciar su enrutador para oficializarlo.',
'p342t003' : 'de la lista de redes para poder solucionar el inconveniente.',
'errorSSIDEmpty' : 'Ingrese un nombre para su red inalámbrica.',
'errorSSIDTooLong' : 'El nombre de su red no debe exceder los 32 caracteres.',
'errorSSIDInvalidChars' : 'El nombre de su red solo puede contener letras, números, signos de puntuación y espacios.',
'errorWEPPasswordInvalidChars' : 'El nombre de su red solo puede contener números y letras de la A a la F.',
'errorWEPPasswordInvalidLength' : 'El nombre de su red debe contener 10 o 26 caracteres.',
'errorWEPPasswordEmpty' : 'Ingrese una contraseña para asegurar su red inalámbrica.',
'errorWPAPasswordInvalidChars' : 'La contraseña de su red solo puede contener letras, números, signos de puntuación y espacios.',
'errorWPAPasswordInvalidLength' : 'La contraseña de su red debe contener entre 8 y 63 caracteres.',
'errorWPAPasswordEmpty' : 'Ingrese una contraseña para asegurar su red inalámbrica.',
'errorGenericCommitError' : 'Se produjo un error. Corrija la configuración a continuación e intente nuevamente.',
'p400t006' : 'Contraseña:',
'p450t006' : 'Contraseña: ',
'p451t006' : 'Contraseña: ',
'p500t007' : 'Registro completo',
'p500t008' : 'Registrarme más tarde',
'p700t011' : 'PPTP DSL connection',
'errIpAddressEmpty' : 'La dirección IP no puede estar en blanco.',
'errSubnetMaskEmpty' : 'La máscara de subred no puede estar en blanco.',
'errSubnetMaskInvalid' : 'La máscara de subred no tiene una configuración adecuada. Revise su valor.',
'errDefaultGatewayEmpty' : 'La dirección de la puerta de enlace predeterminada  no puede estar en blanco.',
'errDNSServerEmpty' : 'La dirección del servidor DNS no puede estar en blanco.',
'1781' : '',
'1782' : '',
'1783' : '',
'7102' : 'Belkin Intellistream prioriza servicios de gran ancho de banda y baja latencia tales como voz, video y juegos, para la mejor experiencia posible en línea.',
'7103' : 'Para hacer un buen trabajo, Intellistream necesita conocer su velocidad de conexión.',
'7104' : 'Durante la prueba se suspenderá momentáneamente su conectividad a Internet.',
'7105' : 'Durante la prueba, su conectividad a Internet se suspende momentáneamente.',
'7106' : 'Ejecutar una prueba de velocidad',
'7107' : 'Prueba de velocidad',
'7108' : 'Ingreso manual',
'7109' : 'Ping',
'7110' : 'Velocidad de <br>descarga',
'7111' : 'Velocidad de <br>carga',
'7112' : 'Ejecutando…',
'7113' : 'Finalizado.',
'7114' : 'Hubo un error durante la prueba.',
'7115' : 'Ingrese un número entre 0.1 y 100.',
'7116' : 'Ingrese un número entre 0.1 y 1000.',
'7117' : 'Solo entre 0.1 y 100.',
'7118' : 'Con la alta velocidad de carga de su conexión, Intellistream priorizará solo su velocidad de descarga.',
'7119' : 'Con la alta velocidad de descarga de su conexión, Intellistream priorizará solo su velocidad de carga.',
'7120' : 'Con la alta velocidad de su conexión de Internet, no se necesita activar Intellistream.',
'7121' : 'Registrado el',
'7122' : 'Registrado manualmente el',
'7123' : 'Para activar Intellistream:',
'7124' : 'Intellistream está activado.',
'7125' : 'Intellistream está actualmente desactivado.',
'7126' : 'Configuración manual',
'gtBBSTitle' : 'Bienvenido al programa de instalación de Belkin',
'gtBack' : 'Volver al panel',
'Support4t036' : 'Lea todo sobre esto.',
'Support4t037' : 'Cargue la siguiente URL en un dispositivo conectado a Internet y aprenda cómo solucionar el problema usted mismo: <STRONG>www.belkin.com/support/asdlkj</STRONG>',
'gtReadHelp' : 'Visite <STRONG>http://belk.in/NLk29H</STRONG> en un dispositivo conectado a Internet',
'Support5t014' : 'Lea todo sobre esto.',
'p1200t001' : 'Un poco más de seguridad.',
'p1200t002' : 'Además, usted puede proteger su router mediante el bloqueo del tablero de instrumentos con una contraseña.',
'errsetempt' : 'Por favor escriba una frase de contraseña.',
'errorpwdEmpty' : 'Por favor ingrese su contraseña.',
'errorpwdError' : 'La contraseña no es correcta.',
'60' : 'Administrador duplicado',
'61' : 'Este dispositivo es administrado por',
'62' : 'actualmente.',
'gtDisconnected' : 'Desconectado',
'dft005' : 'Centro de Asistencia Belkin',
'dhToggleBand' : 'Mostrar 5.0 Ghz',
'419' : 'segundos faltando.',
'422' : 'Configuraciones restauradas con éxito',
'423' : 'El archivo restaurado no es el tipo correcto para este dispositivo.  . Error en la restauración. Por favor obtenga el archivo correcto e intente nuevamente.',
'533' : 'Si su enrutador comienza a trabajar incorrectamente, es posible que sea necesario reiniciarlo. El reiniciar el enrutador no borrará sus configuraciones.',
'1200' : 'Aplicando cambios. Por favor espere.......',
'1386' : 'El archivo de actualización seleccionado no es el tipo correcto o la versión correcta para este dispositivo. Falló la actualización. Por favor obtenga el archivo correcto e intente nuevamente.',
'2053' : 'Los cambios se aplicaron con éxito.',
'2054' : 'La actualización del firmware fue un éxito.',
'766' : 'Los números de la máscara de subred que ingresó no son válidos.',
'1356' : 'La dirección IP de la puerta de enlace es inválida; el primer número debe ser entre 1 y 223.',
'1357' : 'La dirección IP de la puerta de enlace es inválida; el segundo y tercer número deben ser entre 0 y 255.',
'1358' : 'La dirección IP de la puerta de enlace es inválida; el último número debe ser entre 1 y 254.',
'1360' : 'Dirección IP inválida; el primer número debe ser entre 1 y 223.',
'1354' : 'Dirección IP inválida; el segundo y tercer número deben ser entre 0 y 255.',
'675' : 'Dirección IP inválida; el último número debe ser entre 1 y 254.',
'403' : 'La dirección IP que ingresó no es válida.',
'760' : 'Dirección IP',
'1760' : 'Rechazar Todo',
'395' : 'Ya sea usted no ha introducido todos los números o algunos de los números que ingresó son inválidos. El número en cada cuadro de entrada debe ser entre 0 y 255.',
'1395' : 'No Configurado',
'1281' : 'La dirección IP WAN no puede cubrir la subred del lado LAN.',
'641' : 'Usted no ha ingresado todos los números IP o algunos de los números que introdujo son inválidos. Los números deben ser entre 0 y 255',
'errUsernameTooLong' : 'Su nombre de usuario debe contener menos de 64 caracteres.',
'errUsernameInvalid' : 'Su nombre de usuario solo puede contener letras, números, signos de puntuación y espacios.',
'errPasswordEmpty' : 'Por favor ingrese su contraseña.',
'errPasswordTooLong' : 'Su contraseña debe contener menos de 64 caracteres.',
'errPasswordInvalid' : 'Su nombre de usuario solo puede contener letras, números, signos de puntuación y espacios.',
'1398' : 'Aceptar',
'1399' : 'Cancelar',
'374' : 'Encendido',
'375' : 'Apagado',
'47' : 'Más información',
'48' : 'Borrar cambios',
'49' : 'Ahorre',
'96' : 'Habilitar',
'119' : 'Desactivar',
'1298' : 'Cerrar',
'113' : '<< Añadir',
'114' : 'Eliminar',
'128' : 'Refrescar',
'318' : 'Desactivado',
'317' : 'Habilitado',
'2006' : 'Sí',
'2007' : 'No',
'3300' : 'NEW',
'50' : 'Actualizar DNS Dinámica',
'98' : 'El DNS dinámico (DDNS) le permite acceder a su red hogareña por medio de una cuenta establecida a través de un proveedor de DDNS.  Configure su cuenta por medio de Dyn.com (<a href=\'http://www.dyn.com\' target=\'_blank\'>www.dyn.com</a>) y active la función DDNS en su enrutador. Usted debe crear una cuenta antes de usar este servicio.',
'100' : 'Nombre de Usuario',
'101' : 'Contraseña',
'102' : 'Nombre de dominio',
'742' : 'Por favor introduzca su nombre de usuario',
'757' : '¡Por favor ingrese su contraseña!',
'822' : 'es inválida, por favor corríjala primero.',
'1307' : 'DynDNS',
'1308' : 'Servicio DDNS',
'1309' : 'Estado DDNS',
'1310' : 'Sitio Web',
'1315' : 'Actualizar DDNS Automáticamente',
'1316' : 'actualizar cada',
'1317' : 'días',
'1369' : 'Registrado',
'1380' : 'Configuración Equivocada',
'1381' : 'Conectando',
'1382' : 'Falló la conexión',
'1383' : 'Falló inicio de sesión',
'1384' : 'Falló Registro',
'1385' : 'No Registrado',
'1751' : '',
'702' : 'El servicio de nombres de dominio (DNS) traduce los nombres de dominio como direcciones IP para localizar servicios informáticos y dispositivos en todo el mundo. Si su proveedor de servicio de Internet le facilitó una dirección DNS para su uso, ingrésela aquí.',
'703' : 'Automático del proveedor de servicio de Internet',
'704' : 'Dirección DNS',
'705' : 'Dirección DNS secundaria',
'706' : 'DNS = Domain Name Server (Servidor de Nombre de Dominio). Es un servidor ubicado en la Internet que traduce los URL (Universal Resource Links) como www.belkin.com en direcciones IP.',
'707' : 'Usted debe ingresar las configuraciones DNS provistas por su proveedor de servicio de Internet si no usa la función de DNS automático.',
'780' : 'Especificar la dirección IP',
'823' : 'Para hacer cambios al DNS, viste primero {Website Filter} y seleccione "No filters" (Sin filtros).',
'55' : 'Información del Firmware',
'56' : 'No hay actualizaciones nuevas del firmware para este enrutador.',
'57' : 'No hay conexión con el servidor de información del firmware; favor de volver a verificar la conexión WAN.',
'58' : 'Firmware actual:',
'59' : 'Descargar firmware:',
'64' : 'El enrutador se puede configurar para restringir el acceso a la Internet, correo electrónico u otros servicios de la red en días y horarios específicos.',
'65' : 'IP',
'66' : 'Puerto',
'67' : 'Tipo',
'68' : 'Bloqueo de Horario',
'69' : 'Día',
'70' : 'Hora',
'71' : 'Habilitar',
'72' : 'AMBOS',
'73' : 'Siempre',
'74' : 'Bloquear',
'75' : 'DOM',
'76' : 'LUN',
'77' : 'MAR',
'78' : 'MIE',
'79' : 'JUE',
'80' : 'VIE',
'81' : 'SAB',
'82' : ':00 pm',
'83' : ':00 am',
'84' : 'Ya sea que no ingresó la dirección IP del cliente o algunos de los números en la dirección IP que usted ingresó son inválidos. El número en el cuadro de entrada IP deben ser entre 1 y 254.',
'85' : 'Los números de puerto ingresados no válidos.',
'86' : 'La parte final de la serie del puerto debe ser mayor que la parte inicial.',
'87' : 'La parte final de la serie IP debe ser mayor que la parte inicial.',
'88' : 'El número para el puerto debe ser entre 1 - 65535.',
'1311' : 'No hay una aplicación seleccionada',
'1312' : 'Se detectaron entradas duplicadas. La regla ya existe.',
'1355' : 'La dirección IP LAN del enrutador debe excluirse de la serie de direcciones IP.',
'90' : 'Esto le permite especificar un dispositivo en su red que se ubique por fuera del firewall de su enrutador, mientras que el resto de los dispositivos permanecen detrás del firewall.',
'91' : 'La computadora en el DMZ no está protegida contra ataques de piratas informáticos.',
'92' : 'Para poner una computadora en el DMZ, escriba los últimos dígitos de su dirección IP en el campo de abajo y seleccione "Activar". Haga clic en "Guardar" para que el cambio surta efecto.',
'93' : 'Dirección IP del host DMZ virtual',
'97' : 'IP Estático',
'95' : 'IP Privado',
'103' : 'Por favor ingrese la dirección IP antes de habilitar una DMZ.',
'1232' : '¡La dirección IP del host DMZ no es válida!',
'1253' : 'La dirección IP está fuera de intervalo [1-254].',
'105' : 'Esta función le permite establecer una lista de clientes permitidos. Cuando activa esta función, usted deberá introducir la dirección MAC de cada cliente en su red para permitir acceso a la red a cada uno.',
'106' : 'Habilitar la filtración de direcciones MAC',
'107' : 'Lista de filtración de direcciones MAC',
'108' : 'Bloquear',
'110' : 'Dirección MAC',
'112' : 'Esta dirección MAC fue agregada anteriormente.',
'669' : 'Dirección MAC inválida, es una dirección inválida',
'902' : 'Dirección MAC inválida',
'903' : '¡Por favor corríjala primero!',
'904' : 'La dirección MAC correcta debe ser xx:xx:xx:xx:xx:xx donde "x" es entre 0-9 y a-f.',
'1062' : 'Nota: Usted no podrá eliminar la dirección MAC de la computadora que está usando para acceder a las funciones administrativas del enrutador. (La computadora que está usando ahora).',
'1602' : 'Definido por el usuario 1',
'117' : 'Su enrutador está equipado con un firewall que protege a su red contra una amplia gama de ataques comunes de piratas informáticos, entre ellos ataques ping de la muerte (PoD) y denegación de servicio (DoS). Puede desactivar la función del firewall de ser necesario. Desactivar la protección del firewall no hará que su computadora sea completamente vulnerable a los ataques de piratas informáticos, pero se recomienda que lo deje encendido siempre que sea posible.',
'118' : 'Activar / desactivar firewall',
'121' : '<b>¡FUNCIÓN AVANZADA! </b> Puede configurar el enrutador para que no responda a un ping de ICMP (ping al puerto WAN). Esto le brinda un nivel superior de seguridad.',
'1076' : 'Bloquear ping de ICMP',
'1827' : 'Imprimir las configuraciones de acceso para invitado',
'2702' : 'El acceso para invitado le permite acceder a la Internet a través del puerto WAN pero limita a los invitados para que no tengan acceso a la red interna, a  LAN y WLAN. La función solo admite 2.4 GHz para simplificar el uso.',
'279' : 'Puerto de entrada',
'1828' : 'Estilo café (ingreso como invitado mediante página de la Web)',
'1619' : 'WPA/WPA2 PSK',
'1829' : 'WEP',
'1830' : 'Abierta',
'1831' : '32 caracteres máximo, sin espacio',
'1617' : 'Contraseña (PSK)',
'842' : 'Autenticación',
'845' : 'Técnica de Cifrado',
'854' : 'Clave previamente compartida (PSK)',
'857' : 'PSK críptico',
'855' : 'WPA-PSK (sin servidor)',
'1335' : 'Nombre de la red (SSID)',
'1825' : '8 a 63 caracteres',
'1826' : '10 dígitos hexadecimales',
'1834' : 'Nombre de la red',
'409' : 'Contraseña',
'1835' : 'Cada huésped que se conecte a su red inalámbrica necesitará esta contraseña.',
'1715' : 'Tipo de seguridad',
'1836' : 'Para conectarse a una red inalámbrica:',
'1837' : 'Windows',
'1838' : '1. Haga clic con el botón derecho en el icono de la red inalámbrica en la bandeja de su sistema Windows y seleccione “Ver redes inalámbricas disponibles” del menú desplegable.',
'1839' : '2. Haga clic dos veces en ',
'1840' : ' la red.',
'1841' : '3. Aparecerá una ventana que le pedirá la clave de la red. Ingrese la contraseña de arriba y haga clic en Aceptar.',
'1842' : 'MAC OS X',
'1843' : '1. Haga clic en el icono de red inalámbrica en su barra de menú (arriba a la derecha) y seleccione ',
'1844' : ' la red.',
'1845' : '2. Aparecerá una ventana que le pedirá la clave de la red. Ingrese la contraseña de arriba y haga clic en Aceptar.',
'1832' : 'Estilo Café',
'1833' : 'Modalidad Abierta',
'1201' : 'El SSID no se puede configurar como NULO.',
'1812' : 'La longitud de la contraseña no es válida. La longitud máxima de la contraseña es de 63 caracteres y la mínima, 8 caracteres.',
'1824' : 'La clave WEP debe tener 10 dígitos hexadecimales.',
'414' : 'Error de inicio de sesión',
'1811' : 'El acceso para invitado es una función que permite a los usuarios tener acceso a Internet pero limita el acceso a la red hogareña. Solicite al administrador de la red la contraseña de Acceso para invitado e ingrésela a continuación.',
'1813' : '¡Éxito! Ahora puede abrir un navegador Web y explorar Internet.',
'909' : 'La "Dirección IP" es la dirección IP interna del enrutador. Para accede la interfaz para configuración avanzada, escriba esta dirección IP en la barra de direcciones de su navegador. Esta dirección puede ser cambiada si es necesario. Para cambiar la dirección IP, escriba la nueva dirección IP y haga clic en “Guardar”. La dirección IP que escoja debe ser una IP no enrutable. Ejemplos de IP no enrutables: 192.168.2.1, 10.0.0.1, 172.16.0.1',
'917' : 'No hay necesidad de cambiar la máscara de subred. Es posible cambiar la máscara de subred de ser necesario. Haga cambios a la máscara de subred solo si existe una razón específica para ello.',
'929' : 'La función del servidor DHCP hace que sea muy fácil instalar una red pues le asigna direcciones IP a cada computadora en la red. El servidor DHCP se puede apagar de ser necesario. Apagar el servidor DHCP hará que tenga que configurar manualmente una dirección IP estática en cada computadora de su red. El grupo de direcciones IP es el intervalo de direcciones IP reservado para asignación dinámica de las computadoras de su red. El valor predeterminado varía de 2 a 200 (199 computadoras). Si desea cambiar este número, ingrese nuevas direcciones IP de inicio y fin y haga clic en “Guardar”.',
'935' : 'Puede configurar un nombre de dominio local (nombre de la red) para su red. No hay necesidad de cambiar esta configuración a menos de que tiene una necesidad específica anticipada para hacerlo. Usted puede nombrar a la red como quiera, como por ejemplo "MI RED".',
'962' : 'Para configurar el enrutador para usar PPPoE, escriba el nombre de usuario y contraseña indicado por su proveedor de servicio de Internet en los espacios correspondientes. Si no tiene un nombre de servicio o no lo conoce, deje el campo “Nombre de servicio” en blanco.   Después de haber ingresado su información, haga clic en "Guardar".     Después de aceptar los cambios, el indicador de estado debe decir “Online" si su enrutador está configurado correctamente.',
'967' : 'Algunos proveedores de Internet (ISP) usan el protocolo PPTP para establecer conexiones de sus clientes con la central. Esto requiere de usted que ingrese información adicional que también le proporciona su proveedor de servicio de Internet. Después de aceptar los cambios, la luz del indicador del estado de Internet debe estar en color verde si la conexión se ha configurado correctamente.',
'971' : 'Haga clic en “Guardar” para seleccionar el tipo de conexión Telstra Bigpond.',
'982' : 'Desconectarse después de X...',
'983' : 'Esto desconectará su enrutador del proveedor de servicios de Internet tras un tiempo de inactividad. Use esa opción para ahorrar dinero si paga un servicio de Internet por minuto.',
'htDDNS' : '¿Qué es DDNS?',
'htDNS' : '¿Qué es DNS?',
'htDMZ' : '¿Qué es la zona desmilitarizada (DMZ)?',
'htLAN' : '¿Qué controlan las configuraciones LAN?',
'htWANMain' : '¿Qué son las configuraciones WAN?',
'htWANMAC' : '¿Qué es la dirección MAC?',
'htWAN_PPPOE' : 'Configuraciones PPPoE',
'htWAN_PPTP' : 'Configuraciones PPTP',
'htIPv6' : '¡Qué es IPv6?',
'htWifiID' : '¿Qué son el nombre de la red y las configuraciones de canal?',
'htWifiIDContent' : 'El nombre de la red se llama SSID (ID de configuración de servicio).  Todos los clientes de su red deben conocer la SSID para unirse a la red del enrutador.',
'htWifiSec' : '¿Qué es la seguridad Wi-Fi?',
'htWifiSecContent' : 'Todos los enrutadores Belkin se envían con la función de seguridad Wi-Fi activada. La seguridad Wi-Fi brinda una capa de protección contra el acceso no autorizado a su red. Cuando la seguridad está activada, el usuario necesitará una contraseña para acceder a su red.',
'htWifiWPS' : '¿Qué es el protocolo WPS?',
'htWifiWPSContent' : 'Es un método opcional diseñado para facilitar la configuración de redes Wi-Fi con seguridad activada en su casa o pequeña oficina. Los dispositivos sin protocolo WPS (Wi-Fi Protected Setup) pueden unirse a su red; para ello deben elegir el nombre de la red e ingresar la contraseña de red.',
'htWifiGuest' : '¿Cómo se usa el acceso de invitado?',
'htWifiGuestContent' : 'Cuando esté activado, el acceso de invitado creará una red Wi-Fi individual que aún tiene acceso a Internet pero no a los demás dispositivos de su red.',
'htAP' : '¿Puedo usar mi enrutador como punto de acceso?',
'htAPContent' : 'Los enrutadores Belkin pueden configurarse para que funcionen estrictamente como punto de acceso y omitan todas las funciones de enrutamiento y firewall.  Configurar su enrutador como punto de acceso es un procedimiento muy usado para agregar capacidad inalámbrica a una red cableada existente.',
'htQos' : '¿Qué es Belkin Intellistream?',
'htDLNA' : 'Belkin Media Server con tecnología Twonky',
'htPortForward' : '¿Qué es el reenvío de puertos?',
'htPortForwardContent' : 'El reenvío de puertos permite que computadoras remotas se conecten a un programa o servicio específico en su red local. Por ejemplo, podría usarse el reenvío de puertos para ejecutar un servidor Web (puerto 80) en su red. La mayor parte de los programas modernos no requieren el uso del reenvío de puertos; pueden configurar automáticamente los puertos que necesiten.',
'htWanPing' : '¿Qué es lo que hace el bloqueo de ping de WAN?',
'htWanPingContent' : 'Brinda un nivel de seguridad más alto para evitar que usuarios externos de Internet descubran su dirección IP.  Para ello, no responde los pings que se originan fuera de su red.',
'htRestart' : '¿Para qué debo reiniciar mi enrutador?',
'htRestoreFC' : '¿Qué efecto tiene restaurar los valores predeterminados de fábrica?',
'htSaveSettings' : '¿Por qué debería guardar y hacer una copia de respaldo de mis configuraciones?',
'htRestoreSettings' : '¿Qué significa restaurar el estado anterior de mis configuraciones?',
'htSystem' : '¿Qué son las configuraciones de sistema?',
'htSystemContent' : 'Desde esta página puede establecer una variedad de configuraciones básicas de enrutador, entre ellas la zona horaria y la contraseña de administrador.',
'htSelfHeal' : '¿Qué es la recuperación automática?',
'hLANSettings' : 'Esta página le ayuda a establecer nuevas conexiones, le permite activar y desactivar la función DHCP y configurar la dirección IP del enrutador en su red local.',
'htDHCPClientList' : '¿Qué es la lista de clientes de DHCP?',
'htDHCPClientListContent' : 'Esta página le muestra la dirección IP, el nombre del host y la dirección MAC de cada dispositivo conectado a su red.   Si la computadora no tiene un nombre de host especificado, entonces el campo del nombre de host estará en blanco. Haga clic en “Actualizar” para actualizar la lista.',
'hWebsiteFilters' : 'Esto sirve como capa de protección contra sitios Web inseguros o inadecuados. Los filtros Web examinan sitios por verificación de su nombre en comparación con una lista de sitios aprobados.',
'hWANSettings' : 'Estas configuraciones de red hacen referencia a su conexión con el proveedor de servicio de Internet (ISP).   Seleccione en la lista el tipo de conexión provista por su proveedor de servicio de Internet. ',
'htChannel' : 'De un modo similar al que una radio utiliza diferentes frecuencias, su enrutador puede transmitir en diferentes canales para comunicarse con los dispositivos de su red. La mejor opción para usar por lo general es “Auto”.',
'3430' : 'IPv6 (versión 6 del protocolo de Internet) es una versión del protocolo de Internet (IP) diseñada para suceder a IPv4, el que direcciona casi todo el tráfico de Internet. Algunos proveedores de servicio de Internet ya casi no disponen de direcciones IP. IPv6 permite que más dispositivos se comuniquen por Internet dado que usa número más grandes para generar direcciones IP. Su proveedor de servicio de Internet le indicará cuando deberá usar IPv6.',
'3431' : 'Tipo de conexión',
'3432' : 'Configuración automática/DHCPv6 (predeterminada)',
'3433' : 'Las direcciones que figuran a continuación son provistas por su proveedor de servicio de Internet. DHCPv6 le brinda funciones agregadas para mejorar la conectividad.',
'3434' : 'WAN',
'3435' : 'Dirección WAN',
'3436' : 'Puerta de Enlace',
'3437' : 'LAN',
'3438' : 'Use esta sección para establecer la configuración interna de red de su enrutador. Si modifica la dirección IPv6 LAN aquí, es posible que tenga que ajustar las configuraciones de red de su computadora para volver a acceder a la red.',
'3439' : 'Prefijo LAN',
'3440' : 'ID de la interfaz',
'3441' : 'Link-Local',
'3442' : 'DNS',
'3443' : 'Sus configuraciones de DNS de IPv6 son las indicadas por su proveedor de servicio de Internet si están disponibles en anuncios de enrutadores WAN o en mensajes DHCPv6.',
'3444' : 'Primario',
'3445' : 'Secundario',
'3446' : 'PPPoE sobre IPv6',
'3447' : 'El protocolo punto a punto sobre Ethernet (PPPoE) es usado principalmente por servicios DSL para conectar un módem DSL a Internet.',
'3448' : 'Iniciar sesión',
'3450' : 'Contraseña escondida',
'3451' : 'Nombre de Usuario',
'3452' : 'Contraseña',
'3453' : 'Nombre de servicio',
'3454' : 'Túnel 6 a 4',
'3455' : 'Permite que los paquetes de IPv6 se transmitan en una red IPv4 sin necesidad de configurar túneles explícitos. Este tipo de conexión es adecuado si su proveedor de servicio de Internet no admite IPv6.',
'3456' : 'Enrutador remoto de retransmisión 6 a 4',
'3457' : 'Modo de paso a través',
'3458' : 'Los dispositivos conectados a su enrutador pueden establecer comunicación entre sí por medio de paquetes IPv6 nativos. Los paquetes IPv6 en la LAN se enviarán automáticamente a todas las interfaces LAN (puertos Ethernet y redes inalámbricas 2.4 GHz y 5 GHz).',
'3459' : 'Cuando se active el modo de paso a través, los paquetes IPv6 también se copiarán en la interfaz WAN. (Esto crea una conexión directa pero no segura a Internet.)',
'3460' : 'Comuníquese con su proveedor de servicio de Internet para obtener más información sobre su soporte a IPv6.',
'3461' : 'IPv6 estática',
'3462' : 'Las direcciones IPv6 estáticas no son de uso común ya que pueden ser difíciles de administrar. No se debe usar IPv6 estática con dispositivos que se conecten a múltiples redes, como las computadoras portátiles y los dispositivos móviles.',
'3463' : 'Modo de paso a través local únicamente',
'3464' : 'El modo de paso a través para Wan en IPv6 está desactivado. Todos los dispositivos locales en su LAN y en Wi-Fi pueden seguir estableciendo comunicación directa entre sí, pero el enrutador no enviará paquetes IPv6 desde o hacia Internet ni responderá a ningún paquete IPv6.',
'3465' : 'Su proveedor de servicio de Internet no le brinda conectividad IPv6. Comuníquese con él para obtener información sobre soporte para IPv6 o para establecer conectividad.',
'3466' : 'El modo de paso a través local únicamente se configura automáticamente para que sus dispositivos envíen paquetes IPv6 entre sí. La otra opción es usar el “túnel 6 a 4” para acceder a Internet a través de una conexión IPv4.',
'3467' : 'Cada cuadro debe contener cuatro caracteres hexadecimales (0 a 9 y A a F)',
'3468' : 'Ingrese una dirección que no sea de multidifusión. Por lo general, las direcciones de multidifusión comienzan con “ff”.',
'3469' : 'La longitud del prefijo debe estar comprendida entre 1 y 127. Por lo general, la longitud del prefijo es 64, 56 ó 48.',
'3470' : 'No hay conexión IPv4.',
'3471' : 'Sus controles parentales invalidan estas configuraciones DNS',
'3472' : 'Filtro de sitios Web',
'3473' : 'Seleccione PPPoE en WAN Internet > Configuraciones de conexión antes de seleccionar PPPoE sobre IPv6.',
'3474' : 'Se perdió la conectividad a Internet. Verifique su tipo de conexión WAN o comuníquese con su proveedor de servicio de Internet.',
'3475' : 'DNS predeterminado indicado por su proveedor de servicio de Internet.',
'gtTryManu' : 'Si usted conoce su tipo de conexión, puede ',
'gtSetManual' : 'configurarla manualmente ',
'2100' : 'Acceso denegado. Ingrese la contraseña del enrutador para permitir, temporalmente, el acceso a la página o servicios bloqueados.',
'2101' : 'Página inicial',
'2102' : 'IR',
'354' : 'Esta página le muestra la dirección IP, el nombre del host y la dirección MAC de cada computadora que está conectada a su red. Si la computadora no tiene un nombre host especificado, entonces el campo del nombre host estará en blanco. Al oprimir en "Refrescar" se actualizará la lista.',
'355' : 'Dirección IP',
'356' : 'Nombre del Host',
'357' : 'Dirección MAC',
'370' : 'Esta página le ayuda a establecer nuevas conexiones, le permite activar y desactivar la función DHCP y configurar la dirección IP del enrutador en su red local.',
'371' : 'Dirección IP',
'372' : 'Máscara de subred',
'373' : 'Servidor DHCP',
'378' : 'La función del servidor DHCP hace que sea muy fácil instalar una red pues le asigna direcciones IP a cada computadora en la red. No es necesario hacer cambios aquí.',
'379' : 'Dirección inicial del grupo de direcciones IP',
'380' : 'Dirección final del grupo de direcciones IP',
'381' : 'Tiempo de Reserva',
'382' : 'Para Siempre',
'383' : 'Media hora',
'384' : '1 Hora',
'385' : 'Dos horas',
'386' : 'Medio Día',
'387' : 'Un Día',
'388' : 'Dos Días',
'389' : 'Una Semana',
'390' : 'Dos Semanas',
'391' : 'El tiempo que el servidor DHCP reserva la dirección IP para cada computadora.',
'392' : 'Nombre de Dominio Local',
'393' : 'Opcional',
'394' : 'Una función que le permite asignar un nombre a su red.',
'397' : 'El grupo de direcciones IP debe ser la misma subred que la dirección IP de la puerta de enlace.',
'398' : 'La dirección IP final debe mayor que la dirección IP inicial.',
'399' : 'La dirección IP LAN no debe estar en el grupo de direcciones DHCP.',
'400' : 'La dirección IP que elija debe ser una dirección IP que no sea enrutable.',
'401' : 'Dirección IP de LAN inválida; el primer número no puede ser 127 ó 0',
'404' : 'Por favor cambie el cuadro de entrada de la Dirección en el barra de estado de su explorador manualmente a la dirección LAN nueva.',
'406' : '¿Realmente quiere cambiar la dirección IP LAN?',
'416' : '192.168.y.x (donde "y" es cualquier número entre 1 y 255 y "x" es cualquier número entre 0 y 254).',
'417' : '10.y.x.x (donde "y" es cualquier número entre 0 y 255 y "x" es cualquier número entre 1 y 254).',
'418' : '172.z.y.x (donde "z" es cualquier número entre 16 y 31,  "y" es cualquier número entre 0 y 255, y "x" es cualquier número entre 1 y 254).',
'713' : 'Nombre de dominio local inválido :',
'1228' : '¡La dirección inicial del grupo de direcciones IP no es válida!',
'1229' : '¡La dirección final del grupo de direcciones IP no es válida!',
'1240' : '¡La dirección IP de LAN no es válida!',
'3' : 'Iniciar sesión',
'408' : 'Antes de que pueda cambiar cualquier configuración, necesitará ingresar al sistema con una contraseña. Si aún no ha configurado su propia contraseña, deje este campo en blanco y haga clic en "Enviar".',
'410' : 'Por Defecto = dejar en blanco',
'412' : 'Enviar',
'1371' : 'Contraseña incorrecta',
'1372' : 'Por favor confirme su contraseña e intente nuevamente.',
'124' : 'El enrutador mantiene registros de toda la actividad dentro del enrutador como computadoras que ingresan y salen del sistema y cualquier intento desde la Internet para acceder al enrutador.',
'125' : 'Archivo de Registro',
'126' : 'Ahorre',
'127' : 'Transparente',
'1302' : 'Bitácora del sistema',
'1303' : 'Bitácora del firewall',
'8' : 'Configuraciones LAN',
'9' : 'Configuraciones de la red local',
'10' : 'Dispositivos conectados',
'2500' : 'Enrutamiento Estático',
'11' : 'WAN Internet',
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
'17' : 'Nombre de la red',
'18' : 'Seguridad',
'803' : 'WEP de 128 bits',
'804' : 'WEP de 64 bits',
'1296' : 'WPA/WPA2-Personal (PSK)',
'1297' : 'WPA/WPA2-Empresarial (RADIUS)',
'805' : 'WPA (con servidor Radius)',
'1319' : 'Wi-Fi Protected Setup',
'777' : 'Usar como un Punto de Acceso',
'833' : 'Control de dirección MAC',
'1613' : 'Acceso para huéspedes',
'1850' : 'Controles parentales',
'1851' : 'Filtro de sitios Web',
'1710' : 'Control de acceso',
'20' : 'Medios',
'7151' : 'Cuadro de tráfico',
'7000' : 'Servidor de medios',
'1780' : 'Torrent Mate',
'1790' : 'Software opcional',
'23' : 'Firewall',
'24' : 'Reenvío de puertos',
'25' : 'Filtros IP del cliente',
'26' : 'Filtración de direcciones MAC',
'27' : 'DMZ',
'41' : 'DDNS',
'28' : 'Bloqueo de WAN ping',
'29' : 'Bitácora de seguridad',
'30' : 'Utilidades',
'32' : 'Reiniciar enrutador',
'34' : 'Restaurar las configuraciones de fábrica',
'35' : 'Guardar o hacer copia de seguridad de las configuraciones',
'36' : 'Restaurar las configuraciones anteriores',
'37' : 'Actualización del Firmware',
'38' : 'Configuraciones del Sistema',
'39' : 'Autorecuperable',
'1900' : 'Registro',
'132' : 'La serie del puerto de entrada no es correcta.',
'133' : 'La serie del puerto privado no es correcta.',
'134' : 'Esta función le permitirá enviar llamadas externas (de Internet) para servicios tales como un servidor de Web (puerto 80), servidor FTP (Puerto 21) u otras aplicaciones a través de su enrutador a su red interna.',
'276' : 'Despejar entrada',
'277' : 'Añadir',
'278' : 'Descripción',
'280' : 'Tipo',
'281' : 'Direcciones IP privadas',
'282' : 'Puerto privado',
'376' : 'todos',
'411' : 'Transparente',
'648' : 'Carácter inválido.',
'672' : 'Número inválido! Debe ser entre 1 y 65535',
'905' : 'Todas las entradas están llenas.\nPor favor elimine algunas entradas e inténtelo nuevamente.',
'906' : '¿Quiere eliminar un entrada?',
'907' : '¿Desea eliminar todas las entradas?',
'1241' : '¡La dirección IP de WAN no es válida!',
'1250' : '¡El puerto no es válido!',
'1362' : 'La descripción está vacía',
'1601' : 'Automático',
'2055' : '¡Superposición de la serie del puerto de entrada!',
'2056' : 'Superposición de la serie del puerto privado',
'3310' : 'Intellistream',
'3311' : 'Optimice su conexión de Internet.',
'3312' : 'Servidor de medios',
'3313' : 'Permita el uso compartido de medios entre dispositivos en la red.',
'3314' : 'Controles parentales',
'3315' : 'Filtros de seguridad DNS para seguridad en Internet',
'3316' : 'Conexión IPv6',
'3317' : 'Ahora, su red es compatible con IPv6',
'1852' : 'Esto sirve como capa de protección contra sitios Web inseguros o inadecuados. Los filtros Web examinan sitios por verificación de su nombre en comparación con una lista de sitios aprobados.',
'1854' : 'Opciones de filtrado',
'1856' : 'Sin filtro',
'1858' : 'Bloquear sitios maliciosos',
'1859' : 'Bloquea malware, intentos de suplantación de identidad (phishing) y sitios fraudulentos.',
'1860' : 'Bloquear sitios maliciosos y para adultos',
'1861' : 'Bloquea malware, intentos de suplantación de identidad (phishing), sitios fraudulentos y sitios con contenido sexualmente explícito.',
'1862' : 'Bloquear sitios maliciosos, para adultos y otros sitios aptos para toda la familia',
'1863' : 'Bloquea malware, intentos de suplantación de identidad (phishing), sitios fraudulentos y sitios con material sexualmente explícito, contenido para adultos, sitios sobre aborto, bebidas alcohólicas, tabaco, crimen, cultos satánicos, drogas, apuestas, odio, suicidio o violencia.',
'1864' : 'Para modificar su dirección DNS siga hasta WAN Internet > {DNS}',
'7152' : 'Los cuadros a continuación muestran el tráfico WAN saliente y entrante, priorizado en diversas categorías. Los cuadros muestran los últimos 10 minutos (se actualizan automáticamente cada 5 segundos).',
'7154' : 'Tráfico – Referencias',
'7155' : 'Tráfico entrante',
'7156' : 'Tráfico saliente',
'7157' : 'Para activar esta función, habilite Intellistream',
'7158' : 'aquí',
'7159' : '.',
'7160' : 'Conectividad y control de red',
'7161' : 'Voz, chat de video y juegos',
'7162' : 'Web y video Web',
'7163' : 'Correo electrónico y VPN',
'7164' : 'Descargas, Torrents y otros',
'7170' : 'Bytes/seg',
'7174' : 'Horario/Horas:minutos',
'326' : 'Red local',
'327' : 'MAC de LAN/WLAN',
'332' : 'Servidor DHCP',
'333' : 'Configuraciones de la Internet',
'334' : 'Dirección MAC de WAN',
'337' : 'Dirección IP de WAN',
'338' : 'Puerta de enlace por defecto',
'339' : 'Dirección DNS',
'gtGuestName' : 'SSID de invitado',
'gtGuestKey' : 'Clave de invitado',
'347' : 'Tendrá que ingresar al sistema para hacer cambios en las configuraciones.',
'2022' : 'Módem solamente',
'2031' : 'Conecte',
'2032' : 'Desconectar',
'2033' : 'Margen de Ruido',
'2034' : 'Línea Abajo',
'2035' : 'Línea Arriba',
'2036' : 'Atenuación(dB)',
'2037' : 'Potencia de salida (dBm)',
'2038' : 'Velocidad de transmisión de datos (Kbps)',
'tDashboard' : 'Bienvenido al panel de control de su enrutador Belkin',
'rtFeature' : 'Características',
'rtLink' : 'Enlaces del enrutador',
'p1310t001' : 'Detalles de la conexión',
'p1310t002' : 'Volver a comprobar la conexión',
'p1310t003' : 'Última comprobación',
'p1310t004' : 'Velocidad de descarga',
'p1310t005' : 'Velocidad de carga',
'p1000t001' : 'Dispositivos conectados',
'p1000t002' : 'Ver todas',
'2501' : 'Por favor introduzca los siguientes parámetros de configuración',
'2502' : 'Dirección de la red:',
'2503' : 'Máscara de subred',
'2504' : 'Puerta de Enlace',
'396' : 'El número de máscara de subred que ingresó no es válido.',
'1231' : 'La puerta de enlace no es válida.',
'1361' : 'Dirección IP inválida; el primer número debe ser entre 1 y 254.',
'1800' : 'La dirección IP y la máscara de subred no coinciden.',
'Support1t011' : 'Lea todo sobre esto.',
'Support2t011' : 'Lea todo sobre esto.',
'Support2t012' : 'Cargue la siguiente URL en un dispositivo conectado a Internet y aprenda cómo solucionar el problema usted mismo: <STRONG>www.belkin.com/support/asdlkj</STRONG>',
'Support3t011' : 'Lea todo sobre esto.',
'Support3t012' : 'Cargue la siguiente URL en un dispositivo conectado a Internet y aprenda cómo solucionar el problema usted mismo: <STRONG>www.belkin.com/support/asdlkj</STRONG>',
'Support6t036' : 'Lea todo sobre esto.',
'425' : 'Así, el enrutador volverá a su configuración original. Le recomendamos que <a href="ut_save.html">guarde sus configuraciones o haga una copia de resguardo</a> de ellas antes de restaurar las configuraciones originales. Guardar la configuración de su enrutador le permitirá restaurarlo si las configuraciones se pierden o modifican.',
'426' : 'ADVERTENCIA: Todas sus configuraciones se perderán\n¿Está seguro que desea hacer esto?',
'427' : 'La restauración de las configuraciones predeterminadas puede demorar hasta $s segundos. Durante este proceso, no apague el enrutador.',
'428' : 'No restaurará las configuraciones de fábrica. ¡No se perderán las configuraciones!',
'429' : 'Restablecer valores por defecto',
'301' : 'Esto reinicia su enrutador semanalmente para que usted disfrute de una red sin problemas.',
'302' : 'Inicialización automática de mi enrutador',
'303' : 'Fijar Días',
'304' : 'Fijar Hora',
'527' : 'Esto le permite establecer cualquier valor que haya guardado como configuración de su enrutador.',
'528' : 'Restaurar',
'529' : 'Ingrese el nombre del archivo que contiene las configuraciones de la copia de seguridad.',
'530' : '¿Quiere continuar y restaurar las configuraciones?',
'531' : 'Después de que la restauración de configuraciones, es posible que el dispositivo no responda a los comandos hasta por un minuto.\n\nEsto es normal. No apague su dispositivo durante este tiempo.',
'451' : 'Guardar la configuración actual del enrutador le permitirá restaurarlo si la configuración se pierde o se modifica. Le recomendamos que guarde sus configuraciones antes de actualizar el firmware.',
'539' : 'Ahorre',
'130' : 'Usted no ha introducido todas las direcciones IP o algunos de los números que escribió no son válidos. El número de la dirección IP en el cuadro de ingreso debe ser entre 1 - 254.',
'541' : 'Contraseña de administrador:',
'542' : 'El enrutador se embarca SIN contraseña configurada. Si desea agregar una contraseña para tener más seguridad, puede configurar una contraseña aquí.',
'543' : 'Escriba su contraseña actual',
'544' : 'Escriba su contraseña nueva',
'545' : 'Confirme la contraseña nueva',
'546' : 'Tiempo de espera para el acceso',
'547' : '(1-99 minutos)',
'548' : 'Hora y Zona Horaria:',
'549' : 'Enero',
'550' : 'Por favor configure su zona horaria. Si usted está en un lugar en donde rige el horario de verano, marque este cuadro.',
'551' : 'Zona horaria',
'606' : 'Horario de Verano',
'607' : 'Ajuste Automático al Horario de Verano',
'608' : 'Administración Remota:',
'609' : 'FUNCIÓN AVANZADA!',
'610' : 'La administración remota le permite hacer cambios a las configuraciones de su enrutador desde donde sea en la Internet. Antes de activar esta función,',
'611' : 'ASEGÚRESE DE HABER ESTABLECIDO LA CONTRASEÑA DEL ADMINISTRADOR.',
'642' : 'Activar la administración remota aumenta los riesgos de seguridad. Actívela por períodos cortos solo cuando sea necesario, desactívela cuando no la use y establezca una contraseña.',
'612' : 'Cualquier dirección IP puede administrar el enrutador de manera remota.',
'613' : 'Sólo esta dirección IP puede administrar remotamente &nbsp;&nbsp;&nbsp; el enrutador',
'614' : 'Administración remota ? Activar/Desactivar',
'615' : 'El puerto asignado se usó en el servidor virtual',
'616' : 'La dirección IP asignada está en conflicto con la dirección IP de WAN actual.',
'617' : 'Habilitación de UPNP:',
'618' : 'Le permite encender o apagar la función UPnP del enrutador. Si usted está usando aplicaciones que soportan UPnP, al habilitar el UPnP se permitirá que estas aplicaciones configuren el enrutador automáticamente.',
'619' : 'Habilitar/deshabilitar UPNP',
'620' : 'Habilitación de actualizaciones automáticas del firmware:',
'621' : 'Le permite verificar automáticamente la disponibilidad de actualizaciones de firmware para su enrutador.',
'622' : 'Habilitar / &nbsp;&nbsp;&nbsp;Deshabilitar actualizaciones automáticas del firmware',
'623' : 'La contraseña actual no es válida.',
'624' : 'Las nuevas contraseñas ingresadas no coinciden. Favor de intentarlo nuevamente.',
'626' : 'La longitud de la contraseña no es válida. La longitud máxima de la contraseña es 12 y la longitud mínima de la contraseña es 3',
'628' : 'Se recomienda que usted configure su contraseña de Administrador.',
'629' : 'Servidor NTP Primario',
'630' : 'Servidor NTP Secundario',
'640' : 'Puerto de Acceso Remoto',
'738' : 'El valor de tiempo de inactividad que ingresó no es válido. El número debe ser un número entero entre 1 y 99.',
'796' : 'Activar el modo Turbo permite que el enrutador o punto de acceso use ráfagas de tramas para alcanzar el máximo rendimiento desde el enrutador o punto de acceso para clientes 802.11g. La modalidad Turbo funciona con clientes 802.11g que soportan la modalidad Turbo. Los clientes 802.11g de Belkin que usan el controlador más reciente soportan la modalidad Turbo. Los clientes que no soportan la modalidad Turbo operarán de manera normal si se habilita la modalidad Turbo.',
'1282' : 'Febrero',
'1283' : 'Marzo',
'1284' : 'Abril',
'1285' : 'Mayo',
'1286' : 'Junio',
'1287' : 'Julio',
'1288' : 'Agosto',
'1289' : 'Septiembre',
'1290' : 'Octubre',
'1291' : 'Noviembre',
'1292' : 'Diciembre',
'1373' : 'Australia',
'1374' : 'Nueva Zelanda',
'1375' : 'Norteamérica',
'1376' : 'Europa',
'1377' : 'Asia Pacífico',
'2300' : '(HMG-12:00) Enewetak, Kwajalein',
'2301' : '(HMG-11:00) Isla Midway, Samoa',
'2302' : '(HMG-10:00) Hawai',
'2303' : '(HMG-09:00) Alaska',
'2304' : '(HMG-08:00) Hora del Pacífico (EEUU y Canadá); Tijuana',
'2305' : '(HMG-07:00) Arizona',
'2306' : '(HMG-07:00) Hora de la Montaña (EEUU y Canadá)',
'2307' : '(HMG-06:00) Hora del Centro (EEUU y Canadá)',
'2308' : '(GMT-06:00) Ciudad de México',
'2309' : '(HMG-06:00) Tegucigalpa',
'2310' : '(HMG-06:00) Saskatchewan',
'2311' : '(HMG-05:00) Bogotá, Lima, Quito',
'2312' : '(HMG-05:00) Hora del Este (EEUU y Canadá)',
'2313' : '(HMG-05:00) Indiana (Este)',
'2314' : '(HMG-04:00) Hora del Atlántico (Canadá)',
'2315' : '(HMG-04:00) Caracas, La Paz',
'2316' : '(HMG-04:00) Santiago',
'2317' : '(HMG-03:00) Terranova',
'2318' : '(HMG-03:00) Brasilia',
'2319' : '(HMG-03:00) Buenos Aires, Georgetown',
'2320' : '(HMG-02:00) Atlántico Medio',
'2321' : '(HMG-01:00) Azores, Is. Cabo Verde',
'2322' : '(HMG) Casablanca, Monrovia',
'2323' : '(GMT) Hora del meridiano de Greenwich: Lisboa, Londres, Edimburgo',
'2324' : '(GMT) Hora del meridiano de Greenwich: Dublin',
'2325' : '(HMG+01:00) Ámsterdam, Berlín, Berna, Roma',
'2326' : '(HMG+01:00) Estocolmo, Viena, Belgrado',
'2327' : '(HMG+01:00) Bratislava, Budapest, Ljubljana',
'2328' : '(HMG+01:00) Praga, Bruselas, Copenhague, Madrid',
'2329' : '(HMG+01:00) Paris, Sarajevo, Skopje',
'2330' : '(HMG+01:00) Varsovia, Zagreb',
'2331' : '(GMT+02:00) Atenas, Estambul, Minsk, Vilna, Sofía',
'2332' : '(HMG+02:00) Bucarest',
'2333' : '(HMG+02:00) El Cairo',
'2334' : '(HMG+02:00) Harare, Pretoria',
'2335' : '(HMG+02:00) Helsinki, Riga, Tallinn',
'2336' : '(HMG+02:00) Israel',
'2337' : '(HMG+03:00) Bagdad, Kuwait, Nairobi, Riad',
'2338' : '(GMT+03:00) Moscú, San Petersburgo, Volgogrado, Kazan',
'2339' : '(HMG+03:00) Teherán',
'2340' : '(HMG+04:00) Abu Dhabi, Muscat, Tbilisi',
'2341' : '(HMG +04:30) Kabul',
'2342' : '(HMG+05:00) Islamabad, Karachi, Ekaterimburgo',
'2343' : '(GMT+05:30) Delhi',
'2344' : '(HMG+06:00) Almati, Dhaka',
'2345' : '(HMG+07:00) Bangkok, Yakarta, Hanoi',
'2346' : '(HMG+08:00) Beijing, Chongqing, Urumqi',
'2347' : '(HMG+08:00) Hong Kong, Perth, Singapur, Taipei',
'2348' : '(HMG+09:00) Tokio, Osaka, Sapporo',
'2349' : '(HMG+09:00) Seúl',
'2350' : '(GMT+09:30) Adelaide, Darwin',
'2351' : '(HMG+10:00) Brisbane',
'2352' : '(HMG+10:00) Canberra, Melbourne, Sydney',
'2353' : '(HMG+10:00) Hobart',
'2354' : '(HMG+10:00) Guam, Puerto Moresby',
'2355' : '(HMG+11:00) Magadan, Solamon, Nueva Caledonia',
'2356' : '(HMG+12:00) Wellington, Auckland',
'2357' : '(GMT+12:00) Fiji',
'2358' : '(GMT+13:00) Brisbane',
'2370' : 'Do',
'2371' : 'Lu',
'2372' : 'Ma',
'2373' : 'Mi',
'2374' : 'Ju',
'2375' : 'Vi',
'2376' : 'Sá',
'2401' : 'Modalidad ECO',
'2402' : 'Atenuar los LED del panel frontal',
'2403' : 'Desactivar radio de',
'2404' : 'excepto',
'2405' : 'Esta función le permite atenuar las luces LED ubicadas en el frente del enrutador para ahorrar energía. También puede desactivar la radio inalámbrica en horarios predeterminados.',
'2406' : 'La hora de inicio no puede ser posterior a la de fin.',
'322' : 'Versión del firmware',
'431' : 'De vez en cuando, es posible que Belkin publique nuevas versiones del programa de operación del enrutador. Estas actualizaciones contienen mejoras y correcciones.',
'432' : '<b>NOTA:</b> <a href="ut_save.html">Realice una copia de seguridad de sus configuraciones actuales</a> antes de actualizar a una nueva versión del firmware.',
'433' : 'Haga clic aquí',
'434' : 'para ir a la página de Guardar/Hacer copia de seguridad de la configuración actual.',
'435' : 'Verificar si hay una versión nueva del firmware',
'436' : 'Verificar Firmware',
'437' : 'Actualizar Firmware',
'438' : 'Actualizar',
'439' : 'Por favor especifique la ubicación del archivo de actualización. Escriba la ruta del archivo y el nombre de archivo o haga clic en "Examinar" para buscar la ubicación del archivo.',
'440' : '¿Está seguro de que quiere continuar con la actualización?',
'441' : 'Al final de la actualización, es posible que el enrutador no responda hasta por un minuto. Esto es normal. Durante este tiempo, no apague o reinicie el enrutador.',
'1198' : 'Actualización del firmware en curso.',
'534' : 'Reiniciar enrutador',
'535' : '¿Está seguro de que desea reiniciar el enrutador? El reiniciar el enrutador no afectará su configuración.',
'536' : 'Permita hasta $s segundos para que se reinicie el enrutador. No apague el enrutador antes de que termine el restablecimiento.',
'7001' : 'Disfrute su música, fotos y videos cómodamente a través de cualquier dispositivo DLNA conectado a su red. Con tecnología Twonky.',
'7002' : 'Servidor DLNA',
'7003' : 'Nombre del servidor',
'7004' : 'Unidades compartidas:',
'7005' : 'Listo',
'7006' : 'Indizando?',
'7007' : 'Servicio:',
'7008' : 'videos',
'7009' : 'canciones',
'7010' : 'imágenes',
'7011' : 'Sin uso compartido en red.',
'7012' : 'No hay unidades USB conectadas al enrutador.',
'7016' : 'Actualizar índice',
'7017' : 'Ingrese un nombre para el servidor de medios',
'7018' : 'Carácter no permitido',
'7019' : 'Hay más medios de los que su enrutador puede indizar. Se dará servicio a los primeros',
'7020' : 'elementos.',
'7021' : 'Twonky es una línea de productos digitales de software hogareño creados por PacketVideo Corporation (PV).',
'7022' : 'No se pueden indizar unidades de solo lectura.',
'7023' : 'MB',
'7024' : 'GB',
'7025' : 'TB',
'7026' : 'video',
'7027' : 'canción',
'7028' : 'imagen',
'770' : 'Use esta opción para conexiones Bigpond Cable y OptusNet Cable únicamente. ',
'771' : 'IMPORTANTE:',
'775' : '3) Reconecte el cable de alimentación al enrutador Belkin.',
'776' : 'Para confirmar que usted está correctamente conectado a Internet, abra un explorador de Internet como Internet Explorer, Firefox o Safari y asegúrese de que puede navegar páginas Web.',
'731' : 'Nombre de Usuario',
'489' : 'Contraseña',
'732' : 'Escriba de nuevo la contraseña',
'756' : 'Por favor vuelva a ingresar su contraseña!',
'1379' : 'Usted no ingresó todos los números que componen la dirección IP o algunos de los números ingresados no son válidos. La dirección IP debe ser del tipo x.y.y.x (donde "y" está comprendido entre 0 y 255 y "x" está comprendido entre 1 y 254).',
'709' : 'Para ingresar sus configuraciones de direcciones IP dinámicas, escriba su información a continuación y haga clic en "Guardar".',
'710' : 'Nombre del Host',
'711' : 'Nombre de Host = Un nombre que algunos proveedores de servicio de Internet requieren para conectarse a su sistema.',
'712' : 'Cambiar la dirección MAC de WAN',
'330' : 'Dirección IP',
'331' : 'Máscara de subred',
'659' : 'MTU inválido, debe ser entre 500 y 1500.',
'730' : 'Para ingresar sus configuraciones PPPoE, escriba su información debajo y haga clic en "Guardar".',
'733' : 'Nombre del servicio (opcional)',
'734' : 'MTU (500-1500)',
'735' : 'No haga cambios a la configuración MTU a menos de que su proveedor de servicio de Internet requiera un valor distinto',
'736' : 'Desconectar después de',
'737' : 'minutos de inactividad.',
'741' : 'Valor MTU inválido',
'2005' : 'Dirección IP asignada por el proveedor de servicio de Internet',
'2021' : 'Haga clic aquí para introducir sus configuraciones DNS',
'2023' : 'Las comillas dobles no se permiten.',
'2024' : 'El nombre de usuario contiene caracteres no aceptables',
'2025' : 'La barra diagonal inversa no está permitida.',
'2030' : 'No ingresó la dirección completa de la puerta de enlace predeterminada o algunos de los números ingresados no son válidos. Los números deben estar comprendidos entre 0 y 255',
'2052' : 'La contraseña contiene caracteres inaceptables (<,> y &)',
'691' : 'Una conexión de tipo dinámica es la más común. Si usa un módem de cable, lo más probable es que tiene una conexión dinámica. Si tiene cable módem o si no está seguro de su tipo de conexión, use este tipo de conexión.',
'723' : 'Incluyendo los proveedores de servicio de Internet que requieren un nombre host y proveedores de servicio de Internet que amarran la conexión a una dirección MAC específica.',
'693' : 'Una conexión de tipo IP estática es menos común que otras. Use esta selección solamente si su proveedor de servicio de Internet le asignó una dirección IP que nunca cambia.',
'724' : 'El enrutador admite una conexión a un proveedor de servicio de Internet que asigna una dirección IP estática.',
'695' : 'Si usted usa un módem DSL y/o su proveedor de servicio de Internet le asignó usuario y contraseña, lo más probable es que su tipo de conexión sea PPPoE. Use este tipo de conexión.',
'725' : 'El enrutador soporta una conexión dinámica que requiere una conexión PPPoE para autenticación.',
'697' : 'Algunos proveedores de Internet (ISP) usan el protocolo PPTP para establecer conexiones de sus clientes con la central. Esto requiere de usted que ingrese información adicional que también le proporciona su proveedor de servicio de Internet. Después de aceptar los cambios, la luz del indicador del estado de Internet debe estar en color verde si la conexión se ha configurado correctamente.',
'726' : 'Solo para usar con los proveedores de Internet (ISP) que usan el protocolo PPTP para establecer las conexiones.',
'699' : 'Use esta opción para conexiones Bigpond Cable y OptusNet Cable únicamente.',
'728' : 'Sólo para usuarios de Australia. El enrutador soporta la conexión a Telstra BigPond.',
'2019' : 'Para ingresar las configuraciones del módem, escriba su información a continuación y haga clic en "Guardar".',
'tBackToConnectionType' : 'Voler a Tipo de conexión',
'759' : 'Para ingresar sus configuraciones de dirección IP estática, escriba su información a continuación y haga clic en "Guardar".',
'761' : 'Máscara de subred',
'762' : 'Dirección de la puerta de enlace del proveedor de servicio de Internet',
'754' : 'Haga clic aquí para introducir sus configuraciones DNS',
'715' : 'Cada dispositivo en su red tiene una dirección de hardware exclusiva (dirección MAC) que le permite identificarse ante otros dispositivos, tanto en la red como en Internet.  Pocos proveedores de servicio de Internet (proveedor de servicio de Internet) requieren que ingrese la dirección MAC de su tarjeta de red o enrutador anterior en las configuraciones del enrutador. Si no está seguro, ingrese la dirección MAC de la computadora originalmente conectada al módem antes de instalar el enrutador.',
'716' : 'Dirección MAC de WAN',
'717' : 'Copie la dirección MAC de la computadora',
'718' : 'Copia',
'721' : 'La ficha Internet/WAN es donde usted configura el enrutador para conectarse a su proveedor de servicio de Internet. El enrutador es capaz de conectarse a prácticamente cualquier sistema de un proveedor de servicio de Internet, siempre y cuando haya configurado el enrutador correctamente según el tipo de conexión de su proveedor de servicio de Internet. Para configurar el enrutador para conectarse a su proveedor de servicio de Internet, haga clic en "Tipo de conexión" en la ficha Internet/WAN a la izquierda de la pantalla.',
'722' : 'Tipo de conexión con soporte:',
'htWANMainContent' : 'Seleccione el tipo de conexión:',
'700' : 'Siguiente',
'744' : 'Cuenta PPTP',
'745' : 'Contraseña',
'746' : 'Escriba de nuevo la contraseña',
'747' : 'Nombre del Host',
'1770' : 'Dirección IP asignada por el proveedor de servicio de Internet',
'1771' : 'Sí',
'1772' : 'No',
'1773' : 'Dirección de servicio',
'750' : 'Máscara de subred',
'778' : 'El enrutador puede ser configurado para que funcione estrictamente como un punto de acceso y omita todas las funciones de enrutamiento y firewall. Para ello, seleccione "Activar" y escriba la dirección IP que desea para el punto de acceso.',
'779' : 'Modo de punto de acceso:',
'781' : 'Especificar máscara de subred',
'801' : 'Modalidad de seguridad',
'806' : 'Aquí puede establecer las configuraciones de seguridad y cifrado inalámbricas. Se debe activar la seguridad para asegurar que haya un nivel máximo de seguridad en la red inalámbrica. El protocolo WPA (Wi-Fi Protected Access) proporciona cambios dinámicos de clave y constituye la mejor solución de seguridad. En entornos inalámbricos donde no todos los dispositivos admiten WPA, se debe usar el sistema de cifrado WEP (privacidad equivalente a cableado).',
'377' : 'Automático',
'487' : 'ENCENDER',
'488' : 'APAGAR',
'787' : 'Para modificar las configuraciones inalámbricas del enrutador, haga los cambios aquí. Haga clic en "Guardar" para guardar las configuraciones.',
'788' : 'Canal inalámbrico',
'789' : 'SSID',
'790' : 'Modalidad inalámbrica',
'794' : '"Broadcast SSID" (Difusión del SSID)',
'797' : '"Protected Mode" (Modalidad protegida)',
'1300' : 'Canal de extensión',
'1301' : 'Ancho de banda',
'1304' : '802.11e/WMM QoS',
'852' : 'La longitud de la clave previamente compartida debe ser de 8 a 63 caracteres ó 64 caracteres hexadecimales',
'856' : 'WPA con clave previamente compartida: la clave es una contraseña en forma de palabra, frase o serie de letras y números. La clave debe contener entre <b>8</b> y <b>63</b> caracteres y puede incluir espacios y símbolos, o sólo <b>64</b> caracteres hexadecimales (0-F). Cada cliente que se conecta a la red debe usar la misma clave (clave compartida previamente).',
'115' : 'No ingresó todos los dígitos hexadecimales o algunos de los dígitos hexadecimales introducidos no son válidos. Un dígito hexadecimal puede ser un número de 0 a 9 ó una letra de la A a la F.',
'308' : '<b>SPI</b> - Inspección activa de paquetes. La SPI es el tipo de seguridad de Internet corporativa proporcionada por su puerta de enlace de red doméstica HomeConnect. Con SPI, la puerta de enlace actúa como un "firewall" que protege a su red contra piratas informáticos.',
'808' : 'NOTA:',
'809' : 'Para generar pares hexadecimales automáticamente usando una frase de contraseña, haga clic en el botón a la derecha e ingrese la frase de contraseña aquí',
'810' : 'Frase de contraseña',
'811' : 'Generar',
'812' : 'Por favor escriba una frase de contraseña',
'814' : 'Clave',
'818' : '(pares de dígitos hexadecimales)',
'296' : '<b>Dirección IP</b> IP son las siglas en inglés de Protocolo de Internet. Una dirección IP consiste de una serie de cuatro números separados por puntos, que identifican a una sola computadora anfitriona de Internet. Ejemplo: 192.34.45.8.',
'298' : '<b>ISP</b> Proveedor de servicio de Internet. Un proveedor de servicio de Internet es una empresa que proporciona conexión a Internet para individuos y otras empresas u organizaciones.',
'807' : '(13 pares digitales hexadecimales)',
'813' : 'La clave no está completa',
'821' : 'no está completa',
'1190' : '<br>Para registrarse y obtener su nombre de host DNS dinámico, visite http://www.dyn.org<br>',
'1339' : 'Se recomienda utilizar WPA/WPA2 cuando WPS está habilitado.',
'1363' : 'En Curso - Espere por favor...',
'1364' : 'Error Detectado - Por favor vuelva a intentarlo.',
'1365' : 'Error de superposición de sesión: espere 60 segundos antes de iniciar el proceso nuevamente o consulte su utilidad de cliente para conectarse manualmente a esta red.',
'1366' : 'Éxito - El dispositivo está conectado al enrutador.',
'1370' : 'NIP Inválido! El NIP del dispositivo es de cuatro u ocho dígitos numéricos. Por favor verifíquelo e ingréselo nuevamente.',
'1620' : 'Iniciando - Por favor inicie el PBC del WPS en el dispositivo cliente, en el transcurso de 2 minutos.',
'1621' : 'Iniciando - Por favor inicie WPS en el dispositivo cliente, en el transcurso de 2 minutos.',
'1622' : 'Tiempo de espera excedido ? Ningún cliente se conecta al enrutador',
'1623' : 'Mensaje de Wi-Fi Protected Setup',
'1393' : 'Botón de harware de WPS',
'1320' : 'WPS (Wi-Fi Protected Setup) es el método estándar de la industria para simplificar la instalación y la administración de la seguridad en redes Wi-Fi. Ahora usted puede configurar y conectarse a una red 802.11 habilitada con WPA fácilmente con dispositivos certificados WPS usando ya sea el método de Número de Información Personal (NIP) o la Configuración de Botón de Comando (PBC). Los dispositivos antiguos sin WPS pueden agregarse a la red por medio del método de configuración manual tradicional.',
'1321' : 'Método de Número de Información Personal (NIP)',
'1322' : 'Ingrese el NIP del dispositivo cliente y haga clic en "Inscribirse". Luego, inicie WPS en el dispositivo cliente desde su utilidad inalámbrica o aplicación WPS en el transcurso de 2 minutos.',
'1323' : 'Ingrese el NIP del Dispositivo Cliente',
'1324' : 'Inscribirse',
'1325' : 'Si hay un registro externo disponible, también puede ingresar el NIP del enrutador en el registro externo. Para cambiar el NIP del enrutador, haga clic en "Generar NIP Nuevo" o haga clic en "Restaurar NIP Por Defecto" para restablecer el NIP a las configuración de fábrica.',
'1326' : 'NIP del Enrutador',
'1327' : 'Generar NIP Nuevo',
'1328' : 'Restaurar NIP Por Defecto',
'1329' : 'Método de Configuración de Botón de Comando (PBC)',
'1330' : 'Oprima y sostenga el botón PBC en su enrutador durante 3 segundos o haga clic en "Iniciar PBC". Luego inicie el PBC en el dispositivo que quiere conectar al enrutador en los siguientes 2 minutos.',
'1331' : 'Iniciar PBC',
'1332' : 'Método de Configuración Manual',
'1333' : 'Para dispositivos cliente sin WPS, configure manualmente el dispositivo con las siguientes configuraciones.',
'1334' : 'Seguridad inalámbrica',
'1336' : 'Autenticación de red',
'1337' : 'Cifrado de Datos',
'1338' : 'Clave de Red (PSK)',
'1340' : 'Desbloquear NIP del enrutador',
'1341' : 'NIP del enrutador desactivado debido a un exceso de intentos fallidos',
'1390' : 'Error en la suma de comprobación de NIP. Por favor verifíquelo e ingréselo nuevamente.',
'1391' : 'NIP Inválido! El NIP del dispositivo es de ocho dígitos numéricos. Por favor verifíquelo e ingréselo nuevamente.',
'1392' : 'Configurado',
'1396' : 'Configurar seguridad inalámbrica manualmente',
'1397' : 'seguridad inalámbrica',
'common_err1' : '%s es NULO',
'upgrade_err2' : 'La actualización del firmware se interrumpió por insuficiencia de recursos. Actualización fallida.\nPor favor vuelva a intentar cuando el sistema esté en estado de inactividad (no haya tráfico de Internet)',
'upgrade_err3' : 'No se puede cargar; por favor contacte al administrador.',
'upgrade_err4' : 'El firmware es demasiado grande; actualización fallida.',
'upgrade_err5' : 'Ya tiene instalado el firmware más actualizado.',
'upgrade_err6' : 'Parece que la actualización del firmware se ha corrompido. Por favor vuelva a descargar el archivo del firmware y vuelva a intentar.',
'show10' : 'Lista de clientes DHCP',
'show54' : 'Configuraciones de conexión',
'btn2' : 'Aplicar cambios',
'cff1' : 'Verificación de Firmware Exitosa',
'PM2' : ':30 PM',
'AM2' : ':30 AM',
'Dimicons' : 'Atenuar iconos',
'EcoTo' : 'a',
'fvrm' : 'Por favor desactive la administración remota. Porque su puerto tiene una colisión con uno de sus puertos de entrada de sus servidores virtuales.',
'lsipm2' : 'Dirección IP de LAN inválida; el último número no puede ser 0 ó 255',
'lsldnm' : 'Nombre de dominio local inválido: `~!@#$%^&*()_+[]{}\|;:\'"<>/?.,',
'lsipm5' : 'La dirección IP que elija debe ser una dirección IP no enrutable.\n 192.168.x.x (donde "x" es cualquier número entre 0 y 255.) \n10.x.x.x (donde "x" es cualquier número entre 0 y 255).172.y.x.x (donde "y" es cualquier número entre 16 y 31, y "x" es cualquier número entre 0 y 255).',
'ufy4' : 'La restauración de las configuraciones por defecto puede tomar hasta 60 segundos. Durante este proceso, no apague el enrutador.',
'ufe11' : 'Al final de la actualización, es posible que el enrutador no responda hasta por 180 segundos. Esto es normal. Durante este tiempo, no apague o reinicie el enrutador.',
'ur5' : 'Permita hasta 30 segundos para que reinicie el enrutador. No apague el enrutador antes de que termine el restablecimiento.',
'ur6' : 'Permita hasta 60 segundos para que reinicie el enrutador. No apague el enrutador antes de que termine el restablecimiento.',
'usys83' : 'Los campos de Nueva contraseña y Confirmar nueva contraseña no son iguales',
'usys83_1' : 'La contraseña y confirmar contraseña no son iguales.',
'usys85_1' : 'La contraseña para administración debe tener de 3 a 12 caracteres.',
'usys88' : 'La contraseña ha alcanzado su longitud máxima.',
'usys89' : 'a.m.',
'usys90' : 'p.m.',
'usys92' : 'El número de puerto de acceso remoto debe ser entre 1 y 65535.',
'usysipm' : 'Usted no ingresó todos los números que conforman la dirección IP o algunos de los números ingresados no son válidos. La dirección IP debe presentarse como x.y.y.z (donde "x" es un número del 1 al 223, "y" es un número entre 0 y 255 y "z" es un número entre 1 y 254).',
'self_healing60' : 'Autorecuperable',
'chkwait' : 'Verificando si hay un firmware nuevo...',
'Europe' : 'Europa',
'Australia' : 'Australia y Nueva Zelanda',
'AsiaPacific' : 'Asia Pacífico',
'NorthAmerica' : 'Norteamérica',
'vjs1' : 'Dirección IP inválida; es demasiado larga. Favor de verificar nuevamente',
'vjs2' : 'Dirección IP inválida; falta \'.\'. ¡Favor de verificar nuevamente!',
'vjs3' : 'Dirección IP inválida; faltan números entre \'.\', ¡Favor de verificar nuevamente!',
'vjs4' : 'Dirección IP inválida; hay un \'.\' adicional. ¡Favor de verificar nuevamente!',
'vjs5' : 'Dirección IP inválida; los números entre los \'.\' son demasiados largos. ¡Favor de verificar nuevamente!',
'vm1' : 'Carácter inválido. ',
'vm2' : ' en posición ',
'vm3' : 'Debe ser ',
'vjs6' : 'Formato de año inválido; por favor ingrese, como ejemplo, 2002.',
'vm4' : 'Número inválido ',
'vjs8' : 'Inválido, debe ser entre 1970 y 2037',
'vjs9' : 'Formato de mes invalido; por favor escríbalo como (por ejemplo 01...12)',
'vjs161' : ' no está en ',
'vjs162' : ' máscara de red',
'vjs163' : 'El rango DHCP permitido es ',
'vjs17' : 'Ingresó dos contraseñas diferentes. ¡Favor vuelva a verificar nuevamente!',
'vjs18' : 'Por favor ingrese el número de inicio del puerto.',
'vjs19' : 'El número del puerto inicial debe ser menor al número del puerto final.  ',
'vjs23' : 'Dirección MAC inválida, es una dirección de difusión.',
'vjs24' : 'Dirección MAC inválida, es una dirección nula.',
'vjs25' : 'Dirección MAC inválida, es una dirección de multidifusión.',
'vjs26' : 'Dirección IP inicial y final inválida; la IP final debe ser más grande que la IP inicial.',
'vjs28' : 'Formato de máscara de red inválido.',
'vjs29' : 'Formato inválido; la máscara de red aquí debe ser 255.255.255.0 ó 255.255.255.128 ó 255.255.255.192 ó 255.255.255.224 ó 255.255.255.240 ó 255.255.255.248 ó 255.255.255.252 ó 255.255.255.254',
'vjs30' : 'Dirección IP inválida; el último número no puede ser 0 ó 255',
'vjs31' : 'Dirección IP de LAN inválida; el primer número no puede ser 127',
'vjs32' : 'Dirección IP de LAN inválida; no puede ser 0.0.0.0',
'vjs33' : 'Dirección IP de LAN inválida; debe ser menos de 224.0.0.0',
'vjs42' : 'Los números para la máscara de subred que ingresó no son válidos.',
'vjs45' : 'Especificar la dirección IP',
'vjs46' : 'es inválida, ¡por favor corríjala primero.',
'wcc2' : 'Seleccione su tipo de conexión:',
'wcc13' : 'L2TP',
'wcc14' : 'Algunos proveedores de Internet (ISP) usan el protocolo L2TP para establecer conexiones de sus clientes con la central. Esto requiere de usted que ingrese información adicional que también le proporciona su proveedor de servicio de Internet. Después de aceptar los cambios, la luz del indicador del estado de Internet debe estar en color verde si la conexión se ha configurado correctamente.',
'wds4_1' : 'Dirección DNS primaria',
'wds7' : 'Usted debe ingresar las configuraciones DNS provistas por su proveedor de servicio de Internet si no usa la función de DNS automático',
'wds8' : 'Para hacer cambios al DNS, viste primero %sWebsite Filters %s y seleccione "No filters" (Sin filtros).',
'wmc6' : 'La dirección MAC de WAN no puede ser la misma dirección MAC de LAN. Por favor elija otra dirección.',
'wdd9 ' : 'No hay un servicio DDNS seleccionado.\n',
'wdd10' : 'No hay un servicio DDNS seleccionado y todos los datos en esta página se perderán. ¿Desea continuar?',
'wm10b' : 'Solo para usar con los proveedores de Internet (ISP) que usan el protocolo L2TP para establecer las conexiones.',
'pm' : 'Su servicio no pudo verificar la contraseña que usted ingresó. Por favor confirme que escribió su contraseña correctamente.',
'wpp17' : 'Cuenta L2TP',
'wpp18' : 'Contraseña L2TP',
'wpp19' : 'Por favor ingrese su cuenta L2TP',
'wpp23' : 'Asignación de Dirección IP',
'wpp24' : 'Usar Dirección IP Estática',
'wpp25' : 'Obtener Dinámicamente del Proveedor de Servicio de Internet',
'wppa7' : 'Mi dirección IP',
'wppa9' : 'Identificación de la conexión (opcional)',
'wppa13' : 'Por favor ingrese su cuenta PPTP',
'wppa18' : 'Nombre de servicio inválido.',
'ws2' : 'Para introducir las configuraciones de direcciones IP estáticas, ingrese su información abajo y haga clic en "Aceptar cambios".',
'sm_1' : 'Los números para la máscara de subred que ingresó no son válidos.',
'ws8' : 'Por favor ingrese/valide sus configuraciones de dirección DNS en la siguiente pantalla',
'wt2' : 'Al hacer clic en "Aceptar cambios" se reiniciará el enrutador. Una vez que el enrutador ha reiniciado necesitará hacer lo siguiente',
'wt3' : '1) Desconecte el cable de corriente tanto del módem de cable como del enrutador Belkin.',
'wt4' : '2) Vuelva a conectar el cable de corriente al módem de cable y espere hasta que todas la luces en el módem han dejado de parpadear',
'wt5' : '3) Vuelva a conectar el cable de corriente al enrutador Belkin.',
'wt6' : 'Para confirmar que usted está conectado correctamente al Internet, abra un explorador de Internet como Internet Explorer, Firefox o Safari y asegúrese de que puede navegar páginas Web.',
'wlad2' : 'Habilitar/Deshabilitar',
'wlc2' : 'Para modificar las configuraciones inalámbricas del enrutador, haga los cambios aquí. Haga clic en "Aplicar cambios" para guardar las configuraciones.',
'wlcgb' : '802.11b+g',
'wlcg' : '802.11g',
'wlcb' : '802.11b',
'wlc20' : '20 MHz',
'wlc22' : '20/40 MHz',
'wlcoff' : 'APAGAR',
'wlcngb1' : '802.11b & 802.11g & 1x1 802.11n',
'wlcn1' : '1x1 802.11n',
'wlcngb2' : '802.11b & 802.11g &  802.11n',
'wlcn2' : '802.11n',
'wlcgn' : '802.11g+n',
'wlca' : '802.11a',
'wlcan' : '802.11a y 802.11n',
'wlc26' : 'Esconder el nombre de su red desactivará el WPS.',
'wlc27' : 'Cambiar el tipo de seguridad desactivará el WPS.',
'wlc28' : 'WPS está desactivado por el <A href=%s><B>tipo de seguridad inalámbrica</B></A> que tiene.',
'wlc29' : 'WPS está desactivado porque ha escondido el nombre de su red (SSID).',
'wlc30' : 'WPS está desactivado ya que ha escondido el nombre de su red y por el <A href=%s><B>tipo de seguridad inalámbrica</B></A> que tiene.',
'wlc31' : 'El encender el WPS revelará el nombre de su red (SSID).',
'wlc32' : 'El encender el WPS cambiará el tipo de seguridad a WPA/WPA2. Su contraseña de red actual funcionará bien.',
'wlc33' : 'El encender el WPS revelará el nombre de su red (SSID) y cambiará su tipo de seguridad a WPA/WPA2. Su contraseña de red actual funcionará bien.',
'wle3a' : 'WPA-PSK',
'wle3b' : 'WPA2-PSK',
'wle3c' : 'WPA-PSK + WPA2-PSK',
'wps1' : 'Wi-Fi Protected Setup (WPS)',
'wps3' : 'Por favor configure la seguridad inalámbrica',
'wps17' : 'Para dispositivos cliente sin WPS, corra el programa de Asistente de seguridad de Belkin desde el disco CD o configure manualmente el dispositivo con las siguientes configuraciones:',
'wps23' : 'WPA+WPA2-Personal (PSK)',
'wps25' : 'TKIP+AES',
'wps27' : 'Clave de red (WEP):',
'wps28_1' : 'NULO',
'wle11' : 'Clave 1',
'wle12' : 'Clave 2',
'wle13' : 'Clave 3',
'wle14' : 'Clave 4',
'wpskerr2' : 'La clave debe contener entre 8 y 63 caracteres y solo debe incluir espacios y símbolos, o sólo 64 caracteres hexadecimales (0-F).',
'wpskerr4' : 'Debe ingresar la clave de invitado',
'wpskerr7' : 'La clave de invitado debe tener 8 caracteres',
'wpskerr8' : 'La clave de invitado no debe ser la misma que la clave de la red',
'wlguest1' : 'El SSID no debe ser el mismo que el SSID de invitado',
'wlguest2' : 'El SSID de invitado no debe ser el mismo que el SSID',
'rs_crc' : 'Error de restaurar <CRC>',
'rs_long' : 'Error de restaurar <too long>',
'rs_disposition' : 'Error de restaurar <No Content-Disposition>',
'rs_getpid' : 'Error de restaurar <Can\'t get pid!>',
'rs_unmatchpid' : 'Error de restaurar <Unmatched pid>',
'msg_ddns3 ' : 'Los campos de nombre de dominio no pueden estar vacíos.\n',
'msg_lan_dhcp1 ' : 'Solicitando información de la puerta de enlace.',
'msg_lan_dhcp2 ' : 'Actualizando la base de datos de configuración.',
'msg_wan_stat1 ' : 'Dirección IP ',
'msg_wan_stat2 ' : ' no está en ',
'msg_wan_stat3 ' : ' la red.',
'msg_wls_chan2 ' : 'El SSID de invitado no se puede configurar como NULO.\n',
'fw_not_interrupt ' : 'NO INTERRUMPA O DESCONECTE EL ENRUTADOR; si lo hace podría provocar que el enrutador quede inoperable.',
'msg_invalid_char ' : 'Caracter(es) inválido(s) encontrado(s). Los caracteres válidos son: 0-9, a-z, A-Z, `~!@#$%^&*()_-+=|\\{}[]:";\',.<>/?',
'msg_invalid_domain_char ' : 'Nombre de dominio local inválido'+': ~!@#$%^&*()=+{}[]|":;\\\'?/<>,`',
'msg_invalid_char_1 ' : 'Caracter(es) inválido(s) encontrado(s). Los caracteres válidos son letras y números. Los siguientes símbolos no son válidos: `~!@#$%^&*()_+[]{}\\|;:\'"<>/?.,',
'msg_hostIP_invalid ' : 'La dirección IP host es inválida. No debe ser una IP de LAN del enrutador.\n',
'msg_dmzIP ' : 'Dirección IP de DMZ.',
'msg_blank ' : ' no puede estar vacía.\n',
'msg_space ' : 'No se permite que %s\n esté vacío o que tenga espacios',
'msg_blank_in ' : 'No se permite que %s\n tenga espacios',
'msg_allspaces ' : '%s no puede contener solo espacios\n',
'msg_invalid ' : 'Hay un caracter o varios caracteres inválidos en %s\nLos caracteres válidos son: \n%s\n\n',
'msg_check_invalid ' : '%s contiene un número inválido\n',
'msg_valid_range ' : '%s es inválido. El rango válido es de %s a %s\n',
'msg_invalid_mac ' : 'Dirección MAC inválida.\n',
'msg_multi_mac' : 'La dirección MAC no puede ser una dirección de multidifusión.\n',
'msg_confirmDefault ' : '¡Advertencia!\nEl cargar las configuraciones predetermindas de fábrica borrará todas las configuraciones actuales.\n¿Está seguro que desea hacer esto?',
'Allowed_Services' : 'Servicios permitidos',
'Allowing_Url' : 'El sitio de Web se permite por la dirección URL ',
'Allowing_Keyword' : 'El sitio de Web se permite por la palabra clave',
'wipv63' : 'Los dispositivos conectados a su enrutador pueden establecer comunicación entre sí por medio de paquetes IPv6 nativos. Los paquetes IPv6 en la LAN se enviarán automáticamente a todas las interfaces LAN (puertos Ethernet y redes inalámbricas 2.4 GHz y 5 GHz).',
'wipv64' : 'Cuando se active el modo de paso a través, los paquetes IPv6 también se copiarán en la interfaz WAN.(Cuando está activado, esto crea una conexión directa pero no segura a Internet.)',
'wipv65' : 'Comuníquese directamente con su proveedor de servicio de Internet para obtener más información sobre su soporte a IPv6.',
'wipv67' : 'IPv6 de Internet',
'wipv68' : 'Su red es compatible con IPv6.',
'wipv69' : 'Modo de paso a través',
'mf1' : 'Estas páginas le permiten ajustar el comportamiento de su enrutador cuando se presenten ciertos tipos de tráfico de medios.',
'mf2' : 'Optimice automáticamente su conexión de Internet para diferentes tipos de tráfico.',
'mf3' : 'Observe cómo se está usando su enrutador.',
'mf8' : 'Grabado el %s',
'mf10' : 'Descarga',
'mf11' : 'Carga',
'mf12' : 'Velocidad',
'mf15' : 'Aplicar configuraciones',
'mf18' : 'Ingrese un número entre {0.1-%s}.',
'mf20' : 'Entre {0.1-%s} solamente.',
'mf26' : 'Grabado manualmente el %s',
'mf32' : 'o',
'mf44' : 'Los resultados de la prueba de velocidad automática puede que no sean 100% precisos según el tráfico en Internet u otras condiciones. Para comparar los resultados visite un sitio Web de pruebas de velocidad o contacte a su proveedor de servicio de Internet para confirmar la velocidad de su Internet. Si los resultados de velocidad no son consistentes puede ingresar los valores manualmente.',
'media_dlna18' : 'Sin título',
'media_dlna21' : 'Usted tiene más medios de los que puede indexar su enrutador, por lo que le estamos sirviendo los primeros 12000 ítems.',
'errSubnetMaskInvalid_2' : 'La máscara de subred no tiene una configuración adecuada. Revise su valor.',
'htWAN_L2TP' : 'Configuraciones L2TP',
'htWAN_L2TPContent' : 'Algunos proveedores de Internet (ISP) usan el protocolo L2TP para establecer conexiones de sus clientes con la central. Esto requiere de usted que ingrese información adicional que también le proporciona su proveedor de servicio de Internet. Después de aceptar los cambios, la luz del indicador del estado de Internet debe estar en color verde si la conexión se ha configurado correctamente.',
'p400t001_error' : 'Conecte todo más rápidamente.',
'p400t018_error' : '¿Porqué debo cambiare el nombre?',
'p400t019_error' : 'Esto es lo que verá cuando busca su red desde otros dispositivos. Nombres de red diferentes son más fáciles de encontrar y recordar. Si sus dispositivos inalámbricos estaban previamente conectados a otro enrutador diferente, si usa el mismo nombre de red y contraseña aquí ayudará a que no tenga que indicarles acerca del enrutador nuevo y se conectarán automáticamente.  ',
'dhToggleBand2G' : 'Mostrar 2,4 GHz',
'772' : 'Al hacer clic en "Aceptar cambios" se reiniciará el enrutador. Una vez que el enrutador ha reiniciado necesitará hacer lo siguiente',
'773' : '1) Desconecte el cable de corriente tanto del módem de cable como del enrutador Belkin.',
'774' : '2) Vuelva a conectar el cable de corriente al módem de cable y espere hasta que todas la luces en el módem han dejado de parpadear',
'dft001' : 'Parece que no está conectado.',
'dft002' : 'Si necesita asistencia y tiene un aparato conectado a Internet, visite <strong>help.belkin.com</strong>.',
'gtNoSecCard     ' : 'Guarde su nombre de red y contraseña por si los necesita usar en el futuro.',
'gtFWUpdateMobileError' : 'No es posible en este momento cargar archivos de firmware desde dispositivos móviles. ',
'gtSettingsMobileError' : 'En este momento no es posible cargar archivos de configuraciones desde dispositivos móviles. ',
'gtMoreFromInternet' : 'Conectar a internet para más opciones de idiomas ',
'gtCantConnect' : 'No podemos conectarlo a Internet.',
'p802t004' : 'Vaya al menú de red inalámbrica de su dispositivo',
'p803t004' : 'Vaya al menú de red inalámbrica de su dispositivo',
'PIC-S1t001' : 'Bloquear todos los dispositivos',
'gtUnnamedDevice' : 'Dispositivo sin nombre',
'gtIC' : 'Control de Internet',
'errDefaultGatewayEmpty' : 'La dirección de la puerta de enlace predeterminada  no puede estar en blanco.',
'errDefaultGatewayInvalid' : 'La dirección de la puerta de enlace predeterminada debe ser de cuatro números (0-255) separados por puntos. Revise su valor.',
'errDNSServerEmpty' : 'La dirección del servidor DNS no puede estar en blanco.',
'errDNSServerInvalid' : 'La dirección del servidor DNS debe ser de cuatro números (0-255) separados por puntos. Revise su valor.',
'errIpAddressEmpty' : 'La dirección IP no puede estar en blanco.',
'errIpAddressInvalid' : 'La dirección IP debe ser de cuatro números (0-255) separados por puntos. Revise su valor.',
'errorGenericCommitError' : 'Se produjo un error. Corrija la configuración a continuación e intente nuevamente.',
'errorSSIDEmpty' : 'Ingrese un nombre para su red inalámbrica.',
'errorSSIDInvalidChars' : 'El nombre de su red solo puede contener letras, números, signos de puntuación y espacios.',
'errorSSIDTooLong' : 'El nombre de su red no debe exceder los 32 caracteres.',
'errorWEPPasswordEmpty' : 'Ingrese una contraseña para asegurar su red inalámbrica.',
'errorWEPPasswordInvalidChars' : 'El nombre de su red solo puede contener números y letras de la A a la F.',
'errorWEPPasswordInvalidLength' : 'El nombre de su red debe contener 10 o 26 caracteres.',
'errorWPAPasswordEmpty' : 'Ingrese una contraseña para asegurar su red inalámbrica.',
'errorWPAPasswordInvalidChars' : 'La contraseña de su red solo puede contener letras, números, signos de puntuación y espacios.',
'errorWPAPasswordInvalidLength' : 'La contraseña de su red debe contener entre 8 y 63 caracteres.',
'errPasswordEmpty' : 'Por favor ingrese su contraseña.',
'errPasswordInvalid' : 'Su nombre de usuario solo puede contener letras, números, signos de puntuación y espacios.',
'errPasswordTooLong' : 'Su contraseña debe contener menos de 64 caracteres.',
'errServAddressEmpty' : 'Ingrese una dirección de servicio.',
'errSubnetMaskEmpty' : 'La máscara de subred no puede estar en blanco.',
'errSubnetMaskInvalid' : 'La máscara de subred se compone de cuatro números (0-255) separados por puntos. Revise su valor.',
'errUsernameInvalid' : 'Su nombre de usuario solo puede contener letras, números, signos de puntuación y espacios.',
'errUsernameTooLong' : 'Su nombre de usuario debe contener menos de 64 caracteres.',
'errVCIInvalid' : 'Por favor ingrese un valor entre 0 y 65535. Su proveedor de servicio de Internet le puede indicar el valor que debe usar.',
'errVPIInvalid' : 'Por favor ingrese un valor entre 0 y 255. Su proveedor de servicio de Internet le puede indicar el valor que debe usar.',
'p802t003' : 'Debido a que modificó sus configuraciones, es probable que deba volver a seleccionar su red inalámbrica:',
'p802t011' : 'Debido a que modificó sus configuraciones, es probable que deba volver a seleccionar su red inalámbrica:',
'dft003' : '¿Necesita ayuda?',
'dft004' : '¿Tiene preguntas o necesita asistencia? Puede obtener ayuda las 24 horas con nuestro centro de ayuda en línea.<br><a href="http://www.belkin.com/support/" id="dfBelkinHelp">Centro de Asistencia Belkin &rarr;</a>',
'dhChangeSSID' : 'Cambiar &raquo;',
'dhPassLabel' : 'Contraseña:',
'dhPasswordObscured24' : 't********',
'dhShow' : 'Mostrar:',
'dhSSID24' : '{blahblah}',
'dhToggle24' : '2.4 Ghz',
'dhToggle5' : '5.0 Ghz',
'DownSpeed' : '32.6',
'errUsernameEmpty' : 'Por favor introduzca su nombre de usuario.',
'gt10am' : '10:00 a.m.',
'gt10pm' : '10:00 p.m.',
'gt11am' : '11:00 a.m.',
'gt11pm' : '11:00 p.m.',
'gt1am' : '1:00 a.m.',
'gt1amNextDay' : '1:00 a.m. del siguiente día',
'gt1pm' : '1:00 p.m.',
'gt24ghz' : '2.4 Ghz',
'gt24GKey' : 'Clave de 2.4 GHz',
'gt24GName' : 'SSID de 2.4 GHz',
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
'gt5GMedia' : 'Su banda de 5 Ghz tiene el mismo nombre, con el sufijo “.media” agregado al final.',
'gtGuestName' : 'SSID de invitado',
'gt5pm' : '5:00 p.m.',
'gt6am' : '6:00 a.m.',
'gt6pm' : '6:00 p.m.',
'gt7am' : '7:00 a.m.',
'gt7pm' : '7:00 p.m.',
'gt8am' : '8:00 a.m.',
'gt8pm' : '8:00 p.m.',
'gt9am' : '9:00 a.m.',
'gt9pm' : '9:00 p.m.',
'gtAccessControl' : 'Control Parental de Internet',
'gtAccessPoint' : 'Usar como punto de acceso',
'gtADSL' : 'ADSL',
'gtAdvSettings' : 'Configuraciones avanzadas',
'gtAllElseFails' : 'Si todo lo demás falla, llame al servicio de atención al cliente de Belkin in&nbsp;',
'gtAndroidConnect01' : 'Tabletas y teléfonos Android',
'gtAndroidConnect02' : 'Su dispositivo ofrece un menú de redes inalámbricas disponibles en la aplicación Configuraciones.',
'gtAndroidConnect03' : 'Abra la aplicación <strong>Configuraciones</strong> y seleccione <strong>Inalámbrico y red</strong>.',
'gtAndroidConnect04' : 'De ahí, seleccione <strong>Wi-Fi</strong> para ver la lista de redes disponibles.',
'gtAndroidConnect05' : 'Seleccione <strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong> <!-- IF NOT OPEN --> <span tid="gtNotOpen">Si se le solicita, ingrese la contraseña de la red <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong></span> <!-- /IF -->',
'gtAt' : 'en',
'gtAttenuation' : 'Atenuación',
'gtAustralia' : 'Australia',
'gtBackToDashboard' : '&larr; Volver al panel',
'gtBelkin' : 'Belkin',
'gtBootLoader' : 'Cargador de Arranque',
'gtCantConnect' : 'No podemos conectarlo a su proveedor de servicio de Internet.',
'gtCantConnectNoResponse' : 'No podemos conectarlo a Internet – no hubo respuesta de su proveedor de servicio de Internet.',
'gtChina' : 'China',
'gtClientList' : 'Dispositivos conectados',
'gtClose' : 'Cerrar',
'gtConfig' : 'Configuración',
'gtConfigureRouter' : 'Configurar el enrutador',
'gtConnDevices' : 'Dispositivos conectados',
'gtConnectingToNew' : 'Conectando su nueva red',
'gtConnectionDet' : 'Detalles de la conexión',
'gtConnType' : 'Tipo de conexión',
'gtContentFiltering' : 'Filtro de sitios Web',
'gtCopyright' : 'Copyright &copy; 2012. Belkin. Todos los derechos reservados.',
'gtCurrTimezone' : 'Europa/Helsinki {REPLACE THIS SPAN WITH DETECTED Belkin TZ ID description}',
'gtDashboard' : '&larr; Panel',
'gtDashTitle' : 'Panel del enrutador Belkin',
'gtDataRate' : 'Velocidad de datos',
'gtDDNS' : 'DDNS',
'gtDHCPList' : 'Dispositivos conectados',
'gtDHCPServer' : 'Servidor DHCP',
'gtDMZ' : 'DMZ',
'gtDNS' : 'DNS',
'gtDown' : 'Abajo',
'gtDownloadSpeed' : 'Velocidad de descarga',
'gtEncap' : 'Encapsulación:',
'gtFileInstallError' : 'No se pudo instalar ese archivo – a lo mejor es un tipo de archivo equivocado',
'gtFileLoadError' : 'No se pudo cargar ese archivo – a lo mejor es un tipo de archivo equivocado',
'gtFirewall' : 'Firewall',
'gtFirmware' : 'Firmware',
'gtFirmwareUpdate' : 'Actualización del Firmware',
'gtFrance' : 'Francia',
'gtFreshest' : 'Estamos descargando la versión más reciente de nuestro firmware...',
'gtFrom' : 'De:',
'gtFWUpdate' : 'Actualización del Firmware',
'gtFWUpToDate' : 'Su firmware está ahora actualizado.',
'gtGermany' : 'Alemania',
'gtGuestAccess' : 'Acceso para huéspedes',
'gtGuestNetwork' : 'Red para huéspedes',
'gtHomeNetwork' : 'Red doméstica',
'gtIfYouKnowConnection1' : 'Si conoce su tipo de conexión, puede <a href="700-SelectConnection.htm" id="ISP1a010">configurarlo manualmente &raquo;</a>',
'gtIfYouKnowConnection2' : 'Si conoce su tipo de conexión, puede <a href="700-SelectConnection.htm" id="ISP2a010">configurarlo manualmente &raquo;</a>',
'gtIfYouKnowConnection3' : 'Si conoce su tipo de conexión, puede <a href="700-SelectConnection.htm" id="ISP3a010">configurarlo manualmente &raquo;</a>',
'gtIfYouKnowConnection4' : 'Si conoce su tipo de conexión, puede <a href="700-SelectConnection.htm" id="ISP4a010">configurarlo manualmente &raquo;</a>',
'gtIfYouKnowConnection4a' : 'Si conoce su tipo de conexión, puede <a href="700-SelectConnection.htm" id="ISP4aa010">configurarlo manualmente &raquo;</a>',
'gtIfYouKnowConnection5' : 'Si conoce su tipo de conexión, puede <a href="700-SelectConnection.htm" id="ISP5a010">configurarlo manualmente &raquo;</a>',
'gtIfYouKnowConnection6' : 'Si conoce su tipo de conexión, puede <a href="700-SelectConnection.htm" id="ISP6a010">configurarlo manualmente &raquo;</a>',
'gtIfYouKnowConnection7' : 'Si conoce su tipo de conexión, puede <a href="700-SelectConnection.htm" id="ISP7a010">configurarlo manualmente &raquo;</a>',
'gtIntellistream' : 'Intellistream',
'gtInterleavePath' : 'Intercalar ruta de acceso',
'gtInternetSettings' : 'Configuraciones de la Internet',
'gtIOSConnect01' : 'iPhone, iPad y iPod Touch',
'gtIOSConnect02' : 'Su dispositivo ofrece un menú de redes inalámbricas disponibles en la aplicación Configuraciones.',
'gtIOSConnect03' : 'Abra la aplicación <strong>Configuraciones</strong> y seleccione <strong>Wi-Fi</strong>.',
'gtIOSConnect04' : 'Seleccione <strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong> de la lista de redes. <!-- IF NOT OPEN --> <span tid="gtNotOpen">Si se le solicita, ingrese la contraseña de la red <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong></span> <!-- /IF -->',
'gtIPv6' : 'IPv6',
'gtIPV6Connection' : 'Conexión IPv6',
'gtISP' : 'Tipo de conexión del proveedor de servicio de Internet',
'gtJapan' : 'Japón',
'gtLANIP' : 'Dirección IP de LAN',
'gtLANMAC' : 'MAC de LAN/WLAN',
'gtLANSettings' : 'Configuraciones LAN',
'gtLANSubnet' : 'Máscara de subred de LAN',
'gtLLC' : 'LLC',
'gtLoadPrevSettings' : 'Cargar las configuraciones anteriores',
'gtLocalNetwork' : 'Red local',
'gtLocalSettings' : 'Configuraciones de la red local',
'gtLocked' : 'bloqueado',
'gtMACAddress' : 'Dirección MAC',
'gtMACAddressFiltering' : 'Filtración de direcciones MAC',
'gtMacConnect01' : 'MAC OS X',
'gtMacConnect02' : 'Su computadora proporciona un menú de redes inalámbricas disponibles en el extremo derecho de la barra de menús.',
'gtMacConnect03' : 'Haga clic en el icono de ondas inalámbricas.',
'gtMacConnect04' : 'Seleccione <strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong> de la lista de redes. <!-- IF NOT OPEN --> <span tid="gtNotOpen">Si se le solicita, ingrese la contraseña de la red <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong></span> <!-- /IF -->',
'gtMaybeLater' : 'Tal vez más tarde',
'gtMbitPerSec' : 'Mb/s',
'gtMeaning' : '¿Qué significa esto?',
'gtMedia' : 'Medios',
'gtMediaServer' : 'Servidor de medios',
'gtmidnight' : 'Medianoche',
'gtModel' : 'Modelo',
'gtName' : 'Nombre',
'gtNeedMoreHelp' : '¿Necesita más ayuda?',
'gtNetName' : 'Nombre de la red',
'gtNewFWAvailableModem' : 'Tenemos nuevo firmware para su módem.',
'gtNewFWAvailableRouter' : 'Tenemos nuevo firmware para su enrutador.',
'gtNewFWAvailableRouterAndModem' : 'Tenemos nuevo firmware para su enrutador y módem.',
'gtNext' : 'Siguiente',
'gtNo' : 'No',
'gtNoiseMargin' : 'Margen de Ruido',
'gtNoMyNet' : 'No encuentro mi red',
'gtNoon' : 'Mediodía',
'gtNoSecCard' : 'Guarde su nombre de red y contraseña por si los necesita usar en el futuro.',
'gtNotOpen' : 'Si se le solicita, ingrese la contraseña de la red <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>.',
'gtNZ' : 'Nueva Zelanda',
'gtOffline' : 'Sin conexión',
'gtOnline' : 'En línea',
'gtOptionalSoftware' : 'Software opcional',
'gtOptionalSW' : 'Software opcional',
'gtOptSW' : 'Software opcional',
'gt-OR-' : '-O-',
'gtOther' : '...',
'gtOutputPower' : 'Corriente de salida',
'gtParentalControls' : 'Controles parentales',
'gtPass' : 'Contraseña:',
'gtPIC' : 'Control Parental de Internet',
'gtPICOtherTimes' : 'En cualquier otro periodo, este dispositivo no tendrá acceso a Internet.',
'gtPleaseCallISP' : 'Comuníquese con su proveedor de servicio de Internet',
'gtPortForwarding' : 'Reenvío de puertos',
'gtPrint' : 'Imprimir',
'gtReadAllAboutIt' : 'Para mas ayuda:',
'gtReconnectingHell' : 'Volviendo a conectar...',
'gtRegister' : 'Registrar',
'gtRegistration' : 'Registro',
'gtRestartRouter' : 'Reiniciar enrutador',
'gtRestoreDef' : 'Restablecer valores por defecto',
'gtRestoreFactDefault' : 'Restaurar las configuraciones de fábrica',
'gtRestoreFactDefaults' : 'Restaurar las configuraciones de fábrica',
'gtRestoreSettigns' : 'Restaurar configuraciones',
'gtRetest' : 'Volver a comprobar la conexión',
'gtRouterDetails' : 'Detalles del enrutador',
'gtRouterInfo' : 'Información del enrutador',
'gtSave' : 'Ahorre',
'gtSaveCurrentSettings' : 'Guardar las configuraciones actuales',
'gtSaved' : 'Dispositivo sin nombre guardado',
'gtSaveRestore' : 'Guardar o restaurar las configuraciones',
'gtSaveRestoreSettings' : 'Guardar o restaurar las configuraciones',
'gtSaveSettings' : 'Guardar o hacer copia de seguridad de las configuraciones',
'gtSecLog' : 'Bitácora de seguridad',
'gtSecurity' : 'Seguridad',
'gtSelectLang' : 'Elegir idioma:',
'gtSelfHeal' : 'Self-Healing',
'gtSelfHealing' : 'Self-Healing',
'gtSerialSupport' : 'En la siguiente página registraremos el número de serie de su enrutador para cuando necesite soporte.',
'gtShowtime' : 'Showtime',
'gtSpeedTestResults' : 'Última revisión: hace 1 día a las 3:57 p.m.',
'gtStaticRouting' : 'Enrutamiento Estático',
'gtStatus' : 'Estado',
'gtSystemSettings' : 'Configuraciones del Sistema',
'gtTo' : 'A:',
'gtTraffStats' : 'Estadísticas del tráfico',
'gtTryAgain' : 'Vuelva a intentarlo',
'gtUnlocked' : 'desbloqueado',
'gtUp' : 'Arriba',
'gtUpdate' : 'actualizar',
'gtUpdateNoPowerModem' : 'Estamos actualizando su módem con el nuevo firmware. No apague la alimentación durante el proceso.',
'gtUpdateNoPowerRouter' : 'Estamos actualizando su enrutador con el nuevo firmware. No apague la alimentación durante el proceso.',
'gtUploadSpeed' : 'Velocidad de carga',
'gtUSA' : 'Estados Unidos',
'gtUserName' : 'Nombre de Usuario:',
'gtUtils' : 'Utilidades',
'gtVCI' : 'VCI:',
'gtVCMUX' : 'VC/MUX',
'gtVPI' : 'VPI:',
'gtWAN' : 'Ajustes de WAN',
'gtWANDNS' : 'Dirección DNS',
'gtWANGateway' : 'Puerta de enlace WAN',
'gtWANIP' : 'Dirección IP de WAN',
'gtWANMAC' : 'Dirección MAC de WAN',
'gtWANPingBlocking' : 'Bloqueo de WAN ping',
'gtWANSubnet' : 'Máscara de subred de WAN',
'gtWebsiteFilter' : 'Filtro de sitios Web',
'gtWelcome' : 'Bienvenido',
'gtWiFi' : 'WiFi',
'gtWifiSettings' : 'Sus configuraciones de Wi-Fi se ha modificado con éxito.',
'gtWinConnect01' : 'Windows 7 u 8',
'gtWinConnect02' : 'Su computadora proporciona un menú de redes inalámbricas disponibles en el extremo derecho de la barra de tareas.',
'gtWinConnect03' : 'Haga clic con el botón derecho sobre el icono que indica las barras de fuerza de señal.',
'gtWinConnect04' : 'Seleccione <strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong> <!-- IF NOT OPEN --> <span tid="gtNotOpen">Si se le solicita, ingrese la contraseña de la red <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong></span> <!-- /IF -->',
'gtWinConnect05' : 'Windows Vista y Windows XP',
'gtWinConnect06' : 'Su computadora proporciona un menú de redes inalámbricas disponibles en el extremo derecho de la barra de tareas.',
'gtWinConnect07' : 'Haga clic con el botón derecho en el icono que muestra una computadora con ondas inalámbricas (XP) o dos computadoras (Vista).',
'gtWinConnect08' : 'Seleccione <strong>"View Available Wireless Networks"</strong> (Ver redes inalámbricas disponibles) (XP) o <strong>"Connect to a network"</strong> (Conectarse a una red) (Vista) del menú.',
'gtWinConnect09' : 'Seleccione <strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong> <!-- IF NOT OPEN --> <span tid="gtNotOpen">Si se le solicita, ingrese la contraseña de la red <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong></span> <!-- /IF -->',
'gtWireless' : 'Inalámbrico',
'gtWiring' : 'Cableado',
'gtWPSShort' : 'WPS',
'gtWPS' : 'Wi-Fi Protected Setup',
'gtYes' : 'Sí',
'htFWUpdate' : '¿Qué son las actualizaciones de firmware?',
'htFWUpdateContent' : 'De vez en cuando, es posible que Belkin publique nuevas versiones del programa de operación del enrutador. Estas actualizaciones contienen mejoras y correcciones.<br><br>NOTA: Realice una copia de seguridad de sus configuraciones actuales antes de actualizar a una nueva versión del firmware.',
'htParent' : '¿Qué es el filtro de sitios Web?',
'htPIC' : 'Su Control de Internet',
'htPICBlocked' : 'Se ha suspendido el acceso a Internet.',
'htPICBlockedContent' : 'Restaure el acceso cuando esté preparado para volver a tener conectividad a Internet para todos los dispositivos.',
'htPICContent' : 'Con el Control de Internet usted puede personalizar un intervalo de tiempo para bloquear el acceso a Internet para cada dispositivo.',
'htSaveRestore' : '¿Qué significa guardar, cargar o restaurar configuraciones?',
'htSaveRestoreContent' : 'Su enrutador recuerda las configuraciones como su nombre de red, contraseña, etc. Estas configuraciones pueden guardarse (como respaldo de seguridad) y luego pueden volver a cargarse a su enrutador. Las configuraciones del enrutador también se pueden restaurar a las configuraciones originales de fábrica.',
'htSaveRestoreContentMobile' : '<br>* En iPhone, iPad y iPod Touch, no está disponible la opción de guardar y cargar un archivo de configuraciones. Use otro dispositivo, como una computadora portátil, para guardar y cargar un archivo de configuraciones.',
'ISP1t003' : 'Indíquele que su enrutador pudo obtener una dirección IP pero que el DNS no está funcionando.',
'ISP1t007' : 'DNS traduce nombres tales como "belkin.com" a direcciones numéricas (direcciones IP) que las computadoras utilizan para navegar por Internet. Su enrutador tiene una dirección IP, lo que significa que está conectado a Internet, pero el DNS no funciona, por lo tanto usted no puede navegar. Esto sugiere que algo falla del lado del proveedor de servicio de Internet.  <span class="nub"></span>',
'ISP2t003' : 'Indíquele que su enrutador pudo obtener una dirección IP y que el DNS está funcionando, pero que no podemos hacer ping.',
'ISP2t007' : 'Le enviamos "pings" a otros equipos en Internet para verificar si podemos establecer comunicación con ellos o no. DNS traduce nombres tales como "belkin.com" a direcciones numéricas (direcciones IP) que las computadoras utilizan para navegar por Internet. Su enrutador tiene una dirección IP, lo que significa que está conectado a Internet, y el DNS provisto por su proveedor de servicio de Internet funciona, pero no podemos hacer ping. Esto sugiere que algo falla del lado del proveedor de servicio de Internet.<span class="nub"></span>',
'ISP3t004' : 'Indíquele que su usuario y contraseña fueron aceptados y que aún así no tiene conexión a Internet.',
'ISP3t007' : 'Le enviamos "pings" a otros equipos en Internet para verificar si podemos establecer comunicación con ellos o no. Su proveedor de servicio de Internet aceptó su usuario y contraseña pero que no podemos hacer ping, por lo que usted no puede navegar. Esto sugiere que algo falla del lado del proveedor de servicio de Internet.  <span class="nub"></span>',
'ISP4t003' : 'Indíquele que su usuario y contraseña fueron rechazados un par de veces.',
'ISP4t007' : 'Su conexión de Internet requiere usuario y contraseña, pero su proveedor de servicio de Internet no aceptó lo que usted ingresó. El proveedor de servicio de Internet puede asegurar que usted tenga la información correcta.  <span class="nub"></span>',
'ISP5t003' : 'Indíquele que seleccionó una conexión dinámica pero no logró obtener una dirección IP.',
'ISP5t007' : 'Una dirección IP identifica a un enrutador o a otro tipo de dispositivo en Internet. Su proveedor de servicio de Internet no está asignándole una dirección IP al enrutador y sin esa dirección usted no puede conectarse. Esto sugiere que algo falla del lado del proveedor de servicio de Internet o que la suya no es una conexión dinámica.  <span class="nub"></span>',
'ISP6t003' : 'Indíquele que seleccionó una conexión estática pero no logró ingresar a Internet.',
'ISP6t007' : 'Usamos una conexión estática cuando su proveedor de servicio de Internet le ha asignado una o más direcciones IP específicas para su uso.  <span class="nub"></span>',
'ISP7t003' : 'Dígales que sus configuraciones VPI/VCI no están funcionando y que le gustaría darles los números correctos.',
'ISP7t007' : 'Los números VPI y VCI le indican a su enrutador la ruta que debe usar para comunicarse con su proveedor de servicio de Internet. No pudimos detectar las configuraciones correctas. <span class="nub"></span>',
'Network24Passkey' : '{REPLACE WITH 2.4 PASSWORD}',
'Network24SSID' : '{REPLACE WITH 2.4 SSID}',
'p100t002' : 'Conectémonos a Internet.',
'p100t003' : 'Usted está conectado a su nuevo enrutador; ahora hagamos que se comunique con su proveedor de servicio de Internet.',
'p100t004' : 'Conectémonos a Internet.',
'p100t005' : 'Usted está conectado a su nuevo enrutador; ahora hagamos que se comunique con su proveedor de servicio de Internet.',
'p100t007' : 'Detectar mi conexión',
'p100t008' : 'Si está seguro del tipo de conexión con el que cuenta, puede <a href="700-SelectConnection.htm" id="p100a009" tid="p100t009">configurarlo manualmente &raquo;</a> o ir directamente al <a href="000-Dashboard.htm" id="p100a010" tid="p100t010">panel de información &raquo;</a>.',
'p100t009' : 'configurarlo manualmente &raquo;',
'p100t010' : 'panel de información &raquo;',
'p100t013' : 'Ahora mismo, estamos viendo las páginas in&nbsp;',
'p100t024' : 'Una configuración casi automática',
'p100t025' : 'Primero, verificaremos automáticamente su cableado y detectaremos el tipo de conexión que usted tiene con su proveedor de servicio de Internet (ISP). Usted no debe tener que hacer casi nada. Luego, nos aseguraremos de que el software de su enrutador esté actualizado. <span class="nub"></span>',
'p1010MRt001' : 'Tenemos inconvenientes para establecer comunicación con su módem.',
'p1010MRt002' : 'Asegúrese de que un cable de Ethernet conecte su módem y su enrutador.',
'p1010MRt003' : 'Esto es lo que puede hacer para arreglar esto:',
'p1010MRt004' : 'Asegúrese que su módem-enrutador está conectado a la entrada del teléfono que tiene Internet. Debe haber un cable de red conectando el puerto ADSL en el módem enrutador (el puerto gris en la parte superior) a la entrada del teléfono.',
'p1010MRt005' : 'Asegúrese de que su módem esté encendido. El adaptador debe estar conectado por ambos extremos y una o más luces del módem deben estar encendidas.',
'p1010MRt006' : 'Debería haber un cable de red que conecte su módem con el puerto amarillo de su enrutador. Este cable lleva la señal de su módem al enrutador; sin él, no podrá estar en línea.',
'p1010MRt007' : 'Si ambos están como deben, usted podría  intentar reiniciar su módem. Para ello, desconecte la fuente de alimentación, espere quince segundos y vuelva a conectarla. Si su módem tiene batería es posible que deba ubicar el botón de restablecimiento del módem y usarlo.',
'p1010MRt008' : 'Así deberían verse sus conexiones:',
'p1010MRt009' : 'Seguiremos esperando una conexión mientras verifica.',
'p1010MRt010' : 'El problema de cableado más común surge entre el módem y el enrutador. Es importante verificar ambos extremos del cable. Uno de ellos debe estar conectado al puerto amarillo de su nuevo enrutador; el otro, a un puerto similar en el módem. La identificación de los puertos del módem es distinta según el fabricante. Es posible que los vea identificados como "datos", "LAN", "red" o "Ethernet".  <span class="nub"></span>',
'p1020t001' : 'Tenemos problemas para establecer comunicación con su proveedor de servicio de Internet.',
'p1020t002' : 'Por favor reinicie su módem-enrutador.',
'p1020t003' : 'No estamos obteniendo una conexión de Internet, así que intentemos volver a iniciar su módem-enrutador.',
'p1020t004' : 'Apague su módem-enrutador. Por lo general esto implica mover un interruptor en el módem-enrutador o, simplemente, desconectar su fuente de alimentación.',
'p1020t005' : 'Espere 15 segundos.',
'p1020t006' : 'Vuelva a encender el módem-enrutador.',
'p1020t007' : 'Después de unos segundos sus luces deben encenderse y debe hacer contacto con su proveedor de servicio de Internet.',
'p1020t008' : 'Si el problema persiste, comuníquese con su proveedor de servicio de Internet para resolver el problema con su cuenta.',
'p1020t009' : 'Esperaremos a que el módem-enrutador se apague y se encienda; luego, el proceso continuará automáticamente.',
'p1020t010' : '¿Por qué debo restablecer el módem?',
'p1020t011' : 'En algunos casos, el módem debe reiniciarse antes de establecer comunicación con un enrutador nuevo o una computadora desconocida. En caso de que un error temporal afecte a su proveedor de servicio de Internet, el módem puede interrumpir la conexión inesperadamente. Podemos ver su módem pero no a Internet. Un reinicio rápido puede resolver el problema.<span class="nub"></span>',
'p1100t001' : 'Hay una actualización de firmware disponible.',
'p1100t002' : 'Le recomendamos actualizar su enrutador con la última versión de firmware para garantizar que todo funcione adecuadamente.',
'p1100t003' : 'Mostrarme lo nuevo',
'p1201t001' : 'Bloquee el panel con una contraseña.',
'p1201t002' : 'Ingrese una contraseña para bloquear el panel:',
'p1201t003' : 'Por favor escriba una frase de contraseña.',
'gtSetPassword' : 'Establecer contraseña',
'p1201t005' : 'Cancelar',
'p1210t001' : 'El panel está bloqueado.',
'p1210t002' : 'Por favor ingrese su contraseña:',
'p1210t003' : 'Por favor ingrese su contraseña.',
'p1210t004' : 'La contraseña no es correcta.',
'p1210t005' : '¡Déjenme entrar!',
'p1300t001' : 'Un poco más.',
'p1300t002' : 'Puede obtener más rendimiento de su conexión de Internet si configura Intellistream. Esto implica la ejecución de una prueba de velocidad.',
'p1300t003' : 'Configurar Intellistream',
'p1300t004' : 'Tal vez más tarde',
'p1302t001' : 'Su software está actualizado.',
'p1316t001' : 'Falló la instalación de la actualización del firmware. Por favor intente de nuevo haciendo clic en "Verificar si hay un nuevo Firmware".',
'p1318t001' : 'El archivo de actualización seleccionado no es el tipo correcto o la versión correcta para este dispositivo. Falló la actualización. Por favor obtenga el archivo correcto e intente nuevamente.',
'p1333t001' : 'Su firmware fue actualizado correctamente.',
'p1400t001' : 'Use su puerto USB al máximo.',
'p1400t002' : 'Hay cierto software opcional que puede instalar para que le permita aprovechar al máximo el puerto USB del enrutador',
'p1400t003' : 'Mostrarme el software original',
'p1500t001' : 'Usted está aquí.',
'p1500t002' : 'Parece que usted se encuentra en el huso horario de <span tid="gtCurrTimezone">Europa/Helsinki {REPLACE THIS SPAN WITH DETECTED Belkin TZ ID description}</span>. ¿Es correcto?',
'p1500t003' : 'Correcto',
'p1500t004' : 'Permítame escoger',
'p200t001' : 'Estableciendo conexión...',
'p200t002' : ' Estamos verificando las conexiones físicas a su enrutador.',
'p202At001' : 'En proceso...',
'p202At002' : ' Estamos detectando el tipo de conexión que usted tiene con su proveedor de servicio de Internet. Esto podría tardar unos minutos.',
'p202Bt001' : 'En proceso...',
'p202Bt002' : ' Verificando si su proveedor de servicio de Internet requiere una contraseña. Esto podría tardar unos minutos.',
'p202Ct001' : 'En proceso...',
'p202Ct002' : ' Comprobando la conexión ahora.',
'p202t001' : 'Estableciendo conexión...',
'p202t002' : ' Estamos detectando el tipo de conexión que usted tiene con su proveedor de servicio de Internet.',
'p208t001' : '¿Tiene a la mano los números VPI/VCI?',
'p208t002' : 'Para poder conectarse a Internet, necesita ingresar los números VPI y VCI. Estos identifican la ruta de comunicación que requiere su proveedor de servicio de Internet.',
'p208t003' : 'Su proveedor de servicio de Internet debe haberle dado estos números. Si no puede hallarlos, comuníquese con su proveedor de servicio de Internet.',
'p208t006' : '0',
'p208t007' : '0',
'p208t009' : 'Comprobar mi conexión',
'p208t011' : 'VPI y VCI',
'p208t012' : 'El Identificador de Ruta Virtual (VPI) y el Identificador de Circuito Virtual (VCI) le indican la ruta que debe usar su enrutador para comunicarse con su proveedor de Servicio de Internet. Hay algunas configuraciones comunes que intentamos automáticamente antes de pedirle su ayuda.<span class="nub"></span>',
'p209t001' : 'Hay un problema con estas configuraciones.',
'p209t002' : 'A su proveedor de servicio de Internet no le gustó esos números VPI/VCI. ¿Desea intentar otra vez?',
'p210CXt001' : 'Usted tiene una conexión PPPoE.',
'p210CXt002' : 'Para acceder a Internet, esta conexión requiere nombre de usuario y contraseña.',
'p210CXt004' : '<strong>Su proveedor de servicio de Internet debe haberle dado esta información. Si no puede hallarla, comuníquese con su proveedor de servicio de Internet.</strong>',
'p210CXt006' : '0',
'p210CXt007' : '0',
'p210CXt016' : 'Comprobar mi conexión',
'p210CXt017' : 'PPPoE',
'p210CXt018' : 'El protocolo punto a punto sobre Ethernet genera una conexión segura entre su enrutador y el proveedor de servicio de Internet. Por lo general, es usado por las compañías telefónicas.<span class="nub"></span>',
'p210DXt001' : 'Usted tiene una conexión PPPoA.',
'p210DXt002' : 'Para acceder a Internet, esta conexión requiere nombre de usuario y contraseña.',
'p210DXt004' : '<strong>Su proveedor de servicio de Internet debe haberle dado esta información. Si no puede hallarla, comuníquese con su proveedor de servicio de Internet.</strong>',
'p210DXt006' : '0',
'p210DXt007' : '0',
'p210DXt016' : 'Comprobar mi conexión',
'p210DXt017' : 'PPPoA',
'p210DXt018' : 'El protocolo punto a punto sobre ATM genera una conexión segura entre su enrutador y el proveedor de servicio de Internet. Por lo general, es usado por las compañías telefónicas.<span class="nub"></span>',
'p210t001' : 'Usted tiene una conexión PPPoE DSL.',
'p210t002' : 'Para acceder a Internet necesita nombre de usuario y contraseña.',
'p210t003' : '<strong>Su proveedor de servicio de Internet debe haberle provisto esta información. Si no puede hallarla, comuníquese con su proveedor de servicio de Internet.</strong>',
'p210t005' : 'Nombre de usuario del proveedor de servicio de Internet:',
'p210t009' : 'Comprobar mi conexión',
'p210t010' : 'PPPoE',
'p210t011' : 'El protocolo punto a punto sobre Ethernet genera una conexión segura entre su enrutador y el proveedor de servicio de Internet. Por lo general, es usado por las compañías telefónicas.<span class="nub"></span>',
'p211t001' : 'Estableciendo conexión...',
'p211t002' : ' Estamos tratando de iniciar sesión con su proveedor de servicio de Internet. Esto podría tardar hasta dos minutos o más.',
'p212DXt001' : 'Hay un problema con su configuración PPPoA.',
'p212DXt002' : 'El nombre de usuario, la contraseña o ambos son incorrectos. Favor de intentarlo nuevamente. Si no puede hallar la información correcta, su proveedor de servicio de Internet debe tenerla.',
'p212t001' : 'Hay un problema con su configuración PPPoE.',
'p212t002' : 'El nombre de usuario, la contraseña o ambos son incorrectos. Favor de intentarlo nuevamente. Si no puede hallar la información correcta, su proveedor de servicio de Internet debe tenerla.',
'p220t002' : 'Para lograr la conexión y tener acceso a Internet, por favor ingrese un nombre de usuario, una contraseña y una dirección de servicio.',
'p220t003' : '<strong>Su proveedor de servicio de Internet debe haberle dado esta información. Si no puede hallarla, comuníquese con su proveedor de servicio de Internet.</strong>',
'p220t006' : 'Nombre de usuario del proveedor de servicio de Internet:',
'p220t007' : 'Dirección de servicio:',
'p220t010' : 'Comprobar mi conexión',
'p220t013' : 'Usted tiene una conexión L2TP o PPTP.',
'p220t014' : 'O escoger manualmente mi conexión &raquo;',
'p220t015' : 'L2TP y PPTP',
'p220t016' : 'Tanto L2TP (Protocolo de túnel de capa dos) como PPTP (Protocolo de túnel punto a punto) crean una conexión privada y cifrada entre usted y su proveedor de servicio de Internet.<span class="nub"></span>',
'p221t001' : 'Estableciendo conexión...',
'p221t002' : ' Estamos tratando de iniciar sesión con su proveedor de servicio de Internet. Esto podría tardar hasta 2 minutos.',
'p222t002' : 'El nombre de usuario, la contraseña o ambos son incorrectos. Favor de intentarlo nuevamente. Si no puede hallar la información correcta, su proveedor de servicio de Internet debe tenerla.',
'p222t004' : 'Hay un problema con sus configuraciones.',
'p2300t001' : 'La versión del firmware instalada es:',
'p2300t002' : 'Actualizar firmware desde un archivo guardado localmente:',
'p2300t006' : '¿Está seguro que desea instalar {{file}}?',
'p2300t010' : 'Verificar si hay un nuevo Firmware',
'p2400t006' : 'Sus configuraciones actuales serán remplazadas. ¿Está seguro que desea cargar {{file}}?',
'p2410t001' : '¿Está seguro que desea restaurar las configuraciones de fábrica?',
'p2410t002' : 'Al hacer clic en \'Sí\' se borrarán todas las configuraciones del enrutador como su nombre y contraseña y éstas serán repuestas con las configuraciones originales de fábrica.',
'p300t005' : 'Ahora está en línea.',
'p310t001' : 'Hay una actualización disponible.',
'p310t001x' : 'Esta actualización (v2.1.0c) incluye:',
'p310t002' : 'Para instalar el nuevo firmware, lea el contrato de licencia y acéptelo.',
'p310t003' : 'Contrato de licencia',
'p310t004' : 'Acepto el contrato de licencia.',
'p310t005' : 'Instalar actualización',
'p310t006' : '¿Qué es el firmware?',
'p310t007' : 'El firmware es el software que ejecuta su enrutador. Actualizamos el firmware para mejorar el desempeño de su enrutador, por eso es bueno que usted se asegure de contar con la última versión.  <span class="nub"></span>',
'p315t001' : 'Descargando nuevo firmware.',
'p315t002' : 'Progreso de la descarga:',
'p315t003' : '¿Qué es el firmware?',
'p315t004' : 'El firmware es el software que ejecuta su enrutador. Actualizamos el firmware para mejorar el desempeño de su enrutador, por eso es bueno que usted se asegure de contar con la última versión.  <span class="nub"></span>',
'p320t001' : 'Instalando nuevo firmware.',
'p320t002' : 'Una vez que el nuevo firmware esté instalado, reiniciaremos su enrutador para completar la instalación.',
'p320t004' : '¿Qué es el firmware?',
'p320t005' : 'El firmware es el software que ejecuta su enrutador. Actualizamos el firmware para mejorar el desempeño de su enrutador, por eso es bueno que usted se asegure de contar con la última versión.  <span class="nub"></span>',
'p320t006' : 'Esto demorará unos tres minutos. Progreso de la actualización:',
'p320t010' : 'Una vez que el nuevo firmware esté instalado, reiniciaremos su módem para completar la instalación.',
'p321t001' : 'Reiniciando su enrutador',
'p321t002' : 'Reiniciando su módem',
'p321t003' : 'Ahora que el firmware está instalado, tenemos que reiniciar su enrutador para oficializarlo.',
'p321t004' : 'Reiniciando:',
'p321t005' : 'Actualizaciones de firmware',
'p321t006' : 'El firmware es el software que usa el módem para implementar protocolos de red y de seguridad. Las actualizaciones mejoran la confiabilidad y la funcionalidad, por eso es inteligente asegurarse de contar con la última versión. <span class="nub"></span>',
'p321t010' : 'Ahora que el firmware está instalado, tenemos que reiniciar su módem para oficializarlo.',
'p330t001' : 'Verificando su velocidad de conexión...',
'p330t002' : 'Una prueba rápida de velocidad permitirá que el enrutador optimice su conexión a Internet. Esto tardará unos dos minutos.',
'p331t001' : 'Su firmware está actualizado.',
'p332t001' : 'Volveremos a intentar actualizar el firmware más tarde.',
'p333t001' : 'Su firmware fue actualizado.',
'p334t001' : 'Resultados de la prueba de velocidad.',
'p334t002' : 'Esto es lo que detectamos:',
'p334t003' : 'Velocidad de descarga',
'p334t004' : 'Mb/s',
'p334t005' : 'Velocidad de carga',
'p334t006' : 'Mb/s',
'p340t002' : ' Estamos reconectando su enrutador para poder continuar.',
'p341t001' : 'Por favor reinicie su enrutador.',
'p341t002' : 'Tenemos problemas con la reconexión de su enrutador. Un reinicio rápido serviría de ayuda.',
'p341t003' : 'Desconecte la alimentación de su enrutador, espere unos segundos y vuelva a conectarla. Cuando se encienda una luz azul fija en el enrutador, estaremos listos para conectarlo.',
'p341t003w' : 'Desconecte su enrutador, espere unos segundos y vuelva a conectarlo. Cuando se encienda una luz azul fija en el enrutador, estaremos listos para conectarlo.',
'p341t004' : ' Mientras hace esto, esperemos a que su enrutador esté nuevamente disponible.',
'p342t001' : ' Estamos reconectando su enrutador para poder continuar.',
'p342t002' : 'Es posible que necesite volver a seleccionar su red inalámbrica <span tid="Network24SSID">([REPLACE WITH 2.4 SSID})</span> de la lista de redes inalámbricas para poder solucionar el inconveniente.',
'p343t002' : ' Estamos reconectando su enrutador para poder continuar.',
'p343t003' : 'Es posible que necesite volver a seleccionar su red inalámbrica <span tid="Network24SSID">([REPLACE WITH 2.4 SSID})</span> para continuar.',
'p344t001' : 'Por favor reinicie su enrutador.',
'p344t002' : 'Tenemos problemas con la reconexión de su enrutador. Un reinicio rápido serviría de ayuda.',
'p344t003' : 'Desconecte la alimentación del enrutador, espere 15 segundos y vuelva a conectarla. Cuando se encienda una luz azul fija en el enrutador, estaremos listos para conectarlo.',
'p344t003w' : 'Desconecte su enrutador, espere 15 segundos y vuelva a conectarlo. Cuando se encienda una luz azul fija en el enrutador, estaremos listos para conectarlo.',
'p344t004' : ' Mientras hace esto, esperemos a que su enrutador esté nuevamente disponible.',
'p400f010' : 'WPA2',
'p400f011' : 'WPA/WPA2',
'p400f012' : 'WEP',
'p400f013' : 'Abierta',
'p400t001' : 'Conecte cualquier dispositivo a mayor velocidad.',
'p400t002' : 'Ponerle a su nuevo enrutador el mismo nombre y la misma contraseña del enrutador anterior hará que todos sus dispositivos se conecten de inmediato.',
'p400t004' : 'Nombre de la red:',
'p400t008' : 'Tipo de seguridad: <em class="hide-on-phones">(WPA2 es la más segura)</em>',
'p400t014' : 'Su banda de 5Ghz tendrá el mismo nombre, con el sufijo “.media” agregado al final.',
'p400t015' : 'Si lo desea, puede cambiar esto más adelante.',
'p400t017' : 'Guardar y continuar',
'p400t018' : '¿Por qué debo cambiar el nombre de mi red?',
'p400t019' : 'Todos los dispositivos inalámbricos que estaban anteriormente conectados a su viejo enrutador se conectarán automáticamente al nuevo enrutador si usa el mismo nombre de red y la misma contraseña. Además, es mucho más fácil buscar un único nombre de red en todos sus dispositivos.<span class="nub"></span>',
'p450a009' : 'Excelente. ¿Qué viene ahora?',
'p450t001' : 'Se guardaron sus cambios.',
'p450t002' : 'Estos son su nuevo nombre de red y su contraseña',
'p450t003' : 'Si usó su antiguo nombre de red y su antigua contraseña, sus dispositivos inalámbricos actuales deberían volverse a conectar ahora.',
'p450t004' : 'Nombre:',
'p450t008' : 'En la parte inferior de su enrutador hay un papel para que escriba el nuevo nombre de la red. Así, siempre lo tendrá a mano cuando lo necesite.',
'p450t011' : 'Si usó el nombre anterior de a red y la contraseña, la mayor parte de sus dispositivos inalámbricos se volverá a conectar automáticamente la próxima vez que los inicie. Otros dispositivos requerirán que vuelva a seleccionar la red y luego se conectarán automáticamente. La guía de instalación rápida contiene instrucciones para Windows, OS X, iOS y Android.  <span class="nub"></span>',
'p451a009' : 'Excelente. ¿Qué viene ahora?',
'p451t001' : 'No hay cambios.',
'p451t002' : 'El nombre de su red y la contraseña no cambiaron.',
'p451t003' : 'Deberá informar a cada uno de sus dispositivos el nombre de su red y loa contraseña:',
'p451t004' : 'Nombre:',
'p451t008' : 'En la parte inferior de su enrutador hay un papel para que escriba el nuevo nombre de la red. Así, siempre lo tendrá a mano cuando lo necesite.',
'p451t011' : 'Deberá informar a cada uno de sus dispositivos sobre su nueva red. La guía de instalación rápida contiene instrucciones para Windows, OS X, iOS y Android.  <span class="nub"></span>',
'p500t001' : 'Registre su enrutador.',
'p500t002' : 'El registro es un procedimiento rápido y puede ahorrar muchísimo tiempo en caso de solicitar soporte al cliente.',
'p500t004' : '¿Para qué registrarme?',
'p500t005' : 'Tener más información sobre usted puede ser útil para ayudarlo más rápido en caso de necesidad.<span class="nub"></span>',
'p500tCancel' : 'Registrar después &raquo;',
'p500tSubmit' : 'Registro completo',
'p600t001' : 'Visite la página de Software opcional de su enrutador para recuperar un software similar para sus demás computadoras y dispositivos móviles.',
'p600t002' : 'Gracias, lléveme al panel',
'p600t003' : 'Software opcional',
'p600t004' : 'Estas herramientas de software le permiten aprovechar las características avanzadas que su enrutador ofrece. Hay descargas para Apple iOS, Android, Windows y OS X.  <span class="nub"></span>',
'p601t001' : '<strong>Gracias por registrarse.</strong>',
'p700MRt001' : 'No pudimos configurar automáticamente su conexión. Necesitamos algo más de información para ayudarlo a conectarse.',
'p700MRt002' : '¿Qué tipo de conexión está tratando de configurar?',
'p700MRt003' : 'Mi conexión es una:',
'p700MRt005' : 'Conexión dinámica  (1483 Bridge)',
'p700MRt007' : 'Conexión PPPoE',
'p700MRt009' : 'Conexión PPPoA',
'p700MRt011' : 'Conexión estática (IPoA)',
'p700MRt014' : 'No estoy seguro de cuál es mi tipo de conexión:',
'p700MRt016' : 'Volver a probar automáticamente',
'p700MRt017' : 'Tipos de conexiones  Tipo de conexión',
'p700MRt018' : '<span class="black">Dinámica —</span> Estas conexiones se están volviendo más comunes para algunos proveedores de DSL.',
'p700MRt019' : '<span class="black">PPPoE y PPTA —</span> Estas conexiones requieren nombre de usuario y contraseña otorgados por el proveedor de servicio de Internet.',
'p700MRt021' : '<span class="black">Estática —</span> Estas requieren parámetros personalizados para cada cliente. <span class="nub"></span>',
'p700t001' : 'No pudimos configurar automáticamente su conexión. Necesitamos algo más de información para ayudarlo a conectarse.',
'p700t002' : '¿Qué tipo de conexión está tratando de configurar?',
'p700t003' : 'Mi conexión es una:',
'p700t005' : 'Conexión dinámica',
'p700t007' : 'Conexión PPPoE',
'p700t008' : 'Conexión L2TP o PPTP',
'p700t013' : 'Conexión estática',
'p700t014' : 'No estoy seguro de cuál es mi tipo de conexión:',
'p700t914' : 'Si aún no puede determinar cuál es su tipo de conexión, comuníquese con su proveedor de servicio de Internet.',
'p700t016' : 'Volver a probar automáticamente',
'p700t017' : 'Tipos de conexiones  Tipo de conexión',
'p700t018' : '<span class="black">Dinámica —</span> Conexión común para la mayoría de los proveedores de servicio de Internet por cable y fibra y algunos proveedores de DSL.',
'p700t019' : '<span class="black">PPPoE y PPTP —</span> Requieren nombre de usuario y contraseña otorgados por el proveedor de servicio de Internet.',
'p700t021' : '<span class="black">Estática —</span> Requieren parámetros personalizados para cada cliente. <span class="nub"></span>',
'p701MRt001' : 'Eligió una conexión Dinámica.',
'p701MRt002' : 'Su proveedor de servicio de Internet debió haberle dado valores de configuración adicionales.',
'p701MRt004' : 'Configuraciones dinámicas:',
'p701MRt006' : '0',
'p701MRt007' : '0',
'p701MRt016' : 'Comprobar mi conexión',
'p701MRt017' : 'Conexiones dinámicas',
'p701MRt018' : 'Una conexión dinámica se configura automáticamente una vez que se haya establecido la comunicación con el proveedor de servicio de Internet.<span class="nub"></span>',
'p701t001' : 'Estableciendo conexión dinámica...',
'p701t002' : ' Estamos pidiéndole conexión a su proveedor de servicio de Internet.',
'p702t001' : 'Reiniciando el módem...',
'p702t002' : 'Estamos preparándonos para intentar un tipo de conexión diferente al reiniciar su módem.',
'p710MRt001' : 'Eligió una conexión estática.',
'p710MRt002' : 'Su proveedor de servicio de Internet debe haberle provisto valores de configuración estática. Si no puede hallarla, comuníquese con su proveedor de servicio de Internet.',
'p710MRt004' : 'Configuraciones estáticas:',
'p710MRt005' : 'Dirección IP:',
'p710MRt006' : '0',
'p710MRt007' : 'Máscara de subred:',
'p710MRt008' : '0',
'p710MRt009' : 'Puerta de enlace predeterminada:',
'p710MRt010' : '0',
'p710MRt011' : 'Servidor DNS (primario):',
'p710MRt012' : '0',
'p710MRt013' : 'Servidor DNS (secundario):',
'p710MRt014' : '0',
'p710MRt015' : 'Nota: no todos los proveedores de servicio de Internet requieren un servidor DNS secundario.',
'p710MRt016' : 'Comprobar mi conexión estática',
'p710MRt017' : 'Conexiones estáticas',
'p710MRt018' : 'Una conexión estática se configura manualmente y le brinda a su enrutador una dirección consistente a la que se puede acceder más fácilmente por fuera de su red. Las conexiones estáticas no son comunes en servicio residencial de Internet y por lo general cuestan más. <span class="nub"></span>',
'p710t001' : 'Eligió una conexión estática.',
'p710t002' : 'Su proveedor de servicio de Internet debe haberle provisto valores de configuración estática. Si no puede hallarlos, comuníquese con su proveedor de servicio de Internet.',
'p710t004' : 'Configuraciones estáticas:',
'p710t005' : 'Dirección IP:',
'p710t006' : '0',
'p710t007' : 'Máscara de subred:',
'p710t008' : '0',
'p710t009' : 'Puerta de enlace predeterminada:',
'p710t010' : '0',
'p710t011' : 'Servidor DNS (primario):',
'p710t012' : '0',
'p710t013' : 'Servidor DNS (secundario):',
'p710t014' : '0',
'p710t015' : 'Nota: no todos los proveedores de servicio de Internet requieren un servidor DNS secundario.',
'p710t016' : 'Comprobar mi conexión estática',
'p710t017' : 'Conexiones estáticas',
'p710t018' : 'Una conexión estática se configura manualmente y le brinda a su enrutador una dirección uniforme a la que se puede acceder más fácilmente por fuera de su red. Las conexiones estáticas no son comunes para el servicio residencial de Internet y por lo general cuestan más.  <span class="nub"></span>',
'p711t001' : 'Estableciendo conexión estática...',
'p711t002' : ' Estamos pidiéndole conexión a su proveedor de servicio de Internet.',
'p712t001' : 'Hay un problema con su configuración estática.',
'p712t002' : 'Una de las direcciones u otro de los elementos ingresados es incorrecto pero no podemos determinar cuál de ellos.',
'p800t001' : 'Aplicando sus cambios.',
'p800t002' : 'Estamos aplicando sus cambios y reiniciando el enrutador para oficializarlos.',
'p801t002' : ' Estamos esperando que el enrutador se vuelva a conecta. Una vez que eso suceda, continuaremos.',
'p802t002' : 'Una vez que eso suceda, continuaremos.',
'p802t004' : 'Vaya al menú de red inalámbrica de su dispositivo',
'p802t005' : 'Seleccione su nueva red, llamada <strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong>',
'p802t007' : 'Ingrese la contraseña, la cual es <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>',
'p802t009' : 'Ya está conectado al enrutador y podemos continuar.',
'p802t010' : ' Esperando que el enrutador se vuelva a conectar.',
'p803t002' : 'Una vez que eso suceda, continuaremos.',
'p803t003' : 'Debido a que modificó el nombre de la red, deberá volver a seleccionar la red inalámbrica:',
'p803t004' : 'Vaya al menú de red inalámbrica de su dispositivo',
'p803t005' : 'Seleccione su nueva red, llamada <strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong>',
'p803t007' : 'Ingrese la contraseña, la cual es <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>',
'p803t009' : 'Ya está conectado al enrutador y podemos continuar.',
'p803t010' : ' Esperando que se vuelva a conectar.',
'p804t001' : 'Su dispositivo no logró volverse a conectar.',
'p804t002' : 'Esto sucede a veces y es muy fácil de solucionar.',
'p804t025' : 'Si tiene un dispositivo conectado a Internet a mano, visite la siguiente URL para consultar información útil: <strong>http://belk.in/PMuxOg</strong>',
'p804t026' : 'Si esto no funciona, conecte el cable de Ethernet directamente del módem a la computadora.',
'p804t027' : ' Una vez que veamos una conexión establecida, podremos continuar.',
'p900t001' : 'Es necesario que reinicie su módem.',
'p900t002' : 'Su módem no establece comunicación.',
'p900t003' : 'Para reiniciar su módem realice lo siguiente:',
'p900t004' : 'Apague su módem. Por lo general esto implica operar un interruptor de encendido/apagado (on/off) o simplemente desconectar la alimentación. Algunos módems tienen una batería; en tal caso, tendrá que encontrar el botón de restablecimiento del módem.',
'p900t005' : 'Espere 15 segundos.',
'p900t006' : 'Vuelva a encender el módem.',
'p900t007' : 'Luego de unos segundos, sus luces se encenderán y estará listo para establecer comunicación del enrutador.',
'p900t008' : 'Esperaremos a que el módem se apague y se encienda; luego, el proceso continuará automáticamente.',
'p900t009' : '¿Por qué debo restablecer el módem?',
'p900t010' : 'Algunos módems necesitan que se los restablezca para poder establecer comunicación con un nuevo enrutador o con una computadora desconocida. Podemos ver su módem pero no está en comunicación con su nuevo enrutador. Por lo tanto, un reinicio rápido puede resolver el problema.<span class="nub"></span>',
'p901t001' : 'Por favor reinicie su módem ahora...',
'p901t002' : ' Estamos esperando que su módem se apague y se encienda.',
'p902t001' : 'Su módem se apagó. Bien....',
'p902t002' : ' Estamos esperando que vuelva a encender.',
'p903t001' : '¿Necesita más tiempo?',
'p903t002' : ' Estamos esperando que su módem se reinicie. ¿Necesita más tiempo?',
'p903t005' : 'Usualmente esto significa que se tiene que usar el interruptor de encendido/apagado del módem o desconectarlo de su fuente de energía, pero algunos módems tienen una batería; en ese caso tendrá que encontrar el botón de restablecer del módem.',
'p904t001' : '¿Necesita más tiempo?',
'p904t002' : ' Estamos esperando que su módem vuelva a encenderse. ¿Necesita más tiempo?',
'p905t001' : 'Podemos detectar su módem nuevamente....',
'p905t002' : ' Estamos esperando que sincronice con su proveedor de servicio de Internet. Esto tardará unos dos minutos.',
'p950IMRt001' : 'No pudimos detectar una conexión a su línea ADSL.',
'p950IMRt002' : 'Verifique que hay un cable de red que va desde el ADSL en la salida de pared al puerto gris en su enrutador.',
'p950IMRt004' : 'Asegúrese de que un cable de Ethernet conecte su módem y su enrutador.',
'p950IMRt005' : 'Debe haber un cable de red que conecte el puerto gris en el enrutador a la salida ADSL/teléfono. Este cable lleva la señal de su proveedor de servicio de Internet al enrutador; sin él, no podrá estar conectarse a Internet. Verifique que este cable esté conectado correctamente.',
'p950IMRt006' : 'Así deberían verse esta conexión:',
'p950IMRt007' : 'Debe haber un cable de red que conecte el ADSL en la salida de pared al enchufe de energía en su enrutador (el cual contiene un módem integrado). Este cable lleva la señal de su proveedor de servicio de Internet al enrutador; sin él, no podrá estar conectarse a Internet.',
'p950IMRt009' : 'Así deberían verse esta conexión:',
'p950IMRt010' : 'Seguiremos esperando una conexión mientras verifica.',
'p950IMRt014' : 'Cableado',
'p950IMRt015' : 'El problema de cableado más común surge entre la salida de pared y el enrutador. Es importante verificar ambos extremos del cable. Un extremo debe estar conectado al puerto gris de su nuevo enrutador; el otro extremo debe estar conectado a la salida ADSL. En algunos casos es posible que se requiera un filtro entre la salida de la pared y el cable. <span class="nub"></span>',
'p950PMt001' : 'No pudimos detectar una conexión a su línea ADSL.',
'p950PMt002' : 'Asegúrese que hay una conexión de red entre su enrutador y su fuente de energía (el cual contiene un módem integrado).',
'p950PMt004' : 'Asegúrese de que un cable de Ethernet conecte su módem y su enrutador.',
'p950PMt005' : ' Verifique que el cable de red que sale del cable de energía del módem esté conectado al puerto amarillo WAN en su enrutador. Sin esta conexión de red no podrá estar conectarse a Internet.',
'p950PMt009' : 'Así deberían verse esta conexión:',
'p950PMt010' : 'Seguiremos esperando una conexión mientras verifica.',
'p950PMt011' : 'Cableado',
'p950PMt012' : 'El problema de cableado más común surge entre la salida de pared y el módem. Es importante verificar ambos extremos del cable. Un extremo debe estar conectado a la fuente de energía de su nuevo enrutador; el otro extremo debe estar conectado a la salida ADSL. En algunos casos es posible que se requiera un filtro entre la salida de la pared y el cable. <span class="nub"></span>',
'p950t001' : 'No hemos detectado una conexión a su módem.',
'p950t002' : 'Asegúrese de que su módem esté conectado y encendido.',
'p950t003' : 'Asegúrese de que un cable de Ethernet conecte su módem y su enrutador.',
'p950t004' : 'Asegúrese de que un cable de Ethernet conecte su módem y su enrutador.',
'p950t005' : 'Su módem debería estar encendido y tener  un cable de Ethernet conectado al puerto amarillo de su enrutador.',
'p950t006' : 'Revise su valor.',
'p950t007' : 'Asegúrese de que su módem esté encendido. Verifique que el adaptador de corriente esté conectado por ambos extremos y que una o más luces del módem estén encendidas.',
'p950t008' : 'Debería haber un cable de red que conecte su módem con el puerto amarillo de su enrutador. Este cable transmite la señal desde el módem a su enrutador; sin él, no puede estar en línea.',
'p950t009' : 'Sus conexiones deberían verse así:',
'p950t010' : 'Seguiremos esperando una conexión mientras verifica.',
'p950t011' : 'Cableado',
'p950t012' : 'El problema más común de instalación es el cableado entre el módem y el enrutador. Uno de los extremos debe estar conectado al puerto amarillo de su enrutador; el otro extremo debe conectarse a un puerto similar, pero en el módem. Asegúrese de que ambos estén perfectamente conectados. La identificación de los puertos del módem es distinta según el fabricante. Es posible que los vea identificados como “datos”, “LAN”, “red” o “Ethernet”.<span class="nub"></span>',
'p951IMRt001' : '¿Necesita más tiempo?',
'p951IMRt002' : ' Estamos esperando a que conecte su línea ADSL. ¿Necesita más tiempo?',
'p951t001' : '¿Necesita más tiempo?',
'p951t002' : ' Estamos esperando que su módem vuelva a encenderse. ¿Necesita más tiempo?',
'pDAt001' : 'Administrador duplicado',
'pDAt002' : 'Este dispositivo es administrado por  <span id="ipaddr"></span> actualmente.',
'PIC_blocked_content' : 'El Control Parental está activo y este dispositivo está actualmente bloqueado para acceder a Internet. Oprima el botón de abajo para administrar las configuraciones del Control Parental de Internet.',
'PIC_blocked_title' : 'Este dispositivo está actualmente bloqueado para acceder a Internet.',
'PIC_S1t0006' : 'Horario de acceso a Internet:',
'PIC_S1t006' : 'Recientemente en su red:',
'PIC_S2t003' : 'Noches entre semana',
'PIC_S2t004' : 'Fines de semana',
'PIC_S2t005' : '(Domingo - Jueves)',
'PIC_S2t006' : '(Viernes - Sábado)',
'PIC-blocked' : 'bloqueado',
'PIC-S1dt001' : '¿Desea suspender la conectividad a Internet en toda su red?',
'PIC-S1t001' : 'Bloquear todos los dispositivos',
'PIC-S1t003' : 'Todos los dispositivos están desconectados de Internet.',
'PIC-S1t004' : 'Restaurar acceso',
'PIC-S1t005' : 'Actualmente en su red:',
'PIC-S1t010' : 'Buscando dispositivos:',
'PIC-S1t020' : 'Su horario de Control Parental de Internet está en pausa.',
'PIC-S1t021' : 'El enrutador no sabe cuál es la hora actual, lo cual está previniendo que pueda bloquear o desbloquear el horario de Control Parental de Internet.  Esto se arreglará cuando su enrutador vuelva a establecer la hora correcta al volverse a conectar al servidor de horario NTP.',
'PIC-S1t022' : 'Su enrutador verificará la hora contra el servidor de horario NTP cada cuantos minutos, o puede cambiar el servidor de horario al ir a <a href="#" tid="gtSystemSettings" style="">Configuraciones del sistema</a>.',
'PIC-unblocked' : 'desbloqueado',
'pNoTime_content' : 'Su enrutador no es capaz de dar la hora porque perdió contacto con el servidor de horario NTP. Las funciones del enrutador reguladas por horario, tales como el Control Parental de Internet, el Modo Eco y el Self-Healing están ahora deshabilitadas hasta que se pueda volver a conectar con el servidor de horario NTP. <br> <br>El enrutador automáticamente verificará el horario cada cuantos minutos.',
'pNoTime_title' : '¿Qué hora es?',
'pODLAplt001' : 'Aplicando paquete de idioma',
'pODLAplt002' : 'Cambiando su idioma elegido...',
'pODLDLt001' : 'Descargando paquete de idioma',
'pODLDLt002' : 'Obteniendo su idioma elegido del servido...',
'pODLErrt001' : 'Disculpe',
'pODLErrt002' : 'Aceptar',
'pStatst004' : 'Ver todos &raquo;',
'Support1t001' : 'No hemos detectado una conexión a su módem.',
'Support1t002' : 'Asegúrese de que su módem esté conectado y encendido.',
'Support1t003' : 'Asegúrese de que un cable de Ethernet conecte su módem y su enrutador.',
'Support1t004' : 'Asegúrese de que un cable de Ethernet conecte su módem y su enrutador.',
'Support1t005' : 'Su módem debería estar encendido y tener  un cable de Ethernet conectado al puerto amarillo de su enrutador.',
'Support1t006' : 'Revise su valor.',
'Support1t007' : 'Asegúrese de que su módem esté encendido. Verifique que el adaptador de corriente esté conectado por ambos extremos y que una o más luces del módem estén encendidas.',
'Support1t008' : 'Debería haber un cable de red que conecte su módem con el puerto amarillo de su enrutador. Este cable transmite la señal desde el módem a su enrutador; sin él, no puede estar en línea.',
'Support1t009' : 'Sus conexiones deberían verse así:',
'Support1t010' : 'Una vez completados todos estos pasos, haga clic en Vuelva a intentarlo.',
'Support7t012' : 'Visite <strong>http://belk.in/Q4XXca</strong> en un dispositivo conectado a Internet',
'Support1t016' : 'Cableado',
'Support1t017' : 'El problema más común de instalación es el cableado entre el módem y el enrutador. Uno de los extremos debe estar conectado al puerto amarillo de su enrutador; el otro extremo debe conectarse a un puerto similar, pero en el módem. Asegúrese de que ambos estén perfectamente conectados. La identificación de los puertos del módem es distinta según el fabricante. Es posible que los vea identificados como “datos”, “LAN”, “red” o “Ethernet”.<span class="nub"></span>',
'Support2t001' : 'Su módem nunca se reinició.',
'Support2t002' : 'Intente desconectar la alimentación de su módem.',
'Support2t003' : 'Su módem puede tener un botón de restablecimiento que deba presionarse.',
'Support2t004' : '¿Problemas al reiniciar su módem?',
'Support2t005' : 'Parra reiniciar su módem intente lo siguiente:',
'Support2t006' : 'Desconecte la alimentación de su módem.',
'Support2t007' : 'Espere a que las luces del módem se apaguen.',
'Support2t008' : 'Si permanecen encendidas, el módem puede contar con batería de respaldo. En algún lugar debe haber un botón de restablecimiento (a menudo en la parte posterior). Presiónelo.',
'Support2t009' : 'Deberá ver que las luces del módem se apagan. Espere unos segundos antes de volver a conectar la fuente de alimentación.',
'Support2t010' : 'Una vez completados todos estos pasos, haga clic en Vuelva a intentarlo.',
'Support2t016' : '¿Por qué debo restablecer el módem?',
'Support2t017' : 'Algunos módems necesitan que se los restablezca para poder establecer comunicación con un nuevo enrutador o con una computadora desconocida. Podemos ver su módem pero no está en comunicación con su nuevo enrutador. Por lo tanto, un reinicio rápido puede resolver el problema.<span class="nub"></span>',
'Support3MRt001' : 'No pudimos detectar una conexión a su línea ADSL.',
'Support3MRt002' : 'Verifique que haya un cable de red entre la salida ADSL en la pared y su enrutador.',
'Support3MRt003' : 'En algunas áreas se requiere un filtro.',
'Support3MRt004' : 'Estamos bastante seguros que hay un problema de cableado.',
'Support3MRt005' : 'Debe haber un cable que conecte el puerto gris en el enrutador a la salida ADSL/teléfono.',
'Support3MRt006' : 'Verifique que ambos extremos estén completamente conectados.',
'Support3MRt007' : 'Verifique que el cable esté conectado al puerto gris en su enrutador, en vez de en uno de los puertos amarillos.',
'Support3MRt008' : 'Si se le dio un filtro de línea ADSL, por favor asegúrese que esté entre el cable y la salida ADSL.',
'Support3MRt010' : 'Verifique que ambos extremos estén completamente conectados.',
'Support3MRt011' : 'Verifique que el cable esté conectado en el puerto de red en la fuente de energía del enrutador.',
'Support3MRt012' : 'Si se le dio un filtro de línea ADSL, por favor asegúrese que esté conectado entre el cable y la salida ADSL.',
'Support3MRt016' : 'Una vez que haya hecho estos pasos, estará listo para intentarlo de nuevo.',
'Support3MRt018' : 'Cargue la siguiente URL en un dispositivo conectado a Internet y aprenda cómo solucionar el problema usted mismo: <strong>www.belkin.com/support3mr</strong>',
'Support3MRt021' : 'Cableado',
'Support3MRt022' : 'El problema más común de cableado ocurre con la salida ADSL. Es importante verificar ambos extremos del cable. <span class="nub"></span>',
'Support3MRt050' : 'Verifique que haya un cable de red entre la fuente de energía del enrutador y la salida de teléfono.',
'Support3MRt051' : 'Debe haber un cable conectando la fuente de energía del enrutador y la salida ADSL/teléfono.',
'Support3PMt001' : 'No pudimos detectar una conexión a su línea ADSL.',
'Support3PMt002' : 'Asegúrese que hay una conexión de red entre su enrutador y su fuente de energía (el cual contiene un módem integrado).',
'Support3PMt004' : 'Estamos bastante seguros que hay un problema de cableado.',
'Support3PMt005' : 'Debe haber una conexión de red entre el puerto amarillo del enrutador y la fuente de energía del enrutador.',
'Support3PMt006' : 'Observe el enchufe de la fuente de energía del enrutador y encuentre el cable que se separa en dos líneas. Una de estas líneas tiene un enchufe Ethernet.',
'Support3PMt007' : 'Conecte el enchufe Ethernet en el puerto amarillo de su enrutador.',
'Support3PMt010' : 'Una vez que haya hecho esto, estará listo para intentarlo de nuevo.',
'Support3PMt012' : 'Visite <strong>www.belkin.com/support3PM</strong> en un dispositivo conectado a Internet.',
'Support3PMt016' : 'Cableado',
'Support3PMt017' : 'Asegúrese que haya una serie de conexiones sin interrupciones entre la salida ADSL hasta su enrutador. El enrutador espera recibir esta señal a través del puerto amarillo. El cable que proviene de la fuente de energía del enrutador lleva esta señal además de la energía al enrutador; ambas mitades deben estar conectadas al enrutador para que funcione correctamente. <span class="nub"></span>',
'Support3t001' : 'Su módem nunca volvió a encenderse.',
'Support3t002' : 'Verifique que el módem reciba alimentación.',
'Support3t003' : 'Tal vez haya que esperar un momento para que vuelva a funcionar.',
'Support3t004' : '¿Problemas al reiniciar su módem?',
'Support7t005' : 'Intente los siguientes pasos para establecer una conexión ADSL:',
'Support7t006' : 'Verifique que el cable de red que proviene de su módem-enrutador está conectado a la salida de teléfono que tiene Internet. Luego haga clic en Vuelva a intentarlo para ver si su módem-enrutador puede detectar la Internet.',
'Support7t007' : 'Si su módem-enrutador comparte la salida del teléfono con un teléfono fijo (a través de un divisor), reemplace el divisor con un filtro de divisor (opcional). Luego haga clic en Vuelva a intentarlo para ver si su módem-enrutador puede detectar el proveedor de servicio de Internet.',
'Support7t008' : 'Si no funciona el paso 2, es posible que se requiera usar filtros ADSL. Si tiene unos (normalmente se los da el proveedor de servicio de Internet), conéctelos entre todos los teléfonos fijos y sus salidas de teléfono.',
'Support7t009' : 'Si la conexión ADSL aún no funciona después de hacer los pasos 1-3, comuníquese con su proveedor de servicio de Internet para hablar con su servicio técnico. Dígales que está teniendo problemas para sincronizar su módem-enrutador con el proveedor de servicio de Internet.',
'Support3t010' : 'Una vez completados estos pasos, haga clic en Vuelva a intentarlo.',
'Support3t016' : '¿Por qué debo restablecer el módem?',
'Support3t017' : 'Algunos módems necesitan que se los restablezca para poder establecer comunicación con un nuevo enrutador o con una computadora desconocida. Podemos ver su módem pero no está en comunicación con su nuevo enrutador. Por lo tanto, un reinicio rápido puede resolver el problema.<span class="nub"></span>',
'Support4t001' : 'No logramos volver a conectar su enrutador.',
'Support4t002' : 'Intente reiniciar su enrutador.',
'Support4t003' : 'Una vez que el enrutador esté activo, intente volver a conectarlo.',
'Support4t004' : 'Probemos otras ideas.',
'Support4t005' : 'Primero, reiniciemos su enrutador.',
'Support4t006' : 'Desconecte la alimentación de su enrutador, espere unos segundos y vuelva a conectarla.',
'Support4t006w' : 'Desconecte la alimentación de su enrutador, espere unos segundos y vuelva a conectarla.',
'Support4t007' : 'Cuando se encienda una luz azul fija en el enrutador, estaremos listos para conectarlo.',
'Support4t008' : 'A continuación, intentemos una conexión inalámbrica.',
'Support4t031' : 'Tomará unos cuantos segundos establecer la conexión. Luego, estará listo para un nuevo intento.',
'Support4t032' : 'O bien puede intentar con una conexión por cable.',
'Support4t033' : 'Piense en conectar una computadora al enrutador. Use un cable de Ethernet que vaya de la computadora a uno de los puertos grises del enrutador. Visite http://router/ y desde allí podrá volver a realizar la instalación.',
'Support4t034' : 'Una vez completados estos pasos, haga clic en Vuelva a intentarlo.',
'Support4t040' : 'Visite <strong>http://belk.in/PMuxOg</strong> en un dispositivo conectado a Internet',
'Support4t050' : 'Recuperar una conexión',
'Support4t051' : 'En estas situaciones, podría ser necesario reiniciar el enrutador o simplemente restablecer una conexión. Hemos incluido instrucciones para ambos casos. Como pudo haber modificado la contraseña de red en un paso previo, es probable que deba volver a seleccionar la red una vez reiniciado el enrutador.<span class="nub"></span>',
'Support5t001' : 'No logramos volver a conectar su enrutador.',
'Support5t002' : 'Intente reiniciar su enrutador.',
'Support5t003' : 'Una vez que el enrutador esté activo, intente volver a conectarlo.',
'Support5t004' : 'Probemos otras ideas.',
'Support5t005' : 'Primero, reiniciemos su enrutador.',
'Support5t006' : 'Desconecte la alimentación de su enrutador, espere unos segundos y vuelva a conectarla.',
'Support5t006w' : 'Desconecte su enrutador, espere unos segundos y vuelva a conectarlo.',
'Support5t007' : 'Cuando se encienda una luz azul fija en el enrutador, estaremos listos para conectarlo.',
'Support5t008' : 'A continuación, intentemos una conexión inalámbrica.',
'Support5t009' : 'Tomará unos cuantos segundos establecer la conexión. Luego, estará listo para un nuevo intento.',
'Support5t010' : 'O bien puede intentar con una conexión por cable.',
'Support5t011' : 'Podría conectar una computadora al enrutador. Conecte un cable de Ethernet de la computadora a uno de los puertos grises del enrutador. Visite http://router/ y desde allí podrá volver a realizar la instalación.',
'Support5t012' : 'Una vez completados estos pasos, haga clic en Vuelva a intentarlo.',
'Support5t015' : 'Visite <strong>http://belk.in/PMuxOg</strong> en un dispositivo conectado a Internet',
'Support5t020' : 'Recuperar una conexión',
'Support5t021' : 'En estas situaciones es difícil determinar si se necesita reiniciar el enrutador o restablecer la conexión. Por lo tanto hemos incluido instrucciones para ambos casos. Como modificamos su contraseña de red en un paso previo, asegúrese de conectarse a la nueva red una vez reiniciado el enrutador.<span class="nub"></span>',
'Support6t001' : 'No logramos volver a conectar su enrutador.',
'Support6t002' : 'Intente reiniciar su enrutador.',
'Support6t003' : 'Una vez que el enrutador esté activo, intente volver a conectarlo.',
'Support6t004' : 'Probemos otras ideas.',
'Support6t005' : 'Primero, reiniciemos su enrutador.',
'Support6t006' : 'Desconecte la alimentación de su enrutador, espere unos segundos y vuelva a conectarla.',
'Support6t006w' : 'Desconecte su enrutador, espere unos segundos y vuelva a conectarlo.',
'Support6t007' : 'Cuando se encienda una luz azul fija en el enrutador, estaremos listos para conectarlo.',
'Support6t008' : 'A continuación, intentemos una conexión inalámbrica.',
'Support6t031' : 'Tomará unos cuantos segundos establecer la conexión. Luego, estará listo para un nuevo intento.',
'Support6t032' : 'O bien puede intentar con una conexión por cable.',
'Support6t033' : 'Podría conectar una computadora al enrutador. Conecte un cable de Ethernet de la computadora a uno de los puertos grises del enrutador. Visite http://router/ y desde allí podrá volver a realizar la instalación.',
'Support6t034' : 'Una vez completados estos pasos, haga clic en Vuelva a intentarlo.',
'Support6t037' : 'Visite <strong>http://belk.in/Nm1f5S</strong> en un dispositivo conectado a Internet',
'Support6t050' : 'Recuperar una conexión',
'Support6t051' : 'En estas situaciones, podría ser necesario reiniciar el enrutador o simplemente restablecer una conexión. Hemos incluido instrucciones para ambos casos. Como pudo haber modificado la contraseña de red en un paso previo, es probable que deba volver a seleccionar la red una vez reiniciado el enrutador.<span class="nub"></span>',
'Support7t001' : 'Su módem-enrutador no está conectado a Internet.',
'Support7t004' : 'Hay un problema con la conexión a su salida de teléfono.',
'Support7t050' : 'Problemas de conexión',
'Support7t051' : 'En estas situaciones es difícil decir porqué está teniendo problemas para conectarse al proveedor de servicio de Internet. Hemos verificado el cableado en la mayor medida posible, así que el siguiente paso es verificar que está usando el enchufe correcto, un filtro de ser necesario y, si eso no funciona, llamar a su proveedor de servicio de Internet. <span class="nub"></span>',
'SupportNumber' : '1-800-123-4567',
'UpSpeed' : '12.5',
'p2410t012' : 'Al hacer clic en \'Restaurar\' se borrarán todas las configuraciones del enrutador como su nombre y contraseña y éstas serán repuestas con las configuraciones originales de fábrica.  Sus computadoras, teléfonos, etc. necesitarán configurarse nuevamente con estas configuraciones para poder conectarse a Internet por medio de este enrutador.  ¿Está seguro de que quiere continuar?',
'gtRestore' : 'Restaurar',
'gtCancel' : 'Cancelar',
'alt="Loading"' : 'Cargando',
'alt="Restart Router"' : 'Reiniciar enrutador',
'alt="Check Wires"' : 'Verificar cables',
'alt="Check Phone Connection"' : 'Verificar conexión telefónica',
'alt="Check WAN Connection"' : 'Verificar conexión WAN',
'alt="Checkmark"' : 'Marca de verificación',
'alt="Change"' : 'Cambiar',
'alt="Print"' : 'Imprimir',
'alt="Expand"' : 'Expandir',
'alt="Caret"' : 'Acento circunflejo',
'alt="Cut"' : 'Cortar',
'alt="Browser"' : 'Navegador',
'alt="Wifi"' : 'Wifi',
'alt="Password"' : 'Contraseña',
'alt="Check Phone Jack"' : 'Verificar entrada telefónica',
'alt="Turn Off Modem"' : 'Apagar el módem',
'alt="Turn On Modem"' : 'Encender el módem',
'alt="Check Phone Filters"' : 'Verificar filtros telefónicos',
'gtSerial' : 'No. de Serie',
'gt5GName' : 'SSID de 5 GHz',
'gt5GKey' : 'Clave de 5 GHz',
'p1020MRt001' : 'Tenemos problemas para establecer comunicación con su proveedor de servicio de Internet.',
'p1020MRt002' : 'Por favor reinicie su módem-enrutador.',
'p1020MRt003' : 'No estamos obteniendo una conexión de Internet, así que intentemos volver a iniciar su módem-enrutador.',
'p1020MRt004' : 'Apague su módem-enrutador. Por lo general esto implica mover un interruptor en el módem-enrutador o, simplemente, desconectar su fuente de alimentación.',
'p1020MRt005' : 'Espere 15 segundos.',
'p1020MRt006' : 'Vuelva a encender el módem-enrutador.',
'p1020MRt007' : 'Después de unos segundos sus luces deben encenderse y debe hacer contacto con su proveedor de servicio de Internet.',
'p1020MRt008' : 'Si el problema persiste, comuníquese con su proveedor de servicio de Internet para resolver el problema con su cuenta.',
'p1020MRt009' : 'Esperaremos a que el módem-enrutador se apague y se encienda; luego, el proceso continuará automáticamente.',
'p1020MRt010' : '¿Por qué debo restablecer el módem?',
'p1020MRt011' : 'En algunos casos, el módem debe reiniciarse antes de establecer comunicación con un enrutador nuevo o una computadora desconocida. En caso de que un error temporal afecte a su proveedor de servicio de Internet, el módem puede interrumpir la conexión inesperadamente. Podemos ver su módem pero no a Internet. Un reinicio rápido puede resolver el problema.<span class="nub"></span>',
'p1010t001' : 'Tenemos inconvenientes para establecer comunicación con su módem.',
'p1010t002' : 'Asegúrese de que un cable de Ethernet conecte su módem y su enrutador.',
'p1010t003' : 'Debería haber un cable que conecte su módem con el puerto amarillo de su enrutador. Su módem debería estar encendido.',
'p1010t004' : 'Hay algunas cosas que puede hacer para asegurarse de que todo está listo para funcionar:',
'p1010t005' : 'Asegúrese de que su módem esté encendido. El adaptador debe estar conectado por ambos extremos y una o más luces del módem deben estar encendidas.',
'p1010t006' : 'Debería haber un cable de red que conecte su módem con el puerto amarillo de su enrutador. Este cable lleva la señal de su módem al enrutador; sin él, no podrá estar en línea.',
'p1010t007' : 'Si ambos están como deben, usted podría  intentar reiniciar su módem. Para ello, desconecte la fuente de alimentación, espere quince segundos y vuelva a conectarla. Si su módem tiene batería es posible que deba ubicar el botón de restablecimiento del módem y usarlo.',
'p1010t008' : 'Así deberían verse sus conexiones:',
'p1010t009' : 'Seguiremos esperando una conexión mientras verifica.',
'p1010t010' : 'El problema de cableado más común surge entre el módem y el enrutador. Es importante verificar ambos extremos del cable. Uno de ellos debe estar conectado al puerto amarillo de su nuevo enrutador; el otro, a un puerto similar en el módem. La identificación de los puertos del módem es distinta según el fabricante. Es posible que los vea identificados como ?datos?, ?LAN?, ?red? o ?Ethernet?.',
'Support3t005' : 'Parra reiniciar su módem intente lo siguiente:',
'Support3t006' : 'Verifique las luces del panel frontal del módem. Si están encendidas, su módem también lo está. Es posible que deba esperar un momento para que vuelva a funcionar.',
'Support3t007' : 'Verifique que la alimentación del módem esté correctamente conectada a una salida de pared y al módem.',
'Support3t008' : 'Si el módem tiene interruptor de corriente, verifique que esté en la posición adecuada.',
'Support3t009' : 'Compruebe que el módem siga conectado a su nuevo enrutador.',
'Support1t012' : 'Visite <strong>http://belk.in/LIkBoH</strong> en un dispositivo conectado a Internet',
'QOSt001' : 'Para activar Intellistream, haga lo siguiente:',
'QOSt002' : 'Use un cable ethernet para conectar su computadora al enrutador Belkin (recomendado).',
'QOSt003' : 'Haga clic en <a href="http://www.speedtest.net" target="_blank" class="speed_font4">Speedtest.net</a> para realizar una prueba de velocidad de la conexión de Internet.',
'QOSt004' : 'Luego de realizar la prueba de velocidad, ingrese los valores que aparecen en Speedtest.net en los campos Velocidad de carga y Velocidad de descarga que aparecen más arriba; luego, haga clic en "Guardar" al final de la página.',
'gtMbps' : 'Mbps',
'QOSt006' : 'Con su Velocidad de descarga alta, Intellistream priorizará su Velocidad de carga solamente.',
'QOSt007' : 'Con su Velocidad de carga alta, Intellistream priorizará su Velocidad de descarga solamente.',
'QOSt008' : 'Con estas velocidades de internet altas, Intellistream no será de ayuda, por lo que no estará habilitado aquí.',
'QOSt009' : 'Ingrese un número mayor que 0,01.',
'QOSt010' : 'Ingrese números mayores que 0,01.',
'gtSettingsNotSaved' : 'Tiene configuraciones sin guardar. Permanezca en esta página para guardarlas, o ciérrela o vuélvala a cargar para descartar los cambios.',
'QOSt011' : 'Ingrese un valor entre 0.01 y 100.00.',
'QOSt012' : 'Ingrese valores entre 0.01 y 100.00.',
'QOSt013' : 'Ingrese un valor entre 0.01 y 1000.00.',
'QOSt014' : 'Ingrese valores entre 0.01 y 1000.00.',



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
common_err1 = '%s es NULO';
upgrade_err2 = 'La actualización del firmware se interrumpió por insuficiencia de recursos. Actualización fallida.\nPor favor vuelva a intentar cuando el sistema esté en estado de inactividad (no haya tráfico de Internet)';
upgrade_err3 = 'No se puede cargar; por favor contacte al administrador.';
upgrade_err4 = 'El firmware es demasiado grande; actualización fallida.';
upgrade_err5 = 'Ya tiene instalado el firmware más actualizado.';
upgrade_err6 = 'Parece que la actualización del firmware se ha corrompido. Por favor vuelva a descargar el archivo del firmware y vuelva a intentar.';
show10 = 'Lista de clientes DHCP';
show54 = 'Configuraciones de conexión';
btn2 = 'Aplicar cambios';
cff1 = 'Verificación de Firmware Exitosa';
PM2 = ':30 PM';
AM2 = ':30 AM';
Dimicons = 'Atenuar iconos';
EcoTo = 'a';
fvrm = 'Por favor desactive la administración remota. Porque su puerto tiene una colisión con uno de sus puertos de entrada de sus servidores virtuales.';
lsipm2 = 'Dirección IP de LAN inválida; el último número no puede ser 0 ó 255';
lsldnm = 'Nombre de dominio local inválido: `~!@#$%^&*()_+[]{}\|;:\'"<>/?.,';
lsipm5 = 'La dirección IP que elija debe ser una dirección IP no enrutable.\n 192.168.x.x (donde "x" es cualquier número entre 0 y 255.) \n10.x.x.x (donde "x" es cualquier número entre 0 y 255).172.y.x.x (donde "y" es cualquier número entre 16 y 31, y "x" es cualquier número entre 0 y 255).';
ufy4 = 'La restauración de las configuraciones por defecto puede tomar hasta 60 segundos. Durante este proceso, no apague el enrutador.';
ufe11 = 'Al final de la actualización, es posible que el enrutador no responda hasta por 180 segundos. Esto es normal. Durante este tiempo, no apague o reinicie el enrutador.';
ur5 = 'Permita hasta 30 segundos para que reinicie el enrutador. No apague el enrutador antes de que termine el restablecimiento.';
ur6 = 'Permita hasta 60 segundos para que reinicie el enrutador. No apague el enrutador antes de que termine el restablecimiento.';
usys83 = 'Los campos de Nueva contraseña y Confirmar nueva contraseña no son iguales';
usys83_1 = 'La contraseña y confirmar contraseña no son iguales.';
usys85_1 = 'La contraseña para administración debe tener de 1 a 63 caracteres.';
usys88 = 'La contraseña ha alcanzado su longitud máxima.';
usys89 = 'a.m.';
usys90 = 'p.m.';
usys92 = 'El número de puerto de acceso remoto debe ser entre 1 y 65535.';
usysipm = 'Usted no ingresó todos los números que conforman la dirección IP o algunos de los números ingresados no son válidos. La dirección IP debe presentarse como x.y.y.z (donde "x" es un número del 1 al 223, "y" es un número entre 0 y 255 y "z" es un número entre 1 y 254).';
self_healing60 = 'Autorecuperable';
chkwait = 'Verificando si hay un firmware nuevo...';
Europe = 'Europa';
Australia = 'Australia y Nueva Zelanda';
AsiaPacific = 'Asia Pacífico';
NorthAmerica = 'Norteamérica';
vjs1 = 'Dirección IP inválida; es demasiado larga. Favor de verificar nuevamente';
vjs2 = 'Dirección IP inválida; falta \'.\'. ¡Favor de verificar nuevamente!';
vjs3 = 'Dirección IP inválida; faltan números entre \'.\', ¡Favor de verificar nuevamente!';
vjs4 = 'Dirección IP inválida; hay un \'.\' adicional. ¡Favor de verificar nuevamente!';
vjs5 = 'Dirección IP inválida; los números entre los \'.\' son demasiados largos. ¡Favor de verificar nuevamente!';
vm1 = 'Carácter inválido. ';
vm2 = ' en posición ';
vm3 = 'Debe ser ';
vjs6 = 'Formato de año inválido; por favor ingrese, como ejemplo, 2002.';
vm4 = 'Número inválido ';
vjs8 = 'Inválido, debe ser entre 1970 y 2037';
vjs9 = 'Formato de mes invalido; por favor escríbalo como (por ejemplo 01...12)';
vjs161 = ' no está en ';
vjs162 = ' máscara de red';
vjs163 = 'El rango DHCP permitido es ';
vjs17 = 'Ingresó dos contraseñas diferentes. ¡Favor vuelva a verificar nuevamente!';
vjs18 = 'Por favor ingrese el número de inicio del puerto.';
vjs19 = 'El número del puerto inicial debe ser menor al número del puerto final.  ';
vjs23 = 'Dirección MAC inválida, es una dirección de difusión.';
vjs24 = 'Dirección MAC inválida, es una dirección nula.';
vjs25 = 'Dirección MAC inválida, es una dirección de multidifusión.';
vjs26 = 'Dirección IP inicial y final inválida; la IP final debe ser más grande que la IP inicial.';
vjs28 = 'Formato de máscara de red inválido.';
vjs29 = 'Formato inválido; la máscara de red aquí debe ser 255.255.255.0 ó 255.255.255.128 ó 255.255.255.192 ó 255.255.255.224 ó 255.255.255.240 ó 255.255.255.248 ó 255.255.255.252 ó 255.255.255.254';
vjs30 = 'Dirección IP inválida; el último número no puede ser 0 ó 255';
vjs31 = 'Dirección IP de LAN inválida; el primer número no puede ser 127';
vjs32 = 'Dirección IP de LAN inválida; no puede ser 0.0.0.0';
vjs33 = 'Dirección IP de LAN inválida; debe ser menos de 224.0.0.0';
vjs42 = 'Los números para la máscara de subred que ingresó no son válidos.';
vjs45 = 'Especificar la dirección IP';
vjs46 = 'es inválida, ¡por favor corríjala primero.';
wcc2 = 'Seleccione su tipo de conexión:';
wcc13 = 'L2TP';
wcc14 = '[Solamente Israel]. Este tipo de conexión es el más común en Israel. Si su proveedor de servicio de Internet le indicó que use L2TP y le ha dado la información L2TP adecuada, entonces use esta opción.';
wds4_1 = 'Dirección DNS primaria';
wds7 = 'Usted debe ingresar las configuraciones DNS provistas por su proveedor de servicio de Internet si no usa la función de DNS automático';
wds8 = 'Para hacer cambios al DNS, viste primero %sWebsite Filters %s y seleccione "No filters" (Sin filtros).';
wmc6 = 'La dirección MAC de WAN no puede ser la misma dirección MAC de LAN. Por favor elija otra dirección.';
wdd9  = 'No hay un servicio DDNS seleccionado.\n';
wdd10 = 'No hay un servicio DDNS seleccionado y todos los datos en esta página se perderán. ¿Desea continuar?';
wm10b = 'Solo para usar con los proveedores de Internet (ISP) que usan el protocolo L2TP para establecer las conexiones.';
pm = 'Su servicio no pudo verificar la contraseña que usted ingresó. Por favor confirme que escribió su contraseña correctamente.';
wpp17 = 'Cuenta L2TP';
wpp18 = 'Contraseña L2TP';
wpp19 = 'Por favor ingrese su cuenta L2TP';
wpp23 = 'Asignación de Dirección IP';
wpp24 = 'Usar Dirección IP Estática';
wpp25 = 'Obtener Dinámicamente del Proveedor de Servicio de Internet';
wppa7 = 'Mi dirección IP';
wppa9 = 'Identificación de la conexión (opcional)';
wppa13 = 'Por favor ingrese su cuenta PPTP';
wppa18 = 'Nombre de servicio inválido.';
ws2 = 'Para introducir las configuraciones de direcciones IP estáticas, ingrese su información abajo y haga clic en "Aceptar cambios".';
sm_1 = 'Los números para la máscara de subred que ingresó no son válidos.';
ws8 = 'Por favor ingrese/valide sus configuraciones de dirección DNS en la siguiente pantalla';
wt2 = 'Al hacer clic en "Aceptar cambios" se reiniciará el enrutador. Una vez que el enrutador ha reiniciado necesitará hacer lo siguiente';
wt3 = '1) Desconecte el cable de corriente tanto del módem de cable como del enrutador Belkin.';
wt4 = '2) Vuelva a conectar el cable de corriente al módem de cable y espere hasta que todas la luces en el módem han dejado de parpadear';
wt5 = '3) Vuelva a conectar el cable de corriente al enrutador Belkin.';
wt6 = 'Para confirmar que usted está conectado correctamente al Internet, abra un explorador de Internet como Internet Explorer, Firefox o Safari y asegúrese de que puede navegar páginas Web.';
wlad2 = 'Habilitar/Deshabilitar';
wlc2 = 'Para modificar las configuraciones inalámbricas del enrutador, haga los cambios aquí. Haga clic en "Aplicar cambios" para guardar las configuraciones.';
wlcgb = '802.11b+g';
wlcg = '802.11g';
wlcb = '802.11b';
wlc20 = '20 MHz';
wlc22 = '20/40 MHz';
wlc22a='20/40/80 MHz';
wlcoff = 'APAGAR';
wlcngb1 = '802.11b & 802.11g & 1x1 802.11n';
wlcn1 = '1x1 802.11n';
wlcngb2 = '802.11b & 802.11g &  802.11n';
wlcn2 = '802.11n';
wlcgn = '802.11g+n';
wlca = '802.11a';
wlcan = '802.11a y 802.11n';
wlcnac='802.11n y 802.11ac';
wlcanac='802.11a y 802.11n y 802.11ac';
wlc26 = 'Esconder el nombre de su red desactivará el WPS.';
wlc27 = 'Cambiar el tipo de seguridad desactivará el WPS.';
wlc28 = 'WPS está desactivado por el <A href=%s><B>tipo de seguridad inalámbrica</B></A> que tiene.';
wlc29 = 'WPS está desactivado porque ha escondido el nombre de su red (SSID).';
wlc30 = 'WPS está desactivado ya que ha escondido el nombre de su red y por el <A href=%s><B>tipo de seguridad inalámbrica</B></A> que tiene.';
wlc31 = 'El encender el WPS revelará el nombre de su red (SSID).';
wlc32 = 'El encender el WPS cambiará el tipo de seguridad a WPA/WPA2. Su contraseña de red actual funcionará bien.';
wlc33 = 'El encender el WPS revelará el nombre de su red (SSID) y cambiará su tipo de seguridad a WPA/WPA2. Su contraseña de red actual funcionará bien.';
wle3a = 'WPA-PSK';
wle3b = 'WPA2-PSK';
wle3c = 'WPA-PSK + WPA2-PSK';
wps1 = 'Wi-Fi Protected Setup (WPS)';
wps3 = 'Por favor configure la seguridad inalámbrica';
wps17 = 'Para dispositivos cliente sin WPS, corra el programa de Asistente de seguridad de Belkin desde el disco CD o configure manualmente el dispositivo con las siguientes configuraciones:';
wps23 = 'WPA+WPA2-Personal (PSK)';
wps25 = 'TKIP+AES';
wps27 = 'Clave de red (WEP):';
wps28_1 = 'NULO';
wle11 = 'Clave 1';
wle12 = 'Clave 2';
wle13 = 'Clave 3';
wle14 = 'Clave 4';
wpskerr2 = 'La clave debe contener entre 8 y 63 caracteres y solo debe incluir espacios y símbolos, o sólo 64 caracteres hexadecimales (0-F).';
wpskerr4 = 'Debe ingresar la clave de invitado';
wpskerr7 = 'La clave de invitado debe tener 8 caracteres';
wpskerr8 = 'La clave de invitado no debe ser la misma que la clave de la red';
wlguest1 = 'El SSID no debe ser el mismo que el SSID de invitado';
wlguest2 = 'El SSID de invitado no debe ser el mismo que el SSID';
rs_crc = 'Error de restaurar <CRC>';
rs_long = 'Error de restaurar <too long>';
rs_disposition = 'Error de restaurar <No Content-Disposition>';
rs_getpid = 'Error de restaurar <Can\'t get pid!>';
rs_unmatchpid = 'Error de restaurar <Unmatched pid>';
msg_ddns3  = 'Los campos de nombre de dominio no pueden estar vacíos.\n';
msg_lan_dhcp1  = 'Solicitando información de la puerta de enlace.';
msg_lan_dhcp2  = 'Actualizando la base de datos de configuración.';
msg_wan_stat1  = 'Dirección IP ';
msg_wan_stat2  = ' no está en ';
msg_wan_stat3  = ' la red.';
msg_wls_chan2  = 'El SSID de invitado no se puede configurar como NULO.\n';
fw_not_interrupt  = 'NO INTERRUMPA O DESCONECTE EL ENRUTADOR; si lo hace podría provocar que el enrutador quede inoperable.';
msg_invalid_char  = 'Caracter(es) inválido(s) encontrado(s). Los caracteres válidos son: 0-9, a-z, A-Z, `~!@#$%^&*()_-+=|\\{}[]:";\',.<>/?';
msg_invalid_domain_char  = 'Nombre de dominio local inválido'+': ~!@#$%^&*()=+{}[]|":;\\\'?/<>,`';
msg_invalid_char_1  = 'Caracter(es) inválido(s) encontrado(s). Los caracteres válidos son letras y números. Los siguientes símbolos no son válidos: `~!@#$%^&*()_+[]{}\\|;:\'"<>/?.,';
msg_hostIP_invalid  = 'La dirección IP host es inválida. No debe ser una IP de LAN del enrutador.\n';
msg_dmzIP  = 'Dirección IP de DMZ.';
msg_blank  = ' no puede estar vacía.\n';
msg_space  = 'No se permite que %s\n esté vacío o que tenga espacios';
msg_blank_in  = 'No se permite que %s\n tenga espacios';
msg_allspaces  = '%s no puede contener solo espacios\n';
msg_invalid  = 'Hay un caracter o varios caracteres inválidos en %s\nLos caracteres válidos son: \n%s\n\n';
msg_check_invalid  = '%s contiene un número inválido\n';
msg_valid_range  = '%s es inválido. El rango válido es de %s a %s\n';
msg_invalid_mac  = 'Dirección MAC inválida.\n';
msg_multi_mac = 'La dirección MAC no puede ser una dirección de multidifusión.\n';
msg_confirmDefault  = '¡Advertencia!\nEl cargar las configuraciones predetermindas de fábrica borrará todas las configuraciones actuales.\n¿Está seguro que desea hacer esto?';
Allowed_Services = 'Servicios permitidos';
Allowing_Url = 'El sitio de Web se permite por la dirección URL ';
Allowing_Keyword = 'El sitio de Web se permite por la palabra clave';
wipv63 = 'Los dispositivos conectados a su enrutador pueden establecer comunicación entre sí por medio de paquetes IPv6 nativos. Los paquetes IPv6 en la LAN se enviarán automáticamente a todas las interfaces LAN (puertos Ethernet y redes inalámbricas 2.4 GHz y 5 GHz).';
wipv64 = 'Cuando se active el modo de paso a través, los paquetes IPv6 también se copiarán en la interfaz WAN.(Cuando está activado, esto crea una conexión directa pero no segura a Internet.)';
wipv65 = 'Comuníquese directamente con su proveedor de servicio de Internet para obtener más información sobre su soporte a IPv6.';
wipv67 = 'IPv6 de Internet';
wipv68 = 'Su red es compatible con IPv6.';
wipv69 = 'Modo de paso a través';
mf1 = 'Estas páginas le permiten ajustar el comportamiento de su enrutador cuando se presenten ciertos tipos de tráfico de medios.';
mf2 = 'Optimice automáticamente su conexión de Internet para diferentes tipos de tráfico.';
mf3 = 'Observe cómo se está usando su enrutador.';
mf8 = 'Grabado el %s';
mf10 = 'Descarga';
mf11 = 'Carga';
mf12 = 'Velocidad';
mf15 = 'Aplicar configuraciones';
mf18 = 'Ingrese un número entre {0.1-%s}.';
mf20 = 'Entre {0.1-%s} solamente.';
mf26 = 'Grabado manualmente el %s';
mf32 = 'o';
mf44 = 'Los resultados de la prueba de velocidad automática puede que no sean 100% precisos según el tráfico en Internet u otras condiciones. Para comparar los resultados visite un sitio Web de pruebas de velocidad o contacte a su proveedor de servicio de Internet para confirmar la velocidad de su Internet. Si los resultados de velocidad no son consistentes puede ingresar los valores manualmente.';
media_dlna18 = 'Sin título';
media_dlna21 = 'Usted tiene más medios de los que puede indexar su enrutador, por lo que le estamos sirviendo los primeros 12000 ítems.';
errSubnetMaskInvalid_2 = 'La máscara de subred no tiene una configuración adecuada. Revise su valor.';

