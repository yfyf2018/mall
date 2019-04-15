'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    const sso = app.middleware.sso();
    router.get('/', controller.home.index.index);
    router.post('/user/login', controller.user.login.index);
    router.post('/user/register', controller.user.register.index);
    router.post('/user/modify', sso, controller.user.modify.index);
    router.post('/user/destroy', controller.user.destroy.index);
};
