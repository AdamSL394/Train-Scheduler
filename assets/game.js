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
console.log(database);

// can I write on document on click of anything with the class of btn run this function, which is better
$(".btn").on("click",function(){
    
    var trainNameInput=$("#trainNameInput").val().trim();
    var destinationInput=$("#destinationInput").val().trim();
    var firstTrainTime= $("#firstTrainTime").val().trim();
    var frequency=$("#frequency").val().trim();

    var trainDetail= moment(firstTrainTime,"HH:mm").subtract(1,"years");
    console.log(trainDetail);

    var currentTime =moment();
    console.log("Current Time: " + moment(currentTime).format("hh:mm"));

    





    database.ref().push({
      trainNameInput:trainNameInput,
        destinationInput:destinationInput,
        firstTrainTime:firstTrainTime,
        frequency:frequency
    })
  })
  
  database.ref().on("child_added",function(childsnapshot){
  console.log(childsnapshot.val().trainNameInput);
  console.log(childsnapshot.val().destinationInput);
  console.log(childsnapshot.val().firstTrainTime);
  console.log(childsnapshot.val().frequency);



  $("#trainTable").append("<tr><td class='move'> " + childsnapshot.val().trainNameInput + "</td>"+ "<hr>" + "<td class='move'>"+ childsnapshot.val().destinationInput+ "</td>" + " <td class='move'>" + childsnapshot.val().firstTrainTime + "</td>" + "<td class='move'>" + childsnapshot.val().frequency + "</td> </tr>");
  

  })
  // console.log(firstTrainTime.diff(moment(), "months"));
  // console.log(firstTrainTime.diff(moment(), "days"));
  // console.log(firstTrainTime.diff(moment(), "weeks"));
  // console.log(firstTrainTime.diff(moment(), "hours"));
  // console.log(firstTrainTime.diff(moment(), "minutes"));


  


// });