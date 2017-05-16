import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Home} from './home';
import {Login} from './login';

@Component({
  selector: 'app',
  directives: [ROUTER_DIRECTIVES]
  template: `
    <h1>Hello world</h1>

    <router-outlet></router-outlet>
  `
})
@RouteConfig([
    { path: '/', redirectTo: ['Home'] },
    { path: '/home', as: 'Home', component: Home },
    { path: '/login', as: 'Login', component: Login }
])
export class App {
  constructor() {}
}