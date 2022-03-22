const http = require("http");
// req is actually the in-coming request from the user for webpage.
// res is what we are sending back
const server = http.createServer((req, res) => {
if(req.url === '/'){
    res.end("Welcome to our page")
}
if(req.url === "/about"){
    res.end("Here is our short history")
}
res.end(`
<h1>Oops!</h1>
<p>We can't seem tto find the page you are looking for </p>
<a href="/">Back home</a>
`);
})

server.listen(5000)