//your JS code here. If required.
let browserName=navigator.userAgent.toLowerCase().split("/")[0]
let browserVerson=navigator.userAget.toLowerCase().split("/")[1]
let s="You are using "+browserName+" version "+browserVerson;

let div = document.getElementById("browser-info");
div.innerText=s;
