const {Given, When, Then} = require('@badeball/cypress-cucumber-preprocessor');

Given ('I open the front page which has a search bar', () => {
    cy.visit('http://zero.webappsecurity.com/login.html')

    cy.get('#user_login').type('username')
    cy.get('#user_password').type('password')
    cy.contains('Sign in').click()
});

When ('I type the word Online Banking', () => {
    cy.url().should('include', 'account-summary.html')
    cy.get('#searchTerm').type('Online Banking')
    cy.get('input').type('{enter}')
});

Then ('I should see the result i was searching', () => {
    cy.url().should('include', 'search.html?searchTerm=Online+Banking')
    cy.get('h2').should('be.visible')
});