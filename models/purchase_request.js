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

    vendor_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    request_date: {
      type: DataTypes.DATE,
      allowNull: false
    },

    require_date: {
      type: DataTypes.DATE,
      allowNull: false
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
      allowNull: false
    },

    comments: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
  
  });
    
  return purchase_request;
};

