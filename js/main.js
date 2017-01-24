var $btn = document.getElementById('btn');
var $number = document.getElementById('number').textContent;
var currCount = parseInt($number,10);
var $clicked = document.getElementById('appreciate');

var appCount = function() {
  currCount += 1;
  document.getElementById('number').textContent = currCount;
  $btn.removeEventListener('click', appCount);
  $btn.textContent = "THANK YOU!";
  $clicked.className = 'clicked';
  $btn.disabled;
}

$btn.addEventListener('click', appCount);
