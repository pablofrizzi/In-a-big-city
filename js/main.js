var $btn = document.getElementById('btn');
var $number = document.getElementById('number').textContent;
var currCount = parseInt($number,10);


var appCount = function() {
  var  newCount = currCount + 1;
  document.getElementById('number').innerHTML = newCount;
}

$btn.addEventListener('click', appCount);
