const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('library_geo_db', 'root', '1234ag56', {
    host: 'localhost',
    port: 3307,
    dialect: 'mysql',
    logging: false
});

module.exports = sequelize;