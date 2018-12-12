const functions = require('firebase-functions');
const cors = require('cors')({ origin: true });
const fs = require('fs');
const uuid = require('uuid-v4');

const googleCloudStorage = require('@google-cloud/storage');
const storage = new googleCloudStorage.Storage({
  projectId: "rn-courses",
  keyFilename: "rn-courses-firebase-adminsdk.json"
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.storeImage = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    const body = JSON.parse(request.body);
    fs.writeFileSync('/tmp/uploaded-image.jpg', body.image, 'base64', err => {
      console.log(err);
      response.status(500).json({ error: err })
    })
    const bucket = storage.bucket("rn-courses.appspot.com");
    const id = uuid();
    bucket.upload('/tmp/uploaded-image.jpg', {
      uploadType: 'media',
      destination: '/places/' + id + '.jpg',
      metadata: {
        metadata: {
          contentType: 'image/jpeg',
          firebaseStorageDownloadTokens: id
        }
      }
    }, (err, file) => {
      if (!err) {
        console.log('not error')
        response.status(201).json({
          imageUrl: "https://firebasestorage.googleapis.com/v0/b/" + bucket.name
            + "/o/" + encodeURIComponent(file.name) + "?alt=media&token=" + id
        })
      } else {
        console.log(err);
        response.status(500).json({ error: err });
      }
    });
  });
});
