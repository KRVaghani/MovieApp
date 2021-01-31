// const { concat } = require('async');
const { error } = require('console');
const express = require('express');
const app = express();
const path = require('path');
const request = require('request');

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(express.static('public'));
app.get('/results',(req,res)=>{

    let query = req.query.search
    request('https://api.themoviedb.org/3/search/movie?api_key=fbfdf6274fb627cb59862300a89f7265&query='+query,(error,response,body)=>{
        if(error){
            console.log('error');
        }
        let data = JSON.parse(body);
        res.render('movies', {data:data, searchQuery:query}); // movie ejb file is loaded
        
    }); 
})

app.get('/search',(req,res)=>{
    res.render('search'); // for this search ejb file is loaded
});


app.listen(3000,()=>{
    console.log("server started at port 3000");
});