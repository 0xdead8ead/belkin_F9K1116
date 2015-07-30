//added by bin 04/03/2003

function showHead(wanStatus,helpItem,isRouter,isPS)
{
	var strHtml;
	strHtml = '<table border="0" cellspacing="0" cellpadding="0" align="center" width="100%" height="100%">'+
  				'<tr>'+
    				'<td colspan=3 bordercolor="#FFFFFF">'+
      					'<table width=100% border="0" cellspacing="0" cellpadding="0" bgcolor="#CCCCCC">'+
          					'<tr>'+
          						'<td valign="middle" width=150>'+
          							'<img src="headlogo.gif" border="0" width="140" usemap="#Map" /><map name="Map" id="Map"><area shape="rect" coords="0,0,142,68" href="http://www.belkin.com" target="window_name" /></map>                                 '+
          						'</td>'
          					     +'<td colspan="2" valign="middle" height="68" class="top_nav" style="font-size:12pt">&nbsp;</td>'+
                            '</tr>';
//          					     +'<td valign="middle" height="68" class="top_nav" style="font-size:12pt">&nbsp;'+show0+'</td>';
          						//+
								//'<td align=left class=app_name width=260>' + wizard_name + '</td>';
    document.write(strHtml);

    strHtml ='<tr>'+
            '<td colspan="2" width="175" height="20" align="left" nowrap class="top_nav" valign=top> '+
                        '&nbsp;&nbsp;&nbsp;<nobr><a href="javascript:top.location.href=\'index.html\';" class="top_nav">'+show1+'</a>&nbsp;'+
                        '| &nbsp;<a href="javascript:void(0);" onClick="MoreInfoWin(\'glossary.html\');" class="top_nav">'+show2+'</script></a>&nbsp;';
    document.write(strHtml);

	if(helpItem =='Login' )
	{
     	strHtml = '| &nbsp;<a href="javascript:top.location.href=\'login.html\';" class="top_nav">'+show3+'</a>';
     	document.write(strHtml);
    }
    else
    {
      	strHtml = '| &nbsp;<a href="javascript:top.location.href=\'logout.html\';" class="top_nav">'+show4+'</a>';
     	document.write(strHtml);
    }
    strHtml ='</td>';
    document.write(strHtml);

    if(isAPmode =='0')
    {
            strHtml ='<td height="20" align="left" nowrap class="top_nav" valign=top>';
            document.write(strHtml);

            //alert(wanStatus);
            if(wanStatus == 'Up')
            {
             	strHtml =      				'<span class="status">'+show5+':</span> '+
            						'<span class="connected" id = "wanConnStatusUp">'+show6+'</span></nobr> '+
            						'<span class="disconnected" id = "wanConnStatusDown">'+'</span></nobr>';
                document.write(strHtml);
        	}
        	else if(wanStatus == 'Down')
        	{
        		strHtml =      				'<span class="status">'+show5+':</span> '+
            						'<span class="disconnected" id = "wanConnStatusDown">'+show7+'</span></nobr>'+
            						'<span class="connected" id = "wanConnStatusUp">'+'</span></nobr>';
                document.write(strHtml);
        	}
        	else
        	{
        	}

            strHtml ='</td>';
            document.write(strHtml);
     }
        strHtml =           '</tr>'+
      					'</table>'+
    				'</td>'+
  				'</tr>';
  	document.write(strHtml);
  	/* For updating connection status when wanStatus changed, Douglas @Jan-20-2009 */
  	if(helpItem !='Firmware Update OK' )
  		setInterval('pageRefresh()',5000); // 1000 = 1 second
}

function wiz_start(mode)
{
    if(mode == '1') //AP MODE
        alert(wiz_apmode);
    else
        top.location.href='wiz_main.html';
}

function manual_start()
{
    top.location.href='index.html';
}

