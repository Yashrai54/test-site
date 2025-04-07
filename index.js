document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn");
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");
  const toggle = document.getElementById('themeToggle');
  const cards = document.querySelectorAll('.card');

  if (btn) {
    btn.addEventListener("click", () => {
      window.location.replace("https://t.me/DuskTalesBot");
    });
  }

  if (hamburger && menu) {
    hamburger.addEventListener("click", () => {
      menu.classList.toggle("show-menu");
    });
  }

  if (toggle) {
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('dark');
    });
  }

  const reveal = () => {
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        card.classList.add('visible');
      }
    });
  };

  window.addEventListener('scroll', reveal);
  reveal(); 
});
const canvas=document.getElementById("particleCanvas")
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 50; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 2 + 1,
    dx: (Math.random() - 0.5) * 0.5,
    dy: (Math.random() - 0.5) * 0.5
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#FFD700';
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fill();
    p.x += p.dx;
    p.y += p.dy;

    // Bounce off edges
    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  });
  requestAnimationFrame(draw);
}

draw();