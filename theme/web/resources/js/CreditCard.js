var ccNumber = document.getElementsByClassName("cc-number")[0].getElementsByClassName("form-control")[0];
var ccName =  document.getElementsByClassName("cc-name")[0].getElementsByClassName("form-control")[0];
var ccExpiry = document.getElementsByClassName("cc-expiry")[0].getElementsByClassName("form-control")[0];
var ccCVC = document.getElementsByClassName("cc-cvc")[0].getElementsByClassName("form-control")[0];


ccNumber.setAttribute("name","cardnumber");
ccName.setAttribute("name","ccname");
ccExpiry.setAttribute("name","cc-exp");
ccCVC.setAttribute("name","cc-cvc");

ccName.setAttribute("autocomplete","cc-name");
ccCVC.setAttribute("autocomplete","cc-csc");
ccExpiry.setAttribute("autocomplete","cc-exp");

