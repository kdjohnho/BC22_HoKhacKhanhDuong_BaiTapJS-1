// Bài 1

document.getElementById("btnCalcSalary").onclick = function() {
   var workDay = 30;

   // calculate salary
   const ONEDAYPAID = 100000;
   var totalSalary = workDay * ONEDAYPAID;
   console.log(totalSalary);
}

// Bài 2
document.getElementById("btnCalcAvg").onclick = function() {
   var firstNum = 10;
   var secondNum = 20;
   var thirdNum = 30;
   var fourthNum = 40;
   var fifthNum = 50;

   // calculate
   var sum = firstNum + secondNum + thirdNum + fourthNum + fifthNum;
   var avgNum = sum / 5;

   console.log(avgNum);
}

// Bài 3
document.getElementById("btnExchange").onclick = function() {
   const EXCHANGERATE = 23500;
   var USD = 500

   // calculate
   var VND = USD * EXCHANGERATE;
   console.log(VND);
   
}

// Bài 4
document.getElementById("btnExcercise4").onclick = function() {
   var length = 4;
   var width = 5;

   var perimeter = (length + width) * 2;
   var area = length * width;

   console.log(perimeter, area);
}

// Bài 5
document.getElementById("btnExcercise5").onclick = function() {
   var number = 44;

   var unitDigit = number % 10;
   var tensDigit = Math.floor(number / 10);

   var sum = unitDigit + tensDigit;

   console.log(sum)
}