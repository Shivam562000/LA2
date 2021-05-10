const express = require('express')
const app = express()
const PORT = '4000'
const HOST = 'localhost'

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })  

app.use(express.static('public'));  
//app.use(express.json())

app.get('/ConfForm.html', function (req, res) {
    res.sendFile(__dirname + "/" + "ConfForm.html");
})

app.post('/register_conference', urlencodedParser, function (req, res) {

    response = {  
        Name:req.body.Name, 
        City:req.body.City, 
        Branch:req.body.Branch, 
        Conference:req.body.Conference  

       
   };  
   console.log(response);  
   res.end(JSON.stringify(response));  

})

app.listen(PORT, HOST, () => console.log(`Server listening on http://${HOST}:${PORT}`))