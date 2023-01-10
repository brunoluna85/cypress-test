const el = require('./elements').ELEMENTS;

class Login {
    access(){
        cy.visit('http://localhost:3000');
    }

    as_admin(){
        cy.get(el.textUsername).type('admin');
        cy.get(el.textPassword).type('admin123');
        cy.get(el.buttonLogin).click();
    }

    as_incorrect_user(){
        cy.get(el.textUsername).type('admin');
        cy.get(el.textPassword).type('invalidpassword');
        cy.get(el.buttonLogin).click();
    }
}

export default new Login()