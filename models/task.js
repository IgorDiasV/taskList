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
        type: db.Sequelize.STRING,
        allowNull: false
    },
    segundas: {
        type: db.Sequelize.BOOLEAN,
        allowNull: false
    },
    tercas: {
        type: db.Sequelize.BOOLEAN,
        allowNull: false
    },
    quartas: {
        type: db.Sequelize.BOOLEAN,
        allowNull: false
    },
    quintas: {
        type: db.Sequelize.BOOLEAN,
        allowNull: false
    },
    sextas: {
        type: db.Sequelize.BOOLEAN,
        allowNull: false
    },
    sabados: {
        type: db.Sequelize.BOOLEAN,
        allowNull: false
    },
    horas: {
        type: db.Sequelize.DATETIME,
        allowNull: false
    },
    tempos: {
        type: db.Sequelize.INTEGER,
        allowNull: false
    },
    replays: {
        type: db.Sequelize.BOOLEAN
    }
});

//task.sync({force:true})

module.exports = task