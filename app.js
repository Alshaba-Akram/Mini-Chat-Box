
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getDatabase, ref, push, onChildAdded } from"https://www.gstatic.com/firebasejs/11.4.0/firebase-database.js";
const firebaseConfig = {
  apiKey: "AIzaSyAqHajlfQfkKuvRy0OxtHTQWHr_YnUu2DI",
  authDomain: "auth-app-149ba.firebaseapp.com",
  databaseURL: "https://auth-app-149ba-default-rtdb.firebaseio.com",
  projectId: "auth-app-149ba",
  storageBucket: "auth-app-149ba.firebasestorage.app",
  messagingSenderId: "609188439323",
  appId: "1:609188439323:web:9e37065af70da4483b1fbe",
  measurementId: "G-5WCZ21HJZE"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

window.sendMessage=function () {
      let username=document.getElementById("username").value ;
      let message=document.getElementById("message").value ;

      if(username===""||message==="") return;
      
      push(ref(db,"messages"),{
        name:username,
        text:message
      });

      document.getElementById('message').value=" ";
};

onChildAdded(ref(db,"messages"),function(snapshot){

  let data =snapshot.val();
  let messageBox=document.getElementById("messages");
  let msgElement=document.createElement("p");
  msgElement.textContent=data.name+":- "+data.text;
  messageBox.appendChild(msgElement);
  messageBox.scrollTop=messageBox.scrollHeight;

})