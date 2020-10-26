/// <reference types="Cypress" />

describe("Homepage", () => {
  before(() => {
    cy.visit("/")
  })

  it("Render a H1 displaying a name", () => {
    cy.findByTestId("page-title").contains("Paul")
  })
  it("Render a short bio", () => {
    cy.findByTestId("hero-bio").contains("Paul Gaumer")
  })
  it("Render a hero image", () => {
    cy.findByTestId("hero-image").should("have.length", 1)
  })
  it('Render an internal link navigating to "#portfolio"', () => {
    cy.get("[data-testid=nav-section] a")
      .contains(/portfolio/i)
      .should("have.attr", "href", "#portfolio")
      .click()
    // .url()
    // .should("include", "#portfolio")
  })
  it('Render an internal link navigating to "/about"', () => {
    cy.visit("/")
    cy.get("[data-testid=nav-section] a")
      .contains(/about/i)
      .should("have.attr", "href", "/about")
      .click()
    // .url()
    // .should("include", "/about")
  })
  it('Render an internal link navigating to "/blog"', () => {
    cy.visit("/")
    cy.get("[data-testid=nav-section] a")
      .contains(/blog/i)
      .should("have.attr", "href", "/blog")
      .click()
    // .url()
    // .should("include", "/blog")
  })
})

describe("Portfolio", () => {
  before(() => {
    cy.visit("/")
  })

  it("Render the portfolio section title", () => {
    cy.findByTestId("portfolio-section-title").contains("Portfolio")
  })
  it("Render a card title with text", () => {
    cy.get("[data-testid=project-card] h3").should("not.be.empty")
  })
  it("Render a card description", () => {
    cy.get("[data-testid=project-card] p").should("not.be.empty")
  })
  it("Render a card link containing a non-empty href", () => {
    cy.get("[data-testid=project-card] a").get('[href=""]').should("not.exist")
  })
  it("Render a card with a front image", () => {
    cy.get("[data-name='image-side'] img").should("exist")
  })
})
