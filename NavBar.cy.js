/// <reference types="cypress" />

describe('Navbar test', function() {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    
        cy.contains('Online Banking').click()
        cy.url().should('include', 'online-banking.html')
        cy.get('h1').should('be.visible')
    
        cy.contains('Feedback').click()
        cy.url().should('include', 'feedback.html')
    });

    it('Should display homepage content', () => {
        cy.contains('Zero Bank').click()
        cy.url().should('include', 'index.html')

        cy.get('[class="brand"]').contains('Zero Bank').should('be.visible')
        cy.get('[class="custom carousel-caption"]').contains('Online Banking').should('be.visible')
    });
});