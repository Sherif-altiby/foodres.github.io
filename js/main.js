const bars = document.querySelector(".fa-bars"),
  serch = document.querySelector(".icons .fa-magnifying-glass"),
  love = document.querySelector(".fa-heart"),
  cart = document.querySelector(".fa-cart-shopping"),
  close = document.querySelector(".fa-close"),
  menue = document.querySelector(".menuse-header"),
  overlay = document.querySelector(".overlay"),
  allLinks = document.querySelectorAll(".menuse-header ul li"),
  loveIcons = document.querySelectorAll(".our-menue .menu-conatainer .box .fa-heart");

bars.addEventListener("click", () => {
  // toglle the menue
  menue.classList.toggle("block");
  console.log("red");
});

serch.addEventListener("click", () => {
  // doing search
  overlay.classList.add("block");
});
close.addEventListener("click", () => {
  // when finishing search
  overlay.classList.remove("block");
});
allLinks.forEach((li) => {
  li.addEventListener("click", () => {
    allLinks.forEach((li) => {
      // removing active class
      li.classList.remove("active");
    });
    li.classList.add("active"); // adding active clase to clicked li
    menue.classList.remove("block");
  });
});
loveIcons.forEach(icon=>{
  icon.addEventListener("click", ()=>{

icon.classList.toggle("red")    
  })
})