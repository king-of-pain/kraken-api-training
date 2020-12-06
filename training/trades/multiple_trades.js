const DataFrame = require('dataframe-js').DataFrame;

const KrakenClient = require('kraken-api');

const kraken = new KrakenClient();

const columns = ['price', 'volume', 'time', 'buySell', 'marketLimit', 'miscellaneous'];

let lastArray = [];

let finalArray=[];

run();

async function run(){
   
    const pairNameValue = 'XXBTZEUR';

    const utcNanoSeconds = 1383839436659600000;

    const d2 = new Date(utcNanoSeconds*1e-6);

    let params = { pair: pairNameValue, since: utcNanoSeconds };

    getAllTradesUntilServerTime(params);

}

async function getAllTradesUntilServerTime(params){
    
    const time = await getServerTime();

    let n=0;

    let response;
    
    while (params.since < time && n < 2000) {
        
        lastArray.push([params.since]);

        response = await getTrades(params);

        params.since = response;

        console.log(n);

        await new Promise(r => setTimeout(r, 2000));

        n++;
      }

    const df = new DataFrame(finalArray, columns);
    
    const df2 = new DataFrame(lastArray, ["since"]);
    df2.toCSV(true, `../data/lasts.csv`);

    const first_date = lastArray[0];
    
    const last_date = lastArray[lastArray.length-1];
    
    df.toCSV(true, `../data/${params.pair}_${first_date}_${last_date}.csv`);

}

async function getTrades(params){

    const {error, result} = await kraken.api('Trades', params)

    const values = result[opt.pair];

    const last = result.last;
   
    finalArray = finalArray.concat(values);
     
    const df = new DataFrame(values, columns);
    
    df.toCSV(true, `../data/${opt.pair}_${opt.since}.csv`);

    return last;
}


async function getServerTime(){

    const time = await kraken.api('Time'); 

    return time.result.unixtime*1e9;
}


    


