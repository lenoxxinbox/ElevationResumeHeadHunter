import element from '../fixtures/elements.json'

Cypress.Commands.add('login', (email, password) => {    
    cy.get(element.invite).click();
    cy.get(element.toPass).click();
    cy.get(element.email).type(email).should('have.value', email);
    cy.get(element.pass).type(password);
    cy.get(element.logInButton).click();
})
