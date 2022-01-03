const fs = require('fs');
const axios = require('axios');

let path = process.argv[2];

function cat(path){
fs.readFile(path, 'utf8', function(err, data) {
  if (err) {
    // handle possible error
    console.error(err);
    // kill the process and tell the shell it errored
    process.exit(1);
  } else {
  // otherwise success
  console.log(`file contents: ${data}`);
  };
});
};
// perform callback with env variable from terminal input
// cat(process.argv[2]);


async function webCat(url){
    try {
    let resp = await axios.get(url);
    console.log(resp.data);
    } catch(err) {
        console.log(`Error fetching ${url}:`)
        console.log(err);
        process.exit(1);
    };
};

if (path.slice(0,4) === 'http') {
    webCat(path);
} else {
    cat(path);
};

