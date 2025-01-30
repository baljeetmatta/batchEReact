
import './App.css'
import Greet from './Greet'

function App()
{
  return (
    <>
    

    Welcome to App
    <Greet name="CodeQuotient" years={32} />
    <Greet name="Chitkara" />
    
    </>
  )
}
export default App

// import testObj from "./data.json";

// function App() {

//   let data="Hello to data";
//   let arrData:string[]=["First","Second","Third"];
// //  let obj:{name:string,age:number}={
// //   name:"Test",
// //   age:30
  
// //  };
// type objectType={
//   name:string,
//   age:number
// };
// let obj:objectType={name:"Test",age:30};

// //let arrObj:objectType[]=testObj;



//   return (
//     <>
//       <div>
//         Welcome to react {data}
//         {
//           arrData.map((item)=>{
//             return <p>{item}</p>
//           })
//         }
//         {obj.name}
//       </div>
//       <p>Hello</p>
//       <ul>
//       {
//         testObj.map((item)=>{
//             return <li>{item.name}-{item.age}</li>
//         })
//       }
//       </ul>
//     </>
//   )
// }

// export default App
