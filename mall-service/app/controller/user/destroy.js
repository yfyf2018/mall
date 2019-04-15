'use strict';

const Controller = require('egg').Controller;

class DestroyController extends Controller {
    async index() {
        const { ctx } = this;
        const {
            phone,
            password,
        } = ctx.request.body;
        const queryResult = await ctx.service.base.user.isHaveUser({
            phone,
        });
        if (queryResult.length === 0) {
            ctx.body = {
                code: 200023,
                msg: '该用户不存在，请先注册',
            };
            return;
        }
        if (queryResult[0].dataValues.password !== password) {
            ctx.body = {
                code: 200022,
                msg: '账号或密码错误，请重新输入!',
            };
            return;
        }
        const destroyResult = await ctx.service.user.destroy.index({
            phone,
            password,
        });
        ctx.body = {
            code: 200,
            msg: '删除成功!',
            data: destroyResult,
        };
    }
}

module.exports = DestroyController;
