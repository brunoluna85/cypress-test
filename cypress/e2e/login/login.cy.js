/// <reference types="cypress" />

import Login from '../../support/pages/Login';
const login_el = require('../../support/pages/Login/elements').ELEMENTS;

describe('Login', () => {
  
  it('should open the login page', () => {
    Login.access();
    cy.get(login_el.buttonLogin)
        .should('be.visible')
        .and('have.text', '\nSign in\n')
  })
  
  it('should fail with incorrect credentials', () => {
    Login.access();
    Login.as_incorrect_user();
  })

  it('should login with correct credentials', () => {
    Login.access();
    Login.as_admin();
  })
})