describe("compare price plan ", function () {
  // dodane ponieważ feddback widget failuje
  Cypress.on("uncaught:exception", (err, runnable) => {
    console.log(err)
    return false
  })

  it("Compare values after click", function () {
    cy.visit("https://feedbackui.com/")
    cy.get('[href = "/pricing"]').click()
    //zmiana trybu planu startowego
    //cy.contains("Yearly billing").click()
    //wybór z tabeli Enterprice kwoty z planu
    cy.get('[class="p-6"]')
      .last()
      .within(() => {
        cy.contains("Enterprise")
        cy.get('[class="text-4xl font-bold tracking-tight text-gray-900"]')
          .invoke("text")
          .as("planPrice1")
          .then(cy.log)
      })
    // zmiana planu niezależnie od planu startowego
    cy.contains("Yearly billing").then((Year) => {
      if (
        Year.hasClass(
          "relative ml-0.5 w-1/2 whitespace-nowrap rounded-md border border-transparent py-2 text-sm font-medium text-gray-700 focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:w-auto sm:px-8 border-gray-200 bg-white"
        )
      ) {
        cy.contains("Monthly billing").click()
      } else {
        cy.contains("Yearly billing").click()
      }
    })
    //wybór z tabeli Enterprice kwoty z planu
    cy.get('[class="p-6"]')
      .last()
      .within(() => {
        cy.get('[class="text-4xl font-bold tracking-tight text-gray-900"]')
          .invoke("text")
          .as("planPrice2")
          .then(cy.log)
          //porównanie kwot planów
          .then((planPrice2) => {
            expect(this.planPrice2).not.equal(this.planPrice1)
          })
      })
  })
})
