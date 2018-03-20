var Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  var employee = sequelize.define("employee", {
    
    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    }

    }, {
      freezeTableName: true,
      underscored: true
    }
  );
    
  return employee;
};


