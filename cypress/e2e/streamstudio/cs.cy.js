describe ('loadtest', ()=>{
    it('user creation', ()=>{
        cy.visit('https://connectstudio-admin-dev.world-television.com/login')
        cy.get('#email').type('sadiqul.alam@wtvglobal.com')
        cy.get('#password').type('123456')
        cy.get('.login-button').click()
        cy.wait(1000)
        cy.get(':nth-child(4) > .d-flex > :nth-child(2)').click()
      
        for(let i=1; i<26; i++){
            cy.get('.administrator-add-new-button > span').click()
            cy.get('#firstName').type('Load Test User')
            cy.get('#secondName').type(i)
            cy.get('#email').type('loadtest'+i+'@gmail.com')
            cy.get('#role').click()   
            cy.get('[title="ADMIN"]').click()
            cy.get('#password').type('123456')
            cy.get('#confirmPassword').type('123456')
            cy.get('.connect-studio-small-save-button').click()
            cy.wait(100)
        }
            
          
          
    })
})