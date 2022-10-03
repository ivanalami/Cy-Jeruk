import {adminPage} from '../e2e/pages/mina/admin_page'
import {loginBenef,profilePIC} from '../e2e/pages/beneficiery/benef_dashboard_page'

export function loginAdmin(userAdmin,pwdAdmin){
    const admin = new adminPage()
    cy.visit('/'+'/admin')
    admin.loginAdmin().type(userAdmin)
    admin.pwdAdmin().type(pwdAdmin)
    admin.loginBtn().click()
}

export function loginAsBenef(userBenef,pwdBenef){
    const benef = new loginBenef()
    const profile = new profilePIC()
    for (let i = 0; i < 5; i++) {
        cy.on('fail', (error) => {
            if (!error.message.includes('button.btn.action.save-draft')) {    
            throw error
            }    
        })
        cy.visit('/')
        benef.inputUsername().type(userBenef)
        benef.inputPwd().type(pwdBenef)
        benef.loginBtn().click()
        profile.profilePage()
        if (profile.simpanPage1().should('not.exist')) {
            cy.log('simpan button not found, restart again')
        } else {
            break;
        }
      }
}