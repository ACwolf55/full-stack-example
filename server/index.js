const express = require('express')
const app = express()
require("dotenv").config(); 
const Sequelize = require('sequelize')
const cors = require('cors')

const {DATABASE_URL} = process.env

app.use(express.json())
app.use(cors())

const PORT = 5000

const sequelize = new Sequelize(DATABASE_URL, {
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  });


  app.get('/getMessages',(req,res)=>{
    console.log('sdfsdf')

    sequelize.query(`SELECT * FROM messages;`).then((dbRes)=>{
        console.log(dbRes[0])
       return res.send(dbRes[0])
    })


  })

   app.post('/postMessage',(req,res)=>{
    const {message}= req.body

    sequelize.query(`INSERT INTO messages(post_body) VALUES('${message}') returning *;`).then((dbRes)=>{
        res.send('succesfull')
    })


   })



app.listen(PORT, console.log(`RUNNING @ PORT ${PORT}`));