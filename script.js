let open = document.getElementById("open");
let close = document.getElementById("close");
let container = document.querySelector(".container");
let btn = document.querySelector(".btn");
let search = document.querySelector(".search");
let input = document.querySelector(".input");

open.addEventListener("click", function () {
  container.classList.add("show-nav");
});

close.addEventListener("click", function () {
  container.classList.remove("show-nav");
});

btn.addEventListener("click", function () {
  search.classList.toggle("active");
  input.focus();
});
