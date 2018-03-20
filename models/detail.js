var Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  var detail = sequelize.define("detail", {
    
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

  }, {
      freezeTableName: true,
      underscored: true
    }
  );

  detail.associate = function (models) {
    detail.belongsTo(models.pr, {
      foreignKey: "request_id"
    });
  };

  detail.associate = function (models) {
    detail.hasMany(models.item, {
      foreignKey: "item_id"
    });
  };
    
  return detail;
  
};
