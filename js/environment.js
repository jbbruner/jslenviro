/* 
*
* Bugs: JSON.stringify converts undefined into null. The code below replaces all array elements that
* JSON.stringify converts to null into undefined. If null output is needed, verify with console.log().
*
* To Do:
* Add output node to page if none exists (for generic use on any web page)
*/
function print(data) {
   'use strict';
   var curEl = document.getElementById('jsOutput');  //grab current display contents
   var html = '';
   if (typeof data ==='object' && !Array.isArray(data)) { //do we have an object that is not an array?
      html = '<p><output>' + printObj(data) + '</output></p>';
   } else if (Array.isArray(data)) {  //pretty print arrays
      html = '<p><output>' + JSON.stringify(data).replace(/null/g, 'undefined') + '</output></p>';
   } else {
      html = '<p><output>' + data + '</output></p>';
   }
   curEl.insertAdjacentHTML('beforeend', html)     //append data to page
   return 0;
}

/*
* Clear the display area(s)
*/
function clearDisplay(display) {
   'use strict';
   if (display.toLowerCase() === 'all' || display === 'undefined' || display ==='null') {
	   document.getElementById('jsOutput').innerHTML = "";
	   document.getElementById('jsMonitor').innerHTML = "";
   } else if (display.toLowerCase() === 'output') {
      document.getElementById('jsOutput').innerHTML = "";
   } else if (display.toLowerCase() === 'monitor') {
      document.getElementById('jsMonitor').innerHTML = "";
   }
   return 0;
}

/*
* Display data in the monitor area
*/
function monitor(data) {
   'use strict';
   var curEl = document.getElementById('jsMonitor');  //grab current display contents
   var html = '';
   if (typeof data ==='object' && !Array.isArray(data)) { //do we have an object that is not an array?
      html = '<p><output>' + printObj(data) + '</output></p>';
   } else if (Array.isArray(data)) {  //pretty print arrays
      html = '<p><output>' + JSON.stringify(data).replace(/null/g, 'undefined') + '</output></p>';
   } else {
      html = '<p><output>' + data + '</output></p>';
   }
   curEl.insertAdjacentHTML('beforeend', html)     //append data to page
   return 0;
}

/*
* JSON only encodes keys with values. A function is not a value so JSON ignores functions when using
* stringify. JSON.stringify()'s second argument is a replacer function. You can enable the behavior
* you want by forcing the stringification of functions: 
*
*/
function printObj(obj) {
   'use strict';
   var json = JSON.stringify(obj, function(key, value) {
      if (typeof value === 'function') {  // method found in obj
         return value.toString();  // convert the method to a string
      } else {
         return value;
      }
    }, '\t');
    return json.replace(/\n/g, '<br>').replace(/\t/g, '&nbsp;&nbsp;&nbsp;');
}