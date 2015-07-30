	function addSetToggleClickHandler(devName) {
		var devIDs = ["#" + devName + "_Toggle", "#" + devName + "_BlockedImg", "#" + devName + "_BlockedText", "#" + devName + "_UnblockedImg", "#" + devName + "_UnblockedText", "#" + devName + "_MAC", "#" + devName + "Name", "#" + devName + "_ToggleSched", "#" + devName + "_SNFrom", "#" + devName + "_SNTo", "#" + devName + "_WEFrom", "#" + devName + "_WETo", "#" + devName + "_clockIcon"];
		$(devIDs[0]).click(function(e) {
			e.preventDefault();
			
			var str="";
			if( devName.indexOf("On")>= 0 )
				str ="1+"; 
			else
				str ="0+";
			
			str += $(devIDs[6]).html()+"+";
			str += $(devIDs[5]).html()+"+";
			
			if($(devIDs[7]).attr("checked") == "checked")
				str += "1+";   //checked
			else
				str += "0+";    //unchecked
	
			if ($(devIDs[1]).is(":hidden")) {  //unblock->block, manualy block
				$(devIDs[1]).show();
				$(devIDs[2]).css('visibility', 'visible');
				$(devIDs[3]).hide();
				$(devIDs[4]).css('visibility', 'hidden');
				
				var obj = new sdc_set_table();
				obj.set_field("RequestID", Math.floor(Math.random() * 10000));
				obj.set_field("LockStatus", "manu_block");
				
				str += "3+";    //manu blocked
				
			} else {   //block->unblock, manualy unblock
				$(devIDs[1]).hide();
				$(devIDs[2]).css('visibility', 'hidden');
				$(devIDs[3]).show();
				$(devIDs[4]).css('visibility', 'visible');
					
				var obj = new sdc_set_table();
				obj.set_field("RequestID", Math.floor(Math.random() * 10000));
				obj.set_field("LockStatus", "manu_unblock");
				
				str += "2+";   //manu unblocked
			}
			str += "1111111-";
			
			if( $(devIDs[9]).get(0).selectedIndex == 23)
				str += $(devIDs[8]).get(0).selectedIndex+":0:0:"+($(devIDs[9]).get(0).selectedIndex)+":59:59-";
			else
				str += $(devIDs[8]).get(0).selectedIndex+":0:0:"+($(devIDs[9]).get(0).selectedIndex+1)+":0:0-";
			
			if( $(devIDs[11]).get(0).selectedIndex == 23)
				str += $(devIDs[10]).get(0).selectedIndex+":0:0:"+($(devIDs[11]).get(0).selectedIndex)+":59:59|";
			else
				str += $(devIDs[10]).get(0).selectedIndex+":0:0:"+($(devIDs[11]).get(0).selectedIndex+1)+":0:0|";

			obj.set_field("DevMac",$(devIDs[5]).html());
			obj.set_field("Dev_List_mannu",str);
			
			$.post("BelkinAPI/SetBlockStatus", obj.row, function(data) {
		
			}, "json")
			.error(function(){
				//console.log("timeout for SetLockStatus");
			});
		});
	}

		// Add function: Upon save, show a little message
	
	function addSaveHandler(devName) {
		
		var devIDs = ["#" + devName + "_save", "#" + devName + "_details", "#" + devName + "Name", "#" + devName + "NameInput", "#" + devName + "_caret", "#" + devName + "_DetailsToggle", "#" + devName + "_msgSaved", "#" + devName + "_MAC", "#" + devName + "_ToggleSched", "#" + devName + "_SNFrom", "#" + devName + "_SNTo", "#" + devName + "_WEFrom", "#" + devName + "_WETo", "#" + devName + "_BlockedImg", "#" + devName + "_BlockedText", "#" + devName + "_UnblockedImg", "#" + devName + "_UnblockedText", "#" + devName + "_clockIcon", "#" + devName + "_msgSavedContent"];
						
		$(devIDs[0]).click(function(e) {
			
			//alert("ODM TODO: update the clock icon, block/unblock toggle, and save message (DEMO is not accurate anymore!)");
			
			$(devIDs[2]).html( $(devIDs[3]).val() );
			$(devIDs[2]).show();
			$(devIDs[3]).hide();
			
			$(devIDs[4]).rotate({animateTo:0, duration:600});

			// Show a little message to say changes were saved
			$(devIDs[1]).slideUp("slow", function () {
			  $(devIDs[6]).slideDown("slow", function () {
				$(devIDs[6]).animate({opacity: 1}, 3000, function () {
					$(devIDs[6]).slideUp("slow");
				});
			  });
			});
			
			//on/off_line+DevUserName+Mac Address+EnableSche+Unblocked/Blocked_status+weekdays-SNFrom£º00:00£ºSNTo£º00:00-WEFrom£º00:00£ºWETo£º00:00|
			var str="";
			if( devName.indexOf("On")>= 0 )		
				str ="1+";  	
			else			
				str ="0+";
			
			str += $(devIDs[3]).val()+"+";
			str += $(devIDs[7]).html()+"+";
			
			if($(devIDs[8]).attr("checked") == "checked")
			{	
				str += "1+";   //checked
				str += "0+";   //->default set Unblocked, need to be parsed in CGI, in schedule time or not
			}
			else
			{	
				str += "0+";    //unchecked
				str += "0+";    //->Unblocked
			}
			str += "1111111-";
			
			if( $(devIDs[10]).get(0).selectedIndex == 23)
				str += $(devIDs[9]).get(0).selectedIndex+":0:0:"+($(devIDs[10]).get(0).selectedIndex)+":59:59-";
			else
				str += $(devIDs[9]).get(0).selectedIndex+":0:0:"+($(devIDs[10]).get(0).selectedIndex+1)+":0:0-";
			
			if( $(devIDs[12]).get(0).selectedIndex == 23)
				str += $(devIDs[11]).get(0).selectedIndex+":0:0:"+($(devIDs[12]).get(0).selectedIndex)+":59:59|";
			else
				str += $(devIDs[11]).get(0).selectedIndex+":0:0:"+($(devIDs[12]).get(0).selectedIndex+1)+":0:0|";

			var obj = new sdc_set_table();
			obj.set_field("RequestID", Math.floor(Math.random() * 10000));
			obj.set_field("Dev_List",str);
			obj.set_field("DevMac",$(devIDs[7]).html());		
			$.post("BelkinAPI/PIC_Save", obj.row, function(data) {
				if( data.Checked == "true" )   
				{
					if(data.In_schedule == "true") //unblock
					{
						$(devIDs[13]).hide();
						$(devIDs[14]).css('visibility', 'hidden');
						$(devIDs[15]).show();
						$(devIDs[16]).css('visibility', 'visible'); 
					}
					else
					{
						$(devIDs[13]).show();
						$(devIDs[14]).css('visibility', 'visible');
						$(devIDs[15]).hide();
						$(devIDs[16]).css('visibility', 'hidden'); 
					}
					$(devIDs[17]).css('visibility', 'visible');
				}
				else  //uncheck, unblock
				{
					$(devIDs[13]).hide();
					$(devIDs[14]).css('visibility', 'hidden');
					$(devIDs[15]).show();
					$(devIDs[16]).css('visibility', 'visible'); 
					
					$(devIDs[17]).css('visibility', 'hidden');
				}
				
				if( !$(devIDs[3]).val() && data.Default_Name != "None" )
				{	
					$(devIDs[2]).html(data.Default_Name);
					$(devIDs[3]).val(data.Default_Name);
				}
				$(devIDs[18]).html($(devIDs[3]).val()+" Saved");

				$(devIDs[0]).attr('disabled',true);
			}, "json")
			.error(function(){
				//console.log("timeout for PIC Save");
			});
						
			// disable the button until something else changes
			//$(devIDs[0]).addClass("disabled");
			//$(devIDs[0]).attr('disabled',true);
		});
		
	}
	
	function addFormChangeHandler(devName) {
		var devIDs = ["#" + devName + "_save", "#" + devName + "_name", "#" + devName + "NameInput", "#" + devName + "_SNFrom", "#" + devName + "_SNTo", "#" + devName + "_WEFrom", "#" + devName + "_WETo", "#" + devName];
/*		$(devIDs[2]).change(function(e) {
			// Enable the save button when something changes.
			//$(devIDs[0]).removeClass("disabled");
			$(devIDs[0]).removeAttr("disabled");
		});  */
		$(devIDs[2]).keyup(function(e) {
			$(devIDs[0]).removeAttr("disabled");
		});
		$(devIDs[7]).keydown(function(e) {
			var curKey = e.which;
			if(curKey == 13 && $(devIDs[0]).attr("disabled") != "disabled")
			{
				$(devIDs[0]).click();
				return false;
			}
		});
		$(devIDs[3]).change(function(e) {
			//alert("ODM TODO: Update the \"To\" to be [From] + 1");
			// Enable the save button when something changes.
			//$(devIDs[0]).removeClass("disabled");
			$(devIDs[0]).removeAttr("disabled");
			$(devIDs[4]).get(0).selectedIndex = $(devIDs[3]).get(0).selectedIndex;
		});
		$(devIDs[5]).change(function(e) {
			//alert("ODM TODO: Update the \"To\" to be [From] + 1");
			// Enable the save button when something changes.
			//$(devIDs[0]).removeClass("disabled");
			$(devIDs[0]).removeAttr("disabled");
			$(devIDs[6]).get(0).selectedIndex = $(devIDs[5]).get(0).selectedIndex;
		});
		$(devIDs[4]).change(function(e) {
			// Enable the save button when something changes.
			//$(devIDs[0]).removeClass("disabled");
			$(devIDs[0]).removeAttr("disabled");
		});
		$(devIDs[6]).change(function(e) {
			// Enable the save button when something changes.
			//$(devIDs[0]).removeClass("disabled");
			$(devIDs[0]).removeAttr("disabled");
		});
	}
	
	function addSetToggleSchedHandler(devName) {
		var devIDs = ["#" + devName + "_ToggleSched", "#" + devName + "_details>table", "#" + devName + "_details>input", "#" + devName + "_save"];
	
		if ($(devIDs[0]).attr("checked") == "checked") {	
			$(devIDs[1]).removeClass("PICInactive");
		} else {
			$(devIDs[1]).addClass("PICInactive");
		}
		
		$(devIDs[0]).click(function(e) {
			if (this.checked) {	
				$(devIDs[1]).removeClass("PICInactive");
			} else {
				$(devIDs[1]).addClass("PICInactive");
			}
			// Enable the save button when something changes.
			//$(devIDs[3]).removeClass("disabled");
			  $(devIDs[3]).removeAttr("disabled");
			//alert("ODM TODO: Disable/Enable the form controls");
		});
	}
	
	function addShowDetailsHandler(devName) {
		var devIDs = ["#" + devName + "_DetailsShow", "#" + devName + "_details", "#" + devName + "Name", "#" + devName + "NameInput", "#" + devName + "_caret", "#" + devName + "_DetailsToggle"];
		
		$(devIDs[0]).click(function(e) {
			e.preventDefault();
			if ($(devIDs[1]).is(":hidden")) {
				$(devIDs[2]).hide();
				$(devIDs[3]).show();
				$(devIDs[1]).slideDown();
				
				$(devIDs[4]).rotate({animateTo:-180, duration:600});
			}
		});
		$(devIDs[5]).click(function(e) {
			e.preventDefault();

			if ($(devIDs[1]).is(":hidden")) {	
				$(devIDs[2]).hide();
				$(devIDs[3]).show();
				$(devIDs[1]).slideDown();
				
				$(devIDs[4]).rotate({animateTo:-180, duration:600});
			} else {	
				$(devIDs[2]).show();
				$(devIDs[3]).hide();
				$(devIDs[1]).slideUp();
				
				$(devIDs[4]).rotate({animateTo:0, duration:600});
			}
		});
	}	
	
	function addSelectHandler(devName, SNFROM, SNTO, WEFROM, WETO) {
		var devIDs = ["#" + devName + "_SNFrom", "#" + devName + "_SNTo", "#" + devName + "_WEFrom", "#" + devName + "_WETo"];
				
		$(devIDs[0]).get(0).selectedIndex = parseInt(SNFROM);
		$(devIDs[1]).get(0).selectedIndex = parseInt(SNTO)-1;	
		$(devIDs[2]).get(0).selectedIndex = parseInt(WEFROM);
		$(devIDs[3]).get(0).selectedIndex = parseInt(WETO)-1;
	}	
	
	
 function addDevice(ul_id,devName, devUserName, MacAddr, timer, lock_status, SNFROM, SNTO, WEFROM, WETO){
	eval( "str = document.getElementById('"+ ul_id +"')").outerHTML +=
"						<li class=\"PICEntry\" style=\"list-style:none;\"><div name=\"" + devName + "\" id=\"" + devName + "\"  style=\"display:none\">" +
"							<a id=\"" + devName + "_Toggle\" class=\"PICBlockToggle\" href=\"javascript:void(0);\">" +
"								<div style=\"display:inline-block\">" +
"									<!-- One of these should be visibility:hidden -->" +
"									<!-- visibility:hidden is important so that spacing is maintained for translations and all other devices -->" +
"									<span id=\"" + devName + "_UnblockedText\""+(lock_status=="1"||lock_status=="3"?"style=\"visibility:hidden\"":" ")+"class=\"PICBlockLabel\" tid=\"PIC-unblocked\">"+ translate("PIC-unblocked") +"</span>" +
"									<br/>" +
"									<span id=\"" + devName + "_BlockedText\""+(lock_status=="1"||lock_status=="3"?" ":"style=\"visibility:hidden\"")+ "class=\"PICBlockLabel\" tid=\"PIC-blocked\">"+ translate("PIC-blocked") +"</span>" +
"								</div>" +
"								<!-- Make one more hidden string to make sure the items are spaced properly when translations are longer than \"blocked\" -->" +
"								<span class=\"PICBlockLabel\" style=\"position:relative; visibility: hidden;\" tid=\"PIC-unblocked\">"+ translate("PIC-unblocked") +"</span>" +
"								<br/>" +
"								<!-- One of these should be display:none -->" +
"								<img id=\"" + devName + "_BlockedImg\""+(lock_status=="1"||lock_status=="3"?" ":" style=\"display:none\"")+"class=\"PICBlockToggleImg\" src=\"../images/btn-Blocked.png\" alt='"+ translate("PIC-blocked") +"'>" +
"								<img id=\"" + devName + "_UnblockedImg\""+(lock_status=="1"||lock_status=="3"?"style=\"display:none\"":" ")+"class=\"PICBlockToggleImg\" src=\"../images/btn-Unblocked.png\" alt='"+ translate("PIC-unblocked") +"'>" +
"                           <span class=\"\" style=\"color: #000000; display: none;\" id=\"" + devName + "_blocked_word\" tid=\"PIC-blocked_word\">"+ translate("PIC-blocked") +"</span>" +
"							</a>" +
"							<div class=\"PICName radius6\">" +
"								<div class=\"PICNameDetail\">" +
"									<!-- Clock is only shown if the timer is active -->" +
"									<img id=\"" + devName+ "_clockIcon\" src=\"../images/Icon_clock.png\"" + (timer=="1"?" ":" style=\"visibility:hidden\"") + "class=\"PICStatusIcon\" alt=\"Clock\"></img>" +
"									<a class=\"PICDevToggle\" href=\"javascript:void(0);\" id=\"" + devName + "_DetailsToggle\" style=\"display:block;\">" +
"										<img src=\"../images/btn-Caret2_down.png\" class=\"PICCaret\" id=\"" + devName + "_caret\" alt=\"Caret\"></img>								" +
"									</a>" +
"									<!-- Either the " + devName + "Name or " + devName + "NameInput should be display:none -->" +
"									<input style=\"display:none\" type=\"text\" id=\"" + devName + "NameInput\" value=\"" + devUserName + "\"></input>" +
"									<span class=\"PICDevName\" id=\"" + devName + "Name\">" + devUserName + "</span>" +
"									<br /><span id=\"" + devName + "_MAC\">" + MacAddr + "</span>" +
"								</div>" +
"								<!-- Begin details of this device, to be shown if this item was clicked -->" +
"								<div class=\"PICDetails\" id=\"" + devName + "_details\" style=\"display:none\">" +
"									<label for=\"" + devName + "_ToggleSched\">" +
"										<!-- The checkbox is initially checked if the schedules are active.  By default, a device is unchecked. -->" +
"										<input type=\"checkbox\" name=\"" + devName + "_ToggleSched\" id=\"" + devName + "_ToggleSched\" " + (timer==true?"checked=\"checked\"":" ") + "><span class=\"PICAllowSched lspace5\" tid=\"PIC_S1t0006\">"+ translate("PIC_S1t0006") +"</span> " +
"									</label>" +
"									<table class=\"PICSel\">" +
"										<tr>" +
"											<th colspan=\"2\">" +
"												<h6 class=\"PICHeader\"><span tid=\"PIC_S2t003\">"+ translate("PIC_S2t003") +"</span> <span class=\"info\" tid=\"PIC_S2t005\">"+ translate("PIC_S2t005") +"</span>:</h6>" +
"											</th>" +
"										</tr>" +
"										<tr>" +
"											<td class=\"right-align\">" +
"												<span class=\"PICSelHeader\" tid=\"gtFrom\">"+ translate("gtFrom") +"</span>			" +
"											</td>" +
"											<td>" +
"												<select name=\"" + devName + "_SNFrom\" id=\"" + devName + "_SNFrom\">" +
"													<!-- 24 items: Midnight to 11:00 pm, Midnight default -->" +
"													<option selected tid=\"gtmidnight\">"+ translate("gtmidnight") +"</option>" +
"													<option tid=\"gt1am\">"+ translate("gt1am") +"</option>" +
"													<option tid=\"gt2am\">"+ translate("gt2am") +"</option>" +
"													<option tid=\"gt3am\">"+ translate("gt3am") +"</option>" +
"													<option tid=\"gt4am\">"+ translate("gt4am") +"</option>" +
"													<option tid=\"gt5am\">"+ translate("gt5am") +"</option>" +
"													<option tid=\"gt6am\">"+ translate("gt6am") +"</option>" +
"													<option tid=\"gt7am\">"+ translate("gt7am") +"</option>" +
"													<option tid=\"gt8am\">"+ translate("gt8am") +"</option>" +
"													<option tid=\"gt9am\">"+ translate("gt9am") +"</option>" +
"													<option tid=\"gt10am\">"+ translate("gt10am") +"</option>" +
"													<option tid=\"gt11am\">"+ translate("gt11am") +"</option>" +
"													<option tid=\"gtNoon\">"+ translate("gtNoon") +"</option>" +
"													<option tid=\"gt1pm\">"+ translate("gt1pm") +"</option>" +
"													<option tid=\"gt2pm\">"+ translate("gt2pm") +"</option>" +
"													<option tid=\"gt3pm\">"+ translate("gt3pm") +"</option>" +
"													<option tid=\"gt4pm\">"+ translate("gt4pm") +"</option>" +
"													<option tid=\"gt5pm\">"+ translate("gt5pm") +"</option>" +
"													<option tid=\"gt6pm\">"+ translate("gt6pm") +"</option>" +
"													<option tid=\"gt7pm\">"+ translate("gt7pm") +"</option>" +
"													<option tid=\"gt8pm\">"+ translate("gt8pm") +"</option>" +
"													<option tid=\"gt9pm\">"+ translate("gt9pm") +"</option>" +
"													<option tid=\"gt10pm\">"+ translate("gt10pm") +"</option>" +
"													<option tid=\"gt11pm\">"+ translate("gt11pm") +"</option>" +
"												</select>" +
"											</td>" +
"										</tr>" +
"										<tr>" +
"											<td class=\"right-align\">" +
"												<span class=\"PICSelHeader\" tid=\"gtTo\">"+ translate("gtTo") +"</span>			" +
"											</td>" +
"											<td>" +
"												<select name=\"" + devName + "_SNTo\" id=\"" + devName + "_SNTo\">" +
"													<!-- 24 items: Start at [From + 1h] -->" +
"													<!-- ODM todo: Update this whenever FROM changes -->" +
"													<option tid=\"gt1amNextDay\">"+ translate("gt1amNextDay") +"</option>" +
"													<option tid=\"gt2am\">"+ translate("gt2am") +"</option>" +
"													<option tid=\"gt3am\">"+ translate("gt3am") +"</option>" +
"													<option tid=\"gt4am\">"+ translate("gt4am") +"</option>" +
"													<option tid=\"gt5am\">"+ translate("gt5am") +"</option>" +
"													<option tid=\"gt6am\">"+ translate("gt6am") +"</option>" +
"													<option tid=\"gt7am\">"+ translate("gt7am") +"</option>" +
"													<option tid=\"gt8am\">"+ translate("gt8am") +"</option>" +
"													<option tid=\"gt9am\">"+ translate("gt9am") +"</option>" +
"													<option tid=\"gt10am\">"+ translate("gt10am") +"</option>" +
"													<option tid=\"gt11am\">"+ translate("gt11am") +"</option>" +
"													<option tid=\"gtNoon\">"+ translate("gtNoon") +"</option>" +
"													<option tid=\"gt1pm\">"+ translate("gt1pm") +"</option>" +
"													<option tid=\"gt2pm\">"+ translate("gt2pm") +"</option>" +
"													<option tid=\"gt3pm\">"+ translate("gt3pm") +"</option>" +
"													<option tid=\"gt4pm\">"+ translate("gt4pm") +"</option>" +
"													<option tid=\"gt5pm\">"+ translate("gt5pm") +"</option>" +
"													<option tid=\"gt6pm\">"+ translate("gt6pm") +"</option>" +
"													<option tid=\"gt7pm\">"+ translate("gt7pm") +"</option>" +
"													<option tid=\"gt8pm\">"+ translate("gt8pm") +"</option>" +
"													<option tid=\"gt9pm\">"+ translate("gt9pm") +"</option>" +
"													<option tid=\"gt10pm\">"+ translate("gt10pm") +"</option>" +
"													<option tid=\"gt11pm\">"+ translate("gt11pm") +"</option>" +
"													<option selected tid=\"gtmidnight\">"+ translate("gtmidnight") +"</option>" +
"												</select>" +
"											</td>" +
"										</tr>" +
"									</table>" +
"									<table class=\"PICSel spacer7\">" +
"										<tr>" +
"											<th colspan=\"2\">" +
"												<h6 class=\"PICHeader\"><span tid=\"PIC_S2t004\">"+ translate("PIC_S2t004") +"</span> <span class=\"info\" tid=\"PIC_S2t006\">"+ translate("PIC_S2t006") +"</span>:</h6>" +
"											</th>" +
"										</tr><tr>" +
"											<td class=\"right-align\">" +
"												<span class=\"PICSelHeader\" tid=\"gtFrom\">"+ translate("gtFrom") +"</span>			" +
"											</td>" +
"											<td>" +
"												<select name=\"" + devName + "_WEFrom\" id=\"" + devName + "_WEFrom\">" +
"													<!-- 24 items: Midnight to 11:00 pm, Midnight default -->" +
"													<option selected tid=\"gtmidnight\">"+ translate("gtmidnight") +"</option>" +
"													<option tid=\"gt1am\">"+ translate("gt1am") +"</option>" +
"													<option tid=\"gt2am\">"+ translate("gt2am") +"</option>" +
"													<option tid=\"gt3am\">"+ translate("gt3am") +"</option>" +
"													<option tid=\"gt4am\">"+ translate("gt4am") +"</option>" +
"													<option tid=\"gt5am\">"+ translate("gt5am") +"</option>" +
"													<option tid=\"gt6am\">"+ translate("gt6am") +"</option>" +
"													<option tid=\"gt7am\">"+ translate("gt7am") +"</option>" +
"													<option tid=\"gt8am\">"+ translate("gt8am") +"</option>" +
"													<option tid=\"gt9am\">"+ translate("gt9am") +"</option>" +
"													<option tid=\"gt10am\">"+ translate("gt10am") +"</option>" +
"													<option tid=\"gt11am\">"+ translate("gt11am") +"</option>" +
"													<option tid=\"gtNoon\">"+ translate("gtNoon") +"</option>" +
"													<option tid=\"gt1pm\">"+ translate("gt1pm") +"</option>" +
"													<option tid=\"gt2pm\">"+ translate("gt2pm") +"</option>" +
"													<option tid=\"gt3pm\">"+ translate("gt3pm") +"</option>" +
"													<option tid=\"gt4pm\">"+ translate("gt4pm") +"</option>" +
"													<option tid=\"gt5pm\">"+ translate("gt5pm") +"</option>" +
"													<option tid=\"gt6pm\">"+ translate("gt6pm") +"</option>" +
"													<option tid=\"gt7pm\">"+ translate("gt7pm") +"</option>" +
"													<option tid=\"gt8pm\">"+ translate("gt8pm") +"</option>" +
"													<option tid=\"gt9pm\">"+ translate("gt9pm") +"</option>" +
"													<option tid=\"gt10pm\">"+ translate("gt10pm") +"</option>" +
"													<option tid=\"gt11pm\">"+ translate("gt11pm") +"</option>" +
"												</select>" +
"											</td>" +
"										</tr>" +
"										<tr>" +
"											<td class=\"right-align\">" +
"												<span class=\"PICSelHeader\" tid=\"gtTo\">"+ translate("gtTo") +"</span>			" +
"											</td>" +
"											<td>" +
"												<select name=\"" + devName + "_WETo\" id=\"" + devName + "_WETo\">" +
"													<!-- 24 items: Start at [From + 1h] -->" +
"													<option tid=\"gt1amNextDay\">"+ translate("gt1amNextDay") +"</option>" +
"													<option tid=\"gt2am\">"+ translate("gt2am") +"</option>" +
"													<option tid=\"gt3am\">"+ translate("gt3am") +"</option>" +
"													<option tid=\"gt4am\">"+ translate("gt4am") +"</option>" +
"													<option tid=\"gt5am\">"+ translate("gt5am") +"</option>" +
"													<option tid=\"gt6am\">"+ translate("gt6am") +"</option>" +
"													<option tid=\"gt7am\">"+ translate("gt7am") +"</option>" +
"													<option tid=\"gt8am\">"+ translate("gt8am") +"</option>" +
"													<option tid=\"gt9am\">"+ translate("gt9am") +"</option>" +
"													<option tid=\"gt10am\">"+ translate("gt10am") +"</option>" +
"													<option tid=\"gt11am\">"+ translate("gt11am") +"</option>" +
"													<option tid=\"gtNoon\">"+ translate("gtNoon") +"</option>" +
"													<option tid=\"gt1pm\">"+ translate("gt1pm") +"</option>" +
"													<option tid=\"gt2pm\">"+ translate("gt2pm") +"</option>" +
"													<option tid=\"gt3pm\">"+ translate("gt3pm") +"</option>" +
"													<option tid=\"gt4pm\">"+ translate("gt4pm") +"</option>" +
"													<option tid=\"gt5pm\">"+ translate("gt5pm") +"</option>" +
"													<option tid=\"gt6pm\">"+ translate("gt6pm") +"</option>" +
"													<option tid=\"gt7pm\">"+ translate("gt7pm") +"</option>" +
"													<option tid=\"gt8pm\">"+ translate("gt8pm") +"</option>" +
"													<option tid=\"gt9pm\">"+ translate("gt9pm") +"</option>" +
"													<option tid=\"gt10pm\">"+ translate("gt10pm") +"</option>" +
"													<option tid=\"gt11pm\">"+ translate("gt11pm") +"</option>" +
"													<option selected tid=\"gtmidnight\">"+ translate("gtmidnight") +"</option>" +
"												</select>" +
"											</td>" +
"										</tr>" +
"									</table>" +
"									<div><p class=\"PICOtherTimes\" tid=\"gtPICOtherTimes\">"+ translate("gtPICOtherTimes") +"</p>" +
" 			<!-- ODM TODO: Disable the Save btn until something changes in the device -->" +
"									<input type=\"button\" id=\"" + devName + "_save\" class=\"PICSave button nice radius large green btnfix\" tid=\"gtSave\" disabled value=\""+ Save + "\"></div>" +
"								</div>" +
"								<!-- End details -->" +
"							</div>" +
"							<div id=\"" + devName + "_msgSaved\" class=\"PICName radius6 PICMsg\" style=\"display:none\">" +
"								<span id=\"" + devName + "_msgSavedContent\" tid=\"gtSaved\">" + devUserName + " Saved</span>" +
"							</div>" +
"							</div>" +
"						</li>";		
	// Add the click handlers too.
	addSelectHandler(devName, SNFROM, SNTO, WEFROM, WETO);
	addShowDetailsHandler(devName);
	addSetToggleSchedHandler(devName);
	addSetToggleClickHandler(devName);
	addSaveHandler(devName);
	addFormChangeHandler(devName);
	$(document).ready(function() {
		// Set device initial state
		var devIDs = ["#" + devName + "_details", "#" + devName + "_caret", "#" + devName + "_ToggleSched"];
		//$(devIDs[1]).rotate(180);
	});
}
