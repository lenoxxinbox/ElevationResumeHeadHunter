import data from '../fixtures/login.json'
import element from '../fixtures/elements.json'

describe('MyResume', () => {
  
  beforeEach(() => {
    cy.visit('https://hh.ru/account/login');
  })

  it('successful resume raising', () => {


    cy.login(data.email, data.password);    
    cy.get(element.myResumeMenu).should('be.visible').click();
    cy.contains(element.raiseInSearchText).should('be.visible').click();
    cy.get(element.modalWindow).should('be.visible');
    cy.contains(element.ok).should('be.visible').click();
    cy.get(element.finalText).scrollIntoView().should('be.visible');
  })
})
