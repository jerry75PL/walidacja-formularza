"use strict"

var wszystkieZgody = document.getElementById("wszystkie-zgody");

var wszystkieCheckboxy = document.querySelectorAll("input[type=checkbox]");

wszystkieZgody.onchange = function(){
 console.log("kliknięty");
 console.log(this.checked);
}







console.log(wszystkieZgody);
console.log(wszystkieCheckboxy);

