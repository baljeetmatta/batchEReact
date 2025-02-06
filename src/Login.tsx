import { useState } from "react";

// const Login=()=>{
//    const [data,setData]= useState("hi");
//    //console.log(state);
//    // let data="Hi";
//     const clickHandler=()=>{
//         //data="Bye";
//         setData("Bye");
//        // console.log(data);
//         //console.log(data);
//     }
//     return (
//         <>
//        <div>This value {data}</div>
//         <button onClick={clickHandler}>Change</button>
//         </>
//     )
// }
type UserType={
    name:string,
    email:string
}
const Login=()=>{
    const [isLoggedIn,setLogin]=useState(false);
    const [user,setUser]=useState<UserType>({} as UserType);
    //const [user,setUser]=useState<UserType|null>(null);

    const loginHandler=()=>{
        setLogin(true);
        setUser({name:"Code",email:"email"})

    }
    const logoutHandler=()=>{
        setLogin(false);
        setUser({} as UserType);
    }
    return (
        <>
        {isLoggedIn?'Logged in':'Logged Out'}
        {user.name} {user.email}
        {/* <button onClick={()=>{setLogin(true)}}>Log in</button>
        <button onClick={()=>{setLogin(false)}}>Log out</button> */}
        <button onClick={loginHandler}>Log in</button>
        <button onClick={logoutHandler}>Log out</button>
        </>
    )
}
export default Login;
