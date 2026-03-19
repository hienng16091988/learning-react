import { useState } from "react";

function App() {

   const myClass = "text-4xl font-bold";
  
   const [count, setCount] = useState(0);


  return (
    <>
     <h1 className={ myClass } >Number is { count }</h1>

     <button onClick={ () => setCount(count + 1) }  className="bg-blue-500 text-white px-4 py-2">
      Click
     </button>

    </>
  )
}

export default App
