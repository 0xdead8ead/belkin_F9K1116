var db_toggle_band_5G = false;
var db_LockStatus = "0";
var Current_Page="";
var Troubleshooting_Show=false;
var Internet_Status="";		//"0"--wan link down  "1"--internet down   "2"--internet ok
var min_wait_time=6;   //minimum wait time for all variable process screens (200, 202x, 211, 221, 701, 711, 300, 340, 342, 900, 901, 902, 801, 802, 803)

var crossdomain_url="http://192.168.2.1/BelkinAPI/JsonpCrossDomain?jsoncallback=?";
var crossdomain_url_ap ="";
var watch_url="BelkinAPI/APIVersion";
var BelkinAPIVersion=1;
var IsClientWireless;
var Flush_Page="";	//0: dashboard.htm  1: page 804  2: current page	 3: New lan ip+ current page
var Reboot_Flag="";
var SSID_Changed="";
var Default_SSID="";
var Default_Psk="";

var old_pass_24, old_pass_5, old_secmode_24, old_secmode_5;
var new_pass_24, new_pass_5, new_secmode_24, new_secmode_5;

var Reboot_time = 60;  // only reboot: 60s ; firmware upgrade: 200s
var No_reboot_time = 30;

var New_LanIP_URL="";
var New_LanIP_Last_URL="";
var Lan_IP_Changed="";
var New_Lan_IP="";

var SSID_24="";
var PSK_24="";
var CrossDateSend=false;
function crossdomain(URL)
{
	if(CrossDateSend==false)
	{
		$.getJSON(URL, {}, function(data) {
			CrossDateSend=true;
			if(Current_Page =="ut_facty.html" || (Current_Page =="ut_save_restore.html" && Flush_Page == '1') )
				Apply_Callback("p804", -1, data);
			else if(Current_Page =="wls_apt.html")
			{	
				if(IsClientWireless=="0")  //wired
					Apply_Callback("801", -1, data);
				else    //wireless
				{
					if( SSID_Changed == '0' ) 
						Apply_Callback("802", 60, data);
					else
						Apply_Callback("803", 60, data);
				}
			}
		});
		//alert("crossdomain(URL) : URL="+URL);
		setTimeout(function(){crossdomain(URL);}, 5*1000);
	}
}

function Service_Card_Info()
{
	$.getJSON("BelkinAPI/GetServiceCardInfo", { RequestID: Math.floor(Math.random() * 10000) }, function(data) {
		$("[tid='gt24SSID']").text(data.Ssid2G);
		$("[tid='gt24PSK']").text(data.Password2G);
		if(data.Security2G == "Off")
			$("[tid='gt24Sec']").text(translate("375"));
		else if(data.Security2G == "WEP")
			$("[tid='gt24Sec']").text(translate("1829"));
		else if(data.Security2G == "WPA/WPA2-Personal(PSK)")
			$("[tid='gt24Sec']").text(translate("1296"));
		
		$("[tid='gt50SSID']").text(data.Ssid5G);
		$("[tid='gt50PSK']").text(data.Password5G);
		if(data.Security5G == "Off")
			$("[tid='gt50Sec']").text(translate("375"));
		else if(data.Security5G == "WEP")
			$("[tid='gt50Sec']").text(translate("1829"));
		else if(data.Security5G == "WPA/WPA2-Personal(PSK)")
			$("[tid='gt50Sec']").text(translate("1296"));
		
		$("[tid='gtGuestSSID']").text(data.SsidGuest);
		$("[tid='gtGuestPSK']").text(data.PasswordGuest);
		if(data.SecurityGuest == "Cafe_style")
			$("[tid='gtGuestSec']").text(translate("1832"));
		else if(data.SecurityGuest == "WPA/WPA2 PSK")
			$("[tid='gtGuestSec']").text(translate("1619"));
		else if(data.SecurityGuest == "WEP")
			$("[tid='gtGuestSec']").text(translate("1829"));
		else
			$("[tid='gtGuestSec']").text(translate("1830"));
	})
   .error(function(){
		//console.log("http timeout for BelkinAPI/Service_Card_Info !!!");
	});
}

function DB_Head_Internet_Status()
{
	$.getJSON("BelkinAPI/DBWANStatus", { RequestID: Math.floor(Math.random() * 10000) }, function(data) {
		if(data.Status=="constWANLinkDown")
		{
			$('#dhWANSTATUS').removeClass().addClass("status offline hide-on-phones inline-block");
			$('#dhWANSTATUS_Phones').removeClass().addClass("status offline show-on-phones");
			$("[tid='WanStatusline']").text(translate("gtDisconnected"));
			$("[tid='dft003']").html(translate("dft001"));
			$("[tid='dft004']").html(translate("dft002"));
			$('#dfBelkinHelp').hide();
			if(Current_Page=="000-Dashboard.htm")
			{
				if(Internet_Status!="0")
				{
					$('#p1010').show();
					$('#p1020').hide();
					Internet_Status="0";
					Troubleshooting_Show=true;
					DB_Router_Details();
					DB_Container_Stats();
				}
				$('#dff014').removeClass().addClass("inline nice");
				$('#dff015').removeClass().addClass("inline");
				$('#gtSelectLang').show();
				$('#dff014').show();
				$('#dff015').show();
			}
		}
		else if(data.Status=="constWANNotConnected")
		{
			$('#dhWANSTATUS').removeClass().addClass("status offline2 hide-on-phones inline-block");
			$('#dhWANSTATUS_Phones').removeClass().addClass("status offline2 show-on-phones");
			$("[tid='WanStatusline']").text(translate("gtOffline"));
			$("[tid='dft003']").html(translate("dft001"));
			$("[tid='dft004']").html(translate("dft002"));
			$('#dfBelkinHelp').hide();
			if(Current_Page=="000-Dashboard.htm")
			{
				if(Internet_Status!="1")
				{
					$('#p1020').show();
					$('#p1010').hide();
					Internet_Status="1";
					Troubleshooting_Show=true;
					DB_Router_Details();
					DB_Container_Stats();
				}
				$('#dff014').removeClass().addClass("inline nice");
				$('#dff015').removeClass().addClass("inline");
				$('#gtSelectLang').show();
				$('#dff014').show();
				$('#dff015').show();
			}
		}
		else if(data.Status=="constWANConnected")
		{
			$('#dhWANSTATUS').removeClass().addClass("status online hide-on-phones inline-block");
			$('#dhWANSTATUS_Phones').removeClass().addClass("status online show-on-phones");
			$("[tid='WanStatusline']").text(translate("gtOnline"));
			$("[tid='dft003']").html(translate("dft003"));
			$("[tid='dft004']").html(translate("dft004"));
			$('#dfBelkinHelp').show();
			//$("[tid='dft005']").html(translate("dft005"));
			if(Current_Page=="000-Dashboard.htm")
			{
				if(Internet_Status!="2")
				{
					$('#p1010').hide();
					$('#p1020').hide();
					Internet_Status="2";
					Troubleshooting_Show=false;
					DB_Router_Details();
					DB_Container_Stats();
				}
				$('#dff014').removeClass().addClass("inline nice");
				$('#dff015').removeClass().addClass("inline");
				$('#gtSelectLang').show();
				$('#dff014').show();
				$.getJSON("BelkinAPI/GetLanguage",{ RequestID: Math.floor(Math.random() * 10000) }, function(options) {
					var lang = options.language;
					var index = GetIndexByLanguage(lang);
					$('#dff015').get(0).selectedIndex = index;
				});
				$('#dff015').show();
			}
		}
    })
    .error(function(){
		//console.log("http timeout for BelkinAPI/DBWANStatus !!!");
	});
	setTimeout("DB_Head_Internet_Status()", 5000);
}

