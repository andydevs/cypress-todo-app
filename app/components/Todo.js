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
import { Priority } from './Priorities';

/**
 * Todo component in todo list
 */
export function Todo({ index, text }) {
    // Handle delete todo
    const dispatch = useDispatch()
    const handleDelete = () => dispatch(deleteTodo(index))

    // JSX
    return (
        <ListGroup.Item data-cy="todo-item">
            <Stack direction="horizontal">
                <span className="me-auto">{ text }</span>
                <Priority index={index}/>
                <CloseButton data-cy="todo-delete" onClick={handleDelete}/>
            </Stack>
        </ListGroup.Item>
    )
}