/*
  Program Name: Recipe DisplayApplication
  Author:
  Date: 
  Filename: drill4.js
*/
/*global $*/
/*global 'toggle'*/

//displays the next element after the current target
function display(event) {
    
  $(event.currentTarget).next().fadeIn();

}//end of display

//attach event listener to h3 elements to invoke display function when clicked
//$("h3").click(display);

//displays and animates the next element after the current target
  function display2(event) {
    
    $(event.currentTarget).next().animate( {height: ‘toggle’}, "slow");
    
}//end of display2

//attach event listener to h3 elements to invoke display function when clicked
$("h3").click(display2);