function DB_Head_Wifi_Setting()
{
	$.getJSON("BelkinAPI/DBRouterDetails", { RequestID: Math.floor(Math.random() * 10000) }, function(data) {
		if(db_toggle_band_5G==true)
		{
			$("[tid='dhSSID24']").text(data.Ssid5G);
			if(db_LockStatus=="1" && data.Password5G!="")
				$("[tid='dhPasswordObscured24']").html(data.Password5G.charAt(0)+"&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;");
			else
				$("[tid='dhPasswordObscured24']").text(data.Password5G);
				
			//$("#dhToggleBand").text(translate("dhToggleBand2G"));
		}
		else
		{
			$("[tid='dhSSID24']").text(data.Ssid2G);
			if(db_LockStatus=="1" && data.Password2G!="")
				$("[tid='dhPasswordObscured24']").html(data.Password2G.charAt(0)+"&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;");
			else
				$("[tid='dhPasswordObscured24']").text(data.Password2G);
				
			//$("#dhToggleBand").text(translate("dhToggleBand"));
		}
	});
}

// 0 :unlocked without password    1 :locked		2 :unlocked with password
function DB_Head_Lock_Status()
{
	$.getJSON("BelkinAPI/DBLockStatusGet", { RequestID: Math.floor(Math.random() * 10000) }, function(data) {
		if(data.LockStatus=="1")
		{
			$('#dhLockToggle2').removeClass().addClass("hide-on-phones settings locked");
			$('#dhLockToggle2').text(translate("gtLocked"));
			$('#dhLockToggle_phone').removeClass().addClass("admin");
			//$('#dhLockToggle_phone').text(translate("gtLocked"));
			DB_Router_Details();
			DB_Head_Wifi_Setting();
		}
		else
		{
			if(data.LockStatus=="2")
				setTimeout("DB_Head_Lock_Status()", 5000);
			$('#dhLockToggle2').removeClass().addClass("hide-on-phones settings unlocked");
			$('#dhLockToggle2').text(translate("gtUnlocked"));
			$('#dhLockToggle_phone').removeClass().addClass("admin unlocked");
			//$('#dhLockToggle_phone').text(translate("gtUnlocked"));
		}
		
		db_LockStatus = data.LockStatus;
	});
}

