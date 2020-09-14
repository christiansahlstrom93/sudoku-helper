import React, { useEffect } from 'react'

export const App = (props) => {
    useEffect(() => {
        console.log(`UseEffect: ${props.initialData}`)
    }, []);
    return (
        <div>
            Inside App
        </div>
    )
};
