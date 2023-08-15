import element from '../fixtures/elements.json'

Cypress.Commands.add('login', (email, password) => {    
    cy.get(element.invite).click();
    cy.get(element.toPass).click();
    if(email) {
        cy.get(element.email).type(email);
    }
    if(password) {
        cy.get(element.pass).type(password);
    }
    cy.get(element.logInButton).click();
})
