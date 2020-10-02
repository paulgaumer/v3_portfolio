describe("Footer", () => {
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
    cy.findByTestId("footer-social-links")
      .children("li > a")
      .get('[href=""]')
      .should("not.exist")
  })
  it("Render a footer form", () => {
    cy.findByTestId("footer-form")
  })
})
