describe("FeedbackUI Test2 ", function () {
  // dodane ponieważ feddback widget failuje
  Cypress.on("uncaught:exception", (err, runnable) => {
    console.log(err)
    return false
  })

  it("Compare values after click", function () {
    cy.visit("https://feedbackui.com/")
    cy.get('[href = "/pricing"]').click()
    cy.wait(1000)
    cy.get('[class="p-6"]')
      .last()
      .within(() => {
        cy.contains("Enterprise")
        cy.get(
          '[class="text-4xl font-bold tracking-tight text-gray-900"]'
        ).should(($div) => {
          const price = $div.text()
        })
      })
    cy.contains("Yearly billing").click()
    cy.get('[class="p-6"]')
      .last()
      .within(() => {
        cy.contains("Enterprise")
        cy.get(
          '[class="text-4xl font-bold tracking-tight text-gray-900"]'
        ).should(($div) => {
          const newprice = $div.text()

          expect("@price").not.equal("@newprice")
        })
      })
  })
})
