const PORT = process.env.PORT || 8080

const MONGO_USER = process.env.MONGO_USER || 'kimkuns'
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || 'rlawldi98'
const MONGO_CLUSTER = process.env.MONGO_CLUSTER || 'cluster0.qtkzt.mongodb.net'
const MONGO_DBNAME = process.env.MONGO_DBNAME || 'WhiteMouseProjects'
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || 'FDV11fSVCEWWFSDFDSFDSFVCXCC';
/* eslint-disable prefer-destructuring */

/** @type {string} */
const APP_CONFIG_JSON = JSON.stringify({
    PORT,
    MONGO_USER,
    MONGO_PASSWORD,
    MONGO_CLUSTER,
    MONGO_DBNAME,
    JWT_SECRET_KEY
}).replace(/"/g, '\\"')

module.exports = {
    APP_CONFIG_JSON,
    PORT,
    MONGO_USER,
    MONGO_PASSWORD,
    MONGO_CLUSTER,
    MONGO_DBNAME,
    JWT_SECRET_KEY
}
