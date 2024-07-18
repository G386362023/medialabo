
// 表示
function print(data) {
  var l1 = ["緯度: " + data.coord.lon, "経度: " + data.coord.lat, "天気: " + data.weather[0].description, "最高気温: " + data.main.temp_max, "最低気温: " + data.main.temp_min, "湿度: " + data.main.humidity, "都市名: " + data.name];
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

// ボタン
let b = document.querySelector('button#btn');
b.addEventListener('click', sendRequest);

// 通信を開始する処理
function sendRequest() {

  //1.ID取得
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
  let id = o.getAttribute('value');

  //2.URLを設定
	let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/' + id + '.json';

	//3.通信開始
	axios.get(url)
		.then(showResult)
		.catch(showError)
		.then(finish);
}

// 通信が成功した時の処理
function showResult(resp) {
	// サーバから送られてきたデータを出力
	let data = resp.data;
	// data が文字列型なら，オブジェクトに変換する
	if (typeof data === 'string') {
		data = JSON.parse(data);
	}
  //表示
  print(data);
}

// 通信エラーが発生した時の処理
function showError(err) {
	console.log(err);
}	

// 通信の最後にいつも実行する処理
function finish() {
	console.log('Ajax 通信が終わりました');
}