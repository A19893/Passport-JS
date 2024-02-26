require("dotenv").config();
module.exports = {
    PORT : process.env.APP_PORT,
    DATABASE_URL : process.env.MONGO_URL
}