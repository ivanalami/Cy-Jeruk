class regPage{
    daftarDisini(){
        return cy.get('.text-link').click()
    }
    assertPemberiPembiayaan(){
        return cy.get('.pr-lg-2 > a > .box > p').contains('Gabung sebagaipemberi pembiayaan')
    }
    funderBanner(){
        return cy.get('.pr-lg-2 > a > .box > .heading-5-homepage').click()
    }
    assertPenerimaPembiayaan(){
        return cy.get(':nth-child(2) > a > .box > p').contains('Gabung sebagaipenerima Pembiayaan')
    }
    benefBanner(){
        return cy.get(':nth-child(2) > a > .box > img').click()
    }
}

module.exports = {regPage}