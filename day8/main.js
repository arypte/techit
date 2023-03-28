const API_KEY = "9812c310627f5f1d4cf052d4df4a947e";

const weatherIcon = document.querySelector(".weatherIcon");
const weatherTemp = document.querySelector(".weatherTemp");

navigator.geolocation.getCurrentPosition(
  (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;

    console.log(url);

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        weatherTemp.innerText =
          data.name + "," + parseInt(data.main.temp) + "C";

        weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      });
  },

  () => alert("Now allowed")
);

// 화살표함수 , 일반함수는 완전히 같진않다.
// 쿼리스트링?
