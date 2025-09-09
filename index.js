const express=require('express');
const app=express();
const path=8080;

app.use(express.urlencoded({extended:true}));


app.use(express.json());


app.post('/reg',(req,res)=>{
    console.log(req.body);
    res.send("POST REQUSRE")
});

app.listen(path,()=>{
    console.log(`Server is running on port ${path}`);
});