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

////4-2

// let h1 = document.querySelector('div#result');

var l1 = ["緯度: " + data.coord.lon, "経度: " + data.coord.lat, "天気: " + data.weather[0].description, "最高気温: " + data.main.temp_max, "最低気温: " + data.main.temp_min, "湿度: " + data.main.humidity, "都市名: " + data.name];

let b = document.querySelector('button#btn');
b.addEventListener('click', showSelectResult);

function showSelectResult() {

  let w = document.querySelectorAll('ul#list > li');
  for (let n of w) { n.remove(); }
  let w2 = document.querySelector('ul#location');

  let s = document.querySelector('select#city');
  let idx = s.selectedIndex;  // idx 番目の option が選択された

    let os = s.querySelectorAll('option');  // s の子要素 option をすべて検索
    let o = os.item(idx);       // os の idx 番目の要素

    console.log('選択された ' + idx + ' 番目の option の情報:');
    console.log('  value=' + o.getAttribute('value'));  // id 属性を表示
    console.log('  textContent='+o.textContent);
    
    if (idx == 1) {
      for (var i = 0; i < l1.length; i++) {
        var l1List = document.createElement('li');
        l1List.textContent = l1[i];
      
        document.getElementById('list').appendChild(l1List);
      }
      console.log(data.coord.lon);
      console.log(data.coord.lat);
      console.log(data.weather[0].description);
      console.log(data.main.temp_max);
      console.log(data.main.temp_min);
      console.log(data.main.humidity);
      console.log(data.name);
    }
}