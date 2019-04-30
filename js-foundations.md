#Javascript Foundations Assessments
Without using Google answer the following:
    1. List the data types in Javascript. Indicate which are primitives.
       Objects and premitives are two types of datatypes. Boolean,Number,String,Undefined,symbol and null are primitives
    2. What's the difference between =, ==, and === in JavaScript?
       = : used for assign a value,
       == : compare two values only with their values
	===: compare both value and datatype
    3. What is the difference between an array's index and length?
       Index begins with zero but length starts from one
    4. What are the three parts of a for loop?
       Initialization, condition and iteration
    5. What is a function's declaration, argument, and call?
       Declaration is key word function followed by a name or empty parentheses and the value inside the parentheses is called argument. To use a function, you must define it somewhere in the scope from which you wish to call it.
    6. What are the three main steps in saving work to github?
         Git status, git add . And git commit
    7. What is the terminal command to move directories?
       Change directory cd directory name
    8. Do you have a suggestion for a Check In question?
       nope
    9. What was your favorite topic this week?
       React components
    10. What was your "A-ha!" moment this week?
Stretch: The following questions are potential interview questions. First, try to answer each question on your own then Google the answer to further your knowledge.
    1. Look at this Javascript and try to predict, what will the browser's console show?
var text = 'outside'
function logIt(){
    console.log(text)
    var text = 'inside'
}

logIt()

log outside. Reasign text only work inside the function
    2. What is JSON? How does it relate to javascript objects?
       Unlike JS Object, JSON object has to be fed into a variable as a string and then passed into JS
    3. Describe a closure, what is it good for and how do you recognize one?
       Closures are inner functions inside of an outer function. They have their own local scope and has access to outer function’s scope, parameters and they also have access to global variables.
       
