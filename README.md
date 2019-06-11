# Train-Scheduler
This repo shows the use of Javascript with Firebase to store data. When the page is loaded we have stored details of train times that are pulled from Firebase and appended to the table. We are grabbing these values the user inputs and storing them in an object with a key/value pair in Firebase, taking a snapshot each time the information is added too. Furthermore we are passing the First Train time through the moment method and calculating the minutes away and time arrival. We do this by passing the train time the user inputs into the moment function where the computer registers the current time as an object in hour and minute format. We must also take the frequency of the train and put that into number. Next we take the current time given to us by the moment function library and convert that and the arrival of the train time all into minutes. We take the remainder known and store it as a variable diffTime.  By taking the current time in minutes and the difference of the train arrival time in minutes we find the remainder of frequency divided into that total number.This subtracted by the frequency give us the minutes remaining until the next train arrives. Finally we must add the current time and the minutes till the next train arrive to give us the time that the train arrives. 

## Perquisites
You need to git pull this repo to your desktop using git clone . and the url from git hub. 

## Running Tests/Instructions
Open the file in  your browser (preferably google chrome) to test the code.
This will show a table with stored data loaded from Firebase of Train Names, the destination, frequency, next arrival, and minutes away. The user can input their own train information and the program will calculate the next time the train will arrive how many minutes it is away from arriving. 

## Built with:
<ol>
<li> HTML 
<li> CSS 
<li> Javascript
<li> JQuery
<li> Firebase
<li> Moment.js
</ol>

### Local Development Environment for website Repo
The following will get up and running locally.

Author
Adam Lehrer

![Train Scheduler]()

