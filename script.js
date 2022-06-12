let open = document.getElementById("open");
let close = document.getElementById("close");
let container = document.querySelector(".container");
let btn = document.querySelector(".btn");
let search = document.querySelector(".search");
let input = document.querySelector(".input");
let html = document.querySelector("html");

open.addEventListener("click", function () {
  container.classList.add("show-nav");
  html.style.overflow = "hidden";
});

close.addEventListener("click", function () {
  container.classList.remove("show-nav");
  html.style.overflow = null;
});

btn.addEventListener("click", function () {
  search.classList.toggle("active");
  input.focus();
});
