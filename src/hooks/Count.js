import React, {useState} from 'react'


const Count = () => {
    // count -> variable name
    // setCount -> function which controls/set the variable count value
    // [] -> array destructuring
    // useState(0) -> which set the initial value 0
    const[count,setCount]=useState(0)

    // function increase(){
    //     setCount(count+1)
    // }

    return (
        <>
        <center>
         <h2>{count}</h2>
         <button onClick={()=>setCount(count+1)}>Click to Increase</button>
         {count>0 && <button onClick={()=>setCount(count-1)}>Click to Decrease</button>}  
         {/* <button onClick={()=>setCount(count-1)}>Click to Decrease</button> */}
         <button onClick={()=>setCount(0)}>Reset</button>
         </center>
        </>
    )
}

export default Count
