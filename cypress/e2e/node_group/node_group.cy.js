/// <reference types="cypress" />

const node_group_el = require('../../support/pages/NodeGroup/elements').ELEMENTS;
const menu_el = require('../../support/pages/Menu/elements').ELEMENTS;

describe('Node Group', () => {

    let nodegroup_data;

    beforeEach(function () {
        cy.login_as();
        cy.select_customer();
        cy.visit(node_group_el.myIndex);
        
        cy.fixture('nodegroup').then(function(nodegroup_fixture) {
            // "this" is still the test context object
            nodegroup_data = nodegroup_fixture;
        })
        
        // cy.make_fixture('nodegroup', nodegroup_data);
    })

    it('Check node group header', () => {
        cy.get(node_group_el.pageHeader)
            .should('be.visible')
            .and('have.text', 'Node Groups for SIT');
    });

    it('Create node group', () => {
        cy.get(node_group_el.new_nodegroup_button).click();
        cy.get(node_group_el.name).type(nodegroup_data.name);
        cy.get(node_group_el.save_button).click();
        cy.get(menu_el.alertNotice).should('include.text', 'Node Group was successfully created.');
        cy.get(menu_el.alertInfo).should('include.text', 'Your data will be available shortly. Please see exporters list for more details.');
    });

    it('Create node group with existing name', function() {
        cy.get(node_group_el.new_nodegroup_button).click();
        cy.get(node_group_el.name).type(nodegroup_data.name);
        cy.get(node_group_el.save_button).click();
        cy.get(node_group_el.name_taken_message).should('include.text', 'This name is already taken.');
    });

    it('Search a node group', () => {
        cy.get(node_group_el.search).should('be.visible').click().type(`${nodegroup_data.name}{enter}`);
        cy.get(node_group_el.searched_nodegroup).contains(nodegroup_data.name).should('have.text', nodegroup_data.name)
    });

    it('Edit a node group', () => {
        cy.get(node_group_el.search).should('be.visible').click().type(`${nodegroup_data.name}{enter}`);
        cy.get(node_group_el.searched_nodegroup).click();
        cy.get(node_group_el.edit_button).click();
        cy.get(node_group_el.name).clear().type(nodegroup_data.name_edited);
        cy.get(node_group_el.edit_save_button).click();
        cy.get(node_group_el.save_button).should('be.visible').click();
        cy.get(menu_el.alertNotice).should('include.text', 'Node Group was successfully updated.');
        cy.get(menu_el.alertInfo).should('include.text', 'Your data will be available shortly. Please see exporters list for more details.');
    });

    it('Delete a node group', () => {
        cy.get(node_group_el.search).should('be.visible').click().type(`${nodegroup_data.name_edited}{enter}`);
        cy.get(node_group_el.searched_nodegroup).click();
        cy.get(node_group_el.delete_button).click();
        cy.get(node_group_el.confirm_delete).click();
        cy.get(menu_el.alertNotice).should('include.text', 'Node Group was successfully deleted.');
        cy.get(menu_el.alertInfo).should('include.text', 'Your data will be available shortly. Please see exporters list for more details.');
    });

})