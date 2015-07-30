function dw(message)
{
	document.write(message);	
}


// Note this dictionary is a temporary demonstration
var langDictionary = {

// Copy belkin transation table to here	
'p100t011' : "painel",
'p220t001' : "Tem uma ligação DSL PPPTP",
'p220t011' : "PPTP",
'p220t012' : "O protocolo Point-to-Point Tunneling (PPTP) cria uma ligação privada e encriptada entre si e o fornecedor de serviço de internet.",
'p222t001' : "Há algo de errado com as suas definições PPTP.",
'p300t001' : "A procurar atualizações de firmware.",
'p300t002' : "Estamos a verificar se existem atualizações de firmware disponíveis para o seu novo router",
'p300t003' : "Porque preciso do firmware mais recente?",
'p300t004' : "Firmware é o software que o seu router utiliza para implementar protocolos de rede e segurança. As atualizações melhoram a fiabilidade e funcionalidade do seu router, por isso é bom que se certifique de que tem o mais recente.",
'gtUpdateNoPower' : "Estamos a atualizar o seu router com o novo firmware. Não desligue a alimentação enquanto está a decorrer o processo.",
'p320t003' : "Tal irá demorar mais ou menos três minutos. Progresso de atualização:",
'gtFirmwareRestart' : "Agora que o firmware foi instalado, precisamos de reiniciar o router para o tornar oficial.",
'p342t003' : "entre a lista de redes sem fios para o ajudar.",
'errorSSIDEmpty' : "Insira um nome para a sua rede sem fios.",
'errorSSIDTooLong' : "O nome da sua rede tem de ter menos de 32 caracteres.",
'errorSSIDInvalidChars' : "O nome da sua rede apenas pode conter letras, números, pontuação e espaços.",
'errorWEPPasswordInvalidChars' : "A palavra-passe da sua rede apenas pode conter números e letras de A a F.",
'errorWEPPasswordInvalidLength' : "A palavra-passe da sua rede deve ter entre 10 e 26 caracteres.",
'errorWEPPasswordEmpty' : "Insira uma palavra-passe para tornar segura a sua rede sem fios.",
'errorWPAPasswordInvalidChars' : "A palavra-passe da sua rede apenas pode conter letras, números, pontuação e espaços.",
'errorWPAPasswordInvalidLength' : "A palavra-passe da sua rede deve ter entre 8 e 63 caracteres.",
'errorWPAPasswordEmpty' : "Insira uma palavra-passe para tornar segura a sua rede sem fios.",
'errorGenericCommitError' : "Ocorreu um erro.  Corrija as definições seguintes e tente novamente.",
'p400t006' : "Password (palavra-passe):",
'p450t006' : "Password (palavra-passe): ",
'p451t006' : "Password (palavra-passe): ",
'p500t007' : "Completar registo",
'p500t008' : "Registar-se mais tarde",
'p700t011' : "PPTP DSL connection",
'errIpAddressEmpty' : "O endereço IP não pode estar em branco.",
'errSubnetMaskEmpty' : "A máscara de sub-rede não deve estar em branco.",
'errSubnetMaskInvalid' : "A máscara de sub-rede não parece uma máscara de sub-rede. Por favor verifique os valor.",
'errDefaultGatewayEmpty' : "O endereço de gateway predefinido não pode estar em branco.",
'errDNSServerEmpty' : "O endereço de servidor DNS não pode estar em branco.",
'1781' : "",
'1782' : "",
'1783' : "",
'7102' : "O Belkin Intellistream dá prioridade a serviços de largura de banda elevada e baixa latência, como voz, vídeo ou jogos, para a melhor experiência online possível.",
'7103' : "Para fazer um bom trabalho, o Intellistream precisa de saber a sua velocidade de ligação.",
'7104' : "A ligação de internet irá ser momentaneamente suspensa durante o teste.",
'7105' : "A ligação de internet está momentaneamente suspensa durante o teste.",
'7106' : "Fazer um teste de velocidade",
'7107' : "Teste de velocidade",
'7108' : "Inserir manualmente",
'7109' : "Ping",
'7110' : "Velocidade de <br> Download",
'7111' : "Velocidade de <br>Upload",
'7112' : "A executar...",
'7113' : "Concluído.",
'7114' : "Ocorreu um erro durante o teste.",
'7115' : "Insira um número entre 0.1-100.",
'7116' : "Insira um número entre 0.1-1000.",
'7117' : "Apenas entre 0.1-100.",
'7118' : "Com a sua elevada velocidade de upload, o Intellistream irá dar prioridade apenas à sua velocidade de download.",
'7119' : "Com a sua elevada velocidade de download , o Intellistream irá dar prioridade apenas à sua velocidade de upload.",
'7120' : "Com as suas velocidades elevadas de internet, o Intellistream não precisa de ser ativado.",
'7121' : "Gravado em",
'7122' : "Manualmente gravado em",
'7123' : "Para ativar o Intellistream:",
'7124' : "O Intellistream está ativado.",
'7125' : "O Intellistream está atualmente desativado.",
'7126' : "Configuração manual",
'gtBBSTitle' : "Bem-vindo à configuração do router Belkin",
'gtBack' : "Voltar ao Painel",
'Support4t036' : "Ler tudo sobre isto.",
'Support4t037' : "Insira o seguinte URL num dispositivo ligado à internet e aprenda como corrigir você mesmo o problema: <STRONG>www.belkin.com/support/asdlkj</STRONG>",
'gtReadHelp' : "Visite <STRONG>http://belk.in/NLk29H</STRONG> num dispositivo ligado à internet",
'Support5t014' : "Ler tudo sobre isto.",
'p1200t001' : "Um pouco mais de segurança.",
'p1200t002' : "Você pode proteger seu roteador , bloqueando o painel de instrumentos com uma senha.",
'errsetempt' : "Introduza uma palavra-passe.",
'errorpwdEmpty' : "Introduza a sua palavra-passe.",
'errorpwdError' : "A sua palavra-passe não está correta.",
'60' : "Administrador de duplicados",
'61' : "Este dispositivo está a ser gerido por",
'62' : "atualmente!",
'gtDisconnected' : "Desligado",
'dft005' : "Centro de ajuda Belkin",
'dhToggleBand' : "Mostrar 5.0Ghz",
'419' : "segundos restantes.",
'422' : "Definições restauradas com êxito",
'423' : "O ficheiro restaurado não é o tipo correto para este dispositivo. O restauro falhou. Obtenha o ficheiro correto e volte a tentar",
'533' : "Se o seu router começar a funcionar incorretamente, pode ser necessário reiniciar ou ligar/desligar o router. A reinicialização do router não apaga as suas definições.",
'1200' : "A aplicar as alterações. Aguarde.......",
'1386' : "O ficheiro de atualização não é do tipo ou versão correta para este dispositivo. A atualização falhou. Obtenha o ficheiro correto e volte a tentar",
'2053' : "Alterações aplicadas com êxito",
'2054' : "Atualização de firmware com êxito",
'766' : "Os números de máscara de sub-rede introduzidos são inválidos.",
'1356' : "IP do gateway inválido, o primeiro número deve situar-se entre 1 e 223.",
'1357' : "IP do gateway inválido, o segundo e o terceiro números devem situar-se entre 0 e 255.",
'1358' : "IP do gateway inválido, o último número deve situar-se entre 1 e 254.",
'1360' : "Endereço IP inválido, o primeiro número deve situar-se entre 1 e 223.",
'1354' : "Endereço IP inválido, o segundo e o terceiro números devem situar-se entre 0 e 255.",
'675' : "Endereço IP inválido o último número deve situar-se entre 1 e 254.",
'403' : "O IP introduzido é inválido.",
'760' : "Endereço IP",
'1760' : "Negar todos",
'395' : "Não introduziu todos os números, ou alguns dos números introduzidos são inválidos. O número em cada caixa de entrada deve situar-se entre 0 e 255.",
'1395' : "Não configurado",
'1281' : "O IP da WAN não pode cobrir a sub-rede da LAN.",
'641' : "Não introduziu todos os números de IP ou alguns dos números introduzidos são inválidos. Todos os números devem situar-se entre 0 e 255",
'errUsernameTooLong' : "O seu nome de utilizador deve ter menos de 64 caracteres.",
'errUsernameInvalid' : "O seu nome de utilizador apenas pode conter letras, números, pontuação e espaços.",
'errPasswordEmpty' : "Introduza a sua palavra-passe.",
'errPasswordTooLong' : "A sua palavra-passe tem de ter menos de 64 caracteres.",
'errPasswordInvalid' : "O seu nome de utilizador apenas pode conter letras, números, pontuação e espaços.",
'1398' : "OK",
'1399' : "Cancelar",
'374' : "Luz acesa",
'375' : "Luz apagada",
'47' : "Mais informações",
'48' : "Limpar alterações",
'49' : "Guardar",
'96' : "Ativar",
'119' : "Desativar",
'1298' : "Fechar",
'113' : "<< Adicionar",
'114' : "Apagar",
'128' : "Atualizar",
'318' : "Desativado",
'317' : "Ativado",
'2006' : "Sim",
'2007' : "Não",
'3300' : "NOVO",
'50' : "Atualizar de DNS Dinâmico",
'98' : "O sistema de nome de domínio dinâmico (DDNS) permite-lhe aceder à sua rede doméstica através de uma configuração de conta através de um fornecedor DDNS. Configure a sua conta em Dyn.com <a href='http://www.dyn.com' target='_blank'>www.dyn.com</a> e ligue a função DDNS no seu router. É necessário criar uma conta antes de utilizar este serviço.",
'100' : "Nome de utilizador",
'101' : "Password (Palavra-passe)",
'102' : "Nome de domínio",
'742' : "Introduza o nome de utilizador",
'757' : "Introduza a sua palavra-passe!",
'822' : "é inválida; efetue as devidas correções!",
'1307' : "DynDNS",
'1308' : "Serviço DDNS",
'1309' : "Estado DDNS",
'1310' : "Página web",
'1315' : "Atualização automática de DDNS",
'1316' : "atualizar todos os",
'1317' : "dias",
'1369' : "Registado",
'1380' : "Configuração errada",
'1381' : "Ligar",
'1382' : "A ligação falhou",
'1383' : "O início de sessão falhou",
'1384' : "O registo falhou",
'1385' : "Não registado",
'1751' : "",
'702' : "O serviços de nome de domínio (DNS) traduz nomes de serviço em endereços IP para localizar serviços de computador e dispositivos em todo o mundo. Se o seu fornecedor de serviço de internet (ISP) lhe tiver dado um endereço DNS para utilizar, insira-o aqui.",
'703' : "Automaticamente a partir do ISP",
'704' : "Endereço DNS",
'705' : "Endereço DNS secundário",
'706' : "DNS = Domain Name Server (Servidor de nomes de domínio). Um servidor localizado na Internet que transforma as URLs (Uniform Resource Locator), como www.belkin.com, em endereços IP.",
'707' : "É necessário introduzir as definições DNS que lhe foram fornecidas pelo seu ISP, se não estiver a utilizar a função de DNS automático.",
'780' : "Especificar endereço IP",
'823' : "Para fazer alterações de DNS; primeiro visite {Website Filter} e selecione \"Sem filtros\".",
'55' : "Info. firmware",
'56' : "Não existe qualquer atualização de firmware nova para este router!",
'57' : "Impossível estabelecer ligação ao servidor de informação de firmware; verifique a ligação WAN.",
'58' : "Firmware atual:",
'59' : "Download do firmware:",
'64' : "O router pode ser configurado para restringir o acesso à Internet, ao e-mail ou a outros serviços de rede em dias ou alturas específicas.",
'65' : "IP",
'66' : "Porta",
'67' : "Tipo",
'68' : "Hora de bloqueio",
'69' : "Dias",
'70' : "Hora",
'71' : "Ativar",
'72' : "AMBOS",
'73' : "Sempre",
'74' : "Bloquear",
'75' : "DOM",
'76' : "SEG",
'77' : "TER",
'78' : "QUA",
'79' : "QUI",
'80' : "SEX",
'81' : "SÁB",
'82' : ":00 P.M.",
'83' : ":00 A.M.",
'84' : "Não introduziu o endereço IP do cliente, ou alguns dos números introduzidos do endereço IP são inválidos. O número na caixa de entrada do IP deve situar-se entre 1 e 254.",
'85' : "Os números de portas introduzidos são inválidos.",
'86' : "O último do intervalo de portas tem de ser maior do que o anterior.",
'87' : "O último da sequência de IPs tem de ser maior do que o anterior.",
'88' : "O número na caixa de entrada da porta deve situar-se entre 1 e 65535.",
'1311' : "Não existem aplicações selecionadas",
'1312' : "Entradas duplicadas detetadas. A regra já existe.",
'1355' : "O endereço IP da LAN do router deve ser excluído do intervalo IP.",
'90' : "Isto permite-lhe especificar um dispositivo na sua rede a ser colocado fora da firewall do router, enquanto outros dispositivos continuam atrás da firewall.",
'91' : "No modo DMZ o computador não se encontra protegido contra ataques de hackers.",
'92' : "Para colocar um computador na DMZ, introduza os últimos dígitos do seu endereço IP no campo abaixo e selecione \"Ativar\". Clique em \"Guardar\" para a alteração ter efeito.",
'93' : "Endereço IP do sistema anfitrião DMZ virtual",
'97' : "IP estático",
'95' : "IP privado",
'103' : "Introduza o endereço IP antes de ativar a DMZ.",
'1232' : "O endereço IP do anfitrião DMZ é inválido!",
'1253' : "O IP está fora do intervalo [1-254]!",
'105' : "Esta função permite-lhe configurar uma lista de clientes autorizados. Quando ativar esta função, terá que introduzir o endereço MAC de cada cliente da sua rede para lhes autorizar o acesso à rede.",
'106' : "Ativar filtragem de endereços MAC",
'107' : "Lista da filtragem de endereços MAC",
'108' : "Bloquear",
'110' : "Endereço MAC",
'112' : "Este MAC já foi adicionado!",
'669' : "Endereço MAC inválido; o endereço é nulo.",
'902' : "Endereço MAC inválido",
'903' : "Efetue primeiro as devidas correções!",
'904' : "O endereço MAC deve possuir o formato xx:xx:xx:xx:xx:xx, sendo x um valor entre 0-9 e a-f!",
'1062' : "Nota: Não poderá eliminar o endereço MAC do computador que utiliza para aceder às funções administrativas do router (o computador que está a usar presentemente).",
'1602' : "Definido pelo utilizador 1",
'117' : "O seu router está equipado com uma firewall para proteger a sua rede de uma grande variedade dos ataques de hackers mais comuns, nos quais se incluem o Ping of Death (PoD) e o Denial of Service (DoS). Se necessário, pode desativar a função firewall. Se desativar a proteção firewall, a sua rede não fica totalmente vulnerável a ataques de hackers, mas recomendamos que a tenha ativada sempre que possível.",
'118' : "Ativar/Desativar Firewall",
'121' : "<b>FUNÇÃO AVANÇADA! </b> O seu router pode ser configurado para não responder a um ICMP Ping (ping na porta WAN). Tal proporciona um aumento do nível de segurança.",
'1076' : "Bloquear ICMP Ping",
'1827' : "Imprimir definições de acesso de convidado",
'2702' : "O Acesso de convidado permite aceder à Internet através da porta WAN mas limita o acesso dos convidados à rede interna, à LAN e à WLAN. Esta função é suportada apenas em 2.4GHz para simplificar a sua utilização.",
'279' : "Porta de entrada",
'1828' : "Estilo café (Convidados iniciam sessão através de uma página web)",
'1619' : "WPA/WPA2 PSK",
'1829' : "WEP",
'1830' : "Abrir",
'1831' : "máximo 32 caracteres, sem espaço",
'1617' : "Palavra-passe (PSK)",
'842' : "Autenticação",
'845' : "Técnica de encriptação",
'854' : "Chave pré-partilhada (PSK)",
'857' : "PSK obscuro",
'855' : "WPA-PSK (sem servidor)",
'1335' : "Nome da rede (SSID)",
'1825' : "8 a 63 caracteres",
'1826' : "10 dígitos hexadecimais",
'1834' : "Nome da rede",
'409' : "Password (Palavra-passe)",
'1835' : "Cada convidado que estabeleça ligação à sua rede sem fios necessita desta palavra-passe.",
'1715' : "Tipo de segurança",
'1836' : "Para estabelecer ligação à rede sem fios:",
'1837' : "Windows",
'1838' : "1. No tabuleiro do sistema do Windows, clique sobre o ícone da rede sem fios com o botão direito do rato e selecione Ver redes sem fios disponíveis no menu pop-up.",
'1839' : "2. Faça duplo clique na ",
'1840' : " rede.",
'1841' : "3. Aparece uma janela a solicitar a chave de rede. Introduza a palavra-passe em cima e clique sobre OK.",
'1842' : "MAC OS X",
'1843' : "1. Clique sobre o ícone da rede sem fios na barra de menu (em cima à direita) e selecione a ",
'1844' : " rede.",
'1845' : "2. Aparece uma janela a solicitar a chave de rede. Introduza a palavra-passe em cima e clique sobre OK.",
'1832' : "Estilo café",
'1833' : "Modo aberto",
'1201' : "Não é possível definir o SSID como NULO!",
'1812' : "O comprimento da palavra-passe é inválido. O comprimento da palavra-passe é de 63 caracteres no máximo e 8 no mínimo.",
'1824' : "A chave WEP tem de ter 10 dígitos hexadecimais!",
'414' : "Erro de login !!",
'1811' : "O Acesso de convidado é uma função que permite que os utilizadores acedam à Internet mas limita-lhes o acesso à rede doméstica. Solicite junto do administrador de rede a palavra-passe de Acesso de convidado e introduza-a abaixo.",
'1813' : "Êxito! Pode agora abrir uma nova janela do browser e navegar na Internet.",
'909' : "O \"Endereço IP\" é o endereço IP interno do router. Para aceder à interface de configuração avançada, escreva este endereço IP na barra de endereço do seu navegador. Se necessário, pode-se alterar este endereço. Para alterar o endereço IP, introduza o novo endereço IP e faça clique sobre \"Guardar\". O endereço IP que escolher deverá corresponder a um IP não-roteável. Exemplos de IPs não-roteáveis são: 192.168.2.1, 10.0.0.1, 172.16.0.1",
'917' : "Não há necessidade de alterar a máscara de sub-rede. É possível alterar a máscara de sub-rede sempre que necessário. Faça alterações à máscara de sub-rede apenas se tiver um motivo específico para o fazer.",
'929' : "A função do servidor DHCP simplifica muito a configuração de uma rede ao atribuir endereços IP a cada computador na rede. O servidor DHCP pode ser desligado caso seja necessário. Para desligar o servidor DHCP, será necessário definir manualmente um endereço IP estático em cada computador na sua rede. O grupo de IPs é o conjunto de endereços IP guardados para atribuição dinâmica aos computadores da sua rede. A predefinição é 2-200 (199 computadores) se quiser alterar este número, pode fazê-lo introduzindo um novo endereço IP inicial e final, e clicando em \"Guardar\".",
'935' : "Pode definir um nome do domínio local (nome de rede) para a sua rede. Não precisa de alterar estas definições a não ser que se imponham necessidades especiais nesse sentido. Pode dar o nome que desejar à rede, p. ex. \"A MINHA REDE\".",
'962' : "Para definir que o router utilize PPPoE, escreva o nome de utilizador e palavra-passe dados pelo seu ISP nos espaços fornecidos. Se não tiver um nome de serviço ou se não o souber, deixe o campo \"Nome de serviço\" em branco. Depois de ter inserido a sua informação, clique em “Guardar”. Depois de guardar, o indicador do estado exibe a mensagem \"Online\" caso o router tenha sido configurado corretamente.",
'967' : "Alguns ISP utilizam o protocolo PPTP para ligar os assinantes ao escritório central. Isto requer que insira um grande conjunto de definições adicionais que o seu ISP deve ter fornecido. Assim que tiver guardado as alterações, o indicador de estado de internet irá apresentar-se a verde, caso tenha sido bem sucedido.",
'971' : "Selecione o tipo de ligação Telstra Bigpond clicando em \"Guardar\".",
'982' : "Desligar depois de X…",
'983' : "Isto desliga o seu router do seu ISP após um período de inatividade. Utilize esta opção para poupar dinheiro, caso pague o seu serviço de internet ao minuto.",
'htDDNS' : "O que é DDNS?",
'htDNS' : "O que é DNS?",
'htDMZ' : "O que é DMZ?",
'htLAN' : "O que é o controlo de definições da LAN",
'htWANMain' : "O que são definições WAN?",
'htWANMAC' : "O que é o endereço MAC?",
'htWAN_PPPOE' : "Definições PPPoE",
'htWAN_PPTP' : "Definições PPTP",
'htIPv6' : "O que é IPv6?",
'htWifiID' : "O que é o nome de rede e definições de canal?",
'htWifiIDContent' : "O nome de rede chama-se SSID (Service Set ID).  Todos os clientes na sua rede devem saber o SSID para se ligarem à rede do router.",
'htWifiSec' : "O que é a segurança Wi-Fi?",
'htWifiSecContent' : "Todos os routers da Belkin são enviados com segurança Wi-Fi ativada.  A segurança Wi-Fi fornece uma camada de proteção contra acesso não autorizado à sua rede.  Quando a segurança está ligada, o utilizador irá precisar de uma palavra-passe para aceder à sua rede.",
'htWifiWPS' : "O que é a Wi-Fi Protected Setup?",
'htWifiWPSContent' : "Este é um método opcional pensado para facilitar a configuração de redes Wi-Fi com segurança ativada, em sua casa ou pequenos escritórios. Os dispositivos sem Wi-Fi protected setup (WPS) ainda podem ser adicionados à sua rede, escolhendo o nome de rede e inserindo a palavra-passe de rede.",
'htWifiGuest' : "Como é utilizado o acesso de convidado?",
'htWifiGuestContent' : "Quando ligado, o acesso de convidado irá criar uma rede Wi-Fi separada que ainda pode aceder à internet, mas não a outros dispositivos na sua rede.",
'htAP' : "Posso utilizar o meu router como ponto de acesso?",
'htAPContent' : "Os routers da Belkin podem ser configurados para agir diretamente como ponto de acesso, ignorando todas as funções de routing e firewall.  Configurar o seu router como ponto de acesso é mais comummente utilizado para adicionar capacidade sem fios a uma rede com fios existente.",
'htQos' : "O que é o Belkin Intellistream?",
'htDLNA' : "Belkin Media Server powered by Twonky",
'htPortForward' : "O que é encaminhamento de porta?",
'htPortForwardContent' : "O encaminhamento de porta permite aos computadores remotos ligarem-se a um programa específico ou serviço na sua rede local. Por exemplo, iria utilizar o encaminhamento de porta para executar um servidor web (porta 80) na sua rede.  A maioria dos programas modernos não requer a utilização de encaminhamento de porta,visto conseguirem configurar automaticamente quaisquer portas de que precisem.",
'htWanPing' : "O que faz um bloqueio de WAN ping?",
'htWanPingContent' : "Fornece um nível mais elevado de segurança para evitar que os utilizadores de internet externos descubram o seu endereço IP. Fá-lo ao não responder a pings que são criados fora da sua rede.",
'htRestart' : "Porquê reiniciar o router?",
'htRestoreFC' : "O que faz para restaurar as predefinições de fábrica?",
'htSaveSettings' : "Porque devo guardar/fazer cópias de segurança das minhas definições?",
'htRestoreSettings' : "O que significa restaurar as minhas definições anteriores?",
'htSystem' : "O que são definições do sistema?",
'htSystemContent' : "A partir desta página, pode definir uma variedade de definições básicas do router, incluindo fuso horário e palavra-passe de administrador.",
'htSelfHeal' : "O que é auto-regeneração?",
'hLANSettings' : "Esta página ajuda-o a configurar novas ligações, permite-lhe ligar/desligar DHCP e permite-lhe configurar o endereço IP do router na sua rede local.",
'htDHCPClientList' : "O que é a lista de cliente DHCP?",
'htDHCPClientListContent' : "Esta página mostra-lhe o endereço IP, o nome do anfitrião e o endereço MAC de cada dispositivo que está ligado à sua rede. Se o computador não tiver um nome de anfitrião especificado, então o campo estará em branco. Clique em \"Atualizar\" para atualizar a lista.",
'hWebsiteFilters' : "Tal funciona como uma camada de proteção contra websites não seguros/inapropriados. Os filtros web analisam sites, verificando o nome de website em relação a uma lista de sites aprovados.",
'hWANSettings' : "Estas definições de rede referem-se à ligação que tem com o seu fornecedor de serviços de Internet (ISP).   Selecione o tipo de ligação fornecida pelo seu ISP a partir da lista. ",
'htChannel' : "Semelhante à forma como um rádio utiliza estações diferentes, o seu router pode transmitir em vários canais diferentes para comunicar com os dispositivos na sua rede. Utilizar \"Auto\" é normalmente a melhor opção.",
'3430' : "IPv6 (Internet Protocol version 6) é uma versão de protocolo de internet (IP) destinada a ser a sucessora do IPv4, que direciona a maioria do tráfego de internet. Alguns fornecedores de serviço de internet (ISP) estão quase sem endereços IP. O IPv6 permite que mais dispositivos comuniquem na internet, ao utilizar números maiores para criar endereços IP.  O seu ISP irá dizer-lhe se precisa de utilizar IPv6.",
'3431' : "Tipo de ligação",
'3432' : "Auto-Config/DHCPv6 (predefinição)",
'3433' : "Os endereços em baixo são fornecidos pelo seu ISP. O DHCPv6 fornece funcionalidades acrescidas para melhorar a ligação.",
'3434' : "WAN",
'3435' : "Endereço WAN",
'3436' : "Gateway",
'3437' : "LAN",
'3438' : "Utilize esta secção para configurar as definições de rede internas do seu router. Se alterar o endereço IPv6 da LAN aqui, poderá ter de ajustar as definições de rede do seu computador para voltar a aceder à rede.",
'3439' : "Prefixo LAN",
'3440' : "ID da interface",
'3441' : "Link-Local",
'3442' : "DNS",
'3443' : "As suas definições IPv6 DNS predefinidas são do seu fornecedor de serviço de internet, se disponíveis em anúncios de router WAN ou mensagens DHCPv6.",
'3444' : "Primário",
'3445' : "Secundário",
'3446' : "PPPoE sobre IPv6",
'3447' : "O protocolo Point-to-Point Protocol over Ethernet (PPPoE) é primariamente utilizado por serviços DSL para ligar um modem DSL à internet.",
'3448' : "Início de sessão",
'3450' : "ocultar palavra-passe",
'3451' : "Nome de utilizador",
'3452' : "Password (Palavra-passe)",
'3453' : "Service Name (Nome do serviço)",
'3454' : "Túnel 6to4",
'3455' : "Permite que pacotes IPv6 sejam transmitidos sobre uma rede IPv4 sem precisar de configurar túneis explícitos. Este tipo de ligação é apropriada se o seu fornecedor de serviço de internet não suportar IPv6.",
'3456' : "Router relay 6to4 remoto",
'3457' : "Passagem",
'3458' : "Os dispositivos ligados ao seu Router podem comunicar uns com os outros usando pacotes IPv6 nativos. Os pacotes IPv6 na LAN serão automaticamente enviados para todas as interfaces LAN (Portas Ethernet e ligações sem fios 2.4GHz e 5 GHz).",
'3459' : "Quando passagem está ativada, os pacotes IPv6 também serão copiados para a interface WAN. (Isto cria uma ligação direta, não segura, à internet).",
'3460' : "Contacte o seu IPS para obter informação acerca do suporte para IPv6.",
'3461' : "IPv6 estático",
'3462' : "O endereçamento IPv6 estático não é normalmente utilizado, uma vez que pode ser difícil de administrar. O IPv6 estático não deve ser utilizado com dispositivos que se ligam a múltiplas redes, como portáteis ou dispositivos móveis.",
'3463' : "Apenas passagem local",
'3464' : "A passagem IPv6 WAN está desativada. Todos os dispositivos locais na sua LAN e WiFi ainda conseguem comunicar uns com os outros diretamente, mas o router não irá enviar nenhum pacote IPv6 para ou a partir da internet, nem irá responder diretamente a qualquer pacote IPv6.",
'3465' : "O seu fornecedor de serviço de Internet não está a fornecer ligação IPv6. Contacte-os para obter mais informação sobre suporte de IPv6 ou para estabelecer ligação.",
'3466' : "Apenas passagem local está definido automaticamente para que os seus dispositivos enviem pacotes IPv6 entre eles. A outra opção é utilizar \"Túnel 6to4\" para aceder à internet através de uma ligação IPv4.",
'3467' : "Cada caixa deve conter quatro dígitos hexadecimais (0-9 e a-f)",
'3468' : "Introduza um endereço não multi-difusão. Normalmente, os endereços multi-difusão começam com ff.",
'3469' : "O prefixo deve encontrar-se entre 1-127. O prefixo é normalmente 64, 56 ou 48.",
'3470' : "Não existe ligação IPv4.",
'3471' : "Estas definições DNS estão substituídas pelos seus Controlos parentais.",
'3472' : "Filtro de website",
'3473' : "Selecione PPPoE em Internet WAN > Definições de ligação, antes de selecionar PPPoE sobre IPv6.",
'3474' : "Perdeu a ligação à Internet. Verifique o seu tipo de ligação WAN ou contacte o seu fornecedor de serviço.",
'3475' : "DNS predefinido fornecido pelo seu fornecedor de serviço de internet.",
'gtTryManu' : "Se souber o seu tipo de ligação, pode ",
'gtSetManual' : "configurá-la manualmente ",
'2100' : "Acesso negado. Introduza a palavra-passe do router para permitir, temporariamente, o acesso à página ou aos serviços bloqueados.",
'2101' : "Página de destino",
'2102' : "IR",
'354' : "Esta página mostra-lhe o endereço IP, o nome do anfitrião e o endereço MAC de cada um dos computadores ligados à sua rede. Se o computador não tiver um nome de anfitrião especificado, o respetivo campo fica em branco. Para atualizar a lista, premir o botão \"Atualizar\".",
'355' : "Endereço IP",
'356' : "Nome do anfitrião",
'357' : "Endereço MAC",
'370' : "Esta página ajuda-o a configurar novas ligações, permite-lhe ligar/desligar DHCP e permite-lhe configurar o endereço IP do router na sua rede local.",
'371' : "Endereço IP",
'372' : "Máscara de sub-rede",
'373' : "Servidor DHCP",
'378' : "A função do servidor DHCP simplifica muito a configuração de uma rede ao atribuir endereços IP a cada computador na rede. Não é necessário efetuar quaisquer alterações aqui.",
'379' : "Endereço inicial do Pool de IP",
'380' : "Endereço final do Pool de IP",
'381' : "Tempo de atribuição",
'382' : "Para sempre",
'383' : "Meia hora",
'384' : "1 hora",
'385' : "2 horas",
'386' : "Meio dia",
'387' : "1 dia",
'388' : "2 dias",
'389' : "1 semana",
'390' : "2 semanas",
'391' : "O período de tempo durante o qual o servidor DHCP mantém a atribuição do endereço IP para cada computador.",
'392' : "Nome do domínio local",
'393' : "Opcional",
'394' : "Uma funcionalidade que lhe permite atribuir um nome à sua rede.",
'397' : "O pool de IP tem de estar na mesma sub-rede que o IP do gateway.",
'398' : "O endereço IP final deve ser maior do que ao do endereço IP inicial.",
'399' : "O IP da LAN não pode estar dentro do pool de endereços DHCP.",
'400' : "O endereço IP que escolher deverá corresponder a um IP não-roteável.",
'401' : "Endereço IP da LAN inválido; o primeiro número não pode ser 127 nem 0",
'404' : "Altere manualmente a caixa de entrada do endereço na barra de estado do seu browser para o endereço LAN predefinido.",
'406' : "Tem a certeza de que deseja alterar o endereço IP da LAN?",
'416' : "192.168.x.x (sendo x qualquer valor entre 0 e 255 e x qualquer valor entre 1 e 254.))",
'417' : "10.y.y.x (sendo y qualquer valor entre 0 e 255, e x qualquer valor entre 1 e 254.)",
'418' : "172.z.y.x (sendo z qualquer valor entre 16 e 31, y qualquer valor entre 0 e 255, e x qualquer valor entre 1 e 254.)",
'713' : "Nome do domínio local inválido:",
'1228' : "O endereço inicial do Pool de IP é inválido!",
'1229' : "O endereço final do Pool de IP é inválido!",
'1240' : "O endereço IP da LAN é inválido!",
'3' : "Início de sessão",
'408' : "Antes de poder efetuar quaisquer alterações, terá de iniciar sessão com uma palavra-passe. Se ainda não tiver definido uma palavra-passe personalizada, deixe este campo em branco e faça clique sobre \"Submeter\".",
'410' : "Predefinição = deixar em branco",
'412' : "Submeter",
'1371' : "Palavra-passe incorreta",
'1372' : "Confirme a sua palavra-passe e volte a tentar.",
'124' : "O router mantém um registo de todas as atividades dentro deste, tais como os computadores que fazem login e logout e quaisquer tentativas de aceder ao router a partir da Internet.",
'125' : "Ficheiro de registo",
'126' : "Guardar",
'127' : "Transparente",
'1302' : "Registo do sistema",
'1303' : "Registo da Firewall",
'8' : "Definições LAN",
'9' : "Definições de rede local",
'10' : "Dispositivos ligados",
'2500' : "Encaminhamento estático",
'11' : "Internet WAN",
'335' : "Tipo de ligação",
'690' : "Dinâmico",
'692' : "Estático",
'694' : "PPPoE",
'696' : "PPTP",
'698' : "Telstra BigPond/OptusNet Cable",
'42' : "IPV6",
'43' : "Ligação IPv6",
'13' : "DNS",
'14' : "Endereço MAC",
'16' : "WiFi",
'17' : "Nome da rede",
'18' : "Segurança",
'803' : "WEP de 128 bits",
'804' : "WEP de 64 bits",
'1296' : "WPA/WPA2-Personal (PSK)",
'1297' : "WPA/WPA2-Enterprise (RADIUS)",
'805' : "WPA (com servidor Radius)",
'1319' : "Wi-Fi Protected Setup",
'777' : "Utilizar como ponto de acesso",
'833' : "Controlo de endereços MAC",
'1613' : "Acesso de convidado",
'1850' : "Controlos parentais",
'1851' : "Filtro de website",
'1710' : "Controlo de acesso",
'20' : "Multimédia",
'7151' : "Gráfico de tráfego",
'7000' : "Servidor de multimédia",
'1780' : "Torrent Mate",
'1790' : "Software opcional",
'23' : "Firewall",
'24' : "Encaminhamento de porta",
'25' : "Filtros IP do cliente",
'26' : "Filtragem de endereço MAC",
'27' : "DMZ",
'41' : "DDNS",
'28' : "Bloqueio de Ping WAN",
'29' : "Registo de segurança",
'30' : "Utilitários",
'32' : "Reiniciar router",
'34' : "Restaurar predefinições de fábrica",
'35' : "Guardar/Definições de cópia de segurança",
'36' : "Restaurar definições anteriores",
'37' : "Atualização de firmware",
'38' : "Definições do sistema",
'39' : "Auto-regeneração",
'1900' : "Subscrever",
'132' : "O intervalo de portas de entrada não está correto.",
'133' : "O intervalo de portas privadas não está correto.",
'134' : "Esta função permitir-lhe-á reencaminhar as chamadas externas (Internet) para serviços, como um servidor web (porta 80), um servidor FTP (porta 21) ou outras aplicações, para a sua rede interna através do router.",
'276' : "Limpar entrada",
'277' : "Adicionar",
'278' : "Descrição",
'280' : "Tipo",
'281' : "Endereço IP privado",
'282' : "Porta privada",
'376' : "tudo",
'411' : "Transparente",
'648' : "Carácter inválido",
'672' : "Número inválido! Este deve situar-se entre 1 e 65535",
'905' : "Todas as entradas estão completas.\nRemova algumas entradas e volte a tentar.",
'906' : "Deseja apagar a entrada",
'907' : "Deseja apagar todas as entradas?",
'1241' : "O endereço IP da WAN é inválido!",
'1250' : "A porta é inválida!",
'1362' : "A descrição está vazia",
'1601' : "Automóvel",
'2055' : "Sobreposição do intervalo de portas de entrada!",
'2056' : "Sobreposição do intervalo de portas privadas",
'3310' : "Intellistream",
'3311' : "Otimize a sua ligação à Internet.",
'3312' : "Servidor de multimédia",
'3313' : "Partilhe multimédia entre dispositivos na rede.",
'3314' : "Controlos parentais",
'3315' : "Filtros de segurança DNS para segurança na internet",
'3316' : "Ligação IPv6",
'3317' : "A sua rede é agora compatível com IPv6~",
'1852' : "Tal funciona como uma camada de proteção contra websites não seguros/inapropriados. Os filtros web analisam sites, verificando o nome de website em relação a uma lista de sites aprovados.",
'1854' : "Opções de filtro",
'1856' : "Sem filtro",
'1858' : "Bloqueia sites maliciosos",
'1859' : "Bloqueia malware, phishing e sites de scam.",
'1860' : "Bloqueia sites maliciosos e para adultos",
'1861' : "Bloqueia malware, phishing, sites de scam e sites que contenham conteúdo sexual explícito.",
'1862' : "Bloqueia sites maliciosos, para adultos e outros não amigáveis para a família",
'1863' : "Bloqueia malware, phishing e sites de scam e também sites que contenham material sexual explícito, conteúdo para adultos, aborto, álcool, tabaco, crime, cultos, drogas, apostas, ódio, suicídio ou violência.",
'1864' : "Para alterar o seu endereço DNS, continue para Internet WAN > {DNS}",
'7152' : "Os gráficos em baixo apresentam tanto o tráfego de saída como de entrada da WAN priorizado em diferentes categorias. Os gráficos apresentam os últimos 10 minutos (atualizam automaticamente a cada 5 segundos).",
'7154' : "Legenda de tráfego",
'7155' : "Tráfego de entrada",
'7156' : "Tráfego de saída",
'7157' : "Para ativar esta função, ative o Intellistream",
'7158' : "aqui",
'7159' : ".",
'7160' : "Ligação e controlo de rede",
'7161' : "Voz, vídeo-chat e jogos",
'7162' : "Web e Web Vídeo",
'7163' : "Email e VPN",
'7164' : "Downloads, Torrents e outros",
'7170' : "bytes/seg.",
'7174' : "Hora do dia/Horas:Minutos",
'326' : "Rede local",
'327' : "LAN/WLAN MAC",
'332' : "Servidor DHCP",
'333' : "Definições de Internet",
'334' : "Endereço MAC WAN",
'337' : "IP WAN",
'338' : "Gateway predefinido",
'339' : "Endereço DNS",
'gtGuestName' : "SSID de convidado",
'gtGuestKey' : "Chave do convidado",
'347' : "Para poder alterar quaisquer definições, é necessário fazer primeiro login.",
'2022' : "Só o modem",
'2031' : "Liga",
'2032' : "Desligar",
'2033' : "Margem de ruído",
'2034' : "A jusante",
'2035' : "A montante",
'2036' : "Atenuação (dB)",
'2037' : "Potência de saída (dBm)",
'2038' : "Velocidade de transmissão de dados (Kbps)",
'tDashboard' : "Bem-vindo ao painel do seu router da Belkin!",
'rtFeature' : "Características",
'rtLink' : "Ligações do router",
'p1310t001' : "Detalhes de ligação",
'p1310t002' : "Voltar a testar ligação",
'p1310t003' : "Última verificação",
'p1310t004' : "Velocidade de  Download",
'p1310t005' : "Velocidade de upload",
'p1000t001' : "Dispositivos Ligados",
'p1000t002' : "Ver tudo",
'2501' : "Introduza os seguintes parâmetros de configuração",
'2502' : "Endereço de rede",
'2503' : "Máscara de sub-rede",
'2504' : "Gateway",
'396' : "O número de máscara de sub-rede introduzido é inválido.",
'1231' : "O gateway é inválido!",
'1361' : "Endereço IP inválido, o primeiro número deve situar-se entre 1 e 254.",
'1800' : "O endereço IP e a máscara de sub-rede não coincidem.",
'Support1t011' : "Ler tudo sobre isto.",
'Support2t011' : "Ler tudo sobre isto.",
'Support2t012' : "Insira o seguinte URL num dispositivo ligado à internet e aprenda como corrigir você mesmo o problema: <STRONG>www.belkin.com/support/asdlkj</STRONG>",
'Support3t011' : "Ler tudo sobre isto.",
'Support3t012' : "Insira o seguinte URL num dispositivo ligado à internet e aprenda como corrigir você mesmo o problema: <STRONG>www.belkin.com/support/asdlkj</STRONG>",
'Support6t036' : "Ler tudo sobre isto.",
'425' : "Isto irá fazer com que o router volte às definições originais. Recomendamos que<a href=\"ut_save.html\">guarde/faça cópias de segurança das suas definições</a> antes de restaurar as definições originais. Guardar a configuração do router irá permitir que o restaure se as suas definições se perderem ou forem alteradas.",
'426' : "AVISO: Perderá todas as suas definições!\nTem a certeza que deseja fazer isto?",
'427' : "O restauro das predefinições pode demorar até $s segundos. Não desligue a alimentação do router durante este processo.",
'428' : "Não serão restauradas as predefinições de fábrica. Não se perderão quaisquer definições!",
'429' : "Restaurar predefinições",
'301' : "Isto reinicia o seu router numa base semanal, para ter uma rede mais livre de problemas.",
'302' : "Inicializar automaticamente o meu router",
'303' : "Definir dias",
'304' : "Definir hora",
'527' : "Isto permite-lhe estabelecer as definições do seu router segundo qualquer configuração que já tenha guardado.",
'528' : "Restaurar",
'529' : "Introduza o nome do ficheiro que contém as definições de cópia de segurança.",
'530' : "Deseja continuar e restaurar as definições?",
'531' : "Depois de restauradas as definições, o dispositivo poderá não responder aos comandos durante um minuto.\n\n Isto é normal. Não desligue o dispositivo durante este período.",
'451' : "Guardar a configuração atual do router irá permitir que o restaure se as suas definições se perderem ou forem alteradas. Recomendamos que guarde as suas definições antes de fazer atualizações de firmware.",
'539' : "Guardar",
'130' : "Não introduziu todos os endereços IP ou alguns dos números introduzidos são inválidos. O número na caixa de entrada do IP deve situar-se entre 1 e 254.",
'541' : "Palavra-passe do administrador:",
'542' : "O router é fornecido SEM palavra-passe introduzida. Se quiser adicionar uma palavra-passe para aumentar a segurança, pode definir a palavra-passe neste aqui.",
'543' : "Introduza a palavra-passe atual",
'544' : "Introduza a nova palavra-passe",
'545' : "Confirme a nova palavra-passe",
'546' : "Tempo limite para login",
'547' : "(1-99 minutos)",
'548' : "Hora e fuso horário:",
'549' : "Janeiro",
'550' : "Defina o seu fuso horário. Se estiver numa zona em que ocorram alterações na hora de Verão, marque esta caixa.",
'551' : "Fuso horário",
'606' : "Horários de Verão",
'607' : "Ajustar automaticamente para a hora de Verão",
'608' : "Gestão remota:",
'609' : "FUNÇÃO AVANÇADA!",
'610' : "A gestão remota permite-lhe fazer alterações às definições do seu router a partir de qualquer localização na Internet. Antes de ativar esta função,",
'611' : "CERTIFIQUE-SE DE QUE DEFINIU A PALAVRA-PASSE DO ADMINISTRADOR.",
'642' : "Ligar a gestão remota aumenta o seu risco de segurança. Ligue-a por curtos períodos apenas quando necessário, desligue-a quando não a está a utilizar e defina uma palavra-passe.",
'612' : "Qualquer endereço IP pode gerir remotamente o router.",
'613' : "Apenas o endereço IP pode gerir remotamente &nbsp;&nbsp;&nbsp;o router",
'614' : "Ativar / Desativar gestão remota",
'615' : "A porta atribuída foi utilizado no Servidor virtual.",
'616' : "O IP atribuído está em conflito com o endereço IP WAN atual.",
'617' : "Ativar UPNP:",
'618' : "Permite-lhe ligar ou desligar a função UPNP do router. Se utilizar aplicações que suportam UPnP, ativar esta função permitir-lhe-á que estas aplicações configurem automaticamente o router.",
'619' : "Ativar/Desativar UPNP",
'620' : "Ativar atualização automática de firmware:",
'621' : "Permite-lhe verificar automaticamente se estão disponíveis atualizações de firmware para o seu router.",
'622' : "Ativar atualização automática de firmware/Desativar &nbsp;&nbsp;&nbsp;",
'623' : "A palavra-passe atual é inválida",
'624' : "As novas palavras-passe que inseriu não coincidem. Volte a tentar.",
'626' : "O comprimento da palavra-passe é inválido. O comprimento da palavra-passe é de 12 caracteres no máximo e 3 no mínimo",
'628' : "Recomendamos vivamente que defina a sua palavra-passe de administrador.",
'629' : "Servidor NTP primário",
'630' : "Servidor NTP secundário",
'640' : "Porta para acesso remoto",
'738' : "O valor para tempo de inatividade introduzido é inválido. Este deverá ser um número inteiro entre 1 e 99.",
'796' : "A ativação do modo de turbo permite que o router ou o ponto de acesso usem o mecanismo de \"frame bursting\" para obter um rendimento máximo do router ou do ponto de acesso para clientes 802.11g. O modo de turbo funciona com clientes 802.11g que suportam este modo. Os clientes 802.11g da Belkin que usam a última versão de controladores suportam o modo de turbo. Os clientes que não suportarem o modo de turbo funcionarão normalmente mesmo que o modo de turbo esteja ativado.",
'1282' : "Fevereiro",
'1283' : "Março",
'1284' : "Abril",
'1285' : "Maio",
'1286' : "Junho",
'1287' : "Julho",
'1288' : "Agosto",
'1289' : "Setembro",
'1290' : "Outubro",
'1291' : "Novembro",
'1292' : "Dezembro",
'1373' : "Austrália",
'1374' : "Nova Zelândia",
'1375' : "América do Norte",
'1376' : "Europa",
'1377' : "Ásia-Pacífico",
'2300' : "(GMT-12:00) Enewetak, Kwajalein",
'2301' : "(GMT-11:00) Ilhas Midway, Samoa",
'2302' : "(GMT-10:00) Havai",
'2303' : "(GMT-09:00) Alasca",
'2304' : "(GMT-08:00) Hora do Pacífico (E.U.A. e Canadá); Tijuana",
'2305' : "(GMT-07:00) Arizona",
'2306' : "(GMT-07:00) Hora das Regiões Montanhosas (E.U.A. e Canadá)",
'2307' : "(GMT-06:00) Hora Central (E.U.A. e Canadá)",
'2308' : "(GMT-06:00) Cidade do México",
'2309' : "(GMT-06:00) Tegucigalpa",
'2310' : "(GMT-06:00) Saskatchewan",
'2311' : "(GMT-05:00) Bogotá, Lima, Quito",
'2312' : "(GMT-05:00) Hora do Leste (E.U.A. e Canadá)",
'2313' : "(GMT-05:00) Indiana (Leste)",
'2314' : "(GMT-04:00) Hora do Atlântico (E.U.A. e Canadá)",
'2315' : "(GMT-04:00) Caracas, La Paz",
'2316' : "(GMT-04:00) Santiago",
'2317' : "(GMT-03:00) Terra Nova",
'2318' : "(GMT-03:00) Brasília",
'2319' : "(GMT-03:00) Buenos Aires, Georgetown",
'2320' : "(GMT-02:00) Atlântico Central",
'2321' : "(GMT-01:00) Açores, Ilha de Cabo Verde",
'2322' : "(GMT) Casablanca, Monróvia",
'2323' : "(GMT) Hora do meridiano de Greenwich: Lisboa, Londres, Edinburgh",
'2324' : "(GMT) Hora do meridiano de Greenwich: Dublin",
'2325' : "(GMT+01:00) Amesterdão, Berlim, Berna, Roma",
'2326' : "(GMT+01:00) Estocolmo, Viena, Belgrado",
'2327' : "(GMT+01:00) Bratislava, Budapeste, Ljubljana",
'2328' : "(GMT+01:00) Praga, Bruxelas, Copenhaga, Madrid",
'2329' : "(GMT+01:00) Paris, Sarajevo, Skopje",
'2330' : "(GMT+01:00) Varsóvia, Zagreb",
'2331' : "(GMT+02:00) Atenas, Instambul, Minsk, Vilnius, Sofia",
'2332' : "(GMT+02:00) Bucareste",
'2333' : "(GMT+02:00) Cairo",
'2334' : "(GMT+02:00) Harare, Pretória",
'2335' : "(GMT+02:00) Helsínquia, Riga, Tallinn",
'2336' : "(GMT+02:00) Israel",
'2337' : "(GMT+03:00) Bagdade, Kuwait, Nairobi, Riade",
'2338' : "(GMT+03:00) Moscovo, S. Petersburgo,Volgograd, Kazan",
'2339' : "(GMT+03:00) Teerão",
'2340' : "(GMT+04:00) Abu Dhabi, Muscat, Tbilissi",
'2341' : "(GMT+04:00) Cabul",
'2342' : "(GMT+05:00) Islamabade, Karachi, Ecaterinburgo",
'2343' : "(GMT+05:30) Deli",
'2344' : "(GMT+06:00) Almaty,Dhaka",
'2345' : "(GMT+07:00) Banguecoque, Jacarta, Hanói",
'2346' : "(GMT+08:00) Pequim, Chongquing, Urumqi",
'2347' : "(GMT+08:00) R.A:E. Hong Kong, Perth, Singapura, Taipé",
'2348' : "(GMT+09:00) Tóquio, Osaka, Sapporo",
'2349' : "(GMT+09:00) Seul",
'2350' : "(GMT+09:30) Adelaide, Darwin",
'2351' : "(GMT+10:00) Brisbane",
'2352' : "(GMT+10:00) Camberra, Melbourne, Sydney",
'2353' : "(GMT+10:00) Hobart",
'2354' : "(GMT+10:00) Guam, Port Moresby",
'2355' : "(GMT+11:00) Magadan, Ilhas Salomão, Nova Caledónia",
'2356' : "(GMT+12:00) Wellington, Auckland",
'2357' : "(GMT+12:00) Fiji",
'2358' : "(GMT+13:00) Nuku`alofa.",
'2370' : "Dom",
'2371' : "M",
'2372' : "Ter",
'2373' : "Quar",
'2374' : "Qui",
'2375' : "F",
'2376' : "Sáb",
'2401' : "Modo ECO",
'2402' : "Suavizar LED do painel frontal",
'2403' : "Desativar rádio de",
'2404' : "exceto",
'2405' : "Esta função permite-lhe suavizar a iluminação dos LEDs na parte frontal do router para poupar energia. Também pode desativar o rádio sem fios em horas predeterminadas.",
'2406' : "O tempo de início não pode ser posterior ao tempo de fim!",
'322' : "Versão do firmware",
'431' : "De tempos a tempos, a Belkin poderá lançar novas versões do sistema operativo do router. Estas atualizações contêm melhorias e correções para o router.",
'432' : "<b>NOTA:</b> Faça <a href=\"ut_save.html\">cópias de segurança das suas definições atuais</a> antes de atualizar para uma nova versão de firmware..",
'433' : "Clique aqui",
'434' : "para ir para a página de Guardar/Cópia de segurança das definições atuais.",
'435' : "Procurar nova versão de firmware",
'436' : "Verificar firmware",
'437' : "Atualizar Firmware",
'438' : "Update",
'439' : "Especifique a localização do ficheiro de atualização Digite o caminho e o nome do ficheiro ou faça clique sobre \"Procurar\" para procurar a localização do ficheiro.",
'440' : "Tem a certeza de que deseja continuar com a atualização?",
'441' : "No final da atualização, o router poderá não responder aos comandos durante um minuto, o que é perfeitamente normal. Não desligue nem reinicie o router durante este período.",
'1198' : "Atualização do firmware em curso.",
'534' : "Reiniciar router",
'535' : "Tem a certeza de que deseja reiniciar o router? A reinicialização do router não afeta as suas configurações",
'536' : "Espere até $s segundos até que o router reinicie. Não desligue o router antes que a reinicialização esteja concluída.",
'7001' : "Aprecie música, fotografias e vídeos pessoais convenientemente através de qualquer dispositivo DLNA ligado à sua rede. Powered by Twonky.",
'7002' : "Servidor DLNA",
'7003' : "Nome do servidor",
'7004' : "Unidades partilhadas:",
'7005' : "Pronto",
'7006' : "A indexar...",
'7007' : "A servir:",
'7008' : "vídeos",
'7009' : "músicas",
'7010' : "imagens",
'7011' : "Não partilhado com a rede.",
'7012' : "Não existem unidades USB ligadas ao router.",
'7016' : "Atualizar índice",
'7017' : "Por favor insira um nome amigável para o servidor multimédia",
'7018' : "Caractere não autorizado",
'7019' : "Tem mais multimédia do que o router consegue indexar, por isso estamos a servir os primeiros",
'7020' : "items.",
'7021' : "Twonky é uma linha de produtos de software domésticos digitais criados pela PacketVideo Corporation (PV).",
'7022' : "Não consegue indexar uma unidade apenas de leitura.",
'7023' : "MB",
'7024' : "GB",
'7025' : "TB",
'7026' : "vídeo",
'7027' : "música",
'7028' : "imagem",
'770' : "Use esta opção apenas para ligações com cabo Bigpond e cabo OptusNet. ",
'771' : "IMPORTANTE:",
'775' : "3) Volte a ligar o cabo de alimentação do router da Belkin.",
'776' : "Para se certificar de que se encontra ligado à Internet, abra um navegador de Internet como, por exemplo, o Internet Explorer, Firefox e Safari e certifique-se de que consegue navegar em páginas web.",
'731' : "Nome de utilizador",
'489' : "Password (Palavra-passe)",
'732' : "Repetir palavra-passe",
'756' : "Reintroduza a sua palavra-passe!",
'1379' : "Não introduziu todos os números de IP ou alguns dos números introduzidos são inválidos. O endereço IP deve possuir a seguinte configuração x.y.y.x (sendo que y é algo entre 0 e 255 e x é algo entre 1 e 254).",
'709' : "Para introduzir as suas definições de IP dinâmico, escreva as suas informações abaixo e clique em \"Guardar\".",
'710' : "Nome do anfitrião",
'711' : "Nome de anfitrião = Um nome de anfitrião é um nome que alguns fornecedores de serviço de Internet solicitam para estabelecer ligação ao seu sistema.",
'712' : "Alterar o endereço MAC WAN",
'330' : "Endereço IP",
'331' : "Máscara de sub-rede",
'659' : "MTU inválido; este tem de se situar entre 500 e 1500.",
'730' : "Para introduzir as suas definições de PPPoE, escreva a sua informação em baixo e clique em \"Guardar\".",
'733' : "Nome do serviço (opcional)",
'734' : "MTU (500-1500)",
'735' : "Não altere a definição MTU a não ser que o seu ISP precise de um valor diferente",
'736' : "Desligar após",
'737' : "minutos de inatividade.",
'741' : "Valor de MTU inválido",
'2005' : "IP atribuído pelo ISP",
'2021' : "Clique aqui para introduzir as suas definições DNS",
'2023' : "Não é permitido usar aspas.",
'2024' : "O nome de utilizador contém carateres inaceitáveis",
'2025' : "Não é permitido usar a barra invertida.",
'2030' : "Não introduziu todos os números do gateway predefinido ou alguns dos números introduzidos são inválidos. Todos os números devem situar-se entre 0 e 255",
'2052' : "A palavra-passe contém caracteres inaceitáveis (<, > e &)",
'691' : "O tipo dinâmico de ligação é o mais utilizado. Caso use um modem de cabo, a sua ligação será muito provavelmente do tipo dinâmico. Caso use um modem de cabo ou se não tiver a certeza de qual é o seu tipo de ligação, use este.",
'723' : "Incluindo ISPs que requerem um nome de anfitrião e ISPs que vinculam a ligação a um endereço MAC específico.",
'693' : "Um tipo de ligação com endereço IP estático é menos comum do que outros tipos de ligação. Selecione este tipo apenas se o seu ISP lhe tiver atribuído um endereço IP fixo.",
'724' : "O router suporta uma ligação a um ISP que atribui endereços IP estáticos.",
'695' : "Caso use um modem ADSL e/ou o seu ISP lhe tiver dado um nome de utilizador e uma palavra-passe, então o seu tipo de ligação é PPPoE. Use este tipo de ligação.",
'725' : "O router suporta um tipo dinâmico de ligação que necessite de um iníco de sessão PPPoE para autenticação.",
'697' : "Alguns ISP utilizam o protocolo PPTP para ligar os assinantes ao escritório central. Isto requer que insira um grande conjunto de definições adicionais que o seu ISP deve ter fornecido. Assim que tiver guardado as alterações, o indicador de estado de internet irá apresentar-se a verde, caso tenha sido bem sucedido.",
'726' : "Apenas para utilização com ISP que necessite do método de ligação PPTP.",
'699' : "Use esta opção apenas para ligações com cabo Bigpond e cabo OptusNet.",
'728' : "SÓ para utilizadores australianos. O router suporta uma ligação ao Telstra BigPond.",
'2019' : "Para inserir as suas definições de modem, escreva a sua informação em baixo e clique em \"Guardar\".",
'tBackToConnectionType' : "Voltar ao tipo de ligação",
'759' : "Para introduzir as suas definições de IP estático, escreva as suas informações abaixo e clique em \"Guardar\".",
'761' : "Máscara de sub-rede",
'762' : "Endereço de gateway do ISP",
'754' : "Clique aqui para introduzir as suas definições DNS",
'715' : "Cada dispositivo na sua rede tem um endereço de hardware único (endereço MAC) que o distingue dos outros dispositivos na rede e na internet.  Alguns fornecedores de serviço de internet (ISP) requerem que coloque o endereço MAC do seu cartão de rede ou router antigo nas definições do router. Se não tiver a certeza, insira o endereço MAC do computador que tenha estado originalmente ligado ao modem antes da instalação do router.",
'716' : "Endereço MAC WAN",
'717' : "Clonar endereço MAC do computador",
'718' : "Clonar",
'721' : "O separador Internet/WAN é o local onde poderá configurar o seu router para se ligar ao seu fornecedor de serviço de Internet. O router é capaz de aceder a praticamente qualquer sistema fornecedor de serviço de Internet desde que tenha configurado corretamente as definições do router no que respeita ao tipo de ligação do seu ISP. Para configurar o router de modo a estabelecer ligação com o seu ISP, faça clique sobre \"Tipo de ligação\" no separador Internet/WAN, do lado esquerdo do ecrã.",
'722' : "Tipos de ligação possíveis:",
'htWANMainContent' : "Selecionar tipo de ligação:",
'700' : "Seguinte",
'744' : "Conta PPTP",
'745' : "Password (Palavra-passe)",
'746' : "Repetir palavra-passe",
'747' : "Nome do anfitrião",
'1770' : "IP atribuído pelo ISP",
'1771' : "Sim",
'1772' : "Não",
'1773' : "Endereço do serviço",
'750' : "Máscara de sub-rede",
'778' : "O router pode ser configurado para atuar estritamente com ponto de acesso, ignorando todas as funções de encaminhamento e da firewall. Para o fazer, selecione \"Ativar\" e introduza o endereço IP que pretende que o ponto de acesso tenha.",
'779' : "Modo de ponto de acesso:",
'781' : "Especifique a máscara de sub-rede",
'801' : "Modo de segurança",
'806' : "Pode configurar aqui as definições de segurança/encriptação. A segurança deve ser ativada para garantir o máximo de segurança de rede. WPA (Wi-Fi Protected Access) permite alterações de chave dinâmicas e constitui a melhor solução em termos de segurança. Nos ambientes sem fios em que nem todos os dispositivos suportam WPA, deve ser usada a encriptação WEP (Wired Equivalent Privacy).",
'377' : "Automóvel",
'487' : "LIGADO",
'488' : "DESLIGADO",
'787' : "Efetue aqui as alterações pretendidas às definições de ligação sem fios do router. Clique em “Guardar” para guardar as definições.",
'788' : "Canal sem fios",
'789' : "SSID",
'790' : "Modo sem fios",
'794' : "Difusão de SSID",
'797' : "Modo protegido",
'1300' : "Canal de extensão",
'1301' : "Largura de banda",
'1304' : "802.11e/WMM QoS",
'852' : "O comprimento de uma chave pré-partilhada deve estar entre os 8 e os 63 caracteres, ou então 64 caracteres hexadecimais",
'856' : "Acesso de Wi-Fi protegido com uma chave pré-partilhada: A chave é uma palavra-passe que assume a forma de uma palavra, uma frase ou uma série de letras e números. A chave deve conter entre <b>8</b> e <b>63</b> caracteres e pode incluir espaços e símbolos ou apenas <b>64</b> Hex (0-F). Qualquer cliente que estabeleça ligação à rede tem de usar a mesma chave (chave pré-partilhada).",
'115' : "Não introduziu todos os dígitos hexadecimais ou alguns dos introduzidos são inválidos. Um dígito hexadecimal pode ser um número de 0-9 ou uma letra de A-F.",
'308' : "<b>SPI</b> Stateful Packet Inspection. SPI é um tipo de segurança da Internet a nível empresarial providenciada pelo seu gateway de rede doméstica HomeConnect. Ao usar a função SPI, o gateway atua como uma \"firewall,\" protegendo a sua rede de contra hackers.",
'808' : "NOTA:",
'809' : "Para criar automaticamente pares de dígitos hexadecimais usando uma frase-passe, prima o botão do lado direito e introduza aqui a frase-passe.",
'810' : "Frase-passe",
'811' : "Criar",
'812' : "Introduza uma frase-passe",
'814' : "Chave",
'818' : "(pares de dígitos hexadecimais)",
'296' : "<b>Endereço IP</b> IP significa Internet Protocol (Protocolo de internet). Um endereço IP consiste numa série de quatro números separados por pontos que identifica um anfitrião de Internet único. Exemplo: 192.34.45.8.",
'298' : "<b>ISP</b> Fornecedor de serviço de internet. Um ISP é uma empresa que providencia ligação à Internet para particulares e outras empresas ou organizações.",
'807' : "(13 pares de dígitos hexadecimais)",
'813' : "A chave não está completa",
'821' : "não está completa",
'1190' : "<br>Para se registar para o seu nome de anfitrião Dynamic DNS, visite http://www.dyn.com<br>",
'1339' : "Recomenda-se a utilização da encriptação WPA/WPA2 quando o WPS está ativado.",
'1363' : "Em curso - Aguarde...",
'1364' : "Erro detetado - volte a tentar.",
'1365' : "Erro de sobreposição de sessão: Aguarde 60 segundos antes de iniciar novamente o processo, ou utilize o seu utilitário de cliente para estabelecer manualmente a ligação a esta rede",
'1366' : "Êxito - O dispositivo está ligado ao router.",
'1370' : "PIN inválido! O PIN do dispositivo é constituído por quatro ou oito dígitos numéricos. Verifique e volte a introduzir.",
'1620' : "A iniciar - Inicie a ligação PBC WPS no dispositivo cliente dentro de 2 minutos.",
'1621' : "A iniciar - Inicie a ligação PBC WPS no dispositivo cliente dentro de 2 minutos.",
'1622' : "Tempo esgotado - Sem clientes ligados ao router.",
'1623' : "Mensagem do Wi-Fi Protected Setup",
'1393' : "Botão de hardware WPS",
'1320' : "O Wi-Fi Protected Setup (WPS) é o método padrão da indústria para simplificar a configuração da segurança e a gestão de redes Wi-Fi. Agora pode configurar e ligar facilmente a uma rede 802.11 com WPA através de dispositivos com certificação WPS, utilizando os métodos do número de informação pessoal (PIN) ou de configuração por botão (PBC). É possível adicionar dispositivos antigos sem WPS à rede, utilizando o método de configuração tradicional manual.",
'1321' : "Método do número de informação pessoal (PIN)",
'1322' : "Introduza o PIN do dispositivo cliente e clique em \"Inscrever\". Depois, inicie o WPS no dispositivo cliente a partir do respetivo utilitário sem fios ou da aplicação WPS, no prazo de 2 minutos",
'1323' : "Introduzir o PIN do dispositivo cliente",
'1324' : "Inscrever",
'1325' : "Se estiver disponível um registo externo, também pode introduzir o PIN do router no registo externo. Para alterar o PIN do router, clique em \"Gerar novo PIN\" ou clique em \"Restaurar PIN predefinido\" para repor o PIN para a predefinição de fábrica.",
'1326' : "PIN do router",
'1327' : "Gerar novo PIN",
'1328' : "Restaurar PIN predefinido",
'1329' : "Método de configuração por botão (PBC)",
'1330' : "Mantenha premido o botão PBC do seu router durante 3 segundos ou clique em \"Iniciar PBC\". Em seguida, inicie a configuração por botão PBC no dispositivo que pretende ligar ao router, no prazo de 2 minutos.",
'1331' : "Iniciar PBC",
'1332' : "Método de configuração manual",
'1333' : "Para dispositivos clientes sem WPS, configure manualmente o dispositivo com as seguintes definições.",
'1334' : "Segurança sem fios",
'1336' : "Autenticação da rede",
'1337' : "Encriptação de dados",
'1338' : "Chave de rede (PSK)",
'1340' : "Desbloquear PIN do router",
'1341' : "PIN do router desativado devido a demasiadas tentativas de acesso falhadas",
'1390' : "Falha na soma de verificação do PIN! Verifique e volte a introduzir.",
'1391' : "PIN inválido! O PIN do dispositivo é constituído por oito dígitos numéricos. Verifique e volte a introduzir.",
'1392' : "Configurado",
'1396' : "Configure manualmente a segurança sem fios",
'1397' : "segurança sem fios",
'common_err1' : "%s é NULO",
'upgrade_err2' : "Atualização de firmware terminada devido a recursos insuficientes. Atualização sem sucesso.\nTente novamente quando o sistema estiver inativo (sem tráfego de Internet)",
'upgrade_err3' : "Impossível carregar, contacte o administrador.",
'upgrade_err4' : "O firmware é demasiado grande, a atualização falhou.",
'upgrade_err5' : "Já tem o firmware mais recente instalado.",
'upgrade_err6' : "Parece que a atualização de firmware foi corrompida. Volte a descarregar o ficheiro de firmware e tente novamente.",
'show10' : "Lista de clientes DHCP",
'show54' : "Definições de ligação",
'btn2' : "Aplicar alterações",
'cff1' : "Verificação de firmware bem sucedida",
'PM2' : ":30 PM",
'AM2' : ":30 AM",
'Dimicons' : "Ícones esbatidos",
'EcoTo' : "para",
'fvrm' : "Desative a Gestão Remota. Porque a porta tem um conflito com uma das portas de entrada do seu servidor virtual.",
'lsipm2' : "Endereço IP da LAN inválido; o último número não pode ser 0 nem 255",
'lsldnm' : "Nome do domínio local inválido: `~!@#$%^&*()_+[]{}\|;:'\"<>/?.,",
'lsipm5' : "O endereço IP que escolher deverá corresponder a um IP não-roteável.\n  192.168.x.x (sendo x qualquer valor entre 0 e 255.) \n10.x.x.x (sendo x qualquer valor entre 0 e 255.)\172.y.x.x (sendo y qualquer valor entre 16 a 31 e x qualquer valor entre 0 e 255.)",
'ufy4' : "O restauro das predefinições pode demorar até 60 segundos. Não desligue a alimentação do router durante este processo.",
'ufe11' : "No final da atualização, o router poderá não responder aos comandos durante o máximo de 180 segundos. Isto é perfeitamente normal. Não desligue nem reinicie o router durante este período.",
'ur5' : "Espere até 30 segundos até que o router reinicie. Não desligue o router antes que a reinicialização esteja concluída.",
'ur6' : "Espere até 60 segundos até que o router reinicie. Não desligue o router antes que a reinicialização esteja concluída.",
'usys83' : "Os campos Nova Palavra-passe e Confirme Nova Palavra-passe não coincidem",
'usys83_1' : "Os campos Palavra-passe e Confirme Palavra-passe não coincidem.",
'usys85_1' : "A extensão da Palavra-passe de Administração deve situar-se entre 3 e 12 carateres.",
'usys88' : "A palavra-passe atingiu a extensão máxima!",
'usys89' : "AM",
'usys90' : "PM",
'usys92' : "O número da porta de acesso remoto deve situar-se entre 1 e 65535.",
'usysipm' : "Não introduziu todos os números de IP ou alguns dos números introduzidos são inválidos. O endereço IP deve possuir a configuração do tipo x.y.y.x (sendo que x é qualquer valor entre 1 e 223, y é qualquer valor entre 0 e 255, e z é qualquer valor entre 1 e 254.)",
'self_healing60' : "Recuperação automática",
'chkwait' : "A procurar atualizações de firmware...",
'Europe' : "Europa",
'Australia' : "Austrália e NZ",
'AsiaPacific' : "Ásia-Pacífico",
'NorthAmerica' : "América do Norte",
'vjs1' : "Endereço IP inválido; demasiado longo. Verifique novamente",
'vjs2' : "Endereço IP inválido; falta '.'. Verifique novamente!",
'vjs3' : "Endereço IP inválido; números em falta entre '.'. Verifique novamente!",
'vjs4' : "Endereço IP inválido; '.' a mais. Verifique novamente!",
'vjs5' : "Endereço IP inválido; os números entre '.' são demasiado grandes. Verifique novamente!",
'vm1' : "Carácter inválido ",
'vm2' : " na posição ",
'vm3' : "Deve ser ",
'vjs6' : "Formato do ano inválido, introduza como (p. ex., 2002)",
'vm4' : "Número inválido ",
'vjs8' : "Inválido, situar-se entre 1970 e 2037",
'vjs9' : "Formato do mês inválido, introduza como (p. ex., 01...12)",
'vjs161' : " fora de ",
'vjs162' : " máscara de rede",
'vjs163' : "A gama de DHCP válida é ",
'vjs17' : "Introduziu duas palavras-passe diferentes. Verifique novamente!",
'vjs18' : "Introduza o número da porta inicial.",
'vjs19' : "O número da porta inicial tem de ser menor do que o da porta final.",
'vjs23' : "Endereço MAC inválido; este é um endereço de emissão.",
'vjs24' : "Endereço MAC inválido; o endereço é nulo.",
'vjs25' : "Endereço MAC inválido; este é um endereço de multidifusão.",
'vjs26' : "Endereços IP inicial e final inválidos, o IP final dever ser maior do que o IP inicial.",
'vjs28' : "Formato de máscara de rede inválido.",
'vjs29' : "Formato inválido; a máscara de rede tem de ser 255.255.255.0, ou 255.255.255.128, ou 255.255.255.192, ou 255.255.255.224, ou 255.255.255.240, ou 255.255.255.248, ou 255.255.255.252, ou 255.255.255.254",
'vjs30' : "Endereço IP da inválido; o último número não pode ser 0 nem 255",
'vjs31' : "Endereço IP da LAN inválido; o primeiro número não pode ser 127",
'vjs32' : "O endereço IP da LAN não pode ser 0.0.0.0",
'vjs33' : "Endereço IP de LAN inválido; este tem de ser inferior a 224.0.0.0",
'vjs42' : "Os números de máscara de sub-rede introduzidos são inválidos.",
'vjs45' : "Especificar endereço IP",
'vjs46' : "é inválida; efetue as devidas correções!",
'wcc2' : "Selecione o seu tipo de ligação:",
'wcc13' : "L2TP",
'wcc14' : "Alguns ISP utilizam o protocolo L2TP para ligar os assinantes ao escritório central. Isto requer que insira um grande conjunto de definições adicionais que o seu ISP deve ter fornecido. Assim que tiver guardado as alterações, o indicador de estado de internet irá apresentar-se a verde, caso tenha sido bem sucedido.",
'wds4_1' : "Endereço DNS primário",
'wds7' : "É necessário introduzir as definições DNS que lhe foram fornecidas pelo seu ISP, se não estiver a utilizar a função de DNS automático",
'wds8' : "Para fazer alterações de DNS, primeiro visite %s Website Filters %s e selecione \"Sem filtros\".",
'wmc6' : "O endereço MAC da WAN não pode ser igual ao endereço MAC da LAN. Selecione outro.",
'wdd9 ' : "Não selecionou Serviço DDNS.\n",
'wdd10' : "Não selecionou Serviço DDNS e todos os dados nesta página serão perdidos. Quer continuar?",
'wm10b' : "Apenas para utilização com ISP que necessite do método de ligação L2TP.",
'pm' : "O seu serviço não conseguiu verificar a palavra-passe que introduziu. Confirme se introduziu corretamente a sua palavra-passe.",
'wpp17' : "Conta L2TP",
'wpp18' : "Palavra-passe L2TP",
'wpp19' : "Introduza a sua conta L2TP",
'wpp23' : "Atribuição do endereço IP",
'wpp24' : "Utilizar endereço IP estático",
'wpp25' : "Obter dinamicamente do ISP",
'wppa7' : "O meu endereço IP",
'wppa9' : "ID de ligação (opcional)",
'wppa13' : "Introduza a sua conta PPTP",
'wppa18' : "Nome de serviço inválido.",
'ws2' : "Para introduzir as suas definições de IP estático, digite as suas informações abaixo e faça clique sobre \"Aplicar alterações\".",
'sm_1' : "Os números de máscara de sub-rede introduzidos são inválidos.",
'ws8' : "Introduza/valide as suas definições do endereço DNS no ecrã que se segue",
'wt2' : "Se fizer clique em Aplicar alterações o router será reiniciado. Uma vez reiniciado o router é necessário fazer o seguinte",
'wt3' : "1) Desligue o cabo de alimentação do modem de cabo e do router da Belkin",
'wt4' : "2) Volte a ligar o cabo de alimentação ao modem de cabo e aguarde até que todas as luzes do modem deixem de piscar",
'wt5' : "3) Volte a ligar o cabo de alimentação do router da Belkin",
'wt6' : "Para se certificar de que se encontra ligado à Internet, abra um navegador de Internet como, por exemplo, o Internet Explorer, Firefox e Safari e certifique-se de que consegue navegar em páginas web.",
'wlad2' : "Ativar/Desativar",
'wlc2' : "Efetue aqui as alterações pretendidas às definições de ligação sem fios do router. Faça clique sobre \"Aplicar alterações\" para guardar as definições.",
'wlcgb' : "802.11b+g",
'wlcg' : "802.11g",
'wlcb' : "802.11b",
'wlc20' : "20MHz",
'wlc22' : "20/40MHz",
'wlcoff' : "DESLIGADO",
'wlcngb1' : "802.11b & 802.11g & 1x1 802.11n",
'wlcn1' : "1x1 802.11n",
'wlcngb2' : "802.11b & 802.11g & 802.11n",
'wlcn2' : "802.11n",
'wlcgn' : "802.11g+n",
'wlca' : "802.11a",
'wlcan' : "802.11a & 802.11n",
'wlc26' : "Ocultar o nome de rede irá desativar a função WPS.",
'wlc27' : "Alterar o tipo de segurança irá desativar a função WPS.",
'wlc28' : "A função WPS está desativada devido ao seu <A href=%s><B>tipo de segurança sem fios</B></A>.",
'wlc29' : "A função WPS está desativada porque ocultou o seu nome de rede (SSID).",
'wlc30' : "A função WPS está desativada porque ocultou o seu nome de rede (SSID) e, também, devido ao seu <A href=%s><B>tipo de segurança sem fios</B></A>.",
'wlc31' : "Ativar a função WPS irá tornar visível o seu nome de rede (SSID).",
'wlc32' : "Ativar a função WPS irá alterar o seu tipo de segurança para WPA/WPA2. A sua atual palavra-passe de rede funcionará perfeitamente.",
'wlc33' : "Ativar a função WPS irá tornar visível o seu nome de rede (SSID) e alterar o seu tipo de segurança para WPA/WPA2. A sua atual palavra-passe de rede funcionará perfeitamente.",
'wle3a' : "WPA-PSK",
'wle3b' : "WPA2-PSK",
'wle3c' : "WPA-PSK + WPA2-PSK",
'wps1' : "Wi-Fi Protected Setup™ (WPS)",
'wps3' : "Configure a segurança sem fios",
'wps17' : "Para dispositivos clientes sem WPS, execute o Assistente de Segurança Belkin a partir do CD, ou configure manualmente o dispositivo com as seguintes definições:",
'wps23' : "WPA+WPA2-Personal (PSK)",
'wps25' : "TKIP+AES",
'wps27' : "Chave de rede (WEP):",
'wps28_1' : "NULO",
'wle11' : "Chave 1",
'wle12' : "Código 2",
'wle13' : "Código 3",
'wle14' : "Código 4",
'wpskerr2' : "A chave tem de conter entre 8 e 63 carateres e pode incluir espaços e símbolos ou apenas 64 Hex (0-F)!",
'wpskerr4' : "Tem de introduzir a Chave de Convidado",
'wpskerr7' : "A Chave de Convidado tem de ter entre 8 carateres.",
'wpskerr8' : "A Chave de Convidado não pode ser igual à Chave de Rede",
'wlguest1' : "O SSID (nome de rede) não pode ser igual ao SSID de Convidado",
'wlguest2' : "O SSID de Convidado não pode ser igual ao SSID (nome de rede)",
'rs_crc' : "Falha de recuperação < CRC >",
'rs_long' : "Falha de recuperação <too long>",
'rs_disposition' : "Falha de recuperação <No Content-Disposition>",
'rs_getpid' : "Falha de recuperação <Can't get pid!>",
'rs_unmatchpid' : "Falha de recuperação <Unmatched pid>",
'msg_ddns3 ' : "Os campos de nome de domínio não podem ficar em branco.\n",
'msg_lan_dhcp1 ' : "A pedir informação do Gateway.",
'msg_lan_dhcp2 ' : "A atualizar a base de dados de configurações.",
'msg_wan_stat1 ' : "O endereço IP ",
'msg_wan_stat2 ' : " não está ",
'msg_wan_stat3 ' : " na rede.",
'msg_wls_chan2 ' : "O SSID de Convidado não pode ser definido como NULO!\n",
'fw_not_interrupt ' : "NÃO INTERROMPA NEM DESLIGUE O ROUTER, pois isso poderia tornar o router inoperável.",
'msg_invalid_char ' : "Encontrados carateres inválidos. Os carateres válidos são: 0-9, a-z, A-Z, `~!@#$%^&*()_-+=|\\{}[]:\";\',.<>/?",
'msg_invalid_domain_char ' : "Nome do domínio local inválido'+': ~!@#$%^&*()=+{}[]|\":;\\\'?/<>,`",
'msg_invalid_char_1 ' : "Encontrados carateres inválidos. Os carateres válidos são letras e números. O seguinte símbolo é inválido: `~!@#$%^&*()_+[]{}\\|;:\'\"<>/?.,",
'msg_hostIP_invalid ' : "O endereço IP do anfitrião é inválido. Não deve ser o IP de LAN do router.\n",
'msg_dmzIP ' : "O endereço IP DMZ",
'msg_blank ' : " não pode ficar em branco.\n",
'msg_space ' : "Não são permitidos espaços vazios ou em branco em %s\n",
'msg_blank_in ' : "Não são permitidos espaços vazios em %s\n",
'msg_allspaces ' : "%s não pode consistir apenas de espaços\n",
'msg_invalid ' : "Caratere ou carateres inválidos em %s\nOs carateres válidos são: \n%s\n\n",
'msg_check_invalid ' : "%s contém um número inválido\n",
'msg_valid_range ' : "%s é inválido. O intervalo válido é de %s a %s\n",
'msg_invalid_mac ' : "Endereço MAC inválido.\n",
'msg_multi_mac' : "O endereço MAC não pode ser um endereço de multidifusão.\n",
'msg_confirmDefault ' : "Aviso!\nCarregar as Predefinições de Fábrica irá apagar as definições atuais.\nTem a certeza que deseja fazer isto?",
'Allowed_Services' : "Serviços permitidos",
'Allowing_Url' : "Autorização de Website por endereço URL ",
'Allowing_Keyword' : "Autorização de Website por palavra-chave",
'wipv63' : "Os dispositivos ligados ao seu Router podem comunicar uns com os outros usando pacotes IPv6 nativos. Os pacotes IPv6 na LAN serão automaticamente enviados para todas as interfaces LAN (Portas Ethernet e ligações sem fios 2.4GHz e 5 GHz).",
'wipv64' : "Quando a passagem de IPv6 estiver ativada, os pacotes IPv6 também serão copiados para a interface WAN.(Quando ativado, isto cria uma ligação direta, não segura, à Internet).",
'wipv65' : "Contacte o seu ISP diretamente para obter informação acerca do suporte para IPv6.",
'wipv67' : "Internet IPv6",
'wipv68' : "A sua rede é compatível com IPv6.",
'wipv69' : "Passagem",
'mf1' : "Estas páginas permitem-lhe ajustar o comportamento do router quando confrontado com certos tipos de tráfego de multimédia.",
'mf2' : "Otimizar automaticamente a ligação internet para diferentes tipos de tráfego.",
'mf3' : "Ver como o router está a ser usado.",
'mf8' : "Registado em %s",
'mf10' : "Descarregamento",
'mf11' : "Carregamento",
'mf12' : "Velocidade",
'mf15' : "Aplicar Definições",
'mf18' : "Insira um número entre {0.1-%s}.",
'mf20' : "Apenas entre {0.1-%s} .",
'mf26' : "Registado manualmente em %s",
'mf32' : "ou",
'mf44' : "Os resultados do teste automático de velocidade podem não ser 100% exatos, devido ao tráfego de internet e outras condições. Para comparar resultados visite um site de testes de velocidade, ou contacte o seu ISP para confirmar as suas velocidades de Internet. Se os resultados de velocidade forem inconsistentes, pode introduzir os valores manualmente.",
'media_dlna18' : "Sem título",
'media_dlna21' : "Tem mais multimédia do que o router consegue indexar, por isso estamos a servir os primeiros 12000 itens.",
'errSubnetMaskInvalid_2' : "A máscara de sub-rede não parece uma máscara de sub-rede. Por favor verifique os valor.",
'htWAN_L2TP' : "Definições L2TP",
'htWAN_L2TPContent' : "Alguns ISP utilizam o protocolo L2TP para ligar os assinantes ao escritório central. Isto requer que insira um grande conjunto de definições adicionais que o seu ISP deve ter fornecido. Assim que tiver guardado as alterações, o indicador de estado de internet irá apresentar-se a verde, caso tenha sido bem sucedido.",
'p400t001_error' : "Ligue tudo mais depressa.",
'p400t018_error' : "Porque devo mudar o nome?",
'p400t019_error' : "É isto o que verá quando procurar a sua rede a partir de outros dispositivos. Os nomes de rede únicos são mais fáceis de lembrar e localizar. Se os seus vários dispositivos sem fios antes estavam ligados a um router diferente, ao usar o mesmo nome de rede e palavra-passe no novo router não terá de introduzir esses dados nos seus dispositivos, eles irão ligar-se automaticamente. ",
'dhToggleBand2G' : "Mostrar 2.4GHz",
'772' : "Se fizer clique em Aplicar alterações o router será reiniciado. Uma vez reiniciado o router é necessário fazer o seguinte",
'773' : "1) Desligue o cabo de alimentação do modem de cabo e do router da Belkin",
'774' : "2) Volte a ligar o cabo de alimentação ao Modem de cabo, espere até as luzes no modem pararem de piscar",
'dft001' : "Parece que não está ligado.",
'dft002' : "Se precisar de suporte e tiver um dispositivo ligado, visite <strong>help.belkin.com</strong>.",
'gtNoSecCard     ' : "Escreva o nome e palavra-passe da sua rede para que os possa consultar mais tarde.",
'gtFWUpdateMobileError' : "De momento, não podem ser carregados ficheiros de firmware a partir de dispositivos móveis.",
'gtSettingsMobileError' : "De momento, não podem ser carregados ficheiros de definições a partir de dispositivos móveis.",
'gtMoreFromInternet' : "Ligue-se à Internet para obter mais",
'gtCantConnect' : "Não nos conseguimos ligar à Internet.",
'p802t004' : "Vá ao menu de rede sem fios do seu equipamento",
'p803t004' : "Vá ao menu de rede sem fios do seu equipamento",
'PIC-S1t001' : "Bloquear todos os dispositivos",
'gtUnnamedDevice' : "Dispositivo sem nome",
'gtIC' : "Controlo Parental de Internet",
'errDefaultGatewayEmpty' : "O endereço de gateway predefinido não pode estar em branco.",
'errDefaultGatewayInvalid' : "O endereço de gateway predefinido deve conter quatro números (0-255) separados por pontos. Por favor verifique os valor.",
'errDNSServerEmpty' : "O endereço de servidor DNS não pode estar em branco.",
'errDNSServerInvalid' : "O endereço de servidor DNS deve conter quatro números (0-255) separados por pontos. Por favor verifique os valor.",
'errIpAddressEmpty' : "O endereço IP não pode estar em branco.",
'errIpAddressInvalid' : "O endereço IP deve conter quatro números (0-255) separados por pontos. Por favor verifique os valor.",
'errorGenericCommitError' : "Ocorreu um erro.  Corrija as definições seguintes e tente novamente.",
'errorSSIDEmpty' : "Insira um nome para a sua rede sem fios.",
'errorSSIDInvalidChars' : "O nome da sua rede apenas pode conter letras, números, pontuação e espaços.",
'errorSSIDTooLong' : "O nome da sua rede tem de ter menos de 32 caracteres.",
'errorWEPPasswordEmpty' : "Insira uma palavra-passe para tornar segura a sua rede sem fios.",
'errorWEPPasswordInvalidChars' : "A palavra-passe da sua rede apenas pode conter números e letras de A a F.",
'errorWEPPasswordInvalidLength' : "A palavra-passe da sua rede deve ter entre 10 e 26 caracteres.",
'errorWPAPasswordEmpty' : "Insira uma palavra-passe para tornar segura a sua rede sem fios.",
'errorWPAPasswordInvalidChars' : "A palavra-passe da sua rede apenas pode conter letras, números, pontuação e espaços.",
'errorWPAPasswordInvalidLength' : "A palavra-passe da sua rede deve ter entre 8 e 63 caracteres.",
'errPasswordEmpty' : "Introduza a sua palavra-passe.",
'errPasswordInvalid' : "O seu nome de utilizador apenas pode conter letras, números, pontuação e espaços.",
'errPasswordTooLong' : "A sua palavra-passe tem de ter menos de 64 caracteres.",
'errServAddressEmpty' : "Introduza um endereço de serviço.",
'errSubnetMaskEmpty' : "A máscara de sub-rede não deve estar em branco.",
'errSubnetMaskInvalid' : "A máscara de sub-rede tem de conter quatro números (0-255) separados por pontos. Por favor verifique os valor.",
'errUsernameInvalid' : "O seu nome de utilizador apenas pode conter letras, números, pontuação e espaços.",
'errUsernameTooLong' : "O seu nome de utilizador deve ter menos de 64 caracteres.",
'errVCIInvalid' : "Insira um número entre 0 e 65535. O seu ISP poderá dizer-lhe o valor correto a utilizar.",
'errVPIInvalid' : "Insira um número entre 0 e 255. O seu ISP poderá dizer-lhe o valor correto a utilizar.",
'p802t003' : "Uma vez que alterou algumas definições, poderá ter de selecionar novamente a sua rede sem fios:",
'p802t011' : "Uma vez que alterou algumas definições, poderá ter de selecionar novamente a sua rede sem fios:",
'dft003' : "Precisa de ajuda?",
'dft004' : "Tem alguma dúvida ou precisa de assistência? Pode obter ajuda 24 horas no nosso centro de ajuda online.<br><a href=\"http://www.belkin.com/support/\" id=\"dfBelkinHelp\">Centro de Ajuda Belkin &rarr;</a>",
'dhChangeSSID' : "Alterar &raquo;",
'dhPassLabel' : "Password (palavra-passe):",
'dhPasswordObscured24' : "t********",
'dhShow' : "Mostrar:",
'dhSSID24' : "{blahblah}",
'dhToggle24' : "2,4 Ghz",
'dhToggle5' : "5,0 Ghz",
'DownSpeed' : "32.6",
'errUsernameEmpty' : "Introduza o nome de utilizador.",
'gt10am' : "10h00",
'gt10pm' : "22h00",
'gt11am' : "11h00",
'gt11pm' : "23h00",
'gt1am' : "1h00",
'gt1amNextDay' : "1h00 do dia seguinte",
'gt1pm' : "13h00",
'gt24ghz' : "2.4Ghz",
'gt24GKey' : "Chave 2.4GHz",
'gt24GName' : "2.4 GHz SSID",
'gt24PSK' : "Password (Palavra-passe)",
'gt24Sec' : "WPA2",
'gt24SSID' : "12345678",
'gt2am' : "2h00",
'gt2pm' : "14h00",
'gt3am' : "3h00",
'gt3pm' : "15h00",
'gt4am' : "4h00",
'gt4pm' : "16h00",
'gt50ghz' : "5 Ghz",
'gt5am' : "5h00",
'gtGuestKey' : "Chave do convidado",
'gt5GMedia' : "A sua banda de 5Ghz tem o mesmo nome, mas com \".media\" acrescentado no fim.",
'gtGuestName' : "SSID de convidado",
'gt5pm' : "17h00",
'gt6am' : "6h00",
'gt6pm' : "18h00",
'gt7am' : "7h00",
'gt7pm' : "19h00",
'gt8am' : "8h00",
'gt8pm' : "20h00",
'gt9am' : "9h00",
'gt9pm' : "21h00",
'gtAccessControl' : "Controlo Parental de Internet",
'gtAccessPoint' : "Utilizar como ponto de acesso",
'gtADSL' : "ADSL",
'gtAdvSettings' : "Definições avançadas",
'gtAllElseFails' : "Se tudo o resto falhar, contacte o suporte técnico da Belkin em&nbsp;",
'gtAndroidConnect01' : "Telefones e tablets Android",
'gtAndroidConnect02' : "O seu dispositivo fornece um menu de redes sem fios disponíveis na aplicação Definições.",
'gtAndroidConnect03' : "Abra a aplicação <strong>Definições</strong> e selecione <strong>Sem fios e rede</strong>.",
'gtAndroidConnect04' : "A partir daí, selecione <strong>Wi-Fi</strong> para ver a lista de redes disponíveis.",
'gtAndroidConnect05' : "Selecione <strong tid=\"Network24SSID\">{SUBSTITUIR POR 2.4 SSID}</strong>. <!-- IF NOT OPEN --> <span tid=\"gtNotOpen\">se lhe for pedido, insira a palavra-passe de rede <strong tid=\"Network24Passkey\">{SUBSTITUIR POR PALAVRA-PASSE 2.4}</strong>.</span> <!-- /IF -->",
'gtAt' : "em",
'gtAttenuation' : "Atenuação",
'gtAustralia' : "Austrália",
'gtBackToDashboard' : "&larr; Voltar ao Painel",
'gtBelkin' : "Belkin",
'gtBootLoader' : "Carregador de arranque",
'gtCantConnect' : "Não nos conseguimos ligar ao seu ISP.",
'gtCantConnectNoResponse' : "Não nos foi possível ligar à Internet - não houve resposta do seu ISP.",
'gtChina' : "China",
'gtClientList' : "Dispositivos Ligados",
'gtClose' : "Fechar",
'gtConfig' : "Configurar",
'gtConfigureRouter' : "Configurar router",
'gtConnDevices' : "Dispositivos Ligados",
'gtConnectingToNew' : "Ligar-se à sua nova rede",
'gtConnectionDet' : "Detalhes de ligação",
'gtConnType' : "Tipo de ligação",
'gtContentFiltering' : "Filtro de website",
'gtCopyright' : "Copyright &copy; 2012. Belkin, Todos os direitos reservados.",
'gtCurrTimezone' : "Europa/Helsínquia {SUBSTITUIR ESTE INTERVALOS PELA descrição de ID da Belkin TZ}",
'gtDashboard' : "&larr; Painel",
'gtDashTitle' : "Painel do router Belkin",
'gtDataRate' : "Velocidade de transmissão de dados",
'gtDDNS' : "DDNS",
'gtDHCPList' : "Dispositivos Ligados",
'gtDHCPServer' : "Servidor DHCP",
'gtDMZ' : "DMZ",
'gtDNS' : "DNS",
'gtDown' : "Down",
'gtDownloadSpeed' : "Velocidade de  Download",
'gtEncap' : "Encapsulamento:",
'gtFileInstallError' : "Esse ficheiro não pode ser instalado - talvez seja de um tipo de ficheiro errado",
'gtFileLoadError' : "Esse ficheiro não pode ser carregado - talvez seja de um tipo de ficheiro errado",
'gtFirewall' : "Firewall",
'gtFirmware' : "Firmware",
'gtFirmwareUpdate' : "Atualização de firmware",
'gtFrance' : "França",
'gtFreshest' : "Estamos a obter a versão mais recente do nosso firmware...",
'gtFrom' : "De:",
'gtFWUpdate' : "Atualização de firmware",
'gtFWUpToDate' : "O seu firmware está agora atualizado.",
'gtGermany' : "Alemanha",
'gtGuestAccess' : "Acesso de convidado",
'gtGuestNetwork' : "Rede de convidado",
'gtHomeNetwork' : "Rede doméstica",
'gtIfYouKnowConnection1' : "Se souber o seu tipo de ligação, pode <a href=\"700-SelectConnection.htm\" id=\"ISP1a010\">configurá-la manualmente &raquo;</a>",
'gtIfYouKnowConnection2' : "Se souber o seu tipo de ligação, pode <a href=\"700-SelectConnection.htm\" id=\"ISP2a010\">configurá-la manualmente &raquo;</a>",
'gtIfYouKnowConnection3' : "Se souber o seu tipo de ligação, pode <a href=\"700-SelectConnection.htm\" id=\"ISP3a010\">configurá-la manualmente &raquo;</a>",
'gtIfYouKnowConnection4' : "Se souber o seu tipo de ligação, pode <a href=\"700-SelectConnection.htm\" id=\"ISP4a010\">configurá-la manualmente &raquo;</a>",
'gtIfYouKnowConnection4a' : "Se souber o seu tipo de ligação, pode <a href=\"700-SelectConnection.htm\" id=\"ISP4aa010\">configurá-la manualmente &raquo;</a>",
'gtIfYouKnowConnection5' : "Se souber o seu tipo de ligação, pode <a href=\"700-SelectConnection.htm\" id=\"ISP5a010\">configurá-la manualmente &raquo;</a>",
'gtIfYouKnowConnection6' : "Se souber o seu tipo de ligação, pode <a href=\"700-SelectConnection.htm\" id=\"ISP6a010\">configurá-la manualmente &raquo;</a>",
'gtIfYouKnowConnection7' : "Se souber o seu tipo de ligação, pode <a href=\"700-SelectConnection.htm\" id=\"ISP7a010\">configurá-la manualmente &raquo;</a>",
'gtIntellistream' : "Intellistream",
'gtInterleavePath' : "Caminho Interleave",
'gtInternetSettings' : "Definições de Internet",
'gtIOSConnect01' : "iPhone, iPad e iPod Touch",
'gtIOSConnect02' : "O seu dispositivo fornece um menu de redes sem fios disponíveis na aplicação Definições.",
'gtIOSConnect03' : "Abra a aplicação <strong>Definições</strong> e selecione <strong>Wi-Fi</strong>.",
'gtIOSConnect04' : "Selecione <strong tid=\"Network24SSID\">{SUBSTITUIR POR 2.4 SSID}</strong> a partir da lista de rede. <!-- IF NOT OPEN --> <span tid=\"gtNotOpen\">se lhe for pedido, insira a palavra-passe de rede <strong tid=\"Network24Passkey\">{SUBSTITUIR POR PALAVRA-PASSE 2.4}</strong>.</span> <!-- /IF -->",
'gtIPv6' : "IPv6",
'gtIPV6Connection' : "Ligação IPv6",
'gtISP' : "Tipo de ligação ao ISP",
'gtJapan' : "Japão",
'gtLANIP' : "Endereço IP de LAN",
'gtLANMAC' : "LAN/WLAN MAC",
'gtLANSettings' : "Definições LAN",
'gtLANSubnet' : "Máscara de sub-rede de LAN",
'gtLLC' : "LLC",
'gtLoadPrevSettings' : "Carregar definições anteriores",
'gtLocalNetwork' : "Rede local",
'gtLocalSettings' : "Definições de rede local",
'gtLocked' : "bloqueado",
'gtMACAddress' : "Endereço MAC",
'gtMACAddressFiltering' : "Filtragem de endereço MAC",
'gtMacConnect01' : "Mac OS X",
'gtMacConnect02' : "O seu computador fornece um menu de redes sem fios disponíveis, na extremidade direita da barra de menu.",
'gtMacConnect03' : "Clique no ícone de ondas sem fios.",
'gtMacConnect04' : "Selecione <strong tid=\"Network24SSID\">{SUBSTITUIR POR 2.4 SSID}</strong> a partir da lista de rede. <!-- IF NOT OPEN --> <span tid=\"gtNotOpen\">se lhe for pedido, insira a palavra-passe de rede <strong tid=\"Network24Passkey\">{SUBSTITUIR POR PALAVRA-PASSE 2.4}</strong>.</span> <!-- /IF -->",
'gtMaybeLater' : "Talvez mais tarde",
'gtMbitPerSec' : "Mb/s",
'gtMeaning' : "O que significa isto?",
'gtMedia' : "Multimédia",
'gtMediaServer' : "Servidor de multimédia",
'gtmidnight' : "Meia-noite",
'gtModel' : "Modelo",
'gtName' : "Nome",
'gtNeedMoreHelp' : "Precisa de mais ajuda?",
'gtNetName' : "Nome da rede",
'gtNewFWAvailableModem' : "Temos firmware novo para o seu modem.",
'gtNewFWAvailableRouter' : "Temos firmware novo para o seu router.",
'gtNewFWAvailableRouterAndModem' : "Temos firmware novo para o seu router e modem.",
'gtNext' : "Seguinte",
'gtNo' : "Não",
'gtNoiseMargin' : "Margem de ruído",
'gtNoMyNet' : "Não vejo a minha rede",
'gtNoon' : "Meio-dia",
'gtNoSecCard' : "Escreva o nome e palavra-passe da sua rede para que os possa consultar mais tarde.",
'gtNotOpen' : "Se lhe for pedido, insira a palavra-passe de rede <strong tid=\"Network24Passkey\">{SUBSTITUIR POR PALAVRA-PASSE 2.4}</strong>.",
'gtNZ' : "Nova Zelândia",
'gtOffline' : "Offline",
'gtOnline' : "Online",
'gtOptionalSoftware' : "Software opcional",
'gtOptionalSW' : "Software opcional",
'gtOptSW' : "Software opcional",
'gt-OR-' : "-OU-",
'gtOther' : "...",
'gtOutputPower' : "Potência de saída",
'gtParentalControls' : "Controlos parentais",
'gtPass' : "Password (palavra-passe):",
'gtPIC' : "Controlo Parental de Internet",
'gtPICOtherTimes' : "Em todos os outros momentos, este equipamento não será capaz de aceder à Internet.",
'gtPleaseCallISP' : "Telefone ao seu fornecedor de serviço de Internet",
'gtPortForwarding' : "Port Forwarding (encaminhamento de porta)",
'gtPrint' : "Imprimir",
'gtReadAllAboutIt' : "Para mais informações:",
'gtReconnectingHell' : "A voltar a ligar...",
'gtRegister' : "Registar",
'gtRegistration' : "Subscrever",
'gtRestartRouter' : "Reiniciar router",
'gtRestoreDef' : "Restaurar predefinições",
'gtRestoreFactDefault' : "Restaurar predefinições de fábrica",
'gtRestoreFactDefaults' : "Restaurar predefinições de fábrica",
'gtRestoreSettigns' : "Restaurar Definições",
'gtRetest' : "Voltar a testar ligação",
'gtRouterDetails' : "Detalhes do router",
'gtRouterInfo' : "Info do router",
'gtSave' : "Guardar",
'gtSaveCurrentSettings' : "Guardar Definições Atuais",
'gtSaved' : "Guardado dispositivo sem nome",
'gtSaveRestore' : "Guardar/Restaurar Definições",
'gtSaveRestoreSettings' : "Guardar/Restaurar Definições",
'gtSaveSettings' : "Guardar/Definições de cópia de segurança",
'gtSecLog' : "Registo de segurança",
'gtSecurity' : "Segurança",
'gtSelectLang' : "Selecionar idioma:",
'gtSelfHeal' : "Auto-regeneração",
'gtSelfHealing' : "Auto-regeneração",
'gtSerialSupport' : "Na próxima página iremos gravar o número de série do seu router para objetivos de assistência.",
'gtShowtime' : "Showtime",
'gtSpeedTestResults' : "Última verificação: 1 dia atrás às 15.57",
'gtStaticRouting' : "Encaminhamento estático",
'gtStatus' : "Estado",
'gtSystemSettings' : "Definições do sistema",
'gtTo' : "Para:",
'gtTraffStats' : "Estatísticas de tráfego",
'gtTryAgain' : "Volte a tentar",
'gtUnlocked' : "desbloqueado",
'gtUp' : "Up",
'gtUpdate' : "atualizar",
'gtUpdateNoPowerModem' : "Estamos a atualizar o seu modem com o novo firmware. Não desligue a alimentação enquanto está a decorrer o processo.",
'gtUpdateNoPowerRouter' : "Estamos a atualizar o seu router com o novo firmware. Não desligue a alimentação enquanto está a decorrer o processo.",
'gtUploadSpeed' : "Velocidade de upload",
'gtUSA' : "os Estados Unidos",
'gtUserName' : "User Name (nome de utilizador):",
'gtUtils' : "Utilitários",
'gtVCI' : "VCI:",
'gtVCMUX' : "VC/MUX",
'gtVPI' : "VPI:",
'gtWAN' : "Definições WAN",
'gtWANDNS' : "Endereço DNS",
'gtWANGateway' : "Gateway de WAN",
'gtWANIP' : "Endereço IP da WAN",
'gtWANMAC' : "Endereço MAC WAN",
'gtWANPingBlocking' : "Bloqueio de Ping WAN",
'gtWANSubnet' : "Máscara de sub-rede de WAN",
'gtWebsiteFilter' : "Filtro de website",
'gtWelcome' : "Bem-vindo",
'gtWiFi' : "WiFi",
'gtWifiSettings' : "As suas definições WiFi foram alteradas com sucesso.",
'gtWinConnect01' : "Windows 7 ou 8",
'gtWinConnect02' : "O seu computador fornece um menu de redes sem fios disponíveis na extremidade direita na barra de tarefa.",
'gtWinConnect03' : "Clique direito no ícone que apresenta as barras de força de sinal.",
'gtWinConnect04' : "Selecione <strong tid=\"Network24SSID\">{SUBSTITUIR POR 2.4 SSID}</strong>. <!-- IF NOT OPEN --> <span tid=\"gtNotOpen\">se lhe for pedido, insira a palavra-passe de rede <strong tid=\"Network24Passkey\">{SUBSTITUIR POR PALAVRA-PASSE 2.4}</strong>.</span> <!-- /IF -->",
'gtWinConnect05' : "Windows Vista e Windows XP",
'gtWinConnect06' : "O seu computador fornece um menu de redes sem fios disponíveis na extremidade direita na barra de tarefa.",
'gtWinConnect07' : "Clique direito no ícone que apresenta um computador com ondas sem fios (XP) ou dois computadores (Vista).",
'gtWinConnect08' : "Escolha <strong>Ver redes sem fios disponíveis</strong> (XP) ou <strong>Ligar a uma rede</strong> (Vista) a partir do menu resultante.",
'gtWinConnect09' : "Selecione <strong tid=\"Network24SSID\">{SUBSTITUIR POR 2.4 SSID}</strong>. <!-- IF NOT OPEN --> <span tid=\"gtNotOpen\">se lhe for pedido, insira a palavra-passe de rede <strong tid=\"Network24Passkey\">{SUBSTITUIR POR PALAVRA-PASSE 2.4}</strong>.</span> <!-- /IF -->",
'gtWireless' : "Sem fios",
'gtWiring' : "Ligações de cabos",
'gtWPSShort' : "WPS",
'gtWPS' : "Wi-Fi Protected Setup",
'gtYes' : "Sim",
'htFWUpdate' : "O que são atualizações de firmware?",
'htFWUpdateContent' : "De tempos a tempos, a Belkin poderá lançar novas versões do sistema operativo do router. Estas atualizações contêm melhorias e correções para o router.<br><br>NOTA: Faça cópias de segurança das suas definições atuais antes de atualizar para uma nova versão de firmware.",
'htParent' : "O que é o filtro de website?",
'htPIC' : "O seu controlo à Internet",
'htPICBlocked' : "A internet foi suspensa",
'htPICBlockedContent' : "Restaure o acesso quando tiver pronto para fornecer novamente ligação à internet a todos os dispositivos.",
'htPICContent' : "Com controlo de internet pode agora personalizar uma hora para bloquear o acesso à internet para cada dispositivo.",
'htSaveRestore' : "O que significa guardar, carregar ou restaurar definições?",
'htSaveRestoreContent' : "O seu router lembra-se das definições para coisas como o seu nome de rede, palavra-passe, etc. Estas definições podem ser guardadas (como cópia de segurança) e podem depois ser carregadas novamente para o seu router. As definições de router também podem ser restauradas novamente para as suas predefinições de fábrica originais.",
'htSaveRestoreContentMobile' : "<br>* Em iPhone, iPad e iPod Touch, não se encontra disponível a possibilidade de guardar e carregar um ficheiro de definições. Utilize outro equipamento, como um portátil, para guardar e carregar um ficheiro de definições.",
'ISP1t003' : "Diga-lhes que o seu router conseguiu obter um endereço IP, mas que o DNS não está a funcionar.",
'ISP1t007' : "O DNS traduz nomes como \"belkin.com\" em endereços numéricos (endereços IP) que os computadores utilizam para navegar na internet. O seu router tem um endereço IP, o que significa que está ligado à internet, mas o DNS não está a funcionar, por isso não pode navegar o que sugere que algo está errado com o seu ISP.  <span class=\"nub\"></span>",
'ISP2t003' : "Diga-lhes que o seu router conseguiu obter um endereço IP, que o DNS está funcionar, mas não consegue fazer ping a ninguém.",
'ISP2t007' : "Nós efetuamos o \"ping\" a outras máquinas na internet para testar se conseguimos ou não comunicar com elas. O DNS traduz nomes como \"belkin.com\" em endereços numéricos (endereços IP) que os computadores utilizam para navegar na internet. O seu router tem um endereço IP, o que significa que está ligado à internet e o DNS fornecido pelo seu ISP está a funcionar, mas não conseguimos efetuar o ping. Tal sugere que há algo de errado com o seu ISP.<span class=\"nub\"></span>",
'ISP3t004' : "Diga-lhes que o seu nome de utilizador e palavra-passe foram aceites, mas ainda não tem uma ligação à internet.",
'ISP3t007' : "Nós efetuamos o \"ping\" a outras máquinas na internet para testar se conseguimos ou não comunicar com elas. O seu ISP aceitou o seu nome de utilizador e palavra-passe, mas não conseguimos efetuar o ping, por isso não consegue navegar. Tal sugere que há algo de errado com o seu ISP.  <span class=\"nub\"></span>",
'ISP4t003' : "Diga-lhes que o seu nome de utilizador e palavra-passe não foram aceites após algumas tentativas.",
'ISP4t007' : "A sua ligação à internet requer um nome de utilizador e palavra-passe, mas o seu ISP não aceitou os dados que inseriu. Eles conseguirão certificar-se de que tem a informação correta.  <span class=\"nub\"></span>",
'ISP5t003' : "Diga-lhes que escolheu uma ligação dinâmica, mas que não conseguiu obter um endereço IP.",
'ISP5t007' : "Um endereço IP identifica um router ou outro dispositivo na internet. O seu ISP não está a dar um endereço ao seu router e sem um endereço IP não consegue ligar-se. Tal sugere que há algo de errado com o seu ISP, ou a sua ligação não é uma ligação dinâmica.  <span class=\"nub\"></span>",
'ISP6t003' : "Diga-lhes que escolheu uma ligação estática, mas que não conseguiu ligar-se à internet.",
'ISP6t007' : "Utilizamos uma ligação estática quando o seu ISP lhe tiver atribuído um ou mais endereços IP específicos a utilizar.  <span class=\"nub\"></span>",
'ISP7t003' : "Diga-lhes que as suas definições VPI/VCI não estão a funcionar e gostaria de lhes dar os números corretos.",
'ISP7t007' : "O VPI e VCI dizem ao seu router qual o caminho a utilizar para falar com o seu ISP. Não fomos capazes de detetar as definições certas. <span class=\"nub\"></span>",
'Network24Passkey' : "{SUBSTITUIR POR PALAVRA-PASSE 2.4}",
'Network24SSID' : "{SUBSTITUIR POR SSID 2.4}",
'p100t002' : "Ligue-se à Internet.",
'p100t003' : "Está ligado ao seu novo router, então vamos pô-lo a comunicar com o seu Fornecedor de serviço de internet (ISP).",
'p100t004' : "Ligue-se à Internet.",
'p100t005' : "Está ligado ao seu novo router, então vamos pô-lo a comunicar com o seu Fornecedor de serviço de internet (ISP).",
'p100t007' : "Detetar a minha ligação",
'p100t008' : "Se tiver a certeza do seu tipo de ligação, pode <a href=\"700-SelectConnection.htm\" id=\"p100a009\" tid=\"p100t009\">configurá-la manualmente &raquo;</a>, ou ir diretamente para o <a href=\"000-Dashboard.htm\" id=\"p100a010\" tid=\"p100t010\">painel &raquo;</a>.",
'p100t009' : "configurá-la manualmente &raquo;",
'p100t010' : "painel &raquo;",
'p100t013' : "Neste momento, estamos a apresentar as páginas em&nbsp;",
'p100t024' : "Uma configuração quase automática",
'p100t025' : "Primeiro, iremos verificar automaticamente a sua ligação por cabos e detetar o tipo de ligação que tem com o seu fornecedor de serviços de Internet (ISP). Deve haver muito pouco que tenha de fazer. Depois iremos certificar-nos de que o software do seu router está atualizado. <span class=\"nub\"></span>",
'p1010MRt001' : "Estamos a ter problemas em comunicar com o seu modem.",
'p1010MRt002' : "Pensamos que haja um problema de ligação de fios.",
'p1010MRt003' : "Aqui está o que pode fazer para corrigir isto:",
'p1010MRt004' : "Certifique-se de que o seu modem/router está ligado à sua ficha telefónica que tem a Internet. Deve existir um cabo de rede a ligar a sua porta ADSL no modem-router (a porta cinzenta no topo) à ficha de telefone.",
'p1010MRt005' : "Certifique-se de que o modem está ligado. O adaptador de alimentação deve estar ligado nas duas extremidades e uma ou mais luzes do modem devem estar acesas.",
'p1010MRt006' : "Deve existir um cabo de rede a ligar o seu modem à porta amarela no seu router. Este cabo transporta o sinal do modem para o router; sem ele não consegue ficar online.",
'p1010MRt007' : "Caso estejam como devem estar, deve tentar reiniciar o seu modem, desligando a sua fonte de alimentação, esperar quinze segundos e depois voltar a ligá-la. Se o seu modem tiver uma bateria, em vez disso poderá ter de encontrar o botão de reiniciar do modem e utilizá-lo.",
'p1010MRt008' : "Eis como devem parecer as suas ligações:",
'p1010MRt009' : "Iremos continuar à procura de uma ligação enquanto verifica.",
'p1010MRt010' : "A dificuldade de ligação de cabos mais comum é entre o modem e o router. É importante que verifique ambas as extremidade do cabo. Uma das extremidades deve estar ligada à porta amarela no seu novo router; a outra extremidade deve ser ligada a uma porta semelhante no seu modem. Fabricantes de modem diferentes fazem a etiquetagem das portas de forma diferente; pode encontrá-las assinaladas como \"data\", \"LAN\", \"network\" ou \"Ethernet\".  <span class=\"nub\"></span>",
'p1020t001' : "Estamos a ter problemas em comunicar com o seu fornecedor de serviço de internet.",
'p1020t002' : "Reinicie o seu modem-router.",
'p1020t003' : "Não estamos a obter uma ligação à internet, vamos tentar reiniciar o seu modem-router.",
'p1020t004' : "Desligue o seu modem-router. Normalmente isto envolve usar um interruptor no modem-router ou simplesmente desligá-lo da fonte de alimentação.",
'p1020t005' : "Aguarde 15 segundos.",
'p1020t006' : "Volte a ligar o seu modem-router.",
'p1020t007' : "Após alguns segundos, as luzes irão ligar-se e deve estabelecer contacto com o seu ISP.",
'p1020t008' : "Se o problema persistir, contacte o seu ISP para resolução de problemas da sua conta.",
'p1020t009' : "Vamos esperar que o seu modem-router se desligue e volte a ligar e depois iremos automaticamente continuar.",
'p1020t010' : "Porquê reiniciar o modem?",
'p1020t011' : "Alguns modems precisam de ser reiniciados antes de comunicarem com um novo router ou com um computador que não lhes seja familiar. E se houver um \"soluço\" no seu fornecedor e serviço de internet, o modem  pode perder a ligação de forma inesperada. Conseguimos ver o seu modem, mas não a Internet, pelo que um reiniciar rápido provavelmente resolverá o problema.<span class=\"nub\"></span>",
'p1100t001' : "Está disponível uma atualização de firmware!",
'p1100t002' : "Recomendamos que atualize o seu router para o firmware mais recente para garantir que tudo funciona corretamente.",
'p1100t003' : "Mostrar-me as novidades",
'p1201t001' : "Bloqueie o painel com uma palavra-passe.",
'p1201t002' : "Insira uma palavra-passe para bloquear o painel:",
'p1201t003' : "Introduza uma palavra-passe.",
'gtSetPassword' : "Definir palavra-passe",
'p1201t005' : "Cancelar",
'p1210t001' : "O painel está bloqueado.",
'p1210t002' : "Introduza a sua palavra-passe:",
'p1210t003' : "Introduza a sua palavra-passe.",
'p1210t004' : "A sua palavra-passe não está correta.",
'p1210t005' : "Deixem-me entrar!",
'p1300t001' : "Um pouco mais de vitaminas.",
'p1300t002' : "Pode retirar mais desempenho da sua ligação de internet, ao configurar o Intellistream. Tal envolve fazer um teste de velocidade.",
'p1300t003' : "Configurar o Intellistream",
'p1300t004' : "Talvez mais tarde",
'p1302t001' : "O firmware está atualizado.",
'p1316t001' : "A instalação do firmware atualizado falhou - tente novamente, clicando em \"Procurar Novo Firmware\"",
'p1318t001' : "O ficheiro de atualização não é do tipo ou versão correta para este dispositivo. A atualização falhou. Obtenha o ficheiro correto e volte a tentar",
'p1333t001' : "O seu firmware foi atualizado com sucesso.",
'p1400t001' : "Aproveitar ao máximo a sua porta USB.",
'p1400t002' : "Existe algum software opcional que pode instalar que o irá ajudar a tirar o máximo proveito da porta USB no seu router.",
'p1400t003' : "Mostrem-me o software opcional",
'p1500t001' : "Está aqui.",
'p1500t002' : "Parece que se encontra no <span tid=\"gtCurrTimezone\">fuso horário de {SUBSTITUIR ESTE INTERVALO PELA descrição de ID da Belkin TZ}</span> Europa/Helsínquia. Correto?",
'p1500t003' : "Sim, correto",
'p1500t004' : "Deixe-me  escolher",
'p200t001' : "A estabelecer ligação...",
'p200t002' : " Estamos a verificar as ligações físicas do seu router.",
'p202At001' : "Ainda a verificar...",
'p202At002' : " Estamos a detetar o tipo de ligação do seu fornecedor de serviço de Internet. Isto pode demorar alguns minutos.",
'p202Bt001' : "Ainda a verificar...",
'p202Bt002' : " A verificar se o seu fornecedor de serviço de internet requer uma palavra-passe. Isto pode demorar alguns minutos.",
'p202Ct001' : "Ainda a verificar...",
'p202Ct002' : " A testar agora a ligação.",
'p202t001' : "A estabelecer ligação...",
'p202t002' : " Estamos a detetar o tipo de ligação do seu fornecedor de serviço de Internet.",
'p208t001' : "Tem os números VPI/VCI à mão?",
'p208t002' : "A fim de ficar online, precisa de inserir os números VPI e VCI. Eles identificam o caminho de comunicação que o seu ISP deseja utilizar.",
'p208t003' : "O seu Fornecedor de Serviço de Internet deveria ter-lhe fornecido estes números. Se não os conseguir encontrar, contacte o seu ISP.",
'p208t006' : "0",
'p208t007' : "0",
'p208t009' : "Experimentar a minha ligação",
'p208t011' : "VPI e VCI",
'p208t012' : "O Identificador de Caminho Virtual e Identificador de Circuito Virtual dizem ao seu router qual o caminho que deve de ser utilizado para falar com o seu ISP. Existe um conjunto de definições comuns que tentamos automaticamente antes de pedir a sua ajuda.<span class=\"nub\"></span>",
'p209t001' : "Há algo de errado com estas definições.",
'p209t002' : "O seu ISP não gostou desses números VPI/VCI. Mais uma vez?",
'p210CXt001' : "Tem uma ligação PPPoE.",
'p210CXt002' : "Esta requer um nome de utilizador e palavra-passe para aceder à internet.",
'p210CXt004' : "<strong>O seu fornecedor de serviço de Internet deveria ter-lhe fornecido esta informação. Se não as conseguir encontrar, contacte o seu ISP.</strong>",
'p210CXt006' : "0",
'p210CXt007' : "0",
'p210CXt016' : "Experimentar a minha ligação",
'p210CXt017' : "PPPoE",
'p210CXt018' : "O Protocolo Point-to-Point Protocol over Ethernet cria uma ligação segura entre o router e o ISP. É normalmente utilizado por empresas de telecomunicações.<span class=\"nub\"></span>",
'p210DXt001' : "Tem uma ligação PPPoA.",
'p210DXt002' : "Esta requer um nome de utilizador e palavra-passe para aceder à internet.",
'p210DXt004' : "<strong>O seu fornecedor de serviço de Internet deveria ter-lhe fornecido esta informação. Se não as conseguir encontrar, contacte o seu ISP.</strong>",
'p210DXt006' : "0",
'p210DXt007' : "0",
'p210DXt016' : "Experimentar a minha ligação",
'p210DXt017' : "PPPoA",
'p210DXt018' : "O Protocolo Point-to-Point Protocol over ATM cria uma ligação segura entre o router e o ISP. É normalmente utilizado por empresas de telecomunicações.<span class=\"nub\"></span>",
'p210t001' : "Tem uma ligação DSL PPPoE.",
'p210t002' : "Irá precisar de um nome de utilizador e palavra-passe para aceder à internet.",
'p210t003' : "<strong>O seu fornecedor de serviço de Internet (ISP) deveria ter-lhe fornecido esta informação. Se não as conseguir encontrar, contacte o seu ISP.</strong>",
'p210t005' : "Nome de utilizador do ISP:",
'p210t009' : "Experimentar a minha ligação",
'p210t010' : "PPPoE",
'p210t011' : "O Protocolo Point-to-Point Protocol over Ethernet cria uma ligação segura entre o router e o ISP. É normalmente utilizado por empresas de telecomunicações.<span class=\"nub\"></span>",
'p211t001' : "A estabelecer ligação...",
'p211t002' : " Estamos a tentar iniciar sessão no seu fornecedor de serviço de Internet. Isto pode demorar até dois minutos, ou mais.",
'p212DXt001' : "Há algo errado com as suas definições PPPoA.",
'p212DXt002' : "O seu nome de utilizador, palavra-passe, ou ambos, estão incorretos. Volte a tentar. Se não conseguir encontrar a informação correta, contacte o seu ISP.",
'p212t001' : "Há algo errado com as suas definições PPPoE.",
'p212t002' : "O seu nome de utilizador, palavra-passe, ou ambos, estão incorretos. Volte a tentar. Se não conseguir encontrar a informação correta, contacte o seu ISP.",
'p220t002' : "Para terminar a ligação e aceder à Internet, insira um nome de utilizador, palavra-passe e endereço de serviço.",
'p220t003' : "<strong>O seu fornecedor de serviço de Internet deveria ter-lhe fornecido esta informação. Se não os conseguir encontrar, contacte o seu ISP.</strong>",
'p220t006' : "Nome de utilizador do ISP:",
'p220t007' : "Service Address (endereço IP do serviço):",
'p220t010' : "Experimentar a minha ligação",
'p220t013' : "Tem uma ligação L2TP ou PPTP.",
'p220t014' : "Ou escolher manualmente a minha ligação &raquo;",
'p220t015' : "L2TP e TP",
'p220t016' : "Ambos L2TP (Camada 2 do Protocolo de Tunnelling) e PPTP (Protocolo de Tunnelling Point-to-Point) criam uma ligação privada e encriptada entre si e o seu ISP.<span class=\"nub\"></span>",
'p221t001' : "A estabelecer ligação...",
'p221t002' : " Estamos a tentar iniciar sessão no seu fornecedor de serviço de Internet. Isto pode demorar até 2 minutos.",
'p222t002' : "O seu nome de utilizador, palavra-passe, ou ambos, estão incorretos. Volte a tentar. Se não conseguir encontrar a informação correta, contacte o seu ISP.",
'p222t004' : "Há algo errado com as suas definições.",
'p2300t001' : "A sua Versão de Firmware Instalada:",
'p2300t002' : "Atualizar o firmware a partir do ficheiro guardado localmente:",
'p2300t006' : "Tem a certeza que deseja instalar {{file}}?",
'p2300t010' : "Procurar novo firmware",
'p2400t006' : "As suas definições atuais serão substituídas. Tem a certeza que deseja carregar {{file}}?",
'p2410t001' : "Tem a certeza de que deseja Restaurar as Predefinições de Fábrica?",
'p2410t002' : "Clicar em \"Sim\" irá apagar as suas definições de router, como nome e palavra-passe, e irá substitui-las pelas definições originais de fábrica.",
'p300t005' : "Agora está online.",
'p310t001' : "Está disponível uma atualização!",
'p310t001x' : "Esta atualização (v2.1.0C) inclui:",
'p310t002' : "Para instalar o novo firmware, leia e aceite o contrato de licença.",
'p310t003' : "Contrato de licença",
'p310t004' : "Aceito o contrato de licença.",
'p310t005' : "Instalar atualização",
'p310t006' : "O que é o firmware?",
'p310t007' : "Firmware é o software que o seu router executa. Atualizámos o firmware para melhorar o desempenho do seu router, por isso é bom que se certifique de que tem o mais recente.  <span class=\"nub\"></span>",
'p315t001' : "A transferir novo firmware.",
'p315t002' : "Progresso de download:",
'p315t003' : "O que é o firmware?",
'p315t004' : "Firmware é o software que o seu router executa. Atualizámos o firmware para melhorar o desempenho do seu router, por isso é bom que se certifique de que tem o mais recente.  <span class=\"nub\"></span>",
'p320t001' : "A instalar o novo firmware.",
'p320t002' : "Assim que o novo firmware tiver sido aplicado, iremos reiniciar o seu router para terminar a instalação.",
'p320t004' : "O que é o firmware?",
'p320t005' : "Firmware é o software que o seu router executa. Atualizámos o firmware para melhorar o desempenho do seu router, por isso é bom que se certifique de que tem o mais recente.  <span class=\"nub\"></span>",
'p320t006' : "Tal irá demorar mais ou menos três minutos. Progresso de atualização:",
'p320t010' : "Assim que o novo firmware tiver sido aplicado, iremos reiniciar o seu modem para terminar a instalação.",
'p321t001' : "A reiniciar o router",
'p321t002' : "A reiniciar o modem",
'p321t003' : "Agora que o firmware foi instalado, precisamos de reiniciar o router para o tornar oficial.",
'p321t004' : "A reiniciar:",
'p321t005' : "Atualizações de firmware",
'p321t006' : "Firmware é o software utilizado para implementar protocolos de rede e segurança. As atualizações melhoram a fiabilidade e funcionalidade, por isso é inteligente da sua parte que se certifique de que tem a versão mais recente.<span class=\"nub\"></span>",
'p321t010' : "Agora que o firmware foi instalado, precisamos de reiniciar o modem para o tornar \"oficial\".",
'p330t001' : "A verificar a velocidade de ligação...",
'p330t002' : "Um teste rápido de velocidade irá ajudar o router a otimizar a ligação de internet. Isto deverá demorar cerca de um ou dois minutos.",
'p331t001' : "O seu firmware está atualizado.",
'p332t001' : "Iremos tentar a atualização do firmware mais tarde.",
'p333t001' : "O seu firmware foi atualizado.",
'p334t001' : "Os seus resultados do teste de velocidade!",
'p334t002' : "Eis o que sabemos:",
'p334t003' : "Velocidade de  Download",
'p334t004' : "Mb/s",
'p334t005' : "Velocidade de upload",
'p334t006' : "Mb/s",
'p340t002' : " Estamos a ligarmo-nos novamente ao seu router para que possamos continuar.",
'p341t001' : "Reinicie o seu router",
'p341t002' : "Estamos a ter dificuldades em ligarmo-nos novamente ao seu router. Um reiniciar rápido deve ajudar.",
'p341t003' : "Desligue o cabo de alimentação do router, espere alguns segundos e volte a ligá-lo. Assim que o router tiver uma luz azul estável estamos prontos a ligarmo-nos.",
'p341t003w' : "Desligue o router, espere alguns segundos e volte a ligá-lo. Assim que o router tiver uma luz azul estável estamos prontos a ligarmo-nos.",
'p341t004' : " Vamos esperar que o seu router regresse ao ativo enquanto realiza esta ação.",
'p342t001' : " Estamos a ligarmo-nos novamente ao seu router para que possamos continuar.",
'p342t002' : "Pode ter de voltar a selecionar a sua rede sem fios <span tid=\"Network24SSID\">({SUBSTITUIR COM SSID 2.4})</span> entre a lista de redes sem fios, para o ajudar.",
'p343t002' : " Estamos a ligarmo-nos novamente ao seu router para continuar.",
'p343t003' : "Pode ter de voltar a selecionar a sua rede sem fios <span tid=\"Network24SSID\">({SUBSTITUIR COM SSID 2.4})</span> para retomar o funcionamento.",
'p344t001' : "Reinicie o seu router.",
'p344t002' : "Estamos a ter dificuldades em ligarmo-nos novamente ao seu router. Um reiniciar rápido deve ajudar.",
'p344t003' : "Desligue o cabo de alimentação do router, espere 15 segundos e volte a ligá-lo. Assim que o router tiver uma luz azul estável iremos voltar a ligarmo-nos.",
'p344t003w' : "Desligue o router, espere 15 segundos e volte a ligá-lo. Assim que o router tiver uma luz azul estável iremos voltar a ligarmo-nos.",
'p344t004' : " Vamos esperar que o seu router regresse ao ativo enquanto realiza esta ação.",
'p400f010' : "WPA2",
'p400f011' : "WPA/WPA2",
'p400f012' : "WEP",
'p400f013' : "Abrir",
'p400t001' : "Ligue tudo de forma mais rápida.",
'p400t002' : "Dar ao seu novo router o mesmo nome de rede e palavra-passe que do router antigo irá ajudar a que os seus dispositivos se liguem imediatamente.",
'p400t004' : "Nome da rede:",
'p400t008' : "Tipo de segurança: <em class=\"hide-on-phones\">(WPA2 é a mais segura.)</em>",
'p400t014' : "A sua banda de 5Ghz irá ter o mesmo nome, mas com \".media\" acrescentado no fim.",
'p400t015' : "Caso o deseje, pode mudar isto mais tarde.",
'p400t017' : "Guardar e continuar",
'p400t018' : "Porque devo dar um novo nome à minha rede?",
'p400t019' : "Quaisquer dispositivos sem fios que anteriormente estavam ligados ao seu router antigo, irão ligar-se automaticamente ao seu novo router caso utilize o mesmo nome e palavra-passe de rede. Também, quando pesquisar pela sua rede nos dispositivos é mais fácil encontrar um nome único.<span class=\"nub\"></span>",
'p450a009' : "Excelente, o que se segue?",
'p450t001' : "As suas alterações foram guardadas.",
'p450t002' : "Aqui está o seu novo nome de rede e respetiva palavra-passe",
'p450t003' : "Caso tenha utilizado o seu nome e palavra-passe de rede antigos, os seus dispositivos sem fios devem estar neste momento a ligar-se novamente.",
'p450t004' : "Name (nome):",
'p450t008' : "O seu router vem com uma tira de papel no fundo, com um local para escrever o seu novo nome de rede. Desta forma sabe sempre onde o encontrar quando precisar.",
'p450t011' : "Caso tenha utilizado o seu nome e palavra-passe de rede antigos, a maioria dos dispositivos irá ligar-se automaticamente da próxima vez que os iniciar. Os outros irão precisar que volte a selecionar a sua rede e irão ligar-se automaticamente após isso. Existem instruções para Windows, OS X, iOS e Android no seu Guia Rápido de Instalação.  <span class=\"nub\"></span>",
'p451a009' : "Excelente, o que se segue?",
'p451t001' : "Sem alterações.",
'p451t002' : "O nome e palavra-passe da sua rede não foram alterados.",
'p451t003' : "Terá de dizer a cada um dos seus dispositivos sem fios o seu nome e palavra-passe de rede:",
'p451t004' : "Name (nome):",
'p451t008' : "O seu router vem com uma tira de papel no fundo, com um local para escrever o nome da sua rede. Desta forma sabe sempre onde o encontrar quando precisar.",
'p451t011' : "Terá de \"dizer\" a cada um dos seus dispositivos sem fios as informações da sua nova rede. Existem instruções para Windows, OS X, iOS e Android no seu Guia Rápido de Instalação.  <span class=\"nub\"></span>",
'p500t001' : "Registar o seu router.",
'p500t002' : "O registo é rápido e pode poupar muito tempo caso alguma vez precise do suporte de cliente.",
'p500t004' : "Porquê registar?",
'p500t005' : "Saber um pouco sobre si irá ajudar-nos a ajudá-lo de forma mais rápida caso alguma vez precise de nós.<span class=\"nub\"></span>",
'p500tCancel' : "Registar-se mais tarde &raquo;",
'p500tSubmit' : "Completar registo",
'p600t001' : "Visite a página de software opcional do seu router para recolher software igual para outros computadores e dispositivos móveis.",
'p600t002' : "Obrigado. Agora leve-me ao painel",
'p600t003' : "Software opcional",
'p600t004' : "As ferramentas de software podem ajudá-lo a aproveitar ao máximo as funcionalidades avançadas que o seu router oferece. Estão disponíveis downloads para Apple iOS, Android, Windows e OS X.  <span class=\"nub\"></span>",
'p601t001' : "<strong>Obrigado por se registar!</strong>",
'p700MRt001' : "Não fomos capazes de configurar automaticamente a sua ligação. Diga-nos um pouco mais para que o possamos ajudar a ligar-se.",
'p700MRt002' : "Que tipo de ligação está a configurar?",
'p700MRt003' : "A minha ligação é:",
'p700MRt005' : "Ligação dinâmica  (1483 Bridge)",
'p700MRt007' : "Ligação PPPoE",
'p700MRt009' : "Ligação PPPoA",
'p700MRt011' : "Ligação estática (IPoA)",
'p700MRt014' : "Não tenho a certeza do meu tipo de ligação:",
'p700MRt016' : "Tentar novamente automático",
'p700MRt017' : "Tipos de ligação",
'p700MRt018' : "<span class=\"black\">Dinâmica —</span> Estas ligações estão a tornar-se mais comuns para alguns fornecedores DSL.",
'p700MRt019' : "<span class=\"black\">PPPoE e PPoA —</span> Estas ligações requerem um nome de utilizador e palavra-passe fornecidos pelo ISP.",
'p700MRt021' : "<span class=\"black\">Estática —</span> Requer parâmetros personalizados que são únicos para cada utilizador.<span class=\"nub\"></span>",
'p700t001' : "Não fomos capazes de configurar automaticamente a sua ligação. Diga-nos um pouco mais para que o possamos ajudar a ligar-se.",
'p700t002' : "Que tipo de ligação está a configurar?",
'p700t003' : "A minha ligação é:",
'p700t005' : "Ligação dinâmica",
'p700t007' : "Ligação PPPoE",
'p700t008' : "Ligação L2TP ou PPTP",
'p700t013' : "Ligação estática",
'p700t014' : "Não tenho a certeza do meu tipo de ligação:",
'p700t914' : "Se ainda não conseguir determinar o seu tipo de ligação, contacte o seu Fornecedor de Serviço de Internet (ISP).",
'p700t016' : "Tentar novamente automático",
'p700t017' : "Tipos de ligação",
'p700t018' : "<span class=\"black\">Dinâmica —</span> Comum para a maioria dos fornecedores ISP de cabo e de fibra e alguns fornecedores DSL.",
'p700t019' : "<span class=\"black\">PPPoE e PPTP —</span> É necessário um nome de utilizador e palavra-passe fornecidos pelo ISP.",
'p700t021' : "<span class=\"black\">Estática —</span> Requer parâmetros personalizados que são únicos para cada utilizador.<span class=\"nub\"></span>",
'p701MRt001' : "Escolheu uma ligação dinâmica.",
'p701MRt002' : "O seu fornecedor de serviço de Internet poderá ter-lhe fornecido definições de configuração adicionais.",
'p701MRt004' : "Definições dinâmicas:",
'p701MRt006' : "0",
'p701MRt007' : "0",
'p701MRt016' : "Experimentar a minha ligação",
'p701MRt017' : "Ligações dinâmicas",
'p701MRt018' : "A ligação dinâmica é automaticamente configurada  assim que a ligação com o ISP for estabelecida.<span class=\"nub\"></span>",
'p701t001' : "Estabelecer uma ligação dinâmica...",
'p701t002' : " Estamos a pedir ao seu fornecedor de serviço de internet uma ligação.",
'p702t001' : "Reiniciar modem...",
'p702t002' : "Estamos a preparar-nos para experimentar um tipo de ligação diferente, para isso reiniciando o seu modem.",
'p710MRt001' : "Escolheu uma ligação estática.",
'p710MRt002' : "O seu fornecedor de serviço de Internet deverá ter-lhe fornecido as definições de configuração estática. Se não a conseguir encontrar, contacte o seu ISP.",
'p710MRt004' : "Definições estáticas:",
'p710MRt005' : "IP Address (endereço IP):",
'p710MRt006' : "0",
'p710MRt007' : "Subnet Mask (máscara de sub-rede):",
'p710MRt008' : "0",
'p710MRt009' : "Gateway predefinido:",
'p710MRt010' : "0",
'p710MRt011' : "Servidor DNS (primário):",
'p710MRt012' : "0",
'p710MRt013' : "Servidor DNS (secundário):",
'p710MRt014' : "0",
'p710MRt015' : "Nota: Nem todos os ISP requerem um servidor DNS secundário.",
'p710MRt016' : "Experimentar a minha ligação estática",
'p710MRt017' : "Ligações estáticas",
'p710MRt018' : "Uma ligação estática é configurada manualmente, mas fornece um endereço consistente ao seu router, o qual pode obter mais facilmente do exterior da sua rede. As ligações estáticas não são comuns em serviços de internet residenciais e normalmente são mais dispendiosas. <span class=\"nub\"></span>",
'p710t001' : "Escolheu uma ligação estática.",
'p710t002' : "O seu fornecedor de serviço de Internet deverá ter-lhe fornecido as definições de configuração estática. Se não as conseguir encontrar, contacte o seu ISP.",
'p710t004' : "Definições estáticas:",
'p710t005' : "IP Address (endereço IP):",
'p710t006' : "0",
'p710t007' : "Subnet Mask (máscara de sub-rede):",
'p710t008' : "0",
'p710t009' : "Gateway predefinido:",
'p710t010' : "0",
'p710t011' : "Servidor DNS (primário):",
'p710t012' : "0",
'p710t013' : "Servidor DNS (secundário):",
'p710t014' : "0",
'p710t015' : "Nota: Nem todos os ISP requerem um servidor DNS secundário.",
'p710t016' : "Experimentar a minha ligação estática",
'p710t017' : "Ligações estáticas",
'p710t018' : "Uma ligação estática é configurada manualmente, mas fornece um endereço consistente para o seu router, que pode ser mais facilmente acedido do exterior da sua rede. As ligações estáticas não são comuns em serviços de internet residenciais e normalmente são mais dispendiosas.  <span class=\"nub\"></span>",
'p711t001' : "Estabelecer uma ligação estática...",
'p711t002' : " Estamos a pedir ao seu fornecedor de serviço de internet uma ligação.",
'p712t001' : "Há algo de errado com as suas definições estáticas.",
'p712t002' : "Um dos endereços ou outro dos itens que inseriu não estão corretos, mas não lhe conseguimos dizer qual.",
'p800t001' : "Aplicar as suas alterações.",
'p800t002' : "Estamos a aplicar as suas alterações e a reiniciar o router para o tornar oficial.",
'p801t002' : " Estamos à espera de que o router se volte a ligar. Assim que tal acontecer iremos continuar.",
'p802t002' : "Precisamos de uma ligação sem fios ao router para continuar.",
'p802t004' : "Ir para o menu de rede sem fios do equipamento",
'p802t005' : "Selecione a sua rede, chamada <strong tid=\"Network24SSID\">{SUBSTITUIR POR SSID 2.4}</strong>",
'p802t007' : "Insira a sua palavra-passe, que é <strong tid=\"Network24Passkey\">{SUBSTITUIR POR  PALAVRA-PASSE 2.4}</strong>",
'p802t009' : "Será ligado ao router e iremos continuar.",
'p802t010' : " À espera que o router se volte a ligar.",
'p803t002' : "Precisamos de uma ligação sem fios ao router para continuar.",
'p803t003' : "Uma vez que alterou o nome de rede, terá de voltar a selecionar a sua rede sem fios:",
'p803t004' : "Ir para o menu de rede sem fios do equipamento",
'p803t005' : "Selecione a sua rede, chamada <strong tid=\"Network24SSID\">{SUBSTITUIR POR SSID 2.4}</strong>",
'p803t007' : "Insira a sua palavra-passe, que é <strong tid=\"Network24Passkey\">{SUBSTITUIR POR  PALAVRA-PASSE 2.4}</strong>",
'p803t009' : "Será ligado ao router e iremos continuar.",
'p803t010' : " À espera que se volte a ligar.",
'p804t001' : "O seu dispositivo não se voltou a ligar.",
'p804t002' : "Por vezes isto acontece e é muito fácil de corrigir.",
'p804t025' : "Se tiver um dispositivo com capacidade de internet junto de si, visite a seguinte localização para obter informação útil: <strong>http://belk.in/PMuxOg</strong>",
'p804t026' : "Se isto não funcionar, ligue o cabo Ethernet diretamente entre o seu modem e o computador.",
'p804t027' : " Assim que virmos uma ligação iremos continuar automaticamente.",
'p900t001' : "Precisa de reiniciar o seu modem.",
'p900t002' : "O seu modem não está a comunicar.",
'p900t003' : "Realize os seguintes passos para reiniciar o seu modem:",
'p900t004' : "Desligar o seu modem. Normalmente isto envolve acionar um interruptor de ligar/desligar no seu modem ou simplesmente desligá-lo da fonte de alimentação. Alguns modems têm uma bateria e para esses terá de encontrar o botão de reiniciar do modem.",
'p900t005' : "Aguarde 15 segundos.",
'p900t006' : "Volte a ligar o seu modem.",
'p900t007' : "Após alguns segundos, as luzes irão ligar-se e estará pronto para comunicar com o router.",
'p900t008' : "Vamos esperar que o seu router se desligue e volte a ligar e depois iremos continuar automaticamente.",
'p900t009' : "Porquê reiniciar o modem?",
'p900t010' : "Alguns modems precisam de ser reiniciados para comunicarem com um novo router ou um computador que não lhes seja familiar. Conseguimos ver o seu modem, mas não está a comunicar com o seu novo router; um reiniciar rápido pode ajudar a resolver o problema.<span class=\"nub\"></span>",
'p901t001' : "Reinicie o seu modem agora...",
'p901t002' : " Estamos à espera que o seu modem se desligue e volte a ligar.",
'p902t001' : "O seu modem desligou-se, boa!…",
'p902t002' : " Estamos à espera que ele volte a acordar.",
'p903t001' : "Precisa de mais tempo?",
'p903t002' : " Estamos à espera que o seu modem se reinicie. Precisa de mais tempo?",
'p903t005' : "Normalmente isto envolve acionar um interruptor de ligar/desligar no seu modem ou simplesmente desligá-lo da fonte de alimentação, mas alguns modens têm uma bateria - nesses precisará de encontrar o botão de reset do modem.",
'p904t001' : "Precisa de mais tempo?",
'p904t002' : " Estamos à espera que o seu modem se volte a ligar. Precisa de mais tempo?",
'p905t001' : "Estamos a ver novamente o seu modem…",
'p905t002' : " Estamos à espera que se sincronize com o seu ISP. Isto deverá demorar um ou dois minutos.",
'p950IMRt001' : "Não fomos capazes de detetar uma ligação à sua linha ADSL.",
'p950IMRt002' : "Verifique se existe um cabo de rede a ligar a sua tomada de parede ADSL à porta cinzenta do seu router.",
'p950IMRt004' : "Pensamos que haja um problema de ligação de fios.",
'p950IMRt005' : "Deve existir um cabo de rede a ligar a porta cinzenta do seu router à sua tomada ADSL/telefone. Este cabo transporta o sinal do seu ISP para o seu router - sem ele, não consegue ficar online. Verifique que este cabo está ligado corretamente.",
'p950IMRt006' : "Eis como deve parecer esta ligação:",
'p950IMRt007' : "Deve existir um cabo de rede a ligar a sua tomada de parede ADSL à ficha de alimentação do router (que tem um modem integrado). Este cabo transporta o sinal do seu ISP para o seu router - sem ele, não consegue ficar online.",
'p950IMRt009' : "Eis como deve parecer esta ligação:",
'p950IMRt010' : "Iremos continuar à procura de uma ligação enquanto verifica.",
'p950IMRt014' : "Ligações de cabos",
'p950IMRt015' : "A dificuldade de ligação de cabos mais comum é entre a tomada de parede e o router. É importante que verifique ambas as extremidade do cabo. Uma das extremidades deve estar ligada à porta cinzenta no seu novo router; a outra extremidade deve ser ligada à sua tomada ADSL. Em alguns casos, pode ser necessário um filtro entre a tomada de parede e o cabo.<span class=\"nub\"></span>",
'p950PMt001' : "Não fomos capazes de detetar uma ligação à sua linha ADSL.",
'p950PMt002' : "Certifique-se de que existe uma ligação de rede entre o seu router e a sua tomada de fonte de alimentação (que tem um modem integrado).",
'p950PMt004' : "Pensamos que haja um problema de ligação de fios.",
'p950PMt005' : " Verifique se o cabo de rede que se divide do cabo de alimentação do modem está ligado à porta WAN amarela do seu router. Sem esta ligação de rede não consegue ficar online.",
'p950PMt009' : "Eis como deve parecer esta ligação:",
'p950PMt010' : "Iremos continuar à procura de uma ligação enquanto verifica.",
'p950PMt011' : "Ligações de cabos",
'p950PMt012' : "A dificuldade de ligação de cabos mais comum é entre a tomada de parede e o modem. É importante que verifique ambas as extremidade do cabo. Uma das extremidades deve estar ligada à fonte de alimentação do seu novo router; a outra extremidade deve ser ligada à sua tomada ADSL. Em alguns casos, pode ser necessário um filtro entre a tomada de parede e o cabo.<span class=\"nub\"></span>",
'p950t001' : "Não detetámos uma ligação com o seu modem.",
'p950t002' : "Certifique-se de que o seu modem está ligado à ficha e está ligado.",
'p950t003' : "Certifique-se de que um cabo ethernet está ligado entre o modem e o router.",
'p950t004' : "Pensamos que haja um problema de ligação de fios.",
'p950t005' : "O seu modem deve estar ligado e deve existir um cabo Ethernet ligado ao seu modem e à porta amarela no seu router.",
'p950t006' : "Verifique o seguinte:",
'p950t007' : "Certifique-se de que o modem está ligado. Verifique se o adaptador de alimentação está ligado nas duas extremidades e de que uma ou mais luzes do modem estão ligadas.",
'p950t008' : "Deve existir um cabo Ethernet ligado entre o seu modem e a porta amarela no seu router. Este cabo transporta o sinal do modem para o router; sem ele não consegue ficar online.",
'p950t009' : "As suas ligações devem ter o seguinte aspeto:",
'p950t010' : "Iremos continuar à procura de uma ligação enquanto verifica.",
'p950t011' : "Ligações de cabos",
'p950t012' : "O problema de configuração mais comum são os cabos entre o modem e o router. Uma das extremidades deve estar ligada à porta amarela no seu novo router; a outra extremidade deve ser ligada a uma porta semelhante no seu modem. Certifique-se de que ambas as fichas estão completamente inseridas nas portas. Fabricantes de modem diferentes fazem a etiquetagem das portas de forma diferente; pode encontrá-las assinaladas como \"data\", \"LAN\", \"network\" ou \"Ethernet\".<span class=\"nub\"></span>",
'p951IMRt001' : "Precisa de mais tempo?",
'p951IMRt002' : " Estamos à espera que se ligue à sua linha ADSL. Precisa de mais tempo?",
'p951t001' : "Precisa de mais tempo?",
'p951t002' : " Estamos à espera que o seu modem se volte a ligar. Precisa de mais tempo?",
'pDAt001' : "Administrador de duplicados",
'pDAt002' : "Este dispositivo está a ser gerido por  <span id=\"ipaddr\"></span> atualmente!",
'PIC_blocked_content' : "O Controlo Parental de Internet está ativo e o equipamento está atualmente bloqueado à internet. Prima o botão em baixo para gerir as definições de Controlo Parental de Internet.",
'PIC_blocked_title' : "Atualmente, este equipamento está bloqueado à internet.",
'PIC_S1t0006' : "Agendar acesso à internet:",
'PIC_S1t006' : "Recentemente na sua rede:",
'PIC_S2t003' : "Noites de escola",
'PIC_S2t004' : "Fins-de-semana",
'PIC_S2t005' : "(Domingo - Quinta-feira)",
'PIC_S2t006' : "(Sexta-feira - Sábado)",
'PIC-blocked' : "bloqueado",
'PIC-S1dt001' : "Deseja suspender a ligação à internet para toda a sua rede?",
'PIC-S1t001' : "Bloquear todos os dispositivos",
'PIC-S1t003' : "Todos os dispositivos estão desligados da Internet.",
'PIC-S1t004' : "Restaurar acesso",
'PIC-S1t005' : "Atualmente na sua rede:",
'PIC-S1t010' : "Procurar dispositivos:",
'PIC-S1t020' : "O seu agendamento de Controlo Parental de Internet está em pausa",
'PIC-S1t021' : "O router não sabe a hora atual, o que está a fazer com que não seja possível bloquear/desbloquear o seu agendamento de Controlo Parental de Internet.  Tal será resolvido quando o seu router re-estabelecer a hora correta, voltando a ligar-se ao servidor de hora NTP.",
'PIC-S1t022' : "O seu router irá consultar o servidor de hora NTP com intervalos de poucos minutos, ou pode alterar o servidor de hora, visitando<a href=\"#\" tid=\"gtSystemSettings\" style=\"\">Definições do Sistema</a>.",
'PIC-unblocked' : "desbloqueado",
'pNoTime_content' : "O seu router não é capaz de detetar as horas porque perdeu o contacto com o seu servidor de hora NTP. As funções do router baseadas no dia e hora, tal como Controlo Parental de Internet, Modo Eco e Auto-reparação, estão agora em pausa até conseguir voltar a ligar-se a um servidor de hora NTP. <br> <br>O Router irá verificar automaticamente as horas a intervalos de poucos minutos.",
'pNoTime_title' : "Que horas são?",
'pODLAplt001' : "A aplicar pacote de idioma",
'pODLAplt002' : "A alterar o idioma escolhido …",
'pODLDLt001' : "A descarregar pacote de idioma",
'pODLDLt002' : "A obter do servidor o idioma que escolheu…",
'pODLErrt001' : "Lamentamos",
'pODLErrt002' : "OK",
'pStatst004' : "Ver tudo &raquo;",
'Support1t001' : "Não detetámos uma ligação com o seu modem.",
'Support1t002' : "Certifique-se de que o seu modem está ligado à ficha e está ligado.",
'Support1t003' : "Certifique-se de que um cabo ethernet está ligado entre o modem e o router.",
'Support1t004' : "Pensamos que haja um problema de ligação de fios.",
'Support1t005' : "O seu modem deve estar ligado e deve existir um cabo Ethernet ligado ao seu modem e à porta amarela no seu router.",
'Support1t006' : "Verifique o seguinte:",
'Support1t007' : "Certifique-se de que o modem está ligado. Verifique se o adaptador de alimentação está ligado nas duas extremidades e de que uma ou mais luzes do modem estão ligadas.",
'Support1t008' : "Deve existir um cabo Ethernet ligado entre o seu modem e a porta amarela no seu router. Este cabo transporta o sinal do modem para o router; sem ele não consegue ficar online.",
'Support1t009' : "As suas ligações devem ter o seguinte aspeto:",
'Support1t010' : "Assim que tiver terminado estes passos clique em Tentar outra vez.",
'Support7t012' : "Visite <strong>http://belk.in/Q4XXca</strong> usando um dispositivo ligado à internet",
'Support1t016' : "Ligações de cabos",
'Support1t017' : "O problema de configuração mais comum são os cabos entre o modem e o router. Uma das extremidades deve estar ligada à porta amarela no seu novo router; a outra extremidade deve ser ligada a uma porta semelhante no seu modem. Certifique-se de que ambas as fichas estão completamente inseridas nas portas. Fabricantes de modem diferentes fazem a etiquetagem das portas de forma diferente; pode encontrá-las assinaladas como \"data\", \"LAN\", \"network\" ou \"Ethernet\".<span class=\"nub\"></span>",
'Support2t001' : "O seu modem não reiniciou.",
'Support2t002' : "Tente desligar a fonte de alimentação do seu modem.",
'Support2t003' : "O seu modem pode ter um botão de reiniciar que precisa de ser premido.",
'Support2t004' : "Esta a ter dificuldades em reiniciar o seu modem?",
'Support2t005' : "Experimente os seguintes passos para reiniciar o seu modem:",
'Support2t006' : "Desligue a fonte de alimentação do modem.",
'Support2t007' : "Espere que as luzes no modem se apaguem.",
'Support2t008' : "Se as luzes se mantiverem ligadas, o modem pode ter uma bateria de recurso. Algures (muitas vezes na parte de trás) existe um botão de reiniciar. Prima-o.",
'Support2t009' : "As luzes do modem devem desligar-se. Espere alguns segundos antes de voltar a ligar a fonte de alimentação.",
'Support2t010' : "Assim que tiver terminado estes passos clique em Tentar outra vez.",
'Support2t016' : "Porquê reiniciar o modem?",
'Support2t017' : "Alguns modems precisam de ser reiniciados para comunicarem com um novo router ou um computador que não lhes seja familiar. Conseguimos ver o seu modem, mas não está a comunicar com o seu novo router; um reiniciar rápido pode ajudar a resolver o problema.<span class=\"nub\"></span>",
'Support3MRt001' : "Não fomos capazes de detetar uma ligação à sua linha ADSL.",
'Support3MRt002' : "Verifique se existe um cabo de rede entre a sua tomada de parede ADSL e o seu router.",
'Support3MRt003' : "Em algumas áreas, é necessário um filtro.",
'Support3MRt004' : "Temos quase a certeza de que existe um problema de ligação de fios.",
'Support3MRt005' : "Deve existir um cabo a ligar a porta cinzenta no seu router à sua tomada ADSL/telefone.",
'Support3MRt006' : "Verifique se ambas as extremidades do cabo estão completamente encaixadas.",
'Support3MRt007' : "Verifique se o cabo está ligado à porta cinzenta do seu router, em vez de estar ligado a uma das amarelas.",
'Support3MRt008' : "Se lhe foi dado um filtro de linha ADSL, certifique-se de que este se encontra entre o cabo e a sua tomada ADSL.",
'Support3MRt010' : "Verifique se ambas as extremidades do cabo estão completamente encaixadas.",
'Support3MRt011' : "Verifique se o cabo está ligado à porta de rede da fonte de alimentação do seu router.",
'Support3MRt012' : "Se lhe foi dado um filtro de linha ADSL, certifique-se de que este se encontra ligado entre o cabo e a sua tomada ADSL.",
'Support3MRt016' : "Assim que tiver terminado estes passos, estará pronto para tentar novamente.",
'Support3MRt018' : "Insira o seguinte URL num dispositivo ligado à internet e aprenda como corrigir você mesmo o problema: <strong>www.belkin.com/support3mr</strong>",
'Support3MRt021' : "Ligações de cabos",
'Support3MRt022' : "A dificuldade de ligação de cabos mais comum envolve a sua tomada ADSL. É importante que verifique ambas as extremidade do cabo. <span class=\"nub\"></span>",
'Support3MRt050' : "Verifique se existe um cabo de rede entre a fonte de alimentação do seu router e a ficha de telefone.",
'Support3MRt051' : "Deve existir um cabo a ligar a fonte de alimentação do seu router à sua tomada ADSL/telefone.",
'Support3PMt001' : "Não fomos capazes de detetar uma ligação à sua linha ADSL.",
'Support3PMt002' : "Certifique-se de que existe uma ligação de rede entre o seu router e a sua tomada de fonte de alimentação (que tem um modem integrado).",
'Support3PMt004' : "Temos quase a certeza de que existe um problema de ligação de fios.",
'Support3PMt005' : "Deve existir uma ligação de rede entre a porta amarela do seu router e a fonte de alimentação do router.",
'Support3PMt006' : "Olhe para a tomada da fonte de alimentação e encontre o cabo que se divide em duas linhas separadas. Uma destas linhas tem uma ficha ethernet.",
'Support3PMt007' : "Insira a ficha ethernet na porta amarela do router.",
'Support3PMt010' : "Assim que o tiver feito, estará pronto para tentar novamente.",
'Support3PMt012' : "Visite <strong>www.belkin.com/support3PM</strong> usando um dispositivo ligado à internet.",
'Support3PMt016' : "Ligações de cabos",
'Support3PMt017' : "É essencial que se certifique de que existe um conjunto não quebrado de ligações desde a tomada ADSL até ao seu router. O router espera que este sinal venha através da porta amarela. O cabo que vem da fonte de alimentação do router transporta este sinal e a energia ao router; ambas as metades devem ser ligadas ao seu router para que as coisas funcionem como devem. <span class=\"nub\"></span>",
'Support3t001' : "O seu modem não voltou a ligar-se.",
'Support3t002' : "Verifique se o modem está a ser alimentado.",
'Support3t003' : "É possível que tenha de esperar um pouco para que fique disponível.",
'Support3t004' : "Esta a ter dificuldades em reiniciar o seu modem?",
'Support7t005' : "Experimente os seguintes passos para estabelecer uma ligação ADSL:",
'Support7t006' : "Verifique se o cabo de rede do seu modem-router está acoplado a uma tomada telefónica que tenha Internet. Depois clique  em Tentar Novamente e veja se o seu modem-router consegue detetar a Internet.",
'Support7t007' : "Se o seu modem-router partilhar a sua tomada telefónica com um telefone fixo (através de um divisor), substitua o divisor por um divisor-filtro (opcional). Depois clique  em Tentar Novamente e veja se o seu modem-router consegue detetar o Fornecedor de Serviço de Internet.",
'Support7t008' : "Se o passo 2 acima não funcionar, podem então ser necessários filtros ADSL*. Se tiver algum (normalmente dado pelo seu Fornecedor de Serviço de Internet), ligue-os entre todos os seus telefones fixos e as suas fichas telefónicas.",
'Support7t009' : "Se a ligação ADSL mesmo assim não funcionar após tentar os passos 1-3 acima, contacte o seu Fornecedor de Serviço de Internet pedindo assistência técnica. Diga-lhes que está a ter problemas em fazer com que o seu modem-router sincronize com o ISP.",
'Support3t010' : "Assim que tiver terminado estes passos clique em Tentar outra vez.",
'Support3t016' : "Porquê reiniciar o modem?",
'Support3t017' : "Alguns modems precisam de ser reiniciados para comunicarem com um novo router ou um computador que não lhes seja familiar. Conseguimos ver o seu modem, mas não está a comunicar com o seu novo router; um reiniciar rápido pode ajudar a resolver o problema.<span class=\"nub\"></span>",
'Support4t001' : "Não fomos capazes de voltar a ligar ao seu router.",
'Support4t002' : "Tente reiniciar o seu router.",
'Support4t003' : "Assim que o seu router estiver pronto a funcionar, tente voltar a ligar-se.",
'Support4t004' : "Vamos tentar outras coisas.",
'Support4t005' : "Primeiro, vamos reiniciar o seu router.",
'Support4t006' : "Desligue o cabo de alimentação do router, espere alguns segundos e volte a ligá-lo.",
'Support4t006w' : "Desligue o cabo de alimentação do router, espere alguns segundos e volte a ligá-lo.",
'Support4t007' : "Assim que o router tiver uma luz azul estável estamos prontos a ligarmo-nos.",
'Support4t008' : "De seguida, vamos tentar uma ligação sem fios.",
'Support4t031' : "Irá demorar apenas alguns segundos a estabelecer a ligação, depois estará pronto para tentar novamente.",
'Support4t032' : "Ou pode tentar uma ligação com fios.",
'Support4t033' : "Considere ligar um computador ao router. Utilize um cabo Ethernet entre o computador e uma das portas cinzentas no router. Visite http://router/ a partir daí e poderá tentar configurar novamente.",
'Support4t034' : "Assim que tiver terminado estes passos clique em Tentar outra vez.",
'Support4t040' : "Visite <strong>http://belk.in/PMuxOg</strong> usando um dispositivo ligado à internet",
'Support4t050' : "Voltar a obter uma ligação",
'Support4t051' : "Nestas situações o seu router poderá ter de se reiniciar, ou apenas voltar a estabelecer uma ligação. Como tal, incluímos instruções para ambos. Uma vez que pode ter alterado a sua palavra-passe de rede num passo anterior, poderá ter de voltar a selecionar a rede assim que tiver reiniciado o router.<span class=\"nub\"></span>",
'Support5t001' : "Não fomos capazes de voltar a ligar ao seu router.",
'Support5t002' : "Tente reiniciar o seu router.",
'Support5t003' : "Assim que o seu router estiver pronto a funcionar, tente voltar a ligar-se.",
'Support5t004' : "Vamos tentar outras coisas.",
'Support5t005' : "Primeiro, vamos reiniciar o seu router.",
'Support5t006' : "Desligue o cabo de alimentação do router, espere alguns segundos e volte a ligá-lo.",
'Support5t006w' : "Desligue o router, espere alguns segundos e volte a ligá-lo.",
'Support5t007' : "Assim que o router tiver uma luz azul estável estamos prontos a ligarmo-nos.",
'Support5t008' : "De seguida, vamos tentar uma ligação sem fios.",
'Support5t009' : "Irá demorar apenas alguns segundos a estabelecer a ligação, depois estará pronto para tentar novamente.",
'Support5t010' : "Ou pode tentar uma ligação com fios.",
'Support5t011' : "Pode ligar um computador ao router. Ligue um cabo Ethernet entre o computador e uma das portas cinzentas no router. Visite http://router/ a partir daí e poderá tentar configurar novamente.",
'Support5t012' : "Assim que tiver terminado estes passos clique em Tentar outra vez.",
'Support5t015' : "Visite <strong>http://belk.in/PMuxOg</strong> usando um dispositivo ligado à internet",
'Support5t020' : "Voltar a obter uma ligação",
'Support5t021' : "Nestas situações é difícil dizer se o seu router precisa de reiniciar ou se precisamos simplesmente de restabelecer uma ligação a ele. Como tal, incluímos instruções para ambas as situações. Uma vez que alterou o seu nome de rede num passo anterior, certifique-se de que se liga à nova rede assim que reiniciar o router.<span class=\"nub\"></span>",
'Support6t001' : "Não fomos capazes de voltar a ligar ao seu router.",
'Support6t002' : "Tente reiniciar o seu router.",
'Support6t003' : "Assim que o seu router estiver pronto a funcionar, tente voltar a ligar-se.",
'Support6t004' : "Vamos tentar outras coisas.",
'Support6t005' : "Primeiro, vamos reiniciar o seu router.",
'Support6t006' : "Desligue o cabo de alimentação do router, espere alguns segundos e volte a ligá-lo.",
'Support6t006w' : "Desligue o router, espere alguns segundos e volte a ligá-lo.",
'Support6t007' : "Assim que o router tiver uma luz azul estável estamos prontos a ligarmo-nos.",
'Support6t008' : "De seguida, vamos tentar uma ligação sem fios.",
'Support6t031' : "Irá demorar apenas alguns segundos a estabelecer a ligação, depois estará pronto para tentar novamente.",
'Support6t032' : "Ou pode tentar uma ligação com fios.",
'Support6t033' : "Pode ligar um computador ao router. Ligue um cabo Ethernet entre o computador e uma das portas cinzentas no router. Visite http://router/ a partir daí e poderá tentar configurar novamente.",
'Support6t034' : "Assim que tiver terminado estes passos clique em Tentar outra vez.",
'Support6t037' : "Visite <strong>http://belk.in/Nm1f5S</strong> num dispositivo ligado à internet",
'Support6t050' : "Voltar a obter uma ligação",
'Support6t051' : "Nestas situações o seu router poderá ter de se reiniciar, ou apenas voltar a estabelecer uma ligação. Como tal, incluímos instruções para ambos. Uma vez que pode ter alterado a sua palavra-passe de rede num passo anterior, poderá ter de voltar a selecionar a rede assim que tiver reiniciado o router.<span class=\"nub\"></span>",
'Support7t001' : "O seu modem-router não está ligado à Internet.",
'Support7t004' : "Houve um problema com a ligação na sua ficha telefónica.",
'Support7t050' : "Problemas de ligação",
'Support7t051' : "Nestas situações é difícil dizer porque estamos a ter problemas de ligação com o ISP. Verificamos a sua ligação na medida do possível, por isso o próximo passo é verificar se está a utilizar a ficha certa, se é necessário um filtro e se isso falhar, telefonar ao seu ISP. <span class=\"nub\"></span>",
'SupportNumber' : "1-800-123-4567",
'UpSpeed' : "12.5",
'p2410t012' : "Clicar em \"Restaurar\" irá apagar as suas definições de router, como nome e palavra-passe, e irá substitui-las pelas definições originais de fábrica.  Os seus computadores, telefones, etc. terão então de ser configurados com estas definições a fim de ficar online através deste router.  Tem a certeza de que deseja continuar?",
'gtRestore' : "Restaurar",
'gtCancel' : "Cancelar",
'alt="Loading"' : "A carregar",
'alt="Restart Router"' : "Reiniciar router",
'alt="Check Wires"' : "Verificar Ligações de Cabos",
'alt="Check Phone Connection"' : "Verificar Ligação Telefónica",
'alt="Check WAN Connection"' : "Verificar Ligação WAN",
'alt="Checkmark"' : "Marca de verificação",
'alt="Change"' : "Alterar",
'alt="Print"' : "Imprimir",
'alt="Expand"' : "Expandir",
'alt="Caret"' : "Circunflexo",
'alt="Cut"' : "Cortar",
'alt="Browser"' : "Browser",
'alt="Wifi"' : "Wifi",
'alt="Password"' : "Password (Palavra-passe)",
'alt="Check Phone Jack"' : "Verificar Tomada Telefónica",
'alt="Turn Off Modem"' : "Desligar Modem",
'alt="Turn On Modem"' : "Ligar Modem",
'alt="Check Phone Filters"' : "Verificar Filtros de Telefone",
'gtSerial' : "N.º série",
'gt5GName' : "5 GHz SSID",
'gt5GKey' : "Chave 5GHz",
'p1020MRt001' : "Estamos a ter problemas em comunicar com o seu fornecedor de serviço de internet.",
'p1020MRt002' : "Reinicie o seu modem-router.",
'p1020MRt003' : "Não estamos a obter uma ligação à internet, vamos tentar reiniciar o seu modem-router.",
'p1020MRt004' : "Desligue o seu modem-router. Normalmente isto envolve usar um interruptor no modem-router ou simplesmente desligá-lo da fonte de alimentação.",
'p1020MRt005' : "Aguarde 15 segundos.",
'p1020MRt006' : "Volte a ligar o seu modem-router.",
'p1020MRt007' : "Após alguns segundos, as luzes irão ligar-se e deve estabelecer contacto com o seu ISP.",
'p1020MRt008' : "Se o problema persistir, contacte o seu ISP para resolução de problemas da sua conta.",
'p1020MRt009' : "Vamos esperar que o seu modem-router se desligue e volte a ligar e depois iremos automaticamente continuar.",
'p1020MRt010' : "Porquê reiniciar o modem?",
'p1020MRt011' : "Alguns modems precisam de ser reiniciados antes de comunicarem com um novo router ou com um computador que não lhes seja familiar. E se houver um \"soluço\" no seu fornecedor e serviço de internet, o modem  pode perder a ligação de forma inesperada. Conseguimos ver o seu modem, mas não a Internet, pelo que um reiniciar rápido provavelmente resolverá o problema.<span class=\"nub\"></span>",
'p1010t001' : "Estamos a ter problemas em comunicar com o seu modem.",
'p1010t002' : "Pensamos que haja um problema de ligação de fios.",
'p1010t003' : "Deve existir um cabo a ligar o seu modem à porta amarela no seu router. O seu modem deve estar ligado.",
'p1010t004' : "Existem algumas coisas que pode fazer para se certificar de que as coisas estão prontas a avançar:",
'p1010t005' : "Certifique-se de que o modem está ligado. O adaptador de alimentação deve estar ligado nas duas extremidades e uma ou mais luzes do modem devem estar acesas.",
'p1010t006' : "Deve existir um cabo de rede a ligar o seu modem à porta amarela no seu router. Este cabo transporta o sinal do modem para o router; sem ele não consegue ficar online.",
'p1010t007' : "Caso estejam como devem estar, deve tentar reiniciar o seu modem, desligando a sua fonte de alimentação, esperar quinze segundos e depois voltar a ligá-la. Se o seu modem tiver uma bateria, em vez disso poderá ter de encontrar o botão de reiniciar do modem e utilizá-lo.",
'p1010t008' : "Eis como devem parecer as suas ligações:",
'p1010t009' : "Iremos continuar à procura de uma ligação enquanto verifica.",
'p1010t010' : "A dificuldade de ligação de cabos mais comum é entre o modem e o router. É importante que verifique ambas as extremidade do cabo. Uma das extremidades deve estar ligada à porta amarela no seu novo router; a outra extremidade deve ser ligada a uma porta semelhante no seu modem. Fabricantes de modem diferentes fazem a etiquetagem das portas de forma diferente; pode encontrá-las assinaladas como \"data\", \"LAN\", \"network\" ou \"Ethernet\".",
'Support3t005' : "Experimente os seguintes passos para reiniciar o seu modem:",
'Support3t006' : "Verifique as luzes no painel frontal do modem. Se estiverem acesas, o modem está ligado e poderá ter de esperar um pouco até que o modem esteja pronto.",
'Support3t007' : "Verifique se a fonte de alimentação do modem está ligada corretamente ao modem e à tomada de parede.",
'Support3t008' : "Se o modem tiver um interruptor, verifique se está na posição ON.",
'Support3t009' : "Verifique novamente se o modem ainda está ligado ao novo router.",
'Support1t012' : "Visite <strong>http://belk.in/LIkBoH</strong> usando um dispositivo ligado à internet",
'QOSt001' : 'Para ativar o Intellistream, faça o seguinte:',
'QOSt002' : 'Utilize um cabo ethernet para ligar o seu computador ao router da Belkin (recomendado).',
'QOSt003' : 'Execute um teste de velocidade para a sua ligação à internet, clicando aqui para o <a href="http://www.speedtest.net" target="_blank" class="speed_font4">Speedtest.net</a>',
'QOSt004' : 'Depois de executar o teste de velocidade, introduza os valores que vê no Speedtest.net nos campos Velocidade de Download e Velocidade de Upload acima indicados, clicando depois em \'Guarda\' abaixo.',
'gtMbps' : 'Mbps',
'QOSt006' : 'Com a sua alta Velocidade de Download, o Intellistream dará apenas prioridade à sua Velocidade de upload.',
'QOSt007' : 'Com a sua alta Velocidade de upload, o Intellistream dará apenas prioridade à sua Velocidade de Download.',
'QOSt008' : 'Com estas altas velocidades de internet, o Intellistream não servirá de ajuda, por isso não será ativado aqui.',
'QOSt009' : 'Introduza um número superior a 0,01.',
'QOSt010' : 'Introduza números superiores a 0,01.',
'gtSettingsNotSaved' : 'Tem definições por guardar. Fique aqui para as guardar, saia ou recarregue para eliminar as alterações.',
'QOSt011' : 'Introduza um número entre 0,01 e 100,00.',
'QOSt012' : 'Introduza números entre 0,01 e 100,00.',
'QOSt013' : 'Introduza um número entre 0,01 e 1000,00.',
'QOSt014' : 'Introduza números entre 0,01 e 1000,00.',


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
common_err1 = '%s é NULO';
upgrade_err2 = 'Atualização de firmware terminada devido a recursos insuficientes. Atualização sem sucesso.\nTente novamente quando o sistema estiver inativo (sem tráfego de Internet)';
upgrade_err3 = 'Impossível carregar, contacte o administrador.';
upgrade_err4 = 'O firmware é demasiado grande, a atualização falhou.';
upgrade_err5 = 'Já tem o firmware mais recente instalado.';
upgrade_err6 = 'Parece que a atualização de firmware foi corrompida. Volte a descarregar o ficheiro de firmware e tente novamente.';
show10 = 'Lista de clientes DHCP';
show54 = 'Definições de ligação';
btn2 = 'Aplicar alterações';
cff1 = 'Verificação de firmware bem sucedida';
PM2 = ':30 PM';
AM2 = ':30 AM';
Dimicons = 'Ícones esbatidos';
EcoTo = 'para';
fvrm = 'Desative a Gestão Remota. Porque a porta tem um conflito com uma das portas de entrada do seu servidor virtual.';
lsipm2 = 'Endereço IP da LAN inválido; o último número não pode ser 0 nem 255';
lsldnm = 'Nome do domínio local inválido: `~!@#$%^&*()_+[]{}\|;:\'"<>/?.,';
lsipm5 = 'O endereço IP que escolher deverá corresponder a um IP não-roteável.\n  192.168.x.x (sendo x qualquer valor entre 0 e 255.) \n10.x.x.x (sendo x qualquer valor entre 0 e 255.)\172.y.x.x (sendo y qualquer valor entre 16 a 31 e x qualquer valor entre 0 e 255.)';
ufy4 = 'O restauro das predefinições pode demorar até 60 segundos. Não desligue a alimentação do router durante este processo.';
ufe11 = 'No final da atualização, o router poderá não responder aos comandos durante o máximo de 180 segundos. Isto é perfeitamente normal. Não desligue nem reinicie o router durante este período.';
ur5 = 'Espere até 30 segundos até que o router reinicie. Não desligue o router antes que a reinicialização esteja concluída.';
ur6 = 'Espere até 60 segundos até que o router reinicie. Não desligue o router antes que a reinicialização esteja concluída.';
usys83 = 'Os campos Nova Palavra-passe e Confirme Nova Palavra-passe não coincidem';
usys83_1 = 'Os campos Palavra-passe e Confirme Palavra-passe não coincidem.';
usys85_1 = 'A extensão da Palavra-passe de Administração deve situar-se entre 1 e 63 carateres.';
usys88 = 'A palavra-passe atingiu a extensão máxima!';
usys89 = 'AM';
usys90 = 'PM';
usys92 = 'O número da porta de acesso remoto deve situar-se entre 1 e 65535.';
usysipm = 'Não introduziu todos os números de IP ou alguns dos números introduzidos são inválidos. O endereço IP deve possuir a configuração do tipo x.y.y.x (sendo que x é qualquer valor entre 1 e 223, y é qualquer valor entre 0 e 255, e z é qualquer valor entre 1 e 254.)';
self_healing60 = 'Recuperação automática';
chkwait = 'A procurar atualizações de firmware...';
Europe = 'Europa';
Australia = 'Austrália e NZ';
AsiaPacific = 'Ásia-Pacífico';
NorthAmerica = 'América do Norte';
vjs1 = 'Endereço IP inválido; demasiado longo. Verifique novamente';
vjs2 = 'Endereço IP inválido; falta \'.\'. Verifique novamente!';
vjs3 = 'Endereço IP inválido; números em falta entre \'.\'. Verifique novamente!';
vjs4 = 'Endereço IP inválido; \'.\' a mais. Verifique novamente!';
vjs5 = 'Endereço IP inválido; os números entre \'.\' são demasiado grandes. Verifique novamente!';
vm1 = 'Carácter inválido ';
vm2 = ' na posição ';
vm3 = 'Deve ser ';
vjs6 = 'Formato do ano inválido, introduza como (p. ex., 2002)';
vm4 = 'Número inválido ';
vjs8 = 'Inválido, situar-se entre 1970 e 2037';
vjs9 = 'Formato do mês inválido, introduza como (p. ex., 01...12)';
vjs161 = ' fora de ';
vjs162 = ' máscara de rede';
vjs163 = 'A gama de DHCP válida é ';
vjs17 = 'Introduziu duas palavras-passe diferentes. Verifique novamente!';
vjs18 = 'Introduza o número da porta inicial.';
vjs19 = 'O número da porta inicial tem de ser menor do que o da porta final.';
vjs23 = 'Endereço MAC inválido; este é um endereço de emissão.';
vjs24 = 'Endereço MAC inválido; o endereço é nulo.';
vjs25 = 'Endereço MAC inválido; este é um endereço de multidifusão.';
vjs26 = 'Endereços IP inicial e final inválidos, o IP final dever ser maior do que o IP inicial.';
vjs28 = 'Formato de máscara de rede inválido.';
vjs29 = 'Formato inválido; a máscara de rede tem de ser 255.255.255.0, ou 255.255.255.128, ou 255.255.255.192, ou 255.255.255.224, ou 255.255.255.240, ou 255.255.255.248, ou 255.255.255.252, ou 255.255.255.254';
vjs30 = 'Endereço IP da inválido; o último número não pode ser 0 nem 255';
vjs31 = 'Endereço IP da LAN inválido; o primeiro número não pode ser 127';
vjs32 = 'O endereço IP da LAN não pode ser 0.0.0.0';
vjs33 = 'Endereço IP de LAN inválido; este tem de ser inferior a 224.0.0.0';
vjs42 = 'Os números de máscara de sub-rede introduzidos são inválidos.';
vjs45 = 'Especificar endereço IP';
vjs46 = 'é inválida; efetue as devidas correções!';
wcc2 = 'Selecione o seu tipo de ligação:';
wcc13 = 'L2TP';
wcc14 = '[Só Israel]. Este tipo de ligação é mais comum em Israel. Se o seu ISP lhe tiver indicado especificamente que use L2TP e se lhe tiver fornecido as informações L2TP corretas, use esta opção.';
wds4_1 = 'Endereço DNS primário';
wds7 = 'É necessário introduzir as definições DNS que lhe foram fornecidas pelo seu ISP, se não estiver a utilizar a função de DNS automático';
wds8 = 'Para fazer alterações de DNS, primeiro visite %s Website Filters %s e selecione "Sem filtros".';
wmc6 = 'O endereço MAC da WAN não pode ser igual ao endereço MAC da LAN. Selecione outro.';
wdd9  = 'Não selecionou Serviço DDNS.\n';
wdd10 = 'Não selecionou Serviço DDNS e todos os dados nesta página serão perdidos. Quer continuar?';
wm10b = 'Apenas para utilização com ISP que necessite do método de ligação L2TP.';
pm = 'O seu serviço não conseguiu verificar a palavra-passe que introduziu. Confirme se introduziu corretamente a sua palavra-passe.';
wpp17 = 'Conta L2TP';
wpp18 = 'Palavra-passe L2TP';
wpp19 = 'Introduza a sua conta L2TP';
wpp23 = 'Atribuição do endereço IP';
wpp24 = 'Utilizar endereço IP estático';
wpp25 = 'Obter dinamicamente do ISP';
wppa7 = 'O meu endereço IP';
wppa9 = 'ID de ligação (opcional)';
wppa13 = 'Introduza a sua conta PPTP';
wppa18 = 'Nome de serviço inválido.';
ws2 = 'Para introduzir as suas definições de IP estático, digite as suas informações abaixo e faça clique sobre "Aplicar alterações".';
sm_1 = 'Os números de máscara de sub-rede introduzidos são inválidos.';
ws8 = 'Introduza/valide as suas definições do endereço DNS no ecrã que se segue';
wt2 = 'Se fizer clique em Aplicar alterações o router será reiniciado. Uma vez reiniciado o router é necessário fazer o seguinte';
wt3 = '1) Desligue o cabo de alimentação do modem de cabo e do router da Belkin';
wt4 = '2) Volte a ligar o cabo de alimentação ao modem de cabo e aguarde até que todas as luzes do modem deixem de piscar';
wt5 = '3) Volte a ligar o cabo de alimentação do router da Belkin';
wt6 = 'Para se certificar de que se encontra ligado à Internet, abra um navegador de Internet como, por exemplo, o Internet Explorer, Firefox e Safari e certifique-se de que consegue navegar em páginas web.';
wlad2 = 'Ativar/Desativar';
wlc2 = 'Efetue aqui as alterações pretendidas às definições de ligação sem fios do router. Faça clique sobre "Aplicar alterações" para guardar as definições.';
wlcgb = '802.11b+g';
wlcg = '802.11g';
wlcb = '802.11b';
wlc20 = '20MHz';
wlc22 = '20/40MHz';
wlc22a='20/40/80MHz';
wlcoff = 'DESLIGADO';
wlcngb1 = '802.11b & 802.11g & 1x1 802.11n';
wlcn1 = '1x1 802.11n';
wlcngb2 = '802.11b & 802.11g & 802.11n';
wlcn2 = '802.11n';
wlcgn = '802.11g+n';
wlca = '802.11a';
wlcan = '802.11a & 802.11n';
wlcnac='802.11n & 802.11ac';
wlcanac='802.11a & 802.11n & 802.11ac';
wlc26 = 'Ocultar o nome de rede irá desativar a função WPS.';
wlc27 = 'Alterar o tipo de segurança irá desativar a função WPS.';
wlc28 = 'A função WPS está desativada devido ao seu <A href=%s><B>tipo de segurança sem fios</B></A>.';
wlc29 = 'A função WPS está desativada porque ocultou o seu nome de rede (SSID).';
wlc30 = 'A função WPS está desativada porque ocultou o seu nome de rede (SSID) e, também, devido ao seu <A href=%s><B>tipo de segurança sem fios</B></A>.';
wlc31 = 'Ativar a função WPS irá tornar visível o seu nome de rede (SSID).';
wlc32 = 'Ativar a função WPS irá alterar o seu tipo de segurança para WPA/WPA2. A sua atual palavra-passe de rede funcionará perfeitamente.';
wlc33 = 'Ativar a função WPS irá tornar visível o seu nome de rede (SSID) e alterar o seu tipo de segurança para WPA/WPA2. A sua atual palavra-passe de rede funcionará perfeitamente.';
wle3a = 'WPA-PSK';
wle3b = 'WPA2-PSK';
wle3c = 'WPA-PSK + WPA2-PSK';
wps1 = 'Wi-Fi Protected Setup™ (WPS)';
wps3 = 'Configure a segurança sem fios';
wps17 = 'Para dispositivos clientes sem WPS, execute o Assistente de Segurança Belkin a partir do CD, ou configure manualmente o dispositivo com as seguintes definições:';
wps23 = 'WPA+WPA2-Personal (PSK)';
wps25 = 'TKIP+AES';
wps27 = 'Chave de rede (WEP):';
wps28_1 = 'NULO';
wle11 = 'Chave 1';
wle12 = 'Código 2';
wle13 = 'Código 3';
wle14 = 'Código 4';
wpskerr2 = 'A chave tem de conter entre 8 e 63 carateres e pode incluir espaços e símbolos ou apenas 64 Hex (0-F)!';
wpskerr4 = 'Tem de introduzir a Chave de Convidado';
wpskerr7 = 'A Chave de Convidado tem de ter entre 8 carateres.';
wpskerr8 = 'A Chave de Convidado não pode ser igual à Chave de Rede';
wlguest1 = 'O SSID (nome de rede) não pode ser igual ao SSID de Convidado';
wlguest2 = 'O SSID de Convidado não pode ser igual ao SSID (nome de rede)';
rs_crc = 'Falha de recuperação < CRC >';
rs_long = 'Falha de recuperação <too long>';
rs_disposition = 'Falha de recuperação <No Content-Disposition>';
rs_getpid = 'Falha de recuperação <Can\'t get pid!>';
rs_unmatchpid = 'Falha de recuperação <Unmatched pid>';
msg_ddns3  = 'Os campos de nome de domínio não podem ficar em branco.\n';
msg_lan_dhcp1  = 'A pedir informação do Gateway.';
msg_lan_dhcp2  = 'A atualizar a base de dados de configurações.';
msg_wan_stat1  = 'O endereço IP ';
msg_wan_stat2  = ' não está ';
msg_wan_stat3  = ' na rede.';
msg_wls_chan2  = 'O SSID de Convidado não pode ser definido como NULO!\n';
fw_not_interrupt  = 'NÃO INTERROMPA NEM DESLIGUE O ROUTER, pois isso poderia tornar o router inoperável.';
msg_invalid_char  = 'Encontrados carateres inválidos. Os carateres válidos são: 0-9, a-z, A-Z, `~!@#$%^&*()_-+=|\\{}[]:";\',.<>/?';
msg_invalid_domain_char  = 'Nome do domínio local inválido'+': ~!@#$%^&*()=+{}[]|":;\\\'?/<>,`';
msg_invalid_char_1  = 'Encontrados carateres inválidos. Os carateres válidos são letras e números. O seguinte símbolo é inválido: `~!@#$%^&*()_+[]{}\\|;:\'"<>/?.,';
msg_hostIP_invalid  = 'O endereço IP do anfitrião é inválido. Não deve ser o IP de LAN do router.\n';
msg_dmzIP  = 'O endereço IP DMZ';
msg_blank  = ' não pode ficar em branco.\n';
msg_space  = 'Não são permitidos espaços vazios ou em branco em %s\n';
msg_blank_in  = 'Não são permitidos espaços vazios em %s\n';
msg_allspaces  = '%s não pode consistir apenas de espaços\n';
msg_invalid  = 'Caratere ou carateres inválidos em %s\nOs carateres válidos são: \n%s\n\n';
msg_check_invalid  = '%s contém um número inválido\n';
msg_valid_range  = '%s é inválido. O intervalo válido é de %s a %s\n';
msg_invalid_mac  = 'Endereço MAC inválido.\n';
msg_multi_mac = 'O endereço MAC não pode ser um endereço de multidifusão.\n';
msg_confirmDefault  = 'Aviso!\nCarregar as Predefinições de Fábrica irá apagar as definições atuais.\nTem a certeza que deseja fazer isto?';
Allowed_Services = 'Serviços permitidos';
Allowing_Url = 'Autorização de Website por endereço URL ';
Allowing_Keyword = 'Autorização de Website por palavra-chave';
wipv63 = 'Os dispositivos ligados ao seu Router podem comunicar uns com os outros usando pacotes IPv6 nativos. Os pacotes IPv6 na LAN serão automaticamente enviados para todas as interfaces LAN (Portas Ethernet e ligações sem fios 2.4GHz e 5 GHz).';
wipv64 = 'Quando a passagem de IPv6 estiver ativada, os pacotes IPv6 também serão copiados para a interface WAN.(Quando ativado, isto cria uma ligação direta, não segura, à Internet).';
wipv65 = 'Contacte o seu ISP diretamente para obter informação acerca do suporte para IPv6.';
wipv67 = 'Internet IPv6';
wipv68 = 'A sua rede é compatível com IPv6.';
wipv69 = 'Passagem';
mf1 = 'Estas páginas permitem-lhe ajustar o comportamento do router quando confrontado com certos tipos de tráfego de multimédia.';
mf2 = 'Otimizar automaticamente a ligação internet para diferentes tipos de tráfego.';
mf3 = 'Ver como o router está a ser usado.';
mf8 = 'Registado em %s';
mf10 = 'Descarregamento';
mf11 = 'Carregamento';
mf12 = 'Velocidade';
mf15 = 'Aplicar Definições';
mf18 = 'Insira um número entre {0.1-%s}.';
mf20 = 'Apenas entre {0.1-%s} .';
mf26 = 'Registado manualmente em %s';
mf32 = 'ou';
mf44 = 'Os resultados do teste automático de velocidade podem não ser 100% exatos, devido ao tráfego de internet e outras condições. Para comparar resultados visite um site de testes de velocidade, ou contacte o seu ISP para confirmar as suas velocidades de Internet. Se os resultados de velocidade forem inconsistentes, pode introduzir os valores manualmente.';
media_dlna18 = 'Sem título';
media_dlna21 = 'Tem mais multimédia do que o router consegue indexar, por isso estamos a servir os primeiros 12000 itens.';
errSubnetMaskInvalid_2 = 'A máscara de sub-rede não parece uma máscara de sub-rede. Por favor verifique os valor.';

