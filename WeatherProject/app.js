const express=require("express");
const https=require("https");
const bodyParser=require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
    
        });
app.post("/",function(req,res){
    const query=req.body.cityName;
    const apikey="c3eddbed49fab8d5dd4ec412a6d007a1"
    const units="metric";
    const url="https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apikey+"&units="+units;

    https.get(url,function(response){
        console.log(response.statusCode);

        response.on("data",function(data){
            const weatherData=JSON.parse(data)
            const temp=weatherData.main.temp
            const weatherDescription=weatherData.weather[0].description
             
            res.write("The temp in "+query+" is"+temp+" degree celsius");
            res.write("The weather description is"+weatherDescription);
           
            res.send();
})
    })
    
})
app.listen(3000,function(){
    console.log("Server is started")

});