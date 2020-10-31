const sequelize = require('sequelize');
const db = new sequelize('postgres://cvptviaaptsgte:f69ece92bce6597973abf21e42c05bd6c41b647ec99bf64a98387a8ac5ee717c@ec2-23-20-70-32.compute-1.amazonaws.com:5432/d941dkj96ohlhb')
    // const db = new sequelize({
    //     dialect: 'sqlite',
    //     storage: __dirname + '/test.db'
    // })
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