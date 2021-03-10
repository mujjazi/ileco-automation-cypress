

context('Ileco Les Regression', () => {
    
    //visits the URL provided via cypress.json file for each test
    beforeEach(() => {
        cy.visit('/')
    })

    it('Test 1 - Logs in to the LES portal', () => {

        const xpath = require('cypress-xpath')
        const username = Cypress.env('username')
        const password = Cypress.env('password')
        
    expect(username, 'username was set').to.be.a('string').and.not.be.empty

    cy.visit('/')
    cy.get('#Username', { timeout: 15000 }).type(username);
    cy.get('#Password', { timeout: 15000 }).type(password, { log: false });
    cy.xpath("//input[@value='Log In']", { timeout: 15000 }).click();


    })


})