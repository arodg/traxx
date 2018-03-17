var Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  var vendor = sequelize.define("vendors", {
    
    vendor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },

    company_name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    contact_name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    contact_phone: {
      type: DataTypes.STRING,
      allowNull: false
    },

    contact_email: {
      type: DataTypes.STRING,
      allowNull: false
    },

    website: {
      type: DataTypes.STRING,
      allowNull: false
    }
  
  });
    
  return vendor;
};

