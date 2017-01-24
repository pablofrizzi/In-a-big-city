var btn = document.getElementById('btn');
var clicked = document.getElementById('appreciate');

var appCount = function() {
  var number = document.getElementById('number').textContent;
  document.getElementById('number').textContent = parseInt(number,10) + 1;
  /*button remove*/
  btn.removeEventListener('click', appCount);
  btn.textContent = "THANK YOU!";
  clicked.className = 'clicked';
  btn.disabled;
}

btn.addEventListener('click', appCount);
