const sequelize = require('sequelize');
const db = new sequelize({
    dialect: 'sqlite',
    storage: __dirname + '/test.db'
})
const users = db.define('user', {
    id: {
        type: sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    username: {
        type: sequelize.DataTypes.STRING(100),
        allowNull: false
    },
    password: {
        type: sequelize.DataTypes.STRING(100),
        allowNull: false
    }
})

const datas = db.define('data', {
    id: {
        type: sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nodes: sequelize.DataTypes.STRING(1000),
    edges: {
        type: sequelize.DataTypes.STRING(1000)
    }
})

users.hasMany(datas);
datas.belongsTo(users);



module.exports = {
    users,
    datas,
    db

}