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
];

// 1. In ra thông tin các sản phẩm trong giỏ hàng theo cấu trúc sau
// Tên - Giá - Thương Hiệu - Số lượng
// Ví dụ : OPPO Find X3 Pro - 19500000 - OPPO - 3
console.log("Câu 1");
function displayInfo(arr) {
  arr.forEach((products) => {
    console.log(
      `${products.name} - ${products.price} - ${products.brand} - ${products.count}`
    );
  });
}
displayInfo(products);

// 2. Tính tổng tiền tất cả sản phẩm trong giỏ hàng
// Tổng tiền mỗi sản phẩm = price * count
console.log("Câu 2");
function calculateTotalMoney(arr) {
  let sum = 0;
  arr.forEach((products) => {
    sum += products.price * products.count;
  });
  return sum;
}
console.log(calculateTotalMoney(products));

// 3. Tìm các sản phẩm của thuơng hiệu "Apple"
console.log("Câu 3");
function findByBrand(arr, brandName) {
  return arr.filter(
    (products) => products.brand.toLowerCase() == brandName.toLowerCase()
  );
}
console.log(findByBrand(products, "Apple"));

// 4. Tìm các sản phẩm có giá > 20000000
console.log("Câu 4");
function findByPrice(arr, price) {
  return arr.filter((products) => products.price == price);
}
console.log(findByPrice(products, 15500000));

// 5. Tìm các sản phẩm có chữ "pro" trong tên (Không phân biệt hoa thường)
console.log("Câu 5");
function findByName(arr, brandName) {
  return arr.filter((products) =>
    products.name.toLowerCase().includes(brandName.toLowerCase())
  );
}
console.log(findByName(products, "Pro"));

// 6. Thêm 1 sản phẩm bất kỳ vào trong mảng product
console.log("Câu 6");
function addProducts(arr, name, price, brand, count) {
  let newProduct = {
    name: name,
    price: price,
    brand: brand,
    count: count,
  };
  arr.push(newProduct);
  return arr.slice();
}
console.log(addProducts(products, "Iphone XS max", 10000000, "Apple", 4));

//7. Xóa tất cả sản phẩm của thương hiệu "Samsung" trong giỏ hàng
console.log("Câu 7");
function deleteProduct(arr, brand) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].brand == brand) {
      arr.splice(i, 1);
    }
  }
  return arr.slice();
}
console.log(deleteProduct(products, "Samsung"));

// 8. Sắp xếp giỏ hàng theo price tăng dần
console.log("Câu 8");
function sortByPrice(arr) {
  arr.sort((a, b) => (a.price > b.price ? 1 : -1));
  return arr.slice();
}
console.log(sortByPrice(products));

// 9. Sắp xếp giỏ hàng theo count giảm dần
console.log("Câu 9");
function sortByCount(arr) {
  arr.sort((a, b) => (a.count < b.count ? 1 : -1));
  return arr.slice();
}
console.log(sortByCount(products));

// 10. Lấy ra 2 sản phẩm bất kỳ trong giỏ hàng
function get2Products(arr) {
  let newArr = [];
  for (let i = 0; newArr.length < 2; i++) {
    let ran = Math.floor(Math.random() * arr.length);
    if (newArr.includes(arr[ran]) == false){
      newArr[i] = arr[ran];
    }
  }
  return newArr;
}
console.log(get2Products(products));
