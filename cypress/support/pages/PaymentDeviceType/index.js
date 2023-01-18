const el = require('./elements').ELEMENTS;

class PaymentDeviceType {
    access(){
        cy.visit('/sit/payment_device_types');
    }
}

export default new PaymentDeviceType()