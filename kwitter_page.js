 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyDpTfb4VYMERJ2veoj4BKsPSg6zllBXlL8",
      authDomain: "kwitter-cfe84.firebaseapp.com",
      databaseURL: "https://kwitter-cfe84-default-rtdb.firebaseio.com",
      projectId: "kwitter-cfe84",
      storageBucket: "kwitter-cfe84.appspot.com", 
      messagingSenderId: "653244572539",
      appId: "1:653244572539:web:961597b2d80f5e7d1353de"
    };
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code 
      } });  }); }
getData();   

function send()
{
      MSG = document.getElementById("MSG").value;
      firebase.database().ref(room_name).push(
            {
                  name:user_name,
                  message:MSG,
                  likes:0
            }
      );
      document.getElementById("MSG").value = "";
} 