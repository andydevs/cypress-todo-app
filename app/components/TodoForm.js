/**
 * Example app for testing cypress
 * 
 * @author  Anshul Kharbanda
 * @created 6 - 6 - 2022
 */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Stack, Form, Button } from 'react-bootstrap';
import { createTodo } from '../store';

/**
 * Form for new todo
 */
export function TodoForm() {
    // Save state of form input
    const [text, setText] = useState('')
    const handleChange = e => setText(e.target.value)

    // Handle create new todo
    const dispatch = useDispatch()
    const handleSubmit = () => {
        if (text !== '') dispatch(createTodo(text))
        setText('')
    }
    const handleCheckEnter = e => {
        if (e.key === 'Enter') {
            handleSubmit()
        }
    }

    // JSX
    return (
        <Stack direction="horizontal" gap={3}>
            <Form.Control
                data-cy="todo-form-text"
                type="text" 
                value={text}
                placeholder="Todo text..."
                onChange={handleChange}
                onKeyDown={handleCheckEnter}/>
            <Button
                data-cy="todo-form-create" 
                onClick={handleSubmit}>
                Create
            </Button>
        </Stack>
    )
}