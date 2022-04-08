const btn = document.getElementById("btn");
const image = document.getElementById("image");
const select = document.getElementById("breed-list");

// Vừa load trang phải gọi API để render danh sách breed
// API : https://dog.ceo/api/breeds/list/all

async function getBreedList() {
  try {
    // Gọi API để lấy danh sách giống loài
    let res = await axios.get("https://dog.ceo/api/breeds/list/all");

    // Sau khi có data thì hiển thị kết quả trên giao diện
    renderBreed(res.data.message);

    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

function renderBreed(breeds) {
  // Duyệt qua object breeds -> tạo thẻ option -> gắn vào DOM
  // Cách 1: Sử dụng for ... in
  // for (const keys in breeds) {
  //   let option = document.createElement("option");
  //   select.appendChild(option);
  //   option.innerText = keys;
  // }

  // Cách 2 : Lấy ra danh sách keys của objec (Object.keys) => Duyệt mảng
  const key = Object.keys(breeds);
  for (let i = 0; i < key.length; i++) {
    let option = document.createElement("option");
    select.appendChild(option);
    option.innerText = key[i];
  }
}

btn.addEventListener("click", async function () {
  try {
    let selected = select.value;
    console.log(select);
    //https://dog.ceo/api/breed/affenpinscher/images/random
    let res = await axios.get(
      `https://dog.ceo/api/breed/${select.value}/images/random`
    );

    image.src = res.data.message;
  } catch (error) {
    console.log(error);
  }
});

getBreedList();
