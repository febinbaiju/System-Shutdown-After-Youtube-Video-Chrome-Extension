chrome.runtime.sendMessage({todo: "showPageAction"});
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if (request.todo == "fetchDetails"){
    var left=$('.ytp-time-current').text();
    var right=$('.ytp-bound-time-right').text();
    console.log("left value: "+left);
    console.log(right);
}
});