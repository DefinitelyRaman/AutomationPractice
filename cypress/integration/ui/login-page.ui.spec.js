import { STANDARD_USER, ERROR_USER } from '../../support/requirements/Credentials';
describe('LoginPage: Given no preconditions and no created data', { testIsolation: false }, () => {
  context('LoginPage: When user navigates to the page', () => {
  before(() => {
      cy.visit('https://www.saucedemo.com/');
    });
    it('verifies that login page contains login and password fields', () => {
       cy.get('#user-name').should('be.visible')
       cy.get('#password').should('be.visible')
    })
    it('verifies that loginPage contains loginPage__logIn', () => {
       cy.get('#login-button').should('be.visible')
    })
    it('allows user to enter username and password', () => {
       cy.get('#user-name').type(STANDARD_USER.username)
       cy.get('#password').type(STANDARD_USER.password)
    })
  });
  context('LoginPage: When user navigates to the page', () => {
    it('then enters wrong credentials and sees error message',() => {
       cy.get('#user-name').type(ERROR_USER.username)
       cy.get('#password').type('secret')
       cy.get('#login-button').click()
       cy.get('.error-message-container.error').should('be.visible')
       cy.contains('[data-test="error"]',
       'Epic sadface: Username and password do not match any user in this service'
       ).should('be.visible');
  });
    it.skip('verifies that username symbols are always visible and password symbols are always hidden');
    // Not implemented yet
  });
});