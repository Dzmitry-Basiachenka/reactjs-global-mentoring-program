describe('MovieDetails', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('renders movie details', () => {
    cy.findByTestId('search-form').should('be.visible');
    cy.findByTestId('movie-details').should('not.exist');

    cy.findAllByTestId('movie-tile').first().click();

    cy.findByTestId('search-form').should('not.exist');
    cy.findByTestId('movie-details').should('be.visible');

    cy.findByTestId('movie-details-title').should('have.text', '¡Three Amigos!');
    cy.findByTestId('movie-details-vote').should('have.text', '6.2');
    cy.findByTestId('movie-details-genres').should('have.text', 'Comedy, Western');
    cy.findByTestId('movie-details-year').should('have.text', '1986');
    cy.findByTestId('movie-details-runtime').should('have.text', '1h 42min');
    cy.findByTestId('movie-details-overview').should('have.text', 'Three unemployed actors accept an invitation to a Mexican village to replay their bandit fighter roles, unaware that it is the real thing.');

    cy.findByTestId('close-movie-details').click();

    cy.findByTestId('search-form').should('be.visible');
    cy.findByTestId('movie-details').should('not.exist');
  });

});
