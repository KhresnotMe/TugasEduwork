/// <reference types="cypress" />

describe('tes pertama saya', () => {
    it('clicking "type" shows the right headings' , () => {
        cy.visit('https://example.cypress.io')

        cy.pause()

        cy.contains('type').click()

        cy.url().should('include','/commands/actions')

        cy.get('.action-email')
            .type('fakeRiki@email.com')
            .should('have.value', 'fakeRiki@email.com')
    });
});