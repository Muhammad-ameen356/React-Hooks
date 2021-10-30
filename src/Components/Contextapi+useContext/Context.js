import React, { useContext } from 'react'
import { Fullname } from '../../App'

const Context = () => {
    const val = useContext(Fullname)
    console.log(val);
    return (
        <div>
            {/* <Fullname.Consumer>
                {(val) => {
                    return <h2>second page {val}</h2>
                }}
            </Fullname.Consumer> */}
        </div>
    )
}

export default Context

