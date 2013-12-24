		function insertAfter(referenceNode, newNode) {
			referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
		}
		function makeFrame() {
			var scriptNode = document.getElementById('adscriptjs113');
			var ifrm = document.createElement("IFRAME"); 
			ifrm.setAttribute("scrolling","no");
			ifrm.setAttribute("src", "http://www.gutzitiert.de/biografie/sebastian_vettel-bio6851.html"); 
			ifrm.style.width = 300+"px"; 
			ifrm.style.height = 250+"px"; 
			insertAfter(scriptNode, ifrm);
		} 
		makeFrame();
