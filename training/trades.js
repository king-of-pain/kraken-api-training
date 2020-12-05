const fs = require('fs');

const KrakenClient = require('kraken-api');

const kraken = new KrakenClient();

const pairParam = { pair : 'XXBTZEUR' };

const sinceParam = '';

/*
Trades (Time and Sales)
*/

(async () => {
    // Get Trades infos for pairParam
    const {result} = await kraken.api('Trades', pairParam )
    const {XXBTZEUR , last} = result;


    const resultJsonContent = JSON.stringify(result);
    const XXBTZEURJsonContent = JSON.stringify(XXBTZEUR);
  
    write(""+XXBTZEUR);
})();

function write(content){
    fs.appendFile('Trades.txt', content, function (err) {
    if (err) throw err;
    console.log('writing to file done!');
    });
}



