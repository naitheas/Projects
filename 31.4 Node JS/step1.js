const fs = require('fs');

function cat(path) {
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
cat(process.argv[2]);
