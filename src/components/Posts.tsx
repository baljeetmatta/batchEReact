import { useEffect, useRef, useState } from "react"
interface PostType{
    id:number,
    title:string,
    body:string
}
const Posts=()=>{
//let data:PostType[]=[];
const [data,setData]=useState<PostType[]|undefined>()
const [isLoading,setLoading]=useState(true);
let abortRef=useRef<AbortController|undefined>(undefined)

const [error,setError]=useState<string|undefined>(undefined)
const [page,setPage]=useState(0);

// fetch()
   useEffect(()=>{
        const fetchData=()=>{
        
            abortRef?.current?.abort();
            abortRef.current=new AbortController();


            setLoading(true);
        fetch(`https://jsonplaceholder.typicode.com/posts?page=${page}`,{signal:abortRef.current?.signal})
        .then((response)=>{
            return response.json(); //create a promise
        }).then((response)=>{
           // console.log(response)
           //data=response;
           setLoading(false);
           setData(response);


        }).catch((e:any)=>{
            console.log(e);
            setLoading(false);
    //         if(e=="AbortError")
    //             setError("due to abort");
    // else
    //         setError("Error in loading");
        })
        }
        //fetchData();
        setTimeout(fetchData,2000)
        
       
   },[page]);
   
//    if(isLoading)
//     return <div>Loading...</div>

//    if(error!="")
//     return <div>{error}</div>

   return (
    <>
    {isLoading && <div>Loading...</div>}
    {/* {error && <div>Error in fetching data</div>} */}
    <button onClick={()=>{setPage(page+1)}}>Page {page}</button>
    <table>
        {
            data?.map((item)=>{
                return (
                    <tr><td>{item.title}</td><td>{item.body}</td></tr>
                )
            })
            
        }
        </table>
    
    </>
   )


}
export default Posts;
