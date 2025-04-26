//On page script
{/* <script type="text/javascript">
</script> */}


//External JS file
{/* <script src="filename.js"></script> */}


//Functions
function addNumbers(a, b) {
    return a + b; ;
   }
   x = addNumbers(1, 2);


//Outputs
console.log(a); // write to the browser
document.write(a); // write to the HTML
alert(a); // output in an alert
confirm("Really?"); // yes/no dialog, returns it
prompt("Your age?","0"); // input dialog.


/* Multi line
 comment */
// One line comments

//If- Else
if ((age >= 14) && (age < 19)) { // logical
    status = "Eligible."; // execute
   } else { // else bl
    status = "Not eligible."; // execute
}

//Data types
var age = 18; // number
var name = "Jane"; // string
var name = {first:"Jane", last:"Doe"}; // object
var truth = false; // boolean
var sheets = ["HTML","CSS","JS"]; // array
var a; typeof a; // undefined
var a = null; 

//Arrays
var dogs = ["Bulldog", "Beagle", "Labrador"]; 
var dogs = new Array("Bulldog", "Beagle", "Labrador");  // declaration

alert(dogs[1]);             // access value at index, first item being [0]
dogs[0] = "Bull Terier";    // change the first item

for (var i = 0; i < dogs.length; i++) {     // parsing with array.length
console.log(dogs[i]);
}

//JSON
var str = '{"names":[' +                    // crate JSON object
'{"first":"Hakuna","lastN":"Matata" },' +
'{"first":"Jane","lastN":"Doe" },' +
'{"first":"Air","last":"Jordan" }]}';
obj = JSON.parse(str);                      // parse
document.write(obj.names[1].first);         // access
//Send
var myObj = { "name":"Jane", "age":18, "city":"Chicago" };  // create object
var myJSON = JSON.stringify(myObj);                         // stringify
window.location = "demo.php?x=" + myJSON;                   // send to php
//Storing and retrieving
myObj = { "name":"Jane", "age":18, "city":"Chicago" };
myJSON = JSON.stringify(myObj);                 // storing data
localStorage.setItem("testJSON", myJSON);   
text = localStorage.getItem("testJSON");        // retrieving data 
obj = JSON.parse(text);
document.write(obj.name);

//Dates
var d = new Date();

Number(d) 
Date("2017-06-23");                 // date declaration
Date("2017");                       // is set to Jan 01
Date("2017-06-23T12:00:00-09:45");  // date - time YYYY-MM-DDTHH:MM:SSZ
Date("June 23 2017");               // long date format
Date("Jun 23 2017 07:45:00 GMT+0100 (Tokyo Time)"); // time zone

//Get Times
var d = new Date();
a = d.getDay();     // getting the weekday

getDate();          // day as a number (1-31)
getDay();           // weekday as a number (0-6)
getFullYear();      // four digit year (yyyy)
getHours();         // hour (0-23)
getMilliseconds();  // milliseconds (0-999)
getMinutes();       // minutes (0-59)
getMonth();         // month (0-11)
getSeconds();       // seconds (0-59)
getTime();          // milliseconds since 1970
//Setting part of a date
var d = new Date();
d.setDate(d.getDate() + 7); // adds a week to a date

setDate();          // day as a number (1-31)
setFullYear();      // year (optionally month and day)
setHours();         // hour (0-23)
setMilliseconds();  // milliseconds (0-999)
setMinutes();       // minutes (0-59)
setMonth();         // month (0-11)
setSeconds();       // seconds (0-59)
setTime();          // milliseconds since 1970)