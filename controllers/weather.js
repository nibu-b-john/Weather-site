const https = require("https");
const dotenv = require("dotenv");
dotenv.config();

exports.hello = (req, res, next) => {
  res.json("hey");
};

exports.askInput = (req, res, next) => {
  res.render("input.ejs");
};
exports.attainedInput = (req, res, next) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${req.body.city}&appid=${process.env.API_KEY}&units=metric`;
  https.get(url, (response) => {
    response.on("data", (weather) => {
      const data = JSON.parse(weather);
      const weatherData = data.weather;
      const main = data.main;
      const coord = data.coord;
      const name = data.name;
      const wind = data.wind;
      const imageUrl = `https://openweathermap.org/img/wn/${weatherData[0].icon}@4x.png`;
      res.render("showWeather", {
        weatherData: weatherData,
        imgUrl: imageUrl,
        main: main,
        name: name,
        wind: wind,
        coord: coord,
      });
    });
  });
  res.res;
};

//https://api.openweathermap.org/data/2.5/weather?q=london&appid=d19877b60e33d88d860eff5661a77a05
