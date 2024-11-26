const accountmodel = require('../models/account');

async function getaccount(req ,res){
    try{
        const result= await accountmodel.getaccounts();
        res.render('account',{ accounts : result });
    }catch(err){
        console.log('Error: ',err);
    }
}
async function getaccountByID(req,res) {
    try{
        const result= await accountmodel.getaccountByID(account_id);
        res.render('account',{ accounts : result });
    }catch(err){
        console.log('Error: ',err);
    }
}
module.exports={
    getaccount,
    getaccountByID
}