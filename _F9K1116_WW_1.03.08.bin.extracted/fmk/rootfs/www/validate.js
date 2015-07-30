var daysOfMonth = new Array(
  31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
);

var daysOfMonthLY = new Array(
  31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
);
function isLeapYear(year) {
  year = year - 0;
  if ((year/4)   != Math.floor(year/4))   return false;
  if ((year/100) != Math.floor(year/100)) return true;
  if ((year/400) != Math.floor(year/400)) return false;
  return true;
}

function isValidDate(day, month, year) {
 day = day - 0; month = month - 0; year = year - 0;
 if ((isLeapYear(year) && day > daysOfMonthLY[month-1]) ||
	(!isLeapYear(year) && day > daysOfMonth[month-1]))
	return false;
 else
	return true;
}

function validateIp(val){
 if(val.length==0) return false;
 var ii; sval=String(val);
 if(val.length>15)
	{alert(vjs1);return false;}
 i1=val.indexOf('.');
 if(i1==-1)
	{alert(vjs2);return false;}
 sub1=val.substring(0,i1);

 tempval=val.substring(i1+1,val.length);
 i2=tempval.indexOf('.');
 if(i2==-1)
	{alert(vjs2);return false;}
 sub2=tempval.substring(0,i2);

 tempval=tempval.substring(i2+1,tempval.length);
 i3=tempval.indexOf('.');
 if(i3==-1)
	{alert(vjs2);return false;}
 sub3=tempval.substring(0,i3);

 tempval=tempval.substring(i3+1,tempval.length);
 i4=tempval.indexOf('.');
 if(i4!=-1)
	{alert(vjs4);return false;}
 sub4=tempval.substring(0,tempval.length);

 if(sub1.length==0 || sub2.length==0 || sub3.length==0 || sub4.length==0)
	{alert(vjs3);return false;}

 if((sub1-0)<0 || (sub1-0)>255 || (sub2-0)<0 || (sub2-0)>255 ||
 (sub3-0)<0 || (sub3-0)>255 || (sub4-0)<0 || (sub4-0)>255)
	{alert(vjs5);return false;}

 for (ii=0; ii<sval.length; ii++)
 {
	if (sval.charAt(ii)=='.')
	{continue;}
	else if (sval.charAt(ii)<'0' || sval.charAt(ii)>'9')
	{
	 alert(vm1+'['+sval.charAt(ii)+'] '+vm2+(ii+1)+'! '+vm3+' 0123456789');
	 return false;
	}
 }
 
 return true;
}

function validateIp_01(val){
 if(val.length==0) return false;
 var ii; sval=String(val);
 if(val.length>15)
	{alert(vjs1);return false;}
 i1=val.indexOf('.');
 if(i1==-1)
	{alert(vjs2);return false;}
 sub1=val.substring(0,i1);
 tempval=val.substring(i1+1,val.length);
 i2=tempval.indexOf('.');
 if(i2==-1)
	{alert(vjs2);return false;}
 sub2=tempval.substring(0,i2);
 tempval=tempval.substring(i2+1,tempval.length);
 i3=tempval.indexOf('.');
 if(i3==-1)
	{alert(vjs2);return false;}
 sub3=tempval.substring(0,i3);
 tempval=tempval.substring(i3+1,tempval.length);
 i4=tempval.indexOf('.');
 if(i4!=-1)
	{alert(vjs4);return false;}
 sub4=tempval.substring(0,tempval.length);
 if(sub1.length==0 || sub2.length==0 || sub3.length==0 || sub4.length==0)
	{alert(vjs3);return false;}          
 if((sub1-0)<=0 || (sub1-0)>223 || (sub2-0)<0 || (sub2-0)>255 ||
 (sub3-0)<0 || (sub3-0)>255 || (sub4-0)<=0 || (sub4-0)>254)
	{alert(usysipm);return false;}
	return true;
}

function validateMTU(val) 
{
 mval = val; mval=mval-0;
 if(val.length<3 || mval<500 || mval>1500)
 {
	alert(vjs14);
	return false;
 }
 for(i=0; i<val.length; i++)
 {
	if(val.charAt(i)<'0' || val.charAt(i)>'9')
	{	alert(vm4+val.charAt(i)+vm2+ (i+1)+'! '+vm3+' 0123456789');
		return false;
	}
 }
 return true;
}

