module.exports = function (sequelize, DataTypes) {
  const todo = sequelize.define("Todos", {
    subject: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    complete: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: 0,
    },
  });
  return todo;
};