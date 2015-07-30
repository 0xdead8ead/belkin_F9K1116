function timeout_left(Timeout, Start_time, End_time)
{
	if(Timeout == -1)
		Timeout = -1;
	else
	{				
		Timeout = Timeout-(End_time-Start_time);
		if(Timeout == -1)
			Timeout = 0;		
	}
	return Timeout;
}

$.extend({
	router_watch: function(URL, Timeout, Current_page, Send_data, Callback, interval, page_minimum_wait_time){	
		var Start_time = Date.parse(new Date())/1000;
		if(interval>=page_minimum_wait_time)
			page_minimum_wait_time=0;
		else
			page_minimum_wait_time = page_minimum_wait_time - interval;
		if(Timeout==-1 || Timeout>0)
			;
		else
		{
			if(page_minimum_wait_time>0)
				setTimeout(function(){
					Callback(Current_page, Timeout, null);
				}, page_minimum_wait_time*1000);
			else
			{
				Callback(Current_page, Timeout, null);
			}
			return;
		}
		setTimeout(function(){
			if(URL!=null){
			    $.ajax({
			        url: URL,
			        dataType: "json",
			        data: Send_data,
			        success: function(data) 
					{
						if(page_minimum_wait_time>0)
							setTimeout(function(){
								Timeout= timeout_left(Timeout, Start_time, Date.parse(new Date())/1000);
								Callback(Current_page, Timeout, data);
							}, page_minimum_wait_time*1000);
						else
						{
							Timeout= timeout_left(Timeout, Start_time, Date.parse(new Date())/1000);
							Callback(Current_page, Timeout, data);
						}
					},
        			timeout: 2000,
        			error: function() 
					{
						Timeout= timeout_left(Timeout, Start_time, Date.parse(new Date())/1000);
						$.router_watch(URL, Timeout, Current_page, Send_data, Callback, interval, page_minimum_wait_time);
					}			        
			    });
/*			    
				$.getJSON(URL, Send_data, function(data) {
					if(page_minimum_wait_time>0)
						setTimeout(function(){
							Callback(Current_page, Timeout, data);
						}, page_minimum_wait_time*1000);
					else
					{
						Callback(Current_page, Timeout, data);
					}
				})
				.error(function() {
					$.router_watch(URL, Timeout, Current_page, Send_data, Callback, interval, page_minimum_wait_time);
				});
*/			}
			else{
				if(page_minimum_wait_time>0)
				{
					setTimeout(function(){
						Timeout= timeout_left(Timeout, Start_time, Date.parse(new Date())/1000);
						Callback(Current_page, Timeout, "");
					}, page_minimum_wait_time*1000);
				}
				else
				{
					Timeout= timeout_left(Timeout, Start_time, Date.parse(new Date())/1000);
					Callback(Current_page, Timeout, "");
				}
			}
		}, interval*1000);
	}
});

