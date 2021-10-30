import React from 'react'

const Secondpage = ({name}) => {
    console.log("Second Page");
    return (
        <div>
            <h1>Second Page {name}</h1>
        </div>
    )
}

export default React.memo(Secondpage)
