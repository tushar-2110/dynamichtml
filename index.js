const express=require("express")
const app=express();
const path=require('path')


app.use(express.static('public'));

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'))



app.get('/example',(req,res)=>{

  const num=Math.floor(Math.random()*10)+1;  
  res.render('example',{num});

})



app.get('/',(req,res)=>{

res.render('home.ejs');

})





app.listen(5000,()=>{


console.log("listening on port 5000");

})