var msg = "background msg";

var ttt=function(){
	console.log('invoke background method ttt');
}
setInterval(function(){
	console.log('background....'+Math.random());
	chrome.tabs.query({active:true},function(tabs){
		var i =0;
		// for(var i=0;i<tabs.length;i++){
			// console.log(tabs[i].title);
			chrome.tabs.sendMessage(tabs[i].id,{msg:"this is msg from background!"},function(res){
				console.log('sendReponse....');
				console.log(res);
			});
		// }
	});
	chrome.browserAction.setBadgeBackgroundColor({
		color:"green"
	});
	chrome.browserAction.setBadgeText({
		text:"badge..",
	});
	// chrome.notifications.create(Math.random()+'', {
	// 		"type":"basic",
	// 		"iconUrl":"../images/icon.png",
	// 		"title":"this is a message title!",
	// 		"message":"this is message content,bulala...."
	// 	}
	// );
	console.log("");
},5*1000);
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
	console.log('收到消息');
	console.log(request);
	console.log(sender);
	console.log(sendReponse);
  });
