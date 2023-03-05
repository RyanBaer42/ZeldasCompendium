describe('template spec', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://botw-compendium.herokuapp.com/api/v2/entry/razorshroom', {fixture: 'razorshroom.json'})
    cy.visit('http://localhost:3000/item/razorshroom')
  })
  it('Should have access to a specific items details page', () => {
    cy.visit('http://localhost:3000/item/razorshroom')
  })
  it('should display the websites logo and name on page load', () => {
    cy.get('.website-logo')
      .should('be.visible')
    cy.get('.website-name')
      .contains(`Zelda's Compendium`)
  })
  it('should display the items image', () => {
    cy.get('.detail-item-image')
      .should('be.visible')
  })
  it('should display label for a description of the item and the description itself', () => {
    cy.get('.label-text')
      .should('be.visible')
      .should('have.length', 4)
    cy.get('.detail-text')
      .should('be.visible')
      .should('have.length', 4)
  })
  it('should redirect you to the main page when the website logo is clicked', () => {
    cy.get('.logo-container')
      .click()
    cy.get('form')
      .should('be.visible')
    cy.get('.card-container')
      .should('be.visible')
  })
})