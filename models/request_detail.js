var Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  var request_detail = sequelize.define("request_details", {
    
    request_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },

    item_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
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

    request_line_number: {
      type: DataTypes.INTEGER,
      allowNull: false
    }

  });

  request_detail.associate = function (models) {
    request_detail.belongsTo(models.purchase_requests, {
      foreignKey: "request_id"
    });
  };

  request_detail.associate = function (models) {
    request_detail.hasMany(models.items, {
      foreignKey: "item_id"
    });
  };
    
  return request_detail;
  
};
