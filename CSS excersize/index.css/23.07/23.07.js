/* 1.
let number1 = prompt("enter a number")

console.log(number > 10 ? "number is bigger" : 'number is smaller')  */

/* 2.
let number1 = prompt("enter 1st number")
let number2 = prompt("enter 2nd number")

if (number1 > number2) {
    alert('1st number is bigger')
} else if (number2 > number1) {
    alert ("2nd number is bigger")
} else {
    alert('numbers are equal')
} */

/* 3. 
let str=prompt( 'enter you'r str')

if (str.length > 20) {
    alert("thats a long 1 BRO!")
} else if (str.length >= 10) {
    alert("that's an ok one"); 
} else {
    alert('Bro, learn how to type!!!')
}*/

/*4.
let str=prompt ('enter you\'r str')
alert(str > 20 ? str.length : str) */

const dayNumber = parseInt(prompt("Please enter a number between 1 and 7:"));

switch (dayNumber) {
  case 1: alert("The number 1 represents Sunday."); break;
  case 2: alert("The number 2 represents Monday."); break;
  case 3: alert("The number 3 represents Tuesday."); break;
  case 4: alert("The number 4 represents Wednesday."); break;
  case 5: alert("The number 5 represents Thursday."); break;
  case 6: alert("The number 6 represents Friday."); break;
  case 7: alert("The number 7 represents Saturday."); break;
  default: alert("The number entered is not between 1 and 7.");
}
