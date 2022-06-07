/**
 * Example app for testing cypress
 * 
 * @author  Anshul Kharbanda
 * @created 6 - 6 - 2022
 */
import React from 'react';
import { useDispatch } from 'react-redux';
import { ListGroup, Stack, CloseButton } from 'react-bootstrap';
import { deleteTodo } from '../store';

/**
 * Todo component in todo list
 */
export function Todo({ index, text }) {
    // Handle delete todo
    const dispatch = useDispatch()
    const handleDelete = () => dispatch(deleteTodo(index))

    // JSX
    return (
        <ListGroup.Item>
            <Stack direction="horizontal">
                <span className="me-auto">{ text }</span>
                <CloseButton onClick={handleDelete}/>
            </Stack>
        </ListGroup.Item>
    )
}