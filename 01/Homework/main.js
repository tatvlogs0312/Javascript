// Bài 1: Viết function truyền vào 1 số nguyên dường. Tính giai thừa của số đó
// Ví dụ: calculateFactorial(5) = 5 * 4 * 3 * 2 * 1 = 120

//dùng vòng lặp
console.log("Bài 1");
function calculateFactorial(a){
    let gt = 1;
    while(a != 0){
        gt = gt * a;
        a--;
    }
    return gt;
}
console.log(calculateFactorial(5));

//dùng đệ quy
function calculateFactorial2(a){
    if(a==0){
        return 1;
    }
    return a * calculateFactorial2(a - 1);
}
console.log(calculateFactorial2(5));

// Bài 2: Viết function truyền vào 1 chuỗi. In ra chuỗi đảo ngược của chuỗi đó
// Ví dụ: reverseString(‘hello’) => olleh

//dùng vòng lặp
console.log("Bài 2");
function reverseString(a){
    let string = "";
    for(let j = a.length ; j >= 0  ; j--){
        string += a.charAt(j);
    }
    return string;
}
console.log(reverseString("hello"));

//dùng reverse()
function reverseString2(a){
    let array = a.split("");
    let string = array.reverse().join("");
    return string;
}
console.log(reverseString2("hello"));

// Bài 3: Viết function truyền vào mã quốc gia. Trả về message có ý nghĩa là “Xin chào”, tương ứng với mã quốc gia được truyền vào
// Ví dụ: translate(‘VN’) => “Xin chào”
// translate(‘EN’) => “Hello”
// Gợi ý : Sử dụng switch - case . Học viên tự nghĩ ra 1 vài mã quốc gia và câu chào tương ứng với quốc gia đó
console.log("Bài 3");
function translate(a){
    switch (a) {
        case "VN":
          return "Xin chào";
        case "EN":
          return "Hello";
        case "KR":
          return "안녕";
        case "FR":
          return "Bonjour";
        case "CN":
            return "你好";
        case "JP":
            return "やあ";
        default:
          return "";
      }
}
console.log(translate("CN"));

// Bài 4: Cho function truyền vào 1 chuỗi dài hơn 15 ký tự. Viết 1 function cắt chuỗi, lấy ra 10 ký tự đầu tiên và thêm vào dấu “…” ở cuối chuỗi.
// Ví dụ : subString(“xinchaocacbandenvoiTechmaster”) => “xinchaocac…”
console.log("Bài 4");
function subString(a){
    if(a.length > 15){
        return a.substring(0,10) + "....";
    }
    return a;
}
console.log(subString("xinchaocacbandenvoiTechmaster"));