
describe('template spec', function() {
    it('changes in settings',function() {
      

        cy.visit('https://viewingbooker.com/')
        cy.get('[class="cc-btn cc-dismiss"]').click()
        cy.get('[class="btn btn-success mr-3 ng-star-inserted"]').click()
   cy.get('[formcontrolname="email"]').type("testerautomatyzer@gmail.com")
    cy.get('[formcontrolname="password"]').type("Pop1pop1")
 cy.get('[class="btn btn-primary"]').click()
 cy.get('[class="d-block ui-w-30 rounded-circle"]').click()
 cy.contains('Account settings').click()
 
 cy.get('[placeholder="Please enter your account name"').clear()
 cy.get('[placeholder="Please enter your account name"]').type((Math.random()* 25)+ 97)
 cy.get('[class="btn btn-primary"]').click()
 cy.wait(10000)
 cy.reload()



})
   })
    
    