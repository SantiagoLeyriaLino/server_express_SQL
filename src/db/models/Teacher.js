const {DataTypes} = require('sequelize');

module.exports = (sequelize)=>{
    const Teacher = sequelize.define("Teacher",{
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
            allowNule: false
        },
        avatar:{
            type: DataTypes.TEXT
        },
        email:{
            type: DataTypes.STRING
        }, 
    },{
        timestamps:false
    })
    Teacher.associate = (models) => {
        Teacher.belongsTo(models.Course, {
            foreignKey: 'CourseId',
            as: 'course',
        }); // Establece la relación belongsTo con el modelo Course
      };
    
      return Teacher;
}