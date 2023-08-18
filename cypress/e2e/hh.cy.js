import element from '../fixtures/elements.json'

describe('MyResume', () => {
  
  beforeEach(() => {
    cy.visit('https://hh.ru/account/login');
  })

  it('successful resume raising', () => {
    expect(Cypress.env())
      .to.be.an('object')
      .and.to.include.keys('email', 'password');
    cy.log('**email:** ' + Cypress.env('email'))
    cy.log('**password:** ' + Cypress.env('password'))
    
    cy.login(Cypress.env('email'), Cypress.env('password'));
    cy.scrollTo('top');
    cy.screenshot('env', { capture: 'runner' })
    cy.wait(60000);
    cy.get('[data-qa="mainmenu_myResumes"]').should('be.visible').click({ force: true });
    cy.contains(element.raiseInSearchText).should('be.visible');
    cy.wait(500000);
    cy.get(element.modalWindow).should('be.visible');
    cy.wait(50000);
    cy.contains(element.ok).should('be.visible').click();
    cy.get(element.finalText).scrollIntoView().should('be.visible');
  })
})
