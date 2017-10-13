const api = require('express')();

api.get('/food',(request,response)=>{
    res.json({food:'food'});
});
api.get('/drink',(request,response)=>{
    res.json({drink:'drink'});
});
api.get('/tv',(request,response)=>{
    res.json({tv:'tv'});
});

module.exports = api;
