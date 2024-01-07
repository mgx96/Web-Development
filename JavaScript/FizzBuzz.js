var output = [];

function fizzBuzz(){
   var numberToPush = output.length + 1;
   if(numberToPush % 3 === 0 && numberToPush % 5 === 0){
      output.push("fizzbuzz");
   }
else if (numberToPush % 3 === 0){
      output.push("fizz");
   }
else if(numberToPush % 5 === 0){
      output.push("buzz");
      }
else{
   output.push(numberToPush);
   }
   console.log(output);
}

