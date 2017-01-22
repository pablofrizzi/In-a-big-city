var $btn = document.getElementById('btn');
var $number = document.getElementById('number').textContent;
var currCount = parseInt($number,10);


var appCount = function() {
  currCount += 1;
  document.getElementById('number').textContent = currCount;
  $btn.removeEventListener('click', appCount);
}

$btn.addEventListener('click', appCount);
