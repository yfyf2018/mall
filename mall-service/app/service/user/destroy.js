'use strict';

const Service = require('egg').Service;

class DestroyService extends Service {
    async index(obj) {
        const { ctx } = this;
        const result = await ctx.model.User.destroy({
            where: obj,
        });
        console.log(result);
        return result;
    }
}

module.exports = DestroyService;
