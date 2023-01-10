/// <reference types="cypress" />

import Login from '../support/pages/Login';

describe('Login', () => {
  
  it('should open the login page', () => {
    Login.access();
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