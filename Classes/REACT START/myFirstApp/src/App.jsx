import { useState } from 'react'

function App() {
  let [count, setCount] = useState(0)


  const increment = () => {
    if (count < 20) {
      setCount(count + 1);
    }
  }
  const decrement = () => {
  if (count > 0) {
    setCount(count - 1);
  }
  }

  return (
    <>
      <h1 id='result'>{count}</h1>
      <button onClick={increment}>Increment</button>
      <br />
      <br />
      <button onClick={decrement}>Decrement</button>
    </>
  )
}

export default App
