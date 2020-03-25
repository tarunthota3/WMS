// Import Router configuration

const login = require('./router.config.js');
const conn = require('./../config/dev.js').CONN;

login.get('/login/test', (req, res)=>{
  console.log('Base login route hit!');
  res.send('login route working fine');
});

login.get('/login', function(req, res) {
    console.log('login route called');
    let email = req.query.email
      , password = req.query.password;
    console.log('body: ', req.query);
    
    conn.query("SELECT * FROM fb_users where email = '"+email+"'", function (err, result, fields) {
      if (err){
        console.log(err);
        res.json({
          'status':'failed',
          'statusCode':'300'
        })
      }
      else{
        console.log(result);
        if(result.length > 0){
          if(result[0].password === password){
            let data = {
              firstName: result[0].first_name,
              lastName: result[0].last_name,
              userId: result[0].user_id,
              userType: result[0].user_type
            };
            console.log('This is data');
            res.json({
              'status':'success',
              'statusCode':'200',
              'data': data
            })
          }
          else{
            res.json({
              'status':'failed',
              'statusCode':'300'
            })
          }
        }
        else{
          res.json({
            'status':'failed',
            'statusCode':'300'
          })
        }
      }
    })
  });


module.exports = login;
