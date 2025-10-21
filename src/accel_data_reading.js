
console.log("reading accel data");

Puck.accelOn(10); //will read the accel data 10 times per second

Puck.on('accel', (accel_data) => {
  console.log(accel_data);
});

var stop = function() { //type stop() in the console to stop the accel and gyro reading
  Puck.accelOff();
  console.log("the reading is stopped");
  return;
};