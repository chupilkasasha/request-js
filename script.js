// let options = {
//   width: 1366,
//   height: 768,
//   background: 'green',
//   font: {
//     size: '16px',
//     color: 'red'
//   }
// };

// console.log(JSON.stringify(options))//json на сервер
// console.log(JSON.parse(JSON.stringify(options)));// с сервера парсим

//Manipulating server requests

let inputGrn1 = document.getElementById('grn-usd'),
inputGrn2 = document.getElementById('grn-eur'),
inputUsd = document.getElementById('usd'),
inputEur = document.getElementById('eur'),
btn = document.querySelector('.btn');

// grn - usd

inputGrn1.addEventListener('input', () => {
  let req1 = new XMLHttpRequest();
  //reqest.open(method, url, async, login, pass); 5
  req1.open('GET', 'current.json');
  req1.setRequestHeader('Content-type', 'json; charset=utf-8');
  req1.send();

  //status
  //statusText
  //responseText / respons / текст ответа сервера
  //readyState 1 2 3 4
  //load
  //response ответ с сервера

  req1.addEventListener('readystatechange', function () {
    if (req1.readyState === 4 && req1.status == 200) {
      var data = JSON.parse(req1.response);
      inputUsd.value = inputGrn1.value / data.usd;
    } else {
      inputUsd.value = 'error';
    }

  });

});

// grn - eur

inputGrn2.addEventListener('input', () => {
  let req2 = new XMLHttpRequest();

  req2.open('GET', 'current.json');
  req2.setRequestHeader('Content-type', 'json; charset=utf-8');
  req2.send();

  req2.addEventListener('readystatechange', function () {
    if (req2.readyState === 4 && req2.status == 200) {
      var data = JSON.parse(req2.response);
      inputEur.value = inputGrn2.value / data.eur;
    } else {
      inputEur.value = 'error';
    }

  });

});

btn.addEventListener('click', function(){
  inputUsd.value = '';
  inputGrn1.value = '';
  inputEur.value = '';
  inputGrn2.value = '';
});