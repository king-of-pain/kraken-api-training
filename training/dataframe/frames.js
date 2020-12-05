
const DataFrame = require('dataframe-js').DataFrame;

const df = new DataFrame([
    [1, 6, 9, 10, 12], // <------- A row
    [1, 2],
    [6, 6, 9, 8, 9, 12],
], ['c1', 'c2', 'c3', 'c4', 'c5', 'c6']);

df.toCSV(true, 'myfile.csv');


/*
* https://gmousse.gitbooks.io/dataframe-js/content/doc/BASIC_USAGE.html#create-a-dataframe
*/

