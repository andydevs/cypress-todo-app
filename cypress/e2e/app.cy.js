/**
 * Example app for testing cypress
 * 
 * @author  Anshul Kharbanda
 * @created 6 - 6 - 2022
 */
import todos from '../fixtures/todos.json';

describe('Application Spec', () => {
    it('creates todos', () => {
        cy.visit('/')
        for (const todo of todos) {
            cy.get('[data-testhandle="todo-form-text"]').type(todo)
            cy.get('[data-testhandle="todo-form-create"]').click()
        }
        cy.get('[data-testhandle="todo-item"]').should('have.length', todos.length)
    })
})