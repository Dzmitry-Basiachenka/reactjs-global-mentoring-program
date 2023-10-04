describe('SearchForm', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('has default values', () => {
    cy.contains('Find your movie').should('be.visible');
    cy.get('input[data-testid=search-input]').should('have.value', '');
    cy.get('button[data-testid=search-button]').should('have.text', 'Search');
  });

  it('searches movies', () => {
    cy.get('[data-testid=movie-counter]').contains('9 movies found').should('exist');

    cy.get('input[data-testid=search-input]').type('eleven').should('have.value', 'eleven');
    cy.get('button[data-testid=search-button]').click();

    cy.wait(2000);

    cy.get('[data-testid=movie-counter]').contains('1 movie found').should('exist');

    cy.findAllByTestId('movie-tile').first().findByTestId('movie-tile-title').should('have.text', 'Ocean\'s Eleven');
  });

});