function DB_Head_Click_Event()
{
	$("#dhSSID").click(function(e) {
		e.preventDefault();
		location.href ="wls_chan.html";
	});
	$("#dhPrint").click(function(e) {
		e.preventDefault();
		if(db_LockStatus=="1")
		{
			$('#passwordChallenge').reveal({
				animation: 'fade',
				animationspeed: 100
			});
			$('#p1210Password').val("");
			$('#p1210Password').focus();
		}
		else
			//window.print();
			location.href="javascript:printContent('serviceCard')";
	});
	$("#dhChangeSSID").click(function(e) {
		e.preventDefault();
		location.href ="wls_chan.html";
	});
	/*$("#dhToggleBand").click(function(e) {
		e.preventDefault();
		
		if(db_toggle_band_5G==true)
			db_toggle_band_5G = false;
		else
			db_toggle_band_5G = true;
			
		DB_Head_Wifi_Setting();
	});*/
	$("#dhToggle24").click(function(e) {
		e.preventDefault();
		
		db_toggle_band_5G = false;
		DB_Head_Wifi_Setting();
	});
	$("#dhToggle5").click(function(e) {
		e.preventDefault();
		
		db_toggle_band_5G = true;
		DB_Head_Wifi_Setting();
	});
	
	/*$("#dhBelkin").click(function(e) {
		e.preventDefault();
		location.href ="http://www.belkin.com";
	});*/
	$("#dhLockToggle2").click(function(e) {
		e.preventDefault();
		strURL=window.location.href;
		arrURL=strURL.split("/");
		page=arrURL[arrURL.length-1];
		if(db_LockStatus=="0")
		{
			$('#p1201').reveal({
				animation: 'fade',
				animationspeed: 100
			});
			$('#p1201Password').focus();
		}
		else if(db_LockStatus=="1")
		{
			$('#passwordChallenge').reveal({
				animation: 'fade',
				animationspeed: 100
			});
			$('#p1210Password').val("");
			$('#p1210Password').focus();
		}
		else if(db_LockStatus=="2")
		{
			var obj = new sdc_set_table();
			obj.set_field("RequestID", Math.floor(Math.random() * 10000));
			obj.set_field("LockStatus", "1");
			$.post("BelkinAPI/DBLockStatusSet", obj.row, function(data) {
				if(page!="" && page.substr(0,17)!="000-Dashboard.htm")
				{
					location.href="000-Dashboard.htm";
				}
				$('#dhLockToggle2').removeClass().addClass("hide-on-phones settings locked");
				$('#dhLockToggle2').text(translate("gtLocked"));
				db_LockStatus="1";
				DB_Router_Details();
				DB_Head_Wifi_Setting();
			}, "json")
			.error(function(){
				//console.log("http timeout for BelkinAPI/DBLockStatusSet");
			});
		}
	});
	$("#dhLockToggle_phone").click(function(e) {
		e.preventDefault();
		strURL=window.location.href;
		arrURL=strURL.split("/");
		page=arrURL[arrURL.length-1];
		if(db_LockStatus=="0")
		{
			$('#p1201').reveal({
				animation: 'fade',
				animationspeed: 100
			});
			$('#p1201Password').focus();
		}
		else if(db_LockStatus=="1")
		{
			$('#passwordChallenge').reveal({
				animation: 'fade',
				animationspeed: 100
			});
			$('#p1210Password').val("");
			$('#p1210Password').focus();
		}
		else if(db_LockStatus=="2")
		{
			var obj = new sdc_set_table();
			obj.set_field("RequestID", Math.floor(Math.random() * 10000));
			obj.set_field("LockStatus", "1");
			$.post("BelkinAPI/DBLockStatusSet", obj.row, function(data) {
				if(page!="" && page.substr(0,17)!="000-Dashboard.htm")
				{
					location.href="000-Dashboard.htm";
				}
				$('#dhLockToggle_phone').removeClass().addClass("admin");
				//$('#dhLockToggle_phone').text(translate("gtLocked"));
				db_LockStatus="1";
				DB_Router_Details();
				DB_Head_Wifi_Setting();
			}, "json")
			.error(function(){
				//console.log("http timeout for BelkinAPI/DBLockStatusSet");
			});
		}
	});
	$("#p1201a004").click(function(e) {
		e.preventDefault();
		strURL=window.location.href;
		arrURL=strURL.split("/");
		page=arrURL[arrURL.length-1];
		var obj = new sdc_set_table();
		var passwd;
		obj.set_field("RequestID", Math.floor(Math.random() * 10000));
		passwd=$('#p1201Password').val();
		
		if(!passwd.length)
		{
			$('#p1201t003').css({'display':''});
			$('#p1201t003').fadeTo(200, 1);
			
			$('#p1201Password').focus();
			return false;
		}
		if(passwd.length<1 || passwd.length>63 )
		{
			$('#p1200a006').text(usys85_1);
			$('#p1200a006').css({'display':''});
			$('#p1200a006').fadeTo(200, 1);
			
			$('#p1201Password').focus();
			return false;
		}
		obj.set_field("PassWd", passwd);
		$.post("BelkinAPI/DBPasswordSet", obj.row, function(data) {
			setTimeout(function(){
				$('#p1201').trigger('reveal:close');
				if(page!="" && page.substr(0,17)!="000-Dashboard.htm")
				{
					location.href="000-Dashboard.htm";
				}
				$('#dhLockToggle2').removeClass().addClass("hide-on-phones settings locked");
				$('#dhLockToggle2').text(translate("gtLocked"));
				$('#dhLockToggle_phone').removeClass().addClass("admin");
				//$('#dhLockToggle_phone').text(translate("gtLocked"));
				db_LockStatus="1";
				DB_Router_Details();
				DB_Head_Wifi_Setting();
				DB_Container_Stats();
			}, data.CheckAgain*1000);
		}, "json")
		.error(function(){
			//console.log("http timeout for BelkinAPI/DBPasswordSet");
		});
	});
	$("#p1201a005").click(function(e) {
		e.preventDefault();
		//location.href ="000-Dashboard.htm";
		location.href = Current_Page;
	});
	$("#p1210a005").click(function(e) {
		e.preventDefault();
		var obj = new sdc_set_table();
		var passwd;
		obj.set_field("RequestID", Math.floor(Math.random() * 10000));
		passwd=base64encode($('#p1210Password').val());
		obj.set_field("PassWd", passwd);
		$.post("BelkinAPI/DBLogin", obj.row, function(data) {
			if(data.Login_Success=="0")			// password challenge failed
			{
				$("[tid='errorpwdError']").show();
			}
			else if(data.Login_Success=="1")		// 	password challenge success
			{
				var obj = new sdc_set_table();
				obj.set_field("RequestID", Math.floor(Math.random() * 10000));
				obj.set_field("LockStatus", "2");
				$.post("BelkinAPI/DBLockStatusSet", obj.row, function(data) {
					$('#passwordChallenge').trigger('reveal:close');
					$('#dhLockToggle2').removeClass().addClass("hide-on-phones settings unlocked");
					$('#dhLockToggle2').text(translate("gtUnlocked"));
					$('#dhLockToggle_phone').removeClass().addClass("admin unlocked");
					//$('#dhLockToggle_phone').text(translate("gtUnlocked"));
					db_LockStatus="2";
					DB_Router_Details();
					DB_Head_Wifi_Setting();
					DB_Head_Lock_Status();
				}, "json")
				.error(function(){
					//console.log("http timeout for BelkinAPI/DBLockStatusSet");
				});
				
				//if(data.Auto_Upgrade=="1")	
				//	window.open('chk_wait.html',"Firmware","toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,width=395,height=200,resizable=0");
			}
			else if(data.Login_Success=="2")		// duplicat login
			{
				location.href ="duplicat.html";
			}
		}, "json")
		.error(function(){
			//console.log("http timeout for BelkinAPI/DBLogin");
		});
	});
	$("#p1210a006").click(function(e) {
		e.preventDefault();
		location.href ="000-Dashboard.htm";
	});
}

function DB_Common_Click_Event()
{
	$("#Support4TryAgain").click(function() {
		
		$('#Support4').trigger('reveal:close');	
		$('#p802').reveal({
			animation: 'fade',                  
			animationspeed: 100             
		});
		$.router_watch(watch_url, 60, "802", { RequestID: Math.floor(Math.random() * 10000) }, Apply_Callback, 1, min_wait_time);
	});
	
	$("#Support5t013").click(function() {
		
		$('#Support5').trigger('reveal:close');	
		$('#p803').reveal({
			animation: 'fade',                  
			animationspeed: 100
		});
		$.router_watch(watch_url, 60, "803", { RequestID: Math.floor(Math.random() * 10000) }, Apply_Callback, 1, min_wait_time);
	});
	$("#p1201Password").keydown(function(e) {
		$('#p1201t003').css({'display':'none'});
		var curKey = e.which;
		if(curKey == 13)
		{
			$("#p1201a004").click();
			return false;
		}
	});
	$("#p1210Password").keydown(function(e) {
		var curKey = e.which;
		if(curKey == 13)
		{
			$("#p1210a005").click();
			return false;
		}
	});
}

function DB_Head()
{
	DB_Head_Internet_Status();
	DB_Head_Wifi_Setting();
	DB_Head_Lock_Status();
	DB_Head_Click_Event();
	DB_Common_Click_Event();
	Service_Card_Info();
}