function hex(val)
{
	var h = (val-0).toString(16);
	if(h.length==1) h='0'+h;
	return h.toUpperCase();
}

function lan_validateGateway(wanIp,netmaskIp,gatewayIp) {
	if(gatewayIp.length==0) return true;
	if(validateWanIp(gatewayIp) == false) return false;
	var i1,i2,i3,tmp3, wip, nip, gip, wip_last, nip_last,gip_last, base;

	i1=wanIp.indexOf('.');
	i2=wanIp.indexOf('.',(i1+1));
	i3=wanIp.indexOf('.',(i2+1));
	wip = hex(wanIp.substring(0,i1)) + hex(wanIp.substring((i1+1),i2)) +hex(wanIp.substring((i2+1),i3))+hex(wanIp.substring((i3+1),wanIp.length));
	wip = '0x'+wip;
	wip_last = hex(wanIp.substring((i3+1),wanIp.length));
	wip_last = '0x'+wip_last;

	i1=netmaskIp.indexOf('.');
	i2=netmaskIp.indexOf('.',(i1+1));
	i3=netmaskIp.indexOf('.',(i2+1));
	nip = hex(netmaskIp.substring(0,i1)) + hex(netmaskIp.substring((i1+1),i2)) +hex(netmaskIp.substring((i2+1),i3)) +hex(netmaskIp.substring((i3+1),netmaskIp.length));
	nip = '0x'+nip;
    nip_last = hex(netmaskIp.substring((i3+1),netmaskIp.length));
	nip_last = '0x'+nip_last;
    
	i1=gatewayIp.indexOf('.');
	i2=gatewayIp.indexOf('.',(i1+1));
	i3=gatewayIp.indexOf('.',(i2+1));
	tmp3 = (parseInt(gatewayIp.substring((i3+1),gatewayIp.length),10) + 1) + '';
	gip = hex(gatewayIp.substring(0,i1)) + hex(gatewayIp.substring((i1+1),i2)) +hex(gatewayIp.substring((i2+1),i3)) +hex(tmp3);
	gip = '0x'+gip;
	gip_last = parseInt(gatewayIp.substring((i3+1),gatewayIp.length),10);
    
    var base = wip_last & nip_last;
    		
	if((wip & nip) != (gip & nip) ||( (wip & nip) == (gip & nip) && ( (gip_last-base == 0)||(gip_last-base == 255-nip_last) )) )
	{
		//alert(vjs16 +gatewayIp+vjs161 + wanIp+"/"+netmaskIp+vjs162);
		alert(vjs42);
		return false;
	}
	return true;
}

function validateGateway(wanIp,netmaskIp,gatewayIp) {
	if(gatewayIp.length==0) return true;
	if(validateWanIp(gatewayIp) == false) return false;
	var i1,i2,i3,tmp3, wip, nip, gip;

	i1=wanIp.indexOf('.');
	i2=wanIp.indexOf('.',(i1+1));
	i3=wanIp.indexOf('.',(i2+1));
	wip = hex(wanIp.substring(0,i1)) + hex(wanIp.substring((i1+1),i2)) +hex(wanIp.substring((i2+1),i3))+hex(wanIp.substring((i3+1),wanIp.length));
	wip = '0x'+wip;

	i1=netmaskIp.indexOf('.');
	i2=netmaskIp.indexOf('.',(i1+1));
	i3=netmaskIp.indexOf('.',(i2+1));
	nip = hex(netmaskIp.substring(0,i1)) + hex(netmaskIp.substring((i1+1),i2)) +hex(netmaskIp.substring((i2+1),i3)) +hex(netmaskIp.substring((i3+1),netmaskIp.length));
	nip = '0x'+nip;

	i1=gatewayIp.indexOf('.');
	i2=gatewayIp.indexOf('.',(i1+1));
	i3=gatewayIp.indexOf('.',(i2+1));
	tmp3 = (parseInt(gatewayIp.substring((i3+1),gatewayIp.length),10) + 1) + '';
	gip = hex(gatewayIp.substring(0,i1)) + hex(gatewayIp.substring((i1+1),i2)) +hex(gatewayIp.substring((i2+1),i3)) +hex(tmp3);
	gip = '0x'+gip;

	if((wip & nip) != (gip & nip))
	{
		alert(vjs16 +gatewayIp+vjs161 + wanIp+"/"+netmaskIp+vjs162);
		return false;
	}
	return true;
}

