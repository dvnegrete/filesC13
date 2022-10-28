require("dotenv").config();

const config = {
    port : process.env.PORT,
    host: process.env.HOST,
    azureStorageConnection: process.env.AZURE_STORAGE_CONNECTION
};

module.exports = config;