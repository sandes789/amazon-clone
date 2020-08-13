const express = require('express');
const UserSchema  = require('../modals/user.Modal');
const router = express.Router();

router.get('/createadmin', async (req, res) => {
    try {
        const user = new UserSchema({
            name: 'Sandesh',
            email: 'sansshrestha@gmail.com',
            password: '12345',
            isAdmin: true
        });
    
        const newUser = await user.save();
        res.send(user)
    } catch (error) {
        res.send({msg: error.message});
    }
    
})

module.exports = router