chrome.runtime.sendMessage({todo: "showPageAction"});

chrome.pageAction.onClicked.addListener(function(tab){

    chrome.tabs.create({url: "http://www.domain.com/details.html", "active":true});

});  