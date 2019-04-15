// This file is created by egg-ts-helper@1.25.2
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportOrder = require('../../../app/model/order');
import ExportUser = require('../../../app/model/user');

declare module 'sequelize' {
  interface Sequelize {
    Order: ReturnType<typeof ExportOrder>;
    User: ReturnType<typeof ExportUser>;
  }
}
