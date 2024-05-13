import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
export const routes: Routes = [
      {
        path: '', title: 'Home Page', component: HomeComponent,
      },
      {
        path: 'about', title: 'About Page', component: AboutComponent,
      },
];