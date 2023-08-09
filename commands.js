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

//Cypress.Commands.add('login', (username, password) => {
    //cy.clearCookies()
    //cy.clearLocalStorage()

  //  cy.get('#user_login').clear()
//    cy.get('#user_login').type(username)

  //  cy.get('#user_password').clear()
//    cy.get('#user_password').type(password)

  //  cy.get('input[name="submit"]').click()
//})

Cypress.Commands.add('getById', (id) => {
    cy.clearCookies()
    cy.clearLocalStorage()

    cy.get('[id="sp_amount"]').clear()
    cy.get('[id="sp_amount"]').type(350)

    cy.get('[id="sp_date"]').click()
    cy.get('[id="ui-datepicker-div"]').contains('8').click()

    cy.get('[id="sp_description"]').clear()
    cy.get('[id="sp_description"]').type('permbayaran kontan')

    cy.get('input[id="pay_saved_payees"]').click()
})