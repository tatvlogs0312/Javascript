console.log("Xin chào");

//Khai báo biến
let name = "Tuấn";
console.log(name);

name = 20;
console.log(name);

const email = "a@gmail.com";
console.log(email);

let firstName = "Trần";
let lastName = "Anh Tuấn";
console.log(firstName + " " + lastName);

console.log(`Xin chào các bạn , tôi là ${lastName} ${2020 - 2002} tuổi`);

let message = `Xin chào , "Tuan" 19 tuổi`;
console.log(message);

function sum(a, b) {
  return a + b;
}

console.log(sum(3, 4));
console.log(sum("3", 4));

// First class function
// 1 function có thể gán cho 1 biến ==> function expresstion
let sum1 = function (a, b) {
  return a + b;
};
console.log(sum1(5, 5));

// Higher order function
// 1 function có thể truyền vào như 1 tham số cho function khác
// 1 function có thể reuturn về 1 function khác

// arrow function
//cách 1
let sum2 = (a, b) => {
  return a + b;
};
//cách 2
let sum3 = (a, b) => a + b;
console.log(sum3(15, 15));

// BÀI TẬP IF ELSE

// Bài 1: Viết function nhập vào biến mark có giá trị từ 0 -> 100. Kiểm tra giá trị của biến mark và in ra nội dụng sau
// ”A” nếu mark >= 85
// ”B” nếu 70 <= mark < 85 (70 <= mark && mark < 85)
// ”C” nếu 40 <= mark < 70 (40 <= mark && mark <70)
// Các trường hợp còn lại in ra “D”
console.log("Bài 1");
let mark = (a) => {
  if (a > 100 || a < 0) {
    return false;
  }
  if (a >= 85) {
    console.log("A");
  } else if (70 <= a && a < 85) {
    console.log("B");
  } else if (40 <= a && a < 70) {
    console.log("C");
  } else {
    console.log("D");
  }
};
console.log(mark(1000));

//Bài 2: Viết function truyền vào 2 số a, b. In ra màn hình số có giá trị lớn hơn
console.log("Bài 2");
function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
console.log(max(5, 6));

//Bài 3: Viết function nhập vào 1 số. Kiểm tra số đó là số âm, số dương hay là số 0.
console.log("Bài 3");
function amOrDuong(a) {
  if (a <= 100 && a >= 0) {
    if (a > 0) {
      return "Số dương";
    } else if (a < 0) {
      return "Số âm";
    } else {
      return 0;
    }
  } else {
    return false;
  }
}
console.log(amOrDuong(10));

//Bài 4 : Viết function nhập vào 1 số. Kiểm tra số đó là số chẵn hay số lẻ.
console.log("Bài 4");
function chanOrLe(a) {
  //   if (a % 2 == 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  return a % 2 ? true : false;
}
console.log(chanOrLe(2));

//Bài 5 : Viết function nhập vào 1 số. Kiểm tra số đó có đồng thời chia hết cho 3 và 5 không.
console.log("Bài 5");
function chiaHet(a) {
  //   if (a % 3 == 0 && a % 5 == 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  return a % 3 == 0 && a % 5 == 0 ? true : false;
}
console.log(chiaHet(15));

//Bài 6 : Viết function nhập vào 3 số a, b, c. Kiểm tra xem c có bằng a + b không?
console.log("Bài 6");
function cong(a, b, c) {
  if (c == a + b) {
    return true;
  }
  return false;
}
console.log(cong(2, 3, 5));

//BÀI TAP Switch - case

// Bài 1:
// Tạo biến day có giá trị từ 0 -> 6, là các ngày trong tuần Trong đó: (0 - chủ nhật, 1 - thứ 2, …, 6 - Thứ 7)
// Sử dụng switch-case để in ra ngày tương ứng với giá trị của biến day
// Ví dụ: day = 6 --> “Hôm nay là thứ 7”
console.log("Bài 1");
let day = 1;
switch (day) {
  case 0:
    console.log("Thứ 2");
    break;
  case 1:
    console.log("Thứ 3");
    break;
  case 2:
    console.log("Thứ 4");
    break;
  case 3:
    console.log("Thứ 5");
    break;
  case 4:
    console.log("Thứ 6");
    break;
  case 5:
    console.log("Thứ 7");
    break;
  case 6:
    console.log("Chủ nhật");
    break;
  default:
    console.log("Ngày không tồn tại");
    break;
}

