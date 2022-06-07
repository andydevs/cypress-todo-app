import React, { useState } from "react";
import { legacy_createStore as createStore } from "redux";
import { Provider as ReduxProvider, useDispatch, useSelector } from "react-redux";
import { List } from "immutable";
import { Card, Container, ThemeProvider, Stack, CloseButton, ListGroup, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import "./style.css"

const INITIAL_STATE = new List([
    'Do one thing',
    'Do another thing'
])

const CREATE_TODO = 'CREATE_TODO'
const DELETE_TODO = 'DELETE_TODO'

const createTodo = text => ({ type: CREATE_TODO, text })
const deleteTodo = index => ({ type: DELETE_TODO, index })

function reducer(todos=INITIAL_STATE, action) {
    switch (action.type) {
        case CREATE_TODO:
            return todos.push(action.text)
        case DELETE_TODO:
            return todos.delete(action.index)
        default:
            return todos;
    }
}

let store = createStore(reducer)

function TodoForm() {
    const dispatch = useDispatch()
    const [text, setText] = useState('')
    const handleChange = e => setText(e.target.value)
    const handleSubmit = () => {
        dispatch(createTodo(text))
        setText('')
    }
    return (
        <Stack direction="horizontal" gap={3}>
            <Form.Control type="text" onChange={handleChange} value={text} placeholder="Todo text..."/>
            <Button onClick={handleSubmit}>Create</Button>
        </Stack>
    )
}

function Todo({ index, text }) {
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

function TodoList() {
    const todos = useSelector(todos => todos)
    return (
        <ListGroup>
            { todos.map((text, index) => (
                <Todo text={text} index={index} key={index}/>
            ))}
        </ListGroup>
    )
}

export function App() {
    return (
        <ReduxProvider store={store}>
            <ThemeProvider>
                <Container>
                    <h1>Todos</h1>
                    <hr/>
                    <TodoList/>
                    <br/>
                    <TodoForm/>
                </Container>
            </ThemeProvider>
        </ReduxProvider>
    )
}