var Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  var trax_user = sequelize.define("employee", {
    
    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    username: {
      type: DataTypes.STRING,
      allowNull: false
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false
    }
  
  });
    
  return employee;
};


