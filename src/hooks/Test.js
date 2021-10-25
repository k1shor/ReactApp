import React, {useState, useEffect} from 'react'

const Test = () => {
    const[count,setCount]=useState(0)
    const[data,setData]=useState(1)

    useEffect(()=>{
        alert('This is the side effect using useEffect')
    },[count])

    return (
        <>
            <center><h1>{count}</h1></center>
            <center><button onClick={()=>setCount(count+1)}>Click to see result</button></center>
            <center><h2>{data}</h2></center>
            <center><button onClick={()=>setData(data+2)}>Click</button></center>

        </>
    )
}

export default Test
