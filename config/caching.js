const { createClient } = require('redis');

const host = "redis-12201.c17.us-east-1-4.ec2.redns.redis-cloud.com";
const port = "12201";

const client = createClient({
  password: "u0WIDqmvrneqaQfQlFoTV2smE2vWOL1q", // password của redis
  socket: {
    host: host,
    port: port,
    connectTimeout: 7200000, 
  },
});

client.on('error', (err) => {
  console.error('Redis client error:', err);
});

client.on('end', () => {
  console.log('Redis client disconnected');
});

async function redisConnect() {
  if (!client.isOpen) {
    await client.connect();
    console.log('Redis client connected');
  }
}

module.exports = { client, redisConnect };
