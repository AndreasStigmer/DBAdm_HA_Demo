const config = {
    user:"<SQLServerUser>",
    password:"<Password>",
    server:"<AG Listener>",
    database:"HA_DB",
    options: {
        trustedConnection:false,
        trustServerCertificate:true,
        enableArithPort:true,
        
    },
    port : 1433
}
module.exports = config;