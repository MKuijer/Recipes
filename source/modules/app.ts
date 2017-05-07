/* Import angular modules */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }  from '@angular/router';

/* Import feature modules */

/* Import components*/
import { Core }   from './app/components/core/core';
import { Header }   from './app/components/header/header';

/* Import pages */
import { HomePage }  from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

/* Import miscellaneous */
import { routes } from '../modules/app/app-routes';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [
        // components
        Core,
        Header,

        // pages
        HomePage,
        LoginPage
    ],
    providers: [ ],
    bootstrap: [Core],
})

export class AppModule { }
