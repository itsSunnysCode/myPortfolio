//firebase sdk
var firebaseConfig = {
    apiKey: "AIzaSyDswZyPd8ftNAiOM-DyuBFIGzSDxUmhR_4",
    authDomain: "myportfolio-64f14.firebaseapp.com",
    databaseURL: "https://myportfolio-64f14.firebaseio.com",
    projectId: "myportfolio-64f14",
    storageBucket: "",
    messagingSenderId: "1033575797630",
    appId: "1:1033575797630:web:2ef9e9d5fef91aad"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//Relational DB message collection reference
  var messagesRef = firebase.database().ref('messages');

// listening to the form

document.getElementById('contactForm').addEventListener('submit', submitForm);

// submitForm Function
function submitForm(e){
    e.preventDefault();

    //getting values

    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    
    //declaring saveMessage function
    saveMessage(email, message);

    //creating alert

    document.querySelector('.alert').style.display = 'block';

    //hiding alert after 3 seconds

    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    },2000);

    //clearing the form
    document.getElementById('contactForm').reset();
}
//defining saveMessage function
function saveMessage(email, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        email: email,
        message: message
    });
}