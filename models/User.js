module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define('User', {
      // Model attributes are defined here
      firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING
        // allowNull defaults to true
      },
      username:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      
      email: {
        type: DataTypes.STRING,
        validate: { isEmail: true },
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    
    },
   
    
    });
    // User.associate = function(models) {
    //     User.belongsTo(models.User);
    //     User.hasMany(models.Message)
    //   };
    return User
    }