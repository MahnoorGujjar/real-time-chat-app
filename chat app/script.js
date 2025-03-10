// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
  import { getDatabase, ref, push, onChildAdded } from
"https://www.gstatic.com/firebasejs/11.4.0/firebase-database.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyA-lFuR1JkxV-gT8TZZmx-SMLXQELIKnR8",
    authDomain: "sign-up-log-in-form-2771e.firebaseapp.com",
    projectId: "sign-up-log-in-form-2771e",
    storageBucket: "sign-up-log-in-form-2771e.firebasestorage.app",
    messagingSenderId: "462822975889",
    appId: "1:462822975889:web:abdbe2f3a66c9ed4a35230",
    measurementId: "G-H6935MRW3V"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getDatabase(app);


  window.sendMessage = function(){

    let username = document.getElementById('username').value;
    let message = document.getElementById('message').value;
    
    if(username === "" || message === "")return;

    //push message to firebase
    push(ref(db , 'message'),{
        name : username ,
        text : message
    });

    document.getElementById('message').value = ""; //clear input
  };

// function to listen for new mwssage
 
onChildAdded(ref(db , 'message'), function (snapshot){
    let data = snapshot.val();
    let messageBox = document.getElementById('messages');
    let msgElement = document.createElement('p');
    msgElement.textContent = data.name + " :  " + data.text;
    messageBox.appendChild(msgElement);
    messageBox.scrollTop = messageBox.scrollHeight;
    messageBox.scrollTop = messageBox.scrollWidth

})
