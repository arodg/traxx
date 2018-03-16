var Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  var vendor = sequelize.define("purchase_request", {
    
    request_number: {
      type: DataTypes.INTEGER,
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

    date_needed: {
      type: DataTypes.DATE,
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

    trax_user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    created_date: {
      type: DataTypes.DATE,
      allowNull: false
    },

    vendor_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    status: {
      type: DataTypes.STRING,
      allowNull: false
    },

    completed_date: {
      type: DataTypes.DATE,
      allowNull: false
    },

  
  });
    
  return purchase_request;
};

