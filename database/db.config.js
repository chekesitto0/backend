const moment = require('moment-timezone');

// module.exports = {
//     host: 'localhost',
//     user:'vicmar',
//     password:'1QA2WS3E',
//     database: 'test',
//     waitForConnections:true,
//     connectionLimit:10,
//     queueLimit:0,
//     timezone: moment.tz('America/Chihuahua').format('Z')
// };

module.exports = {
    host: 'bd9z2ehhvje7ypfkkgke-mysql.services.clever-cloud.com',
    user:'u8nfb9dsmomkkbok',
    port: 3306,
    password:'IcTcWlznaDVsFi5AAprz',
    database: 'bd9z2ehhvje7ypfkkgke',
    waitForConnections:true,
    connectionLimit:10,
    queueLimit:0,
    timezone: moment.tz('America/Chihuahua').format('Z')
};
