let setMonth,mm;
var dd,yyyy;

function callDateNow(){
var today = new Date();
    dd = String(today.getDate()).padStart(2, '0');
    mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    yyyy = today.getFullYear();
    return this
}

function month(){    
    switch (mm){
        case '01':
            setMonth = 'January';
            break;
        case '02':
            setMonth = 'February';
            break;
        case '03':
            setMonth = 'Maret';
            break;
        case '04':
            setMonth = 'April';
            break;
        case '05':
            setMonth = 'Mei';
            break;   
        case '06':
            setMonth = 'Juni';
            break;
        case '07':
            setMonth = 'Juli';
            break;
        case '08':
            setMonth = 'Agustus';
            break;
        case '09':
            setMonth = 'September';
            break;
        case '10':
            setMonth = 'Oktober';
            break;
        case '11':
            setMonth = 'November';
            break;
        case '12':
            setMonth = 'Desember';
            break;      
    }
    return setMonth;
}

function dateNow(){ 
    callDateNow()
    const todayDate = dd + '/' + mm + '/' + yyyy;

    return todayDate;
}

function dateString() {
    callDateNow()
    const todayDate = dd + ' ' + month() + ' ' + yyyy;

    return todayDate;
}

function dateCreateAkta(){
    callDateNow()
    const year = yyyy-9

    const todayDate = dd + ' ' + month() + ' ' + year;

    return todayDate;
}

function dateInvPayor(){
    callDateNow()
    let varMonth = parseInt(mm)
    varMonth = varMonth+1
    let month1,finalMonth

    if (varMonth > 12){
        month1 = varMonth -12
        finalMonth = '0'+month1
    }
    else if( varMonth.length == 1) {
        finalMonth = '0'+month1
    }
    else {
        finalMonth = varMonth
    }

    mm = finalMonth.toString()

    const todayDate = dd + ' ' + month() + ' ' + yyyy;

    return todayDate;

}

function dayMinus2(){
    var today = new Date();
    dd = String(today.getDate()-2).padStart(2, '0');
    return dd
}

module.exports ={dateNow,dateString,dateCreateAkta,dateInvPayor,dayMinus2}


