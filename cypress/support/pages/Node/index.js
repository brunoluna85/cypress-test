const el = require('./elements').ELEMENTS;

class Node {
    access(){
        cy.visit('/sit/nodes');
    }
}

export default new Node()