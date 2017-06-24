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
   
    var bladWalidacjiMsg = document.createElement('p');
    bladWalidacjiMsg.innerHTML = "Bład";
    inputImie.parentNode.insertBefore(bladWalidacjiMsg, inputImie.nextSibling);
    
    if(inputImie.value.trim() == ""){
         event.preventDefault();
        console.log("pole imie puste");
        
              }
    
    if(inputEmail.value.trim() == ""){
         event.preventDefault();
        console.log("pole Email jest puste");
      
       }
    if(! zgodaMarketingowa1.checked) {
         event.preventDefault();
        console.log("zgoda nie jest zaznaczona");
       
       }
    
}


wyslijBtn.addEventListener("click", walidujFormularz);

    


