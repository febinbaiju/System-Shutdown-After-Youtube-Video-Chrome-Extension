chrome.runtime.sendMessage({todo: "showPageAction"});
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){

    if(request.todo == "cancel")
    {

    //send to the local server for cancelling all shutdown to processes
    if (confirm("All Shutdown processes will stop ")) {
        

       var dataString = "http://localhost/shutdown.php?do=no&time=dummytime";

$.ajax
({
  type: "GET",
  url: dataString,
  data: "",
  success: function(html)
  {
     
  }
});
      }
    }

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
        

        var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}
        var dataString = "http://localhost/shutdown.php?do=yes&time="+Base64.encode(final_result);

$.ajax
({
  type: "GET",
  url: dataString,
  data: "",
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

