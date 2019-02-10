import fs from 'fs';
import $ from 'jquery';

function fsDummy() {
  const content = fs.readFileSync("./package.json")
  console.log(content);
}

$('#main').text('Hello, typescript');
