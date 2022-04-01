//Truy cập trực tiếp

//getElementById
const heading = document.getElementById("heading");
console.log(heading);

//querySelector
const para2 = document.querySelector(".para");
console.log(para2);

const para3 = document.querySelector("p:nth-child(4)");
console.log(para3);

//cha - con
const ul2 = document.querySelector("body > ul");
console.log(ul2);

//anh - em
const ul2_2 = document.querySelector(".box + ul");
console.log(ul2_2);

const ul1 = document.querySelector(".box ul");
console.log(ul1);

const li44 = document.querySelector(".box ul li:last-child");
console.log(li44);

//querySelectorAll => trả về NodeList(ko phải mảng nhưng vẫn truy cập từng phần tử)
const paras = document.querySelectorAll("p");
console.log(paras);
console.log(paras[1]);
console.log(paras.length);

//Duyệt NodeList
//Dùng for
for (let i = 0; i < paras.length ; i++) {
    console.log(paras[i]);    
}

//Dùng Array.from(mảng)
Array.from(paras).map(ele=>console.log(ele));


//Truy cập gián tiếp
//Truy cập phần tử phía trước
console.log(para3.previousElementSibling);
//Truy cập phần tử phía sau
console.log(para3.nextElementSibling);
////Truy cập phần tử cha
console.log(para3.parentElement);


//Thay đổi css
heading.style.color = "red";
heading.style.backgroundColor = "black";

// c1
for (let i = 0; i < paras.length ; i++) {
    paras[i].style.color = "blue"; 
}

// c2
Array.from(paras).map(ele=> {
    ele.style.backgroundColor = "yellow";
});

// c3
paras.forEach(ele => {
    ele.style.fontSize = "30px";
});


//Lấy ra nội dung
console.log(heading.innerHTML);
console.log(heading.innerText);
console.log(heading.textContent);

console.log(ul1.innerHTML);
console.log(ul1.innerText);
console.log(ul1.textContent);

//Thay đổi nội dung
heading.innerHTML = "Xin chào";
heading.innerHTML = "<span>các bạn</span>";

heading.innerText = "Các bạn ổn ko ??";
heading.innerText = "<span>Bất ổn</span>";22

//Tạo thẻ
const link = document.createElement("a");
link.innerText = "Google";
link.href  = "https://www.google.com/";
console.log(link);

//Thêm

//c1
//Thêm vào đầu
//document.body.prepend(link);

//Thêm vào cuối
//document.body.append(link);

//Thêm vào vị trí muốn
//Vd thêm vào trước box
const box = document.querySelector(".box");
document.body.insertBefore(link,box);


//Thực hành
//Tạo thẻ li có nội dung "li new" nằm trước thẻ li 3
const newLi = document.createElement("li");
newLi.innerText = "li new";
const li3 = document.querySelector(".box + ul li:nth-child(3)");
console.log(li3);
ul2.insertBefore(newLi,li3);

//c2
para2.insertAdjacentHTML("beforebegin","<button>Login</button>");

const para1 = document.querySelector("p");
para1.insertAdjacentHTML("afterend","<button>Logout</button>");


//Tạo thẻ
const li = document.createElement("li");
li.innerText = "Li mới";
ul1.insertAdjacentElement("afterbegin",li);


//Xóa
//Truy cập trực tiếp vào cha
//document.body.removeChild(para2);
//Truy cập gián tiếp vào cha
para2.parentElement.removeChild(para2);


//Thay thế
const h2 = document.createElement("h2");
h2.innerText = "ÉT O ÉT";

//c1
//document.body.replaceChild(h2,heading);

//c2
heading.parentElement.replaceChild(h2,heading);


//Copy
//true : sao chép node, attributes và thành phần con của nó
const boxCopy1 = box.cloneNode(true);
//false: chỉ sao chép Node và attributes (mặc định)
const boxCopy2 = box.cloneNode(false);

console.log(boxCopy1);
console.log(boxCopy2);

h2.insertAdjacentElement("afterend",boxCopy1);