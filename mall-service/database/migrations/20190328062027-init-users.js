'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.createTable('users', { id: Sequelize.INTEGER });
        */
        const { INTEGER, DATE, STRING } = Sequelize;
        await queryInterface.createTable('users', {
            user_id: { type: INTEGER, primaryKey: true, autoIncrement: true },
            name: STRING(30),
            phone: STRING(30),
            password: STRING(20),
            age: INTEGER,
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
        await queryInterface.dropTable('users');
    }
};
