import React, { useState } from 'react'
import Secondpage from './Secondpage';

const ReactMemo = () => {
    const [num, setNum] = useState(0)
    const [secnum, setSecnum] = useState(10)
    console.log("this is react.memo page");
    // setInterval(() => {
    //     setNum(preVal => preVal + 1)
    // }, 5000);
    return (
        <div>
            <h1>First Page Memo: {num}</h1>
            <Secondpage name={secnum}/>
            <button onClick={()=> setNum((preVal)=> preVal + 1)}>First component</button>
            <button onClick={()=> setSecnum(preVal => preVal + 10)}>Second component</button>
        </div>
    )
}

export default ReactMemo
