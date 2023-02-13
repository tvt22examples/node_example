const { response } = require('express');
const express = require('express');
const app=express();
const port='3000';

app.get('/',function(request,response){
    console.log("test1");
    response.send("Express esimerkki");
});
app.get('/esim1',function(request,response){
    response.send("Tämä on Endpoint /esim1")
});

app.get('/esim2/:fname?',function(request,response){
    response.send("terve "+request.params.fname);
});

app.listen(port,function(){
    console.log('sovellus kuuntelee porttia '+port);
});

module.exports=app;