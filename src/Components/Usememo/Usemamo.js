import React, { useEffect, useState, useMemo } from 'react'

const Usemamo = () => {
    const [count, setCount] = useState(0);
    const [seccount, setSeccount] = useState(0)

    // useEffect(() => {
    //     console.log("Effect run");
    // })

    const usememocheck = useMemo(() => {
        // console.log("memo run");
        return <h2>{seccount}</h2>
    },[seccount])


    return (
        <div>
            {usememocheck}
            <h1>{count}</h1>

            <button onClick={() => setCount((preVal) => preVal + 1)}>Increase</button>
            {/* <button onClick={() => setSeccount((preVal) => preVal + 1)}>Increase Second Count</button> */}

        </div>
    )
}

export default Usemamo
