const { Sequelize, Model } = require('sequelize');

class Pessoa extends Model {
  static init(sequelize) {
    super.init(
      {
        idPessoa: {
          type: Sequelize.BIGINT,
          autoIncrement: true,
          primaryKey: true,
          field: 'ID_PESSOA',
        },
        nome: {
          type: Sequelize.STRING(15),
          field: 'NOME',
          allowNull: false,
        },
        cpf: {
          type: Sequelize.BIGINT,
          field: 'CPF',
          allowNull: false,
        },
        estadoCivil: {
          type: Sequelize.STRING(10),
          field: 'ESTADO_CIVIL',
          allowNull: false,
        },
        profissao: {
          type: Sequelize.STRING(3),
          field: 'PROFISSAO',
          allowNull: true,
        },
        endereco: {
          type: Sequelize.STRING(30),
          field: 'ENDERECO',
          allowNull: true,
        },
        sexo: {
          type: Sequelize.STRING(3),
          field: 'SEXO',
          allowNull: true,
        },
        dataNascimento: {
          type: Sequelize.DATE,
          field: 'DATA_NASCIMENTO',
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: 'local_pessoa_tb',
        freezeTableName: true,
        timestamps: false,
      },
    );

    return this;
  }

  // static associate(models) {
  //   this.belongsTo(models.PGT_FORMA_CREDITO_TB, {
  //     foreignKey: 'ID_FORMA_CREDITO',
  //     as: 'formaCredito',
  //   });
  //   this.belongsTo(models.PGT_TIPO_COMPROMISSO_TB, {
  //     foreignKey: 'ID_TIPO_COMPROMISSO',
  //     as: 'tipoCompromisso',
  //   });
  // }
}

module.exports = Pessoa;