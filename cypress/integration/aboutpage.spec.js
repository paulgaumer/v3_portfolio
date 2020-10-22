/// <reference types="Cypress" />

describe("About Page", () => {
  before(() => {
    cy.visit("/about")
  })

  it("Render a H1 displaying a name", () => {
    cy.findByTestId("page-title").contains(/about/i)
  })

  it("Render 4 section titles", () => {
    cy.findAllByTestId("about-section-title").should("have.length", 3)
  })
  it("Render 3 content sections", () => {
    cy.findAllByTestId("about-section").should("have.length", 3)
  })

  it("Every link should contain a non-empty href opening in a new tab", () => {
    cy.get("[data-testid='about-section'] a")
      .get("[href='']")
      .should("not.exist")
    cy.get("[data-testid='about-section'] a").should(
      "have.attr",
      "target",
      "_blank"
    )
  })
})
