<body>










// This is used to set up the sign in with email. write code about this

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");


var firebaseConfig = {
  apiKey: "api-key",
  authDomain: "group-message-bridge.firebaseapp.com",
  databaseURL: "https://group-message-bridge.firebaseio.com",
  projectId: "group-message-bridge",
  storageBucket: "group-message-bridge.appspot.com",
  messagingSenderId: "sender-id",
  appId: "app-id",
  measurementId: "G-measurement-id",
};

<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.2.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAtA2qHY3RN2C0kJTjQCDWRgoSaKuDEhd8",
    authDomain: "group-message-bridge.firebaseapp.com",
    databaseURL: "https://group-message-bridge.firebaseio.com",
    projectId: "group-message-bridge",
    storageBucket: "group-message-bridge.appspot.com",
    messagingSenderId: "734064929010",
    appId: "1:734064929010:web:89b885b808a0b53f68c86b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>

</body>