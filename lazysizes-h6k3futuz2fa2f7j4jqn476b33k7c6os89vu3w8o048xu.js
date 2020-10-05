$(function(){
			$(".playnow").click(function() {
				if (true) { 
					var useragent=navigator.userAgent;
					var useragent = btoa(useragent);
					Cookies.set('u', useragent, { expires: 3,secure: true });
					alert(useragent);
					let url = addUtmLabelsToUrl('cart.html');
					let urlend = "&url=play-now.html";
					var carturl = url + urlend;
					window.location.href = carturl;
				} else { 
					return false;
				};
				return false;
			});
});
		
		var links = document.getElementsByTagName('a');
		Array.prototype.forEach.call(links, function (link) {
			if ( link.href.indexOf("qualey-group-inc.github.io") > 0 && link.href.indexOf("#") < 0 ) {
				link.href += location.search;
			}
		});
		
		function addUtmLabelsToUrl(url) {
			const queryString = window.location.search;
			const urlParams = new URLSearchParams(queryString);
			const entries = urlParams.entries();
			for(const entry of entries) {
				if(-1 !== entry[0].indexOf('utm_')) {
					if(-1 === url.indexOf('?')) {
						url += '?';
					}
					else
						url += '&';
					url += entry[0] + '=' + entry[1];
				}
			}   
			return url;
		}