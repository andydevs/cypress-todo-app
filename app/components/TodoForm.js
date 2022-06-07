import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Stack, Form, Button } from 'react-bootstrap';
import { createTodo } from '../store';

export function TodoForm() {
    const dispatch = useDispatch()
    const [text, setText] = useState('')
    const handleChange = e => setText(e.target.value)
    const handleSubmit = () => {
        dispatch(createTodo(text))
        setText('')
    }
    return (
        <Stack direction="horizontal" gap={3}>
            <Form.Control 
                type="text" 
                onChange={handleChange} 
                value={text} 
                placeholder="Todo text..."/>
            <Button onClick={handleSubmit}>Create</Button>
        </Stack>
    )
}