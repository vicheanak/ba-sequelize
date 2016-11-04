var moment = require('moment');
'use strict';

module.exports = {
	up: function (queryInterface, Sequelize) {
		var now = moment().format("YYYY-MM-DD HH:mm:ss");

		// return queryInterface.bulkInsert('Users', [
		// {
		// 	"id":1
		// 	,"username":"admin"
		// 	,"name":"admin"
		// 	,"password":"$2a$10$IRVObsCawNNjQVelU3Dg3.vmFKmfmhL9rdq90VmgM29yOB6p9uAVa"
		// 	,"role":"admin"
		// 	,"active":true
		// 	,"createdAt":now
		// 	,"updatedAt":now
		// },
		// {
		// 	"id":2
		// 	,"username":"sf1"
		// 	,"name":"SF 1"
		// 	,"password":"$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i"
		// 	,"role":"sp"
		// 	,"active":true
		// 	,"createdAt":now
		// 	,"updatedAt":now
		// },
		// {
		// 	"id":3
		// 	,"username":"sf2"
		// 	,"name":"SF 2"
		// 	,"password":"$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i"
		// 	,"role":"sp"
		// 	,"active":true
		// 	,"createdAt":now
		// 	,"updatedAt":now
		// },
		// {
		// 	"id":4
		// 	,"username":"sf3"
		// 	,"name":"SF 3"
		// 	,"password":"$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i"
		// 	,"role":"sp"
		// 	,"active":true
		// 	,"createdAt":now
		// 	,"updatedAt":now
		// },
		// {
		// 	"id":5
		// 	,"username":"sf4"
		// 	,"name":"SF 4"
		// 	,"password":"$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i"
		// 	,"role":"sp"
		// 	,"active":true
		// 	,"createdAt":now
		// 	,"updatedAt":now
		// },
		// {
		// 	"id":6
		// 	,"username":"sf5"
		// 	,"name":"SF 5"
		// 	,"password":"$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i"
		// 	,"role":"sp"
		// 	,"active":true
		// 	,"createdAt":now
		// 	,"updatedAt":now
		// },
		// {
		// 	"id":7
		// 	,"username":"sf6"
		// 	,"name":"SF 6"
		// 	,"password":"$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i"
		// 	,"role":"sp"
		// 	,"active":true
		// 	,"createdAt":now
		// 	,"updatedAt":now
		// },
		// {
		// 	"id":8
		// 	,"username":"sf7"
		// 	,"name":"SF 7"
		// 	,"password":"$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i"
		// 	,"role":"sp"
		// 	,"active":true
		// 	,"createdAt":now
		// 	,"updatedAt":now
		// },
		// {
		// 	"id":9
		// 	,"username":"sf8"
		// 	,"name":"SF 8"
		// 	,"password":"$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i"
		// 	,"role":"sp"
		// 	,"active":true
		// 	,"createdAt":now
		// 	,"updatedAt":now
		// },
		// {
		// 	"id":10
		// 	,"username":"sf9"
		// 	,"name":"SF 9"
		// 	,"password":"$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i"
		// 	,"role":"sp"
		// 	,"active":true
		// 	,"createdAt":now
		// 	,"updatedAt":now
		// },
		// {
		// 	"id":11
		// 	,"username":"sf10"
		// 	,"name":"SF 10"
		// 	,"password":"$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i"
		// 	,"role":"sp"
		// 	,"active":true
		// 	,"createdAt":now
		// 	,"updatedAt":now
		// },
		// {
		// 	"id":12
		// 	,"username":"sf11"
		// 	,"name":"SF 11"
		// 	,"password":"$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i"
		// 	,"role":"sp"
		// 	,"active":true
		// 	,"createdAt":now
		// 	,"updatedAt":now
		// },
		// {
		// 	"id":13
		// 	,"username":"sf12"
		// 	,"name":"SF 12"
		// 	,"password":"$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i"
		// 	,"role":"sp"
		// 	,"active":true
		// 	,"createdAt":now
		// 	,"updatedAt":now
		// },
		// {
		// 	"id":14
		// 	,"username":"sf13"
		// 	,"name":"SF 13"
		// 	,"password":"$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i"
		// 	,"role":"sp"
		// 	,"active":true
		// 	,"createdAt":now
		// 	,"updatedAt":now
		// },
		// {
		// 	"id":15
		// 	,"username":"sf14"
		// 	,"name":"SF 14"
		// 	,"password":"$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i"
		// 	,"role":"sp"
		// 	,"active":true
		// 	,"createdAt":now
		// 	,"updatedAt":now
		// },
		// {
		// 	"id":16
		// 	,"username":"sf15"
		// 	,"name":"SF 15"
		// 	,"password":"$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i"
		// 	,"role":"sp"
		// 	,"active":true
		// 	,"createdAt":now
		// 	,"updatedAt":now
		// },
		// {
		// 	"id":17
		// 	,"username":"sf16"
		// 	,"name":"SF 16"
		// 	,"password":"$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i"
		// 	,"role":"sp"
		// 	,"active":true
		// 	,"createdAt":now
		// 	,"updatedAt":now
		// },
		// {
		// 	"id":18
		// 	,"username":"sf17"
		// 	,"name":"SF 17"
		// 	,"password":"$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i"
		// 	,"role":"sp"
		// 	,"active":true
		// 	,"createdAt":now
		// 	,"updatedAt":now
		// },
		// {
		// 	"id":19
		// 	,"username":"sf18"
		// 	,"name":"SF 18"
		// 	,"password":"$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i"
		// 	,"role":"sp"
		// 	,"active":true
		// 	,"createdAt":now
		// 	,"updatedAt":now
		// },
		// {
		// 	"id":20
		// 	,"username":"sf19"
		// 	,"name":"SF 19"
		// 	,"password":"$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i"
		// 	,"role":"sp"
		// 	,"active":true
		// 	,"createdAt":now
		// 	,"updatedAt":now
		// },
		// {
		// 	"id":21
		// 	,"username":"sf20"
		// 	,"name":"SF 20"
		// 	,"password":"$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i"
		// 	,"role":"sp"
		// 	,"active":true
		// 	,"createdAt":now
		// 	,"updatedAt":now
		// },
		// {
		// 	"id":22
		// 	,"username":"sf21"
		// 	,"name":"SF 21"
		// 	,"password":"$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i"
		// 	,"role":"sp"
		// 	,"active":true
		// 	,"createdAt":now
		// 	,"updatedAt":now
		// },
		// {
		// 	"id":23
		// 	,"username":"sf22"
		// 	,"name":"SF 22"
		// 	,"password":"$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i"
		// 	,"role":"sp"
		// 	,"active":true
		// 	,"createdAt":now
		// 	,"updatedAt":now
		// },
		// {
		// 	"id":24
		// 	,"username":"sf23"
		// 	,"name":"SF 23"
		// 	,"password":"$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i"
		// 	,"role":"sp"
		// 	,"active":true
		// 	,"createdAt":now
		// 	,"updatedAt":now
		// },
		// {
		// 	"id":25
		// 	,"username":"sf24"
		// 	,"name":"SF 24"
		// 	,"password":"$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i"
		// 	,"role":"sp"
		// 	,"active":true
		// 	,"createdAt":now
		// 	,"updatedAt":now
		// },
		// {
		// 	"id":26
		// 	,"username":"sf25"
		// 	,"name":"SF 25"
		// 	,"password":"$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i"
		// 	,"role":"sp"
		// 	,"active":true
		// 	,"createdAt":now
		// 	,"updatedAt":now
		// },
		// {
		// 	"id":27
		// 	,"username":"sf26"
		// 	,"name":"SF 26"
		// 	,"password":"$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i"
		// 	,"role":"sp"
		// 	,"active":true
		// 	,"createdAt":now
		// 	,"updatedAt":now
		// },
		// {
		// 	"id":28
		// 	,"username":"sf27"
		// 	,"name":"SF 27"
		// 	,"password":"$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i"
		// 	,"role":"sp"
		// 	,"active":true
		// 	,"createdAt":now
		// 	,"updatedAt":now
		// },
		// {
		// 	"id":29
		// 	,"username":"sf28"
		// 	,"name":"SF 28"
		// 	,"password":"$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i"
		// 	,"role":"sp"
		// 	,"active":true
		// 	,"createdAt":now
		// 	,"updatedAt":now
		// },
		// {
		// 	"id":30
		// 	,"username":"sf29"
		// 	,"name":"SF 29"
		// 	,"password":"$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i"
		// 	,"role":"sp"
		// 	,"active":true
		// 	,"createdAt":now
		// 	,"updatedAt":now
		// },
		// {
		// 	"id":31
		// 	,"username":"sf30"
		// 	,"name":"SF 30"
		// 	,"password":"$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i"
		// 	,"role":"sp"
		// 	,"active":true
		// 	,"createdAt":now
		// 	,"updatedAt":now
		// },
		// {
		// 	"id":32
		// 	,"username":"sf31"
		// 	,"name":"SF 31"
		// 	,"password":"$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i"
		// 	,"role":"sp"
		// 	,"active":true
		// 	,"createdAt":now
		// 	,"updatedAt":now
		// },
		// {
		// 	"id":33
		// 	,"username":"sf32"
		// 	,"name":"SF 32"
		// 	,"password":"$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i"
		// 	,"role":"sp"
		// 	,"active":true
		// 	,"createdAt":now
		// 	,"updatedAt":now
		// },
		// {
		// 	"id":34
		// 	,"username":"sf33"
		// 	,"name":"SF 33"
		// 	,"password":"$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i"
		// 	,"role":"sp"
		// 	,"active":true
		// 	,"createdAt":now
		// 	,"updatedAt":now
		// },
		// {
		// 	"id":35
		// 	,"username":"sf34"
		// 	,"name":"SF 34"
		// 	,"password":"$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i"
		// 	,"role":"sp"
		// 	,"active":true
		// 	,"createdAt":now
		// 	,"updatedAt":now
		// },
		// {
		// 	"id":36
		// 	,"username":"sf35"
		// 	,"name":"SF 35"
		// 	,"password":"$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i"
		// 	,"role":"sp"
		// 	,"active":true
		// 	,"createdAt":now
		// 	,"updatedAt":now
		// },
		// {
		// 	"id":37
		// 	,"username":"sf36"
		// 	,"name":"SF 36"
		// 	,"password":"$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i"
		// 	,"role":"sp"
		// 	,"active":true
		// 	,"createdAt":now
		// 	,"updatedAt":now
		// },
		// {
		// 	"id":38
		// 	,"username":"sf37"
		// 	,"name":"SF 37"
		// 	,"password":"$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i"
		// 	,"role":"sp"
		// 	,"active":true
		// 	,"createdAt":now
		// 	,"updatedAt":now
		// },
		// {
		// 	"id":39
		// 	,"username":"sf38"
		// 	,"name":"SF 38"
		// 	,"password":"$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i"
		// 	,"role":"sp"
		// 	,"active":true
		// 	,"createdAt":now
		// 	,"updatedAt":now
		// },
		// {
		// 	"id":40
		// 	,"username":"sf39"
		// 	,"name":"SF 39"
		// 	,"password":"$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i"
		// 	,"role":"sp"
		// 	,"active":true
		// 	,"createdAt":now
		// 	,"updatedAt":now
		// },
		// {
		// 	"id":41
		// 	,"username":"sf40"
		// 	,"name":"SF 40"
		// 	,"password":"$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i"
		// 	,"role":"sp"
		// 	,"active":true
		// 	,"createdAt":now
		// 	,"updatedAt":now
		// },
		// {
		// 	"id":42
		// 	,"username":"sf41"
		// 	,"name":"SF 41"
		// 	,"password":"$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i"
		// 	,"role":"sp"
		// 	,"active":true
		// 	,"createdAt":now
		// 	,"updatedAt":now
		// },
		// {
		// 	"id":43
		// 	,"username":"sf42"
		// 	,"name":"SF 42"
		// 	,"password":"$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i"
		// 	,"role":"sp"
		// 	,"active":true
		// 	,"createdAt":now
		// 	,"updatedAt":now
		// },
		// {
		// 	"id":44
		// 	,"username":"sf43"
		// 	,"name":"SF 43"
		// 	,"password":"$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i"
		// 	,"role":"sp"
		// 	,"active":true
		// 	,"createdAt":now
		// 	,"updatedAt":now
		// },
		// {
		// 	"id":45
		// 	,"username":"sf44"
		// 	,"name":"SF 44"
		// 	,"password":"$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i"
		// 	,"role":"sp"
		// 	,"active":true
		// 	,"createdAt":now
		// 	,"updatedAt":now
		// },
		// {
		// 	"id":46
		// 	,"username":"sf45"
		// 	,"name":"SF 45"
		// 	,"password":"$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i"
		// 	,"role":"sp"
		// 	,"active":true
		// 	,"createdAt":now
		// 	,"updatedAt":now
		// },
		// {
		// 	"id":47
		// 	,"username":"sf46"
		// 	,"name":"SF 46"
		// 	,"password":"$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i"
		// 	,"role":"sp"
		// 	,"active":true
		// 	,"createdAt":now
		// 	,"updatedAt":now
		// },
		// {
		// 	"id":48
		// 	,"username":"sf47"
		// 	,"name":"SF 47"
		// 	,"password":"$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i"
		// 	,"role":"sp"
		// 	,"active":true
		// 	,"createdAt":now
		// 	,"updatedAt":now
		// },
		// {
		// 	"id":49
		// 	,"username":"sf48"
		// 	,"name":"SF 48"
		// 	,"password":"$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i"
		// 	,"role":"sp"
		// 	,"active":true
		// 	,"createdAt":now
		// 	,"updatedAt":now
		// },
		// {
		// 	"id":50
		// 	,"username":"sf49"
		// 	,"name":"SF 49"
		// 	,"password":"$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i"
		// 	,"role":"sp"
		// 	,"active":true
		// 	,"createdAt":now
		// 	,"updatedAt":now
		// },
		// {
		// 	"id":51
		// 	,"username":"sf50"
		// 	,"name":"SF 50"
		// 	,"password":"$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i"
		// 	,"role":"sp"
		// 	,"active":true
		// 	,"createdAt":now
		// 	,"updatedAt":now
		// }])
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
