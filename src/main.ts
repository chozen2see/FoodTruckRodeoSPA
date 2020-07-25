import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// using this b/c building web app that uses browser and bootstraps the AppModule class (DatingApp-SPA/src/app/app.module.ts)
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