function validateMac(val){
 var i;
 sval=String(val);

 if (sval.length>0 && sval.length!=17)
 {	
	return false;
 }
 for (i=0; i<sval.length; i++)
 {	
    if ((i % 3)==2)
	{
	    if (sval.charAt(i)!=':')
	    { 
            return false;
        }
 	}
	else if (!((sval.charAt(i)>='0' && sval.charAt(i)<='9') ||
	(sval.charAt(i)>='A' && sval.charAt(i)<='F')  ||
	(sval.charAt(i)>='a' && sval.charAt(i)<='f')))
 	{  
	 return false;
 	}
 }
 var sub1=val.substring(0,2);
 var sub2=val.substring(3,5);
 var sub3=val.substring(6,8);
 var sub4=val.substring(9,11);
 var sub5=val.substring(12,14);
 var sub6=val.substring(15);

 if (sub1=='ff' && sub2=='ff' && sub3=='ff' && sub4=='ff' && sub5=='ff' && sub6=='ff')
 {
	alert(vjs23);
	return false;
 }
 if (sub1=='00' && sub2=='00' && sub3=='00' && sub4=='00' && sub5=='00' && sub6=='00')
 {
	alert(vjs24);
	return false;
 }
 sub1='0x'+sub1;
 if((sub1 & 1)==1)
 {
	alert(vjs25);
	return false;
 }
 return true;
}

function validateDHCPrange(wanIp,netmaskIp,gatewayIp) {
	if(gatewayIp.length==0) return true;
	if(validateWanIp(gatewayIp) == false) return false;
	var i1,i2,i3,tmp3, wip, nip, gip, end_mask,end_wanip,j,wip_last,nip_last;
	
    var end_mask_list = new Array(0,128,192,224,240,248,252);
    var range_number = new Array(254,126,62,30,14,6,2); 

	i1=wanIp.indexOf('.');
	i2=wanIp.indexOf('.',(i1+1));
	i3=wanIp.indexOf('.',(i2+1));
	end_wanip = wanIp.substring(i3+1);
	wip = hex(wanIp.substring(0,i1)) + hex(wanIp.substring((i1+1),i2)) +hex(wanIp.substring((i2+1),i3))+hex(wanIp.substring((i3+1),wanIp.length));
	wip = '0x'+wip;
	wip_last = hex(wanIp.substring((i3+1),wanIp.length));
	wip_last = '0x'+wip_last;
	
	i1=netmaskIp.indexOf('.');
	i2=netmaskIp.indexOf('.',(i1+1));
	i3=netmaskIp.indexOf('.',(i2+1));
	end_mask=netmaskIp.substring(i3+1);
	nip = hex(netmaskIp.substring(0,i1)) + hex(netmaskIp.substring((i1+1),i2)) +hex(netmaskIp.substring((i2+1),i3)) +hex(netmaskIp.substring((i3+1),netmaskIp.length));
	nip = '0x'+nip;
	nip_last = hex(netmaskIp.substring((i3+1),netmaskIp.length));
	nip_last = '0x'+nip_last;

	i1=gatewayIp.indexOf('.');
	i2=gatewayIp.indexOf('.',(i1+1));
	i3=gatewayIp.indexOf('.',(i2+1));
	tmp3 = (parseInt(gatewayIp.substring((i3+1),gatewayIp.length),10) + 1) + '';
	gip = hex(gatewayIp.substring(0,i1)) + hex(gatewayIp.substring((i1+1),i2)) +hex(gatewayIp.substring((i2+1),i3)) +hex(tmp3);
	gip = '0x'+gip;

	if((wip & nip) != (gip & nip))
	{
		var base = wip_last & nip_last;
		
		for(j=0; j<7;j++)
	    {
	    	if(end_mask == end_mask_list[j])
	    	{	    		
				var range_start = base +1;
	    		var range_end = base + parseInt(range_number[j]);
	    		
	    		if( parseInt(end_wanip) < range_start || parseInt(end_wanip) == range_start )
	    		{
	    			if(parseInt(end_wanip) == range_start)
						range_start = range_start+1;
						
	    			if( range_end < 254)
	    				alert(vjs163 + range_start + "-" + range_end + ".");
	    			else
	    				alert(vjs163 + range_start + "-254.");	
	    		}
	    		else if( parseInt(end_wanip) > range_start && parseInt(end_wanip) < range_end )
	    		{
	    			if( range_end < 254)
	    				alert(vjs163 + range_start + "-" + (parseInt(end_wanip)-1)+","+(parseInt(end_wanip)+1)+ "-" +range_end + ".");
	    			else
	    				alert(vjs163 + range_start + "-" + (parseInt(end_wanip)-1)+","+(parseInt(end_wanip)+1)+ "-" +254 + ".");	
	    		}
	    	}
	    }
		//alert(vjs16 +gatewayIp+vjs161 + wanIp+"/"+netmaskIp+vjs162);
					
		return false;
	}
	return true;
}

