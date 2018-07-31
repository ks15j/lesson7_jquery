/*
  Program Name: Recipe DisplayApplication
  Author:
  Date: 
  Filename:
  script.js
*/
/* global $*/

//displays the next element after the current target
function display(event) {
    
  $(event.currentTarget).next().fadeIn();

}//end of display

//attach event listener to h3 elements to invoke display function when clicked
$("h3").click(display);













