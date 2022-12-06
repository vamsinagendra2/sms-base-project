import { initializeApp, applicationDefault, getApp, App } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

var admin = require("firebase-admin");

var serviceAccount = require("../config/sms-app-ef69f-firebase-adminsdk-zfi56-10f3dc0c18.json");

function initDefaultApp() {
  
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
};

async function getFirestoreByAppName(appName?: string) {
  return getFirestore();
}

export {
  initDefaultApp,
  getFirestoreByAppName,
};
