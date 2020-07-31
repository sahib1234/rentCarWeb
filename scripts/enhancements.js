"use strict";


function carspecificchoice(){
    var errMsg = "";
    var result = true;
var economy = document.getElementById("economy");
var small = document.getElementById("small");
var productType = document.getElementById("productType")
var rooftops = document.getElementById("rooftops");
var ACs = document.getElementById("ACs");


if (economy.selected == true && rooftops.checked ) {
    errMsg +="Economy cars don't have rooftops";
    
}


if (small.selected == true && ACs.checked ) {
    errMsg +="Small cars don't have Ac";
    
}


    
  // display message and return
  
return errMsg;

}
//display the owner name automatically in credit card
function ownernamedisplay(){
    var ownername = document.getElementById("ownername");
    ownername.value = localStorage.getItem("firstName") + " " + localStorage.getItem("lastName") ; 
} 