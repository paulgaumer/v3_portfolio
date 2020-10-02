describe("Portfolio", () => {
  before(() => {
    cy.visit("/")
  })

  // it("Number of rendered nodes matches the number of elements passed as a prop (project list) ", () => {})

  it("Render the portfolio section title", () => {
    cy.findByTestId("portfolio-section-title").contains("Portfolio")
  })
  it("Render a card title", () => {
    cy.findAllByTestId("project-card")
      .children("h3")
      // Check if the text length is >= 1
      .contains(/^.{1,}$/)
  })
  it("Render a card description", () => {
    cy.findAllByTestId("project-card")
      .children("p")
      .contains(/^.{1,}$/)
  })
  it("Render a card link containing a non-empty href", () => {
    const links = cy.findAllByTestId("project-card").children("a")
    links.should("have.attr", "href")
    links.get('[href=""]').should("not.exist")
  })
  it("Render a card with a back image", () => {
    cy.findAllByTestId("project-card").children(
      "[data-testid='project-card-back-image'"
    )
  })
  it("Render a card with a front image", () => {
    cy.findAllByTestId("project-card").children(
      "[data-testid='project-card-front-image'"
    )
  })
})
