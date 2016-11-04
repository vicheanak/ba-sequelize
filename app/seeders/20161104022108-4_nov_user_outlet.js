var moment = require('moment');
'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    var now = moment().format("YYYY-MM-DD HH:mm:ss");
    // return queryInterface.bulkInsert('UserOutlets',
    //   [
    //    {
    //      "id": 51,
    //      "UserId": 52,
    //      "OutletId": 51,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 52,
    //      "UserId": 53,
    //      "OutletId": 52,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 53,
    //      "UserId": 54,
    //      "OutletId": 53,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 54,
    //      "UserId": 55,
    //      "OutletId": 54,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 55,
    //      "UserId": 56,
    //      "OutletId": 55,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 56,
    //      "UserId": 57,
    //      "OutletId": 56,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 57,
    //      "UserId": 58,
    //      "OutletId": 57,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 58,
    //      "UserId": 59,
    //      "OutletId": 58,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 59,
    //      "UserId": 60,
    //      "OutletId": 59,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 60,
    //      "UserId": 61,
    //      "OutletId": 60,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 61,
    //      "UserId": 62,
    //      "OutletId": 61,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 62,
    //      "UserId": 63,
    //      "OutletId": 62,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 63,
    //      "UserId": 64,
    //      "OutletId": 63,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 64,
    //      "UserId": 65,
    //      "OutletId": 64,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 65,
    //      "UserId": 66,
    //      "OutletId": 65,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 66,
    //      "UserId": 67,
    //      "OutletId": 66,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 67,
    //      "UserId": 68,
    //      "OutletId": 67,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 68,
    //      "UserId": 69,
    //      "OutletId": 68,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 69,
    //      "UserId": 70,
    //      "OutletId": 69,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 70,
    //      "UserId": 71,
    //      "OutletId": 70,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 71,
    //      "UserId": 72,
    //      "OutletId": 71,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 72,
    //      "UserId": 73,
    //      "OutletId": 72,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 73,
    //      "UserId": 74,
    //      "OutletId": 73,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 74,
    //      "UserId": 75,
    //      "OutletId": 74,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 75,
    //      "UserId": 76,
    //      "OutletId": 75,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 76,
    //      "UserId": 77,
    //      "OutletId": 76,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 77,
    //      "UserId": 78,
    //      "OutletId": 77,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 78,
    //      "UserId": 79,
    //      "OutletId": 78,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 79,
    //      "UserId": 80,
    //      "OutletId": 79,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 80,
    //      "UserId": 81,
    //      "OutletId": 80,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 81,
    //      "UserId": 82,
    //      "OutletId": 81,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 82,
    //      "UserId": 83,
    //      "OutletId": 82,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 83,
    //      "UserId": 84,
    //      "OutletId": 83,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 84,
    //      "UserId": 85,
    //      "OutletId": 84,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 85,
    //      "UserId": 86,
    //      "OutletId": 85,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 86,
    //      "UserId": 87,
    //      "OutletId": 86,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 87,
    //      "UserId": 88,
    //      "OutletId": 87,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 88,
    //      "UserId": 89,
    //      "OutletId": 88,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 89,
    //      "UserId": 90,
    //      "OutletId": 89,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 90,
    //      "UserId": 91,
    //      "OutletId": 90,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 91,
    //      "UserId": 92,
    //      "OutletId": 91,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 92,
    //      "UserId": 93,
    //      "OutletId": 92,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 93,
    //      "UserId": 94,
    //      "OutletId": 93,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 94,
    //      "UserId": 95,
    //      "OutletId": 94,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 95,
    //      "UserId": 96,
    //      "OutletId": 95,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 96,
    //      "UserId": 97,
    //      "OutletId": 96,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 97,
    //      "UserId": 98,
    //      "OutletId": 97,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 98,
    //      "UserId": 99,
    //      "OutletId": 98,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 99,
    //      "UserId": 100,
    //      "OutletId": 99,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 100,
    //      "UserId": 101,
    //      "OutletId": 100,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 101,
    //      "UserId": 102,
    //      "OutletId": 101,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 102,
    //      "UserId": 103,
    //      "OutletId": 102,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 103,
    //      "UserId": 104,
    //      "OutletId": 103,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 104,
    //      "UserId": 105,
    //      "OutletId": 104,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 105,
    //      "UserId": 106,
    //      "OutletId": 105,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 106,
    //      "UserId": 107,
    //      "OutletId": 106,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 107,
    //      "UserId": 108,
    //      "OutletId": 107,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 108,
    //      "UserId": 109,
    //      "OutletId": 108,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 109,
    //      "UserId": 110,
    //      "OutletId": 109,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 110,
    //      "UserId": 111,
    //      "OutletId": 110,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 111,
    //      "UserId": 112,
    //      "OutletId": 111,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 112,
    //      "UserId": 113,
    //      "OutletId": 112,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 113,
    //      "UserId": 114,
    //      "OutletId": 113,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 114,
    //      "UserId": 115,
    //      "OutletId": 114,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 115,
    //      "UserId": 116,
    //      "OutletId": 115,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 116,
    //      "UserId": 117,
    //      "OutletId": 116,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 117,
    //      "UserId": 118,
    //      "OutletId": 117,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 118,
    //      "UserId": 119,
    //      "OutletId": 118,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 119,
    //      "UserId": 120,
    //      "OutletId": 119,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 120,
    //      "UserId": 121,
    //      "OutletId": 120,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 121,
    //      "UserId": 122,
    //      "OutletId": 121,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 122,
    //      "UserId": 123,
    //      "OutletId": 122,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 123,
    //      "UserId": 124,
    //      "OutletId": 123,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 124,
    //      "UserId": 125,
    //      "OutletId": 124,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 125,
    //      "UserId": 126,
    //      "OutletId": 125,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 126,
    //      "UserId": 127,
    //      "OutletId": 126,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 127,
    //      "UserId": 128,
    //      "OutletId": 127,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 128,
    //      "UserId": 129,
    //      "OutletId": 128,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 129,
    //      "UserId": 130,
    //      "OutletId": 129,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 130,
    //      "UserId": 131,
    //      "OutletId": 130,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 131,
    //      "UserId": 132,
    //      "OutletId": 131,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 132,
    //      "UserId": 133,
    //      "OutletId": 132,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 133,
    //      "UserId": 134,
    //      "OutletId": 133,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 134,
    //      "UserId": 135,
    //      "OutletId": 134,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 135,
    //      "UserId": 136,
    //      "OutletId": 135,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 136,
    //      "UserId": 137,
    //      "OutletId": 136,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 137,
    //      "UserId": 138,
    //      "OutletId": 137,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 138,
    //      "UserId": 139,
    //      "OutletId": 138,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 139,
    //      "UserId": 140,
    //      "OutletId": 139,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 140,
    //      "UserId": 141,
    //      "OutletId": 140,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 141,
    //      "UserId": 142,
    //      "OutletId": 141,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 142,
    //      "UserId": 143,
    //      "OutletId": 142,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 143,
    //      "UserId": 144,
    //      "OutletId": 143,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 144,
    //      "UserId": 145,
    //      "OutletId": 144,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 145,
    //      "UserId": 146,
    //      "OutletId": 145,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 146,
    //      "UserId": 147,
    //      "OutletId": 146,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 147,
    //      "UserId": 148,
    //      "OutletId": 147,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 148,
    //      "UserId": 149,
    //      "OutletId": 148,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 149,
    //      "UserId": 150,
    //      "OutletId": 149,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 150,
    //      "UserId": 151,
    //      "OutletId": 150,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 151,
    //      "UserId": 152,
    //      "OutletId": 151,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 152,
    //      "UserId": 153,
    //      "OutletId": 152,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 153,
    //      "UserId": 154,
    //      "OutletId": 153,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 154,
    //      "UserId": 155,
    //      "OutletId": 154,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 155,
    //      "UserId": 156,
    //      "OutletId": 155,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 156,
    //      "UserId": 157,
    //      "OutletId": 156,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 157,
    //      "UserId": 158,
    //      "OutletId": 157,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 158,
    //      "UserId": 159,
    //      "OutletId": 158,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 159,
    //      "UserId": 160,
    //      "OutletId": 159,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 160,
    //      "UserId": 161,
    //      "OutletId": 160,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 161,
    //      "UserId": 162,
    //      "OutletId": 161,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 162,
    //      "UserId": 163,
    //      "OutletId": 162,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 163,
    //      "UserId": 164,
    //      "OutletId": 163,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 164,
    //      "UserId": 165,
    //      "OutletId": 164,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 165,
    //      "UserId": 166,
    //      "OutletId": 165,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 166,
    //      "UserId": 167,
    //      "OutletId": 166,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 167,
    //      "UserId": 168,
    //      "OutletId": 167,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 168,
    //      "UserId": 169,
    //      "OutletId": 168,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 169,
    //      "UserId": 170,
    //      "OutletId": 169,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 170,
    //      "UserId": 171,
    //      "OutletId": 170,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 171,
    //      "UserId": 172,
    //      "OutletId": 171,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 172,
    //      "UserId": 173,
    //      "OutletId": 172,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 173,
    //      "UserId": 174,
    //      "OutletId": 173,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 174,
    //      "UserId": 175,
    //      "OutletId": 174,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 175,
    //      "UserId": 176,
    //      "OutletId": 175,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 176,
    //      "UserId": 177,
    //      "OutletId": 176,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 177,
    //      "UserId": 178,
    //      "OutletId": 177,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 178,
    //      "UserId": 179,
    //      "OutletId": 178,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 179,
    //      "UserId": 180,
    //      "OutletId": 179,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 180,
    //      "UserId": 181,
    //      "OutletId": 180,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 181,
    //      "UserId": 182,
    //      "OutletId": 181,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 182,
    //      "UserId": 183,
    //      "OutletId": 182,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 183,
    //      "UserId": 184,
    //      "OutletId": 183,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 184,
    //      "UserId": 185,
    //      "OutletId": 184,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 185,
    //      "UserId": 186,
    //      "OutletId": 185,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 186,
    //      "UserId": 187,
    //      "OutletId": 186,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 187,
    //      "UserId": 188,
    //      "OutletId": 187,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 188,
    //      "UserId": 189,
    //      "OutletId": 188,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 189,
    //      "UserId": 190,
    //      "OutletId": 189,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 190,
    //      "UserId": 191,
    //      "OutletId": 190,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 191,
    //      "UserId": 192,
    //      "OutletId": 191,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 192,
    //      "UserId": 193,
    //      "OutletId": 192,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 193,
    //      "UserId": 194,
    //      "OutletId": 193,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 194,
    //      "UserId": 195,
    //      "OutletId": 194,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 195,
    //      "UserId": 196,
    //      "OutletId": 195,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 196,
    //      "UserId": 197,
    //      "OutletId": 196,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 197,
    //      "UserId": 198,
    //      "OutletId": 197,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 198,
    //      "UserId": 199,
    //      "OutletId": 198,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 199,
    //      "UserId": 200,
    //      "OutletId": 199,
    //      "createdAt": now,
    //      "updatedAt": now
    //    },
    //    {
    //      "id": 200,
    //      "UserId": 201,
    //      "OutletId": 200,
    //      "createdAt": now,
    //      "updatedAt": now
    //    }
    //   ]
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
