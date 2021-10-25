import React from 'react'
import ComponentA from './ComponentA'
import GlobalContextProvider from './GlobalContext'

const Show = () => {
    return (
        <>
            <GlobalContextProvider>
                <ComponentA />
            </GlobalContextProvider>
        </>
    )
}

export default Show
