import {provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {App} from './app';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {Authentication} from './authentication';

bootstrap(App, [
  ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: HashLocationStrategy}),
  Authentication
]);