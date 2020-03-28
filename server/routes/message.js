// Import Router configuration

const message = require('./router.config.js');
const conn = require('./../config/dev.js').CONN;

message.get('/message/test', (req, res)=>{
    console.log('Base message route hit!');
    res.send('message route working fine');
  });

  message.get('/message/vendor',(req, res)=>{
    // select concat_ws(" ", u.first_name, u.last_name) user_name,m.content,concat_ws(" ", v.first_name, v.last_name) vendor_name from user u inner join message m inner join user v where u.user_id=m.user_id && v.user_id=m.vendor_id;

    conn.query("select concat_ws(' ', u.first_name, u.last_name) user_name,m.content,concat_ws(' ', v.first_name, v.last_name) vendor_name from user u inner join message m inner join user v where u.user_id=m.user_id && v.user_id=m.vendor_id;", function(err, result, fields){
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


module.exports = message;




