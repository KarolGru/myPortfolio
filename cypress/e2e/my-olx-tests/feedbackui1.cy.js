import { slowCypressDown } from "cypress-slow-down"
import "cypress-slow-down/commands"

describe("changes  in settings wiget ", function () {
  it("settings off", function () {
    // bez poniższego kodu uruchomienie testu jest niemożliwe ze wzglęu na specyfikę wystepującego błędu
    Cypress.on("uncaught:exception", (err, runnable) => {
      console.log(err)
      return false
    })
    slowCypressDown(false)
    cy.visit("https://feedbackui.com/")
    cy.contains("Log in").click()
    cy.get("#email-address").type("user2@gmail.com")
    cy.get("#password").type(12345)
    cy.get('[data-cy="button-login"]').click()
    //click on first project menu in dashbords
    cy.get('[class="flex-shrink-0 pr-2"]').first().click()
    cy.contains("Settings").click()
    cy.get('[data-cy="input"]').clear()

    cy.get('[data-cy="input"]').type("Test").slowDown(1000)
    cy.slowDownEnd()

    //click on "Widget Button Position" button  to see other options
    cy.get('[class="-mr-1 ml-2 h-5 w-5"]').click()
    cy.contains("Middle Left").click()
    // click  buttom to change  "'Email Notifications"
    cy.get('[data-cy="container-emailSwitch"]').within(() => {
      cy.get("button").click()
    })
    //click to change Widget Switch
    cy.get('[data-cy="container-widgetSwitch"]').within(() => {
      cy.get("button").click()
    })
    cy.reload()
    //sprawdzenie poprawności danych
    cy.get('[data-cy="input"]').should("have.value", "Test")
    cy.get('[class="relative inline-block text-left"]').should(
      "contain.text",
      "Middle Left"
    )
    cy.get('[data-cy="container-emailSwitch"]').within(() => {
      cy.get("button").then(($ele) => {
        if ($ele.attr("aria-checked") == "true") {
          cy.get("button").should("have.attr", "aria-checked", "true")
        } else {
          cy.get("button").should("have.attr", "aria-checked", "false")
        }
      })
    })

    cy.get('[data-cy="container-widgetSwitch"]').within(() => {
      cy.get("button").then(($ele) => {
        if ($ele.attr("aria-checked") == "true") {
          cy.get("button").should("have.attr", "aria-checked", "true")
        } else {
          cy.get("button").should("have.attr", "aria-checked", "false")
        }
      })
    })
    cy.contains("View profile").click()
    cy.contains("Logout").click()
  })
})
