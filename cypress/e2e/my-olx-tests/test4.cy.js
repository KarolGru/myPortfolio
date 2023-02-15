describe('template spec', () => {
    it('go to olx and click cookies', () => {
        cy.visit('https://olx.pl/')
        cy.get('#onetrust-accept-btn-handler').click()
       cy.get('[data-cy="common_link_header_myaccount"]').click()
       

       
       cy.get('[data-testid="username-field"]').type("testerautomatyzer@gmail.com")
       cy.get('[data-testid="password-field"]').type("Pop1pop1")
        cy.get('[data-testid="login-submit-button"]').click()
        cy.get('#headerLogo').click()
})
})




