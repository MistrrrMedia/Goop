/**
 * @created : 2024 04 15
 * @author  : Nicholas (Nick) Nguyen, Chinh (Aki) Nguyen, Zai Erb
 * @version : 0.0.1n
 * @changes : 0.0.1 - Created the file
 * 
 * @TODO    : 2024 04 15 
 *            
 */

const fs = require('fs');
const credentials = JSON.parse( fs.readFileSync( './credentials.json', 'utf8' ) );

const mysql = require('mysql');
const dbConfig = {
	host: credentials.host,
	port: credentials.port,
	user: credentials.user,
	password: credentials.password,
	database: credentials.database
};

const connection = mysql.createConnection(dbConfig);

connection.connect(error => {
	if(error) console.error('Error connecting to the dartabase:', error);
	else console.log("Successfully connected to goop's database.");
});

module.exports = connection;