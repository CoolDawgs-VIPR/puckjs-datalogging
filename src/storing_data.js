
let storage = require("Storage");

Puck.accelOn(10);
Puck.magOn();

let repeatedTask;

let storagefile = storage.open("data.csv", "a");


function start() {
  if (storagefile.getLength() == 0) {
    storagefile.write("accX, accY, accZ, gyroX, gyroY, gyroZ, magX, magY, magZ, temp");
  }
  
  repeatedTask = setInterval(() => {
    let accel = Puck.accel();
    let mag = Puck.mag();
    let temp = E.getTemperature();
    
    let newDataLine = [
      accel.acc.x,
      accel.acc.y,
      accel.acc.z,
      accel.gyro.x,
      accel.gyro.y,
      accel.gyro.z,
      mag.x,
      mag.y,
      mag.z,
      temp
      ].join(",") + "\n";
    console.log("logged " + newDataLine);
    storagefile.write(newDataLine);
  });
}

function stop() {
  clearInterval(repeatedTask);
  console.log("stopped the data logging");
  console.log("type start() to restart the logging");
  console.log("the file is now " + storagefile.getLength() + " bytes long");
}

console.log("starting the data logging");
start();