function validateStartEndIp(lanip,netip,startip, endip)
{
 if(endip.length==0) return;
 if((validateDHCPrange(lanip,netip,endip)) == false) return false;

 i1=startip.indexOf('.');
 i2=startip.indexOf('.',(i1+1));
 i3=startip.indexOf('.',(i2+1));
 sip = hex(startip.substring(0,i1)) + hex(startip.substring((i1+1),i2)) +hex(startip.substring((i2+1),i3))+hex(startip.substring((i3+1),startip.length));
 sip = '0x'+sip;

 i1=endip.indexOf('.');
 i2=endip.indexOf('.',(i1+1));
 i3=endip.indexOf('.',(i2+1));
 eip = hex(endip.substring(0,i1)) + hex(endip.substring((i1+1),i2)) +hex(endip.substring((i2+1),i3))+hex(endip.substring((i3+1),endip.length));
 eip = '0x'+eip;

 if(sip>eip)
 {
	alert(vjs26);
	return false;
 }
}

function isClassAIP(ip1,ip2,ip3,ip4)
{
	var ip = ip1 + '.' + ip2 + '.' + ip3 + '.' + ip4;
		
	if(validateIp(ip)==false) return false;
		
	if( ip1 >=1 && ip1 <= 126)
		return true;
	else 
		return false;
}

function isClassBIP(ip1,ip2,ip3,ip4)
{
	var ip = ip1 + '.' + ip2 + '.' + ip3 + '.' + ip4;
	
	if(validateIp(ip)==false) return false;
	
	if( ip1 >=128 && ip1 <= 191)
		return true;
	else 
		return false;
}

function isClassCIP(ip1,ip2,ip3,ip4)
{
	var ip = ip1 + '.' + ip2 + '.' + ip3 + '.' + ip4;
	
	if(validateIp(ip)==false) return false;
	
	if( ip1 >=192 && ip1 <= 223)	
		return true;
	
	else 
		return false;
}

function validateLanClassANetmask(val)
{
    if(val!='255.0.0.0' && val!='255.128.0.0' && val!='255.192.0.0' && val!='255.224.0.0' 
        && val!='255.240.0.0' && val!='255.248.0.0' && val!='255.252.0.0' && val!='255.254.0.0'
        && !validateLanClassBNetmask(val))
    {
        return false;
    }
    return true;
}

function validateLanClassBNetmask(val)
{
    if(val!='255.255.0.0' && val!='255.255.128.0' && val!='255.255.192.0' && val!='255.255.224.0' 
        && val!='255.255.240.0' && val!='255.255.248.0' && val!='255.255.252.0' && val!='255.255.254.0'
        && !validateLanNetmask(val))
    {
        return false;
    }
    return true;
}

function validateLanNetmask(val)
{
    if(val!='255.255.255.0' && val!='255.255.255.128' && val!='255.255.255.192' && val!='255.255.255.224' 
        && val!='255.255.255.240' && val!='255.255.255.248' && val!='255.255.255.252' && val!='255.255.255.254')
    {
        return false;
    }
    return true;
}