function DB_Container_Stats()
{
	var time_zone_offset;
	$('#p1100').hide();
	$('#pStats').hide();
	$('#p1300').hide();
	$('#po1200').hide();
	$('#p1500').hide();
	$('#p1400').removeClass().hide();
	$('#dhSuccessFW').hide();
	//$('#p1333').hide();
	$('#dhWifiSettings').hide();
	$('#pNoTime').hide();
	$('#PIC_blocked').hide();
	
	if(Troubleshooting_Show==true)
	{
		return false;
	}
	$.getJSON("BelkinAPI/DBContainerStatsGet", { RequestID: Math.floor(Math.random() * 10000) }, function(data) {
		if(data.WAN_Connected=="0" || data.QoS_Configured=="0")
			$('#pStats').hide();
		else
		{	
			$('#pStats').show();
			if(data.client_number>3)
				$('#client_link').show();
			else
				$('#client_link').hide();

			$("[tid='gtDownloadSpeed']").next().html(data.DownLoad_Speed+' <small tid="gtMbitPerSec">Mb/s</small>');
			$("[tid='gtUploadSpeed']").next().html(data.UpLoad_Speed+' <small tid="gtMbitPerSec">Mb/s</small>');

            if(data.QoS_Last_Check_day.indexOf("-") > 0)
            {
                if(parseInt(data.QoS_Last_Check_hour,10) <= 12)
                    $("[tid='gtSpeedTestResults']").text(translate("p1310t003") + ": " + data.QoS_Last_Check_day + " at " + data.QoS_Last_Check_hour + ":" + data.QoS_Last_Check_min + "am");
                else
                    $("[tid='gtSpeedTestResults']").text(translate("p1310t003") + ": " + data.QoS_Last_Check_day + " at " + (parseInt(data.QoS_Last_Check_hour,10)-12).toString() + ":" + data.QoS_Last_Check_min + "pm");
            }
            else
            {
                if(parseInt(data.QoS_Last_Check_hour,10) <= 12)
                {
                    if(parseInt(data.QoS_Last_Check_day,10) > 1)
                        $("[tid='gtSpeedTestResults']").text(translate("p1310t003") + ": " + data.QoS_Last_Check_day + " days ago at " + data.QoS_Last_Check_hour + ":" + data.QoS_Last_Check_min + "am");
                    else
                        $("[tid='gtSpeedTestResults']").text(translate("p1310t003") + ": " + data.QoS_Last_Check_day + " day ago at " + data.QoS_Last_Check_hour + ":" + data.QoS_Last_Check_min + "am");
                }
                else
                {
                    if(parseInt(data.QoS_Last_Check_day,10) > 1)
                        $("[tid='gtSpeedTestResults']").text(translate("p1310t003") + ": " + data.QoS_Last_Check_day + " days ago at " + (parseInt(data.QoS_Last_Check_hour,10)-12).toString() + ":" + data.QoS_Last_Check_min + "pm");
                    else
                       $("[tid='gtSpeedTestResults']").text(translate("p1310t003") + ": " + data.QoS_Last_Check_day + " day ago at " + (parseInt(data.QoS_Last_Check_hour,10)-12).toString() + ":" + data.QoS_Last_Check_min + "pm");
                }
            }
		}

		if(data.DashBoardMessageType=="11" || data.DashBoardMessageType=="01")
		{
			var obj_tmp = new sdc_set_table();
			$('#dhSuccessFW').show();
			//$('#p1333').show();
			obj_tmp.set_field("RequestID", Math.floor(Math.random() * 10000));
			obj_tmp.set_field("UpgradeMessageHide", "0");
			$.post("BelkinAPI/UpgradeMessageHideSet", obj_tmp.row, function(data) {		
				//console.log("Post UpgradeMessageHideSet API ok!");
			}, "json")
			.error(function(){
				//console.log("http timeout for BelkinAPI/UpgradeMessageHideSet");
			});
		}
		
		if(data.BlockedDevicemessage=="1")
		{
			$('#PIC_blocked').show();
			return;
		}
		else
			$('#PIC_blocked').hide();
			
		if(data.NoTimeMessageHide=="0")
		{
			$('#pNoTime').show();
			return;
		}
		else
			$('#pNoTime').hide();	
			
		if(data.FWAvailable==1)
		{
			$('#p1100').show();
			return;
		}
		else
			$('#p1100').hide();
		jstz.determine_timezone();
		time_zone_offset="GMT"+jstz.TimeZone.prototype.offset()+":"+jstz.TimeZone.prototype.belkin_id();
		if(data.TimeZoneMessageHide!="1" && data.RouterTimeZone!=time_zone_offset)
		{
			$('#p1500').show();
			//var p1500t002_val = translate("p1500t002");
			var user_tz = jstz.TimeZone.prototype.name()+" "+time_zone_offset;
			//p1500t002_val = p1500t002_val.replace(/{TZ}/i, user_tz);
			//$("[tid='p1500t002']").text(p1500t002_val);
			//$("[tid='p1500t002'] > span").text(jstz.TimeZone.prototype.name()+" "+time_zone_offset);
			$("[tid='gtCurrTimezone']").text(user_tz);
			return;
		}
		else
		{
			$('#p1500').hide();
		}
		
		if(data.WAN_Connected=="0" || data.QoS_Configured=="0")
		{
			//$('#pStats').hide();
			if(data.QosMessageHide!="1")
			{
				$('#p1300').show();
				return;
			}
			else
				$('#p1300').hide();
		}
		else
		{
			//$('#pStats').show();
			$('#p1300').hide();
		}
		if(db_LockStatus=="0" && data.PasswordMessageHide!="1")
		{
			$('#po1200').show();
			return;
		}
		else
			$('#po1200').hide();

		if( $('#linkLAN2').is(":hidden")== false)   //current client is PC, not phones
		{
			if(data.USBClientConnected=="0" && data.USBMessageHide!="1")
			{
				$('#p1400').addClass("container offer hide-on-phones").show();
				return;
			}
			else
				$('#p1400').removeClass().hide();
		}
/*		if(data.DashBoardMessageType=="11" || data.DashBoardMessageType=="01")
		{
			var obj_tmp = new sdc_set_table();
			$('#dhSuccessFW').show();
			//$('#p1333').show();
			obj_tmp.set_field("RequestID", Math.floor(Math.random() * 10000));
			obj_tmp.set_field("UpgradeMessageHide", "0");
			$.post("BelkinAPI/UpgradeMessageHideSet", obj_tmp.row, function(data) {		
				//console.log("Post UpgradeMessageHideSet API ok!");
			}, "json")
			.error(function(){
				//console.log("http timeout for BelkinAPI/UpgradeMessageHideSet");
			});
		}
		else */if(data.DashBoardMessageType=="10")
		{
			var obj_tmp = new sdc_set_table();
			$('#dhWifiSettings').show();
			obj_tmp.set_field("RequestID", Math.floor(Math.random() * 10000));
			obj_tmp.set_field("WIFIMessageHide", "1");
			$.post("BelkinAPI/WIFIMessageHideSet", obj_tmp.row, function(data) {		
				//console.log("Post UpgradeMessageHideSet API ok!");
			}, "json")
			.error(function(){
				//console.log("http timeout for BelkinAPI/UpgradeMessageHideSet");
			});
		}
		
		if(data.DashBoardMessageType=="1" || data.DashBoardMessageType=="2")
		{
		    var obj_tmp = new sdc_set_table();
			obj_tmp.set_field("RequestID", Math.floor(Math.random() * 10000));
			obj_tmp.set_field("UpgradeMessageHide", "0");
			$.post("BelkinAPI/UpgradeMessageHideSet", obj_tmp.row, function(data) {		
				//console.log("Post UpgradeMessageHideSet API ok!");
			}, "json")
			.error(function(){
				//console.log("http timeout for BelkinAPI/UpgradeMessageHideSet");
			});
		}
	});
}

