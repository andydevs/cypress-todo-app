// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// The best practices say that we should locate elements in cypress 
// using a data attribute like 'data-cy' or 'data-test', as these won't 
// be subject to change with css styling or javascript app logic. Here 
// I'm using 'data-cy' and I've written this cypress command to act as 
// a shortcut for finding an element by it's 'data-cy' property value
// See https://docs.cypress.io/guides/references/best-practices#Selecting-Elements
Cypress.Commands.add('testElemGet', id => cy.get(`[data-cy="${id}"]`))
Cypress.Commands.add('testElemContains', (id, text) => cy.contains(`[data-cy=${id}]`, text))