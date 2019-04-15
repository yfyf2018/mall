'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
    const config = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1553752421924_1461';

    // add your middleware config here
    config.middleware = [];
    // config.middleware = [
    //     'sso',
    // ];

    // add your user config here
    const userConfig = {
        // myAppName: 'egg',
    };

    config.security = {
        csrf: {
            enable: false,
            ignoreJSON: true,
        },
        domainWhiteList: [ 'http://localhost:8080' ],
    };

    config.cors = {
        origin: '*',
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    };

    config.sequelize = {
        dialect: 'mysql',
        host: '127.0.0.1',
        port: 3306,
        username: 'root',
        password: '12345',
        database: 'my-mall',
        timezone: '+08:00',
    };

    // config.redis = {
    //     client: {
    //         host: '127.0.0.1',
    //         port: 6379,
    //         password: '',
    //         db: '0',
    //     },
    // };

    // config.sessionRedis = {
    //     key: 'EGG_SESSION',
    //     maxAge: 1,
    //     // maxAge: 24 * 3600 * 1,
    //     httpOnly: true,
    //     encrypt: false,
    // };

    return {
        ...config,
        ...userConfig,
    };
};