function DB_Container_Event()
{
	$("#PIC_blocked_link").click(function(e) {
		e.preventDefault();
		var obj = new sdc_set_table();
		obj.set_field("RequestID", Math.floor(Math.random() * 10000));
		obj.set_field("BlockedDevicemessage", "0");
		$.post("BelkinAPI/BlockDevMsgSet", obj.row, function(data) {
			//to double check, need return to current page
			location.href ="parent_control.html";
		}, "json")
		.error(function(){
			//console.log("http timeout for BelkinAPI/BlockDevMsgSet");
		});
	});
	
	$("#p1300a004").click(function(e) {
		e.preventDefault();
		var obj = new sdc_set_table();
		obj.set_field("RequestID", Math.floor(Math.random() * 10000));
		obj.set_field("QosMessageHide", "1");
		$.post("BelkinAPI/QosMessageHideSet", obj.row, function(data) {
//to double check, need return to current page
			location.href ="000-Dashboard.htm";
		}, "json")
		.error(function(){
			//console.log("http timeout for BelkinAPI/QosMessageHideSet");
		});
	});
	
	$("#po1200a003").click(function(e) {
		e.preventDefault();
		$('#p1201').reveal({
			animation: 'fade',
			animationspeed: 100
		});
		$('#p1201Password').focus();
	});
	
	$("#po1200a004").click(function(e) {
		e.preventDefault();
		var obj = new sdc_set_table();
		obj.set_field("RequestID", Math.floor(Math.random() * 10000));
		obj.set_field("PasswordMessageHide", "1");
		$.post("BelkinAPI/PasswordMessageHideSet", obj.row, function(data) {
			location.href ="000-Dashboard.htm";
		}, "json")
		.error(function(){
			//console.log("http timeout for BelkinAPI/QosMessageHideSet");
		});
	});
	
	$("#p1500a003").click(function(e) {
		e.preventDefault();
		var obj = new sdc_set_table();
	
		jstz.determine_timezone();

		obj.set_field("RequestID", Math.floor(Math.random() * 10000));
		obj.set_field("Commit", true);
		obj.set_field("Timezone_Name", jstz.TimeZone.prototype.name());
		obj.set_field("DaylightSaving", jstz.TimeZone.prototype.dst());
		obj.set_field("Timezone_Offset", jstz.TimeZone.prototype.offset());
		obj.set_field("Timezone_BelkinID", jstz.TimeZone.prototype.belkin_id());
		$.post("BelkinAPI/SetTimeZone", obj.row, function(data) {		
			//console.log("Post SetTimeZone API ok!");
			var obj_tmp = new sdc_set_table();
			obj_tmp.set_field("RequestID", Math.floor(Math.random() * 10000));
			obj_tmp.set_field("TimeZoneMessageHide", "1");
			$.post("BelkinAPI/TimeZoneMessageHideSet", obj_tmp.row, function(data) {		
				//console.log("Post TimeZoneMessageHideSet API ok!");
				DB_Container_Stats();
			}, "json")
			.error(function(){
				//console.log("http timeout for BelkinAPI/TimeZoneMessageHide");
			});
		}, "json")
		.error(function(){
			//console.log("http timeout for BelkinAPI/SetTimeZone");
		});
	});
	
	$("#p1500a004").click(function(e) {
		e.preventDefault();
		location.href ="ut_sys.html";
	});
	
	$("#p1400a003").click(function(e) {
		e.preventDefault();
		location.href ="ut_opt_software.html";
	});
	
	$("#p1400a004").click(function(e) {
		e.preventDefault();
		var obj = new sdc_set_table();
		obj.set_field("RequestID", Math.floor(Math.random() * 10000));
		obj.set_field("USBMessageHide", "1");
		$.post("BelkinAPI/USBMessageHideSet", obj.row, function(data) {
			location.href ="000-Dashboard.htm";
		}, "json")
		.error(function(){
			//console.log("http timeout for BelkinAPI/USBMessageHideSet");
		});
	});

	$("#p1100a003").click(function(e) {
		e.preventDefault();
		var obj = new sdc_set_table();
		obj.set_field("RequestID", Math.floor(Math.random() * 10000));
		obj.set_field("ClickFromDashboard", "1");
		$.post("BelkinAPI/SetArriveFromDash", obj.row, function(data) {
			location.href ="ut_firew.html";
		}, "json")
		.error(function(){
			//console.log("http timeout for BelkinAPI/SetArriveFromDash");
		});
	});
	
	$("#update_link").live("click",function(e) {
		e.preventDefault();
		var obj = new sdc_set_table();
		obj.set_field("RequestID", Math.floor(Math.random() * 10000));
		obj.set_field("ClickFromDashboard", "1");
		$.post("BelkinAPI/SetArriveFromDash", obj.row, function(data) {
			location.href ="ut_firew.html";
		}, "json")
		.error(function(){
			//console.log("http timeout for BelkinAPI/SetArriveFromDash");
		});
	});
}

