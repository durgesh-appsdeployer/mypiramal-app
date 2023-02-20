// Initialize Firebase
var config = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
  };
  firebase.initializeApp(config);
  
  // Get a reference to the Firebase authentication service
  var auth = firebase.auth();
  
  // Function to sign up with phone number
  function signUpWithPhoneNumber() {
    var phoneNumber = document.getElementById("phone").value;
    var appVerifier = window.recaptchaVerifier;
    auth
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then(function (verificationId) {
        var verificationCode = prompt("Please enter the verification code sent to your phone:");
        return verificationId.confirm(verificationCode);
      })
      .then(function (result) {
        console.log(result.user);
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  
  // Function to initialize reCAPTCHA
  function initRecaptcha() {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
      'size': 'invisible',
      'callback': function (response) {
        signUpWithPhoneNumber();
      }
    });
  }
  
  // Function to log in with phone number
  function loginWithPhoneNumber() {
    var phoneNumber = document.getElementById("phone").value;
    var appVerifier = window.recaptchaVerifier;
    auth
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then(function (confirmationResult) {
        var verificationCode = prompt("Please enter the verification code sent to your phone:");
        return confirmationResult.confirm(verificationCode);
      })
      .then(function (result) {
        console.log(result.user);
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  