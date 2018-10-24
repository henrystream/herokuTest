var http=require('http');
var fs=require('fs');



//myReadStream.on('data',function(chunk){
  //  console.log('New chunk received');
    //console.log(chunk);
    //myWriteStream.write(chunk);
//});

var server=http.createServer((req,res)=>{
    console.log('Request was made '+req.url);
   if(req.url==='/home' || req.url==='')
   {
     res.writeHead(200,{'Content-Type':'text/html'});
     fs.createReadStream(__dirname+'/index.html').pipe(res);  
   }
   else if(req.url==='/api/ninjas'){
    res.writeHead(200,{'Content-Type':'application/json'});
       var ninjas=[{name:'ryu',age:29},{name:'yoshi',age:32}]
       res.end(JSON.stringify(ninjas));
    }
    else{
        res.writeHead(404,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname+'/404.html').pipe(res);  
    }
});

server.listen(3000,'127.0.0.1');
console.log('Listening on port 3000');