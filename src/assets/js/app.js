let pages = document.querySelector("#pages");

pages.addEventListener("click", function () {
  let pagesDrop = document.querySelector("#drop");
  let minus = document.querySelector("#minus");

  pagesDrop.classList.toggle("hidden");
  minus.classList.toggle("rotate-90");
});

let pages2 = document.querySelector("#pages2");

pages2.addEventListener("click", function () {
  let pagesDrop2 = document.querySelector("#drop2");
  let minus2 = document.querySelector("#minus2");

  pagesDrop2.classList.toggle("hidden");
  minus2.classList.toggle("rotate-90");
});

let menu = document.querySelector("#openMenu");

menu.addEventListener("click", function () {
  let l1 = document.querySelector("#l1");
  let l2 = document.querySelector("#l2");
  let l3 = document.querySelector("#l3");
  l1.classList.toggle("rotate-45");
  l3.classList.toggle("-rotate-45");
  l1.classList.toggle("translate-y-[10px]");
  l3.classList.toggle("-translate-y-[10px]");
  l2.classList.toggle("scale-0");
  let dropDown = document.querySelector("#menu");
  dropDown.classList.toggle("hidden");
  dropDown.classList.toggle("h-0");
  dropDown.classList.toggle("flex");
  dropDown.classList.toggle("h-auto");
});
