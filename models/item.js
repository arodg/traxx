var Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  var item = sequelize.define("item", {
    
    purchase_request_request_number: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    item_name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    serial_number: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    quanitity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    unit_of_measure: {
      type: DataTypes.STRING,
      allowNull: false
    },

    price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  
  });
    
  return item;
};

