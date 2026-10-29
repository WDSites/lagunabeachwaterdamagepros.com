(function(){
var btn=document.querySelector('.nav-toggle');var menu=document.getElementById('mobile-menu');
if(btn&&menu){btn.addEventListener('click',function(){var open=menu.classList.toggle('open');btn.setAttribute('aria-expanded',open?'true':'false');btn.textContent=open?'Close':'Menu';});}
})();
