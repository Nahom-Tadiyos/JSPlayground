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