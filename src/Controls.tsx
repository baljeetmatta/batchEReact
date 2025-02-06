import { ChangeEvent } from "react";

let textData="";
function changeHandler(e:ChangeEvent){
    let target=e.target as HTMLInputElement;
    textData=target.value;
    console.log(textData);


}
function clickHandler(){
    alert(textData);
}
const Controls=()=>{
    return (
        <>
        <input type="text" onChange={changeHandler}/>
        <button onClick={clickHandler}>Print</button>
        
        </>
    )
}
export default Controls
// function Controls()
// {
//     return (
//         <>
//         <div>Controls</div>
//         </>
//     )
// }
// export default Controls;

// const Controls=()=>{
//     return (
//         <>
//         <div>Controls</div>
//         </>
//     )
// }
// export default Controls;
// type ControlProps={
//     name:string;
// }
// const Controls:React.FC<ControlProps>=(props:ControlProps)=>{

//     return (
//         <>
//         <div>Controls</div>
//         </>
//     )
// }
// export default Controls;

// import React from 'react';

// interface Props {
  
// }

// const Component: React.FC<Props> = ({  }) => {
//   return (
//     <></>
//   );
// };

// export default Component;