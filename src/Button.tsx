
type ButtonProps={
    value:string,
    click:()=>void
}

function Button(props:ButtonProps){
    return (
        <>
        
        <button onClick={props.click}>{props.value}</button>
        </>
    )
}
export default Button;