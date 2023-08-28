describe('Update User', () => {

    it('Validate Header', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type')
            .should('include', 'application/json; charset=utf-8')
    });
    it('Assert something', () => {
        cy.request('GET', 'https://pokeapi.co/api/v2/pokemon/ditto',).then((response) => {
            expect(response.status).equal(200)
            expect('limber').to.exist
        });
    });
})
