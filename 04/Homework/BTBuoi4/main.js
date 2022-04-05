const points = document.getElementById("score");
const btn = document.getElementById("btn");
const wrap = document.querySelector(".wrap");
const box = document.getElementsByClassName("box");

let colors = ["#3498db", "#9b59b6", "#e74c3c", "#2c3e50", "#d35400"];

function createBox() {
  for (let i = 0; i < colors.length; i++) {
    let box = document.createElement("div");
    box.className = "box";
    box.style.backgroundColor = colors[i];
    wrap.appendChild(box);
  }
  deleteBox();
}

createBox();
points.innerText = `Total box: ${box.length}`;

btn.addEventListener("click", function () {
  createBox();
  points.innerText = `Total box: ${box.length}`;
});

function deleteBox() {
  for (let i = 0; i < box.length; i++) {
    box[i].addEventListener("click", function () {
      this.remove();
      points.innerText = `Total box: ${box.length}`;
    });
  }
}
