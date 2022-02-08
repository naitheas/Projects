const express = require('express');
const ExpressError = require('../expressError');
const router = new express.Router();
const User = require('../models/user');
const {ensureLoggedIn, ensureCorrectUser} = require("../middleware/auth");
const { SECRET_KEY, BCRYPT_WORK_FACTOR } = require('../config');



/** GET / - get list of users.
 *
 * => {users: [{username, first_name, last_name, phone}, ...]}
 *
 **/
router.get('/',ensureLoggedIn,async(req,res,next)=>{
    try{
        const users = await User.all();
        return res.json({users:users});
    }catch(e){
        return next(e);
    };
});

/** GET /:username - get detail of users.
 *
 * => {user: {username, first_name, last_name, phone, join_at, last_login_at}}
 *
 **/
 router.get('/:username',ensureLoggedIn, ensureCorrectUser,async(req,res,next)=>{
    try{
        const {username } = req.params;
        const user = await User.get(username);
        if (!user){
            throw new ExpressError(`User not found for ${username}`,404);
        }  return res.json({User:user});
    }catch(e){
        return next(e);
    };
});

/** GET /:username/to - get messages to user
 *
 * => {messages: [{id,
 *                 body,
 *                 sent_at,
 *                 read_at,
 *                 from_user: {username, first_name, last_name, phone}}, ...]}
 *
 **/

 router.get('/:username/to',ensureLoggedIn,ensureCorrectUser,async(req,res,next)=>{
    try{
        const user = await User.get(req.params.username);
        if(!user){
            throw new ExpressError(`User not found for ${req.params.username}`,404);
        };
        const messagesTo = await User.messagesTo(req.params.username);
        if(!messagesTo){
            throw new ExpressError('No messages Found',404);
        } return res.json({Messages:messagesTo});
    }catch(e){
        return next(e);
    };
});
/** GET /:username/from - get messages from user
 *
 * => {messages: [{id,
 *                 body,
 *                 sent_at,
 *                 read_at,
 *                 to_user: {username, first_name, last_name, phone}}, ...]}
 *
 **/
 router.get('/:username/from',ensureLoggedIn,ensureCorrectUser,async(req,res,next)=>{
    try{
        const user = await User.get(req.params.username);
        if(!user){
            throw new ExpressError(`User not found for ${req.params.username}`,404);
        };
        const messagesFrpm = await User.messagesFrom(req.params.username);
        if(!messagesFrom){
            throw new ExpressError('No messages Found',404);
        } return res.json({Messages:messagesFrom});
    }catch(e){
        return next(e);
    };
});


module.exports = router;