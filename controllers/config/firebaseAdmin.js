
const { initializeApp, getApps, cert } = require("firebase-admin/app");
const { getAuth } = require("firebase-admin/auth");
const path = require("path");

const serviceAccount = require(
  path.join(__dirname, "../credentials/serviceAccountKey.json")
);


const fs = require("fs");

console.log("Current directory:", __dirname);

const keyPath = path.resolve(
  __dirname,
  "../credentials/serviceAccountKey.json"
);

console.log("Looking for file at:", keyPath);
console.log("File exists:", fs.existsSync(keyPath));
const app =
  getApps().length === 0
    ? initializeApp({
        credential: cert(serviceAccount),
        projectId: serviceAccount.project_id,
      })
    : getApps()[0];

const auth = getAuth(app);

module.exports = { app, auth };
