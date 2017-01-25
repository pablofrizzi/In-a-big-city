var btn = document.getElementById('btn');
var number = document.getElementById('number');
var clicked = document.getElementById('appreciate');

var appCount = function() {
  number.textContent = parseInt(number.textContent, 10) + 1;
  btn.removeEventListener('click', appCount);
  btn.textContent = "THANK YOU!";
  clicked.className = 'clicked';
  btn.disabled;
}

btn.addEventListener('click', appCount);
