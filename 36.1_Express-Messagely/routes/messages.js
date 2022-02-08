const express = require('express');
const ExpressError = require('../expressError');
const router = new express.Router();
const Message = require('../models/message');
const {ensureLoggedIn, ensureCorrectUser} = require("../middleware/auth");

/** GET /:id - get detail of message.
 *
 * => {message: {id,
 *               body,
 *               sent_at,
 *               read_at,
 *               from_user: {username, first_name, last_name, phone},
 *               to_user: {username, first_name, last_name, phone}}
 *
 * Make sure that the currently-logged-in users is either the to or from user.
 *
 **/
router.get('/:id',ensureLoggedIn, ensureCorrectUser,async(req,res,next)=>{
    try{
        const result = await Message.get(req.params.id)
        if (!result){
            throw new ExpressError(`No messages found for id${req.params.id}`,404);
        }
        return res.json({Message:result})
    }catch(e){
        return next(e);
    };
});

/** POST / - post message.
 *
 * {to_username, body} =>
 *   {message: {id, from_username, to_username, body, sent_at}}
 *
 **/
 router.post('/',ensureLoggedIn, ensureCorrectUser,async(req,res,next)=>{
    try{
        const from_username = req.params.username;
        const { to_username, body } = req.body;
        if(!to_username||!body){
            throw new ExpressError("Messge must contain from,to and body.",400);
        }
        const newMsg = await Message.create(from_username,to_username,body);
        return res.json(newMsg);
    }catch(e){
        return next(e);
    };
});

/** POST/:id/read - mark message as read:
 *
 *  => {message: {id, read_at}}
 *
 * Make sure that the only the intended recipient can mark as read.
 *
 **/
 router.post('/:id/read',ensureLoggedIn, ensureCorrectUser,async(req,res,next)=>{
    try{
        const markRead = await Message.markRead(req.params.id);
        return res.json(`Marked as read:${markRead}`)
    }catch(e){
        return next(e);
    };
});
module.exports = router;