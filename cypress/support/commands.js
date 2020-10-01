// Add @testing/library
import "@testing-library/cypress/add-commands"

// Check for the presence of text and href in links
Cypress.Commands.add("verifyLink", (linkText, href) => {
  cy.findByText(linkText).should("have.attr", "href", href)
})
