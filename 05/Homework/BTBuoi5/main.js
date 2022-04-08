const btn = document.getElementById("btn");
const image = document.getElementById("image");
const select = document.getElementById("breed-list");
const subBreeds = document.querySelector(".sub_breeds-list");
const list = document.querySelector(".list");

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
  const key = Object.keys(breeds);
  for (let i = 0; i < key.length; i++) {
    const option = document.createElement("option");
    select.appendChild(option);
    option.innerText = key[i];
  }  
}

btn.addEventListener("click" , async function() {
  try {
    // Gọi API để lấy danh sách giống loài
    let res1 = await axios.get(`https://dog.ceo/api/breed/${select.value}/list`);
    // Sau khi có data thì hiển thị kết quả trên giao diện
    console.log(res1.data.message);
    renderSubBreed(res1.data.message);
  } catch (error) {
    console.log(error);
  }
})

function renderSubBreed(subBreeds) {
  const li = document.querySelectorAll(".li")
  if(li){
    list.innerHTML = "";
    image.src = "";
  }
  if(subBreeds.length == 0){
    list.innerHTML = "<h3>Không có sub breed</h3>"
    image.src = "";
  }
  for (let i = 0; i < subBreeds.length; i++) {
    const li = document.createElement("li");
    list.appendChild(li);
    li.className = "li";
    li.innerText = subBreeds[i];
    li.onclick = async function(){
      try {
        // Gọi API để lấy danh sách giống loài
        //https://dog.ceo/api/breed/hound/afghan/images/random
        let res2 = await axios.get(`https://dog.ceo/api/breed/${select.value}/${subBreeds[i]}/images/random`);
        // Sau khi có data thì hiển thị kết quả trên giao diện
        console.log(res2.data.message);
        image.src = res2.data.message;
      } catch (error) {
        console.log(error);
      }
    }    
  }  
}

getBreedList();
