const { Pool } = require('pg');

const connectionString ="postgresql://postgres.nkwboenykvycdejtjywu:gInpZpRKe9dogt7j@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres";
const config = {
  connectionString:connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
};

const pool = new Pool(config);

const connectToDatabase = async () => {
  try {
    const client = await pool.connect();
    console.log('Connected to the database successfully.');
    client.release();
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

module.exports = {
  connectToDatabase,
  pool,
  config,
};
