import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'

const Datafetch = () => {
    const[posts, setPost]=useState([]);
    const[limit, setLimit]=useState(20);

    useEffect(() => {
        axios.get(`http://jsonplaceholder.typicode.com/posts`)
        .then((res)=>{
            // console.log(res)
            // console.log(res.data)
            setPost(res.data)
        })
        .catch(err=>console.log(err))
    })

    return (
        <>
    {posts.slice(0,limit).map(item=>(
        <li className= "px-5" key={item.id}>{item.title}</li>
    ))}

{ posts.length > limit && <button className="btn btn-info text-white m-5" onClick={()=>setLimit(limit+20)}>Load More</button>}

{ limit > 0 && <button className="btn btn-info text-white m-5" onClick={()=>setLimit(limit-20)}>Show Less</button>}

        </>
    )
}

export default Datafetch
