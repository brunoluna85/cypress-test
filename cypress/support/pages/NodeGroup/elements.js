export const ELEMENTS = {
    myIndex: `${Cypress.config('customer')}/node_groups`,
    pageHeader: '.content > h2',

    new_nodegroup_button: '#Class_add',
    nodegroup_name: '#node_group_name',
    nodegroup_save_button: '.submit',
    nodegroup_search: 'input',
    searched_nodegroup: '.odd > :nth-child(2)',
    nodegroup_edit_button: '.io-form-action-edit',
    nodegroup_edit_save_button: "//a[normalize-space()='Edit']",
    nodegroup_delete_button: '.alert',
    nodegroup_confirm_delete: '#ok-link'

}