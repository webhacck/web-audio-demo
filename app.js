var box = document.getElementById('box');
var text = document.getElementById('text');
var log = document.getElementById('log');
var acc_g, fr, au;

box.addEventListener('touchstart', function() {
  window.addEventListener('devicemotion', function(e) {
    acc_g = e.accelerationIncludingGravity;
    
    fr = 880 * Math.sqrt(acc_g.x*acc_g.x);
    text.textContent = fr;
    log.textContent = Math.sqrt(acc_g.x * acc_g.x);
    au.set({freq:fr});
  });
  au = T("sin", {freq:880, mul:0.5}).play();
});