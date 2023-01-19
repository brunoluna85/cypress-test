const el = require('./elements').ELEMENTS;

class PaymentDeviceType {
    access(){
        cy.visit(el.myIndex);
    }
}

export default new PaymentDeviceType()