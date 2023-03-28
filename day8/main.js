const API_KEY = "9812c310627f5f1d4cf052d4df4a947e";

navigator.geolocation.getCurrentPosition(
  (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => console.log(data));
  },

  () => alert("Now allowed")
);

// 화살표함수 , 일반함수는 완전히 같진않다.
