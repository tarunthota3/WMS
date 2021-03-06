// Import Router configuration

const user = require('./router.config.js');
const conn = require('./../config/dev.js').CONN;

user.get('/user/test', (req, res)=>{
  console.log('Base user route hit!');
  res.send('user route working fine');
});

user.get('/user/quantity',(req, res)=>{
    let quantity = 50;
    // select first_name, last_name from user where user_id IN (select user_id from item where quantity=50);
    conn.query("select first_name, last_name from user where user_id IN (select user_id from item where quantity="+quantity+");", function(err, result, fields){
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

user.get('/user/details',(req, res)=>{
  // select u.user_id, u.first_name, u.last_name, u.email, up.contact, u.user_type, ua.street,ua.city, ua.zip from user u inner join userPhoneNumber up on u.user_id = up.user_id inner join userAddress ua on ua.user_id=u.user_id;
  conn.query("select u.user_id, u.first_name, u.last_name, u.email, up.contact, u.user_type, ua.street, ua.city, ua.zip from user u inner join userPhoneNumber up on u.user_id = up.user_id inner join userAddress ua on ua.user_id=u.user_id;", function(err, result, fields){
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


module.exports = user;