'use strict';

const Service = require('egg').Service;

class ModifyService extends Service {
    async index(obj, phone) {
        const { ctx } = this;
        const result = await ctx.model.User.update({
            password: obj.newPassword,
        }, {
            where: {
                password: obj.password,
                phone,
            },
        });
        return result;
    }
}

module.exports = ModifyService;
