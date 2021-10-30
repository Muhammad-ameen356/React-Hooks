import React, { useEffect, useState } from 'react';
import { Fullname } from '../App';
const Useeffect = () => {
    const [num, setNum] = useState(0);
    const [nums, setNums] = useState(2);

    //? This method Run Any Time when Component Render (Render method call on index.js file)
    useEffect(() => {
        console.log("useEffect run");
    });
    //? This method run only one time on first render (Easy to say when page load)
    useEffect(() => {
        console.log("useEffect run");
    }, []);

    return (
        <>
            {/* <button onClick={() => setNums(nums + 1)}>Click me</button>
            <h1>{nums}Muhammad Ameen {num}</h1>
            <button onClick={() => setNum(num + 1)}>Click me</button> */}
            <Fullname.Consumer>
                {val => {
                    return <h1>The {val}</h1>
                }}
            </Fullname.Consumer>
        </>
    );
}

export default Useeffect;
