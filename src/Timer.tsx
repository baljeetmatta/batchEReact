import { useEffect, useState } from "react";

const Timer=()=>{
   // let count=1;
   const [count,setCount]=useState(1);
useEffect(()=>{

    let id=setInterval(timerTick,1000);
  //  console.log(id);
  //return ()=>clearInterval(id);
    //for each render
    //Dependency empty -> once
},[])//dependency array - list of variables
    
    const  timerTick=()=>{
            setCount(count+1);

           // count++;
         //   console.log(count);

    }

  //  let id=setInterval(timerTick,1000);
   // console.log(id);
    return (
        <>
        {count}
        </>
    )
   


}
export default Timer;