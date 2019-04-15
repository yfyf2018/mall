'use strict';

const rules = {
    phone: {
        type: 'string',
        format: /^1[3|4|5|7|8]\d{9}$/,
    },
    password: {
        type: 'password',
    },
};

module.exports = rules;
