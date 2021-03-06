/**
 * Example app for testing cypress
 * 
 * @author  Anshul Kharbanda
 * @created 6 - 6 - 2022
 */
import React from "react";
import { Container } from "react-bootstrap";
import { TodoList } from './TodoList.js';
import { TodoForm } from './TodoForm.js';

/**
 * Main app component
 */
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