function showmenu(menuSection,menuItem,isRouter,isPS,isAPmode)
{
	var yellow   ='#FFFF00';
	var white    ='#FFFFFF';
	var red    	 ='#FF0000';
	var blue   	 ='#E8F8FF';
	var darkBlue ='#94CAE4';
	var black    ='#000000';
	var bssid = '00:30:bd:f6:ee:95';
	var darkgrey ='#666666';
	var lightblue ='#6699ff';
	var white1 = '#cccccc';

    if((menuSection=="Reset OK"&&menuItem=="Reset OK") /* don't show menu */
    || (menuSection=="Restore OK"&&menuItem=="Restore OK")
    || (menuSection=="Save OK reboot"&&menuItem=="Save OK reboot")
    || (menuSection=="Save OK no reboot"&&menuItem=="Save OK no reboot")
    || (menuSection=="Restore Factory Default OK"&&menuItem=="Restore Factory Default OK")
    || (menuSection=="Firmware Update OK"&&menuItem=="Firmware Update OK"))
        return;

	//alert(isRouter);
	//alert(isAPmode);
	var strHtml;
		strHtml=   '<tr>'+
    				'<td valign="top" width="180" height="100%" bgcolor="#666666">'+
      				'<table width="140" border="0" cellspacing="0" cellpadding="0" align="left">'+
					'<tr>'+
					'<td ><a href="javascript:manual_start()"></a>'+
					'</td></tr>';
      	document.write(strHtml);

    // Router Mode
    if(isAPmode =='0')
    {

		// LAN Section
   		if(menuSection=='LAN')
   		{
   			printMenuSection('lan_main.html', show8, yellow);

   			if(menuItem=='LAN Settings')
   			{
   				printMenuItem('lan_sett.html', show9, lightblue, darkgrey);
        	}
        	else
        	{
        		printMenuItem('lan_sett.html', show9, white1, darkgrey);
        	}
        	if(menuItem=='DHCP Client List')
       	 	{
       	 		printMenuItem('lan_dhcp.html', show10, lightblue, darkgrey);
       		}
       		else
       		{
       			printMenuItem('lan_dhcp.html', show10, white1, darkgrey);
       		}
       		
//        	if(menuItem == 'Static Routing')
//       	 	{
//       	 		printMenuItem('lan_route.html', showstroute, lightblue, darkgrey);
//       		}
//       		else
//       		{
//       			printMenuItem('lan_route.html', showstroute, white1, darkgrey);
//       		}
    	}
    	else
    	{
    		printMenuSection('lan_main.html', show8, white);
        	printMenuItem('lan_sett.html', show9, white1, darkgrey);
        	printMenuItem('lan_dhcp.html', show10, white1, darkgrey);
//        	printMenuItem('lan_route.html', showstroute, white1, darkgrey);
		}

		// WAN Section
		if(menuSection=='WAN')
		{
			printMenuSection('wan_menu.html', show11, yellow);

    		if(menuItem=='Connection Type')
    		{
    			printMenuItem('wan_conn.html', show12, lightblue, darkgrey);
    		}
    		else
    		{
    			printMenuItem('wan_conn.html', show12, white1, darkgrey);
    		}
    		if(menuItem=='DNS')
    		{
    			printMenuItem('wan_dns.html', show13, lightblue, darkgrey);
    		}
    		else
    		{
    			printMenuItem('wan_dns.html', show13, white1, darkgrey);
    		}
    		if(menuItem=='MAC Address')
    		{
    			printMenuItem('wan_mac.html', show14, lightblue, darkgrey);
    		}
    		else
    		{
    			printMenuItem('wan_mac.html', show14, white1, darkgrey);
    		}
    	}
		else
		{
			printMenuSection('wan_menu.html', show11, white);
    		printMenuItem('wan_conn.html', show12, white1, darkgrey);
    		printMenuItem('wan_dns.html', show13, white1, darkgrey);
    		printMenuItem('wan_mac.html', show14, white1, darkgrey);
        }

		// WAN IPv6 Section
		if(menuSection=='WAN IPv6')
		{
			printMenuSection('wan_ipv6_main.html', wipv66, yellow);

    		if(menuItem=='ipv6 passthrough')
    		{
    			printMenuItem('wan_ipv6pt.html', show54, lightblue, darkgrey);
    		}
    		else
    		{
    			printMenuItem('wan_ipv6pt.html', show54, white1, darkgrey);
    		}
    	}
		else
		{
			printMenuSection('wan_ipv6_main.html', wipv66, white);
    		printMenuItem('wan_ipv6pt.html', show54, white1, darkgrey);
        }

		// parental control Section
		if(menuSection=='Parental Control')
		{
			printMenuSection('wan_pc_main.html', new2, yellow);

          	if(menuItem=='Website Filters')
    		{
    			printMenuItem('fw_web_filter.html', show50, lightblue, darkgrey);
          	}
          	else
          	{
          		printMenuItem('fw_web_filter.html', show50, white1, darkgrey);
          	} 
          	if(menuItem=='AC')
    		{
    			printMenuItem('fw_ac.html', show47, lightblue, darkgrey);
          	}
          	else
          	{
          		printMenuItem('fw_ac.html', show47, white1, darkgrey);
          	}
    	}
		else
		{
			printMenuSection('wan_pc_main.html', new2, white);
            printMenuItem('fw_web_filter.html', show50, white1, darkgrey);
            printMenuItem('fw_ac.html', show47, white1, darkgrey);
        }
	}

	// router or ap mode

      	// WLAN Section
      	if(bssid != show16) {
		if(menuSection=='WLAN')
		{
			printMenuSection('wls_main.html', show17, yellow);

        	if(menuItem=='Channel and SSID')
    		{
        		printMenuItem('wls_chan.html', show18, lightblue, darkgrey);
         	}
         	else
         	{
         		printMenuItem('wls_chan.html', show18, white1, darkgrey);
         	}

            if(menuItem=='Security')
    		{
         		printMenuItem('wls_encr.html', show19, lightblue, darkgrey);
         	}
         	else
         	{
         		printMenuItem('wls_encr.html', show19, white1, darkgrey);
         	}

			if(menuItem=='Wi-Fi Protected Setup')
    		{
         		printMenuItem('wls_wps.html', show21, lightblue, darkgrey);
         	}
         	else
         	{
         		printMenuItem('wls_wps.html', show21, white1, darkgrey);
         	}
    if(isAPmode =='0')
    {
         	if(menuItem=='Guest')
    		{
     			printMenuItem('wls_gst.html', show49, lightblue, darkgrey);
         	}
         	else
         	{
     			printMenuItem('wls_gst.html', show49, white1, darkgrey);
         	}
	}
         	if(menuItem=='Use as Access Point')
    		{
     			printMenuItem('wls_apt.html', show20, lightblue, darkgrey);
         	}
         	else
         	{
     			printMenuItem('wls_apt.html', show20, white1, darkgrey);
         	}
	
         	/*
     		if(menuItem=='Wireless Bridging')
			{
     			printMenuItem('wls_wds.html', show23, lightblue, darkgrey);
    		}
    		else
    		{
    			printMenuItem('wls_wds.html', show23, white1, darkgrey);
    		}
    		
       	    if(menuItem =='MAC Address Control')
      		{
          		printMenuItem('wls_acl.html', show22, lightblue, darkgrey);
          	}
          	else
           	{
           		printMenuItem('wls_acl.html', show22, white1, darkgrey);
           	}
            */
		}
		else
		{
			printMenuSection('wls_main.html', show17, white);
    		printMenuItem('wls_chan.html', show18, white1, darkgrey);
    		printMenuItem('wls_encr.html', show19, white1, darkgrey);
			printMenuItem('wls_wps.html', show21, white1, darkgrey);
    if(isAPmode =='0')
    {
			printMenuItem('wls_gst.html', show49, white1, darkgrey);
	}
     		printMenuItem('wls_apt.html', show20, white1, darkgrey);
     		//printMenuItem('wls_wds.html', show23, white1, darkgrey);
     	    //printMenuItem('wls_acl.html', show22, white1, darkgrey);
      	}
      }

    //router mode
    if(isAPmode=='0')
    {
       	// Media Features Section
		if(menuSection=='Media')
		{
			printMenuSection('mf_main.html', show53, yellow);
			
          	if(menuItem=='Intellistream')
    		{
    			printMenuItem('mf_is_qos.html', show51, lightblue, darkgrey);
          	}
          	else
          	{
          		printMenuItem('mf_is_qos.html', show51, white1, darkgrey);
          	}
           
          	if(menuItem=='Traffic Chart')
    		{
    			printMenuItem('qos_stats.html', show52, lightblue, darkgrey);
          	}
          	else
          	{
          		printMenuItem('qos_stats.html', show52, white1, darkgrey);
          	} 
          	
          	if(menuItem=='dlna')
    		{
    			printMenuItem('mf_dlna.html', media_dlna1, lightblue, darkgrey);
          	}
          	else
          	{
          		printMenuItem('mf_dlna.html', media_dlna1, white1, darkgrey);
          	} 
		}
		else
		{
         	printMenuSection('mf_main.html', show53, white);

          	printMenuItem('mf_is_qos.html', show51, white1, darkgrey);
          	printMenuItem('qos_stats.html', show52, white1, darkgrey);
          	printMenuItem('mf_dlna.html', media_dlna1, white1, darkgrey);
        }
    }


    //router mode
    if(isAPmode=='0')
    {

       	// Fire Wall Section
		if(menuSection=='Fire')
		{
			printMenuSection('fw_main.html', show24, yellow);
			
          	if(menuItem=='Virtual Servers')
    		{
    			printMenuItem('fw_virt.html', show25, lightblue, darkgrey);
          	}
          	else
          	{
          		printMenuItem('fw_virt.html', show25, white1, darkgrey);
          	}
           
          	if(menuItem=='MAC Address Filtering')
    		{
    			printMenuItem('fw_mac.html', show27, lightblue, darkgrey);
          	}
          	else
          	{
          		printMenuItem('fw_mac.html', show27, white1, darkgrey);
          	}
          	if(menuItem=='DMZ')
    		{
    			printMenuItem('fw_dmz.html', show28, lightblue, darkgrey);
          	}
          	else
          	{
          		printMenuItem('fw_dmz.html', show28, white1, darkgrey);
          	}
    		if(menuItem=='DDNS')
    		{
    			printMenuItem('ddns.html', show15, lightblue, darkgrey);
    		}
    		else
    		{
    			printMenuItem('ddns.html', show15, white1, darkgrey);
    		}
            
          	if(menuItem=='WAN Ping Blocking')
    		{
    			printMenuItem('fw_ping.html', show29, lightblue, darkgrey);
          	}
          	else
          	{
          		printMenuItem('fw_ping.html', show29, white1, darkgrey);
          	}
          	
			if(menuItem=='Security Log')
    		{
    			printMenuItem('fw_sec.html', show30, lightblue, darkgrey);
        	}
        	else
        	{
        		printMenuItem('fw_sec.html', show30, white1, darkgrey);
        	}
        	
		}
		else
		{
         	printMenuSection('fw_main.html', show24, white);

    		//printMenuItem('fw_gtwy.html', 'Application Gateways', black, white);
          	printMenuItem('fw_virt.html', show25, white1, darkgrey);
        //  	printMenuItem('fw_acl.html', show26, white1, darkgrey);         
          	printMenuItem('fw_mac.html', show27, white1, darkgrey);
//          	printMenuItem('fw_access.html', show47, white1, darkgrey); 
          	printMenuItem('fw_dmz.html', show28, white1, darkgrey);
          	printMenuItem('ddns.html', show15, white1, darkgrey);
          	printMenuItem('fw_ping.html', show29, white1, darkgrey);
            printMenuItem('fw_sec.html', show30, white1, darkgrey);
        }
	}

        // router or ap mode
      	// Utilities Section
      	if(menuSection=='Util')
      	{
      		printMenuSection('ut_main.html', show31, yellow);


        	if(menuItem=='Restart Router')
    		{
  				printMenuItem('ut_reset.html', show33, lightblue, darkgrey);
          	}
          	else
          	{
  				printMenuItem('ut_reset.html', show33, white1, darkgrey);
          	}
          	if(menuItem=='Restore Factory Default')
    		{
    			printMenuItem('ut_facty.html', show35, lightblue, darkgrey);
          	}
          	else
          	{
          		printMenuItem('ut_facty.html', show35, white1, darkgrey);
          	}
          	if(menuItem=='Save/Backup Settings')
    		{
    			printMenuItem('ut_save.html', show36, lightblue, darkgrey);
          	}
          	else
          	{
          		printMenuItem('ut_save.html', show36, white1, darkgrey);
          	}
          	if(menuItem=='Restore Previous Settings')
    		{
    			printMenuItem('ut_prev.html', show37, lightblue, darkgrey);
          	}
          	else
          	{
          		printMenuItem('ut_prev.html', show37, white1, darkgrey);
          	}

          	if(menuItem=='Firmware Update')
    		{
    			printMenuItem('ut_firew.html', show38, lightblue, darkgrey);
          	}
          	else
          	{
          		printMenuItem('ut_firew.html', show38, white1, darkgrey);
          	}
          	if(menuItem=='System Settings')
    		{
    			if(isAPmode=='0')
    			{
    				printMenuItem('ut_sys.html', show39, lightblue, darkgrey);

        		}
        		else
        		{
        			printMenuItem('utb_sys.html', show39, lightblue, darkgrey);
        		}
        	}
        	else
        	{
        		if(isAPmode=='0')
    			{
    				printMenuItem('ut_sys.html', show39,  white1, darkgrey);

        		}
        		else
        		{
        			printMenuItem('utb_sys.html', show39,  white1, darkgrey);
        		}
        	}
        	
        	if(isAPmode=='0')
        	{
	        	if(menuItem=='Self Healing')
	    		{
	    			printMenuItem('ut_self_healing.html', show48, lightblue, darkgrey);
	          	}
	          	else
	          	{
	          		printMenuItem('ut_self_healing.html', show48, white1, darkgrey);
	          	}
        	}
        	
      	}
      	else
      	{
      		printMenuSection('ut_main.html', show31, white);
  			printMenuItem('ut_reset.html', show33, white1, darkgrey);
          	printMenuItem('ut_facty.html', show35, white1, darkgrey);
          	printMenuItem('ut_save.html', show36, white1, darkgrey);
          	printMenuItem('ut_prev.html', show37, white1, darkgrey);
          	printMenuItem('ut_firew.html', show38, white1, darkgrey);
        	if(isAPmode=='0')
    		{
    			printMenuItem('ut_sys.html', show39,  white1, darkgrey);
        	}
        	else
        	{
        		printMenuItem('utb_sys.html', show39,  white1, darkgrey);
        	}
        	
        	if(isAPmode=='0')
        		printMenuItem('ut_self_healing.html', show48, white1, darkgrey);
        	
        }

//        strHtml = '<tr>'+
//          				'<td width="5" bgcolor="#666666">&nbsp;</td>'+
//          				'<td bgcolor="#666666">'+
//          				'&nbsp;</td>'+
//         			'</tr>';
//
//        document.write(strHtml);

   		strHtml=		'</table>'+
    				'</td>'+
    				'<td valign="top" width="1" bgcolor="#006699" height="100%">'+
    					'<img src="shim.gif" width="1" height="1">'+
    				'</td>';
   	document.write(strHtml);


}

