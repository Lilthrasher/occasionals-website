/*!
* Start Bootstrap - One Page Wonder v6.0.5 (https://startbootstrap.com/theme/one-page-wonder)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-one-page-wonder/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

function clipboard() {
    // Get the text field
    var copyText = document.getElementById("copy");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
}

function clipboard2() {
    // Get the text field
    var copyText = document.getElementById("copy-2");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
}

function clipboard3() {
    // Get the text field
    var copyText = document.getElementById("copy-3");

     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
}