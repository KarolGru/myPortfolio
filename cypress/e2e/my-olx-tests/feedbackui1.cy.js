describe("changes  in settings wiget ", function () {
  it("settings off", function () {
    Cypress.on("uncaught:exception", (err, runnable) => {
      console.log(err)
      return false
    })
    cy.visit("https://feedbackui.com/")
    cy.contains("Log in").click()
    cy.get("#email-address").type("user2@gmail.com")
    cy.get("#password").type(12345)
    cy.get('[data-cy="button-login"]').click()
    cy.get('[class="flex-shrink-0 pr-2"]').first().click()
    cy.contains("Settings").click()
    cy.get('[data-cy="input"]').clear()
    cy.get('[data-cy="input"]').type("Test")
    cy.get('[class="-mr-1 ml-2 h-5 w-5"]').click()
    cy.contains("Middle Left").click()
    cy.get('[data-cy="container-emailSwitch"]').within(() => {
      cy.get("button").click()
    })
    cy.get('[data-cy="container-widgetSwitch"]').within(() => {
      cy.get("button").click()
    })
    cy.reload()
    cy.contains("View profile").click()
    cy.contains("Logout").click()
  })
})
