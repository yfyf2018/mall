'use strict';

const Controller = require('egg').Controller;
const rules = require('../../rules/index');
const jwt = require('jsonwebtoken');

class LoginController extends Controller {
    async index() {
        const {
            ctx,
            app,
        } = this;
        const {
            phone,
            password,
        } = ctx.request.body;
        try {
            ctx.validate({
                phone: rules.phone,
            }, ctx.request.body);
        } catch (error) {
            ctx.body = error;
            return;
        }
        try {
            ctx.validate({
                password: rules.password,
            }, ctx.request.body);
        } catch (error) {
            ctx.body = {
                code: 400,
                msg: '密码格式不正确',
            };
            return;
        }
        const result = await ctx.service.base.user.isHaveUser({
            phone,
        });
        // 账号不存在
        console.log(111);
        if (result.length === 0) {
            ctx.body = {
                code: 200023,
                msg: '该用户不存在，请先注册',
            };
            return;
        }
        // 账号或密码错误
        const data = result[0];
        console.log(data.dataValues);
        if (data.dataValues.password !== password) {
            ctx.body = {
                code: 200022,
                msg: '账号或密码错误，请重新输入!',
            };
            return;
        }
        const tokenVal = jwt.sign({
            user_id: data.dataValues.user_id,
        }, 'PS256', {
            expiresIn: 10000,
        });
        // NtYs0nA4kf0SWdnjTkfrmSHgnLWa2iY2Jh_8clkdRk0
        // const decoded = jwt.decode(tokenVal, { complete: true });
        // console.log(decoded.signature);
        // await app.redis.set('token', tokenVal);
        // 登陆成功
        ctx.body = {
            code: 200,
            msg: '登陆成功!',
            token: tokenVal,
        };
    }
}

module.exports = LoginController;
