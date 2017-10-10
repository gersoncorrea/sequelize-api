/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Autor', {
    id: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    timestamps:false,
    tableName: 'Autor'
  });
};
