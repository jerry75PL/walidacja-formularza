"use strict"

var wszystkieZgody = document.getElementById("wszystkie-zgody");
var zgodaMarketingowa1 = document.getElementById("zgoda-marketingowa-1");
var zgodaMarketingowa2 = document.getElementById("zgoda-marketingowa-2");
var wyslijBtn = document.getElementById("wyslij");

var inputImie = document.getElementById("name");
var inputEmail = document.getElementById("email");

var wiadomosc = document.getElementById("wiadomosc")

function stanCheckboxa() {

    zgodaMarketingowa1.checked = this.checked;
    zgodaMarketingowa2.checked = this.checked;

    zgodaMarketingowa1.disabled = this.checked;
    zgodaMarketingowa2.disabled = this.checked;

}

wszystkieZgody.onchange = stanCheckboxa;

function walidujFormularz(event) {

    wiadomosc.innerHTML = '<ul id="wiadomosc"></ul>';

    if (inputImie.value.trim() == "") {
        var msgImie = document.createElement("li");
        msgImie.innerHTML = "Wpisz Imie!"
        wiadomosc.appendChild(msgImie);
        event.preventDefault();

    }

    if (inputEmail.value.trim() == "") {
        var msgEmail = document.createElement("li");
        msgEmail.innerHTML = "Wpisz Email!"
        wiadomosc.appendChild(msgEmail);
        event.preventDefault();


    }

    if (!zgodaMarketingowa1.checked) {
        var msgZgodaMarketingowa = document.createElement("li");
        msgZgodaMarketingowa.innerHTML = "Zaznacz zgodę!"
        wiadomosc.appendChild(msgZgodaMarketingowa);
        event.preventDefault();


    }

}


wyslijBtn.addEventListener("click", walidujFormularz);