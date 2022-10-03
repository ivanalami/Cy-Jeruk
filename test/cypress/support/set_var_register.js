var env = require('../../cypress.env.json')
import {dateNow,dateString,dateCreateAkta,dateInvPayor} from './set_date_time'

const {domainEmail} = env

// ------- Get randomStrerator --------- //
function randomStr(len){
  var text = '';
  var charset = 'abcdefghijklmnopqrstuvwxyz'

  for(var i = 0; i < len; i++)
    text += charset.charAt(Math.floor(Math.random() * charset.length));
  
  return text;
}
// -------------------------------- //

// ---- Get TimeStamp Now ---- //
function getUniqNumber(n) {
  return new Date().getTime().toString().substring(n);
}
// -------------------------- //

//---Create email pengurus1 ---//
function tempEmailBenef(){
  return  'autobeneftest'+getUniqNumber(7)
}
//--------------------------//
function tempEmailFunder(){
  return 'autofunderftest'+getUniqNumber(7)

}

//--------------------------//

let emailBenef = tempEmailBenef()+'@'+domainEmail
let namaPengurus1 = 'pengurus '+randomStr(4)+' '+randomStr(4)
let emailPengurus1 = 'namaPengurus1@'+domainEmail
let benefName = 'BenefName  '+randomStr(4)+' '+randomStr(4)
let benefCompanyName = 'BenefCompany '+randomStr(4)+' '+randomStr(4)
let benefNameResetPass = 'BenefTest '+randomStr(4)+' '+randomStr(4)
let namaPayor1 = 'PayorTest '+randomStr(4)+' '+randomStr(4)
let noTagihan = 'INV/XII/'+getUniqNumber(5)+'/'+randomStr(3)
let noMom = getUniqNumber(5)+'/XII/'+'789'
let noKTP1 = getUniqNumber(0)+'454'
let noKTP2 = getUniqNumber(0)+'545'
let npwpCompany = getUniqNumber(0)+'343'
let noHpBenef = '084'+getUniqNumber(9)+getUniqNumber(8)
let passLogin = 'password'
let akte = 'SK/101/January/2012/'+getUniqNumber(9)
let NIB = getUniqNumber()
let npwpPengurus1 = 881+getUniqNumber(0)
let npwpPengurus2 = 812+getUniqNumber(0)
let crDateString = dateString()
let crDateAkta = dateCreateAkta()
let datePayor = dateInvPayor()
//---------- Var Funder ------------------//
let namaFunder = 'funderTest'+randomStr(4)+' '+randomStr(4)
let noPasporFunder = '97'+getUniqNumber(7)
let noKTPFunder = getUniqNumber(0)+'575'
let emailFunder = tempEmailFunder()+'@'+domainEmail
let npwpFunder = getUniqNumber(0)+'344'
let getYear = 1990
let noHpFunder = '086'+getUniqNumber(9)+getUniqNumber(8)
let createDate = dateNow()
let emailPengurus2 = 'doumbas'+'@'+domainEmail
let agunanNumber = 'INV/001/2022/Agunan/43'

var varBenef = {
  "email": emailBenef,
  "namaPengurus1": namaPengurus1,
  "emailPengurus1": emailPengurus1,
  "emailPengurus2": emailPengurus2,
  "benefName": benefName,
  "benefCompanyName": benefCompanyName,
  "benefNameResetPass": benefNameResetPass,
  "namaPayor1": namaPayor1,
  "noTagihan": noTagihan,
  "noMom": noMom,
  "noKTP1": noKTP1,
  "noKTP2": noKTP2,
  "npwpCompany": npwpCompany,
  "noHpBenef": noHpBenef,
  "password": passLogin,
  "date": createDate,
  "akta": akte,
  "NIB": NIB,
  "npwpPengurus1": npwpPengurus1,
  "npwpPengurus2": npwpPengurus2,
  "noAgunan": agunanNumber,
  "dateCrStringMonth": crDateString,
  "dateCreateAkta": crDateAkta,
  "parseNpwpCompany": '-',
  "dateInvoicePayor": datePayor
}

var varFunder={
  "email": emailFunder,
  "namaFunder": namaFunder,
  "noPasporFunder": noPasporFunder,
  "noKTPFunder": noKTPFunder,
  "npwpFunder": npwpFunder,
  "tahunLahir": getYear,
  "noHpFunder": noHpFunder,
  "password": passLogin
}

export function createVarBenef(){
  cy.writeFile('./cypress/fixtures/DataRegBenef.json', varBenef
  )
}

export function createVarFunder(){
  cy.writeFile('./cypress/fixtures/DataRegFunder.json', varFunder
  )
}

export function createVarNPWP(){
  cy.writeFile('./cypress/fixtures/DataRegFunder.json', varNpwp
  )
}