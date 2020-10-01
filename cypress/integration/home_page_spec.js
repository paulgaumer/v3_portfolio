describe("Homepage", () => {
  before(() => {
    cy.visit("/")
  })

  it("Render an H1 displaying a name", () => {
    cy.get("h1").contains("Paul")
  })
})
