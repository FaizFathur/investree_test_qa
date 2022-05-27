/// <reference types="cypress" />

//import {faker} from '@faker-js/faker';

context('Checkout Journey', () => {
     beforeEach(() => {

          cy.visit('https://www.saucedemo.com')
       
          cy.get('#user-name').type('standard_user')
          cy.get('#password').type('secret_sauce')
          cy.get('#login-button').click()
     
     })


     it('Checkout All Product',() => {
          cy.url().should('include', '/inventory')
          cy.get('#add-to-cart-sauce-labs-backpack').click()
          cy.get('#add-to-cart-sauce-labs-bike-light').click()
          cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click()
          cy.get('#add-to-cart-sauce-labs-fleece-jacket').click()
          cy.get('#add-to-cart-sauce-labs-onesie').click()
          cy.get('[name="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()
          cy.get('#shopping_cart_container').click()

          //next page
          cy.url().should('include', '/cart')
          cy.get('#checkout').click()

          //next page
          cy.url().should('include', '/checkout-step-one')
          cy.get('#first-name').type('Qwertry')
          cy.get('#last-name').type('Asdfg')
          cy.get('#postal-code').type('12321')
          cy.get('#continue').click()

          //next page
          cy.url().should('include', '/checkout-step-two')
          cy.get('#finish').click()

          //next page
          cy.url().should('include', '/checkout-complete')
          cy.get('#checkout_complete_container').should('contain', 'THANK YOU FOR YOUR ORDER')

     })

     it('Checkout 1 Product',() => {
          cy.get('.inventory_item_name').contains('Sauce Labs Backpack').click()
          cy.get('#add-to-cart-sauce-labs-backpack').click()
          cy.get('#shopping_cart_container').click()

          //next page
          cy.url().should('include', '/cart')
          cy.get('#checkout').click()

          //next page
          cy.url().should('include', '/checkout-step-one')
          cy.get('#first-name').type('Qwertry')
          cy.get('#last-name').type('Asdfg')
          cy.get('#postal-code').type('12321')
          cy.get('#continue').click()

          //next page
          cy.url().should('include', '/checkout-step-two')
          cy.get('#finish').click()

          //next page
          cy.url().should('include', '/checkout-complete')
          cy.get('#checkout_complete_container').should('contain', 'THANK YOU FOR YOUR ORDER')

     })

     it('First Name is not filled',() => {
          cy.get('.inventory_item_name').contains('Sauce Labs Bike Light').click()
          cy.get('#add-to-cart-sauce-labs-bike-light').click()
          cy.get('#shopping_cart_container').click()

          //next page
          cy.url().should('include', '/cart')
          cy.get('#checkout').click()

          //next page
          cy.url().should('include', '/checkout-step-one')
          cy.get('#last-name').type('Asdfg')
          cy.get('#postal-code').type('12321')
          cy.get('#continue').click()
          cy.get('[data-test="error"]').should('contain', 'Error: First Name is required')

     })

     it('Last Name is not filled',() => {
          cy.get('.inventory_item_name').contains('Sauce Labs Bike Light').click()
          cy.get('#add-to-cart-sauce-labs-bike-light').click()
          cy.get('#shopping_cart_container').click()

          //next page
          cy.url().should('include', '/cart')
          cy.get('#checkout').click()

          //next page
          cy.url().should('include', '/checkout-step-one')
          cy.get('#first-name').type('Qwertry')
          cy.get('#postal-code').type('12321')
          cy.get('#continue').click()
          cy.get('[data-test="error"]').should('contain', 'Error: Last Name is required')

     })

     it('Postal Code is not filled',() => {
          cy.get('.inventory_item_name').contains('Sauce Labs Bike Light').click()
          cy.get('#add-to-cart-sauce-labs-bike-light').click()
          cy.get('#shopping_cart_container').click()

          //next page
          cy.url().should('include', '/cart')
          cy.get('#checkout').click()

          //next page
          cy.url().should('include', '/checkout-step-one')
          cy.get('#first-name').type('Qwertry')
          cy.get('#last-name').type('Asdfg')
          cy.get('#continue').click()
          cy.get('[data-test="error"]').should('contain', 'Error: Postal Code is required')

     })     

  })