// function for logging request information
function logger(req,res,next){
    console.log(`Received a ${req.method} request to ${req.path}`);
    return next();
  };
// export for app access
module.exports = { logger }