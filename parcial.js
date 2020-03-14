const pandemia1 = require ('./pandemia');
const express=require('express');
const appServer=express();
appServer.use(express.json());
let pande= Array();

appServer.listen(3000,()=>{
    console.log("Servidor corre correctamente");
});

appServer.get('/',
        (req,res) => {
            res.send("El servidor corre correctamente");
        });

appServer.post('/addpandemia',(req,res)=>{
    console.log(req.body);
    pande.push(req.body);
    res.send("Pandemia agregada");
});

appServer.post('/updatePais/:id', (req,res)=>{
    console.log(req.body);
    console.log(req.params.id);
    res.send("Actualizado");
});
appServer.get("/getpandemia/:id", (req,res)=>{
    res.json(pande[req.params.id]);
});
appServer.get("/allpandemia",(req,res)=>{
    
    res.json(pande);
});
















