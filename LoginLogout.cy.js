/// <reference types="cypress" />

describe('Login/ Logout test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')
        cy.get('#signin_button').click()
    
        cy.get('#login_form').should('be.visible')
        cy.get('#user_login').type('invalid username')
        cy.get('#user_password').type('invalid password')
        cy.contains('Sign in').click()
    
        cy.get('.alert-error').should('be.visible').and('contain', 'Login and/or password are wrong')
    });

    it('Should login to application with valid data', () => {
        cy.fixture('user').then(user => {
            const username = user.username
            const password = user.password

            cy.get('#user_login').type(username)
            cy.get('#user_password').type(password)
            cy.contains('Sign in').click()
        })

        cy.get('ul.nav-tabs').should('be.visible')
    
        cy.contains('username').click()
        cy.get('#logout_link').click()

        cy.get('[class="brand"]').contains('Zero Bank').should('be.visible')
        cy.get('[class="custom carousel-caption"]').contains('Online Banking').should('be.visible')
    });
});