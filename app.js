var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var stop = document.getElementById('stop');
var log = document.getElementById('log');
var acc_g, fr, au;
var sw=true, sw2=true;

btn1.addEventListener('touchstart', function() {
  window.addEventListener('devicemotion', function(e) {
    acc_g = e.accelerationIncludingGravity;
    
    fr = 880 * Math.sqrt(acc_g.x*acc_g.x);
    au.set({freq:fr});
  });
  au = T("sin", {freq:880, mul:1.5}).play();
});

btn2.addEventListener('touchstart', function() {
  window.addEventListener('devicemotion', function(e) {
    acc_g = e.accelerationIncludingGravity;
    
    fr = 880 * Math.sqrt(acc_g.x*acc_g.x);
    au.set({freq:fr});
  });
  au = T("saw", {freq:880, mul:1.5}).play();
});

stop.addEventListener('click', function() {
  au.pause();
})

function setBtn() {
  if(sw) {
    btn.style.backgroundColor = "red";
    sw = false;
  }
  else {
    btn.style.backgroundColor = "white";
    sw = true;
  }
}