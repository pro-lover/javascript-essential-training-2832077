/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */


const agumentsParentheses = 10;
(function (agumentsParentheses) {
 
    
    console.log('The sum of a and b is:', 1+2);
    })();
console.log("aguments Parentheses : ",  agumentsParentheses)


function functionDeclaration (agumentsParentheses) {

    return 1+2+agumentsParentheses;

}
console.log("function Declaration : ",  functionDeclaration(agumentsParentheses))

const functionExpression = function (agumentsParentheses) {
   return 1+2+agumentsParentheses;
}
console.log("function Expression : ",  functionExpression(agumentsParentheses))



const errowFunction = (agumentsParentheses) => { return agumentsParentheses+1+2; };
 console.log("errow Function: ",  errowFunction(agumentsParentheses))

 const errowFunctiontwo = (agumentsParentheses) =>  agumentsParentheses+1+2;
 console.log("errow Functiontwo: ",  errowFunctiontwo(agumentsParentheses))
