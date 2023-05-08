describe("template spec", function () {
  it("changes in settings", function () {
    cy.visit("https://viewingbooker.com/")
    cy.get('[class="cc-btn cc-dismiss"]').click()
    cy.get('[class="btn btn-success mr-3 ng-star-inserted"]').click()
    cy.get('[formcontrolname="email"]').type("testerautomatyzer@gmail.com")
    cy.get('[formcontrolname="password"]').type("Pop1pop1")
    cy.get('[class="btn btn-primary"]').click()
    cy.get('[class="d-block ui-w-30 rounded-circle"]').click()
    cy.contains("Account settings").click()
    cy.get('[placeholder="Please enter your account name"').clear()
    var randomName = [
      "Catrina",
      "FisherMan",
      "Lemur",
      "Komodo Dragon",
      "Pokemon",
      "Ignore",
      "Random",
      "Bruce Lee",
      "Im Batman",
      "Superman",
    ]
    var randomNameType =
      randomName[Math.floor(Math.random() * randomName.length)]
    cy.get('[placeholder="Please enter your account name"]').type(
      randomNameType
    )
    cy.get('[class="btn btn-primary"]').click({ force: true })
    cy.wait(1000)
    cy.reload()
    cy.wait(1000)
    cy.get('[class="d-block ui-w-30 rounded-circle"]').click()
    cy.get('[class="ion ion-ios-log-out text-danger"]').click()
  })
})
