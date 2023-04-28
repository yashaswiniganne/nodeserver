const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        // read public.html file from public folder
        fs.readFile(path.join(__dirname, 'public', 'index.html'),
            (err, content) => {

                if (err) throw err;
                res.setHeader("Access-Control-Allow-Origin", "*")
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(content);
            }
        );
    }

    else if (req.url==='/api')
    {
        fs.readFile(
            path.join(__dirname, 'public', 'db.json'),'utf-8',
            (err, content) => {

                if (err) throw err;
                // Please note the content-type here is application/json
                res.setHeader("Access-Control-Allow-Origin", "*")
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(content);
            }
        );
    }
    else{
        res.end("<h1> 404 nothing is here</h1>");
    }

    /*

        But what if we have  1000 pages/urls ? do we need to write 1000 if-else statements?

    /*/
});

const PORT= process.env.PORT || 5959;

server.listen(PORT,()=> console.log(`Great our server is running on port ${PORT} `));