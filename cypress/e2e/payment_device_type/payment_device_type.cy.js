/// <reference types="cypress" />

import '../../support/commands'
import PaymentDeviceType from '../../support/pages/PaymentDeviceType';
const payment_device_type_el = require('../../support/pages/PaymentDeviceType/elements').ELEMENTS;

describe('Payment Device Type', () => {

    beforeEach(() => {
        cy.login_as("admin");
    })

    it('should open the payment device type page', () => {
        PaymentDeviceType.access();
        cy.get(payment_device_type_el.pageHeader)
            .should('be.visible')
            .and('have.text', 'Payment Device Types');
    })
})