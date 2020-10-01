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
    cy.get("a[href*='portfolio']").click()
    cy.url().should("include", "#portfolio")
  })
  it('Render an internal link navigating to "/page-2"', () => {
    cy.get("a[href*='page-2']").click()
    cy.url().should("include", "/page-2")
  })
})
