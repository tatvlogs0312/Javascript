const btn = document.querySelector("button");
const input = document.querySelector("input");

btn.addEventListener("click", function () {
  if (btn.innerText == "Show") {
    btn.innerText = "Hide";
    input.type = "text";
  } else {
    btn.innerText = "Show";
    input.type = "password";
  }
});
