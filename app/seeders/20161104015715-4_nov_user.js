var moment = require('moment');
'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    var now = moment().format("YYYY-MM-DD HH:mm:ss");

    return queryInterface.bulkInsert('Users',
      [
         {
           "id": 52,
           "username": "sf51",
           "name": "SF 51",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 53,
           "username": "sf52",
           "name": "SF 52",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 54,
           "username": "sf53",
           "name": "SF 53",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 55,
           "username": "sf54",
           "name": "SF 54",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 56,
           "username": "sf55",
           "name": "SF 55",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 57,
           "username": "sf56",
           "name": "SF 56",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 58,
           "username": "sf57",
           "name": "SF 57",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 59,
           "username": "sf58",
           "name": "SF 58",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 60,
           "username": "sf59",
           "name": "SF 59",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 61,
           "username": "sf60",
           "name": "SF 60",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 62,
           "username": "sf61",
           "name": "SF 61",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 63,
           "username": "sf62",
           "name": "SF 62",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 64,
           "username": "sf63",
           "name": "SF 63",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 65,
           "username": "sf64",
           "name": "SF 64",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 66,
           "username": "sf65",
           "name": "SF 65",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 67,
           "username": "sf66",
           "name": "SF 66",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 68,
           "username": "sf67",
           "name": "SF 67",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 69,
           "username": "sf68",
           "name": "SF 68",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 70,
           "username": "sf69",
           "name": "SF 69",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 71,
           "username": "sf70",
           "name": "SF 70",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 72,
           "username": "sf71",
           "name": "SF 71",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 73,
           "username": "sf72",
           "name": "SF 72",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 74,
           "username": "sf73",
           "name": "SF 73",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 75,
           "username": "sf74",
           "name": "SF 74",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 76,
           "username": "sf75",
           "name": "SF 75",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 77,
           "username": "sf76",
           "name": "SF 76",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 78,
           "username": "sf77",
           "name": "SF 77",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 79,
           "username": "sf78",
           "name": "SF 78",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 80,
           "username": "sf79",
           "name": "SF 79",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 81,
           "username": "sf80",
           "name": "SF 80",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 82,
           "username": "sf81",
           "name": "SF 81",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 83,
           "username": "sf82",
           "name": "SF 82",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 84,
           "username": "sf83",
           "name": "SF 83",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 85,
           "username": "sf84",
           "name": "SF 84",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 86,
           "username": "sf85",
           "name": "SF 85",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 87,
           "username": "sf86",
           "name": "SF 86",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 88,
           "username": "sf87",
           "name": "SF 87",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 89,
           "username": "sf88",
           "name": "SF 88",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 90,
           "username": "sf89",
           "name": "SF 89",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 91,
           "username": "sf90",
           "name": "SF 90",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 92,
           "username": "sf91",
           "name": "SF 91",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 93,
           "username": "sf92",
           "name": "SF 92",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 94,
           "username": "sf93",
           "name": "SF 93",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 95,
           "username": "sf94",
           "name": "SF 94",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 96,
           "username": "sf95",
           "name": "SF 95",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 97,
           "username": "sf96",
           "name": "SF 96",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 98,
           "username": "sf97",
           "name": "SF 97",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 99,
           "username": "sf98",
           "name": "SF 98",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 100,
           "username": "sf99",
           "name": "SF 99",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 101,
           "username": "sf100",
           "name": "SF 100",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 102,
           "username": "sf101",
           "name": "SF 101",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 103,
           "username": "sf102",
           "name": "SF 102",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 104,
           "username": "sf103",
           "name": "SF 103",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 105,
           "username": "sf104",
           "name": "SF 104",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 106,
           "username": "sf105",
           "name": "SF 105",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 107,
           "username": "sf106",
           "name": "SF 106",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 108,
           "username": "sf107",
           "name": "SF 107",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 109,
           "username": "sf108",
           "name": "SF 108",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 110,
           "username": "sf109",
           "name": "SF 109",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 111,
           "username": "sf110",
           "name": "SF 110",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 112,
           "username": "sf111",
           "name": "SF 111",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 113,
           "username": "sf112",
           "name": "SF 112",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 114,
           "username": "sf113",
           "name": "SF 113",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 115,
           "username": "sf114",
           "name": "SF 114",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 116,
           "username": "sf115",
           "name": "SF 115",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 117,
           "username": "sf116",
           "name": "SF 116",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 118,
           "username": "sf117",
           "name": "SF 117",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 119,
           "username": "sf118",
           "name": "SF 118",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 120,
           "username": "sf119",
           "name": "SF 119",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 121,
           "username": "sf120",
           "name": "SF 120",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 122,
           "username": "sf121",
           "name": "SF 121",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 123,
           "username": "sf122",
           "name": "SF 122",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 124,
           "username": "sf123",
           "name": "SF 123",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 125,
           "username": "sf124",
           "name": "SF 124",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 126,
           "username": "sf125",
           "name": "SF 125",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 127,
           "username": "sf126",
           "name": "SF 126",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 128,
           "username": "sf127",
           "name": "SF 127",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 129,
           "username": "sf128",
           "name": "SF 128",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 130,
           "username": "sf129",
           "name": "SF 129",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 131,
           "username": "sf130",
           "name": "SF 130",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 132,
           "username": "sf131",
           "name": "SF 131",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 133,
           "username": "sf132",
           "name": "SF 132",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 134,
           "username": "sf133",
           "name": "SF 133",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 135,
           "username": "sf134",
           "name": "SF 134",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 136,
           "username": "sf135",
           "name": "SF 135",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 137,
           "username": "sf136",
           "name": "SF 136",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 138,
           "username": "sf137",
           "name": "SF 137",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 139,
           "username": "sf138",
           "name": "SF 138",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 140,
           "username": "sf139",
           "name": "SF 139",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 141,
           "username": "sf140",
           "name": "SF 140",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 142,
           "username": "sf141",
           "name": "SF 141",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 143,
           "username": "sf142",
           "name": "SF 142",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 144,
           "username": "sf143",
           "name": "SF 143",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 145,
           "username": "sf144",
           "name": "SF 144",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 146,
           "username": "sf145",
           "name": "SF 145",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 147,
           "username": "sf146",
           "name": "SF 146",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 148,
           "username": "sf147",
           "name": "SF 147",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 149,
           "username": "sf148",
           "name": "SF 148",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 150,
           "username": "sf149",
           "name": "SF 149",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 151,
           "username": "sf150",
           "name": "SF 150",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 152,
           "username": "sf151",
           "name": "SF 151",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 153,
           "username": "sf152",
           "name": "SF 152",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 154,
           "username": "sf153",
           "name": "SF 153",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 155,
           "username": "sf154",
           "name": "SF 154",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 156,
           "username": "sf155",
           "name": "SF 155",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 157,
           "username": "sf156",
           "name": "SF 156",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 158,
           "username": "sf157",
           "name": "SF 157",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 159,
           "username": "sf158",
           "name": "SF 158",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 160,
           "username": "sf159",
           "name": "SF 159",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 161,
           "username": "sf160",
           "name": "SF 160",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 162,
           "username": "sf161",
           "name": "SF 161",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 163,
           "username": "sf162",
           "name": "SF 162",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 164,
           "username": "sf163",
           "name": "SF 163",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 165,
           "username": "sf164",
           "name": "SF 164",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 166,
           "username": "sf165",
           "name": "SF 165",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 167,
           "username": "sf166",
           "name": "SF 166",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 168,
           "username": "sf167",
           "name": "SF 167",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 169,
           "username": "sf168",
           "name": "SF 168",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 170,
           "username": "sf169",
           "name": "SF 169",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 171,
           "username": "sf170",
           "name": "SF 170",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 172,
           "username": "sf171",
           "name": "SF 171",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 173,
           "username": "sf172",
           "name": "SF 172",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 174,
           "username": "sf173",
           "name": "SF 173",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 175,
           "username": "sf174",
           "name": "SF 174",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 176,
           "username": "sf175",
           "name": "SF 175",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 177,
           "username": "sf176",
           "name": "SF 176",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 178,
           "username": "sf177",
           "name": "SF 177",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 179,
           "username": "sf178",
           "name": "SF 178",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 180,
           "username": "sf179",
           "name": "SF 179",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 181,
           "username": "sf180",
           "name": "SF 180",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 182,
           "username": "sf181",
           "name": "SF 181",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 183,
           "username": "sf182",
           "name": "SF 182",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 184,
           "username": "sf183",
           "name": "SF 183",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 185,
           "username": "sf184",
           "name": "SF 184",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 186,
           "username": "sf185",
           "name": "SF 185",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 187,
           "username": "sf186",
           "name": "SF 186",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 188,
           "username": "sf187",
           "name": "SF 187",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 189,
           "username": "sf188",
           "name": "SF 188",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 190,
           "username": "sf189",
           "name": "SF 189",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 191,
           "username": "sf190",
           "name": "SF 190",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 192,
           "username": "sf191",
           "name": "SF 191",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 193,
           "username": "sf192",
           "name": "SF 192",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 194,
           "username": "sf193",
           "name": "SF 193",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 195,
           "username": "sf194",
           "name": "SF 194",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 196,
           "username": "sf195",
           "name": "SF 195",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 197,
           "username": "sf196",
           "name": "SF 196",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 198,
           "username": "sf197",
           "name": "SF 197",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 199,
           "username": "sf198",
           "name": "SF 198",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 200,
           "username": "sf199",
           "name": "SF 199",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         },
         {
           "id": 201,
           "username": "sf200",
           "name": "SF 200",
           "password": "$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i",
           "role": "sp",
           "active": true,
           "createdAt": now,
           "updatedAt": now
         }
        ]
)
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
