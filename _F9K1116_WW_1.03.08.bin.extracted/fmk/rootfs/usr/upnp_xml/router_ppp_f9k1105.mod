<?xml version="1.0"?>
<root xmlns="urn:schemas-upnp-org:device-1-0">
	<specVersion>
		<major>1</major>
		<minor>0</minor>
	</specVersion>
	<URLBase>http://@IPADDR#:@UPNP_PORT#</URLBase>
	<device>
	<deviceType>urn:schemas-upnp-org:device:InternetGatewayDevice:1</deviceType>
	<friendlyName>Belkin N450DB Wireless Router</friendlyName>
	<manufacturer>Belkin International</manufacturer>
	<manufacturerURL>http://www.Belkin.com</manufacturerURL>
	<modelDescription>Wireless Router with Ethernet Switch</modelDescription>
	<modelName>Belkin N450DB Wireless Router</modelName>
	<modelNumber>@HW_ID#</modelNumber>
	<modelURL>http://www.Belkin.com</modelURL>
	<serialNumber>@SN#</serialNumber>
	<UDN>uuid:@UUID_IGD#</UDN>
	<UPC>00000-00001</UPC>
		<serviceList>
			<service>
				<serviceType>urn:schemas-upnp-org:service:Layer3Forwarding:1</serviceType>
				<serviceId>urn:upnp-org:serviceId:L3Forwarding1</serviceId>
				<controlURL>/upnp/control/L3Forwarding1</controlURL>
				<eventSubURL>/upnp/event/L3Forwarding1</eventSubURL>
				<SCPDURL>/l3frwd.xml</SCPDURL>
			</service>
		</serviceList>
		<deviceList>
			<device>
				<deviceType>urn:schemas-upnp-org:device:WANDevice:1</deviceType>
				<friendlyName>Belkin N450DB Wireless Router</friendlyName>
				<manufacturer>Belkin International</manufacturer>
				<manufacturerURL>http://www.Belkin.com</manufacturerURL>
				<modelDescription>Wireless Router with Ethernet Switch</modelDescription>
				<modelName>Belkin N450DB Wireless Router</modelName>
				<modelNumber>@HW_ID#</modelNumber>
				<modelURL>http://www.Belkin.com/</modelURL>
				<serialNumber>@SN#</serialNumber>
				<UDN>uuid:@UUID_WAND#</UDN>
				<UPC>00000-00001</UPC>
				<serviceList>
					<service>
						<serviceType>urn:schemas-upnp-org:service:WANCommonInterfaceConfig:1</serviceType>
						<serviceId>urn:upnp-org:serviceId:WANCommonIFC1</serviceId>
						<controlURL>/upnp/control/WANCommonIFC1</controlURL>
						<eventSubURL>/upnp/event/WANCommonIFC1</eventSubURL>
						<SCPDURL>/cmnicfg.xml</SCPDURL>
					</service>
				</serviceList>
				<deviceList>
					<device>
						<deviceType>urn:schemas-upnp-org:device:WANConnectionDevice:1</deviceType>
						<friendlyName>Belkin N450DB Wireless Router</friendlyName>
						<manufacturer>Belkin International</manufacturer>
						<manufacturerURL>http://www.Belkin.com</manufacturerURL>
						<modelDescription>Wireless Router with Ethernet Switch</modelDescription>
						<modelName>Belkin N450DB Wireless Router</modelName>
						<modelNumber>@HW_ID#</modelNumber>
						<modelURL>http://www.Belkin.com/</modelURL>
						<serialNumber>@SN#</serialNumber>
						<UDN>uuid:@UUID_WANCD#</UDN>
						<UPC>00000-00001</UPC>
						<serviceList>
							<service>
								<serviceType>urn:schemas-upnp-org:service:WANEthernetLinkConfig:1</serviceType>
								<serviceId>urn:upnp-org:serviceId:WANEthLinkC1</serviceId>
								<controlURL>/upnp/control/WANEthLinkC1</controlURL>
								<eventSubURL>/upnp/event/WANEthLinkC1</eventSubURL>
								<SCPDURL>/wanelcfg.xml</SCPDURL>
							</service>
							<service>
								<serviceType>urn:schemas-upnp-org:service:WANPPPConnection:1</serviceType>
								<serviceId>urn:upnp-org:serviceId:WANPPPConn1</serviceId>
								<controlURL>/upnp/control/WANPPPConn1</controlURL>
								<eventSubURL>/upnp/event/WANPPPConn1</eventSubURL>
								<SCPDURL>/pppcfg.xml</SCPDURL>
							</service>
						</serviceList>
					</device>
				</deviceList>
			</device>
			<device>
				<deviceType>urn:schemas-upnp-org:device:LANDevice:1</deviceType>
				<friendlyName>Belkin N450DB Wireless Router</friendlyName>
				<manufacturer>Belkin International</manufacturer>
				<manufacturerURL>http://www.Belkin.com</manufacturerURL>
				<modelDescription>Wireless Router with Ethernet Switch</modelDescription>
				<modelName>Belkin N450DB Wireless Router</modelName>
				<modelNumber>@HW_ID#</modelNumber>
				<modelURL>http://www.Belkin.com</modelURL>
				<serialNumber>@SN#</serialNumber>
				<UDN>uuid:@UUID_LAND#</UDN>
				<UPC>00000-00001</UPC>
				<serviceList>
					<service>
						<serviceType>urn:schemas-upnp-org:service:LANHostConfigManagement:1</serviceType>
						<serviceId>urn:upnp-org:serviceId:LANHostCfg1</serviceId>
						<controlURL>/upnp/control/LANHostCfg1</controlURL>
						<eventSubURL>/upnp/event/LANHostCfg1</eventSubURL>
						<SCPDURL>/lanhostc.xml</SCPDURL>
					</service>
				</serviceList>
			</device>
		</deviceList>
        <presentationURL>http://@IPADDR#</presentationURL>
	</device>
</root>
