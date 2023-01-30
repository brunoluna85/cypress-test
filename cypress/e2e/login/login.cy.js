/// <reference types="cypress" />

import Login from '../../support/pages/Login';
const login_el = require('../../support/pages/Login/elements').ELEMENTS;
const menu_el = require('../../support/pages/Menu/elements').ELEMENTS;

// only login tests are not using cy.login_as(user), it is using the Page Object login_as(username, password) to do step by step
describe('Login', () => {
  
  it('should open the login page', () => {
    Login.access();
    cy.get(login_el.buttonLogin)
        .should('be.visible')
        .and('have.text', '\nSign in\n')
  })
  
  it('should fail with incorrect credentials', () => {
    Login.access();
    Login.login_as("incorrect_user", "incorrect_password");
    cy.get(login_el.alertBox)
        .should('be.visible')
        .and('have.text', 'Invalid Username or password.')
  })

  it('should login with correct credentials', () => {
    Login.access();
    Login.login_as("admin", "admin123");
    cy.get(menu_el.userNameHeader)
        .should('be.visible')
        .and('have.text', '\nadmin\n')
  })

  it('should logout', () => {
    cy.login_as('admin');
    cy.get(menu_el.userNameHeaderDropDown).click();
    cy.get(menu_el.logoutButton).click()
    cy.get(login_el.alertBox)
        .should('be.visible')
        .and('have.text', 'Signed out successfully.');
    cy.url().should('eq', `${Cypress.config('baseUrl')}`)
  })

  it.skip('should login with api', () => {
    //TODO
  });
})