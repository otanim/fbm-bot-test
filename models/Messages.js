'use strict';
module.exports = function (sequelize, DataTypes) {
    var Messages = sequelize.define('messages', {
        message: {
            type: DataTypes.STRING
        },
        next: {
            type: DataTypes.INTEGER
        },
        type: {
            type: DataTypes.INTEGER
        },
        createdAt: {
            type: DataTypes.DATE
        },
        updatedAt: {
            type: DataTypes.DATE
        },
        description: {
            type: DataTypes.STRING
        },
        input: {
            type: DataTypes.BOOLEAN
        }
    });
    return Messages;
}