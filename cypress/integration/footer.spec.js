/// <reference types="Cypress" />

describe("Footer", () => {
  before(() => {
    cy.visit("/")
  })

  it("Render a footer form", () => {
    cy.findByTestId("footer-form")
  })
  it("Render a footer title ", () => {
    cy.findByTestId("footer-title")
  })
  it("Render a footer description", () => {
    cy.findByTestId("footer-description")
  })
  it("Render footer social links", () => {
    cy.findByTestId("footer-social-links")
      .children("li")
      .should("have.length", 3)
  })
  it("Footer social links should have valid href", () => {
    cy.get("[data-testid='footer-social-links'] a")
      .get('[href=""]')
      .should("not.exist")
  })
  it("Form can submit a message", () => {
    const email = "test@test.com"
    const desc = "This is a test message"
    cy.get("[data-testid='footer-form-email']")
      .type(email)
      .should("have.value", email)
    cy.get("[data-testid='footer-form-message']")
      .type(desc)
      .should("have.value", desc)
    // cy.get("[data-testid='footer-form'] button").click()
  })
})