function DB_Router_Details()
{
	if(Current_Page!="000-Dashboard.htm")
		return false;
	// do translation for dashboard page
	//Login window
	$("[tid='p1210t003']").text(translate("errorpwdEmpty"));
//	$("[tid='p1210t004']").text(translate("errorpwdError"));

	// Connection Details
	$("[tid='gtConnectionDet'] span:first").text(translate("p1310t001"));
	$("[tid='gtRetest']").text(translate("p1310t002"));	
	$("[tid='gtDownloadSpeed']").text(translate("p1310t004"));
	$("[tid='gtUploadSpeed']").text(translate("p1310t005"));
	$("[tid='gtMbitPerSec']").text(translate("p334t004"));

	$("[tid='gtConnDevices']").text(translate("p1000t001"));
	$("[tid='pStatst004']").text(translate("p1000t002"));

	// Router Details
	$("[tid='gtInternetSettings']").text(translate("333"));
	$("[tid='gtConnType']").text(translate("335"));
	$("[tid='gtWANIP']").text(translate("gtWANIP"));
	$("[tid='gtWANSubnet']").text(translate("gtWANSubnet"));
	$("[tid='gtWANGateway']").text(translate("gtWANGateway"));
	$("[tid='gtWANDNS']").text(translate("339"));
	$("[tid='gtWANMAC']").text(translate("334"));

	$("[tid='gtLocalNetwork']").text(translate("326"));
	$("[tid='gtLANIP']").text(translate("gtLANIP"));
	$("[tid='gtLANSubnet']").text(translate("gtLANSubnet"));
	$("[tid='gtDHCPServer']").text(translate("332"));
	$("[tid='gtLANMAC']").text(translate("327"));

     //offer_password.htm
	$("[tid='po1200t003']").text(translate("gtSetPassword"));

     //passwordSet.htm
	$("[tid='p1201t004']").text(translate("gtSetPassword"));    
	
	$.getJSON("BelkinAPI/DBRouterDetails", { RequestID: Math.floor(Math.random() * 10000) }, function(data) {		
		$("[tid='gtName']").parent().next().text(data.Name);
		$("[tid='gtModel']").parent().next().text(data.Model);
		if(db_LockStatus=="1" || data.FWAvailable==0)
			$("[tid='gtFirmware']").parent().parent().next().text(data.Firmware_Info);
		else
			$("[tid='gtFirmware']").parent().parent().next().html(data.Firmware_Info+" (<a href=\"#\" id=\"update_link\" tid=\"gtUpdate\">update</a>)");
			//$("[tid='gtFirmware']").parent().parent().next().html(data.Firmware_Info+" (<a href=\"300-DbCheckingFirmware.htm\" tid=\"gtUpdate\">update</a>)");
		$("[tid='gtSerial']").parent().next().text(data.SerialNo);
		$("[tid='gtBootLoader']").parent().next().text(data.BootLoaderVersion);
		if(data.IntellistreamEnable=="1")
			//$("[tid='gtIntellistream']").parent().parent().next().text(translate("374"));
			$("[tid='gtIntellistream_status']").text(translate("374"));
		else
			//$("[tid='gtIntellistream']").parent().parent().next().text(translate("375"));
			$("[tid='gtIntellistream_status']").text(translate("375"));
		$("[tid='gt24GName']").parent().parent().next().text(data.Ssid2G);
		if(db_LockStatus=="1" && data.Password2G!="")
			$("[tid='gt24GKey']").parent().parent().next().html(data.Password2G.charAt(0)+"&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;");
		else
			$("[tid='gt24GKey']").parent().parent().next().text(data.Password2G);
		$("[tid='gt5GName']").parent().parent().next().text(data.Ssid5G);
		if(db_LockStatus=="1" && data.Password5G!="")
			$("[tid='gt5GKey']").parent().parent().next().html(data.Password5G.charAt(0)+"&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;");
		else
			$("[tid='gt5GKey']").parent().parent().next().text(data.Password5G);
		if(data.Security2G=="disabled")
			$("[tid='gtSecurity']:last").parent().parent().next().text(translate("375"));
		else if(data.Security2G=="wep64" || data.Security2G=="wep128")
			$("[tid='gtSecurity']:last").parent().parent().next().text("WEP");
		else if(data.Security2G=="psk2_mixed")
			$("[tid='gtSecurity']:last").parent().parent().next().text("WPA/WPA2-Personal(PSK)");
		$("[tid='gtGuestName']").parent().parent().next().text(data.SsidGuest);
		if(db_LockStatus=="1" && data.PasswordGuest!="")
			$("[tid='gtGuestKey']").parent().parent().next().html(data.PasswordGuest.charAt(0)+"&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;");
		else
			$("[tid='gtGuestKey']").parent().parent().next().text(data.PasswordGuest);
		if(data.WPSEnale2G=="1")
			$("[tid='gtWPSShort']:last").parent().parent().next().text(translate("374"));
		else
			$("[tid='gtWPSShort']:last").parent().parent().next().text(translate("375"));
		
		if(data.WanLinkStatus=="Up")
		{
			if(data.WanMode=="Dynamic")
				$("[tid='gtConnType']").parent().parent().next().text(translate("690"));
			else if(data.WanMode=="Static")
				$("[tid='gtConnType']").parent().parent().next().text(translate("692"));
			else if(data.WanMode=="PPPoE")
				$("[tid='gtConnType']").parent().parent().next().text(translate("694"));
			else if(data.WanMode=="PPTP")
				$("[tid='gtConnType']").parent().parent().next().text(translate("696"));
			else if(data.WanMode=="Telstra Bigpond")
				$("[tid='gtConnType']").parent().parent().next().text(translate("698"));
			else 
				$("[tid='gtConnType']").parent().parent().next().text(wcc13);
						
				
			if(db_LockStatus=="1")
				$("[tid='gtWANIP']").parent().parent().next().html("&bull;&bull;&bull;&#46;&bull;&bull;&bull;&#46;&bull;&bull;&bull;&#46;&bull;&bull;&bull;");
			else
				$("[tid='gtWANIP']").parent().parent().next().text(data.WanIp);
			$("[tid='gtWANSubnet']").parent().parent().next().text(data.WanSubnet);
			if(db_LockStatus=="1")
				$("[tid='gtWANGateway']").parent().parent().next().html("&bull;&bull;&bull;&#46;&bull;&bull;&bull;&#46;&bull;&bull;&bull;&#46;&bull;&bull;&bull;");
			else
				$("[tid='gtWANGateway']").parent().parent().next().text(data.WanGateway);
			$("[tid='gtWANDNS']").parent().parent().next().html(data.WanDns);
			if(db_LockStatus=="1")
				$("[tid='gtWANMAC']").parent().parent().next().html("&bull;&bull;&#58;&bull;&bull;&#58;&bull;&bull;&#58;&bull;&bull;&#58;&bull;&bull;&#58;&bull;&bull;");
			else
				$("[tid='gtWANMAC']").parent().parent().next().text(data.WanMac);
			$("[tid='gtWANSubnet']").parent().parent().parent().show();
			$("[tid='gtWANGateway']").parent().parent().parent().show();
			$("[tid='gtWANDNS']").parent().parent().parent().show();
			$("[tid='gtWANMAC']").parent().parent().parent().show();
		}
		else
		{
			$("[tid='gtConnType']").parent().parent().next().text(data.WanMode);
			$("[tid='gtWANIP']").parent().parent().next().text(data.WanIp);
			$("[tid='gtWANSubnet']").parent().parent().parent().hide();
			$("[tid='gtWANGateway']").parent().parent().parent().hide();
			$("[tid='gtWANDNS']").parent().parent().parent().hide();
			$("[tid='gtWANMAC']").parent().parent().parent().hide();
		}
		
		$("[tid='gtLANIP']").parent().parent().next().text(data.LanIp);
		$("[tid='gtLANSubnet']").parent().parent().next().text(data.LanSubnet);
		$.getJSON("BelkinAPI/GetScanResult",{ RequestID: Math.floor(Math.random() * 10000) }, function(data2) 
		{
			if(!data2.LANNum)
				LAN_message = "--- WLAN clients, --- LAN clients";
			else
				LAN_message = data2.WLANNum+" WLAN clients, "+data2.LANNum+" LAN clients";
			if(data.DHCPServerEnable=="1")
			{
				if(db_LockStatus=="1")
					$("[tid='gtDHCPServer']").parent().parent().next().text(translate("374"));
				else if(data.LanLease=="0")
					$("[tid='gtDHCPServer']").parent().parent().next().text(translate("374")+", "+translate("382")+", "+LAN_message);
				else if(data.LanLease=="1")
					$("[tid='gtDHCPServer']").parent().parent().next().text(translate("374")+", "+translate("383")+", "+LAN_message);
				else if(data.LanLease=="2")
					$("[tid='gtDHCPServer']").parent().parent().next().text(translate("374")+", "+translate("384")+", "+LAN_message);
				else if(data.LanLease=="4")
					$("[tid='gtDHCPServer']").parent().parent().next().text(translate("374")+", "+translate("385")+", "+LAN_message);
				else if(data.LanLease=="24")
					$("[tid='gtDHCPServer']").parent().parent().next().text(translate("374")+", "+translate("386")+", "+LAN_message);
				else if(data.LanLease=="48")
					$("[tid='gtDHCPServer']").parent().parent().next().text(translate("374")+", "+translate("387")+", "+LAN_message);
				else if(data.LanLease=="96")
					$("[tid='gtDHCPServer']").parent().parent().next().text(translate("374")+", "+translate("388")+", "+LAN_message);
				else if(data.LanLease=="336")
					$("[tid='gtDHCPServer']").parent().parent().next().text(translate("374")+", "+translate("389")+", "+LAN_message);
				else if(data.LanLease=="672")
					$("[tid='gtDHCPServer']").parent().parent().next().text(translate("374")+", "+translate("390")+", "+LAN_message);
				else
					$("[tid='gtDHCPServer']").parent().parent().next().text(translate("374"));
			}
			else
				$("[tid='gtDHCPServer']").parent().parent().next().text(translate("375"));
		});
		if(db_LockStatus=="1")
			$("[tid='gtLANMAC']").parent().next().html("&bull;&bull;&#58;&bull;&bull;&#58;&bull;&bull;&#58;&bull;&bull;&#58;&bull;&bull;&#58;&bull;&bull;");
		else
			$("[tid='gtLANMAC']").parent().next().text(data.LanMac);
	});
}

