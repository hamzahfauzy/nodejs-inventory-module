import { DataTypes } from "#database/database.sequelize.js";

const responseField = {
    id: {},
    item_id: {},
    unit: {},
    value: {}
}

export default {

    name: 'inv_item_conversions',

    schema: {

        fields: {

            id: {
                type: DataTypes.BIGINT.UNSIGNED,
                primaryKey: true,
                autoIncrement: true
            },

            item_id: {
                type: DataTypes.BIGINT.UNSIGNED,
                allowNull: false
            },

            unit: {
                type: DataTypes.STRING(50),
                allowNull: false
            },

            value: {
                type: DataTypes.DECIMAL(18,6),
                allowNull: false
            }

        },

        options: {
            tableName: 'inv_item_conversions',
            timestamps: false
        }
    },

    permissions: [
        'inv_item_conversions.list',
        'inv_item_conversions.create',
        'inv_item_conversions.update',
        'inv_item_conversions.delete'
    ],

    response: {
        list: responseField,
        single: responseField
    }

}