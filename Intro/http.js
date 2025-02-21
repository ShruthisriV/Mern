const http = require("http");

const server = http.createServer((req, res) => {
    //handle incoming requests here
    // req -> request Object -> it contains details of th info required from server
    // res -> response Object -> it contains the response from server
    

    console.log(req);
    console.log(req.url);
    

    //steps
    //set response header
    // res.setHeader("Content-Type", "application/json");
    
    //write response content
    // res.write("<html><head><title>NodeJS HTTP Server</title></head><body>");
    // res.write("<h1>Hello World!</h1>");
    // res.write("</body></html>");
    
    // const jsonResponse = JSON.stringify(jsonData);
    if(req.method == "GET"){
        if(req.url == "/"){
            const jsonData = {
                message: "Hello World!",
                data: new Date()
            }
            const jsonResponse = JSON.stringify(jsonData);
            res.write(jsonResponse);
        }else if(req.url == "/trendingsongs"){
            const jsonData = {
                message: "List of trending songs!",
                data: new Date()
            }
            const jsonResponse = JSON.stringify(jsonData);
            res.write(jsonResponse);
        }else{
            const jsonData = {
                message: "404 page!",
                data: new Date()
            }
            const jsonResponse = JSON.stringify(jsonData);
            res.write(jsonResponse);
        }
    }

    //end the response
    res.end();
})

const port = 3000; //flat number
const host = "localhost" //the society address -> the server will only accept the connections from the same machine.
server.listen(port, host, () => {
    console.log(`Server is listening on http://${host}:${port}`); 
})