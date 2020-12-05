//const fs = require('fs');
const DataFrame = require('dataframe-js').DataFrame;

const KrakenClient = require('kraken-api');

const kraken = new KrakenClient();

const pair= { pair : 'XXBTZEUR' ,
    since: '1559350785297011117'};

const since = '';

let resultPromises = [];
let lastArray = [];


const columns = ['price', 'volume', 'time', 'buySell', 'marketLimit', 'miscellaneous'];

/*
Trades (Time and Sales)
The Trades endpoint takes an optional parameter named since, which specifies the starting date/time of the data
*/
/*
(async () => {
    // Get Trades infos for pairParam
    const {result} = await kraken.api('Trades', pair )
    const {XXBTZEUR , last} = result;

    lastArray.push(last);

    const resultJsonContent = JSON.stringify(result);
    const XXBTZEURJsonContent = JSON.stringify(XXBTZEUR);
    

    console.log(to_date(last));
    console.log(XXBTZEUR.length);
    write(`id: ${last} \r\n ${XXBTZEUR}"`);
})();
*/
getData('XXBTZEUR');

async function getData(pairNameValue, sinceDateValue){

    let resultPromises = [];
    let lastArray = [0];

    let pair = { pair: pairNameValue};
    
    const {error, result} = await kraken.api('Trades', pair)
    
     console.log(error);

    console.log(Object.entries(error));

    const last = result.last;
   
    const values = result[pairNameValue];

    console.log (values);

    
    const resultJsonContent = JSON.stringify(result);
    const XXBTZEURJsonContent = JSON.stringify(values); 


    const df = new DataFrame(values, columns);
    df.toCSV(true, `${pairNameValue}.csv`);

    console.log(to_date(last));
}



/*
* Helpers
*/

function to_date(nanoSeconds){
    return new Date(nanoSeconds*1e-6);
}
/*
function write(content){
    fs.appendFile('Trades.txt', content, function (err) {
    if (err) throw err;
    console.log('writing to file done!');
    });
}
*/


