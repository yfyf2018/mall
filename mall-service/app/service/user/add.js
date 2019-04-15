'use strict';

const Service = require('egg').Service;

class AddService extends Service {
    async index(obj) {
        console.log(obj);
        const { ctx } = this;
        const result = await ctx.model.User.create(obj);
        return result;
    }
}

module.exports = AddService;
