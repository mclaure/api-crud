'use strict';

module.exports = function(app) {

  var mongodb = require('../controllers/MongoDBController');
  var mysqldb = require('../controllers/MySQLController');  

  //   *********** KUDOS ***********
  app.route('/api/kudos/list')
    .get(mongodb.list_kudos);     

  app.route('/api/kudos/add')
    .post(mongodb.add_kudos);       
    
  app.route('/api/kudos/del/:id?')
    .delete(mongodb.del_kudos);   
    
  //   *********** USUARIOS ***********
  app.route('/api/users/list')
    .get(mysqldb.list_users);   

  app.route('/api/users/find')
    .get(mysqldb.find_users);

  app.route('/api/users/detail')
    .get(mysqldb.user_detail);    

  app.route('/api/users/add')
    .post(mysqldb.add_user);

  app.route('/api/users/del/:id')
    .delete(mysqldb.del_user);       
};