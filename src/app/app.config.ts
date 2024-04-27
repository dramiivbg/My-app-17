import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors, withNoXsrfProtection, withXsrfConfiguration } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ErrorResponseInterceptor } from './shared/error-response.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),provideHttpClient(
    withXsrfConfiguration({
      cookieName: 'CUSTOM_XSRF_TOKEN',
      headerName: 'X-Custom-Xsrf-Header',
    }),
  ), provideAnimationsAsync(),provideHttpClient(withInterceptors([ErrorResponseInterceptor]))]
};
