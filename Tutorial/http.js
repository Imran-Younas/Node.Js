const HTTP = require('http');


function data(req, res){
    res.write('<h1> Also Data Scientist.... </h1>')
    res.end()
}



s

HTTP.createServer(data).listen(4500)


