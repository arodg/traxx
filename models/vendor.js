var Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  var vendor = sequelize.define("vendor", {
    
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

    security_role: {
      type: DataTypes.STRING,
      allowNull: false
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false
    }
  
  });
    
  return vendor;
};

