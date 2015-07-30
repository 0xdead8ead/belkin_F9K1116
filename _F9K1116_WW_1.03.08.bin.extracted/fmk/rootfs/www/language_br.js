function dw(message)
{
	document.write(message);	
}

// Note this dictionary is a temporary demonstration
var langDictionary = {

// Copy belkin transation table to here	
'p100t011' : 'painel',
'p220t001' : 'Você tem uma conexão DSL PPTP.',
'p220t011' : 'PPTP',
'p220t012' : 'O Protocolo PPTP (Point-to-Point Tunneling Protocol) cria uma conexão privada e criptografada entre você e seu Provedor de serviços de Internet.',
'p222t001' : 'Há alguma coisa errada com suas configurações de PPTP.',
'p300t001' : 'Verificando se há atualizações do firmware.',
'p300t002' : 'Estamos verificando para ver se há algum firmware atualizado disponível para seu novo Roteador',
'p300t003' : 'Por que preciso do firmware mais recente?',
'p300t004' : 'O firmware é o software usado pelo seu Roteador para implementar protocolos de rede e de segurança. As atualizações aumentam a confiabilidade e a funcionalidade do seu Roteador e, portanto, é bom se certificar de que você tenha a versão mais recente.',
'gtUpdateNoPower' : 'Estamos atualizando seu Roteador com o novo firmware. Não desligue a energia enquanto isso estiver acontecendo.',
'p320t003' : 'Isso levará aproximadamente três minutos. Progresso da atualização:',
'gtFirmwareRestart' : 'Agora que o firmware foi instalado, precisamos reiniciar o Roteador para torná-lo oficial.',
'p342t003' : 'na lista de redes sem fio para ajudar no processo.',
'errorSSIDEmpty' : 'Insira um nome para a sua rede sem fio.',
'errorSSIDTooLong' : 'O nome da sua rede precisa ter menos de 32 caracteres.',
'errorSSIDInvalidChars' : 'O nome da sua rede pode conter apenas letras, números, pontuação e espaços.',
'errorWEPPasswordInvalidChars' : 'A senha da sua rede pode conter somente números e as letras A a F.',
'errorWEPPasswordInvalidLength' : 'A senha da sua rede deve ter 10 ou 26 caracteres.',
'errorWEPPasswordEmpty' : 'Insira uma senha para proteger sua rede sem fio.',
'errorWPAPasswordInvalidChars' : 'A senha da sua rede pode conter apenas letras, números, pontuação e espaços.',
'errorWPAPasswordInvalidLength' : 'A senha da sua rede deve ter entre 8 e 63 caracteres.',
'errorWPAPasswordEmpty' : 'Insira uma senha para proteger sua rede sem fio.',
'errorGenericCommitError' : 'Ocorreu um erro.  Corrija a configuração a seguir e tente novamente.',
'p400t006' : 'Senha:',
'p450t006' : 'Senha: ',
'p451t006' : 'Senha: ',
'p500t007' : 'Concluir o registro',
'p500t008' : 'Registrar mais tarde',
'p700t011' : 'PPTP DSL connection',
'errIpAddressEmpty' : 'O endereço IP não pode ficar em branco.',
'errSubnetMaskEmpty' : 'A máscara de sub-rede não pode ficar em branco.',
'errSubnetMaskInvalid' : 'A máscara de sub-rede não se parece com uma máscara de sub-rede. Verifique o valor.',
'errDefaultGatewayEmpty' : 'O endereço de gateway padrão não pode ficar em branco.',
'errDNSServerEmpty' : 'O endereço do servidor DNS não pode ficar em branco.',
'1781' : '',
'1782' : '',
'1783' : '',
'7102' : 'O Belkin Intellistream dá prioridade a serviços de alta largura de banda e baixa latência, como voz, vídeo e jogos, a fim de proporcionar a melhor experiência online possível.',
'7103' : 'Para fazer um bom trabalho, o Intellistream precisa conhecer a sua velocidade de conexão.',
'7104' : 'A conectividade à Internet será suspensa momentaneamente durante o teste.',
'7105' : 'A conectividade à Internet é momentaneamente suspensa durante o teste.',
'7106' : 'Executar um teste de velocidade',
'7107' : 'Teste de velocidade',
'7108' : 'Inserir manualmente',
'7109' : 'Ping',
'7110' : 'Velocidade<br> de download',
'7111' : 'Velocidade<br> de upload',
'7112' : 'Executando...',
'7113' : 'Concluído.',
'7114' : 'Ocorreu um erro durante o teste.',
'7115' : 'Inserir entre o número 0,1-100.',
'7116' : 'Inserir entre o número 0,1-1000.',
'7117' : 'Somente entre 0,1-100.',
'7118' : 'Com sua alta velocidade de upload, o Intellistream dará prioridade somente à sua velocidade de download.',
'7119' : 'Com sua alta velocidade de download, o Intellistream dará prioridade somente à sua velocidade de upload.',
'7120' : 'Com suas altas velocidades na Internet, o Intellistream não precisa ser ativado.',
'7121' : 'Registrado em',
'7122' : 'Registrado manualmente em',
'7123' : 'Para ativar o Intellistream:',
'7124' : 'O Intellistream está ativado.',
'7125' : 'No momento, o Intellistream está desativado.',
'7126' : 'Definição manual',
'gtBBSTitle' : 'Bem-vindo ao Programa de instalação do Roteador Belkin',
'gtBack' : 'Voltar ao painel',
'Support4t036' : 'Leia tudo sobre isso.',
'Support4t037' : 'Acesse o URL a seguir em um dispositivo conectado à Internet e saiba como corrigir o problema você mesmo: <STRONG>www.belkin.com/support/asdlkj</STRONG>',
'gtReadHelp' : 'Vá para <STRONG>http://belk.in/NLk29H</STRONG> em um dispositivo conectado à Internet',
'Support5t014' : 'Leia tudo sobre isso.',
'p1200t001' : 'Um pouco mais de segurança.',
'p1200t002' : 'Você pode proteger seu roteador , bloqueando o painel de instrumentos com uma senha.',
'errsetempt' : 'Insira uma senha.',
'errorpwdEmpty' : 'Insira sua senha.',
'errorpwdError' : 'Sua senha está incorreta.',
'60' : 'Duplicar administrador',
'61' : 'Este dispositivo é gerenciado por',
'62' : 'no momento!',
'gtDisconnected' : 'Desconectado',
'dft005' : 'Centro de ajuda da Belkin',
'dhToggleBand' : 'Mostrar 5,0 Ghz',
'419' : 'segundos restantes.',
'422' : 'Configurações restauradas com êxito',
'423' : 'O arquivo restaurado não é do tipo correto para este dispositivo. Houve falha da restauração. Obtenha o arquivo correto e tente novamente',
'533' : 'Se seu roteador começar a funcionar incorretamente, talvez seja necessário reiniciar ou reinicializar o roteador. Reiniciar o roteador não excluirá suas configurações.',
'1200' : 'Aplicando alterações. Aguarde.......',
'1386' : 'O arquivo de atualização não é do tipo ou da versão correta para este dispositivo. Houve falha da atualização. Obtenha o arquivo correto e tente novamente',
'2053' : 'Aplicação das alterações bem-sucedida',
'2054' : 'Atualização de firmware bem-sucedida',
'766' : 'Os números de máscara de sub-rede inseridos são inválidos.',
'1356' : 'IP de gateway inválido: o primeiro número deve estar entre 1 e 223.',
'1357' : 'IP de gateway inválido: o segundo e o terceiro números devem estar entre 0 e 255.',
'1358' : 'IP de gateway inválido: o último número deve estar entre 1 e 254.',
'1360' : 'Endereço IP inválido: o primeiro número deve estar entre 1 e 223.',
'1354' : 'Endereço IP inválido: o segundo e o terceiro números devem estar entre 0 e 255.',
'675' : 'Endereço IP inválido: o último número deve estar entre 1 e 254.',
'403' : 'O IP fornecido é inválido.',
'760' : 'Endereço IP',
'1760' : 'Negar todos',
'395' : 'Você não inseriu todos os números ou alguns dos números inseridos são inválidos. O número em cada caixa de entrada deve estar entre 0 e 255.',
'1395' : 'Não configurado',
'1281' : 'O IP da WAN não pode incluir a sub-rede da LAN.',
'641' : 'Você não inseriu todos os números do IP ou alguns dos números inseridos são inválidos. Os números devem estar entre 0 e 255',
'errUsernameTooLong' : 'Seu nome de usuário precisa ter menos de 64 caracteres.',
'errUsernameInvalid' : 'Seu nome de usuário pode conter apenas letras, números, pontuação e espaços.',
'errPasswordEmpty' : 'Insira sua senha.',
'errPasswordTooLong' : 'Sua senha precisa ter menos de 64 caracteres.',
'errPasswordInvalid' : 'Seu nome de usuário pode conter apenas letras, números, pontuação e espaços.',
'1398' : 'OK',
'1399' : 'Cancelar',
'374' : 'Ligado',
'375' : 'Desligado',
'47' : 'Mais informações',
'48' : 'Limpar alterações',
'49' : 'Salvar',
'96' : 'Ativar',
'119' : 'Desativar',
'1298' : 'Fechar',
'113' : '<< Adicionar',
'114' : 'Excluir',
'128' : 'Atualizar',
'318' : 'Desativado',
'317' : 'Ativado',
'2006' : 'Sim',
'2007' : 'Não',
'3300' : 'NOVO',
'50' : 'Atualizar DNS dinâmico',
'98' : 'O sistema dinâmico de nomes de domínio (DDNS) permite acessar sua rede doméstica por meio de uma conta configurada com um provedor de DDNS. Configure sua conta no Dyn.com (<a href=\'http://www.dyn.com\' target=\'_blank\'>www.dyn.com</a>) e ative o recurso DDNS em seu roteador. É preciso criar uma conta para usar este serviço.',
'100' : 'Nome de usuário',
'101' : 'Senha',
'102' : 'Nome do domínio',
'742' : 'Insira seu nome de usuário',
'757' : 'Insira sua senha!',
'822' : 'é inválida. Corrija-a primeiro!',
'1307' : 'DynDNS',
'1308' : 'Serviço DDNS',
'1309' : 'Status DDNS',
'1310' : 'Site da Web',
'1315' : 'Atualizar DDNS automaticamente',
'1316' : 'atualizar a cada',
'1317' : 'dias',
'1369' : 'Registrado',
'1380' : 'Configuração incorreta',
'1381' : 'Conectando',
'1382' : 'Falha de conexão',
'1383' : 'Falha de login',
'1384' : 'Falha de registro',
'1385' : 'Não registrado',
'1751' : '',
'702' : 'O serviço de nomes de domínio (DNS) converte nomes de domínio em endereços IP para localização de serviços de computador e dispositivos em todo o mundo. Se seu Provedor de serviços de Internet (ISP) tiver lhe fornecido o endereço DNS a ser usado, insira-o aqui.',
'703' : 'Automático do Provedor de serviços de Internet',
'704' : 'Endereço DNS',
'705' : 'Endereço DNS secundário',
'706' : 'DNS = Servidor de nomes de domínio. Um servidor localizado na Internet que converte URLs (Uniform Resource Locator), como www.belkin.com, em endereços IP.',
'707' : 'Será preciso inserir as configurações de DNS fornecidas por seu Provedor de serviços de Internet se você não usar a função DNS automático.',
'780' : 'Especificar endereço IP',
'823' : 'Para fazer alterações ao DNS, viste primeiro {Filtro de site da Web} e selecione "Sem filtros".',
'55' : 'Informações de firmware.',
'56' : 'Não há nenhuma atualização de firmware disponível para este Roteador!',
'57' : 'Não é possível conectar-se ao servidor de informações de firmware. Verifique a conexão da WAN.',
'58' : 'Firmware atual:',
'59' : 'Baixar firmware:',
'64' : 'O Roteador pode ser configurado para restringir o acesso a Internet, email ou outros serviços de rede em dias e horários específicos.',
'65' : 'IP',
'66' : 'Porta',
'67' : 'Tipo',
'68' : 'Bloquear horário',
'69' : 'dia',
'70' : 'Hora',
'71' : 'Ativar',
'72' : 'AMBOS',
'73' : 'Sempre',
'74' : 'Bloquear',
'75' : 'DOM.',
'76' : 'SEG.',
'77' : 'TER.',
'78' : 'QUA.',
'79' : 'QUI.',
'80' : 'SEX.',
'81' : 'SÁB.',
'82' : ':00 P.M.',
'83' : ':00 A.M.',
'84' : 'Você não inseriu o endereço IP do cliente ou alguns dos números inseridos são inválidos. O número na caixa de entrada de IP deve estar entre 1 e 254.',
'85' : 'Os números de porta inseridos são inválidos.',
'86' : 'A última porta do intervalo de portas deve ser maior que a primeira.',
'87' : 'O último IP do intervalo de IPs deve ser maior que o primeiro.',
'88' : 'O número na caixa de entrada de porta deve estar entre 1 e 65535.',
'1311' : 'Não há nenhum aplicativo selecionado',
'1312' : 'Entradas duplicadas detectadas. A regra já existe.',
'1355' : 'O IP de LAN do roteador deve ser excluído do intervalo IP.',
'90' : 'Isso permite especificar um dispositivo na rede a ser posicionado fora do firewall do roteador, enquanto outros dispositivos permanecem atrás do firewall.',
'91' : 'O computador na DMZ não estará protegido de ataques de hackers.',
'92' : 'Para colocar um computador na DMZ, insira os últimos dígitos de seu endereço IP no campo abaixo e selecione "Ativar". Clique em "Salvar" para que a alteração entre em vigor.',
'93' : 'Endereço IP do host DMZ virtual',
'97' : 'IP estático',
'95' : 'IP privado',
'103' : 'Insira o endereço IP antes de ativar a DMZ',
'1232' : 'O endereço IP do Host DMZ é inválido!',
'1253' : 'O IP está fora do intervalo [1-254]!',
'105' : 'Este recurso permite configurar uma lista de clientes permitidos. Ao ativar este recurso, é preciso inserir o endereço MAC de cada cliente na rede ao qual você deseja conceder acesso à rede.',
'106' : 'Ativar filtragem de endereço MAC',
'107' : 'Lista da filtragem de endereço MAC',
'108' : 'Bloquear',
'110' : 'Endereço MAC',
'112' : 'Este MAC já foi adicionado!',
'669' : 'Endereço MAC inválido: é um endereço nulo',
'902' : 'Endereço MAC inválido',
'903' : 'Corrija-o primeiro!',
'904' : 'O endereço MAC deve estar no formato xx:xx:xx:xx:xx:xx, onde x está entre 0-9 ou A-F!',
'1062' : 'Nota: não será possível excluir o endereço MAC do computador que você estiver usando para acessar as funções administrativas do Roteador. (O computador que você está usando no momento.)',
'1602' : 'Definido pelo usuário 1',
'117' : 'Seu Roteador está equipado com um firewall que protegerá sua rede contra uma grande variedade de ataques comuns, que incluem Ping da morte (PoD) e Negação de serviço (DoS). É possível desligar a função de firewall, se necessário. Desligar a proteção do firewall não deixará sua rede totalmente vulnerável aos ataques de hackers, mas recomenda-se ligar o firewall sempre que possível.',
'118' : 'Ativação/desativação do firewall',
'121' : '<b>RECURSO AVANÇADO! </b> É possível configurar o Roteador de modo a não responder a um Ping ICMP (ping na porta WAN). Isso oferece um nível reforçado de segurança.',
'1076' : 'Bloquear ping ICMP',
'1827' : 'Imprimir configurações de acesso de convidados',
'2702' : 'O Acesso de convidado permite acessar a Internet pela porta WAN, mas limita o acesso dos convidados à rede interna, LAN e WLAN. O recurso é compatível somente com 2,4 GHz para simplificar o uso.',
'279' : 'Porta de entrada',
'1828' : 'Estilo café (login de convidado por uma página da Web)',
'1619' : 'PSK de WPA/WPA2',
'1829' : 'WEP',
'1830' : 'Aberto',
'1831' : 'no máximo 32 caracteres, sem espaços',
'1617' : 'Senha (PSK)',
'842' : 'Autenticação',
'845' : 'Técnica de criptografia',
'854' : 'Chave pré-compartilhada (PSK)',
'857' : 'PSK obscura',
'855' : 'WPA-PSK (sem servidor)',
'1335' : 'Nome da rede (SSID)',
'1825' : '8 a 63 caracteres',
'1826' : '10 dígitos hexadecimais',
'1834' : 'Nome da rede',
'409' : 'Senha',
'1835' : 'Cada convidado que se conectar à rede sem fio precisará desta senha.',
'1715' : 'Tipo de segurança',
'1836' : 'Para se conectar à rede sem fio:',
'1837' : 'Windows',
'1838' : '1. Clique com o botão direito do mouse no ícone da rede sem fio na bandeja do sistema Windows e selecione Exibir redes sem fio disponíveis no menu pop-up.',
'1839' : '2. Clique duas vezes na ',
'1840' : ' rede.',
'1841' : '3. Uma janela pop-up será exibida para solicitar a chave de rede. Insira a senha acima e clique em OK.',
'1842' : 'MAC OS X',
'1843' : '1. Clique no ícone da rede sem fio na barra de menus (canto superior direito) e selecione a ',
'1844' : ' rede.',
'1845' : '2. Uma janela pop-up será exibida para solicitar a chave de rede. Insira a senha acima e clique em OK.',
'1832' : 'Estilo café',
'1833' : 'Modo aberto',
'1201' : 'A SSID não pode ser definida como NULO!',
'1812' : 'O comprimento da senha é inválido. O comprimento máximo da senha é 63 e o mínimo é 8.',
'1824' : 'A chave WEP precisa ter 10 dígitos hexadecimais!',
'414' : 'Erro de login!',
'1811' : 'O Acesso de convidado é um recurso que permite aos usuários acessar a Internet, mas que limita o acesso à rede doméstica. Solicite uma senha de Acesso de convidado ao administrador da rede e insira-a a seguir.',
'1813' : 'Sucesso! Agora você pode abrir um navegador da Web e navegar pela Internet.',
'909' : 'O "Endereço IP" é o endereço IP interno do Roteador. Para acessar a interface de configuração avançada, digite este endereço IP na barra de endereço do navegador. Se necessário, o endereço pode ser alterado. Para alterar o endereço IP, digite o novo endereço IP e clique em "Salvar". O endereço IP selecionado deve ser um IP não roteável. Exemplos de IP não roteáveis: 192.168.2.1, 10.0.0.1, 172.16.0.1',
'917' : 'Não há necessidade de alterar a máscara da sub-rede. É possível alterar a máscara de sub-rede, se necessário. Faça alterações à máscara de sub-rede somente se tiver um motivo específico para isso.',
'929' : 'A função de servidor DHCP facilita muito a configuração de uma rede, atribuindo endereços IP para cada computador na rede. O Servidor DHCP pode ser desligado, se necessário. Desligar o servidor DHCP exigirá que você defina manualmente um endereço IP estático em cada computador da rede. O pool IP é o intervalo de endereços IP reservado para atribuição dinâmica aos computadores da rede. O padrão é 2-200 (199 computadores). Se desejar alterar esse número, insira um novo endereço IP inicial e final e clique em "Salvar".',
'935' : 'Pode-se configurar um nome de domínio local (nome de rede) para a rede. Não há necessidade de alterar esta configuração, a não ser que haja uma necessidade avançada específica para tal. Você pode atribuir o nome que desejar à sua rede, como "MINHA REDE".',
'962' : 'Para definir o roteador para usar PPPoE, digite seu nome de usuário e senha fornecidos pelo Provedor de serviços de Internet nos espaços fornecidos. Se não tiver um nome de serviço ou não souber qual é, deixe o campo "Nome do serviço" em branco. Depois de digitar suas informações, clique em "Salvar". Depois que você salvar, o indicador de status exibirá "Online" se o roteador tiver sido configurado corretamente.',
'967' : 'Alguns ISPs usam o protocolo PPTP para ligar os assinantes à central. Isso exige que você insira várias configurações adicionais que o seu ISP deve ter fornecido. Depois de salvar suas alterações, o indicador de status da Internet ficará verde, se der tudo certo.',
'971' : 'Selecione o tipo de conexão Telstra Bigpond clicando em "Salvar".',
'982' : 'Desconectar após X...',
'983' : 'Isto desliga o seu roteador do ISP depois de um período de inatividade. Use esta opção para economizar dinheiro caso você pague pelo serviço de internet por minuto.',
'htDDNS' : 'O que é DDNS?',
'htDNS' : 'O que é DNS?',
'htDMZ' : 'O que é a DMZ?',
'htLAN' : 'O que as Configurações de LAN controlam?',
'htWANMain' : 'O que são Configurações de WAN?',
'htWANMAC' : 'O que é o endereço MAC?',
'htWAN_PPPOE' : 'Configurações de PPPoE',
'htWAN_PPTP' : 'Configurações de PPTP',
'htIPv6' : 'O que é PIv6?',
'htWifiID' : 'O que são o nome da rede e as configurações de canal?',
'htWifiIDContent' : 'O nome da rede é denominado uma SSID (Service Set ID).  Todos os clientes em sua rede precisam conhecer a SSID para entrar na rede do roteador.',
'htWifiSec' : 'O que é segurança de Wi-Fi?',
'htWifiSecContent' : 'Todos os roteadores Belkin são fornecidos com a segurança de Wi-Fi ativada.  A segurança de Wi-Fi proporciona uma camada de proteção contra o acesso não autorizado à sua rede.  Quando a segurança estiver ativada, o usuário precisará de uma senha para acessar sua rede.',
'htWifiWPS' : 'O que é WPS (Wi-Fi Protected Setup)?',
'htWifiWPSContent' : 'Trata-se de um método opcional projetado para facilitar a configuração de redes Wi-Fi com segurança ativada em sua casa ou pequeno escritório. Dispositivos sem WPS (Wi-Fi Protected Setup) ainda podem ser adicionados à rede por meio da seleção do nome da rede e da inserção da senha da rede.',
'htWifiGuest' : 'Como o acesso de convidados é usado?',
'htWifiGuestContent' : 'Quando ativado, o acesso de convidado criará uma rede Wi-Fi separada que ainda pode acessar a Internet, mas não outros dispositivos em sua rede.',
'htAP' : 'Posso usar meu roteador como um ponto de acesso?',
'htAPContent' : 'Os roteadores Belkin podem ser configurados para atuar estritamente como um ponto de acesso, ignorando todas as funções de roteamento e firewall.  A configuração do roteador como um ponto de acesso é usada mais comumente para adicionar capacidade sem fio a uma rede com fio existente.',
'htQos' : 'O que é o Belkin Intellistream?',
'htDLNA' : 'Belkin Media Server, da plataforma Twonky',
'htPortForward' : 'O que é o encaminhamento de porta?',
'htPortForwardContent' : 'O encaminhamento de porta permite que computadores remotos se conectem a um programa ou serviço específico em sua rede local. Por exemplo, você usaria o encaminhamento de porta para executar um servidor da Web (porta 80) em sua rede.  A maior parte do programas modernos não requerem o uso do encaminhamento de porta. Eles podem configurar automaticamente qualquer porta necessária.',
'htWanPing' : 'O que faz o bloqueio de ping da WAN?',
'htWanPingContent' : 'Proporciona um nível elevado de segurança a fim de impedir que usuários externos da Internet descubram seu endereço IP. Ele faz isso não respondendo a pings que se originam fora da rede.',
'htRestart' : 'Por que devo reiniciar meu roteador?',
'htRestoreFC' : 'O que fazer para restaurar os padrões de fábrica?',
'htSaveSettings' : 'Por que devo salvar/fazer o backup das minhas configurações?',
'htRestoreSettings' : 'O que significa restaurar minhas configurações anteriores?',
'htSystem' : 'O que são as configurações do sistema?',
'htSystemContent' : 'Nesta página, é possível definir diversas configurações básicas do roteador, inclusive fuso horário e senha do administrados.',
'htSelfHeal' : 'O que é a autorrecuperação?',
'hLANSettings' : 'Esta página permite configurar novas conexões, ligar/desligar o DHCP e definir o endereço IP do roteador em sua rede local.',
'htDHCPClientList' : 'O que é a Lista de clientes DHCP?',
'htDHCPClientListContent' : 'Esta página mostra o endereço IP, o nome do host e o endereço MAC de cada dispositivo conectado à rede. Se o computador não tiver um nome de host especificado, o campo ficará em branco. Clique em "Atualizar" para atualizar a lista.',
'hWebsiteFilters' : 'Serve como uma camada de proteção contra sites da Web desprotegidos/impróprios. Os filtros da Web triam sites comparando o nome do site com uma lista de sites aprovados.',
'hWANSettings' : 'Essas configurações de rede se referem à conexão que você tem com seu Provedor de serviços de Internet (ISP).   Selecione na lista o tipo de conexão fornecida por seu Provedor de serviços de Internet. ',
'htChannel' : 'Do mesmo modo como um rádio usa diferentes estações, o roteador pode transmitir em vários canais diferentes para se comunicar com os dispositivos em sua rede. Normalmente, usar \'Automático\' é a melhor opção.',
'3430' : 'O IPv6 (Protocolo de Internet versão 6) é a versão do Protocolo de Internet (IP) destinada a ser a sucessora do IPv4, que direciona quase todo o tráfego da Internet. Alguns Provedores de serviço de Internet (ISP) estão quase sem endereços IP. O IPv6 permite que mais dispositivos se comuniquem na Internet por meio do uso de números maiores para criação dos endereços IP.  Seu Provedor de serviços de Internet deve informá-lo se você precisar usar IPv6.',
'3431' : 'Tipo de conexão',
'3432' : 'Configuração automática/DHCPv6 (padrão)',
'3433' : 'Os endereços a seguir são fornecidos por seu Provedor de serviços de Internet. O DHCPv6 oferece recursos adicionais para melhorar a conectividade.',
'3434' : 'WAN',
'3435' : 'Endereço da WAN',
'3436' : 'Gateway',
'3437' : 'LAN',
'3438' : 'Use esta seção para definir as configurações de rede internas de seu roteador. Se você alterar o endereço IPv6 da LAN aqui, talvez precise ajustar as configurações de rede de seu computador para acessar a rede novamente.',
'3439' : 'Prefixo da LAN',
'3440' : 'ID da interface',
'3441' : 'Local do link',
'3442' : 'DNS',
'3443' : 'Suas configurações DNS padrão IPv6 serão fornecidas por seu Provedor de serviços de Internet se disponíveis na publicidade do roteador WAN ou em mensagens DHCPv6.',
'3444' : 'Primário',
'3445' : 'Secundário',
'3446' : 'PPPoE sobre IPv6',
'3447' : 'O Protocolo PPPoE (Point-to-Point Protocol over Ethernet) é usado, principalmente, por serviços DSL para conectar um modem DSL à Internet.',
'3448' : 'Login',
'3450' : 'senha obscura',
'3451' : 'Nome de usuário',
'3452' : 'Senha',
'3453' : 'Nome de serviço',
'3454' : 'Túnel 6to4',
'3455' : 'Permite que pacotes IPv6 sejam transmitidos por uma rede IPv4 sem a necessidade de configurar túneis explícitos. Este tipo de conexão é apropriado se seu Provedor de serviços de Internet não oferecer suporte a IPv6.',
'3456' : 'Roteador remoto de retransmissão 6to4',
'3457' : 'Passagem',
'3458' : 'Dispositivos conectados ao roteador podem se comunicar uns com os outros usando pacotes IPv6 nativos. Os pacotes IPv6 na LAN serão enviados automaticamente a todas as interfaces da LAN (portas Ethernet e redes sem fio tanto de 2,4 GHz quanto de 5 GHz).',
'3459' : 'Quando a passagem estiver ativada, os pacotes IPv6 também serão copiados na interface da WAN. (Isso cria uma conexão direta desprotegida com a Internet.)',
'3460' : 'Entre em contato com seu Provedor de serviços de Internet para obter informações sobre seu suporte a IPv6.',
'3461' : 'IPv6 estático',
'3462' : 'O endereçamento IPv6 estático não é usado comumente, visto que pode ser difícil de administrar. O IPv6 estático não deve ser usado com dispositivos que se conectam a várias redes, como notebooks ou dispositivos móveis.',
'3463' : 'Somente passagem local',
'3464' : 'A passagem de WAN IPv6 está desativada. Todos os dispositivos locais e sua LAN e WiFi ainda podem se comunicar diretamente uns com os outros, mas o roteador não envia nem recebe nenhum pacote IPv6 da Internet, nem responde diretamente a nenhum pacote IPv6.',
'3465' : 'Seu Provedor de serviços de Internet não está fornecendo conectividade IPv6. Entre em contato com ele para obter informações sobre o suporte a IPv6 ou para estabelecer a conectividade.',
'3466' : 'A opção Somente passagem local é definida automaticamente em seus dispositivos para enviarem pacotes IPv6 uns para os outros. A outra opção é usar "Túnel 6to4" para acessar a Internet por meio de uma conexão IPv4.',
'3467' : 'Cada caixa deve conter quatro dígitos hexadecimais (0-9 e a-f).',
'3468' : 'Insira um endereço que não seja multicast. Geralmente, os endereços multicast começam com ff.',
'3469' : 'O comprimento do prefixo deve ser de 1-127. Normalmente, o comprimento do prefixo é de 64, 56 ou 48.',
'3470' : 'Não há conexão IPv4.',
'3471' : 'Essas configurações de DNS são substituídas pelos Controles dos pais',
'3472' : 'Filtro de sites da Web',
'3473' : 'Selecione PPPoE em WAN da Internet > Configurações de conexão antes de selecionar PPPoE sobre IPv6.',
'3474' : 'Conectividade perdida com a Internet. Verifique seu tipo de conexão de WAN ou entre em contato com seu Provedor de Internet.',
'3475' : 'DNS padrão fornecido por seu Provedor de serviços de Internet',
'gtTryManu' : 'Se você souber qual é seu tipo de conexão, poderá ',
'gtSetManual' : 'configurá-la manualmente ',
'2100' : 'Acesso negado. Insira a senha do Roteador para permitir o acesso temporário à página ou serviços bloqueados.',
'2101' : 'Página de aterrissagem',
'2102' : 'IR',
'354' : 'Esta página mostra o Endereço IP, o Nome do host e o Endereço MAC de cada computador conectado à rede. Se o computador não tiver um nome de host especificado, o campo Nome do host ficará em branco. Pressionar "Atualizar" atualizará a lista.',
'355' : 'Endereço IP',
'356' : 'Nome do host',
'357' : 'Endereço MAC',
'370' : 'Esta página permite configurar novas conexões, ligar/desligar o DHCP e definir o endereço IP do roteador em sua rede local.',
'371' : 'Endereço IP',
'372' : 'Máscara de sub-rede',
'373' : 'Servidor DHCP',
'378' : 'A função de servidor DHCP facilita muito a configuração de uma rede, atribuindo endereços IP para cada computador na rede. Não é necessário fazer nenhuma alteração aqui.',
'379' : 'Endereço inicial do pool IP',
'380' : 'Endereço final do pool IP',
'381' : 'Tempo de concessão',
'382' : 'Para sempre',
'383' : 'Meia hora',
'384' : 'Uma hora',
'385' : 'Duas horas',
'386' : 'Meio dia',
'387' : 'Um dia',
'388' : 'Dois dias',
'389' : 'Uma semana',
'390' : 'Duas semanas',
'391' : 'O tempo durante o qual o servidor DHCP reservará o endereço IP para cada computador.',
'392' : 'Nome do domínio local',
'393' : 'Opcional',
'394' : 'Um recurso que permite atribuir um nome à sua rede.',
'397' : 'O pool IP precisa estar na mesma sub-rede que o IP do gateway.',
'398' : 'O endereço IP final precisa ser superior ao endereço IP inicial.',
'399' : 'O endereço IP da LAN não pode estar no pool de endereços DHCP.',
'400' : 'O endereço IP selecionado deve ser um IP não roteável.',
'401' : 'Endereço IP da LAN inválido: o primeiro número não pode ser 127 nem 0',
'404' : 'Altere manualmente a caixa de entrada de Endereço na barra de status do navegador para o novo endereço da LAN.',
'406' : 'Realmente deseja alterar o endereço IP da LAN?',
'416' : '192.168.y.x (onde y é qualquer número entre 0 e 255, e x é qualquer número entre 1 e 254).',
'417' : '10.y.y.x (onde y é qualquer número entre 0 e 255, e x é qualquer número entre 1 e 254).',
'418' : '172.z.y.x (onde z é qualquer número entre 16 e 31, y é qualquer número entre 0 e 255, e x é qualquer número entre 1 e 254).',
'713' : 'Nome do domínio local inválido:',
'1228' : 'O Endereço inicial do pool IP é inválido!',
'1229' : 'O Endereço final do pool IP é inválido!',
'1240' : 'O endereço IP da LAN é inválido!',
'3' : 'Login',
'408' : 'Para poder alterar as configurações, é preciso fazer login com uma senha. Se ainda não tiver definido uma senha personalizada, deixe este campo em branco e clique em "Enviar".',
'410' : 'Padrão = deixar em branco',
'412' : 'Enviar',
'1371' : 'Senha incorreta',
'1372' : 'Confirme sua senha e tente novamente.',
'124' : 'O roteador mantém um registro de toda a atividade no roteador, como login e logout de computadores e quaisquer tentativas de acesso ao roteador a partir da Internet.',
'125' : 'Arquivo de registro',
'126' : 'Salvar',
'127' : 'Limpar',
'1302' : 'Registro do sistema',
'1303' : 'Registro de firewall',
'8' : 'Configurações da LAN',
'9' : 'Configurações da rede local',
'10' : 'Dispositivos conectados',
'2500' : 'Roteamento estático',
'11' : 'WAN da Internet',
'335' : 'Tipo de conexão',
'690' : 'Dinâmico',
'692' : 'Estático',
'694' : 'PPPoE',
'696' : 'PPTP',
'698' : 'Telstra BigPond/OptusNet a cabo',
'42' : 'IPV6',
'43' : 'Conexão IPv6',
'13' : 'DNS',
'14' : 'Endereço MAC',
'16' : 'Wi-Fi',
'17' : 'Nome da rede',
'18' : 'Segurança',
'803' : 'WEP de 128 bit',
'804' : 'WEP de 64 bits',
'1296' : 'WPA/WPA2-Personal (PSK)',
'1297' : 'WPA/WPA2-Enterprise (RADIUS)',
'805' : 'WPA (com servidor Radius)',
'1319' : 'WPS (Wi-Fi Protected Setup)',
'777' : 'Usar como ponto de acesso',
'833' : 'Controle de endereço MAC',
'1613' : 'Acesso de convidado',
'1850' : 'Controles dos pais',
'1851' : 'Filtro de sites da Web',
'1710' : 'Controle de acesso',
'20' : 'Mídia',
'7151' : 'Gráfico de tráfego',
'7000' : 'Servidor de mídia',
'1780' : 'Torrent Mate',
'1790' : 'Software opcional',
'23' : 'Firewall',
'24' : 'Encaminhamento de porta',
'25' : 'Filtros IP de cliente',
'26' : 'Filtragem de endereço MAC',
'27' : 'DMZ',
'41' : 'DDNS',
'28' : 'Bloqueio de ping da WAN',
'29' : 'Registro de segurança',
'30' : 'Utilitários',
'32' : 'Reiniciar roteador',
'34' : 'Restaurar padrões de fábrica',
'35' : 'Salvar/fazer backup das configurações',
'36' : 'Restaurar configurações anteriores',
'37' : 'Atualização de firmware',
'38' : 'Configurações do sistema',
'39' : 'Autorrecuperação',
'1900' : 'Registro',
'132' : 'O intervalo das portas de entrada está incorreto.',
'133' : 'O intervalo das portas privadas está incorreto.',
'134' : 'Esta função permitirá encaminhar chamadas externas (Internet) de serviços, como servidor da Web (porta 80), servidor FTP (porta 21) ou outros aplicativos, através do Roteador para sua rede interna.',
'276' : 'Limpar entrada',
'277' : 'Adicionar',
'278' : 'Descrição',
'280' : 'Tipo',
'281' : 'Endereço IP privado',
'282' : 'Porta privada',
'376' : 'tudo',
'411' : 'Limpar',
'648' : 'Caractere inválido',
'672' : 'Número inválido! Precisa estar entre 1 e 65535',
'905' : 'Todas as entradas estão preenchidas.\nRemova algumas entradas e tente novamente.',
'906' : 'Deseja limpar a entrada',
'907' : 'Deseja limpar todas as entradas?',
'1241' : 'O endereço IP da WAN é inválido!',
'1250' : 'A porta é inválida!',
'1362' : 'A descrição está vazia',
'1601' : 'Automático',
'2055' : 'Sobreposição de intervalo de portas de entrada!',
'2056' : 'Sobreposição de intervalo de portas privadas',
'3310' : 'Intellistream',
'3311' : 'Otimize sua conexão à Internet.',
'3312' : 'Servidor de mídia',
'3313' : 'Compartilhar mídia entre dispositivos na rede.',
'3314' : 'Controles dos pais',
'3315' : 'Filtros de segurança DNS para segurança na Internet',
'3316' : 'Conexão IPv6',
'3317' : 'Agora sua rede é compatível com IPv6',
'1852' : 'Serve como uma camada de proteção contra sites da Web desprotegidos/impróprios. Os filtros da Web triam sites comparando o nome do site com uma lista de sites aprovados.',
'1854' : 'Opções de filtragem',
'1856' : 'Sem filtro',
'1858' : 'Bloquear sites mal-intencionados',
'1859' : 'Bloqueia malware, phishing e sites de golpes.',
'1860' : 'Bloquear sites mal-intencionados e de conteúdo adulto',
'1861' : 'Bloqueia malware, phishing, sites de golpes e sites que contenham conteúdo sexualmente explícito.',
'1862' : 'Bloquear sites mal-intencionados, de conteúdo adulto e outros sites impróprios para a família',
'1863' : 'Bloqueia malware, phishing e sites de golpes, além de sites que contenham material sexualmente explícito, conteúdo adulto, aborto, álcool, tabaco, crime, cultos, drogas, jogos de azar, ódio, suicídio ou violência.',
'1864' : 'Para alterar seu endereço DNS, continue para WAN da Internet > {DNS}',
'7152' : 'Os gráficos a seguir exibem o tráfego tanto de entrada quanto de saída da WAN priorizado em diferentes categorias. Os gráficos está exibindo os últimos 10 minutos (atualizando automaticamente a cada 5 segundos).',
'7154' : 'Legenda de tráfego',
'7155' : 'Tráfego de entrada',
'7156' : 'Tráfego de saída',
'7157' : 'Para ativar este recurso, ative o Intellistream',
'7158' : 'aqui',
'7159' : '.',
'7160' : 'Conectividade de rede e controle',
'7161' : 'Voz, bate-papo com vídeo e jogos',
'7162' : 'Web e vídeo da Web',
'7163' : 'Email e VPN',
'7164' : 'Downloads e Torrents, entre outros',
'7170' : 'Bytes/seg.',
'7174' : 'Hora do dia/Horas:Minutos',
'326' : 'Rede local',
'327' : 'MAC da LAN/WLAN',
'332' : 'Servidor DHCP',
'333' : 'Configurações da Internet',
'334' : 'Endereço MAC da WAN',
'337' : 'IP da WAN',
'338' : 'Gateway padrão',
'339' : 'Endereço DNS',
'gtGuestName' : 'SSID de convidado',
'gtGuestKey' : 'Chave de convidado',
'347' : 'É preciso fazer login para alterar as configurações.',
'2022' : 'Somente modem',
'2031' : 'Conectar',
'2032' : 'Desconectar',
'2033' : 'Margem de ruído',
'2034' : 'Downstream',
'2035' : 'Upstream',
'2036' : 'Atenuação (dB)',
'2037' : 'Potência de saída (dBm)',
'2038' : 'Taxa de dados (Kbps)',
'tDashboard' : 'Bem-vindo ao painel do Roteador Belkin!',
'rtFeature' : 'Características',
'rtLink' : 'Links do roteador',
'p1310t001' : 'Detalhes da conexão',
'p1310t002' : 'Testar a conexão novamente',
'p1310t003' : 'Última verificação',
'p1310t004' : 'Velocidade de download',
'p1310t005' : 'Velocidade de upload',
'p1000t001' : 'Dispositivos conectados',
'p1000t002' : 'Ver todos',
'2501' : 'Insira os seguintes parâmetros de configuração',
'2502' : 'Endereço de rede',
'2503' : 'Máscara de sub-rede',
'2504' : 'Gateway',
'396' : 'O número de Máscara de sub-rede inserido é inválido.',
'1231' : 'O gateway é inválido!',
'1361' : 'Endereço IP inválido: o primeiro número deve estar entre 1 e 254.',
'1800' : 'O endereço IP e a máscara de sub-rede não são correspondentes.',
'Support1t011' : 'Leia tudo sobre isso.',
'Support2t011' : 'Leia tudo sobre isso.',
'Support2t012' : 'Acesse o URL a seguir em um dispositivo conectado à Internet e saiba como corrigir o problema você mesmo: <STRONG>www.belkin.com/support/asdlkj</STRONG>',
'Support3t011' : 'Leia tudo sobre isso.',
'Support3t012' : 'Acesse o URL a seguir em um dispositivo conectado à Internet e saiba como corrigir o problema você mesmo: <STRONG>www.belkin.com/support/asdlkj</STRONG>',
'Support6t036' : 'Leia tudo sobre isso.',
'425' : 'Isso retornará seu roteador às suas configurações originais. Recomendamos <a href="ut_save.html">salvar/fazer backup das configurações</a> antes de restaurar as configurações originais. Salvar as configurações de seu roteador permitirá restaurá-las, se forem perdidas ou alteradas.',
'426' : 'ATENÇÃO: todas as suas configurações serão perdidas!\nTem certeza de que deseja fazer isso?',
'427' : 'A restauração das configurações padrão levará até $s segundos. Não desligue a alimentação do Roteador durante esse processo.',
'428' : 'As configurações de fábrica não serão restauradas. Nenhuma configuração será perdida!',
'429' : 'Restaurar padrões',
'301' : 'Isso reinicializa seu roteador semanalmente para que sua rede seja mais isenta de problemas.',
'302' : 'Inicializar o roteador automaticamente',
'303' : 'Definir dias',
'304' : 'Definir hora',
'527' : 'Isso permite definir as configurações do roteador para qualquer configuração que já tenha sido salva.',
'528' : 'Restaurar',
'529' : 'Digite o nome do arquivo que contém o backup das configurações.',
'530' : 'Deseja continuar e restaurar as configurações?',
'531' : 'Depois que as configurações forem restauradas, o dispositivo pode não responder aos comandos por até um minuto.\n\nIsso é normal. Não desligue o dispositivo durante esse período.',
'451' : 'Salvar suas configurações atuais do roteador permitirá restaurá-las, se forem perdidas ou alteradas. Recomendamos salvar suas configurações antes de fazer atualizações ao firmware.',
'539' : 'Salvar',
'130' : 'Você não inseriu todos os endereços IP ou alguns dos números inseridos são inválidos. O número na caixa de entrada de endereço IP deve estar entre 1 e 254.',
'541' : 'Senha do administrador:',
'542' : 'O roteador é fornecido SEM uma senha definida. Se desejar adicionar uma senha para reforçar a segurança, este é o local para defini-la.',
'543' : 'Digite a senha atual',
'544' : 'Digite a nova senha',
'545' : 'Confirme a nova senha',
'546' : 'Tempo limite do login',
'547' : '(1-99 minutos)',
'548' : 'Hora e fuso horário:',
'549' : 'Janeiro',
'550' : 'Defina seu fuso horário. Se estiver em uma região que observa o horário de verão, marque esta caixa.',
'551' : 'Fuso horário',
'606' : 'Horário de verão',
'607' : 'Ajustar horário de verão automaticamente',
'608' : 'Gerenciamento remoto:',
'609' : 'RECURSO AVANÇADO!',
'610' : 'O gerenciamento remoto permite fazer alterações nas configurações do Roteador a partir de qualquer lugar na Internet. Antes de ativar esta função,',
'611' : 'CERTIFIQUE-SE DE TER DEFINIDO A SENHA DO ADMINISTRADOR.',
'642' : 'Ativar o gerenciamento remoto aumenta seu risco de segurança. Ligue-o por períodos curtos apenas quando necessário, desligue-o quando não o estiver usando e defina uma senha.',
'612' : 'Qualquer endereço IP pode gerenciar o roteador remotamente.',
'613' : 'Somente este endereço IP pode gerenciar o roteador &nbsp;&nbsp;&nbsp;remotamente',
'614' : 'Ativação/desativação do gerenciamento remoto',
'615' : 'A Porta atribuída foi usada no Servidor virtual.',
'616' : 'O IP atribuído entra em conflito com o endereço IP atual da WAN.',
'617' : 'Ativação de UPnP:',
'618' : 'Permite ativar ou desativar o recurso UPnP do Roteador. Se você usa aplicativos que oferecem suporte a UPnP, ativar o recurso UPnP permitirá que esses aplicativos configurem o roteador automaticamente.',
'619' : 'Ativação/desativação de UPnP',
'620' : 'Ativação de atualização automática de firmware:',
'621' : 'Permite verificar automaticamente a disponibilidade de atualizações de firmware para o roteador.',
'622' : 'Ativação/desativação de atualização automática de firmware',
'623' : 'A senha atual é inválida',
'624' : 'As novas senhas inseridas não coincidem. Tente novamente.',
'626' : 'O comprimento da senha é inválido. O comprimento máximo da senha é 12 e o mínimo é 3.',
'628' : 'É altamente recomendável definir a Senha do administrador.',
'629' : 'Servidor NTP primário',
'630' : 'Servidor NTP secundário',
'640' : 'Porta de acesso remoto',
'738' : 'O tempo ocioso dos números inseridos é inválido. Precisa ser um número inteiro entre 1 e 99.',
'796' : 'A ativação do Modo turbo permite ao Roteador ou Ponto de acesso usar a Intermitência de quadro para obter o máximo rendimento do Roteador ou Ponto de acesso para clientes 802.11g. O Modo turbo funciona com clientes 802.11g que oferecem suporte ao Modo turbo. Clientes 802.11g Belkin que usam o driver mais recente oferecem suporte ao Modo turbo. Clientes que não oferecem suporte ao Modo turbo funcionam normalmente se o Modo turbo estiver ativado.',
'1282' : 'Fevereiro',
'1283' : 'Março',
'1284' : 'Abril',
'1285' : 'Maio',
'1286' : 'Junho',
'1287' : 'Julho',
'1288' : 'Agosto',
'1289' : 'Setembro',
'1290' : 'Outubro',
'1291' : 'Novembro',
'1292' : 'Dezembro',
'1373' : 'Austrália',
'1374' : 'Nova Zelândia',
'1375' : 'América do Norte',
'1376' : 'Europa',
'1377' : 'Pacífico Asiático',
'2300' : '(GMT-12:00) Enewetak, Kwajalein',
'2301' : '(GMT-11:00) Ilhas Midway, Samoa',
'2302' : '(GMT-10:00) Havaí',
'2303' : '(GMT-09:00) Alasca',
'2304' : '(GMT-08:00) Hora do Pacífico (EUA e Canadá), Tijuana',
'2305' : '(GMT-07:00) Arizona',
'2306' : '(GMT-07:00) Hora das Montanhas (EUA e Canadá)',
'2307' : '(GMT-06:00) Hora Central (EUA e Canadá)',
'2308' : '(GMT-06:00) Cidade do México',
'2309' : '(GMT-06:00) Tegucigalpa',
'2310' : '(GMT-06:00) Saskatchewan',
'2311' : '(GMT-05:00) Bogotá, Lima, Quito',
'2312' : '(GMT-05:00) Hora do Leste (EUA e Canadá)',
'2313' : '(GMT-05:00) Indiana (Leste)',
'2314' : '(GMT-04:00) Hora do Atlântico (Canadá)',
'2315' : '(GMT-04:00) Caracas, La Paz',
'2316' : '(GMT-04:00) Santiago',
'2317' : '(GMT-03:00) Newfoundland',
'2318' : '(GMT-03:00) Brasília',
'2319' : '(GMT-03:00) Buenos Aires, Georgetown',
'2320' : '(GMT-02:00) Atlântico Central',
'2321' : '(GMT-01:00) Açores, Cabo Verde',
'2322' : '(GMT) Casablanca, Monróvia',
'2323' : '(GMT) Hora de Greenwich: Lisboa, Londres, Edimburgo',
'2324' : '(GMT) Hora de Greenwich: Dublin',
'2325' : '(GMT+01:00) Amsterdã, Berlim, Berna, Roma',
'2326' : '(GMT+01:00) Estocolmo, Viena, Belgrado',
'2327' : '(GMT+01:00) Bratislava, Budapeste, Liubliana',
'2328' : '(GMT+01:00) Praga, Bruxelas, Copenhague, Madri',
'2329' : '(GMT+01:00) Paris, Sarajevo, Skopje',
'2330' : '(GMT+01:00) Varsóvia, Zagreb',
'2331' : '(GMT+02:00) Atenas, Istambul, Minsk, Vilnius, Sofia',
'2332' : '(GMT+02:00) Bucareste',
'2333' : '(GMT+02:00) Cairo',
'2334' : '(GMT+02:00) Harare, Pretória',
'2335' : '(GMT+02:00) Helsinque, Riga, Tallinn',
'2336' : '(GMT+02:00) Israel',
'2337' : '(GMT+03:00) Bagdá, Kuwait, Nairobi, Riad',
'2338' : '(GMT+03:00) Moscou, São Petersburgo, Volgogrado, Kazan',
'2339' : '(GMT+03:00) Teerã',
'2340' : '(GMT+04:00) Abu Dhabi, Muscat, Tbilisi',
'2341' : '(GMT+04:00) Kabul',
'2342' : '(GMT+05:00) Islamabad, Karachi, Ekaterinburgo',
'2343' : '(GMT+05:30) Delhi',
'2344' : '(GMT+06:00) Almaty, Dacca',
'2345' : '(GMT+07:00) Bancoc, Jacarta, Hanói',
'2346' : '(GMT+08:00) Pequim, Chongqing, Urumqui',
'2347' : '(GMT+08:00) Hong Kong, Perth, Cingapura, Taipé',
'2348' : '(GMT+09:00) Tóquio, Osaka, Sapporo',
'2349' : '(GMT+09:00) Seul',
'2350' : '(GMT+09:30) Adelaide, Darwin',
'2351' : '(GMT+10:00) Brisbane',
'2352' : '(GMT+10:00) Canberra, Melbourne, Sydney',
'2353' : '(GMT+10:00) Hobart',
'2354' : '(GMT+10:00) Guam, Port Moresby',
'2355' : '(GMT+11:00) Magadan, Solamon, Nova Caledônia',
'2356' : '(GMT+12:00) Wellington, Auckland',
'2357' : '(GMT+12:00) Fiji',
'2358' : '(GMT+13:00) Nuku`alofa.',
'2370' : 'Dom',
'2371' : 'S',
'2372' : 'T',
'2373' : 'Q',
'2374' : 'Qui',
'2375' : 'S',
'2376' : 'Sáb',
'2401' : 'Modo ECO',
'2402' : 'Esmaecer LEDs do painel frontal',
'2403' : 'Desativar rádio de',
'2404' : 'exceto',
'2405' : 'Esta função permite esmaecer os LEDs na parte frontal do Roteador para economizar energia. Também é possível desativar o rádio sem fio em horários predeterminados.',
'2406' : 'A hora inicial não pode ser posterior à hora final!',
'322' : 'Versão do firmware',
'431' : 'De tempos em temos, a Belkin pode lançar novas versões da programação operacional do seu roteador. Essas atualizações contêm aprimoramentos e correções para o roteador.',
'432' : '<b>NOTA:</b> faça o <a href="ut_save.html">backup de suas configurações atuais</a> antes de atualizar para uma nova versão do firmware.',
'433' : 'Clique aqui',
'434' : 'para ir para a página Salvar/fazer backup das configurações atuais.',
'435' : 'Verificar se há uma nova versão de firmware',
'436' : 'Verificar firmware',
'437' : 'Atualizar firmware',
'438' : 'Atualizar',
'439' : 'Especifique o local do arquivo de atualização. Digite o caminho e o nome do arquivo ou clique em "Procurar" para navegar até o local do arquivo.',
'440' : 'Tem certeza de que deseja continuar a atualização?',
'441' : 'Ao final da atualização, o Roteador pode não responder aos comandos por até um minuto. Isso é normal. Não desligue nem reinicie o Roteador durante esse período.',
'1198' : 'Atualização de firmware em andamento.',
'534' : 'Reiniciar roteador',
'535' : 'Tem certeza de que deseja reiniciar o Roteador? Reiniciar o Roteador não afetará sua configuração',
'536' : 'Aguarde até $s segundos até que o Roteador seja reiniciado. Não desligue o Roteador até que a redefinição esteja concluída.',
'7001' : 'Curta sua música, fotos e vídeos pessoais de maneira conveniente por meio de qualquer dispositivo DLNA conectado à sua rede. Da plataforma Twonky.',
'7002' : 'Servidor DLNA',
'7003' : 'Nome do servidor',
'7004' : 'Unidades compartilhadas:',
'7005' : 'Pronto',
'7006' : 'Indexando...',
'7007' : 'Servindo:',
'7008' : 'vídeos',
'7009' : 'músicas',
'7010' : 'imagens',
'7011' : 'Não compartilhado com a rede.',
'7012' : 'Não há nenhuma unidade USB conectada ao roteador.',
'7016' : 'Atualizar índice',
'7017' : 'Insira um nome fácil de lembrar para o servidor de mídia',
'7018' : 'Caractere não permitido',
'7019' : 'Você tem mais mídia do que o roteador pode indexar. Por isso, estamos servindo os primeiros',
'7020' : 'itens.',
'7021' : 'Twonky é uma linha de produtos de software para o lar digital criada pela PacketVideo Corporation (PV).',
'7022' : 'Não é possível indexar uma unidade somente leitura.',
'7023' : 'MB',
'7024' : 'GB',
'7025' : 'TB',
'7026' : 'vídeo',
'7027' : 'música',
'7028' : 'imagem',
'770' : 'Use esta opção somente para conexões a Cabo Bigpond e OptusNet. ',
'771' : 'IMPORTANTE:',
'775' : '3) Reconecte o cabo de alimentação ao roteador Belkin.',
'776' : 'Para confirmar que você foi conectado com êxito à Internet, abra um navegador da Internet, como Internet Explorer, Firefox ou Safari, e assegure-se de que pode navegar por páginas da Web.',
'731' : 'Nome de usuário',
'489' : 'Senha',
'732' : 'Digitar senha novamente',
'756' : 'Insira sua senha novamente!',
'1379' : 'Você não inseriu todos os números do IP ou alguns dos números inseridos são inválidos. O endereço IP deve estar no formato x.y.y.x (onde y é qualquer valor entre 0 e 255 e x é qualquer valor entre 1 e 254).',
'709' : 'Para inserir suas configurações de IP dinâmico, digite suas informações abaixo e clique em "Salvar".',
'710' : 'Nome do host',
'711' : 'Nome de host = Um nome exigido por alguns Provedores de serviços da Internet para conexão a seus sistemas.',
'712' : 'Alterar o endereço MAC da WAN',
'330' : 'Endereço IP',
'331' : 'Máscara de sub-rede',
'659' : 'MTU inválida: precisa estar entre 500 e 1500.',
'730' : 'Para inserir suas configurações de PPPoE, digite suas informações abaixo e clique em "Salvar".',
'733' : 'Nome do serviço (opcional)',
'734' : 'MTU (500-1500)',
'735' : 'Não altere a configuração de MTU a menos que seu ISP exija um valor diferente',
'736' : 'Desconectar após',
'737' : 'minutos de inatividade.',
'741' : 'Valor de MTU inválido',
'2005' : 'IP atribuído pelo Provedor de serviços de Internet',
'2021' : 'Clique aqui para inserir suas configurações de DNS',
'2023' : 'Aspas duplas não são permitidas.',
'2024' : 'O nome do usuário contém caracteres inaceitáveis',
'2025' : 'A barra invertida não é permitida.',
'2030' : 'Você não inseriu todo o Gateway padrão ou alguns dos números inseridos são inválidos. Os números devem estar entre 0 e 255',
'2052' : 'A senha contém caracteres inaceitáveis (<, > e &)',
'691' : 'Um tipo de conexão dinâmica é o mais comum. Se você usa um modem a cabo, muito provavelmente tem uma conexão dinâmica. Se você tiver um modem a cabo ou não tiver certeza quanto ao tipo de sua conexão, use este.',
'723' : 'Inclusive ISPs que requerem um nome de host e ISPs que vinculam a conexão a um endereço MAC específico.',
'693' : 'O tipo de conexão com endereço IP estático é menos comum que os outros. Use esta seleção somente se seu Provedor de serviços de Internet tiver fornecido um endereço IP que nunca é alterado.',
'724' : 'O Roteador oferece suporte à conexão a um Provedor de serviços de Internet que atribui um endereço IP estático.',
'695' : 'Se você usa um modem DSL e/ou se seu Provedor de serviços de Internet forneceu um nome de usuário e senha, seu tipo de conexão é PPPoE. Use esse tipo de conexão.',
'725' : 'O Roteador oferece suporte a um tipo de conexão dinâmica que requer o login PPPoE para autenticação.',
'697' : 'Alguns ISPs usam o protocolo PPTP para ligar os assinantes à central. Isso exige que você insira várias configurações adicionais que o seu ISP deve ter fornecido. Depois de salvar suas alterações, o indicador de status da Internet ficará verde, se der tudo certo.',
'726' : 'Para uso somente com ISPs que exigem método de ligação PPTP.',
'699' : 'Use esta opção somente para conexões a Cabo Bigpond e OptusNet.',
'728' : 'SOMENTE usuários australianos. O Roteador oferece suporte a conexões ao Telstra BigPond.',
'2019' : 'Para inserir suas configurações de Modem, digite suas informações abaixo e clique em "Salvar".',
'tBackToConnectionType' : 'Voltar para Tipo de conexão',
'759' : 'Para inserir suas configurações de IP estático, digite suas informações abaixo e clique em "Salvar".',
'761' : 'Máscara de sub-rede',
'762' : 'Endereço do gateway do Provedor de serviços de Internet',
'754' : 'Clique aqui para inserir suas configurações de DNS',
'715' : 'Cada dispositivo na rede tem um endereço de hardware exclusivo (endereço MAC) que o identifica para outros dispositivos na rede e na Internet.  Alguns Provedores de serviços de Internet (ISPs) exigem que você insira o endereço MAC de sua placa de rede ou do roteador antigo nas configurações do roteador. Se você não tiver certeza, insira o endereço MAC do computador que estava originalmente conectado ao modem antes da instalação do Roteador.',
'716' : 'Endereço MAC da WAN',
'717' : 'Clonar endereço MAC do computador',
'718' : 'Clonar',
'721' : 'A guia Internet/WAN é onde você configura o Roteador para que se conecte com seu Provedor de Serviços da Internet. O Roteador pode se conectar com o sistema de praticamente qualquer Provedor de serviços da Internet (ISP), desde que as configurações do Roteador estejam corretas para o tipo de conexão do ISP. Para configurar o Roteador para conexão com seu ISP, clique em "Tipo de conexão" na guia Internet/WAN, localizada à esquerda da tela.',
'722' : 'Tipos de conexão compatíveis:',
'htWANMainContent' : 'Selecionar tipo de conexão:',
'700' : 'Avançar',
'744' : 'Conta PPTP',
'745' : 'Senha',
'746' : 'Digitar senha novamente',
'747' : 'Nome do host',
'1770' : 'IP atribuído pelo Provedor de serviços de Internet',
'1771' : 'Sim',
'1772' : 'Não',
'1773' : 'Endereço do serviço',
'750' : 'Máscara de sub-rede',
'778' : 'O Roteador pode ser configurado para atuar estritamente como um Ponto de acesso, ignorando todas as funções de roteamento e firewall. Para isso, selecione "Ativar" e digite o endereço IP a ser atribuído ao Ponto de acesso.',
'779' : 'Modo de ponto de acesso:',
'781' : 'Especificar máscara de sub-rede',
'801' : 'Modo de segurança',
'806' : 'Você pode definir aqui as configurações de segurança sem fio/criptografia. A segurança deve ser ativada para garantir a máxima segurança sem fio. WPA (Wi-Fi Protected Access) proporciona alterações de chave dinâmicas e constitui a melhor solução de segurança. Em ambientes sem fio em que nem todos os dispositivos oferecem suporte a WPA, o WEP (Wired Equivalent Privacy) deve ser usado.',
'377' : 'Automático',
'487' : 'LIGADO',
'488' : 'DESLIGADO',
'787' : 'Para fazer alterações às configurações sem fio do Roteador, faça-as aqui. Clique em "Salvar" para salvar as configurações.',
'788' : 'Canal sem fio',
'789' : 'SSID',
'790' : 'Modo sem fio',
'794' : 'Transmitir SSID',
'797' : 'Modo protegido',
'1300' : 'Canal de extensão',
'1301' : 'Largura de banda',
'1304' : '802.11e/WMM QoS',
'852' : 'O comprimento da chave pré-compartilhada deve ser de 8 a 63 caracteres ou 64 hexadecimais',
'856' : 'WPA (Wi-Fi Protected Access) com uma chave pré-compartilhada: A chave é uma senha, na forma de uma palavra, frase ou série de letras e números. A chave precisa ter entre <b>8</b> e <b>63</b> caracteres e pode incluir espaços e símbolos, ou <b>64</b> caracteres hexadecimais (somente 0-F). Cada cliente que se conecta à rede precisa usar a mesma chave (chave pré-compartilhada).',
'115' : 'Você não inseriu todos os dígitos hexadecimais ou alguns dos dígitos hexadecimais inseridos são inválidos. Um dígito hexadecimal pode ser um número de 0 a 9 ou uma letra de A a F.',
'308' : '<b>SPI</b> Inspeção de pacote com monitoração de estado. SPI é o tipo de segurança da Internet de grau corporativo fornecido pelo gateway de rede doméstica HomeConnect. Usando SPI, o gateway atua como um "firewall", protegendo a rede contra hackers de computadores.',
'808' : 'NOTA:',
'809' : 'Para gerar automaticamente os pares hexadecimais usando uma frase-senha, pressione o botão à direita e insira a frase-senha aqui',
'810' : 'Frase-senha',
'811' : 'Gerar',
'812' : 'Insira uma frase-senha',
'814' : 'Chave',
'818' : '(pares de dígitos hexadecimais)',
'296' : '<b>Endereço IP</b> IP significa Protocolo de Internet. Um endereço IP consiste em uma série de quatro números separados por um ponto e identifica um único host de computador exclusivo da Internet. Exemplo: 192.34.45.8.',
'298' : '<b>ISP</b> Provedor de serviços de Internet. Um ISP é uma empresa que fornece conectividade à Internet para indivíduos e outras empresas ou organizações.',
'807' : '(13 pares de dígitos hexadecimais)',
'813' : 'A chave não está completa',
'821' : 'não está completa',
'1190' : '<br>Para se registrar e obter seu nome de host no DNS dinâmico, visite o site http://www.dyn.com<br>',
'1339' : 'Recomenda-se usar WPA/WPA2 quando o WPS estiver ativado.',
'1363' : 'Em andamento. Aguarde...',
'1364' : 'Erro detectado. Tente novamente.',
'1365' : 'Erro de sobreposição de sessões: Aguarde 60 segundos antes de iniciar o processo novamente ou consulte seu utilitário de cliente para conectar-se manualmente a esta rede',
'1366' : 'Sucesso. O dispositivo está conectado ao Roteador.',
'1370' : 'PIN inválido! O PIN do dispositivo tem quatro ou oito dígitos numéricos. Verifique e insira novamente.',
'1620' : 'Iniciando - Inicie o PBC WPS no dispositivo cliente em até dois minutos.',
'1621' : 'Iniciando - Inicie o WPS no dispositivo cliente em até dois minutos.',
'1622' : 'Tempo limite = Nenhum cliente se conecta ao Roteador.',
'1623' : 'Mensagem de WPS (Wi-Fi Protected Setup)',
'1393' : 'Botão de hardware de WPS',
'1320' : 'WPS (Wi-Fi Protected Setup) é o método padrão do setor para simplificar a configuração e o gerenciamento da segurança de redes Wi-Fi. Agora você pode configurar e se conectar com facilidade a uma rede 802.11 com WPA habilitado com dispositivos certificados para WPS, usando o método Número de informação pessoal (PIN) ou Configuração de botão de ação (PBC). Dispositivos herdados, sem WPS, podem ser adicionados à rede com o tradicional método de configuração manual.',
'1321' : 'Método do Número de informação pessoal (PIN)',
'1322' : 'Insira o PIN do dispositivo cliente e clique em "Registrar". Em seguida, inicie, em até dois minutos, o WPS no dispositivo cliente a partir de seu utilitário sem fio ou aplicativo WPS',
'1323' : 'Inserir PIN do dispositivo cliente',
'1324' : 'Registrar',
'1325' : 'Se um registrador externo estiver disponível, você também poderá inserir o PIN do Roteador no registrador externo. Para alterar o PIN do Roteador, clique em "Gerar novo PIN" ou em "Restaurar PIN padrão" para redefinir o PIN ao padrão de fábrica.',
'1326' : 'PIN do roteador',
'1327' : 'Gerar novo PIN',
'1328' : 'Restaurar PIN padrão',
'1329' : 'Método de Configuração do botão de pressão (PBC)',
'1330' : 'Mantenha o botão PBC pressionado no Roteador por 3 segundos ou clique em "Iniciar PBC". Em seguida, em até dois minutos, inicie o PBC no dispositivo que deseja conectar ao Roteador.',
'1331' : 'Iniciar PBC',
'1332' : 'Método de configuração manual',
'1333' : 'Para dispositivos cliente sem WPS, configure o dispositivo manualmente com as configurações a seguir.',
'1334' : 'Segurança sem fio',
'1336' : 'Autenticação da rede',
'1337' : 'Criptografia de dados',
'1338' : 'Chave de rede (PSK)',
'1340' : 'PIN de desbloqueio do Roteador',
'1341' : 'PIN do Roteador desativado devido a um número excessivo de tentativas malsucedidas de acesso',
'1390' : 'Falha da soma de verificação do PIN! Verifique e insira novamente.',
'1391' : 'PIN inválido! O PIN do dispositivo tem oito dígitos numéricos. Verifique e insira novamente.',
'1392' : 'Configurado',
'1396' : 'Configurar a segurança sem fio manualmente',
'1397' : 'segurança sem fio',
'common_err1' : '%s é NULO',
'upgrade_err2' : 'Atualização de firmware terminada devido a recursos insuficientes. Falha da atualização.\nTente novamente quando o sistema estiver ocioso (sem tráfego de Internet)',
'upgrade_err3' : 'Não é possível carregar. Contate o administrador.',
'upgrade_err4' : 'O firmware é grande demais. Houve falha da atualização.',
'upgrade_err5' : 'Você já tem o firmware mais recente instalado.',
'upgrade_err6' : 'Parece que a atualização de firmware foi corrompida. Volte a baixar o arquivo de firmware e tente novamente.',
'show10' : 'Lista de clientes DHCP',
'show54' : 'Configurações de conexão',
'btn2' : 'Aplicar alterações',
'cff1' : 'Verificar se firmware bem-sucedido',
'PM2' : ':30 PM',
'AM2' : ':30 AM',
'Dimicons' : 'Esmaecer ícones',
'EcoTo' : 'a',
'fvrm' : 'Desative o Gerenciamento remoto. Porque sua porta está em conflito com a porta de entrada de um dos servidores virtuais.',
'lsipm2' : 'Endereço IP da LAN inválido: o último número não pode ser 0 nem 255',
'lsldnm' : 'Nome do domínio local inválido: `~!@#$%^&*()_+[]{}\|;:\'"<>/?.,',
'lsipm5' : 'O endereço IP selecionado deve ser um IP não roteável.\n  192.168.x.x (onde x é qualquer número entre 0 e 255). \n10.x.x.x (onde x é qualquer número entre 0 e 255).\n172.y.x.x (onde y é qualquer número entre 16 e 31, e x é qualquer número entre 0 e 255).',
'ufy4' : 'A restauração das configurações padrão levará até 60 segundos. Não desligue o Roteador durante esse processo.',
'ufe11' : 'Ao final da atualização, o Roteador pode não responder aos comandos por até 180 segundos. Isso é normal. Não desligue nem reinicie o Roteador durante esse período.',
'ur5' : 'Aguarde até 30 segundos até que o Roteador seja reiniciado. Não desligue o Roteador até que a redefinição esteja concluída.',
'ur6' : 'Aguarde até 60 segundos até que o Roteador seja reiniciado. Não desligue o Roteador até que a redefinição esteja concluída.',
'usys83' : 'Os campos Nova senha e Confirmar nova senha não coincidem',
'usys83_1' : 'A senha e a confirmação da senha não coincidem.',
'usys85_1' : 'O comprimento da senha de administração deve estar entre 3 e 12.',
'usys88' : 'A senha atingiu seu comprimento máximo!',
'usys89' : 'AM',
'usys90' : 'PM',
'usys92' : 'O número da porta de acesso remoto deve estar entre 1 e 65535.',
'usysipm' : 'Você não inseriu todos os números do IP ou alguns dos números inseridos são inválidos. O endereço IP deve ter o formato x.y.y.z (onde x é qualquer número de 1 a 223, y é qualquer número de 0 a 255 e z é qualquer número de 1 a 254).',
'self_healing60' : 'Autorrecuperação',
'chkwait' : 'Verificando se há um novo firmware...',
'Europe' : 'Europa',
'Australia' : 'Austrália e Nova Zelândia',
'AsiaPacific' : 'Pacífico Asiático',
'NorthAmerica' : 'América do Norte',
'vjs1' : 'Endereço IP inválido: comprido demais. Verifique novamente',
'vjs2' : 'Endereço IP inválido: falta um \'.\'. Verifique novamente!',
'vjs3' : 'Endereço IP inválido: faltam números entre os \'.\'. Verifique novamente!',
'vjs4' : 'Endereço IP inválido: há um \'.\' extra. Verifique novamente!',
'vjs5' : 'Endereço IP inválido: os números entre os \'.\' são grandes demais. Verifique novamente!',
'vm1' : 'Caractere inválido ',
'vm2' : ' na posição ',
'vm3' : 'Deve ser ',
'vjs6' : 'Formato de ano inválido. Insira, por exemplo, 2002',
'vm4' : 'Número inválido ',
'vjs8' : 'Inválido: precisa estar entre 1970 e 2037',
'vjs9' : 'Formato de mês inválido. Insira, por exemplo, 01...12',
'vjs161' : ' não em ',
'vjs162' : ' máscara de rede',
'vjs163' : 'O intervalo de DHCP permitido é ',
'vjs17' : 'Você digitou duas senhas diferentes. Verifique novamente!',
'vjs18' : 'Insira o número da porta inicial.',
'vjs19' : 'O número da porta inicial deve ser inferior ao número da porta final.',
'vjs23' : 'Endereço MAC inválido: é um endereço de transmissão.',
'vjs24' : 'Endereço MAC inválido: é um endereço nulo.',
'vjs25' : 'Endereço MAC inválido: é um endereço mutlicast.',
'vjs26' : 'Endereços IP inicial e final inválidos. O IP final deve ser superior ao IP inicial.',
'vjs28' : 'Formato de máscara de rede inválido.',
'vjs29' : 'Formato inválido: a máscara de rede aqui deve ser 255.255.255.0 ou 255.255.255.128 ou 255.255.255.192 ou 255.255.255.224 ou 255.255.255.240 ou 255.255.255.248 ou 255.255.255.252 ou 255.255.255.254',
'vjs30' : 'Endereço IP inválido: o último número não pode ser 0 nem 255',
'vjs31' : 'Endereço IP da LAN inválido: o primeiro número não pode ser 127',
'vjs32' : 'Endereço IP da LAN inválido: não pode ser 0.0.0.0',
'vjs33' : 'Endereço IP da LAN inválido: precisa ser inferior a 224.0.0.0',
'vjs42' : 'Os números de máscara de sub-rede inseridos são inválidos.',
'vjs45' : 'Especificar endereço IP',
'vjs46' : 'é inválida. Corrija-a primeiro!',
'wcc2' : 'Selecione seu tipo de conexão:',
'wcc13' : 'L2TP',
'wcc14' : 'Alguns ISPs usam o protocolo L2TP para ligar os assinantes à central. Isso exige que você insira várias configurações adicionais que o seu ISP deve ter fornecido. Depois de salvar suas alterações, o indicador de status da Internet ficará verde, se der tudo certo.',
'wds4_1' : 'Endereço DNS primário',
'wds7' : 'Será preciso inserir as configurações de DNS fornecidas pelo ISP, se você não usar a função DNS automático',
'wds8' : 'Para fazer alterações ao DNS, viste primeiro %s Filtros de site da Web %s e selecione "Sem filtros".',
'wmc6' : 'O endereço MAC da WAN não pode ser o mesmo endereço MAC da LAN. Escolha outro.',
'wdd9 ' : 'Nenhum Serviço DDNS selecionado.\n',
'wdd10' : 'Não há nenhum Serviço DDNS selecionado e todos os dados nesta página serão perdidos. Continuar?',
'wm10b' : 'Para uso somente com ISPs que exigem método de ligação L2TP.',
'pm' : 'O serviço não pôde verificar a senha inserida. Confira se digitou sua senha corretamente.',
'wpp17' : 'Conta L2TP',
'wpp18' : 'Senha L2TP',
'wpp19' : 'Insira sua conta L2TP',
'wpp23' : 'Atribuição de endereço IP',
'wpp24' : 'Usar endereço IP estático',
'wpp25' : 'Obter dinamicamente do ISP',
'wppa7' : 'Meu endereço IP',
'wppa9' : 'ID da conexão (opcional)',
'wppa13' : 'Insira sua conta PPTP',
'wppa18' : 'Nome de serviço inválido.',
'ws2' : 'Para inserir suas configurações de IP estático, digite suas informações abaixo e clique em "Aplicar alterações".',
'sm_1' : 'A máscara de sub-rede inserida é inválida.',
'ws8' : 'Insira/valide suas configurações de endereço DNS na tela a seguir',
'wt2' : 'Clicar em Aplicar alterações reiniciará o roteador. Depois que o roteador for reiniciado, será preciso fazer o seguinte',
'wt3' : '1) Desconecte o cabo de alimentação tanto do Modem a cabo quanto do Roteador Belkin',
'wt4' : '2) Reconecte o cabo de alimentação ao Modem a cabo e aguarde até que todas as luzes no modem parem de piscar',
'wt5' : '3) Reconecte o cabo de alimentação ao Roteador Belkin',
'wt6' : 'Para confirmar que você foi conectado com êxito à Internet, abra um navegador da Internet, como Internet Explorer, Firefox ou Safari, e assegure-se de que pode navegar por páginas da Web.',
'wlad2' : 'Ativar/Desativar',
'wlc2' : 'Para fazer alterações às configurações sem fio do roteador, faça-as aqui. Clique em "Aplicar alterações" para salvar as configurações.',
'wlcgb' : '802.11b+g',
'wlcg' : '802.11g',
'wlcb' : '802.11b',
'wlc20' : '20 MHz',
'wlc22' : '20/40 MHz',
'wlcoff' : 'DESLIGADO',
'wlcngb1' : '802.11b e 802.11g e 1x1 802.11n',
'wlcn1' : '1x1 802.11n',
'wlcngb2' : '802.11b e 802.11g e 802.11n',
'wlcn2' : '802.11n',
'wlcgn' : '802.11g+n',
'wlca' : '802.11a',
'wlcan' : '802.11a e 802.11n',
'wlc26' : 'Ocultar o nome da rede desativará o WPS.',
'wlc27' : 'Alterar o tipo de segurança desativará o WPS.',
'wlc28' : 'O WPS está desativado devido ao seu <A href=%s><B>tipo de segurança sem fio</B></A>.',
'wlc29' : 'O WPS está desativado porque você ocultou o nome da sua rede (SSID).',
'wlc30' : 'O WPS está desativado desde que você ocultou o nome da sua rede (SSID) e devido ao seu <A href=%s><B>tipo de segurança sem fio</B></A>.',
'wlc31' : 'Ativar o WPS voltará a mostrar o nome de sua rede (SSID).',
'wlc32' : 'Ativar o WPS alterará o tipo de segurança para WPA/WPA2. A senha atual da rede funcionará corretamente.',
'wlc33' : 'Ativar o WPS voltará a mostrar o nome da rede (SSID) e alterará o tipo de segurança para WPA/WPA2. A senha atual da rede funcionará corretamente.',
'wle3a' : 'WPA-PSK',
'wle3b' : 'WPA2-PSK',
'wle3c' : 'WPA-PSK + WPA2-PSK',
'wps1' : 'WPS (Wi-Fi Protected Setup)',
'wps3' : 'Configure a segurança sem fio',
'wps17' : 'Para dispositivos cliente sem WPS, execute o Assistente de segurança da Belkin do CD e configure manualmente o dispositivo com as seguintes configurações:',
'wps23' : 'WPA+WPA2-Personal (PSK)',
'wps25' : 'TKIP+AES',
'wps27' : 'Chave de rede (WEP):',
'wps28_1' : 'NULO',
'wle11' : 'Chave 1',
'wle12' : 'Chave 2',
'wle13' : 'Chave 3',
'wle14' : 'Chave 4',
'wpskerr2' : 'A chave precisa ter entre 8 e 63 caracteres e pode incluir espaços e símbolos, ou 64 caracteres hexadecimais (somente 0-F)!',
'wpskerr4' : 'É preciso inserir a Chave de convidado',
'wpskerr7' : 'A Chave de convidado deve ter 8 caracteres',
'wpskerr8' : 'A Chave de convidado não pode ser a mesma que a Chave de rede',
'wlguest1' : 'A SSID não pode ser a mesma que a SSID de convidado',
'wlguest2' : 'A SSID de convidado não pode ser a mesma que a SSID',
'rs_crc' : 'Restaurar falha < CRC >',
'rs_long' : 'Restaurar falha <too long>',
'rs_disposition' : 'Restaurar falha <No Content-Disposition>',
'rs_getpid' : 'Restaurar falha <Can\'t get pid!>',
'rs_unmatchpid' : 'Restaurar falha <Unmatched pid>',
'msg_ddns3 ' : 'Os campos de nome de domínio não podem ficar em branco.\n',
'msg_lan_dhcp1 ' : 'Solicitando informações do Gateway.',
'msg_lan_dhcp2 ' : 'Atualizando o banco de dados de configuração.',
'msg_wan_stat1 ' : 'Endereço IP ',
'msg_wan_stat2 ' : ' não está na ',
'msg_wan_stat3 ' : ' rede.',
'msg_wls_chan2 ' : 'A SSID de convidado não pode ser definida como NULO!\n',
'fw_not_interrupt ' : 'NÃO INTERROMPA NEM DESCONECTE O ROTEADOR, visto que isso pode deixar o Roteador inoperante.',
'msg_invalid_char ' : 'Caracteres inválidos encontrados. Os caracteres válidos são: 0-9, a-z, A-Z, `~!@#$%^&*()_-+=|\\{}[]:";\',.<>/?',
'msg_invalid_domain_char ' : 'Nome do domínio local inválido'+': ~!@#$%^&*()=+{}[]|":;\\\'?/<>,`',
'msg_invalid_char_1 ' : 'Caracteres inválidos encontrados. Os caracteres válidos são letras e números. Os símbolos a seguir são inválidos: `~!@#$%^&*()_+[]{}\\|;:\'"<>/?.,',
'msg_hostIP_invalid ' : 'O endereço IP do host é inválido. Não deve ser o IP de LAN do Roteador.\n',
'msg_dmzIP ' : 'Endereço IP da DMZ.',
'msg_blank ' : ' não pode ficar em branco.\n',
'msg_space ' : 'Vazios ou espaços não são permitidos em %s\n',
'msg_blank_in ' : 'Vazios não são permitidos em %s\n',
'msg_allspaces ' : 'O %s não pode ser formado apenas por espaços\n',
'msg_invalid ' : 'Caractere ou caracteres inválidos em %s\nOs caracteres válidos são: \n%s\n\n',
'msg_check_invalid ' : '%s contém um número inválido\n',
'msg_valid_range ' : '%s é inválido. O intervalo válido é de %s a %s\n',
'msg_invalid_mac ' : 'Endereço MAC inválido.\n',
'msg_multi_mac' : 'O endereço MAC não pode ser um endereço multicast.\n',
'msg_confirmDefault ' : 'Atenção!\nCarregar as Configurações padrão de fábrica apagará todas as configurações atuais.\nTem certeza de que deseja fazer isso?',
'Allowed_Services' : 'Serviços permitidos',
'Allowing_Url' : 'Permissão de site por endereço de URL ',
'Allowing_Keyword' : 'Permissão de site por palavra-chave',
'wipv63' : 'Dispositivos conectados ao roteador podem se comunicar uns com os outros usando pacotes IPv6 nativos. Os pacotes IPv6 na LAN serão enviados automaticamente a todas as interfaces da LAN (portas Ethernet e redes sem fio tanto de 2,4 GHz quanto de 5 GHz).',
'wipv64' : 'Quando a passagem IPv6 estiver ativada, os pacotes IPv6 também serão copiados na interface da WAN.(Quando ativado, isso cria uma conexão direta desprotegida com a Internet.)',
'wipv65' : 'Entre em contato diretamente com seu Provedor de serviços de Internet para obter informações sobre seu suporte a IPv6.',
'wipv67' : 'IPv6 de Internet',
'wipv68' : 'Sua rede é compatível com IPv6.',
'wipv69' : 'Passagem',
'mf1' : 'Estas páginas permitem ajustar o comportamento de seu roteador quando apresentado a determinados tipos de tráfego de mídia.',
'mf2' : 'Otimize sua conexão à Internet automaticamente para os diferentes tipos de tráfego.',
'mf3' : 'Veja como seu roteador está sendo usado.',
'mf8' : 'Registrado em %s',
'mf10' : 'Download',
'mf11' : 'Upload',
'mf12' : 'Velocidade',
'mf15' : 'Aplicar configurações',
'mf18' : 'Inserir entre o número {0.1-%s}.',
'mf20' : 'Somente entre {0.1-%s}.',
'mf26' : 'Registrado manualmente em %s',
'mf32' : 'ou',
'mf44' : 'Os resultados do teste automático de velocidade podem não ser 100% precisos devido ao tráfego da Internet ou a outras condições. Para comparar resultados, visite um site de teste de velocidade ou contate seu Provedor de serviços de Internet para confirmar suas velocidades na Internet. Se os resultados de velocidade forem inconsistentes, você poderá inserir os valores manualmente.',
'media_dlna18' : 'Sem título',
'media_dlna21' : 'Você tem mais mídia do que seu roteador pode indexar. Por isso, estamos servindo os primeiros 12.000 itens.',
'errSubnetMaskInvalid_2' : 'A máscara de sub-rede não se parece com uma máscara de sub-rede. Verifique o valor.',
'htWAN_L2TP' : 'Configurações de L2TP',
'htWAN_L2TPContent' : 'Alguns ISPs usam o protocolo L2TP para ligar os assinantes à central. Isso exige que você insira várias configurações adicionais que o seu ISP deve ter fornecido. Depois de salvar suas alterações, o indicador de status da Internet ficará verde, se der tudo certo.',
'p400t001_error' : 'Conecte tudo mais rapidamente.',
'p400t018_error' : 'Por que preciso renomear?',
'p400t019_error' : 'Isso é o que você verá ao procurar sua rede a partir de outros dispositivos. Nomes de rede exclusivos são mais fáceis de encontrar e lembrar. Se seus diversos dispositivos sem fio tiverem sido conectados anteriormente a um roteador diferente, usar o mesmo nome de rede e senha aqui permitirá que eles se conectem automaticamente, sem a necessidade de informá-los novamente. ',
'dhToggleBand2G' : 'Mostrar 2,4 GHz',
'772' : 'Clicar em Aplicar alterações reiniciará o roteador. Depois que o roteador for reiniciado, será preciso fazer o seguinte:',
'773' : '1) Desconecte o cabo de alimentação tanto do Modem a cabo quanto do Roteador Belkin',
'774' : '2) Reconecte o cabo de alimentação ao Modem a cabo, aguarde até que todas as luzes no modem parem de piscar',
'dft001' : 'Parece que você não está conectado.',
'dft002' : 'Se precisar de suporte e tiver um dispositivo conectado, visite <strong>help.belkin.com</strong>.',
'gtNoSecCard     ' : 'Anote o nome de sua rede e a senha para usá-los mais tarde.',
'gtFWUpdateMobileError' : 'No momento, não é possível carregar arquivos de firmware a partir de dispositivos móveis.',
'gtSettingsMobileError' : 'No momento, os arquivos de configurações não podem ser carregados de dispositivos móveis.',
'gtMoreFromInternet' : 'Conecte-se à Internet para obter mais',
'gtCantConnect' : 'Não podemos nos conectar à Internet.',
'p802t004' : 'Vá para o menu de rede sem fio de seu dispositivo',
'p803t004' : 'Vá para o menu de rede sem fio de seu dispositivo',
'PIC-S1t001' : 'Bloquear todos os dispositivos',
'gtUnnamedDevice' : 'Dispositivo sem nome',
'gtIC' : 'Controle da Internet',
'errDefaultGatewayEmpty' : 'O endereço de gateway padrão não pode ficar em branco.',
'errDefaultGatewayInvalid' : 'O endereço de gateway padrão deve ser quatro números (0-255) separados por pontos. Verifique o valor.',
'errDNSServerEmpty' : 'O endereço do servidor DNS não pode ficar em branco.',
'errDNSServerInvalid' : 'O endereço de servidor DNS deve ser quatro números (0-255) separados por pontos. Verifique o valor.',
'errIpAddressEmpty' : 'O endereço IP não pode ficar em branco.',
'errIpAddressInvalid' : 'O endereço IP deve ser quatro números (0-255) separados por pontos. Verifique o valor.',
'errorGenericCommitError' : 'Ocorreu um erro.  Corrija a configuração a seguir e tente novamente.',
'errorSSIDEmpty' : 'Insira um nome para a sua rede sem fio.',
'errorSSIDInvalidChars' : 'O nome da sua rede pode conter apenas letras, números, pontuação e espaços.',
'errorSSIDTooLong' : 'O nome da sua rede precisa ter menos de 32 caracteres.',
'errorWEPPasswordEmpty' : 'Insira uma senha para proteger sua rede sem fio.',
'errorWEPPasswordInvalidChars' : 'A senha da sua rede pode conter somente números e as letras A a F.',
'errorWEPPasswordInvalidLength' : 'A senha da sua rede deve ter 10 ou 26 caracteres.',
'errorWPAPasswordEmpty' : 'Insira uma senha para proteger sua rede sem fio.',
'errorWPAPasswordInvalidChars' : 'A senha da sua rede pode conter apenas letras, números, pontuação e espaços.',
'errorWPAPasswordInvalidLength' : 'A senha da sua rede deve ter entre 8 e 63 caracteres.',
'errPasswordEmpty' : 'Insira sua senha.',
'errPasswordInvalid' : 'Seu nome de usuário pode conter apenas letras, números, pontuação e espaços.',
'errPasswordTooLong' : 'Sua senha precisa ter menos de 64 caracteres.',
'errServAddressEmpty' : 'Insira um endereço de serviço.',
'errSubnetMaskEmpty' : 'A máscara de sub-rede não pode ficar em branco.',
'errSubnetMaskInvalid' : 'A máscara de sub-rede deve ser quatro números (0-255) separados por pontos. Verifique o valor.',
'errUsernameInvalid' : 'Seu nome de usuário pode conter apenas letras, números, pontuação e espaços.',
'errUsernameTooLong' : 'Seu nome de usuário precisa ter menos de 64 caracteres.',
'errVCIInvalid' : 'Insira um número entre 0 e 65535. Seu Provedor de serviços de Internet (ISP) poderá informar o valor correto a ser usado.',
'errVPIInvalid' : 'Insira um número entre 0 e 255. Seu Provedor de serviços de Internet (ISP) poderá informar o valor correto a ser usado.',
'p802t003' : 'Visto que algumas configurações foram alteradas, talvez seja preciso selecionar sua rede sem fio novamente:',
'p802t011' : 'Visto que algumas configurações foram alteradas, talvez seja preciso selecionar sua rede sem fio novamente:',
'dft003' : 'Precisa de ajuda?',
'dft004' : 'Tem uma pergunta ou precisa de suporte? Você pode obter ajuda 24 horas por dia em nosso centro de ajuda online.<br><a href="http://www.belkin.com/support/" id="dfBelkinHelp">Centro de ajuda da Belkin &rarr;</a>',
'dhChangeSSID' : 'Alterar &raquo;',
'dhPassLabel' : 'Senha:',
'dhPasswordObscured24' : 't********',
'dhShow' : 'Mostrar:',
'dhSSID24' : '{blahblah}',
'dhToggle24' : '2,4 Ghz',
'dhToggle5' : '5,0 Ghz',
'DownSpeed' : '32.6',
'errUsernameEmpty' : 'Insira seu nome de usuário.',
'gt10am' : '10:00',
'gt10pm' : '22:00',
'gt11am' : '11:00',
'gt11pm' : '23:00',
'gt1am' : '1:00',
'gt1amNextDay' : '1:00 do dia seguinte',
'gt1pm' : '13:00',
'gt24ghz' : '2,4 Ghz',
'gt24GKey' : 'Chave de 2,4 GHz',
'gt24GName' : 'SSID de 2,4 GHz',
'gt24PSK' : 'Senha',
'gt24Sec' : 'WPA2',
'gt24SSID' : '12345678',
'gt2am' : '2:00',
'gt2pm' : '14:00',
'gt3am' : '3:00',
'gt3pm' : '15:00',
'gt4am' : '4:00',
'gt4pm' : '16:00',
'gt50ghz' : '5 Ghz',
'gt5am' : '5:00',
'gtGuestKey' : 'Chave de convidado',
'gt5GMedia' : 'A banda de 5 Ghz tem o mesmo nome, mas com ".media" adicionado como sufixo.',
'gtGuestName' : 'SSID de convidado',
'gt5pm' : '17:00',
'gt6am' : '6:00',
'gt6pm' : '18:00',
'gt7am' : '7:00',
'gt7pm' : '19:00',
'gt8am' : '8:00',
'gt8pm' : '20:00',
'gt9am' : '9:00',
'gt9pm' : '21:00',
'gtAccessControl' : 'Controle da Internet pelos pais',
'gtAccessPoint' : 'Usar como ponto de acesso',
'gtADSL' : 'ADSL',
'gtAdvSettings' : 'Configurações avançadas',
'gtAllElseFails' : 'Se tudo o mais falhar, ligue para o Suporte da Belkin em&nbsp;',
'gtAndroidConnect01' : 'Telefones e tablets Android',
'gtAndroidConnect02' : 'Seu dispositivo fornece um menu com as redes sem fio disponíveis no aplicativo Configurações.',
'gtAndroidConnect03' : 'Abra o aplicativo <strong>Settings</strong> (Configurações) e selecione <strong>Wireless and network</strong> (Sem fio e rede).',
'gtAndroidConnect04' : 'Ali, selecione<strong> Wi-Fi </strong>para ver a lista de redes disponíveis.',
'gtAndroidConnect05' : 'Selecione <strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong>. <!-- IF NOT OPEN --> <span tid="gtNotOpen">Se solicitado, insira a senha da rede <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>.</span> <!-- /IF -->',
'gtAt' : 'em',
'gtAttenuation' : 'Atenuação',
'gtAustralia' : 'Austrália',
'gtBackToDashboard' : '&larr; Voltar ao painel',
'gtBelkin' : 'Belkin',
'gtBootLoader' : 'Carregador de inicialização',
'gtCantConnect' : 'Não conseguimos nos conectar com seu Provedor de serviços de Internet.',
'gtCantConnectNoResponse' : 'Não conseguimos nos conectar à Internet – não houve nenhuma resposta do seu Provedor de serviços de Internet.',
'gtChina' : 'China',
'gtClientList' : 'Dispositivos conectados',
'gtClose' : 'Fechar',
'gtConfig' : 'Configurar',
'gtConfigureRouter' : 'Configurar roteador',
'gtConnDevices' : 'Dispositivos conectados',
'gtConnectingToNew' : 'Conectando-se à sua nova rede',
'gtConnectionDet' : 'Detalhes da conexão',
'gtConnType' : 'Tipo de conexão',
'gtContentFiltering' : 'Filtro de sites da Web',
'gtCopyright' : 'Copyright &copy; 2012. Belkin.Todos os direitos reservados.',
'gtCurrTimezone' : 'Europa/Helsinki {REPLACE THIS SPAN WITH DETECTED Belkin TZ ID description}',
'gtDashboard' : '&larr; Painel',
'gtDashTitle' : 'Painel do roteador Belkin',
'gtDataRate' : 'Taxa de dados',
'gtDDNS' : 'DDNS',
'gtDHCPList' : 'Dispositivos conectados',
'gtDHCPServer' : 'Servidor DHCP',
'gtDMZ' : 'DMZ',
'gtDNS' : 'DNS',
'gtDown' : 'Para baixo',
'gtDownloadSpeed' : 'Velocidade de download',
'gtEncap' : 'Encapsulamento:',
'gtFileInstallError' : 'Não foi possível instalar esse arquivo – talvez seja o tipo de arquivo incorreto',
'gtFileLoadError' : 'Não foi possível carregar esse arquivo – talvez seja o tipo de arquivo incorreto',
'gtFirewall' : 'Firewall',
'gtFirmware' : 'Firmware',
'gtFirmwareUpdate' : 'Atualização de firmware',
'gtFrance' : 'França',
'gtFreshest' : 'Estamos obtendo a versão mais recente de nosso firmware...',
'gtFrom' : 'De:',
'gtFWUpdate' : 'Atualização de firmware',
'gtFWUpToDate' : 'Seu firmware está atualizado.',
'gtGermany' : 'Alemanha',
'gtGuestAccess' : 'Acesso por convidados',
'gtGuestNetwork' : 'Rede de convidados',
'gtHomeNetwork' : 'Rede doméstica',
'gtIfYouKnowConnection1' : 'Se você souber qual é seu tipo de conexão, poderá <a href="700-SelectConnection.htm" id="ISP1a010">configurá-la manualmente &raquo;</a>',
'gtIfYouKnowConnection2' : 'Se você souber qual é seu tipo de conexão, poderá <a href="700-SelectConnection.htm" id="ISP2a010">configurá-la manualmente &raquo;</a>',
'gtIfYouKnowConnection3' : 'Se você souber qual é seu tipo de conexão, poderá <a href="700-SelectConnection.htm" id="ISP3a010">configurá-la manualmente &raquo;</a>',
'gtIfYouKnowConnection4' : 'Se você souber qual é seu tipo de conexão, poderá <a href="700-SelectConnection.htm" id="ISP4a010">configurá-la manualmente &raquo;</a>',
'gtIfYouKnowConnection4a' : 'Se você souber qual é seu tipo de conexão, poderá <a href="700-SelectConnection.htm" id="ISP4aa010">configurá-la manualmente &raquo;</a>',
'gtIfYouKnowConnection5' : 'Se você souber qual é seu tipo de conexão, poderá <a href="700-SelectConnection.htm" id="ISP5a010">configurá-la manualmente &raquo;</a>',
'gtIfYouKnowConnection6' : 'Se você souber qual é seu tipo de conexão, poderá <a href="700-SelectConnection.htm" id="ISP6a010">configurá-la manualmente &raquo;</a>',
'gtIfYouKnowConnection7' : 'Se você souber qual é seu tipo de conexão, poderá <a href="700-SelectConnection.htm" id="ISP7a010">configurá-la manualmente &raquo;</a>',
'gtIntellistream' : 'Intellistream',
'gtInterleavePath' : 'Caminho de entrelaçamento',
'gtInternetSettings' : 'Configurações da Internet',
'gtIOSConnect01' : 'iPhone, iPad e iPod Touch',
'gtIOSConnect02' : 'Seu dispositivo fornece um menu com as redes sem fio disponíveis no aplicativo Configurações.',
'gtIOSConnect03' : 'Abra o aplicativo <strong>Settings</strong> (Configurações) e selecione <strong>Wi-Fi</strong> (Wi-Fi).',
'gtIOSConnect04' : 'Selecione <strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong> na lista de redes. <!-- IF NOT OPEN --> <span tid="gtNotOpen">Se solicitado, insira a senha da rede <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>.</span> <!-- /IF -->',
'gtIPv6' : 'IPV6',
'gtIPV6Connection' : 'Conexão IPv6',
'gtISP' : 'Tipo de conexão do ISP',
'gtJapan' : 'Japão',
'gtLANIP' : 'Endereço IP da LAN',
'gtLANMAC' : 'MAC da LAN/WLAN',
'gtLANSettings' : 'Configurações da LAN',
'gtLANSubnet' : 'Sub-rede da LAN',
'gtLLC' : 'LLC',
'gtLoadPrevSettings' : 'Carregar configurações anteriores',
'gtLocalNetwork' : 'Rede local',
'gtLocalSettings' : 'Configurações da rede local',
'gtLocked' : 'bloqueado',
'gtMACAddress' : 'Endereço MAC',
'gtMACAddressFiltering' : 'Filtragem de endereço MAC',
'gtMacConnect01' : 'Mac OS X',
'gtMacConnect02' : 'Seu computador fornece um menu de redes sem fio disponíveis na extremidade direita da barra de menu.',
'gtMacConnect03' : 'Clique no ícone de ondas sem fio.',
'gtMacConnect04' : 'Selecione <strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong> na lista de redes. <!-- IF NOT OPEN --> <span tid="gtNotOpen">Se solicitado, insira a senha da rede <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>.</span> <!-- /IF -->',
'gtMaybeLater' : 'Talvez mais tarde',
'gtMbitPerSec' : 'Mb/s',
'gtMeaning' : 'O que isso significa?',
'gtMedia' : 'Mídia',
'gtMediaServer' : 'Servidor de mídia',
'gtmidnight' : 'Meia-noite',
'gtModel' : 'Modelo',
'gtName' : 'Nome',
'gtNeedMoreHelp' : 'Precisa de mais ajuda?',
'gtNetName' : 'Nome da rede',
'gtNewFWAvailableModem' : 'Temos um novo firmware para o seu modem.',
'gtNewFWAvailableRouter' : 'Temos um novo firmware para o seu roteador.',
'gtNewFWAvailableRouterAndModem' : 'Temos um novo firmware para o seu roteador e modem.',
'gtNext' : 'Avançar',
'gtNo' : 'Não',
'gtNoiseMargin' : 'Margem de ruído',
'gtNoMyNet' : 'Não vejo a minha rede',
'gtNoon' : 'Meio-dia',
'gtNoSecCard' : 'Anote o nome de sua rede e a senha para usá-los mais tarde.',
'gtNotOpen' : 'Se solicitado, insira a senha da rede <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>.',
'gtNZ' : 'Nova Zelândia',
'gtOffline' : 'Offline',
'gtOnline' : 'Online',
'gtOptionalSoftware' : 'Software opcional',
'gtOptionalSW' : 'Software opcional',
'gtOptSW' : 'Software opcional',
'gt-OR-' : '-OU-',
'gtOther' : '...',
'gtOutputPower' : 'Energia de saída',
'gtParentalControls' : 'Controles dos pais',
'gtPass' : 'Senha:',
'gtPIC' : 'Controle da Internet pelos pais',
'gtPICOtherTimes' : 'Em qualquer outro horário, este dispositivo não poderá acessar a Internet.',
'gtPleaseCallISP' : 'Ligue para o seu Provedor de serviços de Internet',
'gtPortForwarding' : 'Encaminhamento de porta',
'gtPrint' : 'Imprimir',
'gtReadAllAboutIt' : 'Para obter mais ajuda:',
'gtReconnectingHell' : 'Reconectando…',
'gtRegister' : 'Registro',
'gtRegistration' : 'Registro',
'gtRestartRouter' : 'Reiniciar roteador',
'gtRestoreDef' : 'Restaurar padrões',
'gtRestoreFactDefault' : 'Restaurar padrões de fábrica',
'gtRestoreFactDefaults' : 'Restaurar padrões de fábrica',
'gtRestoreSettigns' : 'Restaurar configurações',
'gtRetest' : 'Testar a conexão novamente',
'gtRouterDetails' : 'Detalhes do roteador',
'gtRouterInfo' : 'Informações do roteador',
'gtSave' : 'Salvar',
'gtSaveCurrentSettings' : 'Salvar configurações atuais',
'gtSaved' : 'Dispositivo sem nome salvo',
'gtSaveRestore' : 'Salvar/restaurar configurações',
'gtSaveRestoreSettings' : 'Salvar/restaurar configurações',
'gtSaveSettings' : 'Salvar/fazer backup das configurações',
'gtSecLog' : 'Registro de segurança',
'gtSecurity' : 'Segurança',
'gtSelectLang' : 'Selecionar idioma:',
'gtSelfHeal' : 'Autorrecuperação',
'gtSelfHealing' : 'Autorrecuperação',
'gtSerialSupport' : 'Na próxima página, registraremos o número de série do seu roteador para fins de suporte.',
'gtShowtime' : 'Apresentação',
'gtSpeedTestResults' : 'Última verificação: há um dia às 15:57',
'gtStaticRouting' : 'Roteamento estático',
'gtStatus' : 'Status',
'gtSystemSettings' : 'Configurações do sistema',
'gtTo' : 'Até:',
'gtTraffStats' : 'Estatística de tráfego',
'gtTryAgain' : 'Tentar novamente',
'gtUnlocked' : 'desbloqueado',
'gtUp' : 'Para cima',
'gtUpdate' : 'atualizar',
'gtUpdateNoPowerModem' : 'Estamos atualizando seu modem com o novo firmware. Não desligue a energia enquanto isso estiver acontecendo.',
'gtUpdateNoPowerRouter' : 'Estamos atualizando seu roteador com o novo firmware. Não desligue a energia enquanto isso estiver acontecendo.',
'gtUploadSpeed' : 'Velocidade de upload',
'gtUSA' : 'Estados Unidos',
'gtUserName' : 'Nome de usuário:',
'gtUtils' : 'Utilitários',
'gtVCI' : 'VCI:',
'gtVCMUX' : 'VC/MUX',
'gtVPI' : 'VPI:',
'gtWAN' : 'Configurações de WAN',
'gtWANDNS' : 'Endereço DNS',
'gtWANGateway' : 'Gateway da WAN',
'gtWANIP' : 'Endereço IP da WAN',
'gtWANMAC' : 'Endereço MAC da WAN',
'gtWANPingBlocking' : 'Bloqueio de ping da WAN',
'gtWANSubnet' : 'Máscara de sub-rede da WAN',
'gtWebsiteFilter' : 'Filtro de sites da Web',
'gtWelcome' : 'Bem-vindo',
'gtWiFi' : 'Wi-Fi',
'gtWifiSettings' : 'Suas configurações de Wi-Fi foram alteradas com sucesso.',
'gtWinConnect01' : 'Windows 7 ou 8',
'gtWinConnect02' : 'Seu computador fornece um menu de redes sem fio disponíveis na extremidade direita da barra de tarefas.',
'gtWinConnect03' : 'Clique com o botão direito do mouse no ícone que exibe as barras de intensidade do sinal.',
'gtWinConnect04' : 'Selecione <strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong>. <!-- IF NOT OPEN --> <span tid="gtNotOpen">Se solicitado, insira a senha da rede <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>.</span> <!-- /IF -->',
'gtWinConnect05' : 'Windows Vista e Windows XP',
'gtWinConnect06' : 'Seu computador fornece um menu de redes sem fio disponíveis na extremidade direita da barra de tarefas.',
'gtWinConnect07' : 'Clique com o botão direito no ícone que exibe um computador com ondas sem fio (XP) ou dois computadores (Vista).',
'gtWinConnect08' : 'Escolha <strong>Exibir redes sem fio disponíveis</strong> (XP) ou <strong>Conectar-se a uma rede</strong> (Vista) no menu.',
'gtWinConnect09' : 'Selecione <strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong>. <!-- IF NOT OPEN --> <span tid="gtNotOpen">Se solicitado, insira a senha da rede <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>.</span> <!-- /IF -->',
'gtWireless' : 'Sem fio',
'gtWiring' : 'Fiação',
'gtWPSShort' : 'WPS',
'gtWPS' : 'WPS (Wi-Fi Protected Setup)',
'gtYes' : 'Sim',
'htFWUpdate' : 'O que são atualizações de firmware?',
'htFWUpdateContent' : 'De tempos em temos, a Belkin pode lançar novas versões da programação operacional do seu roteador. Essas atualizações contêm aprimoramentos e correções para o roteador.<br><br>NOTA: faça o backup de suas configurações atuais antes de atualizar para uma nova versão do firmware.',
'htParent' : 'O que é o filtro de sites da Web?',
'htPIC' : 'Seu controle da Internet',
'htPICBlocked' : 'A Internet está suspensa',
'htPICBlockedContent' : 'Restaure o acesso quando estiver pronto para retornar a conectividade à Internet a todos os dispositivos.',
'htPICContent' : 'Com o controle da Internet, agora você pode personalizar um horário para bloquear o acesso à Internet de cada dispositivo.',
'htSaveRestore' : 'O que significa salvar, carregar ou restaurar configurações?',
'htSaveRestoreContent' : 'Seu roteador se lembra de configurações como nome da rede, senha, etc. Essas configurações podem ser salvas (como backup) e podem então ser carregadas de volta no roteador. As configurações do roteador também podem ser restauradas de volta às configurações padrão de fábrica.',
'htSaveRestoreContentMobile' : '<br>* As funções de salvar e carregar um arquivo de configurações não estão disponíveis no iPhone, iPad, e iPod Touch. Use outro dispositivo, como um notebook, para salvar e carregar um arquivo de configurações.',
'ISP1t003' : 'Diga a eles que seu roteador conseguiu obter um endereço IP, mas o DNS não está funcionando.',
'ISP1t007' : 'O DNS converte nomes como "belkin.com" nos endereços numéricos (endereços IP) que os computadores usam para navegar pela Internet. Seu roteador tem um endereço IP, o que significa que ele está conectado à Internet, mas o DNS não está funcionando, impedindo-o de navegar, o que sugere que há algo errado no seu Provedor de serviços de Internet.  <span class="nub"></span>',
'ISP2t003' : 'Diga a eles que o roteador conseguiu obter um endereço IP e que o DNS está funcionando, mas não conseguimos executar ping em ninguém.',
'ISP2t007' : 'Nos executamos um "ping" em outras máquinas na Internet para testar se podemos ou não nos comunicar com elas. O DNS converte nomes como "belkin.com" nos endereços numéricos (endereços IP) que os computadores usam para navegar pela Internet. Seu roteador tem um endereço IP, o que significa que está conectado à Internet, e o DNS fornecido por seu Provedor de serviços de Internet está funcionando, mas não podemos executar um ping. Isso sugere que há algo de errado com seu Provedor de serviços de Internet. <span class="nub"></span>',
'ISP3t004' : 'Diga a eles que seu nome de usuário e senha foram aceitos, mas que você ainda não tem uma conexão à Internet.',
'ISP3t007' : 'Nos executamos um "ping" em outras máquinas na Internet para testar se podemos ou não nos comunicar com elas. Seu Provedor de serviços de Internet aceitou seu nome de usuário e senha, mas não conseguimos executar um ping e, por isso, não é possível navegar. Isso sugere que há algo de errado com seu Provedor de serviços de Internet.  <span class="nub"></span>',
'ISP4t003' : 'Diga a eles que seu nome de usuário e senha não foram aceitos após diversas tentativas.',
'ISP4t007' : 'Sua conexão à Internet requer um nome de usuário e senha, mas seu Provedor de serviços de Internet não aceitou as informações digitadas. Eles irão se certificar de que você tenha as informações corretas.  <span class="nub"></span>',
'ISP5t003' : 'Diga a eles que você optou por uma conexão Dinâmica, mas não foi possível obter um endereço IP.',
'ISP5t007' : 'O endereço IP identifica o roteador ou outros dispositivo na Internet. Seu Provedor de serviços de Internet não está fornecendo um endereço ao seu roteador e, sem um endereço IP, não é possível se conectar. Isso sugere que há algo errado em seu Provedor de serviços de Internet ou que a conexão não é uma conexão Dinâmica.  <span class="nub"></span>',
'ISP6t003' : 'Diga a eles que você optou por uma conexão Estática, mas não foi possível se conectar à Internet.',
'ISP6t007' : 'Usamos uma conexão Estática quando o Provedor de serviços de Internet tiver atribuído o uso de um ou mais endereços IP específicos.  <span class="nub"></span>',
'ISP7t003' : 'Diga a eles que suas suas configurações VPI/VCI não estão funcionando e você precisa que eles lhe forneçam os números corretos.',
'ISP7t007' : 'VPI e VCI informam ao roteador que caminho usar para se comunicar com seu Provedor de serviços de Internet (ISP). Não conseguimos detectar as configurações corretas. <span class="nub"></span>',
'Network24Passkey' : '{REPLACE WITH 2.4 PASSWORD}',
'Network24SSID' : '{REPLACE WITH 2.4 SSID}',
'p100t002' : 'Vamos nos conectar à Internet.',
'p100t003' : 'Você está conectado ao seu novo Roteador.Portanto, vamos fazer com que ele se comunique com seu Provedor de serviços de Internet.',
'p100t004' : 'Vamos nos conectar à Internet.',
'p100t005' : 'Você está conectado ao seu novo Roteador.Portanto, vamos fazer com que ele se comunique com seu Provedor de serviços de Internet.',
'p100t007' : 'Detectar minha conexão',
'p100t008' : 'Se você tiver certeza quanto ao seu tipo de conexão, poderá <a href="700-SelectConnection.htm" id="p100a009" tid="p100t009">configurá-la manualmente &raquo;</a> ou ir direto para o <a href="000-Dashboard.htm" id="p100a010" tid="p100t010">painel &raquo;</a>.',
'p100t009' : 'configurá-la manualmente &raquo;',
'p100t010' : 'painel &raquo;',
'p100t013' : 'Agora, estamos exibindo as páginas em&nbsp;',
'p100t024' : 'Uma configuração quase automática',
'p100t025' : 'Primeiro, verificaremos automaticamente sua fiação e detectaremos seu tipo de conexão com seu Provedor de Serviços de Internet (ISP). Você precisará fazer muito pouca coisa. Em seguida, nos certificaremos de que o software do seu roteador está atualizado. <span class="nub"></span>',
'p1010MRt001' : 'Estamos tendo problemas para nos comunicar com seu modem.',
'p1010MRt002' : 'Estamos achando que há um problema de fiação.',
'p1010MRt003' : 'Siga este procedimento para corrigi-lo:',
'p1010MRt004' : 'Certifique-se de que seu modem-roteador esteja conectado à tomada telefônica ligada à Internet. Deve haver um cabo de rede conectando a porta ADSL no modem-roteador (a porta cinza na parte superior) à tomada telefônica.',
'p1010MRt005' : 'Certifique-se de que seu modem esteja ligado. Seu adaptador de energia deve estar conectado em ambas as extremidades e uma ou mais luzes devem estar acesas no modem.',
'p1010MRt006' : 'Deve haver um cabo de rede conectando seu modem à porta amarela no roteador. Esse cabo transporta o sinal do modem para o roteador. Sem ele, não é possível ficar online.',
'p1010MRt007' : 'Se ambos estiverem corretos, tente reiniciar o modem desconectando sua fonte de energia, aguardando quinze segundos e voltando a conectá-la. Se seu modem tiver uma bateria, talvez seja preciso localizar o botão de redefinição do modem e usá-lo em vez disso.',
'p1010MRt008' : 'Este é o aspecto que as conexões devem ter:',
'p1010MRt009' : 'Continuaremos aguardando uma conexão enquanto você verifica.',
'p1010MRt010' : 'A dificuldade mais comum na fiação está entre o modem e o roteador. É importante verificar ambas as extremidades do cabo. Uma extremidade deve estar conectada à porta amarela no novo roteador; a outra extremidade deve estar conectada a uma porta semelhante no modem. Diferentes fabricantes de modems colocam rótulos diferentes nas portas. Sua porta pode ter o rótulo "data" (dados), "LAN" (Rede local), "network" (rede) ou "Ethernet" (Ethernet).  <span class="nub"></span>',
'p1020t001' : 'Estamos tendo problemas para nos comunicar com seu Provedor de serviços de Internet.',
'p1020t002' : 'Reinicie seu modem-roteador.',
'p1020t003' : 'Não estamos conseguindo nos conectar à Internet. Vamos tentar reiniciar seu modem-roteador.',
'p1020t004' : 'Desligue seu modem-roteador. Isso normalmente envolve acionar um interruptor no modem-roteador ou simplesmente desconectá-lo da fonte de energia.',
'p1020t005' : 'Aguarde 15 segundos.',
'p1020t006' : 'Volte a ligar o modem-roteador.',
'p1020t007' : 'Após vários segundos suas luzes se acenderão e ele deverá estabelecer contato com seu ISP.',
'p1020t008' : 'Se este problema persistir, entre em contato com seu Provedor de serviços de Internet para solucionar o problema de sua conta.',
'p1020t009' : 'Aguardaremos até que seu modem-roteador tenha sido desligado e religado e, em seguida, continuaremos automaticamente.',
'p1020t010' : 'Por que reiniciar o modem?',
'p1020t011' : 'Alguns modems precisam ser reiniciados para se comunicarem com um novo roteador ou com um computador que não lhes seja familiar. E se houver alguma flutuação em seu Provedor de serviços de Internet, o modem poderá perder sua conexão inesperadamente. Podemos ver o seu modem, mas não a Internet. Portanto, uma rápida reinicialização pode ser suficiente. <span class="nub"></span>',
'p1100t001' : 'Uma atualização de firmware está disponível!',
'p1100t002' : 'Recomendamos atualizar o roteador para o firmware mais recente para garantir que tudo funcione corretamente.',
'p1100t003' : 'Mostre-me o que há de novo',
'p1201t001' : 'Bloqueie o painel com uma senha.',
'p1201t002' : 'Insira uma senha para bloquear o painel:',
'p1201t003' : 'Insira uma senha.',
'gtSetPassword' : 'Definir senha',
'p1201t005' : 'Cancelar',
'p1210t001' : 'O painel está bloqueado.',
'p1210t002' : 'Insira sua senha:',
'p1210t003' : 'Insira sua senha.',
'p1210t004' : 'Sua senha está incorreta.',
'p1210t005' : 'Deixe-me entrar!',
'p1300t001' : 'Um pouco mais de vigor',
'p1300t002' : 'Você pode conseguir mais desempenho de sua conexão à Internet configurando o Intellistream. Isso envolve a execução de um teste de velocidade.',
'p1300t003' : 'Configurar o Intellistream',
'p1300t004' : 'Talvez mais tarde',
'p1302t001' : 'O firmware está atualizado.',
'p1316t001' : 'Houve falha na instalação do firmware atualizado – tente novamente clicando em "Check for New Firmware" (Verificar se há um novo firmware).',
'p1318t001' : 'O arquivo de atualização não é do tipo ou da versão correta para este dispositivo. Houve falha da atualização. Obtenha o arquivo correto e tente novamente',
'p1333t001' : 'Seu firmware foi atualizado com sucesso.',
'p1400t001' : 'Obtenha o uso total de sua porta USB.',
'p1400t002' : 'Há alguns softwares opcionais que você pode instalar para ajudá-lo a aproveitar ao máximo a porta USB no roteador.',
'p1400t003' : 'Mostre-me os softwares opcionais',
'p1500t001' : 'Você está aqui.',
'p1500t002' : 'Parece que vocês está no fuso horário da <span tid="gtCurrTimezone">Europa/Helsinki {REPLACE THIS SPAN WITH DETECTED Belkin TZ ID description}</span>. Está correto?',
'p1500t003' : 'Está correto',
'p1500t004' : 'Deixe-me escolher',
'p200t001' : 'Estabelecendo conexão...',
'p200t002' : ' Estamos verificando as conexões físicas com seu roteador.',
'p202At001' : 'Ainda trabalhando...',
'p202At002' : ' Estamos detectando o tipo de conexão de seu Provedor de serviços de Internet. Isso pode demorar alguns minutos.',
'p202Bt001' : 'Ainda trabalhando...',
'p202Bt002' : ' Verificando se seu Provedor de serviços de Internet exige uma senha. Isso pode demorar alguns minutos.',
'p202Ct001' : 'Ainda trabalhando...',
'p202Ct002' : ' Testando a conexão, agora.',
'p202t001' : 'Estabelecendo conexão...',
'p202t002' : ' Estamos detectando o tipo de conexão de seu Provedor de serviços de Internet.',
'p208t001' : 'Você tem os números VPI/VCI à mão?',
'p208t002' : 'Para ficar online, você precisa inserir os números VPI e VCI. Eles identificam o caminho de comunicação que seu ISP quer que você use.',
'p208t003' : 'Seu Provedor de serviços de Internet deve ter-lhe fornecido esses números. Se não conseguir encontrá-las, ligue para o seu Provedor de serviços de Internet.',
'p208t006' : '0',
'p208t007' : '0',
'p208t009' : 'Tentar minha conexão',
'p208t011' : 'VPI e VCI',
'p208t012' : 'O Identificador de caminho virtual (VPI – Virtual Path Identifier) e o Identificador de circuito virtual (VCI – Virtual Circuit Identifier) informam ao roteador que caminho deve ser usado para conversar com seu Provedor de serviços de Internet. Há algumas configurações comuns que nós tentamos automaticamente antes de pedir sua ajuda.<span class="nub"></span>',
'p209t001' : 'Há alguma coisa errada com essas configurações.',
'p209t002' : 'Seu Provedor de serviços de Internet não aceitou esses números VPI/VCI. Tentar mais uma vez?',
'p210CXt001' : 'Você tem uma conexão PPPoE.',
'p210CXt002' : 'Ela exige um nome de usuário e senha para acessar a Internet.',
'p210CXt004' : '<strong>Seu Provedor de serviços de Internet (ISP) deve ter-lhe fornecido essas informações. Se não conseguir encontrá-las, entre em contato com seu ISP.</strong>',
'p210CXt006' : '0',
'p210CXt007' : '0',
'p210CXt016' : 'Tentar minha conexão',
'p210CXt017' : 'PPPoE',
'p210CXt018' : 'O Protocolo PPPoE (Point-to-Point Protocol over Ethernet) cria uma conexão segura entre seu roteador e o Provedor de serviços de Internet. Normalmente, ele é usado por companhias telefônicas. <span class="nub"></span>',
'p210DXt001' : 'Você tem uma conexão PPPoA.',
'p210DXt002' : 'Ela exige um nome de usuário e senha para acessar a Internet.',
'p210DXt004' : '<strong>Seu Provedor de serviços de Internet (ISP) deve ter-lhe fornecido essas informações. Se não conseguir encontrá-las, entre em contato com seu ISP.</strong>',
'p210DXt006' : '0',
'p210DXt007' : '0',
'p210DXt016' : 'Tentar minha conexão',
'p210DXt017' : 'PPPoA',
'p210DXt018' : 'O Protocolo PPPoA (Point-to-Point Protocol over ATM) cria uma conexão segura entre seu roteador e o Provedor de serviços de Internet. Normalmente, ele é usado por companhias telefônicas.<span class="nub"></span>',
'p210t001' : 'Você tem uma conexão DSL PPPoE.',
'p210t002' : 'Você irá precisar de um nome de usuário e senha para acessar a Internet.',
'p210t003' : '<strong>Seu Provedor de serviços de Internet (ISP) deve ter-lhe fornecido essas informações. Se não conseguir encontrá-las, entre em contato com seu ISP.</strong>',
'p210t005' : 'Nome de usuário do ISP:',
'p210t009' : 'Tentar minha conexão',
'p210t010' : 'PPPoE',
'p210t011' : 'O Protocolo PPPoE (Point-to-Point Protocol over Ethernet) cria uma conexão segura entre seu roteador e o Provedor de serviços de Internet. Normalmente, ele é usado por companhias telefônicas. <span class="nub"></span>',
'p211t001' : 'Estabelecendo conexão...',
'p211t002' : ' Estamos tentando fazer login em seu Provedor de serviços de Internet. Isso pode levar uns dois minutos ou mais.',
'p212DXt001' : 'Há alguma coisa errada com as configurações do PPPoA.',
'p212DXt002' : 'Seu nome de usuário, senha ou ambos estão incorretos. Tente novamente. Se não conseguir encontrar as informações corretas, entre em contato com seu Provedor de serviços de Internet.',
'p212t001' : 'Há alguma coisa errada com as configurações do PPPoE.',
'p212t002' : 'Seu nome de usuário, senha ou ambos estão incorretos. Tente novamente. Se não conseguir encontrar as informações corretas, entre em contato com seu Provedor de serviços de Internet.',
'p220t002' : 'Para completar a conexão e acessar a Internet, insira um nome de usuário, senha e endereço de serviço.',
'p220t003' : '<strong>Seu Provedor de serviços de Internet (ISP) deve ter-lhe fornecido essas informações. Se não conseguir encontrá-las, entre em contato com seu ISP.</strong>',
'p220t006' : 'Nome de usuário do ISP:',
'p220t007' : 'Endereço do serviço:',
'p220t010' : 'Tentar minha conexão',
'p220t013' : 'Você tem uma conexão L2TP ou PPTP.',
'p220t014' : 'Ou escolher minha conexão manualmente &raquo;',
'p220t015' : 'L2TP e PPTP',
'p220t016' : 'Tanto o L2TP (Layer 2 Tunneling Protocol) quanto o PPTP (Point-to-Point Tunneling Protocol) criam uma conexão privada e criptografada entre você e seu ISP.<span class="nub"></span>',
'p221t001' : 'Estabelecendo conexão...',
'p221t002' : ' Estamos tentando fazer login em seu Provedor de serviços de Internet. Isso pode levar até dois minutos.',
'p222t002' : 'Seu nome de usuário, senha ou ambos estão incorretos. Tente novamente. Se não conseguir encontrar as informações corretas, entre em contato com seu Provedor de serviços de Internet.',
'p222t004' : 'Há alguma coisa errada com suas configurações.',
'p2300t001' : 'Sua versão de firmware instalada:',
'p2300t002' : 'Atualizar o firmware do arquivo salvo localmente:',
'p2300t006' : 'Tem certeza de que deseja instalar o arquivo {{file}}?',
'p2300t010' : 'Verificar se há um novo firmware',
'p2400t006' : 'Suas configurações atuais serão substituídas. Tem certeza de que deseja carregar o arquivo {{file}}?',
'p2410t001' : 'Tem certeza de que deseja restaurar os padrões de fábrica?',
'p2410t002' : 'Clicar em \'Yes\' (Sim) apagará as configurações do seu roteador, como nome e senha, e as substituirá pelos padrões de fábrica originais.',
'p300t005' : 'Agora você está online.',
'p310t001' : 'Há uma atualização disponível!',
'p310t001x' : 'Esta atualização (v2.1.0c) inclui:',
'p310t002' : 'Para instalar o novo firmware, leia e aceite o contrato de licença.',
'p310t003' : 'Contrato de licença',
'p310t004' : 'Aceito o contrato de licença.',
'p310t005' : 'Instalar atualização',
'p310t006' : 'O que é firmware?',
'p310t007' : 'Firmware é o software que executa seu roteador. Nós atualizamos o firmware para melhorar o desempenho do seu roteador e, portanto, é uma boa ideia certificar-se e que você tem a versão mais recente.  <span class="nub"></span>',
'p315t001' : 'Baixando o novo firmware.',
'p315t002' : 'Progresso do download:',
'p315t003' : 'O que é firmware?',
'p315t004' : 'Firmware é o software que executa seu roteador. Nós atualizamos o firmware para melhorar o desempenho do seu roteador e, portanto, é uma boa ideia certificar-se e que você tem a versão mais recente.  <span class="nub"></span>',
'p320t001' : 'Instalando o novo firmware.',
'p320t002' : 'Depois que o novo firmware tiver sido aplicado, reiniciaremos o roteador para concluir a instalação.',
'p320t004' : 'O que é firmware?',
'p320t005' : 'Firmware é o software que executa seu roteador. Nós atualizamos o firmware para melhorar o desempenho do seu roteador e, portanto, é uma boa ideia certificar-se e que você tem a versão mais recente.  <span class="nub"></span>',
'p320t006' : 'Isso levará aproximadamente três minutos. Progresso da atualização:',
'p320t010' : 'Depois que o novo firmware tiver sido aplicado, reiniciaremos o modem para concluir a instalação.',
'p321t001' : 'Reiniciando seu roteador',
'p321t002' : 'Reiniciando seu modem',
'p321t003' : 'Agora que o firmware foi instalado, precisamos reiniciar o roteador para torná-lo oficial.',
'p321t004' : 'Reiniciando:',
'p321t005' : 'Atualizações de firmware',
'p321t006' : 'O firmware é o software usado para implementar protocolos de rede e de segurança. As atualizações aumentam a confiabilidade e a funcionalidade e, portanto, é uma boa ideia se certificar de que você tenha a versão mais recente. <span class="nub"></span>',
'p321t010' : 'Agora que o firmware foi instalado, precisamos reiniciar o modem para torná-lo oficial.',
'p330t001' : 'Verificando a velocidade da sua conexão...',
'p330t002' : 'Um rápido teste de velocidade ajudará o roteador a otimizar sua conexão à Internet. Isso leva um ou dois minutos.',
'p331t001' : 'Seu firmware está atualizado.',
'p332t001' : 'Tentaremos atualizar o firmware novamente mais tarde.',
'p333t001' : 'Seu firmware foi atualizado.',
'p334t001' : 'Os resultados do seu teste de velocidade!',
'p334t002' : 'Isto foi o que descobrimos:',
'p334t003' : 'Velocidade de download',
'p334t004' : 'Mb/s',
'p334t005' : 'Velocidade de upload',
'p334t006' : 'Mb/s',
'p340t002' : ' Estamos nos reconectando ao seu roteador para podermos continuar.',
'p341t001' : 'Reinicie seu roteador.',
'p341t002' : 'Estamos tendo problemas para nos reconectar ao seu roteador. Uma rápida reinicialização deve ajudar.',
'p341t003' : 'Desconecte a fonte de energia do roteador, aguarde alguns segundos e volte a conectá-la. Quando o roteador estiver exibindo uma luz azul sólida, estaremos prontos para conectar.',
'p341t003w' : 'Desconecte o roteador, aguarde alguns segundos e volte a conectá-lo. Quando o roteador estiver exibindo uma luz azul sólida, estaremos prontos para conectar.',
'p341t004' : ' Enquanto você faz isso, nós aguardaremos o retorno do roteador.',
'p342t001' : ' Estamos nos reconectando ao seu roteador para podermos continuar.',
'p342t002' : 'Talvez você precise voltar a selecionar a sua rede sem fio <span tid="Network24SSID">({REPLACE WITH 2.4 SSID})</span> na lista de redes sem fio para ajudar no processo.',
'p343t002' : ' Estamos nos reconectando ao seu roteador para continuar.',
'p343t003' : 'Talvez você precise voltar a selecionar a sua rede sem fio <span tid="Network24SSID">({REPLACE WITH 2.4 SSID})</span> para retomar.',
'p344t001' : 'Reinicie seu roteador.',
'p344t002' : 'Estamos tendo problemas para nos reconectar ao seu roteador. Uma rápida reinicialização deve ajudar.',
'p344t003' : 'Desconecte a fonte de energia do roteador, aguarde 15 segundos e volte a conectá-la. Quando o roteador estiver exibindo uma luz azul sólida, nós reconectaremos.',
'p344t003w' : 'Desconecte o roteador, aguarde 15 segundos e volte a conectá-lo. Quando o Roteador estiver exibindo uma luz azul sólida, nós reconectaremos.',
'p344t004' : ' Enquanto você faz isso, nós aguardaremos o retorno do roteador.',
'p400f010' : 'WPA2',
'p400f011' : 'WPA/WPA2',
'p400f012' : 'WEP',
'p400f013' : 'Abrir',
'p400t001' : 'Conecte tudo mais rapidamente.',
'p400t002' : 'Dar ao novo roteador o mesmo nome e senha de rede de seu roteador antigo ajudará todos os seus dispositivos a se conectarem imediatamente.',
'p400t004' : 'Nome da rede:',
'p400t008' : 'Tipo de segurança: <em class="hide-on-phones">(WPA2 é o mais seguro.)</em>',
'p400t014' : 'A banda de 5 Ghz terá o mesmo nome, mas com ".media" adicionado como sufixo.',
'p400t015' : 'Você pode alterá-lo mais tarde, se desejar.',
'p400t017' : 'Salvar e continuar',
'p400t018' : 'Por que devo renomear minha rede?',
'p400t019' : 'Quaisquer dispositivos sem fio que tenham sido conectados previamente ao seu roteador antigo se conectarão automaticamente ao seu novo roteador se você usar o mesmo nome e senha de rede. Além disso, quando você pesquisar sua rede em dispositivos, será mais fácil localizar um nome exclusivo. <span class="nub"></span>',
'p450a009' : 'Excelente. E depois?',
'p450t001' : 'Suas senhas foram salvas.',
'p450t002' : 'Estes são seus novos nome e senha de rede',
'p450t003' : 'Se tiver usado seu nome e senha de rede antigos, seus dispositivos sem fio devem estar se reconectando neste momento.',
'p450t004' : 'Nome:',
'p450t008' : 'Seu roteador foi fornecido com um papel na base com um local para anotar seu novo nome de rede. Assim, ele estará sempre à mão quando você precisar.',
'p450t011' : 'Se você tiver usado o nome e senha de sua rede antiga, a maioria de seus dispositivos sem fio se reconectará automaticamente na próxima vez que você os iniciar. Outros precisarão que você volte a selecionar sua rede e se conectarão automaticamente depois disso. Há instruções para Windows, OS X, iOS, e Android em seu Guia de Instalação Rápida.  <span class="nub"></span>',
'p451a009' : 'Excelente. E depois?',
'p451t001' : 'Sem alterações.',
'p451t002' : 'O nome e a senha de sua rede não foram alterados.',
'p451t003' : 'Será preciso informar a cada um de seus dispositivos sem fio sobre o nome e senha de sua rede:',
'p451t004' : 'Nome:',
'p451t008' : 'Seu roteador foi fornecido com um papel na base com um local para anotar o nome de sua rede. Assim, ele estará sempre à mão quando você precisar.',
'p451t011' : 'Cada um de seus dispositivos sem fio precisará ser informado sobre sua nova rede. Há instruções para Windows, OS X, iOS, e Android em seu Guia de Instalação Rápida.  <span class="nub"></span>',
'p500t001' : 'Registre seu roteador.',
'p500t002' : 'O registro é rápido e pode economizar muito tempo caso você venha a precisar de atendimento ao cliente.',
'p500t004' : 'Por que registrar-se?',
'p500t005' : 'Saber um pouco a seu respeito pode nos ajudar a ajudá-lo mais rapidamente, caso isso seja necessário. <span class="nub"></span>',
'p500tCancel' : 'Registrar-se mais tarde &raquo;',
'p500tSubmit' : 'Concluir o registro',
'p600t001' : 'Visite a página de Software opcional de seu roteador para obter softwares semelhantes para seus outros computadores e dispositivos móveis.',
'p600t002' : 'Obrigado. Leve-me ao painel',
'p600t003' : 'Software opcional',
'p600t004' : 'Estas ferramentas de software podem ajudá-lo a aproveitar os recursos avançados oferecidos pelo seu roteador. Há downloads para Apple iOS, Android, Windows e OS X.  <span class="nub"></span>',
'p601t001' : '<strong>Obrigado por registrar-se!</strong>',
'p700MRt001' : 'Não conseguimos configurar sua conexão automaticamente. Forneça-nos mais algumas informações para que possamos ajudá-lo a se conectar.',
'p700MRt002' : 'Que tipo de conexão você está configurando?',
'p700MRt003' : 'Minha conexão é:',
'p700MRt005' : 'Conexão dinâmica  (1483 Bridge)',
'p700MRt007' : 'Conexão PPPoE',
'p700MRt009' : 'Conexão PPPoA',
'p700MRt011' : 'Conexão estática (IPoA)',
'p700MRt014' : 'Não tenho certeza quanto ao tipo da minha conexão:',
'p700MRt016' : 'Tentar o automático novamente',
'p700MRt017' : 'Tipos de conexão',
'p700MRt018' : '<span class="black">Dinâmica –</span> Estas conexões estão se tornando mais comuns para alguns provedores de DSL.',
'p700MRt019' : '<span class="black">PPPoE e PPPoA –</span> Estas conexões requerem um nome de usuário e senha fornecidos por seu Provedor de serviços de Internet.',
'p700MRt021' : '<span class="black">Estática –</span> Requer parâmetros personalizados exclusivos a cada usuário.. <span class="nub"></span>',
'p700t001' : 'Não conseguimos configurar sua conexão automaticamente. Forneça-nos mais algumas informações para que possamos ajudá-lo a se conectar.',
'p700t002' : 'Que tipo de conexão você está configurando?',
'p700t003' : 'Minha conexão é:',
'p700t005' : 'Conexão dinâmica',
'p700t007' : 'Conexão PPPoE',
'p700t008' : 'Conexão L2TP ou PPTP',
'p700t013' : 'Conexão estática',
'p700t014' : 'Não tenho certeza quanto ao tipo da minha conexão:',
'p700t914' : 'Se você ainda não conseguir determinar o tipo de sua conexão, entre em contato com seu Provedor de serviços de Internet (ISP).',
'p700t016' : 'Tentar o automático novamente',
'p700t017' : 'Tipos de conexão',
'p700t018' : '<span class="black">Dinâmica –</span> Comum à maioria dos Provedores de serviços de Internet por cabo e fibra e a alguns provedores de DSL.',
'p700t019' : '<span class="black">PPPoE e PPTP –</span> Requerem um nome de usuário e senha fornecidos pelo Provedor de serviços de Internet.',
'p700t021' : '<span class="black">Estática –</span> Requer parâmetros personalizados exclusivos a cada usuário. <span class="nub"></span>',
'p701MRt001' : 'Você escolheu uma conexão Dinâmica.',
'p701MRt002' : 'Seu Provedor de serviços de Internet pode ter-lhe fornecido definições para a configuração adicional.',
'p701MRt004' : 'Configurações dinâmicas:',
'p701MRt006' : '0',
'p701MRt007' : '0',
'p701MRt016' : 'Tentar minha conexão',
'p701MRt017' : 'Conexões dinâmicas',
'p701MRt018' : 'Uma configuração dinâmica é configurada automaticamente assim que a comunicação com o ISP é estabelecida.<span class="nub"></span>',
'p701t001' : 'Estabelecendo uma conexão Dinâmica…',
'p701t002' : ' Estamos solicitando uma conexão ao seu Provedor de serviços de Internet.',
'p702t001' : 'Reiniciando o modem...',
'p702t002' : 'Estamos nos preparando para tentar um novo tipo de conexão reiniciando seu modem.',
'p710MRt001' : 'Você escolheu uma conexão Estática.',
'p710MRt002' : 'Seu Provedor de serviços de Internet deve ter-lhe fornecido definições para a configuração estática. Se não conseguir encontrá-las, ligue para o seu Provedor de serviços de Internet.',
'p710MRt004' : 'Configurações estáticas:',
'p710MRt005' : 'Endereço IP:',
'p710MRt006' : '0',
'p710MRt007' : 'Máscara de sub-rede:',
'p710MRt008' : '0',
'p710MRt009' : 'Gateway padrão:',
'p710MRt010' : '0',
'p710MRt011' : 'Servidor DNS (Primário):',
'p710MRt012' : '0',
'p710MRt013' : 'Servidor DNS (Secundário):',
'p710MRt014' : '0',
'p710MRt015' : 'Nota: nem todos os Provedores de serviços de Internet exigem um Servidor DNS secundário.',
'p710MRt016' : 'Tentar minha conexão estática',
'p710MRt017' : 'Conexões estáticas',
'p710MRt018' : 'Uma conexão estática é configurada manualmente, mas fornece um endereço constante ao seu roteador, que pode ser acessado mais facilmente de fora da rede. Conexões estáticas são incomuns ao serviço de Internet residencial e geralmente custam mais caro. <span class="nub"></span>',
'p710t001' : 'Você escolheu uma conexão Estática.',
'p710t002' : 'Seu Provedor de serviços de Internet deve ter-lhe fornecido definições para a configuração estática. Se não conseguir encontrá-las, entre em contato com seu Provedor de serviços de Internet.',
'p710t004' : 'Configurações estáticas:',
'p710t005' : 'Endereço IP:',
'p710t006' : '0',
'p710t007' : 'Máscara de sub-rede:',
'p710t008' : '0',
'p710t009' : 'Gateway padrão:',
'p710t010' : '0',
'p710t011' : 'Servidor DNS (Primário):',
'p710t012' : '0',
'p710t013' : 'Servidor DNS (Secundário):',
'p710t014' : '0',
'p710t015' : 'Nota: nem todos os Provedores de serviços de Internet exigem um Servidor DNS secundário.',
'p710t016' : 'Tentar minha conexão estática',
'p710t017' : 'Conexões estáticas',
'p710t018' : 'Uma conexão estática é configurada manualmente, mas fornece um endereço constante ao seu roteador, que pode ser acessado mais facilmente de fora da rede. Conexões estáticas são incomuns ao serviço de Internet residencial e geralmente custam mais caro.  <span class="nub"></span>',
'p711t001' : 'Estabelecendo a conexão Estática...',
'p711t002' : ' Estamos solicitando uma conexão ao seu Provedor de serviços de Internet.',
'p712t001' : 'Há alguma coisa errada com as configurações Estáticas.',
'p712t002' : 'Um dos endereços ou algum item inserido está incorreto, mas não podemos precisar qual deles.',
'p800t001' : 'Aplicando suas alterações.',
'p800t002' : 'Estamos aplicando suas alterações e reinicializando o roteador para torná-las oficiais.',
'p801t002' : ' Estamos aguardando a reconexão do roteador. Continuaremos assim que isso acontecer.',
'p802t002' : 'Precisamos de uma conexão sem fio com o roteador para continuarmos.',
'p802t004' : 'Ir para o menu de rede sem fio do dispositivo',
'p802t005' : 'Selecione sua nova rede, chamada <strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong>',
'p802t007' : 'Insira sua senha, que é <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>',
'p802t009' : 'Você se conectará ao roteador e nós poderemos continuar.',
'p802t010' : ' Aguardando a reconexão do roteador.',
'p803t002' : 'Precisamos de uma conexão sem fio com o roteador para continuarmos.',
'p803t003' : 'Porque você alterou o nome da rede, precisará voltar a selecionar sua rede sem fio:',
'p803t004' : 'Ir para o menu de rede sem fio do dispositivo',
'p803t005' : 'Selecione sua nova rede, chamada <strong tid="Network24SSID">{REPLACE WITH 2.4 SSID}</strong>',
'p803t007' : 'Insira sua senha, que é <strong tid="Network24Passkey">{REPLACE WITH 2.4 PASSWORD}</strong>',
'p803t009' : 'Você se conectará ao roteador e nós poderemos continuar.',
'p803t010' : ' Aguardando a reconexão.',
'p804t001' : 'Seu dispositivo não foi reconectado.',
'p804t002' : 'Isso acontece algumas vezes e é muito fácil de corrigir.',
'p804t025' : 'Se você tiver algum dispositivo conectado à Internet, vá para este URL para obter informações úteis <strong>http://belk.in/PMuxOg</strong>',
'p804t026' : 'Se isso não funcionar, conecte o cabo Ethernet diretamente entre o modem e o computador.',
'p804t027' : ' Assim que detectarmos uma conexão, continuaremos automaticamente.',
'p900t001' : 'Precisamos que você reinicie seu modem.',
'p900t002' : 'Seu modem não está se comunicando.',
'p900t003' : 'Execute as seguintes etapas para reiniciar seu modem:',
'p900t004' : 'Desligue seu modem. Isso normalmente envolve um interruptor liga/desliga no modem ou simplesmente desconectá-lo da fonte de energia. Alguns modems têm uma bateria e, nesses casos, será preciso encontrar o botão de redefinição do modem.',
'p900t005' : 'Aguarde 15 segundos.',
'p900t006' : 'Volte a ligar o modem.',
'p900t007' : 'Após vários segundos, suas luzes serão acesas e ele estará pronto para se comunicar com o roteador.',
'p900t008' : 'Aguardaremos até que seu modem tenha sido desligado e religado e, em seguida, continuaremos automaticamente.',
'p900t009' : 'Por que reiniciar o modem?',
'p900t010' : 'Alguns modems precisam ser reiniciados para se comunicarem com um novo roteador ou com um computador que não lhes seja familiar. Podemos ver o seu modem, mas ele não está se comunicando com seu novo roteador e, portanto, uma rápida reinicialização pode ser suficiente. <span class="nub"></span>',
'p901t001' : 'Reinicie seu modem agora...',
'p901t002' : ' Estamos aguardando até que seu modem seja desligado e religado.',
'p902t001' : 'Seu modem foi desligado. Bom.…',
'p902t002' : ' Estamos aguardando até que volte a ser ativado.',
'p903t001' : 'Precisa de mais tempo?',
'p903t002' : ' Estamos aguardando até que seu modem seja reiniciado. Você precisa de mais tempo?',
'p903t005' : 'Isso normalmente envolve um interruptor liga/desliga no modem ou simplesmente desconectá-lo da fonte de energia, mas alguns modems têm uma bateria e, nesses casos, você precisa encontrar o botão de redefinição do modem.',
'p904t001' : 'Precisa de mais tempo?',
'p904t002' : ' Estamos aguardando até que seu modem volte a ser ativado. Você precisa de mais tempo?',
'p905t001' : 'Estamos vendo o seu modem novamente…',
'p905t002' : ' Estamos aguardando enquanto ele se sincroniza com seu Provedor de serviços de Internet. Isso levará um minuto ou dois.',
'p950IMRt001' : 'Não conseguimos detectar uma conexão com sua linha ADSL.',
'p950IMRt002' : 'Certifique-se de que haja um cabo de rede conectando a tomada ADSL na parede à porta cinza em seu roteador.',
'p950IMRt004' : 'Estamos achando que há um problema de fiação.',
'p950IMRt005' : 'Deve haver um cabo de rede conectando a porta cinza em seu roteador à tomada ADSL/telefônica. Esse cabo transporta o sinal do Provedor de serviços de Internet para o roteador. Sem ele, não é possível ficar online. Verifique se esse cabo está conectado corretamente.',
'p950IMRt006' : 'Este é o aspecto que essa conexão deve ter:',
'p950IMRt007' : 'Deve haver um cabo de rede conectando sua tomada ADSL a parede ao plugue de energia do seu roteador (que tem um modem incorporado). Esse cabo transporta o sinal do Provedor de serviços de Internet para o roteador. Sem ele, não é possível ficar online.',
'p950IMRt009' : 'Este é o aspecto que essa conexão deve ter:',
'p950IMRt010' : 'Continuaremos aguardando uma conexão enquanto você verifica.',
'p950IMRt014' : 'Fiação',
'p950IMRt015' : 'A dificuldade mais comum na fiação está entre a tomada na parede e o roteador. É importante verificar ambas as extremidades do cabo. Uma extremidade deve estar conectada à porta cinza no novo roteador; a outra extremidade deve estar conectada à tomada ADSL. Em alguns casos, um filtro pode ser necessário entre a tomada na parede e o cabo. <span class="nub"></span>',
'p950PMt001' : 'Não conseguimos detectar uma conexão com sua linha ADSL.',
'p950PMt002' : 'Certifique-se de que haja uma conexão de rede entre o seu roteador e o plugue de sua fonte de energia (que tem um modem incorporado).',
'p950PMt004' : 'Estamos achando que há um problema de fiação.',
'p950PMt005' : ' Certifique-se de que o cabo de rede que se ramifica do cabo de energia do modem esteja conectado à porta amarela WAN em seu roteador. Sem essa conexão de rede, não é possível ficar online.',
'p950PMt009' : 'Este é o aspecto que essa conexão deve ter:',
'p950PMt010' : 'Continuaremos aguardando uma conexão enquanto você verifica.',
'p950PMt011' : 'Fiação',
'p950PMt012' : 'A dificuldade mais comum na fiação está entre a tomada na parede e o modem. É importante verificar ambas as extremidades do cabo. Uma extremidade deve estar conectada à fonte de energia do novo roteador; a outra extremidade deve estar conectada à tomada ADSL. Em alguns casos, um filtro pode ser necessário entre a tomada na parede e o cabo. <span class="nub"></span>',
'p950t001' : 'Não detectamos uma conexão com seu modem.',
'p950t002' : 'Certifique-se de que seu modem esteja conectado e ligado.',
'p950t003' : 'Certifique-se de que um cabo Ethernet esteja conectado entre o modem e o roteador.',
'p950t004' : 'Estamos achando que há um problema de fiação.',
'p950t005' : 'Seu modem deve estar ligado e deve haver um cabo Ethernet conectado ao modem e à porta amarela no roteador.',
'p950t006' : 'Verifique o seguinte:',
'p950t007' : 'Certifique-se de que seu modem esteja ligado. Verifique se o adaptador de energia está conectado em ambas as extremidades e que uma ou mais das luzes do modem estão acesas.',
'p950t008' : 'Deve haver um cabo Ethernet conectado entre o modem e a porta amarela no roteador. Esse cabo transporta o sinal do modem para o roteador. Sem ele, não é possível ficar online.',
'p950t009' : 'Suas conexões devem ter esta aparência:',
'p950t010' : 'Continuaremos aguardando uma conexão enquanto você verifica.',
'p950t011' : 'Fiação',
'p950t012' : 'O problema de configuração mais comum é a fiação entre o modem e o roteador. Uma extremidade deve estar conectada à porta amarela no novo roteador; a outra extremidade deve estar conectada a uma porta semelhante no modem. Certifique-se de que ambas estejam completamente conectadas. Diferentes fabricantes de modems colocam rótulos diferentes nas portas. Sua porta pode ter o rótulo "data" (dados), "LAN" (Rede local), "network" (rede) ou "Ethernet" (Ethernet). <span class="nub"></span>',
'p951IMRt001' : 'Precisa de mais tempo?',
'p951IMRt002' : ' Estamos aguardando você conectar sua linha ADSL. Você precisa de mais tempo?',
'p951t001' : 'Precisa de mais tempo?',
'p951t002' : ' Estamos aguardando até que seu modem volte a ser ativado. Você precisa de mais tempo?',
'pDAt001' : 'Duplicar administrador',
'pDAt002' : 'Este dispositivo é gerenciado por  <span id="ipaddr"></span> no momento!',
'PIC_blocked_content' : 'O Controle da Internet pelos pais está ativo e, no momento, o acesso deste dispositivo à Internet está bloqueado. Pressione o botão abaixo para gerenciar as configurações do Controle da Internet pelos pais.',
'PIC_blocked_title' : 'No momento, o acesso deste dispositivo à Internet está bloqueado.',
'PIC_S1t0006' : 'Programar acesso à Internet:',
'PIC_S1t006' : 'Recentemente em sua rede:',
'PIC_S2t003' : 'Vésperas de dias de aula',
'PIC_S2t004' : 'Finais de semana',
'PIC_S2t005' : '(Domingo - Quinta)',
'PIC_S2t006' : '(Sexta - Sábado)',
'PIC-blocked' : 'bloqueado',
'PIC-S1dt001' : 'Deseja suspender a conectividade à Internet de toda a sua rede?',
'PIC-S1t001' : 'Bloquear todos os dispositivos',
'PIC-S1t003' : 'Todos os dispositivos estão desconectados da Internet.',
'PIC-S1t004' : 'Restaurar acesso',
'PIC-S1t005' : 'Em sua rede no momento:',
'PIC-S1t010' : 'Procurando dispositivos:',
'PIC-S1t020' : 'Sua programação de Controle da internet pelos pais está pausada',
'PIC-S1t021' : 'O roteador não tem a informação da hora atual, o que está impedindo o bloqueio/desbloqueio em sua programação do Controle da Internet pelos pais.  Isso será corrigido quando seu roteador restabelecer a hora correta reconectando-se ao servidor de horário NTP.',
'PIC-S1t022' : 'O roteador verificará o servidor de horário NTP em intervalos de alguns minutos, ou você poderá alterar o servidor de horário visitando <a href="#" tid="gtSystemSettings" style="">System Settings</a> (Configurações do sistema).',
'PIC-unblocked' : 'desbloqueado',
'pNoTime_content' : 'Seu roteador não pode informar as horas porque perdeu o contato com seu servidor de horário NTP. As funções do roteador baseadas em horário, como Controle da Internet pelos pais, Modo Eco e Autorrecuperação ficarão desativadas até que ele possa se reconectar um servidor de horário NTP. <br> <br>O roteador verificará a hora automaticamente a intervalos de alguns minutos.',
'pNoTime_title' : 'Que horas são?',
'pODLAplt001' : 'Aplicando pacote de idioma',
'pODLAplt002' : 'Alterando para o idioma escolhido…',
'pODLDLt001' : 'Baixando pacote de idioma',
'pODLDLt002' : 'Obtendo o idioma escolhido do servidor…',
'pODLErrt001' : 'Desculpe-nos',
'pODLErrt002' : 'OK',
'pStatst004' : 'Ver tudo &raquo;',
'Support1t001' : 'Não detectamos uma conexão com seu modem.',
'Support1t002' : 'Certifique-se de que seu modem esteja conectado e ligado.',
'Support1t003' : 'Certifique-se de que um cabo Ethernet esteja conectado entre o modem e o roteador.',
'Support1t004' : 'Estamos achando que há um problema de fiação.',
'Support1t005' : 'Seu modem deve estar ligado e deve haver um cabo Ethernet conectado ao modem e à porta amarela no roteador.',
'Support1t006' : 'Verifique o seguinte:',
'Support1t007' : 'Certifique-se de que seu modem esteja ligado. Verifique se o adaptador de energia está conectado em ambas as extremidades e que uma ou mais das luzes do modem estão acesas.',
'Support1t008' : 'Deve haver um cabo Ethernet conectado entre o modem e a porta amarela no roteador. Esse cabo transporta o sinal do modem para o roteador. Sem ele, não é possível ficar online.',
'Support1t009' : 'Suas conexões devem ter esta aparência:',
'Support1t010' : 'Depois de executar essas etapas, clique em Try again (Tentar novamente).',
'Support7t012' : 'Vá para <strong>http://belk.in/Q4XXca</strong> em um dispositivo conectado à Internet',
'Support1t016' : 'Fiação',
'Support1t017' : 'O problema de configuração mais comum é a fiação entre o modem e o roteador. Uma extremidade deve estar conectada à porta amarela no novo roteador; a outra extremidade deve estar conectada a uma porta semelhante no modem. Certifique-se de que ambas estejam completamente conectadas. Diferentes fabricantes de modems colocam rótulos diferentes nas portas. Sua porta pode ter o rótulo "data" (dados), "LAN" (Rede local), "network" (rede) ou "Ethernet" (Ethernet). <span class="nub"></span>',
'Support2t001' : 'Seu modem não foi reiniciado.',
'Support2t002' : 'Experimente desconectar a fonte de energia do modem.',
'Support2t003' : 'Talvez seu modem tenha um botão de redefinição que precise ser pressionado.',
'Support2t004' : 'Está tendo problemas para reiniciar seu modem?',
'Support2t005' : 'Experimente executar as seguintes etapas para reiniciar seu modem:',
'Support2t006' : 'Desconecte a fonte de energia do modem.',
'Support2t007' : 'Aguarde até que as luzes no modem se apaguem.',
'Support2t008' : 'Se as luzes permanecerem acesas, seu modem pode ter uma bateria de reserva. Deve haver um botão de redefinição em algum lugar (geralmente na parte traseira). Pressione-o.',
'Support2t009' : 'Você deve ver as luzes do modem se apagarem. Aguarde alguns segundos antes de voltar a conectar a fonte de energia.',
'Support2t010' : 'Depois de executar essas etapas, clique em Try again (Tentar novamente).',
'Support2t016' : 'Por que reiniciar o modem?',
'Support2t017' : 'Alguns modems precisam ser reiniciados para se comunicarem com um novo roteador ou com um computador que não lhes seja familiar. Podemos ver o seu modem, mas ele não está se comunicando com seu novo roteador e, portanto, uma rápida reinicialização pode ser suficiente. <span class="nub"></span>',
'Support3MRt001' : 'Não conseguimos detectar uma conexão com sua linha ADSL.',
'Support3MRt002' : 'Certifique-se de que haja um cabo de rede entre a tomada ADSL na parede e seu roteador.',
'Support3MRt003' : 'Em algumas áreas, um filtro será necessário.',
'Support3MRt004' : 'Temos certeza de que há um problema com a fiação.',
'Support3MRt005' : 'Deve haver um cabo conectando a porta cinza em seu roteador à tomada ADSL/telefônica.',
'Support3MRt006' : 'Certifique-se de que ambas as extremidades do cabo estejam totalmente encaixadas.',
'Support3MRt007' : 'Certifique-se de que o cabo esteja conectado à porta cinza de seu roteador, e não em uma das portas amarelas.',
'Support3MRt008' : 'Se lhe tiver sido fornecido um filtro de linha ADSL, certifique-se de que ele esteja entre o cabo e a tomada ADSL.',
'Support3MRt010' : 'Certifique-se de que ambas as extremidades do cabo estejam totalmente encaixadas.',
'Support3MRt011' : 'Assegure-se de que o cabo esteja conectado à porta de rede da fonte de energia do seu roteador.',
'Support3MRt012' : 'Se lhe tiver sido fornecido um filtro de linha ADSL, certifique-se de que ele esteja conectado entre o cabo e a tomada ADSL.',
'Support3MRt016' : 'Depois de executar essas etapas, você estará pronto para tentar novamente.',
'Support3MRt018' : 'Acesse o URL a seguir em um dispositivo conectado à Internet e saiba como corrigir o problema você mesmo: <strong>www.belkin.com/support3mr</strong>',
'Support3MRt021' : 'Fiação',
'Support3MRt022' : 'A dificuldade mais comum na fiação envolve sua tomada ADSL. É importante verificar ambas as extremidades do cabo. <span class="nub"></span>',
'Support3MRt050' : 'Certifique-se de que haja um cabo de rede entre a fonte de energia do seu roteador e a tomada telefônica.',
'Support3MRt051' : 'Deve haver um cabo conectado a fonte de energia de seu roteador à tomada ADSL/telefônica.',
'Support3PMt001' : 'Não conseguimos detectar uma conexão com sua linha ADSL.',
'Support3PMt002' : 'Certifique-se de que haja uma conexão de rede entre o seu roteador e o plugue de sua fonte de energia (que tem um modem incorporado).',
'Support3PMt004' : 'Temos certeza de que há um problema com a fiação.',
'Support3PMt005' : 'Deve haver uma conexão de rede entre a porta amarela no roteador e a fonte de energia do roteador.',
'Support3PMt006' : 'Olhe o plugue da fonte de energia do roteador e encontre o cabo que se divide em duas linhas separadas. Uma dessas linhas tem um plugue de Ethernet.',
'Support3PMt007' : 'Insira o plugue de Ethernet na porta amarela em seu roteador.',
'Support3PMt010' : 'Depois de fazer isso, você estará pronto para tentar novamente.',
'Support3PMt012' : 'Vá para <strong>www.belkin.com/support3PM</strong> em um dispositivo conectado à Internet',
'Support3PMt016' : 'Fiação',
'Support3PMt017' : 'É essencial certificar-se de que haja uma série ininterrupta de conexões desde a tomada ADSL até o seu roteador. O roteador espera que esse sinal seja recebido pela porta amarela. O cabo que vem da fonte de energia de seu roteador transporta esse sinal e a alimentação para o roteador. Ambas as suas metades precisam estar conectadas em seu roteador para que tudo funcione corretamente. <span class="nub"></span>',
'Support3t001' : 'Seu modem não voltou a ser ativado.',
'Support3t002' : 'Verifique se o modem está conectado à fonte de energia.',
'Support3t003' : 'Talvez seja preciso aguardar um pouco até que ele fique pronto.',
'Support3t004' : 'Está tendo problemas para reiniciar seu modem?',
'Support7t005' : 'Experimente executar as seguintes etapas para estabelecer uma conexão ADSL:',
'Support7t006' : 'Certifique-se de que o cabo de rede de seu modem-roteador esteja conectado a uma tomada telefônica com conexão à Internet. Em seguida, clique em Try Again (Tentar novamente) e veja se o modem-roteador consegue detectar a Internet.',
'Support7t007' : 'Se seu modem-roteador compartilhar sua tomada telefônica com uma linha fixa (por meio de um divisor), substitua o divisor por um filtro-divisor (opcional). Em seguida, clique em Try Again (Tentar novamente) e veja se o modem-roteador consegue detectar o Provedor de serviços de Internet.',
'Support7t008' : 'Se a etapa 2 acima não funcionar, filtros ADSL podem ser necessários*. Se você tiver os filtros (normalmente fornecidos por seu Provedor de serviços de Internet), conecte-os entre todos os seus telefones fixos e suas tomadas telefônicas.',
'Support7t009' : 'Se a conexão ADSL ainda não funcionar depois que você tentar as etapas 1-3 acima, entre em contato com o suporte técnico de seu Provedor de serviços de Internet (ISP). Diga a eles que você está tendo problemas para fazer com que seu modem-roteador se sincronize com seu ISP.',
'Support3t010' : 'Depois de executar essas etapas, clique em Try again (Tentar novamente).',
'Support3t016' : 'Por que reiniciar o modem?',
'Support3t017' : 'Alguns modems precisam ser reiniciados para se comunicarem com um novo roteador ou com um computador que não lhes seja familiar. Podemos ver o seu modem, mas ele não está se comunicando com seu novo roteador e, portanto, uma rápida reinicialização pode ser suficiente. <span class="nub"></span>',
'Support4t001' : 'Não conseguimos reconectar ao seu roteador.',
'Support4t002' : 'Experimente reiniciar seu roteador.',
'Support4t003' : 'Quando seu roteador estiver ativo e funcionando, experimente conectar-se a ele novamente.',
'Support4t004' : 'Vamos tentar outras alternativas.',
'Support4t005' : 'Primeiro, vamos reiniciar seu roteador.',
'Support4t006' : 'Desconecte a fonte de energia do roteador, aguarde alguns segundos e volte a conectá-la.',
'Support4t006w' : 'Desconecte a fonte de energia do roteador, aguarde alguns segundos e volte a conectá-la.',
'Support4t007' : 'Quando o roteador estiver exibindo uma luz azul sólida, estaremos prontos para conectar.',
'Support4t008' : 'Em seguida, vamos tentar estabelecer uma conexão sem fio.',
'Support4t031' : 'Levará alguns segundos para estabelecer a conexão e, em seguida, você estará pronto para tentar novamente.',
'Support4t032' : 'Ou você pode tentar uma conexão com fio.',
'Support4t033' : 'Considere conectar um computador ao roteador. Use um cabo Ethernet entre o computador e uma das portas cinza no roteador. Visitar http://router/ permitirá tentar a configuração novamente.',
'Support4t034' : 'Depois de executar essas etapas, clique em Try again (Tentar novamente).',
'Support4t040' : 'Vá para <strong>http://belk.in/NLk29H</strong> em um dispositivo conectado à Internet',
'Support4t050' : 'Reobtendo uma conexão',
'Support4t051' : 'Nestas situações, seu roteador pode precisar de reinicialização ou apenas restabelecer uma conexão. Portanto, incluímos instruções para ambos. Visto que talvez você tenha alterado a senha de sua rede em uma etapa anterior, talvez seja preciso voltar a selecionar a rede depois de reiniciar o roteador. <span class="nub"></span>',
'Support5t001' : 'Não conseguimos reconectar ao seu roteador.',
'Support5t002' : 'Experimente reiniciar seu roteador.',
'Support5t003' : 'Quando seu roteador estiver ativo e funcionando, experimente conectar-se a ele novamente.',
'Support5t004' : 'Vamos tentar outras alternativas.',
'Support5t005' : 'Primeiro, vamos reiniciar seu roteador.',
'Support5t006' : 'Desconecte a fonte de energia do roteador, aguarde alguns segundos e volte a conectá-la.',
'Support5t006w' : 'Desconecte o roteador, aguarde alguns segundos e volte a conectá-lo.',
'Support5t007' : 'Quando o roteador estiver exibindo uma luz azul sólida, estaremos prontos para conectar.',
'Support5t008' : 'Em seguida, vamos tentar estabelecer uma conexão sem fio.',
'Support5t009' : 'Levará alguns segundos para estabelecer a conexão e, em seguida, você estará pronto para tentar novamente.',
'Support5t010' : 'Ou você pode tentar uma conexão com fio.',
'Support5t011' : 'Você pode conectar um computador ao roteador. Conecte um cabo Ethernet entre o computador e uma das portas cinza no roteador. Visitar http://router/ permitirá tentar a configuração novamente.',
'Support5t012' : 'Depois de executar essas etapas, clique em Try again (Tentar novamente).',
'Support5t015' : 'Vá para <strong>http://belk.in/NLk29H</strong> em um dispositivo conectado à Internet',
'Support5t020' : 'Reobtendo uma conexão',
'Support5t021' : 'Nessas situações, é difícil determinar se o roteador precisa ser reiniciado ou se basta restabelecer a conexão com ele. Portanto, incluímos instruções para ambos os casos. Visto que alteramos o nome de sua rede em uma etapa anterior, certifique-se de conectar-se à nova rede depois de ter reiniciado o roteador. <span class="nub"></span>',
'Support6t001' : 'Não conseguimos reconectar ao seu roteador.',
'Support6t002' : 'Experimente reiniciar seu roteador.',
'Support6t003' : 'Quando seu roteador estiver ativo e funcionando, experimente conectar-se a ele novamente.',
'Support6t004' : 'Vamos tentar outras alternativas.',
'Support6t005' : 'Primeiro, vamos reiniciar seu roteador.',
'Support6t006' : 'Desconecte a fonte de energia do roteador, aguarde alguns segundos e volte a conectá-la.',
'Support6t006w' : 'Desconecte o roteador, aguarde alguns segundos e volte a conectá-lo.',
'Support6t007' : 'Quando o roteador estiver exibindo uma luz azul sólida, estaremos prontos para conectar.',
'Support6t008' : 'Em seguida, vamos tentar estabelecer uma conexão sem fio.',
'Support6t031' : 'Levará alguns segundos para estabelecer a conexão e, em seguida, você estará pronto para tentar novamente.',
'Support6t032' : 'Ou você pode tentar uma conexão com fio.',
'Support6t033' : 'Você pode conectar um computador ao roteador. Conecte um cabo Ethernet entre o computador e uma das portas cinza no roteador. Visitar http://router/ permitirá tentar a configuração novamente.',
'Support6t034' : 'Depois de executar essas etapas, clique em Try again (Tentar novamente).',
'Support6t037' : 'Vá para <strong>http://belk.in/Nm1f5S</strong> em um dispositivo conectado à Internet',
'Support6t050' : 'Reobtendo uma conexão',
'Support6t051' : 'Nestas situações, seu roteador pode precisar de reinicialização ou apenas restabelecer uma conexão. Portanto, incluímos instruções para ambos. Visto que talvez você tenha alterado a senha de sua rede em uma etapa anterior, talvez seja preciso voltar a selecionar a rede depois de reiniciar o roteador. <span class="nub"></span>',
'Support7t001' : 'Seu modem-roteador não está conectado à Internet.',
'Support7t004' : 'Há um problema com a conexão com sua tomada telefônica.',
'Support7t050' : 'Problemas de conexão',
'Support7t051' : 'Nessas situações é difícil dizer por que estamos tendo problemas para estabelecer uma conexão com o ISP. Nós verificamos sua fiação tanto quanto possível e, portanto, a próxima etapa é verificar se você está usando a tomada correta, um filtro, se necessário, e se tudo mais falhar, ligar para o seu ISP. <span class="nub"></span>',
'SupportNumber' : '1-800-123-4567',
'UpSpeed' : '12.5',
'p2410t012' : 'Clicar em \'Restore\' (Restaurar) apagará as configurações do seu roteador, como nome e senha, e as substituirá pelos padrões de fábrica originais.  Seus computadores, telefones, etc. devem então ser configurados de modo a corresponderem a essas configurações para ficar online por meio deste roteador. Tem certeza de que deseja continuar?',
'gtRestore' : 'Restaurar',
'gtCancel' : 'Cancelar',
'alt="Loading"' : 'Carregando',
'alt="Restart Router"' : 'Reiniciar roteador',
'alt="Check Wires"' : 'Verificar fios',
'alt="Check Phone Connection"' : 'Verificar conexão telefônica',
'alt="Check WAN Connection"' : 'Verificar conexão da WAN',
'alt="Checkmark"' : 'Marca de seleção',
'alt="Change"' : 'Alterar',
'alt="Print"' : 'Imprimir',
'alt="Expand"' : 'Expandir',
'alt="Caret"' : 'Sinal de interpolação',
'alt="Cut"' : 'Recortar',
'alt="Browser"' : 'Navegador',
'alt="Wifi"' : 'Wi-Fi',
'alt="Password"' : 'Senha',
'alt="Check Phone Jack"' : 'Verificar tomada telefônica',
'alt="Turn Off Modem"' : 'Desligar modem',
'alt="Turn On Modem"' : 'Ligar modem',
'alt="Check Phone Filters"' : 'Verificar filtros telefônicos',
'gtSerial' : 'Nº de série',
'gt5GName' : 'SSID de 5 GHz',
'gt5GKey' : 'Chave de 5 GHz',
'p1020MRt001' : 'Estamos tendo problemas para nos comunicar com seu Provedor de serviços de Internet.',
'p1020MRt002' : 'Reinicie seu modem-roteador.',
'p1020MRt003' : 'Não estamos conseguindo nos conectar à Internet. Vamos tentar reiniciar seu modem-roteador.',
'p1020MRt004' : 'Desligue seu modem-roteador. Isso normalmente envolve acionar um interruptor no modem-roteador ou simplesmente desconectá-lo da fonte de energia.',
'p1020MRt005' : 'Aguarde 15 segundos.',
'p1020MRt006' : 'Volte a ligar o modem-roteador.',
'p1020MRt007' : 'Após vários segundos suas luzes se acenderão e ele deverá estabelecer contato com seu ISP.',
'p1020MRt008' : 'Se este problema persistir, entre em contato com seu Provedor de serviços de Internet para solucionar o problema de sua conta.',
'p1020MRt009' : 'Aguardaremos até que seu modem-roteador tenha sido desligado e religado e, em seguida, continuaremos automaticamente.',
'p1020MRt010' : 'Por que reiniciar o modem?',
'p1020MRt011' : 'Alguns modems precisam ser reiniciados para se comunicarem com um novo roteador ou com um computador que não lhes seja familiar. E se houver alguma flutuação em seu Provedor de serviços de Internet, o modem poderá perder sua conexão inesperadamente. Podemos ver o seu modem, mas não a Internet. Portanto, uma rápida reinicialização pode ser suficiente. <span class="nub"></span>',
'p1010t001' : 'Estamos tendo problemas para nos comunicar com seu modem.',
'p1010t002' : 'Estamos achando que há um problema de fiação.',
'p1010t003' : 'Deve haver um cabo conectando seu modem à porta amarela no roteador. Seu modem deve estar ligado.',
'p1010t004' : 'Há algumas coisas que você pode fazer para se certificar de que tudo irá funcionar:',
'p1010t005' : 'Certifique-se de que seu modem esteja ligado. Seu adaptador de energia deve estar conectado em ambas as extremidades e uma ou mais luzes devem estar acesas no modem.',
'p1010t006' : 'Deve haver um cabo de rede conectando seu modem à porta amarela no roteador. Esse cabo transporta o sinal do modem para o roteador. Sem ele, não é possível ficar online.',
'p1010t007' : 'Se ambos estiverem corretos, tente reiniciar o modem desconectando sua fonte de energia, aguardando quinze segundos e voltando a conectá-la. Se seu modem tiver uma bateria, talvez seja preciso localizar o botão de redefinição do modem e usá-lo em vez disso.',
'p1010t008' : 'Este é o aspecto que as conexões devem ter:',
'p1010t009' : 'Continuaremos aguardando uma conexão enquanto você verifica.',
'p1010t010' : 'A dificuldade mais comum na fiação está entre o modem e o roteador. É importante verificar ambas as extremidades do cabo. Uma extremidade deve estar conectada à porta amarela no novo roteador; a outra extremidade deve estar conectada a uma porta semelhante no modem. Diferentes fabricantes de modems colocam rótulos diferentes nas portas. Sua porta pode ter o rótulo "data" (dados), "LAN" (Rede local), "network" (rede) ou "Ethernet" (Ethernet).',
'Support3t005' : 'Experimente executar as seguintes etapas para reiniciar seu modem:',
'Support3t006' : 'Verifique as luzes no painel frontal do modem. Se estiverem acesas, seu modem estará ligado, e talvez seja necessário esperar um pouco até que o modem esteja pronto.',
'Support3t007' : 'Verifique se a fonte de energia do modem está devidamente conectada ao modem e à tomada elétrica.',
'Support3t008' : 'Se seu modem tiver um interruptor liga/desliga, verifique se está na posição ligada.',
'Support3t009' : 'Volte a verificar se o modem ainda está conectado ao seu novo roteador.',
'Support1t012' : 'Vá para <strong>http://belk.in/LIkBoH</strong> em um dispositivo conectado à Internet',
'QOSt001' : 'Para ativar o Intellistream, será preciso fazer o seguinte:',
'QOSt002' : 'Use um cabo de ethernet para conectar o computador ao roteador da Belkin (recomendado).',
'QOSt003' : 'Faça um teste de velocidade para a conexão da internet clicando aqui para acessar <a href="http://www.speedtest.net" target="_blank" class="speed_font4">Speedtest.net</a>',
'QOSt004' : 'Após executar um teste de velocidade, insira os valores exibidos em Speedtest.net nos campos Velocidade de Download e Velocidade de Upload acima e clique em "Salvar" abaixo.',
'gtMbps' : 'Mbps',
'QOSt006' : 'Com sua alta velocidade de download, o Intellistream dará prioridade somente à sua velocidade de upload.',
'QOSt007' : 'Com sua alta velocidade de upload, o Intellistream dará prioridade somente à sua velocidade de download.',
'QOSt008' : 'Com essas altas velocidades na Internet, o Intellistream não ajudará, portanto, não precisa ser ativado.',
'QOSt009' : 'Insira um número maior do que 0,01.',
'QOSt010' : 'Insira números maiores do que 0,01.',
'gtSettingsNotSaved' : 'Você possui alterações não salvas. Permaneça nesta página para salvá-las ou saia e recarregue a página para descartar as alterações.',
'QOSt011' : 'Insira um número entre 0,01 e 100,00.',
'QOSt012' : 'Insira números entre 0,01 e 100,00.',
'QOSt013' : 'Insira um número entre 0,01 e 1000,00.',
'QOSt014' : 'Insira números entre 0,01 e 1000,00.',



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
upgrade_err2 = 'Atualização de firmware terminada devido a recursos insuficientes. Falha da atualização.\nTente novamente quando o sistema estiver ocioso (sem tráfego de Internet)';
upgrade_err3 = 'Não é possível carregar. Contate o administrador.';
upgrade_err4 = 'O firmware é grande demais. Houve falha da atualização.';
upgrade_err5 = 'Você já tem o firmware mais recente instalado.';
upgrade_err6 = 'Parece que a atualização de firmware foi corrompida. Volte a baixar o arquivo de firmware e tente novamente.';
show10 = 'Lista de clientes DHCP';
show54 = 'Configurações de conexão';
btn2 = 'Aplicar alterações';
cff1 = 'Verificar se firmware bem-sucedido';
PM2 = ':30 PM';
AM2 = ':30 AM';
Dimicons = 'Esmaecer ícones';
EcoTo = 'a';
fvrm = 'Desative o Gerenciamento remoto. Porque sua porta está em conflito com a porta de entrada de um dos servidores virtuais.';
lsipm2 = 'Endereço IP da LAN inválido: o último número não pode ser 0 nem 255';
lsldnm = 'Nome do domínio local inválido: `~!@#$%^&*()_+[]{}\|;:\'"<>/?.,';
lsipm5 = 'O endereço IP selecionado deve ser um IP não roteável.\n  192.168.x.x (onde x é qualquer número entre 0 e 255). \n10.x.x.x (onde x é qualquer número entre 0 e 255).\n172.y.x.x (onde y é qualquer número entre 16 e 31, e x é qualquer número entre 0 e 255).';
ufy4 = 'A restauração das configurações padrão levará até 60 segundos. Não desligue o Roteador durante esse processo.';
ufe11 = 'Ao final da atualização, o Roteador pode não responder aos comandos por até 180 segundos. Isso é normal. Não desligue nem reinicie o Roteador durante esse período.';
ur5 = 'Aguarde até 30 segundos até que o Roteador seja reiniciado. Não desligue o Roteador até que a redefinição esteja concluída.';
ur6 = 'Aguarde até 60 segundos até que o Roteador seja reiniciado. Não desligue o Roteador até que a redefinição esteja concluída.';
usys83 = 'Os campos Nova senha e Confirmar nova senha não coincidem';
usys83_1 = 'A senha e a confirmação da senha não coincidem.';
usys85_1 = 'O comprimento da senha de administração deve estar entre 1 e 63.';
usys88 = 'A senha atingiu seu comprimento máximo!';
usys89 = 'AM';
usys90 = 'PM';
usys92 = 'O número da porta de acesso remoto deve estar entre 1 e 65535.';
usysipm = 'Você não inseriu todos os números do IP ou alguns dos números inseridos são inválidos. O endereço IP deve ter o formato x.y.y.z (onde x é qualquer número de 1 a 223, y é qualquer número de 0 a 255 e z é qualquer número de 1 a 254).';
self_healing60 = 'Autorrecuperação';
chkwait = 'Verificando se há um novo firmware...';
Europe = 'Europa';
Australia = 'Austrália e Nova Zelândia';
AsiaPacific = 'Pacífico Asiático';
NorthAmerica = 'América do Norte';
vjs1 = 'Endereço IP inválido: comprido demais. Verifique novamente';
vjs2 = 'Endereço IP inválido: falta um \'.\'. Verifique novamente!';
vjs3 = 'Endereço IP inválido: faltam números entre os \'.\'. Verifique novamente!';
vjs4 = 'Endereço IP inválido: há um \'.\' extra. Verifique novamente!';
vjs5 = 'Endereço IP inválido: os números entre os \'.\' são grandes demais. Verifique novamente!';
vm1 = 'Caractere inválido ';
vm2 = ' na posição ';
vm3 = 'Deve ser ';
vjs6 = 'Formato de ano inválido. Insira, por exemplo, 2002';
vm4 = 'Número inválido ';
vjs8 = 'Inválido: precisa estar entre 1970 e 2037';
vjs9 = 'Formato de mês inválido. Insira, por exemplo, 01...12';
vjs161 = ' não em ';
vjs162 = ' máscara de rede';
vjs163 = 'O intervalo de DHCP permitido é ';
vjs17 = 'Você digitou duas senhas diferentes. Verifique novamente!';
vjs18 = 'Insira o número da porta inicial.';
vjs19 = 'O número da porta inicial deve ser inferior ao número da porta final.';
vjs23 = 'Endereço MAC inválido: é um endereço de transmissão.';
vjs24 = 'Endereço MAC inválido: é um endereço nulo.';
vjs25 = 'Endereço MAC inválido: é um endereço mutlicast.';
vjs26 = 'Endereços IP inicial e final inválidos. O IP final deve ser superior ao IP inicial.';
vjs28 = 'Formato de máscara de rede inválido.';
vjs29 = 'Formato inválido: a máscara de rede aqui deve ser 255.255.255.0 ou 255.255.255.128 ou 255.255.255.192 ou 255.255.255.224 ou 255.255.255.240 ou 255.255.255.248 ou 255.255.255.252 ou 255.255.255.254';
vjs30 = 'Endereço IP inválido: o último número não pode ser 0 nem 255';
vjs31 = 'Endereço IP da LAN inválido: o primeiro número não pode ser 127';
vjs32 = 'Endereço IP da LAN inválido: não pode ser 0.0.0.0';
vjs33 = 'Endereço IP da LAN inválido: precisa ser inferior a 224.0.0.0';
vjs42 = 'Os números de máscara de sub-rede inseridos são inválidos.';
vjs45 = 'Especificar endereço IP';
vjs46 = 'é inválida. Corrija-a primeiro!';
wcc2 = 'Selecione seu tipo de conexão:';
wcc13 = 'L2TP';
wcc14 = '[Somente para Israel.] Este tipo de conexão é mais comum em Israel. Se seu Provedor de serviços de Internet (ISP) o tiver instruído especificamente a usar L2TP e tiver fornecido as informações de L2TP apropriadas, use esta opção.';
wds4_1 = 'Endereço DNS primário';
wds7 = 'Será preciso inserir as configurações de DNS fornecidas pelo ISP, se você não usar a função DNS automático';
wds8 = 'Para fazer alterações ao DNS, viste primeiro %s Filtros de site da Web %s e selecione "Sem filtros".';
wmc6 = 'O endereço MAC da WAN não pode ser o mesmo endereço MAC da LAN. Escolha outro.';
wdd9  = 'Nenhum Serviço DDNS selecionado.\n';
wdd10 = 'Não há nenhum Serviço DDNS selecionado e todos os dados nesta página serão perdidos. Continuar?';
wm10b = 'Para uso somente com ISPs que exigem método de ligação L2TP.';
pm = 'O serviço não pôde verificar a senha inserida. Confira se digitou sua senha corretamente.';
wpp17 = 'Conta L2TP';
wpp18 = 'Senha L2TP';
wpp19 = 'Insira sua conta L2TP';
wpp23 = 'Atribuição de endereço IP';
wpp24 = 'Usar endereço IP estático';
wpp25 = 'Obter dinamicamente do ISP';
wppa7 = 'Meu endereço IP';
wppa9 = 'ID da conexão (opcional)';
wppa13 = 'Insira sua conta PPTP';
wppa18 = 'Nome de serviço inválido.';
ws2 = 'Para inserir suas configurações de IP estático, digite suas informações abaixo e clique em "Aplicar alterações".';
sm_1 = 'A máscara de sub-rede inserida é inválida.';
ws8 = 'Insira/valide suas configurações de endereço DNS na tela a seguir';
wt2 = 'Clicar em Aplicar alterações reiniciará o roteador. Depois que o roteador for reiniciado, será preciso fazer o seguinte';
wt3 = '1) Desconecte o cabo de alimentação tanto do Modem a cabo quanto do Roteador Belkin';
wt4 = '2) Reconecte o cabo de alimentação ao Modem a cabo e aguarde até que todas as luzes no modem parem de piscar';
wt5 = '3) Reconecte o cabo de alimentação ao Roteador Belkin';
wt6 = 'Para confirmar que você foi conectado com êxito à Internet, abra um navegador da Internet, como Internet Explorer, Firefox ou Safari, e assegure-se de que pode navegar por páginas da Web.';
wlad2 = 'Ativar/Desativar';
wlc2 = 'Para fazer alterações às configurações sem fio do roteador, faça-as aqui. Clique em "Aplicar alterações" para salvar as configurações.';
wlcgb = '802.11b+g';
wlcg = '802.11g';
wlcb = '802.11b';
wlc20 = '20 MHz';
wlc22 = '20/40 MHz';
wlc22a='20/40/80 MHz';
wlcoff = 'DESLIGADO';
wlcngb1 = '802.11b e 802.11g e 1x1 802.11n';
wlcn1 = '1x1 802.11n';
wlcngb2 = '802.11b e 802.11g e 802.11n';
wlcn2 = '802.11n';
wlcgn = '802.11g+n';
wlca = '802.11a';
wlcan = '802.11a e 802.11n';
wlcnac='802.11n e 802.11ac';
wlcanac='802.11a e 802.11n e 802.11ac';
wlc26 = 'Ocultar o nome da rede desativará o WPS.';
wlc27 = 'Alterar o tipo de segurança desativará o WPS.';
wlc28 = 'O WPS está desativado devido ao seu <A href=%s><B>tipo de segurança sem fio</B></A>.';
wlc29 = 'O WPS está desativado porque você ocultou o nome da sua rede (SSID).';
wlc30 = 'O WPS está desativado desde que você ocultou o nome da sua rede (SSID) e devido ao seu <A href=%s><B>tipo de segurança sem fio</B></A>.';
wlc31 = 'Ativar o WPS voltará a mostrar o nome de sua rede (SSID).';
wlc32 = 'Ativar o WPS alterará o tipo de segurança para WPA/WPA2. A senha atual da rede funcionará corretamente.';
wlc33 = 'Ativar o WPS voltará a mostrar o nome da rede (SSID) e alterará o tipo de segurança para WPA/WPA2. A senha atual da rede funcionará corretamente.';
wle3a = 'WPA-PSK';
wle3b = 'WPA2-PSK';
wle3c = 'WPA-PSK + WPA2-PSK';
wps1 = 'WPS (Wi-Fi Protected Setup)';
wps3 = 'Configure a segurança sem fio';
wps17 = 'Para dispositivos cliente sem WPS, execute o Assistente de segurança da Belkin do CD e configure manualmente o dispositivo com as seguintes configurações:';
wps23 = 'WPA+WPA2-Personal (PSK)';
wps25 = 'TKIP+AES';
wps27 = 'Chave de rede (WEP):';
wps28_1 = 'NULO';
wle11 = 'Chave 1';
wle12 = 'Chave 2';
wle13 = 'Chave 3';
wle14 = 'Chave 4';
wpskerr2 = 'A chave precisa ter entre 8 e 63 caracteres e pode incluir espaços e símbolos, ou 64 caracteres hexadecimais (somente 0-F)!';
wpskerr4 = 'É preciso inserir a Chave de convidado';
wpskerr7 = 'A Chave de convidado deve ter 8 caracteres';
wpskerr8 = 'A Chave de convidado não pode ser a mesma que a Chave de rede';
wlguest1 = 'A SSID não pode ser a mesma que a SSID de convidado';
wlguest2 = 'A SSID de convidado não pode ser a mesma que a SSID';
rs_crc = 'Restaurar falha < CRC >';
rs_long = 'Restaurar falha <too long>';
rs_disposition = 'Restaurar falha <No Content-Disposition>';
rs_getpid = 'Restaurar falha <Can\'t get pid!>';
rs_unmatchpid = 'Restaurar falha <Unmatched pid>';
msg_ddns3  = 'Os campos de nome de domínio não podem ficar em branco.\n';
msg_lan_dhcp1  = 'Solicitando informações do Gateway.';
msg_lan_dhcp2  = 'Atualizando o banco de dados de configuração.';
msg_wan_stat1  = 'Endereço IP ';
msg_wan_stat2  = ' não está na ';
msg_wan_stat3  = ' rede.';
msg_wls_chan2  = 'A SSID de convidado não pode ser definida como NULO!\n';
fw_not_interrupt  = 'NÃO INTERROMPA NEM DESCONECTE O ROTEADOR, visto que isso pode deixar o Roteador inoperante.';
msg_invalid_char  = 'Caracteres inválidos encontrados. Os caracteres válidos são: 0-9, a-z, A-Z, `~!@#$%^&*()_-+=|\\{}[]:";\',.<>/?';
msg_invalid_domain_char  = 'Nome do domínio local inválido'+': ~!@#$%^&*()=+{}[]|":;\\\'?/<>,`';
msg_invalid_char_1  = 'Caracteres inválidos encontrados. Os caracteres válidos são letras e números. Os símbolos a seguir são inválidos: `~!@#$%^&*()_+[]{}\\|;:\'"<>/?.,';
msg_hostIP_invalid  = 'O endereço IP do host é inválido. Não deve ser o IP de LAN do Roteador.\n';
msg_dmzIP  = 'Endereço IP da DMZ.';
msg_blank  = ' não pode ficar em branco.\n';
msg_space  = 'Vazios ou espaços não são permitidos em %s\n';
msg_blank_in  = 'Vazios não são permitidos em %s\n';
msg_allspaces  = 'O %s não pode ser formado apenas por espaços\n';
msg_invalid  = 'Caractere ou caracteres inválidos em %s\nOs caracteres válidos são: \n%s\n\n';
msg_check_invalid  = '%s contém um número inválido\n';
msg_valid_range  = '%s é inválido. O intervalo válido é de %s a %s\n';
msg_invalid_mac  = 'Endereço MAC inválido.\n';
msg_multi_mac = 'O endereço MAC não pode ser um endereço multicast.\n';
msg_confirmDefault  = 'Atenção!\nCarregar as Configurações padrão de fábrica apagará todas as configurações atuais.\nTem certeza de que deseja fazer isso?';
Allowed_Services = 'Serviços permitidos';
Allowing_Url = 'Permissão de site por endereço de URL ';
Allowing_Keyword = 'Permissão de site por palavra-chave';
wipv63 = 'Dispositivos conectados ao roteador podem se comunicar uns com os outros usando pacotes IPv6 nativos. Os pacotes IPv6 na LAN serão enviados automaticamente a todas as interfaces da LAN (portas Ethernet e redes sem fio tanto de 2,4 GHz quanto de 5 GHz).';
wipv64 = 'Quando a passagem IPv6 estiver ativada, os pacotes IPv6 também serão copiados na interface da WAN.(Quando ativado, isso cria uma conexão direta desprotegida com a Internet.)';
wipv65 = 'Entre em contato diretamente com seu Provedor de serviços de Internet para obter informações sobre seu suporte a IPv6.';
wipv67 = 'IPv6 de Internet';
wipv68 = 'Sua rede é compatível com IPv6.';
wipv69 = 'Passagem';
mf1 = 'Estas páginas permitem ajustar o comportamento de seu roteador quando apresentado a determinados tipos de tráfego de mídia.';
mf2 = 'Otimize sua conexão à Internet automaticamente para os diferentes tipos de tráfego.';
mf3 = 'Veja como seu roteador está sendo usado.';
mf8 = 'Registrado em %s';
mf10 = 'Download';
mf11 = 'Upload';
mf12 = 'Velocidade';
mf15 = 'Aplicar configurações';
mf18 = 'Inserir entre o número {0.1-%s}.';
mf20 = 'Somente entre {0.1-%s}.';
mf26 = 'Registrado manualmente em %s';
mf32 = 'ou';
mf44 = 'Os resultados do teste automático de velocidade podem não ser 100% precisos devido ao tráfego da Internet ou a outras condições. Para comparar resultados, visite um site de teste de velocidade ou contate seu Provedor de serviços de Internet para confirmar suas velocidades na Internet. Se os resultados de velocidade forem inconsistentes, você poderá inserir os valores manualmente.';
media_dlna18 = 'Sem título';
media_dlna21 = 'Você tem mais mídia do que seu roteador pode indexar. Por isso, estamos servindo os primeiros 12.000 itens.';
errSubnetMaskInvalid_2 = 'A máscara de sub-rede não se parece com uma máscara de sub-rede. Verifique o valor.';

