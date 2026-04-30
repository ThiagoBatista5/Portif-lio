// ── NAVBAR: adiciona classe ao fazer scroll ──
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});
const btn = document.querySelector('.back');

window.addEventListener('scroll', () => {
  if(window.scrollY > 100){
    btn.classList.add('visivel');
  }else {
    btn.classList.remove('visivel');
  };
});
// ── REVEAL ON SCROLL: anima elementos ao entrar na viewport ──
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

reveals.forEach(el => observer.observe(el));
