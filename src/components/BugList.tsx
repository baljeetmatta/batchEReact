import { BugType } from "./BugApp"
type BugProps={
    bugs:BugType[],
    setBugs:(args:BugType[])=>void
}

const BugList=(props:BugProps)=>{
    const resolveHandler=(id:number)=>{
        const updateBugs=  props.bugs.map ((item)=>{
              if(item.id==id)
                  item.resolved=true;
      
              return item;
          })
          console.log(id, updateBugs)
          props.setBugs(updateBugs);
      
      
      }

    return (

        <div className="container grid grid-cols-4 gap-4">
        {
            props.bugs.map((item)=>{
                    return (
                        <div className="flex gap-3 p-3 bg-gray-300">
                                    <div>{item.description}</div>
                                    <div>{item.resolved?"Resolved":<button className="bg-red-400 text-white rounded-md p-2" onClick={()=>{resolveHandler(item.id)}}>Resolve</button>}</div>

                        </div>
                    )
            })
        }
        </div>

    )
}
export default BugList;