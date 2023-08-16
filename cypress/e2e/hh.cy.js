import element from '../fixtures/elements.json'


const email = Cypress.env('CYPRESS_LOGIN');
const password = Cypress.env('CYPRESS_PASSWORD');

describe('MyResume', () => {
  
  beforeEach(() => {
    cy.visit('https://hh.ru/account/login');
  })

  it('successful resume raising', () => {

    cy.login(email, password);
    cy.scrollTo('top');
    cy.get(element.myResumeMenu).should('be.visible').click();
    cy.contains(element.raiseInSearchText).should('be.visible').click();
    cy.get(element.modalWindow).should('be.visible');
    cy.contains(element.ok).should('be.visible').click();
    cy.get(element.finalText).scrollIntoView().should('be.visible');
  })
})
