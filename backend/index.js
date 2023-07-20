let http = require('http');
const fs = require('fs');

http.createServer((req, res) =>{
  res.writeHead(200, {'Content-Type': 'text/plain'});
  
 let myUrl = new URL('http://'+req.headers.host+"/"+req.url);
 console.log(myUrl);
 if (myUrl.pathname==='//') {
    fs.readFile('../frontend/index.html', 'utf8',(err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    })
    
 } else if(myUrl.pathname==='//about') {
    fs.readFile('../frontend/about.html', 'utf8',(err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    })
 } else if(myUrl.pathname==='//contact-me') {
    fs.readFile('../frontend/contact-me.html', 'utf8',(err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    })
 } else {
    fs.readFile('../frontend/404.html', 'utf8',(err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    })
 }
  
}).listen(3003);