function validateWanIp(val)
{
	if(validateIp(val)==false) return false;

	var ii; sval=String(val);
	i1=val.indexOf('.');
	sub1=val.substring(0,i1);

	tempval=val.substring(i1+1,val.length);
	i2=tempval.indexOf('.');
	sub2=tempval.substring(0,i2);

	tempval=tempval.substring(i2+1,tempval.length);
	i3=tempval.indexOf('.');
	sub3=tempval.substring(0,i3);

	tempval=tempval.substring(i3+1,tempval.length);
	i4=tempval.indexOf('.');
	sub4=tempval.substring(0,tempval.length);
	
	if(sub4=='0' || sub4=='255')
	{
		alert(vjs30);
		return false;
	}
	if(sub1=='0' || sub1=='255')
	{
		alert(vjs35);
		return false;
	}
	if(sub1=='127')
	{
		alert(vjs31);
		return false;
	}
	if(val=='0.0.0.0')
	{
		alert(vjs32);
		return false;
	}

	if((sub1-0)>223)
	{
		alert(vjs33);
		return false;
	}
	return true;
}

function badMask(ip1, ip2, ip3, ip4)   // mask fields
{
	var i,j,match0,match1 = -1;
	var m = new Array(4);

	for( i = 0; i < 4; i++ )
	{
		m[i] = badMask.arguments[i].value;
		if(!(isInteger(m[i], 0, 255, false)))
			return true; // bad
	    if(i == 0)
	    {
	        if(!(isInteger(m[i], 255, 255, false)))
	            return true;
	    }		
	}
	for(i = 3; i >= 0; i--)
	{
		for(j = 1;j <= 8;j++)
		{
			if( ( m[i] % 2 ) == 0)   match0 = ( 3 - i ) * 8 + j;
			else if(((m[i] % 2) == 1) && match1 == -1)   match1 = ( 3 - i ) * 8 + j;
			m[i] = Math.floor(m[i] / 2);
		}
	}
	if((match0 > match1) 
	    || (match1 == 1) 
	    || (badMask.arguments[3].value == 254))
		return true;
	else 
		return false;
}
function isInteger(str, min_value, max_value, allowBlank)  // allowBlank = true or false
{
	if(str.length == 0)
		if(allowBlank)
			return true;
		else
			return false;
	for (var i=0; i < str.length; i++)
	{
		if ((str.charAt(i) < '0') || (str.charAt(i) > '9'))
				return false;
	}
	var int_value = parseInt(str,10);
	if ((int_value < min_value) || (int_value > max_value))
		return false;
	return true;
}

function validVisibleStr(Str)
{
    var i, len = Str.length;

    for(i = 0; i < len; i++)
    {
        if(Str.charAt(i) < ' ' || Str.charAt(i) > '~')
            return false;
    }
    
    return true;
}

function validVsStr(Str)
{
    var i, len = Str.length;

    for(i = 0; i < len; i++)
    {
        if(Str.charAt(i) < ' ' || Str.charAt(i) > '~' || Str.charAt(i) == '"' || Str.charAt(i) == '\\')
            return false;
    }
    
    return true;
}

function validSsidStr(Str)
{
    var pattern = /^[A-Za-z0-9+_.]+$/;
    
    if(!pattern.test(Str))
          return false;
    return true;
}

function validDomainStr(Str)
{
	var i, len=Str.length;
	
	for(i=0; i<len; i++)
	{
		if(Str.charAt(i)==' ' || Str.charAt(i)=='!' || 
		   Str.charAt(i)=='"' || Str.charAt(i)=='#' || 
		   Str.charAt(i)=='$' || Str.charAt(i)=='%' || 
		   Str.charAt(i)=='&' || Str.charAt(i)=='\'' || 
		   Str.charAt(i)=='(' || Str.charAt(i)==')' || 
		   Str.charAt(i)=='*' || Str.charAt(i)=='+' || 
		   Str.charAt(i)==',' || Str.charAt(i)=='/' || 
		   Str.charAt(i)==':' || Str.charAt(i)==';' || 
		   Str.charAt(i)=='<' || Str.charAt(i)=='=' || 
		   Str.charAt(i)=='>' || Str.charAt(i)=='?' || 
		   Str.charAt(i)=='@' || Str.charAt(i)=='[' || 
		   Str.charAt(i)=='\\' || Str.charAt(i)==']' || 
		   Str.charAt(i)=='^' || Str.charAt(i)=='`' || 
		   Str.charAt(i)=='{' || Str.charAt(i)=='|' || 
		   Str.charAt(i)=='}' || Str.charAt(i)=='~')
          return false;
    }
    return true;
}

