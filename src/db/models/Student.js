const {DataTypes} = require('sequelize');

module.exports = (sequelize)=>{
    sequelize.define("Student",{
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name:{
            type: DataTypes.STRING,
            allowNule: false
        },
        edad:{
            type: DataTypes.INTEGER,
        },
    },{
        timestamps: false
    })
}