function DB_Container()
{
	DB_Container_Stats();
	DB_Router_Details();
	DB_Container_Event();
}


function DB_Footer()
{
	$('#dff014').removeClass().addClass("inline nice");
	$('#dff015').removeClass().addClass("inline");
	$('#gtSelectLang').show();
	$('#dff014').show();

	$.getJSON("BelkinAPI/GetLanguage",{ RequestID: Math.floor(Math.random() * 10000) }, function(options) {
		var lang = options.language;
		var index = GetIndexByLanguage(lang);
		$('#dff015').get(0).selectedIndex = index;

	});
	$('#dff015').show();
	$("body").show();

}

function Apply_Callback(current_page, timeout, data)
{

	if(data!=null && data.Version==BelkinAPIVersion)
	{
		if(current_page=="801")
		{
			$('#p801').trigger('reveal:close');
		}
		else if(current_page=="802")
		{
			$('#p802').trigger('reveal:close');
		}
		else if(current_page=="804_S4")
		{
			$('#804').trigger('reveal:close');
		}
		else if(current_page=="803")
		{
			$('#803').trigger('reveal:close');
		}
		else if(current_page=="804_S5")
		{
			$('#804').trigger('reveal:close');
		}
		else if(current_page == "p804")
		{
			$('#p804').trigger('reveal:close');
			location.href = "http://192.168.2.1";
		}
		
		if( ((Current_Page =="lan_sett.html" || Current_Page =="ut_prev.html" || (Current_Page =="ut_save_restore.html" && Flush_Page == '0') ) && Lan_IP_Changed =='1') || Current_Page =="wls_apt.html")
		{
			location.href = New_LanIP_Last_URL;
		}
		else if( Flush_Page =='0')
			location.href = "000-Dashboard.htm";
		else if ( Flush_Page =='2')
		{	
			if(Current_Page == "wan_stat.html")
				location.href = "wan_dns.html";
			else
				location.href = Current_Page;
		}
	}
	else
	{
		//console.log("Go to APIVersion API error! ");
		
		if(current_page=="802")
		{
			$('#p802').trigger('reveal:close');
			$('#p804').reveal({
				animation: 'fade',                  
				animationspeed: 100             
			});

			$.router_watch(watch_url, 60, "804_S4", { RequestID: Math.floor(Math.random() * 10000) }, Apply_Callback, 1, 0);
		}
		else if(current_page=="804_S4")
		{
			$('#p804').trigger('reveal:close');
			$('#main_page').hide();

			$(document).scrollTop(0);
			$('#Support4').show(); 
		}
		else if(current_page=="803")
		{
			$('#p803').trigger('reveal:close');
			$('#p804').reveal({
				animation: 'fade',                  
				animationspeed: 100             
			});
			
			$.router_watch(watch_url, 60, "804_S5", { RequestID: Math.floor(Math.random() * 10000) }, Apply_Callback, 1, 0);
		}
		else if(current_page=="804_S5")
		{
			$('#p804').trigger('reveal:close');
			$('#main_page').hide();
			
			$(document).scrollTop(0);
			$('#Support5').show();
		}
	
	}
}

function apply_settings(SSID_Changed)
{
	//$.getJSON("BelkinAPI/IsClientWireless", { RequestID: Math.floor(Math.random() * 10000) }, function(data) {
	//	IsClientWireless=data.IsClientWireless;
		
		$('#p800').trigger('reveal:close');

		//if(IsClientWireless==false)  //wired
		if(IsClientWireless=="0") 
		{  
			$('#p801').reveal({
				animation: 'fade',                  
				animationspeed: 100             
			});
			if(Current_Page=="wls_apt.html")
			{
				CrossDateSend=false;
				crossdomain(crossdomain_url_ap);
			}
			else
				$.router_watch(watch_url, -1, "801", { RequestID: Math.floor(Math.random() * 10000) }, Apply_Callback, 1, min_wait_time);
		}
		else   //wireless
		{	
			$("*[tid='Network24SSID']").text(SSID_24);
			$("*[tid='Network24Passkey']").text(PSK_24);
				
			if( SSID_Changed == '0' )  //SSID not changed
			{
				$('#p802').reveal({
					animation: 'fade',                  
					animationspeed: 100             
				});
				if(Current_Page=="wls_apt.html")
				{
					CrossDateSend=false;
					crossdomain(crossdomain_url_ap);
				}
				else
					$.router_watch(watch_url, 60, "802", { RequestID: Math.floor(Math.random() * 10000) }, Apply_Callback, 1, 0);
			}
			else //SSID changed
			{
				$('#p803').reveal({
					animation: 'fade',                  
					animationspeed: 100             
				});
				if(Current_Page=="wls_apt.html")
				{
					CrossDateSend=false;
					crossdomain(crossdomain_url_ap);
				}
				else
					$.router_watch(watch_url, 60, "803", { RequestID: Math.floor(Math.random() * 10000) }, Apply_Callback, 1, 0);
			}		
		}
/*	})
	.error(function(){
		//console.log("dashboard_app.js: IsClientWireless API error!!!");
	});*/
}

