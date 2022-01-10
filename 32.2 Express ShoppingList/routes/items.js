const express = require("express");
const router = new express.Router();
const ExpressError = require('../expressError');
const items = require('../fakeDB');


router.get('/',function(req,res){
    res.json({ items })
})

router.post('/',function(req,res){
    const newItem = {name:req.body.name,price:req.body.price}
    items.push(newItem)
    res.status(201).json({ item:newItem })
})

router.get('/:name',function(req,res){
    const searchItem = items.find(item => item.name === req.params.name)
    if(searchItem === undefined){
        throw new ExpressError("Item not found",404)
    }
    res.json({ item: searchItem })
})

router.patch('/:name',function(req,res){
    const searchItem = items.find(item => item.name === req.params.name)
    if(searchItem === undefined){
        throw new ExpressError("Item not found",404)
    }
    searchItem.name = req.body.name
    searchItem.price = req.body.price
    res.json({ item: searchItem })
})


router.delete('/:name',function(req,res){
    const searchItem = items.find(item => item.name === req.params.name)
    if(searchItem === undefined){
        throw new ExpressError("Item not found",404)
    }
    items.splice(searchItem,1)
    res.json({ message: "Deleted" })
})


module.exports = router;