describe("Blog Index Page", () => {
  before(() => {
    cy.visit("/blog")
  })

  it("Render a H1 displaying a name", () => {
    cy.findByTestId("page-title").contains(/blog/i)
  })
  it("Render a section intro", () => {
    cy.findByTestId("section-intro")
  })
  it("Render a list of post Cards items", () => {
    cy.findAllByTestId("post-card").should("have.length.at.least", 1)
  })
  it("Render all post Cards with a title", () => {
    cy.get("[data-testid='post-card'] h2").should("not.be.empty")
  })
  it("Render all post Cards with a publishedDate", () => {
    cy.get("[data-testid='card-date']").should("not.be.empty")
  })
  it("Render all post Cards with a description", () => {
    cy.get("[data-testid='card-description']").should("not.be.empty")
  })
  it("Render all post Cards with valid links", () => {
    cy.get("[data-testid='post-card'] a").get('[href=""]').should("not.exist")
  })
})

describe("Blog Post Page", () => {
  beforeEach(() => {
    cy.visit("/blog")
  })

  it("Render a blog post page when clicking on a post Card", () => {
    cy.get("[data-testid='post-card'] a")
      .first()
      .click()
      .get("[data-testid='post-content']")
      .should("not.be.empty")
  })
})
