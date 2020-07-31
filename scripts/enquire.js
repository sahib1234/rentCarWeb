"use strict";
function checkPhoneNumber(phoneNo) {
  var phoneRE = /^\(\d\d\) \d\d\d\d-\d\d\d\d$/;
  var str = "";
  if (!phoneRE.test(phoneNo)) {
    str = "The phone number entered is invalid!\n";
  }
  return str;
}
function saveResult(
  daysno,
  state,
  postcode,
  suburbTown,
  streetAddress,
  email_name,
  lastName,
  firstName,
  phoneNumber,
  comment,
  rooftops,
  ACs,
  airbag,
  seater,
  carType,
  prefered,
  email,
  post,
  phone,
  radio
) {
  if (typeof Storage !== "undefined") {
    localStorage.setItem("daysno", daysno);
    localStorage.setItem("state", state);
    localStorage.setItem("postcode", postcode);
    localStorage.setItem("suburbTown", suburbTown);
    localStorage.setItem("streetAddress", streetAddress);
    localStorage.setItem("email_name", email_name);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("phoneNumber", phoneNumber);
    localStorage.setItem("comment", comment);
    localStorage.setItem("rooftops", rooftops);
    localStorage.setItem("ACs", ACs);
    localStorage.setItem("airbag", airbag);
    localStorage.setItem("seater", seater);

    localStorage.setItem("carType", carType);
    localStorage.setItem("prefered", prefered);
    localStorage.setItem("email", email);
    localStorage.setItem("post", post);
    localStorage.setItem("phone", phone);
    localStorage.setItem("radio", radio);
  }
}

function validate() {
  var errMsg = "";
  var result = true;
  var str = "";
  // get form data
  var daysno = document.getElementById("daysno").value.trim();
  var state = document.getElementById("state").value;
  var postcode = document.getElementById("postcode").value;
  var suburbTown = document.getElementById("suburbTown").value;
  var streetAddress = document.getElementById("streetAddress").value;
  var email_name = document.getElementById("email_name").value;
  var lastName = document.getElementById("lastName").value;
  var firstName = document.getElementById("firstName").value;
  var phoneNumber = document.getElementById("phoneNumber").value;
  var rooftops = document.getElementById("rooftops").checked;
  var comment = document.getElementById("comment").value;
  var ACs = document.getElementById("ACs").checked;
  var airbag = document.getElementById("airbag").checked;
  var seater = document.getElementById("seater").checked;

  

  var email = document.getElementById("email").checked;
  var post = document.getElementById("post").checked;
  var phone = document.getElementById("phone").checked;


  

  var carType = document.getElementById("productType").value;
  var prefered = document.getElementById("prefer").value;
  var radio = document.getElementsByName("radio");
  // validate

  if (daysno == "") {
    errMsg += "Days cannot be empty.\n";
  } else if (isNaN(daysno)) {
    errMsg += "Days has not a valid number.\n";
  }

  if (postcode.charAt(0) == 3 && state == "VIC") {
    result = true;
  } else if (postcode.charAt(0) == 8 && state == "VIC") {
    result = true;
  } else if (postcode.charAt(0) == 1 && state == "NSW") {
    result = true;
  } else if (postcode.charAt(0) == 2 && state == "NSW") {
    result = true;
  } else if (postcode.charAt(0) == 4 && state == "QLD") {
    result = true;
  } else if (postcode.charAt(0) == 9 && state == "QLD") {
    result = true;
  } else if (postcode.charAt(0) == 0 && state == "NT") {
    result = true;
  } else if (postcode.charAt(0) == 6 && state == "WA") {
    result = true;
  } else if (postcode.charAt(0) == 5 && state == "SA") {
    result = true;
  } else if (postcode.charAt(0) == 7 && state == "TAS") {
    result = true;
  } else if (postcode.charAt(0) == 0 && state == "ACT") {
    result = true;
  } else {
    errMsg = errMsg + "State and postcode do not match\n";
    result = false;
  }
// take the value from enhancement page
  if (carType == ""){
    errMsg += 'Car Type cannot be empty.'
  }else{
    var tempMsg = carspecificchoice();
    if (tempMsg !== "") {
      errMsg += tempMsg;
      result = false;
    }
  }
  
  // display message and return
  if (errMsg != "") {
    carspecificchoice();
    alert(errMsg);
    result = false;
  }

  
  saveResult(
    daysno,
    state,
    postcode,
    suburbTown,
    streetAddress,
    email_name,
    lastName,
    firstName,
    phoneNumber,
    comment,
    rooftops,
    ACs,
    airbag,
    seater,
    carType,
    prefered,
    email,
    post,
    phone,
    radio
  );
  return result;
}

function init() {
  var enqForm = document.getElementById("enqForm");
  enqForm.onsubmit = validate;
}

window.onload = init;
