// Javascript Foundations Assessments

// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three" or, print the number and "is not divisble by three".
function result(a) {
      if (a % 3 === 0) {
        console.log("Divisable by three");
      } else {

        console.log("Not divisible by three");

      }

}
// return result
//function call
result(8)
result(6)

// 2. Write an object called helloMe. Include your first_name, last_name and at least two other properties of you. Write a function that returns a description of you.



var helloMe = {first_name:"Sunil" , last_name: "Karakkattil" , age:41 , nationality:"Indian",
getdata: function(){return this.first_name+ "-" + this.last_name+ "-" +this.age+ "-"+ this.nationality}};
console.log(helloMe.getdata());

// 3. Create an array of 5 grocery items. Write a function that returns the first, middle, and last item as a string.

var grocery = ["milk", "Soda","Coffee", "Sugar", "Salt"]
function chooseThree(arr) {
  var firstItem = arr.shift()
  console.log(firstItem);
  var index = Math.floor(arr.length/2)
  console.log(index);
  var middleItem = arr[index-1]
  console.log(middleItem);
  var lastItem = arr.pop()
  console.log(lastItem);
}
chooseThree(grocery)
// 4. Write a function called alphabetSoup that takes an argument of "str" and return a string with the letters in alphabetical order (ie. learn becomes aelnr). Assume numbers and punctuation symbols will not be included in the parameter.

function alphabetSoup(str) {
    var arr = str.split('')
        newStr = arr.sort()
    return newStr.join('')
}

console.log(alphabetSoup("learn"));

// 5. Given the arrays below, write a function animalNums that uses a for loop to print one value from each array concatenated together.

var nums = [9, 5, 88, 2, 5, 42, 57]

var nouns = ["ducks", "elephants", "pangolin", "rhinoceros", "giraffes", "penguins", "llamas"]

// output should be: "9 ducks", etc
var out = ""
for (var i =0; i<nums.length; i++) {
  out+= nums[i] + ":" + nouns [i] + " , ";
}
console.log(out);

//6. Create an array of 5 numbers. Write a function that loops through the array and returns a new array of the numbers multiplied by 5.
 var numbers = [1, 2, 3, 4, 5]
 function multy5 (arr) {
   for (i=0; i<arr.length; i++) {
     console.log(arr[i]*5);
   }
 }
 (multy5(numbers));

 var numbers = [1, 2, 3, 4, 5]

 function multy5 (arr) {
   var  newA = []
   for (i=0; i<arr.length; i++) {
  newA.push(arr[i]*5)
  }return newA
 }
 console.log(multy5(numbers));
