import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { servicesInjectables } from './app/services/services'

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  disableDeprecatedForms(),
  provideForms(),
  servicesInjectables
])
  .catch((err: any) => console.error(err));

