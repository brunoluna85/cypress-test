/// <reference types="cypress" />

const node_group_el = require('../../support/pages/NodeGroup/elements').ELEMENTS;
const menu_el = require('../../support/pages/Menu/elements').ELEMENTS;

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
        cy.get(node_group_el.name).type(ng_name);
        cy.get(node_group_el.save_button).click();
        cy.get(menu_el.alertNotice).should('include.text', 'Node Group was successfully created.');
        cy.get(menu_el.alertInfo).should('include.text', 'Your data will be available shortly. Please see exporters list for more details.');
    });

    it('Search a node group', () => {
        cy.get(node_group_el.search).should('be.visible').click().type(`${ng_name}{enter}`);
        cy.get(node_group_el.searched_nodegroup).contains(ng_name).should('have.text', ng_name)
    });

    it('Edit a node group', () => {
        cy.get(node_group_el.search).should('be.visible').click().type(`${ng_name}{enter}`);
        cy.get(node_group_el.searched_nodegroup).click();
        cy.get(node_group_el.edit_button).click();
        cy.get(node_group_el.name).clear().type(ng_name_edited);
        cy.get(node_group_el.edit_save_button).click();
        cy.get(node_group_el.save_button).should('be.visible').click();
        cy.get(menu_el.alertNotice).should('include.text', 'Node Group was successfully updated.');
        cy.get(menu_el.alertInfo).should('include.text', 'Your data will be available shortly. Please see exporters list for more details.');
    });

    it('Delete a node group', () => {
        cy.get(node_group_el.search).should('be.visible').click().type(`${ng_name_edited}{enter}`);
        cy.get(node_group_el.searched_nodegroup).click();
        cy.get(node_group_el.delete_button).click();
        cy.get(node_group_el.confirm_delete).click();
        cy.get(menu_el.alertNotice).should('include.text', 'Node Group was successfully deleted.');
        cy.get(menu_el.alertInfo).should('include.text', 'Your data will be available shortly. Please see exporters list for more details.');
    });

})