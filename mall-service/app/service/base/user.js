'use strict';

const Service = require('egg').Service;

class BaseService extends Service {
    // 查询是否有此用户
    async isHaveUser(obj) {
        const { ctx } = this;
        const result = await ctx.model.User.findAll({
            where: obj,
        });
        return result;
    }
}

module.exports = BaseService;
