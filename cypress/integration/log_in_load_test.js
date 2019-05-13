describe('Going to log in', function() {
    it('From home goes to log on', function() {
      Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
      
      cy.visit('http://localhost:3000/home');

      cy.contains('Log in/Sign Up').click();

      cy.url().should('include', '/login');
    })
  })