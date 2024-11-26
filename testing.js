// kiểm tra xem kết nối với database và redis có thành công không

const {connectToDatabase} = require('./config/database');
const {redisConnect} = require('./config/caching');
async function main() {
  await connectToDatabase();
  await redisConnect();
}
main();