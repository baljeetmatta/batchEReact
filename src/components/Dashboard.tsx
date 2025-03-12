// import Profile from "./Profile";
// import Sidebar from "./Sidebar";
// import { UserType } from "./UserDashboard";
// type DashboardProps={
//     user:UserType
// }
// const Dashboard=(props:DashboardProps)=>{

import { useContext } from "react";
import Profile from "./Profile";
import Sidebar from "./Sidebar";

//     return (
//         <>
//         <div>Dashboard</div>
//         <div>User: {props.user.name}</div>
//         <Sidebar user={props.user}/>
//         <Profile user={props.user}/>
//         </>
//     )
// }
// export default Dashboard;
import { UserContext, UserType } from "./UserContext";
const Dashboard=()=>{
    const user= useContext<UserType|null>(UserContext);

    return (
        <><div>Dasboard</div>
        {user?.name}
        <Sidebar/>
        <Profile/>

        
        </>
    )
}
export default Dashboard;