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
    cy.verifyLink(/portfolio/i, "/#portfolio").click()
    cy.url().should("include", "/#portfolio")
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
