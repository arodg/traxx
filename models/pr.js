var Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  var Pr = sequelize.define("Pr", {
    
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
      type: DataTypes.ENUM,
      values: ["approved", "pending", "denied"]
    }

    }, {
      freezeTableName: true,
      underscored: true
    }
    
  );
  
  Pr.associate = function(models) {
    Pr.belongsTo(models.Employee, {
      foreignKey: "employee_id"
    });
  };
  
  return Pr;
};

