//arrow functions / HOFs / Closure in one scenario 
const withPrefix = (prefix) => (message) => `${prefix} : ${message}`;
const warn = withPrefix("Warnining !!!!!");
console.log(warn); // output:[Function (anonymous)] {(message) => `${"Warnining !!!!!"}: ${message}`}
// withPrefix finished executing and got popped off the call-stack , but we still have "Warnining !!!!!"
// thanks to closure concept the returned func  (message) => `${prefix} : ${message}` 
console.log(warn("Disk space low"));