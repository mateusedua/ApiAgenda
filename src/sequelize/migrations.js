const Sequelize = require('sequelize');
const database = require('../infra/database');


const Categoria = database.define('categoria', {
    id_categoria: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING
    },
    data_inclusao: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    data_alteracao: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    }
}, { timestamps: false })

const Usuario = database.define('usuario', {
    id_usuario: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false
    },
    data_inclusao: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    data_alteracao: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    }
}, { timestamps: false })

const Contatos = database.define('contatos', {
    id_contatos: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    url_github: {
        type: Sequelize.STRING
    },
    url_linkedin: {
        type: Sequelize.STRING
    },
    telefone: {
        type: Sequelize.STRING
    },
    data_inclusao: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    data_alteracao: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    }
}, { timestamps: false })

const Controle = database.define('controle_contato_usuario', {
    id_usuario: {
        type: Sequelize.STRING,
        references: {
            model: Usuario,
            key: 'id_usuario'
        }
    },
    id_contatos: {
        type: Sequelize.STRING,
        references: {
            model: Contatos,
            key: 'id_contatos'
        }
    }
}, { timestamps: false })

Controle.belongsTo(Usuario, { foreignKey: 'id_usuario' });
Controle.belongsTo(Contatos, { foreignKey: 'id_contatos' });

Contatos.belongsToMany(Usuario, { through: Controle, foreignKey: 'id_contatos' });
Usuario.belongsToMany(Contatos, { through: Controle, foreignKey: 'id_usuario' });

Contatos.belongsTo(Categoria)
Categoria.hasMany(Contatos)

module.exports = {
    Contatos,
    Categoria,
    Usuario,
    Controle
}