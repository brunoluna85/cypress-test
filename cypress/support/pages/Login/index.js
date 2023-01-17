const el = require('./elements').ELEMENTS;

class Login {
    access(){
        cy.visit('http://localhost:3000');
    }

    #login_as(username, password){
        cy.get(el.textUsername).type(username);
        cy.get(el.textPassword).type(password);
        cy.get(el.buttonLogin).click();
    }

    as_admin(){
        this.#login_as('admin', 'admin123')
    }

    as_manager(){
        this.#login_as('manager', 'manager123')
    }

    as_incorrect_user(){
        this.#login_as('wrong_user', 'wrong_password')
    }
}

export default new Login()