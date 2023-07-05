import { userData, productList } from './test-data'

describe('StreamStudio WebCast Creation Suite', ()=>{
    beforeEach(() => {
        cy.viewport(1480, 920) // set the viewport size to 1280x720
        // login to streamstudio
        cy.visit("https://admin-dev.easywebcast.com/admin?role=admin")
      })

    it('creating webcast with ecdn enabled', ()=>{
        
        cy.get('#email-input').type(userData.email)
        cy.get('#password-input').type(userData.password)
        cy.get('.login-submit').click()
        //veryfing name
        cy.get('.crew-text').should('contain', 'STREAMSTUDIO')
        cy.log('login successful')
        //clicking to organization
        cy.get(':nth-child(4) > span').click()
        //clicking a qa test
        cy.get(':nth-child(8) > :nth-child(5) > a').click()
        cy.get(':nth-child(2) > :nth-child(4) > .button-sumbit-container > .dropleft > .dropdown-toggle').click()
        //clicking automated client
        cy.get(':nth-child(2) > :nth-child(4) > .button-sumbit-container > .dropleft > .dropdown-menu > :nth-child(1) > span').click()
        cy.wait(100)
        //clicking webcast creation button
        cy.get("[class='create-webcast cursor-pointer col-3']").click()
        cy.get(':nth-child(7) > .form-control').type(userData.webcastName+' self stream'+' with ecdn')
        cy.get("[type='submit']").click()
        cy.get('.css-fsmweu-control > .css-1hwfws3').click()
        cy.get('#react-select-13-option-4').click()
        cy.get('[style="outline: none; border: none; background: rgb(98, 190, 178); color: rgb(255, 255, 255); width: 125px; height: 35px; margin-left: 20px;"]').click()
        cy.get('[style="display: inline-block; font-size: 16px; margin-right: 20px;"] > .containerRadio > .checkmarkR').click()
        cy.get('[style="margin-bottom: 10px;"] > .css-2b097c-container > .css-1j8vvet-control > .css-1hwfws3 > .css-r6er38-placeholder').click()
        cy.get('#react-select-15-option-0').click()
        cy.get('[style="margin-bottom: 20px;"] > .css-2b097c-container > .css-1j8vvet-control > .css-1hwfws3').click()
        cy.get('#react-select-16-option-0').click()
        cy.get('.border-0').click()
        cy.get('.cursor-pointer > button').click()
        //checking the webcast information
        cy.wait(300)
        cy.get(':nth-child(7) > .MuiButtonBase-root > .MuiListItemText-root').click()
        cy.get('.MuiList-root > :nth-child(1) > .MuiListItemText-root').click()
        // cy.get('[class="col col-4"]').find()
        cy.get('[class="form-control"]')
        .invoke('val')
        .then((value) => {
          // value will contain the value of the input field
          // You can use the value in your tests or assertions
          expect(value).to.match(/kollective/)
          cy.log(value)
        })
      
    })

    it('creating webcast with no ecdn enable', ()=>{

        cy.get('#email-input').type(userData.email)
        cy.get('#password-input').type(userData.password)
        cy.get('.login-submit').click()
        //veryfing name
        cy.get('.crew-text').should('contain', 'STREAMSTUDIO')
        cy.log('login successful')
        //clicking to organization
        cy.get(':nth-child(4) > span').click()
        //clicking a qa test
        cy.get(':nth-child(8) > :nth-child(5) > a').click()
        cy.get(':nth-child(2) > :nth-child(4) > .button-sumbit-container > .dropleft > .dropdown-toggle').click()
        //clicking automated client
        cy.get(':nth-child(2) > :nth-child(4) > .button-sumbit-container > .dropleft > .dropdown-menu > :nth-child(1) > span').click()
        cy.wait(100)
        //clicking webcast creation button
        cy.get("[class='create-webcast cursor-pointer col-3']").click()
        cy.get(':nth-child(7) > .form-control').type(userData.webcastName+' self stream'+' without ecdn')
        cy.get("[type='submit']").click()
        //select start time
        cy.get('.css-fsmweu-control > .css-1hwfws3').click()
        cy.get('#react-select-13-option-4').click()
        cy.get('[style="outline: none; border: none; background: rgb(98, 190, 178); color: rgb(255, 255, 255); width: 125px; height: 35px; margin-left: 20px;"]').click()
        cy.get('[style="display: inline-block; font-size: 16px; margin-right: 20px;"] > .containerRadio > .checkmarkR').click()
        cy.get('[style="margin-bottom: 10px;"] > .css-2b097c-container > .css-1j8vvet-control > .css-1hwfws3 > .css-r6er38-placeholder').click()
        cy.get('#react-select-15-option-0').click()
        
        cy.get('.form-group > .containerCheck > .checkmark').click()
        cy.get('.border-0').click()
        cy.get('.cursor-pointer > button').click()
        //checking the webcast information
        cy.wait(300)
        cy.get(':nth-child(7) > .MuiButtonBase-root > .MuiListItemText-root').click()
        cy.get('.MuiList-root > :nth-child(1) > .MuiListItemText-root').click()
        // cy.get('[class="col col-4"]').find()
        cy.get('[class="form-control"]')
        .invoke('val')
        .then((value) => {
          // value will contain the value of the input field
          // You can use the value in your tests or assertions
          expect(value).to.match(/wowza/)
          cy.log(value)
        })
        
      
    })

    it('creating zoom webcast copying template, changing date and with ecdn enabled', ()=>{

      cy.get('#email-input').type(userData.email)
      cy.get('#password-input').type(userData.password)
      cy.get('.login-submit').click()
      //veryfing name
      cy.get('.crew-text').should('contain', 'STREAMSTUDIO')
      cy.log('login successful')
      //clicking to organization
      cy.get(':nth-child(4) > span').click()
      //clicking a qa test
      cy.get(':nth-child(8) > :nth-child(5) > a').click()
      cy.get(':nth-child(2) > :nth-child(4) > .button-sumbit-container > .dropleft > .dropdown-toggle').click()
      //clicking automated client
      cy.get(':nth-child(2) > :nth-child(4) > .button-sumbit-container > .dropleft > .dropdown-menu > :nth-child(1) > span').click()
      cy.wait(100)
      //clicking webcast creation button
      cy.get("[class='create-webcast cursor-pointer col-3']").click()
      //input the name of the webcast
      cy.get(':nth-child(7) > .form-control').type(userData.webcastName+' zoom' +' with ecdn')
      //select a webcast for copying template
      cy.get(':nth-child(10) > .css-2b097c-container > .css-1wi19s-control > .css-1hwfws3').click()
      cy.get('#react-select-11-option-22').click()
      //submit the button
      cy.get("[type='submit']").click()
      //chang the date
      cy.get('.react-date-picker-aw').click()
      
      cy.get('[class="react-datepicker__navigation react-datepicker__navigation--next"]') .click()
      cy.get(':nth-child(6) > .react-datepicker__day--030').click()
      cy.wait(50)
      //storing the date
      // the date will be 30
      let selectedDate
      cy.get('.react-datepicker__aria-live')
        .invoke('text')
        .then((text) => {
          selectedDate = text.trim()
          cy.log(selectedDate)
          expect(text).to.match(/30/)
        })
      
      //select start time
      //the time will be 2.00
      cy.get('.css-fsmweu-control > .css-1hwfws3').click()
      cy.get('#react-select-13-option-8').click()
      let selectedTime
      cy.get('[class=" css-1uccc91-singleValue"]')
      .invoke('text')
      .then((text)=>{
        selectedTime = text.trim()
        cy.log(selectedTime)
        expect(text).to.match(/2/)
      })
      //change time zone
      // time zone will be -2
      cy.get('.css-1wi19s-control > .css-1hwfws3').click()
      cy.get('#react-select-14-option-6').click()
      let selectedTimeZone
      cy.get('[class=" css-1uccc91-singleValue"]')
      .invoke('text')
      .then((text)=>{
        selectedTimeZone = text.trim()
        cy.log(selectedTimeZone)
        expect(text).to.match(/-02/)
      })
      //click the next button
      cy.get('[style="outline: none; border: none; background: rgb(98, 190, 178); color: rgb(255, 255, 255); width: 125px; height: 35px; margin-left: 20px;"]').click()
      //clicking easyewbcast web conference
      cy.get('[class="checkmarkR"]').eq(1).click()
      //select bitrate
      cy.get('[style="margin-bottom: 10px;"] > .css-2b097c-container > .css-1j8vvet-control > .css-1hwfws3 > .css-r6er38-placeholder').click()
      cy.get('#react-select-15-option-0').click()
      //select ecdn vendor
      cy.get('[style="margin-bottom: 20px;"] > .css-2b097c-container > .css-1j8vvet-control > .css-1hwfws3').click()
      cy.get('#react-select-16-option-0').click()
      //click next
      cy.get('.border-0').click()
      //click create webcast
      cy.get('.cursor-pointer > button').click()
      //wait time
      cy.wait(300)
      //verify the information
      //verifying the name
      let selectedName
      cy.get('[style="font-size: 25px; margin-left: -60px;"]')
      .invoke('text')
      .then((text)=>{
        selectedName=text.trim()
        cy.log(selectedName)
        expect(text).to.match(/webcast/)
      })
      //verifying the time
      cy.get(':nth-child(2) > :nth-child(3) > :nth-child(1) > .d-flex > [style="width: 55%; text-align: left;"]')
      .invoke('text')
      .then((text)=>{
        selectedName=text.trim()
        cy.log(selectedName)
        expect(text).to.match(/10/)
      })
      //verifying date
      cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > .d-flex > [style="width: 55%; text-align: left;"]')
      .invoke('text')
      .then((text)=>{
        selectedName=text.trim()
        cy.log(selectedName)
        expect(text).to.match(/30/)
      })
      //verifying stream
      cy.get(':nth-child(7) > .MuiButtonBase-root > .MuiListItemText-root').click()
      cy.get('.MuiList-root > :nth-child(1) > .MuiListItemText-root').click()
        // cy.get('[class="col col-4"]').find()
      cy.get('[class="form-control"]')
        .invoke('val')
        .then((value) => {
          // value will contain the value of the input field
          // You can use the value in your tests or assertions
          expect(value).to.match(/kollective/)
          cy.log(value)
        })
        //test advance option
        cy.get(':nth-child(2) > .MuiListItemText-root').click()
        cy.get('.btn-group > .btn').click()
        cy.get('.btn-group > .dropdown-menu > :nth-child(1)').click()
        let selectInformation
        cy.get('[class="zoom-show-info-item-value-text col-9"]')
        .invoke('text')
        .then((text)=>{
          selectInformation=text.trim()
          cy.log(selectInformation)
          expect(text).to.match(/Meeting/)
        })

    })
    it('creating zoom webcast changing template, changing date and with no ecdn enabled', ()=>{

      cy.get('#email-input').type(userData.email)
      cy.get('#password-input').type(userData.password)
      cy.get('.login-submit').click()
      //veryfing name
      cy.get('.crew-text').should('contain', 'STREAMSTUDIO')
      cy.log('login successful')
      //clicking to organization
      cy.get(':nth-child(4) > span').click()
      //clicking a qa test
      cy.get(':nth-child(8) > :nth-child(5) > a').click()
      cy.get(':nth-child(2) > :nth-child(4) > .button-sumbit-container > .dropleft > .dropdown-toggle').click()
      //clicking automated client
      cy.get(':nth-child(2) > :nth-child(4) > .button-sumbit-container > .dropleft > .dropdown-menu > :nth-child(1) > span').click()
      cy.wait(100)
      //clicking webcast creation button
      cy.get("[class='create-webcast cursor-pointer col-3']").click()
      //input the name of the webcast
      cy.get(':nth-child(7) > .form-control').type(userData.webcastName+' zoom'+' with no ecdn')
      //change template
      cy.get('#template').select('14997').should('have.value','14997');
      
      //submit the button
      cy.get("[type='submit']").click()
      //chang the date
      cy.get('.react-date-picker-aw').click()
      
      cy.get('[class="react-datepicker__navigation react-datepicker__navigation--next"]') .click()
      cy.get(':nth-child(6) > .react-datepicker__day--030').click()
      cy.wait(50)
      //storing the date
      // the date will be 30
      let selectedDate
      cy.get('.react-datepicker__aria-live')
        .invoke('text')
        .then((text) => {
          selectedDate = text.trim()
          cy.log(selectedDate)
          expect(text).to.match(/30/)
        })
      
      //select start time
      //the time will be 2.00
      cy.get('.css-fsmweu-control > .css-1hwfws3').click()
      cy.get('#react-select-13-option-8').click()
      let selectedTime
      cy.get('[class=" css-1uccc91-singleValue"]')
      .invoke('text')
      .then((text)=>{
        selectedTime = text.trim()
        cy.log(selectedTime)
        expect(text).to.match(/2/)
      })
      //change time zone
      // time zone will be -2
      cy.get('.css-1wi19s-control > .css-1hwfws3').click()
      cy.get('#react-select-14-option-6').click()
      let selectedTimeZone
      cy.get('[class=" css-1uccc91-singleValue"]')
      .invoke('text')
      .then((text)=>{
        selectedTimeZone = text.trim()
        cy.log(selectedTimeZone)
        expect(text).to.match(/-02/)
      })
      //click the next button
      cy.get('[style="outline: none; border: none; background: rgb(98, 190, 178); color: rgb(255, 255, 255); width: 125px; height: 35px; margin-left: 20px;"]').click()
      //clicking easyewbcast web conference
      cy.get('[class="checkmarkR"]').eq(1).click()
      //select bitrate
      cy.get('[style="margin-bottom: 10px;"] > .css-2b097c-container > .css-1j8vvet-control > .css-1hwfws3 > .css-r6er38-placeholder').click()
      cy.get('#react-select-15-option-0').click()
      //uselect ecdn vendor
      cy.get('.form-group > .containerCheck > .checkmark').click()
      //click next
      cy.get('.border-0').click()
      //click create webcast
      cy.get('.cursor-pointer > button').click()
      //wait time
      cy.wait(300)
      //verify the information
      //verifying the name
      let selectedName
      cy.get('[style="font-size: 25px; margin-left: -60px;"]')
      .invoke('text')
      .then((text)=>{
        selectedName=text.trim()
        cy.log(selectedName)
        expect(text).to.match(/webcast/)
      })
      //verifying the time
      cy.get(':nth-child(2) > :nth-child(3) > :nth-child(1) > .d-flex > [style="width: 55%; text-align: left;"]')
      .invoke('text')
      .then((text)=>{
        selectedName=text.trim()
        cy.log(selectedName)
        expect(text).to.match(/10/)
      })
      //verifying date
      cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > .d-flex > [style="width: 55%; text-align: left;"]')
      .invoke('text')
      .then((text)=>{
        selectedName=text.trim()
        cy.log(selectedName)
        expect(text).to.match(/30/)
      })
      //verifying stream
      cy.get(':nth-child(7) > .MuiButtonBase-root > .MuiListItemText-root').click()
      cy.get('.MuiList-root > :nth-child(1) > .MuiListItemText-root').click()
        // cy.get('[class="col col-4"]').find()
      cy.get('[class="form-control"]')
        .invoke('val')
        .then((value) => {
          // value will contain the value of the input field
          // You can use the value in your tests or assertions
          expect(value).to.match(/wowza/)
          cy.log(value)
        })
        //test advance option
        cy.get(':nth-child(2) > .MuiListItemText-root').click()
        cy.get('.btn-group > .btn').click()
        cy.get('.btn-group > .dropdown-menu > :nth-child(1)').click()
        let selectInformation
        cy.get('[class="zoom-show-info-item-value-text col-9"]')
        .invoke('text')
        .then((text)=>{
          selectInformation=text.trim()
          cy.log(selectInformation)
          expect(text).to.match(/Meeting/)
        })

        //check zoom webcast stream url
        cy.get('.MuiList-root > :nth-child(1) > .MuiListItemText-root').click()
        cy.get('[style="background-color: rgba(0, 0, 0, 0.05); border-radius: 10px; margin: 5px 0px; padding: 5px 2px;"] > .col-4 > .form-control')
        .invoke('val')
        .then((value)=>{
          expect(value).to.match(/wowza-easywebcast-edge.world-television.com/)
        })

    })

})