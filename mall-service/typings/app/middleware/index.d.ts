// This file is created by egg-ts-helper@1.25.2
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportSso = require('../../../app/middleware/sso');

declare module 'egg' {
  interface IMiddleware {
    sso: typeof ExportSso;
  }
}
