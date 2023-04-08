describe("changes  project priority and report status", function () {
  beforeEach(() => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      console.log(err)
      return false
    })
    // dodane ponieważ feddback widget failuje
    cy.visit("https://feedbackui.com/")
    cy.contains("Log in").click()
    cy.get("#email-address").type("user2@gmail.com")
    cy.get("#password").type(12345)
    cy.get('[data-cy="button-login"]').click()
  })
  afterEach(() => {
    cy.get('[href = "/dashboard/profile"]').click({ force: true })
    cy.contains("Logout").click
  })
  //RAPORT PRIORITY
  it("Change project priority", function () {
    var low = '[data-cy="priority-status-LOW"]'
    var Medium = '[data-cy="priority-status-MEDIUM"]'
    var High = '[data-cy="priority-status-HIGH"]'
    var Urgent1 = '[data-cy="priority-status-URGENT"]'
    var priority = [low, Medium, High, Urgent1]
    var name1 = ["Low", "Medium", "High", "Urgent"]
    for (let i = 0; i < name1.length; i++) {
      cy.get('[data-cy="row-col-priorityStatus"]')
        .first()
        .then((txt) => {
          if (txt.text() !== name1[i]) {
            cy.get('[data-cy="row-col-priorityStatus"]').first().click()
            cy.get(priority[i]).click()
          }

          cy.get('[data-cy="priority-status-dropdown"]')
            .first()
            .should("have.text", name1[i])
        })
    }
  })

  //   ////RAPORT STATUS
  it("Change project status", function () {
    var closed = '[data-cy="report-status-CLOSED"]'
    var openn = '[data-cy="report-status-OPEN"]'
    var inprogress = '[data-cy="report-status-IN_PROGRESS"]'
    var resolved = '[data-cy="report-status-REVIEWED"]'
    var urgent2 = '[data-cy="report-status-UNDER_REVIEW"]'
    var status = [closed, openn, inprogress, resolved, urgent2]
    var name2 = ["Closed", "Open", "In Progress", "Resolved", "Urgent"]
    for (let i = 0; i < name2.length; i++) {
      cy.get('[data-cy="report-status-dropdown"]')
        .first()
        .find("span")
        .then((txt2) => {
          if (txt2.text() !== name2[i]) {
            cy.get('[data-cy="report-status-dropdown"]').first().click()
            cy.get(status[i]).click()
          }
        })
      cy.get('[data-cy="report-status-dropdown"]')
        .first()
        .should("have.text", name2[i])
    }
  })
})