function validHostName(name)
{
    var localname = name.toLowerCase();
    for(i=0;i<localname.length;i++)
    {
        var token=localname.charAt(i);
        if(token=='`' || token=='~' || token=='!' || token=='@' || token=='#'
	       || token=='$' || token=='%' || token=='^' || token=='&' || token=='*'
	       || token=='(' || token==')' || token=='_' || token=='+' || token=='['
	       || token==']' || token=='{' || token=='}' || token=='\\'|| token=='|'
	       || token==';' || token==':' || token=='\''|| token=='"' || token=='<'
	       || token=='>' || token=='/' || token=='?' || token=='.' || token==',')
        {
            return false;
        } 
    }
    
    return true;
}

function validNumLetter(name)
{
    var localname = name.toLowerCase();
    
    for(i = 0; i < localname.length; i++)
    {
        var onec = localname.charAt(i);
        
        if((onec >= '0' && onec <= '9')
            || (onec >= 'a' && onec <= 'z'))
        {
            continue;
        }
        
        return false;
    }
    
    return true;
}

function isBlank(s) 
{
 for(var i = 0; i < s.length; i++) 
 {
     var c = s.charAt(i);
     if((c !=' ') && (c!='\n') && (c !='\t')) 
        return false;
 }
 return true;
}

function isNValidIP(s) 
{
    if((isBlank(s))||(isNaN(s))||(s<0||s>255)) 
        return true;
    else 
        return false;
}

function isNValidEndIP(s) 
{
    if((isBlank(s))||(isNaN(s))||(s<=0||s>=255)) 
        return true;
    else 
        return false;
}

function isNValidSingleFirstIP(s) 
{
    if((isBlank(s))||(isNaN(s))||(s<=0||s>=224)) 
        return true;
    else 
        return false;
}
function isNValidStartIP(s) 
{
    var i = 0;
    
    while(i < s.length)
    {
        if(s.charAt(i) < '0' || s.charAt(i) > '9')
            return true;
        else
            i++;            
    }
    
    if((isBlank(s))||(isNaN(s))||(s<=0||s>=224)) 
        return true;
    else 
        return false;
}

function isLocalIp(address)    //169.254.x.x, 127.0.0.1
{	
	if( address == '127.0.0.1')
		return true;
		
	else
	{
		addrParts = address.split('.');
		if( addrParts[0] == 169 && addrParts[1] == 254 )
			return true;
	}		
	
	return false;	
}

function isNValidPort(s) 
{
    if((isBlank(s))||(isNaN(s)||(s < 1)||(s>65535))) 
        return true;
    else	
        return false;
}

function isLoopBackFirstIP(s)
{
    if(s == 127)
        return true;
    else
        return false;        
}

function isHex(s) 
{
    var j;
    for(var i = 0; i < s.length; i++) 
    {
        var c = s.charAt(i);
        j = parseInt(c,16);
        if ((j == 0) || (j == 1)|| (j == 2)|| (j == 3)|| (j == 4)|| (j == 5)|| (j == 6)
        || (j == 7)|| (j == 8)|| (j == 9)|| (j == 10)|| (j == 11)|| (j == 12)|| (j == 13)|| (j == 14)|| (j == 15)) 
        {
            ;      
        }
        else
            return false;
            
    }
    return true;
}

function isNValid(s) 
{
    if( isBlank(s) || !isHex(s)) 
        return true;
    else
        return false;
}

function filter_enter(e)
{
    var key = window.event ? e.keyCode : e.which;
    
    if(13 == key)
        return true;
    else
    	return false;
}
function IsNvalidMaskFormat(flag, mask, find1)
{   
	  var i;
    for(i=0;i<8;i++)
	  {
	  	if(mask&flag)
	  		find1=1;
	  	else
	  		if(find1) return true;
	  	
	  	flag<<=1;
	  }	
}

