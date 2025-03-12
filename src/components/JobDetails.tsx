import { LoaderFunctionArgs, useLoaderData, useLocation } from "react-router-dom";
import { Jobstype } from "./Jobs";

const JobDetails=()=>{
    const Job =useLoaderData<Jobstype>();
    return (
        <>
        
      
        </>
    )


}
export const fetchDetails=async ({params}:LoaderFunctionArgs)=>{
    //return "Hi";
    // fetch("/jobs.json").then((res)=>{
    //     return res.json();
    // }).then((res)=>{
    //     return res;
    // })
    console.log(params.id);

   const response=await fetch("/jobs.json");
   const output=await response.json();
   //console.log(output);
    return output;


}