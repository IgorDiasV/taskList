const db = require('./db')

const check_task = db.sequelize.define('check_tasks',{
    id_check: {
        type: db.Sequelize.INTEGER,
        primaryKey:true,
        allowNull: false,
        references:{
            model:'tasks',
            key:'id'
        }
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
    }
});

//check_task.sync({force:true})

module.exports = check_task