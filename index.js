const express = require("express");
const app = express();

//estou dizendo para o express usar o EJS como View Engine
app.set('view engine','ejs');
app.use(express.static('public'));

app.get("/",(req,res) => {
    res.render("index",{
              
    });
});

app.get("/perguntar",(req,res)=>{
    res.render("perguntar",{
        
    });
});

app.listen(800,()=>{
    console.log("app rodando");
});
