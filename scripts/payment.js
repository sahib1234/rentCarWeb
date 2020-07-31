"use strict";
function getResult() {
  if (typeof Storage !== "undefined") {
    if (localStorage.getItem("state") !== null) {
      var state = document.getElementById("state");
      var postcode = document.getElementById("postcode");
      var daysno = document.getElementById("daysno");
      var suburbTown = document.getElementById("suburbTown");
      var streetAddress = document.getElementById("streetAddress");
      var email_name = document.getElementById("email_name");
      var lastName = document.getElementById("lastName");
      var firstName = document.getElementById("firstName");
      var phoneNumber = document.getElementById("phoneNumber");
      var comment = document.getElementById("comment");

      var statevalue = document.getElementById("statevalue");
      var postcodevalue = document.getElementById("postcodevalue");
      var daysnovalue = document.getElementById("daysnovalue");
      var suburbvalue = document.getElementById("suburbvalue");
      var streetAddressvalue = document.getElementById("streetAddressvalue");
      var email_namevalue = document.getElementById("email_namevalue");
      var lastNamevalue = document.getElementById("lastNamevalue");
      var firstNamevalue = document.getElementById("firstNamevalue");
      var phoneNumbervalue = document.getElementById("phoneNumbervalue");
      var commentvalue = document.getElementById("commentvalue");
      var radiodisplay = document.getElementById("radiodisplay");
      var selectcarvalue = document.getElementById("selectcarvalue");
      var featuresvalue = document.getElementById("featuresvalue");
      var totalvalue = document.getElementById("totalvalue");

      state.textContent = localStorage.getItem("state"); 
      postcode.textContent = localStorage.getItem("postcode"); 
      daysno.textContent = localStorage.getItem("daysno");
      suburbTown.textContent = localStorage.getItem("suburbTown");
      streetAddress.textContent = localStorage.getItem("streetAddress");
      email_name.textContent = localStorage.getItem("email_name");
      lastName.textContent = localStorage.getItem("lastName");
      firstName.textContent = localStorage.getItem("firstName");
      phoneNumber.textContent = localStorage.getItem("phoneNumber");
      comment.textContent = localStorage.getItem("comment");

//take the owner name that automatically code done in enhancement file
    ownernamedisplay();

      statevalue.value = localStorage.getItem("state"); 
      postcodevalue.value = localStorage.getItem("postcode"); 
      daysnovalue.value = localStorage.getItem("daysno");
      suburbvalue.value = localStorage.getItem("suburbTown"); 
      streetAddressvalue.value = localStorage.getItem("streetAddress"); 
      email_namevalue.value = localStorage.getItem("email_name");
      lastNamevalue.value = localStorage.getItem("lastName"); 
      firstNamevalue.value = localStorage.getItem("firstName");
      phoneNumbervalue.value = localStorage.getItem("phoneNumber");
      commentvalue.value = localStorage.getItem("comment"); 


// display the input values that will be stored after clicking checkout     

      if (localStorage.getItem("email") == "true") {
        radiodisplay.value = "Email";
      }

      if (localStorage.getItem("post") == "true") {
        radiodisplay.value = "Post";
      }

      if (localStorage.getItem("phone") == "true") {
        radiodisplay.value = "Phone";
      }




      if (localStorage.getItem("carType") == "economy") {
        selectcarvalue.value = "Economy";
        
      }

      if (localStorage.getItem("carType") == "small") {
        selectcarvalue.value = "Small";
      
      }

      if (localStorage.getItem("carType") == "suv") {
        selectcarvalue.value = "SUV";
       
      }

      if (localStorage.getItem("carType") == "premium") {
        selectcarvalue.value = "Premium";
        
      }



// display the input values that will be stored after clicking checkout

      if (localStorage.getItem("rooftops") == "true") {
        featuresvalue.value += "rooftop  ";
      }
      if (localStorage.getItem("ACs") == "true") {
        featuresvalue.value += "ac";
      }
      if (localStorage.getItem("airbag") == "true") {
        featuresvalue.value += "  airbag";
      }
      if (localStorage.getItem("seater") == "true") {
        featuresvalue.value += "   seaters";
      }
    }
  }
}
function getValue() { //display the content of the selected car and checkbox
  if (localStorage.getItem("rooftops") == "true") {
    rooftops.textContent = "Rooftop -10$";
  }

  if (localStorage.getItem("ACs") == "true") {
    ACs.textContent = "Ac -10$";
  }

  if (localStorage.getItem("airbag") == "true") {
    airbag.textContent = "Airbag -10$";
  }

  if (localStorage.getItem("seater") == "true") {
    seater.textContent = "Seater -10$";
  }

  if (localStorage.getItem("email") == "true") {
    email.textContent = "email";
  }
  if (localStorage.getItem("post") == "true") {
    post.textContent = "post ";
  }
  if (localStorage.getItem("phone") == "true") {
    phone.textContent = "phone";
  }

  if (localStorage.getItem("carType") == "economy") {
    economy.textContent = "You selected economy \n Price -40$";
  }
  if (localStorage.getItem("carType") == "small") {
    small.textContent = "You selected small \n Price -30$";
  }
  if (localStorage.getItem("carType") == "suv") {
    suv.textContent = "You selected suv \n Price -60$";
  }
  if (localStorage.getItem("carType") == "premium") {
    premium.textContent = "You selected premium \n Price -100$";
  }
}

