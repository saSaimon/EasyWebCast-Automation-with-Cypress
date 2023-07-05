/// <reference types = 'Cypress'/>

describe('My First Test Suite', function(){

    it('My First Test Case', ()=>{

        //test step
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get("input[type='search']").type('Ca')
        cy.wait(200)
        cy.get('.product:visible').should('have.length', 4)
        // cy.get('.products .product').contains('Carrot - 1 Kg').should('contain','Carrot - 1 Kg')
        cy.get('.products').find('.product').should('have.length', 4)    
        // cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()
        // cy.get('.products').find('.product').eq(1).should('contain', "ADDED")
        cy.get('.products').find('.product').each(($el, index, $list) => {
            const textVeg = $el.find('h4.product-name').text()
            if(textVeg.includes('Cashews')){
                cy.wrap($el).find('button').click()
                cy.wrap($el).should('contain', 'ADDED')
            }
          })
        cy.get('.brand').then(function(logoelement){
            cy.log(logoelement.text())
        })
    })
})