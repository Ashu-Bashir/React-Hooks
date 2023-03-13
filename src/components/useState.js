import { useState } from "react";
 export default function UseStateHook() {
    // we can use 2 useStates for count and theme separately as well
  const [state, setState] = useState({ count: 0 , theme : "blue"});
  const count = state.count;
  const theme = state.theme;
  function decrementCount() {
    setState((prevState)=>{
     return {...prevState, count: prevState.count-1}  // using ... (spread operator) , we wont override the whole object
    })
  }
  function incrementCount() {
    setState((prevState)=>{
      return {...prevState , count: prevState.count+1}
    })
  }
  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span> 
      <button onClick={incrementCount}>+</button>


    </>
  );
}