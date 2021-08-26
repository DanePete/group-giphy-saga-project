require('dotenv').config();
const express = require('express');
const { default: axios } = require('axios');
const router = express.Router();

router.get('/search/:string', (req, res) => {
  // return all categories
 axios({
     method: 'GET',
     url: "https://api.giphy.com/v1/gifs/search"
     params: { 
         api_key: process.env.GIPHY_API_KEY,
         q: req.params.string
     }
 }).then (response => {
     console.log('Response is', response.data);
     res.send(response.data);
     
 }).catch ((error) => {
     console.log('Error', error);
     sendStatus(500);
     
 })
});

module.exports = router;
