
// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

let s1 = document.querySelector('span#kaisu');
let k = document.createElement('k');
let s2 = document.querySelector('span#answer');
let a = document.createElement('a');
let p1 = document.querySelector('p#result');
let r = document.createElement('r');

// 予想を4回実行する
let b = document.querySelector('#print');
b.addEventListener('click', hantei);

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {

  let i = document.querySelector('input[name="kazu"]');
  let yoso = i.value;
  Number(yoso);

  kaisu++;

  console.log(kaisu+"回目の予想: "+yoso);
  //4-1:
  k.textContent = kaisu;
  s1.insertAdjacentElement('afterbegin', k);

  a.textContent = yoso;
  s2.insertAdjacentElement('afterbegin', a);

  if(kaisu>3){
    console.log("答えは "+kotae+" でした．すでにゲームは終わっています");
    r.textContent = "答えは "+kotae+" でした．すでにゲームは終わっています";
  }else if(kotae==yoso){
    console.log("正解です．おめでとう!");
    r.textContent = "正解です．おめでとう!";
    kaisu=kaisu+2;
  }else if(kaisu==3){
    console.log("まちがい．残念でした答えは"+kotae+" です．");
    r.textContent = "まちがい．残念でした答えは"+kotae+" です．";;
  }else if(kotae<yoso){
    console.log("まちがい．答えはもっと小さいですよ");
    r.textContent = "まちがい．答えはもっと小さいですよ";
  }else if(kotae>yoso){
    console.log("まちがい．答えはもっと大きいですよ");
    r.textContent = "まちがい．答えはもっと大きいですよ";
  }
  
  p1.insertAdjacentElement('afterbegin', r);
  
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
}