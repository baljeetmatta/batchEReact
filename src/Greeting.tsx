const clickHandler=((e:MouseEvent)=>{
   
    let target=e.target as HTMLButtonElement;

    alert("Button clicked "+target.innerText);
});
function Greeting()
{
    return (
        <>
        <button onClick={clickHandler}>Click me</button>
        </>
    )
}
export default Greeting;


