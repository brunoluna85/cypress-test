const el = require('./elements').ELEMENTS;

class Node {
    access(){
        cy.visit('http://localhost:3000/sit/nodes');
    }
}

export default new Node()