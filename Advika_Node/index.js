const http = require("http");
const path = require("path");
const fs = require("fs");
const {MongoClient} = require('mongodb');
const uri ="mongodb+srv://Advika:Advika@cluster0.jlr2y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

const server = http.createServer(async(req, res) => {
    const headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
    };
    const connectDB=async()=>{
        try{
            await client.connect();
            console.log("Mongo DB is connected")
        
        }
        catch(e){
            console.log(e)
        }
    }
    connectDB();

    console.log(req.url);

    let filePath = path.join(__dirname, 'public', req.url);
    console.log("Filepath :", filePath)

    let extname = path.extname(filePath)
    console.log("Extension: ", extname)

    let contentType = 'text/html';

    switch(extname){
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType ='text/javascript';
            break;
        case '.png':
                contentType ='images/png';
                break;

    }


    if (req.url === '/') {
        // Serve the index.html file
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
           
        });
    }
    else if (req.url === '/api') {
        // Serve db.json file
        const cursor = client.db("EventDB").collection("eventcollection").find({});
        const results = await cursor.toArray();
        //console.log(results);
        res.writeHead(200,headers)
        const js= (JSON.stringify(results, null, 2));
        console.log(js);
        res.end(js);
        
    }
    else {
        
        fs.readFile(filePath, (err, content) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 Not Found</h1>');
                return;
            }
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content);
        });
    }
});

// Start the server
const PORT = process.env.PORT || 5959;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
