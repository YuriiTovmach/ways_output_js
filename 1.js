var p;
p = document.getElementById('out');

function f1(){p.innerHTML = 'one';}
function f2(){p.innerHTML += ' <b>two</b>';}
function f3(){p.innerHTML = p.innerHTML + 'three';}
function f4(){p.innerText += ' <b>four</b>';}
function f5(){p.insertAdjacentHTML('beforeBegin','five');}
function f6(){p.insertAdjacentHTML('afterBegin','six');}
function f7(){p.insertAdjacentHTML('beforeEnd','seven');}
function f8(){p.insertAdjacentHTML('beforeEnd','eight');}
function f9(){p.insertAdjacentHTML('afterEnd','nine');}
function f10(){p.outerHTML = '<div class="one">ten</div>';}
function f11(){document.write("eleven");}


