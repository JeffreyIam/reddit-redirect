var el = document.createElement('div');
var i = 60;
el.textContent = "Countdown: " + i;
el.setAttribute('class', 'popup');
document.body.appendChild(el);

var intervalID = setInterval(function() {
  if (i === 0) {
    window.location = "http://read.pudn.com/downloads160/ebook/719437/The_Algorithm_Design_Manual(Springer_Verlag).pdf";
    clearInterval(intervalID);
  }
  el.textContent = "Countdown: " + i;
  i--;
}, 1000);
