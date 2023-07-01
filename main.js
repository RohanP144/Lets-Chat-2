function addUser() {
    user_name=document.getElementById("user_name").value;
    localStorage.setItem("user_name",user_name);
    window.location="Kwitter_room.html";
    firebase.database().ref("/").child(user_name).update({
      purpose:"adding user"
    });
  }
  const firebaseConfig = {
    apiKey: "AIzaSyCcFOX36_nrQcRzR0AGTgLvUYLAKoHinNo",
    authDomain: "let-s-chat-7cbdc.firebaseapp.com",
    projectId: "let-s-chat-7cbdc",
    storageBucket: "let-s-chat-7cbdc.appspot.com",
    messagingSenderId: "413808456457",
    appId: "1:413808456457:web:7cab9f263cd3452060d9d8",
    measurementId: "G-JWK0KJH4QF"
  };
  function getData(){firebase.database().ref("/").on('value',function(snapshot){document.getElementById("output").innerHTML
  Group_name="childKey";
  console.log("Room Name -"+Room_Names);
  row="<div class='room_name'id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
  document.getElementById("output").innerHTML+=row;
  });};
  getData();
  function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="kwitter_page.html";
  }
  function addroom() {
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({purpose:"adding room name"
                                                         });
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_page.html";
  }
  function getData() {firebase.database().ref("/").on('value',
  function(snapshot) {document.getElementById("output").innerHTML =
  "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
  Room_names = childKey;
  firebase_message_id=childKey;
  message_data=childData;
  console.log(firebase_message_id);
  console.log(message_data);
  name=message_data['name'];
  message=message_data['message'];
  like=message_data['like'];
  name_with_tag="<h4>"+ name+"<img class='user_tick' src='tick.png'></h4>";
  message_with_tag="<h4 class='message_h4'>" + message + "</h4>";
  like_button="<button='bnt bnt-warning'id="+firebase_message_id+"value="+like+"onclick='updateLike(this.id)'>";
   span_with_tag="<span class='glyphicon glyphicon-thumbs_up'>Like:"+like+"</span></button><hr>";
  row=name_with_tag+message_with_tag+like_button+span_with_tag;
   document.getElementById("output").innerHTML +=row;
  });});}
  getData();
  logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="kwitter.html";
  }
  send() {
    firebase.database().ref(room_name).push({
    name:user_name
      message:msg
      like:0
    });
  }
                                            