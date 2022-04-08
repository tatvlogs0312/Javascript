const btn = document.getElementById("btn-random");
const img = document.querySelector(".image img");

btn.addEventListener("click", async function () {
  try {
    //Bước 1 : Gọi api
    //Cách 1: Sử dụng fetch API mặc định
    
    //Cách 2: Sử dụng axios
    let res = await axios.get("https://dog.ceo/api/breeds/image/random")
    
    //Bước 2 : Lấy kết quả từ api để gắn link cho image
    img.src = res.data.message

  } catch (error) {
      alert(error.response.data.message)
  }
});
