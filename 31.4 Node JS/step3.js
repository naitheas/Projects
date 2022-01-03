const fs = require('fs');
const axios = require('axios');

let path;
let out;

function cat(path,out){
fs.readFile(path, 'utf8', function(err, data) {
  if (err) {
    // handle possible error
    console.error(err);
    // kill the process and tell the shell it errored
    process.exit(1);
  } else {
  // otherwise success
//   console.log(`file contents: ${data}`);
    write(data,out)
  };
});
};
// perform callback with env variable from terminal input
// cat(process.argv[2]);


async function webCat(url,out){
    try {
    let resp = await axios.get(url);
    write(resp.data,out);
    } catch(err) {
        console.log(`Error fetching ${url}:`)
        console.log(err);
        process.exit(1);
    };
};


if(process.argv[2]=== '--out') {
    out = process.argv[3];
    path = process.argv[4];
} else {
    path = process.argv[2];
};

if (path.slice(0,4) === 'http') {
    webCat(path,out);
} else {
    cat(path,out);
};
// HELPERS
function write(text, out) {
    if (out) {
      fs.writeFile(out, text, 'utf8', function(err) {
        if (err) {
          console.error(`Couldn't write ${out}: ${err}`);
          process.exit(1);
        }
      });
    } else {
      console.log(text);
    }
  }