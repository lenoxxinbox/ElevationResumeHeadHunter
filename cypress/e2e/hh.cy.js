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
    cy.wait(2000);
    // cy.visit('https://hh.ru/applicant/resumes');
    cy.contains('Мои резюме').should('be.visible').click();
    cy.contains(element.raiseInSearchText).should('be.visible');
    cy.get(element.modalWindow).should('be.visible');
    cy.contains(element.ok).should('be.visible').click();
    cy.get(element.finalText).scrollIntoView().should('be.visible');
  })
})
