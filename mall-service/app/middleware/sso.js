'use strict';

const jwt = require('jsonwebtoken');

module.exports = () => {
    return async (ctx, next) => {
        await next();
        const body = ctx.body;
        if (!body) {
            const {
                token,
            } = ctx.request.body;
            try {
                jwt.verify(token, 'PS256');
                // val = jwt.verify(token, 'PS256');
            } catch (error) {
                ctx.body = {
                    code: 401,
                    msg: '登录令牌已失效已失效，请重新登陆',
                };
            }
            return;
        }
        const codeList = [ 400, 200023, 200022, 200 ];
        if (codeList.some(item => item === body.code)) {
            ctx.body = body;
            return;
        }
    };
};
