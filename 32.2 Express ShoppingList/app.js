const fs = require('fs');
const express = require('express');
const app = express();
const ExpressError = require('./expressError');
const itemsRoutes = require('./routes/items');


app.use(express.json());
app.use('/items',itemsRoutes);



app.use((req,res,next)=>{
    const e = new ExpressError("Page not found",404)
    next(e)
});
app.use(function(err,req,res,next){
    let status = err.status || 500;
    let msg = err.message;
    return res.status(status).json({error:{msg,status}});
});


module.exports = app;