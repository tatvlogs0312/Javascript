// Object

let user = {
    name: "Nguyễn Văn A",
    age: 23,
    email: "abc@gmail.com",

    sayHello(){
        console.log("Xin chào");
    },

    eat(food){
        console.log(`Ăn ${food}`);
    },
}

// getter
console.log(user.name);
console.log(user.age);
console.log(user["age"]);

// setter
user.name = "Nguyễn Văn B";
console.log(user);

user.sayHello();
user.eat("cơm");

// lặp object
let key = Object.keys(user); // Trả về mảng các keys
console.log(key);
// cách 1
for(let i = 0 ; i < key.length ; i++){
    console.log(user[key[i]]);
}
// cách 2
for(const keys in user){
    console.log(user[keys]);
}


// Thực hành object
let products = [
    {
        name: "Iphone 13 Pro Max", // Tên sản phẩm
        price: 3000000, // Giá mỗi sản phẩm
        brand: "Apple", // Thương hiệu
        count: 2, // Số lượng sản phẩm trong giỏ hàng
    },
    {
        name: "Samsung Galaxy Z Fold3",
        price: 41000000,
        brand: "Samsung",
        count: 1,
    },
    {
        name: "IPhone 11",
        price: 15500000,
        brand: "Apple",
        count: 1,
    },
    {
        name: "OPPO Find X3 Pro",
        price: 19500000,
        brand: "OPPO",
        count: 3,
    },
]

// 1. In ra thông tin các sản phẩm trong giỏ hàng theo cấu trúc sau
// Tên - Giá - Thương Hiệu - Số lượng
// Ví dụ : OPPO Find X3 Pro - 19500000 - OPPO - 3

function displayInfo(arr){
    arr.forEach(products => {
        console.log(`${products.name} - ${products.price} - ${products.brand} - ${products.count}`);
    });
}
displayInfo(products);

// 2. Tính tổng tiền tất cả sản phẩm trong giỏ hàng
// Tổng tiền mỗi sản phẩm = price * count
function calculateTotalMoney(arr){
    let sum = 0;
    arr.forEach(products => {
        sum += products.price * products.count;
    });
    return sum;
}
console.log(calculateTotalMoney(products));

// 3. Tìm các sản phẩm của thuơng hiệu "Apple"
function findByBrand(arr,brandName){
    return arr.filter(products => products.brand.toLowerCase() == brandName.toLowerCase());
}
console.log(findByBrand(products,"Apple"));

// 4. Tìm các sản phẩm có giá > 20000000
function findByPrice(arr,price){
    return arr.filter(products => products.price == price);
}
console.log(findByPrice(products,200000));

// 5. Tìm các sản phẩm có chữ "pro" trong tên (Không phân biệt hoa thường)
function findByName(arr,brandName){
    return arr.filter(products => products.name.toLowerCase().includes(brandName.toLowerCase()));
}
console.log(findByName(products,"Pro"));