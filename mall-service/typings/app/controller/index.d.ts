// This file is created by egg-ts-helper@1.25.2
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHomeIndex = require('../../../app/controller/home/index');
import ExportUserDestroy = require('../../../app/controller/user/destroy');
import ExportUserLogin = require('../../../app/controller/user/login');
import ExportUserModify = require('../../../app/controller/user/modify');
import ExportUserRegister = require('../../../app/controller/user/register');

declare module 'egg' {
  interface IController {
    home: {
      index: ExportHomeIndex;
    }
    user: {
      destroy: ExportUserDestroy;
      login: ExportUserLogin;
      modify: ExportUserModify;
      register: ExportUserRegister;
    }
  }
}
