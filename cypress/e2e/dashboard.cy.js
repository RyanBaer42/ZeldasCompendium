describe('template spec', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://botw-compendium.herokuapp.com/api/v2/category/materials', {fixture: 'items.json'})
		
  });
  it('should have access to the Zeldas Compendium website', () => {
    cy.visit('http://localhost:3000/')
  })
})