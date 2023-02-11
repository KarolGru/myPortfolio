describe('template spec', () => {
    it('go to olx and click cookies', () => {
        cy.visit('https://olx.pl/')
        cy.get('#onetrust-accept-btn-handler').click()
        cy.get('#searchmain-container > div.maincategories > div > div:nth-child(2) > div:nth-child(5) > div > a').click()
        cy.get('#bottom99 > ul > li:nth-child(3) > a').click()
      //cy.get('[data-cy="l-card"]').should('have.length',1175)
      cy.get('[data-testid="listing-grid"]').find('[data-cy="l-card"]').should('have.length', 4)
    })
})

