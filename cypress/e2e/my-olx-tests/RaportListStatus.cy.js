describe("changes  in settings wiget ", function () {
  it("settings off", function () {
    // dodane ponieważ feddback widget failuje
    Cypress.on("uncaught:exception", (err, runnable) => {
      console.log(err)
      return false
    })

    cy.visit("https://feedbackui.com/")
    cy.contains("Log in").click()
    cy.get("#email-address").type("user2@gmail.com")
    cy.get("#password").type(12345)
    cy.get('[data-cy="button-login"]').click()

    cy.get('[class="mt-10"]').within(() => {
      //Low
      cy.get('[data-cy="priority-status-dropdown"]').first().click()
      cy.get('[data-cy="priority-status-LOW"]').should("be.visible").click()
      cy.get('[data-cy="priority-status-dropdown"]')
        .first()
        .should("have.text", "Low")
      // //Medium
      cy.get('[data-cy="priority-status-dropdown"]').first().click()
      cy.get('[data-cy="priority-status-MEDIUM"]').should("be.visible").click()
      cy.get('[data-cy="priority-status-dropdown"]')
        .first()
        .should("have.text", "Medium")
      // //high

      cy.get('[data-cy="priority-status-dropdown"]').first().click()
      cy.get('[data-cy="priority-status-HIGH"]').should("be.visible").click()
      cy.get('[data-cy="priority-status-dropdown"]')
        .first()
        .should("have.text", "High")
      //urgent
      cy.get('[data-cy="priority-status-dropdown"]').first().click()
      cy.get('[data-cy="priority-status-URGENT"]').should("be.visible").click()
      cy.get('[data-cy="priority-status-dropdown"]')
        .first()
        .should("have.text", "Urgent")
      ////RAPORT STATUS
      //Closed

      cy.get('[data-cy="report-status-dropdown"]').first().click()
      cy.get('[data-cy="report-status-CLOSED"]').should("be.visible").click()
      cy.get('[data-cy="report-status-dropdown"]')
        .first()
        .should("have.text", "Closed")
      //Open
      cy.get('[data-cy="report-status-dropdown"]').first().click()
      cy.get('[data-cy="report-status-OPEN"]').should("be.visible").click()
      cy.get('[data-cy="report-status-dropdown"]')
        .first()
        .should("have.text", "Open")
      // // In Progess
      cy.get('[data-cy="report-status-dropdown"]').first().click()
      cy.get('[data-cy="report-status-IN_PROGRESS"]')
        .should("be.visible")
        .click()
      cy.get('[data-cy="report-status-dropdown"]')
        .first()
        .should("have.text", "In Progress")

      //Resolved
      cy.get('[data-cy="report-status-dropdown"]').first().click()
      cy.get('[data-cy="report-status-REVIEWED"]').should("be.visible").click()
      cy.get('[data-cy="report-status-dropdown"]')
        .first()
        .should("have.text", "Resolved")
      //Urgent
      cy.get('[data-cy="report-status-dropdown"]').first().click()
      cy.get('[data-cy="report-status-UNDER_REVIEW"]')
        .should("be.visible")
        .click()
      cy.get('[data-cy="report-status-dropdown"]')
        .first()
        .should("have.text", "Urgent")
    })
    cy.get('[href = "/dashboard/profile"]').click({ force: true })
    cy.contains("Logout").click()
  })
})