function someFunction() { // take price of the checked checkboxws
  var feature_total = 0;
  if (localStorage.getItem("rooftops") == "true") {
    feature_total += 10;
  }
  if (localStorage.getItem("ACs") == "true") {
    feature_total += 10;
  }
  if (localStorage.getItem("airbag") == "true") {
    feature_total += 10;
  }
  if (localStorage.getItem("seater") == "true") {
    feature_total += 10;
  }

  return feature_total;
}

function carFunc() { // takes price of the car selected
  var car_price = 0;
  if (localStorage.getItem("carType") == "economy") {
    car_price = 40;
  } else if (localStorage.getItem("carType") == "small") {
    car_price = 30;
  } else if (localStorage.getItem("carType") == "suv") {
    car_price = 60;
  } else if (localStorage.getItem("carType") == "premium") {
    car_price = 100;
  } else {
    car_price = "sorry";
  }
  return car_price;
}

function totalValue() { //take total value of the car and the ticked checkboxes
  var total = document.getElementById("total");
  var feature_total = someFunction();
  var car_price = carFunc();
  var all_total = feature_total + car_price;

  if (localStorage.getItem("carType") == "economy") {
    total.textContent = all_total;
    totalvalue.value = total.textContent;
  }
  if (localStorage.getItem("carType") == "small") {
    total.textContent = all_total;
    totalvalue.value = total.textContent;
  }
  if (localStorage.getItem("carType") == "suv") {
    total.textContent = all_total;
    totalvalue.value =total.textContent;
  }
  if (localStorage.getItem("carType") == "premium") {
    total.textContent = all_total;
    totalvalue.value =total.textContent;
  }
}

function validate() { //gives correct value for credit card 
  var errMsg = "";
  var result = true;
  var credit = document.getElementById("credit").value;
  var cardnum = document.getElementById("cardnum").value;
  var ownername = document.getElementById("ownername").value;
  var cvv = document.getElementById("cvv").value;

  if (ownername == "") {
    errMsg += "ownername cannot be empty\n";
    result = false;
  } else if (!ownername.match(/^[a-zA-z ]{2,40}$/)) {
    errMsg =
      errMsg +
      "Your name can only contain alphabetical characters and length should be less than 40\n";
    result = false;
  }
  
  if (cardnum == "") {
    errMsg += "Card number cannot be empty\n";
    result = false;
  } else if (!cardnum.match(/^\d{15,16}$/)) {
    errMsg +=
      "Credit Card Number Should be between the length of 15 to 16 digits.\n";
    result = false;
  }

  if (credit == "") {
    errMsg += "Please select a Credit Card Type.\n";
    result = false;
  } else if (cardnum.length != 16 && credit == "Visa") {
    errMsg += "Visa should have 16 digits.\n";
    result = false;
  } else if (cardnum.charAt(0) != "4" && credit == "Visa") {
    errMsg += "visa number starts from 4.\n";
    result = false;
  }

  if (cardnum.length != 16 && credit == "Mastercard") {
    errMsg += "mastercard  length should be 16.\n";
    result = false;
  } else if (
    !cardnum.match(/^(?:5[1-5][0-9]{14})$/) &&
    credit == "Mastercard"
  ) {
    errMsg += "Mastercard number starts from 51 through 55.\n";
    result = false;
  }

  if (cardnum.length != 15 && credit == "American") {
    errMsg += "American express length should be 15.\n";
    result = false;
  } else if (!cardnum.match(/^(?:3[47][0-9]{13})$/) && credit == "American") {
    errMsg += "American Express number starts from 34 or 37.\n";
    result = false;
  }

  if (cvv == "") {
    errMsg += "CVV cannot be empty.";
    result = false;
  } else if (!cvv.match(/^[0-9]{3}$/)) {
    errMsg += " Please enter CVV of 3 digits";
    result = false;
  }

  if (errMsg != "") {
    alert(errMsg);
  }
  
  return result;
}


function clearstorage(){// clears storage by clicking cancel
  var clear = document.getElementById('cancel');
  clear.onclick = localStorage.clear();
}

function init() {
  var enqsForm = document.getElementById("enqsForm");
  enqsForm.onsubmit = validate;

  getResult();
  getValue();
  totalValue();
  clearstorage();
 
}

window.onload = init;
