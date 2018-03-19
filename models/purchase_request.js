var Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  var purchase_request = sequelize.define("purchase_requests", {
    
    request_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },

    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    approver_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    request_created: {
      type: DataTypes.DATE,
      allowNull: false
    },

    request_required: {
      type: DataTypes.DATE,
      allowNull: false
    },

    request_approved: {
      type: DataTypes.DATE,
    },

    tax_rate: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },

    estimated_shipping: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },

    request_total: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },

    justification: {
      type: DataTypes.STRING,
    },

    comments: {
      type: DataTypes.STRING,
    },

    request_status: {
      type: DataTypes.STRING,
      allowNull: false
    }
    
  });
  
  purchase_request.associate = function(models) {
    purchase_request.belongsTo(models.employees, {
      foreignKey: "employee_id"
    });
  };
  
  return purchase_request;
};

