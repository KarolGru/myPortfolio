describe("FeedbackUI Test2 ", function () {
  // dodane ponieważ feddback widget failuje
  Cypress.on("uncaught:exception", (err, runnable) => {
    console.log(err)
    return false
  })

  it("Compare values after click", function () {
    cy.visit("https://feedbackui.com/")
    cy.get('[href = "/pricing"]').click()

    cy.get('[class="p-6"]')
      .last()
      .within(() => {
        cy.contains("Enterprise")

        cy.get('[class="text-4xl font-bold tracking-tight text-gray-900"]')
          .invoke("text")
          .as("price")

          .then(cy.log)
      })

    cy.contains("Yearly billing").click()
    cy.get('[class="p-6"]')
      .last()
      .within(() => {
        cy.get('[class="text-4xl font-bold tracking-tight text-gray-900"]')
          .invoke("text")

          .as("newprice")
          .then(cy.log)
          .then((newprice) => {
            expect(this.newprice).not.equal(this.price)
          })
      })
  })
})
