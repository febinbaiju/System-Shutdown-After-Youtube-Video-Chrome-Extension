chrome.runtime.sendMessage({todo: "showPageAction"});
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){

    if (request.todo == "shutDown"){
    var left=$('.ytp-time-current').text();
    var right=$('.ytp-bound-time-right').text();
    left = parseInt(hmsToSecondsOnly(left));
    right = parseInt(hmsToSecondsOnly(right));
    rem = right-left;
    formatted_rem = fancyTimeFormat(rem);
    formatted_rem_secs = hmsToSecondsOnly(formatted_rem);

    var t = new Date();
    t.setSeconds(t.getSeconds() + formatted_rem_secs);
    H=t.getHours();
    M=t.getMinutes();

    if(M==59)
    {
    H=H+1;
    M=00;
    }
    else
    {
        M = M+1;
    }

    final_result = H+":"+M;
    

    //send to the local server for shutdown to process
    if (confirm("System will shutdown at "+final_result)) {
        var dataString = "http://localhost/shutdown.php";

$.ajax
({
  type: "GET",
  url: dataString,
  data: "?time="+btoa(final_result),
  success: function(html)
  {
     
  }
});
      }

}

});

function fancyTimeFormat(time)
{   
    // Hours, minutes and seconds
    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = ~~time % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";

    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}

function hmsToSecondsOnly(str) {
    var p = str.split(':'),
        s = 0, m = 1;

    while (p.length > 0) {
        s += m * parseInt(p.pop(), 10);
        m *= 60;
    }

    return s;
}

