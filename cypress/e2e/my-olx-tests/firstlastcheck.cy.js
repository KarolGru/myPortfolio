describe('test hooks',function()  {
   
    beforeEach(()  =>{
        cy.visit('https://viewingbooker.com/')
        cy.get('[class="cc-btn cc-dismiss"]').click()
        cy.get('[class="btn btn-success mr-3 ng-star-inserted"]').click()
        cy.get('[formcontrolname="email"]').type("testerautomatyzer@gmail.com")
        cy.get('[formcontrolname="password"]').type("Pop1pop1")
        cy.get('[class="btn btn-primary"]').click()
        cy.get('[class="d-block ui-w-30 rounded-circle"]').click()
        cy.contains('Account settings').click()
        cy.get('#ngb-tab-1').click()
    })

    afterEach(() => {
            cy.get('[type="submit"]').click()
            cy.wait(3000)
            cy.get('[class="d-block ui-w-30 rounded-circle"]').click()
            cy. get('[class="ion ion-ios-log-out text-danger"]').click()
    })
        
    it('settings on',function() {
            cy.get(':checkbox').first().click({ force: true })
    })
    it('settings off',function() {
            cy.get(':checkbox').last().click({ force: true })
    })
 })
