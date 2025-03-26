//1. Logical , State

import { useRef, useState } from "react";
import BugList from "./BugList";

//2. Parent Child
//3. id, description, resolved
export type BugType={
    id:number,
    description:string|undefined,
    resolved:boolean
}
let lastid=1;
const BugApp=()=>{
const inputRef=useRef<HTMLInputElement|null>(null);
const [bugs,setBugs]=useState<BugType[]>([]);

const addHandler=()=>{
    const existingBug=[...bugs];
    existingBug.push({
        id:lastid++,
        description:inputRef.current?.value,
        resolved:false
    })
    setBugs(existingBug);


}
// const resolveHandler=(id:number)=>{
//   const updateBugs=  bugs.map ((item)=>{
//         if(item.id==id)
//             item.resolved=true;

//         return item;
//     })
//     console.log(id, updateBugs)
//     setBugs(updateBugs);


// }
    return (
        <>
        <input ref={inputRef} type="text" className="border"/>
        <button onClick={addHandler} className="bg-red-400 text-white rounded-md p-2">Add</button>
        <BugList bugs={bugs} setBugs={setBugs} />
        </>
    )
}
export default BugApp;