import 'core-js';
import 'zone.js/dist/zone';
import 'reflect-metadata';
import 'ts-helpers';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './modules/app';

platformBrowserDynamic().bootstrapModule(AppModule);
