import { useContext, useRef } from "react";
import { LoginContext, UserType } from "./LoginContext";

const LoginScreen=()=>{
    const inputRef=useRef<HTMLInputElement|null>(null);
const context=useContext<UserType|undefined>(LoginContext);
    const loginHandler=()=>
    {
        context?.setName(inputRef.current?.value);

        //console.log(inputRef.current?.value)
      //  if(inputRef.current)
       // inputRef.current.value="Coding"
    }
const logoutHandler=()=>{
    context?.setName(undefined);
    
}
    if(context?.name)
        return <button onClick={logoutHandler}>Logout</button>;

    return (
        <>
        <input type="text" ref={inputRef}/>
        <button onClick={loginHandler}>Login</button>
        </>
    )


}
export default LoginScreen;