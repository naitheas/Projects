/** Command-line tool to generate Markov text. */
const fs = require('fs');
const axios = require('axios');
const { MarkovMachine } = require('./markov');



// instantiate class
function writeText(text){
    let content = new MarkovMachine(text);
    // creates text from class function
    console.log(content.makeText());
}

// read file, pull text
function readText(path){
    fs.readFile(path,'utf8',(err,data) =>{
        if(err) {
            console.error(`Cannot read file: ${path}: ${err}`);
            process.exit(1);
        }
        else {
            writeText(data);
        };

    });
};

// check if path is url, generate text
async function urlText(url){
    let resp;
    try{
        resp = await axios.get(url);
    } catch(err){
        console.error(`Cannot read URL: ${url}: ${err}`);
        process.exit(1);
    };
    writeText(resp.data);
};

let path = process.argv[2];
console.log(path)
// determine path/url variables from environment arguments
if (path.slice(0,4) === 'http') {
    urlText(path);
} else {
    readText(path);
};