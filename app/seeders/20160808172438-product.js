var moment = require('moment');
'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    var now = moment().format("YYYY-MM-DD HH:mm:ss");

    var data = [
    {
       "id":1
       ,"inventoryCode":"67033212"
       ,"name":"Pond's Black 100g"
       ,"nameKh":"ហ្វូមលាងមុខ ផនស៍ ព្យួរវ៉ាយ ពណ៍ខ្មៅ 100g"
       ,"unitKh":"ដប"
       ,"pieces":24
       ,"freeInQty":0
       ,"star":false
       ,"price":55.97
       ,"active":true
       ,"createdAt":now
       ,"updatedAt":now
   },
   {
       "id":2
       ,"inventoryCode":"67032752"
       ,"name":"Pond's Acne Clear 100g"
       ,"nameKh":"ហ្វូមលាងមុខ ផនស៍ អេកនេ ឃ្លវ៉ាយ ពណ៍ស 100g"
       ,"unitKh":"ដប"
       ,"pieces":24
       ,"freeInQty":0
       ,"star":false
       ,"price":64.77
       ,"active":true
       ,"createdAt":now
       ,"updatedAt":now
   },
   {
       "id":3
       ,"inventoryCode":"67048959"
       ,"name":"Pond's Cream 7.5g"
       ,"nameKh":"ក្រែមលាបមុខ ផនស៍ ផ្លលេសវ៉ាយ កញ្ចប់"
       ,"unitKh":"កញ្ចប់"
       ,"pieces":144
       ,"freeInQty":0
       ,"star":false
       ,"price":35.24
       ,"active":true
       ,"createdAt":now
       ,"updatedAt":now
   },
   {
       "id":4
       ,"inventoryCode":"21183513"
       ,"name":"Vaseline HW 600ml"
       ,"nameKh":"វ៉ាសឺលីន ហេលស៊ីវ៉ាយ យូវី ឡាយថេនីង 600ml"
       ,"unitKh":"ដប"
       ,"pieces":12
       ,"freeInQty":0
       ,"star":false
       ,"price":67.56
       ,"active":true
       ,"createdAt":now
       ,"updatedAt":now
   },
   {
       "id":5
       ,"inventoryCode":"67005545"
       ,"name":"Dove Blue BW 550ml"
       ,"nameKh":"សាប៊ូដុះខ្លួនដូហ្វ ពណ៍ខៀវ 550ml"
       ,"unitKh":"ដប"
       ,"pieces":12
       ,"freeInQty":0
       ,"star":false
       ,"price":52.23
       ,"active":true
       ,"createdAt":now
       ,"updatedAt":now
   },
   {
       "id":6
       ,"inventoryCode":"67037712"
       ,"name":"Clear Men CSM 340ml"
       ,"nameKh":"សាប៊ូកក់សក់ក្លៀរបុរស ពណ៍ខៀវ 340ml"
       ,"unitKh":"ដប"
       ,"pieces":24
       ,"freeInQty":0
       ,"star":false
       ,"price":73.22
       ,"active":true
       ,"createdAt":now
       ,"updatedAt":now
   },
   {
       "id":7
       ,"inventoryCode":"67038183"
       ,"name":"Clear Women ICM 340ml"
       ,"nameKh":"សាប៊ូកក់សក់ក្លៀរនារី ពណ៍ខៀវ 340ml"
       ,"unitKh":"ដប"
       ,"pieces":24
       ,"freeInQty":0
       ,"star":false
       ,"price":69.04
       ,"active":true
       ,"createdAt":now
       ,"updatedAt":now
   },
   {
       "id":8
       ,"inventoryCode":"67032589"
       ,"name":"Dove HC Blue 330ml"
       ,"nameKh":"ក្រែមបន្ទន់ដូហ្វ ពណ៍ខៀវ 330ml"
       ,"unitKh":"ដប"
       ,"pieces":12
       ,"freeInQty":0
       ,"star":false
       ,"price":30.81
       ,"active":true
       ,"createdAt":now
       ,"updatedAt":now
   },
   {
       "id":9
       ,"inventoryCode":"67049754"
       ,"name":"Clear ICM 5ml"
       ,"nameKh":"សាប៊ូកក់សក់ក្លៀរបុរស ពណ៍ខៀវ 5ml"
       ,"unitKh":"កញ្ចប់"
       ,"pieces":720
       ,"freeInQty":0
       ,"star":false
       ,"price":27.03
       ,"active":true
       ,"createdAt":now
       ,"updatedAt":now
   },
   {
       "id":10
       ,"inventoryCode":"67037087"
       ,"name":"Pond's Acne Clear 15g"
       ,"nameKh":"ហ្វូមលាងមុខ ផនស៍ អេកនេ ឃ្លវ៉ាយ ពណ៍ស 15g"
       ,"unitKh":"ដប"
       ,"pieces":48
       ,"freeInQty":0
       ,"star":false
       ,"price":28.54
       ,"active":true
       ,"createdAt":now
       ,"updatedAt":now
   },
   {
       "id":11
       ,"inventoryCode":"67054800"
       ,"name":"Pond's Black 15g"
       ,"nameKh":"ហ្វូមលាងមុខ ផនស៍ ព្យួរវ៉ាយ ពណ៍ខ្មៅ 15g"
       ,"unitKh":"ដប"
       ,"pieces":48
       ,"freeInQty":0
       ,"star":false
       ,"price":22.1
       ,"active":true
       ,"createdAt":now
       ,"updatedAt":now
   },
   {
       "id":12
       ,"inventoryCode":"67064882"
       ,"name":"Dove HC Blue 8ml"
       ,"nameKh":"ក្រែមបន្ទន់ដូហ្វ ពណ៍ខៀវ 8ml"
       ,"unitKh":"កញ្ចប់"
       ,"pieces":720
       ,"freeInQty":0
       ,"star":false
       ,"price":40.91
       ,"active":true
       ,"createdAt":now
       ,"updatedAt":now
   },
   {
       "id":13
       ,"inventoryCode":"67064902"
       ,"name":"Dove HC Green 8ml"
       ,"nameKh":"ក្រែមបន្ទន់ដូហ្វ ពណ៍បៃតង 8ml"
       ,"unitKh":"កញ្ចប់"
       ,"pieces":720
       ,"freeInQty":0
       ,"star":false
       ,"price":40.91
       ,"active":true
       ,"createdAt":now
       ,"updatedAt":now
   },
   {
       "id":14
       ,"inventoryCode":"66813682"
       ,"name":"Pepsodent TB"
       ,"nameKh":"ច្រាសដុសធ្មេញប៉ិបសូដិនដាប់ប៊លឃែរ"
       ,"unitKh":"ដើម"
       ,"pieces":48
       ,"freeInQty":0
       ,"star":false
       ,"price":40.32
       ,"active":true
       ,"createdAt":now
       ,"updatedAt":now
   },
   {
       "id":15
       ,"inventoryCode":"21015631"
       ,"name":"Sunlight 400ml"
       ,"nameKh":"ទឹកលាងចានសាន់ឡៃក្រូចឆ្មារ 400ml"
       ,"unitKh":"ដប"
       ,"pieces":24
       ,"freeInQty":0
       ,"star":false
       ,"price":13.66
       ,"active":true
       ,"createdAt":now
       ,"updatedAt":now
   },
   {
       "id":16
       ,"inventoryCode":"67071436"
       ,"name":"Knorr 17g"
       ,"nameKh":"ម្សៅស៊ុបខ្នរ 17g"
       ,"unitKh":"កញ្ចប់"
       ,"pieces":480
       ,"freeInQty":0
       ,"star":false
       ,"price":39.75
       ,"active":true
       ,"createdAt":now
       ,"updatedAt":now
   },
   {
       "id":17
       ,"inventoryCode":"67103131"
       ,"name":"Viso Pises 800g"
       ,"nameKh":"ម្សៅសាប៊ូវិសូពិសេស 800g"
       ,"unitKh":"កញ្ចប់"
       ,"pieces":12
       ,"freeInQty":0
       ,"star":false
       ,"price":16.01
       ,"active":true
       ,"createdAt":now
       ,"updatedAt":now
   },
   {
       "id":18
       ,"inventoryCode":"67051902"
       ,"name":"Comfort Blue 20ml"
       ,"nameKh":"ទឹកក្រូអូប ខុមហ្វតអ៊ុលត្រា 20ml"
       ,"unitKh":"កញ្ចប់"
       ,"pieces":300
       ,"freeInQty":0
       ,"star":false
       ,"price":18.4
       ,"active":true
       ,"createdAt":now
       ,"updatedAt":now
   },
   {
       "id":19
       ,"inventoryCode":"67049763"
       ,"name":"Clear Men ICM 5 ml"
       ,"nameKh":"សាប៊ូកក់សក់ក្លៀរនារី ពណ៍ខៀវ 5ml"
       ,"unitKh":"កញ្ចប់"
       ,"pieces":720
       ,"freeInQty":0
       ,"star":false
       ,"price":27.26
       ,"active":true
       ,"createdAt":now
       ,"updatedAt":now
   },
   {
       "id":20
       ,"inventoryCode":"67064886"
       ,"name":"Dove SH Blue 9ml"
       ,"nameKh":"សាប៊ូកក់សក់ដូហ្វ ពណ៍ខៀវ 9ml"
       ,"unitKh":"កញ្ចប់"
       ,"pieces":720
       ,"freeInQty":0
       ,"star":false
       ,"price":37.02
       ,"active":true
       ,"createdAt":now
       ,"updatedAt":now
   }];
   // return queryInterface.bulkInsert('Products', data);
},

down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
      */
  }
};
