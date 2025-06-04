const express =require("express")
const fs =require("fs");
const https = require("https");
const app =express();
const socketIO =require("socket.io");
app.use(express.static(__dirname));
//we need a key and cert to run https
//we generated them with mkcert
// $ mkcert create-ca
// $ mkcert create-cert

const key = fs.readFileSync("cert.key");
const cert = fs.readFileSync("cert.crt");


const expressServer =https.createServer({key,cert},app);

const io = socketIO(expressServer,{
    cors:{
        origin:[
            "https://localhost",
            // local ip address

        ],
        method:["GET","POST"]
    }
})


expressServer.listen(8181);

