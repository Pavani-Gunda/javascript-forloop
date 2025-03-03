//Scenario 1: Counting Numbers
//Write a for loop to print numbers from 1 to 10.
for( var a = 1; a <= 10; a = a+1){
  console.log(a);
}
// 1 2 3 4 5 6 7 8 9 10

//Scenario 2: Sum of Numbers
//Write a for loop to calculate the sum of all numbers from 1 to 100.
var sum = 0
for( b=1; b<= 100; b = b+1){
  sum += b;
}
console.log(sum);

//Scenario 3: Multiplication Table
//Write a for loop to print the multiplication table of 7 (up to 10).
for (let i = 1; i <= 10; i++) {
  console.log(`7 x ${i} = ${7 * i}`);
}


//Scenario 4: Even Numbers
//Write a for loop to print all even numbers between 1 and 20.

for(var num = 1; num <= 20; num++){
  if( num % 2 == 0){
  console.log( num);
  }
}

//Scenario 5: Factorial Calculation
//Write a for loop to calculate the factorial of a number (e.g., 5!).
 num = 1
 for( var c = 1; c<=5; c++){
  num = num * c
 }
 console.log("factorial of 5!: ", num);


 //Scenario 6: Power of a Number
//Write a for loop to calculate the power of a number (e.g., 2^5).
 var a = 2
 for(  var exponent = 5; exponent<=5; exponent++){
  a = a ** exponent
 }
 console.log("power of a 2  ^ 5:", a );

 //Scenario 7: Odd Numbers in Reverse
//Write a for loop to print all odd numbers between 20 and 1 in reverse order.
 for(var i = 20; i>= 1; i--){
  if( i % 2 == 1);{
  console.log(i);
  }
 }






