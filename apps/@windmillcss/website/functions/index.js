const functions = require("firebase-functions");
const algoliasearch = require("algoliasearch");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const APP_ID = functions.config().algolia.app;
const ADMIN_KEY = functions.config().algolia.key;

const client = algoliasearch(APP_ID, ADMIN_KEY);

const index = client.initIndex("packages");

exports.addToIndex = functions.firestore
  .document("packages/{packageId}")
  .onCreate((snapshot) => {
    const data = snapshot.data();
    const objectID = snapshot.id;
    return index.saveObject({
      ...data,
      packageName: `${data.owner}/${data.name}`,
      objectID,
    });
  });

exports.updateIndex = functions.firestore
  .document("packages/{packageId}")
  .onUpdate((change) => {
    const newData = change.after.data();
    const objectID = change.after.id;
    return index.saveObject({
      ...newData,
      packageName: `${newData.owner}/${newData.name}`,
      objectID,
    });
  });

exports.deleteFromIndex = functions.firestore
  .document("packages/{packageId}")
  .onDelete((snapshot) => index.deleteObject(snapshot.id));
