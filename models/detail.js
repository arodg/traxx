var Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  var Detail = sequelize.define("Detail", {
    
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

  Detail.associate = function (models) {
    Detail.belongsTo(models.Pr, {
      foreignKey: "request_id"
    });
  };

  Detail.associate = function (models) {
    Detail.hasMany(models.Item, {
      foreignKey: "item_id"
    });
  };
    
  return Detail;
  
};
