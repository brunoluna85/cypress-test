const el = require('./elements').ELEMENTS;

class PaymentDeviceType {
    access(){
        cy.visit('http://localhost:3000/sit/payment_device_types');
    }
}

export default new PaymentDeviceType()