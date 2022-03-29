// Array

let arr = [];
arr[0] = "Hello";
arr[1] = true;
arr[2] = 10;

console.log(arr);

// In phần tử
let numbers = [1,2,3,4,5];
for(let i = 0 ; i < numbers.length ; i++){
    console.log(numbers[i]);
}

// unknow funtion
numbers.forEach(function(value,index){
    console.log(`${value} - ${index}`)
});
// arrow funtion
numbers.forEach((value,index)=>{
    console.log(`${value} - ${index}`)
});

// Tính tổng
let total = 0;
for(let i = 0 ; i < numbers.length ; i++){
    total += numbers[i];
}
console.log(total)

//
let arr1 = [1,2,3,10,12];
let arr2 = [1,2,3];
let text = "1,2,3";

console.log(arr1 == arr2);
console.log(arr1 != arr2);
console.log(arr1 == text);
console.log(arr1.sort() == arr1);

// sắp xếp theo ascii
console.log(arr1.sort());
// sắp xếp theo giá trị
console.log(arr1.sort((a,b) => a-b));




let numbers1 = [1,2,3,4]
// map : for
let numbers2 = [];
for (let i = 0; i < numbers1.length; i++) {
    numbers2[i] = numbers1[i] * 2;
}

let newArr = numbers.map(element => element * 2);

// filter : for + if
// Cách ngắn gọn
let arrOdd = numbers1.filter(element => element % 2 == 1)
console.log(arrOdd)
// Cách chi tiết
let isOdd = value  => value % 2 == 1;
let arrOdd2 = numbers1.filter(isOdd)

// find : for + if + break 
// Giá đầu tiên tìm thấy
let firstOddNumber = numbers1.find(element => element % 2 == 1)
console.log(firstOddNumber)

// findIndex : for + if + break
// Chỉ số đầu tiên tìm thấy
let indexOddNumber = numbers1.findIndex(element => element % 2 == 1)
console.log(indexOddNumber)

// some()
// Chỉ cần 1 phần tử thỏa mãn điều kiện => true
// Ko phần tử nào thỏa mãn => false
console.log(numbers1.some(element => element > 5));
console.log(numbers1.some(element => element >= 3));

// very()
// Chỉ cần 1 phần tử không thỏa mãn điều kiện => false
// Mọi phần tử nào thỏa mãn => true
console.log(numbers1.every(element => element > 2));
console.log(numbers1.every(element => element > 0));

// Thực hành array
//Bài 1: Viết function tìm số lớn nhất trong mảng
console.log("Bài 1")
function timMax(arrNumber){
    let max = arrNumber[0];
    for(let i = 1 ; i < arrNumber.length ; i++){
        if(arrNumber[i] > max){
            max = arrNumber[i];
        }
    }
    return max;
}
let arrNumber = [1,2,3,4];
console.log(timMax(arrNumber))

//Bài 3: Viết function cho phép truyền vào 1 mảng các số, kết quả trả về là 1 mảng mới với các số là số dư tương ứng khi chia mảng cũ cho 2
//Ví dụ : [4,2,5,6,2,7] => [0,0,1,0,0,1]
console.log("Bài 3")
function chiaDoi(arr){
    return newarr = arr.map(element => element % 2);
}
console.log(chiaDoi([4,2,5,6,2,7]))

// Bài 4: Viết function truyền vào 1 chuỗi, hãy sao chép đó chuỗi lên 10 lần (Sử dụng array để làm)
// Ví dụ: repeatString(‘a’) => Kết quả trả về là ‘aaaaaaaaaa’
console.log("Bài 4")
function repeatString(arr){
    for(let i = 0 ; i < 10 ; i++){
        arr.push("a");
    }
    return arr.join("");
}
console.log(repeatString([]));

// Thực hành array2
// Bài 1: Viết function để kiểm tra 1 giá trị có nằm trong mảng hay không?
// checkElementExist([1,2,3,4,5], 5) => true
// checkElementExist([1,2,3,4,5], 6) => false

console.log("Bài 1")
// Dùng some
function checkElementExist(arr , a){
    return arr.some(element => element == a);
}
console.log(checkElementExist([1,2,3,4,5],5));
console.log(checkElementExist([1,2,3,4,5],6));

// Dùng indexOf
function checkElementExist2(arr,a){
    let index = arr.indexOf(a);
    return index != -1 ? true : false;
}
console.log(checkElementExist2([1,2,3,4,5],5));
console.log(checkElementExist2([1,2,3,4,5],6));

// Bài 2: Viết function truyền vào 1 mảng các số, và 1 giá trị bất kỳ. Trả về mảng mới với các giá trị lớn hơn giá trị truyền vào
// getElementGreater([1,2,3,4,5], 3) => [4,5]
// getElementGreater([1,2,3,4,5], 5) => []
console.log("Bài 2")
function getElementGreater(arr,a){
    return newArr = arr.filter(element => element > a);
}
console.log(getElementGreater([1,2,3,4,5], 3));
console.log(getElementGreater([1,2,3,4,5], 5));

// Bài 3: Viết function để tạo mã màu HEX ngẫu nhiên.
// randomHexCode() => #728a98
// randomHexCode() => #a72938
console.log("Bài 3")
function randomHexCode(){
    let arr = ['a','b','c','d','e','f',0,1,2,3,4,5,6,7,8,9];
    let arr2 = ['#']
    for(let i = 0 ; i < 6 ; i++){
        let x = Math.floor(Math.random() * 16);
        arr2.push(arr[x]);
    }
    return arr2.join("");
}
console.log(randomHexCode());

