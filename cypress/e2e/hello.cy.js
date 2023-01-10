/// <reference types="cypress" />

describe('Login', () => {
  
  it('should open the login page', () => {
    cy.visit('http://localhost:3000')
  })
  
  it('should fail with incorrect credentials', () => {
    cy.visit('http://localhost:3000')
    cy.get('#user_username').type('admin')
    cy.get('#user_password').type('adminwrong')
    cy.get('.primary').click()
  })

  it('should login with correct credentials', () => {
    cy.visit('http://localhost:3000')
    cy.get('#user_username').type('admin')
    cy.get('#user_password').type('admin123')
    cy.get('.primary').click()
  })
})