function IsNvalidRouteNetmask(ip1, ip2, ip3, ip4)
{
	   var flag,mask,find1=0;
	   
	   if(!(isInteger(ip1,0,255,false))) return true;
	   if(!(isInteger(ip2,0,255,false))) return true;
	   if(!(isInteger(ip3,0,255,false))) return true;
	   if(!(isInteger(ip4,0,255,false))) return true;
	   
     flag=0x1;
	   mask=parseInt(ip4);
	   IsNvalidMaskFormat(flag, mask, find1);
	     
	   mask=parseInt(ip3);
     IsNvalidMaskFormat(flag, mask, find1);
     
	   mask=parseInt(ip2);
     IsNvalidMaskFormat(flag, mask, find1);
	   
	   mask=parseInt(ip1);
     IsNvalidMaskFormat(flag, mask, find1);
      	    
     return false;
}

function IsNvalidRouteNetwork(ip1, ip2, ip3, ip4)
{
	  var ip_1;
	  
	  if(!(isInteger(ip1,1,254,false))) return true;
	  if(!(isInteger(ip2,0,255,false))) return true;
	  if(!(isInteger(ip3,0,255,false))) return true;
	  if(!(isInteger(ip4,0,254,false))) return true;
	  
	  if(parseInt(ip1)==127) return true;
	  
	  ip_1=parseInt(ip1,10);
	  if((ip_1&240)==224) return true;
	  if((ip_1&248)==240) return true;
	
   	return false;
}

function IsNvalidRouteGateway(ip1, ip2, ip3, ip4)
{
	  var gw;
	  if(!(isInteger(ip1,1,254,false))) return true;
	  if(!(isInteger(ip2,0,255,false))) return true;
	  if(!(isInteger(ip3,0,255,false))) return true;
	  if(!(isInteger(ip4,1,254,false))) return true;
	  if(parseInt(ip1)==127 && parseInt(ip2)==0 && parseInt(ip3)==0 && parseInt(ip4)==1) return true;
    
	  gw=parseInt(ip1,10);
	  if((gw&240)==224) return true;
	  if((gw&248)==240) return true;
	
   	return false;
}

/* return value is mapping network class */
/* 0: ok;      1: Class A;               */
/* 2: Class B; 3: Class C                */

function IsNvalidRouteEntry(sr_ipaddr, sr_netmask)
{
    var i;
    var flag=0;
    //class A:
    if(isInteger(sr_ipaddr[0],1,127,false))
    {    	  
        if((sr_ipaddr[1]==0)&&(sr_ipaddr[2]==0)&&(sr_ipaddr[3]==0))
        {
            if((sr_netmask[0]==255)&&(sr_netmask[1]==0)
               &&(sr_netmask[2]==0)&&(sr_netmask[3]==0))	
               return 0;
            else
            	 return 1;
        }
        else
        {
        	  if(sr_netmask[0]==255)	
               return 0;
            else
            	 return 1;
        }    
    }
    //class B:
    else if(isInteger(sr_ipaddr[0],128,191,false))
    {
        if((sr_ipaddr[2]==0)&&(sr_ipaddr[3]==0))
        {
            if((sr_netmask[0]==255)&&(sr_netmask[1]==255)
               &&(sr_netmask[2]==0)&&(sr_netmask[3]==0))	
               return 0;
            else
            	 return 2;
        }
        else
        {
        	  if((sr_netmask[0]==255)&&(sr_netmask[1]==255))	
               return 0;
            else
            	 return 2;
        }    
    }
    //class C:
    else if(isInteger(sr_ipaddr[0],192,223,false))
    {
        if((sr_ipaddr[3]==0))
        {
            if((sr_netmask[0]==255)&&(sr_netmask[1]==255)
               &&(sr_netmask[2]==255)&&(sr_netmask[3]==0))	
               return 0;
            else
            	 return 3;
        }
        else
        {
        	  if((sr_netmask[0]==255)&&(sr_netmask[1]==255)&&(sr_netmask[2]==255))	
               return 0;
            else
            	 return 3;
        }    
    } 
    else
        return 0; 	
}




