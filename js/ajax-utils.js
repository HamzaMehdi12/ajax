(function (global) {
	var ajaxUtils = {};

	function getRequestObj() {
		if(window.XMLHttpRequest) {
			return (new XMLHttpRequest());
		}
		else if(window.ActiveXObject) {
			return (new ActiveXObject("Microsoft.XMLHTTP"));
		}
		else {
			global.alert("Ajax is not supported!")
			return(null);
		}
	}
	ajaxUtils.sendGetReq = function(requestURL, responseHandler, isJsonResponse) {
		var request = getRequestObj();
		request.onreadystatechange = function() {
			handleResponse(request, responseHandler, isJsonResponse);
		};
		request.open("Get", requestURL, true);
		request.send(null);
	};

	function handleResponse(request, responseHandler, isJsonResponse) {
		if((request.readyState == 4) && (request.status == 200)) {
			responseHandler(request);
		if(isJsonResponse == undefined) {
			isJsonResponse = true;
		}
		if(isJsonResponse) {
			responseHandler(JSON.parse(request.responseText));
		}
		else {
			responseHandler(request.responseText);
		}
	}
}






	global.$ajaxUtils = ajaxUtils;
})(window);