class adminPage{
    loginAdmin(){
        return cy.get('[data-validate="Diperlukan email yang valid: ex@abc.xyz"]')
    }
    pwdAdmin(){
        return cy.get('[data-validate="Sandi diperlukan"]')
    }
    loginBtn(){
        return cy.get('.login100-form-btn')
    }   
}

class draftAppBenef{
    menuPenerimaPembiayaan(){
        return cy.get(':nth-child(3) > .menu-toggle > span').click()
    }
    menuDraftAplikasi(){
        return cy.get('a[href*="/sales/financing-draft"]').click()
    }
    search(){
        cy.get('.dataTable-search > label').click()
        cy.wait(1000)
        return this
    }
    inputCompanyName(value){
        return cy.get(':nth-child(4) > .col-md-12 > :nth-child(2) > .form-control').type(value)
    }
    btnSearch(){
        return cy.get('#searchModal > .modal-dialog > .modal-content > .modal-footer > .btn > span').should('have.text','Pencarian').click()
    }
    valueFundingType(){
        return cy.get('tr td:nth-child(1)')
    }
    valueCompanyName(){
        return cy.get('tr td:nth-child(2)')
    }
    valueInitial(){
        return cy.get('tr td:nth-child(3)')
    }
    valueDateEstablish(){
        return cy.get('tr td:nth-child(4)')
    }
    valueIncome(){
        return cy.get('tr td:nth-child(5)')
    }
    valueFunding(){
        return cy.get('tr td:nth-child(6)')
    }
    valuePayor(){
        return cy.get('tr td:nth-child(7)')
    }
    valueRelationManager(){
        return cy.get('tr td:nth-child(8)')
    }
    valueProvinsi(){
        return cy.get('tr td:nth-child(9)')
    }
    valueDateCreated(){
        return cy.get('tr td:nth-child(10)')
    }
    valueRACStatus(){
        return cy.get('tr td:nth-child(11)')
    }    
}

module.exports = {adminPage,draftAppBenef}