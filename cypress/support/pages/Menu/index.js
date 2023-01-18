const el = require('./elements').ELEMENTS;

class Menu {
    access(){
        cy.visit('/sit/nodes');
    }
}

export default new Menu()