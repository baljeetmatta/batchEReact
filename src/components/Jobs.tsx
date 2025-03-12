import { NavLink } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
//import jsondata from "../jobs.json"
export interface Jobstype{
    id:number,
    title:string,
    description:string,
    package:string
}
const Jobs=()=>{
   // const data=useLoaderData();
   const data=useLoaderData<Jobstype[]>();

    return (
        <>
        
        <div>Jobs Data</div>
        <div className="container">
            <div className="grid grid-cols-3 gap-4">
            {
                data.map((item)=>{
                    return (
                        <>
                        <div className="bg-gray-200 p-4">
                            <NavLink to={`/JobDetails/${item.id}`}> <div>{item.title}</div></NavLink> 
                           {/* <NavLink to="/jobdetails" state={{data:item.id}}>{item.title}</NavLink> */}
                            <div>{item.description}</div>
                        </div>
                        </>
                    )
                })
            }

            </div>

        </div>
        
        </>
    )
}
export default Jobs;
export const fetchData=async ()=>{
    //return "Hi";
    // fetch("/jobs.json").then((res)=>{
    //     return res.json();
    // }).then((res)=>{
    //     return res;
    // })
   const response=await fetch("/jobs.json");
   const output=await response.json();
   //console.log(output);
    return output;


}