type ChildProps={
    data:string
    code:(args:string)=>void;
}
const Child=(props:ChildProps)=>{
    const changeHandler=()=>{
       // props.data="Bye";
       props.code("Bye");
       

    }
    return (
        <>
        <div>Child {props.data}</div>
        <button onClick={changeHandler}>Change</button>
        </>

    )
}
export default Child;