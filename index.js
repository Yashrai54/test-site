// alert("Event Infos are now available.")
document.getElementById("btn").addEventListener("click",()=>{
    window.location.replace("https://t.me/DuskTalesBot")
    
})
document.getElementById("hamburger").addEventListener("click",()=>{
   var x=document.getElementById("menu");
   if(x.style.display=="block"){
     x.style.display="none";
   }
   else{
   x.style.display="block";
   }
})
const hamburger = document.getElementById("hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("show");
  hamburger.classList.toggle("active"); // Add rotation effect
});
