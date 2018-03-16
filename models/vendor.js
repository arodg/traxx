var Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  var vendor = sequelize.define("vendor", {
    
    vendor_name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    description: {
      type: DataTypes.STRING,
      allowNull: false
    },

    phone: {
      type: DataTypes.STRING,
      allowNull: false
    },

    contact_name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false
    }

    website: {
      type: DataTypes.STRING,
      allowNull: false
    }
  
  });
    
  return vendor;
};

