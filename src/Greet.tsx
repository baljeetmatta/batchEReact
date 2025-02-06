type GreetType={
    name?:string,
    years?:number,
    children:React.ReactNode
}
function Greet(props:GreetType)
{
    return (
        <>
       <div> Welcome to {props.name} - {props.years}</div>
       <p>{props.children}</p>
        </>
    )
}
export default Greet;
