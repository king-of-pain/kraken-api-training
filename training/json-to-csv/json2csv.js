const { parse } = require('json2csv');

const fields = ['field1', 'field2', 'field3'];
const opts = { fields };


const myData = 'tptp';
//console.log(myData);


try {
  const csv = parse(myData, opts);
  console.log(csv);
} catch (err) {
  console.error(err);
}