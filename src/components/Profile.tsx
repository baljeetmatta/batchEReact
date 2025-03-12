// import { UserType } from "./UserDashboard";

import { useContext } from "react";
import { UserContext, UserType } from "./UserContext";

// type ProfileProps={
//     user:UserType
// }

// const Profile=(props:ProfileProps)=>{
//     return (
//         <><div>Profile Page</div></>
//     )
// }
// export default Profile;


const Profile=()=>{
     const user= useContext<UserType|null>(UserContext);
    
    return (
        <>
        <div>Profile </div>
        {user?.name}
        </>
    )
}
export default Profile;