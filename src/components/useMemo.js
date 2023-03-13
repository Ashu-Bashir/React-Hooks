import { useState , useMemo } from "react";

export default function UseMemoHook() {
const [number, setNumber]= useState(0)
const [dark ,setDark] = useState(false);
const doubleNumber =  useMemo(()=>{
  return slowFunction(number)
} , [number])
    
const themeStyles = {
    backgroundColor: dark ? "black" : "white" , 
    color: dark ? "white": "black   "
}
    return(
        <>
        <input type="number" value={number} onChange = {e=>setNumber(parseInt(e.target.value))}/> <br/>
        <button onClick={()=> setDark(prevDark=> !prevDark)}>Change Theme</button> <br/>
        <div style={themeStyles}>{doubleNumber}</div> <br/>

        </>
    )
}

function slowFunction(num) {
    console.log("Calling the slow function");
    for (let i = 0; i < 100000; i++) {
        return num*2        
    }
    
}