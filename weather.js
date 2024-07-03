let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

////////// 課題3-2 ここからプログラムを書こう

console.log(data.coord.lon);
console.log(data.coord.lat);
console.log(data.weather[0].description);
console.log(data.main.temp_max);
console.log(data.main.temp_min);
console.log(data.main.humidity);
console.log(data.name);

////4-2

// let h1 = document.querySelector('div#result');

// let h2 = document.createElement('h2');

var l1 = ["緯度: " + data.coord.lon, "経度: " + data.coord.lat, "天気: " + data.weather[0].description, "最高気温: " + data.main.temp_max, "最低気温: " + data.main.temp_min, "湿度: " + data.main.humidity, "都市名: " + data.name];
for (var i = 0; i < l1.length; i++) {
  var l1List = document.createElement('li');
  l1List.textContent = l1[i];

  document.getElementById('list').appendChild(l1List);
}

// let p1 = document.createElement('p1');
// let p2 = document.createElement('p2');
// let p3 = document.createElement('p3');
// let p4 = document.createElement('p4');
// let p5 = document.createElement('p5');
// let p6 = document.createElement('p6');
// let p7 = document.createElement('p7');

// p1.textContent = "緯度: " + data.coord.lon;
// h1.insertAdjacentElement('afterbegin', h2);
// h2.insertAdjacentElement('afterbegin', p1);