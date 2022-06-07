/**
 * Example app for testing cypress
 * 
 * @author  Anshul Kharbanda
 * @created 6 - 6 - 2022
 */
import data from '../fixtures/todos.json';

// For info on the "testElemGet" and "testElemContains" 
// functions look at cypress/support/commands.js

describe('Application', () => {
    it('creates todos', () => {
        // Create todo
        cy.visit('/')
        for (const todo of data.todos) {
            cy.testElemGet('todo-form-text').type(todo)
            cy.testElemGet('todo-form-create').click()
        }

        // Check if todos created
        cy.testElemGet('todo-item').should('have.length', data.todos.length)
        for (const todo of data.todos) {
            cy.testElemContains('todo-item', todo).should('exist')
        }
    })

    it('deletes todos', () => {
        // Create todos
        cy.visit('/')
        for (const todo of data.todos) {
            cy.testElemGet('todo-form-text').type(todo)
            cy.testElemGet('todo-form-create').click()
        }

        // Delete a todo
        cy.testElemGet('todo-item')
            .eq(data.deleteIndex)
            .find('[data-cy="todo-delete"]')
            .click()

        // Remaining
        const remaining = data.todos.filter((_, index) => index !== data.deleteIndex)
        for (const todo of remaining) {
            cy.testElemContains('todo-item', todo).should('exist')
        }

        // Deleted
        cy.testElemContains('todo-item', data.todos[data.deleteIndex]).should('not.exist')
    })

    it('empties todo input when creating todos', () => {
        // Use todo form
        cy.visit('/')
        let todo = data.todos[0]
        cy.testElemGet('todo-form-text').type(todo)
        cy.testElemGet('todo-form-create').click()

        // Check if todo input is empty
        // NOTE: Cypress uses jQuery under the hood to manipulate the DOM
        // If you need to do something think of how you'd do it in
        // jQuery. If it's a function, use 'invoke'. If it's a value,
        // use 'its'
        cy.testElemGet('todo-form-text')
          .invoke('val')
          .should('be.empty')
    })

    it('allows for creating todos by typing and hitting enter', () => {
        // Use todo form with enter
        cy.visit('/')
        let todo = data.todos[0]
        cy.testElemGet('todo-form-text').type(todo + '{enter}')

        // Check if todo created
        cy.testElemContains('todo-item', todo).should('exist')
        cy.testElemGet('todo-form-text').invoke('val').should('be.empty')
    })

    it('won\'t create a todo if the input area is empty', () => {
        // Submit empty todo
        cy.visit('/')
        cy.testElemGet('todo-form-text').clear()
        cy.testElemGet('todo-form-create').click()

        // Check if there are no elements in todo list
        cy.testElemGet('todo-item').should('not.exist')
    })
})