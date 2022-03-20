//require module
const express = require('express');
const dbconnect = require('./dbconnect');
require('./create-db');
require('./fileUploder');
const app = express()
const port = 3000

//root path
app.get('/', (req, res) => {
  res.send('App is Running....')
})
//start the App
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
//API for searching with EPIC_no
app.get('/search/epicno/:EPIC_NO',  async(req, res)=> {
  let data = await dbconnect();
  res.send(await data.find(req.params).toArray())
  })

//API for searching with House no
app.get('/search/house/:C_HOUSE_NO', async (req, res)=>{
  let data = await dbconnect();
  res.send(await data.find(req.params).toArray())
  })
//API for seaching with Gender
app.get('/search/gender/:GENDER', async (req, res)=>{
  let data = await dbconnect();
  res.send(await data.find(req.params).toArray())
  })
//API for searching with Name
app.get('/search/name/:AC_NAME_EN', async (req, res)=>{
  let data = await dbconnect();
  // data = await data.find(req.params).toArray(); 
  res.send(await data.find(req.params).toArray())
  })