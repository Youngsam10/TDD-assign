//console.log("Hello world");
// const add = (x, y) => { 
//     if (typeof x !== 'number' || typeof y !== 'number') return 'parameter is not a number';
//     return x + y; 
// };

// console.log(add(10, 2));
// module.exports = { add };


// const multiply = (x, y) => {
//     if (typeof x !== 'number' || typeof y !== 'number') return 'parameters are not numbers';
//     return x * y;
//   };
  
//   console.log(multiply(5, 3));
//   module.exports = { multiply };



// const divide = (x, y) => {
//     if (typeof x !== 'number' || typeof y !== 'number') return 'parameters are not numbers';
//     if (y === 0) return 'division by zero is not allowed';
//     return x / y;
//   };
  
//   console.log(divide(10, 2));
 //   module.exports = { divide };
  



const subtract = (x, y) => {
    if (typeof x !== 'number' || typeof y !== 'number') return 'parameters are not numbers';
    return x - y;
  };
  
  console.log(subtract(8, 3));
  module.exports = { subtract };
  
  