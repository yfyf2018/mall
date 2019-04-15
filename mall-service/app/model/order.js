'use strict';

module.exports = app => {
    const { STRING, INTEGER, DATE } = app.Sequelize;
    const Order = app.model.define('orders', {
        order_id: { type: INTEGER, primaryKey: true, autoIncrment: true },
        user_id: INTEGER,
        price: INTEGER,
        ware_name: STRING(30),
        pay_time: DATE,
        created_at: DATE,
        updated_at: DATE,
    });
    return Order;
};
