const express = require('express')
    , app = express()
    , bodyParser = require('body-parser')
    , server = require('http').Server(app);

const login = require('./routes/login.js');


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// setting up the body parser to handle post request
app.use(bodyParser.urlencoded({
   extended: true
}));

app.use(bodyParser.json());

// serving static files
app.use(express.static('./../'));

// setting up routes
app.use('/',(req,res,next)=>{
 console.log('inside routes');
 next();
}, login);



server.listen(3000, function() {
    console.log('server started on  3000');
});
