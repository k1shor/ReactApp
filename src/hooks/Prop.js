import React from 'react'

const Prop = (props) => {
    const{language, technology}=props;
    return (
        <>
            <h1>The language name is {language}. It is used for {technology}.</h1>
            
        </>
    )
}

export default Prop
