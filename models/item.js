var Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  var item = sequelize.define("item", {
    
    item_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },

    item_name: {
      type: DataTypes.STRING,
      allowNull: false
    }

    }, {
      freezeTableName: true,
      underscored: true
    }
  );
    
  return item;
};
