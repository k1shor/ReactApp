import React from 'react'

import {Link} from 'react-router-dom'

const Third = () => {
    return (
        <>
        {/* <a href="" target="blank"> </a>*/}
            <Link to="/test"> First</Link> 
            &nbsp; &nbsp; &nbsp; &nbsp; 
            <Link to="/welcome">Second</Link>
        </>
    )
}

export default Third
