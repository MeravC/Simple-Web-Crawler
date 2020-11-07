let cheerio = require('cheerio');
let fs = require('fs');

const $ = cheerio.load(fs.readFileSync('simpleTable.html'));

let obj = {};
let arrObj = [];

$("tr").each((index, element) => {
    obj.x = $(element).find('td:nth-child(1)').text();
    obj.y = $(element).find('td:nth-child(2)').text();
    obj.z = $(element).find('td:nth-child(3)').text();
    obj.n = $(element).find('td:nth-child(4)').text();
    arrObj.push(obj);
});

console.log(arrObj);