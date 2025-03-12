import { createContext } from "react"

export type UserType={
    name:string,
    isSubscribed:boolean
}
export const UserContext=createContext<UserType|null>(null);
