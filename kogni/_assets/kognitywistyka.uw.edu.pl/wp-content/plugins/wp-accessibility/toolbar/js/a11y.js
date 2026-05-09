var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
/*
 * Chris Rodriguez
 * chris@inathought.com
 */

// Cookie handler, non-$ style
function createCookie(name, value, days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		var expires = "; expires=" + date.toGMTString();
	} else {
		var expires = '';
	}
	
	document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	}
	
	return null;
}

function eraseCookie(name) {
	createCookie(name, "");
}

( function( $ ) {
	// Saturation handler
	if (readCookie('a11y-desaturated')) {
		$('body').addClass('desaturated');
		$('#is_normal_color').attr('id', 'is_grayscale').attr('aria-pressed', true).addClass('active');
	}
	
	if (readCookie('a11y-high-contrast')) {
		$('body').addClass('contrast');
		$('head').append($("<link href='" + a11y_stylesheet_path + "' id='highContrastStylesheet' rel='stylesheet' type='text/css' />"));
		$('#is_normal_contrast').attr('id', 'is_high_contrast').attr('aria-pressed', true).addClass('active');
		$('.a11y-toolbar ul li a i').addClass('icon-white');
	}

	if (readCookie('a11y-larger-fontsize')) {
		$('html').addClass('fontsize');
		$('#is_normal_fontsize').attr('id', 'is_large_fontsize').attr('aria-pressed', true).addClass('active');
	}
	
	$('.toggle-grayscale').on('click', function (e) {
		if ($(this).attr('id') == "is_normal_color") {
			$('body').addClass('desaturated');
			$(this).attr('id', 'is_grayscale').attr('aria-pressed', true).addClass('active');
			createCookie('a11y-desaturated', '1');
		} else {
			$('body').removeClass('desaturated');
			$(this).attr('id', 'is_normal_color').attr('aria-pressed', false).removeClass('active');
			eraseCookie('a11y-desaturated');
		}
		
		return false;
	});

	$('.toggle-contrast').on('click', function (e) {
		if ($(this).attr('id') == "is_normal_contrast") {
			$('head').append($("<link href='" + a11y_stylesheet_path + "' id='highContrastStylesheet' rel='stylesheet' type='text/css' />"));
			$('body').addClass('contrast');
			$(this).attr('id', 'is_high_contrast').attr('aria-pressed', true).addClass('active');
			createCookie('a11y-high-contrast', '1');
		} else {
			$('#highContrastStylesheet').remove();
			$('body').removeClass('contrast');
			$(this).attr('id', 'is_normal_contrast').attr('aria-pressed', false).removeClass('active');
			eraseCookie('a11y-high-contrast');
		}
		
		return false;
	});

	$('.toggle-fontsize').on('click', function (e) {
		if ($(this).attr('id') == "is_normal_fontsize") {
			$('html').addClass('fontsize');
			$(this).attr('id', 'is_large_fontsize').attr('aria-pressed', true).addClass('active');
			createCookie('a11y-larger-fontsize', '1');
		} else {
			$('html').removeClass('fontsize');
			$(this).attr('id', 'is_normal_fontsize').attr('aria-pressed', false).removeClass('active');
			eraseCookie('a11y-larger-fontsize');
		}
		
		return false;
	});

	// Sets a -1 tabindex to ALL sections for .focus()-ing
	var sections = document.getElementsByTagName("section");
	for (var i = 0, max = sections.length; i < max; i++) {
		sections[i].setAttribute('tabindex', -1);
		sections[i].className += ' focusable';
	}
	
} )( jQuery );
}

/*
     FILE ARCHIVED ON 18:49:45 May 26, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:46:25 May 05, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.583
  exclusion.robots: 0.06
  exclusion.robots.policy: 0.049
  esindex: 0.011
  cdx.remote: 12.153
  LoadShardBlock: 56.324 (3)
  PetaboxLoader3.datanode: 85.992 (5)
  PetaboxLoader3.resolve: 41.628 (2)
  load_resource: 79.744
  loaddict: 24.183
*/