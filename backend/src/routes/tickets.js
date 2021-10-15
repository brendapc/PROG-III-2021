const db = require('../mysqlconnection')
const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    const sql = 'SELECT * FROM tickets'
    db.query(sql, (err, result)=>{
        if (err) throw err
        res.status(200).json(result)
    })
})

router.get('/destinations', (req, res) => {
    const sql = 'select * from tickets group by loc_chegada'
    db.query(sql, (err, result)=>{
        if(err) throw err
        res.status(200).json(result)
    })
})

router.post('/', (req, res)=>{
    const sql = 'INSERT INTO tickets  (numero, cia, loc_partida, loc_chegada, data_partida, data_chegada, preço, userid) VALUES (?,?,?,?,?,?,?,?)'
    db.query(sql, [req.body.flightid, req.body.cia, req.body.origin, req.body.destination, req.body.departure, req.body.arrival, req.body.price, req.body.userid ],
        (err, result)=>{
            if(err) throw err
            res.status(200).json(result)
        })
})
module.exports = router