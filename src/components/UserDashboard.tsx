import Dashboard from "./Dashboard"
import { UserContext } from "./UserContext"

export type UserType={
    name:string,
    isSubscribed:boolean
}
const UserDashboard=()=>{
    
    const user:UserType={
        name:"CodeQuotient",
        isSubscribed:false
    }

    return (
        <>
        {/* <Dashboard user={user}/> */}

        <UserContext.Provider value={user}>
        <Dashboard/>
        </UserContext.Provider>
        </>
    )


}
export default UserDashboard;
