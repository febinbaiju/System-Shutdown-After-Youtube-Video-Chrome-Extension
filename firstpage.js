$(function(){
    $('#b2').click(function (e) { 
        chrome.tabs.query({active:true,currentWindow: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {todo: "cancel", fetch: "true" });
            
        });        
});

    $('#b1').click(function (e) { 
        chrome.tabs.query({active:true,currentWindow: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {todo: "shutDown", fetch: "true" });
            
        });        
});
});
