/// <reference types="cypress" />

describe('login test Sistemtoko', () => {
    beforeEach(() => {
        cy.visit('https://sistemtoko.com/login')
    });
         
        it('Should fill with incorrect email and fail to login', () => {
            cy.fixture("LoginSisko").then(LoginData => {
                const password = LoginData.password

            cy.get('[name="email"]').type('Riki@gmail.com')
            cy.get('[name="password"]').type(password)
            cy.wait(3000)
            cy.get('button').contains('Login').click()
            cy.wait(3000)

            cy.get('h4').contains("Operation Failed").should('be.visible')
            cy.url().should('include', '/login')
            });
        });

        it('Should fill with incorrect password and fail to login', () => {
            cy.fixture("LoginSisko").then(LoginData => {
                const email = LoginData.username

            cy.get('[name="email"]').type(email)
            cy.get('[name="password"]').type('password')
            cy.wait(3000)
            cy.get('button').contains('Login').click()
            cy.wait(3000)

            cy.get('h4').contains("Operation Failed").should('be.visible')
            cy.url().should('include', '/login')
            });
        });

        it('Should fill with incorrect email and password, and fail to login', () => {

            cy.get('[name="email"]').type('dadang@gmail.com')
            cy.get('[name="password"]').type('password')
            cy.wait(3000)
            cy.get('button').contains('Login').click()
            cy.wait(3000)

            cy.get('h4').contains("Operation Failed").should('be.visible')
            cy.url().should('include', '/login')
            });
        
        it('Should fill with incorrect password and fail to login', () => {
            cy.fixture("LoginSisko").then(LoginData => {
                    const email = LoginData.username
                    const password = LoginData.password
    
            cy.get('[name="email"]').type(email)
            cy.get('[name="password"]').type(password)
            cy.wait(3000)
            cy.get('button').contains('Login').click()
            cy.wait(3000)
    
            cy.get('h2').contains("Daftar Toko").should('be.visible')
            cy.url().should('include', '/member?p=rikid9d4f495')
            });
        });

        it('Use "I forgot my password" with unregistered email and should fail', () => {

            cy.get('[href="https://sistemtoko.com/forgot"]').click()
            cy.get('[type="email"]').type('Bluebird@gmail.com')
            cy.wait(3000)
            cy.get('[type="submit"]').click()
            cy.wait(3000)

            cy.get('[class="alert alert-warning fade in"]').contains("We can't find a user with that e-mail address. !")
            .should('be.visible')
        });

        it('Use "I forgot my password" with registered email and should get password reminder', () => {

            cy.get('[href="https://sistemtoko.com/forgot"]').click()
            cy.get('[type="email"]').type('khresnawsome@yahoo.com')
            cy.wait(3000)
            cy.get('[type="submit"]').click()
            cy.wait(3000)

            cy.get('[class="alert alert-success fade in"]').contains("Password reminder sent!")
            .should('be.visible')
        });
});
