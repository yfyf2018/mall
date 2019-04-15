'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.createTable('users', { id: Sequelize.INTEGER });
        */
        const { STRING, INTEGER, DATE } = Sequelize;
        await queryInterface.createTable('orders', {
            order_id: { type: INTEGER, primaryKey: true, autoIncrement: true },
            user_id: INTEGER,
            price: INTEGER,
            ware_name: STRING(30),
            pay_time: DATE,
            created_at: DATE,
            updated_at: DATE,
        });
    },

    down: async queryInterface => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.dropTable('users');
        */
        await queryInterface.dropTable('orders');
    },
};
