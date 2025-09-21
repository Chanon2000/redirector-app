import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';
import { App } from './modules/app/app';
import { config } from './modules/app/app.config.server';

const bootstrap = (context: BootstrapContext) => bootstrapApplication(App, config, context);

export default bootstrap;
