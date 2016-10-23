$(function(){
	$('#add_div').click(function(){
		console.log('log....');
		// chrome.extension.getBackgroundPage().msg
		chrome.extension.getBackgroundPage().ttt(); //popup 可以直接调用background的变量以及方法

		chrome.notifications.create(Math.random()+'', {
			"type":"basic",
			"iconUrl":"../images/icon.png",
			"title":"this is a message title!",
			"message":"this is message content,bulala...."
		},function(notificationId){
			console.log(notificationId);
			var _title =chrome.runtime.getURL('icon.png');
			console.log(_title);
			chrome.notifications.update(notificationId,{
				"title":_title,
				"message":chrome.extension.getBackgroundPage().msg
			});
			// setTimeout(
			// 	chrome.notifications.clear(notificationId,function(wasCleared){
			// 		if(wasCleared){
			// 			console.log('notifications was cleared!');
			// 		}
			// 	}),5000);
		} );
	});
});
