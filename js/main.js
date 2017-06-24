"use strict"

var wszystkieZgody = document.getElementById("wszystkie-zgody");
var zgodaMarketingowa1 = document.getElementById("zgoda-marketingowa-1");
var zgodaMarketingowa2 = document.getElementById("zgoda-marketingowa-2");
var wyslijBtn = document.getElementById("wyslij");

var inputImie = document.getElementById("name");
var inputEmail = document.getElementById("email");

 function stanCheckboxa(){
     
 zgodaMarketingowa1.checked = this.checked;
 zgodaMarketingowa2.checked = this.checked;
     
 zgodaMarketingowa1.disabled = this.checked;
 zgodaMarketingowa2.disabled = this.checked;
     
}

wszystkieZgody.onchange = stanCheckboxa;

function walidujFormularz (event) {
    event.preventDefault();
    
    if(inputImie.value == ""){
       console.log("pole jest puste");
       }
    
    
}


wyslijBtn.addEventListener("click", walidujFormularz);

    