$(document).ready(function() {
	/* Use this js doc for all application specific JS */

	// Check the platform
	var isIOS=navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)/i);
	var isAndroid=navigator.userAgent.match(/(android)/i);
	var isWindows=navigator.platform.match(/(win)/i);
	var isOSX=navigator.platform.match(/(mac)/i);
	
	if (isIOS) {
		$("body").addClass("ios");
	}
	if (isAndroid) {
		$("body").addClass("android");
	}
	if (isWindows) {
		$("body").addClass("win");
	}
	if (isOSX) {
		$("body").addClass("osx");
	}
	function pad(num, size) {
		var s = "000000000" + num;
		return s.substr(s.length-size);
	}
	
	// Code to "re-tid" a page
	//$("*[tid^='Support5t']").each(function (index) {
	//	$(this).attr("tid", "Support5t" + pad(index+1, 3));
	//});
	
	// Jquery.placeholder.min.js
	/*! http://mths.be/placeholder v1.8.7 by @mathias */
	(function(f,h,c){var a='placeholder' in h.createElement('input'),d='placeholder' in h.createElement('textarea'),i=c.fn,j;if(a&&d){j=i.placeholder=function(){return this};j.input=j.textarea=true}else{j=i.placeholder=function(){return this.filter((a?'textarea':':input')+'[placeholder]').not('.placeholder').bind('focus.placeholder',b).bind('blur.placeholder',e).trigger('blur.placeholder').end()};j.input=a;j.textarea=d;c(function(){c(h).delegate('form','submit.placeholder',function(){var k=c('.placeholder',this).each(b);setTimeout(function(){k.each(e)},10)})});c(f).bind('unload.placeholder',function(){c('.placeholder').val('')})}function g(l){var k={},m=/^jQuery\d+$/;c.each(l.attributes,function(o,n){if(n.specified&&!m.test(n.name)){k[n.name]=n.value}});return k}function b(){var k=c(this);if(k.val()===k.attr('placeholder')&&k.hasClass('placeholder')){if(k.data('placeholder-password')){k.hide().next().show().focus().attr('id',k.removeAttr('id').data('placeholder-id'))}else{k.val('').removeClass('placeholder')}}}function e(){var o,n=c(this),k=n,m=this.id;if(n.val()===''){if(n.is(':password')){if(!n.data('placeholder-textinput')){try{o=n.clone().attr({type:'text'})}catch(l){o=c('<input>').attr(c.extend(g(this),{type:'text'}))}o.removeAttr('name').data('placeholder-password',true).data('placeholder-id',m).bind('focus.placeholder',b);n.data('placeholder-textinput',o).data('placeholder-id',m).before(o)}n=n.removeAttr('id').hide().prev().attr('id',m).show()}n.addClass('placeholder').val(n.attr('placeholder'))}else{n.removeClass('placeholder')}}}(this,document,jQuery));
  
	// PLACEHOLDER FOR FORMS
	$('input, textarea').placeholder();
	
	/*
	* jQuery Reveal Plugin 1.1
	* www.ZURB.com
	* Copyright 2010, ZURB
	* Free to use under the MIT license.
	* http://www.opensource.org/licenses/mit-license.php
	*/
	/*globals jQuery */

	(function ($) {
		var modalQueued = false;
	  
		$('a[data-reveal-id]').live('click', function (event) {
			event.preventDefault();
			var modalLocation = $(this).attr('data-reveal-id');
			$('#' + modalLocation).reveal($(this).data());
		});

		$.fn.reveal = function (options) {
			var defaults = {
				animation: 'fadeAndPop', // fade, fadeAndPop, none
				animationSpeed: 300, // how fast animtions are
				closeOnBackgroundClick: false, // if you click background will modal close?
				closeOnESC: false, // if you press ESC will modal close?
				dismissModalClass: 'close-reveal-modal', // the class of a button or element that will close an open modal
				open: $.noop,
				opened: $.noop,
				close: $.noop,
				closed: $.noop
			};
			options = $.extend({}, defaults, options);
			return this.each(function () {
				var modal = $(this),
				topMeasure = parseInt(modal.css('top'), 10),
				topOffset = modal.height() + topMeasure,
				locked = false,
				modalBg = $('.reveal-modal-bg'),
				closeButton;

				if (modalBg.length === 0) {
					modalBg = $('<div class="reveal-modal-bg" />').insertAfter(modal);
					modalBg.fadeTo('fast', 0.8);
				}
				function unlockModal() {
					locked = false;
				}
				function lockModal() {
					locked = true;
				}
				function closeOpenModals(modal) {
					var openModals = $(".reveal-modal.open");
					if (openModals.length === 1) {
						modalQueued = true;
						$(".reveal-modal.open").trigger("reveal:close");
					}
				}
				function openAnimation() {
					if (!locked) {
						lockModal();
						closeOpenModals(modal);
						modal.addClass("open");
						if (options.animation === "fadeAndPop") {
							modal.css({'top': $(document).scrollTop() - topOffset, 'opacity': 0, 'visibility': 'visible'});
							modalBg.fadeIn(options.animationSpeed / 2);
							modal.delay(options.animationSpeed / 2).animate({
								"top": $(document).scrollTop() + topMeasure + 'px',
								"opacity": 1
							}, options.animationSpeed, function () {
								modal.trigger('reveal:opened');
							});

						}
						if (options.animation === "fade") {
							modal.css({'opacity': 0, 'visibility': 'visible', 'top': $(document).scrollTop() + topMeasure});
							modalBg.fadeIn(options.animationSpeed / 2);
							modal.delay(options.animationSpeed / 2).animate({
								"opacity": 1
							}, options.animationSpeed, function () {
								modal.trigger('reveal:opened');
							});

						}
						if (options.animation === "none") {
							modal.css({'visibility': 'visible', 'top': $(document).scrollTop() + topMeasure});
							modalBg.css({"display": "block"});
							modal.trigger('reveal:opened');
						}
					}
				}
				modal.bind('reveal:open.reveal', openAnimation);
				function closeAnimation() {
					if (!locked) {
						lockModal();
						modal.removeClass("open");
						if (options.animation === "fadeAndPop") {
							modal.animate({
								"top": $(document).scrollTop() - topOffset + 'px',
								"opacity": 0
							}, options.animationSpeed / 2, function () {
								modal.css({'top': topMeasure, 'opacity': 1, 'visibility': 'hidden'});
							});
							if (!modalQueued) {
								modalBg.delay(options.animationSpeed).fadeOut(options.animationSpeed, function () {
									modal.trigger('reveal:closed');
								});
							} else {
								modal.trigger('reveal:closed');
							}
							modalQueued = false;
						}
						if (options.animation === "fade") {
							modal.animate({
								"opacity" : 0
							}, options.animationSpeed, function () {
								modal.css({'opacity': 1, 'visibility': 'hidden', 'top': topMeasure});
							});
							if (!modalQueued) {
								modalBg.delay(options.animationSpeed).fadeOut(options.animationSpeed, function () {
									modal.trigger('reveal:closed');
								});
							} else {
								modal.trigger('reveal:closed');
							}
						}
						if (options.animation === "none") {
							modal.css({'visibility': 'hidden', 'top': topMeasure});
							if (!modalQueued) {
								modalBg.css({'display': 'none'});
							}
							modal.trigger('reveal:closed');
						}
					}
				}

				function destroy() {
					modal.unbind('.reveal');
					modalBg.unbind('.reveal');
					$('.' + options.dismissModalClass).unbind('.reveal');
					$('body').unbind('.reveal');
				}

				modal.bind('reveal:close.reveal', closeAnimation);
				modal.bind('reveal:opened.reveal reveal:closed.reveal', unlockModal);
				modal.bind('reveal:closed.reveal', destroy);

				modal.bind('reveal:open.reveal', options.open);
				modal.bind('reveal:opened.reveal', options.opened);
				modal.bind('reveal:close.reveal', options.close);
				modal.bind('reveal:closed.reveal', options.closed);

				modal.trigger('reveal:open');

				closeButton = $('.' + options.dismissModalClass).bind('click.reveal', function () {
					modal.trigger('reveal:close');
				});

				if (options.closeOnBackgroundClick) {
					modalBg.css({"cursor": "pointer"});
					modalBg.bind('click.reveal', function () {
						modal.trigger('reveal:close');
					});
				}

				if (options.closeOnESC) {
					$('body').bind('keyup.reveal', function (event) {
						if (event.which === 27) { // 27 is the keycode for the Escape key
							modal.trigger('reveal:close');
						}
					});
				}
			});		  
		};
	} (jQuery));
});
var win=null;
var bbs_debug_enable=false;
var Current_Page="";
function bbs_debug(message)
{
	if(bbs_debug_enable==true)
	{
		var data_obj=new Date();
		if(win==null)
		{
			win = window.open("","BBSDebugLog", "scrollbars=yes,menubar=no,width=800,height=300,resizeable=yes");
			if(Current_Page=="100-index.htm")
			{
				win.document.writeln("<b>appCodeName:</b> "+navigator.appCodeName+"<br />")
				win.document.writeln("<b>appName:</b> "+navigator.appName+"<br />")
				win.document.writeln("<b>appVersion:</b> "+navigator.appVersion+"<br />")
				win.document.writeln("<b>userAgent:</b> "+navigator.userAgent+"<br />")
				win.document.writeln("<b>platform:</b> "+navigator.platform+"<br />")
			}
		}
		if(message!="")
			win.document.writeln(data_obj+": "+message+"<br>");
	}
}
$("#debug_page").click(function(e) {
	e.preventDefault();
	
	var obj = new sdc_set_table();
	obj.set_field("RequestID", Math.floor(Math.random() * 10000));
	
	if($("#debug_flag").text() =='-')
	{
		$("#debug_flag").text('+');
		obj.set_field("BBSDebugEnable", "1");
		bbs_debug_enable=true;
		bbs_debug(Current_Page);
	}
	else
	{
		$("#debug_flag").text('-');
		obj.set_field("BBSDebugEnable", "0");
		bbs_debug_enable=false;
		if( !win.colsed )
		{
			win.close();
			win = null;
		}
	}
	
	$.post("BelkinAPI/SetBBSDebug", obj.row, function(data) {
	}, "json");

});
