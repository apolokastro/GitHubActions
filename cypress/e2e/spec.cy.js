describe('Test Case suite', () => {
  it('Test case to pass', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('Kitchen Sink')
  })

  it('Test case to fail', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('Kitchen Sink')
  })
})