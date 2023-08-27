describe('Tugas POST', () => {

    it('should be able to login by using API', () => {

        var user = {
            "name":'khresna',
            "email": 'riki@gmail.com',
            "password": 'pistol'
        }
    cy.request('POST', 'https://reqres.in/api/users?name=khresna&email=riki@gmail.com&password=pistol/login', user).then((response) => {
        cy.expect('riki@gmail.com').to.exist
        cy.expect('pistol').to.exist

        
        });
    });

    it('should add new cookie', () => {
        cy.setCookie('sessionId', 'response.body.sessionId')
        cy.setCookie('userId', 'response.body.userId')
        cy.setCookie('userName', 'response.body.userName')
        cy.visit('https://reqres.in')
    });
})