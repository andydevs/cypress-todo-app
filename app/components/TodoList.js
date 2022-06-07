import React from 'react'
import { useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import { Todo } from './Todo.js'

export function TodoList() {
    const todos = useSelector(todos => todos)
    return (
        <ListGroup>
            { todos.map((text, index) => (
                <Todo text={text} index={index} key={index}/>
            ))}
        </ListGroup>
    )
}