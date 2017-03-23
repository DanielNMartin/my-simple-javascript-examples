/*
 Functions are one of the fundamental building blocks in Javascript. A function is a Javascript procedure-
 a set of statements that performs a task or calculates a value. To use a function, you must define it 
 somewhere in the scope from which you wish to call it.
*/

function square(number) {
    return number * number;
}


/*
Calling Functions: Defining a function doesn't execute it. Defining the function simply names the function 
and specifies what to do when the function is called. Calling the function actually performs the specified 
actions with the indicated paramaters. 
*/

function square(n) { return n * n; }
console.log(square(5));