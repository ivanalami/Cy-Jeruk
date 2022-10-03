/// <reference types="cypress"/>

import {regPage} from '../../pages/mina/register_page'
import {regBenefPage1,
        regBenefPage2,
        regBenefSuccess} from '../../pages/beneficiery/benef_register_page'
import {createVarBenef} from '../../../support/set_var_register'

const regBenef1 = new regBenefPage1()
const regBenef2 = new regBenefPage2()
let dataBenef;

describe('User can register as benef', () => {
    before('Backup register-benef variable to json', ()=> {
        createVarBenef() // if want debug with same variable, comment this section.
        cy.fixture('DataRegBenef').then((json) => {
            dataBenef = json
          })        
    })
    it('Open register page', () => {
        const regBenef = new regPage()
        cy.visit('/')  
        regBenef.daftarDisini()
        regBenef.assertPenerimaPembiayaan()
        regBenef.benefBanner()
        
    })

    it('User as benef fill form register page 1', ()=> {
        regBenef1.assertRegPage1()
        regBenef1.enterFullnameBenef(dataBenef.benefName)
        regBenef1.enterMailBenef(dataBenef.email)
        regBenef1.enterPhoneBenef(dataBenef.noHpBenef)
        regBenef1.enterPassword(dataBenef.password)
        regBenef1.enterRePassword(dataBenef.password)
        regBenef1.selectKnowAlami(3)
        regBenef1.clickBtnLanjutkan1()
        regBenef2.assertRegPage2()
    })

    it('User as benef fill form register page 2',()=>{
        //regBenef2.assertRegPage2()
        regBenef2.inputAmountFund(500000000)
        regBenef2.selectTenorFunding(5)
        regBenef2.selectUseFund(5)
        regBenef2.selectSOFforRefund(1)
        regBenef2.enterEmployerCompanyName('PT.'+dataBenef.namaPayor1 )
        regBenef2.selectRelationTimePayor(4)
        regBenef2.enterCompanyNameBenef(dataBenef.benefCompanyName)
        regBenef2.selectDateStartCompany()
        regBenef2.enterDeedIncorporation(dataBenef.akta)
        regBenef2.selectProvince(6)
        regBenef2.selectKabupaten(4)
        regBenef2.selectKecamatan(9)
        regBenef2.selectKelurahan(8)
        regBenef2.postCode()
        regBenef2.npwpCompany(dataBenef.npwpCompany)         
        regBenef2.uploadNpwpImageCompany('./attachment/1.NPWPPerusahaan.pdf')
        regBenef2.enterPreviousIncome('5000000000')
        regBenef2.enterIncomeForTheYear('3000000000')
        regBenef2.uploadFinanceReport('./attachment/17.Laporan Keuangan.pdf')
        regBenef2.checkUpdateAlami()
        regBenef2.checkTnCBenef()
        regBenef2.checkPajakRules()
        regBenef2.scrollPopupPajakRules()
        regBenef2.btnLanjutkan2()
        regBenef2.changePage()
    })

    it('User complete fill form register as benef',()=>{
        const regBenef3 = new regBenefSuccess()
        regBenef3.verifyRegisterComplete()
    }) 
})