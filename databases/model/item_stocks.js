import { DataTypes } from "#database/database.sequelize.js";

const responseField = {
    id: {},
    item_id: {},
    amount: {},
    record_type: {},
    ref_name: {},
    ref_id: {},
    created_at: {}
}

export default {

    name: 'inv_item_stocks',

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

            amount: {
                type: DataTypes.DECIMAL(18,4),
                allowNull: false
            },

            record_type: {
                type: DataTypes.STRING(50)
            },

            ref_name: {
                type: DataTypes.STRING(100)
            },

            ref_id: {
                type: DataTypes.BIGINT.UNSIGNED
            },

            created_at: {
                type: DataTypes.DATE
            }

        },

        options: {
            tableName: 'inv_item_stocks',
            timestamps: true,
            createdAt: 'created_at',
            updatedAt: false
        }
    },

    permissions: [
        'inv_item_stocks.list',
        'inv_item_stocks.create',
        'inv_item_stocks.delete'
    ],

    response: {
        list: responseField,
        single: responseField
    }

}