const {pool} = require('../../config/database');

// async functinon hàm bất đồng bộ
async function getaccounts() { 
    const client = await pool.connect();
    try{
        const query = 'select * from accounts ';
        const result = await client.query(query);
        return result.rows;
    }catch(err){
        console.log('Error: ',err);
    }
} 

async function getaccountByID(account_id) {
    const client = await pool.connect();
    try{
        const query = `select * from accounts where account_id = ${account_id}`
        const values = [account_id];
        const result = await client.query(query,values);
        return result.rows;
    }catch(err){
        console.log('Error: ',err);
    }
}
module.exports = {
    getaccounts,
    getaccountByID
}