var express=require('express');
var app=express();
var bodyParser=require('body-parser');

app.set('view engine','ejs');
app.use('/assets',express.static('assets'));

app.get('/',(req,res)=>{
  //  res.send('This is the home page');
  res.sendFile(__dirname+'/index.html');
});

app.get('/contact',(req,res)=>{
    res.send('This is the contact page');
});

app.get('/profile/:id',(req,res)=>{
   // res.send('You requested to see a profile with the id '+req.params.id);
var data={age:29,job:'ninja',hobbies:['eating','fishing','fighting']};
   res.render('profile',{person:req.params.id,data:data,qs:req.query});
});
app.listen(3000);