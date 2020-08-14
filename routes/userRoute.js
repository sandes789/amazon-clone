import express from 'express'
import User from '../modals/userModal'
const router = express.Router();

router.get('/createadmin', async (req, res) => {
    try {
        const user = new User({
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

export default router