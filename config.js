if (process.env.NODE_ENV !== "production") require("dotenv").config();

const dbUrl = process.env.DATABASE_URL.replace("mysql://", "");

const [user, password] = dbUrl.match(/\b\w+\b/ig);
const host = dbUrl.match(/@\b[\w\W]+\b\//i)[0].replace(/[@/]/g, "");
const database = dbUrl.match(/\/\b[\w\W]+\b\?/i)[0].replace(/[?/]/g, "");
// let options = dbUrl.match(/\?\b[\w\W]+/ig)[0].replace("?", "");

// const {log} = require("./logging");
// log(user, password, host, database);

process.env.VARS = {
  host, database, user, password,
};

module.exports = process.env.VARS;
