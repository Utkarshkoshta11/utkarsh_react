// function x() {
//   for (var i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
// }
// x();

// 6
// 6
// 6
// 6
// 6

// function x() {
//   for (var i = 1; i <= 5; i++) {
//     function y(x) {
//       setTimeout(function () {
//         console.log(x);
//       }, i * 1000);
//     }
//     y(i);
//   }
// }
// x();

// 1
// 2
// 3
// 4
// 5

// import React, { useState } from "react";
// export default function App() {

//     const [count, setCount] = useState(0);  // This will store the squared value
//     const [prevCount, setPrevCount] = useState(0);  // This will store the base number

//     const handleIncrement = () => {
//         setPrevCount(prevCount + 1);  // Increment the base number
//         setCount(Math.pow(prevCount + 1, 2));  // Set the count as the square of the incremented base number
//     }

//     const handleDecrement = () => {
//         if (prevCount > 0) {
//             setPrevCount(prevCount - 1);  // Decrement the base number
//             setCount(Math.pow(prevCount - 1, 2));  // Set the count as the square of the decremented base number
//         }
//     }

//     return (
//         <div>
//             <h1> Counter: {count}</h1>
//             <button onClick={handleIncrement}>Increment</button>
//             <button onClick={handleDecrement}>Decrement</button>
//         </div>
//     )
// }
