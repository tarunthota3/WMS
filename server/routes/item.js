// Import Router configuration

const item = require('./router.config.js');
const conn = require('./../config/dev.js').CONN;

item.get('/item/test', (req, res)=>{
    console.log('Base item route hit!');
    res.send('item route working fine');
  });

  item.get('/item/vendor',(req, res)=>{
    let item_name = "laptop";
    // select u.user_id, concat_ws(' ',u.first_name,u.last_name) full_name from user u inner join item i on u.user_id= i.vendor_id where i.item_name="laptop";

    conn.query("select u.user_id, concat_ws(' ',u.first_name,u.last_name) full_name from user u inner join item i on u.user_id= i.vendor_id where i.item_name='"+item_name+"';", function(err, result, fields){
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


module.exports = item;