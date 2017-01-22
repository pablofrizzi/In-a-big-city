var $btn = document.getElementById('btn');
var $number = document.getElementById('number').textContent;
var currCount = parseInt($number,10);


var appCount = function() {
  currCount += 1;
  document.getElementById('number').textContent = currCount;
}

$btn.addEventListener('click', appCount);
