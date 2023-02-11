describe('My tests', () => {
    it(' nickname  from webside', () => {
        cy.visit('https://olx.pl/')
        cy.get('#onetrust-accept-btn-handler').click()
        cy.get('[data-adnumber="1"]').click()
        cy.contains('div', 'Na OLX od')
    })
})

