function activeAdd() {
  const page = document.querySelector(".nav-link");
  page.classList.add("active");
  console.log("add");
}
function activeRemove() {
  const page = document.querySelector(".nav-link");
  page.classList.remove("active");
  console.log("removeu");
}

document.querySelector(".nav-link").addEventListener("click", activeAdd());
document.querySelector(".rm").addEventListener("click", activeRemove);
