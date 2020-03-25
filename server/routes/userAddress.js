// Import Router configuration

const userAddress = require('./router.config.js');
const conn = require('./../config/dev.js').CONN;

userAddress.get('/userAddress/test', (req, res)=>{
  console.log('Base userAddress route hit!');
  res.send('userAddress route working fine');
});

userAddress.get('/ua/city',(req, res)=>{
    let city = "Charlotte";
    // select * from userAddress where city = "Charlotte";
    conn.query("select * from userAddress where city = '"+city+"'", function(err, result, fields){
        if (err){
            console.log(err);
            res.json({
              'status':'failed',
              'statusCode':'300'
            })
          }
          else{
              console.log(result);
              res.json({
                'status':'success',
                'statusCode':'200',
                'data': result
              })
          }
    })
});


module.exports = userAddress;