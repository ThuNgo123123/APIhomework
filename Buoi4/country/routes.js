const express = require('express');
const router = express.Router();
let data = require('./output.json');

//get all data from JSON
router.get('/', (req, res) => {
    res.send(data);
})

//get data with filter country parameter
router.get('/filters', (req,res) =>{
    const query = req.query;
    const country = query.country;
    let arrCountry= [];
    for(let i = 0 ; i < data.length; i++)
    {
        if(data[i].country == country)
        {
            arrCountry.push(data[i]);
            break;
        }
    }
    res.send(arrCountry);
})
//get data with filter coutry parameter 2
router.get('/:country', (req,res)=>{
    const countryname = req.params.country;
    let arrCountry= [];
    for(let i = 0 ; i < data.length; i++)
    {
        if(data[i].country == countryname)
        {
            arrCountry.push(data[i]);
            break;
        }
    }
    res.send(arrCountry);
}) 

//delete data with filter country parameter
router.delete('/filters', (req,res) =>{
    const query = req.query;
    const country = query.country;
    for(let i = 0 ; i < data.length; i++)
    {
        if(data[i].country == country)
        {
            data = data.slice(i,1)
            break;
        }
    }
    res.send(data);
})

//API Apis from (3) supports pagination request : pageNumber pageSize
router.get('/filters', (req, res) => {
    const { page, limit } = req.query;
    const p = parseInt(page, 10);
    const l = parseInt(limit, 10);
    res.send(`Filter: ${page} and ${limit }`);
   })
   
module.exports = router;