import UserDashboard from "./components/UserDashboard";

function App(){
  return (
    <>
    <UserDashboard/>
    </>
  )
}
export default App;


// import Posts from "./components/Posts";

// function App(){
//   return (
//     <>
//     <Posts/>
//     </>
//   )
// }
// export default App;
// // // //  //import './App.css'
// // // // import Banner from './Banner';
// // // //  //import Greeting from './Greeting';
// // // //  import Button from './Button';
// // // // import Controls from './Controls';
// // // // import Parent from './Parent';
// // // // import State from './State';

// // import { createBrowserRouter, RouterProvider } from "react-router-dom"
// // import Home from "./components/Home"
// // import About from "./components/About"
// // import Jobs, { fetchData } from "./components/Jobs"
// // import { fetchDetails } from "./components/JobDetails"

// // // import { Route, Routes } from "react-router-dom";
// // // import Button from "./Button";
// // // import CTimer from "./CTimer";
// // // import Controls from "./Controls";
// // // import Home from "./components/Home";
// // // import Contact from "./components/Contact";
// // // import About from "./components/About";
// // // import Navbar from "./components/Navbar";
// // // import Login from "./Login";
// // // import MasterLayout from "./components/MasterLayout";

// // // // import UI from './UI';
// // // //  function clickHandlerSend(e:React.MouseEvent){

// // // //   let target=e.target as HTMLButtonElement;

// // // //   alert("clicked on  button "+target.innerText)
// // // //  }
// // // //  function clickHandlerClick(e:MouseEvent){
// // // //    let target= e.target as HTMLButtonElement;
// // // //   alert("clicked on  button" +target.innerText)

// // // //  }
// // // //  function App()
// // // //  {
// // // //   return (
   
// // // //    <>
  
   
// // // //    {/* <State name="Code"/> */}

// // // //    {/* <UI/> */}
// // // //    {/* <Parent/> */}

// // // //     {/* <Banner/> */}
// // // //     {/* Welcome to React
// // // //     <Controls/> */}
// // // //     {/* <Button value="Send" click={clickHandlerSend}/>
// // // //     <Button value="Click" click={clickHandlerClick}/> */}

// // // //     {/* <Greeting/>
// // // //     <Greeting/> */}

// // // //     </>
// // // //   )
// // // //  }
// // // //  export default App;
// // // // // import Greet from './Greet'

// // // // // function App()
// // // // // {
// // // // //   let data=10;
// // // // //   return (
// // // // //     <>
    

// // // // //     Welcome to App
// // // // //     <br/>
    

// // // // //     <Greet name="CodeQuotient" years={data}>
// // // // //     <Test/>
      
// // // // //       </Greet>
// // // // //     {/* <Greet name="Chitkara" />
// // // // //     <Greet/> */}
    
// // // // //     </>
// // // // //   )
// // // // // }
// // // // // function Test()
// // // // // {
// // // // //   return (
// // // // //     <>
// // // // //     Test Component
// // // // //     </>
// // // // //   )
// // // // // }
// // // // // export default App

// // // // // import testObj from "./data.json";

// // // // // function App() {

// // // // //   let data="Hello to data";
// // // // //   let arrData:string[]=["First","Second","Third"];
// // // // // //  let obj:{name:string,age:number}={
// // // // // //   name:"Test",
// // // // // //   age:30
  
// // // // // //  };
// // // // // type objectType={
// // // // //   name:string,
// // // // //   age:number
// // // // // };
// // // // // let obj:objectType={name:"Test",age:30};

// // // // // //let arrObj:objectType[]=testObj;



// // // // //   return (
// // // // //     <>
// // // // //       <div>
// // // // //         Welcome to react {data}
// // // // //         {
// // // // //           arrData.map((item)=>{
// // // // //             return <p>{item}</p>
// // // // //           })
// // // // //         }
// // // // //         {obj.name}
// // // // //       </div>
// // // // //       <p>Hello</p>
// // // // //       <ul>
// // // // //       {
// // // // //         testObj.map((item)=>{
// // // // //             return <li>{item.name}-{item.age}</li>
// // // // //         })
// // // // //       }
// // // // //       </ul>
// // // // //     </>
// // // // //   )
// // // // // }

// // // // // export default App

// // // const App=()=>{
// // //   return (
// // //     <>

// // //     <div>Menu Area</div>
// // //     {/* <Navbar/> */}
// // // {/* <Routes>
// // //   <Route path="/" element={<Home/>}/>
// // //   <Route path="/about/:id" element={<About/>}/>
// // //   <Route path="/contact" element={<Contact/>}/>
// // //   <Route path="/login" element={<Login/>}/>
// // //   <Route path="/products/" element={<MasterLayout/>}>
// // //     <Route path="cloth" element={<div>Cloth</div>}></Route>
// // //     <Route path="elect" element={<div>Elect</div>}></Route>

// // //   </Route>
// // // </Routes> */}
// // // <div>Another Content</div>
// // //     {/* <Controls/> */}
    
// // //     {/* <Routes>
// // //       <Route path="/" element={<div>Home Page</div>}></Route>
// // //     <Route path="/timer" element={<CTimer/>}/>

// // //     </Routes> */}
// // //     </>
// // //   )
// // // }
// // // export default App;
// // const router=createBrowserRouter([
// //   //single route
// //   {
// //     path:"/",
// //     element:<Home/>

// //   },
// //   {
// //     path:"/about",
// //     element:<About/>

// //   },
// //   {
// //     path:"/jobs",
// //     element:<Jobs/>,
// //     loader:fetchData
// //   }
// //   ,
// //   {
// //     path:"/jobdetails",
// //     element:<Jobs/>,
// //     loader:fetchDetails
    
// //   }
// // ])
// // function App()
// // {
// //   return (
// //     <>
// //     <div>Content</div>
// //     <RouterProvider router={router}/>

    
// //     </>
// //   )
// // }
// // export default App;