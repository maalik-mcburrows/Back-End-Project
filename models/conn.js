const pgp = require('pg-promise')({
  query: e => {
    console.log('QUERY:', e.query);
  }
});

const options = {
  host: 'drona.db.elephantsql.com',
  database: 'mlsivupc',
  user: 'mlsivupc',
  password: 'BqNo7yDzbTo2fG2fbE_Cq3ITFT0isKJu'
};

const db = pgp(options);

module.exports = db;
