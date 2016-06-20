import {Component} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES} from '@angular/router';

import {Home} from './components/home/home';
import {Order} from './components/order/order';
import {Execution} from './components/execution/execution';
import {Preview} from './components/preview/preview';
import {Entrepreneur} from './components/entrepreneur/entrepreneur';
import {About} from './components/about/about';
import {RepoBrowser} from './components/repo-browser/repo-browser';

@Component({
  selector: 'seed-app',
  providers: [],
  pipes: [],
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'app/seed-app.html',
})
@Routes([
  { path: '/',       component: Home,       },
  { path: '/about',  component: About,      },
  { path: '/github', component: RepoBrowser },
  { path: '/order', component: Order },
  { path: '/execution', component: Execution },
  { path: '/entrepreneur', component: Entrepreneur },
  { path: '/preview', component: Preview },
])
export class SeedApp {

  constructor() {}

}
