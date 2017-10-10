/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Livro', {
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
    preco: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    ano: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: true
    },
    autor_id: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      references: {
        model: 'Autor',
        key: 'id'
      }
    }
  }, {
    timestamps: false,
    tableName: 'Livro'
  });
};
