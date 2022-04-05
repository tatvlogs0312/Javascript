// Lắng nghe sự kiện keydown
document.addEventListener("keydown", function (event) {
    if(event.keyCode == 13){
        console.log("Còn cái nịt")
    }
    else{
        console.log("Còn cái túi bóng")
    }
});

const inputEl = document.querySelector("input");
inputEl.addEventListener("keydown" ,function(event){
    if(event.keyCode == 13){
        let value = inputEl.value;
        //let value = event.target.value;
        //let value = this.value();
        if(value.toLocaleLowerCase() == "thầy huấn"){
            alert(` Từ khóa bạn vừa nhập là :Thầy Tiến`);
        }
        else{
            alert(` Từ khóa bạn vừa nhập là :${value}`);
        }
    }
})

inputEl.addEventListener("change" ,function(event){
    let value = event.target.value;
    inputEl.value = value.toUpperCase();
})

inputEl.addEventListener("focus" ,function(event){
    let value = event.target.value;
    inputEl.value = value.toLocaleLowerCase();
})

// // Lắng nghe sự kiện keyup
// document.addEventListener("keyup", function () {
//     console.log("keyup");
// });

// // Lắng nghe sự kiện keypress
// document.addEventListener("keypress", function () {
//     console.log("keypress");
// });
