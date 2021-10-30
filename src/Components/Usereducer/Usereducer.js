// //* USing useState
// import React, { useState } from 'react'

// const Usereducer = () => {
//     const [counter, setCounter] = useState(0)

//     function increament() {
//         setCounter(counter + 1)
//     }

//     function decreament() {
//         setCounter(counter - 1)
//     }
//     return (
//         <div style={{fontSize: 40, textAlign: 'center'}}>
//             <button onClick={increament}>+</button>
//             <span>{counter}</span>
//             <button onClick={decreament}>-</button>
//         </div>
//     )
// }

// export default Usereducer;

// //* COunter Using useReducer

// import React, { useReducer } from 'react'

// function reducer(state, action) {
//     switch (action.type) {
//         case 'increment':
//             return state + 1
//         case 'decrement':
//             return state - 1
//         default:
//             return state
//     }
// }

// const Usereducer = () => {
//     const [state, dispatch] = useReducer(reducer, 0)


//     return (
//         <div style={{ fontSize: 40, textAlign: 'center' }}>
//             <button onClick={() => dispatch({ type: 'increment' })}>+</button>
//             <span>{state}</span>
//             <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
//         </div>
//     )
// }

// export default Usereducer;



// //* Counter Using useReducer with some unique steps

// import React, { useReducer } from 'react'

// const ACTION = {
//     INCREMENT: 'increment',
//     DECREMENT: 'decrement'
// }

// function reducer(state, action) {
//     switch (action.type) {
//         case ACTION.INCREMENT:
//             return state + action.payload.amount
//         case ACTION.DECREMENT:
//             return state - 1
//         default:
//             return state
//     }
// }

// const Usereducer = () => {
//     const [state, dispatch] = useReducer(reducer, 0)


//     return (
//         <div style={{ fontSize: 40, textAlign: 'center' }}>
//             <button onClick={() => dispatch({ type: ACTION.INCREMENT, payload: {amount: 4,} })}>+</button>
//             <span>{state}</span>
//             <button onClick={() => dispatch({ type: ACTION.DECREMENT })}>-</button>
//         </div>
//     )
// }

// export default Usereducer;



//* Todo Using useReducer

import React, { useReducer, useState } from 'react'
import Todo from './Todo'

const ACTION = {
    ADD_TODO: 'add_todo',
    DELETE_TODO: 'delete_todo'
}

function reducer(todos, action) {
    switch (action.type) {
        case ACTION.ADD_TODO:
            // [...todos], previous jitne bhi array me value hy wo same rahe
            return [...todos, newTodo(action.payload.name)]
        case ACTION.DELETE_TODO:
         return todos.filter(todo=> todo.id !== action.payload.id)
        default:
            return todos
    }
}

function newTodo(name) {
    let date = new Date()
    return { id: date.getTime(), name: name, done: false }
}

const Usereducer = () => {
    const [todos, dispatch] = useReducer(reducer, [])
    const [name, setName] = useState('')
    function handleSubmit(e) {
        e.preventDefault();
        dispatch({ type: ACTION.ADD_TODO, payload: { name: name } })
        setName('')
    }
    console.log(todos);

    return (

        <div style={{ fontSize: 40, textAlign: 'center' }}>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
                <br />
                <input type="submit" value="Submit" />
            </form>

            {todos.map(todo => {
              return <Todo key={todo.id} todo={todo} dispatch={dispatch}/>
            })
            }

        </div>

    )
}

export default Usereducer;
export {ACTION}