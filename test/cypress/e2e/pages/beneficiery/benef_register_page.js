class regBenefPage1{
    assertRegPage1(){
        return cy.get('h5').should('have.text','Syariah penuh. Impact nyata.')
    }
    enterFullnameBenef(value){
        return cy.get('#registerNamaBenef').type(value)
    }
    enterMailBenef(value){
        return cy.get('#registerEmailBenef').type(value)
    }
    enterPhoneBenef(value){
        return cy.get('#BenefPhone').type(value)
    }
    enterPassword(value){
        return cy.get('#showPassword').type(value)
    }
    enterRePassword(value){
        return cy.get('#showPassword2').type(value)
    }
    selectKnowAlami(value){
        return cy.get('#registerReferralId').select(value)
    }
    clickBtnLanjutkan1(){
        return cy.get('#daftarAlami').click()
    }

}

class regBenefPage2{
    assertRegPage2(){
        return cy.get('#registerBenefForm > :nth-child(2) > label')
          .should('have.text','Nilai Pembiayaan yang Diajukan')
    }
    inputAmountFund(value){
        return cy.get(':nth-child(2) > .input-group > .form-control').type(value)
    }
    selectTypeFinancing(){
        return cy.get('[name="financingTypeId"]')
    }
    selectTenorFunding(value){
        return cy.get('[name="financingTenorId"]').select(value,{force:true})
        
    }
    selectUseFund(value){
        return cy.get('[name="useOfProceedsId"]').select(value,{force:true})

    }
    selectSOFforRefund(value){
        return cy.get('[name="sourceOfRepayment"]').select(value,{force:true})
    }
    enterEmployerCompanyName(value){
        return cy.get('[name="financingPayor"]').type(value,{force:true})
    }
    selectRelationTimePayor(value){
        return cy.get('[name="payorRelationship"]').select(value,{force:true})
    }
    enterCompanyNameBenef(value){
        return cy.get('[name="companyName"]').type(value,{force:true})
    }
    selectDateStartCompany(){
        cy.get('[name="companyEstablishmentDate"]').click()
        cy.get('.dtp-select-year-before > .material-icons').click().click().click().click().click().click().click().click()
        cy.get('.dtp-btn-ok').click()
        return this
    }
    enterDeedIncorporation(value){
        return cy.get('[name="companyEstablishmentNumber"]').type(value,{force:true})
    }
    selectProvince(value){
        return cy.get('[name="companyProvince"]').select(value,{force:true})
        
    }  
    selectKabupaten(value){
        return cy.get('[name="companyCity"]').select(value,{force:true})
    }
    selectKecamatan(value){
        return cy.get('[name="companySubDistrict"]').select(value,{force:true})
    }
    selectKelurahan(value){
        return cy.get('[name="companyRegency"]').select(value,{force:true})
    }
    postCode(){
        return cy.get('#companyPostalCode').should('be.visible')
    }
    npwpCompany(value){
        return cy.get('[name="companyNpwp"]').type(value,{force:true})
    }
    uploadNpwpImageCompany(value){
        return cy.get('#companyNpwpFile').attachFile(value,{force:true})
    }
    enterPreviousIncome(value){
        return cy.get('[name="companyIncomeAmount1"]').type(value,{force:true})

    }
    enterIncomeForTheYear(value){
        return cy.get('[name="companyIncomeAmount2"]').type(value,{force:true})
    }
    uploadFinanceReport(value){
        return cy.get('#financialReport').attachFile(value,{force:true})
    }
    checkUpdateAlami(){
        return cy.get('[name="langganan"]').check({force:true})
    }
    checkTnCBenef(){
        return cy.get('[name="setujuKebijakan"]').check({force:true})
    }
    checkPajakRules(){
        return cy.get('#setujuTaxDisclaimerBenefBenef').check({force:true})
    }
    scrollPopupPajakRules(){
        cy.scrollTo(0,100)
        cy.get('#taxDisclaimerBenefModalBody').scrollTo('bottom')
        cy.wait(1000)
        cy.get('#taxDisclaimerBenefAcceptButton').click()
        return this
    }
    btnLanjutkan2(){
        return cy.get('#submitRegister2').should('have.text','Lanjutkan ').click()
    }
    changePage(){
        return cy.get('.main > img').should('be.visible')
    }
}
class regBenefSuccess{
    verifyRegisterComplete(){
        //cy.get('.one > h3').should('have.text','Terima&nbsp;Kasih!')
        cy.get('.one > :nth-child(2)').should('have.text','Kamu sudah berhasil mendaftar sebagai Penerima Dana. Silahkan klik link aktivasi yang dikirimkan ke email Kamu.')
        cy.get('#sendEmailActivation').should('have.text','Kirim Ulang Aktivasi Email')
        return this
    }
}

module.exports = {regBenefPage1,regBenefPage2,regBenefSuccess}