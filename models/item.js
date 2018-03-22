var Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  var Item = sequelize.define("Item", {
    
    request_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    item_name: {
      type: DataTypes.STRING,
    },

    quantity: {
      type: DataTypes.INTEGER,
    },

    unit_price: {
      type: DataTypes.DECIMAL,
    },

    extended_price: {
      type: DataTypes.DECIMAL,
    },

  }, {
      freezeTableName: true,
      underscored: true
    }
  );

  return Item;
  
};
