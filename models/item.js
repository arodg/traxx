var Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  var item = sequelize.define("item", {
    
    item_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },

    request_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    item_name: {
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

