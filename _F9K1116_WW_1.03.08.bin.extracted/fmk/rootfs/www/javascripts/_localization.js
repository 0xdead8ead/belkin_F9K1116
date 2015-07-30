// Lookup a string from the current dictionary
function translate(key) {
	return langDictionary[key];
}

// Apply the loaded dictionary to the current page
function localize() {
	$("*[tid]").each(function (index) {
		var str = translate($(this).attr("tid"));
		// Save any strings that are variables in the middle of this element
		var langLocalDict = {};
		$(this).find("*[tid]").each( function(index) {
			langLocalDict[$(this).attr("tid")] = $(this).html();
			//alert("$(this).attr(\"tid\")\" : \"$(this).html()");
		});

		if ($(this).is("button")) {
			
			$(this).name(str);	// Button's use names instead of html
		} else if ($(this).is("input")) {
			
			$(this).attr("placeholder", str);	// input placeholder's use names instead of html
		} else {
			
			$(this).html(str);
		};
		
		// Restore any variables in the middle of this element
		$(this).find("*[tid]").each( function(index) {
			$(this).html(langLocalDict[$(this).attr("tid")]);
		});
	});
	//Alt="#" list translation update
	$("[src='images/loading.gif']").attr("alt", translate("alt=\"Loading\"")); 
	$("[src='images/troubleshooting/restartRouter.png']").attr("alt", translate("alt=\"Restart Router\"")); 
	$("[src='images/troubleshooting/checkWires.png']").attr("alt", translate("alt=\"Check Wires\"")); 
	$("[src='images/troubleshooting/checkPhoneFilterSplitter.png']").attr("alt", translate("alt=\"Check Phone Connection\"")); 
	$("[src='images/troubleshooting/checkWANPM.png']").attr("alt", translate("alt=\"Check WAN Connection\"")); 
	$("[src='../images/Checkmark.png']").attr("alt", translate("alt=\"Checkmark\"")); 
	$("[src='images/icon-Change_pencil.png']").attr("alt", translate("alt=\"Change\"")); 
	$("[src='images/icon-Print_neg.png']").attr("alt", translate("alt=\"Print\"")); 
	$("[src='../SetupFiles/images/expando.png']").attr("alt", translate("alt=\"Expand\"")); 
	$("[src='images/btn-justCaret-green-up.png']").attr("alt", translate("alt=\"Caret\"")); 
	$("[src='images/Scissors-lrg.png']").attr("alt", translate("alt=\"Cut\"")); 
	$("[src='images/Browser-lrg.png']").attr("alt", translate("alt=\"Browser\"")); 
	$("[src='images/icon-NetworkName_WiFi-lrg.png']").attr("alt", translate("alt=\"Wifi\"")); 
	$("[src='images/Icon-Password_Key-lrg.png']").attr("alt", translate("alt=\"Password\"")); 
	$("[src='../images/troubleshooting/checkPhoneJack.png']").attr("alt", translate("alt=\"Check Phone Jack\"")); 
	$("[src='images/troubleshooting/stopModem.png']").attr("alt", translate("alt=\"Turn Off Modem\"")); 
	$("[src='images/troubleshooting/startModem.png']").attr("alt", translate("alt=\"Turn On Modem\"")); 
	$("[src='images/troubleshooting/checkPhoneFilters.png']").attr("alt", translate("alt=\"Check Phone Filters\"")); 

}

// TBD: Load dictionary
/*
function loadDictionary(page, lang) {
	// Fake the dictionary for now
	langDictionary = {
		//"p100t023": "More About Belkin Routers",
		//"p100t024": "Your ll be able to print wirelessly.<span class=\"nub\"></span>",  
		"p100t025": "Belkin!!!",
		"htSaveSettings":"Test Help Page"
	};
}
*/
/*	
$(document).ready(function() {
	// Example code for how we handle translation
	$(document).ready( function() {
		loadDictionary("p100", "en");
		localize();
	});
});
*/
