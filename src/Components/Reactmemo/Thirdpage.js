import React from 'react'

const Thirdpage = ({name}) => {
    console.log("Third Page");
    return (
        <div>
            <h1>Third Page {name}</h1>
        </div>
    )
}

export default React.memo(Thirdpage)
