// // // // //1. Functions are first-class citizen
// // // // //every entity ->assign to variable, return, argument
// // // // function sayHello()
// // // // {
// // // //     console.log("Hello");

//const { produce } = require("immer");

// // // // }
// // // // //const fn=sayHello;
// // // // //fn();
// // // // function greet(fn)
// // // // {
// // // //    // console.log(fn());
// // // //    fn();
// // // // }
// // // // //greet(sayHello);
// // // // function say()
// // // // {
// // // //         return function()
// // // //         {
// // // //                 return "Hello";
// // // //         }
// // // // }
// // // // // const f=say();

// // // // // console.log(f());

// // // // console.log(say()());

// // // //Higher order Function
// // // //pure functions
// // // function getNumber(number)
// // // {
// // //     return number*Math.random();
// // // }
// // // function getData(number)
// // // {
// // //     return number*2;

// // // }
// // // function add(a,b)
// // // {
// // //     return a+b;

// // // }
// // // let minAge=21;
// // // function isEligible(age,minAge)
// // // {
// // //         return age>minAge;

// // // }
// // // console.log(isEligible(20));

// // // function trim(str)
// // // {
// // //     return str.trim()

// // // }

// // // const trim=(str)=>{
// // //     return str.trim();
// // // }
// // const trim=str=>str.trim();
// // const toLower=str=>str.toLowerCase();

// // import compose from "lodash/fp/compose.js"
// // import pipe from "lodash/fp/pipe.js"

// // let str="  Javascript   ";
// // //let output="<div>"+str+"</div>";
// // //let output =`<div>${trim(str)}</div>`
// // // const wrap=str=>`<div>${str}</div>`;
// // // //const output=wrap(toLower(trim(str)));
// // // //const fn=compose(wrap,toLower,trim);
// // // const fn=pipe(trim,toLower,wrap);
// // // const output=fn(str);
// // // console.log(output);

// // //const wrap=(element,str)=>`<${element}>${str}</${element}>`;
// // const wrap=element=>str=>`<${element}>${str}</${element}>`;
// // // function wrap(element)
// // // {
// // //     return function(str)
// // //     {
// // //         return `<${element}>${str}</${element}>`;

// // //     }
// // // }
// // //const output=wrap(toLower(trim(str)));
// // //const fn=compose(wrap,toLower,trim);
// // const fn=pipe(trim,toLower,wrap("div"));
// // const output=fn(str);
// // console.log(output);
// // //console.log(wrap("span",str));

// // //curring
// // //multiple arguments -> single argment
// // // function add(a,b)
// // // {
// // //     return a+b;
// // // }
// // function add(a)
// // {
// //         return function (b)
// //         {
// //             return a+b;

// //         }
// // }
// // //console.log(add(20,3));

// // //let f=add(5);
// // //let result=f(10);
// // //console.log(result);
// // //console.log(add(5)(10))
// //string immutable
// // let str="Javascript";
// // const nstr=str.toUpperCase();
// // console.log(nstr,str);

// //  let person={"name":"Code"};
// //  let data={...person}
// //  data.name="Coding";
// //  console.log(data,person);

// // let person={
// //     name:"Code",
// //     age:10,
// //     address:{
// //         city:"ABC"
// //     }
// // }
// // const data={...person}
// // data.name="Test";
// // console.log(data,person);
// // data.address.city="City";
// // console.log(data,person);

// // const data={
// //     ...person,
// //     address:{
// //         ...person.address
// //     }
// // }
// // data.address.city="X";
// // console.log(data,person);



//  //foreach( x in person.key)
// // const data=person;//shallow copy
// // data.name="Coding";
// // console.log(data,person);
// // let str="Data";
// // str=str.toLowerCase();

// // import {Map} from "immutable"
// // let book=Map({"title":"First Book",isPublished:false});
// // //MAP API - set of fnctions
// // //set,get,toJS
// // //console.log(book.title);
// // //console.log(book);
// // console.log(book.get("title"));
// // book=book.set("isPublished",true);
// // console.log(book.toJS());

// import { produce } from "immer";


// function publish(book)
// {
//    // book.isPublished=true;
// //    const nbook={...book};
// //    nbook.isPublished=true;
// //    return nbook;
//   const nbook=  produce(book,(draftBook)=>{
//         draftBook.isPublished=true;

//     })
//     return nbook;


// }

// book=publish(book);
// console.log(nbook,book);


/*
1. Action (event) dispatch
2. Store
3. Reducer --Event Handler (state,action) ->update state of store

ACTION->OBJECT

4 Steps
1. Design the store - (state)
Object
Shopping cart->
  products:[],
  categories:[]
  //Bug Tracking
  [
      {
        id:number,
        description:string,
        resolved:boolean

      }
  ]

  {
      carts:[
          {
          }
      ]
      currentUser:{}
      wishlist:{}

  }
      Slices/Reducer

2. Actions
    ADD_BUG, DELETE_BUG, RESOLVE_BUG
    {
        type:"bugAdded",
        payload:{
          description:
        }
    }
    {
      type:"bugResolved",
      payload:{
      id:1
    }
      {
      type:"bugDelete",
      payload:{
      id:1
    }

    }

3. Reducer -> function ->state,action->return state

4. Setup your store

*/

//1. Define Reducer 
let lastid=1;
function reducer(state=[],action)
{
  if(action.type=="bugAdded")
  {
    const obj=[...state];
    obj.push({
      id:lastid++,
      description:action.payload.description,
      resolved:false

    })
    return obj;

  }
  if(action.type=="bugResolved")
    {
     let obj= state.map((item)=>{
        if(item.id==action.payload.id)
          item.resolved=true;

        return item;
      })
      return obj;
  
    }

  return state;

}

import { createStore } from "redux";
const store=createStore(reducer);

console.log(store.getState());

store.dispatch({
  type:"bugAdded",
  payload:{
    description:"First Bug"
  }
})
store.dispatch({
  type:"bugAdded",
  payload:{
    description:"Second Bug"
  }
})
console.log(store.getState());

bugResolved(id)
//


function bugResolved(id)
{
  store.dispatch( {
    type:"bugResolved",
    payload:{
      id:id
    }
  })
}

console.log(store.getState());



