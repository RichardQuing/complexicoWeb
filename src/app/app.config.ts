import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideNgIconsConfig } from '@ng-icons/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideNgIconsConfig({
      size: "1.5em",
    }),
    provideRouter(routes), provideFirebaseApp(() => initializeApp({
      "projectId":"app-docente-1682b",
      "appId":"1:68236910582:web:cc5c4b481ec84d5ec9b1d7",
      "storageBucket":"app-docente-1682b.firebasestorage.app",
      "apiKey":"AIzaSyDCoLWHkK6dNj7U4jQLkipMWKfCAksQG2c",
      "authDomain":"app-docente-1682b.firebaseapp.com",
      "messagingSenderId":"68236910582","measurementId":"G-PT22EJ0T75"}))
      , provideAuth(() => getAuth()), 
      provideFirestore(() => getFirestore()),
  ]
};
