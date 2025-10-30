
//infrared thermometer code

const i2c = new I2C();
i2c.setup( {
  scl: D31, 
  sda: D30,
  bitrate: 50000
});

const mlx = require("MLX90614").connect(i2c);

setInterval(() => {
  try {
    const ambientTemp = mlx.readAmbientTemperature();
    const seenTemp = mlx.readObject1Temperature();
    console.log("the ambient temp is " + ambientTemp);
    console.log("the object temp is " + seenTemp);
  } catch (error) {
    console.log("error reading");
  }
  console.log();
}, 400);

