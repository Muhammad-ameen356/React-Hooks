import React from 'react'

const Secondpage = ({name}) => {
    console.log("ameen");
    return (
        <div>
            <h1> {name}</h1>
        </div>
    )
}

export default React.memo(Secondpage)
