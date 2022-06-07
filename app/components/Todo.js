import React from 'react';
import { useDispatch } from 'react-redux';
import { ListGroup, Stack, CloseButton } from 'react-bootstrap';
import { deleteTodo } from '../store';

export function Todo({ index, text }) {
    const dispatch = useDispatch()
    const handleDelete = () => dispatch(deleteTodo(index))
    return (
        <ListGroup.Item>
            <Stack direction="horizontal">
                <span className="me-auto">{ text }</span>
                <CloseButton onClick={handleDelete}/>
            </Stack>
        </ListGroup.Item>
    )
}