describe('Create New User', () => {
 
    it('Add new users', () => {
        var user = {
            "name": 'Khresna',
            "job": 'Test Engineer'
        }
        cy.request('POST', 'https://reqres.in/api/users', user).then((response) => {
            expect(response.status).equal(201),
        cy.expect('Khresna').to.exist
        cy.expect('Test Engineer').to.exist
        })
    });
});