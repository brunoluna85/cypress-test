export const ELEMENTS = {
    myIndex: `${Cypress.config('customer')}/node_groups`,
    pageHeader: '.content > h2',

    new_nodegroup_button: '#Class_add',
    name: '#node_group_name',
    save_button: '.submit',
    search: 'input',
    searched_nodegroup: '.odd > :nth-child(2)',
    edit_button: '.io-form-action-edit',
    edit_save_button: '*[class^="submit io-form-button io-form-action-save io-form-action-save-existing ui primary button"]',
    delete_button: '.alert',
    confirm_delete: '#ok-link',
    name_taken_message: '.required > .control > div.error'

}