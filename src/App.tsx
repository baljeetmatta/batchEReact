
 import './App.css'
 //import Greeting from './Greeting';
 import Button from './Button';
import Controls from './Controls';
 function clickHandlerSend(e:React.MouseEvent){

  let target=e.target as HTMLButtonElement;

  alert("clicked on  button "+target.innerText)
 }
 function clickHandlerClick(e:MouseEvent){
   let target= e.target as HTMLButtonElement;
  alert("clicked on  button" +target.innerText)

 }
 function App()
 {
  return (
    <>
    Welcome to React
    <Controls/>
    {/* <Button value="Send" click={clickHandlerSend}/>
    <Button value="Click" click={clickHandlerClick}/> */}

    {/* <Greeting/>
    <Greeting/> */}

    </>
  )
 }
 export default App;
// import Greet from './Greet'

// function App()
// {
//   let data=10;
//   return (
//     <>
    

//     Welcome to App
//     <br/>
    

//     <Greet name="CodeQuotient" years={data}>
//     <Test/>
      
//       </Greet>
//     {/* <Greet name="Chitkara" />
//     <Greet/> */}
    
//     </>
//   )
// }
// function Test()
// {
//   return (
//     <>
//     Test Component
//     </>
//   )
// }
// export default App

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
