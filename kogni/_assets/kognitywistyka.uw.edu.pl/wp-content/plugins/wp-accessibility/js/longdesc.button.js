var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
(function ($) {
    'use strict';
    $('img[longdesc]').each(function () {
        var longdesc = $(this).attr('longdesc');
        var text = '<span>Long Description</span>';
        var classes = $(this).attr('class');
		var class_array = ( Array.isArray(classes) ) ? classes.split(' ') : [];
		var image_id = '';
		$.each( class_array, function ( index, value ) {
			if ( value.match( /wp-image-/gi ) ) {
				image_id = value;
			}
		});
		$(this).attr('class', '');
		$(this).wrap('<div class="wpa-ld" />')
		$(this).parent('.wpa-ld').addClass(classes);
		$(this).parent('.wpa-ld').append('<div class="longdesc" aria-live="assertive"></div>');
		$(this).parent('.wpa-ld').append('<button>' + text + '</button>');
		$(this).parent('.wpa-ld').children('.longdesc').hide();
		$(this).parent('.wpa-ld').children('.longdesc').load( longdesc + ' #desc_' + image_id );
		$(this).parent('.wpa-ld').children('button').toggle(function () {
			$(this).parent('.wpa-ld').children('.longdesc').show(150);
		}, function () {
			$(this).parent('.wpa-ld').children('.longdesc').hide();
		});
    });
}(jQuery));
		
}

/*
     FILE ARCHIVED ON 17:31:53 May 26, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:30:06 May 05, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.584
  exclusion.robots: 0.074
  exclusion.robots.policy: 0.062
  esindex: 0.011
  cdx.remote: 70.337
  LoadShardBlock: 126.206 (3)
  PetaboxLoader3.datanode: 201.716 (5)
  load_resource: 374.446
  PetaboxLoader3.resolve: 155.13
  loaddict: 163.69
*/