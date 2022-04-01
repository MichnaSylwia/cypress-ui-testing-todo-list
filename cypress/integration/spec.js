it('should be open to-do-list',()=>{
    cy.visit('https://peselvalidatorapitest.azurewebsites.net/#/Home')
    .get('body > div.container > div:nth-child(2) > div > div')
    .get('body > div.container > div:nth-child(2) > div > div > div > div > table').first().should('contain','Item1abc')
})



it('should be able to add item test-1',()=>{
    cy.visit('https://peselvalidatorapitest.azurewebsites.net/#/Home')
    .wait(1000)
    .get('body > div.container > div:nth-child(2) > div > div > div > div > div > input').click()
    .type('test-1')
    .get('body > div.container > div:nth-child(2) > div > div > div > div > div > span').click()
    .get('body > div.container > div:nth-child(2) > div > div > div > div > table > tbody').contains('test-1')
})
it('should be able to edit item from test-1 to test-2',()=>{
    cy.visit('https://peselvalidatorapitest.azurewebsites.net/#/Home')
    .wait(1000)
    .get('body > div.container > div:nth-child(2) > div > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(2) > p:nth-child(1)')
    .get('body > div.container > div:nth-child(2) > div > div > div > div > table > tbody > tr:nth-child(2) > td:nth-child(2) > p:nth-child(1) > a:nth-child(1)')
    .click()
    .get('body > div.container > div:nth-child(2) > div > div > div > div > table > tbody > tr:nth-child(2) > td:nth-child(1) > input.form-control.ng-pristine.ng-valid')
    .click()
    .type('{backspace}')
    .type('2')
    .get('body > div.container > div:nth-child(2) > div > div > div > div > table > tbody > tr:nth-child(2) > td:nth-child(2) > p:nth-child(2) > a:nth-child(1)')
    .click()
    .get('body > div.container > div:nth-child(2) > div > div > div > div > table').should('contain','test-2')

})
it('should be able to delete item test-2',()=>{
    cy.visit('https://peselvalidatorapitest.azurewebsites.net/#/Home')
    .wait(1000)
    .get('body > div.container > div:nth-child(2) > div > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(2) > p:nth-child(1)')
    .get('body > div.container > div:nth-child(2) > div > div > div > div > table > tbody > tr:nth-child(2) > td:nth-child(2) > p:nth-child(1) > a:nth-child(2)')
    .click()
    
})