function showTail()
{
	var strHtml;
	strHtml = '</tr>'+
			'</table>'+
		'</body>'+
	'</html>';
	document.write(strHtml);
}

function printMenuSection(link, content, color)
{
	var strHtml;
	strHtml=		    '<tr><td colspan="2" height=0 width=140></td></tr>'+
	                    '<tr>'+
          				'<td colspan="2" height="20" width="140" bgcolor="#666666">'+
          					'&nbsp'+
          					'<a  class="uptest" href="' + link + '" class="section"><font color="' + color + '">'+
          					content+
          					'</font></a>'+
          				'</td>'+
        			'</tr>';
    document.write(strHtml);

}

function printMenuItem(link, content, color, background)
{
	var strHtml;
    strHtml='<tr><td colspan="3" height=0 width=140></td></tr>'+
            '<tr>'+
            '<td width="5" bgcolor="' + background + '">&nbsp;</td>'+
            '<td bgcolor="' + background + '">';

//    if(content==show51 || content==show54 || content==show50 || content==media_dlna1)
//        strHtml+='<div class="new">'+new6+'</div>';

    strHtml+='<a class="test" href="' + link + '"><font color="' + color + '">' + content + '</font></a>'+
             '</td>';

    if(content==show51 || content==show54 || content==show50 || content==media_dlna1)
        strHtml+='<td align="left" class="new">'+new8+'</td>';

    strHtml+='</tr>';

    document.write(strHtml);
}
function createXHR()
{
   try { return new XMLHttpRequest(); } catch(e) {}
   try { return new ActiveXObject("Msxml2.XMLHTTP.6.0"); } catch (e) {}
   try { return new ActiveXObject("Msxml2.XMLHTTP.3.0"); } catch (e) {}
   try { return new ActiveXObject("Msxml2.XMLHTTP"); } catch (e) {}
   try { return new ActiveXObject("Microsoft.XMLHTTP"); } catch (e) {}
   //alert("XMLHttpRequest not supported");
   return null;
}
function getBelkinURL()
{
    var str=window.location.href;
    var start = str.indexOf("http://");
    var end = str.lastIndexOf("/");
    var str = str.substring(start, end);
    return str;
}
function sendRequest()
{
    try { netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead"); } catch (e) {}
    var xhr = createXHR();
    var belkinURL = getBelkinURL();
    belkinURL = belkinURL + "/wan_con_status.html";
    if (xhr)
    {
        xhr.open("GET", belkinURL +"?"+Math.random(), true);
        xhr.onreadystatechange = function(){handleResponse(xhr);};
        xhr.send(null);
    }
}
function pageRefresh()
{
     sendRequest();
}
function handleResponse(xhr)
{
  try { netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead"); } catch (e) {}
  if (xhr.readyState == 4  && xhr.status == 200)
  {
        var parsedResponse = xhr.responseText;
        var msg = parsedResponse;
        var wan_conn;
        var wan_connected = show6;
        var wan_not_connected = show7;
        var indexStr = "wanStatus";
        var markStr = "='";
        var start, end;
        start = msg.indexOf(indexStr);
        msg = msg.substr(start, indexStr.length * 2);
        start = msg.indexOf(markStr);
        wan_conn = msg.substring(start + markStr.length, start + markStr.length + 1);
        if (wan_conn == 'D')
        {
            if (document.getElementById("wanConnStatusDown"))
                wanConnStatusDown.innerHTML = wan_not_connected;
            if (document.getElementById("wanConnStatusUp"))
                wanConnStatusUp.innerHTML = "";
        }
        else if (wan_conn == 'U')
        {
            if (document.getElementById("wanConnStatusDown"))
                wanConnStatusUp.innerHTML = wan_connected;
            if (document.getElementById("wanConnStatusUp"))
                wanConnStatusDown.innerHTML = "";
        }
   }
}

function sleep(n)   
{   
	var   start=new Date().getTime();   
	while(true){
		if(new Date().getTime()-start > n)   
			break;   
	}
}

function MoreInfoWin(strHelp)
{
    if (navigator.userAgent.indexOf('Chrome/') > 0) {
        if (window.detwin) {
            window.detwin.close();
            window.detwin = null;
        }
    }

    window.detwin=window.open(strHelp,'help','toolbar=0,status=0,menubar=0,scrollbars=1,resizable=1,width=530,height=400,left=150,top=150');
    window.detwin.focus();
}
