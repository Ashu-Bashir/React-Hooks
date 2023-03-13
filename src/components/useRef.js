import { useState, useRef , useEffect } from "react";

export default function UseRefHook() {
const [name, setName] = useState("")
const renderCount = useRef(0) // {current:0}
const inputRef =useRef();
const prevName = useRef(" ")

function focus() {
    inputRef.current.focus();
    inputRef.current.value = "hi"
}

useEffect(()=>{
    renderCount.current = renderCount.current+1
})

useEffect(()=>{
prevName.current = name
} , [name])
    return(
        <>
        <input ref={inputRef} value={name} onChange ={e=> setName(e.target.value)}/>
        <div>My Name is {name} and it is used to be {prevName.current}</div>
        {/* <div>I rendered{renderCount.current} times.</div> */}
        <button onClick={focus}>Focus</button>
        </>
    )
    
}