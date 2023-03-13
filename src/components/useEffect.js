import { useEffect , useState } from "react";

export default function UseEffectHook() {
   const [resourceType, setResourceType] =  useState("posts");
   const [items, setItems] = useState([])

   useEffect(()=>{
    console.log("rendering!!");
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    .then((response) => response.json())
    .then((json) => setItems(json)); 
    
    return()=>{
        console.log("cleans up the prior render");
    }
     } , [resourceType])
    return(
        <>
        <button onClick={()=>setResourceType("posts")}>Posts</button>
        <button onClick={()=>setResourceType("users")}>Users</button>
        <button onClick={()=>setResourceType("comments")}>Comments</button>
        <h1>{resourceType}</h1>
        {items.map(item=>{
            return <pre>{JSON.stringify(item)}</pre>
        })}
        </>
    )
}
