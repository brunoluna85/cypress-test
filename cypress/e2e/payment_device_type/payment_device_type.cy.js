/// <reference types="cypress" />

import '../../support/commands'
import PaymentDeviceType from '../../support/pages/PaymentDeviceType';
const payment_device_type_el = require('../../support/pages/PaymentDeviceType/elements').ELEMENTS;

describe('Payment Device Type', () => {

    beforeEach(() => {
        cy.login_as();
        cy.select_customer();
        PaymentDeviceType.access();
    })

    it('should open the page', () => {
        cy.get(payment_device_type_el.pageHeader)
            .should('be.visible')
            .and('have.text', 'Payment Device Types');
    })

    it.skip('should list all existing one', () => {

    })

    it.skip('should be possible to create one', () => {

    })

    it.skip('should be possible to read data from one', () => {

    })

    it.skip('should be possible to update data from one', () => {

    })

    it.skip('should be possible to delete a not used one', () => {

    })

    it.skip('should not be possible to delete a used one', () => {

    })

    it.skip('should be possible to cancel delete', () => {

    })

    it.skip('new button should lead to the page', () => {

    })
})