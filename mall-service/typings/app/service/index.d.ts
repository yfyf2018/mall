// This file is created by egg-ts-helper@1.25.2
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBaseUser = require('../../../app/service/base/user');
import ExportUserAdd = require('../../../app/service/user/add');
import ExportUserDestroy = require('../../../app/service/user/destroy');
import ExportUserModify = require('../../../app/service/user/modify');

declare module 'egg' {
  interface IService {
    base: {
      user: ExportBaseUser;
    }
    user: {
      add: ExportUserAdd;
      destroy: ExportUserDestroy;
      modify: ExportUserModify;
    }
  }
}
