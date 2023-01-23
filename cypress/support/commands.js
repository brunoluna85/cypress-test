/// <reference types="cypress" />

import Login from '../support/pages/Login';
const menu_el = require('./pages/Menu/elements').ELEMENTS;


Cypress.Commands.add('login_as', (user = "admin") => {
    Login.access();
    Login.login_as(Cypress.env(user).username, Cypress.env(user).password);
});

Cypress.Commands.add('select_customer', (customer = `${Cypress.config('customer')}`) => {
    cy.get(menu_el.customerDropdown).type(customer).type('Cypress.io{enter}');
});

Cypress.Commands.add('make_fixture', function(fixtureName, fixtureData) {
    cy.fixture(fixtureName).then(function(f) {
        fixtureData = f;
    })
});
