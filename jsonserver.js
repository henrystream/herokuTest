var http=require('http');

var server=http.createServer((req,res)=>{
console.log('Request made :'+req.url);
res.writeHead(200,{'Content-Type':'application/json'});

var myobj={
    name:'ryu',job:'ninja',age:29
};
res.end(JSON.stringify(myobj));
});

server.listen(3000,'127.0.0.1');
console.log('Listening on port 3000');