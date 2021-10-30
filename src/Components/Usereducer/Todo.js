import React from 'react'
import { ACTION } from './Usereducer'
const Todo = ({ todo, dispatch }) => {
    return (
        <div>
            <span key={todo.id}>{todo.name}</span> &nbsp;
            <button >Edit</button> &nbsp;
            <button onClick={() => dispatch({ type: ACTION.DELETE_TODO, payload: { id: todo.id } })}>Delete</button>
        </div>
    )
}

export default Todo
