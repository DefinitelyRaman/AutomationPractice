describe('Login: given login page is opened', () => {
  beforeEach(() => {
  cy.visit('https://www.saucedemo.com/')
    })
    it('verifies that login page contains login and password fields', () => {
       cy.get('#user-name').should('have.exist')
       cy.get('#password').should('have.exist')
    })
    it('verifies that login page contains big beautiful "Login" button', () => {
       cy.get('#login-button').should('have.exist')
    })
    it('allows user to enter username and password', () => {
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
    })
    it('shows error when credentials are wrong',() => {
        cy.get('[data-test="error"]').should('not.exist')
        cy.get('#user-name').type('wrong_cred')
        cy.get('#password').type('secret')
        cy.get('#login-button').click()
        cy.get('.error-message-container.error').should('be.visible')
        cy.contains('[data-test="error"]',
        'Epic sadface: Username and password do not match any user in this service'
        ).should('be.visible');
   })
    it('verifies that username symbols are always visible and password symbols are always hidden');
})
