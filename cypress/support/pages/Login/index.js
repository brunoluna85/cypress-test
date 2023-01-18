const el = require('./elements').ELEMENTS;

class Login {
    access(){
        cy.visit('http://localhost:3000');
    }

    login_as(username, password){
        cy.get(el.textUsername).type(username);
        cy.get(el.textPassword).type(password);
        cy.get(el.buttonLogin).click();
    }

}

export default new Login()