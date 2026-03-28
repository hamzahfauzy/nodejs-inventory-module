import { DataTypes } from "#database/database.sequelize.js";

const responseField = {
    id: {},
    organization_id: {},
    code: {},
    sku: {},
    name: {},
    unit: {},
    description: {},
    created_at: {},
    updated_at: {}
}

export default {

    name: 'inv_items',

    schema: {

        fields: {

            id: {
                type: DataTypes.BIGINT.UNSIGNED,
                primaryKey: true,
                autoIncrement: true
            },

            organization_id: {
                type: DataTypes.BIGINT.UNSIGNED
            },

            code: {
                type: DataTypes.STRING(50),
                allowNull: false
            },

            sku: {
                type: DataTypes.STRING(100)
            },

            name: {
                type: DataTypes.STRING(255),
                allowNull: false
            },

            unit: {
                type: DataTypes.STRING(50),
                allowNull: false
            },

            description: {
                type: DataTypes.TEXT
            },

            created_at: {
                type: DataTypes.DATE
            },

            updated_at: {
                type: DataTypes.DATE
            }

        },

        options: {
            tableName: 'inv_items',
            timestamps: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    },

    permissions: [
        'inv_items.list',
        'inv_items.create',
        'inv_items.update',
        'inv_items.delete'
    ],

    response: {
        list: responseField,
        single: responseField
    }

}