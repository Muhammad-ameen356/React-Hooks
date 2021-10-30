import React, { useState } from 'react'
import Secondpage from './Secondpage';
import Thirdpage from './Thirdpage';

const ReactMemo = () => {
    const [num, setNum] = useState(0)
    const [secnum, setSecnum] = useState(10)
    const [thirdnum, setThirdnum] = useState(20)
    console.log("First Main page");
    
    return (
        <div>
            <h1>First Page Memo: {num}</h1>
            <Secondpage name={secnum}/>
            <Thirdpage name={thirdnum}/>
            <button onClick={()=> setNum((preVal)=> preVal + 1)}>Add on First component</button>
            <button onClick={()=> setSecnum(preVal => preVal + 10)}>Add on Second component</button>
            <button onClick={()=> setThirdnum(preVal => preVal + 20)}>Add on Third component</button>

        </div>
    )
}

export default ReactMemo;
