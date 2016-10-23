chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
		console.log(request);
		console.log(sender);
		console.log(sendReponse);
		sendReponse({reMsg:'resonse msg from backgroud!'});
 });
