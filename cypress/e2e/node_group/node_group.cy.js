/// <reference types="cypress" />

const node_group_el = require('../../support/pages/NodeGroup/elements').ELEMENTS;

describe('Node Group', () => {

    const ng_name = 'TEST NG';
    const ng_name_edited = 'TEST NG EDITED';

    beforeEach(() => {
        cy.login_as();
        cy.select_customer();
        cy.visit(node_group_el.myIndex);

    })

    it('Check node group header', () => {
        cy.get(node_group_el.pageHeader)
            .should('be.visible')
            .and('have.text', 'Node Groups for SIT');
    });

    it('Create node group', () => {
        cy.get(node_group_el.new_nodegroup_button).click();
        cy.get(node_group_el.nodegroup_name).type(ng_name);
        cy.get(node_group_el.nodegroup_save_button).click();
        cy.contains('Node Group was successfully created.');
        cy.contains('Your data will be available shortly. Please see exporters list for more details.');
    });

    it('Search a node group', () => {
        cy.get(node_group_el.nodegroup_search).should('be.visible').click().type(`${ng_name}{enter}`);
        cy.get(node_group_el.searched_nodegroup).contains(ng_name)
    });

    it.skip('Edit a node group', () => {
        cy.get(node_group_el.nodegroup_search).should('be.visible').type(`${ng_name}{enter}`);
        cy.get(node_group_el.searched_nodegroup).click();
        cy.get(node_group_el.nodegroup_edit_button).click();
        cy.get(node_group_el.nodegroup_name).clear().type(ng_name_edited);
        cy.xpath(node_group_el.nodegroup_edit_save_button).click();
        cy.get(node_group_el.nodegroup_save_button).should('be.visible').click();
        cy.contains('Node Group was successfully updated.');
        cy.contains('Your data will be available shortly. Please see exporters list for more details.');
    });

    it('Delete a node group', () => {
        cy.get(node_group_el.nodegroup_search).should('be.visible').click().type(`${ng_name}{enter}`);
        cy.get(node_group_el.searched_nodegroup).click();
        cy.get(node_group_el.nodegroup_delete_button).click();
        cy.get(node_group_el.nodegroup_confirm_delete).click();
        cy.contains('Node Group was successfully deleted.');
        cy.contains('Your data will be available shortly. Please see exporters list for more details.');
    });

})