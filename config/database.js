const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('library_geo_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

module.exports = sequelize;