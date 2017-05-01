import { Routes }    from '@angular/router';
import { HomePage }  from '../../pages/home/home';
import { LoginPage } from '../../pages/login/login';

export const routes: Routes = [
    { path: '',      component: HomePage },
    { path: 'login', component: LoginPage }
];
