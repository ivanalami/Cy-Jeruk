class sales {
    clickDaftarNewApplication(){
        return cy.get(':nth-child(3) > .ml-menu > :nth-child(2) > .waves-effect').click()
        
    }
    searchData(value){
        cy.get('.dataTable-search > label').click()
        cy.get('#searchModal > .modal-dialog > .modal-content > .modal-header > .modal-title').should('have.text','Pencarian')
        cy.get(':nth-child(4) > .col-md-12 > :nth-child(2) > .form-control').type(value,{force:true})
        cy.wait(1500)
        cy.get('#searchModal > .modal-dialog > .modal-content > .modal-footer > .btn').click()
        return this
    }
    clickDetailPembiayaan(){
        cy.wait(1000)
        return cy.get('[data-original-title="Detail Pembiayaan"][data-toggle="tooltip"]').click()
    }
    selectTab(){
        return cy.get('#pic-profile-tab').should('be.visible')
    }
    selectFinancingTab(){
        return cy.get('#financing-tab').click()
    }
    checkPaymentMethod(){
        return cy.get('[data-error="error.beneficiary.financing.info.paymentMethodCheck"] .custom-control-label').click()    
    }
    checkFinancingType(){
        return cy.get('[data-error="error.beneficiary.financing.info.financingType.empty;error.beneficiary.financing.info.financingTypeCheck"] .custom-control-label').click()
    }
    checkInvoiceNumber(){
        return cy.get('[data-error="error.beneficiary.financing.collateral[0].collateralInvoice[0].invoiceNo.empty;error.beneficiary.financing.collateral[0].collateralInvoice[0].invoiceNoCheck"] .custom-control-label').click()
    }
    checkInvoiceDate(){
        return cy.get('[data-error="error.beneficiary.financing.collateral[0].collateralInvoice[0].invoiceDate.empty;error.beneficiary.financing.collateral[0].collateralInvoice[0].invoiceDateCheck"] .custom-control-label').click()
    }
    selectPICRelationManager(){
        return cy.get('[name="relationshipManager.id"]').select(1,{force:true})
    }
    selectPICBusinessSup(){
        return cy.get('[name="businessSupport.id"]').select(5,{force: true})
    }
    saveChanges(){
        cy.get('[data-tab-alt="application"]').click()
        cy.get('.alert > .mb-0').should('be.visible')
        return this
    }
    clickInSalesCheck(){
        return cy.get('.ml-menu > :nth-child(3) > .waves-effect').click()
    }
    clickDocumentTab(){
        return cy.get('#financialreport-tab').click()
    }
    selectFinanceReport1(value){
        return cy.get('[id="financialStatementType3"]').select(value,{force:true})
    }
    selectFinanceReport2(value){
        return cy.get('[id="financialStatementType2"]').select(value,{force:true})
    }
    selectFinanceReport3(value){
        return cy.get('[id="financialStatementType1"]').select(value,{force:true})
    }
    setIncome1(value){
        return cy.get('[name="capacity3.sales"]').type(value,{force:true})
    }
    setGrossProfit1(value){
        return cy.get('[name="capacity3.grossProfit"]').type(value,{force:true})
    }
    setGrossProfit2(value){
        return cy.get('[name="capacity2.grossProfit"]').type(value,{force:true})
    }
    setGrossProfit3(value){
        return cy.get('[name="capacity1.grossProfit"]').type(value,{force:true})
    }
    setOperationProfit1(value){
        return cy.get('[name="capacity3.operatingProfit"]').type(value,{force:true})
    }
    setOperationProfit2(value){
        return cy.get('[name="capacity2.operatingProfit"]').type(value,{force:true})
    }
    setOperationProfit3(value){
        return cy.get('[name="capacity1.operatingProfit"]').type(value,{force:true})
    }
    setTradeReceivable1(value){
        return cy.get('[name="capacity3.tradeReceivable"]').type(value,{force:true})
    }
    setTradeReceivable2(value){
        return cy.get('[name="capacity2.tradeReceivable"]').type(value,{force:true})
    }
    setTradeReceivable3(value){
        return cy.get('[name="capacity1.tradeReceivable"]').type(value,{force:true})
    }
    setNetProfit1(value){
        return cy.get('[name="capacity3.netProfit"]').type(value,{force:true})
    }
    setNetProfit2(value){
        return cy.get('[name="capacity2.netProfit"]').type(value,{force:true})
    }
    setNetProfit3(value){
        return cy.get('[name="capacity1.netProfit"]').type(value,{force:true})
    }
    setTotalAsset1(value){
        return cy.get('[name="capacity3.totalAsset"]').type(value,{force:true})
    }
    setTotalAsset2(value){
        return cy.get('[name="capacity2.totalAsset"]').type(value,{force:true})
    }
    setTotalAsset3(value){
        return cy.get('[name="capacity1.totalAsset"]').type(value,{force:true})
    }
    setTotalDebt1(value){
        return cy.get('[name="capacity3.totalDebt"]').type(value,{force:true})
    }
    setTotalDebt2(value){
        return cy.get('[name="capacity2.totalDebt"]').type(value,{force:true})
    }
    setTotalDebt3(value){
        return cy.get('[name="capacity1.totalDebt"]').type(value,{force:true})
    }
    setEquity1(value){
        return cy.get('[name="capacity3.equity"]').type(value,{force:true})
    }
    setEquity2(value){
        return cy.get('[name="capacity2.equity"]').type(value,{force:true})
    }
    setEquity3(value){
        return cy.get('[name="capacity1.equity"]').type(value,{force:true})
    }
    setCurrentAsset1(value){
        return cy.get('[name="capacity3.currentAsset"]').type(value,{force:true})
    }
    setCurrentAsset2(value){
        return cy.get('[name="capacity2.currentAsset"]').type(value,{force:true})
    }
    setCurrentAsset3(value){
        return cy.get('[name="capacity1.currentAsset"]').type(value,{force:true})
    }
    setCurrentDebt1(value){
        return cy.get('[name="capacity3.currentDebt"]').type(value,{force:true})
    }
    setCurrentDebt2(value){
        return cy.get('[name="capacity2.currentDebt"]').type(value,{force:true})
    }
    setCurrentDebt3(value){
        return cy.get('[name="capacity1.currentDebt"]').type(value,{force:true})
    }
    saveFinanceReport(){
        cy.get('.modal-footer > [style=""]').click()
        cy.get('.alert > .mb-0').should('be.visible')
        return this
    }
    selectActivityBusinessTab(){
        return cy.get('#businessactivity-tab').click()
    }
    setSurveryDate(){
        cy.get('#surveyDate').invoke('attr','data-dtp')
          .then( elm => {
            cy.get('#surveyDate').click()
            cy.get('#'+elm+' .dtp-btn-ok').click()
        })
        return this
    }
    setLocSurvey(value){
        return cy.get('[name="applicationMup.surveyLocation"]').type(value)
    }
    setManSurvey(value){
        return cy.get('[name="applicationMup.surveyBy"]').type(value)
    }
    setManPICBenef(value){
        return cy.get('[name="applicationMup.surveyPic"]').type(value)
    }
    setPhonePIC(value){
        return cy.get('[name="applicationMup.surveyPicContactNumber"]').type(value)
    }
    setResultSurvey(value){
        return cy.get('[name="applicationMup.surveyResult"]').type(value)
    }
    uploadDocSurvey(value){
        return cy.get('[id="documentation"]').attachFile(value)
    }
    proyekName1(value){
        return cy.get('[name="applicationMup.operation[0].namaProyek"]').type(value)
    }
    amountProject1(value){
        return cy.get('[name="applicationMup.operation[0].nilaiProyek"]').type(value)
    }
    statusProject1(value){
        return cy.get('[name="applicationMup.operation[0].status"]').type(value)
    }
    proyekName2(value){
        return cy.get('[name="applicationMup.operation[1].namaProyek"]').type(value)
    }
    amountProject2(value){
        return cy.get('[name="applicationMup.operation[1].nilaiProyek"]').type(value)
    }
    statusProject2(value){
        return cy.get('[name="applicationMup.operation[1].status"]').type(value)
    }
    clickRACTab(){
        return cy.get('#racchecklist-tab').click()
    }
    setRACValue(value){
        cy.get('[name="rule_0"]').check({force: true})
        cy.get('#note_0').type(value)
        return this
    }
    setRACValue1(value){
        cy.get('[name="rule_1"]').check({force: true})
        cy.get('#note_1').type(value)
        return this
    }
    setRACValue2(value){
        cy.get('#note_2').type(value)
        return this
    }
    setRACValue3(value){
        cy.get('[name="rule_3"]').check({force: true})
        cy.get('#note_3').type(value)
        return this
    }
    setRACValue4(value){
        cy.get('[name="rule_4"]').check({force: true})
        cy.get('#note_4').type(value)
        return this
    }
    setRACValue5(value){
        cy.get('#note_5').type(value)
        return this
    }
    setRACValue6(value){
        cy.get('#note_6').type(value)
        return this
    }
    setRACValue7(value){
        cy.get('#note_7').type(value)
        return this
    }
    setRACValue8(value){
        cy.get('#note_8').type(value)
        return this
    }
    setRACValue9(value){
        cy.get('#note_9').type(value)
        return this
    }
    setRACValue10(value){
        cy.get('#note_10').type(value)
        return this
    }
    saveRAC(){
        return cy.get('#buttonSaveRac').click()
    }
    checkMethodPaymentIsGood(){
        return cy.get('[for="financingTypeCheckbox"]').click({force: true})
    }
    checkDetailInformation(){
        return cy.get('[for="detailInformationCheckbox"]').click({force: true})
    }
    clickReceiveBtn(){
        return cy.get('#btnAcceptBusinessActivity').click()
    }
    inputCommentarSubmit(value){
        cy.get('#commentSubModal > .modal-dialog > .modal-content > .modal-header > .modal-title > b')
        cy.wait(1000)
        cy.get('[name="comment"][placeholder="Komentar"]').eq(0).type(value)
        cy.get('#commentSubModal .btn').click()
        return this
    }
    checkDataEmpty(){
        return cy.get('#applicationTable > tbody > .odd > .dataTables_empty')
    } 
    validateStatusBenef(value){
        return cy.get('.odd > :nth-child(14)').should('have.text',value)
    }
    checkPaymentMethodMUP(){
        return cy.get('[id="financingTypeCheckbox"]').check({force:true})
    }
    checkDetailInformationMUP(){
        return cy.get('[id="detailInformationCheckbox"]').check({force:true})
    }
    sendMUP(){
        return cy.get('[class="btn btn-primary btn-alm-blue-5-14 success"]').click()
    }

}

module.exports = {sales}