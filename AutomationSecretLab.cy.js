/// <reference types="cypress" />

describe('My First Test', () => {
    it('Visits the SauceDemo website', () => {
      cy.visit('https://www.saucedemo.com/')
      cy.title().should("contain", "Swag Labs")

      cy.fixture("LoginSaucedemo").then(user => {
        const username = user.username
        const password = user.password

        cy.get('#user-name').clear()
        cy.get('#user-name').type(username)

        cy.get('#password').clear()
        cy.get('#password').type(password)

        cy.get('input[name="login-button"]').click()

        cy.contains('Sauce Labs Backpack').click()
        
        cy.url().should('include', 'inventory-item.html?id=4')

        cy.contains('button', 'Add to cart').click()

        cy.get('[class="btn btn_secondary back btn_large inventory_details_back_button"]').click()

        cy.contains('Sauce Labs Bike Light').click()
        
        cy.url().should('include', 'inventory-item.html?id=0')

        cy.contains('button', 'Add to cart').click()

        cy.get('[class="shopping_cart_link"]').click()

        cy.url().should('include', 'cart.html')

        cy.get('[class="btn btn_action btn_medium checkout_button"]').click()
        
      });
    });
});