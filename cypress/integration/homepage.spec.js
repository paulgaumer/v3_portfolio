describe("Homepage", () => {
  before(() => {
    cy.visit("/")
  })

  it("Render a H1 displaying a name", () => {
    cy.findByTestId("hero-title").contains("Paul")
  })
  it("Render a short bio", () => {
    cy.findByTestId("hero-bio").contains("Paul Gaumer")
  })
  it("Render a hero image", () => {
    cy.findByTestId("hero-image").should("have.length", 1)
  })
  it('Render an internal link navigating to "#portfolio"', () => {
    cy.verifyLink("Portfolio", "#portfolio").click()
    cy.url().should("include", "#portfolio")
  })
  it('Render an internal link navigating to "/about"', () => {
    cy.verifyLink("About", "/about").click()
    cy.url().should("include", "/about")
  })
  it('Render an internal link navigating to "/blog"', () => {
    cy.verifyLink("Blog", "/blog").click()
    cy.url().should("include", "/blog")
  })
})
