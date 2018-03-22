var Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  var Pr = sequelize.define("Pr", {
    
    request_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
      
    request_created: {
      type: DataTypes.DATE
    },

    request_required: {
      type: DataTypes.DATE
    },

    request_approved: {
      type: DataTypes.DATE
    },

    tax_rate: {
      type: DataTypes.DECIMAL
    },

    estimated_shipping: {
      type: DataTypes.DECIMAL
    },

    request_total: {
      type: DataTypes.DECIMAL
    },

    justification: {
      type: DataTypes.STRING,
    },

    comments: {
      type: DataTypes.STRING,
    },

    request_status: {
      type: DataTypes.ENUM,
      values: ["approved", "pending", "denied"]
    }

    }, {
      freezeTableName: true,
      underscored: true
    }
    
  );
  
  return Pr;
};

