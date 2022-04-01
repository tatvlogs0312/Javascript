const heading = document.querySelector("h1");

console.log(heading.classList);

//add
heading.classList.add("text-uppercase","text-center");

//remove
heading.classList.remove("text-uppercase","text-center");

//Kiểm tra
console.log(heading.classList.contains("text-uppercase"));
console.log(heading.classList.contains("text-red"));

//Thực hiện công việc sau 1 khoảng thời gian nhất định (ms)
setInterval(function(){
    heading.classList.toggle("text-red");
},1000)