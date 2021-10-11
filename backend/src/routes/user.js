const db = require('../mysqlconnection')
const express = require('express')
const router = express.Router()

router.post('/', (req, res)=>{
    const sql = `INSERT INTO users VALUES (?, ?, ?, ?)`
    console.log('REQUISIÇAO: ', req)
    db.query(sql, [ req.body.name, req.body.email, req.body.password, req.body.userid ], (err, result)=>{
        if(err) console.log(err)
        res.status(200).json(result)
    })
})

module.exports = router