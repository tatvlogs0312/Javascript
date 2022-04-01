//1.Truy cập vào thẻ h1 có id=“heading” thay đổi màu chữ thành ‘red’, và in hoa nội dung của thẻ đó

const h1 = document.getElementById("heading");
h1.style.color = "red";
h1.style.textTransform = "uppercase";

//2.Thay đổi màu chữ của tất cả thẻ có class “para” thành màu “blue” và có font-size = “20px”
const para = document.querySelectorAll(".para")
para.forEach(ele=>{
    ele.style.fontSize = "20px";
    ele.style.color = "blue";
});

//3.Thêm thẻ a link đến trang ‘facebook’ ở đằng sau thẻ có class “para-3”
const link = document.createElement("a");
link.innerText = "Facebook";
link.href = "https://www.facebook.com/";

const content = document.querySelector(".content");
document.body.insertBefore(link,content);

//4.Thay đổi nội dung của thẻ có id=“title” thành “Đây là thẻ tiêu đề”
const title = document.getElementById("title");
title.innerText = "Đây là thẻ tiêu đề";

//6.Thay thế thẻ có class=“para-3” thành thẻ button có nội dung là “Click me”
const para3 = document.querySelector(".para.para-3");
const button = document.createElement("button");
button.innerHTML = "Click me";
para3.parentElement.replaceChild(button,para3);

