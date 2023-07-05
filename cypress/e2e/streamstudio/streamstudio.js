describe('EasyWebCast Test Suite', () => {
  it('login', () => {
    cy.visit('https://admin-dev.easywebcast.com/admin?role=admin')
    cy.get('#email-input').type('sadiqul.alam@wtvglobal.com')
    cy.get('#password-input').type('123456')
    cy.get('.login-submit').click()
    cy.get('.crew-text').should('contain', 'EASYWEBCAST')
    cy.log('login successful')
    //org test
    cy.get('ul > :nth-child(4)').click()
    cy.get(':nth-child(7) > :nth-child(5) > div > a').click()
    cy.get('.heading-top-menu > span').should('contain', 'A QA Test')
    
    //client test
    cy.get(':nth-child(11) > :nth-child(4) > .button-sumbit-container > .dropleft > .dropdown-toggle').click()
    cy.get(':nth-child(11) > :nth-child(4) > .button-sumbit-container > .dropleft > .dropdown-menu > :nth-child(1)').click()
    cy.get('.heading-top-menu > span').should('contain', 'Test 2')
    //webcast name test
    cy.get('tbody tr').eq(1).should('contain', 'Automation Test WebCast 1')
    cy.get('tbody tr').eq(1).find('[type="button"]').eq(0).click()
    cy.contains('Automation Test WebCast 1').should('contain', 'Automation Test WebCast 1')
    //webcast type test(Video Only)
    //changing webcast and testing it works
    cy.get(':nth-child(1) > .col-sm-8 > #exampleSelect').select('videoAudio')
    cy.get('.btn').click()
    cy.get(':nth-child(6) > :nth-child(1) > .MuiListItemText-root').click()
    cy.get('.MuiList-root > :nth-child(1) > .MuiListItemText-root').click()
    //wowza link test
    cy.get('[value="wowza-dev.world-television.com/ststlive,15121_en_p_1000,15121_en_p_750"]').should('have.value','wowza-dev.world-television.com/ststlive,15121_en_p_1000,15121_en_p_750')
    
  })
    
  })