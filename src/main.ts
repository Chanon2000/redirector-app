import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './modules/app/app';
import { appConfig } from './modules/app/app.config';

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
