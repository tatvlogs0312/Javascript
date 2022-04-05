// document.addEventListener("mousedown", function () {
//   console.log("mousedown");
// });

// document.addEventListener("mousemove", function () {
//   console.log("mousemove");
// });

// document.addEventListener("mouseup", function () {
//   console.log("mouseup");
// });

// document.addEventListener("click", function () {
//   console.log(event);
// });


document.addEventListener('click',function(event){
    // Xóa phần tử trước đó
    const boxEl = document.querySelector(".box")
    if (boxEl) {
        boxEl.parentElement.removeChild(boxEl)
    }

    // bước 1 : tạo box
    let box = document.createElement("div")
    box.classList.add("box")

    // bước 2 : set vị trí cho box
    box.style.left = `${event.offsetX - 50}px`
    box.style.top = `${event.offsetY - 50}px`

    // bước 3 : gán vào dom
    document.body.appendChild(box)
})