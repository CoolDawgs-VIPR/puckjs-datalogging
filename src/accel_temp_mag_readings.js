
Puck.accelOn(); //initialize accelerometer
Puck.magOn(); //initialize magnetometer

var repeatedTask;
    
function start() {
  repeatedTask = setInterval(() => { //repeat the readings to console
    var acceldata = Puck.accel();
    var magnetometerdata = Puck.mag();
    var temp = E.getTemperature();

    console.log(acceldata);
    console.log(temp);
    console.log(magnetometerdata);
  }, 100); //repeat this every 100 milliseconds
}

function stop() { //type stop() in the console to stop the readings
  clearInterval(repeatedTask);  
  console.log("stopped the readings");
  console.log("type start() to restart the readings");
}

start();
