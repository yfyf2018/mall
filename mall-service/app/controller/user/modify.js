'use strict';

const Conroller = require('egg').Controller;

class ModifyConroller extends Conroller {
    async index() {
        const { ctx } = this;
        const {
            phone,
            password,
            newPassword,
        } = ctx.request.body;
        const queryResult = await ctx.service.base.user.isHaveUser({
            phone,
        });
        // 用户不村子啊
        if (queryResult.length === 0) {
            ctx.body = {
                code: 200023,
                msg: '该用户不存在，请先注册',
            };
            return;
        }
        const data = queryResult[0].dataValues;
        // 账号或密码错误
        if (data.password !== password) {
            ctx.body = {
                code: 200022,
                msg: '账号或密码错误，请重新输入!',
            };
            return;
        }
        // 修改成功
        const modifyResult = await ctx.service.user.modify.index({
            password,
            newPassword,
        }, phone);
        if (modifyResult.length !== 0) {
            ctx.body = {
                code: 200020,
                msg: '修改成功，请重新登陆!',
            };
        }
    }
}

module.exports = ModifyConroller;
