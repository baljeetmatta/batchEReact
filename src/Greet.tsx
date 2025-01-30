type GreetType={
    name:string,
    years?:number
}
function Greet(props:GreetType)
{
    return (
        <>
       <div> Welcome to {props.name}</div>
        </>
    )
}
export default Greet;
