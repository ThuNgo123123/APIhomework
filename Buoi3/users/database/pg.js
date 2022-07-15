// const { Client } = require('camunda-external-task-client-js');
const { Pool, Client } = require ('pg');
const connectionString = 'postgresql://username:password@127.0.0.1/default_database';
const client = new Client({
    connectionString,
})
client.connect();
module.exports = client;
console.log(client);
