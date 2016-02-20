/* */

/*
function button1() {
	$('#btn1').click(function(){
		alert('Button 1 clicked');
	});
};

function button2() {
	$('#btn2').click(function(){
		alert('Button 2 clicked');
	});
};

function button3() {
	$('#btn3').click(function(){
		alert('Button 3 clicked');
	});
};
*/

/*
* Bind click event to multiple buttons
*/
function btnHandler(){
   $('li button').click(function(){
		alert($(this).attr('id') + ' clicked');
	});

};

$(document).ready(function() {
   /* attach click handlers to general purpose buttons if neccessary*/
   /*
   button1();
   button2();
   button3();
   */
   btnHandler();  //bind click handler to all buttons

   /* --- Place your code below this line --- */
   
   //$('#jsMonitor').hide('slow');
   //$('#jsOutput').hide('slow');
   var txtString = '<p>';
   
   for (var i=1; i<100; i++) { txtString += 'test test ' };
   txtString += '</p>';
   $('#jsOutput').append(txtString);
   $('#jsMonitor').append(txtString);
   

});
