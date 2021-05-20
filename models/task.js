const db = require('./db')

const task = db.sequelize.define('tasks',{
    id: {
        type: db.Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
    nomes: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    domingos: {
        type: db.Sequelize.BOOLEAN,
    },
    segundas: {
        type: db.Sequelize.BOOLEAN,
    },
    tercas: {
        type: db.Sequelize.BOOLEAN,
    },
    quartas: {
        type: db.Sequelize.BOOLEAN,
    },
    quintas: {
        type: db.Sequelize.BOOLEAN,
    },
    sextas: {
        type: db.Sequelize.BOOLEAN,
    },
    sabados: {
        type: db.Sequelize.BOOLEAN,
    },
    horas: {
        type: db.Sequelize.TIME,
        allowNull: false
    },
    intervalos: {
        type: db.Sequelize.INTEGER,
        allowNull: false
    },
    replays: {
        type: db.Sequelize.BOOLEAN
    }
});

//task.sync({force:true})

module.exports = task