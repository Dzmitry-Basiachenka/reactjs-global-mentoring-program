describe('Counter', () => {

  it('should decrement and increment', () => {
    cy.visit('/');

    cy.get('[role=counter-decrement]').should('have.text', '-');
    cy.get('[role=counter-text]').should('have.text', '1');
    cy.get('[role=counter-increment]').should('have.text', '+');

    cy.get('[role=counter-decrement]').click();
    cy.get('[role=counter-text]').should('have.text', '0');

    cy.get('[role=counter-increment]').click();
    cy.get('[role=counter-text]').should('have.text', '1');
  })

})
