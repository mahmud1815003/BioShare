//External Imports
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

// Internal Imports
const AdminModel = require('../../Models/admin');
//Router


router.post('/', async (req,res) => {
    try{
        const pass = await bcrypt.hash(req.body.password, 10);
        const data = new AdminModel({
            ...req.body,
            password: pass,
        });
        const result = await data.save();
        console.log('Admin Added');
        res.json({
            data: "Admin Added",
        })
    }catch(error){  
        console.log(error);
    }
});

module.exports = router;