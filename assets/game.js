  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDQJgZVr0MWhKgHKWuzAS7jCT45U-2Wm84",
    authDomain: "adam-546e1.firebaseapp.com",
    databaseURL: "https://adam-546e1.firebaseio.com",
    projectId: "adam-546e1",
    storageBucket: "adam-546e1.appspot.com",
    messagingSenderId: "153073052495",
    appId: "1:153073052495:web:eff5d58f3579f56a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();

    var trainNameInput="";
    var destinationInput="";
    var firstTrainTime="03:30";
    var frequency="";

  $(".btn").on("click", function (event) {
    event.preventDefault();

    trainNameInput = $("#trainNameInput").val().trim();
    destinationInput = $("#destinationInput").val().trim();
    firstTrainTime = $("#firstTrainTime").val().trim();
    frequency = $("#frequency").val().trim();

    database.ref("traintime").push({
      trainNameInput: trainNameInput,
      destinationInput: destinationInput,
      firstTrainTime: firstTrainTime,
      frequency: frequency
      // nextTrainTime: nextTrainTime,
      // minutesTillTrain: minutesTillTrain,
 
    });
  });

  database.ref("traintime").on("child_added", function (childsnapshot) {
   
    var trainTimeKeeper= childsnapshot.val();
    frequency = trainTimeKeeper.frequency;
    var currentTime = moment();
    var trainDetail = moment(firstTrainTime, "hh:mm").subtract(1, "years");
    var diffTime = currentTime.diff(moment(trainDetail),
      'minutes');
    var parseNumb=parseInt(frequency)
    console.log(typeof(parseNumb))
    var timeRemainder = diffTime % parseNumb
    var minutesTillTrain = parseNumb - timeRemainder;
    var parseNumber=parseInt(minutesTillTrain)
    console.log(parseNumber);

   console.log(typeof(minutesTillTrain))
    var nextTrainTime = currentTime.add(minutesTillTrain, "minutes").format("LT");
  


    $("#trainTable").append("<tr><td class='move'> " + childsnapshot.val().trainNameInput + "</td>" + "<hr>" + "<td class='move'>" + childsnapshot.val().destinationInput + "</td>" + " <td class='move'>" + frequency + "</td>" + "<td class='move'>" +  nextTrainTime + "</td> " + "<td>" + minutesTillTrain + "</td> </tr>");

  },

    function(errorObject) {
      console.log("Errors handled: " + errorObject.code)
  })


