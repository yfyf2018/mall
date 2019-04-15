'use strict';

module.exports = app => {
    const { STRING, INTEGER, DATE } = app.Sequelize;
    const User = app.model.define('users', {
        user_id: { type: INTEGER, primaryKey: true, autoIncrment: true },
        name: STRING(30),
        phone: INTEGER,
        password: STRING(20),
        age: INTEGER,
        pay_time: DATE,
        created_at: DATE,
        updated_at: DATE,
    });
    return User;
};
