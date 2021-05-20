const Sequelize = require('sequelize')
//Conexão com o MariaDB
const sequelize = new Sequelize('taskList', 'root', 'mat181297', {
    host: "localhost",
    dialect: 'mariadb'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}