const el = require('./elements').ELEMENTS;

class Menu {
    access(){
        cy.visit('http://localhost:3000/sit/nodes');
    }
}

export default new Menu()