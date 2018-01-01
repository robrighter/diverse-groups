;(function(){

	// Menu settings
	$('#menuToggle, .menu-close').on('click', function(){
		$('#menuToggle').toggleClass('active');
		$('body').toggleClass('body-push-toleft');
		$('#theMenu').toggleClass('menu-open');
	});

	$('.menu-wrap a').click(function(){
		$('#menuToggle').removeClass('active');
		$('body').removeClass('body-push-toleft');
		$('#theMenu').removeClass('menu-open');
	});

	function getSearchParameters() {
		var prmstr = window.location.search.substr(1);
		return prmstr != null && prmstr != "" ? transformToAssocArray(prmstr) : {};
	}

	function transformToAssocArray( prmstr ) {
		var params = {};
		var prmarr = prmstr.split("&");
		for ( var i = 0; i < prmarr.length; i++) {
		    var tmparr = prmarr[i].split("=");
		    params[tmparr[0]] = tmparr[1];
		}
		return params;
	}

	var params = getSearchParameters();
	if(params.hasOwnProperty('errors')){
		if(params.errors.substr(0,4) === 'true'){
			$('#exampleInputEmail').css('background-color','#B63D3D');
			$("html, body").animate({ scrollTop: $(document).height() }, "fast");
		}
		else{
			$('#confirmmessage').text('Thank you for contacting us, we are looking forward to meeting you.');
			$('#confirmmessage').slideDown('fast');
		}
	}

	var ua = navigator.userAgent;
	var isMobileWebkit = /WebKit/.test(ua) && /Mobile/.test(ua);
	if(isMobileWebkit){
		$('.sep').hide();
	}


})(jQuery)