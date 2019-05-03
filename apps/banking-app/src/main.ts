import { StaticProvider, enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { registerSingleApp } from '@backbase/foundation-ang/core';

import { AppModule } from './app/app.module';

import { environment } from './environments/environment';
if (environment.production) {
  enableProdMode();
}

registerSingleApp((extraProviders: Array<StaticProvider>) =>
  platformBrowserDynamic(extraProviders).bootstrapModule(AppModule),
);
