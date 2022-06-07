/**
 * Example app for testing cypress
 * 
 * @author  Anshul Kharbanda
 * @created 6 - 6 - 2022
 */
import React from 'react'
import { useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import { Todo } from './Todo.js'

/**
 * Render list of todos
 */
export function TodoList() {
    // Get todos from store
    const todos = useSelector(todos => todos)

    // JSX
    return (
        <ListGroup data-testhandle="todo-list">
            { todos.map((text, index) => (
                <Todo text={text} index={index} key={index}/>
            ))}
        </ListGroup>
    )
}