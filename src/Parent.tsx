import { useState } from "react";
import Child from "./Child"

const Parent=()=>{
   // let data="hi";
   const [data,setData]=useState("Hi");

    return (
        <>
        <div>Parent {data}</div>
        <Child data={data} code={setData}/>
        </>
    )
}
export default Parent;
