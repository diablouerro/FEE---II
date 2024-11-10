// import { useState } from 'react'

// // function App() {
// //   let [count, setCount] = useState(0)


// //   const increment = () => {
// //     if (count < 20) {
// //       setCount(count + 1);
// //     }
// //   }
// //   const decrement = () => {
// //   if (count > 0) {
// //     setCount(count - 1);
// //   }
// //   }

// //   return (
// //     <>
// //       <h1 id='result'>{count}</h1>
// //       <button onClick={increment}>Increment</button>
// //       <br />
// //       <br />
// //       <button onClick={decrement}>Decrement</button>
// //     </>
// //   )
// // }

// function App() {
//   let [counter, setCounter] = useState(0);

//   const addValue = () => {
//     setCounter((prevCounter) => prevCounter + 1);
//   }

//   const removeValue = () => {
//     if (counter > 0) {
//       setCounter(--counter);
//     }
//   }

//   return (
//     <>

//       <h1>counter</h1>
//       <h2>counter value: {counter}</h2>
//       <button onClick={addValue}>add value</button><br />
//       <button onClick={removeValue}>remove value</button><br />
//       {/* <p>footer: {counter}</p> */}
//     </>
//   )
// }

import React from 'react';
import { useState } from 'react';

export const App = () => {
  let [random, setRandom] = useState(0)
  function btnClickHandler() {
    let somerandom = Math.floor(Math.random()*10 + 1);
    // console.log(somerandom)
    setRandom(somerandom);
  }
  
  return (
    <div>
      <h1>{random}</h1>
      <button onClick={btnClickHandler}>click</button>
    </div>
  )
}


export default App
