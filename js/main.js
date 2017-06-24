"use strict"

var wszystkieZgody = document.getElementById("wszystkie-zgody");

var zgodaMarketingowa1 = document.getElementById("zgoda-marketingowa-1");
var zgodaMarketingowa2 = document.getElementById("zgoda-marketingowa-2");

var wszystkieCheckboxy = document.querySelectorAll("input[type=checkbox]");

 function stanCheckboxa(){
 zgodaMarketingowa2.checked = this.checked;
}



wszystkieZgody.onchange = stanCheckboxa;





console.log(wszystkieZgody);
console.log(wszystkieCheckboxy);

