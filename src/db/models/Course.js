const {DataTypes} = require('sequelize');

module.exports = (sequelize)=>{
    const Course = sequelize.define("Course",{
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
    },{
        timestamps:false
    })
    
  Course.associate = (models) => {
    Course.hasMany(models.Teacher, {
      foreignKey: 'CourseId',
      as: 'teachers',
    });
  };

  return Course;
}