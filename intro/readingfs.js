var fs=require('fs');

fs.readFile('text.txt','utf8',function(error,data){
    fs.writeFile('writeme.txt',data,function(err,data1){
        if(err===null)
        {
            console.log('Writing was successful');
        }
    });
});

fs.unlink('writeme.txt',function(err,data){
    if(err===null){
        console.log('File deleted');
    }
});

fs.mkdir('new dir',function(err,data){
    if(err===null){
        console.log('Directory was created successfully');
    }
    fs.rmdir('new dir',function(err,data){
        if(err===null){
            console.log('Directory was deleted');
        }
    });
});



