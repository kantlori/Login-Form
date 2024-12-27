describe('Login Form', () => {
    it('should submit successfully with valid inputs', () => {
        cy.visit('/');
        cy.get('input[name="email"]').type('test@example.com');
        cy.get('input[name="password"]').type('Password123');
        cy.get('input[name="terms"]').check();
        cy.get('button').should('not.be.disabled').click();
        cy.contains('Login Successful!').should('exist');
    });
});

describe('Login Form Errors', () => {
    it('should show error for invalid email', () => {
        cy.visit('/');
        cy.get('input[name="email"]').type('invalid-email');
        cy.get('button').should('be.disabled');
        cy.contains('Invalid email address').should('exist');
    });

    it('should show multiple errors for invalid inputs', () => {
        cy.visit('/');
        cy.get('input[name="email"]').type('invalid-email');
        cy.get('input[name="password"]').type('short');
        cy.contains('Invalid email address').should('exist');
        cy.contains('Password must be 8+ characters, include a number and uppercase letter').should('exist');
        cy.get('button').should('be.disabled');
    });
});