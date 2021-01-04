const admin = require("firebase-admin");

const serviceAccount = require('../config/fbServiceAccountKey.json')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://ecommerce-19d24.firebaseapp.com"
});

module.exports = admin
