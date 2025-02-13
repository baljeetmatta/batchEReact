import { ChangeEvent, useState } from "react";

const UI=()=>{

    //let textData="";
    const [textData,setText]=useState("");

    const changeHandler=(e:ChangeEvent)=>{
        let target=e.target as HTMLInputElement;
       // textData=target.value;
       
       setText(target.value);



    }
    const printHandler=()=>{
        alert(textData);

    }
    const textChangeHandler=()=>{
       // textData="Hi";
        setText("Hi");
        
    }
    return (
        <>
        <div>
            <input type="text" onChange={changeHandler} value={textData}/>
            <button onClick={printHandler}>Print</button>
            <button onClick={textChangeHandler}>Change</button>
        </div>
        </>
    )
}
export default UI;