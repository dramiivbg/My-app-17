import { environment } from './../environments/environment';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors, withNoXsrfProtection, withXsrfConfiguration } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ErrorResponseInterceptor } from './shared/error-response.interceptor';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

//initializeApp(environment.firebaseConfig);

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),provideHttpClient(
    withXsrfConfiguration({
      cookieName: 'CUSTOM_XSRF_TOKEN',
      headerName: 'X-Custom-Xsrf-Header',
    }),
  ), provideAnimationsAsync(),provideHttpClient(withInterceptors([ErrorResponseInterceptor])), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"fireauth-97909","appId":"1:904349961980:web:333c0b54db2b7af2191179","storageBucket":"fireauth-97909.appspot.com","apiKey":"AIzaSyC3TDYJyv_-o44sSMzWIw7LtnZV5WY0qdA","authDomain":"fireauth-97909.firebaseapp.com","messagingSenderId":"904349961980"}))),
  importProvidersFrom(
    provideAuth(() => getAuth()),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ),
],
};
