/**
 * Example app for testing cypress
 * 
 * @author  Anshul Kharbanda
 * @created 6 - 6 - 2022
 */
import data from '../fixtures/todos.json';

describe('Application', () => {
    it('creates todos', () => {
        // Create todo
        cy.visit('/')
        for (const todo of data.todos) {
            cy.get('[data-cy="todo-form-text"]').type(todo)
            cy.get('[data-cy="todo-form-create"]').click()
        }

        // Check if todos created
        cy.get('[data-cy="todo-item"]').should('have.length', data.todos.length)
        for (const todo of data.todos) {
            cy.contains('[data-cy="todo-item"]', todo).should('exist')
        }
    })

    it('deletes todos', () => {
        // Create todos
        cy.visit('/')
        for (const todo of data.todos) {
            cy.get('[data-cy="todo-form-text"]').type(todo)
            cy.get('[data-cy="todo-form-create"]').click()
        }

        // Delete a todo
        cy.get('[data-cy="todo-item"]')
            .eq(data.deleteIndex)
            .find('[data-cy="todo-delete"]')
            .click()

        // Remaining
        const remaining = data.todos.filter((_, index) => index !== data.deleteIndex)
        for (const todo of remaining) {
            cy.contains('[data-cy="todo-item"]', todo).should('exist')
        }

        // Deleted
        cy.contains('[data-cy="todo-item"]', data.todos[data.deleteIndex]).should('not.exist')
    })
})