function show_apply(Flush_Page, Reboot_Flag, SSID_Changed)
{
	$('#p800').reveal({
		animation: 'fade',                  
		animationspeed: 100             
	});
	
	//console.log("show_apply: Flush_Page="+Flush_Page+",Reboot_Flag= "+Reboot_Flag+",SSID_Changed="+SSID_Changed);

	if(Flush_Page=='0' && (Current_Page=="wls_sec.html"|| Current_Page=="wls_chan.html") )
	{
		var obj_tmp = new sdc_set_table();
		obj_tmp.set_field("RequestID", Math.floor(Math.random() * 10000));
		obj_tmp.set_field("WIFIMessageHide", "0");
		$.post("BelkinAPI/WIFIMessageHideSet", obj_tmp.row, function(data) {
			//console.log("Post UpgradeMessageHideSet API ok!");
		}, "json")
		.error(function(){
			//console.log("http timeout for BelkinAPI/UpgradeMessageHideSet");
		});
	}
	if( Flush_Page=='0' || Flush_Page=='2' || Flush_Page=='3')
	{	
		if( Reboot_Flag == '1')
		{ 
			if(Current_Page=="ut_firew.html")
				Reboot_time = 220;   //190+30
				
			$("#p800Progress").animate({ width: '100%'}, {
				duration: (Reboot_time+5)*1000,
				complete:	function() {
					
				if(Current_Page=="lan_sett.html" && Flush_Page=='3')
				{
					location.href = New_LanIP_URL;
				}
				else if(Current_Page=="ut_prev.html" || (Current_Page =="ut_save_restore.html" && Flush_Page == '0') )
				{
					location.href = New_LanIP_URL;
				}
				else
					apply_settings(SSID_Changed);
				}
			});
		}
		else
		{
			$("#p800Progress").animate({ width: '100%'}, {
				duration: (No_reboot_time)*1000,
				complete:	function() {
					apply_settings(SSID_Changed);
				}
			});
		}	
	}
	else if( Flush_Page=='1' )  
	{
		$("*[tid='Network24SSID']").text(Default_SSID);
		$("*[tid='Network24Passkey']").text(Default_Psk);
		
		$("#p800Progress").animate({ width: '100%'}, {
			duration: (Reboot_time+5)*1000,
			complete:	function() {
				
				$('#p800').trigger('reveal:close');

				$('#p804').reveal({
					animation: 'fade',                  
					animationspeed: 100             
				});
				CrossDateSend=false;
				crossdomain(crossdomain_url);
				//$.router_watch(crossdomain_url, -1, "p804", {}, Apply_Callback, 1, min_wait_time);
				//$.router_watch(watch_url, -1, "p804", { RequestID: Math.floor(Math.random() * 10000) }, Apply_Callback, 1, min_wait_time);
			}
		});
	}		
}

function GetLanguageByIndex(index_id)
{
	 var lang_id = index_id;
	 var lang;
	 if( lang_id == "0") {
		 lang = "en";
	 } else if ( lang_id == "1") {
		 lang = "fr";
	 } else if ( lang_id == "2") {
		 lang = "ca";
	 } else if ( lang_id == "3") {
		 lang = "de";
	 } else if ( lang_id == "4") {
		 lang = "es";
	 } else if ( lang_id == "5") {
		 lang = "mx";
	 } else if ( lang_id == "6") {
		 lang = "pt";
	 } else if ( lang_id == "7") {
		 lang = "br";
	 } else if ( lang_id == "8") {
		 lang = "it";
	 } else if ( lang_id == "9") {
		 lang = "du";
	 } else if ( lang_id == "10") {
		 lang = "el";
	 } else if ( lang_id == "11") {
		 lang = "tr";
	 } else if ( lang_id == "12") {
		 lang = "sv";
	 } else if ( lang_id == "13") {
		 lang = "no";
	 } else if ( lang_id == "14") {
		 lang = "da";
	 } else if ( lang_id == "15") {
		 lang = "fi";
	 } else if ( lang_id == "16") {
		 lang = "ru";
//   2013/2/28, Happy, Belkin request to remove KR language	 
//	 } else if ( lang_id == "17") {
//		 lang = "kr";
	 } else if ( lang_id == "17") {
		 lang = "tc";
	 } else if ( lang_id == "18") {
		 lang = "sc";
	 } else {
		 lang = "en";			 
	 }
	return lang;
}

function GetIndexByLanguage(language_id)
{
	 var lang_id = language_id;
	 var index;
	 if( lang_id == "en") {
		 index = "0";
	 } else if ( lang_id == "fr") {
		 index = "1";
	 } else if ( lang_id == "ca") {
		 index = "2";
	 } else if ( lang_id == "de") {
		 index = "3";
	 } else if ( lang_id == "es") {
		 index = "4";
	 } else if ( lang_id == "mx") {
		 index = "5";
	 } else if ( lang_id == "pt") {
		 index = "6";
	 } else if ( lang_id == "br") {
		 index = "7";
	 } else if ( lang_id == "it") {
		 index = "8";
	 } else if ( lang_id == "du") {
		 index = "9";
	 } else if ( lang_id == "el") {
		 index = "10";
	 } else if ( lang_id == "tr") {
		 index = "11";
	 } else if ( lang_id == "sv") {
		 index = "12";
	 } else if ( lang_id == "no") {
		 index = "13";
	 } else if ( lang_id == "da") {
		 index = "14";
	 } else if ( lang_id == "fi") {
		 index = "15";
	 } else if ( lang_id == "ru") {
		 index = "16";
//	 } else if ( lang_id == "kr") {
//		 index = "17";
	 } else if ( lang_id == "tc") {
		 index = "17";
	 } else if ( lang_id == "sc") {
		 index = "18";
	 } else {
		 index = "en";			 
	 }
	return index;
}