//Bài 2 :
// Tạo biến month có giá trị từ 1 -> 12, là các tháng trong năm
// Sử dụng switch-case để in ra mùa tương ứng với giá trị của biến month
// 1, 2, 3 : Mùa xuân
// 4, 5, 6 : Mùa hạ
// 7, 8, 9 : Mùa thu
// 10, 11, 12 : Mùa đông
console.log("bài 2");
let mount = 12;
switch (mount) {
  case 1:
    console.log("Mùa xuân");
    break;
  case 2:
    console.log("Mùa xuân");
    break;
  case 3:
    console.log("Mùa xuân");
    break;
  case 4:
    console.log("Mùa hạ");
    break;
  case 5:
    console.log("Mùa hạ");
    break;
  case 6:
    console.log("Mùa hạ");
    break;
  case 7:
    console.log("Mùa thu");
    break;
  case 8:
    console.log("Mùa thu");
    break;
  case 9:
    console.log("Mùa thu");
    break;
  case 10:
    console.log("Mùa đông");
    break;
  case 11:
    console.log("Mùa đông");
    break;
  case 12:
    console.log("Mùa đông");
    break;
  default:
      console.log("Ko có tháng này trong năm");
    break;
}


//BÀI TẬP VÒNG LẶP
// Bài 1. Viết function truyền vào 1 chuỗi bất kỳ, hãy sao chép chuỗi đó lên 10 lần.
// Ví dụ : repeatString(“a”) => Kết quả trả về là “aaaaaaaaaa”
console.log("Bài 1")
function lapA(a){
    let chuoi = "";
    for(let i = 0 ; i < 10 ; i++){
        chuoi+=a;
    }
    return chuoi;
}
console.log(lapA("a"));

// Bài 2. Viết function truyền vào 1 chuỗi bất kỳ, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang.
// Ví dụ: repeatString(“a”) => Kết quả trả về là “a-a-a-a-a-a-a-a-a-a”
console.log("Bài 2")
function lapA2(a){
    let chuoi = "";
    for(let i = 0 ; i < 10 ; i++){
        if(i == 9){
            chuoi += a;
        }
        else{
            chuoi+=a + "-";
        }
    }
    return chuoi;
}
console.log(lapA2("a"));

// Bài 3. Viết function truyền vào 1 chuỗi bất kỳ và 1 số nguyên dương n > 1, hãy viết hàm có tác dụng sao chép đó chuỗi lên n lần, ngăn cách nhau bởi dấu gạch ngang.
// Ví dụ: repeatString(‘a’, 5) => Kết quả trả về là ‘a-a-a-a-a’
console.log("Bài 3")
function lapA3(a,n){
    let chuoi = "";
    for(let i = 0 ; i < n ; i++){
        if(i == n-1){
            chuoi += a;
        }
        else{
            chuoi+=a + "-";
        }
    }
    return chuoi;
}
console.log(lapA3("a",10));

//Bài 4. Tính tổng các số chia hết cho 5 từ 0 -> 100
console.log("Bài 4")
let sum100 = 0;
for(let i = 0 ; i <= 100 ; i++){
    if(i % 5 == 0){
        sum100 += i;
    }
}
console.log(sum100);

//Bài 5: Viết hàm tính thể tích hình cầu, với tham số truyền vào là bán kính của hình cầu.
console.log("Bài 5")
function theTich(r){
    return (4/3)*Math.PI*r*r*r;
}
console.log(theTich(3));

// Bài 6 : Viết hàm truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng. Ví dụ với tham số 3 và 8 ta có kết quả là 22 (bằng 4 + 5 + 6 + 7).
// Note : Kết quả xuôi và ngược là như nhau
// Ví dụ :
// sum(3,8) = 22
// sum(8,3) = 22
console.log("Bài 6")
function tong(a,b){
    let sum = 0;
    if(a > b){
        for(let i = b ; i < a ; i++){
            sum += i;
        }
    }else{
        for(let i = a ; i < b ; i++){
            sum += i;
        }
    }
    return sum;
}
console.log(tong(3,8));
console.log(tong(8,3));

//Bài 7: Cho 1 số, kiểm tra xem số đó có phải là số nguyên tố hay không, kết quả trả về true hoặc false.
console.log("Bài 7")
let check = true;
let so = 5
if(so <= 2){
    console.log(true);
}
let canSo = Math.sqrt(so);
for(let i = 2 ; i < canSo ; i++){
    if(so % i == 0){
        check = false;
    }
}
console.log(check)

// Bài 8: Cho 1 số nguyên dương bất kỳ. Tính tổng tất cả các số nguyên tố mà nhỏ hơn hoặc bằng tham số truyền vào.
console.log("Bài 8")
let sumDuong = 0;
let soDuong = 5;
while(soDuong != 0){
    sumDuong += soDuong;
    soDuong--;
}
console.log(sumDuong);

// Bài 9 : Cho 1 số nguyên dương, viết hàm tính tổng tất cả các ước số của số đó
console.log("Bài 9")
let tongBai9 = 0;
let n = 10;
for(let i = 0 ; i <= n ; i++){
  if(n % i == 0){
    tongBai9 += i;
  }
}
console.log(tongBai9);