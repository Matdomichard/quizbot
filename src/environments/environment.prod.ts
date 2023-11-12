// src/environments/environment.prod.ts
export const environment = {
    production: true,
    firebaseConfig: {
      apiKey: process.env['NG_APP_FIREBASE_API_KEY'],
      authDomain: process.env['NG_APP_FIREBASE_AUTH_DOMAIN'],
      projectId: process.env['NG_APP_FIREBASE_PROJECT_ID'],
      storageBucket: process.env['NG_APP_FIREBASE_STORAGE_BUCKET'],
      messagingSenderId: process.env['FIREBASE_SENDER_ID'],
      appId: process.env['NG_APP_FIREBASE_APP_ID'],
      measurementId: process.env['NG_APP_FIREBASE_MEASUREMENT_ID']
    }
  };
  