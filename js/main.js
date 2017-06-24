"use strict"

var wszystkieZgody = document.getElementById("wszystkie-zgody");

var zgodaMarketingowa1 = document.getElementById("zgoda-marketingowa-1");
var zgodaMarketingowa2 = document.getElementById("zgoda-marketingowa-2");

var wszystkieCheckboxy = document.querySelectorAll("input[type=checkbox]");

 function stanCheckboxa(){
 zgodaMarketingowa1.checked = this.checked;
 zgodaMarketingowa2.checked = this.checked;
     
 zgodaMarketingowa1.disabled = this.checked;
 zgodaMarketingowa2.disabled = this.checked;
}
wszystkieZgody.onchange = stanCheckboxa;

document.getElementById("wyslij").addEventListener("click", walidujFormularz);




