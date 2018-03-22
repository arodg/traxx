var Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  var Item = sequelize.define("Item", {
    
    request_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },

    item_name: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    unit_price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },

    extended_price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },

  }, {
      freezeTableName: true,
      underscored: true
    }
  );

  Item.associate = function (models) {
    Item.belongsTo(models.Pr, {
      foreignKey: "request_id"
    });
  };

    
  return Item;
  
};
