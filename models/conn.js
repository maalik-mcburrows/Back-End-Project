require('dotenv').config();

const pgp = require('pg-promise')({
  query: e => {
    console.log('QUERY:', e.query);
  }
});

const options = {
  host: process.env['DB_HOST'],
  database: process.env['DB_NAME'],
  user: 'mlsivupc',
  password: 'BqNo7yDzbTo2fG2fbE_Cq3ITFT0isKJu'
};

const db = pgp(options);

module.exports = db;
