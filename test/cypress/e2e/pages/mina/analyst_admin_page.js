let score;
class analyst{

    openBeneficiaryMenu(){
        return cy.get(':nth-child(3) > .menu-toggle').click()
    }
    openSubmissionToAnalyst(){
        return cy.get(':nth-child(3) > .ml-menu > :nth-child(1) > .waves-effect').click()
    }
    openAppOnRisk(){
        return cy.get(':nth-child(3) > .ml-menu > :nth-child(2) > .waves-effect').click()
    }
    selectAnalystFunding(){
        return cy.get('#creditengine-tab').click()
    }
    selectAnalysResponbility(){
        return cy.get('[id="analystInCharge"]').select(5,{force:true})
    }
    calculateCreditScoring(){
            cy.iframe().find('[id="mybutton-calculate"]').click()
            cy.iframe().find('[id="mybutton-confirm-data"]').click()   
            cy.iframe().find('[id="last_score_desc"]').invoke('text').then((text) =>{
            expect(text).equal('1.14')  
            })
       // --- for debug please comment top and enable below this section ---
        //     cy.iframe().find('[id="mybutton-back-to-form-Recalculate"]').click()
        //     cy.iframe().find('[id="mybutton-calculate-from-recalculate"]').click()
        //     cy.iframe().find('[id="mybutton-confirm-data"]').click()   
        //     cy.iframe().find('[id="last_score_desc"]').invoke('text').then((text) =>{
        //     expect(text).equal('1.14')  
        // })
    
        // ------------------------------------------------------------------
        return this
    }

    addProfileScore(value){
        return cy.get('[name="company.riskProfilingScore"]').type(value +'{enter}')
    }
    noteForBenef(value){
        return cy.get('[name="company.beneficiaryNote"]').type(value)
    }
    akadQardAndWakalah(){
        return cy.get('[id="akadSelection1"]').click({force: true})
    }
    tenorDays(value){
        return cy.get('[name="creditEngine.tenorHari"]').type(value)
    }
    bufferDays(value){
        return cy.get('[name="creditEngine.bufferHari"]').type(value)
    }
    percentageUjroh(value){
        return cy.get('[name="alamiMargin"]').type(value)
    }
    amountFundingApprove(value){
        return cy.get('[name="financingSizeApprove"]').type(value)
    }
    reverseDemand(value){
        return cy.get('[name="applicationMup.giroMundur"]').type(value)
    }
    scorePefindoCompany(value){
        return cy.get('[name="applicationMup.companyCreditScore"]').type(value)
    }
    ratePefindoCompany(value){
        return cy.get('[name="applicationMup.companyCreditRating"]').type(value)
    }
    collectRatein2Years(value){
        return cy.get('[name="applicationMup.companyCollectibilityLast2year"]').type(value)
    }
    uploadPefindoReportCompany(value){
        return cy.get('[id="checkingPefindoCompany"]').attachFile(value)
    }
    scorePefindoAdmin1(value){
        return cy.get('[name="applicationMup.biroKredit[0].managementCreditScore"]').type(value)
    }
    ratePefindoAdmin1(value){
        return cy.get('[name="applicationMup.biroKredit[0].managementCreditRating"]').type(value)
    }
    statusCollectIn2Years(value){
        return cy.get('[name="applicationMup.biroKredit[0].managementCollectibilityLast2year"]').type(value)
    }
    uploadReportPefindoAdmin1(value){
        return cy.get('[id="checkingPefindoIndividual"]').eq(0).attachFile(value)
    }
    scorePefindoAdmin2(value){
        return cy.get('[name="applicationMup.biroKredit[1].managementCreditScore"]').type(value)
    }
    ratePefindoAdmin2(value){
        return cy.get('[name="applicationMup.biroKredit[1].managementCreditRating"]').type(value)
    }
    statusCollectIn2YearsAdmin2(value){
        return cy.get('[name="applicationMup.biroKredit[1].managementCollectibilityLast2year"]').type(value)
    }
    uploadReportPefindoAdmin2(value){
        return cy.get('[id="checkingPefindoIndividual"]').eq(1).attachFile(value)
    }
    uploadMutasi(value){
        return cy.get('[onchange="importExcelMutasi(this)"]').attachFile(value)
    }
    commentForAnalyssPayor(value){
        return cy.get('[name="applicationMup.analisaPayor"]').type(value)
    }
    dateTradeChecking(){
        cy.get('#checkingTradeDate').click()
        cy.get('[class="dtp"]').invoke('attr','id')
          .then( elm => {
            cy.get('#'+elm+' .dtp-btn-ok').click()
        })
        return this
    }
    partydoingTradeChecking(value){
        return  cy.get('[name="applicationMup.checkingBy"]').type(value)
    }
    contactParty(value){
        return cy.get('[name="applicationMup.checkingContacted"]').type(value)
    }
    checkingMethod(value){
        return cy.get('[name="applicationMup.checkingMethod"]').type(value)
    }
    phoneParty(value){
        return cy.get('[name="applicationMup.checkingNoEmail"]').type(value)
    }
    resultTenor(value){
        return cy.get('[name="applicationMup.checkingResultTenor"]').type(value)
    }
    resultEstimatedPayment(value){
        return cy.get('[name="applicationMup.checkingResultEstimate"]').type(value)
    }
    resultValidationDoc(value){
        return cy.get('[name="applicationMup.checkingResultValidity"]').type(value)
    }
    criticalIssue(value){
        return cy.get('[name="applicationMup.isuCritical"]').type(value)
    }
    selectAgunan(value,value2){
        cy.get('[name="mupAgunanSecurity.id"]').select(value,{force:true})
        cy.get('[name="applicationMup.ketentuan1[2].teks"]').type(value2)
    }
    noteInCovid19(value){
        return cy.get('[name="covid19AnalysisDescription"]').type(value)
    }
    uploadMUP(value){
        return cy.get('[id="mup"]').attachFile(value)
    }
    uploadDocPefindo(value){
        return cy.get('[id="checkingPefindo"]').attachFile(value)
    }
    uploadOtherAnalyst(value){
        return cy.get('[id="otherAnalysis"]').attachFile(value)
    }  
    checkAllData(){
        return cy.get('[name="analystFullCheck"]').check({force:true})
    }  
    clickSubmit(){
        return cy.get('[id="acceptcreditengine"]').click()
    }
    dataAnalystEmptyCheck(){
        return cy.get('#applicationTable > tbody > .odd > .dataTables_empty', {timeout:10000}).should('be.visible')
    }

}

function pickDateInvoice(){
    cy.get('[name="creditEngine.invoiceDateReceived"]').click()
    cy.get('[class="dtp"]').invoke('attr','id')
          .then( elm => {
            var today = new Date();
            let dd = String(today.getDate()-2).padStart(2, '0');
            cy.get('#'+elm+' [data-date='+dd+']').click()
            cy.get('#'+elm+' .dtp-btn-ok').click()
        })
}

module.exports = {analyst,pickDateInvoice}