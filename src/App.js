import { useState } from 'react';
import './App.css';

// const Person = (props) => {//very vwry inpo
//   return (
//     <>
//     <h1>Name : {props.name}</h1>
//     <h2>Last Name : {props.lastname}</h2>
//     <h2>age : {props.age}</h2>
//     </>
//   )
// }
// const App = () => {
//   const name = 'Mehata';//using the string in the app to the name
//   // const isNameShowing = true;//the print the true value in the program
//   // const isNameShowing = false;//print the someone because name is true
//   return (
//     <div className="App">
//       {/* <Person name ={ 'mahesh'} lastname = { 'patil'}/>using this and anther are same  */}

//       <Person nmae ={ 'mahesh'} lastname = { 'patil'} age = {45}/>
//       <Person name = "shiddu " lastname = 'bohare' age={19}/>
//       {/* <Person/>
//       <Person/>
//       <Person/> */}
      

//       {/* using name int the program to the any string */}
//       {/* <h1>Hello, {isNameShowing ? name : 'someone'}</h1> */}
//       {/* <h1>Hellow {2+2} !</h1>  print the output in the program is 4 */}
//       {/* {name ? (
//        <>
//        <h1>{name}</h1>
//        </>
//      ):(
//        <>
//        <h1>test</h1>
//        <h2>There is no name</h2>
//        </>

//      )}
//       */}

//     </div>
//   );
// }

import React from 'react'

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <button onClick={() => setCounter((prevCount) => prevCount -1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount +1)}>+</button>

    </div>
  )
}


export default App;
