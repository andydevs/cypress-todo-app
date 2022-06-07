import React from "react";
import { Container } from "react-bootstrap";
import { TodoList } from './TodoList.js';
import { TodoForm } from './TodoForm.js';

export function App() {
    return (
        <Container>
            <h1>Todos</h1>
            <hr/>
            <TodoList/>
            <br/>
            <TodoForm/>
        </Container>
    )
}