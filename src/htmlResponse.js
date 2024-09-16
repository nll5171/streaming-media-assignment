const fs = require('fs'); // pull in the file system module

const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const index2 = fs.readFileSync(`${__dirname}/../client/client2.html`);
const index3 = fs.readFileSync(`${__dirname}/../client/client3.html`);

let readHTML;

const getIndex = (request, response) => {
  readHTML(request, response, index);
};

const getIndex2 = (request, response) => {
  readHTML(request, response, index2);
};

const getIndex3 = (request, response) => {
  readHTML(request, response, index3);
};

// general function to handle reading HTML pages
readHTML = (request, response, filePath) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(filePath);
  response.end();
};

module.exports.getIndex = getIndex;
module.exports.getIndex2 = getIndex2;
module.exports.getIndex3 = getIndex3;
