var utcSeconds1 = 1559347203.7998;
var utcSeconds2 = 1559347203.8086;


var utcSeconds3 = 1383839436659.6
var utc = 1464119200958.1

const first_record_date = 1559347237.1023;
const last_record_date = 1559353342.0714;

const requestParams = {
    pair: '',
    since: ''
}

const d1 = new Date(first_record_date*1000);
const d2 = new Date(last_record_date*1000);

const utcd = new Date(utc);

//console.log("start_date: ",d1);
//console.log("last_date: ", d2);

console.log(utcd);