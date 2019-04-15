'use strict';

const Contorller = require('egg').Controller;

class RegisterContorller extends Contorller {
    async index() {
        const { ctx } = this;
        const body = ctx.request.body;
        const haveUserResult = await ctx.service.base.user.isHaveUser({
            phone: body.phone,
        });
        // 账号已存在
        if (haveUserResult.length !== 0) {
            ctx.body = {
                code: 200021,
                msg: '该用户已存在，请重新输入',
            };
            return;
        }
        console.log(body.pay_time);
        const test = await ctx.service.user.add.index({
            phone: body.phone,
            password: body.password,
            age: 18,
            pay_time: body.pay_time,
        });
        ctx.body = {
            code: 200,
            msg: '恭喜您，注册成功！',
            data: test,
        };
    }
}

module.exports = RegisterContorller;
