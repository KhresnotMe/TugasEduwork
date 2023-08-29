///<reference types="cypress" />

describe ('Validate Content', () => {

    it('Validate Content', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('body').should('include', {name: "ditto"})
    });


    it('Tugas', () => {
        var responseBody = {
            "name": "limber",
            "url": "https://pokeapi.co/api/v2/ability/7/"
        }
        cy.request('https://pokeapi.co/api/v2/ability/7/', responseBody).then((response) => {
            expect(response.body.name).to.eq(responseBody.name)
        });
    });
 
})