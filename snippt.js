//Currying / HOFs / Closure in one scenario 
const withPrefix = (prefix) => (message) => `${prefix} : ${message}`; // arrow function that returns an arrow function
const warn = withPrefix("Warnining !!!!!");
console.log(warn); // output:[Function (anonymous)] {(message) => `${"Warnining !!!!!"}: ${message}`}
// withPrefix finished executing and got popped off the call-stack , but we still have "Warnining !!!!!"
// thanks to closure concept the returned func  (message) => `${prefix} : ${message}` has prefix alive cause it needs it
console.log(warn("Disk space low")); //output : Warnining !!!!! : Disk space low
// This Scenario showed the concept of Currying (Splitting) cause we could've done so :
/*
function log(prefix, message) {
    console.log(`${prefix}: ${message}`);
}
log("WARNING", "Disk full");
log("WARNING", "Memory low");
*/
// with currying we supply the prefix just once !
//=======================================================================
const numbers = [1, 2, 3, 4, 5];
/* Array iteration methods */
//1-map(()=>) -> Transform and return a new array
const doubled = numbers.map(num => num * 2);
//2- forEach ->-DOESn't create new arr - loops over an array and does whatever a callback does to every element , 
numbers.forEach((num, index) => {
    console.log(index, num);
});
//3- filter() : keep ONLY elements that satisfy the condition
const even = numbers.filter(num => num % 2 === 0);

//4- reduce(,) : reduce all arr values to 1 val
const ReducedArr=numbers.reduce((total,num)=>total+num , 0);
console.log(ReducedArr);

//5- reducedRight(,) -> same but starts from the end of the array
const result = ["A", "B", "C"].reduceRight(
    (acc, letter) => acc + letter,
    ""
);
console.log(result);
//==================


