/** BizTime express application. */

const express = require('express');
const app = express();
const ExpressError = require('./expressError');
const middleware = require("./middleware");
const invoicesRoutes = require('./routes/invoices');
const companiesRoutes = require('./routes/companies');
const industriesRoutes = require('./routes/industries');


// middleware to parse JSON.
app.use(express.json());
// middleware for logger
app.use(middleware.logger);


app.use('/companies',companiesRoutes);
app.use('/invoices',invoicesRoutes);
app.use('/industries',industriesRoutes);

app.get('/',function(req,res){
    res.json({ msg: 'page loaded!' })
})

//middleware error handling templates
app.use((req,res,next) =>{
  const e = new ExpressError("Page Not Found", 404)
  next(e)
});

app.use((error,req,res,next)=>{ 
				let status = error.status || 500;
				let msg = error.message;
				return res.status(status).json({error:{msg,status}});});

module.exports = app;