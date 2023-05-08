describe("changes  project priority and report status", function () {
  beforeEach(() => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      console.log(err)
      return false
    })
    // dodane ponieważ feddback widget failuje
    cy.visit("https://dev.feedbackui.com/")
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
    var Urgent = '[data-cy="priority-status-URGENT"]'
    var priority = [low, Medium, High, Urgent]
    var namePriority = ["Low", "Medium", "High", "Urgent"]
    //for (let i = 0; i < namePriority.length; i++) {
    priority.forEach((priorityInLoop, index) => {
      const namePriorityInLoop = namePriority[index]
      cy.get('[data-cy="row-col-updatedAt"]')
        .first()
        .invoke("text")
        .as("updatedAtValue")
      cy.wait(1000)
      cy.get('[data-cy="row-col-priorityStatus"]')
        .first()
        .then((textPriority) => {
          if (textPriority.text() !== namePriorityInLoop) {
            cy.get('[data-cy="row-col-priorityStatus"]').first().click()
            cy.get(priorityInLoop).click()
          }

          cy.get('[data-cy="priority-status-dropdown"]')
            .first()
            .should("have.text", namePriorityInLoop)
          cy.get('[data-cy="row-col-updatedAt"]')
            .first()
            .invoke("text")
            .as("updatedAfterClick")
            .then(() => {
              expect(this.updatedAfterClick).not.equal(this.updatedAtValue)
            })
        })
    })
  })

  //   ////RAPORT STATUS
  it("Change project status", function () {
    var closed = '[data-cy="report-status-CLOSED"]'
    var openn = '[data-cy="report-status-OPEN"]'
    var inprogress = '[data-cy="report-status-IN_PROGRESS"]'
    var resolved = '[data-cy="report-status-REVIEWED"]'
    var urgentAtStatus = '[data-cy="report-status-UNDER_REVIEW"]'
    var status = [closed, openn, inprogress, resolved, urgentAtStatus]
    var nameStatus = ["Closed", "Open", "In Progress", "Resolved", "Urgent"]
    //for (let i = 0; i < nameStatus.length; i++) {
    status.forEach((statusInLoop, index) => {
      const nameStatInLoop = nameStatus[index]
      cy.get('[data-cy="row-col-updatedAt"]')
        .first()
        .invoke("text")
        .as("updatedAtStatus")

      cy.get('[data-cy="report-status-dropdown"]')
        .first()
        .find("span")
        .then((textStatus) => {
          if (textStatus.text() !== nameStatInLoop) {
            cy.get('[data-cy="report-status-dropdown"]').first().click()
            cy.get(statusInLoop).click()
          }
        })
      cy.wait(1000)
      cy.get('[data-cy="report-status-dropdown"]')
        .first()
        .should("have.text", nameStatInLoop)
      cy.get('[data-cy="row-col-updatedAt"]')
        .first()
        .invoke("text")
        .as("updateStatusAfterClick")
        .then(() => {
          expect(this.updateStatusAfterClick).not.equal(this.updatedAtStatus)
        })
    })
  })
})