/*firmware acl*/
function StripURL(data)
{
	data = data.replace(/http:\/\//g, "");
	data = data.replace(/https:\/\//g, "");
	//data = data.replace(/\//g, "");
	return data;
	 
}

function CheckTextandUrl(data)
{
	var localname=data.toLowerCase();
	for(i=0;i<localname.length;i++)
	{
		var token=localname.charAt(i);
		if(token=='`' || token=='~' || token=='!' || token=='@' || token=='#'
		|| token=='$' || token=='%' || token=='^' || token=='&' || token=='*'
		|| token=='(' || token==')' || token=='=' || token=='+' || token=='['
		|| token==']' || token=='{' || token=='}' || token=='\\' || token=='|'
		|| token==';' || token==':' || token=='\'' || token=='\"' || token=='<'
		|| token=='>' || token=='?' || token ==' '|| token ==','||token=='/')
		{
 			return 0;
		} 
	}
	return 1;
}
function CheckLegalChar(data)
{
	for (var i=0;i<data.length;i++)
	{
	 	if (((data.charAt(i)=='.')||(data.charAt(i)=='-')))	
	 		continue;	
		if (!((data.charAt(i)>='0') && (data.charAt(i)<='9')) &&
			!((data.charAt(i)>='a') && (data.charAt(i)<='z')) &&
			!((data.charAt(i)>='A') && (data.charAt(i)<='Z'))
			)
		{
			return 0;
		}
	}
	return 1;
}



function CheckKeyword(data)
{
    if (data=="")
				return 1;
		if (!(CheckLegalChar(data)))
				return 0;	
	  if(!CheckTextandUrl(data))
			  return 0;	
    return 1;
			 				
}


function CheckUrl(data)
{   
    data=StripURL(data);  
		if (data=="")
				return 1;
		if(!CheckTextandUrl(data))
		    return 0;
		return 1;
        	
}


var fieldTester = {
    'router_password'               :   /.*/,
    'local_domain'                  :   /^[^ !"#$%&'()*+,\/:;<=>?@\[\\\]^`{|}~]*$/,
    'dynamic_hostname'              :   /.*/,
    'pppoe_username'                :   /.*/,
    'pppoe_password'                :   /.*/,
    'pppoe_service_name'            :   /.*/,
    'pptp_account'                  :   /.*/,
    'pptp_password'                 :   /.*/,
    'pptp_hostname'                 :   /.*/,
    'pptp_connection_id'            :   /.*/,
    'bpa_username'                  :   /.*/,
    'bpa_password'                  :   /.*/,
    'ssid'                          :   /.*/,
    '64bit_wep_key'                 :   /^[0-9A-Fa-f]+$/,
    '128bit_wep_key'                :   /^[0-9A-Fa-f]+$/,
    '64bit_wep_passphrase'          :   /^[^!"#$%&'()*+,-.\/:;<=>?@\[\\\]^`{|}~]+$/,
    '128bit_wep_passphrase'         :   /^[^!"#$%&'()*+,-.\/:;<=>?@\[\\\]^`{|}~]+$/,
    'wpa_psk_key'                   :   /.*/,
    'guest_ssid'                    :   /^[^!"#$%&'()*,-.\/:;<=>?@\[\\\]^`{|}~]+$/,
    'virtual_servers_description'   :   /.*/,
    'pptp_server_domain'             :    /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/
}

function textFieldValidate(field, value)
{
    if (fieldTester[field])
        return fieldTester[field].test(value);
    else {
        alert("textFieldValidate: field name not exist");
        return true;
    }
}

function filter_num(e)
{
    var key = window.event ? e.keyCode:e.which;
    var keychar = String.fromCharCode(key);
    reg = /\d/;
    
    if(e.ctrlKey)
        return true;
        
    /* enter, backspace, tab, control on IE / firefox, control on MAC */
    if(13 == key || 8 == key || 9 == key || 0 == key || key > 255)
        return true;
    
    return reg.test(keychar);
}

function filter_num2(str) /* true: all numbers,false: exist at least 1 un-number */
{
    var i;
    reg = /\d/;
    
    for(i=0;i<str.length;i++)
    {
        if(reg.test(str.charAt(i)) == false)
            return false;
    }

    return true;
}

