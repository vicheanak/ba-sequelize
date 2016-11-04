var moment = require('moment');
'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    var now = moment().format("YYYY-MM-DD HH:mm:ss");
    var data = [
    {
       "id":1
       ,"dtCode":"5003"
       ,"dtName":"SLD"
       ,"dtNameKh":"អេសអិលឌី ត្រេឌីង"
       ,"active":true
       ,"createdAt":now
       ,"updatedAt":now
   }];
   // return queryInterface.bulkInsert('Distributors', data);
},

down: function (queryInterface, Sequelize) {

}
};
