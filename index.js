document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn");
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");

  if (btn) {
    btn.addEventListener("click", () => {
      window.location.replace("https://t.me/DuskTalesBot");
    });
  } else {
    console.error("Button #btn not found!");
  }

  if (hamburger && menu) {
    hamburger.addEventListener("click", () => {
      menu.style.display = (menu.style.display === "block") ? "none" : "block";
    });
  } else {
    console.error("#hamburger or #menu not found!");
  }
});
